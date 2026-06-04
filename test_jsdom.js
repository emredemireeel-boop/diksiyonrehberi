const { JSDOM } = require('jsdom');
const dom = new JSDOM(\
<div id="rCorrect">0</div>
<div id="rWrong">0</div>
<div id="rStreak">0</div>
<div id="reflexStartBtn"></div>
<div id="reflexBtns"></div>
<div id="reflexWord"></div>
<div id="reflexProgress"></div>
<div id="reflexFeedback"></div>
\);
global.document = dom.window.document;
const reflexWords = [ { word: 'Saat', answer: 'S' } ];
let rIdx = 0, rCorrect = 0, rWrong = 0, rStreak = 0, rMaxStreak = 0, shuffled = [];

function updateReflexUI() {
  document.getElementById('rCorrect').textContent = rCorrect;
  document.getElementById('rWrong').textContent = rWrong;
  document.getElementById('rStreak').textContent = rStreak;
}

function showReflexWord() {
  if (rIdx >= shuffled.length) { return; }
  const w = shuffled[rIdx];
  const first = w.word[0];
  const rest = w.word.slice(1);
  const color = w.answer === 'S' ? '#06b6d4' : '#a855f7';
  document.getElementById('reflexWord').innerHTML = '<span style=\"color:' + color + ';font-size:4rem;\">' + first + '</span>' + rest;
  document.getElementById('reflexProgress').textContent = (rIdx + 1) + ' / ' + shuffled.length;
  document.getElementById('reflexFeedback').textContent = '';
}

function reflexStart() {
  shuffled = [...reflexWords].sort(() => Math.random() - 0.5);
  rIdx = 0; rCorrect = 0; rWrong = 0; rStreak = 0;
  updateReflexUI();
  document.getElementById('reflexStartBtn').style.display = 'none';
  document.getElementById('reflexBtns').style.display = 'flex';
  showReflexWord();
}

try {
  reflexStart();
  console.log("Success");
} catch(e) {
  console.error("Error:", e);
}
