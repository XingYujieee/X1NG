/* ==========================================================================
   Drive — the world: ground, water, landmarks (Blender assets), the trees and
   plants of each place, grass that parts for the car, leaves that get kicked
   up, animals, balloons, boats and prayer flags.
   ========================================================================== */
import * as THREE from '../../vendor/three.min.js';
import { mergeGeometries } from '../../vendor/three-addons/utils/BufferGeometryUtils.js';
import { instance, instanced } from './assets.js';
import { PLACES, START, WATER_Y, SIZE_X, SIZE_Z, NX, NZ, X0, Z0, biomeAt, nearestPlace, fbm, smooth, NILE_X, HUANGPU, islandD } from './terrain.js';
import { LANDMARKS, DECOR, ANIMALS, BALLOONS, BOATS, FLAGS, FLAGPOLES, dynamicProps } from './places.js';

const C = (h) => new THREE.Color(h);
const BIOME_COL = { desert: C('#e7c890'), danxia: C('#cf7b52'), meadow: C('#86a85a'), autumn: C('#b5a65f'), plane: C('#8ba45c'), coast: C('#a4b37c'), field: C('#d3b66c') };
const ROAD_COL = { desert: C('#d2ab72'), danxia: C('#b7744f'), meadow: C('#a48a62'), autumn: C('#a59a86'), plane: C('#9b978e'), coast: C('#a19d94'), field: C('#b49763') };
const ROCK = C('#7b6a5c'), SNOW = C('#f4f6fb'), WET = C('#b9a57a'), PLAZA = C('#cfc8b8');

/* a shared wind: sway for every plant, a push away from the car for the low ones */
export const WIND = { t: { value: 0 }, strength: { value: 0.6 }, car: { value: new THREE.Vector3(0, -99, 0) }, carR: { value: 1.7 }, carScreen: { value: new THREE.Vector3(-1e4, -1e4, 0) }, seeR: { value: 120 } };
function windPatch(mat, { bend = 0.06, push = 0, rigid = 0.6, see = false } = {}) {
  const m = mat.clone();
  m.onBeforeCompile = (sh) => {
    Object.assign(sh.uniforms, { wT: WIND.t, wS: WIND.strength, wCar: WIND.car, wCarR: WIND.carR, wCarS: WIND.carScreen, wSeeR: WIND.seeR });
    // trees between the camera and the car open up (dithered), so the car never disappears behind a canopy
    if (see) sh.fragmentShader = sh.fragmentShader.replace('#include <common>', `#include <common>
      uniform vec3 wCarS; uniform float wSeeR;`).replace('#include <clipping_planes_fragment>', `#include <clipping_planes_fragment>
      { vec2 dq = gl_FragCoord.xy - wCarS.xy; float dd = length(dq);
        if (gl_FragCoord.z < wCarS.z - 0.0005 && dd < wSeeR) {
          float k = 1.0 - smoothstep(wSeeR * 0.55, wSeeR, dd);
          float b = fract(dot(floor(gl_FragCoord.xy), vec2(0.5, 0.25)) + fract(floor(gl_FragCoord.y) * 0.5) * 0.5);
          if (b < k * 0.85) discard;
        } }`);
    sh.vertexShader = sh.vertexShader.replace('#include <common>', `#include <common>
      uniform float wT, wS, wCarR; uniform vec3 wCar;`).replace('#include <begin_vertex>', `#include <begin_vertex>
      #ifdef USE_INSTANCING
        vec3 wRoot = vec3(instanceMatrix[3][0], instanceMatrix[3][1], instanceMatrix[3][2]);
      #else
        vec3 wRoot = vec3(0.0);
      #endif
      float wH = max(0.0, transformed.y - ${rigid.toFixed(2)});
      float wPh = wRoot.x * 0.21 + wRoot.z * 0.17;
      float wSw = (sin(wT * 1.7 + wPh) + 0.4 * sin(wT * 3.9 + wPh * 2.3)) * wS;
      transformed.x += wSw * ${bend.toFixed(3)} * wH * wH;
      transformed.z += cos(wT * 1.3 + wPh) * wS * ${(bend * 0.5).toFixed(3)} * wH * wH;
      ${push ? `vec2 wd = wRoot.xz - wCar.xz; float wl = length(wd);
      float wk = (1.0 - smoothstep(wCarR * 0.4, wCarR, wl)) * step(abs(wRoot.y - wCar.y), 2.5);
      vec2 wdir = wl > 0.001 ? wd / wl : vec2(1.0, 0.0);
      transformed.xz += wdir * wk * ${push.toFixed(2)} * transformed.y; transformed.y *= 1.0 - wk * 0.45;` : ''}`);
  };
  m.customProgramCacheKey = () => `wind${bend}${push}${rigid}${see}`;
  return m;
}

export function buildWorld(scene, physics, lib, grid, { coarse = false } = {}) {
  const { sample, slope, road, at } = grid;
  const rnd = (() => { let s = 1234567; return () => ((s = (s * 16807) % 2147483647) / 2147483647); })();
  const glow = [];            // { m, day, night }
  const tmpM = new THREE.Matrix4(), tmpQ = new THREE.Quaternion(), tmpS = new THREE.Vector3(), tmpP = new THREE.Vector3(), Y = new THREE.Vector3(0, 1, 0);
  const mtx = (x, y, z, ry = 0, s = 1) => new THREE.Matrix4().compose(new THREE.Vector3(x, y, z), new THREE.Quaternion().setFromAxisAngle(Y, ry), new THREE.Vector3(s, s, s));
  const nearStop = (x, z, r) => { for (const k in PLACES) if (Math.hypot(x - PLACES[k].x, z - PLACES[k].z) < r) return true; return Math.hypot(x - START.x, z - START.z) < r; };
  const t2 = new THREE.Color();

  /* ---------- ground ---------- */
  const geo = new THREE.PlaneGeometry(SIZE_X, SIZE_Z, NX, NZ); geo.rotateX(-Math.PI / 2);
  const pos = geo.attributes.position, col = new Float32Array(pos.count * 3), aux = new Float32Array(pos.count * 2), c = new THREE.Color(), rc = new THREE.Color();
  for (let k = 0; k < pos.count; k++) {
    const x = pos.getX(k), z = pos.getZ(k), i = Math.round(x - X0), j = Math.round(z - Z0), h = at(i, j);
    pos.setY(k, h);
    const w = biomeAt(x, z);
    c.setRGB(0, 0, 0); for (const b in w) c.add(t2.copy(BIOME_COL[b]).multiplyScalar(w[b]));
    if (w.danxia > 0.1) { const s = 0.5 + 0.5 * Math.sin(h * 3.4 + fbm(x * 0.1, z * 0.1) * 3); c.lerp(t2.set(s > 0.55 ? '#e39a62' : s < 0.3 ? '#a9533a' : '#c86f4a'), w.danxia * 0.6); }
    const rd = road(x, z);
    if (rd < 2.8) { rc.setRGB(0, 0, 0); for (const b in w) rc.add(t2.copy(ROAD_COL[b]).multiplyScalar(w[b])); c.lerp(rc, 1 - smooth(1.4, 2.8, rd)); }
    for (const key in PLACES) { const p = PLACES[key], d = Math.hypot(x - p.x, z - p.z); if (d < 8.5) c.lerp(PLAZA, (1 - smooth(6.5, 8.5, d)) * 0.45); }
    const sl = Math.hypot(at(i + 1, j) - at(i - 1, j), at(i, j + 1) - at(i, j - 1)) / 2;
    c.lerp(ROCK, smooth(0.5, 1.15, sl) * 0.8);
    c.lerp(SNOW, smooth(6.0, 9.0, h + fbm(x * 0.3, z * 0.3) * 2));
    c.lerp(WET, (1 - smooth(-0.25, 0.2, h)) * 0.85);
    const n = (fbm(x * 0.7, z * 0.7) - 0.5) * 0.07;
    col[k * 3] = c.r + n; col[k * 3 + 1] = c.g + n; col[k * 3 + 2] = c.b + n;
    aux[k * 2] = (w.desert || 0) + (w.danxia || 0) * 0.6; aux[k * 2 + 1] = smooth(6.0, 9.0, h);
  }
  geo.setAttribute('color', new THREE.BufferAttribute(col, 3));
  geo.setAttribute('aux', new THREE.BufferAttribute(aux, 2));
  geo.computeVertexNormals();
  const groundMat = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.96 });
  groundMat.onBeforeCompile = (sh) => {   // fine grain everywhere, wind ripples on the sand
    sh.vertexShader = sh.vertexShader.replace('#include <common>', '#include <common>\nattribute vec2 aux; varying vec2 vAux; varying vec3 vWp;')
      .replace('#include <begin_vertex>', '#include <begin_vertex>\nvAux = aux; vWp = (modelMatrix * vec4(transformed, 1.0)).xyz;');
    sh.fragmentShader = sh.fragmentShader.replace('#include <common>', `#include <common>
      varying vec2 vAux; varying vec3 vWp;
      float gH(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
      float gN(vec2 p){ vec2 i = floor(p), f = fract(p); f = f*f*(3.-2.*f); return mix(mix(gH(i), gH(i+vec2(1,0)), f.x), mix(gH(i+vec2(0,1)), gH(i+vec2(1,1)), f.x), f.y); }`)
      .replace('#include <color_fragment>', `#include <color_fragment>
      float grain = gN(vWp.xz * 1.7) * 0.6 + gN(vWp.xz * 6.0) * 0.4;
      diffuseColor.rgb *= 0.93 + grain * 0.12;
      float rip = sin(vWp.x * 2.2 + sin(vWp.z * 0.35) * 2.5 + gN(vWp.xz * 0.4) * 3.0);
      diffuseColor.rgb *= 1.0 - vAux.x * smoothstep(0.55, 1.0, rip) * 0.07;
      diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.96, 0.97, 1.0), vAux.y * (0.6 + grain * 0.3));`);
  };
  const terrain = new THREE.Mesh(geo, groundMat); terrain.receiveShadow = true; scene.add(terrain);

  /* ---------- water ---------- */
  const hdata = new Uint8Array((NX + 1) * (NZ + 1) * 4);
  for (let k = 0; k < grid.H.length; k++) { hdata[k * 4] = Math.max(0, Math.min(255, Math.round((grid.H[k] + 4) * 32))); hdata[k * 4 + 3] = 255; }
  const htex = new THREE.DataTexture(hdata, NX + 1, NZ + 1); htex.needsUpdate = true; htex.magFilter = htex.minFilter = THREE.LinearFilter;
  const waterMat = new THREE.ShaderMaterial({
    transparent: true, fog: true,
    uniforms: { ...THREE.UniformsUtils.clone(THREE.UniformsLib.fog), t: { value: 0 }, htex: { value: htex }, deep: { value: C('#1e6a8f') }, shallow: { value: C('#63c6c8') }, foam: { value: C('#ffffff') }, night: { value: 0 }, sky: { value: C('#bfe3ff') }, car: { value: new THREE.Vector3() } },
    vertexShader: `#include <fog_pars_vertex>
      varying vec3 vW; void main(){ vec4 w = modelMatrix * vec4(position,1.0); vW = w.xyz; vec4 mvPosition = viewMatrix * w; gl_Position = projectionMatrix * mvPosition;
      #include <fog_vertex>
      }`,
    fragmentShader: `#include <fog_pars_fragment>
      uniform float t, night; uniform sampler2D htex; uniform vec3 deep, shallow, foam, sky, car; varying vec3 vW;
      float hs(vec2 q){ return fract(sin(dot(q, vec2(127.1, 311.7))) * 43758.5453); }
      float vn(vec2 q){ vec2 i = floor(q), f = fract(q); f = f*f*(3.-2.*f); return mix(mix(hs(i), hs(i+vec2(1,0)), f.x), mix(hs(i+vec2(0,1)), hs(i+vec2(1,1)), f.x), f.y); }
      void main(){
        vec2 uv = vec2((vW.x + ${(SIZE_X / 2).toFixed(1)}) / ${SIZE_X.toFixed(1)}, (vW.z + ${(SIZE_Z / 2).toFixed(1)}) / ${SIZE_Z.toFixed(1)});
        float h = (uv.x < 0.0 || uv.x > 1.0 || uv.y < 0.0 || uv.y > 1.0) ? -4.0 : texture2D(htex, uv).r * 255.0 / 32.0 - 4.0;
        float depth = ${WATER_Y.toFixed(2)} - h;
        float n = vn(vW.xz * 0.35 + t * 0.25) * 0.6 + vn(vW.xz * 1.1 - t * 0.4) * 0.4;
        vec3 c = mix(shallow, deep, smoothstep(0.0, 1.6, depth));
        c += sky * 0.14 * smoothstep(0.62, 1.0, n);
        float lines = smoothstep(0.92, 1.0, sin((depth + n * 0.15) * 26.0 - t * 1.6)) * (1.0 - smoothstep(0.05, 0.5, depth));
        float f = smoothstep(0.16, 0.0, depth + (n - 0.5) * 0.1) * 0.8 + lines * 0.35;
        float wk = exp(-pow(length(vW.xz - car.xz), 2.0) * 0.4) * step(car.y, 0.6);
        c = mix(c, foam, clamp(f + wk * 0.6, 0.0, 1.0));
        c *= mix(1.0, 0.3, night); c += foam * f * night * 0.2;
        gl_FragColor = vec4(c, max(clamp(0.5 + depth * 0.35, 0.0, 0.92), f * 0.95));
        #include <fog_fragment>
      }`,
  });
  const water = new THREE.Mesh(new THREE.PlaneGeometry(900, 900), waterMat);
  water.rotation.x = -Math.PI / 2; water.position.y = WATER_Y; water.renderOrder = 2; scene.add(water);

  /* ---------- landmarks: merged per place and material; convex colliders from the Blender shapes ---------- */
  const buckets = {};
  const addHulls = (A, m) => {
    for (const pts of A.hulls) {
      const out = new Float32Array(pts.length), v = new THREE.Vector3();
      for (let i = 0; i < pts.length; i += 3) { v.set(pts[i], pts[i + 1], pts[i + 2]).applyMatrix4(m); out[i] = v.x; out[i + 1] = v.y; out[i + 2] = v.z; }
      physics.statics.hull(out, 0, 0, 0);
    }
  };
  const bake = (name, m, place) => {
    const A = lib[name]; if (!A) { console.warn('missing asset', name); return; }
    for (const p of A.parts) {
      let g = p.geometry.clone().applyMatrix4(m);
      for (const k of Object.keys(g.attributes)) if (k !== 'position' && k !== 'normal') g.deleteAttribute(k);
      if (g.index) g = g.toNonIndexed();
      const b = (buckets[place] ||= {}); (b[p.material.name] ||= { mat: p.material, geos: [] }).geos.push(g);
    }
  };
  for (const [name, x, z, ry, s, yo = 0] of LANDMARKS) {
    const m = mtx(x, sample(x, z) + yo, z, ry, s);
    bake(name, m, nearestPlace(x, z).key);
    if (lib[name]) addHulls(lib[name], m);
  }
  for (const [name, x, z, ry, s, y] of DECOR) bake(name, mtx(x, sample(x, z) + y, z, ry, s), nearestPlace(x, z).key);
  for (const place in buckets) for (const k in buckets[place]) {
    const { mat, geos } = buckets[place][k];
    const mesh = new THREE.Mesh(mergeGeometries(geos, false), mat); mesh.castShadow = true; mesh.receiveShadow = true; scene.add(mesh);
  }
  const M = lib.__materials;
  if (M.lantern) glow.push({ m: M.lantern, day: 0.0, night: 1.6 });
  for (const [name, x, z, ry, s, y] of DECOR) {
    const A = lib[name]; if (!A || !A.roles.lamp) continue;
    for (const r of A.roles.lamp) { const mesh = new THREE.Mesh(r.geometry, r.material); mesh.applyMatrix4(mtx(x, sample(x, z) + y, z, ry, s)); scene.add(mesh); glow.push({ m: r.material, day: 0, night: 2.4 }); }
  }
  for (const n of ['glass_city', 'glass_dark']) if (M[n]) { M[n].emissive = C('#ffcf8a'); glow.push({ m: M[n], day: 0, night: 0.22 }); }
  if (M.pearl) { M.pearl.emissive = C('#ff4fa3'); glow.push({ m: M.pearl, day: 0, night: 0.9 }); }

  /* ---------- trees and plants of each place ---------- */
  const trees = {};
  const addTree = (type, x, z, s = 1, ry = rnd() * Math.PI * 2) => { (trees[type] ||= []).push({ x, y: sample(x, z) - 0.05, z, ry, s, wob: 0, v: 0, ax: 0, az: 0 }); };
  const clear = (x, z, r = 2.8) => road(x, z) > r && !nearStop(x, z, 9) && sample(x, z) > 0.05 && slope(x, z) < 0.5 && islandD(x, z) < 0.9;
  const blocked = [];
  for (const [name, x, z, , s] of LANDMARKS) blocked.push([x, z, (name.startsWith('pyramid') ? 12 : name === 'city_wall' ? 9 : 6.5) * (s || 1)]);
  const free = (x, z) => blocked.every(([bx, bz, r]) => Math.hypot(x - bx, z - bz) > r);
  const AVENUE = { autumn: 'ginkgo', plane: 'plane', coast: 'plane', danxia: 'poplar', field: 'poplar' };
  for (let x = X0; x < -X0; x += 1) for (let z = Z0; z < -Z0; z += 1) {
    const rd = road(x, z); if (rd < 4.6 || rd > 5.6) continue;
    const w = biomeAt(x, z); let best = null, bw = 0.5; for (const b in AVENUE) if ((w[b] || 0) > bw) { bw = w[b]; best = b; }
    if (!best || ((x * 7 + z * 13) % 5 + 5) % 5 !== 0 || rnd() > 0.6) continue;
    if (!clear(x, z, 4.4) || !free(x, z)) continue;
    addTree(AVENUE[best], x, z, (AVENUE[best] === 'plane' ? 0.72 : 0.9) + rnd() * 0.2);
  }
  const TRIES = coarse ? 9000 : 16000;
  for (let n = 0; n < TRIES; n++) {
    const x = X0 + rnd() * SIZE_X, z = Z0 + rnd() * SIZE_Z, w = biomeAt(x, z), h = sample(x, z);
    if (h < 0.3 && h > WATER_Y - 0.1 && road(x, z) > 2.5 && !nearStop(x, z, 8) && rnd() < 0.6 && Math.min(sample(x + 2.5, z), sample(x - 2.5, z), sample(x, z + 2.5), sample(x, z - 2.5)) < WATER_Y) addTree('reeds', x, z, 0.8 + rnd() * 0.5);
    if (!clear(x, z) || !free(x, z)) continue;
    const dens = fbm(x * 0.06 + 3, z * 0.06);
    const nile = Math.abs(x - NILE_X(z));
    if (h > 2.5 && h < 9 && rnd() < 0.12) { addTree(h > 5 ? 'fir_snow' : 'fir', x, z, 0.7 + rnd() * 0.5); continue; }
    if ((w.desert || 0) > 0.5) {
      if (nile > 5 && nile < 10.5 && rnd() < 0.22) addTree('palm', x, z, 0.85 + rnd() * 0.4);
      else if (rnd() < 0.03) addTree('shrub', x, z, 0.8 + rnd() * 0.6);
    } else if ((w.danxia || 0) > 0.5) {
      if (rnd() < 0.08) addTree('tuft', x, z, 1 + rnd());
      else if (rnd() < 0.01) addTree('shrub', x, z, 0.7 + rnd() * 0.5);
    } else if ((w.meadow || 0) > 0.45) {
      if (dens > 0.5 && rnd() < 0.3) addTree(h > 3.5 ? 'fir_snow' : 'fir', x, z, 0.8 + rnd() * 0.7);
      else if (rnd() < 0.03) addTree('blossom', x, z, 0.8 + rnd() * 0.5);
      else if (rnd() < 0.04) addTree('bush', x, z, 0.6 + rnd() * 0.6);
    } else if ((w.autumn || 0) > 0.45) {
      if (dens > 0.52 && rnd() < 0.12) addTree('ginkgo', x, z, 0.8 + rnd() * 0.4);
      else if (rnd() < 0.03) addTree('bush', x, z, 0.6 + rnd() * 0.4);
    } else if ((w.plane || 0) > 0.45 || (w.coast || 0) > 0.45) {
      if (dens > 0.56 && rnd() < 0.1) addTree('plane', x, z, 0.7 + rnd() * 0.3);
      else if (rnd() < 0.04) addTree('bush', x, z, 0.6 + rnd() * 0.5);
    } else if ((w.field || 0) > 0.45) {
      if (dens > 0.62 && rnd() < 0.08) addTree('poplar', x, z, 0.9 + rnd() * 0.3);
      else if (rnd() < 0.02) addTree('bush', x, z, 0.5 + rnd() * 0.4);
    }
  }
  const SOLID = { fir: 0.3, fir_snow: 0.3, palm: 0.24, ginkgo: 0.28, plane: 0.34, poplar: 0.24, blossom: 0.2 };
  const LOW = { shrub: 1, tuft: 1, reeds: 1, bush: 1 };
  const treeMeshes = {};
  for (const type in trees) {
    const list = trees[type];
    const { group, meshes } = instanced(lib, type, list.map((t) => mtx(t.x, t.y, t.z, t.ry, t.s)), {
      shadow: !LOW[type],
      patch: (mat, name) => windPatch(mat, LOW[type] ? { bend: 0.05, push: 0.9, rigid: 0.05 } : { bend: name.startsWith('bark') ? 0.004 : 0.008, rigid: 1.2, see: true }),
    });
    scene.add(group); treeMeshes[type] = meshes;
    if (SOLID[type]) for (const t of list) physics.statics.cyl(t.x, t.y + 1.5, t.z, 1.5, SOLID[type] * t.s);
  }
  const shaking = new Set();
  function hitTrees(carPos, speed, onShake) {
    if (speed < 1.5) return;
    for (const type in SOLID) {
      const list = trees[type]; if (!list) continue;
      for (let i = 0; i < list.length; i++) {
        const t = list[i], dx = t.x - carPos.x, dz = t.z - carPos.z, d2 = dx * dx + dz * dz;
        if (d2 > 2.2 * 2.2 || Math.abs(t.wob) > 0.3) continue;
        const d = Math.sqrt(d2) || 1;
        t.wob = Math.min(1, 0.3 + speed / 10); t.v = 0; t.ax = dz / d; t.az = -dx / d; t.type = type; t.i = i; t.phase = 0;
        shaking.add(t); onShake?.(t);
      }
    }
  }
  function updateShaking(dt) {
    for (const t of shaking) {
      t.v += (-t.wob * 70 - t.v * 3.5) * dt; t.wob += t.v * dt; t.phase += dt;
      tmpQ.setFromAxisAngle(tmpP.set(t.ax, 0, t.az), t.wob * 0.2).multiply(new THREE.Quaternion().setFromAxisAngle(Y, t.ry));
      tmpM.compose(tmpP.set(t.x, t.y, t.z), tmpQ, tmpS.set(t.s, t.s, t.s));
      for (const m of treeMeshes[t.type]) { m.setMatrixAt(t.i, tmpM); m.instanceMatrix.needsUpdate = true; }
      if (Math.abs(t.wob) < 0.004 && Math.abs(t.v) < 0.03 && t.phase > 0.4) { t.wob = 0; shaking.delete(t); }
    }
  }

  /* ---------- grass and flowers ---------- */
  const TRAIL = 48;
  const grassU = { t: WIND.t, wind: WIND.strength, car: WIND.car, trail: { value: Array.from({ length: TRAIL }, () => new THREE.Vector4(0, -99, 0, 1)) }, light: { value: new THREE.Color(1, 1, 1) } };
  const blade = new THREE.BufferGeometry();
  blade.setAttribute('position', new THREE.Float32BufferAttribute([-0.06, 0, 0, 0.06, 0, 0, -0.04, 0.3, 0, 0.04, 0.3, 0, 0, 0.62, 0], 3));
  blade.setIndex([0, 1, 2, 2, 1, 3, 2, 3, 4]);
  const GN = coarse ? 14000 : 34000;
  const grass = new THREE.InstancedMesh(blade, new THREE.ShaderMaterial({
    uniforms: Object.assign(THREE.UniformsUtils.clone(THREE.UniformsLib.fog), grassU), side: THREE.DoubleSide, fog: true,
    vertexShader: `#include <fog_pars_vertex>
      uniform float t, wind; uniform vec3 car; uniform vec4 trail[${TRAIL}]; varying float vY; varying vec3 vC; attribute vec3 tint;
      void main(){
        vec3 p = position; vY = p.y / 0.62; vC = tint;
        vec4 w = instanceMatrix * vec4(p, 1.0);
        vec3 root = (instanceMatrix * vec4(0.0, 0.0, 0.0, 1.0)).xyz;
        float s = sin(t * 1.8 + root.x * 0.35 + root.z * 0.27) + sin(t * 3.1 + root.x * 0.9) * 0.35;
        w.x += s * 0.12 * wind * vY * vY; w.z += s * 0.06 * wind * vY * vY;
        float press = 0.0; vec2 dir = vec2(0.0);
        for (int i = 0; i < ${TRAIL}; i++) {
          vec2 d = root.xz - trail[i].xz; float r = length(d);
          float k = (1.0 - smoothstep(0.3, 1.0, r)) * (1.0 - trail[i].w);
          if (k > press) { press = k; dir = r > 0.001 ? d / r : vec2(1.0, 0.0); }
        }
        vec2 dc = root.xz - car.xz; float rc = length(dc);
        float kc = (1.0 - smoothstep(0.9, 2.0, rc)) * step(abs(root.y - car.y), 2.0);
        if (kc > press) { press = kc; dir = rc > 0.001 ? dc / rc : vec2(1.0, 0.0); }
        w.xz += dir * press * vY * 0.5; w.y -= press * vY * 0.45;
        vec4 mvPosition = viewMatrix * w; gl_Position = projectionMatrix * mvPosition;
        #include <fog_vertex>
      }`,
    fragmentShader: `#include <fog_pars_fragment>
      uniform vec3 light; varying float vY; varying vec3 vC;
      void main(){ vec3 c = mix(vC * 0.5, vC * 1.12, vY) * light; gl_FragColor = vec4(c, 1.0);
        #include <fog_fragment>
      }`,
  }), GN);
  const tint = new Float32Array(GN * 3);
  const GRASS = { meadow: [0.25, 0.45, 0.38, 1], autumn: [0.13, 0.42, 0.45, 0.85], plane: [0.24, 0.42, 0.36, 0.9], coast: [0.26, 0.38, 0.4, 0.55], field: [0.12, 0.5, 0.55, 0.6] };
  let gp = 0;
  const FN = coarse ? 1500 : 3500;
  const flowers = new THREE.InstancedMesh(new THREE.OctahedronGeometry(0.09, 0).translate(0, 0.42, 0), windPatch(new THREE.MeshStandardMaterial({ roughness: 0.8 }), { bend: 0.15, push: 1.1, rigid: 0 }), FN);
  let fp = 0;
  const FLOWER_COLS = ['#f4f1e6', '#f2c94c', '#e88aa8', '#a78bd8', '#f4f1e6'].map(C);
  for (let tries = 0; tries < GN * 8 && gp < GN; tries++) {
    const x = X0 + rnd() * SIZE_X, z = Z0 + rnd() * SIZE_Z, w = biomeAt(x, z);
    let b = null, bw = 0; for (const k in GRASS) if ((w[k] || 0) > bw) { bw = w[k]; b = k; }
    if (!b || rnd() > bw * 1.3 || fbm(x * 0.08, z * 0.08) < 0.36) continue;
    const h = sample(x, z);
    if (h < 0.05 || h > 6 || road(x, z) < 2.2 || nearStop(x, z, 7.5) || slope(x, z) > 0.6 || !free(x, z)) continue;
    const g = GRASS[b], s = (0.7 + rnd() * 0.7) * g[3];
    tmpM.compose(tmpP.set(x, h - 0.02, z), tmpQ.setFromEuler(new THREE.Euler(0, rnd() * 6.28, (rnd() - 0.5) * 0.3)), tmpS.set(s, s * (0.8 + rnd() * 0.6), s));
    grass.setMatrixAt(gp, tmpM);
    t2.setHSL(g[0] + rnd() * 0.05, g[1] + rnd() * 0.12, g[2] + rnd() * 0.1); tint.set([t2.r, t2.g, t2.b], gp * 3); gp++;
    if (b === 'meadow' && fp < FN && rnd() < 0.18) { flowers.setMatrixAt(fp, tmpM.compose(tmpP.set(x + 0.2, h, z + 0.1), tmpQ.identity(), tmpS.set(1, 0.8 + rnd() * 0.6, 1))); flowers.setColorAt(fp, FLOWER_COLS[Math.floor(rnd() * 5)]); fp++; }
  }
  grass.count = gp; flowers.count = fp;
  grass.geometry.setAttribute('tint', new THREE.InstancedBufferAttribute(tint, 3));
  grass.frustumCulled = false; flowers.frustumCulled = false;
  scene.add(grass, flowers);

  /* ---------- fallen leaves: ginkgo gold in Beijing, plane-tree brown in Nanjing; the car kicks them up ---------- */
  const leafTex = (() => {
    const cv = document.createElement('canvas'); cv.width = cv.height = 64; const x = cv.getContext('2d');
    x.fillStyle = '#fff'; x.beginPath(); x.moveTo(32, 60); x.bezierCurveTo(4, 40, 4, 8, 32, 4); x.bezierCurveTo(60, 8, 60, 40, 32, 60); x.fill();
    return new THREE.CanvasTexture(cv);
  })();
  const LN = coarse ? 900 : 1800;
  const leaves = new THREE.InstancedMesh(new THREE.PlaneGeometry(0.26, 0.26).rotateX(-Math.PI / 2), new THREE.MeshStandardMaterial({ map: leafTex, alphaTest: 0.5, side: THREE.DoubleSide, roughness: 0.9 }), LN);
  const L = [];
  for (let tries = 0; tries < LN * 30 && L.length < LN; tries++) {
    const gold = rnd() < 0.5, list = gold ? trees.ginkgo : trees.plane; if (!list || !list.length) continue;
    const tr = list[Math.floor(rnd() * list.length)], a = rnd() * 6.28, r = rnd() * 4.5;
    const x = tr.x + Math.cos(a) * r, z = tr.z + Math.sin(a) * r, h = sample(x, z);
    if (h < 0.05) continue;
    L.push({ p: new THREE.Vector3(x, h + 0.03, z), v: new THREE.Vector3(), rot: rnd() * 6.28, spin: 0, tilt: 0, air: false });
    leaves.setColorAt(L.length - 1, t2.setHSL(gold ? 0.12 + rnd() * 0.03 : 0.07 + rnd() * 0.04, gold ? 0.8 : 0.55, gold ? 0.55 + rnd() * 0.1 : 0.38 + rnd() * 0.12));
  }
  leaves.count = L.length; leaves.frustumCulled = false; leaves.instanceMatrix.setUsage(THREE.DynamicDrawUsage); leaves.receiveShadow = true;
  const eul = new THREE.Euler();
  const writeLeaf = (i) => { const l = L[i]; tmpM.compose(l.p, tmpQ.setFromEuler(eul.set(l.tilt, l.rot, l.tilt * 0.6)), tmpS.set(1, 1, 1)); leaves.setMatrixAt(i, tmpM); };
  L.forEach((_, i) => writeLeaf(i));
  scene.add(leaves);
  function kickLeaves(carPos, vel, speed, dt) {
    let dirty = false;
    for (let i = 0; i < L.length; i++) {
      const l = L[i];
      if (!l.air) {
        if (speed < 2.5) continue;
        const dx = l.p.x - carPos.x, dz = l.p.z - carPos.z, d2 = dx * dx + dz * dz;
        if (d2 > 2.6 || Math.abs(l.p.y - carPos.y) > 2) continue;
        l.air = true; const k = 0.25 + Math.random() * 0.4;
        l.v.set(vel.x * k + dx * 1.5, 2 + Math.random() * speed * 0.35, vel.z * k + dz * 1.5); l.spin = (Math.random() - 0.5) * 12;
      }
      l.v.y -= 6 * dt; l.v.multiplyScalar(1 - dt * 2.2);
      l.p.addScaledVector(l.v, dt); l.rot += l.spin * dt; l.tilt = Math.sin(l.rot * 2) * 0.8;
      const g = sample(l.p.x, l.p.z) + 0.03;
      if (l.p.y <= g) { l.p.y = g; l.air = false; l.tilt = 0; }
      writeLeaf(i); dirty = true;
    }
    if (dirty) leaves.instanceMatrix.needsUpdate = true;
  }

  /* ---------- falling leaves and petals, near the camera, in the places that have them ---------- */
  const FALL = 240;
  const fall = new THREE.InstancedMesh(new THREE.PlaneGeometry(0.2, 0.2), new THREE.MeshStandardMaterial({ map: leafTex, alphaTest: 0.5, side: THREE.DoubleSide }), FALL);
  fall.frustumCulled = false; fall.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
  for (let i = 0; i < FALL; i++) fall.setColorAt(i, t2.set('#e8b93a'));
  const F = Array.from({ length: FALL }, () => ({ p: new THREE.Vector3(0, -99, 0), ph: Math.random() * 6, life: 0 }));
  scene.add(fall);
  const FALL_COL = { autumn: [0.12, 0.8, 0.55], plane: [0.08, 0.55, 0.42], meadow: [0.95, 0.6, 0.82] };
  function updateFall(dt, tt, focus) {
    const n = nearestPlace(focus.x, focus.z), b = PLACES[n.key].biome, fc = FALL_COL[b];
    const want = fc && n.d < 34;
    const list = b === 'autumn' ? trees.ginkgo : b === 'plane' ? trees.plane : trees.blossom;
    const near = want && list ? list.filter((t) => Math.abs(t.x - focus.x) < 24 && Math.abs(t.z - focus.z) < 18) : [];
    let colDirty = false;
    for (let i = 0; i < FALL; i++) {
      const f = F[i];
      if (f.life <= 0) {
        f.p.y = -99;
        if (near.length && Math.random() < 0.03) {
          const tr = near[Math.floor(Math.random() * near.length)];
          f.p.set(tr.x + (Math.random() - 0.5) * 3, tr.y + 2.5 + Math.random() * 2 * tr.s, tr.z + (Math.random() - 0.5) * 3); f.life = 1;
          fall.setColorAt(i, t2.setHSL(fc[0] + Math.random() * 0.04, fc[1], fc[2] + Math.random() * 0.1)); colDirty = true;
        }
      } else {
        f.p.x += (Math.sin(tt * 1.3 + f.ph) * 0.6 + WIND.strength.value * 0.6) * dt; f.p.z += Math.cos(tt * 1.1 + f.ph) * 0.4 * dt; f.p.y -= 0.7 * dt;
        if (f.p.y < sample(f.p.x, f.p.z)) f.life = 0;
      }
      tmpM.compose(f.p, tmpQ.setFromEuler(eul.set(Math.sin(tt * 3 + f.ph) * 1.2, tt * 2 + f.ph, Math.cos(tt * 2.6 + f.ph))), tmpS.set(1, 1, 1));
      fall.setMatrixAt(i, tmpM);
    }
    fall.instanceMatrix.needsUpdate = true; if (colDirty) fall.instanceColor.needsUpdate = true;
  }

  /* ---------- prayer flags (Yunnan) ---------- */
  const flagCols = ['#2f6fd0', '#f4f1e6', '#d4392e', '#3f9a52', '#f2c230'].map(C);
  const fgeo = [];
  for (const [[ax, ay, az], [bx, by, bz]] of FLAGS) {
    const ya = sample(ax, az) + ay, yb = sample(bx, bz) + by, len = Math.hypot(bx - ax, bz - az), n = Math.floor(len / 0.5);
    for (let k = 1; k < n; k++) {
      const u = k / n, x = ax + (bx - ax) * u, z = az + (bz - az) * u, y = ya + (yb - ya) * u - Math.sin(u * Math.PI) * 0.9;
      const g = new THREE.PlaneGeometry(0.34, 0.42, 3, 1).translate(0, -0.21, 0).rotateY(-Math.atan2(bz - az, bx - ax)).translate(x, y, z);
      const cc = flagCols[k % 5], arr = new Float32Array(g.attributes.position.count * 3); for (let q = 0; q < arr.length; q += 3) { arr[q] = cc.r; arr[q + 1] = cc.g; arr[q + 2] = cc.b; }
      g.setAttribute('color', new THREE.BufferAttribute(arr, 3)); g.deleteAttribute('uv'); fgeo.push(g);
    }
  }
  if (fgeo.length) {
    const fm = new THREE.MeshStandardMaterial({ vertexColors: true, side: THREE.DoubleSide, roughness: 0.9 });
    fm.onBeforeCompile = (sh) => {
      sh.uniforms.wT = WIND.t; sh.uniforms.wS = WIND.strength;
      sh.vertexShader = sh.vertexShader.replace('#include <common>', '#include <common>\nuniform float wT, wS;').replace('#include <begin_vertex>', `#include <begin_vertex>
        transformed.x += sin(wT * 6.0 + position.x * 3.0 + position.z * 2.0) * 0.08 * (0.6 + wS);
        transformed.z += cos(wT * 5.0 + position.x * 2.0) * 0.08 * (0.6 + wS);`);
    };
    const flags = new THREE.Mesh(mergeGeometries(fgeo), fm); flags.castShadow = true; scene.add(flags);
  }
  for (const [x, z] of FLAGPOLES) { const g = instance(lib, 'flagpole'); g.position.set(x, sample(x, z), z); scene.add(g); physics.statics.cyl(x, sample(x, z) + 2.5, z, 2.5, 0.12); }

  /* ---------- animals: graze, trot off when the car comes close ---------- */
  const animals = ANIMALS.map(([name, x, z, ry, s]) => {
    const g = instance(lib, name); g.scale.setScalar(s); g.position.set(x, sample(x, z), z); g.rotation.y = ry; scene.add(g);
    return { g, home: new THREE.Vector2(x, z), tgt: new THREE.Vector2(x, z), bob: Math.random() * 6, speed: 0 };
  });
  function updateAnimals(dt, tt, carPos) {
    for (const a of animals) {
      const p = a.g.position, dc = Math.hypot(p.x - carPos.x, p.z - carPos.z);
      if (dc < 5) { a.tgt.set(p.x + (p.x - carPos.x) / dc * 6, p.z + (p.z - carPos.z) / dc * 6); a.speed = 3.2; }
      else if (Math.random() < dt * 0.08) { a.tgt.set(a.home.x + (Math.random() - 0.5) * 8, a.home.y + (Math.random() - 0.5) * 8); a.speed = 0.7; }
      const dx = a.tgt.x - p.x, dz = a.tgt.y - p.z, d = Math.hypot(dx, dz);
      if (d > 0.3 && sample(a.tgt.x, a.tgt.y) > 0.05) {
        let diff = Math.atan2(-dz, dx) - a.g.rotation.y; diff = Math.atan2(Math.sin(diff), Math.cos(diff));
        a.g.rotation.y += diff * Math.min(1, dt * 4);
        p.x += dx / d * a.speed * dt; p.z += dz / d * a.speed * dt;
        a.g.rotation.z = Math.sin(tt * a.speed * 4) * 0.04;
      } else { a.speed = 0; a.g.rotation.z = Math.sin(tt * 0.8 + a.bob) * 0.02; }
      p.y = sample(p.x, p.z) + (a.speed > 1 ? Math.abs(Math.sin(tt * a.speed * 4)) * 0.06 : 0);
    }
  }

  /* ---------- balloons over Luxor, boats on the Nile and the Huangpu ---------- */
  const balloons = BALLOONS.map(([x, z, y], i) => {
    const g = instance(lib, 'balloon'); g.position.set(x, y, z); g.scale.setScalar(1.3); scene.add(g);
    const fl = lib.balloon?.roles.glow?.[0]; let flame = null;
    if (fl) { flame = new THREE.Mesh(fl.geometry, new THREE.MeshBasicMaterial({ color: '#ffb347' })); g.add(flame); }
    return { g, x, z, y, ph: i * 1.7, flame };
  });
  const boats = BOATS.map((b) => { const g = instance(lib, b.asset); scene.add(g); return { ...b, g }; });
  function updateMovers(dt, tt) {
    for (const b of balloons) { b.g.position.y = b.y + Math.sin(tt * 0.3 + b.ph) * 1.4; b.g.position.x = b.x + Math.sin(tt * 0.04 + b.ph) * 6; b.g.rotation.y = tt * 0.05 + b.ph; if (b.flame) b.flame.visible = Math.sin(tt * 2.3 + b.ph * 3) > 0.4; }
    for (const b of boats) {
      const ph = tt * b.speed * 0.012 + b.phase * Math.PI * 2, u = (Math.sin(ph) + 1) / 2, dir = Math.cos(ph) > 0 ? 1 : -1;
      if (b.axis === 'nile') {
        const z = b.z0 + (b.z1 - b.z0) * u, x = NILE_X(z), x2 = NILE_X(z + 0.5);
        b.g.position.set(x, WATER_Y - 0.12 + Math.sin(tt * 1.4 + b.phase * 9) * 0.05, z);
        b.g.rotation.y = Math.atan2(-0.5 * dir, (x2 - x) * dir); b.g.rotation.z = Math.sin(tt * 1.1 + b.phase * 5) * 0.03;
      } else {
        const x = b.x0 + (b.x1 - b.x0) * u;
        b.g.position.set(x, WATER_Y - 0.2 + Math.sin(tt * 1.2) * 0.04, HUANGPU(x)); b.g.rotation.y = dir > 0 ? 0 : Math.PI;
      }
    }
  }

  /* ---------- knockable props ---------- */
  const dyn = [];
  for (const [kind, x, z, ry, layer] of dynamicProps()) {
    const g = instance(lib, kind); scene.add(g);
    const gy = sample(x, z);
    let body;
    if (kind === 'haybale') body = physics.dynamic({ type: 'roundcyl', hh: 0.49, r: 0.56, b: 0.06, rot: { x: Math.SQRT1_2, y: 0, z: 0, w: Math.SQRT1_2 } }, { x, y: gy + 0.64 + layer * 1.07, z, ry, mass: 1.2, friction: 0.8, restitution: 0.05 });
    else if (kind === 'haybale_sq') body = physics.dynamic({ type: 'box', hx: 0.55, hy: 0.23, hz: 0.28 }, { x, y: gy + 0.25, z, ry, mass: 0.8, friction: 0.8 });
    else if (kind === 'cone') { body = physics.dynamic({ type: 'cone', hh: 0.37, r: 0.3 }, { x, y: gy + 0.39, z, ry, mass: 0.15, restitution: 0.3 }); g.children.forEach((m) => { m.position.y = -0.37; }); }
    else body = physics.dynamic({ type: 'box', hx: 0.4, hy: 0.4, hz: 0.4 }, { x, y: gy + 0.41 + layer * 0.81, z, ry, mass: 0.5 });
    dyn.push({ g, body });
  }
  const syncOne = (d) => { const p = d.body.translation(), q = d.body.rotation(); d.g.position.set(p.x, p.y, p.z); d.g.quaternion.set(q.x, q.y, q.z, q.w); };
  dyn.forEach(syncOne);

  let trailI = 0;
  return {
    terrain, water, waterMat, grassU, glow, trees, htex,
    pressGrass(x, z, tt) { grassU.trail.value[trailI = (trailI + 1) % TRAIL].set(x, tt, z, 0); },
    update(dt, tt, ctx) {
      WIND.t.value = tt; WIND.car.value.copy(ctx.carPos);
      for (let i = 0; i < TRAIL; i++) { const v = grassU.trail.value[i]; v.w = Math.min(1, Math.max(0, (tt - v.y) / 7)); }
      waterMat.uniforms.t.value = tt; waterMat.uniforms.car.value.copy(ctx.carPos);
      hitTrees(ctx.carPos, ctx.speed, ctx.onShake);
      updateShaking(dt);
      kickLeaves(ctx.carPos, ctx.vel, ctx.speed, dt);
      updateFall(dt, tt, ctx.focus);
      updateAnimals(dt, tt, ctx.carPos);
      updateMovers(dt, tt);
      for (const d of dyn) if (!d.body.isSleeping()) syncOne(d);
    },
  };
}
