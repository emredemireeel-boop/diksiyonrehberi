module.exports = [
  {
    id: 'm1', cat: 'psikolojik', num: 'M1', badge: 'Şiddet', badgeCls: 'ret-badge-advanced',
    title: 'Gaslighting',
    desc: 'Gerçeklik algınızı bozmaya çalışan toksik kişileri tanıma ve durdurma yolları.',
    steps: [
      'Karşı taraf "Ben öyle bir şey demedim, sen uyduruyorsun" dediğinde kendi hafızanızdan şüphe etmeyin.',
      'Sizi delirmekle suçladıklarında konuyu uzatmayın ve tartışmaya girmeyin.',
      'Kendi gerçekliğinize güvenin ve durumu belgeleyin.'
    ],
    quiz: {
      q: 'Birisi size sürekli "Sen çok hassassın, abartıyorsun" diyorsa bu hangi taktik olabilir?',
      opts: ['Empati kurma', 'Gaslighting', 'Yapıcı eleştiri', 'Açık iletişim'],
      correct: 1,
      ok: 'Kesinlikle! Duygularınızı geçersiz kılmak Gaslighting taktiğinin en temel adımıdır.',
      fail: 'Bu bir manipülasyon taktiğidir, duygularınızı değersizleştirir.'
    },
    scenario: {
      label: 'Savunma',
      text: '"Bana bunu söylemediğine çok eminsin ama ben ne duyduğumu biliyorum. Bu konuyu tartışmayacağım." deyin.',
      analysis: 'Net bir sınır çizerseniz manipülatör gerçekliğinizi bozamaz.'
    },
    practice: 'Sizi "hassas" olmakla suçlayan birine haklı olduğunuzu kanıtlamaya çalışmak yerine sadece "Bu benim doğrum" diyerek konuyu kapatın.'
  },
  {
    id: 'm2', cat: 'duygusal', num: 'M2', badge: 'Duygusal', badgeCls: 'ret-badge-intermediate',
    title: 'Suçluluk Tripi (Guilt Tripping)',
    desc: 'Duygusal şantaj yoluyla size istemediğiniz şeyleri yaptıran kişilere sınır çizmek.',
    steps: [
      'Size acındırarak veya fedakarlıklarını öne sürerek bir şey istemelerine karşı hazırlıklı olun.',
      'Empati kurun ama "Hayır" kararınızdan taviz vermeyin.',
      'Kendi seçimlerinin sorumluluğunu onlara iade edin.'
    ],
    quiz: {
      q: 'Bir kişi "Senin için o kadar fedakarlık yaptım, sen bana bunu çok görüyorsun" dediğinde en doğru yanıt nedir?',
      opts: ['Peki tamam, istediğini yapacağım', 'Senin de canın cehenneme!', 'Yaptıkların için teşekkür ederim ama bu konuda kararım değişmeyecek', 'Sana borcumu ödeyeceğim'],
      correct: 2,
      ok: 'Harika. Geçmişteki iyilikler şantaj aracı olamaz.',
      fail: 'Taviz verirseniz bu şantajı her zaman kullanırlar.'
    },
    scenario: {
      label: 'Sınır',
      text: 'Birisinin üzülmesi, sizin onlara "Hayır" deme hakkınızı elinizden almaz.',
      analysis: 'İlişkilerde sağlıklı sınırlar suçluluk hissetmeden çizilmelidir.'
    },
    practice: 'Bugün istemediğiniz küçük bir talebe sadece "Üzgünüm, şu an yapamam" deyin ve açıklama yapmayın.'
  },
  {
    id: 'm3', cat: 'pasif', num: 'M3', badge: 'Pasif Agresif', badgeCls: 'ret-badge-beginner',
    title: 'Sessizlik Terapisi (Silent Treatment)',
    desc: 'İletişimi tamamen keserek sizi cezalandırmaya çalışan manipülatöre karşı taktikler.',
    steps: [
      'Neden konuşmadığını sormayın ve peşinden koşmayın.',
      'Sessizliğini bir ceza olarak değil, kendi problemini çözememesi olarak görün.',
      'Hayatınıza normal şekilde devam edin, onu ödüllendirmeyin.'
    ],
    quiz: {
      q: 'Sizinle küsüp konuşmayan bir yetişkine karşı en iyi tutum nedir?',
      opts: ['Sürekli "Neyin var, ne yaptım?" diye sormak', 'Kendi hayatınıza normal devam etmek', 'Onunla daha yüksek sesle kavga etmek', 'Ona hediyeler almak'],
      correct: 1,
      ok: 'Evet! İlgi göstermek manipülatörü besler. Normal davranmak bu silahı elinden alır.',
      fail: 'Peşinden koşmak bu davranışın işe yaradığını gösterir.'
    },
    scenario: {
      label: 'Tepki',
      text: 'O konuşmamaya başladığında, panikleyip kendinizi sorgulamayın. Gülümserek odadan çıkın.',
      analysis: 'Sessizliğin bir güç olmadığını anladığında, iletişime geçmek zorunda kalacaktır.'
    },
    practice: 'Biri sizinle küstüğünde, özür dileyecek bir şey yapmadıysanız sadece işinize bakın.'
  }
];
