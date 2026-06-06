const fs = require('fs');

const fileS = 'views/diksiyon-s-harfi.ejs';
let t1 = fs.readFileSync(fileS, 'utf8');
t1 = t1.replace(/\x1Fx\x1DSes/g, '🔬 Ses');
t1 = t1.replace(/\x1FxDil/g, '👅 Dil');
t1 = t1.replace(/\x1Fx\x19Ayna/g, '💡 Ayna');
t1 = t1.replace(/\x1Fx\x1DMinimal/g, '🎮 Minimal');
t1 = t1.replace(/\x1Fx\x1C& 7/g, '📅 7');
t1 = t1.replace(/\x1Fx\x19<\/span>/g, '💡</span>');
t1 = t1.replace(/\x1FxBitti/g, '🏁 Bitti');
t1 = t1.replace(/\x1Fx En İyi/g, '🏆 En İyi');

// Week plan icons
t1 = t1.replace(/icon: '\x1Fx⚡'/g, "icon: '⚡'");
t1 = t1.replace(/icon: '\x1Fx\x1D'/g, "icon: '🎮'");
t1 = t1.replace(/icon: 'a'/g, "icon: '⚡'"); // Already 'a' without \x1f? Oh well, I'll just replace 'a' later if this misses.
t1 = t1.replace(/icon: '\x1Fx\x1C\x13'/g, "icon: '📖'");
t1 = t1.replace(/icon: '\x1Fx'/g, "icon: '🏆'");

fs.writeFileSync(fileS, t1);

const fileR = 'views/diksiyon-r-harfi.ejs';
let t2 = fs.readFileSync(fileR, 'utf8');
t2 = t2.replace(/\x1Fx&<\/div>/g, '🏎️</div>');
t2 = t2.replace(/\x1Fx\x1DTelaffuz/g, '🔬 Telaffuz');
t2 = t2.replace(/\x1FxDil/g, '👅 Dil');
t2 = t2.replace(/\x1Fx4/g, '📈 4');
t2 = t2.replace(/\x1Fx\x1D\x1E<\/span> Tekrarla/g, '🔁</span> Tekrarla');
t2 = t2.replace(/\x1FxR/g, '🏃 R');
t2 = t2.replace(/\x1Fx\x19<\/span>/g, '💡</span>');
t2 = t2.replace(/\x1Fx En İyi/g, '🏆 En İyi');

fs.writeFileSync(fileR, t2);

console.log("Fix applied.");
