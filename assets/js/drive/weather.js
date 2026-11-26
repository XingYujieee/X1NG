/* ==========================================================================
   Drive — weather you can feel.
   Snow: flakes of different sizes tumbling in turbulence, big soft ones close
   to the lens, settling white on everything that faces up.
   Rain: real streaks slanted by the wind, splashes on the ground around you,
   darker wet surfaces with puddles.
   Sandstorm: rolling walls of dust drifting past the camera, fine sand
   whipping by, sand streaming over the ground, the sun a pale disc.
   Plus a colour grade per weather (and per hour) so the whole frame agrees.
   ========================================================================== */
import * as THREE from '../../vendor/three.min.js';

const clamp = (x, a, b) => Math.min(b, Math.max(a, x));

export function buildWeather(scene, { coarse = false, sample } = {}) {
  const BOX = new THREE.Vector3(56, 24, 56);

  /* snow and fine sand: points with their own size, wrapped in a box around the camera */
  const SN = coarse ? 3500 : 8000;
  const sPos = new Float32Array(SN * 3), sRnd = new Float32Array(SN);
  for (let i = 0; i < SN; i++) { sPos[i * 3] = Math.random(); sPos[i * 3 + 1] = Math.random(); sPos[i * 3 + 2] = Math.random(); sRnd[i] = Math.random(); }
  const sGeo = new THREE.BufferGeometry(); sGeo.setAttribute('position', new THREE.BufferAttribute(sPos, 3)); sGeo.setAttribute('rnd', new THREE.BufferAttribute(sRnd, 1));
  const PU = { t: { value: 0 }, center: { value: new THREE.Vector3() }, box: { value: BOX }, kind: { value: 1 }, amount: { value: 0 }, wind: { value: new THREE.Vector2() }, scale: { value: 400 }, tint: { value: new THREE.Color(1, 1, 1) } };
  const points = new THREE.Points(sGeo, new THREE.ShaderMaterial({
    uniforms: PU, transparent: true, depthWrite: false,
    vertexShader: `
      uniform float t, kind, amount, scale; uniform vec3 center, box; uniform vec2 wind; attribute float rnd; varying float vA; varying float vR; varying float vNear;
      void main(){
        vA = step(rnd, amount); vR = rnd;
        vec3 vel;
        if (kind < 1.5) {   // snow: slow, turbulent
          float sz = 0.4 + rnd * 0.6;
          vel = vec3(wind.x * 0.35 + sin(t * 0.7 + rnd * 40.0) * 0.9, -1.1 - sz * 0.9, wind.y * 0.35 + cos(t * 0.6 + rnd * 23.0) * 0.9);
        } else {             // sand: fast, low
          vel = vec3(wind.x * 3.2, sin(t * 3.0 + rnd * 30.0) * 1.4, wind.y * 3.2);
        }
        vec3 p = position * box + vel * t;
        p += vec3(sin(t * 1.3 + rnd * 9.0), 0.0, cos(t * 1.1 + rnd * 7.0)) * (kind < 1.5 ? 0.35 : 0.1);
        vec3 o = center - box * 0.5; o.y = center.y - (kind < 1.5 ? 8.0 : 3.0);
        vec3 b = box; if (kind > 1.5) b.y = 9.0;
        p = mod(p - o, b) + o;
        vec4 mv = modelViewMatrix * vec4(p, 1.0);
        float d = -mv.z;
        vNear = smoothstep(0.6, 3.5, d) * (1.0 - smoothstep(30.0, 50.0, d));
        float sz = kind < 1.5 ? mix(0.05, 0.13, rnd * rnd) : 0.035 + rnd * 0.03;
        gl_PointSize = clamp(sz * scale / d, 1.0, 64.0);
        gl_Position = projectionMatrix * mv;
      }`,
    fragmentShader: `
      uniform float kind; uniform vec3 tint; varying float vA; varying float vR; varying float vNear;
      void main(){
        if (vA < 0.5) discard;
        vec2 c = gl_PointCoord - 0.5; float a; vec3 col;
        if (kind < 1.5) { a = 1.0 - smoothstep(0.08, 0.5, length(c)); a *= 0.55 + 0.45 * vR; col = vec3(1.0); }
        else { a = (1.0 - smoothstep(0.0, 0.5, length(c * vec2(0.45, 2.6)))) * 0.7; col = vec3(0.88, 0.7, 0.48); }
        gl_FragColor = vec4(col * tint, a * vNear);
      }`,
  }));
  points.frustumCulled = false; points.renderOrder = 6; scene.add(points);

  /* rain: streaks (line segments) slanted by the wind */
  const RN = coarse ? 2200 : 5000;
  const rPos = new Float32Array(RN * 6), rEnd = new Float32Array(RN * 2), rR = new Float32Array(RN * 2);
  for (let i = 0; i < RN; i++) { const x = Math.random(), y = Math.random(), z = Math.random(), r = Math.random(); for (let k = 0; k < 2; k++) { rPos[i * 6 + k * 3] = x; rPos[i * 6 + k * 3 + 1] = y; rPos[i * 6 + k * 3 + 2] = z; rEnd[i * 2 + k] = k; rR[i * 2 + k] = r; } }
  const rGeo = new THREE.BufferGeometry(); rGeo.setAttribute('position', new THREE.BufferAttribute(rPos, 3)); rGeo.setAttribute('end', new THREE.BufferAttribute(rEnd, 1)); rGeo.setAttribute('rnd', new THREE.BufferAttribute(rR, 1));
  const RU = { t: PU.t, center: PU.center, box: PU.box, amount: { value: 0 }, wind: PU.wind, tint: { value: new THREE.Color(1, 1, 1) }, rel: { value: new THREE.Vector3() } };
  const rain = new THREE.LineSegments(rGeo, new THREE.ShaderMaterial({
    uniforms: RU, transparent: true, depthWrite: false,
    vertexShader: `
      uniform float t, amount; uniform vec3 center, box, rel; uniform vec2 wind; attribute float end; attribute float rnd; varying float vA; varying float vE;
      void main(){
        vA = step(rnd, amount) * (0.45 + 0.55 * fract(rnd * 17.3)); vE = end;
        vec3 vel = vec3(wind.x * 0.6, -22.0 - rnd * 6.0, wind.y * 0.6);
        vec3 p = position * box + vel * t;
        vec3 o = center - box * 0.5; o.y = center.y - 8.0;
        p = mod(p - o, box) + o;
        // the streak is the drop's motion during the exposure, as seen from the moving car: it slants toward you at speed
        p -= (vel - rel) * (0.022 + fract(rnd * 7.1) * 0.014) * end;
        vec4 mv = modelViewMatrix * vec4(p, 1.0);
        vA *= smoothstep(0.8, 3.0, -mv.z) * (1.0 - smoothstep(25.0, 40.0, -mv.z));
        gl_Position = projectionMatrix * mv;
      }`,
    fragmentShader: `uniform vec3 tint; varying float vA; varying float vE; void main(){ if (vA < 0.01) discard; gl_FragColor = vec4(vec3(0.74, 0.8, 0.9) * tint, vA * (0.06 + vE * 0.22)); }`,
  }));
  rain.frustumCulled = false; rain.renderOrder = 6; scene.add(rain);

  /* rain splashes: little rings blooming on the ground around the camera */
  const SPL = coarse ? 90 : 220;
  const ring = new THREE.RingGeometry(0.6, 1, 20).rotateX(-Math.PI / 2);
  const splashMat = new THREE.ShaderMaterial({
    uniforms: { t: PU.t, amount: { value: 0 } }, transparent: true, depthWrite: false,
    vertexShader: `uniform float t; attribute float phase; varying float vK;
      void main(){ float k = fract(t * 1.6 + phase); vK = k; vec3 p = position * (0.03 + k * 0.13);
        gl_Position = projectionMatrix * modelViewMatrix * instanceMatrix * vec4(p, 1.0); }`,
    fragmentShader: `uniform float amount; varying float vK; void main(){ gl_FragColor = vec4(0.85, 0.9, 1.0, (1.0 - vK) * (1.0 - vK) * 0.3 * amount); }`,
  });
  const splashes = new THREE.InstancedMesh(ring, splashMat, SPL);
  const phase = new Float32Array(SPL); for (let i = 0; i < SPL; i++) phase[i] = Math.random();
  splashes.geometry = ring.clone(); splashes.geometry.setAttribute('phase', new THREE.InstancedBufferAttribute(phase, 1));
  splashes.frustumCulled = false; splashes.instanceMatrix.setUsage(THREE.DynamicDrawUsage); splashes.renderOrder = 3; scene.add(splashes);
  const splashPos = Array.from({ length: SPL }, () => ({ x: 0, z: 0, ph: Math.random(), last: -1 }));

  /* dust clouds: big soft billboards rolling through in a sandstorm */
  const cloudTex = (() => {
    const c = document.createElement('canvas'); c.width = c.height = 256; const x = c.getContext('2d');
    for (let k = 0; k < 26; k++) {
      const px = 60 + Math.random() * 136, py = 70 + Math.random() * 116, r = 30 + Math.random() * 60;
      const g = x.createRadialGradient(px, py, 0, px, py, r); g.addColorStop(0, 'rgba(255,255,255,.22)'); g.addColorStop(1, 'rgba(255,255,255,0)');
      x.fillStyle = g; x.fillRect(0, 0, 256, 256);
    }
    const t = new THREE.CanvasTexture(c); return t;
  })();
  const CN = coarse ? 22 : 46;
  const CU = { t: PU.t, center: PU.center, wind: PU.wind, amount: { value: 0 }, col: { value: new THREE.Color('#d6a86a') }, map: { value: cloudTex } };
  const clouds = new THREE.InstancedMesh(new THREE.PlaneGeometry(1, 1), new THREE.ShaderMaterial({
    uniforms: CU, transparent: true, depthWrite: false,
    vertexShader: `uniform float t; uniform vec3 center; uniform vec2 wind; attribute vec4 cl; varying vec2 vUv; varying float vA;
      void main(){
        vUv = uv;
        vec3 box = vec3(80.0, 10.0, 80.0);
        vec3 p = cl.xyz * box + vec3(wind.x, 0.0, wind.y) * 2.4 * t;
        vec3 o = center - box * 0.5; o.y = center.y - 3.5;
        p = mod(p - o, box) + o;
        vec4 mv = viewMatrix * vec4(p, 1.0);
        float s = 9.0 + cl.w * 14.0;
        float rot = t * 0.05 * (cl.w - 0.5) + cl.w * 6.0;
        vec2 q = vec2(position.x * cos(rot) - position.y * sin(rot), position.x * sin(rot) + position.y * cos(rot));
        mv.xy += q * s;
        float d = -mv.z;
        vA = smoothstep(1.0, 9.0, d) * (1.0 - smoothstep(40.0, 60.0, d));
        gl_Position = projectionMatrix * mv;
      }`,
    fragmentShader: `uniform sampler2D map; uniform vec3 col; uniform float amount; varying vec2 vUv; varying float vA;
      void main(){ float a = texture2D(map, vUv).r * vA * amount; if (a < 0.003) discard; gl_FragColor = vec4(col, a); }`,
  }), CN);
  const cl = new Float32Array(CN * 4); for (let i = 0; i < CN * 4; i++) cl[i] = Math.random();
  clouds.geometry.setAttribute('cl', new THREE.InstancedBufferAttribute(cl, 4));
  clouds.frustumCulled = false; clouds.renderOrder = 7; scene.add(clouds);

  const m4 = new THREE.Matrix4();
  return {
    resize(h, pr) { PU.scale.value = h * pr * 0.9; },
    /* kind: 'clear' | 'rain' | 'snow' | 'sand', amount 0..1 */
    update(dt, tt, kind, amount, cam, focus, wind, night, fogCol, carVel) {
      if (carVel) RU.rel.value.set(carVel.x, carVel.y, carVel.z);
      PU.t.value = tt; PU.center.value.copy(cam); PU.wind.value.copy(wind);
      const dim = 1 - night * 0.55;
      PU.kind.value = kind === 'sand' ? 2 : 1;
      PU.amount.value = kind === 'snow' ? amount : kind === 'sand' ? amount * 0.8 : 0;
      PU.tint.value.setScalar(dim);
      RU.amount.value = kind === 'rain' ? amount : 0; RU.tint.value.setScalar(dim);
      splashMat.uniforms.amount.value = kind === 'rain' ? amount : 0;
      splashes.visible = kind === 'rain' && amount > 0.02;
      if (splashes.visible) {
        for (let i = 0; i < SPL; i++) {
          const s = splashPos[i], k = (tt * 1.6 + s.ph) % 1;
          if (k < s.last || s.last < 0) { const a = Math.random() * Math.PI * 2, r = 1.5 + Math.random() * 13; s.x = focus.x + Math.cos(a) * r; s.z = focus.z + Math.sin(a) * r; }
          s.last = k;
          m4.makeTranslation(s.x, sample(s.x, s.z) + 0.04, s.z); splashes.setMatrixAt(i, m4);
        }
        splashes.instanceMatrix.needsUpdate = true;
      }
      CU.amount.value = kind === 'sand' ? amount : 0;
      clouds.visible = CU.amount.value > 0.01;
      CU.col.value.copy(fogCol).lerp(new THREE.Color('#d9ab6c'), 0.4);
    },
  };
}

/* the colour grade: tint, saturation, contrast, a soft vignette and a little grain */
export const GradeShader = {
  uniforms: { tDiffuse: { value: null }, tint: { value: new THREE.Vector3(1, 1, 1) }, sat: { value: 1 }, contrast: { value: 1 }, lift: { value: 0 }, vig: { value: 0.25 }, grain: { value: 0.02 }, t: { value: 0 } },
  vertexShader: 'varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }',
  fragmentShader: `
    uniform sampler2D tDiffuse; uniform vec3 tint; uniform float sat, contrast, lift, vig, grain, t; varying vec2 vUv;
    float h(vec2 p){ return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453); }
    void main(){
      vec4 c = texture2D(tDiffuse, vUv);
      vec3 col = c.rgb * tint;
      float l = dot(col, vec3(0.2126, 0.7152, 0.0722));
      col = mix(vec3(l), col, sat);
      col = (col - 0.18) * contrast + 0.18 + lift;
      vec2 d = vUv - 0.5; col *= 1.0 - vig * smoothstep(0.25, 0.85, length(d * vec2(1.2, 1.0)));
      col += (h(vUv * 931.0 + t) - 0.5) * grain * (0.4 + l);
      gl_FragColor = vec4(max(col, 0.0), c.a);
    }`,
};
export function gradeFor(kind, amount, night) {
  const P = {   // tint rgb, sat, contrast, lift, vignette
    clear: [1, 1, 1, 1.06, 1.04, 0, 0.22],
    rain: [0.9, 0.96, 1.05, 0.72, 0.94, 0.004, 0.32],
    snow: [0.98, 1.02, 1.08, 0.82, 0.9, 0.02, 0.2],
    sand: [1.1, 0.96, 0.78, 0.78, 0.86, 0.012, 0.34],
  };
  const a = P.clear, b = P[kind] || a, k = clamp(amount, 0, 1);
  const g = a.map((v, i) => v + (b[i] - v) * k);
  g[3] *= 1 - night * 0.18; g[6] += night * 0.12;
  return g;
}
