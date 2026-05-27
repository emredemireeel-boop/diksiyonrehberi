module.exports = [
  // ════ YÜZ VE MİKROMİMİKLER ════
  {
    id: 'b1', cat: 'yuz', num: 'Y1', badge: 'Temel', badgeCls: 'ret-badge-beginner',
    title: 'Göz Teması Sanatı',
    desc: 'Bilinçli göz teması, güven inşa etmenin en hızlı yoludur. Çok azı güvensizlik, çok fazlası ise tehdit algısı yaratır.',
    steps: [
      'Konuşurken zamanın %60-70 inde karşınızdakinin gözlerine bakın.',
      'Göz temasını koparırken aşağıya değil, yatay olarak sağa veya sola doğru bakın.',
      'Karşınızdaki kişi konuşurken, dinlediğinizi belli etmek için hafifçe gözlerinizi kısarak odaklanın.'
    ],
    quiz: {
      q: 'Bir iş görüşmesinde "Düşünürken" nereye bakmak daha profesyonel bir imaj çizer?',
      opts: ['Yere doğru', 'Karşı tarafın alnına', 'Hafifçe yukarı veya sağa/sola', 'Ellere'],
      correct: 2,
      ok: 'Kesinlikle! Yukarı veya yana bakmak bilişsel bir süreçte olduğunuzu (düşündüğünüzü) gösterir.',
      fail: 'Yere veya ellere bakmak özgüven eksikliği ve utangaçlık olarak yorumlanabilir.'
    },
    scenario: {
      label: 'Araştırma',
      text: 'Stanford Üniversitesi araştırmalarına göre gözlerini kaçırarak konuşan liderler, söyledikleri doğru olsa bile daha az ikna edici bulunmuştur.',
      analysis: 'İnsan beyni, göz temasını kaçırmayı "saklanan bir bilgi" evrimi olarak kodlamıştır.'
    },
    practice: 'Bir sonraki konuşmanızda, cümleye başlarken mutlaka göz teması kurun ve cümleyi bitirdiğiniz an göz temasını koruyun.'
  },
  {
    id: 'b2', cat: 'yuz', num: 'Y2', badge: 'Orta', badgeCls: 'ret-badge-intermediate',
    title: 'Gerçek Gülümseme (Duchenne)',
    desc: 'Sahte gülümseme ile gerçek gülümseme arasındaki fark beynimiz tarafından saniyenin onda biri sürede fark edilir.',
    steps: [
      'Gülümserken sadece dudak kaslarınızı değil, göz kenarındaki (kaz ayağı) kasları da kullanın.',
      'Gerçek gülümseme yavaşça belirir ve yavaşça silinir. Aniden ortaya çıkan gülümseme sahtedir.',
      'İçten hissetmiyorsanız, komik veya mutlu bir anınızı saniyeler içinde zihninizde canlandırın.'
    ],
    quiz: {
      q: 'Fotoğraflarda "sahte" çıkmanızın temel fiziksel nedeni nedir?',
      opts: ['Dişlerin görünmemesi', 'Göz çevresindeki kasların (orbicularis oculi) kasılmaması', 'Kafanın eğik olması', 'Ağzın çok açık olması'],
      correct: 1,
      ok: 'Doğru! Göz kasları istemsiz çalışır. Sadece dudaklarla gülmek beynimize "yapay" sinyali gönderir.',
      fail: 'Dişlerin görünmesi veya kafa eğikliği ikincil faktörlerdir. Temel fark göz çevresi kaslarıdır.'
    },
    scenario: {
      label: 'Analiz',
      text: 'Müşteri hizmetleri temsilcisi size kocaman bir dudak gülümsemesiyle bakıyor ama gözleri tamamen donuk.',
      analysis: 'Bu durum "duygusal emek" (emotional labor) göstergesidir. Samimi bağ kurmak için gözlerin de gülmesi şarttır.'
    },
    practice: 'Aynada "Duchenne" gülümsemesini (göz kenarlarını kırıştırarak) 5 kez bilinçli olarak deneyin.'
  },

  // ════ EL VE KOL JESTLERİ ════
  {
    id: 'e1', cat: 'eller', num: 'E1', badge: 'Temel', badgeCls: 'ret-badge-beginner',
    title: 'Açık Avuç Kuralı',
    desc: 'Avuç içlerini göstermek, tarihsel olarak "silahsızım ve dürüstüm" mesajı verir.',
    steps: [
      'Konuşurken avuç içlerinizi hafifçe yukarı bakacak şekilde (yaklaşık 45 derece) açık tutun.',
      'Birini veya bir yönü işaret ederken asla işaret parmağınızı kullanmayın; açık avuçla gösterin.',
      'Ellerinizi cebe sokmak yerine bel hizasında (power box) görünür şekilde tutun.'
    ],
    quiz: {
      q: 'Dinleyicilere bir yeri gösterirken işaret parmağı kullanmak nasıl algılanır?',
      opts: ['Otoriter ve net', 'Suçlayıcı ve agresif', 'Bilgilendirici', 'Samimi'],
      correct: 1,
      ok: 'Evet! İşaret parmağı evrimsel olarak bir "silah" (mızrak/sopa) dürtüsünü tetikler ve savunmaya geçirir.',
      fail: 'Siz net olduğunuzu düşünseniz de karşı taraf bunu agresif bir saldırı olarak kodlar.'
    },
    scenario: {
      label: 'Disney Kuralı',
      text: 'Tüm Disney tema parkı çalışanları, bir yeri gösterirken asla tek parmak kullanmazlar; daima "Disney Point" (iki parmak veya açık el) yaparlar.',
      analysis: 'Açık el veya iki parmak, işaret etmenin agresif doğasını tamamen nötralize eder ve misafirperverlik sunar.'
    },
    practice: 'Bugün birine yol tarif ederken veya bir nesneyi gösterirken bilinçli olarak açık avuç içinizi kullanın.'
  },

  // ════ POSTÜR (DURUŞ) ════
  {
    id: 'd1', cat: 'durus', num: 'D1', badge: 'İleri', badgeCls: 'ret-badge-advanced',
    title: 'Genişleme (Power Posing)',
    desc: 'Vücudunuzun kapladığı alanı genişletmek, sadece dışarıya otorite mesajı vermekle kalmaz, içsel testosteron seviyenizi artırıp kortizolü düşürür.',
    steps: [
      'Otururken: Omuzlarınızı geriye atın, kollarınızı masanın üzerine veya sandalyenin kolçaklarına genişçe yayın.',
      'Ayaktayken: Ayaklarınızı omuz genişliğinde açın, ağırlığınızı iki bacağınıza eşit dağıtın.',
      'Boynunuzu görünür kılın (çeneyi hafif yukarı kaldırın). Boynu saklamak evrimsel bir korku refleksidir.'
    ],
    quiz: {
      q: 'Zorlu bir toplantıdan 2 dakika önce tuvalette uygulanabilecek en iyi postür hazırlığı nedir?',
      opts: ['Kambur durup telefona bakmak', 'Elleri belde tutup (Wonder Woman pozu) dik durmak', 'Başı öne eğip dua etmek', 'Sürekli volta atmak'],
      correct: 1,
      ok: 'Mükemmel! Amy Cuddy araştırmalarına göre bu poz sadece 2 dakikada özgüven hormonlarını artırır.',
      fail: 'Kapanmak veya volta atmak stres hormonlarını artırır.'
    },
    scenario: {
      label: 'Biyolojik Gerçek',
      text: 'Doğada kazanan hayvanlar bedenlerini olabildiğince büyütür (kabarır), kaybedenler ise küçülüp kapanır.',
      analysis: 'İnsanlarda da omuzları düşürüp kolları kavuşturmak (küçülmek) beyne "tehlikedeyim/kaybettim" mesajı gönderir.'
    },
    practice: 'Stresli bir görüşme öncesi yalnız kaldığınız bir ortamda 120 saniye boyunca Güç Pozu verin.'
  },

  // ════ ALAN VE MESAFE ════
  {
    id: 'm1', cat: 'mesafe', num: 'M1', badge: 'Orta', badgeCls: 'ret-badge-intermediate',
    title: 'Proksemik (Mesafe Yönetimi)',
    desc: 'Kişilerarası fiziki mesafeyi doğru ayarlamak, karşınızdaki kişinin rahat hissetmesi için kritik öneme sahiptir.',
    steps: [
      'Mahrem Alan (0-45 cm): Sadece aile ve çok yakınlar. İş ortamında asla girilmemelidir.',
      'Kişisel Alan (45-120 cm): İkili sohbetler ve networking için ideal mesafedir.',
      'Sosyal Alan (1.2-3.5 m): İş toplantıları ve resmi görüşmeler için kullanılır.',
      'Birisi size doğru konuşurken geriye doğru adım atıyorsa, kişisel alanını ihlal etmişsinizdir; durun.'
    ],
    quiz: {
      q: 'Asansör gibi dar ve kaçınılmaz olarak "mahrem alana" girilen yerlerde insanların içgüdüsel tepkisi ne olur?',
      opts: ['Daha çok konuşmak', 'Göz temasından kaçınıp yukarı (kat numaralarına) bakmak', 'Sürekli el sıkışmak', 'Hızlı nefes almak'],
      correct: 1,
      ok: 'Harika gözlem! Fiziksel mesafeyi koruyamadığımızda, psikolojik mesafe yaratmak için göz temasını keseriz.',
      fail: 'Asansörlerde insanlar konuşmaktan veya temas etmekten kaçınırlar.'
    },
    scenario: {
      label: 'Gözlem',
      text: 'Yeni tanıştığınız birine doğru heyecanla bir adım attınız, o ise anında yarım adım geriledi.',
      analysis: 'Hemen bir adım geri atıp eski mesafenize dönün. Beyni o an sizi bir "tehdit" olarak algıladı.'
    },
    practice: 'İnsanlarla konuşurken aranızdaki "hayali balonu" (yaklaşık 1 kol mesafesi) korumaya özen gösterin.'
  }
];
