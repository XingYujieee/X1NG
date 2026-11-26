/* ==========================================================================
   Drive — sound, synthesised with WebAudio (nothing to download).
   An engine with gears (two detuned oscillators through a waveshaper and a
   filter whose cutoff follows the revs), tyre noise that changes with the
   surface (gravel, grass, sand, water), a skid, wind with speed, rain, and
   short impacts whose colour depends on what you hit. Off until the person
   turns it on (browsers require a gesture anyway).
   ========================================================================== */
const clamp = (x, a = 0, b = 1) => Math.min(b, Math.max(a, x));
const smooth = (a, b, x) => { const t = clamp((x - a) / (b - a)); return t * t * (3 - 2 * t); };
const GEARS = [0, 7, 12, 17, 23];   // upshift speeds (m/s)

export function createAudio() {
  let ctx, master, noise, on = false, ready = null, paused = false;
  const L = {};
  let rpm = 900, gear = 1, shiftT = 0, load = 0;

  function noiseBuffer() {
    const b = ctx.createBuffer(1, ctx.sampleRate * 3, ctx.sampleRate), d = b.getChannelData(0);
    let s = 1234567, brown = 0;
    for (let i = 0; i < d.length; i++) { s = (Math.imul(s, 1664525) + 1013904223) >>> 0; const w = s / 2147483648 - 1; brown = brown * 0.92 + w * 0.08; d[i] = w * 0.35 + brown * 2.2; }
    return b;
  }
  function layer(type, freq, q = 0.7) {
    const src = ctx.createBufferSource(); src.buffer = noise; src.loop = true;
    const f = ctx.createBiquadFilter(); f.type = type; f.frequency.value = freq; f.Q.value = q;
    const g = ctx.createGain(); g.gain.value = 0;
    src.connect(f).connect(g).connect(master); src.start(ctx.currentTime + Math.random());
    return { f, g };
  }
  const set = (p, v, tc = 0.08) => p.setTargetAtTime(v, ctx.currentTime, tc);

  async function init() {
    ctx = new (window.AudioContext || window.webkitAudioContext)();
    const comp = ctx.createDynamicsCompressor(); comp.threshold.value = -14; comp.ratio.value = 4;
    master = ctx.createGain(); master.gain.value = 0; master.connect(comp).connect(ctx.destination);
    noise = noiseBuffer();
    // engine: two saws a fifth apart-ish, shaped and filtered
    const shaper = ctx.createWaveShaper(); const curve = new Float32Array(1024);
    for (let i = 0; i < 1024; i++) { const x = i / 512 - 1; curve[i] = Math.tanh(x * 2.4); }
    shaper.curve = curve;
    const ef = ctx.createBiquadFilter(); ef.type = 'lowpass'; ef.Q.value = 2.2;
    const eg = ctx.createGain(); eg.gain.value = 0;
    const o1 = ctx.createOscillator(), o2 = ctx.createOscillator(), o3 = ctx.createOscillator();
    o1.type = 'sawtooth'; o2.type = 'sawtooth'; o3.type = 'square';
    const g1 = ctx.createGain(), g2 = ctx.createGain(), g3 = ctx.createGain(); g1.gain.value = 0.5; g2.gain.value = 0.35; g3.gain.value = 0.22;
    o1.connect(g1).connect(shaper); o2.connect(g2).connect(shaper); o3.connect(g3).connect(shaper);
    shaper.connect(ef).connect(eg).connect(master);
    [o1, o2, o3].forEach((o) => o.start());
    // a little combustion rasp: noise amplitude-modulated at the firing rate
    const rasp = layer('bandpass', 900, 1.2);
    L.engine = { o1, o2, o3, ef, eg, rasp };
    L.gravel = layer('lowpass', 3200, 0.5);
    L.grass = layer('bandpass', 500, 0.8);
    L.water = layer('bandpass', 1300, 0.6);
    L.skid = layer('bandpass', 1100, 3.5);
    L.wind = layer('lowpass', 520, 0.4);
    L.rain = layer('highpass', 2600, 0.5);
  }

  return {
    get on() { return on; },
    async toggle() {
      if (!ready) ready = init();
      await ready;
      on = !on;
      if (on) await ctx.resume();
      set(master.gain, on && !paused ? 0.8 : 0, 0.05);
      return on;
    },
    pause(p) { paused = p; if (ctx) set(master.gain, on && !paused ? 0.8 : 0, 0.15); },
    /* every frame: speed (m/s), throttle (-1..1), boost, surface ('gravel'|'grass'|'sand'|'snow'), wading 0..1, skid 0..1, grounded, wind 0..1, rain 0..1 */
    drive({ speed, throttle, boost, surface, wading, skid, grounded, wind, rain, dt }) {
      if (!on || !ctx) return;
      // gears
      shiftT = Math.max(0, shiftT - dt);
      const reverse = throttle < 0 && speed < 6;
      if (!reverse && shiftT === 0) {
        if (gear < GEARS.length - 1 && speed > GEARS[gear + 1] * (boost ? 1.15 : 1) && throttle > 0) { gear++; shiftT = 0.25; }
        else if (gear > 1 && speed < GEARS[gear] - 2) { gear--; shiftT = 0.2; }
      }
      if (reverse || speed < 1) gear = 1;
      const lo = GEARS[gear - 1] || 0, hi = GEARS[gear] || 7;
      const inGear = clamp((speed - lo) / Math.max(4, hi - lo + 4));
      load += ((Math.abs(throttle) > 0 ? 1 : 0) - load) * Math.min(1, dt * (throttle ? 8 : 4));
      const targetRpm = 850 + inGear * 3400 + load * (grounded ? 250 : 1400) + (boost && throttle > 0 ? 500 : 0);
      rpm += (targetRpm - rpm) * Math.min(1, dt * (shiftT > 0 ? 14 : 7));
      if (shiftT > 0.12) rpm -= 900 * dt * 8;
      const hz = rpm / 60 * 2;   // four-stroke four-cylinder firing rate
      const E = L.engine;
      set(E.o1.frequency, hz * 0.5, 0.03); set(E.o2.frequency, hz * 0.503, 0.03); set(E.o3.frequency, hz * 0.25, 0.03);
      set(E.ef.frequency, 380 + rpm * 0.32 + load * 900, 0.06);
      set(E.eg.gain, 0.07 + load * 0.08 + smooth(800, 4500, rpm) * 0.05 - (shiftT > 0.12 ? 0.05 : 0), 0.05);
      set(E.rasp.f.frequency, 400 + rpm * 0.25, 0.08); set(E.rasp.g.gain, load * 0.05, 0.08);
      // tyres and air
      const roll = grounded ? smooth(0.6, 16, speed) : 0, wet = clamp(wading * 1.5);
      set(L.gravel.g.gain, roll * (surface === 'gravel' || surface === 'sand' ? 0.32 : surface === 'snow' ? 0.18 : 0.05) * (1 - wet), 0.1);
      set(L.gravel.f.frequency, surface === 'sand' ? 1700 : surface === 'snow' ? 2400 : 3600, 0.2);
      set(L.grass.g.gain, roll * (surface === 'grass' ? 0.26 : 0.02) * (1 - wet), 0.1);
      set(L.water.g.gain, roll * wet * 0.55 + wet * 0.05, 0.1);
      set(L.skid.g.gain, grounded ? smooth(0.2, 0.9, skid) * smooth(2, 10, speed) * (surface === 'gravel' ? 0.18 : 0.1) : 0, 0.05);
      set(L.wind.g.gain, 0.03 + smooth(3, 22, speed) * 0.16 + wind * 0.08, 0.2);
      set(L.wind.f.frequency, 420 + speed * 30, 0.2);
      set(L.rain.g.gain, rain * 0.12, 0.3);
    },
    /* an impact: strength in m/s, what was hit, pan -1..1 */
    bump(strength, kind = 'stone', pan = 0) {
      if (!on || !ctx) return;
      const t = ctx.currentTime, k = smooth(1, 16, strength);
      const p = ctx.createStereoPanner(); p.pan.value = clamp(pan, -0.8, 0.8); p.connect(master);
      const wood = kind === 'wood' || kind === 'tree' || kind === 'crate', soft = kind === 'hay' || kind === 'rubber', metal = kind === 'metal';
      // thump
      const o = ctx.createOscillator(), og = ctx.createGain();
      o.type = metal || wood ? 'triangle' : 'sine';
      o.frequency.setValueAtTime(metal ? 240 : wood ? 120 : soft ? 70 : 85, t); o.frequency.exponentialRampToValueAtTime(metal ? 140 : 45, t + 0.18);
      og.gain.setValueAtTime(0.0001, t); og.gain.exponentialRampToValueAtTime((0.12 + k * 0.4) * (soft ? 0.5 : 1), t + 0.006); og.gain.exponentialRampToValueAtTime(0.0001, t + (metal ? 0.3 : 0.2));
      o.connect(og).connect(p); o.start(t); o.stop(t + 0.35);
      // crunch
      const s = ctx.createBufferSource(); s.buffer = noise;
      const f = ctx.createBiquadFilter(); f.type = 'bandpass'; f.frequency.value = metal ? 2600 : wood ? 1200 : soft ? 380 : 650; f.Q.value = metal ? 3 : 0.8;
      const g = ctx.createGain(); g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime((0.1 + k * 0.35) * (soft ? 0.6 : 1), t + 0.004); g.gain.exponentialRampToValueAtTime(0.0001, t + (soft ? 0.3 : 0.18));
      s.connect(f).connect(g).connect(p); s.start(t, Math.random() * 2, 0.4);
      setTimeout(() => { p.disconnect(); }, 800);
    },
  };
}
