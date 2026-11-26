/* ==========================================================================
   Drive — what stands where. Every place is built from its own landmarks
   (Blender assets), its own trees and its own little things that move.
   Coordinates are world metres; the camera looks north (−z), so landmarks sit
   north of each stop and frame its photographs.
   ry: rotation about the vertical axis. FACE = turn a +X-facing model towards the camera.
   ========================================================================== */
import { PADS } from './terrain.js';

const FACE = -Math.PI / 2;

/* static landmarks: [asset, x, z, ry, scale, yOffset] */
export const LANDMARKS = [
  // Giza — the three pyramids and the Sphinx looking east over the stop
  ['pyramid_big', -90, -30, 0.08, 1], ['pyramid_mid', -77, -37, 0.08, 1], ['pyramid_small', -98, -12, 0.08, 1],
  ['sphinx', -78, -22, 0, 1],
  // Cairo — a domed mosque and the town around it
  ['mosque', -56, -46, FACE, 1], ['cairo_house0', -46, -40, FACE, 1], ['cairo_house1', -48, -50, FACE, 1], ['cairo_house2', -50, -24, FACE, 1],
  ['cairo_house0', -64, -50, FACE, 0.9], ['cairo_house2', -44, -28, 0, 0.9],
  // Luxor — pylon, colonnade, obelisk, and the avenue of rams leading to the stop
  ['luxor_pylon', -54, 10, FACE, 1], ['luxor_colonnade', -54, -1, FACE, 1], ['obelisk', -49.5, 14.5, 0, 1],
  ['ram', -57.5, 16.5, 0, 1], ['ram', -57.5, 19, 0, 1], ['ram', -57.5, 21.5, 0, 1],
  ['ram', -50.5, 16.5, Math.PI, 1], ['ram', -50.5, 19, Math.PI, 1], ['ram', -50.5, 21.5, Math.PI, 1],
  // Gansu — the crescent spring pavilion and wind-carved yardangs
  ['pavilion', -6, -59.5, 0, 1, 0.45], ['yardang', -40, -44, 0.5, 1.2], ['yardang', -45, -55, 0.35, 1], ['yardang', -36, -60, 0.6, 0.85],
  ['yardang', -49, -39, 0.55, 0.8], ['yardang', -15, -43, 0.3, 0.7], ['yardang', -33, -38, 0.45, 0.6],
  // Yunnan — the white stupa, the golden temple, Naxi houses
  ['stupa', -9, 17, 0, 1.25], ['temple', 13, 18, FACE, 1], ['naxi_house', -19, 24, FACE, 1], ['naxi_house', -18, 36, FACE + 0.3, 1], ['naxi_house', -22, 30, FACE - 0.2, 0.9],
  // Beijing — the gate tower, the corner tower, the Egg, hutong houses
  ['beijing_gate', 26, -55, 0, 1], ['corner_tower', 6, -48, 0, 1], ['egg', 46, -47, 0, 0.9, -0.55],
  ['hutong', 11, -30, 0, 1], ['hutong', 11, -24, 0, 1], ['hutong', 40, -31, Math.PI, 1],
  // Nanjing — the city wall and its gate, Zifeng Tower
  ['nanjing_gate', 50, -14, 0, 1], ['city_wall', 35.5, -14, 0, 1], ['city_wall', 64.5, -14, 0, 1], ['zifeng', 67, 4, 0, 1],
  // Shanghai — Lujiazui across the river, the Bund on this side
  ['pearl_tower', 80, -6, 0, 1.25], ['shanghai_tower', 92, -9, 0.3, 1.35], ['jinmao', 96, -2, 0.2, 1.3], ['swfc', 87, -16, 0.4, 1.32],
  ['tower0', 71, -8, 0.1, 1], ['tower1', 80, -16, 0.2, 1], ['tower2', 68, -14, 0, 1],
  ['bund_customs', 80, 16, FACE, 1], ['bund_bank', 73, 16.5, FACE, 1], ['bund_bank', 87, 16.5, FACE, 1], ['bund_customs', 93, 16.5, FACE, 0.9],
  // the road — a red barn
  ['barn', 26, 55, FACE, 1],
];

/* flat ground under them [x, z, radius, height] */
PADS.push(
  [-90, -30, 10, 0.3], [-77, -37, 8, 0.3], [-98, -12, 5.5, 0.3], [-78, -22, 4, 0.2],
  [-56, -46, 6, 0.2], [-54, 6, 9, 0.15], [-6, -59.5, 4, 0.45], [-9, 17, 3.5, 0.2], [13, 18, 5, 0.2],
  [26, -55, 10, 0.12], [6, -48, 5, 0.12], [46, -47, 9, -1.1], [11, -27, 5, 0.12],
  [50, -14, 22, 0.12], [67, 4, 3, 0.12], [82, -8, 16, 0.15], [83, 16, 14, 0.15], [26, 55, 4, 0.12],
);

/* decorative copies (no collision): [asset, x, z, ry, scale, y] */
export const DECOR = [
  // lanterns under the gate's eaves
  ...[-6, -3, 0, 3, 6].map((dx) => ['lantern', 26 + dx, -52.2, 0, 1, 7.1]),
  ...[-4.5, -1.5, 1.5, 4.5].map((dx) => ['lantern', 26 + dx, -52.1, 0, 0.9, 3.3]),
  // Bund promenade lamps
  ...[70, 75, 80, 85, 90, 95].map((x) => ['lamp_bund', x, 12.6, 0, 1, 0]),
  // Nanjing street lamps under the plane trees
  ...[34, 40, 46].map((x) => ['lamp_modern', x, 4.6, Math.PI / 2, 1, 0]),
];

/* things that wander or float: [asset, x, z, ry, scale, y] */
export const ANIMALS = [
  ['camel', -74, -8, 2.2, 1], ['camel', -72, -10, 1.6, 1], ['camel', -12, -54, 0.4, 1],
  ['yak', 8, 42, 0.5, 1], ['yak', 11, 45, 2.4, 1], ['yak', 4, 46, 1.2, 0.9], ['yak', -12, 44, 3.0, 1],
];
export const BALLOONS = [[-46, 8, 11], [-40, 16, 14], [-62, 6, 9], [-44, 28, 12.5], [-36, 4, 16], [-58, -2, 13]];
export const BOATS = [
  { asset: 'felucca', axis: 'nile', z0: -50, z1: 50, speed: 1.4, phase: 0 },
  { asset: 'felucca', axis: 'nile', z0: -50, z1: 50, speed: 1.1, phase: 0.55 },
  { asset: 'ferry', axis: 'huangpu', x0: 70, x1: 104, speed: 2.2, phase: 0.2 },
];

/* prayer flags: strings from a top point to another [[x,y,z],[x,y,z]] (y above ground) */
export const FLAGS = [
  [[-9, 4.6, 17], [-15, 4.6, 12]], [[-9, 4.6, 17], [-2, 4.6, 11]], [[-9, 4.6, 17], [-15, 4.6, 22]], [[-9, 4.6, 17], [-3, 4.6, 23]],
];
export const FLAGPOLES = [[-15, 12], [-2, 11], [-15, 22], [-3, 23]];

/* knock-over-able props: [kind, x, z, ry] */
export function dynamicProps() {
  const out = [];
  // the hay-bale canyon on the road (the hero photograph, built so you can drive into it)
  for (const zw of [40.5, 47.5]) {
    for (let k = 0; k < 11; k++) out.push(['haybale', 48 + k * 1.28, zw, 0, 0]);
    for (let k = 0; k < 10; k++) out.push(['haybale', 48.64 + k * 1.28, zw, 0, 1]);
  }
  for (const [x, z, r] of [[30, 38, 0.3], [33, 36, 1.2], [44, 54, 0.8], [47, 56, 2.0], [32, 48, 0.1]]) out.push(['haybale_sq', x, z, r, 0]);
  // cones and crates on the way out of the start
  for (const [x, z] of [[14, 6], [15.2, 7.4], [16.4, 8.8], [12, 12], [13, 13.2]]) out.push(['cone', x, z, 0, 0]);
  for (const [x, z] of [[2, 8], [2.9, 8.2], [2.45, 8.1]]) out.push(['crate', x, z, 0.3, 0]);
  out.push(['crate', 2.45, 8.1, 0.6, 1]);
  return out;
}

/* each stop's look: platform material colour, accent, a line for the sign */
export const STOP_STYLE = {
  giza:     { plat: '#d9bd8a', accent: '#c8902f', line: 'Old Kingdom · c. 2560 BC' },
  cairo:    { plat: '#d8c7a6', accent: '#2f8f9d', line: 'City of a thousand minarets' },
  luxor:    { plat: '#d6b077', accent: '#c8902f', line: 'Thebes · balloons at dawn' },
  qinggan:  { plat: '#c98a64', accent: '#b4482c', line: 'Dunhuang · Zhangye · Qinghai Lake' },
  yunnan:   { plat: '#eeeae0', accent: '#b8862e', line: 'Lijiang · Shangri-La · Meili' },
  beijing:  { plat: '#e7e2d6', accent: '#a9322a', line: 'The old city' },
  nanjing:  { plat: '#a8aaa5', accent: '#53704a', line: 'Plane trees · Zijin Mountain' },
  shanghai: { plat: '#c9c6bf', accent: '#c43f78', line: 'The Bund · Lujiazui' },
  road:     { plat: '#cbb07a', accent: '#d9b45c', line: 'Everywhere in between' },
};
