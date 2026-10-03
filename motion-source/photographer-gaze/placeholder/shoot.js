const { chromium } = require('playwright'); const fs = require('fs');
(async () => {
  const [N, W, Hh, out, previewOnly] = [+process.argv[2] || 48, +process.argv[3] || 480, +process.argv[4] || 640, process.argv[5] || 'frames', process.argv[6]];
  fs.mkdirSync(out, { recursive: true });
  const b = await chromium.launch({ args: ['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'] });
  const p = await b.newPage({ viewport: { width: W, height: Hh } });
  p.on('pageerror', e => console.log('ERR', e.message)); p.on('console', m => { if (m.type() === 'error') console.log(m.text()) });
  await p.goto(`http://localhost:8130/render.html?w=${W}&h=${Hh}`); await p.waitForFunction(() => window.ready);
  const list = previewOnly ? [0, N / 4, N / 2, 3 * N / 4] : [...Array(N).keys()];
  for (const i of list) {
    const d = await p.evaluate((t) => window.pose(t), (i / N) * Math.PI * 2);
    fs.writeFileSync(`${out}/frame_${String(i).padStart(4, '0')}.png`, Buffer.from(d.split(',')[1], 'base64'));
  }
  const n = await p.evaluate(() => window.pose(0, 0));
  fs.writeFileSync(`${out}/../neutral.png`, Buffer.from(n.split(',')[1], 'base64'));
  await b.close(); console.log('done', list.length);
})();
