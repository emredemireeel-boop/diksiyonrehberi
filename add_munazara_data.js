const fs = require('fs');

const munazaraData = [];
let idCounter = 297;

// 1-15: Theory & Strategy
const theoryItems = [
  { title: "Münazara Nedir? Temel Kurallar", type: "article", desc: "Münazara yapısı, rolleri ve argüman inşasının temel kuralları." },
  { title: "British Parliamentary Formatı", type: "article", desc: "İngiliz parlamento münazara sistemi: Hükümet ve Muhalefet kanatlarının 4 takımlı stratejisi." },
  { title: "Lincoln-Douglas Formatı", type: "article", desc: "Bire bir münazara formatı: Değer ve felsefe odaklı ahlaki argümantasyon." },
  { title: "Karl Popper Formatı", type: "article", desc: "Takım münazara formatı: Kanıtların ön plana çıktığı 3'e 3 çapraz sorgulu sistem." },
  { title: "Açılış Konuşması Hazırlama", type: "builder", desc: "Sözü ilk alanın tartışmayı çerçevelemesi (Framing) ve ilk intibayı oluşturma stratejileri." },
  { title: "Çapraz Sorgulama Teknikleri", type: "builder", desc: "Rakibe ardışık sorular sorarak argümanını köşeye sıkıştırma (Sokratik İroni) sanatı." },
  { title: "Çürütme (Rebuttal) Stratejileri", type: "article", desc: "Rakibin argümanlarını çökertmek için kullanılan 10 farklı çürütme ve hücum yöntemi." },
  { title: "Kapanış Konuşması Sanatı", type: "article", desc: "Son söz hakkını kullanarak jürinin zihninde 'biz kazandık' algısını kristalize etme." },
  { title: "Zaman Yönetimi (Timer Pressure)", type: "article", desc: "Kısıtlı sürede (örn: 3 dakika) en önemli argümanları filtreleyip hız baskısı altında konuşma." },
  { title: "Not Alma ve Organize Etme (Flowing)", type: "article", desc: "Münazara sırasında rakibin argümanlarını kaçırmamak için özel not tutma (Flowing) sistemi." },
  { title: "Tuzak Sorular ve Kaçınma", type: "builder", desc: "Evet/Hayır tuzağına (Loaded questions) düşmeden, soruyu kendi lehine çevirerek yanıtlama sanatı." },
  { title: "Tanım Savaşı (Definition Battle)", type: "article", desc: "Tartışmanın sınırlarını ve kelimelerin anlamını kendi lehine belirleme (Çerçeveleme) savaşı." },
  { title: "Kanıt Yönetimi ve Kaynak", type: "article", desc: "İstatistik, rapor ve makaleleri jüriye inandırıcı bir şekilde, zaman kaybetmeden sunma teknikleri." },
  { title: "Duygusal Saldırıya Mantıksal Savunma", type: "builder", desc: "Rakibin Pathos (Duygu sömürüsü) saldırısına karşı, Logos (Mantık) ile soğukkanlı bir duvar örme." },
  { title: "Jüri Psikolojisi", type: "article", desc: "Haklı olmanın yetmediği, 'haklı görünmenin' başladığı yer: Jüriyi ikna etmenin ince psikolojisi." }
];

theoryItems.forEach(item => {
  munazaraData.push({
    id: idCounter++,
    slug: `munazara-${item.title.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '')}`,
    cat: 'munazara',
    emoji: '⚖️',
    title: item.title,
    dur: '10 dk',
    level: 'İleri',
    freq: 'Münazara Öncesi',
    desc: item.desc,
    benefits: ['Rakibi fikirleriyle alt etme becerisini artırır', 'Baskı altında soğukkanlı düşünmeyi öğretir', 'Sıradan bir tartışmayı profesyonel bir zeka satrancına dönüştürür'],
    mistakes: ['Bağırarak haklı çıkmaya çalışmak (Ad Hominem yapmak)', 'Rakibin zayıf değil, en güçlü argümanına saldırmaktan korkmak'],
    phrase: null,
    steps: [
      `1. Formatı Anlama: ${item.title} başlığındaki kuralları veya format gereksinimlerini ezberleyin.`,
      `2. Kurgu: Bu stratejiyi günlük hayattaki bir tartışmada (Örn: "Hangi araba daha iyi?") test edin.`,
      `3. Dinleme (Aktif): Münazaranın %80'i konuşmak değil, rakibi dinlemektir. Açıklarını not alın.`,
      `4. Vuruş: Hazırladığınız çürütmeyi (Rebuttal), ${item.type === 'builder' ? 'interaktif senaryo ile pekiştirerek' : 'notlarınıza bakmadan'} rakibe yöneltin.`
    ],
    variations: [
      `🔄 Gündelik Tartışmalar: Buradaki "Profesyonel Münazara" kurallarını, ailenizle veya ofis toplantılarında fikir ayrılığı yaşadığınız anlarda kullanarak "duygusal kavgayı" "mantıksal zafere" çevirin.`
    ],
    tip: '💡 Münazarada haklı olan kazanmaz, argümanını en iyi "Kurgulayan" ve rakibin argümanını en iyi "Yıkan" kazanır.',
    related: []
  });
});

// 16-25: 10 Senaryo
const scenarios = [
  "Yapay Zeka Yasaklanmalı mı?",
  "Evrensel Temel Gelir Şart mı?",
  "Sosyal Medya Şirketleri Sansür Hakkına Sahip mi?",
  "Hayvan Deneyleri Tamamen Yasaklanmalı mı?",
  "Okullarda Üniforma Zorunluluğu Kalkmalı mı?",
  "İdam Cezası Geri Gelmeli mi?",
  "Nükleer Enerji Yeşil Enerji midir?",
  "Üniversite Eğitimi Tamamen Ücretsiz mi Olmalı?",
  "Seçimlerde Oy Kullanmak Zorunlu mu Olmalı?",
  "Küreselleşme Yoksulluğu Artırır mı?"
];

scenarios.forEach((sc, index) => {
  munazaraData.push({
    id: idCounter++,
    slug: `senaryo-${index+1}`,
    cat: 'munazara',
    emoji: '🥊',
    title: `Senaryo ${index+1}: ${sc}`,
    dur: '15 dk',
    level: 'Orta',
    freq: 'Pratik Amaçlı',
    desc: `Gerçek zamanlı münazara simülasyonu. Hem Hükümet (Savunan) hem de Muhalefet (Karşı Çıkan) argümanlarını kurma egzersizi.`,
    benefits: ['Çift taraflı (Devil\'s Advocate) düşünme yeteneği kazandırır', 'Hızlı argüman üretme kaslarını geliştirir'],
    mistakes: ['Kendi inanmadığı bir konuyu savunurken isteksiz olmak'],
    phrase: null,
    steps: [
      '1. Pozisyon Seçimi: Karşı olsanız bile bu konuyu SAVUNAN taraf olun.',
      '2. İlk Argüman: En güçlü argümanınızı 30 saniyede özetleyin.',
      '3. Taraf Değişimi: Şimdi kendi argümanınızı çürütmek için MUHALEFET tarafına geçin.',
      '4. Final Hükmü: Hangi tarafın mantığı daha tutarlı oldu? Çürütmelerinizi değerlendirin.'
    ],
    variations: [
      '🔄 Ters Köşe: En çok nefret ettiğiniz fikri savunarak empatik zeka ve retorik becerinizi maksimize edin.'
    ],
    tip: '💡 Gerçek bir münazır, "Dünya Düzdür" argümanını bile dinleyiciye şüphe düşürecek kadar mantıklı savunan kişidir.',
    related: []
  });
});

// 26-40: 15 Ünlü Tartışma Analizleri
const analyses = [
  "Kennedy - Nixon Televizyon Münazarası (1960)",
  "Demirel - Ecevit Çatışmaları",
  "Christopher Hitchens'ın Çürütme Teknikleri",
  "Ben Shapiro ve Hızlı Çapraz Sorgu",
  "Jordan Peterson vs Cathy Newman (Tuzak Sorudan Kaçma)",
  "Chomsky vs Foucault (İnsan Doğası)",
  "Obama vs Romney (Beden Dili Üstünlüğü)",
  "Trump vs Clinton (Psikolojik Kesintiler)",
  "Zizek vs Peterson (Tanım Savaşı)",
  "Malcolm X vs Oxford Union (Açılış Etkisi)",
  "Nelson Mandela'nın Mahkeme Savunması",
  "Erbakan - Türkeş Meclis Diyalogları",
  "Socrates'in Savunması (Çapraz Sorgu)",
  "Jon Stewart vs Crossfire (Kapanış Şoku)",
  "Steve Jobs vs Bill Gates (AllThingsD)"
];

analyses.forEach(an => {
  munazaraData.push({
    id: idCounter++,
    slug: `analiz-${an.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '')}`,
    cat: 'munazara',
    emoji: '📺',
    title: `Analiz: ${an}`,
    dur: '20 dk',
    level: 'İleri',
    freq: 'Case Study',
    desc: `Tarihe geçen bu ikonik tartışmanın ardındaki retorik stratejilerin, vücut dilinin ve algı yönetiminin saniye saniye analizi.`,
    benefits: ['Ustalardan görerek öğrenmeyi (Modelleme) sağlar', 'Zor durumlarda nasıl kıvrak zeka kullanılacağını gösterir'],
    mistakes: ['Sadece izleyip, arkasındaki matematiksel stratejiyi görememek'],
    phrase: null,
    steps: [
      '1. Gözlem: Bu tartışmadaki beden dilini, ses tonunu ve sahne hakimiyetini inceleyin.',
      '2. Kırılma Noktası: Tartışmanın seyrini değiştiren o "öldürücü darbeyi (Punchline)" tespit edin.',
      '3. Strateji Dekodu: Kazanan taraf hangi mantık hatasını (Fallacy) yakaladı?',
      '4. Modelleme: Siz o an orada olsaydınız, bu tuzağa düşmemek için ne cevap verirdiniz?'
    ],
    variations: [
      '🔄 Susturma Sanatı: Analizlerdeki "kesintilere (interruptions)" nasıl cevap verildiğine özellikle odaklanın.'
    ],
    tip: '💡 Münazara bir şovdur. Kennedy\'nin 1960\'ta radyoda kaybedip televizyonda kazanmasının tek sebebi, argümanları değil, terlememesi ve doğrudan kameraya bakmasıydı.',
    related: []
  });
});

let appjs = fs.readFileSync('public/app.js', 'utf8');
let datajs = fs.readFileSync('diksiyon-data.js', 'utf8');

const newObjectsStr = munazaraData.map(ex => JSON.stringify(ex, null, 2)).join(',\n') + '\n';

// Replace the array ending
appjs = appjs.replace(/\s*\];\s*$/, ',\n' + newObjectsStr + '];\n');
fs.writeFileSync('public/app.js', appjs, 'utf8');

datajs = datajs.replace(/\s*\];\s*$/, ',\n' + newObjectsStr + '];\n');
fs.writeFileSync('diksiyon-data.js', datajs, 'utf8');

console.log('40 items for Münazara Kategorisi injected successfully.');
