/* ==========================================================================
   Drive — the sky.
   One physically based sky (Preetham: Rayleigh + Mie scattering) is baked into a
   small equirectangular HDR texture whenever the sun or the weather changes.
   Everything that should look like the sky samples that one texture:
     · the sky dome (plus a sharp sun, two cloud layers and stars, per pixel),
     · the fog (distant land takes the colour of the horizon behind it, so there is no seam),
     · the image-based light (PMREM), and the water's reflections.
   ========================================================================== */
import * as THREE from '../../vendor/three.min.js';

// equirectangular convention shared with three's PMREM: u = atan(z, x)/2π + 0.5, v = asin(y)/π + 0.5
export const EQ_GLSL = /* glsl */`
  vec2 skyUV(vec3 d){ d = normalize(d); return vec2(atan(d.z, d.x) * 0.15915494 + 0.5, asin(clamp(d.y, -1.0, 1.0)) * 0.31830989 + 0.5); }
`;

const PREETHAM = /* glsl */`
  const float PI_ = 3.141592653589793;
  const vec3 totalRayleigh = vec3(5.804542996261093E-6, 1.3562911419845635E-5, 3.0265902468824876E-5);
  const vec3 MieConst = vec3(1.8399918514433978E14, 2.7798023919660528E14, 4.0790479543861094E14);
  float sunIntensity(float zc){ zc = clamp(zc, -1.0, 1.0); return 1000.0 * max(0.0, 1.0 - exp(-((1.6110731556870734 - acos(zc)) / 1.5))); }
  vec3 preetham(vec3 dir, vec3 sd, float turbidity, float rayleigh, float mieC, float g){
    float sunE = sunIntensity(sd.y);
    float sunfade = 1.0 - clamp(1.0 - exp(sd.y * 450000.0 / 450000.0), 0.0, 1.0);
    vec3 betaR = totalRayleigh * (rayleigh - (1.0 - sunfade));
    vec3 betaM = 0.434 * (0.2 * turbidity) * 10E-18 * MieConst * mieC;
    float za = acos(max(0.0, dir.y));
    float inv = 1.0 / (cos(za) + 0.15 * pow(93.885 - za * 180.0 / PI_, -1.253));
    vec3 Fex = exp(-(betaR * 8.4E3 * inv + betaM * 1.25E3 * inv));
    float ct = dot(dir, sd);
    float rPhase = 0.05968310365946075 * (1.0 + pow(ct * 0.5 + 0.5, 2.0));
    float g2 = g * g; float mPhase = 0.07957747154594767 * (1.0 - g2) / pow(1.0 - 2.0 * g * ct + g2, 1.5);
    vec3 bRT = betaR * rPhase, bMT = betaM * mPhase;
    vec3 Lin = pow(sunE * ((bRT + bMT) / (betaR + betaM)) * (1.0 - Fex), vec3(1.5));
    Lin *= mix(vec3(1.0), pow(sunE * ((bRT + bMT) / (betaR + betaM)) * Fex, vec3(0.5)), clamp(pow(1.0 - sd.y, 5.0), 0.0, 1.0));
    return (Lin + vec3(0.1) * Fex) * 0.04 + vec3(0.0, 0.0003, 0.00075);
  }
`;

export function buildSky(renderer, { coarse = false } = {}) {
  const W = coarse ? 256 : 512, H = W / 2;
  const rt = new THREE.WebGLRenderTarget(W, H, { type: THREE.HalfFloatType, minFilter: THREE.LinearFilter, magFilter: THREE.LinearFilter, generateMipmaps: false, depthBuffer: false });
  rt.texture.mapping = THREE.EquirectangularReflectionMapping;
  const U = {
    sunDir: { value: new THREE.Vector3(0, 1, 0) }, turbidity: { value: 2.4 }, rayleigh: { value: 1.6 }, mieC: { value: 0.006 }, mieG: { value: 0.82 },
    gain: { value: 0.19 }, haze: { value: 0 }, hazeCol: { value: new THREE.Color('#c9ccd0') }, night: { value: 0 },
    nightTop: { value: new THREE.Color('#03060f') }, nightHor: { value: new THREE.Color('#141d38') }, ground: { value: new THREE.Color('#5b5040') },
  };
  const bakeMat = new THREE.ShaderMaterial({
    uniforms: U, depthTest: false, depthWrite: false,
    vertexShader: 'varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }',
    fragmentShader: /* glsl */`
      uniform vec3 sunDir, hazeCol, nightTop, nightHor, ground; uniform float turbidity, rayleigh, mieC, mieG, gain, haze, night;
      varying vec2 vUv;
      ${PREETHAM}
      void main(){
        float phi = (vUv.x - 0.5) * 6.283185307, th = (vUv.y - 0.5) * 3.141592653;
        vec3 d = vec3(cos(th) * cos(phi), sin(th), cos(th) * sin(phi));
        vec3 sd = normalize(sunDir);
        vec3 du = normalize(vec3(d.x, max(d.y, 0.0) + 0.002, d.z));
        vec3 c = preetham(du, sd, turbidity, rayleigh, mieC, mieG) * gain;
        // night: a deep navy dome, lighter toward the horizon
        vec3 nc = mix(nightHor, nightTop, pow(clamp(d.y, 0.0, 1.0), 0.5));
        c = mix(c, nc, night);
        // weather: an overcast/dust veil that keeps the sky's brightness (brighter toward the sun)
        float L = dot(c, vec3(0.2126, 0.7152, 0.0722));
        vec3 veil = hazeCol * (0.75 + 0.35 * smoothstep(-0.05, 0.6, d.y)) * mix(1.0, 0.25, night) * (1.0 + pow(max(dot(du, sd), 0.0), 6.0) * 0.6 * (1.0 - night));
        c = mix(c, veil, haze);
        // below the horizon: the far ground, fading in from the horizon haze
        float gk = smoothstep(0.0, -0.22, d.y);
        c = mix(c, ground * (0.35 + 0.65 * (L / max(L, 1e-4))) * mix(1.0, 0.08, night), gk);
        gl_FragColor = vec4(c, 1.0);
      }`,
  });
  const quad = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), bakeMat); quad.frustumCulled = false;
  const bakeScene = new THREE.Scene(); bakeScene.add(quad);
  const bakeCam = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

  /* ---------- the dome ---------- */
  const D = {
    skyTex: { value: rt.texture }, sunDir: U.sunDir, sunCol: { value: new THREE.Color() }, night: U.night, haze: U.haze,
    cCover: null, cOff: null, cirrus: { value: 0.5 }, time: { value: 0 }, cloudAmb: { value: new THREE.Color() }, cloudSun: { value: new THREE.Color() },
  };
  const domeMat = new THREE.ShaderMaterial({
    uniforms: D, side: THREE.BackSide, depthWrite: false, fog: false,
    vertexShader: 'varying vec3 vD; void main(){ vD = position; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); gl_Position.z = gl_Position.w; }',
    fragmentShader: /* glsl */`
      uniform sampler2D skyTex; uniform vec3 sunDir, sunCol, cloudAmb, cloudSun; uniform float night, haze, cirrus, time;
      varying vec3 vD;
      ${EQ_GLSL}
      __CLOUD__
      float h3(vec3 p){ return fract(sin(dot(p, vec3(127.1, 311.7, 74.7))) * 43758.5453); }
      float hh(vec2 p){ return fract(sin(dot(p, vec2(41.3, 289.1))) * 43758.5453); }
      float vn(vec2 p){ vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f); return mix(mix(hh(i), hh(i + vec2(1, 0)), f.x), mix(hh(i + vec2(0, 1)), hh(i + vec2(1, 1)), f.x), f.y); }
      void main(){
        vec3 d = normalize(vD); vec3 sd = normalize(sunDir);
        vec3 c = texture2D(skyTex, skyUV(d)).rgb;
        float ct = dot(d, sd);
        // the sun: a sharp disc with a little limb darkening (HDR, so it blooms)
        float disc = smoothstep(0.99996, 0.99999, ct);
        c += sunCol * disc * 40.0 * (1.0 - haze * 0.9) * step(0.0, d.y + 0.01);
        // stars
        vec3 g = floor(d * 300.0);
        c += vec3(step(0.9972, h3(g)) * (0.5 + 0.5 * h3(g + 1.0))) * smoothstep(0.04, 0.3, d.y) * night * (1.0 - haze) * 0.9;
        if (d.y > 0.0) {
          // high cirrus: thin streaks drawn out by the wind
          vec2 pc = d.xz / (d.y + 0.08) * 1.0;
          vec2 q = mat2(0.86, -0.5, 0.5, 0.86) * (pc + time * 0.004);
          float w = vn(q * vec2(0.9, 5.5) + vn(q * 2.1) * 1.6);
          float ci = smoothstep(0.55, 0.95, w * 0.7 + vn(q * vec2(3.0, 14.0)) * 0.3) * smoothstep(0.35, 0.75, vn(q * 0.35 + 7.0)) * cirrus;
          ci *= smoothstep(0.02, 0.25, d.y) * (1.0 - haze);
          c = mix(c, cloudSun * 0.9 + cloudAmb * 0.6, ci * 0.45);
          // cumulus: the deck that shadows the island; lit tops, blue-grey bases, bright rims toward the sun
          float t = (420.0 - cameraPosition.y) / max(d.y, 0.02);
          vec2 p = cameraPosition.xz + d.xz * t;
          float cd = cloudDensity(p);
          if (cd > 0.002) {
            float tow = cloudDensity(p + sd.xz / max(sd.y, 0.2) * 60.0);     // cloud between this point and the sun
            float lit = exp(-tow * 2.2) * (0.55 + 0.45 * smoothstep(0.0, 0.8, cd));
            vec3 col = cloudAmb * (0.55 + 0.25 * cd) + cloudSun * lit;
            col += cloudSun * pow(max(ct, 0.0), 8.0) * (1.0 - cd) * 1.4;   // silver lining
            float far = 1.0 - exp(-t * 0.0006);                               // distant clouds sink into the haze
            col = mix(col, c, far * 0.85);
            c = mix(c, col, cd * smoothstep(0.015, 0.14, d.y) * (1.0 - haze * 0.6));
          }
        }
        gl_FragColor = vec4(c, 1.0);
      }`,
  });

  let key = '', verified = false; const px = new Uint16Array(4);
  const sky = {
    U, D, rt, texture: rt.texture,
    dome(cloudGLSL, cloudU) {
      domeMat.fragmentShader = domeMat.fragmentShader.replace('__CLOUD__', cloudGLSL);
      Object.assign(D, cloudU);
      const m = new THREE.Mesh(new THREE.SphereGeometry(1000, 48, 24), domeMat);
      m.renderOrder = -1; m.frustumCulled = false;
      return m;
    },
    /** re-bake if anything visible changed; returns true when it did */
    bake(force = false) {
      const k = (force || !verified ? Math.random() : '') + [U.sunDir.value.toArray().map((v) => v.toFixed(3)).join(), U.haze.value.toFixed(3), U.night.value.toFixed(3), U.hazeCol.value.getHexString(), U.turbidity.value.toFixed(2), U.ground.value.getHexString()].join('|');
      if (k === key) return false; key = k; sky.n = (sky.n || 0) + 1;
      const prev = renderer.getRenderTarget(), at = renderer.autoClear;
      renderer.setRenderTarget(rt); renderer.autoClear = true; renderer.render(bakeScene, bakeCam);
      if (!verified) { renderer.readRenderTargetPixels(rt, W >> 1, H >> 1, 1, 1, px); verified = px[3] > 0; sky.v = verified; sky.px = [...px]; }   // the program may still be compiling: keep baking until a frame lands
      renderer.setRenderTarget(prev); renderer.autoClear = at;
      return true;
    },
  };
  return sky;
}
