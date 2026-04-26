'use strict';

const express = require('express');
const compression = require('compression');
const path    = require('path');
const fs      = require('fs');
const app     = express();
const HTTP_PORT  = 3000;
const HTTPS_PORT = 3443;

const SITE_URL = 'https://www.diksiyonrehberi.com';

// ── Gzip Sıkıştırma ───────────────────────────────────────────────────────
app.use(compression());

// ── Statik dosyalar (index.html hariç — dinamik işleyeceğiz) ─────────────
app.use(express.static(path.join(__dirname, 'public'), { index: false }));

// ═══════════════════════════════════════════════════════════════════════════
// Tekerlemeler Veritabanını Oku (SSR ve Sitemap İçin)
// ═══════════════════════════════════════════════════════════════════════════
let TEKERLEMELER = {};
let UZUN_KUYRUK_KATEGORILER = {};
let KATEGORI_VERILERI = {};
try {
  let tCode = fs.readFileSync(path.join(__dirname, 'public', 'tekerlemeler.js'), 'utf8');
  // eval kullanarak değişkenleri alıyoruz
  tCode = tCode.replace('const TEKERLEMELER =', 'TEKERLEMELER =')
               .replace('const UZUN_KUYRUK_KATEGORILER =', 'UZUN_KUYRUK_KATEGORILER =')
               .replace('const KATEGORI_VERILERI =', 'KATEGORI_VERILERI =')
               .replace('const TURKCE_ALFABE =', 'let TURKCE_ALFABE =')
               .replace('const _allTekers =', 'let _allTekers =');
  eval(tCode);
} catch (e) {
  console.error('Tekerlemeler yüklenemedi:', e);
}


// ═══════════════════════════════════════════════════════════════════════════
// Blog Meta SEO Veritabanı
// Her slug için title, desc ve canonical URL tanımlı
// ═══════════════════════════════════════════════════════════════════════════
const BLOG_META = {
  'ses-isinma-rehberi': {
    title: 'Günde 15 Dakikayla Sesinizi Değiştiririn: Profesyonel Ses Isıtma Rutini - Diksiyon Rehberi',
    desc:  'Neden sabahları sesiniz kısık çıkıyor? Konuşurken boğazınız neden ağrıyor? Bu rehberle ses tellerinizi profesyonel bir enstrümana dönüştürecek 15 dakikalık rutini keşfedin.',
  },
  'liderlik-ses-analizi': {
    title: 'Toplumsal İkna: Güçlü Liderlik Sesi Nasıl İcat Edilir? - Diksiyon Rehberi',
    desc:  'Ağzınızı açtığınızda salonun buz kesmesini sağlayan gizli liderlik sırları. Karizma bir vokal mühendisliği sonucudur.',
  },
  'sihirli-kelimeler': {
    title: 'Negatifi Pozitife Döndür: Ofis İkna Sanatı - Diksiyon Rehberi',
    desc:  'Hayır demek sizi ofiste düşmanlaştırmamalı. Karşınızdakini suçlamadan hatasını kabul ettirmenin kurumsal yolları.',
  },
  'aktif-dinleme': {
    title: "İknaların Sırrı: Güç Oyunu 'Aktif Dinleme' - Diksiyon Rehberi",
    desc:  'FBI taktik laboratuvarlarından aktif dinleme teknikleri. Bir odadaki en güçlü kişi neden en sessiz kişidir?',
  },
  'diksiyon-nedir-neden-onemli': {
    title: 'Diksiyon Nedir ve Neden Bu Kadar Önemli? - Diksiyon Rehberi',
    desc:  'Diksiyon sadece güzel konuşmak değildir. Kariyer, sosyal hayat ve özgüven üzerindeki etkisini bilimsel verilerle keşfedin.',
  },
  'diksiyon-evde-nasil-gelistirilir': {
    title: 'Evde Diksiyon Nasıl Geliştirilir? 7 Pratik Yöntem - Diksiyon Rehberi',
    desc:  "Profesyonel kurs almadan evde diksiyon geliştirmenin kanıtlanmış 7 yöntemi. Günde 10 dakika yeterli.",
  },
  'profesyonellerin-diksiyon-sirlari': {
    title: 'Profesyonellerin Diksiyon Sırları: Sunucular Nasıl Konuşuyor? - Diksiyon Rehberi',
    desc:  'TV sunucuları, politikacılar ve CEO\'ların kullandığı gelişmiş diksiyon teknikleri. Profesyonel seslerin arkasındaki sırlar.',
  },
  'ceo-gibi-konusmak-liderlik-iletisimi': {
    title: 'CEO Gibi Konuşmak: Liderlik İletişiminin Formülü - Diksiyon Rehberi',
    desc:  'Otorite hissettiren bir ses için CEO\'ların kullandığı konuşma formülleri. Liderlik iletişiminin temel prensipleri.',
  },
  'sunum-korkusunu-yenmek-guven-konusmasi': {
    title: 'Sunum Korkusunu Yenmek: Güvenle Konuşmanın Bilimi - Diksiyon Rehberi',
    desc:  'Sahne korkusunu performansa dönüştürmek için nörobilim destekli teknikler. Sunum öncesi yapmanız gereken 5 egzersiz.',
  },
  'ikna-edici-konusmak-retorik-sanati': {
    title: 'İkna Edici Konuşmak: Modern Retorik Sanatı - Diksiyon Rehberi',
    desc:  'Aristoteles\'ten modern psikolojiye uzanan ikna teknikleri. Karşınızdakini mantık ve duyguyla etkilemenin yolları.',
  },
  'ses-otoritesi-yonetici-varligi': {
    title: 'Ses Otoritesi: Yönetici Varlığının Gizli Silahı - Diksiyon Rehberi',
    desc:  'Oda dolduran yönetici varlığının %38\'i sesten gelir. Ses otoritesi nasıl inşa edilir?',
  },
  'etkili-toplanti-yonetimi-konusma-stratejileri': {
    title: 'Etkili Toplantı Yönetimi: Konuşma Stratejileri - Diksiyon Rehberi',
    desc:  'Toplantılarda söz alan, etkili konuşan ve ikna eden yöneticilerin kullandığı konuşma stratejileri.',
  },
  'muzakerede-ustunluk-konusma-taktikleri': {
    title: 'Müzakerede Üstünlük: Konuşma Taktikleri - Diksiyon Rehberi',
    desc:  'Müzakere masasında ses tonunuzu, hızınızı ve duraklamalarınızı nasıl kullanırsınız? Uzman taktikler.',
  },
  'kriz-aninda-nasil-konusulur-lider-iletisimi': {
    title: 'Kriz Anında Nasıl Konuşulur? Lider İletişimi - Diksiyon Rehberi',
    desc:  'Kriz dönemlerinde güven veren, sakin ve otoriter bir ses için liderlik iletişimi rehberi.',
  },
  'vizyon-konusmasi-nasil-yapilir-ilham-veren-lider': {
    title: 'Vizyon Konuşması Nasıl Yapılır? İlham Veren Lider Olmak - Diksiyon Rehberi',
    desc:  'TED konuşmacılarından ilham alan vizyon konuşması yapısı. Ekibinizi harekete geçirecek konuşma formülü.',
  },
  'aktif-dinleme-liderlerin-gizli-super-gucu': {
    title: "Aktif Dinleme: Liderlerin Gizli Süper Gücü - Diksiyon Rehberi",
    desc:  'En güçlü liderler en iyi dinleyicilerdir. Aktif dinlemenin liderlik üzerindeki kanıtlanmış etkileri.',
  },
  'konusmada-tempo-ve-ritim-kontrolu': {
    title: 'Konuşmada Tempo ve Ritim Kontrolü - Diksiyon Rehberi',
    desc:  'Konuşma hızınızı nasıl kontrol edersiniz? Tempo ve ritmin izleyici üzerindeki psikolojik etkileri.',
  },
  'beden-dili-ve-ses-uyumu-guvenilirlik': {
    title: 'Beden Dili ve Ses Uyumu: Güvenilirlik İnşa Etmek - Diksiyon Rehberi',
    desc:  'Sesiniz ve beden diliniz uyumlu olmadığında güvenilirliğiniz sıfıra düşer. Uyum sağlamanın yolları.',
  },
  'ekibi-harekete-geciren-konusmalar-yonetici-rehberi': {
    title: 'Ekibi Harekete Geçiren Konuşmalar: Yönetici Rehberi - Diksiyon Rehberi',
    desc:  'Motivasyon konuşmalarının arkasındaki bilim. Ekibinizi eyleme geçirecek konuşma yapıları.',
  },
  'diksiyon-hakkinda-yanlis-bilinenler': {
    title: 'Diksiyon Hakkında Yanlış Bilinenler: 10 Mit Çürütüldü - Diksiyon Rehberi',
    desc:  '"Diksiyon doğuştan gelir, öğrenilmez" ve benzeri yanlış inanışlar. Bilimsel gerçekler ortaya koyuluyor.',
  },
  'sesinize-zarar-veren-aliskanliklar': {
    title: 'Sesinize Zarar Veren 8 Alışkanlık - Diksiyon Rehberi',
    desc:  'Sesinizi farkında olmadan yıpratan alışkanlıklar. Ses sağlığını korumak için hemen bırakmanız gerekenler.',
  },
  'turkcede-en-cok-yanlis-soylenen-kelimeler': {
    title: "Türkçede En Çok Yanlış Söylenen Kelimeler ve TDK Doğruları - Diksiyon Rehberi",
    desc:  'Tabiki, müzig, kahvaldı... Günlük hayatta farkında olmadan söylediğiniz yanlış telaffuzları ve TDK doğrularını keşfedin.',
  },
  'kamera-onunde-dogal-konusmak-video-diksiyon': {
    title: 'Kamera Önünde Doğal Konuşmak: Video Diksiyon Rehberi - Diksiyon Rehberi',
    desc:  'YouTuber, sunum yapan veya video içerik üreten herkes için kamera diksiyon teknikleri.',
  },
  'ses-icin-5-dakikalik-sabah-rutini': {
    title: 'Ses İçin 5 Dakikalık Sabah Rutini - Diksiyon Rehberi',
    desc:  'Her sabah 5 dakika ile sesinizi güne hazırlamanın kolay yolu. Profesyonellerin sabah ritüelleri.',
  },
  'stres-sesi-nasil-degistirir-ve-nasil-geri-alinir': {
    title: 'Stres Sesinizi Nasıl Değiştirir ve Nasıl Geri Alınır? - Diksiyon Rehberi',
    desc:  'Stres altında titreyen, yükselen veya kısılan ses. Sesinizi strese karşı güçlendirmenin yolları.',
  },
  'konusma-aliskanliklari-testi-farkettiniz-mi': {
    title: 'Konuşma Alışkanlıkları Testi: Fark Ettiniz mi? - Diksiyon Rehberi',
    desc:  'Kendinizin farkında olmadığınız konuşma alışkanlıklarını keşfetmek için interaktif test.',
  },
  'uyku-ve-ses-sagligi-gece-yaptiklariniz-sesi-etkiliyor': {
    title: 'Uyku ve Ses Sağlığı: Gece Yaptıklarınız Sesinizi Etkiliyor - Diksiyon Rehberi',
    desc:  'Uyku kalitesi ve ses sağlığı arasındaki doğrudan ilişki. Sesinizi korumak için gece rutini.',
  },
  'cocuklardan-ogrenilecek-diksiyon-dersleri': {
    title: 'Çocuklardan Öğrenilecek Diksiyon Dersleri - Diksiyon Rehberi',
    desc:  'Çocuklar dili nasıl bu kadar hızlı öğreniyor? Yetişkinlerin çocuklardan alabileceği diksiyon dersleri.',
  },
  'tiz-ses-mi-bas-ses-mi-hangisi-daha-etkili': {
    title: 'Tiz Ses mi Bas Ses mi? Hangisi Daha Etkili? - Diksiyon Rehberi',
    desc:  'Ses frekansının ikna, güvenilirlik ve liderlik algısı üzerindeki etkisi. Araştırmalar ne diyor?',
  },
  'hikaye-anlatimiyla-konusmanizi-unutulmaz-kilmak': {
    title: 'Hikaye Anlatımıyla Konuşmanızı Unutulmaz Kılmak - Diksiyon Rehberi',
    desc:  'Beyin hikayeleri farklı işler. Konuşmalarınıza hikaye anlatımı ekleyerek izleyiciyi bağlama teknikleri.',
  },
  'turkcede-diksiyon-egzersizleri-baslangic-rehberi': {
    title: "Türkçede Diksiyon Egzersizleri: Başlangıç Rehberi - Diksiyon Rehberi",
    desc:  "Türkçeye özel diksiyon egzersizleri. Başlangıç seviyesi için adım adım rehber.",
  },
  'cocuklarda-diksiyon-gelistirme-ebeveyn-rehberi': {
    title: 'Çocuklarda Diksiyon Geliştirme: Ebeveyn Rehberi - Diksiyon Rehberi',
    desc:  '3-12 yaş arası çocuklarda diksiyon gelişimi için kanıtlanmış oyun tabanlı teknikler.',
  },
  'diksiyon-seviyenizi-olcun-kendi-kendinize-test': {
    title: 'Diksiyon Seviyenizi Ölçün: Kendi Kendinize Test - Diksiyon Rehberi',
    desc:  'Diksiyon seviyenizi evde ölçmenizi sağlayan bilimsel test yöntemi. Güçlü ve zayıf yönlerinizi keşfedin.',
  },
  'aksanli-konusmaktan-diksiyon-gucune-donusum': {
    title: 'Aksanlı Konuşmaktan Diksiyon Gücüne Dönüşüm - Diksiyon Rehberi',
    desc:  'Bölgesel aksanları standart Türkçeye dönüştürme süreci. Aksanı güce çeviren egzersizler.',
  },
  'is-hayatinda-diksiyon-kariyer-etkisi': {
    title: 'İş Hayatında Diksiyon: Kariyerinizi Değiştiren Ses - Diksiyon Rehberi',
    desc:  'İş görüşmelerinde, terfilerde ve liderlik pozisyonlarında diksiyonun ölçülebilir kariyer etkisi.',
  },
  'yanlis-soylenen-kelimeler': {
    title: "Türkçede En Çok Yanlış Telaffuz Edilen 30 Kelime ve Doğruları - Diksiyon Rehberi",
    desc:  'Tabiki, müzig, kahvaldı... Günlük hayatta farkında olmadan söylediğiniz yanlış telaffuzları ve TDK doğrularını keşfedin.',
  },
  'sunum-korkusu': {
    title: "Sahne Korkusunu Silah'a Dönüştür: Bilimsel Sunum Psikolojisi - Diksiyon Rehberi",
    desc:  'Glossophobia (sunum korkusu) neden ölüm korkusundan bile yaygın? Harvard araştırmalarıyla sahne korkusunu performansa dönüştürme rehberi.',
  },
  'cocuk-diksiyon': {
    title: "Çocuğunuzun Sesi, Geleceğidir: 3-12 Yaş Diksiyon Geliştirme Rehberi - Diksiyon Rehberi",
    desc:  '3 yaşında düzgün konuşan bir çocuğun okul başarısı 2.3 kat daha yüksek. Ebeveynler evde ne yapabilir?',
  },
};

// ═══════════════════════════════════════════════════════════════════════════
// Sitemap — Sadece gerçek, indexlenebilir URL'ler
// NOT: /#anchor URL'leri Google tarafından indexlenemez, kaldırıldı.
// ═══════════════════════════════════════════════════════════════════════════
const SITEMAP_PAGES = [
  { loc: '/',                                                              changefreq: 'weekly',  priority: '1.0' },
  // Blog makaleleri — /blog/slug formatında (indexlenebilir)
  ...Object.keys(BLOG_META).map((slug) => ({
    loc: `/blog/${slug}`,
    changefreq: 'monthly',
    priority: slug.includes('yanlis') || slug.includes('diksiyon-nedir') || slug.includes('kariyer') ? '0.9' : '0.8',
  })),
  // Tekerlemeler sayfaları — /tekerlemeler/harf formatında
  ...Object.keys(TEKERLEMELER).map((harf) => ({
    loc: `/tekerlemeler/${harf.toLocaleLowerCase('tr-TR')}`,
    changefreq: 'monthly',
    priority: '0.8',
  })),
  // Uzun Kuyruk Tekerleme Kategorileri
  ...Object.keys(UZUN_KUYRUK_KATEGORILER).map((slug) => ({
    loc: `/tekerlemeler/kategori/${slug}`,
    changefreq: 'weekly',
    priority: '0.9', // Bunlar daha çok aranan anahtar kelimeler
  })),
];

// ═══════════════════════════════════════════════════════════════════════════
// Yardımcı: HTML'e SSR meta enjeksiyonu
// ═══════════════════════════════════════════════════════════════════════════
function injectMeta(html, meta, canonicalUrl) {
  // Title
  html = html.replace(/<title>.*?<\/title>/, `<title>${meta.title}</title>`);
  // Description
  html = html.replace(/(<meta name="description" content=")[^"]*(")/,   `$1${meta.desc}$2`);
  // Canonical — doğru blog URL'ini yaz
  html = html.replace(/(<link rel="canonical" href=")[^"]*(")/,          `$1${canonicalUrl}$2`);
  // OG
  html = html.replace(/(<meta property="og:title" content=")[^"]*(")/,       `$1${meta.title}$2`);
  html = html.replace(/(<meta property="og:description" content=")[^"]*(")/,  `$1${meta.desc}$2`);
  html = html.replace(/(<meta property="og:url" content=")[^"]*(")/,         `$1${canonicalUrl}$2`);
  html = html.replace(/content="website"/,                                    'content="article"');
  // Twitter
  html = html.replace(/(<meta name="twitter:title" content=")[^"]*(")/,      `$1${meta.title}$2`);
  html = html.replace(/(<meta name="twitter:description" content=")[^"]*(")/,`$1${meta.desc}$2`);
  return html;
}

// ═══════════════════════════════════════════════════════════════════════════
// Article JSON-LD Yapısal Verisi (Google Rich Results)
// SSR ile eklenir — JS çalışmadan Googlebot görür
// ═══════════════════════════════════════════════════════════════════════════
function buildArticleJsonLd(meta, canonicalUrl, slug) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    'headline': meta.title,
    'description': meta.desc,
    'url': canonicalUrl,
    'inLanguage': 'tr',
    'author': {
      '@type': 'Organization',
      'name': 'Diksiyon Rehberi',
      'url': SITE_URL,
    },
    'publisher': {
      '@type': 'Organization',
      'name': 'Diksiyon Rehberi',
      'url': SITE_URL,
      'logo': {
        '@type': 'ImageObject',
        'url': `${SITE_URL}/favicon.svg`,
      },
    },
    'mainEntityOfPage': {
      '@type': 'WebPage',
      '@id': canonicalUrl,
    },
    'dateModified': new Date().toISOString(),
  };
  return `<script type="application/ld+json">${JSON.stringify(schema)}</script>`;
}

// ═══════════════════════════════════════════════════════════════════════════
// İç Linkleme HTML Bloğu — Googlebot için statik crawlable linkler
// Bu blok gizli (display:none) ama Google crawl eder.
// "Keşfedildi ama indexlenmedi" sorununu aşmak için kritik.
// ═══════════════════════════════════════════════════════════════════════════
function buildInternalLinksBlock() {
  const links = Object.keys(BLOG_META).map(slug =>
    `<a href="/blog/${slug}">${BLOG_META[slug].title}</a>`
  ).join('\n    ');
  
  const tekerlemeLinks = Object.keys(TEKERLEMELER).map(harf =>
    `<a href="/tekerlemeler/${harf.toLocaleLowerCase('tr-TR')}">${harf} Harfi Tekerlemeleri</a>`
  ).join('\n    ');

  const kategoriLinks = Object.keys(UZUN_KUYRUK_KATEGORILER).map(slug =>
    `<a href="/tekerlemeler/kategori/${slug}">${UZUN_KUYRUK_KATEGORILER[slug].title}</a>`
  ).join('\n    ');

  return `
<!-- SEO Internal Links — Googlebot crawl desteği -->
<nav aria-label="Sitemap Linkleri" style="position:absolute;left:-9999px;width:1px;height:1px;overflow:hidden" aria-hidden="true">
  <h2>Tüm Makaleler</h2>
  ${links}
  <h2>Popüler Tekerleme Kategorileri</h2>
  ${kategoriLinks}
  <h2>Tüm Tekerlemeler (A-Z)</h2>
  ${tekerlemeLinks}
</nav>`;
}

// ═══════════════════════════════════════════════════════════════════════════
// ROUTE: /sitemap.xml
// ═══════════════════════════════════════════════════════════════════════════
app.get('/sitemap.xml', (req, res) => {
  const today = new Date().toISOString().split('T')[0];
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
  res.setHeader('Cache-Control', 'public, max-age=3600');
  res.send(xml);
});

// ═══════════════════════════════════════════════════════════════════════════
// ROUTE: /robots.txt
// ═══════════════════════════════════════════════════════════════════════════
app.get('/robots.txt', (req, res) => {
  res.setHeader('Content-Type', 'text/plain; charset=utf-8');
  res.setHeader('Cache-Control', 'public, max-age=86400');
  res.send(`User-agent: *
Allow: /

# Tarama Optimizasyonu (Googlebot için crawl budget)
Disallow: /*?blog=
Disallow: /*?modal=
Disallow: /api/

Sitemap: ${SITE_URL}/sitemap.xml
`);
});

// ═══════════════════════════════════════════════════════════════════════════
// ROUTE: Eski /?blog=slug → /blog/slug (301 Kalıcı Yönlendirme)
// Bu, sosyal medyada paylaşılmış eski linklerin çalışmaya devam etmesini sağlar.
// ═══════════════════════════════════════════════════════════════════════════
app.get('/', (req, res, next) => {
  const slug = req.query.blog;
  if (slug) {
    return res.redirect(301, `/blog/${slug}`);
  }
  next();
});

// ═══════════════════════════════════════════════════════════════════════════
// ROUTE: /blog/:slug — SSR meta injection + doğru canonical
// ═══════════════════════════════════════════════════════════════════════════
app.get('/blog/:slug', (req, res) => {
  const { slug } = req.params;
  const meta = BLOG_META[slug];
  const htmlPath = path.join(__dirname, 'public', 'index.html');

  // Bilinmeyen slug → ana sayfaya 301 yönlendir
  if (!meta) {
    return res.redirect(301, '/');
  }

  fs.readFile(htmlPath, 'utf8', (err, html) => {
    if (err) return res.status(500).send('Sunucu hatası.');

    const canonicalUrl = `${SITE_URL}/blog/${slug}`;

    // 1. Meta tagları enjekte et
    html = injectMeta(html, meta, canonicalUrl);

    // 2. Article JSON-LD ekle — Google Rich Results + içerik sinyali
    const jsonLd = buildArticleJsonLd(meta, canonicalUrl, slug);
    html = html.replace('</head>', `${jsonLd}\n</head>`);

    // 3. Canonical HTTP Link header (Nginx + Node.js çift güvence)
    res.setHeader('Link', `<${canonicalUrl}>; rel="canonical"`);
    res.setHeader('Cache-Control', 'public, max-age=300');
    res.send(html);
  });
});

// ═══════════════════════════════════════════════════════════════════════════
// ROUTE: /tekerlemeler/:harf — SSR meta injection + SEO Content
// ═══════════════════════════════════════════════════════════════════════════
app.get('/tekerlemeler/:harf', (req, res) => {
  const harfLower = req.params.harf.toLocaleLowerCase('tr-TR');
  const harfUpper = req.params.harf.toLocaleUpperCase('tr-TR');
  
  // Geçerli bir harf mi kontrol et
  if (!TEKERLEMELER[harfUpper]) {
    return res.redirect(301, '/');
  }

  const htmlPath = path.join(__dirname, 'public', 'index.html');
  const canonicalUrl = `${SITE_URL}/tekerlemeler/${harfLower}`;

  const meta = {
    title: `${harfUpper} Harfi Tekerlemeleri - Diksiyon Rehberi`,
    desc: `Türkçe diksiyonunuzu geliştirmek için ${harfUpper} harfi ile başlayan en zor, etkili ve eğitici tekerlemeler. ${harfUpper} harfi tekerleme pratikleri ve okunuşları.`,
  };

  fs.readFile(htmlPath, 'utf8', (err, html) => {
    if (err) return res.status(500).send('Sunucu hatası.');

    // 1. Meta tagları enjekte et
    html = injectMeta(html, meta, canonicalUrl);

    // 2. Article JSON-LD ekle
    const jsonLd = buildArticleJsonLd(meta, canonicalUrl, `tekerleme-${harfLower}`);
    html = html.replace('</head>', `${jsonLd}\n</head>`);

    // 3. SEO için tekerlemeleri HTML'e ekle (Gizli Liste)
    const listItems = TEKERLEMELER[harfUpper].map(t => `<li>${t}</li>`).join('\n');
    const seoBlock = `
<!-- SEO Tekerlemeler Listesi -->
<div id="seo-tekerlemeler" style="position:absolute;left:-9999px;width:1px;height:1px;overflow:hidden" aria-hidden="true">
  <h2>${harfUpper} Harfi Tekerlemeleri</h2>
  <ul>${listItems}</ul>
</div>`;
    html = html.replace('</body>', `${seoBlock}\n</body>`);

    // 4. Canonical HTTP Link header
    res.setHeader('Link', `<${canonicalUrl}>; rel="canonical"`);
    res.setHeader('Cache-Control', 'public, max-age=300');
    res.send(html);
  });
});

// ═══════════════════════════════════════════════════════════════════════════
// ROUTE: /tekerlemeler/kategori/:slug — Uzun Kuyruk SEO Rotaları
// ═══════════════════════════════════════════════════════════════════════════
app.get('/tekerlemeler/kategori/:slug', (req, res) => {
  const { slug } = req.params;
  
  if (!UZUN_KUYRUK_KATEGORILER[slug]) {
    return res.redirect(301, '/');
  }

  const htmlPath = path.join(__dirname, 'public', 'index.html');
  const canonicalUrl = `${SITE_URL}/tekerlemeler/kategori/${slug}`;
  const kategoriMeta = UZUN_KUYRUK_KATEGORILER[slug];
  const tekerlemeListesi = KATEGORI_VERILERI[slug] || [];

  const meta = {
    title: kategoriMeta.title,
    desc: kategoriMeta.desc,
  };

  fs.readFile(htmlPath, 'utf8', (err, html) => {
    if (err) return res.status(500).send('Sunucu hatası.');

    // 1. Meta tagları enjekte et
    html = injectMeta(html, meta, canonicalUrl);

    // 2. Article JSON-LD ekle
    const jsonLd = buildArticleJsonLd(meta, canonicalUrl, `kategori-${slug}`);
    html = html.replace('</head>', `${jsonLd}\n</head>`);

    // 3. SEO için tekerlemeleri HTML'e ekle (Gizli Liste)
    const listItems = tekerlemeListesi.map(t => `<li>${t}</li>`).join('\n');
    const seoBlock = `
<!-- SEO Kategori Tekerlemeler Listesi -->
<div id="seo-tekerlemeler" style="position:absolute;left:-9999px;width:1px;height:1px;overflow:hidden" aria-hidden="true">
  <h2>${kategoriMeta.h1}</h2>
  <ul>${listItems}</ul>
</div>`;
    html = html.replace('</body>', `${seoBlock}\n</body>`);

    // 4. Canonical HTTP Link header
    res.setHeader('Link', `<${canonicalUrl}>; rel="canonical"`);
    res.setHeader('Cache-Control', 'public, max-age=300');
    res.send(html);
  });
});

// ═══════════════════════════════════════════════════════════════════════════
// ROUTE: Ana sayfa + SPA fallback
// ═══════════════════════════════════════════════════════════════════════════
app.get('/{*path}', (req, res) => {
  const htmlPath = path.join(__dirname, 'public', 'index.html');
  const canonicalUrl = `${SITE_URL}/`;

  fs.readFile(htmlPath, 'utf8', (err, html) => {
    if (err) return res.status(500).send('Sunucu hatası.');

    // Ana sayfa canonical'ını garanti et
    html = html.replace(/(<link rel="canonical" href=")[^"]*(")/,      `$1${canonicalUrl}$2`);
    html = html.replace(/(<meta property="og:url" content=")[^"]*(")/,  `$1${canonicalUrl}$2`);

    // Tüm blog linklerini statik HTML olarak göm (Googlebot iç linkleme)
    const internalLinks = buildInternalLinksBlock();
    html = html.replace('</body>', `${internalLinks}\n</body>`);

    res.setHeader('Link', `<${canonicalUrl}>; rel="canonical"`);
    res.setHeader('Cache-Control', 'public, max-age=60');
    res.send(html);
  });
});

// ═══════════════════════════════════════════════════════════════════════════
// HTTPS + HTTP Sunucuları
// ═══════════════════════════════════════════════════════════════════════════
const certPath = path.join(__dirname, 'certs', 'cert.pem');
const keyPath  = path.join(__dirname, 'certs', 'key.pem');

if (fs.existsSync(certPath) && fs.existsSync(keyPath)) {
  const https = require('https');
  const opts  = { key: fs.readFileSync(keyPath), cert: fs.readFileSync(certPath) };
  https.createServer(opts, app).listen(HTTPS_PORT, () => {
    console.log(`🔒 Diksiyon Rehberi (HTTPS) >> https://localhost:${HTTPS_PORT}`);
  });
}

app.listen(HTTP_PORT, () => {
  console.log(`✅ Diksiyon Rehberi >> http://localhost:${HTTP_PORT}`);
  console.log(`   📄 Sitemap: http://localhost:${HTTP_PORT}/sitemap.xml`);
  console.log(`   🤖 Robots:  http://localhost:${HTTP_PORT}/robots.txt`);
  if (!fs.existsSync(certPath)) {
    console.log(`   💡 Mikrofon sorunları için "npm run gen-cert" ile sertifika oluşturun`);
  }
});