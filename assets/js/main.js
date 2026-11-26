(function () {
"use strict";
/* সেকশন তৈরি হলে এখানে false বদলে true করবে */
var READY = { portfolio: true, science: true, hub: false, tools: true };
var EMAIL = "shawonhasnatofficials@gmail.com";

var UI = {
  bn: { hello: "হ্যালো, আমি", name: "শাওন হাসনাত বাবু",
    tagline: "একজন শিক্ষার্থী, গবেষক ও ওয়েব ডেভেলপার, যে অন্বেষণ, শেখা ও নতুন কিছু তৈরির মাধ্যমে নিজেকে গড়ে তুলতে চায়।",
    cta_portfolio: "আমার Portfolio", cta_explore: "আরও দেখুন",
    explore_title: "তিনটি অংশ, একটার পর একটা", explore_sub: "ঘোরান বা ট্যাপ করুন। সামনের কার্ডে আবার ট্যাপ করলে খুলবে।",
    prev: "‹ আগেরটি", next: "পরেরটি ›", open: "খুলুন", soon: "শীঘ্রই আসছে", other: "English",
    pf_desc: "এটি সাইটের আলাদা জায়গা। আমার পরিচয়, পড়াশোনা ও অর্জনের পূর্ণ বিবরণ এখানে থাকবে।",
    contact: "যোগাযোগ", rights: "সর্বস্বত্ব সংরক্ষিত" },
  en: { hello: "Hello, I am", name: "Shawon Hasnat Babu",
    tagline: "A student, researcher, and web developer striving to grow through exploration, learning, and creating new things.",
    cta_portfolio: "My Portfolio", cta_explore: "Explore",
    explore_title: "Three parts, one after another", explore_sub: "Drag or tap. Tap the front card again to open it.",
    prev: "‹ Previous", next: "Next ›", open: "Open", soon: "Coming soon", other: "বাংলা",
    pf_desc: "This is a separate space on the site, with the full story of my background, studies and achievements.",
    contact: "Contact", rights: "All rights reserved" }
};

var SEC = [
  { id: "portfolio", e: "🎓", c: "--c0",
    n: { bn: "আমার Portfolio", en: "My Portfolio" },
    b: { bn: "পরিচয়, অর্জন ও কাজ", en: "Background, achievements and work" },
    p: { bn: ["Home ও পরিচিতি", "About Me", "Academic Background", "Skills", "Achievements ও Certificates", "Projects", "Activities ও Volunteering", "My Goals", "Contact"],
         en: ["Home & Introduction", "About Me", "Academic Background", "Skills", "Achievements & Certificates", "Projects", "Activities & Volunteering", "My Goals", "Contact"] } },
  { id: "science", e: "🔬", c: "--c1",
    n: { bn: "Easy Science", en: "Easy Science" },
    b: { bn: "Physics ও Mathematics সহজ ভাষায়", en: "Physics and Mathematics made easy" },
    p: { bn: ["Easy Physics", "Easy Mathematics", "সহজ ব্যাখ্যা ও নোট", "Diagram ও Visual Learning", "ছোট Quiz"],
         en: ["Easy Physics", "Easy Mathematics", "Simple Explanations & Notes", "Diagrams & Visual Learning", "Short Quizzes"] } },
  { id: "hub", e: "🧭", c: "--c2",
    n: { bn: "Opportunity Hub", en: "Opportunity Hub" },
    b: { bn: "বিদেশে পড়তে যাওয়ার সুযোগ ও গাইড", en: "Opportunities and guides for studying abroad" },
    p: { bn: ["Scholarship resources", "Study Abroad (দেশভিত্তিক)", "Free online courses", "Competitions ও Olympiads", "Useful educational websites", "Student guides"],
         en: ["Scholarship Resources", "Study Abroad (by country)", "Free Online Courses", "Competitions & Olympiads", "Useful Educational Websites", "Student Guides"] } },
  { id: "tools", e: "🧰", c: "--c3",
    n: { bn: "Useful Tools", en: "Useful Tools" },
    b: { bn: "পড়াশোনার কাজের টুলস", en: "Handy tools for studying" },
    p: { bn: ["Study Planner", "Exam Countdown", "GPA Calculator", "Pomodoro Timer"],
         en: ["Study Planner", "Exam Countdown", "GPA Calculator", "Pomodoro Timer"] } }
];
var ORB = SEC.slice(1);

function $(id) { return document.getElementById(id); }
function el(t, c, x) { var n = document.createElement(t); if (c) n.className = c; if (x != null) n.textContent = x; return n; }
function store(k, v) { try { if (v === undefined) return localStorage.getItem(k); localStorage.setItem(k, v); } catch (e) { return null; } }

var lang = store("lang");
if (lang !== "bn" && lang !== "en") lang = (navigator.language || "").toLowerCase().indexOf("bn") === 0 ? "bn" : "en";
var th = store("theme");
if (th === "dark" || th === "light") document.documentElement.setAttribute("data-theme", th);

/* ---------- header & footer ---------- */
$("site-header").innerHTML = '<div class="w"><div class="bar"><a class="brand" href="/"><span class="logo">S</span><span id="hb"></span></a><div class="tools"><button id="lang" type="button"></button><button id="theme" type="button" aria-label="Light / Dark">◐</button></div></div><nav class="pills" id="pills"></nav></div>';
$("site-footer").innerHTML = '<div class="w"><b class="sx" id="fn"></b><br><span id="fc"></span>: <a href="mailto:' + EMAIL + '">' + EMAIL + '</a><br><span id="fr"></span></div>';

SEC.forEach(function (s, i) {
  var b = el("button", ""); b.type = "button"; b.id = "pill-" + s.id;
  b.onclick = function () {
    if (i === 0) { $("portfolio-card").scrollIntoView(); }
    else { focus(i - 1); $("explore").scrollIntoView(); }
  };
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
$("lang").onclick = function () { lang = lang === "bn" ? "en" : "bn"; store("lang", lang); applyLang(); };

/* ---------- portfolio card ---------- */
function renderPortfolio() {
  var s = SEC[0], d = UI[lang], box = $("portfolio-card");
  box.className = "pf"; box.textContent = "";
  box.appendChild(el("h3", "", s.e + " " + s.n[lang]));
  box.appendChild(el("p", "", d.pf_desc));
  var chips = el("div", "chips");
  s.p[lang].forEach(function (x) { chips.appendChild(el("span", "", x)); });
  box.appendChild(chips);
  if (READY.portfolio) { var a = el("a", "btn pri", d.open); a.href = "/portfolio/"; box.appendChild(a); }
  else { var z = el("span", "btn", d.soon); z.style.opacity = ".6"; box.appendChild(z); }
}

/* ---------- 3D orbit ---------- */
var R = 165, a = 0, target = null, drag = false, hold = 0, moved = 0, sx = 0, sa = 0, cur = -1;
var reduce = window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches;
var stage = $("stage"), panel = $("panel");
stage.className = "stage";
stage.innerHTML = '<div class="world" id="world"><div class="orbit"></div><div class="nuc" aria-hidden="true">S</div></div>';
stage.insertAdjacentHTML("afterend", '<div class="ctrl"><button id="prev" type="button"></button><button id="next" type="button"></button></div>');
var world = $("world");
var cards = ORB.map(function (s, j) {
  var d = el("div", "card"); d.tabIndex = 0; d.setAttribute("role", "button");
  d.style.setProperty("--c", "var(" + s.c + ")");
  d.innerHTML = "<i>" + s.e + "</i><div><strong></strong><span></span></div>";
  function act() { if (j === cur) { if (READY[s.id]) location.href = "/" + s.id + "/"; } else focus(j); }
  d.addEventListener("click", function () { if (moved < 6) act(); });
  d.addEventListener("keydown", function (e) { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); act(); } });
  world.appendChild(d); return d;
});
function focus(j) { target = -j * 120 + 360 * Math.round((a + j * 120) / 360); hold = Date.now() + 4000; }
function step(k) { target = Math.round(a / 120) * 120 + k * 120; hold = Date.now() + 4000; }
function show(j) {
  var s = ORB[j], d = UI[lang]; cur = j;
  panel.className = "panel"; panel.style.setProperty("--a", "var(" + s.c + ")"); panel.textContent = "";
  panel.appendChild(el("h3", "", s.e + " " + s.n[lang]));
  panel.appendChild(el("p", "", s.b[lang]));
  var ul = el("ul"); s.p[lang].forEach(function (x) { ul.appendChild(el("li", "", x)); }); panel.appendChild(ul);
  if (READY[s.id]) { var g = el("a", "btn go", d.open); g.href = "/" + s.id + "/"; panel.appendChild(g); }
  else panel.appendChild(el("span", "tag", d.soon));
}
function tick() {
  if (target !== null) { a += (target - a) * 0.12; if (Math.abs(target - a) < 0.2) { a = target; target = null; } }
  else if (!drag && !reduce && Date.now() > hold) { a += 0.2; }
  for (var j = 0; j < 3; j++) {
    var t = (j * 120 + a) * Math.PI / 180, x = R * Math.sin(t), z = R * Math.cos(t);
    cards[j].style.transform = "translate3d(" + x.toFixed(1) + "px,0," + (z - R).toFixed(1) + "px)";
    cards[j].style.opacity = (0.35 + 0.65 * (z + R) / (2 * R)).toFixed(2);
    cards[j].style.zIndex = Math.round(z + R);
  }
  var f = ((Math.round(-a / 120) % 3) + 3) % 3; if (f !== cur) show(f);
  requestAnimationFrame(tick);
}
stage.addEventListener("pointerdown", function (e) { drag = true; moved = 0; sx = e.clientX; sa = a; target = null; });
window.addEventListener("pointermove", function (e) { if (!drag) return; moved = Math.max(moved, Math.abs(e.clientX - sx)); a = sa + (e.clientX - sx) * 0.5; });
window.addEventListener("pointerup", function () { if (drag) { drag = false; hold = Date.now() + 3000; } });
$("prev").onclick = function () { step(1); };
$("next").onclick = function () { step(-1); };

/* ---------- language ---------- */
function applyLang() {
  var d = UI[lang];
  document.documentElement.lang = lang;
  document.title = UI.en.name + " | " + UI.bn.name;
  document.querySelectorAll("[data-i18n]").forEach(function (n) { var v = d[n.getAttribute("data-i18n")]; if (v) n.textContent = v; });
  $("hb").textContent = d.name; $("lang").textContent = d.other;
  $("prev").textContent = d.prev; $("next").textContent = d.next;
  SEC.forEach(function (s) { $("pill-" + s.id).textContent = s.e + " " + s.n[lang]; });
  ORB.forEach(function (s, j) { var c = cards[j]; c.querySelector("strong").textContent = s.n[lang]; c.querySelector("span").textContent = s.b[lang]; });
  $("fn").textContent = d.name; $("fc").textContent = d.contact;
  $("fr").textContent = "© " + new Date().getFullYear() + " " + d.name + ". " + d.rights + ".";
  renderPortfolio(); show(cur < 0 ? 0 : cur);
}
applyLang();
tick();
})();
