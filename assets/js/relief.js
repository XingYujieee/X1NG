/* ==========================================================================
   Darkroom print — develop a photograph with your cursor.

   An <img data-relief> becomes a blank sheet of white plaster. Wherever the
   cursor passes, the photograph slowly rises out of it as a white bas-relief
   (its height comes from the photo's own light and shadow). Once more than
   half the sheet has been brushed, the print glows, and the real photograph
   comes up through the plaster. A small "Re-plaster" button starts again.

   Touch screens: the print brushes itself in a slow spiral once it is on
   screen, so phones see the same story.

   One shared WebGL context renders the prints and copies into each print's
   own 2D canvas, so layout and reveals keep working around it.
   ========================================================================== */

const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
const fine = matchMedia('(hover: hover) and (pointer: fine)').matches;
const THRESHOLD = 0.5;

const VS = `attribute vec2 p; varying vec2 v; void main(){ v = p * 0.5 + 0.5; gl_Position = vec4(p, 0.0, 1.0); }`;
const FS = `
precision highp float;
uniform sampler2D tex, mask; uniform vec2 scale, off, px; uniform vec3 light; uniform float glow, develop, t;
varying vec2 v;
float lum(vec3 c){ return dot(c, vec3(0.299, 0.587, 0.114)); }
float hh(vec2 q){ return fract(sin(dot(q, vec2(127.1, 311.7))) * 43758.5453); }
float vn(vec2 q){ vec2 i = floor(q), f = fract(q); f = f * f * (3.0 - 2.0 * f);
  return mix(mix(hh(i), hh(i + vec2(1, 0)), f.x), mix(hh(i + vec2(0, 1)), hh(i + vec2(1, 1)), f.x), f.y); }
float H(vec2 u){ return lum(texture2D(tex, u, 4.0).rgb) * 0.45 + lum(texture2D(tex, u, 2.2).rgb) * 0.35 + lum(texture2D(tex, u, 0.8).rgb) * 0.2; }
void main(){
  vec2 u = off + v * scale; u.y = 1.0 - u.y;
  float m = texture2D(mask, vec2(v.x, 1.0 - v.y)).r;                 // how much has been brushed here
  m = smoothstep(0.0, 1.0, m);
  vec2 e = px * 4.0;
  float hx = H(u + vec2(e.x, 0.0)) - H(u - vec2(e.x, 0.0));
  float hy = H(u - vec2(0.0, e.y)) - H(u + vec2(0.0, e.y));
  vec3 n = normalize(vec3(-hx * 34.0 * m, -hy * 34.0 * m, 1.0));   // flat where untouched, carved where brushed
  vec3 L = normalize(light);
  float lam = max(dot(n, L), 0.0);
  float flat0 = max(L.z, 0.0);
  float spec = pow(max(dot(reflect(-L, n), vec3(0.0, 0.0, 1.0)), 0.0), 28.0) * m;
  float grain = (vn(v * vec2(420.0, 300.0)) - 0.5) * 0.025;
  // white plaster: an even sheet, the relief only where the hand has been
  vec3 plaster = vec3(0.95, 0.94, 0.915) * (0.5 + 0.62 * mix(flat0, lam, m)) + spec * 0.16 + grain;
  plaster *= 1.0 - 0.22 * m * (1.0 - smoothstep(0.05, 0.75, H(u)));   // hollows hold shadow, raised parts stay white
  // the glow: the sheet lights up from within before the photograph comes through
  plaster = mix(plaster, vec3(1.0, 0.985, 0.95), glow * 0.55) + glow * 0.12 * (0.5 + 0.5 * m);
  vec3 photo = texture2D(tex, u).rgb;
  // colour comes up from the most-brushed places first, in soft patches
  float th = (1.0 - m) * 0.5 + vn(v * 6.0 + t * 0.05) * 0.35 + vn(v * 19.0) * 0.15;
  float k = smoothstep(th - 0.1, th + 0.1, develop * 1.25 - 0.05);
  gl_FragColor = vec4(mix(plaster, photo, k), 1.0);
}`;

let gl = null, glc = null, prog = null, loc = {}, items = [], raf = 0;

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
  ['tex', 'mask', 'scale', 'off', 'px', 'light', 'glow', 'develop', 't'].forEach((k) => { loc[k] = gl.getUniformLocation(prog, k); });
  addEventListener('resize', () => { items.forEach((it) => { it.dirty = true; }); kick(); });
  addEventListener('scroll', kick, { passive: true });
  return true;
}

function makeTex(src, mip) {
  const t = gl.createTexture();
  gl.bindTexture(gl.TEXTURE_2D, t);
  gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, false);
  let s = src;
  if (mip) {   // power-of-two copy so mipmaps (the blur for the height field) work in WebGL1
    const c = document.createElement('canvas'); c.width = c.height = 1024;
    c.getContext('2d').drawImage(src, 0, 0, 1024, 1024); s = c;
  }
  gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, s);
  if (mip) { gl.generateMipmap(gl.TEXTURE_2D); gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR_MIPMAP_LINEAR); }
  else gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
  return t;
}

function render(it, now) {
  const r = it.canvas.getBoundingClientRect();
  const dpr = Math.min(devicePixelRatio || 1, 1.5);
  const w = Math.max(2, Math.min(1600, Math.round(r.width * dpr))), h = Math.max(2, Math.min(1600, Math.round(r.height * dpr)));
  if (it.canvas.width !== w || it.canvas.height !== h) { it.canvas.width = w; it.canvas.height = h; }
  if (glc.width < w || glc.height < h) { glc.width = Math.max(glc.width, w); glc.height = Math.max(glc.height, h); }
  gl.viewport(0, glc.height - h, w, h);
  gl.activeTexture(gl.TEXTURE0); gl.bindTexture(gl.TEXTURE_2D, it.tex); gl.uniform1i(loc.tex, 0);
  gl.activeTexture(gl.TEXTURE1); gl.bindTexture(gl.TEXTURE_2D, it.maskTex);
  if (it.maskDirty) { gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, it.mask); it.maskDirty = false; }
  gl.uniform1i(loc.mask, 1);
  const ca = r.width / r.height, ia = it.ratio;
  const sx = ca > ia ? 1 : ca / ia, sy = ca > ia ? ia / ca : 1;
  gl.uniform2f(loc.scale, sx, sy);
  gl.uniform2f(loc.off, (1 - sx) / 2, (1 - sy) / 2);
  gl.uniform2f(loc.px, 1 / Math.max(240, r.width), 1 / Math.max(240, r.height));
  gl.uniform3f(loc.light, it.lx, it.ly, 0.55);
  gl.uniform1f(loc.glow, it.glow);
  gl.uniform1f(loc.develop, it.dev);
  gl.uniform1f(loc.t, now / 1000);
  gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
  it.ctx.clearRect(0, 0, w, h);
  it.ctx.drawImage(glc, 0, 0, w, h, 0, 0, w, h);
}

/* paint a soft stamp into the mask; strokes build up slowly, so the relief "comes up" */
function stamp(it, x, y) {
  const M = it.mask, g = it.mctx, R = M.width * 0.075;
  const grd = g.createRadialGradient(x * M.width, y * M.height, 0, x * M.width, y * M.height, R);
  grd.addColorStop(0, 'rgba(255,255,255,.1)'); grd.addColorStop(0.6, 'rgba(255,255,255,.05)'); grd.addColorStop(1, 'rgba(255,255,255,0)');
  g.fillStyle = grd; g.fillRect(x * M.width - R, y * M.height - R, R * 2, R * 2);
  it.maskDirty = true; it.dirty = true;
}
function stroke(it, x, y) {
  if (it.px == null) { it.px = x; it.py = y; }
  const d = Math.hypot(x - it.px, y - it.py), steps = Math.max(1, Math.ceil(d / 0.018));
  for (let i = 1; i <= steps; i++) stamp(it, it.px + (x - it.px) * i / steps, it.py + (y - it.py) * i / steps);
  it.px = x; it.py = y;
}
function coverage(it) {
  const s = it.sample, c = it.sctx;
  c.clearRect(0, 0, s.width, s.height); c.drawImage(it.mask, 0, 0, s.width, s.height);
  const d = c.getImageData(0, 0, s.width, s.height).data;
  let n = 0; for (let i = 0; i < d.length; i += 4) if (d[i] > 150) n++;
  return n / (d.length / 4);
}

function tick(now) {
  raf = 0;
  let busy = false;
  items.forEach((it) => {
    if (!it.tex) return;
    const r = it.canvas.getBoundingClientRect();
    if (r.bottom < -40 || r.top > innerHeight + 40 || !r.width) return;
    // touch screens: brush itself in a slow spiral once fully on screen
    if (!fine && it.state === 'plaster' && r.top > -10 && r.bottom < innerHeight + 10) {
      it.auto = (it.auto || 0) + 1 / 60;
      const a = it.auto * 3.2, rad = 0.05 + it.auto * 0.05;
      stroke(it, 0.5 + Math.cos(a) * rad * (r.height / r.width) * 1.4, 0.5 + Math.sin(a) * rad);
      busy = true;
    }
    // light follows the brush, or drifts
    const tlx = it.over ? (it.cx - 0.5) * 2.4 : Math.sin(now / 2400) * 0.9, tly = it.over ? (0.5 - it.cy) * 2.4 : 0.7;
    it.lx += (tlx - it.lx) * 0.1; it.ly += (tly - it.ly) * 0.1;
    if (it.state === 'plaster' && now - it.lastCov > 180) {
      it.lastCov = now;
      it.cov = coverage(it);
      it.onProgress?.(it.cov);
      if (it.cov >= THRESHOLD) { it.state = 'glow'; it.t0 = now; }
    }
    if (it.state === 'glow') {
      const k = (now - it.t0) / 650;
      it.glow = Math.min(1, k);
      if (k >= 1) { it.state = 'develop'; it.t0 = now; }
      busy = true; it.dirty = true;
    } else if (it.state === 'develop') {
      const k = Math.min(1, (now - it.t0) / 1600);
      it.dev = 1 - Math.pow(1 - k, 2);
      it.glow = Math.max(0, 1 - k * 1.4);
      if (k >= 1) { it.state = 'done'; it.onDone?.(); }
      busy = true; it.dirty = true;
    }
    if (it.over && it.state === 'plaster') busy = true;
    if (it.dirty) { render(it, now); it.dirty = false; }
  });
  if (busy) kick();
}
function kick() { if (!raf) raf = requestAnimationFrame(tick); }

function ui(it) {
  const host = it.canvas.parentElement;
  if (getComputedStyle(host).position === 'static') host.style.position = 'relative';
  const el = document.createElement('div');
  el.className = 'relief-ui';
  el.innerHTML = `<span class="relief-ui__hint mono">${fine ? 'Brush to develop · 用光标擦出照片' : 'Developing · 显影中'}</span>
    <span class="relief-ui__meter mono"><i></i><b>00%</b></span>
    <button type="button" class="relief-ui__reset mono" hidden>Re-plaster · 重来</button>`;
  host.append(el);
  const bar = el.querySelector('i'), pct = el.querySelector('b'), reset = el.querySelector('button');
  it.onProgress = (c) => { const p = Math.min(1, c / THRESHOLD); bar.style.setProperty('--p', p.toFixed(3)); pct.textContent = `${String(Math.round(p * 100)).padStart(2, '0')}%`; el.classList.toggle('is-going', c > 0.01); };
  it.onDone = () => { el.classList.add('is-done'); reset.hidden = false; };
  reset.addEventListener('click', (e) => {
    e.preventDefault(); e.stopPropagation();
    it.mctx.globalCompositeOperation = 'source-over';
    it.mctx.fillStyle = '#000'; it.mctx.fillRect(0, 0, it.mask.width, it.mask.height);
    it.mctx.globalCompositeOperation = 'lighter';
    Object.assign(it, { state: 'plaster', glow: 0, dev: 0, cov: 0, auto: 0, px: null, maskDirty: true, dirty: true });
    el.classList.remove('is-done', 'is-going'); reset.hidden = true; it.onProgress(0); kick();
  });
}

export function initRelief(root = document) {
  const imgs = [...root.querySelectorAll('img[data-relief]:not([data-relief-done])')];
  if (!imgs.length || reduced) return;                         // reduced motion: just the photograph
  if (!gl && !setup()) return;
  imgs.forEach((img) => {
    img.dataset.reliefDone = '1';
    const canvas = document.createElement('canvas');
    canvas.className = `${img.className} relief`;
    canvas.setAttribute('role', 'img');
    canvas.setAttribute('aria-label', img.alt || '');
    if (img.dataset.parallax) canvas.dataset.parallax = img.dataset.parallax;
    delete img.dataset.parallax;
    const mask = document.createElement('canvas'); mask.width = 384; mask.height = 256;
    const mctx = mask.getContext('2d');
    const sample = document.createElement('canvas'); sample.width = 36; sample.height = 24;
    const it = { img, canvas, ctx: canvas.getContext('2d'), tex: null, maskTex: null, mask, mctx, sample, sctx: sample.getContext('2d', { willReadFrequently: true }), ratio: 1.5, state: 'plaster', glow: 0, dev: 0, cov: 0, lastCov: 0, lx: 0.3, ly: 0.7, cx: 0.5, cy: 0.5, over: false, dirty: true, maskDirty: true };
    img.replaceWith(canvas);
    canvas.append(img);
    const go = () => {
      const r = canvas.getBoundingClientRect();
      if (r.width && r.height) { mask.height = Math.max(64, Math.round(384 * r.height / r.width)); sample.height = Math.max(8, Math.round(36 * r.height / r.width)); }
      mctx.fillStyle = '#000'; mctx.fillRect(0, 0, mask.width, mask.height); mctx.globalCompositeOperation = 'lighter';
      try { it.tex = makeTex(img, true); it.maskTex = makeTex(mask, false); it.ratio = img.naturalWidth / img.naturalHeight; }
      catch (e) { canvas.replaceWith(img); if (canvas.dataset.parallax) img.dataset.parallax = canvas.dataset.parallax; return; }   // tainted (file://) → plain photo
      items.push(it); ui(it); kick();
    };
    if (fine) {
      canvas.addEventListener('pointermove', (e) => {
        const r = canvas.getBoundingClientRect();
        it.cx = (e.clientX - r.left) / r.width; it.cy = (e.clientY - r.top) / r.height; it.over = true;
        if (it.state === 'plaster') stroke(it, it.cx, it.cy);
        kick();
      });
      canvas.addEventListener('pointerleave', () => { it.over = false; it.px = null; it.dirty = true; kick(); });
    }
    img.loading = 'eager';
    if (img.complete && img.naturalWidth) go(); else { img.addEventListener('load', go, { once: true }); img.addEventListener('error', () => canvas.replaceWith(img), { once: true }); }
  });
}
