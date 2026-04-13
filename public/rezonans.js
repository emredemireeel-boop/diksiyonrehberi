// ══════════════════════════════════════════════════════════════
//  🌊 REZONANS LABORATUVARI — İnteraktif Modül
//  Gerçek zamanlı ses analizi + rezonans bölgesi eğitimi
// ══════════════════════════════════════════════════════════════

// ── State ─────────────────────────────────────────────────────
let rezAudioCtx = null;
let rezAnalyser = null;
let rezMicStream = null;
let rezAnimFrame = null;
let rezIsListening = false;
let rezCurrentZone = null;
let rezScore = 0;
let rezStreak = 0;
let rezSessionData = [];
let rezExerciseTimer = null;
let rezExerciseCountdown = 0;
const REZ_SCORES_KEY = 'dr_rez_scores';

// ── Render Entry ───────────────────────────────────────────────
function renderRezonansInteractive() {
  const container = document.getElementById('rezonans-interactive-container');
  if (!container) return;

  // Stop any existing mic
  if (rezIsListening) stopRezMic();

  container.innerHTML = `
<div class="rl-wrapper" id="rl-wrapper">

  <!-- Header -->
  <div class="rl-hero">
    <div class="rl-hero-badge">🔬 İnteraktif Modül</div>
    <h2 class="rl-hero-title">Rezonans <span class="rl-hl">Laboratuvarı</span></h2>
    <p class="rl-hero-sub">Sesinizin hangi bölgede titreştiğini gerçek zamanlı olarak keşfedin</p>
    <div class="rl-hero-stats">
      <div class="rl-stat" id="rl-stat-score">
        <span class="rl-stat-num" id="rl-score-num">0</span>
        <span class="rl-stat-label">Puan</span>
      </div>
      <div class="rl-stat" id="rl-stat-streak">
        <span class="rl-stat-num" id="rl-streak-num">0</span>
        <span class="rl-stat-label">Seri 🔥</span>
      </div>
      <div class="rl-stat" id="rl-stat-sessions">
        <span class="rl-stat-num" id="rl-sessions-num">${getRezBestScore()}</span>
        <span class="rl-stat-label">En Yüksek</span>
      </div>
    </div>
  </div>

  <!-- Body grid -->
  <div class="rl-body">

    <!-- LEFT: Zone selector + visualizer -->
    <div class="rl-left">

      <!-- Zone cards -->
      <div class="rl-zones" id="rl-zones">
        <button class="rl-zone-card" id="rl-zone-gogus" data-zone="gogus" onclick="selectRezZone('gogus')">
          <div class="rlzc-icon">💪</div>
          <div class="rlzc-name">Göğüs Rezonansı</div>
          <div class="rlzc-range">80–200 Hz</div>
          <div class="rlzc-desc">Derin, otoriter, güvenilir</div>
          <div class="rlzc-badge">TRT Spikeri Etkisi</div>
        </button>
        <button class="rl-zone-card" id="rl-zone-yuz" data-zone="yuz" onclick="selectRezZone('yuz')">
          <div class="rlzc-icon">😊</div>
          <div class="rlzc-name">Yüz Rezonansı</div>
          <div class="rlzc-range">200–600 Hz</div>
          <div class="rlzc-desc">Samimi, enerjik, sıcak</div>
          <div class="rlzc-badge">Sunum Sesi</div>
        </button>
        <button class="rl-zone-card" id="rl-zone-kafa" data-zone="kafa" onclick="selectRezZone('kafa')">
          <div class="rlzc-icon">🧠</div>
          <div class="rlzc-name">Kafa Rezonansı</div>
          <div class="rlzc-range">600–2000 Hz</div>
          <div class="rlzc-desc">Parlak, canlı, açık</div>
          <div class="rlzc-badge">Öğretmen Sesi</div>
        </button>
      </div>

      <!-- Main visualizer canvas -->
      <div class="rl-viz-wrapper" id="rl-viz-wrapper">
        <canvas id="rl-canvas" class="rl-canvas"></canvas>
        <div class="rl-viz-overlay" id="rl-viz-overlay">
          <div class="rlvo-inner">
            <div class="rlvo-icon">🎙️</div>
            <div class="rlvo-text">Bir rezonans bölgesi seçin ve mikrofona başlayın</div>
          </div>
        </div>
        <!-- Frequency meter -->
        <div class="rl-freq-display" id="rl-freq-display" style="display:none">
          <span class="rl-freq-num" id="rl-freq-num">---</span>
          <span class="rl-freq-hz">Hz</span>
        </div>
      </div>

      <!-- Body silhouette + zone glow indicators -->
      <div class="rl-body-figure" id="rl-body-figure">
        <div class="rl-body-svg-wrap">
          <svg class="rl-body-svg" viewBox="0 0 120 280" xmlns="http://www.w3.org/2000/svg">
            <!-- Body outline -->
            <circle cx="60" cy="32" r="22" fill="none" stroke="#334155" stroke-width="2"/>
            <rect x="38" y="54" width="44" height="80" rx="8" fill="none" stroke="#334155" stroke-width="2"/>
            <rect x="18" y="56" width="20" height="60" rx="6" fill="none" stroke="#334155" stroke-width="2"/>
            <rect x="82" y="56" width="20" height="60" rx="6" fill="none" stroke="#334155" stroke-width="2"/>
            <rect x="38" y="132" width="20" height="80" rx="6" fill="none" stroke="#334155" stroke-width="2"/>
            <rect x="62" y="132" width="20" height="80" rx="6" fill="none" stroke="#334155" stroke-width="2"/>
            <!-- Zone glow areas -->
            <ellipse id="rl-glow-kafa" cx="60" cy="32" rx="24" ry="26" fill="rgba(168,85,247,0)" class="rl-glow-zone"/>
            <ellipse id="rl-glow-yuz" cx="60" cy="60" rx="28" ry="16" fill="rgba(14,165,233,0)" class="rl-glow-zone"/>
            <ellipse id="rl-glow-gogus" cx="60" cy="100" rx="32" ry="28" fill="rgba(34,197,94,0)" class="rl-glow-zone"/>
          </svg>
          <!-- Labels -->
          <div class="rl-fig-label rl-fig-kafa" id="rl-fig-kafa">Kafa</div>
          <div class="rl-fig-label rl-fig-yuz" id="rl-fig-yuz">Yüz</div>
          <div class="rl-fig-label rl-fig-gogus" id="rl-fig-gogus">Göğüs</div>
        </div>
      </div>

    </div>

    <!-- RIGHT: exercise panel -->
    <div class="rl-right">

      <!-- Mic button + status -->
      <div class="rl-mic-section" id="rl-mic-section">
        <button class="rl-mic-btn" id="rl-mic-btn" onclick="toggleRezMic()" disabled>
          <span class="rl-mic-icon" id="rl-mic-icon">🎙️</span>
          <span class="rl-mic-label" id="rl-mic-label">Mikrofonu Aç</span>
        </button>
        <div class="rl-mic-hint" id="rl-mic-hint">Egzersiz seçin</div>
      </div>

      <!-- Exercise panel -->
      <div class="rl-exercise-panel" id="rl-exercise-panel">
        <div class="rl-exercise-placeholder" id="rl-exercise-placeholder">
          <div class="rlep-icon">🎯</div>
          <div class="rlep-text">Sol taraftan bir rezonans bölgesi seçerek başlayın</div>
        </div>
        <div class="rl-exercise-content" id="rl-exercise-content" style="display:none"></div>
      </div>

      <!-- Real-time feedback -->
      <div class="rl-feedback-panel" id="rl-feedback-panel" style="display:none">
        <div class="rl-fb-header">Gerçek Zamanlı Analiz</div>
        <div class="rl-meter-row">
          <span class="rl-meter-label">Göğüs</span>
          <div class="rl-meter-bar-wrap"><div class="rl-meter-bar rl-meter-gogus" id="rl-meter-gogus"></div></div>
          <span class="rl-meter-pct" id="rl-pct-gogus">0%</span>
        </div>
        <div class="rl-meter-row">
          <span class="rl-meter-label">Yüz</span>
          <div class="rl-meter-bar-wrap"><div class="rl-meter-bar rl-meter-yuz" id="rl-meter-yuz"></div></div>
          <span class="rl-meter-pct" id="rl-pct-yuz">0%</span>
        </div>
        <div class="rl-meter-row">
          <span class="rl-meter-label">Kafa</span>
          <div class="rl-meter-bar-wrap"><div class="rl-meter-bar rl-meter-kafa" id="rl-meter-kafa"></div></div>
          <span class="rl-meter-pct" id="rl-pct-kafa">0%</span>
        </div>
        <div class="rl-fb-result" id="rl-fb-result">
          <span id="rl-fb-icon">🎧</span>
          <span id="rl-fb-text">Konuşmaya başlayın...</span>
        </div>
      </div>

      <!-- Tip of the session -->
      <div class="rl-tip-panel" id="rl-tip-panel">
        <div class="rl-tip-icon">💡</div>
        <div class="rl-tip-text" id="rl-tip-text">Göğüs rezonansı için derin nefes alın ve "Hmmmm" sesiyle göğsünüzü titreştirin.</div>
      </div>

      <!-- History chart -->
      <div class="rl-history-panel" id="rl-history-panel">
        <div class="rl-history-header">
          <span>📊 Oturum Geçmişi</span>
          <button class="rl-clear-btn" onclick="clearRezHistory()">Temizle</button>
        </div>
        <div class="rl-history-bars" id="rl-history-bars">
          <!-- filled by JS -->
        </div>
        <div class="rl-history-empty" id="rl-history-empty">Henüz egzersiz tamamlanmadı</div>
      </div>

    </div>
  </div>

  <!-- Challenge modal overlay -->
  <div class="rl-challenge-overlay" id="rl-challenge-overlay" style="display:none">
    <div class="rl-challenge-modal" id="rl-challenge-modal">
      <div class="rlcm-emoji" id="rlcm-emoji">🏆</div>
      <div class="rlcm-title" id="rlcm-title">Harika!</div>
      <div class="rlcm-body" id="rlcm-body">Göğüs rezonansınız aktif!</div>
      <div class="rlcm-score" id="rlcm-score">+50 Puan</div>
      <button class="rlcm-btn" onclick="closeRezChallenge()">Devam Et →</button>
    </div>
  </div>

</div>`;

  // Init
  rezScore = 0;
  rezStreak = 0;
  updateRezScoreDisplay();
  renderRezHistory();
}

// ── Zone Data ─────────────────────────────────────────────────
const REZ_ZONES = {
  gogus: {
    name: 'Göğüs Rezonansı',
    color: '#22c55e',
    colorDark: '#15803d',
    colorGlow: 'rgba(34,197,94,0.3)',
    freqMin: 80,
    freqMax: 200,
    exercises: [
      {
        id: 'g1',
        title: '💪 Hmmm Aktivasyonu',
        duration: 30,
        instruction: 'Elinizi göğsünüze koyun. Ağzınızı kapatın ve derin bir nefes alın. Şimdi düşük perdede <strong>"Hmmmm"</strong> sesi çıkarın — eliniz titreşene kadar.',
        sound: 'Hmmmm',
        tip: 'Titreşimi göğsünüzde hissedene kadar perdeyi düşürün. Bu göğüs rezonansının aktif olduğunun işaretidir.',
        points: 50
      },
      {
        id: 'g2',
        title: '🦁 Güçlü Cümle',
        duration: 45,
        instruction: 'Göğüs rezonansını aktifleştirdikten sonra bu cümleyi söyleyin:<br><br><em class="rl-ex-phrase">\"Bu toplantıda çok önemli bir karar alacağız.\"</em><br><br>Her kelimede göğüs titreşimini koruyun.',
        sound: 'Konuşma',
        tip: 'Cümle sonunu aşağıya indirin — otoriter ses böyle oluşur.',
        points: 75
      },
      {
        id: 'g3',
        title: '📢 Haber Sunucu Modu',
        duration: 60,
        instruction: 'TRT spikeri gibi okuyun:<br><br><em class="rl-ex-phrase">\"Türkiye Büyük Millet Meclisi bugün önemli bir gündem maddesi için olağanüstü toplantıya çağrıldı.\"</em>',
        sound: 'Konuşma',
        tip: 'Haber sunucuları her cümlede göğüs rezonansını kullanır. Onların tonunu taklit edin.',
        points: 100
      }
    ],
    tips: [
      'Sabah "Hmmm" alıştırmasını 2 dakika yapın — göğüs rezonansı kalıcılaşır.',
      'Cümle sonlarını aşağı çekince ses otomatik olarak göğüse iner.',
      'Göğsünüze elinizi koyarak konuşun — titreşim varsa doğru yoldasınız.'
    ]
  },
  yuz: {
    name: 'Yüz Rezonansı',
    color: '#0ea5e9',
    colorDark: '#0369a1',
    colorGlow: 'rgba(14,165,233,0.3)',
    freqMin: 200,
    freqMax: 600,
    exercises: [
      {
        id: 'y1',
        title: '😊 Mmmm Titreşimi',
        duration: 30,
        instruction: 'Yanağınıza elinizi koyun. Orta perdede <strong>"Mmmmm"</strong> deyin. Yanağınızda ve burnunuzda hafif bir titreşim hissedeceksiniz.',
        sound: 'Mmmmm',
        tip: 'Yüz rezonansı "canlı" bir sesi simgeler. Sunum yorgunluğunu azaltır.',
        points: 50
      },
      {
        id: 'y2',
        title: '✨ Sunum Sesi',
        duration: 45,
        instruction: 'Yüz rezonansıyla enerjik bir sunum yapıyor gibi söyleyin:<br><br><em class="rl-ex-phrase">\"Bugün sizinle gerçekten heyecan verici bir şey paylaşmak istiyorum!\"</em>',
        sound: 'Konuşma',
        tip: 'Yüz rezonansı gülümseyerek konuşunca kendiliğinden aktif olur.',
        points: 75
      },
      {
        id: 'y3',
        title: '🎭 Sevinçli Duyuru',
        duration: 60,
        instruction: 'Enerjik ve pozitif bir ton kullanarak okuyun:<br><br><em class="rl-ex-phrase">\"Bu projeyi birlikte tamamladık! Her birinizin katkısı gerçekten çok değerliydi. Teşekkür ediyorum!\"</em>',
        sound: 'Konuşma',
        tip: 'Yüz rezonansı empati yaratır — insanlar sizi dinlemek ister.',
        points: 100
      }
    ],
    tips: [
      'Gülümseyerek konuşmak yüz rezonansını otomatik aktive eder.',
      'Sunumlarda ve müşteri görüşmelerinde yüz rezonansı güven artırır.',
      '"Mmm" sesini söylerken bu titreşimi hissetmek yüz rezonansının göstergesidir.'
    ]
  },
  kafa: {
    name: 'Kafa Rezonansı',
    color: '#a855f7',
    colorDark: '#7e22ce',
    colorGlow: 'rgba(168,85,247,0.3)',
    freqMin: 600,
    freqMax: 2000,
    exercises: [
      {
        id: 'k1',
        title: '🧠 İiii Aktivasyonu',
        duration: 30,
        instruction: 'Başınızın üstüne elinizi koyun. Yüksek perdede <strong>"İiii"</strong> deyin. Kafanızın tepesinde çok nazik bir titreşim hissedebilirsiniz.',
        sound: 'İiii',
        tip: 'Kafa rezonansı "parlak" ve "keskin" bir ses tını yaratır.',
        points: 50
      },
      {
        id: 'k2',
        title: '🏫 Öğretmen Sesi',
        duration: 45,
        instruction: 'Kafa rezonansıyla açık ve net bir ses çıkararak söyleyin:<br><br><em class="rl-ex-phrase">\"Herkes duyuyor mu? Bugün çok önemli bir konuyu işleyeceğiz, dikkatinizi istiyorum.\"</em>',
        sound: 'Konuşma',
        tip: 'Öğretmenler ve konuşmacılar kafa rezonansıyla geniş alanlara ulaşır.',
        points: 75
      },
      {
        id: 'k3',
        title: '⚡ Enerji Patlaması',
        duration: 60,
        instruction: 'En enerjik halinizle, yüksek tonda söyleyin:<br><br><em class="rl-ex-phrase">\"Bu hedefi başarabiliriz! İnanın — çünkü biz birlikte her şeyi başarıyoruz!\"</em>',
        sound: 'Konuşma',
        tip: 'Kafa rezonansı motivasyon konuşmalarında dinleyiciyi harekete geçirir.',
        points: 100
      }
    ],
    tips: [
      'Kafa rezonansı yüksek enerji gerektiren anlarda kendiliğinden aktive olur.',
      'Öğretmenler sınıfı yönetmek için kafa rezonansını kullanır.',
      'Bu rezonans sesin "uzağa gitmesi" ni sağlar — projeksiyon için kritik.'
    ]
  }
};

// ── Zone Select ─────────────────────────────────────────────────
function selectRezZone(zone) {
  rezCurrentZone = zone;
  const data = REZ_ZONES[zone];

  // Update zone card styles
  document.querySelectorAll('.rl-zone-card').forEach(c => {
    c.classList.remove('active');
    c.style.borderColor = '';
    c.style.background = '';
  });
  const card = document.getElementById('rl-zone-' + zone);
  if (card) {
    card.classList.add('active');
    card.style.borderColor = data.color;
    card.style.background = `linear-gradient(135deg, ${data.colorGlow}, transparent)`;
  }

  // Update body figure glow
  document.querySelectorAll('.rl-glow-zone').forEach(g => g.style.opacity = '0');
  const glow = document.getElementById('rl-glow-' + zone);
  if (glow) {
    glow.style.fill = data.colorGlow;
    glow.style.opacity = '1';
  }
  document.querySelectorAll('.rl-fig-label').forEach(l => l.classList.remove('active'));
  const lbl = document.getElementById('rl-fig-' + zone);
  if (lbl) lbl.classList.add('active');

  // Enable mic button
  const micBtn = document.getElementById('rl-mic-btn');
  if (micBtn) {
    micBtn.disabled = false;
    micBtn.style.background = `linear-gradient(135deg, ${data.colorDark}, ${data.color})`;
  }
  const micHint = document.getElementById('rl-mic-hint');
  if (micHint) micHint.textContent = `${data.name} bölgesi seçildi`;

  // Render exercises
  renderRezExercises(zone);

  // Update canvas color
  rezDrawIdle(data.color);

  // Tip rotation
  const tipEl = document.getElementById('rl-tip-text');
  if (tipEl) {
    const tips = data.tips;
    tipEl.textContent = tips[Math.floor(Math.random() * tips.length)];
  }
}

// ── Exercise Render ─────────────────────────────────────────────
let rezActiveExercise = null;

function renderRezExercises(zone) {
  const data = REZ_ZONES[zone];
  const content = document.getElementById('rl-exercise-content');
  const placeholder = document.getElementById('rl-exercise-placeholder');
  if (!content || !placeholder) return;

  placeholder.style.display = 'none';
  content.style.display = 'block';
  content.innerHTML = `
    <div class="rl-ex-header">
      <div class="rl-ex-zone-name" style="color:${data.color}">${data.name}</div>
      <div class="rl-ex-subtitle">3 egzersiz — sırayla yapın</div>
    </div>
    <div class="rl-ex-list" id="rl-ex-list-${zone}">
      ${data.exercises.map((ex, i) => `
        <div class="rl-ex-item ${i === 0 ? 'rl-ex-active' : ''}" id="rl-ex-${ex.id}" data-zone="${zone}" data-exid="${ex.id}">
          <div class="rl-ex-item-header">
            <span class="rl-ex-num">${i + 1}</span>
            <span class="rl-ex-title">${ex.title}</span>
            <span class="rl-ex-dur">⏱ ${ex.duration}s</span>
            <span class="rl-ex-pts">+${ex.points}p</span>
          </div>
          <div class="rl-ex-item-body" id="rl-ex-body-${ex.id}">
            <div class="rl-ex-instruction">${ex.instruction}</div>
            <div class="rl-ex-countdown-wrap" id="rl-ex-countdown-${ex.id}" style="display:none">
              <div class="rl-ex-countdown-bar-wrap">
                <div class="rl-ex-countdown-bar" id="rl-ex-cbar-${ex.id}" style="background:${data.color}"></div>
              </div>
              <div class="rl-ex-countdown-num" id="rl-ex-cnum-${ex.id}">0</div>
            </div>
            <button class="rl-ex-start-btn" id="rl-ex-btn-${ex.id}"
              style="background: linear-gradient(135deg, ${data.colorDark}, ${data.color})"
              onclick="startRezExercise('${zone}', '${ex.id}')">
              Başla →
            </button>
          </div>
        </div>
      `).join('')}
    </div>
  `;

  // First exercise open, rest collapsed
  data.exercises.forEach((ex, i) => {
    const body = document.getElementById('rl-ex-body-' + ex.id);
    if (body) body.style.display = i === 0 ? 'block' : 'none';
    const item = document.getElementById('rl-ex-' + ex.id);
    if (item) item.addEventListener('click', () => toggleRezExercise(zone, ex.id));
  });
}

function toggleRezExercise(zone, exId) {
  const data = REZ_ZONES[zone];
  data.exercises.forEach(ex => {
    const body = document.getElementById('rl-ex-body-' + ex.id);
    const item = document.getElementById('rl-ex-' + ex.id);
    if (ex.id === exId) {
      const isOpen = body && body.style.display !== 'none';
      if (body) body.style.display = isOpen ? 'none' : 'block';
      if (item) item.classList.toggle('rl-ex-active', !isOpen);
    } else {
      if (body) body.style.display = 'none';
      if (item) item.classList.remove('rl-ex-active');
    }
  });
}

function startRezExercise(zone, exId) {
  const data = REZ_ZONES[zone];
  const ex = data.exercises.find(e => e.id === exId);
  if (!ex) return;

  rezActiveExercise = { zone, exId, ex };

  // Show countdown
  const cdWrap = document.getElementById('rl-ex-countdown-' + exId);
  const cdNum = document.getElementById('rl-ex-cnum-' + exId);
  const cdBar = document.getElementById('rl-ex-cbar-' + exId);
  const btn = document.getElementById('rl-ex-btn-' + exId);

  if (cdWrap) cdWrap.style.display = 'block';
  if (btn) { btn.textContent = 'Durdur ⏹'; btn.onclick = () => stopRezExercise(exId); }

  let elapsed = 0;
  const total = ex.duration;
  if (cdNum) cdNum.textContent = total;

  if (rezExerciseTimer) clearInterval(rezExerciseTimer);
  rezExerciseTimer = setInterval(() => {
    elapsed++;
    const remaining = total - elapsed;
    if (cdNum) cdNum.textContent = remaining;
    if (cdBar) cdBar.style.width = ((elapsed / total) * 100) + '%';
    if (elapsed >= total) {
      clearInterval(rezExerciseTimer);
      completeRezExercise(zone, exId, ex.points);
    }
  }, 1000);

  // Auto-start mic if not listening
  if (!rezIsListening) {
    startRezMic();
  }
}

function stopRezExercise(exId) {
  if (rezExerciseTimer) { clearInterval(rezExerciseTimer); rezExerciseTimer = null; }
  const cdWrap = document.getElementById('rl-ex-countdown-' + exId);
  const btn = document.getElementById('rl-ex-btn-' + exId);
  if (cdWrap) cdWrap.style.display = 'none';
  if (btn && rezActiveExercise) {
    const data = REZ_ZONES[rezActiveExercise.zone];
    btn.textContent = 'Başla →';
    btn.onclick = () => startRezExercise(rezActiveExercise.zone, exId);
  }
  rezActiveExercise = null;
}

function completeRezExercise(zone, exId, points) {
  const data = REZ_ZONES[zone];

  // Award points
  rezScore += points;
  rezStreak++;
  updateRezScoreDisplay();
  saveRezHistory(zone, points);
  renderRezHistory();

  // Mark exercise complete
  const item = document.getElementById('rl-ex-' + exId);
  if (item) item.classList.add('rl-ex-done');

  // Show challenge modal
  const emoji = zone === 'gogus' ? '💪' : zone === 'yuz' ? '⭐' : '🚀';
  const titles = ['Mükemmel!', 'Harika iş!', 'Süper!', 'Bravo!', 'Muhteşem!'];
  const title = titles[Math.floor(Math.random() * titles.length)];
  showRezChallenge(emoji, title, `${data.name} egzersizi tamamlandı!`, `+${points} puan`);

  // Reset btn
  stopRezExercise(exId);
}

// ── Challenge Modal ──────────────────────────────────────────────
function showRezChallenge(emoji, title, body, score) {
  const overlay = document.getElementById('rl-challenge-overlay');
  if (!overlay) return;
  document.getElementById('rlcm-emoji').textContent = emoji;
  document.getElementById('rlcm-title').textContent = title;
  document.getElementById('rlcm-body').textContent = body;
  document.getElementById('rlcm-score').textContent = score;
  overlay.style.display = 'flex';
  // Confetti effect
  spawnRezConfetti();
}

function closeRezChallenge() {
  const overlay = document.getElementById('rl-challenge-overlay');
  if (overlay) overlay.style.display = 'none';
}

// ── Confetti ─────────────────────────────────────────────────────
function spawnRezConfetti() {
  const wrapper = document.getElementById('rl-wrapper');
  if (!wrapper) return;
  const colors = ['#22c55e','#0ea5e9','#a855f7','#f59e0b','#ef4444','#ec4899'];
  for (let i = 0; i < 40; i++) {
    const d = document.createElement('div');
    d.className = 'rl-confetti-piece';
    d.style.cssText = `
      left:${Math.random() * 100}%;
      background:${colors[Math.floor(Math.random() * colors.length)]};
      width:${6 + Math.random() * 8}px;
      height:${6 + Math.random() * 8}px;
      animation-delay:${Math.random() * 0.5}s;
      animation-duration:${1.5 + Math.random() * 1}s;
    `;
    wrapper.appendChild(d);
    setTimeout(() => d.remove(), 3000);
  }
}

// ── Score / History ──────────────────────────────────────────────
function updateRezScoreDisplay() {
  const scoreEl = document.getElementById('rl-score-num');
  const streakEl = document.getElementById('rl-streak-num');
  const bestEl = document.getElementById('rl-sessions-num');
  if (scoreEl) scoreEl.textContent = rezScore;
  if (streakEl) streakEl.textContent = rezStreak;
  if (bestEl) bestEl.textContent = Math.max(rezScore, getRezBestScore());
}

function getRezBestScore() {
  try {
    const h = JSON.parse(localStorage.getItem(REZ_SCORES_KEY) || '[]');
    return h.length ? Math.max(...h.map(s => s.score || 0)) : 0;
  } catch { return 0; }
}

function saveRezHistory(zone, points) {
  try {
    const h = JSON.parse(localStorage.getItem(REZ_SCORES_KEY) || '[]');
    h.push({ zone, points, score: rezScore, ts: Date.now() });
    if (h.length > 20) h.splice(0, h.length - 20);
    localStorage.setItem(REZ_SCORES_KEY, JSON.stringify(h));
  } catch {}
}

function renderRezHistory() {
  const barsEl = document.getElementById('rl-history-bars');
  const emptyEl = document.getElementById('rl-history-empty');
  if (!barsEl) return;
  try {
    const h = JSON.parse(localStorage.getItem(REZ_SCORES_KEY) || '[]');
    const recent = h.slice(-10);
    if (!recent.length) {
      if (emptyEl) emptyEl.style.display = 'block';
      barsEl.innerHTML = '';
      return;
    }
    if (emptyEl) emptyEl.style.display = 'none';
    const maxPts = Math.max(...recent.map(s => s.points));
    barsEl.innerHTML = recent.map(s => {
      const color = s.zone === 'gogus' ? '#22c55e' : s.zone === 'yuz' ? '#0ea5e9' : '#a855f7';
      const h = Math.max(10, Math.round((s.points / maxPts) * 60));
      const d = new Date(s.ts);
      const time = d.getHours().toString().padStart(2,'0') + ':' + d.getMinutes().toString().padStart(2,'0');
      return `<div class="rl-hbar-wrap" title="+${s.points}p ${REZ_ZONES[s.zone]?.name||s.zone} — ${time}">
        <div class="rl-hbar" style="height:${h}px;background:${color}"></div>
        <div class="rl-hbar-pts">+${s.points}</div>
      </div>`;
    }).join('');
  } catch {}
}

function clearRezHistory() {
  try { localStorage.removeItem(REZ_SCORES_KEY); } catch {}
  rezScore = 0; rezStreak = 0;
  updateRezScoreDisplay();
  renderRezHistory();
}

// ── Microphone & Audio Analysis ──────────────────────────────────
async function startRezMic() {
  try {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    rezMicStream = stream;
    rezAudioCtx = new (window.AudioContext || window.webkitAudioContext)();
    rezAnalyser = rezAudioCtx.createAnalyser();
    rezAnalyser.fftSize = 2048;
    rezAnalyser.smoothingTimeConstant = 0.82;
    const src = rezAudioCtx.createMediaStreamSource(stream);
    src.connect(rezAnalyser);
    rezIsListening = true;
    updateRezMicUI(true);
    rezAudioLoop();
  } catch (e) {
    const hint = document.getElementById('rl-mic-hint');
    if (hint) hint.textContent = '⚠️ Mikrofon erişimi reddedildi — tarayıcı ayarlarını kontrol edin';
  }
}

function stopRezMic() {
  rezIsListening = false;
  if (rezAnimFrame) { cancelAnimationFrame(rezAnimFrame); rezAnimFrame = null; }
  if (rezMicStream) { rezMicStream.getTracks().forEach(t => t.stop()); rezMicStream = null; }
  if (rezAudioCtx) { rezAudioCtx.close().catch(() => {}); rezAudioCtx = null; }
  rezAnalyser = null;
  updateRezMicUI(false);
  resetRezMeters();
  if (rezCurrentZone) {
    const data = REZ_ZONES[rezCurrentZone];
    rezDrawIdle(data.color);
  }
}

async function toggleRezMic() {
  if (rezIsListening) stopRezMic();
  else await startRezMic();
}

function updateRezMicUI(on) {
  const btn = document.getElementById('rl-mic-btn');
  const icon = document.getElementById('rl-mic-icon');
  const label = document.getElementById('rl-mic-label');
  const hint = document.getElementById('rl-mic-hint');
  const freqDisplay = document.getElementById('rl-freq-display');
  const feedbackPanel = document.getElementById('rl-feedback-panel');
  const overlay = document.getElementById('rl-viz-overlay');
  if (btn) btn.classList.toggle('active', on);
  if (icon) icon.textContent = on ? '🔴' : '🎙️';
  if (label) label.textContent = on ? 'Mikrofonu Kapat' : 'Mikrofonu Aç';
  if (hint) hint.textContent = on ? 'Dinleniyor — konuşmaya başlayın!' : (rezCurrentZone ? REZ_ZONES[rezCurrentZone].name + ' seçili' : 'Egzersiz seçin');
  if (freqDisplay) freqDisplay.style.display = on ? 'flex' : 'none';
  if (feedbackPanel) feedbackPanel.style.display = on ? 'block' : 'none';
  if (overlay) overlay.style.display = on ? 'none' : 'flex';
}

function rezAudioLoop() {
  if (!rezIsListening || !rezAnalyser) return;
  rezAnimFrame = requestAnimationFrame(rezAudioLoop);

  const bufLen = rezAnalyser.frequencyBinCount;
  const dataArr = new Uint8Array(bufLen);
  rezAnalyser.getByteFrequencyData(dataArr);

  const timeArr = new Float32Array(rezAnalyser.fftSize);
  rezAnalyser.getFloatTimeDomainData(timeArr);

  // Draw waveform
  drawRezWaveform(dataArr, timeArr);

  // Frequency analysis
  if (rezAudioCtx) {
    const sampleRate = rezAudioCtx.sampleRate;
    const binHz = sampleRate / rezAnalyser.fftSize;

    // Compute energy in each zone
    const gogusEnergy = getBandEnergy(dataArr, 80, 200, binHz);
    const yuzEnergy = getBandEnergy(dataArr, 200, 600, binHz);
    const kafaEnergy = getBandEnergy(dataArr, 600, 2000, binHz);
    const totalEnergy = gogusEnergy + yuzEnergy + kafaEnergy + 0.001;

    const gogusPct = Math.round((gogusEnergy / totalEnergy) * 100);
    const yuzPct = Math.round((yuzEnergy / totalEnergy) * 100);
    const kafaPct = 100 - gogusPct - yuzPct;

    updateRezMeters(gogusPct, yuzPct, Math.max(0, kafaPct));

    // Dominant frequency
    const domFreq = getDominantFreq(dataArr, binHz);
    const freqEl = document.getElementById('rl-freq-num');
    if (freqEl) freqEl.textContent = domFreq > 0 ? Math.round(domFreq) : '---';

    // Feedback
    updateRezFeedback(gogusEnergy, yuzEnergy, kafaEnergy, domFreq);
  }
}

function getBandEnergy(data, minHz, maxHz, binHz) {
  const minBin = Math.floor(minHz / binHz);
  const maxBin = Math.min(Math.ceil(maxHz / binHz), data.length - 1);
  let energy = 0;
  for (let i = minBin; i <= maxBin; i++) energy += data[i] * data[i];
  return energy / (maxBin - minBin + 1);
}

function getDominantFreq(data, binHz) {
  let maxVal = 0, maxIdx = 0;
  for (let i = 1; i < data.length; i++) {
    if (data[i] > maxVal) { maxVal = data[i]; maxIdx = i; }
  }
  return maxVal > 30 ? maxIdx * binHz : 0;
}

// ── Canvas Drawing ───────────────────────────────────────────────
function drawRezWaveform(freqData, timeData) {
  const canvas = document.getElementById('rl-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const W = canvas.width, H = canvas.height;
  ctx.clearRect(0, 0, W, H);

  const zoneColor = rezCurrentZone ? REZ_ZONES[rezCurrentZone].color : '#6366f1';

  // Background gradient
  const bg = ctx.createLinearGradient(0, 0, 0, H);
  bg.addColorStop(0, '#0F172A');
  bg.addColorStop(1, '#1E293B');
  ctx.fillStyle = bg;
  ctx.fillRect(0, 0, W, H);

  // Frequency bars
  const barCount = 64;
  const barW = W / barCount - 1;
  const step = Math.floor(freqData.length / barCount);
  for (let i = 0; i < barCount; i++) {
    const val = freqData[i * step] / 255;
    const barH = val * H * 0.7;
    const x = i * (barW + 1);
    const alpha = 0.3 + val * 0.5;
    ctx.fillStyle = zoneColor + Math.round(alpha * 255).toString(16).padStart(2, '0');
    ctx.fillRect(x, H - barH, barW, barH);
  }

  // Waveform line
  ctx.beginPath();
  ctx.lineWidth = 2.5;
  const waveGrad = ctx.createLinearGradient(0, 0, W, 0);
  waveGrad.addColorStop(0, zoneColor + '44');
  waveGrad.addColorStop(0.5, zoneColor);
  waveGrad.addColorStop(1, zoneColor + '44');
  ctx.strokeStyle = waveGrad;
  ctx.shadowColor = zoneColor;
  ctx.shadowBlur = 12;

  const sliceW = W / timeData.length;
  let x = 0;
  for (let i = 0; i < timeData.length; i++) {
    const v = (timeData[i] + 1) / 2;
    const y = v * H;
    if (i === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
    x += sliceW;
  }
  ctx.stroke();
  ctx.shadowBlur = 0;

  // Glow ring in center
  const centerX = W / 2, centerY = H / 2;
  const maxAmp = Math.max(...Array.from(timeData).map(Math.abs));
  const radius = 20 + maxAmp * 60;
  const grd = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, radius);
  grd.addColorStop(0, zoneColor + '30');
  grd.addColorStop(1, 'transparent');
  ctx.fillStyle = grd;
  ctx.beginPath();
  ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
  ctx.fill();
}

function rezDrawIdle(color) {
  const canvas = document.getElementById('rl-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const W = canvas.width, H = canvas.height;

  const bg = ctx.createLinearGradient(0, 0, 0, H);
  bg.addColorStop(0, '#0F172A');
  bg.addColorStop(1, '#1E293B');
  ctx.fillStyle = bg;
  ctx.fillRect(0, 0, W, H);

  // Gentle sine wave
  ctx.beginPath();
  ctx.strokeStyle = color + '55';
  ctx.lineWidth = 2;
  for (let x = 0; x < W; x++) {
    const y = H / 2 + Math.sin(x / 30) * 15;
    if (x === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  }
  ctx.stroke();

  // Text
  ctx.fillStyle = color + '66';
  ctx.font = '14px Inter, sans-serif';
  ctx.textAlign = 'center';
  ctx.fillText('Mikrofonu açarak başlayın', W / 2, H / 2 + 45);
}

// ── Meters ───────────────────────────────────────────────────────
function updateRezMeters(gogus, yuz, kafa) {
  const setMeter = (id, pct) => {
    const bar = document.getElementById('rl-meter-' + id);
    const pctEl = document.getElementById('rl-pct-' + id);
    if (bar) bar.style.width = Math.min(100, pct) + '%';
    if (pctEl) pctEl.textContent = Math.min(100, pct) + '%';
  };
  setMeter('gogus', gogus);
  setMeter('yuz', yuz);
  setMeter('kafa', kafa);
}

function resetRezMeters() {
  updateRezMeters(0, 0, 0);
  const freqEl = document.getElementById('rl-freq-num');
  if (freqEl) freqEl.textContent = '---';
  const fbEl = document.getElementById('rl-fb-text');
  if (fbEl) fbEl.textContent = 'Konuşmaya başlayın...';
}

// ── Feedback ─────────────────────────────────────────────────────
const REZ_FEEDBACK = {
  gogus: [
    { min: 40, icon:'🏆', msg:'Mükemmel! Göğüs rezonansınız güçlü!' },
    { min: 20, icon:'👍', msg:'İyi! Biraz daha derinleştirin.' },
    { min: 0,  icon:'💡', msg:'Perdeyi düşürün, göğsünüzü hissedin.' }
  ],
  yuz: [
    { min: 40, icon:'⭐', msg:'Harika! Yüz rezonansınız aktif!' },
    { min: 20, icon:'👍', msg:'Güzel! Gülümseyin ve devam edin.' },
    { min: 0,  icon:'💡', msg:'Biraz daha orta perde deneyin.' }
  ],
  kafa: [
    { min: 40, icon:'🚀', msg:'Süper! Kafa rezonansınız çalışıyor!' },
    { min: 20, icon:'👍', msg:'Güzel! Perdeyi biraz yükseltin.' },
    { min: 0,  icon:'💡', msg:'Daha yüksek ve net bir ses deneyin.' }
  ]
};

function updateRezFeedback(gogusE, yuzE, kafaE, domFreq) {
  if (!rezCurrentZone) return;
  const fbIcon = document.getElementById('rl-fb-icon');
  const fbText = document.getElementById('rl-fb-text');
  if (!fbIcon || !fbText) return;

  const totalE = gogusE + yuzE + kafaE + 0.001;
  const silent = totalE < 50;

  if (silent) {
    fbIcon.textContent = '🎧';
    fbText.textContent = 'Konuşmaya başlayın...';
    return;
  }

  const zoneEnergy = rezCurrentZone === 'gogus' ? gogusE :
                     rezCurrentZone === 'yuz'   ? yuzE   : kafaE;
  const pct = Math.round((zoneEnergy / totalE) * 100);
  const feedbacks = REZ_FEEDBACK[rezCurrentZone];
  const fb = feedbacks.find(f => pct >= f.min);
  if (fb) { fbIcon.textContent = fb.icon; fbText.textContent = fb.msg; }
}
