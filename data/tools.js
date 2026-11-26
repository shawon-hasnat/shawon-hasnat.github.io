/* Useful Tools-এর শিরোনাম, রং ও ভূমিকার লেখা এখানে। টুলের কাজ আছে assets/js/tools.js-এ।
   g = কার্ড ও টুলের দুটি গ্রেডিয়েন্ট রং। */
window.TL = { S: [
{ id: "planner", e: "📅", g: ["#6366f1", "#06b6d4"], t: { bn: "Study Planner", en: "Study Planner" }, d: { bn: "পড়ার তালিকা", en: "Task list" }, b: [
  { k: "p", t: { bn: "পড়ার কাজের তালিকা বানান, শেষ হলে টিক দিন। তালিকা এই ডিভাইসেই সেভ থাকবে।", en: "Make a list of study tasks and tick them off. The list is saved on this device." } },
  { k: "tool", tool: "planner" } ] },
{ id: "countdown", e: "⏳", g: ["#f59e0b", "#ef4444"], t: { bn: "Exam Countdown", en: "Exam Countdown" }, d: { bn: "কত দিন বাকি", en: "Days to go" }, b: [
  { k: "p", t: { bn: "পরীক্ষার তারিখ দিন, কত দিন বাকি দেখুন। তারিখগুলো এই ডিভাইসেই সেভ থাকবে।", en: "Add exam dates and see how many days are left. Dates are saved on this device." } },
  { k: "tool", tool: "countdown" } ] },
{ id: "gpa", e: "🧮", g: ["#10b981", "#0ea5e9"], t: { bn: "GPA Calculator", en: "GPA Calculator" }, d: { bn: "ফলাফলের হিসাব", en: "Grade maths" }, b: [
  { k: "p", t: { bn: "গ্রেড বেছে নিন, GPA নিজে থেকেই হিসাব হবে।", en: "Pick the grades and the GPA is calculated automatically." } },
  { k: "tool", tool: "gpa" } ] },
{ id: "pomodoro", e: "🍅", g: ["#ef4444", "#f97316"], t: { bn: "Pomodoro Timer", en: "Pomodoro Timer" }, d: { bn: "মনোযোগের টাইমার", en: "Focus timer" }, b: [
  { k: "p", t: { bn: "২৫ মিনিট মন দিয়ে পড়ুন, তারপর ছোট বিরতি নিন। এভাবে মনোযোগ ধরে রাখা সহজ হয়।", en: "Study with full focus for 25 minutes, then take a short break. It makes concentration easier to keep." } },
  { k: "tool", tool: "pomodoro" } ] }
] };
