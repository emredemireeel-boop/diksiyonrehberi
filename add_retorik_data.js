const fs = require('fs');

const figures = [
  { title: "Anafora (Tekrar)", slug: "anafora-tekrar", desc: "Cümle başında aynı kelimenin veya kelime grubunun güçlü bir şekilde tekrar edilmesi." },
  { title: "Epistrofe", slug: "epistrofe", desc: "Cümle sonunda aynı kelimenin veya kelime grubunun tekrar edilmesi." },
  { title: "Symploce", slug: "symploce", desc: "Anafora ve Epistrofe'nin birleşimi: Cümlelerin hem aynı kelimeyle başlayıp hem aynı kelimeyle bitmesi." },
  { title: "Trikolon (Üçlü Kural)", slug: "trikolon", desc: "Fikirlerin üç parçalı, ritmik ve giderek büyüyen bir yapıyla sıralanması." },
  { title: "Antitez (Karşıtlık)", slug: "antitez", desc: "Zıt kavramların çarpıcı bir tezat oluşturacak şekilde yan yana getirilmesi." },
  { title: "Chiasmus (Çapraz Yapı)", slug: "chiasmus", desc: "Kavramların AB-BA kalıbında, ayna yansıması gibi çapraz olarak dizilmesi." },
  { title: "Hyperbole (Abartma)", slug: "hyperbole", desc: "Bir fikri vurgulamak için gerçeğin çok ötesinde mantıksız bir abartı kullanılması." },
  { title: "Litotes (Küçümseme)", slug: "litotes", desc: "Bir şeyi, onun zıttını reddederek (olumsuzu kullanarak) olumlu ifade etme sanatı." },
  { title: "Metonimi", slug: "metonimi", desc: "Bir kavramı doğrudan söylemek yerine, onunla yakından ilişkili başka bir kelimeyle ifade etmek." },
  { title: "Sinekdoka", slug: "sinekdoka", desc: "Bir bütünün parçasını söyleyerek bütünü kastetmek (veya tam tersi)." },
  { title: "Metafor Mastery", slug: "metafor-mastery", desc: "İki farklı şey arasındaki benzerliği kullanarak genişletilmiş bir soyut benzetme kurmak." },
  { title: "Simile (Benzetme)", slug: "simile-benzetme", desc: "'Gibi', 'kadar' edatları kullanılarak yapılan doğrudan ve açık kıyaslamalar." },
  { title: "Allegori (Örtülü Anlatım)", slug: "allegori", desc: "Tüm metni, karakterleri ve olayları baştan sona bir metafora dönüştürme sanatı." },
  { title: "İroni (İstihza)", slug: "ironi-istihza", desc: "Söylenen kelimenin veya cümlenin tam tersinin kastedilmesi, ince alay." },
  { title: "Oksimor", slug: "oksimor", desc: "Anlamca birbiriyle çelişen iki kelimenin yeni bir anlam yaratmak için birleştirilmesi." },
  { title: "Paradoks", slug: "paradoks", desc: "İlk bakışta çelişkili veya imkansız görünen ancak içinde derin bir gerçek barındıran ifade." },
  { title: "Retorik Soru", slug: "retorik-soru", desc: "Cevap almak için değil, bir noktayı vurgulamak için sorulan, cevabı içinde saklı sorular." },
  { title: "Apostrophe", slug: "apostrophe", desc: "Konuşmacının orada olmayan birine, ölü birine veya soyut bir kavrama aniden seslenmesi." },
  { title: "Prosopopoeia (Kişileştirme)", slug: "prosopopoeia", desc: "Cansız nesnelere veya soyut kavramlara insan özellikleri ve konuşma yeteneği verme." },
  { title: "Klimaks (Doruk)", slug: "klimaks", desc: "Cümlelerin veya fikirlerin önem derecesine göre giderek yükselerek zirveye ulaşması." },
  { title: "Anti-Klimaks", slug: "anti-klimaks", desc: "Büyük bir beklenti yaratıp aniden önemsiz veya komik bir bitişle beklentiyi kırma." },
  { title: "Asyndeton", slug: "asyndeton", desc: "Cümleleri veya kelimeleri birbirine bağlarken kasıtlı olarak hiçbir bağlaç kullanmama (Hız katar)." },
  { title: "Polysyndeton", slug: "polysyndeton", desc: "Cümleleri veya kelimeleri sıralarken her araya kasıtlı olarak bağlaç koyma (Ağırlık katar)." },
  { title: "Ellipsis (Eksiltme)", slug: "ellipsis", desc: "Cümlenin bazı öğelerini kasıtlı olarak atlayıp, anlamı dinleyicinin bağlamdan tamamlamasına bırakma." },
  { title: "Anadiplozis", slug: "anadiplozis", desc: "Bir cümlenin sonundaki kelimenin, hemen ardından gelen cümlenin ilk kelimesi olarak kullanılması." },
  { title: "Epizeuksis", slug: "epizeuksis", desc: "Aynı kelimenin hiçbir aracı kelime olmadan peş peşe (Vurgu için) tekrar edilmesi." },
  { title: "Pleonazm", slug: "pleonazm", desc: "Anlamı güçlendirmek için dilbilgisi açısından gereksiz (fazladan) kelimeler kullanmak." },
  { title: "Zeugma", slug: "zeugma", desc: "Tek bir fiilin, hem soyut hem somut iki farklı nesneye aynı anda bağlanması." },
  { title: "Enallage", slug: "enallage", desc: "Dikkat çekmek için dilbilgisi kurallarının (Zaman, kişi, kelime türü) kasıtlı olarak ihlal edilmesi." },
  { title: "Paralelizm", slug: "paralelizm", desc: "Benzer fikirleri ifade ederken gramatik yapıların birebir aynı (paralel) tutulması." }
];

let retorikData = [];
let idCounter = 237;

// Generate 30 Figures
figures.forEach((fig, index) => {
  retorikData.push({
    id: idCounter++,
    slug: fig.slug,
    cat: 'retorik',
    emoji: '🏛️',
    title: fig.title,
    dur: '10 dk',
    level: index < 10 ? 'Başlangıç' : (index < 20 ? 'Orta' : 'İleri'),
    freq: 'Metin Yazarken',
    desc: fig.desc,
    benefits: ['Konuşmanın ikna ediciliğini artırır', 'Dinleyicinin zihninde kalıcı bir kanca oluşturur', 'Sıradan bir metni "Edebi ve Güçlü" bir hitabete çevirir'],
    mistakes: ['Figürü çok sık kullanarak metni yapaylaştırmak', 'Anlamı feda edip sadece ritme odaklanmak'],
    phrase: `Örnek: Bu bir ${fig.title.split(' ')[0]} örneğidir.`,
    steps: [
      '1. Mantığı Kavrama: Bu figür, kelimelerin matematiksel bir dizilimidir. Amacı beynin örüntü tanıma sistemini hacklemektir.',
      '2. Gözlem: Ünlü politikacıların, TEDx konuşmacılarının veya yazarların bu figürü nasıl kullandığını dinleyin.',
      '3. Taslak: Düz bir cümleyi alın. (Örn: "Çok çalıştık ve başardık.")',
      `4. Uygulama: Bu cümleyi ${fig.title.split(' ')[0]} kurallarına göre yeniden yazın. Duygunun nasıl büyüdüğünü görün.`
    ],
    variations: [
      `🔄 Günlük Kullanım: ${fig.title.split(' ')[0]} figürünü sadece sahnede değil, bir e-posta yazarken veya toplantıda konuşurken de argümanınızı güçlendirmek için kullanın.`
    ],
    tip: `💡 Hitabet (Retorik) sadece "nasıl" konuştuğunuz değil, kelimeleri "hangi sıraya" dizdiğinizdir. ${fig.title.split(' ')[0]} beynin en sevdiği dizilimlerden biridir.`,
    related: []
  });
});

// Generate 30 Interactive Exercises
figures.forEach((fig, index) => {
  retorikData.push({
    id: idCounter++,
    slug: `egzersiz-${fig.slug}`,
    cat: 'retorik',
    emoji: '🧩',
    title: `Egzersiz: ${fig.title} (Builder & Dedektif)`,
    dur: '15 dk',
    level: index < 10 ? 'Başlangıç' : (index < 20 ? 'Orta' : 'İleri'),
    freq: 'Her Gün',
    desc: `${fig.title} figürünü metinlerin içinde dedektif gibi bulma ve kendi cümlelerinizi bu figürle inşa etme (Builder) antrenmanı.`,
    benefits: ['Figürü teoriden pratiğe geçirir', 'Anında cümle kurma refleksini hızlandırır', 'Pasif kelime dağarcığını aktife çevirir'],
    mistakes: ['Egzersizi yaparken kurallara tam uymamak ve yapıyı bozmak'],
    phrase: null,
    steps: [
      `1. Dedektif Aşaması: Verilen 5 karmaşık cümle içinden hangisinin ${fig.title.split(' ')[0]} olduğunu bulun.`,
      '2. Parçalama: Bulduğunuz cümleyi öğelerine ayırın. Neresi tekrar ediyor? Neresi zıtlık taşıyor?',
      `3. Builder (İnşa) Aşaması: Kendi kelimelerinizi kullanarak boşlukları doldurun ve yeni bir ${fig.title.split(' ')[0]} oluşturun.`,
      '4. Sesli Sınav: Yazdığınız bu retorik figürü, sesli olarak vurgulara dikkat ederek (Retorik duraklamalarla) okuyun.'
    ],
    variations: [
      '🔄 Serbest Stil: Boşluk doldurma (Builder) şablonuna bağlı kalmadan, sıfırdan tamamen orijinal bir argüman inşa edin.'
    ],
    tip: '💡 Retorik bir kas gibidir. Egzersiz yapmadan sadece kuralları bilmek, bisiklete binmeyi kitaptan okumak gibidir. Builder egzersizlerini mutlaka kağıda veya ekrana yazarak yapın.',
    related: []
  });
});

let appjs = fs.readFileSync('public/app.js', 'utf8');
let datajs = fs.readFileSync('diksiyon-data.js', 'utf8');

const newObjectsStr = retorikData.map(ex => JSON.stringify(ex, null, 2)).join(',\n') + '\n';

// Replace the array ending
appjs = appjs.replace(/\s*\];\s*$/, ',\n' + newObjectsStr + '];\n');
fs.writeFileSync('public/app.js', appjs, 'utf8');

datajs = datajs.replace(/\s*\];\s*$/, ',\n' + newObjectsStr + '];\n');
fs.writeFileSync('diksiyon-data.js', datajs, 'utf8');

console.log('60 items for Retorik Kategorisi injected successfully.');
