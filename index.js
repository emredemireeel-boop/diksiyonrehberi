const express = require('express');
const path    = require('path');
const fs      = require('fs');
const app     = express();
const HTTP_PORT  = 3000;
const HTTPS_PORT = 3443;

// Statik dosyaları public klasöründen sun
app.use(express.static(path.join(__dirname, 'public')));

// ── Sitemap ──────────────────────────────────────────────────────────────────
const SITE_URL = 'https://www.diksiyonrehberi.com';
const SITEMAP_PAGES = [
  // Ana sayfalar
  { loc: '/',              changefreq: 'weekly',  priority: '1.0' },
  { loc: '/#nefes',        changefreq: 'monthly', priority: '0.8' },
  { loc: '/#tekerleme',    changefreq: 'monthly', priority: '0.8' },
  { loc: '/#arena',        changefreq: 'monthly', priority: '0.8' },
  { loc: '/#ses',          changefreq: 'monthly', priority: '0.7' },
  { loc: '/#telaffuz',     changefreq: 'monthly', priority: '0.7' },
  { loc: '/#ritim',        changefreq: 'monthly', priority: '0.7' },
  { loc: '/#vurgu',        changefreq: 'monthly', priority: '0.7' },
  { loc: '/#duraklama',    changefreq: 'monthly', priority: '0.7' },
  { loc: '/#rezonans',     changefreq: 'monthly', priority: '0.7' },
  { loc: '/#okuma',        changefreq: 'monthly', priority: '0.7' },
  { loc: '/#programlar',   changefreq: 'monthly', priority: '0.6' },
  { loc: '/#okunuslar',    changefreq: 'weekly',  priority: '0.9' },
  { loc: '/#teleprompter', changefreq: 'monthly', priority: '0.7' },
  { loc: '/#blog',         changefreq: 'weekly',  priority: '0.9' },
  // Blog makaleleri — güncel sluglar
  { loc: '/?blog=ses-isinma-rehberi',                              changefreq: 'monthly', priority: '0.9' },
  { loc: '/?blog=liderlik-ses-analizi',                            changefreq: 'monthly', priority: '0.9' },
  { loc: '/?blog=sihirli-kelimeler',                               changefreq: 'monthly', priority: '0.9' },
  { loc: '/?blog=aktif-dinleme',                                   changefreq: 'monthly', priority: '0.8' },
  { loc: '/?blog=diksiyon-nedir-neden-onemli',                     changefreq: 'monthly', priority: '0.9' },
  { loc: '/?blog=diksiyon-evde-nasil-gelistirilir',                changefreq: 'monthly', priority: '0.9' },
  { loc: '/?blog=profesyonellerin-diksiyon-sirlari',               changefreq: 'monthly', priority: '0.8' },
  { loc: '/?blog=ceo-gibi-konusmak-liderlik-iletisimi',            changefreq: 'monthly', priority: '0.8' },
  { loc: '/?blog=sunum-korkusunu-yenmek-guven-konusmasi',          changefreq: 'monthly', priority: '0.8' },
  { loc: '/?blog=ikna-edici-konusmak-retorik-sanati',              changefreq: 'monthly', priority: '0.8' },
  { loc: '/?blog=ses-otoritesi-yonetici-varligi',                  changefreq: 'monthly', priority: '0.8' },
  { loc: '/?blog=etkili-toplanti-yonetimi-konusma-stratejileri',   changefreq: 'monthly', priority: '0.7' },
  { loc: '/?blog=muzakerede-ustunluk-konusma-taktikleri',          changefreq: 'monthly', priority: '0.7' },
  { loc: '/?blog=kriz-aninda-nasil-konusulur-lider-iletisimi',     changefreq: 'monthly', priority: '0.7' },
  { loc: '/?blog=vizyon-konusmasi-nasil-yapilir-ilham-veren-lider',changefreq: 'monthly', priority: '0.7' },
  { loc: '/?blog=aktif-dinleme-liderlerin-gizli-super-gucu',       changefreq: 'monthly', priority: '0.7' },
  { loc: '/?blog=konusmada-tempo-ve-ritim-kontrolu',               changefreq: 'monthly', priority: '0.7' },
  { loc: '/?blog=beden-dili-ve-ses-uyumu-guvenilirlik',            changefreq: 'monthly', priority: '0.7' },
  { loc: '/?blog=ekibi-harekete-geciren-konusmalar-yonetici-rehberi', changefreq: 'monthly', priority: '0.7' },
  { loc: '/?blog=diksiyon-hakkinda-yanlis-bilinenler',             changefreq: 'monthly', priority: '0.8' },
  { loc: '/?blog=sesinize-zarar-veren-aliskanliklar',              changefreq: 'monthly', priority: '0.8' },
  { loc: '/?blog=turkcede-en-cok-yanlis-soylenen-kelimeler',       changefreq: 'monthly', priority: '0.9' },
  { loc: '/?blog=kamera-onunde-dogal-konusmak-video-diksiyon',     changefreq: 'monthly', priority: '0.7' },
  { loc: '/?blog=ses-icin-5-dakikalik-sabah-rutini',               changefreq: 'monthly', priority: '0.8' },
  { loc: '/?blog=stres-sesi-nasil-degistirir-ve-nasil-geri-alinir',changefreq: 'monthly', priority: '0.7' },
  { loc: '/?blog=konusma-aliskanliklari-testi-farkettiniz-mi',     changefreq: 'monthly', priority: '0.7' },
  { loc: '/?blog=uyku-ve-ses-sagligi-gece-yaptiklariniz-sesi-etkiliyor', changefreq: 'monthly', priority: '0.7' },
  { loc: '/?blog=cocuklardan-ogrenilecek-diksiyon-dersleri',       changefreq: 'monthly', priority: '0.7' },
  { loc: '/?blog=tiz-ses-mi-bas-ses-mi-hangisi-daha-etkili',       changefreq: 'monthly', priority: '0.8' },
  { loc: '/?blog=hikaye-anlatimiyla-konusmanizi-unutulmaz-kilmak',  changefreq: 'monthly', priority: '0.8' },
  { loc: '/?blog=turkcede-diksiyon-egzersizleri-baslangic-rehberi', changefreq: 'monthly', priority: '0.9' },
  { loc: '/?blog=cocuklarda-diksiyon-gelistirme-ebeveyn-rehberi',  changefreq: 'monthly', priority: '0.9' },
  { loc: '/?blog=diksiyon-seviyenizi-olcun-kendi-kendinize-test',  changefreq: 'monthly', priority: '0.9' },
  { loc: '/?blog=aksanli-konusmaktan-diksiyon-gucune-donusum',     changefreq: 'monthly', priority: '0.8' },
  { loc: '/?blog=is-hayatinda-diksiyon-kariyer-etkisi',            changefreq: 'monthly', priority: '0.9' },
];

app.get('/sitemap.xml', (req, res) => {
  const today = new Date().toISOString().split('T')[0]; // YYYY-MM-DD
  const urls = SITEMAP_PAGES.map(({ loc, changefreq, priority }) => `
  <url>
    <loc>${SITE_URL}${loc}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`).join('');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

  res.setHeader('Content-Type', 'application/xml; charset=utf-8');
  res.send(xml);
});

// ── robots.txt ───────────────────────────────────────────────────────────────
app.get('/robots.txt', (req, res) => {
  res.setHeader('Content-Type', 'text/plain; charset=utf-8');
  res.send(`User-agent: *
Allow: /

Sitemap: ${SITE_URL}/sitemap.xml
`);
});

// Tüm istekleri index.html'e yönlendir (SPA desteği)
app.get('/{*path}', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// ── HTTPS desteği (certs/ klasöründeki sertifikalar varsa) ──────
const certPath = path.join(__dirname, 'certs', 'cert.pem');
const keyPath  = path.join(__dirname, 'certs', 'key.pem');

if (fs.existsSync(certPath) && fs.existsSync(keyPath)) {
  const https = require('https');
  const opts  = {
    key:  fs.readFileSync(keyPath),
    cert: fs.readFileSync(certPath),
  };
  https.createServer(opts, app).listen(HTTPS_PORT, () => {
    console.log(`🔒 Diksiyon Rehberi (HTTPS) >> https://localhost:${HTTPS_PORT}`);
    console.log(`   Mikrofon / ses kaydı bu adreste çalışır ✅`);
  });
}

// HTTP sunucusu (localhost'ta getUserMedia yine çalışır)
app.listen(HTTP_PORT, () => {
  console.log(`✅ Diksiyon Rehberi >> http://localhost:${HTTP_PORT}`);
  if (!fs.existsSync(certPath)) {
    console.log(`   💡 Mikrofon sorunları için "npm run gen-cert" ile sertifika oluşturun`);
  }
});