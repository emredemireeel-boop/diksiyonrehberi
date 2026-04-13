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
