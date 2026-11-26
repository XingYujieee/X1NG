"""
Drive textures — tileable surface textures generated with numpy (no downloads),
for the ground (splatted by biome) and the buildings (sampled in world space).

    python3 assets/tools/drive_textures.py   → media/drive/tex/albedo.webp, normal.webp (5×4 atlases of 512² tiles)
                                               media/drive/tex/leaf_*.webp (leaf cards, RGBA)

Layer order must match LAYERS in assets/js/drive/textures.js.
"""
import os, math
import numpy as np
from PIL import Image, ImageDraw, ImageFilter

ROOT = os.path.abspath(os.path.join(os.path.dirname(__file__), '..', '..'))
OUT = os.path.join(ROOT, 'media', 'drive', 'tex')
os.makedirs(OUT, exist_ok=True)
N = 512
rng = np.random.default_rng(11)

# ---------------------------------------------------------------- helpers (all periodic)
def fnoise(beta=2.0, seed=0, n=N, lo=1.0):
    r = np.random.default_rng(seed)
    w = r.standard_normal((n, n))
    fy = np.fft.fftfreq(n)[:, None]; fx = np.fft.fftfreq(n)[None, :]
    f = np.sqrt(fx * fx + fy * fy) * n
    f[0, 0] = 1
    filt = 1.0 / np.maximum(f, lo) ** (beta / 2)
    filt[0, 0] = 0
    out = np.real(np.fft.ifft2(np.fft.fft2(w) * filt))
    out -= out.min(); out /= out.max() + 1e-9
    return out

def norm01(a):
    a = a - a.min(); return a / (a.max() + 1e-9)

def voronoi(npts, seed=0, n=N, jitter=1.0, grid=None):
    r = np.random.default_rng(seed)
    if grid:
        gx, gy = grid
        pts = np.array([[(i + 0.5 + (r.random() - 0.5) * jitter) / gx, (j + 0.5 + (r.random() - 0.5) * jitter) / gy] for j in range(gy) for i in range(gx)])
    else:
        pts = r.random((npts, 2))
    ys, xs = np.mgrid[0:n, 0:n] / n
    f1 = np.full((n, n), 9.0); f2 = np.full((n, n), 9.0); idx = np.zeros((n, n), int)
    for k, (px, py) in enumerate(pts):
        dx = np.abs(xs - px); dx = np.minimum(dx, 1 - dx)
        dy = np.abs(ys - py); dy = np.minimum(dy, 1 - dy)
        d = np.sqrt(dx * dx + dy * dy)
        m = d < f1
        f2 = np.where(m, f1, np.minimum(f2, d)); idx = np.where(m, k, idx); f1 = np.where(m, d, f1)
    return f1, f2, idx, len(pts)

def warp(a, wx, wy, amt):
    n = a.shape[0]
    ys, xs = np.mgrid[0:n, 0:n]
    sx = (xs + (wx - 0.5) * amt * n).astype(int) % n
    sy = (ys + (wy - 0.5) * amt * n).astype(int) % n
    return a[sy, sx]

def normal_from_height(h, strength=4.0):
    dx = (np.roll(h, -1, 1) - np.roll(h, 1, 1)) * 0.5 * strength
    dy = (np.roll(h, -1, 0) - np.roll(h, 1, 0)) * 0.5 * strength
    nz = np.ones_like(h)
    l = np.sqrt(dx * dx + dy * dy + nz * nz)
    # OpenGL convention (green up): y gradient flipped because image rows go down
    n = np.stack([-dx / l, dy / l, nz / l], -1)
    return ((n * 0.5 + 0.5) * 255).clip(0, 255).astype(np.uint8)

def colorize(t, stops):
    """t in 0..1 → rgb from [(pos, (r,g,b)), …]"""
    t = np.clip(t, 0, 1)
    out = np.zeros(t.shape + (3,))
    for c in range(3):
        out[..., c] = np.interp(t, [s[0] for s in stops], [s[1][c] for s in stops])
    return out

def to8(rgb): return np.clip(rgb, 0, 255).astype(np.uint8)

def strokes(count, length, width, colors, seed, angle_spread=0.6, up=True, n=N, alpha=False, bg=None):
    """wrapped strokes (blades, fibres) drawn into rgb + height images"""
    r = np.random.default_rng(seed)
    img = Image.new('RGB', (n, n), bg or (0, 0, 0)); hgt = Image.new('L', (n, n), 0)
    di, dh = ImageDraw.Draw(img), ImageDraw.Draw(hgt)
    for _ in range(count):
        x, y = r.random() * n, r.random() * n
        a = (-math.pi / 2 if up else 0) + (r.random() - 0.5) * angle_spread * 2
        L = length * (0.5 + r.random())
        x2, y2 = x + math.cos(a) * L, y + math.sin(a) * L
        c = colors[r.integers(len(colors))]
        k = 0.75 + r.random() * 0.5
        col = tuple(int(min(255, v * k)) for v in c)
        hv = int(110 + r.random() * 145)
        for ox in (-n, 0, n):
            for oy in (-n, 0, n):
                di.line([(x + ox, y + oy), (x2 + ox, y2 + oy)], fill=col, width=width)
                dh.line([(x + ox, y + oy), (x2 + ox, y2 + oy)], fill=hv, width=width)
    return np.asarray(img).astype(float), np.asarray(hgt).astype(float) / 255

# ---------------------------------------------------------------- layers
def grass(dry=False):
    base = fnoise(2.2, 1)
    soil = colorize(base, [(0, (70, 58, 38)), (1, (98, 84, 56))] if not dry else [(0, (120, 98, 60)), (1, (150, 126, 82))])
    greens = [(78, 120, 52), (92, 138, 58), (64, 104, 44), (110, 150, 66), (84, 126, 70)] if not dry else [(186, 160, 92), (170, 142, 78), (204, 182, 110), (150, 130, 70), (196, 170, 100)]
    rgb, h = strokes(9000, 22, 2, greens, 3 if not dry else 4, 0.7, bg=(0, 0, 0))
    mask = (h > 0)[..., None]
    out = np.where(mask, rgb, soil)
    patch = fnoise(2.6, 5)[..., None]
    out = out * (0.82 + patch * 0.32)
    h = np.maximum(h, base * 0.25)
    return out, normal_from_height(h, 3.0)

def sand():
    g = fnoise(1.0, 7) * 0.25 + fnoise(2.4, 8) * 0.75
    wx, wy = fnoise(3, 9), fnoise(3, 10)
    ys, xs = np.mgrid[0:N, 0:N] / N
    rip = np.sin((xs * 14 + (wx - 0.5) * 2.2) * 2 * math.pi)
    rip = warp(rip, wx, wy, 0.06)
    h = rip * 0.35 + g * 0.5 + fnoise(0.2, 12) * 0.15
    rgb = colorize(norm01(g * 0.7 + rip * 0.15 + 0.2), [(0, (196, 164, 116)), (0.5, (222, 192, 142)), (1, (238, 214, 168))])
    speck = (np.random.default_rng(13).random((N, N)) > 0.985)[..., None]
    rgb = np.where(speck, rgb * 0.7, rgb)
    return rgb, normal_from_height(norm01(h), 2.5)

def redrock():
    ys, xs = np.mgrid[0:N, 0:N] / N
    w = fnoise(2.6, 21); w2 = fnoise(3.0, 25)
    strata = np.sin((ys * 7 + (w - 0.5) * 1.4) * 2 * math.pi) * 0.5 + 0.5
    fine = np.sin((ys * 46 + (w2 - 0.5) * 3) * 2 * math.pi) * 0.5 + 0.5
    g = fnoise(2.4, 23)
    t = strata * 0.55 + fine * 0.15 + g * 0.3
    rgb = colorize(t, [(0, (150, 70, 46)), (0.35, (192, 100, 64)), (0.6, (224, 146, 96)), (0.8, (206, 122, 80)), (1, (236, 186, 140))])
    ridged = 1 - np.abs(fnoise(3.2, 24) * 2 - 1)
    cr = np.clip((ridged - 0.86) * 9, 0, 1)
    rgb *= (1 - 0.35 * cr)[..., None]
    h = t * 0.5 + fine * 0.2 - cr * 0.3 + g * 0.2
    return rgb, normal_from_height(norm01(h), 5.0)

def rock():
    g = fnoise(2.5, 32); g2 = fnoise(2.8, 34)
    ridged = 1 - np.abs(fnoise(3.2, 31) * 2 - 1)
    cr = np.clip((ridged - 0.84) * 7, 0, 1)
    ys = np.mgrid[0:N, 0:N][0] / N
    lay = np.sin((ys * 5 + (g2 - 0.5) * 1.5) * 2 * math.pi) * 0.5 + 0.5
    t = g * 0.55 + lay * 0.25 + g2 * 0.2
    rgb = colorize(t, [(0, (84, 80, 76)), (0.5, (124, 118, 110)), (1, (170, 162, 150))])
    rgb *= (1 - 0.45 * cr)[..., None]
    lich = (fnoise(2.6, 35) > 0.72)[..., None]
    rgb = np.where(lich, rgb * np.array([0.95, 1.02, 0.85]), rgb)
    h = g * 0.5 + lay * 0.2 - cr * 0.4 + fnoise(0.8, 36) * 0.15
    return rgb, normal_from_height(norm01(h), 6.0)

def snow():
    g = fnoise(2.4, 41)
    rgb = colorize(g, [(0, (214, 222, 236)), (1, (248, 250, 255))])
    sp = (np.random.default_rng(42).random((N, N)) > 0.996)[..., None]
    rgb = np.where(sp, np.array([255, 255, 255]), rgb)
    return rgb, normal_from_height(g * 0.6 + fnoise(1.0, 43) * 0.4, 2.0)

def dirt():
    g = fnoise(2.0, 51); fine = fnoise(0.6, 54)
    f1, f2, idx, n = voronoi(380, 52)
    pt = np.random.default_rng(53).random(n)[idx]
    psize = 30 + pt * 70
    peb = np.clip(1 - f1 * psize, 0, 1)
    rgb = colorize(g * 0.8 + fine * 0.2, [(0, (100, 82, 60)), (1, (146, 122, 92))])
    pc = colorize(np.random.default_rng(55).random(n)[idx], [(0, (92, 78, 62)), (0.5, (118, 102, 82)), (1, (140, 124, 100))])
    m = ((peb > 0.15) & (pt > 0.7))[..., None]
    rgb = np.where(m, pc * (0.75 + 0.35 * peb[..., None]), rgb)
    xs = np.arange(N) / N
    rut = (np.exp(-((xs - 0.3) ** 2) / 0.004) + np.exp(-((xs - 0.7) ** 2) / 0.004))[None, :]
    h = g * 0.3 + fine * 0.2 + peb * 0.6 * (pt > 0.7)
    return rgb, normal_from_height(norm01(h), 4.0)

def blocks(bw, bh, base, var, mortar_col, joint, seed, chip=0.6, rough=1.0):
    """staggered masonry: bw×bh blocks per tile"""
    ys, xs = np.mgrid[0:N, 0:N] / N
    r = np.random.default_rng(seed)
    row = np.floor(ys * bh)
    off = (row % 2) * 0.5 + r.random(int(bh))[row.astype(int)] * 0.2
    u = (xs * bw + off) % bw
    v = ys * bh
    cu, cv = np.floor(u), np.floor(v)
    fu, fv = u - cu, v - cv
    w = fnoise(2.2, seed + 1)
    d = np.minimum(np.minimum(fu, 1 - fu) / bh * bw * 0.0 + np.minimum(fu, 1 - fu) * (1 / bw), np.minimum(fv, 1 - fv) * (1 / bh))
    d = d + (w - 0.5) * 0.004 * chip
    j = np.clip((d - joint) / 0.006, 0, 1)
    cid = (cu.astype(int) * 131 + cv.astype(int) * 71) % 997
    tint = np.random.default_rng(seed + 2).random(997)[cid]
    g = fnoise(1.6, seed + 3)
    t = np.clip(0.5 + (tint - 0.5) * var + (g - 0.5) * 0.35 * rough, 0, 1)
    rgb = colorize(t, base)
    rgb = rgb * j[..., None] + np.array(mortar_col)[None, None, :] * (1 - j[..., None])
    bevel = np.clip(d / (joint + 0.02), 0, 1)
    h = bevel * 0.7 + g * 0.3 * rough
    return rgb, normal_from_height(h, 5.0)

def plaster(base, seed):
    g = fnoise(2.0, seed); f = fnoise(1.2, seed + 1)
    t = g * 0.7 + f * 0.3
    rgb = colorize(t, base)
    ys = np.arange(N)[:, None] / N
    streak = fnoise(3.0, seed + 2)
    streak = np.repeat(streak[:1, :], N, 0) * (0.5 + 0.5 * ys)
    rgb *= (1 - 0.1 * streak)[..., None]
    return rgb, normal_from_height(f * 0.6 + g * 0.4, 1.6)

def tiles():
    """barrel roof tiles: columns of half-cylinders, overlapping courses (grey, tinted by material)"""
    ys, xs = np.mgrid[0:N, 0:N] / N
    cols, rows = 8, 6
    u = (xs * cols) % 1
    v = (ys * rows) % 1
    prof = np.cos((u - 0.5) * math.pi)            # rounded tile
    lap = np.clip(v * 1.1, 0, 1) ** 0.6           # each course rises toward its lower edge
    edge = np.clip((1 - v) * 14, 0, 1)
    h = prof * 0.65 + lap * 0.35
    h = h * edge
    g = fnoise(2.0, 61)
    t = 0.55 + prof * 0.3 - (1 - edge) * 0.4 + (g - 0.5) * 0.15
    rgb = colorize(t, [(0, (60, 60, 60)), (1, (235, 235, 235))])
    return rgb, normal_from_height(h, 7.0)

def wood():
    ys, xs = np.mgrid[0:N, 0:N] / N
    planks = 6
    pid = np.floor(xs * planks)
    off = np.random.default_rng(71).random(planks)[pid.astype(int)]
    grain = np.sin((ys * 3 + off * 5 + fnoise(2.8, 72) * 0.5) * 2 * math.pi * 6) * 0.5 + 0.5
    gap = np.clip(np.minimum((xs * planks) % 1, 1 - (xs * planks) % 1) * 60, 0, 1)
    t = grain * 0.4 + off * 0.3 + fnoise(2.0, 73) * 0.3
    rgb = colorize(t, [(0, (90, 90, 90)), (1, (220, 220, 220))]) * gap[..., None]
    return rgb, normal_from_height(grain * 0.3 + gap * 0.7, 3.0)

def marble():
    w = fnoise(2.2, 81)
    vein = np.abs(np.sin((np.mgrid[0:N, 0:N][1] / N * 3 + w * 2.5) * math.pi * 2))
    vein = 1 - np.clip(1 - vein, 0, 1) ** 8
    t = 0.85 + fnoise(1.6, 82) * 0.15
    rgb = colorize(t * vein, [(0, (150, 150, 150)), (1, (245, 245, 245))])
    return rgb, normal_from_height(fnoise(1.0, 83) * 0.3, 1.0)

def concrete():
    g = fnoise(1.8, 91)
    ys, xs = np.mgrid[0:N, 0:N] / N
    form = (np.abs(((ys * 4) % 1) - 0.5) > 0.495) * 0.15 + (np.random.default_rng(92).random((N, N)) > 0.995) * 0.3
    t = 0.6 + (g - 0.5) * 0.35 - form
    rgb = colorize(t, [(0, (90, 90, 90)), (1, (230, 230, 230))])
    return rgb, normal_from_height(g * 0.4 + (1 - form) * 0.6, 2.0)

def curtain():
    """curtain wall: 4×5 panes with mullions; panes slightly varied (reflections), frames light"""
    ys, xs = np.mgrid[0:N, 0:N] / N
    cx, cy = 4, 5
    u, v = (xs * cx) % 1, (ys * cy) % 1
    frame = ((np.minimum(u, 1 - u) < 0.04) | (np.minimum(v, 1 - v) < 0.05)).astype(float)
    cell = (np.floor(xs * cx) * 7 + np.floor(ys * cy) * 13) % 17
    pane = 0.35 + np.random.default_rng(101).random(17)[cell.astype(int)] * 0.25 + (1 - v) * 0.15
    t = pane * (1 - frame) + 0.92 * frame
    rgb = colorize(t, [(0, (40, 40, 40)), (1, (235, 235, 235))])
    h = frame * 0.8
    return rgb, normal_from_height(h, 5.0)

def bark():
    ys, xs = np.mgrid[0:N, 0:N] / N
    w = fnoise(2.6, 111)
    ridges = np.abs(np.sin((xs * 10 + w * 0.8) * math.pi))
    cracks = np.clip(ridges * 2.2 - 0.3, 0, 1)
    g = fnoise(1.6, 112)
    t = cracks * 0.6 + g * 0.4
    rgb = colorize(t, [(0, (45, 40, 36)), (1, (210, 200, 190))])
    return rgb, normal_from_height(cracks * 0.8 + g * 0.2, 6.0)

def hay():
    rgb, h = strokes(7000, 40, 2, [(200, 170, 90), (220, 190, 110), (180, 150, 80), (230, 205, 130)], 121, 0.25, up=False, bg=(150, 120, 60))
    return rgb, normal_from_height(h, 3.0)

def paving():
    return blocks(4, 4, [(0, (140, 138, 132)), (1, (182, 178, 170))], 0.3, (104, 101, 96), 0.008, 131, rough=0.7)

LAYERS = [
    ('grass', lambda: grass()), ('drygrass', lambda: grass(True)), ('sand', sand), ('redrock', redrock), ('rock', rock), ('snow', snow),
    ('dirt', dirt), ('paving', paving),
    ('limestone', lambda: blocks(3, 5, [(0, (150, 150, 150)), (1, (235, 235, 235))], 0.5, (120, 120, 120), 0.008, 141, chip=1.0)),
    ('brick', lambda: blocks(6, 14, [(0, (120, 120, 120)), (1, (225, 225, 225))], 0.6, (205, 205, 205), 0.01, 151)),
    ('plaster', lambda: plaster([(0, (170, 170, 170)), (1, (240, 240, 240))], 161)),
    ('tiles', tiles), ('wood', wood), ('marble', marble), ('concrete', concrete), ('curtain', curtain), ('bark', bark),
    ('ashlar', lambda: blocks(2, 4, [(0, (160, 160, 160)), (1, (235, 235, 235))], 0.35, (110, 110, 110), 0.014, 171, rough=0.6)),
    ('hay', hay), ('stucco', lambda: plaster([(0, (195, 195, 195)), (1, (245, 245, 245))], 181)),
]

def main():
    cols, rows = 5, 4
    alb = Image.new('RGB', (cols * N, rows * N)); nor = Image.new('RGB', (cols * N, rows * N))
    for i, (name, fn) in enumerate(LAYERS):
        rgb, nm = fn()
        x, y = (i % cols) * N, (i // cols) * N
        alb.paste(Image.fromarray(to8(rgb)), (x, y)); nor.paste(Image.fromarray(nm), (x, y))
        print('layer', i, name)
    alb.save(os.path.join(OUT, 'albedo.webp'), quality=88, method=6)
    nor.save(os.path.join(OUT, 'normal.webp'), quality=84, method=6)
    leaves()

# ---------------------------------------------------------------- leaf cards (RGBA)
# Each card is a spray: a twig with side twigs, leaves on petioles. Every leaf is shaded
# (lit side, darker base, midrib), back leaves are darker and cooler, and the colour is bled
# into the transparent pixels so mipmaps don't grow dark fringes.
CS = 1024   # drawn at 2× and downsampled

def shade_leaf(canvas, pts, base, depth, light=(-0.6, -0.8), rib=True, rib_end=None):
    xs = [p[0] for p in pts]; ys = [p[1] for p in pts]
    x0, y0 = int(min(xs)) - 2, int(min(ys)) - 2; x1, y1 = int(max(xs)) + 3, int(max(ys)) + 3
    w, h = max(2, x1 - x0), max(2, y1 - y0)
    m = Image.new('L', (w, h), 0); ImageDraw.Draw(m).polygon([(px - x0, py - y0) for px, py in pts], fill=255)
    yy, xx = np.mgrid[0:h, 0:w].astype(np.float32)
    cx, cy = np.mean(xs) - x0, np.mean(ys) - y0
    rr = max(w, h) * 0.5
    t = ((xx - cx) * light[0] + (yy - cy) * light[1]) / rr          # -1 shadow side … 1 lit side
    k = (0.82 + 0.22 * t) * (0.62 + 0.38 * depth)
    col = np.array(base, np.float32)[None, None, :] * k[..., None]
    col = col * (1 - 0.18 * (1 - depth)) + np.array([30, 45, 70], np.float32) * 0.18 * (1 - depth)   # back leaves cooler
    rgba = np.dstack([np.clip(col, 0, 255), np.array(m, np.float32)]).astype(np.uint8)
    leaf = Image.fromarray(rgba, 'RGBA')
    if rib:
        d = ImageDraw.Draw(leaf)
        e = rib_end or pts[len(pts) // 2]
        d.line([(pts[0][0] - x0, pts[0][1] - y0), (e[0] - x0, e[1] - y0)], fill=tuple(int(min(255, v * 1.12 * (0.62 + 0.38 * depth))) for v in base) + (255,), width=2)
    canvas.alpha_composite(leaf, (x0, y0))

def bleed(img, it=24):
    """push leaf colours out into the transparent area (alpha unchanged)"""
    a = np.array(img).astype(np.float32)
    rgb, al = a[..., :3], a[..., 3]
    w = (al > 8).astype(np.float32)
    acc = rgb * w[..., None]
    for _ in range(it):
        sm = sum(np.roll(np.roll(acc, dy, 0), dx, 1) for dy in (-1, 0, 1) for dx in (-1, 0, 1))
        sw = sum(np.roll(np.roll(w, dy, 0), dx, 1) for dy in (-1, 0, 1) for dx in (-1, 0, 1))
        grow = (w == 0) & (sw > 0)
        if not grow.any(): break
        acc = np.where(grow[..., None], sm / np.maximum(sw, 1e-6)[..., None], acc); w = np.where(grow, 1.0, w)
    out = np.dstack([np.clip(np.where(w[..., None] > 0, acc, rgb), 0, 255), al]).astype(np.uint8)
    return Image.fromarray(out, 'RGBA')

def save_card(img, name):
    img = img.resize((512, 512), Image.LANCZOS)
    img = bleed(img)
    img.save(os.path.join(OUT, f'leaf_{name}.webp'), quality=90, method=6, alpha_quality=100)

def twig_tree(r, main_len=0.86, sides=6, side_len=0.46, spread=1.0, curve=0.15):
    """a spray skeleton in card space (0..1, base at the bottom centre). returns list of polylines with widths"""
    lines = []
    base = (0.5, 0.97)
    n = 24
    main = []
    bend = (r.random() - 0.5) * curve
    for i in range(n + 1):
        t = i / n
        main.append((base[0] + math.sin(t * 2.2) * bend, base[1] - t * main_len))
    lines.append((main, 4))
    for k in range(sides):
        t = 0.18 + 0.78 * k / max(1, sides - 1)
        side = 1 if k % 2 == 0 else -1
        p0 = main[int(t * n)]
        ang = -math.pi / 2 + side * spread * (1.1 - t * 0.5) + (r.random() - 0.5) * 0.25
        L = side_len * (1.15 - t * 0.7) * (0.8 + r.random() * 0.4)
        pts = [p0]
        for i in range(1, 9):
            u = i / 8
            a2 = ang - side * 0.25 * u
            pts.append((pts[-1][0] + math.cos(a2) * L / 8, pts[-1][1] + math.sin(a2) * L / 8))
        lines.append((pts, 2))
    return lines

def draw_twigs(d, lines, col=(118, 104, 84)):
    for pts, w in lines:
        P = [(x * CS, y * CS) for x, y in pts]
        for i in range(len(P) - 1):
            ww = max(1, int(w * (1 - i / len(P) * 0.7)))
            d.line([P[i], P[i + 1]], fill=col + (255,), width=ww)

def nodes_on(lines, every=0.035, start=0.1):
    out = []
    for pts, w in lines:
        L = 0
        for i in range(len(pts) - 1):
            (x0, y0), (x1, y1) = pts[i], pts[i + 1]
            seg = math.hypot(x1 - x0, y1 - y0)
            ang = math.atan2(y1 - y0, x1 - x0)
            s = 0.0
            while s < seg:
                if L + s > start * (0.5 if w < 4 else 1): out.append((x0 + (x1 - x0) * s / seg, y0 + (y1 - y0) * s / seg, ang, (L + s)))
                s += every
            L += seg
    return out

def broadleaf_card(name, shape, colors, seed, size=0.07, every=0.045, petiole=0.03, sides=6, side_len=0.42, extra=None):
    r = np.random.default_rng(seed)
    img = Image.new('RGBA', (CS, CS), (0, 0, 0, 0)); d = ImageDraw.Draw(img)
    lines = twig_tree(r, sides=sides, side_len=side_len)
    leaves = []
    for (x, y, ang, L) in nodes_on(lines, every):
        for side in (1, -1):
            if r.random() < 0.15: continue
            a = ang + side * (0.9 + r.random() * 0.5)
            px, py = x + math.cos(a) * petiole, y + math.sin(a) * petiole
            s = size * (0.75 + r.random() * 0.5)
            leaves.append((r.random(), x, y, px, py, a, s))
    leaves.sort(key=lambda l: l[0])
    draw_twigs(d, lines)
    for depth, x, y, px, py, a, s in leaves:
        c = colors[r.integers(len(colors))]
        d.line([(x * CS, y * CS), (px * CS, py * CS)], fill=(110, 112, 70, 255), width=2)
        pts = shape(px * CS, py * CS, s * CS, a)
        shade_leaf(img, pts, c, 0.35 + 0.65 * depth)
    if extra: extra(img, r)
    save_card(img, name)

def rot_pts(pts, x, y, rot):
    c, s = math.cos(rot), math.sin(rot)
    return [(x + px * c - py * s, y + px * s + py * c) for px, py in pts]

# leaf outlines, pointing along +x from the petiole (first point = base)
def oval(x, y, s, rot):
    pts = [(0, 0)] + [(s * (1 - math.cos(t)) , math.sin(t) * s * 0.36 * (1 - 0.3 * (1 - math.cos(t)) / 2)) for t in np.linspace(0.15, math.pi - 0.1, 9)]
    pts += [(s * 2, 0)] + [(px, -py) for px, py in reversed(pts[1:])]
    return rot_pts([(px * 0.5, py) for px, py in pts], x, y, rot)
def fan(x, y, s, rot):      # ginkgo: a fan with a notch
    pts = [(0, 0)]
    for k in range(15):
        a = -0.95 + k * (1.9 / 14)
        rr = s * (1.0 - 0.18 * math.exp(-(a / 0.12) ** 2)) * (0.96 + 0.04 * math.sin(k * 2.3))
        pts.append((math.cos(a) * rr, math.sin(a) * rr))
    return rot_pts(pts, x, y, rot)
def lobed(x, y, s, rot):    # plane tree: palmate, five pointed lobes
    pts = [(0, 0)]
    for k in range(41):
        a = -2.2 + k * (4.4 / 40)
        lobe = abs(math.cos(a * 5 / 2 * 1.0)) ** 0.6
        rr = s * (0.5 + 0.5 * lobe)
        pts.append((s * 0.45 + math.cos(a) * rr * 0.8, math.sin(a) * rr * 0.8))
    return rot_pts(pts, x, y, rot)
def petal(x, y, s, rot):
    pts = []
    for k in range(25):
        a = k / 25 * math.tau
        rr = s * (0.45 + 0.55 * abs(math.cos(a * 2.5)) ** 0.5)
        pts.append((math.cos(a) * rr, math.sin(a) * rr))
    return rot_pts(pts, x, y, rot)

def fir_card():
    """a flat fir spray: main twig, alternate side twigs, short dense needles; lighter new growth at the tips"""
    r = np.random.default_rng(5)
    img = Image.new('RGBA', (CS, CS), (0, 0, 0, 0)); d = ImageDraw.Draw(img)
    lines = twig_tree(r, main_len=0.9, sides=12, side_len=0.5, spread=0.95, curve=0.1)
    needles = []
    for pts, w in lines:
        tot = sum(math.hypot(pts[i + 1][0] - pts[i][0], pts[i + 1][1] - pts[i][1]) for i in range(len(pts) - 1))
        for (x, y, ang, L) in nodes_on([(pts, w)], 0.006, 0.0):
            tip = L / max(tot, 1e-3)
            for side in (1, -1):
                a = ang + side * (0.75 + r.random() * 0.35)
                l = (0.028 + r.random() * 0.012) * (1.1 - 0.4 * tip)
                needles.append((r.random(), x, y, a, l, tip))
    draw_twigs(d, lines, (96, 84, 66))
    needles.sort(key=lambda n: n[0])
    for depth, x, y, a, l, tip in needles:
        base = np.array([58, 104, 72]) * (1 - tip) + np.array([112, 156, 96]) * tip
        k = 0.62 + 0.38 * depth
        col = tuple(int(v * k) for v in base) + (255,)
        d.line([(x * CS, y * CS), ((x + math.cos(a) * l) * CS, (y + math.sin(a) * l) * CS)], fill=col, width=5)
    save_card(img, 'fir')

def blossom_extra(img, r):
    d = ImageDraw.Draw(img)
    for k in range(70):
        x, y = 0.15 + r.random() * 0.7, 0.08 + r.random() * 0.75
        s = (0.018 + r.random() * 0.012) * CS
        depth = r.random()
        c = [(246, 196, 212), (252, 220, 230), (238, 176, 198), (255, 236, 242)][r.integers(4)]
        for p in range(5):
            a = p / 5 * math.tau + r.random()
            pts = rot_pts([(0, 0), (s * 0.5, -s * 0.38), (s * 1.05, -s * 0.2), (s * 1.1, s * 0.2), (s * 0.5, s * 0.38)], x * CS, y * CS, a)
            shade_leaf(img, pts, c, 0.55 + 0.45 * depth, rib=False)
        d.ellipse([x * CS - s * 0.22, y * CS - s * 0.22, x * CS + s * 0.22, y * CS + s * 0.22], fill=(236, 200, 90, 255))

def frond():
    """a palm frond card: a curved rachis with long leaflets that droop; shaded, with split tips"""
    img = Image.new('RGBA', (CS, CS), (0, 0, 0, 0)); d = ImageDraw.Draw(img)
    r = np.random.default_rng(5)
    rach = [(0.04 + t * 0.92, 0.5 + math.sin(t * 2.2) * 0.05) for t in np.linspace(0, 1, 60)]
    items = []
    for k in range(70):
        t = k / 70
        x, y = rach[int(t * 59)]
        L = (0.36 * math.sin(t * math.pi) ** 0.7 + 0.05)
        for side in (-1, 1):
            if r.random() < 0.08: continue
            ang = side * (1.15 - t * 0.45) + (r.random() - 0.5) * 0.18
            items.append((r.random(), x, y, ang, L * (0.85 + r.random() * 0.3), side))
    items.sort(key=lambda i: i[0])
    for depth, x, y, ang, L, side in items:
        ex, ey = x + math.cos(ang) * L * 0.55, y + math.sin(ang) * L
        wv = 0.011
        pts = [(x * CS, y * CS), ((x + ex) / 2 * CS + side * 3, (y + ey) / 2 * CS - wv * CS), (ex * CS, ey * CS), ((x + ex) / 2 * CS - side * 3, (y + ey) / 2 * CS + wv * CS)]
        c = (int(70 + r.random() * 25), int(120 + r.random() * 40), int(48 + r.random() * 15))
        shade_leaf(img, pts, c, 0.45 + 0.55 * depth, rib_end=pts[2])
    d.line([(x * CS, y * CS) for x, y in rach], fill=(120, 124, 70, 255), width=8)
    save_card(img, 'palm')

def leaves():
    broadleaf_card('ginkgo', fan, [(246, 202, 58), (236, 184, 44), (252, 218, 92), (222, 170, 40), (232, 196, 80)], 1, size=0.07, every=0.05, petiole=0.04, sides=5)
    broadleaf_card('plane', lobed, [(122, 150, 66), (140, 160, 70), (104, 134, 58), (158, 158, 76)], 2, size=0.075, every=0.06, petiole=0.04, sides=5)
    broadleaf_card('broad', oval, [(84, 128, 60), (98, 142, 66), (70, 112, 52), (112, 150, 70)], 3, size=0.06, every=0.032, petiole=0.015, sides=7)
    broadleaf_card('poplar', oval, [(126, 168, 74), (110, 152, 66), (142, 180, 84), (96, 140, 62)], 4, size=0.05, every=0.03, petiole=0.025, sides=7, side_len=0.32)
    broadleaf_card('blossom', oval, [(96, 132, 70), (110, 146, 76)], 6, size=0.035, every=0.07, petiole=0.012, sides=6, extra=blossom_extra)
    fir_card()
    frond()

if __name__ == '__main__':
    import sys
    leaves() if 'leaves' in sys.argv else main()
