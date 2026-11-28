/* Study Abroad Guide — ব্যাচ ৪: ফিনল্যান্ড, সুইডেন, পোল্যান্ড।
   সোর্স: দূতাবাস, Campus France, EU Study in Europe, Lund University, NAWA, EU Study in Europe। যা নিশ্চিত হয়নি তা "যাচাই চলছে" বা "অফিশিয়াল সাইটে দেখুন" লেখা। */
(function () {
var C = window.HUB_C = window.HUB_C || [];
var I = window.HUB.items;
function S(bn, en, rows) { return { h: { bn: bn, en: en }, p: rows.map(function (r) { return { bn: r[0], en: r[1] }; }) }; }
function L(t, url) { return { t: t, url: url }; }
function M(kb, ke, vb, ve) { return { k: { bn: kb, en: ke }, v: { bn: vb, en: ve } }; }
var V = "2026-11-28";
var PEND = ["এই অংশের তথ্য অফিশিয়াল সোর্স থেকে যাচাই চলছে।", "Information for this part is still being verified from official sources."];



C.push({
  id: "finland", e: "🇫🇮", region: "europe", verified: V,
  t: { bn: "ফিনল্যান্ড", en: "Finland" },
  tag: { bn: "প্রায় ৬০০টি ইংরেজি প্রোগ্রাম, Studyinfo.fi-এ আবেদন", en: "Almost 600 English programmes, apply on Studyinfo.fi" },
  facts: [
    { k: { bn: "টিউশন (নন-ইইউ)", en: "Tuition (non-EU)" }, v: { bn: "€৮,০০০–২০,০০০ / বছর", en: "€8,000–20,000 / year" } },
    { k: { bn: "মাসিক খরচ", en: "Monthly living" }, v: { bn: "€৯০০–১,২০০", en: "€900–1,200" } }
  ],
  secs: [
    S("পরিচিতি", "Overview", [["ফিনল্যান্ডে প্রযুক্তি, ব্যবসা, ডিজাইন, স্বাস্থ্য ও শিক্ষায় প্রায় ৬০০টি ইংরেজি প্রোগ্রাম আছে (EU অফিশিয়াল প্রোফাইল)।", "Finland has almost 600 English programmes in technology, business, design, health and education (EU official profile)."]]),
    S("স্কলারশিপ", "Scholarships", [["নন-ইইউ শিক্ষার্থীরা আবেদন করতে পারে। স্কলারশিপ প্রায়ই টিউশনের ২৫% থেকে ১০০% কভার করে, একাডেমিক মেরিটের ভিত্তিতে। অনেক বিশ্ববিদ্যালয়ে আর্লি-বার্ড ছাড় বা আংশিক মওকুফও আছে। নির্দিষ্ট স্কলারশিপের নাম ও তারিখ আমি যাচাই করিনি।", "Non-EU students can apply. Awards often cover 25% to 100% of tuition, based on academic merit. Many universities also offer early-bird discounts or partial waivers. I did not verify specific scholarship names or dates."]]),
    S("ভর্তির যোগ্যতা", "Admission requirements", [["প্রোগ্রাম অনুযায়ী আলাদা; কিছুতে এন্ট্রান্স পরীক্ষা বা ইন্টারভিউ আছে। HSC স্বীকৃতি আমি যাচাই করিনি।", "Varies by programme; some have an entrance exam or interview. HSC recognition was not verified."]]),
    S("আবেদন প্রক্রিয়া", "Application process", [["জাতীয় প্ল্যাটফর্ম Studyinfo.fi। বেশিরভাগ প্রোগ্রামের যৌথ আবেদনের সময় সাধারণত জানুয়ারিতে (আগস্ট/সেপ্টেম্বর সেমিস্টারের জন্য)। কিছু প্রোগ্রামের সময় আলাদা, তাই সঠিক তারিখ বসাইনি।", "National platform Studyinfo.fi. Most programmes have one joint application period, usually in January for the August/September start. Some differ, so no exact date is listed."]]),
    S("খরচ", "Approximate cost", [["ইংরেজি ব্যাচেলর ও মাস্টার্সে নন-ইইউদের টিউশন প্রোগ্রাম ও প্রতিষ্ঠানভেদে বছরে €৮,০০০–২০,০০০। গড় মাসিক খরচ €৯০০–১,২০০।", "Non-EU tuition in English bachelor's and master's programmes is €8,000–20,000 per year depending on programme and institution. Average monthly expenses are €900–1,200."]]),
    S("ভিসা", "Visa", [["আসার আগে পড়াশোনার রেসিডেন্স পারমিট লাগে: ভর্তির প্রমাণ, পর্যাপ্ত অর্থের প্রমাণ ও স্বাস্থ্য বিমা। সাধারণত পুরো ডিগ্রির মেয়াদের জন্য দেওয়া হয়।", "You need a residence permit for studies before arriving: proof of admission, sufficient funds and health insurance. Usually granted for the whole degree."]]),
    S("ছাত্রজীবন", "Student life", [PEND]),
    S("সচরাচর প্রশ্ন", "FAQ", [["সব প্রোগ্রামে কি টিউশন লাগে? ইংরেজি ব্যাচেলর ও মাস্টার্সে নন-ইইউদের লাগে (EU প্রোফাইল)।", "Is tuition charged everywhere? For non-EU students in English bachelor's and master's programmes, yes (EU profile)."]])
  ],
  links: [
    L("Studyinfo.fi", "https://studyinfo.fi"),
    L("Study in Europe: Finland", "https://education.ec.europa.eu/study-in-europe/country-profiles/finland")
  ]
});

C.push({
  id: "sweden", e: "🇸🇪", region: "europe", verified: V,
  t: { bn: "সুইডেন", en: "Sweden" },
  tag: { bn: "universityadmissions.se-এ আবেদন, ১,০০০+ ইংরেজি প্রোগ্রাম", en: "Apply at universityadmissions.se, 1,000+ English programmes" },
  facts: [
    { k: { bn: "গড় টিউশন", en: "Average tuition" }, v: { bn: "SEK ১,২৯,০০০ / বছর (≈ €১১,৭৩০)", en: "SEK 129,000 / year (≈ €11,730)" } },
    { k: { bn: "আবেদন ফি", en: "Application fee" }, v: { bn: "SEK ৯০০ (≈ €৮২)", en: "SEK 900 (≈ €82)" } }
  ],
  secs: [
    S("পরিচিতি", "Overview", [["সুইডেনের ৩৯টি বিশ্ববিদ্যালয়ে ১,০০০-র বেশি ইংরেজি ব্যাচেলর ও মাস্টার্স প্রোগ্রাম আছে (EU প্রোফাইল)।", "Sweden offers over 1,000 English-taught bachelor's and master's programmes at 39 universities (EU profile)."]]),
    S("স্কলারশিপ", "Scholarships", [
      ["Lund University Global Scholarship মূলত মাস্টার্স স্তরের। ব্যাচেলরে ব্যতিক্রম হিসেবে শুধু Development Studies, Mathematics, Physics ও Physical Geography-র কিছু প্রোগ্রাম। শুধু টিউশন কভার করে, খরচ নয়, এবং মেরিট-ভিত্তিক।", "The Lund University Global Scholarship is mainly for master's level. For bachelor's, only exceptionally for certain programmes in Development Studies, Mathematics, Physics and Physical Geography. It covers tuition only, not living costs, and is merit-based."],
      ["Lund-এর আবেদন সাধারণত ফেব্রুয়ারির শুরুতে খোলে; সর্বশেষ ডেডলাইন ছিল ১৬ ফেব্রুয়ারি ২০২৬ (শেষ)। ২০২৭ এর তারিখ পাইনি।", "Lund's round usually opens in early February; the latest deadline was 16 February 2026 (closed). No 2027 date found."],
      ["Swedish Institute-এর Global Professionals স্কলারশিপ মাস্টার্স স্তরের, ব্যাচেলরের জন্য নয়, তাই কার্ড করিনি।", "The Swedish Institute Global Professionals scholarship is for master's level, not bachelor's, so no card was made."]]),
    S("ভর্তির যোগ্যতা", "Admission requirements", [["প্রতিষ্ঠানভেদে আলাদা। HSC স্বীকৃতি যাচাই করিনি।", "Varies by university. HSC recognition was not verified."]]),
    S("আবেদন প্রক্রিয়া", "Application process", [["ধাপ: প্রোগ্রাম বাছা → universityadmissions.se-এ আবেদন → ডকুমেন্ট আপলোড → প্রয়োজনে ফি দেওয়া → ফল। ডেডলাইন studyinsweden.se-তে দেখুন।", "Steps: find a programme → apply at universityadmissions.se → upload documents → pay the fee if required → results. See studyinsweden.se for deadlines."]]),
    S("খরচ", "Approximate cost", [["নন-ইইউ টিউশন SEK ৮০,০০০ থেকে প্রায় ২,৯৫,০০০ (≈ €৭,২৭০–২৬,৮২০) প্রোগ্রাম ও বিশ্ববিদ্যালয় অনুযায়ী। মাসিক জীবনযাত্রা আনুমানিক SEK ১০,৬৫৬ (≈ €৯৭০)।", "Non-EU tuition ranges from about SEK 80,000 to 295,000 (≈ €7,270–26,820) depending on programme and university. Living costs are about SEK 10,656 per month (≈ €970)."]]),
    S("ভিসা", "Visa", [["আসার আগে স্টুডেন্ট রেসিডেন্স পারমিট লাগে: ভর্তির চিঠি, টিউশন পরিশোধের প্রমাণ, পাসপোর্ট, পর্যাপ্ত অর্থের প্রমাণ ও স্বাস্থ্য বিমা। প্রক্রিয়ায় কয়েক সপ্তাহ লাগতে পারে।", "You need a student residence permit before arrival: admission letter, proof of tuition payment, passport, proof of funds and health insurance. Processing can take several weeks."]]),
    S("ছাত্রজীবন", "Student life", [PEND]),
    S("সচরাচর প্রশ্ন", "FAQ", [["সুইডেন কি ফ্রি? নন-ইইউ শিক্ষার্থীদের টিউশন দিতে হয়।", "Is Sweden free? Non-EU students pay tuition."]])
  ],
  links: [
    L("University Admissions Sweden", "https://www.universityadmissions.se"),
    L("Study in Sweden", "https://studyinsweden.se"),
    L("Lund University Global Scholarship", "https://www.lunduniversity.lu.se/study/admission-degree-studies/scholarships-and-awards/lund-university-global-scholarship")
  ]
});

C.push({
  id: "poland", e: "🇵🇱", region: "europe", verified: V,
  t: { bn: "পোল্যান্ড", en: "Poland" },
  tag: { bn: "কম খরচের ইউরোপীয় গন্তব্য, NAWA স্কলারশিপ", en: "Low-cost European option, NAWA scholarships" },
  facts: [
    { k: { bn: "টিউশন (EU প্রোফাইল)", en: "Tuition (EU profile)" }, v: { bn: "€২,০০০–১২,০০০ / বছর", en: "€2,000–12,000 / year" } },
    { k: { bn: "মাসিক খরচ", en: "Monthly living" }, v: { bn: "≈ €৩৩০–৪৩০", en: "≈ €330–430" } }
  ],
  secs: [
    S("পরিচিতি", "Overview", [["পোল্যান্ডে ব্যাচেলর, মাস্টার্স ও ডক্টরালে অনেক ইংরেজি প্রোগ্রাম আছে। জাতীয় টিউশন ফি নেই, প্রতিষ্ঠান নিজে ঠিক করে (study.gov.pl)।", "Many programmes are in English at bachelor's, master's and doctoral levels. There is no single national tuition fee; each institution sets its own (study.gov.pl)."]]),
    S("স্কলারশিপ", "Scholarships", [["NAWA, বিশ্ববিদ্যালয় ও আন্তর্জাতিক প্রোগ্রামের মাধ্যমে স্কলারশিপ থাকতে পারে (study.gov.pl)। NAWA-র ব্যাচেলর প্রোগ্রামের পেজ আমি খুলতে পারিনি, তাই নির্দিষ্ট স্কলারশিপ ও অংক যাচাই হয়নি।", "Scholarships may be available through NAWA, institutions and international mobility programmes (study.gov.pl). I could not open NAWA's bachelor programme page, so specific scholarships and amounts are unverified."]]),
    S("ভর্তির যোগ্যতা", "Admission requirements", [["ভিসা বা রেসিডেন্স পারমিটের জন্য ভর্তির চিঠি জরুরি। HSC স্বীকৃতি যাচাই করিনি।", "An admission letter is essential for a visa or residence permit. HSC recognition was not verified."]]),
    S("আবেদন প্রক্রিয়া", "Application process", [["প্রতিষ্ঠানের নিজস্ব সময়সীমা অনুযায়ী আবেদন। ইংরেজি প্রোগ্রাম খুঁজতে study.gov.pl-এর Studyfinder ব্যবহার করুন।", "Apply by each institution's own deadlines. Use the Studyfinder on study.gov.pl to find English programmes."]]),
    S("খরচ", "Approximate cost", [
      ["EU প্রোফাইল: টিউশন সাধারণত প্রোগ্রাম ও প্রতিষ্ঠান অনুযায়ী বছরে €২,০০০–১২,০০০, আর ভাড়া-খাবার-যাতায়াত মিলিয়ে মাসে প্রায় €৩৩০–৪৩০।", "EU profile: tuition is roughly €2,000–12,000 per year depending on programme and institution, and rent, food and transport come to about €330–430 a month."],
      ["বিদেশি ভাষার (ইংরেজি) প্রোগ্রামে সরকারি প্রতিষ্ঠানেও টিউশন লাগতে পারে।", "Foreign-language (English) programmes may carry tuition even at public institutions."]]),
    S("ভিসা", "Visa", [["নন-ইইউ শিক্ষার্থীদের সম্ভবত স্টুডেন্ট ভিসা লাগবে, নিজ দেশে পোলিশ দূতাবাসে আবেদন। পূর্ণকালীন ছাত্ররা আলাদা ওয়ার্ক পারমিট ছাড়া কাজ করতে পারে, তবে পর্যাপ্ত অর্থ দেখাতে হয়।", "Non-EU students will most likely need a student visa applied for at a Polish embassy or consulate. Full-time students can work without a separate permit but must show sufficient funds."]]),
    S("ছাত্রজীবন", "Student life", [PEND]),
    S("সচরাচর প্রশ্ন", "FAQ", [["পোল্যান্ডে কি পড়া ফ্রি? পোলিশ ভাষার পূর্ণকালীন কোর্স কিছু শর্তে ফ্রি, কিন্তু ইংরেজি প্রোগ্রামে সাধারণত নয়।", "Is study free? Full-time Polish-language studies are free under certain statutory conditions, but English programmes generally are not."]])
  ],
  links: [
    L("Study in Poland", "https://study.gov.pl"),
    L("Tuition fees", "https://study.gov.pl/tuition-fees"),
    L("NAWA: foreign students", "https://nawa.gov.pl/en/students/foreign-students")
  ]
});
})();
