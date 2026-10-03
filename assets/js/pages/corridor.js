/* ------------------------------------------------------------------
   Corridor — stacked layers, zoom-through transitions.
   Each photo is nested inside the previous one, exactly where the
   person stands. Scrolling pushes the camera through the person into
   the next landscape, so the figure stays put while the world changes.
------------------------------------------------------------------- */
import { boot, $, esc, pad, reduced, gsap, getLenis } from '../core.js';
import { byN } from '../data.js';

// n = archive number, a = where the person stands (0–1 of width / height)
const STOPS = [
  { n: 24,  a: [0.51, 0.43],  line: 'Start small. Let the mountain do the talking.', zh: '先让自己变小，让山说话。' },
  { n: 42,  a: [0.361, 0.60], line: 'A gap in the rock, a window onto Meili.', zh: '岩石的缝隙，是看梅里的窗。' },
  { n: 60,  a: [0.488, 0.577], line: 'Find the dot. That’s me.', zh: '找到那个小点，那就是我。' },
  { n: 112, a: [0.675, 0.69], line: 'Wind, dust and a very long view.', zh: '风、沙，和很远很远的地平线。' },
  { n: 89,  a: [0.489, 0.50], line: 'From above, a person is a punctuation mark.', zh: '从高处看，人只是一个标点。' },
  { n: 88,  a: [0.519, 0.571], line: 'Walking through a field of mirrors.', zh: '走进一片镜子的田野。' },
  { n: 61,  a: [0.49, 0.50],  line: 'Holding the sun for a second.', zh: '把太阳握在手里一秒钟。' },
  { n: 66,  a: [0.42, 0.58],  line: 'Last light on the yardang.', zh: '雅丹上的最后一束光。' },
  { n: 63,  a: [0.525, 0.70], line: 'Night on the salt flat.', zh: '盐湖的夜。' },
  { n: 65,  a: [0.55, 0.61],  line: 'Staying until the sky turns.', zh: '一直待到星空转起来。' },
].map((s) => ({ ...s, p: byN(s.n) }));

const Z = 5;                 // each layer is 1/Z the size of the one before
const N = STOPS.length;

const app = boot({ page: 'corridor', dark: true, footer: false });
const root = $('[data-corridor]');
const stage = $('.corridor__stage', root);
const mobile = window.matchMedia('(max-width: 760px)').matches;

/* ---------- world layout: nest every photo at the previous person ---------- */
// World units: photo 0 is 1 wide. Photo k+1 is 1/Z as wide, and its person sits on photo k's person.
const layers = [];
let prevAnchor = null;
STOPS.forEach((s, k) => {
  const w = Math.pow(1 / Z, k);
  const h = w / s.p.ratio;
  let x, y;
  if (!prevAnchor) { x = -w / 2; y = -h / 2; }
  else { x = prevAnchor[0] - s.a[0] * w; y = prevAnchor[1] - s.a[1] * h; }
  const anchor = [x + s.a[0] * w, y + s.a[1] * h];
  prevAnchor = anchor;
  const el = document.createElement('figure');
  el.className = 'corridor__layer';
  el.innerHTML = `<img src="${s.p.l}" alt="${esc(s.p.title)}${s.p.place ? ` — ${esc(s.p.place)}` : ''}" decoding="async" ${k > 2 ? 'loading="lazy"' : ''}>`;
  stage.append(el);
  layers.push({ ...s, x, y, w, h, anchor, el });
});

/* ---------- captions + progress ---------- */
const cap = $('.corridor__caption', root);
const counter = $('[data-counter]', root);
const bar = $('[data-bar]', root);
const ticks = $('[data-ticks]', root);
ticks.innerHTML = layers.map((_, i) => `<i data-i="${i}"></i>`).join('');

let vw = innerWidth, vh = innerHeight;
addEventListener('resize', () => { vw = innerWidth; vh = innerHeight; render(current, true); });

/* Rest view of layer k: cover the screen, centred between the photo centre and the person. */
function restView(k) {
  const L = layers[k];
  const s = Math.max(vw / L.w, vh / L.h);           // px per world unit (cover)
  const bias = mobile || vw / vh < 1 ? 0.85 : 0.35;  // portrait screens lean on the person
  let cx = L.x + L.w / 2 + (L.anchor[0] - (L.x + L.w / 2)) * bias;
  let cy = L.y + L.h / 2 + (L.anchor[1] - (L.y + L.h / 2)) * bias;
  const hw = vw / 2 / s, hh = vh / 2 / s;           // keep the view inside the photo
  cx = Math.min(L.x + L.w - hw, Math.max(L.x + hw, cx));
  cy = Math.min(L.y + L.h - hh, Math.max(L.y + hh, cy));
  return { s, cx, cy };
}

const smooth = (t) => t * t * (3 - 2 * t);
const ease = (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);

/* Camera at continuous position c ∈ [0, N-1]. */
function camera(c) {
  const k = Math.min(N - 2, Math.floor(c));
  let f = c - k;
  // dwell on each photo: the first and last 18% of a segment barely move
  f = ease(Math.min(1, Math.max(0, (f - 0.18) / 0.64)));
  const A = restView(k), B = restView(k + 1);
  const s = A.s * Math.pow(B.s / A.s, f);            // geometric zoom
  // the shared person point glides linearly across the screen while we zoom about it
  const P = layers[k].anchor;                          // == layers[k+1].anchor
  const pa = [(P[0] - A.cx) * A.s, (P[1] - A.cy) * A.s];
  const pb = [(P[0] - B.cx) * B.s, (P[1] - B.cy) * B.s];
  const px = pa[0] + (pb[0] - pa[0]) * f, py = pa[1] + (pb[1] - pa[1]) * f;
  return { s, cx: P[0] - px / s, cy: P[1] - py / s, k, f };
}

let current = 0, target = 0, lastRendered = -1;
function render(c, force) {
  if (!force && Math.abs(c - lastRendered) < 0.0005) return;
  lastRendered = c;
  const cam = camera(c);
  for (let i = 0; i < N; i++) {
    const L = layers[i];
    const d = i - c;                                   // relative depth
    if (d < -1.05 || d > 3.2) { L.el.style.visibility = 'hidden'; continue; }
    const sw = L.w * cam.s;                            // on-screen width in px
    const x = (L.x - cam.cx) * cam.s + vw / 2;
    const y = (L.y - cam.cy) * cam.s + vh / 2;
    const q = sw / vw;                                 // how much of the screen this layer covers
    // far layers: small framed prints receding at the person; they solidify as they approach
    // at rest only the current photo shows (the person stays visible);
    // as soon as you scroll, the next photo opens out of the person, and the one after that appears deeper in
    const cl = (v) => Math.min(1, Math.max(0, v));
    const alpha = i <= cam.k ? 1
      : i === cam.k + 1 ? smooth(cl((cam.f - 0.01) / 0.28)) * smooth(cl((q - 0.004) / 0.05))
      : i === cam.k + 2 ? smooth(cl((cam.f - 0.5) / 0.3)) * (1 - smooth(cl((cam.f - 0.86) / 0.14))) * 0.9
      : 0;
    const frame = i <= c ? 0 : 1 - smooth(Math.min(1, Math.max(0, (q - 0.35) / 0.55)));
    L.el.style.visibility = alpha < 0.003 ? 'hidden' : 'visible';
    L.el.style.opacity = alpha.toFixed(3);
    // size in real pixels (not a scale transform) so the browser rasterises the photo sharply
    L.el.style.width = `${sw.toFixed(2)}px`;
    L.el.style.height = `${(L.h * cam.s).toFixed(2)}px`;
    L.el.style.transform = `translate3d(${x.toFixed(2)}px, ${y.toFixed(2)}px, 0)`;
    L.el.style.setProperty('--frame', frame.toFixed(3));
  }
  // caption: visible while resting on a photo
  const idx = Math.round(c);
  const rest = 1 - Math.min(1, Math.abs(c - idx) / 0.22);
  if (cap.dataset.i !== String(idx)) {
    const L = layers[idx];
    cap.dataset.i = idx;
    cap.innerHTML = `<p class="mono">${pad(idx + 1)} — ${esc(L.p.place || 'On the road')}</p>
      <h2 class="corridor__title">${esc(L.line)}</h2>
      <p class="zh">${esc(L.zh)} <span>· ${esc(L.p.title)} / ${esc(L.p.zh)}</span></p>`;
  }
  cap.style.opacity = smooth(Math.max(0, rest)).toFixed(3);
  cap.style.transform = `translateY(${(1 - rest) * 16}px)`;
  counter.textContent = `${pad(idx + 1)} / ${pad(N)}`;
  bar.style.transform = `scaleX(${(c / (N - 1)).toFixed(4)})`;
  [...ticks.children].forEach((t, i) => t.classList.toggle('is-on', i <= c + 0.01));
  root.classList.toggle('is-start', c < 0.08);
}

/* ---------- scroll → camera ---------- */
const track = $('.corridor__track', root);
track.style.height = `${(N - 1) * (mobile ? 110 : 140) + 100}vh`;
const readScroll = () => {
  const r = track.getBoundingClientRect();
  const max = r.height - vh;
  return Math.min(1, Math.max(0, -r.top / max)) * (N - 1);
};
function loop() {
  target = readScroll();
  current += (target - current) * (reduced ? 1 : 0.12);
  if (Math.abs(target - current) < 0.0004) current = target;
  render(current);
  requestAnimationFrame(loop);
}

// jump to a stop by clicking its tick
ticks.addEventListener('click', (e) => {
  const i = e.target.closest('i')?.dataset.i; if (i == null) return;
  const r = track.getBoundingClientRect();
  const y = window.scrollY + r.top + (+i / (N - 1)) * (r.height - vh);
  const l = getLenis(); if (l) l.scrollTo(y, { duration: 1.6 }); else window.scrollTo({ top: y, behavior: 'smooth' });
});

/* ---------- boot ---------- */
const first = layers[0].el.querySelector('img');
const start = () => {
  app.ready();
  render(0, true);
  requestAnimationFrame(loop);
  if (!reduced) gsap.fromTo(stage, { scale: 1.08, opacity: 0 }, { scale: 1, opacity: 1, duration: 1.8, ease: 'expo.out' });
};
if (first.complete) start(); else { first.addEventListener('load', start, { once: true }); first.addEventListener('error', start, { once: true }); }
