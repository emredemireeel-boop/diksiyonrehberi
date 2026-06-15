const fs = require('fs');

const imajData = [];
let idCounter = 737;

const konular = [
  { t: "Dress Code Rehberi", d: "White tie, black tie, business casual farkları" },
  { t: "Erkek Takım Elbise 101", d: "Beden ölçüsü, renk, kumaş seçimi" },
  { t: "Kadın İş Giyimi", d: "Profesyonel ve şık kombinasyonlar" },
  { t: "Casual Friday Tuzakları", d: "Rahat giyinirken de profesyonel kalma" },
  { t: "Aksesuar Seçimi", d: "Saat, kol düğmesi, kravat, broş" },
  { t: "Ayakkabı Kuralları", d: "Renk eşleştirme, bakım, ortama uygunluk" },
  { t: "Renk Psikolojisi ve Giyim", d: "Hangi renk hangi mesajı verir?" },
  { t: "Parfüm Etiketi", d: "İş yerinde koku yönetimi" },
  { t: "Saç ve Sakal Bakımı", d: "Profesyonel görünüm standartları" },
  { t: "Dijital Toplantı Giyimi", d: "Kameraya yansıyan yarım beden kuralı" }
];

konular.forEach((k, index) => {
  imajData.push({
    id: idCounter++,
    slug: `imaj-${index+1}`,
    cat: 'imaj',
    emoji: '👔',
    title: k.t,
    dur: '8 dk',
    level: 'Başlangıç',
    freq: 'Stil',
    desc: `Profesyonel imajın ayrılmaz bir parçası olan ${k.t.toLowerCase()} hakkında temel prensipler: ${k.d}.`,
    benefits: ['Girdiğiniz ortamda saygı uyandırır', 'İlk izlenimde (Halo Etkisi) 1-0 önde başlamanızı sağlar'],
    mistakes: ['Yanlış ortama yanlış kıyafetle gidip odak noktası haline gelmek'],
    phrase: null,
    steps: [
      `1. Analiz: Gideceğiniz ortamın "Dress Code" (Giyim Kodu) beklentisini öğrenin.`,
      `2. Uyum: Vücut tipinize ve ten renginize uygun parçaları seçin.`,
      `3. Detay: Ayakkabı temizliği, parfüm dozu ve aksesuarlarla görünümü tamamlayın.`
    ],
    variations: ['🔄 Ayna Karşısında: Mevcut iş gardırobunuzu bu kurallara göre yeniden gözden geçirin.'],
    tip: '💡 Giyiminiz sözlerinizden önce konuşur. Şık ama abartısız bir imaj, güvenilirliğin anahtarıdır.',
    related: []
  });
});

// 11-20 Durum Bazlı Giyim Rehberleri
const durumlar = [
  "C-Level Yönetim Toplantısı", "Müşteri ile İlk Tanışma Yemeği", "Sektörel Networking Daveti", 
  "Gala ve Ödül Töreni (Black Tie)", "İş Yeri Pikniği / Şirket Etkinliği", 
  "Uluslararası Ticari Fuar", "Kriz Yönetimi Basın Toplantısı", 
  "Start-up Yatırımcı Sunumu", "Şirket İçi Eğitim / Seminer", "Nikah veya Cenaze Töreni"
];

durumlar.forEach((d, index) => {
  imajData.push({
    id: idCounter++,
    slug: `imaj-durum-${index+1}`,
    cat: 'imaj',
    emoji: '🧥',
    title: `${d} İmaj Rehberi`,
    dur: '10 dk',
    level: 'İleri',
    freq: 'Durum',
    desc: `${d} ortamına girerken nasıl giyinmelisiniz, neleri takmalı ve nelerden kesinlikle kaçınmalısınız?`,
    benefits: ['Durumsal farkındalığınızı (Situational Awareness) artırır', 'Kıyafet endişesi olmadan sadece işinize odaklanmanızı sağlar'],
    mistakes: ['Başkalarının ne giydiğine bakmadan aşırı resmi veya aşırı rahat (underdressed/overdressed) kalmak'],
    phrase: null,
    steps: [
      '1. Bağlamı Oku: Ortamın ciddiyeti, zamanı (gündüz/gece) ve katılımcı profilini değerlendirin.',
      '2. Renk Seçimi: Kriz anlarında koyu lacivert, yatırımcı sunumlarında dinamik ama güven veren renkler seçin.',
      '3. Son Kontrol: Çıkmadan önce ayakkabı, kemer ve yaka uyumunu aynada teyit edin.'
    ],
    variations: ['🔄 Senaryo Planlaması: Bir sonraki büyük etkinliğiniz için dolabınızdaki uygun kombinleri şimdiden hazırlayın.'],
    tip: '💡 "Overdressed" (gereğinden fazla şık) olmak, "Underdressed" (gereğinden fazla rahat) olmaktan her zaman daha güvenlidir.',
    related: []
  });
});

let appjs = fs.readFileSync('public/app.js', 'utf8');
let datajs = fs.readFileSync('diksiyon-data.js', 'utf8');

const newObjectsStr = imajData.map(ex => JSON.stringify(ex, null, 2)).join(',\n') + '\n';

appjs = appjs.replace(/\s*\];\s*$/, ',\n' + newObjectsStr + '];\n');
fs.writeFileSync('public/app.js', appjs, 'utf8');

datajs = datajs.replace(/\s*\];\s*$/, ',\n' + newObjectsStr + '];\n');
fs.writeFileSync('diksiyon-data.js', datajs, 'utf8');

console.log('20 Imaj items injected successfully. Total count should be 756.');
