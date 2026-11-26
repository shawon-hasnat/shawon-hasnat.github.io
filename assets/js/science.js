(function () {
"use strict";
var EMAIL = "shawonhasnatofficials@gmail.com";
var UI = {
  bn: { name: "শাওন হাসনাত বাবু", other: "English", main: "মূল সাইট", contact: "যোগাযোগ", rights: "সর্বস্বত্ব সংরক্ষিত",
        formula: "সূত্র", example: "উদাহরণ", score: "স্কোর", retry: "আবার চেষ্টা করুন", right: "সঠিক!", wrong: "ঠিক হয়নি।", done: "কুইজ শেষ" },
  en: { name: "Shawon Hasnat Babu", other: "বাংলা", main: "Main site", contact: "Contact", rights: "All rights reserved",
        formula: "Formula", example: "Example", score: "Score", retry: "Try again", right: "Correct!", wrong: "Not quite.", done: "Quiz complete" }
};
var SC = window.SC.S;
function $(id) { return document.getElementById(id); }
function el(t, c, x) { var n = document.createElement(t); if (c) n.className = c; if (x != null) n.textContent = x; return n; }
function store(k, v) { try { if (v === undefined) return localStorage.getItem(k); localStorage.setItem(k, v); } catch (e) { return null; } }

var lang = store("lang");
if (lang !== "bn" && lang !== "en") lang = (navigator.language || "").toLowerCase().indexOf("bn") === 0 ? "bn" : "en";
var th = store("theme");
if (th === "dark" || th === "light") document.documentElement.setAttribute("data-theme", th);

/* ---------- header & footer (মূল সাইটের মতোই) ---------- */
$("site-header").innerHTML = '<div class="w"><div class="bar"><a class="brand" href="/"><span class="logo">S</span><span id="hb"></span></a><div class="tools"><button id="lang" type="button"></button><button id="theme" type="button" aria-label="Light / Dark">◐</button></div></div><nav class="pills" id="pills"></nav></div>';
$("site-footer").innerHTML = '<div class="w"><b class="sx" id="fn"></b><br><span id="fc"></span>: <a href="mailto:' + EMAIL + '">' + EMAIL + '</a><br><a href="/" id="fm"></a> · <span id="fr"></span></div>';

SC.forEach(function (s) {
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

/* ---------- ডায়াগ্রাম (SVG) ---------- */
var A = "stroke:var(--c1,#2563eb);fill:none;stroke-width:2.5";
var T = 'fill="currentColor" font-size="13" font-family="inherit"';
var L = 'stroke="currentColor" stroke-width="1.5" fill="none"';
var D = 'stroke="currentColor" stroke-width="1" stroke-dasharray="4 4" fill="none" opacity=".6"';
function tx(bn, en) { return lang === "bn" ? bn : en; }

var FIG = {
  projectile: function () {
    return '<svg viewBox="0 0 360 205" role="img" aria-label="' + tx("প্রক্ষিপ্ত বস্তুর গতিপথ", "Projectile path") + '">' +
      '<line x1="20" y1="170" x2="340" y2="170" ' + L + '/>' +
      '<path d="M40 170 Q180 -10 320 170" style="' + A + '"/>' +
      '<line x1="180" y1="80" x2="180" y2="170" ' + D + '/>' +
      '<text x="186" y="128" ' + T + '>H</text>' +
      '<line x1="40" y1="188" x2="320" y2="188" ' + L + '/>' +
      '<line x1="40" y1="183" x2="40" y2="193" ' + L + '/><line x1="320" y1="183" x2="320" y2="193" ' + L + '/>' +
      '<text x="172" y="202" ' + T + '>R</text>' +
      '<line x1="40" y1="170" x2="70" y2="131" ' + L + '/><path d="M70 131 L61 135 M70 131 L68 141" ' + L + '/>' +
      '<text x="74" y="130" ' + T + '>v</text>' +
      '<path d="M70 170 A30 30 0 0 0 58.5 146.4" ' + L + '/>' +
      '<text x="76" y="162" ' + T + '>θ</text></svg>';
  },
  wave: function () {
    var pts = "", x, y;
    for (x = 20; x <= 340; x += 4) { y = 80 - 45 * Math.sin((x - 20) / 160 * 2 * Math.PI); pts += (x === 20 ? "M" : "L") + x + " " + y.toFixed(1) + " "; }
    return '<svg viewBox="0 0 360 160" role="img" aria-label="' + tx("তরঙ্গ", "Wave") + '">' +
      '<line x1="20" y1="80" x2="340" y2="80" ' + D + '/>' +
      '<path d="' + pts + '" style="' + A + '"/>' +
      '<line x1="60" y1="80" x2="60" y2="35" ' + L + '/><text x="66" y="62" ' + T + '>A</text>' +
      '<line x1="60" y1="20" x2="220" y2="20" ' + L + '/>' +
      '<line x1="60" y1="15" x2="60" y2="25" ' + L + '/><line x1="220" y1="15" x2="220" y2="25" ' + L + '/>' +
      '<text x="134" y="14" ' + T + '>λ</text>' +
      '<text x="20" y="150" ' + T + '>' + tx("চূড়া ও খাদ পর্যায়ক্রমে আসে", "Crests and troughs alternate") + '</text></svg>';
  },
  triangle: function () {
    return '<svg viewBox="0 0 340 195" role="img" aria-label="' + tx("সমকোণী ত্রিভুজ", "Right triangle") + '">' +
      '<path d="M40 165 L240 165 L240 45 Z" style="' + A + '"/>' +
      '<path d="M228 165 L228 153 L240 153" ' + L + '/>' +
      '<path d="M76 165 A36 36 0 0 0 70.9 146.5" ' + L + '/>' +
      '<text x="84" y="157" ' + T + '>θ</text>' +
      '<text x="120" y="184" ' + T + '>' + tx("সন্নিহিত", "adjacent") + '</text>' +
      '<text x="248" y="112" ' + T + '>' + tx("বিপরীত", "opposite") + '</text>' +
      '<text x="96" y="94" ' + T + ' transform="rotate(-31 96 94)">' + tx("অতিভুজ", "hypotenuse") + '</text></svg>';
  }
};

/* ---------- ব্লক রেন্ডার ---------- */
var BLOCK = {
  p: function (b) { return el("p", "sc-p", b.t[lang]); },
  h: function (b) { return el("h2", "sc-h", b.t[lang]); },
  note: function (b) { return el("div", "sc-note", b.t[lang]); },
  links: function (b) {
    var w = el("div", "sc-links");
    b.items.forEach(function (i) { var a = el("a", "btn pri", i.t[lang]); a.href = i.href; w.appendChild(a); });
    return w;
  },
  topics: function (b) {
    var w = el("div", "sc-topics"), d = UI[lang];
    b.items.forEach(function (i) {
      var dt = document.createElement("details"); dt.className = "sc-card";
      var sm = document.createElement("summary");
      sm.appendChild(el("span", "sc-ico", i.e));
      var tt = el("span", "sc-tt"); tt.appendChild(el("strong", "", i.t[lang]));
      if (i.s) tt.appendChild(el("small", "", i.s[lang]));
      sm.appendChild(tt); dt.appendChild(sm);
      var body = el("div", "sc-body");
      var ul = el("ul"); i.pts.forEach(function (p) { ul.appendChild(el("li", "", p[lang])); }); body.appendChild(ul);
      if (i.f) { var f = el("div", "sc-f"); f.appendChild(el("span", "", d.formula)); f.appendChild(el("code", "", i.f)); body.appendChild(f); }
      if (i.ex) { var x = el("div", "sc-ex"); x.appendChild(el("b", "", d.example + ": ")); x.appendChild(document.createTextNode(i.ex[lang])); body.appendChild(x); }
      dt.appendChild(body); w.appendChild(dt);
    });
    return w;
  },
  fig: function (b) {
    var f = document.createElement("figure"); f.className = "sc-fig";
    var box = el("div", "sc-svg"); box.innerHTML = FIG[b.fig](); f.appendChild(box);
    f.appendChild(el("figcaption", "", b.t[lang])); return f;
  },
  quiz: function (b) {
    var d = UI[lang], w = el("div", "sc-quiz"), score = 0, answered = 0, total = b.items.length;
    var bar = el("div", "sc-score"), res = el("div", "sc-result");
    function upd() {
      bar.textContent = d.score + ": " + score + " / " + total;
      if (answered === total) {
        res.textContent = d.done + " — " + score + " / " + total + ". ";
        var r = el("button", "btn", d.retry); r.type = "button"; r.onclick = render; res.appendChild(r);
      }
    }
    b.items.forEach(function (q, qi) {
      var c = el("div", "sc-q"); c.appendChild(el("p", "sc-qt", (qi + 1) + ". " + q.q[lang]));
      var opts = el("div", "sc-opts"), fb = el("div", "sc-fb"), btns = [], done = false;
      q.o.forEach(function (o, oi) {
        var bt = el("button", "sc-o", o[lang]); bt.type = "button"; btns.push(bt);
        bt.onclick = function () {
          if (done) return; done = true; answered++;
          btns.forEach(function (x, xi) { x.disabled = true; if (xi === q.a) x.classList.add("ok"); });
          if (oi === q.a) { score++; fb.className = "sc-fb good"; fb.textContent = d.right + " " + q.w[lang]; }
          else { bt.classList.add("no"); fb.className = "sc-fb bad"; fb.textContent = d.wrong + " " + q.w[lang]; }
          upd();
        };
        opts.appendChild(bt);
      });
      c.appendChild(opts); c.appendChild(fb); w.appendChild(c);
    });
    w.appendChild(bar); w.appendChild(res); upd();
    return w;
  }
};

/* ---------- পেজ ---------- */
function current() {
  var id = (location.hash || "").slice(1), i;
  for (i = 0; i < SC.length; i++) if (SC[i].id === id) return SC[i];
  return SC[0];
}
function render() {
  var d = UI[lang], s = current(), v = $("view");
  document.documentElement.lang = lang;
  document.title = s.t[lang] + " | " + d.name;
  $("hb").textContent = d.name; $("lang").textContent = d.other;
  $("fn").textContent = d.name; $("fc").textContent = d.contact; $("fm").textContent = d.main;
  $("fr").textContent = "© " + new Date().getFullYear() + " " + d.name + ". " + d.rights + ".";
  SC.forEach(function (x) {
    var p = $("pill-" + x.id); p.textContent = x.e + " " + x.t[lang];
    p.className = x.id === s.id ? "sc-on" : "";
  });
  v.textContent = "";
  v.appendChild(el("h1", "sc-title", s.e + " " + s.t[lang]));
  s.b.forEach(function (b) { if (BLOCK[b.k]) v.appendChild(BLOCK[b.k](b)); });
}
window.addEventListener("hashchange", function () { render(); window.scrollTo(0, 0); });
render();
})();
