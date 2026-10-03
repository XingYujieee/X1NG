import { boot, $, $$, esc, pad, reduced, gsap } from '../core.js';
import { series, seriesById, byN, photos } from '../data.js';
import { guides } from '../guides.js';
import { openLightbox } from '../lightbox.js';

const root = $('[data-series-root]');
const id = new URLSearchParams(location.search).get('id');
const current = id && seriesById(id);

if (!current) renderIndex(); else renderDetail(current);

/* ================= Index ================= */
function renderIndex() {
  document.title = 'Series — X1NG';
  const app = boot({ page: 'series', next: { href: 'raw.html', label: 'RAW Lab', sub: 'Before & after · 后期对比', image: byN(39).m } });
  const total = series.reduce((a, s) => a + s.frames.length, 0);
  root.innerHTML = `
    <section class="page-head wrap">
      <div class="page-head__row">
        <h1 class="h1"><span data-split>Series</span><sup>${pad(series.length)}</sup></h1>
        <p class="lead" data-fade>Seven bodies of work, ${total} frames — two long journeys and five ongoing studies. <span class="zh muted">两段长途旅行，五个持续进行的主题。</span></p>
      </div>
      <div class="series-list">
        ${series.map((s, i) => `
          <a class="series-row roll-host" href="series.html?id=${s.id}" data-cursor="Open" data-fade>
            <span class="idx mono">${pad(i + 1)}</span>
            <span class="name"><span data-roll>${esc(s.en)}</span><span class="zh">${esc(s.zh)} · ${esc(s.region)}</span></span>
            <span class="desc">${esc(s.lede)}</span>
            <span class="thumb"><img src="${byN(s.cover).m}" alt="" loading="lazy"></span>
          </a>`).join('')}
      </div>
    </section>`;
  app.ready();
}

/* ================= Detail ================= */
function renderDetail(s) {
  document.title = `${s.en} · ${s.zh} — X1NG`;
  const idx = series.indexOf(s);
  const next = series[(idx + 1) % series.length];
  const app = boot({ page: 'series', dark: true, next: { href: `series.html?id=${next.id}`, label: next.en, sub: `Next series · ${next.zh}`, image: byN(next.cover).m } });
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
        <p class="mono" style="color:var(--on-dark-2)"><a href="series.html">Series</a> / ${pad(idx + 1)} of ${pad(series.length)}</p>
        <h1 class="h1 s-hero__title"><span data-split>${esc(s.en)}</span><span class="zh" data-fade>${esc(s.zh)}</span></h1>
        <div class="s-meta mono">
          <span>Region<b>${esc(s.region)}</b></span>
          <span>Year<b>${esc(years)}</b></span>
          <span>Frames<b>${pad(frames.length)}</b></span>
          <span>Tags<b>${s.tags.map(esc).join(' · ')}</b></span>
        </div>
      </div>
    </section>

    <section class="section wrap">
      <div class="s-intro">
        <p class="lead" data-split>${esc(s.lede)}</p>
        <p class="zh" data-fade>${esc(s.ledeZh)}</p>
      </div>
    </section>

    <section class="wrap">
      <div class="sequence">
        ${seq.map(({ p, kind }) => `
          <figure class="seq seq--${kind}" data-n="${p.n}" data-cursor="View" data-fade tabindex="0" role="button" aria-label="Open ${esc(p.title)}">
            <img src="${p.m}" srcset="${p.m} 1280w, ${p.l} 2400w" sizes="${kind === 'full' ? '100vw' : '60vw'}" alt="${esc(p.title)}" loading="lazy" data-parallax="5">
            <figcaption class="mono"><span>${esc(p.title)} · ${esc(p.zh)}</span><span>#${pad(p.n, 3)}</span></figcaption>
          </figure>`).join('')}
      </div>
    </section>

    ${s.guide ? renderGuide(guides[s.guide]) : ''}

    <section class="section wrap">
      <div class="section-head" style="margin-bottom:28px">
        <h2 class="h3" data-split>Other series</h2>
        <a class="pill pill--light roll-host" href="series.html"><span class="dot"></span><span data-roll>All series</span></a>
      </div>
      <div class="series-list" style="margin-top:0;border-color:var(--line-dark)">
        ${series.filter((o) => o !== s).slice(0, 3).map((o) => `
          <a class="series-row roll-host" href="series.html?id=${o.id}" style="border-color:var(--line-dark)" data-cursor="Open">
            <span class="idx mono">${pad(series.indexOf(o) + 1)}</span>
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
