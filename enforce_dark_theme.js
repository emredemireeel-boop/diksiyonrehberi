const fs = require('fs');

const files = [
  'views/safsata-index.ejs',
  'views/safsata-karanlik.ejs',
  'views/safsata-dedektif.ejs',
  'views/safsata-spindoctor.ejs',
  'views/safsata-kalkan.ejs',
  'views/safsata-mahkeme.ejs',
  'views/safsata-trol.ejs',
  'public/safsata.css'
];

for (const file of files) {
  if (!fs.existsSync(file)) continue;
  let content = fs.readFileSync(file, 'utf8');

  // Fix the body tag to force a clean dark theme
  content = content.replace(/body\s*{[^}]*}/g, 'body { background: #0a0a14 !important; color: #f1f5f9 !important; font-family: "Inter", sans-serif; overflow-x: hidden; margin: 0; padding: 0; }');

  // Replace light theme variables we previously injected with proper dark theme colors
  content = content.replace(/var\(--bg\)/g, '#0a0a14');
  content = content.replace(/var\(--surface\)/g, '#131320');
  content = content.replace(/var\(--surface2\)/g, '#1a1a2e');
  content = content.replace(/var\(--border\)/g, 'rgba(255,255,255,0.08)');
  content = content.replace(/var\(--border-h\)/g, 'rgba(255,255,255,0.15)');
  content = content.replace(/var\(--text\)/g, '#f1f5f9');
  content = content.replace(/var\(--text-2\)/g, '#cbd5e1');
  content = content.replace(/var\(--text-3\)/g, '#94a3b8');

  // Also replace any specific things in safsata-index.ejs
  if (file === 'views/safsata-index.ejs') {
    content = content.replace(/:root\s*{[^}]+}/, `:root {
    --saf-bg: #0a0a14;
    --saf-surface: #131320;
    --saf-glass: rgba(255,255,255,0.03);
    --saf-glass2: rgba(255,255,255,0.05);
    --saf-border: rgba(255,255,255,0.08);
    --saf-border-h: rgba(255,255,255,0.15);
    --saf-glow: #8b5cf6;
    --saf-glow2: #c084fc;
    --saf-cyan: #22d3ee;
    --saf-amber: #fbbf24;
    --saf-emerald: #34d399;
    --saf-rose: #fb7185;
    --saf-text: #f1f5f9;
    --saf-text2: #cbd5e1;
    --saf-text3: #94a3b8;
  }`);
  }

  // Ensure any color: #fff that was replaced to color: var(--text) is now #fff or #f1f5f9
  // Since we replaced it with #f1f5f9 above, it's already handled.

  fs.writeFileSync(file, content);
  console.log(`Reverted and fixed dark theme in ${file}`);
}
