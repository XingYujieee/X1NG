# 摄影作品集自动化管理系统 - 增强版

## 功能概述

这是一个为摄影作品集网站开发的自动化图片管理系统，能够自动检测图片文件夹的变化，并自动生成相应的网页内容。您只需要将图片放入指定文件夹，系统就会自动更新网站展示的内容。

## 🆕 新增功能

### 1. 🚀 一键更新功能
- **智能扫描** - 自动扫描图片文件夹，支持子目录分类
- **自动清理** - 删除旧的页面文件，生成新的页面
- **零依赖** - 只使用 Node.js 内置模块

### 2. 📄 分页显示功能
- **每页16张图片** - 超过16张图片自动分页显示
- **无限分页** - 支持任意数量的图片，自动生成多页
- **导航链接** - 页面间可以方便地跳转

### 3. ✨ About Me 页面特效
- **打字机效果** - 标题文字逐字显示
- **滚动动画** - 内容区域滚动时触发动画
- **3D倾斜效果** - 鼠标悬停时的3D倾斜
- **粒子背景** - 动态粒子背景效果
- **发光效果** - 卡片容器发光动画
- **浮动动画** - 元素轻微浮动效果
- **鼠标跟随** - 鼠标跟随光标效果
- **滚动进度** - 页面滚动进度指示器

## 主要特性

✅ **自动扫描图片** - 递归扫描 `dist/assets/` 目录下的所有图片文件  
✅ **自动生成页面** - 根据图片数量自动生成分页的画廊页面  
✅ **响应式布局** - 支持桌面和移动设备的响应式显示  
✅ **灯箱效果** - 集成 Fancybox 提供优雅的图片浏览体验  
✅ **文件监控** - 实时监控文件变化，自动重新生成页面  
✅ **多格式支持** - 支持 JPG、JPEG、PNG、GIF、WebP 格式  
✅ **分页导航** - 每页最多16张图片，支持无限分页  
✅ **动效增强** - About Me 页面包含丰富的动画特效  

## 目录结构

```
photography-main/
├── dist/
│   ├── assets/           # 图片存放目录
│   │   ├── c/           # 分类目录示例
│   │   └── *.jpg        # 图片文件
│   ├── gallery_page_*.html  # 自动生成的画廊页面
│   ├── gallery-info.json   # 图片信息文件
│   ├── about_me.html        # 关于我页面
│   ├── about_me_enhanced.css # 关于我页面增强样式
│   └── about_me_enhanced.js  # 关于我页面增强脚本
├── update-gallery.js        # 画廊生成脚本（新）
├── watch-gallery.js         # 文件监控脚本（新）
├── package.json             # 项目配置
└── index.html               # 主页面
```

## 快速开始

### 1. 安装依赖

```bash
npm install
```

### 2. 生成画廊页面

```bash
# 一键更新（推荐）
npm run update

# 手动生成一次
npm run generate

# 或者启动监控模式
npm run watch
```

### 3. 启动网站

```bash
# 使用 Python 启动本地服务器
python3 -m http.server 8000

# 或者使用 Node.js
npx http-server -p 8000
```

然后在浏览器中访问 `http://localhost:8000`

## 使用方法

### 添加图片

1. 将图片文件复制到 `dist/assets/` 目录
2. 支持在子目录中组织图片（如 `dist/assets/landscape/`）
3. 如果启用了监控模式，页面会自动更新
4. 如果没有启用监控，运行 `npm run update` 手动更新

### 删除图片

1. 从 `dist/assets/` 目录删除图片文件
2. 系统会自动检测并更新页面

### 修改图片

1. 替换 `dist/assets/` 目录中的图片文件
2. 系统会自动检测文件变化并更新

## 配置选项

在 `update-gallery.js` 文件中可以修改以下配置：

```javascript
const CONFIG = {
  assetsDir: './dist/assets',        // 图片目录
  outputDir: './dist',               // 输出目录
  imagesPerPage: 16,                 // 每页显示图片数量（新增）
  supportedExtensions: ['.jpg', '.jpeg', '.png', '.gif', '.webp'],
  excludeDirs: ['__MACOSX', '.DS_Store']  // 排除的目录
};
```

## 命令说明

| 命令 | 说明 |
|------|------|
| `npm run update` | 一键更新画廊页面（新增） |
| `npm run generate` | 手动生成画廊页面 |
| `npm run watch` | 启动文件监控模式（新增） |
| `npm run build` | 构建项目（等同于 update） |

## 监控模式

启动监控模式后，系统会：

- 实时监控 `dist/assets/` 目录
- 检测图片文件的添加、删除、修改
- 自动重新生成画廊页面
- 更新分页配置

```bash
npm run watch
```

监控模式特性：
- ⚡ 1秒防抖延迟，避免频繁触发
- 📁 支持多层子目录监控
- 🔄 自动重新绑定 Fancybox 事件
- 👀 实时显示文件变化日志

## 分页功能详解

### 自动分页
- 每页显示16张图片
- 超过16张图片自动创建新页面
- 支持无限数量的图片

### 导航系统
- 主页显示第1页内容
- 其他页面文件：`gallery_page_2.html`, `gallery_page_3.html` 等
- 页面间导航：上一页/下一页链接
- 页面指示器：显示当前页数和总页数

### 分页示例
```
35张图片 → 3个页面
- 第1页：16张图片（index.html）
- 第2页：16张图片（gallery_page_2.html）
- 第3页：3张图片（gallery_page_3.html）
```

## About Me 页面特效详解

### 视觉特效
- **打字机效果**：标题文字逐字显示
- **滚动触发动画**：内容区域进入视窗时触发
- **3D倾斜效果**：鼠标悬停时的立体倾斜
- **发光动画**：卡片容器周期性发光
- **浮动动画**：元素轻微上下浮动

### 交互特效
- **鼠标跟随**：光标跟随效果
- **悬停增强**：链接和按钮悬停时的动画
- **滚动进度**：页面顶部的滚动进度条
- **粒子背景**：动态连接的粒子系统

### 性能优化
- 根据设备性能自动调整特效级别
- 高性能设备启用全部特效
- 低性能设备只启用基础动画
- 页面隐藏时自动暂停动画

## 技术实现

### 核心组件

1. **图片扫描器** (`scanImages`)
   - 递归扫描目录
   - 过滤支持的图片格式
   - 生成图片元数据

2. **页面生成器** (`generateGalleryPageHtml`)
   - 生成响应式网格布局
   - 集成 Fancybox 属性
   - 支持懒加载
   - 自动分页导航

3. **配置更新器** (`updateIndexHtml`)
   - 自动更新主页面的分页配置
   - 保持代码同步

4. **文件监控器** (`watch-gallery.js`)
   - 使用内置 fs.watch 监控文件变化
   - 防抖机制避免频繁触发
   - 优雅退出处理

### 生成的HTML结构

```html
<!-- 分页导航 -->
<div class="flex justify-center items-center space-x-4 mt-8 mb-8">
  <a href="gallery_page_1.html">上一页</a>
  <span>第 2 页 / 共 3 页</span>
  <a href="gallery_page_3.html">下一页</a>
</div>

<!-- 图片网格 -->
<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
  <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2">
    <div class="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <a href="图片路径" data-fancybox="gallery" data-caption="图片标题">
        <img src="图片路径" alt="图片标题" class="..." loading="lazy"/>
        <div class="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 ...">
          <!-- 悬停图标 -->
        </div>
      </a>
    </div>
  </div>
</div>
```

## 故障排除

### 常见问题

**Q: 图片没有显示？**
A: 检查图片文件路径和格式是否正确，确保图片在 `dist/assets/` 目录中。

**Q: 分页不正确？**
A: 运行 `npm run update` 重新生成页面，检查 `index.html` 中的分页导航是否更新。

**Q: 监控模式不工作？**
A: 确保安装了依赖，检查文件权限，尝试重启监控进程。

**Q: 灯箱效果不工作？**
A: 检查 Fancybox 脚本是否正确加载，确保 `data-fancybox` 属性正确设置。

**Q: About Me 页面特效不显示？**
A: 检查 `about_me_enhanced.css` 和 `about_me_enhanced.js` 文件是否正确加载。

### 调试信息

系统会生成 `dist/gallery-info.json` 文件，包含：
- 图片总数和分页信息
- 图片分类统计
- 生成时间戳
- 详细的图片列表

## 性能优化

- 使用懒加载减少初始加载时间
- 图片悬停效果使用 CSS 过渡
- 分页减少单页图片数量
- 响应式布局适配不同设备
- 特效根据设备性能自动调整
- 页面隐藏时暂停动画

## 更新日志

### v2.0.0 (当前版本)
- ✨ 新增一键更新功能
- ✨ 新增图片分页显示（每页16张）
- ✨ 新增 About Me 页面丰富特效
- 🔧 重构图片扫描和页面生成逻辑
- 🔧 优化文件监控机制
- 🔧 改进响应式设计

### v1.0.0 (原始版本)
- 基础图片画廊功能
- Fancybox 灯箱效果
- 响应式布局

## 扩展功能

可以考虑添加的功能：
- 图片标签和分类管理
- 图片排序选项（按时间、名称、大小）
- 图片压缩和优化
- SEO 优化（图片 alt 标签、元数据）
- 社交分享功能
- 更多动画特效选项
- 主题切换功能

## 许可证

MIT License

---

**享受您的增强版自动化摄影作品集管理体验！** 📸✨🚀


