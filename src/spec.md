# Specification

## Summary
**Goal:** Make the “No” button reliably evade repeatedly across mobile and desktop, ensure the “Yes” button reveals only after at least 7 evasions, replace the current background audio with a soothing romantic instrumental, and improve overall performance/responsiveness.

**Planned changes:**
- Fix “No” button evasion so it triggers every time (hover/click on desktop, tap/touch on mobile) throughout the proposal flow without becoming non-interactive.
- Ensure each evasion repositions the “No” button fully within the visible viewport (not clipped/off-screen).
- Update proposal logic so the “Yes” button stays hidden until at least the 7th successful evade, consistently across mobile and desktop.
- Replace background audio with a soothing romantic instrumental, starting only after “Tap to Start ✨” with a smooth fade-in and comfortable default volume.
- Optimize animation/rendering and interaction handling for smooth performance on mobile and PC (including efficient resize handling and preventing touch interactions from breaking the experience).

**User-visible outcome:** On both mobile and desktop, the “No” button keeps dodging reliably at least 7 times before the “Yes” button appears, the page remains smooth and responsive, and the background audio is a calmer romantic instrumental that starts gently after the user taps/clicks to begin.
