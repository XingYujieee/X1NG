/* ==========================================================================
   Drive — the places in the archive as one small island you drive across.
   Pipeline as on bruno-simon.com: models made in Blender (assets/tools/
   drive_assets.py → media/drive/*.glb), real-time rendering in three.js,
   driving and collisions in Rapier.

   Each place I photographed is a stop: drive onto its platform, the prints
   stand up, press Enter to look through the photographs taken there.
   N switches day/night, T the weather (or it follows the region), L the
   headlights, 1–9 jump to a stop, R puts the car back on its wheels.

   Built as its own bundle (assets/js/build/drive.js), loaded only on demand.
   window.X1NG_DRIVE.mount(host, { stops, onOpen, onClose })
   ========================================================================== */
import * as THREE from '../../vendor/three.min.js';
import { EffectComposer } from '../../vendor/three-addons/postprocessing/EffectComposer.js';
import { RenderPass } from '../../vendor/three-addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from '../../vendor/three-addons/postprocessing/UnrealBloomPass.js';
import { OutputPass } from '../../vendor/three-addons/postprocessing/OutputPass.js';
import { PLACES, START, WATER_Y, SIZE_X, SIZE_Z, biomeAt, nearestPlace, islandD, buildGrid } from './terrain.js';
import { createPhysics } from './physics.js';
import { loadAssets } from './assets.js';
import { buildWorld, WIND } from './world.js';
import { buildStops } from './stops.js';

const esc = (s) => String(s ?? '').replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const smooth = (a, b, x) => { const t = Math.min(1, Math.max(0, (x - a) / (b - a))); return t * t * (3 - 2 * t); };
const lerp = (a, b, t) => a + (b - a) * t;

const PHASES = [{ tod: 0.44, en: 'Day', zh: '白天' }, { tod: 0.705, en: 'Golden hour', zh: '黄昏' }, { tod: 0.93, en: 'Night', zh: '夜' }, { tod: 0.255, en: 'Dawn', zh: '清晨' }];
const WEATHERS = ['auto', 'clear', 'rain', 'snow', 'sand'];
const WX_LABEL = { clear: 'Clear · 晴', rain: 'Rain · 雨', snow: 'Snow · 雪', sand: 'Sandstorm · 沙尘暴' };
const REGION_WX = { giza: 'sand', cairo: 'clear', luxor: 'clear', qinggan: 'sand', yunnan: 'snow', beijing: 'clear', nanjing: 'rain', shanghai: 'rain', road: 'clear' };

export async function mountDrive(host, { stops: stopData = [], onClose } = {}) {
  const coarse = matchMedia('(pointer: coarse)').matches;
  const qs = new URLSearchParams(location.search);
  host.innerHTML = `
    <canvas class="drive__canvas"></canvas>
    <div class="drive__hud mono">
      <span class="drive__title">Drive · 开车逛照片</span>
      <span class="drive__status"></span>
      <span class="drive__keys">${coarse ? 'Use the pad · 按钮驾驶' : 'WASD / arrows · Space handbrake · Enter photos · N day/night · T weather · L lights · 1–9 jump · R reset'}</span>
    </div>
    <div class="drive__region" aria-live="polite"></div>
    <canvas class="drive__map" width="240" height="160" aria-hidden="true"></canvas>
    <button class="drive__close" type="button" aria-label="Leave drive mode">✕</button>
    <div class="drive__card" aria-live="polite"></div>
    <div class="drive__viewer" hidden>
      <figure><img alt=""><figcaption class="mono"></figcaption></figure>
      <button type="button" class="drive__vbtn" data-v="prev" aria-label="Previous">←</button>
      <button type="button" class="drive__vbtn" data-v="next" aria-label="Next">→</button>
      <button type="button" class="drive__vbtn" data-v="close" aria-label="Back to driving">Esc · 回到车上</button>
    </div>
    <div class="drive__pad" ${coarse ? '' : 'hidden'}>
      <button type="button" data-k="left" aria-label="Steer left">◀</button><button type="button" data-k="right" aria-label="Steer right">▶</button>
      <button type="button" data-k="enter" aria-label="Open photos">●</button>
      <button type="button" data-k="brake" aria-label="Reverse">▼</button><button type="button" data-k="gas" aria-label="Accelerate">▲</button>
    </div>
    <div class="drive__flash"></div>
    <div class="drive__load mono"><span>Building the island · 正在造岛</span><i><b></b></i></div>`;
  const $ = (s) => host.querySelector(s);
  const canvas = $('.drive__canvas'), card = $('.drive__card'), statusEl = $('.drive__status'), regionEl = $('.drive__region');
  const viewer = $('.drive__viewer'), vImg = viewer.querySelector('img'), vCap = viewer.querySelector('figcaption'), flash = $('.drive__flash');
  const bar = $('.drive__load b');
  let alive = true;
  const progress = { rapier: 0, assets: 0, world: 0 };
  const showProgress = () => { bar.style.transform = `scaleX(${(progress.rapier * 0.35 + progress.assets * 0.5 + progress.world * 0.15).toFixed(3)})`; };
  let closeEarly = () => { alive = false; onClose?.(); };
  $('.drive__close').addEventListener('click', () => closeEarly());

  /* ---------- load: Rapier (WASM) + the Blender assets ---------- */
  const base = new URL('.', document.baseURI).href;
  const rapierUrl = `${base}assets/vendor/rapier/rapier.mjs`;
  const [R, lib] = await Promise.all([
    import(rapierUrl).then(async (m) => { const RR = m.default || m; await RR.init(); progress.rapier = 1; showProgress(); return RR; }),
    loadAssets(`${base}media/drive/`, (p) => { progress.assets = p; showProgress(); }),
  ]);
  if (!alive) return { close() {} };
  await new Promise((r) => setTimeout(r, 30));   // let the bar paint before the heavy build

  /* ---------- renderer / scene ---------- */
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, stencil: true, powerPreference: 'high-performance' });
  renderer.setPixelRatio(Math.min(devicePixelRatio, coarse ? 1.25 : 1.75));
  renderer.shadowMap.enabled = true; renderer.shadowMap.type = THREE.PCFShadowMap;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  const scene = new THREE.Scene();
  scene.background = new THREE.Color();
  scene.fog = new THREE.Fog(0xbcd9ea, 50, 140);
  const camera = new THREE.PerspectiveCamera(36, 1, 0.5, 500);
  const hemi = new THREE.HemisphereLight(0xdcecff, 0x8a7458, 1.1);
  const sun = new THREE.DirectionalLight(0xffffff, 2.4);
  sun.castShadow = true;
  sun.shadow.mapSize.set(coarse ? 1024 : 2048, coarse ? 1024 : 2048);
  Object.assign(sun.shadow.camera, { left: -34, right: 34, top: 34, bottom: -34, near: 1, far: 160 });
  sun.shadow.bias = -0.0005; sun.shadow.normalBias = 0.05;
  const moon = new THREE.DirectionalLight(0x8aa2ff, 0);
  scene.add(hemi, sun, sun.target, moon, moon.target);
  const composer = new EffectComposer(renderer, new THREE.WebGLRenderTarget(2, 2, { type: THREE.HalfFloatType, stencilBuffer: true }));
  composer.addPass(new RenderPass(scene, camera));
  const bloom = new UnrealBloomPass(new THREE.Vector2(256, 256), 0.3, 0.55, 0.85);
  if (!coarse) composer.addPass(bloom);
  composer.addPass(new OutputPass());

  /* ---------- world ---------- */
  const grid = buildGrid();
  const physics = createPhysics(R, grid);
  const W = buildWorld(scene, physics, lib, grid, { coarse });
  const ST = buildStops(scene, physics, lib, grid, stopData);
  const stops = ST.stops;
  const { sample } = grid;
  progress.world = 1; showProgress();

  /* ---------- the car (Blender model on the Rapier vehicle) ---------- */
  const car = physics.car;
  const carG = new THREE.Group(), lean = new THREE.Group(); carG.add(lean); scene.add(carG);
  // the car writes 1 into the stencil buffer, so its see-through silhouette only shows where something else hides it
  const stencilMark = (mat) => Object.assign(mat, { stencilWrite: true, stencilRef: 1, stencilFunc: THREE.AlwaysStencilFunc, stencilZPass: THREE.ReplaceStencilOp });
  for (const p of lib.car_body.parts) { const m = new THREE.Mesh(p.geometry, stencilMark(p.material.clone())); m.castShadow = true; m.receiveShadow = true; lean.add(m); }
  const roleMat = {};
  for (const role of ['head', 'tail', 'reverse', 'indL', 'indR']) {
    for (const r of lib.car?.roles[role] || []) {
      const mat = roleMat[role] || (roleMat[role] = stencilMark(r.material.clone()));
      if (mat.emissive) mat.emissiveIntensity = 0;
      lean.add(new THREE.Mesh(r.geometry, mat));
    }
  }
  const setGlow = (role, v) => { if (roleMat[role]) roleMat[role].emissiveIntensity = v; };
  const wheels = [0, 1, 2, 3].map((i) => {
    const g = new THREE.Group(), inner = new THREE.Group(); g.add(inner);
    for (const r of lib.car?.roles.wheel || []) { const m = new THREE.Mesh(r.geometry, stencilMark(r.material.clone())); m.castShadow = true; inner.add(m); }
    if (i % 2) inner.scale.z = -1;
    scene.add(g); return { g, inner };
  });
  const heads = [-0.48, 0.48].map((z) => {
    const l = new THREE.SpotLight(0xfff0d0, 0, 40, 0.5, 0.6, 1.0);
    l.position.set(1.2, 0.1, z); l.target.position.set(9, -1.4, z * 2.2);
    lean.add(l, l.target); return l;
  });
  const ghost = new THREE.Mesh(new THREE.BoxGeometry(2.4, 1.3, 1.4), new THREE.MeshBasicMaterial({ color: 0x5a6cff, transparent: true, opacity: 0.35, depthFunc: THREE.GreaterDepth, depthWrite: false, stencilWrite: true, stencilRef: 1, stencilFunc: THREE.NotEqualStencilFunc, stencilFail: THREE.KeepStencilOp, stencilZFail: THREE.KeepStencilOp, stencilZPass: THREE.KeepStencilOp }));
  ghost.position.y = 0.3; ghost.renderOrder = 10; lean.add(ghost);

  /* ---------- tyre tracks ---------- */
  const TRACKS = 1000;
  const trackMesh = new THREE.InstancedMesh(new THREE.PlaneGeometry(0.34, 0.3).rotateX(-Math.PI / 2),
    new THREE.MeshBasicMaterial({ color: 0x3a2c22, transparent: true, opacity: 0.24, depthWrite: false, polygonOffset: true, polygonOffsetFactor: -2 }), TRACKS);
  trackMesh.frustumCulled = false; trackMesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
  for (let i = 0; i < TRACKS; i++) trackMesh.setMatrixAt(i, new THREE.Matrix4().makeScale(0, 0, 0));
  trackMesh.renderOrder = 1; scene.add(trackMesh);
  let trackI = 0; const lastTrack = [new THREE.Vector3(1e9, 0, 0), new THREE.Vector3(1e9, 0, 0)];

  /* ---------- dust / splash / snow spray / leaves from a shaken tree ---------- */
  const DUST = 180;
  const dust = new THREE.InstancedMesh(new THREE.IcosahedronGeometry(0.16, 0), new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 1 }), DUST);
  dust.instanceMatrix.setUsage(THREE.DynamicDrawUsage); dust.frustumCulled = false; scene.add(dust);
  for (let i = 0; i < DUST; i++) dust.setColorAt(i, new THREE.Color(0xe9dcc4));
  const puffs = Array.from({ length: DUST }, () => ({ life: 0, p: new THREE.Vector3(), v: new THREE.Vector3(), s: 1, g: 1.5 }));
  let puffI = 0;
  const dm = new THREE.Matrix4(), dq = new THREE.Quaternion(), ds = new THREE.Vector3(), dcol = new THREE.Color();
  const puff = (p, v, s, col, g = 1.5) => { const pf = puffs[puffI = (puffI + 1) % DUST]; pf.life = 1; pf.s = s; pf.g = g; pf.p.copy(p); pf.v.copy(v); dust.setColorAt(puffI, col); dust.instanceColor.needsUpdate = true; };

  /* ---------- weather particles (one cloud that follows the camera) ---------- */
  const WN = coarse ? 3500 : 9000;
  const wpos = new Float32Array(WN * 3); for (let i = 0; i < WN * 3; i++) wpos[i] = Math.random();
  const wgeo = new THREE.BufferGeometry(); wgeo.setAttribute('position', new THREE.BufferAttribute(wpos, 3));
  const wxU = { t: { value: 0 }, center: { value: new THREE.Vector3() }, kind: { value: 0 }, amount: { value: 0 }, wind: { value: new THREE.Vector2() }, scale: { value: 400 }, night: { value: 0 } };
  const wx = new THREE.Points(wgeo, new THREE.ShaderMaterial({
    uniforms: wxU, transparent: true, depthWrite: false,
    vertexShader: `
      uniform float t, kind, amount, scale; uniform vec3 center; uniform vec2 wind; varying float vA; varying float vK;
      void main(){
        vec3 box = vec3(74.0, 30.0, 74.0);
        float r = fract(position.x * 7.13 + position.z * 3.7);
        vA = step(r, amount); vK = kind;
        vec3 vel = kind < 0.5 ? vec3(wind.x * 0.4, -26.0, wind.y * 0.4)
                 : kind < 1.5 ? vec3(wind.x * 0.25 + sin(t + r * 20.0) * 0.6, -2.2, wind.y * 0.25 + cos(t * 0.8 + r * 13.0) * 0.6)
                 : vec3(wind.x * 2.6, sin(t * 2.0 + r * 30.0) * 1.2, wind.y * 2.6);
        vec3 p = position * box + vel * t;
        vec3 o = center - box * 0.5; o.y = center.y - 4.0;
        p = mod(p - o, box) + o;
        vec4 mv = modelViewMatrix * vec4(p, 1.0);
        gl_PointSize = (kind < 0.5 ? 0.22 : 0.16) * scale / -mv.z;
        gl_Position = projectionMatrix * mv;
      }`,
    fragmentShader: `
      uniform float night; varying float vA; varying float vK;
      void main(){
        if (vA < 0.5) discard;
        vec2 c = gl_PointCoord - 0.5; float a; vec3 col;
        if (vK < 0.5) { a = (1.0 - smoothstep(0.0, 0.05, abs(c.x + c.y * 0.18))) * (1.0 - smoothstep(0.3, 0.5, abs(c.y))) * 0.55; col = vec3(0.78, 0.86, 1.0); }
        else if (vK < 1.5) { a = (1.0 - smoothstep(0.15, 0.5, length(c))) * 0.9; col = vec3(1.0); }
        else { a = (1.0 - smoothstep(0.0, 0.5, length(c * vec2(0.5, 2.2)))) * 0.75; col = vec3(0.86, 0.66, 0.42); }
        gl_FragColor = vec4(col * mix(1.0, 0.5, night), a);
      }`,
  }));
  wx.frustumCulled = false; wx.renderOrder = 5; scene.add(wx);

  /* ---------- fireflies over the meadows at night ---------- */
  const FF = 260, ffPos = new Float32Array(FF * 3), ffBase = [];
  for (let i = 0; i < FF; i++) {
    let x, z, tries = 0;
    do { x = (Math.random() - 0.5) * SIZE_X * 0.8; z = (Math.random() - 0.5) * SIZE_Z * 0.8; tries++; } while (((biomeAt(x, z).meadow || 0) < 0.5 || sample(x, z) < 0.1) && tries < 40);
    ffBase.push([x, sample(x, z) + 0.6 + Math.random() * 1.4, z, Math.random() * 6]);
  }
  const ffGeo = new THREE.BufferGeometry(); ffGeo.setAttribute('position', new THREE.BufferAttribute(ffPos, 3));
  const ffMat = new THREE.PointsMaterial({ color: 0xd8ff7a, size: 0.32, transparent: true, opacity: 0, depthWrite: false, blending: THREE.AdditiveBlending });
  const fireflies = new THREE.Points(ffGeo, ffMat); fireflies.frustumCulled = false; scene.add(fireflies);

  /* ---------- minimap ---------- */
  const mapC = $('.drive__map'), mx = mapC.getContext('2d');
  const mapBase = document.createElement('canvas'); mapBase.width = 240; mapBase.height = 160;
  {
    const g = mapBase.getContext('2d'), img = g.createImageData(240, 160);
    const col = W.terrain.geometry.attributes.color, pos = W.terrain.geometry.attributes.position;
    for (let k = 0; k < pos.count; k++) {
      const px = Math.floor((pos.getX(k) + SIZE_X / 2) / SIZE_X * 239.99), pz = Math.floor((pos.getZ(k) + SIZE_Z / 2) / SIZE_Z * 159.99);
      const o = (pz * 240 + px) * 4, water = pos.getY(k) < WATER_Y;
      img.data[o] = water ? 70 : Math.pow(Math.max(0, col.getX(k)), 1 / 2.2) * 255; img.data[o + 1] = water ? 150 : Math.pow(Math.max(0, col.getY(k)), 1 / 2.2) * 255; img.data[o + 2] = water ? 185 : Math.pow(Math.max(0, col.getZ(k)), 1 / 2.2) * 255; img.data[o + 3] = 255;
    }
    g.putImageData(img, 0, 0);
  }
  const toMap = (x, z) => [(x + SIZE_X / 2) / SIZE_X * 240, (z + SIZE_Z / 2) / SIZE_Z * 160];

  /* ---------- state ---------- */
  const keys = { gas: 0, brake: 0, left: 0, right: 0, hand: 0 };
  let current = null, raf = 0, viewing = null, vIndex = 0;
  let tod = qs.has('tod') ? parseFloat(qs.get('tod')) : 0.44, todTarget = null, lightsForced = null;
  let wxMode = WEATHERS.includes(qs.get('wx')) ? qs.get('wx') : 'auto', wxKind = 'clear', wxAmt = 0;
  let phaseLabel = '', nightK = 0, regionKey = null, regionT = 0;
  const camPos = new THREE.Vector3(), camLook = new THREE.Vector3();
  let camScale = +(qs.get('cam') || 1);
  const yawNorth = Math.PI / 2;      // nose (+x local) pointing up the screen (−z)
  const placeCar = (x, z, yaw = yawNorth) => car.place(x, sample(x, z) + 1.3, z, yaw);
  const startAt = stops.find((s) => s.key === qs.get('at'));
  if (startAt) placeCar(startAt.x, startAt.z + 9); else placeCar(START.x, START.z + 2);
  const resetCar = () => { const p = car.body.translation(); placeCar(p.x, p.z, car.yaw()); };
  function jumpTo(i) {
    const s = stops[i]; if (!s) return;
    flash.classList.remove('is-on'); void flash.offsetWidth; flash.classList.add('is-on');
    setTimeout(() => { placeCar(s.x, s.z + 10); camera.position.set(s.x + 9, 30, s.z + 26); camLook.set(s.x, s.gy, s.z + 8); }, 180);
  }

  /* ---------- photo viewer ---------- */
  function showPhoto() {
    const ph = viewing.photos[vIndex];
    vImg.classList.remove('is-in'); vImg.src = ph.m; vImg.onload = () => vImg.classList.add('is-in');
    vCap.innerHTML = `<span>${esc(viewing.en)} · ${esc(viewing.zh)}</span><span>${esc(ph.title)} <span class="zh">${esc(ph.zh)}</span></span><span>${String(vIndex + 1).padStart(2, '0')} / ${String(viewing.photos.length).padStart(2, '0')}</span>`;
  }
  function openViewer(s) { viewing = s; vIndex = 0; viewer.hidden = false; host.classList.add('is-viewing'); Object.keys(keys).forEach((k) => { keys[k] = 0; }); showPhoto(); }
  function closeViewer() { viewing = null; viewer.hidden = true; host.classList.remove('is-viewing'); }
  const stepPhoto = (d) => { vIndex = (vIndex + d + viewing.photos.length) % viewing.photos.length; showPhoto(); };
  viewer.addEventListener('click', (e) => {
    const v = e.target.closest('[data-v]')?.dataset.v;
    if (v === 'prev') stepPhoto(-1); if (v === 'next') stepPhoto(1);
    if (v === 'close' || e.target === viewer) closeViewer();
  });

  /* ---------- input ---------- */
  const map = { KeyW: 'gas', ArrowUp: 'gas', KeyS: 'brake', ArrowDown: 'brake', KeyA: 'left', ArrowLeft: 'left', KeyD: 'right', ArrowRight: 'right', Space: 'hand' };
  const onKey = (down) => (e) => {
    if (viewing) {
      if (!down) return;
      if (e.code === 'ArrowRight' || e.code === 'KeyD') stepPhoto(1);
      if (e.code === 'ArrowLeft' || e.code === 'KeyA') stepPhoto(-1);
      if (e.code === 'Escape' || e.code === 'Enter' || e.code === 'Backspace') closeViewer();
      e.preventDefault(); return;
    }
    if (map[e.code]) { keys[map[e.code]] = down ? 1 : 0; e.preventDefault(); }
    if (!down) return;
    if (e.code === 'KeyR') resetCar();
    if (e.code === 'Enter' && current) openViewer(current);
    if (e.code === 'Escape') close();
    if (e.code === 'KeyN') nextPhase();
    if (e.code === 'KeyT') wxMode = WEATHERS[(WEATHERS.indexOf(wxMode) + 1) % WEATHERS.length];
    if (e.code === 'KeyL') lightsForced = lightsForced === null ? !(nightK > 0.45) : lightsForced ? false : null;
    if (/^Digit[1-9]$/.test(e.code)) jumpTo(+e.code.slice(5) - 1);
  };
  const kd = onKey(true), ku = onKey(false);
  addEventListener('keydown', kd); addEventListener('keyup', ku);
  host.querySelectorAll('.drive__pad [data-k]').forEach((b) => {
    const k = b.dataset.k;
    if (k === 'enter') { b.addEventListener('click', () => { if (current) openViewer(current); }); return; }
    const on = (e) => { e.preventDefault(); keys[k] = 1; }, off = () => { keys[k] = 0; };
    b.addEventListener('pointerdown', on); b.addEventListener('pointerup', off); b.addEventListener('pointerleave', off); b.addEventListener('pointercancel', off);
  });
  closeEarly = () => close();
  card.addEventListener('click', (e) => { if (e.target.closest('[data-open]')) { e.preventDefault(); if (current) openViewer(current); } });

  function nextPhase() {
    const order = [...PHASES].sort((a, b) => a.tod - b.tod);
    const nx = order.find((p) => p.tod > (tod % 1) + 0.02) || order[0];
    todTarget = { from: tod, to: nx.tod > tod % 1 ? Math.floor(tod) + nx.tod : Math.floor(tod) + 1 + nx.tod, t: 0 };
  }

  /* ---------- sky / light ---------- */
  const NIGHT = new THREE.Color('#0c1330'), DAY = new THREE.Color('#bcdcee'), DUSK = new THREE.Color('#eaa27a'), DAWN = new THREE.Color('#e7b9c6');
  const SAND_FOG = new THREE.Color('#d2a466'), SNOW_FOG = new THREE.Color('#dfe6ee'), RAIN_FOG = new THREE.Color('#7f8c9c');
  const skyC = new THREE.Color(), tmpC = new THREE.Color();
  function applySky(focus) {
    const f = ((tod % 1) + 1) % 1, th = (f - 0.25) * Math.PI * 2, el = Math.sin(th);
    const dayK = smooth(-0.1, 0.22, el); nightK = 1 - dayK;
    const horizon = Math.exp(-Math.pow(el / 0.2, 2));
    skyC.copy(NIGHT).lerp(DAY, dayK).lerp(f < 0.5 ? DAWN : DUSK, horizon * 0.75);
    const a = wxAmt;
    if (wxKind === 'sand') skyC.lerp(tmpC.copy(SAND_FOG).multiplyScalar(lerp(0.35, 1, dayK)), a * 0.85);
    if (wxKind === 'snow') skyC.lerp(tmpC.copy(SNOW_FOG).multiplyScalar(lerp(0.3, 1, dayK)), a * 0.55);
    if (wxKind === 'rain') skyC.lerp(tmpC.copy(RAIN_FOG).multiplyScalar(lerp(0.3, 1, dayK)), a * 0.6);
    scene.background.copy(skyC); scene.fog.color.copy(skyC);
    scene.fog.near = wxKind === 'sand' ? lerp(50, 6, a) : wxKind === 'snow' ? lerp(50, 16, a) : wxKind === 'rain' ? lerp(50, 22, a) : 50;
    scene.fog.far = wxKind === 'sand' ? lerp(140, 62, a) : wxKind === 'snow' ? lerp(140, 74, a) : wxKind === 'rain' ? lerp(140, 85, a) : 140;
    const dim = 1 - (wxKind === 'clear' ? 0 : a * 0.35);
    sun.color.set('#ffb27a').lerp(tmpC.set('#fff8ee'), smooth(0.02, 0.45, el));
    sun.intensity = 2.6 * dayK * dim;
    sun.position.set(focus.x - Math.cos(th) * 40, 14 + Math.max(0.1, el) * 44, focus.z + 22);
    sun.target.position.copy(focus);
    moon.intensity = 0.9 * nightK; moon.position.set(focus.x + 20, 40, focus.z - 10); moon.target.position.copy(focus);
    hemi.intensity = (0.55 + 0.6 * dayK) * dim;
    hemi.color.copy(skyC).lerp(tmpC.set('#ffffff'), 0.35);
    hemi.groundColor.set('#8a7458').lerp(tmpC.set('#1a1f33'), nightK);
    renderer.toneMappingExposure = lerp(1.0, 1.25, nightK);
    bloom.strength = 0.22 + nightK * 0.45;
    W.glow.forEach((g) => { g.m.emissiveIntensity = lerp(g.day, g.night, smooth(0.25, 0.75, nightK)); });
    W.grassU.light.value.setRGB(lerp(0.13, 1, dayK) * dim, lerp(0.17, 1, dayK) * dim, lerp(0.3, 1, dayK) * dim);
    W.waterMat.uniforms.night.value = nightK; W.waterMat.uniforms.sky.value.copy(skyC);
    wxU.night.value = nightK;
    ffMat.opacity = smooth(0.5, 0.9, nightK) * (wxKind === 'clear' ? 1 : 1 - a);
    const ph = [...PHASES].sort((p, q) => Math.abs(((f - p.tod + 1.5) % 1) - 0.5) - Math.abs(((f - q.tod + 1.5) % 1) - 0.5))[0];
    phaseLabel = `${ph.en} · ${ph.zh}`;
  }

  /* ---------- loop ---------- */
  const tmpV = new THREE.Vector3(), tmpV2 = new THREE.Vector3(), q = new THREE.Quaternion(), q2 = new THREE.Quaternion(), q3 = new THREE.Quaternion();
  const ZA = new THREE.Vector3(0, 0, 1), YA = new THREE.Vector3(0, 1, 0);
  const resize = () => {
    const w = host.clientWidth, h = host.clientHeight;
    renderer.setSize(w, h, false); composer.setSize(w, h);
    camera.aspect = w / h; camera.fov = camera.aspect < 0.8 ? 50 : 36; camera.updateProjectionMatrix();
    wxU.scale.value = h * renderer.getPixelRatio() * 0.9;
  };
  resize(); addEventListener('resize', resize);
  let last = performance.now(), trailClock = 0, lastStatus = '', leanP = 0, leanR = 0, cine = 0;
  const prevVel = new THREE.Vector3();
  const startT = performance.now();
  { const p = car.body.translation(); camLook.set(p.x, 0, p.z); camera.position.set(p.x + 30, 90, p.z + 60); camera.lookAt(camLook); }
  $('.drive__load').classList.add('is-done'); setTimeout(() => $('.drive__load')?.remove(), 700);
  host.classList.add('is-intro'); requestAnimationFrame(() => requestAnimationFrame(() => host.classList.add('is-in')));

  function frame(now) {
    if (!alive) return;
    raf = requestAnimationFrame(frame);
    const dt = Math.min(0.05, (now - last) / 1000); last = now;
    const tt = (now - startT) / 1000;

    if (todTarget) { todTarget.t = Math.min(1, todTarget.t + dt / 2.4); const e = todTarget.t * todTarget.t * (3 - 2 * todTarget.t); tod = lerp(todTarget.from, todTarget.to, e); if (todTarget.t >= 1) todTarget = null; }
    else if (!qs.has('tod')) tod += dt / 420;

    // drive
    car.drive(viewing ? { gas: 0, brake: 0, left: 0, right: 0, hand: 1 } : keys, dt);
    const body = car.body, p0 = body.translation(), v0 = body.linvel();
    if (p0.y < WATER_Y + 0.5) body.setLinvel({ x: v0.x * (1 - Math.min(0.5, dt * 1.6)), y: v0.y, z: v0.z * (1 - Math.min(0.5, dt * 1.6)) }, true);
    const isl = islandD(p0.x, p0.z);
    if (isl > 0.95) { const k = (isl - 0.95) * 60 * dt, r = Math.hypot(p0.x, p0.z) || 1; body.applyImpulse({ x: -p0.x / r * k, y: 0, z: -p0.z / r * k }, true); }
    physics.step(dt);
    const P = body.translation(), Q = body.rotation(), V = body.linvel();
    if (P.y < WATER_Y - 4 || Math.abs(P.x) > SIZE_X / 2 + 4 || Math.abs(P.z) > SIZE_Z / 2 + 4) { const n = nearestPlace(P.x, P.z); placeCar(PLACES[n.key].x, PLACES[n.key].z + 10); }
    const speed = Math.hypot(V.x, V.z), fwd = car.forward(), fs = car.speed();
    carG.position.set(P.x, P.y, P.z); carG.quaternion.set(Q.x, Q.y, Q.z, Q.w);
    // body lean from acceleration and cornering (visual only)
    tmpV.set(V.x - prevVel.x, 0, V.z - prevVel.z).divideScalar(Math.max(dt, 1e-3)); prevVel.set(V.x, V.y, V.z);
    const accF = tmpV.x * fwd[0] + tmpV.z * fwd[2], accS = tmpV.x * fwd[2] - tmpV.z * fwd[0];
    leanP += (Math.max(-0.06, Math.min(0.06, -accF * 0.006)) - leanP) * Math.min(1, dt * 6);
    leanR += (Math.max(-0.07, Math.min(0.07, accS * 0.008)) - leanR) * Math.min(1, dt * 6);
    lean.rotation.set(leanR, 0, leanP);
    // wheels: on the suspension, steered, spinning
    const ws = car.wheels(), down = tmpV2.set(0, -1, 0).applyQuaternion(carG.quaternion);
    ws.forEach((w, i) => {
      const hp = w.hard; if (!hp) return;
      wheels[i].g.position.set(hp.x + down.x * w.susp, hp.y + down.y * w.susp, hp.z + down.z * w.susp);
      q.copy(carG.quaternion).multiply(q2.setFromAxisAngle(YA, w.steer || 0)).multiply(q3.setFromAxisAngle(ZA, -(w.rot || 0)));
      wheels[i].g.quaternion.copy(q);
    });

    // lights
    const braking = (keys.brake && fs > 0.6) || keys.hand;
    const lightsOn = lightsForced !== null ? lightsForced : nightK > 0.45 || (wxKind !== 'clear' && wxAmt > 0.5);
    setGlow('head', lightsOn ? 2.2 : 0.3);
    heads.forEach((l) => { l.intensity = lightsOn ? 10 : 0; });
    setGlow('tail', braking ? 5 : lightsOn ? 1.4 : 0.15);
    setGlow('reverse', keys.brake && fs < -0.3 ? 3.5 : 0);
    const blink = Math.sin(tt * Math.PI * 3.2) > 0 ? 4 : 0;
    setGlow('indL', keys.left && !keys.right ? blink : 0);
    setGlow('indR', keys.right && !keys.left ? blink : 0);

    // ground contact: tracks, pressed grass, dust / snow / splash
    trailClock += dt;
    const bw = biomeAt(P.x, P.z), onSnow = sample(P.x, P.z) > 5.5, inWater = P.y < WATER_Y + 0.6;
    [2, 3].forEach((wi, j) => {
      const w = ws[wi]; if (!w.contact || !w.point) return;
      const hp = w.point; if (hp.y < WATER_Y + 0.05) return;
      tmpV.set(hp.x, hp.y, hp.z);
      if (tmpV.distanceTo(lastTrack[j]) > 0.3) {
        lastTrack[j].copy(tmpV);
        const f = new THREE.Vector3(fwd[0], 0, fwd[2]).normalize(), n = new THREE.Vector3(0, 1, 0), r = new THREE.Vector3().crossVectors(f, n);
        dm.makeBasis(f, n, r).setPosition(hp.x, hp.y + 0.03, hp.z);
        trackMesh.setMatrixAt(trackI = (trackI + 1) % TRACKS, dm); trackMesh.instanceMatrix.needsUpdate = true;
      }
    });
    if (trailClock > 0.08) {
      trailClock = 0;
      if (speed > 0.8) for (const w of ws) if (w.contact && w.point) W.pressGrass(w.point.x, w.point.z, tt);
    }
    if ((speed > 3 && (ws[2].contact || ws[3].contact)) || (inWater && speed > 1.2)) {
      dcol.set(inWater ? '#f4fbff' : onSnow ? '#ffffff' : (bw.meadow || 0) + (bw.autumn || 0) + (bw.plane || 0) > 0.5 ? '#8a7a5a' : (bw.danxia || 0) > 0.4 ? '#c88b66' : '#e9dcc4');
      for (const wi of [2, 3]) {
        const wp = ws[wi].point;
        if (!wp || Math.random() > Math.min(0.9, speed / 16)) continue;
        puff(tmpV.set(wp.x, wp.y + 0.1, wp.z), tmpV2.set(-V.x * 0.1 + (Math.random() - 0.5), (inWater ? 2.4 : 0.6) + Math.random() * 0.9, -V.z * 0.1 + (Math.random() - 0.5)), (inWater ? 1.1 : 0.6) + Math.random() * 0.9, dcol);
      }
    }
    for (let i = 0; i < DUST; i++) {
      const pf = puffs[i];
      if (pf.life > 0) { pf.life -= dt * 1.1; pf.p.addScaledVector(pf.v, dt); pf.v.multiplyScalar(0.95); pf.v.y -= dt * pf.g; }
      const k = Math.max(0, pf.life);
      ds.setScalar(k > 0 ? pf.s * (1.6 - k) * Math.min(1, k * 3) : 0.0001);
      dm.compose(pf.p, dq, ds); dust.setMatrixAt(i, dm);
    }
    dust.instanceMatrix.needsUpdate = true;

    // stops
    const prev = current;
    if (!viewing) current = ST.update(dt, tt, P, nightK);
    if (current !== prev) {
      if (current) {
        const c = current;
        card.innerHTML = `<p class="mono">${esc(c.region || '')}${c.region ? ' · ' : ''}${c.photos.length} frames</p><h3>${esc(c.en)}<span class="zh">${esc(c.zh)}</span></h3>
          <div class="drive__btns"><a class="pill pill--light" href="#" data-open><span class="dot"></span>View photos · Enter</a>${c.href ? `<a class="pill pill--ghost" href="${esc(c.href)}"><span class="dot"></span>${esc(c.hrefLabel || 'Chapter')} →</a>` : ''}</div>`;
        card.classList.add('is-on');
      } else card.classList.remove('is-on');
    }

    // camera: fixed angle, leaning ahead, pulling back with speed; on a stop it settles into a lower, framed view
    cine += (((current && speed < 4) ? 1 : 0) - cine) * Math.min(1, dt * 1.4);
    const lead = tmpV.set(V.x, 0, V.z).multiplyScalar(0.35 * (1 - cine));
    const tgt = tmpV2.set(P.x, P.y * 0.5, P.z).add(lead);
    if (current) tgt.lerp(current.focus, cine * 0.85);
    camLook.lerp(tgt, Math.min(1, dt * 3));
    const zoom = 1 + Math.min(0.35, speed * 0.016);
    camPos.set(camLook.x + lerp(9 * zoom, 3, cine) * camScale, camLook.y + lerp((14 + Math.min(4, speed * 0.2)) * zoom, 10.5, cine) * camScale, camLook.z + lerp(15 * zoom, 21, cine) * camScale);
    const intro = smooth(0, 2.4, tt);
    camera.position.lerp(camPos, intro < 1 ? Math.min(1, dt * (0.8 + intro * 3)) : Math.min(1, dt * 3.5));
    camera.lookAt(camLook);
    camera.updateMatrixWorld();
    { const v = tmpV.set(P.x, P.y + 0.3, P.z).project(camera), pr = renderer.getPixelRatio();
      WIND.carScreen.value.set((v.x + 1) / 2 * host.clientWidth * pr, (v.y + 1) / 2 * host.clientHeight * pr, v.z * 0.5 + 0.5);
      WIND.seeR.value = host.clientHeight * pr * 0.12; }

    // a title when you arrive in a place
    const n = nearestPlace(P.x, P.z);
    if (n.d < 24 && n.key !== regionKey) {
      regionKey = n.key; regionT = tt;
      const s = stops.find((x) => x.key === n.key), pl = PLACES[n.key];
      if (s) { regionEl.innerHTML = `<span class="mono">${pl.lat !== '—' ? `${pl.lat} · ${pl.lon}` : 'On the road'}</span><strong>${esc(s.en)}</strong><span class="zh">${esc(s.zh)}</span>`; regionEl.classList.add('is-on'); }
    }
    if (n.d > 34) regionKey = null;
    if (regionEl.classList.contains('is-on') && tt - regionT > 3.4) regionEl.classList.remove('is-on');

    // weather
    const want = wxMode === 'auto' ? (onSnow ? 'snow' : n.d < 26 ? REGION_WX[n.key] || 'clear' : 'clear') : wxMode;
    if (want === wxKind) wxAmt = Math.min(1, wxAmt + dt * 0.5);
    else { wxAmt = Math.max(0, wxAmt - dt * 0.7); if (wxAmt === 0) wxKind = want; }
    wxU.kind.value = wxKind === 'rain' ? 0 : wxKind === 'snow' ? 1 : 2;
    wxU.amount.value = wxKind === 'clear' ? 0 : wxAmt * (wxKind === 'sand' ? 1 : 0.85);
    wxU.t.value = tt; wxU.center.value.copy(camLook);
    const gust = 0.5 + 0.5 * Math.sin(tt * 0.7) * Math.sin(tt * 0.31);
    const windStr = wxKind === 'sand' ? 4 + gust * 6 : wxKind === 'rain' ? 2 : wxKind === 'snow' ? 1.2 : 0.6;
    wxU.wind.value.set(windStr * 1.4 * wxAmt + 0.3, windStr * 0.5 * wxAmt);
    WIND.strength.value = 0.6 + (wxKind === 'clear' ? 0 : wxAmt * windStr * 0.3);
    applySky(camLook);

    W.update(dt, tt, {
      carPos: new THREE.Vector3(P.x, P.y - 0.5, P.z), vel: new THREE.Vector3(V.x, V.y, V.z), speed, focus: camLook,
      onShake: (t) => {
        const c = tmpC.set(t.type === 'ginkgo' ? '#efbd2c' : t.type === 'blossom' ? '#f2b6c6' : t.type === 'palm' ? '#6f9a3c' : t.type.startsWith('fir') ? '#3b6b47' : '#86a24a');
        for (let k = 0; k < 7; k++) puff(new THREE.Vector3(t.x + (Math.random() - 0.5) * 2, t.y + 2.2 + Math.random() * 2 * t.s, t.z + (Math.random() - 0.5) * 2), new THREE.Vector3((Math.random() - 0.5) * 1.5, 0.3, (Math.random() - 0.5) * 1.5), 0.45, c, 2.5);
      },
    });
    if (ffMat.opacity > 0.01) {
      ffBase.forEach(([x, y, z, ph], i) => { ffPos[i * 3] = x + Math.sin(tt * 0.6 + ph) * 1.2; ffPos[i * 3 + 1] = y + Math.sin(tt * 1.1 + ph * 2) * 0.4; ffPos[i * 3 + 2] = z + Math.cos(tt * 0.5 + ph) * 1.2; });
      ffGeo.attributes.position.needsUpdate = true;
    }

    // HUD
    const status = `${phaseLabel} · ${wxKind === 'clear' || wxAmt < 0.2 ? WX_LABEL.clear : WX_LABEL[wxKind]}${wxMode === 'auto' ? '' : ' (T)'}`;
    if (status !== lastStatus) { statusEl.textContent = status; lastStatus = status; }
    mx.clearRect(0, 0, 240, 160); mx.drawImage(mapBase, 0, 0);
    stops.forEach((s, i) => {
      const [x, y] = toMap(s.x, s.z);
      mx.fillStyle = s === current ? '#fff' : 'rgba(34,51,255,.95)'; mx.beginPath(); mx.arc(x, y, 4.5, 0, 7); mx.fill();
      mx.fillStyle = '#fff'; mx.font = '600 9px Geist Mono, monospace'; mx.fillText(String(i + 1), x + 6, y + 3);
    });
    const [cx, cy] = toMap(P.x, P.z);
    mx.save(); mx.translate(cx, cy); mx.rotate(Math.atan2(fwd[0], -fwd[2]));
    mx.fillStyle = '#0b0c10'; mx.beginPath(); mx.moveTo(0, -6); mx.lineTo(4.5, 5); mx.lineTo(-4.5, 5); mx.closePath(); mx.fill();
    mx.strokeStyle = '#fff'; mx.lineWidth = 1.5; mx.stroke(); mx.restore();

    composer.render();
  }
  raf = requestAnimationFrame(frame);

  function close() {
    if (!alive) return;
    alive = false; cancelAnimationFrame(raf);
    removeEventListener('keydown', kd); removeEventListener('keyup', ku); removeEventListener('resize', resize);
    composer.dispose?.(); renderer.dispose(); host.innerHTML = '';
    onClose?.();
  }
  window.__drive = { setCam: (k) => { camScale = k; }, stops, get car() { return car.body.translation(); }, carApi: car, jumpTo, nextPhase, open: (i) => openViewer(stops[i]), setTod: (x) => { tod = x; }, setWx: (x) => { wxMode = x; wxKind = x === 'auto' ? wxKind : x; wxAmt = 1; }, keys };
  return { close };
}

window.X1NG_DRIVE = {
  mount(host, opts) {
    const p = mountDrive(host, opts);
    p.catch((e) => { console.error(e); host.innerHTML = '<p class="drive__load mono">Drive mode could not load · 加载失败</p>'; setTimeout(() => opts?.onClose?.(), 2000); });
    return p;
  },
};
