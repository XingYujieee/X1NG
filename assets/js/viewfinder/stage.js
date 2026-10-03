/* ------------------------------------------------------------------
   Viewfinder stage — the WebGL part of the home hero.

   Four photographs are shown whole, at full resolution, as the landscapes
   they are: the person stays small inside a big place. Each photo has a
   depth map (Depth Anything V2) that is used — gently — for:
     · parallax when the pointer moves (near things move more),
     · a slow dolly while you scroll (near things grow a little faster),
     · the change between places: the new place replaces the old one from
       the horizon towards you (sky → far ridges → ground at your feet),
       with a thin bank of light mist travelling at the front,
     · focus: when a chapter locks, or you click, the lens racks focus
       to a depth and then settles back to everything sharp.
   On top: a few effects that belong to each place (chaff in the noon
   wind, snow at Meili, wind-blown sand at sunset, the Lusion-style
   nebula and rising stones under the star trails).
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

/* Each place: where he is in the photo (image uv, y down), its light, and its effects. */
export const SCENES = [
  { id: '61', x: 0.494, head: 0.400, feet: 0.609, time: 'Noon', zh: '正午', title: 'Hay Bale Canyon', titleZh: '草垛峡谷', place: 'On the road',
    look: { tint: [1.02, 1.0, 0.98], sat: 1.04, light: [1.0, 0.93, 0.8] }, fx: { parts: 'chaff', sun: [0.447, 0.391] } },
  { id: '42', x: 0.358, head: 0.564, feet: 0.700, time: 'Afternoon', zh: '午后', title: 'Framed Summit', titleZh: '岩隙中的雪山', place: 'Meili, Yunnan',
    look: { tint: [0.97, 1.0, 1.04], sat: 1.0, light: [0.82, 0.9, 1.0] }, fx: { parts: 'snow' } },
  { id: '66', x: 0.418, head: 0.556, feet: 0.624, time: 'Sunset', zh: '日落', title: 'Red on the Ridge', titleZh: '山脊上的红', place: 'Qinghai–Gansu',
    look: { tint: [1.05, 0.99, 0.93], sat: 1.04, light: [1.0, 0.82, 0.6] }, fx: { parts: 'sand' } },
  { id: '65', x: 0.552, head: 0.588, feet: 0.655, time: 'Night', zh: '夜', title: 'Star Trails over Yardang', titleZh: '雅丹星轨', place: 'Qinghai–Gansu',
    look: { tint: [0.96, 0.99, 1.05], sat: 1.0, light: [0.75, 0.85, 1.0] }, fx: { parts: 'stars', nebula: [0.492, 0.407], rocks: true, beam: true } },
];

/* ---------- the photographs ---------- */
const bgShader = {
  uniforms: {
    texA: { value: null }, texB: { value: null }, depA: { value: null }, depB: { value: null },
    aspA: { value: 1.5 }, aspB: { value: 1.5 }, sa: { value: 1.78 },
    cA: { value: new THREE.Vector2(.5, .5) }, cB: { value: new THREE.Vector2(.5, .5) }, zA: { value: 1 }, zB: { value: 1 },
    dollyA: { value: 0 }, dollyB: { value: 0 }, mouse: { value: new THREE.Vector2() }, par: { value: 0.006 },
    prog: { value: 0 }, t: { value: 0 },
    focusD: { value: 0.5 }, blurK: { value: 0 }, px: { value: new THREE.Vector2(1 / 1280, 1 / 720) },
    tint: { value: new THREE.Vector3(1, 1, 1) }, sat: { value: 1 }, light: { value: new THREE.Vector3(1, 1, 1) },
    expo: { value: 0 }, subj: { value: new THREE.Vector3(.5, .5, .1) }, pool: { value: 0.18 },
  },
  vertexShader: `varying vec2 vS; void main(){ vS = uv; gl_Position = vec4(position.xy, 0.9999, 1.0); }`,
  fragmentShader: `
    uniform sampler2D texA, texB, depA, depB;
    uniform float aspA, aspB, sa, zA, zB, dollyA, dollyB, par, prog, t, focusD, blurK, sat, expo, pool;
    uniform vec2 cA, cB, mouse, px; uniform vec3 tint, light, subj;
    varying vec2 vS;
    vec2 K(float ia){ return sa > ia ? vec2(1.0, ia / sa) : vec2(sa / ia, 1.0); }
    float depth(sampler2D dp, vec2 u){ return texture2D(dp, vec2(u.x, 1.0 - u.y)).r; }
    // where screen point s lands in the photo, with depth parallax and dolly
    vec2 place(vec2 s, float ia, vec2 c, float z, float dolly, sampler2D dp, out float d){
      vec2 k = K(ia);
      vec2 u0 = c + (s - 0.5) * k / z;
      d = depth(dp, u0);
      return c + (s - 0.5 + mouse * par * d) * k / (z * (1.0 + dolly * d));
    }
    vec3 photo(sampler2D tx, vec2 u){ return texture2D(tx, vec2(u.x, 1.0 - u.y)).rgb; }
    // a lens: blur grows with distance from the focal depth (only while focusing)
    vec3 lens(sampler2D tx, vec2 u, float d, float ia){
      float coc = clamp(abs(d - focusD) * blurK, 0.0, 1.0);
      if (coc < 0.02) return photo(tx, u);
      vec2 k = K(ia);
      vec3 acc = photo(tx, u); float w = 1.0;
      for (int i = 0; i < 12; i++) {
        float a = float(i) * 2.39996, r = sqrt((float(i) + 0.5) / 12.0);
        vec2 o = vec2(cos(a), sin(a)) * r * coc * 9.0 * px * vec2(1.0, 1.0);
        acc += photo(tx, u + o * k); w += 1.0;
      }
      return acc / w;
    }
    float h(vec2 q){ return fract(sin(dot(q, vec2(127.1, 311.7))) * 43758.5453); }
    float vn(vec2 q){ vec2 i = floor(q), f = fract(q); f = f * f * (3. - 2. * f);
      return mix(mix(h(i), h(i + vec2(1, 0)), f.x), mix(h(i + vec2(0, 1)), h(i + vec2(1, 1)), f.x), f.y); }
    void main(){
      vec2 s = vec2(vS.x, 1.0 - vS.y);
      float dA, dB;
      vec2 uA = place(s, aspA, cA, zA, dollyA, depA, dA);
      vec3 col;
      if (prog <= 0.0) {
        col = lens(texA, uA, dA, aspA);
      } else {
        vec2 uB = place(s, aspB, cB, zB, dollyB, depB, dB);
        // the horizon sweep: far first, near last, the sky from the top down
        vec2 np = s * vec2(sa, 1.0) * 3.0;
        float n = 0.6 * vn(np + t * 0.05) + 0.4 * vn(np * 2.7 - t * 0.08);
        float key = max(dA, dB) * 0.9 + s.y * 0.12 + (n - 0.5) * 0.1;
        float P = prog * 1.32 - 0.16;
        float m = smoothstep(key - 0.045, key + 0.045, P);
        float front = exp(-pow((P - key) / 0.065, 2.0));
        // the mist bends the light a touch as it passes
        vec2 wob = vec2(0.0, (vn(np * 4.0 + t * 0.3) - 0.5) * 0.004 * front);
        vec3 a = m < 0.999 ? lens(texA, uA + wob, dA, aspA) : vec3(0.0);
        vec3 b = m > 0.001 ? lens(texB, uB + wob, dB, aspB) : vec3(0.0);
        col = mix(a, b, m);
        float land = smoothstep(0.04, 0.22, max(dA, dB));             // the mist lies on the land, the sky just changes
        col = mix(col, light * 0.9, front * 0.13 * land);
      }
      // grade: true to the photo, nudged towards the hour
      float l = dot(col, vec3(0.299, 0.587, 0.114));
      col = mix(vec3(l), col, sat) * tint;
      // a soft pool of light on him so the eye finds him
      vec2 dd = (s - subj.xy) * vec2(sa, 1.0) / max(subj.z, 0.02);
      col *= 1.0 + pool * exp(-dot(dd, dd) * 0.9);
      // long exposure: the frame gathers light, highlights roll off like film
      col = col * (1.0 + expo * 1.6) / (1.0 + col * expo * 0.55);
      gl_FragColor = vec4(col, 1.0);
    }`,
};

/* ---------- small textures ---------- */
const canvasTex = (draw, size = 128) => { const c = document.createElement('canvas'); c.width = c.height = size; draw(c.getContext('2d'), size); const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; return t; };
const glowTex = canvasTex((x, S) => {
  const g = x.createRadialGradient(S / 2, S / 2, 0, S / 2, S / 2, S / 2);
  g.addColorStop(0, 'rgba(255,255,255,1)'); g.addColorStop(0.18, 'rgba(240,244,255,0.5)'); g.addColorStop(0.5, 'rgba(210,220,240,0.1)'); g.addColorStop(1, 'rgba(0,0,0,0)');
  x.fillStyle = g; x.fillRect(0, 0, S, S);
});
const starTex = canvasTex((x, S) => {
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

/* ---------- atmosphere particles ---------- */
const PARTS = {
  chaff: { n: 160, size: [2.5, 7], col: [1.0, 0.88, 0.6], vel: [0.35, 0.22, 0], sway: 0.4, tw: 0.3, glow: 1, band: [0.0, 0.95], soft: 1, alpha: 0.9 },
  snow:  { n: 520, size: [2, 9], col: [0.96, 0.98, 1.0], vel: [0.14, -0.6, 0], sway: 0.25, tw: 0.1, glow: 0, band: [0.0, 1.0], soft: 1, alpha: 0.85 },
  sand:  { n: 900, size: [1.4, 4], col: [1.0, 0.9, 0.74], vel: [-1.8, 0.06, 0], sway: 0.1, tw: 0.2, glow: 0, band: [0.5, 1.0], soft: 0.6, alpha: 1.3, streak: 0.7 },
  stars: { n: 260, size: [1, 3.6], col: [0.86, 0.9, 1.0], vel: [0, 0.02, 0], sway: 0.02, tw: 1.0, glow: 1, band: [0.0, 0.6], soft: 0.3, alpha: 1 },
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
      sway: { value: P.sway }, tw: { value: P.tw }, smin: { value: P.size[0] }, smax: { value: P.size[1] }, soft: { value: P.soft },
      streak: { value: P.streak || 0 }, expo: { value: 0 }, shift: { value: new THREE.Vector2() },
    },
    vertexShader: `uniform float t, px, sway, tw, smin, smax, y0, expo; uniform vec3 box, vel; uniform vec2 shift; attribute float seed; varying float vA; varying float vS;
      void main(){
        vec3 u = fract(position + vel * t * (0.6 + seed * 0.8) / box);
        vec3 q = vec3((u.x - 0.5) * box.x, y0 + u.y * box.y, (u.z - 0.5) * box.z - 1.0);
        q.x += sin(t * (0.6 + seed) + seed * 40.0) * sway; q.y += cos(t * (0.5 + seed * 0.7) + seed * 17.0) * sway * 0.5;
        q.xy += shift * (q.z + 8.0) * 0.08;                    // nearer flakes drift more with the pointer
        vec4 mv = modelViewMatrix * vec4(q, 1.0); gl_Position = projectionMatrix * mv;
        vA = mix(1.0, 0.25 + 0.75 * pow(0.5 + 0.5 * sin(t * (1.0 + seed * 3.0) + seed * 60.0), 2.0), tw)
           * smoothstep(0.0, 0.08, u.y) * smoothstep(1.0, 0.85, u.y) * smoothstep(0.0, 0.1, u.x) * smoothstep(1.0, 0.9, u.x);
        vS = seed;
        gl_PointSize = mix(smin, smax, pow(seed, 2.5)) * px * 20.0 / -mv.z * (1.0 + expo * 1.5); }`,
    fragmentShader: `uniform float k, soft, streak, alpha, expo; uniform vec3 col; varying float vA; varying float vS;
      void main(){ vec2 d = gl_PointCoord - 0.5; d.y *= mix(1.0, 4.0, clamp(streak + expo, 0.0, 1.0));
        float a = smoothstep(0.5, 0.5 - 0.5 * soft, length(d));
        gl_FragColor = vec4(col, min(1.0, a * vA * k * 0.95 * alpha)); }`,
  });
  const pts = new THREE.Points(g, m); pts.frustumCulled = false; pts.renderOrder = 6; pts.userData.P = P; return pts;
}

/* ---------- the nebula (night only) ---------- */
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
    uniforms: { t: { value: 0 }, px: { value: 1 }, k: { value: 1 } },
    vertexShader: `uniform float t; uniform float px; attribute vec2 aux; varying float vA;
      void main(){ vec3 q = position; float r = length(q.xz);
        float ang = t * (0.55 / (r + 0.6)); float c = cos(ang), s = sin(ang); q.xz = mat2(c,-s,s,c) * q.xz;
        q.y += sin(t*0.4 + r*1.7 + aux.x*6.28)*0.12;
        vec4 mv = modelViewMatrix * vec4(q,1.); gl_Position = projectionMatrix * mv;
        float tw = 0.45 + 0.55 * pow(0.5 + 0.5*sin(t*(1.5+aux.x*3.) + aux.x*40.), 3.);
        vA = tw * (1.0 - smoothstep(1.5, 4.0, length(q)) * 0.75);
        gl_PointSize = aux.y * px * 36.0 / -mv.z; }`,
    fragmentShader: `uniform float k; varying float vA; void main(){ vec2 d = gl_PointCoord - .5; float a = smoothstep(.5, .0, length(d));
      gl_FragColor = vec4(vec3(0.92,0.95,1.0) * a * vA * 0.24 * k, 1.0); }`,
  });
  const pts = new THREE.Points(g, m); pts.frustumCulled = false; return pts;
}

/* ---------- stones (night only): many shapes, sizes and tumbles ---------- */
function noise3(x, y, z) { return Math.sin(x * 1.7 + Math.sin(y * 2.3 + z)) * Math.cos(z * 1.9 + Math.sin(x * 1.3)); }
function rockGeometry(k, detail, sq) {
  let g = new THREE.IcosahedronGeometry(1, detail); const p = g.attributes.position; const v = new THREE.Vector3();
  for (let i = 0; i < p.count; i++) {
    v.fromBufferAttribute(p, i);
    const n = 1 + 0.32 * noise3(v.x * 2 + k, v.y * 2 - k, v.z * 2 + k * 0.5) + 0.12 * noise3(v.x * 6 - k, v.y * 6, v.z * 6 + k);
    v.multiplyScalar(n); v.set(v.x * sq[0], v.y * sq[1], v.z * sq[2]); p.setXYZ(i, v.x, v.y, v.z);
  }
  if (g.index) g = g.toNonIndexed();
  g.computeVertexNormals(); return g;
}

const beamMat = () => new THREE.ShaderMaterial({
  transparent: true, depthWrite: false, depthTest: false, blending: THREE.AdditiveBlending, side: THREE.DoubleSide,
  uniforms: { k: { value: 0 } },
  vertexShader: `varying vec3 vN; varying vec3 vV; varying float vY;
    void main(){ vec4 w = modelMatrix*vec4(position,1.); vN = normalize(mat3(modelMatrix)*normal); vV = normalize(cameraPosition - w.xyz); vY = uv.y; gl_Position = projectionMatrix*viewMatrix*w; }`,
  fragmentShader: `uniform float k; varying vec3 vN; varying vec3 vV; varying float vY;
    void main(){ float rim = pow(abs(dot(normalize(vN), vV)), 2.5); float fall = smoothstep(0.0, 0.15, vY) * (0.2 + 0.8 * pow(vY, 1.4));
      gl_FragColor = vec4(vec3(0.8, 0.87, 1.0) * rim * fall * 0.16 * k, 1.0); }`,
});

const gradeShader = {
  uniforms: { tDiffuse: { value: null }, t: { value: 0 }, res: { value: new THREE.Vector2(1, 1) }, fade: { value: 0 }, vig: { value: 1 } },
  vertexShader: `varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.); }`,
  fragmentShader: `uniform sampler2D tDiffuse; uniform float t, fade, vig; uniform vec2 res; varying vec2 vUv;
    float h(vec2 p){ return fract(sin(dot(p, vec2(12.9898,78.233)) + t*7.) * 43758.5453); }
    void main(){
      vec3 col = texture2D(tDiffuse, vUv).rgb;
      vec2 e = (vUv - .5) * vec2(res.x / res.y, 1.);
      col *= mix(1.0 - 0.32 * vig, 1.0, smoothstep(1.25, 0.45, length(e * vec2(.7, 1.0))));
      col += (h(vUv * res) - .5) * 0.016;                              // a whisper of grain, no more
      gl_FragColor = vec4(col * fade, 1.);
    }`,
};

/* ================================================================== */
export function createStage(canvas, images, depths, opts = {}) {
  const lite = opts.lite ?? false;
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: false, powerPreference: 'high-performance' });
  const dpr = Math.min(window.devicePixelRatio || 1, lite ? 1.5 : 2);
  renderer.setPixelRatio(dpr);
  renderer.toneMapping = THREE.NoToneMapping;
  const maxAniso = renderer.capabilities.getMaxAnisotropy();

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(30, 1, 0.1, 200);
  camera.position.set(0, 0, 20);
  const HH = 20 * Math.tan(THREE.MathUtils.degToRad(15));

  const mkTex = (img, color) => { const t = new THREE.Texture(img); if (color) t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = maxAniso; t.generateMipmaps = true; t.minFilter = THREE.LinearMipmapLinearFilter; t.magFilter = THREE.LinearFilter; t.needsUpdate = true; return t; };
  const texs = images.map((im) => mkTex(im, true));
  const deps = depths.map((im) => mkTex(im, false));
  // CPU copies of the depth maps (small) for picking a focal depth under the pointer
  const depthCPU = depths.map((im) => {
    const w = 256, h = Math.round(256 * im.height / im.width); const c = document.createElement('canvas'); c.width = w; c.height = h;
    const x = c.getContext('2d', { willReadFrequently: true }); x.drawImage(im, 0, 0, w, h); return { w, h, data: x.getImageData(0, 0, w, h).data };
  });
  const depthAtUV = (i, u, v) => { const D = depthCPU[i]; const x = Math.min(D.w - 1, Math.max(0, Math.round(u * D.w))), y = Math.min(D.h - 1, Math.max(0, Math.round(v * D.h))); return D.data[(y * D.w + x) * 4] / 255; };

  const bg = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), new THREE.ShaderMaterial({ ...bgShader, uniforms: THREE.UniformsUtils.clone(bgShader.uniforms), depthWrite: false, depthTest: false }));
  bg.frustumCulled = false; bg.renderOrder = -10; scene.add(bg);
  const U = bg.material.uniforms;

  const key = new THREE.DirectionalLight(0xdfe8ff, 2.2); key.position.set(0, 10, 4); scene.add(key);
  scene.add(new THREE.HemisphereLight(0x8f98aa, 0x0d0e12, 0.5));

  // night: shaft, nebula, stones
  const night = new THREE.Group(); scene.add(night);
  const beamG = new THREE.CylinderGeometry(0.3, 1.0, 1, 40, 1, true); beamG.translate(0, 0.5, 0);
  const beam = new THREE.Mesh(beamG, beamMat()); beam.renderOrder = 2; night.add(beam);
  const nebula = makeNebula(lite ? 6000 : 12000); nebula.renderOrder = 3; scene.add(nebula);
  const halo = new THREE.Sprite(new THREE.SpriteMaterial({ map: glowTex, blending: THREE.AdditiveBlending, depthWrite: false, depthTest: false, opacity: 0 })); halo.renderOrder = 3; scene.add(halo);
  const rockMat = new THREE.MeshStandardMaterial({ color: 0x6f7279, roughness: 0.95 });
  const SHAPES = [rockGeometry(1.3, 1, [1, 0.75, 0.9]), rockGeometry(4.1, 1, [1.25, 0.35, 0.9]), rockGeometry(7.7, 1, [0.55, 0.55, 1.6]), rockGeometry(2.9, 0, [1, 0.8, 1])];
  const FL = lite ? 50 : 100;
  const rockSets = SHAPES.map((g) => { const m = new THREE.InstancedMesh(g, rockMat, FL); m.frustumCulled = false; m.renderOrder = 4; m.count = 0; night.add(m); return m; });
  const gauss = () => (rnd() + rnd() + rnd() - 1.5) / 1.5;
  const fl = [];
  for (let i = 0; i < FL; i++) {
    const wide = rnd() < 0.2;
    fl.push({
      set: Math.floor(rnd() * SHAPES.length), x: wide ? (rnd() - 0.5) * 7 : gauss() * 1.3, z: (rnd() < 0.12 ? 3 + rnd() * 6 : (rnd() - 0.5) * 6),
      y0: rnd(), v: 0.006 + Math.pow(rnd(), 1.8) * 0.05, dx: (rnd() - 0.5) * 0.5, sw: rnd() * 6.283, swA: 0.02 + rnd() * 0.08,
      s: 0.003 + Math.pow(rnd(), 5) * 0.06 + rnd() * 0.004, sq: [0.7 + rnd() * 0.6, 0.7 + rnd() * 0.6, 0.7 + rnd() * 0.6],
      ax: new THREE.Vector3(rnd() - 0.5, rnd() - 0.5, rnd() - 0.5).normalize(), spin: (0.08 + Math.pow(rnd(), 2) * 1.4) * (rnd() < 0.5 ? -1 : 1),
      q0: new THREE.Quaternion().setFromEuler(new THREE.Euler(rnd() * 6, rnd() * 6, rnd() * 6)),
    });
  }
  const sunStar = new THREE.Sprite(new THREE.SpriteMaterial({ map: starTex, blending: THREE.AdditiveBlending, depthWrite: false, depthTest: false, color: 0xfff3dc })); sunStar.renderOrder = 7; scene.add(sunStar);
  const sunGlow = new THREE.Sprite(new THREE.SpriteMaterial({ map: glowTex, blending: THREE.AdditiveBlending, depthWrite: false, depthTest: false, color: 0xffe2b0 })); sunGlow.renderOrder = 7; scene.add(sunGlow);
  const parts = SCENES.map((s) => { const p = makeParts(s.fx.parts, HH); scene.add(p); return p; });

  const composer = new EffectComposer(renderer);
  composer.addPass(new RenderPass(scene, camera));
  const bloom = new UnrealBloomPass(new THREE.Vector2(256, 256), 0.22, 0.5, 0.93); composer.addPass(bloom);
  composer.addPass(new OutputPass());
  const grade = new ShaderPass(gradeShader); composer.addPass(grade);

  let aspect = 1, W = 1, H = 1;
  function resize(w, h) {
    W = w; H = h; aspect = w / h; renderer.setSize(w, h, false); composer.setSize(w, h);
    camera.aspect = aspect; camera.updateProjectionMatrix(); U.sa.value = aspect;
    U.px.value.set(1 / (w * 1), 1 / (h * 1));
    grade.uniforms.res.value.set(w * dpr, h * dpr);
    nebula.material.uniforms.px.value = dpr * h / 900;
    parts.forEach((p) => { p.material.uniforms.px.value = dpr * h / 900; p.material.uniforms.box.value.set(2 * HH * aspect * 1.15, 2 * HH, 14); });
  }

  /* ---- framing: the whole landscape, nudged towards him only where the screen crops ---- */
  const asp = (i) => images[i].width / images[i].height;
  const kOf = (i) => { const ia = asp(i); return aspect > ia ? [1, ia / aspect] : [aspect / ia, 1]; };
  const P = (i) => [SCENES[i].x, (SCENES[i].head + SCENES[i].feet) / 2];
  const centre = (i, z) => { const k = kOf(i), [px, py] = P(i); const hx = k[0] / z / 2 + 0.004, hy = k[1] / z / 2 + 0.004; return [Math.min(1 - hx, Math.max(hx, px)), Math.min(1 - hy, Math.max(hy, lerp(0.5, py, 0.5)))]; };
  const toScreen = (i, z, c, u, v) => { const k = kOf(i); return [0.5 + (u - c[0]) * z / k[0], 0.5 + (v - c[1]) * z / k[1]]; };
  const toUV = (i, z, c, sx, sy) => { const k = kOf(i); return [c[0] + (sx - 0.5) * k[0] / z, c[1] + (sy - 0.5) * k[1] / z]; };
  const toWorld = (sx, sy) => [(sx - 0.5) * 2 * HH * aspect, (0.5 - sy) * 2 * HH];

  const Z0 = 1.07, ZR = 0.06;                                     // a gentle, continuous push through every chapter
  const m4 = new THREE.Matrix4(), q = new THREE.Quaternion(), qs = new THREE.Quaternion(), sv = new THREE.Vector3(), pv = new THREE.Vector3();
  let last = null;

  /* state: { mouse:[x,y] (-1..1), expo 0..1, focus:{d, k} , fade 0..1, print 0..1 } */
  function frame(t, u, st) {
    const N = SCENES.length;
    u = Math.min(N - 1, Math.max(0, u));
    const ia = Math.min(N - 1, Math.floor(u)), ib = Math.min(N - 1, ia + 1);
    const fu = u - ia;
    const prog = ia === ib ? 0 : Math.min(1, Math.max(0, (fu - 0.16) / 0.68));   // the change fills the middle of each step
    const mixE = sstep(0.2, 0.8, prog);
    const A = SCENES[ia], B = SCENES[ib];
    const za = Z0 + ZR * fu, zb = Z0 + ZR * (fu - 1);
    const ca = centre(ia, za), cb = centre(ib, zb);

    U.texA.value = texs[ia]; U.texB.value = texs[ib]; U.depA.value = deps[ia]; U.depB.value = deps[ib];
    U.aspA.value = asp(ia); U.aspB.value = asp(ib);
    U.cA.value.set(...ca); U.cB.value.set(...cb); U.zA.value = za; U.zB.value = zb;
    U.dollyA.value = 0.035 * fu; U.dollyB.value = 0.035 * Math.max(0, fu - 1 + 0.0);
    U.mouse.value.set(st.mouse[0], st.mouse[1]); U.prog.value = ia === ib ? 0 : (prog >= 1 ? 1.0001 : prog);
    if (prog >= 1) { U.texA.value = texs[ib]; U.depA.value = deps[ib]; U.aspA.value = asp(ib); U.cA.value.set(...cb); U.zA.value = zb; U.dollyA.value = 0; U.prog.value = 0; }
    U.t.value = t;
    U.focusD.value = st.focus.d; U.blurK.value = st.focus.k * (prog > 0 && prog < 1 ? 0.3 : 1);
    const L = (k) => lerpA(A.look[k], B.look[k], mixE);
    U.tint.value.set(...L('tint')); U.sat.value = lerp(A.look.sat, B.look.sat, mixE); U.light.value.set(...L('light'));
    U.expo.value = st.expo;

    // where is he now (screen 0..1) — blended through the change
    const fa = toScreen(ia, za, ca, A.x, A.feet), ha = toScreen(ia, za, ca, A.x, A.head);
    const fb = toScreen(ib, zb, cb, B.x, B.feet), hb = toScreen(ib, zb, cb, B.x, B.head);
    const feet = lerpA(fa, fb, mixE), head = lerpA(ha, hb, mixE);
    const ph = Math.max(0.02, feet[1] - head[1]);
    U.subj.value.set(feet[0], (feet[1] + head[1]) / 2, ph);
    U.pool.value = 0.16 * (1 - prog * (1 - prog) * 4);

    // atmosphere of each place
    const wA = 1 - mixE, wB = mixE;
    parts.forEach((p, i) => {
      const w = i === ia ? wA : i === ib ? wB : 0;
      p.visible = w > 0.01; if (!p.visible) return;
      const uu = p.material.uniforms; uu.t.value = t; uu.k.value = w * (1 - st.print * 0.8); uu.expo.value = st.expo; uu.shift.value.set(st.mouse[0], -st.mouse[1]);
      const band = p.userData.P.band; uu.y0.value = (0.5 - band[1]) * 2 * HH; uu.box.value.y = (band[1] - band[0]) * 2 * HH;
    });

    // the sun he holds (noon)
    // things in the sky leave with the sky (the sweep reaches it first)
    const skyA = 1 - sstep(0.0, 0.35, prog), skyB = sstep(0.0, 0.35, prog);
    const sunW = (A.fx.sun ? skyA : 0) + (B.fx.sun && ia !== ib ? skyB : 0);
    sunStar.visible = sunGlow.visible = sunW > 0.01;
    if (sunW > 0.01) {
      const S = A.fx.sun ? A : B, i = A.fx.sun ? ia : ib, z = A.fx.sun ? za : zb, c = A.fx.sun ? ca : cb;
      const [sx, sy] = toWorld(...toScreen(i, z, c, ...S.fx.sun)); const wph = (A.fx.sun ? fa[1] - ha[1] : fb[1] - hb[1]) * 2 * HH;
      const pulse = 1 + 0.05 * Math.sin(t * 1.7) + st.expo * 0.6;
      sunStar.position.set(sx, sy, 1); sunStar.scale.setScalar(wph * 1.1 * pulse); sunStar.material.rotation = t * 0.04; sunStar.material.opacity = sunW;
      sunGlow.position.set(sx, sy, 1); sunGlow.scale.setScalar(wph * 1.7 * pulse); sunGlow.material.opacity = 0.5 * sunW;
    }

    // night: nebula at the celestial pole, a faint shaft on him, stones rising
    const nW = (A.fx.nebula ? skyA : 0) + (B.fx.nebula && ia !== ib ? skyB : 0);
    nebula.visible = halo.visible = night.visible = nW > 0.01;
    if (nW > 0.01) {
      const S = A.fx.nebula ? A : B, i = A.fx.nebula ? ia : ib, z = A.fx.nebula ? za : zb, c = A.fx.nebula ? ca : cb;
      const ns = toScreen(i, z, c, ...S.fx.nebula); const [nx, ny] = toWorld(Math.min(0.85, Math.max(0.15, ns[0])), Math.min(0.5, Math.max(0.12, ns[1])));
      const neb = HH * 0.17;
      nebula.position.set(nx + st.mouse[0] * 0.15, ny - st.mouse[1] * 0.1, 0); nebula.scale.setScalar(neb / 2.4); nebula.rotation.set(0.45, t * 0.05, 0.15);
      nebula.material.uniforms.t.value = t; nebula.material.uniforms.k.value = nW * (1 + st.expo);
      halo.position.copy(nebula.position); halo.scale.set(neb * 3, neb * 4, 1); halo.material.opacity = 0.08 * nW;
      const f2 = A.fx.nebula ? fa : fb, h2 = A.fx.nebula ? ha : hb;
      const [wx, wy] = toWorld(...f2); const wph = (f2[1] - h2[1]) * 2 * HH; const len = HH * 1.3 + 2 - wy;
      night.position.set(wx, wy, 0); night.rotation.y = st.mouse[0] * 0.3;
      const wr = Math.max(0.25, wph * 0.9); beam.scale.set(wr, len, wr); beam.material.uniforms.k.value = nW * (0.8 + st.expo);
      const rs = Math.max(0.6, wph * 1.6);
      rockSets.forEach((m) => { m.count = 0; });
      for (let k = 0; k < fl.length; k++) {
        const fr = fl[k]; const y = ((fr.y0 + t * fr.v) % 1);
        const fade = sstep(0, 0.07, y) * sstep(1, 0.7, y) * nW;
        pv.set(fr.x * rs + fr.dx * y * rs + Math.sin(t * 0.4 + fr.sw) * fr.swA * rs, y * len * 0.98 - 0.3, fr.z);
        qs.setFromAxisAngle(fr.ax, t * fr.spin); q.copy(fr.q0).premultiply(qs);
        const sc = fr.s * HH * 2 * 0.3 * fade + 1e-4; sv.set(sc * fr.sq[0], sc * fr.sq[1], sc * fr.sq[2]);
        m4.compose(pv, q, sv); const m = rockSets[fr.set]; m.setMatrixAt(m.count++, m4);
      }
      rockSets.forEach((m) => { m.instanceMatrix.needsUpdate = true; });
    }

    grade.uniforms.t.value = t; grade.uniforms.fade.value = st.fade; grade.uniforms.vig.value = 1 - st.print * 0.6;
    composer.render();

    last = { ia, ib, za, zb, ca, cb, mixE, prog };
    return {
      scene: mixE > 0.5 ? ib : ia, prog,
      subject: { x: (head[0] + feet[0]) / 2, top: head[1], bottom: feet[1], h: ph },
    };
  }

  // the depth (0 far … 1 near) of whatever is under a screen point, in the photo now on screen
  function depthAt(sx, sy) {
    if (!last) return 0.5;
    const useB = last.mixE > 0.5, i = useB ? last.ib : last.ia;
    const [u, v] = toUV(i, useB ? last.zb : last.za, useB ? last.cb : last.ca, sx, sy);
    return depthAtUV(i, u, v);
  }
  function subjectDepth(i) { const S = SCENES[i]; return depthAtUV(i, S.x, lerp(S.head, S.feet, 0.6)); }

  // render fewer pixels rather than drop frames on slow machines
  const budget = { n: 0, sum: 0, lastT: 0, scale: 1 };
  function adapt(now) {
    if (budget.lastT) { budget.sum += Math.min(100, now - budget.lastT); budget.n++; }
    budget.lastT = now;
    if (budget.n === 90) {
      const ms = budget.sum / budget.n;
      if (ms > 24 && budget.scale > 0.55) { budget.scale = Math.max(0.55, budget.scale * 0.82); renderer.setPixelRatio(dpr * budget.scale); composer.setPixelRatio(dpr * budget.scale); grade.uniforms.res.value.set(W * dpr * budget.scale, H * dpr * budget.scale); }
      budget.n = 0; budget.sum = 0;
    }
  }

  return { resize, frame, adapt, depthAt, subjectDepth, N: SCENES.length };
}
