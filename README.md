# Learn the Clock 🕐

A simple, colorful web game to help kids learn to tell time on an analog clock. Now available as a Progressive Web App (PWA) that can be installed on your device!

## Features

- **Multi-language support**: English, Finnish (Suomi), and Norwegian (Norsk)
- **Interactive clock**: Use the dropdown selectors to set different times
- **Digital & Analog display**: See the time in both formats simultaneously
- **Voice feedback**: Click the button to hear the time spoken aloud in your selected language
- **Simple time positions**: Learn exact hours, quarter past, half past, and quarter to
- **PWA Support**: Install the app on your Android device, iPhone, or desktop for offline access
- **Works offline**: Once installed, play without an internet connection

## How to Use

### On the Web
1. Visit the game at the deployed URL (see GitHub Pages section below)
2. Select your preferred language (Finnish 🇫🇮, English 🇬🇧, or Norwegian 🇳🇴)
3. Use the dropdown menus to select hours and minutes
4. Watch both the analog and digital clocks update
5. Click "Tell me the time!" to hear it spoken in your chosen language

### Install as an App (PWA)

#### On Android:
1. Open the game in Chrome
2. Tap the menu (⋮) and select "Install app" or "Add to Home screen"
3. The app will be added to your home screen and can be launched like any other app
4. Works offline after installation!

#### On iPhone/iPad:
1. Open the game in Safari
2. Tap the Share button (□↑)
3. Scroll down and tap "Add to Home Screen"
4. Tap "Add" to confirm
5. The app icon will appear on your home screen

#### On Desktop (Chrome/Edge):
1. Open the game in Chrome or Edge
2. Click the install icon (⊕) in the address bar
3. Click "Install" to add it as a desktop app
4. Launch from your applications menu

## GitHub Pages Deployment

This game is deployed using GitHub Pages. Here's how it's set up:

### Current Deployment
- **Live URL**: `https://[your-username].github.io/learn-the-clock/`
- The game is automatically deployed from the `main` branch
- Any push to `main` will update the live site within a few minutes

### Setting Up GitHub Pages (for new deployments)
1. Push your code to a GitHub repository
2. Go to repository Settings → Pages
3. Under "Source", select the `main` branch and `/ (root)` folder
4. Click "Save"
5. GitHub will provide you with a URL where your game is hosted
6. The site will be available at: `https://[your-username].github.io/learn-the-clock/`
7. Wait a few minutes for the initial deployment to complete

## Browser Compatibility

- **Modern Browsers**: Works in all modern browsers (Chrome, Edge, Safari, Firefox)
- **Web Speech API**: Required for voice feedback (supported in Chrome, Edge, Safari, and Firefox)
- **PWA Features**: Best experience in Chrome/Edge on Android, Safari on iOS

## PWA Icon Customization

The app includes placeholder PWA icons. To create custom branded icons:

### Option 1: Browser-based Generator (Recommended)
1. Open `icons/generate-icons.html` in your web browser
2. Click "Generate All Icons"
3. Download each icon size using the download buttons
4. Replace the placeholder files in the `icons/` folder with the downloaded files

### Option 2: Online Tools
1. Use a service like [RealFaviconGenerator](https://realfavicongenerator.net/) or [PWA Builder](https://www.pwabuilder.com/imageGenerator)
2. Upload the `icons/icon.svg` file
3. Download the generated icon pack
4. Extract the icons to the `icons/` folder

### Option 3: Manual Creation
1. Create PNG images in these sizes: 72x72, 96x96, 128x128, 144x144, 152x152, 192x192, 384x384, 512x512
2. Name them as `icon-{size}x{size}.png` (e.g., `icon-192x192.png`)
3. Place them in the `icons/` folder

## Development

### Local Development
1. Clone the repository
2. Open `index.html` in a web browser
3. For PWA features testing, use a local server:
   ```bash
   # Using Python 3
   python3 -m http.server 8000

   # Using Node.js (with http-server)
   npx http-server

   # Using PHP
   php -S localhost:8000
   ```
4. Visit `http://localhost:8000` in your browser

### File Structure
```
learn-the-clock/
├── index.html              # Main game file
├── manifest.json           # PWA manifest
├── sw.js                   # Service worker for offline support
├── icons/                  # App icons folder
│   ├── icon.svg           # Source SVG icon
│   ├── generate-icons.html # Browser-based icon generator
│   └── icon-*.png         # Generated PNG icons
├── generate-icons.js       # Icon verification script
└── README.md              # This file
```

## Credits

Created as a fun educational tool to help children learn to tell time in multiple languages.

## License

Free to use for educational purposes.
