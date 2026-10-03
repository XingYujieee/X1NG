import { boot, $, $$, pad, reduced, gsap } from '../core.js';
import { raws, byN } from '../data.js';

const app = boot({ page: 'raw', dark: true, next: { href: 'about.html', label: 'About Xing', sub: 'The person behind the lens · 关于我', image: byN(49).m } });

$('[data-raws]').innerHTML = raws.map((r, i) => `
  <article class="raw-item">
    <div class="raw-item__label" data-fade>
      <span class="num">${pad(i + 1)}</span>
      <div style="display:grid;gap:12px">
        <p class="mono" style="color:var(--on-dark-2)">RAW → Final · 原片 → 成片</p>
        ${r.pan ? `<a class="pill pill--light roll-host" href="${r.pan}" target="_blank" rel="noopener" style="width:fit-content"><span class="dot"></span><span data-roll>Download RAW</span></a>
        <p class="mono" style="color:var(--on-dark-2)">Baidu Netdisk · 百度网盘</p>` : ''}
      </div>
    </div>
    <div class="compare" data-compare data-fade>
      <img src="${r.before}" alt="RAW file ${i + 1}, before editing" loading="lazy">
      <div class="after"><img src="${r.after}" alt="Final edit ${i + 1}" loading="lazy"></div>
      <span class="handle" aria-hidden="true"></span>
      <span class="tag tag--before mono">RAW</span>
      <span class="tag tag--after mono">Final</span>
      <input type="range" min="0" max="100" value="50" aria-label="Compare RAW and final edit ${i + 1}">
    </div>
  </article>`).join('');

$$('[data-compare]').forEach((c, i) => {
  const range = $('input', c);
  // clip-path inset(left) hides the left part of "after": handle at pos shows RAW on the left
  const set = (v) => { c.style.setProperty('--pos', `${v}%`); range.value = v; };
  range.addEventListener('input', () => set(range.value));
  c.addEventListener('pointermove', (e) => {
    if (e.pointerType !== 'mouse') return;
    const r = c.getBoundingClientRect();
    set(Math.max(0, Math.min(100, ((e.clientX - r.left) / r.width) * 100)));
  });
  // a gentle hint sweep the first time each comparison enters view
  if (!reduced) {
    const o = { v: 50 };
    window.ScrollTrigger.create({ trigger: c, start: 'top 70%', once: true, onEnter: () => gsap.timeline().to(o, { v: 22, duration: 0.9, ease: 'power2.inOut', onUpdate: () => set(o.v) }).to(o, { v: 78, duration: 1.1, ease: 'power2.inOut', onUpdate: () => set(o.v) }).to(o, { v: 50, duration: 0.8, ease: 'power2.inOut', onUpdate: () => set(o.v) }) });
  }
  void i;
});
app.ready();
