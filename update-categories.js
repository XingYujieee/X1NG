#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const CONFIG = {
  assetsDir: './dist/assets',
  categoriesDir: './dist/assets/categories',
  outputFile: './dist/catogories.html',
  supportedExtensions: ['.jpg', '.jpeg', '.png', '.gif', '.webp'],
  categoriesOrder: ['cityscape','creativity','documentary','ecological','landscape','personal']
};

function ensureDir(p){ if(!fs.existsSync(p)) fs.mkdirSync(p, { recursive: true }); }

function scanCategoryImages(categoryDir){
  const files = [];
  if (!fs.existsSync(categoryDir)) return files;
  const items = fs.readdirSync(categoryDir);
  for (const item of items) {
    const full = path.join(categoryDir, item);
    const stat = fs.statSync(full);
    if (stat.isFile()) {
      const ext = path.extname(item).toLowerCase();
      if (CONFIG.supportedExtensions.includes(ext)) {
        // 仅保留原始文件，排除已优化的缩略图/大图
        if (/_thumb\.webp$/i.test(item) || /_full\.webp$/i.test(item)) {
          continue;
        }
        files.push(item);
      }
    }
  }
  return files.sort();
}

function renderPage(categoriesMap){
  const nav = `
  <header class="flex w-full overflow-hidden pt-10 pb-1">
    <nav id="nav" x-data="{ open: false }" role="navigation" class="w-full">
      <div class="container mx-auto flex flex-wrap items-center md:flex-no-wrap">
        <div class="mr-4 md:mr-8">
          <a href="../index.html" class="text-2xl font-signika font-bold">XING</a>
        </div>
        <div id="menu" class="w-full h-0 transition-all ease-out duration-500 md:transition-none md:w-auto md:flex-grow md:flex md:items-center">
          <ul id="ulMenu" class="flex flex-col duration-300 ease-out md:space-x-5 sm:transition-none mt-5 md:flex-row md:items-center md:ml-auto md:mt-0 md:pt-0 md:border-0">
            <li class="group transition duration-300">
              <a href="../index.html" class="font-signika text-2xl tap-highlight-transparent">PHOTO ALBUM
                <span class="hidden md:block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-black dark:bg-white"></span>
              </a>
            </li>
            <li class="group transition duration-300">
              <a href="about_me.html" class="font-signika text-2xl tap-highlight-transparent">ABOUT ME
                <span class="hidden md:block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-black dark:bg-white"></span>
              </a>
            </li>
            <li class="group transition duration-300">
              <a href="raw.html" class="font-signika text-2xl tap-highlight-transparent">RAW
                <span class="hidden md:block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-black dark:bg-white"></span>
              </a>
            </li>
            <li class="group transition duration-300">
              <a href="travel.html" class="font-signika text-2xl tap-highlight-transparent">TRAVEL
                <span class="hidden md:block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-black dark:bg-white"></span>
              </a>
            </li>
            <li class="group transition duration-300">
              <a href="catogories.html" class="font-signika text-2xl tap-highlight-transparent">CATEGORIES
                <span class="hidden md:block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-black dark:bg-white"></span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>`;

  let sections = '';
  for (const [category, images] of categoriesMap) {
    if (images.length === 0) continue;
    let trackItems = '';
    for (const filename of images) {
      const nameWithoutExt = path.basename(filename, path.extname(filename));
      const thumb = `assets/categories/${category}/${nameWithoutExt}_thumb.webp`;
      const full = `assets/categories/${category}/${nameWithoutExt}_full.webp`;
      const alt = nameWithoutExt;
      trackItems += `
            <div class="category-item">
              <div class="w-full p-1">
                <div class="overflow-hidden h-full w-full rounded">
                  <a href="${full}" data-fancybox="${category}" data-thumb="${thumb}">
                    <img alt="${alt}" class="block h-full w-full object-cover object-center opacity-0 animate-fade-in transition duration-500 transform hover:scale-105" src="${thumb}" style="aspect-ratio: 3 / 4;" loading="lazy" />
                  </a>
                </div>
              </div>
            </div>`;
    }

    // 每类一行视口 + 展开按钮
    const sectionId = `section-${category}`;
    const viewportId = `viewport-${category}`;
    const trackId = `track-${category}`;
    sections += `
      <section id="${sectionId}" class="mt-10 category-section" data-category="${category}">
        <div class="flex items-center justify-between mb-3">
          <h2 class="text-2xl font-bold capitalize">${category}</h2>
          <button class="toggle-expand px-4 py-2 rounded bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition font-medium text-sm" data-category="${category}">展开</button>
        </div>
        <div id="${viewportId}" class="category-viewport">
          <div id="${trackId}" class="category-track">
${trackItems}
          </div>
        </div>
      </section>`;
  }

  const html = `<!DOCTYPE html>
<html lang="en" class="scroll-smooth">
<head>
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Xing - Categories</title>
  <meta name="description" content="分类作品集">
  <link rel="icon" type="image/x-icon" href="assets/favicon.ico" />
  <link rel="stylesheet" href="output.css" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link href="https://fonts.googleapis.com/css2?family=Signika:wght@400;700&display=swap" rel="stylesheet">
  <script src="https://cdn.tailwindcss.com"></script>
  <script src="https://cdn.jsdelivr.net/npm/@fancyapps/ui@5.0/dist/fancybox/fancybox.umd.js"></script>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fancyapps/ui@5.0/dist/fancybox/fancybox.css" />
  <style>
    .category-viewport { overflow: hidden; }
    .category-track { display: flex; flex-wrap: nowrap; gap: 0; }
    /* 折叠态：正好显示8张（含间距），间距8px */
    .category-item { flex: 0 0 calc((100% - (var(--gap, 8px) * 7)) / 8); }
    .category-item + .category-item { margin-left: var(--gap, 8px); }
    /* 展开态：多行网格（6列），停止滚动 */
    .category-section.expanded .category-viewport { overflow: visible; }
    .category-section.expanded .category-track { flex-wrap: wrap; gap: var(--gap, 8px); }
    .category-section.expanded .category-item { flex: 0 0 calc((100% - (var(--gap, 8px) * 5)) / 6); margin-left: 0; }
  </style>
</head>
<body class="dark:bg-black bg-white min-h-screen text-black dark:text-white px-5 md:px-20">
  ${nav}
  <div class="container mx-auto">
    <h1 class="text-4xl pt-10 pb-2 font-bold">Categories</h1>
    <p class="text-sm text-gray-600 dark:text-gray-300">按题材分类的作品集</p>
    ${sections}
  </div>
  <footer class="mt-16 py-8 text-center text-gray-600 dark:text-gray-300">
    © 2025 Developed and Designed by Xing.
  </footer>
  <script>Fancybox.bind("[data-fancybox]", {});</script>
  <script src="fade_in.js"></script>
  <script src="menu.js"></script>
  <script>
    // 分类行：展开/收起 + 自动横向滚动（全局同步，先呈现所有图片再滚动）
    (function(){
      const sections = document.querySelectorAll('.category-section');
      const controllers = []; // { section, viewport, paused }
      const SPEED = 0.10; // px/frame，统一更慢

      function animate(){
        for (const c of controllers) {
          if (c.paused) continue;
          const vp = c.viewport;
          // 使用 scrollLeft 以保留完整内容（不复制 DOM），先呈现后滚动
          vp.scrollLeft += SPEED;
          if (vp.scrollLeft + vp.clientWidth >= vp.scrollWidth - 1) {
            vp.scrollLeft = 0;
          }
        }
        requestAnimationFrame(animate);
      }

      sections.forEach(section => {
        const btn = section.querySelector('.toggle-expand');
        const viewport = section.querySelector('.category-viewport');

        const controller = { section, viewport, paused: false };
        controllers.push(controller);

        // 悬停暂停/恢复
        viewport.addEventListener('mouseenter', () => { controller.paused = true; });
        viewport.addEventListener('mouseleave', () => { if (!controller.section.classList.contains('expanded')) controller.paused = false; });

        // 展开/收起
        btn.addEventListener('click', () => {
          const expanded = section.classList.toggle('expanded');
          if (expanded) {
            controller.paused = true;
            viewport.style.overflowX = 'visible';
            btn.textContent = '收起';
          } else {
            viewport.style.overflowX = 'hidden';
            btn.textContent = '展开';
            controller.paused = false;
          }
        });
      });

      // 等待一帧，确保所有图片已渲染，再统一启动动画
      requestAnimationFrame(() => requestAnimationFrame(animate));
    })();
  </script>
</body>
</html>`;

  return html;
}

function main(){
  console.log('🚀 生成分类页面...');
  ensureDir(CONFIG.categoriesDir);

  const map = new Map();
  for (const cat of CONFIG.categoriesOrder) {
    const dir = path.join(CONFIG.categoriesDir, cat);
    const files = scanCategoryImages(dir);
    map.set(cat, files);
    console.log(`  ${cat}: ${files.length} 张`);
  }

  const html = renderPage(map);
  fs.writeFileSync(CONFIG.outputFile, html, 'utf8');
  console.log(`✅ 已生成: ${CONFIG.outputFile}`);
}

if (require.main === module) main();


