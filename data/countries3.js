/* Study Abroad Guide — ব্যাচ ৩: ইতালি, ফ্রান্স, নেদারল্যান্ডস।
   সোর্স: দূতাবাস, Campus France, Study in NL, EU Study in Europe। যা নিশ্চিত হয়নি তা "যাচাই চলছে" বা "অফিশিয়াল সাইটে দেখুন" লেখা। */
(function () {
var C = window.HUB_C = window.HUB_C || [];
var I = window.HUB.items;
function S(bn, en, rows) { return { h: { bn: bn, en: en }, p: rows.map(function (r) { return { bn: r[0], en: r[1] }; }) }; }
function L(t, url) { return { t: t, url: url }; }
function M(kb, ke, vb, ve) { return { k: { bn: kb, en: ke }, v: { bn: vb, en: ve } }; }
var V = "2026-11-28";
var PEND = ["এই অংশের তথ্য অফিশিয়াল সোর্স থেকে যাচাই চলছে।", "Information for this part is still being verified from official sources."];


C.push({
  id: "italy", e: "🇮🇹", region: "europe", verified: V,
  t: { bn: "ইতালি", en: "Italy" },
  tag: { bn: "Universitaly প্রি-এনরোলমেন্ট ও দূতাবাসের মাধ্যমে ভিসা", en: "Universitaly pre-enrolment and embassy visa" },
  facts: [
    { k: { bn: "ভর্তির পোর্টাল", en: "Portal" }, v: { bn: "Universitaly", en: "Universitaly" } },
    { k: { bn: "সরকারি বৃত্তি", en: "Govt scholarship" }, v: { bn: "MAECI (স্তর যাচাই হয়নি)", en: "MAECI (levels unverified)" } }
  ],
  secs: [
    S("পরিচিতি", "Overview", [["ইতালিতে নন-ইইউ শিক্ষার্থীদের প্রথমে universitaly.it-এ প্রি-এনরোলমেন্ট করতে হয়। বিশ্ববিদ্যালয় যাচাই করলে তবেই ভিসা আবেদন করা যায়।", "Non-EU students first pre-enrol on universitaly.it. Only after the university validates it can you apply for a visa."]]),
    S("স্কলারশিপ", "Scholarships", [
      ["ইতালি সরকারের (MAECI) স্কলারশিপে আবেদন হয় studyinitaly.esteri.it-এ। ২০২৬-২৭ এর আবেদন শেষ হয়েছে ২৬ মার্চ ২০২৬। এতে ব্যাচেলর যুক্ত কি না ও অংক আমি নিশ্চিত হইনি।", "MAECI (Italian government) scholarships are applied for on studyinitaly.esteri.it. The 2026-27 call closed on 26 March 2026. I could not confirm whether bachelor's is included or the amounts."]]),
    S("ভর্তির যোগ্যতা", "Admission requirements", [
      ["ঢাকার ইতালি দূতাবাস স্টাডি সার্টিফিকেটের জন্য CIMEA সার্টিফিকেট বা Declaration of Value চায় এবং স্বীকৃত প্রতিষ্ঠানের ভাষা সনদ গ্রহণ করে।", "The Italian Embassy in Dhaka asks for a CIMEA certificate or Declaration of Value and accepts language certificates only from recognised institutes or universities."],
      ["HSC-র জন্য স্কুলবর্ষ ও ফাউন্ডেশন নিয়ম আমি নিশ্চিত হইনি। universitaly.it/studenti-stranieri দেখুন।", "I did not confirm the schooling-years and foundation rules for the HSC. See universitaly.it/studenti-stranieri."]]),
    S("আবেদন প্রক্রিয়া", "Application process", [
      ["ধাপ: Universitaly-তে প্রি-এনরোলমেন্ট → বিশ্ববিদ্যালয়ের যাচাই → দূতাবাসের ইমেইলে ভিসা অ্যাপয়েন্টমেন্ট (VFS Global)।", "Steps: pre-enrol on Universitaly → university validation → visa appointment by email from the embassy's visa centre (VFS Global)."],
      ["২০২৬-২৭ চক্রে ভিসা আবেদনের শেষ তারিখ ছিল ৩০ নভেম্বর ২০২৬ (দূতাবাসের ইংরেজি পেজে 'বৃহস্পতিবার' লেখা, অথচ ওই দিন সোমবার; বাংলা সংস্করণে সোমবার)। পরের চক্রের তারিখ দূতাবাসে দেখুন।", "For the 2026-27 cycle the visa application deadline was 30 November 2026 (the English page says Thursday but that date is a Monday; the Bengali version says Monday). Check the embassy for the next cycle."]]),
    S("খরচ", "Approximate cost", [PEND]),
    S("ভিসা", "Visa", [
      ["আর্থিক প্রমাণ আবেদনকারী বা আত্মীয়ের (বাবা-মা, দাদা-দাদি, ভাইবোন, চাচা-ফুফু-মামা-খালা, কাজিন) হতে পারে। অংক দূতাবাসের চেকলিস্টে দেখুন।", "Financial proof can come from the applicant or relatives (parents, grandparents, siblings, uncles, aunts, cousins). See the embassy checklist for amounts."],
      ["দূতাবাস ভিসা অ্যাপয়েন্টমেন্টের জন্য কোনো ফি নেয় না। WhatsApp বা মোবাইল নম্বরে যোগাযোগ করতে বললে সেটা প্রতারণা।", "The embassy charges no fee for visa appointments. Anyone asking you to contact them on WhatsApp or a mobile number is a scam."]]),
    S("ছাত্রজীবন", "Student life", [PEND]),
    S("সচরাচর প্রশ্ন", "FAQ", [["ভিসার জন্য আগে কী? Universitaly-তে প্রি-এনরোলমেন্ট ভ্যালিডেট হওয়া।", "What comes before the visa? A validated Universitaly pre-enrolment."]])
  ],
  links: [
    L("Universitaly", "https://www.universitaly.it"),
    L("Study in Italy: scholarships", "https://esteri.it/en/servizi-opportunita/opportunita/borse-di-studio/per-cittadini-stranieri/borsestudio_stranieri"),
    L("Italian Embassy Dhaka", "https://ambdhaka.esteri.it/en/?p=5656")
  ]
});

C.push({
  id: "france", e: "🇫🇷", region: "europe", verified: V,
  t: { bn: "ফ্রান্স", en: "France" },
  tag: { bn: "Campus France Bangladesh-এর মাধ্যমে আবেদন", en: "Apply through Campus France Bangladesh" },
  facts: [
    { k: { bn: "ঢাকায় অফিস", en: "Dhaka office" }, v: { bn: "Alliance Française, ধানমন্ডি", en: "Alliance Française, Dhanmondi" } },
    { k: { bn: "যোগাযোগ", en: "Contact" }, v: { bn: "bangladesh@campusfrance.org", en: "bangladesh@campusfrance.org" } }
  ],
  secs: [
    S("পরিচিতি", "Overview", [["বাংলাদেশ থেকে ফ্রান্সে পড়তে চাইলে প্রথম ধাপ Campus France Bangladesh-এ ইমেইল করে অ্যাপয়েন্টমেন্ট নেওয়া। অফিস ঢাকার Alliance Française-এর ভেতরে।", "To study in France from Bangladesh, the first step is to email Campus France Bangladesh for an appointment. The office is inside the Alliance Française de Dhaka."]]),
    S("স্কলারশিপ", "Scholarships", [["Campus France Bangladesh-এর FAQ-তে স্কলারশিপের আলাদা পেজ আছে। বিস্তারিত ও বাংলাদেশিদের যোগ্যতা আমি যাচাই করতে পারিনি, ওই পেজ বা অফিসে দেখুন।", "Campus France Bangladesh has a separate scholarships page in its FAQ. I could not verify the details or Bangladeshi eligibility; check that page or the office."]]),
    S("ভর্তির যোগ্যতা", "Admission requirements", [PEND]),
    S("ভাষা ও টেস্ট", "Language & tests", [["ইংরেজি সনদ (IELTS/TOEFL) আর ফরাসি ভাষা কতটা লাগে, তা FAQ-তে প্রশ্ন আকারে আছে কিন্তু উত্তর আমি পড়তে পারিনি। অফিসে নিশ্চিত হোন।", "Whether an English certificate and how much French you need appears as FAQ questions, but I could not read the answers. Confirm with the office."]]),
    S("খরচ", "Approximate cost", [PEND]),
    S("ভিসা", "Visa", [["Campus France Bangladesh সাইটে আলাদা Visa পেজ আছে; ডেডলাইন ও ডকুমেন্ট সেখানে দেখুন।", "The Campus France Bangladesh site has a separate Visa page; see it for deadlines and documents."]]),
    S("ছাত্রজীবন", "Student life", [PEND]),
    S("সচরাচর প্রশ্ন", "FAQ", [["আবেদন কীভাবে শুরু? bangladesh@campusfrance.org-এ ইমেইল করে অ্যাপয়েন্টমেন্ট নিন।", "How do I start? Email bangladesh@campusfrance.org to book an appointment."]])
  ],
  links: [
    L("Campus France Bangladesh", "https://www.bangladesh.campusfrance.org/procedure"),
    L("Campus France Bangladesh FAQ", "https://www.bangladesh.campusfrance.org/en/faq")
  ]
});

C.push({
  id: "netherlands", e: "🇳🇱", region: "europe", verified: V,
  t: { bn: "নেদারল্যান্ডস", en: "Netherlands" },
  tag: { bn: "ইংরেজি মাধ্যমের অনেক প্রোগ্রাম, NL Scholarship", en: "Many English-taught programmes, NL Scholarship" },
  facts: [
    { k: { bn: "টিউশন (নন-ইইউ)", en: "Tuition (non-EU)" }, v: { bn: "€৬,০০০–২০,০০০ / বছর", en: "€6,000–20,000 / year" } },
    { k: { bn: "মাসিক খরচ", en: "Monthly living" }, v: { bn: "€১,০০০–১,৫০০", en: "€1,000–1,500" } }
  ],
  secs: [
    S("পরিচিতি", "Overview", [["EU-এর অফিশিয়াল প্রোফাইল অনুযায়ী ব্যাচেলর ও মাস্টার্স স্তরে অনেক প্রোগ্রাম পুরোপুরি ইংরেজিতে পড়ানো হয়।", "The EU's official profile says many programmes are fully taught in English, especially at bachelor's and master's level."]]),
    S("স্কলারশিপ", "Scholarships", [
      ["NL Scholarship (আগের Holland Scholarship): প্রথম বছরে €৫,০০০, ফুল টিউশন নয়। নন-EEA নাগরিক, পূর্ণকালীন ব্যাচেলর বা মাস্টার্স, অংশগ্রহণকারী ডাচ প্রতিষ্ঠানে।", "NL Scholarship (formerly Holland Scholarship): €5,000 in the first year, not full tuition. Non-EEA nationals, full-time bachelor's or master's at a participating Dutch institution."],
      ["২০২৭-২৮ এর আবেদন চলছে বলে পেজে লেখা, কিন্তু তারিখ নেই। প্রতিষ্ঠানের সাইটে নির্দিষ্ট তারিখ ও বিষয় দেখুন। তাই ডেডলাইন যোগ করিনি।", "The page says the 2027-28 application period is open but gives no dates. See each institution's website for deadlines and fields, so no deadline is listed here."]]),
    S("ভর্তির যোগ্যতা", "Admission requirements", [["প্রতিষ্ঠানভেদে আলাদা। HSC-র স্বীকৃতি ও ইংরেজি স্কোর আমি যাচাই করিনি।", "Varies by institution. HSC recognition and English scores were not verified."]]),
    S("আবেদন প্রক্রিয়া", "Application process", [["সময়সীমার বিস্তারিত studyinnl.org-এর 'Details and deadlines for applying' পেজে আছে।", "Deadline details are on studyinnl.org's 'Details and deadlines for applying' page."]]),
    S("খরচ", "Approximate cost", [["নন-ইইউ টিউশন প্রোগ্রাম ও প্রতিষ্ঠান অনুযায়ী বছরে €৬,০০০–২০,০০০ এবং শিক্ষার্থীরা গড়ে মাসে €১,০০০–১,৫০০ খরচ করে (EU অফিশিয়াল প্রোফাইল)।", "Non-EU tuition is €6,000–20,000 per year depending on programme and institution, and students spend about €1,000–1,500 a month (EU official profile)."]]),
    S("ভিসা", "Visa", [["৯০ দিনের বেশি থাকতে রেসিডেন্স পারমিট লাগে। ভর্তির পর আপনার বিশ্ববিদ্যালয় সাধারণত আপনার হয়ে আবেদন করে।", "Stays over 90 days need a residence permit. Your host university usually applies on your behalf after admission."]]),
    S("ছাত্রজীবন", "Student life", [PEND]),
    S("সচরাচর প্রশ্ন", "FAQ", [["NL Scholarship কি আমি সরাসরি পাব? এটা প্রতিষ্ঠানের সাইটে দেখা শর্তে, সম্ভবত প্রতিষ্ঠানের মাধ্যমে; পেজে আবেদনের মাধ্যম স্পষ্ট নেই।", "Can I apply directly? Check your institution; the page does not state outright who receives applications."]])
  ],
  links: [
    L("NL Scholarship (Study in NL)", "https://www.studyinnl.org/finances/scholarships/holland-scholarship"),
    L("Study in Europe: Netherlands", "https://education.ec.europa.eu/study-in-europe/country-profiles/the-netherlands")
  ]
});

I.push(
  { s: "scholarships", cat: "Merit-Based", tags: ["netherlands", "holland", "bachelor", "master"], added: V, verified: V,
    t: { bn: "NL Scholarship (নেদারল্যান্ডস)", en: "NL Scholarship (Netherlands)" },
    d: { bn: "প্রথম বছরে €৫,০০০, নন-EEA ব্যাচেলর ও মাস্টার্স, অংশগ্রহণকারী ডাচ প্রতিষ্ঠানে। ফুল টিউশন নয়। তারিখ প্রতিষ্ঠানের সাইটে দেখুন।", en: "€5,000 in the first year for non-EEA bachelor's and master's students at participating Dutch institutions. Not full tuition. See each institution for dates." },
    meta: [M("দেশ", "Country", "নেদারল্যান্ডস", "Netherlands"), M("স্তর", "Level", "ব্যাচেলর, মাস্টার্স", "Bachelor, Master's"), M("ফান্ডিং", "Funding", "€৫,০০০ (১ম বছর)", "€5,000 (year 1)")],
    url: "https://www.studyinnl.org/finances/scholarships/holland-scholarship" },
  { s: "scholarships", cat: "Government", tags: ["italy", "maeci", "government"], added: V, verified: V,
    t: { bn: "MAECI Scholarships (ইতালি)", en: "MAECI Scholarships (Italy)" },
    d: { bn: "ইতালি সরকারের স্কলারশিপ, আবেদন studyinitaly.esteri.it-এ। ২০২৬-২৭ এর আবেদন ২৬ মার্চ ২০২৬ এ শেষ হয়েছে। ব্যাচেলর যুক্ত কি না নিশ্চিত নয়।", en: "Italian government scholarships, applied for on studyinitaly.esteri.it. The 2026-27 call closed on 26 March 2026. Whether bachelor's is included is unconfirmed." },
    meta: [M("দেশ", "Country", "ইতালি", "Italy"), M("ফান্ডিং", "Funding", "সরকারি", "Government")],
    url: "https://esteri.it/en/servizi-opportunita/opportunita/borse-di-studio/per-cittadini-stranieri/borsestudio_stranieri" }
);
})();
