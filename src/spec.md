# Specification

## Summary
**Goal:** Fix the “No” button evasion behavior so it stays fully visible/clickable on-screen and the flow reliably completes 7 evasions before revealing the “Yes” button on both desktop and mobile.

**Planned changes:**
- Update the No-button evasion positioning logic in `frontend/index.html` to constrain each new position to the visible viewport safe area so the button never renders partially/fully off-screen.
- Ensure the evasion counter/trigger logic reliably reaches 7 successful evasions and only then reveals the Yes button, consistently across desktop (hover/click) and mobile (tap/touch).

**User-visible outcome:** The No button can be interacted with repeatedly without disappearing or becoming unreachable, it evades 7 times reliably, and the Yes button appears immediately after the 7th evade on desktop and mobile.
