const fs = require('fs');

const cocukExercises = [
  {
    id: 196, slug: '3-5-yas-temel-ses-oyunlari', cat: 'cocuk', emoji: '🦁', title: '3-5 Yaş Temel Ses Oyunları',
    dur: '5 dk', level: 'Başlangıç', freq: 'Her gün',
    desc: 'Konuşmaya yeni başlayan veya hece yutan 3-5 yaş grubu çocuklar için, hayvan seslerini taklit ederek ağız, çene ve nefes kaslarını oyunlaştırarak çalıştırma yöntemi.',
    benefits: ['Çocuğun dudak ve dil kaslarını (Artikülasyon) fark etmeden çalıştırır', 'Hece yutma problemini (Örn: "Araba" yerine "Aba") oyunla çözer', 'Ses telleri (Vokal kord) üzerindeki kontrolü artırır'],
    mistakes: ['Çocuğa "Yanlış söyledin, doğrusu şu" diyerek özgüvenini kırmak', 'Egzersizi sıkıcı bir "ders" formatında, masaya oturtarak yapmak'],
    phrase: null,
    steps: [
      '1. Aslan Esnemesi (Çene): Çocuğa "Aslan nasıl kükrer ve esner?" diye sorun. Ağzını kocaman açıp kapatmasını (Çene kası açma) sağlayın.',
      '2. Arı Vızıltısı (Dudak): "Hadi arı olalım!" diyerek dudakları birleştirip "Zzzzz" veya "Mmmmmm" sesiyle dudak titretme (Trill) yapın.',
      '3. At Koşusu (Dil): Dilinizi üst damağa vurarak "Tık tık tık" at nal sesi çıkarın. Bu dil ucunu çok hızlı çalıştırır.',
      '4. Yılan Tıslaması (Nefes): Derin bir nefes alıp "Ssssss" diyerek yavaşça sönme oyunu oynayın (Diyafram).'
    ],
    variations: [
      '🔄 Orman Gezisi: Çocuğu sırtınıza alıp evin içinde dolaşırken her odaya bir hayvan atayın ve o odaya girildiğinde o hayvanın sesiyle 10 saniye boyunca "ses kası" çalışın.'
    ],
    tip: '💡 3-5 yaş grubunda beynin öğrenme kapısı sadece "Oyun" ile açılır. Diksiyon çalışması yaptığınızı kesinlikle bilmemeli, sizinle sadece hayvanları taklit ettiğini düşünmelidir.',
    related: [197, 208]
  },
  {
    id: 197, slug: '5-7-yas-tekerleme-oyunlari', cat: 'cocuk', emoji: '🚂', title: '5-7 Yaş Tekerleme Oyunları',
    dur: '10 dk', level: 'Başlangıç', freq: 'Haftada 3 gün',
    desc: 'Okul öncesi ve 1. sınıf çocuklarında, dil sürçmelerini önleyen, R ve S gibi zor harflerin çıkışını kolaylaştıran ritimli tekerleme oyunları.',
    benefits: ['Kekeleme hissini azaltır ve akıcı konuşmayı tetikler', 'Beynin motor planlama (hangi heceyi hangi sırayla söyleyeceğim) becerisini güçlendirir', 'Kelime dağarcığını eğlenceli şekilde artırır'],
    mistakes: ['Çok uzun veya anlamsız (zor) yetişkin tekerlemeleri (Örn: Şemsipaşa Pasajı) okutarak çocuğu dilden soğutmak', 'Çocuğu hızlı söylemesi için zorlamak'],
    phrase: null,
    steps: [
      '1. Ritim Bulma (Tempo): Çocuğunuzla karşılıklı oturun ve ellerinizle dizlerinize vurarak bir ritim tutun (Pat-Pat-Şap).',
      '2. Basit Başlangıç (P, B, M): "Portakalı soydum, başucuma koydum..." gibi hecesi net, patlamalı sesleri barındıran metinlerle ısının.',
      '3. Hızlanma Oyunu: Tekerlemeyi önce kaplumbağa gibi çok yavaş (Ağzı kocaman açarak), sonra tavşan gibi hızlı, en son çita gibi çok hızlı söyleme yarışı yapın.',
      '4. Göz Teması: Tekerlemeyi söylerken mutlaka gözünün içine bakın. Yanlış söylediğinde düzeltmeyin, sadece gülümseyip siz doğru şekilde tekrar ederek model olun.'
    ],
    variations: [
      '🔄 Zıplayan Heceler: Trambolinde veya yatakta zıplarken, havaya sıçradığı anlarda vurgu yapacak şekilde (Örn: O - pi - ti - Pİ - Tİ) ritimle söyleyin.'
    ],
    tip: '💡 Çocuklarda diksiyon eğitiminin %90\'ı AİLEDİR. Çocuk, annesinin veya babasının ağız hareketlerini "Ayna Nöronlar" aracılığıyla kopyalar. Siz tane tane konuşursanız, çocuk da tane tane konuşur.',
    related: [196, 212]
  },
  {
    id: 198, slug: '7-10-yas-okuma-pratigi', cat: 'cocuk', emoji: '📖', title: '7-10 Yaş Okuma Pratiği',
    dur: '15 dk', level: 'Orta', freq: 'Her gün',
    desc: 'Okumayı yeni sökmüş çocuklarda görülen heceleyerek, nefes nefese, kelime yutarak veya robotik okuma sorunlarını "anlayarak ve canlandırarak" okumaya çeviren rutin.',
    benefits: ['Sınavlarda okuduğunu anlama hızını (Paragraf algısını) %40 artırır', 'Sınıfta tahtaya kalkıp okurken duyulan utancı ve korkuyu yener', 'Noktalama işaretlerini (Nefes duraklarını) içselleştirir'],
    mistakes: ['Okuma hızını (1 dakikada kaç kelime) ölçerek çocuğu strese sokup konuşma hızını bozmak', 'Sessiz okumayı teşvik edip, sesli okuma pratiğinden (Dudak tembelliğinden) kaçmak'],
    phrase: null,
    steps: [
      '1. Sesli Kitap Seçimi: Çocuğun İLGİSİNİ çeken bol diyaloglu bir kitap (Örn: Çizgi roman, macera) seçin.',
      '2. Rol Dağılımı (Tiyatro): Kitaptaki karakterleri bölüşün. Baba/Anne anlatıcı olsun, çocuk ana karakter olsun. Sadece kendi sırası geldiğinde seslendirsin.',
      '3. Duraklama Kuralı: "Virgül görünce içinden 1 say ve nefes al, nokta görünce içinden 2 say ve omuzlarını düşür" kuralını oyunlaştırın.',
      '4. Anlam Kontrolü: 1 sayfayı bitirince "Sence şimdi ne hissetti?" diyerek mekanik okumayı "Duygusal (ifadeli) okumaya" çevirin.'
    ],
    variations: [
      '🔄 Spiker Oyunu: Çocuğun eline bir fırça veya oyuncak mikrofon verin. Onu bir haber spikeri gibi anons edin ve okuyacağı metni bir kamera (telefonunuz) karşısında okumasını sağlayın.'
    ],
    tip: '💡 "Hızlı okuma" iyi diksiyon demek değildir. Hızlı okuyan çocuk kelimeleri yuvarlar ve beyni metni işlemez. Hedef hızlı okumak değil, "Karşıya hissettirerek (anlamlı) okumaktır".',
    related: [206, 203]
  },
  {
    id: 199, slug: 'r-harfi-duzeltme-cocuk', cat: 'cocuk', emoji: '👅', title: 'R Harfi Düzeltme (Çocuk)',
    dur: '10 dk', level: 'Orta', freq: 'Her gün',
    desc: 'Türkçede en geç öğrenilen (bazen 6 yaşına kadar süren) R harfini yutan veya Y/L gibi çıkaran çocuklar için dil ucu titreşim (Tap/Trill) oyunları.',
    benefits: ['R harfini çıkaramama kaynaklı okul zorbalığından (Alay edilmekten) çocuğu korur', 'Dili üst damağa sabitleme (Alveoler) kaslarını güçlendirir', 'Seste genel bir netlik sağlar'],
    mistakes: ['Çocuğa inatla "Araba de bakayım, A-ra-ba!" diyerek R harfi üzerinden baskı kurup psikolojik blokaj yaratmak', '6 yaşından önce çocuğun R söyleyememesini panikle "Hastalık" sanmak'],
    phrase: null,
    steps: [
      '1. Titreşim Hazırlığı: R harfi dilin titreşmesidir. Çocuğun dudaklarını titreterek (Motor Sesi - Pırrr) önce titreşimin ne olduğunu vücuda öğretin.',
      '2. D Taktikleri (Gizli R): Çocuğa hızlı hızlı "Tıdı-Tıdı-Tıdı" dedirtin. Dil üst damağa vururken D sesi hızlandıkça fizyolojik olarak R sesine (Tap R) dönüşecektir.',
      '3. Rüzgar Oyunu: Dil ucunu üst dişlerinin hemen arkasına (Damağa) değdirip, dilini düşürmeden dışarıya rüzgar (Sssss, Zzzzz) üflemesini isteyin.',
      '4. Hece Kombinasyonu: R harfini tek başına söyletmeyin. TRR, DRR, PRR gibi destekleyici ünsüzlerle (Örn: Traktör, Dirrrri, Pırrr) başlatın.'
    ],
    variations: [
      '🔄 Fıstık Ezmesi: Çocuğun üst damağına (Dişlerin tam arkasına) çok azıcık fıstık ezmesi veya çikolata sürün. Dil ucuyla onu temizlemesini isteyin. Bu, dilin R pozisyonunu (Alveoler Ridge) ezberletir.'
    ],
    tip: '💡 R harfi "Öğretilmez", sadece dilin damağa değip titreşmesi "Keşfettirilir". Çocuk D ve T harfini çıkarabiliyorsa R harfini de fizyolojik olarak çıkarabilir, sadece mekaniği henüz bulamamıştır.',
    related: [196, 200]
  },
  {
    id: 200, slug: 's-s-ayrimi-cocuk', cat: 'cocuk', emoji: '🐍', title: 'S-Ş Ayrımı ve Pelteklik',
    dur: '10 dk', level: 'Orta', freq: 'Haftada 3 gün',
    desc: 'Peltek konuşan (S\'leri diş arasından T veya F gibi çıkaran) veya S ile Ş harflerini karıştıran çocuklar için diş ve hava kanalı hizalama çalışması.',
    benefits: ['Ön dişlerin arasından kaçan havayı keserek peltekliği (Lisp) giderir', 'S ve Ş harflerindeki frekans (Islık) kirliliğini temizler', 'Okul çağında telaffuz kalitesini maksimize eder'],
    mistakes: ['Süt dişleri dökülmüş (Ön dişi olmayan) 6-7 yaş çocuğuna peltek diye diksiyon baskısı yapmak (Dişler çıkınca doğal olarak düzelir)', 'Çocuğa "Sen pelteksin" diyerek etiketi yapıştırmak'],
    phrase: null,
    steps: [
      '1. Gülümseme Kilidi: Peltekliğin en büyük sebebi dilin dışarı sarkmasıdır. Çocuğa "Kocaman gülümse ve dişlerini kapa" deyin. Bu konumda dil istese de dışarı (Dişlerin önüne) çıkamaz.',
      '2. Yılan Sesi (S): Dişler kapalı ve dudaklar yayvan (Gülümseme) iken, dilin ucunu alt dişlerin arkasına yaslayıp sadece ortadan hava üfletin (Ssssssss).',
      '3. Şşşt (Ş Sesi): Dudakları büzüp (Yuvarlak yapıp) dişler hafif açıkken "Bebeği uyutalım: Şşşşşt" diyerek dudak şeklinin sese etkisini gösterin.',
      '4. Heceleme: "Sa-Se-Sı-Si" ve "Şa-Şe-Şı-Şi" hecelerini aynada kendi dudak şekline bakarak okumasını sağlayın.'
    ],
    variations: [
      '🔄 Pipet Yöntemi: Çocuğun alt ve üst kesici dişleri arasına (Tam ortaya yatay şekilde) ince bir pipet sıkıştırın. S harfini söylerken havanın direkt pipetin içinden veya hizasından karşıya üflenmesini hedefleyin.'
    ],
    tip: '💡 Pelteklik (Sigmatizm), dilin gereğinden fazla gevşek bırakılıp hava akışının ön dişlerden değil, dilin etrafından veya dişlerin dışından kaçmasıdır. Dişleri birleştirmek ve gülümsemek S harfinin altın anahtarıdır.',
    related: [199, 196]
  },
  {
    id: 201, slug: 'sayi-sayma-ile-diksiyon', cat: 'cocuk', emoji: '🔢', title: 'Sayı Sayma ile Artikülasyon',
    dur: '5 dk', level: 'Başlangıç', freq: 'Her gün',
    desc: 'Okul öncesi (4-6 yaş) çocuklar için, zaten bildikleri rakamları kullanarak hece yutmayı engelleyen ve dudak tembelliğini kıran ritmik bir egzersiz.',
    benefits: ['Çok zorlanan çene ve dudak kaslarını fark ettirmeden esnetir (Örn: "Dört" derken dudak büzülmesi)', 'Çocuğun sayısal zekası ile dil zekasını aynı anda çalıştırır', 'Dikkat süresini (Odaklanmayı) artırır'],
    mistakes: ['Çok hızlı saymasını isteyerek rakamların başını ve sonunu yuvarlamasına izin vermek (Örn: Ye-di yerine Ye-i)'],
    phrase: null,
    steps: [
      '1. Abartılı Sayma: 1\'den 10\'a kadar olan rakamları bir tiyatro oyuncusu gibi çok abartılı ağız hareketleriyle sayın. Çocuğunuzdan sizi taklit etmesini isteyin (Biirrrr, İkiii, Üüççç...).',
      '2. Nefes Maratonu: Derin bir nefes alın ve tek nefeste 1\'den 15\'e kadar tane tane sayma yarışı yapın.',
      '3. Duygulu Sayılar: Rakamları farklı duygularla saydırın. "Şimdi 1\'den 5\'e kadar çok sinirli sayalım. Şimdi 5\'ten 10\'a kadar çok neşeli sayalım." (Tonlama becerisi).',
      '4. Atlanan Rakamlar: Çift sayıları yüksek sesle (Bağırarak), tek sayıları fısıltıyla (Sadece dudak oynatarak) sayarak ses kontrolünü öğretin.'
    ],
    variations: [
      '🔄 Merdiven Pratiği: Apartman veya park merdivenlerini çıkarken, her basamakta heceleri bölerek sağlam basmasını isteyin (Örn: O-nuz, O-n-bir).'
    ],
    tip: '💡 "Dört", "Üç", "Sekiz" gibi rakamlar yuvarlak ünlüler ve sert ünsüzler içerdiği için harika birer dudak/çene egzersizidir. Bunu oyunlaştırarak çocuğun yüz kaslarını yorulmadan eğitebilirsiniz.',
    related: [197, 214]
  },
  {
    id: 202, slug: 'sarki-ile-diksiyon', cat: 'cocuk', emoji: '🎵', title: 'Şarkı Söyleyerek Diksiyon',
    dur: '10 dk', level: 'Başlangıç', freq: 'Her gün',
    desc: 'Bebeklikten itibaren (2-7 yaş) tekerlemelerin müzikal versiyonu olan çocuk şarkılarıyla melodi, nefes yönetimi ve vurgu becerisini kazanma.',
    benefits: ['Kelimelerin sonundaki sessiz harflerin yutulmasını önler', 'Konuşmaya müzikal bir ritim katarak monotonluğu (düz konuşmayı) bozar', 'Ses perdelerini (İnce ve Kalın) kullanmayı öğretir'],
    mistakes: ['Çocuğu kendi kapasitesinin üzerindeki yüksek notalara çıkmaya zorlayarak ses tellerinde (Nodül) hasar yaratmak', 'Sadece televizyondaki/tabletteki şarkıyı dinletip eşlik etmemek (Aktif söyleme şarttır)'],
    phrase: null,
    steps: [
      '1. Şarkı Seçimi: Heceleri net ve temposu yavaş olan klasik çocuk şarkılarını (Örn: Ali Babanın Çiftliği, Kırmızı Balık) açın.',
      '2. Dudak Senkronizasyonu: Önce sesi tamamen kapatın ve şarkıyı sadece aynada "Dudak Okuma" oyunu şeklinde, ses çıkarmadan abartılı dudak hareketleriyle söyleyin.',
      '3. Ritim Eşliği: Şarkıyı söylerken ellerle çırpma veya bacaklara vurma ile şarkının her kelimesine vurgu (Pulse) atın.',
      '4. Duraklama ve Nefes: Şarkıdaki müzikal boşluklarda ("Eeeeee..." kısımları) derin nefes almanın (Diyafram) doğal gerekliliğini gösterin.'
    ],
    variations: [
      '🔄 Kedi Dili: Şarkının sözlerini kullanmak yerine tüm şarkıyı "Miyav-Miyav" veya "Hav-Hav" diyerek (Melodiyi bozmadan) söyleyin. Bu çeneyi rahatlatır.'
    ],
    tip: '💡 Müzik ve dil, beynin birbirine en yakın noktalarında işlenir. Müzikal olarak kelimeleri net çıkaran çocuk, konuşurken de aynı netliği refleks olarak kopyalar.',
    related: [201, 213]
  },
  {
    id: 203, slug: 'hikaye-okuma-sureci', cat: 'cocuk', emoji: '📚', title: 'Hikaye Okuma Süreci ve Diksiyon',
    dur: '20 dk', level: 'Başlangıç', freq: 'Her Gece',
    desc: 'Ebeveynlerin çocuklarına (0-8 yaş) yatmadan önce kitap okurken kullandıkları tonlamaların, çocuğun gelecekteki konuşma tarzını nasıl belirlediği üzerine bir ebeveyn rehberi.',
    benefits: ['Çocuğun akustik hafızasına (Nasıl güzel konuşulur) mükemmel bir şablon bırakır', 'Çocuğun dinleme (Odak) süresini 5 dakikadan 30 dakikaya çıkarır', 'Duygusal zeka ve empati yeteneğini geliştirir'],
    mistakes: ['Hikayeyi mekanik, düz, tek düze (Monoton) ve hızlı bir şekilde sadece bitirmek için okumak', 'Kitaptaki kötü karakterlerin seslerini çocuğu korkutacak derecede abartmak'],
    phrase: null,
    steps: [
      '1. Karakter Sesi (Ses Rengi): Kurbağa için boğuk/kalın (Göğüs sesi), prenses için ince/narin (Kafa sesi), kurt için tıslayan bir ses (Diyafram) belirleyip hikaye boyunca buna sadık kalın.',
      '2. Pacing (Hız ve Es): Olayların heyecanlılaştığı yerde sesinizi hızlandırın ve yükseltin; gizemli yerlerde fısıldayın ve duraklayın (Es verin).',
      '3. Etkileşim: "Sence şimdi ne olacak?" diyerek çocuğun da hikayeye kendi cümleleriyle (Spontane Diksiyon) katılmasını sağlayın.',
      '4. Model Olun: Virgüllerde, noktalarda ve ünlemlerdeki ses dalgalanmanızı (Melodi) o kadar net yapın ki, çocuk ileride kitap okurken sizin o melodinizi kopyalasın.'
    ],
    variations: [
      '🔄 Sesli Sayfa Değişimi: Çocuğa, "Sadece senin sıran geldiğinde, o sayfayı sen anlatacaksın (Kendi uydurduğu kelimelerle)" deyin. Resimlere bakarak doğaçlama yapsın.'
    ],
    tip: '💡 Çocuğun ilk diksiyon hocası masal okuyan annesi ve babasıdır. Siz virgülleri atlarsanız, o da atlar. Siz "Geliyoruuuum" derseniz, o da kelimeleri sündürür. Standart ve akıcı bir Türkçe kullanın.',
    related: [198, 209]
  },
  {
    id: 204, slug: 'dil-terapisi-temelleri', cat: 'cocuk', emoji: '⚕️', title: 'Dil Terapisi Temelleri (Ebeveyn Kılavuzu)',
    dur: 'Bilinçlenme', level: 'İleri', freq: 'Kılavuz',
    desc: 'Çocuktaki konuşma bozukluğunun basit bir tembellik mi yoksa uzman (Dil ve Konuşma Terapisti - DKT) müdahalesi gerektiren patolojik bir sorun mu olduğunu ayırt etme rehberi.',
    benefits: ['Erken müdahale ile kalıcı konuşma bozukluklarının önüne geçer', 'Ailenin "Zamanla düzelir" diyerek altın yılları (2-5 yaş) kaybetmesini önler', 'Dil altı bağı gibi anatomik sorunların teşhisini hızlandırır'],
    mistakes: ['Kekeleyen çocuğun cümlesini onun yerine tamamlamak (Bu psikolojik baskıyı katlar)', 'Doktor kontrolünden geçmemiş bir peltekliği evde tekerlemeyle çözmeye çalışmak'],
    phrase: null,
    steps: [
      '1. Yaş ve Harf Uyumunu Bilin: 3 yaşındaki çocuk K ve G harflerini, 4 yaş P,B,T,D harflerini, 5-6 yaş S,Z,Ş,C,Ç harflerini, 6-7 yaş ise R harfini net çıkarabilmelidir.',
      '2. Gecikmiş Konuşma Sinyalleri: 2 yaşına geldiği halde hiç kelimesi yoksa veya 3 yaşına geldiği halde 3 kelimeli (Anne su ver) basit cümleler kuramıyorsa mutlaka uzman görün.',
      '3. Anatomik Kontrol: Çocuğun dilini yukarı (damağa) veya dışarı çıkarırken zorlandığını, dil ucunun V (kalp) şeklini aldığını görüyorsanız "Dil Altı Bağı" (Ankyloglossia) olabilir, KBB uzmanına görünün.',
      '4. Kekemelik Farkındalığı: 2-5 yaş arasında düşünce hızı ile dil kası hızı eşleşmediği için "Gelişimsel Takılmalar" normaldir. Ancak bu takılmalara yüz buruşturma, göz kırpma, nefes tıkanması ekleniyorsa DKT şarttır.'
    ],
    variations: [
      '🔄 Soru Sorma Terapisi: Evde çocuğu teste sokar gibi "Bu ne renk? Bu hayvan ne?" demek yerine, paralel konuşma yapın ("Aaa bak kırmızı bir araba geçiyor" diyerek siz modeli sunun).'
    ],
    tip: '💡 Diksiyon eğitmenleri "Konuşabilenlerin" sanatını güzelleştirir; Dil ve Konuşma Terapistleri (DKT) ise konuşmadaki "Hastalıkları" çözer. Patolojik durumları (Kekemelik, Ses Teli Nodülü, Yarık Damak) diksiyon kurslarıyla değil, hastanelerle çözün.',
    related: [207, 199]
  },
  {
    id: 205, slug: 'beden-dili-ile-konusma-cocuk', cat: 'cocuk', emoji: '🧍', title: 'Beden Dili ve Konuşma (Çocuk)',
    dur: '5 dk', level: 'Başlangıç', freq: 'Oyun Saatlerinde',
    desc: 'Konuşurken donuk kalan veya elleri kolları nereye koyacağını bilemeyen (utanıp cebine sokan) çocuklar için jest, mimik ve duruş (postür) oyunları.',
    benefits: ['Çocuğun anlattığı konuya duyduğu özgüveni anında artırır', 'Enerjiyi bedene yaydığı için sesteki titremeleri engeller', 'Büyüdüğünde sahne/tahta fobisi (Glossophobia) yaşamasını önler'],
    mistakes: ['Çocuğa sürekli "Ellerini bağla, dik dur, kıpırdama" diyerek doğal vücut dilini (spontanitesini) robotlaştırmak'],
    phrase: null,
    steps: [
      '1. Sessiz Sinema: Konuşmayı tamamen yasaklayın. Çocuğun sadece yüzünü (mimik) ve ellerini kullanarak size bir duyguyu (Üzgün, çok sevinçli, şaşkın) anlatmasını isteyin.',
      '2. Devleşme ve Küçülme: "Bana çok büyük bir ağacı anlat" dediğinizde ellerini havaya kaldırarak devleşsin, "Küçücük bir böceği anlat" dediğinde büzülsün. Sesi bedenle eşleştirin.',
      '3. Ayna Oyunu: Karşılıklı geçin. Siz hangi el ve yüz hareketini yaparsanız aynı anda ayna gibi aynısını yapsın (Motor-Nöron eşlemesi).',
      '4. Göz Teması Yakalama: Çocuğun alnına veya burnuna komik bir çıkartma yapıştırın, konuştuğu süre boyunca o çıkartmaya bakarak göz temasından kaçmamasını (Oyunla) sağlayın.'
    ],
    variations: [
      '🔄 Heykel Oyunu: Müzik çalarken odayı gezip, durduğunda size belli bir duygu heykeli (Kızgın adam heykeli) olup 5 saniye öyle durmasını sağlayın. Konuşmadaki ES (duraklama) mantığı vücuda böyle kodlanır.'
    ],
    tip: '💡 Sözsüz iletişim, sözlü iletişimin yakıtıdır. Bedenini (kollarını) rahatça kullanan bir çocuğun diyaframı açılır, sesi gürleşir ve beyni daha hızlı kelime üretir.',
    related: [210, 196]
  },
  {
    id: 206, slug: '10-12-yas-sunum-hazirligi', cat: 'cocuk', emoji: '📊', title: '10-12 Yaş Okul Sunumu Hazırlığı',
    dur: '15 dk', level: 'Orta', freq: 'Sunum Öncesi',
    desc: 'Ortaokul çağındaki çocukların (Ön Ergenlik) sınıf önünde performans sergilerken yaşadıkları ses çatallanmaları, utangaçlık ve kelime yutmalarına yönelik profesyonel hazırlık.',
    benefits: ['Ses kırılmalarını (Mutasyonel falset) kontrol altında tutar', 'Ödevi tahtaya/kağıda bakarak okumak yerine "Seyirciye (Sınıfa) Anlatma" yeteneği katar', 'Liderlik aurası kazandırır'],
    mistakes: ['Ezberlemeye teşvik etmek (Ezberleyen çocuk kelimeyi unuttuğunda kilitlenir ve panikler)', 'Aşırı hızlı okuyup yerine oturmasına göz yummak'],
    phrase: null,
    steps: [
      '1. Not Kartı Kullanımı (Ezbere Hayır): Sunum metnini kelimesi kelimesine A4 kağıda yazmak yerine, küçük kartlara (Cue cards) sadece konu başlıklarını yazdırın.',
      '2. 3 Saniye Kuralı: Tahtaya çıktığında hemen konuşmaya başlamaması, sınıfın gözlerine bakıp içinden 3\'e kadar sayması ve derin nefes (Diyafram) almasını öğretin.',
      '3. Üçgen Bakış Taktikleri: Bütün sınıfa bakmak zor geliyorsa, sınıfın sağ arkasında 1, sol arkasında 1 ve ortasında 1 arkadaş seçip sadece bu 3 noktaya sırayla bakarak (Üçgen) konuşmasını tavsiye edin.',
      '4. Yüksek Ses Provası: Odasının en uzak köşesine geçin ve size sunumu o mesafeden, "Bağırmadan ama net" duyurmasını (Volüm projesi) isteyin.'
    ],
    variations: [
      '🔄 Engel Çıkarma Provası: Evde prova yaparken siz bilerek dikkatini dağıtacak şeyler yapın (El çırpın, soru sorun). Çocuk duraklayıp nefes almayı ve sakince devam etmeyi öğrensin.'
    ],
    tip: '💡 Ortaokul çocuklarında (Özellikle erkeklerde) ses telleri büyüdüğü için ses detone olur (çatlar). Bunun çok doğal bir biyolojik süreç olduğunu, utanmaması gerektiğini ve yavaş konuştuğunda çatlamanın azalacağını anlatın.',
    related: [198, 209]
  },
  {
    id: 207, slug: 'cocuklarda-kekemelik-farkindaligi', cat: 'cocuk', emoji: '🛑', title: 'Kekemelik Farkındalığı',
    dur: 'Bilgi', level: 'İleri', freq: 'Kılavuz',
    desc: '2-5 yaş arası çocuklarda çok sık görülen gelişimsel takılmaları, kalıcı ve psikolojik kekemeliğe dönüştüren ebeveyn hataları ve doğru iletişim yöntemleri.',
    benefits: ['Gelişimsel kekemeliğin kalıcı hale gelmesini %80 oranında engeller', 'Çocuğun konuşma stresini ve kaygısını (Performans anksiyetesi) azaltır', 'Ailedeki panik ortamını sakinleştirir'],
    mistakes: ['Çocuğa "Derin nefes al, yavaş konuş, düşün de söyle" diyerek SÜREKLİ TALİMAT VERMEK', 'Çocuk takıldığında onun yerine cümleyi hızla bitirivermek'],
    phrase: null,
    steps: [
      'Kural 1 (Sakin Kalma): Çocuğunuz takıldığında ("B-b-b-ben s-s-su...") yüzünüzdeki ifadeyi değiştirmeyin. Endişelenmeyin. Göz temasını asla kesmeyin.',
      'Kural 2 (Bekleme): O cümleyi bitirene kadar 5 dakika bile sürse sabırla dinleyin. Cümlesini ONUN YERİNE ASLA TAMAMLAMAYIN.',
      'Kural 3 (Kendi Hızınız): Ona "Yavaş konuş" demek yerine, SİZ KENDİ KONUŞMANIZI yavaşlatın. Siz çok hızlı ve telaşlı konuşursanız, çocuk o tempoya yetişmek için kasılır ve takılır.',
      'Kural 4 (Dikkat Dağıtma): Sorularla onu sıkıştırmayın ("Bugün ne yaptın, kiminle oynadın?"). Bunun yerine siz gününüzü anlatın. Kendini hazır hissettiğinde o dahil olsun.'
    ],
    variations: [
      '🔄 Ritimle Şarkı: Kekeme çocuklar şarkı söylerken TAKILMAZLAR. Çünkü beynin melodi merkezi ile konuşma merkezi farklıdır. Konuşmakta zorlandığı anlarda konuyu hemen sevdiği bir şarkıyı mırıldanmaya çevirin.'
    ],
    tip: '💡 2-5 yaş arasında düşünce hızı "Ferrari", dilin motor kas sistemi ise "Bisiklet" gibidir. Ferrari hızıyla gelen düşünceleri bisiklet hızıyla ağızdan çıkarmaya çalışan her çocuk takılır. Bu bir zeka belirtisidir, hastalık değil. Zamanla eşleşir.',
    related: [204, 197]
  },
  {
    id: 208, slug: 'nefes-oyunlari', cat: 'cocuk', emoji: '🎈', title: 'Çocuklar İçin Nefes Oyunları',
    dur: '5 dk', level: 'Başlangıç', freq: 'Haftada 3 gün',
    desc: 'Diksiyonun ve sağlıklı sesin kalbi olan diyafram nefesini, 4-8 yaş çocuklarına teknik terimler (Diyafram, interkostal kas) kullanmadan, oyun ve oyuncaklarla öğretme yöntemleri.',
    benefits: ['Çocuğun bağırırken sesini kısmasını (Nodül riskini) önler', 'Konuşurken nefes nefese kalıp heceleri yutmasını durdurur', 'Heyecan ve kaygı (okul stresi) durumlarında çocuğu anında sakinleştirir'],
    mistakes: ['Çocuğa "Derin nefes al" dediğinizde, omuzlarını boynuna kadar çekerek göğsünü şişirmesine (Clavicular nefes) izin vermek'],
    phrase: null,
    steps: [
      '1. Pelüş Oyuncak Asansörü: Çocuğu sırtüstü yere yatırın. Göbeğine en sevdiği hafif oyuncağı koyun. "Şimdi burnundan nefes al ve bu oyuncağı göbeğinle tavana kaldır, ağzından verirken indir" deyin.',
      '2. Balon Şişirme: Aslında mükemmel bir diyafram egzersizidir. Yanakları (çeneyi) değil, karın kaslarını kullanarak balonu şişirmesi gerektiğini gösterin.',
      '3. Mum Söndürme Yarışı: Masanın ucuna bir mum koyun (Güvenlik dahilinde). Derin nefes alıp, "Fffff" diyerek çok hafif üflemeyle (Mumu söndürmeden alevini titreterek) en uzun kim dayanacak yarışı yapın.',
      '4. Pinpon Topu Üfleme: Masanın üstündeki bir pinpon topunu veya kağıt parçasını pipet yardımıyla karşı kaleye (Nefes kontrolüyle) gol atma oyunu oynayın.'
    ],
    variations: [
      '🔄 Yılan Çıngırağı: Nefes alırken sessiz (avcı yılan), nefes verirken 10 saniye boyunca Sssss (tıslayan yılan) olma oyunu. Bu kontrollü (yavaş) nefes vermeyi öğretir.'
    ],
    tip: '💡 Çocuklar bebekken doğal olarak %100 diyafram nefesi alırlar (Uyuyan bir bebeğin göbeğine bakın). 3-4 yaşından sonra strese ve oturma bozukluklarına bağlı olarak nefes göğüse (omuzlara) çıkar. Amacımız yeni bir şey öğretmek değil, unuttuğu doğruyu hatırlatmaktır.',
    related: [200, 196]
  },
  {
    id: 209, slug: 'sesli-dusunme-egzersizi', cat: 'cocuk', emoji: '🤔', title: 'Sesli Düşünme Egzersizi',
    dur: '10 dk', level: 'Orta', freq: 'Haftada 2 gün',
    desc: 'Kelime hazinesi daralan, cümleleri "şey, yani, ııı" ile dolduran 8-12 yaş çocuklarda, düşünceleri (soyut) kelimelere (somut) dökme köprüsünü hızlandıran doğaçlama tekniği.',
    benefits: ['"Iıı", "Eee" gibi asalak sesleri (filler words) konuşmadan temizler', 'Spontane (Hazırlıksız) ortamlarda çocuğun kilitlenmeden konuşmasını sağlar', 'Analitik ve betimleyici (Tasvir) zekayı güçlendirir'],
    mistakes: ['Çocuk "ııı" dediğinde onu "ııı deme, düzgün konuş!" diyerek azarlayıp tamamen susmasına neden olmak'],
    phrase: null,
    steps: [
      '1. Rastgele Nesne: Çocuğun önüne evden rastgele ve absürt bir nesne koyun (Örn: Sarı bir limon, eski bir anahtar, televizyon kumandası).',
      '2. Betimleme Seli: 1 dakika boyunca o nesneye bakarak aklına gelen HER ŞEYİ hiç durmadan sesli söylemesini isteyin. (Örn: "Bu sarı, yuvarlak, ekşi, pürüzlü, dün salataya sıktık, ağacından düşmüş...") Mantıklı olması gerekmez.',
      '3. Hikaye Uydurma (Bağlam): Önündeki nesneyi kullanarak uydurma bir hikaye başlatmasını isteyin. "Bir gün bu kumanda dile gelmiş ve..."',
      '4. Dur-Devam Oyunu: O hikaye anlatırken siz aniden "DUR" deyin (Nefes alsın), sonra "DEVAM" diyerek kaldığı yerden es vererek başlamasını sağlayın.'
    ],
    variations: [
      '🔄 Kör Ebe Anlatımı: Gözlerini bağlayın. Eline bir nesne verin. Dokunarak hissettiği şeyi sadece kelimelerle size öyle bir anlatsın ki, gözünüz kapalı siz de ne olduğunu anlayın.'
    ],
    tip: '💡 "Iıı" demek bilgisayarın kum saati (Yükleniyor) ikonudur. Beyin o an doğru kelimeyi ararken ağız boş durmasın diye bu sesi üretir. Çocuğa "ııı" yerine SESSİZCE (es vererek) düşünmeyi, yani sessizliğin korkutucu olmadığını öğretmeliyiz.',
    related: [205, 206]
  },
  {
    id: 210, slug: 'ayna-oyunu', cat: 'cocuk', emoji: '🪞', title: 'Ayna Karşısında Yüz Kasları',
    dur: '5 dk', level: 'Başlangıç', freq: 'Her gün',
    desc: 'Dudak tembelliği (ağzını hiç açmadan, dişleri arasından mırıldanarak konuşan) olan çocuklar için, komik yüz ifadeleriyle artikülasyon kaslarını açma pratiği.',
    benefits: ['Çene kilidini çözer (A-O-U harflerinin anlaşılırlığını %100 artırır)', 'Yüz kaslarındaki stresi azaltır', 'Öz farkındalığı (Kendi ağzının nasıl çalıştığını görme) geliştirir'],
    mistakes: ['Ayna karşısında çocuğun hatalarına (çarpık diş, dudak yapısı) vurgu yaparak beden algısı (body image) stresi yaratmak'],
    phrase: null,
    steps: [
      '1. Karşılıklı Geçiş: Büyük bir aynanın karşısına yan yana geçin.',
      '2. Çirkinleşme Yarışı: Burnunuzu, ağzınızı, yanaklarınızı ne kadar yamultup, şişirip komik (çirkin) yapabileceğiniz konusunda yarışın. Bu işlem donuk yüz kaslarını (Fasiyal kaslar) esnetir.',
      '3. Abartılı Ünlüler: Ses çıkarmadan, aynadaki kendinize bakarak ağzı en büyük şekle sokarak "A-E-I-İ-O-Ö-U-Ü" harflerinin şeklini yapın.',
      '4. Dil Çıkarma: Dilinizi aynaya doğru uzatabildiğiniz kadar uzatın, sonra burnunuza, sonra çenenize dokundurmaya çalışın (Dilin boyunu ve esnekliğini test edin).'
    ],
    variations: [
      '🔄 Kalem Saklama: Çocuğun dudaklarının arasına (dişlere değil, bıyık bölgesine) yatay bir kurşun kalem koyun. Üst dudak ve burunla o kalemi düşürmeden 1 dakika tutma oyunu (Dudak üstü kasları muazzam geliştirir).'
    ],
    tip: '💡 Konuşurken dudakları kıpırdatmamak (Tembellik) genellikle bir güven sorunudur. Saklanan, içine kapanık çocuk ağzını açmaz. Ayna karşısında delice ağzını açarak "çirkinleşmek" ona şu mesajı verir: "Ağzımı kullanmak güvenli ve eğlencelidir".',
    related: [201, 196]
  },
  {
    id: 211, slug: 'kukla-ile-diksiyon', cat: 'cocuk', emoji: '🧸', title: 'Kukla ile Diksiyon Aktarımı',
    dur: '10 dk', level: 'Başlangıç', freq: 'Haftada 2 gün',
    desc: 'Utangaç, kendi sesiyle yüzleşmekten çekinen veya diksiyon egzersizini reddeden 4-7 yaş grubu için "Üçüncü şahıs (Kukla)" aracılığıyla verilen dolaylı terapi.',
    benefits: ['Çocuğun kendi üzerinden atamadığı kaygıyı kuklaya yükleyerek (Yansıtma) onu rahatlatır', 'Diksiyon hatalarını düzeltirken çocuğun "Ben yanlış yaptım" hissini "Kukla yanlış yaptı" hissiyle değiştirerek egoyu korur'],
    mistakes: ['Kuklayı çocuğun üstüne çok hızlı ve korkutucu (yüksek sesle) getirerek onu irkiltmek'],
    phrase: null,
    steps: [
      '1. Kuklayı Tanıtma: Elinize bir çorap veya parmak kuklası takın. Ona tiz ve komik bir ses verin. Kuklanın adı "Peltek Pırpır" olsun.',
      '2. Yanlış Model Sunma: Kukla bilerek kelimeleri yanlış, hızlı veya yutarak söylesin. "Merhaba, benn... bnn... ben çok hzzlı kşrm." (Bilerek hata yapın).',
      '3. Çocuğu Öğretmen Yapma: Çocuğa, "Aaa Pırpır çok hızlı konuşuyor anlaşılmıyor. Ona yavaş ve güzel konuşmayı öğretir misin?" diyerek Rolleri Değişin.',
      '4. Çocuğun Modeli: Çocuk, sırf kuklaya doğruyu öğretmek için kendi konuşmasını maksimum derecede düzeltir, tane tane ve harika bir diksiyonla kuklaya örnek olur.'
    ],
    variations: [
      '🔄 İki Kukla: Çocuğun eline de bir kukla verin. Egzersizleri "Kuklalar birbiriyle konuşuyor" konseptinde yaparak çocuğun tamamen perdenin arkasında kalmasını (Maksimum güvenlik alanı) sağlayın.'
    ],
    tip: '💡 Çocuk psikolojisinde "Ben yapamıyorum" demek çok ağırdır. Ama "Kukla (Oyuncak Ayı) yapamıyor, ona ben öğretebilirim" demek mükemmel bir motivasyondur. Diksiyonu, çocuğa değil, onun oyuncağına öğretin.',
    related: [203, 196]
  },
  {
    id: 212, slug: 'yarisma-formatinda-tekerleme', cat: 'cocuk', emoji: '🏁', title: 'Yarışma Formatında Tekerleme',
    dur: '10 dk', level: 'Orta', freq: 'Hafta Sonu',
    desc: '7-12 yaş arası (Rekabet duygusu gelişmiş) çocuklarda, monotonluğu ve dikkati dağılmayı önlemek için tekerleme ve artikülasyon çalışmalarını turnuvaya çevirme.',
    benefits: ['Çocuğun kendi sınırlarını (Hız ve Netlik) zorlamasını sağlar', 'Takılma anında (Hata) pes etmeyip cümleyi toparlama (Kriz yönetimi) yeteneği verir', 'Ailecek yapılan harika bir diksiyon aktivitesidir'],
    mistakes: ['Çocuğun her yarışmayı kaybetmesine izin verip hevesini kırmak veya tam tersi sürekli bilerek kaybedip sahtelik yaratmak'],
    phrase: null,
    steps: [
      '1. Turnuva Hazırlığı: 3 adet farklı zorlukta tekerleme kağıdı hazırlayın (Kolay: Bir berber..., Orta: Şu yoğurdu..., Zor: Şemsipaşa...).',
      '2. Kural Seti: Sadece hızlı okumak puan getirmez. Kural: "En hızlı ama HİÇBİR HARFİ YUTMADAN okuyan kazanır."',
      '3. Kronometre: Telefonunuzun kronometresini açın. Önce siz okuyun (Bilerek 1-2 yerde hafif takılın ki çocuk cesaretlensin). Süreyi not edin.',
      '4. Puanlama: Çocuk okusun. Harf yuttuğu her kelime için süresine 1 saniye ceza ekleyin. (Bu kural onu hızlı okumaktansa NET okumaya zorlar).'
    ],
    variations: [
      '🔄 Duygu Yarışması: Süre tutmak yerine, kağıttan kura çekin (Sinirli, Ağlayarak, Çok Sevinçli). Tekerlemeyi o duyguyla en inandırıcı okuyan 10 puan alır.'
    ],
    tip: '💡 Rekabet, beynin odaklanma hormonu olan dopamini artırır. Sıkıcı bir Türkçe ödevi, elinizde bir kronometre tuttuğunuz anda Olimpiyat Finali\'ne dönüşür.',
    related: [197, 215]
  },
  {
    id: 213, slug: 'alfabe-sarkisi-telaffuz', cat: 'cocuk', emoji: '🔤', title: 'Alfabe Şarkısı ve Fonetik',
    dur: '5 dk', level: 'Başlangıç', freq: 'Her gün',
    desc: 'Okuma yazma öğrenme arifesindeki (5-6 yaş) çocuklar için, harflerin isimlerini değil "SESLERİNİ" (Fonemlerini) ağız anatomisiyle birleştirme şarkısı.',
    benefits: ['Harflerin ağızdan nasıl çıktığını görselleştirir (Fonetik farkındalık)', 'Okuma yazma sürecini (Hecelemeyi) hızlandırır', 'R, S, K gibi zor fonemlerin yerini beyne kazır'],
    mistakes: ['Çocuğa "Ke, Ls, Me" gibi harf isimleriyle diksiyon öğretmek (Harfler Ke değil Kk, Ls değil Lll şeklinde sadece Sesiyle öğretilmelidir)'],
    phrase: null,
    steps: [
      '1. Fonetik Okuma: Alfabeyi öğretirken "Be" demeyin, sadece dudağı patlatın "B!". "Se" demeyin, tıslayın "Ssss!". "Re" demeyin, titretin "Rrrrr!".',
      '2. Vücutla Harf Yapma: Hangi sesi çıkarıyorsanız o sesin özelliğini ellerinizle gösterin. (Örn: P! derken ellerinizi aniden açıp patlama yapın. S! derken elinizle yılan gibi kıvrılın).',
      '3. Ayna Eşleşmesi: Seçtiğiniz 5 zor harfi aynada yapın. Çocuğun aynada sizin dudak kıvrımınızı birebir kopyalamasını izleyin.',
      '4. Şarkı (Uydurma): "A a araba, B b b balon, S ss su..." şeklinde basit bir ritim uydurarak harflerin çıkış sesini kelimenin başına mühürleyin.'
    ],
    variations: [
      '🔄 Vücut Alfabesi: Harfi söylerken kollarınızla o harfin şeklini yapın (Örn: Y yaparken kollar havaya V gibi). Beden ve ses hafızası birbirine kilitlenir.'
    ],
    tip: '💡 Yetişkinler kelimeleri okurken harfleri görmez, bütün olarak görür. Ancak çocuklar kelimeyi üretirken ses birimlerine (Fonemlere) muhtaçtır. Sesi (Örn: C harfinin damağa vurmasını) hisseden çocuk diksiyonda asla hata yapmaz.',
    related: [196, 201]
  },
  {
    id: 214, slug: 'tonlama-oyunlari', cat: 'cocuk', emoji: '🎭', title: 'Tonlama Oyunları (Duygu Kutusu)',
    dur: '10 dk', level: 'Orta', freq: 'Haftada 2 gün',
    desc: 'Sürekli bağırarak (Yüksek perdeden) konuşan veya çok mıy mıy (Tekdüze) konuşan 6-10 yaş çocukların "Sesin Rengi" kavramını fark etmesi için tiyatral çalışma.',
    benefits: ['Çocuğun duygularını ifade ederken hırçınlaşmasını (bağırmasını) önler', 'İletişimde empatinin temeli olan "Karşı tarafın ses tonunu anlama" yeteneği katar', 'Robotik kitap okumayı bitirir'],
    mistakes: ['Çocuğa sürekli "Bağırma, Sesini alçalt" diyerek onu susturmak (Bunun yerine sesi "Yumuşatmayı" göstermelisiniz)'],
    phrase: null,
    steps: [
      '1. Duygu Kutusu: Bir kutuya minik kağıtlar atın (Mutlu, Kızgın, Korkmuş, Şaşkın, Uykulu, Gizli Sır).',
      '2. Tek Cümle Kuralı: Evrensel, çok basit bir cümle seçin. Örn: "Bugün hava çok güzel."',
      '3. Çek ve Söyle: Çocuk kutudan bir kağıt çeker. Eğer "Korkmuş" çıktıysa, "Bugün hava çok güzel" cümlesini titreyerek ve korkarak, "Uykulu" çıktıysa esneyerek ve fısıltıyla söyler.',
      '4. Rol Değişimi: Sıra size geçer. Siz de bir duygu çekip abartılı bir şekilde oynarsınız.'
    ],
    variations: [
      '🔄 Sesin Rengi Boyaması: Çocuğa boya kalemleri verin. "Bağıran ses sence ne renk?" (Muhtemelen kırmızı der), "Fısıldayan ses sence ne renk?" (Mavi der). "Peki sen şu an hangi renkle konuşuyorsun?" diyerek ses-renk-duygu bağdaşımı kurdurun.'
    ],
    tip: '💡 Diksiyonda buna "Enternasyon (Tonlama)" denir. Aynı kelimeler, farklı bir ses melodisiyle tamamen farklı bir anlam (Hatta ironi) yaratır. Çocuğa kelimelerin değil, melodinin gücünü öğretin.',
    related: [205, 198]
  },
  {
    id: 215, slug: 'cocugun-kendi-sesini-tanimasi', cat: 'cocuk', emoji: '🎙️', title: 'Çocuğun Kendi Sesini Tanıması',
    dur: '10 dk', level: 'Başlangıç', freq: 'Ayda 1 Kez',
    desc: 'Çocukların (ve hatta yetişkinlerin) kendi seslerini bir kayıttan duyduklarında yaşadıkları yabancılaşmayı (Yabancılaşma Efekti) kırmak ve düzeltme farkındalığı yaratmak.',
    benefits: ['Çocuğun dışarıdan (Toplum içinde) nasıl duyulduğunu kendi kulaklarıyla fark etmesini sağlar', 'Hece yutma ve çok hızlı konuşma sorunlarında anında "Aydınlanma" yaşatır', 'Mikrofon/Kamera fobisini (Kayıt korkusu) küçük yaşta yener'],
    mistakes: ['Kaydı dinletirken "Bak gördün mü ne kadar kötü konuşuyorsun, S\'leri yutuyorsun" diyerek kaydı bir silah (yargılama) olarak kullanmak'],
    phrase: null,
    steps: [
      '1. Eğlenceli Kayıt: Telefonun ses kaydedicisini (Voice Memo) açın. Çocuğa, "Sence sesimiz telefonda nasıl çıkacak, bir masal anlatsana" diyerek 30 saniyelik doğal bir konuşma kaydı alın.',
      '2. İlk Dinleme (Şok): Kaydı beraber dinleyin. Çocuk muhtemelen "Aaa benim sesim böyle mi, çok komik!" diyecektir. (İnsanın kendi sesini kemik iletimi yerine hava iletimiyle duyması hep şaşırtıcıdır).',
      '3. Hedefli Dinleme: Çocuğa sorun: "Sence bu konuşan çocuk çok mu hızlı koşuyor (konuşuyor), yoksa yavaş mı?"',
      '4. İkinci Kayıt (Düzeltme): "Şimdi radyodaki spiker amcalar gibi çok yavaş ve net bir daha kaydedelim" diyerek 2. kaydı alın ve ikisi arasındaki "Kalite" farkını çocuğun kendi kendine bulmasını sağlayın.'
    ],
    variations: [
      '🔄 Yankı Oyunu: Varsa bir mikrofon (Yankı özellikli), ses sistemine bağlayıp "Alo alo" testleri yaparak çocuğun sesiyle bir oyuncak gibi oynamasına izin verin. Ses bir enstrümandır.'
    ],
    tip: '💡 Hiçbir insan kendi sesini dışarıdan bir cihaza kaydetmeden "Gerçekte nasıl konuştuğunu" bilemez. Çünkü biz kendi sesimizi kafatasımızdaki (kemik) titreşimlerden daha tok ve daha yavaş duyarız. Kayıt cihazı diksiyonun en acımasız ama en iyi aynasıdır.',
    related: [214, 203]
  }
];

let appjs = fs.readFileSync('public/app.js', 'utf8');
let datajs = fs.readFileSync('diksiyon-data.js', 'utf8');

const newObjectsStr = cocukExercises.map(ex => JSON.stringify(ex, null, 2)).join(',\n') + '\n';

// Replace the array ending
appjs = appjs.replace(/\s*\];\s*$/, ',\n' + newObjectsStr + '];\n');
fs.writeFileSync('public/app.js', appjs, 'utf8');

datajs = datajs.replace(/\s*\];\s*$/, ',\n' + newObjectsStr + '];\n');
fs.writeFileSync('diksiyon-data.js', datajs, 'utf8');

console.log('20 items for Cocuk Diksiyon injected successfully.');
