/* ==========================================================================
   Ink — "developer fluid" for the dark rooms (monopo-style reactive colour).

   A few large blobs of colour, taken from the photographs of that section,
   drift slowly behind the content. The cursor pushes them away like a hand
   moving through developer, and leaves a short trail of ink that fades.
   Drawn small on a 2D canvas and blurred by CSS — cheap, and only while the
   section is on screen.
   ========================================================================== */

const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
const fine = matchMedia('(hover: hover) and (pointer: fine)').matches;
const SCALE = 0.2;   // the canvas is drawn at 1/5 size; CSS blur hides it

/* average a photo into a couple of saturated colours */
export function paletteFrom(srcs) {
  return Promise.all(srcs.map((src) => new Promise((ok) => {
    const im = new Image(); im.decoding = 'async';
    im.onload = () => {
      try {
        const c = document.createElement('canvas'); c.width = 12; c.height = 8;
        const x = c.getContext('2d'); x.drawImage(im, 0, 0, 12, 8);
        const d = x.getImageData(0, 0, 12, 8).data; const out = [];
        for (let i = 0; i < d.length; i += 4) {
          const r = d[i], g = d[i + 1], b = d[i + 2], mx = Math.max(r, g, b), mn = Math.min(r, g, b);
          out.push({ c: [r, g, b], s: (mx - mn) / (mx + 1) + mx / 900 });
        }
        out.sort((a, b) => b.s - a.s);
        ok([out[0].c, out[Math.floor(out.length / 6)].c]);
      } catch (e) { ok([]); }
    };
    im.onerror = () => ok([]);
    im.src = src;
  }))).then((all) => all.flat().filter(Boolean));
}

const hslToRgb = (h, s, l) => {
  s /= 100; l /= 100;
  const k = (n) => (n + h / 30) % 12, a = s * Math.min(l, 1 - l);
  const f = (n) => l - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)));
  return [Math.round(255 * f(0)), Math.round(255 * f(8)), Math.round(255 * f(4))];
};
export const paletteFromHues = (hues) => hues.map((h) => hslToRgb(h, 80, 55));

/**
 * mountInk(section, palette, { strength, after })
 *  palette: [[r,g,b], …] or a Promise of one
 *  after:   optional child element to insert the canvas after (for sections with their own background layer)
 */
export function mountInk(section, palette, { strength = 1, after = null, z = -1 } = {}) {
  if (!section || reduced) return;
  const cv = document.createElement('canvas');
  cv.className = 'ink';
  cv.setAttribute('aria-hidden', 'true');
  cv.style.zIndex = z;
  if (after) after.after(cv); else section.prepend(cv);
  section.classList.add('has-ink');
  if (getComputedStyle(section).position === 'static') section.style.position = 'relative';
  const x = cv.getContext('2d');
  let W = 1, H = 1, on = false, raf = 0, cols = [[34, 51, 255], [233, 196, 140]];
  const blobs = [], trail = [];
  const mouse = { x: -1e4, y: -1e4, px: 0, py: 0, in: false };

  Promise.resolve(palette).then((p) => {
    if (p && p.length) cols = p;
    blobs.length = 0;
    for (let i = 0; i < 6; i++) {
      blobs.push({ c: cols[i % cols.length], ax: Math.random(), ay: Math.random(), r: 0.32 + Math.random() * 0.25, ph: Math.random() * 6.28, sp: 0.04 + Math.random() * 0.06, ox: 0, oy: 0, vx: 0, vy: 0 });
    }
  });

  const resize = () => {
    const r = section.getBoundingClientRect();
    W = Math.max(2, Math.round(r.width * SCALE)); H = Math.max(2, Math.round(Math.min(r.height, innerHeight * 1.4) * SCALE));
    cv.width = W; cv.height = H;
  };
  resize(); addEventListener('resize', resize);

  if (fine) {
    section.addEventListener('pointermove', (e) => {
      const r = cv.getBoundingClientRect();
      const nx = (e.clientX - r.left) / r.width * W, ny = (e.clientY - r.top) / r.height * H;
      const vx = nx - mouse.x, vy = ny - mouse.y;
      if (mouse.in && Math.hypot(vx, vy) > 0.6 && trail.length < 60) {
        trail.push({ x: nx, y: ny, vx: vx * 0.6, vy: vy * 0.6, r: 10 + Math.random() * 18, life: 1, c: cols[(Math.random() * cols.length) | 0] });
      }
      mouse.x = nx; mouse.y = ny; mouse.in = true; start();
    }, { passive: true });
    section.addEventListener('pointerleave', () => { mouse.in = false; mouse.x = mouse.y = -1e4; });
  }

  let last = performance.now();
  const draw = (now) => {
    raf = 0;
    if (!on) return;
    const dt = Math.min(0.05, (now - last) / 1000); last = now;
    const t = now / 1000;
    x.globalCompositeOperation = 'source-over';
    x.clearRect(0, 0, W, H);
    x.globalCompositeOperation = 'lighter';
    const R = Math.max(W, H);
    blobs.forEach((b) => {
      const bx = (b.ax + Math.sin(t * b.sp + b.ph) * 0.18) * W, by = (b.ay + Math.cos(t * b.sp * 0.8 + b.ph) * 0.2) * H;
      // the hand in the developer: push away from the cursor, spring back
      const dx = bx + b.ox - mouse.x, dy = by + b.oy - mouse.y, d = Math.hypot(dx, dy) || 1;
      const reach = R * 0.35;
      if (d < reach) { const f = (1 - d / reach) * 260 * strength; b.vx += dx / d * f * dt; b.vy += dy / d * f * dt; }
      b.vx += -b.ox * 6 * dt; b.vy += -b.oy * 6 * dt; b.vx *= 0.92; b.vy *= 0.92;
      b.ox += b.vx * dt * 10; b.oy += b.vy * dt * 10;
      const rr = b.r * R;
      const g = x.createRadialGradient(bx + b.ox, by + b.oy, 0, bx + b.ox, by + b.oy, rr);
      g.addColorStop(0, `rgba(${b.c[0]},${b.c[1]},${b.c[2]},${0.55 * strength})`);
      g.addColorStop(1, `rgba(${b.c[0]},${b.c[1]},${b.c[2]},0)`);
      x.fillStyle = g; x.fillRect(0, 0, W, H);
    });
    for (let i = trail.length - 1; i >= 0; i--) {
      const p = trail[i];
      p.x += p.vx * dt * 8; p.y += p.vy * dt * 8; p.vx *= 0.94; p.vy *= 0.94; p.r += 14 * dt; p.life -= dt * 0.7;
      if (p.life <= 0) { trail.splice(i, 1); continue; }
      const g = x.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r);
      g.addColorStop(0, `rgba(${p.c[0]},${p.c[1]},${p.c[2]},${0.5 * p.life * strength})`);
      g.addColorStop(1, `rgba(${p.c[0]},${p.c[1]},${p.c[2]},0)`);
      x.fillStyle = g; x.fillRect(p.x - p.r, p.y - p.r, p.r * 2, p.r * 2);
    }
    raf = requestAnimationFrame(draw);
  };
  const start = () => { if (on && !raf) { last = performance.now(); raf = requestAnimationFrame(draw); } };
  new IntersectionObserver(([e]) => { on = e.isIntersecting; if (on) { resize(); start(); } }, { rootMargin: '80px' }).observe(section);
}
