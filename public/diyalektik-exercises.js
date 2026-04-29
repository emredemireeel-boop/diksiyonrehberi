/* Diyalektik Exercises - Dynamic Renderer */
(function(){
'use strict';

const CATS = {
  sokratik:{title:'Sokratik Yöntem',icon:'❓',color:'#10b981',desc:'Sorularla gerçeği bulma sanatı'},
  hegel:{title:'Hegel Diyalektiği',icon:'🔄',color:'#8b5cf6',desc:'Tez-Antitez-Sentez döngüsü'},
  curutme:{title:'Argüman Çürütme',icon:'🎯',color:'#ef4444',desc:'Zayıf noktaları tespit ve imha'},
  celisiki:{title:'Çelişki Analizi',icon:'🔍',color:'#f59e0b',desc:'Gizli tutarsızlıkları bulma'},
  tartisma:{title:'Tartışma Stratejisi',icon:'⚔️',color:'#3b82f6',desc:'Etkili müzakere teknikleri'},
  dusunce:{title:'Eleştirel Düşünce',icon:'🧠',color:'#ec4899',desc:'Bilişsel önyargıları aşma'}
};

const EX = [
  // SOKRATİK
  {id:'s1',cat:'sokratik',badge:'Başlangıç',title:'Sokratik Soru Sorma',
   desc:'Karşı tarafın kendi çelişkisini bulmasını sağlayan sorular sorun.',
   dialogue:[
     {role:'other',text:'"Herkes yalan söyler, kimseye güvenilmez."'},
     {role:'you',text:'"Peki sen de dahil mi? Şu an söylediğin de bir yalan olabilir mi?"'},
     {role:'other',text:'"Hayır, ben doğruyu söylüyorum."'},
     {role:'you',text:'"O zaman en az bir kişi doğruyu söylüyor — bu da \'herkes yalan söyler\' tezini çürütmez mi?"'}
   ],
   quiz:{q:'Sokratik yöntemin amacı nedir?',opts:['Karşı tarafı utandırmak','Kendi çelişkisini fark ettirmek','Bilgi vermek','Tartışmayı kazanmak'],correct:1,
   ok:'Sokratik ironi, kişinin kendi hatasını kendisinin bulmasını sağlar.',fail:'Amaç fark ettirmektir.'},
   practice:'Bir arkadaşınızın genellemesine karşı 3 Sokratik soru yazın.'},
  {id:'s2',cat:'sokratik',badge:'Orta',title:'Doğurtmaca (Maieutik)',
   desc:'Karşınızdaki kişinin içindeki bilgiyi sorularla ortaya çıkarın.',
   dialogue:[
     {role:'other',text:'"Adalet güçlünün işine yarar."'},
     {role:'you',text:'"Güçlü biri adaletsizliğe uğrasa ne hisseder?"'},
     {role:'other',text:'"Kötü hisseder tabii."'},
     {role:'you',text:'"O zaman adalet sadece güçlüye değil, herkese lazım olabilir mi?"'}
   ],
   quiz:{q:'Doğurtmaca ne demektir?',opts:['Bilgiyi ezberletmek','İçteki bilgiyi sorularla çıkarmak','Karşı tarafı ikna etmek','Mantık hatası bulmak'],correct:1,
   ok:'Maieutik = bilgiyi doğurtmak.',fail:'Doğurtmaca içteki bilgiyi ortaya çıkarır.'},
   practice:'Bir konu hakkında 5 kademeli soru zinciri yazın.'},
  {id:'s3',cat:'sokratik',badge:'İleri',title:'İroni ve Bilmezden Gelme',
   desc:'Bilmiyormuş gibi yaparak karşı tarafın argümanını test edin.',
   dialogue:[
     {role:'other',text:'"Tecrübe her zaman eğitimden üstündür."'},
     {role:'you',text:'"Çok ilginç! Peki bir kalp ameliyatını tecrübesiz ama kitap okumuş biri mi, yoksa tıp eğitimi almış biri mi yapmalı?"'},
     {role:'other',text:'"Tabii eğitimli biri yapmalı."'},
     {role:'you',text:'"O zaman bazı alanlarda eğitim tecrübeden önce gelebilir mi?"'}
   ],
   quiz:{q:'Sokratik ironi nedir?',opts:['Alay etmek','Bilmezden gelerek soru sormak','Yalan söylemek','Sessiz kalmak'],correct:1,
   ok:'İroni = bilmiyormuş gibi yaparak derinleşme.',fail:'İroni bilmezden gelme tekniğidir.'},
   practice:'Bir popüler görüşe Sokratik ironi ile yaklaşan diyalog yazın.'},

  // HEGEL
  {id:'h1',cat:'hegel',badge:'Başlangıç',title:'Tez Oluşturma',
   desc:'Her diyalektik sürecin başlangıcı güçlü bir tezdir.',
   steps:['Savunacağınız iddiayı net şekilde belirleyin','İddianızı destekleyen 3 kanıt bulun','Olası zayıf noktaları önceden tespit edin'],
   quiz:{q:'Tez nedir?',opts:['Karşı görüş','Ortaya atılan ilk iddia','İki görüşün birleşimi','Soru'],correct:1,
   ok:'Tez, diyalektik sürecin başlangıç noktasıdır.',fail:'Tez ilk iddiadır.'},
   practice:'Güncel bir konuda güçlü bir tez cümlesi ve 3 destekleyici argüman yazın.'},
  {id:'h2',cat:'hegel',badge:'Orta',title:'Antitez Geliştirme',
   desc:'Her güçlü tezin karşısında bir antitez bulunmalıdır.',
   steps:['Tezin varsayımlarını sorgulayın','Zıt perspektiften bakın','Karşı kanıtlar toplayın'],
   quiz:{q:'Antitezin rolü nedir?',opts:['Tezi yok etmek','Çatışma yaratarak ilerleme sağlamak','Kişisel saldırı','Konu değiştirmek'],correct:1,
   ok:'Antitez çatışma yaratarak düşünceyi ilerletir.',fail:'Antitez ilerleme aracıdır.'},
   practice:'Yazdığınız teze güçlü bir antitez ve 3 karşı argüman yazın.'},
  {id:'h3',cat:'hegel',badge:'İleri',title:'Sentez Yaratma',
   desc:'Tez ve antitezin en iyi yönlerini birleştiren üst düzey çözüm.',
   steps:['Her iki tarafın geçerli noktalarını listeleyin','Ortak zemini bulun','Yeni ve üst düzey bir pozisyon oluşturun'],
   quiz:{q:'Sentez ne yapar?',opts:['Birini haklı çıkarır','Her ikisini de reddeder','İkisinin doğrularını birleştirir','Tartışmayı bitirir'],correct:2,
   ok:'Sentez = tez+antitezin en iyilerinin birleşimi.',fail:'Sentez iki görüşü birleştirir.'},
   practice:'Tez ve antitezinizden bir sentez paragrafı oluşturun.'},

  // ÇÜRÜTME
  {id:'c1',cat:'curutme',badge:'Başlangıç',title:'Öncülü Çürütmek',
   desc:'Argümanın dayandığı temel varsayımın yanlış olduğunu kanıtlayın.',
   example:{claim:'"Güneş dünya etrafında döndüğü için gündüz oluyor."',refute:'"Öncülün hatalı — dünya güneşin etrafında döner. Gündüz, dünyanın kendi ekseni etrafında dönmesiyle oluşur."'},
   quiz:{q:'Öncülü çürütmek ne demektir?',opts:['Sonucu reddetmek','Temel varsayımın yanlışlığını göstermek','Konu değiştirmek','Duyguya hitap etmek'],correct:1,
   ok:'Öncül çürürse tüm argüman çöker.',fail:'Temel varsayımı çürütmektir.'},
   practice:'Günlük hayattan bir argüman bulup öncülünü çürütün.'},
  {id:'c2',cat:'curutme',badge:'Orta',title:'Mantıksal Bağı Koparmak',
   desc:'Öncül doğru olsa bile sonucun bundan çıkmadığını gösterin.',
   example:{claim:'"Ali çok zeki, o halde mükemmel lider olur."',refute:'"Zeka liderliğin tek şartı değil. Empati, vizyon ve iletişim de gerekir — aradaki nedensellik bağı eksik."'},
   quiz:{q:'Non sequitur ne demektir?',opts:['Kişiye saldırı','Sonuç öncülden çıkmıyor','Çoğunluğa başvuru','Otorite hatası'],correct:1,
   ok:'Non sequitur = öncül-sonuç bağı kopuk.',fail:'Sonuç öncülden çıkmıyor demektir.'},
   practice:'Bir argümandaki mantıksal bağ kopukluğunu bulup açıklayın.'},
  {id:'c3',cat:'curutme',badge:'İleri',title:'Reductio Ad Absurdum',
   desc:'Karşı tarafın argümanını mantıksal sonucuna götürerek absürtlüğünü gösterin.',
   example:{claim:'"Hata yapan herkesi hemen kovmalıyız."',refute:'"O halde sen de dün yazım hatası yaptığında kovulmalıydın. Bu mantıkla şirkette kimse kalmaz."'},
   quiz:{q:'Reductio ad absurdum nedir?',opts:['Abartı yapmak','Argümanı absürt sonucuna götürmek','Kişisel saldırı','Konuyu değiştirmek'],correct:1,
   ok:'Argümanın mantıksal sonucu absürtse, argüman da geçersizdir.',fail:'Argümanı absürde götürme tekniğidir.'},
   practice:'Bir argümana reductio ad absurdum uygulayın.'},

  // ÇELİŞKİ
  {id:'cl1',cat:'celisiki',badge:'Başlangıç',title:'İç Tutarsızlık Tespiti',
   desc:'Bir argümanın kendi içindeki çelişkileri bulun.',
   example:{claim:'"Herkes eşittir ama bazıları daha eşittir."',refute:'"Eşitlik kavramı derece kabul etmez — ya eşitsinizdir ya değilsinizdir. Bu cümle kendi kendini çürütür."'},
   quiz:{q:'İç tutarsızlık ne demektir?',opts:['Dış kaynaklarla çelişme','Kendi içinde çelişme','Eksik bilgi','Yanlış veri'],correct:1,
   ok:'İç tutarsızlık = argüman kendisiyle çelişir.',fail:'Kendi içinde çelişmektir.'},
   practice:'Günlük hayattan 3 iç tutarsızlık örneği bulun.'},
  {id:'cl2',cat:'celisiki',badge:'Orta',title:'Gizli Varsayım Keşfi',
   desc:'Argümanların arkasındaki söylenmemiş varsayımları ortaya çıkarın.',
   example:{claim:'"Bu ürünü alan herkes mutlu."',refute:'"Gizli varsayım: mutluluk satın alınabilir. Ayrıca \'herkes\' genellemesi kanıtlanmamış."'},
   quiz:{q:'Gizli varsayım neden tehlikelidir?',opts:['Görünmez olduğu için sorgulanmaz','Herkes bilir','Önemsizdir','Sadece akademide geçerli'],correct:0,
   ok:'Görünmez varsayımlar sorgulanmadan kabul edilir.',fail:'Görünmez olduğu için sorgulanmaz.'},
   practice:'Bir reklamın gizli varsayımlarını ortaya çıkarın.'},
  {id:'cl3',cat:'celisiki',badge:'İleri',title:'Paradoks Çözümleme',
   desc:'Görünüşte çelişkili ama derin gerçekler içeren ifadeleri analiz edin.',
   example:{claim:'"Bu cümle yalandır." (Yalancı Paradoksu)',refute:'"Eğer yalansa doğru olmalı, ama doğruysa yalan olmalı. Bu self-referans paradoksudur ve klasik mantık çerçevesinde çözülemez."'},
   quiz:{q:'Paradoks nedir?',opts:['Basit bir yanlış','Görünüşte çelişkili ama derin bir gerçek','Mantık hatası','Safsata'],correct:1,
   ok:'Paradokslar derinlikli düşünmeye zorlar.',fail:'Görünüşte çelişkili ama derin gerçektir.'},
   practice:'Bir paradoksu analiz edip çözüm önerinizi yazın.'},

  // TARTIŞMA
  {id:'t1',cat:'tartisma',badge:'Başlangıç',title:'Aktif Dinleme',
   desc:'Etkili tartışma karşı tarafı gerçekten anlamakla başlar.',
   steps:['Karşı tarafın sözünü kesmeyin','Anladığınızı kendi kelimelerinizle tekrarlayın','Açıklayıcı sorular sorun'],
   quiz:{q:'Aktif dinlemenin ilk kuralı nedir?',opts:['Cevap hazırlamak','Sözünü kesmemek','Not almak','Göz teması'],correct:1,
   ok:'Önce dinleyin, sonra düşünün, en son konuşun.',fail:'Sözünü kesmemektir.'},
   practice:'Bir tartışmada karşı tarafın görüşünü özetleyen 3 cümle yazın.'},
  {id:'t2',cat:'tartisma',badge:'Orta',title:'Çerçeveleme (Framing)',
   desc:'Aynı konuyu farklı perspektiflerden sunarak algıyı yönlendirin.',
   steps:['Konuyu 3 farklı açıdan çerçeveleyin','Her çerçevenin vurgusunu belirleyin','En etkili çerçeveyi seçin'],
   quiz:{q:'"Bardağın yarısı dolu" ve "yarısı boş" arasındaki fark nedir?',opts:['Hiç fark yok','Çerçeveleme — aynı gerçek, farklı algı','Biri yanlış','Mantık hatası'],correct:1,
   ok:'Framing aynı veriyi farklı algılatır.',fail:'Çerçeveleme farklı algı yaratır.'},
   practice:'Bir haberi 3 farklı çerçevede yeniden yazın.'},
  {id:'t3',cat:'tartisma',badge:'İleri',title:'Taktik Geri Çekilme',
   desc:'Küçük bir noktayı kabul ederek büyük resimde güç kazanın.',
   steps:['Karşı tarafın güçlü yönünü kabul edin','Kabul ettiğiniz noktayı sınırlayın','Ana argümanınızı güçlendirin'],
   quiz:{q:'Taktik geri çekilme neden güçlü bir stratejidir?',opts:['Zayıflık gösterir','Güvenilirlik + ana argümanı güçlendirir','Tartışmayı bitirir','Karşıyı şaşırtır'],correct:1,
   ok:'Küçük kabul = büyük güvenilirlik kazancı.',fail:'Güvenilirlik kazandırır.'},
   practice:'Bir tartışmada taktik geri çekilme senaryosu yazın.'},

  // DÜŞÜNCE
  {id:'d1',cat:'dusunce',badge:'Başlangıç',title:'Onay Önyargısı',
   desc:'İnandığımız şeyleri destekleyen kanıtları arama eğilimi.',
   steps:['Bir inancınızı seçin','Ona karşı 3 kanıt arayın','Kanıtları tarafsızca değerlendirin'],
   quiz:{q:'Onay önyargısı nedir?',opts:['Herkesi onaylamak','Sadece inancını destekleyen kanıtları aramak','Mantıklı düşünmek','Veri toplamak'],correct:1,
   ok:'İnancımızı destekleyen şeyleri görürüz, çürüten şeyleri görmezden geliriz.',fail:'Seçici kanıt aramadır.'},
   practice:'Bir inancınızı seçip ona karşı 3 güçlü kanıt yazın.'},
  {id:'d2',cat:'dusunce',badge:'Orta',title:'Dunning-Kruger Etkisi',
   desc:'Az bilenler çok bildiklerini, çok bilenler az bildiklerini sanır.',
   steps:['Bir konudaki bilgi seviyenizi 1-10 arası puanlayın','O konuda uzman görüşü arayın','Puanınızı tekrar değerlendirin'],
   quiz:{q:'Dunning-Kruger etkisinde en az bilen kişi ne yapar?',opts:['Soru sorar','En çok bildiğini iddia eder','Sessiz kalır','Araştırır'],correct:1,
   ok:'Yeterince bilmeyen, ne kadar bilmediğini de bilmez.',fail:'En az bilen en çok iddia eder.'},
   practice:'Kendinizi uzman sandığınız bir konuyu araştırıp bilgi boşluklarınızı listeleyin.'},
  {id:'d3',cat:'dusunce',badge:'İleri',title:'Çapa Etkisi (Anchoring)',
   desc:'İlk duyduğumuz bilgi sonraki yargılarımızı etkiler.',
   steps:['Bir konu hakkında ilk izleniminizi not edin','Farklı kaynaklardan bilgi toplayın','İlk izlenimin sizi ne kadar etkilediğini analiz edin'],
   quiz:{q:'Çapa etkisi nedir?',opts:['Denizcilik terimi','İlk bilginin sonraki yargıları etkilemesi','Unutkanlık','Dikkat dağınıklığı'],correct:1,
   ok:'İlk duyduğumuz rakam veya bilgi, sonraki değerlendirmelerimizi çarpıtır.',fail:'İlk bilgi yargıları etkiler.'},
   practice:'Bir müzakere senaryosunda çapa etkisini nasıl kullanırsınız? Yazın.'}
];

function renderDiyalektik(){
  const container = document.getElementById('diyalektik-exercises-container');
  if(!container) return;

  let html = '';
  for(const [catKey, cat] of Object.entries(CATS)){
    const items = EX.filter(e=>e.cat===catKey);
    if(!items.length) continue;
    
    html += `<section class="diy-ex-section" data-diy-category="${catKey}">
      <div class="diy-section-head" style="border-left:4px solid ${cat.color}">
        <div class="diy-section-icon" style="background:${cat.color}20;color:${cat.color}">${cat.icon}</div>
        <div>
          <h2 class="diy-section-title" style="color:${cat.color}">${cat.title}</h2>
          <p class="diy-section-desc">${cat.desc}</p>
        </div>
      </div>
      <div class="diy-cards-grid">`;

    items.forEach(ex => {
      let body = '';
      
      // Dialogue (Sokratik)
      if(ex.dialogue){
        body += '<div class="diy-dialogue">';
        ex.dialogue.forEach(d => {
          const cls = d.role==='you'?'diy-bubble-you':'diy-bubble-other';
          const label = d.role==='you'?'Siz':'Karşı Taraf';
          body += `<div class="${cls}"><span class="diy-bubble-label">${label}</span>${d.text}</div>`;
        });
        body += '</div>';
      }
      
      // Steps
      if(ex.steps){
        body += '<div class="diy-steps">';
        ex.steps.forEach((s,i) => {
          body += `<div class="diy-step"><span class="diy-step-n">${i+1}</span><span>${s}</span></div>`;
        });
        body += '</div>';
      }
      
      // Example (Çürütme)
      if(ex.example){
        body += `<div class="diy-example">
          <div class="diy-example-claim"><span class="diy-ex-label">İddia:</span>${ex.example.claim}</div>
          <div class="diy-example-refute"><span class="diy-ex-label">Çürütme:</span>${ex.example.refute}</div>
        </div>`;
      }

      // Quiz
      body += `<div class="diy-quiz" data-correct="${ex.quiz.correct}">
        <div class="diy-quiz-q">${ex.quiz.q}</div>
        <div class="diy-quiz-opts">${ex.quiz.opts.map((o,i)=>`<div class="diy-quiz-opt" data-idx="${i}"><span class="diy-opt-letter">${String.fromCharCode(65+i)}</span>${o}</div>`).join('')}</div>
        <div class="diy-quiz-fb" data-ok="${ex.quiz.ok}" data-fail="${ex.quiz.fail}"></div>
      </div>`;

      // Practice
      body += `<textarea class="diy-practice" placeholder="${ex.practice}"></textarea>
        <button class="diy-complete-btn" data-ex-id="${ex.id}">✓ Tamamlandı</button>`;

      html += `<div class="diy-ex-card" data-ex-id="${ex.id}">
        <div class="diy-card-top">
          <span class="diy-card-badge" style="background:${cat.color}20;color:${cat.color}">${ex.badge}</span>
          <span class="diy-card-cat" style="color:${cat.color}">${cat.icon} ${cat.title}</span>
        </div>
        <h3 class="diy-card-title">${ex.title}</h3>
        <p class="diy-card-desc">${ex.desc}</p>
        ${body}
      </div>`;
    });

    html += '</div></section>';
  }

  container.innerHTML = html;
  initDiyQuiz();
  initDiyCatNav();
}

function initDiyQuiz(){
  document.querySelectorAll('.diy-quiz-opt').forEach(opt => {
    opt.addEventListener('click', function(){
      const quiz = this.closest('.diy-quiz');
      if(quiz.classList.contains('answered')) return;
      quiz.classList.add('answered');
      const correct = parseInt(quiz.dataset.correct);
      const idx = parseInt(this.dataset.idx);
      const fb = quiz.querySelector('.diy-quiz-fb');
      if(idx === correct){
        this.classList.add('correct');
        fb.textContent = fb.dataset.ok;
        fb.className = 'diy-quiz-fb show correct';
      } else {
        this.classList.add('wrong');
        quiz.querySelectorAll('.diy-quiz-opt')[correct].classList.add('correct');
        fb.textContent = fb.dataset.fail;
        fb.className = 'diy-quiz-fb show wrong';
      }
    });
  });
  
  document.querySelectorAll('.diy-complete-btn').forEach(btn => {
    btn.addEventListener('click', function(){
      const id = this.dataset.exId;
      let completed = JSON.parse(localStorage.getItem('dr_diyalektik_completed')||'[]');
      if(!completed.includes(id)){completed.push(id);localStorage.setItem('dr_diyalektik_completed',JSON.stringify(completed));}
      this.textContent = '✓ Tamamlandı!';
      this.style.background = '#10b981';
      this.disabled = true;
    });
  });
}

// Sub-page navigation
const DIY_CAT_URL = {sokratik:'sokratik',hegel:'hegel',curutme:'curutme',celisiki:'celisiki',tartisma:'tartisma',dusunce:'dusunce'};
const DIY_URL_CAT = {sokratik:'sokratik',hegel:'hegel',curutme:'curutme',celisiki:'celisiki',tartisma:'tartisma',dusunce:'dusunce'};

function filterDiyCategory(cat, pushUrl){
  const sections = document.querySelectorAll('.diy-ex-section');
  const pills = document.querySelectorAll('.diy-cat-pill');
  const hero = document.querySelector('#diyalektik-container .diy-hero');
  const tips = document.querySelector('#diyalektik-container .tips-section-inline');

  pills.forEach(p => p.classList.toggle('active', p.dataset.diyCat === cat));

  if(cat === 'all'){
    if(hero) hero.style.display = '';
    if(tips) tips.style.display = '';
    sections.forEach(s => s.style.display = '');
    if(pushUrl) history.pushState(null,'','/diyalektik');
    document.title = 'Diyalektik ve Mantıksal Akıl Yürütme - Diksiyon Rehberi';
  } else {
    if(hero) hero.style.display = 'none';
    if(tips) tips.style.display = 'none';
    sections.forEach(s => s.style.display = s.dataset.diyCategory===cat?'':'none');
    if(pushUrl) history.pushState(null,'',`/diyalektik/${cat}`);
    const names = {sokratik:'Sokratik Yöntem',hegel:'Hegel Diyalektiği',curutme:'Argüman Çürütme',celisiki:'Çelişki Analizi',tartisma:'Tartışma Stratejisi',dusunce:'Eleştirel Düşünce'};
    document.title = `${names[cat]||cat} | Diyalektik - Diksiyon Rehberi`;
  }
  window.scrollTo({top:0,behavior:'smooth'});
}

function initDiyCatNav(){
  document.querySelectorAll('.diy-cat-pill').forEach(pill => {
    pill.addEventListener('click', e => {
      e.preventDefault();
      filterDiyCategory(pill.dataset.diyCat, true);
    });
  });
  const path = window.location.pathname;
  const m = path.match(/^\/diyalektik\/([a-z]+)$/i);
  if(m && DIY_URL_CAT[m[1]]){
    setTimeout(()=> filterDiyCategory(m[1], false), 200);
  }
}

window.filterDiyCategory = filterDiyCategory;
window.DIY_URL_CAT = DIY_URL_CAT;

if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',renderDiyalektik);
else setTimeout(renderDiyalektik, 50);
})();
