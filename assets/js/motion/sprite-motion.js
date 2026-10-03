/* ------------------------------------------------------------------
   Sprite motion runtime — ported from oil-motion's
   assets/interactive-motion.ts (createFrameAnimator + createCssSpriteRenderer).

   A pre-rendered frame sequence (sprite atlas) is scrubbed by input,
   which reads as 3D even though the browser only moves a background.
   Swap the atlas for AI-generated frames without touching this code:
   only the manifest in ../motion/photographer.js changes.
------------------------------------------------------------------- */

const clamp = (v, a, b) => Math.min(b, Math.max(a, v));
const wrap = (v, n) => ((v % n) + n) % n;
const shortestCircularDelta = (from, to, n) => {
  let d = wrap(to, n) - wrap(from, n);
  if (d > n / 2) d -= n;
  if (d < -n / 2) d += n;
  return d;
};

// Critically damped spring with a speed limit (same maths as oil-motion).
function smoothDamp(current, target, velocity, smoothTime, maxSpeed, dt) {
  const t = Math.max(0.0001, smoothTime);
  const omega = 2 / t;
  const x = omega * dt;
  const decay = 1 / (1 + x + 0.48 * x * x + 0.235 * x * x * x);
  const original = target;
  const maxChange = maxSpeed * t;
  const change = clamp(current - target, -maxChange, maxChange);
  const limited = current - change;
  const temp = (velocity + omega * change) * dt;
  let v = (velocity - omega * temp) * decay;
  let p = limited + (change + temp) * decay;
  if ((original - current > 0) === (p > original)) { p = original; v = 0; }
  return [p, v];
}

export function createFrameAnimator({ frameCount, initialFrame = 0, circular = false, smoothTime = 0.11, maxSpeed, reducedMotion = false, render }) {
  const n = Math.max(1, Math.floor(frameCount));
  const speed = maxSpeed ?? n * 2;
  let position = clamp(initialFrame, 0, n - 1);
  let target = position;
  let velocity = 0;
  let lastFrame = -1;
  let lastTime = 0;
  let raf = 0;
  let destroyed = false;
  const norm = (f) => (circular ? wrap(f, n) : clamp(f, 0, n - 1));
  const draw = () => {
    const f = Math.round(norm(position)) % n;
    if (f !== lastFrame) { render(f); lastFrame = f; }
  };
  const loop = (now) => {
    raf = 0;
    if (destroyed) return;
    const dt = lastTime ? Math.min((now - lastTime) / 1000, 1 / 30) : 1 / 60;
    lastTime = now;
    if (reducedMotion) { position = target; velocity = 0; }
    else [position, velocity] = smoothDamp(position, target, velocity, smoothTime, speed, dt);
    draw();
    if (Math.abs(target - position) > 0.002 || Math.abs(velocity) > 0.002) raf = requestAnimationFrame(loop);
    else { lastTime = 0; if (circular) { position = wrap(position, n); target = position; } }
  };
  const schedule = () => { if (!raf && !destroyed) raf = requestAnimationFrame(loop); };
  draw();
  return {
    setTarget(frame) {
      const f = norm(frame);
      target = circular ? position + shortestCircularDelta(position, f, n) : f;
      schedule();
    },
    /** Direction on the screen plane. 12 o'clock = frame 0, clockwise. (y grows downward.) */
    setDirection(x, y) {
      const angle = Math.atan2(y, x) + Math.PI / 2; // 0 at 12 o'clock
      this.setTarget((wrap(angle, Math.PI * 2) / (Math.PI * 2)) * n);
    },
    setProgress(p) { this.setTarget(clamp(p, 0, 1) * (n - 1)); },
    getCurrentFrame: () => norm(position),
    destroy() { destroyed = true; if (raf) cancelAnimationFrame(raf); },
  };
}

export function createCssSpriteRenderer(el, columns, rows) {
  el.style.backgroundSize = `${columns * 100}% ${rows * 100}%`;
  return (frame) => {
    const c = frame % columns;
    const r = Math.floor(frame / columns);
    el.style.backgroundPosition = `${columns === 1 ? 0 : (c / (columns - 1)) * 100}% ${rows === 1 ? 0 : (r / (rows - 1)) * 100}%`;
  };
}

/* ------------------------------------------------------------------
   Gaze character: follows the pointer around a clock face, looks
   straight at you when the pointer is close, idles with a slow patrol.
------------------------------------------------------------------- */
export function mountGazeCharacter(host, manifest, { reduced = false, small = false, onShutter } = {}) {
  const atlas = small ? manifest.atlasSmall : manifest.atlas;
  host.classList.add('gaze');
  host.innerHTML = `
    <div class="gaze__sprite" role="img" aria-label="${manifest.label}"></div>
    <img class="gaze__neutral" src="${small ? manifest.neutralSmall : manifest.neutral}" alt="" aria-hidden="true">
    <span class="gaze__flash" aria-hidden="true"></span>`;
  const sprite = host.querySelector('.gaze__sprite');
  const neutral = host.querySelector('.gaze__neutral');
  const flash = host.querySelector('.gaze__flash');
  host.style.aspectRatio = `${manifest.cellWidth} / ${manifest.cellHeight}`;

  let ready = false;
  const img = new Image();

  const render = createCssSpriteRenderer(sprite, manifest.columns, manifest.rows);
  queueMicrotask(() => { img.src = atlas; });
  const animator = createFrameAnimator({ frameCount: manifest.frameCount, circular: true, smoothTime: 0.14, reducedMotion: reduced, render });

  // Neutral pose is only a poster: shown until the atlas has loaded (or for reduced motion).
  // Two different poses are never blended — that would ghost the figure.
  const showSprite = () => { sprite.style.opacity = '1'; neutral.style.opacity = '0'; };
  img.onload = () => { ready = true; sprite.style.backgroundImage = `url("${atlas}")`; host.classList.add('is-ready'); if (!reduced) showSprite(); };

  let lastInput = 0, idleAngle = 0, idleRaf = 0;
  const faceCenter = () => {
    const r = host.getBoundingClientRect();
    return { x: r.left + r.width * manifest.face[0], y: r.top + r.height * manifest.face[1], size: r.height };
  };
  function look(clientX, clientY) {
    lastInput = performance.now();
    idleAngle = (animator.getCurrentFrame() / manifest.frameCount) * Math.PI * 2;
    const c = faceCenter();
    const dx = clientX - c.x, dy = clientY - c.y;
    const dist = Math.hypot(dx, dy);
    // inside the dead zone around the face, keep the last direction (no jitter)
    if (dist > c.size * 0.08) animator.setDirection(dx, dy);
  }
  const onMove = (e) => look(e.clientX, e.clientY);
  window.addEventListener('pointermove', onMove, { passive: true });

  // idle patrol — slow clockwise look-around after a few quiet seconds
  const idle = (now) => {
    idleRaf = requestAnimationFrame(idle);
    if (reduced || now - lastInput < 3500 || document.hidden) return;
    idleAngle += 0.006;
    animator.setTarget((wrap(idleAngle, Math.PI * 2) / (Math.PI * 2)) * manifest.frameCount);
  };
  if (!reduced) idleRaf = requestAnimationFrame(idle);

  host.addEventListener('click', () => {
    flash.classList.remove('is-on'); void flash.offsetWidth; flash.classList.add('is-on');
    onShutter?.();
  });

  return {
    look,
    destroy() { animator.destroy(); cancelAnimationFrame(idleRaf); window.removeEventListener('pointermove', onMove); },
  };
}
