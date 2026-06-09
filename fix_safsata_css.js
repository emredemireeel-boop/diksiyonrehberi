const fs = require('fs');

// Fix safsata.css
let cssContent = fs.readFileSync('public/safsata.css', 'utf8');

// Replace detective mode colors
cssContent = cssContent.replace(/#0a0a14/g, 'var(--surface2)'); // slate 900
cssContent = cssContent.replace(/#0f172a/g, 'var(--surface)'); // slate 900
cssContent = cssContent.replace(/rgba\(15, 23, 42,/g, 'rgba(15, 31, 61,'); // slate 900 rgb
cssContent = cssContent.replace(/#e2e8f0/g, 'var(--text)'); // slate 200
cssContent = cssContent.replace(/#94a3b8/g, 'var(--text-3)');
cssContent = cssContent.replace(/#334155/g, 'var(--border)'); // slate 700 -> border
cssContent = cssContent.replace(/#cbd5e1/g, 'var(--text-2)');
cssContent = cssContent.replace(/#f8fafc/g, 'var(--text)');
cssContent = cssContent.replace(/#1e293b/g, 'var(--surface2)'); // slate 800

fs.writeFileSync('public/safsata.css', cssContent);
console.log("Fixed safsata.css");
