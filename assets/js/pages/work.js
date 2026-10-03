import { boot, $, $$, esc, pad, reduced, gsap, ScrollTrigger, getLenis } from '../core.js';
import { photos, CATEGORIES, STYLES, styleById, byN, texSrc } from '../data.js';
import { openLightbox } from '../lightbox.js';
import { webglAvailable } from '../webgl/hero.js';

const app = boot({ page: 'work', next: { href: 'series.html', label: 'The Series', sub: 'Seven curated stories · 七个系列', image: byN(102).m } });
const params = new URLSearchParams(location.search);
let filter = styleById(params.get('style')) ? params.get('style') : 'all';
let view = params.get('view') === 'field' ? 'field' : 'grid';

const visible = () => (filter === 'all' ? photos : photos.filter((p) => p.style === filter));

/* ---------- Chips ---------- */
const chipHtml = () => [{ id: 'all', en: 'All', count: photos.length }, ...STYLES.map((c) => ({ ...c, count: photos.filter((p) => p.style === c.id).length }))]
  .map((c) => `<button type="button" class="chip" data-filter="${c.id}" aria-pressed="${c.id === filter}" title="${c.zh || ''}">${c.en}<sup>${c.count}</sup></button>`).join('');
$('[data-chips]').innerHTML = chipHtml();
$('[data-chips-field]').innerHTML = chipHtml();

/* ---------- Grid ---------- */
const grid = $('[data-grid]');
grid.innerHTML = photos.map((p) => `
  <a class="tile" href="work.html?p=${p.n}" data-n="${p.n}" data-style="${p.style}" data-cursor="View" aria-label="${esc(p.title)} ${esc(p.zh)}">
    <img src="${p.s}" srcset="${p.s} 640w, ${p.m} 1280w" sizes="(max-width: 700px) 50vw, 25vw" width="${p.w}" height="${p.h}" alt="${esc(p.title)}${p.place ? ` — ${esc(p.place)}` : ''}" loading="lazy" decoding="async">
    <span class="tile__cap"><b>${esc(p.title)}</b><span class="mono">${esc(p.place || styleById(p.style).en)}</span></span>
  </a>`).join('');
$$('.tile img', grid).forEach((img) => { if (img.complete) img.classList.add('is-loaded'); else img.addEventListener('load', () => img.classList.add('is-loaded'), { once: true }); });

grid.addEventListener('click', (e) => {
  const a = e.target.closest('.tile');
  if (!a) return;
  e.preventDefault();
  openAt(+a.dataset.n);
});

function openAt(n) {
  const list = visible().some((p) => p.n === n) ? visible() : photos;
  openLightbox(list, list.findIndex((p) => p.n === n), {
    onNavigate(p) { const u = new URL(location.href); if (p) u.searchParams.set('p', p.n); else u.searchParams.delete('p'); history.replaceState(null, '', u); },
  });
}

function applyFilter(next, animate = true) {
  filter = next;
  $$('[data-filter]').forEach((b) => b.setAttribute('aria-pressed', b.dataset.filter === filter));
  const u = new URL(location.href);
  u.searchParams.delete('cat'); if (filter === 'all') u.searchParams.delete('style'); else u.searchParams.set('style', filter);
  history.replaceState(null, '', u);
  const tiles = $$('.tile', grid);
  const show = () => {
    tiles.forEach((t) => t.classList.toggle('is-hidden', filter !== 'all' && t.dataset.style !== filter));
    $('[data-total]').textContent = visible().length;
    const st = styleById(filter), note = $('[data-style-note]');
    note.innerHTML = st ? `${esc(st.note)} <span class="zh muted">${esc(st.zh)} · ${esc(st.noteZh)}</span>` : 'Every frame in the archive, curated into seven visual styles. Open any photograph, or step into the field. <span class="zh muted">全部作品 · 按风格浏览 · 3D 漫游</span>';
    ScrollTrigger.refresh();
    if (animate && !reduced) gsap.fromTo(tiles.filter((t) => !t.classList.contains('is-hidden')).slice(0, 16), { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8, ease: 'expo.out', stagger: 0.03 });
  };
  if (animate && !reduced) gsap.to(grid, { opacity: 0, duration: 0.2, onComplete: () => { show(); gsap.to(grid, { opacity: 1, duration: 0.3 }); } });
  else show();
  if (field) field.setItems(fieldItems());
}
document.addEventListener('click', (e) => {
  const b = e.target.closest('[data-filter]');
  if (b) applyFilter(b.dataset.filter);
});

/* ---------- Field (3D) view ---------- */
const fieldEl = $('[data-field]');
const fieldTitle = $('[data-field-title]');
let field = null;
const canField = webglAvailable();
const fieldItems = () => visible().map((p) => ({ n: p.n, src: texSrc(p), ratio: p.ratio, title: p.title, zh: p.zh, place: p.place }));

async function setView(next) {
  if (next === 'field' && !canField) next = 'grid';
  view = next;
  $$('[data-view]').forEach((b) => b.setAttribute('aria-pressed', b.dataset.view === view));
  const u = new URL(location.href);
  if (view === 'field') u.searchParams.set('view', 'field'); else u.searchParams.delete('view');
  history.replaceState(null, '', u);
  if (view === 'field') {
    if (!field) {
      const { createField } = await import('../webgl/field.js');
      field = createField(fieldEl, {
        onHover(it) { fieldTitle.innerHTML = it ? `${esc(it.title)}<span class="zh">${esc(it.zh)}</span>` : ''; },
        onSelect(it) { openAt(it.n); },
      });
      field.setItems(fieldItems());
    }
    fieldEl.classList.add('is-on');
    document.body.classList.add('field-mode');
    getLenis()?.stop();
    field.start();
    if (!reduced) gsap.fromTo(fieldEl, { clipPath: 'inset(50% 0% 50% 0%)' }, { clipPath: 'inset(0% 0% 0% 0%)', duration: 1, ease: 'expo.inOut' });
  } else if (field && fieldEl.classList.contains('is-on')) {
    const done = () => { fieldEl.classList.remove('is-on'); document.body.classList.remove('field-mode'); field.stop(); getLenis()?.start(); };
    if (reduced) done(); else gsap.to(fieldEl, { clipPath: 'inset(50% 0% 50% 0%)', duration: 0.8, ease: 'expo.inOut', onComplete: done });
  }
}
$$('[data-view]').forEach((b) => b.addEventListener('click', () => setView(b.dataset.view)));
if (!canField) $$('[data-view="field"]').forEach((b) => { b.disabled = true; b.title = '3D view needs WebGL'; });

/* ---------- Init ---------- */
applyFilter(filter, false);
app.ready();
if (!reduced) gsap.from($$('.tile', grid).filter((t) => !t.classList.contains('is-hidden')).slice(0, 12), { opacity: 0, y: 60, duration: 1.2, ease: 'expo.out', stagger: 0.05, delay: 0.3 });
if (view === 'field') setView('field');
const deep = +params.get('p');
if (deep && byN(deep)) setTimeout(() => openAt(deep), 400);
void pad;
