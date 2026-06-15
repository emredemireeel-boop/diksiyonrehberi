const fs = require('fs');

const dilExercises = [
  {
    id: 101, slug: 'dil-streci', cat: 'dil', emoji: '👅', title: 'Dil Streçi (Tongue Stretch)',
    dur: '4 dk', level: 'Başlangıç', freq: 'Her gün',
    desc: 'Dilin tüm sınırlarını zorlayarak ağız içi esnekliği maksimize eden temel esnetme egzersizidir. Konuşma öncesi dili "ısındırmak" için idealdir.',
    benefits: ['Dil kaslarındaki gerginliği anında alır', 'Kelime yutmalarını ve peltekliği azaltır', 'L ve R gibi uç seslerin daha berrak çıkmasını sağlar', 'Boğaz düğümlenmesi hissini hafifletir'],
    mistakes: ['Dili zorlayarak acı hissetmek', 'Hareketleri çeneyi kapatarak sıkışık bir alanda yapmak', 'Esnetme sürelerini kısa tutmak'],
    phrase: null,
    steps: [
      'Ağzınızı rahatça, "A" harfi söyler gibi aralayın.',
      'Dilinizi dışarıya, çenenize (aşağıya) doğru çıkarabildiğiniz kadar uzatın ve 5 saniye bekleyin. Dil kökünde tatlı bir çekilme hissetmelisiniz.',
      'Daha sonra dilinizi burnunuza (yukarıya) doğru kıvırarak uzatın ve 5 saniye bekleyin.',
      'Dilinizi sağ yanağınıza (dışarıdan) doğru uzatın (5 saniye) ve ardından sol yanağınıza doğru uzatın (5 saniye).',
      'Bu dört yönlü seti 5 kez tekrarlayın.'
    ],
    variations: [
      '🔄 Dairesel Dönüş: Dilinizi dudaklarınızın etrafında saat yönünde ve tersi yönde geniş daireler çizerek yavaşça döndürün.',
      '🔄 Yanak İtişi: Ağız içindeyken dili sırasıyla sağ ve sol yanağa çok sert şekilde iterek dışarıdan parmağınızla direnç uygulayın.'
    ],
    tip: '💡 Diksiyon problemlerinin %70\'i "tembel dil" kaynaklıdır. Dilinizi vücudunuzdaki herhangi bir kas gibi düşünün; spordan önce nasıl esnetiyorsanız, konuşmadan önce de esnetmelisiniz.',
    related: [102, 107]
  },
  {
    id: 102, slug: 'dil-ucu-jimnastigi', cat: 'dil', emoji: '🤸', title: 'Dil Ucu Jimnastiği',
    dur: '3 dk', level: 'Başlangıç', freq: 'Haftada 4 kez',
    desc: 'Dil ucuyla üst damağa dokunarak yapılan, Türkçe\'deki dişeti seslerinin (T, D, N) pratik ve keskin çıkmasını sağlayan ritmik egzersizdir.',
    benefits: ['T ve D harflerinde yaşanan "kaymaları" önler', 'Dil ucunun refleksif hareket kabiliyetini artırır', 'Süratli okumalarda dilin dişe takılmasını engeller', 'Heceleri daha keskin (staccato) çıkarmanızı sağlar'],
    mistakes: ['Dili çok geriye damağa kıvırmak (sadece alveoler sırta değmeli)', 'Dili yavaş hareket ettirmek', 'Çeneyi hareket ettirerek dile yardımcı olmak'],
    phrase: '"Tı-tı-tı, Dı-dı-dı, Nı-nı-nı"',
    steps: [
      'Ağzınızı hafifçe aralayın ve alt çenenizi tamamen sabitleyin (gerekirse elinizle tutun).',
      'Dilinizin en sivri ucuyla üst ön dişlerinizin hemen arkasındaki tırtıklı bölgeye (alveoler sırt) hafifçe vurun.',
      'Bu noktaya seri ve ritmik vuruşlar yaparak "La-la-la-la" sesleri çıkarın.',
      'Aynı hızla "Ta-ta-ta-ta" ve ardından "Da-da-da-da" hecelerini söyleyin.',
      'Metronom eşliğinde saniyede 3 vuruş yapana kadar hızı artırın.'
    ],
    variations: [
      '🔄 Çapraz Vuruş: Dil ucunu önce alveoler sırta, ardından hemen alt dişlerin arkasına vurarak "Ta-ka, Ta-ka" benzeri çapraz hareketler yapın.'
    ],
    tip: '💡 Dil ucunuzu adeta bir daktilo tuşu veya piyano çekici gibi düşünün; vuruşlar sert, kesik ve net olmalı.',
    related: [106, 111]
  },
  {
    id: 103, slug: 'dil-koku-guclendirme', cat: 'dil', emoji: '🏋️', title: 'Dil Kökü Güçlendirme',
    dur: '4 dk', level: 'Orta', freq: 'Haftada 3 kez',
    desc: 'Arka dil kaslarını K, G, Ğ ve Y gibi damaksı seslerle çalıştırarak "boğuk" sesi açan ve kelime yutmalarını derinden çözen güçlendirme egzersizidir.',
    benefits: ['K ve G harflerindeki zorlanma ve yutulmaları (özellikle kelime sonlarında) önler', 'Rezonansı (sesin tınlamasını) artırır', 'Boğazı rahatlatıp sesin daha gür ve dışa dönük çıkmasını sağlar'],
    mistakes: ['Sesleri gırtlaktan (boğazdan) çıkarmaya çalışmak', 'Öğürme refleksini tetikleyecek kadar dili zorlamak', 'Boyun kaslarını gereksiz yere kasmak'],
    phrase: '"Ka-Ga-Ka-Ga / Kuku-Gugu"',
    steps: [
      'Ağzınızı "A" diyecek gibi açın ve dilinizin ucunu alt ön dişlerinizin arkasına yaslayarak orada sabitleyin.',
      'Dilinizin sadece arka kısmını (kökünü) yukarı, yumuşak damağınıza doğru kaldırın.',
      'Güçlü ve patlayıcı bir şekilde "KA" deyin, ardından "GA" deyin.',
      'Bu sırada dil kökünüzün damağa çarpıp aşağı indiğini açıkça hissedin.',
      'Daha sonra "Kı-Gı-Ku-Gu" gibi zorlayıcı arka ünlülerle hareketi 20 kez tekrarlayın.'
    ],
    variations: [
      '🔄 Yumuşak G Pratiği: K ve G\'den sonra dilin kökünü tam değdirmeden sadece yaklaştırarak sürekli bir "Ğğğğğ" sesi çıkarın (sürtünmeli).'
    ],
    tip: '💡 Bu egzersiz sırasında eğer boynunuzda dışarıdan görünen kasılmalar oluyorsa çok fazla güç kullanıyorsunuz demektir; sadece dil kasına odaklanın.',
    related: [104, 114]
  },
  {
    id: 104, slug: 'dil-geri-cekme', cat: 'dil', emoji: '🧲', title: 'Dil Geri Çekme Egzersizi',
    dur: '3 dk', level: 'Orta', freq: 'Haftada 3 kez',
    desc: 'Dilin öne gereksiz yere fırlamasını engelleyerek S, Z, T, D seslerindeki "peltek" çıkışı tedavi eden kontrol egzersizidir.',
    benefits: ['Önden pelteklik (interdental lisp) sorununu yüksek oranda çözer', 'Dilin dinlenme pozisyonunu (postür) düzeltir', 'Nefes borusunun daha açık kalmasını sağlayarak sesi berraklaştırır'],
    mistakes: ['Dili geriye çekerken nefesi tutmak', 'Dil ucunu tamamen aşağı bastırmak', 'Dili rulo gibi (O harfi gibi) kıvırmak'],
    phrase: null,
    steps: [
      'Ağzınızı açık tutun ve dişlerinizi hafifçe aralayın.',
      'Dilinizi ağız boşluğunuzun tabanına tamamen yayın.',
      'Dilinizi şeklini (yassılığını) bozmadan, bir bütün olarak arkaya (boğazınıza doğru) çekin.',
      'Ön dişleriniz ile dil ucunuz arasında ciddi bir boşluk oluştuğunu görün.',
      'Bu gergin pozisyonda 5 saniye bekleyin, sonra rahatlayın. 15 tekrar yapın.'
    ],
    variations: [
      '🔄 Yutkunma Pratiği: Dili geriye çektiğiniz pozisyondayken yutkunmaya çalışın (başlangıçta zordur ancak dil postürü için çok faydalıdır).'
    ],
    tip: '💡 Konuşmadığınız anlarda dilinizin ucu üst dişlerinizin arkasındaki damağa hafifçe temas etmeli, asla dişlerin arasına girmemelidir.',
    related: [101, 109]
  },
  {
    id: 105, slug: 'dil-yuvarlama', cat: 'dil', emoji: '🌯', title: 'Dil Yuvarlama (Tongue Roll)',
    dur: '2 dk', level: 'Başlangıç', freq: 'İhtiyaç duyuldukça',
    desc: 'R sesi ve genel dil esnekliği için yan dil kaslarını kullanarak dili U (taco) şeklinde yuvarlama pratiğidir.',
    benefits: ['Dilin yan kaslarını güçlendirir', 'Hava akışını daraltarak odaklamayı öğretir (Ş ve J sesleri için faydalıdır)', 'Dilin bağımsız kontrol kapasitesini artırır'],
    mistakes: ['Dudakları büzerek dile yardımcı olmak (sadece dil kıvrılmalı)'],
    phrase: null,
    steps: [
      'Ağzınızı hafifçe aralayın ve gülümseyin (dudaklarınızı devreden çıkarmak için).',
      'Dilinizi hafifçe dışarı çıkarın.',
      'Dilinizin iki yanını yukarıya, merkeze doğru kıvırarak dilinizle bir "boru" veya "U" şekli oluşturun.',
      'Havanın bu borunun içinden geçmesini sağlayacak şekilde derin bir nefes üfleyin (fiuuu sesi).',
      'Pozisyonu 10 saniye koruyup serbest bırakın.'
    ],
    variations: [
      '🔄 Dalga Hareketi (Yonca Dil): U şeklini yapabilenler, dil ucunu da geriye katlayarak dilde 3 kıvrımlı yonca şekli oluşturmaya çalışabilir.'
    ],
    tip: '💡 Bu hareket kısmen genetiktir, dünya nüfusunun küçük bir kısmı yapamayabilir. Yapamıyorsanız yanlardan bir pipet veya çubukla hafifçe destek alarak kas hafızasını oluşturabilirsiniz.',
    related: [112, 107]
  },
  {
    id: 106, slug: 'hizli-dil-darbesi', cat: 'dil', emoji: '🔨', title: 'Hızlı Dil Darbesi',
    dur: '4 dk', level: 'İleri', freq: 'Haftada 2 kez',
    desc: 'T, D, N seslerini saniyede maksimum tekrarlama üzerine kurulu, diksiyonun "sprint" antrenmanıdır.',
    benefits: ['Artikülasyon süratini profesyonel spiker seviyesine çeker', 'Hece yutma ve "dil dolaşması" sorununu sıfırlar', 'Seri konuşmada kelimelerin tane tane (anlaşılır) kalmasını sağlar'],
    mistakes: ['Hızlandıkça çeneyi yukarı aşağı sallamak', 'Harfleri birbirine bağlayıp netliğini kaybetmek (örn: Ta-da-da yerine Tarara olması)'],
    phrase: '"Teke teke teke, deke deke deke"',
    steps: [
      'Çenenizi elinizle destekleyerek veya ısıracak bir aparat (mantar tıpa vs.) kullanarak sabitleyin.',
      'Metronomu 100 bpm seviyesine ayarlayın.',
      'Her vuruşta net ve çok sert bir "T" darbesi vurun (Tı-Tı-Tı-Tı).',
      'Metronomu 120, sonra 140 bpm\'e çıkararak hızı artırın.',
      'Aynı süreci "D" ve "N" harfleri için tekrarlayın.'
    ],
    variations: [
      '🔄 Çift Vuruş: Her metronom vuruşunda "Ti-ka, Ti-ka" veya "Ti-ri, Ti-ri" şeklinde ikili hece kombinasyonları yapın.'
    ],
    tip: '💡 Unutmayın: Kontrolsüz hız, gürültüden ibarettir. Hızınızı, harflerin netliği bozulduğu anda bir kademe aşağı düşürün ve orada sabitleyin.',
    related: [102, 114]
  },
  {
    id: 107, slug: 'lateral-dil-hareketi', cat: 'dil', emoji: '↔️', title: 'Lateral (Yanlara) Dil Hareketi',
    dur: '3 dk', level: 'Orta', freq: 'Haftada 3 kez',
    desc: 'Dili ağız içinden sağ ve sol yanaklara doğru şiddetle iterek dilin yan eksenli gücünü ve çevikliğini artıran egzersiz.',
    benefits: ['L sesinin "kalın" veya "yutuk" çıkmasını önler (Kelimelerdeki "L" netleşir)', 'Çiğneme ve konuşma esnasındaki dil koordinasyonunu iyileştirir', 'Dil köküne bağlı gıdı bölgesindeki sarkmaları toparlar'],
    mistakes: ['Hareket sırasında başı veya çeneyi sağa sola çevirmek', 'Dili sadece dudak kenarlarına değdirmek (yanağın içine gitmeli)'],
    phrase: null,
    steps: [
      'Ağzınızı kapatın.',
      'Dilinizin ucunu sağ yanağınızın en arka kısmına, dişlerin bittiği yere kadar itip yanağı dışarıya doğru şişirin.',
      'Dışarıdan işaret parmağınızla yanağınıza bastırarak dilinize 3 saniye boyunca direnç uygulayın.',
      'Hızla dili sol yanağa geçirin ve aynı direnci uygulayın.',
      'Bunu bir sarkaç gibi sağ-sol-sağ-sol şeklinde 20 kez seri şekilde tekrarlayın.'
    ],
    variations: [
      '🔄 Yanak Süpürme: Dili sağ yanağa batırdıktan sonra, yanaktan ayırmadan öne (dudaklara) doğru süpürüp sol yanağa geçiş yapın.'
    ],
    tip: '💡 Dil kaslarınız çok çalışmadığı için bu harekette yanak ve dil kökünde hızlıca yorgunluk hissedeceksiniz; bu, egzersizin doğru çalıştığının kanıtıdır.',
    related: [101, 109]
  },
  {
    id: 108, slug: 'dil-damak-tam-temas', cat: 'dil', emoji: '🧲', title: 'Dil-Damak Tam Temas',
    dur: '3 dk', level: 'Orta', freq: 'Haftada 3 kez',
    desc: 'Dili tamamen damağa yapıştırıp bırakarak, ağız içi vakum gücünü ve dilin gövde kaslarını çalıştıran çok önemli bir egzersizdir.',
    benefits: ['Genizden (nazal) konuşmayı azaltarak sesi ağız boşluğuna yönlendirir', '"Mewing" tekniğinin temeli olup doğru yüz postürünü sağlar', 'Ş, Ç, J gibi geniş damak teması isteyen sesleri parlatır'],
    mistakes: ['Sadece dil ucunu damağa değdirmek (dilin arka gövdesi de yapışmalı)', 'Nefesi tamamen kesmek'],
    phrase: '"Şaaaa - Çaaaa"',
    steps: [
      'Ağzınızı hafif aralayın ve genişçe gülümseyin.',
      'Dilinizin tamamını (ucundan köküne kadar) üst damağınıza yapıştırarak ağzınızın içinde bir vakum (emme) oluşturun.',
      'Dilinizin damağınızı kapladığından emin olarak bu pozisyonda 10 saniye nefes alıp verin (burundan).',
      'Aniden vakumu bozarak dilinizi aşağı indirin (bu sırada yüksek bir şaklama/şlak sesi çıkmalıdır).',
      '15 kez tekrarlayın.'
    ],
    variations: [
      '🔄 Kademeli Bırakma: Vakumu tek seferde değil, önce kökü, sonra gövdeyi, en son ucu bırakarak (dalgalanma şeklinde) çözün.'
    ],
    tip: '💡 Mükemmel vakumu sağladığınızda, ağzınızı sonuna kadar açsanız bile diliniz damağa yapışık asılı kalabilmelidir.',
    related: [104, 111]
  },
  {
    id: 109, slug: 'dil-bagimsizligi', cat: 'dil', emoji: '🗽', title: 'Dil Bağımsızlığı (Tongue Independence)',
    dur: '4 dk', level: 'İleri', freq: 'Haftada 2 kez',
    desc: 'Çene, dudak ve yüz kasları tamamen sabitken sadece dilin bağımsız hareket etmesini sağlayan yüksek farkındalık egzersizidir.',
    benefits: ['Konuşurken ağzın çarpılmasını, çenenin kaymasını veya mimiklerin kontrolsüz oynamasını önler', 'İleri derece vantrilok (karından konuşma) becerisinin temelidir', 'Diksiyonun enerji tüketimini azaltır (daha az yorularak konuşursunuz)'],
    mistakes: ['Aynaya bakmadan çalışmak', 'Dil hareketini büyütmek uğruna çeneyi esnetmek'],
    phrase: '"Le-le-le, Te-te-te"',
    steps: [
      'Bir ayna karşısına geçin. Yüzünüzü en donuk ve ifadesiz haline getirin (poker face).',
      'Dudaklarınızı hafif aralık, çenenizi de gevşek ama tamamen sabit tutun.',
      'Yüzünüzdeki hiiiçbir kasın milimetrik bile oynamasına izin vermeden dilinizi sağa, sola, yukarı, aşağı hareket ettirin.',
      'Aynı donuk ifadeyle "La-la-la-la, Ta-ta-ta-ta" deyin. Ses çıkmalı ama çene/dudak asla titreşmemeli.'
    ],
    variations: [
      '🔄 Dişler Arası: Dilinizi dişlerinizin arasından dışarı çıkarın ve dişleri hafifçe sıkarak dilin sadece dışarıdaki kısmını sağa sola oynatın.'
    ],
    tip: '💡 Gözlerinizi aynadaki yüzünüze dikin; kaşlarınızın veya dudak kenarlarınızın istemsiz seğirdiğini fark edeceksiniz. Bunu bilinçli olarak durdurun.',
    related: [106, 113]
  },
  {
    id: 110, slug: 'dil-kas-dayanikliligi', cat: 'dil', emoji: '⏱️', title: 'Dil Kas Dayanıklılığı',
    dur: '5 dk', level: 'İleri', freq: 'Haftada 2 kez',
    desc: 'Uzun süreli (30 saniye ve üzeri) sabit dil pozisyonları tutarak dil kaslarındaki laktik asit toleransını ve dayanıklılığı artıran "plank" egzersizidir.',
    benefits: ['Uzun konuşmalarda (sunumlar, podcastler) dilin yorulup peltekleşmesini önler', 'Kas titremelerini bitirir', 'Odaklanma ve nefes koordinasyonunu dolaylı yoldan güçlendirir'],
    mistakes: ['Süreyi tamamlayamadan pes etmek', 'Dili içeride gevşeterek sadece duruş yapmak (kaslar sıkılı olmalı)'],
    phrase: null,
    steps: [
      'Dilinizi dışarı çıkarabildiğiniz kadar çıkarıp dümdüz, ok gibi sivri tutun.',
      'Bu sert ve sivri pozisyonu hiç bozmadan (titremelere direnerek) tam 30 saniye koruyun.',
      'Süre bitince 10 saniye dinlenin.',
      'Sonra dilinizi üst damağa kuvvetlice bastırıp tüm gücünüzle iterek 30 saniye daha bekleyin.',
      'Seti 3 kez uygulayın.'
    ],
    variations: [
      '🔄 Kaşık Direnci: Dilinizi dışarı çıkardığınızda bir kaşığın tersiyle dile aşağıya doğru baskı uygulayın, dilinizle kaşığı yukarı itin ve pozisyonu koruyun (ağırlık kaldırma).'
    ],
    tip: '💡 15. saniyeden sonra dilinizde titremeler (spazmlar) başlayabilir. Bu, kasın gelişmeye başladığı andır; pes etmeyin.',
    related: [101, 108]
  },
  {
    id: 111, slug: 'alveoler-bolge-calismasi', cat: 'dil', emoji: '🎯', title: 'Alveoler Bölge Çalışması',
    dur: '3 dk', level: 'Orta', freq: 'Haftada 4 kez',
    desc: 'T, D, N, S, Z, L, R gibi seslerin tamamının üretildiği ana merkez olan alveoler bölgenin (üst dişlerin hemen arkasındaki kabartı) hassasiyetini artıran odak egzersizidir.',
    benefits: ['Bütün uç ünsüz harflerin netliğini ve keskinliğini gözle görülür şekilde artırır', 'S ve Z harflerindeki ıslık / peltek sorunlarına son verir', 'Artikülasyon körlüğünü (dilin nereye değdiğini hissetmemeyi) iyileştirir'],
    mistakes: ['Alveoler sırtın çok gerisine (yumuşak damağa) veya direk dişlere dokunmak'],
    phrase: '"Ten, Din, Sen, Zen, Len, Ren"',
    steps: [
      'Üst ön dişlerinizin hemen arkasındaki o tırtıklı, bombeli bölgeyi (alveoler sırt) dil ucunuzla yavaşça keşfedin.',
      'Gözlerinizi kapatın ve dilinizin sadece bu bölgeye temas ettiğinden emin olarak çok yavaşça "TTT", "DDD", "NNN", "LLL" deyin.',
      'Her harfi söylerken dilin o noktaya nasıl vurduğunu veya sürtündüğünü zihninizde görselleştirin.',
      'Seriyi 10 kez net ve kontrollü vuruşlarla tekrarlayın.'
    ],
    variations: [
      '🔄 Sessiz Vuruş: Ses çıkarmadan sadece dil ucunuzu sırasıyla diş arkasına, alveoler sırta ve biraz daha gerisine ritmik olarak vurdurun.'
    ],
    tip: '💡 "L" sesi söylerken diliniz alveoler sırtta daha geniş bir alana temas ederken, "T" sesinde noktasal (sivri) bir temas olmalıdır. Farkı hissedin.',
    related: [102, 106]
  },
  {
    id: 112, slug: 'dil-titresimi-gelistirme', cat: 'dil', emoji: '🏍️', title: 'Dil Titreşimi Geliştirme',
    dur: '4 dk', level: 'Orta', freq: 'Her gün',
    desc: 'Özellikle R sesi problemi (Rotasizm) yaşayanlar için alveoler sırtta sürekli titreşim kazanma (trilled R / alveolar trill) ve hava akışını ayarlama egzersizidir.',
    benefits: ['R harfinin üretimini kolaylaştırır ve güçlendirir', 'Dil ucundaki esnekliği şaşırtıcı seviyeye çıkarır', 'Nefes ve dil ucu dengesini öğretir (fazla nefes titreşimi bozar)'],
    mistakes: ['Dili aşırı sertleştirerek titreşimi imkansızlaştırmak', 'Sesi gırtlaktan "Ğ" şeklinde çıkarmaya çalışmak'],
    phrase: '"Drrrrr - Trrrrr"',
    steps: [
      'Dil ucunuzu alveoler sırta gevşek bir şekilde (bastırmadan) yerleştirin.',
      'Ciğerlerinizden güçlü ama kontrollü bir nefes vererek dil ucunuzun hava basıncıyla damağa çarpıp titremesini sağlayın.',
      'Eğer R titremesi olmuyorsa, "D" ve "R" seslerini birleştirerek hızlıca "Drrrr" demeye çalışın. (D, dilin doğru yeri bulmasına yardımcı olur).',
      'Titreşimi yakaladığınızda kesintisiz 5 saniye boyunca sürdürmeye çalışın.'
    ],
    variations: [
      '🔄 Yatarak Çalışma: Yerçekiminin dilinizi doğal pozisyona düşürmesine izin vermek için sırtüstü uzanarak titreşim yapmayı deneyin (R problemi olanlar için en etkili hilelerden biridir).'
    ],
    tip: '💡 R titreşimi kas gücüyle değil, doğru hava akışıyla (aerodinamik) oluşur. Dil bir bayrak, nefes rüzgardır; rüzgar doğru esmezse bayrak dalgalanmaz.',
    related: [105, 111]
  },
  {
    id: 113, slug: 'dil-dudak-koordinasyonu', cat: 'dil', emoji: '🤹', title: 'Dil-Dudak Koordinasyonu',
    dur: '4 dk', level: 'İleri', freq: 'Haftada 3 kez',
    desc: 'Dil ve dudak kaslarının eş zamanlı ancak birbirinden farklı pozisyonlarda (asenkron) çalışmasını sağlayan ileri düzey beyin-kas egzersizi.',
    benefits: ['Tekerlemelerde sıklıkla karşılaşılan P/B/M (Dudak) ile T/D/N (Dil) arası ani geçişleri kusursuzlaştırır', 'Hecelerin birbiri içine geçip ezilmesini önler', 'Konuşma motor planlamasını (beyindeki kelime sırasını) hızlandırır'],
    mistakes: ['Geçişleri hızlandırmak için harfleri yutmak', 'Dudak ve dil hareketini aynı anda yapmaya çalışırken ikisini de bozmak'],
    phrase: '"Pıtı pıtı, Bata bata, Mata nata"',
    steps: [
      'Önce sadece dudak ünsüzü olan "P" ve sadece dil ucu ünsüzü olan "T" yi kullanarak "Pı-Tı" hecelerini söyleyin.',
      'Bunu dudak ve dilin ardışık hareketini hissederek yavaşça "Pı-Tı, Pı-Tı, Pı-Tı" şeklinde tekrarlayın.',
      'Şimdi "Pa-Ta-Ka" diyerek Dudak(P), Dil Ucu(T), Dil Kökü(K) sekansını çalışın.',
      'Son aşamada rastgele karmaşık seriler oluşturun: "Bı-Dı-Ga-Pı-Ta-Ka".'
    ],
    variations: [
      '🔄 Sessiz Geçiş: P-T-K hareketlerini hiçbir ses çıkarmadan sadece dudak, alveoler sırt ve damakta kas hareketleriyle uygulayın.'
    ],
    tip: '💡 "Pa-Ta-Ka" dizisi dünyadaki konuşma terapistlerinin (Speech Therapists) en çok kullandığı altın standart artikülasyon ve koordinasyon ölçüm testidir.',
    related: [106, 109]
  },
  {
    id: 114, slug: 'cifte-artikulasyon', cat: 'dil', emoji: '👯', title: 'Çifte Artikülasyon (Coarticulation)',
    dur: '3 dk', level: 'İleri', freq: 'Haftada 2 kez',
    desc: 'Bir sesi üretirken hemen arkasından gelecek sesin şeklini ağızda aynı anda hazırlama yeteneği. Anadili gibi akıcı konuşmanın sırrıdır.',
    benefits: ['Akıcılığı (fluency) maksimuma çıkarır', 'Sözcüklerin arasını boşluk bırakmadan pürüzsüzce bağlamanızı sağlar (ulama / liaison)', 'Robotik konuşmayı ve hece hece okuma tonunu yok eder'],
    mistakes: ['İki sesi aynı anda söylemeye çalışarak anlaşılmaz bir sese dönüştürmek'],
    phrase: '"Kaaaa - Kuuuu - Kiiii"',
    steps: [
      'Yavaşça "Kaaaa" deyin. K söylerken dudaklarınız rahat ve "A" harfine doğru açılmaya hazır olmalıdır.',
      'Şimdi "Kuuuu" deyin. Dikkat edin; K çıkmadan BİLE dudaklarınız çoktan "U" şeklini (kuyu gibi) almış olmalıdır.',
      'Bunu bilinçli hale getirin: "K" üretimi dil kökündedir, "U" ise dudakta. K sesi çıkarken dudaklarınızı önceden U yapın.',
      'Aynı pratiği "T" ve "Ü" (Tüüü) veya "S" ve "İ" (Siii) gibi uzak artikülasyon noktalarıyla çalışın.'
    ],
    variations: [
      '🔄 Ünsüz Kümeleri: "ST", "PR", "KR" gibi yanyana gelen çift ünsüzlerde (Örn: Spora, Strese) araya ünlü harf sokmadan (Sıpora demeden) ilk ünsüzü ikinciye bağlama çalışması.'
    ],
    tip: '💡 Usta bir konuşmacı, şu anki heceyi söylerken ağız kaslarıyla çoktan bir sonraki hecenin şeklini almış kişidir. Diksiyon, bir satranç gibidir; daima 1 adım ötesini planlar.',
    related: [103, 113]
  },
  {
    id: 115, slug: 'dil-farkindalik-meditasyonu', cat: 'dil', emoji: '🧘‍♂️', title: 'Dil Farkındalık Meditasyonu',
    dur: '5 dk', level: 'Başlangıç', freq: 'Her gün',
    desc: 'Konuşurken dil pozisyonuna, gerginliğine ve nereye temas ettiğine yönelik bilinçli dikkat (mindfulness) geliştirme pratiği.',
    benefits: ['Hızlı ve heyecanlı konuşmalarda kontrolü kaybetmenizi engeller', 'Bilinçsiz dil alışkanlıklarını (yanlış yere dokunma vb.) kırar', 'Sadece diksiyon için değil, parasempatik sinir sistemini aktif ederek sakinleşmek için de etkilidir'],
    mistakes: ['Meditasyon sırasında uyuya kalmak', 'Dili yönlendirmeye/kontrol etmeye çalışmak (sadece gözlemleyin)'],
    phrase: null,
    steps: [
      'Sessiz bir ortamda gözlerinizi kapatarak rahatça oturun.',
      'Bütün dikkatinizi ağzınızın içine, özellikle dilinize verin.',
      'Dilinizin neresi üst damağa değiyor? Ucu dişlere temas ediyor mu? Kökünde bir gerginlik var mı?',
      'Şimdi sadece fısıltıyla yavaşça 1\'den 10\'a kadar sayın. Sayarken her harfte dilinizin ağız içinde yaptığı olağanüstü dansı sanki dışarıdan izliyormuş gibi izleyin.',
      'Dikkatinizi harflerin anlamına değil, kasların fiziksel temasına odaklayın.'
    ],
    variations: [
      '🔄 Günlük Farkındalık: Gün içinde rastgele bir anda (örneğin telefon çalarken) durup "Şu an dilim ağzımda nerede duruyor?" diye kendinizi kontrol edin.'
    ],
    tip: '💡 Diksiyon kurslarında en zoru insanlara "şunu yanlış yapıyorsun" demek değil, kişinin o yanlışı "hissetmesini" sağlamaktır. Bu meditasyon size o hissi kazandırır.',
    related: [104, 110]
  }
];

let appjs = fs.readFileSync('public/app.js', 'utf8');
let datajs = fs.readFileSync('diksiyon-data.js', 'utf8');

const newObjectsStr = dilExercises.map(ex => JSON.stringify(ex, null, 2)).join(',\n') + '\n';

// For app.js
appjs = appjs.replace(/\s*\];\s*$/, ',\n' + newObjectsStr + '];\n');
fs.writeFileSync('public/app.js', appjs, 'utf8');

// For diksiyon-data.js
datajs = datajs.replace(/\s*\];\s*$/, ',\n' + newObjectsStr + '];\n');
fs.writeFileSync('diksiyon-data.js', datajs, 'utf8');

console.log('15 highly detailed exercises for Dil Kasları injected successfully.');
