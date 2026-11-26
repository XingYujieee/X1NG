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

export const ENV = {
  time: { value: 0 }, snow: { value: 0 }, wet: { value: 0 }, sand: { value: 0 }, night: { value: 0 },
  windS: { value: 0.6 }, car: { value: new THREE.Vector3(0, -99, 0) }, carR: { value: 1.7 },
};

export const KIND = {
  sandstone: 'stone', limestone: 'stone', granite: 'stone', hieroglyph: 'stone', bund: 'stone', bund_dark: 'stone',
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
};
// block sizes (length, course height) for masonry
const BLOCK = { sandstone: [1.1, 0.55], limestone: [1.3, 0.6], granite: [0.9, 0.5], hieroglyph: [0.5, 0.35], bund: [0.9, 0.45], bund_dark: [0.9, 0.45], brick_grey: [0.46, 0.2], brick_dark: [0.46, 0.2] };

const COMMON = /* glsl */`
  uniform float dTime, dSnow, dWet, dSand, dNight;
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
  float dHt = 0.0; float dLit = 0.0; float dRough = -1.0;
`;

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
export function enhance(mat, { kind, name = mat.name, bump = 0.5, wind = null, fade = false } = {}) {
  const k = kind || KIND[name];
  if (!k && !wind) return mat;
  const prev = mat.onBeforeCompile;
  mat.onBeforeCompile = (sh, r) => {
    prev?.call(mat, sh, r);
    Object.assign(sh.uniforms, { dTime: ENV.time, dSnow: ENV.snow, dWet: ENV.wet, dSand: ENV.sand, dNight: ENV.night, wS: ENV.windS, wCar: ENV.car, wCarR: ENV.carR });
    let vs = sh.vertexShader, fs = sh.fragmentShader;
    vs = vs.replace('#include <common>', `#include <common>
      uniform float dTime, wS, wCarR; uniform vec3 wCar;
      varying vec3 vDW; varying vec3 vDN; varying vec3 vDL; varying vec3 vDR;
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
        dw = modelMatrix * dw; vDW = dw.xyz; vDN = normalize(mat3(modelMatrix) * dn); vDL = transformed; vDR = (modelMatrix * vec4(dr, 1.0)).xyz;
        ${fade ? 'vFade = aFade;' : ''} }`);
    fs = fs.replace('#include <common>', `#include <common>
      ${COMMON}
      ${fade ? 'varying float vFade;' : ''}`);
    fs = fs.replace('#include <clipping_planes_fragment>', `#include <clipping_planes_fragment>
      ${fade ? `if (vFade > 0.001) { float ign = fract(52.9829189 * fract(dot(gl_FragCoord.xy, vec2(0.06711056, 0.00583715)))); if (ign < vFade) discard; }` : ''}`);
    fs = fs.replace('#include <color_fragment>', `#include <color_fragment>
      { vec3 col = diffuseColor.rgb;
        ${k ? pattern(k, name) : ''}
        // weather on every surface
        float up = smoothstep(0.35, 0.85, vDN.y + (dF(vDW * 1.3) - 0.5) * 0.45);
        col = mix(col, vec3(0.93, 0.95, 1.0), dSnow * up);
        col *= 1.0 - dWet * 0.26;
        col = mix(col, vec3(0.78, 0.6, 0.4), dSand * 0.22 * smoothstep(-0.2, 0.7, vDN.y));
        diffuseColor.rgb = col; }`);
    fs = fs.replace('#include <roughnessmap_fragment>', `#include <roughnessmap_fragment>
      if (dRough >= 0.0) roughnessFactor = dRough;
      roughnessFactor = mix(roughnessFactor, 0.22, dWet * smoothstep(0.4, 0.95, vDN.y));`);
    fs = fs.replace('#include <normal_fragment_maps>', `#include <normal_fragment_maps>
      normal = dPerturb(-vViewPosition, normal, vec2(dFdx(dHt), dFdy(dHt)) * ${bump.toFixed(2)}, faceDirection);`);
    if (k === 'glass') fs = fs.replace('#include <emissivemap_fragment>', '#include <emissivemap_fragment>\n totalEmissiveRadiance *= dLit;');
    if (k === 'leaf') fs = fs.replace('#include <emissivemap_fragment>', `#include <emissivemap_fragment>
      { vec3 vd = normalize(vViewPosition); float rim = pow(1.0 - abs(dot(normal, vd)), 3.0); totalEmissiveRadiance += diffuseColor.rgb * rim * 0.22 * (1.0 - dNight); }`);
    sh.vertexShader = vs; sh.fragmentShader = fs;
  };
  const key = `${k}|${name}|${bump}|${wind ? `${wind.bend}${wind.rigid}${wind.push || 0}` : ''}|${fade}`;
  mat.customProgramCacheKey = () => key;
  mat.needsUpdate = true;
  return mat;
}
