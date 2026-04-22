/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║  indexing-service.js — Google Indexing API Event-Driven Servisi     ║
 * ║                                                                      ║
 * ║  Kullanım 1 — Tek URL bildir:                                        ║
 * ║    const svc = require('./scripts/indexing-service');                ║
 * ║    svc.notifyUpdated('https://www.diksiyonrehberi.com/blog/xyz');    ║
 * ║                                                                      ║
 * ║  Kullanım 2 — Toplu (batch) bildir:                                  ║
 * ║    node scripts/indexing-service.js --batch                          ║
 * ║                                                                      ║
 * ║  Kullanım 3 — Silinmiş URL bildir:                                   ║
 * ║    svc.notifyDeleted('https://www.diksiyonrehberi.com/blog/eski');   ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 *
 * Ön koşullar:
 *  1. npm install googleapis
 *  2. Google Cloud Console → Service Accounts → JSON key indir
 *  3. JSON dosyasını scripts/service-account.json olarak kaydet
 *  4. Search Console → Settings → Users → Add user → Owner (servis hesabı e-posta)
 */

'use strict';

const { google } = require('googleapis');
const path = require('path');
const fs   = require('fs');

// ── Konfigürasyon ──────────────────────────────────────────────────────────
const CONFIG = {
  siteUrl:   'https://www.diksiyonrehberi.com',
  keyFile:   path.join(__dirname, 'service-account.json'),
  scopes:    ['https://www.googleapis.com/auth/indexing'],
  apiEndpoint: 'https://indexing.googleapis.com/v3/urlNotifications:publish',
  // Rate limit: Google'ın günlük kotası 200 URL/gün (ücretsiz)
  delayBetweenRequests: 1200, // ms
};

// ── Tüm Blog Slugları (index.js ile senkron tutun) ─────────────────────────
const ALL_BLOG_SLUGS = [
  'ses-isinma-rehberi', 'liderlik-ses-analizi', 'sihirli-kelimeler',
  'aktif-dinleme', 'diksiyon-nedir-neden-onemli', 'diksiyon-evde-nasil-gelistirilir',
  'profesyonellerin-diksiyon-sirlari', 'ceo-gibi-konusmak-liderlik-iletisimi',
  'sunum-korkusunu-yenmek-guven-konusmasi', 'ikna-edici-konusmak-retorik-sanati',
  'ses-otoritesi-yonetici-varligi', 'etkili-toplanti-yonetimi-konusma-stratejileri',
  'muzakerede-ustunluk-konusma-taktikleri', 'kriz-aninda-nasil-konusulur-lider-iletisimi',
  'vizyon-konusmasi-nasil-yapilir-ilham-veren-lider', 'aktif-dinleme-liderlerin-gizli-super-gucu',
  'konusmada-tempo-ve-ritim-kontrolu', 'beden-dili-ve-ses-uyumu-guvenilirlik',
  'ekibi-harekete-geciren-konusmalar-yonetici-rehberi', 'diksiyon-hakkinda-yanlis-bilinenler',
  'sesinize-zarar-veren-aliskanliklar', 'turkcede-en-cok-yanlis-soylenen-kelimeler',
  'kamera-onunde-dogal-konusmak-video-diksiyon', 'ses-icin-5-dakikalik-sabah-rutini',
  'stres-sesi-nasil-degistirir-ve-nasil-geri-alinir', 'konusma-aliskanliklari-testi-farkettiniz-mi',
  'uyku-ve-ses-sagligi-gece-yaptiklariniz-sesi-etkiliyor', 'cocuklardan-ogrenilecek-diksiyon-dersleri',
  'tiz-ses-mi-bas-ses-mi-hangisi-daha-etkili', 'hikaye-anlatimiyla-konusmanizi-unutulmaz-kilmak',
  'turkcede-diksiyon-egzersizleri-baslangic-rehberi', 'cocuklarda-diksiyon-gelistirme-ebeveyn-rehberi',
  'diksiyon-seviyenizi-olcun-kendi-kendinize-test', 'aksanli-konusmaktan-diksiyon-gucune-donusum',
  'is-hayatinda-diksiyon-kariyer-etkisi', 'yanlis-soylenen-kelimeler', 'sunum-korkusu', 'cocuk-diksiyon',
];

// ── Auth İstemcisi ─────────────────────────────────────────────────────────
let _authClient = null;

async function getAuth() {
  if (_authClient) return _authClient;

  if (!fs.existsSync(CONFIG.keyFile)) {
    throw new Error(
      `Servis hesabı JSON bulunamadı: ${CONFIG.keyFile}\n` +
      `Lütfen Google Cloud Console'dan indirip bu konuma kaydedin.\n` +
      `Detaylı rehber için: https://cloud.google.com/iam/docs/creating-managing-service-account-keys`
    );
  }

  const auth = new google.auth.GoogleAuth({ keyFile: CONFIG.keyFile, scopes: CONFIG.scopes });
  _authClient = await auth.getClient();
  return _authClient;
}

// ── Tek URL Bildirimi ──────────────────────────────────────────────────────
async function _notify(url, type) {
  const client = await getAuth();
  try {
    const res = await client.request({
      url: CONFIG.apiEndpoint,
      method: 'POST',
      data: { url, type },
    });
    console.log(`[IndexingService] ✅ ${type} → ${url} (HTTP ${res.status})`);
    return { ok: true, url, type, status: res.status };
  } catch (err) {
    const code = err?.response?.status || 'ERR';
    const msg  = err?.response?.data?.error?.message || err.message;
    console.error(`[IndexingService] ❌ ${type} → ${url} (${code}: ${msg})`);
    return { ok: false, url, type, status: code, error: msg };
  }
}

// ── Public API ─────────────────────────────────────────────────────────────

/**
 * Yeni eklenen veya güncellenen bir URL'i Google'a bildir.
 * Örnek: svc.notifyUpdated('/blog/yeni-makale');
 */
async function notifyUpdated(urlOrSlug) {
  const url = urlOrSlug.startsWith('http')
    ? urlOrSlug
    : `${CONFIG.siteUrl}${urlOrSlug}`;
  return _notify(url, 'URL_UPDATED');
}

/**
 * Silinen bir URL'i Google'a bildir (deindex etmek için).
 * Örnek: svc.notifyDeleted('/blog/eski-makale');
 */
async function notifyDeleted(urlOrSlug) {
  const url = urlOrSlug.startsWith('http')
    ? urlOrSlug
    : `${CONFIG.siteUrl}${urlOrSlug}`;
  return _notify(url, 'URL_DELETED');
}

/**
 * Birden fazla URL'i sırayla bildir (rate-limit korumalı).
 */
async function notifyBatch(urls, type = 'URL_UPDATED') {
  const results = [];
  for (const url of urls) {
    const fullUrl = url.startsWith('http') ? url : `${CONFIG.siteUrl}${url}`;
    results.push(await _notify(fullUrl, type));
    await new Promise(r => setTimeout(r, CONFIG.delayBetweenRequests));
  }
  const ok = results.filter(r => r.ok).length;
  const fail = results.filter(r => !r.ok).length;
  console.log(`\n[IndexingService] Batch tamamlandı: ✅ ${ok} başarılı, ❌ ${fail} başarısız`);
  return results;
}

/**
 * Sitedeki tüm blog sayfalarını bildir.
 */
async function notifyAllBlogPages() {
  const urls = [
    `${CONFIG.siteUrl}/`,
    ...ALL_BLOG_SLUGS.map(slug => `${CONFIG.siteUrl}/blog/${slug}`),
  ];
  console.log(`[IndexingService] ${urls.length} URL için toplu bildirim başlatılıyor...`);
  return notifyBatch(urls);
}

// ── Express middleware — yeni blog eklenince otomatik bildir ───────────────
/**
 * Bu middleware'i index.js'deki blog oluşturma route'una ekleyin:
 *
 *   const { autoNotifyMiddleware } = require('./scripts/indexing-service');
 *   app.post('/api/blog', autoNotifyMiddleware, blogCreateHandler);
 */
function autoNotifyMiddleware(req, res, next) {
  const originalJson = res.json.bind(res);
  res.json = function(data) {
    // Response başarılıysa ve slug varsa bildir
    if (res.statusCode >= 200 && res.statusCode < 300 && data?.slug) {
      notifyUpdated(`/blog/${data.slug}`)
        .catch(err => console.error('[IndexingService] Auto-notify hatası:', err));
    }
    return originalJson(data);
  };
  next();
}

// ── CLI Modu ──────────────────────────────────────────────────────────────
if (require.main === module) {
  const arg = process.argv[2];

  if (arg === '--batch' || arg === '--all') {
    notifyAllBlogPages()
      .then(() => process.exit(0))
      .catch(err => { console.error(err.message); process.exit(1); });

  } else if (arg === '--url' && process.argv[3]) {
    notifyUpdated(process.argv[3])
      .then(() => process.exit(0))
      .catch(err => { console.error(err.message); process.exit(1); });

  } else if (arg === '--delete' && process.argv[3]) {
    notifyDeleted(process.argv[3])
      .then(() => process.exit(0))
      .catch(err => { console.error(err.message); process.exit(1); });

  } else {
    console.log(`
╔══════════════════════════════════════════════════════════╗
║         Google Indexing API — Servis Yardımı            ║
╠══════════════════════════════════════════════════════════╣
║  node scripts/indexing-service.js --batch               ║
║    → Tüm blog sayfalarını bildir                        ║
║                                                          ║
║  node scripts/indexing-service.js --url /blog/slug      ║
║    → Tek URL'i bildir (yeni/güncellenen)                ║
║                                                          ║
║  node scripts/indexing-service.js --delete /blog/slug   ║
║    → Silinen URL'i bildir                               ║
╚══════════════════════════════════════════════════════════╝
`);
    process.exit(0);
  }
}

module.exports = { notifyUpdated, notifyDeleted, notifyBatch, notifyAllBlogPages, autoNotifyMiddleware };
