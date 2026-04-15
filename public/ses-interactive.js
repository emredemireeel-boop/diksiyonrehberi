// ══════════════════════════════════════════════════════════════
//  🎙️ SES İNTERAKTİF STÜDYO — Ses Kategorisi İnteraktif Modülü
//  Isınma rutini · Perde egzersizi · Ses güç kontrolü
// ══════════════════════════════════════════════════════════════

// ── State ─────────────────────────────────────────────────────
let sesAudioCtx   = null;
let sesAnalyser   = null;
let sesMicStream  = null;
let sesAnimFrame  = null;
let sesIsListening = false;
let sesActiveMode  = null; // 'isinma' | 'perde' | 'guc'
let sesScore       = 0;
let sesStreak      = 0;
let sesExTimer     = null;
let sesExElapsed   = 0;
let sesPerdeCurrent = 0; // 0=pes, 1=orta, 2=tiz
let sesGucLevel    = 0;  // 0-100
const SES_SCORES_KEY = 'dr_ses_scores';

// ── Egzersiz Verileri ──────────────────────────────────────────
const SES_MODES = {
  isinma: {
    label: 'Ses Teli Isınma',
    icon: '🔥',
    color: '#f59e0b',
    colorDark: '#b45309',
    colorGlow: 'rgba(245,158,11,0.25)',
    desc: 'Her konuşma seansından önce yapılması gereken temel ısınma rutini. Ses tellerini korur.',
    exercises: [
      {
        id: 'is1', title: '💋 Dudak Titreştirme (Lip Trill)', duration: 20,
        instruction: 'Dudaklarınızı gevşetin ve "Brrrr" sesi çıkarın — at koştuğunda çıkardığı ses gibi. Nefes verirken dudaklar titreşmeli. 20 saniye boyunca sürdürün.',
        phrase: 'Brrrr...', points: 30,
        tip: 'Bu egzersiz ses tellerini masaj yaparak ısıtır. Sabah uyandığınızda ilk yapılacak şeydir.'
      },
      {
        id: 'is2', title: '🎵 Mmm Isınması', duration: 30,
        instruction: 'Ağzınızı kapalı tutun. "Mmmmm" sesini orta perdede çıkarın. Dudaklarınızda hafif bir titreşim hissetmelisiniz. Sonra perdeyi yavaşça aşağı çekin, sonra yukarı gidin.',
        phrase: 'Mmmmm ↘↗', points: 40,
        tip: '"Mmm" sesi ses tellerini gerekmeden aktive eder — sabah kısıklığını geçirir.'
      },
      {
        id: 'is3', title: '🎼 Ünlü Skalası', duration: 40,
        instruction: 'Sırayla her ünlüyü 3 saniye uzatın:\n A — E — I — İ — O — Ö — U — Ü\nHer sesi tam ve berrak çıkarın. Hızlanmaya çalışmayın.',
        phrase: 'A · E · I · İ · O · Ö · U · Ü', points: 60,
        tip: '8 ünlünün tam artikülasyonu hem ısınma hem de diksiyon egzersizidir.'
      }
    ],
    tips: [
      'Isınma yapmadan yüksek sesle konuşmak ses tellerine zarar verir.',
      'Lip Trill (Brrrr) opera şarkıcılarının en temel ısınma tekniğidir.',
      'Sabah 5 dakika ısınma, tüm gün boyunca sesinizi korur.'
    ]
  },
  perde: {
    label: 'Perde Aralığı Egzersizi',
    icon: '🎹',
    color: '#6366f1',
    colorDark: '#4338ca',
    colorGlow: 'rgba(99,102,241,0.25)',
    desc: 'Sesinizin pes ile tiz arasındaki aralığını genişleten egzersizler. Monoton konuşmanın ilacı.',
    exercises: [
      {
        id: 'pe1', title: '⬇️ Pes Perde aktivasyonu', duration: 30,
        instruction: 'Sesinizin alabileceği en pes tona gidin — zorlamadan, doğal olarak. "Do" notasını bulun. "Ooo" sesiyle 5 saniye tutun, biraz yukarı çıkın, tekrar pes\'e dönün.',
        phrase: 'Ooo ↘ (en pes ton)', points: 40,
        tip: 'En pes ton güven ve otorite verir. Sabah yorgunluğunda bu ton zaten ortaya çıkar.'
      },
      {
        id: 'pe2', title: '↕️ Glide (Kayma) Egzersizi', duration: 35,
        instruction: '"Eee" sesiyle en pes noktanızdan başlayın ve kesintisiz olarak en tiz noktanıza çıkın. Sonra tekrar aşağı inin. Sanki sesli bir asansördeymiş gibi. 3 kez tekrarlayın.',
        phrase: 'Eee ↘↗↘ (pesten tize)', points: 55,
        tip: 'Glide egzersizi ses aralığınızı her haftada biraz genişletir.'
      },
      {
        id: 'pe3', title: '🎤 Perde ile Anlam', duration: 45,
        instruction: 'Aynı cümleyi 3 farklı perdede söyleyin:\n① En pes: "Merhaba, nasılsınız?"\n② Normal: "Merhaba, nasılsınız?"\n③ En tiz: "Merhaba, nasılsınız?"\nPerde değişiminin anlamı nasıl etkilediğini fark edin.',
        phrase: '"Merhaba, nasılsınız?" × 3', points: 70,
        tip: 'Pes soru = ciddiyet. Tiz soru = merak ve enerji. İkisi arasında geçiş yapabilmek güçtür.'
      }
    ],
    tips: [
      'Sesiniz monoton görünüyorsa perde aralığınız dar demektir — bu egzersiz directlyonu genişletir.',
      'Doğal sesinizi silmeyin — perde çeşitliliği ekleyin.',
      'Her gün 3 dakika glide egzersizi 1 ayda fark edilir aralık genişlemesi sağlar.'
    ]
  },
  guc: {
    label: 'Ses Güç Kontrolü',
    icon: '💪',
    color: '#10b981',
    colorDark: '#065f46',
    colorGlow: 'rgba(16,185,129,0.25)',
    desc: 'Sesin fısıltıdan zirveye kontrollü geçişi. Boğazı zorlamadan güç artırma tekniği.',
    exercises: [
      {
        id: 'gu1', title: '🤫 Fısıltı Skalası', duration: 30,
        instruction: 'Sadece nefes kullanarak — ses teli titreşimi olmadan — "Merhaba" deyin. Bu saf fısıltı. Şimdi aynı kelimeyi çok alçak sesle söyleyin. Farkı hissedin.',
        phrase: '"Merhaba" (fısıltı)', points: 35,
        tip: 'Fısıltı ses tellerine zarar verir — sahne arkası konuşmak için bile alçak ses kullanın.'
      },
      {
        id: 'gu2', title: '📈 Güç Kademesi', duration: 40,
        instruction: 'Aynı cümleyi 5 farklı güçte söyleyin:\n1→ Çok alçak  2→ Alçak  3→ Orta  4→ Güçlü  5→ Maksimum\n"Türkiye\'nin dört bir yanından sesler yükseli yor."\nHer kademe için diyafram desteğini hissedin.',
        phrase: '"Türkiye\'nin dört bir yanı..." ×5', points: 60,
        tip: 'Güç artışı boğazdan değil, diyaframdan gelmelidir — boğaz gevşek kalmalı.'
      },
      {
        id: 'gu3', title: '🎭 Dramatik Zirve', duration: 50,
        instruction: 'Cümleyi fısıltıyla başlayın ve güçlü bir zirveyle bitirin:\n"Bu şehirde... (fısıltı) bu ülkede... (alçak) bu dünyada... (orta) sesimiz duyulacak! (tam güç)"\nHer bölüm biraz daha güçlü olsun.',
        phrase: '"Bu şehirde... sesimiz duyulacak!"', points: 85,
        tip: 'Dramatik güç değişimi en etkili konuşma tekniklerinden biridir. TED konuşmacıları bunu kullanır.'
      }
    ],
    tips: [
      'Ses gücü "bağırmak" değil, diyafram desteğiyle kontroldür.',
      'Mikrofonsuz konuşurken güç artışı için güçlü bir egzersiz rutini şarttır.',
      'Her gün 5 farklı güçte 1 cümle söylemek, 2 haftada büyük fark yaratır.'
    ]
  }
};

// ── Render Entry ───────────────────────────────────────────────
function renderSesInteractive() {
  const container = document.getElementById('ses-interactive-container');
  if (!container) return;

  if (sesIsListening) stopSesMic();

  container.innerHTML = `
<div class="si-wrapper" id="si-wrapper">

  <!-- Header -->
  <div class="si-hero">
    <div class="si-hero-badge">🎙️ İnteraktif Modül</div>
    <h2 class="si-hero-title">Ses <span class="si-hl">Stüdyosu</span></h2>
    <p class="si-hero-sub">Isınma · Perde · Güç — üç temel ses becerisini tek platformda geliştirin</p>
    <div class="si-hero-stats">
      <div class="si-stat">
        <span class="si-stat-num" id="si-score-num">0</span>
        <span class="si-stat-label">Puan</span>
      </div>
      <div class="si-stat">
        <span class="si-stat-num" id="si-streak-num">0</span>
        <span class="si-stat-label">Seri 🔥</span>
      </div>
      <div class="si-stat">
        <span class="si-stat-num" id="si-best-num">${getSisBestScore()}</span>
        <span class="si-stat-label">En Yüksek</span>
      </div>
    </div>
  </div>

  <!-- Mode selector -->
  <div class="si-mode-tabs" id="si-mode-tabs">
    ${Object.entries(SES_MODES).map(([key, m]) => `
      <button class="si-mode-tab ${key === 'isinma' ? 'active' : ''}"
        id="si-tab-${key}" data-mode="${key}"
        onclick="selectSesMode('${key}')"
        style="${key === 'isinma' ? `--tab-color:${m.color};border-color:${m.color};` : ''}">
        <span class="si-tab-icon">${m.icon}</span>
        <span class="si-tab-label">${m.label}</span>
      </button>
    `).join('')}
  </div>

  <!-- Body -->
  <div class="si-body" id="si-body">

    <!-- LEFT: Visualizer + mic -->
    <div class="si-left">

      <!-- Canvas visualizer -->
      <div class="si-canvas-wrap" id="si-canvas-wrap">
        <canvas id="si-canvas" class="si-canvas" width="400" height="200"></canvas>
        <div class="si-canvas-overlay" id="si-canvas-overlay">
          <div class="si-co-inner">
            <div class="si-co-icon">🎙️</div>
            <div class="si-co-text">Bir mod seçtikten sonra mikrofonu açın</div>
          </div>
        </div>
        <!-- Level indicator -->
        <div class="si-level-badge" id="si-level-badge" style="display:none">
          <span class="si-level-db" id="si-level-db">— dB</span>
        </div>
      </div>

      <!-- Volume meter -->
      <div class="si-vol-meter" id="si-vol-meter">
        <div class="si-vol-label">Ses Seviyesi</div>
        <div class="si-vol-bar-wrap">
          <div class="si-vol-bar" id="si-vol-bar"></div>
          <div class="si-vol-zones">
            <span class="si-vz si-vz-low">Alçak</span>
            <span class="si-vz si-vz-mid">Orta</span>
            <span class="si-vz si-vz-high">Güçlü</span>
          </div>
        </div>
        <div class="si-vol-pct" id="si-vol-pct">0%</div>
      </div>

      <!-- Pitch indicator -->
      <div class="si-pitch-display" id="si-pitch-display">
        <div class="si-pitch-label">Tahmini Perde</div>
        <div class="si-pitch-scale">
          <div class="si-pitch-segment si-pitch-pes" id="si-pitch-pes">Pes</div>
          <div class="si-pitch-segment si-pitch-orta" id="si-pitch-orta">Orta</div>
          <div class="si-pitch-segment si-pitch-tiz" id="si-pitch-tiz">Tiz</div>
        </div>
        <div class="si-pitch-freq" id="si-pitch-freq">— Hz</div>
      </div>

      <!-- Mic button -->
      <div class="si-mic-row">
        <button class="si-mic-btn" id="si-mic-btn" onclick="toggleSesMic()">
          <span id="si-mic-icon">🎙️</span>
          <span id="si-mic-label">Mikrofonu Aç</span>
        </button>
        <div class="si-mic-hint" id="si-mic-hint">Egzersiz seçin ve başlayın</div>
      </div>
    </div>

    <!-- RIGHT: Exercise panel -->
    <div class="si-right" id="si-right">
      <div class="si-ex-placeholder" id="si-ex-placeholder">
        <div class="siep-icon">🎯</div>
        <div class="siep-text">Yukarıdan bir mod seçerek başlayın</div>
      </div>
      <div class="si-ex-content" id="si-ex-content" style="display:none"></div>
    </div>

  </div>

  <!-- Tip panel -->
  <div class="si-tip-bar" id="si-tip-bar">
    <span class="si-tip-icon">💡</span>
    <span class="si-tip-text" id="si-tip-text">Ses tellerinizi ısıtmadan konuşmak uzun vadede ses kısıklığına yol açar.</span>
  </div>

  <!-- History -->
  <div class="si-history" id="si-history">
    <div class="si-history-header">
      <span>📊 Son Egzersizler</span>
      <button class="si-clear-btn" onclick="clearSisHistory()">Temizle</button>
    </div>
    <div class="si-h-bars" id="si-h-bars"></div>
    <div class="si-h-empty" id="si-h-empty">Henüz egzersiz tamamlanmadı</div>
  </div>

  <!-- Completion modal -->
  <div class="si-modal-overlay" id="si-modal-overlay" style="display:none">
    <div class="si-modal" id="si-modal">
      <div class="si-modal-emoji" id="si-modal-emoji">🏆</div>
      <div class="si-modal-title" id="si-modal-title">Harika!</div>
      <div class="si-modal-body" id="si-modal-body">Egzersiz tamamlandı</div>
      <div class="si-modal-score" id="si-modal-score">+50 Puan</div>
      <button class="si-modal-btn" onclick="closeSesModal()">Devam Et →</button>
    </div>
  </div>

</div>`;

  // Init state
  sesScore = 0; sesStreak = 0;
  updateSisScoreDisplay();
  renderSisHistory();

  // Select first mode by default
  selectSesMode('isinma');

  // Draw idle canvas
  siDrawIdle('#f59e0b');
}

// ── Mode Select ───────────────────────────────────────────────
function selectSesMode(mode) {
  sesActiveMode = mode;
  const data = SES_MODES[mode];

  // Update tabs
  document.querySelectorAll('.si-mode-tab').forEach(tab => {
    const isActive = tab.dataset.mode === mode;
    tab.classList.toggle('active', isActive);
    tab.style.removeProperty('--tab-color');
    tab.style.removeProperty('border-color');
    tab.style.removeProperty('background');
    if (isActive) {
      tab.style.setProperty('--tab-color', data.color);
      tab.style.borderColor = data.color;
      tab.style.background = data.colorGlow;
    }
  });

  // Tip
  const tipEl = document.getElementById('si-tip-text');
  if (tipEl) {
    const tips = data.tips;
    tipEl.textContent = tips[Math.floor(Math.random() * tips.length)];
  }

  // Render exercises
  renderSisExercises(mode);

  // Update canvas color
  siDrawIdle(data.color);

  // Mic hint
  const hint = document.getElementById('si-mic-hint');
  if (hint) hint.textContent = `${data.icon} ${data.label} modu seçildi`;
}

// ── Exercise Render ─────────────────────────────────────────────
let sisActiveExercise = null;

function renderSisExercises(mode) {
  const data = SES_MODES[mode];
  const placeholder = document.getElementById('si-ex-placeholder');
  const content = document.getElementById('si-ex-content');
  if (!placeholder || !content) return;

  placeholder.style.display = 'none';
  content.style.display = 'block';
  content.innerHTML = `
    <div class="si-ex-header">
      <div class="si-ex-mode-title" style="color:${data.color}">${data.icon} ${data.label}</div>
      <div class="si-ex-mode-desc">${data.desc}</div>
    </div>
    <div class="si-ex-list" id="si-ex-list-${mode}">
      ${data.exercises.map((ex, i) => `
        <div class="si-ex-item ${i === 0 ? 'si-ex-active' : ''}" id="si-ex-${ex.id}" data-mode="${mode}" data-exid="${ex.id}">
          <div class="si-ex-item-head">
            <span class="si-ex-num" style="background:${data.color}">${i + 1}</span>
            <span class="si-ex-title">${ex.title}</span>
            <span class="si-ex-dur">⏱ ${ex.duration}s</span>
            <span class="si-ex-pts" style="color:${data.color}">+${ex.points}p</span>
          </div>
          <div class="si-ex-item-body" id="si-ex-body-${ex.id}" style="display:${i === 0 ? 'block' : 'none'}">
            <div class="si-ex-instruction">${ex.instruction.replace(/\n/g, '<br>')}</div>
            <div class="si-ex-phrase" id="si-ex-phrase-${ex.id}">${ex.phrase}</div>
            <div class="si-ex-countdown-wrap" id="si-cd-wrap-${ex.id}" style="display:none">
              <div class="si-cd-bar-wrap">
                <div class="si-cd-bar" id="si-cd-bar-${ex.id}" style="background:${data.color}"></div>
              </div>
              <div class="si-cd-num" id="si-cd-num-${ex.id}">0</div>
            </div>
            <div class="si-ex-tip"><span>💡</span> ${ex.tip}</div>
            <button class="si-ex-start-btn" id="si-ex-btn-${ex.id}"
              style="background:linear-gradient(135deg,${data.colorDark},${data.color})"
              onclick="startSisExercise('${mode}','${ex.id}')">
              Başla →
            </button>
          </div>
        </div>
      `).join('')}
    </div>
  `;

  // Toggle on click header
  data.exercises.forEach(ex => {
    const item = document.getElementById('si-ex-' + ex.id);
    const head = item && item.querySelector('.si-ex-item-head');
    if (head) head.addEventListener('click', () => toggleSisExercise(mode, ex.id));
  });
}

function toggleSisExercise(mode, exId) {
  const data = SES_MODES[mode];
  data.exercises.forEach(ex => {
    const body = document.getElementById('si-ex-body-' + ex.id);
    const item = document.getElementById('si-ex-' + ex.id);
    if (ex.id === exId) {
      const isOpen = body && body.style.display !== 'none';
      if (body) body.style.display = isOpen ? 'none' : 'block';
      if (item) item.classList.toggle('si-ex-active', !isOpen);
    } else {
      if (body) body.style.display = 'none';
      if (item) item.classList.remove('si-ex-active');
    }
  });
}

function startSisExercise(mode, exId) {
  const data = SES_MODES[mode];
  const ex = data.exercises.find(e => e.id === exId);
  if (!ex) return;

  sisActiveExercise = { mode, exId, ex };

  const cdWrap = document.getElementById('si-cd-wrap-' + exId);
  const cdNum  = document.getElementById('si-cd-num-' + exId);
  const cdBar  = document.getElementById('si-cd-bar-' + exId);
  const btn    = document.getElementById('si-ex-btn-' + exId);

  if (cdWrap) cdWrap.style.display = 'block';
  if (btn) { btn.textContent = 'Durdur ⏹'; btn.onclick = () => stopSisExercise(exId); }

  let elapsed = 0;
  const total = ex.duration;
  if (cdNum) cdNum.textContent = total;

  if (sesExTimer) clearInterval(sesExTimer);
  sesExTimer = setInterval(() => {
    elapsed++;
    const remaining = total - elapsed;
    if (cdNum) cdNum.textContent = remaining;
    if (cdBar) cdBar.style.width = ((elapsed / total) * 100) + '%';
    if (elapsed >= total) {
      clearInterval(sesExTimer);
      completeSisExercise(mode, exId, ex.points);
    }
  }, 1000);

  if (!sesIsListening) startSesMic();
}

function stopSisExercise(exId) {
  if (sesExTimer) { clearInterval(sesExTimer); sesExTimer = null; }
  const cdWrap = document.getElementById('si-cd-wrap-' + exId);
  const btn = document.getElementById('si-ex-btn-' + exId);
  if (cdWrap) cdWrap.style.display = 'none';
  if (btn && sisActiveExercise) {
    btn.textContent = 'Başla →';
    const { mode } = sisActiveExercise;
    btn.onclick = () => startSisExercise(mode, exId);
  }
  sisActiveExercise = null;
}

function completeSisExercise(mode, exId, points) {
  sesScore += points;
  sesStreak++;
  updateSisScoreDisplay();
  saveSisHistory(mode, points);
  renderSisHistory();

  const item = document.getElementById('si-ex-' + exId);
  if (item) item.classList.add('si-ex-done');

  const emojis = { isinma: '🔥', perde: '🎹', guc: '💪' };
  const titles = ['Harika!', 'Mükemmel!', 'Süper!', 'Bravo!'];
  showSesModal(
    emojis[mode] || '🏆',
    titles[Math.floor(Math.random() * titles.length)],
    `${SES_MODES[mode].label} egzersizi tamamlandı!`,
    `+${points} puan`
  );
  spawnSisConfetti();
  stopSisExercise(exId);
}

// ── Modal ──────────────────────────────────────────────────────
function showSesModal(emoji, title, body, score) {
  const overlay = document.getElementById('si-modal-overlay');
  if (!overlay) return;
  document.getElementById('si-modal-emoji').textContent = emoji;
  document.getElementById('si-modal-title').textContent = title;
  document.getElementById('si-modal-body').textContent = body;
  document.getElementById('si-modal-score').textContent = score;
  overlay.style.display = 'flex';
}

function closeSesModal() {
  const overlay = document.getElementById('si-modal-overlay');
  if (overlay) overlay.style.display = 'none';
}

// ── Confetti ───────────────────────────────────────────────────
function spawnSisConfetti() {
  const wrapper = document.getElementById('si-wrapper');
  if (!wrapper) return;
  const colors = ['#f59e0b','#6366f1','#10b981','#ef4444','#ec4899','#0ea5e9'];
  for (let i = 0; i < 36; i++) {
    const d = document.createElement('div');
    d.className = 'rl-confetti-piece'; // reuse rezonans confetti CSS
    d.style.cssText = `left:${Math.random()*100}%;background:${colors[Math.floor(Math.random()*colors.length)]};width:${6+Math.random()*8}px;height:${6+Math.random()*8}px;animation-delay:${Math.random()*0.5}s;animation-duration:${1.5+Math.random()}s;`;
    wrapper.appendChild(d);
    setTimeout(() => d.remove(), 3000);
  }
}

// ── Score / History ────────────────────────────────────────────
function updateSisScoreDisplay() {
  const s = document.getElementById('si-score-num');
  const st = document.getElementById('si-streak-num');
  const b = document.getElementById('si-best-num');
  if (s) s.textContent = sesScore;
  if (st) st.textContent = sesStreak;
  if (b) b.textContent = Math.max(sesScore, getSisBestScore());
}

function getSisBestScore() {
  try {
    const h = JSON.parse(localStorage.getItem(SES_SCORES_KEY) || '[]');
    return h.length ? Math.max(...h.map(s => s.score || 0)) : 0;
  } catch { return 0; }
}

function saveSisHistory(mode, points) {
  try {
    const h = JSON.parse(localStorage.getItem(SES_SCORES_KEY) || '[]');
    h.push({ mode, points, score: sesScore, ts: Date.now() });
    if (h.length > 20) h.splice(0, h.length - 20);
    localStorage.setItem(SES_SCORES_KEY, JSON.stringify(h));
  } catch {}
}

function renderSisHistory() {
  const bars = document.getElementById('si-h-bars');
  const empty = document.getElementById('si-h-empty');
  if (!bars) return;
  try {
    const h = JSON.parse(localStorage.getItem(SES_SCORES_KEY) || '[]');
    const recent = h.slice(-10);
    if (!recent.length) { if (empty) empty.style.display = 'block'; bars.innerHTML = ''; return; }
    if (empty) empty.style.display = 'none';
    const maxPts = Math.max(...recent.map(s => s.points));
    const colors = { isinma: '#f59e0b', perde: '#6366f1', guc: '#10b981' };
    bars.innerHTML = recent.map(s => {
      const color = colors[s.mode] || '#6366f1';
      const barH = Math.max(10, Math.round((s.points / maxPts) * 60));
      const d = new Date(s.ts);
      const time = d.getHours().toString().padStart(2,'0') + ':' + d.getMinutes().toString().padStart(2,'0');
      return `<div class="rl-hbar-wrap" title="+${s.points}p — ${SES_MODES[s.mode]?.label||s.mode} — ${time}">
        <div class="rl-hbar" style="height:${barH}px;background:${color}"></div>
        <div class="rl-hbar-pts">+${s.points}</div>
      </div>`;
    }).join('');
  } catch {}
}

function clearSisHistory() {
  try { localStorage.removeItem(SES_SCORES_KEY); } catch {}
  sesScore = 0; sesStreak = 0;
  updateSisScoreDisplay();
  renderSisHistory();
}

// ── Microphone ────────────────────────────────────────────────
async function startSesMic() {
  try {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    sesMicStream = stream;
    sesAudioCtx = new (window.AudioContext || window.webkitAudioContext)();
    sesAnalyser = sesAudioCtx.createAnalyser();
    sesAnalyser.fftSize = 2048;
    sesAnalyser.smoothingTimeConstant = 0.80;
    const src = sesAudioCtx.createMediaStreamSource(stream);
    src.connect(sesAnalyser);
    sesIsListening = true;
    updateSesMicUI(true);
    sesAudioLoop();
  } catch {
    const hint = document.getElementById('si-mic-hint');
    if (hint) hint.textContent = '⚠️ Mikrofon erişimi reddedildi — tarayıcı ayarlarını kontrol edin';
  }
}

function stopSesMic() {
  sesIsListening = false;
  if (sesAnimFrame) { cancelAnimationFrame(sesAnimFrame); sesAnimFrame = null; }
  if (sesMicStream) { sesMicStream.getTracks().forEach(t => t.stop()); sesMicStream = null; }
  if (sesAudioCtx) { sesAudioCtx.close().catch(() => {}); sesAudioCtx = null; }
  sesAnalyser = null;
  updateSesMicUI(false);
  resetSesMeters();
  const color = sesActiveMode ? SES_MODES[sesActiveMode].color : '#6366f1';
  siDrawIdle(color);
}

async function toggleSesMic() {
  if (sesIsListening) stopSesMic();
  else await startSesMic();
}

function updateSesMicUI(on) {
  const btn = document.getElementById('si-mic-btn');
  const icon = document.getElementById('si-mic-icon');
  const label = document.getElementById('si-mic-label');
  const hint = document.getElementById('si-mic-hint');
  const overlay = document.getElementById('si-canvas-overlay');
  const levelBadge = document.getElementById('si-level-badge');
  if (btn) btn.classList.toggle('active', on);
  if (icon) icon.textContent = on ? '🔴' : '🎙️';
  if (label) label.textContent = on ? 'Mikrofonu Kapat' : 'Mikrofonu Aç';
  if (hint) hint.textContent = on ? 'Dinleniyor — konuşmaya başlayın!' : (sesActiveMode ? SES_MODES[sesActiveMode].label + ' modu aktif' : 'Egzersiz seçin');
  if (overlay) overlay.style.display = on ? 'none' : 'flex';
  if (levelBadge) levelBadge.style.display = on ? 'flex' : 'none';
}

function resetSesMeters() {
  const volBar = document.getElementById('si-vol-bar');
  const volPct = document.getElementById('si-vol-pct');
  const freqEl = document.getElementById('si-pitch-freq');
  if (volBar) volBar.style.width = '0%';
  if (volPct) volPct.textContent = '0%';
  if (freqEl) freqEl.textContent = '— Hz';
  document.querySelectorAll('.si-pitch-segment').forEach(s => s.classList.remove('active'));
  const dbEl = document.getElementById('si-level-db');
  if (dbEl) dbEl.textContent = '— dB';
}

// ── Audio Loop ────────────────────────────────────────────────
function sesAudioLoop() {
  if (!sesIsListening || !sesAnalyser) return;
  sesAnimFrame = requestAnimationFrame(sesAudioLoop);

  const bufLen = sesAnalyser.frequencyBinCount;
  const freqData = new Uint8Array(bufLen);
  sesAnalyser.getByteFrequencyData(freqData);

  const timeData = new Float32Array(sesAnalyser.fftSize);
  sesAnalyser.getFloatTimeDomainData(timeData);

  // Draw waveform
  siDrawWaveform(freqData, timeData);

  // Volume level (RMS)
  let rmsSum = 0;
  for (let i = 0; i < timeData.length; i++) rmsSum += timeData[i] * timeData[i];
  const rms = Math.sqrt(rmsSum / timeData.length);
  const volPct = Math.min(100, Math.round(rms * 500));
  const volBar = document.getElementById('si-vol-bar');
  const volPctEl = document.getElementById('si-vol-pct');
  if (volBar) {
    volBar.style.width = volPct + '%';
    volBar.style.background = volPct > 75 ? '#10b981' : volPct > 40 ? '#6366f1' : '#f59e0b';
  }
  if (volPctEl) volPctEl.textContent = volPct + '%';

  // dB approximation
  const dbEl = document.getElementById('si-level-db');
  const dB = rms > 0 ? Math.round(20 * Math.log10(rms)) : -60;
  if (dbEl) dbEl.textContent = dB + ' dB';

  // Dominant frequency → pitch zone
  if (sesAudioCtx) {
    const binHz = sesAudioCtx.sampleRate / sesAnalyser.fftSize;
    let maxVal = 0, maxIdx = 0;
    for (let i = 1; i < freqData.length; i++) {
      if (freqData[i] > maxVal) { maxVal = freqData[i]; maxIdx = i; }
    }
    const domFreq = maxVal > 30 ? maxIdx * binHz : 0;
    const freqEl = document.getElementById('si-pitch-freq');
    if (freqEl) freqEl.textContent = domFreq > 0 ? Math.round(domFreq) + ' Hz' : '— Hz';

    // Pitch zone detection
    document.querySelectorAll('.si-pitch-segment').forEach(s => s.classList.remove('active'));
    if (domFreq > 0) {
      let zone = 'si-pitch-orta';
      if (domFreq < 200) zone = 'si-pitch-pes';
      else if (domFreq > 500) zone = 'si-pitch-tiz';
      const seg = document.getElementById(zone);
      if (seg) seg.classList.add('active');
    }
  }
}

// ── Canvas Drawing ────────────────────────────────────────────
function siDrawIdle(color) {
  const canvas = document.getElementById('si-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const W = canvas.width, H = canvas.height;
  ctx.clearRect(0, 0, W, H);

  const bg = ctx.createLinearGradient(0, 0, 0, H);
  bg.addColorStop(0, '#0F172A'); bg.addColorStop(1, '#1E293B');
  ctx.fillStyle = bg; ctx.fillRect(0, 0, W, H);

  // Idle wave
  ctx.beginPath();
  ctx.strokeStyle = color + '44';
  ctx.lineWidth = 2;
  for (let x = 0; x <= W; x++) {
    const y = H / 2 + Math.sin(x * 0.03) * 12;
    x === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
  }
  ctx.stroke();
}

function siDrawWaveform(freqData, timeData) {
  const canvas = document.getElementById('si-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const W = canvas.width, H = canvas.height;
  ctx.clearRect(0, 0, W, H);

  const color = sesActiveMode ? SES_MODES[sesActiveMode].color : '#6366f1';

  const bg = ctx.createLinearGradient(0, 0, 0, H);
  bg.addColorStop(0, '#0F172A'); bg.addColorStop(1, '#1E293B');
  ctx.fillStyle = bg; ctx.fillRect(0, 0, W, H);

  // Frequency bars
  const barCount = 60;
  const barW = W / barCount - 1;
  const step = Math.floor(freqData.length / barCount);
  for (let i = 0; i < barCount; i++) {
    const val = freqData[i * step] / 255;
    const barH = val * H * 0.65;
    ctx.fillStyle = color + Math.round((0.25 + val * 0.55) * 255).toString(16).padStart(2, '0');
    ctx.fillRect(i * (barW + 1), H - barH, barW, barH);
  }

  // Waveform line
  ctx.beginPath();
  ctx.lineWidth = 2.5;
  const grad = ctx.createLinearGradient(0, 0, W, 0);
  grad.addColorStop(0, color + '33');
  grad.addColorStop(0.5, color);
  grad.addColorStop(1, color + '33');
  ctx.strokeStyle = grad;
  ctx.shadowColor = color; ctx.shadowBlur = 10;
  const sliceW = W / timeData.length;
  let x = 0;
  for (let i = 0; i < timeData.length; i++) {
    const y = ((timeData[i] + 1) / 2) * H;
    i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
    x += sliceW;
  }
  ctx.stroke(); ctx.shadowBlur = 0;
}
