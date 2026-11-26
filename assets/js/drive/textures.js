/* ==========================================================================
   Drive — the texture set (assets/tools/drive_textures.py → media/drive/tex).
   Two 5×4 atlases (albedo, normal) are unpacked into texture arrays so every
   surface can pick its layer in the shader without seams; leaf cards are
   plain RGBA textures.
   ========================================================================== */
import * as THREE from '../../vendor/three.min.js';

export const LAYER = { grass: 0, drygrass: 1, sand: 2, redrock: 3, rock: 4, snow: 5, dirt: 6, paving: 7, limestone: 8, brick: 9, plaster: 10, tiles: 11, wood: 12, marble: 13, concrete: 14, curtain: 15, bark: 16, ashlar: 17, hay: 18, stucco: 19 };
const COUNT = 20, COLS = 5;
export const TEX = { alb: { value: null }, nor: { value: null }, mean: [], ready: false };
const LIN = new Float32Array(256).map((_, i) => { const c = i / 255; return c <= 0.04045 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4; });
export const LEAVES = {};

const loadImage = (src) => new Promise((res, rej) => { const i = new Image(); i.crossOrigin = 'anonymous'; i.onload = () => res(i); i.onerror = rej; i.src = src; });

function toArray(img, size, srgb, aniso) {
  const T = img.width / COLS, c = document.createElement('canvas'); c.width = size; c.height = size;
  const x = c.getContext('2d', { willReadFrequently: true });
  const data = new Uint8Array(size * size * 4 * COUNT);
  for (let i = 0; i < COUNT; i++) {
    x.clearRect(0, 0, size, size);
    x.drawImage(img, (i % COLS) * T, Math.floor(i / COLS) * T, T, T, 0, 0, size, size);
    const px = x.getImageData(0, 0, size, size).data;
    data.set(px, i * size * size * 4);
    if (srgb) { const m = [0, 0, 0]; for (let p = 0; p < px.length; p += 16) { m[0] += LIN[px[p]]; m[1] += LIN[px[p + 1]]; m[2] += LIN[px[p + 2]]; } TEX.mean[i] = m.map((v) => v / (px.length / 16)); }
  }
  const t = new THREE.DataArrayTexture(data, size, size, COUNT);
  t.format = THREE.RGBAFormat; t.type = THREE.UnsignedByteType;
  t.wrapS = t.wrapT = THREE.RepeatWrapping;
  t.minFilter = THREE.LinearMipmapLinearFilter; t.magFilter = THREE.LinearFilter; t.generateMipmaps = true;
  t.anisotropy = aniso;
  if (srgb) t.colorSpace = THREE.SRGBColorSpace;
  t.needsUpdate = true;
  return t;
}

export async function loadTextures(base, { coarse = false, anisotropy = 8 } = {}) {
  const size = coarse ? 256 : 512;
  const [a, n] = await Promise.all([loadImage(`${base}albedo.webp`), loadImage(`${base}normal.webp`)]);
  TEX.alb.value = toArray(a, size, true, anisotropy);
  TEX.nor.value = toArray(n, size, false, anisotropy);
  const tl = new THREE.TextureLoader();
  await Promise.all(['ginkgo', 'plane', 'broad', 'poplar', 'fir', 'blossom', 'palm'].map((k) => new Promise((res) => tl.load(`${base}leaf_${k}.webp`, (t) => {
    t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = anisotropy; LEAVES[k] = t; res();
  }, undefined, res))));
  TEX.ready = true;
  return TEX;
}
