import { boot, preloader, $, $$, h, esc, pad, reduced, finePointer, gsap, ScrollTrigger, setCursor, roll } from '../core.js';
import { photos, series, travel, byN, heroFrames, CATEGORIES, STYLES, texSrc } from '../data.js';
import { mountViewfinder } from '../viewfinder/hero.js';
import { PROJECTS, FEATURED_PROJECTS, coverSvg } from '../profile.js';
import { getLenis } from '../core.js';

const app = boot({ page: 'home', next: { href: 'work.html', label: 'The Work', sub: `All ${photos.length} frames · 全部作品`, image: byN(86).m } });

$$('[data-total]').forEach((el) => { el.textContent = photos.length; });

/* ---------- Stats ---------- */
$('[data-stats]').innerHTML = [
  [photos.length, 'Frames in the archive', '幅作品'],
  [series.length, 'Ongoing series', '个系列'],
  [travel.length, 'Travel chapters', '章游记'],
  [STYLES.length, 'Visual styles', '种风格'],
].map(([n, en, zh]) => `<div class="stat" data-fade><b data-count="${n}">${n}</b><span class="mono muted">${en} · ${zh}</span></div>`).join('');

/* ---------- Featured series cards ---------- */
$('[data-cards]').innerHTML = series.slice(0, 4).map((s, i) => {
  const cover = byN(s.cover);
  return `<a class="card roll-host" href="series.html?id=${s.id}" data-cursor="Open series" data-scramble-host>
    <div class="card__media" data-reveal>
      <img src="${cover.m}" alt="${esc(cover.title)} — ${esc(s.en)}" loading="lazy" data-parallax="6">
      <span class="count mono">${pad(s.frames.length)} frames</span>
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

/* ---------- Beyond the camera: featured projects ---------- */
$('[data-proj-mini]').innerHTML = FEATURED_PROJECTS.map((id) => PROJECTS.find((p) => p.id === id)).filter(Boolean).map((p) => {
  const i = PROJECTS.indexOf(p);
  return `<a class="proj-card roll-host" href="projects.html" data-cursor="Projects" data-scramble-host data-fade>
    <span class="proj-card__tile">${coverSvg(p, i)}</span>
    <span class="proj-card__meta mono"><span data-scramble>${esc(p.year || '—')} · ${esc(p.status)}</span></span>
    <span class="proj-card__name"><span data-roll>${esc(p.en)}</span></span>
    <span class="zh muted">${esc(p.zh)} — ${esc(p.oneZh)}</span>
  </a>`;
}).join('');

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

/* ---------- Travel film strip: one panel per chapter ---------- */
const tv = $('[data-tv]');
if (tv && travel.length) {
  $('[data-tv-n]', tv).textContent = pad(travel.length);
  $('[data-tv-total]', tv).textContent = `${pad(travel.length)} chapters · ${travel.reduce((a, t) => a + t.frames.length, 0)} frames`;
  $('[data-tv-panels]', tv).innerHTML = travel.map((t, i) => {
    const cover = byN(t.cover);
    const side = t.frames.filter((n) => n !== t.cover).map(byN).slice(0, 2);
    return `
    <figure class="tv__panel ${i % 2 ? 'is-low' : 'is-high'}" data-place="${esc(t.region)}">
      <div class="tv__group">
        <a class="tv__frame tv__frame--main" href="travel.html?id=${t.id}" data-cursor="Open chapter" data-reveal data-reveal-delay="0">
          <img src="${cover.m}" srcset="${cover.m} 1280w, ${cover.l} 2400w" sizes="(max-width: 760px) 86vw, 50vw" alt="${esc(cover.title)}" loading="lazy" decoding="async">
        </a>
        <div class="tv__side">
          ${side.map((p, k) => `<a class="tv__frame" href="travel.html?id=${t.id}" data-cursor="Open chapter" data-reveal data-reveal-delay="${(0.12 + k * 0.08).toFixed(2)}"><img src="${p.s}" srcset="${p.s} 640w, ${p.m} 1280w" sizes="16vw" alt="${esc(p.title)}" loading="lazy" decoding="async"></a>`).join('')}
        </div>
      </div>
      <figcaption>
        <span class="mono">Chapter ${pad(t.chapter)} · ${esc(t.year)} · ${pad(t.frames.length)} frames${t.journal ? ' · Journal' : ''}${t.guide ? ' · Guide' : ''}</span>
        <b><a href="travel.html?id=${t.id}">${esc(t.en)}</a></b><span class="zh">${esc(t.zh)}</span>
      </figcaption>
    </figure>`;
  }).join('');
  const track = $('[data-tv-track]', tv);
  const word = $('[data-tv-word]', tv);
  const bar = $('[data-tv-bar]', tv);
  const countEl = $('[data-tv-count]', tv);
  const placeEl = $('[data-tv-place]', tv);
  const panels = $$('.tv__panel', tv);
  const imgs = $$('.tv__frame img', tv);
  const total = travel.length;
  const strip = window.matchMedia('(min-width: 761px)');
  let dist = 0, prog = 0, shown = -2, x = 0;
  const measure = () => {
    if (!strip.matches || reduced) { tv.style.height = ''; dist = 0; track.style.transform = ''; return; }
    dist = Math.max(0, track.scrollWidth - innerWidth);
    tv.style.height = `${dist + innerHeight}px`;
  };
  measure();
  window.addEventListener('resize', () => { measure(); ScrollTrigger.refresh(); });
  if (!reduced) {
    ScrollTrigger.create({
      trigger: tv, start: 'top top', end: 'bottom bottom',
      onUpdate: (self) => { prog = self.progress; },
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
      imgs.forEach((im) => {
        const r = im.parentElement.getBoundingClientRect();
        const c = (r.left + r.width / 2 - vw / 2) / vw; // −1 … 1 across the screen
        im.style.transform = `translate3d(${(c * -9).toFixed(2)}%,0,0) scale(1.22)`;
      });
      let best = -1, bestD = 0.35;
      panels.forEach((p, i) => {
        p.style.transform = `skewX(${skew.toFixed(2)}deg)`;
        const r = p.getBoundingClientRect();
        const d = Math.abs((r.left + r.width / 2 - vw / 2) / vw);
        if (d < bestD) { bestD = d; best = i; }
      });
      if (best !== shown) {
        shown = best;
        countEl.textContent = `${pad(best + 1)} / ${pad(total)}`;
        placeEl.textContent = best < 0 ? 'Travel · 游记' : travel[best].region;
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
