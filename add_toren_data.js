const fs = require('fs');

const torenData = [];
let idCounter = 757;

const konular = [
  { t: "Nikah Töreni Protokolü", d: "Gelin-damat, aileler, şahitler" },
  { t: "Nişan Adabı", d: "Söz kesme, aile ziyareti" },
  { t: "Cenaze ve Taziye Protokolü", d: "Taziye ziyareti, ne söylenmeli/söylenmemeli" },
  { t: "Bayram Ziyareti Adabı", d: "El öpme, bayram harçlığı, sıralama" },
  { t: "Doğum Günü Kutlaması", d: "Hediye, organizasyon, konuşma" },
  { t: "Baby Shower / Bebek Mevlidi", d: "Modern ve geleneksel kutlama" },
  { t: "Mezuniyet Töreni", d: "Kıyafet, aile davranışı, fotoğraf" },
  { t: "Ödül Töreni Protokolü", d: "Sahneye çıkış, konuşma, teşekkür" },
  { t: "İş Yemeği Organizasyonu", d: "Mekan seçimi, oturma düzeni, hesap" },
  { t: "Kokteyl Parti Kuralları", d: "Dolaşma, tanışma, ayrılma" }
];

// 1-10 Teori
konular.forEach((k, index) => {
  torenData.push({
    id: idCounter++,
    slug: `toren-${index+1}`,
    cat: 'toren',
    emoji: '🥂',
    title: k.t,
    dur: '8 dk',
    level: 'Başlangıç',
    freq: 'Görgü',
    desc: `${k.t} için sosyal kurallar, yazısız protokoller ve dikkat edilmesi gerekenler: ${k.d}.`,
    benefits: ['Toplum içinde prestij kazandırır', 'Özel ve hassas anlarda gaf yapmanızı engeller'],
    mistakes: ['Etkinliğin "ana karakterinden" (gelin, ödül alan vb.) rol çalmaya çalışmak'],
    phrase: null,
    steps: [
      `1. Ön Hazırlık: Etkinliğin formatına uygun kılık kıyafet ve hediyeyi hazırlayın.`,
      `2. Katılım: Etkinlik alanında hiyerarşiye (yaş, makam veya günün anlamı) uygun pozisyon alın.`,
      `3. İletişim: Odak noktasının siz olmadığını bilerek kısa, nazik ve tebrik/taziye odaklı iletişim kurun.`
    ],
    variations: ['🔄 Gözlem: Katıldığınız son etkinlikte kimlerin bu kuralları ihlal ettiğini düşünün.'],
    tip: '💡 Törenlerde ve özel günlerde en iyi misafir, varlığıyla huzur veren ama hiçbir zaman dikkati tamamen üzerine çekmeyendir.',
    related: []
  });
});

// 11-20 Durum Senaryoları (Simülatör)
const senaryolar = [
  "Cenaze Evinde Gaf Krizi", "İş Yemeğinde Hesap Ödeme Çatışması", "Düğünde Takı Töreni Kaosu", 
  "Ödül Töreninde Unutulan İsim", "Kokteylde Yalnız Kalma Stresi", 
  "Bayram Ziyaretinde Siyasi Tartışma", "Nişanda Aileler Arası Gerilim", 
  "Mezuniyette Fotoğraf Krizi", "Yanlış Hediyenin Verildiği Doğum Günü", "Baby Shower'da Kültür Çatışması"
];

senaryolar.forEach((s, index) => {
  torenData.push({
    id: idCounter++,
    slug: `toren-senaryo-${index+1}`,
    cat: 'toren',
    emoji: '🎭',
    title: `Simülasyon: ${s}`,
    dur: '12 dk',
    level: 'İleri',
    freq: 'Senaryo',
    desc: `${s} sırasında ortaya çıkan sosyal krizin incelenmesi ve bu krizin zarafetle nasıl çözüleceği.`,
    benefits: ['Kriz anlarında sosyal zekanızı (EQ) keskinleştirir', 'Potansiyel rezaletleri önceden öngörme yeteneği verir'],
    mistakes: ['Krize panikle veya aşırı tepki vererek karşılık vermek'],
    phrase: null,
    steps: [
      '1. Olayı İncele: Durumun neresinde sınır ihlali (Boundary violation) yapıldığını bulun.',
      '2. Zaman Kazan: Ani bir tepki vermek yerine derin bir nefes alın ve sessizliği kullanın.',
      '3. Zarafetle Çöz: Kimseyi küçük düşürmeden, mizah veya ince bir yönlendirmeyle konuyu kapatın.'
    ],
    variations: ['🔄 Rol Yapma: Ayna karşısında bu krizi soğukkanlı bir ifadeyle savuşturduğunuzu hayal edin.'],
    tip: '💡 Sosyal krizleri çözen şey yüksek sesli haklı çıkma çabası değil, düşük sesli zarif bir yönlendirmedir.',
    related: []
  });
});

let appjs = fs.readFileSync('public/app.js', 'utf8');
let datajs = fs.readFileSync('diksiyon-data.js', 'utf8');

const newObjectsStr = torenData.map(ex => JSON.stringify(ex, null, 2)).join(',\n') + '\n';

appjs = appjs.replace(/\s*\];\s*$/, ',\n' + newObjectsStr + '];\n');
fs.writeFileSync('public/app.js', appjs, 'utf8');

datajs = datajs.replace(/\s*\];\s*$/, ',\n' + newObjectsStr + '];\n');
fs.writeFileSync('diksiyon-data.js', datajs, 'utf8');

console.log('20 Toren items injected successfully. Total count should be 776.');
