/* ------------------------------------------------------------------
   "Beneath the light" — the Lusion about-page design, applied to X1NG's
   own photographs.

   The person is the constant subject: in every photograph he is framed at
   the same place and the same size on screen, and the world changes around
   him. Each place gets effects that belong to it (taken from what is really
   in the photo): golden wind-blown sand on the yardang at sunset, falling
   snow and ice glitter in the Meili gorge, the sun he holds and floating
   chaff among the hay bales, and the Lusion shaft, nebula and rising stones
   under the star trails. Scenes change by spreading the next place outward
   from him, like light leaving his body.
------------------------------------------------------------------- */
import * as THREE from '../../vendor/three.min.js';
import { EffectComposer } from '../../vendor/three-addons/postprocessing/EffectComposer.js';
import { RenderPass } from '../../vendor/three-addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from '../../vendor/three-addons/postprocessing/UnrealBloomPass.js';
import { OutputPass } from '../../vendor/three-addons/postprocessing/OutputPass.js';
import { ShaderPass } from '../../vendor/three-addons/postprocessing/ShaderPass.js';

let seed = 11;
const rnd = () => ((seed = (seed * 16807) % 2147483647) / 2147483647);
const sstep = (a, b, x) => { const t = Math.min(1, Math.max(0, (x - a) / (b - a))); return t * t * (3 - 2 * t); };
const lerp = (a, b, t) => a + (b - a) * t;
const lerpA = (a, b, t) => a.map((v, i) => lerp(v, b[i], t));

/* The person in each photo (image uv, y down) and the look of each place.
   Order follows a day: noon among the bales → afternoon snow at Meili →
   sunset on the yardang → night under the star trails → (back to noon). */
export const SCENES = [
  { id: '61', x: 0.494, head: 0.400, feet: 0.609,
    look: { tint: [1.03, 1.0, 0.96], sat: 0.95, keep: 0.42, light: [1.0, 0.93, 0.78], pool: 0.35, shaft: 0.0 },
    fx: { beam: 0.0, nebula: 0.0, rocks: 0.0, flare: [0.447, 0.391], parts: 'chaff', key: [-0.6, 0.8, 0.5] } },
  { id: '42', x: 0.358, head: 0.564, feet: 0.700,
    look: { tint: [0.93, 0.99, 1.08], sat: 0.82, keep: 0.3, light: [0.8, 0.9, 1.0], pool: 0.7, shaft: 0.55 },
    fx: { beam: 0.55, nebula: 0.55, nebulaTone: [0.85, 0.93, 1.0], rocks: 0.0, flare: null, parts: 'snow', key: [0.7, 0.7, 0.3] } },
  { id: '66', x: 0.418, head: 0.556, feet: 0.624,
    look: { tint: [1.08, 0.98, 0.86], sat: 0.9, keep: 0.34, light: [1.0, 0.8, 0.55], pool: 0.9, shaft: 0.35 },
    fx: { beam: 0.4, nebula: 0.0, rocks: 0.35, flare: null, parts: 'sand', key: [-0.9, 0.4, 0.5] } },
  { id: '65', x: 0.552, head: 0.588, feet: 0.655,
    look: { tint: [0.9, 0.97, 1.1], sat: 0.8, keep: 0.22, light: [0.75, 0.85, 1.0], pool: 0.35, shaft: 0.6 },
    fx: { beam: 1.0, nebula: 1.0, nebulaAt: [0.492, 0.407], nebulaTone: [0.92, 0.95, 1.0], rocks: 1.0, flare: null, parts: 'stars', key: [0, 1, 0.3] } },
];

/* ---------- photo backdrop: grade, light around him, and the outward reveal ---------- */
const bgShader = {
  uniforms: {
    texA: { value: null }, texB: { value: null }, aspA: { value: 1.5 }, aspB: { value: 1.5 }, sa: { value: 1.78 },
    fA: { value: new THREE.Vector2() }, fB: { value: new THREE.Vector2() }, sA: { value: new THREE.Vector2(.5, .5) }, sB: { value: new THREE.Vector2(.5, .5) },
    zA: { value: 1 }, zB: { value: 1 }, pan: { value: new THREE.Vector2() },
    reveal: { value: -1 }, glow: { value: 0 },
    p: { value: new THREE.Vector2(0.5, 0.6) }, ph: { value: 0.2 }, t: { value: 0 }, dark: { value: 1 },
    tint: { value: new THREE.Vector3(1, 1, 1) }, sat: { value: 0.9 }, keepMin: { value: 0.3 },
    lightCol: { value: new THREE.Vector3(1, 1, 1) }, poolK: { value: 1 }, shaftK: { value: 0.5 },
  },
  vertexShader: `varying vec2 vS; void main(){ vS = uv; gl_Position = vec4(position.xy, 0.9999, 1.0); }`,
  fragmentShader: `
    uniform sampler2D texA, texB; uniform float aspA, aspB, sa, zA, zB, reveal, glow, ph, t, dark, sat, keepMin, poolK, shaftK;
    uniform vec2 fA, fB, sA, sB, pan, p; uniform vec3 tint, lightCol; varying vec2 vS;
    // image point f (the person) pinned to screen point a, photo magnified z times around it
    vec2 cover(vec2 s, float ia, vec2 f, vec2 a, float z){
      vec2 k = sa > ia ? vec2(1.0, ia / sa) : vec2(sa / ia, 1.0);
      return f + (s - a + pan) * k / z;
    }
    vec3 tex(sampler2D tx, vec2 u){ return texture2D(tx, vec2(u.x, 1.0 - u.y)).rgb; }
    float h(vec2 q){ return fract(sin(dot(q, vec2(127.1, 311.7))) * 43758.5453); }
    float vn(vec2 q){ vec2 i = floor(q), f = fract(q); f = f * f * (3. - 2. * f);
      return mix(mix(h(i), h(i + vec2(1, 0)), f.x), mix(h(i + vec2(0, 1)), h(i + vec2(1, 1)), f.x), f.y); }
    void main(){
      vec2 s = vec2(vS.x, 1.0 - vS.y);
      vec2 d = (s - p) * vec2(sa, 1.0);
      float r = length(d);
      // the next place spreads outward from him as a wave of light: an organic front
      // that bends the image like a lens as it passes, with a thin bright rim
      vec2 np = s * vec2(sa, 1.0) * 3.2;
      float n = 0.5 * vn(np + t * 0.12) + 0.3 * vn(np * 2.3 - t * 0.2) + 0.2 * vn(np * 5.1 + 3.0);
      float edge = r + (n - 0.5) * 0.3;
      float front = edge - reveal;
      float wave = reveal > -0.5 && reveal < 5.0 ? exp(-front * front / 0.0009) : 0.0;
      vec2 dir = r > 1e-4 ? (s - p) / max(r, 1e-4) : vec2(0.0);
      vec2 ss = s + dir * wave * 0.03 * sign(front + 0.0001);       // lens-like bend at the front
      float m = 1.0 - smoothstep(-0.02, 0.02, front);
      vec3 a = vec3(0.0), b = vec3(0.0);
      if (m < 0.999) {
        if (wave > 0.05) { vec2 o = dir * wave * 0.008;            // a touch of colour fringing on the wave
          a = vec3(tex(texA, cover(ss + o, aspA, fA, sA, zA)).r, tex(texA, cover(ss, aspA, fA, sA, zA)).g, tex(texA, cover(ss - o, aspA, fA, sA, zA)).b); }
        else a = tex(texA, cover(ss, aspA, fA, sA, zA));
      }
      if (m > 0.001) {
        if (wave > 0.05) { vec2 o = dir * wave * 0.008;
          b = vec3(tex(texB, cover(ss + o, aspB, fB, sB, zB)).r, tex(texB, cover(ss, aspB, fB, sB, zB)).g, tex(texB, cover(ss - o, aspB, fB, sB, zB)).b); }
        else b = tex(texB, cover(ss, aspB, fB, sB, zB));
      }
      vec3 col = mix(a, b, m);
      // grade: keep the photo's colour, nudge it towards the mood of the place
      float l = dot(col, vec3(0.299, 0.587, 0.114));
      col = mix(vec3(l), col, sat) * tint;
      // light falloff: the world around him sinks into shadow, he stays lit
      float ell = length(d * vec2(0.75, 1.1)) / max(ph * 2.6, 0.05);
      float keep = mix(keepMin, 1.0, exp(-ell * ell * 0.5 / dark));
      float above = smoothstep(p.y, p.y - 0.3, s.y);
      float wid = ph * 0.55 + (p.y - s.y) * 0.1;
      float shaft = exp(-pow(d.x / max(wid, 0.01), 2.0)) * above * shaftK;
      vec2 q = d / vec2(ph * 1.25, ph * 0.28) - vec2(0.0, 1.6);
      float pool = exp(-dot(q, q)) * poolK;
      col *= keep;
      col = col * (1.0 + pool * 0.9 + shaft * 0.3) + lightCol * (pool * 0.1 + shaft * 0.12);
      // the moment of change: light leaves his body
      float halo = exp(-r * r / (ph * ph * 0.35));
      col += lightCol * (glow * halo * 0.16 + wave * 0.035);
      gl_FragColor = vec4(col, 1.0);
    }`,
};

const canvasTex = (draw, size = 128) => { const c = document.createElement('canvas'); c.width = c.height = size; draw(c.getContext('2d'), size); const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; return t; };
const glowTex = canvasTex((x, S) => {
  const g = x.createRadialGradient(S / 2, S / 2, 0, S / 2, S / 2, S / 2);
  g.addColorStop(0, 'rgba(255,255,255,1)'); g.addColorStop(0.18, 'rgba(240,244,255,0.5)'); g.addColorStop(0.5, 'rgba(210,220,240,0.1)'); g.addColorStop(1, 'rgba(0,0,0,0)');
  x.fillStyle = g; x.fillRect(0, 0, S, S);
});
const starTex = canvasTex((x, S) => {                        // a sun star: soft core plus thin rays
  const c = S / 2; x.globalCompositeOperation = 'lighter';
  for (let i = 0; i < 12; i++) {
    const a = i * Math.PI / 6 + (i % 2) * 0.12, len = i % 2 ? S * 0.32 : S * 0.48;
    const g = x.createLinearGradient(c, c, c + Math.cos(a) * len, c + Math.sin(a) * len);
    g.addColorStop(0, 'rgba(255,250,235,0.9)'); g.addColorStop(1, 'rgba(255,240,210,0)');
    x.strokeStyle = g; x.lineWidth = i % 2 ? 1.2 : 2; x.beginPath(); x.moveTo(c, c); x.lineTo(c + Math.cos(a) * len, c + Math.sin(a) * len); x.stroke();
  }
  const g = x.createRadialGradient(c, c, 0, c, c, S * 0.2); g.addColorStop(0, 'rgba(255,255,250,1)'); g.addColorStop(1, 'rgba(255,240,210,0)');
  x.fillStyle = g; x.fillRect(0, 0, S, S);
}, 256);

/* ---------- the shaft ---------- */
const beamMat = () => new THREE.ShaderMaterial({
  transparent: true, depthWrite: false, depthTest: false, blending: THREE.AdditiveBlending, side: THREE.DoubleSide,
  uniforms: { t: { value: 0 }, k: { value: 1 }, col: { value: new THREE.Color(1, 1, 1) } },
  vertexShader: `varying vec3 vN; varying vec3 vV; varying float vY; varying vec3 vP;
    void main(){ vec4 w = modelMatrix*vec4(position,1.); vP = w.xyz; vN = normalize(mat3(modelMatrix)*normal); vV = normalize(cameraPosition - w.xyz); vY = uv.y; gl_Position = projectionMatrix*viewMatrix*w; }`,
  fragmentShader: `uniform float t; uniform float k; uniform vec3 col; varying vec3 vN; varying vec3 vV; varying float vY; varying vec3 vP;
    float h(float n){ return fract(sin(n)*43758.5453); }
    float n1(float x){ float i=floor(x), f=fract(x); return mix(h(i), h(i+1.), f*f*(3.-2.*f)); }
    void main(){
      float rim = pow(abs(dot(normalize(vN), vV)), 2.5);
      float fall = smoothstep(0.0, 0.12, vY) * (0.25 + 0.75 * pow(vY, 1.3));
      float motes = 0.8 + 0.2 * n1(vP.y * 3.0 - t * 1.2 + atan(vP.z, vP.x) * 3.0);
      gl_FragColor = vec4(col * rim * fall * motes * 0.3 * k, 1.0);
    }`,
});

/* ---------- the nebula: clumps of glittering dust, swirling ---------- */
function makeNebula(count) {
  const g = new THREE.BufferGeometry(); const p = new Float32Array(count * 3); const a = new Float32Array(count * 2);
  const gs = () => (rnd() + rnd() + rnd() + rnd() - 2) * 0.87;
  const clumps = [];
  for (let c = 0; c < 70; c++) { const r = Math.pow(rnd(), 0.8) * 2.4; const th = rnd() * 6.283; clumps.push([Math.cos(th) * r, gs() * 1.5, Math.sin(th) * r, 0.25 + rnd() * 0.7]); }
  for (let i = 0; i < count; i++) {
    let x, y, z;
    if (i % 5 === 0) { x = gs() * 2.2; y = gs() * 2.4; z = gs() * 2.2; }
    else { const c = clumps[Math.floor(rnd() * clumps.length)]; x = c[0] + gs() * c[3]; y = c[1] + gs() * c[3] * 1.3; z = c[2] + gs() * c[3]; }
    const r = Math.hypot(x, z), th = Math.atan2(z, x) + r * 0.9;
    p[i * 3] = Math.cos(th) * r; p[i * 3 + 1] = y; p[i * 3 + 2] = Math.sin(th) * r;
    a[i * 2] = rnd(); a[i * 2 + 1] = 0.3 + rnd() * rnd() * 1.6;
  }
  g.setAttribute('position', new THREE.BufferAttribute(p, 3)); g.setAttribute('aux', new THREE.BufferAttribute(a, 2));
  const m = new THREE.ShaderMaterial({
    transparent: true, depthWrite: false, depthTest: false, blending: THREE.AdditiveBlending,
    uniforms: { t: { value: 0 }, px: { value: 1 }, k: { value: 1 }, col: { value: new THREE.Color(1, 1, 1) } },
    vertexShader: `uniform float t; uniform float px; attribute vec2 aux; varying float vA;
      void main(){ vec3 q = position; float r = length(q.xz);
        float ang = t * (0.55 / (r + 0.6)); float c = cos(ang), s = sin(ang); q.xz = mat2(c,-s,s,c) * q.xz;
        q.y += sin(t*0.4 + r*1.7 + aux.x*6.28)*0.12;
        vec4 mv = modelViewMatrix * vec4(q,1.); gl_Position = projectionMatrix * mv;
        float tw = 0.45 + 0.55 * pow(0.5 + 0.5*sin(t*(1.5+aux.x*3.) + aux.x*40.), 3.);
        vA = tw * (1.0 - smoothstep(1.5, 4.0, length(q)) * 0.75);
        gl_PointSize = aux.y * px * 42.0 / -mv.z; }`,
    fragmentShader: `uniform float k; uniform vec3 col; varying float vA; void main(){ vec2 d = gl_PointCoord - .5; float a = smoothstep(.5, .0, length(d));
      gl_FragColor = vec4(col * a * vA * 0.42 * k, 1.0); }`,
  });
  const pts = new THREE.Points(g, m); pts.frustumCulled = false; return pts;
}

/* ---------- atmosphere particles, one kind per place ---------- */
const PARTS = {
  //            count  size  colour               velocity (world/s)      sway  twinkle glow  band (screen y from..to)
  chaff: { n: 220, size: [3, 9], col: [1.0, 0.86, 0.55], vel: [0.25, 0.18, 0], sway: 0.35, tw: 0.3, glow: 1, band: [0.05, 0.95], soft: 1, streak: 0 },
  snow:  { n: 650, size: [2.5, 11], col: [0.95, 0.97, 1.0], vel: [0.12, -0.55, 0], sway: 0.25, tw: 0.15, glow: 0, band: [0.0, 1.0], soft: 1, streak: 0 },
  sand:  { n: 1300, size: [1.8, 5], col: [1.0, 0.9, 0.72], vel: [-1.6, 0.05, 0], sway: 0.12, tw: 0.2, glow: 0, band: [0.45, 1.0], soft: 0.6, streak: 1, alpha: 1.6 },
  stars: { n: 380, size: [1.2, 4.5], col: [0.85, 0.9, 1.0], vel: [0, 0.03, 0], sway: 0.02, tw: 1.0, glow: 1, band: [0.0, 0.62], soft: 0.3, streak: 0 },
};
function makeParts(kind, HH) {
  const P = PARTS[kind]; const g = new THREE.BufferGeometry();
  const b = new Float32Array(P.n * 3), s = new Float32Array(P.n);
  for (let i = 0; i < P.n; i++) { b[i * 3] = rnd(); b[i * 3 + 1] = rnd(); b[i * 3 + 2] = rnd(); s[i] = rnd(); }
  g.setAttribute('position', new THREE.BufferAttribute(b, 3)); g.setAttribute('seed', new THREE.BufferAttribute(s, 1));
  const m = new THREE.ShaderMaterial({
    transparent: true, depthWrite: false, depthTest: false, blending: P.glow ? THREE.AdditiveBlending : THREE.NormalBlending,
    uniforms: {
      t: { value: 0 }, k: { value: 0 }, px: { value: 1 }, col: { value: new THREE.Color(...P.col) },
      box: { value: new THREE.Vector3(30, 2 * HH, 14) }, alpha: { value: P.alpha || 1 }, y0: { value: 0 }, vel: { value: new THREE.Vector3(...P.vel) },
      sway: { value: P.sway }, tw: { value: P.tw }, smin: { value: P.size[0] }, smax: { value: P.size[1] }, soft: { value: P.soft }, streak: { value: P.streak },
    },
    vertexShader: `uniform float t, px, sway, tw, smin, smax, y0; uniform vec3 box, vel; attribute float seed; varying float vA; varying float vS;
      void main(){
        vec3 u = fract(position + vel * t * (0.6 + seed * 0.8) / box);
        vec3 q = vec3((u.x - 0.5) * box.x, y0 + u.y * box.y, (u.z - 0.5) * box.z - 1.0);
        q.x += sin(t * (0.6 + seed) + seed * 40.0) * sway; q.y += cos(t * (0.5 + seed * 0.7) + seed * 17.0) * sway * 0.5;
        vec4 mv = modelViewMatrix * vec4(q, 1.0); gl_Position = projectionMatrix * mv;
        vA = mix(1.0, 0.25 + 0.75 * pow(0.5 + 0.5 * sin(t * (1.0 + seed * 3.0) + seed * 60.0), 2.0), tw)
           * smoothstep(0.0, 0.08, u.y) * smoothstep(1.0, 0.85, u.y) * smoothstep(0.0, 0.1, u.x) * smoothstep(1.0, 0.9, u.x);
        vS = seed;
        gl_PointSize = mix(smin, smax, pow(seed, 2.5)) * px * 20.0 / -mv.z; }`,
    fragmentShader: `uniform float k, soft, streak, alpha; uniform vec3 col; varying float vA; varying float vS;
      void main(){ vec2 d = gl_PointCoord - 0.5; d.y *= mix(1.0, 3.5, streak);
        float a = smoothstep(0.5, 0.5 - 0.5 * soft, length(d));
        gl_FragColor = vec4(col, min(1.0, a * vA * k * 0.95 * alpha)); }`,
  });
  const pts = new THREE.Points(g, m); pts.frustumCulled = false; pts.renderOrder = 6; pts.userData.P = P; return pts;
}

/* ---------- rocks ---------- */
function noise3(x, y, z) { return Math.sin(x * 1.7 + Math.sin(y * 2.3 + z)) * Math.cos(z * 1.9 + Math.sin(x * 1.3)); }
// several stone shapes: chunky, flat shard, long splinter, pebble
function rockGeometry(k, detail, sq) {
  const g = new THREE.IcosahedronGeometry(1, detail); const p = g.attributes.position; const v = new THREE.Vector3();
  for (let i = 0; i < p.count; i++) {
    v.fromBufferAttribute(p, i);
    const n = 1 + 0.32 * noise3(v.x * 2 + k, v.y * 2 - k, v.z * 2 + k * 0.5) + 0.12 * noise3(v.x * 6 - k, v.y * 6, v.z * 6 + k);
    v.multiplyScalar(n); v.set(v.x * sq[0], v.y * sq[1], v.z * sq[2]); p.setXYZ(i, v.x, v.y, v.z);
  }
  const ng = g.toNonIndexed ? g.toNonIndexed() : g; ng.computeVertexNormals(); return ng;   // faceted, like broken rock
}

const gradeShader = {
  uniforms: { tDiffuse: { value: null }, t: { value: 0 }, res: { value: new THREE.Vector2(1, 1) }, fadeIn: { value: 0 } },
  vertexShader: `varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.); }`,
  fragmentShader: `uniform sampler2D tDiffuse; uniform float t; uniform vec2 res; uniform float fadeIn; varying vec2 vUv;
    float h(vec2 p){ return fract(sin(dot(p, vec2(12.9898,78.233)) + t*7.) * 43758.5453); }
    void main(){
      vec2 c = vUv - .5; float ca = dot(c,c) * 0.008;
      vec3 col = vec3(texture2D(tDiffuse, vUv + c*ca).r, texture2D(tDiffuse, vUv).g, texture2D(tDiffuse, vUv - c*ca).b);
      vec2 e = c * vec2(res.x/res.y, 1.);
      col *= mix(0.35, 1.0, smoothstep(1.2, 0.35, length(e * vec2(.75, 1.0))));
      col += (h(vUv * res) - .5) * 0.035;
      gl_FragColor = vec4(col * fadeIn, 1.);
    }`,
};

/* ---------- the stage ---------- */
export function createStage(canvas, images, opts = {}) {
  const lite = opts.lite ?? false;
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: false, powerPreference: 'high-performance' });
  const dpr = Math.min(window.devicePixelRatio || 1, lite ? 1.25 : 1.75);
  renderer.setPixelRatio(dpr);
  renderer.toneMapping = THREE.NoToneMapping;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(30, 1, 0.1, 200);
  camera.position.set(0, 0, 20);
  const HH = 20 * Math.tan(THREE.MathUtils.degToRad(15));     // half screen height at z=0, in world units

  const texs = images.map((img) => { const t = new THREE.Texture(img); t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 8; t.needsUpdate = true; return t; });
  const bg = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), new THREE.ShaderMaterial({ ...bgShader, uniforms: THREE.UniformsUtils.clone(bgShader.uniforms), depthWrite: false, depthTest: false }));
  bg.frustumCulled = false; bg.renderOrder = -10; scene.add(bg);
  const U = bg.material.uniforms;

  const key = new THREE.DirectionalLight(0xffffff, 2.4); scene.add(key);
  const hemi = new THREE.HemisphereLight(0x8f98aa, 0x0d0e12, 0.6); scene.add(hemi);

  // shaft group: stands on his feet
  const shaft = new THREE.Group(); scene.add(shaft);
  const beamG = new THREE.CylinderGeometry(0.35, 1.0, 1, 40, 1, true); beamG.translate(0, 0.5, 0);
  const beam = new THREE.Mesh(beamG, beamMat()); beam.renderOrder = 2; shaft.add(beam);
  const core = new THREE.Mesh(beamG, beamMat()); core.renderOrder = 2; shaft.add(core);

  const nebula = makeNebula(lite ? 7000 : 14000); nebula.renderOrder = 3; scene.add(nebula);
  const halo = new THREE.Sprite(new THREE.SpriteMaterial({ map: glowTex, blending: THREE.AdditiveBlending, depthWrite: false, depthTest: false, opacity: 0.1 })); halo.renderOrder = 3; scene.add(halo);

  const rockMat = new THREE.MeshStandardMaterial({ color: 0x7d7f85, roughness: 0.95 });
  const FL = lite ? 70 : 140;
  const SHAPES = [rockGeometry(1.3, 1, [1, 0.75, 0.9]), rockGeometry(4.1, 1, [1.25, 0.35, 0.9]), rockGeometry(7.7, 1, [0.55, 0.55, 1.6]), rockGeometry(2.9, 0, [1, 0.8, 1])];
  const rockSets = SHAPES.map((g) => { const m = new THREE.InstancedMesh(g, rockMat, FL); m.frustumCulled = false; m.renderOrder = 4; m.count = 0; shaft.add(m); return m; });
  const gauss = () => (rnd() + rnd() + rnd() - 1.5) / 1.5;
  const fl = [];
  for (let i = 0; i < FL; i++) {
    const wide = rnd() < 0.18;                                           // a few strays far from the light
    const ax = new THREE.Vector3(rnd() - 0.5, rnd() - 0.5, rnd() - 0.5).normalize();
    const big = rnd();
    fl.push({
      set: Math.floor(rnd() * SHAPES.length),
      x: wide ? (rnd() - 0.5) * 6 : gauss() * 1.1, z: (rnd() < 0.12 ? 3 + rnd() * 6 : (rnd() - 0.5) * 6),
      y0: rnd(), v: 0.006 + Math.pow(rnd(), 1.8) * 0.06, dx: (rnd() - 0.5) * 0.5, sw: rnd() * 6.283, swA: 0.02 + rnd() * 0.08,
      s: 0.003 + Math.pow(big, 5) * 0.075 + rnd() * 0.004, sq: [0.7 + rnd() * 0.6, 0.7 + rnd() * 0.6, 0.7 + rnd() * 0.6],
      ax, spin: (0.08 + Math.pow(rnd(), 2) * 1.4) * (rnd() < 0.5 ? -1 : 1), q0: new THREE.Quaternion().setFromEuler(new THREE.Euler(rnd() * 6, rnd() * 6, rnd() * 6)),
      on: rnd(),
    });
  }
  const qs = new THREE.Quaternion();

  // the sun in his hand (61)
  const sunStar = new THREE.Sprite(new THREE.SpriteMaterial({ map: starTex, blending: THREE.AdditiveBlending, depthWrite: false, depthTest: false, color: 0xfff3dc })); sunStar.renderOrder = 7; scene.add(sunStar);
  const sunGlow = new THREE.Sprite(new THREE.SpriteMaterial({ map: glowTex, blending: THREE.AdditiveBlending, depthWrite: false, depthTest: false, color: 0xffe2b0 })); sunGlow.renderOrder = 7; scene.add(sunGlow);

  // particles, one system per place
  const parts = SCENES.map((s) => { const p = makeParts(s.fx.parts, HH); scene.add(p); return p; });

  const composer = new EffectComposer(renderer);
  composer.addPass(new RenderPass(scene, camera));
  const bloom = new UnrealBloomPass(new THREE.Vector2(256, 256), 0.4, 0.55, 0.9); composer.addPass(bloom);
  composer.addPass(new OutputPass());
  const grade = new ShaderPass(gradeShader); composer.addPass(grade);

  let aspect = 1;
  function resize(w, h) {
    aspect = w / h; renderer.setSize(w, h, false); composer.setSize(w, h);
    camera.aspect = aspect; camera.updateProjectionMatrix(); U.sa.value = aspect;
    grade.uniforms.res.value.set(w * dpr, h * dpr);
    nebula.material.uniforms.px.value = dpr * h / 900;
    parts.forEach((p) => { p.material.uniforms.px.value = dpr * h / 900; p.material.uniforms.box.value.set(2 * HH * aspect * 1.15, 2 * HH, 14); });
  }

  /* ---- framing: he is always the same size and in the same place ---- */
  const kOf = (i) => { const ia = images[i].width / images[i].height; return aspect > ia ? [1, ia / aspect] : [aspect / ia, 1]; };
  const P = (i) => [SCENES[i].x, (SCENES[i].head + SCENES[i].feet) / 2];
  const zoomFor = (i, ph) => Math.max(1.02, ph * kOf(i)[1] / (SCENES[i].feet - SCENES[i].head));
  function clampAnchor(i, z, sx, sy) {
    const k = kOf(i), [px, py] = P(i), m = 0.012;
    const lo = [1 - (1 - px) * z / k[0] + m, 1 - (1 - py) * z / k[1] + m], hi = [px * z / k[0] - m, py * z / k[1] - m];
    return [Math.min(hi[0], Math.max(lo[0], sx)), Math.min(hi[1], Math.max(lo[1], sy))];
  }
  const toScreen = (i, z, a, pan, ux, uy) => { const k = kOf(i), [px, py] = P(i); return [a[0] - pan[0] + (ux - px) * z / k[0], a[1] - pan[1] + (uy - py) * z / k[1]]; };
  const toWorld = (sx, sy) => [(sx - 0.5) * 2 * HH * aspect, (0.5 - sy) * 2 * HH];

  const D = 8, WIN = 2.6;                                         // seconds per place, seconds of change
  const mouse = { x: 0, y: 0, sx: 0, sy: 0 };
  const m4 = new THREE.Matrix4(), q = new THREE.Quaternion(), e = new THREE.Euler(), sv = new THREE.Vector3(), pv = new THREE.Vector3();
  const c3 = new THREE.Color();

  // u = chapter position from the scroll: 0 = first place … N-1 = last place
  function frame(t, intro, scroll, u) {
    const N = SCENES.length;
    u = Math.min(N - 1, Math.max(0, u));
    const ia = Math.min(N - 1, Math.floor(u)), ib = Math.min(N - 1, ia + 1);
    const fu = u - ia;
    const tre = ia === ib ? 0 : Math.min(1, Math.max(0, (fu - 0.18) / 0.64));   // the change fills the middle of each step
    const mixE = sstep(0.15, 0.85, tre);
    const wA = 1 - mixE, wB = mixE;
    const A = SCENES[ia], B = SCENES[ib];

    mouse.sx += (mouse.x - mouse.sx) * 0.05; mouse.sy += (mouse.y - mouse.sy) * 0.05;
    const pan = [mouse.sx * 0.006, mouse.sy * 0.005];
    // his size breathes slowly (a gentle push in, easing out around each change)
    const ph = (aspect < 1 ? 0.16 : 0.22) * (1 + 0.07 * (0.5 - 0.5 * Math.cos(2 * Math.PI * u))) * (1 + scroll * 0.3) * lerp(0.94, 1, intro);
    const za = zoomFor(ia, ph), zb = zoomFor(ib, ph);
    // one shared spot for him in every photo: the point closest to the ideal that all photos can reach
    const ideal = [0.5, aspect < 1 ? 0.45 : 0.42];
    let lo = [-9, -9], hi = [9, 9];
    for (let i = 0; i < N; i++) {
      const z = zoomFor(i, ph), a0 = clampAnchor(i, z, -9, -9), a1 = clampAnchor(i, z, 9, 9);
      lo = [Math.max(lo[0], a0[0]), Math.max(lo[1], a0[1])]; hi = [Math.min(hi[0], a1[0]), Math.min(hi[1], a1[1])];
    }
    const shared = [0, 1].map((j) => lo[j] <= hi[j] ? Math.min(hi[j], Math.max(lo[j], ideal[j])) : (lo[j] + hi[j]) / 2);
    const aa = clampAnchor(ia, za, ...shared), ab = clampAnchor(ib, zb, ...shared);

    U.texA.value = texs[ia]; U.texB.value = texs[ib];
    U.aspA.value = images[ia].width / images[ia].height; U.aspB.value = images[ib].width / images[ib].height;
    U.fA.value.set(...P(ia)); U.fB.value.set(...P(ib)); U.sA.value.set(...aa); U.sB.value.set(...ab);
    U.zA.value = za; U.zB.value = zb; U.pan.value.set(...pan);
    U.reveal.value = tre <= 0 ? -1 : tre >= 1 ? 9 : lerp(-0.25, 2.3, Math.pow(sstep(0, 1, tre), 1.35));
    U.glow.value = Math.sin(Math.PI * Math.min(1, tre * 1.25)) * (tre > 0 ? 1 : 0);

    const fA_ = toScreen(ia, za, aa, pan, A.x, A.feet), hA_ = toScreen(ia, za, aa, pan, A.x, A.head);
    const fB_ = toScreen(ib, zb, ab, pan, B.x, B.feet), hB_ = toScreen(ib, zb, ab, pan, B.x, B.head);
    const feet = lerpA(fA_, fB_, mixE), head = lerpA(hA_, hB_, mixE);
    const sph = Math.max(0.05, feet[1] - head[1]);
    U.p.value.set(feet[0], (feet[1] + head[1]) / 2); U.ph.value = sph; U.t.value = t;

    // look of the place (blended through the change)
    const L = (key) => Array.isArray(A.look[key]) ? lerpA(A.look[key], B.look[key], mixE) : lerp(A.look[key], B.look[key], mixE);
    U.tint.value.set(...L('tint')); U.sat.value = L('sat'); U.keepMin.value = lerp(L('keep'), L('keep') * 0.6, scroll);
    U.lightCol.value.set(...L('light')); U.poolK.value = L('pool') * (0.85 + 0.15 * intro); U.shaftK.value = L('shaft');
    U.dark.value = lerp(1, 0.6, scroll);

    const F = (key) => wA * (A.fx[key] || 0) + wB * (B.fx[key] || 0);
    const flick = 0.95 + 0.05 * Math.sin(t * 2.1) * Math.sin(t * 3.3);
    const lc = L('light');

    // shaft
    const [wx, wy] = toWorld(feet[0], feet[1]);
    const wph = sph * 2 * HH;
    const len = HH * 1.25 + 2 - wy;
    shaft.position.set(wx, wy, 0); shaft.rotation.y = mouse.sx * 0.35;
    const wr = Math.max(0.3, wph * 0.9);
    beam.scale.set(wr, len, wr); core.scale.set(wr * 0.35, len, wr * 0.35);
    const bk = F('beam') * flick * (1 - scroll * 0.4);
    [beam, core].forEach((m, i) => { m.material.uniforms.t.value = t; m.material.uniforms.k.value = bk * (i ? 0.8 : 1); m.material.uniforms.col.value.setRGB(...lc); });

    // nebula: above his head, or (under the star trails) at the celestial pole
    const nk = F('nebula');
    const clampS = (v) => [Math.min(0.85, Math.max(0.15, v[0])), Math.min(0.5, Math.max(0.15, v[1]))];
    const nebScreen = (S, i, z, a) => S.fx.nebulaAt ? clampS(toScreen(i, z, a, pan, ...S.fx.nebulaAt)) : [toScreen(i, z, a, pan, S.x, S.head)[0], Math.max(0.16, toScreen(i, z, a, pan, S.x, S.head)[1] - 0.24)];
    const nsA = nebScreen(A, ia, za, aa), nsB = nebScreen(B, ib, zb, ab);
    const ns = (A.fx.nebula && B.fx.nebula) ? lerpA(nsA, nsB, mixE) : (A.fx.nebula ? nsA : nsB);
    const [nx, ny] = toWorld(...ns);
    const neb = HH * 0.2;
    nebula.position.set(nx, ny, 0); nebula.scale.setScalar(neb / 2.4); nebula.rotation.set(0.45, t * 0.05 + mouse.sx * 0.3, 0.15);
    nebula.visible = nk > 0.01;
    const tone = lerpA(A.fx.nebulaTone || [1, 1, 1], B.fx.nebulaTone || [1, 1, 1], mixE);
    nebula.material.uniforms.t.value = t; nebula.material.uniforms.k.value = nk * flick; nebula.material.uniforms.col.value.setRGB(...tone);
    halo.position.set(nx, ny, 0); halo.scale.set(neb * 3, neb * 4, 1); halo.material.opacity = 0.1 * nk; halo.visible = nk > 0.01;

    // rising stones
    const rk = F('rocks');
    rockSets.forEach((m) => { m.count = 0; m.visible = rk > 0.01; });
    if (rk > 0.01) {
      const rs = Math.max(0.6, wph * 1.6);
      for (let i = 0; i < fl.length; i++) {
        const fr = fl[i];
        if (fr.on > rk) continue;                                        // fewer stones where the place asks for fewer
        const y = ((fr.y0 + t * fr.v) % 1);
        const fade = sstep(0, 0.07, y) * sstep(1, 0.7, y);
        pv.set(fr.x * rs + fr.dx * y * rs + Math.sin(t * 0.4 + fr.sw) * fr.swA * rs, y * len * 0.98 - 0.3, fr.z);
        qs.setFromAxisAngle(fr.ax, t * fr.spin); q.copy(fr.q0).premultiply(qs);
        const sc = fr.s * HH * 2 * 0.3 * fade + 1e-4; sv.set(sc * fr.sq[0], sc * fr.sq[1], sc * fr.sq[2]);
        m4.compose(pv, q, sv); const m = rockSets[fr.set]; m.setMatrixAt(m.count++, m4);
      }
      rockSets.forEach((m) => { m.instanceMatrix.needsUpdate = true; });
    }
    rockMat.color.setRGB(...lerpA([0.49, 0.5, 0.52], [lc[0] * 0.5, lc[1] * 0.5, lc[2] * 0.5], 0.4));

    // the sun he holds
    const flareOf = (S, i, z, a) => S.fx.flare ? toScreen(i, z, a, pan, ...S.fx.flare) : null;
    const fA2 = flareOf(A, ia, za, aa), fB2 = flareOf(B, ib, zb, ab);
    const fw = (fA2 ? wA : 0) + (fB2 ? wB : 0);
    sunStar.visible = sunGlow.visible = fw > 0.01;
    if (fw > 0.01) {
      const fp = fA2 && fB2 ? lerpA(fA2, fB2, mixE) : (fA2 || fB2);
      const [sx, sy] = toWorld(...fp);
      const pulse = 1 + 0.05 * Math.sin(t * 1.7);
      sunStar.position.set(sx, sy, 1); sunStar.scale.setScalar(wph * 1.1 * pulse); sunStar.material.rotation = t * 0.04; sunStar.material.opacity = fw;
      sunGlow.position.set(sx, sy, 1); sunGlow.scale.setScalar(wph * 1.6 * pulse); sunGlow.material.opacity = 0.55 * fw;
    }

    // atmosphere of each place
    parts.forEach((p, i) => {
      const w = i === ia ? wA : i === ib ? wB : 0;
      p.visible = w > 0.01;
      const u = p.material.uniforms; u.t.value = t; u.k.value = w * (1 - scroll * 0.3);
      const band = p.userData.P.band;
      const y0 = (0.5 - band[1]) * 2 * HH;                 // band is in screen fractions from the top
      u.y0.value = y0; u.box.value.y = (band[1] - band[0]) * 2 * HH;
    });

    // light on the stones follows the place
    const kd = lerpA(A.fx.key, B.fx.key, mixE);
    key.position.set(kd[0] * 10, kd[1] * 10, kd[2] * 10); key.color.setRGB(...lc); key.intensity = 2.4;
    hemi.color.setRGB(lc[0] * 0.6, lc[1] * 0.6, lc[2] * 0.6);

    grade.uniforms.t.value = t; grade.uniforms.fadeIn.value = Math.min(1, intro * 2.5);
    composer.render();
    return { scene: mixE > 0.5 ? ib : ia, tr: Math.sin(Math.PI * tre) * (tre > 0 ? 1 : 0) };
  }

  // if the machine struggles, render fewer pixels rather than drop frames
  let budget = { n: 0, sum: 0, lastT: 0, scale: 1 };
  function adapt(now) {
    if (budget.lastT) { budget.sum += now - budget.lastT; budget.n++; }
    budget.lastT = now;
    if (budget.n === 90) {
      const ms = budget.sum / budget.n;
      if (ms > 24 && budget.scale > 0.6) { budget.scale = Math.max(0.6, budget.scale * 0.8); renderer.setPixelRatio(dpr * budget.scale); composer.setPixelRatio(dpr * budget.scale); }
      budget.n = 0; budget.sum = 0;
    }
  }
  return { resize, frame, adapt, setMouse(x, y) { mouse.x = x; mouse.y = y; }, D };
}
