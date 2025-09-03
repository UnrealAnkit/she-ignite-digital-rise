#!/usr/bin/env node

/**
 * Deployment Verification Script
 * This script helps verify that media files are properly accessible after deployment
 */

const fs = require('fs');
const path = require('path');

console.log('🔍 Checking deployment media files...\n');

// Check if dist/media directory exists
const distMediaPath = path.join(__dirname, 'dist', 'media');
if (!fs.existsSync(distMediaPath)) {
  console.error('❌ dist/media directory not found!');
  console.log('Make sure to run "npm run build" first.');
  process.exit(1);
}

// List all media files
const mediaFiles = fs.readdirSync(distMediaPath);
console.log(`📁 Found ${mediaFiles.length} files in dist/media:\n`);

// Check for deAsra logo files specifically
const deAsraFiles = mediaFiles.filter(file => file.toLowerCase().includes('deasra'));
console.log('🎯 deAsra logo files found:');
deAsraFiles.forEach(file => {
  const filePath = path.join(distMediaPath, file);
  const stats = fs.statSync(filePath);
  console.log(`  ✅ ${file} (${(stats.size / 1024).toFixed(1)} KB)`);
});

if (deAsraFiles.length === 0) {
  console.log('  ❌ No deAsra logo files found!');
}

// Check for other important media files
const importantFiles = [
  'Logo.png',
  'empowerher 2024.jpg',
  'Launch of sheleads india.jpg'
];

console.log('\n🔑 Important media files:');
importantFiles.forEach(file => {
  const filePath = path.join(distMediaPath, file);
  if (fs.existsSync(filePath)) {
    const stats = fs.statSync(filePath);
    console.log(`  ✅ ${file} (${(stats.size / 1024).toFixed(1)} KB)`);
  } else {
    console.log(`  ❌ ${file} - NOT FOUND`);
  }
});

// Check total media directory size
const totalSize = mediaFiles.reduce((total, file) => {
  const filePath = path.join(distMediaPath, file);
  const stats = fs.statSync(filePath);
  return total + stats.size;
});

console.log(`\n📊 Total media directory size: ${(totalSize / (1024 * 1024)).toFixed(1)} MB`);

// Check for potential issues
console.log('\n⚠️  Potential issues to check:');
console.log('  1. Ensure all media files are in the public/media directory');
console.log('  2. Check that the build process copies media files correctly');
console.log('  3. Verify server configuration allows .avif files');
console.log('  4. Check for case sensitivity issues on the server');
console.log('  5. Ensure proper MIME types are configured');

console.log('\n🚀 Deployment verification complete!');
