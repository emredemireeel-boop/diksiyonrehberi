const fs = require('fs');

const curutmeData = [];
let idCounter = 667;

function generateDebunks(count, contextName, emoji) {
  for(let i=1; i<=count; i++) {
    curutmeData.push({
      id: idCounter++,
      slug: `curutme-${contextName.toLowerCase().replace(/\s+/g, '-')}-${i}`,
      cat: 'curutme',
      emoji: emoji,
      title: `Çürütme Odası: ${contextName} #${i}`,
      dur: '12 dk',
      level: 'Uzman',
      freq: 'Pratik',
      desc: `${contextName} sırasında karşınıza çıkan mantıksız, manipülatif veya sahte bir argümanın adım adım nasıl çürütüleceği (Debunking) üzerine uygulamalı senaryo.`,
      benefits: ['Tartışmalarda savunmadan çıkıp rasyonel hücuma geçmenizi sağlar', 'Soğukkanlılığınızı koruyarak mantık zincirini koparmanıza yardımcı olur'],
      mistakes: ['Karşı tarafı çürütürken saldırganlaşıp haklıyken haksız duruma düşmek'],
      phrase: null,
      steps: [
        '1. Dinleme: Karşı tarafın argümanını bölmeden sonuna kadar dinleyin.',
        '2. İzolasyon: Söylenen onlarca kelime arasından asıl mantık hatasını (Çekirdeği) izole edin.',
        '3. Soru Sorma (Sokratik Yöntem): Kendi hatasını kendisinin görmesini sağlayacak basit bir soru sorun.',
        '4. Çürütme: Gerçek veriyi masaya koyup konuyu kapatın.'
      ],
      variations: ['🔄 Sokratik Sorgulama: Bu senaryoyu cevap vererek değil, sadece ardışık "Neden?" soruları sorarak çürütmeye çalışın.'],
      tip: '💡 Bir argümanı çürütürken en tehlikeli silahınız öfkeniz değil, sarsılmaz sakinliğinizdir.',
      related: []
    });
  }
}

// 1-10 İş Toplantısı Senaryoları
generateDebunks(10, 'İş Toplantısı Senaryosu', '💼');

// 11-20 Aile İçi Tartışmalar
generateDebunks(10, 'Aile İçi Tartışma', '🏠');

// 21-30 Sosyal Medya Tartışmaları
generateDebunks(10, 'Sosyal Medya Tartışması', '📱');

// 31-40 Medya Okuryazarlığı
generateDebunks(10, 'Medya Okuryazarlığı', '📰');

// 41-45 Komplo Teorisi Çürütme
generateDebunks(5, 'Komplo Teorisi Çürütme', '👽');


let appjs = fs.readFileSync('public/app.js', 'utf8');
let datajs = fs.readFileSync('diksiyon-data.js', 'utf8');

const newObjectsStr = curutmeData.map(ex => JSON.stringify(ex, null, 2)).join(',\n') + '\n';

// Replace the array ending
appjs = appjs.replace(/\s*\];\s*$/, ',\n' + newObjectsStr + '];\n');
fs.writeFileSync('public/app.js', appjs, 'utf8');

datajs = datajs.replace(/\s*\];\s*$/, ',\n' + newObjectsStr + '];\n');
fs.writeFileSync('diksiyon-data.js', datajs, 'utf8');

console.log('45 Curutme items injected successfully. Total count should be 711.');
