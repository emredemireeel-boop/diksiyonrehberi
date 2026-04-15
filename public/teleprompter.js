// ═══════════════════════════════════════════════════════════
//  📺 TELEPROMPTER MODÜLÜ — DİKSİYON REHBERİ
//  Gerçek Teleprompter Kaydırması · Ses Kaydı · 10 Kategori
// ═══════════════════════════════════════════════════════════

const TP_CATEGORIES = [
  {
    id: 'ana-haber', icon: '📺', label: 'Ana Haber',
    colorAccent: '#1E3A6E', colorBg: 'rgba(30,58,110,0.12)',
    texts: [
      {
        id: 'ah-deprem', title: 'Gece Yarısı Depremi', subtitle: 'Acil haber bülteni', difficulty: 'Orta',
        text: `İyi akşamlar sayın izleyiciler. Sabahın üçünde yaşanan yüksek şiddetli deprem, ülkenin güneyindeki birçok şehri derinden sarstı. Meteoroloji Genel Müdürlüğü verilerine göre depremin büyüklüğü Richter ölçeğinde 6.8 olarak ölçüldü ve merkez üssü, sahil şeridine yalnızca on beş kilometre uzaklıktaki açık deniz noktasıydı.\n\nİlk rapor ve gelişmelere bakıldığında, afet koordinasyon merkezi hızla harekete geçerek en az altı farklı ilden arama kurtarma ekibi sevk etti. Hastaneler olağanüstü hal protokollerini aktive ederken, çok sayıda sağlık görevlisi tatilden geri çağrıldı.\n\nYetkililerin açıklamasına göre yaralı sayısı saatler içinde artmaya devam edecek ve kesin tablo ancak gün ağardıktan sonra netleşecek. Başbakan yaptığı açıklamada, hükümetin tüm imkânlarıyla bölgenin yanında olduğunu vurgulayarak olağanüstü hal kararını ilan etti.\n\nBu haberi ve diğer gelişmeleri izlemeye devam edeceğiz. Yayınımızda kalın.`
      },
      {
        id: 'ah-iklim', title: 'Küresel İklim Zirvesi', subtitle: 'Uluslararası çevre haberleri', difficulty: 'Orta',
        text: `Dünya liderleri bu hafta, iklim değişikliğiyle mücadelede son on yılın en kapsamlı adımlarından birini atmak üzere Cenevre'de bir araya geliyor. Kırk ülkenin devlet ve hükümet başkanlarının katıldığı zirvede, karbon emisyonlarını 2035 yılına kadar yüzde elli oranında azaltmayı hedefleyen bağlayıcı bir anlaşma masada.\n\nMüzakerelerin seyrini yakından takip eden iklim bilimciler, mevcut taahhütlerin küresel sıcaklık artışını sanayi öncesi döneme kıyasla 1.5 santigrat derecenin altında tutmak için yeterli olmayacağı konusunda uyarıyor.\n\nTürkiye'nin müzakereler masasındaki tutumu ise ulusal egemenlik ve ekonomik dönüşüm hakkaniyeti üzerine kurulu. Çevre Bakanı yaptığı basın toplantısında, Türkiye'nin 2053 karbon nötr hedefinden geri adım atmayacağını belirtti.\n\nZirvenin yarın başlayacak ikinci aşamasında, teknoloji transferi ve yeşil kalkınma fonuna dair teklifler gündeme gelecek. Yayınımızı izlemeye devam ediniz.`
      },
      {
        id: 'ah-secim', title: 'Seçim Sonuçları Özel Yayını', subtitle: 'Canlı seçim yayını', difficulty: 'Hızlı',
        text: `Ve gece tam sıfır dört sıfır iki, sandıkların yüzde seksen yedisi sayıldı. İşte o rakamlar ekranlara yansıyor: birinci parti yüzde otuz iki virgül dört, ikinci parti yüzde yirmi dokuz virgül sekiz, üçüncü parti ise yüzde on yedi virgül iki.\n\nOy verme oranı saat sekizde kapılar kapanmadan yüzde yetmiş üçe ulaştı; bu, son çeyrek yüzyılın en yüksek katılım rakamı. Büyük şehir merkezlerinde kuyruklar kapılar kapanmadan saatler önce başlamıştı.\n\nBölgesel tabloyu değerlendirdiğimizde, birinci parti iç bölgeler ve doğu illerinde öne geçerken, ikinci parti kıyı şehirlerinde üstünlüğünü koruyor. Seçim Kurulu Başkanı bugüne kadar organiza bir seçim hilesi ihbarı gelmediğini bildirdi.\n\nErken sonuçlara göre hükümet kurma görüşmeleri bu hafta başlayabilir. Sabaha kadar buradayız; gelişmeleri birlikte izleyeceğiz. Bağlı kalmaya devam ediyoruz.`
      },
      {
        id: 'ah-ekonomi', title: 'Yıl Sonu Enflasyon Raporu', subtitle: 'Ekonomi gündemi', difficulty: 'Orta',
        text: `Sayın seyirciler, piyasaların haftalardır büyük bir merakla beklediği yıl sonu enflasyon raporu nihayet açıklandı. Merkez Bankası Başkanı'nın kameralar karşısına geçerek duyurduğu verilere göre, tüketici fiyat endeksindeki artış beklentilerin bir puan altında kaldı.\n\nEkonomi kurmayları bu düşüşü, son çeyrekte uygulanan sıkı para politikalarına ve ithalatta getirilen yeni kısıtlamalara bağlıyor. Ancak sokaktaki vatandaş için durum hala ciddiyetini koruyor; gıda ve temel tüketim maddelerindeki fiyat katılığı pazar tezgahlarına yansımış değil.\n\nMuhalefet cephesi ise açıklanan rakamların gerçeği yansıtmadığını savundu ve bağımsız araştırma şirketlerinin verileriyle resmi rakamlar arasındaki uçuruma dikkat çekti.\n\nUzmanlar, önümüzdeki yılın ilk aylarında döviz kurlarındaki hareketliliğin devam edeceğini ve hanehalkı bütçesindeki daralmanın hissedileceğini belirtiyor. Konunun detaylarını ekonomi masası editörümüzden alacağız.`
      },
      {
        id: 'ah-uluslararasi', title: 'Sınır Ötesi Operasyon', subtitle: 'Sıcak bölgeden anlık kriz', difficulty: 'Hızlı',
        text: `Hareketli saatlerin yaşandığı sınır hattından sıcak ve çok kritik bir son dakika bilgisini sizlerle paylaşıyoruz. Türk Silahlı Kuvvetleri, sınır güvenliğini ihlal eden terör unsurlarına karşı gece yarısı itibariyle kapsamlı bir hava destekli operasyon başlattı.\n\nMilli Savunma Bakanlığı kaynaklarından edinilen ilk bilgilere göre, önceden tespit edilen yedi farklı lojistik hedef F-16 savaş uçakları tarafından vurularak imha edildi. Operasyona yerli üretim taarruz helikopterleri ve insansız hava araçları da aktif olarak katılıyor.\n\nBölgedeki diplomatik kaynaklar, bu harekâtın sınır ötesindeki müttefik ülkelere üç gün öncesinden bildirildiğini doğruladı. Ancak komşu ülkenin Dışişleri Bakanlığı, hava sahası ihlali gerekçesiyle uluslararası topluma acil çağrıda bulundu.\n\nSınır hattındaki muhabir arkadaşımız, topçu atışlarının seslerinin şu anda bile duyulduğunu bildiriyor. Operasyonun detayları ve bölgeden canlı bağlantılarla özel yayınımız kesintisiz devam edecek.`
      },
      {
        id: 'ah-teknoloji', title: 'Küresel Siber Saldırı', subtitle: 'Acil teknoloji uyarısı', difficulty: 'Hızlı',
        text: `Son dakika gelişmesiyle bültenimize devam ediyoruz... Şu an itibariyle tarihin en büyük ve eşzamanlı küresel siber saldırılarından biri yaşanıyor. Sabah saatlerinde Doğu Asya'da başlayan ve hızla Avrupa ile Amerika kıtasına yayılan sistem çöküşü, hayatı adeta felç etmiş durumda.\n\nUluslararası bankacılık ağları, telekomünikasyon şirketleri ve hatta bazı ülkelerin Sağlık Bakanlığı veri tabanları şu anda tamamen erişime kapanmış durumda. Türkiye'de de iki büyük hava yolu şirketinin biletleme sistemi çöktü ve yüzlerce uçuş iptal edildi.\n\nSiber güvenlik uzmanları, bu eşine rastlanmamış saldırının arkasında organize bir hacker grubunun bulunduğunu düşünüyor. Fidye yazılımı (Ransomware) olarak adlandırılan bu virüs, sistemleri kilitledikten sonra şirketlerden milyonlarca dolar değerinde kripto para talep ediyor.\n\nYetkililer, vatandaşları şüpheli e-postalara ve SMS bağlantılarına kesinlikle tıklamamaları konusunda şiddetle uyarıyor.`
      },
      {
        id: 'ah-toplumsal', title: 'Büyük İstanbul Kar Fırtınası', subtitle: 'Doğal afet ve yaşam', difficulty: 'Orta',
        text: `İstanbul son otuz yılın en ağır ve yıkıcı kar fırtınasına teslim oldu sayın seyirciler. Meteoroloji'nin günlerdir tekrarladığı uyarılar ne yazık ki gerçeğe dönüştü. İstanbul Boğazı'nda hızı saatte seksen kilometreye ulaşan poyraz, kar yağışını adeta bir tipiye dönüştürdü.\n\nŞehrin iki yakasını birbirine bağlayan ana arterler, özellikle TEM Otoyolu ve köprü bağlantı yolları on saatten fazladır ulaşıma tamamen kapalı. Yollarda mahsur kalan binlerce araca Karayolları ve Kızılay ekipleri kumanya ile sıcak çay dağıtımı yapıyor.\n\nValilik az önce yaptığı açıklamayla, kamu kurumlarında çalışan hamile ve engelli personelin üç gün idari izinli sayılacağını, ilk ve orta dereceli okulların ise bir hafta süreyle tatil edildiğini duyurdu.\n\nUzmanlar, gece saatlerinde sıcaklığın eksi on derecelere kadar düşeceğini ve don tehlikesine karşı çok zorunlu olmadıkça hususi araçlarla kesinlikle trafiğe çıkılmaması gerektiğini yineliyor.`
      },
      {
        id: 'ah-diplomasi', title: 'Uluslararası Kriz ve Müzakere', subtitle: 'Diplomasi ve dış politika', difficulty: 'Çok Hızlı',
        text: `Sayın seyirciler, uluslararası arenada tahayyül edilmesi güç, son derece kaotik ve spekülatif bir krizle karşı karşıyayız. Dışişleri Bakanlığı karargâhında dün gece geç saatlere kadar süren meşakkatli ve teferruatlı müzakereler, maalesef beklenen muvaffakiyeti sağlayamadı.\n\nKarşı tarafın inisiyatif almaktan kaçınması ve diplomatik mefhumları hiçe sayan müsamahasız tavrı, ipleri tam anlamıyla kopma noktasına getirdi. Uzmanlar uyarıyor; bu sadece iki ülkenin değil, doğrudan tüm kıtanın istikrarını sarsacak boyutta devasa bir handikaptır.\n\nYarın sabah saat dokuz sularında yapılacak olan konsorsiyum toplantısında alınacak kararların mutlak surette rasyonalizasyon ekseninde olması ve yalnızca liyakat sahibi heyetler tarafından yönetilmesi şart koşuldu.\n\nGözler şimdi Birleşmiş Milletler'den gelecek yeni yaptırım kararlarına ve bölgedeki askeri hareketliliğe çevrilmiş durumda. Gelişmeleri canlı bağlantılarla aktarmayı sürdüreceğiz.`
      },
      {
        id: 'ah-burokrasi', title: 'Bürokratik Revizyon ve Spekülasyonlar', subtitle: 'Makroekonomi ve reformlar', difficulty: 'Hızlı',
        text: `Ekonomi bülteniyle ekranlarınızdayız. Piyasaları günlerdir sarsan manipülatif spekülasyonların ardından, Merkez Bankası ve Hazine Müsteşarlığı ortak ve çok sert bir rasyonalizasyon paketi açıkladı. Yabancı müteşebbislerin pazara direkt yatırım yapmasını kolaylaştırmayı tasavvur eden bu tasarı, hantal bürokratik hiyerarşideki ataleti tamamen kırmayı hedefliyor.\n\nAncak sektör temsilcilerinin son verdikleri röportajlarda sıkça altını çizdiği son derece kritik bir teferruat var: Enflasyonla mücadelede alınacak yeni inisiyatiflerin, sadece kağıt üzerinde kalan birer temenni olmaktan çıkıp acilen pratiğe dökülmesi fevkalade meşakkatli bir süreç olacak.\n\nHükümet kanadı, yapısal reformların yarın değil, hemen bugün ve kati bir kararlılıkla başlaması gerektiğini ısrarla ifade etse de; sahadaki laboratuvar analizleri dağıtım ve distribütör verileri, toparlanmanın bir nebze daha zaman alacağına açıkça işaret ediyor.\n\nKura müdahale ihtimalleri ise döviz büroları önünde uzun kuyruklar oluşturmaya devam ediyor.`
      },
      {
        id: 'ah-felaket', title: 'Meteorolojik Teyakkuz ve Altyapı', subtitle: 'Afet yönetimi ve kriz', difficulty: 'Hızlı',
        text: `Kıymetli izleyenler, Meteoroloji Genel Müdürlüğü ve Afet Koordinasyon Enstitüsü, Marmara Bölgesi'ni bütünüyle etkisi altına alacak eşi benzeri görülmemiş bir kasırga ihtimaline karşı azami teyakkuza geçildiğini duyurdu.\n\nOlası bir felaket senaryosunu tahayyül etmek bile oldukça ürkütücü; zira megakentteki kronik altyapı eksiklikleri ve riskli dar güzergâhlar, acil müdahale ekiplerinin işini fevkalade zorlaştırıyor. Boğaziçi Üniversitesi veri laboratuvarlarında yapılan ardışık simülasyonlar, rüzgarın hızının gece yarısı itibariyle saatte yüz kırk kilometreye kadar ulaşabileceğini kesin bir dille öngörüyor.\n\nYetkililer, vatandaşların kati surette sokağa çıkmamaları, araçlarıyla hiçbir koşulda trafiğe çıkmamaları ve sosyal medyadaki asılsız spekülasyonlara katiyen itibar etmemeleri konusunda çok sert uyarılarda bulundu.\n\nTüm resmi kurumların tam bir konsantrasyon ve eşgüdüm ile süreci yönettiği ve elektrik kesintilerine karşı yedek jeneratörlerin devreye alındığı da gelen son bilgiler arasında.`
      },
      {
        id: 'ah-arkeoloji', title: 'Antik Bölgede Arkeolojik Keşif', subtitle: 'Kültür, tarih ve restorasyon', difficulty: 'Orta',
        text: `Ana haber bültenimizi tarihin tozlu sayfalarını aralayan eşsiz ve büyüleyici bir keşifle noktalıyoruz. Anadolu'nun ücra bir köşesinde aylardır sürdürülen hassas arkeolojik kazılarda, antik döneme ait olduğu tespit edilen devasa askeri bir karargâhın kalıntıları nihayet gün yüzüne çıkarıldı.\n\nSöz konusu yapının göz kamaştıran mimari teferruatları ve ince mühendislik harikası freskleri, binlerce yıl önceki uygarlıkların estetik tasavvurunun ne denli ileri ve kompleks bir düzeyde olduğunu tüm dünyaya kanıtlıyor.\n\nRestorasyon çalışmalarını büyük bir titizlikle üstlenen akademi enstitüsü yetkilileri, yorgun eserlerin aslına rücu etmesi için son derece muhalif iklim şartlarına rağmen olağanüstü bir efor sarf ediyor. Ünlü bir tarih bilimcinin gazetemize verdiği özel röportajında da belirttiği gibi: "Bu kadim toprakların kültürel liyakatini anlamak için, yerin altındaki o meşakkatli hafızayı uyandırmak zorundayız."\n\nÖte yandan, bölgedeki kaçak kazı ve sabotaj girişimlerine karşı askeriyenin güvenlik önlemlerini azami seviyeye çıkardığını da hatırlatalım.`
      },
      {
        id: 'ah-havacilik', title: 'Milli Havacılık Sürprizi', subtitle: 'Havacılık ve savunma', difficulty: 'Çok Hızlı',
        text: `Sayın seyirciler, savunma sanayii ve havacılık alanında bugün tarihi bir kilometre taşı daha geride bırakıldı. Yerli mühendislerin uzun ve meşakkatli mesailer sonucunda tasarladığı insansız hava aracı, stratosfer sınırını aşarak ilk yörünge altı testlerini üstün bir muvaffakiyetle tamamladı.\n\nTest uçuşunda uygulanan aerodinamik manevralar, yabancı otoriteler tarafından dahi şaşkınlık ve takdirle karşılandı. Projenin mimarları olan müteşebbis heyet, entegrasyon sürecinin beklenenden çok daha rasyonel bir seyir izlediğini ve önümüzdeki çeyrekte seri üretime geçmek için gerekli altyapının sağlandığını vurguladı.\n\nBu eşi benzeri görülmemiş inisiyatif, ülkenin küresel arenadaki prestijini bir üst lige taşıyacak, olası dezavantajları ise bütünüyle ortadan kaldıracak vizyoner bir hamledir.\n\nYarın yapılacak olan geniş katılımlı basın toplantısıyla, projenin uluslararası arenadaki satış ve tescil anlaşmalarının kamuoyuyla paylaşılması bekleniyor.`
      },
      {
        id: 'ah-saglikkriz', title: 'Pandemi ve Spekülasyonlar', subtitle: 'Sağlık kurulu uyarıları', difficulty: 'Hızlı',
        text: `Ana haber bültenimize küresel sağlığı yakından ilgilendiren kritik bir son dakika gelişmesiyle devam ediyoruz. Dünya Sağlık Örgütü, Afrika kıtasının güneyinden yayılan ve genetik dizilimi hızla mutasyona uğrayan yepyeni bir varyant hakkında acil teyakkuz ilan etti.\n\nSosyal medya platformlarında dolaşan asılsız dezenformasyon ve spekülatif haberlerin tam aksine; uluslararası referans laboratuvarlarından gelen ilk veriler, mevcut aşıların bu yeni jenerasyon virüs üzerinde de epey etkili olduğunu kanıtlıyor.\n\nUzmanlar, paniğe kapılmanın bilimsel ve rasyonel hiçbir dayanağı olmadığını, asıl tehlikenin rehavet ve tedbirsizlikten kaynaklandığını altını çizerek hatırlatıyor. Yine de eğer küresel konsorsiyum aşı tedarik zincirindeki hiyerarşik engelleri yakın zamanda aşamazsa, ekonomik toparlanmanın bir hayli gecikeceği de yadsınamaz bir gerçektir.\n\nKoruma politikalarının güncellenip güncellenmeyeceği ise perşembe günkü sağlık şurasında netlik kazanacak.`
      },
      {
        id: 'ah-finans', title: 'Kripto Piyasası Regülasyonu', subtitle: 'Ekonomi ve dijital para', difficulty: 'Orta',
        text: `Ekonomi kulislerini derinden sarsan bir başka haber başlığına uzanıyoruz. Günlerdir yoğun fluktuatif bir grafik çizen kripto para piyasaları, dünyanın en büyük merkez bankalarından art arda gelen regülasyon açıklamalarıyla adeta tepetaklak oldu.\n\nÖzellikle blokzincir ekosistemine yönelik katı yaptırımlar getirilmesini tasavvur eden bu yeni kanun tasarısı, yüz binlerce yatırımcıyı devasa bir stabilizasyon kaygısına sürükledi. Uluslararası borsa uzmanlarına göre; bu tür regülatif teşebbüsler, serbest piyasa ruhuna tamamen muhalif görünse de, sektörün orta ve uzun vadedeki spekülatif köpüğünü almak adına elzem bir müdahaledir.\n\nAncak bu radikal hamlenin, geleneksel bankacılık sistemine duyulan güven endeksini gerçekten artırıp artırmayacağı şu an için rasyonel bir şüphe konusudur.\n\nDöviz, altın ve emtia piyasalarındaki makroekonomik yansımaların yarın sabahtan itibaren çok daha teferruatlı bir şekilde okunabileceği belirtiliyor.`
      },
      {
        id: 'ah-altyapi', title: 'Devasa Otoyol ve Viyadük İhalesi', subtitle: 'Altyapı ve ulaştırma', difficulty: 'Orta',
        text: `Milyarlarca liralık dev yatırım paketinin en kritik ayağı olan, bölgeler arası kesintisiz entegrasyonu sağlayacak devasa otoyol ve viyadük projesinin ihale süreci bugün resmen nihayete erdi.\n\nİnşaat mühendislerinin ve jeologların üzerinde bilhassa hassasiyetle durduğu en önemli detay ise; belirlenen güzergâhın aktif fay hatlarından geçmesine rağmen tamamen deprem izolatörleriyle donatılmış kusursuz bir altyapıya sahip olacak olması. Projenin planlanan süreden tam sekiz ay önce bitirilmesi yüklenici firma tarafından taahhüt edildi.\n\nAncak bu iddialı ve meşakkatli hedefin gerçekleşmesi, lojistik ve iş gücü yönetiminde mutlak surette yapılacak akılcı revizyonlarla doğrudan ilintili görünüyor.\n\nHükümet sözcüsü, projenin tamamlanmasıyla birlikte hem uluslararası transit taşımacılıktaki sürelerin minimize edileceğini hem de dış ticaret hacminde sürdürülebilir bir sıçrama yaşanacağını büyük bir coşkuyla müjdeledi.`
      }
    ]
  },
  {
    id: 'spor', icon: '⚽', label: 'Spor',
    colorAccent: '#C9604A', colorBg: 'rgba(201,96,74,0.12)',
    texts: [
      {
        id: 'sp-futbol', title: 'Şampiyonluk Finali Anlatımı', subtitle: 'Canlı futbol yayını', difficulty: 'Hızlı',
        text: `Taraftarlar nefes kesiyor, stat coşkuyla yanıyor! Doksan dakikanın doldurulduğu şu an, ev sahibi takım bir tur daha mücadele ediyorsa bunu tek kişiye borçlu; gol çizgisinde durarak topu defeden kalecisine. Kurtarış muazzam, kurtarış inanılmaz!\n\nYüz yirmi birinci dakikadan bu yana ek süreyiz. Konuk takımın uzun topları defansın arkasını bulmaya çalışıyor ama ev sahibinin stoper ikilisi bugün âdeta aşılmaz bir set oluşturmuş. Baskı yüksek, mücadele yüksek, gerilim had safhada!\n\nVe penaltı noktasına top geliyor! Hazırlandı, yerleştirdi, koştu! Kaleci sola atladı, top sağa! Gol! Gol! Muazzam bir penaltı atışı! Stadın üçte ikisi çoştukça rakip tribünlerde büyük bir sessizlik çöktü.\n\nŞampiyon bu sezon el değiştirdi! Kupa bu kulüpte ilk kez kalıyor. Bu gece futbol tarihi yeniden yazıldı. Harika bir sezonun finali böyle kapandı.`
      },
      {
        id: 'sp-olimpiyat', title: 'Olimpiyat Atletizm Finali', subtitle: 'Olimpiyat spor yayını', difficulty: 'Hızlı',
        text: `Seksen bin seyircinin önünde, dünyanın dört bir yanından gelen atletler son birkaç yıldır hayalini kurdukları bu anı yaşıyor. Startır tabancası patladı ve on iki atlet aynı anda bloklardan fırladı. İlk yüzden sonra Türk atlet üçüncü sırada, Jamaikalı rakibi ise başı çekiyor.\n\nİkinci yüz metreye giriyoruz! Türk sporcu adım frekansını artırdı, rüzgâr bu sefer arkadan, koşunun en ideal havasında. İzlerin üstünde koşuyor sanki: vücudu öne eğilmiş, kollar ritmik çalışıyor.\n\nVe inanılmaz geçiş! Türk atlet ikinci yüzde rakiplerini birer birer geçti. Şimdi birinci ve ikinci omuz omuza! İki atlet yan yana, adım adım mücadele ediyor.\n\nSon on metre! Son beş metre! Ve bitiş çizgisi! Türk atlet üstten geçti! Altın madalya Türkiye'nin! Rekor! Milli Rekoru kırıldı! Bu, olimpiyat tarihinin en hızlı ilk beşine giriyor!`
      },
      {
        id: 'sp-basketbol', title: 'Avrupa Ligi Son Saniye Finali', subtitle: 'Hızlı basketbol spikeri', difficulty: 'Hızlı',
        text: `Müthiş finalin son çeyreği, parke alev alev yanıyor! Skor doksan dokuz doksan sekiz, sadece on iki saniye kaldı ve top bizde. Başantrenör mola hakkını az önce kullandı, şimdi oyun tamamen parkenin liderlerinin elinde. Oyun kurucumuz topu yarı sahadan getirdi, gözler potada, tribünler ayakta!\n\nSkorboard'da saat eriyor: sekiz, yedi, altı... İkili sıkıştırma geldi! Boş adamı arıyor, buldu! Köşeden mükemmel bir pas, şutörümüz çizginin tam gerisinde. Üçlük için yükseldi...\n\nSüre bitti, siren çalıyor! Top havada süzülüyor, süzülüyor... Ve basket!!! İnanılmaz! İnan-ı-la-maz! Yüzde yüzlük isabetle potayı delip geçiyor! Avrupa'nın en büyüğü biziz! Muazzam bir geri dönüş ve tarihi bir zafer! Gecenin kahramanı o köşeden yükselen adam oluyor!`
      },
      {
        id: 'sp-formula1', title: 'Formula 1: İlk Viraj Kaosu', subtitle: 'Adrenalin dolu motor sporları', difficulty: 'Çok Hızlı',
        text: `Beş kırmızı ışık yandı ve söndü! İtalya Grand Prix'sinde muhteşem bir start! Pole pozisyonundaki araç kalkışta hafif bir patinaj yaşayınca, hemen arkasındaki iki araç ilk viraja yan yana giriyor! İnanılmaz bir ivme, inanılmaz bir hız!\n\nŞimdi birinci şikana yaklaşıyorlar, hızlar saatte üç yüz yirmi kilometreden yetmiş kilometreye düşecek. Frenaj noktasında büyük bir duman! Lastikler kilitlendi! Arkadan gelen üçüncü pilot inanılmaz bir boşluk bulup virajın içinden her ikisini birden geçmeye çalışıyor!\n\nTemas! Temas var!\n\nKarbon fiber parçalar havada uçuştu ama yarış durmuyor, sarı bayraklar çekilmedi! Üçüncü sıradan kalkan araç şimdi liderliği aldı! Telsizden takım patronunun çığlıklarını duyabiliyoruz. Motor sporları tarihinde eşine ender rastlanan bir ilk tur kaosu yaşıyoruz sevgili izleyiciler, bu yarış sezonun en unutulmaz mücadelesi olmaya tamamen aday!`
      },
      {
        id: 'sp-boks', title: 'Ağır Sıklet: Nakavt Öncesi', subtitle: 'Rinng kenarı boks anlatımı', difficulty: 'Orta',
        text: `On ikinci ve son raunt! Her iki dövüşçü de ayakta zor duruyor ama gözlerindeki o şampiyonluk ateşi sönmemiş. Köşelerden gelen taktikleri duymuyorlar bile, alan tamamen ter ve kan kokusuyla kaplandı. Şimdi ringin ortasında tekrar buluştular!\n\nŞampiyon, sol direklerle mesafeyi korumaya çalışıyor. Ancak meydan okuyan rakibi, adeta bir boğa gibi kapanarak iç mesafeye girdi! Sağ kroşe! Bir sağ kroşe daha! Şampiyon sarsıldı! İplere yaslanmak zorunda kaldı.\n\nHakem araya girmek için pozisyon kolluyor ama meydan okuyan durmuyor! Üst üste kombinasyonlar, aparkat ve sol kroşe! Şampiyonun gardı tamamen düştü! Dizlerinin bağı çözülüyor! Ve evet, yüz üstü ringe kapaklandı!\n\nBir, iki, üç... Hakem sayıyor! İnanılmaz bir son raunt mucizesi! Dünya izliyor, tarih yeniden yazılıyor! Ağır sıklette yeni bir devir başlıyor sevgili sporseverler!`
      },
      {
        id: 'sp-yuzme', title: 'Bayrak Yarışı: Saniyenin Onda Biri', subtitle: 'Nefes kesen yüzme finali', difficulty: 'Hızlı',
        text: `Dünya Yüzme Şampiyonasında dört çarpı yüz metre serbest bayrak yarışının son on metresine giriyoruz! Havuz âdeta kaynıyor, tribünlerin uğultusu suyun sesini bastırmış durumda!\n\nAmerikan ve İtalyan yüzücüler santim santim yan yana ilerliyor. Ancak beşinci kulvardan inanılmaz bir atak geldi! Avustralyalı sporcu son elli metreyi yunus gibi geçiyor! Kulaç frekansı insanüstü bir seviyeye ulaştı, bacak vuruşlarıyla adeta suyun üzerinde süzülüyor!\n\nİtalyan sporcu nefes almak için kafasını çevirdiğinde bu atağı gördü, tempoyu arttırdı ama artık çok geç! Son metreler! Parmak uçları duvara yaklaşıyor!\n\nVe dokundular! Elektronik tabelaya bakıyoruz! Evet! Sadece saniyenin onda biri farkla altın madalya Avustralya'ya gidiyor! İnanılmaz bir depar, inanılmaz bir fiziksel kuvvet gösterisi!`
      },
      {
        id: 'sp-voleybol', title: 'Kadınlar Voleybol Şampiyonluk Sayısı', subtitle: 'Nefes kesen ralliler', difficulty: 'Çok Hızlı',
        text: `Karar seti, skor on dört on üç! Sadece tek bir sayı kaldı şampiyonluğa! Servisi kullanmak üzere çizginin gerisine geçti. Hakemin düdüğü geldi, topu havaya fırlattı, çok sert bir sıçrayarak servis! Rakip manşeti zor da olsa çıkarıyor!\n\nPasör topu köşeye şişirdi, üçlü blok mükemmel kapattı! İnanılmaz bir defans arka alandan! Top yere değmedi! Libero tam bir panter gibi uzandı ve o topu çıkardı!\n\nŞimdi hücum sırası bizde! Pasörümüz topu ortaya kesti, beklenmedik bir kısa pas! İnanılmaz bir sıçrayış, tam bir gülle gibi vuruyor! Top bloktan sekti ve saha dışına çıkıyor!\n\nHakem çizgiye bakıyor! Evet, evet! Blok aut! Top bizde! Şampiyonuz! Tarih yazılıyor burada, dördüncü setin sonunda kupa bizim oluyor!`
      },
      {
        id: 'sp-tenis', title: 'Wimbledon Tie-Break', subtitle: 'Mental ve fiziksel savaş', difficulty: 'Orta',
        text: `Merkez korta bir ölüm sessizliği hakim. Beşinci setin tie-break bölümündeyiz ve nefesler tutulmuş durumda. Çim kortun efsanesi, rakibinin servislerini karşılamak üzere dizlerini kırıp pozisyonunu aldı. Sadece topun sekme sesi duyuluyor.\n\nServis atıldı! İki yüz on kilometre hızla gelen inanılmaz bir birinci servis! Ama harika bir ayak çalışmasıyla topu backhand ile çevirdi. Şimdi karşılıklı çok sert çapraz vuruşlar izliyoruz! Top fileyi adeta yalayarak geçiyor.\n\nDayanıklılık sınırları zorlanıyor. Yirmi ikinci vuruş! Topu aniden kısa kesti, file önüne harika bir drop shot! Genç yetenek depara kalktı, yetişecek mi? Yetişti! Topu alttan sıyırarak paralel bir passing shot gönderiyor!\n\nÇizgide mi? Çizgide mi? Hakem 'İçeride' diyor! İnanılmaz bir puan! Tüm tribünler Merkez Kortta ayağa kalkıyor! Bu sporun gelmiş geçmiş en uzun ve epik rallilerinden birine az önce hep birlikte şahit olduk!`
      },
      {
        id: 'sp-atlar', title: 'Geleneksel Derbi Koşusu', subtitle: 'Geleneksel çok hızlı spikerlik', difficulty: 'Çok Hızlı',
        text: `Bütün atlar start hakeminin emrine girdi. Beyaz bayrak kalktı ve son düzlüğe doğru büyük derbi başladı! Çıkışta üç numaralı rüzgar isimli at hafif bir tereddüt yaşadı ama hemen grubun arkasına yerleşmeyi bildi!\n\nŞimdi ilk viraj dönülüyor! İç kulvardan yedi numaralı Şimşek atağa kalktı, onun hemen dışından sekiz numaralı Poyraz kafa kafaya geldi! Atlar adeta toprağı döverek, nal sesleriyle yeri göğü inleterek ilerliyor!\n\nSon altı yüz metre! Son altı yüz metre geçilirken grupta kopmalar başladı! İç kulvarda Şimşek bariyere çok yakın, dış kulvardan ise inanılmaz bir sprinte kalkan beş numaralı Efsane geliyor! Jokeyi kırbacını çekti, teşvikini artırıyor!\n\nSon iki yüz! Şimşek ve Efsane baş başa! At başı bir mücadele! Finiş çizgisi yaklaşıyor! Burun farkı, boyun farkı! İkisi de aynı anda çizgiyi geçiyor! Müthiş bir varış! Fotofiniş kararı belirleyecek, gözler şimdi hakem kulesinde!`
      },
      {
        id: 'sp-buzhokeyi', title: 'Buz Hokeyi Uzatma Periyodu', subtitle: 'Adrenalin patlaması', difficulty: 'Hızlı',
        text: `Altın gol uzatmasında buzun üstünde tam bir savaş var! İki takımın oyuncuları da yorgunluktan bitap düşmüş durumda ama kimse patenlerinden vazgeçmiyor. Disk şimdi sağ kanatta, savunma oyuncusu onu hızla ileriye sürdü.\n\nSert bir body check! İnanılmaz bir omuz darbesiyle rakibini cam bariyerlere yapıştırıyor! Tribünlerden büyük bir uğultu koptu! Disk boşta kaldı! Sol kanattan fırtına gibi gelen forvet diski çeldi ve kaleciyle karşı karşıya!\n\nKaleci öne çıkıp açıyı daraltıyor! Şut şansı arıyor, bilek hareketiyle diski sağa çekti! Vuracak, vurdu! Kalecinin pedlerinden sekiyor! Ribaund boşta kaldı!\n\nArkadan gelen defans oyuncusu yapıştırıyor! Gol! Gol! Altın gol! Işıklar yanıp sönüyor, sirenler çalıyor! Uzatmanın ikinci dakikasında gelen bu muazzam golle kupa sahibini buluyor! Buzun üzerinde dev bir kutlama yumağı oluştu!`
      }
    ]
  },
  {
    id: 'belgesel', icon: '🌿', label: 'Belgesel',
    colorAccent: '#1A5C35', colorBg: 'rgba(26,92,53,0.12)',
    texts: [
      {
        id: 'bel-doga', title: 'Amazon Yağmur Ormanları', subtitle: 'Gezegenin nabzı', difficulty: 'Yavaş',
        text: `Dünya'nın akciğerleri olarak bilinen Amazon Yağmur Ormanları, yüz on milyon yıllık bir evrim tarihinin canlı kitabıdır. Burada bir hektar toprağın içinde, birbiriyle konuşan, birbirini besleyen, birbirini koruyan beş yüzü aşkın ağaç türü birlikte var olur.\n\nSabahın ilk ışıklarıyla birlikte orman uyanır. İlk çığlığı atan bir çift alacalı kartal; gagasının sivri sesi, birkaç kilometre ötedeki bir tapir sürüsünü anında uyarır. Milyonlarca yıllık ortak evrim böyle işler: her ses bir mesaj, her hareket bir veri, her koku bir uyarıdır.\n\nYağmur başladığında bu büyük ekosistem tam anlamıyla hayat bulur. Milyonlarca damla, yapraktan yaprağa sıçrayarak toprağa ulaşır.\n\nNe var ki bu mucize, son elli yılda kritik bir tehlikeyle karşı karşıya. Belki bu yüzyılın en büyük sorusu şudur: İnsanlık, bizzat nefes aldığı ormanı kurtarabilecek midir?`
      },
      {
        id: 'bel-tarih', title: 'Anadolu Uygarlıklar Tarihi', subtitle: 'Toprak belleği', difficulty: 'Yavaş',
        text: `Anadolu, tarih boyunca yeryüzünün en yoğun biçimde iskân edilmiş coğrafyalarından biri olmuştur. Hitit başkenti Hattuşa'nın taş tablet arşivlerinden Bizans kiliselerinin mozaiklerine, Selçuklu kervansaraylarından Osmanlı çarşılarına uzanan bu kadim topraklar; medeniyetlerin geçiş koridoru değil, kendi medeniyetini yaratan ve ihraç eden bir coğrafyadır.\n\nBinlerce yıl önce bu topraklarda buğday ilk kez evcilleştirildi. Bir çiftçinin elinden çıkan ilk tahıl tanesi, bugün insanlığın beslenmesinin temel taşına dönüştü. Köy düzeyinde başlayan bu devrim, ticareti doğurdu. Ticaret, şehri yarattı. Şehir ise yazıyı zorunlu kıldı.\n\nAnadolu'nun en büyük sırrı belki de şudur: Her katman bir öncekinin üzerine kurulmuştur. Bu topraklar palimpsest gibidir; silinen yazının altında başka bir yazı, onun altında başka biri. Her okuyuş, insanlık tarihine dair yeni bir anlam taşır.`
      },
      {
        id: 'bel-uzay', title: 'Evrenin Derinlikleri: Kara Delikler', subtitle: 'Kozmik sırlar', difficulty: 'Yavaş',
        text: `Kozmosun sonsuz karanlığında, ışığın bile kaçamadığı devasa çekim merkezleri yatıyor: Kara Delikler.\n\nBir yıldız hayal edin... Milyarlarca yıl boyunca etrafına ısı ve ışık saçan, devasa bir nükleer reaktör. Ancak yakıtı tükendiğinde, kendi kütle çekimine yenik düşüyor ve sonsuz bir küçüklüğe doğru çökmeye başlıyor. Bu çöküş o kadar şiddetlidir ki, uzay-zaman dokusunu adeta bir girdap gibi büker ve geri dönüşü olmayan bir sınır çizer.\n\nOlay Ufku adı verilen bu sınırdan içeri adım attığınızda, bildiğimiz tüm fizik yasaları iflas eder. Zaman yavaşlar, mekan bükülür ve maddeler spagetti gibi uzar. İnsan beyninin algılamakta zorlandığı bu devasa yıkım makineleri, aslında evrenin döngüsünün en asil temizleyicileridir.\n\nBelki de kara delikler, sadece bir son değil; algılayamadığımız bambaşka evrenlere açılan kozmik birer kapıdır.`
      },
      {
        id: 'bel-okyanus', title: 'Bilinmeyen Dünyalar: Büyük Resif', subtitle: 'Okyanus belgeseli', difficulty: 'Yavaş',
        text: `Yeryüzünün yüzde yetmişini kaplayan okyanuslar, tıpkı uzay gibi bizim için hâlâ devasa bir gizem taşıyor. Yüzeyin sadece birkaç on metre altında, güneş ışığının süzüldüğü sularda, gezegenin en büyük yapısı uzanır: Büyük Set Resifi.\n\nUzaydan bile görülebilen bu organik yapı, aslında milyarlarca küçük mercan polibinin yüzyıllar süren emeğiyle inşa edilmiştir. Burada her renk, kendi içinde bir anlama sahiptir. Zehirli bir deniz tavşanı, parlak renkleriyle düşmanlarına uzak durmalarını söylerken; bir mürekkep balığı derisindeki pigmentleri saniyeler içinde değiştirerek kayaların arasında adeta görünmez olur.\n\nBu muazzam ekosistem, hassas bir termostat gibi çalışır. Okyanus suyunun sadece bir derece ısınması, on binlerce yıllık mercan resifinin rengini solgun bir beyaza dönüştürebilir.\n\nDenizin altındaki sessiz çığlık duyulmaz; oysa hayatın kırılgan dengesi tam da burada, bu suların derinliğinde yatmaktadır.`
      },
      {
        id: 'bel-tarih2', title: 'Göbeklitepe: Tarihin Sıfır Noktası', subtitle: 'Tarih ve arkeoloji', difficulty: 'Yavaş',
        text: `Mezopotamya düzlüklerine tepeden bakan bir sırta, Şanlıurfa yakınlarına geliyorsunuz. Burası Göbeklitepe.\n\nYıllarca tarih kitapları bize medeniyetin seyrini şöyle anlattı: İnsanlar önce tarımı buldu, sonra yerleşik hayata geçti, ardından köyler inşa etti ve en sonunda tapınaklar yaptı. Ancak bin dokuz yüz doksan altı yılında burada vurulan bir kazma, tüm bu kronolojiyi altüst etti.\n\nKarşımızda, Mısır piramitlerinden tam yedi bin yıl, İngiltere'deki Stonehenge'den altı bin yıl daha eski devasa T biçimli dikilitaşlar duruyor. O dönemin avcı-toplayıcı insanları, henüz tekerleği bile icat etmemişken bu on beş tonluk taşları nasıl yontmuş ve buraya taşımıştı?\n\nGöbeklitepe bize şunu fısıldıyor: İnsanoğlunu bir araya getiren şey sadece karın tokluğu veya barınma ihtiyacı değildi; insanı yerleşik kılan şey, inancın ve bir araya gelme ritüellerinin o karşı konulmaz gücüydü.`
      },
      {
        id: 'bel-hayvanlar', title: 'Serengeti: Afrika nın Büyük Göçü', subtitle: 'Vahşi doğa', difficulty: 'Yavaş',
        text: `Kuraklık her yeri esir almış durumda... Çatlayan topraklar ve sararan otlar, milyonlarca canlının genlerine kodlanmış o en eski emri veriyor: Harekete geç!\n\nBir buçuk milyon antilop, yirmi bin zebra ve sayısız ceylan, yağmurun kokusunu alarak kuzeye doğru devasa bir yolculuğa başlıyor. Bu, yeryüzünün görebileceği en büyük, en kanlı ve en acımasız tiyatro sahnesidir: Büyük Göç.\n\nSürünün önündeki en büyük engel olan kükreyen nehir, aç timsahlarla kaynıyor. İlk antilop suya atladığında, geriye kalan milyonlarcası körü körüne bir ölüm kalım mücadelesinin içine sürüklenir. Kimi akıntıya kapılır, kimi pusuya düşer; ancak sürü ne pahasına olursa olsun ilerlemek zorundadır.\n\nBu göç; zayıfları eler, ekosistemi gübreler ve yeryüzündeki hiçbir şeyin sonsuza dek aynı kalamayacağını bizlere fısıldar. Doğada acıma yoktur; sadece denge vardır.`
      }
    ]
  },
  {
    id: 'ekonomi', icon: '📈', label: 'Ekonomi',
    colorAccent: '#7A5800', colorBg: 'rgba(122,88,0,0.12)',
    texts: [
      {
        id: 'ek-borsa', title: 'Piyasaların Açılış Analizi', subtitle: 'Sabah ekonomi bülteni', difficulty: 'Orta',
        text: `Günaydın, ekonomi haberlerinize hoş geldiniz. Bugün küresel piyasaların dikkatini büyük ölçüde üç önemli gündem maddesi çekiyor: Amerikan Merkez Bankası'nın faiz kararı, Çin'in büyüme verileri ve Avrupa'daki enerji krizi.\n\nDün gece Wall Street'te teknoloji hisselerinde sert satışlar yaşandı. Nasdaq yüzde iki virgül altı geriledi; bu düşüşün arkasında yapay zeka şirketlerinin karlılık açıklamalarının beklentilerin altında kalması yatıyor. Ancak analistler bu tepkinin kısa vadeli olduğunu düşünüyor.\n\nAsya piyasalarında ise Japonya ve Güney Kore borsaları sınırlı artışla açıldı. Türk lirası dün sabah euro karşısında baskı altındaydı; ancak öğleden sonra gelen cari açık verisi beklentinin altında kalınca, değer erimesi kısmi olarak tersine döndü.\n\nAltın, jeopolitik belirsizlik ortamında ons başına önemli bir eşiği test ediyor. Gün içinde açıklanacak işsizlik verisiyle piyasalar volatil bir seyir sürdürebilir. Piyasa güncellemeleri için yayınımızda kalmaya devam edin.`
      },
      {
        id: 'ek-kripto', title: 'Kripto Piyasalarında Sert Düşüş', subtitle: 'Dijital varlık analizi', difficulty: 'Hızlı',
        text: `Dijital varlık piyasaları, Asya seansında başlayan sert satış dalgasıyla adeta sarsıldı. Toplam piyasa hacminin sadece altı saat içinde yüz elli milyar dolar eridiği bu panik havasının arkasında, dünyanın en büyük ikinci borsasının iflas koruma başvurusunda bulunacağı söylentileri yatıyor.\n\nAmiral gemisi konumundaki lider kripto para birimi, kritik destek seviyesi olan kırk iki bin dolar bandını aşağı yönlü kırarak son dört ayın en düşük seviyelerini test etti. Altcoin piyasasında ise kayıplar çok daha derin; bazı projelerde günlük erime yüzde otuzu aşmış durumda.\n\nAnalistler, yatırımcıları yüksek kaldıraçlı işlemlerden kesinlikle uzak durmaları konusunda uyarıyor. Regülatör kurumların akşam saatlerinde yapacağı acil durum açıklaması, piyasanın yönünü belirleyecek en kritik faktör olacak.`
      },
      {
        id: 'ek-emlak', title: 'Emlak Sektöründe Kredi Krizi', subtitle: 'Konut piyasası', difficulty: 'Orta',
        text: `İnşaat ve gayrimenkul sektörü, artan maliyetler ve krediye erişimdeki zorluklar nedeniyle son yılların en büyük daralmasını yaşıyor. Dün yayımlanan konut satış istatistikleri, ipotekli satışların geçen yılın aynı dönemine göre yüzde elli beş oranında gerilediğini ortaya koydu.\n\nBankaların konut kredisi faiz oranlarını aylık yüzde üçün üzerine çekmesi, orta gelir grubunun ev sahibi olma hayalini fiilen askıya almış durumda. Diğer yandan müteahhitler, çimento ve demir gibi temel inşaat kalemlerindeki astronomik artışlar yüzünden mevcut projeleri bile durdurma noktasına geldi.\n\nSektör temsilcileri, piyasayı canlandırmak adına acil bir "ilk evim" sosyal konut paketinin açıklanmasını ve harç indirimlerinin devreye sokulmasını talep ediyor. Aksi takdirde arz talep dengesizliğinin bu kış kiralara eşi görülmemiş bir zam olarak yansıyacağı öngörülüyor.`
      },
      {
        id: 'ek-ihracat', title: 'İhracatta Tarihi Rekor', subtitle: 'Dış ticaret verileri', difficulty: 'Orta',
        text: `Türkiye ekonomisinden bu sabah yüzleri güldüren bir veri geldi. Ticaret Bakanlığı'nın açıkladığı öncü göstergelere göre, ekim ayı ihracat rakamları cumhuriyet tarihinin en yüksek aylık seviyesine ulaşarak yirmi beş milyar dolar bandına dayandı.\n\nBu tarihi rekorun arkasındaki en büyük itici güç ise savunma sanayii ve otomotiv sektörleri oldu. Özellikle yerli üretim insansız hava araçlarına ve elektrikli ticari araçlara Avrupa pazarından gelen yoğun talep, ihracat birim değerini kilogram bazında yukarı tırmandırdı.\n\nBakanlık yetkilileri, döviz kurlarındaki göreceli istikrarın ve tedarik zincirlerindeki kısmi rahatlamanın üreticiye nefes aldırdığını belirtiyor. Yıl sonu için belirlenen iki yüz altmış milyar dolarlık dış ticaret hedefinin de rahatlıkla aşılacağı öngörülüyor.`
      },
      {
        id: 'ek-merkez', title: 'Merkez Bankası Faiz Kararı', subtitle: 'Makroekonomik kararlar', difficulty: 'Yavaş',
        text: `Sayın seyirciler, ekonominin kalbinin attığı Ankara'dan merakla beklenen o karar az önce açıklandı. Türkiye Cumhuriyet Merkez Bankası Para Politikası Kurulu, politika faizini beklentiler doğrultusunda yüzde kırk beş seviyesinde sabit bıraktı.\n\nKarar metninde yer alan ifadeler, yatırımcılar tarafından kelimesi kelimesine inceleniyor. Kurul, enflasyonun ana eğiliminde belirgin bir iyileşme sağlanana kadar sıkı para politikasının tavizsiz bir şekilde sürdürüleceği mesajını verdi. Tüketim talebindeki yavaşlamanın başladığı, ancak hizmet enflasyonundaki katılığın risk unsuru olmaya devam ettiği vurgulandı.\n\nPiyasaların bu karara ilk tepkisi oldukça sakin oldu. Dolar kuru karar öncesi seviyelerini korurken, tahvil faizlerinde yatay bir seyir izleniyor. Ekonomi otoriteleri, Merkez Bankası'nın bu duruşla kredibilite inşasında çok önemli bir eşiği aştığı görüşünde birleşiyor.`
      }
    ]
  },
  {
    id: 'kultur-sanat', icon: '🎭', label: 'Kültür-Sanat',
    colorAccent: '#7A1A3C', colorBg: 'rgba(122,26,60,0.12)',
    texts: [
      {
        id: 'ks-festival', title: 'Uluslararası Film Festivali', subtitle: 'Kültür sanat haberleri', difficulty: 'Yavaş',
        text: `Bu yıl altmış ikinci kez gerçekleştirilen festival, üç kıtadan gelen seksen beş filmi bünyesinde barındırıyor. Sinema dünyasının en prestijli organizasyonlarından biri olarak kabul gören bu buluşmada, büyük ödüller için yarışan on iki film arasında Türk sinemasından çok konuşulan bir yapıt da yer alıyor.\n\nİstanbul'dan yola çıkan genç yönetmenin filmi, Anadolu'nun küçük bir kasabasındaki toplumsal dönüşümü işliyor. Görsel dili minimal, anlatısı katmanlı; ilk on dakikası çok az diyalogla kurulmasına karşın izleyiciyi sürüklemeyi başarıyor.\n\nHem yerel hem küresel sorulara yanıt arayan bu filmler arasında ortak bir tema var: kimlik araştırması. Hangi kültürden gelirse gelsin, hangi dilde çekilmiş olursa olsun her film, bir şekilde aidiyet, kök ve bu köklerin çağdaş dünyayla nasıl iletişime geçtiğini arıyor.\n\nÖdül töreni cuma akşamı saat dokuzda. Altın palmiyeyi kimin alacağını yalnızca jüri biliyor; biz ise büyük bir heyecanla bekliyoruz.`
      },
      {
        id: 'ks-tiyatro', title: 'Şehir Tiyatrolarında Prömiyer', subtitle: 'Sahne sanatları', difficulty: 'Orta',
        text: `Şehir tiyatrolarında yeni sezon, tüm biletleri aylar öncesinden tükenen muazzam bir prömiyer ile açılışını yaptı. Ünlü Rus yazar Anton Çehov'un ölümsüz eseri Martı, bu kez çağdaş bir reji ve oldukça minimalist bir sahne tasarımıyla izleyici karşısına çıkıyor.\n\nSahnede ahşap iskeleler dışında hiçbir dekorun yer almaması, izleyicinin dikkatini tamamen oyuncuların performansına ve Çehov'un zamansız metnine odaklıyor. Özellikle ikinci perdedeki o meşhur göl sahnesinde kullanılan ışık oyunları ve gölgeler, oyunun melankolik atmosferini iliklerinize kadar hissetmenizi sağlıyor.\n\nBaşroldeki genç aktris, Trigorin ile olan o kırılma anını canlandırırken adeta kendinden geçerek salondaki herkesi büyülemeyi başardı. Tiyatro eleştirmenleri, oyunun bu yorumunun son yirmi yılın en cesur ve yenilikçi uyarlaması olduğu konusunda hemfikir.\n\nSeyirciler oyunu dakikalarca ayakta alkışlarken, yönetmen sahneye çıkarak bu başarıyı tüm sanat emekçilerine adadığını belirtti.`
      },
      {
        id: 'ks-sergi', title: 'Modern Sanat Müzesi Özel Sergisi', subtitle: 'Görsel sanatlar', difficulty: 'Yavaş',
        text: `İstanbul Modern Sanat Müzesi, son yılların en iddialı ve kapsamlı sürrealizm sergisine ev sahipliği yapmaya hazırlanıyor. "Bilinçaltının Labirentleri" adını taşıyan bu özel koleksiyon, Avrupa'nın önde gelen müzelerinden çok sıkı güvenlik önlemleri altında getirilen yetmiş beş eşsiz eseri sanatseverlerle buluşturuyor.\n\nSergi, sadece tablolarla sınırlı kalmayıp; dönemin ünlü sanatçılarının mektuplarını, kişisel eskiz defterlerini ve hatta rüya günlüklerini de ilk kez gün yüzüne çıkarıyor. Giriş kapısından itibaren ziyaretçileri karşılayan o tuhaf, bükülen saatler ve yerçekimine meydan okuyan figürler, sizi adeta rasyonel dünyanın dışına çekiyor.\n\nKüratörün vurguladığı en önemli nokta, sürrealizmin sadece bir estetik akım değil, aynı zamanda savaş sonrası dönemde insan zihninin travmalarıyla başa çıkma yöntemi olduğudur. Eserlerdeki saklı sembolleri çözmek ise tamamen izleyicinin kendi iç dünyasına ve tecrübelerine bırakılmış durumda.\n\nAltı ay boyunca açık kalacak olan sergi, her hafta sonu düzenlenecek özel atölye çalışmaları ve uzman rehberliğindeki gece turlarıyla sanat eğitimine de büyük katkı sağlamayı hedefliyor.`
      },
      {
        id: 'ks-edebiyat', title: 'Dünya Edebiyatında Klasikler', subtitle: 'Edebiyat ve eleştiri', difficulty: 'Yavaş',
        text: `Her jenerasyon, klasikleşmiş edebiyat eserlerini kendi yaşadığı çağın penceresinden yeniden okur ve yorumlar. İşte tam da bu nedenle, Dostoyevski'nin veya Tolstoy'un yarattığı karakterler, üzerinden bir asırdan fazla zaman geçmesine rağmen hala günümüz insanının ruhsal krizlerini büyük bir isabetle tarif etmeye devam edebiliyor.\n\nKlasikleri "klasik" yapan şey, onların tozlu raflarda duran kutsal metinler olmaları değil; insan doğasının karanlık ve aydınlık taraflarını sarsılmaz bir dürüstlükle ortaya koymalarıdır. Raskolnikov'un o dar ve kasvetli odasında yaşadığı vicdan azabı, bugün modern metropollerin gökdelenleri arasında kaybolmuş ve yabancılaşmış modern bireyin buhranından çok da farklı değildir.\n\nSon dönemde artan klasik eserleri yeniden çeviri furyası, aslında bu metinlerin ana dilimizin geçirdiği evrimle nasıl taze bir soluk kazandığının da en güzel kanıtıdır. Kelimeler değişse bile, o derin anlam katmanları ve insana dair o evrensel acı hiçbir zaman şekil değiştirmiyor.\n\nKitap fuarlarında en çok ilgi gören stantların hala klasik eserlerin satıldığı yerler olması, okurun dijital çağın hızına inat, yavaşlığın ve derinliğin peşinde olduğunu bizlere umut verici bir şekilde gösteriyor.`
      },
      {
        id: 'ks-muzik', title: 'Senfonik Müzik ve Gençlik', subtitle: 'Müzik ve toplum', difficulty: 'Orta',
        text: `Klasik müziğin sadece belirli bir elit kesime veya belli bir yaşın üzerindeki dinleyicilere hitap ettiği şeklindeki o köhne önyargı, nihayet kırılmaya başlıyor. Dün gece Senfoni Orkestrası'nın üniversite kampüsünde verdiği açık hava konseri, on binlerce gencin Beethoven'ın dokuzuncu senfonisini nefeslerini tutarak nasıl dinleyebileceğini herkese kanıtladı.\n\nÖzellikle orkestra şefinin sahneye klasik bir smokin yerine spor kıyafetlerle çıkması ve eser aralarında bestelerin yazıldığı dönemin dedikodularını mizahi bir dille anlatması, dinleyici ile orkestra arasındaki o görünmez buzdan duvarı tamamen eritti.\n\nKlasik müzik aslında matematiksel bir kusursuzluk ile insan duygularının en vahşi hallerinin muazzam bir çatışmasıdır. Yaylı çalgıların bir araya gelerek yarattığı o büyük dalga, dijital olarak üretilmiş hiçbir sesin taklit edemeyeceği kadar organik ve derinden sarsıcı bir etkiye sahiptir.\n\nGençlerin bu müziğe olan ilgisinin artmasıyla birlikte, ülkenin dört bir yanındaki konservatuarlara yapılan başvurularda da rekor bir artış gözlemleniyor; müzik, kuşakları bir araya getiren en güçlü köprü olmaya devam ediyor.`
      }
    ]
  },
  {
    id: 'saglik', icon: '🏥', label: 'Sağlık',
    colorAccent: '#0A4A42', colorBg: 'rgba(10,74,66,0.12)',
    texts: [
      {
        id: 'sag-bulten', title: 'Haftalık Sağlık Bülteni', subtitle: 'Tıbbi haberler', difficulty: 'Orta',
        text: `Sağlıkta bu hafta en çok konuşulan gelişme, Türkiye'nin yeni bir aşı geliştirme merkezi kuracağına dair hükümet açıklaması oldu. Sağlık Bakanlığı'nın açıkladığına göre, özel sektör ortaklığıyla kurulacak araştırma merkezi, hem pandemi hem de kronik hastalıklar alanında özgün araştırma yapacak.\n\nDünya genelinde de sağlık haberleri yoğun seyrediyor. Dünya Sağlık Örgütü bu hafta yayınladığı raporda, solunum yolu hastalıklarına bağlı ölümlerin son iki yılda belirgin biçimde arttığına dikkat çekti.\n\nCambridge Üniversitesi'nden araştırmacılar ise bu sabah önemli bir çalışmanın ön bulgularını paylaştı: Yaşlılar için geliştirilen yeni bir tedavi protokolü, Alzheimer hastalığının seyrini yavaşlatmada şimdiye kadar denenen yöntemlerin ötesinde bir etkinlik gösterdi.\n\nSağlık haberciliğinin asıl görevi, insanlara bilim değil, doğru karar verme araçları sunmaktır.`
      },
      {
        id: 'sag-beslenme', title: 'Modern Çağda Sağlıklı Beslenme', subtitle: 'Diyet ve yaşam tarzı', difficulty: 'Orta',
        text: `Günümüzün hızlı temposu, maalesef beslenme alışkanlıklarımızı kökünden değiştirerek pratik ama oldukça sağlıksız olan "hızlı tüketim" kültürünü hayatımızın merkezine yerleştirdi. Paketlenmiş gıdaların içerdiği gizli şekerler ve doymuş yağlar, obezite ve diyabet gibi kronik hastalıkların adeta pimi çekilmiş birer bomba gibi aramızda dolaşmasına neden oluyor.\n\nUzmanlar, Akdeniz tipi beslenmenin sadece bir diyet listesi değil, bir yaşam felsefesi olarak benimsenmesi gerektiğinin ısrarla altını çiziyor. Zeytinyağı, taze sebzeler, omega üç yönünden zengin deniz ürünleri ve işlenmemiş tahıllar, vücudumuzun aslında en çok ihtiyaç duyduğu ancak en çok mahrum bıraktığımız yapı taşlarıdır.\n\nMetabolizmayı hızlandırmak için mucizevi bir kür veya tek bir besin aramak yerine, tabağımızdaki renk çeşitliliğine odaklanmalıyız. "Tabağınız ne kadar renkliyse, sağlığınız o kadar güvendedir" prensibi, aslında bağırsak mikrobiyotasını korumanın ve bağışıklık sistemini bir kale duvarı gibi güçlendirmenin en temel kuralıdır.\n\nUnutulmamalıdır ki, hastalıkların tedavisi eczane raflarında değil; mutfağımızın tezgahında, kaynayan tenceremizde başlar ve biter.`
      },
      {
        id: 'sag-uyku', title: 'Uykunun Beyin Sağlığına Etkisi', subtitle: 'Nöroloji ve uyku bilimi', difficulty: 'Yavaş',
        text: `Uyku, genellikle vücudun pasif bir dinlenme süreci, boşa geçen bir zaman dilimi olarak görülür; ancak nöroloji bilimi bize uykunun aslında beynimizin en aktif ve en meşgul olduğu hayati bir yenilenme periyodu olduğunu kanıtlamıştır.\n\nBiz derin uykuya daldığımızda, beynimizdeki glimfatik sistem adeta bir gece vardiyası işçisi gibi çalışmaya başlar. Gün boyunca biriken toksinler, gereksiz sinirsel bağlantılar ve Alzheimer gibi hastalıklara yol açabilen zararlı protein plakları ancak ve ancak derin uyku evresinde beyin omurilik sıvısı aracılığıyla temizlenir.\n\nEğer bu temizlik süreci düzenli bir şekilde işlemezse, odaklanma güçlüğü, hafıza kayıpları ve duygusal dalgalanmalar sabahın ilk ışıklarıyla birlikte yaşam kalitemizi düşürmeye başlar. Modern çağın ekran bağımlılığı ve mavi ışık kirliliği maalesef beynin doğal melatonin salgılanmasını bloke ederek bu hayati süreci baltalıyor.\n\nZihinsel keskinliğinizi ve ruh sağlığınızı korumanın en ucuz, en kolay ve yan etkisi olmayan biricik ilacı; karanlık, serin ve tamamen sessiz bir odada geçirilecek yedi ila sekiz saatlik kesintisiz bir gece uykusudur.`
      },
      {
        id: 'sag-kalp', title: 'Kalp Sağlığı İçin Düzenli Egzersiz', subtitle: 'Kardiyoloji ve spor', difficulty: 'Hızlı',
        text: `Kalp damar hastalıkları, hala tüm dünyada bir numaralı ölüm nedeni olmaya devam ederken, en iyi tedavi yönteminin "hastalanmadan önce önlem almak" olduğu gerçeği tıp dünyasında yankısını sürdürüyor. Kalp, tıpkı kollarımızdaki veya bacaklarımızdaki kaslar gibi bir kastır ve güçlü kalabilmesi için düzenli olarak çalıştırılmaya, yani egzersize ihtiyaç duyar.\n\nHaftada en az yüz elli dakika yapılacak orta tempolu bir kardiyo egzersizi; örneğin tempolu yürüyüş, yüzme veya bisiklete binme, kalp kaslarını güçlendirir, damar elastikiyetini artırır ve damar iç duvarlarında oluşan tehlikeli plak birikimlerini önemli ölçüde engeller.\n\nEgzersiz yaparken kalp atış hızının belli bir seviyeye çıkması, vücudun tüm organlarına pompalanan oksijen miktarını artırır ve böylece hücre yenilenmesi hızlanır. Ancak uzmanlar uyarıyor: Eğer uzun süredir hareketsiz bir yaşam sürüyorsanız, spora başlamadan önce mutlaka bir efor testi yaptırmalı ve doktorunuzun onayını almalısınız.\n\nSürekli asansör kullanmak yerine merdivenleri tercih etmek, arabanızı biraz uzağa park edip yürümek bile kalbinize vereceğiniz en değerli hediyedir. Sağlıklı bir beden, hareket üzerine inşa edilir!`
      },
      {
        id: 'sag-psikoloji', title: 'Modern Çağın Görünmez Zehri: Stres', subtitle: 'Ruh sağlığı ve psikoloji', difficulty: 'Yavaş',
        text: `Sürekli çalan telefonlar, ardı arkası kesilmeyen e-postalar, sosyal medyanın yarattığı sahte kusursuzluk algısı ve yetiştirilmesi gereken son teslim tarihleri... Modern insan, biyolojik evriminin henüz tam olarak alışamadığı, kesintisiz ve kronik bir stres yükü altında eziliyor.\n\nİnsan vücudunun stres tepkisi, binlerce yıl önce doğada vahşi bir hayvanla karşılaştığımızda hayatta kalmamızı sağlamak için tasarlandı. Böbrek üstü bezlerinden pompalanan kortizol ve adrenalin, kaslara daha fazla kan gönderirken hazım sistemi gibi o an için "gereksiz" işlevleri durdurur. Ancak günümüzde beynimiz, kızgın bir patronu veya trafik sıkışıklığını adeta saldırmaya hazırlanan bir kaplan olarak algılıyor.\n\nBu kronik uyarılma hali zamanla bağışıklık sistemini çökertir, mide ülserlerine yol açar ve yüksek tansiyonu tetikler. Bu döngüyü kırmanın yolu, stresi tamamen yok etmek değil -ki bu imkansızdır- onu nasıl yöneteceğimizi öğrenmekten geçer.\n\nNefes egzersizleri, farkındalık meditasyonları ve en önemlisi doğayla geçirilen zaman, zihnimizin alarm butonunu kapatmasını sağlayan en etkili anahtarlardır. Kendinize her gün sadece on beş dakika, dünyadan tamamen kopacağınız bir "sessizlik adası" yaratmayı ihmal etmeyin.`
      }
    ]
  },
  {
    id: 'teknoloji', icon: '💻', label: 'Teknoloji',
    colorAccent: '#2A6496', colorBg: 'rgba(42,100,150,0.12)',
    texts: [
      {
        id: 'tek-yapi-zeka', title: 'Yapay Zeka Çağının Eşiğinde', subtitle: 'Teknoloji haberleri', difficulty: 'Orta',
        text: `Yapay zeka, artık yalnızca teknoloji şirketlerinin laboratuvarlarında değil; hastanelerin ameliyathanelerinde, mahkemelerin koridorlarında ve ana sınıflarında da boy gösteriyor. Bu dönüşümün hızı, pek çok analistin tahmininin bile ötesine geçti.\n\nAma iş bu kadar basit değil. Bu teknolojinin ne kadar hızlı yayıldığı kadar, nasıl yayıldığı da önemli. Yapay zekanın tıpta tanı doğruluğunu artırdığı gerçek; ancak bu araçlara erişim, küresel sağlık eşitsizliklerini derinleştirme riskini de taşıyor.\n\nHukuki perspektiften bakıldığında da tablo karmaşık. Yapay zekanın ürettiği içeriklerin telif hakkı, algoritmik kararların hesap verebilirliği ve mahremiyet ihlalleri, düzenleyici kurumların gündemine hızla girdi.\n\nYapay zekanın geleceği, yalnızca teknolojinin kendisine değil; onu nasıl düzenlediğimize ve insanı merkezde tutup tutmadığımıza bağlı olacak.`
      },
      {
        id: 'tek-uzay', title: 'Uzay Turizmi ve Yeni Sınırlar', subtitle: 'Havacılık ve uzay', difficulty: 'Hızlı',
        text: `Uzay maceraları, sadece devletlerin himayesindeki devasa kurumların tekelinden çıkarak milyarder girişimcilerin rekabet sahnesine dönüştü. Yörünge altı uçuşlarla başlayan bu yeni dönem, sıradan vatandaşların -en azından bilet parasını ödeyebilenlerin- uzayın o sonsuz karanlığını tecrübe etmesine olanak tanıyor.\n\nAncak bu heyecan verici gelişmenin arka planında ciddi etik ve çevresel tartışmalar yatıyor. Tek bir roket fırlatılışının atmosfere bıraktığı karbon ayak izi, on binlerce aracın bir yıllık emisyonuna bedel. Acaba insanlık olarak Dünya'nın ekolojik dengesini feda ederek yıldızlara uzanmamız ne kadar mantıklı?\n\nÖte yandan, uzay madenciliği gibi devasa ekonomik fırsatlar da kapıda bekliyor. Asteroitlerden çıkarılabilecek nadir metaller, yeryüzündeki kaynak krizlerini sonsuza dek çözme potansiyeline sahip.\n\nBu çılgın yarışta ilk koloniler kurulmaya başlandığında, sadece teknolojik gücümüzü değil, aynı zamanda dünya dışındaki hukuksal altyapımızı da test edeceğiz.`
      },
      {
        id: 'tek-siber', title: 'Kişisel Verilerin Görünmez Savaşı', subtitle: 'Siber güvenlik', difficulty: 'Orta',
        text: `Telefonunuzun ekranına her dokunduğunuzda, attığınız her beğeni ve arama motoruna yazdığınız her kelime, arkanızda devasa bir dijital ayak izi bırakıyor. Bugünün dünyasında veri, petrolden bile daha değerli bir hammadde haline gelmiş durumda.\n\nBüyük teknoloji devleri, davranış kalıplarımızı analiz ederek sadece ne satın alacağımızı değil, aynı zamanda hangi siyasi görüşe meyledeceğimizi bile önceden tahmin edebilen algoritmalar geliştiriyor. Sosyal medya platformlarında karşımıza çıkan içerikler tesadüf  değil, dikkat süremizi maksimum seviyede sömürmek için tasarlanmış kusursuz birer mühendislik harikası.\n\nBu görünmez veri savaşında en zayıf halka ise genellikle kullanıcının kendisi oluyor. Okunmadan onaylanan o uzun gizlilik sözleşmeleri, aslında hayatımızın mahremiyetini üçüncü şahıslara altın tepside sunmamız anlamına geliyor.\n\nGeleceğin en büyük siber güvenlik uzmanları sadece sistemleri değil, manipüle edilen insan algısını da korumak zorunda kalacak olan dijital psikologlar olacak.`
      },
      {
        id: 'tek-kuantum', title: 'Kuantum Bilgisayarlar Geliyor', subtitle: 'İleri teknoloji', difficulty: 'Yavaş',
        text: `Klasik bilgisayarlarımız verileri sıfırlar ve birler olarak işlerken, kuantum bilgisayarlar aynı anda hem sıfır hem de bir olabilen 'kübit'ler sayesinde eşi görülmemiş bir işlem gücüne ulaşıyor. Bu teknoloji, bugün en gelişmiş süper bilgisayarların on bin yılda çözeceği bir şifreyi saniyeler içinde kırabilme kapasitesine sahip.\n\nEğer bu güç kontrolsüz bir şekilde piyasaya sürülürse, dünya üzerindeki tüm bankacılık sistemlerinin şifreleme altyapıları bir gecede geçersiz kalabilir. İşte tam da bu yüzden, kuantum üstünlüğüne ulaşmak günümüzün en gizli ve en stratejik teknoloji yarışıdır.\n\nAncak bu madalyonun sadece karanlık yüzü değil; kuantum hesaplama aynı zamanda tıp dünyasında çığır açacak potansiyele sahip. Kanser hücrelerinin genetik mutasyonlarını moleküler düzeyde simüle edebilmek, kişiye özel ve yüzde yüz etkili ilaçların laboratuvar ortamı yerine bilgisayarlarda saniyeler içinde tasarlanmasını sağlayacak.\n\nİnsan zekasının sınırlarını zorlayan bu kuantum sıçraması, gerçekliğin temel taşlarını sil baştan tanımlamaya hazırlanıyor.`
      },
      {
        id: 'tek-oyun', title: 'E-Sporun Küresel Yükselişi', subtitle: 'Oyun endüstrisi', difficulty: 'Hızlı',
        text: `Bilgisayar oyunları artık sadece ergenlik çağındaki gençlerin karanlık odalarında vakit geçirdiği sıradan bir hobi olmaktan çıktı. Bugün stadyumları dolduran on binlerce fanatiğin ve ekran başında milyonlarca izleyicinin takip ettiği profesyonel bir spor dalı olan e-spor, milyarlarca dolarlık devasa bir endüstriye dönüştü.\n\nSaniyede yüzlerce karar alıp klavye üzerinde bu kararları milisaniyelere sığdıran profesyonel oyuncular, geleneksel sporcularla aynı refleks testlerinden ve psikolojik kamplardan geçiyor. Transfer ücretleri milyon dolarları bulan bu dijital atletler, dünya çapında geniş bir hayran kitlesine sahip.\n\nEbeveynlerin çocuklarına "Oyun oynamayı bırak" dediği günlerden, "Antrenmanını aksatma" dediği günlere doğru hızlı bir geçiş yapıyoruz. Özellikle olimpiyat komitesinin e-sporu resmi olarak entegre etme vizyonu, algıların ne kadar hızlı değiştiğinin en net göstergesi.\n\nGeleceğin stadyumlarında artık çim sahalar değil, dev ekranlar ve holografik arenalar yer alacak. Eğlencenin yeni adresi artık tamamen dijital!`
      }
    ]
  },
  {
    id: 'cevre', icon: '🌱', label: 'Çevre',
    colorAccent: '#2D6E2E', colorBg: 'rgba(45,110,46,0.12)',
    texts: [
      {
        id: 'cev-orman', title: 'Ormanlar İçin Son Çağrı', subtitle: 'Çevre haberleri', difficulty: 'Orta',
        text: `Her yıl yaklaşık on beş milyar ağaç, tarım arazisi açma, kentleşme ve endüstriyel çıkarlar uğruna kesilip gidiyor. Bu rakam kafayı döndürecek kadar büyük: saniyede yaklaşık beş ağaç. Saatte binlerce dönümü aşan orman alanı yok oluyor.\n\nAncak son on yılda, bu tabloya karşı örgütlenen küresel çabalar da ivme kazandı. Yeniden ormanlaştırma hareketleri, sürdürülebilir ormancılık standartları ve koruma alanı ilan edilen ormanlık bölgeler, en azından kaybın hızını yavaşlatmaya başladı.\n\nTürkiye, ormanlaştırma alanında umut vaat eden bir örnek sunuyor. Son on yılda gerçekleştirilen seferberlik kampanyalarıyla milyonlarca fidan toprakla buluştu. Ancak uzmanlar, salt fidan dikmekten öte; doğal ormanların korunmasının çok daha belirleyici olduğunu vurguluyor.\n\nOrmanları korumak bir seçenek değil; bir sonraki nesle karşı yerine getirilmesi gereken ahlaki bir yükümlülüktür.`
      },
      {
        id: 'cev-iklim', title: 'İklim Krizi ve Eriyen Buzullar', subtitle: 'Küresel ısınma', difficulty: 'Yavaş',
        text: `Kutuplardaki buzullar, tıpkı gezegenimizin termostatı gibi çalışarak küresel iklim dengesini milyonlarca yıldır kusursuz bir şekilde koruyor. Beyaz yüzeyleri sayesinde güneş ışınlarının büyük bir kısmını uzaya geri yansıtarak okyanusların aşırı ısınmasını engelliyorlar.\n\nAncak sanayi devriminden bu yana atmosfere amansızca saldığımız sera gazları, bu kusursuz termostatı adeta bozmuş durumda. Sadece son kırk yıl içerisinde Kuzey Buz Denizi'ndeki yazlık buz örtüsünün tam yarısı geri dönülemez bir biçimde eriyip yok oldu.\n\nBu durum sadece o bölgedeki kutup ayılarını veya penguenleri değil, dünyanın diğer ucundaki bir çiftçiyi bile doğrudan etkiliyor. Değişen okyanus akıntıları, kuraklıkların şiddetini artırıyor, görülmemiş kasırgalar üretiyor ve deniz seviyelerini tehlikeli biçimde yükseltiyor.\n\nBilim insanları son uyarılarını yapıyor: Eğer küresel ısınmayı bir buçuk derecenin altında tutamazsak, sadece buzulları değil, bildiğimiz anlamdaki medeniyetin geleceğini de sularda boğulmaya terk edeceğiz.`
      },
      {
        id: 'cev-plastik', title: 'Okyanusların Sessiz Katili: Plastik', subtitle: 'Deniz kirliliği', difficulty: 'Orta',
        text: `Bugün sadece kısa bir kahve molası için kullandığımız tek kullanımlık plastik bardakların doğada çözünmesi tam tamına dört yüz yıl sürüyor. Oysa biz bu malzemeleri, ömrü birkaç dakikayla sınırlı kullanımlar için devasa fabrikalarda seri olarak üretmeye hiç durmadan devam ediyoruz.\n\nŞu an Pasifik Okyanusu'nun tam ortasında, akıntıların bir araya getirdiği ve büyüklüğü neredeyse Türkiye'nin üç katına ulaşan devasa bir çöp girdabı bulunuyor. Bu kıta büyüklüğündeki plastik yığını, deniz canlılarının sindirim sistemlerine karışarak ekosistemi içeriden çökertiyor.\n\nİşin en ürkütücü yanı ise, güneş ışınları ve dalgaların etkisiyle parçalanan bu atıkların 'mikroplastik' adı verilen mikroskobik parçalara bölünmesi. Bu parçalar besin zincirine öyle bir sızdı ki, artık yediğimiz balıklarda, içtiğimiz suda ve hatta kanımızda bile plastik partikülleri tespit ediliyor.\n\nPlastik kirliliğiyle mücadele etmek, sahillerdeki çöpleri toplamaktan çok daha fazlasını, yani tüm tüketim alışkanlıklarımızı radikal bir şekilde değiştirmemizi zorunlu kılıyor.`
      },
      {
        id: 'cev-enerji', title: 'Yenilenebilir Enerji Devrimi', subtitle: 'Sürdürülebilirlik', difficulty: 'Hızlı',
        text: `Dünya, fosil yakıtların karanlık çağından çıkıp yeni ve aydınlık bir enerji devriminin eşiğinden geçiyor! Rüzgar türbinleri ve devasa güneş santralleri, artık fütüristik bir hayal olmaktan çıktı; maliyet açısından kömür ve doğalgazı tahtından eden yegane ekonomik alternatif haline geldi.\n\nSadece çöllere kurulan devasa güneş paneli tarlaları değil, evlerin çatılarına ve otoyol kenarlarına yerleştirilen mikro paneller de enerji üretimini tamamen demokratikleştiriyor. Tüketiciler, aynı zamanda üretici konumuna geçerek ihtiyaç fazlası enerjilerini doğrudan şebekeye satabiliyorlar.\n\nElektrikli araç teknolojisindeki baş döndürücü hız, bu yeşil dönüşümün en büyük taşıyıcısı konumunda. Büyük otomotiv devleri içten yanmalı motorları yavaş yavaş üretim bantlarından kaldırırken, şehir içi hava kalitesinde gözle görülür bir iyileşme yaşanacağı öngörülüyor.\n\nEğer rüzgarı, güneşi ve dalgaları teknolojimizle doğru şekilde harmanlayabilirsek; jeopolitik savaşların ana nedeni olan enerji kaynakları, tüm insanlığın ücretsiz kullanabileceği sınırsız bir mirasa dönüşebilir.`
      },
      {
        id: 'cev-biyocesitlilik', title: 'Yok Olan Türler ve Sessiz Ekosistem', subtitle: 'Doğa koruma', difficulty: 'Yavaş',
        text: `Gezegenimiz şu anda, dinazorların yok oluşundan bu yana görülen en büyük altıncı kitlesel yok oluş evresini yaşıyor. Ama bu kez felaketin sebebi ne dev bir asteroit ne de devasa bir yanardağ patlaması; bu inanılmaz yıkımın tek ve mutlak sorumlusu bizzat kendi türümüz.\n\nSon elli yıl içinde memeli, kuş, sürüngen ve balık popülasyonlarında ortalama yüzde altmış sekiz oranında korkunç bir azalma tespit edildi. Arıların ölümü sadece bir türün yok olması demek değil; tozlaşma zincirinin çökmesi, yani küresel tarım üretiminin ve dolayısıyla gıda güvenliğinin iflas etmesi anlamına geliyor.\n\nEkosistem, tıpkı Jenga oyunundaki ahşap bloklar gibidir; her bir canlı türü, o sistemin ayakta kalmasını sağlayan taşıyıcı birer sütundur. Birkaç bloku çektiğinizde kule hemen yıkılmaz, ancak kritik taşıyıcılardan biri yerinden oynadığında tüm sistem aniden büyük bir gürültüyle çöker.\n\nDoğayı korumak bir romantizm meselesi değil; suyun temiz kalması, toprağın zehirlenmemesi ve insanlığın yeryüzündeki varlığını sürdürebilmesi için kazanmamız gereken son büyük varoluşsal savaştır.`
      }
    ]
  },
  {
    id: 'magazin', icon: '🎬', label: 'Magazin',
    colorAccent: '#B85C4A', colorBg: 'rgba(184,92,74,0.12)',
    texts: [
      {
        id: 'mag-film', title: 'Yılın Filmi Seyirciyle Buluşuyor', subtitle: 'Magazin ve sinema haberleri', difficulty: 'Orta',
        text: `Bu yılın en çok beklenen yerli filmi, hafta sonu seyirciyle buluşuyor. Genç bir yönetmenin ikinci uzun metrajı olan yapım, geçen altı ayda festivalden festivale koştu ve her durağında ses getirdi.\n\nFilm, İstanbul'un arka sokaklarında geçen üç günlük bir aile hikâyesini anlatıyor. Babasının hastalığını öğrenen bir genç kadının şehir içindeki yolculuğu; hafızası silinmeye başlayan bir babanın geçmişle şimdisi arasında salınımı.\n\nBaşroldeki isim, bu rolü için üç ay özel araştırma ve prova döneminden geçtiğini söylüyor. Sahnelerin büyük kısmı doğal ışıkla çekilmiş, stüdyo simülasyonu yok. Bu tercih hem yapımın bütçesini gerçekçi tutmuş hem de oyuncuları ham ve içten bir performansa zorlamış.\n\nTürk sineması, sanatsal cesaretiyle birleşen bu tür hikayeleri her geçen yıl daha güçlü anlatmayı öğreniyor. Bugün sinemada buluşmak için güzel bir gün.`
      },
      {
        id: 'mag-galalar', title: 'Kırmızı Halıda Şıklık Yarışı', subtitle: 'Moda ve gala gecesi', difficulty: 'Hızlı',
        text: `Magazin dünyasının en ışıltılı gecelerinden birine hoş geldiniz sevgili izleyiciler! Yılın en çok konuşulan moda etkinliğinde kameralarımız kırmızı halının hemen kenarında, ünlülerin akın ettiği bu muazzam töreni saniye saniye sizlere aktarıyor.\n\nİşte beklenen an geldi! Ünlü pop divası, Paris'ten özel olarak getirtilen ve üzerinde tam dört bin adet el işlemesi kristal taşıyan o muazzam elbisesiyle flaşların arasından süzülerek geçiyor. Hemen arkasında ise son dönemin en popüler dizi çifti, ilk kez el ele kameraların karşısına çıkarak tüm ayrılık dedikodularına son noktayı koydu!\n\nGazetecilerin soru yağmuru altında bile tebessümlerini hiç bozmayan ünlüler, birazdan başlayacak ödül töreni için sarayın görkemli kapılarından teker teker içeri giriyor. Gecenin en rüküşü ve en şıkı kim olacak? Tüm detaylarla biz buradayız, sakın bizden ayrılmayın!`
      },
      {
        id: 'mag-konser', title: 'Stadyum Konserinde Büyük İzdiham', subtitle: 'Canlı konser haberi', difficulty: 'Hızlı',
        text: `Sayın seyirciler, İstanbul bu gece tam anlamıyla uyumuyor! Dünya turnesi kapsamında Türkiye'ye gelen efsanevi rock grubu, tam seksen bin kişinin doldurduğu stadyumda adeta yer yerinden oynatıyor. Konser alanına giremeyen binlerce hayran ise stadyum etrafında dev ekranlardan bu müzik şölenine eşlik ediyor.\n\nGöz alıcı lazer şovları ve devasa sahne alevleriyle başlayan konserin daha ilk on dakikasında enerji tavan yaptı. Özellikle solistin Türkçe olarak "Sizi çok özledim!" diye bağırması, tribünlerdeki coşkuyu adeta bir çılgınlığa dönüştürdü.\n\nBu dev organizasyon için üç haftadır aralıksız çalışan sahne ekibi, tam kırk tırlık teknik malzemeyle görsel ve işitsel bir mucizeye imza atıyor. Bizler de canlı yayın aracımızdan bu efsanevi geceyi sizlere anbean aktarmaya devam edeceğiz, stüdyoya dönüyoruz.`
      },
      {
        id: 'mag-skandal', title: 'Sosyetede Sürpriz Ayrılık', subtitle: 'Magazin kulisleri', difficulty: 'Orta',
        text: `Ekranların ve cemiyet hayatının en gözde çifti hakkında ortaya atılan son iddialar magazin gündemine adeta bomba gibi düştü. Yedi yıllık masalsı evlilikleriyle herkese örnek gösterilen ünlü ikilinin, yaz tatilini ayrı geçirmesi ve sosyal medyadaki tüm fotoğraflarını silmesi kafalardaki soru işaretlerini iyice artırdı.\n\nDün akşam Nişantaşı'nda yakın arkadaşlarıyla yemek yerken görüntülenen ünlü iş insanı, muhabirlerin ayrılıkla ilgili ısrarlı sorularını yanıtsız bırakarak hızla aracına yöneldi. Menajerlik şirketinden henüz resmi bir basın açıklaması yapılmasa da, kulislerde çiftin mal paylaşımı için avukatlarıyla gizlice görüşmeye başladığı fısıldanıyor.\n\nGörünen o ki, bu fırtınalı ilişkinin yankıları önümüzdeki günlerde ana haber bültenlerine kadar taşınacak. Biz de ekibimizle birlikte bu sarsıcı hikayenin peşini bırakmayacağız.`
      },
      {
        id: 'mag-odul', title: 'Müzik Ödülleri Gecesi Sahiplerini Buldu', subtitle: 'Ödül töreni heyecanı', difficulty: 'Orta',
        text: `Müzik endüstrisinin en iyilerinin taçlandırıldığı Müzik Ödülleri Gecesi, yine sürprizlerle dolu ve temposu hiç düşmeyen efsanevi bir şova sahne oldu. Yılın En İyi Şarkısı dalında kıyasıya bir rekabetin yaşandığı gecede, ödülü hiç beklenmedik bir şekilde henüz yirmi yaşındaki genç yetenek kucakladı.\n\nGözyaşları içinde sahneye çıkan genç sanatçı, ödülünü annesine adarken yaptığı o vurucu ve duygusal konuşmayla salondaki herkesi ayaklandırdı. Gecenin bir diğer çok konuşulan anı ise, uzun yıllardır sahnelerden uzak kalan efsane pop yıldızının kapanış şovu için sürpriz bir şekilde asansörle sahneye inmesiydi.\n\nSahnede gerçekleşen bu göz kamaştırıcı diriliş, sosyal medyada dakikalar içinde milyonlarca kez paylaşıldı. Bu büyülü gecenin tüm sahne arkası röportajları ve parti görüntüleri yarın sabah ekranlarınızda olacak.`
      }
    ]
  }
];

const TP_SPEAKERS = [
  { id: 'haber',    icon: '🎙️', label: 'Haber Spikeri',      desc: 'Ölçülü · Net · Profesyonel',    baseSpeed: 35 },
  { id: 'spor',     icon: '⚡',  label: 'Spor Yorumcusu',     desc: 'Hızlı · Enerjik · Dinamik',     baseSpeed: 55 },
  { id: 'belgesel', icon: '🌿',  label: 'Belgesel Anlatıcısı', desc: 'Yavaş · Derin · Düşündürücü',  baseSpeed: 25 },
  { id: 'kurumsal', icon: '👔',  label: 'Kurumsal Konuşmacı', desc: 'Güvenilir · Açık · Resmi',      baseSpeed: 32 },
  { id: 'radyo',    icon: '📻',  label: 'Radyo Sunucusu',     desc: 'Sıcak · Samimi · Akıcı',        baseSpeed: 40 },
];

// ── STATE ──────────────────────────────────────────────── //
let tpState = {
  activeCat:    TP_CATEGORIES[0].id,
  activeTextId: TP_CATEGORIES[0].texts[0].id,
  activeSpeaker: 'haber',
  isPlaying:    false,
  speed:        1.0,
  fontSize:     26,
  scrollY:      0,
  rafId:        null,
  lastTs:       null,
};

// ── RECORDING STATE ────────────────────────────────────── //
let tpRecState = {
  mediaRec: null,
  micStream: null,
  chunks: [],
  blob: null,
  isRec: false,
  isPlay: false,
  secs: 0,
  interval: null,
  audioEl: null,
  pbInterval: null,
  analyser: null,
  audioCtx: null,
  animFrame: null,
};

// ── HELPERS ────────────────────────────────────────────── //
function _tpGetCat()    { return TP_CATEGORIES.find(c => c.id === tpState.activeCat); }
function _tpGetText()   { const cat = _tpGetCat(); return cat ? cat.texts.find(t => t.id === tpState.activeTextId) : null; }
function _tpGetSpeaker(){ return TP_SPEAKERS.find(s => s.id === tpState.activeSpeaker); }
function _tpBaseSpeed() { const sp = _tpGetSpeaker(); return sp ? sp.baseSpeed : 35; }
function _tpFmtTime(s)  { s = Math.floor(s); return Math.floor(s/60)+':'+String(s%60).padStart(2,'0'); }

// ── RENDER ─────────────────────────────────────────────── //
function renderTeleprompter() {
  const el = $('teleprompter-container');
  if (!el) return;

  el.innerHTML = `
<div class="tp-wrapper">

  <!-- HEADER -->
  <div class="tp-header">
    <div class="tp-header-badge">📺 Teleprompter Modülü</div>
    <h2 class="tp-header-title">Profesyonel <span class="hl">Teleprompter</span></h2>
    <p class="tp-header-sub">Spiker gibi oku — hız ve perde kontrolüyle sahnelere hazırlan</p>
  </div>

  <!-- SPEAKER SELECTOR -->
  <div class="tp-speakers-row" id="tp-speakers-row">
    ${TP_SPEAKERS.map(sp => `
      <button class="tp-spk-btn ${tpState.activeSpeaker === sp.id ? 'active' : ''}"
              data-spk="${sp.id}" id="tp-spk-${sp.id}">
        <span class="tp-spk-icon">${sp.icon}</span>
        <div class="tp-spk-texts">
          <div class="tp-spk-label">${sp.label}</div>
          <div class="tp-spk-desc">${sp.desc}</div>
        </div>
      </button>
    `).join('')}
  </div>

  <!-- BODY: Left + Right -->
  <div class="tp-body">

    <!-- LEFT PANEL -->
    <div class="tp-left-panel">
      <div class="tp-panel-title">📂 Kategori</div>
      <div class="tp-cats-list" id="tp-cats-list">
        ${TP_CATEGORIES.map(cat => `
          <button class="tp-cat-item ${tpState.activeCat === cat.id ? 'active' : ''}"
                  data-cat="${cat.id}" id="tp-catitem-${cat.id}"
                  style="${tpState.activeCat === cat.id ? `background:${cat.colorBg};border-color:${cat.colorAccent}` : ''}">
            <span class="tp-cat-icon">${cat.icon}</span>
            <span class="tp-cat-label">${cat.label}</span>
            <span class="tp-cat-badge">${cat.texts.length}</span>
          </button>
        `).join('')}
      </div>

      <div class="tp-panel-title" style="margin-top:16px">📄 Metinler</div>
      <div class="tp-text-list" id="tp-text-list">
        ${_renderTpTextList()}
      </div>
    </div>

    <!-- RIGHT PANEL: Screen + Controls -->
    <div class="tp-right-panel">
      <!-- Teleprompter Screen -->
      <div class="tp-screen" id="tp-screen">
        <!-- Top fade overlay -->
        <div class="tp-screen-overlay-top"></div>
        <!-- Reading guide line -->
        <div class="tp-screen-guide"></div>
        <!-- Bottom fade overlay -->
        <div class="tp-screen-overlay-bot"></div>

        <!-- Scrollable text area - overflow hidden, JS controls scrollTop -->
        <div class="tp-scroll-area" id="tp-scroll-area">
          <div class="tp-scroll-pad-top"></div>
          <div class="tp-text-content" id="tp-text-content" style="font-size:${tpState.fontSize}px">
            ${_tpFormatText(_tpGetText()?.text || '')}
          </div>
          <div class="tp-scroll-pad-bot"></div>
        </div>

        <!-- Now reading badge -->
        <div class="tp-now-badge" id="tp-now-badge">
          ${_tpGetSpeaker()?.icon || '🎙️'} ${_tpGetText()?.title || '—'}
        </div>

        <!-- LIVE indicator -->
        <div class="tp-playing-dot" id="tp-playing-dot" style="display:none">● CANLI</div>
      </div>

      <!-- Controls bar -->
      <div class="tp-controls">
        <!-- Primary -->
        <div class="tp-ctrl-primary">
          <button class="tp-ctrl-btn tp-play-btn" id="tp-play-btn">▶ Başlat</button>
          <button class="tp-ctrl-btn tp-reset-btn" id="tp-reset-btn">↺ Sıfırla</button>
        </div>

        <!-- Speed -->
        <div class="tp-ctrl-group">
          <div class="tp-ctrl-group-label">⚡ Hız</div>
          <div class="tp-speed-row">
            ${[0.5, 0.75, 1, 1.25, 1.5, 2, 2.5].map(s => `
              <button class="tp-speed-btn ${tpState.speed === s ? 'active' : ''}"
                      data-speed="${s}">${s}×</button>
            `).join('')}
          </div>
        </div>

        <!-- Font size -->
        <div class="tp-ctrl-group">
          <div class="tp-ctrl-group-label">🔠 Yazı</div>
          <div class="tp-font-row">
            <button class="tp-font-btn" id="tp-font-dec">A−</button>
            <span class="tp-font-val" id="tp-font-val">${tpState.fontSize}px</span>
            <button class="tp-font-btn" id="tp-font-inc">A+</button>
          </div>
        </div>

        <!-- Progress -->
        <div class="tp-progress-wrap">
          <div class="tp-progress-bar-bg">
            <div class="tp-progress-bar" id="tp-progress-bar" style="width:0%"></div>
          </div>
          <div class="tp-progress-label" id="tp-progress-label">0%</div>
        </div>
      </div>
    </div>
  </div>

  <!-- SES KAYIT PANELI -->
  <div class="tp-recorder-section">
    <div class="tp-rec-header">
      <div class="tp-rec-title-row">
        <span class="tp-rec-icon">🎤</span>
        <div>
          <div class="tp-rec-title">Ses Kaydı</div>
          <div class="tp-rec-sub">Okurken kendinizi kaydedin · Dinleyin · Gelişiminizi takip edin</div>
        </div>
      </div>
      <div class="tp-rec-tip">💡 Kaydı başlatın, teleprompter'ı okuyun, bitince dinleyin</div>
    </div>

    <div class="tp-rec-body">
      <!-- Visualizer -->
      <div class="tp-rec-visualizer" id="tp-rec-visualizer">
        <div class="tp-rec-bars" id="tp-rec-bars">
          ${Array(16).fill('<span></span>').join('')}
        </div>
        <div class="tp-rec-status" id="tp-rec-status">HAZIR</div>
      </div>

      <!-- Timer -->
      <div class="tp-rec-timer" id="tp-rec-timer">0:00</div>

      <!-- Playback progress -->
      <div class="tp-rec-pb-wrap" id="tp-rec-pb-wrap" style="display:none">
        <div class="tp-rec-pb-bg" id="tp-rec-pb-bg">
          <div class="tp-rec-pb-fill" id="tp-rec-pb-fill"></div>
        </div>
        <div class="tp-rec-pb-times">
          <span id="tp-rec-pb-cur">0:00</span>
          <span id="tp-rec-pb-dur">0:00</span>
        </div>
      </div>

      <!-- Buttons -->
      <div class="tp-rec-controls">
        <button class="tp-rec-btn tp-rec-record" id="tp-rec-record-btn" title="Kaydet / Durdur">⏺</button>
        <button class="tp-rec-btn tp-rec-play" id="tp-rec-play-btn" title="Dinle / Duraklat" disabled>▶</button>
        <button class="tp-rec-btn tp-rec-delete" id="tp-rec-delete-btn" title="Kaydı Sil" disabled>🗑</button>
        <button class="tp-rec-btn tp-rec-download" id="tp-rec-download-btn" title="İndir" disabled>⬇</button>
      </div>

      <div class="tp-rec-note" id="tp-rec-note">⏺ tuşuna basarak kaydı başlat</div>
      <audio id="tp-rec-audio" style="display:none"></audio>
    </div>
  </div>

  <!-- TIPS -->
  <div class="tp-tips-row">
    <div class="tp-tip-card">
      <span>💡</span>
      <span>Her okuma öncesi 3 derin nefes al — sesin ve diksiyonun için vücudunu hazırla.</span>
    </div>
    <div class="tp-tip-card">
      <span>🎙️</span>
      <span>Hız kaydırıcıyı değiştirerek hem yavaş hem hızlı okuma egzersizi yapabilirsin.</span>
    </div>
    <div class="tp-tip-card">
      <span>📺</span>
      <span>Spiker türünü değiştirerek aynı metni farklı tonlama ve tempolarda seslendir.</span>
    </div>
    <div class="tp-tip-card">
      <span>🎤</span>
      <span>Ses kaydı al, dinle ve gelişimini takip et — en hızlı öğrenme yöntemi budur.</span>
    </div>
  </div>
</div>
  `;

  _bindTpEvents();
  _initTpRecorder();
}

function _renderTpTextList() {
  const cat = _tpGetCat();
  if (!cat) return '';
  return cat.texts.map(txt => `
    <button class="tp-text-item ${tpState.activeTextId === txt.id ? 'active' : ''}"
            data-txt="${txt.id}" id="tp-txtitem-${txt.id}">
      <div class="tp-txt-title">${txt.title}</div>
      <div class="tp-txt-sub">${txt.subtitle}</div>
      <span class="tp-txt-diff tp-diff-${txt.difficulty}">${txt.difficulty}</span>
    </button>
  `).join('');
}

function _tpFormatText(text) {
  if (!text) return '';
  return text.split('\n\n').map(para =>
    `<p class="tp-para">${para.trim()}</p>`
  ).join('');
}

// ── EVENT BINDING ──────────────────────────────────────── //
function _bindTpEvents() {
  // Speaker buttons
  document.querySelectorAll('.tp-spk-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      tpState.activeSpeaker = btn.dataset.spk;
      _tpStopScrolling();
      document.querySelectorAll('.tp-spk-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      _tpUpdateNowBadge();
    });
  });

  // Category items
  document.querySelectorAll('.tp-cat-item').forEach(btn => {
    btn.addEventListener('click', () => {
      _tpStopScrolling();
      tpState.activeCat = btn.dataset.cat;
      const cat = _tpGetCat();
      if (cat && cat.texts.length > 0) tpState.activeTextId = cat.texts[0].id;
      document.querySelectorAll('.tp-cat-item').forEach(b => {
        b.classList.remove('active');
        b.style.background = '';
        b.style.borderColor = '';
      });
      const thisCat = _tpGetCat();
      btn.classList.add('active');
      btn.style.background = thisCat?.colorBg || '';
      btn.style.borderColor = thisCat?.colorAccent || '';
      const listEl = $('tp-text-list');
      if (listEl) {
        listEl.innerHTML = _renderTpTextList();
        _bindTpTextItems();
      }
      _tpLoadText();
    });
  });

  _bindTpTextItems();

  // Play/Pause
  const playBtn = $('tp-play-btn');
  if (playBtn) {
    playBtn.addEventListener('click', () => {
      if (tpState.isPlaying) _tpPause();
      else _tpPlay();
    });
  }

  // Reset
  const resetBtn = $('tp-reset-btn');
  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      _tpStopScrolling();
      tpState.scrollY = 0;
      const sa = $('tp-scroll-area');
      if (sa) sa.scrollTop = 0;
      _tpUpdateProgress();
    });
  }

  // Speed buttons
  document.querySelectorAll('.tp-speed-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      tpState.speed = parseFloat(btn.dataset.speed);
      document.querySelectorAll('.tp-speed-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    });
  });

  // Font buttons
  const fontDec = $('tp-font-dec');
  const fontInc = $('tp-font-inc');
  if (fontDec) fontDec.addEventListener('click', () => _tpAdjustFont(-2));
  if (fontInc) fontInc.addEventListener('click', () => _tpAdjustFont(2));

  // Keyboard shortcuts
  document.addEventListener('keydown', _tpKeyHandler);
}

function _tpKeyHandler(e) {
  // Only when teleprompter is active
  if (!$('teleprompter-container') || $('teleprompter-container').style.display === 'none') return;
  if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;

  if (e.code === 'Space') {
    e.preventDefault();
    if (tpState.isPlaying) _tpPause();
    else _tpPlay();
  }
  if (e.code === 'KeyR' && !e.ctrlKey) {
    e.preventDefault();
    _tpStopScrolling();
    tpState.scrollY = 0;
    const sa = $('tp-scroll-area');
    if (sa) sa.scrollTop = 0;
    _tpUpdateProgress();
  }
  if (e.code === 'ArrowUp') _tpAdjustFont(2);
  if (e.code === 'ArrowDown') _tpAdjustFont(-2);
}

function _bindTpTextItems() {
  document.querySelectorAll('.tp-text-item').forEach(btn => {
    btn.addEventListener('click', () => {
      _tpStopScrolling();
      tpState.activeTextId = btn.dataset.txt;
      tpState.scrollY = 0;
      document.querySelectorAll('.tp-text-item').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      _tpLoadText();
    });
  });
}

function _tpLoadText() {
  const txt = _tpGetText();
  const content = $('tp-text-content');
  if (content && txt) {
    content.style.fontSize = tpState.fontSize + 'px';
    content.innerHTML = _tpFormatText(txt.text);
  }
  const sa = $('tp-scroll-area');
  if (sa) sa.scrollTop = 0;
  tpState.scrollY = 0;
  _tpUpdateProgress();
  _tpUpdateNowBadge();
}

function _tpUpdateNowBadge() {
  const badge = $('tp-now-badge');
  const sp = _tpGetSpeaker();
  const txt = _tpGetText();
  if (badge) badge.textContent = `${sp?.icon || '🎙️'} ${txt?.title || '—'}`;
}

function _tpAdjustFont(delta) {
  tpState.fontSize = Math.min(44, Math.max(14, tpState.fontSize + delta));
  const val = $('tp-font-val');
  if (val) val.textContent = tpState.fontSize + 'px';
  const content = $('tp-text-content');
  if (content) content.style.fontSize = tpState.fontSize + 'px';
}

// ── SCROLLING ENGINE ───────────────────────────────────── //
function _tpPlay() {
  tpState.isPlaying = true;
  tpState.lastTs = null;
  const playBtn = $('tp-play-btn');
  if (playBtn) { playBtn.innerHTML = '⏸ Duraklat'; playBtn.classList.add('playing'); }
  const dot = $('tp-playing-dot');
  if (dot) dot.style.display = 'block';
  tpState.rafId = requestAnimationFrame(_tpScrollLoop);
}

function _tpPause() {
  tpState.isPlaying = false;
  if (tpState.rafId) { cancelAnimationFrame(tpState.rafId); tpState.rafId = null; }
  const playBtn = $('tp-play-btn');
  if (playBtn) { playBtn.innerHTML = '▶ Devam Et'; playBtn.classList.remove('playing'); }
  const dot = $('tp-playing-dot');
  if (dot) dot.style.display = 'none';
}

function _tpStopScrolling() {
  _tpPause();
  const playBtn = $('tp-play-btn');
  if (playBtn) playBtn.innerHTML = '▶ Başlat';
}

function _tpScrollLoop(ts) {
  if (!tpState.isPlaying) return;
  if (tpState.lastTs === null) tpState.lastTs = ts;
  const dt = (ts - tpState.lastTs) / 1000;
  tpState.lastTs = ts;

  const pxPerSec = _tpBaseSpeed() * tpState.speed;
  tpState.scrollY += pxPerSec * dt;

  const sa = $('tp-scroll-area');
  if (sa) {
    sa.scrollTop = tpState.scrollY;
    const maxScroll = sa.scrollHeight - sa.clientHeight;
    if (maxScroll > 0 && sa.scrollTop >= maxScroll - 2) {
      _tpStopScrolling();
      const playBtn = $('tp-play-btn');
      if (playBtn) playBtn.innerHTML = '✅ Tamamlandı';
      if (typeof showToast === 'function') showToast('🎙️ Metin tamamlandı! Harika iş!');
      return;
    }
    _tpUpdateProgress(maxScroll > 0 ? (sa.scrollTop / maxScroll) * 100 : 0);
  }

  tpState.rafId = requestAnimationFrame(_tpScrollLoop);
}

function _tpUpdateProgress(pct) {
  if (pct === undefined) pct = 0;
  const bar = $('tp-progress-bar');
  const lbl = $('tp-progress-label');
  if (bar) bar.style.width = pct.toFixed(1) + '%';
  if (lbl) lbl.textContent = pct.toFixed(0) + '%';
}

// ── RECORDER ──────────────────────────────────────────── //
function _initTpRecorder() {
  const recBtn  = $('tp-rec-record-btn');
  const playBtn = $('tp-rec-play-btn');
  const delBtn  = $('tp-rec-delete-btn');
  const dlBtn   = $('tp-rec-download-btn');
  const audio   = $('tp-rec-audio');
  const timer   = $('tp-rec-timer');
  const note    = $('tp-rec-note');
  const pbWrap  = $('tp-rec-pb-wrap');
  const pbFill  = $('tp-rec-pb-fill');
  const pbCur   = $('tp-rec-pb-cur');
  const pbDur   = $('tp-rec-pb-dur');
  const bars    = document.querySelectorAll('#tp-rec-bars span');
  const status  = $('tp-rec-status');

  if (!recBtn) return;

  function setStatus(txt, cls) {
    if (status) { status.textContent = txt; status.className = 'tp-rec-status ' + (cls || ''); }
  }
  function fmtT(s) { s = Math.floor(s); return Math.floor(s/60)+':'+String(s%60).padStart(2,'0'); }

  function stopVisual() {
    if (tpRecState.animFrame) { cancelAnimationFrame(tpRecState.animFrame); tpRecState.animFrame = null; }
    bars.forEach(b => { b.style.height = '6px'; b.style.opacity = '0.5'; });
  }

  function drawBars() {
    if (!tpRecState.analyser || !tpRecState.isRec) return;
    const data = new Uint8Array(tpRecState.analyser.frequencyBinCount);
    tpRecState.analyser.getByteFrequencyData(data);
    const step = Math.floor(data.length / bars.length);
    bars.forEach((b, i) => {
      const val = data[i * step] || 0;
      const h = Math.max(6, Math.min(48, (val / 255) * 48));
      b.style.height = h + 'px';
      b.style.opacity = '1';
    });
    tpRecState.animFrame = requestAnimationFrame(drawBars);
  }

  // Record button
  recBtn.addEventListener('click', async () => {
    if (!tpRecState.isRec) {
      // Start recording
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        tpRecState.micStream = stream;

        // Audio context for visualization
        tpRecState.audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        const src = tpRecState.audioCtx.createMediaStreamSource(stream);
        tpRecState.analyser = tpRecState.audioCtx.createAnalyser();
        tpRecState.analyser.fftSize = 64;
        src.connect(tpRecState.analyser);

        tpRecState.chunks = [];
        const mr = new MediaRecorder(stream, { mimeType: MediaRecorder.isTypeSupported('audio/webm') ? 'audio/webm' : '' });
        tpRecState.mediaRec = mr;
        mr.ondataavailable = e => { if (e.data.size > 0) tpRecState.chunks.push(e.data); };
        mr.onstop = () => {
          tpRecState.blob = new Blob(tpRecState.chunks, { type: 'audio/webm' });
          const url = URL.createObjectURL(tpRecState.blob);
          if (audio) { audio.src = url; audio.load(); }
          if (playBtn) playBtn.disabled = false;
          if (delBtn) delBtn.disabled = false;
          if (dlBtn) dlBtn.disabled = false;
          if (pbWrap) pbWrap.style.display = 'flex';
          setStatus('HAZIR', 'ready');
          if (note) note.textContent = '▶ Kaydı dinlemek için oynat tuşuna bas';
        };
        mr.start(100);
        tpRecState.isRec = true;
        tpRecState.secs = 0;

        recBtn.classList.add('recording');
        recBtn.textContent = '⏹';
        setStatus('KAYDEDİLİYOR', 'recording');
        if (note) note.textContent = 'Kaydediliyor... Durdurmak için tekrar bas';

        tpRecState.interval = setInterval(() => {
          tpRecState.secs++;
          if (timer) timer.textContent = fmtT(tpRecState.secs);
        }, 1000);

        drawBars();

      } catch(err) {
        setStatus('HATA', 'error');
        if (note) note.textContent = '❌ Mikrofon erişimi reddedildi. Tarayıcı izinlerini kontrol edin.';
        console.warn('Mic error:', err);
      }
    } else {
      // Stop recording
      tpRecState.isRec = false;
      if (tpRecState.interval) { clearInterval(tpRecState.interval); tpRecState.interval = null; }
      if (tpRecState.mediaRec && tpRecState.mediaRec.state !== 'inactive') tpRecState.mediaRec.stop();
      if (tpRecState.micStream) { tpRecState.micStream.getTracks().forEach(t => t.stop()); tpRecState.micStream = null; }
      stopVisual();
      recBtn.classList.remove('recording');
      recBtn.textContent = '⏺';
    }
  });

  // Play button
  if (playBtn) {
    playBtn.addEventListener('click', () => {
      if (!audio || !tpRecState.blob) return;
      if (!tpRecState.isPlay) {
        audio.play();
        tpRecState.isPlay = true;
        playBtn.textContent = '⏸';
        setStatus('OYNATILIYOR', 'playing');
        if (pbWrap) pbWrap.style.display = 'flex';

        tpRecState.pbInterval = setInterval(() => {
          if (audio.duration && pbFill) {
            const pct = (audio.currentTime / audio.duration) * 100;
            pbFill.style.width = pct + '%';
            if (pbCur) pbCur.textContent = fmtT(audio.currentTime);
            if (pbDur) pbDur.textContent = fmtT(audio.duration);
          }
        }, 100);

        audio.onended = () => {
          tpRecState.isPlay = false;
          playBtn.textContent = '▶';
          if (tpRecState.pbInterval) clearInterval(tpRecState.pbInterval);
          setStatus('HAZIR', 'ready');
        };
      } else {
        audio.pause();
        tpRecState.isPlay = false;
        playBtn.textContent = '▶';
        if (tpRecState.pbInterval) clearInterval(tpRecState.pbInterval);
        setStatus('HAZIR', 'ready');
      }
    });
  }

  // Delete button
  if (delBtn) {
    delBtn.addEventListener('click', () => {
      if (audio) { audio.pause(); audio.src = ''; }
      tpRecState.blob = null; tpRecState.chunks = [];
      tpRecState.secs = 0; tpRecState.isPlay = false;
      if (timer) timer.textContent = '0:00';
      if (pbWrap) pbWrap.style.display = 'none';
      if (pbFill) pbFill.style.width = '0%';
      if (playBtn) { playBtn.disabled = true; playBtn.textContent = '▶'; }
      if (delBtn) delBtn.disabled = true;
      if (dlBtn) dlBtn.disabled = true;
      setStatus('HAZIR', '');
      if (note) note.textContent = '⏺ tuşuna basarak kaydı başlat';
      stopVisual();
    });
  }

  // Download button
  if (dlBtn) {
    dlBtn.addEventListener('click', () => {
      if (!tpRecState.blob) return;
      const url = URL.createObjectURL(tpRecState.blob);
      const a = document.createElement('a');
      a.href = url;
      const txt = _tpGetText();
      a.download = `diksiyon_${txt?.id || 'kayit'}_${Date.now()}.webm`;
      a.click();
      URL.revokeObjectURL(url);
    });
  }
}
