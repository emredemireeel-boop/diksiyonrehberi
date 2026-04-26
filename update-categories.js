const fs = require('fs');
let txt = fs.readFileSync('public/tekerlemeler.js', 'utf8');
let lines = txt.split('\n');
let keepLines = lines.slice(0, 810);
let newText = keepLines.join('\n') + '\n' + `// ============================================================
// UZUN KUYRUK SEO KATEGORİLERİ
// ============================================================
const UZUN_KUYRUK_KATEGORILER = {
  'en-zor-tekerlemeler': { title: 'En Zor Tekerlemeler - Diksiyon Rehberi', desc: 'Diksiyonunuzu sınırlarına kadar zorlayacak, okuması en zor ve karmaşık tekerlemeler.', h1: 'En Zor Tekerlemeler' },
  'kisa-tekerlemeler': { title: 'Kısa Tekerlemeler - Diksiyon Rehberi', desc: 'Yeni başlayanlar ve çocuklar için akılda kalıcı, kolay ve kısa tekerlemeler.', h1: 'Kısa Tekerlemeler' },
  'uzun-tekerlemeler': { title: 'Uzun Tekerlemeler - Diksiyon Rehberi', desc: 'Nefes kontrolü ve akıcılık kazanmak için okuması uzun süren, upuzun tekerlemeler.', h1: 'Uzun Tekerlemeler' },
  'cocuklar-icin-tekerlemeler': { title: 'Çocuklar İçin Eğlenceli Tekerlemeler - Diksiyon Rehberi', desc: 'Okul öncesi ve ilkokul çocuklarının dil gelişimini destekleyen, eğlenceli ve kolay tekerlemeler.', h1: 'Çocuklar İçin Tekerlemeler' },
  'diksiyon-tekerlemeleri': { title: 'Diksiyon Geliştiren Tekerlemeler - Diksiyon Rehberi', desc: 'Spikerlerin ve tiyatrocuların kullandığı, profesyonel diksiyon geliştiren özel tekerlemeler.', h1: 'Diksiyon Tekerlemeleri' },
  'spiker-tekerlemeleri': { title: 'Spiker ve Sunucu Tekerlemeleri - Diksiyon Rehberi', desc: 'Haber spikerlerinin yayına çıkmadan önce ses açmak için okuduğu ileri seviye tekerlemeler.', h1: 'Spiker Tekerlemeleri' },
  'dudak-tembelligi-icin-tekerlemeler': { title: 'Dudak Tembelliği İçin Tekerlemeler - Diksiyon Rehberi', desc: 'P, B, M gibi dudak ünsüzlerini çalıştırarak dudak tembelliğini gideren tekerlemeler.', h1: 'Dudak Tembelliği Tekerlemeleri' },
  'r-harfi-tekerlemeleri': { title: 'R Harfi Tekerlemeleri - Diksiyon Rehberi', desc: 'R harfini söyleyemeyenler veya pelteklik sorunu yaşayanlar için özel R harfi egzersizleri.', h1: 'R Harfini Söyleyemeyenler İçin' },
  's-ve-s-harfi-tekerlemeleri': { title: 'S ve Ş Harfi Tekerlemeleri - Diksiyon Rehberi', desc: 'S ve Ş harflerini karıştıranlar için bu sesleri ayırt etmeye yönelik tekerlemeler.', h1: 'S ve Ş Harfi Karışanlar İçin' },
  'pelteklik-icin-tekerlemeler': { title: 'Pelteklik İçin Tekerlemeler - Diksiyon Rehberi', desc: 'Diş ünsüzleri olan S, Z, T, D harflerini düzelten ve peltekliği azaltan tekerlemeler.', h1: 'Pelteklik Egzersizleri' },
  'artikulasyon-tekerlemeleri': { title: 'Artikülasyon Tekerlemeleri - Diksiyon Rehberi', desc: 'Harfleri ve heceleri yutmadan, net bir şekilde telaffuz etmenizi sağlayan artikülasyon pratikleri.', h1: 'Artikülasyon Egzersizleri' },
  'tiyatro-tekerlemeleri': { title: 'Tiyatro Tekerlemeleri - Diksiyon Rehberi', desc: 'Oyuncuların ve tiyatrocuların sahneye çıkmadan önce ses ve nefes açtığı zorlu tekerlemeler.', h1: 'Tiyatrocular İçin Tekerlemeler' },
  'hizli-okuma-tekerlemeleri': { title: 'Hızlı Okuma Tekerlemeleri - Diksiyon Rehberi', desc: 'Göz kaslarını hızlandıran ve okuma hızınızı artıran, akıcı metinlerden oluşan tekerlemeler.', h1: 'Hızlı Okuma Metinleri' },
  'ilkokul-1-sinif-tekerlemeleri': { title: 'İlkokul 1. Sınıf Tekerlemeleri - Diksiyon Rehberi', desc: 'Okuma yazma öğrenen 1. sınıf öğrencileri için eğlenceli, kısa ve okuması kolay tekerlemeler.', h1: '1. Sınıflar İçin Tekerlemeler' },
  'komik-tekerlemeler': { title: 'Komik Tekerlemeler - Diksiyon Rehberi', desc: 'Okurken hem dilinizin dolanacağı hem de çok güleceğiniz en komik ve eğlenceli tekerlemeler.', h1: 'Komik ve Eğlenceli Tekerlemeler' },
  'yarismalik-zor-tekerlemeler': { title: 'Yarışmalık Zor Tekerlemeler - Diksiyon Rehberi', desc: 'Arkadaşlarınızla iddiaya girip yarışabileceğiniz, hatasız okunması neredeyse imkansız tekerlemeler.', h1: 'Yarışmalık Tekerlemeler' },
  'akil-karistiran-tekerlemeler': { title: 'Akıl Karıştıran Tekerlemeler - Diksiyon Rehberi', desc: 'Kelimelerin birbirine girdiği, okurken beyninizin yanacağı en akıl karıştırıcı tekerlemeler.', h1: 'Akıl Karıştıran Tekerlemeler' }
};

const _allTekers = Object.values(TEKERLEMELER).flat();
const KATEGORI_VERILERI = {
  'en-zor-tekerlemeler': _allTekers.filter(t => t.length > 90 || t.split(' ').length > 12).slice(0, 30),
  'kisa-tekerlemeler': _allTekers.filter(t => t.length <= 45).slice(0, 30),
  'uzun-tekerlemeler': _allTekers.filter(t => t.length >= 95).slice(0, 30),
  'cocuklar-icin-tekerlemeler': _allTekers.filter(t => t.length < 65 && !t.toLowerCase().includes('öl') && !t.toLowerCase().includes('kan') && !t.toLowerCase().includes('zorba')).slice(0, 30),
  'diksiyon-tekerlemeleri': _allTekers.filter(t => t.length >= 60 && t.length <= 85).slice(0, 30),
  'spiker-tekerlemeleri': _allTekers.filter(t => (t.match(/s|ş|z|r/gi) || []).length > 8 && t.length > 70).slice(0, 30),
  'dudak-tembelligi-icin-tekerlemeler': _allTekers.filter(t => (t.match(/p|b|m/gi) || []).length > 5).slice(0, 30),
  'r-harfi-tekerlemeleri': _allTekers.filter(t => (t.match(/r/gi) || []).length > 4).slice(0, 30),
  's-ve-s-harfi-tekerlemeleri': _allTekers.filter(t => (t.match(/s|ş/gi) || []).length > 4).slice(0, 30),
  'pelteklik-icin-tekerlemeler': _allTekers.filter(t => (t.match(/s|z|t|d/gi) || []).length > 6).slice(0, 30),
  'artikulasyon-tekerlemeleri': _allTekers.filter(t => t.length > 70 && t.split(' ').length > 8).slice(0, 30),
  'tiyatro-tekerlemeleri': _allTekers.filter(t => t.length > 85 && (t.match(/k|t|p|ç/gi) || []).length > 6).slice(0, 30),
  'hizli-okuma-tekerlemeleri': _allTekers.filter(t => t.split(' ').length > 10).slice(0, 30),
  'ilkokul-1-sinif-tekerlemeleri': _allTekers.filter(t => t.length < 55 && !t.toLowerCase().includes('öl')).slice(0, 30),
  'komik-tekerlemeler': _allTekers.filter(t => t.toLowerCase().includes('berber') || t.toLowerCase().includes('şemsipaşa') || t.toLowerCase().includes('cici')).slice(0, 30),
  'yarismalik-zor-tekerlemeler': _allTekers.filter(t => t.length > 100).slice(0, 30),
  'akil-karistiran-tekerlemeler': _allTekers.filter(t => t.split(' ').some(w => w.length > 10) && t.length > 80).slice(0, 30)
};
`;
fs.writeFileSync('public/tekerlemeler.js', newText, 'utf8');
console.log('Successfully wrote categories');
