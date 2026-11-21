/* ------------------------------------------------------------------
   Paper grid (Unseen-style): the Work grid's photographs are drawn by
   WebGL behind the page, exactly where their DOM tiles sit, so the page
   keeps its layout, links, captions and filters. Near the top and the
   bottom of the screen each print curls away like paper rolling over a
   cylinder; scrolling fast adds a little RGB split and stretch, and the
   edges of the screen fringe like a lens.
------------------------------------------------------------------- */
import * as THREE from '../../vendor/three.min.js';

const vert = /* glsl */`
  uniform vec4 uRect;      // x, y (from top), w, h — CSS px
  uniform vec2 uView;      // viewport w, h
  uniform float uVel, uCurlT, uCurlB, uRad, uReveal;
  varying vec2 vUv; varying float vShade; varying float vEdge;
  const float PI = 3.14159265;
  void main() {
    vUv = uv;
    vec2 p = uRect.xy + vec2(uv.x, 1.0 - uv.y) * uRect.zw;   // pixel position, y down
    p.y += uVel * 0.06 * (uv.y - 0.5) * uRect.w / 300.0;      // stretch with scroll speed
    float z = 0.0, shade = 0.0;
    // curl over a cylinder at the top edge …
    float dt = uCurlT - p.y;
    if (dt > 0.0) { float a = min(dt / uRad, PI); p.y = uCurlT - sin(a) * uRad; z = (1.0 - cos(a)) * uRad; shade = a / PI; }
    // … and at the bottom edge
    float db = p.y - uCurlB;
    if (db > 0.0) { float a = min(db / uRad, PI); p.y = uCurlB + sin(a) * uRad; z = (1.0 - cos(a)) * uRad; shade = a / PI; }
    // the print rises out of the page as it develops
    z += (1.0 - uReveal) * 260.0;
    // perspective about the screen centre
    float f = 1400.0, s = f / (f + z);
    vec2 c = uView * 0.5;
    p = c + (p - c) * s;
    vShade = shade;
    vEdge = abs(p.x / uView.x - 0.5) * 2.0;
    gl_Position = vec4(p.x / uView.x * 2.0 - 1.0, 1.0 - p.y / uView.y * 2.0, 0.0, 1.0);
  }`;
const frag = /* glsl */`
  uniform sampler2D uMap; uniform vec2 uCover; uniform float uLoaded, uVel, uHover, uReveal, uAlpha;
  varying vec2 vUv; varying float vShade; varying float vEdge;
  void main() {
    vec2 uv = (vUv - 0.5) * uCover * (1.0 - uHover * 0.045) + 0.5;
    float k = clamp(abs(uVel) * 0.00006, 0.0, 0.012) + smoothstep(0.55, 1.0, vEdge) * 0.004;   // lens fringe at screen edges
    vec3 c = vec3(texture2D(uMap, uv + vec2(0.0, k)).r, texture2D(uMap, uv).g, texture2D(uMap, uv - vec2(0.0, k)).b);
    float l = dot(c, vec3(0.299, 0.587, 0.114));
    c = mix(vec3(l) * 1.15, c, smoothstep(0.35, 1.0, uReveal));                                  // develops into colour
    c = mix(vec3(0.89, 0.9, 0.93), c, uLoaded);
    c *= 1.0 - vShade * 0.55;                                                                       // the underside of the curl is darker
    // rounded corners
    vec2 q = abs(vUv - 0.5) * 2.0; float r = 0.035;
    float d = length(max(q - (1.0 - r), 0.0)) / r;
    float mask = 1.0 - smoothstep(0.8, 1.0, d);
    gl_FragColor = vec4(c, mask * uAlpha * smoothstep(0.0, 0.25, uReveal));
    #include <colorspace_fragment>
  }`;

export function mountBend(grid) {
  if (!grid || matchMedia('(prefers-reduced-motion: reduce)').matches) return null;
  let renderer;
  try { renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true }); } catch (e) { return null; }
  renderer.setPixelRatio(Math.min(devicePixelRatio, 1.75));
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  const cv = renderer.domElement;
  cv.className = 'bend-canvas';
  document.body.append(cv);
  document.documentElement.classList.add('has-bend');
  const scene = new THREE.Scene();
  const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
  const geo = new THREE.PlaneGeometry(1, 1, 1, 40);
  const loader = new THREE.TextureLoader();
  const items = [];

  const tiles = [...grid.querySelectorAll('.tile')];
  tiles.forEach((tile) => {
    const img = tile.querySelector('img');
    const mat = new THREE.ShaderMaterial({
      vertexShader: vert, fragmentShader: frag, transparent: true, depthTest: false,
      uniforms: {
        uRect: { value: new THREE.Vector4() }, uView: { value: new THREE.Vector2() }, uVel: { value: 0 },
        uCurlT: { value: 0 }, uCurlB: { value: 0 }, uRad: { value: 120 }, uReveal: { value: 0 },
        uMap: { value: null }, uCover: { value: new THREE.Vector2(1, 1) }, uLoaded: { value: 0 }, uHover: { value: 0 }, uAlpha: { value: 1 },
      },
    });
    const mesh = new THREE.Mesh(geo, mat);
    mesh.frustumCulled = false; mesh.visible = false;
    scene.add(mesh);
    const it = { tile, img, mat, mesh, loading: false, hover: 0, rev: 0, ratio: img.width / Math.max(1, img.height) || 1.5 };
    tile.addEventListener('pointerenter', () => { it.hoverT = 1; });
    tile.addEventListener('pointerleave', () => { it.hoverT = 0; });
    items.push(it);
  });

  let W = innerWidth, H = innerHeight;
  const resize = () => { W = innerWidth; H = innerHeight; renderer.setSize(W, H, false); cv.style.width = `${W}px`; cv.style.height = `${H}px`; };
  resize(); addEventListener('resize', resize);

  let lastY = scrollY, vel = 0, raf = 0, alive = true;
  const load = (it) => {
    it.loading = true;
    loader.load(it.img.currentSrc || it.img.src, (t) => {
      t.colorSpace = THREE.SRGBColorSpace; t.minFilter = THREE.LinearFilter; t.generateMipmaps = false;
      it.mat.uniforms.uMap.value = t; it.mat.uniforms.uLoaded.value = 1;
      it.ratio = t.image.width / t.image.height;
    });
  };
  function frame() {
    if (!alive) return;
    raf = requestAnimationFrame(frame);
    const y = scrollY; const v = (y - lastY); lastY = y;
    vel += (v * 60 - vel) * 0.15;
    const curlT = Math.max(110, H * 0.16), curlB = H - Math.max(70, H * 0.1);
    for (const it of items) {
      const r = it.tile.getBoundingClientRect();
      const on = r.width > 0 && r.bottom > -200 && r.top < H + 200;
      it.mesh.visible = on;
      if (!on) continue;
      if (!it.loading) load(it);
      const u = it.mat.uniforms;
      u.uRect.value.set(r.left, r.top, r.width, r.height);
      u.uView.value.set(W, H);
      u.uVel.value = vel; u.uCurlT.value = curlT; u.uCurlB.value = curlB; u.uRad.value = Math.min(160, H * 0.14);
      const ca = r.width / r.height;
      if (ca > it.ratio) u.uCover.value.set(1, it.ratio / ca); else u.uCover.value.set(ca / it.ratio, 1);
      it.hover += ((it.hoverT || 0) - it.hover) * 0.12; u.uHover.value = it.hover;
      const target = it.tile.classList.contains('is-in') && u.uLoaded.value ? 1 : 0;
      it.rev += (target - it.rev) * 0.045; u.uReveal.value = it.rev;
    }
    renderer.render(scene, camera);
  }
  frame();
  return { destroy() { alive = false; cancelAnimationFrame(raf); renderer.dispose(); cv.remove(); document.documentElement.classList.remove('has-bend'); } };
}
