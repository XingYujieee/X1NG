/* ==========================================================================
   Drive — the stops. Each place is a small open-air gallery: a terrazzo
   platform in the place's own stone, a curved white wall on its north side,
   the place's name set on the wall like exhibition lettering, and its
   photographs hung as framed, matted prints with captions. Picture lights
   switch on one after another as you drive in; at night they stay softly on.
   ========================================================================== */
import * as THREE from '../../vendor/three.min.js';
import { instance } from './assets.js';
import { PLACES } from './terrain.js';
import { STOP_STYLE } from './places.js';
import { enhance } from './materials.js';

const ease = (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);
const clamp = (x, a, b) => Math.min(b, Math.max(a, x));
const R_IN = 5.0, R_OUT = 5.24, H = 3.1, BASE = 0.18, A0 = -1.32, A1 = 1.32;
const at = (a, r, y = 0) => new THREE.Vector3(Math.sin(a) * r, y, -Math.cos(a) * r);

/* a curved wall: inner and outer faces, top, and the two ends */
function arcWall(rIn, rOut, a0, a1, y0, y1, segs = 64) {
  const pos = [], nor = [], idx = [];
  const quad = (a, b, c, d, n) => { const i = pos.length / 3; [a, b, c, d].forEach((p, k) => { pos.push(p.x, p.y, p.z); const nn = n[k]; nor.push(nn.x, nn.y, nn.z); }); idx.push(i, i + 1, i + 2, i, i + 2, i + 3); };
  const up = new THREE.Vector3(0, 1, 0);
  for (let s = 0; s < segs; s++) {
    const a = a0 + (a1 - a0) * s / segs, b = a0 + (a1 - a0) * (s + 1) / segs;
    const nIa = at(a, -1), nIb = at(b, -1), nOa = at(a, 1), nOb = at(b, 1);
    quad(at(a, rIn, y0), at(a, rIn, y1), at(b, rIn, y1), at(b, rIn, y0), [nIa, nIa, nIb, nIb]);
    quad(at(b, rOut, y0), at(b, rOut, y1), at(a, rOut, y1), at(a, rOut, y0), [nOb, nOb, nOa, nOa]);
    quad(at(a, rIn, y1), at(a, rOut, y1), at(b, rOut, y1), at(b, rIn, y1), [up, up, up, up]);
  }
  const endN = (a, s) => { const v = new THREE.Vector3(Math.cos(a) * s, 0, Math.sin(a) * s); return [v, v, v, v]; };
  quad(at(a0, rOut, y0), at(a0, rOut, y1), at(a0, rIn, y1), at(a0, rIn, y0), endN(a0, -1));
  quad(at(a1, rIn, y0), at(a1, rIn, y1), at(a1, rOut, y1), at(a1, rOut, y0), endN(a1, 1));
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3)); g.setAttribute('normal', new THREE.Float32BufferAttribute(nor, 3)); g.setIndex(idx);
  return g;
}

function wallText(st, idx, total, style) {
  const W = 1100, Hh = 1300, c = document.createElement('canvas'); c.width = W; c.height = Hh;
  const x = c.getContext('2d');
  const P = PLACES[st.key];
  x.fillStyle = '#16171c'; x.textBaseline = 'top';
  x.font = '500 40px "Geist Mono", monospace'; x.fillText(`${String(idx + 1).padStart(2, '0')} — ${String(total).padStart(2, '0')}`, 40, 40);
  x.fillStyle = style.accent; x.fillRect(40, 110, 90, 10);
  x.fillStyle = '#16171c'; x.font = '600 172px Geist, sans-serif';
  const words = st.en.split(/\s+/); const lines = []; let line = '';
  for (const w of words) { const t = line ? `${line} ${w}` : w; if (x.measureText(t).width > W - 80 && line) { lines.push(line); line = w; } else line = t; }
  lines.push(line);
  let y = 170;
  for (const l of lines.slice(0, 2)) { x.fillText(l, 34, y, W - 70); y += 170; }
  x.font = '500 110px "PingFang SC", "Noto Sans SC", "Microsoft YaHei", sans-serif'; x.fillStyle = '#2a2b31'; x.fillText(st.zh, 40, y + 20);
  y += 190;
  x.font = '500 38px "Geist Mono", monospace'; x.fillStyle = '#5b5c63';
  x.fillText(P.lat !== '—' ? `${P.lat}   ${P.lon}` : 'ON THE ROAD', 40, y);
  x.font = '400 46px Geist, sans-serif'; x.fillStyle = '#2a2b31'; x.fillText(style.line, 40, y + 70, W - 80);
  x.font = '500 38px "Geist Mono", monospace'; x.fillStyle = '#5b5c63'; x.fillText(`${st.photos.length} PHOTOGRAPHS · ENTER 看照片`, 40, y + 150, W - 80);
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 8; return t;
}

function captionTex(i, ph) {
  const c = document.createElement('canvas'); c.width = 512; c.height = 120; const x = c.getContext('2d');
  x.fillStyle = '#f6f4ef'; x.fillRect(0, 0, 512, 120);
  x.fillStyle = '#16171c'; x.font = '500 26px "Geist Mono", monospace'; x.fillText(String(i + 1).padStart(2, '0'), 22, 46);
  x.font = '600 30px Geist, sans-serif'; x.fillText(ph.title || '', 80, 46, 410);
  x.fillStyle = '#5b5c63'; x.font = '400 26px "PingFang SC", "Noto Sans SC", sans-serif'; x.fillText(ph.zh || '', 80, 90, 410);
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 4; return t;
}

const poolTex = (() => {
  const c = document.createElement('canvas'); c.width = 128; c.height = 256; const x = c.getContext('2d');
  const g = x.createRadialGradient(64, 40, 4, 64, 110, 130);
  g.addColorStop(0, 'rgba(255,236,200,1)'); g.addColorStop(0.45, 'rgba(255,225,180,.45)'); g.addColorStop(1, 'rgba(255,220,170,0)');
  x.fillStyle = g; x.fillRect(0, 0, 128, 256);
  return new THREE.CanvasTexture(c);
})();

function floorTexture(idx) {
  const S = 1024, c = document.createElement('canvas'); c.width = c.height = S; const x = c.getContext('2d');
  x.strokeStyle = 'rgba(0,0,0,.14)'; x.lineWidth = 3;
  x.beginPath(); x.arc(S / 2, S / 2, S * 0.47, 0, Math.PI * 2); x.stroke();
  for (let k = 0; k < 96; k++) { const a = k / 96 * Math.PI * 2, r0 = S * 0.47, r1 = S * (k % 8 ? 0.458 : 0.44); x.beginPath(); x.moveTo(S / 2 + Math.cos(a) * r0, S / 2 + Math.sin(a) * r0); x.lineTo(S / 2 + Math.cos(a) * r1, S / 2 + Math.sin(a) * r1); x.stroke(); }
  x.fillStyle = 'rgba(0,0,0,.07)'; x.font = '600 280px Geist, sans-serif'; x.textAlign = 'center'; x.textBaseline = 'middle';
  x.fillText(String(idx + 1).padStart(2, '0'), S / 2, S * 0.64);
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 8; return t;
}

export function buildStops(scene, physics, lib, grid, stopData) {
  const loader = new THREE.TextureLoader();
  const stops = [];
  const valid = stopData.filter((s) => PLACES[s.key]);
  const wallMat = enhance(new THREE.MeshStandardMaterial({ color: '#f1eee7', roughness: 0.92, name: 'plaster' }), { kind: 'plaster', bump: 0.25 });
  const skirtMat = new THREE.MeshStandardMaterial({ color: '#1b1d24', roughness: 0.6 });
  const frameMat = new THREE.MeshStandardMaterial({ color: '#141519', roughness: 0.45 });
  const matMat = new THREE.MeshStandardMaterial({ color: '#f7f5f0', roughness: 0.95 });
  const lampMat = new THREE.MeshStandardMaterial({ color: '#16171c', roughness: 0.4, metalness: 0.3 });
  valid.forEach((st, si) => {
    const P = PLACES[st.key], style = STOP_STYLE[st.key] || STOP_STYLE.road, gy = grid.sample(P.x, P.z);
    const root = new THREE.Group(); root.position.set(P.x, gy, P.z); scene.add(root);
    const plat = instance(lib, 'platform');
    plat.children.forEach((m) => { m.material = enhance(m.material.clone(), { kind: 'terrazzo', name: 'terrazzo' }); m.material.color.set(style.plat); m.castShadow = false; });
    root.add(plat);
    physics.statics.cyl(P.x, gy + 0.05, P.z, 0.12, 6, 'stone');
    const floor = new THREE.Mesh(new THREE.CircleGeometry(5.9, 64), new THREE.MeshStandardMaterial({ map: floorTexture(si), transparent: true, roughness: 0.6, depthWrite: false, polygonOffset: true, polygonOffsetFactor: -2 }));
    floor.rotation.x = -Math.PI / 2; floor.position.y = BASE + 0.004; floor.receiveShadow = true; root.add(floor);
    const ringMat = new THREE.MeshStandardMaterial({ color: style.accent, emissive: style.accent, emissiveIntensity: 0.25, roughness: 0.35, metalness: 0.3 });
    const ring = new THREE.Mesh(new THREE.TorusGeometry(4.15, 0.05, 6, 140), ringMat);
    ring.rotation.x = -Math.PI / 2; ring.position.y = BASE + 0.01; root.add(ring);
    // the curved gallery wall, a dark skirting and an accent line near the top
    const wall = new THREE.Mesh(arcWall(R_IN, R_OUT, A0, A1, BASE, BASE + H), wallMat); wall.castShadow = true; wall.receiveShadow = true; root.add(wall);
    root.add(new THREE.Mesh(arcWall(R_IN - 0.012, R_OUT + 0.012, A0 - 0.002, A1 + 0.002, BASE, BASE + 0.16), skirtMat));
    root.add(new THREE.Mesh(arcWall(R_IN - 0.01, R_IN - 0.002, A0, A1, BASE + H - 0.09, BASE + H - 0.05), new THREE.MeshStandardMaterial({ color: style.accent, roughness: 0.5 })));
    for (let k = 0; k < 10; k++) {
      const a = A0 + (A1 - A0) * (k + 0.5) / 10, r = (R_IN + R_OUT) / 2, p = at(a, r);
      physics.statics.box(P.x + p.x, gy + BASE + 1.4, P.z + p.z, r * (A1 - A0) / 20 + 0.05, 1.4, 0.2, -a, 'stone');
    }
    // the place's name, set on the wall
    const textA = -1.02, tw = 2.3, th = 2.72;
    const tt = wallText(st, si, valid.length, style);
    const textMat = new THREE.MeshStandardMaterial({ map: tt, transparent: true, roughness: 0.9, emissive: '#ffffff', emissiveMap: tt, emissiveIntensity: 0, polygonOffset: true, polygonOffsetFactor: -2 });
    const text = new THREE.Mesh(new THREE.PlaneGeometry(tw, th), textMat);
    text.position.copy(at(textA, R_IN - 0.12, BASE + 1.62)); text.rotation.y = -textA; root.add(text);
    // the prints
    const N = Math.min(5, st.photos.length);
    const frames = [];
    for (let k = 0; k < N; k++) {
      const ph = st.photos[k], a = N === 1 ? 0.15 : -0.42 + (1.12 + 0.42) * k / (N - 1);
      const ar = ph.ratio || 1.5;
      let h = ar >= 1 ? 1.05 : 1.4, w = h * ar; if (w > 1.5) { w = 1.5; h = w / ar; }
      const g = new THREE.Group(); g.position.copy(at(a, R_IN - 0.07, BASE + 1.62)); g.rotation.y = -a; root.add(g);
      const inner = new THREE.Group(); g.add(inner);
      const frame = new THREE.Mesh(new THREE.BoxGeometry(w + 0.26, h + 0.26, 0.045), frameMat); frame.castShadow = true; inner.add(frame);
      const mat = new THREE.Mesh(new THREE.PlaneGeometry(w + 0.2, h + 0.2), matMat); mat.position.z = 0.024; inner.add(mat);
      const photoMat = new THREE.MeshBasicMaterial({ color: '#333' });
      loader.load(ph.s, (t) => { t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 8; photoMat.map = t; photoMat.color.set('#fff'); photoMat.needsUpdate = true; });
      const photo = new THREE.Mesh(new THREE.PlaneGeometry(w, h), photoMat); photo.position.z = 0.026; inner.add(photo);
      const cap = new THREE.Mesh(new THREE.PlaneGeometry(0.86, 0.2), new THREE.MeshStandardMaterial({ map: captionTex(k, ph), roughness: 0.9 }));
      cap.position.set(-(w + 0.26) / 2 + 0.43, -(h + 0.26) / 2 - 0.22, 0.012); g.add(cap);
      // picture light: an arm, a slim lamp, and the pool of light it throws on the wall
      const top = (h + 0.26) / 2;
      const arm = new THREE.Mesh(new THREE.BoxGeometry(0.03, 0.03, 0.34), lampMat); arm.position.set(0, top + 0.3, 0.14); g.add(arm);
      const lamp = new THREE.Mesh(new THREE.BoxGeometry(Math.min(0.9, w * 0.55), 0.05, 0.07), lampMat); lamp.position.set(0, top + 0.3, 0.32); g.add(lamp);
      const bulbMat = new THREE.MeshBasicMaterial({ color: '#fff1d8' });
      const bulb = new THREE.Mesh(new THREE.PlaneGeometry(Math.min(0.86, w * 0.53), 0.025), bulbMat); bulb.rotation.x = Math.PI / 2; bulb.position.set(0, top + 0.274, 0.32); g.add(bulb);
      const poolMat = new THREE.MeshBasicMaterial({ map: poolTex, transparent: true, opacity: 0, blending: THREE.AdditiveBlending, depthWrite: false, color: '#ffd9a6' });
      const pool = new THREE.Mesh(new THREE.PlaneGeometry(w + 1.1, h + 1.5), poolMat); pool.position.set(0, 0.05, -0.02); g.add(pool);
      frames.push({ inner, poolMat, bulbMat, delay: 0.12 + k * 0.11, photoMat });
    }
    stops.push({ ...st, x: P.x, z: P.z, gy, root, ring, ringMat, frames, textMat, lift: 0, style,
      focus: new THREE.Vector3(P.x + 0.2, gy + 2.1, P.z - 2.8) });
  });

  function update(dt, tt, carPos, nightK) {
    let current = null;
    for (const s of stops) {
      const d = Math.hypot(carPos.x - s.x, carPos.z - s.z);
      const inside = d < 4.9;
      if (inside) current = s;
      s.lift = clamp(s.lift + (inside ? dt * 0.7 : -dt * 0.9), 0, 1);
      if (d > 40 && s.lift === 0 && !s.dirty) continue;
      s.dirty = d < 40;
      s.ringMat.emissiveIntensity = 0.2 + s.lift * 1.6 + nightK * 0.6;
      s.textMat.emissiveIntensity = nightK * 0.5 * (0.4 + s.lift * 0.6);
      for (const f of s.frames) {
        const k = ease(clamp((s.lift - f.delay) / 0.35, 0, 1));
        const on = Math.max(k, nightK * 0.45);
        f.inner.position.z = k * 0.05;
        f.poolMat.opacity = on * (0.16 + nightK * 0.55);
        f.bulbMat.color.setScalar(0.45 + on * 0.55);
        if (f.photoMat.map) f.photoMat.color.setScalar(0.8 + 0.2 * Math.max(on, 1 - nightK));
      }
    }
    return current;
  }
  return { stops, update };
}
