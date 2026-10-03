/* beneath.html — the viewfinder hero on its own page (no site chrome). */
import { mountViewfinder } from './hero.js';
const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
const hero = mountViewfinder(document.querySelector('[data-vf]'), { reduced });
if (new URLSearchParams(location.search).has('still')) window.__hero = hero;
hero.ready.then(() => { document.documentElement.classList.add('is-ready'); hero.play(); });
