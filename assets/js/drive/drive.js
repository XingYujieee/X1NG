/* ==========================================================================
   Drive — the Travel chapters as a little world you drive through
   (in the spirit of bruno-simon.com).

   A small blue car on a desert floor. Each travel chapter is a stop: its
   number and name are painted on the ground, its photographs stand up as
   prints you can knock over. Drive into a stop's ring to open that chapter.
   "TRAVEL" stands at the start, waiting to be crashed into.

   Built as its own bundle (assets/js/build/drive.js) and loaded only when
   someone presses "Drive". Exposes window.X1NG_DRIVE.mount(host, data).
   ========================================================================== */
import * as THREE from '../../vendor/three.min.js';
import * as CANNON from '../../vendor/cannon-es.js';

const SAND = 0xd9c6a5, INK = '#0b0c10', BLUE = 0x2233ff;

function textTexture(lines, { w = 1024, h = 1024, bg = null, color = INK, font = '600 180px Geist, sans-serif', align = 'center', sub = null } = {}) {
  const c = document.createElement('canvas'); c.width = w; c.height = h;
  const x = c.getContext('2d');
  if (bg) { x.fillStyle = bg; x.fillRect(0, 0, w, h); }
  x.fillStyle = color; x.textAlign = align; x.textBaseline = 'middle';
  x.font = font;
  lines.forEach((l, i) => x.fillText(l, align === 'center' ? w / 2 : 40, h / 2 + (i - (lines.length - 1) / 2) * parseInt(font.match(/(\d+)px/)[1], 10) * 1.05));
  if (sub) { x.font = '500 46px Geist Mono, monospace'; x.fillText(sub, align === 'center' ? w / 2 : 40, h * 0.86); }
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 4; return t;
}

function stopDecal(ch) {
  // the stop painted on the desert floor: ring, big chapter number, name
  const S = 1024, c = document.createElement('canvas'); c.width = c.height = S;
  const x = c.getContext('2d');
  x.strokeStyle = 'rgba(11,12,16,.75)'; x.lineWidth = 10; x.setLineDash([34, 26]);
  x.beginPath(); x.arc(S / 2, S / 2, S * 0.44, 0, Math.PI * 2); x.stroke(); x.setLineDash([]);
  x.fillStyle = 'rgba(11,12,16,.85)'; x.textAlign = 'center'; x.textBaseline = 'middle';
  x.font = '600 300px Geist, sans-serif'; x.fillText(String(ch.chapter).padStart(2, '0'), S / 2, S * 0.42);
  x.font = '500 64px Geist, sans-serif'; x.fillText(ch.en, S / 2, S * 0.64);
  x.font = '500 40px Geist Mono, monospace'; x.fillText(`${ch.zh}  ·  ${ch.year}`.toUpperCase(), S / 2, S * 0.73);
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 8; return t;
}

export function mountDrive(host, { chapters = [], onOpen, onClose } = {}) {
  const coarse = matchMedia('(pointer: coarse)').matches;
  host.innerHTML = `
    <canvas class="drive__canvas"></canvas>
    <div class="drive__hud mono">
      <span>Drive · 开车逛游记</span>
      <span class="drive__keys">${coarse ? 'Use the pad · 按钮驾驶' : 'W A S D / ← ↑ → ↓ · Space brake · R reset · Enter open'}</span>
    </div>
    <button class="drive__close" type="button" aria-label="Leave drive mode">✕</button>
    <div class="drive__card" aria-live="polite"></div>
    <div class="drive__pad" ${coarse ? '' : 'hidden'}>
      <button type="button" data-k="left" aria-label="Steer left">◀</button><button type="button" data-k="right" aria-label="Steer right">▶</button>
      <button type="button" data-k="brake" aria-label="Reverse">▼</button><button type="button" data-k="gas" aria-label="Accelerate">▲</button>
    </div>
    <div class="drive__load mono">Loading the desert · 正在铺沙</div>`;
  const canvas = host.querySelector('canvas');
  const card = host.querySelector('.drive__card');

  /* ---------- renderer / scene ---------- */
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, powerPreference: 'high-performance' });
  renderer.setPixelRatio(Math.min(devicePixelRatio, coarse ? 1.5 : 2));
  renderer.shadowMap.enabled = true; renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0xe7d8bd);
  scene.fog = new THREE.Fog(0xe7d8bd, 38, 95);
  const camera = new THREE.PerspectiveCamera(38, 1, 0.5, 300);
  scene.add(new THREE.HemisphereLight(0xfff4e0, 0x8a6f4c, 1.1));
  const sun = new THREE.DirectionalLight(0xffffff, 2.3);
  sun.position.set(-14, 26, 10); sun.castShadow = true;
  sun.shadow.mapSize.set(coarse ? 1024 : 2048, coarse ? 1024 : 2048);
  Object.assign(sun.shadow.camera, { left: -30, right: 30, top: 30, bottom: -30, near: 1, far: 80 });
  scene.add(sun, sun.target);

  /* ---------- physics ---------- */
  const world = new CANNON.World({ gravity: new CANNON.Vec3(0, -9.82, 0) });
  // (default naive broadphase: SAP's AABB queries miss the infinite ground plane, so the wheel rays would never land)
  world.allowSleep = true;
  world.defaultContactMaterial.friction = 0.35;
  const groundMat = new CANNON.Material('ground'), wheelMat = new CANNON.Material('wheel');
  world.addContactMaterial(new CANNON.ContactMaterial(wheelMat, groundMat, { friction: 0.3, restitution: 0, contactEquationStiffness: 1000 }));

  // desert floor
  // a thick slab rather than CANNON.Plane: the wheel rays miss a rotated plane away from the origin
  const ground = new CANNON.Body({ mass: 0, material: groundMat, shape: new CANNON.Box(new CANNON.Vec3(130, 1, 130)) });
  ground.position.set(0, -1, 0); world.addBody(ground);
  const floorGeo = new THREE.PlaneGeometry(260, 260, 120, 120);
  { // dunes far away, flat where you drive
    const p = floorGeo.attributes.position;
    for (let i = 0; i < p.count; i++) {
      const x = p.getX(i), y = p.getY(i), r = Math.hypot(x, y);
      const dune = Math.sin(x * 0.07) * Math.cos(y * 0.05) * 2.4 + Math.sin(x * 0.19 + y * 0.11) * 0.7;
      p.setZ(i, dune * THREE.MathUtils.smoothstep(r, 48, 80));
    }
    floorGeo.computeVertexNormals();
  }
  const floor = new THREE.Mesh(floorGeo, new THREE.MeshStandardMaterial({ color: SAND, roughness: 1 }));
  floor.rotation.x = -Math.PI / 2; floor.receiveShadow = true; scene.add(floor);
  // world edge
  [[0, 56, 0], [0, -56, 0], [56, 0, Math.PI / 2], [-56, 0, Math.PI / 2]].forEach(([x, z, r]) => {
    const b = new CANNON.Body({ mass: 0, shape: new CANNON.Box(new CANNON.Vec3(56, 3, 0.5)) });
    b.position.set(x, 3, z); b.quaternion.setFromEuler(0, r, 0); world.addBody(b);
  });

  const sync = []; // [mesh, body]
  const addDynamic = (mesh, body) => { scene.add(mesh); world.addBody(body); sync.push([mesh, body]); };

  /* ---------- the car ---------- */
  const chassis = new CANNON.Body({ mass: 150 });
  chassis.addShape(new CANNON.Box(new CANNON.Vec3(1.1, 0.32, 0.62)), new CANNON.Vec3(0, 0.1, 0));
  chassis.addShape(new CANNON.Box(new CANNON.Vec3(0.55, 0.26, 0.55)), new CANNON.Vec3(0.15, 0.58, 0));
  chassis.position.set(0, 1.2, 6); chassis.angularDamping = 0.4; chassis.allowSleep = false;   // a sleeping chassis ignores the engine
  chassis.quaternion.setFromEuler(0, -Math.PI / 2, 0);   // nose (−x) pointing up the screen
  const vehicle = new CANNON.RaycastVehicle({ chassisBody: chassis });
  const wheelOpt = {
    radius: 0.38, directionLocal: new CANNON.Vec3(0, -1, 0), suspensionStiffness: 32, suspensionRestLength: 0.32,
    frictionSlip: 1.6, dampingRelaxation: 2.3, dampingCompression: 4.4, maxSuspensionForce: 100000, rollInfluence: 0.02,
    axleLocal: new CANNON.Vec3(0, 0, 1), maxSuspensionTravel: 0.3, customSlidingRotationalSpeed: -30, useCustomSlidingRotationalSpeed: true,
  };
  [[-0.78, 0, 0.62], [-0.78, 0, -0.62], [0.78, 0, 0.62], [0.78, 0, -0.62]].forEach(([x, y, z]) => {
    vehicle.addWheel({ ...wheelOpt, chassisConnectionPointLocal: new CANNON.Vec3(x, y, z) });
  });
  vehicle.addToWorld(world);
  const wheelBodies = vehicle.wheelInfos.map((w) => {
    const b = new CANNON.Body({ mass: 0, material: wheelMat, type: CANNON.Body.KINEMATIC, collisionFilterGroup: 0 });
    b.addShape(new CANNON.Cylinder(w.radius, w.radius, w.radius / 2, 16), new CANNON.Vec3(), new CANNON.Quaternion().setFromEuler(-Math.PI / 2, 0, 0));
    world.addBody(b); return b;
  });

  const car = new THREE.Group();
  const paint = new THREE.MeshStandardMaterial({ color: BLUE, roughness: 0.35, metalness: 0.2 });
  const dark = new THREE.MeshStandardMaterial({ color: 0x15171e, roughness: 0.6 });
  const glass = new THREE.MeshStandardMaterial({ color: 0xbfd0ff, roughness: 0.1, metalness: 0.4 });
  const body = new THREE.Mesh(new THREE.BoxGeometry(2.2, 0.64, 1.24), paint); body.position.y = 0.1; body.castShadow = true; car.add(body);
  const cab = new THREE.Mesh(new THREE.BoxGeometry(1.1, 0.52, 1.1), glass); cab.position.set(0.15, 0.58, 0); cab.castShadow = true; car.add(cab);
  const roof = new THREE.Mesh(new THREE.BoxGeometry(1.14, 0.06, 1.14), paint); roof.position.set(0.15, 0.87, 0); car.add(roof);
  const lamp = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.12, 0.9), new THREE.MeshBasicMaterial({ color: 0xfff3c4 })); lamp.position.set(-1.11, 0.16, 0); car.add(lamp);
  scene.add(car);
  const wheelMeshes = vehicle.wheelInfos.map((w) => {
    const g = new THREE.CylinderGeometry(w.radius, w.radius, 0.3, 20); g.rotateX(Math.PI / 2);
    const m = new THREE.Mesh(g, dark); m.castShadow = true; scene.add(m); return m;
  });

  /* ---------- "TRAVEL" letters at the start ---------- */
  const letterMat = (ch) => new THREE.MeshStandardMaterial({ map: textTexture([ch], { w: 256, h: 256, bg: '#f4efe6', font: '700 200px Geist, sans-serif' }), roughness: 0.8 });
  const side = new THREE.MeshStandardMaterial({ color: 0xf4efe6, roughness: 0.8 });
  [...'TRAVEL'].forEach((ch, i) => {
    const hx = 0.55, hy = 0.7, hz = 0.22;
    const m = new THREE.Mesh(new THREE.BoxGeometry(hx * 2, hy * 2, hz * 2), [side, side, side, side, letterMat(ch), side]);
    m.castShadow = true; m.receiveShadow = true;
    const b = new CANNON.Body({ mass: 3, shape: new CANNON.Box(new CANNON.Vec3(hx, hy, hz)) });
    b.position.set((i - 2.5) * 1.3, hy, -1.5); b.allowSleep = true; b.sleepSpeedLimit = 0.2;
    addDynamic(m, b);
  });

  /* ---------- chapter stops ---------- */
  const stops = [];
  const loader = new THREE.TextureLoader();
  const SPOTS = [[-20, -14], [20, -18], [0, -36], [-24, -38], [24, -40]];
  chapters.forEach((ch, ci) => {
    const [sx, sz] = SPOTS[ci % SPOTS.length];
    const decal = new THREE.Mesh(new THREE.PlaneGeometry(11, 11), new THREE.MeshStandardMaterial({ map: stopDecal(ch), transparent: true, roughness: 1 }));
    decal.rotation.x = -Math.PI / 2; decal.position.set(sx, 0.02, sz); decal.receiveShadow = true; scene.add(decal);
    const ring = new THREE.Mesh(new THREE.TorusGeometry(4.9, 0.08, 8, 80), new THREE.MeshBasicMaterial({ color: BLUE, transparent: true, opacity: 0 }));
    ring.rotation.x = -Math.PI / 2; ring.position.set(sx, 0.08, sz); scene.add(ring);
    // its photographs, standing up behind the stop, ready to be knocked over
    ch.thumbs.slice(0, 5).forEach((src, k) => {
      const w = 1.9, h = 1.3, d = 0.07;
      const front = new THREE.MeshStandardMaterial({ color: 0x222222, roughness: 0.6 });
      loader.load(src, (t) => { t.colorSpace = THREE.SRGBColorSpace; front.map = t; front.color.set(0xffffff); front.needsUpdate = true; });
      const paper = new THREE.MeshStandardMaterial({ color: 0xf6f3ee, roughness: 0.9 });
      const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), [paper, paper, paper, paper, front, paper]);
      m.castShadow = true;
      const b = new CANNON.Body({ mass: 1.2, shape: new CANNON.Box(new CANNON.Vec3(w / 2, h / 2, d / 2)) });
      const a = (k - 2) * 0.42, R = 7.2;
      b.position.set(sx + Math.sin(a) * R, h / 2 + 0.05, sz - Math.cos(a) * R);
      b.quaternion.setFromEuler(0, -a, 0);
      b.allowSleep = true; b.sleepSpeedLimit = 0.15;
      addDynamic(m, b);
    });
    // a few traffic cones on the way
    for (let k = 0; k < 3; k++) {
      const cone = new THREE.Mesh(new THREE.ConeGeometry(0.28, 0.75, 14), new THREE.MeshStandardMaterial({ color: 0xff6a2b, roughness: 0.6 }));
      cone.castShadow = true;
      const b = new CANNON.Body({ mass: 0.4, shape: new CANNON.Cylinder(0.05, 0.28, 0.75, 8) });
      b.position.set(sx * 0.5 + (k - 1) * 1.4, 0.38, sz * 0.5 + 3); addDynamic(cone, b);
    }
    stops.push({ ch, x: sx, z: sz, ring });
  });

  /* ---------- input ---------- */
  const keys = { gas: 0, brake: 0, left: 0, right: 0, hand: 0 };
  const map = { KeyW: 'gas', ArrowUp: 'gas', KeyS: 'brake', ArrowDown: 'brake', KeyA: 'left', ArrowLeft: 'left', KeyD: 'right', ArrowRight: 'right', Space: 'hand' };
  const onKey = (down) => (e) => {
    if (map[e.code]) { keys[map[e.code]] = down ? 1 : 0; e.preventDefault(); }
    if (down && e.code === 'KeyR') resetCar();
    if (down && e.code === 'Enter' && current) onOpen?.(current.ch.href);
    if (down && e.code === 'Escape') close();
  };
  const kd = onKey(true), ku = onKey(false);
  addEventListener('keydown', kd); addEventListener('keyup', ku);
  host.querySelectorAll('.drive__pad [data-k]').forEach((b) => {
    const k = b.dataset.k;
    const on = (e) => { e.preventDefault(); keys[k] = 1; }, off = () => { keys[k] = 0; };
    b.addEventListener('pointerdown', on); b.addEventListener('pointerup', off); b.addEventListener('pointerleave', off); b.addEventListener('pointercancel', off);
  });
  host.querySelector('.drive__close').addEventListener('click', () => close());

  function resetCar() {
    chassis.position.set(chassis.position.x, 1.4, chassis.position.z);
    const fwd = new CANNON.Vec3(); chassis.quaternion.vmult(new CANNON.Vec3(-1, 0, 0), fwd);
    chassis.quaternion.setFromEuler(0, Math.atan2(fwd.z, -fwd.x), 0);   // upright, same heading
    chassis.velocity.setZero(); chassis.angularVelocity.setZero();
  }

  /* ---------- loop ---------- */
  let current = null, raf = 0, alive = true, steer = 0;
  const camPos = new THREE.Vector3(), camLook = new THREE.Vector3();
  const resize = () => { const w = host.clientWidth, h = host.clientHeight; renderer.setSize(w, h, false); camera.aspect = w / h; camera.fov = camera.aspect < 0.8 ? 52 : 38; camera.updateProjectionMatrix(); };
  resize(); addEventListener('resize', resize);
  let last = performance.now();
  host.querySelector('.drive__load').remove();

  function frame(now) {
    if (!alive) return;
    raf = requestAnimationFrame(frame);
    const dt = Math.min(0.05, (now - last) / 1000); last = now;
    const speed = chassis.velocity.length();
    const force = 520;
    const fwdVec = new CANNON.Vec3(); chassis.quaternion.vmult(new CANNON.Vec3(-1, 0, 0), fwdVec);
    const forwardSpeed = chassis.velocity.dot(fwdVec);
    const engine = keys.gas ? -force : keys.brake ? (forwardSpeed > 1 ? 0 : force * 0.7) : 0;
    vehicle.applyEngineForce(engine, 2); vehicle.applyEngineForce(engine, 3);
    const brake = (keys.brake && forwardSpeed > 1 ? 8 : 0) + (keys.hand ? 14 : 0) + (!keys.gas && !keys.brake ? 0.6 : 0);
    [0, 1, 2, 3].forEach((i) => vehicle.setBrake(brake, i));
    const steerT = (keys.left - keys.right) * THREE.MathUtils.lerp(0.55, 0.28, Math.min(1, speed / 18));
    steer += (steerT - steer) * Math.min(1, dt * 10);
    vehicle.setSteeringValue(steer, 0); vehicle.setSteeringValue(steer, 1);
    world.fixedStep(1 / 60, dt);

    car.position.copy(chassis.position); car.quaternion.copy(chassis.quaternion);
    vehicle.wheelInfos.forEach((w, i) => { vehicle.updateWheelTransform(i); const t = w.worldTransform; wheelBodies[i].position.copy(t.position); wheelBodies[i].quaternion.copy(t.quaternion); wheelMeshes[i].position.copy(t.position); wheelMeshes[i].quaternion.copy(t.quaternion); });
    sync.forEach(([m, b]) => { m.position.copy(b.position); m.quaternion.copy(b.quaternion); });
    if (chassis.position.y < -5) resetCar();

    // fixed-angle follow camera, leaning a little towards where you're heading
    const lead = new THREE.Vector3(chassis.velocity.x, 0, chassis.velocity.z).multiplyScalar(0.35);
    camLook.lerp(new THREE.Vector3(car.position.x, 0, car.position.z).add(lead), Math.min(1, dt * 3));
    camPos.copy(camLook).add(new THREE.Vector3(9, 15 + Math.min(6, speed * 0.25), 15));
    camera.position.lerp(camPos, Math.min(1, dt * 4)); camera.lookAt(camLook);
    sun.position.set(camLook.x - 14, 26, camLook.z + 10); sun.target.position.copy(camLook);

    // which stop are you in?
    let inStop = null;
    stops.forEach((s) => {
      const d = Math.hypot(car.position.x - s.x, car.position.z - s.z);
      const k = THREE.MathUtils.smoothstep(d, 9, 4.5);
      s.ring.material.opacity = 0.15 + k * 0.85; s.ring.scale.setScalar(1 + Math.sin(now / 300) * 0.02 * k);
      if (d < 4.9) inStop = s;
    });
    if (inStop !== current) {
      current = inStop;
      if (current) {
        const c = current.ch;
        card.innerHTML = `<p class="mono">Chapter ${String(c.chapter).padStart(2, '0')} · ${c.year} · ${c.region}</p><h3>${c.en}<span class="zh">${c.zh}</span></h3>
          <div class="drive__btns"><a class="pill pill--light" href="${c.href}"><span class="dot"></span>Open chapter · Enter</a>${c.journal ? `<a class="pill pill--ghost" href="${c.journal}"><span class="dot"></span>Journal · 随笔</a>` : ''}</div>`;
        card.classList.add('is-on');
      } else card.classList.remove('is-on');
    }
    renderer.render(scene, camera);
  }
  raf = requestAnimationFrame(frame);

  function close() {
    if (!alive) return;
    alive = false; cancelAnimationFrame(raf);
    removeEventListener('keydown', kd); removeEventListener('keyup', ku); removeEventListener('resize', resize);
    renderer.dispose(); host.innerHTML = '';
    onClose?.();
  }
  return { close };
}

window.X1NG_DRIVE = { mount: mountDrive };
