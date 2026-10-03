/* Page glue for "Beneath the light": loads the photographs, then runs the stage. */
import { createStage, SCENES } from './scene.js';

const canvas = document.querySelector('[data-stage]');
const root = document.documentElement;
const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
const lite = matchMedia('(max-width: 760px)').matches;
const words = [...document.querySelectorAll('[data-words] span')];
const hero = document.querySelector('[data-hero]');
const story = document.querySelector('[data-story]');
const cap = document.querySelector('[data-cap]');
const CAPS = {
  66: ['Qinghai–Gansu', 'Red on the Ridge', '山脊上的红'],
  42: ['Meili, Yunnan', 'Framed Summit', '岩隙中的雪山'],
  61: ['On the road', 'Hay Bale Canyon', '草垛峡谷'],
  65: ['Qinghai–Gansu', 'Star Trails over Yardang', '雅丹星轨'],
};

const load = (src) => new Promise((ok, no) => { const im = new Image(); im.onload = () => ok(im); im.onerror = no; im.src = src; });
const TEX = window.BENEATH_TEX || {};
Promise.all(SCENES.map((s) => load(TEX[s.id] || `media/beneath/${s.id}.webp`))).then(start).catch((e) => { root.classList.add('no-webgl'); console.warn(e); });

function start(images) {
  let stage;
  try { stage = createStage(canvas, images, { lite }); } catch (e) { root.classList.add('no-webgl'); console.warn(e); return; }
  const size = () => stage.resize(innerWidth, innerHeight);
  size(); addEventListener('resize', size);
  addEventListener('pointermove', (e) => stage.setMouse(e.clientX / innerWidth * 2 - 1, e.clientY / innerHeight * 2 - 1));

  let shown = -1;
  const t0 = performance.now();
  const INTRO = reduced ? 0.01 : 3.5;
  const scrolly = document.querySelector('[data-scrolly]');
  const chapters = [...document.querySelectorAll('[data-chapter]')];
  const ticks = [...document.querySelectorAll('[data-tick]')];
  const N = SCENES.length;
  root.classList.add('is-ready');
  // chapter ticks jump to their place
  const goTo = (i) => { const span = scrolly.offsetHeight - innerHeight; scrollTo({ top: scrolly.offsetTop + span * i / (N - 1), behavior: 'smooth' }); };
  ticks.forEach((el, i) => el.addEventListener('click', () => goTo(i)));
  let uS = 0, last = 0;                                   // smoothed chapter position (0 … N-1)
  const sst = (a, b, x) => { const v = Math.min(1, Math.max(0, (x - a) / (b - a))); return v * v * (3 - 2 * v); };
  // scroll → chapter position: each frame of the change is pinned to a scroll position
  const target = (sc) => {
    const span = scrolly.offsetHeight - innerHeight;
    return Math.min(1, Math.max(0, (sc - scrolly.offsetTop) / span)) * (N - 1);
  };
  function step(t, sc, snap) {
    const dt = Math.min(0.1, Math.max(0, t - last)); last = t;
    const u = target(sc);
    uS = snap ? u : uS + (u - uS) * (1 - Math.exp(-dt * 7));   // a little inertia keeps it silky
    const after = Math.min(1, Math.max(0, (sc - (scrolly.offsetTop + scrolly.offsetHeight - innerHeight)) / innerHeight));
    root.style.setProperty('--hero-out', Math.min(1, uS / 0.22).toFixed(3));
    const r = story.getBoundingClientRect();
    const k = Math.min(1, Math.max(0, (innerHeight * 0.85 - r.top) / (r.height * 0.9)));
    words.forEach((w, i) => { const a = Math.min(1, Math.max(0, k * words.length * 1.15 - i)); w.style.opacity = (0.12 + a * 0.88).toFixed(3); });
    const st = stage.frame(t, Math.min(1, t / INTRO), after, uS);
    // chapter titles: each one is visible while its place is resting, gone during the change
    chapters.forEach((el) => {
      const c = +el.dataset.chapter, d = Math.abs(uS - c);
      const v = 1 - sst(0.12, 0.3, d);
      el.style.opacity = (v * (1 - after * 2)).toFixed(3);
      el.style.transform = `translateY(${((uS - c) * -60).toFixed(1)}px)`;
    });
    ticks.forEach((el, i) => el.classList.toggle('on', Math.round(uS) === i));
    const id = SCENES[st.scene].id;
    if (st.scene !== shown) { shown = st.scene; const c = CAPS[id]; cap.innerHTML = `<b>${String(st.scene + 1).padStart(2, '0')} / ${String(N).padStart(2, '0')}</b> ${c[1]} — ${c[0]}<span>${c[2]}</span>`; }
    cap.style.opacity = (1 - st.tr * 1.2 - after * 2).toFixed(3);
  }
  if (new URLSearchParams(location.search).has('still')) {
    window.__render = (t, sc) => { step(t, sc, true); root.classList.add('is-in'); return true; };
    return;
  }
  (function loop(now) {
    const t = reduced ? 3 : (now - t0) / 1000;
    step(t, scrollY, false);
    stage.adapt(now);
    if (t > 0.6) root.classList.add('is-in');
    requestAnimationFrame(loop);
  })(t0);
}
