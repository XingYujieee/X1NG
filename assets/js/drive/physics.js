/* ==========================================================================
   Drive — physics on Rapier (the same engine bruno-simon.com uses).
   Terrain heightfield, static colliders tagged by material, dynamic props,
   and a raycast vehicle tuned to feel planted:
   · centre of mass under the floor (no wheelies), anti-roll bars per axle
   · grip that drops in the wet and snow, a handbrake that lets the rear go
   · boost (Shift) and a hop (Space), braking when you push against the motion
   · water drag and buoyancy, self-righting when it ends up on its back
   It runs on a fixed 60 Hz step; the renderer interpolates between steps.
   Runs in the browser and in Node (assets/tools/drive_test.mjs).
   ========================================================================== */
import { NX, NZ, SIZE_X, SIZE_Z, X0, Z0, WATER_Y } from './terrain.js';

export const CAR = {
  half: { x: 1.05, y: 0.34, z: 0.66 },        // main body box (forward = +x)
  wheel: { x: 0.78, y: -0.08, z: 0.7, r: 0.42, rest: 0.34 },
  mass: 1,
  com: { x: 0, y: -0.8, z: 0 },
  engine: 7.5, boost: 12.5, reverse: 4.6, brake: 0.55, idleBrake: 0.03, handbrake: 1.1,
  top: 14, topBoost: 21, topReverse: 6,
  steer: 0.55, steerFast: 0.22, jump: 6.4,
};
const STEP = 1 / 60;
const clamp = (x, a, b) => Math.min(b, Math.max(a, x));
const smooth = (a, b, x) => { const t = clamp((x - a) / (b - a), 0, 1); return t * t * (3 - 2 * t); };

export function createPhysics(R, grid) {
  const world = new R.World({ x: 0, y: -18, z: 0 });   // heavier gravity reads better at this scale
  world.timestep = STEP;
  const events = new R.EventQueue(true);
  const kinds = new Map();                             // collider handle → material ('stone', 'wood', 'tree', 'hay', …)

  /* terrain: Rapier heightfields are centred, rows along z, columns along x, column-major */
  const heights = new Float32Array((NX + 1) * (NZ + 1));
  for (let i = 0; i <= NX; i++) for (let j = 0; j <= NZ; j++) heights[i * (NZ + 1) + j] = grid.at(i, j);
  const ground = world.createRigidBody(R.RigidBodyDesc.fixed().setTranslation(X0 + SIZE_X / 2, 0, Z0 + SIZE_Z / 2));
  const groundCol = world.createCollider(R.ColliderDesc.heightfield(NZ, NX, heights, { x: SIZE_X, y: 1, z: SIZE_Z }).setFriction(0.9), ground);
  kinds.set(groundCol.handle, 'ground');

  const fixed = world.createRigidBody(R.RigidBodyDesc.fixed());
  const quatY = (a) => ({ x: 0, y: Math.sin(a / 2), z: 0, w: Math.cos(a / 2) });
  const tag = (c, kind) => { if (c) kinds.set(c.handle, kind); return c; };
  const statics = {
    box(x, y, z, hx, hy, hz, ry = 0, kind = 'stone') { return tag(world.createCollider(R.ColliderDesc.cuboid(hx, hy, hz).setTranslation(x, y, z).setRotation(quatY(ry)).setFriction(0.5), fixed), kind); },
    cyl(x, y, z, hh, r, kind = 'stone') { return tag(world.createCollider(R.ColliderDesc.cylinder(hh, r).setTranslation(x, y, z).setFriction(0.5), fixed), kind); },
    hull(points, x, y, z, ry = 0, kind = 'stone') { const d = R.ColliderDesc.convexHull(new Float32Array(points)); return d && tag(world.createCollider(d.setTranslation(x, y, z).setRotation(quatY(ry)).setFriction(0.5), fixed), kind); },
  };

  /* dynamic props */
  const dynamics = [];
  function dynamic(shape, { x, y, z, ry = 0, mass = 1, friction = 0.6, restitution = 0.15, kind = 'wood', linDamp = 0.1, angDamp = 0.3 }) {
    const body = world.createRigidBody(R.RigidBodyDesc.dynamic().setTranslation(x, y, z).setRotation(quatY(ry)).setCanSleep(true).setLinearDamping(linDamp).setAngularDamping(angDamp));
    let d;
    if (shape.type === 'box') d = R.ColliderDesc.cuboid(shape.hx, shape.hy, shape.hz);
    else if (shape.type === 'roundcyl') d = R.ColliderDesc.roundCylinder(shape.hh, shape.r, shape.b ?? 0.05);
    else if (shape.type === 'cone') d = R.ColliderDesc.cone(shape.hh, shape.r);
    else if (shape.type === 'cyl') d = R.ColliderDesc.cylinder(shape.hh, shape.r);
    else d = R.ColliderDesc.ball(shape.r);
    if (shape.rot) d.setRotation(shape.rot);
    d.setMass(mass).setFriction(friction).setRestitution(restitution);
    tag(world.createCollider(d, body), kind);
    body.sleep();
    dynamics.push(body);
    return body;
  }

  /* ---------- the car ---------- */
  const chassis = world.createRigidBody(R.RigidBodyDesc.dynamic().setTranslation(0, 3, 0).setCanSleep(false).setCcdEnabled(true).setAngularDamping(0.6).setLinearDamping(0.08));
  const H = CAR.half;
  const bodyCol = world.createCollider(R.ColliderDesc.cuboid(H.x, H.y, H.z).setMassProperties(CAR.mass, CAR.com, { x: 0.3, y: 0.45, z: 0.32 }, { x: 0, y: 0, z: 0, w: 1 })
    .setFriction(0.3).setRestitution(0.1).setActiveEvents(R.ActiveEvents.COLLISION_EVENTS), chassis);
  const cabinCol = world.createCollider(R.ColliderDesc.cuboid(0.62, 0.26, 0.6).setTranslation(-0.12, 0.58, 0).setMass(0).setFriction(0.3).setActiveEvents(R.ActiveEvents.COLLISION_EVENTS), chassis);
  const carHandles = new Set([bodyCol.handle, cabinCol.handle]);
  const vehicle = world.createVehicleController(chassis);
  const W = CAR.wheel;
  const WHEELS = [[W.x, W.y, W.z], [W.x, W.y, -W.z], [-W.x, W.y, W.z], [-W.x, W.y, -W.z]];
  WHEELS.forEach(([x, y, z], i) => {
    vehicle.addWheel({ x, y, z }, { x: 0, y: -1, z: 0 }, { x: 0, y: 0, z: 1 }, W.rest, W.r);
    vehicle.setWheelSuspensionStiffness(i, 34);
    vehicle.setWheelSuspensionCompression(i, 3.4);
    vehicle.setWheelSuspensionRelaxation(i, 2.8);
    vehicle.setWheelMaxSuspensionTravel(i, 0.32);
    vehicle.setWheelMaxSuspensionForce(i, 200);
    vehicle.setWheelFrictionSlip(i, 1.5);
    vehicle.setWheelSideFrictionStiffness(i, 1.6);
  });

  const qRot = (q, v) => {
    const { x, y, z, w } = q, [vx, vy, vz] = v;
    const ix = w * vx + y * vz - z * vy, iy = w * vy + z * vx - x * vz, iz = w * vz + x * vy - y * vx, iw = -x * vx - y * vy - z * vz;
    return [ix * w + iw * -x + iy * -z - iz * -y, iy * w + iw * -y + iz * -x - ix * -z, iz * w + iw * -z + ix * -y - iy * -x];
  };
  const hardPoint = (i) => { const p = chassis.translation(), [x, y, z] = qRot(chassis.rotation(), WHEELS[i]); return { x: p.x + x, y: p.y + y, z: p.z + z }; };

  /* interpolation snapshots */
  const snap = () => ({ p: { x: 0, y: 0, z: 0 }, q: { x: 0, y: 0, z: 0, w: 1 }, travel: [W.rest, W.rest, W.rest, W.rest], steer: [0, 0, 0, 0], spin: [0, 0, 0, 0] });
  let prev = snap(), curr = snap();
  const capture = (s) => {
    const p = chassis.translation(), q = chassis.rotation();
    s.p.x = p.x; s.p.y = p.y; s.p.z = p.z; s.q.x = q.x; s.q.y = q.y; s.q.z = q.z; s.q.w = q.w;
    for (let i = 0; i < 4; i++) { s.travel[i] = vehicle.wheelSuspensionLength(i) ?? W.rest; s.steer[i] = vehicle.wheelSteering(i) ?? 0; s.spin[i] = vehicle.wheelRotation(i) ?? 0; }
  };

  const car = {
    body: chassis, vehicle, handles: carHandles, steer: 0, upsideT: 0, waterDepth: 0, contacts: 0, rescued: false,
    forward() { return qRot(chassis.rotation(), [1, 0, 0]); },
    up() { return qRot(chassis.rotation(), [0, 1, 0]); },
    speed() { const v = chassis.linvel(), f = car.forward(); return v.x * f[0] + v.y * f[1] + v.z * f[2]; },
    yaw() { const f = car.forward(); return Math.atan2(-f[2], f[0]); },
    place(x, y, z, yaw) {
      chassis.setTranslation({ x, y, z }, true);
      chassis.setRotation(quatY(yaw), true);
      chassis.setLinvel({ x: 0, y: 0, z: 0 }, true); chassis.setAngvel({ x: 0, y: 0, z: 0 }, true);
      car.steer = 0; capture(prev); capture(curr);
    },
    /* one fixed step of control. input: { gas, brake, left, right, hand, boost, jump }, env: { wet, snow } */
    control(input, env = {}) {
      const fs = car.speed(), sp = Math.abs(fs);
      const top = input.boost ? CAR.topBoost : CAR.top;
      const against = (input.gas && fs < -0.8) || (input.brake && fs > 0.8);   // pushing against the motion = brake
      let engine = 0, brake = input.gas || input.brake ? 0 : CAR.idleBrake;
      if (input.gas && !against) engine = (input.boost ? CAR.boost : CAR.engine) * clamp((top - fs) / 3, 0, 1);
      if (input.brake && !against) engine = -CAR.reverse * clamp((CAR.topReverse + fs) / 2, 0, 1);
      if (against) brake = CAR.brake;
      const grip = 1 - Math.max((env.wet || 0) * 0.25, (env.snow || 0) * 0.3);
      const steerMax = CAR.steer + (CAR.steerFast - CAR.steer) * smooth(3.5, 20, sp);
      car.steer += ((input.left - input.right) * steerMax - car.steer) * Math.min(1, STEP * 12);
      const side = (1.7 - 0.35 * smooth(6, 22, sp)) * grip;
      for (let i = 0; i < 4; i++) {
        const rear = i >= 2;
        vehicle.setWheelEngineForce(i, engine * (rear ? 0.55 : 0.45));
        vehicle.setWheelBrake(i, input.hand && rear ? CAR.handbrake : brake);
        vehicle.setWheelSteering(i, rear ? 0 : car.steer);
        vehicle.setWheelFrictionSlip(i, 1.5 * grip);
        vehicle.setWheelSideFrictionStiffness(i, input.hand && rear ? 0.45 : side);
      }
      let n = 0; for (let i = 0; i < 4; i++) if (vehicle.wheelIsInContact(i)) n++;
      car.contacts = n;
      if (input.jump && n >= 2 && chassis.linvel().y < 1.5) chassis.applyImpulse({ x: 0, y: CAR.mass * CAR.jump, z: 0 }, true);
      chassis.setAngularDamping(0.6 + n * 0.35);
      // anti-roll bars: push each axle's two sides towards the same suspension length
      const up = car.up();
      if (up[1] > 0.3) for (const a of [0, 2]) {
        const b = a + 1;
        if (!vehicle.wheelIsInContact(a) || !vehicle.wheelIsInContact(b)) continue;
        const la = vehicle.wheelSuspensionLength(a), lb = vehicle.wheelSuspensionLength(b);
        if (la == null || lb == null) continue;
        const k = clamp((lb - la) * 0.9, -0.08, 0.08);
        chassis.applyImpulseAtPoint({ x: up[0] * k, y: up[1] * k, z: up[2] * k }, hardPoint(a), true);
        chassis.applyImpulseAtPoint({ x: -up[0] * k, y: -up[1] * k, z: -up[2] * k }, hardPoint(b), true);
      }
      // water: drag and a little buoyancy
      const p = chassis.translation(), v = chassis.linvel();
      car.waterDepth = clamp(WATER_Y - (p.y - 0.55), 0, 1.6);
      if (car.waterDepth > 0.03) {
        const d = car.waterDepth, k = Math.min(0.22, STEP * d * (0.9 + Math.hypot(v.x, v.z) * 0.25));
        chassis.applyImpulse({ x: -v.x * CAR.mass * k, y: CAR.mass * STEP * (d * 9 - v.y * 1.4 * d), z: -v.z * CAR.mass * k }, true);
      }
      // keep it upright: a righting torque in the air, a reset after a while on its back
      const tilt = Math.acos(clamp(up[1], -1, 1));
      if (tilt > 0.6 && n < 2) { const k = (tilt - 0.6) * 0.02; chassis.applyTorqueImpulse({ x: up[2] * k, y: 0, z: -up[0] * k }, true); }
      car.upsideT = up[1] < 0.25 ? car.upsideT + STEP : 0;
      if (car.upsideT > 1.6) { car.place(p.x, p.y + 1.6, p.z, car.yaw()); car.upsideT = 0; car.rescued = true; }
    },
    /* interpolated pose for rendering */
    pose(alpha) {
      const a = clamp(alpha, 0, 1);
      return {
        p: { x: prev.p.x + (curr.p.x - prev.p.x) * a, y: prev.p.y + (curr.p.y - prev.p.y) * a, z: prev.p.z + (curr.p.z - prev.p.z) * a },
        q0: prev.q, q1: curr.q, a,
        travel: curr.travel.map((t, i) => prev.travel[i] + (t - prev.travel[i]) * a),
        steer: curr.steer.map((t, i) => prev.steer[i] + (t - prev.steer[i]) * a),
        spin: curr.spin.map((t, i) => { const d = t - prev.spin[i]; return prev.spin[i] + Math.atan2(Math.sin(d), Math.cos(d)) * a; }),
      };
    },
    wheels() {
      const out = [];
      for (let i = 0; i < 4; i++) out.push({ contact: vehicle.wheelIsInContact(i), point: vehicle.wheelContactPoint(i) });
      return out;
    },
    WHEELS,
  };

  let acc = 0;
  /* advance the world; onHit(kind, speed, point) for impacts of the car with anything but the ground */
  function step(dt, input, env, onHit) {
    acc += Math.min(dt, 0.1);
    let n = 0;
    while (acc >= STEP && n < 5) {
      const v0 = chassis.linvel();
      car.control(input, env);
      input.jump = 0;
      vehicle.updateVehicle(STEP, R.QueryFilterFlags.EXCLUDE_SENSORS);
      world.step(events);
      [prev, curr] = [curr, prev]; capture(curr);
      events.drainCollisionEvents((h1, h2, started) => {
        if (!started || !onHit) return;
        const other = carHandles.has(h1) ? h2 : carHandles.has(h2) ? h1 : null;
        if (other === null) return;
        const kind = kinds.get(other) || 'stone';
        if (kind === 'ground') return;
        const sp = Math.hypot(v0.x, v0.z);
        if (sp < 1.2) return;
        const c = world.getCollider(other), t = c ? c.translation() : chassis.translation();
        onHit(kind, sp, t);
      });
      acc -= STEP; n++;
    }
    if (n === 5) acc = 0;
    return acc / STEP;
  }
  capture(prev); capture(curr);
  return { R, world, statics, dynamic, dynamics, car, step, quatY, kinds, STEP };
}
