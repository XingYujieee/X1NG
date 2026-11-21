import { boot, $, $$, esc, pad, reduced, gsap, ScrollTrigger, getLenis, finePointer } from '../core.js';
import { byN } from '../data.js';
import { PROJECTS, PROJECT_KINDS, CV, coverSvg } from '../profile.js';
import { scramble } from '../fx.js';
import { mountInk, paletteFromHues } from '../ink.js';

const app = boot({ page: 'projects', next: { href: 'about.html', label: 'About Xing', sub: 'The person behind the lens · 关于我', image: byN(95).m } });

/* ---------- Project list ---------- */
let filter = 'all';
const list = $('[data-proj-list]');
$('[data-proj-count]').textContent = pad(PROJECTS.length);
list.innerHTML = PROJECTS.map((p, i) => `
  <details class="proj" data-kind="${p.kind}" data-scramble-host data-fade>
    <summary>
      <span class="proj__tile">${coverSvg(p, i)}</span>
      <span class="proj__idx mono">${pad(i + 1)}</span>
      <span class="proj__name"><span class="proj__en">${esc(p.en)}</span><span class="zh">${esc(p.zh)}</span></span>
      <span class="proj__one">${esc(p.one)}<span class="zh muted">${esc(p.oneZh)}</span></span>
      <span class="proj__meta mono"><span data-scramble>${esc(PROJECT_KINDS.find((k) => k.id === p.kind)?.en || '')}</span><span>${esc(p.year || '—')}</span><span class="proj__status" style="--h:${p.hue}">${esc(p.status)}</span></span>
      <span class="proj__pm" aria-hidden="true">+</span>
    </summary>
    <div class="proj__body">
      <div class="proj__text">
        <p>${esc(p.body)}</p>
        <p class="zh muted">${esc(p.bodyZh)}</p>
      </div>
      <div class="proj__side">
        <p class="mono muted">Stack · 技术</p>
        <ul class="proj__stack">${p.stack.map((s) => `<li>${esc(s)}</li>`).join('')}</ul>
        ${p.links.length ? `<div class="proj__links">${p.links.map((l) => `<a class="pill pill--ghost roll-host" href="${l.href}" target="_blank" rel="noopener"><span class="dot"></span><span data-roll>${esc(l.label)} ↗</span></a>`).join('')}</div>` : ''}
      </div>
    </div>
  </details>`).join('');

const chips = $('[data-proj-chips]');
chips.innerHTML = [{ id: 'all', en: 'All', zh: '全部' }, ...PROJECT_KINDS].map((k) => {
  const n = k.id === 'all' ? PROJECTS.length : PROJECTS.filter((p) => p.kind === k.id).length;
  return `<button type="button" class="chip" data-kind-filter="${k.id}" aria-pressed="${k.id === filter}" title="${k.zh}">${k.en}<sup>${n}</sup></button>`;
}).join('');
chips.addEventListener('click', (e) => {
  const b = e.target.closest('[data-kind-filter]');
  if (!b) return;
  filter = b.dataset.kindFilter;
  $$('[data-kind-filter]', chips).forEach((x) => x.setAttribute('aria-pressed', x === b));
  const rows = $$('.proj', list);
  rows.forEach((r) => r.classList.toggle('is-hidden', filter !== 'all' && r.dataset.kind !== filter));
  if (!reduced) gsap.fromTo(rows.filter((r) => !r.classList.contains('is-hidden')), { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: 0.7, ease: 'expo.out', stagger: 0.04 });
  ScrollTrigger.refresh();
});

// smooth open/close + scramble the meta when a row opens
$$('.proj', list).forEach((d) => {
  const body = $('.proj__body', d);
  $('summary', d).addEventListener('click', (e) => {
    if (reduced) return;
    e.preventDefault();
    if (d.open) {
      gsap.to(body, { height: 0, opacity: 0, duration: 0.5, ease: 'expo.inOut', onComplete: () => { d.open = false; gsap.set(body, { clearProps: 'all' }); ScrollTrigger.refresh(); } });
    } else {
      d.open = true;
      gsap.fromTo(body, { height: 0, opacity: 0 }, { height: 'auto', opacity: 1, duration: 0.7, ease: 'expo.out', onComplete: () => { gsap.set(body, { clearProps: 'height' }); ScrollTrigger.refresh(); } });
      $$('[data-scramble]', d).forEach((s) => scramble(s, { duration: 0.5 }));
    }
  });
});

// tilt the cover tile towards the pointer
if (finePointer && !reduced) {
  $$('.proj summary', list).forEach((s) => {
    const tile = $('.proj__tile', s);
    s.addEventListener('pointermove', (e) => {
      const r = tile.getBoundingClientRect();
      const dx = (e.clientX - (r.left + r.width / 2)) / innerWidth;
      const dy = (e.clientY - (r.top + r.height / 2)) / innerHeight;
      gsap.to(tile, { rotateY: dx * 40, rotateX: -dy * 40, duration: 0.6, ease: 'power3.out' });
    });
    s.addEventListener('pointerleave', () => gsap.to(tile, { rotateY: 0, rotateX: 0, duration: 0.9, ease: 'elastic.out(1,.4)' }));
  });
}

/* ---------- CV ---------- */
const todo = '<span class="todo">To be added · 待补充</span>';
const rows = (items) => items.map((x) => `
  <li class="${x.todo ? 'is-todo' : ''}">
    <span class="mono">${esc(x.when || '—')}</span>
    <span><b>${esc(x.what)}</b>${x.where ? `<span class="muted">${esc(x.where)}</span>` : (x.todo || x.where === '' ? `<span>${todo}</span>` : '')}</span>
  </li>`).join('');
$('[data-cv]').innerHTML = `
  <div class="cv__block" data-fade><p class="mono">Education · 教育</p><ul class="cv__rows">${rows(CV.education)}</ul></div>
  <div class="cv__block" data-fade><p class="mono">Experience · 经历</p><ul class="cv__rows">${rows(CV.experience)}</ul></div>
  <div class="cv__block" data-fade><p class="mono">Interests · 研究兴趣</p><ul class="cv__tags">${CV.interests.map(([en, zh]) => `<li>${esc(en)}<span class="zh">${esc(zh)}</span></li>`).join('')}</ul></div>
  <div class="cv__block" data-fade><p class="mono">Skills · 技能</p><dl class="cv__dl">${CV.skills.map(([k, v]) => `<dt class="mono">${esc(k)}</dt><dd>${esc(v)}</dd>`).join('')}</dl></div>
  <div class="cv__block" data-fade><p class="mono">Languages · 语言</p><dl class="cv__dl">${CV.languages.map(([k, v]) => `<dt class="mono">${esc(k)}</dt><dd>${esc(v)}</dd>`).join('')}</dl></div>
  <div class="cv__block" data-fade><p class="mono">Selected projects · 代表项目</p><ul class="cv__rows">${PROJECTS.slice(0, 4).map((p) => `<li><span class="mono">${esc(p.year || '—')}</span><span><b>${esc(p.en)}</b><span class="muted">${esc(p.status)}</span></span></li>`).join('')}</ul></div>`;
$('[data-cv-pdf]').innerHTML = CV.pdf
  ? `<a class="pill pill--light roll-host" href="${CV.pdf}" download><span class="dot"></span><span data-roll>Download CV · PDF</span></a>`
  : '<span class="pill pill--ghost is-disabled" aria-disabled="true"><span class="dot"></span>PDF coming soon · 即将上传</span>';

mountInk($('.cv'), paletteFromHues(PROJECTS.map((p) => p.hue)), { strength: 0.7 });

app.ready();
if (location.hash === '#cv') setTimeout(() => { const t = $('#cv'); getLenis() ? getLenis().scrollTo(t, { offset: -40, duration: 1.4 }) : t.scrollIntoView(); }, 600);
