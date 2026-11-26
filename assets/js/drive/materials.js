/* ==========================================================================
   Drive — surface detail without textures.
   Every Blender material gets a procedural pattern by what it is — stone
   courses, brick bond, roof tiles running down the slope, window grids that
   light up at night, bark, birch, clumps of leaves, straw, fur — with a bump
   derived from the same pattern, a little ambient occlusion and grime.
   The weather lands on everything: snow settles on surfaces that face up,
   rain darkens and adds a sheen, a sandstorm dusts things over.
   Optional vertex hooks add wind sway, a push away from the car, and a
   per-instance dissolve used when a tree comes between the camera and the car.
   ========================================================================== */
import * as THREE from '../../vendor/three.min.js';
import { TEX } from './textures.js';
import { CLOUD_GLSL, SUN, CLOUD, CLOUD_OFF, AIR } from './light.js';
import { SIZE_X, SIZE_Z, NX, NZ, X0, Z0 } from './terrain.js';

export const ENV = {
  time: { value: 0 }, snow: { value: 0 }, wet: { value: 0 }, sand: { value: 0 }, night: { value: 0 },
  windS: { value: 0.6 }, sun: SUN, cloud: CLOUD, cloudOff: CLOUD_OFF, ground: { value: null }, car: { value: new THREE.Vector3(0, -99, 0) }, carR: { value: 1.7 },
};

export const KIND = {
  sandstone: 'stone', limestone: 'stone', granite: 'stone', rock: 'stone', rock_red: 'stone', hieroglyph: 'stone', bund: 'stone', bund_dark: 'stone',
  brick_grey: 'brick', brick_dark: 'brick',
  plaster: 'plaster', stupa: 'plaster', marble: 'plaster', white: 'plaster', paint_ochre: 'plaster', red: 'plaster', red_dark: 'plaster', concrete: 'plaster', sand: 'plaster',
  tile_yellow: 'tile', tile_grey: 'tile', green_tile: 'tile', gold: 'tile',
  glass_city: 'glass', glass_dark: 'glass',
  wood: 'wood', wood_dark: 'wood', crate: 'wood', rope: 'wood',
  bark: 'bark', bark_light: 'bark', bark_white: 'birch',
  fir: 'leaf', fir2: 'leaf', palm: 'leaf', palm_dark: 'leaf', ginkgo: 'leaf', ginkgo2: 'leaf', plane: 'leaf', plane2: 'leaf',
  poplar: 'leaf', bush: 'leaf', shrub: 'leaf', blossom: 'leaf', reed: 'leaf', tuft: 'leaf',
  snow: 'snowcap', hay: 'hay', hay_end: 'hay', wrap: 'plaster',
  steel: 'metal', titanium: 'metal', iron: 'metal', chrome: 'metal', verdigris: 'metal', stand: 'metal',
  yak: 'fur', camel: 'fur', cloth_red: 'fur', terrazzo: 'terrazzo',
  card_fir: 'card', card_firsnow: 'card', card_ginkgo: 'card', card_plane: 'card', card_poplar: 'card', card_blossom: 'card', card_palm: 'card', card_bush: 'card', card_shrub: 'card',
};
// real-scale textures (layer in the texture array, metres per tile across, metres per tile up); the Blender UVs are in metres
export const TEXMAP = {
  rock: [4, 2.2, 2.2], rock_red: [3, 4.5, 3.5], sandstone: [8, 3.3, 2.75], limestone: [8, 3.9, 3.0], granite: [17, 1.8, 2.0], hieroglyph: [17, 1.2, 1.2], bund: [17, 1.8, 1.8], bund_dark: [17, 1.8, 1.8],
  brick_grey: [9, 2.76, 2.8], brick_dark: [9, 2.76, 2.8],
  plaster: [10, 4, 4], white: [10, 4, 4], wrap: [10, 2, 2], red: [19, 3, 3], red_dark: [19, 3, 3], paint_ochre: [19, 3, 3], stupa: [19, 3, 3], sand: [19, 3, 3],
  marble: [13, 3, 3], concrete: [14, 4, 4],
  tile_yellow: [11, 2.1, 2.04], tile_grey: [11, 2.1, 2.04], green_tile: [11, 2.1, 2.04],
  glass_city: [15, 4.8, 6.0], glass_dark: [15, 4.8, 6.0],
  wood: [12, 1.2, 1.2], wood_dark: [12, 1.2, 1.2], crate: [12, 0.8, 0.8],
  bark: [16, 0.9, 1.6], bark_light: [16, 0.9, 1.6],
  hay: [18, 1.2, 1.2], hay_end: [18, 0.8, 0.8],
};
// block sizes (length, course height) for masonry
const BLOCK = { sandstone: [1.1, 0.55], limestone: [1.3, 0.6], granite: [0.9, 0.5], hieroglyph: [0.5, 0.35], bund: [0.9, 0.45], bund_dark: [0.9, 0.45], brick_grey: [0.46, 0.2], brick_dark: [0.46, 0.2] };

const COMMON = /* glsl */`
  uniform float dTime, dSnow, dWet, dSand, dNight; uniform vec3 dSun;
  varying vec3 vDW; varying vec3 vDN; varying vec3 vDL; varying vec3 vDR;
  float dH(vec3 p){ p = fract(p * 0.3183099 + 0.1); p *= 17.0; return fract(p.x * p.y * p.z * (p.x + p.y + p.z)); }
  float dN(vec3 x){ vec3 i = floor(x), f = fract(x); f = f * f * (3.0 - 2.0 * f);
    return mix(mix(mix(dH(i), dH(i + vec3(1,0,0)), f.x), mix(dH(i + vec3(0,1,0)), dH(i + vec3(1,1,0)), f.x), f.y),
               mix(mix(dH(i + vec3(0,0,1)), dH(i + vec3(1,0,1)), f.x), mix(dH(i + vec3(0,1,1)), dH(i + vec3(1,1,1)), f.x), f.y), f.z); }
  float dF(vec3 p){ return dN(p) * 0.5 + dN(p * 2.03) * 0.25 + dN(p * 4.1) * 0.125 + dN(p * 8.3) * 0.0625; }
  vec2 dPlane(vec3 p, vec3 n){ vec3 a = abs(n); return a.y > 0.7 ? p.xz : (a.x > a.z ? p.zy : p.xy); }
  vec3 dPerturb(vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection){
    vec3 vSigmaX = normalize(dFdx(surf_pos)); vec3 vSigmaY = normalize(dFdy(surf_pos));
    vec3 R1 = cross(vSigmaY, surf_norm); vec3 R2 = cross(surf_norm, vSigmaX);
    float fDet = dot(vSigmaX, R1) * faceDirection;
    vec3 vGrad = sign(fDet) * (dHdxy.x * R1 + dHdxy.y * R2);
    return normalize(abs(fDet) * surf_norm - vGrad);
  }
  float dHt = 0.0; float dLit = 0.0; float dRough = -1.0; vec3 dTN = vec3(0.0, 0.0, 1.0); float dUseTN = 0.0;
  uniform highp sampler2DArray tAlb, tNor; varying vec2 vTU;
  uniform sampler2D tGround; vec3 dRoom = vec3(0.0);
  float groundAt(vec2 xz){
    vec2 uv = vec2((xz.x - ${X0.toFixed(1)}) / ${SIZE_X.toFixed(1)}, (xz.y - ${Z0.toFixed(1)}) / ${SIZE_Z.toFixed(1)});
    uv = uv * vec2(${(NX / (NX + 1)).toFixed(5)}, ${(NZ / (NZ + 1)).toFixed(5)}) + vec2(${(0.5 / (NX + 1)).toFixed(5)}, ${(0.5 / (NZ + 1)).toFixed(5)});
    return texture(tGround, uv).r;
  }
  // a room behind the glass (interior mapping): the ray from the eye continues into a box behind each pane
  vec3 dInterior(vec3 P, vec3 N, vec2 uvm, vec2 cell, float depth, float seed){
    vec3 V = normalize(P - cameraPosition);
    vec3 dp1 = dFdx(P), dp2 = dFdy(P); vec2 du1 = dFdx(uvm), du2 = dFdy(uvm);
    vec3 T = dp1 * du2.y - dp2 * du1.y, B = dp2 * du1.x - dp1 * du2.x;
    float lt = length(T), lb = length(B); if (lt < 1e-6 || lb < 1e-6) return vec3(0.05);
    T /= lt; B /= lb;
    vec3 rd = vec3(dot(V, T) / cell.x, dot(V, B) / cell.y, max(dot(V, -N), 0.02) / depth);
    vec2 cu = uvm / cell; vec2 id = floor(cu); vec3 ro = vec3(fract(cu), 0.0);
    vec3 tx = vec3((step(0.0, rd.x) - ro.x) / rd.x, (step(0.0, rd.y) - ro.y) / rd.y, (1.0 - ro.z) / rd.z);
    float t = min(min(tx.x, tx.y), tx.z); vec3 hp = ro + rd * t;
    float r = dH(vec3(id, seed)), r2 = dH(vec3(id, seed + 3.0));
    vec3 wall = mix(vec3(0.62, 0.55, 0.46), vec3(0.52, 0.56, 0.58), r);
    vec3 c;
    if (t == tx.z) { c = wall * 0.85; c *= 1.0 - 0.25 * smoothstep(0.3, 0.0, abs(hp.x - 0.5) - 0.2); c = mix(c, vec3(0.35, 0.3, 0.26), step(0.75, r2) * step(hp.y, 0.55) * step(0.25, hp.x) * step(hp.x, 0.6)); }
    else if (t == tx.y) c = rd.y > 0.0 ? vec3(0.32, 0.25, 0.19) * (0.8 + 0.4 * r2) : vec3(0.78, 0.76, 0.72);
    else c = wall;
    c *= mix(1.0, 0.45, hp.z);                       // darker deeper in the room
    c *= 0.55 + 0.45 * smoothstep(0.0, 0.5, 1.0 - hp.z);
    float blind = step(0.55, r2) * step(fract(cu.y), 0.28 + r * 0.3);     // half-drawn blinds
    return mix(c, vec3(0.82, 0.8, 0.74), blind * 0.9);
  }
`;

const v3 = (c) => `vec3(${c.map((x) => x.toFixed(4)).join(', ')})`;
function textured(kind, name, T) {
  const [L, SX, SY] = T, mean = TEX.mean[L];
  return `{
    vec2 tu = vTU / vec2(${SX.toFixed(2)}, ${SY.toFixed(2)});
    vec3 ta = texture(tAlb, vec3(tu, ${L}.0)).rgb;
    // a second, larger and rotated sample breaks up the repeat on big walls
    vec3 tb = texture(tAlb, vec3(mat2(0.8, -0.6, 0.6, 0.8) * tu * 0.29 + 0.37, ${L}.0)).rgb;
    vec3 detail = ta / ${v3(mean)};
    float macro = 0.88 + 0.24 * dF(vDW * 0.21) + (dot(tb, vec3(0.333)) / ${(mean.reduce((a, b) => a + b) / 3).toFixed(4)} - 1.0) * 0.18;
    col *= clamp(detail, 0.0, 2.2) * macro;
    dTN = texture(tNor, vec3(tu, ${L}.0)).xyz * 2.0 - 1.0; dUseTN = 1.0;
    // weathering: grime (and moss away from the desert) in the first metre above the ground, rain streaks down the walls
    float nn = dF(vDW * 1.7);
    float above = vDW.y - groundAt(vDW.xz);
    float base = (1.0 - smoothstep(0.0, 0.9 + nn * 0.5, above)) * step(-0.5, above);
    col *= 1.0 - base * (0.22 + nn * 0.18);
    float moss = smoothstep(-48.0, -36.0, vDW.x) * smoothstep(0.45, 0.75, nn) * base;
    col = mix(col, col * vec3(0.62, 0.78, 0.48), moss * 0.8);
    float vert = 1.0 - smoothstep(0.5, 0.8, abs(vDN.y));
    float streak = smoothstep(0.5, 0.95, dN(vec3((vDW.x + vDW.z) * 2.7, vDW.y * 0.22, 5.0))) * smoothstep(0.2, 0.7, dN(vec3((vDW.x + vDW.z) * 0.4, vDW.y * 0.6, 9.0)));
    col *= 1.0 - streak * 0.16 * vert;
    // roughness mottled like real stone and plaster (0.75–0.95), smoother where it's worn
    dRough = clamp(0.84 + (nn - 0.5) * 0.28 + base * 0.06 - streak * 0.06, 0.7, 0.97);
    ${kind === 'glass' ? `{ vec2 cell = floor(tu * vec2(4.0, 5.0)); float frame = step(0.8, dot(ta, vec3(0.333)));
      dLit = (1.0 - frame) * step(0.5, dH(vec3(cell, ${L}.0 + floor(vDW.x * 0.1))));
      dRoom = dInterior(vDW, normalize(vDN), vTU, vec2(${(SX / 4).toFixed(2)}, ${(SY / 5).toFixed(2)}), 1.6, ${L}.0) * (1.0 - frame);
      col = mix(vec3(0.015), col, frame); dRough = mix(0.04, 0.4, frame); }` : ''}
    ${kind === 'tile' ? 'dRough = 0.55 + (nn - 0.5) * 0.2;' : ''}
  }`;
}

function pattern(kind, name) {
  const [BL, BH] = BLOCK[name] || [1, 0.5];
  switch (kind) {
    case 'stone': case 'brick': return `{
      vec2 uv = dPlane(vDW, vDN) / vec2(${BL.toFixed(2)}, ${BH.toFixed(2)});
      float row = floor(uv.y); uv.x += mod(row, 2.0) * 0.5 + dH(vec3(row, 3.0, 1.0)) * 0.3;
      vec2 cell = floor(uv), f = fract(uv);
      float m = min(min(f.x, 1.0 - f.x) * ${BL.toFixed(2)}, min(f.y, 1.0 - f.y) * ${BH.toFixed(2)});
      float top = step(0.7, abs(vDN.y));
      float mortar = (1.0 - smoothstep(0.01, ${kind === 'brick' ? '0.025' : '0.04'}, m)) * (1.0 - top * 0.6);
      float tint = dH(vec3(cell, 7.0));
      float grain = dF(vDW * 3.0);
      col *= mix(0.9 + tint * 0.16, 0.6, mortar) * (0.9 + grain * 0.2);
      col *= mix(0.82, 1.0, smoothstep(0.0, 1.4, vDL.y));
      dHt = (1.0 - mortar) * 0.8 + grain * 0.25 + smoothstep(0.0, 0.06, m) * 0.2;
    }`;
    case 'plaster': return `{
      float g = dF(vDW * 1.4);
      col *= 0.9 + g * 0.18;
      float streak = smoothstep(0.62, 1.0, dN(vec3(vDW.x * 7.0 + vDW.z * 7.0, vDW.y * 0.35, 0.0)));
      col *= 1.0 - streak * 0.08 * (1.0 - abs(vDN.y));
      col *= mix(0.76, 1.0, smoothstep(0.0, 1.1, vDL.y));
      dHt = dF(vDW * 9.0) * 0.35;
    }`;
    case 'terrazzo': return `{
      vec3 q = floor(vDW * 26.0); float r = dH(q);
      vec3 chip = mix(vec3(0.55, 0.52, 0.48), vec3(0.95, 0.93, 0.9), dH(q + 3.0));
      col = mix(col, col * chip * 1.25, step(0.9, r) * 0.6);
      col *= 0.95 + dF(vDW * 2.0) * 0.08;
      dHt = 0.0; dRough = 0.32;
    }`;
    case 'tile': return `{
      if (vDN.y > 0.2 && vDN.y < 0.985) {
        vec2 d = normalize(vDN.xz);
        float along = dot(vDW.xz, vec2(-d.y, d.x));
        float down = dot(vDW.xz, d) - vDW.y * 0.6;
        float ridge = abs(fract(along / 0.26) - 0.5) * 2.0;
        float course = fract(down / 0.34);
        float lip = smoothstep(0.82, 1.0, course);
        col *= mix(1.12, 0.66, ridge * ridge) * (1.0 - lip * 0.25) * (0.94 + dH(vec3(floor(along / 0.26), floor(down / 0.34), 1.0)) * 0.12);
        dHt = (1.0 - ridge * ridge) * 0.9 - lip * 0.4;
      } else { col *= 0.92 + dF(vDW * 3.0) * 0.14; dHt = dF(vDW * 7.0) * 0.2; }
    }`;
    case 'glass': return `{
      float vert = 1.0 - step(0.7, abs(vDN.y));
      vec2 uv = dPlane(vDW, vDN) / vec2(1.05, 1.2);
      vec2 f = fract(uv); vec2 cell = floor(uv);
      float frame = max(1.0 - step(0.07, f.x) * step(f.x, 0.93), 1.0 - step(0.1, f.y) * step(f.y, 0.9)) * vert;
      float sky = smoothstep(-0.2, 1.0, dN(vec3(cell * 0.21, 0.0)));
      col = mix(col * (0.75 + sky * 0.45), vec3(0.62, 0.66, 0.7), frame);
      dLit = (1.0 - frame) * vert * step(0.52, dH(vec3(cell, 11.0)));
      dHt = frame * 0.6; dRough = mix(0.08, 0.5, frame);
    }`;
    case 'wood': return `{
      float g = dN(vec3(vDW.x * 1.2, vDW.y * 14.0, vDW.z * 1.2)) * 0.6 + dN(vec3(vDW.x * 14.0, vDW.y * 1.2, vDW.z * 14.0)) * 0.4;
      col *= 0.82 + g * 0.3; dHt = g * 0.5;
    }`;
    case 'bark': return `{
      float g = dN(vec3(vDW.x * 9.0, vDW.y * 1.4, vDW.z * 9.0));
      float cracks = smoothstep(0.55, 0.85, g);
      col *= 0.7 + (1.0 - cracks) * 0.4 + dF(vDW * 5.0) * 0.1;
      dHt = 1.0 - cracks;
    }`;
    case 'birch': return `{
      float d = step(0.78, dN(vec3(vDW.x * 7.0, vDW.y * 9.0, vDW.z * 7.0)));
      col *= (1.0 - d * 0.62) * (0.92 + dF(vDW * 4.0) * 0.12); dHt = 1.0 - d;
    }`;
    case 'leaf': return `{
      float n = dF(vDW * 2.3 + vDR * 0.37);
      float r = dH(floor(vDR * 3.7));
      col *= 0.66 + n * 0.62;
      col *= vec3(1.0 + (r - 0.5) * 0.14, 1.0 + (r - 0.5) * 0.05, 1.0 - (r - 0.5) * 0.12);
      col *= mix(0.6, 1.06, smoothstep(-0.7, 0.85, vDN.y));
      dHt = n * 1.2;
    }`;
    case 'card': return `{
      float r = dH(floor(vDR * 3.7));
      col *= vec3(1.0 + (r - 0.5) * 0.16, 1.0 + (r - 0.5) * 0.06, 1.0 - (r - 0.5) * 0.12);
      ${name === 'card_firsnow' ? 'col = mix(col, vec3(0.93, 0.95, 0.99), smoothstep(0.15, 0.6, vDN.y + (dF(vDW * 2.5) - 0.5) * 0.5) * 0.9);' : ''}
      dHt = 0.0;
    }`;
    case 'snowcap': return `{ col *= 0.95 + dF(vDW * 3.0) * 0.08; dHt = dF(vDW * 4.0) * 0.4; }`;
    case 'hay': return `{
      float s = dN(vec3(vDW.x * 22.0, vDW.y * 22.0, vDW.z * 3.0)) * 0.5 + dN(vec3(vDW.x * 3.0, vDW.y * 22.0, vDW.z * 22.0)) * 0.5;
      col *= 0.8 + s * 0.35; dHt = s * 0.8;
    }`;
    case 'metal': return `{ col *= 0.9 + dN(vec3(vDW.x * 40.0, vDW.y * 1.2, vDW.z * 40.0)) * 0.14; dHt = 0.0; }`;
    case 'fur': return `{ float s = dF(vDW * 14.0); col *= 0.78 + s * 0.35; dHt = s * 0.8; }`;
    default: return `{ col *= 0.94 + dF(vDW * 2.0) * 0.1; }`;
  }
}

/**
 * Add surface detail (and optionally wind / car push / dissolve) to a material.
 * opts: { kind, name, bump, wind: { bend, rigid, push }, fade }
 */
export function enhance(mat, { kind, name = mat.name, bump = 0.5, wind = null, fade = false, tex = true } = {}) {
  const k = kind || KIND[name];
  const T = tex && TEX.ready ? TEXMAP[name] : null;
  if (!k && !wind) return mat;
  const prev = mat.onBeforeCompile;
  mat.onBeforeCompile = (sh, r) => {
    prev?.call(mat, sh, r);
    Object.assign(sh.uniforms, AIR, { tGround: ENV.ground, cCover: ENV.cloud, cOff: ENV.cloudOff, tAlb: TEX.alb, tNor: TEX.nor, dSun: ENV.sun, dTime: ENV.time, dSnow: ENV.snow, dWet: ENV.wet, dSand: ENV.sand, dNight: ENV.night, wS: ENV.windS, wCar: ENV.car, wCarR: ENV.carR });
    let vs = sh.vertexShader, fs = sh.fragmentShader;
    vs = vs.replace('#include <common>', `#include <common>
      uniform float dTime, wS, wCarR; uniform vec3 wCar;
      varying vec3 vDW; varying vec3 vDN; varying vec3 vDL; varying vec3 vDR; varying vec2 vTU;
      ${fade ? 'attribute float aFade; varying float vFade;' : ''}`);
    if (wind) {
      vs = vs.replace('#include <begin_vertex>', `#include <begin_vertex>
        #ifdef USE_INSTANCING
          vec3 wRoot = vec3(instanceMatrix[3][0], instanceMatrix[3][1], instanceMatrix[3][2]);
        #else
          vec3 wRoot = vec3(0.0);
        #endif
        float wH = max(0.0, transformed.y - ${wind.rigid.toFixed(2)});
        float wPh = wRoot.x * 0.21 + wRoot.z * 0.17;
        float wGust = 0.6 + 0.8 * sin(dTime * 0.7 + wRoot.x * 0.05 - wRoot.z * 0.03);
        float wSw = (sin(dTime * 1.7 + wPh) + 0.4 * sin(dTime * 3.9 + wPh * 2.3)) * wS * wGust;
        transformed.x += wSw * ${wind.bend.toFixed(3)} * wH * wH;
        transformed.z += cos(dTime * 1.3 + wPh) * wS * wGust * ${(wind.bend * 0.5).toFixed(3)} * wH * wH;
        ${wind.flutter ? `{ float fl = sin(dTime * 7.3 + dot(transformed, vec3(3.1, 2.3, 4.7)) + wPh) * ${wind.flutter.toFixed(3)} * wS * (0.4 + wGust);
          transformed += normal * fl * smoothstep(0.0, 0.5, transformed.y); }` : ''}
        ${wind.push ? `{ vec2 wd = wRoot.xz - wCar.xz; float wl = length(wd);
          float wk = (1.0 - smoothstep(wCarR * 0.4, wCarR, wl)) * step(abs(wRoot.y - wCar.y), 2.5);
          vec2 wdir = wl > 0.001 ? wd / wl : vec2(1.0, 0.0);
          transformed.xz += wdir * wk * ${wind.push.toFixed(2)} * transformed.y; transformed.y *= 1.0 - wk * 0.45; }` : ''}`);
    }
    vs = vs.replace('#include <project_vertex>', `#include <project_vertex>
      { vec4 dw = vec4(transformed, 1.0); vec3 dn = objectNormal; vec3 dr = vec3(0.0);
        #ifdef USE_INSTANCING
          dw = instanceMatrix * dw; dn = mat3(instanceMatrix) * dn; dr = instanceMatrix[3].xyz;
        #endif
        vTU = uv; dw = modelMatrix * dw; vDW = dw.xyz; vDN = normalize(mat3(modelMatrix) * dn); vDL = transformed; vDR = (modelMatrix * vec4(dr, 1.0)).xyz;
        ${fade ? 'vFade = aFade;' : ''} }`);
    fs = fs.replace('#include <common>', `#include <common>
      ${COMMON}
      ${CLOUD_GLSL}
      ${fade ? 'varying float vFade;' : ''}`);
    fs = fs.replace('#include <clipping_planes_fragment>', `#include <clipping_planes_fragment>
      ${fade ? `if (vFade > 0.001) { float ign = fract(52.9829189 * fract(dot(gl_FragCoord.xy, vec2(0.06711056, 0.00583715)))); if (ign < vFade) discard; }` : ''}`);
    fs = fs.replace('#include <color_fragment>', `#include <color_fragment>
      { vec3 col = diffuseColor.rgb;
        ${T ? textured(k, name, T) : k ? pattern(k, name) : ''}
        // weather on every surface
        float up = smoothstep(0.35, 0.85, vDN.y + (dF(vDW * 1.3) - 0.5) * 0.45);
        col = mix(col, vec3(0.93, 0.95, 1.0), dSnow * up);
        col *= 1.0 - dWet * 0.26;
        col = mix(col, vec3(0.78, 0.6, 0.4), dSand * 0.22 * smoothstep(-0.2, 0.7, vDN.y));
        diffuseColor.rgb = col; }`);
    fs = fs.replace('#include <lights_fragment_end>', `#include <lights_fragment_end>
      { float cs = cloudShadow(vDW, dSun); reflectedLight.directDiffuse *= cs; reflectedLight.directSpecular *= cs; }`);
    fs = fs.replace('#include <roughnessmap_fragment>', `#include <roughnessmap_fragment>
      if (dRough >= 0.0) roughnessFactor = dRough;
      roughnessFactor = mix(roughnessFactor, mix(0.42, 0.16, smoothstep(0.4, 0.95, vDN.y)), dWet);   // wet: glossy tops, sheen running down the walls`);
    fs = fs.replace('#include <normal_fragment_maps>', `#include <normal_fragment_maps>
      if (dUseTN > 0.5) {
        // tangent frame from the metre-scale UVs (as three does for normal maps); green flipped for glTF UVs
        vec3 q0 = dFdx(-vViewPosition), q1 = dFdy(-vViewPosition); vec2 st0 = dFdx(vTU), st1 = dFdy(vTU);
        vec3 q1p = cross(q1, normal), q0p = cross(normal, q0);
        vec3 T = q1p * st0.x + q0p * st1.x, B = q1p * st0.y + q0p * st1.y;
        float det = max(dot(T, T), dot(B, B)); float sc = det == 0.0 ? 0.0 : faceDirection * inversesqrt(det);
        vec3 tn = vec3(dTN.xy * ${(bump * 2).toFixed(2)} * vec2(1.0, -1.0), dTN.z);
        normal = normalize(T * (tn.x * sc) + B * (tn.y * sc) + normal * tn.z);
      } else normal = dPerturb(-vViewPosition, normal, vec2(dFdx(dHt), dFdy(dHt)) * ${bump.toFixed(2)}, faceDirection);`);
    if (k === 'glass' || T?.[0] === 15) fs = fs.replace('#include <emissivemap_fragment>', '#include <emissivemap_fragment>\n totalEmissiveRadiance *= dLit; totalEmissiveRadiance += dRoom * (0.32 * (1.0 - dNight) + 0.06) + dRoom * dLit * dNight * vec3(1.6, 1.25, 0.8);');
    if (k === 'card') fs = fs.replace('#include <alphatest_fragment>', `
      #ifdef USE_MAP
      { // keep the leaves solid as the card shrinks: mip levels average the alpha down, so scale it back up with the level
        vec2 dx = dFdx(vMapUv * 512.0), dy = dFdy(vMapUv * 512.0);
        float lod = max(0.0, 0.5 * log2(max(dot(dx, dx), dot(dy, dy))));
        diffuseColor.a = clamp(diffuseColor.a * (1.0 + lod * 0.32), 0.0, 1.0); }
      #endif
      #include <alphatest_fragment>`);
    if (k === 'leaf' || k === 'card') fs = fs.replace('#include <emissivemap_fragment>', `#include <emissivemap_fragment>
      { vec3 vd = normalize(vViewPosition); float rim = pow(1.0 - abs(dot(normal, vd)), 3.0);
        // light through the leaves when looking toward the sun
        float tr = pow(max(0.0, dot(normalize(vDW - cameraPosition), dSun)), 5.0);
        totalEmissiveRadiance += diffuseColor.rgb * (rim * ${k === 'card' ? '0.12' : '0.22'} + tr * ${k === 'card' ? '0.9' : '0.35'} + ${k === 'card' ? '0.07' : '0.0'}) * (1.0 - dNight); }`);
    sh.vertexShader = vs; sh.fragmentShader = fs;
  };
  const key = `${k}|${name}|${T ? 't' : ''}|${bump}|${wind ? `${wind.bend}${wind.rigid}${wind.push || 0}${wind.flutter || 0}` : ''}|${fade}`;
  mat.customProgramCacheKey = () => key;
  mat.needsUpdate = true;
  return mat;
}
