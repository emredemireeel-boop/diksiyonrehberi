const fs = require('fs');

const dedektifData = [];
let idCounter = 617;

function generateCases(count, contextName, emoji) {
  for(let i=1; i<=count; i++) {
    dedektifData.push({
      id: idCounter++,
      slug: `dedektif-${contextName.toLowerCase().replace(/\s+/g, '-')}-${i}`,
      cat: 'safsata',
      emoji: emoji,
      title: `Dedektif Dosyası: ${contextName} Vakası #${i}`,
      dur: '10 dk',
      level: 'İleri',
      freq: 'Pratik',
      desc: `${contextName} ortamında gerçekleşen manipülatif bir diyaloğun incelenmesi. Mantık hatasını (Safsatayı) bulun ve çürütün.`,
      benefits: ['Baskı altında hızlı analiz yapma yeteneği kazandırır', 'Gerçek hayat senaryolarında manipülasyonu anında fark etmenizi sağlar'],
      mistakes: ['Duygusal tepki verip tartışmanın içine çekilmek'],
      phrase: null,
      steps: [
        '1. Olayı İncele: Karşı tarafın kurduğu cümleyi ve bağlamı analiz edin.',
        '2. Hatayı Bul: Kullanılan mantık hatasının (Ad Hominem, Straw Man vb.) adını koyun.',
        '3. Çürütme (Rebuttal): Mantık hatasını ifşa ederek tartışmayı rasyonel zemine geri çekin.'
      ],
      variations: ['🔄 Dedektiflik Pratiği: Bu senaryoyu sesli bir şekilde arkadaşınıza okuyun ve onun da hatayı bulmasını isteyin.'],
      tip: '💡 Gerçek hayatta safsatalar her zaman ders kitaplarındaki gibi net değildir, kelime oyunlarının arasına gizlenir.',
      related: []
    });
  }
}

// 1-10 TV Tartışma Programı Safsataları
generateCases(10, 'TV Tartışma Programı', '📺');

// 11-20 Sosyal Medya Trol Safsataları
generateCases(10, 'Sosyal Medya Trol', '📱');

// 21-30 Reklam ve Pazarlama Safsataları
generateCases(10, 'Reklam ve Pazarlama', '🛒');

// 31-40 Siyasi Söylem Safsataları
generateCases(10, 'Siyasi Söylem', '🏛️');

// 41-50 Günlük Hayat ve İş Yeri Safsataları
generateCases(10, 'Günlük Hayat ve İş Yeri', '💼');

let appjs = fs.readFileSync('public/app.js', 'utf8');
let datajs = fs.readFileSync('diksiyon-data.js', 'utf8');

const newObjectsStr = dedektifData.map(ex => JSON.stringify(ex, null, 2)).join(',\n') + '\n';

// Replace the array ending
appjs = appjs.replace(/\s*\];\s*$/, ',\n' + newObjectsStr + '];\n');
fs.writeFileSync('public/app.js', appjs, 'utf8');

datajs = datajs.replace(/\s*\];\s*$/, ',\n' + newObjectsStr + '];\n');
fs.writeFileSync('diksiyon-data.js', datajs, 'utf8');

console.log('50 Dedektif Vakası injected successfully. Total count should be 666.');
