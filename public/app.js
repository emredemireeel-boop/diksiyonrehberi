// ============================================================
//  DİKSİYON REHBERİ — APP.JS v3
//  Ultra-Detailed Exercises | Premium Experience
// ============================================================

// ── DATA ─────────────────────────────────────────────────── //
const EXERCISES = [

  // ═══════════════════════════════════════════════════════════
  //  💨 NEFES KATEGORİSİ
  // ═══════════════════════════════════════════════════════════

  {
    id: 1, cat: 'nefes', emoji: '💨', title: 'Diyafram Nefesi',
    dur: '5 dk', level: 'Başlangıç', freq: 'Her gün',
    desc: 'Diyafram kasını aktive ederek uzun ve kontrollü nefes alıp vermeyi öğreten temel egzersiz. Ses çalışmalarının mutlak temelidir — bu olmadan diğer tüm teknikler sınırlı kalır. Profesyonel ses sanatçılarının ilk öğrendiği ve ömür boyu uyguladığı egzersizdir.',
    benefits: ['Ses gücünü önemli ölçüde artırır', 'Uzun cümleleri tek nefeste söyleme kapasitesi kazandırır', 'Konuşma yorgunluğunu azaltır', 'Stres ve kaygıyı düşürür', 'Konsantrasyon ve odağı artırır'],
    mistakes: ['Göğüs nefesi almak (karın yerine göğüs şişiyor)', 'Nefes verişi sırasında hızlı bırakmak', 'Omuzları kaldırmak', 'Kasılmış çene veya boğazla çalışmak'],
    phrase: null,
    steps: [
      'Sırt düz, omuzlar tamamen gevşek biçimde oturun ya da ayakta durun. Çeneyi hafifçe aşağı indirin.',
      'Bir elinizi karnınızın göbek deliğinin hemen altına, diğerini göğsünüze koyun.',
      'Burnunuzdan yavaş ve derin bir nefes alın — 4 saniye sürdürün. Karnınızın ellerinizi dışarı ittiğini hissedeceksiniz. Göğsünüzdeki el neredeyse hareketsiz kalmalı.',
      'Nefesinizi 2 saniye tutun. Bu an kasların çalıştığı andır.',
      'Dudaklarınızı hafifçe açın, ağzınızdan 6–8 saniye boyunca kontrollü ve yavaş nefes verin. Karın içeri çekilmeli.',
      'Karın kaslarının aktif olduğunu hissedin — sanki birisi karnınızı içeri çekiyor gibi.',
      'Döngü: 4 sn nefes al → 2 sn tut → 6–8 sn ver. Bu döngüyü 8–10 kez art arda tekrarlayın.',
      'İlk hafta: 4-2-4 döngüsü. İkinci hafta: 4-4-6. Üçüncü hafta: 4-4-8 hedefleyin.'
    ],
    variations: [
      '🔄 Yavaş Varyasyon: 4-2-8 döngüsü — veriş süresini uzatın',
      '🔄 Hızlı Varyasyon: 2-1-4 döngüsü — tempo artışı için',
      '🔄 Ses ile: Nefes verirken "sss", "fff", "vvv" sesleri ekleyin'
    ],
    tip: '💡 Karın şişerken göğsünüz neredeyse hareketsiz kalmalıdır. Bu doğru diyafram nefesinin işaretidir. İlk haftalarda kısa döngülerle başlayın. Sabah yatakta bile yapabilirsiniz — ayağa kalkmadan önce 5 döngü!',
    related: [2, 3, 5]
  },

  {
    id: 2, cat: 'nefes', emoji: '🌬️', title: 'Nefes Kontrol ve Uzatma',
    dur: '5 dk', level: 'Orta', freq: 'Gün aşırı',
    desc: 'Bir nefes alışında ne kadar süre ses üretebileceğinizi ölçen ve artıran temel egzersiz. Konuşmacıların, haber spikerlerinin ve ses sanatçılarının vazgeçemeyeceği bir tekniktir. Uzun cümleleri nefes almadan tamamlamak için kritik bir zemin oluşturur.',
    benefits: ['Nefes kapasitesini ölçülür şekilde artırır', 'Ses tutarlılığını geliştirir', 'Titreyen veya kesilip duran sesi düzeltir', 'Mikrofon sesini daha akıcı kılar', 'Paragrafları nefessiz okuma yeteneği kazandırır'],
    mistakes: ['Sesi çok hızlı başlatmak', 'Nefes bitmeden sesi bırakmak zorunda kalmak', 'Gergin boğazla çalışmak', 'Sesin başı yüksek sonu düşük olmak'],
    phrase: null,
    steps: [
      'Diyafram nefesi alın — tam ve derin. Karnınız tamamen şişmeli.',
      '"Ssss" sesi çıkararak nefesinizi yavaş ve dengeli şekilde bırakın. Kronometre başlatın.',
      'Ses baştan sona aynı güçte olmalı — başlangıçta kaç saniye tutabildiğinizi not edin.',
      'Dinlenin, 3 saniye bekleyin. Tekrar nefes alın, bu kez "Ffff" sesiyle bırakın.',
      '"Vvvv" sesiyle deneyin — bu ses titreşimlidir, daha çok enerji gerektirir.',
      '"Zzzz" sesiyle deneyin — bu ses hem ünsüz hem ünlü rezonansını çalıştırır.',
      'Tüm sesleri 3\'er tekrar yapın. Hedef: her birini 15+ saniye tutabilmek.',
      'Son olarak bir cümleyi tek nefeste söyleyin: "Türkçe diksiyon çalışmak sabır ve düzenli pratik gerektirir."'
    ],
    variations: [
      '🔄 Ölçüm Varyasyonu: Kronometre ile kayıt alın, haftalık ilerlemeyi takip edin',
      '🔄 Notalar ile: Bir nota tutarken sesin titremeden kaç saniye sürebiltiğini ölçün',
      '🔄 Cümle Varyasyonu: Giderek uzayan cümleleri tek nefeste tamamlamayı deneyin'
    ],
    tip: '💡 Sesin tonu ve gücü boyunca sabit kalması hedeflenir. İlk denemede 8–10 saniye normal; 3 haftada 20+ saniyeye ulaşabilirsiniz. Günlük çalışıldığında sonuçlar şaşırtıcı olur.',
    related: [1, 4, 5]
  },

  {
    id: 3, cat: 'nefes', emoji: '🧘', title: 'Ritmik Nefes ile Konuşma',
    dur: '4 dk', level: 'Başlangıç', freq: 'Her gün',
    desc: 'Konuşma ritmini nefes alışla eşleştirerek doğal ve akıcı bir konuşma kalıbı oluşturan egzersiz. Pek çok insan nefes almayı cümle ortasında yapar — bu hem tuhaf görünür hem dinleyiciyi yorar. Bu egzersiz, doğru nefes noktalarını içselleştirmenizi sağlar.',
    benefits: ['Konuşma akışını düzenler', 'Cümle ortasında nefes alma alışkanlığını giderir', 'Uzun monologlar için temel kapasiteyi artırır', 'Dinleyiciyi daha az yorar', 'Sunum ve toplantı konuşmasını profesyonelleştirir'],
    mistakes: ['Virgül veya nokta gözetmeksizin rastgele nefes almak', 'Her kelime sonrasında nefes almak', 'Nefes alırken çok belirgin ses çıkarmak', 'Cümle bitmeden nefes almak zorunda kalmak'],
    phrase: '"Merhaba, / bugün çok önemli / bir konudan bahsedeceğiz. / Hazır mısınız?"',
    steps: [
      'Oturma pozisyonunda düz sırt. Omuzları gevşetin.',
      'Sayım pratiği: 4 adımda nefes al, 2 adımda tut, 4 adımda ver. 3 kez tekrarlayın.',
      '"/" işaretli cümleyi inceleyin: her "/" anlamsal bir duraklama ve nefes noktasıdır.',
      'Cümleyi "/" noktalarında durarak okuyun. Her durumda hızlıca diyafram nefesi alın.',
      '"Bugün size çok önemli bir konu anlatacağım. Bu konuyu uzun süredir araştırdım ve sonuçlar gerçekten çarpıcı." — Nerelerde nefes alacağınızı işaretleyin.',
      'İşaretlediğiniz cümleyi 3 kez okuyun. Her okuyuşta nefes almak için daha az zaman harcandığını fark edeceksiniz.',
      'Farklı uzunlukta cümleler deneyin: kısa, orta, uzun.',
      'Son turda gözlerinizi kapatarak, sadece hissedin.'
    ],
    variations: [
      '🔄 Şiir Varyasyonu: Bir şiiri satır sonlarında nefes alarak okuyun',
      '🔄 Haber Varyasyonu: TRT haber metnini doğal nefes noktalarında okuyun',
      '🔄 Monolog Varyasyonu: 1 dakikalık kendi konuşmanızı planlı nefes noktalarıyla yapın'
    ],
    tip: '💡 Nefes noktaları anlam birimlerinin sınırlarında olmalı. "Ben / bugün / sizi" değil, "Ben bugün / sizi davet ediyorum." şeklinde düşünün. Her duraklama bir anlam tamamlamalı.',
    related: [1, 2, 22]
  },

  {
    id: 4, cat: 'nefes', emoji: '🫁', title: 'Akciğer Kapasitesi Artırma',
    dur: '6 dk', level: 'İleri', freq: 'Haftada 3–4 kez',
    desc: 'Akciğer kapasitesini zorlayan ve ses yayılımını (projeksiyonunu) iyileştiren ileri düzey egzersiz. Opera şarkıcıları ve sesleriyle geniş alanlara hitap eden eğitimciler bu teknikle yıllar içinde ciddi kapasite artışı elde eder. Düzenli uygulamayla 4–6 hafta içinde belirgin gelişim gözlemlenir.',
    benefits: ['Akciğer kapasitesini ölçülebilir artırır', 'Ses güçlü ve yorulmadan geniş alanlara ulaşır', 'Diyafram kasını güçlendirir', 'Uzun paragrafları rahatlıkla tamamlar', 'Boğaz ve ses teli yorgunluğunu azaltır'],
    mistakes: ['Aşırıya kaçmak (baş dönmesi görmezden gelmek)', 'Hızlı nefes alıp vermek (hiperventilasyon riski)', 'Her gün yapmak (dinlenme vermeyi ihmal etmek)', 'Omuzları kaldırarak nefes almak'],
    phrase: null,
    steps: [
      'Ayakta, ayaklar omuz genişliğinde. Eller belde, bel dik.',
      'Burnunuzdan 6–8 saniye boyunca maksimum nefes alın. Karın tam şişmeli.',
      'Dolu akciğerle 6 saniye bekleyin. Bu an kasların gerildiğini hissedin.',
      '"Ha ha ha" (3 hece) çıkararak nefesin bir kısmını bırakın. Dur.',
      'Tekrar "ha ha ha" ile devam edin. Dur.',
      'Tüm hava bitene kadar bu döngüyü sürdürün.',
      '3 tam dakika dinlenin. Başınız dönüyorsa oturun.',
      '3 set yapın. Her sette tutma süresini 1 saniye artırmaya çalışın.'
    ],
    variations: [
      '🔄 Sayı Varyasyonu: "Ha" yerine 1-2-3-4-5 sayarak bırakın',
      '🔄 Metin Varyasyonu: Bırakarken bir cümle söyleyin: her "ha" yerine bir kelime',
      '🔄 Hafif Varyasyon: Tutma süresini 2 saniyeyle başlatıp haftalık 1 sn artırın'
    ],
    tip: '💡 DİKKAT: Baş dönmesi yaşarsanız hemen oturun ve normal nefes alın. Bu egzersiz yoğundur. Başlangıçta 3 sn tutmayla başlayın, kademeli artırın. Hiçbir zaman aç karnına yapmayın.',
    related: [1, 2, 5]
  },

  {
    id: 5, cat: 'nefes', emoji: '🎯', title: 'Ses Projeksiyonu',
    dur: '5 dk', level: 'Orta', freq: 'Haftada 3 kez',
    desc: 'Sesinizi belirli bir noktaya veya mesafeye "atmayı" öğreten teknik. Mikrofonsuz konuşan öğretmenler, aktörler ve politikacıların temel becerisidir. Ses güçlü görünse de boğaza baskı yapılmadan, tamamen diyafram desteğiyle gerçekleşir.',
    benefits: ['Mikrofonsuz büyük alanlarda duyulabilirlik', 'Boğaz yorgunluğunu dramatik şekilde azaltır', 'Sesin netliği ve tınısı artar', 'Güçlü ve otoriter bir izlenim yaratır', 'Boğaz gerginliği kaybolur'],
    mistakes: ['Sesi "itmek" ve boğazı zorlamak', 'Sesin sadece ağızdan çıktığını düşünmek', 'Omuz veya boyun kaslarını germek', 'Diyafram desteği olmadan konuşmak'],
    phrase: '"Merhaba! Bugün burada olmaktan büyük mutluluk duyuyorum!"',
    steps: [
      'Karşınızda 2 metre uzakta bir nokta belirleyin (duvar üzerinde küçük bir çıkıntı, bir nesne vb.).',
      'Sesinizin o noktadan çıktığını hayal edin — sanki sesiniz orada doğuyor.',
      '"Merhaba!" kelimesini normal sesle o noktaya "gönderin". Boğaz gergin kalmamalı.',
      'Aynı cümleyi 3 metre uzaktaki bir noktaya söyleyin — ses biraz daha güçlenmeli.',
      '4 metreden söyleyin. 6 metreden söyleyin.',
      'Şimdi bir monolog: "Arkadaşlar, bu sabah size önemli bir şey anlatmak istiyorum." — oda içinde en uzak noktaya söyleyin.',
      'Ses yükseltilirken tonlama ve netlik kaybolmadığını kontrol edin.',
      'Son tur: Gözlerinizi kapatın ve sesinizi dışarıya "uzayın derinliklerine" gönderin.'
    ],
    variations: [
      '🔄 Dışarıda Varyasyon: Açık alanda 10–20 metreye söyleyin',
      '🔄 Fısıltı Varyasyonu: Fısıltıyla başlayın, kademeli artırın',
      '🔄 Metin Varyasyonu: Bir şiiri her kıtasında biraz daha uzağa söyleyin'
    ],
    tip: '💡 "İtme" değil "gönderme" hissi kritiktir. Sesinizi oda duvarının ardına gönderdiğinizi hayal edin. Bu mental model, boğaz gerginliğini otomatik olarak azaltır.',
    related: [1, 4, 13]
  },

  {
    id: 6, cat: 'nefes', emoji: '🌊', title: 'Dalga Nefes Meditasyonu',
    dur: '7 dk', level: 'Orta', freq: 'Her gün sabah',
    desc: 'Nefes ve deniz dalgasını zihinsel olarak birleştiren meditasyon temelli egzersiz. Sahne korkusu, mikrofon anksiyetesi veya önemli sunumlar öncesinde hem zihni hem de sesi hazırlamak için son derece etkilidir. Sanatçıların ve spikerlerinin gün başlangıcında kullandığı teknik.',
    benefits: ['Konuşma öncesi kaygıyı azaltır', 'Nefes ritmini düzenler', 'Zihni "gürültüden" temizler', 'Ses tellerini nazikçe ısıtır', 'Dinleme becerisini geliştiren derin farkındalık yaratır'],
    mistakes: ['Sonucu "zorlamaya" çalışmak', 'Dikkat dağınıklığına rağmen devam etmek', 'Çok hızlı tempo seçmek', 'Egzersizi atlayıp sonuç aramak'],
    phrase: null,
    steps: [
      'Rahat bir sandalyede oturun. Ayaklar yerde düz, eller dizlerde avuç içi yukarı.',
      'Gözlerinizi kapatın. Omuzlarınızı 3 kez kaldırıp bırakın — tamamen gevşeyin.',
      'Zihinsel olarak bir kıyıya gidin. Dalgaların sesini hayal edin.',
      'Nefes alırken: dalga kıyıya yaklaşıyor — yavaş, büyüyor, gelişiyor. 5 saniye.',
      'Nefes tutarken: dalga en tepesinde — sessiz, güçlü, tam. 2 saniye.',
      'Nefes verirken: dalga geri çekiliyor — yavaş, tamamlanmış, dingin. 7 saniye.',
      'Bu döngüyü 7 dakika boyunca sürdürün. Düşünceler gelirse dalga metaforuna dönün.',
      'Egzersiz bittikten sonra 30 saniye sessizce oturun. Sonra tek bir cümle söyleyin — sesin farkını hissedin.'
    ],
    variations: [
      '🔄 Sabah Varyasyonu: Yataktan kalkmadan önce 5 döngü yapın',
      '🔄 Hızlı Varyasyon: 3-1-5 döngüsü — sunum öncesi 3 dakika',
      '🔄 Toplu Varyasyon: Bir grupta lider olarak herkesin nefesini senkronize edin'
    ],
    tip: '💡 Bu teknik sahne öncesi aşırı heyecan için de çok etkilidir. Sunum salonuna girmeden 5 dakika önce bir köşede sessizce uygulamak, performansı belirgin şekilde iyileştirir.',
    related: [1, 3, 27]
  },

  // ═══════════════════════════════════════════════════════════
  //  🔤 TEKERLEME KATEGORİSİ
  // ═══════════════════════════════════════════════════════════

  {
    id: 7, cat: 'tekerleme', emoji: '🅱️', title: 'Berber Tekerlemesi',
    dur: '5 dk', level: 'Başlangıç', freq: 'Her gün',
    desc: 'Türkçe diksiyon çalışmalarının simgesi haline gelmiş klasik bir tekerleme. B ve R seslerini birleştiren bu cümle, hızlı konuşmada en sık karıştırılan ses çiftlerini doğrudan hedef alır. Aktörler, spikerler ve sunucular sabah ısınmalarında bu tekerlemeden vazgeçmez.',
    benefits: ['B ve R seslerinin netliğini artırır', 'Hızlı konuşmada ses ayrışımını güçlendirir', 'Dudak ve dil koordinasyonunu geliştirir', 'Konuşma hızını artırır', 'Diksiyon genelini iyileştirir'],
    mistakes: ['İlk turda çok hızlı okumaya çalışmak', 'Hata yaptığında durmadan devam etmek', 'B ve R seslerini birbirine karıştırmak', 'Kayıt almadan çalışmak'],
    phrase: '"Bir berber bir berbere gel beraber bir berber dükkanı açalım demiş."',
    steps: [
      'Metni önce sessizce okuyun ve her kelimenin anlamını kavrayın.',
      'İlk tur — çok yavaş: Her heceyi tek tek, abartılı şekilde söyleyin. "Biiir — ber-ber — biir — ber-be-re..."',
      'İkinci tur — yavaş: Normal heycan ama yine de dikkatli. Her "B" sesi net, her "R" sesi titreşimli olmalı.',
      'Üçüncü tur — orta hız: Artık kelimeleri birleştirin ama netliği koruyun.',
      'Dördüncü tur — hız: Maksimum hıza ulaşmaya çalışın. Hata yapıyorsanız bir önceki hıza dönün.',
      'Beşinci tur — tek nefes: Tüm cümleyi tek bir nefeste, net ve hızlı söyleyin.',
      'Kendinizi kaydedin ve dinleyin. "B" sesleri net mi? "R" sesleri titreşimli mi?',
      'Her gün ölçün: bu cümleyi net söyleyebildiğiniz maksimum hız sizin "baz çizginiz"dir.'
    ],
    variations: [
      '🔄 Uzun Varyasyon: "Bir berber bir berbere gel beraber bir berber dükkanı açalım demiş, berber de berbere bak beraber berber olmak bereketlidir demiş." (uzun)',
      '🔄 Ses ile: Cümleyi yüksek, orta ve alçak ses perdelerinde söyleyin',
      '🔄 Ritimle: Her "Bir" kelimesinde dizinize vurun, ritim hissi edinin'
    ],
    tip: '💡 Hata yaptığınızda geri dönün ve yavaşlayın. Yanlış hızda tekrar etmek alışkanlığı pekiştirir. Doğru ve net telaffuz, hızdan her zaman önce gelir. Bir haftada hızınız ikiye katlanabilir!',
    related: [8, 9, 12]
  },

  {
    id: 8, cat: 'tekerleme', emoji: '🔠', title: 'S ve Ş Tekerlemesi',
    dur: '4 dk', level: 'Orta', freq: 'Haftada 4 kez',
    desc: '"S" (ince, sürtünmeli) ve "Ş" (ön damak, yumuşak) seslerinin net ayrışımını sağlayan egzersiz. Bu iki ses Türkçe\'de çok sık kullanılır ve pek çok kişi hızlı konuşurken birleştirme hatası yapar. Haber spikerleri bu egzersizi özellikle stüdyo girişinden önce yapar.',
    benefits: ['S ve Ş arasındaki farkı otomatikleştirir', 'Ön diş ve dil koordinasyonunu güçlendirir', 'Hızlı konuşmada ses netliğini artırır', 'Aksanlı konuşmayı düzeltmeye yardımcı olur', 'Dinleyicide "net, anlaşılır" izlenimi yaratır'],
    mistakes: ['İki sesi de "S gibi" söylemek', 'Dil pozisyonuna dikkat etmemek', 'Çok hızlı başlayıp hataları görmezden gelmek', 'Ayna kullanmamak'],
    phrase: '"Şişe şişe, bu şişe mi o şişe mi? Şu şişede şu şişeden daha az şarap var mı?"',
    steps: [
      'DİL POZİSYONU: "S" sesi için dil ucunu alt dişlerin hemen arkasına yerleştirin. "Ş" sesi için dil ucunu biraz geri, ön damağa yakın tutun.',
      'Ayna önüne geçin. Sadece "S — Ş — S — Ş" alışması yapın. 20 kez.',
      'Tekerlemeda geçen şişe kelimesini tek tek: "Şi-şe" — "Ş" sesi önce, "Ş" sesi tekrar.',
      'Cümleyi çok yavaş okuyun: Her "Ş" sesinde dil arkada, her "S" sesinde dil önde olsun.',
      'Orta hızda okuyun. Yanlış olan hecelerin altını zihinsel olarak çizin.',
      'Hızınızı artırın — ama ayna kontrolünü bırakmayın.',
      'Kayıt alın ve dinleyin: iki ses net mi ayrılıyor?',
      'Bonus: "Şişede su var. Su mu şişede, şişe mi suda?" cümlesini de ekleyin.'
    ],
    variations: [
      '🔄 Minimal Varyasyon: Sadece "şişe şişe" tekrarlayın, hızlandırın',
      '🔄 Kelimeleri Listeleyin: S ile başlayan ve Ş ile başlayan 10\'ar kelime söyleyin',
      '🔄 Cümle Kurma: S ve Ş seslerini dengeli kullanan özgün cümleler kurun'
    ],
    tip: '💡 Ayna kullanmak bu egzersizde kritik öneme sahiptir. Yanlış bir dil alışkanlığı varsa ancak görerek düzeltilebilir. İlk haftada yavaş ve doğru, ikinci haftada hızlı ve doğru hedefleyin.',
    related: [7, 9, 18]
  },

  {
    id: 9, cat: 'tekerleme', emoji: '🌸', title: 'L ve R Tekerlemesi',
    dur: '4 dk', level: 'Başlangıç', freq: 'Her gün',
    desc: 'L ve R seslerinin net ve birbirinden ayrışık telaffuzunu kazandıran egzersiz. Türkçe\'de bu iki ses farklı dil pozisyonu gerektirir; hızlı konuşulduğunda sıkça karışır. Yabancı dil aksanlı konuşanlar için de çok faydalı bir egzersizdir.',
    benefits: ['L ve R ayrışımını pekiştirir', 'Dil kaslarını güçlendirir', 'Konuşma akışını hızlandırır', 'Çocuk dil terapisinde de kullanılan temel egzersiz', 'Yabancı dil aksanını azaltır'],
    mistakes: ['R sesini İngilizce gibi söylemek (Türkçe R titreşimlidir)', 'L sesinde dilin damağa değmediği durumlar', 'Karıştırma hatalarını fark etmemek'],
    phrase: '"Lale lalesi lila renginde lalelere benziyordu, lale tarlalarında lavanta rengi rüzgar esiyordu."',
    steps: [
      'DİL POZİSYONU: "L" için dil ucunu üst ön dişlerin hemen arkasındaki damağa değdirin. "R" için dil ucunu biraz geriye alın ve hafifçe titreştirin.',
      'Tek ses çalışması: "La-la-la-la" — dil her "L"de damağa değmeli.',
      'Tek ses çalışması: "Ra-ra-ra-ra" — dil geriye, hafifçe titreşimli.',
      'Dönüşümlü: "La-ra-la-ra-la-ra" — 20 kez, hızlanın.',
      'Tekerlemede "La-le" ile başlayan kelimeleri tek tek sesleyin.',
      'Tüm cümleyi yavaş okuyun — her L ve R net olmalı.',
      'Orta hızda okuyun. Hangi noktada karıştığınızı tespit edin.',
      'Problematik bölümü izole edip ayrı çalışın, sonra tekrar birleştirin.'
    ],
    variations: [
      '🔄 Minimal: "Lale-Rüzgar-Lale-Rüzgar" dönüşümü yapın',
      '🔄 Cümle: "Lara laleden laleler alırdı, Lara\'nın lale bahçesi..." gibi kendi cümlelerinizi oluşturun',
      '🔄 Şiir: L ve R sesleri ağırlıklı şiirleri yüksek sesle okuyun'
    ],
    tip: '💡 Türkçe "R" sesi İngilizce R\'dan tamamen farklıdır — titreşimlidir, dil geri çekilerek değil titreşerek çıkarılır. "Rr" sesini bulmak için "drr" ile başlayın. Birkaç denemede bulursunuz.',
    related: [7, 10, 18]
  },

  {
    id: 10, cat: 'tekerleme', emoji: '⚡', title: 'K ve G Tekerlemesi',
    dur: '4 dk', level: 'Orta', freq: 'Haftada 3 kez',
    desc: '"K" ve "G" seslerinin net ve ayrışık telaffuzunu sağlayan egzersiz. Bu iki ses aynı pozisyondan gelir: dil arkasının yumuşak damağa değmesiyle oluşur — fark yalnızca titreşimdir. Hızlı konuşurken bu ayrımı kaybetmek çok yaygındır.',
    benefits: ['K-G ayrışımını otomatikleştirir', 'Dil arkası kaslarını güçlendirir', 'Arka ünlü telaffuzunu iyileştirir', 'Özellikle "güzel", "gece", "koca" gibi yaygın kelimelerde netlik sağlar'],
    mistakes: ['Her ikisini de "G gibi" söylemek (en yaygın hata)', '"K" sesini çok sert ya da "G" sesini çok zayıf çıkarmak', 'Arka dil hareketini ihmal etmek'],
    phrase: '"Koca kara karga köyde koca bir kazaya yol açmış, köylüler karga kargacı diye kah kah gülelmiş."',
    steps: [
      'DİL POZİSYONU: Dil arkasını yumuşak damağa (ağzın arka tarafı) değdirin. "K" için havalı ve sessiz; "G" için sesli ve titreşimli bırakın.',
      'Elinizi boğazınıza koyun: "K" söylediğinizde titreşim yok; "G" söylediğinizde titreşim var.',
      '"Ka-Ga-Ka-Ga" dizisini 30 kez tekrarlayın. Önce yavaş, sonra hızlandırın.',
      'Tekerlemedeki kelimeleri tek tek sesleyin: "ko-ca" "ka-ra" "kar-ga" "ka-za".',
      'Tüm cümleyi yavaş okuyun.',
      'Hızınızı artırın, her tur netliği kontrol edin.',
      'Kayıt alın — K ve G sesleri spektrumda birbirinden ayrılıyor mu?'
    ],
    variations: [
      '🔄 Minimal: "Ka-ga-ko-go-ku-gu" dizisini hızlandırın',
      '🔄 Cümle inşa: "Kar, kaya, kazma, kürek, gece, gün, güneş..." kelime kümelerini sıralayın',
      '🔄 Ayna: Ağız açılışını izleyin — K ve G seslerinde farklılık görülmeli'
    ],
    tip: '💡 K ve G sesleri aynı dil pozisyonundan gelir, fark sadece titreşimdir. Elinizi boğazınıza koyarak fiziksel farkı hissedebilirsiniz — K\'da titreşim yok, G\'de var.',
    related: [7, 8, 18]
  },

  {
    id: 11, cat: 'tekerleme', emoji: '💥', title: 'P ve B Tekerlemesi',
    dur: '4 dk', level: 'Orta', freq: 'Haftada 3 kez',
    desc: 'Dudak ünsüzleri P ve B\'nin netliğini artıran tekerleme egzersizi. Bu iki ses için dudaklar tam kapanır ve açılır — fark yalnızca titreşimdir (B titreşimli, P değil). Hızlı konuşmada bu patlayıcı sesler sıkça yumuşar ve kaybolur.',
    benefits: ['P ve B\'nin patlayıcı netliğini artırır', 'Dudak kaslarını güçlendirir', 'Konuşmada "enerji" hissi yaratır', 'Özellikle "patlak" ve "mat" konuşma sorunlarını giderir'],
    mistakes: ['Dudakları tam kapatmamak (sesler yarım çıkar)', 'B ve P yi aynı şekilde söylemek', 'Yüz kaslarını gereğinden fazla germek'],
    phrase: '"Pıtır pıtır patlayan patlamış mısırlar pazar yerlerinde satılır, pembemsi pul pul patlatılır."',
    steps: [
      'DİL/DUDAK POZİSYONU: Dudaklar tam kapanmalı. "P" için hava birikiyor, pat diye bırakılıyor. "B" için sesli titreşimle bırakılıyor.',
      'Elinizi ağzınızın önüne tutun: "P" sesinde hava hissedeceksiniz; "B" sesinde çok az.',
      '"Pa-Ba-Pa-Ba" 30 kez tekrarlayın. Önce yavaş, hızlandırın.',
      '"Pi-Bi-Pe-Be-Po-Bo-Pu-Bu" tam diziyi söyleyin.',
      'Tekerlemedeki "P" seslerini tek tek abartılı söyleyin.',
      'Tüm cümleyi yavaştan hıza doğru okuyun.',
      'Kayıt alın ve dinleyin. Her "P" net patlıyor mu?'
    ],
    variations: [
      '🔄 Minimal: Sadece "patan-batan-patan-batan" tekrar edin',
      '🔄 Mektup Okuma: P ve B ağırlıklı bir gazete paragrafı sesle okuyun',
      '🔄 Konuşma: "Pek, belki, prova, bazen, para, borç..." kelimelerini sıralayın'
    ],
    tip: '💡 P ve B sesleri birbirine çok yakın — hızlı konuşurken P, B gibi duyulabilir ya da tam tersi. Fiziksel olarak hissedebilmek için elinizi ağzınızın önüne tutun ve P sesinde havayı itin.',
    related: [7, 8, 18]
  },

  {
    id: 12, cat: 'tekerleme', emoji: '🌀', title: 'Karma Tekerleme Maratonu',
    dur: '8 dk', level: 'İleri', freq: 'Haftada 2 kez',
    desc: 'Birden fazla ünsüz grubunu aynı anda çalıştıran zorlu bir tekerleme maratonu. Tüm öğrenilen tekniklerin birleştiği yerdir. İleri düzey diksiyon çalışanlar için bu egzersiz "final sınavı" niteliğindedir. Düzenli yapılması tüm kategori becerilerini üst seviyeye taşır.',
    benefits: ['Tüm ünsüzleri bir arada çalıştırır', 'Hız ve netliği eş zamanlı pekiştirir', 'Konuşma dayanıklılığını artırır', 'Farklı ses geçişlerini otomatikleştirir', 'Diksiyon çalışmalarının "zirvesini" oluşturur'],
    mistakes: ['Henüz temel teknikler yerleşmeden bu egzersizi yapmak', 'Hata farkında olmadan devam etmek', 'Kayıt almayı ihmal etmek'],
    phrase: '"Şişeden şişe şişeye şişirir, berber berbere beraber berber berberin berberi bereketli berber demiş."',
    steps: [
      'HAZIRLIK: Önce ısınma yapın. 2 dk Berber Tekerlemesi + 1 dk S-Ş çalışması.',
      'Karma tekerlemedeki tüm sesler: Ş-S (şişe), B-R (berber), şimdi hepsini görün.',
      'İlk tur — çok yavaş: Her kelimeyi heceleyerek okuyun. "Şi-şe-den — şi-şe-ye..."',
      'İkinci tur — yavaş: Kelimeler birleşiyor ama hâlâ dikkatli.',
      'Üçüncü tur — orta: Problematik noktaları tespit edin.',
      'Dördüncü tur — hız: Maksimuma çıkın. İlk hatayı yaptığınız notu alın.',
      'Beşinci tur — son: Gözleri kapalı, sadece sesi hissedin.',
      'Kayıt dinleyin: hangi ses en zayıf? O sesi izole edin ve ayrıca çalışın.'
    ],
    variations: [
      '🔄 Kısa Varyasyon: Sadece "Bir berber bir berbere şişe şişirir" ile başlayın',
      '🔄 Melodi: Bir ritim üzerine tekerlemeleri söyleyin',
      '🔄 Zaman Yarışı: Her gün kronometre ile en yüksek başarılı turu kaydedin'
    ],
    tip: '💡 Bu egzersizi günde bir kez yapmak, 3 hafta içinde konuşma hızınızı belirgin şekilde artırır. Ancak hız, netlikten önce gelmemelidir. Yavaş ve doğru > hızlı ve yanlış.',
    related: [7, 8, 9, 10, 11]
  },

  // ═══════════════════════════════════════════════════════════
  //  🔊 SES KATEGORİSİ
  // ═══════════════════════════════════════════════════════════

  {
    id: 13, cat: 'ses', emoji: '🔊', title: 'Ses Teli Isıtma Rutini',
    dur: '5 dk', level: 'Başlangıç', freq: 'Her gün sabah',
    desc: 'Konuşmadan veya herhangi bir ses çalışmasından önce ses tellerini nazikçe ısıtan vazgeçilmez bir rutin. Soğuk ses telleri, zorlanmaya karşı daha hassastır ve uzun vadede zarar görebilir. Bu rutin, bir atlet için ısınma koşusu ne ise, konuşmacı için o kadar kritiktir.',
    benefits: ['Ses kısıklığı riskini önemli ölçüde azaltır', 'İlk konuşulan cümlelerin net çıkmasını sağlar', 'Ses tellerinin esnekliğini artırır', 'Sabah "boğazda düğüm" hissini giderir', 'Uzun vadeli ses sağlığını korur'],
    mistakes: ['Isınmadan yüksek sesle konuşmaya başlamak', 'Çok güçlü seslerle ısınmaya çalışmak (zararlı)', 'Ağrı varken ısınmak (bu durumda dinlenin)', 'Ağzı açarak ısınmak (ilk aşamada kapalı olmalı)'],
    phrase: null,
    steps: [
      'Ağzı kapalı tutun. Dudakları hafifçe birleştirin. Yumuşak bir "Mmm" sesi çıkarın — 30 saniye. Dudaklarda titreşim hissetmeli.',
      'Dudaklarınızı titreştirerek "Brrr" sesi yapın (at koştuğunda çıkardığı ses gibi). 30 saniye. Ses telleri masaj görüyor.',
      '"Hmm" sesi: yüksek perden alçağa glide yapın — sanki "anlaşıldı" veya "hmm, düşüneyim" diyorsunuz. 5 kez.',
      'Şimdi ağzı açın: "Aaa" sesini çok yumuşak çıkarın — 5 saniye tutun, 3 kez.',
      '"E-İ-A-O-U" seslilerini sırayla, yumuşakça, her birini 3 saniye uzatın.',
      'Son hazırlık: "La-la-la" ile orta perdede küçük bir melodi mırıldanın — 30 saniye.',
      'Test: Normal sesle kısa bir cümle söyleyin. "Merhaba, günaydın." — ses hazır mı?'
    ],
    variations: [
      '🔄 Hızlı Rutin: Sadece Mmm + Brrr + 5 ünlü — 2 dakika mini versiyon',
      '🔄 Kapsamlı Rutin: Buradaki tüm adımlar + perde skalası = 10 dakika',
      '🔄 Susuz Rutin: Seyahat/sahne öncesi — yalnızca yutkunma ve burun nefesiyle'
    ],
    tip: '💡 Sabah uyandığınızda ve herhangi bir konuşmadan 5 dakika önce ısınma yapın. Bu kısa rutin uzun vadede büyük fark yaratır. Ses sağlığı için düzenlilik şarttır — bir sporcu gibi davranın.',
    related: [14, 15, 29]
  },

  {
    id: 14, cat: 'ses', emoji: '🎵', title: 'Perde Aralığı Genişletme',
    dur: '7 dk', level: 'Orta', freq: 'Haftada 4 kez',
    desc: 'Sesin doğal perde aralığını (vocal range) genişletmek ve melodikliği artırmak için yapılan sistematik çalışma. Monoton konuşanların en büyük şikayeti "ilgi çekici olmadıklarıdır" — bu egzersiz o problemi doğrudan çözer. Farklı perdeler kullanmak, anlatıma hayat katar.',
    benefits: ['Doğal perde aralığını genişletir', 'Monoton konuşmayı ortadan kaldırır', 'Konuşmaya melodik çeşitlilik katar', 'Vurgulama için perde değişimi kazandırır', 'Sesin "canlı" ve "enerjik" hissettirmesini sağlar'],
    mistakes: ['Sesin doğal sınırını zorlamak (ağrı hissedilirse durulmalı)', 'Çok hızlı perde değiştirmek', 'Nefes desteği olmadan yüksek perdeye çıkmak', 'Konuşmaya entegre etmeyi unutmak'],
    phrase: null,
    steps: [
      'Önce ses ısınma yapın (Egzersiz 13\'e bakın).',
      '"Do-Re-Mi-Fa-Sol-La-Si-Do" skalasını söyleyin — her nota net ve kararlı. Yükselen.',
      'Aynı skalayı alçalarak tekrarlayın: "Do-Si-La-Sol-Fa-Mi-Re-Do".',
      'Sadece "La" sesiyle: "La-La-La-La-La-La-La-La" (yükselen ve alçalan).',
      '"Merhaba" kelimesini sesinizin en düşük notasında söyleyin. Ardından en yüksek notasında.',
      'Bir soru cümlesi kurun: "Bu nasıl mümkün olabilir?" — soru işaretinde ses yükselsin.',
      '"Bu çok önemli!" — ünlem işaretinde güçlü ve net bir zirveye ulaşın.',
      'Bir paragraf okuyun — önemli kelimelerde perdeyi biraz yükseltin, biterken alçaltın.'
    ],
    variations: [
      '🔄 Narration: Bir belgesel anlatıcısı gibi okuyun — perde çeşitliliğine dikkat',
      '🔄 Soru-Cevap: Yüksek perdede soru, alçak perdede cevap mantığıyla diyalog kurun',
      '🔄 Şiir: Heyecan verici bölümlerde yüksek, hüzünlü bölümlerde alçak perde'
    ],
    tip: '💡 Sesinizin doğal sınırlarını kademeli genişletin. Ağrı hissediyorsanız hemen durun — zorlamak ses tellerine kalıcı zarar verebilir. Ayda bir perde aralığınızı ölçün ve kaydedin.',
    related: [13, 15, 25]
  },

  {
    id: 15, cat: 'ses', emoji: '📢', title: 'Ses Güç Skalası',
    dur: '4 dk', level: 'Orta', freq: 'Haftada 3 kez',
    desc: 'Alçaktan yükseğe ve tekrar alçağa geçişleri kontrollü yapma egzersizi. Güçlü konuşmacılar, ses seviyelerini konuşmanın duygusal içeriğine göre ayarlar — bu yetenek doğal değil, çalışmayla kazanılır. Robot gibi sabit sesle konuşmak dinleyiciyi uyutur.',
    benefits: ['Ses gücü kontrolü kazandırır', 'Sunum ve sahne performansını güçlendirir', 'Duygusal vurgu için ses değişimi sağlar', 'Monoton "ses robotluğunu" kırır', 'Küçük ve büyük ortamlara uyum kapasitesi'],
    mistakes: ['Boğazı zorlayarak yüksek ses çıkarmak', 'Fısıltıyı "konuşmanın bir parçası" olarak kullanmayı unutmak', 'Güç değişimini duygudan kopuk yapmak'],
    phrase: '"Arkadaşlar... (fısıltı) bu dünyada... (orta) BİR ŞANS VARSA... (güçlü) o da şimdi!"',
    steps: [
      'Fısıltı: "Merhaba" kelimesini sadece nefesle, ses telleri neredeyse hiç kullanmadan söyleyin.',
      'Alçak ses: Aynı kelimeyi çok sessiz ama ses tellerini kullanarak söyleyin.',
      'Orta ses: Normal konuşma sesi.',
      'Güçlü ses: Diyafram destekli, güçlü ama boğaz gergin değil.',
      'Maksimum: Güvenli maksimum sesinizle söyleyin — boğaz gerginliği yoksa doğru.',
      'Şimdi bir cümle: Fısıltıdan başlayın, kademeli artırın, cümle sonunda maksimuma ulaşın.',
      'Tam tersi: Güçlü başlayın, fısıltıyla bitirin — dramatik etki!',
      'Yukarıdaki "phrase" cümlesini okuyun — parantez içindeki talimatları uygulayın.'
    ],
    variations: [
      '🔄 Şiir: Bir şiiri her kıtada farklı güçte okuyun',
      '🔄 Tek Kelime: "Hayır!" kelimesini 5 farklı ses gücüyle söyleyin',
      '🔄 Sahne: Tiyatro sahnesi canlandırın — sahne arkası fısıltıdan sahne ortasında zirveye'
    ],
    tip: '💡 Ses gücü kontrolü, etkili konuşmanın gizli silahıdır. "Önemli şeyler" fısıltıyla söylendiğinde de dikkat çeker! Zıtlıklar yaratın — yüksek = enerji, alçak = sır ve derinlik.',
    related: [13, 14, 25]
  },

  {
    id: 16, cat: 'ses', emoji: '🎙️', title: 'Rezonans Bölgeleri Turu',
    dur: '5 dk', level: 'Orta', freq: 'Haftada 4 kez',
    desc: 'Sesin göğüs, yüz ve kafa boşluklarında nasıl titreştiğini fark etmek, bu rezonans bölgelerini kontrol etmeyi öğrenmek. Farklı rezonans bölgelerini aktive etmek, sesin tınısını (rengini) değiştirmenizi sağlar — tıpkı bir müzik aleti gibi.',
    benefits: ['Sesin renk çeşitliliğini artırır', 'Yorulmadan uzun süre konuşma kapasitesi', 'Her ortama uygun ses profili seçebilirlik', 'Güvenilir ve karizmatik ses tınısı', 'Ses sağlığını koruma (doğal rezonans boğazı rahatlatır)'],
    mistakes: ['Yanlış bölgeyi zorlamak (özellikle kafa rezonansını zorla elde etmeye çalışmak)', 'Rezonansı "ses gücü" sanmak', 'Günlük konuşmaya entegre etmemek'],
    phrase: null,
    steps: [
      'GÖĞÜS REZONANSI: Elinizi göğsünüze koyun. Alçak perdede "Hmmmm" söyleyin. Ellerinizi titreştiren o tini hissedin — bu göğüs rezonansı.',
      'YÜZDE REZONANS: Elinizi yanağınıza koyun. Orta perdede "Mmmmm" söyleyin. Yanakta titreşim hissedilmeli.',
      'KAFA REZONANSI: Elinizi başınızın üstüne koyun. Yüksek perdede "İiii" söyleyin. Kafanın üstünde hafif titreşim hissedebilirsiniz.',
      'SIRAYLA: Alçak — "Hmm" (göğüs) → Orta — "Mmm" (yüz) → Yüksek — "İii" (kafa). Her geçişi yavaş yapın.',
      '"Merhaba, iyi günler." cümlesini önce göğüs rezonansıyla, sonra yüz rezonansıyla, sonra karmayla söyleyin.',
      'Karma: "Merhaba" — göğüs, "iyi" — yüz, "günler" — karma. Farklı tınıları hissedin.',
      'Son: Kendinize en doğal gelen rezonans kombinasyonuyla bir paragraf okuyun. Bu sizin "sesimza"nızdır.'
    ],
    variations: [
      '🔄 Otorite Modu: Göğüs rezonansı ağırlıklı → güçlü, güvenilir izlenim',
      '🔄 Sıcaklık Modu: Yüz rezonansı → enerjik, samimi izlenim',
      '🔄 Kayıt: 3 farklı rezonans kombinasyonunu kaydedin, farkları dinleyin'
    ],
    tip: '💡 Göğüs rezonansı sesin derinliğini ve güvenilirliğini artırır. TV haber sunucularının güçlü ve sakin sesinin sırrı budur. Yüz rezonansı sesin canlılığını ve enerjisini artırır.',
    related: [13, 29, 30]
  },

  // ═══════════════════════════════════════════════════════════
  //  🗣️ TELAFFUZ KATEGORİSİ
  // ═══════════════════════════════════════════════════════════

  {
    id: 17, cat: 'telaffuz', emoji: '🗣️', title: 'Türkçe 8 Ünlü Sistemi',
    dur: '4 dk', level: 'Başlangıç', freq: 'Haftada 3 kez',
    desc: 'Türkçe\'nin 8 ünlüsünün tam ve berrak telaffuzunu kazandırmak için kapsamlı egzersiz. Türkçe ünlü uyumu (ses uyumu) dünyanın en sistematik dillerinden birini oluşturur. Bu 8 ünlünün netliği, konuşmanın genel anlaşılırlığını doğrudan belirler.',
    benefits: ['Ünlü netliğini artırır', 'Yabancı dil aksanını azaltır', 'Ünlü uyumu kurallarını içselleştirir', 'Hızlı konuşmada ünlü kaybını önler', 'Çocuk dil eğitiminde de kullanılır'],
    mistakes: ['Ö ve Ü\'yü "ö" ve "o" gibi söylemek', 'I ve İ arasındaki farkı görmezden gelmek', 'Ünlüleri kısa kesmek (yeterince uzatmamak)'],
    phrase: '"A — E — I — İ — O — Ö — U — Ü — A — E — I — İ — O — Ö — U — Ü"',
    steps: [
      '"A": Ağzı geniş açın, dil düz ve alçak, yuvarlak değil. "Aaa" — 5 saniye. Aynı pozisyonu aynaya kontrol edin.',
      '"E": Ağız orta açıklıkta, dil öne doğru hareket eder. "Eee" — 5 saniye.',
      '"I": Ağız neredeyse kapalı, dil geride ve yukarıda. "Iii" — boyun kasları serbest olmalı.',
      '"İ": Dil öne ve yukarı, dudaklar yana doğru genişler. "İii" — en parlak sesi.',
      '"O": Dudaklar yuvarlak ve öne doğru. Dil geride. "Ooo" — yuvarlak form kırılmamalı.',
      '"Ö": Dudaklar yuvarlak ama dil öne hareket eder. "Ööö" — bu sesi doğru çıkarmak Türkçenin en ince noktalarından.',
      '"U": Dudaklar en çok yuvarlanan ve öne uzanan pozisyon. "Uuu"',
      '"Ü": Dudaklar yuvarlak, dil öne. "Üüü" — Ö ve Ü arasındaki fark dil pozisyonunda. Sırayla: Ö-Ü-Ö-Ü geçişleri yapın.'
    ],
    variations: [
      '🔄 Tekrar Sıralama: A-U-E-Ü-I-Ö-İ-O sırasıyla söyleyin (ön-arka değişimi)',
      '🔄 Hız: Tüm 8 ünlüyü 2 saniyede söyleyin, 1 saniyede söyleyin',
      '🔄 Kelimeler: Her ünlüyle başlayan 3 kelime söyleyin (hızlıca)'
    ],
    tip: '💡 Ayna kullanarak ağız pozisyonlarını kontrol edin. Her ünlünün şekli açıkça farklı olmalı. Ses kaydı alın ve her ünlüyü ayrı dinleyin — netlik farklılıkları duyulur hale gelir.',
    related: [18, 19, 9]
  },

  {
    id: 18, cat: 'telaffuz', emoji: '🔡', title: 'Ünsüz Jimnastiği',
    dur: '5 dk', level: 'Orta', freq: 'Haftada 4 kez',
    desc: 'Aktörler ve spikerlerin standart ısınma egzersizi. "Pa-ta-ka" ve türevleri, dil, dudak, çene ve damak koordinasyonunu tüm ünsüzler için aynı anda çalıştırır. Bu egzersiz hem ısınma hem de uzun vadeli diksiyon geliştirme aracı olarak kullanılır.',
    benefits: ['Tüm artikülasyon organları güçlenir', 'Hızlı konuşmada ünsüz netliği korunur', 'Dil-dudak koordinasyonu otomatikleşir', 'Konuşma enerji verimliliği artar'],
    mistakes: ['Sadece tek bir diziyle çalışmak (tüm dizileri yapın)', 'Çok hızlı başlamak', 'Ağzı kapalı tutmak veya çeneyi yeterince açmamak'],
    phrase: '"Pa-Ta-Ka-Pa-Ta-Ka — Ba-Da-Ga-Ba-Da-Ga — Fa-Sa-Şa-Fa-Sa-Şa — Ma-Na-La-Ma-Na-La"',
    steps: [
      'PATLAYICI ÜNSÜZLER: "Pa-ta-ka" — 3 farklı patlayıcı ses. P: dudak, T: dil ucu+ön damak, K: dil arkası+arka damak. 10 kez yavaş, 10 kez orta, 10 kez hızlı.',
      'Titreşimli versiyonu: "Ba-da-ga" — aynı pozisyon ama sesli. 10+10+10.',
      'SÜRTTÜRÜCÜLER: "Fa-sa-şa" — F için alt dudak üst dişe değer; S için dil öne; Ş için dil orta damağa. 10+10+10.',
      'BURUN-DİL: "Ma-na-la" — M: dudak titreşimi; N: dil ucu üst dişlere; L: dil ucu damağa. 10+10+10.',
      'FULL DİZİ: "Pa-ta-ka-ba-da-ga-fa-sa-şa-ma-na-la" — sırayla, yavaş 5 kez.',
      'HIZLIYOR: Aynı tam diziyi hızlandırın. Hata yaptığınız nokta en zayıf noktanızdır. ORAYA odaklanın.',
      'UYGULAMA: "Birinci Dünya Savaşı\'nın parametrelerini tartışmak gerekiyor." — sert ünsüzler bol.',
      'Final: Zor bir paragrafı net söyleyin. Tüm ünsüzler tam mı çıkıyor?'
    ],
    variations: [
      '🔄 Minimal Rutin: Sadece Pa-Ta-Ka 30 kez — 2 dakika hızlı ısınma',
      '🔄 Rakip Dizi: "Tüm tartışmaların tartıştığı tartışmacı tartışmayı tartıştı"',
      '🔄 Müzikle: Bir ritme (metronom ile) senkronize Pa-Ta-Ka'
    ],
    tip: '💡 Bu egzersiz dil jimnastiğinin klasiğidir. Aktörler, konuşmacılar ve spikerler bu egzersizi sahne/stüdyo girişinden önce mutlaka yapar. Sabah dişinizi fırçaladıktan sonra aynada bir tur yapın!',
    related: [7, 17, 19]
  },

  {
    id: 19, cat: 'telaffuz', emoji: '📖', title: 'Üç Turlu Okuma Tekniği',
    dur: '6 dk', level: 'Orta', freq: 'Her gün',
    desc: 'Bir metni üç farklı odak noktasıyla okuyan ve her seferinde farklı bir beceri geliştiren sistematik okuma egzersizi. Kendi sesini duyma ve düzeltme en hızlı diksiyon geliştirme yöntemidir. Spikerlerin haber öncesi uyguladıkları "çalışma okuma" tekniğidir.',
    benefits: ['Tonlama ve vurguyu bilinçli kullanmayı öğretir', 'Metin-ses bağlantısını güçlendirir', 'Kayıtla öz değerlendirme kültürü geliştirir', 'Farklı metin türlerine adaptasyon sağlar'],
    mistakes: ['Her tur aynı seste ve hızda okumak', 'Kayıt almayı atlamak', 'Hataları duyup düzeltmemek'],
    phrase: '"Türkiye, köklü bir tarih ve zengin kültürel mirasa sahip bir ülkedir. Yüzyıllar boyunca pek çok medeniyete ev sahipliği yapmış olan bu coğrafya, bugün de dünyaya önemli katkılar sunmaktadır."',
    steps: [
      'METİN SEÇİMİ: Yukarıdaki örnek metni kullanın veya bir gazete paragrafı seçin — 3-5 cümle idealdir.',
      'BİRİNCİ TUR — Yapısal Okuma: Çok yavaş, her kelimeyi hece hece söyleyin. Hiç vurgu yok, sadece doğru telaffuz. Amaç: hata tespiti.',
      'Hatalı söylediğiniz kelimeleri tekrar tek tek çalışın: sözlükten kontrol edin.',
      'İKİNCİ TUR — Anlamlı Okuma: Normal hızda okuyun. Virgülde 1 sn, noktada 2 sn durun. Önemli kelimeleri hafifçe vurgulayın. Noktalamayı sese yansıtın.',
      'Bu turu kaydedin.',
      'ÜÇÜNCÜ TUR — Canlı Okuma: Bir dinleyiciniz varmış gibi okuyun. Ses tonu, ritim, duygu. Doğal ve akıcı olun.',
      'Kaydı dinleyin: ikinci ve üçüncü tur arasındaki farkı not alın.',
      'Zayıf noktayı izole edin ve ayrıca 5 kez tekrarlayın.'
    ],
    variations: [
      '🔄 Haber Varyasyonu: TRT haber metninden parçalar kullanın',
      '🔄 Şiir Varyasyonu: Bir Türk şiiri üç tur ile okuyun',
      '🔄 Hedefleme: Her gün farklı bir diksiyon hedefi belirleyin (bugün: virgül duraklamaları)'
    ],
    tip: '💡 Nokta ve virgüllerde gerçekten durun. Yazıdaki noktalamayı konuşmaya taşımak diksiyonu anında iki kat iyileştirir. En iyi gelişim yöntemi: önce kayıt alın, sonra dinleyin, sonra tekrarlayın.',
    related: [17, 18, 24]
  },

  {
    id: 20, cat: 'telaffuz', emoji: '🎭', title: 'Duygu Skalası',
    dur: '5 dk', level: 'Orta', freq: 'Haftada 3 kez',
    desc: 'Aynı cümleyi farklı duygularla söyleyen ve her seferinde sesin nasıl değiştiğini fark ettiren egzersiz. İfade yeteneği diksiyon eğitiminin en yaratıcı boyutudur. Duygu seçimi; ses tonu, hız, vurgu ve perde üzerinde anlık değişimler oluşturur.',
    benefits: ['İfade zenginliği kazandırır', 'Duygu-ses bağlantısını bilinçli kılar', 'Duruma göre ton ayarlama becerisi', 'Etkili iletişim için kritik esneklik', 'Monoton konuşmayı tamamen kırar'],
    mistakes: ['Duyguyu abartmak (oyunculuk değil, doğal ifade)', 'Sadece ses tonu değiştirmek — hız ve vurgu da değişmeli', 'Her duyguyu aynı hızda söylemek'],
    phrase: '"Bu kadar önemli miydi ki?"',
    steps: [
      'Cümleyi düz, duygudan arınmış okuyun: sadece telaffuz doğru olsun.',
      'MERAK ile: Soru meraklıca, ses biraz yükselir sona doğru.',
      'ŞİDDETLİ KIZGINLIK ile: Vurgular sert, ses güçlü, hız yavaş-ağır.',
      'ALTTAKİ HÜZÜN ile: Yavaş, alçak ses, kelimeler uzar, enerjisiz.',
      'SÜRPRIZ ile: Ses aniden yükselir, tempo hızlanır.',
      'KÜÇÜMSEME ile: Sesin düşer, "hmm" etkisi var, yavaş ve soğuk.',
      'SEVİNÇ ile: Hızlı, enerjik, sesin yükselir, ritmik.',
      'KENDİ KEŞFET: Bu cümleyi bir dedektif, bir çocuk ve bir yaşlı gibi söyleyin.'
    ],
    variations: [
      '🔄 Tek Kelime: "Hayır." kelimesini 7 farklı duyguyla söyleyin',
      '🔄 Monolog: Kendi yazdığınız 3 cümlelik metni 3 farklı duyguyla okuyun',
      '🔄 Tiyatro: Bir sahneyi canlandırarak karşılıklı diyalog iletişimini inceleyin'
    ],
    tip: '💡 Profesyonel konuşmacılar aynı cümleyi 10 farklı anlama getirebilir. Bu beceri "doğuştan" değil, EGZERSİZLE KAZANILır. Her gün bir cümleyle 5 farklı duygu deneyin.',
    related: [19, 25, 27]
  },

  {
    id: 21, cat: 'telaffuz', emoji: '🔍', title: 'Hece ve Anlam Vurgusu',
    dur: '5 dk', level: 'İleri', freq: 'Haftada 3 kez',
    desc: 'Türkçe\'de hece vurgusunun anlam ve duygu üzerindeki etkisini derinlemesine kavramak için ileri düzey egzersiz. Türkçe, fonetik açıdan zengin ama kural bazlı bir dildir; vurgu kurallarını bilmek ve ötelemesini bilmek sizi profesyonel yapan şeydir.',
    benefits: ['Anlam ayrıştırma için vurgu ustalığı', 'Sorgulamada ve vurgulamada bilinçli ton kontrolü', 'Yabancı dil aksanını azaltır', 'İkna edici konuşmayı güçlendirir'],
    mistakes: ['Her kelimeyi vurgulamak — vurgu, az kullanıldığında güçlüdür', 'Vurguyu sadece ses yükseltmek sanmak (perde + süre de değişir)', 'Doğal konuşmadaki vurguyu fark etmemek'],
    phrase: '"Ben bugün buraya SİZ için geldim."',
    steps: [
      'HECE VURGUSU: "Ankara" kelimesini söyleyin: "An-ka-ra" — hangi hece vurgulu? (ANkara veya anKAra?) Türkçede genellikle son hece vurgulu: an-ka-RA.',
      '"Gelmek, Geldim, Gelecek" — vurgu hecesi değişiyor mu? gelMEK-GELdim-geLEcek karşılaştırması yapın.',
      'ANLAM VURGUSU: "Ben bu kitabı okudum." cümlesini deneyin:',
      '→ "BEN bu kitabı okudum." (başkası değil, ben)',
      '→ "Ben BU kitabı okudum." (başka kitap değil, bu)',
      '→ "Ben bu KİTABI okudum." (dergi değil, kitap)',
      '→ "Ben bu kitabı OKUDUM." (sahip olmadım, okudum)',
      '"SİZ" kelimesini yukarıdaki phrase cümlesinde büyük harfle görüyorsunuz — orayı güçlü vurgulayın. Cümlenin anlamı nasıl değişiyor?',
      'SON: Bir paragraf okuyun. Her cümlede bir "anahtar kelime" belirleyin ve sadece onu vurgulayın.'
    ],
    variations: [
      '🔄 Çiftler: "Elma/elma, sonra/sona, kara/kara" (ayrı anlamlı vurgular)',
      '🔄 Haber: TRT haberinden bir cümleyi alın, spikerin vurguladığı yerine siz farklı bir kelimeyi vurgulayın — anlam nasıl değişiyor?',
      '🔄 Argüman: Bir tartışma cümlesini, "falan değil bilakis balam" vurgularıyla okuyun'
    ],
    tip: '💡 Türkçe\'de vurgu genellikle son hecededir. Ama duygusal veya anlamsal vurgu her zaman bu kuralı esnetebilir — VE bu kasıtlı olmalıdır! Vurgu eksikliği, konuşmayı mekanik ve anlaşılmaz kılar.',
    related: [19, 20, 25]
  },

  // ═══════════════════════════════════════════════════════════
  //  🥁 RİTİM KATEGORİSİ
  // ═══════════════════════════════════════════════════════════

  {
    id: 22, cat: 'ritim', emoji: '🥁', title: 'Bedenle Ritim',
    dur: '5 dk', level: 'Başlangıç', freq: 'Haftada 4 kez',
    desc: 'Konuşma ritmini el ve beden hareketleriyle dışa vurarak içselleştiren egzersiz. Ritim hissi, konuşmacının en güçlü silahlarından biridir. Beyin, bedenden gelen ritim girdisini sese aktardığında konuşma kendiliğinden ritimli hale gelir.',
    benefits: ['Ritim hissini bedenle içselleştirir', 'Monoton konuşmayı kırar', 'Konuşma akışını düzenler', 'Hece bilincini güçlendirir', 'Şiir ve edebi metin okumada estetik kazandırır'],
    mistakes: ['El hareketleriyle dikkat dağıtmak (el hareketi sadece öğrenme aşamasında)', 'Ritmi konuşmanın yapısından kopuk kurmak', 'Şiir ritmini düz metne uygulamak'],
    phrase: '"Gü-naydın — na-sıl-sı-nız? / İ-yi-yim — te-şek-kür-le-rim."',
    steps: [
      'DİZ VURMA: Elinizi diz kapaklarınıza koyun. "Günaydın, nasılsınız?" cümlesini söylerken her hece için dizinize hafifçe vurun.',
      'Tekrarlayın: yavaş hece vurması, sonra hızlandırın. Ritim hissini fark edin.',
      '"İyiyim, teşekkürler. Siz nasılsınız?" — dize vurmaya devam.',
      'ŞIIR RITMI: "Dağlar dağları arar, pınarlar pınarları arar, ben de seni ararım yılmadan." — her kelime grubunda ritmi hissedin.',
      'EL RITMI: Sağ el her vurgulu heceyi, sol el her evcil heceyi vursun. İki elde farklı ritim.',
      'AYAK RITMI: Ayağınızı belirli bir ritimde yere vurun, konuşmanızı bu ritme senkronize edin.',
      '5 farklı uzunlukta cümle: kısa → uzun. Her birinde ritim hissini koruyun.',
      'Son tur: El veya ayak hareketi olmadan, sadece içeride ritmi hissederek konuşun.'
    ],
    variations: [
      '🔄 Müzikle: Bir müzik parçası çalın, o ritme konuşun',
      '🔄 Metronom: 80 BPM metronom ile konuşma ritmini ayarlayın',
      '🔄 Dans: Konuşurken hafifçe sallanın — ritim bedende olduğunda sese yansır'
    ],
    tip: '💡 Ritim, konuşmayı dinlenebilir kılan gizli güçtür. Monoton konuşan kişiler genellikle ritim hissine sahip değildir. Müzisyenler ritim hissini çalarak geliştirir — siz konuşarak geliştirin.',
    related: [23, 24, 19]
  },

  {
    id: 23, cat: 'ritim', emoji: '🎙️', title: 'Tempo Farkındalığı',
    dur: '5 dk', level: 'Orta', freq: 'Haftada 3 kez',
    desc: 'Farklı konuşma tempolarını bilinçli olarak kontrol etmeyi ve duruma göre ayarlamayı öğreten egzersiz. Profesyonel konuşmacılar, aynı içeriği farklı tempolarda sunabilir ve her tempoyu kasıtlı olarak seçer. "Çok hızlı" veya "çok yavaş" konuşmak, mesajın kaybolmasına neden olur.',
    benefits: ['Bilinçli tempo kontrolü kazandırır', 'Farklı ortamlara uygun konuşma hızı sağlar', 'Anlaşılırlık artar', 'Dinleyici kaybı azalır', 'Özel noktalarda drama yaratmak için tempo oynama'],
    mistakes: ['Sadece tek bir tempoda konuşabilmek', 'Hızlı konuşurken netliği kaybetmek', 'Yavaş konuşurken canlılığı yitirmek'],
    phrase: null,
    steps: [
      'METİN SEÇİN: Bir paragraf bulun (4-5 cümle). Aynı metni 4 farklı tempoda okuyacaksınız.',
      'AĞIR TEMPO: Sanki sözcük dili bilmeyen birine çeviri yapıyormuş gibì okuyun. Her kelime ayrı. 80 kelime/dakika.',
      'NORMAL TEMPO: Normal konuşma hızınız. Kendinizi kaydedin.',
      'ANLATICI TEMPO: 130-150 kelime/dakika. Haber sunucusu gibi — net ama hızlı.',
      'HIZLI TEMPO: 200 kelime/dakika. Radyo reklamı sesi — ama değil. Deneyin ama netliği kaybetmeyin.',
      'Kaydı dinleyin: hangi tempoda en net konuşuyorsunuz?',
      'UYGULAMALI: Normal metninizi alın. Önemli bölümlerde yavaşlayın, bağlantı cümlelerinde hızlanın. Bu "tempo dalgası" en etkili stildir.',
      'Final: "Hazır mısınız? (yavaş) Çünkü şimdi söyleyeceklerim (normal) gerçekten inanılmaz! (hızlı ve güçlü)"'
    ],
    variations: [
      '🔄 Metronom: 90 BPM → 120 BPM → 140 BPM geçişleri',
      '🔄 Okuma yarışı: Bir sayfayı 1 dakikada okuyun, kelime sayısınızı hesaplayın',
      '🔄 İklim: Farklı duygusal içerikler için doğal tempo farklılıklarını keşfedin'
    ],
    tip: '💡 Profesyonel konuşmacılar ortalama dakikada 130–150 kelime konuşur. Hızlı konuşanlar 200+, çok yavaşlar 80– kelime/dakika. Kendi hızınızı ölçün ve "ideal aralığa" yönelin.',
    related: [22, 24, 19]
  },

  {
    id: 24, cat: 'ritim', emoji: '🌊', title: 'Konuşmada Dalga Ritmi',
    dur: '5 dk', level: 'İleri', freq: 'Haftada 2 kez',
    desc: 'Konuşmadaki enerji ve tempoyu kasıtlı olarak dalgalandırarak dinleyicinin dikkatini canlı tutan ileri düzey teknik. En etkili TED Talk konuşmacıları bu tekniği bilinçli kullanır. Düz tempo yorar; dalgalanma heyecanlandırır, merak uyandırır.',
    benefits: ['Dinleyicinin dikkat kaybını önler', 'Duygusal etki yaratır', 'Sürükleyici anlatım becerisi kazandırır', 'Sunum ve hikaye anlatımını güçlendirir'],
    mistakes: ['Kendiliğinden değil planlayarak yapmak (önce planla)', 'Çok abartmak — stres değil, doğal dalgalanma', 'Dalgayı içerikten koparmak'],
    phrase: '"Evet... (yavaş, düşük) çocukluğumda bir gün... (orta) babam bana bir şey söyledi... (orta-hızlı) o günden beri hayatım değişti! (güçlü, hızlı)"',
    steps: [
      'DALGA PLANI: Bir metni alın. Her cümleye bir tempo ve güç etiketi koyun: yavaş/orta/hızlı + alçak/orta/yüksek.',
      'DALGAyı YAYIN: Başlayın alçak-yavaş. Kademeli yükseltin. Zirveye ulaşın. Ani alçalma ile yeni bir döngü başlatın.',
      'YUKARIDAKİ PHRASE\'İ OKUYUN: Parantez içindeki talimatlara tam uyun.',
      'KENDİ METNİNİZ: Kendi hayatınızdan bir anıyı 5 cümleyle anlatın. Dalga planı yapın.',
      'ZIRVE: Bir konuşma metninde her 30-40 saniyede bir "zirve" nokta oluşturun.',
      'DİP: Zirvenin ardından derin bir nefes alın ve yavaş-alçak bir cümle söyleyin.',
      'Kaydı dinleyin: dalgalar net hissediliyor mu? Yoksa hâlâ düz mi?'
    ],
    variations: [
      '🔄 Hikaye Anlatımı: Bir masalı dalga ritmiyle anlatın',
      '🔄 Haber: Canlı haber sunumunu taklit eden dalga ritmi',
      '🔄 İlham: TED talks izleyin, konuşmacının dalga noktalarını işaretleyin'
    ],
    tip: '💡 TED Talk konuşmacıları "hız dalgaları" kullanır. Düz tempo yorar — dalgalanma heyecanlandırır. Dinleyiciyi canlı tutan bu gerilim ve rahatlama döngüsüdür.',
    related: [22, 23, 27]
  },

  // ═══════════════════════════════════════════════════════════
  //  ⚡ VURGU KATEGORİSİ
  // ═══════════════════════════════════════════════════════════

  {
    id: 25, cat: 'vurgu', emoji: '⚡', title: 'Anlam Vurgusu Laboratuarı',
    dur: '5 dk', level: 'Orta', freq: 'Haftada 3 kez',
    desc: 'Aynı cümleyi, farklı kelimeleri vurgulayarak tamamen farklı anlamlar ve duygular yaratmayı öğreten egzersiz. Konuşmada vurgu, müzik notasındaki dinamik işareti gibidir — forte veya piano seçimi mesajı kökten değiştirir.',
    benefits: ['İkna edici konuşmayı güçlendirir', 'Dinleyicinin dikkatini istenen noktaya yönlendirir', 'Anlam belirsizliklerini ortadan kaldırır', 'Ses değişkenliği kazandırır', 'Liderlik ve güven izlenimi yaratır'],
    mistakes: ['Çok fazla kelimeyi vurgulamak — etkisi sıfırlanır', 'Sadece ses yükseltmek (perde + süre + güç = tam vurgu)', 'Vurgu yaparken doğal olmayan ses çıkarmak'],
    phrase: '"Ben bu projeyi teslim etmeyeceğim."',
    steps: [
      'Cümleyi 6 kez sesleyin, her seferinde kalın bir kelimeyi vurgulayın:',
      '→ "BEN bu projeyi teslim etmeyeceğim." — (Sen değil, ben)',
      '→ "Ben BU projeyi teslim etmeyeceğim." — (Başka proje değil, bu)',
      '→ "Ben bu PROJEYİ teslim etmeyeceğim." — (Raporu değil, projeyi)',
      '→ "Ben bu projeyi TESLİM etmeyeceğim." — (Vermeyeceğim)',
      '→ "Ben bu projeyi teslim ETMEYECEĞİM." — (Kesinlikle hayır)',
      '→ "Ben bu projeyi teslim etmeyeceğİM." — (ben, şahsen)',
      'Her vurgunun belirttiği farklı mesajı ifade edin. Kayıt alın.',
      'Şimdi kendi seçtiğiniz bir cümleyle aynı egzersizi tekrarlayın.'
    ],
    variations: [
      '🔄 Soru Vurgusu: "Siz mi geldiniz?" — SİZ vurgusu vs gelDİNİZ vurgusu',
      '🔄 Mini Sahne: Yukarıdaki cümleyi bir iş toplantısında söylüyormuş gibi canlandırın',
      '🔄 Dinleme: Bir haber izleyin, spikerın vurguladığı kelimeleri listeleyin'
    ],
    tip: '💡 Vurgu çok güçlü bir araç ama az kullanılmalı. Her cümlede en fazla 1-2 vurgulu kelime olmalı. Çok vurgu = vurgu yok. Dinleyici bunu ölçmeden hisseder.',
    related: [26, 21, 20]
  },

  {
    id: 26, cat: 'vurgu', emoji: '🎯', title: 'Noktalama Sesi Egzersizi',
    dur: '4 dk', level: 'Başlangıç', freq: 'Her gün',
    desc: 'Yazıdaki noktalama işaretlerini konuşmaya birebir aktarma egzersizi. Virgül, nokta, soru işareti, ünlem ve üç nokta — bunların hepsi, aslında sese yansıyan "talimat işaretleridir." Çoğu insan noktalamayı göz ardı eder ve konuşma sıkıcı bir akışa döner.',
    benefits: ['Doğal konuşma akışı kazandırır', 'Dinleyicinin metni anlaması kolaylaşır', 'Duraklamaları bilinçli kullanımı öğretir', 'Ses değişkenliği sağlar', 'Monoton okumayı ortadan kaldırır'],
    mistakes: ['Noktalama varken durmamak', 'Virgülde çok uzun durmak', 'Soru cümlelerini düz okumak (ses yükselmiyor)'],
    phrase: '"Bugün güneş var mı? Evet, var. Ama rüzgar oldukça soğuk — belki dışarı çıkmamalıyım!"',
    steps: [
      'VİRGÜL (,): Sesi hafifçe indirin, 1 saniye durun, devam edin. Virgül "bir sonraki fikir geliyor" sinyali.',
      'NOKTA (.): Sesi belirgin şekilde indirin, 2 saniye durun. Cümle bitti, düşünün.',
      'SORU İŞARETİ (?): Cümle sonunda sesi yükseltin — soruyorsunuz!',
      'ÜNLEM (!): Güçlü, net sona iniş. Enerji yüksek.',
      'ÜÇ NOKTA (...): Ses yavaşlar, tökezler, askıda kalır — merak uyandırıcı.',
      'Yukarıdaki phrase cümlesini okuyun. Her işarette talimatı uygulayın.',
      'Bir gazete paragrafı alın. Her virgül ve noktada sayarak durun.',
      'Aynı paragrafı kaydedin. Noktalama seslere yansıyor mu?'
    ],
    variations: [
      '🔄 Kendi Metnin: Kendi yazdığınız 3 cümleyi noktalamayı ekarte ederek vs doğru uygulayarak karşılaştırın',
      '🔄 Haber: Bir haber metnini okuyun, sadece noktalama odaklı dinleyin',
      '🔄 Şiir: Şiirde noktalama çok güçlüdür — tam uygulamayla okuyun'
    ],
    tip: '💡 Çoğu insan noktalama işaretlerini yazıda görür ama konuşmaya taşımaz. Bu fark profesyonel-amatör ayrımı yapar. "Virgül nefes al joker değil" — anlamsal duraklama noktasıdır.',
    related: [25, 27, 21]
  },

  // ═══════════════════════════════════════════════════════════
  //  ⏸️ DURAKLAMA KATEGORİSİ
  // ═══════════════════════════════════════════════════════════

  {
    id: 27, cat: 'duraklama', emoji: '⏸️', title: 'Stratejik Sessizlik',
    dur: '5 dk', level: 'Orta', freq: 'Haftada 3 kez',
    desc: 'Konuşmada bilinçli ve etkili sessizliklerin nasıl kullanılacağını öğreten egzersiz. "Sessizlik güçtür" cümlesi, tarih boyunca büyük konuşmacıların ortak bulgusudur. Bir duraklama, yüz kelimenin taşıyamayacağı gerilimleri ve dramatik etkileri yaratabilir.',
    benefits: ['Dinleyiciyi hazırlar ve merak yaratır', 'Önemli mesajların "içeriye girmesine" zaman verir', 'Güven ve kontrol izlenimi yaratır', 'Konuşmacının da düşünmesine izin verir', 'Dramatik etki katlar'],
    mistakes: ['Duraklamayı "hata" sanıp cümleyi doldurmak', 'Duraklarken gergin görünmek (dur ve bakış yap)', 'Çok kısa duraklamak — fark yaratmıyor', 'Duraklama sırasında gözleri kaçırmak'],
    phrase: '"Bu şirkette... (3 sn bekleyin, izleyiciye bakın) ...değişim başlıyor."',
    steps: [
      'BASİT ÖLÇÜM: Bir cümle söyleyin, ardından 3 saniye sayın. Rahat mı hissettiriyor? Çoğu insan ilk 1 saniyede patlıyor!',
      'GÖZE BAKU: Duraklama sırasında birinin gözüne bakın. 3 saniye boyunca bakışınızı kaçırmayın.',
      'NEFES: Duraklama anında diyafram nefesi alın. Bu hem sizi sakinleştirir hem bir sonraki cümleyi güçlendirir.',
      '"Bu toplantıda... (3 sn) ...çok önemli bir karar alacağız." — sesleyin. Rahatsız hissettiriyor mu? Bu normaldir.',
      'Uzatma: "Sonuç olarak... (5 sn) ...başarılı olduk." — 5 saniyeye çıkın.',
      'DOĞAL ENTEGRASYON: Bir monolog yapın. Her 3-4 cümlede bir kasıtlı 2-3 saniyelik duraklama.',
      'Kaydı dinleyin: duraklamalar bozucu mu geliyor, yoksa güçlü mü?',
      'Hedef: Duraklama sırasında hissettiklerinizi değil, dinleyicinin hissettiklerini gözlemleyin.'
    ],
    variations: [
      '🔄 Bir Dakika Konuşma: 1 dakikada 5 kasıtlı duraklama yapın',
      '🔄 Öğretmen Tekniği: "Şimdi düşünüyorum" duraklaması — konuşmacı da planlarını organize ediyor',
      '🔄 İzleme: Obama, Jobs gibi konuşmacıları izleyin, duraklama noktalarını sayın'
    ],
    tip: '💡 "Sessizlik altındır." — 3 saniyelik bir duraklama, 100 kelimenin etkisini taşıyabilir. Çoğu konuşmacı bu süreyi harcamaktan korkar çünkü "yaptım bir hata" hissine benziyor. Bu korku geçiyor.',
    related: [28, 24, 25]
  },

  {
    id: 28, cat: 'duraklama', emoji: '🎭', title: 'Dramatik Duraklama',
    dur: '4 dk', level: 'İleri', freq: 'Haftada 2 kez',
    desc: 'Dramatik anlarda kullanılan uzun ve bilinçli duraklama tekniği. Tiyatro geleneğinden konuşmacılık dünyasına geçen bu teknik, anlatının en güçlü anlarını maksimum etkiyle teslim etmek için kullanılır. Duraksama gerginliği, mesajın akılda kalıcılığını artırır.',
    benefits: ['Dramatik etki zirveye çıkar', 'Dinleyicinin içselleştirme süresi oluşur', 'Güçlü ve kontrolü elinde tutan lider izlenimi', 'Sonraki cümleyi kat kat güçlendirir'],
    mistakes: ['Duraklamayı çok kısa tutmak (3 sn altı dramatik değil)', 'Duraklama sırasında göz kaçırmak veya gülümsemek', 'Her zira-sonunda yapmak (etki kaybolur)'],
    phrase: '"4 yıl boyunca bu projeye emek verdim. Bu ekip, bu vizyon... (5 sn, oturum salonunu tarayın) ...gerçekten gurur verici."',
    steps: [
      'NEDEN 5 SANİYE? — 3 saniye "bekleyin", 5 saniye "derin etki". Önce 3 ile başlayın.',
      '"Bu toplantıda... (3 sn)" — söyleyin. Duraklamayı yaşayın.',
      '"Sonuç olarak... (5 sn)" — söyleyin. 5 saniye boyunca ayna etkisi — dinleyiciye bakın.',
      'BEDEN DILI: Duraklama sırasında sola veya sağa yavaşça yürüyün. Sahne drama etkisini artırır.',
      'Yukarıdaki phrase\'i okuyun — parantez talimatına tam uyun.',
      'Sahte monolog: 1 dakika konuşun. En güçlü cümlenizden önce 5 saniyelik dramatik duraklama yapın.',
      'Kaydı dinleyin: duraklama öncesi ve sonrası cümle etkisi nasıl değişiyor?'
    ],
    variations: [
      '🔄 Sahne Tekniği: Ayakta durun, kolları yavaşça yanınıza bırakın, tam sessizlik',
      '🔄 İzleme: Steve Jobs iPhone lansmanını izleyin — duraklama noktalarını not alın',
      '🔄 Kısa Form: 1-2 saniyelik mikro-duraklamalar ile fark yaratmayı deneyin'
    ],
    tip: '💡 Dramatik duraklamalar sahne üzerinde kullanılır. Gerçek hayatta 1-2 saniyelik kasıtlı duraklamalar bile yeterince güçlüdür. İlk deneme garip hissettiriyor — ikinci deneme doğal, üçüncü deneme güçlü gelir.',
    related: [27, 24, 25]
  },

  // ═══════════════════════════════════════════════════════════
  //  🌊 REZONANS KATEGORİSİ
  // ═══════════════════════════════════════════════════════════

  {
    id: 29, cat: 'rezonans', emoji: '🌊', title: 'Göğüs Rezonansı Aktivasyonu',
    dur: '5 dk', level: 'Orta', freq: 'Haftada 3 kez',
    desc: 'Sesin göğüs boşluğunda yankılanmasını sağlayarak derin, otoriter ve güvenilir bir ses profili elde etme egzersizi. TV haber sunucularının, iş liderlerinin ve karizmatik kamusal figürlerin sesi çoğunlukla göğüs rezonansı ağırlıklıdır. Bu egzersiz o derinliği sistematik olarak kazandırır.',
    benefits: ['Derin ve otoriter ses tınısı kazandırır', 'Güvenilir ve sakin izlenim yaratır', 'Boğaz yorgunluğunu azaltır', 'Sesin uzağa ulaşmasını kolaylaştırır', 'Karizmatik lider ses profili oluşturur'],
    mistakes: ['Sesi zorla düşürmeye çalışmak (bu doğal ses kaybıdır)', 'Sadece gürültüyü artırmak, rezonansı değil', 'Nefes desteği olmadan yapmak', 'Her cümlede uygulamayı unutmak'],
    phrase: null,
    steps: [
      'KONTROL: Elinizi düz göğsünüze koyun. Alçak perdede "Mmmmm" sesi çıkarın. Elinizde titreşim hissediyor musunuz? Evet ise göğüs rezonansı aktif.',
      '"Hmmmm" sesini uzatın — 10 saniye. Alçak perde. Göğsü titretin.',
      'Ağzı açın: "Haaa" sesiyle aynı alçak tonu koruyun. Göğüsteki titreşimi kaybetmeyin.',
      '"Merhaba" kelimesini söyleyin. Göğüs hâlâ titreşiyor mu?',
      '"Merhaba, iyi günler. Nasılsınız?" — üç cümle, göğüs rezonansını her cümlede hissedin.',
      '"Arkadaşlar, bugün size çok önemli bir konu hakkında bilgi vereceğim." — tam cümle.',
      'Kaydedin ve dinleyin. Ses derin ve güvenilir mi? Yoksa yüzeysel mi?',
      'Günlük uygulama: Sabah ısınmasında 2 dakika sadece göğüs rezonansı — pekiştirir.'
    ],
    variations: [
      '🔄 Konuşma: Bir toplantıda ya da telefon konuşmasında göğüs rezonansını uygulamayı deneyin',
      '🔄 Karşılaştırma: Göğüs rezonansıyla ve olmadan aynı cümleyi kaydedin — fark çarpıcı',
      '🔄 Haber Sunucu: TRT spikeri gibi konuşarak göğüs rezonansını klişeyle deneyimleyin'
    ],
    tip: '💡 Göğüs rezonansı sesin derinliğini ve güvenilirliğini artırır. TV haber sunucularının "otorite" sesi bu rezonansla gelir. Ancak: doğal sesinizi SİLMEYİN — sadece rezonans zenginliği ekleyin.',
    related: [16, 30, 31]
  },

  {
    id: 30, cat: 'rezonans', emoji: '🎶', title: 'Nasal Rezonans Dengesi',
    dur: '5 dk', level: 'İleri', freq: 'Haftada 2 kez',
    desc: 'Burun boşluğundaki rezonansı fark etmek, aşırı nasal sesi düzeltmek ve dengeli bir rezonans profili oluşturan egzersiz. "Genizdense konuşma" izlenimi veren kişiler için özellikle kritik bir çalışmadır. Dengeli nasal rezonans ise sesin canlılığına katkı sağlar.',
    benefits: ['Aşırı nasal sesi giderir', 'Sesi yuvarlak ve tatlı kılar', 'N-M seslerini doğal tutarken geri kalan sesleri temizler', 'İzlenim yönetimini güçlendirir', 'Aksanlı Türkçeyi düzelter'],
    mistakes: ['Burnunuzu zorla kapatmaya çalışmak', 'N ve M seslerindeki nasal rezonansı da gidermeye çalışmak (bu yanlış)', 'Sadece bir oturumda çözmek beklemek (zaman ister)'],
    phrase: '"Nil, nam-ı diğer Nilüfer, narin ve nazik bir hanımefendiydi."',
    steps: [
      'TEST: Burnunuzu elinizle sıkıca kapatın. "Merhaba nasılsınız?" deyin. Çok tuhaf ve patlak geliyorsa aşırı nasal var.',
      'Şimdi bırakın ve tekrarlayın. Fark büyük mü? Fark normal ise rezonans dengeli demektir.',
      '"M" ve "N" seslerinde burun titreşimi OLMALI — bu doğal. "Ma-ma-ma" söyleyin, titreşimi fark edin.',
      'Diğer sesler: "Ba-da-ga-pa-ta-ka" — bunlarda burun titreşimi HİÇ OLMAMALI.',
      '"Ba-na-ba-na-ba-na" — B\'de yok, N\'de var, B\'de yok. Bu geçişi fark edin.',
      'Yukarıdaki phrase cümlesini okuyun. N\'lerde rezonans, diğerlerinde değil.',
      'Problematik sesler: Hangi sessiz ünsüzde fazla burun kullanıyorsunuz? İzole edin ve çalışın.',
      'Kaydedin ve dinleyin. Ses dengeli mi, patlak mı, nasal mı?'
    ],
    variations: [
      '🔄 Kontrol Testi: Haftada bir burnunuzu kapatarak kendi sesinizi test edin — gelişimi ölçün',
      '🔄 Yavaş Geçiş: Nasal-nasal değil arası sesi yakalamayı deneyin',
      '🔄 Karşılaştırma: Kayıtlarınızı haftalık karşılaştırarak gelişimi takip edin'
    ],
    tip: '💡 Genizdenselik veya aksanlı Türkçe izlenimi veriyorsanız bu egzersiz birkaç haftada fark yaratır. Ancak hızlı bir çözüm beklemek yanlış — bu dil alışkanlığıdır ve zaman ister.',
    related: [29, 31, 16]
  },

  {
    id: 31, cat: 'rezonans', emoji: '🏔️', title: 'Kafa Rezonansı',
    dur: '4 dk', level: 'Orta', freq: 'Haftada 3 kez',
    desc: 'Sesin kafa boşluğunda yankılanmasını sağlayan teknik. Yüksek perdelerde ve "parlak" tınılarda etkindir. Kafa rezonansı sesin canlılığını, açıklığını ve "enerji hissini" artırır. Öğretmenler, sunucular ve motivasyon konuşmacılarının sıklıkla kullandığı rezonans.',
    benefits: ['Sesin "pırıltısını" ve enerjisini artırır', 'Yüksek perdelerde yorgunluğu azaltır', 'Konuşmaya canlılık ve dinamizm katar', 'Öğretmen sesi için idealdir', 'Sesin uzağa açıklıkla ulaşmasını sağlar'],
    mistakes: ['Yüksek perdeye geçerken boğazı zorlamak', 'Kafa rezonansı ile burun rezonansını karıştırmak', 'Yetersiz nefes desteğiyle yüksek perde denemek'],
    phrase: null,
    steps: [
      'KONTROL: Elinizi başınızın üstüne koyun. Yüksek bir "İiii" sesi söyleyin. Başınızın üstünde çok hafif bir titreşim hissedebilirsiniz.',
      '"La" notasını yüksek perdede uzatın — kafayı titreştirmeye çalışın.',
      '"İ" ve "E" ünlülerini yüksek perdede söyleyin — en çok kafa rezonansını aktive eden ünlülerdir.',
      'Bir melodi mırıldanın — yüksek notalar kafa rezonansını kendiliğinden aktive eder.',
      '"Harika! Mükemmel! İnanılmaz!" — enerjik ve yüksek perdede söyleyin.',
      'GÖĞ+KAFA: Alçak perde = göğüs rezonansı, yüksek perde = kafa rezonansı. Bir cümlede ikisini birleştirin.',
      '"Arkadaşlar (göğüs) — bu inanılmaz bir başarı! (kafa)" — geçişi hissedin.',
      'Kaydedin. Sesin "canlılığı" ve "enerjisi" var mı?'
    ],
    variations: [
      '🔄 Öğretmen Modu: Sınıfa sesleniyormuş gibi enerjik, ama gergin değil konuşun',
      '🔄 Motivasyon: "Başarabilirsiniz! Kendinize inanın!" — kafa rezonansıyla güçlendirin',
      '🔄 Yüksek-Alçak: Kafa-göğüs rezonansı geçişlerini dönüşümlü yapın'
    ],
    tip: '💡 Kafa rezonansı sesin "pırıltısını" artırır. Bazı konuşmacılar bunu fark etmeden kullanır — siz bilinçli yapın. Öğretmenler, terapistler ve sunucuların doğal enerjik sesinin kaynağı burasıdır.',
    related: [29, 30, 32]
  },

  {
    id: 32, cat: 'rezonans', emoji: '🌀', title: 'Kişisel Ses Profili Oluşturma',
    dur: '8 dk', level: 'İleri', freq: 'Haftada 1 kez',
    desc: 'Göğüs, yüz ve kafa rezonanslarını bilinçli olarak harmanlayarak kişisel ve tutarlı bir ses profili oluşturan ileri düzey egzersiz. Tüm rezonans çalışmalarının zirvesi olan bu egzersiz, "ses imzanızı" tasarlamanıza yardımcı olur. Sizi tanıyan herkes, kaydınızı dinlemeden sesinizi tanıyabilmeli.',
    benefits: ['Tutarlı ve tanınabilir ses kimliği oluşturur', 'Tüm rezonans bölgelerini entegre eder', 'Profesyonel ses profili kazandırır', 'Sesin farklı ortamlara uyum kapasitesi', 'Uzun vadeli ses özgüveni geliştirir'],
    mistakes: ['Başkasının sesini kopyalamaya çalışmak', 'Doğal sesinizi tamamen değiştirmeye çalışmak', 'Tek seanste sonuç beklenmek'],
    phrase: '"Merhaba, ben [isminiz]. Bugün size çok özel bir şey anlatmak istiyorum."',
    steps: [
      'KEŞFET: Önce 3 dakika normal konuşun ve kaydedin. Şu anda neye benziyor?',
      'ÖLÇÜM: 1-10 skalasında: Derinlik? Netlik? Enerji? Güvenilirlik? Kendi sesinizi değerlendirin.',
      'GÖĞÜS AKTIVASYONU: 1 dakika boyunca sadece göğüs rezonansı — alçak perdede konuşun.',
      'YÜZ AKTIVASYONU: 1 dakika boyunca orta perde — yüz boşluğu titreşimi.',
      'KAFA AKTIVASYONU: 1 dakika yüksek enerji — kafa rezonansı.',
      'KARMA DENEY: Yukarıdaki phrase\'i söyleyin. "Merhaba" = göğüs, "sen" = yüz, "size anlatmak istiyorum" = karma.',
      'Hangi kombinasyon size en doğal ve en güçlü geliyor? Bu sizin profil başlangıcınız.',
      'Kaydı dinleyin. Bir hafta her gün 2 dakika bu profille konuşun. Bir sonraki haftada tekrar kaydedin.'
    ],
    variations: [
      '🔄 Haftalık Kayıt: Her hafta aynı metni okuyun — çaylak kayıtlar değişimi gösterir',
      '🔄 Geri Bildirim: Güvendiğiniz birine kaydınızı dinletin, "nasıl hissettirdi?" sorun',
      '🔄 Role Model: Beğendiğiniz bir konuşmacının ses profilini analiz edin (kopyalamak değil, anlamak için)'
    ],
    tip: '💡 "Ses imzanız" zamanla oluşur. Bu egzersizi her hafta yaparak yavaş yavaş ideal profili bulursunuz. Hedef: sesiniz güvenilir, enerjik ve tanınabilir olsun — ama tamamen SİZE ait.',
    related: [29, 30, 31]
  },

  // ═══════════════════════════════════════════════════════════
  //  🌟 YENİ İLERİ DÜZEY EGZERSİZLER (33 - 36)
  // ═══════════════════════════════════════════════════════════
  {
    id: 33, cat: 'duraklama', emoji: '🛑', title: 'Stratejik 3 Saniye Duraklaması',
    dur: '5 dk', level: 'İleri', freq: 'Haftada 3 kez',
    desc: 'Konuşma sırasında izleyicide en büyük merakı ve odaklanmayı yaratmak için tasarlanmış güç odaklı duraklama egzersizi. Susmak, konuşmaktan daha güçlü bir silahtır.',
    benefits: ['Otorite algısını dramatik şekilde artırır', 'İzleyicinin dikkatini geri toplar', 'Sözlerin zihinde yankılanmasını sağlar', 'Hızlanmayı kontrol altına alır'],
    mistakes: ['Duraklamayı fazla uzatarak iletişimi koparmak', 'Yanlış yerde (cümlenin ortasında gereksiz) duraklamak'],
    phrase: '"Bu akşam size bir sır vereceğim... (3 saniye dur) Fakat bu sırrı yalnızca dinlemeye hazır olanlar anlayacak."',
    steps: [
      'Normal cümleleri okuyun. Cümlenin bitiminden sonra içinizden tam 3 saniye sayın: 1001, 1002, 1003.',
      'Sessizlik anında beden dilinizi sabit ve kendinden emin tutun.',
      'Önemli bir kelime söylemeden hemen önce 2 saniyelik bir ön-duraklama ekleyin.',
      'Kaydedin: Sessizlikler gerginlik mi hissettiriyor yoksa bilgelik mi?'
    ],
    variations: [
      '🔄 Soru-Cevap: Bir soru sorup 4 saniye cevapsız beklemek',
      '🔄 Yürü ve Dur: Sahnedeyken yürüyün, önemli bir şey söyleyeceğiniz an durun ve susun'
    ],
    tip: '💡 Acemi konuşmacılar sessizlikten korkar ve "eee, ııı" ile doldurur. Usta konuşmacılar sessizliği bir enstrüman gibi yönetir.',
    related: [22, 24]
  },
  {
    id: 34, cat: 'ritim', emoji: '⏱️', title: 'Stakkato ve Legato Geçişleri',
    dur: '6 dk', level: 'İleri', freq: 'Haftada 2 kez',
    desc: 'Kelimeleri birbiri ardına kesik kesik (Stakkato) veya birbirine pürüzsüzce bağlayarak (Legato) konuşma arasında ustaca geçiş yapma egzersizi.',
    benefits: ['Duygusal geçişleri ses ritmine yansıtır', 'Aşırı akıcı konuşup netliği kaybedenleri düzeltir', 'Vurgulamayı güçlendirir'],
    mistakes: ['Stakkato yaparken ritmi kaçırıp robotik olmak', 'Legato yaparken kelime sonlarını yutmak'],
    phrase: '"Bir. İki. Üç. Neden böyle? (Stakkato) Oysa ki hayat akıp giderken kelimeler sular gibi çağlar... (Legato)"',
    steps: [
      'Metni çok net, kesik ve sert sınırlarla okuyun (Stakkato).',
      'Aynı metni sanki bir kelime diğerinin içine eriyormuş gibi yumuşak ve akarak okuyun (Legato).',
      'Bir paragrafı yarım stakkato yarım legato olarak okuyarak aradaki tezatlığı (kontrast) deneyimleyin.'
    ],
    variations: [
      '🔄 Kızgınlık ve Şevkat: Kızgınlık için Stakkato, Şevkat için Legato kullanın.'
    ],
    tip: '💡 En güçlü anlatımlar kontrasttan doğar. 5 dakika akan bir sesten sonra aniden kesik kelimeler vurucu bir etki yaratır.',
    related: [23, 24]
  },
  {
    id: 35, cat: 'vurgu', emoji: '🏹', title: 'Mikro ve Makro Vurgu Kontrolü',
    dur: '4 dk', level: 'Orta', freq: 'Her gün',
    desc: 'Cümle içindeki büyük ve küçük mantık duraklamalarını ayarlama. Anahtar iletiyi taşıyan kelimeye makro, destekleyici kelimelere mikro vurgu yapmak üzerine çalışılır.',
    benefits: ['Yazılı metinleri haber spikeri profesyonelliğiyle okuma', 'Zihinsel karışıklığı önler', 'Konuşma dinamizmini maksimuma çıkarır'],
    mistakes: ['Her kelimeye eşit makro vurgu yapmak', 'Sadece ses yükselterek vurgu yapmaya çalışmak (hız da düşmelidir)'],
    phrase: '"Bu sadece BİR adım olabilir, ama İNSANLIK için DEV bir adımdır."',
    steps: [
      'Sadece bir makro hedef belirleyin. Etrafındaki her şey çok düşük enerjide söylensin.',
      'Diğer kelimeleri hafif mikro vurgularla (mesela sessizliğe biraz perde değiştirerek) geçin.',
      'Kaydınızı bir başkasına dinletin ve onlara "Sence bu konuşmada odak nokta hangisiydi?" diye sorun.'
    ],
    variations: [
      '🔄 Ters Vurgu Yöntemi: En önemli kelimeyi en yüksek sesle değil, fısıltıya düşerek vurgulayın.'
    ],
    tip: '💡 İyi vurgu sadece sesi yükseltmek değil, etrafını karartıp (sesi kısıp) o hedefi parlatmaktır.',
    related: [21, 15]
  },
  {
    id: 36, cat: 'nefes', emoji: '🌊', title: 'Box Breathing (Kutu Nefesi) Tekniği',
    dur: '5 dk', level: 'Başlangıç', freq: 'Her gün',
    desc: 'Sahne korkusunu anında yok eden SEAL komandoları taktiği! Nefes Al (4s), Tut (4s), Nefes Ver (4s), Tut (4s). Sesin sakin ve merkeze yerleşik kalmasını sağlar.',
    benefits: ['Sunum öncesi anksiyeteyi sadece 3 dakikada sıfırlar', 'Mikrofonda titreyen sesi engeller', 'Kalp atış ritmini dakikalar içinde düşürür', 'Odağı artırır'],
    mistakes: ['Nefes tutarken karın kaslarını aşırı kasmak', 'Verirken dudakları tamamen kapalı tutmak', 'Sayıyı aceleyle içten ritimsiz saymak'],
    phrase: null,
    steps: [
      'Burun yoluyla, yavaşça ve karın şişirerek (diyafram) tam 4 saniyede nefes alın.',
      'Alınan nefesi diyaframı kasmadan 4 saniye akciğerde tutun.',
      'Ağız yoluyla "tsss" veya "fuuu" sesiyle 4 saniyede yavaşça bırakın.',
      'Ciğerler boşaldıktan sonra oksijensiz şekilde 4 saniye daha tutun.',
      'Bu döngüyü en az 5 tam set halinde yapın. (Nefes asistanımızdaki Box Breathing seçeneği ile pratik yapabilirsiniz!)'
    ],
    variations: [
      '🔄 5-5-5-5: Biraz daha zorlayıcı ileri seviye',
      '🔄 4-7-8 Tekniği: Al (4), Tut (7), Ver (8) — özellikle uyku/gevşeme için'
    ],
    tip: '💡 Önemli bir toplantıdan veya mikrofona çıkmadan 3 dakika önce uygulayın. Beynin "savaş ya da kaç" mekanizmasını iptal edip "güvendesin" sinyali verir.',
    related: [1, 6]
  }

];

// ── DAILY TIPS ────────────────────────────────────────────── //
const DAILY_TIPS = [
  'Her sabah 5 dakika "mmm" sesi çıkararak sesinizi ısıtın — ses teli sağlığı için kritik.',
  'Egzersizlerden önce bol su için. Ses telleri nemli ortamda çok daha iyi çalışır.',
  'Kendinizi kaydedin ve dinleyin. Kendi sesinizi duymak en hızlı öğrenme yöntemidir.',
  'Duraklamalardan korkmayın — 3 saniyelik bir sessizlik güç göstergesidir.',
  'Vurgu değiştirerek aynı cümlenin anlamını kökten dönüştürebilirsiniz.',
  'Ayna karşısında tekerleme çalışması — ağız hareketlerini görmek hızı 2 katına çıkarır.',
  'Göğüs rezonansı için her gün 2 dakika "Hmmm" sesi — derin ses profili zamanla oluşur.',
];


// ── STATE ─────────────────────────────────────────────────── //
let completed   = JSON.parse(localStorage.getItem('dr_completed') || '[]');
let activeFilter = 'all';

// ── $ HELPER ── defined globally in index.html before scripts ────── //
// const $ = id => document.getElementById(id);

// ── CATEGORY LABELS ───────────────────────────────────────── //
const CAT_LABELS = {
  nefes:'Nefes', tekerleme:'Tekerleme',
  ses:'Ses', telaffuz:'Telaffuz',
  ritim:'Ritim', vurgu:'Vurgu',
  duraklama:'Duraklama', rezonans:'Rezonans',
  okuma:'Okuma'
};

// ── LEVEL COLORS ──────────────────────────────────────────── //
const LEVEL_COLORS = {
  'Başlangıç': '#1A5C35',
  'Orta':      '#7A5800',
  'İleri':     '#7A1A3C'
};

// ── FILTER ────────────────────────────────────────────────── //
function filteredExercises() {
  if (activeFilter === 'all') return EXERCISES;
  if (activeFilter === 'arena') return [];
  return EXERCISES.filter(e => e.cat === activeFilter);
}

function setFilter(cat) {
  activeFilter = cat;
  document.querySelectorAll('.top-nav-link').forEach(l => l.classList.toggle('active', l.dataset.cat === cat));
  document.querySelectorAll('.mob-link').forEach(l => l.classList.toggle('active', l.dataset.cat === cat));
  const ac  = $('arena-container');
  const ec  = $('exercises-container');
  const ti  = $('tips-inline');
  const nc  = $('nefes-interactive-container');
  const ic  = $('interaktif-container');
  const pc  = $('programlar-container');
  const oc  = $('okuma-container');
  const bc  = $('blog-container');
  const okc = $('okunuslar-container');
  const rlc = $('rezonans-interactive-container');
  const tc  = $('teleprompter-container');

  // Hide all special containers first
  [ac, ec, ti, nc, ic, pc, oc, bc, rlc, okc, tc].forEach(el => { if (el) el.style.display = 'none'; });

  // Full-page modules: collapse left sidebar, keep right sidebar
  const pageLayout = $('page-layout');
  const fullPageModes = ['blog','teleprompter','okunuslar','okuma','programlar','arena'];
  const isFullPage = fullPageModes.includes(cat);
  if (pageLayout) pageLayout.classList.toggle('full-page-mode', isFullPage);

  if (cat === 'teleprompter') {
    if (tc) tc.style.display = 'block';
    renderTeleprompter();
  } else if (cat === 'arena') {
    if (ac) ac.style.display = 'block';
    renderArena();
  } else if (cat === 'blog') {
    if (bc) bc.style.display = 'block';
    renderBlogList();
  } else if (cat === 'okunuslar') {
    if (okc) okc.style.display = 'block';
    renderOkunuslar();
  } else if (cat === 'programlar') {
    if (pc) pc.style.display = 'block';
    renderProgramlar();
  } else if (cat === 'okuma') {
    if (oc) oc.style.display = 'block';
    renderOkuma();
  } else if (cat === 'nefes') {
    if (ec) ec.style.display = 'block';
    if (nc) Object.assign(nc.style, { display: 'block' });
    renderNefesInteractive();
    renderAll();
  } else if (cat === 'rezonans') {
    if (rlc) rlc.style.display = 'block';
    if (ec) ec.style.display = 'block';
    if (ti) ti.style.display = 'block';
    renderRezonansInteractive();
    renderAll();
  } else if (cat === 'all') {
    if (ac) ac.style.display = 'block';
    if (nc) nc.style.display = 'block';
    if (ec) ec.style.display = 'block';
    if (ti) ti.style.display = 'block';
    renderNefesInteractive();
    renderArena();
    renderAll();
  } else {
    if (ec) ec.style.display = 'block';
    if (ti) ti.style.display = 'block';
    renderAll();
  }

  // Always refresh right sidebar widgets
  renderCatWidget();
  renderDailyTip();
  renderProgressWidget();

  // Move recorder to right sidebar in full-page mode, back to left otherwise
  const recorderEl  = $('sidebar-recorder');
  const leftSidebar = document.querySelector('.sidebar');
  const rightSidebar = $('sidebar-right');
  if (recorderEl && rightSidebar && leftSidebar) {
    if (isFullPage) {
      // Move to top of right sidebar (after ad block)
      const adRight = $('ad-right-top');
      if (adRight && adRight.nextSibling) {
        rightSidebar.insertBefore(recorderEl, adRight.nextSibling);
      } else {
        rightSidebar.prepend(recorderEl);
      }
    } else {
      // Move back to left sidebar (after progress bar)
      const progress = $('sidebar-progress');
      if (progress && progress.nextSibling) {
        leftSidebar.insertBefore(recorderEl, progress.nextSibling);
      } else {
        leftSidebar.appendChild(recorderEl);
      }
    }
  }

  // Always scroll to top
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ── VOICE RECORDER (Complete Rewrite) ────────────────────── //

(function initRecorder() {
  let mediaRec = null, micStream_ = null;
  let recChunks = [], recBlob = null;
  let recSecs = 0, recInterval = null;
  let isRec = false, isPlay = false;
  let pbInterval = null;
  let analyser_ = null, animFrame = null, audioCtx_ = null;

  const btn    = $('sr-record-btn');
  const playBtn= $('sr-play-btn');
  const delBtn = $('sr-delete-btn');
  const audio  = $('sr-audio');
  const timer  = $('sr-timer');
  const note   = $('sr-note');
  const pbWrap = $('sr-playback-wrap');
  const pbBar  = $('sr-pb-bar');
  const pbCur  = $('sr-pb-cur');
  const pbDur  = $('sr-pb-dur');
  const bars   = $('sr-bars') ? $('sr-bars').querySelectorAll('span') : [];

  function fmt(s) {
    s = Math.floor(s);
    return Math.floor(s/60) + ':' + String(s%60).padStart(2,'0');
  }

  function setStatus(txt, cls='') {
    const el = $('sr-status');
    if (el) { el.textContent = txt; el.className = 'sr-status ' + cls; }
  }

  function resetBars() {
    bars.forEach(b => { b.style.height = '6px'; b.style.opacity = '.5'; });
  }

  function animateBars() {
    if (!analyser_) {
      // Fake animation when no analyser
      let t = 0;
      function step() {
        if (!isRec) { resetBars(); return; }
        bars.forEach((b, i) => {
          const h = 6 + Math.abs(Math.sin(t * 0.08 + i * 0.7)) * 34;
          b.style.height = h + 'px';
          b.style.opacity = '0.85';
        });
        t++;
        animFrame = requestAnimationFrame(step);
      }
      animFrame = requestAnimationFrame(step);
      return;
    }
    const data = new Uint8Array(analyser_.frequencyBinCount);
    function step() {
      if (!isRec) { resetBars(); return; }
      analyser_.getByteFrequencyData(data);
      bars.forEach((b, i) => {
        const idx = Math.floor(i * data.length / bars.length);
        const h = 6 + (data[idx] / 255) * 38;
        b.style.height = h + 'px';
        b.style.opacity = data[idx] > 10 ? '1' : '0.4';
      });
      animFrame = requestAnimationFrame(step);
    }
    animFrame = requestAnimationFrame(step);
  }

  function stopAnim() {
    if (animFrame) { cancelAnimationFrame(animFrame); animFrame = null; }
    resetBars();
  }

  function updatePbBar() {
    if (!audio || !audio.duration || isNaN(audio.duration)) return;
    const pct = (audio.currentTime / audio.duration) * 100;
    if (pbBar) pbBar.style.width = pct + '%';
    if (pbCur) pbCur.textContent = fmt(audio.currentTime);
  }

  function showPlayback() {
    if (pbWrap) pbWrap.style.display = 'block';
    if (audio && !isNaN(audio.duration)) {
      if (pbDur) pbDur.textContent = fmt(audio.duration);
    }
  }

  function hidePlayback() {
    if (pbWrap) pbWrap.style.display = 'none';
  }

  // ── Güvenli bağlam (HTTPS / localhost) kontrolü ──────────────
  function isSecure() {
    return window.isSecureContext ||
           location.protocol === 'https:' ||
           location.hostname === 'localhost' ||
           location.hostname === '127.0.0.1';
  }

  // Güvenli olmayan bağlamda düğmeyi devre dışı bırak ve uyarı göster
  if (!isSecure()) {
    if (btn) btn.disabled = true;
    setStatus('HTTPS gerekli', 'error');
    if (note) note.textContent = '⚠️ Ses kaydı yalnızca HTTPS bağlantısında çalışır';
  }

  // RECORD BUTTON
  if (btn) btn.addEventListener('click', async () => {
    if (isRec) {
      // Stop recording
      if (mediaRec) mediaRec.stop();
      if (micStream_) micStream_.getTracks().forEach(t => t.stop());
      clearInterval(recInterval);
      isRec = false;
      btn.innerHTML = '⏺';
      btn.classList.remove('recording');
      stopAnim();
      setStatus('İşleniyor...', '');
    } else {
      // Start recording

      // 1) Güvenli bağlam kontrolü
      if (!isSecure()) {
        showToast('❌ Ses kaydı yalnızca HTTPS bağlantısında çalışır');
        setStatus('HTTPS gerekli', 'error');
        if (note) note.textContent = '⚠️ Siteyi HTTPS üzerinden açın';
        return;
      }

      // 2) API desteği kontrolü
      if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
        showToast('❌ Tarayıcınız mikrofonu desteklemiyor. Chrome veya Firefox deneyin.');
        setStatus('Desteklenmiyor', 'error');
        if (note) note.textContent = '⚠️ Chrome/Firefox/Edge kullanın';
        return;
      }

      try {
        micStream_ = await navigator.mediaDevices.getUserMedia({ audio: true });
        recChunks = []; recBlob = null;
        if (audio) audio.src = '';
        if (playBtn) playBtn.disabled = true;
        if (delBtn) delBtn.disabled = true;
        hidePlayback();

        // Try to set up AudioContext analyser
        try {
          audioCtx_ = new (window.AudioContext || window.webkitAudioContext)();
          analyser_ = audioCtx_.createAnalyser();
          analyser_.fftSize = 64;
          const src = audioCtx_.createMediaStreamSource(micStream_);
          src.connect(analyser_);
        } catch(e) { analyser_ = null; }

        mediaRec = new MediaRecorder(micStream_);
        mediaRec.ondataavailable = e => { if (e.data.size > 0) recChunks.push(e.data); };
        mediaRec.onstop = () => {
          recBlob = new Blob(recChunks, { type: 'audio/webm' });
          const url = URL.createObjectURL(recBlob);
          if (audio) {
            audio.src = url;
            audio.onloadedmetadata = () => {
              if (pbDur) pbDur.textContent = fmt(audio.duration);
              if (pbBar) pbBar.style.width = '0%';
              if (pbCur) pbCur.textContent = '0:00';
            };
          }
          if (playBtn) playBtn.disabled = false;
          if (delBtn) delBtn.disabled = false;
          showPlayback();
          setStatus('Kayıt hazır ▶', 'ready');
          if (note) note.textContent = '▶ Dinle veya ⏺ yeniden kaydet';
          showToast('🎤 Kayıt tamamlandı! Dinlemek için ▶ tuşuna bas');
        };
        mediaRec.start();
        isRec = true;
        recSecs = 0;
        if (timer) timer.textContent = '0:00';
        btn.innerHTML = '⏹';
        btn.classList.add('recording');
        setStatus('● Kaydediliyor', 'recording');
        if (note) note.textContent = 'Kayıt devam ediyor — durdurmak için ⏹';
        animateBars();
        recInterval = setInterval(() => {
          recSecs++;
          if (timer) timer.textContent = fmt(recSecs);
        }, 1000);
      } catch (err) {
        console.error('Mikrofon hatası:', err.name, err.message);
        // 3) Farklı hata türlerine göre açıklayıcı mesaj
        if (err.name === 'NotAllowedError' || err.name === 'PermissionDeniedError') {
          setStatus('İzin reddedildi', 'error');
          if (note) note.textContent = '🔒 Tarayıcı ayarlarından mikrofon iznini etkinleştirin';
          showToast('❌ Mikrofon izni reddedildi — tarayıcı adres çubuğundaki 🔒 kilit simgesine tıklayın');
        } else if (err.name === 'NotFoundError' || err.name === 'DevicesNotFoundError') {
          setStatus('Mikrofon bulunamadı', 'error');
          if (note) note.textContent = '🎤 Cihazınıza bir mikrofon bağlı değil';
          showToast('❌ Mikrofon cihazı bulunamadı — bir mikrofon bağlayın');
        } else if (err.name === 'NotReadableError' || err.name === 'TrackStartError') {
          setStatus('Mikrofon meşgul', 'error');
          if (note) note.textContent = '⚠️ Mikrofon başka bir uygulama tarafından kullanılıyor';
          showToast('❌ Mikrofon başka bir uygulama tarafından kullanılıyor');
        } else if (err.name === 'OverconstrainedError') {
          setStatus('Ayar hatası', 'error');
          if (note) note.textContent = '⚠️ Mikrofon ayarları desteklenmiyor';
          showToast('❌ Mikrofon kısıtlaması desteklenmiyor');
        } else if (err.name === 'TypeError') {
          setStatus('HTTPS gerekli', 'error');
          if (note) note.textContent = '🔒 Ses kaydı için HTTPS bağlantısı gerekli';
          showToast('❌ Ses kaydı için siteyi HTTPS üzerinden açın');
        } else {
          setStatus('Hata oluştu', 'error');
          if (note) note.textContent = '⚠️ Mikrofon başlatılamadı: ' + (err.message || err.name);
          showToast('❌ Mikrofon hatası: ' + (err.message || err.name));
        }
      }
    }
  });

  // PLAY BUTTON
  if (playBtn) playBtn.addEventListener('click', () => {
    if (!audio || !audio.src) return;
    if (isPlay) {
      // Pause
      audio.pause();
      isPlay = false;
      playBtn.innerHTML = '▶';
      clearInterval(pbInterval);
      setStatus('Duraklatıldı', 'ready');
    } else {
      // Play from start if ended
      if (audio.ended) audio.currentTime = 0;
      audio.play().catch(e => console.error(e));
      isPlay = true;
      playBtn.innerHTML = '⏸';
      setStatus('Oynatılıyor...', 'playing');
      if (timer) timer.textContent = fmt(recSecs);
      pbInterval = setInterval(updatePbBar, 150);
    }
    audio.onended = () => {
      isPlay = false;
      playBtn.innerHTML = '▶';
      clearInterval(pbInterval);
      updatePbBar();
      setStatus('Kayıt hazır ▶', 'ready');
    };
  });

  // DELETE BUTTON
  if (delBtn) delBtn.addEventListener('click', () => {
    if (audio) { audio.pause(); audio.src = ''; }
    recBlob = null; recChunks = [];
    isPlay = false;
    clearInterval(pbInterval);
    if (playBtn) { playBtn.disabled = true; playBtn.innerHTML = '▶'; }
    if (delBtn) delBtn.disabled = true;
    if (timer) timer.textContent = '0:00';
    hidePlayback();
    if (pbBar) pbBar.style.width = '0%';
    setStatus('Hazır', '');
    if (note) note.textContent = 'İlk kaydı almak için ⏺ tuşuna basın';
    showToast('🗑 Kayıt silindi');
  });

  // Click on pb bar to seek
  const pbBarWrap = pbWrap ? pbWrap.querySelector('.sr-pb-bar-wrap') : null;
  if (pbBarWrap) {
    pbBarWrap.addEventListener('click', e => {
      if (!audio || !audio.duration || isNaN(audio.duration)) return;
      const rect = pbBarWrap.getBoundingClientRect();
      const pct = (e.clientX - rect.left) / rect.width;
      audio.currentTime = pct * audio.duration;
      updatePbBar();
    });
    pbBarWrap.style.cursor = 'pointer';
  }

})(); // end initRecorder IIFE

// ── NAV EVENT LISTENERS ───────────────────────────────────── //
document.querySelectorAll('[data-cat]').forEach(el => {
  el.addEventListener('click', e => {
    e.preventDefault();
    setFilter(el.dataset.cat);
    if (el.classList.contains('mob-link')) {
      $('hamburger').classList.remove('open');
      $('mob-nav').classList.remove('open');
    }
  });
});

$('hamburger').addEventListener('click', () => {
  $('hamburger').classList.toggle('open');
  $('mob-nav').classList.toggle('open');
});

// ── SIDEBAR LIST ──────────────────────────────────────────── //
function renderSidebarList() {
  const list = filteredExercises();
  $('sidebar-count').textContent = list.length;
  $('ex-list').innerHTML = list.map(ex => {
    const isDone = completed.includes(ex.id);
    return `
      <div class="ex-list-item ${isDone ? 'done' : ''}" id="eli-${ex.id}" data-id="${ex.id}">
        <span class="eli-text">${ex.title}</span>
        <span class="eli-dur">${ex.dur}</span>
      </div>`;
  }).join('');

  $('ex-list').querySelectorAll('.ex-list-item').forEach(item => {
    item.addEventListener('click', () => {
      const panel = $('panel-' + item.dataset.id);
      if (panel) {
        panel.scrollIntoView({ behavior: 'smooth', block: 'start' });
        document.querySelectorAll('.ex-list-item').forEach(i => i.classList.remove('active'));
        item.classList.add('active');
      }
    });
  });
}

// ── RENDER PANELS ─────────────────────────────────────────── //
function renderPanels() {
  const list = filteredExercises();
  const container = $('exercises-container');
  container.innerHTML = '';

  list.forEach((ex, i) => {
    const isDone = completed.includes(ex.id);
    const panel  = document.createElement('article');
    panel.className = `ex-panel ep-panel-${ex.cat} ${isDone ? 'done-panel' : ''}`;
    panel.id = 'panel-' + ex.id;

    // Benefits
    const benefitsHtml = ex.benefits ? `
      <div class="ep-section ep-benefits">
        <div class="ep-section-title">✅ Faydaları</div>
        <ul class="ep-benefit-list">
          ${ex.benefits.map(b => `<li>${b}</li>`).join('')}
        </ul>
      </div>` : '';

    // Phrase
    const phraseHtml = ex.phrase ? `
      <div class="ep-phrase">${ex.phrase}</div>` : '';

    // Steps
    const stepsHtml = ex.steps.map((s, idx) => `
      <div class="ep-step">
        <span class="ep-step-num">${idx + 1}</span>
        <span class="ep-step-text">${s}</span>
      </div>`).join('');

    // Mistakes
    const mistakesHtml = ex.mistakes ? `
      <div class="ep-section ep-mistakes">
        <div class="ep-section-title">⚠️ Sık Yapılan Hatalar</div>
        <ul class="ep-mistake-list">
          ${ex.mistakes.map(m => `<li>${m}</li>`).join('')}
        </ul>
      </div>` : '';

    // Variations
    const variationsHtml = ex.variations ? `
      <div class="ep-section ep-variations">
        <div class="ep-section-title">🔄 Varyasyonlar</div>
        <div class="ep-var-list">
          ${ex.variations.map(v => `<div class="ep-var-item">${v}</div>`).join('')}
        </div>
      </div>` : '';

    // Tip
    const tipHtml = ex.tip ? `<div class="ep-tip">${ex.tip}</div>` : '';

    // Related
    const relatedHtml = ex.related ? `
      <div class="ep-related">
        <span class="ep-related-label">İlgili Egzersizler:</span>
        ${ex.related.map(rid => {
          const rel = EXERCISES.find(e => e.id === rid);
          return rel ? `<span class="ep-related-chip" data-id="${rid}">${rel.emoji} ${rel.title}</span>` : '';
        }).join('')}
      </div>` : '';

    panel.innerHTML = `
      <div class="ep-header">
        <span class="ep-emoji">${ex.emoji}</span>
        <div class="ep-meta">
          <span class="ep-cat-badge badge-${ex.cat}">${CAT_LABELS[ex.cat] || ex.cat}</span>
          <h2 class="ep-title">${ex.title}</h2>
          <div class="ep-pills">
            <span class="ep-pill">⏱ ${ex.dur}</span>
            <span class="ep-pill" style="color:${LEVEL_COLORS[ex.level] || '#555'}">📊 ${ex.level}</span>
            <span class="ep-pill">📅 ${ex.freq}</span>
          </div>
        </div>
        <div class="ep-done-badge">✓ Tamamlandı</div>
      </div>
      <div class="ep-body">
        <p class="ep-desc">${ex.desc}</p>
        ${benefitsHtml}
        ${phraseHtml}
        <div class="ep-steps-title">📋 Adım Adım Uygulama</div>
        <div class="ep-steps">${stepsHtml}</div>
        ${mistakesHtml}
        ${variationsHtml}
        ${tipHtml}
        <div class="ep-footer">
          <button class="btn-done ${isDone?'done-state':''}" id="done-btn-${ex.id}" data-id="${ex.id}">
            ${isDone ? '✓ Tamamlandı' : '○ Tamamlandı İşaretle'}
          </button>
          <div class="ep-meta-pills">
            <span class="ep-meta-pill">⏱ ${ex.dur}</span>
            <span class="ep-meta-pill">📊 ${ex.level}</span>
            <span class="ep-meta-pill">📅 ${ex.freq}</span>
          </div>
        </div>
        ${relatedHtml}
      </div>`;



    container.appendChild(panel);

    // Ad every 5 panels
    if ((i + 1) % 5 === 0 && i < list.length - 1) {
      const ad = document.createElement('div');
      ad.className = 'ad-block';
      ad.innerHTML = `<span class="ad-label">Reklam</span>
        <div class="ad-placeholder ad-ph-leader">
          <div class="ad-ph-inner"><div class="ad-ph-icon">📢</div>
          <div class="ad-ph-text">Reklam Alanı — 728×90 Leaderboard</div></div>
        </div>`;
      container.appendChild(ad);
    }
  });

  // Done buttons
  document.querySelectorAll('.btn-done').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = parseInt(btn.dataset.id);
      if (completed.includes(id)) return;
      completed.push(id);
      localStorage.setItem('dr_completed', JSON.stringify(completed));
      btn.textContent = '✓ Tamamlandı';
      btn.classList.add('done-state');
      const panel = $('panel-' + id);
      if (panel) panel.classList.add('done-panel');
      const sideItem = $('eli-' + id);
      if (sideItem) sideItem.classList.add('done');
      $('done-count').textContent = completed.length;
      updateProgress();
      showToast(`🎉 "${EXERCISES.find(e=>e.id===id)?.title}" tamamlandı!`);
    });
  });

  // Related chips → scroll
  document.querySelectorAll('.ep-related-chip').forEach(chip => {
    chip.addEventListener('click', () => {
      const target = $('panel-' + chip.dataset.id);
      if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

  updateProgress();
}

// ── PROGRESS ─────────────────────────────────────────────── //
function updateProgress() {
  const total = EXERCISES.length;
  const count = completed.length;
  const pct   = total ? Math.round(count/total*100) : 0;
  $('sp-bar').style.width = pct + '%';
  $('sp-text').textContent = `${count} / ${total} tamamlandı — %${pct}`;
  $('done-count').textContent = count;
}

$('sp-reset-btn').addEventListener('click', () => {
  completed = [];
  localStorage.removeItem('dr_completed');
  renderAll();
  showToast('🔄 İlerleme sıfırlandı.');
});

// ── RENDER ALL ──────────────────────────────────── //
function renderAll() {
  renderSidebarList();
  renderPanels();
  document.querySelectorAll('.ex-panel').forEach(p => io.observe(p));
}

// ── CAT WIDGET ────────────────────────────────────────────── //
const CAT_EMOJIS = {
  nefes: '💨', tekerleme: '🔤', ses: '🔊', telaffuz: '🗣️',
  ritim: '🥁', vurgu: '⚡', duraklama: '⏸️', rezonans: '🌊'
};
function renderCatWidget() {
  const cats = [...new Set(EXERCISES.map(e => e.cat))];
  const el = $('cat-summary-widget');
  if (!el) return;
  el.innerHTML = cats.map(cat => {
    const count = EXERCISES.filter(e => e.cat === cat).length;
    const emoji = CAT_EMOJIS[cat] || '📌';
    const label = CAT_LABELS[cat] || cat;
    return `<div class="cs-item" data-cat="${cat}"><span>${emoji} ${label}</span><span class="cs-count">${count}</span></div>`;
  }).join('');
  el.querySelectorAll('.cs-item').forEach(item => item.addEventListener('click', () => setFilter(item.dataset.cat)));
}

// ── DAILY TIP ─────────────────────────────────────────────── //
function renderDailyTip() {
  const idx = new Date().getDay() % DAILY_TIPS.length;
  const el = $('daily-tip-text');
  if (el) el.innerHTML = `<span style="font-size:1.15rem;margin-right:6px;">✨</span> ${DAILY_TIPS[idx]}`;
}

// ── PROGRESS WIDGET ───────────────────────────────────────── //
function renderProgressWidget() {
  const el = $('progress-widget-body');
  if (!el) return;
  const total = EXERCISES.length;
  const done = completed.length;
  const pct = total > 0 ? Math.round((done / total) * 100) : 0;
  let msg = '🚀 Henüz başlamadınız — ilk egzersizi tamamlayın!';
  if (pct > 0 && pct < 25) msg = '💪 Harika başlangıç! Devam edin.';
  else if (pct >= 25 && pct < 50) msg = '🔥 Çeyreği geçtiniz, ivme kazanıyorsunuz!';
  else if (pct >= 50 && pct < 75) msg = '⚡ Yarıyı geçtiniz — muhteşem tempo!';
  else if (pct >= 75 && pct < 100) msg = '🏆 Neredeyse tamam — son sprint!';
  else if (pct >= 100) msg = '🎉 Tüm egzersizleri tamamladınız! Tebrikler!';

  el.innerHTML = `
    <div class="rw-prog-stat">
      <span class="rw-prog-label">Tamamlanan</span>
      <span class="rw-prog-value">${done} / ${total}</span>
    </div>
    <div class="rw-prog-bar-wrap">
      <div class="rw-prog-bar-fill" style="width:${pct}%"></div>
    </div>
    <div class="rw-prog-stat">
      <span class="rw-prog-label">İlerleme</span>
      <span class="rw-prog-value">%${pct}</span>
    </div>
    <div class="rw-prog-msg">${msg}</div>
  `;
}


// ── INTERSECTION OBSERVER ─────────────────────────────────── //
const io = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.id.replace('panel-','');
      document.querySelectorAll('.ex-list-item').forEach(i => i.classList.remove('active'));
      const si = $('eli-' + id);
      if (si) si.classList.add('active');
    }
  });
}, { rootMargin: '-30% 0px -60% 0px' });

// ── TOAST ─────────────────────────────────────────────────── //
let toastTO;
function showToast(msg) {
  const t = $('toast'); t.textContent = msg; t.classList.add('show');
  clearTimeout(toastTO);
  toastTO = setTimeout(() => t.classList.remove('show'), 3200);
}

// ═══════════════════════════════════════════════════════════
//  🎯 TEKERLEME ARENASI
// ═══════════════════════════════════════════════════════════

// Arena state
let arenaActiveLetter  = 'B';
let arenaCurrentIdx    = 0;
let arenaMode          = 'browse'; // 'browse' | 'speed'
let arenaSpeedTimer    = null;
let arenaSpeedSec      = 0;
let arenaSpeedLimit    = 30; // seconds
let arenaSessionScore  = 0;
let arenaSessionTotal  = 0;
let arenaSessionBest   = parseFloat(localStorage.getItem('dr_arena_best') || '0');

function highlightLetter(text, letter) {
  const lLower = letter.toLowerCase();
  return text.split('').map(ch => {
    if (ch.toLowerCase() === lLower)
      return `<span class="hl-char">${ch}</span>`;
    return ch;
  }).join('');
}

function fmtArenaTime(s) {
  if (s < 60) return `${s.toFixed ? s.toFixed(2) : s}s`;
  return `${Math.floor(s/60)}dk ${(s%60).toFixed(0)}s`;
}

function renderArena() {
  const ac = $('arena-container');
  if (!ac) return;

  const letters = (typeof TURKCE_ALFABE !== 'undefined') ? TURKCE_ALFABE : 
    ['A','B','C','Ç','D','E','F','G','H','I','İ','J','K','L','M','N','O','Ö','P','R','S','Ş','T','U','Ü','V','Y','Z'];

  const alphabetGridHtml = letters.map(l => {
    const count = (TEKERLEMELER[l] || []).length;
    return `<button class="alpha-btn ${l === arenaActiveLetter ? 'active' : ''}" data-letter="${l}" id="alpha-${l}">
      ${l}
      <span class="ab-count">${count}</span>
    </button>`;
  }).join('');

  // Extra arena state
  if (typeof arenaRepeatCount === 'undefined') window.arenaRepeatCount = 3;
  if (typeof arenaSpeechRate === 'undefined') window.arenaSpeechRate = 0.8;
  if (typeof arenaDifficulty === 'undefined') window.arenaDifficulty = 'normal'; // slow | normal | fast

  ac.innerHTML = `
    <div class="arena-section">
      <div class="arena-header">
        <div class="arena-title-group">
          <div class="arena-icon">A</div>
          <div class="arena-title">
            <h2>Tekerleme <span class="hl">Arenası</span></h2>
            <p>Türk alfabesinin tüm harfleri için interaktif tekerleme egzersizleri</p>
          </div>
        </div>
        <div class="arena-score-board">
          <div class="asb-item"><span class="asb-n" id="asb-score">${arenaSessionScore}</span><span class="asb-l">Puan</span></div>
          <div class="asb-item"><span class="asb-n" id="asb-total">${arenaSessionTotal}</span><span class="asb-l">Deneme</span></div>
          <div class="asb-item"><span class="asb-n" id="asb-best">${arenaSessionBest > 0 ? fmtArenaTime(arenaSessionBest) : '—'}</span><span class="asb-l">En İyi</span></div>
        </div>
      </div>

      <!-- Alphabet grid -->
      <div class="alphabet-grid" id="arena-alpha-grid">${alphabetGridHtml}</div>

      <!-- Two-column layout: main + list -->
      <div class="arena-body-grid">

        <!-- Left: main display -->
        <div class="arena-main-col">

          <!-- Nav bar -->
          <div class="arena-nav">
            <button class="arena-nav-btn" id="arena-prev" title="Önceki harf">‹</button>
            <div class="arena-nav-info" id="arena-nav-info">Harf seçin</div>
            <button class="arena-nav-btn" id="arena-next" title="Sonraki harf">›</button>
          </div>

          <!-- Tekerleme display -->
          <div class="tekerleme-display" id="tekerleme-display">
            <div class="td-letter-badge">
              <span class="tdlb-char" id="td-letter-char">${arenaActiveLetter}</span>
              <span id="td-letter-name">${arenaActiveLetter} harfi</span>
            </div>
            <div class="td-text highlight-letters" id="td-text">Yukarıdan bir harf seçin...</div>
            <div class="td-meta">
              <span class="td-num" id="td-progress">— / —</span>
              <span class="td-num" id="td-difficulty-badge"></span>
            </div>
          </div>

          <!-- Controls row -->
          <div class="arena-controls">
            <button class="arena-btn arena-btn-primary" id="arena-random">Rastgele</button>
            <button class="arena-btn arena-btn-secondary" id="arena-prev-t">‹ Önceki</button>
            <button class="arena-btn arena-btn-secondary" id="arena-next-t">Sonraki ›</button>
            <button class="arena-btn arena-btn-secondary" id="arena-listen">Sesli Dinle</button>
            <button class="arena-btn arena-btn-secondary" id="arena-speed-toggle">Hız Testi</button>
          </div>

          <!-- Settings row -->
          <div class="arena-settings-row">
            <div class="arena-setting-group">
              <span class="ars-label">Zorluk</span>
              <div class="ars-options">
                <button class="ars-opt ${(window.arenaDifficulty||'normal')==='slow'?'active':''}" data-diff="slow">Yavaş</button>
                <button class="ars-opt ${(window.arenaDifficulty||'normal')==='normal'?'active':''}" data-diff="normal">Normal</button>
                <button class="ars-opt ${(window.arenaDifficulty||'normal')==='fast'?'active':''}" data-diff="fast">Hızlı</button>
              </div>
            </div>
            <div class="arena-setting-group">
              <span class="ars-label">Tekrar</span>
              <div class="ars-options">
                <button class="ars-opt ${(window.arenaRepeatCount||3)===1?'active':''}" data-rep="1">1×</button>
                <button class="ars-opt ${(window.arenaRepeatCount||3)===3?'active':''}" data-rep="3">3×</button>
                <button class="ars-opt ${(window.arenaRepeatCount||3)===5?'active':''}" data-rep="5">5×</button>
              </div>
            </div>
            <div class="arena-setting-group">
              <span class="ars-label">Süre</span>
              <div class="ars-options">
                <button class="ars-opt ${arenaSpeedLimit===20?'active':''}" data-sec="20">20s</button>
                <button class="ars-opt ${arenaSpeedLimit===30?'active':''}" data-sec="30">30s</button>
                <button class="ars-opt ${arenaSpeedLimit===60?'active':''}" data-sec="60">60s</button>
              </div>
            </div>
          </div>

          <!-- Speed test area -->
          <div class="speed-test-area" id="speed-test-area">
            <div class="sta-label">Hız Testi — Tekerlemeyi aşağıya doğru yazın (yazmaya başlayınca süre başlar)</div>
            <div class="arena-timer">
              <span class="at-label">Süre</span>
              <span class="at-time" id="at-time">${arenaSpeedLimit}.0</span>
              <div class="at-bar-wrap"><div class="at-bar" id="at-bar"></div></div>
            </div>
            <textarea class="sta-input" id="sta-input" placeholder="Tekerlemeyi buraya yazın..."></textarea>
            <div class="sta-stats">
              <div class="sta-stat">Karakter: <strong id="sta-chars">0</strong></div>
              <div class="sta-stat">Hata: <strong id="sta-errors">0</strong></div>
              <div class="sta-stat">Doğruluk: <strong id="sta-acc">%100</strong></div>
            </div>
            <div class="accuracy-bar"><div class="accuracy-fill" id="acc-fill" style="width:100%"></div></div>
          </div>

          <!-- Result -->
          <div class="arena-result" id="arena-result">
            <span class="ar-emoji" id="ar-emoji">★</span>
            <div class="ar-grade" id="ar-grade">Harika!</div>
            <div class="ar-time" id="ar-time">süre: 0s</div>
            <div class="ar-stats">
              <div class="ar-stat"><span class="ar-stat-n" id="ar-stat-score">0</span><span class="ar-stat-l">Puan</span></div>
              <div class="ar-stat"><span class="ar-stat-n" id="ar-stat-acc">%0</span><span class="ar-stat-l">Doğruluk</span></div>
            </div>
            <div class="arena-controls" style="justify-content:center">
              <button class="arena-btn arena-btn-primary" id="ar-retry">Tekrar Dene</button>
              <button class="arena-btn arena-btn-secondary" id="ar-next-letter">Sonraki Harf ›</button>
            </div>
          </div>
        </div>

        <!-- Right: mini list of tekerlemeler -->
        <div class="arena-list-col" id="arena-list-col">
          <div class="arena-list-header">
            <span id="arena-list-title">Tekerleme Listesi</span>
            <span class="arena-list-count" id="arena-list-count">—</span>
          </div>
          <div class="arena-list-items" id="arena-list-items">
            <div class="arena-list-empty">Yukarıdan bir harf seçin</div>
          </div>
        </div>

      </div><!-- /arena-body-grid -->

      <!-- ARENA SES KAYIT WIDGET -->
      <div class="arena-recorder-widget" id="arena-recorder-widget">
        <div class="arw-header">
          <span class="arw-icon">🎤</span>
          <div>
            <div class="arw-title">Sesli Okuma Kayıt Stüdyosu</div>
            <div class="arw-sub">Tekerlemeyi okurken kendini kaydet · Dinle · Gelişimini ölç</div>
          </div>
        </div>
        <div class="arw-body">
          <!-- Visualizer -->
          <div class="arw-visualizer" id="arw-visualizer">
            <div class="arw-bars" id="arw-bars">
              ${Array(20).fill('<span></span>').join('')}
            </div>
            <div class="arw-status-text" id="arw-status">HAZIR</div>
          </div>

          <!-- Timer + Controls row -->
          <div class="arw-controls-row">
            <div class="arw-timer" id="arw-timer">0:00</div>
            <div class="arw-btns">
              <button class="arw-btn arw-rec-btn" id="arw-rec-btn" title="Kaydet / Durdur">
                <span class="arw-btn-icon">⏺</span>
                <span>Kayıt</span>
              </button>
              <button class="arw-btn arw-play-btn" id="arw-play-btn" title="Dinle" disabled>
                <span class="arw-btn-icon">▶</span>
                <span>Dinle</span>
              </button>
              <button class="arw-btn arw-del-btn" id="arw-del-btn" title="Sil" disabled>
                <span class="arw-btn-icon">🗑</span>
                <span>Sil</span>
              </button>
              <button class="arw-btn arw-dl-btn" id="arw-dl-btn" title="İndir" disabled>
                <span class="arw-btn-icon">⬇</span>
                <span>İndir</span>
              </button>
            </div>
          </div>

          <!-- Playback bar -->
          <div class="arw-pb-wrap" id="arw-pb-wrap" style="display:none">
            <div class="arw-pb-bg">
              <div class="arw-pb-fill" id="arw-pb-fill"></div>
            </div>
            <div class="arw-pb-times">
              <span id="arw-pb-cur">0:00</span>
              <span id="arw-pb-dur">0:00</span>
            </div>
          </div>

          <audio id="arw-audio" style="display:none"></audio>
          <div class="arw-note" id="arw-note">Tekerlemeyi okurken ⏺ Kayıt tuşuna bas. Bitince ▶ Dinle.</div>

          <!-- Tips row -->
          <div class="arw-tips">
            <div class="arw-tip">💡 Tekerlemeyi hızından önce doğru telaffuzla oku</div>
            <div class="arw-tip">🎯 Her kaydı öncekiyle karşılaştır — fark inanılmaz!</div>
            <div class="arw-tip">⚡ Hız testini seç, tekrar kaydı al, gelişimini görüntüle</div>
          </div>
        </div>
      </div>

    </div><!-- /arena-section -->`;


  // Wire up events
  document.querySelectorAll('.alpha-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      arenaActiveLetter = btn.dataset.letter;
      arenaCurrentIdx = 0;
      updateArenaAlphaGrid();
      showTekerlemeSel();
    });
  });

  $('arena-prev').addEventListener('click', () => {
    const idx = (typeof TURKCE_ALFABE !== 'undefined' ? TURKCE_ALFABE : letters).indexOf(arenaActiveLetter);
    if (idx > 0) {
      arenaActiveLetter = (typeof TURKCE_ALFABE !== 'undefined' ? TURKCE_ALFABE : letters)[idx - 1];
      arenaCurrentIdx = 0;
      updateArenaAlphaGrid();
      showTekerlemeSel();
    }
  });
  $('arena-next').addEventListener('click', () => {
    const L = (typeof TURKCE_ALFABE !== 'undefined' ? TURKCE_ALFABE : letters);
    const idx = L.indexOf(arenaActiveLetter);
    if (idx < L.length - 1) {
      arenaActiveLetter = L[idx + 1];
      arenaCurrentIdx = 0;
      updateArenaAlphaGrid();
      showTekerlemeSel();
    }
  });

  $('arena-random').addEventListener('click', () => {
    const list = TEKERLEMELER[arenaActiveLetter] || [];
    if (list.length === 0) return;
    arenaCurrentIdx = Math.floor(Math.random() * list.length);
    showTekerlemeSel();
    const td = $('tekerleme-display');
    if (td) { td.classList.add('pulse'); setTimeout(() => td.classList.remove('pulse'), 450); }
  });
  $('arena-prev-t').addEventListener('click', () => prevTekerleme());
  $('arena-next-t').addEventListener('click', () => nextTekerleme());
  $('arena-speed-toggle').addEventListener('click', toggleSpeedTest);

  // Sesli dinle
  $('arena-listen') && $('arena-listen').addEventListener('click', () => {
    const list = TEKERLEMELER[arenaActiveLetter] || [];
    const text = list[arenaCurrentIdx] || '';
    if (!text) return;
    const rate = window.arenaDifficulty === 'slow' ? 0.6 : window.arenaDifficulty === 'fast' ? 1.1 : 0.85;
    if ('speechSynthesis' in window) {
      const n = window.arenaRepeatCount || 1;
      let count = 0;
      const speak = () => {
        if (count >= n) return;
        count++;
        window.speechSynthesis.cancel();
        const utt = new SpeechSynthesisUtterance(text);
        utt.lang = 'tr-TR'; utt.rate = rate;
        utt.onend = () => setTimeout(speak, 600);
        window.speechSynthesis.speak(utt);
      };
      speak();
      showToast(`Dinleniyor... (${n}×)`);
    }
  });

  // Settings: difficulty
  document.querySelectorAll('[data-diff]').forEach(btn => {
    btn.addEventListener('click', () => {
      window.arenaDifficulty = btn.dataset.diff;
      document.querySelectorAll('[data-diff]').forEach(b => b.classList.toggle('active', b === btn));
      const diffMap = { slow: 'Yavaş', normal: 'Normal', fast: 'Hızlı' };
      showToast(`Zorluk: ${diffMap[btn.dataset.diff]}`);
    });
  });

  // Settings: repeat count
  document.querySelectorAll('[data-rep]').forEach(btn => {
    btn.addEventListener('click', () => {
      window.arenaRepeatCount = parseInt(btn.dataset.rep);
      document.querySelectorAll('[data-rep]').forEach(b => b.classList.toggle('active', b === btn));
      showToast(`Tekrar: ${btn.dataset.rep}×`);
    });
  });

  // Settings: speed limit
  document.querySelectorAll('[data-sec]').forEach(btn => {
    btn.addEventListener('click', () => {
      arenaSpeedLimit = parseInt(btn.dataset.sec);
      document.querySelectorAll('[data-sec]').forEach(b => b.classList.toggle('active', b === btn));
      resetSpeedTimer();
      showToast(`Süre: ${btn.dataset.sec}s`);
    });
  });

  // Speed test input
  const staInput = $('sta-input');
  if (staInput) {
    staInput.addEventListener('input', onSpeedInput);
    staInput.addEventListener('focus', () => {
      if (arenaSpeedTimer === null && arenaMode === 'speed') startSpeedTimer();
    });
  }

  $('ar-retry') && $('ar-retry').addEventListener('click', () => {
    $('arena-result').classList.remove('show');
    $('sta-input').value = '';
    resetSpeedTimer();
    $('sta-input').focus();
  });
  $('ar-next-letter') && $('ar-next-letter').addEventListener('click', () => {
    $('arena-result').classList.remove('show');
    const L = (typeof TURKCE_ALFABE !== 'undefined' ? TURKCE_ALFABE : letters);
    const idx = L.indexOf(arenaActiveLetter);
    if (idx < L.length - 1) {
      arenaActiveLetter = L[idx + 1];
      arenaCurrentIdx = 0;
      updateArenaAlphaGrid();
      showTekerlemeSel();
    }
    if (arenaMode === 'speed') {
      $('sta-input').value = '';
      resetSpeedTimer();
    }
  });

  // Initial display
  showTekerlemeSel();

  // Add swipe support for mobile
  const tdEl = $('tekerleme-display');
  if (tdEl) {
    let touchStartX = 0;
    tdEl.addEventListener('touchstart', e => {
      touchStartX = e.changedTouches[0].screenX;
    });
    tdEl.addEventListener('touchend', e => {
      const touchEndX = e.changedTouches[0].screenX;
      if (touchEndX < touchStartX - 50) {
        nextTekerleme(); // Swipe left -> next
      }
      if (touchEndX > touchStartX + 50) {
        prevTekerleme(); // Swipe right -> prev
      }
    });
  }

  // ── Arena Ses Kaydı Widget ──────────────────────────────
  _initArenaRecorder();
}

function _initArenaRecorder() {
  const recBtn  = $('arw-rec-btn');
  const playBtn = $('arw-play-btn');
  const delBtn  = $('arw-del-btn');
  const dlBtn   = $('arw-dl-btn');
  const audio   = $('arw-audio');
  const timer   = $('arw-timer');
  const note    = $('arw-note');
  const pbWrap  = $('arw-pb-wrap');
  const pbFill  = $('arw-pb-fill');
  const pbCur   = $('arw-pb-cur');
  const pbDur   = $('arw-pb-dur');
  const bars    = $('arw-bars') ? $('arw-bars').querySelectorAll('span') : [];
  const status  = $('arw-status');

  if (!recBtn) return;

  let arwMediaRec = null, arwStream = null, arwChunks = [], arwBlob = null;
  let arwIsRec = false, arwIsPlay = false, arwSecs = 0, arwInterval = null;
  let arwAudioCtx = null, arwAnalyser = null, arwAnimFrame = null, arwPbInterval = null;

  function arwSetStatus(txt, cls) {
    if (status) { status.textContent = txt; status.className = 'arw-status-text ' + (cls || ''); }
  }
  function arwFmt(s) { s = Math.floor(s); return Math.floor(s/60)+':'+String(s%60).padStart(2,'0'); }

  function arwStopViz() {
    if (arwAnimFrame) { cancelAnimationFrame(arwAnimFrame); arwAnimFrame = null; }
    bars.forEach(b => { b.style.height = '5px'; b.style.opacity = '0.5'; });
  }

  function arwDrawBars() {
    if (!arwAnalyser || !arwIsRec) return;
    const data = new Uint8Array(arwAnalyser.frequencyBinCount);
    arwAnalyser.getByteFrequencyData(data);
    const step = Math.floor(data.length / bars.length);
    bars.forEach((b, i) => {
      const val = data[i * step] || 0;
      const h = Math.max(5, Math.min(50, (val / 255) * 50));
      b.style.height = h + 'px';
      b.style.opacity = '1';
    });
    arwAnimFrame = requestAnimationFrame(arwDrawBars);
  }

  recBtn.addEventListener('click', async () => {
    if (!arwIsRec) {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        arwStream = stream;
        arwAudioCtx = new (window.AudioContext || window.webkitAudioContext)();
        const src = arwAudioCtx.createMediaStreamSource(stream);
        arwAnalyser = arwAudioCtx.createAnalyser();
        arwAnalyser.fftSize = 64;
        src.connect(arwAnalyser);

        arwChunks = [];
        const mr = new MediaRecorder(stream, { mimeType: MediaRecorder.isTypeSupported('audio/webm') ? 'audio/webm' : '' });
        arwMediaRec = mr;
        mr.ondataavailable = e => { if (e.data.size > 0) arwChunks.push(e.data); };
        mr.onstop = () => {
          arwBlob = new Blob(arwChunks, { type: 'audio/webm' });
          const url = URL.createObjectURL(arwBlob);
          if (audio) { audio.src = url; audio.load(); }
          if (playBtn) playBtn.disabled = false;
          if (delBtn) delBtn.disabled = false;
          if (dlBtn) dlBtn.disabled = false;
          if (pbWrap) pbWrap.style.display = 'flex';
          arwSetStatus('HAZIR', 'arw-ready');
          if (note) note.textContent = '▶ Dinle tuşuna bas · 🗑 Sil · ⬇ İndir';
          showToast('🎤 Kayıt tamamlandı! Dinleyin.');
        };
        mr.start(100);
        arwIsRec = true; arwSecs = 0;
        recBtn.classList.add('recording');
        recBtn.querySelector('.arw-btn-icon').textContent = '⏹';
        arwSetStatus('KAYDEDİLİYOR', 'arw-recording');
        if (note) note.textContent = 'Kaydediliyor... Durdurmak için tekrar ⏹ bas';
        arwInterval = setInterval(() => {
          arwSecs++;
          if (timer) timer.textContent = arwFmt(arwSecs);
        }, 1000);
        arwDrawBars();
      } catch(err) {
        arwSetStatus('HATA', 'arw-error');
        if (note) note.textContent = '❌ Mikrofon erişimi reddedildi. Tarayıcı izinlerini kontrol edin.';
      }
    } else {
      arwIsRec = false;
      if (arwInterval) { clearInterval(arwInterval); arwInterval = null; }
      if (arwMediaRec && arwMediaRec.state !== 'inactive') arwMediaRec.stop();
      if (arwStream) { arwStream.getTracks().forEach(t => t.stop()); arwStream = null; }
      arwStopViz();
      recBtn.classList.remove('recording');
      recBtn.querySelector('.arw-btn-icon').textContent = '⏺';
    }
  });

  if (playBtn) {
    playBtn.addEventListener('click', () => {
      if (!audio || !arwBlob) return;
      if (!arwIsPlay) {
        audio.play();
        arwIsPlay = true;
        playBtn.querySelector('.arw-btn-icon').textContent = '⏸';
        arwSetStatus('OYNATILIYOR', 'arw-playing');
        if (pbWrap) pbWrap.style.display = 'flex';
        arwPbInterval = setInterval(() => {
          if (audio.duration && pbFill) {
            const pct = (audio.currentTime / audio.duration) * 100;
            pbFill.style.width = pct + '%';
            if (pbCur) pbCur.textContent = arwFmt(audio.currentTime);
            if (pbDur) pbDur.textContent = arwFmt(audio.duration);
          }
        }, 100);
        audio.onended = () => {
          arwIsPlay = false;
          playBtn.querySelector('.arw-btn-icon').textContent = '▶';
          if (arwPbInterval) clearInterval(arwPbInterval);
          arwSetStatus('HAZIR', 'arw-ready');
        };
      } else {
        audio.pause();
        arwIsPlay = false;
        playBtn.querySelector('.arw-btn-icon').textContent = '▶';
        if (arwPbInterval) clearInterval(arwPbInterval);
        arwSetStatus('HAZIR', 'arw-ready');
      }
    });
  }

  if (delBtn) {
    delBtn.addEventListener('click', () => {
      if (audio) { audio.pause(); audio.src = ''; }
      arwBlob = null; arwChunks = []; arwSecs = 0; arwIsPlay = false;
      if (timer) timer.textContent = '0:00';
      if (pbWrap) pbWrap.style.display = 'none';
      if (pbFill) pbFill.style.width = '0%';
      if (playBtn) { playBtn.disabled = true; playBtn.querySelector('.arw-btn-icon').textContent = '▶'; }
      if (delBtn) delBtn.disabled = true;
      if (dlBtn) dlBtn.disabled = true;
      arwSetStatus('HAZIR', '');
      if (note) note.textContent = 'Tekerlemeyi okurken ⏺ Kayıt tuşuna bas. Bitince ▶ Dinle.';
      arwStopViz();
    });
  }

  if (dlBtn) {
    dlBtn.addEventListener('click', () => {
      if (!arwBlob) return;
      const url = URL.createObjectURL(arwBlob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `arena_tekerleme_${arenaActiveLetter}_${Date.now()}.webm`;
      a.click();
      URL.revokeObjectURL(url);
    });
  }
}

function updateArenaAlphaGrid() {
  document.querySelectorAll('.alpha-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.letter === arenaActiveLetter);
  });
}

function showTekerlemeSel() {
  const list = TEKERLEMELER[arenaActiveLetter] || [];
  const text = list[arenaCurrentIdx] || 'Bu harf için tekerleme bulunamadı.';

  const tdLetterChar = $('td-letter-char');
  const tdLetterName = $('td-letter-name');
  const tdText = $('td-text');
  const tdProgress = $('td-progress');
  const navInfo = $('arena-nav-info');
  const diffBadge = $('td-difficulty-badge');

  if (tdLetterChar) tdLetterChar.textContent = arenaActiveLetter;
  if (tdLetterName) tdLetterName.textContent = `${arenaActiveLetter} harfi — ${list.length} tekerleme`;
  if (tdText) {
    tdText.classList.add('highlight-letters');
    tdText.innerHTML = highlightLetter(text, arenaActiveLetter);
  }
  if (tdProgress) tdProgress.textContent = `${arenaCurrentIdx + 1} / ${list.length}`;
  if (navInfo) navInfo.textContent = `${arenaActiveLetter} — ${list.length} tekerleme`;
  if (diffBadge) {
    const diffMap = { slow: 'Yavaş', normal: 'Normal', fast: 'Hızlı' };
    diffBadge.textContent = diffMap[window.arenaDifficulty || 'normal'];
  }

  // Update list panel
  updateArenaList();

  // Update speed test input placeholder
  const staInput = $('sta-input');
  if (staInput) {
    staInput.placeholder = text.substring(0, 60) + (text.length > 60 ? '...' : '');
    staInput.value = '';
    updateSpeedStats('', text);
  }
  if (arenaMode === 'speed') resetSpeedTimer();
}

function updateArenaList() {
  const listItems = $('arena-list-items');
  const listCount = $('arena-list-count');
  const listTitle = $('arena-list-title');
  if (!listItems) return;

  const list = TEKERLEMELER[arenaActiveLetter] || [];
  if (listCount) listCount.textContent = list.length;
  if (listTitle) listTitle.textContent = `${arenaActiveLetter} Harfi`;

  if (list.length === 0) {
    listItems.innerHTML = '<div class="arena-list-empty">Bu harf için tekerleme yok</div>';
    return;
  }

  listItems.innerHTML = list.map((t, i) => `
    <div class="arena-list-item ${i === arenaCurrentIdx ? 'active' : ''}" data-aidx="${i}">
      <span class="ali-num">${i + 1}</span>
      <span class="ali-text">${t.length > 60 ? t.substring(0, 58) + '…' : t}</span>
    </div>
  `).join('');

  // Click to select
  listItems.querySelectorAll('.arena-list-item').forEach(el => {
    el.addEventListener('click', () => {
      arenaCurrentIdx = parseInt(el.dataset.aidx);
      showTekerlemeSel();
    });
  });

  // Scroll active into view
  const activeEl = listItems.querySelector('.arena-list-item.active');
  if (activeEl) activeEl.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
}

function nextTekerleme() {
  const list = TEKERLEMELER[arenaActiveLetter] || [];
  arenaCurrentIdx = (arenaCurrentIdx + 1) % list.length;
  showTekerlemeSel();
}
function prevTekerleme() {
  const list = TEKERLEMELER[arenaActiveLetter] || [];
  arenaCurrentIdx = (arenaCurrentIdx - 1 + list.length) % list.length;
  showTekerlemeSel();
}

function toggleSpeedTest() {
  const sta = $('speed-test-area');
  if (!sta) return;
  const isActive = sta.classList.toggle('active');
  arenaMode = isActive ? 'speed' : 'browse';
  const btn = $('arena-speed-toggle');
  if (btn) btn.textContent = isActive ? '❌ Hız Testini Kapat' : '⏱ Hız Testi';
  if (!isActive) resetSpeedTimer();
}

function startSpeedTimer() {
  const bar = $('at-bar');
  const timeEl = $('at-time');
  if (bar) bar.classList.add('running');
  if (timeEl) timeEl.classList.add('running');
  arenaSpeedSec = arenaSpeedLimit;
  arenaSpeedTimer = setInterval(() => {
    arenaSpeedSec -= 0.1;
    if (arenaSpeedSec <= 0) arenaSpeedSec = 0;
    const pct = (arenaSpeedSec / arenaSpeedLimit) * 100;
    if (bar) bar.style.width = pct + '%';
    if (timeEl) timeEl.textContent = arenaSpeedSec.toFixed(1) + 's';
    if (arenaSpeedSec <= 0) {
      clearInterval(arenaSpeedTimer); arenaSpeedTimer = null;
      timeExpired();
    }
  }, 100);
}

function resetSpeedTimer() {
  if (arenaSpeedTimer) { clearInterval(arenaSpeedTimer); arenaSpeedTimer = null; }
  arenaSpeedSec = arenaSpeedLimit;
  const bar = $('at-bar'); const timeEl = $('at-time');
  if (bar) { bar.style.width = '100%'; bar.classList.remove('running'); }
  if (timeEl) { timeEl.textContent = arenaSpeedLimit.toFixed(1) + 's'; timeEl.classList.remove('running'); }
}

function timeExpired() {
  const staInput = $('sta-input');
  const tekerText = (TEKERLEMELER[arenaActiveLetter] || [])[arenaCurrentIdx] || '';
  const typed = staInput ? staInput.value : '';
  const { acc, errors } = calcAccuracy(typed, tekerText);
  showArenaResult(arenaSpeedLimit, acc, errors, true);
}

function calcAccuracy(typed, target) {
  const tl = Math.max(target.length, 1);
  let errors = 0;
  const minLen = Math.min(typed.length, target.length);
  for (let i = 0; i < minLen; i++) {
    if (typed[i] !== target[i]) errors++;
  }
  errors += Math.abs(typed.length - target.length);
  const acc = Math.max(0, Math.round((1 - errors / tl) * 100));
  return { acc, errors };
}

function onSpeedInput() {
  if (arenaSpeedTimer === null && arenaMode === 'speed') startSpeedTimer();
  const staInput = $('sta-input');
  const tekerText = (TEKERLEMELER[arenaActiveLetter] || [])[arenaCurrentIdx] || '';
  const typed = staInput ? staInput.value : '';
  updateSpeedStats(typed, tekerText);
  // Auto-complete detection
  if (typed.trim() === tekerText.trim() && typed.length > 3) {
    const elapsed = arenaSpeedLimit - arenaSpeedSec;
    clearInterval(arenaSpeedTimer); arenaSpeedTimer = null;
    const { acc, errors } = calcAccuracy(typed, tekerText);
    showArenaResult(elapsed, acc, errors, false);
  }
}

function updateSpeedStats(typed, target) {
  const chars = $('sta-chars'); const errEl = $('sta-errors'); const accEl = $('sta-acc'); const accFill = $('acc-fill');
  const { acc, errors } = calcAccuracy(typed, target);
  if (chars) chars.textContent = typed.length;
  if (errEl) errEl.textContent = errors;
  if (accEl) accEl.textContent = `%${acc}`;
  if (accFill) {
    accFill.style.width = acc + '%';
    const pos = (acc / 100) * 100;
    accFill.style.backgroundPosition = (100 - pos) + '% 0';
  }
}

function showArenaResult(elapsed, acc, errors, expired) {
  const elapsedFixed = typeof elapsed === 'number' ? elapsed.toFixed(2) : elapsed;
  const score = Math.round(acc * (expired ? 0.5 : 1) * (100 / Math.max(parseFloat(elapsedFixed), 1)));
  arenaSessionScore += score;
  arenaSessionTotal++;

  if (!expired && parseFloat(elapsedFixed) > 0) {
    if (arenaSessionBest === 0 || parseFloat(elapsedFixed) < arenaSessionBest) {
      arenaSessionBest = parseFloat(elapsedFixed);
      localStorage.setItem('dr_arena_best', arenaSessionBest);
    }
  }

  const result = $('arena-result');
  if (!result) return;

  let emoji = '★'; let grade = 'Mükemmel!';
  if (acc >= 95 && !expired) { emoji = '★★★'; grade = 'Mükemmel!'; }
  else if (acc >= 80) { emoji = '★★'; grade = 'Harika!'; }
  else if (acc >= 60) { emoji = '★'; grade = 'İyi!'; }
  else if (expired) { emoji = '⧖'; grade = 'Süre Doldu!'; }
  else { emoji = '△'; grade = 'Devam Et!'; }

  const arEmoji = $('ar-emoji'); const arGrade = $('ar-grade'); const arTime = $('ar-time');
  const arStatScore = $('ar-stat-score'); const arStatAcc = $('ar-stat-acc');
  const asbScore = $('asb-score'); const asbTotal = $('asb-total');

  if (arEmoji) arEmoji.textContent = emoji;
  if (arGrade) arGrade.textContent = grade;
  if (arTime) arTime.textContent = expired ? 'Süre doldu!' : `Süre: ${elapsedFixed}s`;
  if (arStatScore) arStatScore.textContent = score;
  if (arStatAcc) arStatAcc.textContent = `%${acc}`;
  if (asbScore) asbScore.textContent = arenaSessionScore;
  if (asbTotal) asbTotal.textContent = arenaSessionTotal;

  result.classList.add('show');
  showToast(`${grade} — ${score} puan!`);

  // Add confetti for good scores
  if (acc >= 90 && !expired) {
    createConfetti();
  }
}

function createConfetti() {
  for (let i = 0; i < 40; i++) {
    const el = document.createElement('div');
    el.className = 'confetti';
    el.style.left = Math.random() * 100 + 'vw';
    el.style.backgroundColor = ['#FFD700', '#F87171', '#4ADE80', '#60A5FA'][Math.floor(Math.random() * 4)];
    el.style.animationDuration = (Math.random() * 1 + 1) + 's';
    document.body.appendChild(el);
    setTimeout(() => el.remove(), 2000);
  }
}

// ─── PER-LETTER TEKERLEME PANELS ──────────────────────────── //
// Build dynamic EXERCISES from TEKERLEMELER db
const LETTER_EXERCISE_CATS = {};

if (typeof TEKERLEMELER !== 'undefined' && typeof TURKCE_ALFABE !== 'undefined') {
  TURKCE_ALFABE.forEach(letter => {
    const list = TEKERLEMELER[letter] || [];
    if (list.length === 0) return;
    LETTER_EXERCISE_CATS[letter] = {
      letter,
      title: `${letter} Harfi Tekerlemeleri`,
      count: list.length,
      teks: list
    };
  });
}

function renderLetterPanel(letterDef) {
  const { letter, title, count, teks } = letterDef;
  const panelId = `lp-${letter}`;

  const panel = document.createElement('article');
  panel.className = 'ex-panel tekerleme-ep ep-panel-tekerleme';
  panel.id = panelId;
  panel.style.scrollMarginTop = `calc(var(--nav-h) + 16px)`;

  const tekerHtml = teks.map((t, i) => `
    <div class="teker-item" id="ti-${letter}-${i}" data-idx="${i}" data-letter="${letter}">
      <span class="teker-num">${i + 1}</span>
      <span class="teker-text">${t}</span>
      <div class="teker-actions">
        <button class="teker-action-btn" title="Sesli oku" onclick="speakTeker(event, '${t.replace(/'/g, "&#39;")}', '${letter}', ${i})">&#9654;</button>
        <button class="teker-action-btn" title="Kopyala" onclick="copyTeker(event, '${t.replace(/'/g, "&#39;")}')">&#10064;</button>
      </div>
    </div>`).join('');

  panel.innerHTML = `
    <div class="ep-letter-header">
      <div class="ep-letter-char">${letter}</div>
      <div class="ep-letter-info">
        <h2>${title}</h2>
        <p>${count} tekerleme &mdash; tıklayarak sesli okuyun</p>
      </div>
      <div class="ep-letter-actions">
        <button class="ep-letter-action-btn primary" onclick="openArenaForLetter('${letter}')">
          Arenada Oyna
        </button>
        <button class="ep-letter-action-btn secondary" onclick="randomTeker('${letter}')">
          Rastgele
        </button>
      </div>
    </div>
    <div class="ep-body">
      <div class="ep-tekerlemeler">${tekerHtml}</div>
      <div class="ep-footer">
        <button class="arena-btn arena-btn-primary" style="background:linear-gradient(135deg,var(--gold-d),var(--gold));color:var(--primary);border-radius:99px;padding:10px 22px" onclick="openArenaForLetter('${letter}')">
          Bu Harfi Arenada Dene
        </button>
      </div>
    </div>`;

  // Wire up teker item click to highlight
  return panel;
}



window.speakTeker = function(e, text, letter, idx) {
  e.stopPropagation();
  // Visual speaking state
  document.querySelectorAll('.teker-item.speaking').forEach(el => el.classList.remove('speaking'));
  const el = document.getElementById(`ti-${letter}-${idx}`);
  if (el) el.classList.add('speaking');
  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel();
    const utt = new SpeechSynthesisUtterance(text);
    utt.lang = 'tr-TR'; utt.rate = 0.8;
    utt.onend = () => { if (el) el.classList.remove('speaking'); };
    window.speechSynthesis.speak(utt);
  } else {
    setTimeout(() => { if (el) el.classList.remove('speaking'); }, 2000);
  }
};

window.copyTeker = function(e, text) {
  e.stopPropagation();
  navigator.clipboard && navigator.clipboard.writeText(text).then(() => showToast('📋 Kopyalandı!')).catch(() => {});
};

window.openArenaForLetter = function(letter) {
  arenaActiveLetter = letter;
  arenaCurrentIdx = 0;
  setFilter('arena');
};

window.randomTeker = function(letter) {
  const list = TEKERLEMELER[letter] || [];
  if (list.length === 0) return;
  const idx = Math.floor(Math.random() * list.length);
  const el = document.getElementById(`ti-${letter}-${idx}`);
  if (el) {
    document.querySelectorAll('.teker-item.speaking').forEach(x => x.classList.remove('speaking'));
    el.classList.add('speaking');
    el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utt = new SpeechSynthesisUtterance(list[idx]);
      utt.lang = 'tr-TR'; utt.rate = 0.8;
      utt.onend = () => el.classList.remove('speaking');
      window.speechSynthesis.speak(utt);
    } else {
      setTimeout(() => el.classList.remove('speaking'), 2500);
    }
  }
};

// ── NEFES INTERACTIVE APPLET ──────────────────────────────── //
let nefesState = 'idle'; // idle | inhale | hold1 | exhale | hold2
let nefesTimerId = null;
let nefesSeconds = 0;
let nefesTotalTime = 0;
// modes: 4-4-4-4 (box), 4-7-8, diag (4-2-6)
const NEFES_MODES = {
  box: { name: 'Box Breathing (Kutu)', in: 4, h1: 4, out: 4, h2: 4 },
  deep: { name: '4-7-8 (Gevşeme)', in: 4, h1: 7, out: 8, h2: 0 },
  diag: { name: 'Diyafram (4-2-6)', in: 4, h1: 2, out: 6, h2: 0 }
};
let nefesCurrentMode = 'box';

function renderNefesInteractive() {
  const nc = $('nefes-interactive-container');
  if (!nc) return;

  const bHTML = `
    <div class="nefes-section">
      <div class="nefes-header">
        <h2>Interaktif <span class="hl">Nefes Asistanı</span></h2>
        <p>Ses ve stres kontrolü için ritmik diyafram nefesi döngüsü</p>
      </div>

      <div class="nefes-controls">
        <button class="n-btn ${nefesCurrentMode === 'box' ? 'active' : ''}" onclick="setNefesMode('box')">Kutu Nefesi</button>
        <button class="n-btn ${nefesCurrentMode === 'diag' ? 'active' : ''}" onclick="setNefesMode('diag')">Diyafram Akışı</button>
        <button class="n-btn ${nefesCurrentMode === 'deep' ? 'active' : ''}" onclick="setNefesMode('deep')">4-7-8 Rahatlama</button>
      </div>

      <div class="breathing-circle-wrapper">
        <div class="breathing-ring"></div>
        <div class="breathing-circle" id="b-circle"></div>
        <div class="breathing-text-wrapper">
          <div class="b-action-text" id="b-action">HAZIR</div>
          <div class="b-timer-text" id="b-timer">—</div>
        </div>
      </div>

      <div class="nefes-action-row">
        <button class="nefes-start-btn" id="n-start-btn" onclick="toggleNefes()">BAŞLAT</button>
      </div>

      <div class="nefes-instructions">
        Dik oturun veya uzanın. Sırtınızı rahatlatın.<br/>
        Bu araç, profesyonel ses sanatçılarının ve SEAL komandolarının nabız düşürmek ve odaklanmak için kullandığı ritmleri simüle eder.
      </div>
    </div>
  `;
  // Avoid re-rendering if already playing
  if (nefesState === 'idle' || nc.innerHTML === '') {
    nc.innerHTML = bHTML;
  }
}

window.setNefesMode = function(mode) {
  if (nefesState !== 'idle') window.toggleNefes(); // stop current
  nefesCurrentMode = mode;
  renderNefesInteractive();
};

window.toggleNefes = function() {
  const btn = $('n-start-btn');
  if (nefesState === 'idle') {
    nefesState = 'inhale';
    nefesTotalTime = 0;
    if (btn) btn.textContent = 'DURDUR';
    $('b-action').style.color = '#fff';
    runNefesCycle();
  } else {
    nefesState = 'idle';
    if (nefesTimerId) clearTimeout(nefesTimerId);
    if (btn) btn.textContent = 'BAŞLAT';
    const circ = $('b-circle');
    if (circ) { circ.style.transform = 'scale(1)'; circ.style.transition = 'transform 0.5s ease-out'; }
    const act = $('b-action'); if (act) { act.textContent = 'HAZIR'; act.style.color = '#fff'; }
    const t = $('b-timer'); if (t) t.textContent = '—';
  }
}

function runNefesCycle() {
  if (nefesState === 'idle') return;
  const cfg = NEFES_MODES[nefesCurrentMode];
  const circ = $('b-circle');
  const act = $('b-action');
  const timeEl = $('b-timer');
  let cycleTime = 0;

  if (nefesState === 'inhale') {
    act.textContent = 'NEFES AL'; act.style.color = '#4ADE80';
    cycleTime = cfg.in;
    if (circ) { circ.style.transition = `transform ${cycleTime}s cubic-bezier(0.4, 0, 0.2, 1)`; circ.style.transform = 'scale(2.2)'; }
    nefesSeconds = cycleTime;
  } else if (nefesState === 'hold1') {
    act.textContent = 'TUT'; act.style.color = '#FBBF24';
    cycleTime = cfg.h1;
    if (circ) { circ.style.transition = 'none'; circ.style.transform = 'scale(2.2)'; }
    nefesSeconds = cycleTime;
  } else if (nefesState === 'exhale') {
    act.textContent = 'NEFES VER'; act.style.color = '#60A5FA';
    cycleTime = cfg.out;
    if (circ) { circ.style.transition = `transform ${cycleTime}s cubic-bezier(0.4, 0, 0.2, 1)`; circ.style.transform = 'scale(1)'; }
    nefesSeconds = cycleTime;
  } else if (nefesState === 'hold2') {
    act.textContent = 'TUT'; act.style.color = '#FBBF24';
    cycleTime = cfg.h2;
    if (circ) { circ.style.transition = 'none'; circ.style.transform = 'scale(1)'; }
    nefesSeconds = cycleTime;
  }

  timeEl.textContent = nefesSeconds;
  let intervalCount = 0;
  
  const tickInterval = setInterval(() => {
    intervalCount++;
    nefesSeconds--;
    if (timeEl) timeEl.textContent = Math.max(0, nefesSeconds);
    if (intervalCount >= cycleTime) {
      clearInterval(tickInterval);
      if (nefesState === 'idle') return;
      if (nefesState === 'inhale') nefesState = cfg.h1 > 0 ? 'hold1' : 'exhale';
      else if (nefesState === 'hold1') nefesState = 'exhale';
      else if (nefesState === 'exhale') nefesState = cfg.h2 > 0 ? 'hold2' : 'inhale';
      else if (nefesState === 'hold2') nefesState = 'inhale';
      runNefesCycle();
    }
  }, 1000);

  nefesTimerId = tickInterval;
}

// ── RENDER ALL ────────────────────────────────────────────── //
function renderAll() { renderSidebarList(); renderPanels(); renderLetterPanels(); renderCatWidget(); renderProgressWidget(); }

function renderLetterPanels() {
  const container = $('exercises-container');
  if (!container) return;
  // Remove old letter panels first
  container.querySelectorAll('.tekerleme-ep').forEach(el => el.remove());

  // Only show letter panels in 'tekerleme' or 'all' filter
  if (activeFilter !== 'tekerleme' && activeFilter !== 'all') return;

  const fragment = document.createDocumentFragment();
  if (typeof LETTER_EXERCISE_CATS !== 'undefined') {
    Object.values(LETTER_EXERCISE_CATS).forEach(def => {
      fragment.appendChild(renderLetterPanel(def));
    });
  }
  container.appendChild(fragment);

  // Wire up teker item clicks for sequential reading
  container.querySelectorAll('.teker-item').forEach(item => {
    item.addEventListener('click', function(e) {
      if (e.target.closest('.teker-action-btn')) return;
      const letter = this.dataset.letter;
      const idx = parseInt(this.dataset.idx);
      const text = (TEKERLEMELER[letter] || [])[idx] || '';
      if (text) window.speakTeker(e, text, letter, idx);
    });
  });
}


// ── INIT ──────────────────────────────────────────────────── //
setFilter(activeFilter);
updateProgress();
renderDailyTip();
setTimeout(() => document.querySelectorAll('.ex-panel').forEach(p => io.observe(p)), 200);

// ═══════════════════════════════════════════════════════════
//  🎮 İNTERAKTİF EGZERSİZLER
// ═══════════════════════════════════════════════════════════

function renderInteraktif() {
  const ic = $('interaktif-container');
  if (!ic) return;

  ic.innerHTML = `
  <div class="iakt-section">
    <div class="iakt-header">
      <h2>🎮 İnteraktif <span class="hl">Egzersizler</span></h2>
      <p>Gamified diksiyon oyunları — anında geri bildirim ile hızlı gelişim</p>
    </div>

    <!-- 1. NEFES TIMER -->
    <div class="iakt-card" id="igame-nefes">
      <div class="iakt-card-header">
        <span class="iakt-icon">💨</span>
        <div>
          <div class="iakt-title">Nefes Dayanıklılık Yarışması</div>
          <div class="iakt-sub">Tek nefeste ne kadar süre ses çıkarabiliyorsun?</div>
        </div>
        <span class="iakt-badge">Başlangıç</span>
      </div>
      <div class="iakt-content">
        <div style="text-align:center;margin-bottom:16px;">
          <div class="breath-timer-display" id="bt-display">0.0s</div>
          <div class="breath-timer-label" id="bt-label">Başlatmak için butona bas, nefes alıp "Ssss" yap</div>
        </div>
        <div style="display:flex;gap:10px;justify-content:center;flex-wrap:wrap;">
          <button class="iakt-btn iakt-btn-primary" id="bt-start-btn">⏱ Başlat</button>
          <button class="iakt-btn iakt-btn-secondary" id="bt-reset-btn">↺ Sıfırla</button>
        </div>
        <div class="bt-records" id="bt-records"></div>
        <div style="margin-top:12px;font-size:.78rem;color:var(--text-3);text-align:center;">
          💡 Hedef: 15+ saniye. Profesyoneller 25-30 saniyeye ulaşır.
        </div>
      </div>
    </div>

    <!-- 2. TEKERLEME HIZ TESTI -->
    <div class="iakt-card" id="igame-speed">
      <div class="iakt-card-header">
        <span class="iakt-icon">⚡</span>
        <div>
          <div class="iakt-title">Tekerleme Hız & Doğruluk Testi</div>
          <div class="iakt-sub">Tekerlemeleri sıra sıra oku, puanını artır!</div>
        </div>
        <span class="iakt-badge iakt-badge-gold">Orta</span>
      </div>
      <div class="iakt-content">
        <div class="speed-challenge-display" id="scd-display">
          <div class="scd-sentence" id="scd-sentence">Başla tuşuna basın...</div>
          <div class="scd-meta" id="scd-meta"></div>
        </div>
        <div class="scd-input-wrap">
          <input type="text" class="scd-input" id="scd-input" placeholder="Tekerlemeyi yazın..." disabled />
        </div>
        <div class="scd-stats-row">
          <div class="scd-stat"><span id="scd-score">0</span><small>Puan</small></div>
          <div class="scd-stat"><span id="scd-streak">0</span><small>Seri</small></div>
          <div class="scd-stat"><span id="scd-acc">%100</span><small>Doğruluk</small></div>
        </div>
        <div style="display:flex;gap:10px;justify-content:center;margin-top:12px;flex-wrap:wrap;">
          <button class="iakt-btn iakt-btn-primary" id="scd-start-btn">▶ Başla</button>
          <button class="iakt-btn iakt-btn-secondary" id="scd-skip-btn" disabled>→ Atla</button>
        </div>
      </div>
    </div>

    <!-- 3. ÜNLÜ UYUMU BULMACASI -->
    <div class="iakt-card" id="igame-unlu">
      <div class="iakt-card-header">
        <span class="iakt-icon">🔤</span>
        <div>
          <div class="iakt-title">Ünlü Harmoni Bulmacası</div>
          <div class="iakt-sub">Türkçe ünlüleri doğru sırayla söyle</div>
        </div>
        <span class="iakt-badge">Başlangıç</span>
      </div>
      <div class="iakt-content">
        <div class="vowel-grid" id="vowel-grid">
          ${['A','E','I','İ','O','Ö','U','Ü'].map((v,i) =>
            `<button class="vowel-btn" data-v="${v}" id="vb-${i}">${v}</button>`
          ).join('')}
        </div>
        <div class="vowel-sequence" id="vowel-seq">
          <div class="vs-label">Hedef sıra:</div>
          <div class="vs-target" id="vs-target"></div>
        </div>
        <div class="vowel-answer" id="vowel-answer"></div>
        <div class="vowel-feedback" id="vowel-feedback"></div>
        <div style="display:flex;gap:10px;justify-content:center;margin-top:14px;flex-wrap:wrap;">
          <button class="iakt-btn iakt-btn-primary" id="vowel-new-btn">🎲 Yeni Soru</button>
          <button class="iakt-btn iakt-btn-secondary" id="vowel-check-btn" disabled>✓ Kontrol Et</button>
          <button class="iakt-btn iakt-btn-secondary" id="vowel-speak-btn">🔊 Dinle</button>
        </div>
        <div class="vowel-score-row">
          <span>✅ Doğru: <strong id="vowel-correct">0</strong></span>
          <span>❌ Yanlış: <strong id="vowel-wrong">0</strong></span>
        </div>
      </div>
    </div>

    <!-- 4. SES PERDESİ EĞİTİMİ -->
    <div class="iakt-card" id="igame-perde">
      <div class="iakt-card-header">
        <span class="iakt-icon">🎵</span>
        <div>
          <div class="iakt-title">Ses Perdesi & Rezonans Turu</div>
          <div class="iakt-sub">Farklı perdelerden sesler çıkararak rezonans bölgelerini keşfet</div>
        </div>
        <span class="iakt-badge iakt-badge-red">İleri</span>
      </div>
      <div class="iakt-content">
        <div class="perde-display" id="perde-display">
          <div class="perde-current" id="perde-current">Hazır</div>
          <div class="perde-hint" id="perde-hint">Belirtilen ses bölgesini aktivite ederek sesi çıkarın</div>
        </div>
        <div class="perde-grid" id="perde-grid">
          ${[
            {key:'gögüs', label:'Göğüs\nRezonansı', color:'#1E3A6E', hint:'Alçak perdede "Hmm" — elini göğsüne koy, titreşimi hisset'},
            {key:'yuz', label:'Yüz\nRezonansı', color:'#7A5800', hint:'Orta perdede "Mmm" — yanağında titreşim hisset'},
            {key:'kafa', label:'Kafa\nRezonansı', color:'#7A1A3C', hint:'Yüksek perdede "Nnn" — alnında titreşim hisset'},
            {key:'burun', label:'Burun\nRezonansı', color:'#0A4A42', hint:'"Ng" sesi — burnunuzu tutun, titreşim hissedeceksiniz'},
          ].map(p => `<button class="perde-btn" data-perde="${p.key}" style="border-color:${p.color}33;color:${p.color}">${p.label.replace('\n','<br>')}</button>`).join('')}
        </div>
        <div class="perde-progress" id="perde-progress"></div>
        <div style="text-align:center;margin-top:12px;font-size:.8rem;color:var(--text-3);">
          💡 Her bölgede 10 saniye boyunca o sesi çıkarın. Titreşimi hissedin.
        </div>
      </div>
    </div>

    <!-- 5. VURGU OYUNU -->
    <div class="iakt-card" id="igame-vurgu">
      <div class="iakt-card-header">
        <span class="iakt-icon">🎯</span>
        <div>
          <div class="iakt-title">Cümle Vurgu Oyunu</div>
          <div class="iakt-sub">Hangi kelime vurgulanmalı? Doğru olanı seç!</div>
        </div>
        <span class="iakt-badge iakt-badge-gold">Orta</span>
      </div>
      <div class="iakt-content">
        <div class="vurgu-question" id="vurgu-question">
          <div class="vq-sentence" id="vq-sentence">Başlat tuşuna basın...</div>
          <div class="vq-context" id="vq-context"></div>
        </div>
        <div class="vurgu-options" id="vurgu-options"></div>
        <div class="vurgu-feedback" id="vurgu-feedback"></div>
        <div class="vurgu-score-row">
          <span>✅ Doğru: <strong id="vurgu-right">0</strong></span>
          <span>❌ Yanlış: <strong id="vurgu-wrong">0</strong></span>
          <span>🏆 Puan: <strong id="vurgu-score">0</strong></span>
        </div>
        <div style="text-align:center;margin-top:12px;">
          <button class="iakt-btn iakt-btn-primary" id="vurgu-next-btn">▶ Başla / Sonraki</button>
        </div>
      </div>
    </div>

  </div>`;

  // Wire up game #1 — breath timer
  let btRunning = false, btStart = 0, btTimer = null, btBests = [];
  const btDisplay = $('bt-display');
  const btLabel = $('bt-label');
  const btRecords = $('bt-records');
  $('bt-start-btn').addEventListener('click', () => {
    if (!btRunning) {
      btRunning = true;
      btStart = Date.now();
      $('bt-start-btn').textContent = '⏹ Durdur';
      btLabel.textContent = '"Ssss" sesini çıkarın...';
      btTimer = setInterval(() => {
        const s = ((Date.now() - btStart) / 1000).toFixed(1);
        btDisplay.textContent = s + 's';
        const pct = Math.min(parseFloat(s) / 30 * 100, 100);
        btDisplay.style.color = pct < 50 ? '#C9A84C' : pct < 80 ? '#4ADE80' : '#60A5FA';
      }, 100);
    } else {
      clearInterval(btTimer); btRunning = false;
      $('bt-start-btn').textContent = '⏱ Başlat';
      const elapsed = ((Date.now() - btStart) / 1000).toFixed(1);
      btBests.push(parseFloat(elapsed));
      btBests.sort((a,b) => b-a);
      const grade = parseFloat(elapsed) >= 25 ? '🏆 Profesyonel!' : parseFloat(elapsed) >= 15 ? '⭐ Harika!' : parseFloat(elapsed) >= 8 ? '👍 İyi!' : '💪 Devam et!';
      btLabel.textContent = `Süre: ${elapsed}s — ${grade}`;
      btRecords.innerHTML = `<div class="bt-record-list">En iyi 3: ${btBests.slice(0,3).map(t => `<span>${t}s</span>`).join(' | ')}</div>`;
      showToast(`💨 ${elapsed}s — ${grade}`);
    }
  });
  $('bt-reset-btn').addEventListener('click', () => {
    clearInterval(btTimer); btRunning = false;
    btDisplay.textContent = '0.0s'; btDisplay.style.color = 'var(--gold)';
    btLabel.textContent = 'Başlatmak için butona bas, nefes alıp "Ssss" yap';
    $('bt-start-btn').textContent = '⏱ Başlat';
    btRecords.innerHTML = '';
  });

  // Wire up game #2 — speed challenge
  const scdSentences = [
    'Bir berber bir berbere gel beraber bir berber dükkanı açalım demiş.',
    'Şişe şişe, bu şişe mi o şişe mi?',
    'Pıtır pıtır patlayan patlamış mısırlar pazar yerlerinde satılır.',
    'Koca kara karga köyde koca bir kazaya yol açmış.',
    'Lale lalesi lila renginde lalelere benziyordu.',
    'Berber berberin bereketli berberlik beratını berbere verdi.',
    'Saksağan kalktı saçağa, baktı saçak bozulmuş.',
    'Hay aksi şakası şakası şakası, şakacı şakacının şakası.',
  ];
  let scdIdx = 0, scdScore = 0, scdStreak = 0, scdTotal = 0, scdRunning = false;
  function scdNewQuestion() {
    scdIdx = Math.floor(Math.random() * scdSentences.length);
    $('scd-sentence').textContent = scdSentences[scdIdx];
    $('scd-meta').textContent = `${scdSentences[scdIdx].length} karakter`;
    $('scd-input').value = '';
    $('scd-input').disabled = false;
    $('scd-input').focus();
    $('scd-skip-btn').disabled = false;
  }
  function scdCheck() {
    const typed = $('scd-input').value.trim();
    const target = scdSentences[scdIdx];
    let err = 0;
    for (let i = 0; i < Math.min(typed.length, target.length); i++) {
      if (typed[i] !== target[i]) err++;
    }
    err += Math.abs(typed.length - target.length);
    const acc = Math.max(0, Math.round((1 - err / target.length) * 100));
    if (acc >= 85) {
      scdScore += acc;
      scdStreak++;
      showToast(`✅ %${acc} — +${acc} puan!`);
    } else {
      scdStreak = 0;
      showToast(`❌ %${acc} — Tekrar dene!`);
    }
    $('scd-score').textContent = scdScore;
    $('scd-streak').textContent = scdStreak + '🔥';
    $('scd-acc').textContent = `%${acc}`;
    scdNewQuestion();
  }
  $('scd-start-btn').addEventListener('click', () => {
    if (!scdRunning) {
      scdRunning = true;
      scdScore = 0; scdStreak = 0;
      $('scd-score').textContent = '0'; $('scd-streak').textContent = '0'; $('scd-acc').textContent = '%100';
      $('scd-start-btn').textContent = '✓ Tamam';
      scdNewQuestion();
    } else {
      scdCheck();
    }
  });
  $('scd-input').addEventListener('keydown', e => { if (e.key === 'Enter') $('scd-start-btn').click(); });
  $('scd-skip-btn').addEventListener('click', () => { scdStreak = 0; $('scd-streak').textContent = '0'; scdNewQuestion(); showToast('⏭ Atlandı'); });

  // Wire up game #3 — vowel harmony
  const VOWELS = ['A','E','I','İ','O','Ö','U','Ü'];
  const vowelSequences = [
    {seq: ['A','E','I'], hint: 'Öndamak — ince sırası'},
    {seq: ['O','U','Ö','Ü'], hint: 'Yuvarlak ünlüler'},
    {seq: ['A','I','O','U'], hint: 'Artdamak — geniş-dar'},
    {seq: ['E','İ','Ö','Ü'], hint: 'Öndamak karması'},
    {seq: ['A','E','İ','Ö'], hint: 'Düzden yuvarlağa'},
    {seq: ['U','O','E','A'], hint: 'Geri dönüş sırası'},
  ];
  let currentVSeq = [], userVSeq = [], vCorrect = 0, vWrong = 0;
  function newVowelGame() {
    const pick = vowelSequences[Math.floor(Math.random() * vowelSequences.length)];
    currentVSeq = pick.seq;
    userVSeq = [];
    $('vs-target').innerHTML = pick.seq.map(v => `<span class="vs-v">${v}</span>`).join('<span style="opacity:.4">→</span>');
    $('vowel-answer').innerHTML = '<span style="color:var(--text-4);font-size:.85rem">Ünlülere tıkla...</span>';
    $('vowel-feedback').textContent = '';
    $('vowel-check-btn').disabled = true;
  }
  document.querySelectorAll('.vowel-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      userVSeq.push(btn.dataset.v);
      $('vowel-answer').innerHTML = userVSeq.map(v => `<span class="vs-v">${v}</span>`).join('<span style="opacity:.4">→</span>');
      btn.classList.add('vowel-btn-selected');
      setTimeout(() => btn.classList.remove('vowel-btn-selected'), 300);
      $('vowel-check-btn').disabled = userVSeq.length < currentVSeq.length;
    });
  });
  $('vowel-new-btn').addEventListener('click', () => { newVowelGame(); });
  $('vowel-check-btn').addEventListener('click', () => {
    const correct = JSON.stringify(userVSeq) === JSON.stringify(currentVSeq);
    if (correct) {
      vCorrect++;
      $('vowel-feedback').innerHTML = '<span style="color:#16A34A;font-weight:800">✅ Doğru! Harika!</span>';
      showToast('✅ Doğru!');
    } else {
      vWrong++;
      $('vowel-feedback').innerHTML = `<span style="color:#C9604A;font-weight:800">❌ Yanlış! Doğrusu: ${currentVSeq.join(' → ')}</span>`;
      showToast('❌ Yanlış!');
    }
    $('vowel-correct').textContent = vCorrect;
    $('vowel-wrong').textContent = vWrong;
    setTimeout(() => newVowelGame(), 1800);
  });
  $('vowel-speak-btn').addEventListener('click', () => {
    if ('speechSynthesis' in window && currentVSeq.length) {
      const utt = new SpeechSynthesisUtterance(currentVSeq.join(' '));
      utt.lang = 'tr-TR'; utt.rate = 0.6;
      window.speechSynthesis.speak(utt);
    }
  });
  newVowelGame();

  // Wire up game #4 — perde
  const perdeHints = {
    'gögüs': 'Alçak perdede "Hmm" — elini göğsüne koy, titreşimi hisset',
    'yuz': 'Orta perdede "Mmm" — yanağında titreşim hisset',
    'kafa': 'Yüksek perdede "Nnn" — alnında titreşim hisset',
    'burun': '"Ng" sesi — burnunuzu tutun, titreşim hissedeceksiniz',
  };
  document.querySelectorAll('.perde-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const perde = btn.dataset.perde;
      $('perde-current').textContent = btn.textContent.replace('\n','');
      $('perde-hint').textContent = perdeHints[perde] || '';
      document.querySelectorAll('.perde-btn').forEach(b => b.classList.remove('perde-btn-active'));
      btn.classList.add('perde-btn-active');
      if ('speechSynthesis' in window) {
        const texts = { 'gögüs': 'Hmmmm', 'yuz': 'Mmmm', 'kafa': 'Nnnn', 'burun': 'Nggg' };
        const utt = new SpeechSynthesisUtterance(texts[perde] || 'Mmm');
        utt.lang = 'tr-TR'; utt.rate = 0.4;
        window.speechSynthesis.speak(utt);
      }
      showToast(`🎵 ${perdeHints[perde]}`);
    });
  });

  // Wire up game #5 — vurgu game
  const vurguQuestions = [
    { sentence: 'Ben bugün sizi davet ettim.', words: ['Ben','bugün','sizi','davet','ettim'], answer: 'sizi', context: 'Başka birini değil, özellikle sizi çağırdım.', explanation: '"SİZİ" vurgusunu kullanmak "başkası değil sen" anlamına gelir.' },
    { sentence: 'Bu kitabı ben okudum.', words: ['Bu','kitabı','ben','okudum'], answer: 'ben', context: 'Başka biri değil, ben okudum.', explanation: '"BEN" vurgusu kişiyi öne çıkarır.' },
    { sentence: 'Yarın toplantı saat ikide.', words: ['Yarın','toplantı','saat','ikide'], answer: 'yarın', context: 'Bugün değil, yarın!', explanation: '"YARIN" vurgusu zaman bağlamını netleştirir.' },
    { sentence: 'Projeyi teslim etmeyeceğim.', words: ['Projeyi','teslim','etmeyeceğim'], answer: 'etmeyeceğim', context: 'Kesinlikle vermeyeceksin.', explanation: '"ETMEYECEĞİM" olumsuz vurgunu güçlendirir.' },
    { sentence: 'Şimdi konuşmak istemiyorum.', words: ['Şimdi','konuşmak','istemiyorum'], answer: 'şimdi', context: 'Belki sonra, ama şimdi değil.', explanation: '"ŞİMDİ" zamansal önceliği vurgular.' },
  ];
  let vurguIdx = 0, vurguRight = 0, vurguWrong_ = 0, vurguScore = 0;
  function showVurguQuestion() {
    vurguIdx = Math.floor(Math.random() * vurguQuestions.length);
    const q = vurguQuestions[vurguIdx];
    $('vq-sentence').textContent = q.sentence;
    $('vq-context').textContent = `💬 Bağlam: ${q.context}`;
    $('vurgu-feedback').textContent = '';
    $('vurgu-options').innerHTML = q.words.map(w =>
      `<button class="vurgu-opt-btn" data-word="${w}">${w}</button>`
    ).join('');
    document.querySelectorAll('.vurgu-opt-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const chosen = btn.dataset.word.toLowerCase();
        const correct = vurguQuestions[vurguIdx].answer.toLowerCase();
        if (chosen === correct) {
          vurguRight++;
          vurguScore += 10;
          $('vurgu-feedback').innerHTML = `<span style="color:#16A34A;font-weight:800">✅ Doğru! ${vurguQuestions[vurguIdx].explanation}</span>`;
          btn.style.background = '#DCFCE7'; btn.style.borderColor = '#4ADE80';
          showToast('✅ +10 puan!');
        } else {
          vurguWrong_++;
          $('vurgu-feedback').innerHTML = `<span style="color:#C9604A;font-weight:800">❌ Doğrusu: "${vurguQuestions[vurguIdx].answer}" — ${vurguQuestions[vurguIdx].explanation}</span>`;
          btn.style.background = '#FEE2E2'; btn.style.borderColor = '#FCA5A5';
          showToast('❌ Yanlış!');
        }
        $('vurgu-right').textContent = vurguRight;
        $('vurgu-wrong').textContent = vurguWrong_;
        $('vurgu-score').textContent = vurguScore;
        document.querySelectorAll('.vurgu-opt-btn').forEach(b => b.disabled = true);
      });
    });
  }
  $('vurgu-next-btn').addEventListener('click', showVurguQuestion);
  showVurguQuestion();
}

// ═══════════════════════════════════════════════════════════
//  📅 PROGRAMLAR — Eğitim Planları
// ═══════════════════════════════════════════════════════════

const PROGRAMS = {
  haftalik: {
    emoji: '📅',
    title: '1 Haftalık Başlangıç Programı',
    subtitle: 'Diksiyon macerası başlıyor — temel alışkanlıkları kur',
    duration: '7 gün',
    color: '#1E3A6E',
    days: [
      {
        day: 1, title: 'Temel Nefes Günü',
        tasks: [
          { icon: '💨', task: 'Diyafram nefesi egzersizi', detail: '30 dk — Sabah uyanınca, karnınıza el koyarak 4-2-6 döngüsünde 10 kez nefes alın', dur: '30 dk' },
          { icon: '📖', task: 'Sesli kitap dinleme', detail: '30 dk — Herhangi bir Türkçe sesli kitap. Spikerın nefes noktalarına dikkat edin', dur: '30 dk' },
          { icon: '✏️', task: 'Kalem egzersizi', detail: '15 dk — Bir kalemi yatay olarak ağzınıza alıp diksiyonunuzu zorlayın. "Merhaba, nasılsınız?" cümlesini 20 kez söyleyin', dur: '15 dk' },
          { icon: '🔊', task: 'Ses teli ısınma', detail: '10 dk — "Mmm, Brrr, Hmm" dizisiyle ses tellerini ısıtın. Her ses 30 saniye', dur: '10 dk' },
          { icon: '🪞', task: 'Ayna egzersizi', detail: '10 dk — Ayna karşısında "A-E-I-İ-O-Ö-U-Ü" ünlülerini ağız pozisyonlarını görerek söyleyin', dur: '10 dk' },
          { icon: '🎵', task: 'Yüksek sesle okuma', detail: '15 dk — Bir gazete paragrafını yüksek sesle okuyun. Noktalamaya uyun', dur: '15 dk' },
          { icon: '🎙️', task: 'Ses kaydı analizi', detail: '10 dk — "Merhaba, ben diksiyon çalışıyorum." cümlesini kaydedin ve dinleyin. Hangi sesler net değil?', dur: '10 dk' },
        ]
      },
      {
        day: 2, title: 'Tekerleme Günü',
        tasks: [
          { icon: '💨', task: 'Sabah nefes rutini', detail: '30 dk — Box breathing (4-4-4-4 döngüsü). Gözler kapalı, sakin ortamda 15 döngü', dur: '30 dk' },
          { icon: '📖', task: 'Sesli kitap', detail: '30 dk — Kitap okumaya devam edin. Bugün vurgu ve tonlamaya dikkat', dur: '30 dk' },
          { icon: '✏️', task: 'Kalem tekerleme', detail: '15 dk — Kalem ağızda "Bir berber bir berbere" tekerlemesini 10 kez tekrarlayın', dur: '15 dk' },
          { icon: '🔤', task: 'Berber tekerlemesi', detail: '10 dk — Yavaştan hıza artırarak 5 tempo uygulayın. Son turda kayıt alın', dur: '10 dk' },
          { icon: '🔤', task: 'S-Ş ayrışım egzersizi', detail: '10 dk — "Şişe şişe, bu şişe mi?" — ayna kullanarak S ve Ş farkını görün', dur: '10 dk' },
          { icon: '🎭', task: 'Duygu skalası', detail: '15 dk — "Bu kadar önemli miydi?" cümlesini 7 farklı duyguyla söyleyin: merak, öfke, hüzün, şaşkınlık, sevinç, küçümseme, korku', dur: '15 dk' },
          { icon: '🎙️', task: 'İlerleme kaydı', detail: '10 dk — Dünkü ve bugünkü kayıtları karşılaştırın. Hangi ses gelişti?', dur: '10 dk' },
        ]
      },
      {
        day: 3, title: 'Ses Açma Günü',
        tasks: [
          { icon: '💨', task: 'Nefes kapasitesi testi', detail: '30 dk — "Ssss" sesini ne kadar tutabiliyorsun? 3 kez dene, kayıt tut. 4-7-8 egzersizini de uygula', dur: '30 dk' },
          { icon: '📖', task: 'Sesli kitap & not alma', detail: '30 dk — Spikerin nefes noktalarını dinlerken not alın. 3 nefes noktası tespit edin', dur: '30 dk' },
          { icon: '✏️', task: 'Kalem okuma', detail: '15 dk — Gazeteden bir haber bülteni parçasını kalemle okuyun', dur: '15 dk' },
          { icon: '🔊', task: 'Ses güç skalası', detail: '10 dk — Fısıltıdan maksimuma 5 kademede "Merhaba" söyleyin. Her kademe net olmalı', dur: '10 dk' },
          { icon: '📢', task: 'Ses projeksiyonu', detail: '15 dk — Evde karşı duvara sesini "gönder". 2-3-4-6 metre denemesi', dur: '15 dk' },
          { icon: '🎵', task: 'Perde aralığı genişletme', detail: '10 dk — "Do-Re-Mi" skalasını yukarı ve aşağı söyleyin. Sesin doğal sınırını keşfet', dur: '10 dk' },
          { icon: '🎙️', task: 'Perde karşılaştırma kaydı', detail: '10 dk — Alçak, orta ve yüksek perde ile "Merhaba" kaydet. Farkları dinle', dur: '10 dk' },
        ]
      },
      {
        day: 4, title: 'Telaffuz & Ünlü Günü',
        tasks: [
          { icon: '💨', task: 'Diyafram nefesi', detail: '30 dk — Ritmik nefes çalışması. Her nefeste bir cümle planla. Nefes bir anlam birimini tamamlamalı', dur: '30 dk' },
          { icon: '📖', task: 'Sesli kitap', detail: '30 dk — Kitabı bu kez telaffuza odaklanarak dinleyin. Yanlış telaffuz duyduğunuzda not alın', dur: '30 dk' },
          { icon: '✏️', task: 'Kalem ünlü egzersizi', detail: '15 dk — Kalem ağızda 8 Türkçe ünlüyü sırayla söyleyin. Her birini 5 kez tekrarlayın', dur: '15 dk' },
          { icon: '🗣️', task: '8 ünlü sistemi', detail: '10 dk — Ayna önünde A-E-I-İ-O-Ö-U-Ü ünlülerini tam pozisyonla çıkarın', dur: '10 dk' },
          { icon: '🔡', task: 'Pa-Ta-Ka jimnastiği', detail: '15 dk — "Pa-ta-ka-ba-da-ga" dizisini 3 hızda (yavaş/orta/hızlı) yapın', dur: '15 dk' },
          { icon: '📖', task: 'Üç turlu okuma', detail: '10 dk — Bir paragrafı: (1) heceler halinde, (2) vurguyla, (3) canlı okuyun', dur: '10 dk' },
          { icon: '🎙️', task: 'Telaffuz kaydı', detail: '10 dk — Zor bulduğunuz bir kelimeyi 10 kez kaydedin. En iyi versiyonu saklayın', dur: '10 dk' },
        ]
      },
      {
        day: 5, title: 'Ritim & Vurgu Günü',
        tasks: [
          { icon: '💨', task: 'Dalga nefes meditasyonu', detail: '30 dk — Göz kapalı, dalga metaforu ile nefes. 5-2-7 döngüsü. 15-20 döngü yapın', dur: '30 dk' },
          { icon: '📖', task: 'Sesli kitap ritim', detail: '30 dk — Bu kez ritmi dinleyin. Spikerin hız dalgaları var mı? Not alın', dur: '30 dk' },
          { icon: '✏️', task: 'Kalem ritim', detail: '15 dk — Bir şiiri kalemle okuyun. Ritmi hissedin', dur: '15 dk' },
          { icon: '🥁', task: 'Bedenle ritim', detail: '10 dk — Diz vurarak "Günaydın, nasılsınız?" ezberleyin. Her hece için bir vuru', dur: '10 dk' },
          { icon: '⚡', task: 'Anlam vurgusu laboratuvarı', detail: '15 dk — "Ben bugün buraya SİZ için geldim" — 5 farklı kelimeyi vurgulayın', dur: '15 dk' },
          { icon: '⏸️', task: 'Stratejik sessizlik', detail: '10 dk — 3 saniye duraklama egzersizi. "Bu şirkette...(3sn)...değişim başlıyor"', dur: '10 dk' },
          { icon: '🎙️', task: 'Ritim kaydı', detail: '10 dk — Bir paragrafı kaydedin. Ritim var mı? Monoton mu?', dur: '10 dk' },
        ]
      },
      {
        day: 6, title: 'Tekerleme Arena Günü',
        tasks: [
          { icon: '💨', task: 'Akciğer kapasitesi', detail: '30 dk — "Ha-ha-ha" ile nefes bırakma egzersizi. Her sette tutma süresini artır', dur: '30 dk' },
          { icon: '📖', task: 'Sesli kitap', detail: '30 dk — Bugün yüksek sesle kitap OKU (dinleme değil)', dur: '30 dk' },
          { icon: '✏️', task: 'Kalem tekerleme maratonu', detail: '15 dk — Kalem ağızda tüm haftalık tekerlemeleri sırayla söyleyin', dur: '15 dk' },
          { icon: '🏆', task: 'Arena hız testi', detail: '10 dk — Web sitesindeki Arena bölümünde 3 farklı harften en az 5 tekerleme deneyin', dur: '10 dk' },
          { icon: '🎭', task: 'Karma tekerleme maratonu', detail: '15 dk — Tüm hafta boyunca öğrenilen tekerlemeleri tek solukta söyleyin', dur: '15 dk' },
          { icon: '🌊', task: 'Rezonans turu', detail: '10 dk — Göğüs, yüz ve kafa rezonanslarını sırayla aktive edin', dur: '10 dk' },
          { icon: '🎙️', task: 'Hafta sonu kaydı', detail: '10 dk — 2 dakikalık konuşma kaydı alın. Hafta başındakiyle karşılaştırın', dur: '10 dk' },
        ]
      },
      {
        day: 7, title: 'Değerlendirme & Pekiştirme Günü',
        tasks: [
          { icon: '💨', task: 'Tüm nefes teknikleri', detail: '30 dk — Haftanın tüm nefes tekniklerini (diyafram, box, 4-7-8) sırayla 5\'er dakika uygulayın', dur: '30 dk' },
          { icon: '📖', task: 'Sesli kitap yarım saati', detail: '30 dk — Haftanın son sesli kitap seansı. Neleri fark ediyorsunuz?', dur: '30 dk' },
          { icon: '✏️', task: 'Final kalem egzersizi', detail: '15 dk — Haftanın en zor tekerlemesini kalemle 20 kez tekrarlayın', dur: '15 dk' },
          { icon: '📊', task: 'İlerleme değerlendirmesi', detail: '10 dk — Haftanın başı ve sonu kayıtlarını dinleyin. 3 fark tespit edin', dur: '10 dk' },
          { icon: '🎯', task: 'Zayıf nokta odak', detail: '15 dk — Bu haftanın en zor sesine odaklanın. Onu izole edin ve 15 dakika çalışın', dur: '15 dk' },
          { icon: '🌟', task: 'Başarı konuşması', detail: '10 dk — 1 dakikalık bir konuşma yapın. Öğrendiklerini uygula', dur: '10 dk' },
          { icon: '📅', task: 'Gelecek hafta planı', detail: '10 dk — 30 günlük programa geçiş için hangi alanlarda daha fazla çalışmalısınız? Not alın', dur: '10 dk' },
        ]
      }
    ]
  },
  otuzgun: {
    emoji: '🗓️',
    title: '30 Günlük Diksiyon Programı',
    subtitle: 'Temellerden ileri seviyeye — sistematik gelişim',
    duration: '30 gün · 4 hafta',
    color: '#7A5800',
    weeks: [
      { num: 1, title: 'Temel Kurma Haftası', focus: 'Nefes + Ses Isınma + Temel Tekerleme', color: '#1E3A6E' },
      { num: 2, title: 'Ses Geliştirme Haftası', focus: 'Telaffuz + Perde + Rezonans', color: '#7A2A1A' },
      { num: 3, title: 'Ritim & Vurgu Haftası', focus: 'Ritim + Vurgu + Noktalama', color: '#1A5C35' },
      { num: 4, title: 'Entegrasyon & Test Haftası', focus: 'Arena + Karma + Değerlendirme', color: '#4A1A7A' },
    ],
    dailyBase: [
      { icon: '💨', task: 'Sabah nefes rutini', detail: '30 dk — Güne diyafram nefesi ile başlayın. İlk haftada 4-2-6, sonra 4-4-8 döngüsü', dur: '30 dk' },
      { icon: '📖', task: 'Sesli kitap', detail: '30 dk — Her gün farklı bir tür: roman, haber metni, şiir, makale sırasıyla deneyin', dur: '30 dk' },
      { icon: '✏️', task: 'Kalem telefon egzersizi', detail: '15 dk — İki kalem arasında zorlu tekerlemeler ve düz okumalar yapın', dur: '15 dk' },
      { icon: '🔤', task: 'Günün tekerleme çalışması', detail: '10 dk — Her gün bir yeni tekerleme: yavaş → orta → hızlı → kayıt', dur: '10 dk' },
      { icon: '🎯', task: 'Hedef ses çalışması', detail: '15 dk — Haftanın odak sesi: S/Ş, B/P, K/G, L/R vb. o sesi izole çalışın', dur: '15 dk' },
      { icon: '🎙️', task: 'Günlük ses kaydı', detail: '10 dk — Bir paragraf okuyun, kaydedin, 3 şeye dikkat edin: netlik, hız, vurgu', dur: '10 dk' },
      { icon: '🌙', task: 'Gece özet', detail: '10 dk — Bugün ne öğrendim? Hangi ses zayıf? Yarın neyi farklı yapacağım?', dur: '10 dk' },
    ]
  },
  doksan: {
    emoji: '🏆',
    title: '90 Günlük Profesyonel Program',
    subtitle: 'Amatörden profesyonele — 3 aylık dönüşüm yolculuğu',
    duration: '90 gün · 3 ay',
    color: '#7A1A3C',
    phases: [
      { num: 1, title: 'Temel Faz (1-30. gün)', desc: 'Nefes, ses ısınma, temel tekerleme ve telaffuz alışkanlıkları', color: '#1E3A6E',
        milestones: ['Diyafram nefesini içselleştir', 'Tüm 8 ünlüyü netlleştir', 'Berber tekerlemesinde 3× hız artışı', '15s+ nefes dayanımı'] },
      { num: 2, title: 'Geliştirme Faz (31-60. gün)', desc: 'Perde, rezonans, ritim, vurgu ve duraklama teknikleri', color: '#7A5800',
        milestones: ['Göğüs-yüz-kafa rezonansı farkı', 'S/Ş-K/G-L/R-B/P ayrışımı', 'Dalga ritmi konuşma', '5s stratejik duraklama'] },
      { num: 3, title: 'Uzmanlaşma Faz (61-90. gün)', desc: 'Arena performansı, sunum becerileri ve öz değerlendirme', color: '#7A1A3C',
        milestones: ['Arena hız testinde 90%+ doğruluk', 'Arena tüm harflerde deneyim', '5 dakikalık monolog kaydı', 'Başlangıç-bitiş kaydı karşılaştırması'] },
    ],
    dailyBase: [
      { icon: '💨', task: 'Sabah nefes seansı', detail: '30 dk — Faza göre değişen nefes programı. Faz 1: diyafram, Faz 2: box+4-7-8, Faz 3: tüm teknikler dönüşümlü', dur: '30 dk' },
      { icon: '📖', task: 'Sesli kitap', detail: '30 dk — Türkçe sesli kitap veya podcast. Haber, roman, şiir arası denge kur', dur: '30 dk' },
      { icon: '✏️', task: 'Kalem-çubuk egzersizi', detail: '15 dk — Her gün farklı egzersiz metnini kalemle çalıştır. En zor tekerlemelerden başla', dur: '15 dk' },
      { icon: '🏆', task: 'Arena zorluk testi', detail: '10 dk — En az 2 harften hız testi. Puanını kaydet ve geçen günle karşılaştır', dur: '10 dk' },
      { icon: '🎯', task: 'Odak noktası egzersizi', detail: '15 dk — O günün hedef tekniği için derinlemesine çalışma: rezonans, vurgu, ritim vb.', dur: '15 dk' },
      { icon: '🎙️', task: 'Günlük ses kaydı', detail: '10 dk — 1 dakikalık spontane konuşma kaydı. Başlıksız, düşünmeden. Sonra dinle', dur: '10 dk' },
      { icon: '📊', task: 'Haftalık ve aylık değerlendirme', detail: '10 dk — Faz geçişlerinde 5 dk ekstra: o fazda ne öğrendim? Ses nasıl değişti?', dur: '10 dk' },
    ]
  },
  ucay: {
    emoji: '🌟',
    title: '3 Aylık Liderlik Sesi Programı',
    subtitle: 'Diksiyon artık bir yaşam biçimi — kalıcı değişim',
    duration: '3 ay · 12 hafta',
    color: '#0A4A42',
    months: [
      { num: 1, title: '1. Ay: Kişisel Ses Keşfi', icon: '🔍', tasks: 'Hangi sesler zayıf, hangileri güçlü? Kendi ses imzanı bul.', color: '#1E3A6E' },
      { num: 2, title: '2. Ay: Aktif Geliştirme', icon: '⚡', tasks: 'Zayıf sesleri izole çalış, güçlü sesleri uygulamaya taşı.', color: '#7A5800' },
      { num: 3, title: '3. Ay: Performans & Kalıcılık', icon: '🏆', tasks: 'Gerçek konuşmalarda uygula. Otomatikleşene kadar pratik.', color: '#0A4A42' },
    ],
    dailyBase: [
      { icon: '💨', task: 'Uzman nefes programı', detail: '30 dk — 7 farklı nefes tekniği arasında günlük rotasyon. Sabah 5 döngü, gece 5 döngü', dur: '30 dk' },
      { icon: '📖', task: 'Sesli kitap & aktif dinleme', detail: '30 dk — Dinlerken not al: spiker hangi teknikleri kullanıyor? 5 teknik tespit et', dur: '30 dk' },
      { icon: '✏️', task: 'Kalem uzmanlık turu', detail: '15 dk — En zor 10 tekerlemeyi kalem ağızda sırayla söyle. Net olmayan her şeyi işaretle', dur: '15 dk' },
      { icon: '🎤', task: 'Canlı uygulama pratiği', detail: '10 dk — Gerçek hayatta bugün 1 konuşmada diksiyon teknikleri uygula. Akşam not al', dur: '10 dk' },
      { icon: '🧪', task: 'Ses deneyi', detail: '15 dk — Farklı rezonans, perde ve vurgu kombinasyonları dene. Hangisi en iyi sesi veriyor?', dur: '15 dk' },
      { icon: '🎙️', task: 'İlerleme kaydı', detail: '10 dk — Her ay 1. günün kaydını dinle. Fark ne kadar büyük?', dur: '10 dk' },
      { icon: '🌟', task: 'Mentorluk analizi', detail: '10 dk — Beğendiğin bir konuşmacının videosunu izle. 3 teknik öğren ve not al', dur: '10 dk' },
    ]
  }
};

let activeProgramKey = 'haftalik';

function renderProgramlar() {
  const pc = $('programlar-container');
  if (!pc) return;
  pc.innerHTML = `
  <div class="prog-section">
    <div class="prog-header">
      <h2>📅 Eğitim <span class="hl">Programları</span></h2>
      <p>Diksiyon yolculuğunu yapılandır — günlük 7 görevle sistematik gelişim</p>
    </div>

    <div class="prog-tabs">
      <button class="prog-tab ${activeProgramKey==='haftalik'?'active':''}" data-pkey="haftalik">📅 1 Haftalık</button>
      <button class="prog-tab ${activeProgramKey==='otuzgun'?'active':''}" data-pkey="otuzgun">🗓️ 30 Günlük</button>
      <button class="prog-tab ${activeProgramKey==='doksan'?'active':''}" data-pkey="doksan">🏆 90 Günlük</button>
      <button class="prog-tab ${activeProgramKey==='ucay'?'active':''}" data-pkey="ucay">🌟 3 Aylık</button>
    </div>

    <div id="prog-content"></div>
  </div>`;

  document.querySelectorAll('.prog-tab').forEach(btn => {
    btn.addEventListener('click', () => {
      activeProgramKey = btn.dataset.pkey;
      document.querySelectorAll('.prog-tab').forEach(b => b.classList.toggle('active', b === btn));
      renderProgContent();
    });
  });

  renderProgContent();
}

function renderProgContent() {
  const prog = PROGRAMS[activeProgramKey];
  const el = $('prog-content');
  if (!el || !prog) return;

  if (activeProgramKey === 'haftalik') {
    el.innerHTML = `
    <div class="prog-info-card" style="border-color:${prog.color}33">
      <div class="pic-header">
        <span style="font-size:2rem">${prog.emoji}</span>
        <div>
          <div class="pic-title">${prog.title}</div>
          <div class="pic-sub">${prog.subtitle}</div>
          <span class="pic-dur">${prog.duration}</span>
        </div>
      </div>
      <div class="pic-note">Her gün toplam ~130 dakika (2 saat 10 dk) · Sabah rutini + Egzersizler + Kayıt</div>
    </div>
    <div class="prog-days">
      ${prog.days.map(day => `
      <div class="prog-day-card" id="pday-${day.day}">
        <div class="pday-header">
          <div class="pday-num">${day.day}. GÜN</div>
          <div class="pday-title">${day.title}</div>
        </div>
        <div class="pday-tasks">
          ${day.tasks.map((t, idx) => `
          <div class="pday-task">
            <span class="pday-task-icon">${t.icon}</span>
            <div class="pday-task-body">
              <div class="pday-task-name">${idx+1}. ${t.task} <span class="pday-task-dur">${t.dur}</span></div>
              <div class="pday-task-detail">${t.detail}</div>
            </div>
          </div>`).join('')}
        </div>
      </div>`).join('')}
    </div>`;
  } else if (activeProgramKey === 'otuzgun') {
    el.innerHTML = `
    <div class="prog-info-card" style="border-color:${prog.color}33">
      <div class="pic-header">
        <span style="font-size:2rem">${prog.emoji}</span>
        <div>
          <div class="pic-title">${prog.title}</div>
          <div class="pic-sub">${prog.subtitle}</div>
          <span class="pic-dur">${prog.duration}</span>
        </div>
      </div>
      <div class="pic-note">Her gün aynı 7 temel görev — haftalık odak konusu değişir</div>
    </div>
    <div class="prog-weeks-grid">
      ${prog.weeks.map(w => `
      <div class="prog-week-card" style="border-color:${w.color}44">
        <div class="pwc-num" style="background:${w.color}22;color:${w.color}">${w.num}. HAFTA</div>
        <div class="pwc-title">${w.title}</div>
        <div class="pwc-focus">🎯 ${w.focus}</div>
      </div>`).join('')}
    </div>
    <div class="prog-day-card">
      <div class="pday-header">
        <div class="pday-num">HER GÜN</div>
        <div class="pday-title">Temel 7 Görev (Haftalık odakla zenginleştir)</div>
      </div>
      <div class="pday-tasks">
        ${prog.dailyBase.map((t, idx) => `
        <div class="pday-task">
          <span class="pday-task-icon">${t.icon}</span>
          <div class="pday-task-body">
            <div class="pday-task-name">${idx+1}. ${t.task} <span class="pday-task-dur">${t.dur}</span></div>
            <div class="pday-task-detail">${t.detail}</div>
          </div>
        </div>`).join('')}
      </div>
    </div>`;
  } else if (activeProgramKey === 'doksan') {
    el.innerHTML = `
    <div class="prog-info-card" style="border-color:${prog.color}33">
      <div class="pic-header">
        <span style="font-size:2rem">${prog.emoji}</span>
        <div>
          <div class="pic-title">${prog.title}</div>
          <div class="pic-sub">${prog.subtitle}</div>
          <span class="pic-dur">${prog.duration}</span>
        </div>
      </div>
      <div class="pic-note">3 aşamalı dönüşüm — her faz yeni bir boyut ekler</div>
    </div>
    <div class="prog-phases">
      ${prog.phases.map(p => `
      <div class="prog-phase-card" style="border-color:${p.color}44">
        <div class="pph-num" style="background:${p.color}22;color:${p.color}">Faz ${p.num}</div>
        <div class="pph-title">${p.title}</div>
        <div class="pph-desc">${p.desc}</div>
        <div class="pph-milestones">
          ${p.milestones.map(m => `<div class="pph-ms">🎯 ${m}</div>`).join('')}
        </div>
      </div>`).join('')}
    </div>
    <div class="prog-day-card">
      <div class="pday-header">
        <div class="pday-num">HER GÜN</div>
        <div class="pday-title">Temel 7 Görev (Faza göre içerik değişir)</div>
      </div>
      <div class="pday-tasks">
        ${prog.dailyBase.map((t, idx) => `
        <div class="pday-task">
          <span class="pday-task-icon">${t.icon}</span>
          <div class="pday-task-body">
            <div class="pday-task-name">${idx+1}. ${t.task} <span class="pday-task-dur">${t.dur}</span></div>
            <div class="pday-task-detail">${t.detail}</div>
          </div>
        </div>`).join('')}
      </div>
    </div>`;
  } else if (activeProgramKey === 'ucay') {
    el.innerHTML = `
    <div class="prog-info-card" style="border-color:${prog.color}33">
      <div class="pic-header">
        <span style="font-size:2rem">${prog.emoji}</span>
        <div>
          <div class="pic-title">${prog.title}</div>
          <div class="pic-sub">${prog.subtitle}</div>
          <span class="pic-dur">${prog.duration}</span>
        </div>
      </div>
      <div class="pic-note">En kapsamlı plan — diksiyon bir alışkanlık haline geliyor</div>
    </div>
    <div class="prog-months-grid">
      ${prog.months.map(m => `
      <div class="prog-month-card" style="border-color:${m.color}44">
        <div class="pmc-icon">${m.icon}</div>
        <div class="pmc-title">${m.title}</div>
        <div class="pmc-tasks">${m.tasks}</div>
      </div>`).join('')}
    </div>
    <div class="prog-day-card">
      <div class="pday-header">
        <div class="pday-num">HER GÜN</div>
        <div class="pday-title">Uzman 7 Görev (Aylık rotasyon ile derinleşir)</div>
      </div>
      <div class="pday-tasks">
        ${prog.dailyBase.map((t, idx) => `
        <div class="pday-task">
          <span class="pday-task-icon">${t.icon}</span>
          <div class="pday-task-body">
            <div class="pday-task-name">${idx+1}. ${t.task} <span class="pday-task-dur">${t.dur}</span></div>
            <div class="pday-task-detail">${t.detail}</div>
          </div>
        </div>`).join('')}
      </div>
    </div>`;
  }
}

