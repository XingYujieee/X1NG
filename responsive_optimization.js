// 响应式设计优化脚本
const fs = require('fs');
const path = require('path');

// 需要优化的HTML文件列表
const htmlFiles = [
  'index.html',
  'dist/about_me.html',
  'dist/travel.html',
  'dist/raw.html',
  'dist/catogories.html',
  'dist/yunnan.html',
  'dist/qinggan.html'
];

// 响应式优化函数
function optimizeResponsiveDesign(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // 1. 确保viewport meta标签正确设置
    if (!content.includes('width=device-width, initial-scale=1.0')) {
      content = content.replace(
        /<meta name="viewport"[^>]*>/,
        '<meta name="viewport" content="width=device-width, initial-scale=1.0" />'
      );
      modified = true;
    }

    // 2. 优化导航栏移动端体验 - 添加更好的移动端菜单样式
    if (content.includes('md:hidden')) {
      // 确保移动端菜单按钮有足够的触摸区域
      content = content.replace(
        /class="tap-highlight-transparent text-black dark:text-white w-5 h-5 relative focus:outline-none"/g,
        'class="tap-highlight-transparent text-black dark:text-white w-8 h-8 p-1 relative focus:outline-none"'
      );
      modified = true;
    }

    // 3. 优化图片网格 - 确保移动端显示合适的列数
    // 将 lg:w-1/6 改为 xl:w-1/6，lg:w-1/5 以在大屏幕上显示5列而不是6列
    content = content.replace(
      /class="flex w-1\/2 sm:w-1\/3 md:w-1\/4 lg:w-1\/6 flex-wrap"/g,
      'class="flex w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 xl:w-1/6 flex-wrap"'
    );
    if (content.includes('lg:w-1/5')) {
      modified = true;
    }

    // 4. 优化字体大小 - 确保移动端可读性
    content = content.replace(
      /class="text-4xl pt-10 pb-8 font-bold"/g,
      'class="text-2xl sm:text-3xl md:text-4xl pt-6 sm:pt-8 md:pt-10 pb-4 sm:pb-6 md:pb-8 font-bold"'
    );
    if (content.includes('text-2xl sm:text-3xl md:text-4xl')) {
      modified = true;
    }

    // 5. 优化导航链接字体大小
    content = content.replace(
      /class="font-signika text-2xl tap-highlight-transparent"/g,
      'class="font-signika text-lg sm:text-xl md:text-2xl tap-highlight-transparent"'
    );
    if (content.includes('text-lg sm:text-xl md:text-2xl')) {
      modified = true;
    }

    // 6. 优化视频容器
    content = content.replace(
      /style="width:100%;max-height:60vh;border-radius:12px;object-fit:cover;outline:none;"/g,
      'style="width:100%;max-height:50vh;border-radius:8px;object-fit:cover;outline:none;" class="sm:max-h-60vh md:max-h-60vh"'
    );
    if (content.includes('sm:max-h-60vh')) {
      modified = true;
    }

    // 7. 优化内边距
    content = content.replace(
      /class="dark:bg-black bg-white min-h-screen text-black dark:text-white px-5 md:px-20/g,
      'class="dark:bg-black bg-white min-h-screen text-black dark:text-white px-3 sm:px-5 md:px-10 lg:px-20'
    );
    if (content.includes('px-3 sm:px-5 md:px-10 lg:px-20')) {
      modified = true;
    }

    // 8. 添加响应式CSS类到body
    if (!content.includes('responsive-optimized')) {
      content = content.replace(
        /<body([^>]*)>/,
        '<body$1 class="responsive-optimized">'
      );
      modified = true;
    }

    // 如果有修改，写回文件
    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`✅ 优化完成: ${filePath}`);
      return true;
    } else {
      console.log(`ℹ️  无需修改: ${filePath}`);
      return false;
    }
  } catch (error) {
    console.error(`❌ 优化失败: ${filePath}`, error.message);
    return false;
  }
}

// 添加自定义CSS样式
function addCustomResponsiveCSS() {
  const customCSS = `
/* 响应式优化样式 */
@media (max-width: 640px) {
  /* 移动端优化 */
  .responsive-optimized {
    font-size: 14px;
    line-height: 1.5;
  }
  
  /* 确保图片在移动端正确显示 */
  .responsive-optimized img {
    max-width: 100%;
    height: auto;
  }
  
  /* 优化移动端触摸体验 */
  .responsive-optimized a, .responsive-optimized button {
    min-height: 44px;
    min-width: 44px;
  }
  
  /* 移动端视频优化 */
  .responsive-optimized video {
    max-height: 40vh !important;
  }
}

@media (min-width: 641px) and (max-width: 768px) {
  /* 平板端优化 */
  .responsive-optimized {
    font-size: 15px;
  }
}

@media (min-width: 769px) {
  /* 桌面端优化 */
  .responsive-optimized {
    font-size: 16px;
  }
}

/* 改进的hover效果 */
@media (hover: hover) {
  .responsive-optimized img:hover {
    transform: scale(1.05);
    transition: transform 0.3s ease;
  }
}

/* 触摸设备优化 */
@media (hover: none) {
  .responsive-optimized img:active {
    transform: scale(0.98);
    transition: transform 0.1s ease;
  }
}
`;

  try {
    fs.writeFileSync('responsive-custom.css', customCSS, 'utf8');
    console.log('✅ 创建自定义响应式CSS文件');
    return true;
  } catch (error) {
    console.error('❌ 创建CSS文件失败:', error.message);
    return false;
  }
}

// 主执行函数
function main() {
  console.log('🚀 开始响应式设计优化...\n');
  
  let optimizedCount = 0;
  
  // 优化每个HTML文件
  htmlFiles.forEach(file => {
    if (fs.existsSync(file)) {
      if (optimizeResponsiveDesign(file)) {
        optimizedCount++;
      }
    } else {
      console.log(`⚠️  文件不存在: ${file}`);
    }
  });
  
  // 创建自定义CSS
  addCustomResponsiveCSS();
  
  console.log(`\n🎉 优化完成! 共优化了 ${optimizedCount} 个文件`);
  console.log('📝 请在HTML文件中引入 responsive-custom.css 以应用自定义样式');
}

// 执行优化
main();

