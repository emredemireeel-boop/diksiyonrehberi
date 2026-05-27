module.exports = [
  // ════ AKSESUAR SANATI ════
  {
    id: 'a1', cat: 'aksesuar', num: '01', badge: 'Prestij', badgeCls: 'ret-badge-advanced',
    title: 'Saat Seçimi ve Kodları',
    desc: 'Erkeğin en önemli ve tek gerçek mücevheri saatidir. Saatin kordonu, kadran boyutu ve stili, giyim kodunuzu (dress code) belirler.',
    image: '/images/giyim/saat.png',
    steps: [
      'Resmi ve takım elbiseli (business/formal) ortamlarda mutlaka deri kordonlu ve sade kadranlı (dress watch) saat tercih edilmelidir.',
      'Deri kordonunuzun rengi (siyah veya kahverengi) ayakkabı ve kemerinizin rengi ile birebir eşleşmelidir.',
      'Çelik veya metal kordonlu saatler, daha sportif veya business-casual (yarı resmi) durumlar için uygundur.',
      'Saatinizin boyutu bilek kalınlığınızla orantılı olmalıdır. İnce bir bileğe takılan devasa bir saat, maskülenliği artırmaz, aksine bileğin cılızlığını vurgular.'
    ],
    quiz: {
      q: 'Çok önemli bir kurumsal toplantıda, lacivert takım elbise ve siyah Oxford ayakkabı giyen bir erkeğin saat seçimi nasıl olmalıdır?',
      opts: ['Çelik kordonlu, büyük kadranlı dalgıç saati', 'Siyah deri kordonlu, sade ve ince kadranlı (Dress watch)', 'Kahverengi deri kordonlu saat', 'Akıllı saat (Silikon kordonlu)'],
      correct: 1,
      ok: 'Harika! Siyah ayakkabı siyah deri kordonla eşleşir ve resmiyet, sade bir kadran gerektirir.',
      fail: 'Yanlış. Akıllı saatler veya büyük çelik saatler klasik takım elbiseyle (özellikle resmi toplantılarda) uyumsuzdur. Siyah ayakkabı olduğu için siyah deri kordon seçilmelidir.'
    },
    scenario: {
      label: 'Stil Analizi',
      text: 'Bir davete katıldınız ve mükemmel bir smokin giydiniz. Bileğinizde en pahalı, devasa çelik Rolex saatiniz var.',
      analysis: 'Smokin (Black Tie) ile normalde saat takılmaz; zira davette "zamanın önemi yoktur". Eğer takılacaksa, gömlek manşetinin altına rahatça kayabilen, çok ince ve siyah deri kordonlu bir saat olmalıdır. Kalın çelik saatler smokinle asla giyilmez.'
    },
    practice: 'Günlük hayatta taktığınız saati inceleyin. Kalınlığı gömlek manşetinizin altına rahatça giriyor mu? Eğer manşete takılıp gömleği kırıştırıyorsa, saatiniz o gömlek için fazla kalındır.'
  },
  {
    id: 'a2', cat: 'aksesuar', num: '02', badge: 'Temel Kural', badgeCls: 'ret-badge-beginner',
    title: 'Kemer ve Ayakkabı Uyumu',
    desc: 'Erkek giyiminde tartışılamaz, en katı ve en temel kurallardan biridir: Deriler her zaman eşleşmek zorundadır.',
    image: '/images/giyim/kemer.png',
    steps: [
      'Kemerinizin rengi ayakkabınızın rengi ile AYNI olmalıdır. (Siyah ayakkabı = Siyah kemer, Kahverengi ayakkabı = Kahverengi kemer).',
      'Sadece renk değil, "doku" da eşleşmelidir. Süet bir ayakkabı giyiyorsanız, kemeriniz de süet olmalıdır.',
      'Metal detaylar (Kemer tokası, saat kasası, kol düğmesi) aynı renk ailesinden olmalıdır (Hepsi gümüş veya hepsi altın).',
      'Takım elbise ile giyilen kemer ince (yaklaşık 3-3.5 cm) ve sade tokalı olmalıdır. Kalın ve büyük logolu kemerler sadece kot pantolonlarla giyilir.'
    ],
    quiz: {
      q: 'Kahverengi deri ayakkabı ve lacivert pantolon giyen biri, aşağıdaki aksesuarlardan hangisini kesinlikle yapmamalıdır?',
      opts: ['Lacivert çorap giymek', 'Gümüş renkli saat takmak', 'Siyah deri kemer takmak', 'Açık mavi gömlek giymek'],
      correct: 2,
      ok: 'Doğru! Kahverengi ayakkabı ile siyah kemer takmak görsel bütünlüğü paramparça eder.',
      fail: 'Yanlış. Renk uyumunda temel kural kemer-ayakkabı eşleşmesidir. Kahverengi ayakkabı ile asla siyah kemer takılmaz.'
    },
    scenario: {
      label: 'Algı Yönetimi',
      text: 'Mükemmel oturan pahalı bir takım elbiseniz var ama belinizde devasa "H" veya "G" logolu kalın bir kemer tokası parlıyor.',
      analysis: 'Devasa marka logolu kemerler "Old Money" (Gerçek zenginlik ve zarafet) değil, "Yeni Zengin" (Gösteriş odaklı) algısı yaratır. Klasik stilde amaç markayı bağırmak değil, kumaşın ve kalıbın kalitesiyle konuşmaktır. Toka küçük ve logosuz olmalıdır.'
    },
    practice: 'Dolabınızdaki kemerleri "Klasik/Takım Elbise" ve "Spor/Jean" olarak ayırın. Kalın ve çok dokulu olanları asla kumaş pantolonlarla eşleştirmeyin.'
  },
  {
    id: 'a3', cat: 'aksesuar', num: '03', badge: 'İnce Dokunuş', badgeCls: 'ret-badge-intermediate',
    title: 'Kravat ve Cep Mendili',
    desc: 'Cep mendili, ceket giyen erkeğin imzasıdır. Ancak kravat ile ilişkisi çok ince bir denge üzerine kuruludur.',
    image: '/images/giyim/kravat.png',
    steps: [
      'ASLA kravatınız ile birebir aynı desen ve kumaşa sahip cep mendili kullanmayın. Bu kutulu setler halinde satılan bir acemi tuzağıdır.',
      'Cep mendili, kravatın içindeki ikincil veya üçüncül bir rengi yakalamalıdır. (Örn: Lacivert üzerine ufak bordo noktalı bir kravat için, düz bordo bir cep mendili).',
      'Kravat takmıyorsanız bile, ceketin göğüs cebine mutlaka düz beyaz bir mendil (Presidential fold / Düz katlama) koyun. Omuzları daha geniş gösterir.',
      'Kravatın genişliği, ceketinizin yaka genişliği (Lapel) ile aynı olmalıdır. İnce kravatlar dar yakalarla, kalın kravatlar geniş yakalarla eşleşir.'
    ],
    quiz: {
      q: 'Kravat ve cep mendili uyumunda yapılan en amatörce hata nedir?',
      opts: ['Kravat ve mendilin birebir aynı desen ve kumaştan olması', 'Kravatsız cep mendili kullanmak', 'Cep mendilini düz (dikdörtgen) katlamak', 'Kravatta ipek kumaş kullanmak'],
      correct: 0,
      ok: 'Mükemmel! Birebir aynı desen kullanmak hazır, ucuz setleri akla getirir. Uyum; aynı olmak değil, birbirini tamamlamaktır.',
      fail: 'Yanlış. Kravat ve mendilin "takım" halinde aynı desenden olması, stilden anlamayanların başvurduğu ilk hatadır. Mendil kravatı tamamlamalı, aynısı olmamalıdır.'
    },
    scenario: {
      label: 'Sprezzatura Sanatı',
      text: 'Cep mendilinizi cetvelle ölçülmüş gibi milimetrik katladınız ve tüm gün bozulmaması için sürekli elinizle düzeltiyorsunuz.',
      analysis: 'İtalyanların "Sprezzatura" dediği kavram, "özenilmiş bir çabasızlık" anlamına gelir. Mendiliniz hafif dağınık, umursamaz bir şekilde cebe tıkılmış gibi durmalıdır. Fazla kusursuzluk, gergin ve tecrübesiz bir izlenim yaratır.'
    },
    practice: 'Evinizdeki bir ceketi alın, beyaz bir mendili "Puff Fold" (ortasından tutup serbestçe cebe bırakma) tekniğiyle katlayıp aynada "çabasız şıklığı" inceleyin.'
  },
  // ════ VÜCUT TİPİNE GÖRE GİYİM ════
  {
    id: 'v1', cat: 'vucut-tipi', num: '01', badge: 'Atletik', badgeCls: 'ret-badge-intermediate',
    title: 'Ters Uçgen Vucut Tipi',
    desc: 'Omuzlarin genis, belin ince oldugu bu vucut tipi (athletic/V-taper), erkek giyiminde ideal kabul edilse de giysilerin bel kisminda bol durma riski tasir.',
    image: '/images/giyim/ters-ucgen.png',
    steps: [
      'Gomlek ve ceketlerde "Slim Fit" veya "Tailored Fit" tercih edin. Regular fit giysiler bel kisminda potluk yaratir.',
      'V yaka t-shirtler gogus kafesinizi dengeli gosterirken, omuzlarin genisligini vurgular.',
      'Dengeyi saglamak icin alt giyimde duz kesim (straight) veya hafif slim fit pantolonlar secin. Skinny jeanler bacaklari kurdan gibi gosterip ust bedeni fazla iri yapar.',
      'Desenli pantolonlar veya goz alici kemerler, dikkati ince olan alt bolgeye cekerek bedeni dengeler.'
    ],
    quiz: {
      q: 'Ters ucgen vucut tipine sahip bir erkegin pantolon secerken kacindigi en buyuk hata nedir?',
      opts: ['Duz kesim (Straight fit) secmek', 'Koyu renk pantolon giymek', 'Asiri dar (Skinny) pantolon secmek', 'Kemer kullanmak'],
      correct: 2,
      ok: 'Dogru! Skinny pantolonlar ust bedeni orantisiz sekilde buyuk, bacaklari ise cılız gosterir. Denge sarttir.',
      fail: 'Yanlis. Ters ucgenlerde en buyuk hata alt bolgeyi daha da dar gosterip cizgi film karakteri (Johnny Bravo) oranlari yaratmaktir. Skinny fit\'ten kacinilmalidir.'
    },
    scenario: {
      label: 'Stil Analizi',
      text: 'Magazadan omuzlariniza tam oturan harika bir ceket aldiniz, ancak dugmelediginizde bel kisminda iki yumruk sigacak kadar bosluk kaliyor.',
      analysis: 'Terzi en yakin dostunuzdur. Ceketin omuzlara tam oturmasi (satin alirken degistiremeyeceginiz tek yer) mukemmeldir. Beli daralttirarak size ozel (bespoke) bir fit elde etmelisiniz.'
    },
    practice: 'Gardirobunuzdaki en sevdiginiz 3 gomlegi deneyin ve bel kismindaki potluklari (fazla kumaslari) terzi iğnesiyle veya elinizle toplayip aynada farki inceleyin.'
  },
  {
    id: 'v2', cat: 'vucut-tipi', num: '02', badge: 'Klasik', badgeCls: 'ret-badge-beginner',
    title: 'Dikdortgen Vucut Tipi',
    desc: 'Omuzlarin, belin ve kalcanin neredeyse ayni genislikte oldugu, duz bir hatta sahip vucut formudur. Amac, omuzlari genis gostererek "V" illuzyonu yaratmaktir.',
    image: '/images/giyim/dikdortgen.png',
    steps: [
      'Katmanli giyinmek (Layering) en buyuk silahinizdir. Bir t-shirt uzerine giyilen gomlek veya hirkalar ust bedene hacim katar.',
      'Omuzlari vatkali veya yapili (structured) blazer ceketler kullanarak omuz hatti illuzyonu yaratin.',
      'Yatay cizgili ustler gogus bolgesini genisletir. Breton cizgili t-shirtler mukemmel bir secimdir.',
      'Gomlek yakalarinda acik (cutaway) veya genis yakalar secmek, yuzu ve omuzlari daha genis algilatir.'
    ],
    quiz: {
      q: 'Dikdortgen vucut formunda "V (Ters Ucgen)" illuzyonu yaratmak icin en etkili taktik nedir?',
      opts: ['Siyah ve dar t-shirtler giymek', 'Yapili (vatkali) ceketler ve katmanli giyim kullanmak', 'Dikey cizgili gomlekler secmek', 'Kravat takmak'],
      correct: 1,
      ok: 'Kesinlikle! Yapili ceketler omuzlara fiziki olarak genislik katar, katmanlar ise gogus kafesine hacim verir.',
      fail: 'Yanlis. Dikey cizgiler ve siyah renk bedeni daha da ince ve duz gosterir. Amac hacim ve genislik katmaktir.'
    },
    scenario: {
      label: 'Optik İlluzyon',
      text: 'Omuzlariniz dar ve belinizle ayni hizada. Tisort giydiginizde dumduz bir kutu gibi gorunuyorsunuz.',
      analysis: 'Tisortun uzerine dugmeleri acik bir denim ceket veya ince bir kazak baglayarak aninda omuz bolgenize genislik katabilir ve bele dogru daralan bir goz yanilsamasi olusturabilirsiniz.'
    },
    practice: 'Bugun disari cikarken tek kat (sadece tisort/gomlek) yerine en az iki kat (tisort uzeri gomlek veya gomlek uzeri kazak) giyinip aynadaki omuz genisliginizi karsilastirin.'
  },
  {
    id: 'v3', cat: 'vucut-tipi', num: '03', badge: 'Konfor', badgeCls: 'ret-badge-intermediate',
    title: 'Oval Vucut Tipi',
    desc: 'Karın bölgesinin omuzlar ve kalcalardan daha genis oldugu yapidir. Hedef bedeni uzatmak, inceltmek ve gozu yuz bolgesine cekmektir.',
    image: '/images/giyim/oval.png',
    steps: [
      'Koyu ve monokrom (tek renk) kombinler yapin. Bastan asagi ayni renk (ornegin lacivert veya koyu gri) giyinmek kesintisiz bir dikey cizgi yaratarak inceltir.',
      'Tek sira dugmeli (Single-breasted) ceketler tercih edin ve mumkunse ceketinizin dugmesini acik birakin. Bu, ortada dikey bir alan yaratir.',
      'Kalin, iri desenlerden ve yatay cizgilerden kesinlikle kacinmalisiniz. Ince (pinstripe) dikey cizgiler ise boyunuzu uzun gosterir.',
      'Giyimi tam uzerinize gore alin. Bol kiyafetler sizi daha genis gosterirken, asiri dar kiyafetler fazlaliklari vurgular. "Mukemmel fit" altin kuraldir.'
    ],
    quiz: {
      q: 'Oval vucut tipine sahip birinin ceket kullaniminda uygulayabilecegi en iyi optik taktik nedir?',
      opts: ['Cift sira dugmeli (Kruvaze) ceket giyip iliklemek', 'Tek sira dugmeli ceketi onunu acik birakarak giymek', 'Kalin kumasli ve kareli ceketler secmek', 'Ceket yerine kazak kullanmak'],
      correct: 1,
      ok: 'Harika! Ceketin onunun acik kalmasi, icteki gomlek/tisort ile birlikte ortada "dikey bir sutun" yaratarak silueti aninda inceltir.',
      fail: 'Yanlis. Kruvaze ceketler gogse ve karna ekstra kumas katarak genisletir. Ceketin onunu acik birakmak dikey bir cizgi (incelme) yaratir.'
    },
    scenario: {
      label: 'Kombin Karari',
      text: 'Fazla kilonuzu gizlemek icin normal bedeninizden 2 beden buyuk, salas bir t-shirt giydiniz.',
      analysis: 'Bu cok yaygin bir hatadir. Fazla kumas vucut hatlarini gizlemez, aksine silueti bir "cadir" gibi genisleterek kisiyi oldugundan daha iri gosterir. Fit olmali, dar veya salas degil.'
    },
    practice: 'Eger dolabinizda "bollukla gizlerim" diye aldiginiz kiyafetler varsa, onlari tam uzerinize oturan (terzilenmis) parcalarla degistirin.'
  },
  {
    id: 'v4', cat: 'vucut-tipi', num: '04', badge: 'Ust Seviye', badgeCls: 'ret-badge-advanced',
    title: 'Ucgen Vucut Tipi',
    desc: 'Erkeklerde omuzlarin dar, bel ve basen kismindaki olculerin daha genis oldugu (A-tipi) vucut seklidir. Gorsel agirlik alt bolgededir.',
    steps: [
      'Koyu renkleri alt giyimde (pantolon), acik renkleri ve desenleri ust giyimde (gomlek/ceket) kullanarak dikkati yukari cekin.',
      'Ceketlerin omuzlarinda vatka kullanimi sarttir. Omuzlari genisleterek alt bolgeyle denge kurun.',
      'Omuz hizasinda detaylari olan (apoletli ceketler, gogus cepli gomlekler) kiyafetler ust bedene hacim katar.',
      'Dar inen (tapered) pantolonlardan uzak durun, cunku kalca bolgesini daha da vurgular. Duz kesim pantolon tercih edin.'
    ],
    quiz: {
      q: 'Ucgen vucut tipinde renk kullanimindaki dogru strateji asagidakilerden hangisidir?',
      opts: ['Alt koyu, ust acik renk', 'Alt acik, ust koyu renk', 'Bastan asagi neon renkler', 'Sadece desenli pantolon giymek'],
      correct: 0,
      ok: 'Dogru! Koyu renk pantolonlar baseni daraltirken, acik renk ustler gogsu ve omuzlari genis gostererek vucudu dengeler.',
      fail: 'Yanlis. Eger alt bolgede acik renk giyerseniz, dar olan omuzlar iyice kaybolur ve basen kismi daha da genis durur.'
    },
    scenario: {
      label: 'Terzilik Sirlari',
      text: 'Magazalardaki standart kaliplar (M beden vb.) omuzlariniza olurken karninizi/baseninizi SIKIYOR.',
      analysis: 'Omuz olcusu ile beden olcusu arasindaki bu farklilik, ozel terzi mudahalesi gerektirir. Kiyafetleri en genis yerinize (karin/bel) uyacak sekilde buyuk beden alip, omuzlari daralttirarak size ozel kalip cikartin.'
    },
    practice: 'Gardirobunuzu acin; ust bedene dikkat ceken (desenli, acik renk, yaka detayli) parcalar ile bacaklari ince uzun gosteren (duz, koyu renk) parcalari kombinleyin.'
  }
];