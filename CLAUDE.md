# Learn the Clock

Educational PWA that helps children learn to tell time on analog clocks with multi-language support (Finnish, English, Norwegian).

## Tech Stack

- Vanilla HTML, CSS, JavaScript (no frameworks or build tools)
- PWA with Service Worker for offline support
- Deployed via GitHub Pages

## File Structure

```
index.html      - Main app (HTML, CSS, JS all-in-one)
manifest.json   - PWA manifest configuration
sw.js           - Service worker for offline caching
icons/          - PWA icons (various sizes)
```

## Development

Run locally with any static file server:

```bash
python3 -m http.server 8000
# or
npx http-server
```

No build step required. Test PWA features at localhost.

## Architecture Notes

- **Single-file app**: All HTML, CSS, and JavaScript in `index.html`
- **Translations**: `translations` object contains all i18n strings for each language
- **Time periods**: night (22:00-05:59), morning (06:00-11:59), afternoon (12:00-17:59), evening (18:00-21:59)
- **Service worker caching**: Network-first for HTML, cache-first for static assets
- **Voice output**: Uses Web Speech API with language-specific text generation

## Adding a New Language

1. Add language button to welcome screen and language switcher
2. Add translation object in `translations` with all required keys
3. Include `timeText` functions for spoken time format
