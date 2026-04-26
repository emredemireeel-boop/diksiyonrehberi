// verify_pages.js — Tüm SEO sayfalarının çalışıp çalışmadığını kontrol et
const slugs = [
  's-harfi-nasil-soylenir',
  'kekemelik-egzersizleri', 
  'etkili-konusma-teknikleri',
  'r-harfi-nasil-soylenir',
  'ses-kalinlastirma-egzersizleri',
  'diksiyon-kurallari',
  'mulakat-diksiyonu',
  'topluluk-onunde-konusma-korkusu'
];

async function test() {
  for (const slug of slugs) {
    const res = await fetch(`http://localhost:3000/${slug}`);
    const html = await res.text();
    
    const seoPos = html.indexOf('seo-tool-content');
    const appPos = html.indexOf('src="app.js"');
    const h1Match = html.match(/<h1>(.*?)<\/h1>/);
    const titleMatch = html.match(/<title>(.*?)<\/title>/);
    
    const ok = seoPos !== -1 && seoPos < appPos;
    console.log(`${ok ? '✅' : '❌'} /${slug}`);
    console.log(`   Title: ${titleMatch ? titleMatch[1] : 'YOK'}`);
    console.log(`   H1: ${h1Match ? h1Match[1].substring(0,60) : 'YOK'}`);
    console.log(`   SEO div: pos ${seoPos}, app.js: pos ${appPos}, BEFORE: ${seoPos < appPos}`);
    console.log('');
  }
}
test();
