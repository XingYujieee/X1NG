/* ------------------------------------------------------------------
   Archive field — every frame mounted on the inside of a slowly
   turning cylinder. Drag / wheel to spin; prints bend with speed.
------------------------------------------------------------------- */
import * as THREE from '../../vendor/three.min.js';

const vert = /* glsl */`
  uniform float uBend;
  uniform float uHover;
  varying vec2 vUv;
  void main() {
    vUv = uv;
    vec3 p = position;
    float x = uv.x - 0.5;
    p.z += (1.0 - 4.0 * x * x) * uBend;      // velocity bend
    p.z += uHover * 0.35;                    // lift toward viewer
    gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
  }`;
const frag = /* glsl */`
  uniform sampler2D uMap;
  uniform float uShift;
  uniform float uHover;
  uniform float uAlpha;
  uniform float uLoaded;
  uniform vec2 uCover;
  varying vec2 vUv;
  void main() {
    vec2 uv = (vUv - 0.5) * uCover + 0.5;
    uv = (uv - 0.5) * (1.0 - uHover * 0.06) + 0.5;
    vec4 c;
    c.r = texture2D(uMap, uv + vec2(uShift, 0.0)).r;
    c.g = texture2D(uMap, uv).g;
    c.b = texture2D(uMap, uv - vec2(uShift, 0.0)).b;
    c.a = 1.0;
    vec3 base = mix(vec3(0.09, 0.1, 0.13), c.rgb, uLoaded);
    // rounded corners
    vec2 q = abs(vUv - 0.5) * 2.0;
    float r = 0.06;
    float d = length(max(q - (1.0 - r), 0.0)) / r;
    float mask = 1.0 - smoothstep(0.9, 1.0, d);
    gl_FragColor = vec4(base, uAlpha * mask);
    #include <colorspace_fragment>
  }`;

export function createField(container, { onHover, onSelect } = {}) {
  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false, powerPreference: 'high-performance' });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75));
  renderer.setClearColor(0x0b0c10, 1);
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  container.prepend(renderer.domElement);

  const scene = new THREE.Scene();
  scene.fog = new THREE.Fog(0x0b0c10, 10, 34);
  const camera = new THREE.PerspectiveCamera(52, 1, 0.1, 100);
  camera.position.set(0, 0, 0);
  const ring = new THREE.Group();
  scene.add(ring);

  const loader = new THREE.TextureLoader();
  const texCache = new Map();
  const getTex = (url, mat) => {
    if (texCache.has(url)) { const t = texCache.get(url); if (t.image) { mat.uniforms.uMap.value = t; mat.uniforms.uLoaded.value = 1; } else t.userData.waiting.push(mat); return; }
    const t = loader.load(url, (tex) => { tex.userData.waiting.forEach((m) => { m.uniforms.uMap.value = tex; m.uniforms.uLoaded.value = 1; }); });
    t.colorSpace = THREE.SRGBColorSpace; t.userData.waiting = [mat]; texCache.set(url, t);
  };

  const geo = new THREE.PlaneGeometry(1, 1, 24, 1);
  let tiles = [];
  let radius = 12;
  let arc = Math.PI * 2;

  function layout(items) {
    tiles.forEach((t) => { ring.remove(t.mesh); t.mesh.material.dispose(); });
    tiles = [];
    const count = items.length;
    const rows = Math.max(1, Math.min(4, Math.ceil(count / 14)));
    const H = rows >= 3 ? 2.5 : 2.8;
    const gap = 0.35;
    const perRow = Array.from({ length: rows }, () => []);
    items.forEach((it, i) => perRow[i % rows].push(it));
    const widths = perRow.map((r) => r.reduce((a, it) => a + H * THREE.MathUtils.clamp(it.ratio, 0.66, 1.8) + gap, 0));
    const maxW = Math.max(...widths);
    radius = Math.max(12, maxW / (Math.PI * 2));
    arc = maxW / radius;
    perRow.forEach((row, ri) => {
      const y = (ri - (rows - 1) / 2) * (H + gap);
      let a = 0;
      const rowScale = maxW / widths[ri]; // spread short rows so the ring stays even
      row.forEach((it) => {
        const w = H * THREE.MathUtils.clamp(it.ratio, 0.66, 1.8);
        const span = (w + gap) * rowScale / radius;
        const angle = a + span / 2;
        a += span;
        const mat = new THREE.ShaderMaterial({
          vertexShader: vert, fragmentShader: frag, transparent: true, side: THREE.FrontSide,
          uniforms: {
            uMap: { value: null }, uBend: { value: 0 }, uHover: { value: 0 }, uShift: { value: 0 },
            uAlpha: { value: 0 }, uLoaded: { value: 0 }, uCover: { value: new THREE.Vector2(1, 1) },
          },
        });
        // photo aspect vs tile aspect (clamped) → cover crop
        const tileRatio = w / H;
        if (it.ratio > tileRatio) mat.uniforms.uCover.value.set(tileRatio / it.ratio, 1);
        else mat.uniforms.uCover.value.set(1, it.ratio / tileRatio);
        getTex(it.src, mat);
        const mesh = new THREE.Mesh(geo, mat);
        mesh.scale.set(w, H, 1);
        mesh.position.set(Math.sin(angle) * radius, y, -Math.cos(angle) * radius);
        mesh.lookAt(0, y, 0);
        mesh.userData.tile = { it, mat, hover: 0, delay: Math.random() * 0.5 };
        ring.add(mesh);
        tiles.push(mesh.userData.tile);
        mesh.userData.tile.mesh = mesh;
      });
    });
    appear = 0;
    // open ring: centre the arc in front of the viewer
    if (arc < Math.PI * 2 - 0.01) { rot = rotTarget = -arc / 2; }
    fitCamera();
  }

  // ---------- Interaction ----------
  let rot = 0, rotTarget = 0, vel = 0, tiltY = 0, tiltTarget = 0, appear = 0;
  let dragging = false, lastX = 0, lastY = 0, moved = 0, downTime = 0;
  const pointer = new THREE.Vector2(9, 9);
  const raycaster = new THREE.Raycaster();
  let hovered = null;
  const el = renderer.domElement;

  el.addEventListener('pointerdown', (e) => { dragging = true; moved = 0; downTime = performance.now(); lastX = e.clientX; lastY = e.clientY; el.setPointerCapture(e.pointerId); });
  el.addEventListener('pointermove', (e) => {
    const r = el.getBoundingClientRect();
    pointer.set(((e.clientX - r.left) / r.width) * 2 - 1, -((e.clientY - r.top) / r.height) * 2 + 1);
    if (!dragging) return;
    const dx = e.clientX - lastX, dy = e.clientY - lastY;
    moved += Math.abs(dx) + Math.abs(dy);
    rotTarget += dx * 0.0032;
    tiltTarget = THREE.MathUtils.clamp(tiltTarget + dy * 0.01, -3, 3);
    lastX = e.clientX; lastY = e.clientY;
  });
  const up = (e) => {
    if (!dragging) return;
    dragging = false;
    if (moved < 6 && performance.now() - downTime < 500 && hovered) onSelect?.(hovered.it);
    if (e.pointerType !== 'mouse') { pointer.set(9, 9); }
  };
  el.addEventListener('pointerup', up);
  el.addEventListener('pointercancel', up);
  el.addEventListener('pointerleave', () => { if (!dragging) pointer.set(9, 9); });
  el.addEventListener('wheel', (e) => { e.preventDefault(); rotTarget += (e.deltaY + e.deltaX) * 0.0012; }, { passive: false });
  const keys = (e) => {
    if (!active) return;
    if (e.key === 'ArrowRight') rotTarget += 0.25;
    if (e.key === 'ArrowLeft') rotTarget -= 0.25;
  };
  window.addEventListener('keydown', keys);

  function fitCamera() {
    const { clientWidth: w, clientHeight: h } = container;
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    camera.fov = camera.aspect < 0.8 ? 68 : 52;
    camera.updateProjectionMatrix();
  }
  const ro = new ResizeObserver(fitCamera); ro.observe(container);

  // ---------- Loop ----------
  let active = false;
  let raf = 0;
  const timer = new THREE.Timer();
  function loop() {
    raf = requestAnimationFrame(loop);
    timer.update();
    if (!active) return;
    const dt = Math.min(timer.getDelta(), 1 / 30);
    const t = timer.getElapsed();
    if (!dragging) rotTarget += dt * 0.025; // idle drift
    const prev = rot;
    rot += (rotTarget - rot) * Math.min(1, dt * 5);
    vel += ((rot - prev) / Math.max(dt, 0.001) - vel) * 0.2;
    tiltY += (tiltTarget - tiltY) * Math.min(1, dt * 4);
    if (!dragging) tiltTarget *= Math.pow(0.2, dt);
    ring.rotation.y = -rot;
    camera.position.y = tiltY * 0.4;
    camera.rotation.x = -tiltY * 0.03;

    appear = Math.min(1, appear + dt * 0.9);
    raycaster.setFromCamera(pointer, camera);
    const hit = pointer.x < 5 ? raycaster.intersectObjects(ring.children, false)[0] : null;
    const next = hit ? hit.object.userData.tile : null;
    if (next !== hovered) { hovered = next; el.style.cursor = hovered ? 'pointer' : ''; onHover?.(hovered ? hovered.it : null); }

    const bend = THREE.MathUtils.clamp(vel * -0.6, -1.2, 1.2);
    const shift = THREE.MathUtils.clamp(Math.abs(vel) * 0.004, 0, 0.012);
    for (const tile of tiles) {
      const u = tile.mat.uniforms;
      tile.hover += ((hovered === tile ? 1 : 0) - tile.hover) * Math.min(1, dt * 7);
      u.uHover.value = tile.hover;
      u.uBend.value = bend;
      u.uShift.value = shift;
      u.uAlpha.value = THREE.MathUtils.clamp((appear - tile.delay) * 2.2, 0, 1);
    }
    renderer.render(scene, camera);
    void t;
  }
  loop();

  return {
    setItems: layout,
    start() { active = true; fitCamera(); },
    stop() { active = false; },
    destroy() { cancelAnimationFrame(raf); ro.disconnect(); window.removeEventListener('keydown', keys); renderer.dispose(); },
  };
}
