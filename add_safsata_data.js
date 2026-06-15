const fs = require('fs');

const safsatalar = [
  "Ad Hominem (Kişiye Saldırı)", "Tu Quoque (Sen de Yaptın)", "Poisoning the Well (Kuyuyu Zehirleme)", "Genetic Fallacy (Köken Safsatası)",
  "Appeal to Authority (Otoriteye Başvurma)", "Appeal to Tradition (Gelenekçilik)", "Appeal to Novelty (Yenilikçilik)", "Bandwagon (Sürü Psikolojisi)",
  "Appeal to Emotion (Duygu Sömürüsü)", "Appeal to Fear (Korkutma)", "Appeal to Pity (Acındırma)", "Appeal to Flattery (Dalkavukluk)",
  "Straw Man (Saman Adam)", "Red Herring (Kırmızı Balık)", "False Dilemma (Sahte İkilem)", "Slippery Slope (Kaygan Zemin)",
  "Circular Reasoning (Döngüsel Mantık)", "Hasty Generalization (Acele Genelleme)", "Cherry Picking (Seçici Veri)", "False Cause (Sahte Neden)",
  "Post Hoc (Sonrasında = Yüzünden)", "Correlation ≠ Causation", "Moving the Goalposts (Kale Değiştirme)", "No True Scotsman (Gerçek Şey Değil)",
  "Burden of Proof (İspat Yükü)", "Argument from Ignorance", "Appeal to Nature (Doğal Olan İyidir)", "Composition Fallacy (Bileşim)",
  "Division Fallacy (Bölme)", "Equivocation (Anlam Kaydırma)", "Ambiguity (Belirsizlik)", "Texas Sharpshooter (Teksaslı Nişancı)",
  "Gambler's Fallacy (Kumarbaz Yanılgısı)", "Survivorship Bias (Hayatta Kalma Yanılgısı)", "Sunk Cost Fallacy (Batık Maliyet)", "Confirmation Bias (Doğrulama Yanılgısı)",
  "Dunning-Kruger Etkisi", "Anchoring Bias (Çıpa Etkisi)", "Availability Heuristic", "Halo Effect (Hale Etkisi)",
  "False Equivalence (Sahte Eşitlik)", "Whataboutism (Peki Ya Bunlar?)", "Gish Gallop (Argüman Sağanağı)", "Nirvana Fallacy (Mükemmeliyetçilik)",
  "Appeal to Consequences", "Loaded Question (Tuzaklı Soru)", "Begging the Question (Sonucu Varsayma)", "False Analogy (Yanlış Benzetme)",
  "Special Pleading (Özel Muafiyet)", "Middle Ground (Uzlaşma Safsatası)"
];

const safsataData = [];
let idCounter = 517;

// 1-50: Teori
safsatalar.forEach((s, index) => {
  safsataData.push({
    id: idCounter++,
    slug: `safsata-${index+1}`,
    cat: 'safsata',
    emoji: '🛑',
    title: s,
    dur: '10 dk',
    level: 'İleri',
    freq: 'Teori',
    desc: `${s} - Mantık hatasının tanımı, mekanizması, tartışmalarda nasıl kullanıldığı ve asıl niyetin ne olduğu.`,
    benefits: ['Karşı tarafın argümanındaki boşluğu anında görmenizi sağlar', 'Manipülasyona karşı zihinsel zırh oluşturur'],
    mistakes: ['Bu safsatayı haklı çıkmak için bir silah olarak kullanmak (Fallacy Fallacy)'],
    phrase: null,
    steps: [
      `1. Tanım: ${s} safsatasının arkasındaki psikolojik hileyi öğrenin.`,
      `2. Tespit: Karşı tarafın argümandan çok neye (duyguya, karaktere, korkuya) odaklandığını bulun.`,
      `3. Çürütme: "Şu an konuyu x'e çekiyorsunuz ama asıl argümanımız y" diyerek çerçeveyi (frame) geri alın.`
    ],
    variations: ['🔄 Günlük Gözlem: Bugün izlediğiniz bir haber tartışmasında bu safsatanın yapılıp yapılmadığını not edin.'],
    tip: '💡 Safsatayı çürütürken asla karşı tarafı aşağılamayın, sadece mantıktaki atlamayı nazikçe gösterin.',
    related: []
  });
});

// 51-100: Gerçek Hayat Case Studies
safsatalar.forEach((s, index) => {
  safsataData.push({
    id: idCounter++,
    slug: `safsata-vaka-${index+1}`,
    cat: 'safsata',
    emoji: '🔍',
    title: `Vaka Analizi: ${s}`,
    dur: '15 dk',
    level: 'Uzman',
    freq: 'Analiz',
    desc: `${s} safsatasının gerçek hayattan alınmış mahkeme, siyaset veya iş dünyası vaka incelemesi. Nasıl tespit edildi ve nasıl çürütüldü?`,
    benefits: ['Teorik bilgiyi pratik reflekse dönüştürür', 'Kriz anlarında hızlı düşünme yeteneği kazandırır'],
    mistakes: ['Vakayı sadece okuyup geçmek, benzer senaryoları kendi hayatında düşünmemek'],
    phrase: null,
    steps: [
      '1. Vaka Okuması: Olayın geçtiği bağlamı (İş toplantısı, basın açıklaması, tartışma) inceleyin.',
      '2. Dekonstrüksiyon: Konuşmacının tam olarak hangi cümlesinde mantık zincirinin koptuğunu işaretleyin.',
      '3. Rebuttal (Çürütme): Eğer siz o masada olsaydınız, bu safsataya karşı tek cümlelik cevabınız ne olurdu yazın.'
    ],
    variations: ['🔄 Rol Yapma: Bir arkadaşınızla bu vakayı canlandırın ve safsatayı canlı olarak püskürtün.'],
    tip: '💡 Safsata ustaları hızlı konuşur (Gish Gallop vb.). Analiz yeteneğiniz sizi bu hızın karşısında yavaşlatan ve sakinleştiren tek güçtür.',
    related: []
  });
});

let appjs = fs.readFileSync('public/app.js', 'utf8');
let datajs = fs.readFileSync('diksiyon-data.js', 'utf8');

const newObjectsStr = safsataData.map(ex => JSON.stringify(ex, null, 2)).join(',\n') + '\n';

// Replace the array ending
appjs = appjs.replace(/\s*\];\s*$/, ',\n' + newObjectsStr + '];\n');
fs.writeFileSync('public/app.js', appjs, 'utf8');

datajs = datajs.replace(/\s*\];\s*$/, ',\n' + newObjectsStr + '];\n');
fs.writeFileSync('diksiyon-data.js', datajs, 'utf8');

console.log('100 Safsata items injected successfully. Total count should be 616.');
