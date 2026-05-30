module.exports = [
  {
    id: 'm1', cat: 'psikolojik', num: 'M1', badge: 'Şiddet', badgeCls: 'ret-badge-advanced',
    title: 'Gaslighting (Gerçeklik Algısını Bozma)',
    desc: 'Gaslighting, psikolojik manipülasyonun en tehlikeli türlerinden biridir. Manipülatör, kurbanın hafızasından, algısından veya akıl sağlığından şüphe etmesini hedefler. Sık sık "Sen öyle hatırlıyorsun", "Ben asla öyle bir şey demedim" veya "Sen uyduruyorsun" gibi cümlelerle sizi kendi gerçekliğinizden kopararak kendine bağımlı hale getirir.',
    benefits: [
      'Toksik ilişkilerde kendi akıl sağlığınızı ve hafızanızı korursunuz.',
      'Manipülatörün oyununa gelmeden tartışmayı anında kilitlersiniz.',
      'Sürekli kendinizi savunma ve ispat etme zorunluluğundan kurtulursunuz.'
    ],
    mistakes: [
      '"Hayır dedin, yemin ederim dedin!" diyerek panikle kanıt sunmaya çalışmak.',
      'Kendi hafızanızdan şüphe edip manipülatörden özür dilemek.',
      'Daha çok açıklama yaparak manipülatöre size saldırması için malzeme vermek.'
    ],
    steps: [
      'FARKINDALIK: Karşı taraf ısrarla bariz bir gerçeği inkar ediyorsa, bunun bir hafıza sorunu değil, bir kontrol taktiği (Gaslighting) olduğunu fark edin.',
      'KANIT ARAMAYI BIRAKIN: Manipülatöre haklı olduğunuzu kanıtlamaya çalışmayın. Çünkü onun amacı gerçeği bulmak değil, sizi dengesizleştirmektir.',
      'GRİ KAYA TEKNİĞİ (Grey Rock): Duygusal tepki vermeyin. Sizi "delirmekle" veya "uydurmakla" suçladığında sesinizi yükseltmeyin, tamamen donuk ve sakin kalın.',
      'KENDİ GERÇEKLİĞİNİZE TUTUNUN: İçinizden "Ben ne yaşadığımı biliyorum" deyin ve konuyu tartışmaya kapatın.',
      'SİHİRLİ CÜMLEYİ KULLANIN: "Sen olayları öyle hatırlayabilirsin, ama benim gerçeğim bu. Bu konuyu daha fazla tartışmayacağım." deyin ve ortamdan ayrılın.'
    ],
    tip: '💡 Gaslighting uygulayan kişiler sizin duygusal patlamalarınızdan beslenir. Siz ağladıkça veya bağırdıkça, "Bak işte, yine histerik davranıyorsun" diyerek kendi yalanlarını meşrulaştırırlar. Sessizlik ve kararlılık onların en büyük kabusudur.',
    quiz: {
      q: 'Birisi size sürekli "Sen çok hassassın, her şeyi yanlış anlıyorsun ve abartıyorsun" diyorsa bu hangi taktik olabilir?',
      opts: [
        'Empati kurma çabası', 
        'Gaslighting (Duyguları geçersiz kılma)', 
        'Yapıcı eleştiri', 
        'Açık iletişim'
      ],
      correct: 1,
      ok: 'Kesinlikle! Sizin tamamen haklı olduğunuz bir duyguyu "aşırı hassasiyet" olarak etiketlemek, Gaslighting taktiğinin en temel adımıdır.',
      fail: 'Bu bir manipülasyon taktiğidir. Duygularınızı değersizleştirerek sizi kendi hislerinize yabancılaştırır.'
    },
    scenario: {
      label: 'Sözel Savunma',
      text: 'Partneriniz veya patronunuz size hakaret etti. Tepki gösterdiğinizde "Ben sadece şaka yapıyordum, ne kadar da alıngansın, espri anlayışın sıfır" diyor.',
      analysis: 'Bu klasik bir Gaslighting savunmasıdır. Hakareti yapar ve suçluluğu sizin algınıza atar. Yanıtınız: "Bana bu şekilde konuşmanı komik bulmuyorum ve kabul etmiyorum." olmalı ve asla tartışmaya girmemelisiniz.'
    },
    practice: 'Sizi "hassas" olmakla suçlayan birine haklı olduğunuzu kanıtlamaya çalışmak yerine sadece yüzüne sakin bir şekilde bakıp "Bu benim doğrum/benim hissim" diyerek sessiz kalın.'
  },
  {
    id: 'm2', cat: 'duygusal', num: 'M2', badge: 'Duygusal', badgeCls: 'ret-badge-intermediate',
    title: 'Suçluluk Tripi (Guilt Tripping)',
    desc: 'Duygusal şantaj yoluyla size istemediğiniz şeyleri yaptıran kişilerin ana silahı suçluluk duygusudur. Bu kişiler sizin vicdanınızı bir ipotek gibi kullanır. "Ben senin için saçımı süpürge ettim", "Senin yüzünden hasta oldum" gibi cümlelerle mantığınızı devre dışı bırakıp tamamen duygu sömürüsüyle sizi yönetirler.',
    benefits: [
      'İstemediğiniz fedakarlıkları yapmaktan (Hayır diyememe hastalığından) kurtulursunuz.',
      'Sınırlarınızı korurken kendinizi kötü ve bencil hissetmezsiniz.',
      'Toksik fedakarlık döngüsünü kırarsınız.'
    ],
    mistakes: [
      'Vicdan azabı çekip anında karşı tarafın istediği şeyi yapmak.',
      'Yapılan fedakarlıkları inkar edip "Ne yaptın ki benim için!" diyerek tartışmak.',
      'Karşı tarafa olan borçluluk hissinden dolayı kendi hayatınızdan vazgeçmek.'
    ],
    steps: [
      'AYRIŞTIRMA (De-coupling): Karşınızdakinin geçmişte yaptığı fedakarlıklar ile şu an sizden istediği mantıksız talebi birbirinden ayırın. İyilikler, gelecekteki köleliğin senedi olamaz.',
      'ONAYLA VE REDDET: Önce duygularını ve geçmiş iyiliklerini onaylayın: "Benim için yaptıklarının ne kadar değerli olduğunu biliyorum..."',
      'KESİN SINIR: Hemen ardından "Hayır" kararınızı netleştirin: "...Ancak şu an benden istediğin bu şeyi yapmam mümkün değil."',
      'SORUMLULUĞU İADE EDİN: Kendini "kurban" gibi gösteren kişiye sorumluluğunu hatırlatın. "Bunun için üzülmeni anlıyorum ama bu benim kararım." diyerek topu ona atın.',
      'SESSİZLİK: "Nasıl bu kadar bencil olabilirsin!" dediklerinde savunmaya geçmeyin. "Bu şekilde düşünmene üzüldüm" deyip susun.'
    ],
    tip: '💡 Suçluluk hissettirilen kurban, sürekli bir borç ödeme psikolojisindedir. Gerçek sevgi ve fedakarlık, karşılığında itaat beklemez. Şantaj başladığı an sevgi bitmiş, ticaret (alışveriş) başlamıştır.',
    quiz: {
      q: 'Bir yakınınız "Senin için o kadar şeyden vazgeçtim, sen bana basit bir iyiliği bile çok görüyorsun" dediğinde en doğru ve sınır çizen yanıt nedir?',
      opts: [
        'Peki tamam, vicdan azabı çekmektense istediğini yapacağım.', 
        'Senin de canın cehenneme, hiçbir şey yapmasaydın!', 
        'Yaptıkların için minnettarım ama bu konuda kararım değişmeyecek.', 
        'Sana olan borcumu başka şekilde ödeyeceğim.'
      ],
      correct: 2,
      ok: 'Harika. Geçmişteki iyilikleri takdir edip, bugünkü sınırdan taviz vermemek alfa (assertive) bir duruştur.',
      fail: 'Taviz verirseniz veya agresifleşirseniz onun kontrol alanına girmiş olursunuz.'
    },
    scenario: {
      label: 'Sınır Testi',
      text: 'Ailenizden biri sadece kendi istedikleri bir planı yapmadığınız için günlerce surat asıp "Zaten bizim hiç değerimiz yok" diyor.',
      analysis: 'Birisinin sırf kendi istedikleri olmadı diye üzülme veya surat asma TERCİHİ, sizin kararınızı geri çekme nedeniniz olamaz. Sağlıklı bir yetişkin, başkalarının duygusal şantajlarının sorumluluğunu üstlenmez.'
    },
    practice: 'Bugün size duygusal baskı kurularak (acındırılarak) yaptırılmak istenen küçük bir talebe sadece "Üzgünüm, şu an yapamam" deyin ve nedenini ASLA açıklamayın.'
  },
  {
    id: 'm3', cat: 'pasif', num: 'M3', badge: 'Pasif Agresif', badgeCls: 'ret-badge-beginner',
    title: 'Sessizlik Terapisi (Silent Treatment)',
    desc: 'Sessizlik terapisi, manipülatörün iletişimi tamamen keserek (küserek, yok sayarak) sizi "cezalandırma" ve yola getirme yöntemidir. Bir sorunu konuşarak çözmek yerine sizi belirsizlikte bırakır, sizin panikleyip ondan özür dilemenizi veya peşinden koşmanızı bekler.',
    benefits: [
      'Küsme ve yok sayılma eyleminin üzerinizde yarattığı anksiyeteyi yok eder.',
      'Pasif-agresif kişilere karşı psikolojik üstünlük kurmanızı sağlar.',
      'Ortadaki sorunun sizin değil, manipülatörün sorunu olduğunu fark etmenizi sağlar.'
    ],
    mistakes: [
      'Sürekli etrafında pervane olup "Neyin var? Ne yaptım? Lütfen konuş" diye yalvarmak.',
      'Sırf o konuşsun diye haklı olduğunuz halde haksızlığı kabul edip özür dilemek.',
      'Onun sessizliğine karşılık bağırarak veya eşya kırarak tepki vermek.'
    ],
    steps: [
      'RADİKAL KABULLENİŞ: Karşı tarafın sizinle iletişimi kestiğini fark ettiğiniz an, onu konuşturmaya çalışmayı derhal bırakın.',
      'OLUMLU ÇERÇEVELEME (Reframing): Onun sessizliğini bir "ceza" olarak değil, size verilmiş bir "huzur ve dinlenme molası" olarak kodlayın.',
      'NORMAL HAYATA DEVAM: Aynı evin veya ofisin içindeyseniz neşeli olun, kahvenizi için, işinize bakın. Onu yok saymayın ama özel bir ilgi de göstermeyin. Günaydın deyin, cevap vermezse umursamadan devam edin.',
      'GÜÇ DENGESİNİ TERSİNE ÇEVİRME: Sessizlik silahı, kurban buna üzüldüğü sürece işe yarar. Sizin gayet mutlu ve normal hayatınıza devam ettiğinizi gördüğünde manipülatörün silahı geri tepecektir.',
      'ŞARTLI İLETİŞİM: Sizinle tekrar konuşmaya başladığında "Nihayet konuştun" demeyin. Hiçbir şey olmamış gibi normal sohbetinize devam edin. Küsmesi ona bir avantaj sağlamamış olur.'
    ],
    tip: '💡 Yetişkin dünyasında sorunlar konuşarak çözülür. Küserek, dudak bükerek ve sessiz kalarak "benimle ilgilen" diyen bir kişi aslında üç yaşındaki bir çocuğun psikolojik gerilemesini (regression) yaşıyordur. Çocuğa taviz verilmez.',
    quiz: {
      q: 'Sizinle küsüp günlerce konuşmayan bir yetişkine karşı en güçlü ve yıkıcı tutum nedir?',
      opts: [
        'Sürekli "Ne yaptım ben sana?" diyerek iletişim kapısını zorlamak.', 
        'Kendi hayatınıza çok mutlu ve normal bir şekilde devam edip onu umursamamak.', 
        'Ona aynı şekilde uzun süre küsmek ve surat asmak.', 
        'Arabulucu bulup arayı düzeltmeye çalışmak.'
      ],
      correct: 1,
      ok: 'Evet! İlgi göstermek manipülatörü besler. Siz normal davrandığınızda sessizlik silahı etkisiz hale gelir ve o konuşmak zorunda kalır.',
      fail: 'Peşinden koşmak veya siz de surat asmak, oyunun bir parçası olduğunuzu ve onun başarılı olduğunu gösterir.'
    },
    scenario: {
      label: 'Görünmez Kalkan',
      text: 'O tartışmadan sonra kapıyı çarptı, yan odaya geçti ve size günlerce soğuk davranmaya başladı. Siz ise panik içinde ne yapacağınızı düşünüyorsunuz.',
      analysis: 'İşte manipülatör tam olarak bu "panik" hissinden beslenir. Gülümserek odadan çıkın, müziğinizi açın ve kendi rutininize dönün. Sessizliğin bir kontrol gücü olmadığını anladığında, iletişime geçmekten başka çaresi kalmayacaktır.'
    },
    practice: 'Birisi size tavır alıp küstüğünde, özür dilemenizi gerektiren mantıklı ve rasyonel bir hata yapmadıysanız, onun sessizliğini tamamen duymazdan gelin ve kendi işinize odaklanın.'
  },
  {
    id: 'm4', cat: 'sinirlar', num: 'M4', badge: 'Sınırlar', badgeCls: 'ret-badge-intermediate',
    title: 'Hayır Deme Sanatı (Broken Record)',
    desc: 'Toplum bize her şeye "Evet" demenin bizi daha çok sevdireceğini öğretir. Oysa herkesin taleplerine evet diyen biri saygı görmez, sadece kullanılır. Suçluluk hissetmeden, zarif ama sarsılmaz bir şekilde sınır çizmek, "Bozuk Plak (Broken Record)" tekniğiyle mümkündür.',
    benefits: [
      'Zamanınızın ve enerjinizin kontrolünü tekrar elinize alırsınız.',
      'Çevrenizdekiler sizin "çantada keklik" olmadığınızı öğrenir ve size daha çok saygı duyar.',
      'Pasif kalıp sonradan öfke patlamaları yaşamaktan kurtulursunuz.'
    ],
    mistakes: [
      'Hayır derken uzun uzun açıklamalar ve bahaneler uydurmak (Karşı tarafa itiraz şansı verir).',
      'Yumuşatmak için "Belki sonra, bakarız, söz vermeyeyim" diyerek açık kapı bırakmak.',
      'Sırf o anki ortam gerilmesin diye "Tamam" demek.'
    ],
    steps: [
      'SADECE HAYIR DE: En güçlü "Hayır", yanında hiçbir bahane barındırmayan hayırdır. "Hayır, teşekkür ederim", "Şu an bu bana uygun değil." gibi basit cümleler kullanın.',
      'MAZERET ÜRETMEYİN: "Çünkü hastayım, çünkü işim var" demeyin. Bir mazeret sunduğunuzda manipülatör anında o mazereti çözmeye odaklanır ("İşine yardım edeyim sonra yaparız").',
      'BOZUK PLAK TEKNİĞİ: Karşı taraf ısrar mı ediyor? Verdiğiniz ilk "Hayır" cevabının kelimelerini dahi değiştirmeden, duygusuz bir ses tonuyla tıpkı bozuk bir plak gibi tekrarlayın.',
      'YANSITMA: "Ama benim sana çok ihtiyacım var!" dediğinde, "Sana ihtiyacım olduğunu anlıyorum (Yansıtma), ama maalesef yardımcı olamayacağım (Bozuk Plak)." deyin.',
      'SESSİZLİK İLE MÜHÜRLE: Cevabınızı verdikten sonra susun. Sessizlik karşı tarafın kabullenmesini hızlandırır.'
    ],
    tip: '💡 Siz "Hayır" diyemediğiniz sürece başkalarının hayatının figüranı olursunuz. Açıklama yapmadan çizilen sınırlar okyanus ortasındaki kayalıklar gibidir; dalgalar çarpar ama kayalık yerinden oynamaz.',
    quiz: {
      q: 'İstemediğiniz bir talebi reddederken aşağıdakilerden hangisi psiko-sosyal açıdan en güçlü "Hayır" deme şeklidir?',
      opts: [
        '"Çok isterdim ama yapamam çünkü bugün şu şu işlerim var..." diyerek açıklamak.', 
        '"Belki başka zaman yaparız, şu an emin değilim" diyerek açık kapı bırakmak.', 
        '"Anlıyorum ama bu teklif bana uygun değil, hayır" diyerek net ve kısa olmak.', 
        '"Tamam yapayım ama sadece bu seferlik" demek.'
      ],
      correct: 2,
      ok: 'Kesinlikle! Açıklama yapmadan net bir şekilde reddetmek en sağlam sınır çizme yöntemidir.',
      fail: 'Bahaneler veya tavizler karşı tarafa sizi ikna etme ve sömürmeye devam etme şansı verir.'
    },
    scenario: {
      label: 'Israr Yönetimi',
      text: 'Arkadaşınız borç para istiyor, veremeyeceğinizi söylediniz ama "Kardeşimsin, çok sıkıştım n\'olur hallet" diye ısrar etmeye devam ediyor.',
      analysis: 'Bozuk plak burada devreye girer. 1. Aşama: "Kötü durumda olduğunu anlıyorum ama sana borç veremem." 2. Aşama (Israr gelirse): Ses tonu değişmeden: "Üzgünüm ama sana borç veremem." 3. Aşama: "Sana borç veremeyeceğimi söyledim, bu konuyu kapatalım." Net sınır çekilmelidir.'
    },
    practice: 'Bugün size önerilen, istemediğiniz küçük bir şeye (örneğin bir içecek teklifine veya bir form doldurmaya) mazeret uydurmadan sadece gülümseyerek "Hayır, teşekkür ederim" deyin ve sessiz kalın.'
  }
];
