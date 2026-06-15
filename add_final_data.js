const fs = require('fs');

const finalData = [];
let idCounter = 392;

// 1. KONUŞMA TÜRLERİ (30 Items: 15 Theory + 15 Builder)
const konusmaTurleri = [
  "Motivasyon Konuşması Yazma", "Cenaze/Anma Konuşması (Eulogy)", "Düğün Konuşması", "Mezuniyet Konuşması",
  "Yatırımcı Sunumu (Pitch Deck)", "TED Tarzı 18 Dakika Konuşma", "Panel Moderatörlüğü", "Kriz İletişimi Basın Toplantısı",
  "Satış Sunumu (Sales Pitch)", "Akademik Sunum", "Ödül Konuşması", "Teklif Sunumu (Proposal)",
  "İç Motivasyon Toplantısı", "Veda Konuşması", "Açılış/Lansman Konuşması"
];

konusmaTurleri.forEach((k, index) => {
  // Theory
  finalData.push({
    id: idCounter++,
    slug: `konusma-${index+1}`,
    cat: 'konusma_turleri',
    emoji: '🎙️',
    title: k,
    dur: '10 dk',
    level: 'Orta',
    freq: 'Gerektiğinde',
    desc: `${k} formatının dünya çapında kabul görmüş altın kuralları, yapıtaşları ve psikolojik tetikleyicileri.`,
    benefits: ['Farklı konuşma formatlarının dinamiklerine uyum sağlamayı öğretir', 'Olay yerine özel profesyonel bir intiba bırakır'],
    mistakes: ['Bağlama (cenaze, düğün, kriz vb.) uymayan aşırı neşeli veya donuk bir ses tonu kullanmak'],
    phrase: null,
    steps: ['1. Bağlamı oku', '2. Dinleyiciyi tanı', '3. Mesajı odakla', '4. Kapanışı güçlü yap'],
    variations: ['🔄 Formatı Esnet: Ciddi bir sunuma dozunda bir mizah ekleyerek formatı zenginleştirin.'],
    tip: '💡 Her konuşma türünün bir şablonu vardır, tekerleği yeniden icat etmeyin, sadece şablonun içini kendi hikayenizle doldurun.',
    related: []
  });
  
  // Builder
  finalData.push({
    id: idCounter++,
    slug: `konusma-builder-${index+1}`,
    cat: 'konusma_turleri',
    emoji: '🏗️',
    title: `Simülasyon: ${k} (Builder)`,
    dur: '15 dk',
    level: 'İleri',
    freq: 'Pratik Amaçlı',
    desc: `${k} için interaktif metin inşa etme (Builder) ve taslak oluşturma egzersizi.`,
    benefits: ['Pratik refleks kazandırır', 'Taslak oluşturma hızını artırır'],
    mistakes: ['Simülasyonu yarım bırakmak veya ciddiye almamak'],
    phrase: null,
    steps: ['1. Kancayı (Hook) yazın', '2. Hikayeyi (Body) geliştirin', '3. Eyleme çağrı (CTA) ekleyin', '4. Sesli okuyun'],
    variations: ['🔄 Doğaçlama: Hiç not kağıdı kullanmadan sadece Builder simülasyonundaki taslak ile konuşun.'],
    tip: '💡 Yazılmamış bir konuşma, havaya atılmış kelime israfıdır. Builder ile omurgayı sağlam kurun.',
    related: []
  });
});

// Helper function for mass generating
function generateCategory(catId, catName, emoji, count, promptString) {
  for(let i=1; i<=count; i++) {
    finalData.push({
      id: idCounter++,
      slug: `${catId}-madde-${i}`,
      cat: catId,
      emoji: emoji,
      title: `${catName} Taktik/Analiz #${i}`,
      dur: '10 dk',
      level: 'Orta',
      freq: 'Eğitim',
      desc: `${promptString} - Kapsamlı teorik altyapı ve pratik uygulama rehberi (Madde ${i}/${count}).`,
      benefits: ['Hitabeti bir üst seviyeye taşır', 'Bilinçaltı iletişim kanallarını açar'],
      mistakes: ['Kuralları ezberleyip mekanik bir şekilde uygulamaya çalışmak'],
      phrase: null,
      steps: ['1. Teoriyi oku', '2. Gözlem yap', '3. Ayna karşısında test et', '4. Gerçek hayatta uygula'],
      variations: ['🔄 Günlük Test: Bu prensibi bugün konuşacağınız ilk kişide (fark ettirmeden) deneyin.'],
      tip: `💡 ${catName} sanatının en büyük sırrı doğallık ve samimiyettir.`,
      related: []
    });
  }
}

// 2. ETHOS (+15)
generateCategory('ethos', 'Ethos (Güvenilirlik)', '🏛️', 15, "Dijital çağda Ethos, LinkedIn profil yönetimi, kişisel marka, video konferans Ethosu, influencer güvenilirliği analizi");

// 3. PATHOS (+15)
generateCategory('pathos', 'Pathos (Duygu)', '🎭', 15, "Müzik ve duygu, renk psikolojisi konuşmada, nostalji silahı, mizah ve Pathos, korku yönetimi");

// 4. LOGOS (+15)
generateCategory('logos', 'Logos (Mantık)', '📊', 15, "Veri görselleştirme ileri, infografik okuma, Excel dashboard sunum, AI ve Logos, algoritmik ikna");

// 5. İKNA PSİKOLOJİSİ (+15)
generateCategory('ikna', 'İkna Psikolojisi', '🧲', 15, "Nudge teorisi, karanlık triad (Makyavelizm, vb), NLP temelleri, hipnotik dil kalıpları");

// 6. KONUŞMA YAZIMI (+15)
generateCategory('konusma_yazimi', 'Konuşma Yazımı', '✍️', 15, "İlk 30 saniye, son 30 saniye, geçiş cümleleri, ana mesaj (talking point), slogan yaratma");

// 7. BÜYÜK ANALİZLER (+20)
generateCategory('analiz', 'Büyük Konuşma Analizi', '🎬', 20, "Atatürk, Gandhi, Mandela, Oprah, Erdoğan, Putin, Macron, Zelensky vb. saniye saniye mimik ve metin analizi");

let appjs = fs.readFileSync('public/app.js', 'utf8');
let datajs = fs.readFileSync('diksiyon-data.js', 'utf8');

const newObjectsStr = finalData.map(ex => JSON.stringify(ex, null, 2)).join(',\n') + '\n';

// Replace the array ending
appjs = appjs.replace(/\s*\];\s*$/, ',\n' + newObjectsStr + '];\n');
fs.writeFileSync('public/app.js', appjs, 'utf8');

datajs = datajs.replace(/\s*\];\s*$/, ',\n' + newObjectsStr + '];\n');
fs.writeFileSync('diksiyon-data.js', datajs, 'utf8');

console.log('125 items (Final Categories) injected successfully. Total count should be 516.');
