const fs = require('fs');

const mobbingData = [];
let idCounter = 801;

const mobbingKonular = [
  { t: "Mobbing (İş Yeri Zorbalığı)", d: "Sistematik psikolojik baskı" },
  { t: "Micromanagement (Mikro Yönetim)", d: "Aşırı kontrol ile güven zedeleme" },
  { t: "Credit Stealing (Fikir Hırsızlığı)", d: "Başkasının işini sahiplenme" },
  { t: "Gaslighting at Work", d: "İş yerinde gerçeklik bozma" },
  { t: "Passive-Aggressive E-mails", d: "CC ekleme, sarkastik ton" },
  { t: "Strategic Incompetence", d: "Kasıtlı beceriksizlik ile iş kaçırma" },
  { t: "Information Hoarding", d: "Bilgiyi tekelleştirme" },
  { t: "Sabotaj ve Engelleme", d: "Projeleri gizlice baltalama" },
  { t: "Patron Favorisi (Favoritism)", d: "Kayırmacılığa karşı savunma" },
  { t: "Toplantı Manipülasyonları", d: "Sözü kesme, konuyu çalma, saldırı" },
  { t: "Performans Değerlendirme Manipülasyonu", d: "Haksız geri bildirim" },
  { t: "İşten Çıkarmakla Tehdit", d: "Gizli veya açık tehdit taktikleri" }
];

mobbingKonular.forEach((k, index) => {
  mobbingData.push({
    id: idCounter++,
    slug: `mobbing-${index+1}`,
    cat: 'mobbing',
    emoji: '💼',
    title: k.t,
    dur: '10 dk',
    level: 'İleri',
    freq: 'Kurumsal',
    desc: `İş yerinde karşılaşılan ${k.t.toLowerCase()} taktiği: ${k.d}.`,
    benefits: ['Kurumsal hayatın zehirli oyunlarını deşifre eder', 'Kariyerinizi ve akıl sağlığınızı korur'],
    mistakes: ['Kurumsal manipülasyona duygusal tepki verip "sorunlu çalışan" durumuna düşmek'],
    phrase: null,
    steps: [
      `1. Kayıt Altına Al: Olayları tarih, saat ve e-posta (yazılı kanıt) ile belgeleyin.`,
      `2. Profesyonel Mesafe: Manipülatöre karşı daima nezaketi koruyun ama duygusal mesafe koyun.`,
      `3. Karşı Hamle: Duygusal şikayet yerine, somut verilere dayalı objektif raporlama yapın.`
    ],
    variations: ['🔄 Simülasyon: Son yaşadığınız iş yeri gerginliğini objektif kelimelerle İK\'ya nasıl raporlayacağınızı yazın.'],
    tip: '💡 İş yerinde "Haklı" olmak yetmez, "Kanıtlanabilir" olmak gerekir. Yazılı iletişim (e-mail) en büyük silahınızdır.',
    related: []
  });
});

const mobbingSenaryolar = [
  "Toplantıda Fikrinizin Çalınması", "Gizli CC E-posta Tuzağı", "Yöneticinin Sürekli Karar Değiştirmesi",
  "Takım Arkadaşının Kasıtlı İş Geciktirmesi", "Dedikodu ve İtibar Suikasti",
  "Haksız Performans Notuna İtiraz", "Mobbinge Karşı İK ile Görüşme",
  "Mikro Yöneticiyle (Micromanager) Başa Çıkma", "İş Yükünün Sadece Size Yıkılması",
  "Pasif Agresif Takım Lideri", "Bilinçli Olarak Toplantıya Çağrılmamak",
  "Manipülatif İstifa Tehdidi Yönetimi", "Yönetici Tarafından Hedef Gösterilmek"
];

mobbingSenaryolar.forEach((s, index) => {
  mobbingData.push({
    id: idCounter++,
    slug: `mobbing-senaryo-${index+1}`,
    cat: 'mobbing',
    emoji: '♟️',
    title: `Vaka: ${s}`,
    dur: '12 dk',
    level: 'İleri',
    freq: 'Senaryo',
    desc: `${s} krizinde profesyonel duruşunuzu bozmadan uygulanacak karşı savunma stratejisi.`,
    benefits: ['Kriz anlarında soğukkanlılığı artırır', 'Diplomatik (Corporate) dille karşılık verme yeteneği kazandırır'],
    mistakes: ['Bağırarak veya istifa ederek manipülatöre istediğini vermek'],
    phrase: null,
    steps: [
      '1. Provokasyonu Tanı: Amacın sizi öfkelendirmek ve hata yaptırmak olduğunu fark edin.',
      '2. Zaman Kazan: "Bu konuyu değerlendirip yazılı dönüş yapacağım" deyin.',
      '3. Yazılı Çözüm: Konuyu objektif, kanıtlı ve sadece iş odaklı bir e-posta ile çözümleyin.'
    ],
    variations: ['🔄 Rol Yapma: İş arkadaşınızla bu senaryodaki "zorba yönetici" ve "soğukkanlı çalışan"ı canlandırın.'],
    tip: '💡 Kurumsal dilde (Corporate speak) duygulara yer yoktur. "Kırıldım" yerine "Sürecin verimliliği olumsuz etkilendi" denir.',
    related: []
  });
});

let appjs = fs.readFileSync('public/app.js', 'utf8');
let datajs = fs.readFileSync('diksiyon-data.js', 'utf8');

const newObjectsStr1 = mobbingData.map(ex => JSON.stringify(ex, null, 2)).join(',\n') + '\n';
appjs = appjs.replace(/\s*\];\s*$/, ',\n' + newObjectsStr1 + '];\n');
datajs = datajs.replace(/\s*\];\s*$/, ',\n' + newObjectsStr1 + '];\n');

fs.writeFileSync('public/app.js', appjs, 'utf8');
fs.writeFileSync('diksiyon-data.js', datajs, 'utf8');

console.log('25 Mobbing items injected successfully. Next ID: ' + idCounter);
