// Quick verification script to check project structure
const fs = require('fs');
const path = require('path');

console.log('🔍 Verifying Next.js project structure...\n');

const requiredFiles = [
  'app/layout.jsx',
  'app/page.jsx',
  'app/globals.css',
  'package.json',
  'next.config.js'
];

let allGood = true;

requiredFiles.forEach(file => {
  const filePath = path.join(process.cwd(), file);
  if (fs.existsSync(filePath)) {
    console.log(`✅ ${file}`);
  } else {
    console.log(`❌ ${file} - MISSING!`);
    allGood = false;
  }
});

// Check if app directory exists
const appDir = path.join(process.cwd(), 'app');
if (fs.existsSync(appDir)) {
  console.log(`\n✅ app/ directory exists`);
  const appFiles = fs.readdirSync(appDir);
  console.log(`   Files in app/: ${appFiles.join(', ')}`);
} else {
  console.log(`\n❌ app/ directory MISSING!`);
  allGood = false;
}

if (allGood) {
  console.log('\n✅ All required files are present!');
  console.log('💡 If Vercel still shows an error, ensure all files are committed to git:');
  console.log('   git add app/');
  console.log('   git commit -m "Add app directory"');
  console.log('   git push');
} else {
  console.log('\n❌ Some files are missing. Please check your project structure.');
  process.exit(1);
}

