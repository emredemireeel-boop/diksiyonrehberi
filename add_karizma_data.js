const fs = require('fs');

const karizmaData = [];
let idCounter = 881;

const karizmaKonular = [
  { t: "Karizma Nedir? 3 Bileşen", d: "Presence, Power, Warmth" },
  { t: "İlk İzlenim (İlk 7 Saniye)", d: "Karşılaşma anında imaj oluşturma" },
  { t: "Small Talk'tan Deep Talk'a", d: "Yüzeysel sohbetten derin bağ kurmaya" },
  { t: "İsim Hatırlama Teknikleri", d: "Hafıza ve sosyal zeka" },
  { t: "Aktif Dinleme Sanatı", d: "Gerçekten dinlediğinizi göstermek" },
  { t: "Hikaye ile Bağ Kurma", d: "Kişisel anekdotlarla güven oluşturma" },
  { t: "Espri ve Mizah Zamanlaması", d: "Komik olmak vs. uygunsuz olmak" },
  { t: "Kompliman Verme ve Alma", d: "Samimi iltifatın sanatı" },
  { t: "İtiraz Etme Sanatı", d: "Karşı çıkarken zarif kalma" },
  { t: "Ağ Kurma (Networking)", d: "Kaliteli profesyonel bağlantı oluşturma" }
];

karizmaKonular.forEach((k, index) => {
  karizmaData.push({
    id: idCounter++,
    slug: `karizma-${index+1}`,
    cat: 'karizma',
    emoji: '✨',
    title: k.t,
    dur: '10 dk',
    level: 'Orta',
    freq: 'Sosyal Zeka',
    desc: `Karizmatik liderliğin ve etkin iletişimin kilit noktası: ${k.t} (${k.d}).`,
    benefits: ['Bulunduğunuz ortamda "Aura" yaratmanızı sağlar', 'İnsanların size güvenmesini ve sizinle bağ kurmasını kolaylaştırır'],
    mistakes: ['Karizmayı "Çok Konuşmak" veya "Sürekli Komik Olmak" sanmak (Gerçek karizma dinlemektir)'],
    phrase: null,
    steps: [
      `1. Varlık (Presence): O an orada olun. Telefonu bırakın, geçmişi/geleceği düşünmeyi bırakın.`,
      `2. Sıcaklık (Warmth): Göz teması ve samimi bir gülümsemeyle karşı tarafa değer verdiğinizi hissettirin.`,
      `3. Güç (Power): Postürünüzü dik tutarak statünüzü ve özgüveninizi koruyun.`
    ],
    variations: ['🔄 Günlük Uygulama: Bugün tanıştığınız 3 kişinin ismini hafızaya kazıyın ve sohbeti isimleriyle bitirin.'],
    tip: '💡 Karizma doğuştan gelmez, öğrenilebilir bir davranıştır. İnsanlar onlara ne söylediğinizi unutur, onlara nasıl hissettirdiğinizi asla unutmaz.',
    related: []
  });
});

const karizmaSenaryolar = [
  "Steve Jobs'un Sessizlik (Pause) Kullanımı", "Barack Obama'nın 'Warmth' (Sıcaklık) Tekniği",
  "Asansörde Patronla Small Talk", "Yeni Bir Ortamda Yabancılarla Tanışma",
  "Bir İltifatı Şıkça Kabul Etme (Zarafet)", "Utangaç Birini Sohbete Dahil Etme",
  "Tartışmada Haklıyken Bile Nazik Kalma", "Kriz Anında Güven Veren Ses Tonu (Power)",
  "Konuyu Sıkıcı Bir Yerden Derinliğe Çekme (Deep Talk)", "Networking'de Akılda Kalıcı Veda Etme",
  "Hikaye Anlatırken 'Kanca' (Hook) Atma", "Ortamdaki Enerji Düşünce Modu Yükseltme",
  "Göz Temasıyla Karşı Tarafa 'Değerlisin' Mesajı Verme", "Kötü Bir Espriyi Zarafetle Toparlama",
  "Beden Dili ve Karizma Uyumu (Aura Çalışması)"
];

karizmaSenaryolar.forEach((s, index) => {
  karizmaData.push({
    id: idCounter++,
    slug: `karizma-senaryo-${index+1}`,
    cat: 'karizma',
    emoji: '🎬',
    title: `Simülasyon: ${s}`,
    dur: '15 dk',
    level: 'İleri',
    freq: 'Simülasyon',
    desc: `${s} senaryosunda liderlik aurasını ve karizmatik bağı (Connection) kurma stratejisi.`,
    benefits: ['Stresli veya yabancı ortamlarda parlamanızı sağlar', 'Karşı tarafın bilinçaltında size karşı sempati uyandırır'],
    mistakes: ['Etkilemeye çalışırken (Try-hard) doğal olmayan hareketler yapmak'],
    phrase: null,
    steps: [
      '1. Durum Analizi: Ortamın enerjisini ve karşınızdakinin ihtiyacını okuyun.',
      '2. Sıcaklık ve Güç Dengesi: Eğer çok otoriter (Power) göründüyseniz, gülümseme (Warmth) ile dengeleyin.',
      '3. Akılda Kalıcılık: Ortamdan ayrılırken kişisel ve samimi bir kapanış yapın.'
    ],
    variations: ['🔄 Ayna Egzersizi: Bir hikaye anlatırken "Sıcaklık" (Gülümseme) ve "Güç" (Kesin Ses Tonu) arasındaki geçişleri çalışın.'],
    tip: '💡 İnsanları kendinize hayran bırakmaya çalışmayın. İnsanların "Kendi içlerindeki" güzelliği görmelerine yardımcı olun. Gerçek karizma budur.',
    related: []
  });
});

let appjs = fs.readFileSync('public/app.js', 'utf8');
let datajs = fs.readFileSync('diksiyon-data.js', 'utf8');

const newObjectsStr = karizmaData.map(ex => JSON.stringify(ex, null, 2)).join(',\n') + '\n';
appjs = appjs.replace(/\s*\];\s*$/, ',\n' + newObjectsStr + '];\n');
datajs = datajs.replace(/\s*\];\s*$/, ',\n' + newObjectsStr + '];\n');

fs.writeFileSync('public/app.js', appjs, 'utf8');
fs.writeFileSync('diksiyon-data.js', datajs, 'utf8');

console.log('25 Karizma items injected successfully. Total count should be 905.');
