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

/* ---------------------------------------------------------------- Iris --- */
const STOPS = ['1.4', '2', '2.8', '4', '5.6', '8', '11', '16', '22'];

export function createIris() {
  const el = document.createElement('div');
  el.className = 'iris';
  el.setAttribute('aria-hidden', 'true');
  el.innerHTML = '<canvas></canvas><div class="iris__label"><span class="mono iris__stop">ƒ/1.4</span><span class="iris__to"></span></div>';
  document.body.append(el);
  const cv = el.querySelector('canvas');
  const ctx = cv.getContext('2d');
  const stopEl = el.querySelector('.iris__stop');
  const toEl = el.querySelector('.iris__to');
  const N = 7;
  const state = { open: 1, cx: 0.5, cy: 0.5 };
  let W = 0, H = 0, dpr = 1;

  const resize = () => {
    dpr = Math.min(window.devicePixelRatio || 1, 1.5);
    W = innerWidth; H = innerHeight;
    cv.width = Math.round(W * dpr); cv.height = Math.round(H * dpr);
    draw();
  };

  function draw() {
    const o = state.open;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, W, H);
    el.classList.toggle('is-active', o < 0.999);
    if (o >= 0.999) return;
    const cx = state.cx * W, cy = state.cy * H;
    const far = Math.hypot(Math.max(cx, W - cx), Math.max(cy, H - cy));
    const R = o * far * 1.32;                       // hole radius (polygon circumradius)
    const twist = (1 - o) * 1.25 + 0.3;              // blades rotate as they close
    const L = far * 3;
    const V = [], D = [];
    for (let i = 0; i < N; i++) {
      const a = twist + (i / N) * Math.PI * 2;
      V.push([cx + Math.cos(a) * R, cy + Math.sin(a) * R]);
      const m = twist + ((i + 0.5) / N) * Math.PI * 2 + Math.PI / 2; // direction of edge i → i+1
      D.push([Math.cos(m), Math.sin(m)]);
    }
    // base: everything outside the aperture
    ctx.beginPath();
    ctx.rect(0, 0, W, H);
    if (R > 0.5) V.forEach((p, i) => (i ? ctx.lineTo(p[0], p[1]) : ctx.moveTo(p[0], p[1])));
    ctx.fillStyle = '#0b0c10';
    ctx.fill('evenodd');
    // each blade = region between two consecutive extended polygon edges
    for (let i = 0; i < N; i++) {
      const b = V[(i + 1) % N], c = V[(i + 2) % N];
      const d1 = D[i], d2 = D[(i + 1) % N];
      ctx.beginPath();
      ctx.moveTo(b[0], b[1]);
      ctx.lineTo(b[0] + d1[0] * L, b[1] + d1[1] * L);
      ctx.lineTo(c[0] + d2[0] * L, c[1] + d2[1] * L);
      ctx.lineTo(c[0], c[1]);
      ctx.closePath();
      const g = ctx.createLinearGradient(b[0], b[1], b[0] + d1[0] * far, b[1] + d1[1] * far);
      const k = i % 2 ? 0 : 6;
      g.addColorStop(0, `rgb(${22 + k},${24 + k},${33 + k})`);
      g.addColorStop(0.35, `rgb(${12 + k},${13 + k},${18 + k})`);
      g.addColorStop(1, '#0b0c10');
      ctx.fillStyle = g;
      ctx.fill();
      // blade edge highlight
      ctx.beginPath();
      ctx.moveTo(b[0], b[1]);
      ctx.lineTo(b[0] + d1[0] * L, b[1] + d1[1] * L);
      ctx.strokeStyle = `rgba(120,135,255,${0.18 + (1 - o) * 0.22})`;
      ctx.lineWidth = 1;
      ctx.stroke();
    }
    // blue rim on the aperture opening
    if (R > 1) {
      ctx.beginPath();
      V.forEach((p, i) => (i ? ctx.lineTo(p[0], p[1]) : ctx.moveTo(p[0], p[1])));
      ctx.closePath();
      ctx.strokeStyle = 'rgba(34,51,255,.9)';
      ctx.lineWidth = 2;
      ctx.stroke();
    }
    const s = STOPS[Math.round(clamp(1 - o, 0, 1) * (STOPS.length - 1))];
    stopEl.textContent = `ƒ/${s}`;
  }

  window.addEventListener('resize', resize);
  resize();

  return {
    el,
    /** jump to fully closed (no animation) — used before the first paint of a new page */
    shut(label = '') { gsap?.killTweensOf(state); state.open = 0; state.cx = 0.5; state.cy = 0.5; toEl.textContent = label; el.classList.add('show-label'); draw(); },
    close({ x = 0.5, y = 0.5, label = '', duration = 0.85 } = {}) {
      return new Promise((res) => {
        state.cx = x; state.cy = y; toEl.textContent = label;
        if (reduced || !gsap) { state.open = 0; draw(); res(); return; }
        el.classList.add('show-label');
        gsap.killTweensOf(state);
        gsap.to(state, { open: 0, duration, ease: 'expo.inOut', onUpdate: draw, onComplete: res });
      });
    },
    open({ duration = 1.15, delay = 0.05 } = {}) {
      return new Promise((res) => {
        if (reduced || !gsap) { state.open = 1; draw(); res(); return; }
        gsap.killTweensOf(state);
        el.classList.remove('show-label');
        gsap.to(state, { open: 1, duration, delay, ease: 'expo.inOut', onUpdate: draw, onComplete: res });
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
