module.exports = [
  {
    id: 'h1', cat: 'yapi', num: '01', badge: 'Kanca', badgeCls: 'ret-badge-beginner',
    title: 'Sıradan Dünya ve Kanca',
    desc: 'Hiçbir iyi hikaye "Merhaba, bugün size x konusundan bahsedeceğim" diye başlamaz. Dinleyicinin beynini ilk 10 saniyede yakalamanız (Hook) gerekir.',
    steps: [
      'Hikayeye doğrudan bir aksiyonun, diyalogun veya çarpıcı bir sorunun ortasından başlayın (In media res).',
      'Kahramanın (bu siz olabilirsiniz) "Sıradan Dünyasını" hızlıca çizin. Dinleyicinin kendinden bir parça bulabileceği tanıdık bir durum yaratın.',
      'Sıradan dünyadaki eksikliği veya sıkıntıyı hissettirerek "Maceraya Çağrı" (Call to Adventure) anına zemin hazırlayın.',
      'İstatistikler veya teknik verilerle değil, insan odaklı bir detayla giriş yapın (Örn: "O sabah kahvemi döktüğümde hayatımın değişeceğini bilmiyordum.")'
    ],
    quiz: {
      q: 'Bir ürün tanıtım sunumuna başlarken en güçlü "kanca" (hook) yöntemi aşağıdakilerden hangisidir?',
      opts: ['"Hepiniz hoş geldiniz, adım Ahmet ve bugün size ürünümüzü anlatacağım." demek.', '"Firmamız 2010 yılında kuruldu ve 500 çalışanı var." diyerek tarihçe vermek.', '"Geçen hafta en iyi müşterimizden biri beni ağlayarak aradı..." diyerek bir probleme direkt giriş yapmak.', 'Slaytları okuyarak başlamak.'],
      correct: 2,
      ok: 'Harika! Beynimiz dedikoduya, tehlikeye ve duygusal anlara (ağlayan müşteri) karşı koyamaz. Bu anında merak uyandırır.',
      fail: 'Yanlış. Kurumsal klişeler ve tarihçeler dinleyicinin beynini ilk 10 saniyede uyku moduna geçirir.'
    },
    scenario: {
      label: 'Sahne Analizi',
      text: 'Steve Jobs 2007\'de iPhone\'u tanıtırken "Bugün 3 devrimsel ürün tanıtıyoruz: Bir iPod, bir telefon ve bir internet cihazı..." dedi ve ekranda 3 ayrı ikon döndü.',
      analysis: 'Jobs, insanların beklentisiyle oynadı (Sıradan Dünya) ve sonra bu üçünün tek bir cihaz olduğunu söyleyerek (Kanca) salonu çıldırttı. Merakı adım adım inşa etti.'
    },
    practice: 'Yarın arkadaşınıza başınızdan geçen sıradan bir olayı anlatırken "Dün başıma ne geldi biliyor musun?" yerine doğrudan olayın en heyecanlı cümlesiyle başlayın.'
  },
  {
    id: 'h2', cat: 'yapi', num: '02', badge: 'Çatışma', badgeCls: 'ret-badge-intermediate',
    title: 'Kriz ve Çatışma',
    desc: 'Çatışma yoksa hikaye yoktur. Her şeyin yolunda gittiği bir anlatı hikaye değil, sadece bir rapordur. İnsanlar zorlukları sever.',
    steps: [
      'Kahramanın karşısına mutlaka bir engel çıkarın. Bu engel fiziksel (bütçe, zaman, rakipler) veya psikolojik (korku, özgüvensizlik) olabilir.',
      'Kriz anında "Her şey bitti" dedirten en dip noktayı (The Abyss) betimleyin.',
      'Duyguları kullanın. O an kahraman ne hissetti? Korktu mu? Utandı mı? Savunmasızlığı (Vulnerability) göstermek güvendir.',
      'Düşmanı (Villain) sadece bir kişi olarak değil, bir kavram olarak da sunabilirsiniz (Örn: "En büyük düşmanımız zamanın kendisiydi.")'
    ],
    quiz: {
      q: 'Hikayenizin ortasında (Gelişme bölümü) dinleyicinin ilgisi dağılıyor. İlgiyi tekrar toplamanın en iyi yolu nedir?',
      opts: ['Sesinizi yükselterek bağırmaya başlamak.', 'Her şeyin bir anda sarpa sardığı, beklenmedik yeni bir problem (Çatışma) ortaya atmak.', 'Konuyu hızlıca özetleyip bitirmek.', 'Dinleyicilere fıkra anlatmak.'],
      correct: 1,
      ok: 'Doğru! Çatışma hikayenin yakıtıdır. Dinleyici kahramanın o çukurdan nasıl çıkacağını merak ettiği için dinlemeye devam eder.',
      fail: 'Yanlış. İlgiyi sadece zorluklar ve o zorluklarla nasıl başa çıkıldığı canlı tutar. Fıkra veya bağırmak profesyonellikten uzaktır.'
    },
    scenario: {
      label: 'Duygusal Zeka',
      text: 'Girişimci bir yatırımcıya şirketini anlatırken hep ne kadar harika ve kusursuz olduklarından bahsediyor.',
      analysis: 'Yatırımcılar sıkılır ve inanmaz. Mükemmel başarı hikayeleri sahte hissettirir. "İlk prototipimiz paramparça olduğunda ofiste hepimiz yere çöküp ağladık..." diyen bir girişimci, kriz anını paylaştığı için çok daha inandırıcı ve bağ kurulabilirdir.'
    },
    practice: 'Kendi hayatınızdaki en büyük başarınızı düşünün. Şimdi o başarının sadece sonuçlarını değil, o yolda karşılaştığınız en büyük engeli / krizi odak noktası yaparak hikayeleştirin.'
  },
  {
    id: 'h3', cat: 'yapi', num: '03', badge: 'Dönüşüm', badgeCls: 'ret-badge-master',
    title: 'Sentez ve Dönüşüm',
    desc: 'Kahraman (veya marka) krizden çıkar ama artık eskisi gibi değildir. Bir "Aydınlanma" yaşamış ve değişmiştir. İyi bir hikaye her zaman dönüştürür.',
    steps: [
      'Krizin nasıl çözüldüğünü (Climax) net bir aksiyonla anlatın. Şans eseri değil, kahramanın bir kararıyla çözülmelidir.',
      'Kahramanın veya markanın bu süreçten ne öğrendiğini (Kıssadan Hisse / Moral of the Story) açıkça belirtin.',
      'Dinleyiciye bir "Call to Action" (Eylem Çağrısı) sunun. "Ben bunu öğrendim, şimdi sıra sizde" hissini verin.',
      'Hikayeyi başladığınız kancaya (Sıradan Dünya) bağlayarak dairesel bir kapanış (Callback) yapın.'
    ],
    quiz: {
      q: 'Bir hikayenin kapanışında kahramanın (veya firmanın) sergilemesi gereken en önemli özellik nedir?',
      opts: ['Sadece maddi olarak zenginleşmiş olması.', 'Düşmanlarını tamamen yok ettiğini anlatması.', 'Başlangıçtaki haline göre zihinsel veya karakter olarak bir "Dönüşüm" (Transformation) geçirmiş olması.', 'Kendisinin ne kadar zeki olduğunu kanıtlaması.'],
      correct: 2,
      ok: 'Mükemmel! İnsanlar para veya intikam hikayelerini değil, büyüme ve dönüşüm hikayelerini severler. Özünü bulma yolculuğudur.',
      fail: 'Yanlış. Sadece maddi başarı veya ego tatmini dinleyicide iticilik yaratır. Esas olan karakterdeki değişimdir.'
    },
    scenario: {
      label: 'Yapısal Bütünlük',
      text: 'Hikayenizi "İşte böyle oldu, dinlediğiniz için teşekkürler" diyerek bitirdiniz.',
      analysis: 'Çok zayıf bir kapanış. "O sabah dökülen o kahve olmasaydı, bugün karşınızda bu vizyonla duramazdım. Bazen en büyük fırsatlar, en ufak sakarlıklarda gizlidir." diyerek hem başa gönderme yapmalı hem de bir ders çıkarmalısınız.'
    },
    practice: 'En sevdiğiniz filmi (Örn: Matrix veya Yüzüklerin Efendisi) düşünün. Neo veya Frodo filmin başında nasıldı, sonunda nasıl dönüştü? Karakter arkını (Character Arc) analiz edin.'
  }
];