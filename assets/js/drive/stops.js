/* ==========================================================================
   Drive — the stops. Each place is a small exhibition: a platform in the
   place's own stone, a museum label (name, 中文, coordinates, frame count),
   and its photographs laid on the floor like prints on a table — when you
   drive in they stand up on their easels and turn to face you.
   ========================================================================== */
import * as THREE from '../../vendor/three.min.js';
import { instance } from './assets.js';
import { PLACES } from './terrain.js';
import { STOP_STYLE } from './places.js';

const ease = (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);

function labelTexture(st, idx, total, style) {
  const W = 640, H = 900, c = document.createElement('canvas'); c.width = W; c.height = H;
  const x = c.getContext('2d');
  x.fillStyle = '#0d0e13'; x.fillRect(0, 0, W, H);
  x.fillStyle = style.accent; x.fillRect(0, 0, W, 14);
  x.fillStyle = 'rgba(255,255,255,.55)'; x.font = '500 28px "Geist Mono", monospace'; x.textBaseline = 'top';
  x.fillText(`${String(idx + 1).padStart(2, '0')} / ${String(total).padStart(2, '0')}`, 52, 62);
  x.textAlign = 'right'; x.fillText(`${st.photos.length} FRAMES`, W - 52, 62); x.textAlign = 'left';
  x.fillStyle = '#fff'; x.font = '600 96px Geist, sans-serif';
  const words = st.en.split(' '); let y = 170;
  // wrap the name onto up to two lines
  let line = '';
  const lines = [];
  for (const w of words) { const t = line ? `${line} ${w}` : w; if (x.measureText(t).width > W - 104 && line) { lines.push(line); line = w; } else line = t; }
  lines.push(line);
  for (const l of lines.slice(0, 2)) { x.fillText(l, 52, y); y += 100; }
  x.fillStyle = 'rgba(255,255,255,.82)'; x.font = '500 64px "PingFang SC", "Noto Sans SC", "Microsoft YaHei", sans-serif'; x.fillText(st.zh, 52, y + 14);
  y += 120;
  x.fillStyle = 'rgba(255,255,255,.18)'; x.fillRect(52, y, W - 104, 2);
  x.fillStyle = 'rgba(255,255,255,.62)'; x.font = '500 30px "Geist Mono", monospace';
  const P = PLACES[st.key];
  x.fillText(P.lat !== '—' ? `${P.lat}  ${P.lon}` : 'ON THE ROAD', 52, y + 34);
  x.fillStyle = 'rgba(255,255,255,.75)'; x.font = '400 34px Geist, sans-serif';
  x.fillText(style.line, 52, y + 92, W - 104);
  x.fillStyle = style.accent; x.fillRect(52, H - 150, 60, 60);
  x.fillStyle = '#fff'; x.font = '600 30px "Geist Mono", monospace'; x.fillText('↵', 70, H - 135);
  x.fillStyle = 'rgba(255,255,255,.85)'; x.font = '500 28px "Geist Mono", monospace'; x.fillText('ENTER · 看照片', 132, H - 132);
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 8; return t;
}

function floorTexture(idx, style) {
  const S = 1024, c = document.createElement('canvas'); c.width = c.height = S; const x = c.getContext('2d');
  x.clearRect(0, 0, S, S);
  x.strokeStyle = 'rgba(0,0,0,.12)'; x.lineWidth = 3;
  for (const r of [0.47, 0.36]) { x.beginPath(); x.arc(S / 2, S / 2, S * r, 0, Math.PI * 2); x.stroke(); }
  for (let k = 0; k < 72; k++) { const a = k / 72 * Math.PI * 2, r0 = S * 0.47, r1 = S * (k % 6 ? 0.455 : 0.43); x.beginPath(); x.moveTo(S / 2 + Math.cos(a) * r0, S / 2 + Math.sin(a) * r0); x.lineTo(S / 2 + Math.cos(a) * r1, S / 2 + Math.sin(a) * r1); x.stroke(); }
  x.fillStyle = 'rgba(0,0,0,.09)'; x.font = '600 300px Geist, sans-serif'; x.textAlign = 'center'; x.textBaseline = 'middle';
  x.fillText(String(idx + 1).padStart(2, '0'), S / 2, S * 0.6);
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 8; return t;
}

export function buildStops(scene, physics, lib, grid, stopData) {
  const loader = new THREE.TextureLoader();
  const stops = [];
  const valid = stopData.filter((s) => PLACES[s.key]);
  valid.forEach((st, si) => {
    const P = PLACES[st.key], style = STOP_STYLE[st.key] || STOP_STYLE.road, gy = grid.sample(P.x, P.z);
    const root = new THREE.Group(); root.position.set(P.x, gy, P.z); scene.add(root);
    // platform in the place's own stone
    const plat = instance(lib, 'platform');
    plat.children.forEach((m) => { m.material = m.material.clone(); m.material.color.set(style.plat); m.castShadow = false; });
    root.add(plat);
    physics.statics.cyl(P.x, gy + 0.05, P.z, 0.12, 6);
    const floor = new THREE.Mesh(new THREE.CircleGeometry(5.9, 64), new THREE.MeshStandardMaterial({ map: floorTexture(si, style), transparent: true, roughness: 0.9, depthWrite: false, polygonOffset: true, polygonOffsetFactor: -2 }));
    floor.rotation.x = -Math.PI / 2; floor.position.y = 0.185; floor.receiveShadow = true; root.add(floor);
    const ringMat = new THREE.MeshStandardMaterial({ color: style.accent, emissive: style.accent, emissiveIntensity: 0.3, roughness: 0.4 });
    const ring = new THREE.Mesh(new THREE.TorusGeometry(5.0, 0.07, 6, 120), ringMat);
    ring.rotation.x = -Math.PI / 2; ring.position.y = 0.2; root.add(ring);
    // the museum label at the south-west edge, turned towards the camera
    const signGeo = new THREE.BoxGeometry(2.3, 3.24, 0.22);
    const dark = new THREE.MeshStandardMaterial({ color: '#0d0e13', roughness: 0.5 });
    const lt = labelTexture(st, si, valid.length, style);
    const face = new THREE.MeshStandardMaterial({ map: lt, roughness: 0.6, emissive: '#ffffff', emissiveMap: lt, emissiveIntensity: 0 });
    const sign = new THREE.Mesh(signGeo, [dark, dark, dark, dark, face, dark]);
    const sx = -4.4, sz = 3.6, sry = 0.55;
    sign.position.set(sx, 0.18 + 1.62 + 0.25, sz); sign.rotation.y = sry; sign.castShadow = true; root.add(sign);
    const foot = new THREE.Mesh(new THREE.BoxGeometry(2.5, 0.25, 0.6), dark); foot.position.set(sx, 0.3, sz); foot.rotation.y = sry; root.add(foot);
    physics.statics.box(P.x + sx, gy + 1.8, P.z + sz, 1.25, 1.8, 0.3, sry);
    // photographs on easels along the north arc
    const N = Math.min(5, st.photos.length);
    const frames = [];
    for (let k = 0; k < N; k++) {
      const ph = st.photos[k], a = N === 1 ? 0 : (k / (N - 1) - 0.5) * 1.9;
      const px = Math.sin(a) * 4.1, pz = -Math.cos(a) * 4.1 + 0.4, ry = -a;
      const stand = instance(lib, 'stand'); stand.position.set(px, 0.18, pz); stand.rotation.y = ry + Math.PI; root.add(stand);
      physics.statics.box(P.x + px, gy + 1.0, P.z + pz, 0.9, 1.0, 0.25, ry);
      const ar = ph.ratio || 1.5, h = ar >= 1 ? 1.2 : 1.6, w = h * ar;
      const pivot = new THREE.Group(); pivot.position.set(px, 0.18 + 0.62, pz + 0.12 * Math.cos(a)); pivot.rotation.y = ry; root.add(pivot);
      const mat = new THREE.MeshBasicMaterial({ color: '#222' });
      loader.load(ph.s, (t) => { t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 4; mat.map = t; mat.color.set('#fff'); mat.needsUpdate = true; });
      const paper = new THREE.Mesh(new THREE.BoxGeometry(w + 0.16, h + 0.16, 0.04), new THREE.MeshStandardMaterial({ color: '#f6f3ee', roughness: 0.8 }));
      paper.position.y = (h + 0.16) / 2; paper.castShadow = true;
      const img = new THREE.Mesh(new THREE.PlaneGeometry(w, h), mat); img.position.set(0, (h + 0.16) / 2, 0.025);
      const card = new THREE.Group(); card.add(paper, img); pivot.add(card);
      frames.push({ card, delay: k * 0.08, mat });
    }
    stops.push({ ...st, x: P.x, z: P.z, gy, root, ring, ringMat, frames, face, lift: 0, focus: new THREE.Vector3(P.x, gy + 1.5, P.z - 6) });
  });

  function update(dt, tt, carPos, nightK) {
    let current = null;
    for (const s of stops) {
      const d = Math.hypot(carPos.x - s.x, carPos.z - s.z);
      const inside = d < 5.6;
      if (inside) current = s;
      s.lift += ((inside ? 1 : 0) - s.lift) * Math.min(1, dt * (inside ? 2.2 : 1.6));
      s.ringMat.emissiveIntensity = 0.25 + s.lift * 2.2 + nightK * 0.8 + Math.sin(tt * 3) * 0.1 * s.lift;
      s.ring.scale.setScalar(1 + Math.sin(tt * 2) * 0.006 * s.lift);
      s.face.emissiveIntensity = nightK * 0.75;
      for (const f of s.frames) {
        const k = ease(Math.min(1, Math.max(0, (s.lift - f.delay) / (1 - f.delay * 1.5))));
        f.card.rotation.x = -1.45 * (1 - k) - 0.12 * k;          // lying on the ledge → standing, leaning back a little
        f.card.position.y = 0.0 + 0.1 * k;
        f.mat.color.setScalar(0.8 + 0.2 * Math.max(k, 1 - nightK));
      }
    }
    return current;
  }
  return { stops, update };
}
