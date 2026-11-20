import { boot, preloader, $, $$, h, esc, pad, reduced, finePointer, gsap, ScrollTrigger, setCursor, roll } from '../core.js';
import { photos, series, byN, heroFrames, CATEGORIES, STYLES, texSrc, seriesById } from '../data.js';
import { mountViewfinder } from '../viewfinder/hero.js';
import { getLenis } from '../core.js';

const app = boot({ page: 'home', next: { href: 'work.html', label: 'The Work', sub: `All ${photos.length} frames · 全部作品`, image: byN(86).m } });

$$('[data-total]').forEach((el) => { el.textContent = photos.length; });

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
  return `<a class="card roll-host" href="series.html?id=${s.id}" data-cursor="Open series" data-scramble-host>
    <div class="card__media" data-reveal>
      <img src="${cover.m}" alt="${esc(cover.title)} — ${esc(s.en)}" loading="lazy" data-parallax="6">
      <span class="count mono">${s.tags.includes('New') ? '<b class="tag-new">New</b>' : ''}${pad(s.frames.length)} frames</span>
    </div>
    <div class="card__meta mono"><span data-scramble>${pad(i + 1)} / ${esc(s.region)}</span><span data-scramble>${s.tags.join(' • ')}</span></div>
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
  let rot = 0;
  gsap.ticker.add(() => {
    const dx = (x - cx) * 0.14; cx += dx; cy += (y - cy) * 0.14;
    rot += (gsap.utils.clamp(-14, 14, dx * 0.9) - rot) * 0.18;
    pv.style.left = `${cx}px`; pv.style.top = `${cy}px`; pv.style.setProperty('--rot', `${rot.toFixed(2)}deg`);
  });
  $$('[data-preview]').forEach((row) => {
    row.addEventListener('pointerenter', () => {
      if (img.getAttribute('src') !== row.dataset.preview) { img.src = row.dataset.preview; pv.classList.remove('is-swap'); void pv.offsetWidth; pv.classList.add('is-swap'); }
      pv.classList.add('is-on');
    });
    row.addEventListener('pointerleave', () => pv.classList.remove('is-on'));
  });
}

/* ---------- New: Egypt film strip ---------- */
const eg = $('[data-eg]');
const egSeries = seriesById('egypt');
if (eg && egSeries) {
  const frames = [...egSeries.frames].sort((a, b) => a - b).map(byN); // Luxor → Giza → Cairo
  $('[data-eg-panels]', eg).innerHTML = frames.map((p, i) => `
    <figure class="eg__panel ${p.ratio < 1 ? 'is-tall' : 'is-wide'} ${i % 2 ? 'is-low' : 'is-high'}" data-n="${p.n}">
      <a class="eg__frame" href="work.html?p=${p.n}" data-cursor="View" data-reveal data-reveal-delay="${(i * 0.06).toFixed(2)}">
        <img src="${p.m}" srcset="${p.m} 1280w, ${p.l} 2400w" sizes="(max-width: 760px) 86vw, 60vw" alt="${esc(p.title)} — ${esc(p.place)}" loading="lazy" decoding="async">
      </a>
      <figcaption>
        <span class="mono">#${pad(p.n, 3)} · ${esc(p.place)}</span>
        <b>${esc(p.title)}</b><span class="zh">${esc(p.zh)}</span>
      </figcaption>
    </figure>`).join('');
  const track = $('[data-eg-track]', eg);
  const word = $('[data-eg-word]', eg);
  const bar = $('[data-eg-bar]', eg);
  const countEl = $('[data-eg-count]', eg);
  const placeEl = $('[data-eg-place]', eg);
  const panels = $$('.eg__panel', eg);
  const imgs = panels.map((p) => $('img', p));
  const total = frames.length;
  const strip = window.matchMedia('(min-width: 761px)');
  let dist = 0, prog = 0, shown = -1, vel = 0, x = 0;
  const measure = () => {
    if (!strip.matches || reduced) { eg.style.height = ''; dist = 0; track.style.transform = ''; return; }
    dist = Math.max(0, track.scrollWidth - innerWidth);
    eg.style.height = `${dist + innerHeight}px`;
  };
  measure();
  window.addEventListener('resize', () => { measure(); ScrollTrigger.refresh(); });
  if (!reduced) {
    ScrollTrigger.create({
      trigger: eg, start: 'top top', end: 'bottom bottom',
      onUpdate: (self) => { prog = self.progress; vel = self.getVelocity(); },
      onRefresh: (self) => { prog = self.progress; },
    });
    gsap.ticker.add(() => {
      if (!dist) return;
      const tx = -prog * dist;
      x += (tx - x) * 0.14;
      const skew = gsap.utils.clamp(-6, 6, (tx - x) * -0.012);
      track.style.transform = `translate3d(${x.toFixed(2)}px,0,0)`;
      word.style.transform = `translate3d(${(x * 0.35).toFixed(2)}px,0,0)`;
      bar.style.transform = `scaleX(${prog.toFixed(4)})`;
      const vw = innerWidth;
      let best = 0, bestD = Infinity;
      panels.forEach((p, i) => {
        const r = p.getBoundingClientRect();
        const c = (r.left + r.width / 2 - vw / 2) / vw; // −1 … 1 across the screen
        imgs[i].style.transform = `translate3d(${(c * -9).toFixed(2)}%,0,0) scale(1.22)`;
        p.style.transform = `skewX(${skew.toFixed(2)}deg)`;
        if (Math.abs(c) < bestD) { bestD = Math.abs(c); best = i; }
      });
      const idx = prog < 0.04 ? -1 : best;
      if (idx !== shown) {
        shown = idx;
        countEl.textContent = `${pad(idx + 1)} / ${pad(total)}`;
        placeEl.textContent = idx < 0 ? 'Luxor, Egypt' : `${frames[idx].place}, Egypt`;
      }
    });
  }
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
