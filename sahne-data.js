module.exports = [
  // ════ HEYECAN YÖNETİMİ ════
  {
    id: 'h1', cat: 'heyecan', num: 'H1', badge: 'Temel', badgeCls: 'ret-badge-beginner',
    title: 'Adrenalin Kontrolü (Sahne Korkusu)',
    desc: 'Sahne korkusunu tamamen yok etmek fiziksel olarak imkansızdır ve aslında istenmeyen bir durumdur. Çünkü korku hissettiğinizde salgılanan Adrenalin, bedeninizi "Savaş veya Kaç" durumuna sokar; kalp atışınız hızlanır, kaslarınıza kan pompalanır. Profesyonel hatipler korkuyu yenmeye çalışmaz, bu muazzam enerjiyi (adrenalini) performansı artıran bir yakıta dönüştürürler.',
    benefits: [
      'Sahneye çıktığınız ilk 30 saniyedeki ses titremesi ve nefes darlığını önler.',
      'Düşüncelerinizi netleştirir ve "Blackout" (tamamen unutma) riskini sıfırlar.',
      'Enerjinizi seyirciye "tutku" ve "coşku" olarak yansıtmanızı sağlar.'
    ],
    mistakes: [
      'Korkuyu tamamen bastırmaya çalışıp kendi bedeniyle savaşmak ("Sakin olmalıyım, sakin olmalıyım" demek).',
      'Sahneye çıkmadan hemen önce metni hızlı hızlı, panik halinde tekrar ezberlemeye çalışmak.',
      'Seyirciden gözlerini kaçırıp yere veya slaytlara bakarak "görünmez" olmaya çalışmak.'
    ],
    steps: [
      'YENİDEN ÇERÇEVELEME (Reframing): Kalbiniz hızlı çarpmaya başladığında "Çok korkuyorum" demek yerine sesli bir şekilde "Çok heyecanlıyım, bedenim bana enerji veriyor" deyin. Beyin bu iki fizyolojik durumu ayırt edemez.',
      'KUTU NEFESİ (Box Breathing): Sahneye çıkmadan 5 dakika önce: 4 saniye burundan nefes alın, 4 saniye içinizde tutun, 4 saniye ağızdan yavaşça verin, 4 saniye bekleyin. Bu döngüyü 5 kez tekrarlayın. Kalp ritminiz anında yavaşlayacaktır.',
      'FİZİKSEL GEVŞEME: Sahne arkasında omuz, boyun ve yumruklarınızı 5 saniye boyunca var gücünüzle sıkın ve aniden serbest bırakın (Progresif Kas Gevşetme).',
      'ODAĞI DIŞARI ÇEVİRME: Korku her zaman "Ben" odaklıdır (Nasıl görünüyorum? Ya unutursam?). Odağınızı "Seyirciye" çevirin: "Onlara bugün hangi değerli bilgiyi hediye edeceğim?". Odak dışa döndüğünde korku buharlaşır.'
    ],
    tip: '💡 Harvard Üniversitesi araştırma sonuçlarına göre, gergin hissettiğinde "Ben heyecanlıyım" diyen katılımcıların konuşma performansları, "Sakinleşmeliyim" diyenlere göre %17 daha yüksek bulunmuştur. Duyguyu bastırmayın, yönlendirin.',
    quiz: {
      q: 'Sahne korkusu hissettiğinizde vücudunuzun verdiği tepkileri kontrol etmek için yapılabilecek en yanlış şey nedir?',
      opts: [
        'Derin ve yavaş nefes almak', 
        'Korkuyu tamamen bastırmaya ve yok etmeye çalışmak', 
        'Seyirciyle göz teması kurup odağı onlara vermek', 
        'Fiziksel kas gevşetme hareketleri yapmak'
      ],
      correct: 1,
      ok: 'Doğru! Korkuyu bastırmak yerine onu kabul edip enerjiye dönüştürmelisiniz. Bastırılan duygu patlama yapar.',
      fail: 'Korkuyu tamamen bastırmaya çalışmak (inkar etmek) beynin panik butonuna daha sert basmasına neden olur.'
    },
    scenario: {
      label: 'Biyolojik Gerçek',
      text: 'Sahneye çıkmanıza 2 dakika var, kalbiniz yerinden çıkacak gibi atıyor, elleriniz buz kesmiş ve terliyor.',
      analysis: 'Ellerinizin buz kesmesinin sebebi, vücudunuzun kanı hayati organlara (kalp, akciğer) çekmesidir. Bu bir hastalık değil, tamamen evrimsel bir hazırlık sürecidir. Bedeniniz şu an sizi bir aslandan kaçmaya veya savaşmaya hazırlıyor. Bu harika bir enerjidir, onu sahnede kullanın.'
    },
    practice: 'Bir dahaki sefere gergin hissettiğinizde (sınav, mülakat veya sunum), sesli olarak kendi kendinize "Korkmuyorum, sadece çok heyecanlıyım ve hazırım" diyerek bilişsel çerçeveleme yapın.'
  },
  {
    id: 'h2', cat: 'heyecan', num: 'H2', badge: 'Orta', badgeCls: 'ret-badge-intermediate',
    title: 'Görselleştirme Tekniği (Visualization)',
    desc: 'Beynimiz, zihnimizde son derece net ve detaylı bir şekilde hayal ettiğimiz (görselleştirdiğimiz) bir deneyim ile gerçekte yaşadığımız deneyimi ayırt etmekte zorlanır. Zihinsel prova yapmak, beyninizde "Ben bunu daha önce başarıyla yaptım" yanılsaması (olumlu sinirsel yollar) oluşturur.',
    benefits: [
      'Sahneye çıktığınız andaki o ilk "yabancılık" ve "şok" hissini ortadan kaldırır.',
      'Söyleyeceğiniz kelimelerin akışını (flow) hızlandırır.',
      'Bilinçaltınızı başarısızlık senaryolarından koparıp başarıya odaklar.'
    ],
    mistakes: [
      'Sadece sunumun metnini içinden düz bir sesle okuyup ezberlemek.',
      'Görselleştirme yaparken sadece görselleri kullanıp, sesleri ve dokunma hissini atlamak.',
      'Hata yapma korkusuyla zihinde sürekli "Ya takılırsam" senaryosu kurmak (Negatif Görselleştirme).'
    ],
    steps: [
      'ORTAM KURULUMU: Sessiz ve karanlık bir odada rahat bir koltuğa oturun. Gözlerinizi kapatın ve kaslarınızı tamamen serbest bırakın.',
      'TAM DUYUSAL HAYAL: Sahneye yürüdüğünüzü hayal edin. Işıkların yüzünüze vuruşunu, zemin tahtalarının gıcırtısını, elinizdeki mikrofonun soğukluğunu ve ağırlığını hissedin.',
      'AKICI KONUŞMA: İlk cümlenizi son derece gür ve özgüvenli bir sesle söylediğinizi hayal edin. Seyircilerin başını sallayarak sizi onayladığını görün.',
      'ZAFER ANI: Sunumunuzun son cümlesini vurduktan sonra, salondaki alkış sesini zihninizde net bir şekilde duyun. O başarma ve tatmin hissini (dopamin salgısını) o an gerçekten bedeninizde yaşayın.'
    ],
    tip: '💡 Olimpiyat sporcuları yarıştan önce tüm parkuru, rüzgarı, kaslarındaki yanmayı ve madalya anını zihinlerinde saniye saniye yaşarlar (Mental Imagery). Zihin önce başarır, beden onu takip eder.',
    quiz: {
      q: 'Görselleştirme tekniğinin (Visualization) psikolojik olarak temel amacı nedir?',
      opts: [
        'Konuşmanın kaç dakika süreceğini ölçmek.', 
        'Metni kelimesi kelimesine ezberlemek.', 
        'Beyinde olumlu sinirsel yollar oluşturarak beyni "bunu başardığına" inandırmak.', 
        'Sahneden önce sesi ve diyaframı ısıtmak.'
      ],
      correct: 2,
      ok: 'Kesinlikle! Beyin, gerçek bir deneyimle çok canlı bir hayali tam olarak ayırt edemez. Zihniniz o sahneyi "yaşanmış bir başarı" olarak kaydeder.',
      fail: 'Görselleştirme metin ezberlemekten ziyade psikolojik bir hazırlık, beyni kodlama sürecidir.'
    },
    scenario: {
      label: 'Nörolojik Etki',
      text: 'Gözlerinizi kapatıp bir limonu ortadan ikiye kestiğinizi ve suyunu ağzınıza sıktığınızı çok detaylı hayal ettiğinizde ağzınız sulanır.',
      analysis: 'Ortada gerçek bir limon yoktur ancak beyniniz "hayali" limona karşı "gerçek" bir fiziksel tepki (tükürük salgısı) vermiştir. Aynı şekilde başarıyı detaylı hayal ettiğinizde de beyniniz gerçek özgüven hormonları salgılar.'
    },
    practice: 'Bir sonraki sunumunuz, toplantınız veya önemli görüşmeniz için sadece 5 dakikanızı ayırıp tam duyusal (görsel, işitsel, hissi) görselleştirme seansı yapın.'
  },

  // ════ SAHNE HAREKETİ ════
  {
    id: 'a1', cat: 'hareket', num: 'A1', badge: 'Temel', badgeCls: 'ret-badge-beginner',
    title: 'Çapa (Anchor) Noktaları ve Alan Kullanımı',
    desc: 'Sahnede amaçsızca sağa sola volta atmak, dinleyicinin gözünü yorar ve konuşmacının gerginliğini (panik halinde dolaşan bir hayvan gibi) ele verir. Karizmatik konuşmacılar sahneyi rastgele dolaşmazlar; bir satranç tahtası gibi, mesajlarının içeriğine göre bilinçli bölgeler (çapalar) kullanırlar.',
    benefits: [
      'Gereksiz adrenalin atımını engeller ve duruşunuza ağırlık (otorite) katar.',
      'Seyircinin konuyu zihinsel olarak haritalandırmasını (sol geçmiş, sağ gelecek) sağlar.',
      'Kritik anlarda vurgu yapmanızı kolaylaştırır.'
    ],
    mistakes: [
      'Kafesteki bir aslan gibi durmadan sağa sola pacing (volta atma) yapmak.',
      'Sürekli ağırlığı bir bacaktan diğerine aktararak sallanmak (gemi yalpalaması).',
      'Önemli ve ciddi bir mesaj verirken hareket halinde olmak (mesajın etkisini uçurur).'
    ],
    steps: [
      'SAHNEYİ 3\'E BÖLÜN: Sahneyi hayali olarak Geçmiş (Sol), Şimdi/Ana Mesaj (Orta) ve Gelecek/Çözüm (Sağ) olarak 3 ana bölgeye ayırın.',
      'DURAĞANLIK GÜÇTÜR: Konuşmanızın en önemli vurgusunu (Punchline) yaparken sahnenin tam ortasına (Center Stage) gelin. Ayaklarınızı yere sabitleyin (Köklenme) ve cümlenizi hareket etmeden, dimdik durarak söyleyin.',
      'HİKAYE ADIMLARI: Bir konunun veya hikayenin farklı bölümlerine geçerken (Örn: "Bir de madalyonun diğer yüzüne bakalım") fiziksel olarak da sahnenin başka bir noktasına yürüyün.',
      'YAKLAŞMA ETKİSİ: Dinleyiciye kritik ve samimi bir soru soracağınız zaman sahnenin ön ucuna doğru bir adım atarak (yakınlaşarak) aradaki bariyeri kaldırın.'
    ],
    tip: '💡 TED konuşmacıları incelendiğinde, en çok akılda kalan cümlelerini söylerken kırmızı halının tam ortasında durdukları ve o an hiçbir uzuvlarını oynatmadıkları görülür. Fiziksel durağanlık, sözlerin zihinsel ağırlığını artırır.',
    quiz: {
      q: 'Sahnede sürekli ve hızlı bir şekilde sağa sola yürümek seyircide nasıl bir etki bırakır?',
      opts: [
        'Çok enerjik ve tutkulu algılanır.', 
        'Dikkat dağıtır, gözü yorar ve güvensizlik/stres hissi verir.', 
        'Çok samimi ve rahat görünür.', 
        'Konuşmacının otoritesini artırır.'
      ],
      correct: 1,
      ok: 'Harika! Amaçsız hareket, konuşmacının gerginliğini ele verir ve seyircinin konudan ziyade harekete odaklanmasına neden olur.',
      fail: 'Sürekli volta atmak enerjiden ziyade stres (panik) işareti olarak algılanır ve otoriteyi düşürür.'
    },
    scenario: {
      label: 'Koreografi (Apple Stratejisi)',
      text: 'Steve Jobs iPhone lansmanında "Sizin bir probleminiz var" derken sol tarafta durur. "İşte bu problemi çözecek cihaz" derken sahnenin ortasına geçer.',
      analysis: 'İnsan beyni Batı kültüründe soldan sağa doğru okumaya alışıktır. Sahnenin solu geçmişi ve problemi, sağı ise geleceği ve çözümü temsil eder. Mekansal hafızayı kullanmak mesajı beynin daha derinlerine kazır.'
    },
    practice: 'Bir konuşma metnini sahne bölgelerine (Sol, Orta, Sağ) bölerek yürüyüş provası yapın ve ana cümlenizi söylerken tamamen "donup kalarak" gücünü hissedin.'
  },

  // ════ SEYİRCİ ETKİLEŞİMİ ════
  {
    id: 'e1', cat: 'etkilesim', num: 'E1', badge: 'Orta', badgeCls: 'ret-badge-intermediate',
    title: 'Göz Teması ve Kitle Yönetimi (Z Kuralı)',
    desc: 'Binlerce kişiye hitap ediyor olsanız bile, insan beyni sadece "birebir" iletişimi algılar. Seyircilerin üzerinde kayıp giden (deniz feneri gibi dönen) bakışlar kimseyle bağ kurmaz. Etkili bir hatip, salondaki yüzlerce kişiyle "sanki sadece onunla kahve içiyormuş" gibi özel bir bağ kurmayı başarabilen kişidir.',
    benefits: [
      'Seyircilerin akıllı telefonlarına bakmalarını ve dikkatlerinin dağılmasını engeller.',
      'Sizi ulaşılmaz bir figür olmaktan çıkarıp, samimi bir karaktere dönüştürür.',
      'Salondaki enerjiyi ve geri bildirimleri (kafa sallamaları) anlık olarak toplamanızı sağlar.'
    ],
    mistakes: [
      'Gözleri salondaki insanların kafalarının üstünde (tavanda boş bir noktada) gezdirmek.',
      'Konuşma boyunca sadece en öndeki protokole veya tanıdık bir yüze (güvenli liman) bakarak konuşmak.',
      'Cümle bitmeden gözleri birinden diğerine çok hızlı "sıçratmak".'
    ],
    steps: [
      'Z KURALI: Salona Z harfi çizer gibi bakın: Arka sol köşe, arka sağ köşe, ön sol köşe, ön sağ köşe. Böylece salonun her bölgesi "bize de bakıyor" hissine kapılır.',
      '1 CÜMLE = 1 KİŞİ: Gözleriniz seyirciler üzerinde kayıp gitmesin. Birine bakın, cümlenize başlayın ve O CÜMLE BİTENE KADAR sadece o kişinin gözlerinin içine bakın.',
      'KİLİTLEME: Cümlenin son kelimesini ve vurgusunu vururken göz temasını kesinlikle koparmayın (Buna görsel kilitleme denir).',
      'YENİ CÜMLE: Nokta koyup es verdikten sonra, bambaşka bir bölgedeki yeni bir kişiye geçin ve bir sonraki cümleyi ona armağan edin.'
    ],
    tip: '💡 Çok karanlık veya devasa salonlarda insanların yüzlerini göremiyorsanız bile, salonu hayali dilimlere ayırıp (Örn: Sol Blok) vücudunuzu ve bakışınızı doğrudan oradaki bir "hayali yüze" kilitleyerek konuşun. İnsanlar onlara baktığınızı hissedecektir.',
    quiz: {
      q: 'Büyük bir kalabalığa (örneğin 500 kişiye) hitap ederken göz teması nasıl kurulmalıdır?',
      opts: [
        'Korkmamak için insanların alınlarına veya saçlarına bakılmalıdır.', 
        'Genel bir "deniz feneri" gibi gözler sürekli tüm salon üzerinde gezdirilmelidir.', 
        'Her cümlede spesifik bir kişinin doğrudan gözlerinin içine bakılmalıdır.', 
        'Sadece en önde oturan jüri veya yöneticilerle göz teması kurulmalıdır.'
      ],
      correct: 2,
      ok: 'Kesinlikle! Kalabalıklarla iletişim aslında bir dizi "birebir" iletişimden (1 cümle = 1 kişi) ibarettir.',
      fail: 'Tavana bakmak veya sürekli göz gezdirmek seyirciyle olan psikolojik bağı tamamen koparır.'
    },
    scenario: {
      label: 'Geri Bildirim Döngüsü',
      text: 'Birine bakarak bir cümle kurdunuz ve o kişi hafifçe başını sallayarak sizi onayladı.',
      analysis: 'İşte bu "Dopamin Döngüsüdür". Birine odaklandığınızda onun tepkisi sizi motive eder. Siz motive oldukça daha enerjik konuşursunuz. Göz teması sadece seyirciyi değil, sizin kendi enerjinizi de yönetir.'
    },
    practice: 'Bir sonraki toplantınızda veya sunumunuzda "1 Cümle = 1 Kişi" kuralını bilinçli olarak uygulayın. Her cümlede bir iş arkadaşınızın gözlerine kilitlenin.'
  }
];
