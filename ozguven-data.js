module.exports = [
  {
    id: 'o1', cat: 'zihin', num: '01', badge: 'Psikoloji', badgeCls: 'ret-badge-advanced',
    title: 'Mükemmeliyetçilik Tuzağı',
    desc: 'Topluluk önünde veya ikili iletişimde hata yapmaktan korkmak, özgüvenin en büyük düşmanıdır. Kusursuzluk değil, sahicilik bağ kurar.',
    steps: [
      'Konuşurken tekleyeceğinizi, yanlış kelime seçeceğinizi veya unutacağınızı peşinen kabul edin. Mükemmel bir robot değil, insansınız.',
      'Hata yaptığınızda özür dilemeyin ("pardon", "affedersiniz" demek yerine) hafifçe gülümseyip cümleye baştan başlayın.',
      'Dinleyiciler sizin hatalarınızı yakalamak için değil, onlara değer katmanız için oradadırlar. Hatalar sizi daha "ulaşılabilir" ve samimi kılar.',
      'Zihinsel odağınızı "Nasıl görünüyorum?" sorusundan "Onlara ne veriyorum?" sorusuna kaydırın.'
    ],
    quiz: {
      q: 'Önemli bir sunum sırasında heyecanlanıp cümlenizin ortasında kelimeyi unuttunuz. Özgüvenli bir duruş için en doğru tepki nedir?',
      opts: ['"Çok özür dilerim, heyecanıma verin" diyerek durumu açıklamak.', 'Gülümseyip 2-3 saniye es vermek, suyu yudumlamak ve kaldığınız yerden sakince devam etmek.', 'Unuttuğunuzu belli etmemek için hızlıca ve panikle alakasız şeyler söylemek.', 'Slaytları hızlı hızlı geçmek.'],
      correct: 1,
      ok: 'Harika! Sessizlik bir hata değildir. Su içmek veya es vermek durumu kontrol ettiğinizi, paniklemediğinizi gösterir.',
      fail: 'Yanlış. Sürekli özür dilemek dinleyicide acıma veya güvensizlik hissi uyandırır. Panik yapmak ise otoritenizi sarsar.'
    },
    scenario: {
      label: 'İçsel Analiz',
      text: 'Sahneye çıkmadan önce kalbiniz çarpıyor ve "Ya rezil olursam?" diye düşünüyorsunuz.',
      analysis: 'İmposter (Sahtekar) Sendromu. Bu his amatörlük değil, insani bir biyolojidir. Bedeniniz tehlike anındaki gibi adrenalin salgılar. O an kendinize şunu söyleyin: "Bedenim şu an harika bir performans sergilemem için bana enerji pompalıyor."'
    },
    practice: 'Bugün bir sohbet sırasında bilerek küçük bir kelime hatası yapın ve hiç tepki vermeden (özür dilemeden) cümleye devam edin. İnsanların bunu fark etmediğini, etseler bile umursamadıklarını göreceksiniz.'
  },
  {
    id: 'o2', cat: 'zihin', num: '02', badge: 'Kontrol', badgeCls: 'ret-badge-master',
    title: 'Sessizliğin Gücü (Es Verme)',
    desc: 'Güvensiz insanlar boşlukları "eee", "ııı" sesleriyle veya hızlı konuşarak doldurmaya çalışır. Otorite ve özgüven, sessizlikte yatar.',
    steps: [
      'Vurgulamak istediğiniz en önemli cümleyi söylemeden hemen ÖNCE ve söyledikten hemen SONRA 2 saniye es verin.',
      'Soru sorulduğunda anında cevap vermek zorunda hissetmeyin. 3 saniye durun, göz teması kurun ve öyle konuşmaya başlayın.',
      '"Eee", "Yani", "Şey" gibi dolgu kelimeleri aklınıza geldiğinde, bunun yerine fiziksel olarak ağzınızı kapatın ve yutkunun.',
      'Sessizlik dinleyicinin beynine "Söylediklerim önemli, sindirmeni bekliyorum" mesajı gönderir.'
    ],
    quiz: {
      q: 'Zor bir soruyla karşılaştınız ve cevabı düşünmeniz gerekiyor. En alfa / özgüvenli tepki nedir?',
      opts: ['"Eee, kem küm, yani aslında..." diyerek zaman kazanmak.', 'Gözleri kaçırarak yere bakıp düşünmek.', 'Göz teması kurarak 3 saniye tam sessizlikte kalmak, ardından net bir sesle konuşmaya başlamak.', 'Hemen aklınıza gelen ilk şeyi söylemek.'],
      correct: 2,
      ok: 'Mükemmel! Sessizlik zayıflık değil, yüksek statü (high status) göstergesidir.',
      fail: 'Yanlış. "Eee" gibi dolgu kelimeleri beyninizin paniklediğini gösterir. Yüksek statülü insanlar sessizliği bir silah gibi kullanır.'
    },
    scenario: {
      label: 'Statü Çatışması',
      text: 'Toplantıda yöneticiniz veya dominant biri sözünüzü kesmeye çalışıyor.',
      analysis: 'Sözünüz kesildiğinde sesinizi yükselterek yarışmak yerine, aniden susun ve o kişiye doğru sabit bir şekilde bakın. O kişi konuşmasını bitirdiğinde 2 saniye bekleyin ve "Dediğim gibi..." diyerek normal ses tonunuzla devam edin. Sessizliğiniz ona sınır çizecektir.'
    },
    practice: 'Bir sonraki telefon görüşmenizde, karşı taraf cümlesini bitirdiğinde cevap vermeden önce içinizden "Bir, iki" diye sayın ve sessizliği deneyimleyin.'
  },
  {
    id: 'o3', cat: 'zihin', num: '03', badge: 'Temel', badgeCls: 'ret-badge-beginner',
    title: 'Dıştan İçe Özgüven İnşası',
    desc: 'Sadece zihninizle özgüvenli hissedemezsiniz. Biyolojiniz ve vücut diliniz beyninize sinyal gönderir.',
    steps: [
      'Dik duruş (Chest out, shoulders back): Göğüs kafesini açmak testosteron (özgüven hormonu) seviyesini artırır, kortizolü (stres) düşürür.',
      'Göz hizası: Yürürken veya konuşurken çeneniz yere paralel olsun. Aşağı bakmak boyun eğme (submissive) sinyalidir.',
      'Alan kaplayın: Otururken kollarınızı kavuşturup küçülmeyin. Dirseklerinizi kolçağa koyarak veya bacak bacak üstüne atarak fiziksel alanınızı genişletin.',
      'Yavaş hareket edin: Hızlı ve telaşlı el hareketleri av (prey) psikolojisidir. Yavaş ve kontrollü hareketler avcı (predator / güvende) psikolojisidir.'
    ],
    quiz: {
      q: 'Sosyal bir ortama girdiniz ve kendinizi çok gergin hissediyorsunuz. Biyolojik olarak beyninizi "güvendeyim" moduna geçirmenin ilk adımı nedir?',
      opts: ['Kollarınızı kavuşturup köşede durmak.', 'Telefonla oynayarak meşgul görünmek.', 'Derin bir nefes alıp, omuzları geriye atarak göğüs kafesini açmak.', 'İnsanlara hızlı hızlı selam vermek.'],
      correct: 2,
      ok: 'Doğru! Beden dili sadece dışarıya değil, içeriye de mesaj verir. Açık ve dik bir beden beynin stres hormonlarını durdurmasını sağlar.',
      fail: 'Yanlış. Kapanmak veya telefonla oynamak beyninize "tehlikedeyim, saklanmalıyım" mesajını pekiştirir ve stresinizi daha da artırır.'
    },
    scenario: {
      label: 'Fiziksel Reaksiyon',
      text: 'Gergin olduğunuzda ellerinizi nereye koyacağınızı bilemiyorsunuz, parmaklarınızla oynuyorsunuz.',
      analysis: 'Buna "Pacifying" (Kendini yatıştırma) hareketleri denir. Boyna dokunmak, yüzü kaşımak veya elleri ovuşturmak beynin stres atma yöntemidir. Bunun yerine "Steeple" (Çatı) duruşu yaparak (parmak uçlarını birbirine değdirerek) ellerinizi sabit ve otoriter bir pozisyona kilitleyin.'
    },
    practice: 'Aynanın karşısına geçin. Önce omuzlarınızı düşürüp yere bakın (Nasıl hissediyorsunuz?). Sonra omuzlarınızı geriye atıp göğsünüzü açın ve dümdüz ileri bakın (Şimdi nasıl hissediyorsunuz?). Beden zihni yönetir.'
  }
];