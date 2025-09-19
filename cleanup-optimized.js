#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// 配置
const CONFIG = {
  assetsDir: './dist/assets',
  excludeDirs: ['__MACOSX', '.DS_Store', 'node_modules', 'raw']
};

/**
 * 检查文件是否为重复优化的图片
 */
function isDuplicateOptimized(filename) {
  // 匹配包含多个 _thumb 或 _full 的文件
  const thumbCount = (filename.match(/_thumb/g) || []).length;
  const fullCount = (filename.match(/_full/g) || []).length;
  
  return thumbCount > 1 || fullCount > 1 || 
         (filename.includes('_thumb') && filename.includes('_full'));
}

/**
 * 递归扫描目录获取所有重复优化的文件
 */
function scanDuplicateFiles(dir) {
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
 * 删除文件
 */
function deleteFile(file) {
  try {
    fs.unlinkSync(file.fullPath);
    console.log(`🗑️  已删除: ${file.name} (${Math.round(file.size / 1024)}KB)`);
    return true;
  } catch (error) {
    console.error(`❌ 删除失败: ${file.name} - ${error.message}`);
    return false;
  }
}

/**
 * 主函数
 */
function main() {
  console.log('🧹 开始清理重复优化的图片文件...\n');
  
  // 检查资源目录
  if (!fs.existsSync(CONFIG.assetsDir)) {
    console.error(`❌ 资源目录不存在: ${CONFIG.assetsDir}`);
    process.exit(1);
  }
  
  // 扫描重复文件
  console.log('📁 正在扫描重复优化的文件...');
  const duplicateFiles = scanDuplicateFiles(CONFIG.assetsDir);
  
  if (duplicateFiles.length === 0) {
    console.log('✅ 没有发现重复优化的文件');
    return;
  }
  
  console.log(`🔍 发现 ${duplicateFiles.length} 个重复优化的文件\n`);
  
  // 显示将要删除的文件
  console.log('📋 将要删除的文件:');
  duplicateFiles.forEach((file, index) => {
    console.log(`${index + 1}. ${file.name} (${Math.round(file.size / 1024)}KB)`);
  });
  
  console.log('\n🗑️  开始删除文件...');
  
  // 删除文件
  let deletedCount = 0;
  let totalSize = 0;
  
  duplicateFiles.forEach(file => {
    if (deleteFile(file)) {
      deletedCount++;
      totalSize += file.size;
    }
  });
  
  console.log(`\n🎉 清理完成！`);
  console.log(`📊 删除了 ${deletedCount}/${duplicateFiles.length} 个文件`);
  console.log(`📈 释放空间: ${Math.round(totalSize / 1024)}KB`);
}

// 运行主函数
if (require.main === module) {
  main();
}

module.exports = {
  scanDuplicateFiles,
  deleteFile,
  isDuplicateOptimized
};
