// ══════════════════════════════════════════════════════════════
//  🗣️ OKUNUŞLAR — Türkçe Söyleniş Rehberi
//  Yazıldığı gibi değil, söylendiği gibi!
//  KURAL: Sadece yazılış ≠ söyleniş olan kelimeler!
// ══════════════════════════════════════════════════════════════

const OKUNUSLAR_DATA = [

  // ══════════════════════════════════════════════════════════
  // 1. GÜNLÜK KONUŞMA KISALTMALARI
  // ══════════════════════════════════════════════════════════
  { id:'o1',   yazi:'değil',           soylenis:'diil',              kategori:'gunluk',     zorluk:'kolay', aciklama:'"ğ" önceki "e" ile kaynaşarak uzun "i" üretir. Herkes "değil" der ama kimse öyle söylemez.', ornek:'Bu doğru değil → Bu doğru diil' },
  { id:'o2',   yazi:'değil mi',        soylenis:'dimi',              kategori:'gunluk',     zorluk:'kolay', aciklama:'"değil mi" 7 harften 4 sese iner. Türkçenin en hızlı kısalmasıdır.', ornek:'Güzel değil mi? → Güzel dimi?' },
  { id:'o3',   yazi:'ne yapıyorsun',   soylenis:'napıyon',           kategori:'gunluk',     zorluk:'kolay', aciklama:'"ne yap-" → "nap-", "-ıyorsun" → "-ıyon". Ciddi bir kısalma.', ornek:'Ne yapıyorsun? → Napıyon?' },
  { id:'o4',   yazi:'ne yapacaksın',   soylenis:'napacaksın',        kategori:'gunluk',     zorluk:'kolay', aciklama:'"ne yap-" → "nap-" birleşmesi.', ornek:'Ne yapacaksın? → Napacaksın?' },
  { id:'o5',   yazi:'bilmiyorum',      soylenis:'bilmiyom',          kategori:'gunluk',     zorluk:'kolay', aciklama:'"-orum" eki konuşmada daima "-om"a dönüşür.', ornek:'Bilmiyorum → Bilmiyom' },
  { id:'o6',   yazi:'gidiyorum',       soylenis:'gidiyom',           kategori:'gunluk',     zorluk:'kolay', aciklama:'"-orum" → "-om" evrensel Türkçe kısaltması.', ornek:'Gidiyorum → Gidiyom' },
  { id:'o7',   yazi:'yapıyorum',       soylenis:'yapıyom',           kategori:'gunluk',     zorluk:'kolay', aciklama:'"-orum" → "-om".', ornek:'Ne yapıyorum ben? → Ne yapıyom ben?' },
  { id:'o8',   yazi:'geliyorum',       soylenis:'geliyom',           kategori:'gunluk',     zorluk:'kolay', aciklama:'"-orum" → "-om".', ornek:'Ben geliyorum → Ben geliyom' },
  { id:'o9',   yazi:'anlıyorum',       soylenis:'anlıyom',           kategori:'gunluk',     zorluk:'kolay', aciklama:'"-orum" → "-om".', ornek:'Anlıyorum seni → Anlıyom seni' },
  { id:'o10',  yazi:'görüyorum',       soylenis:'görüyom',           kategori:'gunluk',     zorluk:'kolay', aciklama:'"-orum" → "-om".', ornek:'Görüyorum onu → Görüyom onu' },
  { id:'o11',  yazi:'oturuyorum',      soylenis:'oturuyom',          kategori:'gunluk',     zorluk:'kolay', aciklama:'"-orum" → "-om".', ornek:'Evde oturuyorum → Evde oturuyom' },
  { id:'o12',  yazi:'çalışıyorum',     soylenis:'çalışıyom',         kategori:'gunluk',     zorluk:'kolay', aciklama:'"-orum" → "-om".', ornek:'Çok çalışıyorum → Çok çalışıyom' },
  { id:'o13',  yazi:'ne oldu',         soylenis:'nooldu',            kategori:'gunluk',     zorluk:'kolay', aciklama:'"ne" + "o" → "noo": iki ünlü kaynaşır.', ornek:'Ne oldu? → Nooldu?' },
  { id:'o14',  yazi:'ne oluyor',       soylenis:'nooliyor',          kategori:'gunluk',     zorluk:'kolay', aciklama:'"ne" + "o-" → "noo-" kaynaşması.', ornek:'Ne oluyor burada? → Nooliyor burada?' },
  { id:'o15',  yazi:'ne olacak',       soylenis:'noolacak',          kategori:'gunluk',     zorluk:'kolay', aciklama:'"ne" + "ola-" → "noola-".', ornek:'Ne olacak şimdi? → Noolacak şimdi?' },
  { id:'o16',  yazi:'ne zaman',        soylenis:'nezaman',           kategori:'gunluk',     zorluk:'kolay', aciklama:'Hızlı söylenişte iki kelime tek heceli ünite gibi çıkar.', ornek:'Ne zaman geliyor? → Nezaman geliyor?' },
  { id:'o17',  yazi:'bir de',          soylenis:'birde',             kategori:'gunluk',     zorluk:'kolay', aciklama:'İki kelime ara boşluksuz birleşir.', ornek:'Bir de buna bak! → Birde buna bak!' },
  { id:'o18',  yazi:'bir şey',         soylenis:'bişey',             kategori:'gunluk',     zorluk:'kolay', aciklama:'"bir" → "bi"; ardından "şey" yapışır.', ornek:'Bir şey söyleyeyim → Bişey söyleyeyim' },
  { id:'o19',  yazi:'bir daha',        soylenis:'bidaha',            kategori:'gunluk',     zorluk:'kolay', aciklama:'"bir" → "bi", kelimeler birleşir.', ornek:'Bir daha söyle → Bidaha söyle' },
  { id:'o20',  yazi:'bir',             soylenis:'bi',                kategori:'gunluk',     zorluk:'kolay', aciklama:'"r" sesi sıfır belirsiz heykel konumunda düşer.', ornek:'Bir dakika! → Bi dakika!' },
  { id:'o21',  yazi:'anlıyor musun',   soylenis:'anlıyon mu',        kategori:'gunluk',     zorluk:'orta',  aciklama:'"-yor musun" → "-yon mu" kısalması.', ornek:'Anlıyor musun? → Anlıyon mu?' },
  { id:'o22',  yazi:'gidiyor musun',   soylenis:'gidiyon mu',        kategori:'gunluk',     zorluk:'orta',  aciklama:'"-yor musun" → "-yon mu".', ornek:'Gidiyor musun? → Gidiyon mu?' },
  { id:'o23',  yazi:'bakıyor musun',   soylenis:'bakıyon mu',        kategori:'gunluk',     zorluk:'orta',  aciklama:'"-yor musun" → "-yon mu".', ornek:'Bakıyor musun? → Bakıyon mu?' },
  { id:'o24',  yazi:'ne diyorsun',     soylenis:'ne diyon',          kategori:'gunluk',     zorluk:'kolay', aciklama:'"-orsun" → "-on" kısalması.', ornek:'Ne diyorsun? → Ne diyon?' },
  { id:'o25',  yazi:'hiç değil',       soylenis:'hiç diil',          kategori:'gunluk',     zorluk:'kolay', aciklama:'"değil" her zaman "diil" olur.', ornek:'Hiç değil öyle → Hiç diil öyle' },
  { id:'o26',  yazi:'zaten değil',     soylenis:'zaten diil',        kategori:'gunluk',     zorluk:'kolay', aciklama:'"değil" → "diil" kalıbı.', ornek:'Zaten değil ki → Zaten diil ki' },
  { id:'o27',  yazi:'madem ki',        soylenis:'mademki',           kategori:'gunluk',     zorluk:'kolay', aciklama:'"ki" önceki kelimeye yapışır.', ornek:'Madem ki öyle → Mademki öyle' },
  { id:'o28',  yazi:'tamam mı',        soylenis:'tamamı',            kategori:'gunluk',     zorluk:'kolay', aciklama:'Çok hızlı söylenişte "mı" eki "ı"ya iner.', ornek:'Tamam mı? → Tamamı?' },
  { id:'o29',  yazi:'ne kadar',        soylenis:'nekadar',           kategori:'gunluk',     zorluk:'kolay', aciklama:'İki kelime hızda tek birim olur.', ornek:'Ne kadar etti? → Nekadar etti?' },
  { id:'o30',  yazi:'zaten',           soylenis:'zatn',              kategori:'gunluk',     zorluk:'kolay', aciklama:'Çok hızlı söylenişte "e" düşer.', ornek:'Zaten biliyorum → Zatn biliyom' },
  { id:'o31',  yazi:'nasıl böyle',     soylenis:'nasılböyle',        kategori:'gunluk',     zorluk:'kolay', aciklama:'İki vurgu grubu birleşir.', ornek:'Nasıl böyle oldu? → Nasılböyle oldu?' },
  { id:'o32',  yazi:'falan',           soylenis:'falan / felen',     kategori:'gunluk',     zorluk:'kolay', aciklama:'Dolgu kelimesi bölgeye göre "felen" de olur.', ornek:'Gelecek falan → Gelecek felen' },
  { id:'o33',  yazi:'tabii ki',        soylenis:'tabi ki',           kategori:'gunluk',     zorluk:'kolay', aciklama:'Çift "i" konuşmada tek "i"ye iner.', ornek:'Tabii ki gelirim → Tabi ki gelirim' },
  { id:'o34',  yazi:'buyurun',         soylenis:'buyrun',            kategori:'gunluk',     zorluk:'kolay', aciklama:'Hızlı söylenişte iç ünlü "u" düşer.', ornek:'Buyurun efendim → Buyrun efendim' },
  { id:'o35',  yazi:'efendim',         soylenis:'efndim',            kategori:'gunluk',     zorluk:'orta',  aciklama:'Çok hızlı söylenişte "e" düşer, iki sessiz yan yana gelir.', ornek:'Buyurun efendim → Buyrun efndim' },
  { id:'o36',  yazi:'vallahi',         soylenis:'valla',             kategori:'gunluk',     zorluk:'kolay', aciklama:'Son iki hece düşer: "-hi" kalkar.', ornek:'Vallahi bilmiyorum → Valla bilmiyom' },
  { id:'o37',  yazi:'inşallah',        soylenis:'inşalla',           kategori:'gunluk',     zorluk:'kolay', aciklama:'Son "h" hızlı söylenişte düşer.', ornek:'İnşallah gelir → İnşalla gelir' },
  { id:'o38',  yazi:'maşallah',        soylenis:'maşalla',           kategori:'gunluk',     zorluk:'kolay', aciklama:'Son "h" düşer.', ornek:'Maşallah! → Maşalla!' },
  { id:'o39',  yazi:'için',            soylenis:'-çin / -iyin',      kategori:'gunluk',     zorluk:'orta',  aciklama:'Hızlı konuşmada önceki kelimeye ek gibi yapışır.', ornek:'Seni için → seniçin' },
  { id:'o40',  yazi:'sen de',          soylenis:'sende',             kategori:'gunluk',     zorluk:'kolay', aciklama:'"de" bağlacı önceki kelimeye yapışır.', ornek:'Sen de gel → Sende gel' },
  { id:'o41',  yazi:'ben de',          soylenis:'bende',             kategori:'gunluk',     zorluk:'kolay', aciklama:'Aynı "de" yapışması.', ornek:'Ben de geliyorum → Bende geliyom' },
  { id:'o42',  yazi:'şimdi',           soylenis:'şindi',             kategori:'gunluk',     zorluk:'kolay', aciklama:'"m" → "n" dönüşümü; özellikle Ege ve İç Anadolu ağızlarında.', ornek:'Şimdi gel → Şindi gel' },
  { id:'o43',  yazi:'ne var ne yok',   soylenis:'nevaaneyok',        kategori:'gunluk',     zorluk:'orta',  aciklama:'Kalıp ifade hızda tek blok olur.', ornek:'Ne var ne yok dostum? → Nevaaneyok?' },

  // ══════════════════════════════════════════════════════════
  // 2. "Ğ" SESİ DÖNÜŞÜMLERI (Türkçenin En Özel Kuralı)
  // ══════════════════════════════════════════════════════════
  { id:'o44',  yazi:'sağ',             soylenis:'saː',               kategori:'gh_sesi',    zorluk:'orta',  aciklama:'"ğ" sesi çevresindeki ünlüyü uzatır; "saː" = uzun "a".', ornek:'Sağ ol! → Saː ol!' },
  { id:'o45',  yazi:'dağ',             soylenis:'daː',               kategori:'gh_sesi',    zorluk:'orta',  aciklama:'"ğ" → uzun "a".', ornek:'Dağa çıkmak → Daːya çıkmak' },
  { id:'o46',  yazi:'bağ',             soylenis:'baː',               kategori:'gh_sesi',    zorluk:'orta',  aciklama:'"ğ" → uzun "a".', ornek:'Bağ bozumu → Baː bozumu' },
  { id:'o47',  yazi:'çağ',             soylenis:'çaː',               kategori:'gh_sesi',    zorluk:'orta',  aciklama:'"ğ" → uzun "a".', ornek:'Dijital çağ → Dijital çaː' },
  { id:'o48',  yazi:'yağ',             soylenis:'yaː',               kategori:'gh_sesi',    zorluk:'orta',  aciklama:'"ğ" → uzun "a".', ornek:'Zeytinyağı → Zeytinyaːı' },
  { id:'o49',  yazi:'yağmur',          soylenis:'yaamur',            kategori:'gh_sesi',    zorluk:'orta',  aciklama:'"ağ" → "aa".', ornek:'Yağmur yağıyor → Yaamur yaayor' },
  { id:'o50',  yazi:'ağaç',            soylenis:'aaç',               kategori:'gh_sesi',    zorluk:'orta',  aciklama:'"ağ" → "aa".', ornek:'Ağaç dikildi → Aaç dikildi' },
  { id:'o51',  yazi:'ağır',            soylenis:'aair',              kategori:'gh_sesi',    zorluk:'orta',  aciklama:'"ağ" → "aa".', ornek:'Çok ağır! → Çok aair!' },
  { id:'o52',  yazi:'bağırsak',        soylenis:'baairsak',          kategori:'gh_sesi',    zorluk:'orta',  aciklama:'"ağ" → "aa".', ornek:'Bağırsak sorunu → Baairsak sorunu' },
  { id:'o53',  yazi:'bağlantı',        soylenis:'baalantı',          kategori:'gh_sesi',    zorluk:'orta',  aciklama:'"ağ" → "aa".', ornek:'Bağlantı koptu → Baalantı koptu' },
  { id:'o54',  yazi:'çağrı',           soylenis:'çaarrı',            kategori:'gh_sesi',    zorluk:'orta',  aciklama:'"ağ" → "aa".', ornek:'Çağrı aldım → Çaarrı aldım' },
  { id:'o55',  yazi:'bağımlı',         soylenis:'baaimlı',           kategori:'gh_sesi',    zorluk:'orta',  aciklama:'"ağ" → "aa".', ornek:'Bağımlı olma → Baaimlı olma' },
  { id:'o56',  yazi:'dağılmak',        soylenis:'daailmak',          kategori:'gh_sesi',    zorluk:'orta',  aciklama:'"ağ" → "aa".', ornek:'Her şey dağıldı → Her şey daaildi' },
  { id:'o57',  yazi:'öğrenci',         soylenis:'öörenci',           kategori:'gh_sesi',    zorluk:'orta',  aciklama:'"öğ" → "öö" (uzun ö).', ornek:'Öğrenci geldi → Öörenci geldi' },
  { id:'o58',  yazi:'öğretmen',        soylenis:'öörretmen',         kategori:'gh_sesi',    zorluk:'orta',  aciklama:'"öğ" → "öö".', ornek:'Öğretmenim var → Öörretmenim var' },
  { id:'o59',  yazi:'eğlence',         soylenis:'eelence',           kategori:'gh_sesi',    zorluk:'orta',  aciklama:'"eğ" → "ee".', ornek:'Eğlence güzel → Eelence güzel' },
  { id:'o60',  yazi:'değer',           soylenis:'deeer',             kategori:'gh_sesi',    zorluk:'orta',  aciklama:'"eğ" → "ee".', ornek:'Ne değer bu? → Ne deeer bu?' },
  { id:'o61',  yazi:'eğitmek',         soylenis:'eeitmek',           kategori:'gh_sesi',    zorluk:'orta',  aciklama:'"eğ" → "ee".', ornek:'Onu eğittik → Onu eeittik' },
  { id:'o62',  yazi:'değiştirmek',     soylenis:'deeiştiirmek',      kategori:'gh_sesi',    zorluk:'ileri', aciklama:'"eğ" → "ee", ardından ünlüler sıra sıra uzar.', ornek:'Hayatı değiştirdi → Hayatı deeiştiirdi' },
  { id:'o63',  yazi:'beğenmek',        soylenis:'beeenmek',          kategori:'gh_sesi',    zorluk:'orta',  aciklama:'"eğ" → "ee".', ornek:'Çok beğendim → Çok beeendim' },
  { id:'o64',  yazi:'iğne',            soylenis:'iine',              kategori:'gh_sesi',    zorluk:'orta',  aciklama:'"iğ" → "ii".', ornek:'İğne battı → İine battı' },
  { id:'o65',  yazi:'sığır',           soylenis:'sıır',              kategori:'gh_sesi',    zorluk:'orta',  aciklama:'"ığ" → "ıı".', ornek:'Sığır eti aldım → Sıır eti aldım' },
  { id:'o66',  yazi:'uğraşmak',        soylenis:'uuraşmak',          kategori:'gh_sesi',    zorluk:'orta',  aciklama:'"uğ" → "uu".', ornek:'Uğraşma boşuna! → Uuraşma boşuna!' },
  { id:'o67',  yazi:'uğur',            soylenis:'uuur',              kategori:'gh_sesi',    zorluk:'orta',  aciklama:'"uğ" → "uu".', ornek:'Uğurlar! → Uuurlar!' },
  { id:'o68',  yazi:'boğaz',           soylenis:'booaz',             kategori:'gh_sesi',    zorluk:'orta',  aciklama:'"oğ" → "oo".', ornek:'Boğaz ağrısı → Booaz ağrısı' },
  { id:'o69',  yazi:'soğuk',           soylenis:'soouk',             kategori:'gh_sesi',    zorluk:'orta',  aciklama:'"oğ" → "oo".', ornek:'Çok soğuk! → Çok soouk!' },
  { id:'o70',  yazi:'soğan',           soylenis:'sooan',             kategori:'gh_sesi',    zorluk:'orta',  aciklama:'"oğ" → "oo".', ornek:'Soğan koy → Sooan koy' },
  { id:'o71',  yazi:'yoğurt',          soylenis:'yoourt',            kategori:'gh_sesi',    zorluk:'orta',  aciklama:'"oğ" → "oo".', ornek:'Yoğurt yedim → Yoourt yedim' },
  { id:'o72',  yazi:'doğu',            soylenis:'doou',              kategori:'gh_sesi',    zorluk:'orta',  aciklama:'"oğ" → "oo".', ornek:'Doğuya gittim → Dooua gittim' },
  { id:'o73',  yazi:'oğul',            soylenis:'ooul',              kategori:'gh_sesi',    zorluk:'orta',  aciklama:'"oğ" → "oo".', ornek:'Oğul mu kız mı? → Ooul mu kız mı?' },
  { id:'o74',  yazi:'boğmak',          soylenis:'boomak',            kategori:'gh_sesi',    zorluk:'orta',  aciklama:'"oğ" → "oo".', ornek:'Sesi boğdu → Sesi booğdu' },
  { id:'o75',  yazi:'soğurma',         soylenis:'soouurma',          kategori:'gh_sesi',    zorluk:'ileri', aciklama:'"oğ" → "oo", ek ünlüsü de uzar.', ornek:'Soğurma işlemi → Soouurma işlemi' },
  { id:'o76',  yazi:'düğün',           soylenis:'düüün',             kategori:'gh_sesi',    zorluk:'orta',  aciklama:'"üğ" → "üü" (uzun ü).', ornek:'Düğün vardı → Düüün vardı' },
  { id:'o77',  yazi:'düğme',           soylenis:'düüme',             kategori:'gh_sesi',    zorluk:'orta',  aciklama:'"üğ" → "üü".', ornek:'Düğmeyi ilik → Düümeyi ilik' },
  { id:'o78',  yazi:'düğüm',           soylenis:'düüüm',             kategori:'gh_sesi',    zorluk:'orta',  aciklama:'"üğ" → "üü".', ornek:'Düğüm attım → Düüüm attım' },
  { id:'o79',  yazi:'yüğrük',          soylenis:'yüürük',            kategori:'gh_sesi',    zorluk:'ileri', aciklama:'"üğ" → "üü". Eski/ağız kelimesi.', ornek:'Yüğrük su akar' },

  // ══════════════════════════════════════════════════════════
  // 3. DİLBİLGİSİ EKLERİ / YAPI DEĞİŞİMİ
  // ══════════════════════════════════════════════════════════
  { id:'o80',  yazi:'ile',             soylenis:'-le / -la',         kategori:'dilbilgisi', zorluk:'orta',  aciklama:'"ile" bağlacı önceki kelimeye ünlü uyumuyla eklenir.', ornek:'Arkadaşım ile → Arkadaşımla' },
  { id:'o81',  yazi:'iken',            soylenis:'-ken / -kan',        kategori:'dilbilgisi', zorluk:'orta',  aciklama:'"iken" fiil tabanına ek olarak bağlanır.', ornek:'Gider iken → Giderken' },
  { id:'o82',  yazi:'mi / mı / mu / mü', soylenis:'mi/mı/mu/mü (uyum)', kategori:'dilbilgisi', zorluk:'orta', aciklama:'Soru eki 4 ünlüyle uyum sağlar; çoğu kişi sadece "mi" der.', ornek:'Geliyor musun? → "mu" ünlü uyumu' },
  { id:'o83',  yazi:'değil miyim',     soylenis:'diil miyim',         kategori:'dilbilgisi', zorluk:'orta',  aciklama:'"değil" her zaman "diil" olur.', ornek:'Haklı değil miyim? → Haklı diil miyim?' },
  { id:'o84',  yazi:'gibi değil',      soylenis:'gibi diil',          kategori:'dilbilgisi', zorluk:'kolay', aciklama:'"değil" → "diil" kalıbı burada da geçerli.', ornek:'Eskisi gibi değil → Eskisi gibi diil' },

  // ══════════════════════════════════════════════════════════
  // 4. YABANCI KÖKENLI — SÖYLENIŞTE FARK
  // ══════════════════════════════════════════════════════════
  { id:'o85',  yazi:'psikolog',        soylenis:'sikolog',            kategori:'yabanci',    zorluk:'orta',  aciklama:'"ps-" ünsüz kümesi Türkçede başta söylenemez; "p" düşer.', ornek:'Psikolog oldu → Sikolog oldu' },
  { id:'o86',  yazi:'psikoloji',       soylenis:'sikoloji',           kategori:'yabanci',    zorluk:'orta',  aciklama:'"ps-" → "s-" dönüşümü.', ornek:'Psikoloji bölümü → Sikoloji bölümü' },
  { id:'o87',  yazi:'psikiyatri',      soylenis:'sikiyatri',          kategori:'yabanci',    zorluk:'ileri', aciklama:'"ps-" → "s-".', ornek:'Psikiyatri servisi → Sikiyatri servisi' },
  { id:'o88',  yazi:'pneumoni',        soylenis:'nömoni',             kategori:'yabanci',    zorluk:'ileri', aciklama:'"p" ve ardındaki sessiz düşer; Türkçe uyarlaması.', ornek:'Pnömoni → Nömoni' },
  { id:'o89',  yazi:'tabii',           soylenis:'tabi',               kategori:'yabanci',    zorluk:'kolay', aciklama:'Arapça kökenli, çift "i" konuşmada tek "i"ye düşer.', ornek:'Tabii ki → Tabi ki' },
  { id:'o90',  yazi:'hâlâ',            soylenis:'haalaa',             kategori:'yabanci',    zorluk:'orta',  aciklama:'"â" işareti uzun "a" demek; her ikisi de uzun söylenir.', ornek:'Hâlâ gelmedi mi? → Haalaa gelmedi mi?' },
  { id:'o91',  yazi:'â (düzeltme)',    soylenis:'aː (uzun a)',        kategori:'yabanci',    zorluk:'orta',  aciklama:'Türkçe yazımında "â" uzun "a" sesidir; pek çok kişi kısa okur.', ornek:'Kâr → kaːr, Lâle → laːle' },
  { id:'o92',  yazi:'kâr',             soylenis:'kaːr',               kategori:'yabanci',    zorluk:'orta',  aciklama:'Farsça kökenli, "â" uzun "a".', ornek:'Kâr ettik → Kaːr ettik' },
  { id:'o93',  yazi:'lâle',            soylenis:'laːle',              kategori:'yabanci',    zorluk:'orta',  aciklama:'Arapça kökenli, "â" uzun "a".', ornek:'Lâle çiçeği → Laːle çiçeği' },
  { id:'o94',  yazi:'kâtip',           soylenis:'kaːtip',             kategori:'yabanci',    zorluk:'orta',  aciklama:'"â" → uzun "a". Pek çok kişi "katip" diye okur — yanlış!', ornek:'Daire katibi → Doğrusu kaːtip' },

  // ══════════════════════════════════════════════════════════
  // 5. UZUN ÜNLÜLEr / İKİLEŞME
  // ══════════════════════════════════════════════════════════
  { id:'o95',  yazi:'saat',            soylenis:'saːt',               kategori:'unlu',       zorluk:'kolay', aciklama:'Arapça kökenli; çift "a" tek uzun "a" gibi söylenir.', ornek:'Saat kaç? → Saːt kaç?' },
  { id:'o96',  yazi:'aile',            soylenis:'aːile',              kategori:'unlu',       zorluk:'kolay', aciklama:'İki ayrı hece: "a-i-le" — "ayle" değil.', ornek:'Ailem var → Doğru: a-i-lem var' },
  { id:'o97',  yazi:'şair',            soylenis:'şaːir',              kategori:'unlu',       zorluk:'kolay', aciklama:'"şa-ir" — "şayr" gibi tek hece değil, iki hece.', ornek:'Türk şairleri → Türk şaːirleri' },
  { id:'o98',  yazi:'fiil',            soylenis:'fiːl',               kategori:'unlu',       zorluk:'kolay', aciklama:'Arapça kökenli; çift "i" uzun söylenir.', ornek:'Eylem fiili → Eylem fiːli' },
  { id:'o99',  yazi:'ufak',            soylenis:'ufak',               kategori:'unlu',       zorluk:'kolay', aciklama:'Aynı — bu doğru okunuş. Referans: "küçük" ile karıştırılmaz.', ornek:'"Ufacık" → "ufacık" (doğru)' },

  // ══════════════════════════════════════════════════════════
  // 6. HIZLI KONUŞMADA ÜNSÜZ DEĞİŞİMİ
  // ══════════════════════════════════════════════════════════
  { id:'o100', yazi:'gidecek',         soylenis:'gideçek',            kategori:'unsuz',      zorluk:'orta',  aciklama:'"k" sesi iki ünlü arasında "ç"ye dönüşür.', ornek:'Ne zaman gidecek? → Nezaman gideçek?' },
  { id:'o101', yazi:'yapacak',         soylenis:'yapaçak',            kategori:'unsuz',      zorluk:'orta',  aciklama:'"k" → "ç" iki ünlü arası.', ornek:'Yapacak mısın? → Yapaçak mısın?' },
  { id:'o102', yazi:'gelecek',         soylenis:'geleçek',            kategori:'unsuz',      zorluk:'orta',  aciklama:'"k" → "ç".', ornek:'Ne zaman gelecek? → Nezaman geleçek?' },
  { id:'o103', yazi:'alacak',          soylenis:'alaçak',             kategori:'unsuz',      zorluk:'orta',  aciklama:'"k" → "ç".', ornek:'Ne alacak? → Ne alaçak?' },
  { id:'o104', yazi:'herkes',          soylenis:'herkez',             kategori:'unsuz',      zorluk:'kolay', aciklama:'Kelime sonu "s" iki ünlü arasında "z" gibi duyulabilir.', ornek:'Herkes biliyor → Herkez biliyor' },
  { id:'o105', yazi:'cadde',           soylenis:'caade',              kategori:'unsuz',      zorluk:'kolay', aciklama:'Arapça kökenli; çift "d" bazen uzun söylenir.', ornek:'Cadde boş → Caadde boş' },

  // ══════════════════════════════════════════════════════════
  // 7. VURGU FARKI — AYNI YAZI FARKLI ANLAM
  // ══════════════════════════════════════════════════════════
  { id:'o106', yazi:'adam (biri)',      soylenis:'adam',              kategori:'vurgu',      zorluk:'ileri', aciklama:'İnsan anlamında: "aDAM" — son hece vurgulu.', ornek:'"Bir adam geldi" — a-DAM' },
  { id:'o107', yazi:'adam! (emir)',     soylenis:'ADAM',              kategori:'vurgu',      zorluk:'ileri', aciklama:'Emir/çağrı anlamında: "ADAM!" — ilk hece vurgulu.', ornek:'"Adam ol!" — A-dam!' },
  { id:'o108', yazi:'elma (meyve)',     soylenis:'ELma',              kategori:'vurgu',      zorluk:'ileri', aciklama:'Türkçe kelimelerde genellikle son hece ama özel adlar ilk hece.', ornek:'"ELma yedim" — EL-ma' },
  { id:'o109', yazi:'pasta (yiyecek)',  soylenis:'PAsta',             kategori:'vurgu',      zorluk:'ileri', aciklama:'İtalyanca kökenli; vurgu ilk hecede.', ornek:'"PAsta getirdi" — PA-sta' },
  { id:'o110', yazi:'pastane',          soylenis:'pasTAne',           kategori:'vurgu',      zorluk:'ileri', aciklama:'Türkçe türevinde vurgu son ekle kayar.', ornek:'"pasTAneye gittik" — pas-TA-ne' },

  // ══════════════════════════════════════════════════════════
  // 8. BÖLGESEL / AĞIZ FARKLARI
  // ══════════════════════════════════════════════════════════
  { id:'o111', yazi:'çarşamba',        soylenis:'çarşama',           kategori:'bolgesel',   zorluk:'orta',  aciklama:'"b" bazı Ege/Karadeniz ağızlarında düşer.', ornek:'Çarşamba günü → Çarşama günü' },
  { id:'o112', yazi:'ne',              soylenis:'ni',                kategori:'bolgesel',   zorluk:'orta',  aciklama:'İç Anadolu ve bazı ağızlarda "ne" → "ni".', ornek:'"Ni yapıyorsun?" (Konya ağzı)' },
  { id:'o113', yazi:'değil (ağız-1)',  soylenis:'deil',              kategori:'bolgesel',   zorluk:'kolay', aciklama:'Karadeniz/Doğu Anadolu ağızlarında "değil" → "deil".', ornek:'Bu diil / deil / deyil' },
  { id:'o114', yazi:'değil (ağız-2)',  soylenis:'deyil',             kategori:'bolgesel',   zorluk:'kolay', aciklama:'Balkanlarda ve bazı ağızlarda "değil" → "deyil".', ornek:'Öyle deyil!' },
  { id:'o115', yazi:'gibi (ağız)',     soylenis:'gibi / gibisi',     kategori:'bolgesel',   zorluk:'ileri', aciklama:'Bazı ağızlarda vurgulu söylenince "-si" eklenir pekiştirme için.', ornek:'"onun gibisi görülmedi"' },

  // ══════════════════════════════════════════════════════════
  // 9. RESMİ vs GÜNLÜK DİL
  // ══════════════════════════════════════════════════════════
  { id:'o116', yazi:'bilmiyorum (resmi)', soylenis:'bilmiyorum',     kategori:'resmi_gunluk', zorluk:'kolay', aciklama:'Resmi konuşmada tam söylenir.', ornek:'Bilmiyorum efendim (resmi)' },
  { id:'o117', yazi:'bilmiyorum (günlük)', soylenis:'bilmiyom',      kategori:'resmi_gunluk', zorluk:'kolay', aciklama:'Günlük konuşmada "-om" kısaltması.', ornek:'Bilmiyom ki ne yapayım' },
  { id:'o118', yazi:'ne yapıyorsunuz (resmi)', soylenis:'ne yapıyorsunuz', kategori:'resmi_gunluk', zorluk:'orta', aciklama:'Resmi dilde tam söylenir.', ornek:'Ne yapıyorsunuz efendim?' },
  { id:'o119', yazi:'ne yapıyorsunuz (günlük)', soylenis:'napıyonuz / napıyoz', kategori:'resmi_gunluk', zorluk:'orta', aciklama:'Günlük dilde ağır kısalma.', ornek:'Napıyonuz siz?' },
  { id:'o120', yazi:'gidiyorum (resmi)', soylenis:'gidiyorum',       kategori:'resmi_gunluk', zorluk:'kolay', aciklama:'Resmi dilde tam söylenir.', ornek:'Toplantıya gidiyorum.' },
  { id:'o121', yazi:'gidiyorum (günlük)', soylenis:'gidiyom',        kategori:'resmi_gunluk', zorluk:'kolay', aciklama:'Günlük dilde "-om".', ornek:'Canım gidiyom işte!' },

  // ══════════════════════════════════════════════════════════
  // 10. KONUŞMADA FIRSATÇI BİRLEŞMELER
  // ══════════════════════════════════════════════════════════
  { id:'o122', yazi:'bir kez daha',    soylenis:'bikezde',           kategori:'gunluk',     zorluk:'orta',  aciklama:'Üç kelime tek ağzı geçişle söylenir.', ornek:'Bir kez daha söyle → Bikezde söyle' },
  { id:'o123', yazi:'neden sonra',     soylenis:'nedensona',         kategori:'gunluk',     zorluk:'orta',  aciklama:'Kelimeler birleşir, son "r" düşer.', ornek:'Neden sonra geldi → Nedensona geldi' },
  { id:'o124', yazi:'hiç mi hiç',      soylenis:'hiçmiç',            kategori:'gunluk',     zorluk:'orta',  aciklama:'Pekiştirme yapısı hızda tek blok olur.', ornek:'Hiç mi hiç beğenmedin → Hiçmiç beğenmedin' },
  { id:'o125', yazi:'hadi bakalım',    soylenis:'hadibakalım',       kategori:'gunluk',     zorluk:'orta',  aciklama:'"hadi" ve "bakalım" tek birim olur.', ornek:'Hadi bakalım! → Hadibakalım!' },
  { id:'o126', yazi:'değil de',        soylenis:'diilde',            kategori:'gunluk',     zorluk:'orta',  aciklama:'"değil" → "diil" + "de" yapışır.', ornek:'Değil de ne? → Diilde ne?' },
  { id:'o127', yazi:'nasılsın',        soylenis:'nassın',            kategori:'gunluk',     zorluk:'kolay', aciklama:'"nasılsın" hızda "nassın" olur; iç hece düşer.', ornek:'Nasılsın? → Nassın?' },
  { id:'o128', yazi:'neredesin',       soylenis:'nerdesin',          kategori:'gunluk',     zorluk:'kolay', aciklama:'"erede" → "erde"; iç hece düşer.', ornek:'Neredesin? → Nerdesin?' },
  { id:'o129', yazi:'nerede',          soylenis:'nerde',             kategori:'gunluk',     zorluk:'kolay', aciklama:'İç "e" düşer.', ornek:'Nerede? → Nerde?' },
  { id:'o130', yazi:'ne olacak',       soylenis:'noolacak',          kategori:'gunluk',     zorluk:'kolay', aciklama:'"ne o-" → "noo-" kaynaşması.', ornek:'Ne olacak bunun sonu? → Noolacak bunun sonu?' },
  { id:'o131', yazi:'nasıl oldun',     soylenis:'nassıldın',         kategori:'gunluk',     zorluk:'orta',  aciklama:'Hız kısaltması + ses benzeşmesi.', ornek:'Nasıl oldun? → Nassıldın?' },
  { id:'o132', yazi:'istemiyorum',     soylenis:'istemiyom',         kategori:'gunluk',     zorluk:'kolay', aciklama:'"-orum" → "-om".', ornek:'İstemiyorum → İstemiyom' },
  { id:'o133', yazi:'anlayamıyorum',   soylenis:'anlayamıyom',       kategori:'gunluk',     zorluk:'kolay', aciklama:'"-orum" → "-om".', ornek:'Anlayamıyorum → Anlayamıyom' },

];

// ── Kategori Tanımları ─────────────────────────────────────────
const OK_KATEGORILER = {
  hepsi:         { label:'Hepsi',               emoji:'🌟', renk:'#6366f1' },
  gunluk:        { label:'Günlük Konuşma',      emoji:'💬', renk:'#0ea5e9' },
  gh_sesi:       { label:'Ğ Sesi Dönüşümü',    emoji:'🔤', renk:'#a855f7' },
  dilbilgisi:    { label:'Dilbilgisi Ekleri',   emoji:'📝', renk:'#0284c7' },
  yabanci:       { label:'Yabancı Kökenli',     emoji:'🌍', renk:'#14b8a6' },
  unlu:          { label:'Uzun Ünlüler',        emoji:'🔊', renk:'#7c3aed' },
  unsuz:         { label:'Ünsüz Değişimi',      emoji:'⚡', renk:'#f59e0b' },
  vurgu:         { label:'Vurgu Farkı',         emoji:'🎯', renk:'#ec4899' },
  bolgesel:      { label:'Bölgesel Ağız',       emoji:'📍', renk:'#84cc16' },
  resmi_gunluk:  { label:'Resmi vs Günlük',     emoji:'🎭', renk:'#f97316' },
};

const OK_ZORLUK = {
  hepsi: { label:'Hepsi', renk:'#6366f1' },
  kolay: { label:'Kolay', renk:'#22c55e' },
  orta:  { label:'Orta',  renk:'#f59e0b' },
  ileri: { label:'İleri', renk:'#ef4444' },
};

// ── State ──────────────────────────────────────────────────────
let okState = {
  search: '',
  kategori: 'hepsi',
  zorluk: 'hepsi',
  favorites: JSON.parse(localStorage.getItem('ok_favs') || '[]'),
  listened: JSON.parse(localStorage.getItem('ok_listened') || '[]'),
  showFavs: false,
  view: 'grid',
};

// ── Render Entry ───────────────────────────────────────────────
function renderOkunuslar() {
  const container = document.getElementById('okunuslar-container');
  if (!container) return;

  container.innerHTML = `
<div class="ok-wrapper" id="ok-wrapper">

  <!-- Hero -->
  <div class="ok-hero">
    <div class="ok-hero-inner">
      <div class="ok-hero-badge">🇹🇷 Türkçe Söyleniş Rehberi</div>
      <h2 class="ok-hero-title">Yazıldığı Gibi Değil,<br><span class="ok-hl">Söylendiği Gibi!</span></h2>
      <p class="ok-hero-sub">Türkçede "değil" → "diil", "yağmur" → "yaamur", "gidiyorum" → "gidiyom"… Tüm söyleniş sırları burada.</p>
      <div class="ok-hero-chips">
        <span class="ok-hchip">💬 ${OKUNUSLAR_DATA.length}+ Kelime</span>
        <span class="ok-hchip">📂 ${Object.keys(OK_KATEGORILER).length - 1} Kategori</span>
        <span class="ok-hchip">🔊 Sesli Dinle</span>
        <span class="ok-hchip">❤️ Favorile</span>
      </div>
    </div>
    <div class="ok-hero-deco" aria-hidden="true">
      <div class="ok-deco-word" style="--delay:0s">değil → diil</div>
      <div class="ok-deco-word" style="--delay:0.4s">yağmur → yaamur</div>
      <div class="ok-deco-word" style="--delay:0.8s">gidiyorum → gidiyom</div>
      <div class="ok-deco-word" style="--delay:1.2s">napıyon? 😄</div>
    </div>
  </div>

  <!-- Toolbar -->
  <div class="ok-toolbar" id="ok-toolbar">
    <div class="ok-search-wrap">
      <span class="ok-search-icon">🔍</span>
      <input class="ok-search" id="ok-search" type="text" placeholder="Kelime ara... (değil, yağmur, napıyon...)" value="${okState.search}" oninput="okSearchChange(this.value)" />
      ${okState.search ? `<button class="ok-search-clear" onclick="okSearchChange('')">✕</button>` : ''}
    </div>
    <div class="ok-view-toggle">
      <button class="ok-view-btn ${okState.view==='grid'?'active':''}" onclick="okSetView('grid')" title="Izgara">⊞</button>
      <button class="ok-view-btn ${okState.view==='list'?'active':''}" onclick="okSetView('list')" title="Liste">☰</button>
    </div>
    <button class="ok-fav-toggle ${okState.showFavs?'active':''}" onclick="okToggleFavs()">
      ❤️ Favoriler <span class="ok-fav-count">${okState.favorites.length}</span>
    </button>
  </div>

  <!-- Category filter -->
  <div class="ok-cats-scroll" id="ok-cats-scroll">
    ${Object.entries(OK_KATEGORILER).map(([key, val]) => `
      <button class="ok-cat-pill ${okState.kategori===key?'active':''}"
        style="${okState.kategori===key?`background:${val.renk};border-color:${val.renk};color:#fff;`:''}"
        onclick="okSetKategori('${key}')">
        ${val.emoji} ${val.label}
      </button>
    `).join('')}
  </div>

  <!-- Difficulty filter -->
  <div class="ok-zorluk-row" id="ok-zorluk-row">
    <span class="ok-zorluk-label">Seviye:</span>
    ${Object.entries(OK_ZORLUK).map(([key, val]) => `
      <button class="ok-zorluk-btn ${okState.zorluk===key?'active':''}"
        style="${okState.zorluk===key?`background:${val.renk};color:#fff;border-color:${val.renk}`:''}"
        onclick="okSetZorluk('${key}')">
        ${val.label}
      </button>
    `).join('')}
    <span class="ok-result-count" id="ok-result-count"></span>
  </div>

  <!-- Cards -->
  <div class="ok-cards ${okState.view==='list'?'ok-cards-list':''}" id="ok-cards"></div>

  <!-- Empty state -->
  <div class="ok-empty" id="ok-empty" style="display:none">
    <div class="ok-empty-icon">🔍</div>
    <div class="ok-empty-title">Sonuç bulunamadı</div>
    <div class="ok-empty-sub">Farklı bir arama terimi veya kategori deneyin</div>
    <button class="ok-empty-reset" onclick="okReset()">Filtreleri Temizle</button>
  </div>

</div>`;

  okRenderCards();
  setTimeout(() => { const s = document.getElementById('ok-search'); if (s) s.focus(); }, 100);
}

// ── Render Cards ───────────────────────────────────────────────
function okRenderCards() {
  const cardsEl = document.getElementById('ok-cards');
  const emptyEl = document.getElementById('ok-empty');
  const countEl = document.getElementById('ok-result-count');
  if (!cardsEl) return;

  let data = OKUNUSLAR_DATA;

  if (okState.showFavs) data = data.filter(w => okState.favorites.includes(w.id));
  if (okState.search) {
    const q = okState.search.toLowerCase().trim();
    data = data.filter(w =>
      w.yazi.toLowerCase().includes(q) ||
      w.soylenis.toLowerCase().includes(q) ||
      w.aciklama.toLowerCase().includes(q) ||
      (w.ornek && w.ornek.toLowerCase().includes(q))
    );
  }
  if (okState.kategori !== 'hepsi') data = data.filter(w => w.kategori === okState.kategori);
  if (okState.zorluk !== 'hepsi') data = data.filter(w => w.zorluk === okState.zorluk);

  if (countEl) countEl.textContent = `${data.length} kelime`;

  if (!data.length) {
    cardsEl.innerHTML = ''; cardsEl.style.display = 'none';
    if (emptyEl) emptyEl.style.display = 'flex';
    return;
  }
  cardsEl.style.display = '';
  if (emptyEl) emptyEl.style.display = 'none';

  const isFav = id => okState.favorites.includes(id);
  const katData = k => OK_KATEGORILER[k] || OK_KATEGORILER['gunluk'];
  const zorData = z => OK_ZORLUK[z] || OK_ZORLUK['kolay'];

  if (okState.view === 'list') {
    cardsEl.innerHTML = data.map(w => {
      const kat = katData(w.kategori);
      const zor = zorData(w.zorluk);
      return `
<div class="ok-list-row" id="okc-${w.id}">
  <div class="ok-lr-main">
    <div class="ok-lr-words">
      <span class="ok-lr-yazi">${highlight(w.yazi, okState.search)}</span>
      <span class="ok-lr-arrow">→</span>
      <span class="ok-lr-soylenis">${highlight(w.soylenis, okState.search)}</span>
    </div>
    <div class="ok-lr-meta">
      <span class="ok-cat-tag" style="background:${kat.renk}22;color:${kat.renk};border:1px solid ${kat.renk}44">${kat.emoji} ${kat.label}</span>
      <span class="ok-zor-tag" style="color:${zor.renk}">${zor.label}</span>
    </div>
  </div>
  <div class="ok-lr-actions">
    <button class="ok-icon-btn" onclick="okSpeak('${w.id}')" title="Sesli dinle">🔊</button>
    <button class="ok-icon-btn ${isFav(w.id)?'faved':''}" onclick="okToggleFav('${w.id}')" title="Favorile">${isFav(w.id)?'❤️':'🤍'}</button>
    <button class="ok-icon-btn ok-expand-btn" onclick="okExpand('${w.id}')" title="Detay">💡</button>
  </div>
  <div class="ok-lr-detail" id="ok-detail-${w.id}" style="display:none">
    <div class="ok-detail-acik">${w.aciklama}</div>
    ${w.ornek ? `<div class="ok-detail-ornek"><span class="ok-ornek-label">Örnek:</span> ${highlight(w.ornek, okState.search)}</div>` : ''}
  </div>
</div>`;
    }).join('');
  } else {
    cardsEl.innerHTML = data.map(w => {
      const kat = katData(w.kategori);
      const zor = zorData(w.zorluk);
      return `
<div class="ok-card" id="okc-${w.id}" onclick="okExpandCard('${w.id}')">
  <div class="ok-card-top">
    <div class="ok-card-cat" style="background:${kat.renk}20;color:${kat.renk}">${kat.emoji} ${kat.label}</div>
    <div class="ok-card-actions">
      <button class="ok-icon-btn sm" onclick="event.stopPropagation();okSpeak('${w.id}')" title="Dinle">🔊</button>
      <button class="ok-icon-btn sm ${isFav(w.id)?'faved':''}" onclick="event.stopPropagation();okToggleFav('${w.id}')" title="Favorile">${isFav(w.id)?'❤️':'🤍'}</button>
    </div>
  </div>
  <div class="ok-card-body">
    <div class="ok-card-yazi">${highlight(w.yazi, okState.search)}</div>
    <div class="ok-card-divider"><span class="ok-card-arrow">→ söyleniş</span></div>
    <div class="ok-card-soylenis">${highlight(w.soylenis, okState.search)}</div>
  </div>
  <div class="ok-card-footer">
    <span class="ok-zor-dot" style="background:${zor.renk}"></span>
    <span class="ok-zor-label" style="color:${zor.renk}">${zor.label}</span>
    <span class="ok-card-more">💡 Detay</span>
  </div>
  <div class="ok-card-expand" id="okce-${w.id}" style="display:none">
    <div class="ok-ce-acik">ℹ️ ${w.aciklama}</div>
    ${w.ornek ? `<div class="ok-ce-ornek"><span class="ok-ornek-label">Örnek:</span> ${highlight(w.ornek, okState.search)}</div>` : ''}
  </div>
</div>`;
    }).join('');
  }
}

// ── Helpers ─────────────────────────────────────────────────────
function highlight(text, query) {
  if (!query || !text) return text;
  const re = new RegExp(`(${escapeRegex(query)})`, 'gi');
  return text.replace(re, '<mark class="ok-hl-mark">$1</mark>');
}
function escapeRegex(s) { return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); }

// ── State Setters ──────────────────────────────────────────────
function okSearchChange(val) {
  okState.search = val;
  const inp = document.getElementById('ok-search');
  if (inp && inp.value !== val) inp.value = val;
  const toolbar = document.getElementById('ok-toolbar');
  if (toolbar) {
    const btn = toolbar.querySelector('.ok-search-clear');
    if (val && !btn) {
      const wrap = toolbar.querySelector('.ok-search-wrap');
      const newBtn = document.createElement('button');
      newBtn.className = 'ok-search-clear'; newBtn.textContent = '✕';
      newBtn.onclick = () => okSearchChange('');
      if (wrap) wrap.appendChild(newBtn);
    } else if (!val && btn) btn.remove();
  }
  okRenderCards();
}

function okSetKategori(k) {
  okState.kategori = k;
  document.querySelectorAll('.ok-cat-pill').forEach(b => {
    const key = b.getAttribute('onclick')?.match(/'(\w+)'/)?.[1];
    const isActive = key === k;
    b.classList.toggle('active', isActive);
    if (isActive && key) { const kat = OK_KATEGORILER[key]; if (kat) { b.style.background = kat.renk; b.style.borderColor = kat.renk; b.style.color = '#fff'; } }
    else { b.style.background = ''; b.style.borderColor = ''; b.style.color = ''; }
  });
  okRenderCards();
}

function okSetZorluk(z) {
  okState.zorluk = z;
  document.querySelectorAll('.ok-zorluk-btn').forEach(b => {
    const key = b.getAttribute('onclick')?.match(/'(\w+)'/)?.[1];
    const isActive = key === z;
    b.classList.toggle('active', isActive);
    if (isActive && key) { const zor = OK_ZORLUK[key]; if (zor) { b.style.background = zor.renk; b.style.borderColor = zor.renk; b.style.color = '#fff'; } }
    else { b.style.background = ''; b.style.borderColor = ''; b.style.color = ''; }
  });
  okRenderCards();
}

function okSetView(v) {
  okState.view = v;
  document.querySelectorAll('.ok-view-btn').forEach(b => b.classList.remove('active'));
  const btn = document.querySelector(`.ok-view-btn[onclick="okSetView('${v}')"]`);
  if (btn) btn.classList.add('active');
  const cards = document.getElementById('ok-cards');
  if (cards) cards.classList.toggle('ok-cards-list', v === 'list');
  okRenderCards();
}

function okToggleFavs() {
  okState.showFavs = !okState.showFavs;
  const btn = document.querySelector('.ok-fav-toggle');
  if (btn) btn.classList.toggle('active', okState.showFavs);
  okRenderCards();
}

function okReset() {
  okState.search = ''; okState.kategori = 'hepsi'; okState.zorluk = 'hepsi'; okState.showFavs = false;
  renderOkunuslar();
}

function okExpandCard(id) {
  const expandDiv = document.getElementById('okce-' + id);
  const card = document.getElementById('okc-' + id);
  if (!expandDiv || !card) return;
  const isOpen = expandDiv.style.display !== 'none';
  document.querySelectorAll('.ok-card-expand').forEach(el => { el.style.display = 'none'; });
  document.querySelectorAll('.ok-card').forEach(c => c.classList.remove('ok-card-open'));
  if (!isOpen) { expandDiv.style.display = 'block'; card.classList.add('ok-card-open'); }
}

function okExpand(id) {
  const d = document.getElementById('ok-detail-' + id);
  if (d) d.style.display = d.style.display === 'none' ? 'block' : 'none';
}

function okSpeak(id) {
  const word = OKUNUSLAR_DATA.find(w => w.id === id);
  if (!word || !window.speechSynthesis) return;
  window.speechSynthesis.cancel();
  const utter = new SpeechSynthesisUtterance(word.yazi);
  utter.lang = 'tr-TR'; utter.rate = 0.8;
  const voices = window.speechSynthesis.getVoices();
  const trVoice = voices.find(v => v.lang.startsWith('tr'));
  if (trVoice) utter.voice = trVoice;
  window.speechSynthesis.speak(utter);
}

function okToggleFav(id) {
  const idx = okState.favorites.indexOf(id);
  if (idx > -1) okState.favorites.splice(idx, 1);
  else okState.favorites.push(id);
  try { localStorage.setItem('ok_favs', JSON.stringify(okState.favorites)); } catch {}
  const countEl = document.querySelector('.ok-fav-count');
  if (countEl) countEl.textContent = okState.favorites.length;
  const card = document.getElementById('okc-' + id);
  if (card) {
    card.querySelectorAll('.ok-icon-btn').forEach(b => {
      if (b.textContent === '🤍' || b.textContent === '❤️') {
        const isFav = okState.favorites.includes(id);
        b.textContent = isFav ? '❤️' : '🤍';
        b.classList.toggle('faved', isFav);
      }
    });
  }
}

if (window.speechSynthesis) window.speechSynthesis.onvoiceschanged = () => window.speechSynthesis.getVoices();
