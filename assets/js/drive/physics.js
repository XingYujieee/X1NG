/* ==========================================================================
   Drive — physics on Rapier (the same engine bruno-simon.com uses).
   Terrain heightfield, static landmark colliders, dynamic props, and a
   raycast-vehicle with its centre of mass low under the floor, so it neither
   pops wheelies when you accelerate nor rolls in a hard turn.
   Runs in the browser and in Node (assets/tools/drive_test.mjs).
   ========================================================================== */
import { NX, NZ, SIZE_X, SIZE_Z, X0, Z0 } from './terrain.js';

export const CAR = {
  half: { x: 1.05, y: 0.34, z: 0.66 },        // main body box (forward = +x)
  wheel: { x: 0.78, y: -0.08, z: 0.7, r: 0.42, rest: 0.34 },
  mass: 1,
  com: { x: 0, y: -0.8, z: 0 },              // well under the floor: no wheelies, no tipping
  engine: 7.5, reverse: 4.2, brake: 0.55, idleBrake: 0.025, handbrake: 0.9,
  top: 13, topReverse: 6,
  steer: 0.55, steerFast: 0.24,
};

export function createPhysics(R, grid) {
  const world = new R.World({ x: 0, y: -18, z: 0 });   // heavier gravity reads better at this scale (as on bruno-simon.com)
  world.timestep = 1 / 60;

  /* terrain: Rapier heightfields are centred, rows along z, columns along x, column-major */
  const heights = new Float32Array((NX + 1) * (NZ + 1));
  for (let i = 0; i <= NX; i++) for (let j = 0; j <= NZ; j++) heights[i * (NZ + 1) + j] = grid.at(i, j);
  const ground = world.createRigidBody(R.RigidBodyDesc.fixed().setTranslation(X0 + SIZE_X / 2, 0, Z0 + SIZE_Z / 2));
  world.createCollider(R.ColliderDesc.heightfield(NZ, NX, heights, { x: SIZE_X, y: 1, z: SIZE_Z }).setFriction(0.9), ground);

  const fixed = world.createRigidBody(R.RigidBodyDesc.fixed());
  const quatY = (a) => ({ x: 0, y: Math.sin(a / 2), z: 0, w: Math.cos(a / 2) });
  const statics = {
    box(x, y, z, hx, hy, hz, ry = 0) { return world.createCollider(R.ColliderDesc.cuboid(hx, hy, hz).setTranslation(x, y, z).setRotation(quatY(ry)).setFriction(0.5), fixed); },
    cyl(x, y, z, hh, r) { return world.createCollider(R.ColliderDesc.cylinder(hh, r).setTranslation(x, y, z).setFriction(0.5), fixed); },
    ball(x, y, z, r) { return world.createCollider(R.ColliderDesc.ball(r).setTranslation(x, y, z), fixed); },
    hull(points, x, y, z, ry = 0) { const d = R.ColliderDesc.convexHull(new Float32Array(points)); return d && world.createCollider(d.setTranslation(x, y, z).setRotation(quatY(ry)).setFriction(0.5), fixed); },
  };

  /* dynamic props: { body } — positions are read back each frame */
  const dynamics = [];
  function dynamic(shape, { x, y, z, ry = 0, mass = 1, friction = 0.6, restitution = 0.15, ccd = false, sleep = true, linDamp = 0.1, angDamp = 0.3 }) {
    const body = world.createRigidBody(R.RigidBodyDesc.dynamic().setTranslation(x, y, z).setRotation(quatY(ry)).setCanSleep(sleep).setCcdEnabled(ccd).setLinearDamping(linDamp).setAngularDamping(angDamp));
    let d;
    if (shape.type === 'box') d = R.ColliderDesc.cuboid(shape.hx, shape.hy, shape.hz);
    else if (shape.type === 'cyl') d = R.ColliderDesc.cylinder(shape.hh, shape.r);
    else if (shape.type === 'roundcyl') d = R.ColliderDesc.roundCylinder(shape.hh, shape.r, shape.b ?? 0.05);
    else if (shape.type === 'cone') d = R.ColliderDesc.cone(shape.hh, shape.r);
    else d = R.ColliderDesc.ball(shape.r);
    if (shape.rot) d.setRotation(shape.rot);
    d.setMass(mass).setFriction(friction).setRestitution(restitution);
    world.createCollider(d, body);
    body.sleep();
    dynamics.push(body);
    return body;
  }

  /* ---------- the car ---------- */
  const chassis = world.createRigidBody(R.RigidBodyDesc.dynamic().setTranslation(0, 3, 0).setCanSleep(false).setCcdEnabled(true).setAngularDamping(1.2).setLinearDamping(0.05));
  const H = CAR.half;
  world.createCollider(R.ColliderDesc.cuboid(H.x, H.y, H.z).setMassProperties(CAR.mass, CAR.com, { x: 0.3, y: 0.45, z: 0.32 }, { x: 0, y: 0, z: 0, w: 1 }).setFriction(0.3).setRestitution(0.1), chassis);
  world.createCollider(R.ColliderDesc.cuboid(0.62, 0.26, 0.6).setTranslation(-0.12, 0.58, 0).setMass(0).setFriction(0.3), chassis);   // cabin
  const vehicle = world.createVehicleController(chassis);
  const W = CAR.wheel;
  [[W.x, W.y, W.z], [W.x, W.y, -W.z], [-W.x, W.y, W.z], [-W.x, W.y, -W.z]].forEach(([x, y, z], i) => {
    vehicle.addWheel({ x, y, z }, { x: 0, y: -1, z: 0 }, { x: 0, y: 0, z: 1 }, W.rest, W.r);
    vehicle.setWheelSuspensionStiffness(i, 34);
    vehicle.setWheelSuspensionCompression(i, 3.2);
    vehicle.setWheelSuspensionRelaxation(i, 2.6);
    vehicle.setWheelMaxSuspensionTravel(i, 0.32);
    vehicle.setWheelMaxSuspensionForce(i, 200);
    vehicle.setWheelFrictionSlip(i, 1.4);
    vehicle.setWheelSideFrictionStiffness(i, 1.6);
  });

  const v3 = (o) => [o.x, o.y, o.z];
  const qRot = (q, v) => {   // rotate vector v by quaternion q
    const { x, y, z, w } = q, [vx, vy, vz] = v;
    const ix = w * vx + y * vz - z * vy, iy = w * vy + z * vx - x * vz, iz = w * vz + x * vy - y * vx, iw = -x * vx - y * vy - z * vz;
    return [ix * w + iw * -x + iy * -z - iz * -y, iy * w + iw * -y + iz * -x - ix * -z, iz * w + iw * -z + ix * -y - iy * -x];
  };
  const car = {
    body: chassis, vehicle, steer: 0, upsideT: 0,
    forward() { return qRot(chassis.rotation(), [1, 0, 0]); },
    up() { return qRot(chassis.rotation(), [0, 1, 0]); },
    speed() { const v = chassis.linvel(), f = car.forward(); return v.x * f[0] + v.y * f[1] + v.z * f[2]; },
    place(x, y, z, yaw) {
      chassis.setTranslation({ x, y, z }, true);
      chassis.setRotation(quatY(yaw), true);
      chassis.setLinvel({ x: 0, y: 0, z: 0 }, true); chassis.setAngvel({ x: 0, y: 0, z: 0 }, true);
    },
    yaw() { const f = car.forward(); return Math.atan2(-f[2], f[0]); },
    /* input: { gas, brake, left, right, hand } in 0..1 */
    drive(input, dt) {
      const fs = car.speed(), sp = Math.abs(fs);
      let engine = 0, brake = CAR.idleBrake * (input.gas || input.brake ? 0 : 1);
      if (input.gas) engine = fs < CAR.top ? CAR.engine : 0;
      if (input.brake) {
        if (fs > 0.6) brake = CAR.brake;                       // moving forward: brake …
        else engine = fs > -CAR.topReverse ? -CAR.reverse : 0;   // … then reverse
      }
      if (input.gas && fs < -0.6) brake = CAR.brake;           // going backwards and pressing forward: brake first
      if (input.hand) brake = CAR.handbrake;
      const target = (input.left - input.right) * (CAR.steer + (CAR.steerFast - CAR.steer) * Math.min(1, sp / CAR.top));
      car.steer += (target - car.steer) * Math.min(1, dt * 10);
      for (let i = 0; i < 4; i++) {
        vehicle.setWheelEngineForce(i, engine * (i < 2 ? 0.45 : 0.55));
        vehicle.setWheelBrake(i, input.hand && i < 2 ? brake * 0.2 : brake);    // handbrake locks the rear: drifts
        vehicle.setWheelSteering(i, i < 2 ? car.steer : 0);
      }
      // the handbrake loosens the rear grip
      vehicle.setWheelSideFrictionStiffness(2, input.hand ? 0.55 : 1.6); vehicle.setWheelSideFrictionStiffness(3, input.hand ? 0.55 : 1.6);
      // keep it upright: a gentle righting torque when tilted, a full reset after a while on its back
      const up = car.up(), tilt = Math.acos(Math.max(-1, Math.min(1, up[1])));
      if (tilt > 0.5) {
        const ax = [up[2], 0, -up[0]], k = (tilt - 0.5) * 0.12;      // axis = up × worldUp
        chassis.applyTorqueImpulse({ x: ax[0] * k, y: 0, z: ax[2] * k }, true);
      }
      car.upsideT = up[1] < 0.2 ? car.upsideT + dt : 0;
      if (car.upsideT > 1.6) { const p = chassis.translation(); car.place(p.x, p.y + 1.5, p.z, car.yaw()); car.upsideT = 0; }
    },
    wheels() {
      const out = [];
      for (let i = 0; i < 4; i++) {
        out.push({
          contact: vehicle.wheelIsInContact(i), steer: vehicle.wheelSteering(i), rot: vehicle.wheelRotation(i),
          susp: vehicle.wheelSuspensionLength(i), point: vehicle.wheelContactPoint(i), hard: vehicle.wheelHardPoint(i),
        });
      }
      return out;
    },
  };

  let acc = 0;
  function step(dt) {
    acc += Math.min(dt, 0.1);
    let n = 0;
    while (acc >= world.timestep && n < 4) { vehicle.updateVehicle(world.timestep); world.step(); acc -= world.timestep; n++; }
    if (n === 4) acc = 0;
  }
  return { R, world, statics, dynamic, dynamics, car, step, quatY, v3 };
}
