
// ═══════════ Reflex Game ═══════════
const reflexWords = [
  { word: 'Saat', answer: 'S' }, { word: 'Şeker', answer: 'Ş' }, { word: 'Salon', answer: 'S' },
  { word: 'Şapka', answer: 'Ş' }, { word: 'Sabah', answer: 'S' }, { word: 'Şehir', answer: 'Ş' },
  { word: 'Sinema', answer: 'S' }, { word: 'Şiir', answer: 'Ş' }, { word: 'Soru', answer: 'S' },
  { word: 'Şüphe', answer: 'Ş' }, { word: 'Silgi', answer: 'S' }, { word: 'Şimdi', answer: 'Ş' },
  { word: 'Soğuk', answer: 'S' }, { word: 'Şarkı', answer: 'Ş' }, { word: 'Sevgi', answer: 'S' },
  { word: 'Şişe', answer: 'Ş' }, { word: 'Sıcak', answer: 'S' }, { word: 'Şans', answer: 'Ş' },
  { word: 'Süt', answer: 'S' }, { word: 'Şömine', answer: 'Ş' }
];

let rIdx = 0, rCorrect = 0, rWrong = 0, rStreak = 0, rMaxStreak = 0, shuffled = [];

function reflexStart() {
  shuffled = [...reflexWords].sort(() => Math.random() - 0.5);
  rIdx = 0; rCorrect = 0; rWrong = 0; rStreak = 0;
  updateReflexUI();
  document.getElementById('reflexStartBtn').style.display = 'none';
  document.getElementById('reflexBtns').style.display = 'flex';
  showReflexWord();
}

function showReflexWord() {
  if (rIdx >= shuffled.length) {
    document.getElementById('reflexWord').innerHTML = '🏁 Bitti!';
    document.getElementById('reflexBtns').style.display = 'none';
    document.getElementById('reflexStartBtn').style.display = '';
    document.getElementById('reflexStartBtn').textContent = '↻ Tekrar Oyna';
    document.getElementById('reflexFeedback').innerHTML = '<span style="color:#818cf8;">Skor: ' + rCorrect + '/' + shuffled.length + ' — En uzun seri: ' + rMaxStreak + '</span>';
    return;
  }
  const w = shuffled[rIdx];
  const first = w.word[0];
  const rest = w.word.slice(1);
  const color = w.answer === 'S' ? '#06b6d4' : '#a855f7';
  document.getElementById('reflexWord').innerHTML = '<span style="color:' + color + ';font-size:4rem;">' + first + '</span>' + rest;
  document.getElementById('reflexProgress').textContent = (rIdx + 1) + ' / ' + shuffled.length;
  document.getElementById('reflexFeedback').textContent = '';
}

function reflexAnswer(ans) {
  const correct = shuffled[rIdx].answer === ans;
  if (correct) {
    rCorrect++; rStreak++;
    if (rStreak > rMaxStreak) rMaxStreak = rStreak;
    document.getElementById('reflexFeedback').innerHTML = '<span class="fb-correct">✓ Doğru!</span>';
  } else {
    rWrong++; rStreak = 0;
    document.getElementById('reflexFeedback').innerHTML = '<span class="fb-wrong">✗ Yanlış! Doğru: ' + shuffled[rIdx].answer + '</span>';
  }
  updateReflexUI();
  rIdx++;
  setTimeout(showReflexWord, 600);
}

function updateReflexUI() {
  document.getElementById('rCorrect').textContent = rCorrect;
  document.getElementById('rWrong').textContent = rWrong;
  document.getElementById('rStreak').textContent = rStreak;
}

// ═══════════ Minimal Pairs ═══════════
const pairs = [
  { s: 'Ses', ss: 'Şeş', explain: 'Ses = duyulan titreşim / Şeş = (argo) altı sayısı' },
  { s: 'Saç', ss: 'Şaç', explain: 'Saç = kıl / Şaç = (ağız) saçmak fiili' },
  { s: 'Saka', ss: 'Şaka', explain: 'Saka = su taşıyıcı kuş / Şaka = mizah, espri' },
  { s: 'Sis', ss: 'Şiş', explain: 'Sis = buhar perdesi / Şiş = sivri metal çubuk' },
  { s: 'Sura', ss: 'Şura', explain: 'Sura = Kur\'an bölümü / Şura = danışma, istişare' },
  { s: 'Sır', ss: 'Şır', explain: 'Sır = gizli bilgi / Şır = su sesi (şırıl şırıl)' },
  { s: 'Sat', ss: 'Şat', explain: 'Sat = satmak fiili / Şat = nehir kolu' },
  { s: 'Sap', ss: 'Şap', explain: 'Sap = tutma yeri / Şap = mineraI / tokat sesi' }
];

function renderPairs() {
  const grid = document.getElementById('pairGrid');
  pairs.forEach((p, i) => {
    const card = document.createElement('div');
    card.className = 'pair-card';
    card.innerHTML = '<div class="pair-words"><span class="s-w">' + p.s + '</span> — <span class="ss-w">' + p.ss + '</span></div><div class="pair-explain">' + p.explain + '</div>';
    card.onclick = () => card.classList.toggle('revealed');
    grid.appendChild(card);
  });
}
renderPairs();

// ═══════════ Chronometer ═══════════
let chronoInterval = null, chronoTime = 0, bestTime = Infinity;

function chronoStart() {
  if(chronoInterval) return;
  document.getElementById('chronoStartBtn').style.display = 'none';
  document.getElementById('chronoStopBtn').style.display = '';
  chronoInterval = setInterval(() => {
    chronoTime += 10;
    const mins = Math.floor(chronoTime / 60000);
    const secs = Math.floor((chronoTime % 60000) / 1000);
    const ms = Math.floor((chronoTime % 1000) / 10);
    document.getElementById('chronoMin').textContent = String(mins).padStart(2,'0');
    document.getElementById('chronoSec').textContent = String(secs).padStart(2,'0');
    document.getElementById('chronoMs').textContent = String(ms).padStart(2,'0');
  }, 10);
}

function chronoStop() {
  clearInterval(chronoInterval); chronoInterval = null;
  document.getElementById('chronoStartBtn').style.display = '';
  document.getElementById('chronoStopBtn').style.display = 'none';
  if(chronoTime > 0 && chronoTime < bestTime) {
    bestTime = chronoTime;
    const mins = Math.floor(bestTime / 60000);
    const secs = Math.floor((bestTime % 60000) / 1000);
    const ms = Math.floor((bestTime % 1000) / 10);
    document.getElementById('chronoBest').innerHTML = '🏆 En İyi Süre: <strong style="color:#818cf8;">' + String(mins).padStart(2,'0') + ':' + String(secs).padStart(2,'0') + '.' + String(ms).padStart(2,'0') + '</strong>';
  }
}

function chronoReset() {
  clearInterval(chronoInterval); chronoInterval = null; chronoTime = 0;
  document.getElementById('chronoMin').textContent = '00';
  document.getElementById('chronoSec').textContent = '00';
  document.getElementById('chronoMs').textContent = '00';
  document.getElementById('chronoStartBtn').style.display = '';
  document.getElementById('chronoStopBtn').style.display = 'none';
}

// ═══════════ Weekly Plan ═══════════
const weekPlan = [
  { day: 'Pazartesi', icon: '🎯', task: 'S sesini 2dk uzat, sonra Ş\'ye geçiş yap' },
  { day: 'Salı', icon: '🔤', task: 'Minimal çift oyununu oyna (8 çift)' },
  { day: 'Çarşamba', icon: '⚡', task: 'Refleks testini 3 tur oyna' },
  { day: 'Perşembe', icon: '⏱️', task: 'Şişe tekerlemesini kronometrele' },
  { day: 'Cuma', icon: '🪞', task: 'Ayna karşısında S/Ş dudak farkını gözlemle' },
  { day: 'Cumartesi', icon: '📖', task: 'Bir paragrafı S/Ş\'lere dikkat ederek oku' },
  { day: 'Pazar', icon: '🏆', task: 'Tüm testleri tekrarla ve skorlarını karşılaştır' }
];

function renderWeek() {
  const grid = document.getElementById('weekGrid');
  weekPlan.forEach((d, i) => {
    const card = document.createElement('div');
    card.className = 'day-card';
    const saved = localStorage.getItem('sh_day_' + i);
    if (saved === 'done') card.classList.add('done');
    card.innerHTML = '<div class="day-num">' + d.day + '</div><div class="day-icon">' + d.icon + '</div><div class="day-task">' + d.task + '</div>';
    card.onclick = () => {
      card.classList.toggle('done');
      localStorage.setItem('sh_day_' + i, card.classList.contains('done') ? 'done' : '');
    };
    grid.appendChild(card);
  });
}
renderWeek();

// ═══════════ Scroll Reveal ═══════════
const obs = new IntersectionObserver((entries) => {
  entries.forEach(e => { if(e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => obs.observe(el));

