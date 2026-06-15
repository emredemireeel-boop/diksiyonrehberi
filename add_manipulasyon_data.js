const fs = require('fs');

const manipulasyonData = [];
let idCounter = 777;

const konular = [
  { t: "Love Bombing (Aşk Bombardımanı)", d: "Aşırı ilgi ve yaltaklanma ile bağımlılık" },
  { t: "Future Faking (Sahte Gelecek Vaadi)", d: "Gerçekleşmeyecek vaatlerle kontrol" },
  { t: "Triangulation (Üçgenleme)", d: "Üçüncü kişiyi araya sokarak kıskançlık" },
  { t: "Projection (Yansıtma)", d: "Kendi suçunu karşı tarafa atma" },
  { t: "Word Salad (Kelime Salatası)", d: "Kafa karıştırarak tartışmadan kaçma" },
  { t: "DARVO (Deny, Attack, Reverse)", d: "İnkar et, saldır, kurban rolüne geç" },
  { t: "Hoovering (Emme)", d: "Ayrılık sonrası geri çekme taktikleri" },
  { t: "Isolation (Yalıtma)", d: "Kurbandan destek ağını koparma" },
  { t: "Intermittent Reinforcement", d: "Aralıklı ödüllendirme ile bağımlılık" },
  { t: "Double Bind (Çifte Bağlama)", d: "Ne yapsan kaybedersin tuzağı" },
  { t: "Coercive Control (Zorlayıcı Kontrol)", d: "Sistematik hayat kontrolü" },
  { t: "Stonewalling (Duvar Örme)", d: "İletişimi tamamen kapatma" },
  { t: "Blame Shifting (Suç Atma)", d: "Sorumluluğu sürekli başkasına yükleme" },
  { t: "Minimizing (Küçümseme)", d: "Yaptığı kötülüğü önemsizleştirme" },
  { t: "Ghosting (Hayalet Olma)", d: "Açıklama yapmadan ortadan kaybolma" },
  { t: "Benching (Yedek Kulübesine Alma)", d: "İlişkiyi askıda tutma" },
  { t: "Breadcrumbing (Kırıntı Verme)", d: "Umut verip geri çekilme" },
  { t: "Countering (İtiraz Etme)", d: "Her düşünceye sistematik karşı çıkma" },
  { t: "Trivializing (Önemsizleştirme)", d: "Duyguları değersiz kılma" },
  { t: "Blocking/Diverting (Engelleme)", d: "Konuyu kasten değiştirme" },
  { t: "Narcissistic Supply (Narsisistik Besleme)", d: "Narsistin hayranlık ihtiyacı" },
  { t: "Flying Monkeys (Uçan Maymunlar)", d: "Manipülatörün müttefiklerini kullanması" },
  { t: "Scapegoating (Günah Keçisi)", d: "Tek kişiyi suçlu ilan etme" },
  { t: "Emotional Blackmail (Duygusal Şantaj)", d: "Korku, sorumluluk ve suçluluk (FOG) üçgeni" }
];

konular.forEach((k, index) => {
  manipulasyonData.push({
    id: idCounter++,
    slug: `manipulasyon-${index+1}`,
    cat: 'manipulasyon',
    emoji: '🐍',
    title: k.t,
    dur: '10 dk',
    level: 'İleri',
    freq: 'Psikoloji',
    desc: `Bir psikolojik şiddet ve manipülasyon taktiği olan ${k.t} tekniği: ${k.d}.`,
    benefits: ['Toksik insanları hayatınıza almadan önce radarınızı açar', 'Kendi sınırlarınızı (Boundaries) korumanızı sağlar'],
    mistakes: ['Manipülatörle mantıklı bir tartışmaya girip kazanacağını sanmak (Asla kazanamazsınız)'],
    phrase: null,
    steps: [
      `1. Tespit: Karşınızdaki kişinin ${k.t} taktiğini kullandığını fark edin ve isimlendirin.`,
      `2. Duygusal Kopuş (Grey Rock): Tepki vermeyin, sıkıcı ve nötr (gri kaya) olun. Manipülatörler dramadan beslenir.`,
      `3. Sınır Çiz: Açıklama yapmadan, savunmaya geçmeden sadece "Hayır" deyin ve konuyu kapatın.`
    ],
    variations: ['🔄 Geriye Dönük İnceleme: Geçmişte yaşadığınız toksik bir ilişkide bu taktiğin size nasıl uygulandığını yazın.'],
    tip: '💡 Manipülatör sizi suçlu hissettiriyorsa taktik işe yarıyor demektir. Geri adım atın ve olaya dışarıdan (3. kişi gözüyle) bakın.',
    related: []
  });
});

let appjs = fs.readFileSync('public/app.js', 'utf8');
let datajs = fs.readFileSync('diksiyon-data.js', 'utf8');

const newObjectsStr = manipulasyonData.map(ex => JSON.stringify(ex, null, 2)).join(',\n') + '\n';

appjs = appjs.replace(/\s*\];\s*$/, ',\n' + newObjectsStr + '];\n');
fs.writeFileSync('public/app.js', appjs, 'utf8');

datajs = datajs.replace(/\s*\];\s*$/, ',\n' + newObjectsStr + '];\n');
fs.writeFileSync('diksiyon-data.js', datajs, 'utf8');

console.log('24 Manipulasyon items injected successfully. Total count should be 800.');
