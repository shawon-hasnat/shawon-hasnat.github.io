(function () {
"use strict";
var EMAIL = "shawonhasnatofficials@gmail.com";
var UI = {
  bn: { name: "শাওন হাসনাত বাবু", other: "English", main: "মূল সাইট", contact: "যোগাযোগ", rights: "সর্বস্বত্ব সংরক্ষিত",
        hint: "কার্ড টেনে বা ট্যাপ করে টুল বেছে নিন",
        add: "যোগ করুন", del: "মুছুন", empty: "এখনো কিছু যোগ করা হয়নি।",
        task_ph: "কী পড়বে বা করবে?", date_opt: "তারিখ (ঐচ্ছিক)", done: "সম্পন্ন", clear: "সম্পন্নগুলো মুছুন",
        exam_ph: "পরীক্ষার নাম", exam_date: "পরীক্ষার তারিখ", passed: "শেষ হয়েছে",
        left: function (n) { return n === 0 ? "পরীক্ষা আজ!" : n + " দিন বাকি"; },
        mode_s: "স্কুল/কলেজ (৫.০)", mode_u: "বিশ্ববিদ্যালয় (৪.০)", subject: "বিষয়ের নাম", course: "কোর্সের নাম", credit: "ক্রেডিট",
        fourth: "৪র্থ বিষয়", add_row: "সারি যোগ করুন", gpa: "GPA", fail: "কোনো বিষয়ে F, তাই অকৃতকার্য",
        note_s: "SSC/HSC-র ৫.০ স্কেল: A+ = 5, A = 4, A- = 3.5, B = 3, C = 2, D = 1, F = 0। ৪র্থ বিষয়ে ২-এর ওপরের পয়েন্ট যোগ হয়, ভাগ হয় না।",
        note_u: "এটি বাংলাদেশের বহু বিশ্ববিদ্যালয়ের প্রচলিত ৪.০ স্কেল। বিশ্ববিদ্যালয়ভেদে স্কেল আলাদা হতে পারে, তাই নিজের স্কেল মিলিয়ে নিন।",
        focus: "ফোকাস", short: "ছোট বিরতি", long: "লম্বা বিরতি", start: "শুরু", pause: "থামান", reset: "রিসেট",
        sessions: "আজকের ফোকাস সেশন", finished: "সময় শেষ!", keep: "টাইমার চলাকালীন এই ব্রাউজার ট্যাব খোলা রাখুন।" },
  en: { name: "Shawon Hasnat Babu", other: "বাংলা", main: "Main site", contact: "Contact", rights: "All rights reserved",
        hint: "Drag or tap the cards to pick a tool",
        add: "Add", del: "Delete", empty: "Nothing added yet.",
        task_ph: "What will you study or do?", date_opt: "Date (optional)", done: "done", clear: "Clear completed",
        exam_ph: "Exam name", exam_date: "Exam date", passed: "Finished",
        left: function (n) { return n === 0 ? "Exam is today!" : n + (n === 1 ? " day left" : " days left"); },
        mode_s: "School/College (5.0)", mode_u: "University (4.0)", subject: "Subject name", course: "Course name", credit: "Credit",
        fourth: "4th subject", add_row: "Add row", gpa: "GPA", fail: "F in a subject, so failed",
        note_s: "SSC/HSC 5.0 scale: A+ = 5, A = 4, A- = 3.5, B = 3, C = 2, D = 1, F = 0. For the 4th subject, points above 2 are added and not divided.",
        note_u: "This is the 4.0 scale used by many Bangladeshi universities. Scales differ between universities, so check your own.",
        focus: "Focus", short: "Short break", long: "Long break", start: "Start", pause: "Pause", reset: "Reset",
        sessions: "Focus sessions today", finished: "Time is up!", keep: "Keep this browser tab open while the timer runs." }
};
var T = window.TL.S, N = T.length;
function $(id) { return document.getElementById(id); }
function el(t, c, x) { var n = document.createElement(t); if (c) n.className = c; if (x != null) n.textContent = x; return n; }
function store(k, v) { try { if (v === undefined) return localStorage.getItem(k); localStorage.setItem(k, v); } catch (e) { return null; } }
function load(k, def) { try { var v = store(k); return v ? JSON.parse(v) : def; } catch (e) { return def; } }
function save(k, v) { store(k, JSON.stringify(v)); }

var lang = store("lang");
if (lang !== "bn" && lang !== "en") lang = (navigator.language || "").toLowerCase().indexOf("bn") === 0 ? "bn" : "en";
var th = store("theme");
if (th === "dark" || th === "light") document.documentElement.setAttribute("data-theme", th);
var reduce = window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches;

/* ---------- header & footer (মূল সাইটের মতোই) ---------- */
$("site-header").innerHTML = '<div class="w"><div class="bar"><a class="brand" href="/"><span class="logo">S</span><span id="hb"></span></a><div class="tools"><button id="lang" type="button"></button><button id="theme" type="button" aria-label="Light / Dark">◐</button></div></div><nav class="pills" id="pills"></nav></div>';
$("site-footer").innerHTML = '<div class="w"><b class="sx" id="fn"></b><br><span id="fc"></span>: <a href="mailto:' + EMAIL + '">' + EMAIL + '</a><br><a href="/" id="fm"></a> · <span id="fr"></span></div>';

T.forEach(function (s) {
  var b = el("button", ""); b.type = "button"; b.id = "pill-" + s.id;
  b.onclick = function () { location.hash = s.id; };
  $("pills").appendChild(b);
});
function isDark() {
  var a = document.documentElement.getAttribute("data-theme");
  return a === "dark" || (a !== "light" && matchMedia("(prefers-color-scheme: dark)").matches);
}
$("theme").onclick = function () {
  var d = isDark() ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", d); store("theme", d);
};
$("lang").onclick = function () { lang = lang === "bn" ? "en" : "bn"; store("lang", lang); render(); };

/* ---------- সাহায্যকারী ---------- */
function fmtDate(s) {
  try { return new Date(s + "T00:00:00").toLocaleDateString(lang === "bn" ? "bn-BD" : "en-GB", { day: "numeric", month: "short", year: "numeric" }); }
  catch (e) { return s; }
}
function daysLeft(s) {
  var p = s.split("-"), now = new Date();
  var target = new Date(+p[0], +p[1] - 1, +p[2]);
  var today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  return Math.round((target - today) / 864e5);
}
function todayStr() { var n = new Date(); return n.getFullYear() + "-" + (n.getMonth() + 1) + "-" + n.getDate(); }
function button(label, cls, fn) { var b = el("button", cls, label); b.type = "button"; b.onclick = fn; return b; }
function field(type, ph, cls) { var i = el("input", cls === undefined ? "tl-in" : cls); i.type = type; if (ph) { i.placeholder = ph; i.setAttribute("aria-label", ph); } return i; }

/* ---------- 3D কভারফ্লো ডেক ---------- */
function indexOfCurrent() {
  var id = (location.hash || "").slice(1), i;
  for (i = 0; i < N; i++) if (T[i].id === id) return i;
  return 0;
}
var view = $("view");
var wrap = el("div", "w tl-wrap"), stage = el("div", "tl-stage"), deck = el("div", "tl-deck"), hint = el("p", "tl-hint");
stage.tabIndex = 0; stage.setAttribute("role", "listbox");
stage.appendChild(deck); stage.appendChild(el("div", "tl-floor"));
var cards = T.map(function (s, i) {
  var c = el("div", "tl-card"); c.setAttribute("role", "option");
  c.style.setProperty("--g1", s.g[0]); c.style.setProperty("--g2", s.g[1]);
  c._ico = el("i", "", s.e); c._box = el("div"); c._st = el("strong"); c._sm = el("small");
  c._box.appendChild(c._st); c._box.appendChild(c._sm); c.appendChild(c._ico); c.appendChild(c._box);
  deck.appendChild(c); return c;
});
wrap.appendChild(stage); wrap.appendChild(hint);
view.parentNode.insertBefore(wrap, view);

var pos = indexOfCurrent(), target = null, drag = false, moved = 0, sx = 0, sp = 0, downCard = -1, STEP = 100;
function paint() {
  cards.forEach(function (c, i) {
    var off = i - pos, a = Math.abs(off), sg = off < 0 ? -1 : 1;
    var x = a <= 1 ? off * STEP : sg * (STEP + (a - 1) * 55);
    var rot = -Math.max(-1, Math.min(1, off)) * 55;
    var z = -Math.min(a, 2.5) * 70, sc = 1 - Math.min(a, 2) * 0.08, op = Math.max(0, 1 - a * 0.35);
    c.style.transform = "translateX(" + x.toFixed(1) + "px) translateZ(" + z.toFixed(1) + "px) rotateY(" + rot.toFixed(1) + "deg) scale(" + sc.toFixed(3) + ")";
    c.style.opacity = op.toFixed(2);
    c.style.zIndex = String(100 - Math.round(a * 10));
    c.className = "tl-card" + (a < 0.5 ? " front" : "");
    c.setAttribute("aria-selected", a < 0.5 ? "true" : "false");
  });
}
function loop() {
  if (target === null) return;
  pos += (target - pos) * 0.16;
  if (Math.abs(target - pos) < 0.003) { pos = target; target = null; }
  paint();
  if (target !== null) requestAnimationFrame(loop);
}
function glide(i) { target = i; if (reduce) { pos = i; target = null; paint(); } else requestAnimationFrame(loop); }
function go(i) {
  i = Math.max(0, Math.min(N - 1, i));
  glide(i);
  if (T[i].id !== T[indexOfCurrent()].id) location.hash = T[i].id;
}
function closestCard(node) {
  while (node && node !== stage) { var k = cards.indexOf(node); if (k > -1) return k; node = node.parentNode; }
  return -1;
}
stage.addEventListener("pointerdown", function (e) {
  drag = true; moved = 0; sx = e.clientX; sp = pos; target = null; downCard = closestCard(e.target);
  try { stage.setPointerCapture(e.pointerId); } catch (x) {}
});
stage.addEventListener("pointermove", function (e) {
  if (!drag) return;
  var dx = e.clientX - sx; moved = Math.max(moved, Math.abs(dx));
  pos = Math.max(-0.4, Math.min(N - 0.6, sp - dx / STEP)); paint();
});
function release() {
  if (!drag) return; drag = false;
  if (moved < 6 && downCard > -1) go(downCard); else go(Math.round(pos));
}
stage.addEventListener("pointerup", release);
stage.addEventListener("pointercancel", release);
stage.addEventListener("keydown", function (e) {
  if (e.key === "ArrowLeft") { e.preventDefault(); go(indexOfCurrent() - 1); }
  if (e.key === "ArrowRight") { e.preventDefault(); go(indexOfCurrent() + 1); }
});

/* ---------- Study Planner ---------- */
function planner() {
  var d = UI[lang], list = load("tools.planner", []), box = el("div", "tl-box");
  var form = el("div", "tl-form"), inp = field("text", d.task_ph), dt = field("date", d.date_opt);
  inp.maxLength = 120;
  var cnt = el("div", "tl-count"), ul = el("ul", "tl-list"), act = el("div", "tl-actions");
  function persist() { save("tools.planner", list); draw(); }
  function draw() {
    ul.textContent = "";
    list.forEach(function (it, i) {
      var li = el("li", "tl-item" + (it.done ? " done" : "")), cb = field("checkbox", "", "");
      cb.checked = !!it.done; cb.onchange = function () { it.done = cb.checked; persist(); };
      li.appendChild(cb); li.appendChild(el("span", "tl-txt", it.t));
      if (it.d) li.appendChild(el("small", "", fmtDate(it.d)));
      var x = button("✕", "tl-x", function () { list.splice(i, 1); persist(); }); x.setAttribute("aria-label", d.del);
      li.appendChild(x); ul.appendChild(li);
    });
    if (!list.length) ul.appendChild(el("li", "tl-empty", d.empty));
    var n = list.filter(function (x) { return x.done; }).length;
    cnt.textContent = n + " / " + list.length + " " + d.done;
  }
  function addTask() {
    var v = inp.value.trim(); if (!v) return;
    list.push({ t: v, d: dt.value, done: false }); inp.value = ""; dt.value = ""; persist();
  }
  inp.onkeydown = function (e) { if (e.key === "Enter") addTask(); };
  form.appendChild(inp); form.appendChild(dt); form.appendChild(button(d.add, "btn pri", addTask));
  act.appendChild(button(d.clear, "btn", function () { list = list.filter(function (x) { return !x.done; }); persist(); }));
  box.appendChild(form); box.appendChild(cnt); box.appendChild(ul); box.appendChild(act); draw();
  return box;
}

/* ---------- Exam Countdown ---------- */
function countdown() {
  var d = UI[lang], list = load("tools.exams", []), box = el("div", "tl-box");
  var form = el("div", "tl-form"), inp = field("text", d.exam_ph), dt = field("date", d.exam_date), ul = el("ul", "tl-list");
  inp.maxLength = 80;
  function draw() {
    ul.textContent = "";
    list.slice().sort(function (a, b) { return a.d < b.d ? -1 : a.d > b.d ? 1 : 0; }).forEach(function (it) {
      var n = daysLeft(it.d), li = el("li", "tl-exam" + (n < 0 ? " past" : ""));
      li.appendChild(el("div", "tl-big", n < 0 ? "✓" : String(n)));
      var t = el("div", "tl-exam-t"); t.appendChild(el("strong", "", it.t));
      t.appendChild(el("small", "", fmtDate(it.d) + " · " + (n < 0 ? d.passed : d.left(n))));
      li.appendChild(t);
      var x = button("✕", "tl-x", function () { list.splice(list.indexOf(it), 1); save("tools.exams", list); draw(); }); x.setAttribute("aria-label", d.del);
      li.appendChild(x); ul.appendChild(li);
    });
    if (!list.length) ul.appendChild(el("li", "tl-empty", d.empty));
  }
  function addExam() {
    var v = inp.value.trim(); if (!v || !dt.value) return;
    list.push({ t: v, d: dt.value }); inp.value = ""; dt.value = ""; save("tools.exams", list); draw();
  }
  inp.onkeydown = function (e) { if (e.key === "Enter") addExam(); };
  form.appendChild(inp); form.appendChild(dt); form.appendChild(button(d.add, "btn pri", addExam));
  box.appendChild(form); box.appendChild(ul); draw();
  return box;
}

/* ---------- GPA Calculator ---------- */
var GR_S = [["A+", 5], ["A", 4], ["A-", 3.5], ["B", 3], ["C", 2], ["D", 1], ["F", 0]];
var GR_U = [["A+", 4], ["A", 3.75], ["A-", 3.5], ["B+", 3.25], ["B", 3], ["B-", 2.75], ["C+", 2.5], ["C", 2.25], ["D", 2], ["F", 0]];
var gpaMode = "s";

function gradeSelect(table, onchange) {
  var sel = el("select", "tl-in");
  table.forEach(function (g) { var o = el("option", "", g[0] + " (" + g[1].toFixed(2) + ")"); o.value = String(g[1]); sel.appendChild(o); });
  sel.value = String(table[0][1]); sel.onchange = onchange; return sel;
}
function gpaSchool(d) {
  var box = el("div"), rows = el("div", "tl-rows"), res = el("div", "tl-res");
  function calc() {
    var main = 0, sum = 0, bonus = 0, fail = false;
    Array.prototype.forEach.call(rows.children, function (r) {
      var pt = +r._sel.value;
      if (r._cb.checked) bonus += Math.max(pt - 2, 0);
      else { main++; sum += pt; if (pt === 0) fail = true; }
    });
    if (!main) { res.textContent = "—"; return; }
    var g = fail ? 0 : Math.min((sum + bonus) / main, 5);
    res.textContent = d.gpa + ": " + g.toFixed(2) + (fail ? " (" + d.fail + ")" : "");
  }
  function addRow() {
    var r = el("div", "tl-row"), nm = field("text", d.subject); nm.maxLength = 40;
    var sel = gradeSelect(GR_S, calc), lab = el("label", "tl-chk"), cb = field("checkbox", "", "");
    cb.onchange = calc; lab.appendChild(cb); lab.appendChild(document.createTextNode(d.fourth));
    var x = button("✕", "tl-x", function () { rows.removeChild(r); calc(); }); x.setAttribute("aria-label", d.del);
    r._sel = sel; r._cb = cb;
    r.appendChild(nm); r.appendChild(sel); r.appendChild(lab); r.appendChild(x); rows.appendChild(r); calc();
  }
  for (var i = 0; i < 3; i++) addRow();
  box.appendChild(rows); box.appendChild(button(d.add_row, "btn", addRow)); box.appendChild(res);
  box.appendChild(el("div", "tl-note", d.note_s));
  return box;
}
function gpaUni(d) {
  var box = el("div"), rows = el("div", "tl-rows"), res = el("div", "tl-res");
  function calc() {
    var c = 0, p = 0;
    Array.prototype.forEach.call(rows.children, function (r) {
      var cr = parseFloat(r._cr.value); if (!(cr > 0)) return;
      c += cr; p += cr * (+r._sel.value);
    });
    res.textContent = c ? d.gpa + ": " + (p / c).toFixed(2) : "—";
  }
  function addRow() {
    var r = el("div", "tl-row"), nm = field("text", d.course); nm.maxLength = 40;
    var cr = field("number", d.credit, "tl-in tl-cr"); cr.min = "0"; cr.step = "0.5"; cr.value = "3"; cr.oninput = calc;
    var sel = gradeSelect(GR_U, calc);
    var x = button("✕", "tl-x", function () { rows.removeChild(r); calc(); }); x.setAttribute("aria-label", d.del);
    r._sel = sel; r._cr = cr;
    r.appendChild(nm); r.appendChild(cr); r.appendChild(sel); r.appendChild(x); rows.appendChild(r); calc();
  }
  for (var i = 0; i < 4; i++) addRow();
  box.appendChild(rows); box.appendChild(button(d.add_row, "btn", addRow)); box.appendChild(res);
  box.appendChild(el("div", "tl-note", d.note_u));
  return box;
}
function gpa() {
  var d = UI[lang], box = el("div", "tl-box"), modes = el("div", "tl-modes"), body = el("div");
  function show() {
    modes.textContent = ""; body.textContent = "";
    [["s", d.mode_s], ["u", d.mode_u]].forEach(function (m) {
      modes.appendChild(button(m[1], "btn" + (gpaMode === m[0] ? " on" : ""), function () { gpaMode = m[0]; show(); }));
    });
    body.appendChild(gpaMode === "s" ? gpaSchool(d) : gpaUni(d));
  }
  box.appendChild(modes); box.appendChild(body); show();
  return box;
}

/* ---------- Pomodoro (অবস্থা মডিউলে থাকে, তাই ভাষা বদলালেও টাইমার চলে) ---------- */
var DUR = { focus: 25, short: 5, long: 15 };
var PM = { mode: "focus", left: 25 * 60, running: false, end: 0, id: null, msg: false };
var CIRC = 2 * Math.PI * 88;
function pmCount() { var o = load("tools.pomo", {}); return o.d === todayStr() ? o.n : 0; }
function fmtT(s) { var m = Math.floor(s / 60), r = s % 60; return (m < 10 ? "0" : "") + m + ":" + (r < 10 ? "0" : "") + r; }
function beep() {
  try {
    var C = window.AudioContext || window.webkitAudioContext, c = new C(), o = c.createOscillator(), g = c.createGain();
    o.connect(g); g.connect(c.destination); o.frequency.value = 880; g.gain.value = 0.15; o.start();
    setTimeout(function () { o.stop(); c.close(); }, 700);
  } catch (e) {}
  try { if (navigator.vibrate) navigator.vibrate([200, 100, 200]); } catch (e) {}
}
function pmPaint() {
  var d = UI[lang], t = $("pm-time"), s = $("pm-start"), c = $("pm-count"), m = $("pm-msg"), r = $("pm-ring");
  if (t) t.textContent = fmtT(PM.left);
  if (s) s.textContent = PM.running ? d.pause : d.start;
  if (c) c.textContent = d.sessions + ": " + pmCount();
  if (m) m.textContent = PM.msg ? d.finished : "";
  if (r) r.setAttribute("stroke-dashoffset", (CIRC * (1 - PM.left / (DUR[PM.mode] * 60))).toFixed(1));
}
function pmStop() { if (PM.id) clearInterval(PM.id); PM.id = null; PM.running = false; }
function pmTick() {
  if (!PM.running) return;
  PM.left = Math.max(0, Math.round((PM.end - Date.now()) / 1000));
  if (PM.left <= 0) {
    pmStop();
    if (PM.mode === "focus") save("tools.pomo", { d: todayStr(), n: pmCount() + 1 });
    PM.msg = true; beep(); PM.left = DUR[PM.mode] * 60;
  }
  pmPaint();
}
function pmToggle() {
  if (PM.running) { pmTick(); pmStop(); }
  else { PM.msg = false; if (PM.left <= 0) PM.left = DUR[PM.mode] * 60; PM.end = Date.now() + PM.left * 1000; PM.running = true; PM.id = setInterval(pmTick, 500); }
  pmPaint();
}
function pomodoro() {
  var d = UI[lang], box = el("div", "tl-box tl-pomo"), modes = el("div", "tl-modes");
  ["focus", "short", "long"].forEach(function (m) {
    modes.appendChild(button(d[m] + " " + DUR[m] + "′", "btn" + (PM.mode === m ? " on" : ""), function () {
      pmStop(); PM.mode = m; PM.left = DUR[m] * 60; PM.msg = false; render();
    }));
  });
  var dial = el("div", "tl-dial");
  dial.innerHTML = '<svg viewBox="0 0 200 200" aria-hidden="true"><defs><linearGradient id="pg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" style="stop-color:var(--g1)"/><stop offset="1" style="stop-color:var(--g2)"/></linearGradient></defs><circle cx="100" cy="100" r="88" fill="none" stroke="currentColor" stroke-opacity=".14" stroke-width="12"/><circle id="pm-ring" cx="100" cy="100" r="88" fill="none" stroke="url(#pg)" stroke-width="12" stroke-linecap="round" stroke-dasharray="' + CIRC.toFixed(2) + '" stroke-dashoffset="0" transform="rotate(-90 100 100)"/></svg>';
  var time = el("div", "tl-time"); time.id = "pm-time"; dial.appendChild(time);
  var act = el("div", "tl-actions"), st = button("", "btn pri", pmToggle); st.id = "pm-start";
  act.appendChild(st);
  act.appendChild(button(d.reset, "btn", function () { pmStop(); PM.left = DUR[PM.mode] * 60; PM.msg = false; pmPaint(); }));
  var msg = el("div", "tl-msg"); msg.id = "pm-msg";
  var cnt = el("div", "tl-count"); cnt.id = "pm-count";
  box.appendChild(modes); box.appendChild(dial); box.appendChild(act); box.appendChild(msg); box.appendChild(cnt);
  box.appendChild(el("div", "tl-note", d.keep));
  setTimeout(pmPaint, 0);
  return box;
}

var TOOL = { planner: planner, countdown: countdown, gpa: gpa, pomodoro: pomodoro };
var BLOCK = {
  p: function (b) { return el("p", "tl-p", b.t[lang]); },
  tool: function (b) { return TOOL[b.tool](); }
};

/* ---------- পেজ ---------- */
function render() {
  var d = UI[lang], i = indexOfCurrent(), s = T[i];
  document.documentElement.lang = lang;
  document.title = s.t[lang] + " | " + d.name;
  $("hb").textContent = d.name; $("lang").textContent = d.other;
  $("fn").textContent = d.name; $("fc").textContent = d.contact; $("fm").textContent = d.main;
  $("fr").textContent = "© " + new Date().getFullYear() + " " + d.name + ". " + d.rights + ".";
  hint.textContent = d.hint;
  T.forEach(function (x, k) {
    var p = $("pill-" + x.id); p.textContent = x.e + " " + x.t[lang];
    p.className = k === i ? "tl-on" : "";
    cards[k]._st.textContent = x.t[lang]; cards[k]._sm.textContent = x.d[lang];
  });
  view.style.setProperty("--g1", s.g[0]); view.style.setProperty("--g2", s.g[1]);
  view.textContent = "";
  view.appendChild(el("h1", "tl-title", s.e + " " + s.t[lang]));
  s.b.forEach(function (b) { if (BLOCK[b.k]) view.appendChild(BLOCK[b.k](b)); });
  if (!drag) glide(i);
}
window.addEventListener("hashchange", function () { render(); window.scrollTo(0, 0); });
paint();
render();
})();
