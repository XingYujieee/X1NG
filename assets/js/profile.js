/* ------------------------------------------------------------------
   Profile — projects and CV (projects.html).
   Edit freely: every field is plain text. `todo: true` renders an item
   as a dashed "to be added" placeholder so gaps stay visible to you.
------------------------------------------------------------------- */

export const PROJECT_KINDS = [
  { id: 'research', en: 'Research', zh: '研究' },
  { id: 'app', en: 'Apps & tools', zh: '应用与工具' },
  { id: 'hardware', en: 'Web & hardware', zh: '网页与硬件' },
];

// hue = accent of the generated cover tile (0–360)
export const PROJECTS = [
  {
    id: 'pixel-study', kind: 'app', hue: 28, year: '2026', status: 'v1 · open source',
    en: 'Pixel Study', zh: '像素书房',
    one: 'A notes app you walk into — a first-person, Minecraft-style pixel study room.',
    oneZh: '走进去写笔记：第一人称的像素风书房。',
    body: 'macOS-first local notes app. Notes are plain files on disk, shared with an Obsidian vault, and live on the shelves and desks of a pixel room you can walk around. Open-sourced under the MIT licence.',
    bodyZh: '以 macOS 为主的本地笔记应用。笔记就是本地文件，与 Obsidian 共用；它们放在一间可以走动的像素书房里。MIT 协议开源。',
    stack: ['Tauri 2', 'React', 'Three.js', 'CodeMirror 6'],
    links: [{ label: 'GitHub', href: 'https://github.com/XingYujieee/pixel-study' }],
  },
  {
    id: 'radar', kind: 'research', hue: 210, year: '2026', status: 'paper in progress',
    en: 'PRI-guided radar pulse sorting', zh: 'PRI 引导的雷达脉冲分选',
    one: 'When do periodic links help sort radar pulses whose features overlap — and when do they fail?',
    oneZh: '特征混叠下，脉冲重复间隔（PRI）何时能帮助分选，何时会失效。',
    body: 'Builds on DBSCAN + PRI-transform sorting (Kang et al., 2022): an HDBSCAN-based pipeline guided by PRI, evaluated systematically — what each component contributes, the recall vs over-segmentation trade-off, and where the approach stops working.',
    bodyZh: '在 DBSCAN + PRI 变换分选方法（Kang 等，2022）的基础上，构建以 PRI 引导的 HDBSCAN 分选流程，并系统评估各组件作用、召回与过分割的权衡以及方法的适用边界。',
    stack: ['Python', 'HDBSCAN', 'Signal processing'],
    links: [],
  },
  {
    id: 'training-cost', kind: 'research', hue: 150, year: '2025—', status: 'ongoing review',
    en: 'The cost of training AI, revisited', zh: '重算 AI 训练成本',
    one: 'Rebuilding Strubell et al. (2019)’s training-cost tables with today’s coefficients.',
    oneZh: '用当下的系数重建 Strubell 等（2019）的训练成本表。',
    body: 'A systematic literature review from Strubell (2019) through Patterson (2021) to Morrison (2025): updating PUE, grid carbon intensity and water use, and arguing for a three-part account — operational carbon, embodied emissions and water.',
    bodyZh: '从 Strubell（2019）到 Patterson（2021）、Morrison（2025）的系统综述：更新 PUE、电网碳强度与用水系数，提出“运行碳排 + 隐含排放 + 水”三维核算框架。',
    stack: ['Literature review', 'Carbon accounting'],
    links: [],
  },
  {
    id: 'pv-forecast', kind: 'research', hue: 48, year: '', status: 'completed',
    en: 'Solar PV forecasting', zh: '光伏发电预测',
    one: 'Two models for two kinds of day: LSTM for normal weather, a Transformer for the extremes.',
    oneZh: '普通天气用 LSTM，极端天气交给 Transformer。',
    body: 'A photovoltaic generation forecasting model that routes ordinary days to an LSTM and extreme-weather days to a Transformer, so the rare, hard cases get a model built for them.',
    bodyZh: '光伏发电功率预测：普通天气使用 LSTM，极端天气切换到 Transformer，让少见而困难的情形有专门的模型。',
    stack: ['Python', 'LSTM', 'Transformer'],
    links: [],
  },
  {
    id: 'headtilt', kind: 'app', hue: 265, year: '2026', status: 'in progress',
    en: 'HeadTilt', zh: 'AirPods 鼠标',
    one: 'AirPods as a pointer: tilt to move, tap the case to click.',
    oneZh: '把 AirPods 当鼠标：倾斜移动，轻敲充电盒点击。',
    body: 'A small macOS app that reads AirPods motion data to drive the cursor, designed to feel native to Apple’s design language. Exploring a 3D-printed holder so it works without opening the case.',
    bodyZh: '读取 AirPods 运动数据控制光标的 macOS 小应用，交互贴合 Apple 设计语言；正在尝试 3D 打印外壳，让它合着盒子也能用。',
    stack: ['Swift', 'macOS', 'Core Motion'],
    links: [],
  },
  {
    id: 'studymate', kind: 'app', hue: 190, year: '2026', status: 'in progress',
    en: 'StudyMate', zh: 'AI 学习助手',
    one: 'A personal AI study companion for Mac and iPhone — lectures in, notes and flashcards out.',
    oneZh: '自用的 AI 学习助手：课程进去，笔记和卡片出来。',
    body: 'Native SwiftUI app. Apple’s built-in transcription on device, a cloud LLM for summaries (DeepSeek first), notes exported to Obsidian and flashcards to Anki.',
    bodyZh: '原生 SwiftUI 应用：系统自带转写 + 云端大模型（先接 DeepSeek），笔记导出到 Obsidian，卡片导出到 Anki。',
    stack: ['SwiftUI', 'Speech', 'LLM APIs'],
    links: [],
  },
  {
    id: 'widget-export', kind: 'app', hue: 330, year: '2026', status: 'in progress',
    en: 'Interactive Export', zh: '交互组件导出',
    one: 'Take the live charts and sliders from an AI chat and keep them, still working, in your notes.',
    oneZh: '把 AI 对话里的交互图表原样存进笔记，离线也能用。',
    body: 'A browser extension, packager and Obsidian plugin that export the interactive widgets AI chats generate into a note — the demo box only, with its logic intact and offline. Typora support planned.',
    bodyZh: '浏览器扩展 + 打包器 + Obsidian 插件：只导出交互演示框本身，保留逻辑、离线可用；计划支持 Typora。',
    stack: ['Browser extension', 'Obsidian plugin', 'JavaScript'],
    links: [],
  },
  {
    id: 'sunset', kind: 'hardware', hue: 14, year: '2026', status: 'in progress',
    en: 'London sunset-glow forecast', zh: '伦敦火烧云预报',
    one: 'Will tonight’s sky burn? A sunset-glow and visibility forecast for London.',
    oneZh: '今晚会不会有火烧云？伦敦的火烧云与能见度预报。',
    body: 'Reverse-engineers how sunset-glow forecasts are scored and rebuilds one for London, with scheduled runs and a simple public dashboard — made by a photographer who got tired of guessing.',
    bodyZh: '还原火烧云预报的评分思路，为伦敦重建一套，定时运行并配一个简单的公开看板——一个猜累了的摄影师做的。',
    stack: ['Python', 'Weather data', 'Dashboard'],
    links: [],
  },
  {
    id: 'ai-passport', kind: 'hardware', hue: 95, year: '2026', status: 'prototype',
    en: 'Wrist navigation', zh: '手腕上的导航',
    one: 'Turn-by-turn walking directions on a tiny ESP32 screen, so the phone stays in the pocket.',
    oneZh: '把步行导航搬到 ESP32 小屏上，手机留在口袋里。',
    body: 'A custom iPhone app sends each step over Bluetooth LE to a FoloToy AI Passport board worn on the wrist. Field-tested walking around London.',
    bodyZh: '自制 iPhone 应用通过蓝牙 LE 把每一步路线发到戴在手腕上的 FoloToy AI Passport 开发板，已在伦敦街头实测。',
    stack: ['ESP32', 'BLE', 'iOS'],
    links: [],
  },
  {
    id: 'poker', kind: 'hardware', hue: 120, year: '', status: 'completed',
    en: 'Hold’em table', zh: '德州扑克',
    one: 'A single-player Texas Hold’em table with bots that each play like a different person.',
    oneZh: '单人德州扑克，每个 AI 对手都有自己的牌风。',
    body: 'React web app with named AI bot personalities, a hand evaluator and a polished table UI.',
    bodyZh: 'React 网页应用：有名字和性格的 AI 对手、牌力评估器，以及打磨过的牌桌界面。',
    stack: ['React', 'Game logic'],
    links: [],
  },
  {
    id: 'x1ng', kind: 'hardware', hue: 232, year: '2025—', status: 'live',
    en: 'X1NG — this site', zh: '这个网站',
    one: 'A photography archive that opens inside a camera viewfinder.',
    oneZh: '在取景器里打开的摄影档案。',
    body: 'Real-time WebGL viewfinder hero driven by depth maps, a 3D field of every frame, aperture page transitions — static HTML, no build step needed to run.',
    bodyZh: '基于深度图的实时 WebGL 取景器首页、全部作品的 3D 漫游、光圈转场——纯静态网页。',
    stack: ['three.js', 'GSAP', 'WebGL'],
    links: [{ label: 'GitHub', href: 'https://github.com/XingYujieee/X1NG' }],
  },
];

export const FEATURED_PROJECTS = ['pixel-study', 'radar', 'headtilt'];

export const CV = {
  pdf: null, // e.g. 'media/cv/xing-cv.pdf' — the download button appears once this is set
  education: [
    { when: '2026 —', what: 'MSc Artificial Intelligence for Sustainable Development', where: '' },
    { when: '', what: 'Undergraduate degree', where: '', todo: true },
  ],
  interests: [
    ['Energy and carbon cost of AI', 'AI 的能耗与碳排'],
    ['Forecasting for renewables', '可再生能源预测'],
    ['Signal processing & clustering', '信号处理与聚类'],
    ['Tools for thinking — notes, study, interfaces', '帮助思考的工具'],
  ],
  skills: [
    ['Code', 'Python · Swift / SwiftUI · JavaScript / React · three.js'],
    ['Machine learning', 'LSTM · Transformer · clustering (HDBSCAN)'],
    ['Making', 'Tauri · browser extensions · ESP32 / BLE'],
    ['Photography', 'Landscape · cityscape · drone · RAW post-processing'],
  ],
  experience: [
    { when: '', what: 'Experience / internships', where: '', todo: true },
  ],
  languages: [['Chinese', '中文 · native'], ['English', '英语 · academic']],
};

const pad = (n, l = 2) => String(n).padStart(l, '0');
const esc = (s = '') => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
/* ---------- Generated cover tile: each project gets its own little "contact print" ---------- */
export function coverSvg(p, i) {
  const h = p.hue;
  const seed = [...p.id].reduce((a, c) => a + c.charCodeAt(0), 0);
  const lines = Array.from({ length: 9 }, (_, k) => {
    const y = 12 + k * 10 + ((seed * (k + 3)) % 7);
    const w = 30 + ((seed * (k + 7)) % 60);
    return `<rect x="10" y="${y}" width="${w}" height="1.4" fill="hsl(${h} 90% 85% / .55)"/>`;
  }).join('');
  return `<svg viewBox="0 0 120 120" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
    <defs><radialGradient id="g${i}" cx="${30 + (seed % 40)}%" cy="${25 + (seed % 30)}%" r="90%"><stop offset="0" stop-color="hsl(${h} 95% 62%)"/><stop offset=".55" stop-color="hsl(${(h + 40) % 360} 70% 26%)"/><stop offset="1" stop-color="#0b0c10"/></radialGradient></defs>
    <rect width="120" height="120" fill="url(#g${i})"/>
    ${lines}
    <circle cx="${78 + (seed % 20)}" cy="${70 + (seed % 25)}" r="${14 + (seed % 12)}" fill="none" stroke="hsl(${h} 100% 90% / .7)" stroke-width="1"/>
    <text x="10" y="98" font-family="Geist Mono, monospace" font-size="9" letter-spacing="1.5" fill="hsl(${h} 100% 94% / .85)">${pad(i + 1)} / ${esc(p.id.toUpperCase().slice(0, 12))}</text>
  </svg>`;
}

