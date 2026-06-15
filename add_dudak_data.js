const fs = require('fs');

const dudakExercises = [
  {
    id: 86, slug: 'dudak-trilleri', cat: 'dudak', emoji: '👄', title: 'Dudak Trilleri (Lip Trills)',
    dur: '3 dk', level: 'Başlangıç', freq: 'Her gün',
    desc: 'Dudakları titreştirerek ses ısınması. Ses tellerine binen yükü hafifleten, şan ve diksiyon eğitiminin en temel egzersizidir.',
    benefits: ['Dudakları ve ses tellerini ısıtır', 'Nefes akışını düzenler', 'Sesteki çatallanmayı önler'],
    mistakes: ['Nefesi boğazdan itmek', 'Dudakları çok kasmak'],
    phrase: null,
    steps: [
      'Derin bir karın (diyafram) nefesi alın.',
      'Dudaklarınızı hafifçe birbirine yaklaştırarak, nefesinizi dışarı üflerken dudaklarınızı pır pır titreştirin.',
      'Sesi inceden kalına, kalından inceye (siren sesi gibi) kaydırın.',
      'Titreşimi kesintisiz 10 saniye sürdürmeye çalışın.'
    ],
    variations: ['🔄 Parmak Desteği: Yapamıyorsanız işaret parmaklarınızla dudak kenarlarından hafifçe destekleyin.'],
    tip: '💡 Eğer titreşim hemen kesiliyorsa, dudaklarınızı gereğinden fazla sıkıyorsunuz demektir; rahat bırakın.',
    related: [87, 89]
  },
  {
    id: 87, slug: 'opucuk-gulumseme-gecisi', cat: 'dudak', emoji: '😘', title: 'Öpücük-Gülümseme Geçişi',
    dur: '2 dk', level: 'Başlangıç', freq: 'Haftada 4 kez',
    desc: 'Dudakları ileri-geri hızla geçirme (U-İ). Dudak çevresindeki orbicularis oris kasını esneterek artikülasyon hızını artırır.',
    benefits: ['U, Ü, İ, E seslerini netleştirir', 'Dudak tembelliğini doğrudan çözer', 'Ağız çevresindeki mimikleri kuvvetlendirir'],
    mistakes: ['Hareketleri yarım yapmak', 'Dişleri sıkmak'],
    phrase: '"Uuuuu - İiiii"',
    steps: [
      'Dudaklarınızı abartılı bir şekilde öne uzatarak "U" pozisyonu alın.',
      'Hemen ardından dudakları iki yana sonuna kadar çekerek "İ" pozisyonu alın (geniş bir gülümseme).',
      'Bu iki uç pozisyon arasında seri ve hızlı geçişler yapın.',
      '20 kez tekrarlayın.'
    ],
    variations: ['🔄 Sessiz Geçiş: Aynı hareketi ses çıkarmadan, sadece kasların gerginliğine odaklanarak yapın.'],
    tip: '💡 Hareketi ayna karşısında yaparsanız, simetrik çekip çekmediğinizi daha iyi görürsünüz.',
    related: [86, 88]
  },
  {
    id: 88, slug: 'dudak-streci', cat: 'dudak', emoji: '🧘', title: 'Dudak Streçi',
    dur: '3 dk', level: 'Başlangıç', freq: 'Her gün',
    desc: 'Dudakları 4 yöne germe esnekliği kazandıran temel bir yoga yüz egzersizidir.',
    benefits: ['Dudak çevresi yorgunluğunu alır', 'Konuşma sırasında dudağın esneme payını artırır', 'Kelime yutmalarını azaltır'],
    mistakes: ['Dişleri göstererek germek', 'Sadece bir yöne ağırlık vermek'],
    phrase: null,
    steps: [
      'Üst dudağınızı alt dişlerinizin üzerine doğru çekerek gerin (5 sn bekle).',
      'Alt dudağınızı üst dişlerinizin üzerine doğru çekerek gerin (5 sn bekle).',
      'Dudaklarınızı kapalı tutup sağa doğru sonuna kadar kaydırın (5 sn).',
      'Dudaklarınızı kapalı tutup sola doğru kaydırın (5 sn).'
    ],
    variations: ['🔄 Diş Fırçası Direnci: Dudak arasına bir temiz diş fırçası koyarak dudakları öne doğru itmeye çalışın.'],
    tip: '💡 Kaslardaki gerginliğin hafifçe açıldığını (streç olduğunu) hissedene kadar pozu koruyun.',
    related: [87, 91]
  },
  {
    id: 89, slug: 'buzz-lip', cat: 'dudak', emoji: '🐝', title: 'Buzz Lip Egzersizi',
    dur: '4 dk', level: 'Orta', freq: 'Haftada 3 kez',
    desc: 'Arı vızıltısı ile dudak titreşim güçlendirme. Lip trill\'in daha ileri seviyesidir ve daha güçlü bir dudak bariyeri gerektirir.',
    benefits: ['Z, V gibi titreşimli sesleri parlatır', 'Dudakların nefes direncini artırır', 'Ses rezonansını ön bölgeye taşır'],
    mistakes: ['Dişleri birbirine değdirmek', 'Titreşimi burundan yapmak'],
    phrase: null,
    steps: [
      'Dişleriniz aralıkken dudaklarınızı sıkıca kapatın.',
      'Nefesinizi içeriden dışarıya doğru iterek "Vzzzz" benzeri güçlü bir arı vızıltısı çıkarın.',
      'Sesi sadece dudaklarınızın tam ortasında hissetmelisiniz.',
      '10 saniyelik periyotlarla 5 kez uygulayın.'
    ],
    variations: ['🔄 Şarkı Söyleme: Buzz tekniği ile sevdiğiniz bir şarkının melodisini mırıldanın.'],
    tip: '💡 Dudaklarınızda tatlı bir gıdıklanma veya karıncalanma hissediyorsanız hareketi doğru yapıyorsunuz.',
    related: [86, 92]
  },
  {
    id: 90, slug: 'dudak-dis-koordinasyonu', cat: 'dudak', emoji: '🦷', title: 'Dudak-Diş Koordinasyonu',
    dur: '3 dk', level: 'Orta', freq: 'Haftada 4 kez',
    desc: 'F ve V sesleri için alt dudak-üst diş pratiği. Bu seslerin peltek veya zayıf çıkmasını tamamen engeller.',
    benefits: ['F ve V artikülasyonunu kusursuzlaştırır', 'Alt dudağın motor kontrolünü artırır', 'Fısıltılı ve sesli diş-dudak uyumunu sağlar'],
    mistakes: ['Alt dudağı dişlerin çok gerisine almak', 'Üst dudağı da işin içine katmak'],
    phrase: '"Fa-Fe-Fı-Fi-Fo-Fö-Fu-Fü / Va-Ve-Vı-Vi-Vo-Vö-Vu-Vü"',
    steps: [
      'Üst ön dişlerinizi alt dudağınızın iç ıslak kısmına nazikçe değdirin.',
      'Hafif bir nefes üfleyerek kesintisiz "FFFF" sesi çıkarın (3 saniye).',
      'Ardından ses tellerini titreterek kesintisiz "VVVV" sesi çıkarın (3 saniye).',
      'Bu değişimi dudak pozisyonunu hiç bozmadan 10 kez yapın.'
    ],
    variations: ['🔄 Patlama Ekleme: FFFFFF-PA, VVVVV-BA şeklinde ani patlayıcı seslere geçiş yapın.'],
    tip: '💡 Sesi çıkarırken alt dudağınızın sadece iç kısmının dişlere temas ettiğinden emin olun; dışarıdan çok görünmemelidir.',
    related: [87, 100]
  },
  {
    id: 91, slug: 'yuvarlak-unlu-maratonu', cat: 'dudak', emoji: '🍩', title: 'Yuvarlak Ünlü Maratonu',
    dur: '4 dk', level: 'Orta', freq: 'Haftada 3 kez',
    desc: 'O-Ö-U-Ü ünlülerini abartılı dudak hareketiyle söyleyerek Türkçe\'nin bu karakteristik seslerini netleştirme egzersizi.',
    benefits: ['Yuvarlak seslerdeki yutulmaları engeller', 'Dudak kaslarında dayanıklılık sağlar', 'Sesin daha tok çıkmasına yardımcı olur'],
    mistakes: ['Çeneyi fazla kapalı tutmak', 'Dudakları yeterince öne itmemek'],
    phrase: '"Oooo - Öööö - Uuuu - Üüüü"',
    steps: [
      'Derin bir nefes alın.',
      'Ağzınızı açıp dudakları öne iterek derin ve uzun bir "O" sesi çıkarın.',
      'Hemen ardından dudağı biraz daha büzerek "Ö"ye geçin.',
      'Sonra deliği daha da küçültüp "U" deyin ve son olarak en küçük büzülmeyle "Ü" deyin.',
      'Bu sıralamayı hiç nefes almadan, aralıksız bağlayarak okuyun.'
    ],
    variations: ['🔄 Geriye Doğru: Ü-U-Ö-O şeklinde tersten okuma yapın.'],
    tip: '💡 O ve Ö söylerken ağız boşluğu büyüktür, U ve Ü söylerken küçüktür; bu hacim farkını dudaklarınızla hissedin.',
    related: [87, 95]
  },
  {
    id: 92, slug: 'dudak-bagimsizligi', cat: 'dudak', emoji: '🎭', title: 'Dudak Bağımsızlığı',
    dur: '3 dk', level: 'İleri', freq: 'Haftada 2 kez',
    desc: 'Çene sabit tutularak sadece dudakla konuşma pratiği. İleri düzey motor kontrol gerektirir.',
    benefits: ['Dudakların çeneden bağımsız hareket etmesini öğretir', 'Ventriloquist (vantrilok) tekniklerine giriş niteliğindedir', 'Dudak reflekslerini zirveye taşır'],
    mistakes: ['Hareket sırasında çeneyi oynatmak'],
    phrase: '"Bip bop bam, pıt pıt pat"',
    steps: [
      'Ağzınıza kalın bir kalem veya silgi parçası koyun, ya da çenenizi elinizle sabit tutun.',
      'Çenenizin yukarı/aşağı oynamasına kesinlikle izin vermeden "B, P, M, V, F" ağırlıklı kelimeler söylemeye çalışın.',
      'Tüm yük dudak kaslarınıza binecektir.',
      'Zorlandığınızı hissettiğiniz an mola verin.'
    ],
    variations: ['🔄 Aynada Sabitlik: Aynaya bakarak çene çizginizin hiç kıpırdamadığından emin olun.'],
    tip: '💡 Bu egzersiz, konuşurken başını ve çenesini gereksiz yere sarsan kişiler için harika bir tedavidir.',
    related: [88, 100]
  },
  {
    id: 93, slug: 'mikrofon-proximity', cat: 'dudak', emoji: '🎙️', title: 'Mikrofon Proximity Dudak Kontrolü',
    dur: '4 dk', level: 'İleri', freq: 'İhtiyaç duyuldukça',
    desc: 'Patlayıcı sesleri (P, T, K, Ç) yumuşatarak pop-filter gerektirmeyen profesyonel mikrofon konuşması tekniği.',
    benefits: ['P ve B harflerindeki mikrofon patlamalarını (plosive) yok eder', 'Yumuşak ve kontrollü hava çıkışı sağlar', 'Podcast ve seslendirme için kritiktir'],
    mistakes: ['Sesi fısıltıya çevirmek', 'Harfleri tamamen yutmak'],
    phrase: '"Paraşütle patlıcan tarlasına pat diye atladım."',
    steps: [
      'Elinizi ağzınızdan 3-4 santim uzağa koyun.',
      'İçinde bol P harfi olan bir cümle söyleyin.',
      'Elinize çarpan sert havayı (patlamayı) hissedin.',
      'Şimdi aynı cümleyi dudaklarınızı daha yumuşak kapatarak ve havayı sertçe itmeden söyleyin.',
      'Elinize neredeyse hiç hava çarpmadığında doğru tekniği buldunuz demektir.'
    ],
    variations: ['🔄 Mum Testi: Ağzınızın önünde yanan bir mum tutun ve P harflerini söylerken alevi söndürmemeye çalışın.'],
    tip: '💡 P harfini patlatmadan söylemenin sırrı, dudakları birbirine şaplatmak yerine yavaşça ayırmaktır.',
    related: [100]
  },
  {
    id: 94, slug: 'islik-ile-egzersiz', cat: 'dudak', emoji: '😙', title: 'Islık ile Egzersiz',
    dur: '3 dk', level: 'Orta', freq: 'Haftada 3 kez',
    desc: 'Islık çalarak dudak kaslarını inceltme ve güçlendirme. Dudakların ortasındaki sızdırmazlık direncini maksimize eder.',
    benefits: ['Dudak orta kaslarını nokta atışı güçlendirir', 'Nefes kontrolünü ve odağını daraltır', 'S, Ş gibi ıslıklı seslere yardımcı olur'],
    mistakes: ['Yanakları şişirmek', 'Dişleri çok açmak'],
    phrase: null,
    steps: [
      'Dudaklarınızı incecik bir "O" şeklinde büzün.',
      'Sabit bir nota ile 10 saniye boyunca pürüzsüz bir ıslık çalın.',
      'Ardından kesik kesik (staccato) ıslıklar çalın: fiuu-fiuu-fiuu.',
      'Eğer ıslık çalamıyorsanız, aynı formda güçlü bir "Fuuuu" sesi üfleyin.'
    ],
    variations: ['🔄 Ters Islık: Sadece dışarı değil, havayı içinize çekerken de ıslık çalmayı deneyin (esnekliği artırır).'],
    tip: '💡 Yanaklarınızı hava ile şişirmeden, havanın gücünü diyaframdan alarak ıslık çalın.',
    related: [88, 91]
  },
  {
    id: 95, slug: 'w-sesi-pratigi', cat: 'dudak', emoji: '🇬🇧', title: 'W Sesi Pratiği',
    dur: '2 dk', level: 'Başlangıç', freq: 'Haftada 2 kez',
    desc: 'İngilizce W sesini kullanarak dudakların yuvarlaklıktan düzlüğe geçiş hızını artırma egzersizi.',
    benefits: ['Dudakların açılma refleksini hızlandırır', 'Türkçe "V" ile İngilizce "W" farkını öğretir', 'U ve A arası geçişleri yumuşatır'],
    mistakes: ['Üst dişleri alt dudağa değdirmek (W dişle yapılmaz)'],
    phrase: '"Wa-We-Wi-Wo"',
    steps: [
      'Dudaklarınızı tam bir "U" pozisyonuna getirin.',
      'Dişlerinizi hiçbir yere değdirmeden, "U" sesinden "A" sesine hızlıca kayın (Uuu-aaa = Waa).',
      'Bu "Waa", "Wee", "Wii" geçişlerini seri bir şekilde tekrarlayın.',
      'Asla "V" sesi çıkmasına izin vermeyin.'
    ],
    variations: ['🔄 O-A Geçişi: W yapamıyorsanız, "O-a-o-a-o-a" şeklinde hızlı geçişler yapın.'],
    tip: '💡 W sesi, dudakların bir yay gibi gergin pozisyondan birden fırlaması hissidir.',
    related: [87, 91]
  },
  {
    id: 96, slug: 'hizli-dudak-degistirme', cat: 'dudak', emoji: '⚡', title: 'Hızlı Dudak Değiştirme',
    dur: '3 dk', level: 'İleri', freq: 'Haftada 3 kez',
    desc: 'A-O-U-Ö-Ü geçişlerini saniyede yaparak dudak şekil değiştirmesini saniyenin onda birine indiren ileri düzey egzersiz.',
    benefits: ['Artikülasyon çevikliğini en üst seviyeye çıkarır', 'Dudakların heceler arasında takılmasını önler', 'Konuşma hızını anlaşılırlıktan ödün vermeden artırır'],
    mistakes: ['Sesleri birbirine karıştırarak tek bir sese dönüştürmek'],
    phrase: '"A-E-I-İ-O-Ö-U-Ü"',
    steps: [
      'Türkçe\'deki 8 ünlü harfi sırasıyla söyleyin.',
      'Her harfte dudak şeklinizin mükemmel, abartılı ve net olduğundan emin olun.',
      'Bir kronometre açın ve bu 8 harfi hiç hata yapmadan en kısa sürede kaç saniyede söyleyebildiğinizi ölçün.',
      'Hedefiniz, tüm seriyi 1.5 saniyenin altında kusursuz dudak şekilleriyle okumaktır.'
    ],
    variations: ['🔄 Rastgele Ünlüler: "O-İ-Ü-A-E-U" gibi karışık sekansları aynaya bakarak hızla yapın.'],
    tip: '💡 Hızlandıkça dudak hareketleriniz küçülme eğilimi gösterir. Küçülmesine izin vermeyin.',
    related: [87, 91]
  },
  {
    id: 97, slug: 'dudak-okuma-temelleri', cat: 'dudak', emoji: '👁️', title: 'Dudak Okuma (Lip Reading) Temelleri',
    dur: '5 dk', level: 'Orta', freq: 'Haftada 1 kez',
    desc: 'Sessiz videolar izleyerek veya aynada sessiz konuşarak kendi dudak hareketlerinizin dışarıdan nasıl okunduğunu test etme pratiği.',
    benefits: ['Farkındalığı (self-awareness) muazzam artırır', 'Hangi harfleri yuttuğunuzu gözle görmenizi sağlar', 'İletişim kalitesini görselleştirir'],
    mistakes: ['Ses çıkarmadığınız için kasları da çalıştırmamak'],
    phrase: null,
    steps: [
      'Ayna karşısına geçin veya telefonunuzun ön kamerasını açın.',
      'Ses tellerini tamamen kapatın (fısıldamayın bile).',
      'Normal bir hızda bir paragraf veya tekerleme "okuyun".',
      'Eğer dışarıdan bakan biri sadece dudaklarınıza bakarak ne dediğinizi (en azından harfleri) anlayamıyorsa, artikülasyonunuz yetersizdir.'
    ],
    variations: ['🔄 Video Kaydı: Kendinizi sessiz kayda alın, sonra videoyu izleyip kendi dudaklarınızı okumaya çalışın.'],
    tip: '💡 Mükemmel bir diksiyona sahip spikerlerin sesini kıstığınızda ne dediklerini rahatça anlayabilirsiniz; hedefiniz bu netlik olmalıdır.',
    related: [96, 92]
  },
  {
    id: 98, slug: 'dudak-kilitlenmesi-cozumu', cat: 'dudak', emoji: '🔓', title: 'Dudak Kilitlenmesi Çözümü',
    dur: '3 dk', level: 'Başlangıç', freq: 'İhtiyaç duyuldukça',
    desc: 'Heyecan ve stres anlarında gerginleşen ve kasılan dudak kaslarını serbest bırakma, gevşetme teknikleri.',
    benefits: ['Topluluk önünde konuşma öncesi stresi alır', 'Dudaklardaki "titreme" hissini giderir', 'Rahat, akıcı bir ton sağlar'],
    mistakes: ['Parmaklarla dudakları çekiştirmek'],
    phrase: null,
    steps: [
      'Ağzınızı hafifçe aralayın.',
      'İşaret ve başparmağınızla alt dudağınızı nazikçe tutup çok hafifçe sarsın (sanki bir jöleyi sallıyormuş gibi).',
      'Aynı işlemi üst dudak için yapın.',
      'Son olarak derin nefes alıp, "Bwaaah" şeklinde at gibi dudaklarınızı tamamen serbest bırakarak hava üfleyin.'
    ],
    variations: ['🔄 Masaj: Dudak kenarlarına parmak uçlarınızla dairesel hafif masajlar uygulayın.'],
    tip: '💡 Stres anında yüzümüzde ilk gerilen yer çene ve dudak kenarlarıdır; bu bölgeleri fiziksel olarak uyarmak beyni sakinleştirir.',
    related: [86, 88]
  },
  {
    id: 99, slug: 'dudak-nefes-senkron', cat: 'dudak', emoji: '🌬️', title: 'Dudak-Nefes Senkronizasyonu',
    dur: '4 dk', level: 'Orta', freq: 'Haftada 2 kez',
    desc: 'Nefes veriş ve dudak açılışını mükemmel şekilde eşzamanlı yönetme. Sesteki "hava kaçaklarını" önler.',
    benefits: ['Nefesli harflerin (H, P) kontrolünü artırır', 'Cümle başlarındaki pürüzleri giderir', 'Ses ve nefes ekonomisi sağlar'],
    mistakes: ['Sesten önce çok fazla nefes boşaltmak'],
    phrase: '"Hhha - Hhhe - Hhhi"',
    steps: [
      'Dudaklarınızı kapatın.',
      'Derin bir nefes alın.',
      'Dudaklarınızı "P" harfi formunda açtığınız milisaniye içerisinde, içerideki basınçlı havayı sesle birlikte "Pa" diyerek dışarı verin.',
      'Havanın dudak açılmadan önce kaçmasına veya açıldıktan sonra gecikmesine izin vermeyin. Tam senkron!'
    ],
    variations: ['🔄 Mum ile: Mumun alevini dudak açılışıyla eş zamanlı titretebilme.'],
    tip: '💡 Konuşmaya başlarken önce "hııh" diye hava kaçırıyorsanız, bu egzersiz o kaçağı önleyecektir.',
    related: [93, 100]
  },
  {
    id: 100, slug: 'patlayici-p-b-guclendirme', cat: 'dudak', emoji: '💥', title: 'Patlayıcı P-B Dudak Güçlendirme',
    dur: '3 dk', level: 'İleri', freq: 'Haftada 3 kez',
    desc: 'P ve B seslerinde dudak kapanmasını ve basınçlı patlamayı kasıtlı olarak mükemmelleştirme. Mırıldanarak konuşmayı kesin bitirir.',
    benefits: ['Bilabial (çift dudak) ünsüzleri netleştirir', 'Dudak kas gücünü artırır', 'Kararlı ve özgüvenli bir konuşma tonu yaratır'],
    mistakes: ['Sesi genizden veya damaktan çıkarmaya çalışmak'],
    phrase: '"Pıt pıt pıt, pat pat pat, bım bım bım, bam bam bam"',
    steps: [
      'Dudaklarınızı normalden daha sert bir şekilde içe kıvırarak kapatın.',
      'İçeride büyük bir hava basıncı oluşturun.',
      'Bir volkan patlar gibi dudaklarınızı aniden serbest bırakarak "PA!" deyin.',
      'Hareketi P ve B harfleriyle defalarca tekrarlayın, her seferinde dudaklarınızdaki fiziksel patlama hissini arayın.'
    ],
    variations: ['🔄 P-B Tekerlemeleri: "Bir berber bir berbere bre berber..." gibi tekerlemeleri abartılı patlamalarla okuyun.'],
    tip: '💡 P ve B harfleri Türkçe\'nin en net duraklarıdır. Bunları güçlü söylemek, konuşmanıza doğal bir ritim ve kararlılık katar.',
    related: [90, 93]
  }
];

let appjs = fs.readFileSync('public/app.js', 'utf8');
let datajs = fs.readFileSync('diksiyon-data.js', 'utf8');

const newObjectsStr = dudakExercises.map(ex => JSON.stringify(ex, null, 2)).join(',\n') + '\n';

// For app.js
appjs = appjs.replace(/\s*\];\s*$/, ',\n' + newObjectsStr + '];\n');
fs.writeFileSync('public/app.js', appjs, 'utf8');

// For diksiyon-data.js
datajs = datajs.replace(/\s*\];\s*$/, ',\n' + newObjectsStr + '];\n');
fs.writeFileSync('diksiyon-data.js', datajs, 'utf8');

console.log('15 new exercises for Dudak Egzersizleri injected successfully.');
