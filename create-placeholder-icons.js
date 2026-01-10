#!/usr/bin/env node

/**
 * Creates placeholder PNG icons for PWA
 * These are simple 1x1 colored pixels that will be scaled by the browser
 * Replace these with proper icons using icons/generate-icons.html
 */

const fs = require('fs');
const path = require('path');

const sizes = [72, 96, 128, 144, 152, 192, 384, 512];
const iconsDir = path.join(__dirname, 'icons');

// Ensure icons directory exists
if (!fs.existsSync(iconsDir)) {
  fs.mkdirSync(iconsDir, { recursive: true });
}

// Create a simple PNG data URL (1x1 red pixel)
// This is a minimal valid PNG file
const pngBase64 = 'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8DwHwAFBQIAX8jx0gAAAABJRU5ErkJggg==';
const pngBuffer = Buffer.from(pngBase64, 'base64');

console.log('Creating placeholder icons...\n');

sizes.forEach(size => {
  const iconPath = path.join(iconsDir, `icon-${size}x${size}.png`);

  if (!fs.existsSync(iconPath)) {
    fs.writeFileSync(iconPath, pngBuffer);
    console.log(`✅ Created placeholder: icon-${size}x${size}.png`);
  } else {
    console.log(`⏭️  Skipped (already exists): icon-${size}x${size}.png`);
  }
});

console.log('\n⚠️  Note: These are placeholder icons!');
console.log('For better icons, open icons/generate-icons.html in your browser');
console.log('and download the properly designed icons.\n');
