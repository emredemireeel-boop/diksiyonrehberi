const fs = require('fs');

const richData = {
  // 🎯 En Çok Aranan Konuşma Bozuklukları & Çözümleri
  's-harfi-nasil-soylenir': {
    title: 'S Harfi Nasıl Söylenir? Pelteklik (Sigmazizm) Tedavisi - Diksiyon Rehberi',
    desc: 'S harfini doğru telaffuz edememe (Pelteklik/Sigmazizm) sorununu aşmak için dil konumlandırma teknikleri ve S harfi diksiyon egzersizleri.',
    h1: 'S Harfini Doğru Telaffuz Etme ve Pelteklik (Sigmazizm) Egzersizleri',
    content: `S harfini çıkarırken "th" veya peltek bir ses çıkmasının (Sigmazizm) ana nedeni, dilin ucunun alt ve üst ön dişlerin arasına girmesi veya dişlere çok sert baskı yapmasıdır. Türkçe "S" harfi dişsel-dişeti (dental-alveolar) bir sestir.\\n\\n<h3>S Harfi İçin Dil Pozisyonu:</h3>\\n<ul>\\n<li><strong>Dil Ucu Nerede Olmalı?</strong> Dilinizin ucunu alt ön dişlerinizin arka köküne (diş etinin hemen altına) hafifçe dayayın. Kesinlikle dişlerin arasına sokmayın.</li>\\n<li><strong>Dişlerin Konumu:</strong> Alt ve üst dişleriniz birbirine çok yakın (neredeyse bitişik) olmalıdır. Ancak çenenizi sıkmayın.</li>\\n<li><strong>Hava Akışı:</strong> Dilinizin ortasında ince bir oluk oluşur. Akciğerden gelen hava bu oluktan geçerek dişlerin arasından dışarı sızar ve "tıss" sesini oluşturur.</li>\\n</ul>\\n\\n<h3>Kısa S Harfi Egzersizi:</h3>\\n<p>Önce dişlerinizi kapatın ve gülümser gibi dudaklarınızı geriye çekin. Dil ucunuzu alt ön dişlerinizin arkasına yaslayıp tıslayan bir yılan gibi kesintisiz "Sssssssss" sesi çıkarın. Bu sesi çıkarırken aynaya bakın, dilinizin ucu görünmemelidir.</p>\\n\\n<div style="margin:2rem 0;padding:1.5rem;background:#f0f9ff;border-radius:12px;border:1px solid #bae6fd;">\\n  <h4 style="margin-top:0;color:#0369a1;">🎙️ İnteraktif Egzersizlere Başlayın</h4>\\n  <p style="margin-bottom:1rem;color:#0c4a6e;">Teoriyi pratiğe dökmek için platformumuzdaki interaktif tekerleme ve artikülasyon araçlarını kullanabilirsiniz. Ücretsiz stüdyomuzda sesinizi kaydedip analiz edin.</p>\\n  <a href="/" style="display:inline-block;background:#0ea5e9;color:white;padding:12px 24px;border-radius:8px;text-decoration:none;font-weight:bold;">Ücretsiz Diksiyon Stüdyosuna Git →</a>\\n</div>`,
    faq: [
      { question: 'Pelteklik yetişkinlikte düzelir mi?', answer: 'Kesinlikle evet. Pelteklik genellikle yanlış öğrenilmiş bir kas alışkanlığıdır (yanlış dil konumlandırması). Düzenli dil egzersizleri ve artikülasyon çalışmalarıyla yetişkinlerde de tamamen düzeltilebilir.' },
      { question: 'S harfi egzersizlerini günde kaç dakika yapmalıyım?', answer: 'Dil kaslarının yeni motor hafızasını öğrenmesi için her gün düzenli olarak 10-15 dakika aynaya bakarak "S", "Z", "Ş" harfi ağırlıklı kelimeler ve tekerlemeler okumanız önerilir.' }
    ]
  },
  'r-harfi-nasil-soylenir': {
    title: 'R Harfi Söyleyememe (Rotasizm) Düzeltme Yolları - Diksiyon Rehberi',
    desc: 'R harfini Y veya Ğ gibi söyleme sorunu (Rotasizm) nasıl çözülür? R harfi titreşim egzersizleri ve dil motor becerilerini geliştirme teknikleri.',
    h1: 'R Harfini Söyleme: Rotasizm ve Titreşim Egzersizleri',
    content: `Türkçedeki R sesi, dil ucunun üst damağa (ön dişlerin hemen arkasına) yaklaşıp hava akımıyla titretilmesiyle elde edilir. Bu titreşimin yapılamaması "Rotasizm" olarak adlandırılır. Kişi R harfini çıkaramadığında yerine Y, Ğ, L veya V seslerini kullanır.\\n\\n<h3>Neden R Harfini Söyleyemiyoruz?</h3>\\n<p>Bunun ana sebebi dil ucunun üst damağa çıkmaması veya yeterince gergin/esnek olmamasıdır. Ayrıca bazen dil bağı kısalığı gibi fiziksel nedenler de olabilir ancak çoğu vaka sadece dilin titreşim motor becerisini öğrenememesinden kaynaklanır.</p>\\n\\n<h3>R Harfi İçin Temel Motor Egzersizi:</h3>\\n<ol>\\n<li><strong>TD Egzersizi:</strong> R sesi çıkarılamıyorsa, dilin aynı bölgeye vurduğu patlayıcı T ve D sesleri kullanılır. Arka arkaya hızlıca "T-D-T-D-T-D" veya "Tı-Dı-Tı-Dı" diyerek dilinizin üst damağa sertçe vurmasını sağlayın.</li>\\n<li><strong>Motor Çalıştırma:</strong> Derin bir nefes alın, dilinizi üst damağa dayayın ve araba motoru çalıştırır gibi kuvvetli bir nefesle "Tdddddd", "Trrrrrrr" şeklinde titreşim başlatmaya çalışın. Hava dilinizi aşağı itmeli, diliniz direnmeli ve titreşim başlamalıdır.</li>\\n</ol>\\n\\n<div style="margin:2rem 0;padding:1.5rem;background:#fdf4ff;border-radius:12px;border:1px solid #f5d0fe;">\\n  <h4 style="margin-top:0;color:#86198f;">🎙️ R Harfi Tekerlemeleri ile Pratik Yapın</h4>\\n  <p style="margin-bottom:1rem;color:#4a044e;">Dil titreşimini bir kez yakaladıktan sonra bunu kelimelerde oturtmak için interaktif platformumuzdaki R harfi tekerlemelerini okumalısınız.</p>\\n  <a href="/tekerlemeler/r" style="display:inline-block;background:#d946ef;color:white;padding:12px 24px;border-radius:8px;text-decoration:none;font-weight:bold;">R Harfi Tekerlemelerine Git →</a>\\n</div>`,
    faq: [
      { question: 'R harfi için dil bağı ameliyatı şart mı?', answer: 'Çoğu zaman hayır. Eğer dilinizi burnunuza veya üst dudağınıza doğru uzatabiliyorsanız, dil bağınız R harfi titreşimi için yeterince uzun demektir. Sorun fiziksel değil, motor öğrenmedir.' },
      { question: 'Fransız R\'sinden Türkçe R\'sine nasıl geçilir?', answer: 'Fransız (veya Alman) R\'si küçük dilin titreşmesiyle (genizden) çıkar. Türkçe R ise dil ucundan çıkar. Küçük dili devre dışı bırakmak için genizden gelen hava akışını boğazdan değil, dudaklardan üfleme pratiği ile dil ucuna yönlendirmelisiniz.' }
    ]
  },
  'kekemelik-egzersizleri': {
    title: 'Kekemelik Egzersizleri ve Akıcı Konuşma Teknikleri - Diksiyon Rehberi',
    desc: 'Kekemelik yaşayanlar için takılmaları azaltan, nefes kontrolünü sağlayan ve konuşma akıcılığını artıran evde uygulanabilir egzersizler.',
    h1: 'Kekemelik Egzersizleri ve Akıcılık Stratejileri',
    content: `Kekemelik, kelimelerin başında takılma, uzatma veya konuşmanın aniden durması ile karakterize edilen bir ritim bozukluğudur. Genellikle heyecan, kaygı, stres veya nefes koordinasyonunun bozulmasıyla artış gösterir. Doğru nefes alma teknikleri ve konuşma ritmini düşürme egzersizleri, kekemeliği kontrol altına almanın en etkili yoludur.\\n\\n<h3>Kekemelik İçin 3 Etkili Ev Egzersizi:</h3>\\n<ul>\\n<li><strong>1. Heceleme ve Uzatarak Okuma (Koro Tekniği):</strong> Bir metni kelimeleri adeta bir şarkı söylüyormuş gibi uzatarak okuyun (Örn: "Meeeeee-rrr-haaaa-baaaa"). Bu egzersiz beyindeki konuşma merkezini rahatlatır ve kas spazmını önler.</li>\\n<li><strong>2. Diyafram Nefesi Üzerine Seslendirme:</strong> Kekemelik vakalarında genellikle konuşmaya nefes bittiğinde veya yanlış nefes alındığında başlanır. Önce karnınızı şişirerek (diyaframdan) derin bir nefes alın. Nefesi verirken (havayı dışarı üflerken) konuşmaya başlayın. Hava akışının sesi taşımasına izin verin.</li>\\n<li><strong>3. Yumuşak Başlangıç (Soft Onset):</strong> Kelimenin ilk harfini çok yumuşak, fısıltı ile seslendirerek başlayıp sonrasında sesi normal tona çıkarın. Özellikle patlayıcı (P, B, T, D, K, G) harflerle başlayan kelimelerde bu tekniği kullanın.</li>\\n</ul>\\n\\n<div style="margin:2rem 0;padding:1.5rem;background:#f0fdf4;border-radius:12px;border:1px solid #bbf7d0;">\\n  <h4 style="margin-top:0;color:#166534;">🎙️ Nefes ve Ritim Araçlarımızı Kullanın</h4>\\n  <p style="margin-bottom:1rem;color:#14532d;">Ana sayfamızda yer alan Görsel Nefes Alma modülü ve Ritim Metronomu, konuşma hızınızı kontrol etmenize yardımcı olur.</p>\\n  <a href="/" style="display:inline-block;background:#22c55e;color:white;padding:12px 24px;border-radius:8px;text-decoration:none;font-weight:bold;">Nefes Egzersizlerine Git →</a>\\n</div>`,
    faq: [
      { question: 'Kekemelik tamamen geçer mi?', answer: 'Özellikle çocukluk çağında (gelişimsel kekemelik) tamamen geçme oranı çok yüksektir. Yetişkinlerde ise doğru teknikler, özgüven çalışmaları ve uzman desteğiyle kişi takılmalarını neredeyse tamamen kontrol altına alabilir ve son derece akıcı konuşabilir.' },
      { question: 'Heyecanlanınca kekelemek normal mi?', answer: 'Evet, heyecan otonom sinir sistemini tetikleyerek kasların (ses telleri, diyafram, çene) kasılmasına ve sığ nefes alınmasına yol açar. Bu kasılmalar da kekemeliği artırır. Sakinleştirici nefes teknikleri heyecan kaynaklı kekemeliği azaltır.' }
    ]
  },
  'etkili-konusma-teknikleri': {
    title: 'Etkili Konuşma Teknikleri: İz Bırakan İletişim Sırları - Diksiyon Rehberi',
    desc: 'Etkili ve karizmatik bir konuşma için gerekli olan vurgu, tonlama, nefes kontrolü ve beden dili teknikleri.',
    h1: 'Etkili Konuşma Teknikleri: Sesinizin Gücünü Keşfedin',
    content: `Etkili konuşma, sadece doğru kelimeleri seçmek değil; o kelimeleri hangi duygu, hangi ton ve hangi ritimle söylediğinizdir. İyi bir konuşmacı dinleyiciyi yormaz, kelimeleri yutmaz ve sesinin enerjisiyle ortamı doldurur.\\n\\n<h3>İz Bırakan Bir Konuşma İçin Uygulamanız Gereken 4 Kural:</h3>\\n<ol>\\n<li><strong>Hızı Kontrol Edin (Ritim):</strong> Türkiye'de ortalama konuşma hızı oldukça yüksektir. Dakikada 120-140 kelime ideal bir sunum hızıdır. Çok hızlı konuşmak güven kaybına, çok yavaş konuşmak ise sıkıntıya neden olur.</li>\\n<li><strong>"Asalak" Sesleri Yok Edin:</strong> Eeee, ıııı, hııım, yani, falan gibi kelime öbekleri konuşmanın kalitesini düşürür. Bunların yerine "Es (Duraklama)" kullanın. Cümle aralarında 1-2 saniye tamamen susmak, sizi daha karizmatik ve düşünceli gösterir.</li>\\n<li><strong>Pes (Kalın) Tonları Kullanın:</strong> Tiz (ince) ve burundan (genizden) gelen sesler rahatsız edici olabilir. Sesinizin göğsünüzden, yani diyafram desteğiyle çıkmasını sağlayarak daha tok, otoriter ve güven veren bir tını elde edin.</li>\\n<li><strong>Vurgu ve Tonlama:</strong> Cümlenin monoton olmasını engelleyin. Önemli olduğunu düşündüğünüz anahtar kelimeleri diğerlerinden biraz daha yüksek sesle ve daha yavaş söyleyin.</li>\\n</ol>\\n\\n<div style="margin:2rem 0;padding:1.5rem;background:#fff7ed;border-radius:12px;border:1px solid #ffedd5;">\\n  <h4 style="margin-top:0;color:#c2410c;">🎙️ Teleprompter ile Pratik Yapın</h4>\\n  <p style="margin-bottom:1rem;color:#7c2d12;">Profesyonel bir spiker gibi konuşma akıcılığınızı artırmak için Teleprompter modülümüzü kullanarak haber metinlerini veya şiirleri seslendirin.</p>\\n  <a href="/" style="display:inline-block;background:#f97316;color:white;padding:12px 24px;border-radius:8px;text-decoration:none;font-weight:bold;">Teleprompter Aracına Git →</a>\\n</div>`,
    faq: [
      { question: 'Konuşurken sesim titriyor, ne yapmalıyım?', answer: 'Ses titremesi, stres anında diyafram yerine göğüsten sık ve sığ nefes almaktan kaynaklanır. Konuşmaya başlamadan önce burundan 4 saniyede derin bir karın nefesi alıp, nefesi yavaşça vererek konuşursanız ses tellerindeki titreme ortadan kalkar.' },
      { question: 'Etkili konuşmak için ses tonu değişebilir mi?', answer: 'Ses tellerinizin anatomik yapısını değiştiremezsiniz, ancak rezonans (sesin yankılandığı boşluklar) alanınızı değiştirerek sesinizi çok daha gür, tok ve etkileyici bir tınıya (pes tona) kavuşturabilirsiniz.' }
    ]
  },
  'topluluk-onunde-konusma-korkusu': {
    title: 'Topluluk Önünde Konuşma Korkusu (Glossofobi) Nasıl Yenilir? - Diksiyon Rehberi',
    desc: 'Sahne korkusunu yenmek, sunum heyecanını kontrol altına almak ve kalabalıklara özgüvenle hitap etmek için psikolojik ve fiziksel taktikler.',
    h1: 'Topluluk Önünde Konuşma Korkusu (Glossofobi) ve Çözüm Yolları',
    content: `İnsanların birçoğu için topluluk önünde konuşmak, yükseklik korkusundan bile daha streslidir. Bu korkuya literatürde "Glossofobi" denir. Kalp atışının hızlanması, ellerin titremesi, yüzün kızarması ve sesin kısılması tamamen otonom sinir sisteminin "savaş veya kaç" tepkisidir.\\n\\n<h3>Sahne Korkusunu Yenmek İçin Pratik Adımlar:</h3>\\n<ul>\\n<li><strong>Nefesle Sistemi Kandırın:</strong> Bedeninize "tehlikede değiliz, güvendeyiz" mesajını vermenin tek yolu nefesi yavaşlatmaktır. Sahneye çıkmadan 5 dakika önce "Kutu Nefesi" yapın: 4 saniye al, 4 saniye tut, 4 saniye ver, 4 saniye tut. Bu kalp ritminizi mucizevi bir şekilde normale çevirir.</li>\\n<li><strong>Dinleyiciyi Düşman Olarak Görmeyin:</strong> İzleyiciler oraya sizin hata yapmanızı izlemek için değil, sizden yeni bir şeyler öğrenmek için geldiler. Sizi destekliyorlar, yargılamıyorlar.</li>\\n<li><strong>Mükemmel Olmaya Çalışmayın:</strong> Hatasız konuşmaya çalışmak en büyük strestir. Kelimeleri karıştırırsanız, gülümseyin, kendinizi düzeltin ve devam edin. Doğallık, robotik bir ezberden çok daha fazla takdir görür.</li>\\n<li><strong>Göz Teması Kurun:</strong> Tüm salona bakmak yerine, kalabalık içinden size dostça bakan (gülümseyen veya başını sallayan) 3-4 kişi seçin ve sadece onlarla sohbet ediyormuş gibi konuşun.</li>\\n</ul>\\n\\n<div style="margin:2rem 0;padding:1.5rem;background:#f5f3ff;border-radius:12px;border:1px solid #ede9fe;">\\n  <h4 style="margin-top:0;color:#6d28d9;">🎙️ Evde Ayna Karşısında Pratik</h4>\\n  <p style="margin-bottom:1rem;color:#4c1d95;">Topluluk karşısında hissedeceğiniz rahatlık, evdeki pratiğinizin kalitesiyle doğru orantılıdır. Ana sayfamızdaki "Kayıt Stüdyosu" ile konuşmanızı defalarca kaydedip analiz edin.</p>\\n  <a href="/" style="display:inline-block;background:#8b5cf6;color:white;padding:12px 24px;border-radius:8px;text-decoration:none;font-weight:bold;">Ses Kayıt Stüdyosuna Git →</a>\\n</div>`,
    faq: [
      { question: 'Sunum yaparken ellerimi nereye koyacağımı bilemiyorum.', answer: 'Ellerinizi cebinize sokmak (saygısızlık/gizleme), arkanızda bağlamak (otoriter/katı) veya göğsünüzde çaprazlamak (savunmacı) yerine, göbek deliği hizanızda açık bir şekilde serbest bırakın. Avuç içlerinizin hafifçe yukarı bakması güven hissi verir.' }
    ]
  },
  'hizli-konusma-sorunu': {
    title: 'Hızlı Konuşma Sorunu (Taşilali) Nasıl Düzeltilir? - Diksiyon Rehberi',
    desc: 'Hızlı konuştuğu için kelimeleri yutan, anlaşılamayan kişiler için konuşma hızını yavaşlatma, heceleme ve ritim kontrol egzersizleri.',
    h1: 'Hızlı Konuşma (Taşilali) Sorunu ve Yavaşlatma Egzersizleri',
    content: `Eğer çevrenizdeki insanlar sık sık "Ne dedin? Anlayamadım, biraz yavaşlar mısın?" diyorsa, muhtemelen Taşilali (Aşırı hızlı konuşma bozukluğu) sorunu yaşıyorsunuz demektir. Hızlı konuşan kişiler, zihinlerindeki düşünce hızı ile dudak kaslarının hızı uyuşmadığı için kelimelerin son harflerini yutar, heceleri birleştirir ve anlaşılmaz bir mırıldanmaya döner.\\n\\n<h3>Konuşma Hızınızı Düşürmek İçin 3 Altın Egzersiz:</h3>\\n<ol>\\n<li><strong>Ağzında Kalemle Okuma:</strong> Temiz bir kurşun kalemi yatay olarak dişlerinizin arasına ısırın (çok geriye değil, köpek dişleri hizasında). Bu halde bir kitabı yüksek sesle, abartılı dudak hareketleriyle ve YAVAŞÇA okumaya çalışın. Bu, dudak tembelliğini giderir. 5 dakika sonra kalemi çıkarıp aynı metni okuduğunuzda kelimelerin ne kadar net ve yavaş çıktığına inanamayacaksınız.</li>\\n<li><strong>Metronom İle Okuma:</strong> Konuşma ritminizi beyninize yeniden öğretmek için bir metronom uygulamasını 60 BPM (saniyede 1 vuruş) hızına ayarlayın. Bir kitaptan metin açın ve metronomun HANGİ VURUŞUNDA iseniz o heceyi söyleyin. "Bu-gün-ha-va-çok-gü-zel".</li>\\n<li><strong>Son Harfleri Vurgulama:</strong> Hızlı konuşanlar kelime sonlarını yutar. Bunu kırmak için her kelimenin son harfine ekstra baskı yaparak okuma pratikleri yapın (Örn: "GeliyoRRRRR", "BaktıMMMMM").</li>\\n</ol>\\n\\n<div style="margin:2rem 0;padding:1.5rem;background:#fef2f2;border-radius:12px;border:1px solid #fee2e2;">\\n  <h4 style="margin-top:0;color:#b91c1c;">🎙️ İnteraktif Ritim Egzersizleri</h4>\\n  <p style="margin-bottom:1rem;color:#7f1d1d;">Platformumuzda bulunan Görsel Ritim ve Heceleme araçları, hızlı konuşma alışkanlığınızı kırmak için özel olarak tasarlanmıştır.</p>\\n  <a href="/" style="display:inline-block;background:#ef4444;color:white;padding:12px 24px;border-radius:8px;text-decoration:none;font-weight:bold;">Ritim Çalışmalarına Git →</a>\\n</div>`,
    faq: [
      { question: 'Hızlı konuşmak zekanın bir göstergesi midir?', answer: 'Genellikle düşünce hızının konuşma hızından çok daha yüksek olması durumunda zihin, dudakları acele ettirir. Ancak dışarıdan bakıldığında hızlı konuşmak zeki görünmekten ziyade telaşlı, stresli ve özgüvensiz algılanmanıza yol açabilir.' }
    ]
  }
};

const defaultContentTemplate = (title, h1) => `<h3>${h1} İçin Pratik Bilgiler</h3>\\n<p>Etkili bir iletişim, ses tonunu, beden dilini ve doğru kelimeleri uyum içinde kullanmayı gerektirir. Diksiyonunuzu geliştirmek, hem profesyonel hem de sosyal hayatınızda özgüveninizi artırır. Kelimelerin doğru telaffuzu, asalak seslerden kurtulmak ve diyafram nefesi kullanmak, mükemmel bir diksiyonun temel anahtarlarıdır.</p>\\n\\n<h3>Nasıl Geliştirilir? Kendi Başınıza Yapabileceğiniz Egzersizler:</h3>\\n<ul>\\n<li><strong>Ayna Karşısında Pratik:</strong> Mimiklerinizi ve dudak hareketlerinizi gözlemleyin. Abartılı dudak hareketleriyle tekerleme okumak tembel kasları çalıştırır.</li>\\n<li><strong>Sesli Okuma Yapın:</strong> Her gün en az 10 sayfa kitabı, vurgu ve tonlamalara, noktalama işaretlerine harfiyen uyarak yüksek sesle okuyun.</li>\\n<li><strong>Nefes Kontrolü:</strong> Cümle ortasında değil, her cümlenin sonunda veya virgüllerde diyaframdan (karından) doğru nefes alma alışkanlığı edinin.</li>\\n</ul>\\n\\n<div style="margin:2rem 0;padding:1.5rem;background:#f8fafc;border-radius:12px;border:1px solid #e2e8f0;">\\n  <h4 style="margin-top:0;color:#334155;">🎙️ Ücretsiz Diksiyon ve Egzersiz Platformunu Keşfedin</h4>\\n  <p style="margin-bottom:1rem;color:#475569;">Günde sadece 15 dakika ayırarak sesinizi ve konuşmanızı baştan yaratın. Etkileşimli tekerlemeler, nefes animasyonları ve ses kaydedicisi tamamen ücretsiz.</p>\\n  <a href="/" style="display:inline-block;background:#3b82f6;color:white;padding:12px 24px;border-radius:8px;text-decoration:none;font-weight:bold;">Tüm Diksiyon Egzersizlerine Git →</a>\\n</div>`;

// Oku
let indexFile = fs.readFileSync('index.js', 'utf8');

// Dinamik olarak her metayı değiştir
Object.keys(richData).forEach(slug => {
  const meta = richData[slug];
  // Regex to match the existing key
  const regex = new RegExp(`'(${slug})': \\{[\\s\\S]*?\\}(,|\\n\\})`, 'g');
  
  if (indexFile.match(regex)) {
    const replacement = `'${slug}': ${JSON.stringify(meta, null, 4)}$2`;
    indexFile = indexFile.replace(regex, replacement);
  }
});

// Geri kalan (özel olarak yazmadığım) diğer TÜM slug'lara da zengin template ekleyelim
const match = indexFile.match(/const TOOLS_META = {([\s\S]*?)};\n\n\/\//);
if (match) {
  const allKeys = [...match[1].matchAll(/'([^']+)'\s*:/g)].map(m => m[1]);
  allKeys.forEach(slug => {
    if (!richData[slug]) {
      // Find its current content string and replace it
      const slugBlockRegex = new RegExp(`('${slug}': \\{[\\s\\S]*?)(,?\\n  \\})`, 'g');
      
      indexFile = indexFile.replace(slugBlockRegex, (fullMatch, p1, p2) => {
        if (p1.includes('<h3>')) return fullMatch; // Zaten zenginleştirilmiş
        
        // H1 değerini çıkar
        const h1Match = p1.match(/"h1": "(.*?)"/);
        const titleMatch = p1.match(/"title": "(.*?)"/);
        const h1 = h1Match ? h1Match[1] : 'Konuşma Sanatı';
        
        // Content kısmını değiştir
        let updated = p1.replace(/"content": "(.*?)"/s, () => {
          return `"content": ${JSON.stringify(defaultContentTemplate(titleMatch?titleMatch[1]:'', h1))}`;
        });
        
        // Eger FAQ yoksa ekle
        if (!updated.includes('"faq": [')) {
          const defaultFaq = `,
    "faq": [
      { "question": "${h1} için egzersizleri nerede bulabilirim?", "answer": "Ana sayfamızda yer alan Görsel Nefes, Tekerleme Arenası ve Ses Stüdyosu modüllerini kullanarak tamamen ücretsiz pratik yapabilirsiniz." },
      { "question": "Günde ne kadar pratik yapmalıyım?", "answer": "Kas hafızasının gelişmesi için her gün düzenli olarak 10-15 dakika sesli diksiyon pratiği yapmanız, haftada 1 kez 2 saat yapmanızdan çok daha etkilidir." }
    ]`;
          updated += defaultFaq;
        }
        
        return updated + p2;
      });
    }
  });
}

fs.writeFileSync('index.js', indexFile, 'utf8');
console.log('✅ Bütün TOOLS_META içerikleri zengin bilgi ve egzersiz yönlendirmeleri ile donatıldı!');
