import { boot, preloader, $, $$, h, esc, pad, reduced, finePointer, gsap, ScrollTrigger, setCursor, roll } from '../core.js';
import { photos, series, byN, heroFrames, CATEGORIES, STYLES, texSrc } from '../data.js';
import { mountViewfinder } from '../viewfinder/hero.js';
import { getLenis } from '../core.js';

const app = boot({ page: 'home', next: { href: 'work.html', label: 'The Work', sub: 'All 125 frames · 全部作品', image: byN(86).m } });

/* ---------- Stats ---------- */
$('[data-stats]').innerHTML = [
  [photos.length, 'Frames in the archive', '幅作品'],
  [series.length, 'Curated series', '个系列'],
  [STYLES.length, 'Visual styles', '种风格'],
  [3, 'Cities after dusk', '座城市'],
].map(([n, en, zh]) => `<div class="stat" data-fade><b data-count="${n}">${n}</b><span class="mono muted">${en} · ${zh}</span></div>`).join('');

/* ---------- Featured series cards ---------- */
$('[data-cards]').innerHTML = series.slice(0, 6).map((s, i) => {
  const cover = byN(s.cover);
  return `<a class="card roll-host" href="series.html?id=${s.id}" data-cursor="Open series" data-fade>
    <div class="card__media">
      <img src="${cover.m}" alt="${esc(cover.title)} — ${esc(s.en)}" loading="lazy" data-parallax="6">
      <span class="count mono">${pad(s.frames.length)} frames</span>
    </div>
    <div class="card__meta mono"><span>${pad(i + 1)} / ${esc(s.region)}</span><span>${s.tags.join(' • ')}</span></div>
    <h3 class="card__title"><span data-roll>${esc(s.en)}</span><span class="zh">${esc(s.zh)}</span></h3>
  </a>`;
}).join('');

/* ---------- Marquee (dark band) ---------- */
const pick = (arr, step, offset) => arr.filter((_, i) => i % step === offset);
const rowA = pick(photos, 3, 0).slice(0, 18);
const rowB = pick(photos, 3, 1).slice(0, 18);
const marqueeHost = $('[data-marquee]');
[rowA, rowB].forEach((row, r) => {
  const track = h(`<div class="marquee" data-dir="${r ? 1 : -1}"></div>`);
  const html = row.map((p) => `<a href="work.html?p=${p.n}" data-cursor="View" aria-label="${esc(p.title)}"><img src="${p.s}" alt="" loading="lazy" style="aspect-ratio:${p.ratio.toFixed(3)}"></a>`).join('');
  track.innerHTML = html + html; // doubled for seamless loop
  marqueeHost.append(track);
});
if (!reduced) {
  const tracks = $$('.marquee', marqueeHost);
  const offsets = tracks.map(() => 0);
  let velocity = 0;
  ScrollTrigger.create({ trigger: marqueeHost, start: 'top bottom', end: 'bottom top', onUpdate: (self) => { velocity = self.getVelocity() / 300; } });
  gsap.ticker.add((_, dt) => {
    velocity *= 0.92;
    tracks.forEach((t, i) => {
      const dir = +t.dataset.dir;
      const half = t.scrollWidth / 2;
      offsets[i] += (0.5 + Math.abs(velocity)) * dir * (dt / 16.7);
      if (offsets[i] <= -half) offsets[i] += half;
      if (offsets[i] > 0) offsets[i] -= half;
      t.style.transform = `translate3d(${offsets[i]}px,0,0) skewX(${gsap.utils.clamp(-8, 8, velocity * -1.2)}deg)`;
    });
  });
}

/* ---------- Category index with hover preview ---------- */
$('[data-index]').innerHTML = STYLES.map((c, i) => {
  const count = photos.filter((p) => p.style === c.id).length;
  return `<a class="index-row roll-host" href="work.html?style=${c.id}" data-preview="${byN(c.cover).s}">
    <span class="mono muted">${pad(i + 1)}</span>
    <span class="name"><span data-roll>${c.en}</span></span>
    <span class="zh">${c.zh} · ${pad(count)}</span>
    <span class="arrow" aria-hidden="true">→</span>
  </a>`;
}).join('');
if (finePointer) {
  const pv = $('.hover-preview');
  const img = $('img', pv);
  let x = 0, y = 0, cx = 0, cy = 0;
  window.addEventListener('pointermove', (e) => { x = e.clientX; y = e.clientY; }, { passive: true });
  gsap.ticker.add(() => { cx += (x - cx) * 0.14; cy += (y - cy) * 0.14; pv.style.left = `${cx}px`; pv.style.top = `${cy}px`; });
  $$('[data-preview]').forEach((row) => {
    row.addEventListener('pointerenter', () => { img.src = row.dataset.preview; pv.classList.add('is-on'); });
    row.addEventListener('pointerleave', () => pv.classList.remove('is-on'));
  });
}

/* ---------- Hero: Beneath the light ---------- */
const hero = mountViewfinder($('[data-vf]'), { reduced, lenis: getLenis() });
const heroReady = hero.ready;
if (new URLSearchParams(location.search).has('still')) window.__hero = hero;

/* ---------- Intro sequence ---------- */
preloader(heroReady).then(() => {
  app.ready();
  hero.play();
  // count-up stats
  $$('[data-count]').forEach((b) => {
    const target = +b.dataset.count; const o = { v: 0 };
    ScrollTrigger.create({ trigger: b, start: 'top 90%', once: true, onEnter: () => gsap.to(o, { v: target, duration: 1.6, ease: 'expo.out', onUpdate: () => { b.textContent = Math.round(o.v); } }) });
  });
});
