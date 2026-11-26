/* ==========================================================================
   Drive — the island's shape (pure maths, shared by the renderer, the physics
   and the Node tests in assets/tools/drive_test.mjs).

   Laid out roughly like a map of where the photographs were taken:
   Egypt in the far west (Giza, Cairo, Luxor along the Nile), Gansu's dunes and
   yardangs in the north-west, a snowy range, Yunnan's meadows in the south,
   Beijing in the north-east, Nanjing in the east, Shanghai on the east coast,
   and the hay-bale fields of "on the road" in the south-east.
   ========================================================================== */
export const WATER_Y = -0.45;
export const SIZE_X = 240, SIZE_Z = 160, ES = 1;
export const NX = SIZE_X / ES, NZ = SIZE_Z / ES, X0 = -SIZE_X / 2, Z0 = -SIZE_Z / 2;

export const PLACES = {
  giza:     { x: -84, z: -12, biome: 'desert', lat: '29.98°N', lon: '31.13°E' },
  cairo:    { x: -58, z: -32, biome: 'desert', lat: '30.03°N', lon: '31.26°E' },
  luxor:    { x: -54, z: 26,  biome: 'desert', lat: '25.69°N', lon: '32.64°E' },
  qinggan:  { x: -26, z: -50, biome: 'danxia', lat: '40.09°N', lon: '94.67°E' },
  yunnan:   { x: -4,  z: 30,  biome: 'meadow', lat: '27.83°N', lon: '99.71°E' },
  beijing:  { x: 26,  z: -38, biome: 'autumn', lat: '39.92°N', lon: '116.39°E' },
  nanjing:  { x: 50,  z: 0,   biome: 'plane',  lat: '32.06°N', lon: '118.80°E' },
  shanghai: { x: 84,  z: 26,  biome: 'coast',  lat: '31.24°N', lon: '121.50°E' },
  road:     { x: 38,  z: 44,  biome: 'field',  lat: '—',       lon: '—' },
};
export const START = { x: 8, z: 4 };
export const NILE_X = (z) => -70 - Math.sin(z * 0.06) * 4;
export const HUANGPU = (x) => 6 + Math.sin(x * 0.08) * 3;   // the river's z near Shanghai (x > 70)

/* the snowy range between the desert and Yunnan, and the Meili-like peaks behind the meadows */
export const PEAKS = [
  [-30, 4, 13, 9], [-22, -6, 11, 8], [-36, 16, 12, 9], [-16, -16, 9, 7], [-40, 30, 10, 8],
  [-18, 54, 13, 9], [0, 62, 15, 10], [16, 58, 11, 8], [-64, -58, 8, 9], [62, -62, 9, 10], [60, -32, 6, 8],
];

export const smooth = (a, b, x) => { const t = Math.min(1, Math.max(0, (x - a) / (b - a))); return t * t * (3 - 2 * t); };
function hash(x, y) { const s = Math.sin(x * 127.1 + y * 311.7) * 43758.5453; return s - Math.floor(s); }
export function vnoise(x, y) {
  const xi = Math.floor(x), yi = Math.floor(y), xf = x - xi, yf = y - yi;
  const u = xf * xf * (3 - 2 * xf), v = yf * yf * (3 - 2 * yf);
  const a = hash(xi, yi), b = hash(xi + 1, yi), c = hash(xi, yi + 1), d = hash(xi + 1, yi + 1);
  return a + (b - a) * u + (c - a) * v + (a - b - c + d) * u * v;
}
export const fbm = (x, y) => vnoise(x, y) * 0.55 + vnoise(x * 2.1, y * 2.1) * 0.3 + vnoise(x * 4.3, y * 4.3) * 0.15;

export function biomeAt(x, z) {
  const w = {}; let sum = 0;
  for (const k in PLACES) {
    const p = PLACES[k], d2 = (x - p.x) ** 2 + (z - p.z) ** 2, v = Math.exp(-d2 / (26 * 26));
    w[p.biome] = (w[p.biome] || 0) + v; sum += v;
  }
  for (const k in w) w[k] /= sum || 1;
  return w;
}
export function nearestPlace(x, z) {
  let best = null, bd = Infinity;
  for (const k in PLACES) { const p = PLACES[k], d = Math.hypot(x - p.x, z - p.z); if (d < bd) { bd = d; best = k; } }
  return { key: best, d: bd };
}
export const islandD = (x, z) => Math.pow(Math.pow(Math.abs(x) / 112, 4) + Math.pow(Math.abs(z) / 72, 4), 0.25);

/* dirt roads between the stops (polylines) — they keep trees and grass away and are painted into the ground */
export const PATHS = [
  [[8, 4], [4, 16], [-4, 30]],                                        // start → Yunnan
  [[-4, 30], [-18, 42], [-30, 46], [-44, 38], [-54, 26]],              // Yunnan → south pass → Luxor
  [[-54, 26], [-62, 18], [-72, 8], [-80, -2], [-84, -12]],             // Luxor → across the Nile → Giza
  [[-84, -12], [-74, -24], [-58, -32]],                               // Giza → Cairo (ford the Nile)
  [[-58, -32], [-44, -42], [-26, -50]],                               // Cairo → Gansu
  [[-26, -50], [-12, -36], [-6, -24], [2, -8], [8, 4]],               // Gansu → north pass → start
  [[8, 4], [18, -14], [26, -38]],                                     // start → Beijing
  [[8, 4], [28, 2], [50, 0]],                                         // start → Nanjing
  [[26, -38], [40, -26], [50, -18], [50, 0]],                         // Beijing → Nanjing, through the city gate
  [[50, 0], [64, 18], [84, 26]],                                      // Nanjing → Shanghai
  [[50, 0], [46, 22], [38, 44]],                                      // Nanjing → the road
  [[38, 44], [16, 40], [-4, 30]],                                     // the road → Yunnan
];
function segD(px, pz, ax, az, bx, bz) {
  const dx = bx - ax, dz = bz - az, t = Math.max(0, Math.min(1, ((px - ax) * dx + (pz - az) * dz) / (dx * dx + dz * dz)));
  return Math.hypot(px - ax - dx * t, pz - az - dz * t);
}
export function pathD(x, z) {
  let d = Infinity;
  for (const line of PATHS) for (let i = 0; i < line.length - 1; i++) d = Math.min(d, segD(x, z, line[i][0], line[i][1], line[i + 1][0], line[i + 1][1]));
  return d;
}

/* flat pads under landmarks (x, z, radius, height) — filled in by places.js before the grid is built */
export const PADS = [];

export function heightAt(x, z) {
  let h = 0.15 + (fbm(x * 0.05, z * 0.05) - 0.5) * 0.7;
  const w = biomeAt(x, z);
  const dune = 0.5 + 0.5 * Math.sin(x * 0.18 + Math.sin(z * 0.11) * 2);
  h += ((w.desert || 0) * 0.9 + (w.danxia || 0) * 1.2) * (dune * dune * 1.1 + fbm(x * 0.09, z * 0.09) * 0.9);
  for (const [px, pz, ph, pr] of PEAKS) {
    const d2 = (x - px) ** 2 + (z - pz) ** 2;
    h += ph * Math.exp(-d2 / (pr * pr)) * (0.85 + 0.3 * fbm(x * 0.2, z * 0.2));
  }
  // the Nile, Yunnan's lake (Napa), Gansu's crescent spring, the Huangpu
  const nile = Math.abs(x - NILE_X(z));
  h -= 1.3 * (1 - smooth(2.4, 4.8, nile)) * (1 - smooth(60, 70, Math.abs(z)));
  h -= 1.4 * (1 - smooth(5, 11, Math.hypot(x - 14, z - 38)));
  h -= 1.2 * (1 - smooth(2.5, 5, Math.hypot((x + 6) * 0.6, z + 52)));
  if (x > 66) h -= 1.4 * (1 - smooth(2.6, 5, Math.abs(z - HUANGPU(x)))) * smooth(66, 72, x);
  // stops and landmarks sit on flat ground
  for (const k in PLACES) { const p = PLACES[k], d = Math.hypot(x - p.x, z - p.z), f = smooth(6.5, 12, d); h = h * f + 0.12 * (1 - f); }
  for (const [px, pz, r, ph] of PADS) { const d = Math.hypot(x - px, z - pz), f = smooth(r, r + 4, d); h = h * f + ph * (1 - f); }
  const ds = Math.hypot(x - START.x, z - START.z), fs = smooth(7, 13, ds); h = h * fs + 0.12 * (1 - fs);
  h -= 1.75 * smooth(0.86, 1.02, islandD(x, z));
  return h;
}

/* the height grid everything shares: H[j * (NX + 1) + i] at (X0 + i * ES, Z0 + j * ES) */
export function buildGrid() {
  const H = new Float32Array((NX + 1) * (NZ + 1));
  for (let j = 0; j <= NZ; j++) for (let i = 0; i <= NX; i++) H[j * (NX + 1) + i] = heightAt(X0 + i * ES, Z0 + j * ES);
  const at = (i, j) => H[Math.min(NZ, Math.max(0, j)) * (NX + 1) + Math.min(NX, Math.max(0, i))];
  const sample = (x, z) => {
    const fx = (x - X0) / ES, fz = (z - Z0) / ES, i = Math.floor(fx), j = Math.floor(fz), u = fx - i, v = fz - j;
    return at(i, j) * (1 - u) * (1 - v) + at(i + 1, j) * u * (1 - v) + at(i, j + 1) * (1 - u) * v + at(i + 1, j + 1) * u * v;
  };
  // distance to the nearest road, on a coarse grid (cheap lookups for scattering and the ground colours)
  const PD = new Float32Array((NX / 2 + 1) * (NZ / 2 + 1));
  for (let j = 0; j <= NZ / 2; j++) for (let i = 0; i <= NX / 2; i++) PD[j * (NX / 2 + 1) + i] = pathD(X0 + i * 2, Z0 + j * 2);
  const road = (x, z) => { const i = Math.round((x - X0) / 2), j = Math.round((z - Z0) / 2); return PD[Math.min(NZ / 2, Math.max(0, j)) * (NX / 2 + 1) + Math.min(NX / 2, Math.max(0, i))]; };
  const slope = (x, z) => Math.hypot(sample(x + 1, z) - sample(x - 1, z), sample(x, z + 1) - sample(x, z - 1)) / 2;
  return { H, at, sample, slope, road };
}
