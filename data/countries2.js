/* Study Abroad Guide — ব্যাচ ২: চীন, জাপান, দক্ষিণ কোরিয়া।
   সোর্স: দূতাবাস/সরকারি পেজ ও বিশ্ববিদ্যালয়ের পেজ। যা নিশ্চিত হয়নি তা "যাচাই চলছে" বা "অফিশিয়াল সাইটে দেখুন" লেখা। */
(function () {
var C = window.HUB_C = window.HUB_C || [];
var I = window.HUB.items;
function S(bn, en, rows) { return { h: { bn: bn, en: en }, p: rows.map(function (r) { return { bn: r[0], en: r[1] }; }) }; }
function L(t, url) { return { t: t, url: url }; }
function M(kb, ke, vb, ve) { return { k: { bn: kb, en: ke }, v: { bn: vb, en: ve } }; }
var V = "2026-11-28";
var PEND = ["এই অংশের তথ্য অফিশিয়াল সোর্স থেকে যাচাই চলছে।", "Information for this part is still being verified from official sources."];

C.push({
  id: "china", e: "🇨🇳", region: "asia", verified: V,
  t: { bn: "চীন", en: "China" },
  tag: { bn: "Chinese Government Scholarship (CSC)", en: "Chinese Government Scholarship (CSC)" },
  facts: [
    { k: { bn: "স্কলারশিপ", en: "Scholarship" }, v: { bn: "CSC Type A / B", en: "CSC Type A / B" } },
    { k: { bn: "বয়স", en: "Age" }, v: { bn: "সাধারণত ২৫-এর বেশি নয়", en: "Generally not over 25" } }
  ],
  secs: [
    S("পরিচিতি", "Overview", [["চীন সরকার বিদেশি শিক্ষার্থীদের জন্য CSC স্কলারশিপ দেয়। Type A দূতাবাস/সরকারি মনোনয়নের পথ, Type B বিশ্ববিদ্যালয়ের নিজস্ব কর্মসূচি।", "The Chinese government offers the CSC scholarship to international students. Type A goes through embassy/government nomination; Type B is run by individual universities."]]),
    S("স্কলারশিপ", "Scholarships", [
      ["ব্যাচেলরে আবেদনকারীকে অবশ্যই সিনিয়র হাইস্কুল বা সমতুল্য শেষ করতে হবে, ভালো একাডেমিক ফল থাকতে হবে এবং সাধারণত বয়স ২৫-এর বেশি নয়।", "Bachelor's applicants must have completed senior high school or equivalent, have strong grades and generally be no older than 25."],
      ["এক চীনা বিশ্ববিদ্যালয়ের পেজ অনুযায়ী CSC টিউশন, আবাসন, জীবনযাত্রা ভাতা ও চিকিৎসা বিমা কভার করে। অংক প্রতি বছরের CSC ঘোষণায় ঠিক হয়।", "According to a Chinese university page, CSC covers tuition, accommodation, living stipend and medical insurance. Amounts are set in the CSC announcement each year."]]),
    S("আবেদন প্রক্রিয়া", "Application process", [
      ["ধাপ: (১) CSCA পরীক্ষা (csca.cn), (২) দূতাবাস বা সরকারি কর্তৃপক্ষের সুপারিশ, (৩) campuschina.org-এ CSC সিস্টেমে আবেদন (Type A), (৪) বিশ্ববিদ্যালয়ের নিজস্ব পোর্টালে আবেদন।", "Steps: (1) take the CSCA test (csca.cn), (2) get a recommendation from your embassy or authority, (3) apply in the CSC system at campuschina.org (Type A), (4) apply on the university's own portal."],
      ["২০২৭ চক্রের নির্ভরযোগ্য তারিখ পাইনি। কোনো ডেডলাইন যোগ করিনি; দূতাবাসের শিক্ষা শাখা বা CSC সাইটে দেখুন।", "I found no reliable 2027 dates, so no deadline is listed. Check the embassy education section or the CSC site."]]),
    S("খরচ", "Approximate cost", [PEND]),
    S("ভিসা", "Visa", [PEND]),
    S("ছাত্রজীবন", "Student life", [PEND]),
    S("সচরাচর প্রশ্ন", "FAQ", [["CSCA কী? ব্যাচেলর আবেদনকারীদের জন্য China Scholastic Competency Assessment; বিস্তারিত csca.cn-এ।", "What is CSCA? The China Scholastic Competency Assessment for bachelor applicants; details at csca.cn."]])
  ],
  links: [
    L("CSC application system", "https://campuschina.org"),
    L("CSCA test", "https://csca.cn/home")
  ]
});

C.push({
  id: "japan", e: "🇯🇵", region: "asia", verified: V,
  t: { bn: "জাপান", en: "Japan" },
  tag: { bn: "MEXT স্কলারশিপ (দূতাবাস সুপারিশ)", en: "MEXT scholarship (embassy recommendation)" },
  facts: [
    { k: { bn: "স্কলারশিপ", en: "Scholarship" }, v: { bn: "MEXT Undergraduate", en: "MEXT Undergraduate" } },
    { k: { bn: "বয়স (দূতাবাস পেজ)", en: "Age (embassy page)" }, v: { bn: "১৭–২৫", en: "17–25" } }
  ],
  secs: [
    S("পরিচিতি", "Overview", [["জাপান সরকারের MEXT স্কলারশিপে ঢাকার জাপান দূতাবাসের মাধ্যমে আবেদন হয়। কোর্স প্রায় ৪–৬ বছর, বিশ্ববিদ্যালয় MEXT ঠিক করে।", "MEXT is the Japanese government scholarship, applied for through the Embassy of Japan in Bangladesh. The course is about 4–6 years and MEXT designates the university."]]),
    S("স্কলারশিপ", "Scholarships", [
      ["ঢাকার জাপান দূতাবাসের পেজ অনুযায়ী যোগ্যতা: বাংলাদেশি নাগরিক, বয়স ১৭–২৫, হাইস্কুল ডিপ্লোমা বা তার বেশি। পেজে HSC বা ১২ বছরের শিক্ষার কথা আলাদা করে নেই।", "Per the Embassy of Japan in Bangladesh page: Bangladeshi citizen, age 17–25, high school diploma or higher. The page does not mention the HSC or 12 years of schooling separately."],
      ["ভাতা, টিউশন ও বিমান ভাড়ার নির্দিষ্ট তথ্য ওই পেজে নেই, গাইডলাইন PDF দেখুন।", "Allowance, tuition and airfare details are not on that page; see the guideline PDF."]]),
    S("আবেদন প্রক্রিয়া", "Application process", [
      ["ধাপ: বাংলাদেশ শিক্ষা মন্ত্রণালয়ে আবেদন → ডকুমেন্ট যাচাই → জাপানি, ইংরেজি এবং বিজ্ঞান শাখার জন্য গণিত ও বিজ্ঞানের পরীক্ষা → প্রথম স্ক্রিনিং → চূড়ান্ত ফল।", "Steps: apply to the Ministry of Education, Bangladesh → document review → exams in Japanese and English (plus mathematics and science for natural-science applicants) → first screening → final result."],
      ["আবেদন সরাসরি MEXT-এ পাঠাবেন না। Study in Japan-এর নিয়ম: আগামী এপ্রিলে যারা যাবে তাদের নিয়োগ আগের বছরের এপ্রিল–মে মাসে চলে, প্রথম স্ক্রিনিং মে–আগস্ট।", "Do not send documents directly to MEXT. Study in Japan says recruitment for April arrivals runs April–May of the previous year, with first screening May–August."],
      ["২০২৭ ব্যাচের আবেদন বন্ধ (ঢাকা দূতাবাসের পেজে 'closed')। পরের ব্যাচের তারিখ ঘোষণা পাইনি।", "The 2027 intake is closed (embassy page says 'closed'). No next-intake dates found."]]),
    S("খরচ", "Approximate cost", [PEND]),
    S("ভিসা", "Visa", [PEND]),
    S("ছাত্রজীবন", "Student life", [PEND]),
    S("সচরাচর প্রশ্ন", "FAQ", [["সরাসরি MEXT-এ পাঠাব? না, নিজ দেশের জাপান দূতাবাসের মাধ্যমেই।", "Send it straight to MEXT? No, only through the Japanese embassy in your country."]])
  ],
  links: [
    L("Embassy of Japan in Bangladesh: MEXT", "https://www.bd.emb-japan.go.jp/itpr_ja/00_000706.html"),
    L("Study in Japan: Undergraduate MEXT", "https://www.studyinjapan.go.jp/en/smap-stopj-applications-undergraduate.html")
  ]
});

C.push({
  id: "korea", e: "🇰🇷", region: "asia", verified: V,
  t: { bn: "দক্ষিণ কোরিয়া", en: "South Korea" },
  tag: { bn: "Global Korea Scholarship (GKS-U)", en: "Global Korea Scholarship (GKS-U)" },
  facts: [
    { k: { bn: "স্কলারশিপ", en: "Scholarship" }, v: { bn: "GKS-U (NIIED)", en: "GKS-U (NIIED)" } },
    { k: { bn: "অফিশিয়াল সাইট", en: "Official site" }, v: { bn: "Study in Korea", en: "Study in Korea" } }
  ],
  secs: [
    S("পরিচিতি", "Overview", [["GKS-U কোরিয়া সরকারের (NIIED) ব্যাচেলর স্কলারশিপ। আবেদনের জন্য Study in Korea ওয়েবসাইটে অ্যাকাউন্ট খুলতে হয় (২০২৬ নোটিশ, কোরীয় পররাষ্ট্র মন্ত্রণালয়)।", "GKS-U is the Korean government (NIIED) bachelor scholarship. Applicants must create an account on the Study in Korea website (2026 notice, Korean foreign ministry)."]]),
    S("স্কলারশিপ", "Scholarships", [
      ["JoongAng Daily (সংবাদ, অফিশিয়াল নয়) অনুযায়ী ২০২৭ চক্রে বয়স ১ মার্চ ২০০২-এর পরে জন্ম, হাইস্কুল শেষ বা শেষ বর্ষে, এবং এক বছরের কোরীয় ভাষা প্রশিক্ষণ আছে (TOPIK ৫ বা ৬ থাকলে বাদ)।", "JoongAng Daily (news, not official) reports for the 2027 cycle: born after 1 March 2002, high school completed or final year, and a one-year Korean language programme (skipped with TOPIK 5 or 6)."],
      ["বাংলাদেশ নির্ধারিত দেশের তালিকায় আছে কি না আমি নিশ্চিত হইনি। ভাতার অংকও অফিশিয়ালি যাচাই হয়নি।", "I could not confirm whether Bangladesh is on the designated country list. Allowance amounts are not officially verified either."]]),
    S("আবেদন প্রক্রিয়া", "Application process", [
      ["দুটি পথ: দূতাবাস ট্র্যাক ও বিশ্ববিদ্যালয় ট্র্যাক (সংবাদ অনুযায়ী)। ২০২৭ চক্র সেপ্টেম্বর ২০২৬-এ শুরু হয়েছে।", "Two tracks: embassy track and university track (per news). The 2027 cycle opened in September 2026."],
      ["সংবাদে ডিসেম্বরের শেষ ও ফল ৭ জানুয়ারি ২০২৭ লেখা আছে, কিন্তু অফিশিয়াল সাইটে নিশ্চিত না হওয়ায় ডেডলাইন যোগ করিনি। এখনই Study in Korea-তে দেখুন।", "News mentions late December and results on 7 Jan 2027, but since it is not confirmed on the official site I have not listed a deadline. Check Study in Korea now."]]),
    S("খরচ", "Approximate cost", [PEND]),
    S("ভিসা", "Visa", [PEND]),
    S("ছাত্রজীবন", "Student life", [PEND]),
    S("সচরাচর প্রশ্ন", "FAQ", [["কোরীয় ভাষা না জানলে? স্কলারশিপে এক বছরের ভাষা প্রশিক্ষণ থাকে (সংবাদ সূত্র, অফিশিয়াল গাইডলাইনে নিশ্চিত করুন)।", "No Korean? The scholarship includes a one-year language programme (news source; confirm in the official guidelines)."]])
  ],
  links: [
    L("Study in Korea (NIIED)", "https://www.studyinkorea.go.kr"),
    L("Korean MOFA GKS-U notice (2026)", "https://overseas.mofa.go.kr/in-en/brd/m_22090/view.do?seq=761559")
  ]
});

I.push(
  { s: "scholarships", cat: "Fully Funded", tags: ["china", "bachelor", "government", "csc"], added: V, verified: V,
    t: { bn: "Chinese Government Scholarship, CSC (চীন)", en: "Chinese Government Scholarship, CSC (China)" },
    d: { bn: "চীন সরকারের স্কলারশিপ। ব্যাচেলরে CSCA পরীক্ষা, দূতাবাসের সুপারিশ ও CSC সিস্টেমে আবেদন লাগে। ২০২৭ তারিখ যাচাই হয়নি।", en: "Chinese government scholarship. Bachelor applicants need the CSCA test, an embassy recommendation and a CSC system application. 2027 dates not verified." },
    meta: [M("দেশ", "Country", "চীন", "China"), M("স্তর", "Level", "ব্যাচেলর", "Bachelor"), M("ফান্ডিং", "Funding", "সরকারি", "Government")],
    url: "https://campuschina.org" },
  { s: "scholarships", cat: "Fully Funded", tags: ["japan", "bachelor", "government", "mext"], added: V, verified: V,
    t: { bn: "MEXT Undergraduate Scholarship (জাপান)", en: "MEXT Undergraduate Scholarship (Japan)" },
    d: { bn: "জাপান সরকারের স্কলারশিপ, ঢাকার জাপান দূতাবাসের মাধ্যমে। বয়স ১৭–২৫। ২০২৭ ব্যাচ বন্ধ; সাধারণত আবেদন এপ্রিল–মে মাসে।", en: "Japanese government scholarship via the Embassy of Japan in Dhaka. Age 17–25. The 2027 intake is closed; applications usually run April–May." },
    meta: [M("দেশ", "Country", "জাপান", "Japan"), M("স্তর", "Level", "ব্যাচেলর", "Bachelor"), M("ফান্ডিং", "Funding", "সরকারি", "Government")],
    url: "https://www.bd.emb-japan.go.jp/itpr_ja/00_000706.html" },
  { s: "scholarships", cat: "Fully Funded", tags: ["korea", "south korea", "bachelor", "government", "gks"], added: V, verified: V,
    t: { bn: "Global Korea Scholarship, GKS-U (দক্ষিণ কোরিয়া)", en: "Global Korea Scholarship, GKS-U (South Korea)" },
    d: { bn: "কোরিয়া সরকারের (NIIED) ব্যাচেলর স্কলারশিপ। ২০২৭ চক্র চলছে; ডেডলাইন ও বাংলাদেশের যোগ্যতা Study in Korea সাইটে নিজে নিশ্চিত করুন।", en: "Korean government (NIIED) bachelor scholarship. The 2027 cycle is open; confirm the deadline and Bangladesh eligibility on Study in Korea yourself." },
    meta: [M("দেশ", "Country", "দক্ষিণ কোরিয়া", "South Korea"), M("স্তর", "Level", "ব্যাচেলর", "Bachelor"), M("ফান্ডিং", "Funding", "সরকারি", "Government")],
    url: "https://www.studyinkorea.go.kr" }
);
})();
