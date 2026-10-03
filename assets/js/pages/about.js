import { boot, $, esc, pad } from '../core.js';
import { byN, photos, series, CONTACT, CATEGORIES, STYLES } from '../data.js';

const app = boot({ page: 'about', next: { href: 'index.html', label: 'Back to start', sub: 'Home · 回到首页', image: byN(95).m } });

const portrait = byN(49);
const img = $('[data-portrait]');
img.src = portrait.m;
img.srcset = `${portrait.m} 1280w, ${portrait.l} 2400w`;
img.sizes = '(max-width: 860px) 100vw, 42vw';

$('[data-focus]').innerHTML = STYLES.map((st, i) => `
  <li data-fade><span class="mono muted">${pad(i + 1)}</span><a class="t roll-host" href="work.html?style=${st.id}"><span data-roll>${esc(st.en)}</span></a><span class="zh muted">${st.zh} · ${pad(photos.filter((p) => p.style === st.id).length)}</span></li>`).join('');

const email = $('[data-email]');
email.href = `mailto:${CONTACT.email}`;
email.textContent = CONTACT.email;
$('[data-socials]').innerHTML = CONTACT.links.map((l) => `<a class="pill pill--ghost roll-host" href="${l.href}" target="_blank" rel="noopener"><span class="dot"></span><span data-roll>${esc(l.label)}</span></a>`).join('');

app.ready();
void series; void CATEGORIES;
