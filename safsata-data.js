module.exports = [
  // ────────────────────────────────────────────────────────
  // BÖLÜM 1: TEMEL TEORİ (DERİN İNCELEME)
  // ────────────────────────────────────────────────────────
  {
    id: 's1', cat: 'temel', icon: '🧠', num: 'S1', badge: 'Derin İnceleme', badgeCls: 'ret-badge-beginner',
    type: 'article',
    title: 'Safsata (Logical Fallacy) Nedir?',
    desc: 'Bizi kandırmak için kullanılan zihinsel illüzyonlar. Mantıklı görünen ama aslında hatalı, manipülatif argüman kalıpları.',
    content: [
      {
        sub: 'Beynimizin Kısa Yolları (Heuristics)',
        text: 'İnsan beyni sürekli enerji tasarrufu yapmaya çalışır. Her bilgiyi derinlemesine analiz etmek yerine, hızlı karar vermemizi sağlayan kısa yollar (heuristics) kullanır. Safsatalar, tam olarak beynimizin bu "tembellik" açıklarını hackleyen sözlü virüslerdir.'
      },
      {
        sub: 'Neden Safsata Öğrenmeliyiz?',
        list: [
          '<strong>Savunma:</strong> Reklamcıların, politikacıların ve manipülatif insanların sizi yanlış kararlara yönlendirmesini engeller.',
          '<strong>Eleştirel Düşünme:</strong> Kendi inançlarınızı sorgulamanızı ve sadece "kulağa hoş geldiği" için yanlış fikirlere saplanmamanızı sağlar.',
          '<strong>İletişim Kalitesi:</strong> Tartışmalarda konudan sapmadan, kişisel kavgalara girmeden, rasyonel ve yapıcı bir çizgide kalmanıza yardımcı olur.'
        ]
      }
    ],
    takeaways: [
      'Safsata yapan kişi her zaman kötü niyetli olmayabilir; kendi beyninin kısa yoluna kurban gitmiş de olabilir.',
      'Bir argümanın sonucunun doğru olması, o argümanın mantıklı olduğu (safsata içermediği) anlamına gelmez.',
      'Saldırgan bir safsataya, başka bir safsata ile karşılık vermek her zaman kaybettirir.'
    ]
  },

  // ────────────────────────────────────────────────────────
  // BÖLÜM 2: SAFSATA DEDEKTİFİ (İNTERAKTİF)
  // ────────────────────────────────────────────────────────
  {
    id: 's2', cat: 'dedektif', icon: '🕵️', num: 'S2', badge: 'Dedektif', badgeCls: 'ret-badge-advanced',
    type: 'detective',
    title: 'Vaka #01: Haber Bülteni Çatışması',
    desc: 'Bir televizyon tartışmasında konuşmacıların argümanları arasına gizlenmiş safsatayı bulun. İpuçlarını takip edin.',
    detectiveContext: 'Konu: Küresel Isınma ve Karbon Salınımı',
    dialogue: [
      { speaker: 'Bilim İnsanı', text: 'Veriler gösteriyor ki, fosil yakıt tüketimini önümüzdeki 10 yıl içinde %30 azaltmazsak geri dönülemez bir eşiği geçeceğiz.' },
      { speaker: 'Sanayici', text: 'Senin tuzun kuru tabii! Üniversitedeki rahat odandan konuşmak kolay. İnsanları işsiz bırakıp hepimizi mağaralara geri döndürmek istiyorsunuz!' }
    ],
    question: 'Sanayicinin cevabında kullanılan <u>ana mantık hatası</u> (safsata) eşleşmesi aşağıdakilerden hangisidir?',
    options: [
      { id: 'opt1', text: 'Sadece Ad Hominem (Kişi Karalama)', isCorrect: false, feedback: 'Eksik! Sanayici, "rahat odan" diyerek Ad Hominem yapıyor evet ama asıl argümanı çarpıtma kısmı çok daha büyük bir safsatayı barındırıyor.' },
      { id: 'opt2', text: 'Saman Adam (Strawman) + Ad Hominem', isCorrect: true, feedback: 'Mükemmel Tespit! Sanayici hem kişiye saldırıyor (Ad Hominem) hem de bilim insanının %30 azaltma önerisini "hepimizi mağaralara döndürmek" gibi aşırı ve uydurma bir hedefe (Saman Adam) dönüştürerek asıl konudan kaçıyor.' },
      { id: 'opt3', text: 'Otoriteye Başvurma (Ad Verecundiam)', isCorrect: false, feedback: 'Yanlış. Sanayici herhangi bir sahte otoriteyi veya uzmanı kaynak göstermemiştir.' }
    ]
  },
  {
    id: 's3', cat: 'dedektif', icon: '🕵️', num: 'S3', badge: 'Dedektif', badgeCls: 'ret-badge-advanced',
    type: 'detective',
    title: 'Vaka #02: Sosyal Medya Linci',
    desc: 'Twitter\'daki sıradan bir diyalog. İnsanların popüler inançları nasıl bir silah gibi kullandığını deşifre edin.',
    detectiveContext: 'Konu: Sağlıklı Beslenme ve Yeni Bir Diyet Uygulaması',
    dialogue: [
      { speaker: 'Kullanıcı_A', text: 'Bu yeni X diyetinin böbreklere zarar verdiğine dair 3 yeni klinik araştırma yayınlandı. Dikkatli olmalıyız.' },
      { speaker: 'Influencer_B', text: 'Benim 2 milyon takipçim var ve yüz binlerce insan bu diyeti uygulayarak zayıfladı. Herkes bunu yapıyorsa ve memnunsak, o araştırmalar saçmalıktan ibarettir.' }
    ],
    question: 'Influencer_B\'nin argümanını çürüten safsata türü nedir?',
    options: [
      { id: 'o1', text: 'Siyah Beyaz Safsatası (False Dilemma)', isCorrect: false, feedback: 'Yanlış. Burada "Ya diyet ya ölüm" gibi ikili bir kısıtlama yapılmıyor.' },
      { id: 'o2', text: 'Çoğunluğa Başvurma (Ad Populum)', isCorrect: true, feedback: 'Tebrikler! Bir şeyin çok kişi tarafından yapılması (yüz binlerce insanın uygulaması) o şeyin biyolojik veya bilimsel olarak doğru olduğunu kanıtlamaz. Bu klasik bir "Bandwagon" (Sürü psikolojisi) safsatasıdır.' },
      { id: 'o3', text: 'Kaygan Zemin (Slippery Slope)', isCorrect: false, feedback: 'Yanlış. Kaygan zemin, "Bunu yaparsak sonumuz felaket olur" şeklinde abartılı bir domino etkisini savunur, burada böyle bir iddia yok.' }
    ]
  },

  // ────────────────────────────────────────────────────────
  // BÖLÜM 3: ÇÜRÜTME LABORATUVARI (DEBUNKER)
  // ────────────────────────────────────────────────────────
  {
    id: 's4', cat: 'curutme', icon: '🛡️', num: 'S4', badge: 'Simülatör', badgeCls: 'ret-badge-master',
    type: 'debunker',
    title: 'Proje Toplantısı Krizi',
    desc: 'Profesyonel bir ortamda size yöneltilen saldırgan ve mantıksız bir argümanı ustalıkla savuşturun.',
    debunkerContext: 'Şirket yönetim kuruluna yeni dijitalleşme projenizin maliyet raporunu sunuyorsunuz. Projenin bütçesi biraz yüksek.',
    villainText: 'Bu projeyi savunduğunu biliyorum ama sen geçen yılki projede de bütçeyi aşmıştın. Üstelik bu dijitalleşme işine girersek yarın tüm departmanlar robotlaşacak ve hepimiz işsiz kalacağız. Senin maliyet hesaplarına nasıl güvenelim?',
    steps: [
      {
        question: 'Rakibiniz hem Red Herring (Konuyu saptırma) hem de Kaygan Zemin (Slippery Slope) safsatası yaptı. Nasıl yanıt vereceksiniz?',
        options: [
          { 
            text: 'Sen de 2 yıl önce sunum yaparken terden sırılsıklam olup verileri unutmuştun, bana işimi sen mi öğreteceksin?', 
            score: 0, 
            feedback: 'Kritik Hata: Karşı Ad Hominem (Tu Quoque). Tartışmayı profesyonel zeminden çıkarıp mahalle kavgasına çevirdiniz. Jüri (yönetim kurulu) gözünde güvenilirliğinizi sıfırladınız.' 
          },
          { 
            text: 'Geçen yılki bütçe aşımının sebebi piyasadaki çip kriziydi, benim hatam değildi. Ayrıca robotlaşma hemen olacak bir şey değil.', 
            score: 4, 
            feedback: 'Tuzak: Savunma pozisyonu. Rakibin sizi asıl konudan (yeni proje bütçesi) koparıp geçmişi ve distopik hayalleri tartıştırma tuzağına düştünüz. Kontrolü kaybettiniz.' 
          },
          { 
            text: 'Geçen yılın raporunu ayrı bir oturumda memnuniyetle tartışırım. Ayrıca bu proje bir robotlaşma değil, sadece bir yazılım güncellemesidir. Şimdi asıl konumuza, bu projenin yatırım getiri (ROI) verilerine geri dönelim.', 
            score: 10, 
            feedback: 'Mükemmel Çürütme! Geçmişi reddetmediniz ama konuyu böldünüz (Sınır Çizme). Kaygan zemin abartısını tek cümleyle patlattınız ve tartışmayı zorla mantık eksenine (Logos) çektiniz.' 
          }
        ]
      }
    ]
  },
  {
    id: 's5', cat: 'curutme', icon: '🛡️', num: 'S5', badge: 'Simülatör', badgeCls: 'ret-badge-master',
    type: 'debunker',
    title: 'Ahlaki İkilem (False Dilemma)',
    desc: 'Sizi sadece iki seçenek varmış gibi köşeye sıkıştıran bir manipülatöre karşı zekanızı kullanın.',
    debunkerContext: 'Bir sivil toplum kuruluşunda bütçe tartışması.',
    villainText: 'Eğer bu bağış bütçesinin tamamını yeni ofis binamıza ayırmazsak, derneğimiz saygınlığını yitirecek ve kapanıp gideceğiz. Başka çaremiz yok!',
    steps: [
      {
        question: 'Buradaki "Siyah/Beyaz" (False Dilemma) safsatasını nasıl etkisiz hale getirirsiniz?',
        options: [
          { 
            text: 'Binaya yatırım yapmasak bile hemen kapanmayız, abartıyorsun.', 
            score: 5, 
            feedback: 'İdare Eder: Abartıyı belirttiniz ama alternatif bir vizyon sunmadığınız için rakibin çerçevesi içinde kaldınız.' 
          },
          { 
            text: 'Sadece iki seçenek yok. Bütçenin %30\'u ile ofisin kritik tadilatlarını yapıp, kalanını asıl yardım faaliyetlerimize ayırarak saygınlığımızı eylemlerimizle artırabiliriz.', 
            score: 10, 
            feedback: 'Harika! Üçüncü Yolu Gösterme: Sahte ikilemi (False Dilemma) kırmanın tek yolu, gizlenen diğer mantıklı seçenekleri masaya koymaktır.' 
          },
          { 
            text: 'Senin tek derdin lüks bir ofiste oturmak, derneği falan düşündüğün yok!', 
            score: 0, 
            feedback: 'Niyet Okuma (Ad Hominem). Rakibin gizli niyeti bu olsa bile bunu kanıtlayamazsınız. Yönetim kurulunda itici görünmenize sebep olur.' 
          }
        ]
      }
    ]
  }
];