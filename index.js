'use strict';

const express = require('express');
const compression = require('compression');
const path = require('path');
const fs = require('fs');
const app = express();
const HTTP_PORT = 3000;
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
    desc: 'Neden sabahları sesiniz kısık çıkıyor? Konuşurken boğazınız neden ağrıyor? Bu rehberle ses tellerinizi profesyonel bir enstrümana dönüştürecek 15 dakikalık rutini keşfedin.',
  },
  'liderlik-ses-analizi': {
    title: 'Toplumsal İkna: Güçlü Liderlik Sesi Nasıl İcat Edilir? - Diksiyon Rehberi',
    desc: 'Ağzınızı açtığınızda salonun buz kesmesini sağlayan gizli liderlik sırları. Karizma bir vokal mühendisliği sonucudur.',
  },
  'sihirli-kelimeler': {
    title: 'Negatifi Pozitife Döndür: Ofis İkna Sanatı - Diksiyon Rehberi',
    desc: 'Hayır demek sizi ofiste düşmanlaştırmamalı. Karşınızdakini suçlamadan hatasını kabul ettirmenin kurumsal yolları.',
  },
  'aktif-dinleme': {
    title: "İknaların Sırrı: Güç Oyunu 'Aktif Dinleme' - Diksiyon Rehberi",
    desc: 'FBI taktik laboratuvarlarından aktif dinleme teknikleri. Bir odadaki en güçlü kişi neden en sessiz kişidir?',
  },
  'diksiyon-nedir-neden-onemli': {
    title: 'Diksiyon Nedir ve Neden Bu Kadar Önemli? - Diksiyon Rehberi',
    desc: 'Diksiyon sadece güzel konuşmak değildir. Kariyer, sosyal hayat ve özgüven üzerindeki etkisini bilimsel verilerle keşfedin.',
  },
  'diksiyon-evde-nasil-gelistirilir': {
    title: 'Evde Diksiyon Nasıl Geliştirilir? 7 Pratik Yöntem - Diksiyon Rehberi',
    desc: "Profesyonel kurs almadan evde diksiyon geliştirmenin kanıtlanmış 7 yöntemi. Günde 10 dakika yeterli.",
  },
  'profesyonellerin-diksiyon-sirlari': {
    title: 'Profesyonellerin Diksiyon Sırları: Sunucular Nasıl Konuşuyor? - Diksiyon Rehberi',
    desc: 'TV sunucuları, politikacılar ve CEO\'ların kullandığı gelişmiş diksiyon teknikleri. Profesyonel seslerin arkasındaki sırlar.',
  },
  'ceo-gibi-konusmak-liderlik-iletisimi': {
    title: 'CEO Gibi Konuşmak: Liderlik İletişiminin Formülü - Diksiyon Rehberi',
    desc: 'Otorite hissettiren bir ses için CEO\'ların kullandığı konuşma formülleri. Liderlik iletişiminin temel prensipleri.',
  },
  'sunum-korkusunu-yenmek-guven-konusmasi': {
    title: 'Sunum Korkusunu Yenmek: Güvenle Konuşmanın Bilimi - Diksiyon Rehberi',
    desc: 'Sahne korkusunu performansa dönüştürmek için nörobilim destekli teknikler. Sunum öncesi yapmanız gereken 5 egzersiz.',
  },
  'ikna-edici-konusmak-retorik-sanati': {
    title: 'İkna Edici Konuşmak: Modern Retorik Sanatı - Diksiyon Rehberi',
    desc: 'Aristoteles\'ten modern psikolojiye uzanan ikna teknikleri. Karşınızdakini mantık ve duyguyla etkilemenin yolları.',
  },
  'ses-otoritesi-yonetici-varligi': {
    title: 'Ses Otoritesi: Yönetici Varlığının Gizli Silahı - Diksiyon Rehberi',
    desc: 'Oda dolduran yönetici varlığının %38\'i sesten gelir. Ses otoritesi nasıl inşa edilir?',
  },
  'etkili-toplanti-yonetimi-konusma-stratejileri': {
    title: 'Etkili Toplantı Yönetimi: Konuşma Stratejileri - Diksiyon Rehberi',
    desc: 'Toplantılarda söz alan, etkili konuşan ve ikna eden yöneticilerin kullandığı konuşma stratejileri.',
  },
  'muzakerede-ustunluk-konusma-taktikleri': {
    title: 'Müzakerede Üstünlük: Konuşma Taktikleri - Diksiyon Rehberi',
    desc: 'Müzakere masasında ses tonunuzu, hızınızı ve duraklamalarınızı nasıl kullanırsınız? Uzman taktikler.',
  },
  'kriz-aninda-nasil-konusulur-lider-iletisimi': {
    title: 'Kriz Anında Nasıl Konuşulur? Lider İletişimi - Diksiyon Rehberi',
    desc: 'Kriz dönemlerinde güven veren, sakin ve otoriter bir ses için liderlik iletişimi rehberi.',
  },
  'vizyon-konusmasi-nasil-yapilir-ilham-veren-lider': {
    title: 'Vizyon Konuşması Nasıl Yapılır? İlham Veren Lider Olmak - Diksiyon Rehberi',
    desc: 'TED konuşmacılarından ilham alan vizyon konuşması yapısı. Ekibinizi harekete geçirecek konuşma formülü.',
  },
  'aktif-dinleme-liderlerin-gizli-super-gucu': {
    title: "Aktif Dinleme: Liderlerin Gizli Süper Gücü - Diksiyon Rehberi",
    desc: 'En güçlü liderler en iyi dinleyicilerdir. Aktif dinlemenin liderlik üzerindeki kanıtlanmış etkileri.',
  },
  'konusmada-tempo-ve-ritim-kontrolu': {
    title: 'Konuşmada Tempo ve Ritim Kontrolü - Diksiyon Rehberi',
    desc: 'Konuşma hızınızı nasıl kontrol edersiniz? Tempo ve ritmin izleyici üzerindeki psikolojik etkileri.',
  },
  'beden-dili-ve-ses-uyumu-guvenilirlik': {
    title: 'Beden Dili ve Ses Uyumu: Güvenilirlik İnşa Etmek - Diksiyon Rehberi',
    desc: 'Sesiniz ve beden diliniz uyumlu olmadığında güvenilirliğiniz sıfıra düşer. Uyum sağlamanın yolları.',
  },
  'ekibi-harekete-geciren-konusmalar-yonetici-rehberi': {
    title: 'Ekibi Harekete Geçiren Konuşmalar: Yönetici Rehberi - Diksiyon Rehberi',
    desc: 'Motivasyon konuşmalarının arkasındaki bilim. Ekibinizi eyleme geçirecek konuşma yapıları.',
  },
  'diksiyon-hakkinda-yanlis-bilinenler': {
    title: 'Diksiyon Hakkında Yanlış Bilinenler: 10 Mit Çürütüldü - Diksiyon Rehberi',
    desc: '"Diksiyon doğuştan gelir, öğrenilmez" ve benzeri yanlış inanışlar. Bilimsel gerçekler ortaya koyuluyor.',
  },
  'sesinize-zarar-veren-aliskanliklar': {
    title: 'Sesinize Zarar Veren 8 Alışkanlık - Diksiyon Rehberi',
    desc: 'Sesinizi farkında olmadan yıpratan alışkanlıklar. Ses sağlığını korumak için hemen bırakmanız gerekenler.',
  },
  'turkcede-en-cok-yanlis-soylenen-kelimeler': {
    title: "Türkçede En Çok Yanlış Söylenen Kelimeler ve TDK Doğruları - Diksiyon Rehberi",
    desc: 'Tabiki, müzig, kahvaldı... Günlük hayatta farkında olmadan söylediğiniz yanlış telaffuzları ve TDK doğrularını keşfedin.',
  },
  'kamera-onunde-dogal-konusmak-video-diksiyon': {
    title: 'Kamera Önünde Doğal Konuşmak: Video Diksiyon Rehberi - Diksiyon Rehberi',
    desc: 'YouTuber, sunum yapan veya video içerik üreten herkes için kamera diksiyon teknikleri.',
  },
  'ses-icin-5-dakikalik-sabah-rutini': {
    title: 'Ses İçin 5 Dakikalık Sabah Rutini - Diksiyon Rehberi',
    desc: 'Her sabah 5 dakika ile sesinizi güne hazırlamanın kolay yolu. Profesyonellerin sabah ritüelleri.',
  },
  'stres-sesi-nasil-degistirir-ve-nasil-geri-alinir': {
    title: 'Stres Sesinizi Nasıl Değiştirir ve Nasıl Geri Alınır? - Diksiyon Rehberi',
    desc: 'Stres altında titreyen, yükselen veya kısılan ses. Sesinizi strese karşı güçlendirmenin yolları.',
  },
  'konusma-aliskanliklari-testi-farkettiniz-mi': {
    title: 'Konuşma Alışkanlıkları Testi: Fark Ettiniz mi? - Diksiyon Rehberi',
    desc: 'Kendinizin farkında olmadığınız konuşma alışkanlıklarını keşfetmek için interaktif test.',
  },
  'uyku-ve-ses-sagligi-gece-yaptiklariniz-sesi-etkiliyor': {
    title: 'Uyku ve Ses Sağlığı: Gece Yaptıklarınız Sesinizi Etkiliyor - Diksiyon Rehberi',
    desc: 'Uyku kalitesi ve ses sağlığı arasındaki doğrudan ilişki. Sesinizi korumak için gece rutini.',
  },
  'cocuklardan-ogrenilecek-diksiyon-dersleri': {
    title: 'Çocuklardan Öğrenilecek Diksiyon Dersleri - Diksiyon Rehberi',
    desc: 'Çocuklar dili nasıl bu kadar hızlı öğreniyor? Yetişkinlerin çocuklardan alabileceği diksiyon dersleri.',
  },
  'tiz-ses-mi-bas-ses-mi-hangisi-daha-etkili': {
    title: 'Tiz Ses mi Bas Ses mi? Hangisi Daha Etkili? - Diksiyon Rehberi',
    desc: 'Ses frekansının ikna, güvenilirlik ve liderlik algısı üzerindeki etkisi. Araştırmalar ne diyor?',
  },
  'hikaye-anlatimiyla-konusmanizi-unutulmaz-kilmak': {
    title: 'Hikaye Anlatımıyla Konuşmanızı Unutulmaz Kılmak - Diksiyon Rehberi',
    desc: 'Beyin hikayeleri farklı işler. Konuşmalarınıza hikaye anlatımı ekleyerek izleyiciyi bağlama teknikleri.',
  },
  'turkcede-diksiyon-egzersizleri-baslangic-rehberi': {
    title: "Türkçede Diksiyon Egzersizleri: Başlangıç Rehberi - Diksiyon Rehberi",
    desc: "Türkçeye özel diksiyon egzersizleri. Başlangıç seviyesi için adım adım rehber.",
  },
  'cocuklarda-diksiyon-gelistirme-ebeveyn-rehberi': {
    title: 'Çocuklarda Diksiyon Geliştirme: Ebeveyn Rehberi - Diksiyon Rehberi',
    desc: '3-12 yaş arası çocuklarda diksiyon gelişimi için kanıtlanmış oyun tabanlı teknikler.',
  },
  'diksiyon-seviyenizi-olcun-kendi-kendinize-test': {
    title: 'Diksiyon Seviyenizi Ölçün: Kendi Kendinize Test - Diksiyon Rehberi',
    desc: 'Diksiyon seviyenizi evde ölçmenizi sağlayan bilimsel test yöntemi. Güçlü ve zayıf yönlerinizi keşfedin.',
  },
  'aksanli-konusmaktan-diksiyon-gucune-donusum': {
    title: 'Aksanlı Konuşmaktan Diksiyon Gücüne Dönüşüm - Diksiyon Rehberi',
    desc: 'Bölgesel aksanları standart Türkçeye dönüştürme süreci. Aksanı güce çeviren egzersizler.',
  },
  'is-hayatinda-diksiyon-kariyer-etkisi': {
    title: 'İş Hayatında Diksiyon: Kariyerinizi Değiştiren Ses - Diksiyon Rehberi',
    desc: 'İş görüşmelerinde, terfilerde ve liderlik pozisyonlarında diksiyonun ölçülebilir kariyer etkisi.',
  },
  'yanlis-soylenen-kelimeler': {
    title: "Türkçede En Çok Yanlış Telaffuz Edilen 30 Kelime ve Doğruları - Diksiyon Rehberi",
    desc: 'Tabiki, müzig, kahvaldı... Günlük hayatta farkında olmadan söylediğiniz yanlış telaffuzları ve TDK doğrularını keşfedin.',
  },
  'sunum-korkusu': {
    title: "Sahne Korkusunu Silah'a Dönüştür: Bilimsel Sunum Psikolojisi - Diksiyon Rehberi",
    desc: 'Glossophobia (sunum korkusu) neden ölüm korkusundan bile yaygın? Harvard araştırmalarıyla sahne korkusunu performansa dönüştürme rehberi.',
  },
  'cocuk-diksiyon': {
    title: "Çocuğunuzun Sesi, Geleceğidir: 3-12 Yaş Diksiyon Geliştirme Rehberi - Diksiyon Rehberi",
    desc: '3 yaşında düzgün konuşan bir çocuğun okul başarısı 2.3 kat daha yüksek. Ebeveynler evde ne yapabilir?',
  },
};

// ═══════════════════════════════════════════════════════════════════════════
// Araçlar / SPA Uygulama Sayfaları SEO Veritabanı
// ═══════════════════════════════════════════════════════════════════════════
const TOOLS_META = {
  'karsilastirma': {
    "title": "karsilastirma",
    "desc": "",
    "h1": "karsilastirma",
    "content": "Konuşma ve iletişim becerilerinizi geliştirmek, sosyal hayatta ve profesyonel kariyerinizde size büyük avantajlar sağlar. karsilastirma konusu, doğru sesletim ve diyafram kontrolü gerektiren önemli bir diksiyon bileşenidir. Doğru teknikleri kullanarak bu süreci hızlandırabilirsiniz.\n\n<h3>Temel Kurallar ve Pratik Yöntemler:</h3>\n<ul>\n<li><strong>Nefes Kontrolü:</strong> Cümleleri kurarken göğsünüzden değil, diyaframınızdan nefes alarak sesinize derinlik ve güç katın. Hava akışını kontrol etmek heyecanınızı da azaltacaktır.</li>\n<li><strong>Ayna Karşısında Pratik:</strong> Dudak ve çene tembelliğini gidermek için her gün 10 dakika ayna karşısında abartılı dudak hareketleriyle yüksek sesli okuma çalışmaları yapın.</li>\n<li><strong>Ritim ve Hız:</strong> Çok hızlı konuşmak güven kaybına neden olur. Konuşma hızınızı bilinçli olarak düşürerek kelimelerin son harflerini yutmadan telaffuz edin.</li>\n</ul>\n\n<h3>Kısa Uygulama Egzersizi:</h3>\n<p>Dik bir şekilde ayakta durun. Burnunuzdan derin bir nefes alın ve nefesinizi \"Sssss\" veya \"Şşşş\" sesiyle yavaşça geri verin. Ardından aynı nefes desteğiyle \"karsilastirma\" konusu üzerinde kendi kendinize 1 dakikalık kısa bir konuşma provası yapın.</p>\n\n<div style=\"margin:2rem 0;padding:1.5rem;background:#f0f9ff;border-radius:12px;border:1px solid #bae6fd;\">\n  <h4 style=\"margin-top:0;color:#0369a1;\">🎙️ İnteraktif Egzersizlere Başlayın</h4>\n  <p style=\"margin-bottom:1rem;color:#0c4a6e;\">Teoriyi pratiğe dökmek için platformumuzdaki interaktif tekerleme, metronom ve artikülasyon araçlarını kullanabilirsiniz. Ücretsiz stüdyomuzda sesinizi kaydedip analiz edin.</p>\n  <a href=\"/\" style=\"display:inline-block;background:#0ea5e9;color:white;padding:12px 24px;border-radius:8px;text-decoration:none;font-weight:bold;\">Tüm Diksiyon Egzersizlerine Git →</a>\n</div>",
    "faq": [
        {
                "question": "karsilastirma için egzersizleri nerede bulabilirim?",
                "answer": "Ana sayfamızda yer alan Görsel Nefes, Tekerleme Arenası ve Ses Stüdyosu modüllerini kullanarak tamamen ücretsiz pratik yapabilirsiniz."
        },
        {
                "question": "Diksiyon eğitimi günde ne kadar pratik gerektirir?",
                "answer": "Kas hafızasının gelişmesi için her gün düzenli olarak 10-15 dakika sesli diksiyon pratiği yapmanız, haftada 1 kez 2 saat yapmanızdan çok daha etkilidir."
        }
]
},
  'teleprompter': {
    "title": "teleprompter",
    "desc": "",
    "h1": "teleprompter",
    "content": "Konuşma ve iletişim becerilerinizi geliştirmek, sosyal hayatta ve profesyonel kariyerinizde size büyük avantajlar sağlar. teleprompter konusu, doğru sesletim ve diyafram kontrolü gerektiren önemli bir diksiyon bileşenidir. Doğru teknikleri kullanarak bu süreci hızlandırabilirsiniz.\n\n<h3>Temel Kurallar ve Pratik Yöntemler:</h3>\n<ul>\n<li><strong>Nefes Kontrolü:</strong> Cümleleri kurarken göğsünüzden değil, diyaframınızdan nefes alarak sesinize derinlik ve güç katın. Hava akışını kontrol etmek heyecanınızı da azaltacaktır.</li>\n<li><strong>Ayna Karşısında Pratik:</strong> Dudak ve çene tembelliğini gidermek için her gün 10 dakika ayna karşısında abartılı dudak hareketleriyle yüksek sesli okuma çalışmaları yapın.</li>\n<li><strong>Ritim ve Hız:</strong> Çok hızlı konuşmak güven kaybına neden olur. Konuşma hızınızı bilinçli olarak düşürerek kelimelerin son harflerini yutmadan telaffuz edin.</li>\n</ul>\n\n<h3>Kısa Uygulama Egzersizi:</h3>\n<p>Dik bir şekilde ayakta durun. Burnunuzdan derin bir nefes alın ve nefesinizi \"Sssss\" veya \"Şşşş\" sesiyle yavaşça geri verin. Ardından aynı nefes desteğiyle \"teleprompter\" konusu üzerinde kendi kendinize 1 dakikalık kısa bir konuşma provası yapın.</p>\n\n<div style=\"margin:2rem 0;padding:1.5rem;background:#f0f9ff;border-radius:12px;border:1px solid #bae6fd;\">\n  <h4 style=\"margin-top:0;color:#0369a1;\">🎙️ İnteraktif Egzersizlere Başlayın</h4>\n  <p style=\"margin-bottom:1rem;color:#0c4a6e;\">Teoriyi pratiğe dökmek için platformumuzdaki interaktif tekerleme, metronom ve artikülasyon araçlarını kullanabilirsiniz. Ücretsiz stüdyomuzda sesinizi kaydedip analiz edin.</p>\n  <a href=\"/\" style=\"display:inline-block;background:#0ea5e9;color:white;padding:12px 24px;border-radius:8px;text-decoration:none;font-weight:bold;\">Tüm Diksiyon Egzersizlerine Git →</a>\n</div>",
    "faq": [
        {
                "question": "teleprompter için egzersizleri nerede bulabilirim?",
                "answer": "Ana sayfamızda yer alan Görsel Nefes, Tekerleme Arenası ve Ses Stüdyosu modüllerini kullanarak tamamen ücretsiz pratik yapabilirsiniz."
        },
        {
                "question": "Diksiyon eğitimi günde ne kadar pratik gerektirir?",
                "answer": "Kas hafızasının gelişmesi için her gün düzenli olarak 10-15 dakika sesli diksiyon pratiği yapmanız, haftada 1 kez 2 saat yapmanızdan çok daha etkilidir."
        }
]
},
  'ritim-testi': {
    "title": "ritim-testi",
    "desc": "",
    "h1": "ritim-testi",
    "content": "Konuşma ve iletişim becerilerinizi geliştirmek, sosyal hayatta ve profesyonel kariyerinizde size büyük avantajlar sağlar. ritim-testi konusu, doğru sesletim ve diyafram kontrolü gerektiren önemli bir diksiyon bileşenidir. Doğru teknikleri kullanarak bu süreci hızlandırabilirsiniz.\n\n<h3>Temel Kurallar ve Pratik Yöntemler:</h3>\n<ul>\n<li><strong>Nefes Kontrolü:</strong> Cümleleri kurarken göğsünüzden değil, diyaframınızdan nefes alarak sesinize derinlik ve güç katın. Hava akışını kontrol etmek heyecanınızı da azaltacaktır.</li>\n<li><strong>Ayna Karşısında Pratik:</strong> Dudak ve çene tembelliğini gidermek için her gün 10 dakika ayna karşısında abartılı dudak hareketleriyle yüksek sesli okuma çalışmaları yapın.</li>\n<li><strong>Ritim ve Hız:</strong> Çok hızlı konuşmak güven kaybına neden olur. Konuşma hızınızı bilinçli olarak düşürerek kelimelerin son harflerini yutmadan telaffuz edin.</li>\n</ul>\n\n<h3>Kısa Uygulama Egzersizi:</h3>\n<p>Dik bir şekilde ayakta durun. Burnunuzdan derin bir nefes alın ve nefesinizi \"Sssss\" veya \"Şşşş\" sesiyle yavaşça geri verin. Ardından aynı nefes desteğiyle \"ritim-testi\" konusu üzerinde kendi kendinize 1 dakikalık kısa bir konuşma provası yapın.</p>\n\n<div style=\"margin:2rem 0;padding:1.5rem;background:#f0f9ff;border-radius:12px;border:1px solid #bae6fd;\">\n  <h4 style=\"margin-top:0;color:#0369a1;\">🎙️ İnteraktif Egzersizlere Başlayın</h4>\n  <p style=\"margin-bottom:1rem;color:#0c4a6e;\">Teoriyi pratiğe dökmek için platformumuzdaki interaktif tekerleme, metronom ve artikülasyon araçlarını kullanabilirsiniz. Ücretsiz stüdyomuzda sesinizi kaydedip analiz edin.</p>\n  <a href=\"/\" style=\"display:inline-block;background:#0ea5e9;color:white;padding:12px 24px;border-radius:8px;text-decoration:none;font-weight:bold;\">Tüm Diksiyon Egzersizlerine Git →</a>\n</div>",
    "faq": [
        {
                "question": "ritim-testi için egzersizleri nerede bulabilirim?",
                "answer": "Ana sayfamızda yer alan Görsel Nefes, Tekerleme Arenası ve Ses Stüdyosu modüllerini kullanarak tamamen ücretsiz pratik yapabilirsiniz."
        },
        {
                "question": "Diksiyon eğitimi günde ne kadar pratik gerektirir?",
                "answer": "Kas hafızasının gelişmesi için her gün düzenli olarak 10-15 dakika sesli diksiyon pratiği yapmanız, haftada 1 kez 2 saat yapmanızdan çok daha etkilidir."
        }
]
},
  'ses-analizi': {
    "title": "ses-analizi",
    "desc": "",
    "h1": "ses-analizi",
    "content": "Konuşma ve iletişim becerilerinizi geliştirmek, sosyal hayatta ve profesyonel kariyerinizde size büyük avantajlar sağlar. ses-analizi konusu, doğru sesletim ve diyafram kontrolü gerektiren önemli bir diksiyon bileşenidir. Doğru teknikleri kullanarak bu süreci hızlandırabilirsiniz.\n\n<h3>Temel Kurallar ve Pratik Yöntemler:</h3>\n<ul>\n<li><strong>Nefes Kontrolü:</strong> Cümleleri kurarken göğsünüzden değil, diyaframınızdan nefes alarak sesinize derinlik ve güç katın. Hava akışını kontrol etmek heyecanınızı da azaltacaktır.</li>\n<li><strong>Ayna Karşısında Pratik:</strong> Dudak ve çene tembelliğini gidermek için her gün 10 dakika ayna karşısında abartılı dudak hareketleriyle yüksek sesli okuma çalışmaları yapın.</li>\n<li><strong>Ritim ve Hız:</strong> Çok hızlı konuşmak güven kaybına neden olur. Konuşma hızınızı bilinçli olarak düşürerek kelimelerin son harflerini yutmadan telaffuz edin.</li>\n</ul>\n\n<h3>Kısa Uygulama Egzersizi:</h3>\n<p>Dik bir şekilde ayakta durun. Burnunuzdan derin bir nefes alın ve nefesinizi \"Sssss\" veya \"Şşşş\" sesiyle yavaşça geri verin. Ardından aynı nefes desteğiyle \"ses-analizi\" konusu üzerinde kendi kendinize 1 dakikalık kısa bir konuşma provası yapın.</p>\n\n<div style=\"margin:2rem 0;padding:1.5rem;background:#f0f9ff;border-radius:12px;border:1px solid #bae6fd;\">\n  <h4 style=\"margin-top:0;color:#0369a1;\">🎙️ İnteraktif Egzersizlere Başlayın</h4>\n  <p style=\"margin-bottom:1rem;color:#0c4a6e;\">Teoriyi pratiğe dökmek için platformumuzdaki interaktif tekerleme, metronom ve artikülasyon araçlarını kullanabilirsiniz. Ücretsiz stüdyomuzda sesinizi kaydedip analiz edin.</p>\n  <a href=\"/\" style=\"display:inline-block;background:#0ea5e9;color:white;padding:12px 24px;border-radius:8px;text-decoration:none;font-weight:bold;\">Tüm Diksiyon Egzersizlerine Git →</a>\n</div>",
    "faq": [
        {
                "question": "ses-analizi için egzersizleri nerede bulabilirim?",
                "answer": "Ana sayfamızda yer alan Görsel Nefes, Tekerleme Arenası ve Ses Stüdyosu modüllerini kullanarak tamamen ücretsiz pratik yapabilirsiniz."
        },
        {
                "question": "Diksiyon eğitimi günde ne kadar pratik gerektirir?",
                "answer": "Kas hafızasının gelişmesi için her gün düzenli olarak 10-15 dakika sesli diksiyon pratiği yapmanız, haftada 1 kez 2 saat yapmanızdan çok daha etkilidir."
        }
]
},
  'nefes-egzersizleri': {
    "title": "nefes-egzersizleri",
    "desc": "",
    "h1": "nefes-egzersizleri",
    "content": "Konuşma ve iletişim becerilerinizi geliştirmek, sosyal hayatta ve profesyonel kariyerinizde size büyük avantajlar sağlar. nefes-egzersizleri konusu, doğru sesletim ve diyafram kontrolü gerektiren önemli bir diksiyon bileşenidir. Doğru teknikleri kullanarak bu süreci hızlandırabilirsiniz.\n\n<h3>Temel Kurallar ve Pratik Yöntemler:</h3>\n<ul>\n<li><strong>Nefes Kontrolü:</strong> Cümleleri kurarken göğsünüzden değil, diyaframınızdan nefes alarak sesinize derinlik ve güç katın. Hava akışını kontrol etmek heyecanınızı da azaltacaktır.</li>\n<li><strong>Ayna Karşısında Pratik:</strong> Dudak ve çene tembelliğini gidermek için her gün 10 dakika ayna karşısında abartılı dudak hareketleriyle yüksek sesli okuma çalışmaları yapın.</li>\n<li><strong>Ritim ve Hız:</strong> Çok hızlı konuşmak güven kaybına neden olur. Konuşma hızınızı bilinçli olarak düşürerek kelimelerin son harflerini yutmadan telaffuz edin.</li>\n</ul>\n\n<h3>Kısa Uygulama Egzersizi:</h3>\n<p>Dik bir şekilde ayakta durun. Burnunuzdan derin bir nefes alın ve nefesinizi \"Sssss\" veya \"Şşşş\" sesiyle yavaşça geri verin. Ardından aynı nefes desteğiyle \"nefes-egzersizleri\" konusu üzerinde kendi kendinize 1 dakikalık kısa bir konuşma provası yapın.</p>\n\n<div style=\"margin:2rem 0;padding:1.5rem;background:#f0f9ff;border-radius:12px;border:1px solid #bae6fd;\">\n  <h4 style=\"margin-top:0;color:#0369a1;\">🎙️ İnteraktif Egzersizlere Başlayın</h4>\n  <p style=\"margin-bottom:1rem;color:#0c4a6e;\">Teoriyi pratiğe dökmek için platformumuzdaki interaktif tekerleme, metronom ve artikülasyon araçlarını kullanabilirsiniz. Ücretsiz stüdyomuzda sesinizi kaydedip analiz edin.</p>\n  <a href=\"/\" style=\"display:inline-block;background:#0ea5e9;color:white;padding:12px 24px;border-radius:8px;text-decoration:none;font-weight:bold;\">Tüm Diksiyon Egzersizlerine Git →</a>\n</div>",
    "faq": [
        {
                "question": "nefes-egzersizleri için egzersizleri nerede bulabilirim?",
                "answer": "Ana sayfamızda yer alan Görsel Nefes, Tekerleme Arenası ve Ses Stüdyosu modüllerini kullanarak tamamen ücretsiz pratik yapabilirsiniz."
        },
        {
                "question": "Diksiyon eğitimi günde ne kadar pratik gerektirir?",
                "answer": "Kas hafızasının gelişmesi için her gün düzenli olarak 10-15 dakika sesli diksiyon pratiği yapmanız, haftada 1 kez 2 saat yapmanızdan çok daha etkilidir."
        }
]
},
  'ses-acma-egzersizleri': {
    "title": "ses-acma-egzersizleri",
    "desc": "",
    "h1": "ses-acma-egzersizleri",
    "content": "Konuşma ve iletişim becerilerinizi geliştirmek, sosyal hayatta ve profesyonel kariyerinizde size büyük avantajlar sağlar. ses-acma-egzersizleri konusu, doğru sesletim ve diyafram kontrolü gerektiren önemli bir diksiyon bileşenidir. Doğru teknikleri kullanarak bu süreci hızlandırabilirsiniz.\n\n<h3>Temel Kurallar ve Pratik Yöntemler:</h3>\n<ul>\n<li><strong>Nefes Kontrolü:</strong> Cümleleri kurarken göğsünüzden değil, diyaframınızdan nefes alarak sesinize derinlik ve güç katın. Hava akışını kontrol etmek heyecanınızı da azaltacaktır.</li>\n<li><strong>Ayna Karşısında Pratik:</strong> Dudak ve çene tembelliğini gidermek için her gün 10 dakika ayna karşısında abartılı dudak hareketleriyle yüksek sesli okuma çalışmaları yapın.</li>\n<li><strong>Ritim ve Hız:</strong> Çok hızlı konuşmak güven kaybına neden olur. Konuşma hızınızı bilinçli olarak düşürerek kelimelerin son harflerini yutmadan telaffuz edin.</li>\n</ul>\n\n<h3>Kısa Uygulama Egzersizi:</h3>\n<p>Dik bir şekilde ayakta durun. Burnunuzdan derin bir nefes alın ve nefesinizi \"Sssss\" veya \"Şşşş\" sesiyle yavaşça geri verin. Ardından aynı nefes desteğiyle \"ses-acma-egzersizleri\" konusu üzerinde kendi kendinize 1 dakikalık kısa bir konuşma provası yapın.</p>\n\n<div style=\"margin:2rem 0;padding:1.5rem;background:#f0f9ff;border-radius:12px;border:1px solid #bae6fd;\">\n  <h4 style=\"margin-top:0;color:#0369a1;\">🎙️ İnteraktif Egzersizlere Başlayın</h4>\n  <p style=\"margin-bottom:1rem;color:#0c4a6e;\">Teoriyi pratiğe dökmek için platformumuzdaki interaktif tekerleme, metronom ve artikülasyon araçlarını kullanabilirsiniz. Ücretsiz stüdyomuzda sesinizi kaydedip analiz edin.</p>\n  <a href=\"/\" style=\"display:inline-block;background:#0ea5e9;color:white;padding:12px 24px;border-radius:8px;text-decoration:none;font-weight:bold;\">Tüm Diksiyon Egzersizlerine Git →</a>\n</div>",
    "faq": [
        {
                "question": "ses-acma-egzersizleri için egzersizleri nerede bulabilirim?",
                "answer": "Ana sayfamızda yer alan Görsel Nefes, Tekerleme Arenası ve Ses Stüdyosu modüllerini kullanarak tamamen ücretsiz pratik yapabilirsiniz."
        },
        {
                "question": "Diksiyon eğitimi günde ne kadar pratik gerektirir?",
                "answer": "Kas hafızasının gelişmesi için her gün düzenli olarak 10-15 dakika sesli diksiyon pratiği yapmanız, haftada 1 kez 2 saat yapmanızdan çok daha etkilidir."
        }
]
},
  'telaffuz-calismalari': {
    "title": "telaffuz-calismalari",
    "desc": "",
    "h1": "telaffuz-calismalari",
    "content": "Konuşma ve iletişim becerilerinizi geliştirmek, sosyal hayatta ve profesyonel kariyerinizde size büyük avantajlar sağlar. telaffuz-calismalari konusu, doğru sesletim ve diyafram kontrolü gerektiren önemli bir diksiyon bileşenidir. Doğru teknikleri kullanarak bu süreci hızlandırabilirsiniz.\n\n<h3>Temel Kurallar ve Pratik Yöntemler:</h3>\n<ul>\n<li><strong>Nefes Kontrolü:</strong> Cümleleri kurarken göğsünüzden değil, diyaframınızdan nefes alarak sesinize derinlik ve güç katın. Hava akışını kontrol etmek heyecanınızı da azaltacaktır.</li>\n<li><strong>Ayna Karşısında Pratik:</strong> Dudak ve çene tembelliğini gidermek için her gün 10 dakika ayna karşısında abartılı dudak hareketleriyle yüksek sesli okuma çalışmaları yapın.</li>\n<li><strong>Ritim ve Hız:</strong> Çok hızlı konuşmak güven kaybına neden olur. Konuşma hızınızı bilinçli olarak düşürerek kelimelerin son harflerini yutmadan telaffuz edin.</li>\n</ul>\n\n<h3>Kısa Uygulama Egzersizi:</h3>\n<p>Dik bir şekilde ayakta durun. Burnunuzdan derin bir nefes alın ve nefesinizi \"Sssss\" veya \"Şşşş\" sesiyle yavaşça geri verin. Ardından aynı nefes desteğiyle \"telaffuz-calismalari\" konusu üzerinde kendi kendinize 1 dakikalık kısa bir konuşma provası yapın.</p>\n\n<div style=\"margin:2rem 0;padding:1.5rem;background:#f0f9ff;border-radius:12px;border:1px solid #bae6fd;\">\n  <h4 style=\"margin-top:0;color:#0369a1;\">🎙️ İnteraktif Egzersizlere Başlayın</h4>\n  <p style=\"margin-bottom:1rem;color:#0c4a6e;\">Teoriyi pratiğe dökmek için platformumuzdaki interaktif tekerleme, metronom ve artikülasyon araçlarını kullanabilirsiniz. Ücretsiz stüdyomuzda sesinizi kaydedip analiz edin.</p>\n  <a href=\"/\" style=\"display:inline-block;background:#0ea5e9;color:white;padding:12px 24px;border-radius:8px;text-decoration:none;font-weight:bold;\">Tüm Diksiyon Egzersizlerine Git →</a>\n</div>",
    "faq": [
        {
                "question": "telaffuz-calismalari için egzersizleri nerede bulabilirim?",
                "answer": "Ana sayfamızda yer alan Görsel Nefes, Tekerleme Arenası ve Ses Stüdyosu modüllerini kullanarak tamamen ücretsiz pratik yapabilirsiniz."
        },
        {
                "question": "Diksiyon eğitimi günde ne kadar pratik gerektirir?",
                "answer": "Kas hafızasının gelişmesi için her gün düzenli olarak 10-15 dakika sesli diksiyon pratiği yapmanız, haftada 1 kez 2 saat yapmanızdan çok daha etkilidir."
        }
]
},
  'vurgu-teknikleri': {
    "title": "vurgu-teknikleri",
    "desc": "",
    "h1": "vurgu-teknikleri",
    "content": "Konuşma ve iletişim becerilerinizi geliştirmek, sosyal hayatta ve profesyonel kariyerinizde size büyük avantajlar sağlar. vurgu-teknikleri konusu, doğru sesletim ve diyafram kontrolü gerektiren önemli bir diksiyon bileşenidir. Doğru teknikleri kullanarak bu süreci hızlandırabilirsiniz.\n\n<h3>Temel Kurallar ve Pratik Yöntemler:</h3>\n<ul>\n<li><strong>Nefes Kontrolü:</strong> Cümleleri kurarken göğsünüzden değil, diyaframınızdan nefes alarak sesinize derinlik ve güç katın. Hava akışını kontrol etmek heyecanınızı da azaltacaktır.</li>\n<li><strong>Ayna Karşısında Pratik:</strong> Dudak ve çene tembelliğini gidermek için her gün 10 dakika ayna karşısında abartılı dudak hareketleriyle yüksek sesli okuma çalışmaları yapın.</li>\n<li><strong>Ritim ve Hız:</strong> Çok hızlı konuşmak güven kaybına neden olur. Konuşma hızınızı bilinçli olarak düşürerek kelimelerin son harflerini yutmadan telaffuz edin.</li>\n</ul>\n\n<h3>Kısa Uygulama Egzersizi:</h3>\n<p>Dik bir şekilde ayakta durun. Burnunuzdan derin bir nefes alın ve nefesinizi \"Sssss\" veya \"Şşşş\" sesiyle yavaşça geri verin. Ardından aynı nefes desteğiyle \"vurgu-teknikleri\" konusu üzerinde kendi kendinize 1 dakikalık kısa bir konuşma provası yapın.</p>\n\n<div style=\"margin:2rem 0;padding:1.5rem;background:#f0f9ff;border-radius:12px;border:1px solid #bae6fd;\">\n  <h4 style=\"margin-top:0;color:#0369a1;\">🎙️ İnteraktif Egzersizlere Başlayın</h4>\n  <p style=\"margin-bottom:1rem;color:#0c4a6e;\">Teoriyi pratiğe dökmek için platformumuzdaki interaktif tekerleme, metronom ve artikülasyon araçlarını kullanabilirsiniz. Ücretsiz stüdyomuzda sesinizi kaydedip analiz edin.</p>\n  <a href=\"/\" style=\"display:inline-block;background:#0ea5e9;color:white;padding:12px 24px;border-radius:8px;text-decoration:none;font-weight:bold;\">Tüm Diksiyon Egzersizlerine Git →</a>\n</div>",
    "faq": [
        {
                "question": "vurgu-teknikleri için egzersizleri nerede bulabilirim?",
                "answer": "Ana sayfamızda yer alan Görsel Nefes, Tekerleme Arenası ve Ses Stüdyosu modüllerini kullanarak tamamen ücretsiz pratik yapabilirsiniz."
        },
        {
                "question": "Diksiyon eğitimi günde ne kadar pratik gerektirir?",
                "answer": "Kas hafızasının gelişmesi için her gün düzenli olarak 10-15 dakika sesli diksiyon pratiği yapmanız, haftada 1 kez 2 saat yapmanızdan çok daha etkilidir."
        }
]
},
  'duraklama-teknikleri': {
    "title": "duraklama-teknikleri",
    "desc": "",
    "h1": "duraklama-teknikleri",
    "content": "Konuşma ve iletişim becerilerinizi geliştirmek, sosyal hayatta ve profesyonel kariyerinizde size büyük avantajlar sağlar. duraklama-teknikleri konusu, doğru sesletim ve diyafram kontrolü gerektiren önemli bir diksiyon bileşenidir. Doğru teknikleri kullanarak bu süreci hızlandırabilirsiniz.\n\n<h3>Temel Kurallar ve Pratik Yöntemler:</h3>\n<ul>\n<li><strong>Nefes Kontrolü:</strong> Cümleleri kurarken göğsünüzden değil, diyaframınızdan nefes alarak sesinize derinlik ve güç katın. Hava akışını kontrol etmek heyecanınızı da azaltacaktır.</li>\n<li><strong>Ayna Karşısında Pratik:</strong> Dudak ve çene tembelliğini gidermek için her gün 10 dakika ayna karşısında abartılı dudak hareketleriyle yüksek sesli okuma çalışmaları yapın.</li>\n<li><strong>Ritim ve Hız:</strong> Çok hızlı konuşmak güven kaybına neden olur. Konuşma hızınızı bilinçli olarak düşürerek kelimelerin son harflerini yutmadan telaffuz edin.</li>\n</ul>\n\n<h3>Kısa Uygulama Egzersizi:</h3>\n<p>Dik bir şekilde ayakta durun. Burnunuzdan derin bir nefes alın ve nefesinizi \"Sssss\" veya \"Şşşş\" sesiyle yavaşça geri verin. Ardından aynı nefes desteğiyle \"duraklama-teknikleri\" konusu üzerinde kendi kendinize 1 dakikalık kısa bir konuşma provası yapın.</p>\n\n<div style=\"margin:2rem 0;padding:1.5rem;background:#f0f9ff;border-radius:12px;border:1px solid #bae6fd;\">\n  <h4 style=\"margin-top:0;color:#0369a1;\">🎙️ İnteraktif Egzersizlere Başlayın</h4>\n  <p style=\"margin-bottom:1rem;color:#0c4a6e;\">Teoriyi pratiğe dökmek için platformumuzdaki interaktif tekerleme, metronom ve artikülasyon araçlarını kullanabilirsiniz. Ücretsiz stüdyomuzda sesinizi kaydedip analiz edin.</p>\n  <a href=\"/\" style=\"display:inline-block;background:#0ea5e9;color:white;padding:12px 24px;border-radius:8px;text-decoration:none;font-weight:bold;\">Tüm Diksiyon Egzersizlerine Git →</a>\n</div>",
    "faq": [
        {
                "question": "duraklama-teknikleri için egzersizleri nerede bulabilirim?",
                "answer": "Ana sayfamızda yer alan Görsel Nefes, Tekerleme Arenası ve Ses Stüdyosu modüllerini kullanarak tamamen ücretsiz pratik yapabilirsiniz."
        },
        {
                "question": "Diksiyon eğitimi günde ne kadar pratik gerektirir?",
                "answer": "Kas hafızasının gelişmesi için her gün düzenli olarak 10-15 dakika sesli diksiyon pratiği yapmanız, haftada 1 kez 2 saat yapmanızdan çok daha etkilidir."
        }
]
},
  'rezonans-egzersizleri': {
    "title": "rezonans-egzersizleri",
    "desc": "",
    "h1": "rezonans-egzersizleri",
    "content": "Konuşma ve iletişim becerilerinizi geliştirmek, sosyal hayatta ve profesyonel kariyerinizde size büyük avantajlar sağlar. rezonans-egzersizleri konusu, doğru sesletim ve diyafram kontrolü gerektiren önemli bir diksiyon bileşenidir. Doğru teknikleri kullanarak bu süreci hızlandırabilirsiniz.\n\n<h3>Temel Kurallar ve Pratik Yöntemler:</h3>\n<ul>\n<li><strong>Nefes Kontrolü:</strong> Cümleleri kurarken göğsünüzden değil, diyaframınızdan nefes alarak sesinize derinlik ve güç katın. Hava akışını kontrol etmek heyecanınızı da azaltacaktır.</li>\n<li><strong>Ayna Karşısında Pratik:</strong> Dudak ve çene tembelliğini gidermek için her gün 10 dakika ayna karşısında abartılı dudak hareketleriyle yüksek sesli okuma çalışmaları yapın.</li>\n<li><strong>Ritim ve Hız:</strong> Çok hızlı konuşmak güven kaybına neden olur. Konuşma hızınızı bilinçli olarak düşürerek kelimelerin son harflerini yutmadan telaffuz edin.</li>\n</ul>\n\n<h3>Kısa Uygulama Egzersizi:</h3>\n<p>Dik bir şekilde ayakta durun. Burnunuzdan derin bir nefes alın ve nefesinizi \"Sssss\" veya \"Şşşş\" sesiyle yavaşça geri verin. Ardından aynı nefes desteğiyle \"rezonans-egzersizleri\" konusu üzerinde kendi kendinize 1 dakikalık kısa bir konuşma provası yapın.</p>\n\n<div style=\"margin:2rem 0;padding:1.5rem;background:#f0f9ff;border-radius:12px;border:1px solid #bae6fd;\">\n  <h4 style=\"margin-top:0;color:#0369a1;\">🎙️ İnteraktif Egzersizlere Başlayın</h4>\n  <p style=\"margin-bottom:1rem;color:#0c4a6e;\">Teoriyi pratiğe dökmek için platformumuzdaki interaktif tekerleme, metronom ve artikülasyon araçlarını kullanabilirsiniz. Ücretsiz stüdyomuzda sesinizi kaydedip analiz edin.</p>\n  <a href=\"/\" style=\"display:inline-block;background:#0ea5e9;color:white;padding:12px 24px;border-radius:8px;text-decoration:none;font-weight:bold;\">Tüm Diksiyon Egzersizlerine Git →</a>\n</div>",
    "faq": [
        {
                "question": "rezonans-egzersizleri için egzersizleri nerede bulabilirim?",
                "answer": "Ana sayfamızda yer alan Görsel Nefes, Tekerleme Arenası ve Ses Stüdyosu modüllerini kullanarak tamamen ücretsiz pratik yapabilirsiniz."
        },
        {
                "question": "Diksiyon eğitimi günde ne kadar pratik gerektirir?",
                "answer": "Kas hafızasının gelişmesi için her gün düzenli olarak 10-15 dakika sesli diksiyon pratiği yapmanız, haftada 1 kez 2 saat yapmanızdan çok daha etkilidir."
        }
]
},
  'okuma-parcalari': {
    "title": "okuma-parcalari",
    "desc": "",
    "h1": "okuma-parcalari",
    "content": "Konuşma ve iletişim becerilerinizi geliştirmek, sosyal hayatta ve profesyonel kariyerinizde size büyük avantajlar sağlar. okuma-parcalari konusu, doğru sesletim ve diyafram kontrolü gerektiren önemli bir diksiyon bileşenidir. Doğru teknikleri kullanarak bu süreci hızlandırabilirsiniz.\n\n<h3>Temel Kurallar ve Pratik Yöntemler:</h3>\n<ul>\n<li><strong>Nefes Kontrolü:</strong> Cümleleri kurarken göğsünüzden değil, diyaframınızdan nefes alarak sesinize derinlik ve güç katın. Hava akışını kontrol etmek heyecanınızı da azaltacaktır.</li>\n<li><strong>Ayna Karşısında Pratik:</strong> Dudak ve çene tembelliğini gidermek için her gün 10 dakika ayna karşısında abartılı dudak hareketleriyle yüksek sesli okuma çalışmaları yapın.</li>\n<li><strong>Ritim ve Hız:</strong> Çok hızlı konuşmak güven kaybına neden olur. Konuşma hızınızı bilinçli olarak düşürerek kelimelerin son harflerini yutmadan telaffuz edin.</li>\n</ul>\n\n<h3>Kısa Uygulama Egzersizi:</h3>\n<p>Dik bir şekilde ayakta durun. Burnunuzdan derin bir nefes alın ve nefesinizi \"Sssss\" veya \"Şşşş\" sesiyle yavaşça geri verin. Ardından aynı nefes desteğiyle \"okuma-parcalari\" konusu üzerinde kendi kendinize 1 dakikalık kısa bir konuşma provası yapın.</p>\n\n<div style=\"margin:2rem 0;padding:1.5rem;background:#f0f9ff;border-radius:12px;border:1px solid #bae6fd;\">\n  <h4 style=\"margin-top:0;color:#0369a1;\">🎙️ İnteraktif Egzersizlere Başlayın</h4>\n  <p style=\"margin-bottom:1rem;color:#0c4a6e;\">Teoriyi pratiğe dökmek için platformumuzdaki interaktif tekerleme, metronom ve artikülasyon araçlarını kullanabilirsiniz. Ücretsiz stüdyomuzda sesinizi kaydedip analiz edin.</p>\n  <a href=\"/\" style=\"display:inline-block;background:#0ea5e9;color:white;padding:12px 24px;border-radius:8px;text-decoration:none;font-weight:bold;\">Tüm Diksiyon Egzersizlerine Git →</a>\n</div>",
    "faq": [
        {
                "question": "okuma-parcalari için egzersizleri nerede bulabilirim?",
                "answer": "Ana sayfamızda yer alan Görsel Nefes, Tekerleme Arenası ve Ses Stüdyosu modüllerini kullanarak tamamen ücretsiz pratik yapabilirsiniz."
        },
        {
                "question": "Diksiyon eğitimi günde ne kadar pratik gerektirir?",
                "answer": "Kas hafızasının gelişmesi için her gün düzenli olarak 10-15 dakika sesli diksiyon pratiği yapmanız, haftada 1 kez 2 saat yapmanızdan çok daha etkilidir."
        }
]
},
  'diksiyon-programlari': {
    "title": "diksiyon-programlari",
    "desc": "",
    "h1": "diksiyon-programlari",
    "content": "Konuşma ve iletişim becerilerinizi geliştirmek, sosyal hayatta ve profesyonel kariyerinizde size büyük avantajlar sağlar. diksiyon-programlari konusu, doğru sesletim ve diyafram kontrolü gerektiren önemli bir diksiyon bileşenidir. Doğru teknikleri kullanarak bu süreci hızlandırabilirsiniz.\n\n<h3>Temel Kurallar ve Pratik Yöntemler:</h3>\n<ul>\n<li><strong>Nefes Kontrolü:</strong> Cümleleri kurarken göğsünüzden değil, diyaframınızdan nefes alarak sesinize derinlik ve güç katın. Hava akışını kontrol etmek heyecanınızı da azaltacaktır.</li>\n<li><strong>Ayna Karşısında Pratik:</strong> Dudak ve çene tembelliğini gidermek için her gün 10 dakika ayna karşısında abartılı dudak hareketleriyle yüksek sesli okuma çalışmaları yapın.</li>\n<li><strong>Ritim ve Hız:</strong> Çok hızlı konuşmak güven kaybına neden olur. Konuşma hızınızı bilinçli olarak düşürerek kelimelerin son harflerini yutmadan telaffuz edin.</li>\n</ul>\n\n<h3>Kısa Uygulama Egzersizi:</h3>\n<p>Dik bir şekilde ayakta durun. Burnunuzdan derin bir nefes alın ve nefesinizi \"Sssss\" veya \"Şşşş\" sesiyle yavaşça geri verin. Ardından aynı nefes desteğiyle \"diksiyon-programlari\" konusu üzerinde kendi kendinize 1 dakikalık kısa bir konuşma provası yapın.</p>\n\n<div style=\"margin:2rem 0;padding:1.5rem;background:#f0f9ff;border-radius:12px;border:1px solid #bae6fd;\">\n  <h4 style=\"margin-top:0;color:#0369a1;\">🎙️ İnteraktif Egzersizlere Başlayın</h4>\n  <p style=\"margin-bottom:1rem;color:#0c4a6e;\">Teoriyi pratiğe dökmek için platformumuzdaki interaktif tekerleme, metronom ve artikülasyon araçlarını kullanabilirsiniz. Ücretsiz stüdyomuzda sesinizi kaydedip analiz edin.</p>\n  <a href=\"/\" style=\"display:inline-block;background:#0ea5e9;color:white;padding:12px 24px;border-radius:8px;text-decoration:none;font-weight:bold;\">Tüm Diksiyon Egzersizlerine Git →</a>\n</div>",
    "faq": [
        {
                "question": "diksiyon-programlari için egzersizleri nerede bulabilirim?",
                "answer": "Ana sayfamızda yer alan Görsel Nefes, Tekerleme Arenası ve Ses Stüdyosu modüllerini kullanarak tamamen ücretsiz pratik yapabilirsiniz."
        },
        {
                "question": "Diksiyon eğitimi günde ne kadar pratik gerektirir?",
                "answer": "Kas hafızasının gelişmesi için her gün düzenli olarak 10-15 dakika sesli diksiyon pratiği yapmanız, haftada 1 kez 2 saat yapmanızdan çok daha etkilidir."
        }
]
},
  'okunuslar': {
    "title": "okunuslar",
    "desc": "",
    "h1": "okunuslar",
    "content": "Konuşma ve iletişim becerilerinizi geliştirmek, sosyal hayatta ve profesyonel kariyerinizde size büyük avantajlar sağlar. okunuslar konusu, doğru sesletim ve diyafram kontrolü gerektiren önemli bir diksiyon bileşenidir. Doğru teknikleri kullanarak bu süreci hızlandırabilirsiniz.\n\n<h3>Temel Kurallar ve Pratik Yöntemler:</h3>\n<ul>\n<li><strong>Nefes Kontrolü:</strong> Cümleleri kurarken göğsünüzden değil, diyaframınızdan nefes alarak sesinize derinlik ve güç katın. Hava akışını kontrol etmek heyecanınızı da azaltacaktır.</li>\n<li><strong>Ayna Karşısında Pratik:</strong> Dudak ve çene tembelliğini gidermek için her gün 10 dakika ayna karşısında abartılı dudak hareketleriyle yüksek sesli okuma çalışmaları yapın.</li>\n<li><strong>Ritim ve Hız:</strong> Çok hızlı konuşmak güven kaybına neden olur. Konuşma hızınızı bilinçli olarak düşürerek kelimelerin son harflerini yutmadan telaffuz edin.</li>\n</ul>\n\n<h3>Kısa Uygulama Egzersizi:</h3>\n<p>Dik bir şekilde ayakta durun. Burnunuzdan derin bir nefes alın ve nefesinizi \"Sssss\" veya \"Şşşş\" sesiyle yavaşça geri verin. Ardından aynı nefes desteğiyle \"okunuslar\" konusu üzerinde kendi kendinize 1 dakikalık kısa bir konuşma provası yapın.</p>\n\n<div style=\"margin:2rem 0;padding:1.5rem;background:#f0f9ff;border-radius:12px;border:1px solid #bae6fd;\">\n  <h4 style=\"margin-top:0;color:#0369a1;\">🎙️ İnteraktif Egzersizlere Başlayın</h4>\n  <p style=\"margin-bottom:1rem;color:#0c4a6e;\">Teoriyi pratiğe dökmek için platformumuzdaki interaktif tekerleme, metronom ve artikülasyon araçlarını kullanabilirsiniz. Ücretsiz stüdyomuzda sesinizi kaydedip analiz edin.</p>\n  <a href=\"/\" style=\"display:inline-block;background:#0ea5e9;color:white;padding:12px 24px;border-radius:8px;text-decoration:none;font-weight:bold;\">Tüm Diksiyon Egzersizlerine Git →</a>\n</div>",
    "faq": [
        {
                "question": "okunuslar için egzersizleri nerede bulabilirim?",
                "answer": "Ana sayfamızda yer alan Görsel Nefes, Tekerleme Arenası ve Ses Stüdyosu modüllerini kullanarak tamamen ücretsiz pratik yapabilirsiniz."
        },
        {
                "question": "Diksiyon eğitimi günde ne kadar pratik gerektirir?",
                "answer": "Kas hafızasının gelişmesi için her gün düzenli olarak 10-15 dakika sesli diksiyon pratiği yapmanız, haftada 1 kez 2 saat yapmanızdan çok daha etkilidir."
        }
]
},
  'ses-rengi-nasil-degisir': {
    "title": "Ses Rengi ve Tonu Değiştirilebilir mi? Ses Estetiği - Diksiyon Rehberi",
    "desc": "Sesimin çok ince, çok kalın veya çocuksu çıkmasından rahatsızım. Ses rengi (tını) egzersizlerle nasıl daha olgun ve tok hale getirilir?",
    "h1": "Ses Rengi (Tını) Geliştirme ve Ton Bulma",
    "content": "Konuşma ve iletişim becerilerinizi geliştirmek, sosyal hayatta ve profesyonel kariyerinizde size büyük avantajlar sağlar. Ses Rengi (Tını) Geliştirme ve Ton Bulma konusu, doğru sesletim ve diyafram kontrolü gerektiren önemli bir diksiyon bileşenidir. Doğru teknikleri kullanarak bu süreci hızlandırabilirsiniz.\n\n<h3>Temel Kurallar ve Pratik Yöntemler:</h3>\n<ul>\n<li><strong>Nefes Kontrolü:</strong> Cümleleri kurarken göğsünüzden değil, diyaframınızdan nefes alarak sesinize derinlik ve güç katın. Hava akışını kontrol etmek heyecanınızı da azaltacaktır.</li>\n<li><strong>Ayna Karşısında Pratik:</strong> Dudak ve çene tembelliğini gidermek için her gün 10 dakika ayna karşısında abartılı dudak hareketleriyle yüksek sesli okuma çalışmaları yapın.</li>\n<li><strong>Ritim ve Hız:</strong> Çok hızlı konuşmak güven kaybına neden olur. Konuşma hızınızı bilinçli olarak düşürerek kelimelerin son harflerini yutmadan telaffuz edin.</li>\n</ul>\n\n<h3>Kısa Uygulama Egzersizi:</h3>\n<p>Dik bir şekilde ayakta durun. Burnunuzdan derin bir nefes alın ve nefesinizi \"Sssss\" veya \"Şşşş\" sesiyle yavaşça geri verin. Ardından aynı nefes desteğiyle \"Ses Rengi (Tını) Geliştirme ve Ton Bulma\" konusu üzerinde kendi kendinize 1 dakikalık kısa bir konuşma provası yapın.</p>\n\n<div style=\"margin:2rem 0;padding:1.5rem;background:#f0f9ff;border-radius:12px;border:1px solid #bae6fd;\">\n  <h4 style=\"margin-top:0;color:#0369a1;\">🎙️ İnteraktif Egzersizlere Başlayın</h4>\n  <p style=\"margin-bottom:1rem;color:#0c4a6e;\">Teoriyi pratiğe dökmek için platformumuzdaki interaktif tekerleme, metronom ve artikülasyon araçlarını kullanabilirsiniz. Ücretsiz stüdyomuzda sesinizi kaydedip analiz edin.</p>\n  <a href=\"/\" style=\"display:inline-block;background:#0ea5e9;color:white;padding:12px 24px;border-radius:8px;text-decoration:none;font-weight:bold;\">Tüm Diksiyon Egzersizlerine Git →</a>\n</div>",
    "faq": [
        {
                "question": "Ses Rengi (Tını) Geliştirme ve Ton Bulma için egzersizleri nerede bulabilirim?",
                "answer": "Ana sayfamızda yer alan Görsel Nefes, Tekerleme Arenası ve Ses Stüdyosu modüllerini kullanarak tamamen ücretsiz pratik yapabilirsiniz."
        },
        {
                "question": "Diksiyon eğitimi günde ne kadar pratik gerektirir?",
                "answer": "Kas hafızasının gelişmesi için her gün düzenli olarak 10-15 dakika sesli diksiyon pratiği yapmanız, haftada 1 kez 2 saat yapmanızdan çok daha etkilidir."
        }
]
},
  'ikna-edici-konusma-sanati': {
    "title": "İkna Edici Konuşma Sanatı ve Retorik - Diksiyon Rehberi",
    "desc": "Mantığa, duyguya ve karaktere hitap eden retorik üçgeni (Ethos, Pathos, Logos). Kitleleri harekete geçiren hitabet stratejileri.",
    "h1": "İkna Edici Konuşma ve Retorik Sanatı",
    "content": "Konuşma ve iletişim becerilerinizi geliştirmek, sosyal hayatta ve profesyonel kariyerinizde size büyük avantajlar sağlar. İkna Edici Konuşma ve Retorik Sanatı konusu, doğru sesletim ve diyafram kontrolü gerektiren önemli bir diksiyon bileşenidir. Doğru teknikleri kullanarak bu süreci hızlandırabilirsiniz.\n\n<h3>Temel Kurallar ve Pratik Yöntemler:</h3>\n<ul>\n<li><strong>Nefes Kontrolü:</strong> Cümleleri kurarken göğsünüzden değil, diyaframınızdan nefes alarak sesinize derinlik ve güç katın. Hava akışını kontrol etmek heyecanınızı da azaltacaktır.</li>\n<li><strong>Ayna Karşısında Pratik:</strong> Dudak ve çene tembelliğini gidermek için her gün 10 dakika ayna karşısında abartılı dudak hareketleriyle yüksek sesli okuma çalışmaları yapın.</li>\n<li><strong>Ritim ve Hız:</strong> Çok hızlı konuşmak güven kaybına neden olur. Konuşma hızınızı bilinçli olarak düşürerek kelimelerin son harflerini yutmadan telaffuz edin.</li>\n</ul>\n\n<h3>Kısa Uygulama Egzersizi:</h3>\n<p>Dik bir şekilde ayakta durun. Burnunuzdan derin bir nefes alın ve nefesinizi \"Sssss\" veya \"Şşşş\" sesiyle yavaşça geri verin. Ardından aynı nefes desteğiyle \"İkna Edici Konuşma ve Retorik Sanatı\" konusu üzerinde kendi kendinize 1 dakikalık kısa bir konuşma provası yapın.</p>\n\n<div style=\"margin:2rem 0;padding:1.5rem;background:#f0f9ff;border-radius:12px;border:1px solid #bae6fd;\">\n  <h4 style=\"margin-top:0;color:#0369a1;\">🎙️ İnteraktif Egzersizlere Başlayın</h4>\n  <p style=\"margin-bottom:1rem;color:#0c4a6e;\">Teoriyi pratiğe dökmek için platformumuzdaki interaktif tekerleme, metronom ve artikülasyon araçlarını kullanabilirsiniz. Ücretsiz stüdyomuzda sesinizi kaydedip analiz edin.</p>\n  <a href=\"/\" style=\"display:inline-block;background:#0ea5e9;color:white;padding:12px 24px;border-radius:8px;text-decoration:none;font-weight:bold;\">Tüm Diksiyon Egzersizlerine Git →</a>\n</div>",
    "faq": [
        {
                "question": "İkna Edici Konuşma ve Retorik Sanatı için egzersizleri nerede bulabilirim?",
                "answer": "Ana sayfamızda yer alan Görsel Nefes, Tekerleme Arenası ve Ses Stüdyosu modüllerini kullanarak tamamen ücretsiz pratik yapabilirsiniz."
        },
        {
                "question": "Diksiyon eğitimi günde ne kadar pratik gerektirir?",
                "answer": "Kas hafızasının gelişmesi için her gün düzenli olarak 10-15 dakika sesli diksiyon pratiği yapmanız, haftada 1 kez 2 saat yapmanızdan çok daha etkilidir."
        }
]
},
  'ses-kisikligi-icin-ne-yapmali': {
    "title": "Ses Kısıklığına Ne İyi Gelir? Ses Telleri Bakımı - Diksiyon Rehberi",
    "desc": "Konuşmaktan kısılan ve yorulan sese ne iyi gelir? Öğretmenler, çağrı merkezi çalışanları ve spikerler için ses sağlığı ve vokal hijyen kuralları.",
    "h1": "Ses Kısıklığı Tedavisi ve Ses Sağlığı (Vokal Hijyen)",
    "content": "Konuşma ve iletişim becerilerinizi geliştirmek, sosyal hayatta ve profesyonel kariyerinizde size büyük avantajlar sağlar. Ses Kısıklığı Tedavisi ve Ses Sağlığı (Vokal Hijyen) konusu, doğru sesletim ve diyafram kontrolü gerektiren önemli bir diksiyon bileşenidir. Doğru teknikleri kullanarak bu süreci hızlandırabilirsiniz.\n\n<h3>Temel Kurallar ve Pratik Yöntemler:</h3>\n<ul>\n<li><strong>Nefes Kontrolü:</strong> Cümleleri kurarken göğsünüzden değil, diyaframınızdan nefes alarak sesinize derinlik ve güç katın. Hava akışını kontrol etmek heyecanınızı da azaltacaktır.</li>\n<li><strong>Ayna Karşısında Pratik:</strong> Dudak ve çene tembelliğini gidermek için her gün 10 dakika ayna karşısında abartılı dudak hareketleriyle yüksek sesli okuma çalışmaları yapın.</li>\n<li><strong>Ritim ve Hız:</strong> Çok hızlı konuşmak güven kaybına neden olur. Konuşma hızınızı bilinçli olarak düşürerek kelimelerin son harflerini yutmadan telaffuz edin.</li>\n</ul>\n\n<h3>Kısa Uygulama Egzersizi:</h3>\n<p>Dik bir şekilde ayakta durun. Burnunuzdan derin bir nefes alın ve nefesinizi \"Sssss\" veya \"Şşşş\" sesiyle yavaşça geri verin. Ardından aynı nefes desteğiyle \"Ses Kısıklığı Tedavisi ve Ses Sağlığı (Vokal Hijyen)\" konusu üzerinde kendi kendinize 1 dakikalık kısa bir konuşma provası yapın.</p>\n\n<div style=\"margin:2rem 0;padding:1.5rem;background:#f0f9ff;border-radius:12px;border:1px solid #bae6fd;\">\n  <h4 style=\"margin-top:0;color:#0369a1;\">🎙️ İnteraktif Egzersizlere Başlayın</h4>\n  <p style=\"margin-bottom:1rem;color:#0c4a6e;\">Teoriyi pratiğe dökmek için platformumuzdaki interaktif tekerleme, metronom ve artikülasyon araçlarını kullanabilirsiniz. Ücretsiz stüdyomuzda sesinizi kaydedip analiz edin.</p>\n  <a href=\"/\" style=\"display:inline-block;background:#0ea5e9;color:white;padding:12px 24px;border-radius:8px;text-decoration:none;font-weight:bold;\">Tüm Diksiyon Egzersizlerine Git →</a>\n</div>",
    "faq": [
        {
                "question": "Ses Kısıklığı Tedavisi ve Ses Sağlığı (Vokal Hijyen) için egzersizleri nerede bulabilirim?",
                "answer": "Ana sayfamızda yer alan Görsel Nefes, Tekerleme Arenası ve Ses Stüdyosu modüllerini kullanarak tamamen ücretsiz pratik yapabilirsiniz."
        },
        {
                "question": "Diksiyon eğitimi günde ne kadar pratik gerektirir?",
                "answer": "Kas hafızasının gelişmesi için her gün düzenli olarak 10-15 dakika sesli diksiyon pratiği yapmanız, haftada 1 kez 2 saat yapmanızdan çok daha etkilidir."
        }
]
},
  'pazarlamacilar-icin-diksiyon': {
    "title": "Pazarlama ve Satış İçin İkna Edici Diksiyon - Diksiyon Rehberi",
    "desc": "Müşteriyi ikna eden, güven veren ve satış oranlarını artıran diksiyon teknikleri. Satış profesyonelleri için ses tonu ve vurgu sırları.",
    "h1": "Satış ve Pazarlamada İkna Edici Ses ve Diksiyon",
    "content": "Konuşma ve iletişim becerilerinizi geliştirmek, sosyal hayatta ve profesyonel kariyerinizde size büyük avantajlar sağlar. Satış ve Pazarlamada İkna Edici Ses ve Diksiyon konusu, doğru sesletim ve diyafram kontrolü gerektiren önemli bir diksiyon bileşenidir. Doğru teknikleri kullanarak bu süreci hızlandırabilirsiniz.\n\n<h3>Temel Kurallar ve Pratik Yöntemler:</h3>\n<ul>\n<li><strong>Nefes Kontrolü:</strong> Cümleleri kurarken göğsünüzden değil, diyaframınızdan nefes alarak sesinize derinlik ve güç katın. Hava akışını kontrol etmek heyecanınızı da azaltacaktır.</li>\n<li><strong>Ayna Karşısında Pratik:</strong> Dudak ve çene tembelliğini gidermek için her gün 10 dakika ayna karşısında abartılı dudak hareketleriyle yüksek sesli okuma çalışmaları yapın.</li>\n<li><strong>Ritim ve Hız:</strong> Çok hızlı konuşmak güven kaybına neden olur. Konuşma hızınızı bilinçli olarak düşürerek kelimelerin son harflerini yutmadan telaffuz edin.</li>\n</ul>\n\n<h3>Kısa Uygulama Egzersizi:</h3>\n<p>Dik bir şekilde ayakta durun. Burnunuzdan derin bir nefes alın ve nefesinizi \"Sssss\" veya \"Şşşş\" sesiyle yavaşça geri verin. Ardından aynı nefes desteğiyle \"Satış ve Pazarlamada İkna Edici Ses ve Diksiyon\" konusu üzerinde kendi kendinize 1 dakikalık kısa bir konuşma provası yapın.</p>\n\n<div style=\"margin:2rem 0;padding:1.5rem;background:#f0f9ff;border-radius:12px;border:1px solid #bae6fd;\">\n  <h4 style=\"margin-top:0;color:#0369a1;\">🎙️ İnteraktif Egzersizlere Başlayın</h4>\n  <p style=\"margin-bottom:1rem;color:#0c4a6e;\">Teoriyi pratiğe dökmek için platformumuzdaki interaktif tekerleme, metronom ve artikülasyon araçlarını kullanabilirsiniz. Ücretsiz stüdyomuzda sesinizi kaydedip analiz edin.</p>\n  <a href=\"/\" style=\"display:inline-block;background:#0ea5e9;color:white;padding:12px 24px;border-radius:8px;text-decoration:none;font-weight:bold;\">Tüm Diksiyon Egzersizlerine Git →</a>\n</div>",
    "faq": [
        {
                "question": "Satış ve Pazarlamada İkna Edici Ses ve Diksiyon için egzersizleri nerede bulabilirim?",
                "answer": "Ana sayfamızda yer alan Görsel Nefes, Tekerleme Arenası ve Ses Stüdyosu modüllerini kullanarak tamamen ücretsiz pratik yapabilirsiniz."
        },
        {
                "question": "Diksiyon eğitimi günde ne kadar pratik gerektirir?",
                "answer": "Kas hafızasının gelişmesi için her gün düzenli olarak 10-15 dakika sesli diksiyon pratiği yapmanız, haftada 1 kez 2 saat yapmanızdan çok daha etkilidir."
        }
]
},
  'r-harfi-nasil-soylenir': {
    "title": "R Harfi Söyleyememe (Rotasizm) Düzeltme Yolları - Diksiyon Rehberi",
    "desc": "R harfini Y veya Ğ gibi söyleme sorunu (Rotasizm) nasıl çözülür? R harfi titreşim egzersizleri ve dil motor becerilerini geliştirme teknikleri.",
    "h1": "R Harfini Söyleme: Rotasizm ve Titreşim Egzersizleri",
    "content": "Konuşma ve iletişim becerilerinizi geliştirmek, sosyal hayatta ve profesyonel kariyerinizde size büyük avantajlar sağlar. R Harfini Söyleme: Rotasizm ve Titreşim Egzersizleri konusu, doğru sesletim ve diyafram kontrolü gerektiren önemli bir diksiyon bileşenidir. Doğru teknikleri kullanarak bu süreci hızlandırabilirsiniz.\n\n<h3>Temel Kurallar ve Pratik Yöntemler:</h3>\n<ul>\n<li><strong>Nefes Kontrolü:</strong> Cümleleri kurarken göğsünüzden değil, diyaframınızdan nefes alarak sesinize derinlik ve güç katın. Hava akışını kontrol etmek heyecanınızı da azaltacaktır.</li>\n<li><strong>Ayna Karşısında Pratik:</strong> Dudak ve çene tembelliğini gidermek için her gün 10 dakika ayna karşısında abartılı dudak hareketleriyle yüksek sesli okuma çalışmaları yapın.</li>\n<li><strong>Ritim ve Hız:</strong> Çok hızlı konuşmak güven kaybına neden olur. Konuşma hızınızı bilinçli olarak düşürerek kelimelerin son harflerini yutmadan telaffuz edin.</li>\n</ul>\n\n<h3>Kısa Uygulama Egzersizi:</h3>\n<p>Dik bir şekilde ayakta durun. Burnunuzdan derin bir nefes alın ve nefesinizi \"Sssss\" veya \"Şşşş\" sesiyle yavaşça geri verin. Ardından aynı nefes desteğiyle \"R Harfini Söyleme: Rotasizm ve Titreşim Egzersizleri\" konusu üzerinde kendi kendinize 1 dakikalık kısa bir konuşma provası yapın.</p>\n\n<div style=\"margin:2rem 0;padding:1.5rem;background:#f0f9ff;border-radius:12px;border:1px solid #bae6fd;\">\n  <h4 style=\"margin-top:0;color:#0369a1;\">🎙️ İnteraktif Egzersizlere Başlayın</h4>\n  <p style=\"margin-bottom:1rem;color:#0c4a6e;\">Teoriyi pratiğe dökmek için platformumuzdaki interaktif tekerleme, metronom ve artikülasyon araçlarını kullanabilirsiniz. Ücretsiz stüdyomuzda sesinizi kaydedip analiz edin.</p>\n  <a href=\"/\" style=\"display:inline-block;background:#0ea5e9;color:white;padding:12px 24px;border-radius:8px;text-decoration:none;font-weight:bold;\">Tüm Diksiyon Egzersizlerine Git →</a>\n</div>",
    "faq": [
        {
                "question": "R Harfini Söyleme: Rotasizm ve Titreşim Egzersizleri için egzersizleri nerede bulabilirim?",
                "answer": "Ana sayfamızda yer alan Görsel Nefes, Tekerleme Arenası ve Ses Stüdyosu modüllerini kullanarak tamamen ücretsiz pratik yapabilirsiniz."
        },
        {
                "question": "Diksiyon eğitimi günde ne kadar pratik gerektirir?",
                "answer": "Kas hafızasının gelişmesi için her gün düzenli olarak 10-15 dakika sesli diksiyon pratiği yapmanız, haftada 1 kez 2 saat yapmanızdan çok daha etkilidir."
        }
]
},

  's-harfi-nasil-soylenir': {
    "title": "S Harfi Nasıl Söylenir? Pelteklik (Sigmazizm) Tedavisi - Diksiyon Rehberi",
    "desc": "S harfini doğru telaffuz edememe (Pelteklik/Sigmazizm) sorununu aşmak için dil konumlandırma teknikleri ve S harfi diksiyon egzersizleri.",
    "h1": "S Harfini Doğru Telaffuz Etme ve Pelteklik (Sigmazizm) Egzersizleri",
    "content": "S harfini çıkarırken \"th\" veya peltek bir ses çıkmasının (Sigmazizm) ana nedeni, dilin ucunun alt ve üst ön dişlerin arasına girmesi veya dişlere çok sert baskı yapmasıdır. Türkçe \"S\" harfi dişsel-dişeti (dental-alveolar) bir sestir.\\n\\n<h3>S Harfi İçin Dil Pozisyonu:</h3>\\n<ul>\\n<li><strong>Dil Ucu Nerede Olmalı?</strong> Dilinizin ucunu alt ön dişlerinizin arka köküne (diş etinin hemen altına) hafifçe dayayın. Kesinlikle dişlerin arasına sokmayın.</li>\\n<li><strong>Dişlerin Konumu:</strong> Alt ve üst dişleriniz birbirine çok yakın (neredeyse bitişik) olmalıdır. Ancak çenenizi sıkmayın.</li>\\n<li><strong>Hava Akışı:</strong> Dilinizin ortasında ince bir oluk oluşur. Akciğerden gelen hava bu oluktan geçerek dişlerin arasından dışarı sızar ve \"tıss\" sesini oluşturur.</li>\\n</ul>\\n\\n<h3>Kısa S Harfi Egzersizi:</h3>\\n<p>Önce dişlerinizi kapatın ve gülümser gibi dudaklarınızı geriye çekin. Dil ucunuzu alt ön dişlerinizin arkasına yaslayıp tıslayan bir yılan gibi kesintisiz \"Sssssssss\" sesi çıkarın. Bu sesi çıkarırken aynaya bakın, dilinizin ucu görünmemelidir.</p>\\n\\n<div style=\"margin:2rem 0;padding:1.5rem;background:#f0f9ff;border-radius:12px;border:1px solid #bae6fd;\">\\n  <h4 style=\"margin-top:0;color:#0369a1;\">🎙️ İnteraktif Egzersizlere Başlayın</h4>\\n  <p style=\"margin-bottom:1rem;color:#0c4a6e;\">Teoriyi pratiğe dökmek için platformumuzdaki interaktif tekerleme ve artikülasyon araçlarını kullanabilirsiniz. Ücretsiz stüdyomuzda sesinizi kaydedip analiz edin.</p>\\n  <a href=\"/\" style=\"display:inline-block;background:#0ea5e9;color:white;padding:12px 24px;border-radius:8px;text-decoration:none;font-weight:bold;\">Ücretsiz Diksiyon Stüdyosuna Git →</a>\\n</div>",
    "faq": [
        {
            "question": "Pelteklik yetişkinlikte düzelir mi?",
            "answer": "Kesinlikle evet. Pelteklik genellikle yanlış öğrenilmiş bir kas alışkanlığıdır (yanlış dil konumlandırması). Düzenli dil egzersizleri ve artikülasyon çalışmalarıyla yetişkinlerde de tamamen düzeltilebilir."
        },
        {
            "question": "S harfi egzersizlerini günde kaç dakika yapmalıyım?",
            "answer": "Dil kaslarının yeni motor hafızasını öğrenmesi için her gün düzenli olarak 10-15 dakika aynaya bakarak \"S\", \"Z\", \"Ş\" harfi ağırlıklı kelimeler ve tekerlemeler okumanız önerilir."
        }
    ]
},
  'etkili-sunum-teknikleri': {
    "title": "Topluluk Önünde Etkili Sunum Teknikleri ve Diksiyon - Diksiyon Rehberi",
    "desc": "İş hayatında ve okulda mükemmel sunumlar yapmak için sahne hakimiyeti, mikrofon kullanımı, heyecan kontrolü ve slayt anlatım teknikleri.",
    "h1": "Sahne Senin: Etkileyici Sunum ve Hitabet Sanatı",
    "content": "Konuşma ve iletişim becerilerinizi geliştirmek, sosyal hayatta ve profesyonel kariyerinizde size büyük avantajlar sağlar. Sahne Senin: Etkileyici Sunum ve Hitabet Sanatı konusu, doğru sesletim ve diyafram kontrolü gerektiren önemli bir diksiyon bileşenidir. Doğru teknikleri kullanarak bu süreci hızlandırabilirsiniz.\n\n<h3>Temel Kurallar ve Pratik Yöntemler:</h3>\n<ul>\n<li><strong>Nefes Kontrolü:</strong> Cümleleri kurarken göğsünüzden değil, diyaframınızdan nefes alarak sesinize derinlik ve güç katın. Hava akışını kontrol etmek heyecanınızı da azaltacaktır.</li>\n<li><strong>Ayna Karşısında Pratik:</strong> Dudak ve çene tembelliğini gidermek için her gün 10 dakika ayna karşısında abartılı dudak hareketleriyle yüksek sesli okuma çalışmaları yapın.</li>\n<li><strong>Ritim ve Hız:</strong> Çok hızlı konuşmak güven kaybına neden olur. Konuşma hızınızı bilinçli olarak düşürerek kelimelerin son harflerini yutmadan telaffuz edin.</li>\n</ul>\n\n<h3>Kısa Uygulama Egzersizi:</h3>\n<p>Dik bir şekilde ayakta durun. Burnunuzdan derin bir nefes alın ve nefesinizi \"Sssss\" veya \"Şşşş\" sesiyle yavaşça geri verin. Ardından aynı nefes desteğiyle \"Sahne Senin: Etkileyici Sunum ve Hitabet Sanatı\" konusu üzerinde kendi kendinize 1 dakikalık kısa bir konuşma provası yapın.</p>\n\n<div style=\"margin:2rem 0;padding:1.5rem;background:#f0f9ff;border-radius:12px;border:1px solid #bae6fd;\">\n  <h4 style=\"margin-top:0;color:#0369a1;\">🎙️ İnteraktif Egzersizlere Başlayın</h4>\n  <p style=\"margin-bottom:1rem;color:#0c4a6e;\">Teoriyi pratiğe dökmek için platformumuzdaki interaktif tekerleme, metronom ve artikülasyon araçlarını kullanabilirsiniz. Ücretsiz stüdyomuzda sesinizi kaydedip analiz edin.</p>\n  <a href=\"/\" style=\"display:inline-block;background:#0ea5e9;color:white;padding:12px 24px;border-radius:8px;text-decoration:none;font-weight:bold;\">Tüm Diksiyon Egzersizlerine Git →</a>\n</div>",
    "faq": [
        {
                "question": "Sahne Senin: Etkileyici Sunum ve Hitabet Sanatı için egzersizleri nerede bulabilirim?",
                "answer": "Ana sayfamızda yer alan Görsel Nefes, Tekerleme Arenası ve Ses Stüdyosu modüllerini kullanarak tamamen ücretsiz pratik yapabilirsiniz."
        },
        {
                "question": "Diksiyon eğitimi günde ne kadar pratik gerektirir?",
                "answer": "Kas hafızasının gelişmesi için her gün düzenli olarak 10-15 dakika sesli diksiyon pratiği yapmanız, haftada 1 kez 2 saat yapmanızdan çok daha etkilidir."
        }
]
},
  'kelime-dagarcigini-gelistirmek': {
    "title": "Kelime Dağarcığını Geliştirmek İçin Ne Yapmalı? - Diksiyon Rehberi",
    "desc": "Konuşurken kelime bulamama sorununu çözmek, aktif kelime haznesini artırmak ve zengin bir Türkçe ile konuşmak için yöntemler.",
    "h1": "Kelime Dağarcığını Geliştirme Yolları",
    "content": "Etkili konuşmanın önündeki en büyük engellerden biri \"ııı\", \"şey\", \"yani\" gibi asalak kelimelere sığınmaktır. Bunun temel nedeni zihninizdeki pasif kelime dağarcığını, aktif konuşma dilinize aktaramamaktır.\n\n<h3>Aktif Kelime Haznesini Artırma Egzersizleri:</h3>\n<ul>\n<li><strong>Eş Anlamlılar Oyunu:</strong> Gün içinde sık kullandığınız \"Güzel, İyi, Kötü, Çok\" gibi basit kelimeleri tespit edin. Bunların yerine en az 3 farklı eş anlamlı kullanmaya kendinizi zorlayın (Örn: Muazzam, Şahane, Fevkalade, Nitelikli).</li>\n<li><strong>1 Dakika Kesintisiz Konuşma:</strong> Odanızdaki rastgele bir eşyayı (örneğin bir bardak) seçin ve bu eşya hakkında duraksamadan, \"şey\" demeden 1 dakika boyunca konuşmaya çalışın. Bu beyindeki kelime bulma merkezini (Wernicke alanı) hızlandırır.</li>\n<li><strong>Sesli Okuma Yapın:</strong> Kitapları içinizden okumak yerine sesli okuduğunuzda, yazarın kullandığı farklı ve zengin kelimeler doğrudan dilinizin ve dudaklarınızın motor hafızasına yerleşir.</li>\n</ul>\n\n<div style=\"margin:2rem 0;padding:1.5rem;background:#fef2f2;border-radius:12px;border:1px solid #fee2e2;\">\n  <h4 style=\"margin-top:0;color:#b91c1c;\">🎙️ Okuma Egzersizleriyle Kelimeleri Keşfedin</h4>\n  <p style=\"margin-bottom:1rem;color:#7f1d1d;\">Zengin bir kelime dağarcığı için platformumuzdaki edebi okuma parçalarını sesli olarak okuyun ve kaydedin.</p>\n  <a href=\"/\" style=\"display:inline-block;background:#ef4444;color:white;padding:12px 24px;border-radius:8px;text-decoration:none;font-weight:bold;\">Okuma Parçalarına Git →</a>\n</div>",
    "faq": [
        {
                "question": "Kitap okuyorum ama konuşurken kelimeler aklıma gelmiyor, neden?",
                "answer": "Çünkü okumak pasif, konuşmak aktif bir eylemdir. Öğrendiğiniz kelimeleri aktif olarak cümle içinde (sesli olarak) kullanmazsanız zihniniz o kelimeleri konuşma anında geri çağıramaz."
        }
]
},
  'nasil-daha-etkili-konusurum': {
    "title": "Nasıl Daha Etkili ve Güzel Konuşurum? 7 Etkili Teknik - Diksiyon Rehberi",
    "desc": "İnsanları etkileyen, dinleten ve ikna eden bir konuşma tarzına sahip olmak için uygulamanız gereken altın kurallar ve hitabet teknikleri.",
    "h1": "Etkileyici, Akıcı ve Özgüvenli Konuşma Sanatı",
    "content": "Konuşma ve iletişim becerilerinizi geliştirmek, sosyal hayatta ve profesyonel kariyerinizde size büyük avantajlar sağlar. Etkileyici, Akıcı ve Özgüvenli Konuşma Sanatı konusu, doğru sesletim ve diyafram kontrolü gerektiren önemli bir diksiyon bileşenidir. Doğru teknikleri kullanarak bu süreci hızlandırabilirsiniz.\n\n<h3>Temel Kurallar ve Pratik Yöntemler:</h3>\n<ul>\n<li><strong>Nefes Kontrolü:</strong> Cümleleri kurarken göğsünüzden değil, diyaframınızdan nefes alarak sesinize derinlik ve güç katın. Hava akışını kontrol etmek heyecanınızı da azaltacaktır.</li>\n<li><strong>Ayna Karşısında Pratik:</strong> Dudak ve çene tembelliğini gidermek için her gün 10 dakika ayna karşısında abartılı dudak hareketleriyle yüksek sesli okuma çalışmaları yapın.</li>\n<li><strong>Ritim ve Hız:</strong> Çok hızlı konuşmak güven kaybına neden olur. Konuşma hızınızı bilinçli olarak düşürerek kelimelerin son harflerini yutmadan telaffuz edin.</li>\n</ul>\n\n<h3>Kısa Uygulama Egzersizi:</h3>\n<p>Dik bir şekilde ayakta durun. Burnunuzdan derin bir nefes alın ve nefesinizi \"Sssss\" veya \"Şşşş\" sesiyle yavaşça geri verin. Ardından aynı nefes desteğiyle \"Etkileyici, Akıcı ve Özgüvenli Konuşma Sanatı\" konusu üzerinde kendi kendinize 1 dakikalık kısa bir konuşma provası yapın.</p>\n\n<div style=\"margin:2rem 0;padding:1.5rem;background:#f0f9ff;border-radius:12px;border:1px solid #bae6fd;\">\n  <h4 style=\"margin-top:0;color:#0369a1;\">🎙️ İnteraktif Egzersizlere Başlayın</h4>\n  <p style=\"margin-bottom:1rem;color:#0c4a6e;\">Teoriyi pratiğe dökmek için platformumuzdaki interaktif tekerleme, metronom ve artikülasyon araçlarını kullanabilirsiniz. Ücretsiz stüdyomuzda sesinizi kaydedip analiz edin.</p>\n  <a href=\"/\" style=\"display:inline-block;background:#0ea5e9;color:white;padding:12px 24px;border-radius:8px;text-decoration:none;font-weight:bold;\">Tüm Diksiyon Egzersizlerine Git →</a>\n</div>",
    "faq": [
        {
                "question": "Etkileyici, Akıcı ve Özgüvenli Konuşma Sanatı için egzersizleri nerede bulabilirim?",
                "answer": "Ana sayfamızda yer alan Görsel Nefes, Tekerleme Arenası ve Ses Stüdyosu modüllerini kullanarak tamamen ücretsiz pratik yapabilirsiniz."
        },
        {
                "question": "Diksiyon eğitimi günde ne kadar pratik gerektirir?",
                "answer": "Kas hafızasının gelişmesi için her gün düzenli olarak 10-15 dakika sesli diksiyon pratiği yapmanız, haftada 1 kez 2 saat yapmanızdan çok daha etkilidir."
        }
]
},
  'diksiyon-testi': {
    "title": "Ücretsiz Online Diksiyon Testi ve Öz Değerlendirme - Diksiyon Rehberi",
    "desc": "Konuşma seviyenizi ölçün. Online diksiyon testimizle telaffuz, nefes kontrolü ve vurgu hatalarınızı 2 dakikada analiz edin.",
    "h1": "Online Diksiyon Seviye Testi ve Ses Analizi",
    "content": "Konuşma ve iletişim becerilerinizi geliştirmek, sosyal hayatta ve profesyonel kariyerinizde size büyük avantajlar sağlar. Online Diksiyon Seviye Testi ve Ses Analizi konusu, doğru sesletim ve diyafram kontrolü gerektiren önemli bir diksiyon bileşenidir. Doğru teknikleri kullanarak bu süreci hızlandırabilirsiniz.\n\n<h3>Temel Kurallar ve Pratik Yöntemler:</h3>\n<ul>\n<li><strong>Nefes Kontrolü:</strong> Cümleleri kurarken göğsünüzden değil, diyaframınızdan nefes alarak sesinize derinlik ve güç katın. Hava akışını kontrol etmek heyecanınızı da azaltacaktır.</li>\n<li><strong>Ayna Karşısında Pratik:</strong> Dudak ve çene tembelliğini gidermek için her gün 10 dakika ayna karşısında abartılı dudak hareketleriyle yüksek sesli okuma çalışmaları yapın.</li>\n<li><strong>Ritim ve Hız:</strong> Çok hızlı konuşmak güven kaybına neden olur. Konuşma hızınızı bilinçli olarak düşürerek kelimelerin son harflerini yutmadan telaffuz edin.</li>\n</ul>\n\n<h3>Kısa Uygulama Egzersizi:</h3>\n<p>Dik bir şekilde ayakta durun. Burnunuzdan derin bir nefes alın ve nefesinizi \"Sssss\" veya \"Şşşş\" sesiyle yavaşça geri verin. Ardından aynı nefes desteğiyle \"Online Diksiyon Seviye Testi ve Ses Analizi\" konusu üzerinde kendi kendinize 1 dakikalık kısa bir konuşma provası yapın.</p>\n\n<div style=\"margin:2rem 0;padding:1.5rem;background:#f0f9ff;border-radius:12px;border:1px solid #bae6fd;\">\n  <h4 style=\"margin-top:0;color:#0369a1;\">🎙️ İnteraktif Egzersizlere Başlayın</h4>\n  <p style=\"margin-bottom:1rem;color:#0c4a6e;\">Teoriyi pratiğe dökmek için platformumuzdaki interaktif tekerleme, metronom ve artikülasyon araçlarını kullanabilirsiniz. Ücretsiz stüdyomuzda sesinizi kaydedip analiz edin.</p>\n  <a href=\"/\" style=\"display:inline-block;background:#0ea5e9;color:white;padding:12px 24px;border-radius:8px;text-decoration:none;font-weight:bold;\">Tüm Diksiyon Egzersizlerine Git →</a>\n</div>",
    "faq": [
        {
                "question": "Online Diksiyon Seviye Testi ve Ses Analizi için egzersizleri nerede bulabilirim?",
                "answer": "Ana sayfamızda yer alan Görsel Nefes, Tekerleme Arenası ve Ses Stüdyosu modüllerini kullanarak tamamen ücretsiz pratik yapabilirsiniz."
        },
        {
                "question": "Diksiyon eğitimi günde ne kadar pratik gerektirir?",
                "answer": "Kas hafızasının gelişmesi için her gün düzenli olarak 10-15 dakika sesli diksiyon pratiği yapmanız, haftada 1 kez 2 saat yapmanızdan çok daha etkilidir."
        }
]
},
  'beden-dili-ve-diksiyon': {
    "title": "Beden Dili ve Diksiyon: Etkili İletişimin Ayrılmaz İkilisi - Diksiyon Rehberi",
    "desc": "Sözlerinizi destekleyecek jest, mimik ve duruş teknikleri. Etkili beden dili kullanımıyla kelimelerinizin gücünü 5 katına çıkarın.",
    "h1": "Beden Dili, Jest ve Mimiklerle Etkili İletişim",
    "content": "Konuşma ve iletişim becerilerinizi geliştirmek, sosyal hayatta ve profesyonel kariyerinizde size büyük avantajlar sağlar. Beden Dili, Jest ve Mimiklerle Etkili İletişim konusu, doğru sesletim ve diyafram kontrolü gerektiren önemli bir diksiyon bileşenidir. Doğru teknikleri kullanarak bu süreci hızlandırabilirsiniz.\n\n<h3>Temel Kurallar ve Pratik Yöntemler:</h3>\n<ul>\n<li><strong>Nefes Kontrolü:</strong> Cümleleri kurarken göğsünüzden değil, diyaframınızdan nefes alarak sesinize derinlik ve güç katın. Hava akışını kontrol etmek heyecanınızı da azaltacaktır.</li>\n<li><strong>Ayna Karşısında Pratik:</strong> Dudak ve çene tembelliğini gidermek için her gün 10 dakika ayna karşısında abartılı dudak hareketleriyle yüksek sesli okuma çalışmaları yapın.</li>\n<li><strong>Ritim ve Hız:</strong> Çok hızlı konuşmak güven kaybına neden olur. Konuşma hızınızı bilinçli olarak düşürerek kelimelerin son harflerini yutmadan telaffuz edin.</li>\n</ul>\n\n<h3>Kısa Uygulama Egzersizi:</h3>\n<p>Dik bir şekilde ayakta durun. Burnunuzdan derin bir nefes alın ve nefesinizi \"Sssss\" veya \"Şşşş\" sesiyle yavaşça geri verin. Ardından aynı nefes desteğiyle \"Beden Dili, Jest ve Mimiklerle Etkili İletişim\" konusu üzerinde kendi kendinize 1 dakikalık kısa bir konuşma provası yapın.</p>\n\n<div style=\"margin:2rem 0;padding:1.5rem;background:#f0f9ff;border-radius:12px;border:1px solid #bae6fd;\">\n  <h4 style=\"margin-top:0;color:#0369a1;\">🎙️ İnteraktif Egzersizlere Başlayın</h4>\n  <p style=\"margin-bottom:1rem;color:#0c4a6e;\">Teoriyi pratiğe dökmek için platformumuzdaki interaktif tekerleme, metronom ve artikülasyon araçlarını kullanabilirsiniz. Ücretsiz stüdyomuzda sesinizi kaydedip analiz edin.</p>\n  <a href=\"/\" style=\"display:inline-block;background:#0ea5e9;color:white;padding:12px 24px;border-radius:8px;text-decoration:none;font-weight:bold;\">Tüm Diksiyon Egzersizlerine Git →</a>\n</div>",
    "faq": [
        {
                "question": "Beden Dili, Jest ve Mimiklerle Etkili İletişim için egzersizleri nerede bulabilirim?",
                "answer": "Ana sayfamızda yer alan Görsel Nefes, Tekerleme Arenası ve Ses Stüdyosu modüllerini kullanarak tamamen ücretsiz pratik yapabilirsiniz."
        },
        {
                "question": "Diksiyon eğitimi günde ne kadar pratik gerektirir?",
                "answer": "Kas hafızasının gelişmesi için her gün düzenli olarak 10-15 dakika sesli diksiyon pratiği yapmanız, haftada 1 kez 2 saat yapmanızdan çok daha etkilidir."
        }
]
},
  'akici-turkce-konusmak': {
    "title": "Yabancılar ve Gurbetçiler İçin Akıcı Türkçe Konuşma Pratikleri - Diksiyon Rehberi",
    "desc": "Yurtdışında yaşayan Türkler veya Türkçeyi sonradan öğrenenler için takılmadan, doğal ve akıcı Türkçe konuşma teknikleri.",
    "h1": "Akıcı ve Doğal Türkçe Konuşma Teknikleri",
    "content": "Konuşma ve iletişim becerilerinizi geliştirmek, sosyal hayatta ve profesyonel kariyerinizde size büyük avantajlar sağlar. Akıcı ve Doğal Türkçe Konuşma Teknikleri konusu, doğru sesletim ve diyafram kontrolü gerektiren önemli bir diksiyon bileşenidir. Doğru teknikleri kullanarak bu süreci hızlandırabilirsiniz.\n\n<h3>Temel Kurallar ve Pratik Yöntemler:</h3>\n<ul>\n<li><strong>Nefes Kontrolü:</strong> Cümleleri kurarken göğsünüzden değil, diyaframınızdan nefes alarak sesinize derinlik ve güç katın. Hava akışını kontrol etmek heyecanınızı da azaltacaktır.</li>\n<li><strong>Ayna Karşısında Pratik:</strong> Dudak ve çene tembelliğini gidermek için her gün 10 dakika ayna karşısında abartılı dudak hareketleriyle yüksek sesli okuma çalışmaları yapın.</li>\n<li><strong>Ritim ve Hız:</strong> Çok hızlı konuşmak güven kaybına neden olur. Konuşma hızınızı bilinçli olarak düşürerek kelimelerin son harflerini yutmadan telaffuz edin.</li>\n</ul>\n\n<h3>Kısa Uygulama Egzersizi:</h3>\n<p>Dik bir şekilde ayakta durun. Burnunuzdan derin bir nefes alın ve nefesinizi \"Sssss\" veya \"Şşşş\" sesiyle yavaşça geri verin. Ardından aynı nefes desteğiyle \"Akıcı ve Doğal Türkçe Konuşma Teknikleri\" konusu üzerinde kendi kendinize 1 dakikalık kısa bir konuşma provası yapın.</p>\n\n<div style=\"margin:2rem 0;padding:1.5rem;background:#f0f9ff;border-radius:12px;border:1px solid #bae6fd;\">\n  <h4 style=\"margin-top:0;color:#0369a1;\">🎙️ İnteraktif Egzersizlere Başlayın</h4>\n  <p style=\"margin-bottom:1rem;color:#0c4a6e;\">Teoriyi pratiğe dökmek için platformumuzdaki interaktif tekerleme, metronom ve artikülasyon araçlarını kullanabilirsiniz. Ücretsiz stüdyomuzda sesinizi kaydedip analiz edin.</p>\n  <a href=\"/\" style=\"display:inline-block;background:#0ea5e9;color:white;padding:12px 24px;border-radius:8px;text-decoration:none;font-weight:bold;\">Tüm Diksiyon Egzersizlerine Git →</a>\n</div>",
    "faq": [
        {
                "question": "Akıcı ve Doğal Türkçe Konuşma Teknikleri için egzersizleri nerede bulabilirim?",
                "answer": "Ana sayfamızda yer alan Görsel Nefes, Tekerleme Arenası ve Ses Stüdyosu modüllerini kullanarak tamamen ücretsiz pratik yapabilirsiniz."
        },
        {
                "question": "Diksiyon eğitimi günde ne kadar pratik gerektirir?",
                "answer": "Kas hafızasının gelişmesi için her gün düzenli olarak 10-15 dakika sesli diksiyon pratiği yapmanız, haftada 1 kez 2 saat yapmanızdan çok daha etkilidir."
        }
]
},
  'duygusal-konusma-teknikleri': {
    "title": "Duygu Aktarımı: Konuşmaya Duygu Katma Teknikleri - Diksiyon Rehberi",
    "desc": "Robot gibi monoton konuşmaktan kurtulun. Sese sevinç, üzüntü, şaşkınlık ve öfke gibi duyguları doğal şekilde yansıtma egzersizleri.",
    "h1": "Sese Duygu Katma ve Monotonluktan Kurtulma",
    "content": "Konuşma ve iletişim becerilerinizi geliştirmek, sosyal hayatta ve profesyonel kariyerinizde size büyük avantajlar sağlar. Sese Duygu Katma ve Monotonluktan Kurtulma konusu, doğru sesletim ve diyafram kontrolü gerektiren önemli bir diksiyon bileşenidir. Doğru teknikleri kullanarak bu süreci hızlandırabilirsiniz.\n\n<h3>Temel Kurallar ve Pratik Yöntemler:</h3>\n<ul>\n<li><strong>Nefes Kontrolü:</strong> Cümleleri kurarken göğsünüzden değil, diyaframınızdan nefes alarak sesinize derinlik ve güç katın. Hava akışını kontrol etmek heyecanınızı da azaltacaktır.</li>\n<li><strong>Ayna Karşısında Pratik:</strong> Dudak ve çene tembelliğini gidermek için her gün 10 dakika ayna karşısında abartılı dudak hareketleriyle yüksek sesli okuma çalışmaları yapın.</li>\n<li><strong>Ritim ve Hız:</strong> Çok hızlı konuşmak güven kaybına neden olur. Konuşma hızınızı bilinçli olarak düşürerek kelimelerin son harflerini yutmadan telaffuz edin.</li>\n</ul>\n\n<h3>Kısa Uygulama Egzersizi:</h3>\n<p>Dik bir şekilde ayakta durun. Burnunuzdan derin bir nefes alın ve nefesinizi \"Sssss\" veya \"Şşşş\" sesiyle yavaşça geri verin. Ardından aynı nefes desteğiyle \"Sese Duygu Katma ve Monotonluktan Kurtulma\" konusu üzerinde kendi kendinize 1 dakikalık kısa bir konuşma provası yapın.</p>\n\n<div style=\"margin:2rem 0;padding:1.5rem;background:#f0f9ff;border-radius:12px;border:1px solid #bae6fd;\">\n  <h4 style=\"margin-top:0;color:#0369a1;\">🎙️ İnteraktif Egzersizlere Başlayın</h4>\n  <p style=\"margin-bottom:1rem;color:#0c4a6e;\">Teoriyi pratiğe dökmek için platformumuzdaki interaktif tekerleme, metronom ve artikülasyon araçlarını kullanabilirsiniz. Ücretsiz stüdyomuzda sesinizi kaydedip analiz edin.</p>\n  <a href=\"/\" style=\"display:inline-block;background:#0ea5e9;color:white;padding:12px 24px;border-radius:8px;text-decoration:none;font-weight:bold;\">Tüm Diksiyon Egzersizlerine Git →</a>\n</div>",
    "faq": [
        {
                "question": "Sese Duygu Katma ve Monotonluktan Kurtulma için egzersizleri nerede bulabilirim?",
                "answer": "Ana sayfamızda yer alan Görsel Nefes, Tekerleme Arenası ve Ses Stüdyosu modüllerini kullanarak tamamen ücretsiz pratik yapabilirsiniz."
        },
        {
                "question": "Diksiyon eğitimi günde ne kadar pratik gerektirir?",
                "answer": "Kas hafızasının gelişmesi için her gün düzenli olarak 10-15 dakika sesli diksiyon pratiği yapmanız, haftada 1 kez 2 saat yapmanızdan çok daha etkilidir."
        }
]
},
  'ses-titremesi-nasil-gecer': {
    "title": "Ses Titremesi ve Konuşurken Nefes Nefese Kalma - Diksiyon Rehberi",
    "desc": "Heyecandan veya stresten konuşurken sesin titremesi, çatallanması ve nefes darlığı yaşamanın psikolojik ve fiziksel çözümleri.",
    "h1": "Konuşurken Ses Titremesi Nasıl Geçer?",
    "content": "Konuşma ve iletişim becerilerinizi geliştirmek, sosyal hayatta ve profesyonel kariyerinizde size büyük avantajlar sağlar. Konuşurken Ses Titremesi Nasıl Geçer? konusu, doğru sesletim ve diyafram kontrolü gerektiren önemli bir diksiyon bileşenidir. Doğru teknikleri kullanarak bu süreci hızlandırabilirsiniz.\n\n<h3>Temel Kurallar ve Pratik Yöntemler:</h3>\n<ul>\n<li><strong>Nefes Kontrolü:</strong> Cümleleri kurarken göğsünüzden değil, diyaframınızdan nefes alarak sesinize derinlik ve güç katın. Hava akışını kontrol etmek heyecanınızı da azaltacaktır.</li>\n<li><strong>Ayna Karşısında Pratik:</strong> Dudak ve çene tembelliğini gidermek için her gün 10 dakika ayna karşısında abartılı dudak hareketleriyle yüksek sesli okuma çalışmaları yapın.</li>\n<li><strong>Ritim ve Hız:</strong> Çok hızlı konuşmak güven kaybına neden olur. Konuşma hızınızı bilinçli olarak düşürerek kelimelerin son harflerini yutmadan telaffuz edin.</li>\n</ul>\n\n<h3>Kısa Uygulama Egzersizi:</h3>\n<p>Dik bir şekilde ayakta durun. Burnunuzdan derin bir nefes alın ve nefesinizi \"Sssss\" veya \"Şşşş\" sesiyle yavaşça geri verin. Ardından aynı nefes desteğiyle \"Konuşurken Ses Titremesi Nasıl Geçer?\" konusu üzerinde kendi kendinize 1 dakikalık kısa bir konuşma provası yapın.</p>\n\n<div style=\"margin:2rem 0;padding:1.5rem;background:#f0f9ff;border-radius:12px;border:1px solid #bae6fd;\">\n  <h4 style=\"margin-top:0;color:#0369a1;\">🎙️ İnteraktif Egzersizlere Başlayın</h4>\n  <p style=\"margin-bottom:1rem;color:#0c4a6e;\">Teoriyi pratiğe dökmek için platformumuzdaki interaktif tekerleme, metronom ve artikülasyon araçlarını kullanabilirsiniz. Ücretsiz stüdyomuzda sesinizi kaydedip analiz edin.</p>\n  <a href=\"/\" style=\"display:inline-block;background:#0ea5e9;color:white;padding:12px 24px;border-radius:8px;text-decoration:none;font-weight:bold;\">Tüm Diksiyon Egzersizlerine Git →</a>\n</div>",
    "faq": [
        {
                "question": "Konuşurken Ses Titremesi Nasıl Geçer? için egzersizleri nerede bulabilirim?",
                "answer": "Ana sayfamızda yer alan Görsel Nefes, Tekerleme Arenası ve Ses Stüdyosu modüllerini kullanarak tamamen ücretsiz pratik yapabilirsiniz."
        },
        {
                "question": "Diksiyon eğitimi günde ne kadar pratik gerektirir?",
                "answer": "Kas hafızasının gelişmesi için her gün düzenli olarak 10-15 dakika sesli diksiyon pratiği yapmanız, haftada 1 kez 2 saat yapmanızdan çok daha etkilidir."
        }
]
},

  'siyasetciler-icin-hitabet': {
    "title": "Siyasetçiler ve Politikacılar İçin Miting Hitabeti - Diksiyon Rehberi",
    "desc": "Miting alanlarında kitleleri coşturan, ikna eden ve güven veren siyasi hitabet, beden dili ve mikrofon kullanma teknikleri.",
    "h1": "Siyasetçiler İçin Hitabet ve Kitle İletişimi",
    "content": "Konuşma ve iletişim becerilerinizi geliştirmek, sosyal hayatta ve profesyonel kariyerinizde size büyük avantajlar sağlar. Siyasetçiler İçin Hitabet ve Kitle İletişimi konusu, doğru sesletim ve diyafram kontrolü gerektiren önemli bir diksiyon bileşenidir. Doğru teknikleri kullanarak bu süreci hızlandırabilirsiniz.\n\n<h3>Temel Kurallar ve Pratik Yöntemler:</h3>\n<ul>\n<li><strong>Nefes Kontrolü:</strong> Cümleleri kurarken göğsünüzden değil, diyaframınızdan nefes alarak sesinize derinlik ve güç katın. Hava akışını kontrol etmek heyecanınızı da azaltacaktır.</li>\n<li><strong>Ayna Karşısında Pratik:</strong> Dudak ve çene tembelliğini gidermek için her gün 10 dakika ayna karşısında abartılı dudak hareketleriyle yüksek sesli okuma çalışmaları yapın.</li>\n<li><strong>Ritim ve Hız:</strong> Çok hızlı konuşmak güven kaybına neden olur. Konuşma hızınızı bilinçli olarak düşürerek kelimelerin son harflerini yutmadan telaffuz edin.</li>\n</ul>\n\n<h3>Kısa Uygulama Egzersizi:</h3>\n<p>Dik bir şekilde ayakta durun. Burnunuzdan derin bir nefes alın ve nefesinizi \"Sssss\" veya \"Şşşş\" sesiyle yavaşça geri verin. Ardından aynı nefes desteğiyle \"Siyasetçiler İçin Hitabet ve Kitle İletişimi\" konusu üzerinde kendi kendinize 1 dakikalık kısa bir konuşma provası yapın.</p>\n\n<div style=\"margin:2rem 0;padding:1.5rem;background:#f0f9ff;border-radius:12px;border:1px solid #bae6fd;\">\n  <h4 style=\"margin-top:0;color:#0369a1;\">🎙️ İnteraktif Egzersizlere Başlayın</h4>\n  <p style=\"margin-bottom:1rem;color:#0c4a6e;\">Teoriyi pratiğe dökmek için platformumuzdaki interaktif tekerleme, metronom ve artikülasyon araçlarını kullanabilirsiniz. Ücretsiz stüdyomuzda sesinizi kaydedip analiz edin.</p>\n  <a href=\"/\" style=\"display:inline-block;background:#0ea5e9;color:white;padding:12px 24px;border-radius:8px;text-decoration:none;font-weight:bold;\">Tüm Diksiyon Egzersizlerine Git →</a>\n</div>",
    "faq": [
        {
                "question": "Siyasetçiler İçin Hitabet ve Kitle İletişimi için egzersizleri nerede bulabilirim?",
                "answer": "Ana sayfamızda yer alan Görsel Nefes, Tekerleme Arenası ve Ses Stüdyosu modüllerini kullanarak tamamen ücretsiz pratik yapabilirsiniz."
        },
        {
                "question": "Diksiyon eğitimi günde ne kadar pratik gerektirir?",
                "answer": "Kas hafızasının gelişmesi için her gün düzenli olarak 10-15 dakika sesli diksiyon pratiği yapmanız, haftada 1 kez 2 saat yapmanızdan çok daha etkilidir."
        }
]
},

  'yoneticiler-icin-diksiyon': {
    "title": "Yöneticiler ve Liderler İçin Hitabet ve Diksiyon - Diksiyon Rehberi",
    "desc": "Ekibe liderlik eden, toplantılar yöneten yöneticiler için ikna edici, otoriter ve ilham verici konuşma teknikleri.",
    "h1": "Yöneticiler, Liderler ve CEO'lar İçin Hitabet Sanatı",
    "content": "Konuşma ve iletişim becerilerinizi geliştirmek, sosyal hayatta ve profesyonel kariyerinizde size büyük avantajlar sağlar. Yöneticiler, Liderler ve CEO'lar İçin Hitabet Sanatı konusu, doğru sesletim ve diyafram kontrolü gerektiren önemli bir diksiyon bileşenidir. Doğru teknikleri kullanarak bu süreci hızlandırabilirsiniz.\n\n<h3>Temel Kurallar ve Pratik Yöntemler:</h3>\n<ul>\n<li><strong>Nefes Kontrolü:</strong> Cümleleri kurarken göğsünüzden değil, diyaframınızdan nefes alarak sesinize derinlik ve güç katın. Hava akışını kontrol etmek heyecanınızı da azaltacaktır.</li>\n<li><strong>Ayna Karşısında Pratik:</strong> Dudak ve çene tembelliğini gidermek için her gün 10 dakika ayna karşısında abartılı dudak hareketleriyle yüksek sesli okuma çalışmaları yapın.</li>\n<li><strong>Ritim ve Hız:</strong> Çok hızlı konuşmak güven kaybına neden olur. Konuşma hızınızı bilinçli olarak düşürerek kelimelerin son harflerini yutmadan telaffuz edin.</li>\n</ul>\n\n<h3>Kısa Uygulama Egzersizi:</h3>\n<p>Dik bir şekilde ayakta durun. Burnunuzdan derin bir nefes alın ve nefesinizi \"Sssss\" veya \"Şşşş\" sesiyle yavaşça geri verin. Ardından aynı nefes desteğiyle \"Yöneticiler, Liderler ve CEO'lar İçin Hitabet Sanatı\" konusu üzerinde kendi kendinize 1 dakikalık kısa bir konuşma provası yapın.</p>\n\n<div style=\"margin:2rem 0;padding:1.5rem;background:#f0f9ff;border-radius:12px;border:1px solid #bae6fd;\">\n  <h4 style=\"margin-top:0;color:#0369a1;\">🎙️ İnteraktif Egzersizlere Başlayın</h4>\n  <p style=\"margin-bottom:1rem;color:#0c4a6e;\">Teoriyi pratiğe dökmek için platformumuzdaki interaktif tekerleme, metronom ve artikülasyon araçlarını kullanabilirsiniz. Ücretsiz stüdyomuzda sesinizi kaydedip analiz edin.</p>\n  <a href=\"/\" style=\"display:inline-block;background:#0ea5e9;color:white;padding:12px 24px;border-radius:8px;text-decoration:none;font-weight:bold;\">Tüm Diksiyon Egzersizlerine Git →</a>\n</div>",
    "faq": [
        {
                "question": "Yöneticiler, Liderler ve CEO'lar İçin Hitabet Sanatı için egzersizleri nerede bulabilirim?",
                "answer": "Ana sayfamızda yer alan Görsel Nefes, Tekerleme Arenası ve Ses Stüdyosu modüllerini kullanarak tamamen ücretsiz pratik yapabilirsiniz."
        },
        {
                "question": "Diksiyon eğitimi günde ne kadar pratik gerektirir?",
                "answer": "Kas hafızasının gelişmesi için her gün düzenli olarak 10-15 dakika sesli diksiyon pratiği yapmanız, haftada 1 kez 2 saat yapmanızdan çok daha etkilidir."
        }
]
},

  'diksiyon-tekerlemeleri-pdf': {
    "title": "Diksiyon Tekerlemeleri PDF İndir (Egzersiz Kitapçığı) - Diksiyon Rehberi",
    "desc": "Evde çalışmak için kategorize edilmiş, zorluk derecelerine göre ayrılmış yüzlerce diksiyon tekerlemesi PDF çalışma kitapçığı.",
    "h1": "Diksiyon Tekerlemeleri PDF ve Çalışma Dosyaları",
    "content": "Konuşma ve iletişim becerilerinizi geliştirmek, sosyal hayatta ve profesyonel kariyerinizde size büyük avantajlar sağlar. Diksiyon Tekerlemeleri PDF ve Çalışma Dosyaları konusu, doğru sesletim ve diyafram kontrolü gerektiren önemli bir diksiyon bileşenidir. Doğru teknikleri kullanarak bu süreci hızlandırabilirsiniz.\n\n<h3>Temel Kurallar ve Pratik Yöntemler:</h3>\n<ul>\n<li><strong>Nefes Kontrolü:</strong> Cümleleri kurarken göğsünüzden değil, diyaframınızdan nefes alarak sesinize derinlik ve güç katın. Hava akışını kontrol etmek heyecanınızı da azaltacaktır.</li>\n<li><strong>Ayna Karşısında Pratik:</strong> Dudak ve çene tembelliğini gidermek için her gün 10 dakika ayna karşısında abartılı dudak hareketleriyle yüksek sesli okuma çalışmaları yapın.</li>\n<li><strong>Ritim ve Hız:</strong> Çok hızlı konuşmak güven kaybına neden olur. Konuşma hızınızı bilinçli olarak düşürerek kelimelerin son harflerini yutmadan telaffuz edin.</li>\n</ul>\n\n<h3>Kısa Uygulama Egzersizi:</h3>\n<p>Dik bir şekilde ayakta durun. Burnunuzdan derin bir nefes alın ve nefesinizi \"Sssss\" veya \"Şşşş\" sesiyle yavaşça geri verin. Ardından aynı nefes desteğiyle \"Diksiyon Tekerlemeleri PDF ve Çalışma Dosyaları\" konusu üzerinde kendi kendinize 1 dakikalık kısa bir konuşma provası yapın.</p>\n\n<div style=\"margin:2rem 0;padding:1.5rem;background:#f0f9ff;border-radius:12px;border:1px solid #bae6fd;\">\n  <h4 style=\"margin-top:0;color:#0369a1;\">🎙️ İnteraktif Egzersizlere Başlayın</h4>\n  <p style=\"margin-bottom:1rem;color:#0c4a6e;\">Teoriyi pratiğe dökmek için platformumuzdaki interaktif tekerleme, metronom ve artikülasyon araçlarını kullanabilirsiniz. Ücretsiz stüdyomuzda sesinizi kaydedip analiz edin.</p>\n  <a href=\"/\" style=\"display:inline-block;background:#0ea5e9;color:white;padding:12px 24px;border-radius:8px;text-decoration:none;font-weight:bold;\">Tüm Diksiyon Egzersizlerine Git →</a>\n</div>",
    "faq": [
        {
                "question": "Diksiyon Tekerlemeleri PDF ve Çalışma Dosyaları için egzersizleri nerede bulabilirim?",
                "answer": "Ana sayfamızda yer alan Görsel Nefes, Tekerleme Arenası ve Ses Stüdyosu modüllerini kullanarak tamamen ücretsiz pratik yapabilirsiniz."
        },
        {
                "question": "Diksiyon eğitimi günde ne kadar pratik gerektirir?",
                "answer": "Kas hafızasının gelişmesi için her gün düzenli olarak 10-15 dakika sesli diksiyon pratiği yapmanız, haftada 1 kez 2 saat yapmanızdan çok daha etkilidir."
        }
]
},
  'diksiyon-kitap-onerileri': {
    "title": "En İyi Diksiyon ve Hitabet Kitap Önerileri - Diksiyon Rehberi",
    "desc": "Diksiyonunuzu geliştirmek, kelime dağarcığınızı zenginleştirmek ve hitabet sanatını öğrenmek için okunması gereken en iyi kitaplar.",
    "h1": "Diksiyon ve Hitabet İçin En İyi Kitap Önerileri",
    "content": "Konuşma ve iletişim becerilerinizi geliştirmek, sosyal hayatta ve profesyonel kariyerinizde size büyük avantajlar sağlar. Diksiyon ve Hitabet İçin En İyi Kitap Önerileri konusu, doğru sesletim ve diyafram kontrolü gerektiren önemli bir diksiyon bileşenidir. Doğru teknikleri kullanarak bu süreci hızlandırabilirsiniz.\n\n<h3>Temel Kurallar ve Pratik Yöntemler:</h3>\n<ul>\n<li><strong>Nefes Kontrolü:</strong> Cümleleri kurarken göğsünüzden değil, diyaframınızdan nefes alarak sesinize derinlik ve güç katın. Hava akışını kontrol etmek heyecanınızı da azaltacaktır.</li>\n<li><strong>Ayna Karşısında Pratik:</strong> Dudak ve çene tembelliğini gidermek için her gün 10 dakika ayna karşısında abartılı dudak hareketleriyle yüksek sesli okuma çalışmaları yapın.</li>\n<li><strong>Ritim ve Hız:</strong> Çok hızlı konuşmak güven kaybına neden olur. Konuşma hızınızı bilinçli olarak düşürerek kelimelerin son harflerini yutmadan telaffuz edin.</li>\n</ul>\n\n<h3>Kısa Uygulama Egzersizi:</h3>\n<p>Dik bir şekilde ayakta durun. Burnunuzdan derin bir nefes alın ve nefesinizi \"Sssss\" veya \"Şşşş\" sesiyle yavaşça geri verin. Ardından aynı nefes desteğiyle \"Diksiyon ve Hitabet İçin En İyi Kitap Önerileri\" konusu üzerinde kendi kendinize 1 dakikalık kısa bir konuşma provası yapın.</p>\n\n<div style=\"margin:2rem 0;padding:1.5rem;background:#f0f9ff;border-radius:12px;border:1px solid #bae6fd;\">\n  <h4 style=\"margin-top:0;color:#0369a1;\">🎙️ İnteraktif Egzersizlere Başlayın</h4>\n  <p style=\"margin-bottom:1rem;color:#0c4a6e;\">Teoriyi pratiğe dökmek için platformumuzdaki interaktif tekerleme, metronom ve artikülasyon araçlarını kullanabilirsiniz. Ücretsiz stüdyomuzda sesinizi kaydedip analiz edin.</p>\n  <a href=\"/\" style=\"display:inline-block;background:#0ea5e9;color:white;padding:12px 24px;border-radius:8px;text-decoration:none;font-weight:bold;\">Tüm Diksiyon Egzersizlerine Git →</a>\n</div>",
    "faq": [
        {
                "question": "Diksiyon ve Hitabet İçin En İyi Kitap Önerileri için egzersizleri nerede bulabilirim?",
                "answer": "Ana sayfamızda yer alan Görsel Nefes, Tekerleme Arenası ve Ses Stüdyosu modüllerini kullanarak tamamen ücretsiz pratik yapabilirsiniz."
        },
        {
                "question": "Diksiyon eğitimi günde ne kadar pratik gerektirir?",
                "answer": "Kas hafızasının gelişmesi için her gün düzenli olarak 10-15 dakika sesli diksiyon pratiği yapmanız, haftada 1 kez 2 saat yapmanızdan çok daha etkilidir."
        }
]
},

  'ses-ve-nefes-egitimi': {
    "title": "Ses ve Nefes Eğitimi: Diyafram Nefesi Nasıl Alınır? - Diksiyon Rehberi",
    "desc": "Doğru nefes alarak ses tellerini yormadan konuşma, diyafram nefesi teknikleri ve ses açma egzersizleri.",
    "h1": "Ses ve Nefes Eğitimi: Diyaframın Gücünü Kullanın",
    "content": "Konuşma ve iletişim becerilerinizi geliştirmek, sosyal hayatta ve profesyonel kariyerinizde size büyük avantajlar sağlar. Ses ve Nefes Eğitimi: Diyaframın Gücünü Kullanın konusu, doğru sesletim ve diyafram kontrolü gerektiren önemli bir diksiyon bileşenidir. Doğru teknikleri kullanarak bu süreci hızlandırabilirsiniz.\n\n<h3>Temel Kurallar ve Pratik Yöntemler:</h3>\n<ul>\n<li><strong>Nefes Kontrolü:</strong> Cümleleri kurarken göğsünüzden değil, diyaframınızdan nefes alarak sesinize derinlik ve güç katın. Hava akışını kontrol etmek heyecanınızı da azaltacaktır.</li>\n<li><strong>Ayna Karşısında Pratik:</strong> Dudak ve çene tembelliğini gidermek için her gün 10 dakika ayna karşısında abartılı dudak hareketleriyle yüksek sesli okuma çalışmaları yapın.</li>\n<li><strong>Ritim ve Hız:</strong> Çok hızlı konuşmak güven kaybına neden olur. Konuşma hızınızı bilinçli olarak düşürerek kelimelerin son harflerini yutmadan telaffuz edin.</li>\n</ul>\n\n<h3>Kısa Uygulama Egzersizi:</h3>\n<p>Dik bir şekilde ayakta durun. Burnunuzdan derin bir nefes alın ve nefesinizi \"Sssss\" veya \"Şşşş\" sesiyle yavaşça geri verin. Ardından aynı nefes desteğiyle \"Ses ve Nefes Eğitimi: Diyaframın Gücünü Kullanın\" konusu üzerinde kendi kendinize 1 dakikalık kısa bir konuşma provası yapın.</p>\n\n<div style=\"margin:2rem 0;padding:1.5rem;background:#f0f9ff;border-radius:12px;border:1px solid #bae6fd;\">\n  <h4 style=\"margin-top:0;color:#0369a1;\">🎙️ İnteraktif Egzersizlere Başlayın</h4>\n  <p style=\"margin-bottom:1rem;color:#0c4a6e;\">Teoriyi pratiğe dökmek için platformumuzdaki interaktif tekerleme, metronom ve artikülasyon araçlarını kullanabilirsiniz. Ücretsiz stüdyomuzda sesinizi kaydedip analiz edin.</p>\n  <a href=\"/\" style=\"display:inline-block;background:#0ea5e9;color:white;padding:12px 24px;border-radius:8px;text-decoration:none;font-weight:bold;\">Tüm Diksiyon Egzersizlerine Git →</a>\n</div>",
    "faq": [
        {
                "question": "Ses ve Nefes Eğitimi: Diyaframın Gücünü Kullanın için egzersizleri nerede bulabilirim?",
                "answer": "Ana sayfamızda yer alan Görsel Nefes, Tekerleme Arenası ve Ses Stüdyosu modüllerini kullanarak tamamen ücretsiz pratik yapabilirsiniz."
        },
        {
                "question": "Diksiyon eğitimi günde ne kadar pratik gerektirir?",
                "answer": "Kas hafızasının gelişmesi için her gün düzenli olarak 10-15 dakika sesli diksiyon pratiği yapmanız, haftada 1 kez 2 saat yapmanızdan çok daha etkilidir."
        }
]
},

  'diksiyon-kurallari': {
    "title": "Diksiyon Kuralları Nelerdir? Konuşmanın Altın Kuralları - Diksiyon Rehberi",
    "desc": "Türkçe diksiyon kuralları, ünlü daralması, ulama ve vurgu teknikleri ile kelimeleri doğru telaffuz etme rehberi.",
    "h1": "Türkçe Diksiyonun Altın Kuralları",
    "content": "Konuşma ve iletişim becerilerinizi geliştirmek, sosyal hayatta ve profesyonel kariyerinizde size büyük avantajlar sağlar. Türkçe Diksiyonun Altın Kuralları konusu, doğru sesletim ve diyafram kontrolü gerektiren önemli bir diksiyon bileşenidir. Doğru teknikleri kullanarak bu süreci hızlandırabilirsiniz.\n\n<h3>Temel Kurallar ve Pratik Yöntemler:</h3>\n<ul>\n<li><strong>Nefes Kontrolü:</strong> Cümleleri kurarken göğsünüzden değil, diyaframınızdan nefes alarak sesinize derinlik ve güç katın. Hava akışını kontrol etmek heyecanınızı da azaltacaktır.</li>\n<li><strong>Ayna Karşısında Pratik:</strong> Dudak ve çene tembelliğini gidermek için her gün 10 dakika ayna karşısında abartılı dudak hareketleriyle yüksek sesli okuma çalışmaları yapın.</li>\n<li><strong>Ritim ve Hız:</strong> Çok hızlı konuşmak güven kaybına neden olur. Konuşma hızınızı bilinçli olarak düşürerek kelimelerin son harflerini yutmadan telaffuz edin.</li>\n</ul>\n\n<h3>Kısa Uygulama Egzersizi:</h3>\n<p>Dik bir şekilde ayakta durun. Burnunuzdan derin bir nefes alın ve nefesinizi \"Sssss\" veya \"Şşşş\" sesiyle yavaşça geri verin. Ardından aynı nefes desteğiyle \"Türkçe Diksiyonun Altın Kuralları\" konusu üzerinde kendi kendinize 1 dakikalık kısa bir konuşma provası yapın.</p>\n\n<div style=\"margin:2rem 0;padding:1.5rem;background:#f0f9ff;border-radius:12px;border:1px solid #bae6fd;\">\n  <h4 style=\"margin-top:0;color:#0369a1;\">🎙️ İnteraktif Egzersizlere Başlayın</h4>\n  <p style=\"margin-bottom:1rem;color:#0c4a6e;\">Teoriyi pratiğe dökmek için platformumuzdaki interaktif tekerleme, metronom ve artikülasyon araçlarını kullanabilirsiniz. Ücretsiz stüdyomuzda sesinizi kaydedip analiz edin.</p>\n  <a href=\"/\" style=\"display:inline-block;background:#0ea5e9;color:white;padding:12px 24px;border-radius:8px;text-decoration:none;font-weight:bold;\">Tüm Diksiyon Egzersizlerine Git →</a>\n</div>",
    "faq": [
        {
                "question": "Türkçe Diksiyonun Altın Kuralları için egzersizleri nerede bulabilirim?",
                "answer": "Ana sayfamızda yer alan Görsel Nefes, Tekerleme Arenası ve Ses Stüdyosu modüllerini kullanarak tamamen ücretsiz pratik yapabilirsiniz."
        },
        {
                "question": "Diksiyon eğitimi günde ne kadar pratik gerektirir?",
                "answer": "Kas hafızasının gelişmesi için her gün düzenli olarak 10-15 dakika sesli diksiyon pratiği yapmanız, haftada 1 kez 2 saat yapmanızdan çok daha etkilidir."
        }
]
},

  'en-zor-diksiyon-tekerlemeleri': {
    "title": "Dünyanın En Zor Diksiyon Tekerlemeleri ile Pratik - Diksiyon Rehberi",
    "desc": "Dilinizi düğümleyecek, artikülasyonunuzu zirveye taşıyacak Türkçe'nin okunması en zor tekerlemeleri. Spiker tekerlemeleri.",
    "h1": "Gelişim İçin En Zor Diksiyon Tekerlemeleri",
    "content": "Konuşma ve iletişim becerilerinizi geliştirmek, sosyal hayatta ve profesyonel kariyerinizde size büyük avantajlar sağlar. Gelişim İçin En Zor Diksiyon Tekerlemeleri konusu, doğru sesletim ve diyafram kontrolü gerektiren önemli bir diksiyon bileşenidir. Doğru teknikleri kullanarak bu süreci hızlandırabilirsiniz.\n\n<h3>Temel Kurallar ve Pratik Yöntemler:</h3>\n<ul>\n<li><strong>Nefes Kontrolü:</strong> Cümleleri kurarken göğsünüzden değil, diyaframınızdan nefes alarak sesinize derinlik ve güç katın. Hava akışını kontrol etmek heyecanınızı da azaltacaktır.</li>\n<li><strong>Ayna Karşısında Pratik:</strong> Dudak ve çene tembelliğini gidermek için her gün 10 dakika ayna karşısında abartılı dudak hareketleriyle yüksek sesli okuma çalışmaları yapın.</li>\n<li><strong>Ritim ve Hız:</strong> Çok hızlı konuşmak güven kaybına neden olur. Konuşma hızınızı bilinçli olarak düşürerek kelimelerin son harflerini yutmadan telaffuz edin.</li>\n</ul>\n\n<h3>Kısa Uygulama Egzersizi:</h3>\n<p>Dik bir şekilde ayakta durun. Burnunuzdan derin bir nefes alın ve nefesinizi \"Sssss\" veya \"Şşşş\" sesiyle yavaşça geri verin. Ardından aynı nefes desteğiyle \"Gelişim İçin En Zor Diksiyon Tekerlemeleri\" konusu üzerinde kendi kendinize 1 dakikalık kısa bir konuşma provası yapın.</p>\n\n<div style=\"margin:2rem 0;padding:1.5rem;background:#f0f9ff;border-radius:12px;border:1px solid #bae6fd;\">\n  <h4 style=\"margin-top:0;color:#0369a1;\">🎙️ İnteraktif Egzersizlere Başlayın</h4>\n  <p style=\"margin-bottom:1rem;color:#0c4a6e;\">Teoriyi pratiğe dökmek için platformumuzdaki interaktif tekerleme, metronom ve artikülasyon araçlarını kullanabilirsiniz. Ücretsiz stüdyomuzda sesinizi kaydedip analiz edin.</p>\n  <a href=\"/\" style=\"display:inline-block;background:#0ea5e9;color:white;padding:12px 24px;border-radius:8px;text-decoration:none;font-weight:bold;\">Tüm Diksiyon Egzersizlerine Git →</a>\n</div>",
    "faq": [
        {
                "question": "Gelişim İçin En Zor Diksiyon Tekerlemeleri için egzersizleri nerede bulabilirim?",
                "answer": "Ana sayfamızda yer alan Görsel Nefes, Tekerleme Arenası ve Ses Stüdyosu modüllerini kullanarak tamamen ücretsiz pratik yapabilirsiniz."
        },
        {
                "question": "Diksiyon eğitimi günde ne kadar pratik gerektirir?",
                "answer": "Kas hafızasının gelişmesi için her gün düzenli olarak 10-15 dakika sesli diksiyon pratiği yapmanız, haftada 1 kez 2 saat yapmanızdan çok daha etkilidir."
        }
]
},
  'ozguvenli-konusma-teknikleri': {
    "title": "Özgüvenli Konuşma Teknikleri ve Beden Dili - Diksiyon Rehberi",
    "desc": "Ortamlarda dinlenmek, saygı görmek ve fikirlerinizi net bir şekilde ifade etmek için özgüvenli konuşma ve duruş stratejileri.",
    "h1": "Özgüvenli ve Otoriter Konuşma Stratejileri",
    "content": "Konuşma ve iletişim becerilerinizi geliştirmek, sosyal hayatta ve profesyonel kariyerinizde size büyük avantajlar sağlar. Özgüvenli ve Otoriter Konuşma Stratejileri konusu, doğru sesletim ve diyafram kontrolü gerektiren önemli bir diksiyon bileşenidir. Doğru teknikleri kullanarak bu süreci hızlandırabilirsiniz.\n\n<h3>Temel Kurallar ve Pratik Yöntemler:</h3>\n<ul>\n<li><strong>Nefes Kontrolü:</strong> Cümleleri kurarken göğsünüzden değil, diyaframınızdan nefes alarak sesinize derinlik ve güç katın. Hava akışını kontrol etmek heyecanınızı da azaltacaktır.</li>\n<li><strong>Ayna Karşısında Pratik:</strong> Dudak ve çene tembelliğini gidermek için her gün 10 dakika ayna karşısında abartılı dudak hareketleriyle yüksek sesli okuma çalışmaları yapın.</li>\n<li><strong>Ritim ve Hız:</strong> Çok hızlı konuşmak güven kaybına neden olur. Konuşma hızınızı bilinçli olarak düşürerek kelimelerin son harflerini yutmadan telaffuz edin.</li>\n</ul>\n\n<h3>Kısa Uygulama Egzersizi:</h3>\n<p>Dik bir şekilde ayakta durun. Burnunuzdan derin bir nefes alın ve nefesinizi \"Sssss\" veya \"Şşşş\" sesiyle yavaşça geri verin. Ardından aynı nefes desteğiyle \"Özgüvenli ve Otoriter Konuşma Stratejileri\" konusu üzerinde kendi kendinize 1 dakikalık kısa bir konuşma provası yapın.</p>\n\n<div style=\"margin:2rem 0;padding:1.5rem;background:#f0f9ff;border-radius:12px;border:1px solid #bae6fd;\">\n  <h4 style=\"margin-top:0;color:#0369a1;\">🎙️ İnteraktif Egzersizlere Başlayın</h4>\n  <p style=\"margin-bottom:1rem;color:#0c4a6e;\">Teoriyi pratiğe dökmek için platformumuzdaki interaktif tekerleme, metronom ve artikülasyon araçlarını kullanabilirsiniz. Ücretsiz stüdyomuzda sesinizi kaydedip analiz edin.</p>\n  <a href=\"/\" style=\"display:inline-block;background:#0ea5e9;color:white;padding:12px 24px;border-radius:8px;text-decoration:none;font-weight:bold;\">Tüm Diksiyon Egzersizlerine Git →</a>\n</div>",
    "faq": [
        {
                "question": "Özgüvenli ve Otoriter Konuşma Stratejileri için egzersizleri nerede bulabilirim?",
                "answer": "Ana sayfamızda yer alan Görsel Nefes, Tekerleme Arenası ve Ses Stüdyosu modüllerini kullanarak tamamen ücretsiz pratik yapabilirsiniz."
        },
        {
                "question": "Diksiyon eğitimi günde ne kadar pratik gerektirir?",
                "answer": "Kas hafızasının gelişmesi için her gün düzenli olarak 10-15 dakika sesli diksiyon pratiği yapmanız, haftada 1 kez 2 saat yapmanızdan çok daha etkilidir."
        }
]
},
  'topluluk-onunde-konusma-korkusu': {
    "title": "Topluluk Önünde Konuşma Korkusu (Glossofobi) Nasıl Yenilir? - Diksiyon Rehberi",
    "desc": "Sahne korkusunu yenmek, sunum heyecanını kontrol altına almak ve kalabalıklara özgüvenle hitap etmek için psikolojik ve fiziksel taktikler.",
    "h1": "Topluluk Önünde Konuşma Korkusu (Glossofobi) ve Çözüm Yolları",
    "content": "İnsanların birçoğu için topluluk önünde konuşmak, yükseklik korkusundan bile daha streslidir. Bu korkuya literatürde \"Glossofobi\" denir. Kalp atışının hızlanması, ellerin titremesi, yüzün kızarması ve sesin kısılması tamamen otonom sinir sisteminin \"savaş veya kaç\" tepkisidir.\\n\\n<h3>Sahne Korkusunu Yenmek İçin Pratik Adımlar:</h3>\\n<ul>\\n<li><strong>Nefesle Sistemi Kandırın:</strong> Bedeninize \"tehlikede değiliz, güvendeyiz\" mesajını vermenin tek yolu nefesi yavaşlatmaktır. Sahneye çıkmadan 5 dakika önce \"Kutu Nefesi\" yapın: 4 saniye al, 4 saniye tut, 4 saniye ver, 4 saniye tut. Bu kalp ritminizi mucizevi bir şekilde normale çevirir.</li>\\n<li><strong>Dinleyiciyi Düşman Olarak Görmeyin:</strong> İzleyiciler oraya sizin hata yapmanızı izlemek için değil, sizden yeni bir şeyler öğrenmek için geldiler. Sizi destekliyorlar, yargılamıyorlar.</li>\\n<li><strong>Mükemmel Olmaya Çalışmayın:</strong> Hatasız konuşmaya çalışmak en büyük strestir. Kelimeleri karıştırırsanız, gülümseyin, kendinizi düzeltin ve devam edin. Doğallık, robotik bir ezberden çok daha fazla takdir görür.</li>\\n<li><strong>Göz Teması Kurun:</strong> Tüm salona bakmak yerine, kalabalık içinden size dostça bakan (gülümseyen veya başını sallayan) 3-4 kişi seçin ve sadece onlarla sohbet ediyormuş gibi konuşun.</li>\\n</ul>\\n\\n<div style=\"margin:2rem 0;padding:1.5rem;background:#f5f3ff;border-radius:12px;border:1px solid #ede9fe;\">\\n  <h4 style=\"margin-top:0;color:#6d28d9;\">🎙️ Evde Ayna Karşısında Pratik</h4>\\n  <p style=\"margin-bottom:1rem;color:#4c1d95;\">Topluluk karşısında hissedeceğiniz rahatlık, evdeki pratiğinizin kalitesiyle doğru orantılıdır. Ana sayfamızdaki \"Kayıt Stüdyosu\" ile konuşmanızı defalarca kaydedip analiz edin.</p>\\n  <a href=\"/\" style=\"display:inline-block;background:#8b5cf6;color:white;padding:12px 24px;border-radius:8px;text-decoration:none;font-weight:bold;\">Ses Kayıt Stüdyosuna Git →</a>\\n</div>",
    "faq": [
        {
            "question": "Sunum yaparken ellerimi nereye koyacağımı bilemiyorum.",
            "answer": "Ellerinizi cebinize sokmak (saygısızlık/gizleme), arkanızda bağlamak (otoriter/katı) veya göğsünüzde çaprazlamak (savunmacı) yerine, göbek deliği hizanızda açık bir şekilde serbest bırakın. Avuç içlerinizin hafifçe yukarı bakması güven hissi verir."
        }
    ]
},

  'guzel-konusma-sanati': {
    "title": "Güzel Konuşma Sanatı: Diksiyon, Beden Dili ve Nezaket - Diksiyon Rehberi",
    "desc": "Sosyal hayatta ve iş dünyasında güzel konuşma sanatının (Retorik) kuralları. Zarafetle, akıcı ve etkileyici konuşma sırları.",
    "h1": "Güzel Konuşma Sanatı ve Retorik Kuralları",
    "content": "Konuşma ve iletişim becerilerinizi geliştirmek, sosyal hayatta ve profesyonel kariyerinizde size büyük avantajlar sağlar. Güzel Konuşma Sanatı ve Retorik Kuralları konusu, doğru sesletim ve diyafram kontrolü gerektiren önemli bir diksiyon bileşenidir. Doğru teknikleri kullanarak bu süreci hızlandırabilirsiniz.\n\n<h3>Temel Kurallar ve Pratik Yöntemler:</h3>\n<ul>\n<li><strong>Nefes Kontrolü:</strong> Cümleleri kurarken göğsünüzden değil, diyaframınızdan nefes alarak sesinize derinlik ve güç katın. Hava akışını kontrol etmek heyecanınızı da azaltacaktır.</li>\n<li><strong>Ayna Karşısında Pratik:</strong> Dudak ve çene tembelliğini gidermek için her gün 10 dakika ayna karşısında abartılı dudak hareketleriyle yüksek sesli okuma çalışmaları yapın.</li>\n<li><strong>Ritim ve Hız:</strong> Çok hızlı konuşmak güven kaybına neden olur. Konuşma hızınızı bilinçli olarak düşürerek kelimelerin son harflerini yutmadan telaffuz edin.</li>\n</ul>\n\n<h3>Kısa Uygulama Egzersizi:</h3>\n<p>Dik bir şekilde ayakta durun. Burnunuzdan derin bir nefes alın ve nefesinizi \"Sssss\" veya \"Şşşş\" sesiyle yavaşça geri verin. Ardından aynı nefes desteğiyle \"Güzel Konuşma Sanatı ve Retorik Kuralları\" konusu üzerinde kendi kendinize 1 dakikalık kısa bir konuşma provası yapın.</p>\n\n<div style=\"margin:2rem 0;padding:1.5rem;background:#f0f9ff;border-radius:12px;border:1px solid #bae6fd;\">\n  <h4 style=\"margin-top:0;color:#0369a1;\">🎙️ İnteraktif Egzersizlere Başlayın</h4>\n  <p style=\"margin-bottom:1rem;color:#0c4a6e;\">Teoriyi pratiğe dökmek için platformumuzdaki interaktif tekerleme, metronom ve artikülasyon araçlarını kullanabilirsiniz. Ücretsiz stüdyomuzda sesinizi kaydedip analiz edin.</p>\n  <a href=\"/\" style=\"display:inline-block;background:#0ea5e9;color:white;padding:12px 24px;border-radius:8px;text-decoration:none;font-weight:bold;\">Tüm Diksiyon Egzersizlerine Git →</a>\n</div>",
    "faq": [
        {
                "question": "Güzel Konuşma Sanatı ve Retorik Kuralları için egzersizleri nerede bulabilirim?",
                "answer": "Ana sayfamızda yer alan Görsel Nefes, Tekerleme Arenası ve Ses Stüdyosu modüllerini kullanarak tamamen ücretsiz pratik yapabilirsiniz."
        },
        {
                "question": "Diksiyon eğitimi günde ne kadar pratik gerektirir?",
                "answer": "Kas hafızasının gelişmesi için her gün düzenli olarak 10-15 dakika sesli diksiyon pratiği yapmanız, haftada 1 kez 2 saat yapmanızdan çok daha etkilidir."
        }
]
},
  'ses-inceltme-egzersizleri': {
    "title": "Ses İnceltme (Tizleştirme) ve Kafa Sesi Çalışmaları - Diksiyon Rehberi",
    "desc": "Ses tonunu inceltmek, kafa ve maske rezonansını kullanarak daha parlak ve tiz bir tını elde etmek için diksiyon egzersizleri.",
    "h1": "Ses İnceltme ve Maske Sesi (Rezonans) Egzersizleri",
    "content": "Konuşma ve iletişim becerilerinizi geliştirmek, sosyal hayatta ve profesyonel kariyerinizde size büyük avantajlar sağlar. Ses İnceltme ve Maske Sesi (Rezonans) Egzersizleri konusu, doğru sesletim ve diyafram kontrolü gerektiren önemli bir diksiyon bileşenidir. Doğru teknikleri kullanarak bu süreci hızlandırabilirsiniz.\n\n<h3>Temel Kurallar ve Pratik Yöntemler:</h3>\n<ul>\n<li><strong>Nefes Kontrolü:</strong> Cümleleri kurarken göğsünüzden değil, diyaframınızdan nefes alarak sesinize derinlik ve güç katın. Hava akışını kontrol etmek heyecanınızı da azaltacaktır.</li>\n<li><strong>Ayna Karşısında Pratik:</strong> Dudak ve çene tembelliğini gidermek için her gün 10 dakika ayna karşısında abartılı dudak hareketleriyle yüksek sesli okuma çalışmaları yapın.</li>\n<li><strong>Ritim ve Hız:</strong> Çok hızlı konuşmak güven kaybına neden olur. Konuşma hızınızı bilinçli olarak düşürerek kelimelerin son harflerini yutmadan telaffuz edin.</li>\n</ul>\n\n<h3>Kısa Uygulama Egzersizi:</h3>\n<p>Dik bir şekilde ayakta durun. Burnunuzdan derin bir nefes alın ve nefesinizi \"Sssss\" veya \"Şşşş\" sesiyle yavaşça geri verin. Ardından aynı nefes desteğiyle \"Ses İnceltme ve Maske Sesi (Rezonans) Egzersizleri\" konusu üzerinde kendi kendinize 1 dakikalık kısa bir konuşma provası yapın.</p>\n\n<div style=\"margin:2rem 0;padding:1.5rem;background:#f0f9ff;border-radius:12px;border:1px solid #bae6fd;\">\n  <h4 style=\"margin-top:0;color:#0369a1;\">🎙️ İnteraktif Egzersizlere Başlayın</h4>\n  <p style=\"margin-bottom:1rem;color:#0c4a6e;\">Teoriyi pratiğe dökmek için platformumuzdaki interaktif tekerleme, metronom ve artikülasyon araçlarını kullanabilirsiniz. Ücretsiz stüdyomuzda sesinizi kaydedip analiz edin.</p>\n  <a href=\"/\" style=\"display:inline-block;background:#0ea5e9;color:white;padding:12px 24px;border-radius:8px;text-decoration:none;font-weight:bold;\">Tüm Diksiyon Egzersizlerine Git →</a>\n</div>",
    "faq": [
        {
                "question": "Ses İnceltme ve Maske Sesi (Rezonans) Egzersizleri için egzersizleri nerede bulabilirim?",
                "answer": "Ana sayfamızda yer alan Görsel Nefes, Tekerleme Arenası ve Ses Stüdyosu modüllerini kullanarak tamamen ücretsiz pratik yapabilirsiniz."
        },
        {
                "question": "Diksiyon eğitimi günde ne kadar pratik gerektirir?",
                "answer": "Kas hafızasının gelişmesi için her gün düzenli olarak 10-15 dakika sesli diksiyon pratiği yapmanız, haftada 1 kez 2 saat yapmanızdan çok daha etkilidir."
        }
]
},
  'ses-kalinlastirma-egzersizleri': {
    "title": "Ses Kalınlaştırma (Pesleştirme) Egzersizleri - Diksiyon Rehberi",
    "desc": "Tiz ve ince seslerden kurtulmak, sesi daha kalın, tok ve otoriter bir pes tona çekmek için diyafram ve rezonans çalışmaları.",
    "h1": "Ses Kalınlaştırma ve Toklaştırma (Pes Ses) Egzersizleri",
    "content": "İnce (tiz) bir sese sahip olmak genellikle ses tellerinin fiziksel yapısından değil, sesin rezonans (yankı) boşluklarını yanlış kullanmaktan ve göğüs nefesi almaktan kaynaklanır. Sesinizi boğazınızda sıkıştırırsanız ince çıkar; göğüs kafesinizde ve maskenizde (yüz kemiklerinde) yankılandırırsanız çok daha kalın (pes) ve tok çıkar.\n\n<h3>Sesi Kalınlaştırmak İçin 3 Etkili Yöntem:</h3>\n<ul>\n<li><strong>Diyafram Desteği (Temel Şart):</strong> Kalın bir sesin yakıtı güçlü bir hava akımıdır. Omuzları kaldırarak göğüsten alınan sığ nefes, sesi boğaza hapseder. Derin karın nefesi alın, konuşurken havanın göğüs kafesinizden yukarı doğru geniş bir borudan çıkıyormuş gibi hissetmesini sağlayın.</li>\n<li><strong>Göğüs Rezonansı Egzersizi:</strong> Elinizi göğsünüzün ortasına (iman tahtası) koyun. Derin bir nefes alıp, çok düşük bir perdeyle (kalın) uzun bir \"Haaaaaaa\" veya \"Mmmmmm\" sesi çıkarın. Göğüs kemiğinizin titrediğini hissetmelisiniz. Eğer titremiyorsa sesi boğazınızda sıkıştırıyorsunuz demektir.</li>\n<li><strong>Çene ve Gırtlak Gevşetme:</strong> Esneme hareketi yapın. Esnediğinizde boğazınızın (gırtlağınızın) nasıl aşağı indiğini ve açıldığını fark edin. Konuşurken gırtlağınızı esneme pozisyonuna yakın, açık ve rahat tutmaya çalışırsanız sesiniz doğal olarak kalınlaşacaktır.</li>\n</ul>\n\n<h3>Kısa Uygulama: \"Göğüsten Gelen Vurmalı Sesler\"</h3>\n<p>Her sabah 5 dakika boyunca şu heceleri göğsünüzde titreşim hissederek pes perdeden okuyun: BOM, BUM, DON, DÜM, GONG. Bu heceleri okurken çenenizi aşağı doğru iyice gevşetin.</p>\n\n<div style=\"margin:2rem 0;padding:1.5rem;background:#f8fafc;border-radius:12px;border:1px solid #e2e8f0;\">\n  <h4 style=\"margin-top:0;color:#334155;\">🎙️ Ses Tonunuzu Stüdyoda Analiz Edin</h4>\n  <p style=\"margin-bottom:1rem;color:#475569;\">Uygulamalarımız üzerinden ses kaydınızı alarak, her geçen gün sesinizin daha tok ve pes bir yapıya oturup oturmadığını dinleyerek kontrol edebilirsiniz.</p>\n  <a href=\"/\" style=\"display:inline-block;background:#3b82f6;color:white;padding:12px 24px;border-radius:8px;text-decoration:none;font-weight:bold;\">Ses Stüdyosuna Git →</a>\n</div>",
    "faq": [
        {
                "question": "Sesim yaş ilerledikçe kendi kendine kalınlaşır mı?",
                "answer": "Evet, özellikle ergenlik döneminde ses telleri kalınlaşır. Ancak yetişkinlikte sesinizin ince çıkmasının nedeni yanlış kullanım alışkanlıklarıdır. Rezonans egzersizleriyle sesinizi kalıcı olarak daha tok bir perdede konumlandırabilirsiniz."
        }
]
},
  'avukatlar-icin-hitabet': {
    "title": "Avukatlar İçin Hitabet ve Adliye Diksiyonu - Diksiyon Rehberi",
    "desc": "Hukukçular ve avukatlar için duruşmalarda etkili konuşma, hakimi ve jüriyi ikna etme, güçlü argüman sunma teknikleri.",
    "h1": "Avukatlar ve Hukukçular İçin Etkili Hitabet",
    "content": "Konuşma ve iletişim becerilerinizi geliştirmek, sosyal hayatta ve profesyonel kariyerinizde size büyük avantajlar sağlar. Avukatlar ve Hukukçular İçin Etkili Hitabet konusu, doğru sesletim ve diyafram kontrolü gerektiren önemli bir diksiyon bileşenidir. Doğru teknikleri kullanarak bu süreci hızlandırabilirsiniz.\n\n<h3>Temel Kurallar ve Pratik Yöntemler:</h3>\n<ul>\n<li><strong>Nefes Kontrolü:</strong> Cümleleri kurarken göğsünüzden değil, diyaframınızdan nefes alarak sesinize derinlik ve güç katın. Hava akışını kontrol etmek heyecanınızı da azaltacaktır.</li>\n<li><strong>Ayna Karşısında Pratik:</strong> Dudak ve çene tembelliğini gidermek için her gün 10 dakika ayna karşısında abartılı dudak hareketleriyle yüksek sesli okuma çalışmaları yapın.</li>\n<li><strong>Ritim ve Hız:</strong> Çok hızlı konuşmak güven kaybına neden olur. Konuşma hızınızı bilinçli olarak düşürerek kelimelerin son harflerini yutmadan telaffuz edin.</li>\n</ul>\n\n<h3>Kısa Uygulama Egzersizi:</h3>\n<p>Dik bir şekilde ayakta durun. Burnunuzdan derin bir nefes alın ve nefesinizi \"Sssss\" veya \"Şşşş\" sesiyle yavaşça geri verin. Ardından aynı nefes desteğiyle \"Avukatlar ve Hukukçular İçin Etkili Hitabet\" konusu üzerinde kendi kendinize 1 dakikalık kısa bir konuşma provası yapın.</p>\n\n<div style=\"margin:2rem 0;padding:1.5rem;background:#f0f9ff;border-radius:12px;border:1px solid #bae6fd;\">\n  <h4 style=\"margin-top:0;color:#0369a1;\">🎙️ İnteraktif Egzersizlere Başlayın</h4>\n  <p style=\"margin-bottom:1rem;color:#0c4a6e;\">Teoriyi pratiğe dökmek için platformumuzdaki interaktif tekerleme, metronom ve artikülasyon araçlarını kullanabilirsiniz. Ücretsiz stüdyomuzda sesinizi kaydedip analiz edin.</p>\n  <a href=\"/\" style=\"display:inline-block;background:#0ea5e9;color:white;padding:12px 24px;border-radius:8px;text-decoration:none;font-weight:bold;\">Tüm Diksiyon Egzersizlerine Git →</a>\n</div>",
    "faq": [
        {
                "question": "Avukatlar ve Hukukçular İçin Etkili Hitabet için egzersizleri nerede bulabilirim?",
                "answer": "Ana sayfamızda yer alan Görsel Nefes, Tekerleme Arenası ve Ses Stüdyosu modüllerini kullanarak tamamen ücretsiz pratik yapabilirsiniz."
        },
        {
                "question": "Diksiyon eğitimi günde ne kadar pratik gerektirir?",
                "answer": "Kas hafızasının gelişmesi için her gün düzenli olarak 10-15 dakika sesli diksiyon pratiği yapmanız, haftada 1 kez 2 saat yapmanızdan çok daha etkilidir."
        }
]
},
  'cagri-merkezi-diksiyonu': {
    "title": "Çağrı Merkezi Çalışanları İçin Diksiyon ve Telefonda İletişim - Diksiyon Rehberi",
    "desc": "Müşteri temsilcileri için telefonda etkili iletişim, gülümseyen ses tonu yaratma ve güven veren diksiyon eğitimleri.",
    "h1": "Çağrı Merkezi (Call Center) Diksiyon ve İletişim Teknikleri",
    "content": "Konuşma ve iletişim becerilerinizi geliştirmek, sosyal hayatta ve profesyonel kariyerinizde size büyük avantajlar sağlar. Çağrı Merkezi (Call Center) Diksiyon ve İletişim Teknikleri konusu, doğru sesletim ve diyafram kontrolü gerektiren önemli bir diksiyon bileşenidir. Doğru teknikleri kullanarak bu süreci hızlandırabilirsiniz.\n\n<h3>Temel Kurallar ve Pratik Yöntemler:</h3>\n<ul>\n<li><strong>Nefes Kontrolü:</strong> Cümleleri kurarken göğsünüzden değil, diyaframınızdan nefes alarak sesinize derinlik ve güç katın. Hava akışını kontrol etmek heyecanınızı da azaltacaktır.</li>\n<li><strong>Ayna Karşısında Pratik:</strong> Dudak ve çene tembelliğini gidermek için her gün 10 dakika ayna karşısında abartılı dudak hareketleriyle yüksek sesli okuma çalışmaları yapın.</li>\n<li><strong>Ritim ve Hız:</strong> Çok hızlı konuşmak güven kaybına neden olur. Konuşma hızınızı bilinçli olarak düşürerek kelimelerin son harflerini yutmadan telaffuz edin.</li>\n</ul>\n\n<h3>Kısa Uygulama Egzersizi:</h3>\n<p>Dik bir şekilde ayakta durun. Burnunuzdan derin bir nefes alın ve nefesinizi \"Sssss\" veya \"Şşşş\" sesiyle yavaşça geri verin. Ardından aynı nefes desteğiyle \"Çağrı Merkezi (Call Center) Diksiyon ve İletişim Teknikleri\" konusu üzerinde kendi kendinize 1 dakikalık kısa bir konuşma provası yapın.</p>\n\n<div style=\"margin:2rem 0;padding:1.5rem;background:#f0f9ff;border-radius:12px;border:1px solid #bae6fd;\">\n  <h4 style=\"margin-top:0;color:#0369a1;\">🎙️ İnteraktif Egzersizlere Başlayın</h4>\n  <p style=\"margin-bottom:1rem;color:#0c4a6e;\">Teoriyi pratiğe dökmek için platformumuzdaki interaktif tekerleme, metronom ve artikülasyon araçlarını kullanabilirsiniz. Ücretsiz stüdyomuzda sesinizi kaydedip analiz edin.</p>\n  <a href=\"/\" style=\"display:inline-block;background:#0ea5e9;color:white;padding:12px 24px;border-radius:8px;text-decoration:none;font-weight:bold;\">Tüm Diksiyon Egzersizlerine Git →</a>\n</div>",
    "faq": [
        {
                "question": "Çağrı Merkezi (Call Center) Diksiyon ve İletişim Teknikleri için egzersizleri nerede bulabilirim?",
                "answer": "Ana sayfamızda yer alan Görsel Nefes, Tekerleme Arenası ve Ses Stüdyosu modüllerini kullanarak tamamen ücretsiz pratik yapabilirsiniz."
        },
        {
                "question": "Diksiyon eğitimi günde ne kadar pratik gerektirir?",
                "answer": "Kas hafızasının gelişmesi için her gün düzenli olarak 10-15 dakika sesli diksiyon pratiği yapmanız, haftada 1 kez 2 saat yapmanızdan çok daha etkilidir."
        }
]
},
  'ogretmenler-icin-diksiyon': {
    "title": "Öğretmenler İçin Diksiyon ve Ses Koruma Teknikleri - Diksiyon Rehberi",
    "desc": "Öğretmenler için sınıfta otorite kurma, sesi yormadan yüksek sesle konuşma ve ses nodülünden korunma yöntemleri.",
    "h1": "Öğretmenler İçin Ses Kullanımı ve Diksiyon",
    "content": "Konuşma ve iletişim becerilerinizi geliştirmek, sosyal hayatta ve profesyonel kariyerinizde size büyük avantajlar sağlar. Öğretmenler İçin Ses Kullanımı ve Diksiyon konusu, doğru sesletim ve diyafram kontrolü gerektiren önemli bir diksiyon bileşenidir. Doğru teknikleri kullanarak bu süreci hızlandırabilirsiniz.\n\n<h3>Temel Kurallar ve Pratik Yöntemler:</h3>\n<ul>\n<li><strong>Nefes Kontrolü:</strong> Cümleleri kurarken göğsünüzden değil, diyaframınızdan nefes alarak sesinize derinlik ve güç katın. Hava akışını kontrol etmek heyecanınızı da azaltacaktır.</li>\n<li><strong>Ayna Karşısında Pratik:</strong> Dudak ve çene tembelliğini gidermek için her gün 10 dakika ayna karşısında abartılı dudak hareketleriyle yüksek sesli okuma çalışmaları yapın.</li>\n<li><strong>Ritim ve Hız:</strong> Çok hızlı konuşmak güven kaybına neden olur. Konuşma hızınızı bilinçli olarak düşürerek kelimelerin son harflerini yutmadan telaffuz edin.</li>\n</ul>\n\n<h3>Kısa Uygulama Egzersizi:</h3>\n<p>Dik bir şekilde ayakta durun. Burnunuzdan derin bir nefes alın ve nefesinizi \"Sssss\" veya \"Şşşş\" sesiyle yavaşça geri verin. Ardından aynı nefes desteğiyle \"Öğretmenler İçin Ses Kullanımı ve Diksiyon\" konusu üzerinde kendi kendinize 1 dakikalık kısa bir konuşma provası yapın.</p>\n\n<div style=\"margin:2rem 0;padding:1.5rem;background:#f0f9ff;border-radius:12px;border:1px solid #bae6fd;\">\n  <h4 style=\"margin-top:0;color:#0369a1;\">🎙️ İnteraktif Egzersizlere Başlayın</h4>\n  <p style=\"margin-bottom:1rem;color:#0c4a6e;\">Teoriyi pratiğe dökmek için platformumuzdaki interaktif tekerleme, metronom ve artikülasyon araçlarını kullanabilirsiniz. Ücretsiz stüdyomuzda sesinizi kaydedip analiz edin.</p>\n  <a href=\"/\" style=\"display:inline-block;background:#0ea5e9;color:white;padding:12px 24px;border-radius:8px;text-decoration:none;font-weight:bold;\">Tüm Diksiyon Egzersizlerine Git →</a>\n</div>",
    "faq": [
        {
                "question": "Öğretmenler İçin Ses Kullanımı ve Diksiyon için egzersizleri nerede bulabilirim?",
                "answer": "Ana sayfamızda yer alan Görsel Nefes, Tekerleme Arenası ve Ses Stüdyosu modüllerini kullanarak tamamen ücretsiz pratik yapabilirsiniz."
        },
        {
                "question": "Diksiyon eğitimi günde ne kadar pratik gerektirir?",
                "answer": "Kas hafızasının gelişmesi için her gün düzenli olarak 10-15 dakika sesli diksiyon pratiği yapmanız, haftada 1 kez 2 saat yapmanızdan çok daha etkilidir."
        }
]
},
  'online-diksiyon-kursu': {
    "title": "Ücretsiz Online Diksiyon Kursu ve Eğitim Programı - Diksiyon Rehberi",
    "desc": "Evinizin rahatlığında, uzmanlardan ücretsiz online diksiyon kursu. Uygulamalı video eğitimleri, tekerlemeler ve testlerle sesinizi geliştirin.",
    "h1": "Online Diksiyon Kursu ve Kapsamlı Eğitim Programı",
    "content": "Konuşma ve iletişim becerilerinizi geliştirmek, sosyal hayatta ve profesyonel kariyerinizde size büyük avantajlar sağlar. Online Diksiyon Kursu ve Kapsamlı Eğitim Programı konusu, doğru sesletim ve diyafram kontrolü gerektiren önemli bir diksiyon bileşenidir. Doğru teknikleri kullanarak bu süreci hızlandırabilirsiniz.\n\n<h3>Temel Kurallar ve Pratik Yöntemler:</h3>\n<ul>\n<li><strong>Nefes Kontrolü:</strong> Cümleleri kurarken göğsünüzden değil, diyaframınızdan nefes alarak sesinize derinlik ve güç katın. Hava akışını kontrol etmek heyecanınızı da azaltacaktır.</li>\n<li><strong>Ayna Karşısında Pratik:</strong> Dudak ve çene tembelliğini gidermek için her gün 10 dakika ayna karşısında abartılı dudak hareketleriyle yüksek sesli okuma çalışmaları yapın.</li>\n<li><strong>Ritim ve Hız:</strong> Çok hızlı konuşmak güven kaybına neden olur. Konuşma hızınızı bilinçli olarak düşürerek kelimelerin son harflerini yutmadan telaffuz edin.</li>\n</ul>\n\n<h3>Kısa Uygulama Egzersizi:</h3>\n<p>Dik bir şekilde ayakta durun. Burnunuzdan derin bir nefes alın ve nefesinizi \"Sssss\" veya \"Şşşş\" sesiyle yavaşça geri verin. Ardından aynı nefes desteğiyle \"Online Diksiyon Kursu ve Kapsamlı Eğitim Programı\" konusu üzerinde kendi kendinize 1 dakikalık kısa bir konuşma provası yapın.</p>\n\n<div style=\"margin:2rem 0;padding:1.5rem;background:#f0f9ff;border-radius:12px;border:1px solid #bae6fd;\">\n  <h4 style=\"margin-top:0;color:#0369a1;\">🎙️ İnteraktif Egzersizlere Başlayın</h4>\n  <p style=\"margin-bottom:1rem;color:#0c4a6e;\">Teoriyi pratiğe dökmek için platformumuzdaki interaktif tekerleme, metronom ve artikülasyon araçlarını kullanabilirsiniz. Ücretsiz stüdyomuzda sesinizi kaydedip analiz edin.</p>\n  <a href=\"/\" style=\"display:inline-block;background:#0ea5e9;color:white;padding:12px 24px;border-radius:8px;text-decoration:none;font-weight:bold;\">Tüm Diksiyon Egzersizlerine Git →</a>\n</div>",
    "faq": [
        {
                "question": "Online Diksiyon Kursu ve Kapsamlı Eğitim Programı için egzersizleri nerede bulabilirim?",
                "answer": "Ana sayfamızda yer alan Görsel Nefes, Tekerleme Arenası ve Ses Stüdyosu modüllerini kullanarak tamamen ücretsiz pratik yapabilirsiniz."
        },
        {
                "question": "Diksiyon eğitimi günde ne kadar pratik gerektirir?",
                "answer": "Kas hafızasının gelişmesi için her gün düzenli olarak 10-15 dakika sesli diksiyon pratiği yapmanız, haftada 1 kez 2 saat yapmanızdan çok daha etkilidir."
        }
]
},
  'artikulasyon-bozuklugu': {
    "title": "Artikülasyon (Boğumlanma) Bozukluğu Egzersizleri - Diksiyon Rehberi",
    "desc": "Harflerin ve kelimelerin yanlış telaffuz edilmesini önleyen, konuşma netliğini artıran artikülasyon ve boğumlanma egzersizleri.",
    "h1": "Artikülasyon ve Boğumlanma Bozukluğu Egzersizleri",
    "content": "Konuşma ve iletişim becerilerinizi geliştirmek, sosyal hayatta ve profesyonel kariyerinizde size büyük avantajlar sağlar. Artikülasyon ve Boğumlanma Bozukluğu Egzersizleri konusu, doğru sesletim ve diyafram kontrolü gerektiren önemli bir diksiyon bileşenidir. Doğru teknikleri kullanarak bu süreci hızlandırabilirsiniz.\n\n<h3>Temel Kurallar ve Pratik Yöntemler:</h3>\n<ul>\n<li><strong>Nefes Kontrolü:</strong> Cümleleri kurarken göğsünüzden değil, diyaframınızdan nefes alarak sesinize derinlik ve güç katın. Hava akışını kontrol etmek heyecanınızı da azaltacaktır.</li>\n<li><strong>Ayna Karşısında Pratik:</strong> Dudak ve çene tembelliğini gidermek için her gün 10 dakika ayna karşısında abartılı dudak hareketleriyle yüksek sesli okuma çalışmaları yapın.</li>\n<li><strong>Ritim ve Hız:</strong> Çok hızlı konuşmak güven kaybına neden olur. Konuşma hızınızı bilinçli olarak düşürerek kelimelerin son harflerini yutmadan telaffuz edin.</li>\n</ul>\n\n<h3>Kısa Uygulama Egzersizi:</h3>\n<p>Dik bir şekilde ayakta durun. Burnunuzdan derin bir nefes alın ve nefesinizi \"Sssss\" veya \"Şşşş\" sesiyle yavaşça geri verin. Ardından aynı nefes desteğiyle \"Artikülasyon ve Boğumlanma Bozukluğu Egzersizleri\" konusu üzerinde kendi kendinize 1 dakikalık kısa bir konuşma provası yapın.</p>\n\n<div style=\"margin:2rem 0;padding:1.5rem;background:#f0f9ff;border-radius:12px;border:1px solid #bae6fd;\">\n  <h4 style=\"margin-top:0;color:#0369a1;\">🎙️ İnteraktif Egzersizlere Başlayın</h4>\n  <p style=\"margin-bottom:1rem;color:#0c4a6e;\">Teoriyi pratiğe dökmek için platformumuzdaki interaktif tekerleme, metronom ve artikülasyon araçlarını kullanabilirsiniz. Ücretsiz stüdyomuzda sesinizi kaydedip analiz edin.</p>\n  <a href=\"/\" style=\"display:inline-block;background:#0ea5e9;color:white;padding:12px 24px;border-radius:8px;text-decoration:none;font-weight:bold;\">Tüm Diksiyon Egzersizlerine Git →</a>\n</div>",
    "faq": [
        {
                "question": "Artikülasyon ve Boğumlanma Bozukluğu Egzersizleri için egzersizleri nerede bulabilirim?",
                "answer": "Ana sayfamızda yer alan Görsel Nefes, Tekerleme Arenası ve Ses Stüdyosu modüllerini kullanarak tamamen ücretsiz pratik yapabilirsiniz."
        },
        {
                "question": "Diksiyon eğitimi günde ne kadar pratik gerektirir?",
                "answer": "Kas hafızasının gelişmesi için her gün düzenli olarak 10-15 dakika sesli diksiyon pratiği yapmanız, haftada 1 kez 2 saat yapmanızdan çok daha etkilidir."
        }
]
},
  'hizli-konusma-sorunu': {
    "title": "Hızlı Konuşma Sorunu (Taşilali) Nasıl Düzeltilir? - Diksiyon Rehberi",
    "desc": "Hızlı konuştuğu için kelimeleri yutan, anlaşılamayan kişiler için konuşma hızını yavaşlatma, heceleme ve ritim kontrol egzersizleri.",
    "h1": "Hızlı Konuşma (Taşilali) Sorunu ve Yavaşlatma Egzersizleri",
    "content": "Konuşma ve iletişim becerilerinizi geliştirmek, sosyal hayatta ve profesyonel kariyerinizde size büyük avantajlar sağlar. Hızlı Konuşma (Taşilali) Sorunu ve Yavaşlatma Egzersizleri konusu, doğru sesletim ve diyafram kontrolü gerektiren önemli bir diksiyon bileşenidir. Doğru teknikleri kullanarak bu süreci hızlandırabilirsiniz.\n\n<h3>Temel Kurallar ve Pratik Yöntemler:</h3>\n<ul>\n<li><strong>Nefes Kontrolü:</strong> Cümleleri kurarken göğsünüzden değil, diyaframınızdan nefes alarak sesinize derinlik ve güç katın. Hava akışını kontrol etmek heyecanınızı da azaltacaktır.</li>\n<li><strong>Ayna Karşısında Pratik:</strong> Dudak ve çene tembelliğini gidermek için her gün 10 dakika ayna karşısında abartılı dudak hareketleriyle yüksek sesli okuma çalışmaları yapın.</li>\n<li><strong>Ritim ve Hız:</strong> Çok hızlı konuşmak güven kaybına neden olur. Konuşma hızınızı bilinçli olarak düşürerek kelimelerin son harflerini yutmadan telaffuz edin.</li>\n</ul>\n\n<h3>Kısa Uygulama Egzersizi:</h3>\n<p>Dik bir şekilde ayakta durun. Burnunuzdan derin bir nefes alın ve nefesinizi \"Sssss\" veya \"Şşşş\" sesiyle yavaşça geri verin. Ardından aynı nefes desteğiyle \"Hızlı Konuşma (Taşilali) Sorunu ve Yavaşlatma Egzersizleri\" konusu üzerinde kendi kendinize 1 dakikalık kısa bir konuşma provası yapın.</p>\n\n<div style=\"margin:2rem 0;padding:1.5rem;background:#f0f9ff;border-radius:12px;border:1px solid #bae6fd;\">\n  <h4 style=\"margin-top:0;color:#0369a1;\">🎙️ İnteraktif Egzersizlere Başlayın</h4>\n  <p style=\"margin-bottom:1rem;color:#0c4a6e;\">Teoriyi pratiğe dökmek için platformumuzdaki interaktif tekerleme, metronom ve artikülasyon araçlarını kullanabilirsiniz. Ücretsiz stüdyomuzda sesinizi kaydedip analiz edin.</p>\n  <a href=\"/\" style=\"display:inline-block;background:#0ea5e9;color:white;padding:12px 24px;border-radius:8px;text-decoration:none;font-weight:bold;\">Tüm Diksiyon Egzersizlerine Git →</a>\n</div>",
    "faq": [
        {
                "question": "Hızlı Konuşma (Taşilali) Sorunu ve Yavaşlatma Egzersizleri için egzersizleri nerede bulabilirim?",
                "answer": "Ana sayfamızda yer alan Görsel Nefes, Tekerleme Arenası ve Ses Stüdyosu modüllerini kullanarak tamamen ücretsiz pratik yapabilirsiniz."
        },
        {
                "question": "Diksiyon eğitimi günde ne kadar pratik gerektirir?",
                "answer": "Kas hafızasının gelişmesi için her gün düzenli olarak 10-15 dakika sesli diksiyon pratiği yapmanız, haftada 1 kez 2 saat yapmanızdan çok daha etkilidir."
        }
]
},

  'pelteklik-ve-r-harfi': {
    "title": "Pelteklik (Artikülasyon) ve R Harfi Söyleme Egzersizleri - Diksiyon Rehberi",
    "desc": "S, Ş, Z harflerindeki peltekliği giderme ve R harfini (Rotasizm) doğru telaffuz etme çalışmaları.",
    "h1": "Pelteklik ve R Harfi (Rotasizm) Düzeltme Egzersizleri",
    "content": "Konuşma ve iletişim becerilerinizi geliştirmek, sosyal hayatta ve profesyonel kariyerinizde size büyük avantajlar sağlar. Pelteklik ve R Harfi (Rotasizm) Düzeltme Egzersizleri konusu, doğru sesletim ve diyafram kontrolü gerektiren önemli bir diksiyon bileşenidir. Doğru teknikleri kullanarak bu süreci hızlandırabilirsiniz.\n\n<h3>Temel Kurallar ve Pratik Yöntemler:</h3>\n<ul>\n<li><strong>Nefes Kontrolü:</strong> Cümleleri kurarken göğsünüzden değil, diyaframınızdan nefes alarak sesinize derinlik ve güç katın. Hava akışını kontrol etmek heyecanınızı da azaltacaktır.</li>\n<li><strong>Ayna Karşısında Pratik:</strong> Dudak ve çene tembelliğini gidermek için her gün 10 dakika ayna karşısında abartılı dudak hareketleriyle yüksek sesli okuma çalışmaları yapın.</li>\n<li><strong>Ritim ve Hız:</strong> Çok hızlı konuşmak güven kaybına neden olur. Konuşma hızınızı bilinçli olarak düşürerek kelimelerin son harflerini yutmadan telaffuz edin.</li>\n</ul>\n\n<h3>Kısa Uygulama Egzersizi:</h3>\n<p>Dik bir şekilde ayakta durun. Burnunuzdan derin bir nefes alın ve nefesinizi \"Sssss\" veya \"Şşşş\" sesiyle yavaşça geri verin. Ardından aynı nefes desteğiyle \"Pelteklik ve R Harfi (Rotasizm) Düzeltme Egzersizleri\" konusu üzerinde kendi kendinize 1 dakikalık kısa bir konuşma provası yapın.</p>\n\n<div style=\"margin:2rem 0;padding:1.5rem;background:#f0f9ff;border-radius:12px;border:1px solid #bae6fd;\">\n  <h4 style=\"margin-top:0;color:#0369a1;\">🎙️ İnteraktif Egzersizlere Başlayın</h4>\n  <p style=\"margin-bottom:1rem;color:#0c4a6e;\">Teoriyi pratiğe dökmek için platformumuzdaki interaktif tekerleme, metronom ve artikülasyon araçlarını kullanabilirsiniz. Ücretsiz stüdyomuzda sesinizi kaydedip analiz edin.</p>\n  <a href=\"/\" style=\"display:inline-block;background:#0ea5e9;color:white;padding:12px 24px;border-radius:8px;text-decoration:none;font-weight:bold;\">Tüm Diksiyon Egzersizlerine Git →</a>\n</div>",
    "faq": [
        {
                "question": "Pelteklik ve R Harfi (Rotasizm) Düzeltme Egzersizleri için egzersizleri nerede bulabilirim?",
                "answer": "Ana sayfamızda yer alan Görsel Nefes, Tekerleme Arenası ve Ses Stüdyosu modüllerini kullanarak tamamen ücretsiz pratik yapabilirsiniz."
        },
        {
                "question": "Diksiyon eğitimi günde ne kadar pratik gerektirir?",
                "answer": "Kas hafızasının gelişmesi için her gün düzenli olarak 10-15 dakika sesli diksiyon pratiği yapmanız, haftada 1 kez 2 saat yapmanızdan çok daha etkilidir."
        }
]
},
  'kekemelik-egzersizleri': {
    "title": "Kekemelik Egzersizleri ve Akıcı Konuşma Teknikleri - Diksiyon Rehberi",
    "desc": "Kekemelik yaşayanlar için takılmaları azaltan, nefes kontrolünü sağlayan ve konuşma akıcılığını artıran evde uygulanabilir egzersizler.",
    "h1": "Kekemelik Egzersizleri ve Akıcılık Stratejileri",
    "content": "Kekemelik, kelimelerin başında takılma, uzatma veya konuşmanın aniden durması ile karakterize edilen bir ritim bozukluğudur. Genellikle heyecan, kaygı, stres veya nefes koordinasyonunun bozulmasıyla artış gösterir. Doğru nefes alma teknikleri ve konuşma ritmini düşürme egzersizleri, kekemeliği kontrol altına almanın en etkili yoludur.\\n\\n<h3>Kekemelik İçin 3 Etkili Ev Egzersizi:</h3>\\n<ul>\\n<li><strong>1. Heceleme ve Uzatarak Okuma (Koro Tekniği):</strong> Bir metni kelimeleri adeta bir şarkı söylüyormuş gibi uzatarak okuyun (Örn: \"Meeeeee-rrr-haaaa-baaaa\"). Bu egzersiz beyindeki konuşma merkezini rahatlatır ve kas spazmını önler.</li>\\n<li><strong>2. Diyafram Nefesi Üzerine Seslendirme:</strong> Kekemelik vakalarında genellikle konuşmaya nefes bittiğinde veya yanlış nefes alındığında başlanır. Önce karnınızı şişirerek (diyaframdan) derin bir nefes alın. Nefesi verirken (havayı dışarı üflerken) konuşmaya başlayın. Hava akışının sesi taşımasına izin verin.</li>\\n<li><strong>3. Yumuşak Başlangıç (Soft Onset):</strong> Kelimenin ilk harfini çok yumuşak, fısıltı ile seslendirerek başlayıp sonrasında sesi normal tona çıkarın. Özellikle patlayıcı (P, B, T, D, K, G) harflerle başlayan kelimelerde bu tekniği kullanın.</li>\\n</ul>\\n\\n<div style=\"margin:2rem 0;padding:1.5rem;background:#f0fdf4;border-radius:12px;border:1px solid #bbf7d0;\">\\n  <h4 style=\"margin-top:0;color:#166534;\">🎙️ Nefes ve Ritim Araçlarımızı Kullanın</h4>\\n  <p style=\"margin-bottom:1rem;color:#14532d;\">Ana sayfamızda yer alan Görsel Nefes Alma modülü ve Ritim Metronomu, konuşma hızınızı kontrol etmenize yardımcı olur.</p>\\n  <a href=\"/\" style=\"display:inline-block;background:#22c55e;color:white;padding:12px 24px;border-radius:8px;text-decoration:none;font-weight:bold;\">Nefes Egzersizlerine Git →</a>\\n</div>",
    "faq": [
        {
            "question": "Kekemelik tamamen geçer mi?",
            "answer": "Özellikle çocukluk çağında (gelişimsel kekemelik) tamamen geçme oranı çok yüksektir. Yetişkinlerde ise doğru teknikler, özgüven çalışmaları ve uzman desteğiyle kişi takılmalarını neredeyse tamamen kontrol altına alabilir ve son derece akıcı konuşabilir."
        },
        {
            "question": "Heyecanlanınca kekelemek normal mi?",
            "answer": "Evet, heyecan otonom sinir sistemini tetikleyerek kasların (ses telleri, diyafram, çene) kasılmasına ve sığ nefes alınmasına yol açar. Bu kasılmalar da kekemeliği artırır. Sakinleştirici nefes teknikleri heyecan kaynaklı kekemeliği azaltır."
        }
    ]
},

  'ses-sagligi-ve-bakimi': {
    "title": "Ses Sağlığı ve Bakımı: Ses Kısıklığına Ne İyi Gelir? - Diksiyon Rehberi",
    "desc": "Ses tellerini korumak, ses kısıklığını önlemek ve pürüzsüz bir ses için yapmanız gerekenler. Ses teli yorgunluğuna karşı doğal yöntemler.",
    "h1": "Ses Sağlığı, Bakımı ve Ses Tellerini Koruma",
    "content": "Konuşma ve iletişim becerilerinizi geliştirmek, sosyal hayatta ve profesyonel kariyerinizde size büyük avantajlar sağlar. Ses Sağlığı, Bakımı ve Ses Tellerini Koruma konusu, doğru sesletim ve diyafram kontrolü gerektiren önemli bir diksiyon bileşenidir. Doğru teknikleri kullanarak bu süreci hızlandırabilirsiniz.\n\n<h3>Temel Kurallar ve Pratik Yöntemler:</h3>\n<ul>\n<li><strong>Nefes Kontrolü:</strong> Cümleleri kurarken göğsünüzden değil, diyaframınızdan nefes alarak sesinize derinlik ve güç katın. Hava akışını kontrol etmek heyecanınızı da azaltacaktır.</li>\n<li><strong>Ayna Karşısında Pratik:</strong> Dudak ve çene tembelliğini gidermek için her gün 10 dakika ayna karşısında abartılı dudak hareketleriyle yüksek sesli okuma çalışmaları yapın.</li>\n<li><strong>Ritim ve Hız:</strong> Çok hızlı konuşmak güven kaybına neden olur. Konuşma hızınızı bilinçli olarak düşürerek kelimelerin son harflerini yutmadan telaffuz edin.</li>\n</ul>\n\n<h3>Kısa Uygulama Egzersizi:</h3>\n<p>Dik bir şekilde ayakta durun. Burnunuzdan derin bir nefes alın ve nefesinizi \"Sssss\" veya \"Şşşş\" sesiyle yavaşça geri verin. Ardından aynı nefes desteğiyle \"Ses Sağlığı, Bakımı ve Ses Tellerini Koruma\" konusu üzerinde kendi kendinize 1 dakikalık kısa bir konuşma provası yapın.</p>\n\n<div style=\"margin:2rem 0;padding:1.5rem;background:#f0f9ff;border-radius:12px;border:1px solid #bae6fd;\">\n  <h4 style=\"margin-top:0;color:#0369a1;\">🎙️ İnteraktif Egzersizlere Başlayın</h4>\n  <p style=\"margin-bottom:1rem;color:#0c4a6e;\">Teoriyi pratiğe dökmek için platformumuzdaki interaktif tekerleme, metronom ve artikülasyon araçlarını kullanabilirsiniz. Ücretsiz stüdyomuzda sesinizi kaydedip analiz edin.</p>\n  <a href=\"/\" style=\"display:inline-block;background:#0ea5e9;color:white;padding:12px 24px;border-radius:8px;text-decoration:none;font-weight:bold;\">Tüm Diksiyon Egzersizlerine Git →</a>\n</div>",
    "faq": [
        {
                "question": "Ses Sağlığı, Bakımı ve Ses Tellerini Koruma için egzersizleri nerede bulabilirim?",
                "answer": "Ana sayfamızda yer alan Görsel Nefes, Tekerleme Arenası ve Ses Stüdyosu modüllerini kullanarak tamamen ücretsiz pratik yapabilirsiniz."
        },
        {
                "question": "Diksiyon eğitimi günde ne kadar pratik gerektirir?",
                "answer": "Kas hafızasının gelişmesi için her gün düzenli olarak 10-15 dakika sesli diksiyon pratiği yapmanız, haftada 1 kez 2 saat yapmanızdan çok daha etkilidir."
        }
]
},
  'satis-ve-ikna-diksiyonu': {
    "title": "Satış, Pazarlama ve İkna Diksiyonu - Diksiyon Rehberi",
    "desc": "Müşterileri ikna etmek, satışları artırmak ve güven aşılayan bir ses tonu yaratmak için iş dünyasına özel diksiyon teknikleri.",
    "h1": "Satış, Pazarlama ve İkna İçin Diksiyon Teknikleri",
    "content": "Konuşma ve iletişim becerilerinizi geliştirmek, sosyal hayatta ve profesyonel kariyerinizde size büyük avantajlar sağlar. Satış, Pazarlama ve İkna İçin Diksiyon Teknikleri konusu, doğru sesletim ve diyafram kontrolü gerektiren önemli bir diksiyon bileşenidir. Doğru teknikleri kullanarak bu süreci hızlandırabilirsiniz.\n\n<h3>Temel Kurallar ve Pratik Yöntemler:</h3>\n<ul>\n<li><strong>Nefes Kontrolü:</strong> Cümleleri kurarken göğsünüzden değil, diyaframınızdan nefes alarak sesinize derinlik ve güç katın. Hava akışını kontrol etmek heyecanınızı da azaltacaktır.</li>\n<li><strong>Ayna Karşısında Pratik:</strong> Dudak ve çene tembelliğini gidermek için her gün 10 dakika ayna karşısında abartılı dudak hareketleriyle yüksek sesli okuma çalışmaları yapın.</li>\n<li><strong>Ritim ve Hız:</strong> Çok hızlı konuşmak güven kaybına neden olur. Konuşma hızınızı bilinçli olarak düşürerek kelimelerin son harflerini yutmadan telaffuz edin.</li>\n</ul>\n\n<h3>Kısa Uygulama Egzersizi:</h3>\n<p>Dik bir şekilde ayakta durun. Burnunuzdan derin bir nefes alın ve nefesinizi \"Sssss\" veya \"Şşşş\" sesiyle yavaşça geri verin. Ardından aynı nefes desteğiyle \"Satış, Pazarlama ve İkna İçin Diksiyon Teknikleri\" konusu üzerinde kendi kendinize 1 dakikalık kısa bir konuşma provası yapın.</p>\n\n<div style=\"margin:2rem 0;padding:1.5rem;background:#f0f9ff;border-radius:12px;border:1px solid #bae6fd;\">\n  <h4 style=\"margin-top:0;color:#0369a1;\">🎙️ İnteraktif Egzersizlere Başlayın</h4>\n  <p style=\"margin-bottom:1rem;color:#0c4a6e;\">Teoriyi pratiğe dökmek için platformumuzdaki interaktif tekerleme, metronom ve artikülasyon araçlarını kullanabilirsiniz. Ücretsiz stüdyomuzda sesinizi kaydedip analiz edin.</p>\n  <a href=\"/\" style=\"display:inline-block;background:#0ea5e9;color:white;padding:12px 24px;border-radius:8px;text-decoration:none;font-weight:bold;\">Tüm Diksiyon Egzersizlerine Git →</a>\n</div>",
    "faq": [
        {
                "question": "Satış, Pazarlama ve İkna İçin Diksiyon Teknikleri için egzersizleri nerede bulabilirim?",
                "answer": "Ana sayfamızda yer alan Görsel Nefes, Tekerleme Arenası ve Ses Stüdyosu modüllerini kullanarak tamamen ücretsiz pratik yapabilirsiniz."
        },
        {
                "question": "Diksiyon eğitimi günde ne kadar pratik gerektirir?",
                "answer": "Kas hafızasının gelişmesi için her gün düzenli olarak 10-15 dakika sesli diksiyon pratiği yapmanız, haftada 1 kez 2 saat yapmanızdan çok daha etkilidir."
        }
]
},
  'cocuklar-icin-diksiyon': {
    "title": "Çocuklar İçin Diksiyon: Evde Konuşma Becerisi Geliştirme - Diksiyon Rehberi",
    "desc": "Çocukların dil gelişimini destekleyen, kelime dağarcığını artıran ve eğlenceli diksiyon/tekerleme egzersizleri.",
    "h1": "Çocuklar İçin Eğlenceli Diksiyon ve Konuşma Egzersizleri",
    "content": "Konuşma ve iletişim becerilerinizi geliştirmek, sosyal hayatta ve profesyonel kariyerinizde size büyük avantajlar sağlar. Çocuklar İçin Eğlenceli Diksiyon ve Konuşma Egzersizleri konusu, doğru sesletim ve diyafram kontrolü gerektiren önemli bir diksiyon bileşenidir. Doğru teknikleri kullanarak bu süreci hızlandırabilirsiniz.\n\n<h3>Temel Kurallar ve Pratik Yöntemler:</h3>\n<ul>\n<li><strong>Nefes Kontrolü:</strong> Cümleleri kurarken göğsünüzden değil, diyaframınızdan nefes alarak sesinize derinlik ve güç katın. Hava akışını kontrol etmek heyecanınızı da azaltacaktır.</li>\n<li><strong>Ayna Karşısında Pratik:</strong> Dudak ve çene tembelliğini gidermek için her gün 10 dakika ayna karşısında abartılı dudak hareketleriyle yüksek sesli okuma çalışmaları yapın.</li>\n<li><strong>Ritim ve Hız:</strong> Çok hızlı konuşmak güven kaybına neden olur. Konuşma hızınızı bilinçli olarak düşürerek kelimelerin son harflerini yutmadan telaffuz edin.</li>\n</ul>\n\n<h3>Kısa Uygulama Egzersizi:</h3>\n<p>Dik bir şekilde ayakta durun. Burnunuzdan derin bir nefes alın ve nefesinizi \"Sssss\" veya \"Şşşş\" sesiyle yavaşça geri verin. Ardından aynı nefes desteğiyle \"Çocuklar İçin Eğlenceli Diksiyon ve Konuşma Egzersizleri\" konusu üzerinde kendi kendinize 1 dakikalık kısa bir konuşma provası yapın.</p>\n\n<div style=\"margin:2rem 0;padding:1.5rem;background:#f0f9ff;border-radius:12px;border:1px solid #bae6fd;\">\n  <h4 style=\"margin-top:0;color:#0369a1;\">🎙️ İnteraktif Egzersizlere Başlayın</h4>\n  <p style=\"margin-bottom:1rem;color:#0c4a6e;\">Teoriyi pratiğe dökmek için platformumuzdaki interaktif tekerleme, metronom ve artikülasyon araçlarını kullanabilirsiniz. Ücretsiz stüdyomuzda sesinizi kaydedip analiz edin.</p>\n  <a href=\"/\" style=\"display:inline-block;background:#0ea5e9;color:white;padding:12px 24px;border-radius:8px;text-decoration:none;font-weight:bold;\">Tüm Diksiyon Egzersizlerine Git →</a>\n</div>",
    "faq": [
        {
                "question": "Çocuklar İçin Eğlenceli Diksiyon ve Konuşma Egzersizleri için egzersizleri nerede bulabilirim?",
                "answer": "Ana sayfamızda yer alan Görsel Nefes, Tekerleme Arenası ve Ses Stüdyosu modüllerini kullanarak tamamen ücretsiz pratik yapabilirsiniz."
        },
        {
                "question": "Diksiyon eğitimi günde ne kadar pratik gerektirir?",
                "answer": "Kas hafızasının gelişmesi için her gün düzenli olarak 10-15 dakika sesli diksiyon pratiği yapmanız, haftada 1 kez 2 saat yapmanızdan çok daha etkilidir."
        }
]
},
  'oyunculuk-diksiyonu': {
    "title": "Tiyatro ve Oyunculuk Diksiyonu: Sahne Sesi - Diksiyon Rehberi",
    "desc": "Oyuncular ve tiyatrocular için sahne sesi çıkarma, duygu aktarımı ve rezonans çalışmaları. Mikrofonsuz güçlü ses elde etme.",
    "h1": "Tiyatro, Oyunculuk ve Sahne Sesi Egzersizleri",
    "content": "Konuşma ve iletişim becerilerinizi geliştirmek, sosyal hayatta ve profesyonel kariyerinizde size büyük avantajlar sağlar. Tiyatro, Oyunculuk ve Sahne Sesi Egzersizleri konusu, doğru sesletim ve diyafram kontrolü gerektiren önemli bir diksiyon bileşenidir. Doğru teknikleri kullanarak bu süreci hızlandırabilirsiniz.\n\n<h3>Temel Kurallar ve Pratik Yöntemler:</h3>\n<ul>\n<li><strong>Nefes Kontrolü:</strong> Cümleleri kurarken göğsünüzden değil, diyaframınızdan nefes alarak sesinize derinlik ve güç katın. Hava akışını kontrol etmek heyecanınızı da azaltacaktır.</li>\n<li><strong>Ayna Karşısında Pratik:</strong> Dudak ve çene tembelliğini gidermek için her gün 10 dakika ayna karşısında abartılı dudak hareketleriyle yüksek sesli okuma çalışmaları yapın.</li>\n<li><strong>Ritim ve Hız:</strong> Çok hızlı konuşmak güven kaybına neden olur. Konuşma hızınızı bilinçli olarak düşürerek kelimelerin son harflerini yutmadan telaffuz edin.</li>\n</ul>\n\n<h3>Kısa Uygulama Egzersizi:</h3>\n<p>Dik bir şekilde ayakta durun. Burnunuzdan derin bir nefes alın ve nefesinizi \"Sssss\" veya \"Şşşş\" sesiyle yavaşça geri verin. Ardından aynı nefes desteğiyle \"Tiyatro, Oyunculuk ve Sahne Sesi Egzersizleri\" konusu üzerinde kendi kendinize 1 dakikalık kısa bir konuşma provası yapın.</p>\n\n<div style=\"margin:2rem 0;padding:1.5rem;background:#f0f9ff;border-radius:12px;border:1px solid #bae6fd;\">\n  <h4 style=\"margin-top:0;color:#0369a1;\">🎙️ İnteraktif Egzersizlere Başlayın</h4>\n  <p style=\"margin-bottom:1rem;color:#0c4a6e;\">Teoriyi pratiğe dökmek için platformumuzdaki interaktif tekerleme, metronom ve artikülasyon araçlarını kullanabilirsiniz. Ücretsiz stüdyomuzda sesinizi kaydedip analiz edin.</p>\n  <a href=\"/\" style=\"display:inline-block;background:#0ea5e9;color:white;padding:12px 24px;border-radius:8px;text-decoration:none;font-weight:bold;\">Tüm Diksiyon Egzersizlerine Git →</a>\n</div>",
    "faq": [
        {
                "question": "Tiyatro, Oyunculuk ve Sahne Sesi Egzersizleri için egzersizleri nerede bulabilirim?",
                "answer": "Ana sayfamızda yer alan Görsel Nefes, Tekerleme Arenası ve Ses Stüdyosu modüllerini kullanarak tamamen ücretsiz pratik yapabilirsiniz."
        },
        {
                "question": "Diksiyon eğitimi günde ne kadar pratik gerektirir?",
                "answer": "Kas hafızasının gelişmesi için her gün düzenli olarak 10-15 dakika sesli diksiyon pratiği yapmanız, haftada 1 kez 2 saat yapmanızdan çok daha etkilidir."
        }
]
},
  'mulakat-diksiyonu': {
    "title": "İş Görüşmesi ve Mülakatlarda Etkili Diksiyon - Diksiyon Rehberi",
    "desc": "İş mülakatlarında ikna edici konuşma, heyecan kontrolü, doğru beden dili ve profesyonel diksiyon stratejileri.",
    "h1": "Mülakat Diksiyonu: İş Görüşmelerinde Etkileyici Konuşma",
    "content": "Konuşma ve iletişim becerilerinizi geliştirmek, sosyal hayatta ve profesyonel kariyerinizde size büyük avantajlar sağlar. Mülakat Diksiyonu: İş Görüşmelerinde Etkileyici Konuşma konusu, doğru sesletim ve diyafram kontrolü gerektiren önemli bir diksiyon bileşenidir. Doğru teknikleri kullanarak bu süreci hızlandırabilirsiniz.\n\n<h3>Temel Kurallar ve Pratik Yöntemler:</h3>\n<ul>\n<li><strong>Nefes Kontrolü:</strong> Cümleleri kurarken göğsünüzden değil, diyaframınızdan nefes alarak sesinize derinlik ve güç katın. Hava akışını kontrol etmek heyecanınızı da azaltacaktır.</li>\n<li><strong>Ayna Karşısında Pratik:</strong> Dudak ve çene tembelliğini gidermek için her gün 10 dakika ayna karşısında abartılı dudak hareketleriyle yüksek sesli okuma çalışmaları yapın.</li>\n<li><strong>Ritim ve Hız:</strong> Çok hızlı konuşmak güven kaybına neden olur. Konuşma hızınızı bilinçli olarak düşürerek kelimelerin son harflerini yutmadan telaffuz edin.</li>\n</ul>\n\n<h3>Kısa Uygulama Egzersizi:</h3>\n<p>Dik bir şekilde ayakta durun. Burnunuzdan derin bir nefes alın ve nefesinizi \"Sssss\" veya \"Şşşş\" sesiyle yavaşça geri verin. Ardından aynı nefes desteğiyle \"Mülakat Diksiyonu: İş Görüşmelerinde Etkileyici Konuşma\" konusu üzerinde kendi kendinize 1 dakikalık kısa bir konuşma provası yapın.</p>\n\n<div style=\"margin:2rem 0;padding:1.5rem;background:#f0f9ff;border-radius:12px;border:1px solid #bae6fd;\">\n  <h4 style=\"margin-top:0;color:#0369a1;\">🎙️ İnteraktif Egzersizlere Başlayın</h4>\n  <p style=\"margin-bottom:1rem;color:#0c4a6e;\">Teoriyi pratiğe dökmek için platformumuzdaki interaktif tekerleme, metronom ve artikülasyon araçlarını kullanabilirsiniz. Ücretsiz stüdyomuzda sesinizi kaydedip analiz edin.</p>\n  <a href=\"/\" style=\"display:inline-block;background:#0ea5e9;color:white;padding:12px 24px;border-radius:8px;text-decoration:none;font-weight:bold;\">Tüm Diksiyon Egzersizlerine Git →</a>\n</div>",
    "faq": [
        {
                "question": "Mülakat Diksiyonu: İş Görüşmelerinde Etkileyici Konuşma için egzersizleri nerede bulabilirim?",
                "answer": "Ana sayfamızda yer alan Görsel Nefes, Tekerleme Arenası ve Ses Stüdyosu modüllerini kullanarak tamamen ücretsiz pratik yapabilirsiniz."
        },
        {
                "question": "Diksiyon eğitimi günde ne kadar pratik gerektirir?",
                "answer": "Kas hafızasının gelişmesi için her gün düzenli olarak 10-15 dakika sesli diksiyon pratiği yapmanız, haftada 1 kez 2 saat yapmanızdan çok daha etkilidir."
        }
]
},
  'spikerlik-ve-sunuculuk-diksiyonu': {
    "title": "Spikerlik ve Sunuculuk Diksiyonu Eğitimi - Diksiyon Rehberi",
    "desc": "Haber spikeri ve profesyonel sunucu olmak isteyenler için ileri düzey diksiyon, nefes ve kamera önü konuşma teknikleri.",
    "h1": "Spikerlik ve Sunuculuk Diksiyon Egzersizleri",
    "content": "TRT spikerlerinin veya profesyonel televizyon sunucularının o pürüzsüz ve otoriter sesine ulaşmak tesadüf değildir. İleri seviye metin okuma, tonlama ve diyafram kullanımı medya sektörünün temel gerekliliğidir.\n\n<h3>Haber Spikerliği Temel Teknikleri:</h3>\n<ul>\n<li><strong>Haber Vurgusu:</strong> Haber metinlerinde duygusal iniş çıkışlar yapılmaz. Nesnellik ön plandadır. Cümleler genelde tok bir sesle başlar ve sesin enerjisi cümle sonunda düşürülmez (havada asılı bırakılmaz), net bir şekilde bitirilir.</li>\n<li><strong>Prompter Okuma:</strong> Kamera ışığına bakarken metni göz ucuyla okumak özel bir beceridir. Gözleriniz kelimelerin üzerinde kayarken, başınızı sağa sola oynatmamalı, sadece göz bebeklerinizle satırları takip etmelisiniz.</li>\n<li><strong>Artikülasyon Keskinliği:</strong> Spikerlerin kelimeleri cam gibi nettir. Bunun için her gün kalem egzersizi ve zorlu tekerleme pratikleri yaparlar.</li>\n</ul>\n\n<h3>Evde Spikerlik Egzersizi:</h3>\n<p>Bir haber sitesinden bir paragraf seçin. Telefonunuzun kamerasını açın ve kendinizi kaydedin. Metni okurken göz temasınızı olabildiğince kamerada tutmaya çalışın. Kelimelerin son harflerini yutmadığınızdan ve cümlenin sonunda nefesinizin tükenmediğinden emin olun.</p>\n\n<div style=\"margin:2rem 0;padding:1.5rem;background:#fff7ed;border-radius:12px;border:1px solid #ffedd5;\">\n  <h4 style=\"margin-top:0;color:#c2410c;\">🎙️ Profesyonel Teleprompter Kullanın</h4>\n  <p style=\"margin-bottom:1rem;color:#7c2d12;\">Sistemimizde yer alan haber metinlerini akıcı bir şekilde okuyarak kamera önü spikerlik pratiği yapabilirsiniz.</p>\n  <a href=\"/\" style=\"display:inline-block;background:#f97316;color:white;padding:12px 24px;border-radius:8px;text-decoration:none;font-weight:bold;\">Teleprompter Aracına Git →</a>\n</div>",
    "faq": [
        {
                "question": "Spiker olmak için ses rengi önemli mi?",
                "answer": "Sesin tınısı (ince veya kalın olması) önemlidir ancak diksiyon kurallarına uymak, tonlama ve vurguları doğru yapmak ses renginden çok daha kritiktir. Eğitimle sesinizin en iyi versiyonunu bulabilirsiniz."
        }
]
},
  'sive-ve-aksan-duzeltme': {
    "title": "Şive ve Aksan Düzeltme Çalışmaları - Diksiyon Rehberi",
    "desc": "Yöresel şiveleri ve yabancı dil aksanını düzeltmek, standart İstanbul Türkçesi ile konuşmak için diksiyon çalışmaları.",
    "h1": "Şive (Ağız) ve Aksan Düzeltme Egzersizleri",
    "content": "Türkiye'nin farklı yörelerinden gelen konuşma alışkanlıkları (ağız özellikleri) veya sonradan öğrenilen yabancı dillerin aksanları, profesyonel iş hayatında yanlış anlaşılmalara yol açabilir. Standart Türkiye Türkçesi (İstanbul ağzı) konuşabilmek için sesletim kurallarını öğrenmek gerekir.\n\n<h3>Şive Düzeltmek İçin Temel Kurallar:</h3>\n<ul>\n<li><strong>E Sesinin Kullanımı:</strong> Yöresel ağızlarda en sık yapılan hata \"e\" sesinin kullanımındadır. Kapalı \"e\" (Kendi, Elli, Pencere) ve açık \"e\" (Gel, Sen, Ben) ayrımını yapmak şiveyi kırmada en önemli adımdır.</li>\n<li><strong>Ğ Harfi Gerçeği:</strong> Standart Türkçede \"Ğ\" harfi hiçbir zaman telaffuz edilmez, sadece önceki ünlüyü uzatır. \"Yağmur\" kelimesi \"Ya-mur\" şeklinde değil, \"Yaa-mur\" şeklinde telaffuz edilmelidir.</li>\n<li><strong>K Harfi İncelmesi:</strong> Özellikle doğu ağızlarında \"K\" ve \"G\" harfleri çok kalın söylenir. \"Kağıt\" kelimesi \"Kâğıt\" şeklinde, K harfi damağın daha ön kısmından çıkarılarak yumuşatılmalıdır.</li>\n</ul>\n\n<h3>Ayna ve Kalem Egzersizi:</h3>\n<p>Şiveyi kırmak için dudak ve çene kaslarının tembelliğini gidermek şarttır. Dişlerinizin arasına yatay bir kalem yerleştirin ve her gün 10 dakika yüksek sesle haber metni okuyun. Bu, artikülasyon boğumlanma noktalarınızı standartlaştırır.</p>\n\n<div style=\"margin:2rem 0;padding:1.5rem;background:#fdf4ff;border-radius:12px;border:1px solid #f5d0fe;\">\n  <h4 style=\"margin-top:0;color:#86198f;\">🎙️ Tekerlemelerle Ağız Alışkanlıklarını Yıkın</h4>\n  <p style=\"margin-bottom:1rem;color:#4a044e;\">Yöresel kas hafızanızı kırmak için zorlayıcı tekerlemeleri kullanın. Özellikle E ve K harfi tekerlemeleri şive düzeltmede çok etkilidir.</p>\n  <a href=\"/\" style=\"display:inline-block;background:#d946ef;color:white;padding:12px 24px;border-radius:8px;text-decoration:none;font-weight:bold;\">Tekerleme Egzersizlerine Git →</a>\n</div>",
    "faq": [
        {
                "question": "Şivemi düzeltmek ne kadar sürer?",
                "answer": "Günlük 15 dakikalık ayna karşısında sesli okuma ve ses kaydı alarak dinleme yöntemiyle 2 ila 3 ay içinde kalıcı ve gözle görülür bir düzelme sağlanır."
        }
]
},
  'akici-konusma-egzersizleri': {
    "title": "Akıcı Konuşma Egzersizleri: Takılmadan ve Düşünmeden Konuşun - Diksiyon Rehberi",
    "desc": "Konuşurken takılıyor veya kelimeleri bulmakta zorlanıyorsanız, düşünmeden ve akıcı konuşmak için yapabileceğiniz diksiyon egzersizleri.",
    "h1": "Akıcı Konuşma ve Diksiyon Pratikleri",
    "content": "Konuşma ve iletişim becerilerinizi geliştirmek, sosyal hayatta ve profesyonel kariyerinizde size büyük avantajlar sağlar. Akıcı Konuşma ve Diksiyon Pratikleri konusu, doğru sesletim ve diyafram kontrolü gerektiren önemli bir diksiyon bileşenidir. Doğru teknikleri kullanarak bu süreci hızlandırabilirsiniz.\n\n<h3>Temel Kurallar ve Pratik Yöntemler:</h3>\n<ul>\n<li><strong>Nefes Kontrolü:</strong> Cümleleri kurarken göğsünüzden değil, diyaframınızdan nefes alarak sesinize derinlik ve güç katın. Hava akışını kontrol etmek heyecanınızı da azaltacaktır.</li>\n<li><strong>Ayna Karşısında Pratik:</strong> Dudak ve çene tembelliğini gidermek için her gün 10 dakika ayna karşısında abartılı dudak hareketleriyle yüksek sesli okuma çalışmaları yapın.</li>\n<li><strong>Ritim ve Hız:</strong> Çok hızlı konuşmak güven kaybına neden olur. Konuşma hızınızı bilinçli olarak düşürerek kelimelerin son harflerini yutmadan telaffuz edin.</li>\n</ul>\n\n<h3>Kısa Uygulama Egzersizi:</h3>\n<p>Dik bir şekilde ayakta durun. Burnunuzdan derin bir nefes alın ve nefesinizi \"Sssss\" veya \"Şşşş\" sesiyle yavaşça geri verin. Ardından aynı nefes desteğiyle \"Akıcı Konuşma ve Diksiyon Pratikleri\" konusu üzerinde kendi kendinize 1 dakikalık kısa bir konuşma provası yapın.</p>\n\n<div style=\"margin:2rem 0;padding:1.5rem;background:#f0f9ff;border-radius:12px;border:1px solid #bae6fd;\">\n  <h4 style=\"margin-top:0;color:#0369a1;\">🎙️ İnteraktif Egzersizlere Başlayın</h4>\n  <p style=\"margin-bottom:1rem;color:#0c4a6e;\">Teoriyi pratiğe dökmek için platformumuzdaki interaktif tekerleme, metronom ve artikülasyon araçlarını kullanabilirsiniz. Ücretsiz stüdyomuzda sesinizi kaydedip analiz edin.</p>\n  <a href=\"/\" style=\"display:inline-block;background:#0ea5e9;color:white;padding:12px 24px;border-radius:8px;text-decoration:none;font-weight:bold;\">Tüm Diksiyon Egzersizlerine Git →</a>\n</div>",
    "faq": [
        {
                "question": "Akıcı Konuşma ve Diksiyon Pratikleri için egzersizleri nerede bulabilirim?",
                "answer": "Ana sayfamızda yer alan Görsel Nefes, Tekerleme Arenası ve Ses Stüdyosu modüllerini kullanarak tamamen ücretsiz pratik yapabilirsiniz."
        },
        {
                "question": "Diksiyon eğitimi günde ne kadar pratik gerektirir?",
                "answer": "Kas hafızasının gelişmesi için her gün düzenli olarak 10-15 dakika sesli diksiyon pratiği yapmanız, haftada 1 kez 2 saat yapmanızdan çok daha etkilidir."
        }
]
},
  'hitabet-ve-topluluk-onunde-konusma': {
    "title": "Hitabet Sanatı ve Topluluk Önünde Konuşma Rehberi - Diksiyon Rehberi",
    "desc": "Sahne korkusunu yenin, sunum yeteneklerinizi geliştirin. Hitabet sanatının incelikleriyle kalabalıklara cesaretle hitap edin.",
    "h1": "Hitabet Sanatı ve Topluluk Önünde Konuşma (Sunum) Egzersizleri",
    "content": "Konuşma ve iletişim becerilerinizi geliştirmek, sosyal hayatta ve profesyonel kariyerinizde size büyük avantajlar sağlar. Hitabet Sanatı ve Topluluk Önünde Konuşma (Sunum) Egzersizleri konusu, doğru sesletim ve diyafram kontrolü gerektiren önemli bir diksiyon bileşenidir. Doğru teknikleri kullanarak bu süreci hızlandırabilirsiniz.\n\n<h3>Temel Kurallar ve Pratik Yöntemler:</h3>\n<ul>\n<li><strong>Nefes Kontrolü:</strong> Cümleleri kurarken göğsünüzden değil, diyaframınızdan nefes alarak sesinize derinlik ve güç katın. Hava akışını kontrol etmek heyecanınızı da azaltacaktır.</li>\n<li><strong>Ayna Karşısında Pratik:</strong> Dudak ve çene tembelliğini gidermek için her gün 10 dakika ayna karşısında abartılı dudak hareketleriyle yüksek sesli okuma çalışmaları yapın.</li>\n<li><strong>Ritim ve Hız:</strong> Çok hızlı konuşmak güven kaybına neden olur. Konuşma hızınızı bilinçli olarak düşürerek kelimelerin son harflerini yutmadan telaffuz edin.</li>\n</ul>\n\n<h3>Kısa Uygulama Egzersizi:</h3>\n<p>Dik bir şekilde ayakta durun. Burnunuzdan derin bir nefes alın ve nefesinizi \"Sssss\" veya \"Şşşş\" sesiyle yavaşça geri verin. Ardından aynı nefes desteğiyle \"Hitabet Sanatı ve Topluluk Önünde Konuşma (Sunum) Egzersizleri\" konusu üzerinde kendi kendinize 1 dakikalık kısa bir konuşma provası yapın.</p>\n\n<div style=\"margin:2rem 0;padding:1.5rem;background:#f0f9ff;border-radius:12px;border:1px solid #bae6fd;\">\n  <h4 style=\"margin-top:0;color:#0369a1;\">🎙️ İnteraktif Egzersizlere Başlayın</h4>\n  <p style=\"margin-bottom:1rem;color:#0c4a6e;\">Teoriyi pratiğe dökmek için platformumuzdaki interaktif tekerleme, metronom ve artikülasyon araçlarını kullanabilirsiniz. Ücretsiz stüdyomuzda sesinizi kaydedip analiz edin.</p>\n  <a href=\"/\" style=\"display:inline-block;background:#0ea5e9;color:white;padding:12px 24px;border-radius:8px;text-decoration:none;font-weight:bold;\">Tüm Diksiyon Egzersizlerine Git →</a>\n</div>",
    "faq": [
        {
                "question": "Hitabet Sanatı ve Topluluk Önünde Konuşma (Sunum) Egzersizleri için egzersizleri nerede bulabilirim?",
                "answer": "Ana sayfamızda yer alan Görsel Nefes, Tekerleme Arenası ve Ses Stüdyosu modüllerini kullanarak tamamen ücretsiz pratik yapabilirsiniz."
        },
        {
                "question": "Diksiyon eğitimi günde ne kadar pratik gerektirir?",
                "answer": "Kas hafızasının gelişmesi için her gün düzenli olarak 10-15 dakika sesli diksiyon pratiği yapmanız, haftada 1 kez 2 saat yapmanızdan çok daha etkilidir."
        }
]
},
  'etkili-konusma-teknikleri': {
    "title": "Etkili Konuşma Teknikleri: İz Bırakan İletişim Sırları - Diksiyon Rehberi",
    "desc": "Etkili ve karizmatik bir konuşma için gerekli olan vurgu, tonlama, nefes kontrolü ve beden dili teknikleri.",
    "h1": "Etkili Konuşma Teknikleri: Sesinizin Gücünü Keşfedin",
    "content": "Konuşma ve iletişim becerilerinizi geliştirmek, sosyal hayatta ve profesyonel kariyerinizde size büyük avantajlar sağlar. Etkili Konuşma Teknikleri: Sesinizin Gücünü Keşfedin konusu, doğru sesletim ve diyafram kontrolü gerektiren önemli bir diksiyon bileşenidir. Doğru teknikleri kullanarak bu süreci hızlandırabilirsiniz.\n\n<h3>Temel Kurallar ve Pratik Yöntemler:</h3>\n<ul>\n<li><strong>Nefes Kontrolü:</strong> Cümleleri kurarken göğsünüzden değil, diyaframınızdan nefes alarak sesinize derinlik ve güç katın. Hava akışını kontrol etmek heyecanınızı da azaltacaktır.</li>\n<li><strong>Ayna Karşısında Pratik:</strong> Dudak ve çene tembelliğini gidermek için her gün 10 dakika ayna karşısında abartılı dudak hareketleriyle yüksek sesli okuma çalışmaları yapın.</li>\n<li><strong>Ritim ve Hız:</strong> Çok hızlı konuşmak güven kaybına neden olur. Konuşma hızınızı bilinçli olarak düşürerek kelimelerin son harflerini yutmadan telaffuz edin.</li>\n</ul>\n\n<h3>Kısa Uygulama Egzersizi:</h3>\n<p>Dik bir şekilde ayakta durun. Burnunuzdan derin bir nefes alın ve nefesinizi \"Sssss\" veya \"Şşşş\" sesiyle yavaşça geri verin. Ardından aynı nefes desteğiyle \"Etkili Konuşma Teknikleri: Sesinizin Gücünü Keşfedin\" konusu üzerinde kendi kendinize 1 dakikalık kısa bir konuşma provası yapın.</p>\n\n<div style=\"margin:2rem 0;padding:1.5rem;background:#f0f9ff;border-radius:12px;border:1px solid #bae6fd;\">\n  <h4 style=\"margin-top:0;color:#0369a1;\">🎙️ İnteraktif Egzersizlere Başlayın</h4>\n  <p style=\"margin-bottom:1rem;color:#0c4a6e;\">Teoriyi pratiğe dökmek için platformumuzdaki interaktif tekerleme, metronom ve artikülasyon araçlarını kullanabilirsiniz. Ücretsiz stüdyomuzda sesinizi kaydedip analiz edin.</p>\n  <a href=\"/\" style=\"display:inline-block;background:#0ea5e9;color:white;padding:12px 24px;border-radius:8px;text-decoration:none;font-weight:bold;\">Tüm Diksiyon Egzersizlerine Git →</a>\n</div>",
    "faq": [
        {
                "question": "Etkili Konuşma Teknikleri: Sesinizin Gücünü Keşfedin için egzersizleri nerede bulabilirim?",
                "answer": "Ana sayfamızda yer alan Görsel Nefes, Tekerleme Arenası ve Ses Stüdyosu modüllerini kullanarak tamamen ücretsiz pratik yapabilirsiniz."
        },
        {
                "question": "Diksiyon eğitimi günde ne kadar pratik gerektirir?",
                "answer": "Kas hafızasının gelişmesi için her gün düzenli olarak 10-15 dakika sesli diksiyon pratiği yapmanız, haftada 1 kez 2 saat yapmanızdan çok daha etkilidir."
        }
]
},

  'etkili-ikna-taktikleri': {
    "title": "İkna Taktikleri ve Etkili Konuşma Sırları - Diksiyon Rehberi",
    "desc": "Karşı tarafı ikna etmenin psikolojik yolları. İş hayatında ve günlük yaşamda güven veren, otoriter ve ikna edici bir konuşma tarzı nasıl oluşturulur?",
    "h1": "İkna Edici Konuşma Taktikleri",
    "content": "İletişimde en büyük gücünüz sadece ne söylediğiniz değil, nasıl söylediğinizdir. İkna edici bir konuşma tarzı, doğru ses tonu, vurgu ve kelime seçimi ile başlar.\n\n<h3>İkna Etmenin 3 Temel Diksiyon Kuralı:</h3>\n<ul>\n<li><strong>Ses Rengi ve Güveni:</strong> İnce ve titrek bir ses yerine, diyaframdan desteklenmiş tok ve kararlı bir ses tonu karşı tarafa güven verir.</li>\n<li><strong>Doğru Yerde Duraklama:</strong> Söylediklerinizin karşı tarafın zihninde yer etmesi için önemli kelimelerden sonra 1-2 saniye duraklayın. Sessizlik, en güçlü ikna aracıdır.</li>\n<li><strong>Aşağı Doğru Vurgu (Otorite Vurgusu):</strong> Cümle sonlarında sesinizi yukarı doğru inceltmek (soru sorar gibi) güven eksikliği yaratır. Otorite kurmak için cümleleri aşağı doğru ve net bitirin.</li>\n</ul>\n\n<h3>Kısa Egzersiz:</h3>\n<p>Bir aynanın karşısına geçin. \"Bunu bu şekilde yapmamızın bizim için en iyisi olduğuna inanıyorum\" cümlesini önce hızlıca, ardından her kelimeye basarak, tok bir sesle ve son kelimede sesinizi aşağı doğru indirerek söyleyin. Aradaki otorite farkını anında hissedeceksiniz.</p>\n\n<div style=\"margin:2rem 0;padding:1.5rem;background:#f0f9ff;border-radius:12px;border:1px solid #bae6fd;\">\n  <h4 style=\"margin-top:0;color:#0369a1;\">🎙️ Ücretsiz Pratik Stüdyosu</h4>\n  <p style=\"margin-bottom:1rem;color:#0c4a6e;\">Sesinizin ne kadar ikna edici olduğunu test etmek ister misiniz? Ücretsiz ses stüdyomuzda kendi sesinizi kaydedin ve vurgu analizinizi yapın.</p>\n  <a href=\"/\" style=\"display:inline-block;background:#0ea5e9;color:white;padding:12px 24px;border-radius:8px;text-decoration:none;font-weight:bold;\">Egzersizlere Başla →</a>\n</div>",
    "faq": [
        {
                "question": "İkna edici konuşmak için ses tonu ne kadar önemlidir?",
                "answer": "Araştırmalara göre, iletişimde etkinin %38'i ses tonundan kaynaklanmaktadır. Kullanılan kelimelerin etkisi ise sadece %7'dir. Sesinizin ritmi ve yüksekliği, iknanın temelidir."
        },
        {
                "question": "Bu yeteneği nasıl geliştirebilirim?",
                "answer": "Platformumuzdaki Vurgu ve Duraklama egzersizlerini her gün 10 dakika uygulayarak sesinize otorite kazandırabilirsiniz."
        }
    ]
  },

  'dudak-tembelligi-tedavisi': {
    "title": "Dudak Tembelliği Nasıl Geçer? Tekerleme Tedavisi - Diksiyon Rehberi",
    "desc": "Kelimeleri yutma, harfleri yuvarlama ve dudak tembelliği sorununa kesin çözüm! Kalem ısırarak tekerleme okuma ve dudak kası güçlendirme teknikleri.",
    "h1": "Dudak Tembelliği ve Artikülasyon Bozukluğu Tedavisi",
    "content": "Kelimeleri yuvarlamak, harfleri yutmak veya çok hızlı konuşurken anlaşılmaz olmak... Bunların hepsi 'Dudak Tembelliği' (Zayıf Artikülasyon) sorunundan kaynaklanır. Tıpkı vücut kasları gibi, yüz ve dudak kaslarının da egzersize ihtiyacı vardır.\n\n<h3>Dudak Tembelliğini Giderme Yöntemleri:</h3>\n<ul>\n<li><strong>Kalem Egzersizi:</strong> Dişlerinizin arasına (yatay olarak) temiz bir kalem alın. Kalem ağzınızdayken zorlanarak bir gazete veya kitap metni okumaya çalışın. 2 dakika sonra kalemi çıkarıp aynı metni okuyun. Diksiyonunuzun anında nasıl açıldığına şaşıracaksınız.</li>\n<li><strong>Abartılı Artikülasyon:</strong> Ayna karşısına geçin. Ünlü harfleri (A, E, I, İ, O, Ö, U, Ü) ağzınızı olabildiğince abartılı şekilde açarak seslendirin. Dudak ve çene kaslarınızın yorulduğunu hissetmelisiniz.</li>\n<li><strong>Zor Tekerlemeler:</strong> Özellikle P, Ç, T, K, M, B gibi dudak ve damak harflerinin bol olduğu tekerlemeleri yavaş tempodan başlayarak artan bir hızla okuyun.</li>\n</ul>\n\n<h3>Örnek Tekerleme:</h3>\n<p>\"Pireli peyniri perhizli pireler yerlerse, pireli peynirler de perhizli pireleri yerler.\" (Bu tekerlemeyi dudaklarınızı iyice sıkarak ve harfleri patlatarak 5 kez tekrar edin.)</p>\n\n<div style=\"margin:2rem 0;padding:1.5rem;background:#f0f9ff;border-radius:12px;border:1px solid #bae6fd;\">\n  <h4 style=\"margin-top:0;color:#0369a1;\">🎙️ İnteraktif Tekerleme Arenası</h4>\n  <p style=\"margin-bottom:1rem;color:#0c4a6e;\">Dudak tembelliğinden kurtulmak için sitemizdeki harf bazlı tekerlemelerle çalışın. Uygulamamız üzerinden ses hızınızı test edebilirsiniz.</p>\n  <a href=\"/\" style=\"display:inline-block;background:#0ea5e9;color:white;padding:12px 24px;border-radius:8px;text-decoration:none;font-weight:bold;\">Tekerleme Seç →</a>\n</div>",
    "faq": [
        {
                "question": "Dudak tembelliği tamamen geçer mi?",
                "answer": "Evet! Dudaklar ve çene tamamen kaslardan oluşur. Düzenli egzersiz (özellikle kalem çalışması ve tekerleme) ile 21 gün içinde belirgin bir düzelme sağlanır."
        },
        {
                "question": "Kalem egzersizini ne kadar yapmalıyım?",
                "answer": "Günde en fazla 3 ila 5 dakika yapılması yeterlidir. Çene eklemini fazla zorlamamak çok önemlidir."
        }
    ]
  },

  'topluluk-karsisinda-heyecan-yenme': {
    "title": "Topluluk Önünde Konuşma Korkusu ve Heyecanı Yenme - Diksiyon Rehberi",
    "desc": "Sunum yaparken ses titremesi, el titremesi ve heyecan nasıl yenilir? Anksiyeteyi durduran 4-7-8 diyafram nefesi taktikleri ve sahne rehberi.",
    "h1": "Topluluk Önünde Konuşma Korkusu Nasıl Yenilir?",
    "content": "Kürsüye veya sahneye çıktığınızda kalbinizin hızla çarpması, sesinizin titremesi ve nefesinizin kesilmesi çok normaldir (Buna Glossofobi denir). Ancak fiziksel tepkileri kontrol ederek zihni sakinleştirmek, doğru tekniklerle mümkündür.\n\n<h3>Heyecanı Kontrol Etmenin Sırları:</h3>\n<ul>\n<li><strong>Bedenin SOS Sinyalini Kesmek (4-7-8 Nefesi):</strong> Heyecanlandığınızda sığ ve hızlı göğüs nefesi alırsınız. Bu da beyninize 'tehlike var' mesajı gönderir. Sahneye çıkmadan hemen önce: 4 saniye burnunuzdan derin nefes alın, 7 saniye tutun, 8 saniye boyunca ağzınızdan yavaşça verin. Bu, vagus sinirini uyararak kalp atışınızı fiziksel olarak yavaşlatır.</li>\n<li><strong>Göz Teması Taktiği:</strong> Kalabalığa boş boş bakmak heyecanı artırır. Dinleyiciler arasından güler yüzlü 3 kişi seçin (sağda, solda ve ortada). Sadece onlara anlatıyormuş gibi göz teması kurun.</li>\n<li><strong>Yavaş ve Sesli Başlangıç:</strong> İlk cümlenizi normalden daha yavaş ve daha yüksek bir ses tonuyla söyleyin. Kendi gür sesinizi duymak size anında özgüven aşılayacaktır.</li>\n</ul>\n\n<h3>Sahne Öncesi Egzersiz:</h3>\n<p>Sunumdan 5 dakika önce lavaboya gidin. Omuzlarınızı iyice yukarı çekin, 3 saniye kasılı tutun ve aniden bırakarak gevşeyin. Bu işlemi 3 kez tekrarlayarak üst beden gerginliğini atın.</p>\n\n<div style=\"margin:2rem 0;padding:1.5rem;background:#f0f9ff;border-radius:12px;border:1px solid #bae6fd;\">\n  <h4 style=\"margin-top:0;color:#0369a1;\">🎙️ Ücretsiz Nefes Asistanı</h4>\n  <p style=\"margin-bottom:1rem;color:#0c4a6e;\">Sitemizdeki Görsel Nefes Asistanı ile 4-7-8 rahatlama döngüsünü ekrandaki ritimle eşzamanlı olarak pratik edebilir ve sahneye hazır hissedebilirsiniz.</p>\n  <a href=\"/\" style=\"display:inline-block;background:#0ea5e9;color:white;padding:12px 24px;border-radius:8px;text-decoration:none;font-weight:bold;\">Nefes Asistanını Aç →</a>\n</div>",
    "faq": [
        {
                "question": "Heyecandan sesim titriyor, ne yapmalıyım?",
                "answer": "Ses titremesinin tek nedeni, nefesinizin (havanın) yetersiz kalıp ses tellerini zorlamasıdır. Konuşmaya başlamadan önce karnınızı hava ile doldurun ve cümleyi o havanın üzerine bindirerek kurun."
        },
        {
                "question": "Topluluk önünde konuşma korkusu tamamen biter mi?",
                "answer": "Korku tamamen bitmez ancak 'heyecan'a dönüşür. Deneyimli konuşmacılar da heyecanlanır, ancak onlar diyafram nefesi ile bu enerjiyi sahne performansına yansıtmayı öğrenmişlerdir."
        }
    ]
  },

  'karizmatik-ses-tonu-yapma': {
    "title": "Karizmatik ve Güven Veren Ses Tonu Nasıl Yapılır? - Diksiyon Rehberi",
    "desc": "İş görüşmelerinde ve ikili ilişkilerde karşı tarafı etkileyecek, karizmatik, derin ve otoriter bir ses tonuna sahip olmanın bilimsel diksiyon teknikleri.",
    "h1": "Karizmatik ve Tok Bir Ses Tonuna Sahip Olmak",
    "content": "Karakterinizi yansıtan en önemli unsur sesinizdir. Çoğu insan kendi doğal ve en güzel ses tonunu kullanmaz; boğazında sıkışmış, tiz veya cılız bir sesle konuşur. Karizmatik, güven veren ve tok bir ses tonu elde etmek, ses tellerinizi doğru 'rezonatör' (yankı) boşluklarında titreştirmekle mümkündür.\n\n<h3>Karizmatik Sesin Formülü:</h3>\n<ul>\n<li><strong>Göğüs Rezonansı (Tok Ses):</strong> Elinizi göğsünüzün ortasına koyun. Derin bir \"Mmmmm\" sesi çıkarın. Göğsünüzdeki titreşimi hissedene kadar sesinizin frekansını düşürün. Etkileyici ses, boğazdan değil göğüsten yankılanarak çıkan sestir.</li>\n<li><strong>Ağız Boşluğunu Açmak:</strong> Konuşurken çenenizi yeterince açmazsanız sesiniz içeride hapsolur. Kelimeleri telaffuz ederken ağzınızı dikey olarak biraz daha fazla açarak sesin dışarı gür çıkmasını sağlayın.</li>\n<li><strong>Optimal Konuşma Hızı:</strong> Karizmatik ve otoriter insanlar hızlı konuşmazlar. Hızlı konuşmak 'sözümü kesecekler' korkusu barındırır. Hızınızı düşürün, kelimelerin tadını çıkarın.</li>\n</ul>\n\n<h3>Rezonans Egzersizi:</h3>\n<p>Her sabah uyandığınızda derin bir diyafram nefesi alın. Nefesinizi verirken uzun bir şekilde \"Ooooo\" sesi çıkarın. Sesi önce dudaklarınızda, sonra maskenizde (burun arkası), en son göğsünüzde titreştirerek kendi doğal alt perdenizi bulun.</p>\n\n<div style=\"margin:2rem 0;padding:1.5rem;background:#f0f9ff;border-radius:12px;border:1px solid #bae6fd;\">\n  <h4 style=\"margin-top:0;color:#0369a1;\">🎙️ Rezonans Testi</h4>\n  <p style=\"margin-bottom:1rem;color:#0c4a6e;\">Kendi ses renginizi bulmak için platformumuzdaki Ses Analizi ve Rezonans testlerini uygulayın. Sesinizi stüdyomuzda kaydedin.</p>\n  <a href=\"/\" style=\"display:inline-block;background:#0ea5e9;color:white;padding:12px 24px;border-radius:8px;text-decoration:none;font-weight:bold;\">Rezonans Egzersizlerine Başla →</a>\n</div>",
    "faq": [
        {
                "question": "Ses rengi sonradan değiştirilebilir mi?",
                "answer": "Anatomik ses telinizin yapısını değiştiremezsiniz. Ancak, şu an muhtemelen sesinizi yanlış yerden (boğazdan) üretiyorsunuz. Rezonans eğitimi ile sesinizin asıl gür ve tok potansiyelini ortaya çıkarabilirsiniz."
        },
        {
                "question": "Göğüs sesini nasıl bulacağım?",
                "answer": "Esnediğiniz zaman çıkardığınız o kalın ve rahat ses, sizin gerçek göğüs sesinize en yakın olan frekanstır."
        }
    ]
  },

  'kamera-karsisinda-etkili-konusma': {
    "title": "Kamera Karşısında Etkili Konuşma ve Diksiyon Sırları - Diksiyon Rehberi",
    "desc": "YouTube, TikTok ve Instagram videoları çekerken kameraya bakarak akıcı, takılmadan ve enerjik konuşmanın profesyonel spikerlik teknikleri.",
    "h1": "Kamera Karşısında Profesyonel ve Akıcı Konuşma",
    "content": "Gündelik hayatta çok rahat konuşan biri bile, kayıt düğmesine basıldığında tutulabilir, 'eee, ııı' gibi asalak sesler çıkarabilir veya enerjisini kaybedebilir. Kamera karşısında etkili olmak, spikerlik ve sunuculuk diksiyonunun en çok talep gören alanlarından biridir.\n\n<h3>Kamera Önü Diksiyon Teknikleri:</h3>\n<ul>\n<li><strong>Lense 'Arkadaş' Gibi Bakmak:</strong> Kameranın merceğini cansız bir cam olarak değil, çok sevdiğiniz ve bir şeyler anlatmak için heyecan duyduğunuz yakın bir arkadaşınızın gözü olarak hayal edin. Bu, mimiklerinizi otomatik olarak doğallaştıracaktır.</li>\n<li><strong>Enerji Seviyesini %20 Artırmak:</strong> Kamera enerjiyi emer. Ekranda 'normal' görünmek için, gerçek hayatta normal hissettiğiniz enerjinin %20 daha fazlasını (ses yüksekliği ve el hareketleri) sergilemeniz gerekir.</li>\n<li><strong>'Eee, Iıı' Seslerinden Kurtulmak:</strong> Cümle aralarında düşünmek için bu sesleri çıkarmak yerine sadece 'duraklayın'. Sessiz bir es vermek, 'eee' demekten çok daha profesyonel ve düşündürücü durur.</li>\n</ul>\n\n<h3>Teleprompter Pratiği:</h3>\n<p>Eğer bir metin okuyacaksanız, kelimeleri gözlerinizle metinden okurken, seslendirmeden önce beyninizde 1 saniye işleyin. Gözleriniz hep okuduğunuz kelimenin 2-3 kelime ilerisinde olmalıdır.</p>\n\n<div style=\"margin:2rem 0;padding:1.5rem;background:#f0f9ff;border-radius:12px;border:1px solid #bae6fd;\">\n  <h4 style=\"margin-top:0;color:#0369a1;\">🎙️ Ücretsiz Teleprompter Aracı</h4>\n  <p style=\"margin-bottom:1rem;color:#0c4a6e;\">Kamera karşısına geçmeden önce, sitemizdeki ücretsiz ve hız ayarlı Teleprompter aracı ile haber spikerleri gibi metin okuma çalışmaları yapabilirsiniz.</p>\n  <a href=\"/\" style=\"display:inline-block;background:#0ea5e9;color:white;padding:12px 24px;border-radius:8px;text-decoration:none;font-weight:bold;\">Teleprompter Aracı'nı Aç →</a>\n</div>",
    "faq": [
        {
                "question": "Videolarda sesim çok monoton çıkıyor, ne yapmalıyım?",
                "answer": "Monotonluğun çözümü 'vurgu' ve 'ritim'dir. Cümle içindeki en önemli kelimelerin sesini yükseltin ve cümleyi bitirirken hafifçe yavaşlayın."
        },
        {
                "question": "Kamera heyecanını nasıl yenerim?",
                "answer": "Kamerayı açın ve silmek üzere 5 dakika boyunca sadece saçmalayarak, serbest çağrışımla konuşun. Kameraya alıştıktan sonra asıl çekime geçin."
        }
    ]
  }

};

// ═══════════════════════════════════════════════════════════════════════════
// Sitemap — Sadece gerçek, indexlenebilir URL'ler
// NOT: /#anchor URL'leri Google tarafından indexlenemez, kaldırıldı.
// ═══════════════════════════════════════════════════════════════════════════
const SITEMAP_PAGES = [
  { loc: '/', changefreq: 'weekly', priority: '1.0' },
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
  // Araç sayfaları
  ...Object.keys(TOOLS_META).map((slug) => ({
    loc: `/${slug}`,
    changefreq: 'monthly',
    priority: '1.0',
  })),
];

// ═══════════════════════════════════════════════════════════════════════════
// Yardımcı: HTML'e SSR meta enjeksiyonu
// ═══════════════════════════════════════════════════════════════════════════
function injectMeta(html, meta, canonicalUrl) {
  // Title
  html = html.replace(/<title>.*?<\/title>/, `<title>${meta.title}</title>`);
  // Description
  html = html.replace(/(<meta name="description" content=")[^"]*(")/, `$1${meta.desc}$2`);
  // Canonical — doğru blog URL'ini yaz
  html = html.replace(/(<link rel="canonical" href=")[^"]*(")/, `$1${canonicalUrl}$2`);
  // OG
  html = html.replace(/(<meta property="og:title" content=")[^"]*(")/, `$1${meta.title}$2`);
  html = html.replace(/(<meta property="og:description" content=")[^"]*(")/, `$1${meta.desc}$2`);
  html = html.replace(/(<meta property="og:url" content=")[^"]*(")/, `$1${canonicalUrl}$2`);
  html = html.replace(/content="website"/, 'content="article"');
  // Twitter
  html = html.replace(/(<meta name="twitter:title" content=")[^"]*(")/, `$1${meta.title}$2`);
  html = html.replace(/(<meta name="twitter:description" content=")[^"]*(")/, `$1${meta.desc}$2`);
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

  const toolLinks = Object.keys(TOOLS_META).map(slug =>
    `<a href="/${slug}">${TOOLS_META[slug].title}</a>`
  ).join('\n    ');

  return `
<!-- SEO Internal Links — Googlebot crawl desteği -->
<nav aria-label="Sitemap Linkleri" style="position:absolute;left:-9999px;width:1px;height:1px;overflow:hidden" aria-hidden="true">
  <h2>Tüm Makaleler</h2>
  ${links}
  <h2>Ücretsiz Diksiyon Araçları</h2>
  ${toolLinks}
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
    html = html.replace('<script src="/app.js"></script>', `${seoBlock}\n  <script src="/app.js"></script>`);

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
// ROUTE: Araçlar (SPA Uygulamaları) — SSR meta injection + SEO Content
// ═══════════════════════════════════════════════════════════════════════════
app.get('/:toolSlug', (req, res, next) => {
  const { toolSlug } = req.params;
  const meta = TOOLS_META[toolSlug];

  if (!meta) {
    return next(); // Bilinmeyen slug ise SPA fallback'e düşsün
  }

  const htmlPath = path.join(__dirname, 'public', 'index.html');
  const canonicalUrl = `${SITE_URL}/${toolSlug}`;

  fs.readFile(htmlPath, 'utf8', (err, html) => {
    if (err) return res.status(500).send('Sunucu hatası.');

    // 1. Meta tagları enjekte et
    html = injectMeta(html, meta, canonicalUrl);

    // 2. WebApplication JSON-LD ekle (Rich Results)
    const schema = {
      '@context': 'https://schema.org',
      '@type': 'WebApplication',
      'name': meta.h1,
      'description': meta.desc,
      'applicationCategory': 'EducationalApplication',
      'operatingSystem': 'Any',
      'url': canonicalUrl,
      'offers': {
        '@type': 'Offer',
        'price': '0',
        'priceCurrency': 'TRY'
      }
    };
    let jsonLdScripts = `<script type="application/ld+json">${JSON.stringify(schema)}</script>`;

    let faqHtml = '';
    if (meta.faq && meta.faq.length > 0) {
      const faqSchema = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        'mainEntity': meta.faq.map(item => ({
          '@type': 'Question',
          'name': item.question,
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': item.answer
          }
        }))
      };
      jsonLdScripts += `\n    <script type="application/ld+json">${JSON.stringify(faqSchema)}</script>`;
      
      faqHtml = `
  <h2>Sıkça Sorulan Sorular</h2>
  <dl>
    ${meta.faq.map(item => `<dt><strong>${item.question}</strong></dt>\n    <dd>${item.answer}</dd>`).join('\n    ')}
  </dl>`;
    }

    html = html.replace('</head>', `${jsonLdScripts}\n</head>`);

    // 3. SEO içeriğini app.js SCRIPT'inden ÖNCE enjekte et (DOM sırası kritik!)
    const seoBlock = `
<!-- SEO Araç İçeriği (Googlebot İçin) -->
<div id="seo-tool-content" style="position:absolute;left:-9999px;width:1px;height:1px;overflow:hidden" aria-hidden="true">
  <h1>${meta.h1}</h1>
  <div class="content-body">${meta.content.replace(/\\n/g, '')}</div>${faqHtml}
</div>`;
    html = html.replace('<script src="/app.js?v=2">', `${seoBlock}\n  <script src="/app.js?v=2">`);

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
    html = html.replace(/(<link rel="canonical" href=")[^"]*(")/, `$1${canonicalUrl}$2`);
    html = html.replace(/(<meta property="og:url" content=")[^"]*(")/, `$1${canonicalUrl}$2`);

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
const keyPath = path.join(__dirname, 'certs', 'key.pem');

if (fs.existsSync(certPath) && fs.existsSync(keyPath)) {
  const https = require('https');
  const opts = { key: fs.readFileSync(keyPath), cert: fs.readFileSync(certPath) };
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