// watch-raw-images.js
//将每组对比图片以 xxx_before.jpg 和 xxx_after.jpg 命名，放入 dist/assets/raw/ 文件夹。
//在项目根目录运行：node watch-raw-images.js
//每次有新图片加入或删除，raw-config.json 会自动更新，页面自动展示。



const fs = require('fs');
const path = require('path');

const rawDir = path.join(__dirname, 'dist/raw');
const configFile = path.join(rawDir, 'raw-config.json');

function updateConfig() {
  const files = fs.readdirSync(rawDir);
  const beforeImages = files.filter(f => f.endsWith('_before.jpg'));
  let oldConfig = {};
  if (fs.existsSync(configFile)) {
    try {
      const oldData = JSON.parse(fs.readFileSync(configFile, 'utf-8'));
      if (Array.isArray(oldData.rawComparisons)) {
        oldConfig = {};
        oldData.rawComparisons.forEach(item => {
          oldConfig[item.title] = item.panUrl || '';
        });
      }
    } catch (e) {}
  }
  const config = [];
  let id = 1;
  beforeImages.forEach(before => {
    const prefix = before.replace('_before.jpg', '');
    const after = `${prefix}_after.jpg`;
    if (files.includes(after)) {
      config.push({
        id: id++,
        title: prefix,
    before: `raw/${before}`,
    after: `raw/${after}`,
        description: '',
        panUrl: oldConfig[prefix] || ''
      });
    }
  });
  fs.writeFileSync(configFile, JSON.stringify({ rawComparisons: config }, null, 2));
  console.log('raw-config.json 已自动更新');
}

// 初始运行一次
updateConfig();

// 监控目录变化
fs.watch(rawDir, (eventType, filename) => {
  if (filename && filename.endsWith('.jpg')) {
    console.log(`检测到新图片: ${filename}`);
    updateConfig();
  }
});
