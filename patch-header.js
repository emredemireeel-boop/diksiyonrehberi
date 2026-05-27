const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'views', 'partials', 'main-header.ejs');
let html = fs.readFileSync(filePath, 'utf8');

const apps = {
  retorik: '<div class="mega-col"><h4>Simülasyonlar 🎮</h4><a class="top-nav-link" href="/retorik/araclar/radar">Logos Radarı</a><a class="top-nav-link" href="/retorik/araclar/kursu">Kürsü Baskısı</a><a class="top-nav-link" href="/retorik/araclar/ucgen">Denge Simülatörü</a><a class="top-nav-link" href="/retorik/araclar/kitle">Kitle Sörfü</a><a class="top-nav-link" href="/retorik/araclar/munazara">Münazara Satrancı</a></div>',
  retorikMob: '<a class="mob-link" href="/retorik/araclar/radar" style="color:#0ea5e9">🎮 Logos Radarı</a><a class="mob-link" href="/retorik/araclar/kursu" style="color:#0ea5e9">🎮 Kürsü Baskısı</a><a class="mob-link" href="/retorik/araclar/ucgen" style="color:#0ea5e9">🎮 Denge Simülatörü</a><a class="mob-link" href="/retorik/araclar/kitle" style="color:#0ea5e9">🎮 Kitle Sörfü</a><a class="mob-link" href="/retorik/araclar/munazara" style="color:#0ea5e9">🎮 Münazara Satrancı</a>',
  giyim: '<div class="mega-col"><h4>Simülasyonlar 🎮</h4><a class="top-nav-link" href="/giyim/outfit">Outfit Lab</a></div>',
  giyimMob: '<a class="mob-link" href="/giyim/outfit" style="color:#0ea5e9">🎮 Outfit Lab</a>',
  safsata: '<div class="mega-col"><h4>Simülasyonlar 🎮</h4><a class="top-nav-link" href="/safsata/dedektif">Safsata Dedektifi</a><a class="top-nav-link" href="/safsata/kalkan">Çürütme Arenası</a><a class="top-nav-link" href="/safsata/karanlik">Karanlık Sanatlar</a><a class="top-nav-link" href="/safsata/trol-avcisi">Trol Avcısı</a><a class="top-nav-link" href="/safsata/mahkeme">Mahkeme Salonu</a></div>',
  safsataMob: '<a class="mob-link" href="/safsata/dedektif" style="color:#0ea5e9">🎮 Safsata Dedektifi</a><a class="mob-link" href="/safsata/kalkan" style="color:#0ea5e9">🎮 Çürütme Arenası</a><a class="mob-link" href="/safsata/karanlik" style="color:#0ea5e9">🎮 Karanlık Sanatlar</a><a class="mob-link" href="/safsata/trol-avcisi" style="color:#0ea5e9">🎮 Trol Avcısı</a><a class="mob-link" href="/safsata/mahkeme" style="color:#0ea5e9">🎮 Mahkeme Salonu</a>',
  sahne: '<div class="mega-col"><h4>Simülasyonlar 🎮</h4><a class="top-nav-link" href="/sahne/araclar/prompter">Teleprompter</a><a class="top-nav-link" href="/sahne/araclar/dogaclama">Doğaçlama</a><a class="top-nav-link" href="/sahne/araclar/nefes">Nefes Koçu</a><a class="top-nav-link" href="/sahne/araclar/sayac">Sahne Sayacı</a><a class="top-nav-link" href="/sahne/araclar/goz-temasi">Göz Teması</a><a class="top-nav-link" href="/sahne/araclar/vurgu">Vurgu Matrisi</a><a class="top-nav-link" href="/sahne/araclar/capraz-ates">Çapraz Ateş</a><a class="top-nav-link" href="/sahne/araclar/rulet">Tekerleme Ruleti</a><a class="top-nav-link" href="/sahne/araclar/duygu">Duygu Bukalemunu</a><a class="top-nav-link" href="/sahne/araclar/metronom">Konuşma Metronomu</a></div>',
  sahneMob: '<a class="mob-link" href="/sahne/araclar/prompter" style="color:#0ea5e9">🎮 Teleprompter</a><a class="mob-link" href="/sahne/araclar/dogaclama" style="color:#0ea5e9">🎮 Doğaçlama</a><a class="mob-link" href="/sahne/araclar/nefes" style="color:#0ea5e9">🎮 Nefes Koçu</a><a class="mob-link" href="/sahne/araclar/sayac" style="color:#0ea5e9">🎮 Sahne Sayacı</a><a class="mob-link" href="/sahne/araclar/goz-temasi" style="color:#0ea5e9">🎮 Göz Teması</a><a class="mob-link" href="/sahne/araclar/vurgu" style="color:#0ea5e9">🎮 Vurgu Matrisi</a><a class="mob-link" href="/sahne/araclar/capraz-ates" style="color:#0ea5e9">🎮 Çapraz Ateş</a><a class="mob-link" href="/sahne/araclar/rulet" style="color:#0ea5e9">🎮 Tekerleme Ruleti</a><a class="mob-link" href="/sahne/araclar/duygu" style="color:#0ea5e9">🎮 Duygu Bukalemunu</a><a class="mob-link" href="/sahne/araclar/metronom" style="color:#0ea5e9">🎮 Konuşma Metronomu</a>',
  bedendili: '<div class="mega-col"><h4>Simülasyonlar 🎮</h4><a class="top-nav-link" href="/bedendili/dedektif">Yalan Dedektifi</a><a class="top-nav-link" href="/bedendili/radar">Çekim Radarı</a><a class="top-nav-link" href="/bedendili/kriz">Kriz Yönetimi</a></div>',
  bedendiliMob: '<a class="mob-link" href="/bedendili/dedektif" style="color:#0ea5e9">🎮 Yalan Dedektifi</a><a class="mob-link" href="/bedendili/radar" style="color:#0ea5e9">🎮 Çekim Radarı</a><a class="mob-link" href="/bedendili/kriz" style="color:#0ea5e9">🎮 Kriz Yönetimi</a>',
  ozguven: '<div class="mega-col"><h4>Simülasyonlar 🎮</h4><a class="top-nav-link" href="/ozguven/golge-boksu">Gölge Boksu</a><a class="top-nav-link" href="/ozguven/reddedilme">Reddedilme Terapisi</a><a class="top-nav-link" href="/ozguven/statu">Statü Arenası</a><a class="top-nav-link" href="/ozguven/aura">Aura Mimarı</a></div>',
  ozguvenMob: '<a class="mob-link" href="/ozguven/golge-boksu" style="color:#0ea5e9">🎮 Gölge Boksu</a><a class="mob-link" href="/ozguven/reddedilme" style="color:#0ea5e9">🎮 Reddedilme Terapisi</a><a class="mob-link" href="/ozguven/statu" style="color:#0ea5e9">🎮 Statü Arenası</a><a class="mob-link" href="/ozguven/aura" style="color:#0ea5e9">🎮 Aura Mimarı</a>',
  hikaye: '<div class="mega-col"><h4>Simülasyonlar 🎮</h4><a class="top-nav-link" href="/hikaye/kanca">Kanca Atıcı</a><a class="top-nav-link" href="/hikaye/kahraman">Kahramanın Yolculuğu</a></div>',
  hikayeMob: '<a class="mob-link" href="/hikaye/kanca" style="color:#0ea5e9">🎮 Kanca Atıcı</a><a class="mob-link" href="/hikaye/kahraman" style="color:#0ea5e9">🎮 Kahramanın Yolculuğu</a>',
  gorgu: '<div class="mega-col"><h4>Simülasyonlar 🎮</h4><a class="top-nav-link" href="/gorgu-similator">Zeka Simülatörü</a><a class="top-nav-link" href="/gorgu-radar">Zarafet Radarı</a><a class="top-nav-link" href="/gorgu-dedektif">Görgü Dedektifi</a><a class="top-nav-link" href="/gorgu-sofra">Sofra Mimarı</a><a class="top-nav-link" href="/gorgu-diplomasi">Diplomasi Atölyesi</a></div>',
  gorguMob: '<a class="mob-link" href="/gorgu-similator" style="color:#0ea5e9">🎮 Zeka Simülatörü</a><a class="mob-link" href="/gorgu-radar" style="color:#0ea5e9">🎮 Zarafet Radarı</a><a class="mob-link" href="/gorgu-dedektif" style="color:#0ea5e9">🎮 Görgü Dedektifi</a><a class="mob-link" href="/gorgu-sofra" style="color:#0ea5e9">🎮 Sofra Mimarı</a><a class="mob-link" href="/gorgu-diplomasi" style="color:#0ea5e9">🎮 Diplomasi Atölyesi</a>',
  manipulasyon: '<div class="mega-col"><h4>Simülasyonlar 🎮</h4><a class="top-nav-link" href="/retorik/araclar/karanlik">Manipülasyon Laboratuvarı</a></div>',
  manipulasyonMob: '<a class="mob-link" href="/retorik/araclar/karanlik" style="color:#0ea5e9">🎮 Manipülasyon Lab</a>',
};

function injectDesktop(moduleName, htmlStr) {
  // Use regex to match the mega-menu div corresponding to data-page="moduleName"
  const regex = new RegExp('(<a[^>]+data-page="' + moduleName + '"[^>]*>[\\\\s\\\\S]*?<div class="mega-menu">)([\\\\s\\\\S]*?)(</div>\\\\s*</div>)', 'g');
  return htmlStr.replace(regex, (match, p1, p2, p3) => {
    if (p2.includes("Simülasyonlar")) return match; // already injected
    return p1 + p2 + apps[moduleName] + p3;
  });
}

function injectMobile(moduleName, htmlStr, summaryName) {
  const regex = new RegExp('(<summary class="mob-summary">' + summaryName + '</summary>\\\\s*<div class="mob-dropdown-content">)([\\\\s\\\\S]*?)(</div>\\\\s*</details>)', 'g');
  return htmlStr.replace(regex, (match, p1, p2, p3) => {
    if (p2.includes("Simülasyonlar") || p2.includes("🎮")) return match; // already injected
    return p1 + p2 + apps[moduleName + 'Mob'] + p3;
  });
}

// Inject Desktop menus
html = injectDesktop('retorik', html);
html = injectDesktop('giyim', html);
html = injectDesktop('safsata', html);
html = injectDesktop('sahne', html);
html = injectDesktop('bedendili', html);
html = injectDesktop('ozguven', html);
html = injectDesktop('manipulasyon', html);
html = injectDesktop('hikaye', html);
html = injectDesktop('gorgu', html);

// Inject Mobile menus
html = injectMobile('retorik', html, 'Retorik');
html = injectMobile('giyim', html, 'İleri Seviye Giyim');
html = injectMobile('safsata', html, 'Safsata');
html = injectMobile('sahne', html, 'Sahne Ustalığı');
html = injectMobile('bedendili', html, 'Beden Dili');
html = injectMobile('ozguven', html, 'Özgüven');
html = injectMobile('manipulasyon', html, 'Manipülasyon');
html = injectMobile('hikaye', html, 'Hikayeleştirme');
html = injectMobile('gorgu', html, 'Görgü Kuralları');

fs.writeFileSync(filePath, html, 'utf8');
console.log('Header patched successfully!');
