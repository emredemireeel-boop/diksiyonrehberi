/* ═══════════════════════════════════════════════════════════════
   RETORIK MODULE — Interactive Engine
   ═══════════════════════════════════════════════════════════════ */

(function(){
'use strict';

// ── State ─────────────────────────────────────────────────────
const STORAGE_KEY = 'dr_retorik_completed';
let completed = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
const TOTAL_EXERCISES = 18;

// ── Category Filter ───────────────────────────────────────────
function initCategoryFilter(){
  // Pills are now SSR links, no JS interception needed.
  // The backend renders the active class and correct data.
}

// ── Quiz Engine ───────────────────────────────────────────────
function initQuizzes(){
  document.querySelectorAll('.ret-quiz-box').forEach(quiz => {
    const options = quiz.querySelectorAll('.ret-quiz-option');
    const feedback = quiz.querySelector('.ret-quiz-feedback');
    const correctIdx = parseInt(quiz.dataset.correct);
    let answered = false;
    
    options.forEach((opt, idx) => {
      opt.addEventListener('click', () => {
        if(answered) return;
        answered = true;
        
        options.forEach(o => o.style.pointerEvents = 'none');
        
        if(idx === correctIdx){
          opt.classList.add('correct');
          if(feedback){
            feedback.className = 'ret-quiz-feedback show correct';
            feedback.innerHTML = '✅ ' + (feedback.dataset.correctText || 'Doğru!');
          }
        } else {
          opt.classList.add('wrong');
          options[correctIdx].classList.add('correct');
          if(feedback){
            feedback.className = 'ret-quiz-feedback show wrong';
            feedback.innerHTML = '❌ ' + (feedback.dataset.wrongText || 'Yanlış. Doğru cevap işaretlendi.');
          }
        }
      });
    });
  });
}

// ── Accordion ─────────────────────────────────────────────────
function initAccordions(){
  document.querySelectorAll('.ret-acc-trigger').forEach(trigger => {
    trigger.addEventListener('click', () => {
      const item = trigger.closest('.ret-acc-item');
      const wasOpen = item.classList.contains('open');
      // Close siblings
      item.parentElement.querySelectorAll('.ret-acc-item').forEach(i => i.classList.remove('open'));
      if(!wasOpen) item.classList.add('open');
    });
  });
}

// ── Exercise Completion ───────────────────────────────────────
function initCompleteBtns(){
  document.querySelectorAll('.ret-complete-btn').forEach(btn => {
    const exId = btn.dataset.exId;
    if(completed.includes(exId)){
      btn.classList.add('completed');
      btn.innerHTML = '✓ Tamamlandı';
    }
    btn.addEventListener('click', () => {
      if(completed.includes(exId)) return;
      completed.push(exId);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(completed));
      btn.classList.add('completed');
      btn.innerHTML = '✓ Tamamlandı';
      updateProgress();
      if(window.showToast) window.showToast('🎉 Egzersiz tamamlandı!');
    });
  });
}

// ── Progress Bar ──────────────────────────────────────────────
function updateProgress(){
  const bar = document.getElementById('ret-progress-fill');
  const count = document.getElementById('ret-progress-count');
  const msg = document.getElementById('ret-progress-msg');
  if(!bar) return;
  
  const done = completed.length;
  const pct = Math.round((done / TOTAL_EXERCISES) * 100);
  bar.style.width = pct + '%';
  if(count) count.textContent = done + ' / ' + TOTAL_EXERCISES;
  if(msg){
    if(pct === 0) msg.textContent = '🚀 Retoriğe ilk adımınızı atın!';
    else if(pct < 30) msg.textContent = '💪 Harika başlangıç!';
    else if(pct < 60) msg.textContent = '🔥 İkna ustası olma yolundasınız!';
    else if(pct < 100) msg.textContent = '⚡ Neredeyse tamamladınız!';
    else msg.textContent = '🏆 Tüm retorik egzersizlerini tamamladınız!';
  }
}

// ── Init ──────────────────────────────────────────────────────
function initRetorik(){
  const container = document.getElementById('retorik-container');
  if(!container) return;
  initCategoryFilter();
  initQuizzes();
  initAccordions();
  initCompleteBtns();
  updateProgress();
}

// Run on load and on page navigation
if(document.readyState === 'loading'){
  document.addEventListener('DOMContentLoaded', initRetorik);
} else {
  initRetorik();
}

// Expose for SPA navigation
window.initRetorikModule = initRetorik;

})();
