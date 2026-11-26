/* ==========================================================================
   Drive — the places in the archive as one small island you drive across.
   Pipeline as on bruno-simon.com: models made in Blender (assets/tools/
   drive_assets.py → media/drive/*.glb), real-time rendering in three.js,
   driving and collisions in Rapier.

   The motion follows Saltline (the coastal-drive prototype): a chase camera
   behind the car that you can drag around and zoom, which keeps clear of
   walls and hills and shakes on impact; peripheral speed blur that grows with
   speed and boost; a fixed-step simulation drawn interpolated; boost, a hop,
   a handbrake; engine, tyre, wind and impact sounds; a speedometer, a radar
   and a full map of the places you've been.

   Each place I photographed is a stop: drive onto its platform, the prints
   stand up, Enter opens the photographs taken there.

   Built as its own bundle (assets/js/build/drive.js), loaded only on demand.
   window.X1NG_DRIVE.mount(host, { stops, onClose })
   ========================================================================== */
import * as THREE from '../../vendor/three.min.js';
import { EffectComposer } from '../../vendor/three-addons/postprocessing/EffectComposer.js';
import { RenderPass } from '../../vendor/three-addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from '../../vendor/three-addons/postprocessing/UnrealBloomPass.js';
import { ShaderPass } from '../../vendor/three-addons/postprocessing/ShaderPass.js';
import { OutputPass } from '../../vendor/three-addons/postprocessing/OutputPass.js';
import { PLACES, START, WATER_Y, SIZE_X, SIZE_Z, biomeAt, nearestPlace, islandD, buildGrid } from './terrain.js';
import { createPhysics } from './physics.js';
import { loadAssets } from './assets.js';
import { buildWorld, WIND } from './world.js';
import { buildStops } from './stops.js';
import { createAudio } from './audio.js';

const esc = (s) => String(s ?? '').replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const clamp = (x, a, b) => Math.min(b, Math.max(a, x));
const smooth = (a, b, x) => { const t = clamp((x - a) / (b - a), 0, 1); return t * t * (3 - 2 * t); };
const lerp = (a, b, t) => a + (b - a) * t;
const damp = (a, b, k, dt) => a + (b - a) * (1 - Math.exp(-k * dt));
const angDamp = (a, b, k, dt) => a + Math.atan2(Math.sin(b - a), Math.cos(b - a)) * (1 - Math.exp(-k * dt));

const PHASES = [{ tod: 0.44, en: 'Day', zh: '白天' }, { tod: 0.705, en: 'Golden hour', zh: '黄昏' }, { tod: 0.93, en: 'Night', zh: '夜' }, { tod: 0.255, en: 'Dawn', zh: '清晨' }];
const WEATHERS = ['auto', 'clear', 'rain', 'snow', 'sand'];
const WX_LABEL = { clear: '晴 Clear', rain: '雨 Rain', snow: '雪 Snow', sand: '沙尘暴 Sandstorm' };
const REGION_WX = { giza: 'sand', cairo: 'clear', luxor: 'clear', qinggan: 'sand', yunnan: 'snow', beijing: 'clear', nanjing: 'rain', shanghai: 'rain', road: 'clear' };

/* peripheral speed blur: streaks towards the centre, never over the car */
const SpeedBlur = {
  uniforms: { tDiffuse: { value: null }, power: { value: 0 }, rect: { value: new THREE.Vector4(0.4, 0.4, 0.6, 0.6) }, aspect: { value: 1.6 } },
  vertexShader: 'varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }',
  fragmentShader: `
    uniform sampler2D tDiffuse; uniform float power, aspect; uniform vec4 rect; varying vec2 vUv;
    float outside(vec2 uv){ vec2 d = max(rect.xy - uv, uv - rect.zw); return smoothstep(0.0, 0.05, max(d.x, d.y)); }
    void main(){
      vec4 c = texture2D(tDiffuse, vUv);
      vec2 d = vUv - vec2(0.5, 0.46);
      float r = length(d * vec2(aspect, 1.0)) / aspect;
      float e = smoothstep(0.16, 0.5, r) * outside(vUv) * power;
      if (e > 0.01) {
        vec3 sum = c.rgb * 2.0; float tot = 2.0;
        for (int i = 1; i <= 6; i++) {
          float f = float(i) / 6.0;
          vec2 uv = vUv - d * e * 0.085 * f;
          float w = (1.0 - f * 0.6) * outside(uv);
          sum += texture2D(tDiffuse, uv).rgb * w; tot += w;
        }
        c.rgb = sum / tot;
      }
      gl_FragColor = c;
    }`,
};

export async function mountDrive(host, { stops: stopData = [], onClose } = {}) {
  const coarse = matchMedia('(pointer: coarse)').matches;
  const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const qs = new URLSearchParams(location.search);
  host.innerHTML = `
    <canvas class="drive__canvas"></canvas>
    <div class="dv-vignette"></div>
    <header class="dv-top">
      <div class="dv-id"><span class="dv-word">Drive<span>.</span></span><span class="dv-sub mono">开车逛照片 · On the road</span></div>
      <nav class="dv-nav" aria-label="Drive options">
        <button type="button" data-act="map">地图 <kbd>M</kbd></button>
        <button type="button" data-act="sound" aria-pressed="false">声音 <span>关</span></button>
        <button type="button" data-act="view">视角 <kbd>V</kbd></button>
        <button type="button" data-act="reset">扶正 <kbd>R</kbd></button>
        <button type="button" data-act="close" class="dv-x" aria-label="Leave drive mode">✕</button>
      </nav>
    </header>
    <div class="dv-loc mono"><i></i><span class="dv-place">—</span></div>
    <div class="dv-cond"><button type="button" data-act="time" class="mono" title="N"></button><button type="button" data-act="weather" class="mono" title="T"></button></div>
    <footer class="dv-hud">
      <div class="dv-keys mono">${coarse ? '' : '<span><kbd>W</kbd><kbd>A</kbd><kbd>S</kbd><kbd>D</kbd> 驾驶</span><span><kbd>Shift</kbd> 加速</span><span><kbd>Space</kbd> 跳</span><span><kbd>B</kbd> 手刹</span><span><kbd>Enter</kbd> 看照片</span><span><kbd>1–9</kbd> 到站</span><span>拖拽 · 滚轮 镜头</span>'}</div>
      <div class="dv-tele"><canvas class="dv-radar" width="192" height="192" aria-hidden="true"></canvas><div class="dv-speed"><output>00</output><span class="mono">KM/H</span></div></div>
    </footer>
    <div class="drive__region" aria-live="polite"></div>
    <div class="drive__card" aria-live="polite"></div>
    <dialog class="dv-mapdlg" aria-label="Island map">
      <div class="dv-maphead"><h2>The island · 地图</h2><button type="button" data-act="mapclose">关闭 · Esc</button></div>
      <canvas class="dv-fullmap" width="960" height="640"></canvas>
      <div class="dv-mapkey mono"><span class="dv-visited"></span><span>点一个地点直接过去 · click a place to go there</span></div>
    </dialog>
    <div class="drive__viewer" hidden>
      <figure><img alt=""><figcaption class="mono"></figcaption></figure>
      <button type="button" class="drive__vbtn" data-v="prev" aria-label="Previous">←</button>
      <button type="button" class="drive__vbtn" data-v="next" aria-label="Next">→</button>
      <button type="button" class="drive__vbtn" data-v="close" aria-label="Back to driving">Esc · 回到车上</button>
    </div>
    <div class="drive__pad" ${coarse ? '' : 'hidden'}>
      <div><button type="button" data-k="left" aria-label="Steer left">◀</button><button type="button" data-k="right" aria-label="Steer right">▶</button></div>
      <div class="dv-padr"><button type="button" data-k="boost" class="dv-small">加速</button><button type="button" data-k="jump" class="dv-small">跳</button><button type="button" data-k="enter" class="dv-small" aria-label="Open photos">●</button><button type="button" data-k="brake" aria-label="Reverse">▼</button><button type="button" data-k="gas" aria-label="Accelerate">▲</button></div>
    </div>
    <div class="drive__flash"></div>
    <div class="drive__load mono"><span>Building the island · 正在造岛</span><i><b></b></i></div>`;
  const $ = (s) => host.querySelector(s);
  const canvas = $('.drive__canvas'), card = $('.drive__card'), regionEl = $('.drive__region');
  const viewer = $('.drive__viewer'), vImg = viewer.querySelector('img'), vCap = viewer.querySelector('figcaption'), flash = $('.drive__flash');
  const placeEl = $('.dv-place'), speedEl = $('.dv-speed output'), timeBtn = $('[data-act="time"]'), wxBtn = $('[data-act="weather"]'), soundBtn = $('[data-act="sound"]');
  const mapDlg = $('.dv-mapdlg'), fullMap = $('.dv-fullmap'), visitedEl = $('.dv-visited');
  const bar = $('.drive__load b');
  let alive = true;
  const progress = { rapier: 0, assets: 0, world: 0 };
  const showProgress = () => { bar.style.transform = `scaleX(${(progress.rapier * 0.35 + progress.assets * 0.5 + progress.world * 0.15).toFixed(3)})`; };
  let close = () => { alive = false; onClose?.(); };
  host.addEventListener('click', (e) => { if (e.target.closest('[data-act="close"]')) close(); });

  /* ---------- load: Rapier (WASM) + the Blender assets ---------- */
  const base = new URL('.', document.baseURI).href;
  const rapierUrl = `${base}assets/vendor/rapier/rapier.mjs`;
  const [R, lib] = await Promise.all([
    import(rapierUrl).then(async (m) => { const RR = m.default || m; await RR.init(); progress.rapier = 1; showProgress(); return RR; }),
    loadAssets(`${base}media/drive/`, (p) => { progress.assets = p; showProgress(); }),
  ]);
  if (!alive) return { close() {} };
  await new Promise((r) => setTimeout(r, 30));

  /* ---------- renderer / scene ---------- */
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, stencil: true, powerPreference: 'high-performance' });
  renderer.setPixelRatio(Math.min(devicePixelRatio, coarse ? 1.25 : 1.7));
  renderer.shadowMap.enabled = true; renderer.shadowMap.type = THREE.PCFShadowMap;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  const scene = new THREE.Scene();
  scene.fog = new THREE.FogExp2(0xbcd9ea, 0.0085);
  const camera = new THREE.PerspectiveCamera(50, 1, 0.12, 900);
  const hemi = new THREE.HemisphereLight(0xdcecff, 0x8a7458, 1.1);
  const sun = new THREE.DirectionalLight(0xffffff, 2.4);
  sun.castShadow = true;
  sun.shadow.mapSize.set(coarse ? 1024 : 2048, coarse ? 1024 : 2048);
  Object.assign(sun.shadow.camera, { left: -38, right: 38, top: 38, bottom: -38, near: 1, far: 180 });
  sun.shadow.bias = -0.0005; sun.shadow.normalBias = 0.05;
  const moon = new THREE.DirectionalLight(0x8aa2ff, 0);
  scene.add(hemi, sun, sun.target, moon, moon.target);

  // sky: a gradient dome with the sun and, at night, stars; its horizon is the fog colour
  const skyU = { top: { value: new THREE.Color() }, horizon: { value: new THREE.Color() }, sunDir: { value: new THREE.Vector3(0, 1, 0) }, sunCol: { value: new THREE.Color() }, night: { value: 0 }, haze: { value: 0 } };
  const sky = new THREE.Mesh(new THREE.SphereGeometry(420, 32, 16), new THREE.ShaderMaterial({
    uniforms: skyU, side: THREE.BackSide, depthWrite: false, fog: false,
    vertexShader: 'varying vec3 vD; void main(){ vD = normalize(position); vec4 p = modelViewMatrix * vec4(position, 1.0); gl_Position = projectionMatrix * p; gl_Position.z = gl_Position.w; }',
    fragmentShader: `
      uniform vec3 top, horizon, sunDir, sunCol; uniform float night, haze; varying vec3 vD;
      float h3(vec3 p){ return fract(sin(dot(p, vec3(127.1, 311.7, 74.7))) * 43758.5453); }
      void main(){
        vec3 d = normalize(vD); float h = d.y;
        vec3 c = mix(horizon, top, smoothstep(-0.02, 0.45, h) * (1.0 - haze));
        float s = max(dot(d, normalize(sunDir)), 0.0);
        c += sunCol * (pow(s, 900.0) * 6.0 + pow(s, 12.0) * 0.25) * (1.0 - haze * 0.8) * step(0.0, h + 0.05);
        vec3 g = floor(d * 260.0);
        float st = step(0.9965, h3(g)) * smoothstep(0.05, 0.3, h) * night * (1.0 - haze);
        c += vec3(st) * (0.6 + 0.4 * h3(g + 1.0));
        gl_FragColor = vec4(c, 1.0);
      }`,
  }));
  sky.renderOrder = -1; sky.frustumCulled = false; scene.add(sky);

  const rt = new THREE.WebGLRenderTarget(2, 2, { type: THREE.HalfFloatType, stencilBuffer: true });
  const composer = new EffectComposer(renderer, rt);
  composer.addPass(new RenderPass(scene, camera));
  const bloom = new UnrealBloomPass(new THREE.Vector2(256, 256), 0.3, 0.55, 0.85);
  if (!coarse) composer.addPass(bloom);
  const blur = new ShaderPass(SpeedBlur);
  if (!reduced) composer.addPass(blur);
  composer.addPass(new OutputPass());

  /* ---------- world ---------- */
  const grid = buildGrid();
  const physics = createPhysics(R, grid);
  const W = buildWorld(scene, physics, lib, grid, { coarse });
  const ST = buildStops(scene, physics, lib, grid, stopData);
  const stops = ST.stops;
  const { sample } = grid;
  progress.world = 1; showProgress();
  const audio = createAudio();

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
  const wheels = car.WHEELS.map(([x, y, z], i) => {
    const pivot = new THREE.Group(), spin = new THREE.Group(); pivot.position.set(x, y, z); pivot.add(spin); carG.add(pivot);
    for (const r of lib.car?.roles.wheel || []) { const m = new THREE.Mesh(r.geometry, stencilMark(r.material.clone())); m.castShadow = true; spin.add(m); }
    if (z < 0) spin.scale.z = -1;
    return { pivot, spin, y };
  });
  const heads = [-0.48, 0.48].map((z) => {
    const l = new THREE.SpotLight(0xfff0d0, 0, 46, 0.5, 0.6, 1.0);
    l.position.set(1.2, 0.1, z); l.target.position.set(9, -1.4, z * 2.2);
    lean.add(l, l.target); return l;
  });
  const ghost = new THREE.Mesh(new THREE.BoxGeometry(2.4, 1.3, 1.4), new THREE.MeshBasicMaterial({ color: 0x5a6cff, transparent: true, opacity: 0.35, depthFunc: THREE.GreaterDepth, depthWrite: false, stencilWrite: true, stencilRef: 1, stencilFunc: THREE.NotEqualStencilFunc, stencilFail: THREE.KeepStencilOp, stencilZFail: THREE.KeepStencilOp, stencilZPass: THREE.KeepStencilOp }));
  ghost.position.y = 0.3; ghost.renderOrder = 10; lean.add(ghost);
  const carCorners = [];
  for (const x of [-1.25, 1.25]) for (const y of [-0.8, 1.25]) for (const z of [-0.8, 0.8]) carCorners.push(new THREE.Vector3(x, y, z));

  /* ---------- tyre tracks and skid marks ---------- */
  const mkTracks = (n, color, opacity) => {
    const m = new THREE.InstancedMesh(new THREE.PlaneGeometry(0.34, 0.3).rotateX(-Math.PI / 2),
      new THREE.MeshBasicMaterial({ color, transparent: true, opacity, depthWrite: false, polygonOffset: true, polygonOffsetFactor: -2 }), n);
    m.frustumCulled = false; m.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
    for (let i = 0; i < n; i++) m.setMatrixAt(i, new THREE.Matrix4().makeScale(0, 0, 0));
    m.renderOrder = 1; scene.add(m); return { m, i: 0, n };
  };
  const tracks = mkTracks(1000, 0x3a2c22, 0.22), skids = mkTracks(500, 0x16120f, 0.42);
  const lastTrack = [new THREE.Vector3(1e9, 0, 0), new THREE.Vector3(1e9, 0, 0), new THREE.Vector3(1e9, 0, 0), new THREE.Vector3(1e9, 0, 0)];
  const tm = new THREE.Matrix4(), tf = new THREE.Vector3(), tn = new THREE.Vector3(0, 1, 0), tr = new THREE.Vector3();
  const stamp = (T, p, fwd) => { tf.set(fwd[0], 0, fwd[2]).normalize(); tr.crossVectors(tf, tn); tm.makeBasis(tf, tn, tr).setPosition(p.x, p.y + 0.03, p.z); T.m.setMatrixAt(T.i = (T.i + 1) % T.n, tm); T.m.instanceMatrix.needsUpdate = true; };

  /* ---------- dust / splash / snow spray / debris ---------- */
  const DUST = 200;
  const dust = new THREE.InstancedMesh(new THREE.IcosahedronGeometry(0.16, 0), new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 1 }), DUST);
  dust.instanceMatrix.setUsage(THREE.DynamicDrawUsage); dust.frustumCulled = false; scene.add(dust);
  for (let i = 0; i < DUST; i++) dust.setColorAt(i, new THREE.Color(0xe9dcc4));
  const puffs = Array.from({ length: DUST }, () => ({ life: 0, p: new THREE.Vector3(), v: new THREE.Vector3(), s: 1, g: 1.5, debris: false }));
  let puffI = 0;
  const dm = new THREE.Matrix4(), dq = new THREE.Quaternion(), ds = new THREE.Vector3(), dcol = new THREE.Color(), de = new THREE.Euler();
  const puff = (p, v, s, col, g = 1.5, debris = false) => { const pf = puffs[puffI = (puffI + 1) % DUST]; Object.assign(pf, { life: 1, s, g, debris }); pf.p.copy(p); pf.v.copy(v); dust.setColorAt(puffI, col); dust.instanceColor.needsUpdate = true; };

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
        vec3 box = vec3(60.0, 26.0, 60.0);
        float r = fract(position.x * 7.13 + position.z * 3.7);
        vA = step(r, amount); vK = kind;
        vec3 vel = kind < 0.5 ? vec3(wind.x * 0.4, -26.0, wind.y * 0.4)
                 : kind < 1.5 ? vec3(wind.x * 0.25 + sin(t + r * 20.0) * 0.6, -2.2, wind.y * 0.25 + cos(t * 0.8 + r * 13.0) * 0.6)
                 : vec3(wind.x * 2.6, sin(t * 2.0 + r * 30.0) * 1.2, wind.y * 2.6);
        vec3 p = position * box + vel * t;
        vec3 o = center - box * 0.5; o.y = center.y - 8.0;
        p = mod(p - o, box) + o;
        vec4 mv = modelViewMatrix * vec4(p, 1.0);
        gl_PointSize = clamp((kind < 0.5 ? 0.22 : 0.16) * scale / -mv.z, 0.0, 40.0);
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

  /* ---------- maps: a radar that turns with the car, and the whole island ---------- */
  const mapBase = document.createElement('canvas'); mapBase.width = 480; mapBase.height = 320;
  {
    const g = mapBase.getContext('2d'), img = g.createImageData(240, 160);
    const col = W.terrain.geometry.attributes.color, pos = W.terrain.geometry.attributes.position;
    for (let k = 0; k < pos.count; k++) {
      const px = Math.floor((pos.getX(k) + SIZE_X / 2) / SIZE_X * 239.99), pz = Math.floor((pos.getZ(k) + SIZE_Z / 2) / SIZE_Z * 159.99);
      const o = (pz * 240 + px) * 4, water = pos.getY(k) < WATER_Y;
      img.data[o] = water ? 88 : Math.pow(Math.max(0, col.getX(k)), 1 / 2.2) * 255; img.data[o + 1] = water ? 158 : Math.pow(Math.max(0, col.getY(k)), 1 / 2.2) * 255; img.data[o + 2] = water ? 190 : Math.pow(Math.max(0, col.getZ(k)), 1 / 2.2) * 255; img.data[o + 3] = 255;
    }
    const tmp = document.createElement('canvas'); tmp.width = 240; tmp.height = 160; tmp.getContext('2d').putImageData(img, 0, 0);
    g.imageSmoothingEnabled = true; g.drawImage(tmp, 0, 0, 480, 320);
  }
  const radar = $('.dv-radar'), rx = radar.getContext('2d');
  const visited = new Set();
  function drawRadar(P, heading) {
    const S = radar.width, r = S / 2, scale = 2.2;   // px per metre
    rx.clearRect(0, 0, S, S);
    rx.save(); rx.beginPath(); rx.arc(r, r, r - 2, 0, Math.PI * 2); rx.clip();
    rx.fillStyle = '#4a8ba3'; rx.fillRect(0, 0, S, S);
    rx.translate(r, r); rx.rotate(heading);
    rx.drawImage(mapBase, (-SIZE_X / 2 - P.x) * scale, (-SIZE_Z / 2 - P.z) * scale, SIZE_X * scale, SIZE_Z * scale);
    for (const s of stops) {
      rx.fillStyle = visited.has(s.key) ? '#fff' : '#2233ff';
      rx.beginPath(); rx.arc((s.x - P.x) * scale, (s.z - P.z) * scale, 5, 0, Math.PI * 2); rx.fill();
      rx.strokeStyle = '#0b0c10'; rx.lineWidth = 1.5; rx.stroke();
    }
    rx.restore();
    rx.fillStyle = '#0b0c10'; rx.strokeStyle = '#fff'; rx.lineWidth = 2;
    rx.beginPath(); rx.moveTo(r, r - 9); rx.lineTo(r + 7, r + 7); rx.lineTo(r, r + 3); rx.lineTo(r - 7, r + 7); rx.closePath(); rx.fill(); rx.stroke();
  }
  const fx = fullMap.getContext('2d');
  const fullScale = fullMap.width / SIZE_X;
  function drawFullMap(P, fwd) {
    const w = fullMap.width, h = fullMap.height;
    fx.clearRect(0, 0, w, h); fx.fillStyle = '#4a8ba3'; fx.fillRect(0, 0, w, h); fx.drawImage(mapBase, 0, 0, w, h);
    fx.font = '600 15px Geist, sans-serif'; fx.textBaseline = 'middle';
    stops.forEach((s, i) => {
      const x = (s.x + SIZE_X / 2) * fullScale, y = (s.z + SIZE_Z / 2) * fullScale, v = visited.has(s.key);
      fx.fillStyle = v ? '#fff' : '#2233ff'; fx.beginPath(); fx.arc(x, y, 9, 0, Math.PI * 2); fx.fill(); fx.strokeStyle = '#0b0c10'; fx.lineWidth = 2; fx.stroke();
      fx.fillStyle = v ? '#0b0c10' : '#fff'; fx.textAlign = 'center'; fx.font = '600 11px "Geist Mono", monospace'; fx.fillText(String(i + 1), x, y + 0.5);
      fx.textAlign = 'left'; fx.font = '600 15px Geist, sans-serif'; fx.fillStyle = '#0b0c10';
      fx.fillText(`${s.en} ${s.zh}`, x + 14, y);
    });
    const x = (P.x + SIZE_X / 2) * fullScale, y = (P.z + SIZE_Z / 2) * fullScale;
    fx.save(); fx.translate(x, y); fx.rotate(Math.atan2(fwd[0], -fwd[2]));
    fx.fillStyle = '#ff5a2a'; fx.strokeStyle = '#fff'; fx.lineWidth = 2;
    fx.beginPath(); fx.moveTo(0, -12); fx.lineTo(9, 9); fx.lineTo(0, 4); fx.lineTo(-9, 9); fx.closePath(); fx.fill(); fx.stroke(); fx.restore();
    visitedEl.textContent = `已到访 ${visited.size} / ${stops.length} · visited`;
  }
  fullMap.addEventListener('click', (e) => {
    const b = fullMap.getBoundingClientRect(), mx = (e.clientX - b.left) / b.width * fullMap.width, my = (e.clientY - b.top) / b.height * fullMap.height;
    let best = -1, bd = 40;
    stops.forEach((s, i) => { const d = Math.hypot((s.x + SIZE_X / 2) * fullScale - mx, (s.z + SIZE_Z / 2) * fullScale - my); if (d < bd) { bd = d; best = i; } });
    if (best >= 0) { mapDlg.close(); jumpTo(best); }
  });

  /* ---------- state ---------- */
  const keys = { gas: 0, brake: 0, left: 0, right: 0, hand: 0, boost: 0, jump: 0 };
  let current = null, raf = 0, viewing = null, vIndex = 0;
  let tod = qs.has('tod') ? parseFloat(qs.get('tod')) : 0.42, todTarget = null, lightsForced = null;
  let wxMode = WEATHERS.includes(qs.get('wx')) ? qs.get('wx') : 'auto', wxKind = 'clear', wxAmt = 0;
  let nightK = 0, regionKey = null, regionT = 0, phase = PHASES[0];
  // camera
  let view = qs.get('view') === 'map' ? 'map' : 'chase';
  let camYaw = 0, orbit = 0.0, pitch = 0.34, dist = 9.5, shake = 0, drag = null, cine = 0, viewK = view === 'map' ? 1 : 0;
  const camPos = new THREE.Vector3(), camLook = new THREE.Vector3(), desired = new THREE.Vector3(), lookT = new THREE.Vector3();
  const yawNorth = Math.PI / 2;      // nose (+x local) pointing north (−z)
  const placeCar = (x, z, yaw = yawNorth) => car.place(x, sample(x, z) + 1.3, z, yaw);
  const startAt = stops.find((s) => s.key === qs.get('at'));
  if (startAt) placeCar(startAt.x, startAt.z + 9); else placeCar(START.x, START.z + 2);
  const resetCar = () => { const p = car.body.translation(); placeCar(p.x, p.z, car.yaw()); };
  function jumpTo(i) {
    const s = stops[i]; if (!s) return;
    flash.classList.remove('is-on'); void flash.offsetWidth; flash.classList.add('is-on');
    setTimeout(() => { placeCar(s.x, s.z + 10); snapCam = true; }, 180);
  }
  let snapCam = true;

  /* ---------- photo viewer ---------- */
  function showPhoto() {
    const ph = viewing.photos[vIndex];
    vImg.classList.remove('is-in'); vImg.src = ph.m; vImg.onload = () => vImg.classList.add('is-in');
    vCap.innerHTML = `<span>${esc(viewing.en)} · ${esc(viewing.zh)}</span><span>${esc(ph.title)} <span class="zh">${esc(ph.zh)}</span></span><span>${String(vIndex + 1).padStart(2, '0')} / ${String(viewing.photos.length).padStart(2, '0')}</span>`;
  }
  function openViewer(s) { viewing = s; vIndex = 0; viewer.hidden = false; host.classList.add('is-viewing'); Object.keys(keys).forEach((k) => { keys[k] = 0; }); audio.pause(true); showPhoto(); }
  function closeViewer() { viewing = null; viewer.hidden = true; host.classList.remove('is-viewing'); audio.pause(false); }
  const stepPhoto = (d) => { vIndex = (vIndex + d + viewing.photos.length) % viewing.photos.length; showPhoto(); };
  viewer.addEventListener('click', (e) => {
    const v = e.target.closest('[data-v]')?.dataset.v;
    if (v === 'prev') stepPhoto(-1); if (v === 'next') stepPhoto(1);
    if (v === 'close' || e.target === viewer) closeViewer();
  });

  /* ---------- input ---------- */
  const map = { KeyW: 'gas', ArrowUp: 'gas', KeyS: 'brake', ArrowDown: 'brake', KeyA: 'left', ArrowLeft: 'left', KeyD: 'right', ArrowRight: 'right', KeyB: 'hand', ShiftLeft: 'boost', ShiftRight: 'boost' };
  const openMap = () => { if (mapDlg.open) { mapDlg.close(); return; } Object.keys(keys).forEach((k) => { keys[k] = 0; }); const p = car.body.translation(); drawFullMap(p, car.forward()); mapDlg.showModal(); audio.pause(true); };
  mapDlg.addEventListener('close', () => audio.pause(false));
  const toggleView = () => { view = view === 'chase' ? 'map' : 'chase'; };
  const nextWeather = () => { wxMode = WEATHERS[(WEATHERS.indexOf(wxMode) + 1) % WEATHERS.length]; };
  const onKey = (down) => (e) => {
    if (e.metaKey || e.ctrlKey || e.altKey) return;
    if (mapDlg.open) return;
    if (viewing) {
      if (!down) return;
      if (e.code === 'ArrowRight' || e.code === 'KeyD') stepPhoto(1);
      if (e.code === 'ArrowLeft' || e.code === 'KeyA') stepPhoto(-1);
      if (e.code === 'Escape' || e.code === 'Enter' || e.code === 'Backspace') closeViewer();
      e.preventDefault(); return;
    }
    if (map[e.code]) { keys[map[e.code]] = down ? 1 : 0; e.preventDefault(); }
    if (e.code === 'Space') { if (down && !e.repeat) keys.jump = 1; e.preventDefault(); }
    if (!down || e.repeat) return;
    if (e.code === 'KeyR') resetCar();
    if ((e.code === 'Enter' || e.code === 'KeyE') && current) openViewer(current);
    if (e.code === 'Escape') close();
    if (e.code === 'KeyN') nextPhase();
    if (e.code === 'KeyT') nextWeather();
    if (e.code === 'KeyM') openMap();
    if (e.code === 'KeyV') toggleView();
    if (e.code === 'KeyL') lightsForced = lightsForced === null ? !(nightK > 0.45) : lightsForced ? false : null;
    if (/^Digit[1-9]$/.test(e.code)) jumpTo(+e.code.slice(5) - 1);
  };
  const kd = onKey(true), ku = onKey(false);
  const blurAll = () => Object.keys(keys).forEach((k) => { keys[k] = 0; });
  addEventListener('keydown', kd); addEventListener('keyup', ku); addEventListener('blur', blurAll);
  host.querySelectorAll('.drive__pad [data-k]').forEach((b) => {
    const k = b.dataset.k;
    if (k === 'enter') { b.addEventListener('click', () => { if (current) openViewer(current); }); return; }
    const on = (e) => { e.preventDefault(); b.setPointerCapture?.(e.pointerId); keys[k] = 1; }, off = () => { if (k !== 'jump') keys[k] = 0; };
    b.addEventListener('pointerdown', on); b.addEventListener('pointerup', off); b.addEventListener('pointercancel', off); b.addEventListener('lostpointercapture', off);
  });
  host.addEventListener('click', async (e) => {
    const a = e.target.closest('[data-act]')?.dataset.act; if (!a) return;
    if (a === 'map') openMap();
    if (a === 'mapclose') mapDlg.close();
    if (a === 'view') toggleView();
    if (a === 'reset') resetCar();
    if (a === 'time') nextPhase();
    if (a === 'weather') nextWeather();
    if (a === 'sound') { soundBtn.disabled = true; try { const on = await audio.toggle(); soundBtn.setAttribute('aria-pressed', String(on)); soundBtn.querySelector('span').textContent = on ? '开' : '关'; } finally { soundBtn.disabled = false; } }
  });
  card.addEventListener('click', (e) => { if (e.target.closest('[data-open]')) { e.preventDefault(); if (current) openViewer(current); } });
  // drag the camera around the car, wheel to zoom
  canvas.addEventListener('pointerdown', (e) => { if (e.button !== 0 || drag) return; canvas.setPointerCapture(e.pointerId); drag = { id: e.pointerId, x: e.clientX, y: e.clientY }; });
  canvas.addEventListener('pointermove', (e) => {
    if (drag?.id !== e.pointerId) return;
    orbit -= 0.007 * (e.clientX - drag.x); pitch = clamp(pitch + 0.004 * (e.clientY - drag.y), 0.12, 1.1);
    drag.x = e.clientX; drag.y = e.clientY;
  });
  for (const ev of ['pointerup', 'pointercancel', 'lostpointercapture']) canvas.addEventListener(ev, (e) => { if (drag?.id === e.pointerId) drag = null; });
  canvas.addEventListener('wheel', (e) => { e.preventDefault(); dist = clamp(dist + e.deltaY * 0.01, 6, 18); }, { passive: false });

  function nextPhase() {
    const order = [...PHASES].sort((a, b) => a.tod - b.tod);
    const nx = order.find((p) => p.tod > (tod % 1) + 0.02) || order[0];
    todTarget = { from: tod, to: nx.tod > tod % 1 ? Math.floor(tod) + nx.tod : Math.floor(tod) + 1 + nx.tod, t: 0 };
  }

  /* ---------- sky / light ---------- */
  const NIGHT = new THREE.Color('#0c1330'), DAY = new THREE.Color('#c4dfee'), DUSK = new THREE.Color('#eaa27a'), DAWN = new THREE.Color('#e7b9c6');
  const TOP_DAY = new THREE.Color('#5f9fd6'), TOP_NIGHT = new THREE.Color('#050816'), TOP_DUSK = new THREE.Color('#6b6fa8');
  const SAND_FOG = new THREE.Color('#d2a466'), SNOW_FOG = new THREE.Color('#dfe6ee'), RAIN_FOG = new THREE.Color('#7f8c9c');
  const skyC = new THREE.Color(), tmpC = new THREE.Color();
  function applySky(focus) {
    const f = ((tod % 1) + 1) % 1, th = (f - 0.25) * Math.PI * 2, el = Math.sin(th);
    const dayK = smooth(-0.1, 0.22, el); nightK = 1 - dayK;
    const horizon = Math.exp(-Math.pow(el / 0.2, 2));
    skyC.copy(NIGHT).lerp(DAY, dayK).lerp(f < 0.5 ? DAWN : DUSK, horizon * 0.75);
    const a = wxAmt;
    let haze = 0;
    if (wxKind === 'sand') { skyC.lerp(tmpC.copy(SAND_FOG).multiplyScalar(lerp(0.35, 1, dayK)), a * 0.85); haze = a * 0.9; }
    if (wxKind === 'snow') { skyC.lerp(tmpC.copy(SNOW_FOG).multiplyScalar(lerp(0.3, 1, dayK)), a * 0.55); haze = a * 0.6; }
    if (wxKind === 'rain') { skyC.lerp(tmpC.copy(RAIN_FOG).multiplyScalar(lerp(0.3, 1, dayK)), a * 0.6); haze = a * 0.7; }
    scene.fog.color.copy(skyC);
    scene.fog.density = (view === 'map' ? 0.0045 : 0.0085) + (wxKind === 'sand' ? 0.034 : wxKind === 'snow' ? 0.014 : wxKind === 'rain' ? 0.01 : 0) * a;
    skyU.horizon.value.copy(skyC);
    skyU.top.value.copy(TOP_NIGHT).lerp(TOP_DAY, dayK).lerp(TOP_DUSK, horizon * 0.5);
    skyU.night.value = nightK; skyU.haze.value = haze;
    const sunDir = new THREE.Vector3(-Math.cos(th), Math.sin(th) * 0.9 + 0.05, 0.45).normalize();
    skyU.sunDir.value.copy(sunDir); skyU.sunCol.value.set('#ffd9a8').multiplyScalar(dayK);
    const dim = 1 - (wxKind === 'clear' ? 0 : a * 0.35);
    sun.color.set('#ffb27a').lerp(tmpC.set('#fff8ee'), smooth(0.02, 0.45, el));
    sun.intensity = 2.6 * dayK * dim;
    sun.position.set(focus.x + sunDir.x * 50, focus.y + Math.max(12, sunDir.y * 60), focus.z + sunDir.z * 50);
    sun.target.position.copy(focus);
    moon.intensity = 0.9 * nightK; moon.position.set(focus.x + 20, focus.y + 40, focus.z - 10); moon.target.position.copy(focus);
    hemi.intensity = (0.55 + 0.6 * dayK) * dim;
    hemi.color.copy(skyC).lerp(tmpC.set('#ffffff'), 0.35);
    hemi.groundColor.set('#8a7458').lerp(tmpC.set('#1a1f33'), nightK);
    renderer.toneMappingExposure = lerp(1.05, 1.28, nightK);
    bloom.strength = 0.22 + nightK * 0.45;
    W.glow.forEach((g) => { g.m.emissiveIntensity = lerp(g.day, g.night, smooth(0.25, 0.75, nightK)); });
    W.grassU.light.value.setRGB(lerp(0.13, 1, dayK) * dim, lerp(0.17, 1, dayK) * dim, lerp(0.3, 1, dayK) * dim);
    W.waterMat.uniforms.night.value = nightK; W.waterMat.uniforms.sky.value.copy(skyC);
    wxU.night.value = nightK;
    ffMat.opacity = smooth(0.5, 0.9, nightK) * (wxKind === 'clear' ? 1 : 1 - a);
    phase = [...PHASES].sort((p, q) => Math.abs(((f - p.tod + 1.5) % 1) - 0.5) - Math.abs(((f - q.tod + 1.5) % 1) - 0.5))[0];
    return f;
  }

  /* ---------- impacts ---------- */
  const IMPACT_COL = { tree: '#6f9a3c', hay: '#d9b45c', wood: '#c89a62', stone: '#cdbb9c', metal: '#c9ccd4' };
  function onHit(kind, sp, at) {
    shake = Math.max(shake, Math.min(0.5, sp * (kind === 'hay' ? 0.012 : kind === 'tree' ? 0.03 : 0.045)));
    const P = car.body.translation(), f = car.forward();
    const pan = clamp(((at.x - P.x) * -f[2] + (at.z - P.z) * f[0]) * 0.3, -1, 1);
    audio.bump(sp, kind, pan);
    const n = Math.min(10, Math.ceil(sp * 0.7));
    for (let k = 0; k < n; k++) puff(new THREE.Vector3(lerp(P.x, at.x, 0.6), P.y + 0.4, lerp(P.z, at.z, 0.6)), new THREE.Vector3((Math.random() - 0.5) * 6, 2 + Math.random() * 3, (Math.random() - 0.5) * 6), 0.35 + Math.random() * 0.3, tmpC.set(IMPACT_COL[kind] || IMPACT_COL.stone), 10, true);
  }

  /* ---------- loop ---------- */
  const tmpV = new THREE.Vector3(), tmpV2 = new THREE.Vector3(), q0 = new THREE.Quaternion(), q1 = new THREE.Quaternion();
  const resize = () => {
    const w = host.clientWidth, h = host.clientHeight;
    renderer.setSize(w, h, false); composer.setSize(w, h);
    camera.aspect = w / h; camera.updateProjectionMatrix();
    wxU.scale.value = h * renderer.getPixelRatio() * 0.9;
    blur.uniforms.aspect.value = w / h;
  };
  resize(); addEventListener('resize', resize);
  let last = performance.now(), trailClock = 0, uiClock = 0, leanP = 0, leanR = 0, blurK = 0, fovKick = 0;
  const prevVel = new THREE.Vector3();
  const startT = performance.now();
  $('.drive__load').classList.add('is-done'); setTimeout(() => $('.drive__load')?.remove(), 700);
  host.classList.add('is-intro'); requestAnimationFrame(() => requestAnimationFrame(() => host.classList.add('is-in')));
  const shapeBall = new R.Ball(0.35), identQ = { x: 0, y: 0, z: 0, w: 1 };
  const camFilter = (c) => physics.kinds.get(c.handle) !== 'tree';

  function frame(now) {
    if (!alive) return;
    raf = requestAnimationFrame(frame);
    const dt = Math.min(0.08, (now - last) / 1000); last = now;
    const tt = (now - startT) / 1000;
    if (mapDlg.open) return;

    if (todTarget) { todTarget.t = Math.min(1, todTarget.t + dt / 2.4); const e = todTarget.t * todTarget.t * (3 - 2 * todTarget.t); tod = lerp(todTarget.from, todTarget.to, e); if (todTarget.t >= 1) todTarget = null; }
    else if (!qs.has('tod')) tod += dt / 420;

    // simulate (fixed step), then draw the interpolated pose
    const bodyNow = car.body.translation(), bw0 = biomeAt(bodyNow.x, bodyNow.z);
    const env = { wet: wxKind === 'rain' ? wxAmt : 0, snow: (wxKind === 'snow' ? wxAmt * 0.6 : 0) + (sample(bodyNow.x, bodyNow.z) > 5.5 ? 0.5 : 0) };
    const input = viewing ? { gas: 0, brake: 0, left: 0, right: 0, hand: 1, boost: 0, jump: 0 } : keys;
    const isl = islandD(bodyNow.x, bodyNow.z);
    if (isl > 0.95) { const k = (isl - 0.95) * 60 * dt, r = Math.hypot(bodyNow.x, bodyNow.z) || 1; car.body.applyImpulse({ x: -bodyNow.x / r * k, y: 0, z: -bodyNow.z / r * k }, true); }
    const alpha = physics.step(dt, input, env, onHit);
    keys.jump = 0;
    const P0 = car.body.translation();
    if (P0.y < WATER_Y - 4 || Math.abs(P0.x) > SIZE_X / 2 + 4 || Math.abs(P0.z) > SIZE_Z / 2 + 4) { const n = nearestPlace(P0.x, P0.z); placeCar(PLACES[n.key].x, PLACES[n.key].z + 10); snapCam = true; }
    if (car.rescued) { car.rescued = false; snapCam = true; }

    const pose = car.pose(alpha);
    const P = pose.p;
    carG.position.set(P.x, P.y, P.z);
    q0.set(pose.q0.x, pose.q0.y, pose.q0.z, pose.q0.w); q1.set(pose.q1.x, pose.q1.y, pose.q1.z, pose.q1.w);
    carG.quaternion.copy(q0).slerp(q1, pose.a);
    const V = car.body.linvel(), speed = Math.hypot(V.x, V.z), fwd = car.forward(), fs = car.speed();
    // body lean from acceleration and cornering (visual only)
    tmpV.set(V.x - prevVel.x, 0, V.z - prevVel.z).divideScalar(Math.max(dt, 1e-3)); prevVel.set(V.x, V.y, V.z);
    const accF = tmpV.x * fwd[0] + tmpV.z * fwd[2], accS = tmpV.x * fwd[2] - tmpV.z * fwd[0];
    leanP = damp(leanP, clamp(-accF * 0.006, -0.06, 0.06), 6, dt);
    leanR = damp(leanR, clamp(accS * 0.008, -0.07, 0.07), 6, dt);
    lean.rotation.set(leanR, 0, leanP);
    wheels.forEach((w, i) => { w.pivot.position.y = w.y - pose.travel[i]; w.pivot.rotation.y = pose.steer[i]; w.spin.rotation.z = -pose.spin[i]; });

    // lights
    const braking = (keys.brake && fs > 0.6) || (keys.gas && fs < -0.6) || keys.hand;
    const lightsOn = lightsForced !== null ? lightsForced : nightK > 0.45 || (wxKind !== 'clear' && wxAmt > 0.5);
    setGlow('head', lightsOn ? 2.2 : 0.3);
    heads.forEach((l) => { l.intensity = lightsOn ? 12 : 0; });
    setGlow('tail', braking ? 5 : lightsOn ? 1.4 : 0.15);
    setGlow('reverse', keys.brake && fs < -0.3 ? 3.5 : 0);
    const blink = Math.sin(tt * Math.PI * 3.2) > 0 ? 4 : 0;
    setGlow('indL', keys.left && !keys.right ? blink : 0);
    setGlow('indR', keys.right && !keys.left ? blink : 0);

    // ground contact: tracks, skids, pressed grass, dust / snow / splash
    trailClock += dt;
    const ws = car.wheels(), onSnow = sample(P.x, P.z) > 5.5, wading = car.waterDepth;
    const slip = Math.abs(V.x * fwd[2] - V.z * fwd[0]);
    const skidding = car.contacts > 0 && speed > 3 && (keys.hand || slip > 3.5 || (braking && speed > 6));
    ws.forEach((w, i) => {
      if (!w.contact || !w.point || w.point.y < WATER_Y + 0.05) return;
      tmpV.set(w.point.x, w.point.y, w.point.z);
      if (tmpV.distanceTo(lastTrack[i]) > 0.3) {
        lastTrack[i].copy(tmpV);
        if (i >= 2 && speed > 0.5) stamp(tracks, w.point, fwd);
        if (skidding && (i >= 2 || slip > 5)) stamp(skids, w.point, fwd);
      }
    });
    if (trailClock > 0.08) { trailClock = 0; if (speed > 0.8) for (const w of ws) if (w.contact && w.point) W.pressGrass(w.point.x, w.point.z, tt); }
    const bw = biomeAt(P.x, P.z);
    if ((speed > 3 && car.contacts > 0) || (wading > 0.05 && speed > 1.2) || skidding) {
      dcol.set(wading > 0.05 ? '#f4fbff' : onSnow ? '#ffffff' : (bw.meadow || 0) + (bw.autumn || 0) + (bw.plane || 0) > 0.5 ? '#8a7a5a' : (bw.danxia || 0) > 0.4 ? '#c88b66' : '#e9dcc4');
      for (const wi of [2, 3]) {
        const wp = ws[wi].point;
        if (!wp || Math.random() > Math.min(0.9, speed / 16 + (skidding ? 0.4 : 0))) continue;
        puff(tmpV.set(wp.x, Math.max(wp.y, WATER_Y) + 0.1, wp.z), tmpV2.set(-V.x * 0.1 + (Math.random() - 0.5), (wading > 0.05 ? 2.6 : 0.6) + Math.random() * 0.9, -V.z * 0.1 + (Math.random() - 0.5)), (wading > 0.05 ? 1.1 : skidding ? 1.0 : 0.6) + Math.random() * 0.9, dcol);
      }
    }
    for (let i = 0; i < DUST; i++) {
      const pf = puffs[i];
      if (pf.life > 0) { pf.life -= dt * (pf.debris ? 1.6 : 1.1); pf.p.addScaledVector(pf.v, dt); if (!pf.debris) pf.v.multiplyScalar(0.95); pf.v.y -= dt * pf.g; if (pf.debris) { const g = sample(pf.p.x, pf.p.z); if (pf.p.y < g) { pf.p.y = g; pf.v.multiplyScalar(0.3); } } }
      const k = Math.max(0, pf.life);
      ds.setScalar(k > 0 ? (pf.debris ? pf.s * Math.min(1, k * 2) : pf.s * (1.6 - k) * Math.min(1, k * 3)) : 0.0001);
      dm.compose(pf.p, pf.debris ? dq.setFromEuler(de.set(tt * 6 + i, i, tt * 4)) : dq.identity(), ds); dust.setMatrixAt(i, dm);
    }
    dust.instanceMatrix.needsUpdate = true;

    // stops
    const prevStop = current;
    if (!viewing) current = ST.update(dt, tt, P, nightK);
    if (current !== prevStop) {
      if (current) {
        const c = current;
        card.innerHTML = `<p class="mono">${esc(c.region || '')}${c.region ? ' · ' : ''}${c.photos.length} frames</p><h3>${esc(c.en)}<span class="zh">${esc(c.zh)}</span></h3>
          <div class="drive__btns"><a class="pill pill--light" href="#" data-open><span class="dot"></span>View photos · Enter</a>${c.href ? `<a class="pill pill--ghost" href="${esc(c.href)}"><span class="dot"></span>${esc(c.hrefLabel || 'Chapter')} →</a>` : ''}</div>`;
        card.classList.add('is-on');
      } else card.classList.remove('is-on');
    }
    for (const s of stops) if (Math.hypot(P.x - s.x, P.z - s.z) < 14) visited.add(s.key);

    /* ---------- camera ---------- */
    viewK = damp(viewK, view === 'map' ? 1 : 0, 3, dt);
    cine = damp(cine, current && speed < 3.5 ? 1 : 0, 1.6, dt);
    const hd = Math.atan2(fwd[0], fwd[2]);
    if (fwd[0] * fwd[0] + fwd[2] * fwd[2] > 0.2) camYaw = snapCam ? hd : angDamp(camYaw, hd, fs < -1 ? 1.2 : 4.6, dt);
    if (!drag && (keys.gas || keys.brake) && Math.abs(orbit) > 0.001) orbit = damp(orbit, 0, 1.1, dt);
    // chase: behind the car, a little above, looking slightly ahead
    const yawC = camYaw + orbit, d = dist + (camera.aspect < 1 ? 2 : 0), cp = Math.cos(pitch), sp2 = Math.sin(pitch);
    const lead = smooth(2, 11, speed) * 2.2;
    lookT.set(P.x + Math.sin(camYaw) * lead, P.y + 0.85, P.z + Math.cos(camYaw) * lead);
    desired.set(P.x - Math.sin(yawC) * d * cp, P.y + 0.9 + d * sp2, P.z - Math.cos(yawC) * d * cp);
    // the overview (old top-down) and the framed shot at a stop blend in on top
    if (viewK > 0.001) {
      const zoom = 1 + Math.min(0.35, speed * 0.016);
      tmpV.set(P.x + 9 * zoom, P.y + 14 * zoom, P.z + 15 * zoom);
      desired.lerp(tmpV, viewK); lookT.lerp(tmpV2.set(P.x + V.x * 0.35, P.y * 0.5, P.z + V.z * 0.35), viewK);
    }
    if (current && cine > 0.001) {
      tmpV.set(current.x + 3.5, current.gy + 6.5, current.z + 15.5);
      desired.lerp(tmpV, cine); lookT.lerp(current.focus, cine);
    }
    // keep the camera clear of hills, walls and landmarks (trees open up instead)
    const gy = sample(desired.x, desired.z); if (desired.y < gy + 1.3) desired.y = gy + 1.3;
    tmpV.subVectors(desired, lookT); const len = tmpV.length();
    if (len > 0.5 && viewK < 0.5) {
      tmpV.divideScalar(len);
      const hit = physics.world.castShape(lookT, identQ, tmpV, shapeBall, 0, len, false, R.QueryFilterFlags.EXCLUDE_DYNAMIC | R.QueryFilterFlags.EXCLUDE_SENSORS, undefined, undefined, car.body, camFilter);
      if (hit) desired.copy(lookT).addScaledVector(tmpV, Math.max(1.2, hit.time_of_impact - 0.15));
    }
    if (snapCam) { camPos.copy(desired); camLook.copy(lookT); snapCam = false; }
    camPos.lerp(desired, 1 - Math.exp(-(drag ? 14 : 7) * dt));
    camLook.lerp(lookT, 1 - Math.exp(-9 * dt));
    shake = damp(shake, 0, 7, dt);
    camera.position.copy(camPos);
    if (!reduced && shake > 0.002) { camera.position.x += Math.sin(tt * 63) * shake * 0.5; camera.position.y += Math.cos(tt * 82) * shake * 0.35; }
    camera.lookAt(camLook);
    fovKick = damp(fovKick, keys.boost && keys.gas && speed > 8 ? 7 : 0, 3, dt);
    const fov = (camera.aspect < 1 ? 62 : 50) * (1 - viewK) + (camera.aspect < 1 ? 50 : 36) * viewK + fovKick * (1 - viewK);
    if (Math.abs(camera.fov - fov) > 0.01) { camera.fov = fov; camera.updateProjectionMatrix(); }
    camera.updateMatrixWorld();
    sky.position.copy(camera.position);
    { const v = tmpV.set(P.x, P.y + 0.3, P.z).project(camera), pr = renderer.getPixelRatio();
      WIND.carScreen.value.set((v.x + 1) / 2 * host.clientWidth * pr, (v.y + 1) / 2 * host.clientHeight * pr, v.z * 0.5 + 0.5);
      WIND.seeR.value = host.clientHeight * pr * (view === 'map' ? 0.12 : 0.16); }
    // speed blur, never over the car
    {
      let x0 = 1, y0 = 1, x1 = 0, y1 = 0;
      for (const c of carCorners) { tmpV.copy(c).applyMatrix4(carG.matrixWorld).project(camera); const u = tmpV.x * 0.5 + 0.5, v = tmpV.y * 0.5 + 0.5; x0 = Math.min(x0, u); y0 = Math.min(y0, v); x1 = Math.max(x1, u); y1 = Math.max(y1, v); }
      blur.uniforms.rect.value.set(x0 - 0.02, y0 - 0.02, x1 + 0.02, y1 + 0.02);
      const target = (smooth(9, 17, speed) * 0.25 + smooth(11, 22, speed) * (keys.boost ? 0.8 : 0.5)) * (1 - viewK) * (1 - cine) * (drag ? 0 : 1) * (1 - clamp(shake * 2, 0, 0.8));
      blurK = damp(blurK, target, target > blurK ? 5 : 10, dt);
      blur.uniforms.power.value = blurK;
    }

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
    wxU.t.value = tt; wxU.center.value.copy(camera.position);
    const gust = 0.5 + 0.5 * Math.sin(tt * 0.7) * Math.sin(tt * 0.31);
    const windStr = wxKind === 'sand' ? 4 + gust * 6 : wxKind === 'rain' ? 2 : wxKind === 'snow' ? 1.2 : 0.6;
    wxU.wind.value.set(windStr * 1.4 * wxAmt + 0.3, windStr * 0.5 * wxAmt);
    WIND.strength.value = 0.6 + (wxKind === 'clear' ? 0 : wxAmt * windStr * 0.3);
    const f = applySky(P);

    W.update(dt, tt, {
      carPos: new THREE.Vector3(P.x, P.y - 0.5, P.z), vel: new THREE.Vector3(V.x, V.y, V.z), speed, focus: P,
      onShake: (t) => {
        const c = tmpC.set(t.type === 'ginkgo' ? '#efbd2c' : t.type === 'blossom' ? '#f2b6c6' : t.type === 'palm' ? '#6f9a3c' : t.type.startsWith('fir') ? '#3b6b47' : '#86a24a');
        for (let k = 0; k < 7; k++) puff(new THREE.Vector3(t.x + (Math.random() - 0.5) * 2, t.y + 2.2 + Math.random() * 2 * t.s, t.z + (Math.random() - 0.5) * 2), new THREE.Vector3((Math.random() - 0.5) * 1.5, 0.3, (Math.random() - 0.5) * 1.5), 0.45, c, 2.5);
        audio.bump(Math.max(2, speed * 0.6), 'tree', 0);
      },
    });
    if (ffMat.opacity > 0.01) {
      ffBase.forEach(([x, y, z, ph], i) => { ffPos[i * 3] = x + Math.sin(tt * 0.6 + ph) * 1.2; ffPos[i * 3 + 1] = y + Math.sin(tt * 1.1 + ph * 2) * 0.4; ffPos[i * 3 + 2] = z + Math.cos(tt * 0.5 + ph) * 1.2; });
      ffGeo.attributes.position.needsUpdate = true;
    }

    audio.drive({
      speed, throttle: keys.gas - keys.brake, boost: keys.boost, dt, grounded: car.contacts > 0, wading: clamp(wading, 0, 1),
      surface: onSnow ? 'snow' : (bw0.desert || 0) + (bw0.danxia || 0) > 0.5 ? 'sand' : W.grassU && ((bw0.meadow || 0) + (bw0.autumn || 0) + (bw0.plane || 0) + (bw0.field || 0) > 0.55) && grid.road(P.x, P.z) > 2.4 ? 'grass' : 'gravel',
      skid: skidding ? clamp(slip / 7 + (keys.hand ? 0.5 : 0), 0, 1) : 0, wind: wxKind === 'sand' ? wxAmt : wxAmt * 0.3, rain: wxKind === 'rain' ? wxAmt : 0,
    });

    // HUD
    uiClock -= dt;
    if (uiClock <= 0) {
      uiClock = 0.08;
      speedEl.value = String(Math.round(speed * 3.6)).padStart(2, '0');
      const s = stops.find((x) => x.key === n.key);
      placeEl.textContent = s ? (n.d < 26 ? `${s.zh} · ${s.en}` : `去往 ${s.zh} · toward ${s.en}`) : '—';
      const mins = Math.floor(f * 24 * 60);
      timeBtn.textContent = `${phase.zh} ${String(Math.floor(mins / 60)).padStart(2, '0')}:${String(mins % 60).padStart(2, '0')}`;
      wxBtn.textContent = `${wxKind === 'clear' || wxAmt < 0.2 ? WX_LABEL.clear : WX_LABEL[wxKind]}${wxMode === 'auto' ? '' : ' ·T'}`;
      host.querySelector('[data-act="view"]').firstChild.textContent = view === 'chase' ? '俯视 ' : '跟车 ';
    }
    drawRadar(P, camYaw + Math.PI);

    composer.render();
  }
  raf = requestAnimationFrame(frame);

  close = () => {
    if (!alive) return;
    alive = false; cancelAnimationFrame(raf);
    removeEventListener('keydown', kd); removeEventListener('keyup', ku); removeEventListener('resize', resize); removeEventListener('blur', blurAll);
    audio.pause(true);
    composer.dispose?.(); renderer.dispose(); host.innerHTML = '';
    onClose?.();
  };
  window.__drive = {
    stops, get car() { return car.body.translation(); }, carApi: car, jumpTo, nextPhase, open: (i) => openViewer(stops[i]), keys,
    setTod: (x) => { tod = x; }, setWx: (x) => { wxMode = x; wxKind = x === 'auto' ? wxKind : x; wxAmt = 1; }, setView: (v) => { view = v; }, setOrbit: (o, p, d) => { orbit = o; if (p != null) pitch = p; if (d != null) dist = d; },
  };
  return { close: () => close() };
}

window.X1NG_DRIVE = {
  mount(host, opts) {
    const p = mountDrive(host, opts);
    p.catch((e) => { console.error(e); host.innerHTML = '<p class="drive__load mono">Drive mode could not load · 加载失败</p>'; setTimeout(() => opts?.onClose?.(), 2000); });
    return p;
  },
};
