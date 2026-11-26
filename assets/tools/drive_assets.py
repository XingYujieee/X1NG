"""
Drive assets — modelled in Blender, exported as .glb for three.js
(the same pipeline as bruno-simon.com: Blender for assets, three.js for real time).

Run with Blender's Python module (pip install bpy) or inside Blender:
    python assets/tools/drive_assets.py            # writes media/drive/*.glb, previews and resources/drive.blend
Every object is modelled around its own origin, facing +X (Blender X → three.js X, Blender Z-up → three.js Y-up).
Objects named  <asset>__colN  are collision shapes (convex), loaded by the game and never drawn.
Emissive parts are separate objects named  <asset>__<role>  (head, tail, reverse, indL, indR, lamp, glow …).
"""
import bpy, bmesh, math, random, os, sys
from mathutils import Vector, Matrix, Euler

ROOT = os.path.abspath(os.path.join(os.path.dirname(__file__), '..', '..'))
OUT = os.path.join(ROOT, 'media', 'drive')
PREV = os.environ.get('PREVIEW_DIR', '/tmp/drive_prev')
os.makedirs(OUT, exist_ok=True); os.makedirs(PREV, exist_ok=True)
rnd = random.Random(7)
TAU = math.tau

bpy.ops.wm.read_factory_settings(use_empty=True)
scene = bpy.context.scene

# ------------------------------------------------------------------ materials
def lin(c):
    c = c.lstrip('#'); v = [int(c[i:i + 2], 16) / 255 for i in (0, 2, 4)]
    return [x / 12.92 if x <= 0.04045 else ((x + 0.055) / 1.055) ** 2.4 for x in v]

MATS = {}
def M(name, col, rough=0.85, metal=0.0, emit=None, strength=1.0):
    if name in MATS: return MATS[name]
    m = bpy.data.materials.new(name)
    m.use_nodes = True
    b = m.node_tree.nodes.get('Principled BSDF')
    b.inputs['Base Color'].default_value = (*lin(col), 1)
    b.inputs['Roughness'].default_value = rough
    b.inputs['Metallic'].default_value = metal
    if emit:
        b.inputs['Emission Color'].default_value = (*lin(emit), 1)
        b.inputs['Emission Strength'].default_value = strength
    m.diffuse_color = (*lin(col), 1)
    MATS[name] = m
    return m

P = {   # palette
    'paint': M('paint', '#2233ff', 0.35, 0.15), 'white': M('white', '#f1ede4', 0.6), 'trim': M('trim', '#1b1d24', 0.7),
    'glass': M('glass', '#1f2b44', 0.12, 0.4), 'chrome': M('chrome', '#cfd3da', 0.25, 0.9), 'tyre': M('tyre', '#202127', 0.9),
    'rim': M('rim', '#d9dbe0', 0.4, 0.6), 'head': M('head', '#fff6dc', 0.3, 0, '#fff1c8', 1), 'tail': M('tail', '#c4141f', 0.4, 0, '#ff1a2c', 1),
    'reverse': M('reverse', '#f4f4f4', 0.4, 0, '#ffffff', 1), 'amber': M('amber', '#ff9a1a', 0.4, 0, '#ffa21a', 1),
    'leather': M('leather', '#8a5a36', 0.8), 'canvas': M('canvas', '#e07a3a', 0.9), 'case': M('case', '#3a3f4b', 0.6),
    'bark': M('bark', '#5d4636', 0.95), 'bark_light': M('bark_light', '#a99a86', 0.9), 'bark_white': M('bark_white', '#d9d4c7', 0.9),
    'fir': M('fir', '#2f5a3e', 0.9), 'fir2': M('fir2', '#3b6b47', 0.9), 'snow': M('snow', '#f5f7fb', 0.7),
    'palm': M('palm', '#6f9a3c', 0.85), 'palm_dark': M('palm_dark', '#4d7a2e', 0.85), 'coconut': M('coconut', '#6b4a2b', 0.8),
    'ginkgo': M('ginkgo', '#efbd2c', 0.85), 'ginkgo2': M('ginkgo2', '#e2a21f', 0.85),
    'plane': M('plane', '#86a24a', 0.85), 'plane2': M('plane2', '#a7a64a', 0.85), 'poplar': M('poplar', '#8fb04c', 0.85),
    'shrub': M('shrub', '#7d7a45', 0.95), 'tuft': M('tuft', '#c7a861', 0.95), 'reed': M('reed', '#9aa45a', 0.9), 'bush': M('bush', '#557f3a', 0.9),
    'blossom': M('blossom', '#f2b6c6', 0.85),
    'hay': M('hay', '#d9b45c', 0.95), 'hay_end': M('hay_end', '#c79d45', 0.95), 'wrap': M('wrap', '#f2efe6', 0.5),
    'lantern': M('lantern', '#d8261f', 0.6, 0, '#ff4a2a', 0.0), 'gold': M('gold', '#d4a23a', 0.35, 0.7), 'iron': M('iron', '#2a2c31', 0.45, 0.75),
    'lamp': M('lamp', '#fff4d6', 0.3, 0, '#ffe2a8', 0.0), 'wood': M('wood', '#8a6240', 0.85), 'wood_dark': M('wood_dark', '#5a3d27', 0.85),
    'stupa': M('stupa', '#f4f1ea', 0.7), 'sail': M('sail', '#f3efe6', 0.8), 'rope': M('rope', '#b49a72', 0.9),
    'sand': M('sand', '#e2c48e', 0.95), 'sandstone': M('sandstone', '#d6b077', 0.95), 'limestone': M('limestone', '#e8d6ae', 0.9),
    'granite': M('granite', '#b98b6a', 0.9), 'rock': M('rock', '#8f877b', 0.95), 'rock_red': M('rock_red', '#c08a66', 0.95), 'paint_ochre': M('paint_ochre', '#c99a5b', 0.9), 'hieroglyph': M('hieroglyph', '#a98455', 0.9),
    'red': M('red', '#a9322a', 0.8), 'red_dark': M('red_dark', '#7d211c', 0.8), 'tile_yellow': M('tile_yellow', '#e3a630', 0.55), 'tile_grey': M('tile_grey', '#59606a', 0.7),
    'marble': M('marble', '#ece9e1', 0.6), 'brick_grey': M('brick_grey', '#8d8f8a', 0.9), 'brick_dark': M('brick_dark', '#6a6c69', 0.9), 'plaster': M('plaster', '#e6ddcc', 0.9),
    'green_tile': M('green_tile', '#4c8a6b', 0.6), 'blue_paint': M('blue_paint', '#2f5f8f', 0.7),
    'steel': M('steel', '#aab4c0', 0.3, 0.7), 'glass_city': M('glass_city', '#5f7a96', 0.15, 0.6), 'glass_dark': M('glass_dark', '#36475c', 0.15, 0.6),
    'titanium': M('titanium', '#b9bec6', 0.3, 0.8), 'pearl': M('pearl', '#c43f78', 0.35, 0.3), 'concrete': M('concrete', '#c9c6bf', 0.9),
    'bund': M('bund', '#d9cfba', 0.85), 'bund_dark': M('bund_dark', '#b9ab90', 0.85), 'verdigris': M('verdigris', '#6aa39a', 0.7),
    'cone': M('cone', '#ff6a2b', 0.6), 'crate': M('crate', '#c89a62', 0.9), 'stand': M('stand', '#16181e', 0.6),
    'balloon_a': M('balloon_a', '#e8c547', 0.7), 'balloon_b': M('balloon_b', '#d9534f', 0.7), 'balloon_c': M('balloon_c', '#3e7bd6', 0.7), 'balloon_d': M('balloon_d', '#f2efe6', 0.7),
    'yak': M('yak', '#2c2420', 0.95), 'horn': M('horn', '#e8e0cc', 0.6), 'camel': M('camel', '#c69a63', 0.95), 'cloth_red': M('cloth_red', '#b5302a', 0.9),
    'flower_w': M('flower_w', '#f3efe2', 0.9), 'water_glow': M('water_glow', '#9fd8ff', 0.3, 0, '#9fe6ff', 0.0),
}

# ------------------------------------------------------------------ geometry helpers
COLL = {}
def coll(name):
    if name not in COLL:
        c = bpy.data.collections.new(name); scene.collection.children.link(c); COLL[name] = c
    return COLL[name]
CUR = [None]

def from_bm(bm, name, mat):
    me = bpy.data.meshes.new(name); bm.to_mesh(me); bm.free()
    o = bpy.data.objects.new(name, me); CUR[0].objects.link(o)
    me.materials.append(mat)
    for p in me.polygons: p.use_smooth = False
    return o

def place(o, loc=(0, 0, 0), rot=(0, 0, 0), scale=None):
    o.location = loc; o.rotation_euler = rot
    if scale: o.scale = scale if isinstance(scale, (tuple, list)) else (scale,) * 3
    return o

BEVEL = [0.0]
def box(sx, sy, sz, loc=(0, 0, 0), mat=None, bevel=0.0, seg=1, rot=(0, 0, 0), name='box'):
    bm = bmesh.new(); bmesh.ops.create_cube(bm, size=1)
    bmesh.ops.scale(bm, vec=(sx, sy, sz), verts=bm.verts)
    if not bevel and BEVEL[0] and '__col' not in name and mat is not P['trim']: bevel = min(BEVEL[0], 0.18 * min(sx, sy, sz))
    if bevel: bmesh.ops.bevel(bm, geom=bm.edges[:], offset=bevel, segments=seg, affect='EDGES', profile=0.5)
    return place(from_bm(bm, name, mat), loc, rot)

def cyl(r, h, loc=(0, 0, 0), mat=None, n=16, rot=(0, 0, 0), r2=None, bevel=0.0, name='cyl', cap=True):
    bm = bmesh.new()
    bmesh.ops.create_cone(bm, cap_ends=cap, cap_tris=False, segments=n, radius1=r, radius2=r if r2 is None else r2, depth=h)
    if bevel: bmesh.ops.bevel(bm, geom=[e for e in bm.edges if len(e.link_faces) == 2 and abs(e.calc_face_angle(0)) > 0.6], offset=bevel, segments=1, affect='EDGES')
    return place(from_bm(bm, name, mat), loc, rot)

def sphere(r, loc=(0, 0, 0), mat=None, sub=2, scale=(1, 1, 1), noise=0.0, name='sph', seed=None):
    bm = bmesh.new(); bmesh.ops.create_icosphere(bm, subdivisions=sub, radius=r)
    if noise:
        R = random.Random(seed if seed is not None else rnd.random())
        for v in bm.verts: v.co *= 1 + (R.random() - 0.5) * noise
    bmesh.ops.scale(bm, vec=scale, verts=bm.verts)
    return place(from_bm(bm, name, mat), loc)

def uvsphere(r, loc=(0, 0, 0), mat=None, seg=16, ring=10, scale=(1, 1, 1), name='uvs', half=False):
    bm = bmesh.new(); bmesh.ops.create_uvsphere(bm, u_segments=seg, v_segments=ring, radius=r)
    if half:
        bmesh.ops.delete(bm, geom=[v for v in bm.verts if v.co.z < -1e-4], context='VERTS')
    bmesh.ops.scale(bm, vec=scale, verts=bm.verts)
    return place(from_bm(bm, name, mat), loc)

def poly(verts, faces, mat, name='poly', loc=(0, 0, 0)):
    bm = bmesh.new(); vs = [bm.verts.new(v) for v in verts]
    for f in faces: bm.faces.new([vs[i] for i in f])
    bmesh.ops.recalc_face_normals(bm, faces=bm.faces)
    return place(from_bm(bm, name, mat), loc)

def frustum(bx, by, tx, ty, h, mat, loc=(0, 0, 0), name='frustum', top_offset=(0, 0)):
    """box with a smaller top (bx,by bottom half-extents, tx,ty top half-extents)"""
    ox, oy = top_offset
    v = [(-bx, -by, 0), (bx, -by, 0), (bx, by, 0), (-bx, by, 0), (-tx + ox, -ty + oy, h), (tx + ox, -ty + oy, h), (tx + ox, ty + oy, h), (-tx + ox, ty + oy, h)]
    f = [(0, 1, 2, 3), (4, 5, 6, 7), (0, 1, 5, 4), (1, 2, 6, 5), (2, 3, 7, 6), (3, 0, 4, 7)]
    return poly(v, f, mat, name, loc)

def active(o):
    bpy.context.view_layer.objects.active = o

def apply_mod(o, mod):
    with bpy.context.temp_override(object=o, active_object=o):
        bpy.ops.object.modifier_apply(modifier=mod.name)

def boolean(o, cutter, op='DIFFERENCE'):
    m = o.modifiers.new('b', 'BOOLEAN'); m.operation = op; m.object = cutter; m.solver = 'EXACT'
    apply_mod(o, m)
    bpy.data.objects.remove(cutter, do_unlink=True)
    return o

def join(objs, name):
    objs = [o for o in objs if o]
    with bpy.context.temp_override(active_object=objs[0], selected_editable_objects=objs, object=objs[0]):
        bpy.ops.object.join()
    o = objs[0]; o.name = name; o.data.name = name
    with bpy.context.temp_override(active_object=o, selected_editable_objects=[o], object=o):
        bpy.ops.object.transform_apply(location=True, rotation=True, scale=True)
    return o

def finish(o, name, at=(0, 0, 0)):
    """apply transforms and move the finished asset to its slot on the preview grid (export puts it back at the origin)"""
    o.name = name; o.data.name = name
    with bpy.context.temp_override(active_object=o, selected_editable_objects=[o], object=o):
        bpy.ops.object.transform_apply(location=True, rotation=True, scale=True)
    o['slot'] = at
    return o

def col_box(asset, i, sx, sy, sz, loc=(0, 0, 0), rot=(0, 0, 0)):
    o = box(sx, sy, sz, loc, P['trim'], rot=rot, name=f'{asset}__col{i}')
    with bpy.context.temp_override(active_object=o, selected_editable_objects=[o], object=o):
        bpy.ops.object.transform_apply(location=True, rotation=True, scale=True)
    o.display_type = 'WIRE'; o.hide_render = True
    return o

def col_cyl(asset, i, r, h, loc=(0, 0, 0), n=10, r2=None):
    o = cyl(r, h, loc, P['trim'], n=n, r2=r2, name=f'{asset}__col{i}')
    with bpy.context.temp_override(active_object=o, selected_editable_objects=[o], object=o):
        bpy.ops.object.transform_apply(location=True, rotation=True, scale=True)
    o.display_type = 'WIRE'; o.hide_render = True
    return o

def named(o, name):
    o.name = name; o.data.name = name
    with bpy.context.temp_override(active_object=o, selected_editable_objects=[o], object=o):
        bpy.ops.object.transform_apply(location=True, rotation=True, scale=True)
    return o

def roof(w, d, h, lift, mat, loc, overhang=0.0, thick=0.12, curve=1.6, ridge=0.0, name='roof', n=12):
    """Chinese hip roof: concave slopes, eaves turned up at the corners. w,d half extents at the eave, ridge = half length of the top ridge"""
    bm = bmesh.new()
    grid = {}
    for i in range(n + 1):
        for j in range(n + 1):
            u, v = i / n * 2 - 1, j / n * 2 - 1
            x, y = u * w, v * d
            # distance to the ridge line (hip): normalised 0 at ridge, 1 at eave
            ex = max(0.0, (abs(x) - ridge) / max(1e-3, w - ridge)); ey = abs(v)
            t = max(ex, ey)
            z = h * (1 - t) ** curve
            z += lift * (abs(u) ** 6) * (abs(v) ** 6) * 1.0 + lift * 0.25 * max(abs(u), abs(v)) ** 8
            grid[(i, j)] = bm.verts.new((x, y, z))
    for i in range(n):
        for j in range(n):
            bm.faces.new([grid[(i, j)], grid[(i + 1, j)], grid[(i + 1, j + 1)], grid[(i, j + 1)]])
    bmesh.ops.recalc_face_normals(bm, faces=bm.faces)
    for f in bm.faces:
        if f.normal.z < 0: f.normal_flip()
    ret = bmesh.ops.solidify(bm, geom=bm.faces[:], thickness=thick)
    o = place(from_bm(bm, name, mat), loc)
    if w < 1.2 or d < 1.0: return o
    # rafter ends along every eave, and a painted bracket band (dougong, simplified) under them
    lx, ly, lz = loc; parts = [o]
    def eave_z(u): return lz + lift * (abs(u) ** 6) + lift * 0.25 * max(abs(u), 1.0) ** 8 - thick - 0.06
    step = 0.3
    for sy in (1, -1):
        n_r = int(2 * w * 0.86 / step)
        for i in range(n_r + 1):
            x = -w * 0.86 + i * step
            r = cyl(0.045, 0.42, (lx + x, ly + sy * (d * 0.93), eave_z(x / w)), P['wood_dark'], n=6, rot=(math.pi / 2 - sy * 0.25, 0, 0))
            parts.append(r)
    for sx in (1, -1):
        n_r = int(2 * d * 0.86 / step)
        for i in range(n_r + 1):
            y = -d * 0.86 + i * step
            parts.append(cyl(0.045, 0.42, (lx + sx * (w * 0.93), ly + y, eave_z(1.0) - 0.02), P['wood_dark'], n=6, rot=(0, math.pi / 2 + sx * 0.25, 0)))
    fw, fd = w * 0.8, d * 0.8
    parts.append(box(fw * 2, fd * 2, 0.32, (lx, ly, lz - 0.2), P['green_tile']))
    for sy in (1, -1):
        for i in range(int(fw * 2 / 0.55) + 1):
            parts.append(box(0.18, 0.2, 0.16, (lx - fw + i * 0.55, ly + sy * (fd + 0.08), lz - 0.06), P['blue_paint']))
    for sx in (1, -1):
        for i in range(int(fd * 2 / 0.55) + 1):
            parts.append(box(0.2, 0.18, 0.16, (lx + sx * (fw + 0.08), ly - fd + i * 0.55, lz - 0.06), P['blue_paint']))
    return join(parts, name)

def arch_frame(cx, yf, zs, r, mat, w=0.22, t=0.1):
    """a stone ring round the top of an archway on the face at y=yf (springline at zs), with jambs down to the ground"""
    ring = cyl(r + w, t, (cx, yf, zs), mat, n=40, rot=(math.pi / 2, 0, 0))
    boolean(ring, cyl(r, t * 4, (cx, yf, zs), P['trim'], n=40, rot=(math.pi / 2, 0, 0)))
    boolean(ring, box(2 * r + 2 * w + 0.4, t * 4, r + 0.6, (cx, yf, zs - (r + 0.6) / 2), P['trim']))
    out = [ring]
    for sx in (1, -1): out.append(box(w, t, zs, (cx + sx * (r + w / 2), yf, zs / 2), mat))
    out.append(box(w * 1.3, t * 1.4, w * 0.9, (cx, yf, zs + r + w * 0.35), mat))     # keystone
    return out

def bend_x(o, k):
    """bend a mesh along its local x (for fronds): z -= k * x^2"""
    for v in o.data.vertices: v.co.z -= k * v.co.x ** 2
    return o

# ================================================================== CAR
def make_car():
    CUR[0] = coll('car')
    parts = []
    WX, WY, WZ = 0.78, 0.7, -0.3          # wheel centres (match physics: connection y -0.08, rest ~0.22 under load)
    body = box(2.32, 1.34, 0.6, (0, 0, -0.04), P['paint'], bevel=0.1, seg=3)
    for sx in (1, -1):
        for sy in (1, -1):
            boolean(body, cyl(0.5, 0.6, (sx * WX, sy * 0.62, WZ), P['trim'], n=24, rot=(math.pi / 2, 0, 0)))
    parts.append(body)
    # wheel-arch flares
    for sx in (1, -1):
        for sy in (1, -1):
            a = cyl(0.58, 0.16, (sx * WX, sy * 0.66, WZ), P['trim'], n=24, rot=(math.pi / 2, 0, 0))
            boolean(a, cyl(0.49, 0.4, (sx * WX, sy * 0.66, WZ), P['trim'], n=24, rot=(math.pi / 2, 0, 0)))
            boolean(a, box(1.4, 0.4, 0.6, (sx * WX, sy * 0.66, WZ - 0.3), P['trim']))
            parts.append(a)
    # lower trim / sills and bumpers
    parts.append(box(1.0, 1.38, 0.12, (0, 0, -0.32), P['trim'], bevel=0.03))
    parts.append(box(0.18, 1.44, 0.22, (1.2, 0, -0.18), P['trim'], bevel=0.05, seg=2))
    parts.append(box(0.18, 1.44, 0.22, (-1.2, 0, -0.18), P['trim'], bevel=0.05, seg=2))
    parts.append(box(0.06, 0.8, 0.26, (1.165, 0, 0.06), P['trim'], bevel=0.02))      # grille
    for k in range(4): parts.append(box(0.02, 0.74, 0.02, (1.2, 0, -0.04 + k * 0.06), P['chrome']))
    # cabin with a raked windscreen
    cab = frustum(0.66, 0.6, 0.6, 0.56, 0.5, P['white'], (-0.22, 0, 0.26), top_offset=(-0.12, 0))
    m = cab.modifiers.new('bv', 'BEVEL'); m.width = 0.05; m.segments = 2; apply_mod(cab, m)
    parts.append(cab)
    # windows (slightly proud of the cabin)
    parts.append(frustum(0.02, 0.5, 0.02, 0.48, 0.36, P['glass'], (0.36, 0, 0.32), top_offset=(-0.1, 0), name='ws'))
    parts.append(box(0.04, 0.9, 0.3, (-0.89, 0, 0.5), P['glass'], rot=(0, 0.12, 0)))
    for sy in (1, -1):
        parts.append(box(0.46, 0.03, 0.3, (0.0, sy * 0.6, 0.5), P['glass']))
        parts.append(box(0.36, 0.03, 0.3, (-0.56, sy * 0.59, 0.5), P['glass']))
        parts.append(box(0.08, 0.06, 0.06, (0.36, sy * 0.72, 0.38), P['trim']))                  # mirrors
        parts.append(box(0.04, 0.12, 0.1, (0.36, sy * 0.78, 0.38), P['chrome']))
        parts.append(box(0.5, 0.02, 0.05, (0.15, sy * 0.675, -0.02), P['white']))               # a white pinstripe
    # roof, rack and the photographer's luggage
    parts.append(box(1.34, 1.18, 0.06, (-0.32, 0, 0.79), P['white'], bevel=0.03))
    for sy in (1, -1): parts.append(cyl(0.025, 1.3, (-0.32, sy * 0.52, 0.9), P['iron'], n=6, rot=(0, math.pi / 2, 0)))
    for k in range(4): parts.append(cyl(0.022, 1.06, (-0.9 + k * 0.38, 0, 0.9), P['iron'], n=6, rot=(math.pi / 2, 0, 0)))
    for sx in (-0.9, 0.24):
        for sy in (1, -1): parts.append(cyl(0.02, 0.1, (sx, sy * 0.52, 0.85), P['iron'], n=6))
    parts.append(box(0.5, 0.42, 0.26, (-0.62, 0.18, 1.04), P['leather'], bevel=0.04, seg=2))
    parts.append(box(0.06, 0.2, 0.04, (-0.62, 0.18, 1.19), P['wood_dark']))
    parts.append(box(0.38, 0.34, 0.2, (-0.05, -0.16, 1.01), P['case'], bevel=0.03, seg=2))
    parts.append(cyl(0.12, 0.9, (-0.3, -0.25, 1.03), P['canvas'], n=12, rot=(0, math.pi / 2, 0)))
    parts.append(cyl(0.125, 0.04, (0.05, -0.25, 1.03), P['rope'], n=12, rot=(0, math.pi / 2, 0)))
    parts.append(cyl(0.125, 0.04, (-0.65, -0.25, 1.03), P['rope'], n=12, rot=(0, math.pi / 2, 0)))
    # snorkel
    parts.append(cyl(0.045, 0.62, (0.42, -0.66, 0.3), P['trim'], n=8))
    parts.append(box(0.14, 0.1, 0.08, (0.46, -0.66, 0.62), P['trim']))
    # spare wheel on the back door
    parts.append(cyl(0.34, 0.2, (-1.26, 0, 0.12), P['tyre'], n=20, rot=(0, math.pi / 2, 0), bevel=0.04))
    parts.append(cyl(0.2, 0.22, (-1.27, 0, 0.12), P['white'], n=20, rot=(0, math.pi / 2, 0)))
    # "X1NG" on the doors
    for sy in (1, -1):
        bpy.ops.object.text_add(location=(0, 0, 0))
        t = bpy.context.active_object
        t.data.font = bpy.data.fonts.load(os.path.join(ROOT, 'assets', 'tools', 'fonts', 'GeistMono-Bold.ttf'), check_existing=True)
        t.data.body = 'X1NG'; t.data.size = 0.2; t.data.extrude = 0.008; t.data.align_x = 'CENTER'
        t.rotation_euler = (math.pi / 2, 0, math.pi if sy > 0 else 0)
        t.location = (-0.15 if sy > 0 else -0.15, sy * 0.676, 0.08)
        with bpy.context.temp_override(active_object=t, selected_editable_objects=[t], object=t):
            bpy.ops.object.convert(target='MESH')
        t = bpy.context.active_object
        for c in list(t.users_collection): c.objects.unlink(t)
        CUR[0].objects.link(t)
        t.data.materials.clear(); t.data.materials.append(P['white'])
        parts.append(t)
    car = join(parts, 'car_body')
    # lights as their own objects (the game drives their glow)
    hl = [cyl(0.085, 0.05, (1.19, sy * 0.48, 0.07), P['head'], n=16, rot=(0, math.pi / 2, 0)) for sy in (1, -1)]
    hl += [cyl(0.105, 0.03, (1.175, sy * 0.48, 0.07), P['chrome'], n=16, rot=(0, math.pi / 2, 0)) for sy in (1, -1)]
    named(join(hl, 'car__head'), 'car__head')
    named(join([box(0.04, 0.14, 0.16, (-1.17, sy * 0.56, 0.1), P['tail']) for sy in (1, -1)], 'car__tail'), 'car__tail')
    named(join([box(0.04, 0.1, 0.06, (-1.21, sy * 0.4, -0.12), P['reverse']) for sy in (1, -1)], 'car__reverse'), 'car__reverse')
    named(join([box(0.05, 0.1, 0.06, (1.18, 0.62, 0.07), P['amber']), box(0.04, 0.1, 0.06, (-1.17, 0.56, -0.02), P['amber']), box(0.1, 0.03, 0.04, (0.62, 0.68, 0.06), P['amber'])], 'car__indL'), 'car__indL')
    named(join([box(0.05, 0.1, 0.06, (1.18, -0.62, 0.07), P['amber']), box(0.04, 0.1, 0.06, (-1.17, -0.56, -0.02), P['amber']), box(0.1, 0.03, 0.04, (0.62, -0.68, 0.06), P['amber'])], 'car__indR'), 'car__indR')
    # one wheel (axle along Blender Y = three.js Z), chunky off-road tread
    w = [cyl(0.42, 0.3, (0, 0, 0), P['tyre'], n=24, rot=(math.pi / 2, 0, 0), bevel=0.05)]
    for k in range(20):
        a = k / 20 * TAU
        lug = box(0.1, 0.32, 0.05, (math.cos(a) * 0.42, 0, math.sin(a) * 0.42), P['tyre'], rot=(0, -a + math.pi / 2, 0))
        w.append(lug)
    w.append(cyl(0.25, 0.32, (0, 0, 0), P['rim'], n=16, rot=(math.pi / 2, 0, 0)))
    w.append(cyl(0.08, 0.34, (0, 0, 0), P['trim'], n=8, rot=(math.pi / 2, 0, 0)))
    for k in range(5):
        a = k / 5 * TAU
        w.append(cyl(0.035, 0.34, (math.cos(a) * 0.16, 0, math.sin(a) * 0.16), P['trim'], n=6, rot=(math.pi / 2, 0, 0)))
    join(w, 'car__wheel')

# ================================================================== TREES & PLANTS
# leaf cards: quads textured with a spray of leaves (media/drive/tex/leaf_*.webp, alpha-tested in three.js)
CARD = {k: M(f'card_{k}', c, 0.8) for k, c in (('fir', '#e8f0ea'), ('firsnow', '#e8f0ea'), ('ginkgo', '#ffffff'), ('plane', '#ffffff'), ('poplar', '#ffffff'),
                                               ('blossom', '#ffffff'), ('palm', '#f2f6ee'), ('bush', '#e6eee0'), ('shrub', '#d8cfae'))}

def _perp(d):
    up = Vector((0, 0, 1)) if abs(d.z) < 0.95 else Vector((1, 0, 0))
    return d.cross(up).normalized()

class Cards:
    """collects leaf cards for one tree into one bmesh per card material"""
    def __init__(self): self.bms = {}
    def add(self, key, base, d, w, L, roll=0.0, droop=0.0, seg=3, along='v', side=None):
        bm, uvl = self.bms.get(key) or self.bms.setdefault(key, (lambda b: (b, b.loops.layers.uv.verify()))(bmesh.new()))
        d = Vector(d).normalized(); base = Vector(base)
        if side is None: side = Matrix.Rotation(roll, 3, d) @ _perp(d)
        else: side = Vector(side).normalized()
        rows = []
        for i in range(seg + 1):
            t = i / seg
            c = base + d * (L * t) - Vector((0, 0, droop * t * t))
            rows.append((bm.verts.new(c - side * w / 2), bm.verts.new(c + side * w / 2), t))
        for i in range(seg):
            (a0, a1, t0), (b0, b1, t1) = rows[i], rows[i + 1]
            f = bm.faces.new([a0, a1, b1, b0])
            for l, (u, v) in zip(f.loops, [(0, t0), (1, t0), (1, t1), (0, t1)]):
                l[uvl].uv = (u, 0.03 + v * 0.95) if along == 'v' else (0.03 + v * 0.95, u)
    def cluster(self, key, c, R, n, size, rng, up=0.3, droop=0.15):
        """a shell of cards round a cluster centre, each facing outward (so from outside you see leaves, not card edges)"""
        c = Vector(c)
        for k in range(n):
            z = rng.uniform(-0.45, 1.0); a = rng.uniform(0, TAU); r = math.sqrt(max(0, 1 - z * z))
            d = Vector((math.cos(a) * r, math.sin(a) * r, z + up * 0.5)).normalized()
            t = _perp(d); t = Matrix.Rotation(rng.uniform(0, TAU), 3, d) @ t
            t = (t + Vector((0, 0, 0.6)) + d * 0.35).normalized()      # sprays grow upward and a little outward
            sd = d.cross(t).normalized()
            L = size * rng.uniform(0.85, 1.1)
            base = c + d * (R * rng.uniform(0.45, 0.85)) - t * L * 0.45
            self.add(key, base, t, size * rng.uniform(0.85, 1.05), L, side=sd, droop=droop * size)

    def objects(self, name):
        out = []
        for key, (bm, _) in self.bms.items():
            me = bpy.data.meshes.new(f'{name}_{key}'); bm.to_mesh(me); bm.free()
            o = bpy.data.objects.new(f'{name}_{key}', me); CUR[0].objects.link(o); me.materials.append(CARD[key])
            out.append(o)
        self.bms = {}
        return out

def smooth_blob(r, loc, mat, scale=(1, 1, 0.8), seed=0, noise=0.25):
    o = sphere(r, loc, mat, sub=2, noise=noise, scale=scale, seed=seed)
    for p in o.data.polygons: p.use_smooth = True
    return o

def limb(p0, p1, r0, r1, mat, n=7):
    p0, p1 = Vector(p0), Vector(p1); d = p1 - p0
    o = cyl(r0, d.length, (0, 0, 0), mat, n=n, r2=r1, cap=False)
    o.rotation_mode = 'QUATERNION'; o.rotation_quaternion = Vector((0, 0, 1)).rotation_difference(d.normalized())
    o.location = (p0 + p1) / 2
    for p in o.data.polygons: p.use_smooth = True
    return o

def trunk(h, r, mat, lean=(0, 0), n=9, flare=1.5):
    """a tapering trunk with a slight bend and a root flare; returns (objects, top point)"""
    pts = []; ps = []
    for k in range(6):
        t = k / 5
        pts.append(Vector((lean[0] * t * t, lean[1] * t * t, h * t)))
    for k in range(5):
        r0 = r * (1 - 0.45 * k / 5) * (flare if k == 0 else 1); r1 = r * (1 - 0.45 * (k + 1) / 5)
        ps.append(limb(pts[k] - Vector((0, 0, 0.05 if k == 0 else 0.02)), pts[k + 1] + Vector((0, 0, 0.02)), r0, r1, mat, n))
    return ps, pts[-1]

def branches(rng, start, d, L, r, depth, mat, tips, spread=0.55, up=0.25, kids=2):
    """recursive limbs; collects tip positions (and their direction) for the leaf clusters"""
    d = Vector(d).normalized(); end = Vector(start) + d * L
    ps = [limb(start, end, r, r * 0.62, mat, 6 if depth else 5)]
    if depth == 0: tips.append((end, d)); return ps
    for k in range(kids):
        a = rng.uniform(0, TAU)
        nd = (d + Vector((math.cos(a), math.sin(a), 0)) * spread + Vector((0, 0, up))).normalized()
        at = Vector(start) + d * L * rng.uniform(0.55, 0.95)
        ps += branches(rng, at, nd, L * rng.uniform(0.55, 0.75), r * 0.6, depth - 1, mat, tips, spread, up, kids)
    tips.append((end, d))
    return ps

def make_trees():
    CUR[0] = coll('trees')
    R = random.Random(21)
    # Yunnan fir: whorls of drooping branches carrying flat sprays, a dark core for volume; the snow variant whitens on top in the shader
    for name, key in (('fir', 'fir'), ('fir_snow', 'firsnow')):
        C = Cards(); ps, top = trunk(4.5, 0.17, P['bark'], n=8, flare=1.6)
        z = 0.75; w = 0
        while z < 4.2:
            t = (z - 0.75) / 3.45
            L = 0.3 + 1.35 * (1 - t) ** 0.85
            for k in range(5):
                a = w * 2.39996 + k / 5 * TAU + R.uniform(-0.25, 0.25)
                d = Vector((math.cos(a), math.sin(a), -0.12 - 0.15 * (1 - t)))
                if L > 0.6: ps.append(limb((0, 0, z), Vector((0, 0, z)) + (d.normalized() - Vector((0, 0, 0.12))).normalized() * L * 0.55, 0.035, 0.012, P['bark'], 4))
                C.add(key, (0, 0, z), d, L * 0.85, L * 1.05, R.uniform(-0.6, 0.6), 0.3 * L)
                C.add(key, Vector((0, 0, z + 0.05)) + d.normalized() * L * 0.2, d + Vector((0, 0, 0.35)), L * 0.65, L * 0.8, R.uniform(0.7, 1.2) * R.choice((1, -1)), 0.15 * L)
            z += 0.27; w += 1
        for k in range(3):
            C.add(key, (0, 0, 4.0), (math.cos(k * 2.1) * 0.25, math.sin(k * 2.1) * 0.25, 1), 0.45, 0.75, k * 1.05)
        core = cyl(0.62, 3.0, (0, 0, 2.2), P['fir2'], n=10, r2=0.04)
        for p in core.data.polygons: p.use_smooth = True
        ps.append(core)
        finish(join(ps + C.objects(name), name), name)
    # palm: ringed, leaning trunk; long drooping frond cards; coconuts
    C = Cards(); lean = 0.18
    ps, _ = trunk(3.85, 0.17, P['bark_light'], lean=(lean * 3, 0), n=10, flare=1.35)
    for k in range(1, 18):   # leaf-scar rings, tight and subtle
        t = k / 18; z = 3.8 * t; xo = lean * 3 * t * t
        r = 0.17 * (1 - 0.45 * t) * 1.06
        ring = cyl(r, 0.05, (xo, 0, z), P['bark'], n=10, r2=r * 0.92)
        for p in ring.data.polygons: p.use_smooth = True
        ps.append(ring)
    ps.append(smooth_blob(0.24, (lean * 3, 0, 3.75), P['bark'], scale=(1, 1, 1.2), seed=3))
    top = Vector((lean * 3, 0, 3.8))
    for k in range(12):
        a = k / 12 * TAU + R.uniform(-0.15, 0.15); el = R.uniform(-0.05, 0.55) if k % 2 else R.uniform(0.25, 0.8)
        d = Vector((math.cos(a), math.sin(a), el))
        C.add('palm', top, d, 1.05, 2.3, R.uniform(-0.25, 0.25), 0.9, seg=4, along='u')
    for k in range(3): ps.append(sphere(0.11, (top[0] + math.cos(k * 2.1) * 0.15, math.sin(k * 2.1) * 0.15, top[2] - 0.15), P['coconut'], sub=1))
    finish(join(ps + C.objects('palm'), 'palm'), 'palm')
    # Beijing ginkgo (ascending limbs, autumn gold), Nanjing plane tree (broad crown, mottled bark), Gansu poplar, Yunnan blossom
    def broadleaf(name, key, core_mat, trunk_h, trunk_r, bark, limbs, limb_len, limb_tilt, depth, cl_R, cl_n, cl_size, core=0.5, flare=1.4):
        C = Cards(); ps, top = trunk(trunk_h, trunk_r, bark, lean=(R.uniform(-0.15, 0.15), R.uniform(-0.15, 0.15)), flare=flare)
        tips = []
        for k in range(limbs):
            a = k / limbs * TAU + R.uniform(-0.3, 0.3)
            d = Vector((math.cos(a) * math.sin(limb_tilt), math.sin(a) * math.sin(limb_tilt), math.cos(limb_tilt)))
            ps += branches(R, top - Vector((0, 0, R.uniform(0, 0.4))), d, limb_len * R.uniform(0.85, 1.1), trunk_r * 0.55, depth, bark, tips)
        ps.append(limb(top - Vector((0, 0, 0.2)), top + Vector((0, 0, limb_len * 0.9)), trunk_r * 0.5, trunk_r * 0.2, bark, 6))
        tips.append((top + Vector((0, 0, limb_len * 0.95)), Vector((0, 0, 1))))
        for (p, d) in tips:
            C.cluster(key, p, cl_R, cl_n, cl_size, R)
            if core: ps.append(smooth_blob(cl_R * core, p + Vector((0, 0, -0.08)), core_mat, seed=int(p.x * 100)))
        finish(join(ps + C.objects(name), name), name)
    broadleaf('ginkgo', 'ginkgo', P['ginkgo'], 2.2, 0.17, P['bark'], 4, 1.5, 0.55, 1, 0.65, 11, 1.05, core=0.34)
    broadleaf('plane', 'plane', P['plane'], 2.1, 0.22, P['bark_light'], 4, 1.7, 0.85, 1, 0.85, 12, 1.3, core=0.42, flare=1.6)
    broadleaf('blossom', 'blossom', P['blossom'], 0.9, 0.12, P['bark'], 3, 0.9, 0.7, 1, 0.5, 9, 0.85, core=0.4, flare=1.3)
    # poplar: a tall white trunk with short ascending branches all the way up, a narrow crown
    C = Cards(); ps, top = trunk(5.6, 0.14, P['bark_white'], n=8)
    z = 1.9
    while z < 5.4:
        for k in range(3):
            a = R.uniform(0, TAU); d = Vector((math.cos(a) * 0.35, math.sin(a) * 0.35, 1))
            L = 0.9 * (1 - (z - 1.9) / 4.5) + 0.35
            ps.append(limb((0, 0, z), Vector((0, 0, z)) + d.normalized() * L * 0.7, 0.04, 0.015, P['bark_white'], 4))
            C.cluster('poplar', Vector((0, 0, z)) + d.normalized() * L * 0.6, 0.35, 3, 0.9, R, up=1.2, droop=0.05)
        z += 0.42
    for k, (zz, r) in enumerate([(2.7, 0.5), (3.7, 0.48), (4.6, 0.38)]): ps.append(smooth_blob(r * 0.5, (0, 0, zz), P['fir2'], scale=(1, 1, 1.6), seed=k + 3))
    finish(join(ps + C.objects('poplar'), 'poplar'), 'poplar')
    # small plants: a bush and a dry scrub (cards round a small dark core)
    C = Cards(); ps = []
    for i, (dx, dy) in enumerate([(0, 0), (0.45, 0.2), (-0.35, 0.3)]):
        ps.append(smooth_blob(0.3, (dx, dy, 0.28), P['bush'], scale=(1, 1, 0.75), seed=i + 20))
        C.cluster('bush', (dx, dy, 0.25), 0.4, 7, 0.75, R, up=0.6, droop=0.05)
    finish(join(ps + C.objects('bush'), 'bush'), 'bush')
    C = Cards(); ps = []
    for i, (dx, dy) in enumerate([(0, 0), (0.25, 0.15), (-0.2, 0.2)]):
        ps.append(smooth_blob(0.18, (dx, dy, 0.12), P['shrub'], scale=(1, 1, 0.6), seed=i))
        C.cluster('shrub', (dx, dy, 0.08), 0.25, 5, 0.5, R, up=0.8, droop=0.02)
    finish(join(ps + C.objects('shrub'), 'shrub'), 'shrub')
    ps = []
    for k in range(9):
        a = k / 9 * TAU
        b = box(0.04, 0.02, 0.5, (math.cos(a) * 0.08, math.sin(a) * 0.08, 0.22), P['tuft'], rot=(math.sin(a) * 0.5, -math.cos(a) * 0.5, 0))
        ps.append(b)
    finish(join(ps, 'tuft'), 'tuft')
    ps = []
    for k in range(12):
        a = rnd.random() * TAU; r = rnd.random() * 0.3; h = 1.1 + rnd.random() * 0.8
        ps.append(box(0.04, 0.02, h, (math.cos(a) * r, math.sin(a) * r, h / 2), P['reed'], rot=(rnd.random() * 0.2 - 0.1, rnd.random() * 0.2 - 0.1, a)))
        if k % 3 == 0: ps.append(box(0.07, 0.07, 0.22, (math.cos(a) * r, math.sin(a) * r, h + 0.05), P['wood_dark']))
    finish(join(ps, 'reeds'), 'reeds')


# ================================================================== PROPS
def make_props():
    CUR[0] = coll('props'); BEVEL[0] = 0.02
    # round hay bale (lies on its side; axis along Y)
    hb = [cyl(0.62, 1.1, (0, 0, 0), P['hay'], n=18, rot=(math.pi / 2, 0, 0), bevel=0.08)]
    hb.append(cyl(0.5, 1.12, (0, 0, 0), P['hay_end'], n=18, rot=(math.pi / 2, 0, 0)))
    hb.append(cyl(0.63, 0.3, (0, 0, 0), P['wrap'], n=18, rot=(math.pi / 2, 0, 0)))
    finish(join(hb, 'haybale'), 'haybale')
    # square bale
    finish(join([box(1.1, 0.55, 0.45, (0, 0, 0), P['hay'], bevel=0.05), box(1.12, 0.04, 0.47, (0.25, 0, 0), P['rope']), box(1.12, 0.04, 0.47, (-0.25, 0, 0), P['rope'])], 'haybale_sq'), 'haybale_sq')
    # Chinese lantern (hangs from its origin)
    lt = [uvsphere(0.32, (0, 0, -0.42), P['lantern'], seg=14, ring=9, scale=(1, 1, 0.82))]
    lt += [cyl(0.18, 0.08, (0, 0, -0.14), P['gold'], n=12), cyl(0.18, 0.08, (0, 0, -0.7), P['gold'], n=12), cyl(0.012, 0.12, (0, 0, -0.04), P['gold'], n=5)]
    lt += [box(0.02, 0.02, 0.3, (math.cos(k) * 0.05, math.sin(k) * 0.05, -0.88), P['red_dark']) for k in range(6)]
    o = join(lt, 'lantern'); finish(o, 'lantern')
    # Bund lamp post with a globe
    lp = [box(0.42, 0.42, 0.12, (0, 0, 0.06), P['granite']), cyl(0.16, 0.45, (0, 0, 0.34), P['iron'], n=16, r2=0.11), cyl(0.13, 0.06, (0, 0, 0.6), P['iron'], n=16),
          cyl(0.055, 2.7, (0, 0, 1.95), P['iron'], n=12, r2=0.04), cyl(0.07, 0.08, (0, 0, 1.2), P['iron'], n=12), cyl(0.08, 0.1, (0, 0, 3.28), P['iron'], n=12)]
    for k in range(2):
        sx = k * 2 - 1
        lp.append(cyl(0.02, 0.56, (sx * 0.28, 0, 3.3), P['iron'], n=6, rot=(0, math.pi / 2, 0)))
        lp.append(cyl(0.045, 0.05, (sx * 0.56, 0, 3.33), P['iron'], n=12))           # globe collar
    lp.append(cyl(0.05, 0.06, (0, 0, 3.4), P['iron'], n=12)); lp.append(cyl(0.012, 0.16, (0, 0, 3.64), P['iron'], n=6))
    finish(join(lp, 'lamp_bund'), 'lamp_bund')
    named(join([uvsphere(0.1, (s * 0.56, 0, 3.45), P['lamp'], seg=16, ring=10) for s in (1, -1)] + [uvsphere(0.12, (0, 0, 3.52), P['lamp'], seg=16, ring=10)], 'lamp_bund__lamp'), 'lamp_bund__lamp')
    # modern street lamp
    finish(join([cyl(0.07, 4.0, (0, 0, 2.0), P['steel'], n=8), box(0.9, 0.12, 0.06, (0.4, 0, 4.0), P['steel'])], 'lamp_modern'), 'lamp_modern')
    named(box(0.5, 0.1, 0.03, (0.6, 0, 3.96), P['lamp']), 'lamp_modern__lamp')
    # Tibetan chorten (Shangri-La white stupa)
    st = [box(2.2, 2.2, 0.5, (0, 0, 0.25), P['stupa'], bevel=0.03), box(1.8, 1.8, 0.4, (0, 0, 0.7), P['stupa']), box(1.4, 1.4, 0.35, (0, 0, 1.07), P['stupa'])]
    st.append(cyl(0.8, 0.25, (0, 0, 1.37), P['stupa'], n=16))
    st.append(uvsphere(0.75, (0, 0, 1.5), P['stupa'], seg=16, ring=10, half=True, scale=(1, 1, 1.15)))
    st.append(box(0.6, 0.6, 0.35, (0, 0, 2.5), P['stupa']))
    st.append(cyl(0.22, 1.1, (0, 0, 3.2), P['gold'], n=10, r2=0.08))
    for k in range(6): st.append(cyl(0.25 - k * 0.025, 0.05, (0, 0, 2.75 + k * 0.17), P['gold'], n=10))
    st.append(sphere(0.12, (0, 0, 3.85), P['gold'], sub=1))
    finish(join(st, 'stupa'), 'stupa')
    col_box('stupa', 0, 2.2, 2.2, 1.4, (0, 0, 0.7)); col_cyl('stupa', 1, 0.8, 1.6, (0, 0, 2.0))
    # Naxi house (Lijiang): plaster walls, wooden frame, grey tiled roof
    nh = [box(3.2, 2.4, 1.8, (0, 0, 0.9), P['plaster']), box(3.24, 2.44, 0.4, (0, 0, 0.2), P['brick_grey'])]
    for sx in (-1.4, -0.47, 0.47, 1.4): nh.append(box(0.14, 0.06, 1.8, (sx, -1.22, 0.9), P['wood_dark']))
    nh.append(box(0.8, 0.06, 1.2, (0, -1.23, 0.6), P['wood']))
    nh.append(roof(2.2, 1.7, 1.0, 0.35, P['tile_grey'], (0, 0, 1.8), ridge=1.1))
    finish(join(nh, 'naxi_house'), 'naxi_house'); col_box('naxi_house', 0, 3.2, 2.4, 2.6, (0, 0, 1.3))
    # Nile felucca
    fe = [frustum(1.6, 0.45, 2.0, 0.6, 0.45, P['wood'], (0, 0, 0)), box(3.9, 1.1, 0.06, (0, 0, 0.42), P['wood_dark'])]
    fe.append(cyl(0.05, 3.2, (0.6, 0, 2.0), P['wood_dark'], n=6))
    sail = poly([(0.65, 0, 0.6), (0.65, 0, 3.5), (-1.9, 0, 0.75)], [(0, 1, 2)], P['sail']); fe.append(sail)
    fe.append(cyl(0.03, 3.6, (-0.3, 0, 2.1), P['wood_dark'], n=5, rot=(0, -0.95, 0)))
    finish(join(fe, 'felucca'), 'felucca')
    # Huangpu ferry
    fr = [frustum(2.3, 0.9, 2.6, 1.0, 0.6, P['white'], (0, 0, 0)), box(5.0, 1.9, 0.12, (0, 0, 0.62), P['red_dark']), box(2.6, 1.6, 0.9, (-0.4, 0, 1.1), P['white'], bevel=0.05)]
    fr.append(box(2.62, 1.62, 0.25, (-0.4, 0, 1.2), P['glass'])); fr.append(cyl(0.18, 0.7, (-1.2, 0, 1.9), P['red'], n=10))
    finish(join(fr, 'ferry'), 'ferry')
    # hot-air balloon (origin at the basket)
    bl = []
    env = uvsphere(2.2, (0, 0, 4.6), P['balloon_a'], seg=12, ring=10, scale=(1, 1, 1.18))
    me = env.data
    me.materials.append(P['balloon_b']); me.materials.append(P['balloon_c']); me.materials.append(P['balloon_d'])
    for p in me.polygons:
        a = math.atan2(p.center.y, p.center.x); p.material_index = int((a + math.pi) / TAU * 12) % 4
    bl.append(env)
    bl.append(cyl(0.7, 0.8, (0, 0, 2.15), P['balloon_d'], n=12, r2=1.4))
    bl.append(box(0.8, 0.8, 0.6, (0, 0, 0.3), P['wood'], bevel=0.05))
    for sx in (1, -1):
        for sy in (1, -1): bl.append(cyl(0.015, 1.4, (sx * 0.45, sy * 0.45, 1.25), P['rope'], n=4, rot=(sy * 0.25, -sx * 0.25, 0)))
    finish(join(bl, 'balloon'), 'balloon')
    named(sphere(0.18, (0, 0, 1.05), P['amber'], sub=1), 'balloon__glow')
    # rubble: a few broken stones for wall bases and road edges
    rb = []
    for k in range(6):
        a = k * 1.9; r = 0.12 + (k % 3) * 0.12
        o = sphere(0.09 + (k % 3) * 0.05, (math.cos(a) * r, math.sin(a) * r, 0.03), P['rock'] if k % 2 else P['rock_red'] if k % 3 == 0 else P['rock'], sub=2, noise=0.5, scale=(1.3, 1, 0.6), seed=k + 70)
        rb.append(o)
    finish(join(rb, 'rubble'), 'rubble')
    # bench, cone, crate, barrier
    finish(join([box(1.6, 0.42, 0.06, (0, 0, 0.45), P['wood']), box(1.6, 0.06, 0.36, (0, 0.2, 0.68), P['wood'])] + [box(0.06, 0.42, 0.45, (s * 0.7, 0, 0.22), P['iron']) for s in (1, -1)], 'bench'), 'bench')
    finish(join([cyl(0.3, 0.75, (0, 0, 0.375), P['cone'], n=14, r2=0.04), box(0.6, 0.6, 0.05, (0, 0, 0.025), P['cone']), cyl(0.2, 0.12, (0, 0, 0.32), P['white'], n=14, r2=0.15)], 'cone'), 'cone')
    cr = [box(0.8, 0.8, 0.8, (0, 0, 0), P['crate'], bevel=0.03)]
    for ax in range(3):
        for s in (1, -1):
            loc = [0, 0, 0]; loc[ax] = s * 0.4; size = [0.84, 0.84, 0.84]; size[ax] = 0.04
            cr.append(box(size[0] if ax != 0 else 0.03, size[1] if ax != 1 else 0.03, 0.12 if ax != 2 else 0.03, tuple(loc), P['wood_dark']))
    finish(join(cr, 'crate'), 'crate')
    # gallery stand: a slim black easel with a ledge (the photo is added by the game)
    sd = [box(0.06, 0.06, 2.4, (0, 0.05, 1.2), P['stand'], rot=(0.1, 0, 0)), box(0.06, 0.06, 2.4, (0.0, -0.3, 1.1), P['stand'], rot=(-0.28, 0, 0))]
    sd.append(box(1.8, 0.18, 0.06, (0, 0.12, 0.55), P['stand']))
    finish(join(sd, 'stand'), 'stand')
    # stop platform: a low disc with a bevelled edge
    finish(join([cyl(6.0, 0.18, (0, 0, 0.09), P['concrete'], n=64, bevel=0.05), cyl(5.96, 1.6, (0, 0, -0.8), P['concrete'], n=64)], 'platform'), 'platform')   # a deep footing so slopes never show a gap
    # prayer-flag pole (flags are drawn by the game)
    finish(join([cyl(0.07, 5.0, (0, 0, 2.5), P['wood'], n=6), sphere(0.12, (0, 0, 5.05), P['gold'], sub=1)], 'flagpole'), 'flagpole')
    # camel (Giza) and yak (Yunnan): simple, chunky
    cm = [box(1.3, 0.5, 0.55, (0, 0, 1.25), P['camel'], bevel=0.12, seg=2), sphere(0.33, (0.05, 0, 1.62), P['camel'], sub=1, scale=(1.3, 1, 0.9))]
    cm += [box(0.14, 0.14, 1.0, (sx * 0.45, sy * 0.18, 0.5), P['camel']) for sx in (1, -1) for sy in (1, -1)]
    cm += [box(0.16, 0.16, 0.75, (0.78, 0, 1.55), P['camel'], rot=(0, 0.6, 0)), box(0.4, 0.2, 0.22, (1.05, 0, 1.92), P['camel'], bevel=0.05)]
    cm += [box(0.8, 0.56, 0.08, (0, 0, 1.53), P['cloth_red'])]
    finish(join(cm, 'camel'), 'camel')
    yk = [box(1.4, 0.7, 0.75, (0, 0, 0.95), P['yak'], bevel=0.2, seg=2), sphere(0.45, (0.1, 0, 1.25), P['yak'], sub=1, scale=(1.2, 1, 0.9))]
    yk += [box(0.16, 0.16, 0.6, (sx * 0.5, sy * 0.24, 0.3), P['yak']) for sx in (1, -1) for sy in (1, -1)]
    yk += [box(0.4, 0.38, 0.4, (0.85, 0, 0.92), P['yak'], bevel=0.08)]
    yk += [cyl(0.04, 0.35, (0.9, sy * 0.25, 1.15), P['horn'], n=6, r2=0.01, rot=(sy * 0.9, 0, 0)) for sy in (1, -1)]
    yk += [box(1.3, 0.76, 0.3, (0, 0, 0.6), P['yak'])]
    finish(join(yk, 'yak'), 'yak')

# ================================================================== LANDMARKS
def make_landmarks():
    CUR[0] = coll('landmarks'); BEVEL[0] = 0.035
    # ---------- Giza: stepped pyramids and the Sphinx
    def pyramid(name, base, h, steps, cap=None):
        ps = []
        for k in range(steps):
            t0, t1 = k / steps, (k + 1) / steps
            b0 = base * (1 - t0); b1 = base * (1 - t1)
            ps.append(frustum(b0, b0, b1 + (b0 - b1) * 0.35, b1 + (b0 - b1) * 0.35, h / steps, P['sandstone'] if k % 2 else P['limestone'], (0, 0, h * t0)))
        ps.append(frustum(base * 0.02 + 0.3, base * 0.02 + 0.3, 0.02, 0.02, h * 0.06, cap or P['limestone'], (0, 0, h * 0.97)))
        o = join(ps, name); finish(o, name)
        col_box(name, 0, base * 1.6, base * 1.6, h * 0.4, (0, 0, h * 0.2))
        col_box(name, 1, base * 0.9, base * 0.9, h * 0.4, (0, 0, h * 0.55))
        col_box(name, 2, base * 0.35, base * 0.35, h * 0.3, (0, 0, h * 0.82))
    pyramid('pyramid_big', 9, 11, 14)
    pyramid('pyramid_mid', 7, 8.6, 11, P['white'])
    pyramid('pyramid_small', 4.5, 5.4, 8)
    sp = [box(4.2, 1.5, 1.1, (-0.4, 0, 0.55), P['limestone'], bevel=0.25, seg=2), box(2.0, 1.4, 0.9, (-1.2, 0, 1.3), P['limestone'], bevel=0.35, seg=2)]
    sp += [box(1.6, 0.45, 0.4, (2.2, sy * 0.45, 0.2), P['limestone'], bevel=0.12) for sy in (1, -1)]
    sp += [box(0.8, 1.2, 1.1, (1.2, 0, 1.25), P['sandstone'], bevel=0.12)]
    sp += [frustum(0.55, 0.85, 0.4, 0.55, 0.9, P['limestone'], (1.15, 0, 1.35)), box(0.5, 0.6, 0.65, (1.38, 0, 1.75), P['sandstone'], bevel=0.12)]
    sp += [box(0.3, 1.0, 0.5, (1.25, 0, 1.0), P['limestone'])]
    finish(join(sp, 'sphinx'), 'sphinx'); col_box('sphinx', 0, 5.6, 1.6, 2.4, (0, 0, 1.2))
    # ---------- Luxor: pylon, papyrus colonnade, obelisk, ram sphinx
    py = []
    for sy in (1, -1): py.append(frustum(1.3, 3.4, 1.0, 2.8, 7.2, P['sandstone'], (0, sy * 3.9, 0)))
    py.append(box(1.6, 1.6, 5.0, (0, 0, 2.5), P['sandstone']));
    boolean(py[-1], box(2.0, 1.2, 3.4, (0, 0, 1.7), P['trim']))
    for sy in (1, -1):
        tilt = math.atan2(0.3, 7.2)
        for gy in (-1.3, 1.3):   # the recessed flagpole grooves
            py.append(box(0.1, 0.3, 5.6, (1.3 - 0.3 * 3.0 / 7.2 + 0.02, sy * 3.9 + gy, 3.0), P['hieroglyph'], rot=(0, -tilt, 0)))
        py.append(frustum(1.02, 2.82, 1.25, 3.1, 0.55, P['sandstone'], (0, sy * 3.9, 7.15)))            # cavetto cornice
        py.append(box(2.5, 6.2, 0.12, (0, sy * 3.9, 7.75), P['limestone']))
    finish(join(py, 'luxor_pylon'), 'luxor_pylon')
    for sy in (1, -1): col_box('luxor_pylon', 0 if sy > 0 else 1, 2.6, 6.4, 7.2, (0, sy * 3.9, 3.6))
    col_box('luxor_pylon', 2, 1.6, 1.6, 1.6, (0, 0, 4.2))
    co = []
    for k in range(4):
        for sy in (1, -1):
            x, y = k * 2.4, sy * 1.7
            co += [cyl(0.42, 0.25, (x, y, 0.12), P['sandstone'], n=12), cyl(0.38, 4.0, (x, y, 2.25), P['limestone'], n=12, r2=0.34)]
            co += [cyl(0.36, 0.8, (x, y, 4.65), P['sandstone'], n=12, r2=0.62)]
            for b in range(3): co.append(cyl(0.385 - b * 0.01, 0.06, (x, y, 1.0 + b * 1.1), P['hieroglyph'], n=12))
    for sy in (1, -1): co.append(box(8.6, 0.9, 0.6, (3.6, sy * 1.7, 5.35), P['sandstone']))
    for k in range(4): co.append(box(0.9, 4.3, 0.5, (k * 2.4, 0, 5.85), P['sandstone']))
    finish(join(co, 'luxor_colonnade'), 'luxor_colonnade')
    for k in range(4):
        for sy in (1, -1): col_cyl('luxor_colonnade', k * 2 + (sy > 0), 0.42, 5.0, (k * 2.4, sy * 1.7, 2.5))
    ob = [frustum(0.55, 0.55, 0.32, 0.32, 9.0, P['granite'], (0, 0, 0.6)), frustum(0.32, 0.32, 0.01, 0.01, 0.7, P['gold'], (0, 0, 9.6)), box(1.6, 1.6, 0.6, (0, 0, 0.3), P['sandstone'])]
    for k in range(6): ob.append(box(0.06, 0.4, 0.5, (0.5 - k * 0.025, 0, 1.6 + k * 1.3), P['hieroglyph']))
    finish(join(ob, 'obelisk'), 'obelisk'); col_box('obelisk', 0, 1.2, 1.2, 10, (0, 0, 5))
    rs = [box(1.6, 0.7, 0.6, (0, 0, 0.3), P['sandstone']), box(1.3, 0.5, 0.5, (-0.1, 0, 0.8), P['limestone'], bevel=0.15), box(0.45, 0.4, 0.45, (0.6, 0, 1.15), P['limestone'], bevel=0.1)]
    rs += [cyl(0.12, 0.3, (0.6, sy * 0.25, 1.15), P['limestone'], n=8, rot=(math.pi / 2, 0, 0)) for sy in (1, -1)]
    finish(join(rs, 'ram'), 'ram'); col_box('ram', 0, 1.6, 0.7, 1.4, (0, 0, 0.7))
    # ---------- Cairo: a domed mosque with two pencil minarets, and town houses
    mq = [box(7, 7, 4, (0, 0, 2), P['limestone'], bevel=0.05), box(7.2, 7.2, 0.3, (0, 0, 4.1), P['sandstone'])]
    mq.append(cyl(2.2, 1.0, (0, 0, 4.7), P['limestone'], n=16))
    mq.append(uvsphere(2.4, (0, 0, 5.2), P['tile_grey'], seg=18, ring=12, half=True, scale=(1, 1, 1.05)))
    mq.append(cyl(0.12, 1.2, (0, 0, 8.0), P['gold'], n=6)); mq.append(sphere(0.2, (0, 0, 8.6), P['gold'], sub=1))
    for a in range(4):
        x, y = math.cos(a * math.pi / 2) * 2.9, math.sin(a * math.pi / 2) * 2.9
        mq.append(uvsphere(1.1, (x, y, 4.2), P['tile_grey'], seg=12, ring=8, half=True))
    for sx in (1, -1):
        for sy in (1, -1): mq.append(uvsphere(0.6, (sx * 3.1, sy * 3.1, 4.2), P['tile_grey'], seg=10, ring=6, half=True))
    for sy in (1, -1):
        mq += [cyl(0.42, 12, (-3.2, sy * 3.2, 6), P['limestone'], n=10, r2=0.34), cyl(0.6, 0.25, (-3.2, sy * 3.2, 7.5), P['sandstone'], n=10), cyl(0.55, 0.25, (-3.2, sy * 3.2, 10.6), P['sandstone'], n=10)]
        mq.append(cyl(0.34, 2.4, (-3.2, sy * 3.2, 13.2), P['tile_grey'], n=10, r2=0.01))
    for k in range(5):
        a = box(0.05, 0.8, 1.6, (3.51, -2.4 + k * 1.2, 2.0), P['wood_dark']); mq.append(a)
    finish(join(mq, 'mosque'), 'mosque'); col_box('mosque', 0, 7, 7, 6, (0, 0, 3))
    for sy in (1, -1): col_cyl('mosque', 1 if sy > 0 else 2, 0.5, 14, (-3.2, sy * 3.2, 7))
    for k, (w, d, h, m) in enumerate([(3, 3, 4.2, P['plaster']), (2.6, 3.2, 5.4, P['paint_ochre']), (3.4, 2.8, 3.4, P['plaster'])]):
        hs = [box(w, d, h, (0, 0, h / 2), m)]
        for r in range(int(h // 1.3)):
            for c in (-0.6, 0.6): hs.append(box(0.04, 0.4, 0.5, (w / 2 + 0.01, c, 1.0 + r * 1.3), P['wood_dark']))
        hs.append(cyl(0.3, 0.6, (w * 0.25, d * 0.2, h + 0.3), P['steel'], n=8))
        mz = 1.0 + (int(h // 1.3) - 1) * 1.3
        hs += [box(0.45, 1.4, 1.1, (w / 2 + 0.22, 0, mz), P['wood_dark']), box(0.55, 1.5, 0.12, (w / 2 + 0.25, 0, mz + 0.6), P['wood']), box(0.55, 1.5, 0.1, (w / 2 + 0.25, 0, mz - 0.58), P['wood'])]
        for i in range(6): hs.append(box(0.04, 0.04, 1.0, (w / 2 + 0.46, -0.6 + i * 0.24, mz), P['wood']))
        for i in range(int(w / 0.5)):
            for sy in (1, -1): hs.append(box(0.24, 0.2, 0.3, (-w / 2 + 0.25 + i * 0.5, sy * (d / 2 - 0.05), h + 0.24), m))
        for i in range(int(d / 0.5)):
            for sx in (1, -1): hs.append(box(0.2, 0.24, 0.3, (sx * (w / 2 - 0.05), -d / 2 + 0.25 + i * 0.5, h + 0.24), m))
        hs.append(box(w + 0.1, d + 0.1, 0.18, (0, 0, h), P['sandstone']))
        n = f'cairo_house{k}'; finish(join(hs, n), n); col_box(n, 0, w, d, h, (0, 0, h / 2))
    # ---------- Gansu: crescent spring pavilion (Dunhuang) and a yardang
    pv = [box(5, 4, 0.6, (0, 0, 0.3), P['brick_grey'])]
    for sx in (-1.8, -0.6, 0.6, 1.8):
        for sy in (-1.4, 1.4): pv.append(cyl(0.14, 2.6, (sx, sy, 1.9), P['red'], n=8))
    pv.append(box(4.2, 3.4, 0.35, (0, 0, 3.3), P['red_dark']))
    pv.append(roof(3.1, 2.5, 0.9, 0.45, P['tile_grey'], (0, 0, 3.45), ridge=1.4))
    pv.append(box(2.6, 2.0, 1.4, (0, 0, 4.6), P['red']))
    pv.append(roof(2.2, 1.7, 1.1, 0.4, P['tile_grey'], (0, 0, 5.3), ridge=0.9))
    finish(join(pv, 'pavilion'), 'pavilion'); col_box('pavilion', 0, 5, 4, 6, (0, 0, 3))
    yd = sphere(1, (0, 0, 0), P['rock_red'], sub=3, noise=0.35, seed=5)
    for v in yd.data.vertices:
        v.co.x *= 4.2; v.co.y *= 1.4; v.co.z = max(v.co.z, -0.2) * 2.4
        v.co.z *= 1 - 0.35 * max(0.0, v.co.x / 4.2)
        v.co.y *= 1 + 0.15 * math.sin(v.co.z * 4)
    finish(yd, 'yardang'); col_box('yardang', 0, 7.0, 2.2, 3.4, (0, 0, 1.4))
    # ---------- Yunnan: the golden temple roof (Songzanlin)
    tp = [box(6, 4.4, 3.6, (0, 0, 1.8), P['stupa']), box(6.1, 4.5, 0.5, (0, 0, 3.4), P['red_dark'])]
    for k in range(3):
        for sx in (-2, 0, 2): tp.append(box(0.05, 0.6, 0.9, (3.02, 0, 0) if False else (sx * 0.0 + 3.01, sx, 1.6 + k * 0.0), P['wood_dark']))
    tp.append(box(3.6, 3.0, 1.6, (0, 0, 4.4), P['stupa'])); tp.append(box(3.7, 3.1, 0.35, (0, 0, 5.1), P['red_dark']))
    tp.append(roof(2.6, 2.1, 1.1, 0.35, P['gold'], (0, 0, 5.25), ridge=0.8))
    tp.append(cyl(0.18, 0.9, (0, 0, 6.7), P['gold'], n=8, r2=0.05))
    finish(join(tp, 'temple'), 'temple'); col_box('temple', 0, 6, 4.4, 6, (0, 0, 3))
    # ---------- Beijing: Tiananmen-style gate tower, corner tower, the Egg, a hutong house
    gt = [box(16, 5.4, 4.2, (0, 0, 2.1), P['red']), box(16.4, 5.8, 0.35, (0, 0, 4.3), P['marble'])]
    for k in range(-2, 3):
        boolean(gt[0], box(1.4 if k else 1.8, 6.0, 2.6 if k else 3.0, (k * 3.0, 0, 1.3 if k else 1.5), P['trim']))
    for k in range(-2, 3):
        boolean(gt[0], cyl(0.7 if k else 0.9, 6.0, (k * 3.0, 0, 2.6 if k else 3.0), P['trim'], n=40, rot=(math.pi / 2, 0, 0)))
    for k in range(-2, 3):
        for yf in (2.75, -2.75): gt += arch_frame(k * 3.0, yf, 2.6 if k else 3.0, 0.7 if k else 0.9, P['marble'], w=0.2 if k else 0.26)
    for k in range(-14, 15): gt.append(box(0.12, 0.12, 0.5, (k * 0.55, -2.8, 4.7), P['marble']))
    gt.append(box(16, 0.1, 0.12, (0, -2.8, 4.95), P['marble']))
    gt.append(box(12, 3.8, 3.0, (0, 0, 6.0), P['red']))
    for k in range(-5, 6): gt.append(cyl(0.2, 3.0, (k * 1.15, -2.05, 6.0), P['red_dark'], n=8))
    gt.append(box(12.6, 4.4, 0.4, (0, 0, 7.6), P['green_tile']))
    gt.append(roof(8.2, 3.6, 1.0, 0.5, P['tile_yellow'], (0, 0, 7.75), ridge=6.0))
    gt.append(box(10.4, 2.6, 1.2, (0, 0, 8.9), P['red']))
    gt.append(roof(7.0, 2.6, 2.0, 0.55, P['tile_yellow'], (0, 0, 9.3), ridge=4.6))
    gt.append(box(9.4, 0.3, 0.3, (0, 0, 11.3), P['tile_yellow']))
    for sx in (1, -1): gt.append(box(0.4, 0.4, 0.8, (sx * 4.7, 0, 11.6), P['tile_yellow']))
    finish(join(gt, 'beijing_gate'), 'beijing_gate')
    # gate colliders leave the five archways open
    col_box('beijing_gate', 0, 1.6, 5.4, 4.2, (-7.6, 0, 2.1)); col_box('beijing_gate', 1, 1.6, 5.4, 4.2, (7.6, 0, 2.1))
    for i, k in enumerate((-1.5, -4.5, 1.5, 4.5)): col_box('beijing_gate', 2 + i, 1.4, 5.4, 4.2, (k, 0, 2.1))
    col_box('beijing_gate', 6, 16, 5.4, 1.4, (0, 0, 3.6)); col_box('beijing_gate', 7, 12, 4, 6, (0, 0, 7.5))
    ct = [box(6, 6, 2.2, (0, 0, 1.1), P['brick_grey']), box(6.2, 6.2, 0.25, (0, 0, 2.3), P['marble'])]
    ct.append(box(4, 4, 2.2, (0, 0, 3.5), P['red']))
    for a in range(4):
        r = a * math.pi / 2; x, y = math.cos(r) * 1.8, math.sin(r) * 1.8
        ct.append(box(2.0 if a % 2 == 0 else 1.6, 1.6 if a % 2 == 0 else 2.0, 1.8, (x, y, 3.4), P['red']))
        ct.append(roof(1.6, 1.4, 0.9, 0.45, P['tile_yellow'], (x * 1.2, y * 1.2, 4.4), ridge=0.5))
    ct.append(roof(2.6, 2.6, 1.2, 0.5, P['tile_yellow'], (0, 0, 4.6), ridge=0.0))
    ct.append(roof(1.8, 1.8, 1.5, 0.4, P['tile_yellow'], (0, 0, 5.6), ridge=0.6))
    finish(join(ct, 'corner_tower'), 'corner_tower'); col_box('corner_tower', 0, 6, 6, 6.5, (0, 0, 3.2))
    eg = [uvsphere(5, (0, 0, 0), P['titanium'], seg=32, ring=18, half=True, scale=(1.5, 1.0, 0.62))]
    eg.append(uvsphere(5.02, (0, 0, 0), P['glass_city'], seg=32, ring=18, half=True, scale=(0.35, 1.0, 0.63)))
    finish(join(eg, 'egg'), 'egg'); col_cyl('egg', 0, 5.2, 3.0, (0, 0, 1.5), n=16); col_box('egg', 1, 13, 7, 2.4, (0, 0, 1.2))
    hh = [box(4, 3, 2.2, (0, 0, 1.1), P['brick_grey']), box(1.0, 0.06, 1.5, (0, -1.51, 0.75), P['red']), roof(2.6, 1.9, 0.9, 0.12, P['tile_grey'], (0, 0, 2.2), ridge=1.4)]
    for sx in (-0.9, 0.9): hh.append(box(0.08, 0.3, 0.7, (sx, -1.55, 1.45), P['wood_dark']))
    finish(join(hh, 'hutong'), 'hutong'); col_box('hutong', 0, 4, 3, 3, (0, 0, 1.5))
    # ---------- Nanjing: city wall gate (Zhonghua Men) and Zifeng Tower
    ng = [box(14, 6, 6.5, (0, 0, 3.25), P['brick_grey'])]
    boolean(ng[0], box(2.6, 7, 3.4, (0, 0, 1.7), P['trim'])); boolean(ng[0], cyl(1.3, 7, (0, 0, 3.4), P['trim'], n=40, rot=(math.pi / 2, 0, 0)))
    for yf in (3.05, -3.05): ng += arch_frame(0, yf, 3.4, 1.3, P['brick_dark'], w=0.4, t=0.12)
    for k in range(-12, 13):
        if k % 2 == 0: ng.append(box(0.5, 0.5, 0.5, (k * 0.55, -2.8, 6.75), P['brick_dark']))
    ng.append(box(14, 0.4, 0.3, (0, -2.85, 6.4), P['brick_dark']))
    ng.append(box(6, 3.2, 2.2, (0, 0.6, 7.6), P['red']))
    ng.append(roof(4.4, 2.6, 1.4, 0.45, P['tile_grey'], (0, 0.6, 8.7), ridge=2.6))
    finish(join(ng, 'nanjing_gate'), 'nanjing_gate')
    col_box('nanjing_gate', 0, 5.5, 6, 6.5, (-4.25, 0, 3.25)); col_box('nanjing_gate', 1, 5.5, 6, 6.5, (4.25, 0, 3.25)); col_box('nanjing_gate', 2, 3, 6, 3.0, (0, 0, 5.0))
    wl = [box(16, 5, 5.6, (0, 0, 2.8), P['brick_grey'])]
    for k in range(-14, 15):
        if k % 2 == 0: wl.append(box(0.5, 0.5, 0.5, (k * 0.55, -2.3, 5.85), P['brick_dark']))
    finish(join(wl, 'city_wall'), 'city_wall'); col_box('city_wall', 0, 16, 5, 6, (0, 0, 3))
    zf = []
    for k in range(10):
        r0 = 2.4 - k * 0.16
        zf.append(cyl(r0, 2.2, (0, 0, 1.1 + k * 2.2), P['glass_dark'] if k % 2 else P['glass_city'], n=6, r2=r0 - 0.16))
    zf.append(cyl(0.9, 3.5, (0, 0, 23.7), P['glass_city'], n=6, r2=0.02))
    zf.append(cyl(0.08, 4, (0, 0, 27), P['steel'], n=5))
    finish(join(zf, 'zifeng'), 'zifeng'); col_cyl('zifeng', 0, 2.4, 22, (0, 0, 11), n=6)
    # ---------- Shanghai: Oriental Pearl, Shanghai Tower, Jin Mao, SWFC, a Bund building
    pt = []
    for a in range(3):
        r = a * TAU / 3
        pt.append(cyl(0.45, 9.5, (math.cos(r) * 1.6, math.sin(r) * 1.6, 4.4), P['concrete'], n=8, rot=(math.sin(r) * 0.18, -math.cos(r) * 0.18, 0)))
    pt.append(cyl(0.55, 26, (0, 0, 13), P['concrete'], n=10))
    pt.append(sphere(2.6, (0, 0, 7.6), P['pearl'], sub=2))
    pt.append(sphere(1.7, (0, 0, 17.6), P['pearl'], sub=2))
    pt.append(sphere(0.7, (0, 0, 22.6), P['pearl'], sub=2))
    for z in (3.0, 12.5):
        for a in range(3):
            r = a * TAU / 3; pt.append(sphere(0.6, (math.cos(r) * 2.2, math.sin(r) * 2.2, z), P['pearl'], sub=1))
    pt.append(cyl(0.12, 6, (0, 0, 29), P['steel'], n=6, r2=0.03))
    finish(join(pt, 'pearl_tower'), 'pearl_tower'); col_cyl('pearl_tower', 0, 2.6, 12, (0, 0, 6), n=10); col_cyl('pearl_tower', 1, 0.7, 20, (0, 0, 20), n=8)
    # Shanghai Tower: a twisting, tapering rounded triangle
    bm = bmesh.new(); rings = []; NR = 24; NS = 18
    for k in range(NR + 1):
        t = k / NR; rad = 3.0 * (1 - 0.42 * t) ; tw = t * 2.1
        ring = []
        for s in range(NS):
            a = s / NS * TAU
            rr = rad * (1 + 0.12 * math.cos(3 * a)) * (1 - 0.18 * max(0, math.cos(a - 0.4)) ** 6)
            ring.append(bm.verts.new((math.cos(a + tw) * rr, math.sin(a + tw) * rr, t * 36)))
        rings.append(ring)
    for k in range(NR):
        for s in range(NS): bm.faces.new([rings[k][s], rings[k][(s + 1) % NS], rings[k + 1][(s + 1) % NS], rings[k + 1][s]])
    bm.faces.new(list(reversed(rings[0]))); bm.faces.new(rings[-1])
    st = from_bm(bm, 'sht', P['glass_city'])
    finish(st, 'shanghai_tower'); col_cyl('shanghai_tower', 0, 3.0, 36, (0, 0, 18), n=8)
    jm = []
    for k in range(9):
        w = 2.4 - k * 0.2; h = 3.4 - k * 0.2
        z = sum(3.4 - j * 0.2 for j in range(k))
        jm.append(frustum(w, w, w * 0.9, w * 0.9, h, P['glass_dark'] if k % 2 else P['steel'], (0, 0, z)))
    jm.append(cyl(0.5, 4, (0, 0, 26), P['steel'], n=8, r2=0.03))
    finish(join(jm, 'jinmao'), 'jinmao'); col_box('jinmao', 0, 4.8, 4.8, 24, (0, 0, 12))
    sw = [frustum(3.0, 3.0, 3.0, 0.4, 33, P['glass_city'], (0, 0, 0))]
    boolean(sw[0], frustum(1.2, 2, 1.0, 2, 2.4, P['trim'], (0, 0, 28.4)))
    finish(join(sw, 'swfc'), 'swfc'); col_box('swfc', 0, 6, 6, 30, (0, 0, 15))
    bd = [box(6, 4, 7, (0, 0, 3.5), P['bund']), box(6.2, 4.2, 0.5, (0, 0, 7.0), P['bund_dark']), box(6.2, 4.2, 0.6, (0, 0, 1.2), P['bund_dark'])]
    for r in range(3):
        for c in range(5):
            y, z = -2 + c, 2.5 + r * 1.6
            boolean(bd[0], box(0.3, 0.55, 0.9, (-3.0, y, z), P['trim']))
            bd.append(box(0.06, 0.55, 0.9, (-2.9, y, z), P['glass_dark']))
            bd.append(box(0.18, 0.75, 0.1, (-3.06, y, z - 0.5), P['bund_dark']))            # sill
            bd.append(box(0.14, 0.72, 0.16, (-3.04, y, z + 0.53), P['bund']))               # lintel
            for sy in (1, -1): bd.append(box(0.1, 0.07, 0.95, (-3.03, y + sy * 0.31, z), P['bund']))
    for c in range(4):
        x = -1.5 + c
        bd += [cyl(0.18, 2.6, (-3.25, x, 4.7), P['bund'], n=12), box(0.5, 0.5, 0.18, (-3.25, x, 3.35), P['bund_dark']), box(0.5, 0.5, 0.2, (-3.25, x, 6.05), P['bund_dark'])]
    for z in (1.55, 1.85): bd.append(box(6.12, 4.12, 0.06, (0, 0, z), P['bund_dark']))
    bd.append(box(6.5, 4.5, 0.22, (0, 0, 7.35), P['bund']))
    bd.append(box(2.0, 2.0, 3.0, (0, 0, 8.5), P['bund']))
    bd.append(box(0.06, 1.2, 1.2, (-1.02, 0, 9.0), P['white']))
    bd.append(frustum(1.1, 1.1, 0.4, 0.4, 1.4, P['verdigris'], (0, 0, 10.0)))
    finish(join(bd, 'bund_customs'), 'bund_customs'); col_box('bund_customs', 0, 6, 4, 9, (0, 0, 4.5))
    bd2 = [box(5, 4, 6, (0, 0, 3), P['bund_dark']), box(5.2, 4.2, 0.4, (0, 0, 6.0), P['bund'])]
    for r in range(3):
        for c in range(4):
            y, z = -1.5 + c, 1.6 + r * 1.5
            boolean(bd2[0], box(0.3, 0.6, 1.0, (-2.5, y, z), P['trim']))
            bd2.append(box(0.06, 0.6, 1.0, (-2.4, y, z), P['glass_dark']))
            bd2.append(box(0.18, 0.8, 0.1, (-2.56, y, z - 0.55), P['bund']))
            bd2.append(box(0.14, 0.78, 0.22, (-2.55, y, z + 0.6), P['bund']) if r < 2 else frustum(0.07, 0.42, 0.07, 0.02, 0.28, P['bund'], (-2.55, y, z + 0.52)))
    bd2.append(box(5.4, 4.4, 0.2, (0, 0, 6.3), P['bund']))
    for z in (0.5, 0.9): bd2.append(box(5.08, 4.08, 0.05, (0, 0, z), P['bund']))
    bd2.append(frustum(2.0, 1.6, 0.6, 0.4, 2.0, P['verdigris'], (0, 0, 6.2)))
    finish(join(bd2, 'bund_bank'), 'bund_bank'); col_box('bund_bank', 0, 5, 4, 8, (0, 0, 4))
    for k, (w, h, m) in enumerate([(3.2, 14, P['glass_city']), (2.8, 18, P['glass_dark']), (3.6, 11, P['steel'])]):
        sk = [box(w, w, h, (0, 0, h / 2), m), box(w * 0.7, w * 0.7, 2, (0, 0, h + 1), P['steel'])]
        n = f'tower{k}'; finish(join(sk, n), n); col_box(n, 0, w, w, h, (0, 0, h / 2))
    # ---------- the road: a red barn and a fence
    bn = [box(5, 4, 3, (0, 0, 1.5), P['red']), frustum(2.8, 2.1, 2.8, 0.05, 1.8, P['tile_grey'], (0, 0, 3.0)), box(1.6, 0.06, 2.0, (2.51, 0, 1.0), P['white'], rot=(0, 0, math.pi / 2))]
    finish(join(bn, 'barn'), 'barn'); col_box('barn', 0, 5, 4, 4.5, (0, 0, 2.2))
    fc = [box(0.12, 0.12, 1.1, (x, 0, 0.55), P['wood']) for x in (-1.5, 0, 1.5)] + [box(3.2, 0.06, 0.12, (0, 0, z), P['wood']) for z in (0.45, 0.85)]
    finish(join(fc, 'fence'), 'fence')

# ------------------------------------------------------------------ build, preview, export
make_car(); make_trees(); make_props(); make_landmarks()

def layout(cname):
    """spread a collection's assets on a grid for the preview render"""
    if cname == 'car':
        w = bpy.data.objects['car__wheel']
        for i, (sx, sy) in enumerate(((0.78, 0.7), (0.78, -0.7), (-0.78, 0.7), (-0.78, -0.7))):
            c = w.copy(); c.name = f'prev_wheel{i}'; c.location = (sx, sy, -0.3); CUR[0] = COLL['car']; COLL['car'].objects.link(c)
        w.hide_render = True
        return 3
    objs = [o for o in COLL[cname].objects if '__' not in o.name]
    x = 0.0
    slots = {}
    for o in objs:
        bb = [o.matrix_world @ Vector(c) for c in o.bound_box]
        w = max(v.x for v in bb) - min(v.x for v in bb)
        slots[o.name] = (x + w / 2 + 0.6, 0)
        x += w + 1.2
    for o in COLL[cname].objects:
        base = o.name.split('__')[0]
        if base in slots: o.location = (slots[base][0], 0, 0)
    return x

def preview(cname, path, cam_dist=None):
    for c in COLL.values(): c.hide_render = c.name != cname
    width = layout(cname)
    world = bpy.data.worlds.new('w'); world.use_nodes = True
    world.node_tree.nodes['Background'].inputs[0].default_value = (0.75, 0.8, 0.88, 1); world.node_tree.nodes['Background'].inputs[1].default_value = 0.9
    scene.world = world
    if 'sun' not in bpy.data.objects:
        s = bpy.data.objects.new('sun', bpy.data.lights.new('sun', 'SUN')); scene.collection.objects.link(s)
        s.data.energy = 3.2; s.rotation_euler = (0.9, 0.2, 0.6)
    cam = bpy.data.objects.get('cam') or bpy.data.objects.new('cam', bpy.data.cameras.new('cam'))
    if cam.name not in scene.collection.objects: scene.collection.objects.link(cam)
    cam.data.type = 'ORTHO'
    cam.rotation_euler = (math.radians(64), 0, math.radians(32)); cam.location = (0, 0, 0)
    bpy.context.view_layer.update()
    inv = cam.matrix_world.inverted()
    pts = [inv @ (o.matrix_world @ Vector(c)) for o in COLL[cname].objects if not o.hide_render for c in o.bound_box]
    x0, x1 = min(p.x for p in pts), max(p.x for p in pts); y0, y1 = min(p.y for p in pts), max(p.y for p in pts); z1 = max(p.z for p in pts)
    aspect = 1600 / 560
    cam.data.ortho_scale = max(x1 - x0, (y1 - y0) * aspect) * 1.06
    centre = cam.matrix_world @ Vector(((x0 + x1) / 2, (y0 + y1) / 2, z1 + 20))
    cam.location = centre; cam.data.clip_end = 1000
    scene.camera = cam
    scene.render.engine = 'CYCLES'; scene.cycles.samples = 24; scene.cycles.device = 'CPU'
    scene.render.resolution_x = 1600; scene.render.resolution_y = 560
    scene.render.filepath = path
    bpy.ops.render.render(write_still=True)
    for o in list(COLL[cname].objects):
        if o.name.startswith('prev_'): bpy.data.objects.remove(o, do_unlink=True)
        else: o.location = (0, 0, 0); o.hide_render = '__col' in o.name

def world_uv(o):
    """planar UVs in metres on every face (u along the face, horizontal; v up the face / up the slope),
    so three.js can lay real-scale tiling textures on everything. Leaf-card faces keep their own UVs."""
    me = o.data
    bm = bmesh.new(); bm.from_mesh(me)
    uvl = bm.loops.layers.uv.verify()
    up = Vector((0, 0, 1))
    for f in bm.faces:
        mat = me.materials[f.material_index] if f.material_index < len(me.materials) else None
        if mat and mat.name.startswith('card_'): continue
        n = f.normal
        if n.length < 1e-6: continue
        if abs(n.z) > 0.94: t, b = Vector((1, 0, 0)), Vector((0, 1 if n.z > 0 else -1, 0))
        else: t = up.cross(n).normalized(); b = n.cross(t).normalized()
        for l in f.loops:
            l[uvl].uv = (l.vert.co.dot(t), l.vert.co.dot(b))
    bm.to_mesh(me); bm.free()

def export(cname):
    for o in COLL[cname].objects:
        if o.type == 'MESH' and '__col' not in o.name:
            world_uv(o)
            # smooth shading with sharp edges above 35°: round things read round, boxes stay crisp
            for p in o.data.polygons: p.use_smooth = True
            o.data.set_sharp_from_angle(angle=math.radians(89 if o.name in ('yardang', 'rubble') else 35))   # rocks are smooth all over
    for o in bpy.data.objects: o.select_set(False)
    for o in COLL[cname].objects: o.location = (0, 0, 0); o.select_set(True)
    bpy.ops.export_scene.gltf(filepath=os.path.join(OUT, f'{cname}.glb'), export_format='GLB', use_selection=True, export_apply=True,
                              export_yup=True, export_animations=False, export_cameras=False, export_lights=False, export_extras=False)

for cname in ('car', 'trees', 'props', 'landmarks'):
    if os.environ.get('NOPREVIEW') != '1' and (len(sys.argv) < 2 or cname in sys.argv[1:]): preview(cname, os.path.join(PREV, f'{cname}.png'))
    export(cname)
os.makedirs(os.path.join(ROOT, 'resources'), exist_ok=True)
bpy.ops.wm.save_as_mainfile(filepath=os.path.join(ROOT, 'resources', 'drive.blend'), compress=True)
print('DONE', [f for f in os.listdir(OUT)])
