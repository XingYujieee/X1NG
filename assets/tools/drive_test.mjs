// Headless checks for the drive physics: node assets/tools/drive_test.mjs
import R from '../vendor/rapier/rapier.mjs';
import { buildGrid, heightAt, START } from '../js/drive/terrain.js';
import { createPhysics } from '../js/drive/physics.js';
await R.init();
const grid = buildGrid();
const P = createPhysics(R, grid);
const { car } = P;
const deg = (r) => (r * 180 / Math.PI).toFixed(1);
function pitch() { const f = car.forward(); return Math.asin(f[1]); }
function roll() { const u = car.up(); const f = car.forward(); const s = [f[1]*u[2]-f[2]*u[1], f[2]*u[0]-f[0]*u[2], f[0]*u[1]-f[1]*u[0]]; return Math.asin(s[1]); }
car.place(START.x, grid.sample(START.x, START.z) + 1.2, START.z, Math.PI / 2);   // facing -z (north)
const run = (label, input, secs) => {
  let maxPitch = 0, maxRoll = 0;
  for (let t = 0; t < secs; t += 1 / 60) { car.drive(input, 1 / 60); P.step(1 / 60); maxPitch = Math.max(maxPitch, Math.abs(pitch())); maxRoll = Math.max(maxRoll, Math.abs(roll())); }
  const p = car.body.translation();
  const ws = car.wheels().map((w) => (w.contact ? 1 : 0)).join('');
  console.log(label.padEnd(12), 'pos', p.x.toFixed(1), p.y.toFixed(2), p.z.toFixed(1), 'speed', car.speed().toFixed(2), 'yaw', deg(car.yaw()), 'maxPitch', deg(maxPitch), 'maxRoll', deg(maxRoll), 'wheels', ws, 'ground', grid.sample(p.x, p.z).toFixed(2));
};
const I = (o) => ({ gas: 0, brake: 0, left: 0, right: 0, hand: 0, ...o });
run('settle', I({}), 1.5);
// heightfield orientation: ray down at a few points vs the grid
for (const [x, z] of [[-84, -12], [-30, 4], [0, 62], [60, -20], [-70, 10]]) {
  const hit = P.world.castRay(new R.Ray({ x, y: 50, z }, { x: 0, y: -1, z: 0 }), 100, true);
  console.log('ray', x, z, 'phys', hit ? (50 - hit.timeOfImpact).toFixed(2) : 'miss', 'grid', grid.sample(x, z).toFixed(2));
}

run('gas 3s', I({ gas: 1 }), 3);
run('brake', I({ brake: 1 }), 1.5);
run('reverse 2s', I({ brake: 1 }), 2);
run('stop', I({ gas: 1 }), 1);
run('coast', I({}), 1.5);
run('gas+left', I({ gas: 1, left: 1 }), 2.5);
run('gas+right', I({ gas: 1, right: 1 }), 2.5);
run('hand drift', I({ gas: 1, left: 1, hand: 1 }), 1.5);
run('coast', I({}), 2);
