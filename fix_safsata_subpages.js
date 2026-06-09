const fs = require('fs');

const files = [
  'views/safsata-dedektif.ejs',
  'views/safsata-spindoctor.ejs',
  'views/safsata-kalkan.ejs',
  'views/safsata-mahkeme.ejs',
  'views/safsata-trol.ejs'
];

for (const file of files) {
  if (!fs.existsSync(file)) continue;
  let content = fs.readFileSync(file, 'utf8');

  // Replace any existing body styles to ensure it uses the light theme
  content = content.replace(/body\s*{[^}]*}/g, 'body { background: var(--bg) !important; color: var(--text) !important; font-family: "Inter", sans-serif; overflow-x: hidden; margin: 0; padding: 0; }');

  // Map the custom variables to style.css variables
  // For dedektif
  content = content.replace(/--det-bg:\s*#050510;/g, '--det-bg: var(--bg);');
  content = content.replace(/--det-surface:\s*#0c0c24;/g, '--det-surface: var(--surface);');
  content = content.replace(/--det-glass:\s*rgba\(15, 15, 50, 0\.6\);/g, '--det-glass: var(--surface);');
  content = content.replace(/--det-text:\s*#f1f0ff;/g, '--det-text: var(--text);');
  content = content.replace(/--det-text2:\s*#a5a3c9;/g, '--det-text2: var(--text-2);');
  content = content.replace(/--det-text3:\s*#6b6899;/g, '--det-text3: var(--text-3);');

  // General mappings for any other random hardcoded dark colors
  // Replace #fff or #ffffff with var(--surface) if it's a background, or var(--text) if it's text.
  // Actually, a simpler way is to just let the EJS use the variables.
  // Some files might use --spin-bg, --mah-bg, etc.
  content = content.replace(/--[a-z]+-bg:\s*#[0-9a-fA-F]{6};/g, 'var(--bg);');
  content = content.replace(/--[a-z]+-surface:\s*#[0-9a-fA-F]{6};/g, 'var(--surface);');
  content = content.replace(/--[a-z]+-text:\s*#[0-9a-fA-F]{6};/g, 'var(--text);');
  content = content.replace(/--[a-z]+-text2:\s*#[0-9a-fA-F]{6};/g, 'var(--text-2);');
  content = content.replace(/--[a-z]+-text3:\s*#[0-9a-fA-F]{6};/g, 'var(--text-3);');

  // Let's explicitly replace for spindoctor, kalkan, mahkeme, trol
  content = content.replace(/--spin-bg:[^;]+;/g, '--spin-bg: var(--bg);');
  content = content.replace(/--spin-surface:[^;]+;/g, '--spin-surface: var(--surface);');
  content = content.replace(/--spin-text:[^;]+;/g, '--spin-text: var(--text);');
  content = content.replace(/--spin-text2:[^;]+;/g, '--spin-text2: var(--text-2);');
  content = content.replace(/--spin-text3:[^;]+;/g, '--spin-text3: var(--text-3);');

  content = content.replace(/--kal-bg:[^;]+;/g, '--kal-bg: var(--bg);');
  content = content.replace(/--kal-surface:[^;]+;/g, '--kal-surface: var(--surface);');
  content = content.replace(/--kal-text:[^;]+;/g, '--kal-text: var(--text);');
  content = content.replace(/--kal-text2:[^;]+;/g, '--kal-text2: var(--text-2);');
  content = content.replace(/--kal-text3:[^;]+;/g, '--kal-text3: var(--text-3);');

  content = content.replace(/--mah-bg:[^;]+;/g, '--mah-bg: var(--bg);');
  content = content.replace(/--mah-surface:[^;]+;/g, '--mah-surface: var(--surface);');
  content = content.replace(/--mah-text:[^;]+;/g, '--mah-text: var(--text);');
  content = content.replace(/--mah-text2:[^;]+;/g, '--mah-text2: var(--text-2);');
  content = content.replace(/--mah-text3:[^;]+;/g, '--mah-text3: var(--text-3);');

  content = content.replace(/--trl-bg:[^;]+;/g, '--trl-bg: var(--bg);');
  content = content.replace(/--trl-surface:[^;]+;/g, '--trl-surface: var(--surface);');
  content = content.replace(/--trl-text:[^;]+;/g, '--trl-text: var(--text);');
  content = content.replace(/--trl-text2:[^;]+;/g, '--trl-text2: var(--text-2);');
  content = content.replace(/--trl-text3:[^;]+;/g, '--trl-text3: var(--text-3);');

  // Fix white text on buttons
  content = content.replace(/color:\s*#fff;/g, 'color: var(--text);');
  content = content.replace(/color:\s*#ffffff;/g, 'color: var(--text);');
  content = content.replace(/color:\s*#f8fafc;/g, 'color: var(--text);');
  content = content.replace(/color:\s*#e2e8f0;/g, 'color: var(--text-2);');

  // Background gradients that use dark colors
  content = content.replace(/linear-gradient\([^)]+#050510[^)]+\)/g, 'var(--surface)');
  content = content.replace(/linear-gradient\([^)]+#0c0c24[^)]+\)/g, 'var(--surface)');

  fs.writeFileSync(file, content);
  console.log(`Fixed ${file}`);
}
