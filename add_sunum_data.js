const fs = require('fs');

const sunumData = [];
let idCounter = 1006;

const sunumKonular = [
  { t: "Slayt Tasarımı 101", d: "Az metin, çok görsel prensibi" },
  { t: "Pecha Kucha (20x20) Formatı", d: "20 slayt x 20 saniye" },
  { t: "Ignite Formatı (5 dk)", d: "Hızlı ve vurucu sunum" },
  { t: "Steve Jobs Sunum Tekniği", d: "Apple keynote analizi" },
  { t: "Data Storytelling", d: "Veriyi hikayeye dönüştürme" },
  { t: "Renk ve Font Seçimi", d: "Sunum estetiği" },
  { t: "Animasyon Kullanımı", d: "Ne zaman ve nasıl animasyon" },
  { t: "Slayt Geçiş Stratejisi", d: "İçerik akışı ve pacing" },
  { t: "Sıfır Slayt Sunumu", d: "Slayt olmadan güçlü sunum" },
  { t: "Interaktif Sunum Araçları", d: "Mentimeter, Slido, Poll" },
  { t: "Demo/Ürün Tanıtım Sunumu", d: "Canlı demo gösterimi" },
  { t: "Whiteboard Sunum", d: "Beyaz tahtada çizim ile anlatım" }
];

sunumKonular.forEach((k, index) => {
  sunumData.push({
    id: idCounter++,
    slug: `sunum-${index+1}`,
    cat: 'sunum',
    emoji: '📊',
    title: k.t,
    dur: '10 dk',
    level: 'Orta',
    freq: 'Sunum',
    desc: `Etkili bir sahne performansı için görsel destek tasarımı: ${k.t} (${k.d}).`,
    benefits: ['Seyircinin okumak yerine sizi dinlemesini sağlar (Bilişsel yükü azaltır)', 'Profesyonel, modern ve akılda kalıcı bir imaj (Steve Jobs tarzı) yaratır'],
    mistakes: ['Slaytı bir "Teleprompter" gibi kullanıp ekrandaki uzun metinleri seyirciye okumak'],
    phrase: null,
    steps: [
      `1. 6x6 Kuralı: Bir slaytta en fazla 6 satır ve her satırda en fazla 6 kelime olmalıdır.`,
      `2. Görsel Üstünlüğü: Beyin görselleri metinlerden 60.000 kat daha hızlı işler. Yazı yerine yüksek kaliteli ikon veya fotoğraf kullanın.`,
      `3. Kontrast: Arka plan ile yazı rengi arasında yüksek kontrast olsun (Örn: Koyu gri arka planda beyaz metin).`
    ],
    variations: ['🔄 Slayt Silme Egzersizi: Mevcut sunumunuzdaki slaytların %50\'sini silerek anlatmayı deneyin.'],
    tip: '💡 İnsanlar aynı anda hem okuyup hem dinleyemezler. Slaytınız sizin not defteriniz değildir, seyirciye verdiğiniz bir duygusal uyarandır.',
    related: []
  });
});

const sunumSenaryolar = [
  "Pecha Kucha (20x20) Hız Simülasyonu",
  "Sıkıcı Bir Veriyi (Data Storytelling) Hikayeleştirme",
  "Steve Jobs Tarzı 'One More Thing' Anı Kurgulama",
  "Ignite (5 Dakika) Sunum Zamanlaması",
  "Tek Bir Görselle (Sıfır Metin) 3 Dakika Konuşma",
  "Mentimeter ile İnteraktif Buz Kırıcı (Ice-breaker) Kurgusu",
  "Canlı Demo Sırasında Yaşanan Çökmeyi Yönetme",
  "Beyaz Tahta (Whiteboard) Çizimiyle Konsept Anlatımı",
  "Yatırımcı Sunumunda (Pitch Deck) Pacing (Tempo) Ayarı",
  "Renk Psikolojisiyle Seyirciyi Yönlendirme (Kırmızı vs Mavi)",
  "Özet Slaytını Unutulmaz Bir Punchline'a Dönüştürme",
  "Ekranda Beliren Verilerle Eşzamanlı (Senkron) Konuşma",
  "Karanlık Mod (Dark Mode) Slayt Tasarımı ve Sahne Işıkları"
];

sunumSenaryolar.forEach((s, index) => {
  sunumData.push({
    id: idCounter++,
    slug: `sunum-senaryo-${index+1}`,
    cat: 'sunum',
    emoji: '🎯',
    title: `Simülasyon: ${s}`,
    dur: '15 dk',
    level: 'İleri',
    freq: 'Simülasyon',
    desc: `${s} senaryosunda modern sunum tekniklerini uygulama.`,
    benefits: ['Sunum akışınızı ve zaman yönetiminizi (Pacing) kusursuzlaştırır', 'Veri ve istatistiklerin sıkıcı algısını yıkarak onları silaha dönüştürür'],
    mistakes: ['Slayt geçişlerinde ekrana dönüp ne yazdığına bakmak (Seyirciyle göz temasını kesmek)'],
    phrase: null,
    steps: [
      '1. Ana Fikri (Takeaway) Belirle: Seyircinin salondan çıkarken hatırlamasını istediğiniz tek bir cümleyi seçin.',
      '2. Zaman Sınırı (Timeboxing): Pecha Kucha veya Ignite formatlarıyla kendinizi zaman baskısı altında akıcı konuşmaya zorlayın.',
      '3. Sürpriz Elementi: Sunumun ortasında beklenmedik bir görsel, veri veya soru ile dikkati tekrar zirveye çekin.'
    ],
    variations: ['🔄 10-20-30 Kuralı: Sunumlarınızı (Guy Kawasaki kuralı) 10 slayt, 20 dakika ve minimum 30 punto font ile yapın.'],
    tip: '💡 Bir sunumun ne kadar iyi olduğu, cihaz bozulup projeksiyon kapandığında anlatmaya devam edip edemediğinizle ölçülür.',
    related: []
  });
});

let appjs = fs.readFileSync('public/app.js', 'utf8');
let datajs = fs.readFileSync('diksiyon-data.js', 'utf8');

const newObjectsStr = sunumData.map(ex => JSON.stringify(ex, null, 2)).join(',\n') + '\n';
appjs = appjs.replace(/\s*\];\s*$/, ',\n' + newObjectsStr + '];\n');
datajs = datajs.replace(/\s*\];\s*$/, ',\n' + newObjectsStr + '];\n');

fs.writeFileSync('public/app.js', appjs, 'utf8');
fs.writeFileSync('diksiyon-data.js', datajs, 'utf8');

console.log('25 Sunum items injected successfully. Total count should be 1030.');
