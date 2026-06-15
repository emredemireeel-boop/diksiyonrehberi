const fs = require('fs');

const dogaclamaData = [];
let idCounter = 981;

const dogaclamaKonular = [
  { t: "'Yes, And...' Kuralı", d: "İmprov'un temel prensibi" },
  { t: "Doğaçlama Konu Üretme", d: "Herhangi bir konuda anında konuşma" },
  { t: "1 Dakika Doğaçlama Challenge", d: "Rastgele kelimeyle 60 sn konuşma" },
  { t: "3 Kelime ile Hikaye", d: "3 rastgele kelimeden hikaye kurma" },
  { t: "Soru Cevap Doğaçlama", d: "Hazırlıksız soruları güçlü yanıtlama" },
  { t: "Word Association (Kelime Çağrışımı)", d: "Hızlı düşünme ve akış pratiği" },
  { t: "Karakter Geçişi", d: "Farklı karakterlere anında bürünme" },
  { t: "Duygu Geçişi", d: "Aynı metni farklı duygularla doğaçlama" },
  { t: "Sahne Ortağıyla Doğaçlama", d: "İki kişilik improv egzersizleri" },
  { t: "Freeze Tag (Donma Oyunu)", d: "Sahne anında pozu değiştirme" },
  { t: "Elveda Konuşması Doğaçlama", d: "Spontan veda/teşekkür konuşması" },
  { t: "Tost Kaldırma Doğaçlama", d: "Anlık kutlama konuşması" }
];

dogaclamaKonular.forEach((k, index) => {
  dogaclamaData.push({
    id: idCounter++,
    slug: `dogaclama-${index+1}`,
    cat: 'dogaclama',
    emoji: '🎭',
    title: k.t,
    dur: '10 dk',
    level: 'İleri',
    freq: 'Spontan',
    desc: `Sahne performansında anlık krizleri fırsata çeviren yetenek: ${k.t} (${k.d}).`,
    benefits: ['Ezber unuttuğunuzda paniklememenizi sağlar', 'İnsanlarla olan günlük sohbetlerde zekanızı (Quick wit) keskinleştirir'],
    mistakes: ['"Hayır ama..." (No, but) diyerek iletişimin ve yaratıcılığın önünü kesmek'],
    phrase: null,
    steps: [
      `1. Kabul Et (Yes): Karşınızdaki (Veya olay) size ne sunuyorsa inkar etmeyin, gerçekliğini kabul edin.`,
      `2. Üstüne Ekle (And): Kabul ettiğiniz gerçekliğin üzerine kendi yaratıcı fikrinizi ekleyerek hikayeyi büyütün.`,
      `3. Akışa Güven: Mantıklı olmaya çalışmayın, sadece ritmi bozmamaya odaklanın.`
    ],
    variations: ['🔄 Çağrışım Zinciri: Bir kelime söyleyin, ardından aklınıza gelen ilk kelimeyi peşine ekleyerek 10 kelimelik bir zincir kurun.'],
    tip: '💡 Hayat tamamen bir improvizasyondur (doğaçlamadır). Senaryosu olan tek şey tiyatrodur, geri kalan her an doğaçlama yaşanır.',
    related: []
  });
});

const dogaclamaSenaryolar = [
  "Bozulan Bir Slayt Sunumunda İzleyiciyi Eğlendirme",
  "Çok Absürt Bir Soruyu Ciddiyetle Yanıtlama (Politikacı Taktikleri)",
  "Hazırlıksız Ödül Alma Konuşması",
  "Düğünde Aniden Mikrofon Uzatıldığında Konuşma",
  "Rastgele 3 Eşyayı Satmaya Çalışma (Satış Doğaçlaması)",
  "Uzaylılara Dünyayı Anlatma (Perspektif Değişimi)",
  "Asansörde Patronla Yalnız Kalınca 'Small Talk'",
  "İstifa Eden İş Arkadaşına Ayaküstü Veda Konuşması",
  "Sahnedeki Sessizliği (Dead Air) Kırmak",
  "Seyirciden Gelen Agresif Bir Yorumu Mizaha Çevirme",
  "Gündemle Alakasız 3 Kelimeden Kurumsal Ders Çıkarma",
  "Kameraya Karşı 60 Saniye Kesintisiz 'Büyük Patlama' Anlatımı",
  "Mülakatta Bilmediğin Bir Terimi Yaratıcı Bir Şekilde 'Sallamak'"
];

dogaclamaSenaryolar.forEach((s, index) => {
  dogaclamaData.push({
    id: idCounter++,
    slug: `dogaclama-senaryo-${index+1}`,
    cat: 'dogaclama',
    emoji: '💡',
    title: `Simülasyon: ${s}`,
    dur: '12 dk',
    level: 'Uzman',
    freq: 'Simülasyon',
    desc: `${s} senaryosunda zihin kaslarınızı esnetme pratiği.`,
    benefits: ['Adrenalin anında beynin donmasını (Brain freeze) engeller', 'Özgüveninizi dışarıdan yıkılamaz bir seviyeye taşır'],
    mistakes: ['Mükemmel kelimeyi bulmaya çalışırken duraksamak (Önemli olan akıştır, mükemmellik değil)'],
    phrase: null,
    steps: [
      '1. İlk Gelen Fikri Kucakla: İç sansürcünüzü susturun.',
      '2. Göz Teması ve Beden: Beyniniz kelime ararken bedeninizi kullanın (Sahne hakimiyeti).',
      '3. Güçlü Bir Bitiş (Punchline): Nerede duracağınızı bilin. Vurgulu bir cümleyle bitirip mikrofonu bırakın.'
    ],
    variations: ['🔄 Kelime Yasaklama Oyunu: En çok kullandığınız 3 dolgu kelimesini (Eee, Şey, Yani) kullanmadan 2 dakika konuşun.'],
    tip: '💡 Seyirci sizin ne planladığınızı bilmez. Eğer bir hata yaparsanız ve bunu bir şov parçasıymış gibi sunarsanız, kimse hata olduğunu anlamaz.',
    related: []
  });
});

let appjs = fs.readFileSync('public/app.js', 'utf8');
let datajs = fs.readFileSync('diksiyon-data.js', 'utf8');

const newObjectsStr = dogaclamaData.map(ex => JSON.stringify(ex, null, 2)).join(',\n') + '\n';
appjs = appjs.replace(/\s*\];\s*$/, ',\n' + newObjectsStr + '];\n');
datajs = datajs.replace(/\s*\];\s*$/, ',\n' + newObjectsStr + '];\n');

fs.writeFileSync('public/app.js', appjs, 'utf8');
fs.writeFileSync('diksiyon-data.js', datajs, 'utf8');

console.log('25 Doğaçlama items injected successfully. Total count should be 1005. MILESTONE CROSSED!');
