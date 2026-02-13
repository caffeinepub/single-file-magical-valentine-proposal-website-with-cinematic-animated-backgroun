# Specification

## Summary
**Goal:** After the user accepts (“Yes”), show a persistent bottom-right photo frame, and play the uploaded “forever” song as background music after the initial user interaction.

**Planned changes:**
- Update `frontend/index.html` so that clicking “Yes” reveals a small, fixed-position image frame at the bottom-right of the viewport using `IMG_20221213_093702.jpg`, kept visible for the rest of the session and rendered outside the existing buttons/messages area.
- Add background music playback in `frontend/index.html` using the uploaded “forever” audio asset, starting only after the first explicit user interaction that begins the experience (intro/tap-to-start), and continuing while the page remains open with graceful failure if the audio can’t load.

**User-visible outcome:** The page behaves the same until the user starts the experience; then the “forever” song plays in the background, and after pressing “Yes” a small photo frame appears at the bottom-right and stays on-screen until reload.
