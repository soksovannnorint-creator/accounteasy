// AccountEasy app logic (vanilla JS). Progress is saved in localStorage.
(function () {
'use strict';

// ---------- State & storage ----------
const KEY = 'accounteasy_v1';
const DEF = { lang: 'en', theme: (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) ? 'dark' : 'light', goal: 20, completed: {}, started: {}, bookmarks: {}, notes: {},
  quizHistory: [], topicStats: {}, practice: { right: 0, total: 0 }, practiceDone: {}, days: {}, recent: [],
  cards: {}, flashReviews: 0, sim: null, bestQuiz: 0, savedQuiz: null, cardSession: null, lastCardSession: null };
let S = load();
function load() {
  const base = JSON.parse(JSON.stringify(DEF));
  try { return Object.assign(base, JSON.parse(localStorage.getItem(KEY)) || {}); } catch (e) { return base; }
}
function save() { try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) { /* storage blocked */ } }

// ---------- Helpers ----------
const $ = s => document.querySelector(s);
const t = k => (DATA.ui[S.lang][k] !== undefined ? DATA.ui[S.lang][k] : k);
const tr = o => (o ? o[S.lang] : '');
const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const fmt = s => Math.floor(s / 60) + ':' + String(s % 60).padStart(2, '0');
const money = n => (n < 0 ? '-$' : '$') + Math.abs(n).toLocaleString('en-US');
function dkey(d) { const x = d || new Date(); return x.getFullYear() + '-' + String(x.getMonth() + 1).padStart(2, '0') + '-' + String(x.getDate()).padStart(2, '0'); }
function shuffle(a) { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; }
function toast(m) { const d = document.createElement('div'); d.className = 'toast'; d.textContent = m; document.body.appendChild(d); setTimeout(() => d.remove(), 2200); }
const lessonById = id => DATA.lessons.find(l => l.id === id);
const SEQ = () => DATA.paths.flatMap(p => p.lessons);
const lessonForTopic = tp => DATA.lessons.find(l => l.topic === tp);

function addMinutes(m) { const k = dkey(); S.days[k] = (S.days[k] || 0) + m; }
function markActive() { const k = dkey(); if (!S.days[k]) S.days[k] = 1; }
function streak() {
  let n = 0; const d = new Date();
  if (!S.days[dkey(d)]) d.setDate(d.getDate() - 1);
  while (S.days[dkey(d)]) { n++; d.setDate(d.getDate() - 1); }
  return n;
}
function totalMinutes() { return Object.values(S.days).reduce((a, b) => a + b, 0); }
function addRecent(text) { S.recent.unshift({ text, at: Date.now() }); S.recent = S.recent.slice(0, 8); }
function recordTopic(topic, ok) {
  const s = S.topicStats[topic] || { right: 0, total: 0 };
  s.total++; if (ok) s.right++; S.topicStats[topic] = s;
}
const pct = s => (s && s.total ? Math.round(100 * s.right / s.total) : 0);
function weakTopics() { return Object.keys(S.topicStats).filter(k => S.topicStats[k].total >= 3 && pct(S.topicStats[k]) < 60); }
function quizAvg() { const h = S.quizHistory; return h.length ? Math.round(h.reduce((a, b) => a + b.pct, 0) / h.length) : 0; }
function completedCount() { return SEQ().filter(id => S.completed[id]).length; }
function pathDone(p) { return p.lessons.every(id => S.completed[id]); }

// ---------- Achievements (computed from real activity) ----------
const BADGES = [
  { id: 'first', ic: '🎓', n: ['First Lesson Completed', 'បានបញ្ចប់មេរៀនដំបូង'], ok: () => completedCount() >= 1 },
  { id: 'dc', ic: '⚖️', n: ['Debit and Credit Beginner', 'អ្នកចាប់ផ្តើម Debit/Credit'], ok: () => S.practice.right >= 5 },
  { id: 'jm', ic: '📒', n: ['Journal Entry Master', 'អ្នកជំនាញកំណត់ហេតុ'], ok: () => DATA.exercises.every(e => S.practiceDone[e.id]) },
  { id: 'st7', ic: '🔥', n: ['Seven-Day Streak', 'រៀនជាប់ៗ ៧ ថ្ងៃ'], ok: () => streak() >= 7 },
  { id: 'fund', ic: '🏅', n: ['Fundamentals Completed', 'បានបញ្ចប់មូលដ្ឋានគ្រឹះ'], ok: () => pathDone(DATA.paths[0]) },
  { id: 'ace', ic: '🌟', n: ['Quiz Ace (80%+)', 'ពូកែសំណួរ (80%+)'], ok: () => S.quizHistory.some(h => h.pct >= 80) }
];

// ---------- Navigation ----------
const NAV = [['dashboard', '📊'], ['paths', '🧭'], ['lessons', '📚'], ['practice', '✏️'], ['quiz', '📝'], ['sim', '🧮'], ['cards', '🗂️'], ['progress', '📈'], ['bookmarks', '🔖'], ['settings', '⚙️']];
let cur = { view: 'dashboard', arg: null };
let clearArmed = false, exportText = '', timer = null, QZ = null, simMsg = '', exI = 0, exRows = null, exMsg = '', cardTab = 'review', cardShown = false, cardRun = false, cardSummary = null, cardCat = 'all', cardSize = 15, cardAll = false, glossQ = '', glossCat = 'all', discardArmed = false;
const A = {}; window.A = A;

A.go = function (v, a) {
  clearArmed = false; discardArmed = false;
  if (QZ && !QZ.done && cur.view === 'quiz' && cur.arg === 'run' && !(v === 'quiz' && a === 'run')) { leaveQuiz(); }
  else if (v !== 'quiz' && timer) { clearInterval(timer); timer = null; }
  cur = { view: v, arg: a === undefined ? null : a };
  $('#sidebar').classList.remove('open');
  render(); window.scrollTo(0, 0);
};
function navActive(k) { return cur.view === k || (k === 'lessons' && cur.view === 'lesson'); }

function render() {
  document.documentElement.dataset.theme = S.theme;
  document.documentElement.lang = S.lang === 'km' ? 'km' : 'en';
  $('#nav').innerHTML = NAV.map(([k, ic]) => `<button class="${navActive(k) ? 'active' : ''}" onclick="A.go('${k}')">${ic} ${t(k)}</button>`).join('');
  $('#searchBox').placeholder = t('search');
  $('#view').innerHTML = VIEWS[cur.view](cur.arg);
  if (cur.view === 'practice') exInit();
}

// ---------- Dashboard ----------
function recommended() {
  const weak = weakTopics();
  if (weak.length) { const l = lessonForTopic(weak[0]); return { id: l.id, note: t('weakRec') }; }
  const next = SEQ().find(id => !S.completed[id]);
  if (next) return { id: next, note: completedCount() === 0 ? t('startFirst') : '' };
  return { id: null, note: t('allDone') };
}
function weekData() {
  const out = [];
  for (let i = 6; i >= 0; i--) { const d = new Date(); d.setDate(d.getDate() - i); out.push({ l: d.toLocaleDateString(S.lang === 'km' ? 'km-KH' : 'en-US', { weekday: 'short' }), v: S.days[dkey(d)] || 0 }); }
  return out;
}
function dashboard() {
  const total = SEQ().length, done = completedCount(), pc = Math.round(100 * done / total);
  const rec = recommended(), recL = rec.id && lessonById(rec.id);
  const startedNotDone = SEQ().find(id => S.started[id] && !S.completed[id]);
  const contId = startedNotDone || rec.id;
  let wk = weekData(), sample = wk.every(x => x.v === 0);
  if (sample) wk = wk.map((x, i) => ({ l: x.l, v: [20, 35, 0, 45, 30, 15, 40][i] }));
  const max = Math.max(1, ...wk.map(x => x.v));
  const levelIdx = DATA.paths.filter(pathDone).length; const lv = DATA.paths[Math.min(levelIdx, DATA.paths.length - 1)];
  const todayMin = S.days[dkey()] || 0;
  const stats = Object.keys(S.topicStats);
  return `<h2>${t('welcome')}</h2>
  <div class="grid">
    <div class="card stat"><b>${done}/${total}</b>${t('done')}</div>
    <div class="card stat"><b>${pc}%</b>${t('completion')}<div class="bar"><i style="width:${pc}%"></i></div></div>
    <div class="card stat"><b>${streak()} 🔥</b>${t('streak')}</div>
    <div class="card stat"><b>${totalMinutes()}</b>${t('studyTime')}</div>
    <div class="card stat"><b>${S.quizHistory.length ? quizAvg() + '%' : '—'}</b>${t('quizAvg')}</div>
    <div class="card stat"><b>${todayMin}/${S.goal}</b>${t('dailyGoal')}<div class="bar"><i style="width:${Math.min(100, 100 * todayMin / S.goal)}%"></i></div></div>
  </div>
  <div class="grid2">
    <div class="card"><h3>${t('level')}: ${esc(tr(lv.name))}</h3>
      ${contId ? `<button class="btn green" onclick="A.go('lesson','${contId}')">▶ ${t('continue')}</button>` : ''}
      <h3>${t('recommended')}</h3>
      ${recL ? `<p><b>${esc(tr(recL.title))}</b><br><span class="muted">${rec.note}</span></p><button class="btn" onclick="A.go('lesson','${recL.id}')">${t('open')}</button>` : `<p>${rec.note}</p><button class="btn" onclick="A.go('quiz')">${t('quiz')}</button>`}
      ${stats.length && stats.every(k => S.topicStats[k].total >= 3 && pct(S.topicStats[k]) >= 80) ? `<p class="tag">${t('tryHarder')}</p>` : ''}
    </div>
    <div class="card"><h3>${t('recent')}</h3>${S.recent.length ? '<ul class="clean">' + S.recent.slice(0, 5).map(r => `<li>${esc(r.text)} <span class="muted">${new Date(r.at).toLocaleDateString()}</span></li>`).join('') + '</ul>' : `<p class="muted">${t('noActivity')}</p>`}</div>
  </div>
  <div class="grid2">
    <div class="card"><h3>${t('weekly')} <span class="tag ${sample ? 'sample' : ''}">${sample ? t('sample') : t('real')}</span></h3>
      <div class="chart ${sample ? 'sampleChart' : ''}">${wk.map(x => `<div class="col"><i style="height:${Math.round(100 * x.v / max)}%"></i>${x.v}<br>${x.l}</div>`).join('')}</div>
      ${sample ? `<p class="muted">${t('sampleNote')}</p>` : ''}</div>
    <div class="card"><h3>${t('mastery')} <span class="tag">${t('real')}</span></h3>${masteryBars()}</div>
  </div>
  <div class="card"><h3>${t('badges')}</h3>${badgesHtml()}</div>`;
}
function masteryBars() {
  const ks = Object.keys(S.topicStats);
  if (!ks.length) return `<p class="muted">${t('noWeak')}</p>`;
  return ks.map(k => `<div class="hbar"><span>${esc(tr(DATA.topics[k]))}</span><div class="bar"><i style="width:${pct(S.topicStats[k])}%"></i></div><span>${pct(S.topicStats[k])}%</span></div>`).join('');
}
function badgesHtml() { return BADGES.map(b => `<div class="badge ${b.ok() ? '' : 'off'}"><span class="ic">${b.ic}</span>${esc(tr({ en: b.n[0], km: b.n[1] }))}</div>`).join(''); }

// ---------- Paths & lessons list ----------
function lessonRow(id) {
  const l = lessonById(id);
  return `<tr><td>${S.completed[id] ? '✅' : (S.started[id] ? '🔸' : '⚪')} ${esc(tr(l.title))}</td><td><button class="btn ghost" onclick="A.go('lesson','${id}')">${S.completed[id] ? t('review') : t('start')}</button></td></tr>`;
}
function paths() {
  return `<h2>${t('paths')}</h2>` + DATA.paths.map(p => {
    const d = p.lessons.filter(id => S.completed[id]).length, pc = Math.round(100 * d / p.lessons.length);
    return `<div class="card"><h3>${esc(tr(p.name))}</h3><div class="muted">${d}/${p.lessons.length} ${t('lessonsCount')}</div><div class="bar"><i style="width:${pc}%"></i></div><table>${p.lessons.map(lessonRow).join('')}</table></div>`;
  }).join('') + `<div class="card"><h3>🚧 ${t('comingSoon')}</h3><ul class="clean">${DATA.planned.map(x => `<li>${esc(tr(x))}</li>`).join('')}</ul><p class="muted">${t('planned')}</p></div>`;
}
function lessons() { return `<h2>${t('lessons')}</h2><div class="card"><table>${SEQ().map(lessonRow).join('')}</table></div>`; }

// ---------- Lesson detail ----------
function visual(v) {
  if (!v) return '';
  if (v.type === 'eq') return `<h3>${t('visual')}</h3><div class="eq"><div>${t('assets')}<b>${money(v.a)}</b></div><span>=</span><div>${t('liabilities')}<b>${money(v.l)}</b></div><span>+</span><div>${t('equity')}<b>${money(v.e)}</b></div></div>`;
  if (v.type === 'taccount') {
    const ta = (name, l, r) => `<div class="tacc"><b>${name}</b><div class="cols"><div>${l}</div><div>${r}</div></div></div>`;
    return `<h3>${t('visual')}</h3>${ta(tr(DATA.accounts.cash.name) + ' (' + tr(DATA.typeName.asset) + ')', 'Dr 3,000', '')}${ta(tr(DATA.accounts.cap.name) + ' (' + tr(DATA.typeName.equity) + ')', '', 'Cr 3,000')}`;
  }
  return '';
}
function lesson(id) {
  const l = lessonById(id); if (!l) return lessons();
  if (!S.started[id]) { S.started[id] = true; addRecent(tr(l.title)); markActive(); save(); }
  const seq = SEQ(), i = seq.indexOf(id), bm = S.bookmarks[id];
  const ul = a => '<ul class="clean">' + a.map(x => `<li>${esc(tr(x))}</li>`).join('') + '</ul>';
  const X = l.extra, cell = c => (typeof c === 'string' ? esc(c) : esc(tr(c)));
  const deepHtml = X ? X.deep.map(s => `<div class="card"><h3>🔎 ${esc(tr(s.h))}</h3><p>${esc(tr(s.p))}</p>${s.list ? ul(s.list) : ''}</div>`).join('') : '';
  const cmpHtml = X && X.compare ? X.compare.map(c => `<div class="card"><h3>⚖️ ${esc(tr(c.t))}</h3><div class="tablewrap"><table class="cmp"><tr>${c.head.map(h => `<th>${cell(h)}</th>`).join('')}</tr>${c.rows.map(r => `<tr>${r.map((x, i) => `<td>${i === 0 ? '<b>' + cell(x) + '</b>' : cell(x)}</td>`).join('')}</tr>`).join('')}</table></div>${c.note ? `<p class="muted">${esc(tr(c.note))}</p>` : ''}</div>`).join('') : '';
  const khHtml = X && X.kh ? `<div class="card"><h3>🇰🇭 ${t('khEx')}</h3><p>${esc(tr(X.kh))}</p></div>` : '';
  const termsHtml = X && X.terms ? `<div class="card"><h3>📘 ${t('keyTerms')}</h3><table class="cmp">${X.terms.map(r => `<tr><td><b>${esc(tr(r[0]))}</b></td><td>${esc(tr(r[1]))}</td></tr>`).join('')}</table></div>` : '';
  return `<div class="row no-print"><button class="btn ghost" onclick="A.go('${bm ? 'bookmarks' : 'lessons'}')">←</button>
    <button class="btn ghost" onclick="A.bm('${id}')">${bm ? '🔖 ' + t('bookmarked') : '🔖 ' + t('bookmark')}</button></div>
  <h2>${esc(tr(l.title))} <span class="tag">${t('level')} ${l.level}</span></h2>
  <div class="card"><h3>🎯 ${t('objectives')}</h3>${ul(l.objectives)}</div>
  <div class="card"><h3>💡 ${t('simple')}</h3><p>${esc(tr(l.simple))}</p><h3>📖 ${t('detailed')}</h3><p>${esc(tr(l.detailed))}</p></div>
  ${deepHtml}${cmpHtml}
  <div class="card"><h3>🏪 ${t('example')}</h3><p>${esc(tr(l.example))}</p><h3>🧮 ${t('worked')}</h3>${ul(l.worked)}${visual(l.visual)}</div>
  ${khHtml}${termsHtml}
  <div class="card"><h3>⚠️ ${t('mistakes')}</h3>${ul(l.mistakes)}</div>
  <div class="card"><h3>📌 ${t('summaryT')}</h3>${ul(l.summary)}</div>
  <div class="card no-print"><h3>📝 ${t('notes')}</h3><textarea id="noteBox">${esc(S.notes[id] || '')}</textarea><br><button class="btn" onclick="A.saveNote('${id}')">${t('saveNote')}</button></div>
  <div class="row no-print"><button class="btn green" onclick="A.lessonQuiz('${id}')">📝 ${t('masteryCheck')}</button>
    <button class="btn ${S.completed[id] ? 'ghost' : ''}" onclick="A.complete('${id}')">${S.completed[id] ? '✅ ' + t('completed') : '☑ ' + t('markDone')}</button></div>
  <div class="row no-print" style="margin-top:12px;justify-content:space-between">
    ${i > 0 ? `<button class="btn ghost" onclick="A.go('lesson','${seq[i - 1]}')">← ${t('prev')}</button>` : '<span></span>'}
    ${i < seq.length - 1 ? `<button class="btn ghost" onclick="A.go('lesson','${seq[i + 1]}')">${t('next')} →</button>` : '<span></span>'}</div>`;
}
A.bm = id => { if (S.bookmarks[id]) delete S.bookmarks[id]; else S.bookmarks[id] = true; save(); render(); };
A.saveNote = id => { S.notes[id] = $('#noteBox').value; if (!S.notes[id]) delete S.notes[id]; save(); toast(t('saved')); };
A.complete = id => {
  if (S.completed[id]) delete S.completed[id]; else { S.completed[id] = true; addRecent('✅ ' + tr(lessonById(id).title)); markActive(); toast(t('completed')); }
  save(); render();
};
A.lessonQuiz = id => startQuiz({ topic: lessonById(id).topic, diff: 'any', count: 10, mode: 'practice', time: 0, fromLesson: id });

// ---------- Quiz ----------
function startQuiz(o) {
  let pool = DATA.questions.filter(q => (o.topic === 'all' || q.topic === o.topic) && (o.diff === 'any' || q.level === +o.diff));
  if (!pool.length) { toast(t('none')); return; }
  pool = shuffle(pool).slice(0, o.count);
  QZ = { o, items: pool.map(q => ({ q, order: q.tf ? [0, 1] : shuffle(q.opts.map((_, i) => i)), ans: null, locked: false })), i: 0, limit: (o.time || 0) * 60, left: (o.time || 0) * 60, elapsed: 0, timedOut: false, done: false };
  QZ.paused = false; runTimer();
  A.go('quiz', 'run');
}
// The clock runs in both modes: counts down when a limit is set, otherwise counts up
function runTimer() {
  if (timer) clearInterval(timer);
  timer = setInterval(() => {
    if (!QZ || QZ.done || QZ.paused) return;
    QZ.elapsed++; if (QZ.limit) QZ.left--;
    const el = $('#timeLeft');
    if (el) { el.textContent = fmt(QZ.limit ? Math.max(0, QZ.left) : QZ.elapsed); el.parentNode.style.color = QZ.limit && QZ.left <= 60 ? 'var(--danger)' : ''; }
    if (QZ.limit && QZ.left <= 0) { QZ.timedOut = true; A.finishQuiz(); }
    else if (QZ.elapsed % 10 === 0) saveQuiz();
  }, 1000);
}
// Save an unfinished quiz (question ids, shuffled option order, answers, position, clock)
function saveQuiz() {
  if (!QZ || QZ.done) return;
  S.savedQuiz = { o: QZ.o, i: QZ.i, limit: QZ.limit, left: QZ.left, elapsed: QZ.elapsed, at: Date.now(),
    items: QZ.items.map(it => ({ id: it.q.id, order: it.order, ans: it.ans, locked: it.locked })) };
  save();
}
function leaveQuiz() {
  QZ.paused = true; saveQuiz();
  if (timer) { clearInterval(timer); timer = null; }
  QZ = null; toast(t('autoSaved'));
}
A.pause = () => { QZ.paused = true; saveQuiz(); render(); };
A.unpause = () => { QZ.paused = false; runTimer(); render(); };
A.saveExit = () => {
  saveQuiz();
  if (timer) { clearInterval(timer); timer = null; }
  QZ = null; toast(t('quizSaved')); A.go('quiz');
};
A.resumeSaved = () => {
  const sv = S.savedQuiz; if (!sv) return;
  const items = sv.items.map(x => { const q = DATA.questions.find(z => z.id === x.id); return q ? { q, order: x.order, ans: x.ans, locked: x.locked } : null; }).filter(Boolean);
  if (!items.length) { S.savedQuiz = null; save(); render(); return; }
  QZ = { o: sv.o, items, i: Math.min(sv.i, items.length - 1), limit: sv.limit, left: sv.left, elapsed: sv.elapsed, timedOut: false, done: false, paused: false };
  runTimer(); A.go('quiz', 'run');
};
A.discardSaved = () => {
  if (!discardArmed) { discardArmed = true; render(); return; }
  discardArmed = false; S.savedQuiz = null; save(); render();
};
function savedQuizCard() {
  const sv = S.savedQuiz; if (!sv) return '';
  const ans = sv.items.filter(x => x.ans !== null).length;
  const tp = sv.o.topic === 'all' ? t('all') : tr(DATA.topics[sv.o.topic]);
  return `<div class="card" style="border-color:var(--green)"><h3>⏸ ${t('savedQuiz')}</h3>
    <p>${esc(tp)} · ${sv.o.mode === 'exam' ? t('modeExam') : t('modePractice')} · ${ans}/${sv.items.length} ${t('answeredN')} · ⏱ ${fmt(sv.elapsed)}${sv.limit ? ' / ' + fmt(sv.limit) : ''}<br><span class="muted">${t('savedAt')}: ${esc(new Date(sv.at).toLocaleString())}</span></p>
    <div class="row"><button class="btn green" onclick="A.resumeSaved()">▶ ${t('resumeQuiz')}</button><button class="btn ghost" onclick="A.discardSaved()">${discardArmed ? t('discardSure') : t('discard')}</button></div>
    <p class="muted">${t('replaceNote')}</p></div>`;
}
function quizSetup() {
  const wk = weakTopics();
  return `<h2>${t('quiz')}</h2>${savedQuizCard()}<div class="card"><div class="row">
    <label>${t('topic')} <select id="qTopic"><option value="all">${t('all')}</option>${Object.keys(DATA.topics).map(k => `<option value="${k}">${esc(tr(DATA.topics[k]))}</option>`).join('')}</select></label>
    <label>${t('difficulty')} <select id="qDiff"><option value="any">${t('any')}</option><option value="1">${t('beginner')}</option><option value="2">${t('intermediate')}</option><option value="3">${t('advanced')}</option></select></label>
    <label>${t('questions')} <input id="qCount" type="number" min="1" max="100" value="10" style="width:70px"></label>
    <label>${t('mode')} <select id="qMode"><option value="practice">${t('modePractice')}</option><option value="exam">${t('modeExam')}</option></select></label>
    <label>${t('timeLimit')} <input id="qTime" type="number" min="0" max="120" value="10" style="width:70px"></label></div>
    <p><button class="btn green" onclick="A.startQuizForm()">${t('startQuiz')}</button>
    ${wk.length ? `<button class="btn ghost" onclick="A.weakQuiz()">🎯 ${t('weak')}</button>` : ''}</p></div>
    <div class="card"><h3>${t('history')}</h3>${S.quizHistory.length ? `<table>${S.quizHistory.slice().reverse().slice(0, 10).map(h => `<tr><td>${esc(h.date)}</td><td>${esc(h.topic === 'all' ? t('all') : tr(DATA.topics[h.topic]))}</td><td>${h.mode}</td><td class="num">${h.score}/${h.total} (${h.pct}%)</td><td class="num">${h.secs != null ? '⏱ ' + fmt(h.secs) : ''}</td></tr>`).join('')}</table>` : `<p class="muted">${t('noHistory')}</p>`}</div>`;
}
A.startQuizForm = () => startQuiz({ topic: $('#qTopic').value, diff: $('#qDiff').value, count: Math.max(1, +$('#qCount').value || 5), mode: $('#qMode').value, time: Math.max(0, Math.min(120, +$('#qTime').value || 0)) });
A.weakQuiz = () => startQuiz({ topic: weakTopics()[0], diff: 'any', count: 6, mode: 'practice', time: 0 });
function isRight(it) { return it.ans !== null && it.ans === it.q.ans; }
function optText(it, oi) { return it.q.tf ? (oi === 0 ? t('true') : t('false')) : tr(it.q.opts[oi]); }
function quizRun() {
  if (QZ.paused) return `<h2>${t('quiz')}</h2><div class="card" style="text-align:center"><h3>⏸ ${t('paused')}</h3><p class="muted">${t('pausedMsg')}</p>
    <p>${t('question')} ${QZ.i + 1} ${t('of')} ${QZ.items.length} · ⏱ ${fmt(QZ.elapsed)}${QZ.limit ? ' / ' + fmt(QZ.limit) : ''}</p>
    <div class="row" style="justify-content:center"><button class="btn green" onclick="A.unpause()">▶ ${t('resumeQuiz')}</button><button class="btn" onclick="A.saveExit()">💾 ${t('saveExit')}</button><button class="btn ghost" onclick="A.finishQuiz()">${t('finishNow')}</button></div></div>`;
  const it = QZ.items[QZ.i], exam = QZ.o.mode === 'exam', last = QZ.i === QZ.items.length - 1;
  const opts = it.order.map(oi => {
    let cls = 'opt';
    if (it.locked) cls += oi === it.q.ans ? ' right' : (oi === it.ans ? ' wrong' : '');
    else if (it.ans === oi) cls += ' sel';
    return `<button class="${cls}" ${it.locked ? 'disabled' : ''} onclick="A.pick(${oi})">${esc(optText(it, oi))}</button>`;
  }).join('');
  const fb = it.locked ? `<div class="fb ${isRight(it) ? 'ok' : 'bad'}"><b>${isRight(it) ? t('correct') : t('incorrect')}</b> ${esc(tr(it.q.exp))}</div>` : '';
  return `<h2>${t('quiz')}</h2><div class="card"><div class="row" style="justify-content:space-between"><span class="muted">${t('question')} ${QZ.i + 1} ${t('of')} ${QZ.items.length}</span>
    <b${QZ.limit && QZ.left <= 60 ? ' style="color:var(--danger)"' : ''}>⏱ ${QZ.limit ? t('timeLeft') : t('timeUsed')}: <span id="timeLeft">${fmt(QZ.limit ? Math.max(0, QZ.left) : QZ.elapsed)}</span></b></div>
    <h3>${esc(tr(it.q.q))}</h3>${opts}${fb}
    <div class="row" style="margin-top:12px">
      ${exam && QZ.i > 0 ? `<button class="btn ghost" onclick="A.qNav(-1)">← ${t('prev')}</button>` : ''}
      ${!last && (exam || it.locked) ? `<button class="btn" onclick="A.qNav(1)">${t('next')} →</button>` : ''}
      ${last && (exam || it.locked) ? `<button class="btn green" onclick="A.finishQuiz()">${t('finish')}</button>` : ''}
      ${exam && !last ? `<button class="btn ghost" onclick="A.finishQuiz()">${t('finish')}</button>` : ''}</div>
    <div class="row" style="margin-top:10px;border-top:1px solid var(--border);padding-top:10px"><button class="btn ghost" onclick="A.pause()">⏸ ${t('pause')}</button><button class="btn ghost" onclick="A.saveExit()">💾 ${t('saveExit')}</button>${!exam && !last ? `<button class="btn ghost" onclick="A.finishQuiz()">${t('finishNow')}</button>` : ''}</div></div>`;
}
A.pick = oi => { const it = QZ.items[QZ.i]; if (it.locked) return; it.ans = oi; if (QZ.o.mode === 'practice') it.locked = true; saveQuiz(); render(); };
A.qNav = d => { QZ.i = Math.max(0, Math.min(QZ.items.length - 1, QZ.i + d)); saveQuiz(); render(); };
A.finishQuiz = () => {
  if (!QZ || QZ.done) return;
  if (timer) { clearInterval(timer); timer = null; }
  QZ.done = true; QZ.paused = false; S.savedQuiz = null;
  const score = QZ.items.filter(isRight).length, total = QZ.items.length;
  QZ.items.forEach(it => recordTopic(it.q.topic, isRight(it)));
  QZ.result = { score, total, pct: Math.round(100 * score / total), secs: QZ.elapsed };
  S.quizHistory.push({ date: new Date().toLocaleString(), topic: QZ.o.topic, diff: QZ.o.diff, mode: QZ.o.mode, score, total, pct: QZ.result.pct, secs: QZ.elapsed });
  addRecent('📝 ' + score + '/' + total); markActive(); save();
  cur = { view: 'quiz', arg: 'result' }; render(); window.scrollTo(0, 0);
};
function quizResult() {
  const r = QZ.result;
  const rows = QZ.items.map((it, n) => {
    const ok = isRight(it), l = lessonForTopic(it.q.topic);
    return `<div class="card"><b>${n + 1}. ${esc(tr(it.q.q))}</b> ${ok ? '✅' : '❌'}
      <div>${t('yourAnswer')}: ${it.ans === null ? '—' : esc(optText(it, it.ans))}</div>
      ${ok ? '' : `<div>${t('rightAnswer')}: <b>${esc(optText(it, it.q.ans))}</b></div>`}
      <div class="muted">${esc(tr(it.q.exp))}</div>
      ${ok ? '' : `<button class="btn ghost" onclick="A.go('lesson','${l.id}')">📖 ${t('reviewWrong')}</button>`}</div>`;
  }).join('');
  return `<h2>${t('score')}: ${r.score}/${r.total} (${r.pct}%)</h2><div class="card"><div class="bar"><i style="width:${r.pct}%"></i></div>
    <p>⏱ ${t('timeTaken')}: <b>${fmt(r.secs)}</b>${QZ.limit ? ' / ' + fmt(QZ.limit) : ''}${QZ.timedOut ? ' — ' + t('timedOut') : ''}</p>
    <div class="row" style="margin-top:10px"><button class="btn green" onclick="A.retry()">🔁 ${t('retry')}</button>
    ${QZ.o.fromLesson ? `<button class="btn ghost" onclick="A.go('lesson','${QZ.o.fromLesson}')">${t('backLesson')}</button>` : ''}
    <button class="btn ghost" onclick="A.go('quiz')">${t('quiz')}</button></div></div><h3>${t('reviewAnswers')}</h3>${rows}`;
}
A.retry = () => startQuiz(QZ.o);
function quiz(arg) {
  if (arg === 'result' && QZ && QZ.done) return quizResult();
  if (arg === 'run' && QZ && !QZ.done) return quizRun();
  return quizSetup();
}

// ---------- Journal practice ----------
function acctOpts(sel) { return `<option value="">${t('choose')}</option>` + Object.keys(DATA.accounts).map(k => `<option value="${k}" ${sel === k ? 'selected' : ''}>${esc(tr(DATA.accounts[k].name))} (${esc(tr(DATA.typeName[DATA.accounts[k].type]))})</option>`).join(''); }
function exInit() { if (!exRows) exRows = [{ a: '', s: 'dr', m: '' }, { a: '', s: 'cr', m: '' }]; drawRows(); }
function drawRows() {
  const el = $('#exRows'); if (!el) return;
  el.innerHTML = exRows.map((r, i) => `<div class="row" style="margin:6px 0"><select onchange="A.rowSet(${i},'a',this.value)">${acctOpts(r.a)}</select>
    <select onchange="A.rowSet(${i},'s',this.value)"><option value="dr" ${r.s === 'dr' ? 'selected' : ''}>${t('debit')}</option><option value="cr" ${r.s === 'cr' ? 'selected' : ''}>${t('credit')}</option></select>
    <input type="number" min="0" value="${r.m}" placeholder="${t('amount')}" style="width:110px" oninput="A.rowSet(${i},'m',this.value)">
    ${exRows.length > 2 ? `<button class="btn ghost" onclick="A.rowDel(${i})">✕</button>` : ''}</div>`).join('');
}
A.rowSet = (i, k, v) => { exRows[i][k] = v; };
A.rowDel = i => { exRows.splice(i, 1); drawRows(); };
A.rowAdd = () => { exRows.push({ a: '', s: 'dr', m: '' }); drawRows(); };
function practice() {
  const e = DATA.exercises[exI];
  return `<h2>${t('practice')}</h2><div class="card"><span class="muted">${t('ex')} ${exI + 1}/${DATA.exercises.length}</span>
    <h3>${esc(tr(e.text))}</h3><div id="exRows"></div>
    <div class="row"><button class="btn ghost" onclick="A.rowAdd()">+ ${t('addLine')}</button><button class="btn green" onclick="A.exCheck()">${t('checkEntry')}</button>
    ${exI < DATA.exercises.length - 1 ? `<button class="btn" onclick="A.exNext()">${t('nextEx')} →</button>` : ''}</div>
    <div id="exFb">${exMsg}</div></div>
    <p class="muted">${t('practiceAcc')}: ${S.practice.total ? Math.round(100 * S.practice.right / S.practice.total) + '% (' + S.practice.right + '/' + S.practice.total + ')' : '—'}</p>`;
}
function sumMap(lines) { const m = {}; lines.forEach(([a, s, v]) => { const k = a + '|' + s; m[k] = (m[k] || 0) + v; }); return m; }
A.exCheck = () => {
  const e = DATA.exercises[exI];
  const lines = exRows.filter(r => r.a && +r.m > 0).map(r => [r.a, r.s, +r.m]);
  const dr = lines.filter(l => l[1] === 'dr').reduce((a, l) => a + l[2], 0), cr = lines.filter(l => l[1] === 'cr').reduce((a, l) => a + l[2], 0);
  // Not enough input, or unbalanced: warn but do not count as an attempt
  if (!lines.length) { exMsg = `<div class="fb bad">${t('choose')} + ${t('amount')}</div>`; render(); return; }
  if (dr !== cr) { exMsg = `<div class="fb bad"><b>${t('notBalanced')}</b> (${t('debit')} ${money(dr)} ≠ ${t('credit')} ${money(cr)})</div>`; render(); return; }
  // Balanced: now verify the accounts, sides and amounts match the expected entry
  const a = sumMap(lines), b = sumMap(e.lines);
  const ok = Object.keys(b).length === Object.keys(a).length && Object.keys(b).every(k => a[k] === b[k]);
  S.practice.total++; recordTopic('debitcredit', ok);
  if (ok) { S.practice.right++; S.practiceDone[e.id] = true; }
  markActive(); save();
  const ans = '<table>' + e.lines.map(l => `<tr><td>${esc(tr(DATA.accounts[l[0]].name))}</td><td class="num">${l[1] === 'dr' ? money(l[2]) : ''}</td><td class="num">${l[1] === 'cr' ? money(l[2]) : ''}</td></tr>`).join('') + '</table>';
  exMsg = ok ? `<div class="fb ok"><b>${t('correct')}</b> ✔ ${t('balanced')}. ${esc(tr(e.why))}</div>`
    : `<div class="fb bad"><b>${t('incorrect')}</b> ${t('balanced')}, ${S.lang === 'km' ? 'ប៉ុន្តែគណនី ជ្រើសខាង ឬចំនួនមិនត្រឹមត្រូវ។' : 'but the accounts, sides or amounts are wrong.'}<br><b>${t('rightAnswer')}:</b>${ans}${esc(tr(e.why))}</div>`;
  render();
};
A.exNext = () => { exI = Math.min(DATA.exercises.length - 1, exI + 1); exRows = null; exMsg = ''; render(); };

// ---------- Simulator ----------
function simState() { if (!S.sim) S.sim = { biz: 'coffee', idx: 0, entries: [], tries: 0 }; return S.sim; }
function simBal() {
  const b = {}; Object.keys(DATA.accounts).forEach(k => b[k] = { dr: 0, cr: 0 });
  simState().entries.forEach(e => { b[e.dr].dr += e.amt; b[e.cr].cr += e.amt; });
  return b;
}
function normBal(k, b) { const n = b[k].dr - b[k].cr; return DATA.debitNormal[DATA.accounts[k].type] ? n : -n; }
function sim() {
  const s = simState(), b = simBal(), done = s.idx >= DATA.simTx.length, tx = DATA.simTx[s.idx];
  const types = Object.keys(DATA.typeName);
  const typeSel = side => `<select id="s${side}T" onchange="A.simType('${side}')"><option value="">${t('choose')}</option>${types.map(x => `<option value="${x}">${esc(tr(DATA.typeName[x]))}</option>`).join('')}</select>`;
  const used = Object.keys(b).filter(k => b[k].dr || b[k].cr);
  const rev = normBal('rev', b), exp = ['rent', 'sal', 'util'].reduce((a, k) => a + normBal(k, b), 0), ni = rev - exp;
  const A_ = ['cash', 'ar', 'inv', 'equip'], L_ = ['ap', 'loan'];
  const ta = A_.reduce((a, k) => a + normBal(k, b), 0), tl = L_.reduce((a, k) => a + normBal(k, b), 0), te = normBal('cap', b) + ni;
  const drT = used.reduce((a, k) => a + Math.max(0, b[k].dr - b[k].cr), 0), crT = used.reduce((a, k) => a + Math.max(0, b[k].cr - b[k].dr), 0);
  return `<h2>${t('sim')}</h2><div class="card"><p>${t('simIntro')}</p><div class="row">
    <label>${t('chooseBiz')} <select onchange="A.simBiz(this.value)"><option value="coffee" ${s.biz === 'coffee' ? 'selected' : ''}>☕ ${t('coffee')}</option><option value="clothing" ${s.biz === 'clothing' ? 'selected' : ''}>👕 ${t('clothing')}</option></select></label>
    <button class="btn ghost" onclick="A.simReset()">↺ ${t('reset')}</button></div></div>
  <div id="simMsg">${simMsg}</div>
  ${done ? `<div class="card fb ok"><b>🎉 ${t('simDone')}</b></div>` : `<div class="card"><span class="muted">${t('transaction')} ${s.idx + 1}/${DATA.simTx.length}</span><h3>${esc(tr(tx.text))}</h3>
    <div class="grid2"><div><b>${t('debitAcct')}</b><br>${typeSel('Dr')}<br><select id="sDr" style="margin-top:6px" disabled><option value="">${t('choose')}</option></select></div>
    <div><b>${t('creditAcct')}</b><br>${typeSel('Cr')}<br><select id="sCr" style="margin-top:6px" disabled><option value="">${t('choose')}</option></select></div></div>
    <p><label>${t('amount')} $ <input id="sAmt" type="number" min="0" style="width:120px"></label> <button class="btn green" onclick="A.simSubmit()">${t('submit')}</button></p></div>`}
  <div class="grid2">
    <div class="card"><h3>${t('journal')}</h3>${s.entries.length ? '<table>' + s.entries.map((e, i) => `<tr><td>${i + 1}.</td><td>Dr ${esc(tr(DATA.accounts[e.dr].name))}<br>&nbsp;&nbsp;Cr ${esc(tr(DATA.accounts[e.cr].name))}</td><td class="num">${money(e.amt)}</td></tr>`).join('') + '</table>' : `<p class="muted">—</p>`}</div>
    <div class="card"><h3>${t('trial')}</h3>${used.length ? '<table><tr><th>' + t('account') + '</th><th class="num">' + t('debit').split(' ')[0] + '</th><th class="num">' + t('credit').split(' ')[0] + '</th></tr>' + used.map(k => { const n = b[k].dr - b[k].cr; return `<tr><td>${esc(tr(DATA.accounts[k].name))}</td><td class="num">${n > 0 ? money(n) : ''}</td><td class="num">${n < 0 ? money(-n) : ''}</td></tr>`; }).join('') + `<tr><th>${t('total')}</th><th class="num">${money(drT)}</th><th class="num">${money(crT)}</th></tr></table><p class="${drT === crT ? 'tag' : 'fb bad'}">${drT === crT ? '✔ ' + t('balanced') : t('notBalanced')}</p>` : `<p class="muted">—</p>`}</div></div>
  <div class="card"><h3>${t('ledger')}</h3>${used.length ? used.map(k => `<div class="tacc"><b>${esc(tr(DATA.accounts[k].name))}</b><div class="cols"><div>${s.entries.filter(e => e.dr === k).map(e => 'Dr ' + e.amt.toLocaleString()).join('<br>')}</div><div>${s.entries.filter(e => e.cr === k).map(e => 'Cr ' + e.amt.toLocaleString()).join('<br>')}</div></div><div class="muted">= ${money(normBal(k, b))}</div></div>`).join('') : `<p class="muted">—</p>`}</div>
  <div class="card"><h3>${t('statements')}</h3><div class="grid2">
    <div><b>${t('incomeStmt')}</b><table><tr><td>${t('revenue')}</td><td class="num">${money(rev)}</td></tr><tr><td>${t('expenses')}</td><td class="num">${money(exp)}</td></tr><tr><th>${t('netIncome')}</th><th class="num">${money(ni)}</th></tr></table></div>
    <div><b>${t('balanceSheet')}</b><table>${A_.concat(L_).concat(['cap']).map(k => `<tr><td>${esc(tr(DATA.accounts[k].name))}</td><td class="num">${money(normBal(k, b))}</td></tr>`).join('')}
      <tr><td>${t('netIncome')}</td><td class="num">${money(ni)}</td></tr>
      <tr><th>${t('assets')}</th><th class="num">${money(ta)}</th></tr><tr><th>${t('liabilities')} + ${t('equity')}</th><th class="num">${money(tl + te)}</th></tr></table>
      <span class="tag">${ta === tl + te ? '✔ ' : '✖ '}${t('assets')} = ${t('liabilities')} + ${t('equity')}</span></div></div></div>`;
}
A.simType = side => {
  const ty = $('#s' + side + 'T').value;
  const el = side === 'Dr' ? $('#sDr') : $('#sCr');
  el.innerHTML = `<option value="">${t('choose')}</option>` + Object.keys(DATA.accounts).filter(k => DATA.accounts[k].type === ty).map(k => `<option value="${k}">${esc(tr(DATA.accounts[k].name))}</option>`).join('');
  el.disabled = !ty;
};
A.simBiz = v => { simState().biz = v; save(); };
A.simReset = () => { S.sim = null; simMsg = ''; save(); render(); };
A.simSubmit = () => {
  const s = simState(), tx = DATA.simTx[s.idx], dr = $('#sDr').value, cr = $('#sCr').value, amt = +$('#sAmt').value;
  if (!dr || !cr || !(amt > 0)) { simMsg = `<div class="fb bad">${t('choose')} + ${t('amount')}</div>`; render(); return; }
  if (dr === cr) { simMsg = `<div class="fb bad">${S.lang === 'km' ? 'គណនី Debit និង Credit មិនអាចដូចគ្នាទេ។' : 'Debit and credit accounts cannot be the same.'}</div>`; render(); return; }
  const ok = dr === tx.dr && cr === tx.cr && amt === tx.amt;
  if (s.tries === 0) { S.practice.total++; recordTopic('debitcredit', ok); if (ok) S.practice.right++; }
  markActive();
  if (ok) { s.entries.push({ dr, cr, amt }); s.idx++; s.tries = 0; simMsg = `<div class="fb ok"><b>${t('correct')}</b> ✔ ${t('balanced')}<br>${esc(tr(tx.why))}<br><b>${t('equationEffect')}:</b> ${esc(tr(tx.effect))}</div>`; }
  else {
    s.tries++;
    const hints = [];
    const km = S.lang === 'km';
    if (dr === tx.cr && cr === tx.dr) hints.push(km ? 'អ្នកបានដាក់ Debit និង Credit ត្រឡប់គ្នា។' : 'You reversed the debit and the credit.');
    else { if (dr !== tx.dr) hints.push(km ? 'គណនី Debit មិនត្រឹមត្រូវ។' : 'The debit account is not right.'); if (cr !== tx.cr) hints.push(km ? 'គណនី Credit មិនត្រឹមត្រូវ។' : 'The credit account is not right.'); }
    if (amt !== tx.amt) hints.push(km ? 'ចំនួនទឹកប្រាក់មិនត្រឹមត្រូវ។' : 'The amount is not right.');
    simMsg = `<div class="fb bad"><b>${t('incorrect')}</b> ${hints.join(' ')} (${t('tries')}: ${s.tries})<br><b>${t('rightAnswer')}:</b> Dr ${esc(tr(DATA.accounts[tx.dr].name))} / Cr ${esc(tr(DATA.accounts[tx.cr].name))} — ${money(tx.amt)}<br>${esc(tr(tx.why))}<br>
      <button class="btn" onclick="A.simForce()">${t('nextTx')} →</button></div>`;
  }
  save(); render();
};
A.simForce = () => { const s = simState(), tx = DATA.simTx[s.idx]; s.entries.push({ dr: tx.dr, cr: tx.cr, amt: tx.amt }); s.idx++; s.tries = 0; simMsg = `<div class="fb ok">${esc(tr(tx.why))}<br><b>${t('equationEffect')}:</b> ${esc(tr(tx.effect))}</div>`; save(); render(); };

// ---------- Flashcards & glossary ----------
const DAY = 86400000, STEPS = [0, 1, 3, 7, 14];
const catName = k => (DATA.cardCats[k] ? tr(DATA.cardCats[k]) : k);
// new = never studied, learning = studied but interval under a week, mastered = interval of 7+ days
function cardStatus(c) { const e = S.cards[c.id]; return !e ? 'new' : (e.box >= 3 ? 'mastered' : 'learning'); }
function cardStats(cat) {
  const list = DATA.cards.filter(c => !cat || cat === 'all' || c.cat === cat), now = Date.now();
  const r = { total: list.length, new: 0, learning: 0, mastered: 0, due: 0 };
  list.forEach(c => { r[cardStatus(c)]++; const e = S.cards[c.id]; if (!e || e.due <= now) r.due++; });
  return r;
}
function dueCards(cat) { const now = Date.now(); return DATA.cards.filter(c => (!cat || cat === 'all' || c.cat === cat) && (!S.cards[c.id] || S.cards[c.id].due <= now)).sort((a, b) => ((S.cards[a.id] || { due: 0 }).due) - ((S.cards[b.id] || { due: 0 }).due)); }
function cardStatsHtml() {
  const st = cardStats();
  const pc = st.total ? Math.round(100 * st.mastered / st.total) : 0;
  const cats = Object.keys(DATA.cardCats).map(k => { const x = cardStats(k); const p = x.total ? Math.round(100 * x.mastered / x.total) : 0;
    return `<div class="hbar"><span>${esc(catName(k))}</span><div class="bar"><i style="width:${p}%"></i></div><span>${x.mastered}/${x.total}</span></div>`; }).join('');
  return `<div class="grid">
    <div class="card stat"><b>${st.total}</b>${t('cardsTotal')}</div>
    <div class="card stat"><b>${st.new}</b>${t('stNew')}</div>
    <div class="card stat"><b>${st.learning}</b>${t('stLearning')}</div>
    <div class="card stat"><b>${st.mastered}</b>${t('stMastered')}</div>
    <div class="card stat"><b>${st.due}</b>${t('dueToday')}</div></div>
    <div class="card"><div class="row" style="justify-content:space-between"><b>${pc}% ${t('masteredPct')}</b><span class="muted">${S.flashReviews} ${t('reviewsN')}</span></div><div class="bar"><i style="width:${pc}%"></i></div></div>
    <div class="card"><h3>${t('byCategory')}</h3>${cats}</div>`;
}
function cardSetup() {
  const ss = S.cardSession, ls = S.lastCardSession;
  const saved = ss ? `<div class="card" style="border-color:var(--green)"><h3>⏸ ${t('savedSession')}</h3>
    <p>${t('cardOf')} ${Math.min(ss.pos + 1, ss.ids.length)} / ${ss.ids.length} · ${esc(ss.cat === 'all' ? t('catAll') : catName(ss.cat))} · ${ss.reviewed} ${t('cardsDone')}</p>
    <div class="bar"><i style="width:${Math.round(100 * ss.pos / ss.ids.length)}%"></i></div>
    <div class="row" style="margin-top:10px"><button class="btn green" onclick="A.cardResume()">▶ ${t('resume')}</button><button class="btn ghost" onclick="A.cardDiscard()">${discardArmed ? t('discardSure') : t('discard')}</button></div></div>` : '';
  const sum = cardSummary || null;
  const done = sum ? `<div class="card" style="border-color:var(--green)"><h3>✅ ${t('sessionDone')}</h3><p>${sum.reviewed} ${t('cardsDone')} · ${t('again')}: ${sum.again} · ⏱ ${fmt(sum.secs)}</p></div>` : '';
  const catOpts = `<option value="all">${t('catAll')}</option>` + Object.keys(DATA.cardCats).map(k => `<option value="${k}" ${cardCat === k ? 'selected' : ''}>${esc(catName(k))} (${DATA.cards.filter(c => c.cat === k).length})</option>`).join('');
  return done + saved + `<div class="card"><h3>${t('startSession')}</h3><div class="row">
    <label>${t('topic')} <select onchange="A.cardOpt('cat',this.value)">${catOpts}</select></label>
    <label>${t('sessionSize')} <input type="number" min="3" max="100" value="${cardSize}" style="width:70px" onchange="A.cardOpt('size',this.value)"></label>
    <label><input type="checkbox" ${cardAll ? 'checked' : ''} onchange="A.cardOpt('all',this.checked)"> ${t('includeNotDue')}</label></div>
    <p><button class="btn green" onclick="A.cardStart()">${t('startSession')}</button></p></div>` + cardStatsHtml();
}
function cardRunView() {
  const ss = S.cardSession, c = DATA.cards.find(x => x.id === ss.ids[ss.pos]);
  const e = S.cards[c.id];
  const pc = Math.round(100 * ss.pos / ss.ids.length);
  return `<div class="row" style="justify-content:space-between"><span class="muted">${t('cardOf')} ${ss.pos + 1} / ${ss.ids.length} · ${ss.reviewed} ${t('cardsDone')}</span>
    <button class="btn ghost" onclick="A.cardStop()">💾 ${t('stopSave')}</button></div>
    <div class="bar" style="margin:8px 0"><i style="width:${pc}%"></i></div>
    <div class="card flash" onclick="A.flip()"><span class="tag">${esc(catName(c.cat))} · ${t(cardStatus(c) === 'new' ? 'stNew' : cardStatus(c) === 'mastered' ? 'stMastered' : 'stLearning')}</span>
      ${cardShown ? `<h3>${esc(tr(c.term))}</h3><p>${esc(tr(c.def))}</p><p class="muted">${esc(tr(c.detail))}</p><p><i>${t('example')}: ${esc(tr(c.ex))}</i></p>${c.formula ? `<code>${esc(c.formula)}</code>` : ''}` : `<h2>${esc(tr(c.term))}</h2><span class="muted">${t('flipHint')}</span>`}</div>
    ${cardShown ? `<p class="muted">${t('howRated')}</p><div class="row"><button class="btn ghost" onclick="A.rate('${c.id}',0)">${t('again')}</button><button class="btn" onclick="A.rate('${c.id}',1)">${t('good')}</button><button class="btn green" onclick="A.rate('${c.id}',2)">${t('easy')}</button></div>` : `<button class="btn" onclick="A.flip()">${t('reveal')}</button>`}
    <div class="row" style="margin-top:14px"><button class="btn ghost" onclick="A.cardFinish()">${t('endSession')}</button></div>`;
}
function glossList() {
  const q = glossQ.trim().toLowerCase();
  const list = DATA.cards.filter(c => (glossCat === 'all' || c.cat === glossCat) && (!q || [c.term.en, c.term.km, c.def.en, c.def.km].some(x => x.toLowerCase().includes(q))))
    .sort((a, b) => tr(a.term).localeCompare(tr(b.term), S.lang === 'km' ? 'km' : 'en'));
  return `<p class="muted">${list.length} ${t('shownCards')}</p>` + list.map(glossItem).join('');
}
function cards() {
  const tabs = `<div class="row"><button class="btn ${cardTab === 'review' ? '' : 'ghost'}" onclick="A.cardTab('review')">${t('cards')}</button><button class="btn ${cardTab === 'gloss' ? '' : 'ghost'}" onclick="A.cardTab('gloss')">${t('glossary')} (${DATA.cards.length})</button></div><br>`;
  if (cardTab === 'gloss') {
    const catOpts = `<option value="all">${t('catAll')}</option>` + Object.keys(DATA.cardCats).map(k => `<option value="${k}" ${glossCat === k ? 'selected' : ''}>${esc(catName(k))}</option>`).join('');
    return `<h2>${t('glossary')}</h2>${tabs}<div class="row" style="margin-bottom:10px"><input type="text" id="glossBox" value="${esc(glossQ)}" placeholder="${t('searchTerms')}" oninput="A.glossFind(this.value)" style="flex:1;min-width:160px"><select onchange="A.glossCat(this.value)">${catOpts}</select></div><div id="glossList">${glossList()}</div>`;
  }
  const body = cardRun && S.cardSession ? cardRunView() : cardSetup();
  return `<h2>${t('cards')}</h2>${tabs}${body}`;
}
function glossItem(c) {
  const st = cardStatus(c), ic = st === 'mastered' ? '🟢' : st === 'learning' ? '🟡' : '⚪';
  return `<div class="card"><b>${ic} ${esc(tr(c.term))}</b> <span class="tag">${esc(catName(c.cat))}</span><br>${esc(tr(c.def))}<br><span class="muted">${esc(tr(c.detail))}</span><br><i>${t('example')}: ${esc(tr(c.ex))}</i>${c.formula ? `<br>${t('formula')}: <code>${esc(c.formula)}</code>` : ''}</div>`;
}
A.cardTab = x => { cardTab = x; cardShown = false; discardArmed = false; render(); };
A.glossFind = v => { glossQ = v; const el = $('#glossList'); if (el) el.innerHTML = glossList(); };
A.glossCat = v => { glossCat = v; render(); };
A.cardOpt = (k, v) => { if (k === 'cat') cardCat = v; else if (k === 'size') cardSize = Math.max(3, Math.min(100, +v || 15)); else cardAll = !!v; render(); };
A.cardStart = () => {
  let list = dueCards(cardCat);
  if (cardAll) { const have = new Set(list.map(c => c.id)); list = list.concat(shuffle(DATA.cards.filter(c => (cardCat === 'all' || c.cat === cardCat) && !have.has(c.id)))); }
  list = list.slice(0, cardSize);
  if (!list.length) { toast(t('nothingToStudy')); return; }
  S.cardSession = { ids: list.map(c => c.id), pos: 0, cat: cardCat, reviewed: 0, again: 0, startedAt: Date.now(), resumedAt: Date.now(), secs: 0 };
  cardSummary = null; cardRun = true; cardShown = false; save(); render();
};
A.cardResume = () => { cardRun = true; cardShown = false; cardSummary = null; S.cardSession.resumedAt = Date.now(); render(); };
function sessionSecs() { const ss = S.cardSession; return ss.secs + (ss.resumedAt ? Math.round((Date.now() - ss.resumedAt) / 1000) : 0); }
A.cardStop = () => { const ss = S.cardSession; if (ss) { ss.secs = sessionSecs(); ss.resumedAt = 0; } cardRun = false; cardShown = false; save(); toast(t('progressSaved')); render(); };
A.cardDiscard = () => { if (!discardArmed) { discardArmed = true; render(); return; } discardArmed = false; S.cardSession = null; save(); render(); };
A.cardFinish = () => {
  const ss = S.cardSession; if (!ss) return;
  cardSummary = { reviewed: ss.reviewed, again: ss.again, secs: sessionSecs() };
  S.lastCardSession = cardSummary; S.cardSession = null; cardRun = false; cardShown = false; save(); render();
};
A.flip = () => { cardShown = true; render(); };
A.rate = (id, r) => {
  const c = S.cards[id] || { box: 0, due: 0, n: 0, again: 0 };
  c.box = r === 0 ? 0 : Math.min(STEPS.length - 1, c.box + r);
  c.due = Date.now() + (r === 0 ? 60000 : STEPS[c.box] * DAY);
  c.n = (c.n || 0) + 1; if (r === 0) c.again = (c.again || 0) + 1;
  S.cards[id] = c; S.flashReviews++; markActive();
  const ss = S.cardSession;
  if (ss) {
    ss.reviewed++;
    if (r === 0) { ss.again++; if (ss.ids.filter(x => x === id).length < 3) ss.ids.push(id); }
    ss.pos++;
    cardShown = false;
    if (ss.pos >= ss.ids.length) { A.cardFinish(); return; }
  }
  cardShown = false; save(); render();
};

// ---------- Progress / bookmarks / settings / search ----------
function progress() {
  const wk = weakTopics();
  return `<h2>${t('progress')}</h2><div class="grid">
    <div class="card stat"><b>${completedCount()}/${SEQ().length}</b>${t('lessonsDone')}</div>
    <div class="card stat"><b>${S.practice.total ? Math.round(100 * S.practice.right / S.practice.total) + '%' : '—'}</b>${t('practiceAcc')}</div>
    <div class="card stat"><b>${Object.keys(S.days).length}</b>${t('sessions')}</div>
    <div class="card stat"><b>${S.flashReviews}</b>${t('flashRev')}</div></div>
  <div class="card"><h3>${t('mastery')}</h3>${masteryBars()}</div>
  <h3>🗂️ ${t('cards')}</h3>${cardStatsHtml()}
  <div class="card"><h3>${t('weak')}</h3>${wk.length ? wk.map(k => `<p>${esc(tr(DATA.topics[k]))} (${pct(S.topicStats[k])}%) <button class="btn ghost" onclick="A.go('lesson','${lessonForTopic(k).id}')">${t('reviewWrong')}</button></p>`).join('') : `<p class="muted">${t('noWeak')}</p>`}</div>
  <div class="card"><h3>${t('history')}</h3>${S.quizHistory.length ? `<table>${S.quizHistory.slice().reverse().map(h => `<tr><td>${esc(h.date)}</td><td class="num">${h.score}/${h.total} (${h.pct}%)</td><td class="num">${h.secs != null ? '⏱ ' + fmt(h.secs) : ''}</td></tr>`).join('')}</table>` : `<p class="muted">${t('noHistory')}</p>`}</div>
  <div class="card"><h3>${t('badges')}</h3>${badgesHtml()}</div>
  <button class="btn" onclick="A.exportSummary()">📋 ${t('export')}</button>
  ${exportText ? `<div class="card"><textarea id="exportBox" readonly style="min-height:180px">${esc(exportText)}</textarea><br><button class="btn green" onclick="A.copyExport()">${t('copy')}</button></div>` : ''}`;
}
A.exportSummary = () => {
  const lines = ['AccountEasy — ' + t('export'), ''];
  SEQ().filter(id => S.completed[id]).forEach(id => { const l = lessonById(id); lines.push('## ' + tr(l.title)); l.summary.forEach(x => lines.push('- ' + tr(x))); if (S.notes[id]) lines.push(t('notes') + ': ' + S.notes[id]); lines.push(''); });
  if (lines.length === 2) lines.push(t('noActivity'));
  exportText = lines.join('\n'); render();
};
A.copyExport = () => {
  const box = $('#exportBox'); box.select();
  const done = () => toast(t('saved'));
  if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(exportText).then(done, () => { try { document.execCommand('copy'); done(); } catch (e) { /* text stays selected */ } });
  else { try { document.execCommand('copy'); done(); } catch (e) { /* text stays selected */ } }
};
function bookmarks() {
  const b = SEQ().filter(id => S.bookmarks[id]), n = Object.keys(S.notes);
  return `<h2>${t('bookmarks')}</h2>` + (b.length ? `<div class="card"><table>${b.map(id => `<tr><td>🔖 ${esc(tr(lessonById(id).title))}</td><td><button class="btn ghost" onclick="A.go('lesson','${id}')">${t('open')}</button> <button class="btn ghost" onclick="A.bm('${id}')">✕</button></td></tr>`).join('')}</table></div>` : `<div class="card"><p class="muted">${t('noBookmarks')}</p></div>`)
    + (n.length ? `<h3>${t('notes')}</h3>` + n.map(id => `<div class="card"><b>${esc(tr(lessonById(id).title))}</b><p>${esc(S.notes[id])}</p></div>`).join('') : '');
}
function settings() {
  return `<h2>${t('settings')}</h2><div class="card"><div class="row">
    <label>${t('language')} <select onchange="A.setLang(this.value)"><option value="en" ${S.lang === 'en' ? 'selected' : ''}>English</option><option value="km" ${S.lang === 'km' ? 'selected' : ''}>ខ្មែរ</option></select></label>
    <label>${t('theme')} <select onchange="A.setTheme(this.value)"><option value="light" ${S.theme === 'light' ? 'selected' : ''}>${t('light')}</option><option value="dark" ${S.theme === 'dark' ? 'selected' : ''}>${t('dark')}</option></select></label>
    <label>${t('goal')} <input type="number" min="5" max="240" value="${S.goal}" style="width:80px" onchange="A.setGoal(this.value)"></label></div>
    <p class="muted">${t('storageNote')}</p><button class="btn" style="background:var(--danger)" onclick="A.clearAll()">${clearArmed ? t('confirmClear') : t('clear')}</button></div>`;
}
A.setLang = v => { S.lang = v; save(); render(); };
A.setTheme = v => { S.theme = v; save(); render(); };
A.setGoal = v => { S.goal = Math.max(5, +v || 20); save(); render(); };
A.clearAll = () => { if (!clearArmed) { clearArmed = true; render(); return; } clearArmed = false; try { localStorage.removeItem(KEY); } catch (e) { /* ignore */ } S = load(); QZ = null; exRows = null; exportText = ''; cardRun = false; cardSummary = null; render(); };
function search(q) {
  q = (q || '').toLowerCase();
  const hit = o => Object.values(o).some(v => typeof v === 'string' ? v.toLowerCase().includes(q) : (v && typeof v === 'object' ? hit(v) : false));
  const ls = DATA.lessons.filter(hit), cs = DATA.cards.filter(hit);
  return `<h2>${t('results')}: "${esc(q)}"</h2>` + (ls.length || cs.length ? (ls.length ? `<div class="card"><h3>${t('lessons')}</h3><table>${ls.map(l => lessonRow(l.id)).join('')}</table></div>` : '') + cs.map(glossItem).join('') : `<div class="card"><p>${t('none')}</p></div>`);
}

const VIEWS = { dashboard, paths, lessons, lesson, practice, quiz, sim, cards, progress, bookmarks, settings, search };

// ---------- Boot ----------
$('#menuBtn').onclick = () => $('#sidebar').classList.toggle('open');
$('#langBtn').onclick = () => A.setLang(S.lang === 'en' ? 'km' : 'en');
$('#themeBtn').onclick = () => A.setTheme(S.theme === 'light' ? 'dark' : 'light');
$('#searchBox').oninput = e => { const v = e.target.value.trim(); if (v.length >= 2) { cur = { view: 'search', arg: v }; render(); } else if (cur.view === 'search') A.go('dashboard'); };
setInterval(() => { if (!document.hidden) { addMinutes(1); save(); } }, 60000);
render();
})();
