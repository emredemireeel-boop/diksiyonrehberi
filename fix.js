const fs = require('fs');
let c = fs.readFileSync('index.js', 'utf8');

const regex = /\]\r?\n\}\r?\n,\s*\{\s*"question":\s*"[^"]+",\s*"answer":\s*"[^"]+"\s*\}\s*\]\r?\n\},/g;
let matches = c.match(regex);
console.log('Matches found:', matches ? matches.length : 0);

c = c.replace(regex, ']\n},');

fs.writeFileSync('index.js', c);
