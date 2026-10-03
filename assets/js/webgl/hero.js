/* ------------------------------------------------------------------
   Hero field — photographic prints floating in a soft physics cluster.
   Cursor pushes the prints away, tapping bursts them, scrolling
   scatters the cluster. Hover a print to read it, click to open it.
------------------------------------------------------------------- */
import * as THREE from '../../vendor/three.min.js';

const tmpV = new THREE.Vector3();
const tmpV2 = new THREE.Vector3();
const tmpQ = new THREE.Quaternion();
const tmpM = new THREE.Matrix4();
const UP = new THREE.Vector3(0, 1, 0);

export function webglAvailable() {
  try {
    const c = document.createElement('canvas');
    return !!(window.WebGLRenderingContext && (c.getContext('webgl2') || c.getContext('webgl')));
  } catch { return false; }
}

export function createHeroField(container, items, { onHover, onSelect, mobile = false } = {}) {
  const renderer = new THREE.WebGLRenderer({ antialias: !mobile, alpha: true, powerPreference: 'high-performance' });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, mobile ? 1.5 : 1.75));
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.NeutralToneMapping;
  renderer.toneMappingExposure = 1.0;
  container.appendChild(renderer.domElement);
  renderer.domElement.setAttribute('aria-hidden', 'true');

  const scene = new THREE.Scene();
  scene.fog = new THREE.Fog(0x0d0f15, 8, 17);
  const camera = new THREE.PerspectiveCamera(32, 1, 0.1, 60);
  camera.position.set(0, 0, 11);

  // Lighting: studio environment for glossy prints + a warm key light
  const pmrem = new THREE.PMREMGenerator(renderer);
  scene.environment = pmrem.fromScene(new THREE.RoomEnvironment(), 0.04).texture;
  const key = new THREE.DirectionalLight(0xfff1e0, 1.4); key.position.set(4, 6, 8); scene.add(key);
  const rim = new THREE.DirectionalLight(0x4a58ff, 2.2); rim.position.set(-6, -2, -4); scene.add(rim);
  scene.add(new THREE.AmbientLight(0xffffff, 0.25));

  // Dust — tiny drifting particles for depth
  const dustCount = mobile ? 220 : 520;
  const dustGeo = new THREE.BufferGeometry();
  const dp = new Float32Array(dustCount * 3);
  for (let i = 0; i < dustCount; i++) { dp[i * 3] = (Math.random() - 0.5) * 22; dp[i * 3 + 1] = (Math.random() - 0.5) * 14; dp[i * 3 + 2] = (Math.random() - 0.5) * 14 - 2; }
  dustGeo.setAttribute('position', new THREE.BufferAttribute(dp, 3));
  const dust = new THREE.Points(dustGeo, new THREE.PointsMaterial({ color: 0x9aa4ff, size: 0.035, transparent: true, opacity: 0.55, depthWrite: false }));
  scene.add(dust);

  // Shared materials
  const paper = new THREE.MeshStandardMaterial({ color: 0xf4f4f0, roughness: 0.55, metalness: 0 });
  const back = new THREE.MeshStandardMaterial({ color: 0xe9eaf0, roughness: 0.7, metalness: 0 });

  const loader = new THREE.TextureLoader();
  const maxAniso = renderer.capabilities.getMaxAnisotropy();
  const cards = [];
  const group = new THREE.Group();
  scene.add(group);

  const golden = Math.PI * (3 - Math.sqrt(5));
  const loadPromises = items.map((item, i) => new Promise((resolve) => {
    const ratio = THREE.MathUtils.clamp(item.ratio, 0.62, 1.8);
    const long = 1.38;
    const w = ratio >= 1 ? long : long * ratio;
    const hgt = ratio >= 1 ? long / ratio : long;
    const geo = new THREE.BoxGeometry(w, hgt, 0.035);
    const front = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.42, metalness: 0, emissive: 0xffffff, emissiveIntensity: 0.55, envMapIntensity: 0.45 });
    const mesh = new THREE.Mesh(geo, [paper, paper, paper, paper, front, back]);

    // Home: fibonacci sphere, flattened into a lens that suits a wide frame
    const y = 1 - (i / (items.length - 1)) * 2;
    const r = Math.sqrt(1 - y * y);
    const th = golden * i;
    const home = new THREE.Vector3(Math.cos(th) * r * 3.9, y * 1.35, Math.sin(th) * r * 1.8 - 1.2);
    const start = home.clone().multiplyScalar(4 + Math.random() * 2).add(new THREE.Vector3(0, 0, -6));
    mesh.position.copy(start);
    mesh.quaternion.setFromEuler(new THREE.Euler(Math.random() * 6, Math.random() * 6, Math.random() * 6));

    const card = {
      mesh, item, home, front, w, h: hgt,
      vel: new THREE.Vector3(), ang: new THREE.Vector3((Math.random() - 0.5) * 2, (Math.random() - 0.5) * 2, (Math.random() - 0.5) * 2),
      tilt: new THREE.Euler((Math.random() - 0.5) * 0.5, (Math.random() - 0.5) * 0.7, (Math.random() - 0.5) * 0.35),
      hover: 0, seed: Math.random() * 100,
    };
    mesh.userData.card = card;
    cards.push(card);
    group.add(mesh);

    loader.load(item.src, (tex) => {
      tex.colorSpace = THREE.SRGBColorSpace;
      tex.anisotropy = Math.min(8, maxAniso);
      front.map = tex; front.emissiveMap = tex; front.needsUpdate = true;
      resolve();
    }, undefined, () => resolve());
  }));

  const loaded = Promise.race([Promise.all(loadPromises), new Promise((r) => setTimeout(r, 8000))]);

  // ---------- Interaction ----------
  const pointer = new THREE.Vector2(9, 9);
  const pointerSmooth = new THREE.Vector2(0, 0);
  const raycaster = new THREE.Raycaster();
  let pointerInside = false;
  let hovered = null;
  let burst = null;

  const toNdc = (e) => {
    const r = renderer.domElement.getBoundingClientRect();
    pointer.set(((e.clientX - r.left) / r.width) * 2 - 1, -((e.clientY - r.top) / r.height) * 2 + 1);
  };
  const el = renderer.domElement;
  el.style.touchAction = 'pan-y';
  el.addEventListener('pointermove', (e) => { toNdc(e); pointerInside = true; });
  el.addEventListener('pointerleave', () => { pointerInside = false; pointer.set(9, 9); setHover(null); });
  el.addEventListener('pointerdown', (e) => {
    toNdc(e);
    raycaster.setFromCamera(pointer, camera);
    burst = { origin: raycaster.ray.origin.clone(), dir: raycaster.ray.direction.clone(), t: 0 };
    downAt = { x: e.clientX, y: e.clientY, time: performance.now() };
  });
  let downAt = null;
  el.addEventListener('pointerup', (e) => {
    if (!downAt) return;
    const moved = Math.hypot(e.clientX - downAt.x, e.clientY - downAt.y);
    if (moved < 8 && performance.now() - downAt.time < 400 && hovered && e.pointerType === 'mouse') onSelect?.(hovered.item);
    downAt = null;
  });
  el.addEventListener('click', (e) => { if (e.pointerType !== 'mouse' && hovered) onSelect?.(hovered.item); });

  function setHover(card) {
    if (hovered === card) return;
    hovered = card;
    el.style.cursor = card ? 'pointer' : '';
    onHover?.(card ? card.item : null);
  }

  // ---------- Params driven from outside ----------
  const state = { spread: 1.6, spreadTarget: 1.6, scroll: 0, entered: false, visible: true };

  // ---------- Resize ----------
  function resize() {
    const { clientWidth: w, clientHeight: h } = container;
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    // keep the cluster framed for both wide and tall stages
    camera.position.z = camera.aspect < 1 ? 11 + (1 - camera.aspect) * 9 : 11 - Math.min(1.2, (camera.aspect - 1.2) * 1.2);
    camera.updateProjectionMatrix();
  }
  const ro = new ResizeObserver(resize); ro.observe(container); resize();

  const io = new IntersectionObserver(([e]) => { state.visible = e.isIntersecting; }, { threshold: 0 });
  io.observe(container);

  // ---------- Simulation ----------
  const clock = new THREE.Timer();
  const n = cards.length;
  function step(dt, t) {
    state.spread += (state.spreadTarget - state.spread) * Math.min(1, dt * 2.2);
    const spread = state.spread;

    pointerSmooth.lerp(pointer.x > 5 ? new THREE.Vector2(0, 0) : pointer, Math.min(1, dt * 3));
    raycaster.setFromCamera(pointer, camera);
    const ray = raycaster.ray;

    // hover pick
    if (pointerInside) {
      const hits = raycaster.intersectObjects(group.children, false);
      setHover(hits.length ? hits[0].object.userData.card : null);
    }
    if (burst) burst.t += dt;

    const k = 2.2;           // attraction to home
    const damping = Math.pow(0.06, dt);
    for (let i = 0; i < n; i++) {
      const c = cards[i];
      const p = c.mesh.position;
      // home pulls; spread scales home outward and pushes the cluster back
      tmpV.copy(c.home).multiplyScalar(1 + spread * 2.4);
      tmpV.z -= spread * 4;
      tmpV.y += Math.sin(t * 0.5 + c.seed) * 0.12;
      tmpV.x += Math.cos(t * 0.35 + c.seed) * 0.1;
      c.vel.addScaledVector(tmpV.sub(p), k * dt);

      // separation
      for (let j = i + 1; j < n; j++) {
        const o = cards[j];
        tmpV2.subVectors(p, o.mesh.position);
        const d = tmpV2.length();
        const min = 1.05;
        if (d < min && d > 0.0001) {
          tmpV2.multiplyScalar(((min - d) / d) * 6 * dt);
          c.vel.add(tmpV2); o.vel.sub(tmpV2);
        }
      }

      // cursor repulsion (distance from the pointer ray)
      if (pointerInside) {
        tmpV.subVectors(p, ray.origin);
        const along = tmpV.dot(ray.direction);
        tmpV2.copy(ray.direction).multiplyScalar(along).add(ray.origin);
        tmpV.subVectors(p, tmpV2);
        const d = tmpV.length();
        const R = 1.5;
        if (d < R) {
          const f = (1 - d / R) * 22 * dt;
          tmpV.normalize().multiplyScalar(f);
          tmpV.z -= f * 0.35;
          c.vel.add(tmpV);
          c.ang.x += tmpV.y * 1.6; c.ang.y -= tmpV.x * 1.6;
        }
      }
      // tap / click burst — a short shockwave along the ray
      if (burst && burst.t < 0.25) {
        tmpV.subVectors(p, burst.origin);
        const along = tmpV.dot(burst.dir);
        tmpV2.copy(burst.dir).multiplyScalar(along).add(burst.origin);
        tmpV.subVectors(p, tmpV2);
        const d = tmpV.length();
        if (d < 3) { const f = (1 - d / 3) * 30 * dt; c.vel.addScaledVector(tmpV.normalize(), f); c.ang.z += (Math.random() - 0.5) * f * 4; }
      }

      c.vel.multiplyScalar(damping);
      p.addScaledVector(c.vel, dt);

      // orientation: spin decays, then settle to face the camera with a personal tilt
      c.ang.multiplyScalar(Math.pow(0.12, dt));
      const spin = c.ang.length();
      if (spin > 0.0001) {
        tmpQ.setFromAxisAngle(tmpV.copy(c.ang).divideScalar(spin), spin * dt);
        c.mesh.quaternion.premultiply(tmpQ);
      }
      tmpM.lookAt(camera.position, p, UP);
      tmpQ.setFromRotationMatrix(tmpM);
      tmpQ.multiply(new THREE.Quaternion().setFromEuler(c.tilt));
      c.mesh.quaternion.slerp(tmpQ, Math.min(1, dt * (0.9 + c.hover * 3)));

      // hover lift
      const target = hovered === c ? 1 : 0;
      c.hover += (target - c.hover) * Math.min(1, dt * 8);
      const s = 1 + c.hover * 0.12;
      c.mesh.scale.setScalar(s);
      c.front.emissiveIntensity = 0.55 + c.hover * 0.2;
    }
    if (burst && burst.t > 0.25) burst = null;

    // camera parallax + gentle orbit
    camera.position.x = pointerSmooth.x * 0.9 + Math.sin(t * 0.12) * 0.25;
    camera.position.y = pointerSmooth.y * 0.55 - state.scroll * 1.2;
    camera.lookAt(0, -state.scroll * 0.6, 0);
    group.rotation.y = Math.sin(t * 0.1) * 0.08 + state.scroll * 0.4;
    dust.rotation.y = t * 0.01;
    dust.position.y = state.scroll * 2;
  }

  let raf = 0;
  function loop() {
    raf = requestAnimationFrame(loop);
    clock.update();
    if (!state.visible || document.hidden) return;
    const dt = Math.min(clock.getDelta(), 1 / 30);
    step(dt, clock.getElapsed());
    renderer.render(scene, camera);
  }
  loop();

  return {
    loaded,
    enter() { state.entered = true; state.spreadTarget = 0; },
    setScroll(p) { state.scroll = p; if (state.entered) state.spreadTarget = Math.max(0, p * 1.1 - 0.05); },
    shuffle() { cards.forEach((c) => { c.vel.add(new THREE.Vector3((Math.random() - 0.5) * 8, (Math.random() - 0.5) * 8, (Math.random() - 0.5) * 6)); c.ang.set((Math.random() - 0.5) * 12, (Math.random() - 0.5) * 12, (Math.random() - 0.5) * 12); }); },
    destroy() {
      cancelAnimationFrame(raf); ro.disconnect(); io.disconnect();
      cards.forEach((c) => { c.mesh.geometry.dispose(); c.front.map?.dispose(); c.front.dispose(); });
      renderer.dispose(); renderer.domElement.remove();
    },
  };
}
