/* ==========================================================================
   Lens text (monopo-style): a glass lens follows the cursor over the big
   headings; inside the lens the English becomes Chinese, split slightly in
   colour like light through real glass. Outside the lens nothing changes.

   Markup: <h2 data-lens="中文标题">English heading</h2>
   ========================================================================== */
const fine = matchMedia('(hover: hover) and (pointer: fine)').matches;
const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;

let ring = null, active = null, x = 0, y = 0, lx = 0, ly = 0, r = 0, rT = 0, raf = 0;

function ensureRing() {
  if (ring) return;
  ring = document.createElement('div');
  ring.className = 'lens-ring';
  ring.setAttribute('aria-hidden', 'true');
  document.body.append(ring);
}

function tick() {
  raf = 0;
  lx += (x - lx) * 0.2; ly += (y - ly) * 0.2;
  r += (rT - r) * 0.16;
  ring.style.transform = `translate3d(${lx - r}px, ${ly - r}px, 0)`;
  ring.style.width = ring.style.height = `${(r * 2).toFixed(1)}px`;
  ring.style.opacity = Math.min(1, r / 30).toFixed(3);
  document.documentElement.classList.toggle('lens-on', r > 4);
  document.querySelectorAll('[data-lens].is-lensing').forEach((el) => {
    const b = el.getBoundingClientRect();
    el.style.setProperty('--lx', `${(lx - b.left).toFixed(1)}px`);
    el.style.setProperty('--ly', `${(ly - b.top).toFixed(1)}px`);
    el.style.setProperty('--lr', `${r.toFixed(1)}px`);
    if (el !== active && r < 1) el.classList.remove('is-lensing');
  });
  if (Math.abs(x - lx) > 0.3 || Math.abs(y - ly) > 0.3 || Math.abs(rT - r) > 0.3) raf = requestAnimationFrame(tick);
}
const kick = () => { if (!raf) raf = requestAnimationFrame(tick); };

export function initLensText(root = document) {
  if (!fine || reduced) return;
  root.querySelectorAll('[data-lens]:not([data-lens-ready])').forEach((el) => {
    el.dataset.lensReady = '1';
    // the original text goes into a span we can mask; the translation is a pseudo-element on the host
    const src = document.createElement('span');
    src.className = 'lens-src';
    while (el.firstChild) src.append(el.firstChild);
    el.append(src);
    el.addEventListener('pointerenter', (e) => {
      ensureRing();
      active = el; el.classList.add('is-lensing');
      const fs = parseFloat(getComputedStyle(el).fontSize) || 60;
      rT = Math.max(56, Math.min(130, fs * 0.95));
      if (r < 1) { lx = x = e.clientX; ly = y = e.clientY; }
      kick();
    });
    el.addEventListener('pointerleave', () => { if (active === el) { active = null; rT = 0; kick(); } });
  });
  if (!initLensText.bound) {
    initLensText.bound = true;
    addEventListener('pointermove', (e) => { x = e.clientX; y = e.clientY; if (active || r > 0.5) kick(); }, { passive: true });
    addEventListener('scroll', () => { if (active || r > 0.5) kick(); }, { passive: true });
  }
}
