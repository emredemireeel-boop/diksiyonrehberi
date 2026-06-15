const fs = require('fs');

const bedendiliData = [];
let idCounter = 851;

const bedendiliKonular = [
  { t: "El Hareketleri Sözlüğü", d: "30+ el jesti ve anlamları" },
  { t: "Yürüyüş ve Otorite", d: "Yürüme hızı, adım genişliği, omuz pozisyonu" },
  { t: "Oturma Pozisyonları", d: "Güç koltuğu, savunmacı oturuş, açık oturuş" },
  { t: "Ayakta Durma Duruşları", d: "Superman, Steeple, Atlas, İstirahatte" },
  { t: "Göz Teması Kuralları", d: "60-70% göz teması oranı, üçgen tekniği" },
  { t: "Yüz İfadesi Kontrolü", d: "Mikro ifadeler, sahte ve gerçek gülümseme" },
  { t: "Kişisel Alan (Proxemics)", d: "İntim, kişisel, sosyal, kamusal mesafeler" },
  { t: "Aynalama Tekniği (Mirroring)", d: "Beden dilini senkronize etme" },
  { t: "Dominans Tokalaşma", d: "Güçlü ve dengeli el sıkışma" },
  { t: "Pacifying Hareketler ve Çözümleri", d: "Boyun ovma, saç düzeltme vb. stres işaretleri" }
];

bedendiliKonular.forEach((k, index) => {
  bedendiliData.push({
    id: idCounter++,
    slug: `bedendili-${index+1}`,
    cat: 'bedendili',
    emoji: '🕴️',
    title: k.t,
    dur: '8 dk',
    level: 'Orta',
    freq: 'Günlük',
    desc: `Liderlik ve özgüven iletişiminin temeli olan ${k.t} tekniği: ${k.d}.`,
    benefits: ['Bilinçaltı düzeyde otorite ve güven telkin etmenizi sağlar', 'İletişimde kelimelerin ötesine (sözsüz iletişime) hakim olmanızı sağlar'],
    mistakes: ['Beden dilinin "yapay" durması veya sözlü mesajla çelişmesi (Double bind)'],
    phrase: null,
    steps: [
      `1. Farkındalık (Baseline): Kendi doğal beden dilinizi ve duruşunuzu (Baseline) analiz edin.`,
      `2. Hizalama: Söylediğiniz sözler ile vücudunuzun verdiği mesajın birbirini desteklemesini sağlayın.`,
      `3. Kalibrasyon: Karşınızdaki kişinin veya kitlenin reaksiyonlarına göre jestlerinizi (açık/kapalı) ayarlayın.`
    ],
    variations: ['🔄 Aynalama Egzersizi: Bir arkadaşınızla konuşurken onun postürünü (duruşunu) gizlice taklit ederek uyum yakalayın.'],
    tip: '💡 Beden dili yalan söylemez. İnsanlar önce ne söylediğinize değil, nasıl durduğunuza inanır.',
    related: []
  });
});

const bedendiliSenaryolar = [
  "Büyük Sahnede (TED Tarzı) Ayakta Duruş", "Zorlu Bir Müzakerede Oturma Pozisyonu",
  "Pasif-Agresif Birine Karşı Göz Teması", "Mülakatta Güven Veren El Jestleri",
  "Tokalaşmada Üstünlük Kurmaya Çalışan Biriyle Başa Çıkma", "Yalan Söyleyen Kişinin Mikro İfadelerini Okuma",
  "Gerginken Yapılan Pacifying (Sakinleşme) Hareketlerini Gizleme", "Networking Etkinliğinde Açık Duruş",
  "Çatı (Steeple) Jesti ile Otorite Gösterimi", "Sunum Yaparken Sahneyi Kullanma (Kinetik Alan)",
  "Kamusal Alanda Lider Yürüyüşü", "Beden Dilinizle 'Dinliyorum' Mesajı Verme (Baş Eğme)",
  "Öfke Anında Çene ve Omuz Kontrolü", "Duchenne (Gerçek) Gülümsemesi Yapma",
  "Toplantı Masasında Güç Alanı Yaratma", "Çapraz Kolların Savunmacı Etkisini Kırma",
  "Yabancı Kültürlerde El Kol Hareketleri (Tuzaklar)", "Bacak Bacak Üstüne Atma Şekilleri ve Mesajları",
  "Göz Bebekleri ve İlgiyi Okuma Egzersizi", "Aynalama (Mirroring) ile Sempati Kazanma"
];

bedendiliSenaryolar.forEach((s, index) => {
  bedendiliData.push({
    id: idCounter++,
    slug: `bedendili-senaryo-${index+1}`,
    cat: 'bedendili',
    emoji: '👁️',
    title: `Simülasyon: ${s}`,
    dur: '10 dk',
    level: 'İleri',
    freq: 'Simülasyon',
    desc: `${s} durumunda beden dilinizi stratejik olarak yönetme rehberi.`,
    benefits: ['Anlık stres altında bile liderlik postürünü korumanızı sağlar', 'Karşı tarafın gizlediği duyguları bedeninden okuma yeteneği verir'],
    mistakes: ['Ezberlenmiş robotik jestler kullanarak samimiyeti kaybetmek'],
    phrase: null,
    steps: [
      '1. Zemin (Grounding): Ayaklarınızın yere sağlam bastığını hissederek bedeninizi merkeze alın.',
      '2. Genişleme (Power Pose): Omuzlarınızı geriye atın, göğsünüzü açın ve kişisel alanınızı genişletin.',
      '3. Akış: Ortamın dinamiklerine göre jestlerinizi yumuşatın veya keskinleştirin.'
    ],
    variations: ['🔄 Ayna Karşısında: Bu senaryoyu ayna karşısında çalışarak kendi beden dilinizi dışarıdan gözlemleyin.'],
    tip: '💡 Beden dili sadece başkalarını değil, kendi beyninizi de etkiler. 2 dakikalık bir "Power Pose", testosteronu artırır, kortizolü (stres) düşürür.',
    related: []
  });
});

let appjs = fs.readFileSync('public/app.js', 'utf8');
let datajs = fs.readFileSync('diksiyon-data.js', 'utf8');

const newObjectsStr = bedendiliData.map(ex => JSON.stringify(ex, null, 2)).join(',\n') + '\n';
appjs = appjs.replace(/\s*\];\s*$/, ',\n' + newObjectsStr + '];\n');
datajs = datajs.replace(/\s*\];\s*$/, ',\n' + newObjectsStr + '];\n');

fs.writeFileSync('public/app.js', appjs, 'utf8');
fs.writeFileSync('diksiyon-data.js', datajs, 'utf8');

console.log('30 Beden Dili items injected successfully. Total count should be 880.');
