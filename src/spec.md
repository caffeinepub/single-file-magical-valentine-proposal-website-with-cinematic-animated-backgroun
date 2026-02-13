# Specification

## Summary
**Goal:** Keep the evasive “No” button fully visible/clickable within the viewport across moves and fix the hidden admin login so `akash / 2026edit` can update BF name, GF name, and the main message.

**Planned changes:**
- Adjust the “No” button evasive-move logic in `frontend/index.html` to clamp/reposition its bounding box so it always stays fully inside the current viewport (including after the first move and after viewport resize/rotation), while still evading up to 10 moves.
- Repair the hidden admin UI in `frontend/index.html` so logging in with username `akash` and password `2026edit` unlocks the admin controls, shows a clear English error on wrong credentials, and updates BF/GF names and the main message in the main UI.
- Update backend admin verification in `backend/main.mo` so `isAdmin("2026edit")` returns `true` and admin-gated operations accept `2026edit` and reject other passwords, enabling the hidden admin interface to perform its backend actions.

**User-visible outcome:** The “No” button continues to dodge the cursor up to 10 times but never goes off-screen, and the hidden admin login works with `akash / 2026edit`, allowing immediate updates to the displayed BF name, GF name, and main message.
