const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'views', 'partials', 'main-header.ejs');
let html = fs.readFileSync(filePath, 'utf8');

const appsDesktop = {
  retorik: '<div class="mega-col"><h4>Simülasyonlar 🎮</h4><a class="top-nav-link" href="/retorik/araclar/radar">Logos Radarı</a><a class="top-nav-link" href="/retorik/araclar/kursu">Kürsü Baskısı</a><a class="top-nav-link" href="/retorik/araclar/ucgen">Denge Simülatörü</a><a class="top-nav-link" href="/retorik/araclar/kitle">Kitle Sörfü</a><a class="top-nav-link" href="/retorik/araclar/munazara">Münazara Satrancı</a></div>',
  giyim: '<div class="mega-col"><h4>Simülasyonlar 🎮</h4><a class="top-nav-link" href="/giyim/outfit">Outfit Lab</a></div>',
  safsata: '<div class="mega-col"><h4>Simülasyonlar 🎮</h4><a class="top-nav-link" href="/safsata/dedektif">Safsata Dedektifi</a><a class="top-nav-link" href="/safsata/kalkan">Çürütme Arenası</a><a class="top-nav-link" href="/safsata/karanlik">Karanlık Sanatlar</a><a class="top-nav-link" href="/safsata/trol-avcisi">Trol Avcısı</a><a class="top-nav-link" href="/safsata/mahkeme">Mahkeme Salonu</a></div>',
  sahne: '<div class="mega-col"><h4>Simülasyonlar 🎮</h4><a class="top-nav-link" href="/sahne/araclar/prompter">Teleprompter</a><a class="top-nav-link" href="/sahne/araclar/dogaclama">Doğaçlama</a><a class="top-nav-link" href="/sahne/araclar/nefes">Nefes Koçu</a><a class="top-nav-link" href="/sahne/araclar/sayac">Sahne Sayacı</a><a class="top-nav-link" href="/sahne/araclar/goz-temasi">Göz Teması</a><a class="top-nav-link" href="/sahne/araclar/vurgu">Vurgu Matrisi</a><a class="top-nav-link" href="/sahne/araclar/capraz-ates">Çapraz Ateş</a><a class="top-nav-link" href="/sahne/araclar/rulet">Tekerleme Ruleti</a><a class="top-nav-link" href="/sahne/araclar/duygu">Duygu Bukalemunu</a><a class="top-nav-link" href="/sahne/araclar/metronom">Konuşma Metronomu</a></div>',
  bedendili: '<div class="mega-col"><h4>Simülasyonlar 🎮</h4><a class="top-nav-link" href="/bedendili/dedektif">Yalan Dedektifi</a><a class="top-nav-link" href="/bedendili/radar">Çekim Radarı</a><a class="top-nav-link" href="/bedendili/kriz">Kriz Yönetimi</a></div>',
  ozguven: '<div class="mega-col"><h4>Simülasyonlar 🎮</h4><a class="top-nav-link" href="/ozguven/golge-boksu">Gölge Boksu</a><a class="top-nav-link" href="/ozguven/reddedilme">Reddedilme Terapisi</a><a class="top-nav-link" href="/ozguven/statu">Statü Arenası</a><a class="top-nav-link" href="/ozguven/aura">Aura Mimarı</a></div>',
  hikaye: '<div class="mega-col"><h4>Simülasyonlar 🎮</h4><a class="top-nav-link" href="/hikaye/kanca">Kanca Atıcı</a><a class="top-nav-link" href="/hikaye/kahraman">Kahramanın Yolculuğu</a></div>',
  gorgu: '<div class="mega-col"><h4>Simülasyonlar 🎮</h4><a class="top-nav-link" href="/gorgu-similator">Zeka Simülatörü</a><a class="top-nav-link" href="/gorgu-radar">Zarafet Radarı</a><a class="top-nav-link" href="/gorgu-dedektif">Görgü Dedektifi</a><a class="top-nav-link" href="/gorgu-sofra">Sofra Mimarı</a><a class="top-nav-link" href="/gorgu-diplomasi">Diplomasi Atölyesi</a></div>',
  manipulasyon: '<div class="mega-col"><h4>Simülasyonlar 🎮</h4><a class="top-nav-link" href="/retorik/araclar/karanlik">Manipülasyon Laboratuvarı</a></div>'
};

const appsMob = {
  retorik: '<a class="mob-link" href="/retorik/araclar/radar" style="color:#0ea5e9;font-weight:700">🎮 Logos Radarı</a><a class="mob-link" href="/retorik/araclar/kursu" style="color:#0ea5e9;font-weight:700">🎮 Kürsü Baskısı</a><a class="mob-link" href="/retorik/araclar/ucgen" style="color:#0ea5e9;font-weight:700">🎮 Denge Simülatörü</a><a class="mob-link" href="/retorik/araclar/kitle" style="color:#0ea5e9;font-weight:700">🎮 Kitle Sörfü</a><a class="mob-link" href="/retorik/araclar/munazara" style="color:#0ea5e9;font-weight:700">🎮 Münazara Satrancı</a>',
  giyim: '<a class="mob-link" href="/giyim/outfit" style="color:#0ea5e9;font-weight:700">🎮 Outfit Lab</a>',
  safsata: '<a class="mob-link" href="/safsata/dedektif" style="color:#0ea5e9;font-weight:700">🎮 Safsata Dedektifi</a><a class="mob-link" href="/safsata/kalkan" style="color:#0ea5e9;font-weight:700">🎮 Çürütme Arenası</a><a class="mob-link" href="/safsata/karanlik" style="color:#0ea5e9;font-weight:700">🎮 Karanlık Sanatlar</a><a class="mob-link" href="/safsata/trol-avcisi" style="color:#0ea5e9;font-weight:700">🎮 Trol Avcısı</a><a class="mob-link" href="/safsata/mahkeme" style="color:#0ea5e9;font-weight:700">🎮 Mahkeme Salonu</a>',
  sahne: '<a class="mob-link" href="/sahne/araclar/prompter" style="color:#0ea5e9;font-weight:700">🎮 Teleprompter</a><a class="mob-link" href="/sahne/araclar/dogaclama" style="color:#0ea5e9;font-weight:700">🎮 Doğaçlama</a><a class="mob-link" href="/sahne/araclar/nefes" style="color:#0ea5e9;font-weight:700">🎮 Nefes Koçu</a><a class="mob-link" href="/sahne/araclar/sayac" style="color:#0ea5e9;font-weight:700">🎮 Sahne Sayacı</a><a class="mob-link" href="/sahne/araclar/goz-temasi" style="color:#0ea5e9;font-weight:700">🎮 Göz Teması</a><a class="mob-link" href="/sahne/araclar/vurgu" style="color:#0ea5e9;font-weight:700">🎮 Vurgu Matrisi</a><a class="mob-link" href="/sahne/araclar/capraz-ates" style="color:#0ea5e9;font-weight:700">🎮 Çapraz Ateş</a><a class="mob-link" href="/sahne/araclar/rulet" style="color:#0ea5e9;font-weight:700">🎮 Tekerleme Ruleti</a><a class="mob-link" href="/sahne/araclar/duygu" style="color:#0ea5e9;font-weight:700">🎮 Duygu Bukalemunu</a><a class="mob-link" href="/sahne/araclar/metronom" style="color:#0ea5e9;font-weight:700">🎮 Konuşma Metronomu</a>',
  bedendili: '<a class="mob-link" href="/bedendili/dedektif" style="color:#0ea5e9;font-weight:700">🎮 Yalan Dedektifi</a><a class="mob-link" href="/bedendili/radar" style="color:#0ea5e9;font-weight:700">🎮 Çekim Radarı</a><a class="mob-link" href="/bedendili/kriz" style="color:#0ea5e9;font-weight:700">🎮 Kriz Yönetimi</a>',
  ozguven: '<a class="mob-link" href="/ozguven/golge-boksu" style="color:#0ea5e9;font-weight:700">🎮 Gölge Boksu</a><a class="mob-link" href="/ozguven/reddedilme" style="color:#0ea5e9;font-weight:700">🎮 Reddedilme Terapisi</a><a class="mob-link" href="/ozguven/statu" style="color:#0ea5e9;font-weight:700">🎮 Statü Arenası</a><a class="mob-link" href="/ozguven/aura" style="color:#0ea5e9;font-weight:700">🎮 Aura Mimarı</a>',
  hikaye: '<a class="mob-link" href="/hikaye/kanca" style="color:#0ea5e9;font-weight:700">🎮 Kanca Atıcı</a><a class="mob-link" href="/hikaye/kahraman" style="color:#0ea5e9;font-weight:700">🎮 Kahramanın Yolculuğu</a>',
  gorgu: '<a class="mob-link" href="/gorgu-similator" style="color:#0ea5e9;font-weight:700">🎮 Zeka Simülatörü</a><a class="mob-link" href="/gorgu-radar" style="color:#0ea5e9;font-weight:700">🎮 Zarafet Radarı</a><a class="mob-link" href="/gorgu-dedektif" style="color:#0ea5e9;font-weight:700">🎮 Görgü Dedektifi</a><a class="mob-link" href="/gorgu-sofra" style="color:#0ea5e9;font-weight:700">🎮 Sofra Mimarı</a><a class="mob-link" href="/gorgu-diplomasi" style="color:#0ea5e9;font-weight:700">🎮 Diplomasi Atölyesi</a>',
  manipulasyon: '<a class="mob-link" href="/retorik/araclar/karanlik" style="color:#0ea5e9;font-weight:700">🎮 Manipülasyon Lab</a>'
};

const navItems = Object.keys(appsDesktop);

for (const mod of navItems) {
  const marker = 'data-page="' + mod + '"';
  const modIdx = html.indexOf(marker);
  if (modIdx > -1) {
    const menuIdx = html.indexOf('class="mega-menu"', modIdx);
    if (menuIdx > -1) {
      let endIdx = html.indexOf('</div>\\n          </div>', menuIdx);
      if (endIdx === -1) endIdx = html.indexOf('</div>\\r\\n          </div>', menuIdx);
      if (endIdx === -1) endIdx = html.indexOf('</div>\\n            </div>\\n          </div>', menuIdx);
      if (endIdx === -1) endIdx = html.indexOf('</div>\\r\\n            </div>\\r\\n          </div>', menuIdx);
      if (endIdx === -1) endIdx = html.indexOf('</div> </div> </div>', menuIdx);
      
      if (endIdx > -1) {
        const block = html.substring(menuIdx, endIdx);
        if (!block.includes('Simülasyonlar')) {
          html = html.substring(0, endIdx) + "\\n" + appsDesktop[mod] + "\\n            " + html.substring(endIdx);
        }
      }
    }
  }
}

const mobileNames = {
  retorik: 'Retorik',
  giyim: 'İleri Seviye Giyim',
  safsata: 'Safsata',
  sahne: 'Sahne Ustalığı',
  bedendili: 'Beden Dili',
  ozguven: 'Özgüven',
  manipulasyon: 'Manipülasyon',
  hikaye: 'Hikayeleştirme',
  gorgu: 'Görgü Kuralları'
};

for (const mod of navItems) {
  const summaryName = mobileNames[mod];
  const summaryMarker = '<summary class="mob-summary">' + summaryName + '</summary>';
  const summaryIdx = html.indexOf(summaryMarker);
  if (summaryIdx > -1) {
    let endIdx = html.indexOf('</div>\\n        </details>', summaryIdx);
    if (endIdx === -1) endIdx = html.indexOf('</div>\\r\\n        </details>', summaryIdx);
    if (endIdx === -1) endIdx = html.indexOf('</div>\\n          </div>\\n        </details>', summaryIdx);
    if (endIdx === -1) endIdx = html.indexOf('</div> </details>', summaryIdx);
    
    if (endIdx > -1) {
      const block = html.substring(summaryIdx, endIdx);
      if (!block.includes('🎮')) {
        html = html.substring(0, endIdx) + "\\n" + appsMob[mod] + "\\n          " + html.substring(endIdx);
      }
    }
  }
}

fs.writeFileSync(filePath, html, 'utf8');
console.log('Header patched perfectly!');
