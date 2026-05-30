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
  {
    id: 'e3', cat: 'ethos', icon: '🛠️', num: 'E3', badge: 'Simülatör', badgeCls: 'ret-badge-advanced',
    type: 'builder',
    title: 'İnteraktif Ethos Simülatörü',
    desc: 'Yeni bir ürünü pazarlamak için konuşma yapıyorsunuz. Seyircinin size güvenmesini sağlamalısınız.',
    scenarioContext: 'Karşınızda şüpheci ve daha önce sahte vaatlerden bıkmış bir yatırımcı / müşteri kitlesi var.',
    steps: [
      {
        question: 'Konuşmanıza nasıl bir açılış yaparak Ethos (Güvenilirlik) puanınızı zirveye taşırsınız?',
        options: [
          { text: 'Size dünyanın en iyi, en kusursuz ürününü getirdim. Hiçbir hatası yok ve piyasadaki herkesi ezecek.', score: 0, feedback: 'Ethos Yerle Bir! (Puan: 0) Aşırı ve desteksiz vaatler, şüpheci bir kitlede hemen kibir (Arete eksikliği) ve pazarlamacı algısı yaratır.' },
          { text: 'Merhaba, ben X şirketinden geliyorum. Ürünümüz fena değil, umarım seversiniz.', score: 3, feedback: 'Düşük Ethos. (Puan: 30) Dürüst gibi görünse de yetkinlik ve otorite (Phronesis) eksikliği hissediliyor. Güven vermez.' },
          { text: 'Bu ürünü geliştirirken ilk 3 prototipte tamamen başarısız olduk ve çok para kaybettik. Ama o hatalar bize, bugün elinizde tuttuğunuz bu kusursuz tasarımı yapmayı öğretti.', score: 10, feedback: 'Mükemmel Ethos! (Puan: 100) Kendi zayıflığınızı ve hatanızı baştan kabul etmek dürüstlüğünüzü (Arete) kanıtlar. Hatalardan ders çıkarma vurgusu ise uzmanlığınızı (Phronesis) gösterir.' }
        ]
      }
    ]
  },
  {
    id: 'e4', cat: 'ethos', icon: '💎', num: 'E4', badge: 'Vaka Analizi', badgeCls: 'ret-badge-master',
    type: 'article',
    title: 'Dürüstlük Paradoksu: Hata Kabul Etmek Neden Güvenilirliği Artırır?',
    desc: 'Kusursuzluk maskesi takmak güveni zedelerken, zafiyetleri paylaşmak paradoksal bir şekilde Ethos\'u maksimize eder.',
    content: [
      {
        sub: 'Elon Musk ve Cybertruck Krizi',
        text: 'Cybertruck lansmanında kırılmaz denilen cam kırıldığında, Musk olayı örtbas etmek yerine "Oh my f***ing god" diyerek canlı yayında güldü ve "Geliştirecek yerimiz var" dedi. Bu şeffaflık, yatırımcıların gözünde samimiyeti (Arete) artırdı.'
      },
      {
        sub: 'Sheryl Sandberg\'in Lean In İtirafı',
        text: 'Facebook\'un efsanevi COO\'su Sheryl Sandberg, kitabında mükemmel yönetici imajı çizmek yerine, iş ve aile dengesini kurarken yaşadığı ağlama krizlerini ve çaresizliklerini anlattı. Bu durum onun liderlik vasfını azaltmadı, aksine kitlelerle daha derin bir bağ kurmasını sağladı.'
      },
      {
        sub: 'Kriz Anında PR',
        text: 'KFC İngiltere\'de tavuksuz kaldığında "FCK" yazılı tam sayfa mizahi ve dürüst bir özür ilanı yayınladı. Bahane üretmek yerine suçu kabul etmek, markanın dürüstlük puanını (Ethos) anında kurtardı.'
      }
    ],
    takeaways: [
      'Kusursuzluk güven vermez, ulaşılamaz bir illüzyondur. İnsanlar insana güvenir.',
      'Hatanızı rakibinizden veya müşterinizden önce siz dile getirin (Prolepsis).',
      'Hata kabulü tek başına yetmez, ardından mutlaka "Bunu nasıl çözeceğimizi öğrendik" mesajı gelmelidir (Phronesis).'
    ]
  },
  {
    id: 'e5', cat: 'ethos', icon: '🔗', num: 'E5', badge: 'Taktik', badgeCls: 'ret-badge-intermediate',
    type: 'article',
    title: 'Sosyal Kanıt ve Ethos Kombinasyonu',
    desc: 'Kendi kendinizi övmeniz Ethos yaratmaz. Başkalarının sizi övmesi gerçek güvendir.',
    content: [
      {
        sub: 'Referans Gücü (Borrowed Ethos)',
        text: 'Henüz tanınmayan biriyseniz, güvenilirliği kanıtlanmış kurumların veya kişilerin itibarını "ödünç alabilirsiniz". Örneğin: "Bu metodu tasarlarken Stanford Üniversitesi\'nin nöroloji makalelerinden faydalandım" demek, Stanford\'un Ethos\'unu konuşmanıza transfer eder.'
      },
      {
        sub: 'Testimonial (Müşteri/Tanıtım) Etkisi',
        text: 'LinkedIn tavsiyeleri veya bir ürünün web sitesindeki kullanıcı yorumları, sizin kendinizi satmanızdan 10 kat daha etkilidir. İnsanlar "Ben iyiyim" diyen size değil, "O iyi" diyen üçüncü şahıslara inanmaya programlıdır.'
      },
      {
        sub: 'Kendi Ethos\'unuzu İnşa Etme Checklist\'i',
        list: [
          '<strong>Sahne Öncesi:</strong> Konferans veya toplantıdan önce yetkinliğinizi anlatan kısa bir biyo/tanıtım metni hazırlayın (Bırakın sizi başkası takdim etsin).',
          '<strong>Referanslar:</strong> Konuşmanızda sektör otoritesi sayılan 2-3 kişiden veya kurumdan alıntı yapın.',
          '<strong>Ortak Zemin:</strong> Dinleyiciyle aynı yerden geldiğinizi, aynı dertleri paylaştığınızı kanıtlayın (Biz dilini kullanın).'
        ]
      }
    ],
    takeaways: [
      'Övülme işini daima üçüncü şahıslara veya kurumlara bırakın.',
      'Güvenilir kaynaklara atıf yapmak, o kaynağın güvenilirliğinden pay almanızı sağlar.'
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
  {
    id: 'p3', cat: 'pathos', icon: '✨', num: 'P3', badge: 'Simülatör', badgeCls: 'ret-badge-advanced',
    type: 'builder',
    title: 'Duyusal Dil Transformatörü',
    desc: 'Beyin, sıkıcı gerçekler yerine duyusal ve görsel imgelere tepki verir. Sıkıcı cümleleri duygusal birer kancaya dönüştürme pratiği yapın.',
    scenarioContext: 'Şirketinizin başarısını ve ürün kalitesini anlatan bir sunum hazırlıyorsunuz.',
    steps: [
      {
        question: '"Ürün kalitemiz çok iyidir." cümlesini nasıl daha duyusal (Pathos) hale getirirsiniz?',
        options: [
          { text: 'Ürünlerimiz piyasadaki en iyi malzemelerden üretilmiştir.', score: 2, feedback: 'Çok sıradan. "En iyi malzeme" beynin görselleştirebileceği bir şey değildir.' },
          { text: 'Elinize aldığınız an, yıllarca beklediğiniz o kalite hissini parmak uçlarınızda yaşayacaksınız.', score: 10, feedback: 'Mükemmel! "Elinize almak", "parmak uçlarında hissetmek" duyusal (dokunma) korteksi tetikler ve doğrudan duygu yaratır.' },
          { text: 'ISO 9001 standartlarına göre üretilmiş ve test edilmiştir.', score: 0, feedback: 'Tamamen Logos (Mantık). Kaliteyi kanıtlar ama Pathos (duygu) barındırmaz.' }
        ]
      },
      {
        question: '"Şirketimiz 20 yıldır başarılı bir şekilde hizmet veriyor." cümlesini nasıl dönüştürürsünüz?',
        options: [
          { text: '20 yıllık tecrübemizle sektör lideriyiz.', score: 3, feedback: 'Kurumsal bir klişe. Dinleyicide hiçbir duygu uyanmaz.' },
          { text: 'Tam 20 yıl boyunca, milyonların hayatına dokunarak her sabah aynı tutkuyla uyanıyoruz.', score: 10, feedback: 'Harika! "Hayata dokunmak" ve "tutkuyla uyanmak" kelimeleri 20 yılı bir şirket verisinden çıkarıp insan hikayesine dönüştürdü.' }
        ]
      }
    ]
  },
  {
    id: 'p4', cat: 'pathos', icon: '📖', num: 'P4', badge: 'Masterclass', badgeCls: 'ret-badge-master',
    type: 'article',
    title: 'Hikaye Yapısı (Hero\'s Journey) Masterclass',
    desc: 'Binlerce yıllık "Kahramanın Yolculuğu" miti, insanların bir hikayeye biyolojik olarak bağlanmasını sağlayan formüldür.',
    content: [
      {
        sub: '3-Akt (Perde) Yapısı',
        list: [
          '<strong>Akt 1: Kahramanın Normal Dünyası (Empati Kurma)</strong>: Her şey sıradandır. Karakterin zayıflıkları ve korkuları gösterilir ki dinleyici onunla empati kursun.',
          '<strong>Akt 2: Çatışma ve Mücadele (Gerilim)</strong>: Bir kriz çıkar (işsizlik, hastalık, iflas). Kahraman zorluklarla yüzleşir, pes etme noktasına gelir. (Dopamin ve kortizol salgısı başlar)',
          '<strong>Akt 3: Dönüşüm ve Zafer (Çözüm)</strong>: Kahraman yeni bir ders öğrenerek krizi aşar. Bu zafer, dinleyiciye umut (Oksitosin) verir ve ilham kaynağı olur.'
        ]
      },
      {
        sub: 'Gerçek Hayat Örnekleri',
        list: [
          '<strong>Oprah Winfrey:</strong> Yoksulluk ve travmalarla dolu normal dünyasından (Akt 1), medyada tutunma mücadelesine (Akt 2) ve sonunda dünyanın en etkili kadınına (Akt 3) dönüşümü.',
          '<strong>Steve Jobs (2005 Stanford Konuşması):</strong> Üniversiteyi terk etmesi ve Apple\'dan kovulması (Akt 1 ve 2), ardından Pixar\'ı kurması ve kanserle yüzleşirken bulduğu anlam (Akt 3).'
        ]
      },
      {
        sub: 'Pratik: Kendi Hikayeni Yaz',
        text: 'Sıradaki sunumunuzda sadece başarılarınızı anlatmak yerine, o başarıya ulaşmadan önce yaşadığınız bir "çatışmayı" ve ondan öğrendiğiniz "dersi" (dönüşüm) 3-akt yapısına oturtmayı deneyin.'
      }
    ],
    takeaways: [
      'Mükemmel insanlar sıkıcıdır. Hikayenizin merkezinde her zaman bir zayıflık veya çatışma olmalıdır.',
      'Duygu (Pathos) çatışmadan doğar. Çatışma yoksa, hikaye yoktur.'
    ]
  },
  {
    id: 'p5', cat: 'pathos', icon: '👤', num: 'P5', badge: 'Taktik', badgeCls: 'ret-badge-intermediate',
    type: 'article',
    title: 'Empati Haritası: Dinleyiciyi Okumak',
    desc: 'Pathos, sizin ne hissettiğinizle değil, kitleye ne hissettireceğinizle ilgilidir. Kitleyi tanımadan duyguya hitap edemezsiniz.',
    content: [
      {
        sub: 'Dinleyicinin Kimliğini Çözmek',
        text: 'Sahnede veya toplantıda karşınızdaki insanların korkuları, umutları, değerleri ve gizli arzuları nelerdir? Genç girişimciler "geleceği kurma ve özgürlük" (umut) üzerinden, emeklilik fonu yöneticileri ise "güvenlik ve kaybetmeme" (korku) üzerinden motive olur.'
      },
      {
        sub: 'Hedef Dinleyici Profili (Persona)',
        text: 'Bir konuşma hazırlarken masaya hayali bir karakter koyun. Örneğin: "Ayşe, 35 yaşında, yönetici, zamansızlıktan şikayetçi." Pathos argümanlarınızı kendinize değil, doğrudan Ayşe\'nin kalbine göre özelleştirin.'
      }
    ],
    takeaways: [
      'İnsanlar sizin ne kadar akıllı olduğunuzu, onların dertlerini ne kadar anladığınızı hissedene kadar umursamazlar.',
      'Empati haritası çıkarırken korkuları (onları ne uykusuz bırakır?) ve hayalleri (sabah ne için uyanırlar?) netleştirin.'
    ]
  },
  {
    id: 'p6', cat: 'pathos', icon: '⚖️', num: 'P6', badge: 'Etik', badgeCls: 'ret-badge-advanced',
    type: 'article',
    title: 'Duygu Yönetimi ve Etik Sınırlar',
    desc: 'İnsanların duygularını yönetmek büyük bir güçtür ve her güç gibi karanlık bir tarafı vardır.',
    content: [
      {
        sub: 'Manipülasyon vs. Etkili İletişim',
        text: 'Eğer yarattığınız duygu (örneğin korku) karşı tarafı düşünmekten tamamen alıkoyup sizin gizli ajandanıza hizmet ediyorsa, bu manipülasyon (duygusal istismar) olur. Eğer duygu, mantıklı bir gerçeği (Logos) desteklemek ve harekete geçirmek için kullanılıyorsa bu "etkili iletişim"dir.'
      },
      {
        sub: 'Cialdini\'nin "Etik Etkisi" Prensibi',
        text: 'Robert Cialdini\'ye göre, ikna silahlarını kullanan kişi eğer yanlış bir vaatte bulunmuyor ve karşı tarafın uzun vadeli çıkarlarını da gözetiyorsa "Smuggler" (Kaçakçı) değil, "Sleuth" (Dedektif) yani dürüst bir etkileyicidir.'
      }
    ],
    takeaways: [
      'Asla sahte duygu yaratmayın. Kendi inanmadığınız veya hissetmediğiniz bir acıyı/coşkuyu pazarlamayın.',
      'Aşırı dozdaki Pathos (duygu sömürüsü), zeki dinleyicide anında savunma kalkanlarını (Ethos kaybı) tetikler.'
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
  {
    id: 'l2', cat: 'logos', icon: '🏗️', num: 'L2', badge: 'Simülatör', badgeCls: 'ret-badge-advanced',
    type: 'builder',
    title: 'Toulmin Argüman Modeli (Analiz Aracı)',
    desc: 'İngiliz filozof Stephen Toulmin tarafından geliştirilen bu model, ikna edici ve çürütülemez bir argümanın anatomisini çıkarır. Sadece "iddia" etmek yetmez, o iddiayı kanıtla desteklemek ve kanıtı da iddiaya bağlayan köprüyü kurmak gerekir.',
    scenarioContext: 'Şirket yönetimine yeni bir "Evden Çalışma Modeli" sunuyorsunuz. Yöneticiler verimlilik konusunda endişeli. Argümanınızı Toulmin modeliyle adım adım inşa edelim.',
    steps: [
      {
        question: 'Adım 1: İddia (Claim) - Ana teziniz nedir?',
        options: [
          { text: 'İnsanlar evde daha mutludur, bu yüzden evden çalışmalıyız.', score: 3, feedback: 'Duygusal ve zayıf (Logos eksik). Yönetimin ana metriklerinden biri "mutluluk" değil, "şirket başarısı"dır.' },
          { text: 'Hibrit/Evden çalışma modeli şirketimizin verimliliğini ve net kârlılığını artıracaktır.', score: 10, feedback: 'Güçlü İddia! Doğrudan yöneticilerin en çok önemsediği metriklere (verimlilik ve kârlılık) net bir sav ortaya koyuyor.' }
        ]
      },
      {
        question: 'Adım 2: Kanıt (Data/Evidence) - İddianızı neye dayandırıyorsunuz?',
        options: [
          { text: 'Birçok arkadaşım evde daha iyi çalışıyor.', score: 0, feedback: 'Sıfır Logos. Kişisel anekdotlar (Hasty Generalization) yönetim kurullarında kanıt sayılmaz.' },
          { text: 'Stanford Üniversitesi\'nin 16.000 çalışan üzerinde yaptığı 9 aylık araştırmaya göre, evden çalışan personelin verimliliği %13 artarken, işten ayrılma oranları yarı yarıya düştü.', score: 10, feedback: 'Sarsılmaz Kanıt! Kesin istatistikler, prestijli bir kurum (Stanford) ve somut süre/kapsam (16.000 kişi, 9 ay) içeriyor.' }
        ]
      },
      {
        question: 'Adım 3: Köprü (Warrant) - Kanıtınız ile iddianız arasındaki mantıksal bağı nasıl kurarsınız?',
        options: [
          { text: 'Bu Stanford araştırması gösteriyor ki, açık ofisteki dikkat dağıtıcı unsurların ortadan kalkması ve yolda geçen sürenin dinlenmeye harcanması doğrudan odaklanmayı artırır. Odaklanma da net kârlılık demektir.', score: 10, feedback: 'Mükemmel Köprü (Warrant)! "Verimlilik %13 arttı" verisinin NEDEN sizin şirketinizde de kârlılığa dönüşeceğini nedensellik (odaklanma, yol stresi olmaması) üzerinden ispatladınız.' },
          { text: 'Amerika\'da oluyorsa bizde de olur, sonuçta onlar da insan.', score: 2, feedback: 'Yanlış Benzetme (False Analogy) riski taşıyan zayıf bir köprü. Kültürel ve sektörel farklar göz ardı edilmiş.' }
        ]
      }
    ]
  },
  {
    id: 'l3', cat: 'logos', icon: '🛡️', num: 'L3', badge: 'Taktik', badgeCls: 'ret-badge-master',
    type: 'article',
    title: 'Karşı Argüman Çürütme (Refutation & Prolepsis)',
    desc: 'Mükemmel bir argüman kurmak yetmez, rakibinizin veya dinleyicinin kafasındaki şüpheleri onlar dile getirmeden önce yok etmelisiniz.',
    content: [
      {
        sub: 'Prolepsis Tekniğinin Derinlikleri',
        text: 'Antik Yunan retoriğinde Prolepsis (önceden çürütme), karşınızdakinin zihnini okuma sanatıdır. Sizi eleştirecekleri en zayıf noktanızı bilirsiniz. Bu noktayı saklamak yerine, sahneye çıkarır ve kendiniz vurursunuz. Böylece: 1) Dürüstlük (Ethos) kazanırsınız, 2) Karşı tarafın en güçlü silahını elinden alırsınız.'
      },
      {
        sub: 'Prolepsis Şablonu (3 Adım)',
        list: [
          '<strong>İtiraf Et:</strong> "Şu an aklınızdan geçen soruyu biliyorum. Haklı olarak diyeceksiniz ki..."',
          '<strong>Empati Kur:</strong> "Ben de ilk başta tam olarak böyle düşünmüş, hatta bu bütçeye itiraz etmiştim."',
          '<strong>Çürüt (Refutation):</strong> "Ancak detaylı analizleri incelediğimde gördüm ki..."'
        ]
      },
      {
        sub: 'Sektörel Vaka Analizleri',
        text: '<strong>Satış (Fiyat İtirazı):</strong> "Rakiplerimize göre %20 daha pahalı olduğumuzu düşünebilirsiniz. Evet, ilk alımda pahalıyız. Ancak onların ürünleri 2 yılda eskirken, bizim sistemimiz 10 yıl garantilidir. Uzun vadede %40 tasarruf edersiniz." (Pahalı argümanı Yatırım argümanına dönüştürüldü).'
      }
    ],
    takeaways: [
      'Savunma yapmayın, saldırıyı önceden tahmin edip etkisiz hale getirin.',
      'Karşı argümanı çürütürken onu asla küçümsemeyin; ciddiye alıp mantıkla (Logos) ezin.'
    ]
  },
  {
    id: 'l4', cat: 'logos', icon: '📊', num: 'L4', badge: 'Veri Sanatı', badgeCls: 'ret-badge-advanced',
    type: 'article',
    title: 'Veri Görselleştirme ve Sayıları İnsanileştirme',
    desc: 'Sayılar tek başlarına beynimizin duygusal ve anlamsal merkezine ulaşamazlar. Milyonlar ve milyarlar sadece bol sıfırlı soyut kavramlardır. Logos, bu soyut kavramları somut birer resme çevirmektir.',
    content: [
      {
        sub: 'Sayıları Boyutlandırma (Scaling)',
        text: 'Büyük sayıları dinleyicinin algılayabileceği zaman ve mekan ölçeklerine indirin. Örneğin devlet borcunu veya şirket zararını "2 Milyar Dolar" diye ifade etmek yerine: "2 Milyar Dolar demek, İsa\'nın doğduğu günden bugüne kadar her gün, hiç durmadan her saniye 1 dolar çöpe atmak demektir." İşte bu, beyni şoka sokan gerçek bir Logos kullanımıdır.'
      },
      {
        sub: 'Böl, Küçült ve İnsanileştir',
        text: '"Dünyada her yıl milyonlarca ağaç kesiliyor" demek yerine, "Siz bu cümleyi okurken, sadece şu son 5 saniye içinde Amazon ormanlarında 20 futbol sahası büyüklüğünde ağaç yok edildi." Futbol sahası ve saniye, beynin hemen kavradığı ve reaksiyon gösterdiği somut ölçeklerdir.'
      },
      {
        sub: 'Veri Yanılsaması (Lying with Statistics)',
        text: 'Bir oranı sunarken bağlamı gizlemek en yaygın Logos manipülasyonudur. Bir hastalığın riskinin %50 arttığını söylemek korkutucudur. Ancak orijinal risk 10 milyonda 1 ise, %50 artış sadece 10 milyonda 1.5 olması demektir. Verileri kullanırken oran (yüzde) ve mutlak sayıyı (kişi/adet) her zaman birlikte vererek gerçekliği koruyun.'
      }
    ],
    takeaways: [
      'Asla sadece çıplak sayı vermeyin. Sayıya daima bir nesne, mekan veya zaman metaforu giydirin.',
      'Logos sıkıcı Excel tabloları değildir; tabloları anlayan zihnin hikayesidir.'
    ]
  },
  {
    id: 'l5', cat: 'logos', icon: '🕵️', num: 'L5', badge: 'Dedektif', badgeCls: 'ret-badge-master',
    type: 'detective',
    title: 'Mantık Hataları (Safsata) Detektörü',
    desc: 'Karşınızdaki kişi çok akıcı, çok karizmatik ve çok duygusal konuşabilir. Ancak argümanının altında yatan temel mantıkta (Logos) devasa bir delik (Logical Fallacy) olabilir. Bu simülatörde popüler safsataları anında tespit etmeyi öğreneceksiniz.',
    detectiveContext: 'Yerel bir televizyon kanalında siyasi ve ekonomik bir tartışma programını analiz ediyorsunuz. Konuşmacıların iddialarındaki yapısal bozuklukları bulun.',
    dialogue: [
      { speaker: 'Moderatör', text: 'Sayın Başkan, ekonominin gidişatıyla ilgili uzmanların yaptığı son eleştiriler hakkında ne düşünüyorsunuz?' },
      { speaker: 'Başkan', text: 'Bakın, bu ülkenin kalkınmasını istemeyen, vatan hainleriyle işbirliği yapan sözde uzmanların dediklerinin benim gözümde hiçbir değeri yoktur. Ayrıca, bizim enflasyon politikamız tamamen doğrudur, çünkü eğer doğru olmasaydı halk bizi seçmezdi. Halk bizi seçtiğine göre, ekonomi politikamız kusursuzdur.' }
    ],
    question: 'Başkan\'ın bu kısa cevabında peş peşe kullandığı İKİ büyük mantık hatası (safsata) hangi seçenekte doğru verilmiştir?',
    options: [
      { id: 'opt1', text: 'Saman Adam (Straw Man) + Yanlış İkilem (False Dilemma)', isCorrect: false, feedback: 'Hatalı. Başkan rakibin argümanını çarpıtmıyor (Saman Adam) veya sadece iki seçenek sunmuyor (Yanlış İkilem).' },
      { id: 'opt2', text: 'Kişiye Saldırı (Ad Hominem) + Sürü Psikolojisi (Ad Populum)', isCorrect: true, feedback: 'Tebrikler! Mükemmel Analiz. 1) Uzmanların ekonomik VERİLERİNİ çürütmek yerine onların KARAKTERİNE (vatan haini vs) saldırıyor (Ad Hominem). 2) Bir şeyin "çoğunluk (halk) tarafından desteklenmesini", o şeyin "bilimsel/ekonomik olarak doğru olmasının" kanıtı sayıyor (Ad Populum).' },
      { id: 'opt3', text: 'Döngüsel Mantık (Circular Reasoning) + Kaygan Zemin (Slippery Slope)', isCorrect: false, feedback: 'Hatalı. Cümlede "Bunu yaparsak sonumuz felaket olur" gibi bir domino etkisi (Kaygan Zemin) yok.' }
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
  {
    id: 'ikna3', cat: 'ikna', icon: '🧠', num: 'I3', badge: 'Nörobilim', badgeCls: 'ret-badge-master',
    type: 'article',
    title: 'Karar Verme Beyin Haritası: Sistem 1 vs. Sistem 2',
    desc: 'Nobel ödüllü psikolog Daniel Kahneman\'ın "Hızlı ve Yavaş Düşünme" teorisi, ikna mühendisliğinin temelidir. İnsan beyni kararları verirken iki farklı işletim sistemi kullanır.',
    content: [
      {
        sub: 'Sistem 1 (Otopilot - Hızlı, Duygusal ve İçgüdüsel)',
        text: 'Sistem 1; ani, efor gerektirmeyen ve tamamen duygusal/sezgisel kararlar alır. Bilişsel bir filtre kullanmaz. 2x2\'nin 4 etmesi gibi otomatiktir. Birisi size bağırdığında irkilmeniz veya bir kıyafeti mağaza vitrininde görüp anında aşık olmanız Sistem 1\'in işidir.'
      },
      {
        sub: 'Sistem 2 (Pilot - Yavaş, Analitik ve Mantıksal)',
        text: 'Sistem 2; tembeldir, çok enerji tüketir ve sadece gerektiğinde devreye girer. Karmaşık bir matematik problemi çözmek, B2B (şirketten şirkete) yazılım yatırımı yapmak veya vergi beyannamesi doldurmak Sistem 2\'yi gerektirir. Sistem 2 aktifken kişi "şüpheci" moddadır ve ikna edilmesi çok daha zordur.'
      },
      {
        sub: 'Strateji: Hangi Sistemi Hedeflemeliyiz?',
        list: [
          '<strong>Hızlı Satışlar (B2C) ve Acil Kararlar:</strong> Eğer amacınız bir bağış toplamak, kıyafet satmak veya acil bir politik oy kazanmaksa, beynin Sistem 2 (mantık) bölümünü uyandırmaktan kaçınmalısınız. Pathos (duygu) yoğun kancalar, renkler ve aciliyet hissiyle (FOMO) sadece Sistem 1\'i hedefleyin.',
          '<strong>Kurumsal Satış (B2B) ve Uzun Vadeli Kararlar:</strong> Eğer dev bir altyapı ihalesi satıyorsanız, Sistem 1 (coşku) sadece kapıyı açar. Karşı tarafın Sistem 2\'sini tatmin edecek muazzam bir Logos (mantık, ROI analizi, veri) sunmak zorundasınız. Sistem 2 eksiği olan bir kurumsal sunum, masada çürütülür.'
        ]
      }
    ],
    takeaways: [
      'Karar verdirirken insanların yorgun olmasını (Bilişsel Yük) avantajınıza kullanabilirsiniz; yorgun beyinler varsayılan olarak efor gerektirmeyen Sistem 1\'e (duygusal onay) geçer.',
      'Mantığa hitap eden veriler, ancak Sistem 2 uyanıksa işe yarar. Dikkati dağılmış bir kitleye istatistik okumak boşunadır.'
    ]
  },
  {
    id: 'ikna4', cat: 'ikna', icon: '🤝', num: 'I4', badge: 'Taktik', badgeCls: 'ret-badge-advanced',
    type: 'article',
    title: 'Cialdini\'nin Gizli 7. Prensibi: Birlik (Unity)',
    desc: 'Robert Cialdini orijinal 6 prensibine yıllar sonra en güçlü olan 7. prensibi ekledi: Birlik (Unity). Bu prensip "Sen de bizdensin" hissiyatıdır ve diğer tüm prensipleri (otorite, sosyal kanıt) ezip geçer.',
    content: [
      {
        sub: 'Benzerlik Değil, Kimlik Paylaşımı',
        text: 'Hoşlanma (Liking) prensibindeki "Aa, sen de mi tenis seviyorsun, ben de!" şeklindeki yüzeysel benzerlikten farklı olarak; Birlik (Unity) ortak bir kökene, kan bağına, coğrafyaya, millete veya derin bir inanç grubuna ait olmaktır. Ortak kimlik, kişisel savunma mekanizmalarını tamamen kapatır.'
      },
      {
        sub: '"Biz" Dilinin Muazzam Gücü',
        text: 'Bir lider konuşmasında "Ben size bunu vereceğim" demez, "Biz birlikte başaracağız" der. "Biz" zamiri kullanıldığında, dinleyicinin beyni konuşmacıyı "kendi klanından" (In-group) biri olarak algılar. Kendi klanından gelen bir tehlike beklemediği için eleştirel düşünce (Sistem 2) by-pass edilir.'
      },
      {
        sub: 'Birlik Prensibini Sahneye Taşıma (Pratik)',
        list: [
          '<strong>Ortak Düşman/Zorluk Yaratın:</strong> İnsanlar en hızlı şekilde ortak bir düşmana veya zorluğa karşı birleşir. Şirketteki bir sunumda rakip firmanın hamlelerini ortak tehdit olarak konumlandırmak, salondaki herkesi tek bir "Biz" kimliğinde eritir.',
          '<strong>Co-creation (Birlikte Yaratım):</strong> "Lütfen bana tavsiyede bulunun" diyerek dinleyiciyi projenin içine çekmek, onların projeyi "kendilerinden bir parça" olarak görmesini sağlar. Fikir veren kişi, fikri savunan kişiye dönüşür.'
        ]
      }
    ],
    takeaways: [
      'Dinleyiciye "Sizin için buradayım" demeyin, "Sizden biriyim" hissini verin.',
      'Ortak bir kimlik tetiklendiğinde (örneğin aynı üniversiteden mezun olmak), kişi size mantıklı bir argümanınız olmasa bile "evet" deme eğilimine girer.'
    ]
  },
  {
    id: 'ikna5', cat: 'ikna', icon: '⏳', num: 'I5', badge: 'Zamanlama', badgeCls: 'ret-badge-intermediate',
    type: 'article',
    title: 'Zaman Faktörü (Chronemics) ve İkna Momentumu',
    desc: 'Doğru sözü, yanlış zamanda söylerseniz reddedilirsiniz. İkna, sadece argüman içeriği değil, aynı zamanda o argümanın "ne zaman" sunulduğuyla (Fırsat Penceresi) ilgilidir.',
    content: [
      {
        sub: 'Aciliyet (Urgency) Tuzağı',
        text: 'Zaman kısıtı, beynin kayıp yaşama korkusunu (Loss Aversion) tetikler. Sınırlı süresi olan bir teklif ("Sadece bu haftaya özel"), kişiyi mantıksal analiz (Sistem 2) yapmaktan mahrum bırakır. Kararı ertelemek, o fırsatı kesin olarak kaybetmek anlamına geleceği için kişi risk alıp hemen evet der.'
      },
      {
        sub: 'HALT Sendromu ve Karar Kalitesi',
        text: 'Birinden önemli bir "evet" alacaksanız, kişinin HALT durumunda (Hungry, Angry, Lonely, Tired - Aç, Kızgın, Yalnız, Yorgun) olmadığından emin olun. İsrail hapishanelerindeki şartlı tahliye hakimleriyle yapılan meşhur bir araştırmada; sabah tok karnına onay verme oranı %65 iken, öğle yemeğinden hemen önce aç ve yorgunken onay oranı %0\'a düşmüştür. Beyin yorgunken "hayır" diyerek statükoyu korumayı seçer.'
      },
      {
        sub: 'Fırsat Penceresi Konsepti',
        text: 'Büyük değişimler veya satın almalar, genellikle kişinin hayatındaki bir "kırılma anından" hemen sonra gerçekleşir. Rakip şirketin büyük bir kriz (hacklenme, veri sızıntısı) yaşadığı günün ertesi sabahı sunacağınız bir "Siber Güvenlik" çözümü, normal bir günden 100 kat daha ikna edicidir.'
      }
    ],
    takeaways: [
      'Önemli toplantılarınızı veya zam taleplerinizi asla cuma günü mesai bitimine veya öğle yemeğinden hemen önceye koymayın.',
      'Karşı tarafı eyleme geçirmek istiyorsanız, teklifinize mutlaka bir "son kullanma tarihi" (aciliyet) ekleyin.'
    ]
  },
  {
    id: 'ikna6', cat: 'ikna', icon: '🌍', num: 'I6', badge: 'Derin İnceleme', badgeCls: 'ret-badge-master',
    type: 'article',
    title: 'Kültürel Kodlar ve İkna Stratejileri',
    desc: 'Amerikalı bir yatırımcıyı ikna eden argüman, Japon veya Türk bir yatırımcıda felaketle sonuçlanabilir. İkna, kültürün yazılı olmayan kurallarına entegre olmalıdır.',
    content: [
      {
        sub: 'Bireyci (Batı) vs. Kolektivist (Doğu) Toplumlar',
        text: 'Amerika ve Kuzey Avrupa gibi bireyci toplumlarda (Individualism), ikna argümanları "kişisel fayda, bağımsızlık, hız, kârlılık ve rekabet" (Örn: "Rakiplerinizi ezip geçeceksiniz") üzerine kurulur. Türkiye, Japonya veya Orta Doğu gibi kolektivist toplumlarda ise vurgu "aile, sadakat, toplumsal onay, güvenlik ve gruba uyum" (Örn: "Bunu yaparsak sektördeki itibarımız ve ailemizin güvenliği artacak") üzerine olmalıdır.'
      },
      {
        sub: 'Türk Kültürüne Özel İkna Dinamikleri',
        text: 'Türkiye, "Yüksek Bağlamlı" (High-Context) bir kültürdür. Sözlerden çok, söylenmeyenlere, beden diline ve "Araya giren kişilere (Torpil/Referans)" bakılır. Türk iş kültüründe Ethos (Güvenilirlik), masada sunulan sözleşmeden daha önemlidir. "Biz seninle abi-kardeş gibiyiz" veya "Çayımızı içmeden iş konuşmayalım" yaklaşımı, işten önce ilişkinin test edilmesidir.'
      },
      {
        sub: 'Otorite ve İtaat Farkları',
        text: 'Kuzey Avrupa ülkelerinde hiyerarşi düzdür; astlar üstlerini rahatça eleştirebilir (Düşük Güç Mesafesi). Buralarda rasyonel argümanlar işler. Ancak Doğu ve Asya kültürlerinde (Yüksek Güç Mesafesi), bir projenin kalitesinden çok, o projeyi savunan kişinin "ünvanı, yaşı ve şirket içindeki konumu" iknanın kaderini belirler.'
      }
    ],
    takeaways: [
      'Farklı bir kültürle masaya otururken kendi doğrularınızı (örneğin aşırı direkt ve sonuç odaklı olmak) rafa kaldırın.',
      'Türkiye gibi ilişki odaklı kültürlerde, masada önce Logos\'u (sayıları) değil, Pathos ve Ethos\'u (güven ve çayı) servis edin.'
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
  {
    id: 'ky2', cat: 'konusma-yazimi', icon: '📐', num: 'K2', badge: 'Mimari', badgeCls: 'ret-badge-master',
    type: 'article',
    title: 'Konuşma Yapısı Şablonları (Mimari)',
    desc: 'Büyük hatipler sahneye doğaçlama çıkmazlar; konuşmaları milimetrik bir mimari şablona dayanır. Konseptinize en uygun iskeleti seçin ve içini doldurun.',
    content: [
      {
        sub: '1. Klasik 5-Bölüm Yapısı (Monroe\'nun Motive Edici Dizilimi)',
        list: [
          '<strong>1. Kanca (Dikkat):</strong> Seyirciyi telefonundan koparacak şok edici bir giriş.',
          '<strong>2. Bağlam & İhtiyaç (Sorun):</strong> Dinleyicinin kendisiyle bağdaştıracağı, kanayan bir yaranın tasviri.',
          '<strong>3. Tatmin (Çözüm):</strong> O kanayan yarayı durduracak sihirli merhemi (ürününüz/fikriniz) sahneye sürmek.',
          '<strong>4. Görselleştirme:</strong> Çözüm uygulandığında hayatın ne kadar harika olacağının veya uygulanmadığında ne kadar felaket olacağının zihinsel resmi.',
          '<strong>5. Eylem Çağrısı (CTA):</strong> Dinleyiciye "şu an" ne yapması gerektiğini dikte etmek.'
        ]
      },
      {
        sub: '2. TED Konuşması Yapısı (Fikir Tohumu)',
        text: 'Bir TED konuşması "Neden" ile başlar. "Ben kimim ve ne yaptım" yerine, "Burada çözmeye çalıştığımız devasa sır nedir?" sorusuyla başlar. Ortalama 18 dakikada, tek bir odak fikir (Through-line) etrafında döner. Kahramanın yolculuğu (kendi başarısızlıkları) üzerinden empati kurulur ve sonunda o tek fikir dünyaya hediye edilir.'
      },
      {
        sub: '3. Kurumsal Satış Sunumu (Pitch Deck)',
        text: 'Problem -> Mevcut Çözümlerin Neden İşe Yaramadığı -> Sizin Benzersiz Çözümünüz -> Pazar Büyüklüğü (Logos) -> Takımınızın Neden Bunu Yapabileceği (Ethos) -> Finansal Beklenti ve Kapanış.'
      }
    ],
    takeaways: [
      'Yapısız bir konuşma, temelsiz bir binaya benzer; kelimeleriniz ne kadar şatafatlı olursa olsun ilk rüzgarda çöker.',
      'Süreniz kısaldıkça, yapınızı daha da sertleştirmek ve basitleştirmek zorundasınız.'
    ]
  },
  {
    id: 'ky3', cat: 'konusma-yazimi', icon: '🪝', num: 'K3', badge: 'Taktik', badgeCls: 'ret-badge-advanced',
    type: 'article',
    title: '10 Farklı Kanca (Hook) Tekniği: Açılış Sanatı',
    desc: 'Bilimsel araştırmalar, bir dinleyicinin sizi dinleyip dinlememeye ilk 7 saniyede karar verdiğini gösteriyor. Konuşmaya "Merhaba, adım şu..." diye başlamak, bu 7 saniyeyi çöpe atmaktır.',
    content: [
      {
        sub: 'Kritik 10 Açılış Kancası',
        list: [
          '<strong>1. Şaşırtıcı İstatistik:</strong> "Siz şu an beni dinlerken, dünya çapında 15.000 kişi..." (Anında Logos şoku).',
          '<strong>2. Kişisel ve Kırılgan Hikaye:</strong> "Hayatımın en kötü gününe, 14 Haziran sabahına gidelim..." (Derin empati ve Pathos).',
          '<strong>3. Güçlü Soru:</strong> "Aranızda en son ne zaman gerçekten korktuğunu hatırlayan var mı?" (Zihni aktif katılım yapmaya zorlar).',
          '<strong>4. Provokasyon (Meydan Okuma):</strong> "Bugün size okulda öğrettikleri her şeyin neden yanlış olduğunu ispatlayacağım." (Merak ve hafif öfke tetikler).',
          '<strong>5. Sessizlik (Dramatik Duraklama):</strong> Sahneye çıkıp tam 10 saniye boyunca hiçbir şey söylemeden kalabalığın gözlerinin içine bakmak. En yüksek otorite (Ethos) gösterisidir.',
          '<strong>6. Alıntı:</strong> "Einstein\'ın dediği gibi..." (Güvenilirliği baştan ödünç almak).',
          '<strong>7. Paradoks:</strong> "Bazen kazanmanın tek yolu, tamamen pes etmektir." (Bilişsel çelişki ile merak uyandırmak).',
          '<strong>8. Mizah:</strong> Kaliteli ve konuya uygun (tercihen kendinizle dalga geçtiğiniz) bir fıkra. Savunma kalkanlarını indirir.',
          '<strong>9. Senaryo Çizimi:</strong> "Gözlerinizi kapatın ve yılın 2050 olduğunu hayal edin..."',
          '<strong>10. Görsel Şok:</strong> Sahneye cebinizden çıkardığınız çürümüş bir elma veya tuhaf bir obje ile gelmek.'
        ]
      }
    ],
    takeaways: [
      'İlk cümleniz her zaman ezberinizde olmalı. Asla kağıda bakarak veya ııı... diyerek başlamayın.',
      'Seçeceğiniz kanca, dinleyici kitlesinin beklentisiyle tezat oluşturduğunda (kurumsal toplantıda mizah, neşeli kalabalıkta şok edici veri) etkisi katlanır.'
    ]
  },
  {
    id: 'ky4', cat: 'konusma-yazimi', icon: '🔥', num: 'K4', badge: 'Sanat', badgeCls: 'ret-badge-master',
    type: 'article',
    title: 'Kapanış Sanatı (Climax & Call to Action)',
    desc: 'Açılış dikkat çeker, gelişme ikna eder, ancak kapanış harekete geçirir. İnsanlar konuşmanızın ortasını unutur, fakat sahnede bıraktığınız son duyguyu (Recency Effect) asla unutmazlar.',
    content: [
      {
        sub: 'Duygusal Zirve (Climax) Yaratma',
        text: 'Bir senfoninin son saniyeleri gibi, ses tonunuz, cümlenizin ritmi ve vurgunuz kapanışa doğru ivmelenmelidir. Mantıksal analizlerinizi bitirmiş olmalısınız; kapanış tamamen Pathos (duygu) ve coşku üzerine kurulmalıdır.'
      },
      {
        sub: 'Unutulmaz Kapanış Formülleri',
        list: [
          '<strong>Başlangıca Dönüş (Bookending):</strong> Açılışta sorduğunuz cevapsız soruya geri dönün veya açılıştaki yarım hikayeyi tamamlayın. Bu beynin "döngüyü kapatma" (Zeigarnik etkisi) ihtiyacını tatmin eder.',
          '<strong>Zıtlık (Antitez) ile Vurmak:</strong> "Geçmişi değiştiremeyiz, ama geleceği yazmak tam şu an bizim elimizde." gibi güçlü ve kontrastlı bir cümleyle noktalamak.',
          '<strong>Vizyon Çizmek:</strong> "Eğer bugün bu adımı atarsak, 10 yıl sonra çocuklarımız bize..." diyerek onlara ideal bir dünya tablosu sunmak.'
        ]
      },
      {
        sub: 'Etkili Bir Call to Action (Eyleme Çağrı) Nasıl Olmalı?',
        text: 'Asla "Beni dinlediğiniz için teşekkürler" diyerek, eylemi havada bırakmayın. Dinleyiciden net, anında yapılabilir, spesifik bir şey isteyin: "Çıkışta şu kağıdı imzalayın", "Yarın sabah ekibinizi toplayıp bu soruyu sorun", "Şimdi telefonlarınızı çıkarıp şu siteye girin". Eyleme çağrı, buyurgan olmadan net bir yönlendirme içermelidir.'
      }
    ],
    takeaways: [
      'Teşekkür etmek kapanış değildir. Teşekkür edin ama son sözünüz asla "teşekkürler" olmasın. Son sözünüz alevli bir mesaj olsun.',
      'Kapanış cümlenizi söyledikten sonra hemen sahneden kaçmayın. 3 saniye durun, sessizliği kucaklayın ve etkinin seyirciye çökmesine izin verin.'
    ]
  },
  {
    id: 'ky5', cat: 'konusma-yazimi', icon: '🎵', num: 'K5', badge: 'Müzikalite', badgeCls: 'ret-badge-advanced',
    type: 'article',
    title: 'Konuşma Ritmi, Tempo ve Müzikalite',
    desc: 'Metniniz ne kadar kusursuz olursa olsun, monoton bir tonda okunursa dinleyici 3 dakika içinde uykuya (veya telefona) dalar. İyi bir konuşma, caz müziği gibi ritmik varyasyonlara sahip olmalıdır.',
    content: [
      {
        sub: 'Cümle Uzunluğu Varyasyonu (Gary Provost Kuralı)',
        text: 'Hepsi 5 kelimelik cümleler kurarsanız, bu bir robotik sese dönüşür (Daktilo sesi gibi). Uzun, karmaşık, virgüllerle uzayan ve adeta bir nehir gibi akan cümleler kurun. Sonra birden durun. Kısa. Kesik. Tek kelimelik cümlelerle. Vurun. Bu ritim değişimi, beyni uyanık tutar ve asıl vurgulanmak istenen "kısa" cümlenin gücünü 10 katına çıkarır.'
      },
      {
        sub: 'Hız (Tempo) Değişimleri',
        text: 'Coşku, öfke veya heyecan anlarında kelime hızınızı artırın; dinleyiciyi bir girdabın içine çekin. Ancak çok hayati bir istatistik, acı verici bir gerçek veya çok derin bir felsefi çıkarım yapacağınız zaman hızınızı aniden düşürün. Yavaşlık, o cümlenin "altını çizmektir".'
      },
      {
        sub: 'Sessizliğin (Duraklama) Altın Gücü',
        list: [
          '<strong>Önemli Bir Cümleden Önce:</strong> Dinleyicinin dikkatini toplamasını sağlar ("Bunun tek bir sebebi var... [2 saniye duraklama]... Korku.")',
          '<strong>Önemli Bir Cümleden Sonra:</strong> Fikrin beyinde yankılanmasına, sindirilmesine ve idrak edilmesine izin verir.',
          '<strong>Geçişlerde:</strong> Bir paragraftan/konudan diğerine geçerken paragraf başı hissi vermek için kullanılır.'
        ]
      }
    ],
    takeaways: [
      'Metninizi yazarken sadece kelimeleri değil, duraklamaları da [ES] (Es ver) şeklinde notasyonlarla metne ekleyin.',
      'Sahnede 2 saniyelik bir duraklama size bir ömür gibi uzun gelebilir, ama seyirci için bu sadece güçlü bir nefestir. Korkmayın.'
    ]
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
  {
    id: 'rf2', cat: 'figurler', icon: '📚', num: 'R2', badge: 'Kütüphane', badgeCls: 'ret-badge-master',
    type: 'article',
    title: 'Gelişmiş Retorik Figürleri Kütüphanesi',
    desc: 'Büyük liderlerin kelime oyunları tesadüf değildir. Antik Yunan\'dan günümüze uzanan, konuşmanıza zarafet ve güç katacak ileri düzey 20 retorik figür.',
    content: [
      {
        sub: '1. Epizeuxis (Çarpıcı Tekrar)',
        text: 'Aynı kelimenin araya hiçbir kelime girmeden, duygusal bir şiddetle arka arkaya tekrarlanmasıdır. Dikkati anında o kelimeye sabitler. \n\nÖrnek: "Asla, asla, asla pes etmeyin!" (W. Churchill)\nÖrnek: "Tek ihtiyacımız olan şey: Zaman, zaman, zaman!"'
      },
      {
        sub: '2. Chiasmus (Çaprazlama)',
        text: 'İlk cümlenin veya cümlenin ilk yarısının, ikinci yarıda gramer ve anlam olarak tersyüz edilerek kullanılmasıdır. Son derece akılda kalıcıdır.\n\nÖrnek: "Zorluklar bizi yıldırmaz, biz zorlukları yıldırırız."\nÖrnek: "İnsanlık savaşa bir son vermelidir, yoksa savaş insanlığa bir son verecektir." (J.F. Kennedy)'
      },
      {
        sub: '3. Litotes (Mütevazı Abartı)',
        text: 'Bir şeyi doğrulamak için, onun zıttını reddetme sanatıdır. Altını çok daha gizemli ve güçlü çizer.\n\nÖrnek: "Bu hiç de fena bir fikir değil." (Aslında: Bu harika bir fikir)\nÖrnek: "Oraya gitmek pek de kolay olmayacak." (Aslında: Çok zor olacak)'
      },
      {
        sub: '4. Metonimi (Ad Aktarması)',
        text: 'Bir kavramı kendi adıyla değil, onunla yakından ilişkili başka bir nesne/kavram adıyla anmaktır. Somutluk katar.\n\nÖrnek: "Beyaz Saray bugün bir açıklama yaptı." (Başkan veya yönetim yerine)\nÖrnek: "Kalem, kılıçtan keskindir." (Bilgi/Yazı, şiddetten/savaştan üstündür)'
      },
      {
        sub: '5. Anadiplosis (Kilitlenme)',
        text: 'Bir cümlenin son kelimesiyle, sonraki cümlenin ilk kelimesinin aynı olmasıdır. Fikirler arası sarsılmaz bir zincir kurar.\n\nÖrnek: "Korku öfkeye yol açar. Öfke nefrete yol açar. Nefret ise acıya yol açar." (Yoda)'
      }
    ],
    takeaways: [
      'Retorik figürleri sadece "süslü" konuşmak için değil, dinleyicinin beyninde cümlenizin kancalanması için kullanılır.',
      'Aynı konuşmada ikiden fazla farklı ve karmaşık figür kullanmak dikkati dağıtabilir (Over-engineering).'
    ]
  },
  {
    id: 'rf3', cat: 'figurler', icon: '🏛️', num: 'R3', badge: 'Simülatör', badgeCls: 'ret-badge-advanced',
    type: 'builder',
    title: 'Tricolon (Üçlüler Kuralı) Mühendisliği',
    desc: 'İnsan beyni örüntü arar ve bulabildiği en küçük mükemmel örüntü "3" rakamıdır. 3 kelime, 3 cümle veya 3 fikir... Eğer bir şeyi 3 kez verirseniz beyin onu tamamlanmış ve tatmin edici bulur.',
    scenarioContext: 'Yeni lansmanını yaptığınız bir güvenlik yazılımının temel sloganını belirliyorsunuz. Rakiplerden daha "hızlı, daha ucuz ve daha güvenli" olduğunu vurucu bir Trikolon ile anlatmalısınız.',
    steps: [
      {
        question: 'Aşağıdaki sloganlardan hangisi beynin örüntü arayışını (Trikolon) en iyi şekilde tatmin eder?',
        options: [
          { text: 'Verilerinizi korur. Bütçenizi sarsmaz.', score: 2, feedback: 'Sadece 2 parça (Bikolon). Yetersiz. Havada kalmış hissi veriyor.' },
          { text: 'Sisteme entegre olur, virüsleri anında engeller, tüm ağınızı korur ve size rapor sunar.', score: 0, feedback: '4 parça (Tetrakolon). Beyin bu kadar uzun listeleri şiirsel/slogan olarak ezberleyemez.' },
          { text: 'Hızlı kurulur. Ucuza korur. Asla uyumaz.', score: 10, feedback: 'Mükemmel Trikolon! Kısa, ritmik, 3 parça (Geldim, gördüm, yendim gibi). Zihinde bir çivi gibi kalır.' }
        ]
      },
      {
        question: 'Konuşmanızı bitirirken kitlenize şöyle seslenmek istiyorsunuz: "İleri gitmeliyiz". Bunu Trikolon ile nasıl güçlendirirsiniz?',
        options: [
          { text: 'Dün başardık, bugün başarıyoruz, yarın da başaracağız.', score: 10, feedback: 'Harika bir Epistrophe (Sonda tekrar) + Trikolon (Zaman Çizgisi) kombosu. Alkış tufanı yaratır.' },
          { text: 'İleri, daima ileri gitmeliyiz arkadaşlar.', score: 3, feedback: 'Basit bir tekrardan ibaret (Epizeuxis). Üçlü bir ritim (örüntü) yok.' }
        ]
      }
    ]
  },
  {
    id: 'rf4', cat: 'figurler', icon: '🧩', num: 'R4', badge: 'Metafor', badgeCls: 'ret-badge-master',
    type: 'article',
    title: 'Metafor Mühendisliği',
    desc: 'Metafor (Eğretileme) sadece bir edebiyat sanatı değildir; anlaması zor ve soyut olan kavramları, dinleyicinin "zaten bildiği" somut ve basit bir kavramın içine yerleştirerek (Truva atı gibi) zihnine sokma bilimidir.',
    content: [
      {
        sub: 'Soyutu Somutlaştırma (Kavramsal Metaforlar)',
        text: 'Bir ekonomi toplantısında "Enflasyon oranlarının artması halkın alım gücünü düşürüyor" demek Logostur (Mantık), ama kurudur. Metafor mühendisliği bunu şöyle çevirir: "Enflasyon, gece siz uyurken evinize giren ve cebinizdeki 100 liranın 20 lirasını çalan görünmez bir hırsızdır." "Hırsız" kelimesi herkesin bildiği, iğrendiği ve korktuğu somut bir varlıktır.'
      },
      {
        sub: 'Yapısal Metaforlar (Argümanı Savaş/İnşaat Üzerinden Kurmak)',
        list: [
          '<strong>Argüman bir SAVAŞTIR:</strong> "Sözleriyle beni vurdu", "Tezini savundu", "Argümanını paramparça ettim".',
          '<strong>Fikir bir BİTKİDİR:</strong> "Bu fikir aklıma yeni ekildi", "Düşünceleri yavaş yavaş yeşeriyor", "Meyvelerini yakında toplayacağız".',
          '<strong>Zaman bir PARADIR:</strong> "Bana zaman kaybettiriyorsun", "Vaktimi harcama", "Bu iş için biraz zaman ayırmalıyız".'
        ]
      },
      {
        sub: 'Ölü Metafor Tuzağı',
        text: 'Dilimize o kadar yerleşmiş metaforlar vardır ki, beyin artık onlara tepki vermez. "Ateş pahası", "Taş kalpli", "Yüreği kan ağlamak". Bunlar "Ölü Metaforlardır". İyi bir hatip, her zaman yepyeni, beklenmedik ve durumu mükemmel açıklayan canlı metaforlar icat eder.'
      }
    ],
    takeaways: [
      'Karmaşık bir fikir anlatıyorsanız, dinleyicinin zihninde bir "çapa" (bildikleri bir kavram) bulun ve fikrinizi o çapaya bir metaforla bağlayın.',
      'Sadece klişelerden (ölü metaforlar) kaçınmak bile sizi dinlenen bir konuşmacı yapar.'
    ]
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
  {
    id: 'ka2', cat: 'analiz', icon: '🦅', num: 'A2', badge: 'Siyasi Başyapıt', badgeCls: 'ret-badge-master',
    type: 'analyzer', title: 'Barack Obama - 2004 DNC Konuşması',
    desc: 'Tanınmayan bir senatörün, tek bir konuşmayla kendini 4 yıl sonrası için Başkanlık koltuğuna taşıdığı "Birlik (Unity)" manifestosu.',
    speechContext: '2004 Demokratik Ulusal Kongresi (DNC). Ülkenin Cumhuriyetçi ve Demokrat olarak sertçe kutuplaştığı bir dönem.',
    speechText: [
      { text: 'Eğer Chicago\'nun güneyinde okuma yazma bilmeyen bir çocuk varsa, o benim çocuğum olmasa da, bu benim de canımı yakar.', type: 'pathos', note: 'Empati ve Genişletilmiş Sorumluluk: "Ben" sınırlarını "Biz" olarak genişletiyor (Unity Prensibi).' },
      { text: 'Eğer bir yerde ilaç parası ödeyemeyen yaşlı bir vatandaş varsa, o benim büyükbabam olmasa da, bu benim hayatımı yoksullaştırır.', type: 'pathos', note: 'Paralelizm: Aynı cümle yapısını (Eğer... varsa... olmasa da...) tekrar ederek müzikal bir ritim (Gary Provost Kuralı) yaratıyor.' },
      { text: 'Liberal bir Amerika ya da muhafazakar bir Amerika yok... Amerika Birleşik Devletleri var.', type: 'logos', note: 'Sahte İkilemi Yıkmak (Destroying False Dilemma): Medyanın yarattığı A ya da B kutuplaşmasını reddedip, üst kimlikte (United States) birleştiriyor.' },
      { text: 'Siyahilerin Amerikası yok, beyazların Amerikası yok, Latinlerin veya Asyalıların Amerikası yok. Sadece Amerika Birleşik Devletleri var.', type: 'ethos', note: 'Kapsayıcılık (Inclusivity) ve Trikolon: Bölücü etiketleri art arda sıralayıp (Siyah, Beyaz, Latin/Asya) hepsini tek bir potada eritiyor. Mükemmel bir birleştirici Lider (Ethos) profili çiziyor.' }
    ]
  },
  {
    id: 'ka3', cat: 'analiz', icon: '⚔️', num: 'A3', badge: 'Kriz İletişimi', badgeCls: 'ret-badge-master',
    type: 'analyzer', title: 'W. Churchill - "We Shall Fight on the Beaches" (1940)',
    desc: 'Fransa\'nın düştüğü, İngiliz ordusunun Dunkirk\'te sıkıştığı ve yenilginin kesin göründüğü o karanlık günde, bir ulusun kaderini değiştiren savaş manifestosu.',
    speechContext: '4 Haziran 1940, Avam Kamarası. İngiltere Nazi işgali tehdidi altında, halk panik içinde ve barış antlaşması (teslimiyet) yapılması baskısı var.',
    speechText: [
      { text: 'Avrupa\'nın büyük bir kısmı ve birçok eski, ünlü devlet Gestapo\'nun pençesine düşmüş olsa da...', type: 'logos', note: 'Acı Gerçeği İtiraf Etmek (Prolepsis): Kötü haberi saklamak yerine, gerçekleri tüm çıplaklığıyla söyleyerek güvenilirliğini (Ethos) sarsılmaz kılıyor.' },
      { text: 'Biz asla bayrak indirmeyeceğiz ve asla teslim olmayacağız. Sonuna kadar gideceğiz.', type: 'pathos', note: 'Katı Kararlılık: Karamsar bir tablonun hemen ardından gelen kesin ve sarsılmaz "asla" kelimesi, korkuyu cesarete dönüştürüyor.' },
      { text: 'Fransa\'da savaşacağız, denizlerde ve okyanuslarda savaşacağız, büyüyen bir güven ve güçle havada savaşacağız!', type: 'ethos-wisdom', note: 'Epistrophe (Sonda Tekrar) & Anaphora (Başta Tekrar): "Savaşacağız" (we shall fight) kelimesinin her cümlenin sonunda kılıç darbesi gibi tekrarı, hipnotik bir itaatsizlik ritmi yaratıyor.' },
      { text: 'Sahillerde savaşacağız, karaya çıkış noktalarında savaşacağız, tarlalarda ve sokaklarda savaşacağız, tepelerde savaşacağız...', type: 'pathos', note: 'Görselleştirme (Metonimi/Imagery): "Vatanı koruyacağız" gibi soyut bir kelime yerine, savaşın tam olarak "nerelerde" (sahil, sokak, tepe) olacağını sinematografik olarak beyne kazıyor.' },
      { text: 'Asla teslim olmayacağız!', type: 'pathos', note: 'Doruk (Climax): Bütün bu ritmik ve coşkulu yapı, tek ve kesin bir emir kipiyle sonlanarak tarihi baştan yazıyor.' }
    ]
  },
  {
    id: 'ka4', cat: 'analiz', icon: '🕊️', num: 'A4', badge: 'Vizyon Sanatı', badgeCls: 'ret-badge-master',
    type: 'analyzer', title: 'Martin Luther King Jr. - "Bir Hayalim Var" (1963)',
    desc: 'Sadece bir sivil haklar yürüyüşü konuşması değil; din ve siyaset retoriğinin, İncil referansları ve metaforlarla örülmüş gelmiş geçmiş en büyük sanatsal sentezi.',
    speechContext: '28 Ağustos 1963, Washington. 250.000 kişilik bir kalabalık. MLK aslında metnine bağlı kalacaktı, ancak arkasından Mahalia Jackson\'ın "Hayalinden bahset Martin!" diye bağırmasıyla doğaçlama yapmaya (spontane Pathos) başladı.',
    speechText: [
      { text: 'Yüz yıl önce bugün, gölgesinde durduğumuz büyük bir Amerikalı (Lincoln) Özgürlük Bildirgesi\'ni imzaladı.', type: 'ethos', note: 'Görkemli Bağlam (Borrowing Ethos): Kendi gücünü, o an önünde durdukları Abraham Lincoln anıtının görkemiyle ve 100 yıllık tarihi bir mirasla birleştiriyor.' },
      { text: 'Ama 100 yıl sonra bugün, zenci hâlâ özgür değil. 100 yıl sonra zencinin hayatı hâlâ ayrımcılık kelepçeleriyle sakat bırakılmış durumda.', type: 'logos', note: 'Zıtlık (Antitez) & Anafor: 100 yıl önceki "umut" ile 100 yıl sonraki "acı gerçeği" yan yana koyarak (Contrast), durumu dayanılmaz bir haksızlık çerçevesine oturtuyor.' },
      { text: 'Amerika\'nın başkentine bir çek bozdurmaya geldik. Anayasayı yazanlar, her Amerikalı için bir senet imzaladı ama Amerika, siyah vatandaşlarına karşılıksız bir çek verdi.', type: 'logos', note: 'Genişletilmiş Metafor (Extended Metaphor): "Sivil haklar ve anayasal adalet" gibi çok soyut kavramları, herkesin çok iyi bildiği bir bankacılık/para terimiyle (karşılıksız çek) mükemmel bir şekilde somutlaştırıyor.' },
      { text: 'Bir hayalim var! Gün gelecek, eski kölelerin evlatlarıyla eski köle sahiplerinin evlatları, Georgia\'nın kızıl tepelerinde kardeşlik sofrasına birlikte oturacaklar.', type: 'pathos', note: 'Vizyon Çizmek (Imagery) & Birlik (Unity): Sadece kölelerin değil, köle sahiplerinin de masada olduğu, intikam değil "kardeşlik" vadeden inanılmaz bir görselleştirme.' }
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
  },
  {
    id: 'gs2', cat: 'savunma', icon: '🖼️', num: 'G2', badge: 'Ustalık', badgeCls: 'ret-badge-master',
    type: 'article', title: 'Çerçeveleme Sanatı (Reframing)',
    desc: 'Biri size bir kuyu kazdığında o kuyuya inmek zorunda değilsiniz. Çerçeveleme, soruyu soranın dayattığı varsayımları reddedip, soruyu "cevaplamak istediğiniz" başka bir anlama dönüştürmektir.',
    content: [
      {
        sub: 'Tuzak Soruları Yeniden Çerçevelemek',
        text: 'Gazeteci sorar: "Şirketiniz işçi çıkararak sadece kendi kârını mı düşünüyor?" Bu soruya "Hayır, sadece kârımızı düşünmüyoruz" demek, o zehirli çerçeveyi (kârgözlük) kabul etmektir. Yeniden çerçeveleme şöyle yapılır: "Şirketimiz, geride kalan 5.000 çalışanının geleceğini güvence altına almak için bu zorlu optimizasyon kararını almıştır." Kâr çerçevesi kırıldı, yerine Güvenlik çerçevesi kondu.'
      },
      {
        sub: 'Köprü Kurma Tekniği (Bridging)',
        text: 'Zor bir sorudan, kendi ana mesajınıza (Talking Point) geçiş yapma sanatıdır. "Bu ilginç bir soru, ancak asıl bakmamız gereken mesele şu..." veya "O konudaki endişeleri anlıyorum, fakat bizim asıl önceliğimiz..." formülleri kullanılarak kontrol rakibin elinden alınır.'
      }
    ],
    takeaways: [
      'Asla rakibinizin kelimelerini kullanarak cevap vermeyin. Onun kelimeleri, onun oyun alanıdır.',
      'Savunmada kalmak zayıflıktır; köprü kurma taktiğiyle savunmayı anında bir karşı saldırıya veya vizyon açıklamasına dönüştürün.'
    ]
  },
  {
    id: 'gs3', cat: 'savunma', icon: '🐟', num: 'G3', badge: 'Taktik', badgeCls: 'ret-badge-advanced',
    type: 'builder', title: 'Kırmızı Balık (Red Herring) Tuzağı',
    desc: 'Red Herring, tartışmayı kaybeden kişinin konuyu kasten alakasız ama duygusal olarak kışkırtıcı başka bir yöne çekme çabasıdır. Bu simülatörde oltaya gelmemeyi öğreneceksiniz.',
    scenarioContext: 'Şirketin bütçe kesintilerini eleştirdiğiniz bir toplantıdasınız. Siz rakamlarla konuyu anlatırken, müdürünüz aniden lafa giriyor.',
    steps: [
      {
        question: 'Siz: "Son çeyrekte pazarlama bütçesi %40 kesildi, bu yüzden satışlarımız düştü." \nMüdürünüz: "Bütçe diyorsunuz ama siz geçen ayki toplantıya 20 dakika geç kalmıştınız, işinize ne kadar saygı duyuyorsunuz?" \n\nNasıl cevap verirsiniz?',
        options: [
          { text: 'Toplantıya geç kalmamın sebebi trafikte yaşadığım bir kazaydı, bu benim işime saygısız olduğumu göstermez.', score: 0, feedback: 'Oltaya geldiniz! Müdürünüz başarılı bir Kırmızı Balık (Red Herring) attı ve sizi bütçe konusundan koparıp kendi savunmanızı yapmaya zorladı. Tartışmayı kaybettiniz.' },
          { text: 'Geçen ayki toplantı konusunu memnuniyetle tartışabiliriz, ancak şu an masadaki konumuz pazarlama bütçesindeki %40\'lık kesintinin satışlara etkisi. Rakamlara geri dönersek...', score: 10, feedback: 'Mükemmel! Kırmızı balığı (Red Herring) fark ettiniz, onu nazikçe kenara itip (Bridge) kontrolü tekrar asıl konuya (Logos) döndürdünüz.' }
        ]
      }
    ]
  },
  {
    id: 'gs4', cat: 'savunma', icon: '🎤', num: 'G4', badge: 'Q&A', badgeCls: 'ret-badge-master',
    type: 'article', title: 'Zorlu Soru & Cevap (Q&A) Yönetimi',
    desc: 'Mükemmel bir sunum, felaket bir Q&A seansıyla saniyeler içinde çöpe gidebilir. İzleyici veya jüri, asıl yetkinliğinizi (Ethos) sunumda değil, spontane gelen sorulara verdiğiniz yanıtlarda ölçer.',
    content: [
      {
        sub: 'Durakla ve Düşün (Oksijen Maskesi)',
        text: 'Zor bir soru geldiğinde hemen cevaplamaya atlamak paniğin işaretidir. Soru bittikten sonra tam 3 saniye durun. Gerekirse bir yudum su alın. Bu sessizlik sizi "köşeye sıkışmış biri" gibi değil, "derin düşünen bilge bir lider" gibi gösterir.'
      },
      {
        sub: 'Soruyu Kitleye Dağıtmak',
        text: 'Saldırgan bir kişi (Heckler) ardı ardına agresif sorular soruyorsa, onunla birebir düelloya girmeyin. Göz teması kurarak cevap vermeye başlayın, ancak cümlenin ortasında bedeninizi ve gözlerinizi salondaki diğer insanlara çevirin. Dikkatinizi kitleye yaymak, saldırganın gücünü sıfırlar.'
      },
      {
        sub: 'Bilmiyorum Demenin Gücü',
        text: 'Eğer veriye sahip değilseniz, asla uydurmayın. Beden diliniz bu yalanı anında ele verir. Mükemmel formül: "Elimde şu an tam veriler yok, yanlış yönlendirmek istemem. Ancak öğleden sonra ekibimle bu spesifik metriği inceleyip size kesin bir dönüş yapacağım." Bu cevap Ethos\'unuzu (güvenilirliğinizi) zedelemez, aksine güçlendirir.'
      }
    ],
    takeaways: [
      'Soruyu soran kişi ne kadar gergin ve hızlı konuşuyorsa, sizin cevabınız o kadar sakin, yavaş ve alçak sesli olmalıdır. Zıtlık (Contrast) sizi otorite yapar.',
      'Soru & Cevap bölümü, sizin sorgulandığınız bir mahkeme değil; mesajınızı bir kez daha farklı açılardan anlatmanız için size sunulmuş bir fırsattır.'
    ]
  },

  // ────────────────────────────────────────────────────────
  // İNTERAKTİF EGZERSİZLER
  // ────────────────────────────────────────────────────────
  {
    id: 'egz1', cat: 'egzersiz', icon: '🎰', num: 'EX1', badge: 'Meydan Okuma', badgeCls: 'ret-badge-master',
    type: 'builder', title: 'Retorik Ruleti (Doğaçlama Sınavı)',
    desc: 'Büyük hatipler hazırlıksız yakalandıklarında parlayanlardır. Retorik ruleti, zihinsel çevikliğinizi (mental agility) test eder. Aşağıdaki kriz senaryolarına anında yanıt üretin.',
    scenarioContext: 'Sıradan bir toplantıdasınız. Hiç beklemediğiniz bir anda sahneye atıldınız ve sadece 30 saniyeniz var.',
    steps: [
      {
        question: 'Senaryo 1: Mikrofona çıktınız ve ses sisteminin tamamen bozulduğunu fark ettiniz. Dinleyici uğulduyor. İlk cümleniz ne olur?',
        options: [
          { text: 'Özür dilerim, sanırım teknik bir arıza var. Sesim arkaya geliyor mu?', score: 0, feedback: 'Zayıf (Ethos kaybı). Kontrolü teknik ekibe ve kitleye bıraktınız. Seyircinin gözündeki otoriteniz sıfırlandı.' },
          { text: 'Bugün size söyleyeceğim şeyler o kadar önemli ki, teknoloji bile bizi durdurmak istedi. Lütfen ön koltuklara doğru yaklaşın, bu sırrı fısıldayarak paylaşacağız.', score: 10, feedback: 'Mükemmel (Reframing & Pathos)! Krizi bir avantaja (samimiyet ve merak uyandırmaya) çevirdiniz. Liderliği anında geri aldınız.' }
        ]
      },
      {
        question: 'Senaryo 2: Yaptığınız bir gaftan (hata) dolayı salonda buz gibi bir rüzgar esti. Nasıl toparlarsınız?',
        options: [
          { text: 'Hiçbir şey olmamış gibi hızlıca bir sonraki slayta geçmek.', score: 0, feedback: 'Fil sendromu. Odadaki fili görmezden gelmek seyircinin size olan güvenini (Ethos) bitirir. Akılları o hatada kalır.' },
          { text: 'İşte tam olarak böyle hissetmenizi istedim! Yanlış bir bilgi aldığınızda hissettiğiniz o şok, birazdan size anlatacağım sistemin ne kadar hayati olduğunu kanıtlıyor.', score: 10, feedback: 'Harika bir Dönüş (Pivot)! Yaptığınız hatayı, bilerek yapılmış bir gösteriye çevirdiniz.' }
        ]
      }
    ]
  },
  {
    id: 'egz2', cat: 'egzersiz', icon: '🔨', num: 'EX2', badge: 'Atölye', badgeCls: 'ret-badge-advanced',
    type: 'builder', title: 'Kötü Konuşma Tamirhanesi',
    desc: 'Önünüzde sıradan, sıkıcı ve mantık hatalarıyla dolu bir CEO konuşması var. Elinizdeki retorik alet çantasını kullanarak bu metni bir başyapıta dönüştürün.',
    scenarioContext: 'CEO metni: "Şirketimiz bu yıl %20 büyüdü. Çok çalıştık. Rakiplerimiz kötü. Gelecek yıl daha iyi olacağız. Ürünümüzü alın."',
    steps: [
      {
        question: 'Metnin ilk cümlesini ("Şirketimiz bu yıl %20 büyüdü") nasıl daha çarpıcı bir Kanca\'ya (Hook) dönüştürürsünüz?',
        options: [
          { text: 'Bildiğiniz üzere, finansal tablolarımız %20 büyüme gösterdi.', score: 0, feedback: 'Daha da sıkıcı oldu. Sadece kelimeleri uzattınız, duygusal veya mantıksal bir darbe (Impact) eklemediniz.' },
          { text: 'Geçen yıl tam bu sahnede size bir söz vermiştim. Bugün, o sözün %20 fazlasını tutmuş bir ekibe bakıyorsunuz.', score: 10, feedback: 'Güçlü Ethos! Büyümeyi soğuk bir rakam olmaktan çıkarıp, "tutulmuş bir söz" (Güvenilirlik/Karakter) çerçevesine oturttunuz.' }
        ]
      },
      {
        question: '"Rakiplerimiz kötü" cümlesini çirkin bir karalama olmaktan (Ad Hominem) çıkarıp, nasıl asil bir zıtlığa (Antitez) dönüştürürsünüz?',
        options: [
          { text: 'Rakiplerimiz geleceği tahmin etmeye çalışırken, biz geleceği icat ediyoruz.', score: 10, feedback: 'Kusursuz Antitez. Rakibe hakaret etmeden, aranızdaki felsefi uçurumu asil ve akılda kalıcı bir şekilde çizdiniz.' },
          { text: 'Rakiplerimizin ürünleri bizimkiler kadar kaliteli ve vizyoner değil.', score: 2, feedback: 'Hala zayıf. "Vizyoner" kelimesi altı doldurulmamış, boş bir iddiadır.' }
        ]
      }
    ]
  },
  {
    id: 'egz3', cat: 'egzersiz', icon: '🎭', num: 'EX3', badge: 'Pratik', badgeCls: 'ret-badge-master',
    type: 'detective', title: 'Duygu/Mantık (Pathos/Logos) Kalibratörü',
    desc: 'Farklı kitleler, farklı frekanslarda yayın yapar. Yanlış kitleye yanlış frekansta (sadece veri veya sadece duygu) konuşursanız sinyaliniz kopar. Kalibrasyonu bulun.',
    detectiveContext: 'İki farklı salonda iki farklı sunum yapacaksınız. Tonlamanızı doğru ayarlayın.',
    dialogue: [
      { speaker: 'Senaryo A', text: 'Karşınızda bir grup melek yatırımcı (Angel Investor) var. Onlardan 1 milyon dolar istiyorsunuz.' },
      { speaker: 'Senaryo B', text: 'Karşınızda üniversiteden yeni mezun olmuş ve kariyer korkusu yaşayan 500 genç var.' }
    ],
    question: 'Bu iki kitleye sunum yaparken kullanacağınız ANA AĞIRLIK (Logos/Pathos/Ethos) dağılımı nasıl olmalıdır?',
    options: [
      { id: 'opt1', text: 'Senaryo A: Sadece Ethos. Senaryo B: Sadece Logos.', isCorrect: false, feedback: 'Yanlış. Yatırımcı sadece karakterinize (Ethos) bakarak para vermez, mantık (Logos) arar. Gençler ise veriden (Logos) çok ilham (Pathos) ister.' },
      { id: 'opt2', text: 'Senaryo A: %70 Logos, %30 Ethos (Rakamlar ve Ekibe Güven). Senaryo B: %80 Pathos, %20 Ethos (İlham ve Hikaye).', isCorrect: true, feedback: 'Tebrikler! Yatırımcılar (Sistem 2 çalışır) kesin ROI, veri ve kanıt (Logos) ister. Korkmuş gençler (Sistem 1 çalışır) ise umut, empati ve bir kahramanın yolculuğu hikayesine (Pathos) ihtiyaç duyar.' },
      { id: 'opt3', text: 'Her ikisine de %100 Pathos. İnsanlar duygularıyla karar verir.', isCorrect: false, feedback: 'Kısmen doğru ama eksik. İnsanlar duygularıyla karar verir ama o kararı kendilerine rasyonalize etmek için (özellikle 1 milyon dolar verirken) sağlam bir Logos\'a mecburdurlar.' }
    ]
  },

  // ────────────────────────────────────────────────────────
  // KÜTÜPHANE / REFERANSLAR
  // ────────────────────────────────────────────────────────
  {
    id: 'ref1', cat: 'ikna', icon: '📚', num: 'K1', badge: 'Kütüphane', badgeCls: 'ret-badge-master',
    type: 'article', title: 'İkna ve Retorik Başyapıtları',
    desc: 'Büyük hatipler aynı zamanda büyük okuyuculardır. İkna sanatının, psikolojinin ve hitabetin şifrelerini çözmek için okumanız gereken, dünya tarihini değiştiren başucu kitapları.',
    content: [
      {
        sub: '1. Hızlı ve Yavaş Düşünme (Thinking, Fast and Slow) - Daniel Kahneman',
        text: 'Nobel ödüllü Kahneman, beynimizin karar verirken kullandığı iki sistemi (Sistem 1: Duygusal/Otomatik, Sistem 2: Mantıksal/Yavaş) anlatır. \n\nNeden Okunmalı: İnsanların argümanlarınızı mantıkla değil, duygularla ve bilişsel önyargılarla (cognitive biases) değerlendirdiğini matematiksel olarak kanıtlar. Pathos\'un anatomisidir.'
      },
      {
        sub: '2. İkna\'nın Psikolojisi (Influence) - Robert B. Cialdini',
        text: 'Dr. Cialdini\'nin 6 evrensel ikna prensibini (Karşılıklılık, Tutarlılık, Toplumsal Kanıt, Otorite, Beğeni, Kıtlık) açıkladığı efsanevi eser. \n\nNeden Okunmalı: Bir fikri, ürünü veya kendinizi satarken karşınızdakinin neden "Evet" dediğini veya savunmaya geçtiğini anlamak için. Ethos inşasının modern rehberidir.'
      },
      {
        sub: '3. Retorik - Aristoteles',
        text: 'Milattan önce 4. yüzyılda yazılmış, ikna sanatının kurucu metni. Ethos, Pathos ve Logos üçgeninin yaratıldığı kitaptır. \n\nNeden Okunmalı: Bütün modern pazarlama, siyaset ve hukuk konuşmaları temelde Aristoteles\'in 2500 yıl önce yazdığı bu kitaptaki kurallara göre yapılır. Kaynağın kendisine inin.'
      },
      {
        sub: '4. İyi Konuşma Sanatı (Talk Like TED) - Carmine Gallo',
        text: 'Dünyanın en çok izlenen TED konuşmalarının ortak özelliklerini analiz eden modern bir rehber. \n\nNeden Okunmalı: Retorik figürlerini ve 18 dakikalık kısıtlı bir sürede (dikkat ekonomisinde) kitleleri nasıl ayağa kaldıracağınızı pratik örneklerle gösterir.'
      },
      {
        sub: '5. Pre-Suasion (İkna Öncesi) - Robert B. Cialdini',
        text: 'İknanın, siz konuşmaya başlamadan ÖNCE gerçekleştiğini savunan devrimsel bir kitap. \n\nNeden Okunmalı: Ortamı (Chronemics) ayarlamak, dinleyicinin ruh halini (Priming) konuşmadan hemen önce sizin istediğiniz frekansa çekmek için.'
      }
    ],
    takeaways: [
      'Günde sadece 15 dakikanızı bu kitaplardan birine ayırmak, kullandığınız kelime dağarcığını ve argüman kurma mimarinizi kökünden değiştirecektir.',
      'Sadece okumakla kalmayın, kitaplardaki "Çerçeveleme (Framing)" ve "Önyargı (Bias)" örneklerini akşam haberlerini izlerken siyasiler üzerinde test edin.'
    ]
  },

  // ────────────────────────────────────────────────────────
  // BÜYÜK FİNAL: ÖLÇME VE SERTİFİKASYON (MEZUNİYET SINAVI)
  // ────────────────────────────────────────────────────────
  {
    id: 'fin1', cat: 'egzersiz', icon: '🎓', num: 'F1', badge: 'Mezuniyet Sınavı', badgeCls: 'ret-badge-master',
    type: 'builder', title: 'Retorik Grandmaster Finali',
    desc: 'Tebrikler! Aristoteles\'in temellerinden modern kriz yönetimine kadar yüzlerce yıllık bilgiyle donandınız. Şimdi bu yeteneklerinizi gerçek bir baskı altında test etme zamanı. Eğer bu simülasyonu geçerseniz, Retorik Grandmaster sertifikasını hak etmişsiniz demektir.',
    scenarioContext: 'Senaryo: Tarihi bir skandalın tam ortasındasınız. Şirketinizin ürettiği bir yapay zeka yazılımı, büyük bir veri sızıntısına neden oldu. Yarım saat sonra milyonlarca insanın canlı izlediği bir basın toplantısına çıkacaksınız. Gazeteciler kan istiyor.',
    steps: [
      {
        question: 'AŞAMA 1 (Ethos İnşası): Kürsüye çıktınız. Kameralar yüzünüze kilitlendi. İtibarınız (Ethos) eksilerde. İlk cümleniz ne olmalı?',
        options: [
          { text: 'Şirketimizin bu sızıntıdaki yasal sorumluluğunun minimum düzeyde olduğunu belgelerle kanıtlamak için buradayım.', score: 0, feedback: 'Korkunç bir başlangıç! İnsanlar güvende hissetmediğinde yasal savunma yapmak, sizi soğuk ve suçlu bir şirket gibi gösterir. Ethos tamamen çöktü.' },
          { text: 'Bugün burada teknoloji konuşmak için değil, kırılan güveninizi konuşmak için bulunuyorum. Sorumluluğu tamamen ve şartsız olarak üzerime alıyorum.', score: 10, feedback: 'Mükemmel Ethos! Sorumluluktan kaçmak yerine (Prolepsis), en büyük mermiyi kendi göğsünüze aldınız. "Güven" çerçevesini kurarak liderliği geri aldınız.' }
        ]
      },
      {
        question: 'AŞAMA 2 (Red Herring & Reframing): Bir gazeteci bağırarak soruyor: "Böyle bir fiyasko yaşanırken, geçen hafta kendinize 2 Milyon Dolar bonus ödediğiniz doğru mu?!" Ne cevap verirsiniz?',
        options: [
          { text: 'Maaşım ve bonuslarım tamamen yönetim kurulunun onayladığı yasal çerçevelerde...', score: 0, feedback: 'Oltaya geldiniz! Gazeteci başarılı bir Kırmızı Balık (Red Herring) attı. Siz veri sızıntısını unutup kendi maaşınızı savunmaya başladınız. Kaybettiniz.' },
          { text: 'Benim finansal hak edişlerimi memnuniyetle şeffaf bir şekilde tartışabiliriz. Ancak şu an masadaki kriz, 10 milyon kullanıcımızın verisi. Önceliğimiz bu sızıntıyı durdurmak. Şimdi size aldığımız 3 acil güvenlik önlemini açıklayacağım.', score: 10, feedback: 'Kusursuz Reframing ve Köprü Kurma (Bridging)! Saldırıyı reddetmeden ustaca kenara ittiniz ve kontrolü Logos (3 önlem) alanına çektiniz.' }
        ]
      },
      {
        question: 'AŞAMA 3 (Retorik Figürleri - Trikolon): Kapanış konuşmanızı yapıyorsunuz. Güveni yeniden inşa etmek için güçlü ve ritmik bir vuruş (Trikolon) yapmalısınız.',
        options: [
          { text: 'Açığı bulduk. Sistemi kapattık. Ve bu sorunu sonsuza dek çözdük.', score: 10, feedback: 'Mükemmel Trikolon (Üçlü Kuralı). Kısa, ritmik ve kesin. Sezar\'ın "Veni, vidi, vici"si kadar beynin tamamlanma arzusunu tatmin ediyor.' },
          { text: 'Açığı tespit etmeyi başardık ve sistemlerimizde kapsamlı onarımlar yaptık, ayrıca bir daha olmaması için yoğun çaba gösteriyoruz.', score: 0, feedback: 'Çok zayıf. Ritim yok. Bürokratik, uzun ve sıkıcı bir metin.' }
        ]
      },
      {
        question: 'AŞAMA 4 (Logos - Safsata Avı): Bir başka gazeteci ayağa kalkıp diyor ki: "Eğer bu şirketi hemen kapatmazsanız, yarın tüm dünyanın banka hesapları hacklenecek!" Bu hangi mantık hatasıdır (Safsata)?',
        options: [
          { text: 'Kaygan Zemin (Slippery Slope)', score: 10, feedback: 'Doğru! Gazeteci, A olayından (veri sızıntısı) yola çıkarak aradaki bağlantıları hiçe sayıp mantıksız bir felaket senaryosuna (Z olayı) sıçrıyor.' },
          { text: 'Ad Hominem (Kişiye Saldırı)', score: 0, feedback: 'Yanlış. Gazeteci karakterinize değil, felaket senaryosuna odaklanıyor.' }
        ]
      }
    ]
  },
  // ────────────────────────────────────────────────────────
  // ETHOS LIGHT V2 (UI/UX REDESIGN DATA)
  // ────────────────────────────────────────────────────────
  {
    id: 'ethos_light_v2',
    cat: 'ethos',
    components: [
      {
        id: 'phronesis',
        title: 'Phronesis',
        subtitle: 'Pratik Bilgelik',
        icon: '🧠',
        desc: 'Sadece teorik bilgi değil, pratik deneyim ve uzmanlık. Dinleyiciye "Ben bu işi daha önce de yaptım ve nasıl çözüleceğini biliyorum" mesajını vermek.',
        example: 'Örn: Sahnede sadece slaytları okuyan değil, başından geçen bir krizi nasıl yönettiğini anlatan lider.'
      },
      {
        id: 'arete',
        title: 'Arete',
        subtitle: 'Ahlaki Karakter',
        icon: '⚖️',
        desc: 'Dürüstlük, cesaret ve tutarlılık. Hataları kabul etme ve zor zamanlarda bile ilkelerinden taviz vermeme erdemi.',
        example: 'Örn: Şirket zarar etse bile müşterilerine verdiği sözü tutan ve bunu şeffaflıkla paylaşan CEO.'
      },
      {
        id: 'eunoia',
        title: 'Eunoia',
        subtitle: 'İyi Niyet',
        icon: '🤝',
        desc: 'Dinleyicinin çıkarlarını kendi çıkarlarının önüne koyduğunu göstermek. Kitleyle kurulan empatik bağ.',
        example: 'Örn: "Bugün size bir şey satmak için değil, sektördeki büyük bir hatadan sizi korumak için buradayım" diyerek başlayan danışman.'
      }
    ],
    processSteps: [
      { step: 1, title: 'Uzmanlığınızı İspatlayın', desc: 'Konuşmanın ilk 30 saniyesinde neden bu konuda dinlenmeye değer olduğunuzu (Phronesis) süptil bir şekilde gösterin.', example: '"Geçtiğimiz 10 yılda 500\'den fazla kriz yönetimi toplantısına katıldım..."' },
      { step: 2, title: 'Savunmasızlığınızı Gösterin', desc: 'Süper kahraman olmadığınızı, geçmişte yaptığınız bir hatayı ve ondan aldığınız dersi (Arete) paylaşarak dürüstlüğünüzü kanıtlayın.', example: '"İlk projemi nasıl batırdığımı anlatarak başlamak istiyorum..."' },
      { step: 3, title: 'Ortak Zemin (Common Ground) Bulun', desc: 'Dinleyiciyle aynı değerleri ve hedefleri (Eunoia) paylaştığınızı net bir şekilde ifade edin.', example: '"Hepimizin ortak endişesi, çocuklarımıza bırakacağımız bu dünyanın..."' },
      { step: 4, title: 'Otoriteyi Ödünç Alın', desc: 'Sektördeki tanınmış figürlerden, araştırmalardan veya prestijli kurumlardan (Social Proof) bahsederek kendi itibarınızı destekleyin.', example: '"Harvard Business Review\'un son raporunda da işaret edildiği gibi..."' },
      { step: 5, title: 'Sözlerinizle Eylemlerinizi Eşleştirin', desc: 'Eğer "Şeffaflık bizim için önemlidir" diyorsanız, konuşmanızın devamında gerçekten hassas bir veriyi (Arete) korkusuzca paylaşın.', example: '"Bu yüzden size maliyetlerimizin ham halini aynen gösteriyorum..."' }
    ],
    analysis: {
      quote: '"Bu yıl çok fazla hata yaptık. Yaptığımız stratejik hataların bedelini hissedarlara ödetmemek için yönetim kurulu olarak kendi primlerimizden %50 kesinti yaptık. Amacımız her zaman sizin yatırımlarınızı en güvenli limanda tutmaktır."',
      author: 'Warren Buffett, Hissedarlara Mektup',
      points: [
        { type: 'arete', text: '"Bu yıl çok fazla hata yaptık." -> Hata kabulü (Arete). Dürüstlük ile dinleyicinin savunması düşürülüyor.' },
        { type: 'phronesis', text: '"kendi primlerimizden %50 kesinti yaptık." -> Sorumluluk alma ve aksiyon. Liderlik (Phronesis) gösterisi.' },
        { type: 'eunoia', text: '"sizin yatırımlarınızı en güvenli limanda tutmaktır." -> Sizin çıkarınızı düşünüyoruz mesajı (Eunoia).' }
      ],
      takeaways: [
        'Hataları saklamak yerine onlara ilk saldıran siz olun (Prolepsis).',
        'Bedel ödemediğiniz bir dürüstlük gösterisi ucuzdur, inandırıcı değildir.',
        'Her zaman konuşmayı dinleyicinin faydasına bağlayın.'
      ]
    },
    simulator: {
      scenario: 'Büyük bir teknoloji konferansında, tamamen yeni bir yapay zeka ürününü (henüz kimsenin test etmediği) yatırımcılara tanıtmak üzere sahneye çıkıyorsunuz. Şirketiniz daha önce küçük bir veri ihlali yaşamıştı.',
      steps: [
        {
          question: 'Açılış cümleniz ne olmalı?',
          options: [
            { text: 'Bugün size piyasadaki en kusursuz ve asla hacklenemez yapay zekayı tanıtmaya geldim.', score: 0, feedback: 'Arete (Dürüstlük) zedelendi. Geçmişteki veri ihlalini bilen yatırımcılar size anında güvenini kaybetti.' },
            { text: 'İki yıl önce yaşadığımız güvenlik krizi bize çok şey öğretti. O gün kendimize bir söz verdik: Bir daha asla. İşte bu ürün, o sözün tutulmuş halidir.', score: 100, feedback: 'Mükemmel Ethos! Geçmişteki hatayı (Prolepsis) dürüstçe kabul ettiniz (Arete) ve krizden ders çıkardığınızı (Phronesis) gösterdiniz.' },
            { text: 'Size yapay zekanın geleceğinin nasıl olacağını kod satırlarıyla anlatacağım.', score: 30, feedback: 'Sadece uzmanlık (Phronesis) var. Ama yatırımcılar güven (Arete/Eunoia) arıyor. Çok zayıf.' }
          ]
        },
        {
          question: 'Yatırımcı soruyor: "Neden diğer dev şirketler yerine size güvenelim?"',
          options: [
            { text: 'Çünkü bizim algoritma hızımız onlardan %20 daha yüksek ve maliyetimiz daha düşük.', score: 50, feedback: 'Logos\'a kaydınız. İyi ama yeterli değil, Ethos eksik.' },
            { text: 'Dev şirketler sizin paranızı Ar-Ge çöplüklerinde harcarken, biz bu teknolojiyi bizzat sahada kullanan küçük işletmelerle birlikte geliştirdik. Biz sizin dünyanızdayız.', score: 100, feedback: 'Harika Eunoia (İyi Niyet) ve Phronesis! Ortak zemin yarattınız ve "biz sizdeniz" dediniz.' },
            { text: 'Ben Stanford mezunuyum ve ekibim de MIT\'den. İşimizi biliyoruz.', score: 0, feedback: 'Kibirli bir Phronesis. Eunoia sıfır. İnsanlar sizi sevmezse sizinle iş yapmaz.' }
          ]
        }
      ]
    },
    takeaways: [
      { icon: '💎', text: 'Ethos, ne kadar zeki olduğunuz değil, dinleyicinin size ne kadar güvendiğidir.' },
      { icon: '🛡️', text: 'Kendi argümanınıza saldırmak (Prolepsis) zayıflık değil, devasa bir güç gösterisidir.' },
      { icon: '🤝', text: 'Dinleyici "Bu kişi benim çıkarlarımı düşünüyor" demediği sürece (Eunoia), uzmanlığınızın (Phronesis) hiçbir anlamı yoktur.' },
      { icon: '⚖️', text: 'Ahlaki karakter (Arete) kriz anlarında alınan tutumlarla inşa edilir, süslü kelimelerle değil.' }
    ],
    resources: [
      { title: 'Influence: The Psychology of Persuasion', author: 'Robert B. Cialdini', desc: 'Güvenilirlik ve otorite inşasının başucu kitabı.', link: '#' },
      { title: 'Aristotle\'s Rhetoric', author: 'Stanford Encyclopedia of Philosophy', desc: 'Ethos kavramının felsefi temelleri ve derin incelemesi.', link: '#' },
      { title: 'Talk Like TED', author: 'Carmine Gallo', desc: 'Dünyanın en iyi konuşmacılarının Ethos\'u nasıl kullandığına dair analizler.', link: '#' }
    ]
  }
];