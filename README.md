# X1NG — photographic field

Lusion-inspired rebuild of x1ng.com. Static HTML/CSS/JS — no build step, all libraries vendored locally (works without Google/CDN access).

## Preview

Just double-click `index.html` — the site works straight from disk (fonts and WebGL textures are embedded for that case).
Or serve it: double-click `预览网站.command`, or `python3 -m http.server 8000`.

## After editing JS

Pages load the bundles in `assets/js/build/`. After changing anything in `assets/js/` (titles, series, code), rebuild once:

```bash
bash assets/tools/build.sh   # needs Node.js
```

## Pages

| Page | What it does |
| --- | --- |
| `index.html` | Viewfinder hero (four places, scroll-driven real-time WebGL, click to focus, hold for long exposure), intro, featured series, archive marquee, subjects index, CTA |
| `beneath.html` | The viewfinder hero on its own page |
| `work.html` | All 125 frames: style filters, masonry grid, lightbox (keyboard / swipe), **Field 3D** cylinder view. Deep links: `?style=gold`, `?view=field`, `?p=39` |
| `series.html` | Series index; `series.html?id=yunnan` etc. for each story (Yunnan & Qinghai–Gansu include the travel guides) |
| `raw.html` | RAW → final comparisons with Baidu Netdisk downloads |
| `about.html` | Bio, subjects, contact |

Every page ends with a "keep scrolling" panel that leads into the next page.

## Hero: the viewfinder (home page)

The home page opens inside a camera viewfinder. Four photographs, one person: noon among the hay
bales → afternoon snow at Meili → sunset on the yardang → night under the star trails. Each photo is
shown whole and at full resolution (the person stays small; the landscape stays big).

- **Scroll** moves through the four places. Every scroll position is one fixed frame; scrolling back
  plays it backwards; the chapter ticks on the right jump to a place.
- **The change between places** uses each photo's depth map: the new place replaces the old one from
  the horizon towards you (sky first, then far ridges, then the ground at your feet), with a thin bank
  of mist at the front, while the camera keeps a slow push forward.
- **Pointer** → depth parallax (near things move more). **Click** → tap-to-focus: the AF box jumps to
  the point, the lens racks focus to that depth, the shutter curtain fires and the roll counter ticks
  (36 frames, then it rewinds). **Hold** → long exposure: the frame gathers light, particles streak,
  the shutter readout counts from 1/250 to 30"; release to close the shutter.
- The AF box tracks the person and locks (yellow) when a chapter settles, after a short focus hunt.
- **End of the hero:** the frame shrinks into a print laid on the light page, and the site continues.
- **Per-place effects** (`SCENES` in `assets/js/viewfinder/stage.js`): grade, particles (`chaff`, `snow`,
  `sand`, `stars`), the sun in his hand, and at night the Lusion-style nebula, shaft and rising stones.
- **Files:** `assets/js/viewfinder/{stage,hero,standalone}.js`, photos + depth maps in `media/beneath/`
  (embedded in `assets/js/build/beneath-tex.js` for `file://`), post-processing in `assets/vendor/three-addons/`.
  `beneath.html` shows the hero on its own page.
- **Swap a photo:** put `<id>.webp` and a depth map `<id>-d.png` (white = near) in `media/beneath/`, measure
  the person (`x`, `head`, `feet`, 0–1 image coordinates), edit `SCENES`, regenerate `beneath-tex.js`, run
  `assets/tools/build.sh`.
- Slow machines automatically render at a lower resolution; phones get a portrait crop around the person.
- The "Next page" panel at the bottom of every page no longer jumps automatically: the ring fills as you
  scroll and you click it to continue (the old auto-jump trapped people at the bottom of the page).

## Corridor film (oil-motion baked-video, now on `corridor.html` only)


The earlier home hero was a 40 s, 60 fps looping film: ten self-portraits in landscapes joined by
2.5D zoom-through transitions (depth-map parallax, far-to-near dissolve, person kept at the same spot).
Files: `media/film/corridor-1080p.mp4` (desktop), `corridor-portrait.mp4` (phones), posters, `timeline.json`.
How it was made and how to rebuild or swap in AI transitions: `motion-source/corridor-film/README.md`.

## Hero character (oil-motion, not used on the home page any more)

The photographer in the hero is a **sprite-atlas motion**: 48 pre-rendered frames of a clockwise gaze orbit,
scrubbed by the pointer with oil-motion's damped frame animator (`assets/js/motion/`). Click him to take a shot.
Current frames are a procedural placeholder — see `motion-source/photographer-gaze/README.md` to replace them with AI-generated frames.

## Styles

The archive is curated into seven visual styles (`STYLES` in `assets/js/data.js`; each photo's style is the last field in `photos.js`):
Blue Hour 蓝调城市 · Golden Light 金色时刻 · Wide Open 辽阔 · After Dark 夜与星 · Geometry 几何 · Human Moments 人间 · Living Green 生灵草木.
Deep link: `work.html?style=night`.

## Editing content

- **Photo titles / Chinese titles / places** → `assets/js/photos.js` (one line per photo, in archive order).
- **Series** (which photos, cover, text) → `assets/js/data.js` → `series`. Frames are referenced by number (#1–#125, as shown in the lightbox).
- **3D hero photos** → `heroFrames` in `assets/js/data.js`.
- **Travel guides** → `assets/js/guides.js`.
- **Contact / socials** → `CONTACT` in `assets/js/data.js`.

## Images

`media/s` (640px, grid + WebGL textures), `media/m` (1280px), `media/l` (2400px, lightbox), `media/raw` (RAW comparisons, webp). Generated from `x1ng-refactor/dist/assets/*_full.webp`.
To add a photo: export the three sizes with the same file name into s/m/l, then add a line to `photos.js`.

## Stack

three.js r186 (bundled to `assets/vendor/three.min.js`), GSAP 3 + ScrollTrigger, Lenis smooth scroll, Geist / Geist Mono (OFL).
Motion respects `prefers-reduced-motion`; without WebGL the hero falls back to a static collage and the Field view is disabled.
