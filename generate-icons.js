#!/usr/bin/env node

/**
 * Icon Generator Script
 *
 * This script creates PWA icons in various sizes.
 * Since we don't have image processing libraries installed,
 * users should:
 * 1. Open icons/generate-icons.html in a browser
 * 2. Download all the generated icons
 * 3. Place them in the icons/ folder
 *
 * Or use online tools like:
 * - https://realfavicongenerator.net/
 * - https://www.pwabuilder.com/imageGenerator
 *
 * Upload the icons/icon.svg file to generate all required sizes.
 */

const fs = require('fs');
const path = require('path');

const sizes = [72, 96, 128, 144, 152, 192, 384, 512];
const iconsDir = path.join(__dirname, 'icons');

console.log('📱 PWA Icon Generator\n');
console.log('To generate icons for your PWA, you have two options:\n');
console.log('Option 1: Use the HTML generator');
console.log('  1. Open icons/generate-icons.html in your web browser');
console.log('  2. Click "Generate All Icons"');
console.log('  3. Download each icon size');
console.log('  4. Save them in the icons/ folder\n');
console.log('Option 2: Use online tools');
console.log('  1. Visit https://realfavicongenerator.net/');
console.log('  2. Upload icons/icon.svg');
console.log('  3. Download the generated icons');
console.log('  4. Extract to the icons/ folder\n');

// Check if icons exist
const missingIcons = [];
sizes.forEach(size => {
  const iconPath = path.join(iconsDir, `icon-${size}x${size}.png`);
  if (!fs.existsSync(iconPath)) {
    missingIcons.push(`icon-${size}x${size}.png`);
  }
});

if (missingIcons.length > 0) {
  console.log('⚠️  Missing icons:');
  missingIcons.forEach(icon => console.log(`  - ${icon}`));
  console.log('\nPlease generate these icons using one of the methods above.\n');
  process.exit(1);
} else {
  console.log('✅ All required icons are present!\n');
  process.exit(0);
}
