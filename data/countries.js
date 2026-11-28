/* Study Abroad Guide — দেশ ভিত্তিক তথ্য (ব্যাচ ১: জার্মানি, হাঙ্গেরি, তুরস্ক)।
   নিয়ম: শুধু অফিশিয়াল সোর্সে যাচাই করা তথ্য। নিশ্চিত না হলে "অফিশিয়াল সাইটে দেখুন" লেখা হয়েছে।
   নতুন ব্যাচ আলাদা ফাইলে যোগ হবে (data/countries2.js ...) এবং একই ভাবে window.HUB_C-তে push করবে। */
(function () {
var C = window.HUB_C = window.HUB_C || [];
var I = window.HUB.items;
function S(bn, en, rows) { return { h: { bn: bn, en: en }, p: rows.map(function (r) { return { bn: r[0], en: r[1] }; }) }; }
function L(t, url) { return { t: t, url: url }; }
var V = "2026-11-28";

C.push({
  id: "germany", e: "🇩🇪", region: "europe", verified: V,
  t: { bn: "জার্মানি", en: "Germany" },
  tag: { bn: "বেশিরভাগ পাবলিক বিশ্ববিদ্যালয়ে টিউশন ফ্রি", en: "Tuition-free at most public universities" },
  facts: [
    { k: { bn: "টিউশন", en: "Tuition" }, v: { bn: "বেশিরভাগ ক্ষেত্রে ফ্রি", en: "Mostly free" } },
    { k: { bn: "ব্লকড অ্যাকাউন্ট", en: "Blocked account" }, v: { bn: "ন্যূনতম €১১,৯০৪ (দূতাবাস)", en: "At least €11,904 (embassy)" } }
  ],
  secs: [
    S("পরিচিতি", "Overview", [["জার্মানির বেশিরভাগ রাষ্ট্রীয় বিশ্ববিদ্যালয় ব্যাচেলর প্রোগ্রামে টিউশন ফি নেয় না, বিদেশি শিক্ষার্থীদের জন্যও (DAAD)।", "Most state universities in Germany charge no tuition for bachelor's programmes, including for international students (DAAD)."]]),
    S("বিশ্ববিদ্যালয়", "Notable universities", [["TUM, KIT, RWTH Aachen, University of Stuttgart। এগুলো উদাহরণ মাত্র, র‍্যাংকিং বা সুপারিশ নয়।", "TUM, KIT, RWTH Aachen, University of Stuttgart. These are examples only, not a ranking or recommendation."]]),
    S("স্কলারশিপ", "Scholarships", [
      ["DAAD-এর নিজস্ব স্কলারশিপ মূলত গ্র্যাজুয়েট, ডক্টরাল ও পোস্টডক শিক্ষার্থীদের জন্য। বাংলাদেশি ব্যাচেলর আবেদনকারীর জন্য আলাদা DAAD স্কলারশিপ পাওয়া যায়নি।", "DAAD's own scholarships are aimed mainly at graduates, doctoral students and postdocs. No separate DAAD bachelor scholarship for Bangladeshi applicants was found."],
      ["Deutschlandstipendium: মাসে €৩০০। আন্তর্জাতিক শিক্ষার্থীরা পাবে কি না তা যাচাই হয়নি, বিশ্ববিদ্যালয়ের সাইটে দেখুন।", "Deutschlandstipendium: €300 per month. Whether international students are eligible is unverified; check your university."]]),
    S("ভর্তির যোগ্যতা", "Admission requirements", [
      ["বিদেশি স্কুল সার্টিফিকেট জার্মান প্রবেশিকা যোগ্যতার সমান ধরা হলে সরাসরি ভর্তি, না হলে Studienkolleg (প্রস্তুতি কোর্স) লাগে।", "If your school certificate counts as equivalent to the German entrance qualification you can apply directly; otherwise you need a Studienkolleg (preparatory course)."],
      ["HSC সরাসরি গ্রহণযোগ্য কি না, অফিশিয়াল পেজে নিশ্চিত হইনি। বিশ্ববিদ্যালয় বা uni-assist-এ জেনে নিন।", "I could not confirm on an official page whether the HSC is accepted directly. Check with the university or uni-assist."],
      ["অনেক ক্ষেত্রে uni-assist-এর প্রাথমিক যাচাই (VPD) লাগে।", "A uni-assist preliminary check (VPD) is often required."]]),
    S("ভাষা ও টেস্ট", "Language & tests", [
      ["জার্মান ভাষার কোর্সে DSH, TestDaF, telc Deutsch C1 Hochschule, DSD II বা Goethe C2 লাগে; কোনটা চলবে তা বিশ্ববিদ্যালয় ঠিক করে।", "German-taught courses need DSH, TestDaF, telc Deutsch C1 Hochschule, DSD II or Goethe C2; each university decides which it accepts."],
      ["দূতাবাস IELTS বা TOEFL প্রমাণ চায় এবং জার্মান-ভাষার প্রোগ্রামে জার্মান B1 সুপারিশ করে।", "The embassy asks for IELTS or TOEFL proof and recommends German B1 for German-taught programmes."]]),
    S("আবেদন প্রক্রিয়া", "Application process", [
      ["প্রতিটি বিশ্ববিদ্যালয়ের নিজস্ব পোর্টালে বা uni-assist-এর মাধ্যমে আবেদন। ডেডলাইন বিশ্ববিদ্যালয় ও প্রোগ্রাম অনুযায়ী আলাদা।", "Apply through each university's portal or via uni-assist. Deadlines differ by university and programme."],
      ["বাংলাদেশের জন্য uni-assist স্কুল সার্টিফিকেটের সাথে বিষয় ও গ্রেডের তালিকা চায়।", "For Bangladesh, uni-assist asks for the school certificate with a subject and grade overview."]]),
    S("খরচ", "Approximate cost", [
      ["ব্যতিক্রম: বাডেন-ভ্যুর্টেমবের্গে অ-ইইউ শিক্ষার্থীদের সেমিস্টারে €১,৫০০; বাভারিয়ায় বিশ্ববিদ্যালয়ভেদে কয়েক হাজার ইউরো হতে পারে।", "Exceptions: Baden-Württemberg charges non-EU students €1,500 per semester; Bavaria may charge several thousand euros per semester, set by each institution."],
      ["আর্থিক প্রমাণ: মাসে €৯৯২; ঢাকার দূতাবাস ন্যূনতম €১১,৯০৪-এর ব্লকড অ্যাকাউন্ট চায়।", "Proof of funds: €992 per month; the Dhaka embassy requires a blocked account of at least €11,904."]]),
    S("ভিসা", "Visa", [
      ["ভর্তির প্রমাণ ও আর্থিক সামর্থ্যের প্রমাণ লাগে। ঢাকার জার্মান দূতাবাসে অ্যাপয়েন্টমেন্ট নিয়ে আবেদন; প্রক্রিয়া সাধারণত কমপক্ষে ৬ সপ্তাহ।", "You need admission and proof of funds. Book an appointment at the German Embassy Dhaka; processing takes at least 6 weeks."],
      ["পড়াশোনার সময় বছরে ১৪০ পূর্ণ দিন বা ২৮০ অর্ধদিন কাজের অনুমতি আছে।", "Work is allowed up to 140 full days or 280 half days a year."],
      ["শেনজেন ভিসা ও স্টুডেন্ট ভিসা একসাথে আবেদন করবেন না।", "Do not apply for a Schengen visa and a student visa together."]]),
    S("ছাত্রজীবন", "Student life", [["এই অংশের তথ্য অফিশিয়াল সোর্স থেকে যাচাই চলছে।", "Information for this part is still being verified from official sources."]]),
    S("সচরাচর প্রশ্ন", "FAQ", [
      ["জার্মানিতে কি সত্যিই পড়া ফ্রি? বেশিরভাগ পাবলিক বিশ্ববিদ্যালয়ে ব্যাচেলরে টিউশন নেই, তবে জীবনযাত্রার খরচ ও কিছু রাজ্যে ব্যতিক্রম আছে।", "Is study really free? Most public universities charge no bachelor tuition, but living costs and some state exceptions apply."],
      ["জার্মান ভাষা না জানলে? ইংরেজি মাধ্যমের প্রোগ্রামে সাধারণত জার্মানের প্রমাণ লাগে না।", "No German? English-taught programmes generally do not need German proof."]])
  ],
  links: [
    L("DAAD Study in Germany", "https://www.daad.de/en/studying-in-germany/"),
    L("DAAD Scholarship Database", "https://www2.daad.de/deutschland/stipendium/datenbank/en/21148-scholarship-database"),
    L("uni-assist", "https://www.uni-assist.de"),
    L("German Embassy Dhaka (Visa)", "https://dhaka.diplo.de/bd-en/service/2669544-2669544"),
    L("Make it in Germany: Studying", "https://www.make-it-in-germany.com/en/visa-recognition/visa-types/studying")
  ]
});

C.push({
  id: "hungary", e: "🇭🇺", region: "europe", verified: V,
  t: { bn: "হাঙ্গেরি", en: "Hungary" },
  tag: { bn: "Stipendium Hungaricum-এ বাংলাদেশ অন্তর্ভুক্ত", en: "Bangladesh is a Stipendium Hungaricum partner" },
  facts: [
    { k: { bn: "স্কলারশিপ", en: "Scholarship" }, v: { bn: "Stipendium Hungaricum", en: "Stipendium Hungaricum" } },
    { k: { bn: "ইংরেজি প্রোগ্রাম", en: "English programmes" }, v: { bn: "৭০০+", en: "700+" } }
  ],
  secs: [
    S("পরিচিতি", "Overview", [["হাঙ্গেরিতে ৭০০-র বেশি প্রোগ্রাম ইংরেজিতে পড়ানো হয় (EU Study in Europe)। ইঞ্জিনিয়ারিং ও আইটিতে ইংরেজি বিকল্প আছে।", "Over 700 programmes are taught in English (EU Study in Europe), including engineering and IT."]]),
    S("বিশ্ববিদ্যালয়", "Notable universities", [["BME, University of Debrecen, University of Szeged, Óbuda University। উদাহরণ মাত্র।", "BME, University of Debrecen, University of Szeged, Óbuda University. Examples only."]]),
    S("স্কলারশিপ", "Scholarships", [
      ["Stipendium Hungaricum (সরকারি, Tempus Public Foundation): বাংলাদেশ পার্টনার দেশ; ব্যাচেলর (ফুল ডিগ্রি ও পার্শিয়াল) তালিকায় আছে। প্রার্থীকে বাংলাদেশ সরকারের (শিক্ষা মন্ত্রণালয়) মনোনয়ন পেতে হয়।", "Stipendium Hungaricum (government, run by Tempus Public Foundation): Bangladesh is a partner; full-degree and partial bachelor studies are listed. Candidates must be nominated by Bangladesh's Ministry of Education."],
      ["অফিশিয়াল পেজে মাসিক ভাতা ও আবাসন সহায়তার কথা আছে, কিন্তু অংক নেই। বয়স ও গ্রেডের শর্ত অফিশিয়ালি নিশ্চিত নয়।", "The official page mentions a monthly stipend and accommodation contribution but gives no amounts. Age and grade rules are not officially confirmed."],
      ["সর্বশেষ চক্র ২০২৬/২৭: আবেদনের শেষ তারিখ ১৫ জানুয়ারি ২০২৬ (শেষ)। ২০২৭/২৮ এর ঘোষণা পাওয়া যায়নি, অফিশিয়াল সাইট দেখুন।", "Latest cycle 2026/27: deadline was 15 Jan 2026 (closed). No 2027/28 call found; check the official site."]]),
    S("ভর্তির যোগ্যতা", "Admission requirements", [
      ["SH আবেদনে ডেডলাইনের আগে বিশ্ববিদ্যালয়ের ভর্তি লাগে না; ভর্তি পরীক্ষা মার্চ–মে।", "SH applicants do not need university admission before the deadline; admission exams run March to May."],
      ["HSC স্বীকৃতি বা ফাউন্ডেশন ইয়ার নিয়ে অফিশিয়াল তথ্য পাওয়া যায়নি।", "No official information on HSC recognition or a foundation year was found."]]),
    S("ভাষা ও টেস্ট", "Language & tests", [["BME: English B2 (IELTS ৫.৫, TOEFL iBT ৭২, Duolingo ১০০ বা Medium of Instruction সার্টিফিকেট) এবং অনলাইন এন্ট্রান্স টেস্ট।", "BME: English B2 (IELTS 5.5, TOEFL iBT 72, Duolingo 100 or a Medium of Instruction certificate) plus an online entrance test."]]),
    S("আবেদন প্রক্রিয়া", "Application process", [
      ["Tempus Public Foundation-এর অনলাইন সিস্টেমে (apply.stipendiumhungaricum.hu) রেজিস্টার, ডকুমেন্ট আপলোড, এবং বাংলাদেশের মনোনয়ন কর্তৃপক্ষের শর্ত পূরণ।", "Register in the Tempus Public Foundation online system, upload documents and meet Bangladesh's nominating authority's requirement."],
      ["ফি দিয়ে পড়লে BME-র ক্ষেত্রে e-admission.bme.hu।", "Fee-paying applicants to BME use e-admission.bme.hu."]]),
    S("খরচ", "Approximate cost", [
      ["SH-এ টিউশন ফ্রি। নিজ খরচে: Óbuda University সেমিস্টারে ~€২,৯০০–৩,২০০ (প্রোগ্রাম ভেদে); MATE ইঞ্জিনিয়ারিং €২,০০০–২,৫০০।", "Free with SH. Self-financed: Óbuda University about €2,900–3,200 per semester depending on programme; MATE engineering €2,000–2,500."],
      ["BME-র ফি ও আর্থিক প্রমাণের নির্দিষ্ট অংক যাচাই করা যায়নি।", "BME fees and a numeric proof-of-funds amount could not be verified."]]),
    S("ভিসা", "Visa", [["৯০ দিনের বেশি থাকতে হলে সাধারণত আগমনের আগে দূতাবাসে আবেদন। ডকুমেন্ট: ট্রাভেল ডকুমেন্ট, ভর্তির সনদ, টিউশন বিল বা স্কলারশিপ সনদ, আর্থিক প্রমাণ, স্বাস্থ্য বিমা।", "For stays over 90 days you generally apply at an embassy before arrival. Documents: travel document, enrolment certificate, tuition bill or scholarship certificate, proof of funds, health insurance."]]),
    S("ছাত্রজীবন", "Student life", [["এই অংশের তথ্য অফিশিয়াল সোর্স থেকে যাচাই চলছে।", "Information for this part is still being verified from official sources."]]),
    S("সচরাচর প্রশ্ন", "FAQ", [["আমি কি সরাসরি SH-এ আবেদন করতে পারি? না, বাংলাদেশ থেকে আবেদনে সরকারি মনোনয়ন প্রক্রিয়া আছে; সময়সূচি অফিশিয়াল সাইটে দেখুন।", "Can I apply to SH directly? No, applications from Bangladesh go through a government nomination process; check the timeline on the official site."]])
  ],
  links: [
    L("Stipendium Hungaricum", "https://stipendiumhungaricum.hu"),
    L("SH: Bangladesh partner page", "https://stipendiumhungaricum.hu/partners/?partner=bangladesh"),
    L("SH Application system", "https://apply.stipendiumhungaricum.hu"),
    L("Enter Hungary (residence permit)", "https://enterhungary.gov.hu/eh/tajekoztato/en/okmanytaulmanyok"),
    L("BME admission", "https://xplore.bme.hu/admission")
  ]
});

C.push({
  id: "turkey", e: "🇹🇷", region: "europe", verified: V,
  t: { bn: "তুরস্ক (Türkiye)", en: "Türkiye (Turkey)" },
  tag: { bn: "Türkiye Bursları সম্পূর্ণ ফান্ডেড স্কলারশিপ", en: "Türkiye Scholarships, fully funded" },
  facts: [
    { k: { bn: "স্কলারশিপ", en: "Scholarship" }, v: { bn: "Türkiye Bursları (YTB)", en: "Türkiye Scholarships (YTB)" } },
    { k: { bn: "ব্যাচেলর শর্ত", en: "Bachelor rule" }, v: { bn: "২১ বছরের কম, ≥৭০%", en: "Under 21, at least 70%" } }
  ],
  secs: [
    S("পরিচিতি", "Overview", [["তুরস্কের প্রোগ্রাম তুর্কি বা ইংরেজি ভাষায়। ইংরেজি প্রোগ্রামে আন্তর্জাতিক ইংরেজি সনদ লাগে, কিছুতে ভর্তি টেস্টও।", "Programmes are in Turkish or English. English programmes need an international English certificate and some need admission tests."]]),
    S("বিশ্ববিদ্যালয়", "Notable universities", [["Istanbul Technical University, METU, Boğaziçi, Bilkent। উদাহরণ মাত্র।", "Istanbul Technical University, METU, Boğaziçi, Bilkent. Examples only."]]),
    S("স্কলারশিপ", "Scholarships", [
      ["Türkiye Bursları (সরকারি, YTB): বিশ্ববিদ্যালয়-বিভাগ বরাদ্দ, মাসিক ভাতা, টিউশন, স্বাস্থ্য বিমা, আবাসন, তুর্কি ভাষা কোর্স ও বিমান টিকিট।", "Türkiye Scholarships (government, YTB): placement, monthly stipend, tuition, health insurance, housing, Turkish course and a flight ticket."],
      ["বাংলাদেশ আলাদাভাবে উল্লেখ নেই, তবে মানদণ্ডে 'সব দেশের নাগরিক' লেখা আছে।", "Bangladesh is not named separately, but the criteria say citizens of all countries."],
      ["ব্যাচেলরে বয়স ২১-এর কম ও অন্তত ৭০% একাডেমিক ফল। তুর্কি C1 না থাকলে এক বছরের ভাষা কোর্স।", "For bachelor's: under 21 and at least 70% academic achievement. Without Turkish C1 you do a one-year Turkish course."],
      ["২০২৬ চক্র: ১০ জানুয়ারি–২০ ফেব্রুয়ারি। সাধারণ ক্যালেন্ডার: আবেদন জানুয়ারি–ফেব্রুয়ারি, ইন্টারভিউ এপ্রিল–জুন, ফল আগস্টের শুরুতে। ২০২৭-এর তারিখ ঘোষিত হয়নি।", "2026 cycle: 10 Jan to 20 Feb. Usual calendar: apply Jan–Feb, interviews Apr–Jun, results early Aug. 2027 dates not announced."]]),
    S("ভর্তির যোগ্যতা", "Admission requirements", [
      ["মাধ্যমিক শেষ (বা শেষ বর্ষে) থাকতে হবে। কিছু বিশ্ববিদ্যালয় TR-YÖS, YÖS, SAT, IB ইত্যাদি স্কোর নেয়; HSC-র নির্দিষ্ট নিয়ম পাওয়া যায়নি।", "You must have completed (or be in the final year of) secondary school. Universities accept TR-YÖS, YÖS, SAT, IB and others; no HSC-specific rule was found."],
      ["ITU: ডিপ্লোমা, ট্রান্সক্রিপ্ট, টেস্ট রিপোর্ট, পাসপোর্ট কপি ও ৩০০ শব্দের স্টেটমেন্ট অফ পারপাস।", "ITU: diploma, transcript, test report, passport copy and a 300-word statement of purpose."]]),
    S("ভাষা ও টেস্ট", "Language & tests", [["ITU ইংরেজি টেস্ট বা এক বছরের ইংরেজি প্রস্তুতি চায়। ৩০%+ ইংরেজি প্রোগ্রামে এক বছরের মধ্যে তুর্কি C1 লাগে।", "ITU requires an English test or one-year English prep, and Turkish C1 within a year for programmes with at least 30% English."]]),
    S("আবেদন প্রক্রিয়া", "Application process", [
      ["স্কলারশিপ: tbbs.turkiyeburslari.gov.tr-এ বিনামূল্যে অনলাইন আবেদন।", "Scholarship: free online application at tbbs.turkiyeburslari.gov.tr."],
      ["সরাসরি ভর্তি: প্রতিটি বিশ্ববিদ্যালয়ে। ITU ২০২৬-২৭: ১৮ মে–১৭ জুলাই, সর্বোচ্চ ৫টি প্রোগ্রাম পছন্দ।", "Direct admission: via each university. ITU 2026-27: 18 May to 17 Jul, up to 5 programme choices."]]),
    S("খরচ", "Approximate cost", [["স্কলারশিপে ফ্রি। স্কলারশিপ ছাড়া উদাহরণ: METU ইঞ্জিনিয়ারিং ২০২৫-২৬-এ সেমিস্টারে USD ১,২০০ (২০২৬-২৭ এর অংক যাচাই করা যায়নি)। আর্থিক প্রমাণের অংক পাওয়া যায়নি।", "Free with the scholarship. Example without it: METU Engineering was USD 1,200 per semester in 2025-26 (2026-27 not verified). No proof-of-funds amount was found."]]),
    S("ভিসা", "Visa", [["তুরস্কের দূতাবাস থেকে স্টুডেন্ট ভিসা নিয়ে প্রবেশ, তারপর e-ikamet.goc.gov.tr-এ স্টুডেন্ট রেসিডেন্স পারমিট। অফিশিয়াল MFA ভিসা পেজ দেখা হয়নি।", "Get a student visa from a Turkish embassy, then a student residence permit at e-ikamet.goc.gov.tr. The official MFA visa page was not checked."]]),
    S("ছাত্রজীবন", "Student life", [["এই অংশের তথ্য অফিশিয়াল সোর্স থেকে যাচাই চলছে।", "Information for this part is still being verified from official sources."]]),
    S("সচরাচর প্রশ্ন", "FAQ", [["বয়স বেশি হলে? ব্যাচেলর স্কলারশিপে ২১ বছরের নিচে হতে হয়; নিজ খরচে সরাসরি ভর্তির পথ আছে।", "Over 21? The bachelor scholarship requires under 21; direct self-funded admission is an alternative."]])
  ],
  links: [
    L("Türkiye Scholarships", "https://turkiyeburslari.gov.tr"),
    L("Application calendar", "https://turkiyeburslari.gov.tr/calendar"),
    L("Application system", "https://tbbs.turkiyeburslari.gov.tr"),
    L("Study in Türkiye", "https://www.studyinturkiye.gov.tr/StudyinTurkey/StudyinTurkeyTRYOS"),
    L("e-Residence portal", "https://e-ikamet.goc.gov.tr")
  ]
});

/* স্কলারশিপ কার্ড (Scholarship Finder-এ দেখাবে)। deadline কেবল অফিশিয়ালি নিশ্চিত হলে যোগ হবে। */
function M(kb, ke, vb, ve) { return { k: { bn: kb, en: ke }, v: { bn: vb, en: ve } }; }
I.push(
  { s: "scholarships", cat: "Fully Funded", tags: ["hungary", "bachelor", "government"], featured: true, added: V, verified: V,
    t: { bn: "Stipendium Hungaricum (হাঙ্গেরি)", en: "Stipendium Hungaricum (Hungary)" },
    d: { bn: "হাঙ্গেরি সরকারের স্কলারশিপ। বাংলাদেশ পার্টনার দেশ; ব্যাচেলর স্তর তালিকাভুক্ত। সরকারি মনোনয়ন লাগে। ২০২৭/২৮ এর তারিখ পাওয়া যায়নি, অফিশিয়াল সাইট দেখুন।", en: "Hungarian government scholarship. Bangladesh is a partner and bachelor level is listed. Government nomination needed. No 2027/28 dates found; check the official site." },
    meta: [M("দেশ", "Country", "হাঙ্গেরি", "Hungary"), M("স্তর", "Level", "ব্যাচেলর", "Bachelor"), M("ফান্ডিং", "Funding", "সরকারি", "Government")],
    url: "https://stipendiumhungaricum.hu/partners/?partner=bangladesh" },
  { s: "scholarships", cat: "Fully Funded", tags: ["turkey", "turkiye", "bachelor", "government"], featured: true, added: V, verified: V,
    t: { bn: "Türkiye Bursları (তুরস্ক)", en: "Türkiye Scholarships (Türkiye)" },
    d: { bn: "তুরস্ক সরকারের স্কলারশিপ: টিউশন, ভাতা, আবাসন, বিমা, ভাষা কোর্স ও বিমান টিকিট। ব্যাচেলরে ২১ বছরের কম ও ≥৭০%। ২০২৭ এর তারিখ ঘোষিত হয়নি।", en: "Turkish government scholarship covering tuition, stipend, housing, insurance, language course and flight. Bachelor: under 21, at least 70%. 2027 dates not announced." },
    meta: [M("দেশ", "Country", "তুরস্ক", "Türkiye"), M("স্তর", "Level", "ব্যাচেলর", "Bachelor"), M("ফান্ডিং", "Funding", "সরকারি", "Government")],
    url: "https://turkiyeburslari.gov.tr/scholarshipsprograms" },
  { s: "scholarships", cat: "Merit-Based", tags: ["germany", "bachelor", "deutschlandstipendium"], added: V, verified: V,
    t: { bn: "Deutschlandstipendium (জার্মানি)", en: "Deutschlandstipendium (Germany)" },
    d: { bn: "মাসে €৩০০, সরকার ও বেসরকারি স্পনসর মিলে। প্রতিটি বিশ্ববিদ্যালয় আলাদা রাউন্ড চালায়। আন্তর্জাতিক শিক্ষার্থীদের যোগ্যতা যাচাই হয়নি।", en: "€300 per month from the state and private sponsors. Each university runs its own round. International-student eligibility not verified." },
    meta: [M("দেশ", "Country", "জার্মানি", "Germany"), M("স্তর", "Level", "ব্যাচেলর", "Bachelor"), M("ফান্ডিং", "Funding", "মাসে €৩০০", "€300 / month")],
    url: "https://www.tum.de/en/studies/fees-and-financial-aid/scholarships/tum-scholarships/deutschlandstipendium/faq" }
);
})();
