/* ------------------------------------------------------------------
   Mounts "Beneath the light" into a scroll section:
     <section data-beneath> (tall)  →  sticky stage with <canvas>,
     the opening copy, chapter titles and chapter ticks.
   Scrolling through the section moves through the four places;
   every scroll position is one fixed frame of the change.
------------------------------------------------------------------- */
import { createStage, SCENES } from './scene.js';

const sst = (a, b, x) => { const v = Math.min(1, Math.max(0, (x - a) / (b - a))); return v * v * (3 - 2 * v); };
const clamp01 = (x) => Math.min(1, Math.max(0, x));
const load = (src) => new Promise((ok, no) => { const im = new Image(); im.decoding = 'async'; im.onload = () => ok(im); im.onerror = no; im.src = src; });

export function mountBeneath(root, { reduced = false, onFail, lenis = null } = {}) {
  const canvas = root.querySelector('canvas');
  const html = document.documentElement;
  const chapters = [...root.querySelectorAll('[data-chapter]')];
  const ticks = [...root.querySelectorAll('[data-tick]')];
  const N = SCENES.length;
  const lite = matchMedia('(max-width: 760px)').matches;
  const TEX = window.BENEATH_TEX || {};
  let stage = null, running = false, visible = true, started = 0, uS = 0, last = 0;

  const ready = Promise.all(SCENES.map((s) => load(TEX[s.id] || `media/beneath/${s.id}.webp`)))
    .then((images) => {
      stage = createStage(canvas, images, { lite });
      const size = () => stage.resize(innerWidth, innerHeight);
      size(); addEventListener('resize', size);
      addEventListener('pointermove', (e) => stage.setMouse(e.clientX / innerWidth * 2 - 1, e.clientY / innerHeight * 2 - 1), { passive: true });
      stage.frame(0, 0, 0, 0);
    })
    .catch((e) => { console.warn(e); root.classList.add('is-fallback'); onFail?.(e); });

  const span = () => Math.max(1, root.offsetHeight - innerHeight);
  const top = () => root.getBoundingClientRect().top + scrollY;
  const goTo = (i) => {
    const y = top() + span() * i / (N - 1);
    if (lenis) lenis.scrollTo(y, { duration: 1.6 }); else scrollTo({ top: y, behavior: 'smooth' });
  };
  ticks.forEach((el, i) => el.addEventListener('click', () => goTo(i)));
  new IntersectionObserver(([e]) => { visible = e.isIntersecting; }, { rootMargin: '100px' }).observe(root);

  function step(t, snap) {
    const dt = Math.min(0.1, Math.max(0, t - last)); last = t;
    const y = scrollY - top();
    const u = clamp01(y / span()) * (N - 1);
    uS = snap ? u : uS + (u - uS) * (1 - Math.exp(-dt * 7));
    const after = clamp01((y - span()) / innerHeight);                // leaving the section
    root.style.setProperty('--out', Math.min(1, uS / 0.22).toFixed(3));
    const st = stage.frame(t, Math.min(1, t / (reduced ? 0.01 : 3.5)), after, uS);
    chapters.forEach((el) => {
      const c = +el.dataset.chapter, d = Math.abs(uS - c);
      el.style.opacity = (1 - sst(0.12, 0.3, d)).toFixed(3);
      el.style.transform = `translateY(${((uS - c) * -60).toFixed(1)}px)`;
    });
    ticks.forEach((el, i) => el.classList.toggle('on', Math.round(uS) === i));
    return st;
  }

  function loop(now) {
    if (!running) return;
    requestAnimationFrame(loop);
    if (!visible || !stage) return;
    step(reduced ? 3 : (now - started) / 1000, false);
    stage.adapt(now);
  }

  return {
    ready,
    play() {
      if (!stage || running) return;
      running = true; started = performance.now(); root.classList.add('is-in');
      requestAnimationFrame(loop);
    },
    // test hook: render one exact frame
    still(t, snap = true) { if (stage) { root.classList.add('is-in'); return step(t, snap); } },
  };
}
