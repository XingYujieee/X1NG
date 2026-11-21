/* ==========================================================================
   Drive — the Blender assets (media/drive/*.glb, built by assets/tools/drive_assets.py).
   Every asset becomes { parts: [{ name, geometry, material }], roles: { head: mesh, … },
   hulls: [Float32Array of points] (convex collision shapes) }.
   ========================================================================== */
import * as THREE from '../../vendor/three.min.js';
import { GLTFLoader } from '../../vendor/three-addons/loaders/GLTFLoader.js';

const FILES = ['car', 'trees', 'props', 'landmarks'];

export async function loadAssets(base, onProgress) {
  const loader = new GLTFLoader();
  const lib = {};
  let done = 0;
  await Promise.all(FILES.map((f) => new Promise((res, rej) => loader.load(`${base}${f}.glb`, (g) => {
    g.scene.updateMatrixWorld(true);
    g.scene.traverse((o) => {
      if (!o.isMesh) return;
      // multi-material Blender objects come in as a Group of meshes named <object>, <object>_1, … under a node named <object>
      const full = (o.parent && o.parent !== g.scene ? o.parent.name : o.name).replace(/_\d+$/, '');
      const [asset, role] = full.split('__');
      const A = lib[asset] || (lib[asset] = { parts: [], roles: {}, hulls: [] });
      const geo = o.geometry.clone(); geo.applyMatrix4(o.matrixWorld);
      if (role && role.startsWith('col')) { A.hulls.push(new Float32Array(geo.attributes.position.array)); return; }
      const mat = o.material;
      if (mat.map) mat.map.colorSpace = THREE.SRGBColorSpace;
      if (mat.metalness > 0.3) { mat.metalness = 0.3; mat.roughness = Math.max(mat.roughness, 0.35); }   // no environment map: strong metals would read as black
      if (role) { A.roles[role] = A.roles[role] || []; A.roles[role].push({ geometry: geo, material: mat }); return; }
      A.parts.push({ name: mat.name, geometry: geo, material: mat });
    });
    onProgress?.(++done / FILES.length);
    res();
  }, undefined, rej))));
  // share one material per name across assets (fewer programs, and the game can tweak them)
  const shared = {};
  for (const k in lib) for (const p of lib[k].parts) { const n = p.material.name; if (!shared[n]) shared[n] = p.material; p.material = shared[n]; }
  lib.__materials = shared;
  return lib;
}

/* a Group of plain meshes for one asset (used for one-off landmarks) */
export function instance(lib, name, { shadow = true } = {}) {
  const A = lib[name]; const g = new THREE.Group(); g.name = name;
  if (!A) { console.warn('missing asset', name); return g; }
  for (const p of A.parts) { const m = new THREE.Mesh(p.geometry, p.material); m.castShadow = shadow; m.receiveShadow = true; g.add(m); }
  return g;
}

/* many copies of one asset: one InstancedMesh per material part */
export function instanced(lib, name, matrices, { shadow = true, patch } = {}) {
  const A = lib[name]; const g = new THREE.Group(); g.name = name;
  if (!A || !matrices.length) return { group: g, meshes: [] };
  const meshes = A.parts.map((p) => {
    const mat = patch ? patch(p.material, p.name) : p.material;
    const m = new THREE.InstancedMesh(p.geometry, mat, matrices.length);
    matrices.forEach((mx, i) => m.setMatrixAt(i, mx));
    m.castShadow = shadow; m.receiveShadow = true;
    m.computeBoundingSphere();
    g.add(m); return m;
  });
  return { group: g, meshes };
}
