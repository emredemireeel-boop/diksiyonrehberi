const fs = require('fs');

const aksanExercises = [
  {
    id: 161, slug: 'istanbul-turkcesi', cat: 'aksan', emoji: '🇹🇷', title: 'İstanbul Türkçesi (Standart)',
    dur: 'Teorik', level: 'Başlangıç', freq: 'Her zaman',
    desc: 'Spikerlerin, oyuncuların ve profesyonellerin kullanmak zorunda olduğu, Türkiye\'nin resmi yayın ve edebiyat dili olan Standart İstanbul Türkçesinin kurallarını tanıma.',
    benefits: ['Bölgesel ağızların ötesinde evrensel ve nötr bir dil oluşturur', 'İş mülakatlarında ve resmi ortamlarda profesyonel bir imaj çizer', 'Cümlelerin her bölgeden insan tarafından net anlaşılmasını sağlar'],
    mistakes: ['Yazıldığı gibi okumak ("Geleceğim" yerine "Gelicem" dememek - Doğrusu: "Gelicem"dir, yazıldığı gibi okunmaz)'],
    phrase: null,
    steps: [
      'İstanbul Türkçesinde "Ğ" harfi kesinlikle okunmaz, kendinden önceki ünlüyü bir ses uzatır (Örn: Yağmur -> Ya:mur).',
      'Gelecek zaman eki "-ecek/-acak" konuşma dilinde daralır (Örn: Yapacağım -> Yapıcam, Geleceğim -> Gelicem).',
      'Kelime sonlarındaki K ve T harfleri yutulmaz, net bir şekilde söylenir.',
      'Soru eki "mi" hiçbir zaman kendinden önceki kelimeye bitişik okunmaz, hafif bir es (duraklama) verilir.'
    ],
    variations: [
      '🔄 Yöre Testi: "Yapacağım" kelimesini okuyun. Eğer "Yapacağam", "Yapıcem", "Yapcem" diyorsanız yöresel; "Yapıcam" diyorsanız İstanbul Türkçesidir.'
    ],
    tip: '💡 Diksiyonda "Yazıldığı gibi okunur" efsanesi koca bir yalandır. Türkçe yazıldığı gibi OKUNMAZ. İstanbul Türkçesi, yazı dilini konuşma diline estetik ve akıcı bir şekilde uyarlama sanatıdır.',
    related: [174, 162]
  },
  {
    id: 162, slug: 'karadeniz-aksani-analizi', cat: 'aksan', emoji: '🌊', title: 'Karadeniz Aksanı Analizi',
    dur: '10 dk', level: 'Orta', freq: 'Gerektiğinde',
    desc: 'Doğu Karadeniz bölgesine özgü ünlü-ünsüz değişimlerini (B-P, C-Ç, G-K) ve aşırı hızlı konuşma temposunu İstanbul Türkçesine adapte etme çalışmaları.',
    benefits: ['Hızlı ve anlaşılmaz konuşma (tarama) sorununu yavaşlatır', 'K-G, B-P karmaşasını gidererek sert artikülasyonu düzeltir', 'Nötr bir iş dili geliştirilmesine yardımcı olur'],
    mistakes: ['Vurguları kelimenin ilk hecesine atmak (Örn: gelİyorsun yerine GEliceysun demek)', 'Yazı dilindeki G harflerini C\'ye (Geldim -> Celdim) çevirmek'],
    phrase: '"Bugün buraya geldim."',
    steps: [
      'Bilinçli Yavaşlama: Normal konuşma hızınızı %30 oranında düşürün. Karadeniz şivesindeki en büyük sorun sesletim değil, hiper-tempodur.',
      'K ve G Ayrımı: "Geldim" derken dil kökünüzü geriye yaslayıp titreşim (G) oluşturun. Eğer dil ucu damağa vurursa (C) "Celdim" olur.',
      'Ünlü Değişimi: "O" ve "Ö", "U" ve "Ü" seslerini karıştırmayın. Ayna karşısında yuvarlak ünlü çalışması yapın.',
      'Vurgu: Yöresel vurgular genelde baştadır. Standart Türkçede ise vurgu son hecededir (İstanBUL).'
    ],
    variations: [
      '🔄 Yutma Egzersizi: H harflerini yutmamaya odaklanın (Hasan -> Asan demek yerine H sesini belirginleştirin).'
    ],
    tip: '💡 Bir Karadenizli için İstanbul Türkçesi konuşmak, sanki çok ağır çekimde (slow motion) konuşuyormuş gibi bir his yaratır. Bu his geçici ve yanıltıcıdır; aslında karşı taraf sizi "normal" hızda duyuyordur.',
    related: [161, 174]
  },
  {
    id: 163, slug: 'dogu-anadolu-aksani', cat: 'aksan', emoji: '⛰️', title: 'Doğu Anadolu Aksanı',
    dur: '10 dk', level: 'Orta', freq: 'Gerektiğinde',
    desc: 'Doğu ve İç Doğu Anadolu\'da sık görülen kalın ünlü (A, I, O, U) baskınlığı ve K harfinin G/H gibi okunmasını standartlaştırma egzersizi.',
    benefits: ['Boğazdan (guttural) konuşma alışkanlığını kırar', 'Sesi öne (dudaklara) taşıyarak daha berrak bir ton sağlar', 'Kaba duyulan gırtlak seslerini inceltir'],
    mistakes: ['İnce ünlüleri (E, İ, Ö, Ü) kalın veya açık okumak (Belli -> Bälli, Ben -> Bän)', 'K harfini Arapçadaki H (Hı) gibi gırtlaktan sürtünmeli çıkarmak'],
    phrase: '"Kardeşim kapıyı kapatır mısın?"',
    steps: [
      'K Sesletimi: "K" harfi gırtlaktan (hırıltılı) çıkmaz. Dilinizin arka kısmını sert damağınıza VURUP çekin (Tıklama hissi). "Kardeşim" deyin, "Hardeşim" değil.',
      'İnce Ünlüler: E sesini açarak "Ä" yapmayın (Örn: Päncärä değil, Pencere). Dudak köşelerinizi gererek "Kapalı E" çalışması yapın.',
      'Ön Rezonans: Konuşurken sesin gırtlağınızda değil, maskede (dudak ve burun arkası) titreştiğini hissedin.'
    ],
    variations: [
      '🔄 Abartılı İnceleme: Bir metni sırf antrenman olsun diye, tüm ünlüleri abartılı derecede ince (İ, Ü) okuyarak dil kaslarına yeni pozisyon ezberletin.'
    ],
    tip: '💡 Doğu aksanının temel özelliği "Gırtlak" (arka) kullanımının fazla olmasıdır. Düzeltmenin tek yolu "Ön Odaklı" (Maske rezonansı) konuşma pratiği yapıp sesi dudaklara yaklaştırmaktır.',
    related: [161, 174]
  },
  {
    id: 164, slug: 'guneydogu-anadolu-aksani', cat: 'aksan', emoji: '🏜️', title: 'Güneydoğu Anadolu Aksanı',
    dur: '10 dk', level: 'Orta', freq: 'Gerektiğinde',
    desc: 'Arapça ve Kürtçe dil ailelerinin (Sami dilleri vb.) Türkçe fonetiği üzerindeki etkilerini (gırtlak sesleri, kalın L, sert T-D) yumuşatma.',
    benefits: ['Türkçenin daha akıcı ve "yaylı" (yumuşak) konuşulmasını sağlar', 'Sert patlamalı ünsüzleri (P, Ç, T, K) standart düzeye çeker', 'Melodiyi (enternasyonu) Türkçe standardına oturtur'],
    mistakes: ['L harfini her yerde kalın ve dil kökünden (Arapça Lâm) okumak', 'Eğreti duran duraklamalar ve kesik kesik (staccato) konuşma stili'],
    phrase: '"Güneş bugün ne kadar güzel doğdu."',
    steps: [
      'İnce L Çalışması: "Lale, Limon, Lüle" kelimelerini söylerken dilin sadece UCU diş etine değmelidir, dil kökünüzü serbest bırakın.',
      'Akıcılık (Legato): Kelimeleri birbirinden kopararak (makineli tüfek gibi) okumayın. Tüm cümleyi tek bir uzun kelimeymiş gibi birbirine ulayarak (Legato tekniği) okuyun.',
      'Boğaz Sıkışması: Ayn (ع) ve Ha (ح) gibi Arapça kökenli gırtlak sıkmalarını Türkçede yapmayın, gırtlağı gevşek bırakın.'
    ],
    variations: [
      '🔄 Yumuşatma: Sert T ve D seslerini söylerken, dilinizi dişinize vuruş şiddetini yarı yarıya azaltarak yumuşak bir temas sağlayın.'
    ],
    tip: '💡 Güneydoğu aksanında kelimeler bloklar halinde ve sert köşeli çıkar. Standart Türkçede ise kelimeler su gibi birbirine akar (Ulama). Yumuşaklık ve akıcılık temel hedeftir.',
    related: [161, 174]
  },
  {
    id: 165, slug: 'ege-izmir-aksani', cat: 'aksan', emoji: '☀️', title: 'Ege / İzmir Aksanı',
    dur: '10 dk', level: 'Orta', freq: 'Gerektiğinde',
    desc: 'Ege bölgesine has kelime yutma (R ve K sesleri), son heceleri uzatma ve rahat/gevşek artikülasyon alışkanlıklarını düzeltme.',
    benefits: ['Resmi konuşmalarda ciddiyet ve otorite kazandırır', 'Yutulan heceleri geri getirerek net anlaşılırlık sağlar', 'Tembel dudak kaslarını aktifleştirir'],
    mistakes: ['"Geliyorum" yerine "Geliom", "Gidiyorum" yerine "Gidiom" diyerek R harflerini yutmak', 'Cümle sonlarını gereksiz ve abartılı uzatmak'],
    phrase: '"Geliyorum ve hemen gidiyorum."',
    steps: [
      'R Harfi Avı: "Yor" ekinin sonundaki R sesini belirgin bir şekilde (titreterek) çıkarın. "GeliYOR, YapaCAK" (Yapacem değil).',
      'Cümle Sonu Kesikliği: Cümlenin son kelimesini uzatarak havada bırakmayın. Nokta geldiğinde sesi kararlı bir şekilde kesin ve bitirin.',
      'Ağız Tembelliği: Ege aksanının rahatlığı dudakları uyuşturur. Kalem ısırarak tekerleme okuyun ve dudak kaslarınızı zorlayın.'
    ],
    variations: [
      '🔄 Staccato (Kesik) Konuşma: Egenin yayvan (legato) konuşmasını kırmak için bir metni robot gibi kelime kelime, sert ve kesik okuyun.'
    ],
    tip: '💡 Ege şivesi kulağa çok sempatik ve samimi gelse de, kurumsal bir toplantıda veya haber sunumunda "fazla rahat" bir algı yaratarak otoritenizi zedeleyebilir. Kesinlik ve netlik çalışılmalıdır.',
    related: [161, 174]
  },
  {
    id: 166, slug: 'ic-anadolu-aksani', cat: 'aksan', emoji: '🌾', title: 'İç Anadolu Aksanı',
    dur: '10 dk', level: 'Orta', freq: 'Gerektiğinde',
    desc: 'Bozkırın getirdiği düz ünlü kullanımını (A, E, I, İ baskınlığı), yuvarlak ünlülere (O, Ö, U, Ü) geçiş zorluğunu ve yöresel vurguları temizleme.',
    benefits: ['"Nörüyon" (Ne yapıyorsun) tarzı kelime birleşimlerini önler', 'Dudakların yuvarlanma becerisini artırır', 'Orta Anadolu melodi kalıbını kırar'],
    mistakes: ['Kelime ortasındaki K harfini G okumak (Bakan -> Bagan)', 'Yuvarlak ünlüleri düzeltip düz okumak'],
    phrase: '"Ankara\'nın soğuk bir gününde otobüse bindim."',
    steps: [
      'K-G Ayrımı: İki ünlü arasındaki K sesine dikkat edin. "Sokak" deyin, "Sogah" değil. Dudaklarınızı değil, dilinizin arkasını kullanın.',
      'Yuvarlak Ünlü Kasları: İç Anadolu konuşmasında dudaklar genelde düz ve hareketsizdir. Ayna karşısına geçip O ve U derken dudaklarınızı İLERİ doğru büzün (Öpücük).',
      'Kelime Tamamlama: "Napıyon", "Nidiyon" yerine ekleri tam ve standart daralmayla okuyun: "Napıyorsun" -> "Napıyosun" (r düşer ama o kalır).'
    ],
    variations: [
      '🔄 Dudak Büzme (Pucker): Sadece yuvarlak ünlülerden (O, Ö, U, Ü) oluşan tekerlemeleri (Örn: Üç tunç tas kayısı hoşafı) abartılı dudak hareketleriyle okuyun.'
    ],
    tip: '💡 İç Anadolu aksanında dudaklar çok az hareket eder. Nötr bir İstanbul Türkçesi için dudak kaslarının kondisyonunu artırmak ve öne doğru çalıştırmak şarttır.',
    related: [161, 174]
  },
  {
    id: 167, slug: 'trakya-rumeli-aksani', cat: 'aksan', emoji: '🌻', title: 'Trakya / Rumeli Aksanı',
    dur: '10 dk', level: 'Orta', freq: 'Gerektiğinde',
    desc: 'H harfinin yutulması, İnce L ve kalın L karışıklığı ile Balkan coğrafyasına özgü enternasyon (cümle melodisi) farklılıklarını standartlaştırma.',
    benefits: ['Trakyalılara özgü yukarı doğru giden cümle melodisini düzeltir', 'H sesini geri getirerek anlam karmaşasını (Hasan -> Asan) önler', 'Hız problemini çözer'],
    mistakes: ['H harfini kelime başı ve ortasında tamamen yutmak (Hava -> Ava, Kahve -> Kave)', 'B-P yer değiştirmesi (Pancar -> Bancar)'],
    phrase: '"Hasan, kahveleri hazırlayıp hemen haritaya bak."',
    steps: [
      'H Harfi Egzersizi: Bir mumu yüzünüze yaklaştırın. H harfini söylerken ağzınızdan çıkan sıcak havanın mumun alevini titrettiğini görün. H sesi nefesli bir sestir.',
      'Melodi (Enternasyon): Trakya şivesinde cümle sonları genellikle yükselir (Soru sorar gibi). Standart Türkçede ise düz cümlelerin sonu AŞAĞI doğru (pesleşerek) biter.',
      'B-P Ayrımı: Dudaklarınızı birleştirirken nefes patlatırsanız P, ses teli titreştirirseniz B olur. Aynada bu farkı çalışın.'
    ],
    variations: [
      '🔄 H Avı: Metinlerdeki tüm H harflerini kırmızı kalemle çizin ve okurken sadece o harflerde abartılı nefes verin ("Hhhasan, hhhava çok sıcak").'
    ],
    tip: '💡 H harfi Türkçede sadece nefesin sese dönüşmesiyle oluşur. Trakya aksanında diyafram nefesi yetersiz kaldığı için bu enerji gerektiren H sesi refleks olarak yutulur. Çözüm güçlü diyaframdır.',
    related: [161, 174]
  },
  {
    id: 168, slug: 'akdeniz-aksani', cat: 'aksan', emoji: '🍊', title: 'Akdeniz Aksanı',
    dur: '10 dk', level: 'Orta', freq: 'Gerektiğinde',
    desc: 'Çukurova ve Akdeniz şeridinde sıkça görülen ünlü daralmaları (A-E yerine I-İ), hızlı tempo ve Arapça/Kürtçe/Yörük etkilerinin harmanlandığı melodi düzeltmesi.',
    benefits: ['Bölgesel ünlü daralması hatasını (Geliyorum -> Geliyürüm) yok eder', 'Sert ve yüksek volümlü konuşmayı dizginler', 'Ağız açıklığını artırır'],
    mistakes: ['Gelecek zamanı aşırı daraltmak (Yapacağım -> Yapıciim / Yapacam)', 'Hece vurgularını çok sert vurmak'],
    phrase: '"Yarın Adana\'ya gideceğim."',
    steps: [
      'Çene Açıklığı: "A" ve "E" gibi açık ünlüleri söylerken çenenizi standarttan 1 santim daha fazla aşağı indirin.',
      'Daralma Kontrolü: "Yapıcam, Gelicem" derken C\'den sonraki A veya E sesini "İ" veya "Ü" ye çevirmeyin. "Geliciim" yerine "Gelicem" demelisiniz.',
      'Volüm Kontrolü: Akdeniz insanı sıcakkanlıdır ve genellikle yüksek sesle (Bağırarak) konuşur. Konuşma hacminizi bilinçli olarak %30 kısın.'
    ],
    variations: [
      '🔄 Kapalı E Çalışması: "Kendi, Tencere, Pencere" gibi kelimeleri E sesini yayarak (İ\'ye yaklaştırmadan) okuyun.'
    ],
    tip: '💡 Akdeniz şivesi enerjiktir. Nötr bir İstanbul Türkçesine geçerken bu enerjiyi kaybetmeden, sadece seslerin çıkış noktalarını (artikülasyon) standart hizaya çekmek gerekir.',
    related: [161, 174]
  },
  {
    id: 169, slug: 'ingilizce-aksanli-turkce', cat: 'aksan', emoji: '🇺🇸', title: 'İngilizce Aksanlı Türkçe Düzeltme',
    dur: '15 dk', level: 'İleri', freq: 'Gerektiğinde',
    desc: 'Gurbetçiler, çift dilliler veya İngilizce öğretmenleri için; İngilizcenin yuvarlanan R\'leri, patlamalı T/P\'leri ve kelime sonu yutma alışkanlıklarını Türkçeden temizleme.',
    benefits: ['Türkçenin "T" ve "R" seslerini doğru yere oturtur', '"Amerikanvari" konuşma hissini (Pelüş aksan) yok eder', 'Yurtdışında yaşayıp Türkçesini korumak isteyenlere rehber olur'],
    mistakes: ['R harfini Amerikan İngilizcesindeki gibi dili geriye kıvırarak (Retroflex) yutarak söylemek', 'T ve P harflerinde ağızdan şiddetli hava patlatmak (Aspiration)'],
    phrase: '"Rüzgar esiyor, perdeler titriyor."',
    steps: [
      'R Harfi: Türkçede R harfi dilin UCUNUN üst ön diş etine bir kez (tek vuruşlu - tap) çarpmasıyla oluşur. Dilinizi İngilizcedeki gibi geriye (boğaza doğru) kıvırmayın!',
      'Sert Ünsüzler (T, P, K): Türkçede T derken ağızdan "h" sesi çıkmaz. İngilizcedeki gibi "T(h)om" değil, düz "Top" deyin. Elinizi ağzınıza koyun, nefes patlamamalı.',
      'Vurgu: İngilizce strese (vurguya) dayalı bir dildir. Türkçe ise hece zamanlıdır. Kelimeleri İngilizce gibi sündürerek (up and down) değil, her heceye eşit süre vererek makine gibi okuyun.'
    ],
    variations: [
      '🔄 Düzleştirme (Monoton) Okuma: İngilizce melodisini kırmak için Türkçe bir metni robot gibi, hiçbir duygu ve iniş-çıkış (pitch) yapmadan tamamen düz bir çizgide okuyun.'
    ],
    tip: '💡 Bir dili aksanlı yapan şey harfler değil, dilin müziğidir (Enternasyon). İngilizce bir caz müziği gibi esnektir, Türkçe ise bir marş gibi net, tık-tık-tık ilerleyen bir ritme sahiptir.',
    related: [174, 161]
  },
  {
    id: 170, slug: 'arapca-aksanli-turkce', cat: 'aksan', emoji: '🇸🇦', title: 'Arapça Aksanlı Türkçe Düzeltme',
    dur: '15 dk', level: 'İleri', freq: 'Gerektiğinde',
    desc: 'Anadili Arapça olanlar veya bu dil ailesiyle büyüyenler için, gırtlak (faringeal) seslerin ve kalın ünlülere (A, U, I) eğilimin düzeltilmesi.',
    benefits: ['Türkçenin ön-damak (maske) rezonansına alışmayı sağlar', 'P ve Ç seslerini (Arapçada olmayan) doğru çıkarmayı öğretir', 'Vurgu hatalarını (kelime başı vurgusu) sona çeker'],
    mistakes: ['P yerine B demek (Para -> Bara)', 'Ç yerine Ş veya C demek (Çay -> Şay/Cay)', 'İnce ünlüleri (Ö, Ü, E) söyleyemeyip kalınlaştırmak'],
    phrase: '"Pazardan üç tane pembe çilek aldım."',
    steps: [
      'P Harfi: Dudaklarınızı içeri kıvırıp aniden açarak nefes patlatın. P sesinde ses telleri titremez! Boğazınıza dokunun, titriyorsa B diyorsunuzdur.',
      'Ç Harfi: Dilinizi T harfini söyler gibi damağa yapıştırın ve Ş sesi vererek hızlıca çekin (T+Ş = Ç).',
      'Ö ve Ü Harfleri: Ayna karşısında dudaklarınızı O der gibi yuvarlayın, ancak dilinizi İ der gibi ileri ve yukarı itin. Bu kombinasyon size Türkçenin ince yuvarlak seslerini verir.',
      'Gırtlağı Rahatlatma: Arapça çok gırtlaktan konuşulan bir dildir. Türkçede ise ses önden (dudak ve dişlerden) çıkar. Konuşurken nefesinizi öne üfleyin.'
    ],
    variations: [
      '🔄 Minimal Çiftler (Minimal Pairs): Birbirine benzeyen kelimeleri arka arkaya okuyun: (Bara - Para), (Cay - Çay), (Göz - Koz).'
    ],
    tip: '💡 Arapça kökenli kişilerin Türkçe öğrenirken en çok zorlandıkları şey P ve Ç sesleridir. Çünkü Arap alfabesinde bu seslerin bir karşılığı yoktur. Dudak ve dil ucu kaslarını yeniden eğitmek gerekir.',
    related: [174, 161]
  },
  {
    id: 171, slug: 'kurtce-aksanli-turkce', cat: 'aksan', emoji: '🗣️', title: 'Kürtçe Aksanlı Türkçe Düzeltme',
    dur: '15 dk', level: 'İleri', freq: 'Gerektiğinde',
    desc: 'Doğu ve Güneydoğu bölgelerinde anadili veya ikinci dili Kürtçe olan kişilerin Türkçedeki ince ünlüler ve yuvarlak ünlüleri (Ö, Ü) standardize etme çalışması.',
    benefits: ['Kürtçenin gırtlak ve kalın ses yapısını Türkçenin ince yapısından ayırır', 'Ö ve Ü harflerinin U ve O\'ya kaymasını engeller', 'B ve V karmaşasını çözer'],
    mistakes: ['Ö yerine O, Ü yerine U demek (Ölüm -> Olum, Üzüm -> Uzum)', 'V yerine W (Dudak yuvarlaklaştırarak) demek (Varmak -> Warmak)'],
    phrase: '"Ördekler gölün üzerinde süzülüyor."',
    steps: [
      'V Harfi: Kürtçedeki W sesi gibi dudakları yuvarlayarak değil, Alt dudağınızı Üst dişlerinize hafifçe değdirip üfleyerek çıkarın (F harfinin titreşimlisidir).',
      'Ö ve Ü Sesleri: Bu sesler İnce-Yuvarlak ünlülerdir. Dudaklarınızı büzün (öpücük) ve sesin gırtlaktan değil ön taraftan, burnunuzun altından çıktığını imgeleyin.',
      'K-G Sertliği: Kürtçede K ve G çok sert ve gırtlaksıdır. Türkçede ise bu sesler damaktan çıkar. Dilinizi daha öne yerleştirin.'
    ],
    variations: [
      '🔄 Ünlü Uyum Testi: İçinde bolca Ö ve Ü geçen tekerlemeleri (Örn: "Öküzün önüne öbek öbek ot dökülmüş") yavaşça ve ünlülerin hakkını vererek okuyun.'
    ],
    tip: '💡 Bölgesel aksanlar bir kusur veya utanç kaynağı değil, kültürel bir zenginliktir. "Aksan düzeltme" terimi, sadece kişinin iş veya resmiyet gereği "Standart İstanbul Türkçesine" geçiş yapabilme yeteneği (switch) kazanmasıdır.',
    related: [174, 161]
  },
  {
    id: 172, slug: 'rusca-slav-aksanli-turkce', cat: 'aksan', emoji: '🇷🇺', title: 'Rusça / Slav Aksanlı Türkçe',
    dur: '15 dk', level: 'İleri', freq: 'Gerektiğinde',
    desc: 'Rusça, Ukraynaca, Bulgarca gibi Slav dil ailesinden gelenlerin Türkçe konuşurken yaşadıkları sert R, palatalizasyon (ince okuma) ve vurgu sorunlarını çözme.',
    benefits: ['Kalın ünlüleri (I, A) doğru çıkarmayı sağlar', 'Kelimeleri Rusçadaki gibi çok ince ve yayvan okumayı önler', 'R harfinin şiddetini azaltır'],
    mistakes: ['Kalın I harfi yerine i veya ı/i arası bir ses (Yı) çıkarmak', 'Sessiz harfleri (özellikle L ve N) arkasından ince ünlü geliyormuş gibi yumuşatmak (Lya, Nya)'],
    phrase: '"Kırmızı balık ırmakta hızla yüzüyor."',
    steps: [
      'Kalın "I" Sesi: Slav dillerinde tam bir Türkçe "I" sesi yoktur. I demek için, İ derken dilinizi yavaşça boğazınıza doğru geriye çekin ve çenenizi hafif açın.',
      'Sert R: Rusçada R dili titreterek çok güçlü çıkarılır (Peeerrrro). Türkçede ise R kısadır, dil sadece bir kez vurur ve döner (Tap).',
      'Yumuşatma (Palatalizasyon): Sessiz harflerden sonra araya görünmez bir Y harfi koymayın. "Sadece" demek yerine "Syadece", "Lazım" yerine "Lyazım" dememeye odaklanın.'
    ],
    variations: [
      '🔄 Kalınlık Testi: "Irmak, Isı, Işık, Sır" kelimelerini arka arkaya okurken dilinizin ağzınızın neresinde durduğunu kontrol edin (Dil geride ve ortada olmalıdır).'
    ],
    tip: '💡 Rus aksanının en belirgin özelliği kelime ortalarındaki sessiz harflerin ağzın ön tarafında çok yumuşak (Y\'li gibi) çıkmasıdır. Türkçenin kemikli ve net ünsüz yapısına alışmak için diş ve damak teması sıkılaştırılmalıdır.',
    related: [174, 161]
  },
  {
    id: 173, slug: 'lehce-farkindaligi-korunma', cat: 'aksan', emoji: '🧠', title: 'Aksan Farkındalığı: Ne Zaman Korunmalı?',
    dur: 'Teorik', level: 'Başlangıç', freq: 'Bir kez',
    desc: 'Kişinin kendi yöresel aksanını tamamen silip yok etmek yerine, "Standart Türkçe" ile "Yöresel Aksan" arasında bilinçli bir düğme (switch) geliştirmesi.',
    benefits: ['Aksan kompleksi veya utancını ortadan kaldırır', 'Memleketteki aile ve arkadaşlarla samimi bağı korur', 'Çift dilli (Bilingual) bir beyin gibi iki aksanı da ustaca kullanmayı sağlar'],
    mistakes: ['Kendi köyünde/ailesinde İstanbul şivesiyle konuşarak yapay ve ukala bir imaj çizmek', 'İş mülakatında veya haber bülteninde yöresel şive kullanarak profesyonelliği zedelemek'],
    phrase: null,
    steps: [
      'Kod Değiştirme (Code-Switching): Beyninizde iki farklı kanal oluşturun. Kanal 1: Memleket/Aile (Samimi, kuralsız, doğal). Kanal 2: İş/Resmiyet (İstanbul Türkçesi, net, kurallı).',
      'Ortam Analizi: Toplantı odasına girdiğinizde fiziksel bir düğmeye basıyormuş gibi Kanal 2\'yi açın. Odanın kapısından çıkıp kahve arasına geçtiğinizde Kanal 1\'e dönebilirsiniz.',
      'Aksan Silinmez, Eklenir: Diksiyon eğitimi sizin memleketinizin dilini silmez. Sadece envanterinize (cebinize) "Standart Türkçe" adında yepyeni ve pırıl pırıl bir alet daha ekler.'
    ],
    variations: [
      '🔄 Zıtlık Pratiği: Aynı cümleyi ("Yarın akşam nereye gideceğiz?") önce en koyu memleket aksanınızla, sonra bir TRT spikeri ciddiyetiyle okuyun. Aradaki kas geçişini hissedin.'
    ],
    tip: '💡 Aksanınız kimliğinizin, soyunuzun ve toprağınızın DNA\'sıdır. Ondan utanmak, kendinden utanmaktır. Profesyonel bir spiker bile kamerayı kapattığında ailesiyle kendi yöresinin tatlı şivesiyle konuşabilir. Önemli olan "kontrolün" kimde olduğudur.',
    related: [161, 174]
  },
  {
    id: 174, slug: 'notr-aksan-gelistirme', cat: 'aksan', emoji: '⚙️', title: 'Nötr Aksan Geliştirme (30 Gün)',
    dur: '30 Gün', level: 'İleri', freq: 'Her gün',
    desc: 'Baskın yöresel aksanlardan tamamen arınıp, televizyon standartlarında "Nötr" (Bölgesi tahmin edilemeyen) bir Türkçe konuşabilmek için yoğun program.',
    benefits: ['Sesinizden nereli olduğunuzun anlaşılamamasını sağlar (Nötrleşme)', 'Profesyonel oyunculuk, spikerlik ve dublaj için zorunlu altyapıyı kurar', 'Bilinçaltındaki yöresel fonetik kodları sil baştan yazar'],
    mistakes: ['Sadece okurken İstanbul Türkçesi yapıp, günlük sohbette eski aksana geri dönmek', 'Diksiyon kurallarını ezberleyip mekanik (robot gibi) konuşmak'],
    phrase: null,
    steps: [
      'Gölgeleme Tekniği (Shadowing): Günlük 15 dakika haber kanalı açın. Spikerin okuduğu cümleyi 1 saniye geriden, aynı tonlama, melodi ve harf netliğiyle tekrar edin (Gölge gibi takip edin).',
      'Ses Kaydı: Her akşam bir gazete haberini sesli okuyup kaydedin. Dinlerken yöresel melodi, K-G değişimleri veya daralma hatalarınızı arayın.',
      'Günlük Konuşma Testi: 30 gün boyunca bakkala, arkadaşınıza veya ailenize DAHİ kurallı İstanbul Türkçesi ile (Kanal 2) konuşmaya kendinizi zorlayın. Kas hafızası ancak bu şekilde oturur.',
      'Dudak ve Çene: Aksanların çoğu ağzın tembel kullanımından (açılmamasından) kaynaklanır. Ağzınızı standarttan 2 kat daha fazla açarak konuşmaya alışın.'
    ],
    variations: [
      '🔄 Yabancı Metin Etkisi: Çok düzgün çevrilmiş altyazılı bir belgesel veya film senaryosunu okuyun. Senaryo dili genellikle nötr ve resmidir.'
    ],
    tip: '💡 İnsan beyni 20 yıl boyunca bir kelimeyi (Örn: Gelicem) Karadeniz şivesiyle "Celucem" diye kaydetmişse, bunu 2 günde değiştiremezsiniz. Kasların ve sinir yollarının yeniden programlanması için kesintisiz 21-30 günlük "farkındalıklı" tekrar şarttır.',
    related: [161, 173]
  },
  {
    id: 175, slug: 'yabancilar-icin-turkce-diksiyon', cat: 'aksan', emoji: '🌍', title: 'Yabancılar İçin Türkçe Diksiyon',
    dur: 'Teorik', level: 'Başlangıç', freq: 'Gerektiğinde',
    desc: 'Türkçeyi ikinci dil olarak (TÖMER vb.) öğrenen yabancıların Türkçenin temel mantığını, ünlü uyumunu ve hece yapısını kavraması.',
    benefits: ['Büyük ve Küçük Ünlü Uyumu kuralını sese yerleştirir', 'Türkçenin aglütinatif (sondan eklemeli) yapısındaki vurgu mantığını öğretir', 'Robotik konuşmayı engeller'],
    mistakes: ['Kelimeleri birleştirirken (ulama yaparken) İngilizcedeki gibi kelimenin kökünü bozmak', 'Türkçe "I" ve "Ü" seslerini söyleyemediği için İ ve U demek'],
    phrase: null,
    steps: [
      'Heceleme Dili: Türkçe tamamen "Hece" odaklı bir dildir. Konuşurken kelimenin bütününe değil, hecelerin eşit sürede çıkmasına odaklanın (TÜR-Kİ-YE = 1-1-1).',
      'Ünlü Uyumu: Türkçede bir kelimenin ilk hecesi kalınsa (A,I,O,U) diğerleri de kalın, inceyse (E,İ,Ö,Ü) diğerleri de ince gider. Bu müzikal bir dalgadır. Bunu kulağınıza ezberletin.',
      'Soru Mantığı: Türkçede soru cümlesi yaparken cümle sonu (melodi) YÜKSELMEZ, sadece "mı/mi" edatında hafif bir yükseliş ve es olur.'
    ],
    variations: [
      '🔄 Ayna İkizleri: I-İ ve U-Ü harflerini yan yana çalışın. Dudak pozisyonunun nasıl farklılaştığını aynada görerek kas hafızasına alın.'
    ],
    tip: '💡 Yabancılar için en zor Türkçe harfler I, Ü, Ö, Ğ, Ş ve Ç\'dir. Bu harflere özel tekerlemeler (Şu köşe yaz köşesi vb.) çalışmadan Türkçenin akıcılığı kazanılamaz.',
    related: [174, 161]
  },
  {
    id: 176, slug: 'cift-dilli-bilingual-diksiyon', cat: 'aksan', emoji: '🔄', title: 'Çift Dilli (Bilingual) Diksiyon',
    dur: '10 dk', level: 'İleri', freq: 'Gerektiğinde',
    desc: 'Aynı anda hem İngilizce (veya başka bir dil) hem de Türkçeyi anadil seviyesinde kullanan kişilerin iki dilin fonetiğinin birbirine karışmasını engelleme (Cross-Linguistic Influence).',
    benefits: ['Türkçe konuşurken İngilizce R ve L yapma hatasını engeller', 'İki dil arasında anında ve kusursuz "Switch" (Geçiş) yapmayı sağlar', 'Her iki dilin de kendi müzikalitesinde (enternasyon) kalmasını garantiler'],
    mistakes: ['Türkçe cümlenin arasına İngilizce kelime sokarken, o kelimeyi Türkçeleştirerek (veya tam tersi) okumak', 'Türkçe cümlelerin sonunu İngilizce gibi yukarı bükmek (Uptalk)'],
    phrase: '"Bugün meeting çok uzun sürdü."',
    steps: [
      'Dil Kasları Resetleme: İki dil farklı yüz kaslarını kullanır. İngilizceden Türkçeye geçerken yutkunun, dudaklarınızı hafifçe ıslatın ve beyninize "Şimdi ön damağa geçiyoruz" komutu verin.',
      'L Sesleri: İngilizcede "Dark L" (Kalın, gırtlaktan L - Örn: Apple) çok kullanılır. Türkçeye geçtiğinizde L harfini anında dil ucuna (Clear L) taşıyın.',
      'Uptalk Sendromu: İngilizcede cümle sonlarında sesin yukarı kalkması yaygındır. Türkçede nokta olan yerde ses aşağı düşmeli ve bitmelidir.'
    ],
    variations: [
      '🔄 Zikzak Okuma: Bir Türkçe, bir İngilizce cümlenin alt alta olduğu bir metni okuyun. Her satırda dili ve gırtlağı tamamen o dilin formuna sokmaya çalışın.'
    ],
    tip: '💡 İki dilin artikülasyon merkezi farklıdır. İngilizce konuşurken ses daha çok boğazda ve arkada rezonans yapar, Türkçe konuşurken ses dudaklara ve dişlere (maske) çarpar. Bu fiziksel farkı hissetmek kilit noktadır.',
    related: [169, 173]
  },
  {
    id: 177, slug: 'peltek-konusma-duzeltme', cat: 'aksan', emoji: '👅', title: 'Peltek Konuşma Düzeltme (Sigmatizm)',
    dur: '15 dk', level: 'Orta', freq: 'Her gün',
    desc: 'S ve Z harflerini (bazen Ş ve C) söylerken dilin yanlış konumlanması sonucu çıkan "F", "Pelin" veya "Th" (İngilizce The) gibi sesleri düzeltme protokolü.',
    benefits: ['S ve Z harflerindeki ıslık / tıslama sesini netleştirir', 'Peltekliğin özgüven kırıcı etkisini ortadan kaldırır', 'Mikrofonda patlayan (Sibilance) frekansları düzeltir'],
    mistakes: ['S söylerken dil ucunu üst ve alt dişlerin ARASINA sokmak (Dışarı çıkarmak)', 'Dilin yanlarından hava kaçırmak (Lateral Sigmatizm)'],
    phrase: '"Sarı sarı sarmalar."',
    steps: [
      'Fiziksel Kilit: S harfini doğru çıkarmak için alt ve üst dişlerinizi HAFİFÇE birbirine değdirin (kapatın).',
      'Dil Pozisyonu: Dilinizin UCU kesinlikle dışarı çıkmamalıdır. Dil ucunu, alt ön dişlerinizin ARKASINA (köküne) yaslayın.',
      'Oluk Açma: Dilinizin ortasında ince bir oluk/kanal hayal edin. Nefesinizi sadece bu orta kanaldan (dişlerinizin arasından) dışarı ıslık gibi üfleyin.',
      'Heceler: Önce sessizce uzun "Sssssss", sonra "Sa, Se, Sı, Si" heceleriyle çalışın.'
    ],
    variations: [
      '🔄 Çubuk Testi: Dişlerinizin arasına yatay bir şekilde bir kürdan veya kalem koyup hafifçe ısırın. Bu dilinizin dışarı çıkmasını engellerken S çalışması yapmanızı sağlar.'
    ],
    tip: '💡 Pelteklik genelde yapısal bir hastalık değil, çocuklukta yerleşmiş YANLIŞ bir dil konumlandırma alışkanlığıdır (Diş eksikliği vb. yoksa). Ayna karşısında dilin içeride kaldığını gözünüzle görerek kas hafızasını yeniden yazabilirsiniz.',
    related: [141, 161]
  },
  {
    id: 178, slug: 'kekemelik-ve-diksiyon', cat: 'aksan', emoji: '⏱️', title: 'Kekemelik ve Diksiyon Stratejileri',
    dur: 'Bilgi', level: 'İleri', freq: 'Her zaman',
    desc: 'Akıcılık bozukluğu (kekemelik) yaşayan kişilerin, tıbbi bir terapinin yanında uygulayabileceği konuşma hızını, nefesi ve stresi yönetme stratejileri.',
    benefits: ['Kelimelere takılma korkusunu (ankisiyete) azaltır', 'Nefes koordinasyonuyla blokajları çözer', 'Konuşmaya başlamadan önceki kasılmayı engeller'],
    mistakes: ['Kekelediğinde veya takıldığında hızlanarak o kelimeyi çabucak geçmeye çalışmak (Tam tersine yavaşlanmalıdır)', 'Nefesi göğüste tutup (kilitleyip) zorla ses çıkarmaya çalışmak'],
    phrase: null,
    steps: [
      'Yumuşak Başlangıç (Easy Onset): Konuşmaya aniden ve sert bir sesle başlamayın. Önce çok hafif bir nefes (h sesi gibi) verin, kelimeyi nefesin ÜSTÜNE bindirerek yumuşakça girin.',
      'Hız Kesme: Beyniniz kelimeleri ağzınızın üretebileceğinden daha hızlı gönderiyorsa takılırsınız. Konuşma temponuzu bilinçli olarak %50 düşürün. Yavaş konuşmak sizi sıkıcı yapmaz, kontrollü yapar.',
      'Legato (Ulama): Kelimeleri birbirinden koparıp aralarda durarak okumayın. Tüm cümleyi şarkı söylüyormuş gibi tek bir uzun ses akışı halinde birbirine bağlayın.',
      'Nefes Bloku: Takıldığınızı hissettiğiniz an ZORLAMAYIN. Durun, burnunuzdan yeni bir diyafram nefesi alın ve kelimeye tekrar yumuşakça başlayın.'
    ],
    variations: [
      '🔄 Şarkı Söyleme: Kekeleyen insanların şarkı söylerken kekelemediği bilimsel bir gerçektir. Çünkü şarkıda ritim, nefes ve melodi (sağ beyin) devrededir. Konuşurken de cümlenize hafif bir melodi veya ritim katın.'
    ],
    tip: '💡 Diksiyon eğitimi bir kekemelik TEDAVİSİ değildir. Tıbbi teşhisli kekemelik için bir Dil ve Konuşma Terapistine (DKT) başvurulmalıdır. Buradaki egzersizler sadece konuşma konforunu artıran destekleyici araçlardır.',
    related: [157, 149]
  },
  {
    id: 179, slug: 'ses-kisilmasi-rehabilitasyon', cat: 'aksan', emoji: '🩹', title: 'Ses Kaybı Sonrası Rehabilitasyon',
    dur: 'Uzun Süre', level: 'İleri', freq: 'İyileşme süreci',
    desc: 'Larenjit, nodül ameliyatı, covid veya ağır ses travmaları sonrasında kaybolan veya zayıflayan sesi yavaş yavaş yeniden inşa etme (Ses Fizyoterapisi).',
    benefits: ['Ses tellerini yormadan tekrar kas hacmi (kondisyon) kazandırır', 'Hastalık sonrası oluşan "konuşmaktan korkma" psikolojisini kırar', 'Yanlış kompanse (diğer kasları kasarak ses çıkarma) alışkanlıklarını önler'],
    mistakes: ['"Sesim iyileşti mi?" diye test etmek için aniden yüksek sesle bağırıp deneme yapmak', 'Ameliyat sonrası doktor izni olmadan egzersizlere başlamak'],
    phrase: null,
    steps: [
      '1. Evre (Fısıltı Yasak): İyileşme başlarken ASLA fısıldamayın. Sadece çok kısıtlı ve yumuşak tonda konuşun.',
      '2. Evre (Humming): Ağzı kapalı mırıldanma (Mmmmm) egzersizi yapın. Sesin sadece maskede (burun ve dudak) titreştiğini, gırtlağı zorlamadığını hissedin.',
      '3. Evre (Pipet / SOVT): Bir bardağa su doldurun, içine pipet koyun. Pipete üflerken "Uuuuu" diye ses çıkarın. Su baloncuk yaparken ses telinize çok sağlıklı bir masaj yapmış olursunuz (Yarı Kapalı Ses Yolu Egzersizi).',
      '4. Evre (Metin): Yalnızca 2 dakikalık kısa metinleri, yavaş ve bol es vererek, nefesi tüketmeden okuyun.'
    ],
    variations: [
      '🔄 Balon Şişirme: Dudakları güçlendirmek ve nefes kontrolünü geri kazanmak için ses çıkarmadan balon şişirme pratiği yapın.'
    ],
    tip: '💡 Hastalık veya ameliyat sonrası ses telleri tıpkı alçıdan yeni çıkmış bir bacak gibidir. Nasıl ki alçı çıkan bacakla hemen maraton koşulmazsa, sesle de hemen konferans verilmez. Sabır ve hafif egzersiz (SOVT) şarttır.',
    related: [148, 159]
  },
  {
    id: 180, slug: 'yasa-bagli-diksiyon-degisimi', cat: 'aksan', emoji: '⏳', title: 'Yaşa Bağlı Diksiyon (50+ Yaş)',
    dur: 'Sürekli', level: 'Orta', freq: 'Düzenli',
    desc: 'Yaşlanmayla birlikte gelen (Presbifoni) ses tellerinde kas kaybı (atrofi), solunum hacmi düşüşü ve çene kaslarındaki zayıflamaya karşı anti-aging (yaşlanma karşıtı) konuşma egzersizleri.',
    benefits: ['Yaşlılığa bağlı seste titreme, zayıflama ve incelmeyi engeller', 'Nefes darlığı nedeniyle cümleleri yarıda kesme sorununu çözer', '"Yaşlı sesi" imajını geciktirip enerjik ve tok bir ses sağlar'],
    mistakes: ['Ses yorulduğunda yaşa bağlayıp tamamen kabullenmek ve konuşmayı/sosyalleşmeyi azaltmak (Bu kasları daha da eritir)', 'Artan reflüyü görmezden gelmek'],
    phrase: null,
    steps: [
      'Vokal Spor: Ses telleri de kastır. Kaslar kullanılmazsa erir (Atrofi). 50 yaşından sonra günde en az 15 dakika yüksek sesle kitap okumak, ses telinin sporudur.',
      'Direnç Egzersizi: İki elinizle bir sandalyeyi veya masayı yukarı doğru kaldırmaya çalışırken (ıkınma hareketi) sertçe "Aaaaa" deyin. Bu hareket gevşeyen ses tellerini birbirine sıkıca yaklaştırır ve güçlendirir.',
      'Diyafram Kondisyonu: Yaşla birlikte akciğer kapasitesi düşer. Her sabah 10 dakika derin diyafram nefesi alıp tıslayarak (Ssss) verme çalışması akciğeri genç tutar.',
      'Su Tüketimi: Yaşlandıkça vücudun su oranı düşer ve susama hissi körelir. Susamasanız bile zorla su içerek ses teli mukozasını (kayganlığını) korumalısınız.'
    ],
    variations: [
      '🔄 Koro/Şarkı: Sesi genç tutmanın en keyifli yolu bir koroya katılmak veya evde sevdiğiniz şarkılara yüksek sesle eşlik etmektir. Şarkı söylemek muazzam bir anti-aging terapisidir.'
    ],
    tip: '💡 Presbifoni (yaşlılığa bağlı ses değişimi) kaçınılmazdır ancak hızı YAVAŞLATILABİLİR. Tıpkı 70 yaşında düzenli spor yapan birinin 50 yaşında görünmesi gibi, düzenli ses ve diksiyon egzersizi yapan birinin sesi de yıllarca genç ve tok kalır.',
    related: [142, 141]
  }
];

let appjs = fs.readFileSync('public/app.js', 'utf8');
let datajs = fs.readFileSync('diksiyon-data.js', 'utf8');

const newObjectsStr = aksanExercises.map(ex => JSON.stringify(ex, null, 2)).join(',\n') + '\n';

// Replace the array ending
appjs = appjs.replace(/\s*\];\s*$/, ',\n' + newObjectsStr + '];\n');
fs.writeFileSync('public/app.js', appjs, 'utf8');

datajs = datajs.replace(/\s*\];\s*$/, ',\n' + newObjectsStr + '];\n');
fs.writeFileSync('diksiyon-data.js', datajs, 'utf8');

console.log('20 items for Aksanlar ve Lehçeler injected successfully.');
