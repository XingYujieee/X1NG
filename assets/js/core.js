/* Shared chrome + motion system for every page. */
import { CONTACT } from './data.js';

const gsap = window.gsap;
const ScrollTrigger = window.ScrollTrigger;
if (gsap && ScrollTrigger) gsap.registerPlugin(ScrollTrigger);

export const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
export const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
export const $ = (s, r = document) => r.querySelector(s);
export const $$ = (s, r = document) => [...r.querySelectorAll(s)];
export const h = (html) => { const t = document.createElement('template'); t.innerHTML = html.trim(); return t.content.firstElementChild; };
export const esc = (s = '') => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
export const pad = (n, l = 2) => String(n).padStart(l, '0');

export const NAV = [
  { href: 'index.html', en: 'Home', zh: '首页', key: 'home' },
  { href: 'corridor.html', en: 'Corridor', zh: '走廊', key: 'corridor' },
  { href: 'work.html', en: 'Work', zh: '作品', key: 'work' },
  { href: 'series.html', en: 'Series', zh: '系列', key: 'series' },
  { href: 'raw.html', en: 'RAW Lab', zh: '后期', key: 'raw' },
  { href: 'about.html', en: 'About', zh: '关于', key: 'about' },
];

let lenis = null;
export const getLenis = () => lenis;

/* ---------- Text utilities ---------- */
export function roll(el) {
  if (!el || el.dataset.rolled) return el;
  const text = el.textContent;
  el.dataset.rolled = '1';
  el.setAttribute('aria-label', text.trim());
  el.classList.add('roll');
  el.innerHTML = [...text].map((c, i) => `<span class="ch" aria-hidden="true" style="--i:${i}" data-ch="${esc(c)}">${esc(c)}</span>`).join('');
  return el;
}

export function splitWords(el) {
  if (!el || el.dataset.split === 'done') return [];
  el.dataset.split = 'done';
  const walk = (node) => {
    [...node.childNodes].forEach((n) => {
      if (n.nodeType === 3) {
        const frag = document.createDocumentFragment();
        n.textContent.split(/(\s+)/).forEach((w) => {
          if (!w) return;
          if (/^\s+$/.test(w)) { frag.appendChild(document.createTextNode(w)); return; }
          const m = document.createElement('span'); m.className = 'word-mask';
          const s = document.createElement('span'); s.textContent = w; m.appendChild(s); frag.appendChild(m);
        });
        n.replaceWith(frag);
      } else if (n.nodeType === 1 && !n.classList.contains('word-mask') && n.tagName !== 'BR') walk(n);
    });
  };
  walk(el);
  return $$('.word-mask > span', el);
}

/* ---------- Chrome (header, menu, cursor, footer) ---------- */
function buildChrome(page, opts) {
  const header = h(`
    <header class="site-header">
      <div class="header-actions">
        <a class="pill header-cta roll-host" href="about.html#contact"><span class="dot"></span><span data-roll>Let's shoot</span></a>
        <button class="menu-btn" type="button" aria-expanded="false" aria-controls="menu-panel" aria-label="Open menu"><i></i><i></i></button>
      </div>
    </header>`);
  const panel = h(`
    <div class="menu-panel" id="menu-panel" aria-hidden="true">
      <nav aria-label="Primary">
        ${NAV.map((n, i) => `<a class="roll-host" href="${n.href}" ${n.key === page ? 'aria-current="page"' : ''}><span data-roll>${n.en}</span><small>${pad(i + 1)} · ${n.zh}</small></a>`).join('')}
      </nav>
      <div class="menu-foot">
        <p class="mono muted">Say hello · 联系</p>
        <a class="h3" href="mailto:${CONTACT.email}" style="font-size:20px;letter-spacing:-.02em">${CONTACT.email}</a>
        <div class="links mono" style="margin-top:14px">${CONTACT.links.map((l) => `<a href="${l.href}" target="_blank" rel="noopener">${l.short}</a>`).join('')}</div>
      </div>
    </div>`);
  const brand = h('<a class="brand" href="index.html" aria-label="X1NG — home">X1NG <small>Photographic field</small></a>');
  const scrim = h('<div class="menu-scrim"></div>');
  const cursor = h('<div class="cursor" aria-hidden="true"><div class="cursor__pill"><span class="cursor__text">View</span></div></div>');
  const transition = h(`<div class="transition" aria-hidden="true">${'<i></i>'.repeat(5)}</div>`);
  document.body.prepend(h('<a class="skip-link" href="#main">Skip to content</a>'));
  document.body.append(header, brand, scrim, panel, cursor, transition);

  const btn = $('.menu-btn', header);
  const setMenu = (open) => {
    document.documentElement.classList.toggle('menu-open', open);
    btn.setAttribute('aria-expanded', open);
    btn.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    panel.setAttribute('aria-hidden', !open);
    if (open) lenis?.stop(); else lenis?.start();
  };
  btn.addEventListener('click', () => setMenu(!document.documentElement.classList.contains('menu-open')));
  scrim.addEventListener('click', () => setMenu(false));
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') setMenu(false); });

  if (opts.footer !== false) document.querySelector('main').after(buildFooter(opts));
  $$('[data-roll]').forEach(roll);
}

function buildFooter(opts) {
  const f = h(`
    <footer class="site-footer wrap">
      <div class="footer__grid">
        <div class="footer__col">
          <p class="mono">Based in</p>
          <span>Nanjing, China</span><span class="zh muted">常驻南京 · 随时出发</span>
        </div>
        <div class="footer__col">
          <p class="mono">Explore</p>
          ${NAV.slice(1).map((n) => `<a class="roll-host" href="${n.href}"><span data-roll>${n.en}</span></a>`).join('')}
        </div>
        <div class="footer__col">
          <p class="mono">Follow</p>
          ${CONTACT.links.map((l) => `<a class="roll-host" href="${l.href}" target="_blank" rel="noopener"><span data-roll>${l.short}</span></a>`).join('')}
        </div>
        <div class="footer__col">
          <p class="mono">Contact</p>
          <a href="mailto:${CONTACT.email}">${CONTACT.email}</a>
          <span class="muted">Commissions, prints, collaborations.</span>
        </div>
        <div class="footer__word" aria-hidden="true">X1NG</div>
      </div>
      <div class="footer__base mono">
        <span>© ${new Date().getFullYear()} Xing · 星光</span>
        <span>All photographs © Xing. All rights reserved.</span>
        <a href="#main" data-top>Back to top ↑</a>
      </div>
    </footer>`);
  const frag = document.createDocumentFragment();
  frag.append(f);
  if (opts.next) {
    frag.append(h(`
      <section class="next" data-next="${opts.next.href}" aria-label="Next page">
        ${opts.next.image ? `<div class="next__bg"><img src="${opts.next.image}" alt="" loading="lazy"></div>` : ''}
        <div class="next__inner">
          <p class="mono">Next · 下一页</p>
          <a class="next__title roll-host" href="${opts.next.href}"><span data-roll>${esc(opts.next.label)}</span></a>
          <a class="next__go" href="${opts.next.href}" aria-label="Open ${esc(opts.next.label)}"><svg class="next__ring" viewBox="0 0 88 88" aria-hidden="true"><circle class="track" cx="44" cy="44" r="40"/><circle class="fill" cx="44" cy="44" r="40" pathLength="1" stroke-dasharray="1" stroke-dashoffset="1"/></svg><span class="next__arrow" aria-hidden="true">→</span></a>
          <p class="mono muted">${esc(opts.next.sub || 'Next page')}</p>
        </div>
      </section>`));
  }
  return frag;
}

/* ---------- Smooth scroll ---------- */
function initScroll() {
  if (reduced || !window.Lenis) return;
  lenis = new window.Lenis({ duration: 1.15, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), smoothWheel: true });
  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add((time) => lenis.raf(time * 1000));
  gsap.ticker.lagSmoothing(0);
}

function initHeaderAutoHide() {
  const header = $('.site-header');
  let last = 0;
  const onScroll = () => {
    const y = window.scrollY;
    const hide = y > 200 && y > last && !document.documentElement.classList.contains('menu-open');
    header.classList.toggle('is-hidden', hide);
    document.documentElement.classList.toggle('header-hidden', hide);
    last = y;
  };
  window.addEventListener('scroll', onScroll, { passive: true });
}

/* ---------- Reveals ---------- */
export function initReveals(root = document) {
  if (!gsap) return;
  $$('[data-split]', root).forEach((el) => {
    const words = splitWords(el);
    if (reduced) return;
    gsap.set(words, { yPercent: 110 });
    ScrollTrigger.create({
      trigger: el, start: 'top 88%', once: true,
      onEnter: () => gsap.to(words, { yPercent: 0, duration: 1.1, ease: 'expo.out', stagger: 0.028, delay: +el.dataset.delay || 0 }),
    });
  });
  $$('[data-fade]', root).forEach((el) => {
    if (reduced) { gsap.set(el, { opacity: 1, y: 0 }); return; }
    ScrollTrigger.create({
      trigger: el, start: 'top 92%', once: true,
      onEnter: () => gsap.to(el, { opacity: 1, y: 0, duration: 1.1, ease: 'expo.out', delay: +el.dataset.delay || 0 }),
    });
  });
  if (!reduced) {
    $$('[data-parallax]', root).forEach((el) => {
      const amt = +el.dataset.parallax || 10;
      gsap.fromTo(el, { yPercent: -amt }, { yPercent: amt, ease: 'none', scrollTrigger: { trigger: el.parentElement, start: 'top bottom', end: 'bottom top', scrub: true } });
    });
  }
  $$('[data-roll]', root).forEach(roll);
}

/* ---------- Cursor label ---------- */
function initCursor() {
  if (!finePointer) return;
  const c = $('.cursor');
  const text = $('.cursor__text', c);
  let x = innerWidth / 2, y = innerHeight / 2, cx = x, cy = y;
  window.addEventListener('pointermove', (e) => { x = e.clientX; y = e.clientY; }, { passive: true });
  gsap.ticker.add(() => { cx += (x - cx) * 0.2; cy += (y - cy) * 0.2; c.style.transform = `translate3d(${cx}px, ${cy}px, 0)`; });
  document.addEventListener('pointerover', (e) => {
    const t = e.target.closest('[data-cursor]');
    if (t) { text.textContent = t.dataset.cursor; c.classList.add('is-active'); }
  });
  document.addEventListener('pointerout', (e) => {
    const t = e.target.closest('[data-cursor]');
    if (t && !t.contains(e.relatedTarget)) c.classList.remove('is-active');
  });
}
export const setCursor = (label) => {
  const c = $('.cursor'); if (!c) return;
  if (label) { $('.cursor__text', c).textContent = label; c.classList.add('is-active'); } else c.classList.remove('is-active');
};

/* ---------- Page transitions ---------- */
const TKEY = 'x1ng:transition';
function initTransitions() {
  const overlay = $('.transition');
  const bars = $$('i', overlay);
  let busy = false;

  const reveal = () => {
    if (sessionStorage.getItem(TKEY) !== '1' || reduced) return;
    sessionStorage.removeItem(TKEY);
    gsap.set(bars, { scaleY: 1, transformOrigin: 'top' });
    gsap.to(bars, { scaleY: 0, duration: 0.9, ease: 'expo.inOut', stagger: 0.05, delay: 0.05 });
  };
  reveal();

  window.navigateTo = (href) => {
    if (busy) return; busy = true;
    if (reduced) { location.href = href; return; }
    sessionStorage.setItem(TKEY, '1');
    gsap.set(bars, { transformOrigin: 'bottom' });
    gsap.to(bars, { scaleY: 1, duration: 0.75, ease: 'expo.inOut', stagger: 0.05, onComplete: () => { location.href = href; } });
    setTimeout(() => { location.href = href; }, 1600);
  };

  document.addEventListener('click', (e) => {
    const a = e.target.closest('a[href]');
    if (!a || e.defaultPrevented || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || a.target === '_blank' || a.hasAttribute('download')) return;
    const url = new URL(a.href, location.href);
    if (url.origin !== location.origin) return;
    if (url.pathname === location.pathname && url.search === location.search && url.hash) {
      e.preventDefault();
      const target = url.hash === '#main' ? 0 : document.querySelector(url.hash);
      if (lenis) lenis.scrollTo(target ?? 0, { duration: 1.4 }); else (target ? target.scrollIntoView({ behavior: 'smooth' }) : window.scrollTo({ top: 0, behavior: 'smooth' }));
      return;
    }
    if (!/\.html$|\/$/.test(url.pathname)) return;
    e.preventDefault();
    document.documentElement.classList.remove('menu-open');
    window.navigateTo(url.href);
  });
  // bfcache: make sure overlay is cleared when user comes back
  window.addEventListener('pageshow', (e) => { if (e.persisted) { busy = false; gsap.set(bars, { scaleY: 0 }); } });
}

/* ---------- Next page (continue scrolling) ---------- */
function initNext() {
  const sec = $('.next');
  if (!sec || !ScrollTrigger) return;
  const ring = $('.next__ring .fill', sec);
  const inner = $('.next__inner', sec);
  let fired = false;
  ScrollTrigger.create({
    trigger: sec, start: 'top bottom', end: 'bottom bottom',
    onUpdate: (self) => {
      const p = self.progress;
      ring.style.strokeDashoffset = String(1 - Math.min(1, Math.max(0, (p - 0.35) / 0.63)));
      if (!reduced) inner.style.transform = `translateY(${(1 - p) * -30}vh)`;
      // no automatic jump any more (it trapped people at the bottom of the page): when the ring is full the button invites a click
      sec.classList.toggle('is-ready', p > 0.97);
    },
  });
}

/* ---------- Preloader ---------- */
export function preloader(promise) {
  const seen = sessionStorage.getItem('x1ng:loaded');
  if (seen || reduced) { sessionStorage.setItem('x1ng:loaded', '1'); return promise; }
  const el = h(`<div class="preloader" role="status" aria-live="polite">
      <div class="preloader__bar"><i></i></div>
      <div class="preloader__count">000</div>
      <p class="preloader__note mono">Developing negatives<br>正在冲洗底片</p>
    </div>`);
  document.body.append(el);
  lenis?.stop();
  const bar = $('.preloader__bar i', el);
  const count = $('.preloader__count', el);
  const state = { p: 0 };
  let target = 0.3;
  const tw = gsap.to(state, { p: 1, duration: 60, ease: 'none', paused: true });
  const tick = () => {
    state.p += (target - state.p) * 0.06;
    bar.style.transform = `scaleX(${state.p})`;
    count.textContent = pad(Math.round(state.p * 100), 3);
  };
  gsap.ticker.add(tick);
  const slow = setInterval(() => { target = Math.min(0.9, target + 0.06); }, 250);
  return Promise.resolve(promise).then((r) => new Promise((res) => {
    clearInterval(slow); target = 1;
    setTimeout(() => {
      gsap.ticker.remove(tick); tw.kill();
      bar.style.transform = 'scaleX(1)'; count.textContent = '100';
      sessionStorage.setItem('x1ng:loaded', '1');
      gsap.to(el, { yPercent: -100, duration: 1.1, ease: 'expo.inOut', delay: 0.15, onStart: () => res(r), onComplete: () => { el.remove(); lenis?.start(); } });
    }, 650);
  }));
}

/* ---------- Boot ---------- */
export function boot({ page, dark = false, footer = true, next = null } = {}) {
  document.documentElement.classList.toggle('no-motion', reduced);
  if (dark) document.body.classList.add('is-dark');
  buildChrome(page, { footer, next });
  initScroll();
  initHeaderAutoHide();
  initCursor();
  initTransitions();
  $$('[data-top]').forEach((a) => a.addEventListener('click', (e) => { e.preventDefault(); lenis ? lenis.scrollTo(0, { duration: 1.6 }) : window.scrollTo({ top: 0, behavior: 'smooth' }); }));
  return {
    ready() {
      initReveals();
      initNext();
      ScrollTrigger?.refresh();
    },
  };
}

export { gsap, ScrollTrigger };
