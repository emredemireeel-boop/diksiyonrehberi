const fs = require('fs');
let t1 = fs.readFileSync('views/diksiyon-s-harfi.ejs', 'utf8');
t1 = t1.replace(/icon: 'a'/g, "icon: '⚡'");
fs.writeFileSync('views/diksiyon-s-harfi.ejs', t1);
