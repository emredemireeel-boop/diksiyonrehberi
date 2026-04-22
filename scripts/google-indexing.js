/**
 * ╔══════════════════════════════════════════════════════════════╗
 * ║   Google Indexing API — Toplu Bildirim Scripti              ║
 * ║   Kullanım: node scripts/google-indexing.js                 ║
 * ║                                                              ║
 * ║   Önce: npm install googleapis                              ║
 * ║   Servis hesabı JSON'unu: scripts/service-account.json'a   ║
 * ║   koy ve Google Search Console'da "Sahip" olarak ekle.     ║
 * ╚══════════════════════════════════════════════════════════════╝
 */

'use strict';

const { google } = require('googleapis');
const path = require('path');
const fs   = require('fs');

// ── Konfigürasyon ──────────────────────────────────────────────────────────
const SITE_URL     = 'https://www.diksiyonrehberi.com';
const KEY_FILE     = path.join(__dirname, 'service-account.json');
const SCOPES       = ['https://www.googleapis.com/auth/indexing'];
const BATCH_SIZE   = 100;  // Google API limiti: 100 istek / saniye
const DELAY_MS     = 1100; // Rate-limit koruması

// ── Indexlenecek sayfalar (Anchor URL'leri hariç — bunlar indexlenemez) ───
const PAGES_TO_INDEX = [
  // Ana sayfa
  `${SITE_URL}/`,

  // Blog makaleleri — her biri kendi canonical URL'ine sahip
  `${SITE_URL}/blog/ses-isinma-rehberi`,
  `${SITE_URL}/blog/liderlik-ses-analizi`,
  `${SITE_URL}/blog/sihirli-kelimeler`,
  `${SITE_URL}/blog/aktif-dinleme`,
  `${SITE_URL}/blog/diksiyon-nedir-neden-onemli`,
  `${SITE_URL}/blog/diksiyon-evde-nasil-gelistirilir`,
  `${SITE_URL}/blog/profesyonellerin-diksiyon-sirlari`,
  `${SITE_URL}/blog/ceo-gibi-konusmak-liderlik-iletisimi`,
  `${SITE_URL}/blog/sunum-korkusunu-yenmek-guven-konusmasi`,
  `${SITE_URL}/blog/ikna-edici-konusmak-retorik-sanati`,
  `${SITE_URL}/blog/ses-otoritesi-yonetici-varligi`,
  `${SITE_URL}/blog/etkili-toplanti-yonetimi-konusma-stratejileri`,
  `${SITE_URL}/blog/muzakerede-ustunluk-konusma-taktikleri`,
  `${SITE_URL}/blog/kriz-aninda-nasil-konusulur-lider-iletisimi`,
  `${SITE_URL}/blog/vizyon-konusmasi-nasil-yapilir-ilham-veren-lider`,
  `${SITE_URL}/blog/aktif-dinleme-liderlerin-gizli-super-gucu`,
  `${SITE_URL}/blog/konusmada-tempo-ve-ritim-kontrolu`,
  `${SITE_URL}/blog/beden-dili-ve-ses-uyumu-guvenilirlik`,
  `${SITE_URL}/blog/ekibi-harekete-geciren-konusmalar-yonetici-rehberi`,
  `${SITE_URL}/blog/diksiyon-hakkinda-yanlis-bilinenler`,
  `${SITE_URL}/blog/sesinize-zarar-veren-aliskanliklar`,
  `${SITE_URL}/blog/turkcede-en-cok-yanlis-soylenen-kelimeler`,
  `${SITE_URL}/blog/kamera-onunde-dogal-konusmak-video-diksiyon`,
  `${SITE_URL}/blog/ses-icin-5-dakikalik-sabah-rutini`,
  `${SITE_URL}/blog/stres-sesi-nasil-degistirir-ve-nasil-geri-alinir`,
  `${SITE_URL}/blog/konusma-aliskanliklari-testi-farkettiniz-mi`,
  `${SITE_URL}/blog/uyku-ve-ses-sagligi-gece-yaptiklariniz-sesi-etkiliyor`,
  `${SITE_URL}/blog/cocuklardan-ogrenilecek-diksiyon-dersleri`,
  `${SITE_URL}/blog/tiz-ses-mi-bas-ses-mi-hangisi-daha-etkili`,
  `${SITE_URL}/blog/hikaye-anlatimiyla-konusmanizi-unutulmaz-kilmak`,
  `${SITE_URL}/blog/turkcede-diksiyon-egzersizleri-baslangic-rehberi`,
  `${SITE_URL}/blog/cocuklarda-diksiyon-gelistirme-ebeveyn-rehberi`,
  `${SITE_URL}/blog/diksiyon-seviyenizi-olcun-kendi-kendinize-test`,
  `${SITE_URL}/blog/aksanli-konusmaktan-diksiyon-gucune-donusum`,
  `${SITE_URL}/blog/is-hayatinda-diksiyon-kariyer-etkisi`,
  `${SITE_URL}/blog/yanlis-soylenen-kelimeler`,
  `${SITE_URL}/blog/sunum-korkusu`,
  `${SITE_URL}/blog/cocuk-diksiyon`,
];

// ── Yardımcı: Bekleme ─────────────────────────────────────────────────────
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// ── Auth ──────────────────────────────────────────────────────────────────
async function getAuthClient() {
  if (!fs.existsSync(KEY_FILE)) {
    console.error(`\n❌ HATA: Servis hesabı JSON dosyası bulunamadı!`);
    console.error(`   Beklenen konum: ${KEY_FILE}`);
    console.error(`\n   📋 Nasıl alınır:`);
    console.error(`   1. Google Cloud Console → IAM → Servis Hesapları`);
    console.error(`   2. Yeni hesap oluştur → JSON anahtar indir`);
    console.error(`   3. Search Console → Ayarlar → Kullanıcılar → "Sahip" olarak ekle`);
    process.exit(1);
  }

  const auth = new google.auth.GoogleAuth({ keyFile: KEY_FILE, scopes: SCOPES });
  return auth.getClient();
}

// ── Tek URL bildirimi ─────────────────────────────────────────────────────
async function notifyUrl(client, url, type = 'URL_UPDATED') {
  try {
    const res = await client.request({
      url: 'https://indexing.googleapis.com/v3/urlNotifications:publish',
      method: 'POST',
      data: { url, type },
    });
    return { url, status: res.status, ok: true };
  } catch (err) {
    const code = err?.response?.status || 'ERR';
    const msg  = err?.response?.data?.error?.message || err.message;
    return { url, status: code, ok: false, error: msg };
  }
}

// ── Ana fonksiyon ─────────────────────────────────────────────────────────
async function main() {
  console.log('\n🚀 Google Indexing API — Toplu Bildirim Başlatılıyor');
  console.log(`   Toplam: ${PAGES_TO_INDEX.length} sayfa`);
  console.log(`   Site: ${SITE_URL}\n`);

  const client = await getAuthClient();

  const results = { success: [], failed: [] };
  let i = 0;

  for (const url of PAGES_TO_INDEX) {
    i++;
    process.stdout.write(`[${String(i).padStart(3)}/${PAGES_TO_INDEX.length}] ${url} ... `);

    const result = await notifyUrl(client, url);

    if (result.ok) {
      console.log(`✅ ${result.status}`);
      results.success.push(url);
    } else {
      console.log(`❌ ${result.status} — ${result.error}`);
      results.failed.push({ url, error: result.error });
    }

    // Her BATCH_SIZE sonra uzun bekle, diğerlerinde kısa bekle
    if (i % BATCH_SIZE === 0) {
      console.log(`\n⏳ Rate-limit bekleniyor (5 saniye)...\n`);
      await sleep(5000);
    } else {
      await sleep(DELAY_MS);
    }
  }

  // ── Özet rapor ──────────────────────────────────────────────────────────
  console.log('\n╔══════════════════════════════════════╗');
  console.log('║         İŞLEM TAMAMLANDI             ║');
  console.log('╠══════════════════════════════════════╣');
  console.log(`║  ✅ Başarılı : ${String(results.success.length).padEnd(22)}║`);
  console.log(`║  ❌ Başarısız: ${String(results.failed.length).padEnd(22)}║`);
  console.log('╚══════════════════════════════════════╝');

  if (results.failed.length > 0) {
    console.log('\n❌ Başarısız sayfalar:');
    results.failed.forEach(({ url, error }) => {
      console.log(`   • ${url}`);
      console.log(`     → ${error}`);
    });
  }

  // JSON raporu kaydet
  const reportPath = path.join(__dirname, 'indexing-report.json');
  fs.writeFileSync(reportPath, JSON.stringify({ date: new Date().toISOString(), ...results }, null, 2));
  console.log(`\n📄 Rapor kaydedildi: ${reportPath}`);
}

main().catch((err) => {
  console.error('\n💥 Beklenmedik hata:', err.message);
  process.exit(1);
});
