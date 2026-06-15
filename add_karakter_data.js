const fs = require('fs');

const karakterData = [];
let idCounter = 956;

const karakterKonular = [
  { t: "Protagonist (Kahraman) Tasarımı", d: "Empati uyandıran kahraman yaratma" },
  { t: "Antagonist (Düşman) Tasarımı", d: "Etkili ve inandırıcı engel/düşman" },
  { t: "Mentor Arketipi", d: "Bilge kılavuz karakteri" },
  { t: "Karakter Arkı (Character Arc)", d: "Dönüşüm yolculuğu tasarımı" },
  { t: "Kusurlu Kahraman (Flawed Hero)", d: "Zayıflıkla empati kurma" },
  { t: "Save the Cat Anı", d: "Kahramanı sevdirme teknikleri" },
  { t: "Motivasyon ve İstek (Want vs Need)", d: "Dış hedef vs iç ihtiyaç" },
  { t: "Backstory (Geçmiş Hikaye)", d: "Karakterin arka planını ortaya çıkarma" },
  { t: "Diyalog ile Karakter Açığa Çıkarma", d: "Konuşma ile kişilik gösterme" },
  { t: "Gerçek Kişileri Karakter Olarak Kullanma", d: "İş ve sunum anlatılarında gerçek insanlar" }
];

karakterKonular.forEach((k, index) => {
  karakterData.push({
    id: idCounter++,
    slug: `karakter-${index+1}`,
    cat: 'karakter',
    emoji: '🎭',
    title: k.t,
    dur: '10 dk',
    level: 'Orta',
    freq: 'Yaratıcılık',
    desc: `Etkili bir hikayenin kalbi olan karakter inşa tekniği: ${k.t} (${k.d}).`,
    benefits: ['Dinleyicilerin hikayenizle (veya markanızla) derin bir duygusal bağ (Empati) kurmasını sağlar', 'Sıkıcı kurumsal mesajları insanileştirir'],
    mistakes: ['Kusursuz (Mükemmel) bir kahraman yaratarak inandırıcılığı ve empatiyi yok etmek'],
    phrase: null,
    steps: [
      `1. Kusur Ekle: Karakterinize veya anlattığınız olaya insanlara tanıdık gelecek bir zaaf/hata ekleyin.`,
      `2. 'Save the Cat' (Kediyi Kurtar): Karakterin hikayenin başında "iyi" biri olduğunu gösteren ufak bir detay verin.`,
      `3. Dönüşüm: Hikayenin sonunda karakterin bu zaafı yenip nasıl dönüştüğünü vurgulayın.`
    ],
    variations: ['🔄 Empati Egzersizi: Sevmediğiniz birinin hikayesini, onu bir "Antagonist (Haklı Düşman)" arketipine koyarak anlatmaya çalışın.'],
    tip: '💡 İzleyiciler mükemmellikle empati kuramazlar, sadece zaaflarla ve o zaafların üstesinden gelme çabasıyla empati kurarlar.',
    related: []
  });
});

const karakterSenaryolar = [
  "Kurumsal Bir Sunumda Müşteriyi 'Kahraman' Yapma", "Rakipleri veya Sorunu 'Antagonist' Olarak Kurgulama",
  "Want vs Need Analizi (Kahramanın İstediği ile Gerçekte İhtiyacı Olan)",
  "Lideri 'Mentor' Arketipi Olarak Konumlandırma",
  "Başarısızlık Hikayesinden 'Kusurlu Kahraman' Yaratma",
  "Seyirciyi Kahramana Bağlayan 'Save the Cat' Anı Kurgulama",
  "Geçmişin Hayaletleri (Backstory) İle Bugünkü Korkuyu Açıklama",
  "Sadece İki Cümlelik Diyalogla Karakterin Kibrini Gösterme",
  "Pasif Bir Kahramanı Aktif Hale Getirme (Proaktiflik)",
  "Klişe Olmayan Bir 'Dönüşüm Arkı' Çizme",
  "Gerçek Bir Ekip Üyesini Sunumda Karakterize Etme",
  "Anti-Kahraman Yaratımı ve Onu Sevdirme",
  "Antagonistin Kendi İçinde 'Haklı' Bir Nedeninin Olması",
  "Yapay Zeka (Veya Ürününüzü) Mentor Olarak Konumlandırma",
  "Karakterin Dönüşüm Yaşadığı 'Aydınlanma (Epiphany)' Anı"
];

karakterSenaryolar.forEach((s, index) => {
  karakterData.push({
    id: idCounter++,
    slug: `karakter-senaryo-${index+1}`,
    cat: 'karakter',
    emoji: '✍️',
    title: `Simülasyon: ${s}`,
    dur: '15 dk',
    level: 'İleri',
    freq: 'Simülasyon',
    desc: `${s} tekniğini uygulayarak anlatı derinliği yaratma.`,
    benefits: ['Dinleyicinin hikayenizi kendi hayatıyla özdeşleştirmesini sağlar', 'Satış ve pazarlamada müşteriyi hikayenin başrolü yapmayı öğretir'],
    mistakes: ['Markayı veya ürünü kahraman yapmak (Ürün kahraman değil, kahramana yardım eden mentordur)'],
    phrase: null,
    steps: [
      '1. Rolleri Belirle: Müşterin Luke Skywalker ise, ürünün Obi-Wan Kenobi veya Işın Kılıcı olmalıdır.',
      '2. Engeli Tanımla: Kahramanın (Müşterinin) karşısındaki dış engeli ve iç korkuyu netleştirin.',
      '3. Zaferi Göster: Mentorun (Sizin/Ürününüzün) rehberliğiyle kahramanın hedefe nasıl ulaştığını anlatın.'
    ],
    variations: ['🔄 Karakter Değişimi: En son anlattığınız hikayedeki "Odak Noktasını" kendinizden alıp karşınızdaki kişiye çevirin.'],
    tip: '💡 Donald Miller (StoryBrand) der ki: "Müşteriler şirketinizin hikayesini önemsemezler, onlar kendi hikayelerinin kahramanıdır."',
    related: []
  });
});

let appjs = fs.readFileSync('public/app.js', 'utf8');
let datajs = fs.readFileSync('diksiyon-data.js', 'utf8');

const newObjectsStr = karakterData.map(ex => JSON.stringify(ex, null, 2)).join(',\n') + '\n';
appjs = appjs.replace(/\s*\];\s*$/, ',\n' + newObjectsStr + '];\n');
datajs = datajs.replace(/\s*\];\s*$/, ',\n' + newObjectsStr + '];\n');

fs.writeFileSync('public/app.js', appjs, 'utf8');
fs.writeFileSync('diksiyon-data.js', datajs, 'utf8');

console.log('25 Karakter items injected successfully. Total count should be 980.');
