const fs = require('fs');

let content = fs.readFileSync('public/okuma.js', 'utf8');

const match = content.match(/const\s+OKUMA_PARCALARI\s*=\s*(\[[\s\S]*?\]);\s*let\s+activeOkumaId/);
if (match) {
  let arr = eval(match[1]);
  
  arr.forEach(p => {
    // Fix durations
    if (p.cat === 'Şiir') {
       if (p.dur === '2-4 dk') p.dur = '30-45 sn';
       else if (p.dur === '3-5 dk') p.dur = '1 dk';
       else if (p.dur === '4-7 dk') p.dur = '1-2 dk';
       else if (p.dur === '5-8 dk') p.dur = '1.5-2 dk';
    } else if (p.cat === 'Fıkra') {
       if (p.dur === '3-5 dk') p.dur = '1 dk';
       else if (p.dur === '4-6 dk') p.dur = '1-1.5 dk';
       else if (p.dur === '5-8 dk') p.dur = '1.5-2 dk';
       else if (p.dur === '6-10 dk') p.dur = '2-2.5 dk';
    } else if (p.cat === 'Metin') {
       // Extend texts
       if (p.id === 'ok1') {
           p.text += "<br><br>Güneşin bu cömertliği sadece doğaya değil, insanın iç dünyasına da sirayet eder. Sabahın o dingin ve sessiz vakitlerinde, zihnimiz tıpkı uyanan orman gibi berrak ve tazedir. Yeni bir güne başlarken atacağımız ilk adım, alacağımız ilk bilinçli nefes, önümüzdeki saatlerin nasıl geçeceğini belirler. Sadece fiziksel bir uyanıştan bahsetmiyoruz; ruhsal ve zihinsel olarak da güne merhaba demek, günün getireceği stresi baştan savuşturmaktır. Tıpkı güneşin karanlığı her sabah sabırla yenmesi gibi, doğru alınan bir nefes de içimizdeki telaşı yatıştırabilir.<br><br>Unutmayın ki sesiniz, karakterinizin ve ruh halinizin doğrudan bir yansımasıdır. Mutlu olduğunuzda cıvıl cıvıl, yorgun olduğunuzda solgun, öfkeli olduğunuzda ise sert ve yırtıcıdır. Ancak kontrollü bir şekilde, sabahın o sakin enerjisiyle ısıtılmış bir ses, gün boyu ne yaşarsanız yaşayın o sarsılmaz ve güven veren titreşimini koruyacaktır. Bu yüzden her sabah uyandığınızda gökyüzüne bakın, ciğerlerinizi taze havayla doldurun ve ses tellerinize 'günaydın' deyin. Onlar sizi asla yarı yolda bırakmayacaktır.";
           p.dur = "3-4 dk";
       } else if (p.id === 'ok2') {
           p.text += "<br><br>Denizin öğrettiği bir diğer büyük ders de sürekliliktir. O dalgalar hiçbir zaman pes etmezler. Kayalara çarparlar, dağılırlar, paramparça olurlar ama bir saniye sonra yeniden toparlanıp aynı kararlılıkla tekrar kıyıya yanaşırlar. Sesinizin eğitimi de tam olarak böyledir. Başlangıçta nefesiniz yetmeyecek, sesiniz çatlayacak, kelimeler ağzınızda yuvarlanıp anlaşılmaz hale gelecektir. Ama siz, tıpkı o inatçı dalgalar gibi, yılmadan ve bıkmadan çalışmaya devam etmelisiniz.<br><br>Aynı zamanda deniz, kendi derinliklerinden aldığı gücü yüzeye yansıtır. Sizin de sesiniz yüzeysel olmamalıdır; sadece boğazınızdan değil, ta karnınızdan, diyaframınızın derinliklerinden gelmelidir. O sığ suların çıkardığı cılız şırıltılar yerine, okyanusların o tok ve göğsü titreten uğultusunu hedeflemelisiniz. Konuşurken vücudunuzu bir rezonans kutusu gibi kullanmayı öğrendiğinizde, çıkan sesin tonu ve şiddeti sizi bile şaşırtacaktır. Söz bittiğinde ise, dalganın geri çekilişindeki o muazzam sessizliğin tadını çıkarın.";
           p.dur = "3-4 dk";
       } else if (p.id === 'ok3') {
           p.text += "<br><br>Metropol hayatı her birimizi adeta koşan birer yarış atına dönüştürmüştür. Zaman kavramı giderek daralır. Her sabah bindiğimiz otobüste, yürüdüğümüz kaldırımlarda, asansör beklerken hep bir şeylere geç kalıyormuş hissiyatı yakamıza yapışır. Bu hız, konuşma şeklimize de feci halde yansır. Sözcükleri yutar, cümleleri arka arkaya ateşleriz. Oysa gerçek güç, bu devasa hızın ortasında kendi ritmini koruyabilen ve karşısındakini de o ritme davet edebilen kişidedir.<br><br>Kalabalık bir caddede durup etrafınızı izleyin. İnsanlar birbirlerini duyabilmek için sürekli bağırırlar ama aslında hiç kimse bir diğerini gerçekten dinlemiyordur. Siz eğer o gürültünün içerisinde sakin, tane tane ve altı çizilmiş kelimelerle konuşmaya başlarsanız, insanlar ister istemez size doğru dönüp kulak kesilecektir. Çünkü nadir olan, hız çağında yavaşlayabilme cesaretidir. Nefes alabilmektir. Duraksayabilmektir. Sessizlikten korkmamaktır. O büyük metropolün sabahında, senin sesin, koşturan insanların durup dinlenmek isteyeceği o güvenli liman olmalıdır.";
           p.dur = "4-5 dk";
       } else if (p.id === 'ok4') {
           p.text += "<br><br>Elbette her fidan ulu bir ağaca dönüşemez; ancak hiçbiri büyümekten de vazgeçmez. Su, daima en dirençsiz yolu seçerek toprağa sızar. Tıpkı bunun gibi, bizler de iletişim kurarken çatışmanın ve bağırmanın en sert yolunu seçmektense, suyun bilgeliğine sığınarak en dirençsiz ve en akıcı yolu bulmalıyız. İnsanları ikna etmek, onları köşeye sıkıştırarak veya sesimizi yükselterek elde edilebilecek bir zafer değildir. Söylediğimiz sözlerin altını, suyun kayayı oyduğu gibi yavaş, kararlı ve şefkatli bir şekilde çizmek çok daha etkilidir.<br><br>Tabiatın sessizliği bile başlı başına bir dildir. Ormana girdiğinizde duyduğunuz o derin sessizlik, aslında binlerce farklı frekanstaki nidanın ve titreşimin uyumudur. Kendi sesinizi bulmak istiyorsanız, öncelikle sessizliği dinlemeyi öğrenmelisiniz. Nerede susmanız gerektiğini bilmek, nerede konuşmanız gerektiğini bilmekten daha zordur. Es vermek, cümlenin altını çizmektir. Tıpkı şelalenin dökülmeden önceki o saniyelik havada asılı kalışı gibi, kelimelerinizin de dinleyicinin zihninde asılı kalmasına müsaade edin.";
           p.dur = "4-5 dk";
       } else {
           if (p.dur === '6-9 dk' || p.dur === '7-10 dk') p.dur = '4-5 dk';
           else if (p.dur === '8-11 dk') p.dur = '5-6 dk';
           else if (p.dur === '10-15 dk') p.dur = '6-8 dk';
           else if (p.dur === '5-8 dk') p.dur = '3-4 dk';
           else if (p.dur === '4-6 dk') p.dur = '2-3 dk';
       }
    }
  });
  
  let newArrStr = JSON.stringify(arr, null, 2);
  let newContent = content.replace(/const\s+OKUMA_PARCALARI\s*=\s*\[[\s\S]*?\];/, 'const OKUMA_PARCALARI = ' + newArrStr + ';');
  fs.writeFileSync('public/okuma.js', newContent, 'utf8');
  console.log('okuma.js updated successfully.');
} else {
  console.log('OKUMA_PARCALARI not found.');
}
