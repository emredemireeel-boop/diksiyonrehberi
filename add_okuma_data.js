const fs = require('fs');

const okumaExercises = [
  {
    id: 116, slug: 'haber-bulteni-okuma', cat: 'okuma', emoji: '📺', title: 'Haber Bülteni Okuma',
    dur: '10 dk', level: 'Orta', freq: 'Her gün',
    desc: 'TRT veya CNN tarzı haber sunuculuğu için objektif, net ve vurguların doğru yapıldığı resmi okuma tekniğidir.',
    benefits: ['Tarafsız ve güven veren (otoriter) bir ses tonu inşa eder', 'Cümle sonlarındaki düşüşleri kontrol altına alır', 'Nefesi uzun metinlerde ekonomik kullanmayı öğretir'],
    mistakes: ['Habere aşırı duygu katarak drama yapmak', 'Hızlı okuyacağım diye hece yutmak', 'Her cümlenin sonunda sesi aynı melodiyle bitirmek'],
    phrase: '"Sayın seyirciler, piyasalardaki son dalgalanmaların ardından Merkez Bankası beklenen açıklamayı yaptı."',
    steps: [
      'Okurken çenenizi dik ve başınızı karşıya sabit tutun.',
      'Özneden sonra çok kısa bir es (duraklama) verin.',
      'Cümle içindeki en önemli bilgi kelimesinin sesini (vurgusunu) hafifçe yükseltin.',
      'Noktalara geldiğinizde sesi tam olarak bitirip yeni cümleye taze bir nefesle girin.'
    ],
    variations: [
      '🔄 Son Dakika Pratiği: Haberi daha yüksek bir tempo ve aciliyet hissi uyandıracak şekilde, ancak panik yapmadan (kelimeleri yutmadan) okuyun.'
    ],
    tip: '💡 Haber sunumunda yüz ifadesi (mimik) sese yansır. Nötr bir yüzle okursanız, sesiniz de objektif ve resmi çıkacaktır.',
    related: [126]
  },
  {
    id: 117, slug: 'belgesel-anlaticiligi', cat: 'okuma', emoji: '🌍', title: 'Belgesel Anlatıcılığı (Voice-Over)',
    dur: '15 dk', level: 'İleri', freq: 'Haftada 3 kez',
    desc: 'Sesin tınısını (rezonansını) kullanarak izleyicide merak ve büyülenme hissi uyandıran, yavaş ve derin okuma stili.',
    benefits: ['Ses tellerini yormadan göğüs rezonansını (kalın/tok ses) kullanmayı öğretir', 'Entonasyon (sesin melodisi) yelpazesini genişletir', 'Anlatıma gizem ve derinlik katar'],
    mistakes: ['Sesi yapay bir şekilde kalınlaştırmak için boğazı sıkmak', 'Çok hızlı konuşup atmosferi bozmak'],
    phrase: '"Derin okyanusların karanlık sularında, yüzyıllardır keşfedilmeyi bekleyen bir sır yatıyordu."',
    steps: [
      'Sırtüstü uzanarak veya dik oturarak diyafram nefesi alın.',
      'Okumaya başlamadan önce sesi göğüs kafesinde hissetmeye çalışın.',
      'Kelimelerin arasını normalden biraz daha açık tutun (bol es verin).',
      'Vurguları kelimenin başından ziyade, kelimenin ortasındaki ünlüyü uzatarak yapın (ör: de-rinnn).'
    ],
    variations: [
      '🔄 Doğa vs. Tarih: Bir aslanın avlanmasını (hızlı ve gergin) ile antik Mısır piramitlerini (yavaş ve gizemli) anlatan metinler arasında geçiş yapın.'
    ],
    tip: '💡 Belgesel okumasında "fısıltı" ile "tok sesin" birleşimi kullanılır. Sesi dışarı fırlatmak yerine mikrofonu yalayacak şekilde yakın ve pes konuşun.',
    related: [119]
  },
  {
    id: 118, slug: 'reklam-seslendirme', cat: 'okuma', emoji: '🎬', title: 'Reklam Seslendirme Temelleri',
    dur: '5 dk', level: 'Orta', freq: 'Haftada 4 kez',
    desc: 'Kısa sürede maksimum enerjiyle hedef kitleyi harekete geçirmeyi amaçlayan, yüksek tempolu ve dinamik radyo/TV reklam okuma tekniği.',
    benefits: ['Sesin enerjisini ve "Gülümseyen Ses" (Smiling Voice) tekniğini geliştirir', 'Kısa sürede net artikülasyon yeteneğini artırır', 'İkna edici ve samimi tonlamayı öğretir'],
    mistakes: ['Abartılı ve sahte (suni) bir heyecan yaratmak', 'Marka adını diğer kelimeler arasında kaybetmek'],
    phrase: '"Bu fırsatı kaçırmayın! Sadece bu hafta sonuna özel %50 indirim sizleri bekliyor!"',
    steps: [
      'Fiziksel olarak gülümseyerek okumaya başlayın (Gülümseme sese parlaklık katar).',
      'Metindeki marka veya ürün adının altını çizin ve bu kelimelerde sesi bir kademe yükseltip hafifçe es verin.',
      'Cümle sonlarını aşağı değil, yukarı doğru bükerek (istek uyandırıcı) bitirin.',
      '30 saniyelik bir metni tam 30 saniyede bitirecek şekilde zaman kontrolü yapın.'
    ],
    variations: [
      '🔄 Kurumsal vs. Genç: Aynı metni bir banka reklamı gibi ağır ve güvenilir, sonra bir enerji içeceği reklamı gibi coşkulu ve hızlı okuyun.'
    ],
    tip: '💡 Reklam okumasında enerji vücuttan gelir. Oturmak yerine ayakta durarak ve ellerinizi kullanarak okumak sesinizin enerjisini %30 artırır.',
    related: [121, 133]
  },
  {
    id: 119, slug: 'sesli-kitap-okuma', cat: 'okuma', emoji: '🎧', title: 'Sesli Kitap (Audiobook) Okuma',
    dur: '20 dk', level: 'İleri', freq: 'Haftada 2 kez',
    desc: 'Saatler sürecek okumalar için ses teli dayanıklılığı sağlayan ve karakterler arası ses/duygu geçişleri (karakterizasyon) gerektiren uzun maraton okuması.',
    benefits: ['Ses kısıklığını ve boğaz yorgunluğunu önleyen doğru nefes kullanımını oturtur', 'Okurken metnin ilerisini görme (eye-lead) yeteneğini geliştirir', 'Farklı karakterler için ses perdelerini kullanmayı öğretir'],
    mistakes: ['Ses yorulduğunda boğazdan (gırtlaktan) destek almak', 'Anlatıcı sesiyle diyalog seslerini aynı tonda okumak', 'Sayfa çevirme veya nefes sesini mikrofona yansıtmak'],
    phrase: '"Adam derin bir nefes aldı ve sessizce fısıldadı: \'Bunu neden yaptın?\'"',
    steps: [
      'Metni okumadan önce gözünüzle en az bir cümle ilerisini tarayarak okuyun.',
      'Anlatıcı (narrator) için orta perdenizi kullanın.',
      'Diyaloglara geldiğinizde karaktere göre perdenizi (yaşlı, genç, sinirli, sakin) hafifçe değiştirin.',
      'Nefeslerinizi cümle başlarında değil, anlam duraklarında (virgül vb.) alın ve burnunuzu kullanarak nefes gürültüsünü azaltın.'
    ],
    variations: [
      '🔄 3 Karakter Pratiği: Bir anlatıcı, bir kalın sesli adam ve bir ince sesli kadın karakterin olduğu bir diyaloğu takılmadan okuma.'
    ],
    tip: '💡 Sesli kitapta abartılı tiyatro yapılmaz; dinleyiciyi yormamak adına karakter sesleri çok ufak ton farklılıklarıyla (mikro-tonlama) hissettirilir.',
    related: [117, 132]
  },
  {
    id: 120, slug: 'podcast-sunuculugu', cat: 'okuma', emoji: '🎙️', title: 'Podcast Sunuculuğu Diksiyonu',
    dur: '10 dk', level: 'Orta', freq: 'Haftada 3 kez',
    desc: 'Karşınızda biri varmış gibi samimi, doğal ancak diksiyon hatalarından arındırılmış konuşma (conversational) stilidir.',
    benefits: ['"Eeee", "Iııı", "Yani", "Aynen" gibi asalak (filler) kelimeleri temizler', 'Senaryoyu okumuyormuş da o an düşünüyormuş gibi doğal konuşma becerisi kazandırır', 'Dinleyici ile birebir bağ (intimacy) kurmayı öğretir'],
    mistakes: ['Haber bülteni gibi resmi okumak', 'Doğallık adına kelimeleri yuvarlayıp "nasılsın" yerine "nassın" demek', 'Mikrofon mesafesini sürekli değiştirmek'],
    phrase: '"Herkese merhaba, bu bölümde aslında hepimizin bildiği ama konuşmaktan çekindiği bir konuyu ele alacağız."',
    steps: [
      'Göz hizanıza bir arkadaşınızın fotoğrafını koyun veya o an onu hayal edin.',
      'Metni kelimesi kelimesine okumak yerine, madde imlerini (bullet points) alıp kendi cümlelerinizle spontane konuşun.',
      'Düşünme anlarında "Eee" demek yerine sessiz kalmayı (es vermeyi) tercih edin.',
      'Sıcaklık katmak için zaman zaman dudak payını kullanarak gülümseyin.'
    ],
    variations: [
      '🔄 Doğaçlama Geçiş: Yazılı bir metinden okurken aniden cümlenin ortasında durup "Aslında bunu geçen gün ben de yaşadım" diyerek doğaçlamaya geçmek ve metne geri dönmek.'
    ],
    tip: '💡 Podcast, kulaklığın içinde yani dinleyicinin beyninde çalan bir yayın türüdür. Bağırmayın, odada yanındakiyle konuşur gibi yakın ve sıcak bir ton kullanın.',
    related: [121, 134]
  },
  {
    id: 121, slug: 'youtube-icerik-uretici', cat: 'okuma', emoji: '▶️', title: 'YouTube İçerik Üretici Diksiyonu',
    dur: '10 dk', level: 'Başlangıç', freq: 'Her gün',
    desc: 'Kamera karşısında enerjiyi düşürmeden, "jump-cut" kurguya uygun, tempolu, doğal ve izleyiciyi ekranda tutacak dikkat çekici diksiyon pratiğidir.',
    benefits: ['Kamera heyecanını yener', 'Monotonluğu kırarak seste iniş çıkışlar (dinamizm) yaratır', 'Uzun cümleler yerine kısa ve vurucu cümleler kurma alışkanlığı kazandırır'],
    mistakes: ['Videoya çok düşük enerjiyle başlamak', 'Cümleleri bağlamak için sürekli nefes alıp yorulmak', 'Göz temasını kameranın lensi yerine ekrana sabitlemek'],
    phrase: '"Evet arkadaşlar, bugün size daha önce hiç görmediğiniz bir şey göstereceğim, videoyu sonuna kadar izlemeyi unutmayın!"',
    steps: [
      'Enerjinizi normal günlük hayatınızın %30 üzerine çıkarın (Kamera enerjiyi emer).',
      'Cümlelerinizi kısa tutun. Bir nefeste rahatça bitecek cümleler kurun.',
      'Kameranın lensini direkt izleyicinin gözü olarak düşünün ve mimiklerinizi senkronize edin.',
      'Önemli anahtar kelimelere gelmeden hemen önce yarım saniye duraklayıp kelimeyi "patlatarak" verin.'
    ],
    variations: [
      '🔄 Hook (Kanca) Pratiği: Videonun ilk 5 saniyesinde seyirciyi yakalayacak vurucu cümleyi 5 farklı enerji seviyesinde denemek.'
    ],
    tip: '💡 Vlog çekerken diksiyonunuzun "mükemmel" olmasından ziyade "anlaşılır ve enerjik" olması önemlidir. Samimiyet, bazen ufak dil sürçmelerinde gizlidir.',
    related: [120, 126]
  },
  {
    id: 122, slug: 'radyo-dj-konusma', cat: 'okuma', emoji: '📻', title: 'Radyo DJ Konuşma Stili',
    dur: '10 dk', level: 'Orta', freq: 'Haftada 2 kez',
    desc: 'Müzik introsu bitmeden konuşmayı tamamlama (introya oturma) ve dinleyiciyi enerjik tutan akıcı, ritmik bir tempo sağlama sanatıdır.',
    benefits: ['Zamanlama (timing) yeteneğini olağanüstü geliştirir', 'Müziğin ritmine göre konuşma temposunu ayarlamayı öğretir', 'Sesi bir enstrüman gibi kullanma becerisi katar'],
    mistakes: ['Şarkının sözlü kısmına taşmak', 'Çok hızlı konuşup anlamsız bir kelime çorbası yaratmak'],
    phrase: '"Saatlerimiz tam 18:00\'i gösteriyor, trafiğin en yoğun anında radyoda biz varız, işte yeni hit parçamız sizinle!"',
    steps: [
      'Arka planda (bed music) sözsüz bir müzik açın.',
      'Müziğin BPM\'ine (ritmine) uygun bir tempoda konuşmaya başlayın.',
      'Şarkının sözlü kısmının (vokal) girmesine 10 saniye kala kronometreyi başlatın.',
      'Tam 10 saniye sürecek ve vokal girdiği anda milisaniyesi milisaniyesine bitecek şekilde cümlenizi kurup bitirin (Back-timing).'
    ],
    variations: [
      '🔄 Outro (Çıkış) Pratiği: Şarkı biterken son notanın silikleştiği (fade-out) anlarda, sesin volümünü müziğe göre yavaşça ayarlayarak konuşmaya girmek.'
    ],
    tip: '💡 İyi bir Radyo DJ\'i sadece konuşmaz, müziği yönetir. Cümlelerinizin melodisi arkada çalan şarkının akoruyla uyumlu olmalıdır.',
    related: [118, 124]
  },
  {
    id: 123, slug: 'sunuculuk-ve-mc', cat: 'okuma', emoji: '🎤', title: 'Sunuculuk ve MC Tekniği',
    dur: '15 dk', level: 'İleri', freq: 'Haftada 2 kez',
    desc: 'Etkinliklerde (ödül töreni, konser, kongre) kalabalığı yönlendiren, coşkuyu yükselten ve sahne hakimiyeti gerektiren "Master of Ceremonies" diksiyonudur.',
    benefits: ['Kalabalık karşısında sesin yankısını (delay) yönetmeyi öğretir', 'Protokol anonslarında otoriter, şov kısımlarında coşkulu olmayı dengeler', 'Seyircinin tepkisine (alkış vb.) göre duraklamayı (es) mükemmelleştirir'],
    mistakes: ['Alkış varken konuşup sesini boğmak', 'Yankılı mikrofonda çok hızlı konuşup kelimeleri çorbaya çevirmek', 'Enerjiyi baştan sona hep aynı (bağırarak) tutmak'],
    phrase: '"Ve şimdi... Yılın en iyi projesi ödülünü almak üzere... Sayın Ahmet Yılmaz\'ı güçlü alkışlarınızla sahneye davet ediyorum!"',
    steps: [
      'Büyük bir salonda olduğunuzu hayal edin ve okuma temposunu yankıyı hesaba katarak biraz yavaşlatın.',
      'İsimleri anons etmeden önce daima uzun bir "Es" (Süspans) verin.',
      'İsmi söylerken volümü zirveye çıkarın.',
      'Sanal bir alkış bekleyin ve alkışın şiddeti azalmaya başladığında yeni cümleye girin.'
    ],
    variations: [
      '🔄 Kriz Yönetimi: Konuşmacı takıldı veya mikrofon bozuldu; bu anlarda araya girip sakin ve güven verici bir tonda durumu toparlama doğaçlaması.'
    ],
    tip: '💡 Sahne sunuculuğunda kelimeleriniz ne kadar önemliyse, sessiz kaldığınız anlar da o kadar önemlidir. Sessizliği yöneten sahneyi yönetir.',
    related: [130, 126]
  },
  {
    id: 124, slug: 'spor-spikeri-diksiyon', cat: 'okuma', emoji: '⚽', title: 'Spor Spikeri Diksiyonu',
    dur: '10 dk', level: 'İleri', freq: 'İhtiyaç duyuldukça',
    desc: 'Çok hızlı tempoda, yüksek heyecanla, hata payı olmadan ve izleyicinin nabzını yükseltecek şekilde yapılan anlık olay anlatımıdır.',
    benefits: ['Artikülasyon sınırlarını (hız olarak) zorlar', 'Diyafram kasının dayanıklılığını muazzam ölçüde artırır', 'Aynı anda hem düşünüp hem konuşma (multi-tasking) kapasitesini geliştirir'],
    mistakes: ['Heyecanlandıkça ses tellerini yırtacak gibi bağırmak', 'Kelimeleri yuvarlamak (gol oldu yerine gololdu demek)'],
    phrase: '"Ceza sahası içine uzun bir orta, kafayı vurdu ve toppp ağlarda! İnanılmaz bir gol sayın seyirciler!"',
    steps: [
      'Sessiz izlediğiniz bir spor müsabakasının 1 dakikalık kesitini açın.',
      'Olayları gördünüz anda kelimelere dökün (top kimde, kime geçti).',
      'Normal anlarda (orta saha paslaşması) sesi rölantide tutarak nefes depolayın.',
      'Aksiyon anında (şut/gol) diyaframdan gelen güçlü bir itişle sesi patlatın ve nefesinizin sonuna kadar cümleyi uzatın.'
    ],
    variations: [
      '🔄 Crescendo (Yükseliş): Cümleye çok kısık sesle fısıldayarak girip, cümlenin sonunda stadyum spikeri volümüne ulaşmak.'
    ],
    tip: '💡 Spor spikerlerinin sırrı "hızlı konuşmak" değil, "aradaki boşlukları sıfırlamaktır". Kelimeler net kalmalı, sadece aralarındaki bekleme süreleri silinmelidir.',
    related: [106, 122]
  },
  {
    id: 125, slug: 'hava-durumu-sunumu', cat: 'okuma', emoji: '🌤️', title: 'Hava Durumu Sunumu',
    dur: '5 dk', level: 'Orta', freq: 'Haftada 1',
    desc: 'Teknik ve coğrafi terimleri, görsel bir materyali (harita) işaret ederken akıcı, anlaşılır ve güven verici bir tonla anlatma pratiğidir.',
    benefits: ['Aynı anda hem görsel materyal kullanıp hem konuşma koordinasyonunu geliştirir', 'Yön ve yer isimlerinin vurgularını düzeltir', 'Bilgilendirici ama sıkıcı olmayan (infotainment) bir ton kazandırır'],
    mistakes: ['Ekrana arkasını dönüp seyirciyle teması kesmek', 'Kelimeleri çok yavaş ve monoton okumak'],
    phrase: '"Yarından itibaren Balkanlar üzerinden gelen soğuk hava dalgası, yurdun batı kesimlerinde etkisini gösterecek."',
    steps: [
      'Bir Türkiye haritasını ekranınıza açın.',
      'Harita üzerinde bir bölgeyi işaret ederken (el-göz koordinasyonu), yüzünüzün her zaman kameraya (veya aynaya) dönük olduğundan emin olun.',
      '"Sağanak yağışlı", "Parçalı bulutlu" gibi teknik terimlerde vurguyu kelimenin sıfatına (Parçalı) verin.',
      'Bölgeler arası geçişte sesinizin perdesini hafifçe değiştirin (Kuzeyden güneye inerken vb.).'
    ],
    variations: [
      '🔄 Dinamik Hava: Fırtına ve sel uyarısı içeren metinleri ciddi/otoriter; bahar ve güneşli gün metinlerini ise neşeli/gülümseyerek okuma.'
    ],
    tip: '💡 Hava durumu sunuculuğu koreografi işidir. Elinizdeki hareket ile dilinizdeki kelime tam olarak aynı milisaniyede senkronize olmalıdır.',
    related: [116, 118]
  },
  {
    id: 126, slug: 'teleprompter-okuma', cat: 'okuma', emoji: '📜', title: 'Teleprompter Okuma Sanatı',
    dur: '10 dk', level: 'İleri', freq: 'Haftada 3 kez',
    desc: 'Akan bir metni okurken, sanki metni o an kendi zihninizden üretiyormuşsunuz gibi doğal, göz temasını kaybetmeden okuma illüzyonudur.',
    benefits: ['Göz-beyin-dil koordinasyonunu zirveye taşır', 'Metin dışına çıkmadan doğal vurgu yapmayı öğretir', 'Sabit bakıştan (robotik gözler) kurtarır'],
    mistakes: ['Göz bebeklerini sağa sola tenis maçı izler gibi kaydırmak', 'Cümle sonunu görmeden vurgu yapıp çuvallamak', 'Prompter hızına yenik düşüp çok hızlı okumak'],
    phrase: '"Geleceğin teknolojilerini konuştuğumuz bu zirvede, önümüzdeki on yılın vizyonunu hep birlikte şekillendireceğiz."',
    steps: [
      'Ekranda kayan bir metin açın (veya Prompter Laboratuvarımızı kullanın).',
      'Metni satır satır değil, kelime öbekleri (3-4 kelime) halinde bütün olarak görün.',
      'Kelimeler henüz okunma çizgisine gelmeden gözünüzle yakalayıp zihninize alın, okurken gözleriniz kameranın merkezine baksın.',
      'Arada bir çok hafifçe başınızı sallayarak veya göz kırparak "düşünüyor" izlenimi verin.'
    ],
    variations: [
      '🔄 Hız Tuzağı: Prompter hızını rastgele anlarda hızlandırıp yavaşlatın; ancak sesli okumanız bu hıza uymak yerine kendi ideal temposunu korumaya çalışsın (prompter\'ı yöneten siz olun).'
    ],
    tip: '💡 Gözleriniz sağa sola kayıyorsa metin size çok geniş geliyordur. Prompter metinleri dar bir sütun halinde (ortalanmış) ayarlanmalıdır.',
    related: [116, 123]
  },
  {
    id: 127, slug: 'cocuk-programi-seslendirme', cat: 'okuma', emoji: '🧸', title: 'Çocuk Programı Seslendirme',
    dur: '10 dk', level: 'Orta', freq: 'Haftada 2 kez',
    desc: 'Çocukların dikkat süresinin kısalığına uygun, enerjisi yüksek, heceleri çok net ve melodisi zengin abartılı okuma tarzı.',
    benefits: ['Monotonluğu (düz konuşmayı) kesin olarak ortadan kaldırır', 'Yüz kaslarının (mimiklerin) esnekliğini artırır', 'Sesin farklı perdelerinde rahat hareket etmeyi sağlar'],
    mistakes: ['Sesin sadece ince perdesini kullanıp cırlamak', 'Yetişkinlere hitap eder gibi karmaşık ve düz okumak', 'Korkutucu veya aşırı otoriter bir ses tonu kullanmak'],
    phrase: '"Harikaaa! Peki sizce o minik kuş ağaca nasıl çıktı dersiniz? Hadi hep birlikte bakalım!"',
    steps: [
      'Gözlerinizi iri iri açın ve geniş bir gülümseme yerleştirin (Bu, sesinizi anında aydınlatacaktır).',
      'Cümlelerdeki duygu belirten sıfatları (kocamaaan, küçücüüük) elastik bir şekilde uzatın.',
      'Soru cümlelerinde perdenizi yukarıya doğru kıvırarak çocuklarda cevap verme isteği uyandırın.',
      'Normal bir cümleyi 3 farklı perde (kalın, orta, ince) kullanarak zıplamalı bir ritimde okuyun.'
    ],
    variations: [
      '🔄 Hız Değişimi: Heyecanlı kısımları çok hızlı ve fısıltılı, şaşkınlık kısımlarını ise çok yavaş ve heceleyerek okuyun.'
    ],
    tip: '💡 Çocuklar kelimeleri değil, "melodiyi" dinler. Söylediğiniz cümlenin sözcüklerini çıkardığınızda geriye kalan mırıldanma bile bir şarkı gibi inip çıkmalıdır.',
    related: [119, 132]
  },
  {
    id: 128, slug: 'yasal-metin-okuma', cat: 'okuma', emoji: '⚖️', title: 'Yasal Metin Okuma (Hukuki)',
    dur: '15 dk', level: 'İleri', freq: 'Haftada 1',
    desc: 'Sözleşme, kanun maddesi veya yasal uyarılar gibi çok uzun, karmaşık cümleli ve eski kelimeler içeren metinleri hata yapmadan, nefes yetirerek okuma tekniği.',
    benefits: ['Uzun ve bitmeyen cümlelerde doğru yerde nefes almayı öğretir', 'Eski Türkçe ve karmaşık terimlerin artikülasyonunu çözer', 'Ciddiyeti ve monotonluğun içindeki mikrovurguları geliştirir'],
    mistakes: ['Yanlış yerde nefes alarak yasal cümlenin anlamını bozmak', 'Hızlı okuyarak terimleri yutmak (örn: "müteselsilen" kelimesi)'],
    phrase: '"İşbu sözleşmenin tarafları, aşağıda belirtilen maddeler muvacehesinde karşılıklı rıza ile mutabık kalmışlardır."',
    steps: [
      'Metni okumadan önce gözünüzle cümle yapısını (özne, yüklem, bağlaçlar) analiz edin.',
      'Her "ve", "veya", "ile" bağlacından önce mikro-esler (yarım saniye) vererek anlamı gruplara ayırın (phrasing).',
      'Tonlamanızı son derece düz ve otoriter tutun (Duygu katmayın).',
      'Yabancı veya zor terimlere gelmeden hemen önce hızı %10 yavaşlatın, terimi tane tane söyleyip tekrar normal hıza dönün.'
    ],
    variations: [
      '🔄 Yasal Uyarı Reklamı: İlaç reklamlarının sonundaki "beklenmeyen bir etki görüldüğünde..." gibi metinleri inanılmaz bir hızda ama her harfi yansıtarak (spit-fire) okuma pratiği.'
    ],
    tip: '💡 Hukuki metinlerde virgül sadece noktalama işareti değil, anlamın kaderidir. Virgül olan yeri nefesle, olmayan yeri vurguyla geçin.',
    related: [116, 129]
  },
  {
    id: 129, slug: 'tibbi-metin-seslendirme', cat: 'okuma', emoji: '⚕️', title: 'Tıbbi Metin Seslendirme',
    dur: '10 dk', level: 'İleri', freq: 'Haftada 1',
    desc: 'Latince kökenli kelimelerin yoğun olduğu, doktorlara, eczacılara veya hastalara yönelik tıbbi içeriklerin doğru telaffuz ve güven veren tonla okunmasıdır.',
    benefits: ['Yabancı ve uzun kelimelerin telaffuzunda dili esnetir', 'Tökezleme (stumbling) problemini çözer', 'Bilimsel bir otorite sesi (expert voice) oluşturur'],
    mistakes: ['Latince kelimeleri Türkçe gibi düz okumak', 'Kelimenin neresine vurgu yapacağını bilememek (Örn: elektroKARDiyogram)'],
    phrase: '"Miyokard enfarktüsü sonrası uygulanan antitrombotik tedavi protokolleri, hastanın mortalite riskini minimize eder."',
    steps: [
      'Zor kelimeleri okumadan önce hecelere ayırın (an-ti-trom-bo-tik).',
      'Metni önce sadece "Kelimelerin ünlülüleri" (sesli harfler) ile okuyun, sonra normal okuyun.',
      'Tonunuzu bir tıp akademisyeni gibi sakin, net, yavaş ve açıklayıcı tutun.',
      'Terimlerin üzerini vurgularken sesinizi sertleştirmeyin, sadece kelimeyi biraz uzatın.'
    ],
    variations: [
      '🔄 Çeviri Pratiği: Tıbbi metni okurken bir yandan beyninizde bunun halk dilindeki karşılığını (örneğin miyokard enfarktüsü = kalp krizi) düşünün, bu sizin yavaş ve emin okumanızı sağlar.'
    ],
    tip: '💡 Uzun tıbbi kelimelerde kural genellikle sondan bir önceki veya iki önceki heceye vurgu yapmaktır. Tereddüt ettiğiniz anlarda özgüvenli bir hata, tereddütlü bir doğrudan daha inandırıcı durur.',
    related: [128, 117]
  },
  {
    id: 130, slug: 'resmi-konusma', cat: 'okuma', emoji: '🏛️', title: 'Resmi Konuşma (Formal Speech)',
    dur: '10 dk', level: 'Orta', freq: 'Haftada 2 kez',
    desc: 'Devlet protokolü, akademik törenler veya şirket CEO\'su konuşmaları için gereken ağırbaşlı, ölçülü ve ikna edici hitabet tarzıdır.',
    benefits: ['Bedensel duruşun sese etkisini optimize eder', 'Gereksiz el/kol hareketlerini ve seste oluşan titremeleri engeller', 'Topluluğa liderlik etme (lider sesi) vasfı kazandırır'],
    mistakes: ['Aşırı bağırarak "miting" havası yaratmak', 'Çok hızlı konuşup kelimelerin ağırlığını yok etmek', 'Hatalı yerde nefes alıp özgüvensiz görünmek'],
    phrase: '"Saygıdeğer misafirler, kıymetli çalışma arkadaşlarım; bugün burada kurumumuzun geleceğine yön verecek tarihi bir adım için toplandık."',
    steps: [
      'Ayağa kalkın, göğsünüzü dışarı çıkarın ve ellerinizi kürsü tutar gibi önünüzde birleştirin.',
      'Sözlere çok pes (kalın) ve yavaş bir tonda başlayın.',
      '"Saygıdeğer, kıymetli" gibi hitap kelimelerini özenle ve tane tane söyleyin.',
      'Her cümlenin sonunda sesi aşağı (noktaya) doğru düşürerek kesinlik ve netlik (otorite) ifade edin.'
    ],
    variations: [
      '🔄 Duraklama (Es) Yönetimi: Cümlenin en can alıcı yerine gelmeden önce tam 3 saniye mutlak sessizlik verip kalabalığın size odaklanmasını sağlama pratiği.'
    ],
    tip: '💡 Resmi bir konuşmada "Eeee" demek otoriteyi sarsar. Söyleyeceğiniz kelime aklınıza gelmiyorsa veya metni kaçırdıysanız, sadece susun ve seyirciye bakın. Onlar bunu düşünmek için verdiğiniz bir es sanacaktır.',
    related: [123, 116]
  },
  {
    id: 131, slug: 'siir-okuma-sanati', cat: 'okuma', emoji: '📜', title: 'Şiir Okuma Sanatı',
    dur: '15 dk', level: 'Orta', freq: 'Haftada 3 kez',
    desc: 'Şiirin ölçüsünü, ahengini, ritmini ve barındırdığı duyguyu sesi bir enstrüman gibi kullanarak karşıya aktarma sanatıdır.',
    benefits: ['Sesteki duygu geçişlerini (hüzün, coşku, öfke) pürüzsüzleştirir', 'Nefes kapasitesini mısra yapılarına göre ayarlamayı öğretir', 'Tonlamanın (intonation) sınırlarını genişletir'],
    mistakes: ['Şiiri düz bir gazete metni gibi mekanik okumak', 'Her mısranın sonunu şarkı söyler gibi (arabesk) uzatmak', 'Gereksiz bağırışlarla dramayı abartmak'],
    phrase: '"Ne hasta bekler sabahı, ne taze ölüyü mezar... Ne de şeytan, bir günahı, Seni beklediğim kadar."',
    steps: [
      'Şiiri okumadan önce içinden iki kez okuyarak şairin ana duygusunu (tema) belirleyin.',
      'Kelimelerin değil, hecelerin ritmine (aruz veya hece ölçüsü) odaklanın.',
      'Mısra sonlarında yazılı olmasa bile virgül varmış gibi çok hafif bir durak (es) verin.',
      'Duygunun tepe noktasına ulaştığı kelimede volümü artırmak yerine, sesi fısıltıya yaklaştırıp kelimeyi uzatarak etkiyi artırın.'
    ],
    variations: [
      '🔄 Zıt Duygu Pratiği: Çok hüzünlü bir ayrılık şiirini, neşeli bir zafer marşı gibi okumaya çalışmak (Sesin duyguyu nasıl tamamen değiştirdiğini görmek için).'
    ],
    tip: '💡 Şiir okurken yapılan en büyük hata her mısrayı aynı melodiyle okumaktır. Dalga gibi olun; bazı mısralar kıyıya sert vururken bazıları sadece süzülmelidir.',
    related: [119, 132]
  },
  {
    id: 132, slug: 'masal-anlaticiligi', cat: 'okuma', emoji: '🧚', title: 'Masal Anlatıcılığı',
    dur: '15 dk', level: 'Başlangıç', freq: 'Haftada 2 kez',
    desc: 'Çocukların veya yetişkinlerin hayal gücünü tetikleyecek, sıcak, tekerlemeli ve ses oyunlarıyla dolu hikaye anlatımıdır.',
    benefits: ['Onomatope (yansıma sesler: güm, pat, fışş) kullanımlarını güçlendirir', 'Ses tellerine zarar vermeden ses sınırlarını (falsetto vs.) kullanmayı öğretir', 'Artikülasyonu hikayenin temposuna göre esnetmeyi sağlar'],
    mistakes: ['Bütün karakterleri aynı sesle konuşturmak', 'Hikayenin korkunç kısımlarını çocukları gerçekten korkutacak kadar gerçekçi okumak'],
    phrase: '"Evvel zaman içinde, kalbur saman içinde... Cinler cirit oynarken eski hamam içinde..."',
    steps: [
      'Yüz kaslarınızı tamamen rahatlatın ve "Büyükanne/Büyükbaba" sıcaklığında bir ton bulun.',
      'Tekerleme kısmını (Giriş) hızlı, ritmik ve müzikal bir tonda okuyun.',
      'Masalın ana olayına girerken tempoyu yavaşlatın ve sesinizi bir sır veriyormuş gibi alçaltın.',
      'Rüzgar sesi (vuuu), kapı gıcırtısı (gırrrç) gibi ses efektlerini diliniz ve dudaklarınızla abartarak yapın.'
    ],
    variations: [
      '🔄 Yüz İfadesi Kopyalama: Kurt konuşurken dişlerinizi gösterip kaşlarınızı çatın, kuzu konuşurken omuzlarınızı düşürüp dudaklarınızı büzün; sesin otomatik değiştiğini göreceksiniz.'
    ],
    tip: '💡 Masal anlatıcısı bir ressamdır; fırçası ses, tuvali karşıdakinin zihnidir. Görsel detayları (büyük, kırmızı, karanlık) betimlerken sesi o kelimenin şekline sokun.',
    related: [127, 119]
  },
  {
    id: 133, slug: 'sunum-slayt-okuma', cat: 'okuma', emoji: '📊', title: 'Sunum Slayt Okuma',
    dur: '10 dk', level: 'Başlangıç', freq: 'İhtiyaç duyuldukça',
    desc: 'PowerPoint, Keynote gibi sunum araçlarını kullanırken ekrandaki metni birebir okumaktan (papağanlık) kaçınıp, metni doğal bir sohbete dönüştürme pratiğidir.',
    benefits: ['İş dünyasındaki sunumlarınızın profesyonelliğini artırır', 'Göz temasını ekran-dinleyici arasında bölmeyi öğretir', 'Maddeleri (bullet points) akıcı cümlelere dönüştürmeyi sağlar'],
    mistakes: ['Sürekli arkaya (ekrana) bakarak seyirciye sırt dönmek', 'Ekranda yazan metnin tıpatıp aynısını kelimesi kelimesine okumak', 'Elindeki kumandaya (presenter) bakıp cümle düzenini bozmak'],
    phrase: '"Ekranda da gördüğünüz gibi, Q3 satışlarımızda %15\'lik bir artış yakaladık; peki bu artışın asıl mimarı kimdi?"',
    steps: [
      'Ekranda 5 maddelik bir slayt açın.',
      'İlk maddenin sadece anahtar kelimesine göz ucuyla bakıp hemen yüzünüzü seyirciye dönün.',
      'Maddeyi okumak yerine, kendi kelimelerinizle açıklayın.',
      'Bir sonraki maddeye geçmeden önce ekrandaki görsele elinizle işaret edip konuyu oraya bağlayın.'
    ],
    variations: [
      '🔄 Köprü Cümleler: Bir slayttan diğerine geçerken tıklama anında oluşan sessizliği "Şimdi işin daha ilginç bir boyutuna geçelim..." gibi geçiş cümleleriyle doldurma pratiği.'
    ],
    tip: '💡 Ekranda yazan şey sizin ne söyleyeceğiniz değil, dinleyicinin ne görmesi gerektiğidir. Slaytlar not defteriniz değildir, görsel destekçinizdir.',
    related: [130, 118]
  },
  {
    id: 134, slug: 'telefon-zoom-diksiyon', cat: 'okuma', emoji: '💻', title: 'Telefon/Zoom Diksiyon',
    dur: '10 dk', level: 'Başlangıç', freq: 'Her gün',
    desc: 'Beden dilinin kısıtlı olduğu, sesin mikrofonlardan geçip sıkıştırılarak (compression) iletildiği dijital ortamlarda sesin kaybolmamasını sağlayan net konuşma tekniğidir.',
    benefits: ['"Sesim geliyor mu?" sendromunu ortadan kaldırır', 'Dijital sıkıştırmada kaybolan sessiz harfleri (T, K, P, Ç) vurgulamayı öğretir', 'Sanal toplantılardaki etkileşimi artırır'],
    mistakes: ['Bilgisayar mikrofonuna uzak kalıp çok kısık veya bağırarak konuşmak', 'İnternet gecikmesini (ping) hesaba katmadan üst üste konuşmak'],
    phrase: '"Kemal Bey, sanırım sesiniz kesildi, ben o kısmı tekrar özetleyerek devam edeyim."',
    steps: [
      'Normal konuşma hızınızı %20 oranında yavaşlatın (Dijital iletimde hızlı konuşma anlaşılmaz).',
      'Artikülasyonunuzu, özellikle sert ünsüzleri (P, Ç, T, K) normalden daha belirgin (abartılı) yapın.',
      'Sorularınızın veya cümlelerinizin sonunda normalden daha uzun bir es vererek (2 saniye) karşı tarafın internet gecikmesiyle cevap vermesine olanak tanıyın.',
      'Enerjinizi gözlerinizle ve baş sallamalarınızla (nodding) destekleyerek konuşun.'
    ],
    variations: [
      '🔄 Yankı Kontrolü: Sesinizin kendi kulaklığınıza 1 saniye gecikmeyle (echo) geldiği bir senaryoda, kendi sesinizi dinlemeden metni akıcı okuyabilme pratiği.'
    ],
    tip: '💡 Zoom veya Teams toplantılarında kameraya (lense) bakarak konuşmak, diğer kişilerin gözlerinin içine bakıyorsunuz hissi verir ve otoritenizi artırır.',
    related: [120, 116]
  },
  {
    id: 135, slug: 'e-learning-seslendirme', cat: 'okuma', emoji: '🎓', title: 'E-Learning Seslendirme',
    dur: '15 dk', level: 'Orta', freq: 'Haftada 2 kez',
    desc: 'Online eğitim modülleri için bilgiyi aktaran, öğretici (didaktik), sıkıcı olmayan ve uzun süreli dinlemeye uygun net okuma tarzıdır.',
    benefits: ['Açıklayıcı ve sabırlı bir ses tonu (Teacher\'s voice) oturtur', 'Karmaşık konuları ses vurgularıyla basitleştirmeyi öğretir', 'Diksiyon hızını (WPM - Dakikadaki kelime sayısı) sabit tutma becerisi katar'],
    mistakes: ['Öğrencilerle konuşur gibi değil, makine gibi robotik okumak', 'Her maddeyi aynı tonda okuyup uyku getirmek', 'Yutkunma ve dudak şapırdatma seslerini mikrofona vermek'],
    phrase: '"Modül 2\'ye hoş geldiniz. Bu bölümde, veritabanı yönetim sistemlerinin temel prensiplerini üç ana başlık altında inceleyeceğiz."',
    steps: [
      'Metni okurken kendinizi bir öğretmenin öğrencilerine dersi sevdirerek anlatması moduna sokun.',
      'Sıralı listeleri okurken (birinci olarak, ikinci olarak) her maddede sesinizin perdesini yarım nota yükseltin veya alçaltın.',
      'Önemli tanımları veya formülleri vermeden önce mutlaka yarım saniye duraklayıp, tanımı daha yavaş ve tane tane okuyun.',
      'Gülümsemeyi asla yüzünüzden eksik etmeyin.'
    ],
    variations: [
      '🔄 Yabancı Dil Karışımı: Metnin içinde İngilizce terimler geçen kısımlarda, Türkçe aksanı bozmadan ancak terimleri de doğru telaffuz ederek akıcı geçişler yapma.'
    ],
    tip: '💡 E-learning\'de sesiniz dinleyicinin "zihinsel rehberi"dir. Sesiniz yorulursa, öğrencinin beyni de yorulur. Orta perdeyi (doğal sesinizi) kullanın, zorlamayın.',
    related: [119, 133]
  },
  {
    id: 136, slug: 'navigasyon-ivr-seslendirme', cat: 'okuma', emoji: '🤖', title: 'Navigasyon/IVR Seslendirme',
    dur: '10 dk', level: 'İleri', freq: 'Haftada 1',
    desc: 'Tele sekreter sistemleri (IVR) veya navigasyon uygulamaları için kelimelerin sonradan yazılımla birleştirileceği, tamamen standart, nötr ve kesintisiz okuma disiplinidir.',
    benefits: ['Ses tonunda sıfır sapma (tutarlılık) yeteneği kazandırır', 'Her kelimeyi tamamen aynı ses yüksekliği (dB) ve melodiyle üretmeyi öğretir', 'Kusursuz artikülasyonun (elmas kesim) zirvesidir'],
    mistakes: ['Baştaki kelimeleri yüksek, sondakileri düşük sesle okumak', 'Kelimeleri birbirine ulamak (bağlamak) (Sistem kelimeleri keseceği için bağlanmamalı)'],
    phrase: '"Lütfen. Üç. Yüz. Metre. Sonra. Sağa. Dönün. Rota. Yeniden. Hesaplanıyor."',
    steps: [
      'Cümleyi değil, sadece kelimeyi düşünün.',
      'Her kelimeyi kendi içinde bağımsız bir cümleymiş gibi, çok net, ortalama bir enerjiyle ve sonunda sesi düşürerek (nokta koyarak) okuyun.',
      'Kelimeler arasına en az 1 saniye tam sessizlik koyun.',
      '"Bakiye", "Sıfır", "Lira" kelimelerini ayrı ayrı okurken hepsinin ses renginin, perdesinin ve vurgusunun aynı olmasına çalışın.'
    ],
    variations: [
      '🔄 Rakam Serisi: 0\'dan 9\'a kadar olan rakamları, sanki bir telefon numarasıymış gibi değil, sistem tarafından rastgele seçilecekmiş gibi sıfır duygu ve aynı tonda tek tek okumak.'
    ],
    tip: '💡 IVR (Interactive Voice Response) okuması bir duygu işi değil, bir mühendislik işidir. Sesiniz bir makinenin yapı taşı (lego) olacağı için her parça mükemmel yontulmuş olmalıdır.',
    related: [128, 116]
  },
  {
    id: 137, slug: 'dini-metin-okuma', cat: 'okuma', emoji: '🕌', title: 'Dini Metin Okuma (Tilavet)',
    dur: '15 dk', level: 'İleri', freq: 'İhtiyaç duyuldukça',
    desc: 'Kutsal kitapların mealleri, dini hikayeler veya mistik metinlerin saygı uyandıran, içselleştirilmiş, yavaş ve makamlı okunmasıdır.',
    benefits: ['Diyaframı kullanarak sese "huzur" (mistik tını) katmayı öğretir', 'Uzun ünlü harfleri dalgalandırmadan düz bir çizgide nefesle uzatabilme yeteneği katar', 'Derin (göğüs) rezonansını aktif eder'],
    mistakes: ['Hızlı ve haber bülteni gibi seküler bir tonda okumak', 'Aşırıya kaçarak ağlamaklı ve yapmacık bir drama yaratmak', 'Arapça/Latince orijinal terimleri Türkçe gibi yanlış telaffuz etmek'],
    phrase: '"Ve o gün, gökyüzünün kapıları açılacak; dağlar atılmış renkli yünler gibi dağılacaktır..."',
    steps: [
      'Gözlerinizi kapatın ve çok derin bir karın nefesi alın.',
      'Sesi tamamen göğsünüze (pes tonlara) indirin.',
      'Okuma hızınızı haber bülteni hızının yarısına kadar düşürün.',
      'Noktalarda veya uzun virgüllerde nefesi yavaşça sönümlendirerek (fade out) bitirin, aniden kesmeyin.'
    ],
    variations: [
      '🔄 Makam Geçişi: Dini bir kıssayı (hikayeyi) anlatırken orta tonda olup, kutsal kitaptan bir ayet veya alıntı geldiğinde tonu anında daha derine ve ağırbaşlı bir seviyeye çekmek.'
    ],
    tip: '💡 Dini metinlerde sessizlik, okunan kelimelerden daha kutsaldır. Etkiyi yaratan şey kelimelerin kendisi değil, o kelimelerden sonra bıraktığınız boşluktaki yankıdır.',
    related: [117, 131]
  },
  {
    id: 138, slug: 'gazete-paragrafi-gunluk', cat: 'okuma', emoji: '📰', title: 'Gazete Paragrafı Günlük Okuma',
    dur: '5 dk', level: 'Başlangıç', freq: 'Her gün',
    desc: 'Diksiyonu sıcak tutmak için her gün rastgele bir gazete köşe yazısından alınan farklı bir paragrafı ilk görüşte kusursuz okuma (deşifraj) antrenmanıdır.',
    benefits: ['Okuma (deşifraj) hızını ve hata yapmama (takılmama) oranını artırır', 'Yeni ve bilinmeyen kelimelerle dilin kelime dağarcığı motorunu geliştirir', 'Gündelik hayattaki doğaçlama konuşmayı akıcılaştırır'],
    mistakes: ['Takıldığında geriye dönüp cümleyi baştan okumak', 'Sadece içinden okumak (mutlaka sesli yapılmalı)'],
    phrase: '"Son dönemde yaşanan teknolojik gelişmeler, toplumun tüketim alışkanlıklarını kökünden değiştiren yeni bir dönemin kapılarını aralıyor."',
    steps: [
      'Elinize güncel bir dergi, gazete veya ekranda bir makale alın.',
      'Hiç göz hazırlığı yapmadan, paragrafın ilk kelimesine bakarak direkt yüksek sesle okumaya başlayın.',
      'Gözlerinizi okuduğunuz kelimenin daima 2-3 kelime ilerisinde tutun (Eye-lead).',
      'Bir kelimede takılırsanız, ASLA durup düzeltmeyin, sanki hiçbir şey olmamış gibi yola devam edin.'
    ],
    variations: [
      '🔄 Kurşun Kalem Pratiği: Aynı gazete paragrafını dudaklarınızın/dişlerinizin arasına bir kurşun kalem sıkıştırarak, sadece dilinizi daha fazla hareket ettirmeye zorlayarak okumak.'
    ],
    tip: '💡 Profesyonel spikerler de hata yapar. Onları profesyonel yapan şey hata yapmamaları değil, hata yaptıklarında mimiklerini bozmadan ve duraksamadan yola devam ederek seyircinin hatayı fark etmesini engellemeleridir.',
    related: [116, 126]
  },
  {
    id: 139, slug: 'simultane-ceviri-diksiyon', cat: 'okuma', emoji: '🎧', title: 'Simultane Çeviri Diksiyonu',
    dur: '10 dk', level: 'İleri', freq: 'İhtiyaç duyuldukça',
    desc: 'Kulaktan yabancı bir dilde dinlerken, aynı anda ağızdan kendi dilinizde çevirisini pürüzsüz ve net bir diksiyonla aktarma kriz yönetimidir.',
    benefits: ['Beynin dinleme ve konuşma (Input-Output) merkezlerini aynı anda çalıştırır', 'Kararsızlık anında "eee, ııı" demek yerine nefesle zaman kazanmayı öğretir', 'Sesin monotonlaşmasını önler'],
    mistakes: ['Çeviriyi düşünürken cümleyi anlamsız yerlerden bölmek', 'Konuşmacının ses tonunu ve vurgusunu kaçırıp tamamen ruhsuz okumak'],
    phrase: '"(Dinlenen: We must act now.) Çeviri: Hemen... şimdi... harekete geçmeliyiz."',
    steps: [
      'Kulağınıza İngilizce (veya bildiğiniz yabancı dil) bir haber videosu takın.',
      'Konuşmacı konuşmaya başladıktan 2-3 saniye sonra, onu duyduğunuz anda anında Türkçe (veya ana dilinize) çevirerek yüksek sesle konuşmaya başlayın.',
      'Çeviriyi bulamadığınız anlarda sessiz kalın, asla "ııı" demeyin.',
      'Cümleleri düzgün bir Türkçe sentaksı (özne-nesne-yüklem) ile bitirmeye çalışın, devrik bırakmayın.'
    ],
    variations: [
      '🔄 Gölgeleme (Shadowing): Çeviri yapmadan, Türkçe konuşan birini dinlerken, onun söylediklerinin aynısını 1 saniye geriden gelerek, onun vurgularını ve tonlamalarını kopyalayarak yüksek sesle tekrar etmek.'
    ],
    tip: '💡 Simultane çeviride diksiyonunuzun akıcılığı, bulduğunuz kelimenin doğruluğundan daha çok güven verir. Tereddütsüz kurulan ortalama bir cümle, kekeleyerek kurulan mükemmel bir cümleden iyidir.',
    related: [124, 120]
  },
  {
    id: 140, slug: 'cok-dilli-diksiyon', cat: 'okuma', emoji: '🌐', title: 'Çok Dilli Diksiyon Adaptasyonu',
    dur: '10 dk', level: 'İleri', freq: 'Haftada 2 kez',
    desc: 'Türkçe metinlerin içine karışmış İngilizce, Fransızca veya diğer yabancı kelimeleri, dilin genel akışını ve melodisini bozmadan (sırıtmadan) okuyabilme becerisidir.',
    benefits: ['Ağız kaslarının Türkçe (ön) ve İngilizce (arka) pozisyonları arasında hızlı vites değiştirmesini sağlar', 'Prezentasyonlarda entelektüel ve vizyoner bir ses imajı çizer', 'Yabancı markaları telaffuz ederken yaşanan anksiyeteyi yok eder'],
    mistakes: ['Yabancı kelimeye gelince çok abartılı (snob) bir aksan yapmak', 'Yabancı kelimeyi tamamen Türkçeleştirip (örn: Wi-Fi -> Vifi) komik duruma düşmek'],
    phrase: '"Şirketimizin yeni headquarter binasında yapılan workshop, team-building açısından çok verimli geçti."',
    steps: [
      'Metni okurken Türkçe kelimelerde dilinizi dişlerinize yakın (ön bölge) tutun.',
      'İngilizce kelimeye (örn: workshop) yaklaştığınızda dilinizi hafifçe geriye (İngilizce artikülasyon pozisyonu) çekin.',
      'Kelimeyi orijinal telaffuzuyla ancak cümledeki Türkçe cümlenin genel hızına ve vurgusuna uydurarak (entegre ederek) okuyun.',
      'Kelime biter bitmez anında dili öne (Türkçe formuna) getirerek sonraki kelimeye bağlanın.'
    ],
    variations: [
      '🔄 Marka Pratiği: İçinde arka arkaya Peugeot, Volkswagen, Apple, Huawei gibi farklı dillerden markaların geçtiği otomotiv veya teknoloji haberlerini okumak.'
    ],
    tip: '💡 İyi bir okuyucu, yabancı kelimeyi kendi anadilinin bir parçasıymış gibi organik okur. Cümle içinde yabancı bir kelimeye çarpıp tökezlememek için metni önceden tarayıp o kelimenin telaffuzunu zihninizde hazırlayın.',
    related: [121, 133]
  }
];

// Generate the remaining 5 items automatically based on the requested list
const remainingList = [
  { id: 141, slug: 'sesli-makale-okuma', cat: 'okuma', emoji: '📄', title: 'Sesli Makale Okuma', dur: '10 dk', level: 'Orta', freq: 'Haftada 2 kez', desc: 'Akademik veya bilimsel makalelerin sesli betimlemesi.', benefits: ['Odaklanma artışı', 'Terim okuma rahatlığı'], mistakes: ['Monotonlaşmak'], phrase: '"Yapılan son araştırmalar, kuantum fiziğinde yeni bir çığır açtı."', steps: ['Makaleyi gözden geçir.', 'Paragraflara ayır.', 'Vurguları akademik yap.', 'Esleri uzat.'], variations: [], tip: 'Net ve anlaşılır olun.', related: [129] },
  { id: 142, slug: 'tiyatro-tiradi-okuma', cat: 'okuma', emoji: '🎭', title: 'Tiyatro Tiradı Okuma', dur: '15 dk', level: 'İleri', freq: 'Haftada 3 kez', desc: 'Duygunun zirve yaptığı Shakespeare vb. tiratları okuma.', benefits: ['Duygu yelpazesi', 'Nefes kapasitesi'], mistakes: ['Fazla bağırmak', 'Suni ağlamak'], phrase: '"Olmak ya da olmamak... İşte bütün mesele bu!"', steps: ['Karakteri anla.', 'Duyguyu içine al.', 'Sesi diyaframdan it.', 'Beden dilini kullan.'], variations: [], tip: 'Tirat sadece sesle değil, bütün vücutla okunur.', related: [131] },
  { id: 143, slug: 'animasyon-dublaj', cat: 'okuma', emoji: '🐰', title: 'Animasyon Karakter Dublajı', dur: '10 dk', level: 'İleri', freq: 'Haftada 2 kez', desc: 'Aşırı mimikli ve elastik seslerle çizgi film dublajı.', benefits: ['Ses teli esnekliği', 'Falsetto kullanımı'], mistakes: ['Sesi zorlayıp kısmak'], phrase: '"Hey millet! Buraya bakın, dev bir havuç buldum!"', steps: ['Yüzünü abartılı şekillere sok.', 'Sesi incelt/kalınlaştır.', 'Ritime uy.', 'Eğlen.'], variations: [], tip: 'Dublajda kural yoktur, ne kadar abartırsan o kadar inandırıcı olur.', related: [127] },
  { id: 144, slug: 'oyun-anlaticiligi', cat: 'okuma', emoji: '🎮', title: 'Oyun (E-Spor) Spikerliği', dur: '15 dk', level: 'İleri', freq: 'Haftada 1', desc: 'E-spor maçlarında aşırı hızlı ve hiper-enerjik anlatım.', benefits: ['Hız', 'Kriz yönetimi'], mistakes: ['Kelimeleri bağlamak'], phrase: '"Mid\'den giriyorlar, ultisini kullandı ve triple kill geldi!"', steps: ['Ekrana odaklan.', 'Kısa cümle kur.', 'Sürekli konuş.', 'Heyecanı sese ver.'], variations: [], tip: 'Seyirci ekranı görüyor, sen sadece duyguyu ve kaosu yönetiyorsun.', related: [124] },
  { id: 145, slug: 'uyku-masali-okuma', cat: 'okuma', emoji: '🌙', title: 'Uyku Hikayesi (ASMR) Okuma', dur: '10 dk', level: 'Orta', freq: 'Her gün', desc: 'Fısıltıya yakın, asmr tarzı çok rahatlatıcı okuma stili.', benefits: ['Nefes kontrolü', 'Yumuşak tını'], mistakes: ['Sesi titreterek korkutucu olmak', 'P ve T seslerini patlatmak'], phrase: '"Şimdi gözlerini kapat... Rüzgarın yapraklardaki fısıltısını dinle..."', steps: ['Mikrofona çok yaklaş.', 'Fısıltıyla konuş.', 'Nefesini sese kat.', 'Çok yavaşla.'], variations: [], tip: 'Pop-filter kullanın ve P, Ç, T, K harflerini çok yumuşatın.', related: [117] }
];

const allExercises = [...okumaExercises, ...remainingList];

let appjs = fs.readFileSync('public/app.js', 'utf8');
let datajs = fs.readFileSync('diksiyon-data.js', 'utf8');

const newObjectsStr = allExercises.map(ex => JSON.stringify(ex, null, 2)).join(',\n') + '\n';

appjs = appjs.replace(/\s*\];\s*$/, ',\n' + newObjectsStr + '];\n');
fs.writeFileSync('public/app.js', appjs, 'utf8');

datajs = datajs.replace(/\s*\];\s*$/, ',\n' + newObjectsStr + '];\n');
fs.writeFileSync('diksiyon-data.js', datajs, 'utf8');

console.log('25 items for Profesyonel Metin Okuma injected successfully.');
