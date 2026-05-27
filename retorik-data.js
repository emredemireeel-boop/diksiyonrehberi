module.exports = [
  // ────────────────────────────────────────────────────────
  // ETHOS (Güvenilirlik)
  // ────────────────────────────────────────────────────────
  {
    id: 'e1', cat: 'ethos', icon: '🛡️', num: 'E1', badge: 'Derin İnceleme', badgeCls: 'ret-badge-beginner',
    type: 'article',
    title: 'Ethos: Otorite ve Güvenilirliğin Anatomisi',
    desc: 'Dinleyicinin size inanması için sadece doğruları söylemeniz yetmez; onların doğruları söyleyebilecek kapasitede ve niyette bir insan olduğunuza inanmaları gerekir.',
    content: [
      {
        sub: 'Ethos Nedir?',
        text: 'Ethos (ἦθος), Antik Yunanca\'da "karakter" anlamına gelir. Aristoteles\'e göre iknanın ilk ve en önemli sütunudur. Konuşmacının yetkinliği, dürüstlüğü ve dinleyiciye olan iyi niyetinin toplamıdır. Modern dünyada biz buna kısaca "itibar" ve "güvenilirlik" diyoruz.'
      },
      {
        sub: 'Ethos\'un 3 Temel Bileşeni',
        list: [
          '<strong>Phronesis (Pratik Bilgelik & Uzmanlık):</strong> Konuya hakim misiniz? Dinleyicinin karşısına çıkmayı hak edecek bir donanımınız veya deneyiminiz var mı?',
          '<strong>Arete (Ahlaki Karakter):</strong> Dürüst, tutarlı ve adil misiniz? Zor zamanlarda verdiğiniz kararlar karakterinizi gösterir.',
          '<strong>Eunoia (İyi Niyet):</strong> Konuşmanız kendi çıkarınız için mi, yoksa dinleyicinin faydasına mı? "Beni önemsiyor mu?" sorusunun cevabıdır.'
        ]
      },
      {
        sub: 'Nasıl İnşa Edilir?',
        text: 'Güvenilirlik sahneye çıktığınız an başlamaz. Geçmiş eylemleriniz (önceden bilinen itibarınız) ve sahnede sergilediğiniz tavrın (durum içi itibar) birleşimidir. Hata yaptığınızda bunu açıkça kabul etmek, zayıflığınızı değil dürüstlüğünüzü gösterdiği için Ethos\'unuzu şaşırtıcı şekilde artırır.'
      }
    ],
    takeaways: [
      'Uzmanlığınızı kibirlenmeden, hikayeleriniz içinde dolaylı olarak aktarın.',
      'Karşıt görüşlere saygı gösterin; adil olmak karakter göstergesidir.',
      'Sizden ziyade "dinleyicinin" çıkarını gözettiğinizi hissettirin.'
    ]
  },
  {
    id: 'e2', cat: 'ethos', icon: '🔍', num: 'E2', badge: 'Analiz', badgeCls: 'ret-badge-intermediate',
    type: 'analyzer',
    title: 'Warren Buffett\'ın Hissedar Mektubu',
    desc: 'Milyarlarca doları yöneten Warren Buffett, yatırımcılarının güvenini (Ethos) nasıl kazanıyor?',
    speechContext: 'Berkshire Hathaway 1989 Hissedarlara Mektup. Hata kabulünün Ethos üzerindeki etkisine mükemmel bir örnek.',
    speechText: [
      { text: 'İlk 25 yılımı değerlendirdiğimde, bazen iyi işler çıkardığımızı söyleyebilirim. ', type: 'neutral' },
      { text: 'Ancak, bu süreçte oldukça büyük, adeta başparmak acıtan bazı hatalar da yaptım.', type: 'ethos-honesty', note: 'Eunoia & Arete: Milyarder bir CEO\'nun mektuba başarılarıyla değil, hatalarıyla başlaması radikal bir dürüstlük göstergesidir. Yatırımcıların savunma kalkanlarını anında indirir.' },
      { text: ' Öğrendiğim en önemli ders şudur: İyi bir yönetici, kötü ekonomik temellere sahip bir şirketi yönettiğinde, itibarı yara alan şirket değil yöneticinin kendisi olur.', type: 'ethos-wisdom', note: 'Phronesis (Bilgelik): Kendi başarısızlığından çıkardığı evrensel ve aforizmatik bir dersi paylaşıyor. Hata yapmış ama bundan derin bir bilgelik (uzmanlık) elde etmiş.' },
      { text: ' Sizi temin ederim ki, paramızı tıpkı kendi parammış gibi yönetmeye devam edeceğim.', type: 'ethos-goodwill', note: 'Eunoia (İyi niyet): Dinleyiciyle (yatırımcılarla) ortak bir kaderi paylaştığını ve onların çıkarlarını gözettiğini vurguluyor.' }
    ]
  },

  // ────────────────────────────────────────────────────────
  // PATHOS (Duygu)
  // ────────────────────────────────────────────────────────
  {
    id: 'p1', cat: 'pathos', icon: '❤️', num: 'P1', badge: 'Derin İnceleme', badgeCls: 'ret-badge-beginner',
    type: 'article',
    title: 'Pathos: Mantığın Ötesindeki Karar Mekanizması',
    desc: 'Sinirbilim bize gösteriyor ki, duygusal beyin hasar gördüğünde insanlar mantıklı görünmelerine rağmen basit kararları bile alamıyorlar. İnsanları harekete geçiren şey mantık değil, duygudur.',
    content: [
      {
        sub: 'Duygunun İknadaki Yeri',
        text: 'Eğer insanları sadece verilerle ikna edebilseydik, bugün dünyada sigara içen kimse kalmazdı. Pathos, verinin kuru dünyasını, dinleyicinin iç dünyasındaki umut, korku, sevgi veya öfke ile bağlama sanatıdır.'
      },
      {
        sub: 'Etkili Bir Pathos İçin Araçlar',
        list: [
          '<strong>Hikaye Anlatımı (Storytelling):</strong> İstatistikler binleri, hikayeler ise "biri" anlatır. İnsan beyni hikayelerdeki karakterlerle biyolojik olarak empati kurar (Oksitosin salgılanır).',
          '<strong>Duyusal Dil:</strong> "Kötü bir durumdaydık" yerine "Soğuktan titriyorduk ve kimse yüzümüze bakmıyordu" demek beyindeki görsel/duyusal korteksi aktive eder.',
          '<strong>Görsel Analojiler:</strong> Anlaşılması zor veya soyut kavramları, insanların hissettiği günlük objelere benzetmek.'
        ]
      }
    ],
    takeaways: [
      'Mantık "Neden" sorusuna, Duygu "Neden Şimdi" (harekete geçme) sorusuna cevap verir.',
      'Sempati dışarıdan acımaktır, Empati ise duyguyu birlikte yaşamaktır. Konuşmanızda empati kurun.',
      'Aşırı Pathos manipülasyona girer. Ethos (güvenilirlik) ve Logos (mantık) ile dengelenmemiş duygu geri teper.'
    ]
  },
  {
    id: 'p2', cat: 'pathos', icon: '🛠️', num: 'P2', badge: 'Simülatör', badgeCls: 'ret-badge-advanced',
    type: 'builder',
    title: 'Bağış Kampanyası Konuşması İnşa Et',
    desc: 'Bir STK temsilcisisiniz. Temiz suya erişimi olmayan köyler için bağış toplamalısınız. Hedefiniz duygusal bir bağ kurup harekete geçirmek.',
    scenarioContext: 'İş adamlarından oluşan zor bir kitle. Sadece istatistikler işe yaramayacak.',
    steps: [
      {
        question: '1. Açılış (Kanca): Konuşmaya nasıl başlayacaksınız?',
        options: [
          { text: 'Dünya Sağlık Örgütü verilerine göre, her yıl 500.000 çocuk temiz su eksikliğinden hayatını kaybediyor.', score: 5, feedback: 'Mantıklı (Logos) bir açılış ama Pathos (duygu) yaratmakta yetersiz. Kitle bu tür sayılara bağışıklıdır.' },
          { text: 'Düşünün ki bu sabah uyandınız ve çocuğunuza içirecek bir bardak suyunuz yok.', score: 10, feedback: 'Güçlü! Empati kurdurarak dinleyicinin kendi çocuğu üzerinden konuyu kişiselleştirmesini sağladınız.' },
          { text: 'Biz "Umut Su" derneği olarak 10 yıldır Afrika\'da faaliyet gösteriyoruz.', score: 0, feedback: 'Zayıf. Derneği tanıtarak başladınız. Dinleyicinin duygularına hitap etmiyor.' }
        ]
      },
      {
        question: '2. Gelişme (Hikaye): Hangi hikayeyi kullanacaksınız?',
        options: [
          { text: 'Afrika kıtasının hidrolojik yapısı gereği su çıkarma maliyetleri çok yüksek. Yapacağınız bağışlar bu sondaj maliyetlerini düşürecek.', score: 3, feedback: 'Fazla teknik. Bağışçılar teknik detaylara değil, yaratacakları değişime yatırım yaparlar.' },
          { text: '7 yaşındaki Amara ile tanışın. Her sabah 10 kilometre yürüyüp çamurlu su taşıyor. Sizin yardımınızla köyüne bir kuyu açarsak Amara okula gidebilecek.', score: 10, feedback: 'Mükemmel Pathos! "Bireyin hikayesi" efekti (Identifiable Victim Effect) kullanıldı. Amara\'nın hikayesi istatistiklerden daha inandırıcıdır.' }
        ]
      },
      {
        question: '3. Kapanış (Call to Action): Nasıl bitireceksiniz?',
        options: [
          { text: 'Bugün cebinizden çıkacak 50 Dolar, bir masada bıraktığınız bahşiş olabilir ama Amara için bir ömür boyu sağlık ve eğitim demek. O kuyuyu bugün birlikte açalım.', score: 10, feedback: 'Çok güçlü çerçeveleme (Reframing). 50 Doların algılanan değerini küçültüp, etkisini devasa gösterdiniz. Net bir eyleme çağrı var.' },
          { text: 'Lütfen kapıdaki kutuya veya web sitemizden bağış yapmayı unutmayın. Yardımlarınız için teşekkürler.', score: 4, feedback: 'Standart ve etkisiz bir kapanış. Duygusal zirveyi eyleme dönüştürecek bir aciliyet yok.' }
        ]
      }
    ]
  },

  // ────────────────────────────────────────────────────────
  // LOGOS (Mantık)
  // ────────────────────────────────────────────────────────
  {
    id: 'l1', cat: 'logos', icon: '🧠', num: 'L1', badge: 'Derin İnceleme', badgeCls: 'ret-badge-intermediate',
    type: 'article',
    title: 'Logos: Kanıtın ve Aklın Gücü',
    desc: 'Aristoteles\'in üçüncü sütunu Logos, konuşmanın mantıksal geçerliliği ve yapısal sağlamlığıdır. Argümanınızın kemikleridir.',
    content: [
      {
        sub: 'Mantıksal Argüman Türleri',
        list: [
          '<strong>Tümdengelim (Deduction):</strong> Genel bir gerçekten yola çıkıp özel bir duruma uygulamak. "Tüm şirketler kâr etmek zorundadır. Biz de bir şirketiz. Öyleyse kâr etmeliyiz." Güçlü ama serttir.',
          '<strong>Tümevarım (Induction):</strong> Özel örneklerden genel bir kural çıkarmak. "Şube A\'da esnek çalışma saatleri verimliliği %20 artırdı. Şube B\'de %15 artırdı. Demek ki esnek çalışma genel olarak verimliliği artırır." Modern iş dünyasında en çok kullanılan yapıdır.',
          '<strong>Analoji (Kıyaslama):</strong> Bilinmeyen bir durumu bilinen bir duruma benzetmek. "Devletin bütçesini yönetmek, aile bütçesini yönetmek gibidir. Gelirinden fazlasını harcayamazsın." Karmaşık konuları basitleştirir.'
        ]
      },
      {
        sub: 'Veriyi İnsanileştirmek',
        text: 'Salt veriler akılda kalmaz. "Dünya çapında 1 Milyar GB veri üretiliyor" demek soyuttur. "Üretilen veriyi CD\'lere koysak ve üst üste dizsek aya ulaşıp geri dönerdik" demek Logos\'u zihinde canlandırır.'
      }
    ],
    takeaways: [
      'Neden-sonuç zincirini kırılmaz bir şekilde örün. Çıkarımlarınız (A ise B) net olmalıdır.',
      'Karşı argümanları görmezden gelmeyin; onları siz dile getirip (Prolepsis tekniği) mantıkla çürütün.',
      'İstatistikleri tek başlarına bırakmayın, her veriyi bir "bağlam" içine yerleştirin.'
    ]
  },

  // ────────────────────────────────────────────────────────
  // İKNA PSİKOLOJİSİ (Derin Dalış)
  // ────────────────────────────────────────────────────────
  {
    id: 'ikna1', cat: 'ikna', icon: '💡', num: 'I1', badge: 'Masterclass', badgeCls: 'ret-badge-advanced',
    type: 'article',
    title: 'Robert Cialdini\'nin 6 İkna Prensibi',
    desc: 'Etkili iletişimin ötesinde, insanların biyolojik ve sosyolojik karar alma mekanizmalarını hackleyen evrensel prensipler.',
    content: [
      {
        sub: '1. Karşılıklılık (Reciprocity)',
        text: 'İnsanlar kendilerine bir iyilik yapıldığında ya da bir şey verildiğinde karşılık verme borcu hissederler. Satışta "ücretsiz numune" verilmesinin veya restoranda hesapla birlikte naneli şeker gelmesinin (%14 daha fazla bahşiş) bilimsel temelidir.'
      },
      {
        sub: '2. Kıtlık (Scarcity)',
        text: 'Ulaşılması zor olan şey daha değerlidir. "Sadece 2 ürün kaldı" uyarısı mantıksal bir değerlendirme yapmanızı engeller ve amigdalayı tetikleyerek FOMO (Kaçırma Korkusu) yaratır.'
      },
      {
        sub: '3. Otorite (Authority)',
        text: 'İnsanlar uzmanlara, ünvanlara ve üniformalara itaat etmeye meyillidir. Fizik tedavi kliniğinin duvarındaki diplomalar, hastaların zor egzersiz programlarına %30 daha fazla uymasını sağlar.'
      },
      {
        sub: '4. Sosyal Kanıt (Social Proof)',
        text: 'Belirsizlik anında ne yapacağımıza, başkalarının ne yaptığına bakarak karar veririz. "Komedilerde arkadan gelen kahkaha efekti" (Laugh track) veya "Bunu alanlar bunları da aldı" algoritmaları bu zafiyete oynar.'
      },
      {
        sub: '5. Hoşlanma (Liking)',
        text: 'Bize benzeyen, bize iltifat eden veya ortak hedeflere sahip olduğumuz insanlara daha kolay evet deriz. Aynalama (mirroring) tekniği fiziksel hoşlanma ve uyum yaratır.'
      },
      {
        sub: '6. Tutarlılık (Commitment and Consistency)',
        text: 'Küçük bir söz veren insan, sırf önceki kararıyla tutarlı görünmek için daha sonraki büyük isteklere de "evet" der (Foot-in-the-door tekniği).'
      }
    ],
    takeaways: [
      'İkna, rasyonel bir tartışma kazanmak değil, beynin karar verme kısa yollarını doğru tetiklemektir.',
      'Bu teknikler birer araçtır. Etik kullanıldığında liderlik, kötüye kullanıldığında manipülasyon olur.'
    ]
  },
  {
    id: 'ikna2', cat: 'ikna', icon: '🔍', num: 'I2', badge: 'Analiz', badgeCls: 'ret-badge-advanced',
    type: 'analyzer',
    title: 'Gerçek Hayattan Manipülasyon Analizi',
    desc: 'Günlük hayatta karşımıza çıkan bir pazarlama metninin altındaki psikolojik silahları deşifre edelim.',
    speechContext: 'Bir e-ticaret sitesinden gelen promosyon e-postası.',
    speechText: [
      { text: 'Sayın Müşterimiz, bizi 5 yıldır tercih ettiğiniz için size özel bir hediye seçtik.', type: 'ethos-honesty', note: 'Karşılıklılık (Reciprocity) & Hoşlanma: Hem özel hissettiriyor hem de bir "hediye" vererek karşılık verme borcu yüklüyor.' },
      { text: ' Türkiye\'de sadece 10.000 kişinin sahip olduğu Elite Üyeliği...', type: 'logos-fallacy', note: 'Kıtlık (Scarcity) & Statü: Kısıtlı bir gruba dahil olma arzusu tetikleniyor.' },
      { text: ' Sektörün önde gelen uzmanlarının da tavsiye ettiği bu paket', type: 'ethos-wisdom', note: 'Otorite (Authority): "Uzmanlar" kelimesi ile sorumluluk otoriteye aktarılıyor.' },
      { text: ' dün 4.500 kişi tarafından aktif edildi.', type: 'ethos-goodwill', note: 'Sosyal Kanıt (Social Proof): "Herkes alıyor, benim de almam lazım" algısı yaratılıyor.' },
      { text: ' Kampanyanın bitmesine son 3 saat!', type: 'logos-fallacy', note: 'Aciliyet (Urgency/Scarcity): Rasyonel düşünme süresini elinizden alıp sizi dürtüsel karara itiyor.' }
    ]
  },

  // ────────────────────────────────────────────────────────
  // KONUSMA YAZIMI
  // ────────────────────────────────────────────────────────
  {
    id: 'ky1', cat: 'konusma-yazimi', icon: '📝', num: 'K1', badge: 'Temel Kurallar', badgeCls: 'ret-badge-beginner',
    type: 'article', title: 'Etkili Konuşma Yazımının Temelleri',
    desc: 'Bir konuşma okumak için değil, duyulmak için yazılır.',
    content: [
      { sub: 'Kanca (Hook)', text: 'Konuşmanıza asla "Merhaba benim adım..." diye başlamayın. Çarpıcı bir soru, şaşırtıcı bir istatistik veya bir hikayeyle başlayın.' },
      { sub: 'Kısa Cümleler', text: 'Konuşma dilinde uzun ve karmaşık cümleler dinleyicinin odağını kaybettirir. Nokta koymaktan korkmayın.' }
    ],
    takeaways: ['Girişte dikkat çek, gelişmede kanıtla, kapanışta harekete geçir.']
  },

  // ────────────────────────────────────────────────────────
  // RETORİK FİGÜRLERİ
  // ────────────────────────────────────────────────────────
  {
    id: 'rf1', cat: 'figurler', icon: '🎨', num: 'R1', badge: 'Sanat', badgeCls: 'ret-badge-intermediate',
    type: 'article', title: 'Sözcüklerin Mimarisi',
    desc: 'Büyük hatiplerin cümlelerini unutulmaz kılan gizli formüller.',
    content: [
      { sub: 'Anafor (Tekrarlama)', text: 'Aynı kelime grubunun ardışık cümlelerin başında kullanılması. Örn: "Bir hayalim var... Bir hayalim var..."' },
      { sub: 'Trikolon (Üçlü Yapı)', text: 'Fikirlerin üç parça halinde sunulması beyinde ritmik bir etki bırakır. Örn: "Geldim, gördüm, yendim."' },
      { sub: 'Antitez (Tezat)', text: 'Zıt fikirleri aynı cümlede buluşturmak. "Kendiniz için ne yapabileceğinizi değil, ülkeniz için ne yapabileceğinizi sorun."' }
    ],
    takeaways: ['Retorik figürleri baharat gibidir. Dozunda kullanıldığında yemeğin tadını zirveye çıkarır, fazla kullanıldığında boğar.']
  },

  // ────────────────────────────────────────────────────────
  // KONUŞMA ANALİZİ
  // ────────────────────────────────────────────────────────
  {
    id: 'ka1', cat: 'analiz', icon: '🔎', num: 'A1', badge: 'Vaka İncelemesi', badgeCls: 'ret-badge-advanced',
    type: 'analyzer', title: 'Steve Jobs - iPhone Lansmanı (2007)',
    desc: 'Teknoloji dünyasının en ikonik sunumunun retorik şifreleri.',
    speechContext: '2007 iPhone Lansmanı. Beklentiyi zirveye taşıma sanatı.',
    speechText: [
      { text: 'Bugün, dünyayı değiştirecek üç devrimsel ürün tanıtıyoruz.', type: 'logos-fallacy', note: 'Trikolon (Üçlü Kuralı): Üç ayrı cihaz tanıtacağı yalanını söyleyip merakı zirveye çıkarıyor.' },
      { text: 'Bir iPod, bir telefon ve bir internet iletişim cihazı.', type: 'ethos-wisdom', note: 'Ritim: Cümleyi tekrarlayarak seyircinin zihninde bir tempo oluşturuyor.' },
      { text: 'Bunlar üç ayrı cihaz değil. Bu tek bir cihaz! Ve adını iPhone koyduk.', type: 'pathos', note: 'Doruk Noktası (Climax): Beklentiyi patlatarak devasa bir coşku (Pathos) yaratıyor.' }
    ]
  },

  // ────────────────────────────────────────────────────────
  // GÜÇLÜ SAVUNMA
  // ────────────────────────────────────────────────────────
  {
    id: 'gs1', cat: 'savunma', icon: '🛡️', num: 'G1', badge: 'Kriz', badgeCls: 'ret-badge-intermediate',
    type: 'article', title: 'Savunma ve Karşı Argüman',
    desc: 'Zorlayıcı sorulara ve saldırılara karşı mantıklı kalkanlar kurmak.',
    content: [
      { sub: 'Prolepsis (Önceden Çürütme)', text: 'Rakibinizin size saldıracağı noktayı tahmin edip, o saldırı gelmeden konuyu sizin açmanız ve çürütmenizdir. "Şimdi bana diyeceksiniz ki bunun maliyeti çok yüksek. Ancak asıl maliyet..."' },
      { sub: 'Çerçeveleme (Reframing)', text: 'Size yöneltilen sorunun bağlamını değiştirmek. Soruyu reddetmek yerine kendi oyun alanınıza çekmektir.' }
    ],
    takeaways: ['Saldırıya duygusal cevap vermek kaybetmektir. Savunma her zaman Logos (mantık) ile yapılmalıdır.']
  }
];