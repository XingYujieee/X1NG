/* ==========================================================================
   FX — the "camera body" layer shared by every page.
   · Iris        aperture-blade page transition + preloader exit (canvas 2D)
   · Reveal      photos "develop" into the page: clip wipe + chemical fade-in
   · Magnetic    buttons lean towards the pointer
   · Lens cursor viewfinder brackets that lock onto links
   · Scramble    mono labels decode like a camera display
   ========================================================================== */

const gsap = window.gsap;
const fine = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const clamp = (v, a, b) => Math.min(b, Math.max(a, v));

/* ----------------------------------------------------- Curtain transition --- */
/* A dark curtain with a curved leading edge rises over the page (the page drifts up and
   dims under it), the destination's name slides up in large type, then the curtain lifts
   away with the curve reversed while the new page eases up into place.
   (Kept the createIris name/API so callers didn't change.) */
export function createIris() {
  const el = document.createElement('div');
  el.className = 'curtain';
  el.setAttribute('aria-hidden', 'true');
  el.innerHTML = `<svg class="curtain__svg" preserveAspectRatio="none"><path/></svg>
    <div class="curtain__label"><span class="mono curtain__kicker">X1NG</span><span class="curtain__to"><span class="curtain__line"><span class="curtain__en"></span></span><span class="curtain__line"><span class="curtain__zh"></span></span></span></div>
    <i class="curtain__bar"></i>`;
  document.body.append(el);
  const svg = el.querySelector('svg'), path = el.querySelector('path');
  const lines = el.querySelectorAll('.curtain__line > span');
  const enEl = el.querySelector('.curtain__en'), zhEl = el.querySelector('.curtain__zh'), kick = el.querySelector('.curtain__kicker');
  const bar = el.querySelector('.curtain__bar');
  const st = { p: 0, mode: 'up' };   // p: 0 = no curtain, 1 = fully covered
  let W = innerWidth, H = innerHeight;
  const resize = () => { W = innerWidth; H = innerHeight; svg.setAttribute('viewBox', `0 0 ${W} ${H}`); draw(); };
  function draw() {
    const p = st.p, c = Math.sin(Math.PI * Math.min(1, Math.max(0, p))) * H * 0.22;
    el.classList.toggle('is-active', p > 0.001);
    if (st.mode === 'up') {           // rising from the bottom, edge bulges upwards
      const y = H * (1 - p);
      path.setAttribute('d', `M0 ${H} L0 ${y} Q${W / 2} ${y - c} ${W} ${y} L${W} ${H} Z`);
    } else {                          // leaving through the top, edge bulges downwards
      const y = H * p;
      path.setAttribute('d', `M0 0 L${W} 0 L${W} ${y} Q${W / 2} ${y + c} 0 ${y} Z`);
    }
  }
  const setLabel = (label = '') => {
    const [en, zh] = label.split(' · ');
    enEl.textContent = en || ''; zhEl.textContent = zh || '';
    kick.textContent = en ? 'X1NG — Next' : 'X1NG';
  };
  addEventListener('resize', resize); resize();
  const main = () => document.getElementById('main');

  return {
    el,
    shut(label = '') { gsap?.killTweensOf(st); st.mode = 'down'; st.p = 1; setLabel(label); el.classList.add('show-label'); gsap?.set(lines, { yPercent: 0 }); draw(); },
    close({ label = '', duration = 0.95 } = {}) {
      return new Promise((res) => {
        setLabel(label);
        if (reduced || !gsap) { st.p = 1; st.mode = 'up'; draw(); res(); return; }
        st.mode = 'up'; st.p = 0;
        el.classList.add('show-label');
        gsap.killTweensOf(st);
        const m = main();
        if (m) gsap.to(m, { y: -innerHeight * 0.08, opacity: 0.6, duration, ease: 'power3.inOut' });
        gsap.set(lines, { yPercent: 110 });
        gsap.set(bar, { scaleX: 0 });
        const tl = gsap.timeline({ onComplete: res });
        tl.to(st, { p: 1, duration, ease: 'power3.inOut', onUpdate: draw })
          .to(lines, { yPercent: 0, duration: 0.7, ease: 'expo.out', stagger: 0.07 }, duration * 0.55)
          .to(bar, { scaleX: 0.7, duration: 0.8, ease: 'power2.out' }, duration * 0.5);
      });
    },
    open({ duration = 1.05, delay = 0.1 } = {}) {
      return new Promise((res) => {
        if (reduced || !gsap) { st.p = 0; draw(); res(); return; }
        gsap.killTweensOf(st);
        st.mode = 'down'; st.p = 1;
        const m = main();
        if (m) gsap.fromTo(m, { y: innerHeight * 0.1 }, { y: 0, duration: duration + 0.2, delay: delay + 0.15, ease: 'expo.out', clearProps: 'transform' });
        gsap.to(bar, { scaleX: 1, duration: 0.3, ease: 'power2.out', delay });
        gsap.to(lines, { yPercent: -110, duration: 0.55, ease: 'power3.in', stagger: 0.05, delay });
        gsap.to(st, { p: 0, duration, delay: delay + 0.3, ease: 'power3.inOut', onUpdate: draw, onComplete: () => { el.classList.remove('show-label'); res(); } });
      });
    },
  };
}

/* -------------------------------------------------------------- Reveal --- */
/* IntersectionObserver can't be used here: Chrome counts the target's own clip-path, so a fully
   clipped element never "intersects". A light polling loop on getBoundingClientRect (which ignores
   clip-path and follows transforms, e.g. the horizontal Egypt strip) does the job. */
const pending = new Set();
let polling = false;
function poll() {
  if (!pending.size) { polling = false; return; }
  const vw = innerWidth, vh = innerHeight;
  let i = 0;
  pending.forEach((t) => {
    if (!t.isConnected) { pending.delete(t); return; }
    const r = t.getBoundingClientRect();
    if (!r.width && !r.height) return; // display:none (e.g. filtered tiles)
    if (r.top < vh * 0.92 && r.bottom > 0 && r.left < vw && r.right > 0) {
      t.style.setProperty('--rd', `${(+t.dataset.revealDelay || 0) + Math.min(i, 6) * 0.08}s`);
      t.classList.add('is-in');
      setTimeout(() => t.classList.add('is-done'), 1800 + i * 80);
      pending.delete(t);
      i++;
    }
  });
  setTimeout(() => requestAnimationFrame(poll), 90);
}
export function initDevelop(root = document) {
  const els = [...root.querySelectorAll('[data-reveal]:not(.is-in)')];
  if (!els.length) return;
  if (reduced) { els.forEach((e) => e.classList.add('is-in', 'is-done')); return; }
  els.forEach((e) => pending.add(e));
  if (!polling) { polling = true; requestAnimationFrame(poll); }
}

/* ------------------------------------------------------------ Magnetic --- */
export function initMagnetic(sel = '.pill, .menu-btn, .next__go, .icon-btn, .lb__close, [data-magnetic]') {
  if (!fine || reduced || !gsap) return;
  document.addEventListener('pointermove', (e) => {
    const t = e.target.closest?.(sel);
    if (!t) return;
    const r = t.getBoundingClientRect();
    const dx = e.clientX - (r.left + r.width / 2);
    const dy = e.clientY - (r.top + r.height / 2);
    const k = +(t.dataset.magnetic || 0.28);
    gsap.to(t, { x: dx * k, y: dy * k, duration: 0.5, ease: 'power3.out', overwrite: 'auto' });
    if (!t.__mag) {
      t.__mag = true;
      t.addEventListener('pointerleave', () => gsap.to(t, { x: 0, y: 0, duration: 0.9, ease: 'elastic.out(1, .35)', overwrite: 'auto' }));
    }
  }, { passive: true });
}

/* ---------------------------------------------------------- Lens cursor --- */
export function initLens() {
  if (!fine || reduced || !gsap) return;
  const lens = document.createElement('div');
  lens.className = 'lens';
  lens.setAttribute('aria-hidden', 'true');
  lens.innerHTML = '<i></i><i></i><i></i><i></i><b></b>';
  document.body.append(lens);
  const html = document.documentElement;
  html.classList.add('has-lens');
  let x = -100, y = -100, lx = x, ly = y, w = 34, h = 34, tw = 34, th = 34, target = null;
  window.addEventListener('pointermove', (e) => { x = e.clientX; y = e.clientY; }, { passive: true });
  document.addEventListener('pointerover', (e) => {
    const t = e.target.closest('a, button, summary, [role="button"], input[type="range"], label');
    target = t && !t.closest('[data-cursor], .vf, .field-view') ? t : null;
    lens.classList.toggle('is-lock', !!target);
  });
  document.addEventListener('pointerdown', () => lens.classList.add('is-press'));
  document.addEventListener('pointerup', () => lens.classList.remove('is-press'));
  document.addEventListener('pointerleave', () => lens.classList.add('is-gone'));
  document.addEventListener('pointerenter', () => lens.classList.remove('is-gone'));
  gsap.ticker.add(() => {
    let px = x, py = y;
    if (target && target.isConnected) {
      const r = target.getBoundingClientRect();
      px = r.left + r.width / 2 + (x - (r.left + r.width / 2)) * 0.12;
      py = r.top + r.height / 2 + (y - (r.top + r.height / 2)) * 0.12;
      tw = Math.min(r.width + 14, 520); th = Math.min(r.height + 14, 220);
    } else { tw = 34; th = 34; }
    lx += (px - lx) * 0.22; ly += (py - ly) * 0.22;
    w += (tw - w) * 0.2; h += (th - h) * 0.2;
    lens.style.transform = `translate3d(${lx - w / 2}px, ${ly - h / 2}px, 0)`;
    lens.style.width = `${w}px`; lens.style.height = `${h}px`;
    lens.lastChild.style.transform = `translate3d(${x - lx + w / 2 - 2}px, ${y - ly + h / 2 - 2}px, 0)`;
    // hide brackets when the label cursor (pill) is active
    lens.classList.toggle('is-quiet', !!document.querySelector('.cursor.is-active'));
  });
}

/* ------------------------------------------------------------- Scramble --- */
const GLYPHS = '#%&*+=<>/\\0123456789ABCDEFGHJKLMNPRSTUVXYZ';
export function scramble(el, { duration = 0.9 } = {}) {
  if (!el || reduced) return;
  const finalText = el.dataset.text || el.textContent;
  el.dataset.text = finalText;
  const chars = [...finalText];
  const start = performance.now();
  cancelAnimationFrame(el.__scr);
  const step = (now) => {
    const p = clamp((now - start) / (duration * 1000), 0, 1);
    el.textContent = chars.map((c, i) => {
      if (!/[A-Za-z0-9]/.test(c)) return c;
      const settle = i / chars.length * 0.7 + 0.3;
      return p >= settle ? c : GLYPHS[(Math.random() * GLYPHS.length) | 0];
    }).join('');
    if (p < 1) el.__scr = requestAnimationFrame(step); else el.textContent = finalText;
  };
  el.__scr = requestAnimationFrame(step);
}
export function initScramble(root = document) {
  const els = [...root.querySelectorAll('[data-scramble]')];
  if (!els.length || reduced || !('IntersectionObserver' in window)) return;
  const io = new IntersectionObserver((entries) => entries.forEach((e) => {
    if (!e.isIntersecting) return;
    scramble(e.target); io.unobserve(e.target);
  }), { threshold: 0.6 });
  els.forEach((e) => io.observe(e));
  if (fine) root.addEventListener('pointerover', (e) => {
    const host = e.target.closest?.('[data-scramble-host]');
    if (host && !host.contains(e.relatedTarget)) host.querySelectorAll('[data-scramble]').forEach((s) => scramble(s, { duration: 0.5 }));
  });
}
