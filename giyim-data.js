module.exports = [
  // ════ AKSESUAR SANATI ════
  {
    id: 'a1', cat: 'aksesuar', num: '01', badge: 'Prestij', badgeCls: 'ret-badge-advanced',
    title: 'Saat Seçimi ve Güç Kodları',
    desc: 'Klasik giyimde erkeğin en önemli ve tek gerçek mücevheri saatidir. Saatin kordonu, kadran boyutu ve genel stili, bulunduğunuz ortamın giyim kodunu (dress code) anında ele verir. İnce zevklere sahip insanlar saatinizin markasından çok, saatinizi kıyafetinizle nasıl eşleştirdiğinize bakar.',
    image: '/images/giyim/saat.png',
    benefits: [
      'Girdiğiniz ortamda (özellikle kurumsal ve diplomatik) ciddiyetinizi ve detaycılığınızı kanıtlar.',
      'Smokin veya klasik takım elbiseyle yapılan "çelik spor saat" hatasını (görgüsüzlük algısını) önler.',
      'Gömlek manşetinizin düzgün durmasını sağlayarak estetik bütünlüğü korur.'
    ],
    mistakes: [
      'Smokin (Black Tie) giyerken devasa bir dalgıç saati veya çelik kordonlu spor bir saat takmak.',
      'Siyah deri kemer/ayakkabı kombinine kahverengi deri kordonlu saat takarak renk bütünlüğünü kırmak.',
      'Çok resmi bir toplantıya Apple Watch gibi dikkat dağıtıcı dijital ekranlı bir akıllı saatle girmek.'
    ],
    steps: [
      'RESMİYET = DERİ VE Sadelik: Resmi ve takım elbiseli (business/formal) ortamlarda mutlaka deri kordonlu, sade ve ince kadranlı (dress watch) saat tercih edilmelidir.',
      'DERİLERİN UYUMU: Deri kordonunuzun rengi (siyah veya kahverengi) ayakkabı ve kemerinizin rengi ile birebir eşleşmek zorundadır. Aksi durum algıyı bozar.',
      'SPOR/GÜNLÜK = ÇELİK: Çelik veya metal kordonlu kalın saatler, daha sportif veya business-casual (yarı resmi/kanvas pantolon) durumlar için uygundur.',
      'ORAN VE MANŞET: Saatinizin kasası bilek kalınlığınızla orantılı olmalıdır. Ayrıca saatiniz gömlek manşetinin altına rahatça kayabilecek kadar ince olmalıdır; gömleği kırıştırmamalıdır.'
    ],
    tip: '💡 Eski usul üst düzey protokol kurallarına göre smokinle ASLA saat takılmaz. Çünkü smokin giyilen o çok özel gecede "Zamanın bir önemi yoktur, zaman durmuştur" mesajı verilir.',
    quiz: {
      q: 'Çok önemli bir kurumsal yönetim kurulu toplantısında, lacivert takım elbise ve siyah Oxford ayakkabı giyen bir yöneticinin saat seçimi nasıl olmalıdır?',
      opts: [
        'Çelik kordonlu, büyük kadranlı pahalı bir dalgıç saati.', 
        'Siyah deri kordonlu, sade ve ince kadranlı (Dress watch).', 
        'Kahverengi deri kordonlu saat.', 
        'Neon silikon kordonlu akıllı saat.'
      ],
      correct: 1,
      ok: 'Harika! Siyah ayakkabı siyah deri kordonla eşleşir ve resmi toplantı, sade/ince bir kadran gerektirir.',
      fail: 'Yanlış. Akıllı saatler veya kalın çelik saatler klasik takım elbiseyle (özellikle resmiyette) uyumsuzdur. Siyah ayakkabı olduğu için siyah kordon seçilmelidir.'
    },
    scenario: {
      label: 'Algı Yönetimi',
      text: 'Bileğinizde 20 bin dolarlık devasa ve çok kalın çelik bir lüks marka saat var, ancak ince kumaşlı zarif bir takım elbise giydiniz.',
      analysis: 'İnsanların saatinizin fiyatını görüp etkileneceğini düşünebilirsiniz, ancak stil bilen biri için bu durum "Yeni Zengin (Nouveau Riche)" görgüsüzlüğüdür. Kıyafetin zarafeti, koldaki ağırlıkla tezat oluşturur.'
    },
    practice: 'Günlük hayatta taktığınız saati inceleyin. Kalınlığı gömlek manşetinizin altına rahatça giriyor mu? Eğer manşete takılıp gömleği kırıştırıyorsa veya manşeti düğmelemenizi engelliyorsa, saatiniz o gömlek için çok kalındır.'
  },
  {
    id: 'a2', cat: 'aksesuar', num: '02', badge: 'Altın Kural', badgeCls: 'ret-badge-beginner',
    title: 'Kemer ve Ayakkabı Uyumu',
    desc: 'Erkek giyiminde tartışmaya kapalı, en katı ve en temel kurallardan biridir: Deriler her zaman eşleşmek zorundadır. Bu kuralı ihlal ettiğiniz anda, üzerinizdeki kıyafet 100 bin lira bile olsa, göz yoran bir asimetri (uyumsuzluk) yaratırsınız.',
    image: '/images/giyim/kemer.png',
    benefits: [
      'Giyinmeyi "gerçekten bildiğinizi" tek bakışta kanıtlar.',
      'Vücudunuzu tam ortadan yatay bir şekilde kesen kemerin, ayakkabılarla aynı renk olarak gözü yormamasını sağlar.',
      'Sizi "şık" ve "özenli" kategorisine anında sokar.'
    ],
    mistakes: [
      'Kahverengi deri ayakkabı ile siyah deri kemer kullanmak (En yaygın erkek giyim hatasıdır).',
      'Takım elbisenin üzerine "Devasa H veya G markalı" kalın tokalı kemer takmak.',
      'Süet ayakkabı giyerken, parlak rugan deri kemer kullanmak (Doku uyumsuzluğu).'
    ],
    steps: [
      'RENK EŞLEŞMESİ: Kemerinizin rengi ayakkabınızın rengi ile AYNI ton ailesinde olmalıdır. (Siyah = Siyah, Koyu Kahve = Koyu Kahve).',
      'DOKU EŞLEŞMESİ: Sadece renk değil, "doku" da eşleşmelidir. Süet bir ayakkabı giyiyorsanız, kemeriniz de süet (veya mat) olmalıdır. Parlak ayakkabıya parlak kemer takılır.',
      'METALLERİN UYUMU: Üzerinizdeki metal detaylar (Kemer tokası, saat kasası, kol düğmesi, evrak çantası tokası) aynı renk ailesinden olmalıdır (Hepsi gümüş veya hepsi altın).',
      'KEMER İNCELİĞİ: Takım elbise ile giyilen kemer ince (yaklaşık 3-3.5 cm) ve çok ince/sade bir tokaya sahip olmalıdır. Kalın deri kemerler sadece Jean pantolonlar içindir.'
    ],
    tip: '💡 Kemer tokasının rengi ile saatinizin kasasının (metali) rengini eşleştirmek, stil danışmanlarının kullandığı gizli bir "Old Money" dokunuşudur. Altın tokalı kemerle gümüş saat takmayın.',
    quiz: {
      q: 'Kahverengi deri ayakkabı ve lacivert takım elbise giyen biri, aşağıdaki aksesuarlardan hangisini kesinlikle KULLANMAMALIDIR?',
      opts: [
        'Açık mavi renkte bir gömlek giymek.', 
        'Gümüş renkli kol düğmeleri takmak.', 
        'Siyah renkli deri kemer takmak.', 
        'Koyu bordo bir kravat takmak.'
      ],
      correct: 2,
      ok: 'Doğru! Kahverengi ayakkabı ile siyah kemer takmak görsel bütünlüğü paramparça eder. Kemer ve ayakkabının deri renkleri her zaman eşleşmelidir.',
      fail: 'Yanlış. Renk uyumunda temel ve yıkılamaz kural kemer-ayakkabı eşleşmesidir. Lacivert takım, kahverengi ayakkabı kombinine kesinlikle kahverengi kemer gerekir.'
    },
    scenario: {
      label: 'Sessiz Lüks (Quiet Luxury)',
      text: 'Çok zengin görünmek için pahalı bir markanın kocaman altın tokalı (logolu) kemerini taktınız.',
      analysis: 'Devasa marka logolu kemerler "Old Money" (Gerçek zenginlik) değil, "Yeni Zengin" (Gösteriş) algısı yaratır. Klasik stilde amaç markayı bağırmak değil, kumaşın ve kalıbın kalitesiyle sessizce fısıldamaktır.'
    },
    practice: 'Dolabınızdaki kemerleri "Klasik/İnce" ve "Spor/Kalın" olarak ayırın. Kalın olanları asla kumaş pantolonlarla eşleştirmeyin.'
  },
  {
    id: 'a3', cat: 'aksesuar', num: '03', badge: 'İnce Dokunuş', badgeCls: 'ret-badge-intermediate',
    title: 'Kravat ve Cep Mendili',
    desc: 'Cep mendili, ceket giyen erkeğin imzasıdır ve ceketi tamamlayan en zarif aksesuardır. Ancak mendil ile kravat arasındaki ilişki çok ince bir renk dengesi üzerine kuruludur. Hatalı eşleştirme sizi anında "acemi" durumuna düşürür.',
    image: '/images/giyim/kravat.png',
    benefits: [
      'Omuzları ve göğsü daha geniş gösterir (gözü yukarı çeker).',
      'Tekdüze ve sıkıcı bir takım elbiseye anında renk ve kişilik katar.',
      'Kravat takmasanız bile ceketin "bitmemiş" görünmesini engeller.'
    ],
    mistakes: [
      'Aynı kutuda satılan, kumaşı ve deseni BİREBİR AYNI olan kravat-mendil setini takmak.',
      'Mendili cetvelle kesilmiş gibi aşırı düzgün, milimetrik katlayıp sürekli düzeltmek.',
      'Kalın yakalı bir cekete incecik (skinny) bir kravat takarak orantıyı bozmak.'
    ],
    steps: [
      'AYNILIK HATASI: ASLA kravatınız ile birebir aynı desen ve kumaşa sahip cep mendili kullanmayın. Bu kutulu setler "Ben stilden anlamıyorum, paketi aldım taktım" mesajı verir.',
      'YANSIMA KURALI: Cep mendili, kravatın içindeki ikinci veya üçüncü bir rengi hafifçe yakalamalıdır. (Örn: Lacivert üzerine ufak bordo noktalı bir kravat takıyorsanız, düz bordo bir cep mendili mükemmeldir).',
      'KRAVATSIZ ŞIKLIK: Kravat takmıyorsanız bile, ceketin göğüs cebine mutlaka düz beyaz keten bir mendil (Presidential fold / Düz katlama) koyun.',
      'ORANTI UYUMU: Kravatın en geniş yeri ile ceketinizin yaka genişliği (Lapel) birbirine eşit olmalıdır. İnce kravatlar dar yakalarla, kalın kravatlar geniş yakalarla eşleşir.'
    ],
    tip: '💡 İtalyanların "Sprezzatura" dediği bir kavram vardır: "Özenilmiş bir çabasızlık". Cep mendiliniz milimetrik değil, umursamazca cebe tıkıştırılmış gibi hafif dağınık (Puff Fold) durduğunda çok daha karizmatik görünürsünüz.',
    quiz: {
      q: 'Kravat ve cep mendili uyumunda yapılan en amatörce hata nedir?',
      opts: [
        'Kravat ve mendilin kutudan çıktığı gibi birebir aynı desen ve aynı kumaştan olması.', 
        'Kravat takmadan sadece ceket ve cep mendili kullanmak.', 
        'Cep mendilini düz (dikdörtgen/Presidential) katlamak.', 
        'Kravatta kalın ipek kumaş kullanmak.'
      ],
      correct: 0,
      ok: 'Mükemmel! Birebir aynı desen kullanmak hazır, ucuz ve stilsiz setleri akla getirir. Uyum; tıpatıp aynısı olmak demek değildir, tamamlayıcı olmak demektir.',
      fail: 'Yanlış. Kravat ve mendilin "takım" halinde aynı desenden olması, stilden anlamayanların başvurduğu ilk hatadır. Diğer seçenekler (kravatsız mendil veya düz katlama) son derece geçerli stil kurallarıdır.'
    },
    scenario: {
      label: 'Toplantı Dinamiği',
      text: 'Çok önemli bir toplantıdasınız ancak ortam kravat gerektirmeyecek kadar rahat (Business Casual) ve siz kravat takmadığınız için ceketiniz çok "boş" duruyor.',
      analysis: 'Böyle bir ortamda yakası açık bir gömlek ve ceketin sol cebine konulmuş ufak bir cep mendili, size "hem rahat hem de detaylara son derece özen gösteren bir lider" havası katar.'
    },
    practice: 'Evinizdeki bir ceketi alın, beyaz bir mendili "Puff Fold" (Mendili ortasından tutup, açık uçlarını yukarı veya aşağı verecek şekilde serbestçe cebe bırakma) tekniğiyle katlayıp aynada inceleyin.'
  },
  
  // ════ VÜCUT TİPİNE GÖRE GİYİM ════
  {
    id: 'v1', cat: 'vucut-tipi', num: '01', badge: 'Atletik', badgeCls: 'ret-badge-intermediate',
    title: 'Ters Üçgen Vücut Tipi',
    desc: 'Omuzların çok geniş, belin ve kalçanın ince olduğu bu vücut tipi (athletic / V-taper), erkek giyiminde ideal form kabul edilse de giysilerin omuzlara uyup bel kısmında bol durma (paraşüt gibi şişme) riskini taşır.',
    image: '/images/giyim/ters-ucgen.png',
    benefits: [
      'Giyim kuşamda doğuştan gelen kaslı/maskülen avantajı korur.',
      'Dar kesim (Slim) giysilerin tam omuzlara oturarak vücudu iyi göstermesini sağlar.',
      'Gömleklerde yığılma olmamasını sağlayarak pürüzsüz bir V hattı yaratır.'
    ],
    mistakes: [
      'Sırf omuzlara oluyor diye alınan "Regular" veya "Oversize" kıyafetlerin bel bölgesinde çadır gibi durmasına izin vermek.',
      'Aşırı dar (Skinny) jean pantolonlar giyerek alt bedeni kürdan gibi, üst bedeni ise komik derecede iri (Johnny Bravo) göstermek.',
      'Vatka içeren (yapılı) ceketler tercih ederek omuzları gereğinden fazla devasa göstermek.'
    ],
    steps: [
      'SLIM/TAILORED FIT SEÇİMİ: Gömlek ve ceketlerde her zaman "Slim Fit" veya "Tailored Fit" tercih edin. Standard fit giysiler ince olan belinizde potluk yaratır.',
      'V-YAKA TİŞÖRTLER: V yaka t-shirtler göğüs kafesinizi dengeli gösterirken, omuzların genişliğini estetik bir şekilde vurgular.',
      'ALT BEDENİ DENGELEME: Omuzlarınız geniş olduğu için dengeyi sağlamak adına alt giyimde düz kesim (straight) veya hafif slim fit pantolonlar seçin.',
      'TERZİ KULLANIMI: Çoğu standart hazır giyim omuzlarınıza tam olduğunda belinize bol gelecektir. Gömlek ve ceketlerinizi mutlaka terzide belden pens attırarak daralttırın.'
    ],
    tip: '💡 Desenli pantolonlar, açık renkli alt giyimler veya dikkat çekici kemerler, dikkati ince olan alt bölgeye çekerek üst bedenin iri yapısıyla optik bir denge kurmanızı sağlar.',
    quiz: {
      q: 'Ters üçgen (Atletik) vücut tipine sahip bir erkeğin pantolon seçerken kaçınması gereken en büyük stil hatası nedir?',
      opts: [
        'Düz kesim (Straight fit) seçmek.', 
        'Koyu renk (Siyah/Lacivert) pantolon giymek.', 
        'Aşırı dar (Skinny/Super Skinny) pantolon seçmek.', 
        'Açık renkli keten pantolon kullanmak.'
      ],
      correct: 2,
      ok: 'Doğru! Skinny pantolonlar ince olan bacakları daha da cılız, üst bedeni ise karikatürize edilmiş (orantısız) derecede büyük gösterir.',
      fail: 'Yanlış. Ters üçgenlerde en büyük hata alt bölgeyi daha da dar gösterip çizgi film karakteri gibi görünmektir. Skinny fit kesinlikle terk edilmelidir.'
    },
    scenario: {
      label: 'Terzilik (Bespoke)',
      text: 'Mağazadan omuzlarınıza tam oturan harika bir ceket aldınız, ancak ceket düğmesini kapattığınızda göbeğinizle ceket arasına iki yumruk sığacak kadar boşluk kalıyor.',
      analysis: 'Terzi en yakın dostunuzdur. Ceketin omuzlara tam oturması (satın alırken sonradan değiştirilemeyecek tek yer) mükemmeldir. Şimdi tek yapmanız gereken ceketi terziye götürüp belini (waist) daralttırmak ve size özel (bespoke) bir fit elde etmektir.'
    },
    practice: 'Gardırobunuzdaki en sevdiğiniz 3 gömleği giyin ve aynanın karşısına geçin. Bel kısmındaki fazlalık kumaşları arka taraftan elinizle toplayıp daraltın. "Regular" ile "Tailored" arasındaki o mükemmel farkı kendi gözünüzle görün.'
  },
  {
    id: 'v2', cat: 'vucut-tipi', num: '02', badge: 'Klasik', badgeCls: 'ret-badge-beginner',
    title: 'Dikdörtgen Vücut Tipi',
    desc: 'Omuzların, belin ve kalçanın neredeyse aynı genişlikte olduğu, düz bir (H-tipi) vücut formudur. Buradaki stil stratejisinin tek bir amacı vardır: Omuzları geniş gösterip beli ince algılatarak sahte bir "V (Ters Üçgen)" illüzyonu yaratmak.',
    benefits: [
      'Görsel yanılsamalarla (optik illüzyon) daha maskülen ve geniş omuzlu görünmeyi sağlar.',
      'Sizi "düz bir kutu" görünümünden kurtarıp yapısal bir forma sokar.',
      'Katmanlı giyim (Layering) modasını en iyi taşıyan vücut tipidir.'
    ],
    mistakes: [
      'Bedeninize yapışan incecik siyah tişörtler giyip omuzların darlığını ortaya çıkarmak.',
      'Dikine çizgili gömlekler giyerek bedeni daha da dar ve ince uzun göstermek.',
      'Formsuz, düşük omuzlu (unstructured) salaş hırkalar veya kazaklar kullanmak.'
    ],
    steps: [
      'KATMANLI GİYİM (Layering): İnce tek bir katman yerine üst üste giyinmek (Örn: T-shirt üzerine ekose gömlek, onun üzerine yelek) göğüs kafesinize ve bedeninize hacim katar.',
      'YAPILI (Structured) CEKETLER: Omuzları vatkalı, iç yapısı tok ve keskin hatlı blazer ceketler tercih ederek omuzlarınızı olduğundan geniş gösterin.',
      'YATAY ÇİZGİLER: Yatay çizgili üstler (Özellikle omuz ve göğüs hizasında olanlar) göğüs bölgesini optik olarak genişletir. Breton tişörtler mükemmel bir seçimdir.',
      'YAKA DETAYLARI: Gömlek yakalarında dar yakalar yerine, açık (cutaway/spread) veya geniş yakalar seçmek, yüzü ve omuz açıklığını daha geniş algılatır.'
    ],
    tip: '💡 Renk bloklama (Color Blocking) tekniğini kullanın. Alt bedende koyu renk pantolon, üst bedende ise daha açık renk ceket/kazak giyerek dikkati üst kısma çekin ve genişlik algısını artırın.',
    quiz: {
      q: 'Dikdörtgen vücut formunda "V (Ters Üçgen)" illüzyonu yaratmak için uygulanabilecek en etkili taktik nedir?',
      opts: [
        'Bedeninize tam yapışan siyah ve çok dar t-shirtler giymek.', 
        'Yapılı (vatkalı) ceketler ve katmanlı giyim (layering) kullanmak.', 
        'Dikey (Yukarıdan aşağı) çizgili gömlekler seçmek.', 
        'Çok kalın bir deri kemer takmak.'
      ],
      correct: 1,
      ok: 'Kesinlikle! Yapılı ceketler omuzlara fiziki olarak keskinlik ve genişlik katar, katmanlı giyim ise göğüs kafesine gerekli hacmi (kalınlığı) verir.',
      fail: 'Yanlış. Dikey çizgiler ve tek kat siyah tişört, bedeni daha da dar, zayıf ve düz bir çizgi halinde gösterir. Amaç bedene yatayda hacim katmaktir.'
    },
    scenario: {
      label: 'Optik İllüzyon',
      text: 'Omuzlarınız dar ve belinizle aynı hizada. İnce, düz bir tişört giydiğinizde aynada dümdüz bir kutu gibi (genişlikten yoksun) görünüyorsunuz.',
      analysis: 'Tişörtün üzerine düğmeleri açık bir denim (kot) ceket giyerek veya omuzlarınıza ince bir kazak bağlayarak ANINDA omuz bölgenize yapısal bir genişlik katabilir ve omuzdan bele doğru hafifçe daralan o illüzyonu yaratabilirsiniz.'
    },
    practice: 'Bugün dışarı çıkarken tek kat (sadece tişört veya gömlek) giymek yerine, en az iki katman (tişört üzeri gömlek, veya gömlek üzeri yelek) giyinip aynadaki omuz genişliğinizi karşılaştırın.'
  },
  {
    id: 'v3', cat: 'vucut-tipi', num: '03', badge: 'Konfor', badgeCls: 'ret-badge-intermediate',
    title: 'Oval (Elma) Vücut Tipi',
    desc: 'Karın/göbek bölgesinin omuzlar ve kalçalardan daha geniş olduğu yapıdır. Hedef; bedeni optik olarak uzatmak, göbek bölgesindeki enine çizgiyi kırarak silueti inceltmek ve karşının gözünü karın bölgesinden alıp yüz bölgesine çekmektir.',
    image: '/images/giyim/oval.png',
    benefits: [
      'Olduğunuzdan en az 5-10 kilo daha zayıf ve fit görünmenizi sağlar.',
      'Karın bölgesindeki şişkinliği kamufle ederek özgüvenli durmanıza yardımcı olur.',
      'Dikey çizgiler sayesinde boyunuzu optik olarak daha uzun algılatır.'
    ],
    mistakes: [
      'Göbeği saklamak için normalden 2 beden büyük "çadır gibi" salaş tişörtler giymek (Sizi daha da iri gösterir).',
      'Yatay kalın çizgili veya göbek kısmında devasa logolar/yazılar olan üstler tercih etmek.',
      'Bel kemerini göbeğin çok altına (kasık bölgesine) takarak göbeğin öne sarkmasını vurgulamak.'
    ],
    steps: [
      'MONOKROM GİYİM: Koyu ve monokrom (bütüncül renk) kombinler yapın. Baştan aşağı aynı veya çok yakın tonlarda (Örn: Lacivert pantolon + Lacivert/Koyu mavi gömlek) giyinmek, kesintisiz bir "dikey çizgi" yaratarak silueti anında inceltir.',
      'TEK SIRA DÜĞME (AÇIK): Tek sıra düğmeli (Single-breasted) blazer ceketler tercih edin ve ceketinizin düğmesini her zaman açık bırakın. İçinizdeki tişört/gömlek ile ceket kenarları arasında kalan alan "dikey ve ince bir sütun" yaratır.',
      'DİKEY ÇİZGİLER (Pinstripe): Kalın desenlerden, büyük karelerden ve yatay çizgilerden kesinlikle kaçının. Gömlek veya takımlardaki ince dikey çizgiler sizi uzatır.',
      'YÜZE ODAK: Renk veya dikkat çekici detayları boyun ve yüz çevresinde kullanın. (Örn: Göğüs cebine konan dikkat çekici bir mendil, fular veya iyi bir yaka kesimi dikkati karın bölgesinden yüze taşır).'
    ],
    tip: '💡 Kemer yerine Pantolon Askısı (Suspenders) kullanın. Kemer, bedeninizi ortadan ikiye yatay olarak böler ve göbeği vurgular. Askılar ise dikey çizgiler yaratarak hem şık durur hem de pantolonun göbek altına düşmesini engeller.',
    quiz: {
      q: 'Oval vücut tipine (göbek bölgesi geniş) sahip birinin, ceket kullanımında uygulayabileceği en iyi optik illüzyon taktiği nedir?',
      opts: [
        'Çift sıra düğmeli (Kruvaze) ceket giyip önünü iliklemek.', 
        'Tek sıra düğmeli ceketi önünü AÇIK bırakarak giymek.', 
        'Çok kalın kumaşlı (Tüvit) ve büyük kareli ceketler seçmek.', 
        'Ceket giymeyip sadece tişört kullanmak.'
      ],
      correct: 1,
      ok: 'Harika! Ceketin önünün açık kalması, içteki gömleğin sadece orta kısmının görünmesini sağlar. Bu da ortada optik olarak "dikey, dar bir sütun" yaratarak gövdeyi anında inceltir.',
      fail: 'Yanlış. Kruvaze ceketler veya kapalı ceketler göğse ve karna ekstra kumaş ve enine hacim katar. Ceketin önünü açık bırakmak keskin dikey çizgiler (incelme efekti) yaratır.'
    },
    scenario: {
      label: 'Beden Yanılgısı',
      text: 'Fazla kilonuzu ve göbeğinizi gizlemek umuduyla normal bedeninizden 2-3 beden daha büyük, omuzları düşmüş salaş bir tişört giydiniz.',
      analysis: 'Bu çok sık yapılan kritik bir hatadır. Fazla kumaş vücut hatlarını gizlemez, aksine silueti bir "çadır" gibi sararak kişinin iskeletini tamamen yok eder ve onu olduğundan çok daha iri gösterir. Kıyafet "mükemmel fit" (ne yapışan ne de sarkan) olmalıdır.'
    },
    practice: 'Eğer dolabınızda sırf "bollukla göbeğimi gizlerim" diye aldığınız eşofmanlar veya devasa tişörtler varsa, bugün onları giymeyin. Koyu renkli, omuzları tam oturan ama göbek kısmı hafif dökümlü bir gömlek giyip aynadaki farka (daralmaya) bakın.'
  },
  {
    id: 'v4', cat: 'vucut-tipi', num: '04', badge: 'Üst Seviye', badgeCls: 'ret-badge-advanced',
    title: 'Üçgen Vücut Tipi',
    desc: 'Erkeklerde omuzların nispeten dar, bel ve basen (kalça) kısmındaki ölçülerin omuzlardan daha geniş olduğu (A-tipi) vücut şeklidir. Görsel ağırlık alt bölgededir. Giyimdeki temel strateji: Dikkati ve hacmi üst bedene taşıyıp, alt bedeni koyu renklerle daraltmaktır.',
    image: '/images/giyim/dikdortgen.png',
    benefits: [
      'Geniş olan kalça/basen bölgesinin dar görünmesini sağlayarak estetik bir denge kurar.',
      'Üst bedene (göğüs ve omuzlara) hacim katarak maskülen algıyı artırır.',
      'Sizi basık/kısa görünmekten kurtarıp yukarı doğru uzatır.'
    ],
    mistakes: [
      'Açık renkli (beyaz, bej) pantolonlar veya belirgin desenli alt giyimler tercih edip tüm dikkati geniş basenlere çekmek.',
      'Omuzları düşük (raglan kol) veya vatkasız dar kazaklar giyerek üst bedenin darlığını ortaya çıkarmak.',
      'Bileğe doğru konik daralan (tapered/skinny) pantolonlar giyip kalça bölgesinin genişliğini (armut şekli) ekstra vurgulamak.'
    ],
    steps: [
      'RENK STRATEJİSİ (AÇIK ÜST/KOYU ALT): Koyu, mat ve düz renkleri her zaman alt giyimde (pantolon) kullanarak baseni küçültün. Açık renkleri ve yatay desenleri ise üst giyimde kullanarak göğsü/omuzları genişletin.',
      'VATKA VE YAPI ŞARTTIR: Ceketlerin omuzlarında hafif vatka (padding) kullanımı sizin için hayat kurtarıcıdır. Omuzları fiziksel olarak genişleterek alt bölgeyle "Ters Üçgen" dengesi kurmanızı sağlar.',
      'HACİM VEREN DETAYLAR: Omuz ve göğüs hizasında ekstra detayları olan (Apoletli ceketler, çift göğüs cepli gömlekler, kalın yakalı paltolar) kıyafetler üst bedene sahte bir hacim (kas) katar.',
      'PANTOLON KESİMİ: Daralan (skinny/tapered) pantolonlardan kesinlikle uzak durun. Yukarıdan aşağıya kadar Düz Kesim (Straight Cut) inen veya hafif paçası genişleyen (Bootcut) pantolonlar kalça ile bacak orantısını gizler.'
    ],
    tip: '💡 Kruvaze (Çift sıra düğmeli) ceketler ve yelekler, üçgen vücut tipleri için mükemmeldir çünkü hem omuzları geniş gösterir hem de göğüs bölgesini kalkan gibi kapatarak bel kalınlığını gizler.',
    quiz: {
      q: 'Üçgen vücut tipinde (geniş kalça, dar omuz) "Renk Kullanımındaki" en doğru optik strateji aşağıdakilerden hangisidir?',
      opts: [
        'Alt bedene KOYU (Siyah/Lacivert), Üst bedene AÇIK renk (Beyaz/Açık Mavi) giymek.', 
        'Alt bedene AÇIK renk, Üst bedene KOYU renk giymek.', 
        'Baştan aşağı sadece fosforlu/neon renkler giymek.', 
        'Sadece ekose/kareli pantolon giymek.'
      ],
      correct: 0,
      ok: 'Doğru! Koyu renkli pantolonlar baseni ışığı emerek daraltır, açık renkli üstler ise göğsü ve omuzları yansıtarak geniş gösterir. Bu sayede vücut harika bir dengeye kavuşur.',
      fail: 'Yanlış. Eğer alt bölgede açık renk (örneğin beyaz pantolon) giyerseniz, dar olan omuzlarınız siyah tişört içinde iyice küçülür ve basen kısmınız bir fener gibi patlayarak daha da devasa durur.'
    },
    scenario: {
      label: 'Terzilik Sırları',
      text: 'Mağazalardaki standart kalıp gömleklerin (M beden vb.) omuzları size tam olurken, göbek/basen kısmı sizi SIKIYOR veya düğmeleri geriliyor.',
      analysis: 'Omuz (dar) ile karın (geniş) ölçüsü arasındaki bu farklılık, terzi müdahalesini zorunlu kılar. Giyim hilesi şudur: Kıyafetleri en geniş yerinize (karın/basen) uyacak şekilde 1 beden büyük (L beden) alın. Sonra terziye gidip sadece omuz/kol kısımlarını kendi dar omuz ölçünüze göre daralttırın.'
    },
    practice: 'Gardırobunuzu açın; üst bedene dikkat çeken, yakası geniş, cepli ve açık renkli parçalar ile bacakları düz ve ince uzun gösteren koyu renkli pantolonları eşleştirerek yepyeni bir "Denge Kombini" yaratın.'
  }
];