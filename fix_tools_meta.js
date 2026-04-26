const fs = require('fs');
let c = fs.readFileSync('index.js', 'utf8');

// TOOLS_META alanını bulalım
const startIdx = c.indexOf('const TOOLS_META = {');
const endIdx = c.indexOf('};\n\n// ════════', startIdx);

if (startIdx !== -1 && endIdx !== -1) {
  let toolsMetaStr = c.substring(startIdx, endIdx);
  
  // Find all trailing garbage blocks that start after `]\n},` and look like `{ "question": ... } ] } ,`
  // An easy regex to match just within this string:
  toolsMetaStr = toolsMetaStr.replace(/\]\r?\n\}\r?\n,\s*\{\s*"question":\s*"[^"]+",\s*"answer":\s*"[^"]+"\s*\}\s*\]\r?\n\},/g, ']\n},');
  
  // Another pattern might be without comma before the brace:
  toolsMetaStr = toolsMetaStr.replace(/\]\r?\n\}\r?\n\s*\{\s*"question":\s*"[^"]+",\s*"answer":\s*"[^"]+"\s*\}\s*\]\r?\n\},/g, ']\n},');
  
  // Also clean up stray `] \n } \n ] \n },`
  toolsMetaStr = toolsMetaStr.replace(/\]\r?\n\}\r?\n\s*\]\r?\n\s*\},/g, ']\n},');

  c = c.substring(0, startIdx) + toolsMetaStr + c.substring(endIdx);
  fs.writeFileSync('index.js', c);
  console.log('Fixed syntax errors within TOOLS_META.');
} else {
  console.log('Could not find TOOLS_META block.');
}
