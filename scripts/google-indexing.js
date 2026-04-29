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
  // ══ ANA SAYFA ══
  `${SITE_URL}/`,
  `${SITE_URL}/diksiyon`,

  // ══ DİKSİYON ALT SAYFALARI ══
  `${SITE_URL}/diksiyon/nefes`,
  `${SITE_URL}/diksiyon/tekerleme`,
  `${SITE_URL}/diksiyon/ses`,
  `${SITE_URL}/diksiyon/telaffuz`,
  `${SITE_URL}/diksiyon/ritim`,
  `${SITE_URL}/diksiyon/vurgu`,
  `${SITE_URL}/diksiyon/duraklama`,
  `${SITE_URL}/diksiyon/rezonans`,
  `${SITE_URL}/diksiyon/programlar`,
  `${SITE_URL}/diksiyon/okunuslar`,
  `${SITE_URL}/diksiyon/teleprompter`,
  `${SITE_URL}/diksiyon/blog`,
  `${SITE_URL}/diksiyon/okuma`,

  // ══ RETORİK ANA + ALT SAYFALARI ══
  `${SITE_URL}/retorik`,
  `${SITE_URL}/retorik/ethos`,
  `${SITE_URL}/retorik/pathos`,
  `${SITE_URL}/retorik/logos`,
  `${SITE_URL}/retorik/konusma-yazimi`,
  `${SITE_URL}/retorik/figurler`,
  `${SITE_URL}/retorik/analiz`,

  // ══ DİYALEKTİK ANA + ALT SAYFALARI ══
  `${SITE_URL}/diyalektik`,
  `${SITE_URL}/diyalektik/sokratik`,
  `${SITE_URL}/diyalektik/hegel`,
  `${SITE_URL}/diyalektik/curutme`,
  `${SITE_URL}/diyalektik/celisiki`,
  `${SITE_URL}/diyalektik/tartisma`,
  `${SITE_URL}/diyalektik/dusunce`,

  // ══ DİĞER MODÜLLER ══
  `${SITE_URL}/giyim`,
  `${SITE_URL}/safsata`,
  `${SITE_URL}/sahne`,
  `${SITE_URL}/bedendili`,
  `${SITE_URL}/ozguven`,
  `${SITE_URL}/manipulasyon`,
  `${SITE_URL}/hikaye`,
  `${SITE_URL}/gorgu`,

  // ══ TEKERLEMELER (A-Z) ══
  `${SITE_URL}/tekerlemeler/a`,
  `${SITE_URL}/tekerlemeler/b`,
  `${SITE_URL}/tekerlemeler/c`,
  `${SITE_URL}/tekerlemeler/%C3%A7`,
  `${SITE_URL}/tekerlemeler/d`,
  `${SITE_URL}/tekerlemeler/e`,
  `${SITE_URL}/tekerlemeler/f`,
  `${SITE_URL}/tekerlemeler/g`,
  `${SITE_URL}/tekerlemeler/%C4%9F`,
  `${SITE_URL}/tekerlemeler/h`,
  `${SITE_URL}/tekerlemeler/%C4%B1`,
  `${SITE_URL}/tekerlemeler/i`,
  `${SITE_URL}/tekerlemeler/j`,
  `${SITE_URL}/tekerlemeler/k`,
  `${SITE_URL}/tekerlemeler/l`,
  `${SITE_URL}/tekerlemeler/m`,
  `${SITE_URL}/tekerlemeler/n`,
  `${SITE_URL}/tekerlemeler/o`,
  `${SITE_URL}/tekerlemeler/%C3%B6`,
  `${SITE_URL}/tekerlemeler/p`,
  `${SITE_URL}/tekerlemeler/r`,
  `${SITE_URL}/tekerlemeler/s`,
  `${SITE_URL}/tekerlemeler/%C5%9F`,
  `${SITE_URL}/tekerlemeler/t`,
  `${SITE_URL}/tekerlemeler/u`,
  `${SITE_URL}/tekerlemeler/%C3%BC`,
  `${SITE_URL}/tekerlemeler/v`,
  `${SITE_URL}/tekerlemeler/y`,
  `${SITE_URL}/tekerlemeler/z`,

  // ══ TEKERLEME KATEGORİLERİ ══
  `${SITE_URL}/tekerlemeler/kategori/en-zor-tekerlemeler`,
  `${SITE_URL}/tekerlemeler/kategori/kisa-tekerlemeler`,
  `${SITE_URL}/tekerlemeler/kategori/uzun-tekerlemeler`,
  `${SITE_URL}/tekerlemeler/kategori/cocuklar-icin-tekerlemeler`,
  `${SITE_URL}/tekerlemeler/kategori/diksiyon-tekerlemeleri`,
  `${SITE_URL}/tekerlemeler/kategori/spiker-tekerlemeleri`,
  `${SITE_URL}/tekerlemeler/kategori/dudak-tembelligi-icin-tekerlemeler`,
  `${SITE_URL}/tekerlemeler/kategori/r-harfi-tekerlemeleri`,
  `${SITE_URL}/tekerlemeler/kategori/s-ve-s-harfi-tekerlemeleri`,
  `${SITE_URL}/tekerlemeler/kategori/pelteklik-icin-tekerlemeler`,
  `${SITE_URL}/tekerlemeler/kategori/artikulasyon-tekerlemeleri`,
  `${SITE_URL}/tekerlemeler/kategori/tiyatro-tekerlemeleri`,
  `${SITE_URL}/tekerlemeler/kategori/hizli-okuma-tekerlemeleri`,
  `${SITE_URL}/tekerlemeler/kategori/ilkokul-1-sinif-tekerlemeleri`,
  `${SITE_URL}/tekerlemeler/kategori/komik-tekerlemeler`,
  `${SITE_URL}/tekerlemeler/kategori/yarismalik-zor-tekerlemeler`,
  `${SITE_URL}/tekerlemeler/kategori/akil-karistiran-tekerlemeler`,

  // ══ BLOG MAKALELERİ ══
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

  // ══ SEO LANDING SAYFALARI ══
  `${SITE_URL}/karsilastirma`,
  `${SITE_URL}/teleprompter`,
  `${SITE_URL}/ritim-testi`,
  `${SITE_URL}/ses-analizi`,
  `${SITE_URL}/nefes-egzersizleri`,
  `${SITE_URL}/ses-acma-egzersizleri`,
  `${SITE_URL}/telaffuz-calismalari`,
  `${SITE_URL}/vurgu-teknikleri`,
  `${SITE_URL}/duraklama-teknikleri`,
  `${SITE_URL}/rezonans-egzersizleri`,
  `${SITE_URL}/okuma-parcalari`,
  `${SITE_URL}/diksiyon-programlari`,
  `${SITE_URL}/okunuslar`,
  `${SITE_URL}/ses-rengi-nasil-degisir`,
  `${SITE_URL}/ikna-edici-konusma-sanati`,
  `${SITE_URL}/ses-kisikligi-icin-ne-yapmali`,
  `${SITE_URL}/pazarlamacilar-icin-diksiyon`,
  `${SITE_URL}/r-harfi-nasil-soylenir`,
  `${SITE_URL}/s-harfi-nasil-soylenir`,
  `${SITE_URL}/etkili-sunum-teknikleri`,
  `${SITE_URL}/kelime-dagarcigini-gelistirmek`,
  `${SITE_URL}/nasil-daha-etkili-konusurum`,
  `${SITE_URL}/diksiyon-testi`,
  `${SITE_URL}/beden-dili-ve-diksiyon`,
  `${SITE_URL}/akici-turkce-konusmak`,
  `${SITE_URL}/duygusal-konusma-teknikleri`,
  `${SITE_URL}/ses-titremesi-nasil-gecer`,
  `${SITE_URL}/siyasetciler-icin-hitabet`,
  `${SITE_URL}/yoneticiler-icin-diksiyon`,
  `${SITE_URL}/diksiyon-tekerlemeleri-pdf`,
  `${SITE_URL}/diksiyon-kitap-onerileri`,
  `${SITE_URL}/ses-ve-nefes-egitimi`,
  `${SITE_URL}/diksiyon-kurallari`,
  `${SITE_URL}/en-zor-diksiyon-tekerlemeleri`,
  `${SITE_URL}/ozguvenli-konusma-teknikleri`,
  `${SITE_URL}/topluluk-onunde-konusma-korkusu`,
  `${SITE_URL}/guzel-konusma-sanati`,
  `${SITE_URL}/ses-inceltme-egzersizleri`,
  `${SITE_URL}/ses-kalinlastirma-egzersizleri`,
  `${SITE_URL}/avukatlar-icin-hitabet`,
  `${SITE_URL}/cagri-merkezi-diksiyonu`,
  `${SITE_URL}/ogretmenler-icin-diksiyon`,
  `${SITE_URL}/online-diksiyon-kursu`,
  `${SITE_URL}/diksiyon-egzersizleri-video`,
  `${SITE_URL}/turkce-telaffuz-rehberi`,
  `${SITE_URL}/nefes-kontrolu-ve-konusma`,
  `${SITE_URL}/konusma-bozukluklari-ve-diksiyon`,
  `${SITE_URL}/sesini-kesfet`,
  `${SITE_URL}/mikrofon-onunde-konusmak`,
  `${SITE_URL}/podcast-icin-diksiyon`,
  `${SITE_URL}/youtuber-icin-diksiyon`,
  `${SITE_URL}/sahne-korkusu-nasil-yenilir`,
  `${SITE_URL}/hitabet-sanati-nedir`,
  `${SITE_URL}/diksiyon-ve-kariyer`,
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
