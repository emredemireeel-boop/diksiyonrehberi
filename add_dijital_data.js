const fs = require('fs');

const dijitalData = [];
let idCounter = 826; // since mobbing took 801-825

const dijitalKonular = [
  { t: "Social Engineering (Sosyal Mühendislik)", d: "Psikolojik hack" },
  { t: "Phishing Psikolojisi", d: "Aciliyet ve korku ile tuzak" },
  { t: "Dark Patterns (Karanlık Tasarım)", d: "Web/app manipülatif UX" },
  { t: "FOMO Manipülasyonu", d: "Kaçırma korkusu üzerinden satış" },
  { t: "Algoritma Bağımlılığı", d: "Dopamin döngüsü ve scroll bağımlılığı" },
  { t: "Deepfake Farkındalığı", d: "Yapay zeka ile oluşturulan sahte içerik" },
  { t: "Online Gaslighting", d: "Dijital ortamda gerçeklik bozma" },
  { t: "Cyberbullying Savunma", d: "Dijital zorbalığa karşı strateji" },
  { t: "Astroturfing (Sahte Halk Hareketi)", d: "Organize sahte sosyal medya kampanyaları" },
  { t: "Review Manipulation", d: "Sahte yorum ve değerlendirme" }
];

dijitalKonular.forEach((k, index) => {
  dijitalData.push({
    id: idCounter++,
    slug: `dijital-${index+1}`,
    cat: 'dijital',
    emoji: '📱',
    title: k.t,
    dur: '8 dk',
    level: 'Orta',
    freq: 'Teknoloji',
    desc: `İnternet ve uygulamalardaki ${k.t} yönteminin psikolojik altyapısı: ${k.d}.`,
    benefits: ['Dijital dünyadaki görünmez tuzaklara karşı farkındalık kazandırır', 'Veri ve mahremiyet (Privacy) bilincini artırır'],
    mistakes: ['"Ben asla kanmam" diyerek aşırı özgüvenle güvenlik önlemlerini hiçe saymak'],
    phrase: null,
    steps: [
      `1. Şüphe (Zero Trust): Dijital ortamdaki aciliyet bildiren her mesajı (Son 1 saat!) sorgulayın.`,
      `2. Doğrulama: URL'leri, gönderici adreslerini ve kaynakları çapraz kontrol (cross-check) edin.`,
      `3. Dijital Mesafe: Ekran sürenizi kısıtlayarak algoritmanın sizi "Dopamin Döngüsü"ne sokmasını engelleyin.`
    ],
    variations: ['🔄 Detoks: 24 saat boyunca sosyal medya algoritmalarından (keşfet/reels) uzak durun.'],
    tip: '💡 Eğer bir ürün veya hizmet tamamen ücretsizse, muhtemelen satılan ürün "Sizsiniz" (Verilerinizdir).',
    related: []
  });
});

const dijitalSenaryolar = [
  "Fake Çekiliş ve Oltalama Tuzağı", "Sosyal Medyada Linç (Cancel Culture)",
  "Sahte Müşteri Yorumlarını Tespit", "E-Ticarette Gizli Abonelik Tuzağı (Dark Pattern)",
  "Acil Para İsteyen Arkadaş Mesajı (Hack)", "Deepfake Video Analizi",
  "Troll Ordusu (Bot) Saldırısı", "Kripto Para FOMO Tuzağı",
  "Sahte Bağış Kampanyası Manipülasyonu", "Algoritmanın Yankı Fanusu (Echo Chamber) Etkisi",
  "Zehirli Oyun (Toxic Gaming) Zorbalığı", "Influencer Gizli Reklam Tuzağı",
  "Sözde 'Size Özel' İndirim Yalanı", "Sosyal Medya Onay (Beğeni) Bağımlılığı Kırılması",
  "Sahte Flört (Catfishing) Tuzağı"
];

dijitalSenaryolar.forEach((s, index) => {
  dijitalData.push({
    id: idCounter++,
    slug: `dijital-senaryo-${index+1}`,
    cat: 'dijital',
    emoji: '🕵️',
    title: `Simülasyon: ${s}`,
    dur: '10 dk',
    level: 'İleri',
    freq: 'Simülasyon',
    desc: `${s} tuzağına düştüğünüzde veya düşmek üzereyken uygulanacak dijital kaçış planı.`,
    benefits: ['Dijital okuryazarlığınızı (Digital Literacy) üst seviyeye taşır', 'Online dolandırıcılıklardan korur'],
    mistakes: ['Durumu anlamadan panikle linklere tıklamak veya agresif cevaplar yazmak'],
    phrase: null,
    steps: [
      '1. Dur (Stop): Aciliyet hissi yaratılan durumlarda ekrana dokunmayı bırakın.',
      '2. Düşün (Think): "Bu mesaj/istek mantıklı mı? URL gerçek mi? Neden bu kadar acil?" diye sorun.',
      '3. Teyit Et (Verify): Kişiye veya kuruma farklı bir kanaldan (telefon, resmi site) ulaşıp doğrulayın.'
    ],
    variations: ['🔄 Aile İçi Test: Bu senaryoyu yaşlı aile bireylerinize anlatarak onların dijital güvenliğini artırın.'],
    tip: '💡 Sosyal mühendislik donanımı değil, insan psikolojisini (korku, merak, açgözlülük) hackler.',
    related: []
  });
});

let appjs = fs.readFileSync('public/app.js', 'utf8');
let datajs = fs.readFileSync('diksiyon-data.js', 'utf8');

const newObjectsStr2 = dijitalData.map(ex => JSON.stringify(ex, null, 2)).join(',\n') + '\n';
appjs = appjs.replace(/\s*\];\s*$/, ',\n' + newObjectsStr2 + '];\n');
datajs = datajs.replace(/\s*\];\s*$/, ',\n' + newObjectsStr2 + '];\n');

fs.writeFileSync('public/app.js', appjs, 'utf8');
fs.writeFileSync('diksiyon-data.js', datajs, 'utf8');

console.log('25 Dijital items injected successfully. Total count should be 850.');
