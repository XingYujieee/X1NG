/* ------------------------------------------------------------------
   Viewfinder hero — page glue, HUD and interactions.

   Scroll   → moves through the four places; every scroll position is one
              fixed frame of the change (scrolling back plays it backwards).
   Pointer  → depth parallax; the AF box tracks him.
   Click    → tap to focus: the AF box jumps to the point, the lens racks
              focus to that depth, the shutter fires, the roll counter ticks.
   Hold     → long exposure: the frame gathers light, particles streak, the
              shutter readout counts up; release to close the shutter.
   End      → the frame shrinks into a print laid on the page below.
------------------------------------------------------------------- */
import { createStage, SCENES } from './stage.js';

const clamp = (x, a = 0, b = 1) => Math.min(b, Math.max(a, x));
const sst = (a, b, x) => { const v = clamp((x - a) / (b - a)); return v * v * (3 - 2 * v); };
const load = (src) => new Promise((ok, no) => { const im = new Image(); im.decoding = 'async'; im.onload = () => ok(im); im.onerror = no; im.src = src; });
const pad = (n) => String(n).padStart(2, '0');
const SHUTTER = ['1/250', '1/125', '1/60', '1/30', '1/15', '1/8', '1/4', '1/2', '1"', '2"', '4"', '8"', '15"', '30"'];
const store = { get(k) { try { return localStorage.getItem(k); } catch (e) { return null; } }, set(k, v) { try { localStorage.setItem(k, v); } catch (e) { /* private mode */ } } };

export function mountViewfinder(root, { reduced = false, lenis = null } = {}) {
  const stageEl = root.querySelector('.vf__stage');
  const canvas = root.querySelector('canvas');
  const chapters = [...root.querySelectorAll('[data-chapter]')];
  const ticks = [...root.querySelectorAll('[data-tick]')];
  const af = root.querySelector('.vf__af'), afLabel = root.querySelector('.vf__af b');
  const info = root.querySelector('[data-vf-info]');
  const needle = root.querySelector('.vf__meter i');
  const shutterTxt = root.querySelector('[data-vf-shutter]');
  const counter = root.querySelector('[data-vf-count]');
  const curtain = root.querySelector('.vf__curtain');
  const flash = root.querySelector('.vf__flash');
  const N = SCENES.length;
  const lite = matchMedia('(max-width: 760px)').matches;
  const TEX = window.BENEATH_TEX || {};

  let stage = null, running = false, visible = true, started = 0, uS = 0, last = 0;
  let roll = +(store.get('x1ng:roll') || 0);
  counter.textContent = pad(roll % 36 + 1);
  const mouse = { x: 0, y: 0, sx: 0, sy: 0, px: -1, py: -1 };
  const focus = { d: 0.5, k: 0, hunt: -1e9, manual: -1e9, mx: 0.5, my: 0.5, md: 0.5 };
  const hold = { down: false, t0: 0, x: 0, y: 0, active: false, expo: 0 };
  let lockedIdx = -1, settle = 0;

  const ready = Promise.all(SCENES.flatMap((s) => [load(TEX[s.id] || `media/beneath/${s.id}.webp`), load(TEX[s.id + '-d'] || `media/beneath/${s.id}-d.png`)]))
    .then((imgs) => {
      const images = imgs.filter((_, i) => i % 2 === 0), depths = imgs.filter((_, i) => i % 2 === 1);
      stage = createStage(canvas, images, depths, { lite });
      const size = () => stage.resize(stageEl.clientWidth, stageEl.clientHeight);
      size(); addEventListener('resize', size);
      focus.d = stage.subjectDepth(0);
      draw(0, true);
    })
    .catch((e) => { console.warn(e); root.classList.add('is-fallback'); });

  /* ---------- scroll geometry ---------- */
  const top = () => root.getBoundingClientRect().top + scrollY;
  const printLen = () => innerHeight * 0.9;
  const span = () => Math.max(1, root.offsetHeight - innerHeight - printLen());
  const goTo = (i) => { const y = top() + span() * i / (N - 1); if (lenis) lenis.scrollTo(y, { duration: 1.8 }); else scrollTo({ top: y, behavior: 'smooth' }); };
  ticks.forEach((el, i) => el.addEventListener('click', (e) => { e.stopPropagation(); goTo(i); }));
  new IntersectionObserver(([e]) => { visible = e.isIntersecting; }, { rootMargin: '120px' }).observe(root);

  /* ---------- pointer: parallax, click to focus, hold for long exposure ---------- */
  const local = (e) => { const r = stageEl.getBoundingClientRect(); return [(e.clientX - r.left) / r.width, (e.clientY - r.top) / r.height]; };
  stageEl.addEventListener('pointermove', (e) => {
    const [x, y] = local(e); mouse.x = x * 2 - 1; mouse.y = y * 2 - 1; mouse.px = x; mouse.py = y;
    if (hold.down && Math.hypot(e.clientX - hold.x, e.clientY - hold.y) > 10 && !hold.active) hold.down = false;   // it was a drag/scroll
  }, { passive: true });
  stageEl.addEventListener('pointerleave', () => { mouse.x = mouse.y = 0; });
  stageEl.addEventListener('contextmenu', (e) => { if (hold.active) e.preventDefault(); });
  const interactive = (e) => e.target.closest('a, button, [data-tick]');
  stageEl.addEventListener('pointerdown', (e) => {
    if (interactive(e) || e.button > 0 || !stage) return;
    hold.down = true; hold.t0 = performance.now(); hold.x = e.clientX; hold.y = e.clientY; hold.active = false;
  });
  const release = (e) => {
    if (!hold.down) return;
    hold.down = false;
    const dt = performance.now() - hold.t0;
    if (hold.active) { hold.active = false; root.classList.remove('is-exposing'); fire(true); return; }
    if (dt < 350 && e && !interactive(e)) {                 // a tap: focus here
      const [x, y] = local(e);
      focus.manual = performance.now(); focus.mx = x; focus.my = y; focus.md = stage.depthAt(x, y);
      fire(false);
    }
  };
  addEventListener('pointerup', release);
  addEventListener('pointercancel', () => { hold.down = false; hold.active = false; root.classList.remove('is-exposing'); });

  function fire(long) {
    roll += 1; store.set('x1ng:roll', String(roll));
    counter.textContent = pad(roll % 36 + 1);
    if (roll % 36 === 0) {                                   // a full roll: rewind
      shutterTxt.dataset.keep = '1'; shutterTxt.textContent = 'REWIND ◀◀ 胶卷拍完了';
      setTimeout(() => { delete shutterTxt.dataset.keep; }, 2200);
    }
    curtain.classList.remove('go'); void curtain.offsetWidth; curtain.classList.add('go');
    if (long) { flash.classList.remove('go'); void flash.offsetWidth; flash.classList.add('go'); }
    root.classList.add('is-fired'); setTimeout(() => root.classList.remove('is-fired'), 600);
  }

  /* ---------- per-frame ---------- */
  function draw(t, snap) {
    const now = performance.now();
    const dt = Math.min(0.1, Math.max(0, t - last)); last = t;
    const y = scrollY - top();
    const u = clamp(y / span()) * (N - 1);
    uS = snap ? u : uS + (u - uS) * (1 - Math.exp(-dt * 7));
    const print = clamp((y - span()) / printLen());
    root.style.setProperty('--out', Math.min(1, uS / 0.2).toFixed(3));
    root.style.setProperty('--print', sst(0, 1, print).toFixed(4));

    mouse.sx += (mouse.x - mouse.sx) * (reduced ? 0 : 0.06); mouse.sy += (mouse.y - mouse.sy) * (reduced ? 0 : 0.06);

    // long exposure builds while held
    if (hold.down && !hold.active && now - hold.t0 > 350) { hold.active = true; root.classList.add('is-exposing'); }
    hold.expo += ((hold.active ? 1 : 0) - hold.expo) * (hold.active ? 1 - Math.exp(-dt / 1.4) : 1 - Math.exp(-dt / 0.35));
    if (!shutterTxt.dataset.keep) shutterTxt.textContent = SHUTTER[Math.round(Math.sqrt(hold.expo) * (SHUTTER.length - 1))];

    // focus: hunt when a chapter locks, rack to a tapped point, otherwise sharp
    const near = Math.abs(uS - Math.round(uS)) < 0.03;
    settle = near ? settle + dt : 0;
    const idx = Math.round(uS);
    if (settle > 0.12 && idx !== lockedIdx) { lockedIdx = idx; focus.hunt = now; focus.d = stage.subjectDepth(idx); root.classList.remove('is-locked'); }
    const ht = (now - focus.hunt) / 1000, mt = (now - focus.manual) / 1000;
    let k = 0;
    if (ht < 0.9 && !reduced) k = Math.max(k, 1.3 * Math.pow(1 - ht / 0.9, 2) * (0.75 + 0.25 * Math.cos(ht * 22)));
    if (mt < 1.8 && !reduced) { focus.d = focus.md; k = Math.max(k, mt < 0.12 ? mt / 0.12 * 0.9 : mt < 1.1 ? 0.9 : 0.9 * (1 - (mt - 1.1) / 0.7)); }
    else if (ht >= 0.9 && lockedIdx >= 0) focus.d = stage.subjectDepth(lockedIdx);
    focus.k = k;
    if (ht > 0.55 && near) root.classList.add('is-locked'); else if (!near) root.classList.remove('is-locked');

    const st = stage.frame(t, uS, { mouse: [mouse.sx, mouse.sy], expo: hold.expo, focus, fade: clamp(t / 1.2), print });

    // HUD: AF box on him (or on the tapped point for a moment)
    const W = stageEl.clientWidth, H = stageEl.clientHeight;
    let bx, by, bw, bh;
    if (mt < 1.6) { bw = bh = Math.max(56, H * 0.09); bx = focus.mx * W; by = focus.my * H; afLabel.textContent = 'AF-S · 点击对焦'; }
    else {
      const s = st.subject; bh = Math.max(36, s.h * H * 1.3); bw = Math.max(30, bh * 0.62); bx = s.x * W; by = (s.top + s.bottom) / 2 * H;
      afLabel.textContent = 'AF-C · SUBJECT 星光';
    }
    const jit = root.classList.contains('is-locked') ? 0 : (st.prog > 0 && st.prog < 1 ? 6 : 2);
    af.style.transform = `translate3d(${(bx + (Math.random() - 0.5) * jit).toFixed(1)}px, ${(by + (Math.random() - 0.5) * jit).toFixed(1)}px, 0) translate(-50%, -50%)`;   // centred, so size changes never shift it
    af.style.width = `${bw.toFixed(1)}px`; af.style.height = `${bh.toFixed(1)}px`;
    needle.style.transform = `translateX(${((hold.expo * 3 + Math.sin(t * 0.7) * 0.08) * 16).toFixed(1)}px)`;

    const S = SCENES[st.scene];
    const txt = `${pad(st.scene + 1)} / ${pad(N)} · ${S.time.toUpperCase()} ${S.zh} · ${S.title.toUpperCase()} — ${S.place.toUpperCase()}`;
    if (info.textContent !== txt) info.textContent = txt;
    chapters.forEach((el) => {
      const c = +el.dataset.chapter, d = Math.abs(uS - c);
      el.style.opacity = ((1 - sst(0.1, 0.28, d)) * (1 - print * 2.2)).toFixed(3);
      el.style.transform = `translateY(${((uS - c) * -50).toFixed(1)}px)`;
    });
    ticks.forEach((el, i) => el.classList.toggle('on', Math.round(uS) === i));
    return st;
  }

  function loop(now) {
    if (!running) return;
    requestAnimationFrame(loop);
    if (!visible || !stage) return;
    draw(reduced ? 3 : (now - started) / 1000, false);
    stage.adapt(now);
  }

  return {
    ready,
    play() { if (!stage || running) return; running = true; started = performance.now(); root.classList.add('is-in'); requestAnimationFrame(loop); },
    // test hooks
    still(t, opts = {}) { if (!stage) return; Object.assign(hold, { expo: opts.expo ?? 0 }); if (opts.tap) { focus.manual = performance.now() - opts.tap * 1000; focus.mx = opts.x; focus.my = opts.y; focus.md = stage.depthAt(opts.x, opts.y); } root.classList.add('is-in'); last = t; return draw(t, true); },
  };
}
