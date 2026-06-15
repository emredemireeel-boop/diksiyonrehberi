const fs = require('fs');

const muzakereData = [];
let idCounter = 337;

// 1-12: Core Concepts
const coreItems = [
  { title: "BATNA (Best Alternative) Kavramı", type: "article", desc: "Müzakereye girmeden önce masadan kalktığınızda elinizdeki 'En İyi Alternatif' nedir?" },
  { title: "ZOPA (Zone of Possible Agreement)", type: "article", desc: "Alıcı ile satıcının kırmızı çizgileri arasındaki 'Olası Uzlaşma Alanı'nı hesaplama matematiği." },
  { title: "Harvard Müzakere Modeli", type: "article", desc: "Kişilerle sorunları birbirinden ayırarak, pozisyonlar yerine 'Çıkarlara' odaklanan Win-Win (Kazan-Kazan) prensibi." },
  { title: "Anchoring (Çıpa Atma) Tekniği", type: "article", desc: "Müzakerede ilk sayıyı söyleyenin, tüm pazarlığın psikolojik sınırlarını belirleme (Çıpalama) avantajı." },
  { title: "Geri Çekilme (Flinch) Taktiği", type: "article", desc: "Karşı tarafın teklifi karşısında fiziksel veya sessiz kalarak 'şok olmuş' gibi yaparak teklifi revize ettirme." },
  { title: "İyi Polis-Kötü Polis", type: "article", desc: "B2B veya kurumsal müzakerelerde bir kişinin sert, diğerinin tavizkar görünerek karşı tarafı manipüle etmesi." },
  { title: "Maaş Pazarlığı Simülasyonu", type: "builder", desc: "İş görüşmesinde 'Ne kadar maaş bekliyorsunuz?' tuzağına düşmeden çıpa atma pratiği." },
  { title: "Araba Satışı Müzakere Simülasyonu", type: "builder", desc: "İkinci el araba alıp satarken asimetrik bilgi ve ZOPA sınırlarını test etme oyunu." },
  { title: "Tedarikçi Müzakeresi", type: "builder", desc: "B2B ortamında sadece fiyata değil, ödeme vadesi ve teslimata odaklanarak değeri genişletme." },
  { title: "Diplomatik Dil ve İfadeler", type: "article", desc: "Sert talepleri ve ret cevaplarını ('Hayır'), ilişkileri bozmadan diplomatik bir dille ambalajlama sanatı." },
  { title: "Çıkmaz Kırma (Deadlock Breaking)", type: "article", desc: "Tarafların kilitlendiği, masanın dağılmak üzere olduğu anlarda konuyu değiştirerek süreci tekrar başlatma." },
  { title: "Kültürlerarası Müzakere Farkları", type: "article", desc: "Japon (Sessizlik), Amerikan (Hızlı Çözüm), Türk (İlişki) ve Arap müzakere kültürlerinin deşifresi." }
];

coreItems.forEach(item => {
  muzakereData.push({
    id: idCounter++,
    slug: `muzakere-${item.title.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '')}`,
    cat: 'muzakere',
    emoji: '🤝',
    title: item.title,
    dur: '10 dk',
    level: item.type === 'builder' ? 'Orta' : 'İleri',
    freq: 'Gerektiğinde',
    desc: item.desc,
    benefits: ['Masadan para bırakarak kalkmanızı engeller', 'Duygusal tepkileri rasyonel (matematiksel) bir zeminle değiştirir', 'İş ve günlük hayattaki ikna oranını doğrudan artırır'],
    mistakes: ['Masaya BATNA (alternatif) olmadan, "muhtaç" bir psikolojiyle oturmak', 'Sadece "fiyat" üzerinden pazarlık edip "değeri" (Zaman, kalite, opsiyonlar) genişletmemek'],
    phrase: null,
    steps: [
      `1. Mantığı Anlama: ${item.title} stratejisinin sadece ticarette değil, ikili ilişkilerde de geçerli olduğunu fark edin.`,
      `2. Simülasyon Hazırlığı: Müzakereye asla plansız girilmez. A, B ve C planlarınızı rakamlarla kağıda dökün.`,
      `3. Dinleme ve Sessizlik: İlk teklifi duyduğunuzda anında cevap vermeyin. 3 saniye sessiz kalmak karşı tarafı panikletir.`,
      `4. Uygulama: ${item.type === 'builder' ? 'Bu builder senaryosundaki adımları kendi hayatınızdaki bir pazarlığa uyarlayın.' : 'Öğrendiğiniz teoriyi ilk fırsatta küçük bir pazarlıkta test edin.'}`
    ],
    variations: [
      `🔄 Taktik Tersine Çevirme: Rakibinizin size ${item.title.split(' ')[0]} uyguladığını anladığınız an, bunu sesli olarak (Gülümseyerek) dile getirerek etkisini sıfırlayın.`
    ],
    tip: '💡 Dünyanın en iyi müzakerecisi "Hayır" demekten korkmayan ve masadan ne zaman kalkacağını (Kırmızı çizgisini) baştan bilen kişidir.',
    related: []
  });
});

// 13-30: Simulations & Analyzers
const cases = [
  { t: "FBI Rehine Müzakereleri (Chris Voss)", d: "Aşırı kriz anlarında 'Taktiksel Empati' ve 'Aynalama' tekniği." },
  { t: "Mısır-İsrail Camp David Anlaşması", d: "Çözülemez görünen (Toprak vs Güvenlik) pozisyonlardan çıkarlara geçişin tarihi zaferi." },
  { t: "Emlakçı Müzakeresi Simülasyonu", d: "Ev alım satımında komisyon oranları ve zaman kısıtlamalarını (Deadline) kullanma pratiği." },
  { t: "İş Ortaklığı Feshi Simülasyonu", d: "Duygusal yükü yüksek olan bir ayrılıkta, hisseleri rasyonel şekilde bölme (Kazan-Kazan) egzersizi." },
  { t: "Steve Jobs vs Disney (Pixar) Pazarlığı", d: "Kaldıraç (Leverage) gücü azken asimetrik gücü kendi lehine çevirme dehası." },
  { t: "Startup Yatırımcı (Pitch) Görüşmesi", d: "Yatırımcıya (VC) karşı değerleme (Valuation) oranını koruma taktikleri." },
  { t: "Sokak Pazarı Simülasyonu (Aşırı Fiyat Kırma)", d: "Ortadoğu ve Türk kültürüne özgü agresif fiyat kırma ve çekip gitme blöfü." },
  { t: "Korsan Müzakeresi: Somali Vakaları", d: "Tamamen irrasyonel aktörlerle pazarlık yapmanın psikolojik sınırları." },
  { t: "Apple vs Samsung Patent Savaşı", d: "Sıfır toplamlı oyunlarda (Zero-Sum Game) Yıpratma (Attrition) stratejisi." },
  { t: "Freelancer - Müşteri Bütçe Simülasyonu", d: "'Bütçemiz kısıtlı' bahanesine karşı Kapsam (Scope) daraltma taktiği." },
  { t: "Çocukla Müzakere Simülasyonu", d: "İrrasyonel, öfke nöbeti geçiren bir çocuğu (veya yetişkini) Illusory Choice (Yapay Seçenek) ile ikna etme." },
  { t: "Sessizlik Taktiği Analizi (Awkward Silence)", d: "Japon müzakerecilerin saatlerce susarak Amerikalılara nasıl taviz verdirdiğinin incelenmesi." },
  { t: "Restoran Hesap İtirazı", d: "Hizmet sektöründe öfkelenmeden ve bağırmadan, faturadan kalem sildirme inceliği." },
  { t: "Sendika Grev Pazarlığı (Toplu Sözleşme)", d: "Masaya kitlelerin (Kamuoyu) gücünü ve baskısını koyarak avantaj sağlama." },
  { t: "Kötü Haberi Verme Müzakeresi", d: "Tedarikçiye ödemenin gecikeceğini, ilişkiyi koparmadan iletme (Tamponlama) stratejisi." },
  { t: "Zayıf BATNA Simülasyonu", d: "Elinizde hiçbir alternatif yokken ve köşeye sıkışmışken blöf (Bluffing) yapma sanatı." },
  { t: "Zaman Sıkıştırması (Exploding Offer)", d: "'Bu teklif sadece yarına kadar geçerli' psikolojik manipülasyonunu atlatma analizi." },
  { t: "Disney vs Sony (Spider-Man) Hakları", d: "Kar paylaşımında 'Ortak pastayı büyütmek' yerine 'Pastadan pay kapma' hatasının anatomisi." }
];

cases.forEach((c, index) => {
  muzakereData.push({
    id: idCounter++,
    slug: `vaka-${index+13}`,
    cat: 'muzakere',
    emoji: c.t.includes('Simülasyon') ? '🎯' : '🕵️',
    title: `${c.t.includes('Simülasyon') ? 'Simülasyon:' : 'Analiz:'} ${c.t.replace(/Simülasyonu?/, '').trim()}`,
    dur: '15 dk',
    level: 'İleri',
    freq: 'Case Study',
    desc: c.d,
    benefits: ['Pratik senaryolarla zihinsel refleksleri geliştirir', 'Tarihi hatalardan ders çıkararak büyük finansal kayıpları önler'],
    mistakes: ['Vakaları sadece bir hikaye gibi okuyup, arkasındaki BATNA/ZOPA matematiğini görmemek'],
    phrase: null,
    steps: [
      '1. Bağlam: Masadaki güç dengesini (Leverage) analiz edin. Kimin aciliyeti var? Kimin parası var?',
      '2. Psikoloji: Karşı tarafın "istediği (fiyat)" ile aslında "ihtiyacı olan (Örn: güvenlik, hız)" arasındaki farkı bulun.',
      '3. Hamle: Analizde kazanan tarafın uyguladığı o kırılma anını (Taviz kopardığı saniyeyi) not edin.',
      '4. Adaptasyon: Bu büyük vakadan çıkan stratejiyi, yarın yapacağınız küçük bir alışverişe veya maaş zammı konuşmasına kopyalayın.'
    ],
    variations: [
      '🔄 Rölantide Kalmak: Simülasyonlarda her zaman saldıran taraf değil, bazen "bekleyen ve karşı tarafın hata yapmasını izleyen" taraf olmayı deneyin.'
    ],
    tip: '💡 Büyük anlaşmalar masada bitmez. Anlaşmalar, masaya oturmadan önce yapılan "Alternatif (BATNA)" hazırlığında kazanılır veya kaybedilir.',
    related: []
  });
});

let appjs = fs.readFileSync('public/app.js', 'utf8');
let datajs = fs.readFileSync('diksiyon-data.js', 'utf8');

const newObjectsStr = muzakereData.map(ex => JSON.stringify(ex, null, 2)).join(',\n') + '\n';

// Replace the array ending
appjs = appjs.replace(/\s*\];\s*$/, ',\n' + newObjectsStr + '];\n');
fs.writeFileSync('public/app.js', appjs, 'utf8');

datajs = datajs.replace(/\s*\];\s*$/, ',\n' + newObjectsStr + '];\n');
fs.writeFileSync('diksiyon-data.js', datajs, 'utf8');

console.log('30 items for Muzakere Kategorisi injected successfully.');
