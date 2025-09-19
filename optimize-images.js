#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// 配置
const CONFIG = {
  assetsDir: './dist/assets',
  outputDir: './dist/assets',
  supportedExtensions: ['.jpg', '.jpeg', '.png', '.webp'],
  excludeDirs: ['__MACOSX', '.DS_Store', 'node_modules', 'raw', 'thumbs', 'fullsize'],
  
  // 缩略图配置
  thumbConfig: {
    width: 600,        // 缩略图宽度
    quality: 75,       // WebP质量
    maxSize: 100,      // 最大文件大小(KB)
    suffix: '_thumb'   // 缩略图后缀
  },
  
  // 大图配置
  fullConfig: {
    maxWidth: 2400,    // 大图最大宽度
    quality: 85,       // WebP质量
    maxSize: 1000,     // 最大文件大小(KB)
    suffix: '_full'    // 大图后缀
  }
};

/**
 * 检查是否安装了cwebp
 */
function checkCwebpInstalled() {
  try {
    execSync('cwebp -version', { stdio: 'ignore' });
    return true;
  } catch (error) {
    return false;
  }
}

/**
 * 检查文件是否为已优化的图片
 */
function isOptimizedImage(filename) {
  return filename.includes('_thumb.webp') || filename.includes('_full.webp');
}

/**
 * 递归扫描目录获取所有原始图片文件（排除已优化的）
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
        if (CONFIG.supportedExtensions.includes(ext)) {
          // 跳过已优化的图片
          if (isOptimizedImage(item)) {
            continue;
          }
          
          const relativePath = path.relative(baseDir, fullPath);
          images.push({
            name: item,
            path: relativePath.replace(/\\/g, '/'),
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
 * 生成缩略图
 */
function generateThumbnail(image) {
  const inputPath = image.fullPath;
  const nameWithoutExt = path.basename(image.name, path.extname(image.name));
  // 在源文件所在目录生成缩略图，保持子目录结构
  const outputPath = path.join(path.dirname(image.fullPath), `${nameWithoutExt}${CONFIG.thumbConfig.suffix}.webp`);
  
  try {
    // 检查输出文件是否已存在且较新
    if (fs.existsSync(outputPath)) {
      const outputStat = fs.statSync(outputPath);
      if (outputStat.mtime > image.modified) {
        console.log(`⏭️  跳过缩略图: ${image.name} (已存在且较新)`);
        return { success: true, path: outputPath, size: outputStat.size };
      }
    }
    
    // 生成缩略图
    const command = `cwebp -q ${CONFIG.thumbConfig.quality} -resize ${CONFIG.thumbConfig.width} 0 "${inputPath}" -o "${outputPath}"`;
    execSync(command, { stdio: 'pipe' });
    
    const outputStat = fs.statSync(outputPath);
    const sizeKB = Math.round(outputStat.size / 1024);
    
    console.log(`✅ 缩略图: ${image.name} → ${path.basename(outputPath)} (${sizeKB}KB)`);
    
    return { 
      success: true, 
      path: outputPath, 
      size: outputStat.size,
      sizeKB: sizeKB
    };
  } catch (error) {
    console.error(`❌ 生成缩略图失败: ${image.name}`, error.message);
    return { success: false, error: error.message };
  }
}

/**
 * 生成大图
 */
function generateFullSize(image) {
  const inputPath = image.fullPath;
  const nameWithoutExt = path.basename(image.name, path.extname(image.name));
  // 在源文件所在目录生成大图，保持子目录结构
  const outputPath = path.join(path.dirname(image.fullPath), `${nameWithoutExt}${CONFIG.fullConfig.suffix}.webp`);
  
  try {
    // 检查输出文件是否已存在且较新
    if (fs.existsSync(outputPath)) {
      const outputStat = fs.statSync(outputPath);
      if (outputStat.mtime > image.modified) {
        console.log(`⏭️  跳过大图: ${image.name} (已存在且较新)`);
        return { success: true, path: outputPath, size: outputStat.size };
      }
    }
    
    // 生成大图
    const command = `cwebp -q ${CONFIG.fullConfig.quality} -resize ${CONFIG.fullConfig.maxWidth} 0 "${inputPath}" -o "${outputPath}"`;
    execSync(command, { stdio: 'pipe' });
    
    const outputStat = fs.statSync(outputPath);
    const sizeKB = Math.round(outputStat.size / 1024);
    
    console.log(`✅ 大图: ${image.name} → ${path.basename(outputPath)} (${sizeKB}KB)`);
    
    return { 
      success: true, 
      path: outputPath, 
      size: outputStat.size,
      sizeKB: sizeKB
    };
  } catch (error) {
    console.error(`❌ 生成大图失败: ${image.name}`, error.message);
    return { success: false, error: error.message };
  }
}

/**
 * 生成图片信息文件
 */
function generateImageInfo(images, thumbResults, fullResults) {
  const imageInfo = {
    generatedAt: new Date().toISOString(),
    totalImages: images.length,
    thumbnails: thumbResults.filter(r => r.success).length,
    fullSize: fullResults.filter(r => r.success).length,
    images: images.map((image, index) => {
      const thumbResult = thumbResults[index];
      const fullResult = fullResults[index];
      
      return {
        original: {
          name: image.name,
          path: image.path,
          size: image.size,
          sizeKB: Math.round(image.size / 1024)
        },
        thumbnail: thumbResult.success ? {
          path: path.relative(CONFIG.assetsDir, thumbResult.path).replace(/\\/g, '/'),
          size: thumbResult.size,
          sizeKB: thumbResult.sizeKB
        } : null,
        fullSize: fullResult.success ? {
          path: path.relative(CONFIG.assetsDir, fullResult.path).replace(/\\/g, '/'),
          size: fullResult.size,
          sizeKB: fullResult.sizeKB
        } : null
      };
    })
  };
  
  const infoPath = path.join(CONFIG.outputDir, 'image-info.json');
  fs.writeFileSync(infoPath, JSON.stringify(imageInfo, null, 2), 'utf8');
  console.log('📄 图片信息文件已生成: image-info.json');
}

/**
 * 清理重复优化的文件
 */
function cleanupDuplicateFiles() {
  console.log('🧹 正在清理重复优化的文件...');
  
  const duplicateFiles = scanDuplicateFiles(CONFIG.assetsDir);
  
  if (duplicateFiles.length === 0) {
    console.log('✅ 没有发现重复优化的文件\n');
    return;
  }
  
  console.log(`🔍 发现 ${duplicateFiles.length} 个重复优化的文件，正在清理...`);
  
  let deletedCount = 0;
  let totalSize = 0;
  
  duplicateFiles.forEach(file => {
    try {
      fs.unlinkSync(file.fullPath);
      deletedCount++;
      totalSize += file.size;
    } catch (error) {
      console.error(`❌ 删除失败: ${file.name} - ${error.message}`);
    }
  });
  
  console.log(`✅ 清理完成！删除了 ${deletedCount} 个文件，释放空间 ${Math.round(totalSize / 1024)}KB\n`);
}

/**
 * 扫描重复优化的文件
 */
function scanDuplicateFiles(dir) {
  let files = [];
  
  try {
    const items = fs.readdirSync(dir);
    
    for (const item of items) {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        if (CONFIG.excludeDirs.includes(item)) {
          continue;
        }
        files = files.concat(scanDuplicateFiles(fullPath));
      } else if (stat.isFile()) {
        if (isDuplicateOptimized(item)) {
          files.push({
            name: item,
            fullPath: fullPath,
            size: stat.size
          });
        }
      }
    }
  } catch (error) {
    console.error(`扫描目录 ${dir} 时出错:`, error.message);
  }
  
  return files;
}

/**
 * 检查文件是否为重复优化的图片
 */
function isDuplicateOptimized(filename) {
  const thumbCount = (filename.match(/_thumb/g) || []).length;
  const fullCount = (filename.match(/_full/g) || []).length;
  
  return thumbCount > 1 || fullCount > 1 || 
         (filename.includes('_thumb') && filename.includes('_full'));
}

/**
 * 主函数
 */
function main() {
  console.log('🚀 开始优化图片...\n');
  
  // 检查cwebp是否安装
  if (!checkCwebpInstalled()) {
    console.error('❌ 未安装cwebp工具，请先安装:');
    console.error('   macOS: brew install webp');
    console.error('   Ubuntu: sudo apt-get install webp');
    console.error('   Windows: 下载并安装WebP工具');
    process.exit(1);
  }
  
  // 检查资源目录
  if (!fs.existsSync(CONFIG.assetsDir)) {
    console.error(`❌ 资源目录不存在: ${CONFIG.assetsDir}`);
    process.exit(1);
  }
  
  // 先清理重复文件
  cleanupDuplicateFiles();
  
  // 扫描图片
  console.log('📁 正在扫描图片文件...');
  const images = scanImages(CONFIG.assetsDir);
  console.log(`✅ 发现 ${images.length} 张图片\n`);
  
  if (images.length === 0) {
    console.log('⚠️  没有发现任何图片文件');
    return;
  }
  
  // 生成缩略图
  console.log('🖼️  正在生成缩略图...');
  const thumbResults = [];
  for (const image of images) {
    const result = generateThumbnail(image);
    thumbResults.push(result);
  }
  
  console.log(`\n📊 缩略图生成完成: ${thumbResults.filter(r => r.success).length}/${images.length} 成功\n`);
  
  // 生成大图
  console.log('🖼️  正在生成大图...');
  const fullResults = [];
  for (const image of images) {
    const result = generateFullSize(image);
    fullResults.push(result);
  }
  
  console.log(`\n📊 大图生成完成: ${fullResults.filter(r => r.success).length}/${images.length} 成功\n`);
  
  // 生成图片信息文件
  generateImageInfo(images, thumbResults, fullResults);
  
  // 统计信息
  const totalThumbSize = thumbResults
    .filter(r => r.success)
    .reduce((sum, r) => sum + r.size, 0);
  const totalFullSize = fullResults
    .filter(r => r.success)
    .reduce((sum, r) => sum + r.size, 0);
  
  console.log('\n🎉 图片优化完成！');
  console.log(`📈 缩略图总大小: ${Math.round(totalThumbSize / 1024)}KB`);
  console.log(`📈 大图总大小: ${Math.round(totalFullSize / 1024)}KB`);
  console.log(`📈 总节省空间: ${Math.round((totalThumbSize + totalFullSize) / 1024)}KB`);
}

// 运行主函数
if (require.main === module) {
  main();
}

module.exports = {
  scanImages,
  generateThumbnail,
  generateFullSize,
  generateImageInfo,
  CONFIG
};
