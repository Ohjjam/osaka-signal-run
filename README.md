# Osaka travel guide

Public travel guide migrated from the existing Osaka dashboard to GitHub Pages.
Open: https://ohjjam.github.io/osaka-signal-run/

- Map, restaurant menu/rating snapshots, itinerary and travel tips.
- v45: three curated alternatives per day for Sept 5–7. Saturday 17:00 hotel start and ramen first; Kaiyukan in every Sunday route; Monday checkout/luggage/airport buffers. Ticket slots are targets, not reservations.
- v47: six alternatives per day (18 total), including demanding city circuits, street shopping, ramen/teppan meals and departure-day tasting routes. Stop-level explanations, recommended orders, practical tips and source/map links are shown with illustrative existing assets. Aquarium slot time follows the selected route; demand and ticket inventory are not live verified.
- Empty days get the A recommendations once. Existing plans stay untouched until a day/all-days Apply action. A device-local snapshot supports undo. Changes do not alter another browser's itinerary.
- Arrival-first navigation: current-location routing, airport express/Rapi:t comparison, T2 shuttle, step-by-step travel and payment guidance. Live departures remain in Google Maps; on-site dotted segments are explicitly schematic, not street routing.
- Each browser saves its own changes. No shared server or login.
- v46: private stay fields live only in a separate browser key, excluded from itinerary exports. A private `stay46` fragment is consumed and removed before application scripts run. Never commit real room/access/Wi-Fi values or private guest links. Private import links contain secrets and must only be shared with intended travel companions.
- Local revision history and JSON export are retained; clearing browser data deletes local saves.
- Old-domain browser storage does not transfer automatically. No passport documents or private access codes are included.
- Map tiles, directions and external sources need an internet connection.

The `docs` folder is the complete static site. `migrate.cjs` records the one-time conversion; do not rerun on already converted files.

For updates: `node build.cjs`, `node test-local.cjs`, `node test-move.cjs`. `test-move-browser.cjs` is a silent mobile integration check using the bundled Playwright path from `OSAKA_TEST_NODE_MODULES`.

`node test-curated.cjs` silently validates all 18 schedules, menu/reason content, aquarium timing, route map changes, per-day/all-day apply, undo and reload preservation at mobile width. Set `OSAKA_TEST_NODE_MODULES` to the dependency folder containing Playwright.
