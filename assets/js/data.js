import { RAW_PHOTOS } from './photos.js';

/* ------------------------------------------------------------------
   Content model
   photos   — every frame in the archive (edit titles in photos.js)
   series   — curated bodies of work (order = order on the site)
   raws     — RAW → final comparisons for the RAW Lab
------------------------------------------------------------------- */

export const CATEGORIES = [
  { id: 'cityscape',   en: 'Cityscape',   zh: '城市' },
  { id: 'landscape',   en: 'Landscape',   zh: '风光' },
  { id: 'personal',    en: 'On the Road', zh: '在路上' },
  { id: 'documentary', en: 'Documentary', zh: '人文纪实' },
  { id: 'creativity',  en: 'Creative',    zh: '创意' },
  { id: 'ecological',  en: 'Wildlife',    zh: '生灵' },
];

/* Curation by visual style — the main way into the archive. */
export const STYLES = [
  { id: 'blue',     en: 'Blue Hour',        zh: '蓝调城市', cover: 1,   note: 'Cities in the cool minutes after sunset, when the lights come on.', noteZh: '日落后的蓝调时刻，城市一盏盏亮起。' },
  { id: 'gold',     en: 'Golden Light',     zh: '金色时刻', cover: 95,  note: 'Alpenglow, burning skies and the warm edges of the day.', noteZh: '日照金山、火烧云，一天中最暖的边缘。' },
  { id: 'vast',     en: 'Wide Open',        zh: '辽阔',     cover: 47,  note: 'Plateaus, peaks, fog seas — and one small figure for scale.', noteZh: '高原、雪山与云海，以及画面里那个小小的人。' },
  { id: 'night',    en: 'After Dark',       zh: '夜与星',   cover: 39,  note: 'Star trails, fireflies, lightning and neon.', noteZh: '星轨、萤火、闪电与霓虹。' },
  { id: 'geometry', en: 'Geometry',         zh: '几何',     cover: 25,  note: 'Spirals, symmetry and patterns found in architecture and land.', noteZh: '在建筑与大地中发现的螺旋、对称与秩序。' },
  { id: 'people',   en: 'Human Moments',    zh: '人间',     cover: 20,  note: 'Streets, festivals and the people inside the frame.', noteZh: '街头、节庆，以及画面里的人。' },
  { id: 'green',    en: 'Living Green',     zh: '生灵草木', cover: 51,  note: 'Animals, forests and the turning seasons.', noteZh: '动物、森林与季节的流转。' },
];
export const styleById = (id) => STYLES.find((s) => s.id === id);

export const photos = RAW_PHOTOS.map(([id, w, h, cat, title, zh, place, style], i) => ({
  n: i + 1, id, w, h, ratio: w / h, cat, style, title, zh, place,
  s: `media/s/${id}.webp`,   // 640px  — grid, WebGL textures
  m: `media/m/${id}.webp`,   // 1280px — cards, series pages
  l: `media/l/${id}.webp`,   // 2400px — lightbox
}));

export const byN = (n) => photos[n - 1];
/* WebGL texture source. When the site is opened straight from disk (file://),
   browsers refuse to upload local images to WebGL, so a pre-embedded copy is used. */
export const texSrc = (p) => (typeof window !== 'undefined' && window.X1NG_TEX && window.X1NG_TEX[p.id]) || p.s;
export const byId = (id) => photos.find((p) => p.id === id);

export const series = [
  {
    id: 'yunnan',
    en: 'Yunnan Journey', zh: '云南之旅',
    region: 'Lijiang · Shangri-La · Meili', year: '2024', tags: ['Travel', 'Alpine', 'Guide'],
    cover: 102,
    lede: 'Six days between old towns and glaciers — chasing the first gold on Meili, the morning haze over Songzanlin and the blue hour mirror of Xueda Lake.',
    ledeZh: '从古城丽江到梅里雪山，六天五晚追逐日照金山、松赞林寺晨雾与雪达湖的蓝调倒影。',
    frames: [102, 39, 44, 55, 114, 24, 42, 105, 106, 115, 38, 116, 118, 117, 93, 94, 52, 53, 26],
    guide: 'yunnan',
  },
  {
    id: 'qinggan',
    en: 'Qinghai–Gansu Loop', zh: '青甘大环线',
    region: 'Qinghai · Gansu · Northwest China', year: '2024', tags: ['Travel', 'Desert', 'Night sky'],
    cover: 47,
    lede: 'A long loop across the plateau: salt lakes that hold the sky, yardang ridges under turning stars, and roads that simply keep going.',
    ledeZh: '穿越青海与甘肃的高原与戈壁：倒映天空的盐湖、星轨下的雅丹，以及没有尽头的公路。',
    frames: [47, 65, 91, 63, 77, 64, 60, 35, 112, 92, 88, 87, 90, 66],
    guide: 'qinggan',
  },
  {
    id: 'cities',
    en: 'Cities After Dusk', zh: '城市暮色',
    region: 'Nanjing · Beijing · Shanghai', year: '2023—', tags: ['Cityscape', 'Blue hour', 'Night'],
    cover: 95,
    lede: 'Home is Nanjing, but the habit travels: wait for the blue hour, find the high ground, let the city switch itself on.',
    ledeZh: '常驻南京，也在北京、上海的高处等待蓝调时刻，看城市一盏盏亮起来。',
    frames: [95, 21, 1, 29, 22, 67, 36, 59, 2, 8, 13, 14, 68, 70, 124, 33, 34, 119, 123, 17, 74, 79],
  },
  {
    id: 'above',
    en: 'From Above', zh: '高空',
    region: 'Drone work', year: '2023—', tags: ['Aerial', 'Patterns', 'Fog'],
    cover: 86,
    lede: 'Four hundred metres changes everything. Fog becomes an ocean, streets become circuitry, and a single tower becomes an island.',
    ledeZh: '升到四百米高空：雾变成海，街道变成电路，一栋楼也能成为孤岛。',
    frames: [86, 76, 85, 122, 50, 107, 46, 89, 37, 48, 28],
  },
  {
    id: 'geometry',
    en: 'Geometry of Light', zh: '光的几何',
    region: 'Architecture studies', year: '2023—', tags: ['Creative', 'Spirals', 'Symmetry'],
    cover: 25,
    lede: 'Spirals, tunnels, facades — buildings looked at until they stop being buildings and turn into drawings made of light.',
    ledeZh: '旋梯、隧道与立面：一直看着建筑，直到它变成一张由光构成的图。',
    frames: [25, 5, 96, 7, 103, 40, 6, 101, 83, 11, 69, 97, 125],
  },
  {
    id: 'people',
    en: 'Human Scale', zh: '人间',
    region: 'Street & documentary', year: '2023—', tags: ['Documentary', 'Street', 'Festivals'],
    cover: 20,
    lede: 'Close enough to notice the gesture, far enough to let it stay true — ribbon dancers at dawn, lantern nights, a quiet corner shop.',
    ledeZh: '足够近，能看见动作；足够远，让它保持真实——晨练的彩绸、灯会的夜晚、街角的小店。',
    frames: [20, 19, 41, 80, 10, 9, 57, 71, 82, 104, 108, 15],
  },
  {
    id: 'wild',
    en: 'Living Things', zh: '生灵',
    region: 'Wildlife & night forests', year: '2023—', tags: ['Wildlife', 'Fireflies', 'Birds'],
    cover: 16,
    lede: 'Fireflies drifting through a summer forest, gulls over grey water, and the patient faces of animals that did not ask to be photographed.',
    ledeZh: '夏夜森林里的萤火、灰色水面上的鸥群，以及那些安静看着镜头的动物。',
    frames: [16, 72, 121, 12, 84, 51, 56, 32, 58, 100],
  },
];

export const seriesById = (id) => series.find((s) => s.id === id);
export const seriesOf = (n) => series.find((s) => s.frames.includes(n));

/* Photos that anchor the 3D hero — strong, varied, readable at small size. */
export const heroFrames = [102, 95, 20, 25, 86, 39, 47, 21, 55, 8, 65, 34, 16, 125, 77, 91, 13, 124, 44, 88, 56, 70, 1, 122, 96, 63];

const PAN = [
  'https://pan.baidu.com/s/1fnFnoaW2alaQI63GItltfA?pwd=kstr',
  'https://pan.baidu.com/s/1775m0DJv7OFWcWVAMIeXZw?pwd=pwf4',
  'https://pan.baidu.com/s/1XXkvom-n1fwFqzEBoM4FJA?pwd=rs6p',
  'https://pan.baidu.com/s/1IiiMzlhrWWz0hEg7ZYSeag?pwd=qdzm',
  'https://pan.baidu.com/s/120DBmMflVaZCZHr6xdob6A?pwd=te1v',
  'https://pan.baidu.com/s/1rHAFtN0DR6w_wzR7ujd7Aw?pwd=rpr1',
  'https://pan.baidu.com/s/1_XIhdbo_7mT_Tn1f6XMD6Q?pwd=yei2',
  'https://pan.baidu.com/s/1yGv2M1PoIASG2z58Cg55VQ?pwd=qgqb',
];
export const raws = [1, 2, 3, 4, 5, 6, 7, 8].map((i) => ({
  id: i,
  before: `media/raw/${i}_before.webp`,
  after: `media/raw/${i}_after.webp`,
  pan: PAN[i - 1] || null,
}));

export const CONTACT = {
  email: '2193177455@qq.com',
  links: [
    { label: 'Xiaohongshu 小红书', short: '小红书', href: 'https://www.xiaohongshu.com/user/profile/631b5c64000000002303dc06' },
    { label: 'Douyin 抖音', short: 'Douyin', href: 'https://v.douyin.com/pIs2kYdlksE/' },
    { label: '500px', short: '500px', href: 'https://500px.com/p/xingyujieeeeee' },
  ],
};
