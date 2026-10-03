#!/usr/bin/env python3
"""
X1NG corridor film — 2.5D zoom-through renderer.

Each photo becomes a small 3D scene: a monocular depth map (Depth Anything V2)
turns every pixel into a point at depth Z. The camera dollies toward the person,
so near rocks fly past faster than far mountains (real parallax), and the next
photograph opens as a portal at the person's depth, occluded by anything nearer.
When the person fills the frame, the camera is already inside the next scene,
standing at the same spot. The last scene loops back into the first.

Output: raw RGB frames piped into ffmpeg (a high-quality master), plus
build/timeline.json in oil-motion's schema.
"""
import json, math, subprocess, sys, os
import numpy as np, cv2

ROOT = os.path.dirname(os.path.abspath(__file__))

STOPS = [  # archive number, person anchor (0-1)
    (24, (0.51, 0.43)), (42, (0.361, 0.60)), (60, (0.488, 0.577)), (112, (0.675, 0.69)),
    (89, (0.489, 0.50)), (88, (0.519, 0.571)), (61, (0.49, 0.50)), (66, (0.42, 0.58)),
    (63, (0.525, 0.70)), (65, (0.55, 0.61)),
]
Z_NEST = 3.0
N_START = 1.15          # how far we zoom into the person before we are "inside" the next photo
Z_NEAR, Z_FAR = 1.0, 12.0
HOLD_DOLLY = 0.05     # gentle push-in while resting on a photo
SWAY = 0.022          # lateral camera orbit (fraction of image width) → parallax
SWAY_PERIOD = 8.0     # seconds


def load_layer(n, anchor, max_side):
    img = cv2.imread(f"{ROOT}/src/{n}.png", cv2.IMREAD_COLOR)
    h, w = img.shape[:2]
    if max(w, h) > max_side:
        s = max_side / max(w, h)
        img = cv2.resize(img, (round(w * s), round(h * s)), interpolation=cv2.INTER_AREA)
    h, w = img.shape[:2]
    d = cv2.imread(f"{ROOT}/depth/{n}.png", cv2.IMREAD_UNCHANGED).astype(np.float32) / 65535.0
    d = cv2.resize(d, (w, h), interpolation=cv2.INTER_CUBIC)
    d = cv2.GaussianBlur(d, (0, 0), max(1.0, w / 900))   # soften edges → fewer tearing artefacts
    inv = 1 / Z_FAR + np.clip(d, 0, 1) * (1 / Z_NEAR - 1 / Z_FAR)
    Z = (1.0 / inv).astype(np.float32)
    D = np.clip(d, 0, 1).astype(np.float32)
    # organic dissolve pattern (low-frequency noise), fixed per layer
    rng = np.random.default_rng(n)
    noise = cv2.resize(rng.random((9, 16)).astype(np.float32), (w, h), interpolation=cv2.INTER_CUBIC)
    noise = cv2.GaussianBlur(noise, (0, 0), w / 60)
    A = np.array([anchor[0] * w, anchor[1] * h], np.float32)
    # person depth: nearest-ish depth in a small window around the anchor
    r = max(3, int(w * 0.006))
    ax, ay = int(A[0]), int(A[1])
    Zp = float(np.percentile(Z[max(0, ay - r):ay + r, max(0, ax - r):ax + r], 30))
    b = max(4, int(0.03 * min(w, h)))
    Zedge = float(min(Z[:b].min(), Z[-b:].min(), Z[:, :b].min(), Z[:, -b:].min()))
    return dict(n=n, img=img, Z=Z, D=D, N=noise, A=A, Zp=Zp, Zedge=Zedge, w=w, h=h)


def rest_view(L, W, H, bias):
    """Screen scale and the on-screen anchor position when resting on layer L (cover fit)."""
    s = max(W / L["w"], H / L["h"])
    cx, cy = L["w"] / 2 + (L["A"][0] - L["w"] / 2) * bias, L["h"] / 2 + (L["A"][1] - L["h"] / 2) * bias
    hw, hh = W / 2 / s, H / 2 / s
    cx = min(L["w"] - hw, max(hw, cx)); cy = min(L["h"] - hh, max(hh, cy))
    a_screen = np.array([(L["A"][0] - cx) * s + W / 2, (L["A"][1] - cy) * s + H / 2], np.float32)
    return s, a_screen


def render_layer(L, M, sway_px, s_scr, a_scr, grid, t=None):
    """Backward-map the screen grid into layer L for anchor magnification M.
    Part of M is a real dolly (depth-dependent → parallax), the rest is a lens zoom,
    and the dolly never passes the nearest geometry, so nothing tears."""
    Zp = L["Zp"]
    if t is None:
        Md = max(1e-3, M) ** 0.45
        t = Zp * (1.0 - 1.0 / Md)
    t = min(t, 0.7 * Z_NEAR)
    Md = Zp / (Zp - t)
    Mz = M / Md
    scale = s_scr * Mz
    gx, gy = grid
    qx = L["A"][0] + (gx - a_scr[0]) / scale
    qy = L["A"][1] + (gy - a_scr[1]) / scale
    px, py = qx.copy(), qy.copy()
    base = 1.0 / max(Zp - t, 1e-3)
    for _ in range(4):
        Zs = cv2.remap(L["Z"], px, py, cv2.INTER_LINEAR, borderMode=cv2.BORDER_REPLICATE)
        denom = np.maximum(Zs - t, 1e-3)
        m = Zs / denom
        shift = sway_px * (Zp - t) * (1.0 / denom - base)
        px = L["A"][0] + (qx - L["A"][0] - shift) / m
        py = L["A"][1] + (qy - L["A"][1]) / m
    color = cv2.remap(L["img"], px, py, cv2.INTER_LINEAR, borderMode=cv2.BORDER_REPLICATE)
    D = cv2.remap(L["D"], px, py, cv2.INTER_LINEAR, borderMode=cv2.BORDER_REPLICATE)
    Nz = cv2.remap(L["N"], px, py, cv2.INTER_LINEAR, borderMode=cv2.BORDER_REFLECT_101)
    # feathered "inside the photo" mask
    fe = 0.04 * L["w"]
    inside = (np.clip(px / fe, 0, 1) * np.clip((L["w"] - px) / fe, 0, 1) *
              np.clip(py / fe, 0, 1) * np.clip((L["h"] - py) / fe, 0, 1)).astype(np.float32)
    return color.astype(np.float32), inside, D, Nz


def smoothstep(a, b, x):
    x = np.clip((x - a) / (b - a), 0, 1)
    return x * x * (3 - 2 * x)


def ease(f):  # symmetric ease with a little constant-speed middle so motion never fully stalls
    e = f * f * f * (f * (f * 6 - 15) + 10)
    return 0.85 * e + 0.15 * f


def frame_state(i, fps, hold_s, trans_s, n):
    """Continuous (float) frame index -> (photo k, transition progress f or None, hold progress, seconds)."""
    per = (hold_s + trans_s) * fps; hold = hold_s * fps
    k = int(math.floor(i / per)) % n; j = i - math.floor(i / per) * per
    if j < hold:
        return k, None, j / hold, i / fps
    return k, (j - hold) / (per - hold), 1.0, i / fps


def render_frame(layers, i, fps, W, H, bias, grid, hold_s, trans_s, sub=1):
    n = len(layers)
    acc = np.zeros((H, W, 3), np.float32)
    for sidx in range(sub):
        ii = i + ((sidx + 0.5) / sub - 0.5) * 0.9 if sub > 1 else i   # shutter ≈ 0.9 frame
        k, f, hp, tsec = frame_state(ii, fps, hold_s, trans_s, n)
        L = layers[k]
        sway = SWAY * math.sin(2 * math.pi * tsec / SWAY_PERIOD)
        sK, aK = rest_view(L, W, H, bias)
        if f is None:                                # resting on photo k: slow push-in + orbit
            M = 1.0 + HOLD_DOLLY * hp
            out, _, _, _ = render_layer(L, M, sway * L["w"], sK, aK, grid)
        else:
            Ln = layers[(k + 1) % n]
            sN, aN = rest_view(Ln, W, H, bias)
            g = ease(f)
            a = aK + (aN - aK) * g                  # shared person point glides across the screen
            Mk = (1 + HOLD_DOLLY) * Z_NEST ** g        # push into the current place
            tn = -0.35 * Ln["Zp"] * (1.0 - g)           # camera still dollying forward (parallax)
            # lens compensation so even the nearest edge geometry keeps covering the frame
            ze, zp = Ln["Zedge"], Ln["Zp"]
            m_edge = (ze / (ze - tn)) / (zp / (zp - tn))
            Mn = max(N_START ** (1.0 - g), 1.0 / m_edge)
            ck, ik, Dk, Nk = render_layer(L, Mk, sway * L["w"], sK, a, grid)
            cn, inn, _, _ = render_layer(Ln, Mn, sway * Ln["w"], sN, a, grid, t=tn)
            # depth sweep: the far world (sky, distant ridges) turns into the next place first,
            # the foreground and the person go last — like walking through a layered set
            T = -0.45 + 1.75 * smoothstep(0.06, 0.92, f)
            dist = np.sqrt((grid[0] - a[0]) ** 2 + (grid[1] - a[1]) ** 2) / (0.6 * math.hypot(W, H))
            # far things first, spreading outward from the person, with a soft organic edge
            far = (1.0 - Dk) - 0.38 * dist + (Nk - 0.5) * 0.12
            reveal = smoothstep(1.0 - T - 0.12, 1.0 - T + 0.12, far)
            # outside the incoming photo its edge pixels are stretched; only reveal them late
            reveal = reveal * np.maximum(inn, smoothstep(0.55, 0.95, f))
            reveal = np.maximum(reveal, smoothstep(0.9, 1.0, f))
            out = ck * (1 - reveal[..., None]) + cn * reveal[..., None]
        acc += out
    return np.clip(acc / sub, 0, 255).astype(np.uint8)


def main():
    import argparse
    ap = argparse.ArgumentParser()
    ap.add_argument("--w", type=int, default=1920); ap.add_argument("--h", type=int, default=1080)
    ap.add_argument("--fps", type=int, default=60)
    ap.add_argument("--hold", type=float, default=1.5); ap.add_argument("--trans", type=float, default=2.7)
    ap.add_argument("--start", type=int, default=0); ap.add_argument("--end", type=int, default=-1)
    ap.add_argument("--bias", type=float, default=0.35)
    ap.add_argument("--out", default="master.mkv")
    ap.add_argument("--png", default="")
    args = ap.parse_args()
    W, H = args.w, args.h
    layers = [load_layer(n, a, 4000 if W >= 1600 else 2800) for n, a in STOPS]
    total = round((args.hold + args.trans) * args.fps) * len(layers)
    end = total if args.end < 0 else min(total, args.end)
    gy, gx = np.mgrid[0:H, 0:W].astype(np.float32)
    grid = (gx, gy)
    if args.png:
        for i in range(args.start, end):
            fr = render_frame(layers, i, args.fps, W, H, args.bias, grid, args.hold, args.trans)
            cv2.imwrite(f"{args.png}/f{i:05d}.jpg", fr, [cv2.IMWRITE_JPEG_QUALITY, 90])
        return
    enc = subprocess.Popen(["ffmpeg", "-y", "-loglevel", "error", "-f", "rawvideo", "-pix_fmt", "bgr24", "-s", f"{W}x{H}",
                            "-r", str(args.fps), "-i", "-", "-c:v", "libx264", "-preset", "medium", "-crf", "12",
                            "-pix_fmt", "yuv420p", args.out], stdin=subprocess.PIPE)
    per = round((args.hold + args.trans) * args.fps)
    for i in range(args.start, end):
        j = i % per
        # motion-blur sub-samples only where the camera moves fast (middle of each transition)
        hold_frames = round(args.hold * args.fps)
        f = (j - hold_frames) / (per - hold_frames) if j >= hold_frames else None
        sub = 3 if (f is not None and 0.2 < f < 0.85) else 1
        fr = render_frame(layers, i, args.fps, W, H, args.bias, grid, args.hold, args.trans, sub)
        enc.stdin.write(fr.tobytes())
        if i % 60 == 0:
            print(f"{args.out}: frame {i}/{end}", flush=True)
    enc.stdin.close(); enc.wait()


if __name__ == "__main__":
    main()
