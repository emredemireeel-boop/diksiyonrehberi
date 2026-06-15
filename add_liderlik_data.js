const fs = require('fs');

const liderlikData = [];
let idCounter = 906;

const liderlikKonular = [
  { t: "Liderlik Stilleri", d: "Otoriter, demokratik, servant, transformational" },
  { t: "Duygusal Zeka (EQ)", d: "Goleman'ın 5 bileşeni" },
  { t: "Kriz Liderliği", d: "Kaos anında sakin kalma" },
  { t: "Vizyoner Liderlik", d: "Geleceği çizme ve ilham verme" },
  { t: "Delegasyon Sanatı", d: "İş dağıtma ve güvenme" },
  { t: "Geri Bildirim Verme", d: "Yapıcı eleştiri formülü (SBI modeli)" },
  { t: "Geri Bildirim Alma", d: "Eleştiriyi savunmaya geçmeden karşılama" },
  { t: "Motivasyon ve İlham", d: "Ekibi harekete geçirme psikolojisi" },
  { t: "Çatışma Çözümü", d: "Takım içi anlaşmazlıkları yönetme" },
  { t: "Toplantı Liderliği", d: "Etkili toplantı yönetimi" }
];

liderlikKonular.forEach((k, index) => {
  liderlikData.push({
    id: idCounter++,
    slug: `liderlik-${index+1}`,
    cat: 'liderlik',
    emoji: '♟️',
    title: k.t,
    dur: '12 dk',
    level: 'İleri',
    freq: 'Yönetim',
    desc: `Gerçek bir yöneticinin bilmesi gereken liderlik prensibi: ${k.t} (${k.d}).`,
    benefits: ['Ekiplere ilham vererek verimliliği maksimuma çıkarır', 'Kriz ve kaos anlarında otoriteyi korumanızı sağlar'],
    mistakes: ['Liderliği "Sürekli emir vermek" sanmak veya mikroyönetim yapmak'],
    phrase: null,
    steps: [
      `1. Öz Farkındalık: Kendi liderlik tarzınızın ve sınırlarınızın farkına varın.`,
      `2. Durumsal Uyumluluk: Her çalışanın ve krizin farklı bir liderlik stili gerektirdiğini bilin.`,
      `3. Empati ve Kararlılık: Kararları empatiyle alın ama taviz vermeden uygulayın.`
    ],
    variations: ['🔄 Günlük Uygulama: Bugün ekibinizden birine iş delege ederken sürece değil sadece sonuca odaklanın.'],
    tip: '💡 Yönetici işleri doğru yapan kişidir; Lider ise doğru işleri yapan kişidir. İnsanları yönetemezsiniz, onlara liderlik edersiniz.',
    related: []
  });
});

const liderlikSenaryolar = [
  "Şirket Küçülmeye Giderken Ekibe Haberi Verme (Kriz)", "Düşük Performanslı Ama Zeki Bir Çalışana Geri Bildirim",
  "Takım İçindeki İki Yıldızın Çatışmasını Çözme", "Demokratik Liderlikten Otoriter Liderliğe Geçiş Anı",
  "Yeni ve Büyük Bir Vizyonu Şirkete Sunma", "Uzaktan Çalışan (Remote) Ekibi Motive Etme",
  "Çok Fazla İşi Delege Ederek Zaman Kazanma", "Kendinizden Büyük ve Tecrübeli Birine Liderlik Etme",
  "Yapıcı Eleştiriyi (SBI Modeli) Uygulama", "Toplantıda Konuyu Dağıtanları Kontrol Altına Alma",
  "Tükenmişlik (Burnout) Yaşayan Çalışanı Döndürme", "Öfke Krizindeki Müşteriyi Ekibin Önünde Sakinleştirme",
  "Servant (Hizmetkar) Liderlik Uygulaması", "Karar Felci (Analysis Paralysis) Aşma",
  "Kendi Liderlik Kör Noktalarınızı Tespit Etme"
];

liderlikSenaryolar.forEach((s, index) => {
  liderlikData.push({
    id: idCounter++,
    slug: `liderlik-senaryo-${index+1}`,
    cat: 'liderlik',
    emoji: '📊',
    title: `Simülasyon: ${s}`,
    dur: '15 dk',
    level: 'Uzman',
    freq: 'Simülasyon',
    desc: `${s} senaryosunda duygusal zeka (EQ) ve stratejik liderlik uygulamasını içerir.`,
    benefits: ['Gerçek hayattaki stresli liderlik testlerine hazırlıklı olmanızı sağlar', 'Takım saygısını kaybetmeden zor kararlar almanızı öğretir'],
    mistakes: ['Kriz anında panikleyerek ekibin güvenini sarsmak'],
    phrase: null,
    steps: [
      '1. Dur, Analiz Et (Pause): Kaosun içine çekilmek yerine balkona çıkın ve büyük resmi görün.',
      '2. Duygusal Zeka (EQ) Kullanımı: Karşı tarafın ve kendinizin duygularını isimlendirip yönetin.',
      '3. Aksiyon ve Takip: Kararınızı net bir dille bildirin ve arkasında durun.'
    ],
    variations: ['🔄 Rol Oyunu: Bir iş arkadaşınızla "Zorlu Geri Bildirim" verme pratiği yapın.'],
    tip: '💡 Askeri bir kural: "Komutan paniklerse asker ölür." Liderin sakinliği ekibin oksijenidir.',
    related: []
  });
});

let appjs = fs.readFileSync('public/app.js', 'utf8');
let datajs = fs.readFileSync('diksiyon-data.js', 'utf8');

const newObjectsStr = liderlikData.map(ex => JSON.stringify(ex, null, 2)).join(',\n') + '\n';
appjs = appjs.replace(/\s*\];\s*$/, ',\n' + newObjectsStr + '];\n');
datajs = datajs.replace(/\s*\];\s*$/, ',\n' + newObjectsStr + '];\n');

fs.writeFileSync('public/app.js', appjs, 'utf8');
fs.writeFileSync('diksiyon-data.js', datajs, 'utf8');

console.log('25 Liderlik items injected successfully. Total count should be 930.');
