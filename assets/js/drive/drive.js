/* ==========================================================================
   Drive — the places in the archive as one small island you drive across
   (presentation in the spirit of bruno-simon.com; everything here is ours).

   Each place I photographed is a stop: drive into its ring and press Enter
   to look at the photographs taken there, without leaving the world.
   The land changes with the place — dunes and pyramids for Egypt, red
   yardangs and a salt lake for Qinghai–Gansu, snowy peaks and meadows for
   Yunnan, a red gate for Beijing, towers for Nanjing and Shanghai.
   Grass bends under the tyres, the car leaves tracks, brakes and indicators
   light up, day turns to night (N), and the weather follows the region
   (or press T): sandstorms in the desert, snow in the mountains, rain on
   the coast. The sea is the edge of the world.

   Built as its own bundle (assets/js/build/drive.js), loaded only on demand.
   window.X1NG_DRIVE.mount(host, { stops, onOpen, onClose })
   ========================================================================== */
import * as THREE from '../../vendor/three.min.js';
import * as CANNON from '../../vendor/cannon-es.js';
import { EffectComposer } from '../../vendor/three-addons/postprocessing/EffectComposer.js';
import { RenderPass } from '../../vendor/three-addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from '../../vendor/three-addons/postprocessing/UnrealBloomPass.js';
import { OutputPass } from '../../vendor/three-addons/postprocessing/OutputPass.js';
import { buildWorld, PLACES, START, WATER_Y, SIZE_X, SIZE_Z, biomeAt, nearestPlace, islandD } from './world.js';

const BLUE = 0x2233ff;
const esc = (s) => String(s ?? '').replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const smooth = (a, b, x) => { const t = Math.min(1, Math.max(0, (x - a) / (b - a))); return t * t * (3 - 2 * t); };
const lerp = (a, b, t) => a + (b - a) * t;

function stopDecal(st) {
  const S = 1024, c = document.createElement('canvas'); c.width = c.height = S;
  const x = c.getContext('2d');
  x.strokeStyle = 'rgba(34,51,255,.85)'; x.lineWidth = 12; x.setLineDash([36, 24]);
  x.beginPath(); x.arc(S / 2, S / 2, S * 0.45, 0, Math.PI * 2); x.stroke(); x.setLineDash([]);
  x.fillStyle = 'rgba(11,12,16,.82)'; x.textAlign = 'center'; x.textBaseline = 'middle';
  x.font = '600 150px Geist, sans-serif'; x.fillText(st.en, S / 2, S * 0.44, S * 0.8);
  x.font = '500 64px Geist, sans-serif'; x.fillText(`${st.zh} · ${st.photos.length}`, S / 2, S * 0.6);
  x.font = '500 38px Geist Mono, monospace'; x.fillText('ENTER · 看照片', S / 2, S * 0.71);
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 8; return t;
}
function letterTex(ch) {
  const c = document.createElement('canvas'); c.width = c.height = 256; const x = c.getContext('2d');
  x.fillStyle = '#f4efe6'; x.fillRect(0, 0, 256, 256); x.fillStyle = '#2233ff'; x.textAlign = 'center'; x.textBaseline = 'middle';
  x.font = '700 200px Geist, sans-serif'; x.fillText(ch, 128, 138);
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; return t;
}

const PHASES = [{ tod: 0.44, en: 'Day', zh: '白天' }, { tod: 0.705, en: 'Golden hour', zh: '黄昏' }, { tod: 0.93, en: 'Night', zh: '夜' }, { tod: 0.255, en: 'Dawn', zh: '清晨' }];
const WEATHERS = ['auto', 'clear', 'rain', 'snow', 'sand'];
const WX_LABEL = { clear: 'Clear · 晴', rain: 'Rain · 雨', snow: 'Snow · 雪', sand: 'Sandstorm · 沙尘暴' };
const REGION_WX = { giza: 'sand', cairo: 'sand', luxor: 'clear', qinggan: 'sand', yunnan: 'snow', beijing: 'snow', nanjing: 'rain', shanghai: 'rain', road: 'clear' };

export function mountDrive(host, { stops: stopData = [], onOpen, onClose } = {}) {
  const coarse = matchMedia('(pointer: coarse)').matches;
  const qs = new URLSearchParams(location.search);
  host.innerHTML = `
    <canvas class="drive__canvas"></canvas>
    <div class="drive__hud mono">
      <span class="drive__title">Drive · 开车逛照片</span>
      <span class="drive__where"></span>
      <span class="drive__status"></span>
      <span class="drive__keys">${coarse ? 'Use the pad · 按钮驾驶' : 'WASD / arrows drive · Space brake · Enter photos · N day/night · T weather · L lights · 1–9 jump · R reset'}</span>
    </div>
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
    <div class="drive__load mono">Building the island · 正在造岛</div>`;
  const canvas = host.querySelector('.drive__canvas');
  const card = host.querySelector('.drive__card');
  const whereEl = host.querySelector('.drive__where'), statusEl = host.querySelector('.drive__status');
  const viewer = host.querySelector('.drive__viewer'), vImg = viewer.querySelector('img'), vCap = viewer.querySelector('figcaption');
  const flash = host.querySelector('.drive__flash');

  /* ---------- renderer / scene ---------- */
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, powerPreference: 'high-performance' });
  renderer.setPixelRatio(Math.min(devicePixelRatio, coarse ? 1.25 : 1.75));
  renderer.shadowMap.enabled = true; renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  const scene = new THREE.Scene();
  scene.background = new THREE.Color();
  scene.fog = new THREE.Fog(0xbcd9ea, 45, 130);
  const camera = new THREE.PerspectiveCamera(38, 1, 0.5, 400);
  const hemi = new THREE.HemisphereLight(0xdcecff, 0x8a7458, 1.1);
  const sun = new THREE.DirectionalLight(0xffffff, 2.4);
  sun.castShadow = true;
  sun.shadow.mapSize.set(coarse ? 1024 : 2048, coarse ? 1024 : 2048);
  Object.assign(sun.shadow.camera, { left: -32, right: 32, top: 32, bottom: -32, near: 1, far: 120 });
  sun.shadow.bias = -0.0006; sun.shadow.normalBias = 0.04;
  const moon = new THREE.DirectionalLight(0x8aa2ff, 0);
  scene.add(hemi, sun, sun.target, moon, moon.target);

  const composer = new EffectComposer(renderer);
  composer.addPass(new RenderPass(scene, camera));
  const bloom = new UnrealBloomPass(new THREE.Vector2(256, 256), 0.4, 0.55, 0.82);
  if (!coarse) composer.addPass(bloom);
  composer.addPass(new OutputPass());

  /* ---------- physics ---------- */
  const world = new CANNON.World({ gravity: new CANNON.Vec3(0, -9.82, 0) });
  world.allowSleep = true;
  world.defaultContactMaterial.friction = 0.4;

  const W = buildWorld(scene, world, { coarse });
  const { sample } = W;
  const wheelMat = new CANNON.Material('wheel');

  const sync = [];   // [mesh, body]
  const pops = [];
  const pop = (obj, delay) => { obj.userData.pop = delay; obj.userData.base = obj.scale.clone(); obj.scale.setScalar(0.0001); pops.push(obj); };
  const addDynamic = (mesh, body, delay = 0.6 + Math.random() * 0.8) => { mesh.castShadow = true; mesh.receiveShadow = true; scene.add(mesh); world.addBody(body); sync.push([mesh, body]); pop(mesh, delay); };

  /* ---------- the car ---------- */
  const chassis = new CANNON.Body({ mass: 150 });
  chassis.addShape(new CANNON.Box(new CANNON.Vec3(1.1, 0.3, 0.64)), new CANNON.Vec3(0, 0.15, 0));
  chassis.addShape(new CANNON.Box(new CANNON.Vec3(0.55, 0.24, 0.56)), new CANNON.Vec3(0.12, 0.66, 0));
  chassis.angularDamping = 0.5; chassis.linearDamping = 0.05; chassis.allowSleep = false;
  const vehicle = new CANNON.RaycastVehicle({ chassisBody: chassis });
  const wheelOpt = {
    radius: 0.4, directionLocal: new CANNON.Vec3(0, -1, 0), suspensionStiffness: 48, suspensionRestLength: 0.38,
    frictionSlip: 2.2, dampingRelaxation: 2.4, dampingCompression: 4.6, maxSuspensionForce: 100000, rollInfluence: 0.03,
    axleLocal: new CANNON.Vec3(0, 0, 1), maxSuspensionTravel: 0.3, customSlidingRotationalSpeed: -30, useCustomSlidingRotationalSpeed: true,
  };
  [[-0.76, 0.05, 0.66], [-0.76, 0.05, -0.66], [0.78, 0.05, 0.66], [0.78, 0.05, -0.66]].forEach(([x, y, z]) => vehicle.addWheel({ ...wheelOpt, chassisConnectionPointLocal: new CANNON.Vec3(x, y, z) }));
  vehicle.addToWorld(world);
  const wheelBodies = vehicle.wheelInfos.map((w) => {
    const b = new CANNON.Body({ mass: 0, material: wheelMat, type: CANNON.Body.KINEMATIC, collisionFilterGroup: 0 });
    b.addShape(new CANNON.Cylinder(w.radius, w.radius, w.radius / 2, 16), new CANNON.Vec3(), new CANNON.Quaternion().setFromEuler(-Math.PI / 2, 0, 0));
    world.addBody(b); return b;
  });

  const car = new THREE.Group();
  const paint = new THREE.MeshStandardMaterial({ color: BLUE, roughness: 0.32, metalness: 0.25 });
  const trim = new THREE.MeshStandardMaterial({ color: 0x15171e, roughness: 0.6 });
  const glass = new THREE.MeshStandardMaterial({ color: 0x9fb4e8, roughness: 0.08, metalness: 0.6 });
  const em = (color) => new THREE.MeshStandardMaterial({ color: 0x111111, emissive: color, emissiveIntensity: 0, roughness: 0.4 });
  const headMat = em(0xfff1c8), tailMat = em(0xff1a2c), revMat = em(0xffffff), indL = em(0xffa21a), indR = em(0xffa21a);
  const box = (w, h, d, m, x, y, z) => { const o = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), m); o.position.set(x, y, z); o.castShadow = true; car.add(o); return o; };
  box(2.2, 0.5, 1.28, paint, 0, 0.12, 0);                 // body
  box(2.08, 0.14, 1.32, trim, 0, -0.16, 0);               // sill
  box(0.16, 0.2, 1.34, trim, -1.12, -0.04, 0);            // front bumper
  box(0.16, 0.2, 1.34, trim, 1.12, -0.04, 0);             // rear bumper
  box(1.16, 0.46, 1.1, glass, 0.12, 0.6, 0);              // cabin
  box(1.22, 0.08, 1.16, paint, 0.12, 0.86, 0);            // roof
  box(0.12, 0.4, 1.16, paint, -0.42, 0.6, 0).rotation.z = -0.35;   // A-pillar
  [-0.42, 0.42].forEach((z) => {
    box(0.06, 0.14, 0.3, headMat, -1.11, 0.2, z);
    box(0.06, 0.12, 0.26, tailMat, 1.11, 0.22, z);
    box(0.06, 0.08, 0.12, revMat, 1.115, 0.06, z * 0.6);
  });
  box(0.06, 0.08, 0.12, indL, -1.11, 0.2, 0.6); box(0.06, 0.08, 0.12, indL, 1.11, 0.22, 0.6);
  box(0.06, 0.08, 0.12, indR, -1.11, 0.2, -0.6); box(0.06, 0.08, 0.12, indR, 1.11, 0.22, -0.6);
  // a silhouette you can see through mountains and buildings
  const ghost = new THREE.Mesh(new THREE.BoxGeometry(2.3, 0.9, 1.34), new THREE.MeshBasicMaterial({ color: 0x8fa0ff, transparent: true, opacity: 0.32, depthFunc: THREE.GreaterDepth, depthWrite: false }));
  ghost.position.y = 0.3; ghost.renderOrder = 10; car.add(ghost);
  // headlights
  const heads = [-0.42, 0.42].map((z) => {
    const l = new THREE.SpotLight(0xfff0d0, 0, 40, 0.5, 0.6, 1.0);
    l.position.set(-1.15, 0.2, z); l.target.position.set(-9, -1.2, z * 2.2);
    car.add(l, l.target); return l;
  });
  scene.add(car);
  const tyre = new THREE.MeshStandardMaterial({ color: 0x15171e, roughness: 0.85 });
  const hub = new THREE.MeshStandardMaterial({ color: 0xd9dce6, roughness: 0.35, metalness: 0.6 });
  const wheelMeshes = vehicle.wheelInfos.map((w) => {
    const g = new THREE.Group();
    const t = new THREE.Mesh(new THREE.CylinderGeometry(w.radius, w.radius, 0.32, 22).rotateX(Math.PI / 2), tyre); t.castShadow = true;
    const h = new THREE.Mesh(new THREE.CylinderGeometry(w.radius * 0.55, w.radius * 0.55, 0.34, 6).rotateX(Math.PI / 2), hub);
    g.add(t, h); scene.add(g); return g;
  });

  /* ---------- tyre tracks ---------- */
  const TRACKS = 900;
  const trackMesh = new THREE.InstancedMesh(new THREE.PlaneGeometry(0.42, 0.26).rotateX(-Math.PI / 2),
    new THREE.MeshBasicMaterial({ color: 0x3a2c22, transparent: true, opacity: 0.26, depthWrite: false, polygonOffset: true, polygonOffsetFactor: -2 }), TRACKS);
  trackMesh.frustumCulled = false; trackMesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
  const zero = new THREE.Matrix4().makeScale(0, 0, 0);
  for (let i = 0; i < TRACKS; i++) trackMesh.setMatrixAt(i, zero);
  trackMesh.renderOrder = 1; scene.add(trackMesh);
  let trackI = 0; const lastTrack = [new THREE.Vector3(1e9, 0, 0), new THREE.Vector3(1e9, 0, 0)];

  /* ---------- dust / splash / snow spray ---------- */
  const DUST = 140;
  const dust = new THREE.InstancedMesh(new THREE.IcosahedronGeometry(0.16, 0), new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 1 }), DUST);
  dust.instanceMatrix.setUsage(THREE.DynamicDrawUsage); dust.frustumCulled = false; scene.add(dust);
  for (let i = 0; i < DUST; i++) dust.setColorAt(i, new THREE.Color(0xe9dcc4));
  const puffs = Array.from({ length: DUST }, () => ({ life: 0, p: new THREE.Vector3(), v: new THREE.Vector3(), s: 1 }));
  let puffI = 0;
  const dm = new THREE.Matrix4(), dq = new THREE.Quaternion(), ds = new THREE.Vector3(), dcol = new THREE.Color();

  /* ---------- weather particles (one cloud that follows the camera) ---------- */
  const WN = coarse ? 3500 : 9000;
  const wpos = new Float32Array(WN * 3); for (let i = 0; i < WN * 3; i++) wpos[i] = Math.random();
  const wgeo = new THREE.BufferGeometry(); wgeo.setAttribute('position', new THREE.BufferAttribute(wpos, 3));
  const wxU = { t: { value: 0 }, center: { value: new THREE.Vector3() }, kind: { value: 0 }, amount: { value: 0 }, wind: { value: new THREE.Vector2(0, 0) }, scale: { value: 400 }, night: { value: 0 } };
  const wxMat = new THREE.ShaderMaterial({
    uniforms: wxU, transparent: true, depthWrite: false,
    vertexShader: `
      uniform float t, kind, amount, scale; uniform vec3 center; uniform vec2 wind; varying float vA; varying float vK;
      void main(){
        vec3 box = vec3(74.0, 30.0, 74.0);
        float r = fract(position.x * 7.13 + position.z * 3.7);
        vA = step(r, amount); vK = kind;
        vec3 vel = kind < 0.5 ? vec3(wind.x * 0.4, -26.0, wind.y * 0.4)                  // rain
                 : kind < 1.5 ? vec3(wind.x * 0.25 + sin(t + r * 20.0) * 0.6, -2.2, wind.y * 0.25 + cos(t * 0.8 + r * 13.0) * 0.6)   // snow
                 : vec3(wind.x * 2.6, sin(t * 2.0 + r * 30.0) * 1.2, wind.y * 2.6);       // sand
        vec3 p = position * box + vel * t;
        vec3 o = center - box * 0.5; o.y = center.y - 4.0;
        p = mod(p - o, box) + o;
        vec4 mv = modelViewMatrix * vec4(p, 1.0);
        float sz = kind < 0.5 ? 0.22 : kind < 1.5 ? 0.16 : 0.16;
        gl_PointSize = sz * scale / -mv.z;
        gl_Position = projectionMatrix * mv;
      }`,
    fragmentShader: `
      uniform float night; varying float vA; varying float vK;
      void main(){
        if (vA < 0.5) discard;
        vec2 c = gl_PointCoord - 0.5; float a;
        vec3 col;
        if (vK < 0.5) { a = (1.0 - smoothstep(0.0, 0.05, abs(c.x + c.y * 0.18))) * (1.0 - smoothstep(0.3, 0.5, abs(c.y))); col = vec3(0.78, 0.86, 1.0); a *= 0.55; }
        else if (vK < 1.5) { a = 1.0 - smoothstep(0.15, 0.5, length(c)); col = vec3(1.0); a *= 0.9; }
        else { a = (1.0 - smoothstep(0.0, 0.5, length(c * vec2(0.5, 2.2)))) * 0.75; col = vec3(0.86, 0.66, 0.42); }
        col *= mix(1.0, 0.5, night);
        gl_FragColor = vec4(col, a);
      }`,
  });
  const wx = new THREE.Points(wgeo, wxMat); wx.frustumCulled = false; wx.renderOrder = 5; scene.add(wx);

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

  /* ---------- "X1NG" letters at the start, waiting to be knocked over ---------- */
  const side = new THREE.MeshStandardMaterial({ color: 0xf4efe6, roughness: 0.8 });
  [...'X1NG'].forEach((ch, i) => {
    const hx = 0.6, hy = 0.75, hz = 0.24;
    const m = new THREE.Mesh(new THREE.BoxGeometry(hx * 2, hy * 2, hz * 2), [side, side, side, side, new THREE.MeshStandardMaterial({ map: letterTex(ch), roughness: 0.8 }), side]);
    const b = new CANNON.Body({ mass: 3, shape: new CANNON.Box(new CANNON.Vec3(hx, hy, hz)) });
    b.position.set(START.x + (i - 1.5) * 1.4, sample(START.x, START.z - 4) + hy + 0.02, START.z - 4); b.sleepSpeedLimit = 0.2;
    addDynamic(m, b, 0.5 + i * 0.1);
  });

  /* ---------- stops: one per place ---------- */
  const loader = new THREE.TextureLoader();
  const stops = [];
  stopData.forEach((st, si) => {
    const P = PLACES[st.key]; if (!P) return;
    const gy = sample(P.x, P.z);
    const decal = new THREE.Mesh(new THREE.PlaneGeometry(11, 11), new THREE.MeshStandardMaterial({ map: stopDecal(st), transparent: true, roughness: 1, depthWrite: false, polygonOffset: true, polygonOffsetFactor: -3 }));
    decal.rotation.x = -Math.PI / 2; decal.position.set(P.x, gy + 0.03, P.z); decal.receiveShadow = true; decal.renderOrder = 1; scene.add(decal); pop(decal, 0.9 + si * 0.08);
    const ring = new THREE.Mesh(new THREE.TorusGeometry(5.1, 0.09, 8, 96), new THREE.MeshStandardMaterial({ color: BLUE, emissive: BLUE, emissiveIntensity: 0.6, transparent: true, opacity: 0.3 }));
    ring.rotation.x = -Math.PI / 2; ring.position.set(P.x, gy + 0.1, P.z); scene.add(ring);
    // a beacon you can see from afar
    const beacon = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.06, 1, 6, 1, true), new THREE.MeshBasicMaterial({ color: 0xaab4ff, transparent: true, opacity: 0.35, depthWrite: false, blending: THREE.AdditiveBlending }));
    beacon.scale.y = 30; beacon.position.set(P.x, gy + 15, P.z); scene.add(beacon);
    // its photographs, standing up on the plaza's edge
    st.photos.slice(0, 5).forEach((ph, k) => {
      const ar = ph.ratio || 1.5, h = ar >= 1 ? 1.7 : 2.3, w = h * ar, d = 0.08;
      const front = new THREE.MeshStandardMaterial({ color: 0x222222, roughness: 0.55 });
      loader.load(ph.s, (t) => { t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 4; front.map = t; front.color.set(0xffffff); front.needsUpdate = true; });
      const paper = new THREE.MeshStandardMaterial({ color: 0xf6f3ee, roughness: 0.9 });
      const m = new THREE.Mesh(new THREE.BoxGeometry(w + 0.12, h + 0.12, d), [paper, paper, paper, paper, front, paper]);
      const b = new CANNON.Body({ mass: 1.2, shape: new CANNON.Box(new CANNON.Vec3((w + 0.12) / 2, (h + 0.12) / 2, d / 2)) });
      const a = (k - 2) * 0.5 + Math.PI, R = 7.4;   // an arc on the far (north) side, facing the camera
      b.position.set(P.x + Math.sin(a) * R, gy + h / 2 + 0.12, P.z + Math.cos(a) * R);
      b.quaternion.setFromEuler(0, a + Math.PI, 0);
      b.sleepSpeedLimit = 0.15;
      addDynamic(m, b, 1 + si * 0.08 + k * 0.05);
    });
    stops.push({ ...st, x: P.x, z: P.z, ring, beacon });
  });

  /* ---------- a few cones and crates along the way ---------- */
  const coneMat = new THREE.MeshStandardMaterial({ color: 0xff6a2b, roughness: 0.6 });
  const crateMat = new THREE.MeshStandardMaterial({ color: 0xc89a62, roughness: 0.9 });
  const scatterProps = (x, z, n) => {
    for (let k = 0; k < n; k++) {
      const px = x + (Math.random() - 0.5) * 6, pz = z + (Math.random() - 0.5) * 6, gy = sample(px, pz);
      if (gy < 0) continue;
      if (k % 2) {
        const m = new THREE.Mesh(new THREE.ConeGeometry(0.28, 0.75, 14), coneMat);
        const b = new CANNON.Body({ mass: 0.4, shape: new CANNON.Cylinder(0.05, 0.28, 0.75, 8) }); b.position.set(px, gy + 0.4, pz); addDynamic(m, b);
      } else {
        const s = 0.35 + Math.random() * 0.2;
        const m = new THREE.Mesh(new THREE.BoxGeometry(s * 2, s * 2, s * 2), crateMat);
        const b = new CANNON.Body({ mass: 1.5, shape: new CANNON.Box(new CANNON.Vec3(s, s, s)) }); b.position.set(px, gy + s + 0.05, pz); addDynamic(m, b);
      }
    }
  };
  scatterProps(START.x + 6, START.z + 2, 6);
  stops.forEach((s) => scatterProps((s.x + START.x) / 2 + 4, (s.z + START.z) / 2, 4));

  /* ---------- minimap ---------- */
  const mapC = host.querySelector('.drive__map'), mx = mapC.getContext('2d');
  const mapBase = document.createElement('canvas'); mapBase.width = 240; mapBase.height = 160;
  {
    const g = mapBase.getContext('2d'), img = g.createImageData(240, 160);
    const col = W.terrain.geometry.attributes.color, pos = W.terrain.geometry.attributes.position;
    for (let k = 0; k < pos.count; k++) {
      const px = Math.floor((pos.getX(k) + SIZE_X / 2) / SIZE_X * 239.99), pz = Math.floor((pos.getZ(k) + SIZE_Z / 2) / SIZE_Z * 159.99);
      const o = (pz * 240 + px) * 4, h = pos.getY(k);
      const water = h < WATER_Y;
      img.data[o] = water ? 60 : Math.min(255, col.getX(k) * 255 * 1.1); img.data[o + 1] = water ? 140 : Math.min(255, col.getY(k) * 255 * 1.1); img.data[o + 2] = water ? 180 : Math.min(255, col.getZ(k) * 255 * 1.1); img.data[o + 3] = 255;
    }
    g.putImageData(img, 0, 0);
  }
  const toMap = (x, z) => [(x + SIZE_X / 2) / SIZE_X * 240, (z + SIZE_Z / 2) / SIZE_Z * 160];
  function drawMap(yaw) {
    mx.clearRect(0, 0, 240, 160); mx.drawImage(mapBase, 0, 0);
    stops.forEach((s, i) => {
      const [x, y] = toMap(s.x, s.z);
      mx.fillStyle = s === current ? '#fff' : 'rgba(34,51,255,.95)'; mx.beginPath(); mx.arc(x, y, 4.5, 0, 7); mx.fill();
      mx.fillStyle = '#fff'; mx.font = '600 9px Geist Mono, monospace'; mx.fillText(String(i + 1), x + 6, y + 3);
    });
    const [cx, cy] = toMap(chassis.position.x, chassis.position.z);
    mx.save(); mx.translate(cx, cy); mx.rotate(yaw);
    mx.fillStyle = '#0b0c10'; mx.beginPath(); mx.moveTo(0, -6); mx.lineTo(4.5, 5); mx.lineTo(-4.5, 5); mx.closePath(); mx.fill();
    mx.strokeStyle = '#fff'; mx.lineWidth = 1.5; mx.stroke(); mx.restore();
  }

  /* ---------- state ---------- */
  const keys = { gas: 0, brake: 0, left: 0, right: 0, hand: 0 };
  let current = null, raf = 0, alive = true, steer = 0, viewing = null, vIndex = 0;
  let tod = qs.has('tod') ? parseFloat(qs.get('tod')) : 0.44, todTarget = null, lightsForced = null;
  let wxMode = WEATHERS.includes(qs.get('wx')) ? qs.get('wx') : 'auto', wxKind = 'clear', wxAmt = 0;
  let phaseLabel = '';

  function placeCar(x, z, yaw = 0) {
    chassis.position.set(x, sample(x, z) + 1.3, z);
    chassis.quaternion.setFromEuler(0, yaw, 0);
    chassis.velocity.setZero(); chassis.angularVelocity.setZero();
  }
  const yawNorth = -Math.PI / 2;    // the nose (−x local) pointing up the screen (−z)
  const startAt = stops.find((s) => s.key === qs.get('at'));
  if (startAt) placeCar(startAt.x, startAt.z + 8, yawNorth); else placeCar(START.x, START.z + 2, yawNorth);

  function heading() { const f = new CANNON.Vec3(); chassis.quaternion.vmult(new CANNON.Vec3(-1, 0, 0), f); return f; }
  function resetCar() { const f = heading(); placeCar(chassis.position.x, chassis.position.z, Math.atan2(f.z, -f.x)); }
  function jumpTo(i) {
    const s = stops[i]; if (!s) return;
    flash.classList.remove('is-on'); void flash.offsetWidth; flash.classList.add('is-on');
    setTimeout(() => { placeCar(s.x, s.z + 9, yawNorth); camera.position.set(s.x + 9, 30, s.z + 24); }, 180);
  }

  /* ---------- photo viewer ---------- */
  function showPhoto() {
    const ph = viewing.photos[vIndex];
    vImg.classList.remove('is-in'); vImg.src = ph.m;
    vImg.onload = () => vImg.classList.add('is-in');
    vCap.innerHTML = `<span>${esc(viewing.en)} · ${esc(viewing.zh)}</span><span>${esc(ph.title)} <span class="zh">${esc(ph.zh)}</span></span><span>${String(vIndex + 1).padStart(2, '0')} / ${String(viewing.photos.length).padStart(2, '0')}</span>`;
  }
  function openViewer(s) {
    viewing = s; vIndex = 0; viewer.hidden = false; host.classList.add('is-viewing');
    Object.keys(keys).forEach((k) => { keys[k] = 0; });
    showPhoto();
  }
  function closeViewer() { viewing = null; viewer.hidden = true; host.classList.remove('is-viewing'); }
  viewer.addEventListener('click', (e) => {
    const v = e.target.closest('[data-v]')?.dataset.v;
    if (v === 'prev') { vIndex = (vIndex - 1 + viewing.photos.length) % viewing.photos.length; showPhoto(); }
    if (v === 'next') { vIndex = (vIndex + 1) % viewing.photos.length; showPhoto(); }
    if (v === 'close' || e.target === viewer) closeViewer();
  });

  /* ---------- input ---------- */
  const map = { KeyW: 'gas', ArrowUp: 'gas', KeyS: 'brake', ArrowDown: 'brake', KeyA: 'left', ArrowLeft: 'left', KeyD: 'right', ArrowRight: 'right', Space: 'hand' };
  const onKey = (down) => (e) => {
    if (viewing) {
      if (!down) return;
      if (e.code === 'ArrowRight' || e.code === 'KeyD') { vIndex = (vIndex + 1) % viewing.photos.length; showPhoto(); }
      if (e.code === 'ArrowLeft' || e.code === 'KeyA') { vIndex = (vIndex - 1 + viewing.photos.length) % viewing.photos.length; showPhoto(); }
      if (e.code === 'Escape' || e.code === 'Enter' || e.code === 'Backspace') closeViewer();
      e.preventDefault(); return;
    }
    if (map[e.code]) { keys[map[e.code]] = down ? 1 : 0; e.preventDefault(); }
    if (!down) return;
    if (e.code === 'KeyR') resetCar();
    if (e.code === 'Enter' && current) openViewer(current);
    if (e.code === 'Escape') close();
    if (e.code === 'KeyN') nextPhase();
    if (e.code === 'KeyT') { wxMode = WEATHERS[(WEATHERS.indexOf(wxMode) + 1) % WEATHERS.length]; }
    if (e.code === 'KeyL') lightsForced = lightsForced === null ? !(nightK > 0.5) : lightsForced ? false : null;
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
  host.querySelector('.drive__close').addEventListener('click', () => close());
  card.addEventListener('click', (e) => {
    const a = e.target.closest('[data-open]'); if (!a) return;
    e.preventDefault(); if (current) openViewer(current);
  });

  function nextPhase() {
    // go forward to the next phase after the current time of day
    const order = [...PHASES].sort((a, b) => a.tod - b.tod);
    const nx = order.find((p) => p.tod > (tod % 1) + 0.02) || order[0];
    todTarget = { from: tod, to: nx.tod > tod % 1 ? Math.floor(tod) + nx.tod : Math.floor(tod) + 1 + nx.tod, t: 0 };
  }

  /* ---------- sky / light ---------- */
  const NIGHT = new THREE.Color('#0c1330'), DAY = new THREE.Color('#bcdcee'), DUSK = new THREE.Color('#eaa27a'), DAWN = new THREE.Color('#e7b9c6');
  const SAND_FOG = new THREE.Color('#d2a466'), SNOW_FOG = new THREE.Color('#dfe6ee'), RAIN_FOG = new THREE.Color('#7f8c9c');
  const skyC = new THREE.Color(), tmpC = new THREE.Color();
  let nightK = 0;
  function applySky(focus) {
    const f = ((tod % 1) + 1) % 1;
    const th = (f - 0.25) * Math.PI * 2, el = Math.sin(th);
    const dayK = smooth(-0.1, 0.22, el); nightK = 1 - dayK;
    const horizon = Math.exp(-Math.pow(el / 0.2, 2));
    skyC.copy(NIGHT).lerp(DAY, dayK).lerp(f < 0.5 ? DAWN : DUSK, horizon * 0.75);
    // weather tints
    const a = wxAmt;
    if (wxKind === 'sand') skyC.lerp(tmpC.copy(SAND_FOG).multiplyScalar(lerp(0.35, 1, dayK)), a * 0.85);
    if (wxKind === 'snow') skyC.lerp(tmpC.copy(SNOW_FOG).multiplyScalar(lerp(0.3, 1, dayK)), a * 0.55);
    if (wxKind === 'rain') skyC.lerp(tmpC.copy(RAIN_FOG).multiplyScalar(lerp(0.3, 1, dayK)), a * 0.6);
    scene.background.copy(skyC); scene.fog.color.copy(skyC);
    const near = wxKind === 'sand' ? lerp(45, 6, a) : wxKind === 'snow' ? lerp(45, 16, a) : wxKind === 'rain' ? lerp(45, 22, a) : 45;
    const far = wxKind === 'sand' ? lerp(130, 62, a) : wxKind === 'snow' ? lerp(130, 74, a) : wxKind === 'rain' ? lerp(130, 85, a) : 130;
    scene.fog.near = near; scene.fog.far = far;
    const dim = 1 - (wxKind === 'clear' ? 0 : a * 0.35);
    sun.color.set('#ffb27a').lerp(tmpC.set('#fff8ee'), smooth(0.02, 0.45, el));
    sun.intensity = 2.5 * dayK * dim;
    sun.position.set(focus.x - Math.cos(th) * 40, 12 + Math.max(0.1, el) * 40, focus.z + 18);
    sun.target.position.copy(focus);
    moon.intensity = 0.9 * nightK; moon.position.set(focus.x + 20, 40, focus.z - 10); moon.target.position.copy(focus);
    hemi.intensity = (0.55 + 0.6 * dayK) * dim;
    hemi.color.copy(skyC).lerp(tmpC.set('#ffffff'), 0.35);
    hemi.groundColor.set('#8a7458').lerp(tmpC.set('#1a1f33'), nightK);
    renderer.toneMappingExposure = lerp(1.0, 1.25, nightK);
    bloom.strength = 0.22 + nightK * 0.45;
    // things that glow at night
    W.glow.forEach((g) => { g.m.emissiveIntensity = lerp(g.day, g.night, smooth(0.25, 0.75, nightK)); });
    W.grassU.light.value.setRGB(lerp(0.13, 1, dayK) * dim, lerp(0.17, 1, dayK) * dim, lerp(0.3, 1, dayK) * dim);
    W.waterMat.uniforms.night.value = nightK; W.waterMat.uniforms.sky.value.copy(skyC);
    wxU.night.value = nightK;
    ffMat.opacity = smooth(0.5, 0.9, nightK) * (wxKind === 'clear' ? 1 : 1 - a);
    const ph = [...PHASES].sort((p, q) => Math.abs(((f - p.tod + 1.5) % 1) - 0.5) - Math.abs(((f - q.tod + 1.5) % 1) - 0.5))[0];
    phaseLabel = `${ph.en} · ${ph.zh}`;
  }

  /* ---------- loop ---------- */
  const camPos = new THREE.Vector3(), camLook = new THREE.Vector3(), tmpV = new THREE.Vector3(), up = new THREE.Vector3(0, 1, 0);
  const resize = () => {
    const w = host.clientWidth, h = host.clientHeight;
    renderer.setSize(w, h, false); composer.setSize(w, h);
    camera.aspect = w / h; camera.fov = camera.aspect < 0.8 ? 52 : 38; camera.updateProjectionMatrix();
    wxU.scale.value = h * renderer.getPixelRatio() * 0.9;
  };
  resize(); addEventListener('resize', resize);
  let last = performance.now(), trailClock = 0, trailI = 0, lastStatus = '';
  const startT = performance.now();
  camLook.set(chassis.position.x, 0, chassis.position.z);
  camera.position.set(camLook.x + 30, 90, camLook.z + 60); camera.lookAt(camLook);
  host.querySelector('.drive__load').remove();
  host.classList.add('is-intro'); requestAnimationFrame(() => requestAnimationFrame(() => host.classList.add('is-in')));

  function frame(now) {
    if (!alive) return;
    raf = requestAnimationFrame(frame);
    const dt = Math.min(0.05, (now - last) / 1000); last = now;
    const tt = (now - startT) / 1000;

    // time of day
    if (todTarget) { todTarget.t = Math.min(1, todTarget.t + dt / 2.4); const e = todTarget.t * todTarget.t * (3 - 2 * todTarget.t); tod = lerp(todTarget.from, todTarget.to, e); if (todTarget.t >= 1) todTarget = null; }
    else if (!qs.has('tod')) tod += dt / 420;

    // driving
    const speed = chassis.velocity.length();
    const fwd = heading();
    const fwdSpeed = chassis.velocity.dot(fwd);
    const force = 780;
    const engine = viewing ? 0 : keys.gas ? (fwdSpeed > 24 ? 0 : -force) : keys.brake ? (fwdSpeed > 1 ? 0 : force * 0.65) : 0;
    vehicle.applyEngineForce(engine, 2); vehicle.applyEngineForce(engine, 3);
    const braking = keys.brake && fwdSpeed > 1;
    const brake = (braking ? 9 : 0) + (keys.hand ? 16 : 0) + (!keys.gas && !keys.brake ? 0.8 : 0);
    for (let i = 0; i < 4; i++) vehicle.setBrake(brake, i);
    const steerT = (keys.left - keys.right) * lerp(0.6, 0.26, Math.min(1, speed / 20));
    steer += (steerT - steer) * Math.min(1, dt * 9);
    vehicle.setSteeringValue(steer, 0); vehicle.setSteeringValue(steer, 1);

    // the sea: drag in the water, a current that carries you back to the beach
    const inWater = chassis.position.y < WATER_Y + 0.55;
    if (inWater) chassis.velocity.scale(1 - Math.min(0.5, dt * 1.6), chassis.velocity);
    const isl = islandD(chassis.position.x, chassis.position.z);
    if (isl > 0.95) { tmpV.set(-chassis.position.x, 0, -chassis.position.z).normalize(); const k = (isl - 0.95) * 9000; chassis.applyForce(new CANNON.Vec3(tmpV.x * k, 0, tmpV.z * k)); }
    world.fixedStep(1 / 60, dt);
    if (chassis.position.y < WATER_Y - 4 || Math.abs(chassis.position.x) > SIZE_X / 2 + 4 || Math.abs(chassis.position.z) > SIZE_Z / 2 + 4) { const n = nearestPlace(chassis.position.x, chassis.position.z); placeCar(PLACES[n.key].x, PLACES[n.key].z + 9, yawNorth); }

    car.position.copy(chassis.position); car.quaternion.copy(chassis.quaternion);
    vehicle.wheelInfos.forEach((w, i) => { vehicle.updateWheelTransform(i); const t = w.worldTransform; wheelBodies[i].position.copy(t.position); wheelBodies[i].quaternion.copy(t.quaternion); wheelMeshes[i].position.copy(t.position); wheelMeshes[i].quaternion.copy(t.quaternion); });
    sync.forEach(([m, b]) => { m.position.copy(b.position); m.quaternion.copy(b.quaternion); });

    // lights
    const lightsOn = lightsForced !== null ? lightsForced : nightK > 0.45 || (wxKind !== 'clear' && wxAmt > 0.5);
    headMat.emissiveIntensity = lightsOn ? 2.2 : 0.35;
    heads.forEach((l) => { l.intensity = lightsOn ? 9 : 0; });
    tailMat.emissiveIntensity = braking || keys.hand ? 6 : lightsOn ? 1.6 : 0.25;
    revMat.emissiveIntensity = keys.brake && fwdSpeed < -0.3 ? 4 : 0;
    const blink = Math.sin(tt * Math.PI * 3.2) > 0 ? 5 : 0;
    indL.emissiveIntensity = keys.left && !keys.right ? blink : 0;
    indR.emissiveIntensity = keys.right && !keys.left ? blink : 0;

    // ground contact effects: tracks, pressed grass, dust / snow / splash
    const wheelsDown = vehicle.wheelInfos[2].isInContact || vehicle.wheelInfos[3].isInContact;
    trailClock += dt;
    [2, 3].forEach((wi, j) => {
      const w = vehicle.wheelInfos[wi]; if (!w.isInContact) return;
      const hp = w.raycastResult.hitPointWorld, hn = w.raycastResult.hitNormalWorld;
      if (hp.y < WATER_Y + 0.05) return;
      tmpV.set(hp.x, hp.y, hp.z);
      if (tmpV.distanceTo(lastTrack[j]) > 0.32) {
        lastTrack[j].copy(tmpV);
        const n = new THREE.Vector3(hn.x, hn.y, hn.z), f = new THREE.Vector3(fwd.x, fwd.y, fwd.z);
        const r = new THREE.Vector3().crossVectors(n, f).normalize(); f.crossVectors(r, n).normalize();
        dm.makeBasis(f, n, r).setPosition(hp.x + hn.x * 0.03, hp.y + hn.y * 0.03, hp.z + hn.z * 0.03);
        trackMesh.setMatrixAt(trackI = (trackI + 1) % TRACKS, dm); trackMesh.instanceMatrix.needsUpdate = true;
      }
    });
    if (trailClock > 0.09 && speed > 0.8 && wheelsDown) {
      trailClock = 0;
      [0, 1, 2, 3].forEach((wi) => { const p = vehicle.wheelInfos[wi].worldTransform.position; W.grassU.trail.value[trailI = (trailI + 1) % W.TRAIL].set(p.x, now / 1000, p.z, 0); });
    }
    W.grassU.trail.value.forEach((v) => { v.w = Math.min(1, Math.max(0, (now / 1000 - v.y) / 7)); });

    const bw = biomeAt(chassis.position.x, chassis.position.z);
    const onSnow = sample(chassis.position.x, chassis.position.z) > 5.5;
    if ((speed > 2.5 && wheelsDown) || (inWater && speed > 1.2)) {
      dcol.set(inWater ? '#f4fbff' : onSnow ? '#ffffff' : (bw.meadow || 0) > 0.5 ? '#8a7a5a' : (bw.danxia || 0) > 0.4 ? '#c88b66' : '#e9dcc4');
      for (const wi of [2, 3]) {
        if (Math.random() > Math.min(0.9, speed / 18)) continue;
        const pf = puffs[puffI = (puffI + 1) % DUST], i = puffI;
        pf.life = 1; pf.s = (inWater ? 1.1 : 0.6) + Math.random() * 0.9;
        pf.p.copy(vehicle.wheelInfos[wi].worldTransform.position); pf.p.y -= 0.25;
        pf.v.set(-chassis.velocity.x * 0.1 + (Math.random() - 0.5), (inWater ? 2.4 : 0.6) + Math.random() * 0.9, -chassis.velocity.z * 0.1 + (Math.random() - 0.5));
        dust.setColorAt(i, dcol);
      }
      dust.instanceColor.needsUpdate = true;
    }
    for (let i = 0; i < DUST; i++) {
      const pf = puffs[i];
      if (pf.life > 0) { pf.life -= dt * 1.1; pf.p.addScaledVector(pf.v, dt); pf.v.multiplyScalar(0.95); pf.v.y -= dt * 1.5; }
      const k = Math.max(0, pf.life);
      ds.setScalar(k > 0 ? pf.s * (1.6 - k) * Math.min(1, k * 3) : 0.0001);
      dm.compose(pf.p, dq, ds); dust.setMatrixAt(i, dm);
    }
    dust.instanceMatrix.needsUpdate = true;

    // pop-in with a little overshoot
    for (let i = pops.length - 1; i >= 0; i--) {
      const o = pops[i], x = (tt - o.userData.pop) / 0.6;
      if (x <= 0) continue;
      const e = x >= 1 ? 1 : 1 + 2.2 * Math.pow(x - 1, 3) + 1.2 * Math.pow(x - 1, 2);
      o.scale.copy(o.userData.base).multiplyScalar(Math.max(0.0001, e));
      if (x >= 1) { o.scale.copy(o.userData.base); pops.splice(i, 1); }
    }

    // follow camera (fixed angle, leaning ahead, pulling back with speed); the intro drops in from above
    const lead = tmpV.set(chassis.velocity.x, 0, chassis.velocity.z).multiplyScalar(0.35);
    camLook.lerp(new THREE.Vector3(car.position.x, car.position.y * 0.5, car.position.z).add(lead), Math.min(1, dt * 3));
    const zoom = 1 + Math.min(0.35, speed * 0.016);
    camPos.copy(camLook).add(new THREE.Vector3(9 * zoom, (14 + Math.min(4, speed * 0.2)) * zoom, 15 * zoom));
    const intro = smooth(0, 2.4, tt);
    camera.position.lerp(camPos, intro < 1 ? Math.min(1, dt * (0.8 + intro * 3)) : Math.min(1, dt * 4));
    camera.lookAt(camLook);

    // weather
    const n = nearestPlace(chassis.position.x, chassis.position.z);
    const want = wxMode === 'auto' ? (onSnow ? 'snow' : n.d < 24 ? REGION_WX[n.key] || 'clear' : 'clear') : wxMode;
    if (want === wxKind) wxAmt = Math.min(1, wxAmt + dt * 0.5);
    else { wxAmt = Math.max(0, wxAmt - dt * 0.7); if (wxAmt === 0) wxKind = want; }
    wxU.kind.value = wxKind === 'rain' ? 0 : wxKind === 'snow' ? 1 : 2;
    wxU.amount.value = wxKind === 'clear' ? 0 : wxAmt * (wxKind === 'sand' ? 1 : 0.85);
    wxU.t.value = tt; wxU.center.value.copy(camLook);
    const gust = 0.5 + 0.5 * Math.sin(tt * 0.7) * Math.sin(tt * 0.31);
    const windStr = wxKind === 'sand' ? 4 + gust * 6 : wxKind === 'rain' ? 2 : wxKind === 'snow' ? 1.2 : 0.6;
    wxU.wind.value.set(windStr * 1.4 * wxAmt + 0.3, windStr * 0.5 * wxAmt);
    W.grassU.wind.value = 0.6 + (wxKind === 'clear' ? 0 : wxAmt * windStr * 0.35);
    W.grassU.t.value = tt; W.waterMat.uniforms.t.value = tt; W.waterMat.uniforms.car.value.copy(chassis.position);
    applySky(camLook);

    // balloons, lanterns, fireflies, beacons
    W.balloons.forEach((b, i) => { b.g.position.y = b.y + Math.sin(tt * 0.4 + b.ph) * 1.2; b.g.position.x += Math.sin(tt * 0.05 + i) * dt * 0.3; b.flame.visible = Math.sin(tt * 3 + b.ph * 5) > 0.6; });
    W.lanterns.forEach((l, i) => { l.rotation.z = Math.sin(tt * 1.3 + i) * 0.12; });
    if (ffMat.opacity > 0.01) {
      ffBase.forEach(([x, y, z, ph], i) => { ffPos[i * 3] = x + Math.sin(tt * 0.6 + ph) * 1.2; ffPos[i * 3 + 1] = y + Math.sin(tt * 1.1 + ph * 2) * 0.4; ffPos[i * 3 + 2] = z + Math.cos(tt * 0.5 + ph) * 1.2; });
      ffGeo.attributes.position.needsUpdate = true;
    }

    // which stop are you in?
    let inStop = null;
    stops.forEach((s) => {
      const d = Math.hypot(car.position.x - s.x, car.position.z - s.z);
      const k = smooth(10, 5, d);
      s.ring.material.opacity = 0.3 + k * 0.7; s.ring.material.emissiveIntensity = 0.6 + k * 2.5 + nightK;
      s.ring.scale.setScalar(1 + Math.sin(now / 300) * 0.02 * k);
      s.beacon.material.opacity = (0.18 + nightK * 0.4) * smooth(8, 26, d);
      if (d < 5.1) inStop = s;
    });
    if (inStop !== current) {
      current = inStop;
      if (current) {
        const c = current;
        card.innerHTML = `<p class="mono">${esc(c.region || '')}${c.region ? ' · ' : ''}${c.photos.length} frames</p><h3>${esc(c.en)}<span class="zh">${esc(c.zh)}</span></h3>
          <div class="drive__btns"><a class="pill pill--light" href="#" data-open><span class="dot"></span>View photos · Enter</a>${c.href ? `<a class="pill pill--ghost" href="${esc(c.href)}"><span class="dot"></span>${esc(c.hrefLabel || 'Chapter')} →</a>` : ''}</div>`;
        card.classList.add('is-on');
      } else card.classList.remove('is-on');
    }
    const status = `${n.d < 22 ? `${stops.find((s) => s.key === n.key)?.en || ''} · ` : ''}${phaseLabel} · ${wxKind === 'clear' || wxAmt < 0.2 ? WX_LABEL.clear : WX_LABEL[wxKind]}${wxMode === 'auto' ? '' : ' (T)'}`;
    if (status !== lastStatus) { statusEl.textContent = status; lastStatus = status; }
    whereEl.textContent = '';
    drawMap(Math.atan2(fwd.x, -fwd.z));

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
  window.__drive = { stops, open: (i) => openViewer(stops[i]), get car() { return chassis.position; }, jumpTo, nextPhase, setTod: (v) => { tod = v; }, setWx: (v) => { wxMode = v; wxKind = v === 'auto' ? wxKind : v; wxAmt = 1; } };
  return { close };
}

window.X1NG_DRIVE = { mount: mountDrive };
