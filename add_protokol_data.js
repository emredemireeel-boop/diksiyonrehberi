const fs = require('fs');

const protokolData = [];
let idCounter = 712;

const konular = [
  { t: "Japon İş Protokolü", d: "Meishi (kartvizit), ojigi (eğilme), honne vs tatemae" },
  { t: "Amerikan İş Kültürü", d: "Direkt iletişim, small talk, networking" },
  { t: "İngiliz Adabı", d: "Queue kültürü, çay saati, aşırı kibarlık" },
  { t: "Fransız Protokolü", d: "La bise, yemek sırası, şarap kültürü" },
  { t: "Alman İş Kültürü", d: "Dakiklik, hiyerarşi, direktlik" },
  { t: "Çin İş Protokolü", d: "Guanxi, yüz kavramı, hediye ritüelleri" },
  { t: "Arap İş Kültürü", d: "Misafirperverlik, zaman algısı, hediyeleşme" },
  { t: "Hint İş Protokolü", d: "Namaste, kast bilinci, yemek tabuları" },
  { t: "Kore İş Kültürü", d: "Hweshik (iş yemeği), yaş hiyerarşisi" },
  { t: "İskandinav İş Kültürü", d: "Janteloven, düz hiyerarşi, fika" },
  { t: "Brezilya İş Kültürü", d: "Jeitinho, samimi dokunma, zaman esnekliği" },
  { t: "Rusya İş Protokolü", d: "Vodka kültürü, güçlü tokalaşma" },
  { t: "İtalyan İş Kültürü", d: "Bella figura, stil ve estetik" },
  { t: "Uluslararası Toplantı Yönetimi", d: "Çok kültürlü toplantı stratejileri" },
  { t: "Diplomatik Protokol Temelleri", d: "Büyükelçilik, resmi davet, bayrak protokolü" },
  { t: "Uçak ve Havalimanı Adabı", d: "Business class davranışları, lounge etiketi" },
  { t: "Uluslararası Telefon/Video Konferans", d: "Saat dilimi saygısı, dil bariyeri yönetimi" },
  { t: "Küresel Hediyeleşme Rehberi", d: "Ülkelere göre hediye tabular ve tercihleri" },
  { t: "İngilizce İş Yazışmaları", d: "Dear/Kind regards farkı, CC etiketi" },
  { t: "Kültürel Gaf Önleme", d: "En sık yapılan kültürel hatalar ve çözümleri" }
];

konular.forEach((k, index) => {
  protokolData.push({
    id: idCounter++,
    slug: `protokol-${index+1}`,
    cat: 'protokol',
    emoji: '🌍',
    title: k.t,
    dur: '10 dk',
    level: 'Orta',
    freq: 'Kültür',
    desc: `${k.t} ve temel nezaket kuralları: ${k.d}`,
    benefits: ['Uluslararası iş görüşmelerinde kültürel bariyerleri yıkar', 'Güvenilirlik ve saygınlık (Ethos) inşa eder'],
    mistakes: ['Kendi ülke standartlarınızı evrensel doğru sanmak (Etnosentrizm)'],
    phrase: null,
    steps: [
      `1. Araştırma: ${k.t} hakkında temel tabuları (beden dili, hitap) öğrenin.`,
      `2. Gözlem: Karşı tarafın tepkilerini okuyun ve hiyerarşi kurallarına uyun.`,
      `3. Adaptasyon: Kendi iletişim tarzınızı (Göz teması, fiziksel mesafe) kültüre göre ayarlayın.`
    ],
    variations: ['🔄 Simülasyon: Bu ülkedeki bir iş yemeğinde nasıl davranacağınızı hayal edin ve senaryo çizin.'],
    tip: '💡 Eğer bir kültürel gaf yaptıysanız, durumu örtbas etmeye çalışmak yerine gülümseyerek "Kültürünüzü öğrenmeye çalışıyorum, affedin" deyin.',
    related: []
  });
});

// 21-25 Ülke Bazlı Vaka Analizleri
const vakalar = ["Japonya Vaka Analizi", "Çin Vaka Analizi", "Amerika Vaka Analizi", "Orta Doğu Vaka Analizi", "Avrupa Vaka Analizi"];
vakalar.forEach((v, index) => {
  protokolData.push({
    id: idCounter++,
    slug: `protokol-vaka-${index+1}`,
    cat: 'protokol',
    emoji: '🔍',
    title: v,
    dur: '15 dk',
    level: 'İleri',
    freq: 'Analiz',
    desc: `Uluslararası bir şirkette yaşanan kültürel bir iletişim krizinin (${v}) adım adım incelenmesi ve çözüm önerileri.`,
    benefits: ['Kriz anında diplomatik zeka geliştirir', 'Farklı kültürlerin "Hayır" deme şekillerini öğretir'],
    mistakes: ['Sadece analizi okuyup geçmek, benzer durumu kendi sektörünüzde düşünmemek'],
    phrase: null,
    steps: [
      '1. Vaka Okuması: Toplantıda veya e-postada nerede kopukluk yaşandığını tespit edin.',
      '2. Kültürel Kod: O kültürde "A" hareketinin aslında "B" anlama geldiğini keşfedin.',
      '3. Diplomatik Çözüm: Kırılan onuru (Yüz kavramı) tamir etmek için doğru cümleyi kurun.'
    ],
    variations: ['🔄 Rol Yapma: İş arkadaşınızla bu vakadaki diplomat ve yöneticiyi canlandırın.'],
    tip: '💡 Sessizlik her kültürde farklı anlam taşır. Japonya\'da saygı ve düşünme, Amerika\'da ise itiraz veya sıkıntı anlamına gelebilir.',
    related: []
  });
});

let appjs = fs.readFileSync('public/app.js', 'utf8');
let datajs = fs.readFileSync('diksiyon-data.js', 'utf8');

const newObjectsStr = protokolData.map(ex => JSON.stringify(ex, null, 2)).join(',\n') + '\n';

appjs = appjs.replace(/\s*\];\s*$/, ',\n' + newObjectsStr + '];\n');
fs.writeFileSync('public/app.js', appjs, 'utf8');

datajs = datajs.replace(/\s*\];\s*$/, ',\n' + newObjectsStr + '];\n');
fs.writeFileSync('diksiyon-data.js', datajs, 'utf8');

console.log('25 Protokol items injected successfully. Total count should be 736.');
