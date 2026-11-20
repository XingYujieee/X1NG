/* ==========================================================================
   Relief — photographs pressed into plaster (Immersive Garden–style bas-relief).

   Each <img data-relief> becomes a <canvas> that shows the photo as a sculpted
   relief: the height field comes from the photo's own light and shadow (blurred
   luminance), lit by a raking light. As the print scrolls up the screen it
   "develops" from plaster into colour; hovering brings the relief back under
   your cursor, lit from where the pointer is.

   One shared WebGL context renders every print and copies the result into the
   print's own 2D canvas, so DOM layering, clip-path reveals and parallax all
   keep working.
   ========================================================================== */

const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
const fine = matchMedia('(hover: hover) and (pointer: fine)').matches;

const VS = `attribute vec2 p; varying vec2 v; void main(){ v = p * 0.5 + 0.5; gl_Position = vec4(p, 0.0, 1.0); }`;
const FS = `
precision highp float;
uniform sampler2D tex; uniform vec2 scale, off, px, cur; uniform vec3 light; uniform float develop, hover, t, curOn, aspect;
varying vec2 v;
float lum(vec3 c){ return dot(c, vec3(0.299, 0.587, 0.114)); }
float hh(vec2 q){ return fract(sin(dot(q, vec2(127.1, 311.7))) * 43758.5453); }
float vn(vec2 q){ vec2 i = floor(q), f = fract(q); f = f * f * (3.0 - 2.0 * f);
  return mix(mix(hh(i), hh(i + vec2(1, 0)), f.x), mix(hh(i + vec2(0, 1)), hh(i + vec2(1, 1)), f.x), f.y); }
float H(vec2 u){
  // broad forms from a blurred copy, a little fine detail on top
  float b = lum(texture2D(tex, u, 3.5).rgb);
  float m = lum(texture2D(tex, u, 1.5).rgb);
  return b * 0.6 + m * 0.4 + (1.0 - u.y) * 0.06;
}
void main(){
  vec2 u = off + v * scale; u.y = 1.0 - u.y;
  vec3 col = texture2D(tex, u).rgb;
  // Immersive-style: the relief rises out of the wall around the cursor, and sinks back elsewhere
  vec2 dv = (v - cur) * vec2(aspect, 1.0);
  float local = exp(-dot(dv, dv) / 0.05) * curOn;
  float hs = 0.45 + 0.85 * local;
  vec2 e = px * 3.0;
  float hx = H(u + vec2(e.x, 0.0)) - H(u - vec2(e.x, 0.0));
  float hy = H(u - vec2(0.0, e.y)) - H(u + vec2(0.0, e.y));
  vec3 n = normalize(vec3(-hx * 13.0 * hs, -hy * 13.0 * hs, 1.0));
  float lam = max(dot(n, normalize(light)), 0.0);
  float spec = pow(max(dot(reflect(-normalize(light), n), vec3(0.0, 0.0, 1.0)), 0.0), 24.0);
  // plaster: warm white, lit by the raking light
  float cav = smoothstep(0.0, 0.5, H(u));                         // deeper hollows hold a little shadow
  vec3 plaster = vec3(0.91, 0.895, 0.86) * mix(0.82, 0.26 + 0.86 * lam, 0.35 + 0.65 * hs) * (0.82 + 0.18 * cav) + spec * 0.14 * hs;
  plaster += local * 0.04;                                          // the raised part catches a little more light
  // the photograph, with a touch of the relief still in it while hovered
  vec3 photo = col * mix(1.0, 0.72 + 0.55 * lam, hover * 0.75) + spec * hover * 0.18;
  // developing: the colour floods in from the shadows up, with a little noise
  float n2 = vn(v * 7.0) * 0.65 + vn(v * 23.0) * 0.35;
  float th = (1.0 - lum(col)) * 0.45 + n2 * 0.4;                  // shadows develop first, in soft organic patches
  float k = smoothstep(th - 0.12, th + 0.06, max(develop * 1.3 - 0.12, local * 0.55 + develop * 0.3));   // the hand warms colour into it too
  gl_FragColor = vec4(mix(plaster, photo, k), 1.0);
}`;

let gl = null, glc = null, prog = null, loc = {}, items = [], raf = 0, mx = -1, my = -1;

function setup() {
  glc = document.createElement('canvas');
  gl = glc.getContext('webgl', { premultipliedAlpha: false, antialias: false, preserveDrawingBuffer: true });
  if (!gl) return false;
  const sh = (type, src) => { const s = gl.createShader(type); gl.shaderSource(s, src); gl.compileShader(s); if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) throw new Error(gl.getShaderInfoLog(s)); return s; };
  prog = gl.createProgram();
  gl.attachShader(prog, sh(gl.VERTEX_SHADER, VS)); gl.attachShader(prog, sh(gl.FRAGMENT_SHADER, FS));
  gl.linkProgram(prog); gl.useProgram(prog);
  const b = gl.createBuffer(); gl.bindBuffer(gl.ARRAY_BUFFER, b);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW);
  const p = gl.getAttribLocation(prog, 'p'); gl.enableVertexAttribArray(p); gl.vertexAttribPointer(p, 2, gl.FLOAT, false, 0, 0);
  ['tex', 'scale', 'off', 'px', 'light', 'develop', 'hover', 't', 'cur', 'curOn', 'aspect'].forEach((k) => { loc[k] = gl.getUniformLocation(prog, k); });
  window.addEventListener('pointermove', (e) => { mx = e.clientX; my = e.clientY; kick(); }, { passive: true });
  window.addEventListener('scroll', kick, { passive: true });
  window.addEventListener('resize', () => { items.forEach((it) => { it.dirty = true; }); kick(); });
  return true;
}

function texFrom(img) {
  // power-of-two copy so mipmaps (the blur for the height field) work in WebGL1
  const S = 1024, c = document.createElement('canvas');
  c.width = S; c.height = S;
  c.getContext('2d').drawImage(img, 0, 0, S, S);
  const t = gl.createTexture();
  gl.bindTexture(gl.TEXTURE_2D, t);
  gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, false);
  gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, c);
  gl.generateMipmap(gl.TEXTURE_2D);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR_MIPMAP_LINEAR);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
  return t;
}

function render(it) {
  const r = it.canvas.getBoundingClientRect();
  const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
  const w = Math.max(2, Math.min(1400, Math.round(r.width * dpr))), h = Math.max(2, Math.min(1400, Math.round(r.height * dpr)));
  if (it.canvas.width !== w || it.canvas.height !== h) { it.canvas.width = w; it.canvas.height = h; }
  if (glc.width < w || glc.height < h) { glc.width = Math.max(glc.width, w); glc.height = Math.max(glc.height, h); }
  gl.viewport(0, glc.height - h, w, h);
  gl.bindTexture(gl.TEXTURE_2D, it.tex);
  // object-fit: cover
  const ca = r.width / r.height, ia = it.ratio;
  const sx = ca > ia ? 1 : ca / ia, sy = ca > ia ? ia / ca : 1;
  gl.uniform2f(loc.scale, sx, sy);
  gl.uniform2f(loc.off, (1 - sx) / 2, (1 - sy) / 2);
  gl.uniform2f(loc.px, 1 / Math.max(200, r.width), 1 / Math.max(200, r.height));
  const lx = mx < 0 ? -0.6 : (mx - (r.left + r.width / 2)) / (r.width / 2);
  const ly = my < 0 ? 0.7 : -(my - (r.top + r.height / 2)) / (r.height / 2);
  gl.uniform3f(loc.light, Math.max(-1.5, Math.min(1.5, lx)), Math.max(-1.5, Math.min(1.5, ly)), 0.9);
  gl.uniform1f(loc.develop, it.dev);
  gl.uniform2f(loc.cur, it.cx, it.cy);
  gl.uniform1f(loc.curOn, it.con);
  gl.uniform1f(loc.aspect, r.width / r.height);
  gl.uniform1f(loc.hover, it.hov);
  gl.uniform1i(loc.tex, 0);
  gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
  it.ctx.clearRect(0, 0, w, h);
  it.ctx.drawImage(glc, 0, 0, w, h, 0, 0, w, h);
}

function tick() {
  raf = 0;
  const vh = innerHeight;
  let busy = false;
  items.forEach((it) => {
    if (!it.tex) return;
    const r = it.canvas.getBoundingClientRect();
    if (r.bottom < -40 || r.top > vh + 40 || !r.width) return;
    // develop with the scroll: plaster at the bottom of the screen, full colour by mid-screen
    const target = reduced ? 1 : Math.min(1, Math.max(0, (vh * 0.98 - (r.top + r.height * 0.35)) / (vh * 0.5)));
    it.devT = Math.max(it.devT, target);                     // once developed, it stays developed
    const over = fine && mx >= r.left && mx <= r.right && my >= r.top && my <= r.bottom;
    const hovT = over ? 1 : 0;
    const pd = it.dev, ph = it.hov;
    // where the relief rises: under the cursor, or (touch / away) a slow wandering point while still plaster
    const t = performance.now() / 1000;
    const tx = over ? (mx - r.left) / r.width : 0.5 + Math.sin(t * 0.45 + it.seed) * 0.32;
    const ty = over ? 1 - (my - r.top) / r.height : 0.5 + Math.cos(t * 0.37 + it.seed) * 0.28;
    it.cx += (tx - it.cx) * 0.12; it.cy += (ty - it.cy) * 0.12;
    const conT = over ? 1 : (it.dev < 0.97 ? 0.7 : 0);
    it.con += (conT - it.con) * 0.06;
    if (it.con > 0.01) { it.dirty = true; busy = true; }
    it.dev += (it.devT - it.dev) * 0.06;
    it.hov += (hovT - it.hov) * 0.12;
    if (Math.abs(it.devT - it.dev) > 0.002 || Math.abs(hovT - it.hov) > 0.002) busy = true;
    if (it.dirty || over || Math.abs(pd - it.dev) > 0.0005 || Math.abs(ph - it.hov) > 0.0005) { render(it); it.dirty = false; }
  });
  if (busy) kick();
}
function kick() { if (!raf) raf = requestAnimationFrame(tick); }

export function initRelief(root = document) {
  const imgs = [...root.querySelectorAll('img[data-relief]:not([data-relief-done])')];
  if (!imgs.length) return;
  if (!gl && !setup()) return;
  imgs.forEach((img) => {
    img.dataset.reliefDone = '1';
    const canvas = document.createElement('canvas');
    canvas.className = `${img.className} relief`;
    canvas.setAttribute('role', 'img');
    canvas.setAttribute('aria-label', img.alt || '');
    if (img.dataset.parallax) canvas.dataset.parallax = img.dataset.parallax;
    delete img.dataset.parallax;
    const it = { img, canvas, ctx: canvas.getContext('2d'), tex: null, ratio: 1.5, dev: reduced ? 1 : 0, devT: 0, hov: 0, dirty: true, cx: 0.5, cy: 0.5, con: 0, seed: Math.random() * 6.28 };
    // swap now so layout, reveals and parallax bind to the canvas; paint once the photo has loaded
    img.replaceWith(canvas);
    canvas.append(img);                                        // the <img> stays as fallback content
    const go = () => {
      try { it.tex = texFrom(img); it.ratio = img.naturalWidth / img.naturalHeight; }
      catch (e) { canvas.replaceWith(img); if (canvas.dataset.parallax) img.dataset.parallax = canvas.dataset.parallax; return; }  // tainted (file://) → plain photo
      items.push(it); kick();
    };
    img.loading = 'eager';
    if (img.complete && img.naturalWidth) go(); else { img.addEventListener('load', go, { once: true }); img.addEventListener('error', () => canvas.replaceWith(img), { once: true }); }
  });
}
