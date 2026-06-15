const fs = require('fs');

const mizahData = [];
let idCounter = 1056;

const mizahKonular = [
  { t: "Mizah ve İkna Bağlantısı", d: "Güldürmenin ikna gücü" },
  { t: "Setup-Punchline Yapısı", d: "Komedi yazımının temel formülü" },
  { t: "Rule of Three (Üçlü Kural) Komedide", d: "2 normal + 1 sürpriz" },
  { t: "Callback Tekniği", d: "Önceki espriye geri dönme" },
  { t: "Self-Deprecating Humor", d: "Kendini hedef alan espri" },
  { t: "Timing (Zamanlama)", d: "Komedide es ve bekleme" },
  { t: "Deadpan Delivery", d: "Düz yüzle komik olma" },
  { t: "Observational Comedy", d: "Günlük hayat gözlemleri" },
  { t: "Situational Humor", d: "Duruma uygun spontan espri" },
  { t: "İş Sunumlarında Mizah", d: "Profesyonel ortamda komedi sınırları" },
  { t: "Mizah Tabuları", d: "Ne zaman gülmek uygunsuz?" },
  { t: "Bombalama ve Kurtarma", d: "Espri tutmadığında toparlanma" }
];

mizahKonular.forEach((k, index) => {
  mizahData.push({
    id: idCounter++,
    slug: `mizah-${index+1}`,
    cat: 'mizah',
    emoji: '🤣',
    title: k.t,
    dur: '10 dk',
    level: 'İleri',
    freq: 'Sunum & Günlük',
    desc: `İletişimin en keskin ve tehlikeli silahı: ${k.t} (${k.d}).`,
    benefits: ['Seyircinin savunma kalkanlarını indirerek ikna olmasını kolaylaştırır', 'Hata yaptığınızda buzları eriten muazzam bir zeka göstergesidir'],
    mistakes: ['Espri yaptıktan sonra kendi esprisine herkesten önce gülmek'],
    phrase: null,
    steps: [
      `1. Kurulum (Setup): Seyirciye mantıklı bir beklenti (gerçek) verin. Zihinleri bir yöne doğru gitsin.`,
      `2. Zamanlama (Timing): Kısa bir duraksama ile beyinlerindeki beklentiyi asılı bırakın.`,
      `3. Vuruş (Punchline): Beklentiyi 180 derece tersine çeviren kelimeyi (Vuruşu) cümlenin en sonuna saklayın.`
    ],
    variations: ['🔄 Callback: Konuşmanın başında yaptığınız bir espriyi, unutturduktan 15 dakika sonra tekrar cümlenin sonuna yerleştirerek seyirciyi şaşırtın.'],
    tip: '💡 Komedi sürprizden doğar. Eğer cümleye başladığınızda sonunu tahmin edebiliyorlarsa bu bir espri değil, klişedir.',
    related: []
  });
});

const mizahSenaryolar = [
  "Rule of Three (Üçlü Kural) Kurma Simülatörü",
  "Kendini Hedef Alma (Self-Deprecation) ile Karizma Yükseltme",
  "Çöken Bir Espriyi 'Bombalama Kurtarması' ile Çevirme",
  "Günlük Gözlemden (Observational) Espri Üretme",
  "Toplantı Ortasında Sessizliği Kıran Durumsal Mizah",
  "Deadpan (Mimiksiz) Bir Şekilde İroni Yapma",
  "Patronun/Müşterinin Egosunu Çizmeden Espri Yapma",
  "Bir Soruya Beklenmedik Absürt Cevap (Punchline) Verme",
  "Sunum Başlangıcında Gülümseten 'Ice-breaker'",
  "Teknik Arızayı Komedi Şovuna Dönüştürme",
  "Zor Bir Tartışmada Tansiyonu Mizahla Düşürme",
  "Kişisel Bir Zaafı Komedi Malzemesi Yapma",
  "Kurumsal Sınırları Aşmayan Güvenli Espri Üretimi"
];

mizahSenaryolar.forEach((s, index) => {
  mizahData.push({
    id: idCounter++,
    slug: `mizah-senaryo-${index+1}`,
    cat: 'mizah',
    emoji: '🎭',
    title: `Simülasyon: ${s}`,
    dur: '12 dk',
    level: 'Uzman',
    freq: 'Simülasyon',
    desc: `${s} senaryosunda komedi zamanlamasını ve punchline vurmayı test etme.`,
    benefits: ['"Komik" olmaya çalışmadan doğal bir şekilde zeki algılanmanızı sağlar', 'Seyirciyle aranızdaki soğuk profesyonel duvarı yıkar'],
    mistakes: ['Aşırı sarkastik veya ofansif olarak itici (Toxic) bir duruma düşmek'],
    phrase: null,
    steps: [
      '1. Kendinizden Başlayın: Kendinizle dalga geçebilmek ego sahibi olmadığınızı gösterir.',
      '2. Kısa Tutun: Bir espriyi açıklamak zorunda kalıyorsanız o espri ölmüştür.',
      '3. Vuruşu Sonda Tut: Komik olan kelime her zaman cümlenin en son kelimesi olmalıdır. (Örn: "Deli değilim, annem test ettirdi." yerine "Annem test ettirdi, deli değilim." derseniz komik olmaz.)'
    ],
    variations: ['🔄 The Rule of 3 (Üçlü Kural): Alışveriş listem: Ekmek, Süt ve Antidepresan.'],
    tip: '💡 Gülümsetmek ile Kahkaha attırmak arasında büyük fark vardır. İş sunumlarında hedef daima tebessüm ettirmek olmalıdır, stand-up yapmak değil.',
    related: []
  });
});

let appjs = fs.readFileSync('public/app.js', 'utf8');
let datajs = fs.readFileSync('diksiyon-data.js', 'utf8');

const newObjectsStr = mizahData.map(ex => JSON.stringify(ex, null, 2)).join(',\n') + '\n';
appjs = appjs.replace(/\s*\];\s*$/, ',\n' + newObjectsStr + '];\n');
datajs = datajs.replace(/\s*\];\s*$/, ',\n' + newObjectsStr + '];\n');

fs.writeFileSync('public/app.js', appjs, 'utf8');
fs.writeFileSync('diksiyon-data.js', datajs, 'utf8');

console.log('25 Mizah items injected successfully. Total count should be 1080.');
