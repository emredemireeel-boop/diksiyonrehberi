/* Retorik Exercises - Dynamic Renderer */
(function(){
'use strict';

const EX = [
  // ETHOS
  {id:'e1',cat:'ethos',icon:'🛡️',num:'E1',badge:'Başlangıç',badgeCls:'ret-badge-beginner',
   title:'Güvenilirlik İnşası',desc:'Bir konuşmacı olarak güvenilirliğinizi nasıl kurarsınız? Ethos, dinleyicinin size olan inancıdır.',
   steps:['Kendinizi tanıtırken uzmanlık alanınızı belirtin','Kişisel deneyimlerinizden somut örnekler verin','Dürüstçe bilmediğiniz konuları kabul edin'],
   quiz:{q:'Ethos\'un temel amacı nedir?',opts:['Dinleyiciyi ağlatmak','Konuşmacıya güven oluşturmak','İstatistik sunmak','Ses tonunu ayarlamak'],correct:1,
   ok:'Ethos, konuşmacının karakter ve güvenilirliğiyle ilgilidir.',fail:'Ethos güvenilirlik demektir.'},
   scenario:{label:'Senaryo',text:'Bir iş toplantısında yeni projenizi sunuyorsunuz. Ekip üyeleri sizi tanımıyor.',analysis:'Bu durumda önce kısa özgeçmişinizi paylaşın, sonra benzer projelerdeki başarılarınızdan bahsedin.'},
   practice:'Kendinizi 60 saniyede tanıtan bir konuşma yazın. Uzmanlığınızı ve deneyiminizi vurgulayın.'},
  {id:'e2',cat:'ethos',icon:'🛡️',num:'E2',badge:'Orta',badgeCls:'ret-badge-intermediate',
   title:'Otorite ve Alçakgönüllülük Dengesi',desc:'Çok kibirli görünmeden otorite kurmak retorik ustalığı gerektirir.',
   steps:['Başarılarınızı ekip çalışması olarak sunun','Öğrenme sürecinizden bahsedin','Dinleyicinin bilgisine saygı gösterin'],
   quiz:{q:'Hangisi Ethos\'u güçlendirir?',opts:['Rakibi küçümsemek','Hataları kabul edip ders çıkarmak','Sadece başarıları anlatmak','Teknik jargon kullanmak'],correct:1,
   ok:'Hata kabul etmek güvenilirliği artırır.',fail:'Hataları kabul etmek Ethos\'u güçlendirir.'},
   scenario:{label:'Senaryo',text:'Bir panel tartışmasında karşı taraf sizi eleştirdi.',analysis:'Eleştiriyi kabul edip, kendi görüşünüzü sakin ve kanıtlarla destekleyin.'},
   practice:'Bir hata yaptığınız durumu anlatıp, bundan ne öğrendiğinizi yazın.'},
  {id:'e3',cat:'ethos',icon:'🛡️',num:'E3',badge:'İleri',badgeCls:'ret-badge-advanced',
   title:'Ortak Değer Yaratma',desc:'Dinleyicinizle ortak zemin bulmak, iknanın ilk adımıdır.',
   steps:['Dinleyici kitlenizi araştırın','Ortak değerleri ve endişeleri belirleyin','Konuşmanıza "biz" diliyle başlayın'],
   quiz:{q:'"Biz" dili neden etkilidir?',opts:['Daha uzun cümleler kurar','Birlik ve aidiyet hissi yaratır','Konuşmacıyı gizler','Gramer kuralıdır'],correct:1,
   ok:'"Biz" dili topluluk duygusu yaratır.',fail:'"Biz" dili birlik hissi yaratır.'},
   scenario:{label:'Senaryo',text:'Farklı departmanlardan bir ekibe ortak proje sunuyorsunuz.',analysis:'"Hepimizin ortak hedefi..." ile başlayarak birleştirici bir dil kullanın.'},
   practice:'Farklı bir gruba hitap eden, ortak değerleri vurgulayan bir açılış paragrafı yazın.'},

  // PATHOS
  {id:'p1',cat:'pathos',icon:'❤️',num:'P1',badge:'Başlangıç',badgeCls:'ret-badge-beginner',
   title:'Hikaye Anlatımı (Storytelling)',desc:'İnsanlar istatistikleri unutur ama hikayeleri hatırlar. Pathos\'un en güçlü aracı hikayedir.',
   steps:['Kişisel bir deneyim seçin','Duyusal detaylar ekleyin (ne gördünüz, duydunuz?)','Duygusal dönüm noktasını belirleyin','Hikayeyi mesajınıza bağlayın'],
   quiz:{q:'Etkili bir hikayenin temel unsuru nedir?',opts:['Uzun olması','Duygusal dönüm noktası','Çok karakter içermesi','Kronolojik sıra'],correct:1,
   ok:'Duygusal dönüm noktası hikayeyi unutulmaz kılar.',fail:'Duygusal dönüm noktası anahtardır.'},
   scenario:{label:'Senaryo',text:'Bir bağış kampanyası için konuşma yapıyorsunuz.',analysis:'Soyut rakamlar yerine, yardım edilmiş bir kişinin hikayesini anlatın.'},
   practice:'Hayatınızda sizi derinden etkileyen bir anı 5 cümlede anlatın.'},
  {id:'p2',cat:'pathos',icon:'❤️',num:'P2',badge:'Orta',badgeCls:'ret-badge-intermediate',
   title:'Empati Köprüsü Kurma',desc:'Dinleyicinin duygularını anlamak ve yansıtmak, güçlü bir bağ oluşturur.',
   steps:['Dinleyicinin endişelerini dile getirin','Onların perspektifinden bakın','Duygularını doğrulayın'],
   quiz:{q:'Empati ile sempati arasındaki fark nedir?',opts:['Aynı şeylerdir','Empati anlamak, sempati acımaktır','Sempati daha güçlüdür','Empati sadece tıpta kullanılır'],correct:1,
   ok:'Empati karşıdakini anlamak, sempati ise acımaktır.',fail:'Empati anlamak, sempati acımak demektir.'},
   scenario:{label:'Senaryo',text:'Çalışanlarınıza kötü bir haberi (maaş kesintisi) iletmeniz gerekiyor.',analysis:'"Bu haberin sizin için ne kadar zor olduğunu biliyorum" ile başlayın.'},
   practice:'Zor bir haber veren ama empatik kalan bir konuşma taslağı yazın.'},
  {id:'p3',cat:'pathos',icon:'❤️',num:'P3',badge:'İleri',badgeCls:'ret-badge-advanced',
   title:'Duygusal Zirve ve Çözüm',desc:'Konuşmanızda duygusal gerilimi artırıp, çözümle taçlandırma tekniği.',
   steps:['Problemi canlı şekilde betimleyin','Gerilimi kademeli artırın','Çözümü umut dolu şekilde sunun'],
   quiz:{q:'Duygusal zirve neden önemlidir?',opts:['Dinleyiciyi üzmek için','Harekete geçirici güç yaratır','Konuşmayı uzatır','Sadece politikada kullanılır'],correct:1,
   ok:'Duygusal zirve, dinleyiciyi eyleme geçmeye motive eder.',fail:'Duygusal zirve harekete geçirir.'},
   scenario:{label:'Senaryo',text:'Çevre kirliliğine karşı bir kampanya konuşması hazırlıyorsunuz.',analysis:'Önce kirliliğin çocuklar üzerindeki etkisini anlatın, sonra çözüm planınızı sunun.'},
   practice:'Problem → Gerilim → Çözüm yapısında kısa bir konuşma yazın.'},

  // LOGOS
  {id:'l1',cat:'logos',icon:'🧠',num:'L1',badge:'Başlangıç',badgeCls:'ret-badge-beginner',
   title:'Veri ile İkna',desc:'Rakamlar ve istatistikler, argümanınızın omurgasını oluşturur.',
   steps:['Güvenilir kaynaktan veri bulun','Veriyi bağlam içinde sunun','Karşılaştırma yaparak anlamlı kılın'],
   quiz:{q:'Veri sunarken en önemli kural nedir?',opts:['Çok sayıda veri kullanmak','Veriyi bağlamla anlamlı kılmak','En büyük sayıyı seçmek','Kaynağı gizlemek'],correct:1,
   ok:'Bağlam olmadan veri anlamsızdır.',fail:'Veri bağlamla anlamlı olur.'},
   scenario:{label:'Senaryo',text:'Şirketinizin büyüme oranını sunuyorsunuz: %12 büyüme.',analysis:'"Sektör ortalaması %4 iken biz %12 büyüdük" demek çok daha etkilidir.'},
   practice:'Bir istatistiği 3 farklı bağlamda sunarak etkisini artırın.'},
  {id:'l2',cat:'logos',icon:'🧠',num:'L2',badge:'Orta',badgeCls:'ret-badge-intermediate',
   title:'Neden-Sonuç Zinciri',desc:'Mantıksal neden-sonuç ilişkileri kurarak argümanınızı güçlendirin.',
   steps:['Temel iddiayı belirleyin','Her adımı nedensellikle bağlayın','Alternatif açıklamaları ele alın'],
   quiz:{q:'Hangisi geçerli bir neden-sonuç ilişkisidir?',opts:['Dondurma satışı arttı, boğulma vakaları arttı → dondurma boğulma yapar','Eğitim seviyesi artar → iş fırsatları artar','Ayakkabı numarası büyük → zeki','Kedi sahiplenmek → başarılı olmak'],correct:1,
   ok:'Eğitim-iş ilişkisi kanıtlanmış nedensellik taşır.',fail:'Eğitim-iş fırsatı gerçek nedensellik taşır.'},
   scenario:{label:'Senaryo',text:'Uzaktan çalışma politikası için yönetimi ikna ediyorsunuz.',analysis:'Verimlilik verileri → çalışan memnuniyeti → düşük istifa oranı zincirini kurun.'},
   practice:'Bir konuda 3 aşamalı neden-sonuç zinciri oluşturun.'},
  {id:'l3',cat:'logos',icon:'🧠',num:'L3',badge:'İleri',badgeCls:'ret-badge-advanced',
   title:'Karşı Argümanı Çürütme',desc:'Rakibin argümanını tanıyıp sistematik olarak çürütmek.',
   steps:['Karşı argümanı doğru şekilde özetleyin','Zayıf noktalarını belirleyin','Kanıtlarla çürütün','Kendi argümanınızı güçlendirin'],
   quiz:{q:'Karşı argümanı ele almanın faydası nedir?',opts:['Rakibi kızdırır','Güvenilirliğinizi artırır','Konuşmayı uzatır','Gereksizdir'],correct:1,
   ok:'Karşı görüşü ele almak entelektüel dürüstlük gösterir.',fail:'Karşı argümanı ele almak güvenilirliği artırır.'},
   scenario:{label:'Senaryo',text:'"Yapay zeka işsizlik yaratacak" argümanını çürütmeniz gerekiyor.',analysis:'İstatistiklerle yeni iş alanları oluştuğunu gösterin, tarihsel örnekler verin.'},
   practice:'Bir argümanı ve onun karşıtını yazıp, çürütme paragrafı oluşturun.'},

  // KONUŞMA YAZIMI
  {id:'y1',cat:'yazim',icon:'✍️',num:'Y1',badge:'Başlangıç',badgeCls:'ret-badge-beginner',
   title:'Kanca Cümleler',desc:'İlk 30 saniye dinleyicinin kalıp kalmayacağını belirler. Güçlü açılışlar yazın.',
   steps:['Şok edici bir istatistikle açın','Provokatif bir soru sorun','Kısa bir anekdot anlatın'],
   quiz:{q:'En etkili açılış tekniği hangisidir?',opts:['Kendini tanıtmak','Şok edici bir soru sormak','Teşekkür etmek','Ajandayı okumak'],correct:1,
   ok:'Provokatif sorular anında dikkat çeker.',fail:'Sorular dinleyiciyi düşündürür ve bağlar.'},
   scenario:{label:'Senaryo',text:'TED tarzı bir konuşma yapıyorsunuz.',analysis:'"Ya size tüm bildiklerinizin yanlış olduğunu söylesem?" gibi bir kanca kullanın.'},
   practice:'Aynı konu için 3 farklı kanca cümlesi yazın.'},
  {id:'y2',cat:'yazim',icon:'✍️',num:'Y2',badge:'Orta',badgeCls:'ret-badge-intermediate',
   title:'Üçlü Yapı (Trikolon)',desc:'Üçlü tekrar, konuşmanın ritmini ve hatırlanabilirliğini artırır.',
   steps:['Ana mesajınızı 3 kelimeyle özetleyin','Her bölümü paralel yapıda kurun','Üçüncü öğeyi en güçlü yapın'],
   quiz:{q:'"Geldim, gördüm, yendim" hangi tekniktir?',opts:['Metafor','Anafor','Trikolon','Hiperbole'],correct:2,
   ok:'Trikolon - üçlü paralel yapı.',fail:'Bu klasik bir trikolon örneğidir.'},
   scenario:{label:'Senaryo',text:'Bir ürün lansmanı konuşması hazırlıyorsunuz.',analysis:'"Daha hızlı, daha güçlü, daha akıllı" gibi trikolon kullanın.'},
   practice:'3 farklı konuda trikolon cümleleri oluşturun.'},
  {id:'y3',cat:'yazim',icon:'✍️',num:'Y3',badge:'İleri',badgeCls:'ret-badge-advanced',
   title:'Güçlü Kapanış',desc:'Son sözleriniz dinleyicinin aklında kalır. Unutulmaz bir kapanış yazın.',
   steps:['Ana mesajı özetleyen tek cümle yazın','Eyleme çağrı (call to action) ekleyin','Açılışa geri dönüş yapın (çerçeveleme)'],
   quiz:{q:'Etkili kapanışta ne yapılmalı?',opts:['Özür dilemek','Yeni konulara girmek','Eyleme çağrı yapmak','Sessizce inmek'],correct:2,
   ok:'Kapanışta dinleyiciyi harekete geçirin.',fail:'Eyleme çağrı en etkili kapanış tekniğidir.'},
   scenario:{label:'Senaryo',text:'Mezuniyet konuşması yapıyorsunuz.',analysis:'Açılıştaki hikayeye geri dönüp geleceğe bağlayın.'},
   practice:'Bir konuşma için açılış ve kapanış paragraflarını birbirine bağlayarak yazın.'},

  // RETORİK FİGÜRLERİ
  {id:'f1',cat:'figurler',icon:'🎭',num:'F1',badge:'Başlangıç',badgeCls:'ret-badge-beginner',
   title:'Anafor ve Tekrar',desc:'Cümle başlarında aynı kelimeyi tekrarlayarak ritim ve vurgu oluşturma.',
   steps:['Vurgulamak istediğiniz kavramı seçin','Her cümleye aynı kelimeyle başlayın','Kademeli güçlendirin'],
   quiz:{q:'"Her gün çalışırız. Her gün öğreniriz. Her gün büyürüz." Bu hangi figürdür?',opts:['Metafor','Anafor','Antitez','İroni'],correct:1,
   ok:'Anafor - cümle başlarında tekrar.',fail:'Cümle başı tekrarı anafora denir.'},
   scenario:{label:'Senaryo',text:'Motivasyon konuşması hazırlıyorsunuz.',analysis:'"Vazgeçmeyeceğiz. Vazgeçmeyeceğiz. Vazgeçmeyeceğiz." tekrarı kullanın.'},
   practice:'Bir konu etrafında 4 cümlelik anafor yazın.'},
  {id:'f2',cat:'figurler',icon:'🎭',num:'F2',badge:'Orta',badgeCls:'ret-badge-intermediate',
   title:'Antitez ve Zıtlık',desc:'Zıt kavramları yan yana koyarak güçlü kontrast yaratma.',
   steps:['İki zıt fikri belirleyin','Paralel cümle yapısı kurun','Zıtlığı vurgulayan kelimeler seçin'],
   quiz:{q:'"Küçük bir adım insanlık için, dev bir sıçrama insanlık için." Bu hangi figürdür?',opts:['Anafor','Metafor','Antitez','Trikolon'],correct:2,
   ok:'Antitez - zıt kavramların karşılaştırılması.',fail:'Küçük/dev zıtlığı antitez yaratır.'},
   scenario:{label:'Senaryo',text:'Değişim yönetimi sunumu yapıyorsunuz.',analysis:'"Dün neredeydik, yarın nerede olacağız" antitezini kullanın.'},
   practice:'3 farklı antitez cümlesi yazın.'},
  {id:'f3',cat:'figurler',icon:'🎭',num:'F3',badge:'İleri',badgeCls:'ret-badge-advanced',
   title:'Metafor Yaratıcılığı',desc:'Soyut kavramları somut imgelere dönüştürerek anlama derinlik katma.',
   steps:['Soyut kavramı belirleyin','Somut bir imge bulun','İkisi arasında köprü kurun'],
   quiz:{q:'"Bilgi bir denizdir ve biz dalgıçlarız." Bu hangi figürdür?',opts:['Benzetme (simile)','Metafor','Metonimi','Kişileştirme'],correct:1,
   ok:'Metafor - doğrudan özdeşleştirme.',fail:'Bu bir metafordur - bilgi=deniz.'},
   scenario:{label:'Senaryo',text:'Takım çalışmasının önemini anlatıyorsunuz.',analysis:'"Bir orkestra gibi, her enstrüman tek başına güzeldir ama senfoni birlikte çıkar."'},
   practice:'3 farklı iş kavramı için özgün metaforlar oluşturun.'},

  // KONUŞMA ANALİZİ
  {id:'a1',cat:'analiz',icon:'🔍',num:'A1',badge:'Başlangıç',badgeCls:'ret-badge-beginner',
   title:'MLK "I Have a Dream" Analizi',desc:'Martin Luther King Jr.\'ın efsanevi konuşmasındaki retorik teknikleri keşfedin.',
   steps:['Konuşmadaki anafor kullanımını bulun','Pathos öğelerini tespit edin','Logos ve Ethos dengesi analiz edin'],
   quiz:{q:'MLK konuşmasında hangi teknik baskındır?',opts:['Sadece Logos','Sadece Ethos','Pathos ağırlıklı, üçü birlikte','Sadece veri'],correct:2,
   ok:'MLK üç sütunu ustalıkla birleştirmiştir.',fail:'MLK tüm retorik sütunları ustaca kullanır.'},
   scenario:{label:'Alıntı',text:'"Bir hayalim var ki, dört küçük çocuğum bir gün ten renklerine göre değil, karakterlerine göre yargılanacakları bir ülkede yaşayacak."',analysis:'Pathos (çocuklar), Logos (eşitlik argümanı) ve Ethos (ahlaki otorite) bir arada.'},
   practice:'Bu alıntıdaki Ethos, Pathos ve Logos öğelerini ayrı ayrı yazın.'},
  {id:'a2',cat:'analiz',icon:'🔍',num:'A2',badge:'Orta',badgeCls:'ret-badge-intermediate',
   title:'Steve Jobs Stanford Konuşması',desc:'Jobs\'ın 2005 Stanford mezuniyet konuşmasını retorik açıdan inceleyin.',
   steps:['3 hikaye yapısını analiz edin','Basitlik tekniğini inceleyin','Kapanıştaki çağrıyı değerlendirin'],
   quiz:{q:'Jobs "Stay hungry, stay foolish" ile ne yapmıştır?',opts:['Veri sunmuştur','Paradoks yaratmıştır','Antitez kullanmıştır','Metafor kurmuştur'],correct:1,
   ok:'Paradoks - aç kal ve aptal kal, beklenmedik bir çağrı.',fail:'Bu bir paradoks - beklenenin tersini söyleyerek etki yaratır.'},
   scenario:{label:'Alıntı',text:'"Zamanınız sınırlı, bu yüzden başkasının hayatını yaşayarak onu harcamayın."',analysis:'Logos (zaman sınırlı - mantıksal öncül) + Pathos (hayatınızı yaşayın - duygusal çağrı).'},
   practice:'Bu konuşmadaki 3 hikayenin her birinin amacını analiz edin.'},
  {id:'a3',cat:'analiz',icon:'🔍',num:'A3',badge:'İleri',badgeCls:'ret-badge-advanced',
   title:'Günlük Retorik Analizi',desc:'Reklam, haber ve sosyal medyadaki ikna tekniklerini tespit edin.',
   steps:['Bir reklam veya haber seçin','Kullanılan ikna tekniklerini listeleyin','Hedef kitleyi ve amacı analiz edin'],
   quiz:{q:'Bir reklamda ünlü kişi kullanmak hangi sütundur?',opts:['Logos','Pathos','Ethos','Kairos'],correct:2,
   ok:'Ünlü kişi ödünç alınmış Ethos (güvenilirlik transferi) sağlar.',fail:'Ünlü = ödünç Ethos, güvenilirlik transferidir.'},
   scenario:{label:'Senaryo',text:'Bir diş macunu reklamı: "Diş hekimleri tarafından önerilir."',analysis:'Ethos (uzman otoritesi) + Logos (uzmanlar bilir) birlikte kullanılmış.'},
   practice:'Bugün gördüğünüz bir reklamı retorik açıdan analiz edin.'}
];

function renderExercises(){
  const container = document.getElementById('retorik-exercises-container');
  if(!container) return;

  const cats = {ethos:'Ethos — Güvenilirlik',pathos:'Pathos — Duygu',logos:'Logos — Mantık',
    yazim:'Konuşma Yazımı',figurler:'Retorik Figürleri',analiz:'Konuşma Analizi'};

  let html = '';
  for(const [catKey, catTitle] of Object.entries(cats)){
    const items = EX.filter(e=>e.cat===catKey);
    html += `<section class="ret-exercise-section" data-category="${catKey}">
      <div class="ret-ex-header">
        <div class="ret-ex-icon ${catKey}">${items[0].icon}</div>
        <div><div class="ret-ex-title">${catTitle}</div>
        <div class="ret-ex-subtitle">${items.length} interaktif egzersiz</div></div>
      </div>
      <div class="ret-exercises-grid">`;

    items.forEach(ex => {
      html += `<div class="ret-ex-card ${ex.cat}" data-ex-id="${ex.id}">
        <div class="ret-ex-card-header">
          <div class="ret-ex-card-num ${ex.cat}">${ex.num}</div>
          <span class="ret-ex-card-badge ${ex.badgeCls}">${ex.badge}</span>
        </div>
        <h4>${ex.title}</h4>
        <p>${ex.desc}</p>

        <div class="ret-steps">${ex.steps.map((s,i)=>`<div class="ret-step">
          <div class="ret-step-num">${i+1}</div>
          <div class="ret-step-text">${s}</div>
        </div>`).join('')}</div>

        <div class="ret-quiz-box" data-correct="${ex.quiz.correct}">
          <div class="ret-quiz-question">${ex.quiz.q}</div>
          <div class="ret-quiz-options">${ex.quiz.opts.map((o,i)=>`<div class="ret-quiz-option">
            <span class="opt-letter">${String.fromCharCode(65+i)}</span>${o}
          </div>`).join('')}</div>
          <div class="ret-quiz-feedback" data-correct-text="${ex.quiz.ok}" data-wrong-text="${ex.quiz.fail}"></div>
        </div>

        <div class="ret-scenario">
          <div class="ret-scenario-label">${ex.scenario.label}</div>
          <div class="ret-scenario-text">${ex.scenario.text}</div>
          <div class="ret-scenario-analysis"><h5>Analiz</h5><p>${ex.scenario.analysis}</p></div>
        </div>

        <textarea class="ret-practice-area" placeholder="${ex.practice}"></textarea>
        <div style="margin-top:15px">
          <button class="ret-complete-btn" data-ex-id="${ex.id}">✓ Tamamla</button>
        </div>
      </div>`;
    });

    html += '</div></section>';
  }

  container.innerHTML = html;
  initRetCatNav();
  if(window.initRetorikModule) window.initRetorikModule();
}

// Category slug mapping for URLs
const CAT_URL_MAP = {ethos:'ethos',pathos:'pathos',logos:'logos',yazim:'konusma-yazimi',figurler:'figurler',analiz:'analiz'};
const URL_CAT_MAP = {ethos:'ethos',pathos:'pathos',logos:'logos','konusma-yazimi':'yazim',figurler:'figurler',analiz:'analiz'};

function filterRetorikCategory(cat, pushUrl){
  const sections = document.querySelectorAll('.ret-exercise-section');
  const pills = document.querySelectorAll('.ret-cat-pill');
  const hero = document.querySelector('#retorik-container .ret-hero');
  const progress = document.querySelector('.ret-progress-wrap');
  const tips = document.querySelector('#retorik-container .tips-section-inline');
  const pillBar = document.querySelector('.ret-cat-pills')?.parentElement;
  
  // Update active pill
  pills.forEach(p => {
    p.classList.toggle('active', (p.dataset.retNav || p.dataset.retCat) === (cat === 'all' ? 'all' : cat));
  });

  if(cat === 'all'){
    // Show overview: hero, progress, all sections, tips
    if(hero) hero.style.display = '';
    if(progress) progress.style.display = '';
    if(tips) tips.style.display = '';
    sections.forEach(s => s.style.display = '');
    if(pushUrl) history.pushState(null, '', '/retorik');
    document.title = 'Retorik Eğitimi ve Etkili İkna Sanatı - Diksiyon Rehberi';
  } else {
    // Show only selected category, hide hero/progress/tips for focused view
    if(hero) hero.style.display = 'none';
    if(progress) progress.style.display = 'none';
    if(tips) tips.style.display = 'none';
    sections.forEach(s => {
      s.style.display = s.dataset.category === cat ? '' : 'none';
    });
    const urlSlug = CAT_URL_MAP[cat] || cat;
    if(pushUrl) history.pushState(null, '', `/retorik/${urlSlug}`);
    
    // Update page title for SEO
    const catNames = {ethos:'Ethos — Güvenilirlik',pathos:'Pathos — Duygu',logos:'Logos — Mantık',yazim:'Konuşma Yazımı',figurler:'Retorik Figürleri',analiz:'Konuşma Analizi'};
    document.title = `${catNames[cat] || cat} | Retorik Eğitimi - Diksiyon Rehberi`;
  }
  
  window.scrollTo({top: 0, behavior: 'smooth'});
}

function initRetCatNav(){
  // Click handlers for category pills
  document.querySelectorAll('.ret-cat-pill[data-ret-nav]').forEach(pill => {
    pill.addEventListener('click', e => {
      e.preventDefault();
      const cat = pill.dataset.retNav;
      filterRetorikCategory(cat, true);
    });
  });
  
  // Check URL on load for sub-page
  const path = window.location.pathname;
  const match = path.match(/^\/retorik\/([a-z-]+)$/i);
  if(match){
    const urlCat = URL_CAT_MAP[match[1]];
    if(urlCat){
      setTimeout(() => filterRetorikCategory(urlCat, false), 200);
    }
  }
}

// Expose for popstate
window.filterRetorikCategory = filterRetorikCategory;
window.URL_CAT_MAP = URL_CAT_MAP;

if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',renderExercises);
else setTimeout(renderExercises, 50);

})();
