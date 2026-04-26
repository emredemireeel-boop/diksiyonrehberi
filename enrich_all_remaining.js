const fs = require('fs');

let indexFile = fs.readFileSync('index.js', 'utf8');

// Zenginleştirici şablon
const generateRichContent = (h1) => {
  return `Konuşma ve iletişim becerilerinizi geliştirmek, sosyal hayatta ve profesyonel kariyerinizde size büyük avantajlar sağlar. ${h1} konusu, doğru sesletim ve diyafram kontrolü gerektiren önemli bir diksiyon bileşenidir. Doğru teknikleri kullanarak bu süreci hızlandırabilirsiniz.

<h3>Temel Kurallar ve Pratik Yöntemler:</h3>
<ul>
<li><strong>Nefes Kontrolü:</strong> Cümleleri kurarken göğsünüzden değil, diyaframınızdan nefes alarak sesinize derinlik ve güç katın. Hava akışını kontrol etmek heyecanınızı da azaltacaktır.</li>
<li><strong>Ayna Karşısında Pratik:</strong> Dudak ve çene tembelliğini gidermek için her gün 10 dakika ayna karşısında abartılı dudak hareketleriyle yüksek sesli okuma çalışmaları yapın.</li>
<li><strong>Ritim ve Hız:</strong> Çok hızlı konuşmak güven kaybına neden olur. Konuşma hızınızı bilinçli olarak düşürerek kelimelerin son harflerini yutmadan telaffuz edin.</li>
</ul>

<h3>Kısa Uygulama Egzersizi:</h3>
<p>Dik bir şekilde ayakta durun. Burnunuzdan derin bir nefes alın ve nefesinizi "Sssss" veya "Şşşş" sesiyle yavaşça geri verin. Ardından aynı nefes desteğiyle "${h1}" konusu üzerinde kendi kendinize 1 dakikalık kısa bir konuşma provası yapın.</p>

<div style="margin:2rem 0;padding:1.5rem;background:#f0f9ff;border-radius:12px;border:1px solid #bae6fd;">
  <h4 style="margin-top:0;color:#0369a1;">🎙️ İnteraktif Egzersizlere Başlayın</h4>
  <p style="margin-bottom:1rem;color:#0c4a6e;">Teoriyi pratiğe dökmek için platformumuzdaki interaktif tekerleme, metronom ve artikülasyon araçlarını kullanabilirsiniz. Ücretsiz stüdyomuzda sesinizi kaydedip analiz edin.</p>
  <a href="/" style="display:inline-block;background:#0ea5e9;color:white;padding:12px 24px;border-radius:8px;text-decoration:none;font-weight:bold;">Tüm Diksiyon Egzersizlerine Git →</a>
</div>`;
};

const generateFaq = (h1) => {
  return [
    {
      "question": `${h1} için egzersizleri nerede bulabilirim?`,
      "answer": "Ana sayfamızda yer alan Görsel Nefes, Tekerleme Arenası ve Ses Stüdyosu modüllerini kullanarak tamamen ücretsiz pratik yapabilirsiniz."
    },
    {
      "question": "Diksiyon eğitimi günde ne kadar pratik gerektirir?",
      "answer": "Kas hafızasının gelişmesi için her gün düzenli olarak 10-15 dakika sesli diksiyon pratiği yapmanız, haftada 1 kez 2 saat yapmanızdan çok daha etkilidir."
    }
  ];
};

const matchBlock = indexFile.match(/const TOOLS_META = {([\s\S]*?)};\n\n\/\//);
if (!matchBlock) {
  console.log('TOOLS_META bulunamadı');
  process.exit();
}

let toolsContent = matchBlock[1];
const regexKeys = /'([^']+)':\s*\{([\s\S]*?)\n\s*}(,?)/g;
let modified = false;

toolsContent = toolsContent.replace(regexKeys, (fullMatch, slug, innerBlock, comma) => {
  // Eğer zaten <ul> varsa veya zengin içerikse atla
  if (innerBlock.includes('<ul>') || innerBlock.includes('İnteraktif Egzersizlere')) {
    return fullMatch;
  }
  
  // h1 ve title değerlerini regex ile bulalım
  const h1Match = innerBlock.match(/"h1":\s*"([^"]+)"/);
  const titleMatch = innerBlock.match(/"title":\s*"([^"]+)"/);
  const descMatch = innerBlock.match(/"desc":\s*"([^"]+)"/);
  
  const h1 = h1Match ? h1Match[1] : slug;
  const title = titleMatch ? titleMatch[1] : slug;
  const desc = descMatch ? descMatch[1] : '';
  
  const newContent = generateRichContent(h1).replace(/\n/g, '\\n').replace(/"/g, '\\"');
  const newFaq = JSON.stringify(generateFaq(h1), null, 8).trim();
  
  modified = true;
  return `'${slug}': {
    "title": "${title}",
    "desc": "${desc}",
    "h1": "${h1}",
    "content": "${newContent}",
    "faq": ${newFaq}
}${comma}`;
});

if (modified) {
  indexFile = indexFile.replace(matchBlock[1], toolsContent);
  fs.writeFileSync('index.js', indexFile, 'utf8');
  console.log('✅ Tüm kalan alt sayfalar güncellendi!');
} else {
  console.log('Güncellenecek sayfa bulunamadı.');
}
