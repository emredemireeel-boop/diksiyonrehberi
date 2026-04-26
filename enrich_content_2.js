const fs = require('fs');

// We will use actual newlines in template literals to avoid the \\n issue
const richData = {
  // 🎙️ Temel Diksiyon ve Nefes Eğitimleri
  'ses-ve-nefes-egitimi': {
    title: 'Ses ve Nefes Eğitimi: Diyafram Nefesi Nasıl Alınır? - Diksiyon Rehberi',
    desc: 'Doğru nefes alarak ses tellerini yormadan konuşma, diyafram nefesi teknikleri ve ses açma egzersizleri.',
    h1: 'Ses ve Nefes Eğitimi: Diyaframın Gücünü Kullanın',
    content: `Etkili ve pürüzsüz bir sesin en büyük sırrı doğru nefestir. Göğüs nefesi almak, konuşurken nefes nefese kalmanıza, sesinizin titremesine ve cümle sonlarında sesinizin kısılmasına neden olur. Diyafram nefesi ise sese güçlü bir destek sağlar.

<h3>Diyafram Nefesi Nasıl Alınır?</h3>
<ol>
<li><strong>Yatış Pozisyonu:</strong> Sırt üstü yere uzanın. Bir elinizi göğsünüze, diğer elinizi göbek deliğinizin üzerine koyun.</li>
<li><strong>Nefes Alma (Teneffüs):</strong> Burnunuzdan derin bir nefes alın. Göğsünüzdeki eliniz hiç hareket etmemeli, göbeğinizdeki eliniz yukarı doğru kalkmalıdır.</li>
<li><strong>Nefes Verme (Zefir):</strong> Aldığınız nefesi "Tıssss" veya "Şşşş" sesi çıkararak dudaklarınızın arasından yavaşça verin. Karnınızın içeri doğru indiğini hissedin.</li>
</ol>

<h3>Ses Açma ve Isınma Egzersizi:</h3>
<p>Konuşmaya veya sunuma başlamadan önce ses tellerini ısıtmak çok önemlidir. Dudaklarınızı gevşetin ve atların yaptığı gibi dudaklarınızı pırpırlatarak "Brrrrrr" sesi çıkarın. Bu sesi çıkarırken sesinizi inceden kalına, kalından inceye doğru dalgalandırın (Siren egzersizi).</p>

<div style="margin:2rem 0;padding:1.5rem;background:#f0fdf4;border-radius:12px;border:1px solid #bbf7d0;">
  <h4 style="margin-top:0;color:#166534;">🎙️ Diyafram Nefesi Animasyonunu Kullanın</h4>
  <p style="margin-bottom:1rem;color:#14532d;">Saniyelerle senkronize edilmiş görsel nefes alma modülümüzü kullanarak diyafram kasınızı her gün çalıştırın.</p>
  <a href="/" style="display:inline-block;background:#22c55e;color:white;padding:12px 24px;border-radius:8px;text-decoration:none;font-weight:bold;">Görsel Nefes Egzersizine Git →</a>
</div>`,
    faq: [
      { question: 'Konuşurken neden nefesim yetmiyor?', answer: 'Cümle ortasında sığ nefes aldığınız için veya nefesinizi kontrollü vermek yerine cümlenin başında tüm havayı boşalttığınız için nefesiniz yetmez. Diyafram kası havayı ekonomik kullanmanızı sağlar.' },
      { question: 'Ses kısıklığına ne iyi gelir?', answer: 'Ses teli yorgunluğuna en iyi gelen şey ses istirahatidir. Fısıldayarak konuşmak ses tellerini normal konuşmaktan daha fazla yorar. Bol ılık su içilmeli ve diyafram destekli konuşulmalıdır.' }
    ]
  },
  'sive-ve-aksan-duzeltme': {
    title: 'Şive ve Aksan Düzeltme Çalışmaları - Diksiyon Rehberi',
    desc: 'Yöresel şiveleri ve yabancı dil aksanını düzeltmek, standart İstanbul Türkçesi ile konuşmak için diksiyon çalışmaları.',
    h1: 'Şive (Ağız) ve Aksan Düzeltme Egzersizleri',
    content: `Türkiye'nin farklı yörelerinden gelen konuşma alışkanlıkları (ağız özellikleri) veya sonradan öğrenilen yabancı dillerin aksanları, profesyonel iş hayatında yanlış anlaşılmalara yol açabilir. Standart Türkiye Türkçesi (İstanbul ağzı) konuşabilmek için sesletim kurallarını öğrenmek gerekir.

<h3>Şive Düzeltmek İçin Temel Kurallar:</h3>
<ul>
<li><strong>E Sesinin Kullanımı:</strong> Yöresel ağızlarda en sık yapılan hata "e" sesinin kullanımındadır. Kapalı "e" (Kendi, Elli, Pencere) ve açık "e" (Gel, Sen, Ben) ayrımını yapmak şiveyi kırmada en önemli adımdır.</li>
<li><strong>Ğ Harfi Gerçeği:</strong> Standart Türkçede "Ğ" harfi hiçbir zaman telaffuz edilmez, sadece önceki ünlüyü uzatır. "Yağmur" kelimesi "Ya-mur" şeklinde değil, "Yaa-mur" şeklinde telaffuz edilmelidir.</li>
<li><strong>K Harfi İncelmesi:</strong> Özellikle doğu ağızlarında "K" ve "G" harfleri çok kalın söylenir. "Kağıt" kelimesi "Kâğıt" şeklinde, K harfi damağın daha ön kısmından çıkarılarak yumuşatılmalıdır.</li>
</ul>

<h3>Ayna ve Kalem Egzersizi:</h3>
<p>Şiveyi kırmak için dudak ve çene kaslarının tembelliğini gidermek şarttır. Dişlerinizin arasına yatay bir kalem yerleştirin ve her gün 10 dakika yüksek sesle haber metni okuyun. Bu, artikülasyon boğumlanma noktalarınızı standartlaştırır.</p>

<div style="margin:2rem 0;padding:1.5rem;background:#fdf4ff;border-radius:12px;border:1px solid #f5d0fe;">
  <h4 style="margin-top:0;color:#86198f;">🎙️ Tekerlemelerle Ağız Alışkanlıklarını Yıkın</h4>
  <p style="margin-bottom:1rem;color:#4a044e;">Yöresel kas hafızanızı kırmak için zorlayıcı tekerlemeleri kullanın. Özellikle E ve K harfi tekerlemeleri şive düzeltmede çok etkilidir.</p>
  <a href="/" style="display:inline-block;background:#d946ef;color:white;padding:12px 24px;border-radius:8px;text-decoration:none;font-weight:bold;">Tekerleme Egzersizlerine Git →</a>
</div>`,
    faq: [
      { question: 'Şivemi düzeltmek ne kadar sürer?', answer: 'Günlük 15 dakikalık ayna karşısında sesli okuma ve ses kaydı alarak dinleme yöntemiyle 2 ila 3 ay içinde kalıcı ve gözle görülür bir düzelme sağlanır.' }
    ]
  },
  'diksiyon-kurallari': {
    title: 'Diksiyon Kuralları Nelerdir? Konuşmanın Altın Kuralları - Diksiyon Rehberi',
    desc: 'Türkçe diksiyon kuralları, ünlü daralması, ulama ve vurgu teknikleri ile kelimeleri doğru telaffuz etme rehberi.',
    h1: 'Türkçe Diksiyonun Altın Kuralları',
    content: `Türkçe yazıldığı gibi okunan bir dil değildir. Mükemmel bir diksiyona sahip olmak için yazı dili ile konuşma dili arasındaki farkları (sesletim kurallarını) bilmek gerekir.

<h3>En Önemli 4 Diksiyon Kuralı:</h3>
<ol>
<li><strong>Ünlü Daralması (Yor Eki):</strong> Konuşma dilinde "yor" eki kendinden önceki geniş ünlüleri (a, e) daraltır (ı, i, u, ü). "Yapamayacağım" yazılır, "Yapamıcam" veya "Yapamııcam" şeklinde okunur. "Gelecek" yazılır, "Gelicek" okunur.</li>
<li><strong>Ulama (Liaison):</strong> Ünsüz harfle biten bir kelimeden sonra ünlü harfle başlayan bir kelime gelirse, iki kelime birbirine bağlanarak okunur. "Dün akşam" yerine "Dü-nakşam" şeklinde akıcı bir geçiş yapılır.</li>
<li><strong>Vurgu Sırrı:</strong> Türkçede kelime vurgusu genellikle son hecededir. Ancak yer adlarında (Ankara, İzmir) vurgu ilk heceye kayar. Zarf ve bağlaçlarda vurgu öne geçer.</li>
<li><strong>R Harfi Düşmesi:</strong> Günlük hızlı konuşmada ve yor ekinin sonunda R harfi genellikle yutulur veya çok hafif söylenir. "Geliyor" yerine "Geliyo" denmesi bir diksiyon hatası değil, doğal konuşma akışıdır (resmi spikerlik hariç).</li>
</ol>

<h3>Ulama Pratik Egzersizi:</h3>
<p>Şu cümleyi kelimeleri hiç koparmadan, tek bir kelimeymiş gibi okumaya çalışın: <em>"Meyvenin en olgununu alıp evden ayrıldı."</em> Okunuşu: Mey-ve-ni-ne-nol-gu-nu-nua-lı-pev-de-nay-rıl-dı.</p>`,
    faq: [
      { question: 'Yazıldığı gibi konuşmak hata mıdır?', answer: 'Evet, konuşma dilinde yazım kurallarını birebir uygulamak (örneğin "Geleceğim" kelimesini ge-le-ce-ğim diye okumak) robotik ve yapay bir hitabete neden olur.' }
    ]
  },
  'kelime-dagarcigini-gelistirmek': {
    title: 'Kelime Dağarcığını Geliştirmek İçin Ne Yapmalı? - Diksiyon Rehberi',
    desc: 'Konuşurken kelime bulamama sorununu çözmek, aktif kelime haznesini artırmak ve zengin bir Türkçe ile konuşmak için yöntemler.',
    h1: 'Kelime Dağarcığını Geliştirme Yolları',
    content: `Etkili konuşmanın önündeki en büyük engellerden biri "ııı", "şey", "yani" gibi asalak kelimelere sığınmaktır. Bunun temel nedeni zihninizdeki pasif kelime dağarcığını, aktif konuşma dilinize aktaramamaktır.

<h3>Aktif Kelime Haznesini Artırma Egzersizleri:</h3>
<ul>
<li><strong>Eş Anlamlılar Oyunu:</strong> Gün içinde sık kullandığınız "Güzel, İyi, Kötü, Çok" gibi basit kelimeleri tespit edin. Bunların yerine en az 3 farklı eş anlamlı kullanmaya kendinizi zorlayın (Örn: Muazzam, Şahane, Fevkalade, Nitelikli).</li>
<li><strong>1 Dakika Kesintisiz Konuşma:</strong> Odanızdaki rastgele bir eşyayı (örneğin bir bardak) seçin ve bu eşya hakkında duraksamadan, "şey" demeden 1 dakika boyunca konuşmaya çalışın. Bu beyindeki kelime bulma merkezini (Wernicke alanı) hızlandırır.</li>
<li><strong>Sesli Okuma Yapın:</strong> Kitapları içinizden okumak yerine sesli okuduğunuzda, yazarın kullandığı farklı ve zengin kelimeler doğrudan dilinizin ve dudaklarınızın motor hafızasına yerleşir.</li>
</ul>

<div style="margin:2rem 0;padding:1.5rem;background:#fef2f2;border-radius:12px;border:1px solid #fee2e2;">
  <h4 style="margin-top:0;color:#b91c1c;">🎙️ Okuma Egzersizleriyle Kelimeleri Keşfedin</h4>
  <p style="margin-bottom:1rem;color:#7f1d1d;">Zengin bir kelime dağarcığı için platformumuzdaki edebi okuma parçalarını sesli olarak okuyun ve kaydedin.</p>
  <a href="/" style="display:inline-block;background:#ef4444;color:white;padding:12px 24px;border-radius:8px;text-decoration:none;font-weight:bold;">Okuma Parçalarına Git →</a>
</div>`,
    faq: [
      { question: 'Kitap okuyorum ama konuşurken kelimeler aklıma gelmiyor, neden?', answer: 'Çünkü okumak pasif, konuşmak aktif bir eylemdir. Öğrendiğiniz kelimeleri aktif olarak cümle içinde (sesli olarak) kullanmazsanız zihniniz o kelimeleri konuşma anında geri çağıramaz.' }
    ]
  },
  
  // 👔 Mesleki & Liderlik Diksiyon Eğitimleri
  'spikerlik-ve-sunuculuk-diksiyonu': {
    title: 'Spikerlik ve Sunuculuk Diksiyonu Eğitimi - Diksiyon Rehberi',
    desc: 'Haber spikeri ve profesyonel sunucu olmak isteyenler için ileri düzey diksiyon, nefes ve kamera önü konuşma teknikleri.',
    h1: 'Spikerlik ve Sunuculuk Diksiyon Egzersizleri',
    content: `TRT spikerlerinin veya profesyonel televizyon sunucularının o pürüzsüz ve otoriter sesine ulaşmak tesadüf değildir. İleri seviye metin okuma, tonlama ve diyafram kullanımı medya sektörünün temel gerekliliğidir.

<h3>Haber Spikerliği Temel Teknikleri:</h3>
<ul>
<li><strong>Haber Vurgusu:</strong> Haber metinlerinde duygusal iniş çıkışlar yapılmaz. Nesnellik ön plandadır. Cümleler genelde tok bir sesle başlar ve sesin enerjisi cümle sonunda düşürülmez (havada asılı bırakılmaz), net bir şekilde bitirilir.</li>
<li><strong>Prompter Okuma:</strong> Kamera ışığına bakarken metni göz ucuyla okumak özel bir beceridir. Gözleriniz kelimelerin üzerinde kayarken, başınızı sağa sola oynatmamalı, sadece göz bebeklerinizle satırları takip etmelisiniz.</li>
<li><strong>Artikülasyon Keskinliği:</strong> Spikerlerin kelimeleri cam gibi nettir. Bunun için her gün kalem egzersizi ve zorlu tekerleme pratikleri yaparlar.</li>
</ul>

<h3>Evde Spikerlik Egzersizi:</h3>
<p>Bir haber sitesinden bir paragraf seçin. Telefonunuzun kamerasını açın ve kendinizi kaydedin. Metni okurken göz temasınızı olabildiğince kamerada tutmaya çalışın. Kelimelerin son harflerini yutmadığınızdan ve cümlenin sonunda nefesinizin tükenmediğinden emin olun.</p>

<div style="margin:2rem 0;padding:1.5rem;background:#fff7ed;border-radius:12px;border:1px solid #ffedd5;">
  <h4 style="margin-top:0;color:#c2410c;">🎙️ Profesyonel Teleprompter Kullanın</h4>
  <p style="margin-bottom:1rem;color:#7c2d12;">Sistemimizde yer alan haber metinlerini akıcı bir şekilde okuyarak kamera önü spikerlik pratiği yapabilirsiniz.</p>
  <a href="/" style="display:inline-block;background:#f97316;color:white;padding:12px 24px;border-radius:8px;text-decoration:none;font-weight:bold;">Teleprompter Aracına Git →</a>
</div>`,
    faq: [
      { question: 'Spiker olmak için ses rengi önemli mi?', answer: 'Sesin tınısı (ince veya kalın olması) önemlidir ancak diksiyon kurallarına uymak, tonlama ve vurguları doğru yapmak ses renginden çok daha kritiktir. Eğitimle sesinizin en iyi versiyonunu bulabilirsiniz.' }
    ]
  },
  'mulakat-diksiyonu': {
    title: 'İş Görüşmesi ve Mülakatlarda Etkili Diksiyon - Diksiyon Rehberi',
    desc: 'İş mülakatlarında ikna edici konuşma, heyecan kontrolü, doğru beden dili ve profesyonel diksiyon stratejileri.',
    h1: 'Mülakat Diksiyonu: İş Görüşmelerinde Etkileyici Konuşma',
    content: `İş görüşmelerinde (mülakatlarda) özgeçmişiniz (CV) kadar kendinizi nasıl ifade ettiğiniz de değerlendirilir. Sesinizin tonu, kelime seçimleriniz ve beden diliniz özgüveninizin birer yansımasıdır.

<h3>Mülakatlarda Dikkat Edilmesi Gereken 4 Diksiyon Kuralı:</h3>
<ol>
<li><strong>Asalak Kelimeleri Terk Edin:</strong> "Hııım, eee, yani, açıkçası" gibi kelimeler mülakatçıda kararsızlık hissi uyandırır. Düşünürken ses çıkarmak yerine 1-2 saniye GÜÇLÜ BİR ES (sessizlik) verin. Sessizlik karizmadır.</li>
<li><strong>Sesinizin Gücünü Düşürmeyin:</strong> Cümleye güçlü başlayıp son kelimeleri fısıltı gibi yutmayın. "Ben bu projeyi çok başarılı bir şekilde... (fısıltı) yönettim" derseniz etkiniz kaybolur. Diyaframdan konuşarak cümlenin sonunu net bitirin.</li>
<li><strong>Pozitif Kelimeler Seçin:</strong> Negatif kökleri ("yapamam", "bilmiyorum", "sorun") kullanmak yerine çözüm odaklı kelimeler ("öğrenebilirim", "fırsat", "geliştirebilirim") tercih edin.</li>
<li><strong>Hızınızı %20 Düşürün:</strong> Heyecanlandığımızda otomatik olarak daha hızlı konuşuruz. Normal konuşma hızınızı bilinçli olarak yavaşlatın. Bu karşı tarafa "Kendime ve anlattıklarıma güveniyorum" mesajı verir.</li>
</ol>

<h3>Mülakat Öncesi Ses Isıtma Egzersizi:</h3>
<p>Mülakat odasına girmeden 5 dakika önce dudaklarınızı gerdirerek uzun bir "Mmmmmm" sesi çıkarın (dişler bitişik, dudaklar kapalı). Yüzünüzde ve dudaklarınızda oluşan titreşim sesinizi maskeden (yüzden) çıkarmanızı ve daha otoriter bir tona ulaşmanızı sağlayacaktır.</p>`,
    faq: [
      { question: 'Mülakatta sesim titrerse ne yapmalıyım?', answer: 'Sesinizin titrediğini hissettiğiniz an konuşmayı çok kısa (1 saniye) durdurun. Burnunuzdan hızlıca karnınızı şişirerek bir diyafram nefesi alın ve kelimelere biraz daha fazla baskı (vurgu) yaparak devam edin.' }
    ]
  },

  // 🎼 Ses Rengi ve Estetiği
  'ses-kalinlastirma-egzersizleri': {
    title: 'Ses Kalınlaştırma (Pesleştirme) Egzersizleri - Diksiyon Rehberi',
    desc: 'Tiz ve ince seslerden kurtulmak, sesi daha kalın, tok ve otoriter bir pes tona çekmek için diyafram ve rezonans çalışmaları.',
    h1: 'Ses Kalınlaştırma ve Toklaştırma (Pes Ses) Egzersizleri',
    content: `İnce (tiz) bir sese sahip olmak genellikle ses tellerinin fiziksel yapısından değil, sesin rezonans (yankı) boşluklarını yanlış kullanmaktan ve göğüs nefesi almaktan kaynaklanır. Sesinizi boğazınızda sıkıştırırsanız ince çıkar; göğüs kafesinizde ve maskenizde (yüz kemiklerinde) yankılandırırsanız çok daha kalın (pes) ve tok çıkar.

<h3>Sesi Kalınlaştırmak İçin 3 Etkili Yöntem:</h3>
<ul>
<li><strong>Diyafram Desteği (Temel Şart):</strong> Kalın bir sesin yakıtı güçlü bir hava akımıdır. Omuzları kaldırarak göğüsten alınan sığ nefes, sesi boğaza hapseder. Derin karın nefesi alın, konuşurken havanın göğüs kafesinizden yukarı doğru geniş bir borudan çıkıyormuş gibi hissetmesini sağlayın.</li>
<li><strong>Göğüs Rezonansı Egzersizi:</strong> Elinizi göğsünüzün ortasına (iman tahtası) koyun. Derin bir nefes alıp, çok düşük bir perdeyle (kalın) uzun bir "Haaaaaaa" veya "Mmmmmm" sesi çıkarın. Göğüs kemiğinizin titrediğini hissetmelisiniz. Eğer titremiyorsa sesi boğazınızda sıkıştırıyorsunuz demektir.</li>
<li><strong>Çene ve Gırtlak Gevşetme:</strong> Esneme hareketi yapın. Esnediğinizde boğazınızın (gırtlağınızın) nasıl aşağı indiğini ve açıldığını fark edin. Konuşurken gırtlağınızı esneme pozisyonuna yakın, açık ve rahat tutmaya çalışırsanız sesiniz doğal olarak kalınlaşacaktır.</li>
</ul>

<h3>Kısa Uygulama: "Göğüsten Gelen Vurmalı Sesler"</h3>
<p>Her sabah 5 dakika boyunca şu heceleri göğsünüzde titreşim hissederek pes perdeden okuyun: BOM, BUM, DON, DÜM, GONG. Bu heceleri okurken çenenizi aşağı doğru iyice gevşetin.</p>

<div style="margin:2rem 0;padding:1.5rem;background:#f8fafc;border-radius:12px;border:1px solid #e2e8f0;">
  <h4 style="margin-top:0;color:#334155;">🎙️ Ses Tonunuzu Stüdyoda Analiz Edin</h4>
  <p style="margin-bottom:1rem;color:#475569;">Uygulamalarımız üzerinden ses kaydınızı alarak, her geçen gün sesinizin daha tok ve pes bir yapıya oturup oturmadığını dinleyerek kontrol edebilirsiniz.</p>
  <a href="/" style="display:inline-block;background:#3b82f6;color:white;padding:12px 24px;border-radius:8px;text-decoration:none;font-weight:bold;">Ses Stüdyosuna Git →</a>
</div>`,
    faq: [
      { question: 'Sesim yaş ilerledikçe kendi kendine kalınlaşır mı?', answer: 'Evet, özellikle ergenlik döneminde ses telleri kalınlaşır. Ancak yetişkinlikte sesinizin ince çıkmasının nedeni yanlış kullanım alışkanlıklarıdır. Rezonans egzersizleriyle sesinizi kalıcı olarak daha tok bir perdede konumlandırabilirsiniz.' }
    ]
  },
  'ozguvenli-konusma-teknikleri': {
    title: 'Özgüvenli Konuşma Teknikleri ve Beden Dili - Diksiyon Rehberi',
    desc: 'Ortamlarda dinlenmek, saygı görmek ve fikirlerinizi net bir şekilde ifade etmek için özgüvenli konuşma ve duruş stratejileri.',
    h1: 'Özgüvenli ve Otoriter Konuşma Stratejileri',
    content: `Özgüvenli konuşmak, yüksek sesle bağırmak veya çok fazla konuşmak demek değildir. Özgüven, ne zaman konuşacağınızı, nasıl duracağınızı ve sesinizin gücünü doğru ayarlamayı bilmektir.

<h3>Özgüvenli Konuşmacıların 4 Sırrı:</h3>
<ol>
<li><strong>Aşağı Doğru İnen Tonlama (Otorite Tonu):</strong> Soru sormadığınız sürece cümlelerinizin sonunu yukarı doğru (inceye doğru) bitirmeyin. Cümleleri aşağı doğru, tok ve kesin bir tonla bitirmek "Ben bu söylediğimden eminim" mesajı verir.</li>
<li><strong>Göz Teması Kurun ve Kaçırmayın:</strong> Konuşurken yere, tavana veya etrafa bakmak özgüven eksikliğinin net belirtisidir. Karşınızdakinin gözlerine (veya iki kaşının ortasına) bakarak konuşun.</li>
<li><strong>Sessizliğe Tahammül Edin:</strong> Sorulan bir soruya anında, telaşla cevap vermek zorunda değilsiniz. Soruyu dinleyin, 2 saniye göz teması kurarak bekleyin ve ardından sakince cevap verin. Sessiz kalabilmek büyük bir özgüven göstergesidir.</li>
<li><strong>Postür (Duruş):</strong> Omuzlarınız çökük, göğsünüz kapalıyken çıkan ses her zaman zayıftır. Omuzlarınızı geriye atın, göğüs kafesinizi açın. Bu duruş hem sesinize güç katar hem de beyninize güven sinyalleri gönderir.</li>
</ol>

<h3>Özgüven Egzersizi: Duruş ve Okuma</h3>
<p>Dik bir şekilde ayakta durun. Ellerinizi belinize koyun. "Ben, bugün burada, kendi fikirlerimi net bir şekilde ifade edeceğim." cümlesini, her kelimeye vurgu yaparak, kalın (pes) bir tonla yüksek sesle 5 kez tekrar edin.</p>`,
    faq: [
      { question: 'Sesim çok kısık çıkıyor, kimse beni duymuyor, ne yapmalıyım?', answer: 'Sesi içeride tutmak genellikle psikolojik bir kendini geri çekme durumudur. Sesi ileri fırlatmak (projeksiyon) için diyafram nefesi alıp, sesinizi odanın en köşesindeki duvara çarptırdığınızı hayal ederek konuşma pratikleri yapmalısınız.' }
    ]
  }
};

// Index.js dosyasını oku
let indexFile = fs.readFileSync('index.js', 'utf8');

// Dinamik olarak richData içindeki yeni meta içeriklerini index.js'e yerleştir
Object.keys(richData).forEach(slug => {
  const meta = richData[slug];
  
  // Orijinal dosyada bu slug'a ait objeyi bul
  // Not: Doğru regex kullanıyoruz ki süslü parantez kapanışına kadar her şeyi alsın
  const regex = new RegExp(`'(${slug})': \\{[\\s\\S]*?\\}(,|\\n\\})`, 'g');
  
  if (indexFile.match(regex)) {
    
    // JS objesi oluşturma
    const contentStr = meta.content.replace(/\n/g, '\\n').replace(/"/g, '\\"'); 
    
    const replacement = `'${slug}': {
    "title": "${meta.title}",
    "desc": "${meta.desc}",
    "h1": "${meta.h1}",
    "content": "${contentStr}",
    "faq": ${JSON.stringify(meta.faq, null, 8).trim()}
}$2`;

    indexFile = indexFile.replace(regex, replacement);
  }
});

fs.writeFileSync('index.js', indexFile, 'utf8');
console.log('✅ 2. Parti Zengin İçerikler (Egzersizler ve SSS) başarıyla eklendi!');
