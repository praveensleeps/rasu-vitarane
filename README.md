# Rasu Vitarane — BAMUL Relief Transfer Display

Two full-screen pages for the ceremonial "bank transfer" moment at the BAMUL Rasu Marana Parihara distribution event. The chairman presses a button on screen (streamed to a TV); it plays an animation and declares the transfer initiated. **No backend, no APIs — purely visual.**

- `parihara-seal.html` — brass seal button, ink-ripple reveal
- `relief-network.html` — hub-and-spoke network of all 14 taluks lighting up

## Running it

No install, no build. Just open either `.html` file in a browser (double-click, or drag into a browser window). Press `F11` for fullscreen on the event TV.

Needs internet on first load only (for Google Fonts). If the venue wifi is unreliable, test ahead of time.

## Editing the content

Everything editable — header text, the chairman's photo, the ₹ amount, taluk names/claims/amounts, button labels, event date — lives in **`content.js`**. Open it in any text editor, change values, save, reload the page. No code changes needed.

A few fields worth knowing:
- `org.chairmanPhoto` / `org.eventDate` — top-left corner
- `totals` / `taluks[]` — the figures shown; each taluk's `claims`/`amount` should sum to `totals.beneficiaries`/`totals.amount`
- `network.speedMultiplier` — Relief Network only; `1` = normal, `2` = twice as fast, `0.5` = half speed

## Updating images

Drop a replacement file into `assets/` with the same filename (`bamul-logo.png`, `shri-dksuresh.png`), or point `content.js` at a new filename.

## Rehearsing

Each page has a small **Reset** button, bottom-right (low-opacity until you hover). Click it to replay the sequence from scratch as many times as needed.

## Customizing further

Each page is a single self-contained HTML file (HTML/CSS/vanilla JS, no framework). Look for the `<script>` block at the bottom of the file — it's the only place with logic. Styling is in the `<style>` block at the top.
