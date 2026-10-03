import { $, h, esc, pad, getLenis } from './core.js';
import { CATEGORIES, seriesOf, styleById } from './data.js';

let el, img, list = [], index = 0, lastFocus = null, onChange = null;
const catName = (id) => CATEGORIES.find((c) => c.id === id)?.en || id;

function build() {
  el = h(`
    <div class="lightbox" role="dialog" aria-modal="true" aria-label="Photo viewer" aria-hidden="true">
      <div class="lb__top">
        <span class="mono" data-lb-count>001 / 125</span>
        <button class="lb__close" type="button" aria-label="Close viewer (Esc)">✕</button>
      </div>
      <div class="lb__stage">
        <img alt="" draggable="false">
        <button class="lb__nav lb__nav--prev" type="button" aria-label="Previous photo">←</button>
        <button class="lb__nav lb__nav--next" type="button" aria-label="Next photo">→</button>
      </div>
      <div class="lb__bottom">
        <p class="lb__title" data-lb-title></p>
        <p class="lb__meta mono" data-lb-meta></p>
      </div>
    </div>`);
  document.body.append(el);
  img = $('img', el);
  $('.lb__close', el).addEventListener('click', close);
  $('.lb__nav--prev', el).addEventListener('click', () => go(-1));
  $('.lb__nav--next', el).addEventListener('click', () => go(1));
  el.addEventListener('click', (e) => { if (e.target === el || e.target.classList.contains('lb__stage')) close(); });
  document.addEventListener('keydown', (e) => {
    if (!el.classList.contains('is-open')) return;
    if (e.key === 'Escape') close();
    if (e.key === 'ArrowRight') go(1);
    if (e.key === 'ArrowLeft') go(-1);
  });
  let sx = 0, sy = 0;
  const stage = $('.lb__stage', el);
  stage.addEventListener('touchstart', (e) => { sx = e.touches[0].clientX; sy = e.touches[0].clientY; }, { passive: true });
  stage.addEventListener('touchend', (e) => {
    const dx = e.changedTouches[0].clientX - sx, dy = e.changedTouches[0].clientY - sy;
    if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy)) go(dx < 0 ? 1 : -1);
    else if (dy > 90) close();
  });
}

function render() {
  const p = list[index];
  img.classList.add('is-swapping');
  const next = new Image();
  next.src = p.l;
  const show = () => { img.src = p.l; img.alt = `${p.title}${p.place ? ` — ${p.place}` : ''}`; requestAnimationFrame(() => img.classList.remove('is-swapping')); };
  // show the small version instantly, swap to the large one when ready
  if (!next.complete) { img.src = p.s; img.classList.remove('is-swapping'); next.onload = show; } else setTimeout(show, 120);
  [list[index + 1], list[index - 1]].forEach((q) => { if (q) { const pre = new Image(); pre.src = q.l; } });
  const s = seriesOf(p.n);
  $('[data-lb-count]', el).textContent = `${pad(index + 1, 3)} / ${pad(list.length, 3)}`;
  $('[data-lb-title]', el).innerHTML = `${esc(p.title)}<span class="zh">${esc(p.zh)}</span>`;
  $('[data-lb-meta]', el).innerHTML = [
    p.place && `<span>${esc(p.place)}</span>`,
    `<a href="work.html?style=${p.style}">${esc(styleById(p.style)?.en || catName(p.cat))}</a>`,
    s && `<a href="series.html?id=${s.id}">Series: ${esc(s.en)}</a>`,
    `<span>#${pad(p.n, 3)}</span>`,
  ].filter(Boolean).join('');
  onChange?.(p);
}

function go(d) { index = (index + d + list.length) % list.length; render(); }

export function openLightbox(items, i = 0, { onNavigate } = {}) {
  if (!el) build();
  list = items; index = i; onChange = onNavigate || null;
  lastFocus = document.activeElement;
  render();
  el.classList.add('is-open');
  el.setAttribute('aria-hidden', 'false');
  getLenis()?.stop();
  document.documentElement.style.overflow = 'hidden';
  $('.lb__close', el).focus({ preventScroll: true });
}

export function close() {
  if (!el) return;
  el.classList.remove('is-open');
  el.setAttribute('aria-hidden', 'true');
  getLenis()?.start();
  document.documentElement.style.overflow = '';
  onChange?.(null);
  lastFocus?.focus?.({ preventScroll: true });
}
