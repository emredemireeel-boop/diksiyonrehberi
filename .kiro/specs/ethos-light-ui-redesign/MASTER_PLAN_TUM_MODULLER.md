# 🏆 TÜM MODÜLLER MASTER PLANI — Lüks UI/UX + Trafik

## 0. Altın Standart (Referans)
`retorik-index.ejs` tüm modüllerin hedef kalite seviyesidir. Özellikleri:
- **Fontlar:** Playfair Display (başlık) + Outfit (gövde) + JetBrains Mono (etiket)
- **Renk:** Navy (#0f172a) + Gold (#b8860b/#d4a017) + Krem (#faf9f7)
- **Efektler:** Ambient blob'lar, gold parçacıklar, grid overlay, glassmorphism
- **Kartlar:** `r-master-card` (başyapıt) + `r-tool-card` (mini) + `r-pillar-card`
- **Hover:** translateY(-6px/-8px) + cubic-bezier(0.34,1.56,0.64,1) + glow

**Kural:** Her modül bu sistemi ortak bir `luxury-base.css` üzerinden paylaşmalı, sadece accent rengi değişmeli.

## 1. Modül Renk Kimlikleri (Marka Tutarlılığı)
| Modül | Accent | Tema |
|-------|--------|------|
| Retorik | Gold #b8860b | Antik bilgelik |
| Diyalektik | Mor #7c5cfc | Tez-antitez |
| Safsata | Kırmızı #ef4444 | Uyarı/savunma |
| Sahne | Turkuaz #06b6d4 | Performans |
| Beden Dili | Yeşil #10b981 | Sözsüz dil |
| Özgüven | Turuncu #f59e0b | Enerji/güç |
| Manipülasyon | Koyu mor #6d28d9 | Karanlık sanat |
| Hikaye | Lacivert #3b82f6 | Anlatı |
| Görgü | Bronz #a16207 | Zarafet |
| Giyim | Antrasit #475569 | İmaj |

## 2. UYGULAMA ADIMLARI (Sıralı Yol Haritası)

### FAZ 1 — Tasarım Temeli (Önce bunu yap)
**Adım 1: Ortak `luxury-base.css` oluştur**
- Retorik CSS'inden ambient/blob/sparkle/grid/glass/hero/pillar/master-card stillerini çıkar
- `--accent`, `--accent2`, `--accent-glow` değişkenleriyle parametrik yap
- Her modül kendi accent'ini `:root` override ile verir
- Kazanç: Tek dosyada bakım, %100 görsel tutarlılık

**Adım 2: Ortak partial'lar**
- `partials/lux-hero.ejs` → overline + title + tagline + desc + stats (parametrik)
- `partials/lux-academy.ejs` → onboarding/rehber bloğu
- `partials/lux-tools.ejs` → master + mini kart grid'i
- Kazanç: Yeni modül = sadece veri doldurma

### FAZ 2 — Modülleri Sıraya Koyma (Trafik önceliğine göre)
Arama hacmi ve dönüşüm potansiyeline göre öncelik:
1. **Özgüven** (yüksek arama: "özgüven nasıl gelişir")
2. **Beden Dili** ("beden dili okuma")
3. **Giyim** ("iş görüşmesi kıyafeti", görsel ağırlıklı)
4. **Sahne** ("sunum korkusu", "topluluk önünde konuşma")
5. Diğerleri (Görgü, Hikaye, Manipülasyon, Safsata, Diyalektik)

### FAZ 3 — Her Modül İçin Standart İşlem (Modül başına tekrarlanır)
Her modül için sırayla:
1. Index sayfasını `luxury-base.css` + partial'lara taşı
2. Hero istatistiklerini gerçek/etkileyici verilerle doldur
3. En az 1 "başyapıt" interaktif araç + 2-3 mini araç ekle
4. Akademi/rehber bölümü (3 kart: Nedir / Ne işe yarar / Nasıl gelişir)
5. SEO içeriği (aşağıdaki Faz 4)
6. Mobil + erişilebilirlik kontrolü

## 3. TRAFİK STRATEJİSİ (SEO + Dönüşüm)

### Adım: Teknik SEO Temizliği
- `index.js` içindeki `TOOLS_META` doldurulmamış (title="teleprompter", desc=""). Her araç için gerçek title/desc/h1 yaz.
- Her sayfaya `Schema.org` structured data ekle:
  - Index sayfaları → `Course` veya `LearningResource`
  - Araçlar → `WebApplication` / `HowTo`
  - FAQ blokları → `FAQPage` (zengin sonuç = tıklama artışı)
- `og:image` her modül için özel görsel (sosyal paylaşımda tıklama).
- Sitemap'e tüm araç + detay URL'lerini ekle, `lastmod` güncel tut.

### Adım: İçerik/Kelime Stratejisi (uzun kuyruk)
Her modülde "Rehber" bölümünü gerçek arama sorgularına göre yaz:
- Özgüven → "özgüven nasıl kazanılır", "sosyal kaygı ile başa çıkma"
- Beden Dili → "yalan söyleyen birinin beden dili", "iş görüşmesinde beden dili"
- Giyim → "iş görüşmesi kıyafeti kadın/erkek", "vücut tipine göre giyim"
- Sahne → "topluluk önünde konuşma korkusu nasıl yenilir"
Her sayfada 800-1500 kelime özgün içerik + FAQ + iç linkler.

### Adım: İç Linkleme Ağı
- Her modül diğer 2-3 ilgili modüle link versin (Beden Dili ↔ Özgüven ↔ Sahne).
- Blog yazılarından modüllere, modüllerden araçlara çapraz link.
- "İlgili Eğitimler" bloğu her sayfanın altına.

### Adım: Dönüşüm/Tutundurma (engagement = SEO sinyali)
- İnteraktif araçlar (puanlı simülatörler) süreyi uzatır → sıralama artar.
- localStorage ile ilerleme/rozet → geri dönüş.
- Sonuç paylaşma butonu ("Ethos puanım 95/100") → sosyal trafik.

## 4. KALİTE KONTROL CHECKLIST (Her modül için)
- [ ] Playfair + Outfit fontları yüklü
- [ ] Ambient efektler + glassmorphism var
- [ ] Hero'da gerçek istatistikler
- [ ] En az 1 başyapıt + 2 mini araç
- [ ] Rehber/akademi bölümü (3 kart)
- [ ] 800+ kelime SEO içeriği + FAQ
- [ ] Schema.org structured data
- [ ] Özel og:image
- [ ] Mobil < 480px sorunsuz
- [ ] WCAG AA kontrast + ARIA + klavye
- [ ] İç linkler (2-3 ilgili modül)
- [ ] LCP < 2s, CSS < 100KB

## 5. ÖNERİLEN BAŞLANGIÇ
İlk somut iş: **FAZ 1 Adım 1 + 2** (ortak CSS + partial'lar), sonra **Özgüven** modülünü pilot olarak tam standarda çek. Pilot onaylanınca aynı kalıbı diğer 8 modüle uygula.

## 6. İLERLEME KAYDI

### ✅ PİLOT TAMAMLANDI — Özgüven Modülü (ozguven-index.ejs)
- Koyu tema (#0A0A0A) → Açık lüks tema (Retorik altın standardı) çevrildi
- Playfair Display + Outfit + JetBrains Mono fontları
- **Bug düzeltildi:** Sayfa Font Awesome ikonları kullanıyordu ama FA yüklü değildi (kırık ikonlar). Tüm `fa-solid` ikonlar emoji'ye çevrildi (sıfır harici bağımlılık).
- Ambient blob efektleri + grid overlay eklendi
- Eski koyu tema artıkları temizlendi (rgba(255,255,255), color:white, #cbd5e1)
- **Trafik için eklendi:** 800+ kelime SEO içeriği, 4 soruluk SSS + FAQPage Schema.org structured data, "İlgili Eğitimler" iç linkleme bloğu (bedendili, sahne, retorik, golge-boksu)
- index.js SEO meta zenginleştirildi (title/desc/h1 + uzun kuyruk anahtar kelimeler)
- Tüm interaktivite korundu: özgüven testi, senaryo simülatörleri, 4-7-8 nefes animasyonu
- EJS render testi: OK (91KB) | Canlı HTTP testi: 200 (95KB)

### ✅ TAMAMLANDI — Beden Dili Modülü (bedendili-index.ejs)
- Koyu tema → açık lüks tema (Accent: Zümrüt Yeşili). Otomatik dönüşüm script'i ile 116 renk değeri çevrildi.
- **Bug düzeltildi:** Sayfa 43 Font Awesome ikonu kullanıyordu ama FA yüklü değildi → FA CDN eklendi (ikonlar artık çalışıyor).
- Ambient blob + grid overlay, Playfair başlıklar, lüks badge + hero eklendi.
- Yeşil zemin üstü metinler okunabilirlik için beyaza çevrildi (tab, buton, tracker).
- **index.js bug düzeltildi:** İki adet `/bedendili` route'u vardı (ilki TOOLS_META'da olmayan anahtar arıyordu → placeholder'a düşüyordu). Tek route'a indirildi + zengin SEO meta.
- **Trafik için:** 800+ kelime SEO içeriği (Mehrabian, yalan okuma), 4 soruluk SSS + FAQPage schema, "İlgili Eğitimler" iç linkleme.
- Tüm interaktivite korundu: 5 bileşen tab, karşılaştırma slider, senaryo simülatörü, vaka analizi, checklist, eğitim modülü, sözlük arama.
- index.js syntax OK | Render OK (144KB) | Canlı HTTP 200 (148KB)

### ✅ TAMAMLANDI — Manipülasyon Modülü (manipulasyon-index.ejs)
- Zaten açık "Apple-inspired" temadaydı; altın standarda hizalandı (Playfair/Outfit fontlar, koyu mor accent = karanlık sanat).
- Ambient blob + grid overlay eklendi. Sistem fontları → Playfair (başlık) + Outfit (gövde). Lüks badge.
- Bento grid + uygulama kartları korundu, başlıklar Playfair + navy yapıldı.
- **Trafik için:** 800+ kelime SEO içeriği (manipülasyon/ikna farkı, gaslighting, gri kaya, FOG), 4 soruluk SSS + FAQPage schema, "İlgili Eğitimler" iç linkleme (safsata, özgüven, bedendili, retorik).
- index.js meta zenginleştirildi (TOOLS_META fallback → zengin inline meta + h1).
- Render OK (77KB) | Canlı HTTP 200 (80KB)

### ✅ TAMAMLANDI — Retorik (kaynak modül trafik güçlendirmesi)
- Görsel zaten altın standarttı. Eksik trafik bileşenleri eklendi: 800+ kelime SEO içeriği, 4 soruluk SSS + FAQPage schema, "İlgili Eğitimler" iç linkleme. Kendi --r- değişkenleriyle %100 görsel tutarlılık.

### ✅ TAMAMLANDI — Safsata Modülü (safsata-index.ejs)
- Sayfa kendine has "sürrealist kozmik" koyu mor temada (özenli tasarım) — kimliği korundu, bozulmadı.
- Zaten Playfair + Outfit, Font Awesome yok, temiz.
- **Trafik için:** 800+ kelime SEO içeriği (safsata nedir, türleri, korunma), 4 soruluk SSS + FAQPage schema, "İlgili Eğitimler" iç linkleme (retorik, diyalektik, manipülasyon, dedektif). Hepsi --saf- değişkenleriyle koyu temaya uyumlu.
- index.js meta zenginleştirildi (uzun kuyruk: "safsata nedir", "mantık hataları").
- Render OK (127KB) | Canlı HTTP 200 (134KB)

### SIRADAKİ
- Giyim, Sahne, Görgü, Hikaye, Diyalektik
