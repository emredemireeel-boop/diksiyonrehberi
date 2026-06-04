const fs = require('fs');

function slugify(text) {
  const trMap = { 'ç':'c', 'ğ':'g', 'ş':'s', 'ö':'o', 'ü':'u', 'ı':'i', 'İ':'i', 'Ç':'c', 'Ğ':'g', 'Ş':'s', 'Ö':'o', 'Ü':'u', 'I':'i' };
  return text.toLowerCase()
    .replace(/[çğşöüıİÇĞŞÖÜI]/g, m => trMap[m] || m)
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

['diksiyon-data.js', 'public/app.js'].forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  content = content.replace(/(id:\s*\d+,\s*)(cat:\s*'[^']+',\s*emoji:\s*['"`].*?['"`],\s*title:\s*'([^']+)')/g, (match, p1, p2, p3) => {
    return p1 + "slug: '" + slugify(p3) + "', " + p2;
  });
  fs.writeFileSync(file, content, 'utf8');
});
console.log('Slugs added to diksiyon-data.js and app.js');
