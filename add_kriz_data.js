const fs = require('fs');

const krizData = [];
let idCounter = 1031;

const krizKonular = [
  { t: "Teknik Arıza Yönetimi", d: "Mikrofon, projektör, internet kesintisi" },
  { t: "Blackout (Unutma) Kurtarma", d: "Metni tamamen unuttuğunuzda ne yapmalı" },
  { t: "Heckler (Saldırgan İzleyici) Yönetimi", d: "Laf atan seyirciye karşı taktikler" },
  { t: "Zor Soru Yönetimi", d: "Köşeye sıkıştıran sorulara cevap" },
  { t: "Gaf Kurtarma", d: "Yanlış kelime, sehven hakaret" },
  { t: "Ağlama Krizi (Konuşmacı)", d: "Sahnede duygusallaşmayı yönetme" },
  { t: "Panik Atak Yönetimi", d: "Sahne üzerinde panik kontrolü" },
  { t: "Ses Kısılması Acil Durum", d: "Konuşma sırasında sesin gitmesi" },
  { t: "Seyirci Kaybı Kurtarma", d: "İlgiyi kaybeden kitleyi geri kazanma" },
  { t: "Süre Aşımı Yönetimi", d: "Konuşma süresinin dolması" }
];

krizKonular.forEach((k, index) => {
  krizData.push({
    id: idCounter++,
    slug: `kriz-${index+1}`,
    cat: 'kriz',
    emoji: '🚨',
    title: k.t,
    dur: '10 dk',
    level: 'İleri',
    freq: 'Acil Durum',
    desc: `Sahnede işler ters gittiğinde uygulanacak acil durum protokolü: ${k.t} (${k.d}).`,
    benefits: ['Panik anında beynin donmasını engeller ve kontrolü hızlıca geri almanızı sağlar', 'Seyirci gözünde kriz çözen karizmatik ve güçlü bir lider imajı çizersiniz'],
    mistakes: ['Krizi görmezden gelmek veya seyirciyi suçlamak (Örn: "Mikrofonunuz bozuk")'],
    phrase: null,
    steps: [
      `1. Sessizlik ve Duraksama (Pause): Kriz anında hemen tepki vermeyin. Derin bir nefes alıp 3 saniye durun.`,
      `2. Kabullenme ve Mizah: Seyircinin krizi gördüğünü bilin. Durumla dalga geçen kısa bir espri (Self-deprecation) ile tansiyonu düşürün.`,
      `3. Köprü Kurma (Bridging): Krizi ana konunuza bağlayarak profesyonelce sunuma geri dönün.`
    ],
    variations: ['🔄 Gaf Geri Alma: Yanlış bir şey söylediğinizde "Bunu geri alıyorum" demek yerine, "Bunu daha doğru bir şekilde ifade edeyim" diyerek düzeltin.'],
    tip: '💡 Seyirci kriz anında size değil, sizin krize verdiğiniz tepkiye odaklanır. Sakin kalırsanız kahraman olursunuz.',
    related: []
  });
});

const krizSenaryolar = [
  "Blackout (Tamamen Unutma) Anında 'Soru Sorma' Taktiği",
  "Projektör Patladığında Hikaye Anlatıcılığına Geçiş",
  "Saldırgan Seyirciyi (Heckler) Susturmadan Etkisiz Hale Getirme",
  "Bilmediğiniz Bir Soruyu Zarafetle 'Park Etme'",
  "Sahne Üzerinde Ses Kısılması ve Su İçme Molası Kurgusu",
  "Sahnede Gözyaşlarını (Ağlama) Güce Dönüştürme",
  "Yanlışlıkla Rakip Firmayı Övme Gafını Düzeltme",
  "Salondaki Uğultuyu (Seyirci Kaybı) Tek Bir Suskuyla Kesme",
  "Süreniz Bittiğinde 30 Saniyede 'Elevator Pitch' Bitişi",
  "Elektrikler Kesildiğinde Akustik (Ses Tonu) Yönetimi",
  "Aşırı Terleme veya Fiziksel Panik Atak Gizleme",
  "Düşme veya Tökezleme (Fiziksel Kaza) Sonrası Espri",
  "Çok Sıkıcı Bir Konuşmacıdan Sonra Enerjiyi Toparlama",
  "Sunum Kumandasının (Presenter) Bozulması",
  "Sahnede Yanlış Slaytın Açılması Durumunda Doğaçlama"
];

krizSenaryolar.forEach((s, index) => {
  krizData.push({
    id: idCounter++,
    slug: `kriz-senaryo-${index+1}`,
    cat: 'kriz',
    emoji: '⚠️',
    title: `Simülasyon: ${s}`,
    dur: '12 dk',
    level: 'Uzman',
    freq: 'Simülasyon',
    desc: `${s} senaryosunda hayatta kalma ve karizma kurtarma pratiği.`,
    benefits: ['En korktuğunuz kabusların aslında yönetilebilir olduğunu gösterir', 'Kriz anlarında adrenalin artışını performans enerjisine dönüştürür'],
    mistakes: ['Heckler (Laf atan seyirci) ile karşılıklı münakaşaya girip ego savaşı başlatmak'],
    phrase: null,
    steps: [
      '1. Tehdidi Teşhis Et: Kriz teknik mi, fiziksel mi, sosyal (seyirci) mi?',
      '2. Filozofik Yaklaşım: Sorunu kişiselleştirmeyin. (Örn: Heckler size değil, konuya kızgın).',
      '3. Otoriteyi Yeniden Kur: Fiziksel alanınızı genişletin (Power Pose) ve ses tonunuzu kalınlaştırarak devam edin.'
    ],
    variations: ['🔄 Heckler Savunması (Kill with Kindness): Size saldıran kişiye, "Ne kadar tutkulu olduğunuzu görebiliyorum, sunumdan sonra bunu detaylıca konuşalım" diyerek sosyal baskı kurun.'],
    tip: '💡 Asla özür dilemeyin ("Ay çok heyecanlandım, kusura bakmayın" demeyin). Seyirci zayıflığı değil, otoriteyi sever. "Şimdi asıl konuya dönelim" diyerek geçiştirin.',
    related: []
  });
});

let appjs = fs.readFileSync('public/app.js', 'utf8');
let datajs = fs.readFileSync('diksiyon-data.js', 'utf8');

const newObjectsStr = krizData.map(ex => JSON.stringify(ex, null, 2)).join(',\n') + '\n';
appjs = appjs.replace(/\s*\];\s*$/, ',\n' + newObjectsStr + '];\n');
datajs = datajs.replace(/\s*\];\s*$/, ',\n' + newObjectsStr + '];\n');

fs.writeFileSync('public/app.js', appjs, 'utf8');
fs.writeFileSync('diksiyon-data.js', datajs, 'utf8');

console.log('25 Kriz items injected successfully. Total count should be 1055.');
