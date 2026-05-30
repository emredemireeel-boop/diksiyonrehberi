# Requirements Document

## Introduction

Diksiyon Rehberi web sitesinin Retorik modülü içinde "Ethos (Güvenilirlik)" bölümünü lüks, profesyonel ve modern bir UI/UX ile yeniden tasarlamak. Ethos Light versiyonu, Aristoteles'in Ethos konseptini (Phronesis, Arete, Eunoia) etkili ve öğretici bir şekilde sunacak. Bu tasarım, mevcut retorik modülü mimarisine uyum sağlarken, yeni bir görsel kimlik ve etkileşim modeli sunacaktır.

**Proje Adı:** Retorik Modülü - Ethos Light Versiyonu UI/UX Tasarımı

## Glossary

- **Ethos**: Antik Yunanca'da "karakter" anlamına gelen, konuşmacının yetkinliği, dürüstlüğü ve dinleyiciye olan iyi niyetinin toplamı
- **Phronesis**: Pratik bilgelik ve uzmanlık; konuya hakim olma ve deneyim
- **Arete**: Ahlaki karakter; dürüstlük, tutarlılık ve adalet
- **Eunoia**: İyi niyet; dinleyicinin çıkarlarını gözetme
- **Hero Section**: Sayfanın en üst kısmında yer alan, dikkat çeken giriş bölümü
- **Interactive Card**: Kullanıcı etkileşimine yanıt veren, dinamik içerik sunan kart bileşeni
- **Simulator**: Kullanıcıların seçimler yaparak Ethos puanı hesaplayabileceği etkileşimli araç
- **Takeaways**: Önemli çıkarımlar ve pratik ipuçları
- **WCAG AA**: Web Accessibility Guidelines Level AA standardı
- **Responsive Design**: Farklı ekran boyutlarına uyum sağlayan tasarım
- **Semantic HTML**: Anlamsal HTML5 yapısı
- **CSS Variables**: CSS'te tanımlanan yeniden kullanılabilir değişkenler
- **Accessibility**: Erişilebilirlik; tüm kullanıcıların siteyi kullanabilmesi

## Requirements

### Requirement 1: Hero Section - Ethos Definition and Importance

**User Story:** As a professional or student, when I enter the Ethos module, I want to immediately understand what this concept is and why it's important.

#### Acceptance Criteria

1. WHEN Ethos Light page loads, THE Hero_Section SHALL display a visually striking title, subtitle, and brief description
2. THE Hero_Section SHALL use a professional background image or gradient to create a luxury feel
3. THE Hero_Section SHALL provide a clear 2-3 sentence answer to "What is Ethos?"
4. THE Hero_Section SHALL include at least one "Get Started" or "Continue" call-to-action button
5. WHILE Hero_Section is displayed, THE Typography SHALL use serif (Playfair Display) for headings and sans-serif (Plus Jakarta Sans) for body text
6. THE Hero_Section SHALL display fully and legibly on mobile devices (below 480px)

### Requirement 3: Build Process - Step-by-Step Guide

**User Story:** I want to learn how to build Ethos step by step. I want to see clear instructions and examples at each step.

#### Acceptance Criteria

1. WHEN I reach the Build Process section, THE Process_Guide SHALL display at least 5 steps in sequence
2. THE Process_Guide SHALL number each step and include title, explanation, and practical example
3. THE Process_Guide SHALL show visual connection between steps (e.g., vertical line or arrows)
4. WHEN a step is clicked, THE Step_Details SHALL display detailed explanation and real-world example
5. THE Process_Guide SHALL use accordion (collapsible) structure with only one step open at a time
6. THE Process_Guide SHALL display legibly on mobile devices with steps arranged vertically

### Requirement 4: Real-World Example - Warren Buffett Analysis

**User Story:** I want to see how the Ethos concept is applied in real life. I want to examine an example from a successful person like Warren Buffett.

#### Acceptance Criteria

1. WHEN I reach the Warren Buffett Analysis section, THE Analysis_Card SHALL display a quote or passage from Buffett's letter
2. THE Analysis_Card SHALL include notes below the quote explaining how the 3 components of Ethos (Phronesis, Arete, Eunoia) appear in this quote
3. THE Analysis_Card SHALL use color coding for each component (e.g., Phronesis=blue, Arete=green, Eunoia=gold)
4. THE Analysis_Card SHALL highlight relevant words or sentences in the quote
5. THE Analysis_Card SHALL include 3-4 items under "Key Takeaways from This Example"
6. THE Analysis_Card SHALL display fully and legibly on mobile devices

### Gereksinim 3: İnşa Süreci - Adım Adım Rehber

**Kullanıcı Hikayesi:** Ethos'u nasıl inşa edeceğimi adım adım öğrenmek istiyorum. Her adımda net talimatlar ve örnekler görmek istiyorum.

#### Kabul Kriterleri

1. WHEN İnşa Süreci bölümüne ulaştığımda, THE Process_Guide SHALL en az 5 adımı sırayla göstermeli
2. THE Process_Guide SHALL her adımı numaralandırmalı ve başlık, açıklama ve pratik örnek içermeli
3. THE Process_Guide SHALL adımlar arasında görsel bir bağlantı (örneğin, dikey bir çizgi veya ok) göstermeli
4. WHEN bir adıma tıklandığında, THE Step_Details SHALL o adımın detaylı açıklamasını ve gerçek hayat örneğini göstermeli
5. THE Process_Guide SHALL accordion (katlanabilir) yapısı kullanmalı ve bir seferde sadece bir adım açık olmalıdır
6. THE Process_Guide SHALL mobil cihazlarda okunabilir şekilde görüntülenmeli ve adımlar dikey olarak sıralanmalıdır

### Gereksinim 4: Gerçek Hayat Örneği - Warren Buffett Analizi

**Kullanıcı Hikayesi:** Ethos konseptinin gerçek hayatta nasıl uygulandığını görmek istiyorum. Warren Buffett gibi başarılı bir kişinin örneğini incelemek istiyorum.

#### Kabul Kriterleri

1. WHEN Warren Buffett Analizi bölümüne ulaştığımda, THE Analysis_Card SHALL Buffett'ın bir alıntısını veya mektubundan bir pasajı göstermeli
2. THE Analysis_Card SHALL alıntının altında, Ethos'un 3 bileşeninin (Phronesis, Arete, Eunoia) bu alıntıda nasıl göründüğünü açıklayan notlar içermeli
3. THE Analysis_Card SHALL her bileşen için renk kodlaması (örneğin, Phronesis=mavi, Arete=yeşil, Eunoia=altın) kullanmalıdır
4. THE Analysis_Card SHALL alıntıdaki ilgili kelimeleri veya cümleleri vurgulayarak (highlight) göstermeli
5. THE Analysis_Card SHALL "Bu örnekten çıkarımlar" başlığı altında 3-4 madde içermeli
6. THE Analysis_Card SHALL mobil cihazlarda tam genişlikte ve okunabilir şekilde görüntülenmeli

### Requirement 5: Interactive Simulator - Ethos Score Calculation

**User Story:** I want to apply the Ethos concept practically. I should be able to make different choices, calculate my Ethos score, and receive feedback.

#### Acceptance Criteria

1. WHEN I reach the Interactive Simulator section, THE Simulator SHALL present a scenario (e.g., "You are giving a speech to market a new product")
2. THE Simulator SHALL include at least 3 steps for the scenario and present 3-4 options at each step
3. WHEN I click an option, THE Simulator SHALL display the Ethos score for that option (0-100 range)
4. THE Simulator SHALL display detailed feedback text explaining why that option received that score
5. WHEN all steps are completed, THE Final_Score SHALL display the total Ethos score and overall assessment
6. THE Simulator SHALL include a "Try Again" button and allow users to reset scores
7. THE Simulator SHALL display fully on mobile devices and be suitable for touch interaction

### Requirement 6: Takeaways - Key Insights

**User Story:** After completing the Ethos module, I want to quickly see the most important points I've learned.

#### Acceptance Criteria

1. WHEN I reach the Takeaways section, THE Takeaways_Section SHALL contain at least 5 items
2. THE Takeaways_Section SHALL use an icon or emoji at the beginning of each item
3. THE Takeaways_Section SHALL keep each item brief and concise (1-2 sentences)
4. THE Takeaways_Section SHALL display items in a grid or list format
5. THE Takeaways_Section SHALL display in a single column on mobile devices
6. THE Takeaways_Section SHALL provide WCAG AA contrast

### Requirement 7: Further Reading - Resources and Links

**User Story:** I want to learn more about Ethos. I want to see recommended resources and links.

#### Acceptance Criteria

1. WHEN I reach the Further Reading section, THE Resources_Section SHALL contain at least 5 resources (books, articles, videos)
2. THE Resources_Section SHALL display each resource's title, author/publisher, and brief description
3. THE Resources_Section SHALL include an external link icon next to each resource
4. WHEN I click a resource, THE Link SHALL open in a new tab (target="_blank")
5. THE Resources_Section SHALL organize resources by categories (Books, Articles, Videos)
6. THE Resources_Section SHALL display legibly on mobile devices

### Requirement 8: Design System - Color Palette and Typography

**User Story:** Ethos Light version should be compatible with the current site design and present a professional appearance.

#### Acceptance Criteria

1. THE Design_System SHALL use existing site CSS variables (--primary, --gold, --surface, etc.)
2. THE Design_System SHALL use Playfair Display (serif) for headings
3. THE Design_System SHALL use Plus Jakarta Sans (sans-serif) for body text
4. THE Design_System SHALL use a professional color palette: Navy (#0F1F3D), Gold (#C9A84C), White (#FDFCF9), Gray (#A8B2C0)
5. THE Design_System SHALL use consistent border-radius (10px, 16px, 22px) across all components
6. THE Design_System SHALL use consistent shadow effects across all components
7. THE Design_System SHALL meet WCAG AA accessibility standards

### Requirement 9: Animation and Interaction - Elegant Transitions

**User Story:** While navigating the page, animations and transitions should be elegant and non-distracting.

#### Acceptance Criteria

1. THE Animations SHALL use 0.22 seconds (--tr: .22s cubic-bezier(.4,0,.2,1)) for all transitions
2. THE Animations SHALL show a subtle lift (transform: translateY(-2px)) on hover states
3. THE Animations SHALL use fade-in effect when cards open
4. THE Animations SHALL show feedback animation when simulator options are selected
5. THE Animations SHALL be optimized for performance on mobile devices (GPU acceleration)
6. THE Animations SHALL provide accessibility via prefers-reduced-motion media query

### Requirement 10: Performance - Fast Loading and Optimization

**User Story:** Ethos Light page should load quickly and work smoothly on all devices.

#### Acceptance Criteria

1. THE Page_Performance SHALL provide load time under 2 seconds (LCP < 2s)
2. THE CSS_File SHALL be smaller than 100KB
3. THE Page_Performance SHALL serve all images in optimized formats (WebP, JPEG)
4. THE Page_Performance SHALL use lazy loading for images
5. THE Page_Performance SHALL minify CSS and JavaScript
6. THE Page_Performance SHALL work smoothly on all browsers (Chrome, Firefox, Safari, Edge)
7. THE Page_Performance SHALL load quickly on mobile devices (3G connection)

### Requirement 11: Accessibility - WCAG AA Compliance

**User Story:** Ethos Light page should be accessible to all users, including those with disabilities.

#### Acceptance Criteria

1. THE Accessibility SHALL use ARIA labels on all components
2. THE Accessibility SHALL use descriptive text on all buttons and links
3. THE Accessibility SHALL include alt text (alt attribute) on all images
4. THE Accessibility SHALL support keyboard navigation (Tab, Enter, Escape)
5. THE Accessibility SHALL provide minimum 4.5:1 text contrast (WCAG AA)
6. THE Accessibility SHALL include labels and error messages on form elements
7. THE Accessibility SHALL be compatible with screen readers

### Requirement 12: Responsive Design - Adaptation to All Devices

**User Story:** Ethos Light page should look perfect on desktop, tablet, and mobile devices.

#### Acceptance Criteria

1. WHILE on desktop devices (1200px+), THE Layout SHALL use a 3-column grid
2. WHILE on tablet devices (768px-1024px), THE Layout SHALL use a 2-column grid
3. WHILE on mobile devices (below 480px), THE Layout SHALL display stacked in a single column
4. THE Layout SHALL be readable and usable at all breakpoints
5. THE Layout SHALL be suitable for touch interaction on mobile devices (minimum 44px button size)
6. THE Layout SHALL display without horizontal scroll on all devices

### Requirement 13: SEO and Semantic HTML

**User Story:** Ethos Light page should rank well in search engines and use semantic HTML.

#### Acceptance Criteria

1. THE HTML SHALL use semantic HTML5 elements (header, section, article, footer)
2. THE HTML SHALL include meta tags (title, description, keywords) for all pages
3. THE HTML SHALL include Open Graph meta tags (og:title, og:description, og:image)
4. THE HTML SHALL use correct heading hierarchy (h1, h2, h3)
5. THE HTML SHALL use descriptive anchor text on all links
6. THE HTML SHALL use structured data (Schema.org)

### Requirement 14: Data Structure - JSON Data File

**User Story:** Ethos Light content should be stored as structured data in JSON format.

#### Acceptance Criteria

1. THE Data_Structure SHALL include JSON structure for Ethos section in retorik-data.js file
2. THE Data_Structure SHALL include separate objects for each component (Phronesis, Arete, Eunoia)
3. THE Data_Structure SHALL include simulator steps and options
4. THE Data_Structure SHALL include takeaways and resources
5. THE Data_Structure SHALL include all text in Turkish
6. THE Data_Structure SHALL use a clear format for easy updates and maintenance

### Requirement 15: JavaScript Module - Interaction Engine

**User Story:** Ethos Light page should be interactive and dynamic with JavaScript.

#### Acceptance Criteria

1. THE JavaScript SHALL include interaction code for Ethos Light in retorik.js file
2. THE JavaScript SHALL manage card clicks and opening
3. THE JavaScript SHALL manage simulator selections and scoring system
4. THE JavaScript SHALL use localStorage to save user progress
5. THE JavaScript SHALL provide feedback on all interactions
6. THE JavaScript SHALL use vanilla JavaScript (no jQuery or other libraries)
7. THE JavaScript SHALL be compatible with all browsers

### Requirement 16: Integration - Compatibility with Existing Rhetoric Module

**User Story:** Ethos Light should be compatible with the existing rhetoric module architecture and integrate seamlessly.

#### Acceptance Criteria

1. THE Integration SHALL extend the existing retorik-data.js structure while preserving it
2. THE Integration SHALL be compatible with the existing retorik.js module
3. THE Integration SHALL use the existing retorik.css styling system
4. THE Integration SHALL be compatible with the existing site navigation
5. THE Integration SHALL provide backward compatibility
6. THE Integration SHALL work without conflicts with all existing rhetoric module sections (Pathos, Logos, etc.)

