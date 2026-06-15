const fs = require('fs');

let content = fs.readFileSync('index.js', 'utf8');

const sitemapAddition = `,
  { loc: '/egzersiz/cocuk', changefreq: 'weekly', priority: '0.9' },
  { loc: '/egzersiz/ses', changefreq: 'weekly', priority: '0.9' },
  { loc: '/egzersiz/retorik', changefreq: 'weekly', priority: '0.9' },
  { loc: '/egzersiz/munazara', changefreq: 'weekly', priority: '0.9' },
  { loc: '/egzersiz/muzakere', changefreq: 'weekly', priority: '0.9' },
  { loc: '/egzersiz/propaganda', changefreq: 'weekly', priority: '0.9' },
  { loc: '/egzersiz/masterclass', changefreq: 'weekly', priority: '0.9' },
  { loc: '/egzersiz/safsata', changefreq: 'weekly', priority: '0.9' },
  { loc: '/egzersiz/curutme', changefreq: 'weekly', priority: '0.9' },
  { loc: '/egzersiz/protokol', changefreq: 'weekly', priority: '0.9' },
  { loc: '/egzersiz/imaj', changefreq: 'weekly', priority: '0.9' },
  { loc: '/egzersiz/toren', changefreq: 'weekly', priority: '0.9' },
  { loc: '/egzersiz/manipulasyon', changefreq: 'weekly', priority: '0.9' },
  { loc: '/egzersiz/mobbing', changefreq: 'weekly', priority: '0.9' },
  { loc: '/egzersiz/dijital', changefreq: 'weekly', priority: '0.9' },
  { loc: '/egzersiz/bedendili', changefreq: 'weekly', priority: '0.9' },
  { loc: '/egzersiz/karizma', changefreq: 'weekly', priority: '0.9' },
  { loc: '/egzersiz/liderlik', changefreq: 'weekly', priority: '0.9' },
  { loc: '/egzersiz/hikaye', changefreq: 'weekly', priority: '0.9' },
  { loc: '/egzersiz/karakter', changefreq: 'weekly', priority: '0.9' },
  { loc: '/egzersiz/sunum', changefreq: 'weekly', priority: '0.9' },
  { loc: '/egzersiz/kriz', changefreq: 'weekly', priority: '0.9' },
  { loc: '/egzersiz/mizah', changefreq: 'weekly', priority: '0.9' },
  { loc: '/egzersiz/mikrofon', changefreq: 'weekly', priority: '0.9' },
  { loc: '/egzersiz/dogaclama', changefreq: 'weekly', priority: '0.9' },
  { loc: '/egzersiz/rutin', changefreq: 'weekly', priority: '0.9' },
  { loc: '/egzersiz/aksan', changefreq: 'weekly', priority: '0.9' },
  { loc: '/egzersiz/saglik', changefreq: 'weekly', priority: '0.9' },
  { loc: '/egzersiz/okuma', changefreq: 'weekly', priority: '0.9' },
  { loc: '/egzersiz/dil', changefreq: 'weekly', priority: '0.9' },
  { loc: '/egzersiz/dudak', changefreq: 'weekly', priority: '0.9' },
  { loc: '/egzersiz/cene-agiz', changefreq: 'weekly', priority: '0.9' }
];`;

content = content.replace(
  /\{\s*loc:\s*'\/egzersiz\/s-harfi',\s*changefreq:\s*'weekly',\s*priority:\s*'0\.9'\s*\}\r?\n\];/g, 
  `{ loc: '/egzersiz/s-harfi', changefreq: 'weekly', priority: '0.9' }${sitemapAddition}`
);

content = content.replace(
  /\/manipulasyon\/araclar\/dedektif',/,
  "'/manipulasyon/araclar/dedektif', '/manipulasyon/araclar/yalan-dedektoru',"
);

content = content.replace(
  /Disallow:\s*\/api\//,
  "Disallow: /api/\nDisallow: /test*"
);

fs.writeFileSync('index.js', content, 'utf8');
console.log('updated index.js');
