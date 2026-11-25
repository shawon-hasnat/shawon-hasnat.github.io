(function () {
"use strict";
var D = window.PF || { S: [] };
var EMAIL = "shawonhasnatofficials@gmail.com";
var T = {
  bn: { name: "শাওন হাসনাত বাবু", other: "English", contact: "যোগাযোগ", rights: "সর্বস্বত্ব সংরক্ষিত", main: "মূল সাইট" },
  en: { name: "Shawon Hasnat Babu", other: "বাংলা", contact: "Contact", rights: "All rights reserved", main: "Main site" }
};
function $(id) { return document.getElementById(id); }
function el(t, c, x) { var n = document.createElement(t); if (c) n.className = c; if (x != null) n.textContent = x; return n; }
function store(k, v) { try { if (v === undefined) return localStorage.getItem(k); localStorage.setItem(k, v); } catch (e) { return null; } }
var lang = store("lang");
if (lang !== "bn" && lang !== "en") lang = (navigator.language || "").toLowerCase().indexOf("bn") === 0 ? "bn" : "en";
var th = store("theme");
if (th === "dark" || th === "light") document.documentElement.setAttribute("data-theme", th);
function tx(o) { return o ? (o[lang] || o.en || "") : ""; }

var st = document.createElement("style");
st.textContent = ".pv{padding:26px 18px 10px}.pv h1{font-size:clamp(1.6rem,6.5vw,2.4rem);line-height:1.2;margin:0 0 14px;letter-spacing:-.02em}.pv h2{font-size:1.15rem;margin:28px 0 8px}.pp{font-size:1.04rem;max-width:68ch;color:var(--ink)}.nt{padding:12px 16px;border:1px dashed var(--line);border-radius:14px;background:var(--surface);max-width:68ch}.cg{display:grid;gap:12px;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));margin:12px 0}.ci{background:var(--surface);border:1px solid var(--line);border-top:4px solid var(--p);border-radius:18px;padding:14px 16px}.ce{font-size:1.5rem}.ci h3{margin:4px 0;font-size:1rem}.ci p{margin:0 0 8px;font-size:.93rem}.tl{border-left:3px solid var(--p);margin:14px 0 14px 8px;padding-left:20px}.ti{margin-bottom:18px;position:relative}.ti::before{content:\"\";position:absolute;left:-28px;top:7px;width:12px;height:12px;border-radius:50%;background:var(--p);border:3px solid var(--bg)}.ty{font:600 .82rem \"Sora\",sans-serif;color:var(--p)}.ti h3{margin:2px 0;font-size:1.02rem}.ti strong{color:var(--ink);font-weight:600}.ti p{margin:4px 0 0}";
document.head.appendChild(st);

$("site-header").innerHTML = '<div class="w"><div class="bar"><a class="brand" href="/"><span class="logo">S</span><span id="hb"></span></a><div class="tools"><button id="lang" type="button"></button><button id="theme" type="button" aria-label="Light / Dark">◐</button></div></div><nav class="pills" id="pills"></nav></div>';
$("site-footer").innerHTML = '<div class="w"><b class="sx" id="fn"></b><br><span id="fc"></span>: <a href="mailto:' + EMAIL + '">' + EMAIL + '</a><br><a href="/" id="fm"></a> · <span id="fr"></span></div>';
D.S.forEach(function (s) { var a = el("a", "btn"); a.href = "#" + s.id; a.id = "p-" + s.id; $("pills").appendChild(a); });

function isDark() {
  var a = document.documentElement.getAttribute("data-theme");
  return a === "dark" || (a !== "light" && matchMedia("(prefers-color-scheme: dark)").matches);
}
$("theme").onclick = function () { var d = isDark() ? "light" : "dark"; document.documentElement.setAttribute("data-theme", d); store("theme", d); };
$("lang").onclick = function () { lang = lang === "bn" ? "en" : "bn"; store("lang", lang); render(false); };

function block(b) {
  var n, w;
  if (b.k === "p") return el("p", "pp", tx(b.t));
  if (b.k === "h") return el("h2", "", tx(b.t));
  if (b.k === "note") return el("p", "nt", tx(b.t));
  if (b.k === "cards") {
    w = el("div", "cg");
    b.items.forEach(function (i) {
      n = el("div", "ci"); n.appendChild(el("div", "ce", i.e)); n.appendChild(el("h3", "", tx(i.t)));
      if (i.d) n.appendChild(el("p", "", tx(i.d)));
      if (i.href) { var a = el("a", "btn", tx(i.l)); a.href = i.href; n.appendChild(a); }
      w.appendChild(n);
    });
    return w;
  }
  if (b.k === "tl") {
    w = el("div", "tl");
    b.items.forEach(function (i) {
      n = el("div", "ti");
      if (i.y) n.appendChild(el("div", "ty", i.y));
      n.appendChild(el("h3", "", tx(i.t)));
      if (i.s) n.appendChild(el("strong", "", tx(i.s)));
      if (i.d) n.appendChild(el("p", "", tx(i.d)));
      w.appendChild(n);
    });
    return w;
  }
  if (b.k === "links") {
    w = el("div", "cta");
    b.items.forEach(function (i, k) { var a = el("a", k === 0 ? "btn pri" : "btn", tx(i.t)); a.href = i.href; w.appendChild(a); });
    return w;
  }
  return el("span");
}

function render(scroll) {
  var d = T[lang], id = (location.hash || "#home").slice(1);
  var s = D.S.filter(function (x) { return x.id === id; })[0] || D.S[0];
  var v = $("view"); v.textContent = "";
  v.appendChild(el("h1", "", s.e + " " + tx(s.t)));
  s.b.forEach(function (b) { v.appendChild(block(b)); });
  document.documentElement.lang = lang;
  document.title = tx(s.t) + " | " + d.name;
  $("hb").textContent = d.name; $("lang").textContent = d.other;
  $("fn").textContent = d.name; $("fc").textContent = d.contact; $("fm").textContent = d.main;
  $("fr").textContent = "© " + new Date().getFullYear() + " " + d.name + ". " + d.rights + ".";
  D.S.forEach(function (x) { var a = $("p-" + x.id); a.textContent = x.e + " " + tx(x.t); a.className = x.id === s.id ? "btn pri" : "btn"; });
  if (scroll) window.scrollTo(0, 0);
}
window.addEventListener("hashchange", function () { render(true); });
render(false);
})();
