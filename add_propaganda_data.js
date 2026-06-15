const fs = require('fs');

const propagandaData = [];
let idCounter = 367;

// 1-10: Theory & Masters of Propaganda
const theoryItems = [
  { title: "Gustave Le Bon: Kitle Psikolojisi", desc: "Topluluk içindeki bireyin nasıl anonimleştiği ve rasyonel düşünceden sıyrılarak duygusal bir 'sürüye' dönüştüğü." },
  { title: "Edward Bernays ve PR'ın İcadı", desc: "Modern propagandanın babası olan Bernays'in, kadınlara sigara içirtmek için kullandığı 'Özgürlük Meşaleleri' kampanyası." },
  { title: "Noam Chomsky: Rızanın İmalatı", desc: "Medyada sansüre gerek kalmadan, sadece 'nefes alınacak çerçeveyi' belirleyerek toplumun rızasının nasıl üretildiği." },
  { title: "Joseph Goebbels ve Propaganda", desc: "Yalanın büyüklüğü ve tekrarı üzerine kurulan, tarihteki en karanlık ikna ve manipülasyon makinesinin prensipleri." },
  { title: "Sosyal Medya Algoritmaları", desc: "Filter bubble (Filtre balonu) ve Echo chamber (Yankı odası) mekanizmalarının algıları nasıl şekillendirdiği." },
  { title: "Fake News ve Dezenformasyon", desc: "Yalan haberin gerçek haberden 6 kat daha hızlı yayılmasını sağlayan (Öfke tetiklemesi) psikolojik mekanizma." },
  { title: "Framing Effect (Çerçeveleme Etkisi)", desc: "Aynı verinin (%80 yağsız et vs %20 yağlı et) farklı sunumuyla beyindeki karar mekanizmasının yönlendirilmesi." },
  { title: "Priming (Hazırlama) Etkisi", desc: "Kişinin bilinçaltına bir kelime, renk veya koku vererek, bir sonraki kararında onu belirli bir seçeneğe itme." },
  { title: "Bandwagon Effect (Sürü Psikolojisi)", desc: "Bir fikrin sadece 'çoğunluk tarafından inanıldığı' için bireyler tarafından sorgusuz sualsiz doğru kabul edilmesi." },
  { title: "Mere Exposure Effect", desc: "Sadece sürekli maruz kalmanın (televizyonda yüzünü çok görmenin) bir şeye karşı sevgi ve güven yaratması." }
];

theoryItems.forEach((item, index) => {
  propagandaData.push({
    id: idCounter++,
    slug: `propaganda-${item.title.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '')}`,
    cat: 'propaganda',
    emoji: '🧠',
    title: item.title,
    dur: '12 dk',
    level: 'İleri',
    freq: 'Teorik Bilgi',
    desc: item.desc,
    benefits: ['Bilinçaltı manipülasyonlara karşı zihinsel bağışıklık kazandırır', 'Reklamların ve siyasi söylemlerin arkasındaki asıl amacı deşifre etmeyi öğretir'],
    mistakes: ['Kendisinin manipüle edilemeyecek kadar zeki olduğuna inanmak', 'Sadece karşıt görüşün propaganda yaptığı yanılgısına düşmek'],
    phrase: null,
    steps: [
      `1. Felsefeyi Anlama: ${item.title.split(':')[0]} teorisinin temelini kavrayın. İnsan rasyonel değil, rasyonalize eden bir varlıktır.`,
      `2. Gözlem: Bugün televizyonda veya sosyal medyada gördüğünüz bir haberin bu kuralla nasıl yazıldığını analiz edin.`,
      `3. Savunma Duvarı: Bir içeriğe aniden öfkeleniyor veya aşırı sevgi duyuyorsanız, bir adım geri çekilip "Burada tetiklenen duygu ne?" diye sorun.`
    ],
    variations: [
      `🔄 Medya Diyeti: Bu kavramların üzerinizdeki etkisini kırmak için 48 saatlik algoritma ve haber detoksu uygulayın.`
    ],
    tip: '💡 Dünyadaki en başarılı propaganda, propaganda olduğunun fark edilmediği andır. Görünmezdir.',
    related: []
  });
});

// 11-25: Modern Propaganda Analizleri
const cases = [
  { t: "Cambridge Analytica ve Mikro Hedefleme", d: "Seçmen psikografisine göre kişiselleştirilmiş siyasi reklam (Karanlık Reklam) manipülasyonu." },
  { t: "1984 Apple Macintosh Reklamı Analizi", d: "Sektör devini (IBM) Big Brother olarak çerçeveleyip, tüketiciyi isyankar bir kahraman yapma sanatı." },
  { t: "Astroturfing (Sahte Taban Hareketi)", d: "Büyük şirketlerin veya devletlerin, halktan gelen organik bir tepki gibi sahte sosyal medya hareketleri yaratması." },
  { t: "Komplo Teorilerinin Yayılım Dinamiği", d: "Belirsizlik anlarında beynin anlam arayışını kullanarak üretilen komplo teorilerinin psikolojik altyapısı." },
  { t: "Yeşil Aklama (Greenwashing) Reklamları", d: "Çevreye zarar veren markaların, ambalaj rengini yeşil yaparak çevreci görünme illüzyonu." },
  { t: "Siyasi Kampanyalarda 'Korku' Satışı", d: "Topluma güvenlik ve korku ikilemi sunarak, özgürlüklerinden vazgeçirme stratejisi." },
  { t: "Influencer Marketing (Para-Sosyal İlişki)", d: "Hiç tanımadığınız bir dijital ünlüyle arkadaşmış gibi hissetmenizi sağlayan algı mühendisliği." },
  { t: "İptal Kültürü (Cancel Culture) Dinamikleri", d: "Sosyal medya linçlerinin, Bandwagon (Sürü) etkisiyle kitle mahkemesine dönüşmesi." },
  { t: "Clickbait ve Dikkat Ekonomisi", d: "Merak boşluğu (Curiosity Gap) yaratarak tıklamaya mecbur bırakan manipülatif başlık tasarımları." },
  { t: "Popülist Söylem Analizi (Biz vs Onlar)", d: "Toplumu kutuplaştırarak (Halk vs Elitler) sadık ve kör bir takipçi kitlesi yaratma taktiği." },
  { t: "Sağlık Sektöründe Panik Pazarlaması", d: "Hastalık korkusu (Hypochondria) üzerinden tetiklenen gıda takviyesi ve ilaç tüketim propagandası." },
  { t: "Subliminal Mesajlar ve Ürün Yerleştirme", d: "Bilinçaltı algı eşiğinin altında verilen mesajların gerçeklik payı ve modern ürün yerleştirme teknikleri." },
  { t: "Gıda Sektöründe 'Doğal' Yanılsaması", d: "Ürünlere hukuki hiçbir bağlayıcılığı olmayan 'Doğal', 'Katkısız' kelimelerini ekleyerek Algısal Çerçeveleme (Framing) yapılması." },
  { t: "Yankı Odası (Echo Chamber) Çıkış Stratejileri", d: "Sadece kendi görüşlerinizi duyduğunuz dijital fanustan çıkmak için yapılması gereken bilinçli algoritma bozma adımları." },
  { t: "Algoritma Öncesi vs Sonrası Propaganda", d: "Radyo döneminin tek yönlü kitle propagandası ile bugünün kişiselleştirilmiş (Mikro) algoritma propagandası arasındaki evrim." }
];

cases.forEach((c, index) => {
  propagandaData.push({
    id: idCounter++,
    slug: `propaganda-analiz-${index+11}`,
    cat: 'propaganda',
    emoji: '👁️',
    title: `Analiz: ${c.t}`,
    dur: '15 dk',
    level: 'İleri',
    freq: 'İnceleme',
    desc: c.d,
    benefits: ['Modern dünyanın görünmez manipülasyonlarını görünür kılar', 'Dijital okuryazarlığı ve eleştirel düşünceyi en üst seviyeye çıkarır'],
    mistakes: ['Bu analizleri okuduktan sonra paranoyak bir zihin yapısına bürünmek'],
    phrase: null,
    steps: [
      '1. Bağlam: Olayın geçtiği dönemi ve hedef kitlenin psikolojik boşluklarını (korku, aidiyet ihtiyacı) analiz edin.',
      '2. Mekanizma: Hangi bilişsel yanılgının (Cognitive Bias) hacklendiğini tespit edin.',
      '3. Sonuç: Bu propagandanın kısa vadeli başarısı ve uzun vadeli toplumsal maliyetini değerlendirin.'
    ],
    variations: [
      '🔄 Algoritma Hackerlığı: İnandığınız siyasi veya felsefi görüşün TAM ZITTI olan sayfaları 1 hafta takip ederek filtrenizi patlatın.'
    ],
    tip: '💡 Bir haberi okuduğunuzda aşırı şekilde haklı çıktığınızı hissediyor ve egonuz okşanıyorsa, büyük ihtimalle yankı odanızdasınızdır.',
    related: []
  });
});

let appjs = fs.readFileSync('public/app.js', 'utf8');
let datajs = fs.readFileSync('diksiyon-data.js', 'utf8');

const newObjectsStr = propagandaData.map(ex => JSON.stringify(ex, null, 2)).join(',\n') + '\n';

// Replace the array ending
appjs = appjs.replace(/\s*\];\s*$/, ',\n' + newObjectsStr + '];\n');
fs.writeFileSync('public/app.js', appjs, 'utf8');

datajs = datajs.replace(/\s*\];\s*$/, ',\n' + newObjectsStr + '];\n');
fs.writeFileSync('diksiyon-data.js', datajs, 'utf8');

console.log('25 items for Propaganda Kategorisi injected successfully.');
