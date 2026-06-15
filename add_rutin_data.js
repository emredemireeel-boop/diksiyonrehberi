const fs = require('fs');

const rutinExercises = [
  {
    id: 181, slug: '5-dakika-sabah-isinma', cat: 'rutin', emoji: '🌅', title: '5 Dakikalık Sabah Isınma Rutini',
    dur: '5 dk', level: 'Başlangıç', freq: 'Her sabah',
    desc: 'Güne başlarken henüz uyanmamış (uyku modundaki) ses tellerini, nefesi ve yüz kaslarını en kısa sürede, zorlamadan güne hazırlama pratiği.',
    benefits: ['Sabah sesindeki çatallanmayı ve boğukluğu hızla geçirir', 'Uykulu yüz ifadesini canlandırarak enerjik hissettirir', 'Kahve içmeden önce kan dolaşımını hızlandırır'],
    mistakes: ['Uyanır uyanmaz hiç ısınmadan bağırmak veya öksürerek boğaz temizlemek', 'Aç karnına sert ve tiz sesler çıkarmaya çalışmak'],
    phrase: null,
    steps: [
      '1. Dk (Nefes): Yatakta veya ayakta, burnunuzdan 3 saniyede derin bir nefes alıp ağzınızdan "Ffffff" sesiyle 6 saniyede verin (3 tekrar).',
      '2. Dk (Yüz Masajı): Parmak uçlarınızla elmacık kemiklerinize, şakaklarınıza ve çene altınıza hafifçe vurarak (tapping) kasları uyandırın.',
      '3. Dk (Motor Sesi - Lip Trill): Dudaklarınızı titreterek (pırrr) hafifçe siren sesi yapın. Pes tondan orta tona kadar çıkıp inin (3 tekrar).',
      '4. Dk (Mırıldanma - Humming): Ağzınız kapalı "Mmmmm" diyerek ses tellerini nazikçe ısıtın, titreşimi dudaklarda hissedin.',
      '5. Dk (Artikülasyon): Kalemi dişleriniz arasına almadan ağzınızı kocaman açarak 3 kez "A-E-I-İ-O-Ö-U-Ü" diyerek tamamlayın.'
    ],
    variations: [
      '🔄 Yatakta Isınma: Henüz yataktan kalkmadan esneyerek kolları havaya kaldırırken 1 dakika boyunca "Humming" yapabilirsiniz.'
    ],
    tip: '💡 Uyku sırasında kaslar sıvı kaybeder (kurur). Sabah uyandığınızda ses telleriniz tıpkı motorsuz bir arabanın donmuş yağı gibidir. Isıtmadan yüksek devire çıkarsanız (bağırırsanız) motoru yakarsınız (Tahriş).',
    related: [182, 191]
  },
  {
    id: 182, slug: '15-dakika-tam-isinma', cat: 'rutin', emoji: '⚙️', title: '15 Dakikalık Tam Isınma Seti',
    dur: '15 dk', level: 'Orta', freq: 'Her gün',
    desc: 'Sesini yoğun kullanacak (Öğretmen, çağrı merkezi, sunucu) kişiler için diyafram, rezonans, çene ve dudak kaslarını kapsayan eksiksiz sabah antrenmanı.',
    benefits: ['Tüm gün sürecek konuşmalarda sesin yorulmasını ve kısılmasını engeller', 'Sesin volümünü (gürlüğünü) artırırken gırtlak baskısını sıfırlar', 'Tembel artikülasyon kaslarını tam kapasite açar'],
    mistakes: ['Sadece tekerleme okuyup nefes ve rezonans aşamalarını atlamak', 'Sıcak basması veya baş dönmesi olduğunda (hiperventilasyon) antrenmana inatla devam etmek'],
    phrase: null,
    steps: [
      'Aşama 1: Nefes (3 Dk): Diyaframdan köpek gibi kesik kesik (Pıh-pıh-pıh) nefes vererek kası aktifleştirin.',
      'Aşama 2: Rezonans (3 Dk): Burnunuzu iki parmağınızla kapatıp "Niyang-Niyang" sesleriyle sesi maskeye (öne) alın.',
      'Aşama 3: Çene ve Dil (4 Dk): Çeneyi tam açıp kapatarak "Mam-Mem-Mim-Mom-Mum", sonra hızlıca "La-Le-Lı-Li" deyin.',
      'Aşama 4: Dudak (3 Dk): O ve Ü yuvarlak ünlülerini dudakları çok büzerek abartılı çıkarın.',
      'Aşama 5: Metin (2 Dk): Seçtiğiniz kısa bir tekerlemeyi veya şiiri önce fısıltıyla (havalı), sonra normal seste okuyarak rutini bitirin.'
    ],
    variations: [
      '🔄 Duşta Pratik: Sıcak duş alırken ortamdaki buhar ses tellerini nemlendirdiği için bu 15 dakikalık rutini duşta yapmak etkisini iki katına çıkarır.'
    ],
    tip: '💡 15 dakikalık rutin bir şarkıcının sahne öncesi "Vokaliz" çalışmasının konuşmacı versiyonudur. Ses telinden ziyade "Artikülasyon organlarını" (Çene, Dudak, Dil) spora hazırlar.',
    related: [181, 183]
  },
  {
    id: 183, slug: '30-dakika-yogun-antrenman', cat: 'rutin', emoji: '🏋️', title: '30 Dakikalık Yoğun Antrenman',
    dur: '30 dk', level: 'İleri', freq: 'Haftada 3 gün',
    desc: 'Diksiyon kusurlarını (bölgesel aksan, pelteklik, r yutma vb.) kalıcı olarak düzeltmek ve kas hafızasını yeniden yazmak için tasarlanmış derin çalışma programı.',
    benefits: ['Akustik hafızayı ve kas hafızasını baştan aşağı yeniden programlar', 'Sesin tonunu ve rengini kalıcı olarak güzelleştirir', 'Nefes kapasitesini ve dayanıklılığını maksimize eder'],
    mistakes: ['Bu yoğun rutini her gün veya günde 2 kez yaparak ses tellerini (vokal kord) tahriş etmek', 'Egzersiz sırasında ağrı/acı hissedilmesine rağmen devam etmek'],
    phrase: null,
    steps: [
      'Bölüm 1 (Esneklik - 5 Dk): Omuz, boyun çevirme ve çene masajı ile tüm fiziksel gerginliği atın.',
      'Bölüm 2 (Diyafram - 10 Dk): Yere sırtüstü uzanın, karnınıza bir kitap koyun ve kitabın yükselip alçalmasını sağlayarak derin nefes çalışın.',
      'Bölüm 3 (Kalem Egzersizi - 10 Dk): Temiz bir kalemi (veya mantar tıpayı) köpek dişlerinizin arasına yatay yerleştirin. Bu halde zor bir metni veya tekerlemeyi okuyun. Kaslarınız yanacaktır.',
      'Bölüm 4 (Soğuma - 5 Dk): Kalemi çıkarıp metni normal okuyun (İnanılmaz akıcı olduğunu göreceksiniz) ve esneyerek antrenmanı bitirin.'
    ],
    variations: [
      '🔄 Ayna Analizi: 30 dakikalık rutinin tamamını ayna karşısında yapın. Göz teması, duruş (postür) ve asimetrik dudak hareketlerinizi de eşzamanlı olarak düzeltin.'
    ],
    tip: '💡 Bu bir maratondur. Kalem egzersizi sırasındaki "yanma" hissi (özellikle yanaklarda) kasların geliştiğinin kanıtıdır, ancak gırtlakta yanma varsa yanlış nefes kullanıyorsunuz demektir.',
    related: [182, 188]
  },
  {
    id: 184, slug: 'haftalik-diksiyon-plan-baslangic', cat: 'rutin', emoji: '📅', title: 'Haftalık Diksiyon Planı (Başlangıç)',
    dur: '1 Hafta', level: 'Başlangıç', freq: 'Her gün 10 dk',
    desc: 'Diksiyon eğitimine yeni başlayanlar için, sıkılmadan ve yorulmadan temel kas farkındalığını oluşturacak 7 günlük hafif başlangıç programı.',
    benefits: ['Eğitimi bir alışkanlık (rutin) haline getirir', 'Doğru nefes almayı vücuda öğretir', 'Temel ses hatalarını (A-E karışımı vb.) fark ettirir'],
    mistakes: ['İlk 2 gün hevesle 1\'er saat çalışıp kas ağrısı nedeniyle 3. gün programı bırakmak', 'Sadece zor tekerlemeleri okuyup nefes temelini es geçmek'],
    phrase: null,
    steps: [
      'Pazartesi: Sadece Diyafram Nefesi (Burnunuzdan al, ağzından ver).',
      'Salı: Sadece Ünlü Harfler (A-E-I-İ-O-Ö-U-Ü) abartılı dudak çalışması.',
      'Çarşamba: Ünsüzler (Sert patlamalılar: P, Ç, T, K) nefes basıncı kontrolü.',
      'Perşembe: Tekerleme 1 (Basit tekerlemeleri kalem ısırmadan yavaşça oku).',
      'Cuma: Vurgu (Metin okurken sadece kelime sonlarına vurgu yap).',
      'Cumartesi: Ayna Pratiği (Gülümseyerek ve ağzı büyük açarak okuma).',
      'Pazar: Dinlenme ve sadece 1 sayfa sesli kitap okuma.'
    ],
    variations: [
      '🔄 Zaman Kaydırma: Akşam yorgun oluyorsanız bu 10 dakikalık rutini direkt kahvaltı sonrası yapın.'
    ],
    tip: '💡 Beynin yeni bir nöral yol oluşturması için süreklilik, süreden daha önemlidir. Her gün 10 dakika çalışmak, haftada bir gün 2 saat çalışmaktan 10 kat daha etkilidir.',
    related: [185, 181]
  },
  {
    id: 185, slug: 'haftalik-diksiyon-plan-orta', cat: 'rutin', emoji: '📈', title: 'Haftalık Diksiyon Planı (Orta)',
    dur: '1 Hafta', level: 'Orta', freq: 'Her gün 20 dk',
    desc: 'Temel kavramları (diyafram, ünlüler) oturtmuş kişilerin akıcılık, hız, artikülasyon ve tonlama (enternasyon) becerilerini artıracak geliştirilmiş program.',
    benefits: ['Konuşurken nefes nefese kalmayı (nefes yetmezliği) bitirir', 'Kelimeleri yutmadan hızlı konuşabilme yeteneği (takip edilebilir hız) kazandırır', 'Monotonluğu kırıp melodi ekler'],
    mistakes: ['Hızlanma egzersizlerinde artikülasyon kalitesinden ödün verip kelimeleri yuvarlamak', 'Duygu egzersizlerini (tiyatral) yaparken aşırı abartarak yapaylaşmak'],
    phrase: null,
    steps: [
      'Pazartesi: Kalem Egzersizi (Kalemle 10 dk okuma + Kalemsiz 5 dk okuma).',
      'Salı: Hız Kontrolü (Aynı metni önce slow motion, sonra normal, sonra spiker hızında oku).',
      'Çarşamba: Diyafram Kondisyonu (Nefesi 15, 20 ve 30 saniyede yavaşça üfleyerek verme çalışması).',
      'Perşembe: Heceleme (Metni kelime kelime değil hece hece robotik bir ritimle okuma).',
      'Cuma: Duygu ve Tonlama (Aynı cümleyi sinirli, neşeli, şaşkın ve üzgün ses tonlarıyla okuma).',
      'Cumartesi: Kapsamlı Tekerleme (Ş, S, Z ve R ağırlıklı zor tekerlemeler).',
      'Pazar: Serbest sesli okuma ve Ses Soğutma (Cooldown).'
    ],
    variations: [
      '🔄 Kayıtlı İlerleme: Salı ve Cuma günleri yaptığınız okumaları telefonunuza kaydedin ve pazar günü dinleyerek kendi hatalarınızı analiz edin.'
    ],
    tip: '💡 Orta seviyede en büyük tehlike "Biliyorum" diyerek temelleri (ısınma ve nefes) atlamaktır. Sporcu ne kadar profesyonel olursa olsun maça ısınmadan çıkmaz.',
    related: [186, 182]
  },
  {
    id: 186, slug: 'haftalik-diksiyon-plan-ileri', cat: 'rutin', emoji: '🔥', title: 'Haftalık Diksiyon Planı (İleri)',
    dur: '1 Hafta', level: 'İleri', freq: 'Her gün 30 dk',
    desc: 'Spikerler, sunucular, tiyatrocular ve üst düzey yöneticiler için "Mükemmeliyet" odaklı, zorlu artikülasyon, doğaçlama ve rezonans programı.',
    benefits: ['Baskı altında dahi seste titreme ve artikülasyon bozukluğunu sıfırlar', 'Spontane (doğaçlama) konuşmalarda takılmaları, "ııı", "eee" seslerini yok eder', 'Sesi bir enstrüman gibi (Göğüs, Kafa, Maske rezonansları) yönetmeyi öğretir'],
    mistakes: ['Rezonans çalışmaları yaparken sesi boğazda sıkıştırıp larenjite yol açmak', 'Dinlenme günlerini atlayıp ses tellerinde kronik yorgunluk (ödem) yaratmak'],
    phrase: null,
    steps: [
      'Pazartesi: Rezonans Geçişleri (Sesi sırasıyla Göğüs -> Ağız -> Burun (Maske) boşluklarında titreştirme).',
      'Salı: Mantar Tıpa ve Tekerleme (Mantar tıpayı dik değil yatay ısırarak en zor R, S, Z tekerlemelerini ultra hızlı okuma).',
      'Çarşamba: Doğaçlama (Rastgele bir kelime seç -örn: Kalem- ve bu konu hakkında hiç "ııı" demeden 3 dk akıcı konuş).',
      'Perşembe: Gölgeleme - Shadowing (Bir haber kanalını açıp spikeri 1 saniye geriden aynı tonlama ile takip etme).',
      'Cuma: Extrem Nefes (Nefes alıp konuşmaya başla, tek nefeste 1 uzun paragrafı bitirmeye çalış).',
      'Cumartesi: Teleprompter (Ekranda akan bir metni hiç teklemeden göz ucuyla ileri okuma yaparak seslendirme).',
      'Pazar: Tam Dinlenme (Mutlak Ses İstirahati).'
    ],
    variations: [
      '🔄 Fiziksel Stres: Çarşamba (Doğaçlama) gününde konuşurken aynı anda zıplayın veya hafif koşu yapın. Fiziksel yorgunluk altındayken bile diyaframı ve sesi stabil tutmayı öğrenin.'
    ],
    tip: '💡 İleri seviyede kaslar artık çok güçlüdür, asıl eğitim beynin (odak ve akıcılık) eğitimidir. "Iıı", "Eee" gibi asalak sesler bilgi eksikliğinden değil, nefes koordinasyonsuzluğundan çıkar.',
    related: [183, 187]
  },
  {
    id: 187, slug: '30-gun-diksiyon-challenge', cat: 'rutin', emoji: '🏆', title: '30 Günlük Diksiyon Challenge',
    dur: '30 Gün', level: 'Orta', freq: 'Her gün (Eksiksiz)',
    desc: 'Bir alışkanlık oluşturma döngüsü olan 30 günde (21+9), konuşma tarzınızı (aksan, tempo, nefes) kalıcı olarak yeniden modelleme meydan okuması.',
    benefits: ['Yeni diksiyon kurallarını (örn: Ğ okumama, K-G düzeltme) kalıcı refleks haline getirir', 'Konuşma sırasında kuralları düşünme zorunluluğunu (Bilinçli Yeterlilik) ortadan kaldırır', 'Özgüvende gözle görülür bir patlama yaratır'],
    mistakes: ['"Dün çalışmadım bugün 2 kat çalışayım" diyerek ses tellerine hasar vermek', '2. haftada (Plato evresi) "Hiçbir şey değişmiyor" diyerek pes etmek'],
    phrase: null,
    steps: [
      'Gün 1-7 (Temel İnşa): Sadece diyafram nefesi, ağız/çene açma ve düzgün duruş (Postür) üzerine yoğunlaşın. Sesli okuma yok.',
      'Gün 8-14 (Artikülasyon): Kalem egzersizleri, tekerlemeler ve harf düzeltmeleri (Örn: R, S, Z).',
      'Gün 15-21 (Melodi ve Vurgu): Robotikleşen dili kırıp metinlere duygu katma, İstanbul Türkçesi vurguları.',
      'Gün 22-30 (Bütünleşme - Uygulama): Tüm kuralları (nefes+artikülasyon+vurgu) aynı anda kullanarak günlük doğaçlama konuşmalar ve ses kayıtları yapma.'
    ],
    variations: [
      '🔄 Çapraz Kontrol: Bu 30 gün boyunca sadece egzersiz yapmayın. Ailenizle veya işte konuşurken bile yeni (düzgün) diksiyonunuzu kullanmaya zorlayın. Asıl challenge (meydan okuma) günlük hayattır.'
    ],
    tip: '💡 Kas hafızasının kuralı basittir: Bir eylemi 30 gün aralıksız yaparsanız beyninizdeki nöron bağları kalıcı olarak değişir. "Gelicem" demeyi 30 gün boyunca doğru yaparsanız, 31. gün isteseniz de "Gelicem" diyemezsiniz.',
    related: [185, 188]
  },
  {
    id: 188, slug: '90-gunluk-donusum-programi', cat: 'rutin', emoji: '🦋', title: '90 Günlük Profesyonel Dönüşüm',
    dur: '3 Ay', level: 'İleri', freq: 'Her gün',
    desc: 'Sıfırdan başlayıp bir seslendirme sanatçısı, hatip veya spiker seviyesine (Bilinçsiz Yeterlilik) ulaşmak için 3 aylık, bloklar halinde ayrılmış yaşam tarzı programı.',
    benefits: ['Bölgesel şiveleri ve tembel ağız alışkanlığını tamamen siler', 'Ses telini inanılmaz dayanıklı (maratoncu) hale getirir', 'Hitabet ve ikna yeteneğini en üst düzeye çıkarır'],
    mistakes: ['Sadece sonuca odaklanıp sürecin (aylık gelişimlerin) tadını çıkarmamak', 'Günlük su tüketimi (hidrasyon) kuralını ihlal etmek'],
    phrase: null,
    steps: [
      '1. AY (Mekanik Temizlik): Diyaframın otomatikleşmesi, 10 Altın Kuralın (Boğaz temizlememe vb.) alışkanlık olması ve dudak/çene kaslarının spora alışması (Günde 20 dk).',
      '2. AY (Artikülasyon ve Renk): Kalem egzersizleriyle kusursuz ünsüzler, rezonans odalarını (göğüs-maske) bularak sese parlaklık/bas katma (Günde 30 dk).',
      '3. AY (Beden Dili ve Spontanite): Diksiyonun beden diliyle (el-kol, göz teması) birleşmesi. Metne bakmadan doğaçlama sunumlar ve hitabet pratikleri (Günde 30 dk).'
    ],
    variations: [
      '🔄 Mentor Geri Bildirimi: 90 günlük programın her 30. gününde mutlaka bir uzman, öğretmen veya sizi dürüstçe eleştirecek bir arkadaşınıza uzun bir konuşma/sunum yaparak gelişim onayı alın.'
    ],
    tip: '💡 1. ayda kuralları DÜŞÜNEREK uygularsınız. 2. ayda kurallar aklınızdadır ama ZORLANMADAN uygularsınız. 3. ayın sonunda ise artık kuralları HİÇ DÜŞÜNMEDEN, beyninizin arka planında otomatik (Bilinçsiz Yeterlilik) uygularsınız.',
    related: [187, 186]
  },
  {
    id: 189, slug: 'sunum-oncesi-10-dk-hazirlik', cat: 'rutin', emoji: '🎤', title: 'Sunum Öncesi 10 Dk Hazırlık',
    dur: '10 dk', level: 'Başlangıç', freq: 'Etkinlik Öncesi',
    desc: 'Topluluk önünde konuşma, sahne veya önemli bir toplantı öncesi kuliste/tuvalette yapılabilecek, stresi sıfırlayan ve sesi parlatacak acil müdahale rutini.',
    benefits: ['Sahne heyecanına bağlı ses titremesini ve kalp çarpıntısını anında durdurur', 'Tükürük bezlerini çalıştırarak ağız kuruluğunu (pamuk ağız) önler', 'İlk cümlenin net ve otoriter çıkmasını sağlar'],
    mistakes: ['Heyecandan nefesi göğüste ve omuzlarda (yukarıda) kilitlemek', 'Sahneye çıkmadan önce kahve veya asitli içecek tüketerek sesi kurutmak'],
    phrase: '"Merhaba, hepiniz hoş geldiniz. (Gülümseyerek)"',
    steps: [
      'Dakika 1-3 (Anti-Stres Nefesi): Gözünüzü kapatın. Burnunuzdan 4 saniyede nefes alın, içinizde 4 saniye tutun, ağzınızdan 6 saniyede çok yavaşça verin (Kutu Nefesi).',
      'Dakika 4-6 (Motoru Isıtma): Dudaklarınızı titreterek (Lip Trill) 3 kez uzun siren sesi yapın. Bu ses tellerine masaj yapar ve ısıtır.',
      'Dakika 7-8 (Çene ve Ağız Açma): Yüzünüzü buruşturup (ekşi yemiş gibi) saniyelerce sıkın, ardından gözlerinizi ve ağzınızı sonuna kadar kocaman açın (Aslan esnemesi).',
      'Dakika 9-10 (Tükürük ve Isırık): Dilinizle dişlerinizin arkasını (Ağzın içini) dairesel olarak yalayın. Bu ağız kuruluğunu bitirir. İlk cümlenizi ayna karşısında dik durarak sesli prova edin.'
    ],
    variations: [
      '🔄 Yutkunma Hilesi: Sahneye çıkarken gırtlağınız (Adem elmanız) heyecandan yukarı çıkmıştır. Güçlü bir şekilde yutkunarak onu aşağı (doğal konumuna) indirin.'
    ],
    tip: '💡 Sahneye çıkarken yapılan en büyük hata, konuşmaya başlar başlamaz kelimeleri yutmaktır. İlk cümlenizi (%20 daha yavaş ve %20 daha yüksek sesle) söylemek için kendinizi kurun. İlk cümle iyi çıkarsa, gerisi su gibi akar.',
    related: [157, 181]
  },
  {
    id: 190, slug: 'mulakat-oncesi-ses-hazirligi', cat: 'rutin', emoji: '🤝', title: 'Mülakat Öncesi Ses Hazırlığı',
    dur: '5 dk', level: 'Başlangıç', freq: 'Görüşme Öncesi',
    desc: 'İş görüşmeleri veya önemli online toplantılar öncesi bekleme salonunda yapılabilecek, güven veren "tok" (optimal) sesi bulma rutini.',
    benefits: ['Aşırı ince veya tiz (heyecanlı) ses çıkmasını engeller', 'Beden dili ve ses uyumunu yakalayarak profesyonel bir aura yaratır', 'Özgüven (Power Pose) sağlar'],
    mistakes: ['Sesini daha karizmatik yapmak için çenesini göğsüne gömüp bilerek kalınlaştırmaya çalışmak (Samimiyetsiz ve boğuk duyulur)'],
    phrase: '"Şirketinizin vizyonunu yakından takip ediyorum."',
    steps: [
      '1. Duruş (Power Pose): Sandalyede omuzlarınızı geriye atın, dik oturun. Göğüs kafesiniz açık olmazsa sesiniz ezik ve cılız çıkar.',
      '2. Kendi Sesini Bulma (Optimal Pitch): Burnunuzdan derin bir nefes alın ve onaylar gibi "Hı-hı" deyin. Sonra bunu uzatın "Mmmmm". Bu sizin doğal ve en güvenilir sesinizdir.',
      '3. Rezonans İndirme: Stres sesi kafaya ve genze çıkarır (Tizleşir). Elinizi göğsünüze koyun, göğsünüzün hafifçe titrediğini hissedene kadar "Ha, He, Ho" diyerek sesi aşağı indirin.',
      '4. Hız Regülasyonu: Konuşurken heyecandan hızlı konuşacağınızı bilin. Kendinize şu kuralı koyun: "Mülakatçının sorusu bitince 2 saniye içimden sayıp (es verip) öyle cevaplayacağım."'
    ],
    variations: [
      '🔄 Çevrimiçi (Online) Mülakat: Zoom görüşmelerinde mikrofon tiz sesleri parlatır. Sesinizi bir tık pes (kalın) ve yavaş tutmak dijital ortamda daha otoriter duyulmanızı sağlar.'
    ],
    tip: '💡 İşverenler ne söylediğinizden (CV) çok, onu nasıl söylediğinize (Ses Tonu ve Diksiyon) bakarlar. Nefes alan, acele etmeyen ve es vererek konuşan bir aday her zaman "Kendine güvenen, işi bilen" adaydır.',
    related: [189, 153]
  },
  {
    id: 191, slug: 'mikro-egzersizler', cat: 'rutin', emoji: '⏱️', title: 'Sabah-Öğle-Akşam Mikro Egzersizler',
    dur: '1 Dk', level: 'Başlangıç', freq: 'Günde 3 kez',
    desc: 'Yoğun tempoda çalışanların gün içine serpiştirebileceği, kimsenin fark etmeyeceği 1\'er dakikalık mini ("Mikro") esneme ve rahatlama rutinleri.',
    benefits: ['Masa başı çalışanlarının boyun ve gırtlak kasılmalarını gün boyu önler', 'Ekstra zaman ayırmadan diyaframı açık tutar', 'Gün sonu yorgunluğunu azaltır'],
    mistakes: ['Egzersiz yapmak için illa özel bir odaya veya 30 dakikaya ihtiyaç duyulduğuna inanıp tamamen ertelemek'],
    phrase: null,
    steps: [
      'Sabah (Trafikte / Yolda): Arabada veya kulaklıkla yürürken 1 dakika boyunca "Lip Trill" (Dudak titretme) yapın. Bu tüm sistemi uyandırır.',
      'Öğle (Masa Başında): Omurganızı dikleştirin, omuzları kulaklara çekip 3 saniye tutup aniden serbest bırakın (Drop). Sonra karnınızdan (Diyafram) 3 derin sessiz nefes alın.',
      'Akşam (Asansörde / Evde): Dişleriniz hafif kapalıyken 3 kez en kocaman gülümsemenizi yapıp bırakın, ardından ağzınızı O şekline getirin. (Çene ve dudak esnetme).'
    ],
    variations: [
      '🔄 Tuvalet Molası Tıslaması: Aynanın karşısına geçtiğinizde derin bir nefes alıp 15 saniye boyunca çok ince bir "Ssssss" sesiyle nefesi boşaltarak diyaframı resetleyin.'
    ],
    tip: '💡 En iyi egzersiz rutini, GÜNLÜK HAYATA yedirilebilen rutindir. Uzun ve zor programları 3 gün yapar bırakırsınız; ancak asansörde, trafikte, duşta yaptığınız 1 dakikalık egzersizler bir ömür sürer.',
    related: [181, 152]
  },
  {
    id: 192, slug: 'yolculukta-diksiyon', cat: 'rutin', emoji: '🚗', title: 'Yolculukta Diksiyon Çalışması',
    dur: 'Yol Boyunca', level: 'Başlangıç', freq: 'Gerektiğinde',
    desc: 'Arabada işe giderken veya yalnız araç kullanırken trafik stresini avantaja (Diksiyon stüdyosuna) çevirme yöntemleri.',
    benefits: ['Ölü zamanı (Trafiği) muazzam bir kişisel gelişim süresine dönüştürür', 'Bağırarak stres atarken (Vokal kordlara zarar vermeden) diyaframı çalıştırır', 'Sabahları işe gitmeden önce sesi %100 açar'],
    mistakes: ['Klimayı (Özellikle sıcağı) direkt yüze/boğaza vuracak şekilde açıp ses tellerini bir çöl gibi kurutmak'],
    phrase: null,
    steps: [
      'Ergonomi: Araç koltuğunu dikleştirin. Yaykın ve kambur otururken diyafram çalışmaz.',
      'Şarkı (Vokalize): Radyoda sevdiğiniz, tempolu bir şarkıyı açın. Şarkının sözlerini değil, sadece "La-la-la" veya "Na-na-na" diyerek, dudakları abartılı oynatarak melodiye eşlik edin.',
      'Plaka Tekerlemeleri: Önünüzdeki arabanın plakasındaki harfleri kullanarak anında tekerleme veya akıcı cümle uydurun (Doğaçlama antrenmanı). (Örn: 34 DKS 12 -> Dört Kel Baş Berber...).',
      'Yüksek Sesle Konuşma: Araç içi harika bir yalıtım alanıdır. Hayali birine, hiç takılmadan ve güçlü bir sesle gününüzü anlatın.'
    ],
    variations: [
      '🔄 Yutkunma ve Nem: Araç klimaları çok kurutucudur. Arabada her zaman su bulundurun ve trafik ışıklarında bir yudum su içerek sesinizi koruyun.'
    ],
    tip: '💡 Kendi arabanız, dünyanın en iyi ve en güvenli diksiyon stüdyosudur. İstediğiniz kadar ağzınızı garip şekillere sokabilir, istediğiniz kadar kalın ve tuhaf sesler çıkarabilirsiniz; kimse duymaz.',
    related: [181, 191]
  },
  {
    id: 193, slug: 'spikerin-gunluk-rutini', cat: 'rutin', emoji: '📺', title: 'Spikerin Günlük Rutini',
    dur: 'Kapsamlı', level: 'İleri', freq: 'Her gün',
    desc: 'Ana haber bülteni sunan profesyonel bir spikerin sabah yataktan kalkıp gece uyuyana kadar uyguladığı ses, beden ve metin programı.',
    benefits: ['Televizyon standartlarında kusursuz bir netlik (Artikülasyon) sağlar', 'Zaman baskısı (prompter hızı) altında teklemeden konuşmayı öğretir', 'Nefes kesilmelerini haber temposuna (phrasing) göre ayarlar'],
    mistakes: ['Haberi okurken sadece noktalama işaretlerinde durmak (Profesyoneller anlama göre görünmez duraklar -phrasing- yapar)', 'Ciddiyet yaratmak için kaşları çatıp yüzü hareketsizleştirmek (Robotlaşmak)'],
    phrase: null,
    steps: [
      '08:00 (Uyanış): Uyanır uyanmaz 1 büyük bardak oda sıcaklığında su (Sistemik hidrasyon başlar).',
      '10:00 (Fiziksel Isınma): Esneme, 5 dk diyafram tıslaması ve dudak motoru (Trill).',
      '14:00 (Kalem Egzersizi): Bülten metinleri gelmeden önce ağız kaslarını açmak için yatay kalemle 10 dk okuma.',
      '17:00 (Deşifre ve Phrasing): Metinleri eline alıp duraklama yapılacak (Nefes alınacak) yerleri kalemle çizme (Anlam gruplama).',
      '19:00 (Yayın Öncesi): Sadece 3 dk "Mmmmm" mırıldanması (Maske rezonansı ayarı) ve bol su.'
    ],
    variations: [
      '🔄 Göz Liderliği (Eye-lead): Spikerler prompter\'dan okurken, ağızlarından çıkan kelimeyle gözlerinin okuduğu kelime aynı DEĞİLDİR. Göz her zaman 2-3 kelime İLERİDEDİR. Bu metni hiç teklemeden akıcı okumanın (Legato) tek sırrıdır.'
    ],
    tip: '💡 Ekranda gördüğünüz spikerlerin kusursuzluğu doğuştan gelen bir yetenek değil, 10 yıllık kalem ısırma, diyafram geliştirme ve metni "bölümlere ayırma" matematiğinin bir sonucudur.',
    related: [186, 189]
  },
  {
    id: 194, slug: 'aktorun-gunluk-ses-rutini', cat: 'rutin', emoji: '🎭', title: 'Aktörün Günlük Ses Rutini',
    dur: 'Kapsamlı', level: 'İleri', freq: 'Her gün',
    desc: 'Tiyatro sahnesinde mikrofonsuz olarak 500 kişiye sesini duyurmak (Projeksiyon) ve farklı karakterlerin seslerine (Çocuk, Yaşlı, Canavar) bürünmek için gereken esneklik rutini.',
    benefits: ['Sesi mikrofonsuz olarak en arka sıraya fırlatabilmeyi (Voice Projection) öğretir', 'Seste limitsiz renk ve melodi yelpazesi yaratır', 'Duyguyu (Öfke, ağlama) sese yansıtırken diyaframı korur'],
    mistakes: ['Sesi uzağa duyurmak için boğazdan (gırtlaktan) bağırmak (Sesi ileri fırlatan şey gırtlak değil diyafram basıncıdır)', 'Ağlarken konuşma sahnelerinde gırtlağı sıkıştırıp düğümlemek'],
    phrase: null,
    steps: [
      'Sabah (Fiziksel Kondisyon): Aktör için ses ve beden bütündür. Koşarken veya ip atlarken tekerleme okuyarak diyafram kası çelik gibi yapılır.',
      'Öğle (Esnetme): Yawn-Sigh (Esneme-İç çekme) egzersiziyle gırtlak en aşağıya (doğalına) indirilir.',
      'Öğle Sonu (Rezonans Tırmanışı): Asansör gibi! Ses önce tamamen göğüste (Pes), sonra ağızda (Nötr), sonra burunda (Tiz maske) ve son olarak kafada (Falsetto/Kafa sesi) yankılandırılarak tüm odalar açılır.',
      'Sahne Öncesi (Artikülasyon Pompası): P-B, T-D, Ç-C gibi sert ve yumuşak ünsüzleri abartılı şekilde peş peşe söyleyerek dudak/dil uyuşukluğu yok edilir.'
    ],
    variations: [
      '🔄 Fısıltı Hacmi (Stage Whisper): Tiyatroda aktör sır verirken (fısıldarken) bile en arkadaki seyirci onu duyar. Bunu "h" harfini diyaframla çok güçlü basarak (Destekli fısıltı) yaparlar. Ayna karşısında "Seni seviyorum" cümlesini fısıltıyla karşı duvara duyurmaya çalışın.'
    ],
    tip: '💡 Spikerin diksiyonu "kusursuzluğu", aktörün diksiyonu "esnekliği" hedefler. Spiker sesi kalıba sokar, aktör ise sesi hamur gibi yoğurup sınırlarını kaldırır.',
    related: [186, 188]
  },
  {
    id: 195, slug: 'ogretmenin-ses-bakim-rutini', cat: 'rutin', emoji: '👩‍🏫', title: 'Öğretmenin Günlük Ses Bakımı',
    dur: 'Gün Boyu', level: 'Orta', freq: 'Çalışma Günleri',
    desc: 'Günde ortalama 6-8 saat konuşan, yüksek seste ders anlatan ve ses yorgunluğuna (Nodül riskine) en açık meslek grubu için mesai içi sağkalım rutini.',
    benefits: ['Cuma günü geldiğinde ses kısıklığı (Tükenmişlik) yaşanmasını engeller', 'Sınıf otoritesini bağırmadan (Perde kontrolüyle) sağlamayı öğretir', 'Öğretmen nodülünü önler'],
    mistakes: ['Sınıfı susturmak için sınıfın gürültü seviyesinden (Örn: 80 desibel) daha yükseğe (90 desibel) çıkarak BAĞIRMAK', 'Teneffüs aralarında dinlenmek yerine öğretmenler odasında sohbete (konuşmaya) devam etmek'],
    phrase: null,
    steps: [
      '07:30 (Sabah Koruması): Kesinlikle 1 büyük bardak su içerek güne başla. Arabada/Yolda dudak titretme (Lip Trill) ile ses tellerine kan pompala.',
      'Ders İçi (Perde Yönetimi): Sınıfı bastırmak için Sesinizi yükseltmeyin (Volüm), Sesinizi KALINLAŞTIRIN (Perde). Birden kalın ve tok bir "Arkadaşlar" demek, tiz bir bağırıştan 10 kat daha fazla dikkat çeker.',
      'Teneffüs (Mutlak Sessizlik): Ders aralarındaki 10 dakikada MÜMKÜNSE tek kelime bile etmeyin. Sadece su için. Ses telinin mikro-molalara ihtiyacı vardır.',
      'Akşam (Vocal Cooldown): Eve dönerken veya eve varınca 5 dakika boyunca en pes tonda "Mmmmm" (Humming) yaparak şişen ses tellerinin inmesini (Ödem dağıtmasını) sağlayın.'
    ],
    variations: [
      '🔄 Tebeşir/Tahta Tozu: Eğer tebeşir veya tozlu ortam varsa (Toz ses teline yapışıp kurutur) gün içinde burnunuzu deniz suyuyla (Serum fizyolojik) temizleyin.'
    ],
    tip: '💡 Öğretmenler ses bankasındaki kredilerini saat saat harcarlar. Sınıfta gereksiz yere konuştuğunuz veya bağırdığınız her 1 dakika, akşam ailenize veya kendinize ayıracağınız ses enerjisinden (kredisinden) çalınmıştır. Ekonomik konuşun.',
    related: [182, 145]
  }
];

let appjs = fs.readFileSync('public/app.js', 'utf8');
let datajs = fs.readFileSync('diksiyon-data.js', 'utf8');

const newObjectsStr = rutinExercises.map(ex => JSON.stringify(ex, null, 2)).join(',\n') + '\n';

// Replace the array ending
appjs = appjs.replace(/\s*\];\s*$/, ',\n' + newObjectsStr + '];\n');
fs.writeFileSync('public/app.js', appjs, 'utf8');

datajs = datajs.replace(/\s*\];\s*$/, ',\n' + newObjectsStr + '];\n');
fs.writeFileSync('diksiyon-data.js', datajs, 'utf8');

console.log('15 items for Günlük Rutinler injected successfully.');
