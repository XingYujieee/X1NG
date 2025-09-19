#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// 配置
const CONFIG = {
  assetsDir: './',
  supportedExtensions: ['.jpg', '.jpeg'],
  excludeDirs: ['__MACOSX', '.DS_Store', 'node_modules', 'raw'],
  quality: 85 // WebP质量 (1-100)
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
 * 递归扫描目录获取所有JPG文件
 */
function scanJpgFiles(dir, baseDir = dir) {
  let files = [];
  
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
        files = files.concat(scanJpgFiles(fullPath, baseDir));
      } else if (stat.isFile()) {
        const ext = path.extname(item).toLowerCase();
        if (CONFIG.supportedExtensions.includes(ext)) {
          const relativePath = path.relative(baseDir, fullPath);
          files.push({
            name: item,
            path: relativePath.replace(/\\/g, '/'),
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
 * 转换单个JPG文件为WebP
 */
function convertToWebp(jpgFile) {
  const jpgPath = jpgFile.fullPath;
  const webpPath = jpgPath.replace(/\.(jpg|jpeg)$/i, '.webp');
  
  try {
    // 使用cwebp命令转换
    const command = `cwebp -q ${CONFIG.quality} "${jpgPath}" -o "${webpPath}"`;
    execSync(command, { stdio: 'pipe' });
    
    // 检查WebP文件是否成功创建
    if (fs.existsSync(webpPath)) {
      const webpStats = fs.statSync(webpPath);
      const originalSize = jpgFile.size;
      const newSize = webpStats.size;
      const compressionRatio = ((originalSize - newSize) / originalSize * 100).toFixed(1);
      
      console.log(`✅ ${jpgFile.name} -> ${path.basename(webpPath)} (${formatBytes(originalSize)} -> ${formatBytes(newSize)}, 压缩 ${compressionRatio}%)`);
      
      // 删除原始JPG文件
      fs.unlinkSync(jpgPath);
      console.log(`🗑️  删除原文件: ${jpgFile.name}`);
      
      return {
        success: true,
        originalSize,
        newSize,
        compressionRatio: parseFloat(compressionRatio)
      };
    } else {
      console.error(`❌ WebP文件创建失败: ${jpgFile.name}`);
      return { success: false };
    }
  } catch (error) {
    console.error(`❌ 转换失败 ${jpgFile.name}:`, error.message);
    return { success: false };
  }
}

/**
 * 格式化文件大小
 */
function formatBytes(bytes) {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

/**
 * 主函数
 */
function main() {
  console.log('🚀 开始JPG转WebP转换...\n');
  
  // 检查cwebp是否安装
  if (!checkCwebpInstalled()) {
    console.error('❌ 错误: 未找到cwebp工具');
    console.log('请先安装WebP工具:');
    console.log('  macOS: brew install webp');
    console.log('  Ubuntu: sudo apt-get install webp');
    console.log('  Windows: 下载并安装 https://developers.google.com/speed/webp/download');
    process.exit(1);
  }
  
  // 检查资源目录是否存在
  if (!fs.existsSync(CONFIG.assetsDir)) {
    console.error(`❌ 资源目录不存在: ${CONFIG.assetsDir}`);
    process.exit(1);
  }
  
  // 扫描JPG文件
  console.log('📁 正在扫描JPG文件...');
  const jpgFiles = scanJpgFiles(CONFIG.assetsDir);
  console.log(`✅ 发现 ${jpgFiles.length} 个JPG文件\n`);
  
  if (jpgFiles.length === 0) {
    console.log('⚠️  没有发现任何JPG文件');
    return;
  }
  
  // 转换文件
  console.log('🔄 开始转换文件...\n');
  let successCount = 0;
  let totalOriginalSize = 0;
  let totalNewSize = 0;
  
  for (const jpgFile of jpgFiles) {
    const result = convertToWebp(jpgFile);
    if (result.success) {
      successCount++;
      totalOriginalSize += result.originalSize;
      totalNewSize += result.newSize;
    }
  }
  
  // 输出统计信息
  console.log('\n📊 转换完成统计:');
  console.log(`✅ 成功转换: ${successCount}/${jpgFiles.length} 个文件`);
  if (successCount > 0) {
    const totalCompression = ((totalOriginalSize - totalNewSize) / totalOriginalSize * 100).toFixed(1);
    console.log(`📦 总大小: ${formatBytes(totalOriginalSize)} -> ${formatBytes(totalNewSize)}`);
    console.log(`💾 节省空间: ${formatBytes(totalOriginalSize - totalNewSize)} (${totalCompression}%)`);
  }
  
  console.log('\n🎉 JPG转WebP转换完成！');
  console.log('💡 提示: 现在可以运行 "node update-gallery.js" 来更新图片路径');
}

// 运行主函数
if (require.main === module) {
  main();
}

module.exports = {
  scanJpgFiles,
  convertToWebp,
  CONFIG
};
