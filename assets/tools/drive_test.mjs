// Headless checks for the drive physics: node assets/tools/drive_test.mjs
import R from '../vendor/rapier/rapier.mjs';
import { buildGrid, START } from '../js/drive/terrain.js';
import '../js/drive/places.js';
import { createPhysics } from '../js/drive/physics.js';
await R.init();
const flat = process.argv.includes('--flat');
const grid = flat ? { at: () => 0, sample: () => 0 } : buildGrid();
const P = createPhysics(R, grid);
const { car } = P;
const deg = (r) => (r * 180 / Math.PI).toFixed(1);
const pitch = () => Math.asin(car.forward()[1]);
const roll = () => { const u = car.up(), f = car.forward(); return Math.asin(f[2] * u[0] - f[0] * u[2]); };
car.place(flat ? 0 : START.x, (flat ? 0 : grid.sample(START.x, START.z)) + 1.2, flat ? 75 : START.z, Math.PI / 2);
let hits = 0;
const run = (label, input, secs) => {
  let mp = 0, mr = 0, my = 0;
  for (let t = 0; t < secs; t += 1 / 60) {
    P.step(1 / 60, { gas: 0, brake: 0, left: 0, right: 0, hand: 0, boost: 0, jump: 0, ...input }, {}, () => hits++);
    input.jump = 0;
    mp = Math.max(mp, Math.abs(pitch())); mr = Math.max(mr, Math.abs(roll())); my = Math.max(my, car.body.translation().y);
  }
  const p = car.body.translation();
  console.log(label.padEnd(11), 'pos', p.x.toFixed(1), p.y.toFixed(2), p.z.toFixed(1), 'v', car.speed().toFixed(1), 'yaw', deg(car.yaw()), 'pitch', deg(mp), 'roll', deg(mr), 'maxY', my.toFixed(2), 'wheels', car.wheels().map((w) => (w.contact ? 1 : 0)).join(''));
};
run('settle', {}, 1);
run('gas 3s', { gas: 1 }, 3);
run('boost 2s', { gas: 1, boost: 1 }, 2);
run('brake', { brake: 1 }, 1.2);
run('reverse', { brake: 1 }, 2);
run('stop', { gas: 1 }, 0.8);
run('left', { gas: 1, left: 1 }, 2);
run('right', { gas: 1, right: 1 }, 2);
run('handbrake', { gas: 1, left: 1, hand: 1 }, 1.5);
run('coast', {}, 1.5);
run('jump', { jump: 1 }, 1.2);
console.log('hits', hits);
