const fs = require('fs');

let indexContent = fs.readFileSync('views/safsata-index.ejs', 'utf8');

// Replace the :root block
indexContent = indexContent.replace(/:root\s*{[^}]+}/, `:root {
    --saf-bg: var(--bg);
    --saf-surface: var(--surface);
    --saf-glass: var(--surface);
    --saf-glass2: var(--surface2);
    --saf-border: var(--border);
    --saf-border-h: var(--gold);
    --saf-glow: var(--gold);
    --saf-glow2: var(--gold-d);
    --saf-cyan: var(--accent4);
    --saf-amber: var(--accent2);
    --saf-emerald: var(--accent3);
    --saf-rose: var(--accent);
    --saf-text: var(--text);
    --saf-text2: var(--text-2);
    --saf-text3: var(--text-3);
  }`);

// Add body back
if (!indexContent.includes('body { background: var(--saf-bg)')) {
    indexContent = indexContent.replace('</style>', `  body { background: var(--saf-bg) !important; color: var(--saf-text) !important; }\n</style>`);
}

// Make sure the title gradients use light theme colors instead of white
indexContent = indexContent.replace('linear-gradient(135deg, #e0d4ff, #c084fc, #8b5cf6)', 'linear-gradient(135deg, var(--gold-d), var(--gold), var(--gold-m))');
indexContent = indexContent.replace('linear-gradient(135deg, #fff, #e0d4ff, #c084fc)', 'linear-gradient(135deg, var(--gold-d), var(--gold), var(--gold-m))');

// Fallacy btn text color in active state should be light because the background is light gold
indexContent = indexContent.replace('.fallacy-btn.active .fb-title { color: #fff; }', '.fallacy-btn.active .fb-title { color: var(--text); }');

fs.writeFileSync('views/safsata-index.ejs', indexContent);
console.log("Fixed safsata-index.ejs");

// -------------------------------------------------------------------------------------------------
// Now fix safsata-karanlik.ejs
let darkContent = fs.readFileSync('views/safsata-karanlik.ejs', 'utf8');
// Fix hardcoded dark colors
darkContent = darkContent.replace(/body\s*{[^}]*}/g, ''); // just in case
if (!darkContent.includes('body { background: var(--bg)')) {
    darkContent = darkContent.replace('<style>', `<style>\n  body { background: var(--bg) !important; color: var(--text) !important; }`);
}

darkContent = darkContent.replace(/#0a0a14/g, 'var(--surface)');
darkContent = darkContent.replace(/#1e293b/g, 'var(--surface2)');
darkContent = darkContent.replace(/#0f172a/g, 'var(--bg)');
darkContent = darkContent.replace(/#f8fafc/g, 'var(--text)');
darkContent = darkContent.replace(/#e2e8f0/g, 'var(--text-2)');
darkContent = darkContent.replace(/#94a3b8/g, 'var(--text-3)');
darkContent = darkContent.replace(/#cbd5e1/g, 'var(--text-3)');
darkContent = darkContent.replace(/#334155/g, 'var(--border)');
darkContent = darkContent.replace(/#475569/g, 'var(--border-h)');
darkContent = darkContent.replace(/#f43f5e/g, 'var(--accent)'); // rose -> accent
darkContent = darkContent.replace(/#4c1d95/g, 'var(--border-h)'); // dark purple border -> gold
darkContent = darkContent.replace(/#a855f7/g, 'var(--gold)'); // purple -> gold
darkContent = darkContent.replace(/#e11d48/g, 'var(--accent)'); // red hover -> accent
darkContent = darkContent.replace(/#facc15/g, 'var(--gold-d)'); // yellow -> gold-d

fs.writeFileSync('views/safsata-karanlik.ejs', darkContent);
console.log("Fixed safsata-karanlik.ejs");
