(function () {
"use strict";
var EMAIL = "shawonhasnatofficials@gmail.com";
var UI = {
  bn: { name: "শাওন হাসনাত বাবু", other: "English", main: "মূল সাইট", contact: "যোগাযোগ", rights: "সর্বস্বত্ব সংরক্ষিত",
        home: "হোম", back: "← Opportunity Hub", kicker: "Opportunity Hub",
        slogan: "সুযোগ আবিষ্কার করো। দক্ষতা বাড়াও। ভবিষ্যৎ গড়ো।",
        intro: "স্কলারশিপ, বিদেশে পড়াশোনা, প্রতিযোগিতা, ফ্রি কোর্স, গবেষণা ও দক্ষতা উন্নয়নের সুযোগ এক জায়গায়। বিনামূল্যের এই প্ল্যাটফর্ম বিশেষভাবে বাংলাদেশের শিক্ষার্থীদের জন্য।",
        ph: "স্কলারশিপ, কোর্স, প্রতিযোগিতা, গাইড খুঁজুন…", sr: "সার্চের ফলাফল", none: "কিছু পাওয়া যায়নি। অন্য শব্দে খুঁজে দেখুন।",
        feat: "Featured Opportunities", featS: "বাছাই করা সুযোগ", dead: "Upcoming Deadlines", deadS: "আসন্ন শেষ তারিখ",
        cats: "Main Category Grid", catsS: "সব বিভাগ এক নজরে", guides: "Featured Student Guides", guidesS: "শিক্ষার্থীদের জন্য ব্যবহারিক গাইড",
        learn: "Free Learning Resources", learnS: "বিনামূল্যে শেখার সুযোগ", recent: "Recently Added Resources", recentS: "সম্প্রতি যোগ হয়েছে",
        cal: "Opportunity Calendar", calS: "তারিখ অনুযায়ী সুযোগ", sug: "Suggest a Resource", sugS: "নতুন কোনো রিসোর্স জানা থাকলে আমাদের জানান।",
        emptyItems: "এই অংশে এখনো কিছু যোগ হয়নি। যাচাই করা তথ্য পেলেই এখানে আসবে।",
        emptyDead: "এখনো কোনো যাচাই করা শেষ তারিখ যোগ হয়নি। তারিখ অফিশিয়াল সাইটে নিশ্চিত হলেই এখানে দেখানো হবে।",
        soon: "শীঘ্রই আসছে", items: "টি রিসোর্স", planned: "এই অংশে যা থাকবে", plannedGuides: "যে গাইডগুলো আসছে",
        soonText: "এই অংশের তথ্য যাচাই চলছে। অফিশিয়াল সোর্স থেকে নিশ্চিত হওয়া তথ্যই এখানে প্রকাশ করা হবে।",
        all: "সব", official: "অফিশিয়াল লিংক", verified: "সর্বশেষ যাচাই", daysLeft: function (n) { return n === 0 ? "আজই শেষ" : n + " দিন বাকি"; }, dl: "শেষ তারিখ",
        fType: "ধরন", fTitle: "রিসোর্সের নাম", fLink: "অফিশিয়াল লিংক", fNote: "কিছু বলতে চান? (ঐচ্ছিক)", send: "ইমেইল দিয়ে পাঠান",
        fErr: "নাম ও লিংক দুটোই লিখুন।", fOk: "আপনার ইমেইল অ্যাপ খুলেছে। সেখান থেকে পাঠিয়ে দিন।",
        fNoteBottom: "জমা দেওয়ার পর আমি যাচাই করে তারপর যোগ করব। সব সাজেশন যোগ হবে, এমন নিশ্চয়তা নেই।",
        types: ["Scholarship", "Competition", "Free course", "Educational website", "Student guide", "Event / program", "Other"],
        policy: "এখানের তথ্য অফিশিয়াল সোর্স দেখে যাচাই করা। আবেদনের আগে অবশ্যই অফিশিয়াল সাইটে শেষ তারিখ ও শর্ত মিলিয়ে নিন। এটি ভর্তি, বৃত্তি বা ভিসার কোনো নিশ্চয়তা দেয় না।" },
  en: { name: "Shawon Hasnat Babu", other: "বাংলা", main: "Main site", contact: "Contact", rights: "All rights reserved",
        home: "Home", back: "← Opportunity Hub", kicker: "Opportunity Hub",
        slogan: "Discover opportunities. Build skills. Shape your future.",
        intro: "Scholarships, studying abroad, competitions, free courses, research and skill development in one place. A free platform made especially for students in Bangladesh.",
        ph: "Search scholarships, courses, competitions, guides…", sr: "Search results", none: "Nothing found. Try different words.",
        feat: "Featured Opportunities", featS: "Hand-picked opportunities", dead: "Upcoming Deadlines", deadS: "Deadlines coming up",
        cats: "Main Category Grid", catsS: "All sections at a glance", guides: "Featured Student Guides", guidesS: "Practical guides for students",
        learn: "Free Learning Resources", learnS: "Learn for free", recent: "Recently Added Resources", recentS: "Newly added",
        cal: "Opportunity Calendar", calS: "Opportunities by date", sug: "Suggest a Resource", sugS: "Know a useful resource? Tell us.",
        emptyItems: "Nothing here yet. Verified entries will appear as they are added.",
        emptyDead: "No verified deadlines yet. A date is shown only after it is confirmed on the official site.",
        soon: "Coming soon", items: " resources", planned: "What this section will cover", plannedGuides: "Guides on the way",
        soonText: "We are still verifying information for this section. Only details confirmed from official sources will be published.",
        all: "All", official: "Official link", verified: "Last verified", daysLeft: function (n) { return n === 0 ? "Ends today" : n + (n === 1 ? " day left" : " days left"); }, dl: "Deadline",
        fType: "Type", fTitle: "Resource name", fLink: "Official link", fNote: "Anything to add? (optional)", send: "Send by email",
        fErr: "Please enter both the name and the link.", fOk: "Your email app has opened. Send it from there.",
        fNoteBottom: "I will verify each suggestion before adding it. Not every suggestion will be added.",
        types: ["Scholarship", "Competition", "Free course", "Educational website", "Student guide", "Event / program", "Other"],
        policy: "Information here is checked against official sources. Always confirm deadlines and requirements on the official site before applying. Nothing here guarantees admission, funding or a visa." }
};
var H = window.HUB, SEC = H.sections, ITEMS = H.items || [];
function $(id) { return document.getElementById(id); }
function el(t, c, x) { var n = document.createElement(t); if (c) n.className = c; if (x != null) n.textContent = x; return n; }
function store(k, v) { try { if (v === undefined) return localStorage.getItem(k); localStorage.setItem(k, v); } catch (e) { return null; } }
function tr(o) { return !o ? "" : typeof o === "string" ? o : (o[lang] != null ? o[lang] : o.en); }
function both(o) { return !o ? "" : typeof o === "string" ? o : (o.bn || "") + " " + (o.en || ""); }
function secById(id) { for (var i = 0; i < SEC.length; i++) if (SEC[i].id === id) return SEC[i]; return null; }
function secItems(id) { return ITEMS.filter(function (x) { return x.s === id; }); }
function todayDate() { var n = new Date(); return new Date(n.getFullYear(), n.getMonth(), n.getDate()); }
function daysLeft(s) { var p = s.split("-"); return Math.round((new Date(+p[0], +p[1] - 1, +p[2]) - todayDate()) / 864e5); }
function fmtDate(s) {
  try { return new Date(s + "T00:00:00").toLocaleDateString(lang === "bn" ? "bn-BD" : "en-GB", { day: "numeric", month: "short", year: "numeric" }); }
  catch (e) { return s; }
}

var lang = store("lang");
if (lang !== "bn" && lang !== "en") lang = (navigator.language || "").toLowerCase().indexOf("bn") === 0 ? "bn" : "en";
var th = store("theme");
if (th === "dark" || th === "light") document.documentElement.setAttribute("data-theme", th);
var reduce = window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches;

/* ---------- header & footer ---------- */
$("site-header").innerHTML = '<div class="w"><div class="bar"><a class="brand" href="/"><span class="logo">S</span><span id="hbn"></span></a><div class="tools"><button id="lang" type="button"></button><button id="theme" type="button" aria-label="Light / Dark">◐</button></div></div><nav class="pills" id="pills"></nav></div>';
$("site-footer").innerHTML = '<div class="w"><b class="sx" id="fn"></b><br><span id="fc"></span>: <a href="mailto:' + EMAIL + '">' + EMAIL + '</a><br><a href="/" id="fm"></a> · <span id="fr"></span><p class="hb-note" id="fp"></p></div>';
var homePill = el("button", ""); homePill.type = "button"; homePill.id = "pill-home"; homePill.onclick = function () { location.hash = ""; };
$("pills").appendChild(homePill);
SEC.forEach(function (s) {
  var b = el("button", ""); b.type = "button"; b.id = "pill-" + s.id;
  b.onclick = function () { location.hash = "s/" + s.id; };
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

/* ---------- ছোট উপাদান ---------- */
function block(title, sub, content) {
  var s = el("section", "hb-sec"); s.appendChild(el("h2", "", title));
  if (sub) s.appendChild(el("p", "hb-sub", sub));
  s.appendChild(content); return s;
}
function empty(text) { return el("div", "hb-empty", text); }
function btn(label, href, pri, ext) {
  var a = el("a", "hb-btn" + (pri ? " pri" : ""), label); a.href = href;
  if (ext) { a.target = "_blank"; a.rel = "noopener"; }
  return a;
}
function itemCard(i) {
  var d = UI[lang], c = el("article", "hb-item");
  c.appendChild(el("h3", "", tr(i.t)));
  if (i.d) c.appendChild(el("p", "", tr(i.d)));
  var meta = (i.meta || []).slice();
  if (i.cat) meta.unshift({ k: { bn: "ক্যাটাগরি", en: "Category" }, v: i.cat });
  if (meta.length) {
    var ul = el("ul", "hb-meta");
    meta.forEach(function (m) { var li = el("li"); li.appendChild(el("b", "", tr(m.k) + ":")); li.appendChild(document.createTextNode(" " + tr(m.v))); ul.appendChild(li); });
    c.appendChild(ul);
  }
  if (i.deadline) {
    var n = daysLeft(i.deadline);
    c.appendChild(el("p", "hb-dl", d.dl + ": " + fmtDate(i.deadline) + (n >= 0 ? " · " + d.daysLeft(n) : "")));
  }
  if (i.verified) c.appendChild(el("p", "hb-ver", d.verified + ": " + fmtDate(i.verified)));
  if (i.url) { var a = el("div", "hb-actions"); a.appendChild(btn(d.official, i.url, true, true)); c.appendChild(a); }
  return c;
}
function listOf(arr) { var w = el("div", "hb-list"); arr.forEach(function (i) { w.appendChild(itemCard(i)); }); return w; }
function upcoming() {
  return ITEMS.filter(function (i) { return i.deadline && daysLeft(i.deadline) >= 0; })
    .sort(function (a, b) { return a.deadline < b.deadline ? -1 : a.deadline > b.deadline ? 1 : 0; });
}

/* ---------- সার্চ ---------- */
function search(q) {
  q = q.trim().toLowerCase(); if (!q) return null;
  var out = [];
  SEC.forEach(function (s) {
    var hay = (both(s.t) + " " + both(s.d) + " " + (s.cats || []).map(both).join(" ") + " " + (s.plan || []).map(both).join(" ")).toLowerCase();
    if (hay.indexOf(q) > -1) out.push({ title: tr(s.t), sub: tr(s.d), href: "#s/" + s.id });
  });
  ITEMS.forEach(function (i) {
    var hay = (both(i.t) + " " + both(i.d) + " " + (i.tags || []).join(" ") + " " + both(i.cat)).toLowerCase();
    if (hay.indexOf(q) > -1) {
      var s = secById(i.s);
      out.push({ title: tr(i.t), sub: (s ? tr(s.t) + " · " : "") + tr(i.d), href: i.url || "#s/" + i.s, ext: !!i.url });
    }
  });
  return out;
}
function searchBox() {
  var d = UI[lang], w = el("div"), box = el("div", "hb-search"), inp = el("input");
  inp.type = "search"; inp.placeholder = d.ph; inp.setAttribute("aria-label", d.ph); inp.value = lastQuery;
  var res = el("div");
  function show() {
    lastQuery = inp.value; res.textContent = "";
    var r = search(inp.value); if (!r) return;
    if (!r.length) { res.appendChild(el("p", "hb-noresult", d.none)); return; }
    var ul = el("ul", "hb-results");
    r.slice(0, 12).forEach(function (x) {
      var li = el("li"), a = el("a"); a.href = x.href; if (x.ext) { a.target = "_blank"; a.rel = "noopener"; }
      a.appendChild(el("strong", "", x.title)); a.appendChild(el("small", "", x.sub)); li.appendChild(a); ul.appendChild(li);
    });
    res.appendChild(ul);
  }
  inp.addEventListener("input", show);
  box.appendChild(inp); w.appendChild(box); w.appendChild(res); show();
  return w;
}
var lastQuery = "";

/* ---------- ক্যাটাগরি গ্রিড ---------- */
function tilt(c) {
  c.addEventListener("pointermove", function (e) {
    if (e.pointerType !== "mouse" || reduce || !c.getBoundingClientRect) return;
    var r = c.getBoundingClientRect(), x = (e.clientX - r.left) / r.width - 0.5, y = (e.clientY - r.top) / r.height - 0.5;
    c.style.setProperty("--ry", (x * 8).toFixed(1) + "deg"); c.style.setProperty("--rx", (-y * 8).toFixed(1) + "deg");
  });
  c.addEventListener("pointerleave", function () { c.style.setProperty("--ry", "0deg"); c.style.setProperty("--rx", "0deg"); });
}
function grid() {
  var d = UI[lang], g = el("div", "hb-grid");
  SEC.forEach(function (s) {
    var c = el("a", "hb-cat"); c.href = "#s/" + s.id;
    c.appendChild(el("i", "", s.e)); c.appendChild(el("strong", "", tr(s.t))); c.appendChild(el("p", "", tr(s.d)));
    var n = secItems(s.id).length;
    c.appendChild(el("span", "hb-badge" + (n ? "" : " soon"), n ? n + d.items : d.soon));
    tilt(c); g.appendChild(c);
  });
  return g;
}

/* ---------- ক্যালেন্ডার ---------- */
function calendar() {
  var up = upcoming(), d = UI[lang];
  if (!up.length) return empty(d.emptyDead);
  var w = el("div", "hb-cal"), cur = "", ul = null;
  up.forEach(function (i) {
    var p = i.deadline.split("-"), key = p[0] + "-" + p[1];
    if (key !== cur) {
      cur = key; var dt = new Date(+p[0], +p[1] - 1, 1);
      w.appendChild(el("h3", "", dt.toLocaleDateString(lang === "bn" ? "bn-BD" : "en-GB", { month: "long", year: "numeric" })));
      ul = el("ul"); w.appendChild(ul);
    }
    var li = el("li"); li.appendChild(el("b", "", String(+p[2])));
    var t = el("span", "", tr(i.t) + " · " + d.daysLeft(daysLeft(i.deadline))); li.appendChild(t); ul.appendChild(li);
  });
  return w;
}

/* ---------- Suggest ফর্ম ---------- */
function suggestForm() {
  var d = UI[lang], f = el("form", "hb-form"), msg = el("div", "hb-msg");
  function row(label, node) { var l = el("label", "", label); l.appendChild(node); f.appendChild(l); return node; }
  var type = el("select"); d.types.forEach(function (t) { var o = el("option", "", t); o.value = t; type.appendChild(o); });
  row(d.fType, type);
  var title = el("input"); title.type = "text"; title.maxLength = 120; row(d.fTitle, title);
  var link = el("input"); link.type = "url"; link.placeholder = "https://"; row(d.fLink, link);
  var note = el("textarea"); note.maxLength = 500; row(d.fNote, note);
  var go = el("button", "hb-btn pri", d.send); go.type = "submit";
  f.appendChild(go); f.appendChild(msg);
  f.addEventListener("submit", function (e) {
    e.preventDefault();
    if (!title.value.trim() || !link.value.trim()) { msg.textContent = d.fErr; return; }
    var body = "Type: " + type.value + "\nName: " + title.value.trim() + "\nLink: " + link.value.trim() + "\nNote: " + note.value.trim();
    location.href = "mailto:" + EMAIL + "?subject=" + encodeURIComponent("Opportunity Hub suggestion: " + title.value.trim()) + "&body=" + encodeURIComponent(body);
    msg.textContent = d.fOk;
  });
  var w = el("div"); w.appendChild(f); w.appendChild(el("p", "hb-note", d.fNoteBottom));
  return w;
}

/* ---------- হোম ---------- */
function home() {
  var d = UI[lang], page = el("div", "hb-page");
  var hero = el("section", "hb-hero");
  hero.appendChild(el("p", "hb-kicker", d.kicker)); hero.appendChild(el("h1", "", "Opportunity Hub"));
  hero.appendChild(el("p", "hb-slogan", d.slogan)); hero.appendChild(el("p", "hb-intro", d.intro));
  hero.appendChild(searchBox()); page.appendChild(hero);

  var feat = ITEMS.filter(function (i) { return i.featured; });
  page.appendChild(block(d.feat, d.featS, feat.length ? listOf(feat.slice(0, 6)) : empty(d.emptyItems)));
  var up = upcoming();
  page.appendChild(block(d.dead, d.deadS, up.length ? listOf(up.slice(0, 5)) : empty(d.emptyDead)));
  page.appendChild(block(d.cats, d.catsS, grid()));
  var gd = secItems("guides");
  page.appendChild(block(d.guides, d.guidesS, gd.length ? listOf(gd.slice(0, 4)) : empty(d.emptyItems)));
  var ln = secItems("learn");
  page.appendChild(block(d.learn, d.learnS, ln.length ? listOf(ln.slice(0, 4)) : empty(d.emptyItems)));
  var rc = ITEMS.filter(function (i) { return i.added; }).sort(function (a, b) { return a.added < b.added ? 1 : a.added > b.added ? -1 : 0; });
  page.appendChild(block(d.recent, d.recentS, rc.length ? listOf(rc.slice(0, 6)) : empty(d.emptyItems)));
  page.appendChild(block(d.cal, d.calS, calendar()));
  page.appendChild(block(d.sug, d.sugS, suggestForm()));
  return page;
}

/* ---------- সেকশন পেজ ---------- */
function sectionPage(s) {
  var d = UI[lang], page = el("div", "hb-page"), items = secItems(s.id), cur = null;
  var back = el("a", "hb-back", d.back); back.href = "#"; page.appendChild(back);
  page.appendChild(el("h1", "", s.e + " " + tr(s.t))); page.appendChild(el("p", "hb-lead", tr(s.d)));
  var body = el("div");
  function draw() {
    body.textContent = "";
    if (!items.length) {
      body.appendChild(empty(d.soonText));
      if (s.plan) {
        body.appendChild(el("h2", "", d.plannedGuides));
        var ol = el("ol", "hb-plan"); s.plan.forEach(function (p) { ol.appendChild(el("li", "", tr(p))); }); body.appendChild(ol);
      } else if (s.cats) {
        body.appendChild(el("h2", "", d.planned));
        var ul = el("ul", "hb-chips"); s.cats.forEach(function (c) { ul.appendChild(el("li", "hb-chip", tr(c))); }); body.appendChild(ul);
      }
      return;
    }
    var names = []; items.forEach(function (i) { var c = tr(i.cat); if (c && names.indexOf(c) < 0) names.push(c); });
    if (names.length) {
      var chips = el("div", "hb-chips");
      [null].concat(names).forEach(function (n) {
        var b = el("button", "hb-chip" + (cur === n ? " on" : ""), n === null ? d.all : n); b.type = "button";
        b.onclick = function () { cur = n; draw(); }; chips.appendChild(b);
      });
      body.appendChild(chips);
    }
    body.appendChild(listOf(items.filter(function (i) { return cur === null || tr(i.cat) === cur; })));
  }
  draw(); page.appendChild(body);
  return page;
}

/* ---------- রাউটার ---------- */
function route() {
  var h = (location.hash || "").replace(/^#\/?/, "").split("/");
  if (h[0] === "s" && secById(h[1])) return { kind: "s", s: secById(h[1]) };
  return { kind: "home" };
}
function render() {
  var d = UI[lang], r = route(), v = $("view");
  document.documentElement.lang = lang;
  document.title = (r.kind === "s" ? tr(r.s.t) : "Opportunity Hub") + " | " + d.name;
  $("hbn").textContent = d.name; $("lang").textContent = d.other;
  $("fn").textContent = d.name; $("fc").textContent = d.contact; $("fm").textContent = d.main; $("fp").textContent = d.policy;
  $("fr").textContent = "© " + new Date().getFullYear() + " " + d.name + ". " + d.rights + ".";
  homePill.textContent = "🏠 " + d.home; homePill.className = r.kind === "home" ? "hb-on" : "";
  SEC.forEach(function (s) { var p = $("pill-" + s.id); p.textContent = s.e + " " + tr(s.t); p.className = r.kind === "s" && r.s.id === s.id ? "hb-on" : ""; });
  v.textContent = "";
  v.appendChild(r.kind === "s" ? sectionPage(r.s) : home());
}
window.addEventListener("hashchange", function () { render(); window.scrollTo(0, 0); });
render();
})();
