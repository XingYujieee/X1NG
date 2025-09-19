#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { spawn } = require('child_process');

// 配置
const CONFIG = {
  assetsDir: './dist/assets',
  watchDelay: 1000, // 防抖延迟（毫秒）
  supportedExtensions: ['.jpg', '.jpeg', '.png', '.gif', '.webp']
};

let watchTimeout = null;
let isUpdating = false;

/**
 * 简单的文件监控实现
 */
class SimpleWatcher {
  constructor(directory, callback) {
    this.directory = directory;
    this.callback = callback;
    this.watchers = new Map();
    this.isWatching = false;
  }

  start() {
    if (this.isWatching) return;
    this.isWatching = true;
    this.watchDirectory(this.directory);
    console.log(`👀 开始监控目录: ${this.directory}`);
  }

  stop() {
    this.isWatching = false;
    for (const watcher of this.watchers.values()) {
      watcher.close();
    }
    this.watchers.clear();
    console.log('⏹️  停止监控');
  }

  watchDirectory(dir) {
    if (!fs.existsSync(dir)) return;

    try {
      const watcher = fs.watch(dir, { recursive: true }, (eventType, filename) => {
        if (!filename) return;
        
        const fullPath = path.join(dir, filename);
        const ext = path.extname(filename).toLowerCase();
        
        // 只监控图片文件
        if (CONFIG.supportedExtensions.includes(ext)) {
          console.log(`📸 检测到文件变化: ${eventType} - ${filename}`);
          this.callback(eventType, fullPath);
        }
      });

      this.watchers.set(dir, watcher);
    } catch (error) {
      console.error(`监控目录 ${dir} 时出错:`, error.message);
    }
  }
}

/**
 * 执行更新操作
 */
function executeUpdate() {
  if (isUpdating) {
    console.log('⏳ 更新正在进行中，跳过此次触发');
    return;
  }

  isUpdating = true;
  console.log('\n🔄 开始更新画廊...');

  const updateProcess = spawn('node', ['update-gallery.js'], {
    stdio: 'inherit',
    cwd: process.cwd()
  });

  updateProcess.on('close', (code) => {
    isUpdating = false;
    if (code === 0) {
      console.log('✅ 画廊更新完成\n');
      console.log('👀 继续监控文件变化...');
    } else {
      console.error(`❌ 更新失败，退出码: ${code}\n`);
    }
  });

  updateProcess.on('error', (error) => {
    isUpdating = false;
    console.error('❌ 执行更新时出错:', error.message);
  });
}

/**
 * 防抖处理文件变化
 */
function handleFileChange(eventType, filePath) {
  // 清除之前的定时器
  if (watchTimeout) {
    clearTimeout(watchTimeout);
  }

  // 设置新的定时器
  watchTimeout = setTimeout(() => {
    executeUpdate();
  }, CONFIG.watchDelay);
}

/**
 * 主函数
 */
function main() {
  console.log('🚀 摄影作品集文件监控器启动\n');
  
  // 检查资源目录是否存在
  if (!fs.existsSync(CONFIG.assetsDir)) {
    console.error(`❌ 资源目录不存在: ${CONFIG.assetsDir}`);
    process.exit(1);
  }

  // 检查更新脚本是否存在
  if (!fs.existsSync('./update-gallery.js')) {
    console.error('❌ 找不到 update-gallery.js 文件');
    process.exit(1);
  }

  console.log('📋 监控配置:');
  console.log(`   📁 监控目录: ${CONFIG.assetsDir}`);
  console.log(`   ⏱️  防抖延迟: ${CONFIG.watchDelay}ms`);
  console.log(`   🖼️  支持格式: ${CONFIG.supportedExtensions.join(', ')}`);
  console.log('');

  // 首次执行更新
  console.log('🔄 执行初始更新...');
  executeUpdate();

  // 创建文件监控器
  const watcher = new SimpleWatcher(CONFIG.assetsDir, handleFileChange);
  watcher.start();

  // 优雅退出处理
  process.on('SIGINT', () => {
    console.log('\n\n🛑 收到退出信号...');
    watcher.stop();
    if (watchTimeout) {
      clearTimeout(watchTimeout);
    }
    console.log('👋 监控器已停止，再见！');
    process.exit(0);
  });

  process.on('SIGTERM', () => {
    console.log('\n\n🛑 收到终止信号...');
    watcher.stop();
    if (watchTimeout) {
      clearTimeout(watchTimeout);
    }
    process.exit(0);
  });

  console.log('💡 提示:');
  console.log('   - 添加、删除或修改图片文件会自动触发更新');
  console.log('   - 按 Ctrl+C 停止监控');
  console.log('   - 更新完成后可运行 "python3 -m http.server 8000" 预览网站');
  console.log('\n👀 正在监控文件变化...');
}

// 运行主函数
if (require.main === module) {
  main();
}

module.exports = {
  SimpleWatcher,
  executeUpdate,
  handleFileChange,
  CONFIG
};

