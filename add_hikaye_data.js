const fs = require('fs');

const hikayeData = [];
let idCounter = 931;

const hikayeKonular = [
  { t: "3-Act Structure (3 Perde)", d: "Giriş-Gelişme-Sonuç klasik yapı" },
  { t: "Hero's Journey (Kahramanın Yolculuğu)", d: "Joseph Campbell'ın 12 adımı" },
  { t: "Pixar Pitch Formula", d: "'Once upon a time... Every day...'" },
  { t: "STAR Method", d: "Durum-Görev-Aksiyon-Sonuç (Mülakat)" },
  { t: "Before-After-Bridge", d: "Problem-Çözüm-Köprü" },
  { t: "Problem-Agitate-Solve (PAS)", d: "Sorunu büyüt, çözümü sun" },
  { t: "In Medias Res (Ortadan Başla)", d: "Aksiyonun ortasına dalma" },
  { t: "Nested Loops (İç İçe Hikayeler)", d: "Matruşka bebek gibi hikaye" },
  { t: "Sparkline (Nancy Duarte)", d: "'Ne var' vs 'Ne olabilir' zıtlığı" },
  { t: "Mountain Structure (Dağ Yapısı)", d: "Gerilim grafiği ile anlatım" },
  { t: "Petal Structure (Yaprak Yapısı)", d: "Merkezi mesajı destekleyen yan hikayeler" },
  { t: "False Start (Yanlış Başlangıç)", d: "Beklentiyi kırarak dikkat çekme" },
  { t: "Converging Ideas (Birleşen Fikirler)", d: "Farklı hikayelerin tek noktada buluşması" },
  { t: "Rags to Riches (Paçavradan Zirveye)", d: "Klasik başarı hikayesi kalıbı" },
  { t: "Overcoming the Monster", d: "Büyük düşmanı yenme" },
  { t: "The Quest (Arayış)", d: "Hazine/hedef arama yolculuğu" },
  { t: "Voyage and Return (Gidip Dönme)", d: "Yabancı dünyaya gidip dönüşmüş dönme" },
  { t: "Comedy (Komedi) Yapısı", d: "Yanlış anlamalardan çözüme" },
  { t: "Tragedy (Trajedi) Yapısı", d: "Büyüklükten düşüşe" },
  { t: "Rebirth (Yeniden Doğuş)", d: "Karanlıktan aydınlığa" }
];

hikayeKonular.forEach((k, index) => {
  hikayeData.push({
    id: idCounter++,
    slug: `hikaye-${index+1}`,
    cat: 'hikaye',
    emoji: '🎬',
    title: k.t,
    dur: '12 dk',
    level: 'Orta',
    freq: 'Sunum',
    desc: `Hikaye anlatıcılığının (Storytelling) temel mimarilerinden: ${k.t} (${k.d}).`,
    benefits: ['Sunumlarınızı ve fikirlerinizi unutulmaz bir sinematik deneyime dönüştürür', 'İzleyicinin beyin dalgalarını (Neural coupling) sizinle senkronize eder'],
    mistakes: ['Mantıksal verileri (Logos) duygu (Pathos) olmadan dümdüz sıralayarak sıkıcılaşmak'],
    phrase: null,
    steps: [
      `1. Kanca (Hook): İzleyicinin dikkatini ilk 7 saniyede çekecek bir giriş yapın.`,
      `2. Çatışma (Conflict): Her iyi hikayenin bir problemi veya kötüsü olmalıdır.`,
      `3. Çözüm/Dönüşüm (Resolution): Kahramanın (Veya müşterinin) engeli nasıl aştığını ve değiştiğini gösterin.`
    ],
    variations: ['🔄 6 Kelimelik Hikaye: Hemingway tarzında, sadece 6 kelime kullanarak derin bir hikaye yazmayı deneyin. (Örn: Satılık: Bebek ayakkabıları. Hiç giyilmedi.)'],
    tip: '💡 İnsan beyni veri listeleriyle değil, hikayelerle çalışacak şekilde evrimleşmiştir. İnsanları rakamlarla ikna edemezsiniz, onlara bir hikaye anlatmalısınız.',
    related: []
  });
});

const hikayeSenaryolar = [
  "Steve Jobs'un Sparkline Sunum Analizi", "STAR Metodu ile Mülakat Sorusu Cevaplama",
  "Pixar Pitch ile Bir Startup Fikri Sunma", "Before-After-Bridge ile Ürün Satışı",
  "In Medias Res ile Sahneye Çıkış (Aksiyondan Başlama)"
];

hikayeSenaryolar.forEach((s, index) => {
  hikayeData.push({
    id: idCounter++,
    slug: `hikaye-senaryo-${index+1}`,
    cat: 'hikaye',
    emoji: '🧩',
    title: `Simülasyon: ${s}`,
    dur: '15 dk',
    level: 'İleri',
    freq: 'Simülasyon',
    desc: `${s} stratejisini interaktif olarak kurgulama pratiği.`,
    benefits: ['Ezberden çıkıp anında hikaye üretebilme refleksini geliştirir', 'Mülakatlarda veya yatırımcı sunumlarında sizi öne geçirir'],
    mistakes: ['Hikayenin sonunu çok erken belli ederek gerilimi (Tension) öldürmek'],
    phrase: null,
    steps: [
      '1. Hedef Belirleme: Hikayenin sonundaki ana mesajınızın (Theme) ne olacağına karar verin.',
      '2. Yapı Seçimi: Mesajınıza en uygun iskeleti (Pixar, STAR, Hero\'s Journey) seçin.',
      '3. Duygusal Bağ: Dinleyicinin empati kurabileceği detaylar ekleyin.'
    ],
    variations: ['🔄 Rastgele Formül: Herhangi bir anınızı seçip onu rastgele bir yapı formülüne (Örn: In Medias Res) uydurarak baştan anlatın.'],
    tip: '💡 En iyi hikayeler her zaman gerçeğe dayanır, ancak gerçeğin "sıkıcı parçalarının kesilmiş" halidir.',
    related: []
  });
});

let appjs = fs.readFileSync('public/app.js', 'utf8');
let datajs = fs.readFileSync('diksiyon-data.js', 'utf8');

const newObjectsStr = hikayeData.map(ex => JSON.stringify(ex, null, 2)).join(',\n') + '\n';
appjs = appjs.replace(/\s*\];\s*$/, ',\n' + newObjectsStr + '];\n');
datajs = datajs.replace(/\s*\];\s*$/, ',\n' + newObjectsStr + '];\n');

fs.writeFileSync('public/app.js', appjs, 'utf8');
fs.writeFileSync('diksiyon-data.js', datajs, 'utf8');

console.log('25 Hikaye items injected successfully. Total count should be 955.');
