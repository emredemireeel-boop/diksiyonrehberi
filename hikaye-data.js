module.exports = [
  {
    id: 'h1', cat: 'yapi', num: '01', badge: 'Kanca', badgeCls: 'ret-badge-beginner',
    title: 'Sıradan Dünya ve Kanca (The Hook)',
    desc: 'Hiçbir iyi hikaye "Merhaba, bugün size x konusundan bahsedeceğim" diye başlamaz. Kurumsal dünyadaki en büyük hata, sunumlara tarihçe veya kendini tanıtarak başlamaktır. İnsan beyni yeni ve tehlikeli/ilginç bir bilgi arar. Dinleyicinin beynini ilk 10 saniyede yakalamanız (Hook) gerekir. Ardından, dinleyicinin empati kurabileceği "Sıradan Dünyayı" çizersiniz.',
    benefits: [
      'Dinleyicilerin telefonlarını bırakıp anında size odaklanmasını sağlar.',
      'Sizi klasik ve sıkıcı konuşmacılardan anında ayırır.',
      'Hikayenin geri kalanının dinlenmesi için "merak" (dopamin) döngüsünü başlatır.'
    ],
    mistakes: [
      '"Adım X, Y firmasından geliyorum" diyerek başlamak.',
      'Şirketin kuruluş yılı veya cirosu gibi istatistiklerle giriş yapmak.',
      'Hikayeye çok geriden, detay boğuntusuyla başlamak (In Media Res kuralını ihlal etmek).'
    ],
    steps: [
      'MEDYA RES (Ortadan Başla): Hikayeye doğrudan bir aksiyonun, diyalogun veya çarpıcı bir anın ortasından başlayın. (Örn: "O sabah masama oturduğumda, şirketin %40 değer kaybettiğini gösteren o e-postayı gördüm.")',
      'ŞOK EDİCİ İSTATİSTİK: Eğer bir hikayeniz yoksa, inançları sarsacak bir istatistik verin: "Bu salondaki insanların üçte biri, önümüzdeki 5 yıl içinde mesleklerini yapamayacak."',
      'SIRADAN DÜNYAYI ÇİZİN: Kancadan hemen sonra vitesi düşürün. Kahramanın (bu siz veya müşteriniz olabilir) kriz öncesi ne kadar normal ve herkes gibi olduğunu anlatın. Bu empati kurdurur.',
      'DUYUSAL DETAYLAR KULLANIN: Hikayenin girişinde bir duyusal detay verin. "Toplantı odası çok sıcaktı", "Kahvemi yeni yudumlamıştım." Bu, beynin görselleştirme merkezini açar.'
    ],
    tip: '💡 Hollywood senaristleri "Save the Cat" kuramını kullanır. Seyircinin kahramanı sevmesi için kahramanın hikayenin başında küçük, insani (bir kediyi kurtarmak gibi) veya çaresiz bir anını göstermelisiniz. Kibirli ve kusursuz bir kahramanın hikayesi dinlenmez.',
    quiz: {
      q: 'Bir ürün tanıtım sunumuna veya toplantıya başlarken en güçlü "kanca" (hook) yöntemi aşağıdakilerden hangisidir?',
      opts: [
        '"Hepiniz hoş geldiniz, adım Ahmet ve bugün size yeni ürünümüzü detaylarıyla anlatacağım." demek.', 
        '"Firmamız 2010 yılında kuruldu, 500 çalışanı var ve sektör lideriyiz." diyerek tarihçe vermek.', 
        '"Geçen hafta en iyi müşterimizden biri beni ağlayarak aradı..." diyerek bir probleme direkt giriş yapmak.', 
        'Slaytları okuyarak başlamak.'
      ],
      correct: 2,
      ok: 'Harika! Beynimiz dedikoduya, probleme ve duygusal anlara (ağlayan müşteri) karşı koyamaz. Bu anında merak uyandırır.',
      fail: 'Yanlış. Kurumsal klişeler ve tarihçeler dinleyicinin beynini ilk 10 saniyede uyku moduna (otopilota) geçirir.'
    },
    scenario: {
      label: 'Sahne Analizi (Apple)',
      text: 'Steve Jobs 2007\'de iPhone\'u tanıtırken "Bugün 3 devrimsel ürün tanıtıyoruz: Bir iPod, bir telefon ve bir internet cihazı..." dedi ve ekranda 3 ayrı ikon döndü.',
      analysis: 'Jobs, beklentiyle oynadı (Sıradan Dünya) ve sonra bu üçünün tek bir cihaz olduğunu söyleyerek (Kanca/Sürpriz) salonu ayağa kaldırdı. Sadece "Telefon yaptık" deseydi etki sıfır olurdu. Bilgiyi değil, merakı yönetti.'
    },
    practice: 'Yarın iş arkadaşınıza başınızdan geçen sıradan bir olayı anlatırken "Dün başıma ne geldi biliyor musun?" yerine DOĞRUDAN olayın en heyecanlı veya komik cümlesiyle başlayın.'
  },
  {
    id: 'h2', cat: 'yapi', num: '02', badge: 'Çatışma', badgeCls: 'ret-badge-intermediate',
    title: 'Kriz ve Çatışma (The Conflict)',
    desc: 'Çatışma yoksa hikaye yoktur. Her şeyin mükemmel gittiği, hedeflere kolayca ulaşıldığı bir anlatı hikaye değil, sadece kibirli bir rapordur. İnsanlar başarıları dinlemeyi değil, "zorlukların nasıl aşıldığını" dinlemeyi severler. Kriz anı, dinleyicinin koltuğunun ucuna geldiği andır.',
    benefits: [
      'Dinleyicinin dikkatinin dağıldığı anlarda ilgiyi tekrar %100 oranında toplar.',
      'Karakterinizin veya markanızın "dayanıklılığını (resilience)" kanıtlar.',
      'Dinleyici ile duygusal bir bağ (Pathos) kurmanızı sağlar.'
    ],
    mistakes: [
      'Kriz anını çok hızlı geçip hemen çözüme ve "ne kadar harika olduğunuza" odaklanmak.',
      'Karşılaşılan engeli dış güçlerin (ekonomi, rakipler) suçu olarak gösterip kurban psikolojisi yaratmak.',
      'Duyguları gizlemek (Kriz anındaki korkuyu veya utancı anlatmamak).'
    ],
    steps: [
      'FİZİKSEL VEYA ZİHİNSEL ENGEL: Kahramanın karşısına mutlaka bir engel çıkarın. Bu engel fiziksel (bütçe bitti, süre yetmedi) veya psikolojik (çok korktum, inancımı kaybettim) olabilir.',
      'KARA GECE (The Abyss): Her şey bitti, artık kurtuluş yok dedirten o en karanlık noktayı betimleyin. (Örn: "Projenin teslimine 2 gün kala tüm veri tabanımız çöktü.")',
      'KIRILGANLIK (Vulnerability): O an ne hissettiğinizi saklamayın. "Odanın kapısını kilitledim ve ellerim titreyerek ekrana baktım" demek zayıflık değil, yüksek özgüvendir.',
      'DÜŞMANI TANIMLA: Çatışmanın bir kaynağı olmalı. Bu kaynak rakip bir firma, zamanın kendisi veya eski hantal iş modelleri olabilir.'
    ],
    tip: '💡 Pixar filmlerinin temel kuralıdır: "Seyirci karakteri, başardığı şeyler için değil, başarmak için ne kadar çabaladığı için sever." Çabanız ve çektiğiniz zorluk, elde ettiğiniz sonuçtan daha değerlidir.',
    quiz: {
      q: 'Hikayenizin ortasında (Gelişme bölümü) dinleyicinin ilgisi dağılıyor. İlgiyi tekrar zirveye taşımanın hikaye anlatıcılığı açısından en iyi yolu nedir?',
      opts: [
        'Sesinizi yükselterek bağırmaya başlamak.', 
        'Her şeyin bir anda sarpa sardığı, beklenmedik yeni bir problem (Çatışma/Kriz) ortaya atmak.', 
        'Konuyu hızlıca özetleyip sunumu bitirmek.', 
        'Dinleyicilere konuyla alakasız bir fıkra anlatmak.'
      ],
      correct: 1,
      ok: 'Doğru! Çatışma hikayenin yakıtıdır. Dinleyici kahramanın o çukurdan nasıl çıkacağını merak ettiği için beyni dopamin salgılar ve dinlemeye devam eder.',
      fail: 'Yanlış. İlgiyi sadece zorluklar ve o zorlukların çözümü canlı tutar. Bağırmak veya fıkra anlatmak dikkati toplamaz.'
    },
    scenario: {
      label: 'Duygusal Zeka ve Güven',
      text: 'Girişimci bir yatırımcıya şirketini anlatırken hep ne kadar kusursuz olduklarından, hiç hata yapmadıklarından bahsediyor.',
      analysis: 'Yatırımcılar sıkılır ve inanmaz. Çünkü kusursuzluk sahtedir. "İlk ürün prototipimiz paramparça olduğunda ofiste hepimiz yere çöküp ağladık..." diyen bir girişimci, kriz anını paylaştığı için çok daha inandırıcıdır ve "Böyle bir krizi aşabildiyse paramı ona emanet edebilirim" hissi uyandırır.'
    },
    practice: 'Kendi hayatınızdaki en büyük başarınızı (mezuniyet, proje vb.) düşünün. Şimdi o başarının sonuçlarını değil, o yolda karşılaştığınız en büyük engeli ve o an hissettiğiniz korkuyu merkeze alarak olayı yeniden kurgulayın.'
  },
  {
    id: 'h3', cat: 'yapi', num: '03', badge: 'Dönüşüm', badgeCls: 'ret-badge-master',
    title: 'Sentez ve Dönüşüm (Resolution)',
    desc: 'Kahraman (veya marka) krizden çıkar ama artık eskisi gibi değildir. Bir "Aydınlanma" yaşamış, güçlenmiş ve değişmiştir. İyi bir hikaye asla sadece "sorunun çözülmesiyle" bitmez; o sorunun kahramanı nasıl değiştirdiğiyle, kahramana ne öğrettiğiyle biter. Dinleyici bu "dersten" kendine pay çıkarmak için oradadır.',
    benefits: [
      'Dinleyicide ilham ve motivasyon yaratır.',
      'Hikayenizi kişisel bir anı olmaktan çıkarıp, evrensel bir derse dönüştürür.',
      'Konuşmanızın son cümlesinin akıllara kazınmasını sağlar.'
    ],
    mistakes: [
      '"İşte olay böyle oldu, beni dinlediğiniz için teşekkürler" gibi zayıf ve sığ bir kapanış yapmak.',
      'Dönüşümü anlatmak yerine "Biz aslında hep en iyisiydik" alt metni vermek.',
      'Hikayeden çıkarılacak dersi çok karmaşık, çok felsefi veya anlaşılmaz kılmak.'
    ],
    steps: [
      'AKSIYONLA ÇÖZÜM: Krizin nasıl çözüldüğünü net bir aksiyonla anlatın. Şans eseri (Deus Ex Machina) değil, kahramanın zekası veya cesur bir kararıyla çözülmelidir.',
      'YENİ DÜNYA (The New Normal): Kriz atlatıldıktan sonra artık neyin farklı olduğunu betimleyin. "Artık eski ofisimizde değildik, ama eskisinden daha güçlü bir ekiptik."',
      'KISSADAN HİSSE (Moral): Markanın veya sizin bu süreçten ne öğrendiğinizi BİR CÜMLE ile açıkça belirtin. (Örn: "O gün öğrendim ki, mükemmellik bir illüzyondur, önemli olan ilerlemektir.")',
      'DAİRESEL KAPANIŞ (Callback): Hikayeyi başladığınız kancaya (Örn: kahve dökülme anına) veya baştaki sorunuza geri dönerek dairesel ve tatmin edici bir şekilde kapatın.',
      'EYLEM ÇAĞRISI (Call to Action): Dinleyiciye dönün: "Ben bunu öğrendim, şimdi sıra sizde. Siz kendi krizinizi nasıl fırsata çevireceksiniz?"'
    ],
    tip: '💡 Bir filmi (Matrix, Yüzüklerin Efendisi) düşünün. Neo veya Frodo filmin başında nasıldı, sonunda nasıl oldu? Buna Karakter Arkı (Character Arc) denir. Markanızın veya projenizin sunumunda da bu "başlangıç vs sonuç" evrimini netleştirmelisiniz.',
    quiz: {
      q: 'Bir iş hikayesinin kapanışında kahramanın (veya firmanın) sergilemesi gereken en önemli özellik nedir?',
      opts: [
        'Sadece maddi olarak zenginleşmiş olması.', 
        'Düşmanlarını veya rakiplerini tamamen yok ettiğini ispatlaması.', 
        'Başlangıçtaki haline göre zihinsel, yapısal veya karakter olarak bir "Dönüşüm" (Transformation) geçirmiş olması.', 
        'Kendisinin her zaman ne kadar zeki olduğunu kanıtlaması.'
      ],
      correct: 2,
      ok: 'Mükemmel! İnsanlar sadece para veya intikam hikayelerini değil, büyüme ve dönüşüm hikayelerini severler. Hikayenin özü budur.',
      fail: 'Yanlış. Sadece maddi başarı veya ego tatmini dinleyicide iticilik (kibir algısı) yaratır. Esas olan içsel değişimdir.'
    },
    scenario: {
      label: 'Yapısal Bütünlük',
      text: 'Hikayenizi "Sorunu çözdük, projeyi teslim ettik ve paramızı aldık. Teşekkürler" diyerek bitirdiniz.',
      analysis: 'Çok zayıf bir kapanış. "O sorunu çözdüğümüzde sadece projeyi teslim etmedik, bir ekibin kriz anında nasıl kenetlenebileceğini öğrendik. İşte bizi bugün sektör lideri yapan o gecedeki kenetlenmedir." diyerek bir sentez (Dönüşüm) yapmalısınız.'
    },
    practice: 'Sahnede anlattığınız bir hikayenin sonuna "O gün öğrendim ki..." cümlesini ekleyin ve hikayeden çıkardığınız o 1 cümlelik dersi not alın.'
  }
];