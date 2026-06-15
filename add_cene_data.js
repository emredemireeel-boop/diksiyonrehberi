const fs = require('fs');

const newExercises = [
  {
    id: 66, slug: 'cene-gevsetme-masaji', cat: 'cene', emoji: '💆', title: 'Çene Gevşetme Masajı',
    dur: '3 dk', level: 'Başlangıç', freq: 'Her gün',
    desc: 'Konuşma öncesi çene eklemindeki stresi ve gerginliği alan temel masaj tekniği. Özellikle stresli anlarda istemsizce sıkılan çene kaslarını serbest bırakır.',
    benefits: ['Çene kilitlenmesini engeller', 'Daha akıcı artikülasyon sağlar', 'TMJ (Çene eklemi) ağrılarını hafifletir'],
    mistakes: ['Aşırı bastırmak', 'Sadece tek bir noktaya masaj yapmak'],
    phrase: null,
    steps: [
      'Ellerinizi yıkayın ve parmak uçlarınızı çene ekleminizin üzerine yerleştirin (kulağın hemen önü).',
      'Hafif dairesel hareketlerle eklem çevresine masaj yapın.',
      'Aşağıya doğru, çene hattı boyunca parmaklarınızı yavaşça kaydırın.',
      'Ağzınızı hafifçe açıp kapatarak masajın etkisini artırın.'
    ],
    variations: ['🔄 Isıtılmış havlu ile: Masajdan önce çeneye sıcak havlu koyun'],
    tip: '💡 Bu masajı özellikle sabah uyandığınızda yaparsanız, gece boyu süren diş sıkma gerginliğini atarsınız.',
    related: [67, 70]
  },
  {
    id: 67, slug: 'aslan-esnemesi', cat: 'cene', emoji: '🦁', title: 'Aslan Esnemesi',
    dur: '2 dk', level: 'Başlangıç', freq: 'Haftada 4 kez',
    desc: 'Ağız ve yüz kaslarını maksimum kapasitede esneterek genel bir rahatlama ve artikülasyon hazırlığı sağlayan etkili egzersiz.',
    benefits: ['Yüz kaslarını anında esnetir', 'Ses yolunu genişletir', 'Konuşma öncesi uyanıklık sağlar'],
    mistakes: ['Boynu zorlamak', 'Aniden kapatmak'],
    phrase: null,
    steps: [
      'Dik oturun ve derin bir nefes alın.',
      'Nefes verirken ağzınızı kocaman açın, dilinizi dışarı ve aşağı doğru çıkarabildiğiniz kadar uzatın.',
      'Gözlerinizi de kocaman açın.',
      'Bu pozisyonda 5 saniye bekleyin ve yavaşça serbest bırakın.'
    ],
    variations: ['🔄 Sesli Aslan: Esnerken yumuşak bir "Haaa" sesi çıkarın'],
    tip: '💡 Yoga pratiğinden gelen bu hareket, sadece çeneyi değil tüm yüzü konuşmaya hazırlar.',
    related: [66, 68]
  },
  {
    id: 68, slug: 'kalemle-konusma', cat: 'cene', emoji: '✏️', title: 'Kalemle Konuşma Egzersizi',
    dur: '5 dk', level: 'Orta', freq: 'Haftada 3 kez',
    desc: 'Diksiyon eğitiminin en bilinen ve en etkili egzersizlerinden biri. Çene ve dil kaslarını ağırlıkla çalıştırarak normal konuşmayı inanılmaz derecede netleştirir.',
    benefits: ['Dudak tembelliğini giderir', 'Dil kaslarını güçlendirir', 'Artikülasyon netliğini hızla artırır'],
    mistakes: ['Kalemi çok derine ısırmak', 'Dudaklarla değil dişlerle tutmak', 'Anlaşılmaz bir şekilde mırıldanmak'],
    phrase: '"Bu egzersiz sayesinde kelimeler ağzımdan çok daha net ve anlaşılır bir şekilde çıkacak."',
    steps: [
      'Temiz bir kurşun kalemi dudaklarınızın arasında (dişlere fazla değdirmeden) yatay olarak tutun.',
      'Kalem ağzınızdayken bir paragraf metni anlaşılır bir şekilde okumaya çalışın.',
      'Dudaklarınızı normalden çok daha fazla hareket ettirmeniz gerekecek.',
      '3 dakika okuduktan sonra kalemi çıkarın ve aynı metni tekrar okuyun. Farkı hissedeceksiniz.'
    ],
    variations: ['🔄 Tekerleme: Kalemle zorlu tekerlemeleri okuyun'],
    tip: '💡 Kalemi çıkardığınız an dudaklarınızın kuş gibi hafiflediğini ve kelimelerin çok daha net çıktığını fark edeceksiniz.',
    related: [69, 71]
  },
  {
    id: 69, slug: 'sakiz-cigneme-illuzyonu', cat: 'cene', emoji: '🍬', title: 'Sakız Çiğneme İllüzyonu',
    dur: '3 dk', level: 'Başlangıç', freq: 'Her gün',
    desc: 'Ağızda devasa bir sakız varmış gibi abartılı çiğneme hareketleri yaparak çene esnekliğini artıran dinamik egzersiz.',
    benefits: ['Çene eklemini yumuşatır', 'Yüz kan dolaşımını hızlandırır', 'Konuşma kaslarını ısıtır'],
    mistakes: ['Sadece aşağı-yukarı yapmak', 'Dudakları kapalı tutmak'],
    phrase: null,
    steps: [
      'Ağzınızda çok büyük bir sakız parçası olduğunu hayal edin.',
      'Dudaklarınızı kapatarak abartılı bir şekilde çiğnemeye başlayın.',
      'Çenenizi sağa, sola, öne ve arkaya doğru hareket ettirerek çiğnemeyi sürdürün.',
      'Bunu 2 dakika boyunca abartılı bir şekilde yapın.'
    ],
    variations: ['🔄 Mırıldanma ile: Çiğnerken dudak kapalı "Mmmm" sesi çıkarın'],
    tip: '💡 Bu hareket aynı zamanda yüz kaslarındaki stresi atmak için de mükemmeldir.',
    related: [66, 70]
  },
  {
    id: 70, slug: 'dudak-titretme-motor', cat: 'cene', emoji: '🏍️', title: 'Dudak Titretme (Motor Sesi)',
    dur: '3 dk', level: 'Başlangıç', freq: 'Her gün',
    desc: 'Dudakları rahatlatmak ve nefes desteğini kontrol etmek için harika bir ısınma egzersizi. Motorboat veya lip trill olarak da bilinir.',
    benefits: ['Dudakları anında gevşetir', 'Ses telleri üzerindeki baskıyı azaltır', 'Nefes-ses koordinasyonunu sağlar'],
    mistakes: ['Nefesi çok sert üflemek', 'Dudakları çok kasmak'],
    phrase: null,
    steps: [
      'Dudaklarınızı hafifçe birbirine değdirin.',
      'Burnunuzdan nefes alın ve ağzınızdan verirken dudaklarınızı pır pır titreştirin (atların çıkardığı sese benzer).',
      'Titreşimi sabit bir şekilde olabildiğince uzun süre devam ettirin.',
      'Daha sonra bu titreşimi yukarı ve aşağı ses perdeleri (siren sesi gibi) yaparak sürdürün.'
    ],
    variations: ['🔄 Parmak desteği: Yapamıyorsanız işaret parmaklarınızla yanaklarınızı hafifçe yukarı kaldırın'],
    tip: '💡 Şarkıcıların ve sunucuların kuliste en çok yaptığı altın ısınma hareketidir.',
    related: [71, 75]
  },
  {
    id: 71, slug: 'cene-itme-cekme', cat: 'cene', emoji: '↔️', title: 'Çene İtme ve Çekme',
    dur: '2 dk', level: 'Orta', freq: 'Haftada 3 kez',
    desc: 'Alt çenenin hareket kabiliyetini ve esnekliğini artırmak için yapılan mekanik bir egzersizdir.',
    benefits: ['Çene hareket açıklığını genişletir', 'Alt çene kontrolünü iyileştirir', 'Artikülasyon için çene reflekslerini hızlandırır'],
    mistakes: ['Aşırı zorlayıp acı hissetmek', 'Hızlı ve sarsıntılı yapmak'],
    phrase: null,
    steps: [
      'Başınızı dik tutun.',
      'Alt çenenizi yavaşça öne doğru itin (alt dişler üst dişlerin önüne geçsin). 3 saniye bekleyin.',
      'Çenenizi yavaşça geriye, normal pozisyonuna çekin.',
      'Aynı şekilde çenenizi hafifçe sağa ve sola kaydırın.',
      'Bu döngüyü 10 kez tekrarlayın.'
    ],
    variations: ['🔄 Dirençli itme: Çenenizi iterken elinizle hafifçe geriye doğru direnç uygulayın'],
    tip: '💡 Hareketleri çok yavaş ve kontrollü yapın; amaç kası yormak değil, esnetmektir.',
    related: [66, 72]
  },
  {
    id: 72, slug: 'o-x-dudak-egzersizi', cat: 'cene', emoji: '🅾️', title: 'O-X Dudak Egzersizi',
    dur: '3 dk', level: 'Başlangıç', freq: 'Her gün',
    desc: 'Dudakları büzme ve yayma hareketlerini arka arkaya yaparak ağız çevresi kaslarını güçlendiren klasik egzersiz.',
    benefits: ['Ağız çevresi kaslarını güçlendirir', 'O, U, İ, E gibi ünlü harflerin netliğini artırır', 'Dudak tembelliğini doğrudan çözer'],
    mistakes: ['Hareketleri yarım yapmak', 'Sadece sesi çıkarıp dudakları hareket ettirmemek'],
    phrase: '"O-X-O-X-O-X"',
    steps: [
      'Abartılı bir şekilde dudaklarınızı öne büzerek "OOO" sesi çıkarın.',
      'Ardından dudaklarınızı yana doğru kocaman yayarak "İKS" veya "EEE" sesi çıkarın.',
      'Bu iki pozisyon arasında hızlıca geçiş yapın: "O" - "X" - "O" - "X".',
      'Hareketi 20 kez tekrarlayın.'
    ],
    variations: ['🔄 Sessiz O-X: Aynı hareketleri hiç ses çıkarmadan, sadece kasları sıkarak yapın'],
    tip: '💡 Ayna karşısında yaparsanız dudaklarınızın tam O ve tam X şeklini alıp almadığını kontrol edebilirsiniz.',
    related: [73, 76]
  },
  {
    id: 73, slug: 'dil-ucu-sinavi', cat: 'cene', emoji: '💪', title: 'Dil Ucu Şınavı',
    dur: '4 dk', level: 'Orta', freq: 'Haftada 4 kez',
    desc: 'Dili ağız içinde sert yüzeylere iterek dil kaslarını güçlendiren egzersiz. T, D, N, L, R gibi harfler için mükemmel bir hazırlıktır.',
    benefits: ['Dil kökünü ve ucunu güçlendirir', 'Hızlı artikülasyon yeteneğini artırır', 'Yutkunma kaslarını çalıştırır'],
    mistakes: ['Dili sadece değdirmek (itme kuvveti uygulamamak)'],
    phrase: null,
    steps: [
      'Dilinizin ucunu sağ yanağınızın iç kısmına kuvvetlice itin. Dışarıdan parmağınızla yanağınıza bastırarak dilinize direnç gösterin (5 saniye).',
      'Aynı işlemi sol yanak için yapın.',
      'Dilinizi üst damağınıza kuvvetlice bastırın ve 5 saniye bekleyin.',
      'Bu seti 5 kez tekrarlayın.'
    ],
    variations: ['🔄 Dil Çevirme: Dilinizi dudaklarınızın üzerinden dairesel olarak çevirin (içeriden)'],
    tip: '💡 Dil kası da diğer kaslar gibi yorulabilir; bu egzersizden sonra dilinizde hafif bir tatlı yorgunluk hissetmeniz normaldir.',
    related: [74, 80]
  },
  {
    id: 74, slug: 'agiz-ici-balon-sisirme', cat: 'cene', emoji: '🎈', title: 'Ağız İçi Balon Şişirme',
    dur: '3 dk', level: 'Başlangıç', freq: 'Haftada 3 kez',
    desc: 'Yanakları ve ağız boşluğunu havayla doldurarak dudak bariyerini ve yanak kaslarını güçlendirme egzersizi.',
    benefits: ['Dudak sızdırmazlığını artırır (P, B harfleri için)', 'Yanak kaslarını esnetir', 'Nefes tutma kontrolünü geliştirir'],
    mistakes: ['Havayı burnunuzdan kaçırmak', 'Yanakları yeterince şişirmemek'],
    phrase: null,
    steps: [
      'Dudaklarınızı sıkıca kapatın.',
      'Ağzınızın içini tamamen havayla doldurarak iki yanağınızı da balon gibi şişirin. 10 saniye tutun.',
      'Havayı sağ yanağa gönderin, sol yanak insin. 5 saniye tutun.',
      'Havayı sol yanağa gönderin. 5 saniye tutun.',
      'Havayı üst dudak kısmına, ardından alt dudak kısmına gönderin.'
    ],
    variations: ['🔄 Parmakla Patlatma: Yanaklar şişkin iken işaret parmaklarınızla hafifçe bastırıp dudakların havayı tutmasını zorlayın'],
    tip: '💡 Yanaklarınızdaki havanın yerini değiştirirken dudaklarınızın açılmamasına özen gösterin.',
    related: [72, 75]
  },
  {
    id: 75, slug: 'cene-dusurme', cat: 'cene', emoji: '😲', title: 'Çene Düşürme (A Egzersizi)',
    dur: '2 dk', level: 'Başlangıç', freq: 'Her gün',
    desc: 'Özellikle A, O, E gibi açık ünlüleri söylerken çeneyi yeterince açamayanlar için yerçekimi destekli çene açma egzersizi.',
    benefits: ['Açık ünlülerin netliğini artırır', 'Sesin dışarı daha gür çıkmasını sağlar', 'Ağız içi rezonans alanını büyütür'],
    mistakes: ['Çeneyi kas gücüyle itmek (kendi kendine düşmesine izin verilmeli)'],
    phrase: '"Aaaaaaa"',
    steps: [
      'Başınızı dik tutun ve kaslarınızı serbest bırakın.',
      'Alt çenenizin ağırlığıyla yerçekimine yenik düşüp aşağı doğru sarkmasına izin verin (zombi çenesi gibi).',
      'Bu gevşek pozisyondayken göğüsten gelen derin bir "Aaaaa" sesi çıkarın.',
      'Çenenizin açık pozisyonunu ezberleyin.'
    ],
    variations: ['🔄 İki Parmak Ölçüsü: Çenenizi açtığınızda alt ve üst dişleriniz arasına dikey olarak iki parmağınızın sığıp sığmadığını kontrol edin'],
    tip: '💡 Pek çok insan konuşurken çenesini sadece 1-2 milim açar. Bu egzersiz, ideal ağız açıklığını kas hafızasına kazandırır.',
    related: [67, 76]
  },
  {
    id: 76, slug: 'dudak-yuvarlama-yayma', cat: 'cene', emoji: '👄', title: 'Dudak Yuvarlama ve Yayma',
    dur: '4 dk', level: 'Orta', freq: 'Haftada 3 kez',
    desc: 'O-X egzersizine benzer ancak daha yavaş ve dirençli olarak yapılır. Dudak hareketlerindeki asimetrileri gidermeye yardımcı olur.',
    benefits: ['Dudak hareketlerinde simetri sağlar', 'Yuvarlak ünlüleri (O, Ö, U, Ü) belirginleştirir', 'Mimik kontrolünü artırır'],
    mistakes: ['Bir tarafı daha fazla çekmek', 'Hareketi aceleye getirmek'],
    phrase: null,
    steps: [
      'Dudaklarınızı yavaşça öne doğru uzatıp tam bir kuyu (O) şekli verin. Kaslarınızı sonuna kadar sıkın ve 5 saniye bekleyin.',
      'Dudaklarınızı dişlerinizi göstermeden yanlara doğru sonuna kadar yayın (sanki zorla gülümsüyormuş gibi) ve 5 saniye bekleyin.',
      '10 tekrar yapın, her tekrarda kas gerginliğini hissedin.'
    ],
    variations: ['🔄 Kalemle Direnç: Dudak yayma sırasında dudak köşelerinize parmaklarınızla hafif direnç uygulayın'],
    tip: '💡 Ayna karşısında yaparsanız, dudaklarınızın her iki tarafının da eşit çekilip çekilmediğini görebilirsiniz.',
    related: [72, 74]
  },
  {
    id: 77, slug: 'hizli-cene-ac-kapa', cat: 'cene', emoji: '🐊', title: 'Hızlı Çene Aç-Kapa',
    dur: '3 dk', level: 'İleri', freq: 'Haftada 2 kez',
    desc: 'Hızlı artikülasyon gerektiren konuşmalarda (spikerlik, tekerleme) çene hızını artıran çeviklik egzersizi.',
    benefits: ['Çene reflekslerini hızlandırır', 'Hızlı konuşmalarda takılmaları önler', 'Hece yutma problemini azaltır'],
    mistakes: ['Aşırı güç kullanıp dişleri birbirine çarptırmak'],
    phrase: '"Ba-ba-ba-ba-ba-ba-ba"',
    steps: [
      'Ağzınızı normal konuşma açıklığında tutun.',
      'Metronom kullanarak (veya ritmik bir şekilde) hızlıca "Ba-ba-ba-ba" hecelerini söyleyin.',
      'Her hecede çenenizin net bir şekilde açılıp kapandığından emin olun.',
      'Giderek hızı artırın, ancak dişlerinizi birbirine sertçe vurmamaya dikkat edin.'
    ],
    variations: ['🔄 Karma Heceler: "Ba-da-ga-ba-da-ga" şeklinde hızlı çene hareketleri yapın'],
    tip: '💡 Amaç hızlanırken bile her hecenin tam ve anlaşılır çıkmasını sağlamaktır. Anlaşılırlık kaybolduğunda hızı düşürün.',
    related: [71, 78]
  },
  {
    id: 78, slug: 'zit-yonlu-dil-cene', cat: 'cene', emoji: '🔀', title: 'Zıt Yönlü Dil Çene Hareketi',
    dur: '4 dk', level: 'İleri', freq: 'Haftada 2 kez',
    desc: 'Dil ve çenenin birbirinden bağımsız çalışabilmesini sağlayan nöromotor koordinasyon egzersizi.',
    benefits: ['Dil-çene bağımsızlığını kazandırır', 'Karmaşık ünsüz dizilimlerini rahat söyletir', 'Gelişmiş artikülasyon motor kontrolü sağlar'],
    mistakes: ['Çene ile birlikte dili de aynı yöne götürmek'],
    phrase: null,
    steps: [
      'Ağzınızı hafifçe açın.',
      'Alt çenenizi sağa kaydırırken, dilinizi ağzınızın içinden sol yanağınıza doğru itin.',
      'Alt çenenizi sola kaydırırken, dilinizi sağ yanağınıza doğru itin.',
      'Bu ters hareketi beyniniz alışana kadar yavaşça, sonra hızlandırarak 15 kez tekrarlayın.'
    ],
    variations: ['🔄 Yukarı-Aşağı: Çeneyi aşağı indirirken dili damağa bastırın, çeneyi kapatırken dili alt dişlerin arkasına indirin'],
    tip: '💡 İlk başta beyniniz iki hareketi aynı anda ters yöne yapmakta zorlanacaktır, bu çok normaldir.',
    related: [73, 77]
  },
  {
    id: 79, slug: 'agiz-ici-dil-supurme', cat: 'cene', emoji: '🧹', title: 'Ağız İçi Dil Süpürme',
    dur: '3 dk', level: 'Başlangıç', freq: 'Her gün',
    desc: 'Dili ağız içindeki tüm sınırlarında gezdirerek dil kökünü ve gövdesini esneten egzersiz.',
    benefits: ['Dil esnekliğini maksimize eder', 'R ve L harflerinin çıkışını kolaylaştırır', 'Tükürük salgısını dengeleyerek ağız kuruluğunu önler'],
    mistakes: ['Çeneyi kapatarak alanı daraltmak'],
    phrase: null,
    steps: [
      'Ağzınızı hafifçe açık tutun.',
      'Dilinizin ucunu üst dudak ile dişleriniz arasına yerleştirin.',
      'Dili içeriden, dişlerin üzerinden dairesel olarak (saat yönünde) yavaşça 5 tur döndürün.',
      'Aynı hareketi saat yönünün tersine 5 tur yapın.'
    ],
    variations: ['🔄 Damak Süpürme: Dilinizi ön dişlerden başlayıp damağınızın en gerisine kadar yavaşça sürtün ve geri getirin'],
    tip: '💡 Dil kökünüzde yanma veya yorgunluk hissettiğinizde doğru yapıyorsunuz demektir.',
    related: [73, 80]
  },
  {
    id: 80, slug: 'yanak-kasma-birakma', cat: 'cene', emoji: '🐿️', title: 'Yanak Kasma ve Bırakma',
    dur: '2 dk', level: 'Başlangıç', freq: 'Haftada 3 kez',
    desc: 'Gülümseme ve konuşma sırasında aktif olan yanak kaslarını güçlendiren basit bir mimik egzersizi.',
    benefits: ['Konuşurken daha enerjik görünmenizi sağlar', 'Ağız köşelerindeki kelime yutulmalarını engeller', 'Diksiyon sırasında mimik kullanımını iyileştirir'],
    mistakes: ['Gözleri ve alnı kasmak (sadece yanaklar çalışmalı)'],
    phrase: null,
    steps: [
      'Dudaklarınızı kapatın.',
      'Dişlerinizi sıkmadan, yanak kaslarınızı kullanarak dudak kenarlarınızı kulaklarınıza doğru sonuna kadar çekin (geniş, kapalı dudaklı bir gülümseme).',
      'Bu pozisyonda kaslarınızı sıkıca 5 saniye tutun.',
      'Aniden serbest bırakın ve kasların rahatladığını hissedin. 10 tekrar yapın.'
    ],
    variations: ['🔄 Tek Yanak: Sadece sağ yanağı, sonra sadece sol yanağı çekerek asimetrik çalışın'],
    tip: '💡 Parmaklarınızı yanaklarınıza koyarsanız kasların nasıl sertleştiğini hissedebilirsiniz.',
    related: [76, 84]
  },
  {
    id: 81, slug: 'pit-pit-cene-vuruslari', cat: 'cene', emoji: '🥁', title: 'Pıt Pıt Çene Vuruşları',
    dur: '2 dk', level: 'Başlangıç', freq: 'İhtiyaç duyuldukça',
    desc: 'Çene altı ve yanak kaslarına hafif vuruşlarla kan akışını hızlandırıp kasları uyandıran canlandırma egzersizi.',
    benefits: ['Konuşma öncesi yüzü canlandırır', 'Artikülasyon organlarını uyandırır', 'Cilt altı dokusunu rahatlatır'],
    mistakes: ['Çok sert vurarak can yakmak'],
    phrase: null,
    steps: [
      'Parmak uçlarınızı kullanarak, sanki klavye kullanıyormuş gibi hafif ve hızlı hareketlerle yanaklarınıza vuruşlar yapın.',
      'Aynı hareketi çene hattı boyunca ve dudak çevresinde uygulayın.',
      'Bu işlemi tüm ağız çevresinde 1 dakika boyunca sürdürün.'
    ],
    variations: ['🔄 Boyun bölgesi: Aynı işlemi çok daha hafif şekilde boynunuza doğru da uygulayabilirsiniz'],
    tip: '💡 Bu hareket sahne öncesinde yüzünüze anında bir canlılık getirecek ve kasları "konuşmaya hazır" hale getirecektir.',
    related: [66, 69]
  },
  {
    id: 82, slug: 'ileri-geri-alt-cene', cat: 'cene', emoji: '🚜', title: 'İleri Geri Alt Çene',
    dur: '3 dk', level: 'Orta', freq: 'Haftada 2 kez',
    desc: 'Alt çeneyi doğal hiza dışına taşıyarak çene eklem esnekliğini maksimize eden egzersiz.',
    benefits: ['S, Z gibi sürtünmeli ünsüzlerin netliğini iyileştirir', 'Çene asimetrisini azaltır', 'Diş gıcırdatma (bruksizm) kaynaklı gerginliği alır'],
    mistakes: ['Hareket sırasında dişleri birbirine sürtmek'],
    phrase: null,
    steps: [
      'Ağzınızı hafifçe aralayın.',
      'Alt çenenizi, alt dişler üst dişlerin hizasını geçecek şekilde öne itin.',
      'Bu şekilde alt dudağınızla üst dudağınızı kapamaya çalışın. 3 saniye bekleyin.',
      'Sonra çenenizi mümkün olduğunca geriye çekin (gıdı çıkarır gibi). 3 saniye bekleyin.',
      '10 tekrar yapın.'
    ],
    variations: ['🔄 Ses Ekleme: Öne iterken hafif bir fısıltı çıkarın'],
    tip: '💡 Hareketi kesinlikle zorlamayın. Çenenizden "klik" sesi geliyorsa hareket alanını daraltın.',
    related: [71, 78]
  },
  {
    id: 83, slug: 'dudak-isirma-simulasyonu', cat: 'cene', emoji: '😬', title: 'Dudak Isırma Simülasyonu',
    dur: '2 dk', level: 'Başlangıç', freq: 'Her gün',
    desc: 'F, V harfleri gibi diş-dudak temaslı sesleri mükemmelleştiren mekanik egzersiz.',
    benefits: ['F ve V seslerini netleştirir', 'Alt dudak kontrolünü sağlar', 'Dudak kaslarına farklı bir uyarıcı gönderir'],
    mistakes: ['Gerçekten ısırıp acı vermek'],
    phrase: '"Fe-Ve-Fe-Ve"',
    steps: [
      'Üst dişlerinizle alt dudağınızın etli kısmını (çok hafifçe, can yakmadan) kavrayın.',
      'Bu pozisyondayken derin bir nefes vererek "FFFF" sesi çıkarın.',
      'Dudak kaslarınızı kullanarak dudağınızı dişlerinizin arasından kaydırarak kurtarın.',
      'Bunu 10 kez tekrarlayın.'
    ],
    variations: ['🔄 V Sesi: Aynı işlemi titreşimli "VVVV" sesi çıkararak yapın'],
    tip: '💡 F ve V seslerinde sorun yaşayanlar için bu fiziksel hatırlatıcı egzersiz son derece faydalıdır.',
    related: [76, 84]
  },
  {
    id: 84, slug: 'saskin-yuz-ifadesi', cat: 'cene', emoji: '🙀', title: 'Şaşkın Yüz İfadesi',
    dur: '3 dk', level: 'Başlangıç', freq: 'Haftada 3 kez',
    desc: 'Tüm yüz kaslarını aynı anda çalıştıran ve ağız açıklığını maksimuma getiren mimik egzersizi.',
    benefits: ['Yüzdeki donuk ve ifadesiz konuşmayı önler', 'Tüm konuşma aparatını esnetir', 'Duygulu konuşma (intonasyon) için mimiği hazırlar'],
    mistakes: ['Dili içeride tutmak'],
    phrase: null,
    steps: [
      'Gözlerinizi kocaman açın, kaşlarınızı kaldırın.',
      'Ağzınızı büyük bir "O" yapacak şekilde sonuna kadar açın.',
      'Bütün yüzünüzü bu abartılı "şaşkınlık" halinde 5 saniye dondurun.',
      'Aniden tüm kasları serbest bırakın ve yüzünüzün gevşemesini hissedin. 5 tekrar yapın.'
    ],
    variations: ['🔄 Tersine: Şaşkınlıktan hemen sonra yüzünüzü merkezde toplayarak büzün (ekşi limon yemiş gibi)'],
    tip: '💡 Etkili bir diksiyon, sadece doğru ses çıkarmak değil, aynı zamanda doğru yüz ifadesini kullanmaktır.',
    related: [67, 75]
  },
  {
    id: 85, slug: 'dil-koku-esnetme', cat: 'cene', emoji: '👅', title: 'Dil Kökü Esnetme',
    dur: '4 dk', level: 'Orta', freq: 'Haftada 2 kez',
    desc: 'Boğazın derinliklerinde yer alan dil kökünü rahatlatarak seste oluşan "boğuk" veya "kısık" duyulma sorununu çözen egzersiz.',
    benefits: ['Sesin daha berrak çıkmasını sağlar', 'Boğaz düğümlenmesi hissini giderir', 'K ve G seslerinin rahat çıkmasını sağlar'],
    mistakes: ['Öğürme refleksini tetikleyecek kadar zorlamak'],
    phrase: '"Kaaaa - Gaaaa"',
    steps: [
      'Ağzınızı açın.',
      'Dilinizin ucunu alt ön dişlerinizin arkasına sıkıca dayayın.',
      'Dil ucu dişlerden ayrılmadan, dilinizin orta ve arka kısmını (kökünü) dışarıya ve yukarıya doğru kamburlaştırın.',
      'Bu pozisyonda esnemeyi hissedin ve 4 saniye tutun. Sonra serbest bırakın.'
    ],
    variations: ['🔄 Esnerken Ses: Dili kamburlaştırdığınız sırada yumuşak bir "K" sesi çıkarın'],
    tip: '💡 Bu hareket boğazınızda bir genişleme hissi yaratır. Doğru yapıldığında sesin rezonans alanı büyür.',
    related: [73, 79]
  }
];

let appjs = fs.readFileSync('public/app.js', 'utf8');
let datajs = fs.readFileSync('diksiyon-data.js', 'utf8');

const newObjectsStr = newExercises.map(ex => JSON.stringify(ex, null, 2)).join(',\n') + '\n';

// For app.js
appjs = appjs.replace(/\s*\];\s*$/, ',\n' + newObjectsStr + '];\n');
fs.writeFileSync('public/app.js', appjs, 'utf8');

// For diksiyon-data.js
datajs = datajs.replace(/\s*\];\s*$/, ',\n' + newObjectsStr + '];\n');
fs.writeFileSync('diksiyon-data.js', datajs, 'utf8');

console.log('20 new exercises for Çene & Ağız Kasları injected successfully.');
