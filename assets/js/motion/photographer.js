/* Manifest for the hero character (copied from media/motion/photographer/motion.json,
   inlined so the site also works when opened straight from disk).
   PROTOTYPE: frames are a procedural 3D placeholder rendered in three.js.
   To swap in AI-generated frames, re-run oil-motion's atlas step with the same
   settings (48 frames, clockwise gaze, 12 o'clock first) and update the numbers below. */
export const photographer = {
  label: 'Xing, the photographer, turns to follow your cursor',
  atlas: 'media/motion/photographer/motion.webp',
  atlasSmall: 'media/motion/photographer/motion-sm.webp',
  neutral: 'media/motion/photographer/neutral.webp',
  neutralSmall: 'media/motion/photographer/neutral-sm.webp',
  frameCount: 48,
  columns: 8,
  rows: 6,
  cellWidth: 480,
  cellHeight: 640,
  face: [0.5, 0.21],   // face position inside a cell (0–1), the gaze origin
  parameterSpace: 'circular',   // clockwise gaze orbit, 12 o'clock = frame 0
};
