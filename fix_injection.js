// fix_injection.js — seo-tool-content enjeksiyon noktasını düzelt
const fs = require('fs');
let code = fs.readFileSync('index.js', 'utf8');

// Eski yöntem: </body>'den ÖNCE enjekte ediyordu
// Sorun: app.js, </body>'den ÖNCE çalışıyor, ama seo-tool-content </body>'den hemen ÖNCE ekleniyor
// Bu yüzden app.js çalıştığında seo-tool-content henüz DOM'da YOK!
// Çözüm: seo-tool-content'i <script src="app.js"> etiketinden ÖNCE enjekte et

const oldReplace = `html = html.replace('</body>', \`\${seoBlock}\\n</body>\`);`;
const newReplace = `html = html.replace('<script src="app.js"></script>', \`\${seoBlock}\\n  <script src="app.js"></script>\`);`;

if (code.includes(oldReplace)) {
  code = code.replace(oldReplace, newReplace);
  
  // Ayrıca yorum satırını da güncelle
  code = code.replace(
    '// 3. SEO için HTML\'e araç açıklamasını ekle (Gizli Liste)',
    '// 3. SEO içeriğini app.js SCRIPT\'inden ÖNCE enjekte et (DOM sırası kritik!)'
  );
  
  fs.writeFileSync('index.js', code, 'utf8');
  console.log('✅ Enjeksiyon noktası düzeltildi: </body> → <script src="app.js"> öncesi');
} else {
  console.log('❌ Değiştirilecek satır bulunamadı. Zaten düzeltilmiş olabilir.');
  // Kontrol: zaten doğru mu?
  if (code.includes('app.js"></script>')) {
    console.log('Mevcut durum kontrol:');
    const lines = code.split('\n');
    for (let i = 0; i < lines.length; i++) {
      if (lines[i].includes('seoBlock') || lines[i].includes('app.js')) {
        console.log(`  ${i+1}: ${lines[i].trim()}`);
      }
    }
  }
}
