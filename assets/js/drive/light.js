/* ==========================================================================
   Drive — light and air.
   · Fog becomes aerial perspective: denser in the valleys than on the peaks,
     and brighter toward the sun (light scattered in the haze).
   · One cloud layer, drawn in the sky and casting slow shadows on the ground,
     the buildings, the trees and the grass — the same pattern, so a shadow sits
     under its cloud.
   ========================================================================== */
import * as THREE from '../../vendor/three.min.js';

// shared uniforms (materials.js puts the same objects into ENV)
export const SUN = { value: new THREE.Vector3(0, 1, 0) }, CLOUD = { value: 0.35 }, CLOUD_OFF = { value: new THREE.Vector2() };
export const AIR = {
  fogSunDir: SUN, fogSunCol: { value: new THREE.Color(0, 0, 0) }, fogHeight: { value: 0.045 },
  cCover: CLOUD, cOff: CLOUD_OFF,
};

// cloud density at a world point on the cloud deck, and the shadow it casts on a point below
export const CLOUD_GLSL = /* glsl */`
  uniform float cCover; uniform vec2 cOff;
  float cH2(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
  float cN2(vec2 p){ vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f);
    return mix(mix(cH2(i), cH2(i + vec2(1, 0)), f.x), mix(cH2(i + vec2(0, 1)), cH2(i + vec2(1, 1)), f.x), f.y); }
  float cloudDensity(vec2 xz){
    vec2 q = (xz + cOff) * 0.016;
    float n = cN2(q) * 0.5 + cN2(q * 2.03 + 3.1) * 0.25 + cN2(q * 4.1 + 7.7) * 0.125 + cN2(q * 8.3 + 1.3) * 0.0625;
    return smoothstep(1.0 - cCover * 0.95, 1.12 - cCover * 0.7, n * 1.07);
  }
  float cloudShadow(vec3 p, vec3 sunD){
    vec3 s = normalize(sunD); float t = (60.0 - p.y) / max(s.y, 0.12);
    return 1.0 - cloudDensity(p.xz + s.xz * t) * 0.62;
  }
`;

let patched = false;
/** replace three's fog chunks (call once, before anything compiles) */
export function patchFog() {
  if (patched) return; patched = true;
  const SC = THREE.ShaderChunk;
  SC.fog_pars_vertex = `#ifdef USE_FOG
    varying float vFogDepth; varying vec3 vFogWorld;
  #endif`;
  SC.fog_vertex = `#ifdef USE_FOG
    vFogDepth = - mvPosition.z;
    vFogWorld = cameraPosition + transpose(mat3(viewMatrix)) * mvPosition.xyz;
  #endif`;
  SC.fog_pars_fragment = `#ifdef USE_FOG
    uniform vec3 fogColor; varying float vFogDepth; varying vec3 vFogWorld;
    uniform vec3 fogSunDir; uniform vec3 fogSunCol; uniform float fogHeight;
    #ifdef FOG_EXP2
      uniform float fogDensity;
    #else
      uniform float fogNear; uniform float fogFar;
    #endif
  #endif`;
  SC.fog_fragment = `#ifdef USE_FOG
    {
      vec3 fd = vFogWorld - cameraPosition; float fl = length(fd); vec3 fdir = fd / max(fl, 1e-4);
      #ifdef FOG_EXP2
        // optical depth through air that thins with height (exact integral of exp(-b·y) along the ray)
        float hk = 1.0;
        if (fogHeight > 0.0) {
          float y0 = max(cameraPosition.y, -1.0), dy = fd.y;
          hk = abs(dy) > 0.01 ? (exp(-fogHeight * y0) - exp(-fogHeight * (y0 + dy))) / (fogHeight * dy) : exp(-fogHeight * y0);
          hk = clamp(hk * 1.25, 0.05, 1.6);
        }
        float fogFactor = 1.0 - exp(- fogDensity * fogDensity * vFogDepth * vFogDepth * hk);
      #else
        float fogFactor = smoothstep(fogNear, fogFar, vFogDepth);
      #endif
      float sunAmt = pow(max(dot(fdir, normalize(fogSunDir + vec3(0.0, 1e-4, 0.0))), 0.0), 6.0);
      gl_FragColor.rgb = mix(gl_FragColor.rgb, fogColor + fogSunCol * sunAmt * 0.55, fogFactor);
    }
  #endif`;
}

/** give every fogged material in the scene the extra air uniforms (idempotent; safe to call often) */
export function injectAir(scene) {
  scene.traverse((o) => {
    const ms = o.material ? (Array.isArray(o.material) ? o.material : [o.material]) : [];
    for (const m of ms) {
      if (!m || m.userData.air || m.fog === false) continue;
      m.userData.air = true;
      if (m.isShaderMaterial) { Object.assign(m.uniforms, AIR); continue; }
      const prev = m.onBeforeCompile;
      m.onBeforeCompile = function (sh, r) { prev?.call(this, sh, r); Object.assign(sh.uniforms, AIR); };
      m.needsUpdate = true;
    }
  });
}
