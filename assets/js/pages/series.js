import { boot, $, $$, esc, pad, reduced, gsap, getLenis } from '../core.js';
import { series, seriesById, travel, travelById, byN, photos } from '../data.js';
import { guides } from '../guides.js';
import { openLightbox } from '../lightbox.js';

/* One module, two pages: series.html (ongoing themes) and travel.html (journeys as chapters). */
const MODE = document.body.dataset.page === 'travel' ? 'travel' : 'series';
const COL = MODE === 'travel' ? travel : series;
const root = $('[data-series-root]');
const id = new URLSearchParams(location.search).get('id');

// the travel stories used to live under series.html?id=… — keep old links working
if (MODE === 'series' && id && travelById(id)) location.replace(`travel.html?id=${encodeURIComponent(id)}`);
else {
  const current = id && (MODE === 'travel' ? travelById(id) : seriesById(id));
  if (!current) (MODE === 'travel' ? renderTravelIndex() : renderIndex()); else renderDetail(current);
}

/* ================= Travel index ================= */
function renderTravelIndex() {
  document.title = 'Travel · 游记 — X1NG';
  const app = boot({ page: 'travel', next: { href: 'projects.html', label: 'Projects', sub: 'Beyond the camera · 项目与简历', image: byN(47).m } });
  const total = travel.reduce((a, t) => a + t.frames.length, 0);
  root.innerHTML = `
    <section class="page-head wrap">
      <div class="page-head__row">
        <h1 class="h1"><span data-split>Travel</span><sup>${pad(travel.length)}</sup></h1>
        <p class="lead" data-fade>${travel.length} journeys, ${total} frames — each one a chapter, with field notes or a written journal. <span class="zh muted">游记：每段旅程是一章，配攻略或随笔。</span></p>
      </div>
    </section>
    <section class="wrap chapters">
      ${travel.map((t) => {
        const cover = byN(t.cover);
        const thumbs = t.frames.filter((n) => n !== t.cover).slice(0, 4).map(byN);
        return `
        <article class="chapter" data-scramble-host>
          <div class="chapter__no" aria-hidden="true">${pad(t.chapter)}</div>
          <div class="chapter__head">
            <p class="mono muted"><span data-scramble>Chapter ${pad(t.chapter)} · ${esc(t.year)} · ${esc(t.days || '')}</span></p>
            <h2 class="chapter__title"><a href="travel.html?id=${t.id}">${esc(t.en)}</a></h2>
            <p class="zh muted">${esc(t.zh)} · ${esc(t.region)}</p>
            <p class="chapter__lede">${esc(t.lede)}</p>
            <div class="chapter__links">
              <a class="pill roll-host" href="travel.html?id=${t.id}"><span class="dot"></span><span data-roll>Open chapter · ${pad(t.frames.length)} frames</span></a>
              ${t.journal ? `<a class="pill pill--ghost roll-host" href="${t.journal.href}"><span class="dot"></span><span data-roll>Read the journal · 随笔</span></a>` : ''}
              ${t.guide ? `<a class="pill pill--ghost roll-host" href="travel.html?id=${t.id}#notes-title"><span class="dot"></span><span data-roll>Field guide · 攻略</span></a>` : ''}
            </div>
          </div>
          <a class="chapter__cover" href="travel.html?id=${t.id}" data-cursor="Open chapter" data-reveal>
            <img src="${cover.m}" srcset="${cover.m} 1280w, ${cover.l} 2400w" sizes="(max-width: 860px) 100vw, 62vw" alt="${esc(cover.title)}" loading="lazy" data-parallax="5">
          </a>
          <div class="chapter__strip">
            ${thumbs.map((p, i) => `<a href="travel.html?id=${t.id}" data-reveal data-reveal-delay="${(0.1 + i * 0.07).toFixed(2)}" aria-label="${esc(p.title)}"><img src="${p.s}" alt="" loading="lazy"></a>`).join('')}
          </div>
        </article>`;
      }).join('')}
    </section>`;
  app.ready();
}

/* ================= Series index ================= */
function renderIndex() {
  document.title = 'Series — X1NG';
  const app = boot({ page: 'series', next: { href: 'travel.html', label: 'Travel', sub: 'Journeys as chapters · 游记', image: byN(47).m } });
  const total = series.reduce((a, s) => a + s.frames.length, 0);
  root.innerHTML = `
    <section class="page-head wrap">
      <div class="page-head__row">
        <h1 class="h1"><span data-split>Series</span><sup>${pad(series.length)}</sup></h1>
        <p class="lead" data-fade>Five ongoing studies, ${total} frames — cities, altitude, architecture, people and living things. The journeys have their own chapters in <a href="travel.html" style="text-decoration:underline;text-underline-offset:3px">Travel</a>. <span class="zh muted">五个持续进行的主题；旅行游记见 Travel。</span></p>
      </div>
      <div class="series-list">
        ${series.map((s, i) => `
          <a class="series-row roll-host" href="series.html?id=${s.id}" data-cursor="Open" data-fade>
            <span class="idx mono">${pad(i + 1)}</span>
            <span class="name"><span data-roll>${esc(s.en)}</span><span class="zh">${esc(s.zh)} · ${esc(s.region)}</span></span>
            <span class="desc">${esc(s.lede)}</span>
            <span class="thumb" data-reveal><img src="${byN(s.cover).m}" alt="" loading="lazy"></span>
          </a>`).join('')}
      </div>
    </section>`;
  app.ready();
}

/* ================= Detail ================= */
function renderDetail(s) {
  document.title = `${s.en} · ${s.zh} — X1NG`;
  const idx = COL.indexOf(s);
  const next = COL[(idx + 1) % COL.length];
  const base = MODE === 'travel' ? 'travel.html' : 'series.html';
  const word = MODE === 'travel' ? 'Chapter' : 'Series';
  const app = boot({ page: MODE, dark: true, next: { href: `${base}?id=${next.id}`, label: next.en, sub: `Next ${word.toLowerCase()} · ${next.zh}`, image: byN(next.cover).m } });
  const cover = byN(s.cover);
  const frames = s.frames.map(byN);
  const years = s.year;

  // Editorial rhythm: full → wide+tall → half+half → offset …
  const pattern = ['full', 'wide', 'tall', 'half', 'half', 'offset', 'tall', 'wide'];
  const seq = frames.filter((p) => p.n !== s.cover).map((p, i) => {
    let kind = pattern[i % pattern.length];
    // choose layouts that suit the photo's orientation
    if (p.ratio < 0.9 && (kind === 'full' || kind === 'wide')) kind = 'tall';
    if (p.ratio > 1.9 && kind !== 'full') kind = 'full';
    return { p, kind };
  });

  root.innerHTML = `
    <section class="s-hero">
      <div class="s-hero__media"><img src="${cover.l}" alt="${esc(cover.title)}" data-hero-img></div>
      <div class="s-hero__content">
        <p class="mono" style="color:var(--on-dark-2)"><a href="${base}">${MODE === 'travel' ? 'Travel' : 'Series'}</a> / ${word} ${pad(idx + 1)} of ${pad(COL.length)}</p>
        <h1 class="h1 s-hero__title"><span data-split>${esc(s.en)}</span><span class="zh" data-fade>${esc(s.zh)}</span></h1>
        <div class="s-meta mono">
          <span>Region<b>${esc(s.region)}</b></span>
          <span>Year<b>${esc(years)}</b></span>
          <span>Frames<b data-scramble>${pad(frames.length)}</b></span>
          <span>Tags<b>${s.tags.map(esc).join(' · ')}</b></span>
        </div>
      </div>
    </section>

    <section class="section wrap">
      <div class="s-intro">
        <p class="lead" data-split>${esc(s.lede)}</p>
        <p class="zh" data-fade>${esc(s.ledeZh)}</p>
        ${s.journal ? `<div class="s-intro__links" data-fade><p class="mono" style="color:var(--on-dark-2);margin-bottom:12px">${esc(s.journal.en)} · ${esc(s.journal.zh)}</p><a class="pill pill--light roll-host" href="${s.journal.href}"><span class="dot"></span><span data-roll>Read the journal · 阅读随笔</span></a></div>` : ''}
      </div>
    </section>

    <section class="wrap">
      <div class="sequence">
        ${seq.map(({ p, kind }) => `
          <figure class="seq seq--${kind}" data-n="${p.n}" data-cursor="View" data-reveal tabindex="0" role="button" aria-label="Open ${esc(p.title)}">
            <img src="${p.m}" srcset="${p.m} 1280w, ${p.l} 2400w" sizes="${kind === 'full' ? '100vw' : '60vw'}" alt="${esc(p.title)}" loading="lazy" data-parallax="5">
            <figcaption class="mono"><span>${esc(p.title)} · ${esc(p.zh)}</span><span>#${pad(p.n, 3)}</span></figcaption>
          </figure>`).join('')}
      </div>
    </section>

    ${s.guide ? renderGuide(guides[s.guide]) : ''}

    <section class="section wrap">
      <div class="section-head" style="margin-bottom:28px">
        <h2 class="h3" data-split>${MODE === 'travel' ? 'Other chapters' : 'Other series'}</h2>
        <a class="pill pill--light roll-host" href="${base}"><span class="dot"></span><span data-roll>${MODE === 'travel' ? 'All travel' : 'All series'}</span></a>
      </div>
      <div class="series-list" style="margin-top:0;border-color:var(--line-dark)">
        ${COL.filter((o) => o !== s).slice(0, 3).map((o) => `
          <a class="series-row roll-host" href="${base}?id=${o.id}" style="border-color:var(--line-dark)" data-cursor="Open">
            <span class="idx mono">${pad(COL.indexOf(o) + 1)}</span>
            <span class="name"><span data-roll>${esc(o.en)}</span><span class="zh">${esc(o.zh)}</span></span>
            <span class="desc" style="color:var(--on-dark-2)">${esc(o.lede)}</span>
            <span class="thumb"><img src="${byN(o.cover).s}" alt="" loading="lazy"></span>
          </a>`).join('')}
      </div>
    </section>`;

  // lightbox over this series
  const list = [cover, ...seq.map((x) => x.p)];
  const open = (n) => openLightbox(list, list.findIndex((p) => p.n === n));
  $$('.seq').forEach((f) => {
    f.addEventListener('click', () => open(+f.dataset.n));
    f.addEventListener('keydown', (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); open(+f.dataset.n); } });
  });
  $('[data-hero-img]').addEventListener('click', () => open(cover.n));

  app.ready();
  if (location.hash) {
    const target = document.querySelector(location.hash);
    if (target) setTimeout(() => (getLenis() ? getLenis().scrollTo(target, { offset: -90, duration: 1.6 }) : target.scrollIntoView()), 700);
  }
  if (!reduced) {
    gsap.to('[data-hero-img]', { scale: 1, duration: 2.4, ease: 'expo.out' });
    gsap.to('[data-hero-img]', { yPercent: 18, ease: 'none', scrollTrigger: { trigger: '.s-hero', start: 'top top', end: 'bottom top', scrub: true } });
  } else $('[data-hero-img]').style.transform = 'none';
  void photos;
}

function renderGuide(g) {
  if (!g) return '';
  return `
    <section class="section wrap" aria-labelledby="notes-title">
      <div class="notes">
        <div class="notes__side">
          <p class="mono" style="color:var(--on-dark-2)">Travel guide · 旅行攻略</p>
          <h2 id="notes-title" class="h2" data-split>${esc(g.title.split(' · ')[0])}</h2>
          <p class="zh" style="color:var(--on-dark-2);line-height:1.9" data-fade>${esc(g.intro)}</p>
          <div class="facts" data-fade>
            ${g.facts.map(([k, v]) => `<div class="fact"><span class="mono">${esc(k)}</span><p>${esc(v)}</p></div>`).join('')}
          </div>
          <div style="display:flex;gap:8px;flex-wrap:wrap" data-fade>
            ${g.link ? `<a class="pill pill--light roll-host" href="${g.link.href}" target="_blank" rel="noopener"><span class="dot"></span><span data-roll>${esc(g.link.label.split(' · ')[0])}</span></a>` : ''}
            ${g.map ? `<a class="pill pill--ghost roll-host" href="${g.map.href}" target="_blank" rel="noopener"><span class="dot"></span><span data-roll>${esc(g.map.label.split(' · ')[0])}</span></a>` : ''}
          </div>
        </div>
        <div class="notes__main">
          ${g.days.map((day, i) => `
            <details class="day" ${i === 0 ? 'open' : ''}>
              <summary><span class="mono" style="color:var(--on-dark-2)">${esc(day.d)}</span><span class="t">${esc(day.t)}</span><span class="pm" aria-hidden="true">+</span></summary>
              <div class="day__body">
                ${day.blocks.map(([head, items]) => `<div>${head ? `<h4>${esc(head)}</h4>` : ''}<ul>${items.map((x) => `<li>${esc(x)}</li>`).join('')}</ul></div>`).join('')}
              </div>
            </details>`).join('')}
        </div>
      </div>
    </section>`;
}
