/* Inlined copy of media/film/timeline.json (so the page also works from disk).
   Regenerate both with motion-source/corridor-film (render.py → compile step). */
export const timeline = {
  schemaVersion: 1,
  fps: 60,
  duration: 42,          // seconds, closed loop: 10 photos × 4.2 s
  hold: 0,               // no hard stops: the camera slows on each photo (t = k × 4.2 s) and speeds up between
  sources: {
    desktop: { mp4: 'media/film/corridor-1080p.mp4' },
    mobile: { mp4: 'media/film/corridor-portrait.mp4' },
  },
  posters: { desktop: 'media/film/poster.webp', mobile: 'media/film/poster-portrait.webp' },
};

export const stops = [
  { n: 24,  place: 'Meili, Yunnan',        title: 'Meili Peaks',            titleZh: '梅里群峰',   line: 'Start small. Let the mountain do the talking.', zh: '先让自己变小，让山说话。' },
  { n: 42,  place: 'Meili, Yunnan',        title: 'Framed Summit',          titleZh: '岩隙中的雪山', line: 'A gap in the rock, a window onto Meili.', zh: '岩石的缝隙，是看梅里的窗。' },
  { n: 60,  place: 'Qinghai–Gansu',        title: 'Grey Dunes',             titleZh: '灰色沙丘',   line: 'Find the dot. That’s me.', zh: '找到那个小点，那就是我。' },
  { n: 112, place: 'Qinghai–Gansu',        title: 'Standing Tall',          titleZh: '远眺',       line: 'Wind, dust and a very long view.', zh: '风、沙，和很远很远的地平线。' },
  { n: 89,  place: 'From above',           title: 'Green Terraces',         titleZh: '绿色纹理',   line: 'From above, a person is a punctuation mark.', zh: '从高处看，人只是一个标点。' },
  { n: 88,  place: 'Qinghai–Gansu',        title: 'Heliostats',             titleZh: '定日镜阵',   line: 'Walking through a field of mirrors.', zh: '走进一片镜子的田野。' },
  { n: 61,  place: 'On the road',          title: 'Hay Bale Canyon',        titleZh: '草垛峡谷',   line: 'Holding the sun for a second.', zh: '把太阳握在手里一秒钟。' },
  { n: 66,  place: 'Qinghai–Gansu',        title: 'Red on the Ridge',       titleZh: '山脊上的红', line: 'Last light on the yardang.', zh: '雅丹上的最后一束光。' },
  { n: 63,  place: 'Qinghai–Gansu',        title: 'Light Bearer',           titleZh: '持光者',     line: 'Night on the salt flat.', zh: '盐湖的夜。' },
  { n: 65,  place: 'Qinghai–Gansu',        title: 'Star Trails over Yardang', titleZh: '雅丹星轨', line: 'Staying until the sky turns — then back to the mountains.', zh: '一直待到星空转起来，再回到雪山。' },
];
