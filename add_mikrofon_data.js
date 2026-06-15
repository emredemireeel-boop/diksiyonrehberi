const fs = require('fs');

const mikrofonData = [];
let idCounter = 1081;

const mikrofonKonular = [
  { t: "Mikrofon Türleri ve Seçimi", d: "Dinamik, Condenser, Lavalier farkları" },
  { t: "Mikrofon Mesafesi ve Açısı", d: "Proximity effect ve doğru pozisyonlama" },
  { t: "Pop Filter Kullanımı", d: "Patlayıcı seslerden korunma" },
  { t: "Ses Kartı ve Audio Interface", d: "Doğru ekipman seçimi" },
  { t: "Akustik Ortam Hazırlama", d: "Ev ortamında stüdyo yaratma" },
  { t: "Ses Kayıt Yazılımları", d: "Audacity, Adobe Audition, GarageBand" },
  { t: "Kayıt Sonrası Temel Düzenleme", d: "Noise reduction, normalize, compress" },
  { t: "Telefon ile Profesyonel Kayıt", d: "Akıllı telefon kayıt ipuçları" },
  { t: "Stüdyo Mikrofon Etiketi", d: "Profesyonel kayıt stüdyosu davranışları" },
  { t: "Kendi Sesini Dinleme Psikolojisi", d: "Neden kendi sesimizi beğenmeyiz?" },
  { t: "Voice Over Demo Reel Hazırlama", d: "Seslendirme portfolyosu oluşturma" },
  { t: "USB vs XLR Mikrofon Karşılaştırma", d: "Amatör vs profesyonel ekipman" },
  { t: "Çoklu Mikrofon Tekniği", d: "Panel, podcast vb. için çoklu mikrofon kurulumu" },
  { t: "EQ ile Ses Şekillendirme", d: "Equalizer ile ses frekanslarını optimize etme" },
  { t: "Ses Dosyası Formatları", d: "WAV, MP3, FLAC farkları ve kullanım alanları" }
];

mikrofonKonular.forEach((k, index) => {
  mikrofonData.push({
    id: idCounter++,
    slug: `mikrofon-${index+1}`,
    cat: 'mikrofon',
    emoji: '🎙️',
    title: k.t,
    dur: '10 dk',
    level: 'Orta',
    freq: 'Stüdyo',
    desc: `Sesinizi dijital dünyaya kusursuz aktarmanın yolları: ${k.t} (${k.d}).`,
    benefits: ['Ses kalitenizi anında "profesyonel radyo" seviyesine çıkarır', 'Pahalı ekipman almadan elinizdekilerden maksimum verim almanızı sağlar'],
    mistakes: ['Condenser mikrofonu yankılı ve boş bir odada kullanmak', 'Mikrofona çok yaklaşıp nefes patlamalarına (Pop) neden olmak'],
    phrase: null,
    steps: [
      `1. Doğru Mikrofon: Çok gürültülü bir eviniz varsa Condenser değil, Dinamik mikrofon tercih edin.`,
      `2. Mesafe Ayarı: Mikrofon ile ağzınız arasında ortalama 'bir karış' veya '4 parmak' (yaklaşık 10-15 cm) mesafe bırakın.`,
      `3. Axis (Açı): Mikrofonun tam karşısına değil, hafif çaprazına (Off-axis) geçin. Böylece P ve B seslerindeki patlamalar direkt mikrofona gitmez.`
    ],
    variations: ['🔄 Proximity Effect: Dinamik bir mikrofona çok yaklaştığınızda (1-2 cm), sesinizin bas (kalın) frekansları artar. Buna yakınlık etkisi denir. Gece radyocusu sesi yapmak için kullanılır.'],
    tip: '💡 Telefonunuzla kayıt alıyorsanız, telefonu masanın üstüne koymayın; elinizde tutarak mikrofonunu (alt kısım) ağzınıza 15 cm uzaklıkta hafif açılı tutun. Eğer yankı varsa bir dolabın içine (kıyafetlerin arasına) doğru konuşarak kaydedin.',
    related: []
  });
});

let appjs = fs.readFileSync('public/app.js', 'utf8');
let datajs = fs.readFileSync('diksiyon-data.js', 'utf8');

const newObjectsStr = mikrofonData.map(ex => JSON.stringify(ex, null, 2)).join(',\n') + '\n';
appjs = appjs.replace(/\s*\];\s*$/, ',\n' + newObjectsStr + '];\n');
datajs = datajs.replace(/\s*\];\s*$/, ',\n' + newObjectsStr + '];\n');

fs.writeFileSync('public/app.js', appjs, 'utf8');
fs.writeFileSync('diksiyon-data.js', datajs, 'utf8');

console.log('15 Mikrofon items injected successfully. Total count should be 1095.');
