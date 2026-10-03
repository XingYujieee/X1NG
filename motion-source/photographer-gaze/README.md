# Hero character — oil-motion kit

What the site shows now is a **placeholder**: the 48 frames were rendered from a
procedural three.js figure (`placeholder/render.html`, `placeholder/shoot.js`) and
packed with oil-motion's own atlas step. The web runtime (`assets/js/motion/`) is the
oil-motion `createFrameAnimator` + CSS sprite renderer, so AI frames drop in unchanged.

## Swap in AI-generated frames (needs a ZenMux API key)

1. Install oil-motion and set up the key on your own machine (the key goes into the macOS keychain; never paste it into chat):
   ```bash
   npx skills add oil-oil/oil-motion
   node "$OIL_MOTION/scripts/credential-ui/src/profile.ts" setup default
   ```
2. Generate the K0 keyframe (looking up, 12 o'clock) from the identity bible + reference photos,
   with a transparent background; then the closed-loop gaze video with `source/prompt.txt`
   (first frame = last frame = K0). Follow oil-motion's Pilot gate before batch work.
3. Chroma-key → loop cleanup → `motion_pipeline.py atlas` with **exactly**:
   `--columns 8 --cell-width 480 --cell-height 640` (and a 270×360 mobile atlas).
   Keep 48 frames with frame 0 = looking up, clockwise order.
4. Replace `media/motion/photographer/motion.webp`, `motion-sm.webp`, `neutral*.webp`.
   If the frame count or grid changes, update `assets/js/motion/photographer.js` and run
   `bash assets/tools/build.sh`.

## Regenerate the placeholder
```bash
cd motion-source/photographer-gaze/placeholder
cp ../../../assets/vendor/three.min.js . && python3 -m http.server 8130 &
node shoot.js 48 480 640 frames/raw      # needs Node + Playwright
```
