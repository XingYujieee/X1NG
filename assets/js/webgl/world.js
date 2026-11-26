/* ------------------------------------------------------------------
   Archive world — an endless wall of prints (Unseen-style infinite grid).

   · Drag in any direction (or wheel / trackpad) to travel; it never ends —
     columns wrap around, and each column drifts at its own speed.
   · The wall curves away from you at the edges like a lens, prints stretch and
     split their colour a little when you move fast.
   · Click a print: the camera flies into it, then the photo opens.
   Same API as the old cylinder field: setItems / start / stop / destroy.
------------------------------------------------------------------- */
import * as THREE from '../../vendor/three.min.js';

const vert = /* glsl */`
  uniform vec2 uVel;        // world units per second of the pan
  uniform float uCurve, uHover, uRise;
  varying vec2 vUv; varying float vFog;
  void main() {
    vUv = uv;
    vec4 w = modelMatrix * vec4(position, 1.0);
    // stretch along the direction of travel
    w.xy -= uVel * 0.012 * (uv.y - 0.5) * vec2(0.0, 1.0) + uVel * 0.012 * (uv.x - 0.5) * vec2(1.0, 0.0);
    // the wall bends away from the viewer (relative to the camera's x/y)
    vec2 rel = w.xy - cameraPosition.xy;
    w.z -= dot(rel, rel) * uCurve;
    w.z += uHover * 0.6 - (1.0 - uRise) * 6.0;
    vFog = smoothstep(0.0, 18.0, length(rel));
    gl_Position = projectionMatrix * viewMatrix * w;
  }`;
const frag = /* glsl */`
  uniform sampler2D uMap; uniform float uShift, uHover, uLoaded, uRise; uniform vec2 uCover;
  varying vec2 vUv; varying float vFog;
  void main() {
    vec2 uv = (vUv - 0.5) * uCover * (1.0 - uHover * 0.05) + 0.5;
    vec3 c = vec3(texture2D(uMap, uv + vec2(uShift, 0.0)).r, texture2D(uMap, uv).g, texture2D(uMap, uv - vec2(uShift, 0.0)).b);
    c = mix(vec3(0.09, 0.1, 0.13), c, uLoaded);
    c = mix(c, vec3(0.043, 0.047, 0.063), vFog * 0.85);
    vec2 q = abs(vUv - 0.5) * 2.0; float r = 0.05;
    float d = length(max(q - (1.0 - r), 0.0)) / r;
    float mask = 1.0 - smoothstep(0.85, 1.0, d);
    gl_FragColor = vec4(c, mask * uRise);
    #include <colorspace_fragment>
  }`;

export function createField(container, { onHover, onSelect } = {}) {
  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false, powerPreference: 'high-performance' });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75));
  renderer.setClearColor(0x0b0c10, 1);
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  container.prepend(renderer.domElement);

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(46, 1, 0.1, 200);
  const CAM_Z = 15;
  camera.position.set(0, 0, CAM_Z);

  const loader = new THREE.TextureLoader();
  const texCache = new Map();
  const getTex = (url, mat) => {
    if (texCache.has(url)) { const t = texCache.get(url); if (t.image && t.image.complete) { mat.uniforms.uMap.value = t; mat.uniforms.uLoaded.value = 1; } else t.userData.waiting.push(mat); return; }
    const t = loader.load(url, (tex) => { tex.userData.waiting.forEach((m) => { m.uniforms.uMap.value = tex; m.uniforms.uLoaded.value = 1; }); });
    t.colorSpace = THREE.SRGBColorSpace; t.userData.waiting = [mat]; texCache.set(url, t);
  };

  const geo = new THREE.PlaneGeometry(1, 1, 12, 12);
  const CW = 3.1, GAP = 0.32;
  let tiles = [], cols = [], WORLD_W = 1;

  function layout(items) {
    tiles.forEach((t) => { scene.remove(t.mesh); t.mat.dispose(); });
    tiles = []; cols = [];
    if (!items.length) return;
    // an endless wall needs enough prints: repeat small selections
    let pool = items.slice();
    while (pool.length < 72) pool = pool.concat(items);
    const C = Math.max(8, Math.round(Math.sqrt(pool.length * 1.3)));
    WORLD_W = C * (CW + GAP);
    for (let c = 0; c < C; c++) cols.push({ h: 0, speed: 1 + Math.sin(c * 1.7) * 0.18, items: [] });
    pool.forEach((it, i) => {
      // shortest column first keeps the wall even
      const col = cols.reduce((a, b) => (b.h < a.h ? b : a));
      const ratio = THREE.MathUtils.clamp(it.ratio, 0.62, 1.9);
      const h = CW / ratio;
      const mat = new THREE.ShaderMaterial({
        vertexShader: vert, fragmentShader: frag, transparent: true,
        uniforms: {
          uMap: { value: null }, uVel: { value: new THREE.Vector2() }, uCurve: { value: 0.012 }, uHover: { value: 0 }, uShift: { value: 0 },
          uLoaded: { value: 0 }, uRise: { value: 0 }, uCover: { value: new THREE.Vector2(1, 1) },
        },
      });
      if (it.ratio > ratio) mat.uniforms.uCover.value.set(ratio / it.ratio, 1); else mat.uniforms.uCover.value.set(1, it.ratio / ratio);
      getTex(it.src, mat);
      const mesh = new THREE.Mesh(geo, mat);
      mesh.scale.set(CW, h, 1);
      mesh.frustumCulled = false;
      const ci = cols.indexOf(col);
      const tile = { it, mat, mesh, ci, x0: ci * (CW + GAP), y0: -(col.h + h / 2), h, hover: 0, delay: (i % 40) * 0.03 + Math.random() * 0.2 };
      col.h += h + GAP;
      mesh.userData.tile = tile;
      scene.add(mesh); tiles.push(tile);
    });
    appear = 0;
    fitCamera();
  }

  // ---------- Interaction ----------
  const off = { x: 0, y: 0, tx: 0, ty: 0, vx: 0, vy: 0 };
  let dragging = false, lastX = 0, lastY = 0, moved = 0, downTime = 0, appear = 0;
  const pointer = new THREE.Vector2(9, 9);
  const raycaster = new THREE.Raycaster();
  let hovered = null, fly = null;
  const el = renderer.domElement;
  const unitsPerPx = () => (2 * CAM_Z * Math.tan(THREE.MathUtils.degToRad(camera.fov / 2))) / el.clientHeight;

  el.addEventListener('pointerdown', (e) => { if (fly) return; dragging = true; moved = 0; downTime = performance.now(); lastX = e.clientX; lastY = e.clientY; el.setPointerCapture(e.pointerId); el.style.cursor = 'grabbing'; });
  el.addEventListener('pointermove', (e) => {
    const r = el.getBoundingClientRect();
    pointer.set(((e.clientX - r.left) / r.width) * 2 - 1, -((e.clientY - r.top) / r.height) * 2 + 1);
    if (!dragging) return;
    const dx = e.clientX - lastX, dy = e.clientY - lastY, k = unitsPerPx() * 1.15;
    moved += Math.abs(dx) + Math.abs(dy);
    off.tx += dx * k; off.ty -= dy * k;
    lastX = e.clientX; lastY = e.clientY;
  });
  const up = (e) => {
    if (!dragging) return;
    dragging = false; el.style.cursor = '';
    if (moved < 6 && performance.now() - downTime < 500 && hovered) flyTo(hovered);
    if (e.pointerType !== 'mouse') pointer.set(9, 9);
  };
  el.addEventListener('pointerup', up);
  el.addEventListener('pointercancel', up);
  el.addEventListener('pointerleave', () => { if (!dragging) pointer.set(9, 9); });
  el.addEventListener('wheel', (e) => { e.preventDefault(); if (fly) return; off.tx -= e.deltaX * 0.012; off.ty += e.deltaY * 0.012; }, { passive: false });
  const keys = (e) => {
    if (!active || fly) return;
    const s = 2.5;
    if (e.key === 'ArrowRight') off.tx -= s; if (e.key === 'ArrowLeft') off.tx += s;
    if (e.key === 'ArrowDown') off.ty += s; if (e.key === 'ArrowUp') off.ty -= s;
  };
  window.addEventListener('keydown', keys);

  // through the lens: fly into the print, then open it
  function flyTo(tile) {
    const p = tile.mesh.position;
    fly = { t: 0, from: camera.position.clone(), to: new THREE.Vector3(p.x, p.y, Math.max(2.2, tile.h * 1.05)), tile, back: false };
  }

  function fitCamera() {
    const { clientWidth: w, clientHeight: h } = container;
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    camera.fov = camera.aspect < 0.8 ? 62 : 46;
    camera.updateProjectionMatrix();
  }
  const ro = new ResizeObserver(fitCamera); ro.observe(container);

  const wrap = (v, p) => ((v % p) + p * 1.5) % p - p / 2;

  // ---------- Loop ----------
  let active = false, raf = 0;
  const timer = new THREE.Timer();
  const ease = (x) => (x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2);
  function loop() {
    raf = requestAnimationFrame(loop);
    timer.update();
    if (!active) return;
    const dt = Math.min(timer.getDelta(), 1 / 30);
    if (!dragging && !fly) off.ty += dt * 0.18;                  // the wall drifts slowly on its own
    const px = off.x, py = off.y;
    off.x += (off.tx - off.x) * Math.min(1, dt * 6);
    off.y += (off.ty - off.y) * Math.min(1, dt * 6);
    off.vx += ((off.x - px) / Math.max(dt, 1e-3) - off.vx) * 0.25;
    off.vy += ((off.y - py) / Math.max(dt, 1e-3) - off.vy) * 0.25;

    // camera: gentle parallax with the pointer, or the fly-through
    if (fly) {
      fly.t = Math.min(1, fly.t + dt / (fly.back ? 0.9 : 1.1));
      const k = ease(fly.t);
      camera.position.lerpVectors(fly.from, fly.to, k);
      if (fly.t >= 1) {
        if (!fly.back) { onSelect?.(fly.tile.it); fly = { t: 0, from: camera.position.clone(), to: new THREE.Vector3(0, 0, CAM_Z), back: true }; fly.wait = 0.5; }
        else fly = null;
      }
    } else {
      const tx = pointer.x < 5 ? pointer.x * 0.6 : 0, ty = pointer.x < 5 ? pointer.y * 0.4 : 0;
      camera.position.x += (tx - camera.position.x) * Math.min(1, dt * 2);
      camera.position.y += (ty - camera.position.y) * Math.min(1, dt * 2);
    }
    const lk = fly ? 1 : 0.85; camera.lookAt(camera.position.x * lk, camera.position.y * lk, 0);

    appear = Math.min(1.6, appear + dt * 0.8);
    raycaster.setFromCamera(pointer, camera);
    const hit = pointer.x < 5 && !fly ? raycaster.intersectObjects(tiles.map((t) => t.mesh), false)[0] : null;
    const next = hit ? hit.object.userData.tile : null;
    if (next !== hovered) { hovered = next; if (!dragging) el.style.cursor = hovered ? 'pointer' : ''; onHover?.(hovered ? hovered.it : null); }

    const speed = Math.hypot(off.vx, off.vy);
    const shift = THREE.MathUtils.clamp(speed * 0.0009, 0, 0.012);
    const vel = new THREE.Vector2(THREE.MathUtils.clamp(off.vx, -40, 40), THREE.MathUtils.clamp(off.vy, -40, 40));
    for (const t of tiles) {
      const col = cols[t.ci], H = Math.max(col.h, 1);
      const x = wrap(t.x0 + off.x, WORLD_W);
      const y = wrap(t.y0 + off.y * col.speed + H / 2, H);
      t.mesh.position.set(x, y, 0);
      const u = t.mat.uniforms;
      t.hover += ((hovered === t ? 1 : 0) - t.hover) * Math.min(1, dt * 7);
      u.uHover.value = t.hover;
      u.uShift.value = shift;
      u.uVel.value.copy(vel);
      u.uRise.value = THREE.MathUtils.smoothstep(appear - t.delay, 0, 0.8);
    }
    renderer.render(scene, camera);
  }
  loop();

  return {
    setItems: layout,
    start() { active = true; fitCamera(); },
    stop() { active = false; },
    destroy() { cancelAnimationFrame(raf); ro.disconnect(); window.removeEventListener('keydown', keys); renderer.dispose(); },
  };
}
