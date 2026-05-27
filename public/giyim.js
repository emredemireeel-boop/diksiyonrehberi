/* ═══════════════════════════════════════════════════════════════
   GİYİM MODULE — Interactive Engine
   ═══════════════════════════════════════════════════════════════ */

(function(){
'use strict';

// ── State ─────────────────────────────────────────────────────
const STORAGE_KEY = 'dr_giyim_completed';
let completed = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
const TOTAL_TASKS = 6; // One for each main category

// ── Category Filter ───────────────────────────────────────────
function initCategoryFilter(){
  document.querySelectorAll('.giyim-pill').forEach(pill => {
    pill.addEventListener('click', e => {
      e.preventDefault();
      const section = pill.dataset.section || 'all';
      
      if(window.filterGiyimCategory){
        window.filterGiyimCategory(section, true);
        return;
      }
      
      document.querySelectorAll('.giyim-pill').forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      
      document.querySelectorAll('.giyim-subpage').forEach(sec => {
        if(section === 'all' || sec.id === section){
          sec.classList.add('active');
        } else {
          sec.classList.remove('active');
        }
      });
      window.scrollTo({top: 0, behavior: 'smooth'});
    });
  });
}

window.filterGiyimCategory = function(sectionId, updateUrl = false) {
    document.querySelectorAll('.giyim-pill').forEach(p => {
        p.classList.remove('active');
        if(p.dataset.section === sectionId || (sectionId === 'all' && !p.dataset.section)) {
            p.classList.add('active');
        }
    });

    document.querySelectorAll('.giyim-subpage').forEach(sec => {
        if(sectionId === 'all' || sec.id === sectionId){
            sec.classList.add('active');
        } else {
            sec.classList.remove('active');
        }
    });

    if (updateUrl) {
        const path = sectionId === 'all' ? '/giyim' : `/giyim/${sectionId}`;
        history.pushState(null, '', path);
    }
};

// ── Modal System ──────────────────────────────────────────────
function initModals(){
  const overlay = document.getElementById('giy-modal-overlay');
  if(!overlay) return;

  document.querySelectorAll('.giy-card[data-modal]').forEach(card => {
    card.addEventListener('click', () => {
      const modalId = card.dataset.modal;
      const modal = document.getElementById(modalId);
      if(modal){
        overlay.classList.add('active');
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
      }
    });
  });

  document.querySelectorAll('.giy-modal-close').forEach(btn => {
    btn.addEventListener('click', () => {
      const modal = btn.closest('.giy-modal');
      if(modal) modal.classList.remove('active');
      overlay.classList.remove('active');
      document.body.style.overflow = '';
    });
  });

  overlay.addEventListener('click', () => {
    document.querySelectorAll('.giy-modal.active').forEach(m => m.classList.remove('active'));
    overlay.classList.remove('active');
    document.body.style.overflow = '';
  });
}

// ── Color Wheel ───────────────────────────────────────────────
function initColorWheel(){
  const swatches = document.querySelectorAll('.giy-color-swatch');
  swatches.forEach(swatch => {
    swatch.addEventListener('click', () => {
      const colorName = swatch.querySelector('span').innerText;
      const modal = document.getElementById('modal-color-detail');
      if(modal){
        modal.querySelector('.giy-modal-title').innerHTML = `🎨 ${colorName} Psikolojisi`;
        // In a real app, we'd load specific content here based on data attributes
        const content = swatch.dataset.content || `${colorName} rengi, giyimde spesifik bir etki yaratır. İş dünyasında ve sosyal ortamlarda doğru kullanımı önemlidir.`;
        modal.querySelector('.giy-modal-body').innerHTML = `<p>${content}</p>
        <h3>Kombin Önerileri</h3>
        <ul>
          <li>Nötr renklerle (gri, beyaz, siyah) dengeleyin.</li>
          <li>Kontrast renklerle vurgu yapın.</li>
        </ul>`;
        
        document.getElementById('giy-modal-overlay').classList.add('active');
        modal.classList.add('active');
      }
    });
  });
}

// ── Wizard System (Vücut Tipi vb.) ────────────────────────────
function initWizards(){
  document.querySelectorAll('.giy-wizard').forEach(wizard => {
    const steps = wizard.querySelectorAll('.giy-wizard-page');
    const dots = wizard.querySelectorAll('.giy-wizard-dot');
    const result = wizard.querySelector('.giy-wizard-result');
    let currentStep = 0;

    wizard.querySelectorAll('.giy-wizard-opt').forEach(opt => {
      opt.addEventListener('click', () => {
        const parentPage = opt.closest('.giy-wizard-page');
        const pageIdx = Array.from(steps).indexOf(parentPage);
        
        // Deselect others in same page
        parentPage.querySelectorAll('.giy-wizard-opt').forEach(o => o.classList.remove('selected'));
        opt.classList.add('selected');

        setTimeout(() => {
          parentPage.classList.remove('active');
          if(dots[pageIdx]) {
              dots[pageIdx].classList.remove('active');
              dots[pageIdx].classList.add('done');
          }

          if(pageIdx + 1 < steps.length){
            steps[pageIdx + 1].classList.add('active');
            if(dots[pageIdx+1]) dots[pageIdx+1].classList.add('active');
          } else {
            if(result) result.classList.add('active');
            markComplete(wizard.dataset.taskId);
          }
        }, 400);
      });
    });
  });
}

// ── Outfit Lab ────────────────────────────────────────────────
function initOutfitLab(){
  const selects = document.querySelectorAll('.giy-outfit-sel select');
  const scoreNum = document.getElementById('outfit-score-num');
  const feedback = document.getElementById('outfit-feedback');
  
  if(!scoreNum) return;

  function calculateScore(){
    let score = 50;
    let answered = 0;
    selects.forEach(s => {
      if(s.value) {
        answered++;
        score += parseInt(s.value);
      }
    });

    if(answered === 0) return;

    // Normalize to 100
    score = Math.min(100, Math.max(10, score + (Math.random()*10 - 5))); 
    score = Math.round(score);
    
    scoreNum.innerText = score;
    
    if(score >= 90) feedback.innerText = "Mükemmel kombin! Tam bir profesyonel gibi görünüyorsunuz.";
    else if(score >= 70) feedback.innerText = "İyi bir başlangıç. Ufak detaylarla daha da iyi olabilir.";
    else feedback.innerText = "Parçalar birbiriyle uyumsuz. Renk ve tarz kurallarını tekrar gözden geçirin.";

    if(answered === selects.length && score >= 70) {
        markComplete('outfit');
    }
  }

  selects.forEach(s => s.addEventListener('change', calculateScore));
}

// ── Style Test ────────────────────────────────────────────────
function initStyleTest(){
  const testContainer = document.querySelector('.giy-style-test');
  if(!testContainer) return;

  const questions = testContainer.querySelectorAll('.giy-st-question');
  const dots = testContainer.querySelectorAll('.giy-st-dot');
  const result = testContainer.querySelector('.giy-st-result');
  let scores = { klasik: 0, modern: 0, minimalist: 0, avantgarde: 0 };

  testContainer.querySelectorAll('.giy-st-opt').forEach(opt => {
    opt.addEventListener('click', () => {
      const type = opt.dataset.type;
      if(type && scores[type] !== undefined) scores[type]++;

      const parentQ = opt.closest('.giy-st-question');
      const qIdx = Array.from(questions).indexOf(parentQ);

      setTimeout(() => {
        parentQ.classList.remove('active');
        if(dots[qIdx]){
            dots[qIdx].classList.remove('active');
            dots[qIdx].classList.add('done');
        }

        if(qIdx + 1 < questions.length){
          questions[qIdx + 1].classList.add('active');
          if(dots[qIdx+1]) dots[qIdx+1].classList.add('active');
        } else {
          showStyleResult();
        }
      }, 300);
    });
  });

  function showStyleResult(){
    let dominant = 'klasik';
    let max = -1;
    for(const [key, val] of Object.entries(scores)){
      if(val > max){ max = val; dominant = key; }
    }

    const titles = {
      klasik: "Klasik & Profesyonel",
      modern: "Modern & Dinamik",
      minimalist: "Sade & Minimalist",
      avantgarde: "Yenilikçi & Cesur"
    };

    result.querySelector('h2').innerText = titles[dominant];
    result.classList.add('active');
    markComplete('stil');
  }
}

// ── Quiz System ───────────────────────────────────────────────
function initQuizzes(){
  document.querySelectorAll('.giy-quiz-opt').forEach(opt => {
    opt.addEventListener('click', () => {
      const quiz = opt.closest('.giy-quiz');
      if(quiz.dataset.answered) return;
      quiz.dataset.answered = "true";

      const isCorrect = opt.classList.contains('correct-answer');
      const feedback = quiz.querySelector('.giy-quiz-feedback');

      if(isCorrect){
        opt.classList.add('correct');
        if(feedback){
          feedback.className = 'giy-quiz-feedback show correct';
          feedback.innerHTML = '✅ Doğru tercih! ' + (feedback.dataset.correctText || '');
        }
        markComplete(quiz.dataset.taskId);
      } else {
        opt.classList.add('wrong');
        const correctOpt = quiz.querySelector('.correct-answer');
        if(correctOpt) correctOpt.classList.add('correct');
        if(feedback){
          feedback.className = 'giy-quiz-feedback show wrong';
          feedback.innerHTML = '❌ Yanlış. ' + (feedback.dataset.wrongText || '');
        }
      }
    });
  });
}

// ── Accordions ────────────────────────────────────────────────
function initAccordions(){
  document.querySelectorAll('.giy-acc-trigger').forEach(trigger => {
    trigger.addEventListener('click', () => {
      const item = trigger.closest('.giy-acc-item');
      item.classList.toggle('open');
    });
  });
}

// ── Progress & Completion ─────────────────────────────────────
function markComplete(taskId){
  if(!taskId || completed.includes(taskId)) return;
  completed.push(taskId);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(completed));
  updateProgress();
  
  const btn = document.querySelector(`.giy-complete-btn[data-task-id="${taskId}"]`);
  if(btn){
    btn.classList.add('completed');
    btn.innerHTML = '✓ Tamamlandı';
  }
}

function updateProgress(){
  const fill = document.querySelector('.giy-progress-fill');
  const count = document.querySelector('.giy-progress-count');
  if(!fill) return;

  const pct = Math.round((completed.length / TOTAL_TASKS) * 100);
  fill.style.width = pct + '%';
  if(count) count.innerText = `${completed.length} / ${TOTAL_TASKS}`;

  document.querySelectorAll('.giy-complete-btn').forEach(btn => {
    if(completed.includes(btn.dataset.taskId)){
      btn.classList.add('completed');
      btn.innerHTML = '✓ Tamamlandı';
    }
  });
}

function initCompleteBtns(){
  document.querySelectorAll('.giy-complete-btn').forEach(btn => {
    btn.addEventListener('click', () => markComplete(btn.dataset.taskId));
  });
}

// ── Init ──────────────────────────────────────────────────────
function initGiyim(){
  const container = document.getElementById('giyim-container');
  if(!container) return;

  initCategoryFilter();
  initModals();
  initColorWheel();
  initWizards();
  initOutfitLab();
  initStyleTest();
  initQuizzes();
  initAccordions();
  initCompleteBtns();
  updateProgress();
}

if(document.readyState === 'loading'){
  document.addEventListener('DOMContentLoaded', initGiyim);
} else {
  initGiyim();
}

window.initGiyimModule = initGiyim;

})();
