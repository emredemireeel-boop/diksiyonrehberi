const fs = require('fs');

const sesExercises = [
  {
    id: 216, slug: 'falsetto-chest-voice-gecisi', cat: 'perde', emoji: '🗣️', title: 'Falsetto ve Chest Voice Geçişi',
    dur: '10 dk', level: 'İleri', freq: 'Haftada 3 gün',
    desc: 'Kafa sesi (Falsetto/Head Voice) ile göğüs sesi (Chest Voice) arasında pürüzsüz geçiş (Passaggio) yaparak seste çatallanmayı önleme egzersizi.',
    benefits: ['Sesin aniden kırılmasını (Detone olmayı) engeller', 'Duygusal geçişlerde (fısıltıdan bağrışa) sesi esnekleştirir', 'Ses tellerinin alt ve üst limitlerini genişletir'],
    mistakes: ['Göğüs sesinden kafa sesine geçerken gırtlağı (Adem elmasını) şiddetle yukarı itmek', 'Geçiş anında nefesi kesip sesi sıkıştırmak'],
    phrase: null,
    steps: [
      '1. Siren Sesi: Dudaklarınızı titreterek (Lip Trill) en kalın sesinizden (Göğüs) en ince sesinize (Kafa) doğru hiç durmadan siren sesi çıkarın.',
      '2. Yawning (Esneme) Tekniği: Esnemeye başlarken çıkardığınız yüksek ve havalı (Huuu) sesi yapın. Bu doğal bir kafa sesidir.',
      '3. Hece Geçişi: "HAAAA" (Göğüs sesi, kalın ve gür) deyip aniden "Huuuu" (Kafa sesi, ince ve fısıltılı) diyerek aradaki "Kırılma (Break)" noktasını bulmaya çalışın.',
      '4. Köprü (Passaggio): Göğüsten kafaya geçerken gırtlağınızı aşağıda tutmaya (esneme pozisyonu) odaklanın, sesi inceltirken boğazı sıkmayın.'
    ],
    variations: [
      '🔄 Baykuş Ötüşü: Sadece "Huu-Huu" diyerek en üst perdeyi (Kafa sesini) acıtmadan ve zorlamadan test edin. Kafa sesi bağırmak değil, tınlamaktır.'
    ],
    tip: '💡 Kafa sesi (İnce) ile Göğüs sesi (Kalın) arasında bir vites kutusu vardır. Siz vitesi (perdeyi) değiştirirken debriyaja (nefes desteğine) basmazsanız motor tekler (ses çatlar).',
    related: [217, 219]
  },
  {
    id: 217, slug: 'ses-kirilma-noktasi-yonetimi', cat: 'perde', emoji: '⚠️', title: 'Ses Kırılma Noktası (Break) Yönetimi',
    dur: '10 dk', level: 'İleri', freq: 'Her gün',
    desc: 'Ergenlik mutasyonu veya stres anlarında sesin kontrolsüzce inceye kayıp (çatlayıp) tekrar kalına dönmesi sorununu (Vocal Break) ortadan kaldırma.',
    benefits: ['Sunum ve mülakatlardaki utanç verici ses çatlamalarını sıfırlar', 'Sesin merkez (Nötr) perdesini sabitler', 'Gırtlak kaslarındaki (Laryngeal) ani spazmları çözer'],
    mistakes: ['Ses çatladığında paniğe kapılıp boğazı temizlemek (öksürmek) ve sesi daha çok tahriş etmek'],
    phrase: null,
    steps: [
      '1. Tespit: Kendi "Kırılma (Break)" noktanızı bulun. Piyanodaki gibi sesinizi pesden tize doğru "Aaa" diyerek kaydırın. Sesin pürüzlendiği veya birden inceldiği o nokta sizin fay hattınızdır.',
      '2. Vocal Fry (Gıcırdama): Sesin en kalın, en dibinde "Gggrrrr" gibi kapı gıcırtısı (Vocal Fry) yapın. Bu ses tellerini rahatlatır ve resetler.',
      '3. Destekli Geçiş: O kırılma noktasına geldiğinizde karnınızı (diyaframı) normalden iki kat daha fazla dışa doğru itin (Destek verin).',
      '4. Yarı Fısıltı: Kırılma noktasındaki o notayı veya kelimeyi bağırarak değil, bol "H" harfi (Nefes) katarak yarı fısıltılı söyleyip orayı pürüzsüz geçmeyi öğrenin.'
    ],
    variations: [
      '🔄 Su Baloncuğu (Lax Vox): Kırılma bölgesini tedavi etmenin en iyi yolu yarım şişe suya pipet daldırıp o sesleri pipetten suya "Uuu" diyerek (baloncuk çıkararak) yapmaktır.'
    ],
    tip: '💡 Ses kırılması bir hastalık değildir, sadece iki farklı kas grubunun (kalınlaştırıcı ve inceltici kasların) nöbetleşe çalışırken yaşadığı anlık koordinasyonsuzluktur (El sıkışamamaları). Nefes desteği bu iki kası birbirine bağlar.',
    related: [216, 230]
  },
  {
    id: 218, slug: 'vibrato-kontrolu', cat: 'perde', emoji: '〰️', title: 'Vibrato (Titreme) Kontrolü',
    dur: '5 dk', level: 'İleri', freq: 'Haftada 2 gün',
    desc: 'Konuşurken sese profesyonel bir derinlik katan "doğal titremeyi (Vibrato)" oluşturma ve stres kaynaklı "kontrolsüz titremeyi (Tremolo)" yok etme.',
    benefits: ['Şiir ve edebi metin okumalarında sese inanılmaz bir estetik (Melodi) katar', 'Cümle sonlarındaki (Nefes biterken) istemsiz titremeleri durdurur', 'Heyecan kaynaklı çene ve dudak titremesini maskeler'],
    mistakes: ['Vibrato yapmak için çeneyi veya boğazı bilerek ve zorla titretmek (Keçi sesi gibi Tremolo yaratır)'],
    phrase: null,
    steps: [
      '1. Diyafram Titreşimi: Ellerini karnınıza (diyaframa) koyun. "Ha-Ha-Ha-Ha" diyerek karnınızı ritmik olarak zıplatın.',
      '2. Hızlanma: Bu "Ha-Ha" seslerini yavaşça birleştirin (Haaaaa) ama karnınızdaki o hafif ritmik dalgalanmayı koruyun.',
      '3. Düz Ses (Straight Tone): Düz, hiç titremeyen, robotik ve uzun bir "Mmmmmm" yapın.',
      '4. Bilinçli Geçiş: Düz "Mmmmmm" ile başlarken son 2 saniyede karnınızdan hafif dalgalar göndererek sesi "Mmmmm~~~" şeklinde doğal titretin.'
    ],
    variations: [
      '🔄 Siren Vibratosu: İki parmağınızı gırtlağınızın hafifçe üstüne koyun, bir polis sireni gibi "İ-U-İ-U" deyin. Bu dalgalanmayı çok hafifletip tek notaya yedirdiğinizde vibrato elde edersiniz.'
    ],
    tip: '💡 Sağlıklı vibrato (titreme) GIRTLAĞIN değil, NEFESİN (Diyafram basıncının) ürünüdür. Eğer çeneniz veya dudaklarınız titriyorsa, vibrato değil, gırtlak spazmı yapıyorsunuz demektir.',
    related: [217, 222]
  },
  {
    id: 219, slug: 'glissando-ses-kaydirma', cat: 'perde', emoji: '🛝', title: 'Glissando (Ses Kaydırma) Tekniği',
    dur: '5 dk', level: 'Orta', freq: 'Isınma Rutininde',
    desc: 'Kelimeler ve heceler arasında (Özellikle vurgu yaparken) robotik zıplamalar yerine, merdivenden kayar gibi kesintisiz geçiş yapabilme.',
    benefits: ['"Mıy mıy" (Düz) konuşanların sesini inip çıkan bir melodiye dönüştürür', 'Öfke veya Şaşkınlık (İroni) gibi duyguların inandırıcılığını artırır', 'Cümlelerin sonunu bir noktaya "yumuşak" indirmeyi öğretir'],
    mistakes: ['Kaydırma yaparken çok abartıp şarkı söylüyormuş veya alay ediyormuş gibi (Şiveli) bir algı yaratmak'],
    phrase: null,
    steps: [
      '1. İtfaiye Sireni: Burnunuzdan nefes alın, dudakları "O" yapıp en ince sesten (Kafa) en kalın sese (Göğüs) hiç kesintiye uğramadan "Uuuuuuuu" diyerek inin.',
      '2. Yukarı Kaydırma: Şaşırmış gibi "Yaaa-Huuu?" derken sesi alttan alıp çok yukarıya kaydırın.',
      '3. Kelime İçi Glissando: "İna-Nıl-Maz" kelimesini söylerken, her hecede merdiven basamağı atlar gibi duraksamayın; heceleri tıpkı bir kaydırak gibi birbirine bağlayarak (İnanıııılmaaaaz) söyleyin.',
      '4. Düşen Melodi (Drop): Haber spikerlerinin yaptığı gibi, cümlenin son kelimesinde (noktaya gelirken) sesi yukarıdan aşağıya yavaşça (Glissando ile) sündürerek bitirin.'
    ],
    variations: [
      '🔄 Soru-Cevap Melodisi: "Geldin mi? (Yukarı glissando)" sorusuna "Geldim. (Aşağı glissando)" cevabını vererek sesin sadece yön (Pitch direction) değiştirerek bile anlam yarattığını deneyimleyin.'
    ],
    tip: '💡 Robotlar (Siri) heceleri "ayrı ayrı" (Staccato) okur. İnsanları robotlardan ayıran şey heceleri birbirine bir nehir gibi bağlamasıdır (Legato/Glissando).',
    related: [216, 223]
  },
  {
    id: 220, slug: 'ses-rengi-timbre-degistirme', cat: 'perde', emoji: '🎨', title: 'Ses Rengi (Timbre) Değiştirme',
    dur: '10 dk', level: 'İleri', freq: 'Haftada 2 gün',
    desc: 'Aynı perdeden (Örn: Do notası) konuşmanıza rağmen sesinizin "Açık/Parlak" veya "Kapalı/Boğuk" çıkmasını kontrol eden rezonans ayarları.',
    benefits: ['Ortama göre sesinizi kamufle etmenizi (Çocuklarla parlak, toplantıda koyu ses) sağlar', 'Radyo programcıları ve seslendirme (Dublaj) sanatçıları için temel yetenektir', 'Kendi doğal, en çekici (Signature) ses renginizi bulmanızı sağlar'],
    mistakes: ['Ses rengini değiştireceğim diye gırtlağı sıkıştırıp (Kermit kurbağa gibi) komik ve yapay bir ses çıkarmak'],
    phrase: null,
    steps: [
      '1. Açık (Parlak) Renk: Ağzınızı yayvanlaştırın (Gülümseyin). Dilinizin ucunu alt dişlerinize yaslayın. Sesi burnunuza doğru (Maskeye) yönlendirip "Merhaba" deyin. Sesiniz incelecek ve çok neşeli/genç (Tiz) çıkacaktır.',
      '2. Koyu (Karanlık) Renk: Dudaklarınızı "O" şekline getirin, çenenizi aşağı indirin, esner gibi damak (Arka) kubbesini kaldırın ve sesi göğsünüze indirin "Merhaba". Sesiniz yaşlı, otoriter ve boğuk (Pes) çıkacaktır.',
      '3. Geçiş Oyunu: Aynı cümleyi ("Bugün hava çok güzel") bir cıvıl cıvıl çocuk gibi (Açık renk), bir de bilge bir yaşlı gibi (Koyu renk) art arda söyleyin.',
      '4. İdeal Nötr (Balans): Şimdi ikisinin tam ortasını bulun. Ne çok gülümseyen ne de çok boğuk, tam bir İstanbul Türkçesi "Spiker Rengi".'
    ],
    variations: [
      '🔄 Ağız Boşluğu Büyüklüğü: Keman küçüktür tiz (parlak) çalar, kontrbas büyüktür kalın (koyu) çalar. Sesinizin rengi ağız boşluğunuzun büyüklüğüne bağlıdır. Çeneyi açmak sesi koyulaştırır.'
    ],
    tip: '💡 Timbre (Ses Rengi) sizin "Ses İmzası"dır. Onu değiştirmek demek, enstrümanınızın (Yüz, Çene, Göğüs boşluğu) şeklini değiştirmek demektir.',
    related: [224, 234]
  },
  {
    id: 221, slug: 'sert-yumusak-atak', cat: 'perde', emoji: '🔨', title: 'Sert ve Yumuşak Atak (Vocal Onset)',
    dur: '5 dk', level: 'Orta', freq: 'Metin Okurken',
    desc: 'Bir kelimenin ilk harfine ses tellerini birbirine aniden çarptırarak (Sert Atak) veya havayla yumuşakça (Yumuşak Atak) başlama kontrolü.',
    benefits: ['Ses teli nodülünün ve poliplerinin BİR NUMARALI düşmanı olan "Sert (Glottal) Atak" krizini durdurur', 'Otoriter cümlelerde sert atakla (Güç), sevgi dolu cümlelerde yumuşak atakla (Şefkat) giriş yapmayı sağlar'],
    mistakes: ['Her cümleye, özellikle sesli harfle (A, E, I, İ, O, Ö, U, Ü) başlayan kelimelere sanki öksürür gibi (Tık!) şiddetli vurarak başlamak'],
    phrase: '"Anne, araba aldım."',
    steps: [
      '1. Sert Atak (Yanlış): "Anne" derken A harfine öksürür gibi sert bir vurguyla (Gırtlağı sıkarak) başlayın. Boğazınızın yorulduğunu hissedeceksiniz.',
      '2. Yumuşak Atak (Doğru): Şimdi kelimenin başına görünmez bir "H" harfi koyun. "hAnne" der gibi. Önce çok hafif bir hava (nefes) çıksın, ses onun üstüne kayarak başlasın. Asla gırtlakta vurma hissi (Tık) olmamalı.',
      '3. Nefesli Başlangıç (Aspirate Onset): Marilyn Monroe tarzı, önce sadece nefes sonra ses. "h...h...harika" deyin.',
      '4. Cümle Başı Pratiği: Tüm metinlerin ilk kelimelerine, özellikle "E" ve "A" ile başlayanlara (Örn: Evet, Anladım) görünmez H koyarak başlama (Yumuşatma) egzersizi yapın.'
    ],
    variations: [
      '🔄 Glottal Şok Testi: "Ah-Ah-Ah-Ah" diyerek kesik kesik bağırın. Boğazınızın nasıl ağrıdığını fark edin. İşte gün içinde heyecanla konuşurken kelime başlarına böyle vuruyorsunuz (Sert atak). Bunu "Ha-Ha-Ha" ile yumuşatın.'
    ],
    tip: '💡 Konuşurken ses kısıklığı (Yorulma) yaşayanların %80\'i nefes alıp kelimeye "güm!" diye (Glottal Atak) dalış yaptıkları için ses tellerini tokuştururlar. Sesi her zaman havayla (Nefesle) başlatın.',
    related: [223, 231]
  },
  {
    id: 222, slug: 'crescendo-decrescendo-pratigi', cat: 'perde', emoji: '🔉', title: 'Crescendo - Decrescendo (Ses Şiddeti)',
    dur: '10 dk', level: 'Orta', freq: 'Haftada 3 gün',
    desc: 'Ses şiddetini (Volüm/Desibel) tekdüze tutmak yerine fısıltıdan çığlığa (Crescendo) ve çığlıktan fısıltıya (Decrescendo) kademeli kontrol etme becerisi.',
    benefits: ['Sunumları monotonluktan ve uyku getirici etkiden kurtararak "Dinamik" hale getirir', 'Dikkat dağıldığında izleyicinin dikkatini "aniden sesi kısarak" (Fısıltı efekti) geri toplamayı sağlar', 'Nefes kapasitesini ve kontrolünü devasa oranda artırır'],
    mistakes: ['Sesi yükseltirken (Crescendo) diyaframı kullanmak yerine boğazı sıkıp bağırmaya (Şiddete) başvurmak'],
    phrase: null,
    steps: [
      '1. Vokal Sireni: Düz ve uzun bir "Aaaaa" sesi çıkarın. En sessiz (fısıltı) halinden başlayıp, saniyeler içinde giderek gürleştirin (Bağırmadan hacmi büyütün) ve tekrar sessizliğe dönün. (Decrescendo).',
      '2. Sayı Sayma (Basamaklar): 1\'den 10\'a kadar sayın. 1 (Fısıltı), 5 (Normal Ses), 10 (Sınıfa seslenen gür ses). Sonra 10\'dan 1\'e geri düşün.',
      '3. Metin İçi Dalga: Kısa bir metni (Örn: "Bir zamanlar ormanda...") okurken her cümlenin başında sesin yüksekliğini değiştirin.',
      '4. Ani Patlama ve Sönme: Çok kısık sesle gizemli bir şey anlatırken aniden BUM! diye sesi yükseltin (Dramatik efekt).'
    ],
    variations: [
      '🔄 Radyo Düğmesi: Karşınıza birini (Çocuğunuzu veya eşinizi) alın. O elini yukarı kaldırdıkça sesinizi yükseltin, elini aşağı indirdikçe sesinizi kısın (Görsel komutla kontrol).'
    ],
    tip: '💡 Topluluk önünde konuşurken herkes "Bağırırsam" dikkat çekerim sanır. Oysa gürültülü bir ortamda, birden fısıltıyla (çok yavaş ve kısık) konuşmaya başlarsanız HERKES ne dediğinizi duymak için susar ve size doğru eğilir.',
    related: [218, 227]
  },
  {
    id: 223, slug: 'monoton-ses-duzeltme', cat: 'perde', emoji: '📉', title: 'Monoton Ses Düzeltme (12 Adım)',
    dur: '15 dk', level: 'Orta', freq: 'Her gün',
    desc: 'Robot gibi düz, duygusuz ve tekdüze (Monoton) konuşan kişilerin sesini, zengin bir inip-çıkma (Enternasyon) melodisine kavuşturma antrenmanı.',
    benefits: ['Karşı tarafın dinlerken sıkılmasını (uyumasını) %100 önler', 'Konuşmacının zeki, enerjik ve "konuya hakim" algılanmasını sağlar', 'Söylenilen kelimelerin sadece %7 değil, %93\'lük duygu kısmını aktarır'],
    mistakes: ['Melodi katacağım diyerek haber spikerlerini kötü taklit edip "Suni (Yapay)" bir haber okuma tonuna (Aşırı dalgalı) geçmek'],
    phrase: null,
    steps: [
      '1. Kendi Monotonluğunu Bulma: Normalde nasılsanız bir ses kaydı alın. Cümle sonlarının nasıl tek düze ve "hı-hı" şeklinde bittiğini dinleyin.',
      '2. Vurgu Kaydırma (Pitch Shift): "BUGÜN okula gittim", "Bugün OKULA gittim", "Bugün okula GİTTİM." Her kelimeyi sırayla vurgulayarak (Sesi inceltip güçlendirerek) anlamın nasıl değiştiğini görün.',
      '3. Renk Katma (Duygu): Cümleleri tamamen abartılı tiyatro karakteri gibi okuyun. (Bir kral gibi, bir palyaço gibi). Abartı, monotona alışmış beynin zincirini kırar.',
      '4. Virgül (Yükseliş), Nokta (Düşüş): Virgüllerde sesi bir asılı bırakın (Soru sorar gibi yukarıda), noktalarda ise sesi tamamen yere (Pes) indirin.'
    ],
    variations: [
      '🔄 Yabancı Dil Melodisi: Anlamını hiç bilmediğiniz Fransızca veya İtalyanca bir cümleyi dinleyip o dildeki harika "şarkı gibi" melodiyi kendi Türkçe kelimelerinize giydirmeye çalışın (Gibberish oyunu).'
    ],
    tip: '💡 Monotonluk (Tekdüzelik), kelimelerin beyninizden çok hızlı, ama diyaframınızdan çok zayıf çıkmasının sonucudur. Yani "Geçiştirme" eylemidir. Konuşmanıza sadece virgüllerde 1 saniye es vererek bile monotonluğu anında kırabilirsiniz.',
    related: [219, 222]
  },
  {
    id: 224, slug: 'gece-sesi-olusturma', cat: 'perde', emoji: '🌙', title: 'Karanlıkta Ses: Gece Sesi Oluşturma',
    dur: '10 dk', level: 'İleri', freq: 'Haftada 2 gün',
    desc: 'Gece FM radyolarında duymaya alışkın olduğumuz; derin, boğuk (Pes), yavaş ve çok sakinleştirici o efsanevi (Midnight) ses rengini (Timbre) bulma tekniği.',
    benefits: ['Podcast yayıncıları, şiir okuyanlar ve YouTube kanalları için dinleyiciyi büyüleyen (Hipnotik) bir aura oluşturur', 'Ses telleri yorgunken sesi dinlendirerek (pes kullanarak) konuşma sağlar', 'İkili ilişkilerde ve flörtte inandırıcılığı/çekiciliği (Karizmayı) artırır'],
    mistakes: ['Sesimi kalınlaştıracağım diyerek çeneyi göğse bastırıp "Yapay mafya" sesi çıkarmak (Bu ses tellerinizi zedeler ve çok sahte durur)'],
    phrase: '"Bu gece İstanbul çok sessiz..."',
    steps: [
      '1. Fiziksel Gevşeme (Drop): Gece sesi gergin vücuttan çıkmaz. Omuzlarınızı, boynunuzu ve en önemlisi ÇENENİZİ tamamen serbest (sarkık) bırakın.',
      '2. Gırtlak İndirme (Yawn): İçten bir esneme başlatın. Adem elmanızın (gırtlağın) aşağı indiğini hissedeceksiniz. O aşağıdayken "Ho" deyin. Sesiniz birden mağaradan gelir gibi toklaşacaktır.',
      '3. Tempo Düşürme: Kelimeler arasındaki boşluğu (Esleri) normalden 3 kat daha uzun tutun. Sessizliğin kelimelerden daha güçlü konuşmasına izin verin.',
      '4. Göğüs Rezonansı: Elinizi göğsünüze koyun. Konuşurken nefesi kafaya değil, göğüs tahtanıza çarptırarak (Titreşimi göğüste hissederek) şiir/metin okuyun.'
    ],
    variations: [
      '🔄 Yakın Mikrofon (Proximity Effect): Eğer mikrofon kullanıyorsanız, mikrofona çok yaklaşın (3-5 cm) ve sesinizin şiddetini fısıltıya yakın bir seviyeye indirin. Mikrofon pes (kalın) frekansları devasa büyütecek ve size o sinematik derinliği verecektir.'
    ],
    tip: '💡 Gece sesi (FM Voice) kalınlık değil, "Genişlik" meselesidir. Ağız boşluğunu bir mağara gibi geniş (Esneme pozisyonu) yaparsanız, sesiniz doğal olarak karanlık (Dark Timbre) ve derin çıkar.',
    related: [220, 226]
  },
  {
    id: 225, slug: 'otorite-sesi-olusturma', cat: 'perde', emoji: '👔', title: 'Otorite Sesi (CEO Profili) Oluşturma',
    dur: '10 dk', level: 'İleri', freq: 'Toplantı Öncesi',
    desc: 'İş hayatında, yönetim kurullarında veya kriz anlarında liderlik, güven, kesinlik ve itaat uyandıran "Yönetici (Executive)" ses profiline geçiş rutini.',
    benefits: ['Takım arkadaşlarının veya dinleyicilerin size itiraz etme (sözünüzü kesme) refleksini baskılar', 'Ciddiye alınmama, "Çocuk gibi" duyulma sorunlarını kökünden çözer', 'Kriz anlarında paniği yatıştıran stabil bir duvar örer'],
    mistakes: ['Otorite kurmak için masaya yumruk vurmak, bağırmak veya kaşları çatıp agresifleşmek (Otorite bağırmak değil, sesin "Tokluğu"dur)', 'Cümle sonlarında sesi soru sorar gibi yukarı bükmek (Uptalk)'],
    phrase: '"Bu projeyi cuma gününe kadar bitirmeliyiz."',
    steps: [
      '1. Downward Inflection (Düşen Bükülme): Bir liderin cümlesi ASLA havada (soru gibi) asılı kalmaz. Cümle biterken (noktada) sesinizin perdesini mutlaka ve kesin olarak aşağı doğru (Pes\'e) düşürün. (Bitiş Kesinliği).',
      '2. Hız Kesme (Pacing): Liderler acele etmez. Hızlı konuşmak "Panik, beni dinlemezlerse diye korkuyorum" mesajı verir. Kelime hızınızı %20 yavaşlatın, aralara kararlı duraklar (Pause) koyun.',
      '3. Optimal Pitch (Güvenli Perde): Kendi ses sınırlarınız içinde (Bağırmadan) çıkarabileceğiniz en tok (Pes) ve rahat rezonansı (Göğüs sesi) kullanın. Sesinizi kafadan (Tiz) değil, mideden (Diyafram) çıkarın.',
      '4. Minimal Mimik: Konuşurken kafanızı onaylar gibi sürekli sallamayın. Başınızı sabit tutun ve sadece dudaklarınızla konuşun (Ciddiyet).'
    ],
    variations: [
      '🔄 Karar Cümlesi Provası: Aynaya bakarak "Kararım kesin", "Sizi anlıyorum ancak...", "Toplantı bitmiştir" gibi karar cümlelerini, gözünüzü hiç kırpmadan ve sesi en sona doğru yavaşça ağırlaştırarak söyleyin.'
    ],
    tip: '💡 Dünyanın en iyi liderleri (Örn: Barack Obama, Morgan Freeman tarzı lider rolleri) konuştuklarında sadece kulaklara değil, göğüs kafesinize hitap ederler. Onlar konuşurken odaya bir "ağırlık" çöker. Bunun sırrı yavaşlık, net artikülasyon ve düşen cümle sonlarıdır.',
    related: [226, 222]
  },
  {
    id: 226, slug: 'sicak-samimi-ses', cat: 'perde', emoji: '☕', title: 'Sıcak/Samimi Ses (Dost Sesi) Geliştirme',
    dur: '5 dk', level: 'Orta', freq: 'Gerektiğinde',
    desc: 'Otorite sesinin (CEO) tam zıttı olan; öğretmenler, psikologlar, satış danışmanları ve sosyal ortamlarda güven, empati ve cana yakınlık uyandıran ses profili.',
    benefits: ['İnsanların size sırlarını ve dertlerini açmasını sağlayacak güven duvarını (Aura) inşa eder', 'Çok sert, soğuk veya "Ukala" algılanan kişilerin sosyal kabulünü anında artırır', 'Satış ve müşteri ilişkilerinde "İkna" oranını patlatır'],
    mistakes: ['Samimi olacağım diyerek çocuk (bebek) gibi ince ve tiz (Yapay) bir ses tonu kullanmak'],
    phrase: '"Seni çok iyi anlıyorum, haklısın."',
    steps: [
      '1. Dudak Gülümsemesi (The Smile Effect): Sesi sıcaklaştırmanın TEK VE EN GÜÇLÜ biyolojik kuralı konuşurken gülümsemektir. Dudaklar gülümseme pozisyonundayken (Yayvan) çıkan her ses frekans olarak kulağa "Zararsız ve Dost" gelir.',
      '2. Yukarı Bükülme (Uptalk/Empathy): Cümle sonlarında sesi hafifçe ve yumuşakça havada asılı bırakın (Soru sorar gibi). Bu karşı tarafa "Söz hakkı senin, seni dinliyorum" mesajı verir.',
      '3. Nefesli Ses (Breathy Tone): Otorite sesindeki "Netlik" yerine kelimelerin etrafına biraz havamsı (Nefesli/Fısıltılı) bir yumuşaklık ekleyin. (H harfi etkisi).',
      '4. Kafa-Ağız Rezonansı: Sesi göğüsten (tok ve ağır) çıkarıp, burna ve yüze (Maskeye - Daha parlak ve neşeli) doğru çekin.'
    ],
    variations: [
      '🔄 Yansıtma (Mirroring): Karşınızdaki kişi çok üzgün ve yavaş konuşuyorsa, siz de ses temponuzu ve renginizi onun hüznüne (Samimiyet) uygun olarak düşürün. Neşeliyse neşeli yapın. Sesin "bukalemun" özelliğini kullanın.'
    ],
    tip: '💡 Telefonda konuştuğunuz kişinin yüzünü görmeseniz bile gülümsediğini "DUYABİLİRSİNİZ". Ses, yüz mimiklerinin akustik bir yansımasıdır. Müşteri hizmetlerinde telefonu açarken aynaya bakıp gülümseme kuralı bu biyolojik gerçeklikten gelir.',
    related: [225, 220]
  },
  {
    id: 227, slug: 'enerjik-motivasyon-sesi', cat: 'perde', emoji: '⚡', title: 'Enerjik/Motivasyon Sesi Profili',
    dur: '10 dk', level: 'Orta', freq: 'Sunum Öncesi',
    desc: 'Eğitmenler, YouTube içerik üreticileri, motivasyon konuşmacıları (Örn: TEDx) için kitleleri harekete geçiren, heyecanlandıran yüksek oktanlı ses profili.',
    benefits: ['Dinleyicinin enerjisini (Adrenalinini) anında yukarı çeker, uyuklayan salonu uyandırır', 'Videolarda (Vlog/YouTube) ekranda tutma (Retention) süresini uzatır', 'Tutku ve inanç (Ben bu konuya aşığım) hissini karşıya geçirir'],
    mistakes: ['Enerjiyi "BAĞIRMAK" zannedip ilk 5 dakikada ses tellerini (Nodül) patlatmak ve dinleyiciyi baş ağrısıyla rahatsız etmek'],
    phrase: '"İşte bugün her şey değişecek!"',
    steps: [
      '1. Diyafram Patlaması: Normal konuşmanın 2 katı nefes (Basınç) kullanmanız gerekecek. Sesi gırtlaktan değil, göbek deliğinden (Karnınızı içeri çekerek) ittirin.',
      '2. Staccato (Kesik Kesik) Vurgular: Kelimeleri birbirine bağlamak (Glissando) yerine, önemli kelimelere ÇEKİÇ GİBİ vurun (Staccato). "Bu. Çok. Önemli." (Aradaki esler gücü artırır).',
      '3. Tiz Rezonans (Maske): Sesi kafanıza ve burnunuza doğru çıkartıp parlatın. Göğüs sesi uyuşuktur, maske sesi ise uyanık ve fırlatıcıdır.',
      '4. Beden Dili Yakıtı: Enerjik bir ses, hareket etmeyen bir bedenden çıkamaz! Konuşurken kollarınızı geniş açın, ayaktaysanız adım atın, el çırpın. Vücudun kinetik enerjisi sese yansıyacaktır.'
    ],
    variations: [
      '🔄 Hız Değişimi (Tempo Rollercoaster): Enerji, hep çok hızlı konuşmak değildir. Cümleyi çok hızlı (Taramalı tüfek gibi) heyecanla anlatıp, aniden durup çok YAVAŞ bir vurguyla bitirmek (Kontrast), pür enerjinin ta kendisidir.'
    ],
    tip: '💡 Gerçek enerji, desibel (ses yüksekliği) değil, RİTİM (Tempo) ve VURGU meselesidir. Sesinizi yükseltmeden, sadece kelimeleri çok keskin, net (Artiküle) ve ritmik söyleyerek de salonu ayağa kaldırabilirsiniz.',
    related: [222, 228]
  },
  {
    id: 228, slug: 'fisilti-ile-etkili-konusma', cat: 'perde', emoji: '🤫', title: 'Fısıltı İle İkna (Stage Whisper)',
    dur: '5 dk', level: 'İleri', freq: 'Haftada 1 gün',
    desc: 'Tiyatro aktörlerinin sahnede sır verirken en arka sıraya duyurduğu "Destekli Fısıltı" veya ikili ilişkilerde beyni hipnotize eden ASMR (Binaural) fısıltı tekniği.',
    benefits: ['Çok gürültülü (Kaotik) bir toplantıda herkesin aniden susup sizi dinlemesini sağlar', 'Mesaja inanılmaz bir "Önem, Sır, Gizem" katarak merak uyandırır', 'Karşı tarafın bilinçaltına (Güvenlik bölgesi) fısıldayarak ikna gücünü maksimuma çıkarır'],
    mistakes: ['Fısıldarken gırtlağı tamamen sıkıştırıp nefesi kesmek (Doğrusu boğazın tamamen açık ve gevşek olmasıdır)', 'Sadece dudak oynatarak (Nefessiz) fısıldayıp duyulmamak'],
    phrase: '"Sana bir sır vereceğim..."',
    steps: [
      '1. Havanın Gücü (Diyafram): Normal konuşmadaki ses tellerinin titreşimini (Motoru) KAPATIN. Ancak diyafram basıncını (Havayı) normalden 3 kat AÇIN.',
      '2. Ünsüz Şiddeti: Sadece "Hava (Nefes)" çıkardığınız için kelimelerin anlaşılması adına P, T, K, Ç, S, Ş gibi ünsüz harfleri normalin 5 katı ABARTARAK ve patlatarak söyleyin.',
      '3. Boğaz Açıklığı (Esneme): Fısıldarken boğazınız esner gibi kocaman açık (Geniş) olsun. Eğer fısıldarken boğazınız ağrıyorsa yanlış (sıkıştırarak) yapıyorsunuzdur.',
      '4. Göz Teması Kilidi: Fısıltı bir fiziksel yakınlaşma eylemidir. Fısıldarken karşı tarafın gözünün içine, hatta "Kaşlarının arasına" (Üçüncü göz) odaklanıp hafifçe öne eğilin.'
    ],
    variations: [
      '🔄 ASMR Yakınlığı: Mikrofonda veya telefon görüşmesinde sadece fısıltı ve bol nefes "Hhhh" sesleri kullanarak karşı tarafta karıncalanma (ASMR) etkisi (Derin rahatlama) yaratın.'
    ],
    tip: '💡 Beynimiz biyolojik olarak "Yüksek Sesi" tehdit, "Fısıltıyı" ise güvenli liman olarak algılar. Birine bağırarak dediğinizi yaptıramazsınız (Savunmaya geçer), ancak fısıldayarak ona her fikri kabul ettirebilirsiniz.',
    related: [222, 224]
  },
  {
    id: 229, slug: 'ses-maskesi-mask-resonance', cat: 'perde', emoji: '🎭', title: 'Ses Maskesi (Mask Resonance)',
    dur: '10 dk', level: 'Orta', freq: 'Her gün',
    desc: 'Sesi yutan göğüs ve yoran boğaz boşluğundan çıkarıp, yüz kemiklerinde (Elmacık, burun, sinüs) titreştirerek "Zil" gibi parlak ve kilometrelerce uzağa giden (Forward Placement) sesi bulma.',
    benefits: ['Sesinizin çok cılız (duyulmuyor) sorununu bağırmadan çözer', 'Gırtlak ve boğaz ağrısını %100 sıfırlar (Çünkü yük kemiklere biner)', 'Kalabalık ortamlarda sesinizin arka plandaki gürültüyü delip (Piercing) geçmesini sağlar'],
    mistakes: ['Sesi maskeye (yüze) alacağım diye tamamen genizden (Miyavlayan kedi/Fran Drescher gibi) konuşup kulak tırmalamak'],
    phrase: null,
    steps: [
      '1. Niyang (Cadı Sesi): Burun ve elmacık kemiklerinizin olduğu yeri (Göz altlarınızı) maske gibi düşünün. Abartılı, kötü bir cadı gibi, genizden "Niyyyyyaaaaang" sesi çıkarın. Burnunuzun titreştiğini hissedin.',
      '2. Dudak Trili + Mırıldanma: Dudaklarınızı titreterek "Mmmmm" (Humming) yapın. İşaret parmaklarınızı burun kanatlarınıza koyun. Eğer burun kanatlarınız karıncalanıyorsa ses maskededir (Öndedir).',
      '3. Ng-Ah Geçişi: "Ng" (Sing kelimesindeki ng gibi) deyin, tınlamayı burunda tutun, sonra aniden ağzınızı açıp "Aaa" deyin ama o burun/yüz titreşimi asla kaybolmasın ("Ngggggg-Aaaaaa").',
      '4. Okuma: Tekerlemeleri burnunuzun ucunda (Dudaklarda ve yüzde) bir titreşim topu varmış gibi düşünerek okuyun.'
    ],
    variations: [
      '🔄 Yanak Şişirme (Tiz Maske): Yanaklarınızı balon gibi hava ile şişirin. Dudaklarınızı çok hafif aralayarak incecik bir hava ve tiz bir "Uuuu" çıkarın. Sesin yanak duvarlarınıza çarptığını fark edin.'
    ],
    tip: '💡 Dünyaca ünlü şarkıcılar stadyumlarda "bağırdıkları" için duyulmazlar. Sesi gırtlaktan (geriden) alıp, yüz kemiklerine (Maskeye/Öne) fırlattıkları için sesleri lazer ışını gibi kalabalığı delip geçer.',
    related: [230, 216]
  },
  {
    id: 230, slug: 'twang-teknigi', cat: 'perde', emoji: '🦆', title: 'Twang Tekniği (Ses Keskinliği)',
    dur: '5 dk', level: 'İleri', freq: 'İhtiyaç Halinde',
    desc: 'Gırtlak kapağını (Epiglottik huni) daraltarak sesin akustik enerjisini (Keskinliğini ve Metalikliğini) efor sarf etmeden %300 artıran efsanevi vokal tekniği.',
    benefits: ['Dışarıda, pazarda veya stadyumda sesinizin zarar görmeden karşıya ulaşmasını (Duyulmasını) sağlar', 'Çok boğuk ve koyu (Anlaşılmaz) sesleri anında netleştirir', 'Ses teli yorgunluğunu (Fatigue) anında tedavi eder'],
    mistakes: ['Twang yaparken boğaz kaslarını (Boyun damarlarını) sıkarak gırtlağı boğmak (Twang boyun değil, epiglottis kasıdır)'],
    phrase: null,
    steps: [
      '1. Ördek Sesi: En temel Twang bulma yöntemi "Ördek (Donald Duck)" veya "Kötü Cadı" taklidi yapmaktır. Çok abartılı, parlak, ince ve köşeli bir "Vaaak Vaaak" deyin.',
      '2. Çocuk Ağlaması: Tıpkı şımarık bir çocuk gibi "Yaaaaa Anneeeee" diyerek sesi geniz ve üst damak arasına (Metalik bir yere) sıkıştırın.',
      '3. Gülerken Konuşma: Gevşek yanaklarla çıkan pes (boğuk) sesi silin. Kocaman bir gülümsemeyle (Kasları gererek) aynı kelimeyi ("Merhaba") söyleyin. Ses birden parlaklaşacak ve keskinleşecektir.',
      '4. Adaptasyon: Ördek (Twang) sesinizi alın, yavaşça ve kademeli olarak (Dial-down) normal konuşma sesinize doğru "Hafifletin". Normal sesinizin içine sadece %10 oranında (Tuz eker gibi) Twang katın.'
    ],
    variations: [
      '🔄 Bebek Kedisi (Miyav): Twang hissini bulamıyorsanız, çok çaresiz, ince ve parlak bir "Miyavvvv" sesi çıkarın. İşte o keskin (cızırtılı) frekans Twang\'dır.'
    ],
    tip: '💡 Country müzik şarkıcılarının sesi "Twang" doludur. Konuşmacı için Twang, elindeki bıçağı (Sesi) bileylemek (Keskinleştirmek) demektir. Ses boğuksa (kesmiyorsa) biraz Twang eklersiniz.',
    related: [229, 217]
  },
  {
    id: 231, slug: 'ses-ekonomisi-vocal-economy', cat: 'perde', emoji: '🔋', title: 'Ses Ekonomisi (Vocal Economy)',
    dur: 'Gün Boyu', level: 'İleri', freq: 'Her Gün',
    desc: 'Çağrı merkezi çalışanları, öğretmenler ve spikerler için günde 8 saat konuşup gün sonunda ses tellerini "sıfır yorgunluk" ile kapatma sanatı.',
    benefits: ['Ses tellerindeki sıvı kaybını (Sürtünmeyi) ve nodül oluşumunu kökten engeller', 'Akşam saatlerindeki o "çatallı" ve "acıyan" boğaz hissini bitirir', 'Maksimum Akustik = Minimum Efor (Optimal Ses Teli Kapanması)'],
    mistakes: ['Gürültülü ortamı bastırmak için volümü artırmak (Ses kredisini 1 saatte bitirmek)', 'Sürekli boğaz temizleme refleksi (Öksürük) ile ses tellerini zımparalamak'],
    phrase: null,
    steps: [
      '1. Kural 1 (Asla Bağırma): Ortam ne kadar gürültülü olursa olsun, sesinizin şiddetini (Volüm) artırmak yerine, hızını (Tempo) düşürüp heceleri belirginleştirin (Artikülasyon).',
      '2. Kural 2 (Yudum Yudum Su): Su ses teline direkt gitmez, mideye gider. Vücudun onu sese pompalaması 2 saat sürer. Bu yüzden sabah kalkar kalkmaz ve gün boyu azar azar su içerek içten (Sistemik) yağlama yapın.',
      '3. Kural 3 (Görünmez Nefes): Konuşurken sadece cümlenin başında değil, virgüllerde burnunuzdan değil, "AĞZINIZDAN" yarım ve görünmez nefesler (Catch breath) kaparak depoyu asla boş bırakmayın.',
      '4. Kural 4 (Akşam Mırıldanması): Mesai bittikten sonra arabada veya evde 5 dakika boyunca en kalın (Pes) sesten "Mmmmmm" yaparak (Vocal Fry) şişen (Ödem toplayan) ses tellerini sakinleştirin.'
    ],
    variations: [
      '🔄 Yutkunma ile Temizlik: Boğazınıza gıcık geldiğinde "Hıhım!" diye öksürüp temizlemeyin. Bir yudum su için veya sadece sertçe yutkunun. Yutkunmak gırtlağı mekanik olarak temizler.'
    ],
    tip: '💡 İnsan sesi bir banka hesabı gibidir. Sabah 10.000 krediniz vardır. Eğer fısıldarsanız 10, normal konuşursanız 50, bağırırsanız 500 kredi harcarsınız. Ekonomik (Sakin ve Diyaframdan) harcamayan, akşam iflas eder.',
    related: [221, 230]
  },
  {
    id: 232, slug: 'belting-teknigi-konusma', cat: 'perde', emoji: '📢', title: 'Belting Tekniği (Konuşma Uygulaması)',
    dur: '5 dk', level: 'İleri', freq: 'Nadir (Gerektiğinde)',
    desc: 'Şarkıcıların yüksek (tiz) notalara "Gür" göğüs sesiyle çıktığı Belting tekniğini, kürsüden kitlelere mikrofon bozulduğunda hitap etme (Bağırma sanatı) olarak uyarlama.',
    benefits: ['Mikrofonsuz bir alanda (Protesto, miting, kriz anı) ses tellerini yırtmadan 1000 kişiye sesinizi (Mix Ses) duyurmayı sağlar', 'Göğüs ve kafa sesini harmanlayarak yıkılmaz (Sert) bir vokal gücü yaratır'],
    mistakes: ['Belting yapacağım diyerek gırtlağı ve boyun damarlarını sıkarak "Gerçekten Bağırmak" (Bu sese anında kanama/nodül yaptırır)'],
    phrase: '"Beni duyabiliyor musunuz?!"',
    steps: [
      '1. Zemin (Destek): Bacaklarınızı omuz genişliğinde açın, dizleri hafif kırın. Belting gücünü (Bağırmayı) asla boğazdan değil, karın, sırt ve bacak kaslarından alır. Yere sağlam basın.',
      '2. Açık Boğaz (Yawn): Boğazınızı tam bir esneme pozisyonunda, yumuşak damağınızı olabildiğince yukarıda (Açık) tutun.',
      '3. Çağırma Sesi (Calling): Sokakta çok uzaktaki bir arkadaşınıza seslenir gibi "Hey! Buraayaaa baak!" diye çağırın (Calling Voice). Bu doğal bir belting\'dir.',
      '4. Maskeye Fırlatma: Göğüsten aldığınız o kalın ve güçlü enerjiyi, kafaya değil, direkt yüz kemiklerinize (Maskeye/Öne) doğru fırlatın (Projeksiyon).'
    ],
    variations: [
      '🔄 Gülerek Belting: Belting yaparken yüzünüz korkmuş veya sinirli değil, "Kocaman gülümsüyor (Elmacık kemikleri havada)" olsun. Gülümseme üst rezonatörleri (Twang) açarak sesi lazer gibi öne atar.'
    ],
    tip: '💡 Belting, "Kontrollü ve Destekli Bağırma"dır. Diktatörler veya tarihi hatipler saatlerce bu sesle konuşup kısılmazlar çünkü güç boğazlarında değil, gövde (Diyafram/Core) kaslarındadır.',
    related: [229, 227]
  },
  {
    id: 233, slug: 'ses-ve-duygu-baglantisi', cat: 'perde', emoji: '🧠', title: 'Ses ve Duygu Bağlantısı (Akustik Psikoloji)',
    dur: '10 dk', level: 'Orta', freq: 'Prova Öncesi',
    desc: 'Temel duyguların (Öfke, Neşe, Üzüntü, Korku) sesin 4 fizyolojik parametresini (Perde, Hız, Şiddet, Ton) nasıl anında değiştirdiğine dair oyunculuk (Diksiyon) tablosu.',
    benefits: ['Hikaye, masal veya sesli kitap okurken sadece kelimelerle değil, "Sesin Psikolojisiyle" dinleyiciyi o duygunun içine çeker', 'Yalan söylerken veya heyecanlıyken sesin bizi ele veren akustik kaçaklarını kontrol altında tutar'],
    mistakes: ['Üzücü bir haberi, spiker alışkanlığıyla enerjik, parlak ve hızlı (Neşeli parametrelerle) okumak'],
    phrase: null,
    steps: [
      '1. Neşe/Mutluluk: Parametreleri: Tiz perde (İnce), Hızlı tempo, Yüksek volüm, Yayvan dudak (Açık renk). Aynada zıplayarak çok neşeli bir haberi okuyun.',
      '2. Üzüntü/Empati: Parametreleri: Pes perde (Kalın), Çok yavaş tempo, Düşük volüm, Dar/Aşağı bakan dudak (Koyu renk). Omuzlarınızı düşürerek trajik bir metni okuyun.',
      '3. Öfke/Otorite: Parametreleri: Orta-Pes perde, Sert ve Kesik (Staccato) ataklar, Yüksek Volüm. Çenenizi sıkarak "Bunu nasıl yaparsın!" deyin.',
      '4. Korku/Gizem: Parametreleri: Tiz perde, Düzensiz nefes, Fısıltılı/Titreşimli (Vibrato) volüm. Nefes nefese kalarak "Kim var orada?" deyin.'
    ],
    variations: [
      '🔄 Nötrleştirme (Poker Ses): Tüm duygulardan arınmış, sadece bilgi aktaran (Haber spikeri veya Yargıç) bir "Nötr (Ortalama Perde, Ortalama Hız)" ses tonuyla (Poker Voice) konuşmayı pratik edin.'
    ],
    tip: '💡 Diksiyonda (Oyunculukta) duygu "taklit" edilmez, duygunun "akustik matematiği" uygulanır. Dudaklarınızı büzüp (Koyu), sesinizi çok yavaşlatıp, pes perdeden konuşursanız isteseniz de "Neşeli" duyulamazsınız.',
    related: [214, 220]
  },
  {
    id: 234, slug: 'erkek-sesi-derinlestirme', cat: 'perde', emoji: '🧔', title: 'Erkek Sesi Derinleştirme (Maskülen Ton)',
    dur: '10 dk', level: 'İleri', freq: 'Her Gün',
    desc: 'Doğuştan ince (Tiz) sese sahip olan veya heyecanlandığında sesi çocuk gibi incelen erkekler için anatomik, doğal "Koyulaştırma ve Derinleştirme (Bass)" rezonans teknikleri.',
    benefits: ['Genetik ses sınırları içinde ulaşılabilen en tok (Pes) ve titreşimli (Güvenilir) erkek sesini (Maskülen Aura) ortaya çıkarır', 'Telefonda "Hanımefendi" denmesi sorununu (Ergenlikte kalan sesi) ortadan kaldırır'],
    mistakes: ['Sesi kalın çıkaracağım diyerek çeneyi göğse bastırıp "Yapay Mafya Sesi (Hırıldama)" çıkarmak. (Bu sese anında zarar verir ve sahteliği anlaşılır)'],
    phrase: null,
    steps: [
      '1. Anatomik Temel (Gırtlak İndirme): Sesin kalın çıkması için borunun (Gırtlak) aşağıda (uzun) olması gerekir. Gerçek bir Esneme (Yawn) yapın. Adem elmanızın parmağınızla aşağı indiğini hissedin.',
      '2. Diyafram ve Göğüs Desteği: Sesi kafadan (Tiz) değil, karından ittirin. Elinizi tam göğüs tahtanıza koyun. Konuştuğunuzda göğsünüzün bir hoparlör kabini gibi titrediğinden emin olun.',
      '3. Rezonans Mırıldanması: Çeneniz tamamen gevşek ve açıkken, "Hooo-Mmmmm" (Boğuk bir M sesi) diyerek o kalın titreşimi midede ve göğüste hissetme antrenmanı yapın.',
      '4. Konuşma Hızı (Pacing): İnce sesin en büyük dostu "Hızlı ve Telaşlı" konuşmaktır. Hızınızı %30 düşürün, kelimeler arasındaki boşlukları uzatın. Yavaşlık sese otomatik olarak ağırlık katar.'
    ],
    variations: [
      '🔄 Sabah Sesi (Morning Voice): Uyandığınız ilk 1 saat ses telleriniz kalın (ödemli) olduğu için çok pes (tok) çıkar. Uyandığınızda o "Morning Voice" ile 5 dakika kitap okuyun ve o kas hafızasını (Gırtlağın o gevşek halini) gün içine taşımayı ezberleyin.'
    ],
    tip: '💡 Erkeklerde "Otoriter ve Kalın Ses", boğazı SIKARAK değil, boğazı KOCAMAN AÇIP (Gevşetip) rezonansı göğse indirerek elde edilir. Büyük davul (Göğüs) kalın ses çıkarır, küçük davul (Kafa) ince ses.',
    related: [224, 220]
  },
  {
    id: 235, slug: 'kadin-sesi-guclendirme', cat: 'perde', emoji: '👩‍💼', title: 'Kadın Sesi Güçlendirme (Otorite)',
    dur: '10 dk', level: 'İleri', freq: 'Her Gün',
    desc: 'Erkek egemen iş dünyasında (veya sunumlarda) sesi cılız, çocuksu, nefesli ("Marilyn Monroe" tarzı) çıkan kadınların, seslerine "Tokluk, Güç ve Otorite" katma rehberi.',
    benefits: ['"Küçük kız çocuğu" algısını yıkarak, C-Level (Yönetici) seviyesinde "Sözü dinlenen kadın lider" (Executive Presence) imajı yaratır', 'Toplantılarda sözün erkekler tarafından kesilmesi (Manterrupting) sorununu akustik baskı ile çözer'],
    mistakes: ['Otorite kuracağım diyerek "Erkek gibi" kalınlaştırmaya (Gırtlağı zorlamaya) veya çığlık çığlığa bağırmaya çalışmak'],
    phrase: null,
    steps: [
      '1. Uptalk (Soru Sorma) Virüsünü Silme: Kadınların %70\'i cümlelerini nokta yerine, sesi havada bırakarak (Sanki onay bekliyor gibi) bitirir. Bu "Eziklik ve Güvensizlik" mesajı verir. Her cümlenizi Kesin (Düşen, noktayı koyan) bir perde ile (Downward Inflection) bitirin.',
      '2. Göğüs Rezonansını Bulma: Kadınlar sesi genelde "Maske ve Kafa" rezonansında (İnce/Şirin) tutarlar. Elinizi göğsünüze koyun, "Haaaa" diyerek (Erkeklerdeki gibi) göğüs kafesinizi titreterek (Pes perdeyi kullanarak) konuşun.',
      '3. Nefesli Sesi Kesme (Glottal Closure): Ses tellerini gevşek (Hhavalı, fısıltılı) bırakmayın. Ses tellerini tam kapatın. Yumuşak, cılız ses yerine daha köşeli, "Metalik" (Biraz Twang katarak) ve net (Artiküle) bir tını elde edin.',
      '4. Hız ve Sessizlik (Es): Heyecanla 1 dakikada 200 kelime konuşmayın. Otorite sakindir. Soru geldiğinde 2 saniye bekleyin, kafanızı onaylamadan dik tutun ve tok bir sesle, heceleyerek cevap verin.'
    ],
    variations: [
      '🔄 Yargıç Provası: Evde ayna karşısında, son derece sert bir yargıç (veya ana haber spikeri) rolüne bürünerek, tamamen duygusuz, robotik ama ÇOK GÜR ve NET bir şekilde gazete okuyun. O ciddiyeti vücuda kopyalayın.'
    ],
    tip: '💡 Bir kadının otoritesi sesinin "Kalınlığında" (Bass) değil, "Netliğinde" (Artikülasyon) ve "Bitişlerindedir". Cümleleri havada bükmeyi (Uptalk) bıraktığınız gün, toplantı odasının hakimi olursunuz.',
    related: [225, 230]
  },
  {
    id: 236, slug: 'yasli-ses-rehabilitasyonu', cat: 'perde', emoji: '👵', title: 'Yaşlı Ses Rehabilitasyonu (Presbifoni)',
    dur: '15 dk', level: 'Orta', freq: 'Her Gün',
    desc: '50 yaş ve üzerinde, ses tellerindeki kas kaybına (Atrofi) bağlı olarak ortaya çıkan "Titrek, cılız, nefesli ve yorgun" (İhtiyar sesi) duyulmayı tersine çeviren anti-aging vokal terapi.',
    benefits: ['Ses tellerindeki kas kütlesini (Tıpkı vücut geliştirme gibi) yeniden artırarak sesi 10 yıl gençleştirir', 'Konuşurken aniden nefes kesilmesini ve öksürük krizlerini (Yutma güçlüğünü) önler', 'Telefon görüşmelerinde "Hasta mısın?" sorularını bitirir'],
    mistakes: ['Sesim yoruluyor diyerek YAŞLANDIKÇA DAHA AZ KONUŞMAK (Use it or lose it! Kullanmazsan kaybedersin. Ses teli bir kastır, konuşulmadıkça erir)'],
    phrase: null,
    steps: [
      '1. Vocal Push-Up (Ses Şınavı): Derin nefes alın. Çok sert, patlayıcı ve güçlü bir şekilde "HO!" deyin. (Sanki uzaktaki birine bağırır gibi). Bunu 10 kez yapın. Bu sönmüş ses tellerini birbirine güçlüce çarptırır (Kas yapar).',
      '2. Siren (Esneklik): Dudaklarınızı titreterek (Lip trill) kalın sesten ince sese (ve geri) 5 kez siren sesi (Uuuuu) yapın. Bu katılaşan, esnekliğini kaybeden ses kordlarını yağlar.',
      '3. Susturulmuş Bağırma (Resistance): Pipeti yarım şişe suya sokun. Suyun içine doğru sanki bağırıyormuş (Çok güçlü bir nefes üflüyormuş) gibi "Uuuuu" sesini verin. Suyun direnci ses kaslarına "Ağırlık kaldırma" idmanı yaptırır.',
      '4. Yutkunma ve Nem: Yaşlılıkta tükürük bezleri kurur. Günde 2.5 litre su (Oda sıcaklığında) ve konuşmadan önce "Sert yutkunma" ile gırtlak kaslarını (Yutma fonksiyonunu) diri tutun.'
    ],
    variations: [
      '🔄 Yüksek Sesle Okuma Kulübü: Günde 20 dakika (Eşinize, torununuza veya boş duvara) abartılı dudak hareketleriyle ve TİYATRAL (Yüksek) bir sesle YÜKSEK SESLİ kitap okuyun. En iyi anti-aging (gençleşme) budur.'
    ],
    tip: '💡 Yaşlılık sesi bir "Kader" değil, bir "Kas Erimesi (Atrofi)"dir. Bacak kaslarınızı yürüyerek koruduğunuz gibi, ses tellerinizi de YÜKSEK ve DİNAMİK sesler (Şarkı söylemek, tekerleme okumak) çıkararak ömür boyu genç (Tok ve Gür) tutabilirsiniz.',
    related: [218, 232]
  }
];

let appjs = fs.readFileSync('public/app.js', 'utf8');
let datajs = fs.readFileSync('diksiyon-data.js', 'utf8');

const newObjectsStr = sesExercises.map(ex => JSON.stringify(ex, null, 2)).join(',\n') + '\n';

// Replace the array ending
appjs = appjs.replace(/\s*\];\s*$/, ',\n' + newObjectsStr + '];\n');
fs.writeFileSync('public/app.js', appjs, 'utf8');

datajs = datajs.replace(/\s*\];\s*$/, ',\n' + newObjectsStr + '];\n');
fs.writeFileSync('diksiyon-data.js', datajs, 'utf8');

console.log('21 items for Ses Kategorisi injected successfully.');
