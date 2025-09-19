#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// 配置
const CONFIG = {
  assetsDir: './dist/assets',
  outputDir: './dist',
  imagesPerPage: 999, // 设置为很大的数字，实际显示所有图片
  supportedExtensions: ['.jpg', '.jpeg', '.png', '.gif', '.webp'],
  excludeDirs: ['__MACOSX', '.DS_Store', 'node_modules']
};

/**
 * 递归扫描目录获取所有图片文件
 */
function scanImages(dir, baseDir = dir) {
  let images = [];
  
  try {
    const items = fs.readdirSync(dir);
    
    for (const item of items) {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        // 跳过排除的目录
        if (CONFIG.excludeDirs.includes(item)) {
          continue;
        }
        // 递归扫描子目录
        images = images.concat(scanImages(fullPath, baseDir));
      } else if (stat.isFile()) {
        const ext = path.extname(item).toLowerCase();
        // 只处理原始图片文件，跳过已经优化过的文件
        if (CONFIG.supportedExtensions.includes(ext) && 
            !item.includes('_thumb') && 
            !item.includes('_full')) {
          const relativePath = path.relative(baseDir, fullPath);
          images.push({
            name: item,
            path: relativePath.replace(/\\/g, '/'), // 确保使用正斜杠
            fullPath: fullPath,
            size: stat.size,
            modified: stat.mtime
          });
        }
      }
    }
  } catch (error) {
    console.error(`扫描目录 ${dir} 时出错:`, error.message);
  }
  
  return images;
}

/**
 * 生成画廊页面HTML
 */
function generateGalleryPageHtml(images, pageNumber, totalPages) {
  const title = pageNumber === 1 ? 'PHOTO ALBUM' : `PHOTO ALBUM - 第${pageNumber}页`;
  
  // 生成图片HTML
  const imageHtml = images.map(image => {
    const imagePath = `assets/${image.path}`;
    const altText = path.basename(image.name, path.extname(image.name));
    
    return `
            <div class="flex w-full md:w-1/4 flex-wrap">
              <div class="w-full p-1">
                <div class="overflow-hidden h-full w-full">
                  <a href="${imagePath}" data-fancybox="gallery">
                    <img alt="${altText}" class="block h-full w-full object-cover object-center opacity-0 animate-fade-in transition duration-500 transform scale-100 hover:scale-110" src="${imagePath}" loading="lazy" style="aspect-ratio: 3 / 4;" />
                  </a>
                </div>
              </div>
            </div>`;
  }).join('');

  // 生成分页导航
  let paginationHtml = '';
  if (totalPages > 1) {
    paginationHtml = `
    <div class="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8 mt-12 mb-12 w-full text-center">
      <div class="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-8">
        ${pageNumber > 1 ? `<a href="${pageNumber === 2 ? '../index.html' : `gallery_page_${pageNumber - 1}.html`}" class="px-8 py-3 bg-gray-200 dark:bg-gray-700 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition duration-300 font-medium">上一页</a>` : ''}
        <span class="text-xl font-semibold">第 ${pageNumber} 页 / 共 ${totalPages} 页</span>
        ${pageNumber < totalPages ? `<a href="gallery_page_${pageNumber + 1}.html" class="px-8 py-3 bg-gray-200 dark:bg-gray-700 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition duration-300 font-medium">下一页</a>` : ''}
      </div>
    </div>`;
  }

  return `<!DOCTYPE html>
<html lang="en" class="scroll-smooth">

<head>
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Xing - ${title}</title>
  <meta name="description" content="个人作品集">
  <!-- Favicon -->
  <link rel="icon" type="image/x-icon" href="assets/favicon.ico" />
  <link rel="stylesheet" href="output.css" />
  <link rel="stylesheet" href="../styles.css" />
  <!-- Alpine.js -->
  <script defer src="https://cdn.jsdelivr.net/npm/alpinejs@3.x.x/dist/cdn.min.js"></script>
  <!-- Start - Fonts -->
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link href="https://fonts.googleapis.com/css2?family=Signika:wght@400;700&display=swap" rel="stylesheet">
  <!-- End - Fonts -->
  <!-- Start - Fancybox Scripts -->
  <script src="https://cdn.jsdelivr.net/npm/@fancyapps/ui@5.0/dist/fancybox/fancybox.umd.js"></script>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fancyapps/ui@5.0/dist/fancybox/fancybox.css" />
  <script src="https://code.jquery.com/jquery-3.6.3.min.js"
    integrity="sha256-pvPw+upLPUjgMXY0G+8O0xUf+/Im1MZjXxxgOcBQBXU=" crossorigin="anonymous"></script>
  <!-- End - Fancybox Scripts -->
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      content: ["./*.{html,js}"],
      theme: {
        extend:
                {
                  fontFamily: {
                    'nothingyoucoulddo': ['Nothing You Could Do', 'cursive'],
                    'signika': ['Signika', 'sans-serif'],
                  },
                },
      },
      plugins: [],
    }
  </script>
</head>

<body
  class="dark:bg-black bg-white h-screen text-black dark:text-white px-5 md:px-20 opacity-0 animate-fade-in transition duration-500">
  <!-- Navbar -->
  <header class="flex w-full overflow-hidden pt-10 pb-1">
    <!-- Navbar -->
    <nav id="nav" x-data="{ open: false }" role="navigation" class="w-full">
      <div class="container mx-auto flex flex-wrap items-center md:flex-no-wrap">
        <div class="mr-4 md:mr-8">
          <a href="../index.html" class="text-2xl font-signika font-bold">XING</a>
        </div>
        <div class="ml-auto md:hidden flex items-center justify-start">
          <button onclick="menuToggle()" @click="open = !open"
            class="tap-highlight-transparent text-black dark:text-white w-5 h-5 relative focus:outline-none"
            @click="open = !open">
            <span class="sr-only">Open main menu</span>
            <div class="block w-5 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <span aria-hidden="true"
                class="block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out"
                :class="{'rotate-45': open,' -translate-y-1.5': !open }"></span>
              <span aria-hidden="true"
                class="block absolute  h-0.5 w-5 bg-current   transform transition duration-500 ease-in-out"
                :class="{'opacity-0': open } "></span>
              <span aria-hidden="true"
                class="block absolute h-0.5 w-5 bg-current transform  transition duration-500 ease-in-out"
                :class="{'-rotate-45': open, ' translate-y-1.5': !open}"></span>
            </div>
          </button>
        </div>
        <div id="menu"
          class="w-full h-0 transition-all ease-out duration-500 md:transition-none md:w-auto md:flex-grow md:flex md:items-center">
          <ul id="ulMenu"
            class="flex flex-col duration-300 ease-out md:space-x-5 sm:transition-none mt-5 md:flex-row md:items-center md:ml-auto md:mt-0 md:pt-0 md:border-0">
            <li class="group transition duration-300">
              <a href="../index.html" class="font-signika text-2xl tap-highlight-transparent">PHOTO ALBUM
                <span class="hidden md:block h-0.5 bg-black dark:bg-white"></span>
              </a>
            </li>
            <li class="group transition duration-300">
              <a href="about_me.html" class="font-signika text-2xl tap-highlight-transparent">ABOUT ME
                <span
                  class="hidden md:block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-black dark:bg-white"></span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
  <!-- Content -->
  <div class="container mx-auto">
    <h1 class="text-4xl pt-10 pb-8 font-bold">Welcome to my view of the world</h1>
    ${paginationHtml}
    <section class="text-neutral-700">
      <div class="container w-full">
        <div class="flex flex-wrap w-full">
${imageHtml}
        </div>
      </div>
    </section>
    ${paginationHtml}
  </div>
  <!-- Footer -->
  <footer>
    <div class="max-w-screen-xl py-16 mx-auto">
      <div class="grid grid-cols-1 gap-8 text-center mx-auto">
        <div>
          <p class="font-signika"><b>XING</b></p>
          <p class="mt-4 text-sm text-gray-600 dark:text-gray-300">
            2193177455@qq.com
          </p>
          <div class="flex mx-auto">
            <div class="mx-auto space-x-6 flex mt-8 text-gray-600 dark:text-gray-300">
              <!-- 抖音图标和链接 -->
              <a class="transition duration-300 hover:opacity-75" href="https://www.douyin.com/user/Star1ight_" target="_blank"
                rel="noreferrer">
                <span class="sr-only"> Douyin </span>
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M512 0C229.22 0 0 229.22 0 512s229.22 512 512 512 512-229.22 512-512S794.78 0 512 0z m243.43 385.55c-11.78 11.78-24.38 23.22-37.93 34.28-1.45 1.2-2.88 2.4-4.3 3.62-3.32 2.8-6.67 5.6-10.05 8.38-1.4 1.15-2.8 2.3-4.2 3.45-10.2 8.4-20.52 16.6-31.12 24.3-2.7 2-5.45 3.9-8.2 5.8-15.1 10.4-30.4 20.2-46.2 28.9-1.9 1.05-3.8 2.1-5.7 3.15-12.8 7-25.7 13.5-38.9 19.1-3.3 1.4-6.6 2.8-9.9 4.2-11.6 4.9-23.3 9.3-35.1 13.2-2.9 0.9-5.8 1.8-8.7 2.7-22.1 6.8-44.3 12.4-66.9 16.4-1.8 0.3-3.6 0.6-5.4 0.9-1.8 0.3-3.6 0.6-5.4 0.9-3.6 0.6-7.2 1.2-10.8 1.8-1.8 0.3-3.6 0.6-5.4 0.9-1.8 0.3-3.6 0.6-5.4 0.9-1.8 0.3-3.6 0.6-5.4 0.9-0.9 0.1-1.8 0.3-2.7 0.4-0.9 0.1-1.8 0.3-2.7 0.4-0.9 0.1-1.8 0.3-2.7 0.4-0.9 0.1-1.8 0.3-2.7 0.4z"/></svg>
              </a>
            </div>
          </div>
        </div>
      </div>
      <p class="mt-8 text-xs text-gray-600 dark:text-gray-300 text-center">
        © 2025 Developed and Designed by Xing.
      </p>
    </div>
  </footer>
  <!-- Script for the LightBox -->
  <script>
    Fancybox.bind("[data-fancybox]", {});
  </script>
  <script src="fade_in.js"></script>
  <script src="menu.js"></script>
</body>

</html>`;
}

/**
 * 更新主页面的图片内容
 */
function updateIndexHtml(images, totalPages) {
  const indexPath = './index.html';
  
  try {
    let content = fs.readFileSync(indexPath, 'utf8');
    
    // 生成所有图片的HTML（单页显示）
    const firstPageImages = images;
    const imagesPerRow = 6;
    const totalImages = firstPageImages.length;
    const totalRows = Math.ceil(totalImages / imagesPerRow);
    const totalCells = totalRows * imagesPerRow;
    
    let imageHtml = '';
    for (let i = 0; i < totalCells; i++) {
      if (i < totalImages) {
        // 有图片的单元格
        const image = firstPageImages[i];
        const imagePath = `dist/assets/${image.path}`;
        const altText = path.basename(image.name, path.extname(image.name));
        
        // 生成缩略图和大图路径
        const nameWithoutExt = path.basename(image.name, path.extname(image.name));
        const thumbPath = `dist/assets/${nameWithoutExt}_thumb.webp`;
        const fullPath = `dist/assets/${nameWithoutExt}_full.webp`;
        
        imageHtml += `            <div class="flex w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6 flex-wrap">
              <div class="w-full p-1">
                <div class="overflow-hidden h-full w-full">
                  <a href="${fullPath}" data-fancybox="gallery" data-thumb="${thumbPath}">
                    <img alt="${altText}" class="block h-full w-full object-cover object-center opacity-0 animate-fade-in transition duration-500 transform scale-100 hover:scale-110" src="${thumbPath}" style="aspect-ratio: 3 / 4;" loading="lazy" />
                  </a>
                </div>
              </div>
            </div>`;
      } else {
        // 空白单元格
        imageHtml += `            <div class="flex w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6 flex-wrap">
              <div class="w-full p-1">
                <div class="overflow-hidden h-full w-full">
                  <!-- 空白占位 -->
                </div>
              </div>
            </div>`;
      }
    }

    // 移除分页导航，单页显示所有图片
    let paginationHtml = '';

    // 找到图片容器的开始和结束位置
    const startMarker = '<div class="flex flex-wrap w-full">';
    const endMarker = '  <!-- Footer -->';
    
    const startIndex = content.indexOf(startMarker);
    const endIndex = content.indexOf(endMarker);
    
    if (startIndex !== -1 && endIndex !== -1) {
      const beforeContent = content.substring(0, startIndex + startMarker.length);
      const afterContent = content.substring(endIndex);
      
      const newContent = beforeContent + '\n\n\n\n' + imageHtml + '\n' + paginationHtml + '\n' + afterContent;
      
      fs.writeFileSync(indexPath, newContent, 'utf8');
      console.log('✅ 主页面已更新');
    } else {
      console.error('❌ 无法找到图片容器标记');
    }
  } catch (error) {
    console.error('❌ 更新主页面时出错:', error.message);
  }
}

/**
 * 清理旧的画廊页面文件
 */
function cleanOldGalleryPages() {
  try {
    const files = fs.readdirSync(CONFIG.outputDir);
    const galleryPages = files.filter(file => file.startsWith('gallery_page_') && file.endsWith('.html'));
    
    for (const page of galleryPages) {
      const filePath = path.join(CONFIG.outputDir, page);
      fs.unlinkSync(filePath);
      console.log(`🗑️  删除旧页面: ${page}`);
    }
  } catch (error) {
    console.error('❌ 清理旧页面时出错:', error.message);
  }
}

/**
 * 生成画廊信息文件
 */
function generateGalleryInfo(images, totalPages) {
  const info = {
    totalImages: images.length,
    totalPages: totalPages,
    imagesPerPage: CONFIG.imagesPerPage,
    generatedAt: new Date().toISOString(),
    images: images.map(img => ({
      name: img.name,
      path: img.path,
      size: img.size
    }))
  };
  
  const infoPath = path.join(CONFIG.outputDir, 'gallery-info.json');
  fs.writeFileSync(infoPath, JSON.stringify(info, null, 2), 'utf8');
  console.log('📄 画廊信息文件已生成');
}

/**
 * 主函数
 */
function main() {
  console.log('🚀 开始更新摄影作品集...\n');
  
  // 检查资源目录是否存在
  if (!fs.existsSync(CONFIG.assetsDir)) {
    console.error(`❌ 资源目录不存在: ${CONFIG.assetsDir}`);
    process.exit(1);
  }
  
  // 1. 智能扫描图片
  console.log('📁 正在扫描图片文件...');
  const images = scanImages(CONFIG.assetsDir);
  console.log(`✅ 发现 ${images.length} 张图片\n`);
  
  if (images.length === 0) {
    console.log('⚠️  没有发现任何图片文件');
    return;
  }
  
  // 2. 自动清理旧页面
  console.log('🧹 正在清理旧的画廊页面...');
  cleanOldGalleryPages();
  console.log('✅ 清理完成\n');
  
  // 3. 单页显示所有图片
  const totalPages = 1;
  console.log(`📄 将生成单页显示所有 ${images.length} 张图片\n`);
  
  // 4. 更新主页面（单页显示所有图片）
  console.log('🏠 正在更新主页面...');
  updateIndexHtml(images, totalPages);
  
  // 5. 清理旧的分页文件
  console.log('🧹 正在清理旧的分页文件...');
  cleanOldGalleryPages();
  
  // 6. 生成画廊信息文件
  console.log('\n📊 正在生成画廊信息...');
  generateGalleryInfo(images, totalPages);
  
  console.log('\n🎉 摄影作品集更新完成！');
  console.log(`📈 总计: ${images.length} 张图片，单页显示`);
  console.log('💡 提示: 可以运行 "python3 -m http.server 8000" 来预览网站');
}

// 运行主函数
if (require.main === module) {
  main();
}

module.exports = {
  scanImages,
  generateGalleryPageHtml,
  updateIndexHtml,
  cleanOldGalleryPages,
  generateGalleryInfo,
  CONFIG
};

