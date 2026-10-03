/* ------------------------------------------------------------------
   Corridor film — oil-motion "baked-video" route, autonomous playback.
   One persistent <video>; captions, ticks and progress are driven by the
   compiled timeline (media/film/timeline.json, inlined in film-timeline.js).
------------------------------------------------------------------- */
import { esc, pad } from '../core.js';
import { timeline, stops } from './film-timeline.js';

export function mountFilm(root, { reduced = false, portrait = false } = {}) {
  const video = root.querySelector('.film__video');
  const cap = root.querySelector('[data-film-caption]');
  const bar = root.querySelector('[data-film-bar]');
  const ticks = root.querySelector('[data-film-ticks]');
  const toggle = root.querySelector('[data-film-toggle]');
  // H.264/MP4 plays everywhere (Chrome, Safari, Edge, Firefox); WebM/VP9 is an optional fallback
  const set = portrait ? timeline.sources.mobile : timeline.sources.desktop;
  const src = video.canPlayType('video/mp4; codecs="avc1.640028"') || !set.webm ? set.mp4 : set.webm;
  const poster = portrait ? timeline.posters.mobile : timeline.posters.desktop;
  video.poster = poster;
  root.style.backgroundImage = `url("${poster}")`;
  ticks.innerHTML = stops.map((s, i) => `<i data-i="${i}" title="${esc(s.title)}"></i>`).join('');

  const per = timeline.duration / stops.length;
  let shown = -1, raf = 0;

  const showCaption = (i) => {
    const s = stops[i];
    cap.innerHTML = `<p class="mono">${pad(i + 1)} / ${pad(stops.length)} — ${esc(s.place)}</p>
      <h2 class="film__line">${esc(s.line)}</h2>
      <p class="zh">${esc(s.zh)} <span>· ${esc(s.title)} / ${esc(s.titleZh)}</span></p>`;
  };
  const sstep = (a, b, x) => { const v = Math.min(1, Math.max(0, (x - a) / (b - a))); return v * v * (3 - 2 * v); };
  const tick = () => {
    raf = requestAnimationFrame(tick);
    const t = video.currentTime % timeline.duration;
    const pos = t / per;                                     // 0‥10, integer = resting on a photo
    const i = Math.round(pos) % stops.length;
    const dist = Math.abs(pos - Math.round(pos));            // distance from the nearest rest
    const vis = 1 - sstep(0.12, 0.26, dist);                 // caption centred on each rest
    if (i !== shown) { shown = i; showCaption(i); }
    cap.style.opacity = vis.toFixed(3);
    cap.style.transform = `translateY(${((1 - vis) * 14).toFixed(1)}px)`;
    bar.style.transform = `scaleX(${(t / timeline.duration).toFixed(4)})`;
    [...ticks.children].forEach((el, k) => el.classList.toggle('is-on', k <= Math.floor(pos + 0.26)));
  };

  // jump to a stop
  ticks.addEventListener('click', (e) => {
    const i = e.target.closest('i')?.dataset.i;
    if (i != null) { video.currentTime = +i * per + 0.01; if (video.paused && !reduced) video.play(); }
  });
  toggle.addEventListener('click', () => {
    if (video.paused) { video.play(); toggle.textContent = 'Pause'; toggle.setAttribute('aria-label', 'Pause the film'); }
    else { video.pause(); toggle.textContent = 'Play'; toggle.setAttribute('aria-label', 'Play the film'); }
  });
  // save battery when the hero is off-screen
  const io = new IntersectionObserver(([e]) => {
    if (reduced || toggle.textContent === 'Play') return;
    if (e.isIntersecting) video.play().catch(() => {}); else video.pause();
  }, { threshold: 0.05 });

  let resolveReady;
  const ready = new Promise((r) => { resolveReady = r; });
  if (reduced) {
    // static alternative: the first frame, first caption
    showCaption(0); cap.style.opacity = 1; toggle.hidden = true;
    resolveReady();
  } else {
    video.src = src;
    const done = () => resolveReady();
    video.addEventListener('canplay', done, { once: true });
    video.addEventListener('error', () => { root.classList.add('is-fallback'); done(); }, { once: true });
    setTimeout(done, 6000);
  }

  return {
    ready,
    play() {
      if (reduced) return;
      video.play().then(() => root.classList.add('is-playing')).catch(() => { root.classList.add('is-fallback'); });
      io.observe(root);
      raf = requestAnimationFrame(tick);
    },
    destroy() { cancelAnimationFrame(raf); io.disconnect(); },
  };
}
