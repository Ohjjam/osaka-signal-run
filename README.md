# Osaka travel guide

Public travel guide migrated from the existing Osaka dashboard to GitHub Pages.
Open: https://ohjjam.github.io/osaka-signal-run/

- Map, restaurant menu/rating snapshots, itinerary and travel tips.
- Arrival-first navigation: current-location routing, airport express/Rapi:t comparison, T2 shuttle, step-by-step travel and payment guidance. Live departures remain in Google Maps; on-site dotted segments are explicitly schematic, not street routing.
- Each browser saves its own changes. No shared server or login.
- Local revision history and JSON export are retained; clearing browser data deletes local saves.
- Old-domain browser storage does not transfer automatically. No passport documents or private access codes are included.
- Map tiles, directions and external sources need an internet connection.

The `docs` folder is the complete static site. `migrate.cjs` records the one-time conversion; do not rerun on already converted files.

For updates: `node build.cjs`, `node test-local.cjs`, `node test-move.cjs`. `test-move-browser.cjs` is a silent mobile integration check using the bundled Playwright path from `OSAKA_TEST_NODE_MODULES`.
