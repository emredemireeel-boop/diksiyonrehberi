const fs = require('fs');

const saglikExercises = [
  {
    id: 141, slug: 'ses-teli-anatomisi', cat: 'saglik', emoji: '🧬', title: 'Ses Teli Anatomisi ve Fizyolojisi',
    dur: '10 dk', level: 'Başlangıç', freq: 'Bir kez',
    desc: 'Ses tellerinin (Vokal kordlar) gırtlak (larinks) içindeki yapısı ve titreşim mekanizmasını anlayarak, sese zarar veren hareketlerden kaçınma bilinci oluşturma.',
    benefits: ['Sesin nasıl üretildiğini mantıksal olarak kavrama', 'Yanlış teknikle bağırırken bedene verilen zararı somutlaştırma', 'Sesi "gözle görülmeyen" bir kavram olmaktan çıkarıp fiziksel bir organ olarak tanıma'],
    mistakes: ['Ses tellerini bir "tel" veya "ip" sanmak (aslında onlar kastan ve zardan oluşan V şeklindeki dudaklardır)'],
    phrase: null,
    steps: [
      'Gırtlağınızdaki Adem elması (tiroid kıkırdağı) bölgesine dokunun.',
      'Yutkunurken bu kıkırdağın nasıl yukarı aşağı hareket ettiğini hissedin.',
      'Sessizce nefes alıp verirken ses tellerinizin V şeklinde tamamen açık olduğunu, "A" dediğinizde ise kapanıp titreştiğini hayal edin.',
      'Sert bir öksürükte veya boğaz temizlemede bu iki dokunun birbirine ne kadar şiddetli çarptığını idrak edin.'
    ],
    variations: [
      '🔄 Titreşim Testi: Elinizi gırtlağınıza koyun ve fısıltıyla "Şşş" deyin (titreşim yok). Ardından sesli "Zzz" deyin (titreşimi hissedin). Bu size ses tellerinin ne zaman devrede olduğunu gösterir.'
    ],
    tip: '💡 Ses telleriniz serçe parmağınızın tırnağı kadar küçüktür (erkeklerde 1.5-2 cm, kadınlarda 1-1.5 cm) ve saniyede 100 ile 1000 kez arası titreşirler. Bu kadar küçük ve çok çalışan bir organ devasa bir bakımı hak eder.',
    related: [145, 149]
  },
  {
    id: 142, slug: 'hidrasyon-ses-sagligi', cat: 'saglik', emoji: '💧', title: 'Hidrasyon ve Ses Sağlığı',
    dur: 'Gün Boyu', level: 'Başlangıç', freq: 'Her gün',
    desc: 'Sistemik ve yüzeysel hidrasyonun (su tüketiminin) ses tellerini kaplayan koruyucu mukoza üzerindeki hayati etkisinin kavranması ve uygulanması.',
    benefits: ['Ses tellerinin sürtünmeye bağlı tahriş olmasını (nodül/polip) engeller', 'Ses kısıklığını önler', 'Konuşurken boğazda oluşan "gıcık" hissini ve temizleme ihtiyacını azaltır'],
    mistakes: ['Suyu sahnede konuşurken son dakika içmek (sistemik hidrasyon saatler sürer)', 'Çay ve kahveyi "sıvı" tüketiminden sayıp su yerine koymak'],
    phrase: null,
    steps: [
      'Sabah uyanır uyanmaz, henüz hiçbir şey yemeden veya konuşmadan büyük bir bardak ılık su için.',
      'Önemli bir konuşma/sunum yapacağınız saatten en az 2-3 saat önce 1.5 litre suyu tüketmiş olun.',
      'Konuşma esnasında yanınızda daima oda sıcaklığında su bulundurun ve aralarda küçük yudumlar alın.',
      'Günde en az kilonuz x 30ml (örn: 70kg x 30 = 2.1 litre) saf su için.'
    ],
    variations: [
      '🔄 Isı Kontrolü: Buz gibi soğuk su veya kaynar derecede sıcak su içmeyin. Ses telleri aşırı ısı değişimlerine spazm (kasılma) ile tepki verir. Oda sıcaklığı her zaman en idealidir.'
    ],
    tip: '💡 İçtiğiniz su direkt olarak ses tellerinize değmez (yemek borusuna gider). Suyun kana karışıp ses tellerine ulaşması (sistemik hidrasyon) yaklaşık 2-4 saat sürer. Yani sahnede içtiğiniz su sadece o anlık boğaz kuruluğunu alır, asıl koruma 3 saat önce içtiğiniz sudur.',
    related: [145, 155]
  },
  {
    id: 143, slug: 'reflu-ve-ses-iliskisi', cat: 'saglik', emoji: '🔥', title: 'Laringofaringeal Reflü (Boğaz Reflüsü)',
    dur: 'Sürekli', level: 'Orta', freq: 'Her gün',
    desc: 'Mide asidinin yemek borusundan yukarı çıkarak doğrudan ses tellerini yakması durumuna karşı alınan beslenme ve yaşam tarzı önlemleri.',
    benefits: ['Sabahları yaşanan kronik ses kısıklığı ve boğukluğu ortadan kaldırır', 'Boğazda sürekli bir şey takılıymış (globus) hissini yok eder', 'Ses tellerinin mukoza bütünlüğünü korur'],
    mistakes: ['Yatmadan hemen önce yemek yiyip tok karnına uyumak', 'Gece geç saatlerde çikolata, nane, kahve veya domatesli gıdalar tüketmek'],
    phrase: null,
    steps: [
      'Uyumadan en az 3 saat önce her türlü gıda tüketimini durdurun (sadece su içebilirsiniz).',
      'Gece yatarken çift yastık kullanın veya yatağınızın baş kısmını 10-15 cm yükselterek yerçekiminden faydalanın.',
      'Sesinizin çok önemli olduğu günlerde aşırı baharatlı, asitli (limon, sirke) ve yağlı yiyeceklerden uzak durun.',
      'Sabah kalktığınızda sesiniz boğuksa (asit tahrişi) zorlayarak açmaya çalışmayın, yavaşça ısınma (humming) yapın.'
    ],
    variations: [
      '🔄 Duruş Düzeltme: Yemekten sonraki ilk 2 saat kesinlikle koltuğa uzanmayın. Dik oturmak asidin midede kalmasını sağlar.'
    ],
    tip: '💡 Boğaz reflüsü sinsi bir hastalıktır. Midenizde yanma veya ekşime (mide reflüsü belirtileri) hissetmeseniz BİLE, asit buharı yukarı çıkıp ses tellerinize zarar veriyor olabilir (Buna sessiz reflü denir).',
    related: [155, 148]
  },
  {
    id: 144, slug: 'sigara-ve-alkol-etkileri', cat: 'saglik', emoji: '🚭', title: 'Sigara ve Alkolün Sese Etkisi',
    dur: 'Sürekli', level: 'Başlangıç', freq: 'Bir kez',
    desc: 'Tütün dumanının ısısı ve kimyasalları ile alkolün kurutucu etkisinin ses teli üzerindeki dramatik yıkımının incelenmesi.',
    benefits: ['Reinke Ödemi (sigaraya bağlı ses kalınlaşması) riskini bilerek tedbir almak', 'Ses tellerinin neden kuruduğunu tespit etmek', 'Gelecekte yaşanabilecek kalıcı ses kaybı (disfoni) riskini azaltmak'],
    mistakes: ['"Sigara içmek sesimi karizmatik/kalın yapıyor" yanılgısıyla bilerek zarar vermek', 'Alkol alırken daha çok bağırarak konuşmanın etkilerini küçümsemek'],
    phrase: null,
    steps: [
      'Sigara dumanının, ses tellerinin üzerinden geçen 80-100 derecelik bir ısı bulutu olduğunu idrak edin.',
      'Bu ısının ve katranın, ses telinin kayganlığını sağlayan mukozayı kurutup pişirdiğini bilin.',
      'Alkol tüketilen ortamlarda (genelde gürültülüdür) alkolün diüretik (vücuttan su atıcı) etkisinin üzerine, bir de bağırarak konuşmanın ses tellerini çift yönlü kuruttuğunu unutmayın.',
      'Alkol alınan akşamlarda, her 1 bardak alkole karşılık 2 bardak su tüketmeyi kural haline getirin.'
    ],
    variations: [
      '🔄 Pasif İçicilik Testi: Dumanlı bir odada sadece 1 saat kalmanın bile ses tellerinizi nasıl kuruttuğunu ertesi sabah sesinizin boğukluğundan test edebilirsiniz.'
    ],
    tip: '💡 Sigara içen kadınların seslerinde zamanla görülen kalınlaşma ve "erkeksi" ton, bir karizma değil, ses telinin içinde sıvı birikmesi sonucu oluşan "Reinke Ödemi" adlı patolojik bir hastalıktır.',
    related: [142, 145]
  },
  {
    id: 145, slug: 'ses-hijyeni-10-kural', cat: 'saglik', emoji: '🛡️', title: 'Ses Hijyeni Altın Kuralları',
    dur: '5 dk', level: 'Başlangıç', freq: 'Her gün',
    desc: 'Dişlerimizi fırçaladığımız gibi, sesimize de günlük olarak uygulamamız gereken "Ses Hijyeni" (Vocal Hygiene) kuralları.',
    benefits: ['Sesi her koşulda 7/24 performansa hazır tutar', 'Ses tellerindeki yaşlanmayı geciktirir', 'Ses hastalıklarına (nodül, polip, kist) karşı %90 oranında koruma sağlar'],
    mistakes: ['Boğaz temizlemek (Ahem! yapmak)', 'Fısıldayarak konuşmak (Ses teline bağrımaktan daha çok zarar verir)', 'Gürültülü ortamlarda (kafe, konser) bağırmak'],
    phrase: null,
    steps: [
      '1. Bol su için.',
      '2. Gıcık geldiğinde ÖKSÜRMEYİN veya BOĞAZ TEMİZLEMEYİN. Bunun yerine bir yudum su için veya sertçe yutkunun.',
      '3. Bağırmayın, çığlık atmayın.',
      '4. Asla fısıldayarak konuşmayın (Fısıldamak ses tellerini asimetrik gerer).',
      '5. Uykunuzu alın.',
      '6. Aşırı sıcak ve aşırı soğuktan kaçının.',
      '7. Kuru ve klimalı ortamlarda fazla konuşmayın.',
      '8. Boyun ve omuz kaslarınızı sık sık esnetin.',
      '9. Hasta olduğunuzda (larenjit) ASLA konuşmayın, tam ses istirahati yapın.',
      '10. Konuşurken nefesinizi tutmayın.'
    ],
    variations: [
      '🔄 Alternatif Boğaz Temizleme: Gıcık hissettiğinizde boğazınızı kazımak yerine, burnunuzdan çok kısa ve sessizce sert bir nefes çekip anında yutkunun (Sniff and swallow tekniği).'
    ],
    tip: '💡 "Boğaz temizlemek" ses tellerinin zımpara kağıdı gibi birbirine sürtünmesidir. Bir kere yaptığınızda tahriş artar ve daha çok yapma ihtiyacı hissedersiniz; bu bir kısır döngüdür.',
    related: [142, 149]
  },
  {
    id: 146, slug: 'alerji-mevsiminde-ses', cat: 'saglik', emoji: '🤧', title: 'Alerji Döneminde Ses Koruma',
    dur: 'Mevsimsel', level: 'Orta', freq: 'Bahar ayları',
    desc: 'Bahar nezlesi (alerjik rinit) döneminde geniz akıntısı, hapşırma ve antihistaminik ilaçların sese olan yan etkilerini yönetme.',
    benefits: ['Geniz akıntısının ses tellerine verdiği hasarı azaltır', 'Alerji ilaçlarının kurutucu etkisini telafi eder', 'Hapşırırken sese binen basıncı yönetmeyi öğretir'],
    mistakes: ['Alerji hapı (antihistaminik) içtikten sonra su tüketimini artırmamak', 'Ses kısıklığını alerjiye bağlayıp zorlayarak konuşmaya devam etmek'],
    phrase: null,
    steps: [
      'Alerji ilaçları kullanıyorsanız (burnu kuruturlar), su tüketiminizi normalin %30 üzerine çıkarın.',
      'Tuzlu su (serum fizyolojik) ile burun yıkaması (Neti Pot) yaparak geniz akıntısını mekanik olarak temizleyin.',
      'Hapşırırken sesinizi (vokal kordları) kilitlemeyin. Sessiz hapşırmaya çalışmak veya ağzı kapalı hapşırmak sese inanılmaz bir basınç yükler, ağzınızı açarak "Hapşuu" diyerek dışarı verin.',
      'Boğazdaki kaşıntıyı gidermek için öksürmek yerine papatya çayı veya ılık su yudumlayın.'
    ],
    variations: [
      '🔄 Buhar + Alerji: Alerji sezonunda odanızın nem oranını %40-50 seviyesinde tutacak bir soğuk buhar makinesi (humidifier) kullanın.'
    ],
    tip: '💡 Antihistaminik (alerji) ilaçları burnunuzdaki akıntıyı kuruturken maalesef ses tellerinizdeki o hayati "kayganlaştırıcı mukoza" tabakasını da kurutur. Bu ilaçları kullanırken eskisinden daha çok suya ihtiyacınız vardır.',
    related: [142, 159]
  },
  {
    id: 147, slug: 'soguk-havalarda-koruma', cat: 'saglik', emoji: '🧣', title: 'Soğuk Havalarda Ses Koruması',
    dur: 'Kış Boyu', level: 'Başlangıç', freq: 'Kış ayları',
    desc: 'Kış aylarında dışarıdaki kuru soğuk hava ile içerideki ısıtıcıların yarattığı kuru sıcak havanın ses telleri üzerindeki çift yönlü kurutucu etkisini engelleme.',
    benefits: ['Kışın yaşanan seste çatallaşmayı (crack) önler', 'Soğuk havada doğrudan nefes almanın şok etkisini yumuşatır', 'Isıtıcıların odadaki nemi tüketmesine karşı önlem aldırır'],
    mistakes: ['Soğuk havada dışarıdayken ağızdan nefes alıp konuşmak', 'Kışın atkı takmayı sadece estetik bir aksesuar sanmak'],
    phrase: null,
    steps: [
      'Dışarı çıktığınızda ağzınızı ve boynunuzu bir kaşkol/atkı ile sarın. Bu, dışarıdaki soğuk havanın ısınarak içeri girmesini sağlar.',
      'Soğukta yürürken ağzınızdan DEĞİL, burnunuzdan nefes alın (Burun havayı ısıtır ve nemlendirir).',
      'İç mekanlarda kalorifer veya klima çalışıyorsa, odanın içine ıslak havlu asın veya su dolu bir kase koyarak havanın kurumasını önleyin.',
      'Soğuk havadan sıcak odaya ilk girdiğiniz 5 dakika içinde çok yoğun konuşmamaya çalışın, dokuların adapte olmasına izin verin.'
    ],
    variations: [
      '🔄 Burun Nefesi Isıtması: Çok soğuk havalarda ellerinizi ağzınıza ve burnunuza siper ederek kendi nefesinizle oluşan sıcak mikro-iklimde soluyun.'
    ],
    tip: '💡 Boynumuzu sıcak tutmak sadece üşümemek için değildir. Boyun kasları soğukta refleks olarak kasılır (spazm). Gergin boyun kasları, gırtlağı yukarı çekerek sesin boğulmasına ve zor çıkmasına neden olur.',
    related: [145, 159]
  },
  {
    id: 148, slug: 'ses-kisikliginda-mudahale', cat: 'saglik', emoji: '🚑', title: 'Ses Kısıklığında Acil Müdahale',
    dur: 'İlk 24 Saat', level: 'Orta', freq: 'Hastalık anı',
    desc: 'Üst solunum yolu enfeksiyonu, larenjit veya aşırı bağırma sonrası ses kısıldığında kalıcı hasarı önlemek için yapılacak 24 saatlik kriz protokolü.',
    benefits: ['Basit bir iltihabın seste kalıcı hasar veya nodül bırakmasını engeller', 'İyileşme sürecini 1 haftadan 2-3 güne indirir', 'Zorlama kaynaklı mikro kanamaları önler'],
    mistakes: ['"Açılsın" diye bağırarak konuşmaya çalışmak', 'Ses tellerini temizlemek için pastil çiğneyip öksürmek', 'Sıcak ıhlamur / limon içip üzerine konuşmaya devam etmek'],
    phrase: null,
    steps: [
      '1. Mutlak Ses İstirahati: Konuşmayı SIFIRA indirin. Çevrenize hasta olduğunuzu mesajla bildirin.',
      '2. Fısıldamayın: Birine bir şey anlatmanız gerekirse fısıldamayın, normal tonunuzda çok kısık sesle söyleyin veya yazın.',
      '3. Sıcak-Soğuk Yok: Kaynar veya buz gibi şeyler içmeyin. Sadece oda sıcaklığında bol su.',
      '4. Öksürük Krizi: Öksürük gelirse boğazınızı değil, karnınızı (diyaframı) kullanarak havayı dışarı atın.',
      '5. Buhar: Günde 3-4 kez sıcak su buharı (içine hiçbir mentol/yağ koymadan) soluyun.'
    ],
    variations: [
      '🔄 Yutkunma Testi: Boğazınızdaki ödemi test etmek için yutkunun. Yutkunurken cam kesiği gibi acı varsa kesinlikle tek kelime etmeyin.'
    ],
    tip: '💡 Ses kısıklığı (larenjit), ses tellerinizin "Bacağım kırıldı, üstüme basma!" deme şeklidir. Kırık bir bacakla koşmaya çalışırsanız ne olursa, kısık bir sesle konuşursanız ses telinizde o olur.',
    related: [145, 159]
  },
  {
    id: 149, slug: 'vocal-cooldown', cat: 'saglik', emoji: '🧊', title: 'Vocal Cooldown (Ses Soğutma)',
    dur: '5 dk', level: 'Orta', freq: 'Performans Sonrası',
    desc: 'Spordan sonra yapılan "esneme (stretching)" hareketlerinin ses telleri için olan versiyonudur. Yoğun konuşma/şarkı sonrası şişen ses tellerini normal formuna döndürür.',
    benefits: ['Uzun bir konferans veya ders sonrası oluşan ses yorgunluğunu hızla atar', 'Ertesi güne ses kısıklığıyla uyanmanızı engeller', 'Ses tellerindeki ödemi dağıtır'],
    mistakes: ['Etkinlik biter bitmez yüksek sesli bir mekana (parti/kutlama) gidip bağırmaya devam etmek', 'Soğutma egzersizini sert ve yüksek volümle yapmak'],
    phrase: null,
    steps: [
      'Sunum veya kayıt bittikten hemen sonra sessiz bir odaya geçin.',
      'Siren Sesi (Lip Trill): Dudaklarınızı pır pır titreterek, en ince sesinizden en kalın sesinize doğru çok yavaş ve yumuşak bir iniş yapın (3 kez).',
      'Yumuşak U: Çok kısık bir sesle (neredeyse iç çekme gibi) pes (kalın) tonda "Uuuuuu" deyin (5 kez).',
      'Masaj: Boynunuzun iki yanındaki kaslara ve çene altınıza parmaklarınızla dairesel hafif masajlar yapın.',
      'En az 30 dakika boyunca mecbur kalmadıkça konuşmayın ve sessizliğin tadını çıkarın.'
    ],
    variations: [
      '🔄 Humming Soğutması: Ağzınız kapalı şekilde sadece "Mmmmm" sesiyle en kalın perdenizde yavaşça mırıldanarak göğsünüzdeki titreşimi hissedin.'
    ],
    tip: '💡 Profesyonel şarkıcıların ve hatiplerin en büyük sırrı sahne öncesi "ısınmak" kadar, sahne sonrası "soğumaktır". Ses yorgunluğu bir gecede geçmez, soğutma yapmazsanız birikerek nodüle dönüşür.',
    related: [141, 145]
  },
  {
    id: 150, slug: 'ses-teli-nodulu-bilgi', cat: 'saglik', emoji: '⚠️', title: 'Ses Teli Nodülü ve Polip Bilgilendirmesi',
    dur: 'Teorik', level: 'İleri', freq: 'Bir kez',
    desc: 'Hatalı ses kullanımının birikmesiyle oluşan fiziksel zedelenmeleri (nasırlaşma ve su toplaması) ve bu durumların belirtilerini tanıma.',
    benefits: ['Hastalıkların erken teşhisinde kendi vücudunu dinlemeyi öğretir', 'Yanlış tekniklerin kalıcı sonuçlarını görerek disiplin sağlar', '"Bana bir şey olmaz" yanılgısını yıkar'],
    mistakes: ['Ses kısıklığı 2 haftadan uzun sürdüğünde "geçer" diye doktora gitmemek', 'Nodül teşhisi sonrası ses terapisine gitmeyip hemen ameliyat istemek'],
    phrase: null,
    steps: [
      'Nodül Nedir?: Ellerde çok çalışmaktan oluşan nasırın aynısıdır. Ses telleri sürekli birbirine çok sert (bağırarak) çarpınca o bölgede kalınlaşma ve şişlik (nasır) oluşur. Çoğunlukla çift taraflıdır.',
      'Polip Nedir?: Ses teline ani bir travma (örneğin maçta bir kez çok şiddetli bağırmak) sonucu kılcal damarın çatlayıp içi kan/sıvı dolu bir baloncuk oluşturmasıdır. Genelde tek taraflıdır.',
      'Belirtiler: Seste çatallaşma, hava kaçağı (nefesli ses), eskiden çıkılan ince seslere çıkamama, konuşurken boyunda ağrı ve çabuk yorulma.',
      'Ne Yapmalı: 14 günden uzun süren NEDENSİZ (hastalık olmayan) ses kısıklığında KBB Uzmanına başvurulmalıdır.'
    ],
    variations: [
      '🔄 Test: Bir nefeste kesintisiz "A" sesi çıkarın. Ses aniden çatallanıp inceliyor veya araya hışırtılı hava (fısıltı) giriyorsa nodül belirtisi olabilir.'
    ],
    tip: '💡 Nodüllerin %90\'ı "Ses Terapisi" (doğru nefes ve diksiyon eğitimi) ile ameliyatsız tedavi edilebilir. Nodül bir kader değil, kötü kullanım alışkanlığıdır.',
    related: [145, 160]
  },
  {
    id: 151, slug: 'ogretmen-sesi-koruma', cat: 'saglik', emoji: '👩‍🏫', title: 'Öğretmen / Eğitmen Sesi Koruma Programı',
    dur: 'Günlük Plan', level: 'Orta', freq: 'Çalışma günleri',
    desc: 'Günde 5-8 saat konuşmak zorunda olan, yüksek risk grubundaki meslekler (Öğretmen, Akademisyen) için özel olarak tasarlanmış ses sağkalım rutini.',
    benefits: ['Cuma gününe gelindiğinde sesin bitmesini (Tükenmişlik) engeller', 'Gürültülü sınıflarda bağırmadan otorite kurmayı (Ses Projeksiyonu) öğretir', 'Öğretmen hastalığı olan nodül riskini %80 düşürür'],
    mistakes: ['Sınıfı susturmak için sınıfın gürültüsünden daha yüksek bir sesle bağırmak', 'Ders aralarında (teneffüste) nöbet tutarken veya öğretmenler odasında dinlenmek yerine yüksek sesle sohbete devam etmek'],
    phrase: '"Sessizlik lütfen! (Bağırarak değil, kararlı ve tok bir sesle)"',
    steps: [
      'Sabah kalkınca: Mutlaka 5 dakika esneme ve 1 bardak ılık su.',
      'Ders İçi: Öğrencileri bastırmak için sesinizin "Volümünü" (gürlüğünü) değil, "Perdesini" (kalınlık/incelik) değiştirin. Fısıltıya yakın bir ses tonu veya aniden kalınlaşan bir ses dikkati daha çok çeker.',
      'Ders Arası: Teneffüslerde 10 dakika "mutlak sessizlik" yapın. Ses telleriniz dinlensin.',
      'Konumlanma: Sınıfın arka sırasındaki öğrenciye sesinizi "fırlatmak" yerine, yürüyerek onun yanına gidin ve normal tonda konuşun.'
    ],
    variations: [
      '🔄 İşaret Dili Kullanımı: "Susun" diye bağırmak yerine, sınıfın sessizleşmesi için el çırpma ritmi, ışıkları açıp kapama veya tahtaya vurma gibi görsel/işitsel çapalar kullanın.'
    ],
    tip: '💡 Öğretmenler ses bankasındaki limitlerini en hızlı tüketen meslek grubudur. Sınıfta konuşmadığınız her 1 saniye, akşam evinize veya ailenize ayırabileceğiniz "1 saniyelik ses enerjisi" demektir.',
    related: [142, 149]
  },
  {
    id: 152, slug: 'cagri-merkezi-ses-bakimi', cat: 'saglik', emoji: '🎧', title: 'Çağrı Merkezi Çalışanları İçin Bakım',
    dur: 'Günlük Plan', level: 'Orta', freq: 'Çalışma günleri',
    desc: 'Oturarak, kulaklık takılı halde ve günde yüzlerce kez aynı metni okuyarak oluşan fiziksel ve vokal gerginliği (Call Center sendromu) önleme rutini.',
    benefits: ['Oturuş bozukluğundan kaynaklanan nefes sığlığını engeller', 'Kurumuş (klima kaynaklı) boğazı nemli tutar', 'Monotonluktan kaynaklanan ses teli yorgunluğunu kırar'],
    mistakes: ['Kulaklığın iki tarafını da takarak kendi sesini duyamayıp daha yüksek sesle (bağırarak) konuştuğunu fark etmemek', 'Kambur oturarak diyaframı sıkıştırmak ve sesi gırtlaktan üretmek'],
    phrase: '"Merhaba, size nasıl yardımcı olabilirim? (Her defasında ilk kez söylüyormuş gibi)"',
    steps: [
      'Postür: Asla ekranın içine doğru (boynu uzatarak) girmeyin. Sırtınız dik, kulaklarınız omuzlarınızla aynı hizada olsun.',
      'Kulaklık Hilesi: Mümkünse tek kulaklık (mono) kullanın. Bir kulağınız boşta kalırsa kendi sesinizin yüksekliğini doğru ayarlar, bağırmazsınız.',
      'Nefes Aralığı: Çağrılar arasındaki o 5 saniyelik boşlukta burnunuzdan derin bir diyafram nefesi alıp omurganızı dikleştirin.',
      'Sıvı: Masanızda mutlaka pipetli bir su şişesi olsun; her 3 çağrıda bir 1 yudum alın.'
    ],
    variations: [
      '🔄 Boyun Esnetme: Her saat başı 1 dakika boyunca omuzlarınızı kulaklarınıza kadar çekip aniden bırakın ve boynunuzu çok yavaşça sağa/sola çevirin.'
    ],
    tip: '💡 Ofis klimaları havadaki nemi emerek adeta bir çöl ortamı yaratır. Çağrı merkezi çalışanı, bir çöl maratoncusu gibi sürekli yudum yudum su içmek zorundadır.',
    related: [142, 145]
  },
  {
    id: 153, slug: 'ses-bandi-testi', cat: 'saglik', emoji: '🎹', title: 'Ses Bandı (Vocal Range) Tespiti',
    dur: '10 dk', level: 'Başlangıç', freq: 'Bir kez',
    desc: 'Kişinin doğal ve rahat çıkarabildiği en kalın ve en ince ses sınırlarını keşfederek, kendi kapasitesi dışında konuşup sese zarar vermesini önleme.',
    benefits: ['Size ait olmayan sahte bir tonda (çok kalın veya ince) konuşmanın önüne geçer', 'Optimum konuşma perdenizi (Optimal Pitch) bulmanızı sağlar', 'Sesin daha karizmatik ve az yorucu çıkmasına imkan tanır'],
    mistakes: ['Sesi bilerek kalınlaştırmaya çalışarak (Macho voice) gırtlak kaslarını kitlemek', 'Testi yaparken boyun damarlarını şişirecek kadar zorlamak'],
    phrase: null,
    steps: [
      'Sakin bir odada piyano uygulaması açın.',
      'Ağzınızı kapatıp rahatça "Mmmmm" diye mırıldanarak bir onaylama sesi çıkarın (Hı-hı der gibi). Bu sizin Optimal Perdenizdir (Doğal konuşma merkeziniz).',
      'Buradan aşağı doğru çok yavaşça sesinizi kalınlaştırarak inin. Sesinizin kesildiği veya çatırdamaya başladığı (Vocal fry) yer alt sınırınızdır.',
      'Optimal perdeden yukarı doğru ince seslere çıkın. Sesinizin zorlandığı ve fısıltıya dönüştüğü yer üst sınırınızdır.',
      'Konuşmalarınızı bu merkezin %20 altı ve %20 üstü aralığında tutun.'
    ],
    variations: [
      '🔄 Hece ile Test: Sınırları belirlerken M sesi yerine "Heeey" diye seslenerek doğal sesinizin nereye tırmandığını kontrol edin.'
    ],
    tip: '💡 Toplumdaki en büyük hatalardan biri, insanların (özellikle radyocular veya yöneticilerin) seslerini daha "otoriter" yapmak için doğal sınırlarının çok altında, gırtlağı basarak konuşmalarıdır. Bu kısa sürede ses kısıklığına yol açar.',
    related: [141, 150]
  },
  {
    id: 154, slug: 'hormon-degisimi-ve-ses', cat: 'saglik', emoji: '🧬', title: 'Hormon Değişimi ve Ses',
    dur: 'Bilgi', level: 'Orta', freq: 'Bir kez',
    desc: 'Ergenlik (Puberte), hamilelik, menopoz ve andropoz gibi ciddi hormonal dalgalanmaların yaşandığı dönemlerde sesin fizyolojik değişimini ve bu dönemlerdeki bakımın önemini anlama.',
    benefits: ['Ergenlikte seste oluşan çatlamaların (mutasyon) normal olduğunu kavrama', 'Menopoz/Andropoz döneminde sesteki matlaşmaya karşı önlem alma', 'Hamilelik ödeminin sese etkisini bilme'],
    mistakes: ['Ergenlik döneminde sesi kontrol etmek için aşırı zorlamak ve kalıcı hasar (Mutasyonel Falsetto) bırakmak', 'Hamilelikte reflü artışını göz ardı edip ses telini aside maruz bırakmak'],
    phrase: null,
    steps: [
      'Ergenlik: Erkeklerde ses telleri uzar ve kalınlaşır (ses 1 oktav düşer), kızlarda daha az uzar (3-4 nota düşer). Bu dönemde sesteki çatlamalar geçicidir, ses kesinlikle ZORLANMAMALIDIR.',
      'Hamilelik: Artan östrojen ve progesteron vücutta su tutar (ödem). Ses telleri de su toplar ve ses kalınlaşıp yorulmaya yatkın hale gelir. Şan/Diksiyon egzersizleri yavaşlatılmalıdır.',
      'Menopoz: Azalan östrojen sebebiyle ses teli mukozası kurur, ses incelir veya matlaşır. Su tüketimi ve buhar inhalasyonu (nemlendirme) iki katına çıkarılmalıdır.'
    ],
    variations: [
      '🔄 Yaşlılıkta Ses: Yaş ilerledikçe kaslar erir (Sarkopeni), ses telleri de bir kastır ve zayıflar. Yaşlılıkta sesi genç tutmanın tek yolu, her gün düzenli diksiyon/okuma egzersizi yaparak "ses teli kaslarını spor yaptırmaktır".'
    ],
    tip: '💡 Tıpkı parmak izi gibi, ses de yaşar ve bizimle birlikte yaşlanır. Hormonal dönemlerde sese "itaat etmesini" emretmek yerine, ona "saygı duymalı" ve dinlenmesine izin vermeliyiz.',
    related: [143, 142]
  },
  {
    id: 155, slug: 'kafein-ve-asit-etkisi', cat: 'saglik', emoji: '☕', title: 'Kafein ve Asitli İçeceklerin Etkisi',
    dur: 'Sürekli', level: 'Başlangıç', freq: 'Her gün',
    desc: 'Kahve, çay, enerji içecekleri ve kolanın içerdikleri kafein ve asit sebebiyle ses telleri üzerindeki dehidratasyon (kurutma) etkisini yönetme.',
    benefits: ['Sunum veya kayıt öncesi yanlış içecek seçip sesi kurutmayı önler', 'Kafein krizini yönetirken ses sağlığını korumayı öğretir', 'Gizli reflü tetikleyicilerinden korunmayı sağlar'],
    mistakes: ['"Boğazım yumuşasın" diyerek sahne öncesi kaynar çay veya kahve içmek', 'Enerji içeceklerinin sese iyi geleceğini sanmak'],
    phrase: null,
    steps: [
      '1 Kupa Kahve = -2 Kupa Su kuralını unutmayın. Kafein diüretiktir (vücuttan su atar). İçtiğiniz her 1 bardak kahve/çay için ekstra 2 bardak su içerek durumu nötrleyin.',
      'Önemli bir konuşmadan önceki 2 saat içinde KESİNLİKLE kahve, koyu çay veya asitli/gazlı içecek tüketmeyin.',
      'Kahvenin asidik yapısı midedeki kapakçığı (sfinkter) gevşetir ve ses tellerine asit buharı (reflü) kaçmasına neden olur. Aç karnına kahve içmekten kaçının.',
      'Sahne öncesi boğazı yumuşatmak için en iyi içecek, içine birkaç damla gerçek elma suyu (sitrik asitsiz) damlatılmış ılık sudur.'
    ],
    variations: [
      '🔄 Bitki Çayı Seçimi: Her bitki çayı iyi değildir. Nane çayı reflüyü tetikler, yeşil çay kafein içerip kurutur. Ses için en iyi bitki çayları Papatya, Ebegümeci ve Adaçayıdır.'
    ],
    tip: '💡 Kahve ses tellerini direkt olarak kurutmaz (çünkü yemek borusundan geçer), ancak vücuttaki suyu böbrekler yoluyla hızlıca attığı için sistemik olarak mukoza üretimini azaltır. Sonuç: Kayganlığını yitiren gıcık yapan bir boğaz.',
    related: [142, 143]
  },
  {
    id: 156, slug: 'uyku-ve-ses-kalitesi', cat: 'saglik', emoji: '💤', title: 'Uyku Düzeni ve Ses Kalitesi',
    dur: 'Gece Boyu', level: 'Başlangıç', freq: 'Her gün',
    desc: 'Yetersiz uykunun vücut gerginliğini artırması ve ses kaslarının (vokal kordların) yenilenme (rejenerasyon) sürecini sekteye uğratmasının incelenmesi.',
    benefits: ['Sabah ses boğukluğunu ve uyanamayan (fry) sesi ortadan kaldırır', 'Konuşma esnasındaki odak eksikliği ve dil sürçmelerini azaltır', 'Ödemli ses tellerinin iyileşmesine fırsat tanır'],
    mistakes: ['3 saat uykuyla sınava/sunuma çıkıp sesin neden titrediğini anlamamak', 'Gece boyu ağız açık uyuyup ses tellerini çöl gibi kurutmak'],
    phrase: null,
    steps: [
      'Ses tellerinin kendini onardığı (hücre yenilenmesi) tek zaman dilimi derin uyku evresidir. Minimum 7 saat kesintisiz uyuyun.',
      'Eğer sabahları uyandığınızda ağzınız ve boğazınız çok kuruysa, gece ağzınız açık uyuyorsunuz demektir (Ağızdan alınan hava direkt ses tellerini kurutur).',
      'Ağız solunumunu önlemek için yastığınızın yüksekliğini ayarlayın, KBB doktoruna burun tıkanıklığını kontrol ettirin veya yatak odanızın nemini artırın.',
      'Uyandıktan sonra sesin uyanması (vücut ısısıyla birlikte) yaklaşık 2 saat sürer. Önemli bir konuşmanız varsa en az 2 saat önce uyanmış olun.'
    ],
    variations: [
      '🔄 Sabah Isınması: Uyandıktan 15 dakika sonra yatakta otururken çok kısık sesle 1 dakika boyunca "Mmmmm" diye mırıldanarak sesin kan dolaşımını hızlandırın.'
    ],
    tip: '💡 Yorgun bir bedenin sesi parlak olamaz. Ses telleriniz, tüm vücudunuzun enerji seviyesinin bir hoparlörüdür. Uykusuzluk, sesin rengini "gri"ye çevirir.',
    related: [142, 149]
  },
  {
    id: 157, slug: 'stres-ve-ses-baglantisi', cat: 'saglik', emoji: '🧠', title: 'Stres ve Ses Bağlantısı',
    dur: 'Sürekli', level: 'Orta', freq: 'Gerektiğinde',
    desc: 'Psikolojik stresin ve anksiyetenin "Savaş veya Kaç" refleksini tetikleyerek boyun/gırtlak kaslarını kitlemesi ve seste titreme, kısılma yaratmasını önleme.',
    benefits: ['Topluluk önünde konuşma heyecanında (Sahne Korkusu) ses titremesini bitirir', 'Kasılmaya bağlı boyun ve boğaz ağrılarını (Kas Gerilim Disfonisi) önler', 'Nefesin sığlaşmasını engeller'],
    mistakes: ['Stresliyken nefesi göğüste tutmak ve omuzları kulaklara doğru kasmak', 'Ses titremesini engellemek için daha yüksek sesle (bağırarak) konuşmaya çalışmak'],
    phrase: null,
    steps: [
      'Stres anında ilk kasılan yer gırtlağı tutan boyun askı kaslarıdır. Konuşmadan önce omuzlarınızı tamamen aşağı düşürün ve gevşetin.',
      'Heyecanlandığınızda beyniniz "yüzeysel ve hızlı" göğüs nefesine geçer. Bunu kırmak için burnunuzdan 4 saniyede diyafram nefesi alıp, ağzınızdan 8 saniyede üfleyin (3 kez).',
      'Sesiniz titremeye başlarsa, konuşma hızınızı (temponuzu) bilinçli olarak yarı yarıya düşürün. Yavaşlık, beyne "güvendeyiz" sinyali gönderir.',
      'Ellerinizle boynunuzun yan taraflarına (şah damarı çevresi) nazik dairesel masajlar yaparak kasları yumuşatın.'
    ],
    variations: [
      '🔄 Esneme (Yawn-Sigh) Egzersizi: Stres hissettiğinizde kocaman (aslan gibi) esneyin ve esnerken "Haaaa" diye bir iç çekiş sesi çıkarın. Bu hareket gırtlağı inanılmaz rahatlatır.'
    ],
    tip: '💡 İnsan bedeni tehlike (stres) anında nefes borusunu korumak için gırtlağı yukarı çeker. Yukarı çekilmiş bir gırtlakla rahat ses üretemezsiniz. Sesi düzeltmenin yolu yutkunarak gırtlağı aşağı indirmektir.',
    related: [141, 149]
  },
  {
    id: 158, slug: 'ses-egzersizi-yaralanma', cat: 'saglik', emoji: '⚠️', title: 'Ses Egzersizi Yaralanma Riskleri',
    dur: 'Bilgi', level: 'İleri', freq: 'Egzersiz öncesi',
    desc: 'Diksiyon, şan veya nefes egzersizlerini yanlış teknikle, aşırı dozda veya hastayken yapmanın getireceği fiziksel yaralanma risklerini bilme.',
    benefits: ['Kaş yapayım derken göz çıkarmayı (hasar vermeyi) önler', '"No pain, no gain" (Acı yoksa başarı yok) mantığının ses telleri için GEÇERSİZ olduğunu öğretir', 'Doğru dozu belirlemeyi sağlar'],
    mistakes: ['Ses kısıklığı (larenjit) varken "ısınarak açılır" umuduyla egzersiz yapmak', 'Boğazda batma, yanma veya acı hissetmesine rağmen çalışmaya devam etmek', 'Isınmadan direkt en zor (çifte artikülasyon vb.) egzersizlere girmek'],
    phrase: null,
    steps: [
      'Altın Kural: Ses egzersizlerinde "Acı, Yanma, Batma, Kaşıntı" hissi ASLA olmamalıdır. Eğer varsa, yanlış bir şey yapıyorsunuz demektir, HEMEN DURUN.',
      'Sporda kas yandığında gelişir, ancak ses telleri yandığında "tahriş" olur (Gelişmez). Egzersiz yorgunluğu sadece çene veya karın kaslarında hissedilmelidir.',
      'Günde aralıksız 1 saat çalışmak yerine, günde 3 kez 15\'er dakika (aralıklı) çalışmak ses telleri için 10 kat daha güvenlidir.',
      'Hastalık (soğuk algınlığı, reflü atağı) geçirdiğiniz günlerde tüm egzersizleri askıya alın, sadece "Sessiz dinlenme" yapın.'
    ],
    variations: [
      '🔄 Hasar Kontrolü: Bir egzersiz sonrası konuşma sesiniz (normal merhaba deyişiniz) egzersiz öncesine göre daha boğuk, hışırtılı veya derindense, ses tellerini fazla hırpalamışsınız demektir. Bir sonraki seansı daha hafif yapın.'
    ],
    tip: '💡 Diksiyon laboratuvarındaki egzersizleri bir "Ağırlık Antrenmanı" gibi düşünün. En ağır halterden (ileri seviye) başlarsanız sakatlanırsınız. Önce esneme (streç), sonra ısınma, sonra hafif ağırlık.',
    related: [141, 150]
  },
  {
    id: 159, slug: 'buhar-inhalasyonu', cat: 'saglik', emoji: '♨️', title: 'Buhar İnhalasyonu Tekniği',
    dur: '10 dk', level: 'Başlangıç', freq: 'Haftada 2 kez',
    desc: 'Ses tellerini içtiğimiz suyun ötesinde, doğrudan yüzeyden nemlendirmenin tek ve en etkili yolu olan "sıcak su buharı soluma" tedavisi.',
    benefits: ['Ses tellerinin üzerindeki yapışkan balgamı çözer', 'Klima, kalorifer veya sigara dumanıyla kuruyan mukozayı anında nemlendirir', 'Ses kısıklığını açar ve ödemi hafifletir'],
    mistakes: ['Suyun içine okaliptüs, mentol, vicks veya nane yağı damlatmak (Bunlar anlık ferahlık verir ama sonrasında ses tellerini inanılmaz derecede KURUTUR)', 'Kaynar buharı yüze/boğaza çok yaklaştırıp dokuyu yakmak'],
    phrase: null,
    steps: [
      'Geniş bir kaseye kaynamış ve 2-3 dakika dinlenmiş (fokurdamayan) sıcak su koyun.',
      'İçine HİÇBİR ŞEY (yağ, mentol vs.) eklemeyin. Sadece saf su buharı olmalı.',
      'Başınızın üzerine bir havlu örterek kasenin üzerine eğilin (Çok yaklaşmayın, yüzünüzü yakacak kadar sıcak olmamalı).',
      'Ağzınızı ve burnunuzu açarak çok yavaş, derin ve sakin nefesler alıp verin.',
      'Bu işlemi 10 dakika boyunca sürdürün.'
    ],
    variations: [
      '🔄 Duş Buharı: Vaktiniz yoksa, sıcak bir duş alırken banyonun kapısını kapatıp içeride biriken buharı ağzınızdan derin nefeslerle 5-10 dakika solumak da aynı görevi görür.'
    ],
    tip: '💡 İçtiğiniz suyun ses tellerine ulaşması kan yoluyla saatler sürerken, soluduğunuz saf su buharı (nefes borusundan geçtiği için) anında ses tellerine temas eder ve direkt bir nemlendirme spa\'sı etkisi yaratır.',
    related: [142, 148]
  },
  {
    id: 160, slug: 'ses-terapisti-ne-zaman', cat: 'saglik', emoji: '🩺', title: 'Ses Terapisti Ne Zaman Gerekir?',
    dur: 'Bilgi', level: 'Orta', freq: 'Bir kez',
    desc: 'Ses sağlığındaki bozulmanın basit bir yorgunluk mu yoksa profesyonel bir KBB (Kulak Burun Boğaz) doktoru / Dil ve Konuşma Terapisti müdahalesi gerektiren patolojik bir durum mu olduğunun ayrımını yapma rehberi.',
    benefits: ['Gecikmiş teşhisin getireceği ameliyat riskinden kurtarır', 'Kalıcı ses kaybını önler', 'Ev yapımı kürlerle (çiğ yumurta vs.) zaman kaybetmeyi engeller'],
    mistakes: ['Ses kısıklığı aylarca sürdüğünde "Alerjidendir, faranjittir" diyerek doktora gitmemek', 'İnternetten bulunan kulaktan dolma ses açıcı karışımları deneyerek mideye ve boğaza zarar vermek'],
    phrase: null,
    steps: [
      'Kural 1: Sesiniz 14 günden (2 hafta) uzun süredir nedensiz yere (grip/nezle olmadan) kısıksa veya boğuksa MUTLAKA KBB doktoruna (tercihen laringoloji uzmanına) gidin.',
      'Kural 2: Konuşurken, yutkunurken veya şarkı söylerken boğazınızda batma, iğnelenme veya cam kesiği gibi keskin bir AĞRI varsa hemen doktora başvurun.',
      'Kural 3: Sesiniz sabahları iyi uyanıp akşamüstü tamamen tükeniyorsa (ses yorulması) bu bir nodül başlangıcı sinyalidir.',
      'Kural 4: Konuşurken sürekli boğazınızda bir yumru (globus) varmış gibi hissediyorsanız ve sık sık sesiniz gidip geliyorsa (çatallanma) yardım alın.'
    ],
    variations: [
      '🔄 Doğru Uzmanı Bulmak: Her KBB doktoru ses konusunda uzman değildir. Ses tellerine stroboskopi (kameralı detaylı inceleme) yapabilen ve ses hastalıkları üzerine yoğunlaşmış bir hekim (Laringolog) veya Yüksek Lisansını Ses üzerine yapmış bir Dil ve Konuşma Terapisti (DKT) bulun.'
    ],
    tip: '💡 "Çiğ yumurta içmek sesi açar" gibi mitler tamamen asılsızdır. Yumurta yemek borusuna gider, ses telleriyle alakası yoktur. Gerçek bir ses problemini çiğ yumurta değil, doğru terapi çözer.',
    related: [150, 148]
  }
];

let appjs = fs.readFileSync('public/app.js', 'utf8');
let datajs = fs.readFileSync('diksiyon-data.js', 'utf8');

const newObjectsStr = saglikExercises.map(ex => JSON.stringify(ex, null, 2)).join(',\n') + '\n';

// Replace the array ending
appjs = appjs.replace(/\s*\];\s*$/, ',\n' + newObjectsStr + '];\n');
fs.writeFileSync('public/app.js', appjs, 'utf8');

datajs = datajs.replace(/\s*\];\s*$/, ',\n' + newObjectsStr + '];\n');
fs.writeFileSync('diksiyon-data.js', datajs, 'utf8');

console.log('20 items for Ses Sağlığı ve Koruma injected successfully.');
