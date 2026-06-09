const fs = require('fs');
const path = require('path');

const filesToFix = [
  'views/safsata-index.ejs',
  'views/safsata-karanlik.ejs',
  'views/safsata-dedektif.ejs',
  'views/safsata-spindoctor.ejs',
  'views/safsata-kalkan.ejs',
  'views/safsata-mahkeme.ejs',
  'views/safsata-trol.ejs',
  'public/safsata.css'
];

for (const file of filesToFix) {
  const fullPath = path.join(__dirname, file);
  if (fs.existsSync(fullPath)) {
    let content = fs.readFileSync(fullPath, 'utf8');

    // Replace fonts
    content = content.replace(/@import url\('https:\/\/fonts\.googleapis\.com.*?\'\);/g, '');
    content = content.replace(/'Outfit', sans-serif/g, "'Inter', sans-serif");
    content = content.replace(/'Playfair Display', serif/g, "'Plus Jakarta Sans', sans-serif");
    content = content.replace(/'JetBrains Mono', monospace/g, "'Inter', sans-serif");

    // Remove forced body backgrounds
    content = content.replace(/body\s*{[^}]*background:\s*var\(--saf-bg\)\s*!important;[^}]*}/g, '');
    content = content.replace(/body\s*{[^}]*background:\s*#0f172a;[^}]*}/g, '');
    
    // Remove cosmic/matrix backgrounds from EJS files
    content = content.replace(/<div class="saf-cosmos"><\/div>/g, '');
    content = content.replace(/<div class="saf-scanlines"><\/div>/g, '');
    content = content.replace(/<div class="saf-particles" id="safParticles"><\/div>/g, '');
    content = content.replace(/<div class="saf-orbit"><\/div>/g, '');
    
    // Convert extreme neon colors to softer professional ones (optional)
    // #06060f -> #0a0a14
    content = content.replace(/#06060f/g, '#0a0a14');
    content = content.replace(/#0f172a/g, '#0a0a14');

    fs.writeFileSync(fullPath, content);
    console.log(`Updated ${file}`);
  } else {
    console.log(`${file} not found.`);
  }
}
