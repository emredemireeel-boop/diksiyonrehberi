module.exports = [
  // ════ HEYECAN YÖNETİMİ ════
  {
    id: 'h1', cat: 'heyecan', num: 'H1', badge: 'Temel', badgeCls: 'ret-badge-beginner',
    title: 'Adrenalin Kontrolu',
    desc: 'Sahne korkusunu yenmek yerine, adrenalini performansi artiran bir yakita donusturme teknikleri.',
    steps: [
      'Sahneye cikmadan 5 dakika once "Kutu Nefesi" uygulayin: 4 saniye nefes alin, 4 saniye tutun, 4 saniye verin, 4 saniye bekleyin.',
      'Fiziksel gerginligi atmak icin omuz ve boyun kaslarinizi 5 saniye sikip birakin (Progressif Gevsetme).',
      'Kendinize odaklanmak yerine, seyirciye vereceginiz "degere" odaklanin. Odak disiniza ciktikca korku azalir.'
    ],
    quiz: {
      q: 'Sahne korkusu hissettiginizde yapilacak en yanlis sey nedir?',
      opts: ['Derin nefes almak', 'Korkuyu tamamen bastirmaya calismak', 'Seyirciyle goz temasi kurmak', 'Hazirligi gozden gecirmek'],
      correct: 1,
      ok: 'Dogru! Korkuyu bastirmak yerine onu kabul edip enerjiye donusturmelisiniz.',
      fail: 'Korkuyu tamamen bastirmaya calismak panigi artirir. Adrenalini kabul etmelisiniz.'
    },
    scenario: {
      label: 'Senaryo',
      text: 'Sahneye cikmaniza 2 dakika var ve kalbiniz yerinden cikacak gibi atiyor.',
      analysis: 'Bunu "korku" olarak degil, "vududum yuksek performansa hazirlaniyor" olarak yeniden cerceveleyin. Harvard arastirmasi, bu yeniden cercevelemenin performansi %17 artirdigini gosterdi.'
    },
    practice: 'Bir dahaki sefere gergin hissettiginizde, sesli olarak "Korkmuyorum, cok heyecanliyim" diyerek cerceveleme yapin.'
  },
  {
    id: 'h2', cat: 'heyecan', num: 'H2', badge: 'Orta', badgeCls: 'ret-badge-intermediate',
    title: 'Goruselestirme Teknigi',
    desc: 'Zihinsel prova yaparak beyninizi basarili bir sahne deneyimine onceden alistirma.',
    steps: [
      'Sessiz bir ortamda gozlerinizi kapatin ve tumuyle rahatlayin.',
      'Sahneye ciktiginizi, isiklari, seyircinin olumlu tepkilerini tum detaylariyla hayal edin.',
      'Konusmanizin sonundaki alkis sesini zihninizde duyun. Basari hissini bedeninizde yasayin.'
    ],
    quiz: {
      q: 'Gorselestirme tekniginin temel amaci nedir?',
      opts: ['Sureyi olcmek', 'Metni ezberlemek', 'Beyinde olumlu sinirsel yollar olusturmak', 'Sesi isitmak'],
      correct: 2,
      ok: 'Kesinlikle! Beyin, gercek bir deneyimle canli bir hayali tam olarak ayirt edemez.',
      fail: 'Gorselestirme metin ezberlemekten ziyade psikolojik hazirlik icindir.'
    },
    scenario: {
      label: 'Arastirma',
      text: 'Olimpiyat sporculari yaristan once tum parkuru zihinlerinde saniye saniye yasarlar.',
      analysis: 'Ayni psikolojik mekanizma sahne performansi icin de gecerlidir. Zihin once basarir, beden takip eder.'
    },
    practice: 'Bir sonraki sunumunuz icin 5 dakikalik tam duyusal gorselestirme seansi yapin.'
  },
  {
    id: 'h3', cat: 'heyecan', num: 'H3', badge: 'Ileri', badgeCls: 'ret-badge-advanced',
    title: 'Pre-Performance Rituel',
    desc: 'Profesyonel konusmacilarin sahneye cikmadan once uyguladiklari kisisel hazirlik rutinleri.',
    steps: [
      'Sahneye cikmadan 30 dakika once kafein veya seker almayin; bunlar titremeyi artirir.',
      'Kendi "guc sarkisi"nizi dinleyin. Muzik beynin duygusal tonunu degistirir.',
      'Son 5 dakikada kendinizi izole edin. Telefonunuzu kapatin ve konusmanizin ilk 3 cumlesini fisildayarak tekrarlayin.'
    ],
    quiz: {
      q: 'Sahne oncesi en etkili fiziksel hazirlik hangisidir?',
      opts: ['Hizlica kahve icmek', 'Sesini isitmak icin mimik egzersizleri yapmak', 'Seyirci ile sohbet etmek', 'Sessizce oturmak'],
      correct: 1,
      ok: 'Evet! Yuz kaslari ve dil esnekligi direkt ses kalitesini etkiler.',
      fail: 'Mimik egzersizleri ses kaslarini isitur ve artikulasyonu keskinlestirir.'
    },
    scenario: {
      label: 'Profesyonel Ornek',
      text: 'Barack Obama her konusmadan once 10 dakika yalniz kalir, notlarini son kez gozden gecirir ve derin nefes egzersizi yapar.',
      analysis: 'Rituel beyni "performans moduna" alir. Tutarli bir rutin belirsizligi azaltir ve ozguveni artirir.'
    },
    practice: 'Kendinize ozel 5 adimlik bir "sahne oncesi rituel" olusturun ve bir sonraki sunumda uygulayin.'
  },

  // ════ SAHNE HAREKETİ ════
  {
    id: 'a1', cat: 'hareket', num: 'A1', badge: 'Temel', badgeCls: 'ret-badge-beginner',
    title: 'Capa (Anchor) Noktalari',
    desc: 'Sahnede amacsizca volta atmayi birakip, konuya gore bilincli alan kullanimi saglamak.',
    steps: [
      'Sahneyi 3 ana bolgeye ayirin: Gecmis (Sol), Simdi (Orta), Gelecek (Sag).',
      'Gecmisten bahsederken sol tarafa gecip durun. Gelecekten bahsederken saga gecin.',
      'Ana mesajinizi verirken sahnenin tam ortasinda (Simdi) sabitlenin. Fiziksel duraganlik, sozlerin zihinsel agirligini artirir.'
    ],
    quiz: {
      q: 'Sahnede surekli ve hizli bir sekilde saga sola yurumek seyircide nasil bir etki birakir?',
      opts: ['Enerjik algilanir', 'Dikkat dagitir ve guvensizlik hissi verir', 'Samimi gorunur', 'Otorite saglar'],
      correct: 1,
      ok: 'Harika! Amacsiz hareket, konusmacinin gerginligini ele verir ve seyirciyi yorar.',
      fail: 'Surekli volta atmak enerjiden ziyade stres ve guvensizlik isareti olarak algilanir.'
    },
    scenario: {
      label: 'Koreografi',
      text: 'TED konusmacilari ana mesajlarini verirken kirmizi halinin tam ortasinda durur ve hareket etmezler.',
      analysis: 'Fiziksel duraganlik, sozlerin zihinsel agirligini artirir.'
    },
    practice: 'Bir konusma metnini sahne bolgelerine (Sol, Orta, Sag) bolerek yuruyus provasi yapin.'
  },
  {
    id: 'a2', cat: 'hareket', num: 'A2', badge: 'Orta', badgeCls: 'ret-badge-intermediate',
    title: 'Acik Durus ve Guc Pozlari',
    desc: 'Otoriteyi ve samimiyeti ayni anda yansitan fiziksel durus teknikleri.',
    steps: [
      'Ayaklarinizi omuz genisliginde acik tutun (Koklenme). Agirliginizi iki bacaginiza esit dagitin.',
      'Ellerinizi gobek deligi hizasinda, avuc icleri birbirine donuk ama degmeden tutun (Power Box).',
      'Asla kollarinizi gogsunuzde baglamayin, bu savunma duvari orer. Kollarini acik tutan konusmaci %42 daha guvenilir algilanir.'
    ],
    quiz: {
      q: 'Kursu arkasinda konusurken yapilan en buyuk fiziksel hata nedir?',
      opts: ['Elleri kullanmak', 'Kursuye iki elle sikica tutunup kapanmak', 'Mikrofona yaklasmak', 'Notlara bakmak'],
      correct: 1,
      ok: 'Dogru! Kursuye tutunmak "can yelegine sarilmak" gibi algilanir.',
      fail: 'Kursuye sikica sarilmak korku ve guvensizlik gostergesidir.'
    },
    scenario: {
      label: 'Durum',
      text: 'Dinleyicilerden zor bir soru geldi ve kendinizi rahatsiz hissettiniz.',
      analysis: 'Icgudusel olarak geriye adim atma veya kollarinizi baglama egilimini durdurun. Aksine yarim adim one cikin.'
    },
    practice: 'Ayna karsisinda 2 dakika boyunca kollariniz iki yanda acik "Guc Pozu"nda durarak pratik yapin.'
  },
  {
    id: 'a3', cat: 'hareket', num: 'A3', badge: 'Ileri', badgeCls: 'ret-badge-advanced',
    title: 'Sahne Geometrisi',
    desc: 'Profesyonel konusmacilarin sahneyi bir satranc tahtasi gibi kullanma stratejisi.',
    steps: [
      'One dogru adim atmak "vurgu" ve "yaklasmak" anlamina gelir. Kritik mesajlarda seyirciye yaklasarak etkiyi artirin.',
      'Geriye adim atmak "dusunme" ve "nefes alma" alani yaratir. Seyirciye soru sorduktan sonra yarım adim geri cekilin.',
      'Sahnede daire cizmek "hikaye anlatimi" icin idealdir. Fiziksel yolculuk = zihinsel yolculuk.'
    ],
    quiz: {
      q: 'Konusmacinin seyirciye dogru bir adim atmasi ne anlama gelir?',
      opts: ['Tehdit', 'Yakinlik ve vurgu', 'Sikilginlik', 'Zaman kazanma'],
      correct: 1,
      ok: 'Evet! One adim samimiyeti ve mesajin onemini vurgular.',
      fail: 'One adim seyirciyle bagin guclendigini ve mesajin kritik oldugunu gosterir.'
    },
    scenario: {
      label: 'Profesyonel Analiz',
      text: 'Steve Jobs urun tanitimlarinda sahneyi bilinclice kullanir: problemi anlatirken sol tarafta, cozumu sunarken sag tarafta dururdu.',
      analysis: 'Seyirci bilincsizce "sol = eski sorun, sag = yeni cozum" olarak kodlar. Bu mekansal hafiza teknigidir.'
    },
    practice: 'Bir konusmanizi "problem bolumu" ve "cozum bolumu" olarak iki ayri sahne bolgesine tasiyarak prova yapin.'
  },

  // ════ SEYİRCİ ETKİLEŞİMİ ════
  {
    id: 'e1', cat: 'etkilesim', num: 'E1', badge: 'Temel', badgeCls: 'ret-badge-beginner',
    title: 'Z Kurali ile Goz Temasi',
    desc: 'Tum salonu kapsayan ve her bireyin kendisiyle konusuluyormus gibi hissetmesini saglayan teknik.',
    steps: [
      'Salona Z harfi cizer gibi bakin: Arka sol, arka sag, on sol, on sag.',
      'Gozleriniz seyirciler uzerinde kayip gitmesin, bir cumleyi tek bir kisiye bakarak bitirin.',
      'Sonraki cumle icin baska bir kisiye gecin. 1 Cumle = 1 Kisi kurali.'
    ],
    quiz: {
      q: 'Buyuk bir kalabaliga konusurken nereye bakilmalidir?',
      opts: ['Tavanda bos bir noktaya', 'Insanlarin alinlarina', 'Her cumlede spesifik bir kisinin dogrudan gozlerine', 'En ondeki protokole'],
      correct: 2,
      ok: 'Evet! Kalabaliklarla iletisim aslinda bir dizi "birebir" iletisimden ibarettir.',
      fail: 'Bosluga veya alinlara bakmak bag kurmanizi engeller. Goz temasi sarttir.'
    },
    scenario: {
      label: 'Senaryo',
      text: 'Cok buyuk ve karanlik bir salondasiniz, yuzleri net goremiyorsunuz.',
      analysis: 'Goremediginiz durumlarda bile salonu uc dilime ayirip (Sag, Orta, Sol) belirli bloklara hitap ediyormus gibi vucudunuzu yonlendirin.'
    },
    practice: 'Bir sonraki sunumunuzda "1 Cumle = 1 Kisi" kuralini bilincli olarak uygulayin.'
  },
  {
    id: 'e2', cat: 'etkilesim', num: 'E2', badge: 'Orta', badgeCls: 'ret-badge-intermediate',
    title: 'Retorik Soru Teknigi',
    desc: 'Seyirciyi pasif dinleyiciden aktif katilimciya donusturen soru stratejileri.',
    steps: [
      'Konusmanin basinda "El kaldirma sorusu" sorun: "Kac kisiniz bugun stresli bir toplantidan cikti?"',
      'Ortada "Retorik soru" sorun: "Peki bu durumda ne yapilir?" (Cevap beklemeyin, kendiniz verin)',
      'Sonunda "Kisisel soru" sorun: "Yarin sabah kalktinizda farkli ne yapacaksiniz?"'
    ],
    quiz: {
      q: 'Bir konusmanin basinda seyirciye soru sormanin temel amaci nedir?',
      opts: ['Bilgi toplamak', 'Seyircinin beyinini aktive edip katilim saglamak', 'Zamanı gecirmek', 'Bilgi duzeyi olcmek'],
      correct: 1,
      ok: 'Dogru! Soru sormak beyni "dinleyici modundan" "katilimci moduna" gecirir.',
      fail: 'Seyircinin beyni soru duyunca otomatik olarak dusunmeye baslar ve dikkat artar.'
    },
    scenario: {
      label: 'Teknik',
      text: 'Obama konusmalarinda siklikla "Biliyor musunuz..." ile baslayan retorik sorular kullanir.',
      analysis: 'Retorik soru seyircinin beynini "arama moduna" alir ve sonraki cevabi cok daha dikkatli dinlemesini saglar.'
    },
    practice: 'Bir konusma icin 3 farkli turde soru hazirlayip (el kaldirma, retorik, kisisel) prova yapin.'
  },
  {
    id: 'e3', cat: 'etkilesim', num: 'E3', badge: 'Ileri', badgeCls: 'ret-badge-advanced',
    title: 'Sessizligin Gucu',
    desc: 'Stratejik sessizlik, kelimelerin etkisini katlar. En guclu konusmacilar en iyi susmayi bilenlerdir.',
    steps: [
      'Kritik bir noktadan sonra 3-5 saniye tamamen susun. Bu sessizlik seyircinin mesaji sindirmesini saglar.',
      'Sahneye ilk ciktiginizda 3 saniye bekleyin, goz temasi kurun ve sonra konusmaya baslayin.',
      'Soruya aninda cevap vermeyin. 2 saniye beklemek bile "dusunuyorum" mesaji verir ve cevabiniza agirlik katar.'
    ],
    quiz: {
      q: 'Konusmacinin sahnede 5 saniye sessiz kalmasi seyircide ne yaratir?',
      opts: ['Sikinti', 'Gerilim ve merak (dikkat zirvesi)', 'Guvensizlik', 'Kopukluk'],
      correct: 1,
      ok: 'Mukemmel! Sessizlik merak yaratir ve seyircinin dikkati zirveye cikar.',
      fail: 'Stratejik sessizlik konusmacinin en guclu aracidir. Merak ve gerilim yaratir.'
    },
    scenario: {
      label: 'Analiz',
      text: 'Martin Luther King "I Have a Dream" konusmasinda her "I have a dream" tekrarindan sonra 2-3 saniye sessiz kalir.',
      analysis: 'Bu sessizlik seyircinin duyguyu tamamen emmesini saglar. Sessizlik = Vurgu.'
    },
    practice: 'Bir konusma metnine 3 farkli "stratejik sessizlik" noktasi isaretle ve bunlari prova ederken bilinçli olarak uygula.'
  },

  // ════ KRİZ YÖNETİMİ ════
  {
    id: 'k1', cat: 'kriz', num: 'K1', badge: 'Orta', badgeCls: 'ret-badge-intermediate',
    title: 'Teknik Ariza ve Unutkanlik',
    desc: 'Sahnede her sey ters gittiginde karizmayi koruma sanatidir.',
    steps: [
      'Sunum kumandasi bozuldugunda panige kapilmayin, gulumseyin ve manuel devam edin. Sogukkanlilik seyircinin guvensini kazandirir.',
      'Sozunuzu unuttugunuzda "iii" demek yerine tamamen sessiz kalin. Sessizlik, guctur.',
      'Bir aniyi veya hikayeyi anlatarak beyninize hatirlamasi icin zaman kazandirin.'
    ],
    quiz: {
      q: 'Sahnede mikrofonunuz aniden bozuldugunda en profesyonel tepki nedir?',
      opts: ['Mikrofona vurup uflemek', 'Panikleyip konusmayi kesmek', 'Durumu mizaha cevirip sesinizi yukselterek devam etmek', 'Teknik ekibe sinirlenmek'],
      correct: 2,
      ok: 'Harika! Krizleri mizahla yonetmek seyircinin size olan saygisini aninda artirir.',
      fail: 'Mikrofona vurmak veya sinirlenmek profesyonellige zarar verir.'
    },
    scenario: {
      label: 'Senaryo',
      text: 'Sahnede bir anda ne soyleyeceginizi tamamen unuttunuz (Blackout).',
      analysis: 'Sessiz kalin, yavascasuyunuzdan bir yudum alin, sahnenin diger tarafina yuruiyun. Bu 10 saniye seyirciye "dramatik bir an" gibi gelirken size hatırlama firsati verir.'
    },
    practice: 'Eger bir seyler ters giderse kullanabileceginiz 2 adet "kurtarici cumle" hazirlayin.'
  },
  {
    id: 'k2', cat: 'kriz', num: 'K2', badge: 'Ileri', badgeCls: 'ret-badge-advanced',
    title: 'Dusman Seyirci Yonetimi',
    desc: 'Olumsuz, saldirgan veya provokatif seyircileri profesyonelce yonetme stratejileri.',
    steps: [
      'Provokasyona asla duygusal yanit vermeyin. 3 saniye bekleyin, derin nefes alin ve sonra mantikla yanitlayin.',
      'Saldirgan bir soruyu "yeniden cerceveleyin": "Cok guzel bir noktaya degindiniz, aslinda bu sorunun ozunde su yatiyor..."',
      'Gerektiginde sinir cizerken kibarca ama net olun: "Bu konuyu sunumdan sonra birebir goruselim, simdi devam edelim."'
    ],
    quiz: {
      q: 'Seyirciden saldirgan bir yorum geldiginde en etkili tepki nedir?',
      opts: ['Ayni sertlikte karsilik vermek', 'Gorusunuzu sakin ve mantikli sekilde tekrar etmek', 'Tamamen gormezden gelmek', 'Konuyu degistirmek'],
      correct: 1,
      ok: 'Evet! Sakin kalmak ve mantikla yanit vermek hem sizi hem seyirciyi tarafiniza cekar.',
      fail: 'Duygusal tepki vermek saldirganin elini guclendirir. Sogukkanlilik en buyuk silahimizdir.'
    },
    scenario: {
      label: 'Profesyonel Ornek',
      text: 'Bir konferansta birisi yuksek sesle "Bu tamamen yanlis!" diye bagirdi.',
      analysis: '"Ilginc bir bakis acisi, baska dusunenleri de duymak isterim. Farkli gorusler bu konuyu zenginlestirir" diyerek saldiriyi tartismaya cevirirsiniz.'
    },
    practice: 'Kendinize yoneltilebilecek en zor 3 soruyu yazin ve her biri icin sakin, mantikli yanitlar hazirlayin.'
  }
];
