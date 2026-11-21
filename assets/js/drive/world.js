/* ==========================================================================
   Drive world — terrain, biomes, water, grass, trees and landmarks.

   One island, laid out roughly like the map of the places in the archive:
   Egypt far in the west (dunes, the Nile, pyramids, balloons), the
   Qinghai–Gansu desert in the north-west (red yardangs, a salt lake), a snowy
   range dividing it from Yunnan's meadows and lake, Beijing in the north-east
   (a red gate and lanterns), Nanjing and its tower in the east, Shanghai on
   the east coast, and an open "on the road" country in the south-east.
   The sea all round is the edge of the world — no invisible walls.
   ========================================================================== */
import * as THREE from '../../vendor/three.min.js';
import * as CANNON from '../../vendor/cannon-es.js';

export const WATER_Y = -0.45;
export const SIZE_X = 240, SIZE_Z = 160, ES = 1;          // terrain extent and grid step (world units)

/* places → where they sit on the island and what the land looks like there */
export const PLACES = {
  giza:     { x: -82, z: -10, biome: 'desert' },
  cairo:    { x: -60, z: -30, biome: 'desert' },
  luxor:    { x: -54, z: 28,  biome: 'desert' },
  qinggan:  { x: -28, z: -50, biome: 'danxia' },
  yunnan:   { x: -6,  z: 30,  biome: 'meadow' },
  beijing:  { x: 26,  z: -38, biome: 'city' },
  nanjing:  { x: 48,  z: 0,   biome: 'city' },
  shanghai: { x: 82,  z: 20,  biome: 'coast' },
  road:     { x: 36,  z: 44,  biome: 'meadow' },
};
export const NILE_X = (z) => -68 - Math.sin(z * 0.06) * 4;
export const START = { x: 6, z: 2 };

const BIOME_COL = {
  desert: new THREE.Color('#e3c58f'), danxia: new THREE.Color('#c8714a'), meadow: new THREE.Color('#7da155'),
  city: new THREE.Color('#9caf7f'), coast: new THREE.Color('#d9cfa6'), plaza: new THREE.Color('#c9c3b6'),
};
const ROCK = new THREE.Color('#7b6a5c'), SNOW = new THREE.Color('#f4f6fb'), SAND_WET = new THREE.Color('#b9a57a');

/* the snowy range between the desert and Yunnan, plus Meili-like peaks behind the meadows */
const PEAKS = [
  [-30, 4, 13, 9], [-22, -6, 11, 8], [-36, 16, 12, 9], [-16, -16, 9, 7], [-40, 30, 10, 8],
  [-18, 54, 13, 9], [0, 62, 15, 10], [16, 58, 11, 8], [-64, -58, 8, 9], [62, -62, 9, 10],
];

const smooth = (a, b, x) => { const t = Math.min(1, Math.max(0, (x - a) / (b - a))); return t * t * (3 - 2 * t); };
function hash(x, y) { const s = Math.sin(x * 127.1 + y * 311.7) * 43758.5453; return s - Math.floor(s); }
function vnoise(x, y) {
  const xi = Math.floor(x), yi = Math.floor(y), xf = x - xi, yf = y - yi;
  const u = xf * xf * (3 - 2 * xf), v = yf * yf * (3 - 2 * yf);
  const a = hash(xi, yi), b = hash(xi + 1, yi), c = hash(xi, yi + 1), d = hash(xi + 1, yi + 1);
  return a + (b - a) * u + (c - a) * v + (a - b - c + d) * u * v;
}
const fbm = (x, y) => vnoise(x, y) * 0.55 + vnoise(x * 2.1, y * 2.1) * 0.3 + vnoise(x * 4.3, y * 4.3) * 0.15;

/* biome weights at a point (soft, from the nearest places) */
export function biomeAt(x, z) {
  const w = {};
  let sum = 0;
  for (const k in PLACES) {
    const p = PLACES[k], d2 = (x - p.x) ** 2 + (z - p.z) ** 2;
    const v = Math.exp(-d2 / (28 * 28));
    w[p.biome] = (w[p.biome] || 0) + v; sum += v;
  }
  for (const k in w) w[k] /= sum || 1;
  return w;
}
export function nearestPlace(x, z) {
  let best = null, bd = Infinity;
  for (const k in PLACES) { const p = PLACES[k], d = Math.hypot(x - p.x, z - p.z); if (d < bd) { bd = d; best = k; } }
  return { key: best, d: bd };
}

/* the island edge: a soft superellipse that drops into the sea */
export const islandD = (x, z) => Math.pow(Math.pow(Math.abs(x) / 112, 4) + Math.pow(Math.abs(z) / 72, 4), 0.25);

export function heightAt(x, z) {
  let h = 0.15 + (fbm(x * 0.05, z * 0.05) - 0.5) * 0.7;
  const w = biomeAt(x, z);
  // dunes in the deserts
  const dune = 0.5 + 0.5 * Math.sin(x * 0.18 + Math.sin(z * 0.11) * 2);
  h += ((w.desert || 0) + (w.danxia || 0) * 0.6) * (dune * dune * 1.1 + fbm(x * 0.09, z * 0.09) * 0.9);
  // mountains
  for (const [px, pz, ph, pr] of PEAKS) {
    const d2 = (x - px) ** 2 + (z - pz) ** 2;
    h += ph * Math.exp(-d2 / (pr * pr)) * (0.85 + 0.3 * fbm(x * 0.2, z * 0.2));
  }
  // the Nile, a lake in Yunnan, the sea
  const nile = Math.abs(x - NILE_X(z));
  h -= 1.25 * (1 - smooth(2.2, 4.5, nile)) * (1 - smooth(60, 70, Math.abs(z)));
  const lake = Math.hypot(x - 12, z - 36);
  h -= 1.4 * (1 - smooth(5, 11, lake));
  // keep the plazas flat
  for (const k in PLACES) { const p = PLACES[k], d = Math.hypot(x - p.x, z - p.z); h = h * smooth(5, 10, d) + 0.12 * (1 - smooth(5, 10, d)); }
  const ds = Math.hypot(x - START.x, z - START.z); h = h * smooth(6, 12, ds) + 0.12 * (1 - smooth(6, 12, ds));
  const d = islandD(x, z);
  h -= 1.75 * smooth(0.86, 1.02, d);
  return h;
}

/* ---------- build ---------- */
export function buildWorld(scene, world, { coarse = false } = {}) {
  const NX = Math.round(SIZE_X / ES), NZ = Math.round(SIZE_Z / ES);
  const x0 = -SIZE_X / 2, z0 = -SIZE_Z / 2;
  // height grid shared by the visual terrain, the physics and the water shader
  const H = new Float32Array((NX + 1) * (NZ + 1));
  for (let j = 0; j <= NZ; j++) for (let i = 0; i <= NX; i++) H[j * (NX + 1) + i] = heightAt(x0 + i * ES, z0 + j * ES);
  const hAt = (i, j) => H[Math.min(NZ, Math.max(0, j)) * (NX + 1) + Math.min(NX, Math.max(0, i))];
  const sample = (x, z) => {   // bilinear lookup used by everything that sits on the ground
    const fx = (x - x0) / ES, fz = (z - z0) / ES, i = Math.floor(fx), j = Math.floor(fz), u = fx - i, v = fz - j;
    return hAt(i, j) * (1 - u) * (1 - v) + hAt(i + 1, j) * u * (1 - v) + hAt(i, j + 1) * (1 - u) * v + hAt(i + 1, j + 1) * u * v;
  };

  // visual terrain
  const geo = new THREE.PlaneGeometry(SIZE_X, SIZE_Z, NX, NZ);
  geo.rotateX(-Math.PI / 2);
  const pos = geo.attributes.position, col = new Float32Array(pos.count * 3), c = new THREE.Color(), tmp = new THREE.Color();
  for (let k = 0; k < pos.count; k++) {
    const x = pos.getX(k), z = pos.getZ(k);
    const i = Math.round((x - x0) / ES), j = Math.round((z - z0) / ES);
    const h = hAt(i, j);
    pos.setY(k, h);
    const w = biomeAt(x, z);
    c.setRGB(0, 0, 0);
    for (const b in w) c.add(tmp.copy(BIOME_COL[b]).multiplyScalar(w[b]));
    // danxia stripes
    if (w.danxia > 0.1) { const s = 0.5 + 0.5 * Math.sin(h * 3.2 + fbm(x * 0.1, z * 0.1) * 3); c.lerp(tmp.set(s > 0.5 ? '#e0905a' : '#a8553a'), w.danxia * 0.5); }
    // plazas
    for (const key in PLACES) { const p = PLACES[key], d = Math.hypot(x - p.x, z - p.z); if (d < 7.5) c.lerp(BIOME_COL.plaza, (1 - smooth(5.5, 7.5, d)) * 0.85); }
    // slope → rock, height → snow, shore → wet sand
    const slope = Math.hypot(hAt(i + 1, j) - hAt(i - 1, j), hAt(i, j + 1) - hAt(i, j - 1)) / (2 * ES);
    c.lerp(ROCK, smooth(0.45, 1.1, slope) * 0.85);
    c.lerp(SNOW, smooth(6.5, 10, h + fbm(x * 0.3, z * 0.3) * 2));
    c.lerp(SAND_WET, (1 - smooth(-0.2, 0.25, h)) * 0.8);
    const n = (fbm(x * 0.6, z * 0.6) - 0.5) * 0.08;
    col[k * 3] = c.r + n; col[k * 3 + 1] = c.g + n; col[k * 3 + 2] = c.b + n;
  }
  geo.setAttribute('color', new THREE.BufferAttribute(col, 3));
  geo.computeVertexNormals();
  const terrain = new THREE.Mesh(geo, new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.95, flatShading: false }));
  terrain.receiveShadow = true;
  scene.add(terrain);

  // physics: a heightfield with the same grid
  const matrix = [];
  for (let i = 0; i <= NX; i++) { const row = []; for (let j = 0; j <= NZ; j++) row.push(hAt(i, NZ - j)); matrix.push(row); }
  const hf = new CANNON.Body({ mass: 0, material: new CANNON.Material('ground') });
  hf.addShape(new CANNON.Heightfield(matrix, { elementSize: ES }));
  hf.position.set(x0, 0, -z0);
  hf.quaternion.setFromEuler(-Math.PI / 2, 0, 0);
  world.addBody(hf);

  // height texture for the water's shoreline foam
  const hdata = new Uint8Array((NX + 1) * (NZ + 1) * 4);
  for (let k = 0; k < H.length; k++) { const v = Math.max(0, Math.min(255, Math.round((H[k] + 4) * 32))); hdata[k * 4] = v; hdata[k * 4 + 3] = 255; }
  const htex = new THREE.DataTexture(hdata, NX + 1, NZ + 1); htex.needsUpdate = true; htex.magFilter = THREE.LinearFilter; htex.minFilter = THREE.LinearFilter;

  /* ---------- water ---------- */
  const waterMat = new THREE.ShaderMaterial({
    transparent: true, fog: true,
    uniforms: { ...THREE.UniformsUtils.clone(THREE.UniformsLib.fog), t: { value: 0 }, htex: { value: htex }, deep: { value: new THREE.Color('#1d5f86') }, shallow: { value: new THREE.Color('#5fc1c9') }, foam: { value: new THREE.Color('#ffffff') }, night: { value: 0 }, sky: { value: new THREE.Color('#bfe3ff') }, car: { value: new THREE.Vector3() } },
    vertexShader: `#include <fog_pars_vertex>
      varying vec3 vW; void main(){ vec4 w = modelMatrix * vec4(position,1.0); vW = w.xyz; vec4 mvPosition = viewMatrix * w; gl_Position = projectionMatrix * mvPosition;
      #include <fog_vertex>
      }`,
    fragmentShader: `#include <fog_pars_fragment>
      uniform float t, night; uniform sampler2D htex; uniform vec3 deep, shallow, foam, sky, car; varying vec3 vW;
      float hs(vec2 q){ return fract(sin(dot(q, vec2(127.1, 311.7))) * 43758.5453); }
      float vn(vec2 q){ vec2 i = floor(q), f = fract(q); f = f*f*(3.-2.*f); return mix(mix(hs(i), hs(i+vec2(1,0)), f.x), mix(hs(i+vec2(0,1)), hs(i+vec2(1,1)), f.x), f.y); }
      void main(){
        vec2 uv = vec2((vW.x + ${SIZE_X / 2}.0) / ${SIZE_X}.0, (vW.z + ${SIZE_Z / 2}.0) / ${SIZE_Z}.0);
        float h = (uv.x < 0.0 || uv.x > 1.0 || uv.y < 0.0 || uv.y > 1.0) ? -4.0 : texture2D(htex, uv).r * 255.0 / 32.0 - 4.0;
        float depth = ${WATER_Y.toFixed(2)} - h;
        float n = vn(vW.xz * 0.35 + t * 0.25) * 0.6 + vn(vW.xz * 1.1 - t * 0.4) * 0.4;
        vec3 c = mix(shallow, deep, smoothstep(0.0, 2.6, depth));
        c += sky * 0.12 * smoothstep(0.6, 1.0, n);
        // foam along the shore, breathing
        float f = smoothstep(0.22, 0.0, depth + (n - 0.5) * 0.12 + sin(t * 1.6 + vW.x * 0.2) * 0.04) * 0.75;
        // a wake where the car is
        float wk = exp(-pow(length(vW.xz - car.xz), 2.0) * 0.35) * step(car.y, 0.4);
        c = mix(c, foam, clamp(f * 0.9 + wk * 0.6, 0.0, 1.0));
        c *= mix(1.0, 0.32, night);
        c += foam * f * night * 0.25;                       // the foam glows a little at night
        float a = clamp(0.55 + depth * 0.25, 0.0, 0.92);
        gl_FragColor = vec4(c, max(a, f * 0.95));
        #include <fog_fragment>
      }`,
  });
  const water = new THREE.Mesh(new THREE.PlaneGeometry(900, 900, 1, 1), waterMat);
  water.rotation.x = -Math.PI / 2; water.position.y = WATER_Y; water.renderOrder = 2;
  scene.add(water);

  /* ---------- scatter helpers ---------- */
  const statics = [];
  const addStatic = (shape, x, y, z, q) => { const b = new CANNON.Body({ mass: 0 }); b.addShape(shape); b.position.set(x, y, z); if (q) b.quaternion.copy(q); world.addBody(b); statics.push(b); return b; };
  const rnd = (() => { let s = 1234567; return () => ((s = (s * 16807) % 2147483647) / 2147483647); })();
  const okGround = (x, z, minH = 0.05) => { const h = sample(x, z); if (h < minH) return false; const s = Math.hypot(sample(x + 1, z) - sample(x - 1, z), sample(x, z + 1) - sample(x, z - 1)) / 2; if (s > 0.35) return false; for (const k in PLACES) if (Math.hypot(x - PLACES[k].x, z - PLACES[k].z) < 9) return false; return Math.hypot(x - START.x, z - START.z) > 10; };

  /* ---------- grass (pressed down where the wheels go) ---------- */
  const TRAIL = 64;
  const grassU = { t: { value: 0 }, wind: { value: 0.6 }, trail: { value: Array.from({ length: TRAIL }, () => new THREE.Vector4(0, -99, 0, 1)) }, light: { value: new THREE.Color(1, 1, 1) }, night: { value: 0 } };
  const blade = new THREE.BufferGeometry();
  blade.setAttribute('position', new THREE.Float32BufferAttribute([-0.07, 0, 0, 0.07, 0, 0, -0.045, 0.35, 0, 0.045, 0.35, 0, 0, 0.75, 0], 3));
  blade.setIndex([0, 1, 2, 2, 1, 3, 2, 3, 4]);
  const GN = coarse ? 9000 : 26000;
  const grass = new THREE.InstancedMesh(blade, new THREE.ShaderMaterial({
    uniforms: Object.assign(THREE.UniformsUtils.clone(THREE.UniformsLib.fog), grassU), side: THREE.DoubleSide, fog: true,
    vertexShader: `
      #include <fog_pars_vertex>
      uniform float t, wind; uniform vec4 trail[${TRAIL}]; varying float vY; varying vec3 vC; attribute vec3 tint;
      void main(){
        vec3 p = position; vY = p.y / 0.75; vC = tint;
        vec4 w = instanceMatrix * vec4(p, 1.0);
        vec3 root = (instanceMatrix * vec4(0.0, 0.0, 0.0, 1.0)).xyz;
        // wind
        float s = sin(t * 1.8 + root.x * 0.35 + root.z * 0.27) + sin(t * 3.1 + root.x * 0.9) * 0.35;
        w.x += s * 0.12 * wind * vY * vY; w.z += s * 0.06 * wind * vY * vY;
        // pressed by the tyres: lie down away from each recent wheel position, slowly stand back up
        float press = 0.0; vec2 dir = vec2(0.0);
        for (int i = 0; i < ${TRAIL}; i++) {
          vec2 d = root.xz - trail[i].xz; float r = length(d);
          float k = (1.0 - smoothstep(0.35, 1.25, r)) * (1.0 - trail[i].w);
          if (k > press) { press = k; dir = r > 0.001 ? d / r : vec2(1.0, 0.0); }
        }
        w.xz += dir * press * vY * 0.55; w.y -= press * vY * 0.55;
        vec4 mvPosition = viewMatrix * w;
        gl_Position = projectionMatrix * mvPosition;
        #include <fog_vertex>
      }`,
    fragmentShader: `#include <fog_pars_fragment>
      uniform vec3 light; uniform float night; varying float vY; varying vec3 vC;
      void main(){ vec3 c = mix(vC * 0.45, vC * 1.15, vY) * light; gl_FragColor = vec4(c, 1.0);
        #include <fog_fragment>
      }`,
  }), GN);
  const tint = new Float32Array(GN * 3), m4 = new THREE.Matrix4(), q = new THREE.Quaternion(), e = new THREE.Euler(), sv = new THREE.Vector3(), pv = new THREE.Vector3();
  let placed = 0, tries = 0;
  while (placed < GN && tries < GN * 12) {
    tries++;
    const x = x0 + rnd() * SIZE_X, z = z0 + rnd() * SIZE_Z;
    const w = biomeAt(x, z), grassy = (w.meadow || 0) + (w.city || 0) * 0.6 + (w.coast || 0) * 0.2;
    if (rnd() > grassy * 1.2 || fbm(x * 0.08, z * 0.08) < 0.38) continue;
    const h = sample(x, z);
    if (h < 0.05 || h > 6) continue;
    let near = false; for (const k in PLACES) if (Math.hypot(x - PLACES[k].x, z - PLACES[k].z) < 7) near = true;
    if (near || Math.hypot(x - START.x, z - START.z) < 7) continue;
    e.set(0, rnd() * Math.PI * 2, (rnd() - 0.5) * 0.3); q.setFromEuler(e);
    const s = 0.7 + rnd() * 0.8;
    m4.compose(pv.set(x, h - 0.02, z), q, sv.set(s, s * (0.8 + rnd() * 0.6), s));
    grass.setMatrixAt(placed, m4);
    const g = new THREE.Color().setHSL(0.24 + rnd() * 0.06, 0.45 + rnd() * 0.15, 0.36 + rnd() * 0.1);
    tint.set([g.r, g.g, g.b], placed * 3);
    placed++;
  }
  grass.count = placed;
  grass.geometry.setAttribute('tint', new THREE.InstancedBufferAttribute(tint, 3));
  grass.frustumCulled = false;
  scene.add(grass);

  /* ---------- trees ---------- */
  const pineN = coarse ? 120 : 260, palmN = 70;
  const pineFol = new THREE.InstancedMesh(new THREE.ConeGeometry(1, 2.4, 7), new THREE.MeshStandardMaterial({ color: '#3f6b45', roughness: 0.9, flatShading: true }), pineN * 2);
  const pineTrunk = new THREE.InstancedMesh(new THREE.CylinderGeometry(0.14, 0.2, 1, 6), new THREE.MeshStandardMaterial({ color: '#5a4031', roughness: 1 }), pineN);
  pineFol.castShadow = pineTrunk.castShadow = true;
  let pc = 0, pt = 0; tries = 0;
  while (pt < pineN && tries < 8000) {
    tries++;
    const x = x0 + rnd() * SIZE_X, z = z0 + rnd() * SIZE_Z, w = biomeAt(x, z);
    if ((w.meadow || 0) < 0.55 && (w.city || 0) < 0.6) continue;
    if (rnd() > (w.meadow || 0) * 0.9 + (w.city || 0) * 0.3) continue;
    if (!okGround(x, z, 0.2) || fbm(x * 0.05 + 9, z * 0.05) < 0.45) continue;
    const h = sample(x, z), s = 0.8 + rnd() * 0.9;
    m4.compose(pv.set(x, h + 0.5 * s, z), q.identity(), sv.set(s, s, s)); pineTrunk.setMatrixAt(pt, m4);
    m4.compose(pv.set(x, h + 1.7 * s, z), q.identity(), sv.set(1.25 * s, s, 1.25 * s)); pineFol.setMatrixAt(pc++, m4);
    m4.compose(pv.set(x, h + 2.6 * s, z), q.identity(), sv.set(0.85 * s, 0.8 * s, 0.85 * s)); pineFol.setMatrixAt(pc++, m4);
    addStatic(new CANNON.Cylinder(0.25 * s, 0.3 * s, 2, 6), x, h + 1, z);
    pt++;
  }
  pineFol.count = pc; pineTrunk.count = pt;
  scene.add(pineFol, pineTrunk);
  // palms along the Nile
  const palmTrunk = new THREE.InstancedMesh(new THREE.CylinderGeometry(0.12, 0.2, 1, 6), new THREE.MeshStandardMaterial({ color: '#8a6a45', roughness: 1 }), palmN);
  const frondGeo = new THREE.ConeGeometry(1.6, 0.5, 7, 1, true); frondGeo.translate(0, -0.1, 0);
  const palmTop = new THREE.InstancedMesh(frondGeo, new THREE.MeshStandardMaterial({ color: '#5f8a3c', roughness: 0.9, flatShading: true, side: THREE.DoubleSide }), palmN);
  palmTrunk.castShadow = palmTop.castShadow = true;
  let pn = 0; tries = 0;
  while (pn < palmN && tries < 4000) {
    tries++;
    const z = -60 + rnd() * 120, side = rnd() > 0.5 ? 1 : -1;
    const x = NILE_X(z) + side * (5 + rnd() * 6);
    if (!okGround(x, z, 0.0)) continue;
    const h = sample(x, z), s = 0.9 + rnd() * 0.6, tall = 3.2 * s;
    e.set((rnd() - 0.5) * 0.25, 0, (rnd() - 0.5) * 0.25); q.setFromEuler(e);
    m4.compose(pv.set(x, h + tall / 2, z), q, sv.set(s, tall, s)); palmTrunk.setMatrixAt(pn, m4);
    m4.compose(pv.set(x, h + tall, z), q, sv.set(s, s, s)); palmTop.setMatrixAt(pn, m4);
    addStatic(new CANNON.Cylinder(0.2 * s, 0.25 * s, 2, 6), x, h + 1, z);
    pn++;
  }
  palmTrunk.count = palmTop.count = pn;
  scene.add(palmTrunk, palmTop);

  /* ---------- landmarks ---------- */
  const glow = [];          // things that light up at night: { mat, base, night }
  const nightMat = (color, intensity = 1.6) => { const m = new THREE.MeshStandardMaterial({ color: '#222', emissive: color, emissiveIntensity: 0.05, roughness: 0.6 }); glow.push({ m, night: intensity, day: 0.05 }); return m; };
  const std = (color, extra = {}) => new THREE.MeshStandardMaterial({ color, roughness: 0.85, ...extra });
  const place = (mesh, x, z, y = 0, cast = true) => { mesh.position.set(x, sample(x, z) + y, z); mesh.castShadow = cast; mesh.receiveShadow = true; scene.add(mesh); return mesh; };
  const boxCol = (x, z, w, h, d, ry = 0) => { const qq = new CANNON.Quaternion().setFromEuler(0, ry, 0); addStatic(new CANNON.Box(new CANNON.Vec3(w / 2, h / 2, d / 2)), x, sample(x, z) + h / 2, z, qq); };

  // Egypt: pyramids, an obelisk, balloons over Luxor
  const E = PLACES.giza, L = PLACES.luxor;
  [[E.x - 8, E.z - 14, 9], [E.x + 5, E.z - 18, 7], [E.x - 10, E.z + 10, 5]].forEach(([x, z, s]) => {
    const p = new THREE.Mesh(new THREE.ConeGeometry(s, s * 1.15, 4, 1), std('#d9b77a', { flatShading: true }));
    p.rotation.y = Math.PI / 4; place(p, x, z, s * 0.55);
    addStatic(new CANNON.Cylinder(0.15, s * 0.7, s * 1.1, 4), x, sample(x, z) + s * 0.55, z, new CANNON.Quaternion().setFromEuler(0, Math.PI / 4, 0));
  });
  const balloons = [];
  const bCols = ['#e8c547', '#d9534f', '#3e7bd6', '#6cbf68', '#ef8a3c'];
  for (let k = 0; k < 7; k++) {
    const g = new THREE.Group();
    const env = new THREE.Mesh(new THREE.SphereGeometry(1.5, 16, 12), std(bCols[k % 5], { roughness: 0.6 })); env.scale.y = 1.2; env.castShadow = true;
    const basket = new THREE.Mesh(new THREE.BoxGeometry(0.6, 0.45, 0.6), std('#6b4a2f')); basket.position.y = -2.3;
    const flame = new THREE.Mesh(new THREE.SphereGeometry(0.18, 8, 6), new THREE.MeshBasicMaterial({ color: '#ffb347' })); flame.position.y = -1.7;
    g.add(env, basket, flame);
    const x = L.x - 4 + rnd() * 26 - 13, z = L.z - 4 + rnd() * 24 - 12;
    g.position.set(x, 12 + rnd() * 10, z);
    scene.add(g); balloons.push({ g, y: g.position.y, ph: rnd() * 6, flame });
  }

  const ob = new THREE.Mesh(new THREE.CylinderGeometry(0.25, 0.6, 8, 4), std('#cfa96e', { flatShading: true })); ob.rotation.y = Math.PI / 4; place(ob, L.x + 9, L.z - 6, 4); addStatic(new CANNON.Box(new CANNON.Vec3(0.6, 4, 0.6)), L.x + 9, sample(L.x + 9, L.z - 6) + 4, L.z - 6);
  const colM = std('#cdb38e');
  for (let k = 0; k < 6; k++) [-1, 1].forEach((side) => {
    const x = L.x - 13 + side * 1.6, z = L.z - 8 + k * 2.6;
    const c = new THREE.Mesh(new THREE.CylinderGeometry(0.5, 0.55, 3.6, 10), colM); place(c, x, z, 1.8); addStatic(new CANNON.Cylinder(0.55, 0.55, 3.6, 8), x, sample(x, z) + 1.8, z);
  });
  const archi = new THREE.Mesh(new THREE.BoxGeometry(4.6, 0.5, 15.6), colM); place(archi, L.x - 13, L.z - 1.5, 3.85);
  const C = PLACES.cairo;
  [[8, -6, 2.2], [-9, -4, 1.6], [6, 8, 1.4]].forEach(([dx, dz, r]) => {
    const base = new THREE.Mesh(new THREE.BoxGeometry(r * 2.6, r * 1.8, r * 2.6), std('#d8c3a0')); place(base, C.x + dx, C.z + dz, r * 0.9); boxCol(C.x + dx, C.z + dz, r * 2.6, r * 1.8, r * 2.6);
    const dome = new THREE.Mesh(new THREE.SphereGeometry(r, 16, 10, 0, Math.PI * 2, 0, Math.PI / 2), std('#b9a27e')); place(dome, C.x + dx, C.z + dz, r * 1.8);
  });
  const minaret = new THREE.Mesh(new THREE.CylinderGeometry(0.3, 0.45, 9, 8), std('#e3d2b3')); place(minaret, C.x + 12, C.z - 1, 4.5); addStatic(new CANNON.Cylinder(0.45, 0.45, 9, 8), C.x + 12, sample(C.x + 12, C.z - 1) + 4.5, C.z - 1);
  const mtop = new THREE.Mesh(new THREE.SphereGeometry(0.4, 8, 6), nightMat('#9fe6ff', 1.4)); place(mtop, C.x + 12, C.z - 1, 9.2, false);

  // Qinghai–Gansu: yardangs and a salt lake mirror
  const Q = PLACES.qinggan;
  for (let k = 0; k < 16; k++) {
    const x = Q.x + (rnd() - 0.5) * 40, z = Q.z + (rnd() - 0.5) * 30;
    if (Math.hypot(x - Q.x, z - Q.z) < 9) continue;
    const y = new THREE.Mesh(new THREE.IcosahedronGeometry(1, 1), std('#b0603f', { flatShading: true }));
    const sx = 2 + rnd() * 3, sy = 1.2 + rnd() * 2.2, sz = 1 + rnd();
    y.scale.set(sx, sy, sz); y.rotation.y = 0.6 + (rnd() - 0.5) * 0.3;
    place(y, x, z, sy * 0.4);
    boxCol(x, z, sx * 1.5, sy * 1.4, sz * 1.4, y.rotation.y);
  }
  const salt = new THREE.Mesh(new THREE.CircleGeometry(9, 40), new THREE.MeshStandardMaterial({ color: '#e6edf5', roughness: 0.12, metalness: 0.15 }));
  salt.rotation.x = -Math.PI / 2; salt.position.set(Q.x + 17, sample(Q.x + 17, Q.z + 9) + 0.06, Q.z + 9); salt.receiveShadow = true; scene.add(salt);

  // Beijing: red wall, a gate with a golden roof, lanterns
  const B = PLACES.beijing;
  const red = std('#a8302a'), gold = std('#d9a13b', { flatShading: true });
  [-8.5, 8.5].forEach((dx) => { const w = new THREE.Mesh(new THREE.BoxGeometry(9, 3.4, 1.4), red); place(w, B.x + dx, B.z - 11, 1.7); boxCol(B.x + dx, B.z - 11, 9, 3.4, 1.4); });
  [-4.4, 4.4].forEach((dx) => { const pl = new THREE.Mesh(new THREE.BoxGeometry(0.8, 4.4, 1.6), red); place(pl, B.x + dx, B.z - 11, 2.2); boxCol(B.x + dx, B.z - 11, 0.8, 4.4, 1.6); });
  const lintel = new THREE.Mesh(new THREE.BoxGeometry(10, 0.9, 1.8), red); place(lintel, B.x, B.z - 11, 4.6);
  const gateRoof = new THREE.Mesh(new THREE.CylinderGeometry(0.6, 7.4, 1.8, 4), gold); gateRoof.rotation.y = Math.PI / 4; gateRoof.scale.z = 0.4; place(gateRoof, B.x, B.z - 11, 5.9);
  [-8.5, 8.5].forEach((dx) => { const cap = new THREE.Mesh(new THREE.BoxGeometry(9.4, 0.35, 1.9), gold); place(cap, B.x + dx, B.z - 11, 3.55); });
  const lanterns = [];
  for (let k = -3; k <= 3; k++) {
    if (k === 0) continue;
    const l = new THREE.Mesh(new THREE.SphereGeometry(0.35, 12, 10), nightMat('#ff5a3a', 2.6)); l.scale.y = 1.25; place(l, B.x + k * 3.3, B.z - 10.1, 2.6, false);
    lanterns.push(l);
  }

  // Nanjing: a tall tapered tower with lit windows
  const N = PLACES.nanjing;
  const winTex = (() => { const cv = document.createElement('canvas'); cv.width = 64; cv.height = 256; const x = cv.getContext('2d'); x.fillStyle = '#000'; x.fillRect(0, 0, 64, 256); for (let r = 0; r < 32; r++) for (let cc = 0; cc < 6; cc++) { if (Math.random() < 0.55) { x.fillStyle = `rgba(255,${200 + Math.random() * 40 | 0},140,${0.6 + Math.random() * 0.4})`; x.fillRect(cc * 10 + 3, r * 8 + 2, 6, 4); } } const t = new THREE.CanvasTexture(cv); t.wrapS = t.wrapT = THREE.RepeatWrapping; return t; })();
  const tower = (x, z, w, h, color) => {
    const m = new THREE.MeshStandardMaterial({ color, roughness: 0.4, metalness: 0.3, emissive: '#ffd9a0', emissiveMap: winTex, emissiveIntensity: 0.0 });
    glow.push({ m, night: 1.2, day: 0.0 });
    const b = new THREE.Mesh(new THREE.BoxGeometry(w, h, w), m); place(b, x, z, h / 2); boxCol(x, z, w, h, w);
    return b;
  };
  const zf = new THREE.Mesh(new THREE.CylinderGeometry(0.9, 2.2, 22, 6), new THREE.MeshStandardMaterial({ color: '#7f8fa3', roughness: 0.3, metalness: 0.5, emissive: '#ffd9a0', emissiveMap: winTex, emissiveIntensity: 0 }));
  glow.push({ m: zf.material, night: 1.1, day: 0 }); place(zf, N.x + 8, N.z - 9, 11); addStatic(new CANNON.Cylinder(1.2, 2.2, 22, 6), N.x + 8, sample(N.x + 8, N.z - 9) + 11, N.z - 9);
  tower(N.x - 9, N.z - 8, 3, 9, '#9aa6b5'); tower(N.x + 13, N.z + 6, 3.2, 7, '#a7b0bd');

  // Shanghai: a pearl tower and a cluster of skyscrapers by the sea
  const S = PLACES.shanghai;
  const pearl = new THREE.Group();
  const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.35, 0.5, 24, 8), std('#c9ccd4', { metalness: 0.4 })); pole.position.y = 12;
  const s1 = new THREE.Mesh(new THREE.SphereGeometry(2.4, 20, 16), nightMat('#ff4fa3', 1.4)); s1.material.color.set('#c2507f'); s1.position.y = 7;
  const s2 = new THREE.Mesh(new THREE.SphereGeometry(1.5, 20, 16), nightMat('#ff4fa3', 1.4)); s2.material.color.set('#c2507f'); s2.position.y = 17;
  pearl.add(pole, s1, s2); pearl.traverse((o) => { o.castShadow = true; });
  place(pearl, S.x + 6, S.z - 12, 0); addStatic(new CANNON.Cylinder(2.4, 2.4, 10, 8), S.x + 6, sample(S.x + 6, S.z - 12) + 5, S.z - 12);
  [[S.x - 10, S.z - 10, 3, 14], [S.x - 5, S.z - 15, 2.6, 18], [S.x + 13, S.z - 4, 3.2, 12], [S.x - 12, S.z + 3, 2.4, 9], [S.x + 14, S.z - 14, 2.8, 16]].forEach(([x, z, w, h]) => tower(x, z, w, h, '#8796a8'));

  // "On the road": a signpost
  const R = PLACES.road;
  const post = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.1, 3, 6), std('#ddd')); place(post, R.x + 6, R.z - 6, 1.5);

  return { terrain, water, waterMat, grass, grassU, TRAIL, sample, statics, glow, balloons, lanterns, htex, NX, NZ, H };
}
