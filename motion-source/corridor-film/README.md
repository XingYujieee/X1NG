# Corridor film (home hero)

Route: oil-motion **baked-video**, controller **autonomous-playback** (one persistent `<video>`, looping).

Why not AI video? No ZenMux key yet, so the in-between motion is rendered, not generated:
each photo gets a monocular depth map (Depth Anything V2 small, ONNX), and `render.py`
moves a real virtual camera through that depth — near rocks slide faster than far ridges,
the dolly never passes the nearest geometry (no tearing), and the transition is a
depth-ordered dissolve: far → near, person last. Output 60 fps, closed 40 s loop.

## Rebuild
```bash
pip install onnxruntime opencv-python-headless numpy
# 1. src/<n>.png   – the ten photos (largest available original)
# 2. depth/<n>.png – 16-bit depth from Depth Anything V2 (see depth step in README history)
python3 render.py --w 1920 --h 1080 --fps 60 --hold 1.4 --trans 2.6 --out master.mkv
python3 render.py --w 720 --h 1280 --fps 60 --hold 1.4 --trans 2.6 --bias 0.85 --out master-portrait.mkv
```
Then encode `media/film/corridor-1080p.mp4` / `corridor-portrait.mp4` (H.264, yuv420p, faststart, no audio)
and posters. Timeline numbers live in `assets/js/motion/film-timeline.js` + `media/film/timeline.json`.

## Swap in AI transitions later
Use each pair of rest frames (photo k, photo k+1) as oil-motion first/last keyframes, generate the
in-between clip, chain them, and compile with `compile_scroll_video.py --background-owner video`.
The page code does not change as long as the timing (hold 1.4 s + 2.6 s per stop, 10 stops) stays.
