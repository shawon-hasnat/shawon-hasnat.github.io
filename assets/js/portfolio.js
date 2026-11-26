(function () {
"use strict";
var EMAIL = "shawonhasnatofficials@gmail.com";
var UI = {
  bn: { name: "শাওন হাসনাত বাবু", other: "English", main: "মূল সাইট", contact: "যোগাযোগ", rights: "সর্বস্বত্ব সংরক্ষিত",
        hint: "কার্ড টেনে বা ট্যাপ করে সেকশন বেছে নিন", prev: "আগের", next: "পরের" },
  en: { name: "Shawon Hasnat Babu", other: "বাংলা", main: "Main site", contact: "Contact", rights: "All rights reserved",
        hint: "Drag or tap the cards to pick a section", prev: "Previous", next: "Next" }
};
/* প্রতিটি সেকশনের রং। নতুন সেকশন যোগ করলে নিজে থেকে এই রংগুলো ঘুরে ঘুরে নেবে।
   নির্দিষ্ট সেকশনের রং চাইলে নিচের COLOR-এ id দিয়ে লিখুন। */
var PAL = [["#e11d48", "#f97316"], ["#7c3aed", "#ec4899"], ["#2563eb", "#06b6d4"], ["#0d9488", "#22c55e"],
           ["#d97706", "#f43f5e"], ["#db2777", "#8b5cf6"], ["#16a34a", "#0ea5e9"], ["#ea580c", "#eab308"], ["#4f46e5", "#0ea5e9"]];
var COLOR = {};
var S = window.PF.S, N = S.length;
function $(id) { return document.getElementById(id); }
function el(t, c, x) { var n = document.createElement(t); if (c) n.className = c; if (x != null) n.textContent = x; return n; }
function store(k, v) { try { if (v === undefined) return localStorage.getItem(k); localStorage.setItem(k, v); } catch (e) { return null; } }
function tr(o) { return o ? (o[lang] != null ? o[lang] : o.en) : ""; }
function grad(i) { return COLOR[S[i].id] || PAL[i % PAL.length]; }

var lang = store("lang");
if (lang !== "bn" && lang !== "en") lang = (navigator.language || "").toLowerCase().indexOf("bn") === 0 ? "bn" : "en";
var th = store("theme");
if (th === "dark" || th === "light") document.documentElement.setAttribute("data-theme", th);
var reduce = window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches;

/* ---------- header & footer (মূল সাইটের মতোই) ---------- */
$("site-header").innerHTML = '<div class="w"><div class="bar"><a class="brand" href="/"><span class="logo">S</span><span id="hb"></span></a><div class="tools"><button id="lang" type="button"></button><button id="theme" type="button" aria-label="Light / Dark">◐</button></div></div><nav class="pills" id="pills"></nav></div>';
$("site-footer").innerHTML = '<div class="w"><b class="sx" id="fn"></b><br><span id="fc"></span>: <a href="mailto:' + EMAIL + '">' + EMAIL + '</a><br><a href="/" id="fm"></a> · <span id="fr"></span></div>';

S.forEach(function (s) {
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

/* ---------- 3D কভারফ্লো ডেক ---------- */
function indexOfCurrent() {
  var id = (location.hash || "").slice(1), i;
  for (i = 0; i < N; i++) if (S[i].id === id) return i;
  return 0;
}
var view = $("view");
var wrap = el("div", "w pf-wrap"), stage = el("div", "pf-stage"), deck = el("div", "pf-deck");
var nav = el("div", "pf-nav"), hint = el("span", "pf-hint"), dots = el("div", "pf-dots");
var bPrev = el("button", "pf-arrow", "‹"), bNext = el("button", "pf-arrow", "›");
bPrev.type = "button"; bNext.type = "button";
stage.tabIndex = 0; stage.setAttribute("role", "listbox");
stage.appendChild(deck); stage.appendChild(el("div", "pf-floor"));
var cards = S.map(function (s, i) {
  var c = el("div", "pf-card"); c.setAttribute("role", "option");
  var g = grad(i); c.style.setProperty("--g1", g[0]); c.style.setProperty("--g2", g[1]);
  c._st = el("strong"); c._sm = el("small", "", (i + 1 < 10 ? "0" : "") + (i + 1) + " / " + (N < 10 ? "0" : "") + N);
  var box = el("div"); box.appendChild(c._st); box.appendChild(c._sm);
  c.appendChild(el("i", "", s.e)); c.appendChild(box);
  deck.appendChild(c); return c;
});
var dotEls = S.map(function () { var d = el("span"); dots.appendChild(d); return d; });
nav.appendChild(bPrev); nav.appendChild(hint); nav.appendChild(bNext);
wrap.appendChild(stage); wrap.appendChild(nav); wrap.appendChild(dots);
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
    c.className = "pf-card" + (a < 0.5 ? " front" : "");
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
  if (i !== indexOfCurrent()) location.hash = S[i].id;
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
bPrev.onclick = function () { go(indexOfCurrent() - 1); };
bNext.onclick = function () { go(indexOfCurrent() + 1); };

/* ---------- ব্লক রেন্ডার (data/portfolio.js-এর k: p, h, note, links, cards, tl) ---------- */
function linkEl(i, cls) {
  var a = el("a", cls, tr(i.t || i.l)); a.href = i.href;
  if (/^https?:/i.test(i.href)) { a.target = "_blank"; a.rel = "noopener"; }
  return a;
}
var BLOCK = {
  p: function (b) { return el("p", "pf-p", tr(b.t)); },
  h: function (b) { return el("h2", "pf-h", tr(b.t)); },
  note: function (b) { return el("div", "pf-note", tr(b.t)); },
  links: function (b) {
    var w = el("div", "pf-links");
    b.items.forEach(function (i, k) { w.appendChild(linkEl(i, "pf-btn" + (k === 0 ? " pri" : ""))); });
    return w;
  },
  cards: function (b) {
    var w = el("div", "pf-cards");
    b.items.forEach(function (i) {
      var c = el("div", "pf-c");
      if (i.e) c.appendChild(el("span", "pf-ci", i.e));
      c.appendChild(el("h3", "", tr(i.t)));
      if (i.d) c.appendChild(el("p", "", tr(i.d)));
      if (i.href) c.appendChild(linkEl({ href: i.href, t: i.l || { bn: "দেখুন", en: "Visit" } }, "pf-btn pri"));
      c.addEventListener("pointermove", function (e) {
        if (e.pointerType !== "mouse" || reduce || !c.getBoundingClientRect) return;
        var r = c.getBoundingClientRect(), x = (e.clientX - r.left) / r.width - 0.5, y = (e.clientY - r.top) / r.height - 0.5;
        c.style.setProperty("--ry", (x * 10).toFixed(1) + "deg"); c.style.setProperty("--rx", (-y * 10).toFixed(1) + "deg");
      });
      c.addEventListener("pointerleave", function () { c.style.setProperty("--ry", "0deg"); c.style.setProperty("--rx", "0deg"); });
      w.appendChild(c);
    });
    return w;
  },
  tl: function (b) {
    var ul = el("ul", "pf-tl");
    b.items.forEach(function (i) {
      var li = el("li", "pf-ti");
      if (i.y) li.appendChild(el("span", "pf-ty", i.y));
      li.appendChild(el("h3", "", tr(i.t)));
      if (i.s) li.appendChild(el("p", "pf-ts", tr(i.s)));
      if (i.d) li.appendChild(el("p", "pf-td", tr(i.d)));
      ul.appendChild(li);
    });
    return ul;
  }
};

/* ---------- পেজ ---------- */
function render() {
  var d = UI[lang], i = indexOfCurrent(), s = S[i], g = grad(i);
  document.documentElement.lang = lang;
  document.title = tr(s.t) + " | " + d.name;
  $("hb").textContent = d.name; $("lang").textContent = d.other;
  $("fn").textContent = d.name; $("fc").textContent = d.contact; $("fm").textContent = d.main;
  $("fr").textContent = "© " + new Date().getFullYear() + " " + d.name + ". " + d.rights + ".";
  hint.textContent = d.hint;
  bPrev.setAttribute("aria-label", d.prev); bNext.setAttribute("aria-label", d.next);
  bPrev.disabled = i === 0; bNext.disabled = i === N - 1;
  S.forEach(function (x, k) {
    var p = $("pill-" + x.id); p.textContent = x.e + " " + tr(x.t);
    p.className = k === i ? "pf-on" : "";
    cards[k]._st.textContent = tr(x.t);
    dotEls[k].className = k === i ? "on" : "";
  });
  [wrap, view].forEach(function (n) { n.style.setProperty("--g1", g[0]); n.style.setProperty("--g2", g[1]); });
  view.textContent = "";
  view.appendChild(el("h1", "pf-title", s.e + " " + tr(s.t)));
  var sheet = el("div", "pf-sheet pf-in");
  s.b.forEach(function (b) { if (BLOCK[b.k]) sheet.appendChild(BLOCK[b.k](b)); });
  view.appendChild(sheet);
  if (!drag) glide(i);
}
window.addEventListener("hashchange", function () { render(); window.scrollTo(0, 0); });
paint();
render();
})();
