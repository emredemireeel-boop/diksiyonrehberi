const fs = require('fs');
let c = fs.readFileSync('index.js', 'utf8');

let prev;
do {
  prev = c;
  c = c.replace(/\]\s*\}\s*,\s*\{\s*"question"(?:[^\]]|\n)+\]\s*\},/g, ']\n},');
  c = c.replace(/\]\s*\}\s*\{\s*"question"(?:[^\]]|\n)+\]\s*\},/g, ']\n},');
} while(c !== prev);

fs.writeFileSync('index.js', c);
console.log('Fixed');
