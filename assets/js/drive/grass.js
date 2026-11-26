/* ==========================================================================
   Drive — dense grass around the car. A fixed set of blades tiles the world
   (each blade wraps around a 2R window that follows the camera), so wherever
   you drive the ground near you is thick with grass, and far away it's just
   the ground colour under the fog. Where grass grows, how tall and what
   colour comes from a mask baked from the biomes, the roads and the stops.
   Blades sway in rolling gusts, part around the car, lie down where the tyres
   went, and take snow on their tips.
   ========================================================================== */
import * as THREE from '../../vendor/three.min.js';
import { CLOUD_GLSL, AIR } from './light.js';
import { ENV } from './materials.js';
import { SIZE_X, SIZE_Z, NX, NZ, X0, Z0, PLACES, START, biomeAt, fbm, smooth } from './terrain.js';

const GRASS = {   // hue, saturation, lightness, height
  meadow: [0.25, 0.45, 0.38, 1.0], autumn: [0.13, 0.42, 0.45, 0.85], plane: [0.24, 0.42, 0.36, 0.9],
  coast: [0.26, 0.38, 0.4, 0.55], field: [0.12, 0.5, 0.55, 0.7], danxia: [0.1, 0.3, 0.5, 0.45], desert: [0.12, 0.25, 0.55, 0.35],
};

export function buildGrass(scene, grid, { coarse = false, free = () => true } = {}) {
  const R = coarse ? 20 : 27, COUNT = coarse ? 30000 : 78000, TRAIL = 48;
  // mask: R density, G hue, B lightness, A height
  const MW = SIZE_X * 2, MH = SIZE_Z * 2, mask = new Uint8Array(MW * MH * 4);
  const c = new THREE.Color();
  for (let j = 0; j < MH; j++) for (let i = 0; i < MW; i++) {
    const x = X0 + (i + 0.5) / 2, z = Z0 + (j + 0.5) / 2, o = (j * MW + i) * 4;
    const h = grid.sample(x, z);
    if (h < 0.05 || h > 6.2 || grid.road(x, z) < 2.3 || grid.slope(x, z) > 0.6 || !free(x, z)) continue;
    let near = false; for (const k in PLACES) if (Math.hypot(x - PLACES[k].x, z - PLACES[k].z) < 7.2) near = true;
    if (near || Math.hypot(x - START.x, z - START.z) < 4) continue;
    const w = biomeAt(x, z);
    let hue = 0, sat = 0, lit = 0, ht = 0, dens = 0;
    for (const b in w) { const g = GRASS[b]; if (!g) continue; hue += g[0] * w[b]; sat += g[1] * w[b]; lit += g[2] * w[b]; ht += g[3] * w[b]; }
    dens = (w.meadow || 0) + (w.autumn || 0) * 0.9 + (w.plane || 0) * 0.85 + (w.coast || 0) * 0.7 + (w.field || 0) * 0.95 + (w.danxia || 0) * 0.12 + (w.desert || 0) * 0.05;
    const patch = smooth(0.3, 0.6, fbm(x * 0.08, z * 0.08));
    dens *= 0.35 + 0.65 * patch;
    dens *= smooth(2.3, 3.6, grid.road(x, z));
    mask[o] = Math.round(Math.min(1, dens) * 255);
    mask[o + 1] = Math.round(Math.min(1, hue / 0.4) * 255);
    mask[o + 2] = Math.round(Math.min(1, lit) * 255);
    mask[o + 3] = Math.round(Math.min(1, ht * (0.75 + fbm(x * 0.2 + 7, z * 0.2) * 0.5)) * 255);
  }
  const maskTex = new THREE.DataTexture(mask, MW, MH); maskTex.magFilter = maskTex.minFilter = THREE.LinearFilter; maskTex.needsUpdate = true;
  const hdata = new Uint16Array((NX + 1) * (NZ + 1));
  for (let k = 0; k < grid.H.length; k++) hdata[k] = THREE.DataUtils.toHalfFloat(grid.H[k]);
  const hTex = new THREE.DataTexture(hdata, NX + 1, NZ + 1, THREE.RedFormat, THREE.HalfFloatType); hTex.magFilter = hTex.minFilter = THREE.LinearFilter; hTex.needsUpdate = true;

  // one blade: three segments, tapering, slightly cupped
  const seg = [[0, 0.045], [0.35, 0.04], [0.7, 0.026], [1, 0]];
  const pos = [], idx = [];
  seg.forEach(([y, w], s) => { if (w > 0) { pos.push(-w, y, 0, w, y, 0.012); } else pos.push(0, y, 0.01); });
  for (let s = 0; s < 2; s++) { const a = s * 2; idx.push(a, a + 1, a + 2, a + 2, a + 1, a + 3); }
  idx.push(4, 5, 6);
  const geo = new THREE.InstancedBufferGeometry();
  geo.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3)); geo.setIndex(idx);
  const off = new Float32Array(COUNT * 4);
  for (let i = 0; i < COUNT; i++) { off[i * 4] = (Math.random() * 2 - 1) * R; off[i * 4 + 1] = (Math.random() * 2 - 1) * R; off[i * 4 + 2] = Math.random(); off[i * 4 + 3] = Math.random() * Math.PI * 2; }
  geo.setAttribute('aOff', new THREE.InstancedBufferAttribute(off, 4));
  geo.instanceCount = COUNT;

  const U = {
    center: { value: new THREE.Vector3() }, R: { value: R }, maskTex: { value: maskTex }, hTex: { value: hTex },
    t: ENV.time, wind: ENV.windS, car: ENV.car, snow: ENV.snow, wet: ENV.wet,
    trail: { value: Array.from({ length: TRAIL }, () => new THREE.Vector4(0, -99, 0, 1)) },
    light: { value: new THREE.Color(1, 1, 1) }, sunDir: { value: new THREE.Vector3(0, 1, 0) }, sunCol: { value: new THREE.Color(1, 1, 1) },
  };
  const mat = new THREE.ShaderMaterial({
    uniforms: Object.assign(THREE.UniformsUtils.merge([THREE.UniformsLib.fog, THREE.UniformsLib.lights]), U, AIR, { dSun: ENV.sun, cCover: ENV.cloud, cOff: ENV.cloudOff }),
    side: THREE.DoubleSide, fog: true, lights: true,
    vertexShader: `#include <common>
      #include <fog_pars_vertex>
      #include <shadowmap_pars_vertex>
      varying vec3 vW;
      uniform vec3 center, car; uniform float R, t, wind, snow; uniform sampler2D maskTex, hTex; uniform vec4 trail[${TRAIL}];
      attribute vec4 aOff; varying float vY; varying vec3 vC; varying float vSnow; varying float vFace;
      float gH2(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
      float gN2(vec2 p){ vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f); return mix(mix(gH2(i), gH2(i + vec2(1, 0)), f.x), mix(gH2(i + vec2(0, 1)), gH2(i + vec2(1, 1)), f.x), f.y); }
      vec3 hsl2rgb(vec3 c){ vec3 rgb = clamp(abs(mod(c.x * 6.0 + vec3(0.0, 4.0, 2.0), 6.0) - 3.0) - 1.0, 0.0, 1.0); return c.z + c.y * (rgb - 0.5) * (1.0 - abs(2.0 * c.z - 1.0)); }
      void main(){
        vec2 wp = mod(aOff.xy - center.xz + R, 2.0 * R) - R + center.xz;
        vec2 uv = vec2((wp.x - ${X0.toFixed(1)}) / ${SIZE_X.toFixed(1)}, (wp.y - ${Z0.toFixed(1)}) / ${SIZE_Z.toFixed(1)});
        vec4 m = texture2D(maskTex, uv);
        float edge = 1.0 - smoothstep(R * 0.7, R, length(wp - center.xz));
        float dens = m.r;
        float clump = gN2(wp * 0.45) * 0.7 + gN2(wp * 1.7) * 0.3;   // tufts and thin patches, not an even lawn
        float h = (0.2 + aOff.z * 0.55) * m.a * 1.15 * edge * step(aOff.z, dens * (0.6 + clump * 0.7)) * (1.0 - snow * 0.55) * (0.55 + clump * 0.9);
        vec2 huv = uv * vec2(${(NX / (NX + 1)).toFixed(5)}, ${(NZ / (NZ + 1)).toFixed(5)}) + vec2(${(0.5 / (NX + 1)).toFixed(5)}, ${(0.5 / (NZ + 1)).toFixed(5)});
        float gy = texture2D(hTex, huv).r;
        vec3 p = position; vY = p.y;
        float s = sin(aOff.w), c = cos(aOff.w);
        vec3 lp = vec3(p.x * c, p.y * h, p.x * s + p.z);
        vec3 w = vec3(wp.x, gy - 0.02, wp.y) + lp;
        // gusts rolling across the field
        float g = sin(dot(wp, vec2(0.18, 0.07)) - t * 2.2) * 0.5 + 0.5;
        float sway = (sin(t * 2.1 + wp.x * 0.6 + wp.y * 0.4) * 0.35 + g * 0.9) * wind;
        w.x += sway * 0.22 * vY * vY * h; w.z += sway * 0.08 * vY * vY * h;
        // pressed by the tyres, pushed by the car
        float press = 0.0; vec2 dir = vec2(0.0);
        for (int i = 0; i < ${TRAIL}; i++) {
          vec2 d = wp - trail[i].xz; float r = length(d);
          float k = (1.0 - smoothstep(0.25, 0.9, r)) * (1.0 - trail[i].w);
          if (k > press) { press = k; dir = r > 0.001 ? d / r : vec2(1.0, 0.0); }
        }
        vec2 dc = wp - car.xz; float rc = length(dc);
        float kc = (1.0 - smoothstep(0.9, 1.9, rc)) * step(abs(gy - car.y), 2.0);
        if (kc > press) { press = kc; dir = rc > 0.001 ? dc / rc : vec2(1.0, 0.0); }
        w.xz += dir * press * vY * h * 0.85; w.y -= press * vY * h * 0.7;
        vC = hsl2rgb(vec3(m.g * 0.4 + (aOff.z - 0.5) * 0.03, 0.35 + m.b * 0.25, m.b * (0.85 + aOff.z * 0.3)));
        vC = pow(vC, vec3(2.2));
        float dry = step(0.84, fract(aOff.z * 7.31 + aOff.w * 0.37)) * (0.5 + 0.5 * (1.0 - clump));
        vC = mix(vC, vec3(0.42, 0.33, 0.16) * (0.7 + aOff.z * 0.5), dry * 0.85);   // a few dry, straw-coloured blades
        vC *= 1.0 + g * 0.15 * vY;
        vSnow = snow; vFace = c;
        vec4 worldPosition = vec4(w, 1.0); vW = w;
        vec4 mvPosition = viewMatrix * worldPosition;
        vec3 transformedNormal = normalize((viewMatrix * vec4(0.0, 1.0, 0.0, 0.0)).xyz);
        gl_Position = projectionMatrix * mvPosition;
        #include <shadowmap_vertex>
        if (h < 0.01) gl_Position = vec4(2.0, 2.0, 2.0, 1.0);
        #include <fog_vertex>
      }`,
    fragmentShader: `#include <common>
      #include <packing>
      #include <fog_pars_fragment>
      #include <bsdfs>
      #include <lights_pars_begin>
      #include <shadowmap_pars_fragment>
      #include <shadowmask_pars_fragment>
      uniform vec3 dSun;
      ${CLOUD_GLSL}
      uniform vec3 light, sunCol; uniform float wet; varying float vY; varying vec3 vC; varying float vSnow; varying float vFace; varying vec3 vW;
      void main(){
        // sky light (darker at the root, where the blades shade each other) + the sun, through tree and cloud shadow
        float sh = getShadowMask() * cloudShadow(vW, dSun);
        float yy = smoothstep(0.0, 1.0, vY);
        // the root takes the colour of the earth it grows from, so the blades come out of the ground instead of standing on it
        vec3 base = mix(vC * 0.55, vec3(0.13, 0.11, 0.075), 0.45);
        vec3 bc = mix(base, vC, smoothstep(0.0, 0.55, vY));
        vec3 c = bc * light * mix(0.32, 0.62, yy) + bc * sunCol * sh * (0.3 + 0.7 * yy) * 0.95;
        c += vC * sunCol * sh * 0.3 * smoothstep(0.6, 1.0, vY);
        c = mix(c, vec3(0.92, 0.95, 1.0) * light, vSnow * (0.35 + 0.6 * smoothstep(0.2, 1.0, vY)));
        c *= mix(light, vec3(1.0), vSnow * 0.5 * smoothstep(0.2, 1.0, vY)) * (1.0 - wet * 0.2);
        gl_FragColor = vec4(c, 1.0);
        #include <fog_fragment>
      }`,
  });
  const mesh = new THREE.Mesh(geo, mat); mesh.frustumCulled = false; mesh.receiveShadow = true; scene.add(mesh);
  let ti = 0;
  return {
    U,
    press(x, z, tt) { U.trail.value[ti = (ti + 1) % TRAIL].set(x, tt, z, 0); },
    update(tt, focus) {
      U.center.value.set(focus.x, 0, focus.z);
      for (let i = 0; i < TRAIL; i++) { const v = U.trail.value[i]; v.w = Math.min(1, Math.max(0, (tt - v.y) / 7)); }
    },
  };
}
