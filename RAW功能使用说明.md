# RAW功能使用说明

## 功能概述

已成功为您的摄影作品集网站添加了RAW功能页面，实现了图片前后对比的交互式查看器。

## 功能特点

### 1. 交互式图片对比
- 支持鼠标拖拽滑块查看前后对比
- 支持触摸设备（移动端）操作
- 点击图片任意位置快速跳转到对应位置
- 平滑的动画过渡效果

### 2. 响应式设计
- 桌面端：网格布局，每行显示多个对比组件
- 移动端：单列布局，适配小屏幕设备
- 自适应图片高度和容器大小

### 3. 动态配置加载
- 通过JSON配置文件管理图片对比数据
- 支持动态添加新的对比图片
- 错误处理和降级方案

## 文件结构

```
dist/
├── raw.html                    # RAW功能主页面
└── assets/
    └── raw/
        ├── raw-config.json     # 图片配置文件
        ├── sample_before_1.jpg # 示例原图1
        ├── sample_after_1.jpg  # 示例处理后图片1
        ├── sample_before_2.jpg # 示例原图2
        └── sample_after_2.jpg  # 示例处理后图片2
```

## 如何添加新的图片对比

### 方法1：修改配置文件（推荐）

1. 将您的图片文件放入 `dist/assets/raw/` 目录
2. 编辑 `dist/assets/raw/raw-config.json` 文件
3. 按照以下格式添加新的对比项：

```json
{
  "rawComparisons": [
    {
      "id": 3,
      "title": "您的图片标题",
      "before": "assets/raw/your_before_image.jpg",
      "after": "assets/raw/your_after_image.jpg",
      "description": "处理说明描述"
    }
  ]
}
```

### 方法2：批量添加脚本

可以创建一个简单的脚本来批量处理图片：

```bash
# 示例脚本：将图片复制到RAW目录并更新配置
#!/bin/bash
# 将此脚本保存为 update-raw-gallery.sh

# 复制图片到RAW目录
cp your_before_image.jpg dist/assets/raw/
cp your_after_image.jpg dist/assets/raw/

# 手动编辑配置文件或使用脚本自动更新
```

## 图片命名建议

为了便于管理，建议使用以下命名规范：

- 原图：`项目名_before.jpg`
- 处理后：`项目名_after.jpg`
- 例如：`landscape_sunset_before.jpg` 和 `landscape_sunset_after.jpg`

## 图片格式要求

- 支持格式：JPG, PNG, WebP
- 建议分辨率：1920x1080 或更高
- 建议文件大小：每张图片不超过2MB（为了加载速度）
- 前后对比的两张图片应保持相同的尺寸比例

## 自动更新方案

### 方案1：文件监控脚本

创建一个监控脚本，当检测到新图片添加时自动更新配置：

```javascript
// watch-raw-images.js
const fs = require('fs');
const path = require('path');

const rawDir = './dist/assets/raw/';
const configFile = './dist/assets/raw/raw-config.json';

// 监控目录变化
fs.watch(rawDir, (eventType, filename) => {
  if (filename && filename.endsWith('.jpg')) {
    console.log(`检测到新图片: ${filename}`);
    // 自动更新配置逻辑
    updateConfig();
  }
});
```

### 方案2：定期扫描更新

```bash
# 定期扫描脚本
#!/bin/bash
# 每天运行一次，扫描新图片并更新配置

cd /path/to/your/website
find dist/assets/raw/ -name "*_before.jpg" -newer dist/assets/raw/raw-config.json
# 如果发现新文件，则更新配置
```

## 技术实现细节

### CSS关键样式
- `clip-path` 实现图片遮罩效果
- `transform` 和 `transition` 实现平滑动画
- Flexbox 和 Grid 布局实现响应式设计

### JavaScript核心功能
- 事件监听：鼠标和触摸事件处理
- 动态DOM操作：根据配置生成HTML结构
- 异步加载：Fetch API加载配置文件

### 浏览器兼容性
- 现代浏览器（Chrome 60+, Firefox 55+, Safari 12+）
- 移动端浏览器支持
- 降级处理：配置加载失败时显示默认内容

## 维护建议

1. **定期备份**：备份 `raw-config.json` 配置文件
2. **图片优化**：使用图片压缩工具减小文件大小
3. **性能监控**：监控页面加载速度，必要时进行优化
4. **用户反馈**：收集用户使用体验，持续改进交互效果

## 故障排除

### 常见问题

1. **图片不显示**
   - 检查图片路径是否正确
   - 确认图片文件是否存在
   - 检查文件权限

2. **滑块不工作**
   - 检查JavaScript是否正确加载
   - 查看浏览器控制台错误信息
   - 确认CSS样式是否正确应用

3. **配置文件加载失败**
   - 检查JSON格式是否正确
   - 确认文件路径和权限
   - 查看网络请求状态

通过以上说明，您可以轻松管理和更新RAW功能页面的内容。如有任何问题，请参考故障排除部分或联系技术支持。

