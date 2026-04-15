// ══════════════════════════════════════════════════════════════
//  🥁 RİTİM STÜDYOSU — Ritim Kategorisi İnteraktif Modülü
//  Görsel Metronom · Ritim Kalıpları · Cümle Ritmi
// ══════════════════════════════════════════════════════════════

// ── State ─────────────────────────────────────────────────────
let ritimBPM          = 80;
let ritimIsPlaying    = false;
let ritimBeatInterval = null;
let ritimBeatCount    = 0;
let ritimCurrentMode  = 'metro'; // 'metro' | 'kalip' | 'cumle'
let ritimScore        = 0;
let ritimStreak       = 0;

let ritimKalipIdx     = 0;
let ritimKalipStep    = 0;
let ritimUserPattern  = [];
let ritimExpected     = [];
let ritimKalipPhase   = 'watch'; // 'watch' | 'tap'
let ritimKalipTimer   = null;
let ritimKalipWatchSec = 0;

let ritimCumleIdx     = 0;
let ritimCumleTimer   = null;
let ritimCumleBeat    = 0;
let ritimCumleRunning = false;

const RITIM_SCORES_KEY = 'dr_ritim_scores';

// Audio context for click sounds
let ritimAudioCtx = null;

function getRitimAudioCtx() {
  if (!ritimAudioCtx) {
    ritimAudioCtx = new (window.AudioContext || window.webkitAudioContext)();
  }
  return ritimAudioCtx;
}

function playClick(isAccent = false) {
  try {
    const ctx = getRitimAudioCtx();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.frequency.value = isAccent ? 1200 : 800;
    osc.type = 'square';
    gain.gain.setValueAtTime(isAccent ? 0.22 : 0.12, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.08);
    osc.start(ctx.currentTime);
    osc.stop(ctx.currentTime + 0.09);
  } catch {}
}

function playTapSound() {
  try {
    const ctx = getRitimAudioCtx();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain); gain.connect(ctx.destination);
    osc.frequency.value = 600; osc.type = 'sine';
    gain.gain.setValueAtTime(0.18, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.06);
    osc.start(ctx.currentTime); osc.stop(ctx.currentTime + 0.07);
  } catch {}
}

// ── Rhythm Kalıp Verileri ──────────────────────────────────────
const RITIM_KALIPLARI = [
  { id:'k1', name:'2/4 Vurgu', icon:'🎯', difficulty:'Başlangıç', bpm:70,
    pattern:[1,0,1,0], desc:'İki vuruşlu temel kalıp. Marş ritmi.',
    tip:'Sol-Sağ, Sol-Sağ. Yürüyüş ritmini hissedin.' },
  { id:'k2', name:'3/4 Vals', icon:'💃', difficulty:'Başlangıç', bpm:75,
    pattern:[1,0,0,1,0,0], desc:'Üç vuruşlu vals ritmi. 1-2-3, 1-2-3.',
    tip:'Birinci vuruş güçlü, ikinci-üçüncü hafif. Nefes alır gibi ritim.' },
  { id:'k3', name:'4/4 Standart', icon:'🎹', difficulty:'Orta', bpm:80,
    pattern:[1,0,1,0,1,0,1,0], desc:'En yaygın ritim kalıbı. 4 vuruş.',
    tip:'1-2-3-4. Birinci ve üçüncüyü vurgulayın.' },
  { id:'k4', name:'Senkop', icon:'⚡', difficulty:'Orta', bpm:85,
    pattern:[1,0,0,1,0,1,0,0], desc:'Zayıf vuruşlara vurgu — caz ritmi.',
    tip:'Güçlü vurguyu beklenen yerde değil, aralarında verin.' },
  { id:'k5', name:'Hızlı 4/4', icon:'🚀', difficulty:'İleri', bpm:120,
    pattern:[1,1,1,1,1,1,1,1], desc:'Hızlı ve keskin sekiz vuruş.',
    tip:'Artikülasyon ve hız bir arada. Her vuruşu net yapın.' },
  { id:'k6', name:'Polka', icon:'🎪', difficulty:'İleri', bpm:130,
    pattern:[1,0,1,0,1,1,0,0], desc:'Türkülerde çok kullanılan ritim.',
    tip:'Son iki vurgu çift geliyor — bunu hissedene kadar tekrarlayın.' },
];

// ── Cümle Ritmi Verileri ──────────────────────────────────────
const RITIM_CUMLELERI = [
  { id:'c1', text:'Bu·gün · ha·va · çok · gü·zel', syllables:['Bu','gün','ha','va','çok','gü','zel'], bpm:70, icon:'☀️',
    tip:'Her hece bir vuruş. Heceleri eşit uzunlukta tutun.' },
  { id:'c2', text:'Ri·tim · di·ki·si·yo·nun · te·me·li·dir', syllables:['Ri','tim','di','ki','si','yo','nun','te','me','li','dir'], bpm:80, icon:'🎼',
    tip:'Uzun kelimeler hecelere bölününce ritim çok daha kolay yerleşir.' },
  { id:'c3', text:'Ses·te · güç · mi·za·nı · ko·ru·yun', syllables:['Ses','te','güç','mi','za','nı','ko','ru','yun'], bpm:75, icon:'💪',
    tip:'Vurgulu heceler bir sonraki vuruşa köprü kurar.' },
  { id:'c4', text:'Her · ke·li·me · bir · ritm · ta·şır', syllables:['Her','ke','li','me','bir','ritm','ta','şır'], bpm:85, icon:'🎵',
    tip:'Kelimelerin doğal ritmini keşfedin, onu taklit edin.' },
  { id:'c5', text:'Di·ya·frag · ma · des·te·ği · şart·tır', syllables:['Di','ya','frag','ma','des','te','ği','şart','tır'], bpm:90, icon:'🌬️',
    tip:'Nefes desteği olmadan ritim kaybeder — her vuruşta nefes hissi.' },
];

// ── Render Entry ───────────────────────────────────────────────
function renderRitimInteractive() {
  const container = document.getElementById('ritim-interactive-container');
  if (!container) return;

  stopRitimMetro();

  container.innerHTML = `
<div class="ri-wrapper" id="ri-wrapper">

  <!-- Hero -->
  <div class="ri-hero">
    <div class="ri-hero-badge">🥁 İnteraktif Modül</div>
    <h2 class="ri-hero-title">Ritim <span class="ri-hl">Stüdyosu</span></h2>
    <p class="ri-hero-sub">Metronom · Ritim Kalıpları · Cümle Ritmi — konuşmanın müzikal iskeletini keşfedin</p>
    <div class="ri-hero-stats">
      <div class="ri-stat"><span class="ri-stat-num" id="ri-score-num">0</span><span class="ri-stat-label">Puan</span></div>
      <div class="ri-stat"><span class="ri-stat-num" id="ri-streak-num">0</span><span class="ri-stat-label">Seri 🔥</span></div>
      <div class="ri-stat"><span class="ri-stat-num" id="ri-best-num">${getRitimBestScore()}</span><span class="ri-stat-label">En Yüksek</span></div>
      <div class="ri-stat"><span class="ri-stat-num" id="ri-bpm-display">${ritimBPM}</span><span class="ri-stat-label">BPM</span></div>
    </div>
  </div>

  <!-- Mode tabs -->
  <div class="ri-mode-tabs">
    <button class="ri-mode-tab active" id="ri-tab-metro" onclick="selectRitimMode('metro')">
      <span class="ri-tab-icon">⏱️</span><span class="ri-tab-label">Metronom</span>
      <span class="ri-tab-sub">Temel ritim hissi</span>
    </button>
    <button class="ri-mode-tab" id="ri-tab-kalip" onclick="selectRitimMode('kalip')">
      <span class="ri-tab-icon">🥁</span><span class="ri-tab-label">Ritim Kalıpları</span>
      <span class="ri-tab-sub">Kalıpları tekrarla</span>
    </button>
    <button class="ri-mode-tab" id="ri-tab-cumle" onclick="selectRitimMode('cumle')">
      <span class="ri-tab-icon">🎼</span><span class="ri-tab-label">Cümle Ritmi</span>
      <span class="ri-tab-sub">Heceleri ritimle söyle</span>
    </button>
  </div>

  <!-- Content panel (switches by mode) -->
  <div class="ri-content-panel" id="ri-content-panel">
    <!-- Filled by selectRitimMode() -->
  </div>

  <!-- Tip bar -->
  <div class="ri-tip-bar" id="ri-tip-bar">
    <span class="ri-tip-icon">💡</span>
    <span class="ri-tip-text" id="ri-tip-text">Ritim, konuşmanızın müzikal iskeletidir. İyi ritim sayesinde dinleyici sizi hiç zorlanmadan takip eder.</span>
  </div>

  <!-- History -->
  <div class="ri-history">
    <div class="ri-history-header">
      <span>📊 Son Seanslar</span>
      <button class="ri-clear-btn" onclick="clearRitimHistory()">Temizle</button>
    </div>
    <div class="ri-h-bars" id="ri-h-bars"></div>
    <div class="ri-h-empty" id="ri-h-empty">Henüz egzersiz tamamlanmadı</div>
  </div>

  <!-- Completion modal -->
  <div class="ri-modal-overlay" id="ri-modal-overlay" style="display:none">
    <div class="ri-modal">
      <div class="ri-modal-emoji" id="ri-modal-emoji">🏆</div>
      <div class="ri-modal-title" id="ri-modal-title">Mükemmel!</div>
      <div class="ri-modal-body" id="ri-modal-body">Ritim egzersizi tamamlandı</div>
      <div class="ri-modal-score" id="ri-modal-score">+50 Puan</div>
      <button class="ri-modal-btn" onclick="closeRitimModal()">Devam Et →</button>
    </div>
  </div>

</div>`;

  ritimScore = 0; ritimStreak = 0;
  updateRitimScoreDisplay();
  renderRitimHistory();
  selectRitimMode('metro');
}

// ── Mode Select ─────────────────────────────────────────────────
function selectRitimMode(mode) {
  ritimCurrentMode = mode;
  stopRitimMetro();

  document.querySelectorAll('.ri-mode-tab').forEach(tab => {
    tab.classList.toggle('active', tab.id === 'ri-tab-' + mode);
  });

  const tips = {
    metro:  'Metronomla çalışmak ritim duygunuzu kalıcı olarak geliştirir. Her gün 5 dakika yeterli.',
    kalip:  'Kalıpları önce yavaş dinleyin, sonra taklit edin. Hızı is hatalara yol açır.',
    cumle:  'Heceleri metronom vuruşlarına yerleştirin. Doğallık gelene kadar yavaş çalışın.'
  };
  const tipEl = document.getElementById('ri-tip-text');
  if (tipEl) tipEl.textContent = tips[mode];

  const panel = document.getElementById('ri-content-panel');
  if (!panel) return;

  if (mode === 'metro') renderMetroPanel(panel);
  else if (mode === 'kalip') renderKalipPanel(panel);
  else if (mode === 'cumle') renderCumlePanel(panel);
}

// ══════════════════════════════════════════════════════════════
//  🎵 PANEL 1 — METRONOM
// ══════════════════════════════════════════════════════════════
function renderMetroPanel(panel) {
  panel.innerHTML = `
<div class="ri-metro-layout">

  <!-- Left: Visual Metronome -->
  <div class="ri-metro-left">

    <!-- Pendulum -->
    <div class="ri-pendulum-wrap" id="ri-pendulum-wrap">
      <div class="ri-pendulum-arc"></div>
      <div class="ri-pendulum" id="ri-pendulum">
        <div class="ri-pendulum-rod"></div>
        <div class="ri-pendulum-ball" id="ri-pend-ball"></div>
        <div class="ri-pendulum-base"></div>
      </div>
      <!-- Beat lights -->
      <div class="ri-beat-lights" id="ri-beat-lights">
        <div class="ri-beat-light accent" id="ri-bl-0"></div>
        <div class="ri-beat-light" id="ri-bl-1"></div>
        <div class="ri-beat-light" id="ri-bl-2"></div>
        <div class="ri-beat-light" id="ri-bl-3"></div>
      </div>
    </div>

    <!-- BPM Info -->
    <div class="ri-bpm-info">
      <div class="ri-bpm-big" id="ri-bpm-big">${ritimBPM}</div>
      <div class="ri-bpm-label" id="ri-bpm-label">${getBPMLabel(ritimBPM)}</div>
    </div>

    <!-- BPM Slider -->
    <div class="ri-bpm-slider-wrap">
      <span class="ri-bpm-end">40</span>
      <input type="range" class="ri-bpm-slider" id="ri-bpm-slider"
        min="40" max="200" value="${ritimBPM}" oninput="onRitimBPMChange(this.value)">
      <span class="ri-bpm-end">200</span>
    </div>

    <!-- Preset BPM buttons -->
    <div class="ri-bpm-presets">
      <button class="ri-preset-btn" onclick="setRitimBPM(60)" title="Largo">60</button>
      <button class="ri-preset-btn" onclick="setRitimBPM(80)" title="Andante">80</button>
      <button class="ri-preset-btn" onclick="setRitimBPM(100)" title="Moderato">100</button>
      <button class="ri-preset-btn" onclick="setRitimBPM(120)" title="Allegro">120</button>
      <button class="ri-preset-btn" onclick="setRitimBPM(160)" title="Presto">160</button>
    </div>

    <!-- Time signature -->
    <div class="ri-timesig-row">
      <span class="ri-timesig-label">Ölçü</span>
      <div class="ri-timesig-btns">
        <button class="ri-tsig-btn active" id="ri-ts-2" onclick="setTimeSig(2)">2/4</button>
        <button class="ri-tsig-btn" id="ri-ts-3" onclick="setTimeSig(3)">3/4</button>
        <button class="ri-tsig-btn" id="ri-ts-4" onclick="setTimeSig(4)">4/4</button>
      </div>
    </div>
  </div>

  <!-- Right: Controls + Tap Tempo -->
  <div class="ri-metro-right">

    <!-- Play / Stop -->
    <button class="ri-play-btn" id="ri-play-btn" onclick="toggleRitimMetro()">
      <span class="ri-play-icon" id="ri-play-icon">▶</span>
      <span id="ri-play-label">Başlat</span>
    </button>

    <!-- Tap Tempo -->
    <div class="ri-tap-section">
      <div class="ri-tap-label">Tap Tempo — Ritme vurarak BPM belirleyin</div>
      <button class="ri-tap-btn" id="ri-tap-btn" onclick="tapTempo()">TAP</button>
      <div class="ri-tap-hint" id="ri-tap-hint">Ritme eşit aralıklarla vurun</div>
    </div>

    <!-- Accent toggle -->
    <div class="ri-option-row">
      <span class="ri-option-label">Vurgu Sesi</span>
      <label class="ri-toggle">
        <input type="checkbox" id="ri-accent-toggle" checked onchange="ritimAccentOn=this.checked">
        <span class="ri-toggle-track"></span>
      </label>
    </div>
    <div class="ri-option-row">
      <span class="ri-option-label">Ses Efekti</span>
      <label class="ri-toggle">
        <input type="checkbox" id="ri-sound-toggle" checked onchange="ritimSoundOn=this.checked">
        <span class="ri-toggle-track"></span>
      </label>
    </div>

    <!-- Practice guide -->
    <div class="ri-practice-guide">
      <div class="ri-pg-title">🎯 Egzersiz Rehberi</div>
      <div class="ri-pg-step"><span class="ri-pg-num">1</span><span>BPM'i 60-70'e ayarlayın</span></div>
      <div class="ri-pg-step"><span class="ri-pg-num">2</span><span>El veya ayakla vuruşu hissedin</span></div>
      <div class="ri-pg-step"><span class="ri-pg-num">3</span><span>Heceleri vuruşlara yerleştirin</span></div>
      <div class="ri-pg-step"><span class="ri-pg-num">4</span><span>Rahatladıkça BPM'i artırın</span></div>
    </div>

    <!-- Score this session -->
    <button class="ri-score-btn" onclick="awardRitimMetroPoints()">
      ✅ Bu seansi tamamla (+30p)
    </button>
  </div>

</div>`;

  // State for tap tempo
  window.ritimTapTimes = [];
  window.ritimAccentOn = true;
  window.ritimSoundOn  = true;
  window.ritimTimeSig  = 2;
}

let ritimTimeSig = 2;

function setTimeSig(n) {
  ritimTimeSig = n;
  document.querySelectorAll('.ri-tsig-btn').forEach(b => b.classList.remove('active'));
  const btn = document.getElementById('ri-ts-' + n);
  if (btn) btn.classList.add('active');
  // Rebuild beat lights
  const lights = document.getElementById('ri-beat-lights');
  if (lights) {
    lights.innerHTML = Array.from({length: n}, (_, i) =>
      `<div class="ri-beat-light ${i===0?'accent':''}" id="ri-bl-${i}"></div>`
    ).join('');
  }
  ritimBeatCount = 0;
}

function onRitimBPMChange(val) {
  ritimBPM = parseInt(val);
  const big = document.getElementById('ri-bpm-big');
  const lbl = document.getElementById('ri-bpm-label');
  const dis = document.getElementById('ri-bpm-display');
  if (big) big.textContent = ritimBPM;
  if (lbl) lbl.textContent = getBPMLabel(ritimBPM);
  if (dis) dis.textContent = ritimBPM;
  if (ritimIsPlaying) {
    stopRitimMetro();
    startRitimMetro();
  }
}

function setRitimBPM(bpm) {
  ritimBPM = bpm;
  const slider = document.getElementById('ri-bpm-slider');
  if (slider) slider.value = bpm;
  onRitimBPMChange(bpm);
}

function getBPMLabel(bpm) {
  if (bpm < 66)  return 'Largo — Çok Yavaş';
  if (bpm < 76)  return 'Adagio — Yavaş';
  if (bpm < 108) return 'Andante — Orta';
  if (bpm < 120) return 'Moderato — Orta Hızlı';
  if (bpm < 156) return 'Allegro — Hızlı';
  return 'Presto — Çok Hızlı';
}

function toggleRitimMetro() {
  if (ritimIsPlaying) stopRitimMetro();
  else startRitimMetro();
}

function startRitimMetro() {
  ritimIsPlaying = true;
  ritimBeatCount = 0;
  const btn = document.getElementById('ri-play-btn');
  const icon = document.getElementById('ri-play-icon');
  const lbl = document.getElementById('ri-play-label');
  if (btn) btn.classList.add('active');
  if (icon) icon.textContent = '⏹';
  if (lbl) lbl.textContent = 'Durdur';

  const ms = (60 / ritimBPM) * 1000;
  ritimBeatInterval = setInterval(() => {
    const isAccent = ritimBeatCount === 0;
    if (window.ritimSoundOn !== false) playClick(isAccent && window.ritimAccentOn !== false);
    pulsePendulum(ritimBeatCount);
    flashBeatLight(ritimBeatCount);
    ritimBeatCount = (ritimBeatCount + 1) % (ritimTimeSig || 4);
  }, ms);
}

function stopRitimMetro() {
  ritimIsPlaying = false;
  if (ritimBeatInterval) { clearInterval(ritimBeatInterval); ritimBeatInterval = null; }
  const btn = document.getElementById('ri-play-btn');
  const icon = document.getElementById('ri-play-icon');
  const lbl = document.getElementById('ri-play-label');
  if (btn) btn.classList.remove('active');
  if (icon) icon.textContent = '▶';
  if (lbl) lbl.textContent = 'Başlat';
  const pend = document.getElementById('ri-pendulum');
  if (pend) pend.classList.remove('left', 'right');
}

function pulsePendulum(beat) {
  const pend = document.getElementById('ri-pendulum');
  const ball = document.getElementById('ri-pend-ball');
  if (!pend) return;
  pend.classList.toggle('left', beat % 2 === 0);
  pend.classList.toggle('right', beat % 2 === 1);
  if (ball) {
    ball.style.background = beat === 0 ? '#f59e0b' : '#6366f1';
    setTimeout(() => { if (ball) ball.style.background = ''; }, 100);
  }
}

function flashBeatLight(beat) {
  const n = ritimTimeSig || 4;
  for (let i = 0; i < n; i++) {
    const el = document.getElementById('ri-bl-' + i);
    if (el) el.classList.remove('flash');
  }
  const el = document.getElementById('ri-bl-' + beat);
  if (el) {
    el.classList.add('flash');
    setTimeout(() => el.classList.remove('flash'), 120);
  }
}

// Tap Tempo
let tapTimes = [];
function tapTempo() {
  const now = Date.now();
  tapTimes.push(now);
  if (tapTimes.length > 6) tapTimes.shift();
  playTapSound();

  const btn = document.getElementById('ri-tap-btn');
  if (btn) { btn.classList.add('tapped'); setTimeout(() => btn.classList.remove('tapped'), 120); }

  if (tapTimes.length >= 2) {
    const intervals = [];
    for (let i = 1; i < tapTimes.length; i++) intervals.push(tapTimes[i] - tapTimes[i-1]);
    const avgMs = intervals.reduce((a,b)=>a+b,0)/intervals.length;
    const bpm = Math.round(60000 / avgMs);
    const clamped = Math.min(200, Math.max(40, bpm));
    setRitimBPM(clamped);
    const hint = document.getElementById('ri-tap-hint');
    if (hint) hint.textContent = `Hesaplanan: ${clamped} BPM`;
  }
}

function awardRitimMetroPoints() {
  if (!ritimIsPlaying) { showRitimToast('Önce metronoumu başlatın!'); return; }
  stopRitimMetro();
  ritimScore += 30; ritimStreak++;
  updateRitimScoreDisplay();
  saveRitimHistory('metro', 30);
  renderRitimHistory();
  showRitimModal('⏱️', 'Harika Ritim!', 'Metronom seansı tamamlandı!', '+30 Puan');
  spawnRitimConfetti();
}

// ══════════════════════════════════════════════════════════════
//  🥁 PANEL 2 — RİTİM KALIPLARI
// ══════════════════════════════════════════════════════════════
function renderKalipPanel(panel) {
  ritimKalipIdx = 0;
  ritimKalipPhase = 'watch';

  panel.innerHTML = `
<div class="ri-kalip-layout">
  <!-- Kalıp selector -->
  <div class="ri-kalip-grid" id="ri-kalip-grid">
    ${RITIM_KALIPLARI.map((k,i) => `
      <button class="ri-kalip-card ${i===0?'active':''}" id="ri-kc-${k.id}" onclick="selectKalip('${k.id}')">
        <span class="ri-kc-icon">${k.icon}</span>
        <span class="ri-kc-name">${k.name}</span>
        <span class="ri-kc-diff">${k.difficulty}</span>
        <span class="ri-kc-bpm">${k.bpm} BPM</span>
      </button>
    `).join('')}
  </div>

  <!-- Main exercise area -->
  <div class="ri-kalip-main" id="ri-kalip-main">
    <div class="ri-kalip-info" id="ri-kalip-info"></div>

    <!-- Pattern visualizer -->
    <div class="ri-pattern-display" id="ri-pattern-display"></div>

    <!-- Phase indicator -->
    <div class="ri-phase-badge" id="ri-phase-badge">👁️ İzle ve öğren</div>

    <!-- Controls -->
    <div class="ri-kalip-controls">
      <button class="ri-kalip-start-btn" id="ri-kalip-start-btn" onclick="startKalipExercise()">▶ Kalıbı Dinle</button>
      <button class="ri-kalip-tap-btn" id="ri-kalip-tap-btn" onclick="userTapKalip()" disabled>🥁 Vur!</button>
    </div>
    <div class="ri-kalip-feedback" id="ri-kalip-feedback"></div>
    <div class="ri-kalip-tip" id="ri-kalip-tip"></div>
  </div>
</div>`;

  selectKalip(RITIM_KALIPLARI[0].id);
}

function selectKalip(id) {
  ritimKalipIdx = RITIM_KALIPLARI.findIndex(k => k.id === id);
  const k = RITIM_KALIPLARI[ritimKalipIdx];
  if (!k) return;

  // Update cards
  document.querySelectorAll('.ri-kalip-card').forEach(c => c.classList.remove('active'));
  const card = document.getElementById('ri-kc-' + id);
  if (card) card.classList.add('active');

  // Info
  const info = document.getElementById('ri-kalip-info');
  if (info) info.innerHTML = `
    <div class="ri-ki-title">${k.icon} ${k.name}</div>
    <div class="ri-ki-desc">${k.desc}</div>
  `;

  // Pattern display
  renderPatternDisplay(k.pattern, []);

  // Tip
  const tipEl = document.getElementById('ri-kalip-tip');
  if (tipEl) tipEl.innerHTML = `<span>💡</span> ${k.tip}`;

  // Phase reset
  ritimKalipPhase = 'watch';
  const phase = document.getElementById('ri-phase-badge');
  if (phase) phase.innerHTML = '👁️ İzle ve öğren';
  const startBtn = document.getElementById('ri-kalip-start-btn');
  const tapBtn = document.getElementById('ri-kalip-tap-btn');
  if (startBtn) { startBtn.textContent = '▶ Kalıbı Dinle'; startBtn.disabled = false; }
  if (tapBtn) tapBtn.disabled = true;
  const fb = document.getElementById('ri-kalip-feedback');
  if (fb) fb.textContent = '';

  ritimUserPattern = [];
  ritimExpected = [...k.pattern];
  setRitimBPM(k.bpm);
}

function renderPatternDisplay(pattern, userPattern) {
  const el = document.getElementById('ri-pattern-display');
  if (!el) return;
  el.innerHTML = pattern.map((beat, i) => {
    const isHit = beat === 1;
    const userHit = userPattern[i] !== undefined ? userPattern[i] : null;
    let stateClass = '';
    if (userHit !== null) {
      stateClass = (userHit === beat) ? 'correct' : 'wrong';
    } else if (ritimKalipPhase === 'playing' && i === window.ritimDemoStep) {
      stateClass = 'current';
    }
    return `<div class="ri-beat-box ${isHit?'hit':''} ${stateClass}" id="ri-bb-${i}">
      ${isHit ? '●' : '○'}
    </div>`;
  }).join('');
}

let ritimDemoStep = 0;
window.ritimDemoStep = 0;

function startKalipExercise() {
  const k = RITIM_KALIPLARI[ritimKalipIdx];
  if (!k) return;
  const startBtn = document.getElementById('ri-kalip-start-btn');
  if (startBtn) startBtn.disabled = true;

  ritimKalipPhase = 'playing';
  const phase = document.getElementById('ri-phase-badge');
  if (phase) phase.innerHTML = '🎵 Kalıp çalınıyor...';

  let step = 0;
  window.ritimDemoStep = 0;
  const ms = (60 / k.bpm) * 1000;

  const interval = setInterval(() => {
    const isHit = k.pattern[step] === 1;
    if (isHit) playClick(step === 0);

    // Flash beat box
    const box = document.getElementById('ri-bb-' + step);
    if (box && isHit) { box.classList.add('playing'); setTimeout(() => box.classList.remove('playing'), ms * 0.4); }

    window.ritimDemoStep = step;
    step++;
    if (step >= k.pattern.length) {
      clearInterval(interval);
      setTimeout(() => {
        ritimKalipPhase = 'tap';
        if (phase) phase.innerHTML = '🥁 Şimdi siz vurun!';
        const tapBtn = document.getElementById('ri-kalip-tap-btn');
        if (tapBtn) tapBtn.disabled = false;
        if (startBtn) { startBtn.textContent = '↩ Tekrar Dinle'; startBtn.disabled = false; startBtn.onclick = startKalipExercise; }
        ritimUserPattern = [];
        renderPatternDisplay(k.pattern, []);
      }, 600);
    }
  }, ms);
}

function userTapKalip() {
  if (ritimKalipPhase !== 'tap') return;
  const k = RITIM_KALIPLARI[ritimKalipIdx];
  const idx = ritimUserPattern.length;
  if (idx >= k.pattern.length) return;

  ritimUserPattern.push(1); // user hit
  playTapSound();

  const tapBtn = document.getElementById('ri-kalip-tap-btn');
  if (tapBtn) { tapBtn.classList.add('tapped'); setTimeout(() => tapBtn.classList.remove('tapped'), 100); }

  // Check if should have been hit
  const expected = k.pattern[idx];
  renderPatternDisplay(k.pattern, ritimUserPattern);

  if (ritimUserPattern.length >= k.pattern.length) {
    evaluateKalip();
  }
}

function evaluateKalip() {
  const k = RITIM_KALIPLARI[ritimKalipIdx];
  let correct = 0;
  for (let i = 0; i < k.pattern.length; i++) {
    if ((ritimUserPattern[i] || 0) === k.pattern[i]) correct++;
  }
  const pct = Math.round((correct / k.pattern.length) * 100);
  const fb = document.getElementById('ri-kalip-feedback');
  const points = pct >= 80 ? 60 : pct >= 60 ? 40 : 20;

  if (fb) {
    if (pct >= 80) fb.innerHTML = `<span class="ri-fb-good">✅ ${pct}% doğru! Harika ritim!</span>`;
    else if (pct >= 60) fb.innerHTML = `<span class="ri-fb-ok">⚡ ${pct}% doğru. Tekrar deneyin!</span>`;
    else fb.innerHTML = `<span class="ri-fb-bad">❌ ${pct}% doğru. Kalıbı tekrar dinleyin.</span>`;
  }

  if (pct >= 60) {
    ritimScore += points; ritimStreak++;
    updateRitimScoreDisplay();
    saveRitimHistory('kalip', points);
    renderRitimHistory();
    const emoji = pct >= 80 ? '🥁' : '⚡';
    showRitimModal(emoji, pct >= 80 ? 'Muhteşem!' : 'İyi İş!', `${k.name} kalıbı — %${pct} doğruluk`, `+${points} Puan`);
    spawnRitimConfetti();
  }

  const phase = document.getElementById('ri-phase-badge');
  if (phase) phase.innerHTML = '📊 Sonuç';
  const tapBtn = document.getElementById('ri-kalip-tap-btn');
  if (tapBtn) tapBtn.disabled = true;
}

// ══════════════════════════════════════════════════════════════
//  🎼 PANEL 3 — CÜMLE RİTMİ
// ══════════════════════════════════════════════════════════════
function renderCumlePanel(panel) {
  ritimCumleIdx = 0;

  panel.innerHTML = `
<div class="ri-cumle-layout">

  <!-- Sentence selector -->
  <div class="ri-cumle-selector" id="ri-cumle-selector">
    ${RITIM_CUMLELERI.map((c, i) => `
      <button class="ri-cumle-btn ${i===0?'active':''}" id="ri-cb-${c.id}" onclick="selectCumle('${c.id}')">
        <span>${c.icon}</span> <span>${c.text}</span>
        <span class="ri-cb-bpm">${c.bpm} BPM</span>
      </button>
    `).join('')}
  </div>

  <!-- Main area -->
  <div class="ri-cumle-main">

    <!-- Syllable display -->
    <div class="ri-syllable-display" id="ri-syllable-display"></div>

    <!-- Beat indicator bar -->
    <div class="ri-cumle-beat-bar" id="ri-cumle-beat-bar"></div>

    <!-- Controls -->
    <div class="ri-cumle-controls">
      <button class="ri-cumle-start-btn" id="ri-cumle-start-btn" onclick="toggleCumleExercise()">
        ▶ Başlat
      </button>
      <div class="ri-cumle-bpm-row">
        <span class="ri-bpm-small-label">Hız</span>
        <input type="range" class="ri-bpm-slider-sm" id="ri-cumle-bpm-slider"
          min="40" max="140" value="${RITIM_CUMLELERI[0].bpm}"
          oninput="onCumleBPMChange(this.value)">
        <span class="ri-bpm-small-val" id="ri-cumle-bpm-val">${RITIM_CUMLELERI[0].bpm} BPM</span>
      </div>
    </div>

    <!-- Tip -->
    <div class="ri-cumle-tip" id="ri-cumle-tip"></div>

    <!-- Score button -->
    <button class="ri-score-btn" onclick="awardCumlePoints()">✅ Seansi Tamamla (+50p)</button>
  </div>

</div>`;

  selectCumle(RITIM_CUMLELERI[0].id);
}

function selectCumle(id) {
  ritimCumleIdx = RITIM_CUMLELERI.findIndex(c => c.id === id);
  const c = RITIM_CUMLELERI[ritimCumleIdx];
  if (!c) return;

  stopCumleExercise();

  document.querySelectorAll('.ri-cumle-btn').forEach(b => b.classList.remove('active'));
  const btn = document.getElementById('ri-cb-' + id);
  if (btn) btn.classList.add('active');

  // Syllable display
  const sylEl = document.getElementById('ri-syllable-display');
  if (sylEl) {
    sylEl.innerHTML = c.syllables.map((s, i) =>
      `<span class="ri-syllable" id="ri-syl-${i}">${s}</span>`
    ).join('');
  }

  // Beat bar
  const beatBar = document.getElementById('ri-cumle-beat-bar');
  if (beatBar) {
    beatBar.innerHTML = c.syllables.map((_, i) =>
      `<div class="ri-cbb-dot" id="ri-cbb-${i}"></div>`
    ).join('');
  }

  // BPM
  const slider = document.getElementById('ri-cumle-bpm-slider');
  const val = document.getElementById('ri-cumle-bpm-val');
  if (slider) slider.value = c.bpm;
  if (val) val.textContent = c.bpm + ' BPM';

  // Tip
  const tip = document.getElementById('ri-cumle-tip');
  if (tip) tip.innerHTML = `<span>💡</span> ${c.tip}`;

  ritimCumleBeat = 0;
}

function onCumleBPMChange(val) {
  const valEl = document.getElementById('ri-cumle-bpm-val');
  if (valEl) valEl.textContent = val + ' BPM';
  if (ritimCumleRunning) {
    stopCumleExercise();
    setTimeout(() => startCumleExercise(), 100);
  }
}

function toggleCumleExercise() {
  if (ritimCumleRunning) stopCumleExercise();
  else startCumleExercise();
}

function startCumleExercise() {
  const c = RITIM_CUMLELERI[ritimCumleIdx];
  if (!c) return;
  const slider = document.getElementById('ri-cumle-bpm-slider');
  const bpm = slider ? parseInt(slider.value) : c.bpm;
  const ms = (60 / bpm) * 1000;

  ritimCumleRunning = true;
  ritimCumleBeat = 0;

  const startBtn = document.getElementById('ri-cumle-start-btn');
  if (startBtn) { startBtn.textContent = '⏹ Durdur'; startBtn.classList.add('active'); }

  function beatFn() {
    if (!ritimCumleRunning) return;
    const idx = ritimCumleBeat % c.syllables.length;

    // Highlight syllable
    document.querySelectorAll('.ri-syllable').forEach((s, i) => s.classList.toggle('active', i === idx));
    document.querySelectorAll('.ri-cbb-dot').forEach((d, i) => d.classList.toggle('active', i === idx));

    playClick(idx === 0);

    ritimCumleBeat++;
    ritimCumleTimer = setTimeout(beatFn, ms);
  }
  beatFn();
}

function stopCumleExercise() {
  ritimCumleRunning = false;
  if (ritimCumleTimer) { clearTimeout(ritimCumleTimer); ritimCumleTimer = null; }
  const startBtn = document.getElementById('ri-cumle-start-btn');
  if (startBtn) { startBtn.textContent = '▶ Başlat'; startBtn.classList.remove('active'); }
  document.querySelectorAll('.ri-syllable').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('.ri-cbb-dot').forEach(d => d.classList.remove('active'));
}

function awardCumlePoints() {
  if (!ritimCumleRunning) { showRitimToast('Önce egzersizi başlatın!'); return; }
  stopCumleExercise();
  ritimScore += 50; ritimStreak++;
  updateRitimScoreDisplay();
  saveRitimHistory('cumle', 50);
  renderRitimHistory();
  showRitimModal('🎼', 'Harika Ritim!', 'Cümle ritmi tamamlandı!', '+50 Puan');
  spawnRitimConfetti();
}

// ── Score / History ────────────────────────────────────────────
function updateRitimScoreDisplay() {
  const s = document.getElementById('ri-score-num');
  const st = document.getElementById('ri-streak-num');
  const b = document.getElementById('ri-best-num');
  if (s) s.textContent = ritimScore;
  if (st) st.textContent = ritimStreak;
  if (b) b.textContent = Math.max(ritimScore, getRitimBestScore());
}

function getRitimBestScore() {
  try {
    const h = JSON.parse(localStorage.getItem(RITIM_SCORES_KEY) || '[]');
    return h.length ? Math.max(...h.map(s => s.score || 0)) : 0;
  } catch { return 0; }
}

function saveRitimHistory(mode, points) {
  try {
    const h = JSON.parse(localStorage.getItem(RITIM_SCORES_KEY) || '[]');
    h.push({ mode, points, score: ritimScore, ts: Date.now() });
    if (h.length > 20) h.splice(0, h.length - 20);
    localStorage.setItem(RITIM_SCORES_KEY, JSON.stringify(h));
  } catch {}
}

function renderRitimHistory() {
  const bars = document.getElementById('ri-h-bars');
  const empty = document.getElementById('ri-h-empty');
  if (!bars) return;
  try {
    const h = JSON.parse(localStorage.getItem(RITIM_SCORES_KEY) || '[]');
    const recent = h.slice(-10);
    if (!recent.length) { if (empty) empty.style.display = 'block'; bars.innerHTML = ''; return; }
    if (empty) empty.style.display = 'none';
    const maxPts = Math.max(...recent.map(s => s.points));
    const colors = { metro: '#f59e0b', kalip: '#6366f1', cumle: '#10b981' };
    bars.innerHTML = recent.map(s => {
      const color = colors[s.mode] || '#6366f1';
      const barH = Math.max(10, Math.round((s.points / maxPts) * 60));
      const d = new Date(s.ts);
      const time = d.getHours().toString().padStart(2,'0') + ':' + d.getMinutes().toString().padStart(2,'0');
      const labels = { metro: 'Metro', kalip: 'Kalıp', cumle: 'Cümle' };
      return `<div class="rl-hbar-wrap" title="+${s.points}p — ${labels[s.mode]||s.mode} — ${time}">
        <div class="rl-hbar" style="height:${barH}px;background:${color}"></div>
        <div class="rl-hbar-pts">+${s.points}</div>
      </div>`;
    }).join('');
  } catch {}
}

function clearRitimHistory() {
  try { localStorage.removeItem(RITIM_SCORES_KEY); } catch {}
  ritimScore = 0; ritimStreak = 0;
  updateRitimScoreDisplay();
  renderRitimHistory();
}

// ── Modal & Toast ──────────────────────────────────────────────
function showRitimModal(emoji, title, body, score) {
  const overlay = document.getElementById('ri-modal-overlay');
  if (!overlay) return;
  document.getElementById('ri-modal-emoji').textContent = emoji;
  document.getElementById('ri-modal-title').textContent = title;
  document.getElementById('ri-modal-body').textContent = body;
  document.getElementById('ri-modal-score').textContent = score;
  overlay.style.display = 'flex';
}

function closeRitimModal() {
  const overlay = document.getElementById('ri-modal-overlay');
  if (overlay) overlay.style.display = 'none';
}

function showRitimToast(msg) {
  if (typeof showToast === 'function') showToast(msg);
}

function spawnRitimConfetti() {
  const wrapper = document.getElementById('ri-wrapper');
  if (!wrapper) return;
  const colors = ['#f59e0b','#6366f1','#10b981','#ef4444','#ec4899','#22d3ee'];
  for (let i = 0; i < 40; i++) {
    const d = document.createElement('div');
    d.className = 'rl-confetti-piece';
    d.style.cssText = `left:${Math.random()*100}%;background:${colors[Math.floor(Math.random()*colors.length)]};width:${6+Math.random()*8}px;height:${6+Math.random()*8}px;animation-delay:${Math.random()*0.5}s;animation-duration:${1.5+Math.random()}s;`;
    wrapper.appendChild(d);
    setTimeout(() => d.remove(), 3000);
  }
}
