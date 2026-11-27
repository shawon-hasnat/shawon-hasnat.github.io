/* Opportunity Hub-এর সব লেখা এখানে।
   sections = ১২টি সেকশন (নাম, বর্ণনা, ক্যাটাগরি)।
   items    = সব রিসোর্স (স্কলারশিপ, কোর্স, প্রতিযোগিতা ইত্যাদি)। নতুন কিছু যোগ করতে items-এ একটি লাইন যোগ করলেই হবে।

   একটি item এর গঠন:
   { s: "scholarships",            // কোন সেকশনে যাবে (নিচের id থেকে)
     t: { bn: "...", en: "..." },  // নাম
     d: { bn: "...", en: "..." },  // সংক্ষিপ্ত বর্ণনা
     cat: "Undergraduate",         // ক্যাটাগরি (ঐচ্ছিক)
     tags: ["germany"],            // সার্চের শব্দ (ঐচ্ছিক)
     meta: [ { k: { bn: "দেশ", en: "Country" }, v: { bn: "জার্মানি", en: "Germany" } } ],  // অতিরিক্ত তথ্য (ঐচ্ছিক)
     deadline: "2027-01-31",       // শেষ তারিখ। অফিশিয়াল সাইটে নিশ্চিত না হলে এই লাইনটাই বাদ দিন
     url: "https://...",           // অফিশিয়াল লিংক
     verified: "2026-11-27",       // সর্বশেষ যাচাইয়ের তারিখ
     added: "2026-11-27",          // কবে যোগ করা হলো (Recently Added-এর জন্য)
     featured: true }              // হোমপেজে দেখাতে চাইলে
*/
window.HUB = {
  sections: [
    { id: "scholarships", e: "🎓", t: { bn: "Scholarship Finder", en: "Scholarship Finder" },
      d: { bn: "দেশ, ডিগ্রি ও ফান্ডিং অনুযায়ী স্কলারশিপ খুঁজুন।", en: "Find scholarships by country, degree level and funding." },
      cats: ["Fully Funded", "Undergraduate", "Master's", "PhD", { bn: "বাংলাদেশের শিক্ষার্থীদের জন্য", en: "For Bangladeshi students" }, "Merit-Based", "Need-Based", "Government", "University"] },
    { id: "countries", e: "🌍", t: { bn: "Study Abroad Guide", en: "Study Abroad Guide" },
      d: { bn: "২২টি দেশের ভর্তি, খরচ, ভিসা ও স্কলারশিপের গাইড।", en: "Admission, cost, visa and scholarship guides for 22 countries." },
      cats: [{ bn: "ইউরোপ", en: "Europe" }, { bn: "এশিয়া", en: "Asia" }, { bn: "আমেরিকা ও ওশেনিয়া", en: "Americas & Oceania" }] },
    { id: "competitions", e: "🏆", t: { bn: "Competitions & Olympiads", en: "Competitions & Olympiads" },
      d: { bn: "অলিম্পিয়াড ও প্রতিযোগিতার ডিরেক্টরি, সাথে ক্যালেন্ডার।", en: "A directory of olympiads and competitions, with a calendar." },
      cats: ["Mathematics Olympiad", "Physics Olympiad", "Chemistry Olympiad", "Biology Olympiad", "Informatics Olympiad", "Astronomy Olympiad", "Robotics", "Debate", "Essay Writing", "Science", "Innovation", "Business & Entrepreneurship", "Environmental", "International"] },
    { id: "learn", e: "📚", t: { bn: "Free Learning Hub", en: "Free Learning Hub" },
      d: { bn: "ফ্রি অনলাইন কোর্স ও শেখার প্ল্যাটফর্ম।", en: "Free online courses and learning platforms." },
      cats: ["Programming", "Artificial Intelligence", "Mathematics", "Science", "English Language", "Research", "Business", "Design", "Cybersecurity", "Digital Marketing", "Leadership", "Data Science", "Web Development", "Personal Development"] },
    { id: "sites", e: "🔗", t: { bn: "Useful Educational Websites", en: "Useful Educational Websites" },
      d: { bn: "যাচাই করা প্রয়োজনীয় শিক্ষামূলক ওয়েবসাইট।", en: "Verified, useful educational websites." },
      cats: ["Science", "Mathematics", "English Learning", "Programming", "Research", "Academic Writing", "AI Tools", "University Research", "PDF and Books", "General Education", "Productivity"] },
    { id: "guides", e: "🧭", t: { bn: "Student Guides", en: "Student Guides" },
      d: { bn: "স্কলারশিপ, IELTS, SOP, CV ও রোডম্যাপের ব্যবহারিক গাইড।", en: "Practical guides on scholarships, IELTS, SOP, CV and roadmaps." },
      plan: [
        { bn: "কীভাবে একটি শক্তিশালী একাডেমিক প্রোফাইল তৈরি করা যায়", en: "How to build a strong academic profile" },
        { bn: "কীভাবে স্কলারশিপ খুঁজে পাওয়া যায়", en: "How to find scholarships" },
        { bn: "কীভাবে IELTS-এর প্রস্তুতি নেওয়া যায়", en: "How to prepare for IELTS" },
        { bn: "কীভাবে Academic CV তৈরি করা যায়", en: "How to write an academic CV" },
        { bn: "কীভাবে Statement of Purpose লিখতে হয়", en: "How to write a Statement of Purpose" },
        { bn: "কীভাবে Scholarship Essay লিখতে হয়", en: "How to write a scholarship essay" },
        { bn: "কীভাবে Student Portfolio তৈরি করা যায়", en: "How to build a student portfolio" },
        { bn: "কীভাবে একাডেমিক গবেষণা শুরু করা যায়", en: "How to start academic research" },
        { bn: "কীভাবে Research Paper পড়তে হয়", en: "How to read a research paper" },
        { bn: "কীভাবে আন্তর্জাতিক প্রতিযোগিতা খুঁজে পাওয়া যায়", en: "How to find international competitions" },
        { bn: "কীভাবে অলিম্পিয়াডের প্রস্তুতি নিতে হয়", en: "How to prepare for olympiads" },
        { bn: "কীভাবে Programming শেখা শুরু করা যায়", en: "How to start learning programming" },
        { bn: "শিক্ষায় AI কীভাবে দায়িত্বশীলভাবে ব্যবহার করা যায়", en: "Using AI responsibly in education" },
        { bn: "কীভাবে ফ্রি অনলাইন কোর্স খুঁজে পাওয়া যায়", en: "How to find free online courses" },
        { bn: "কীভাবে Leadership Skills উন্নত করা যায়", en: "How to improve leadership skills" },
        { bn: "কীভাবে Communication Skills উন্নত করা যায়", en: "How to improve communication skills" },
        { bn: "কীভাবে বিদেশে বিশ্ববিদ্যালয়ে ভর্তির প্রস্তুতি নেওয়া যায়", en: "How to prepare for university admission abroad" },
        { bn: "কীভাবে Extracurricular Activities সাজানো যায়", en: "How to present extracurricular activities" },
        { bn: "কীভাবে Scholarship Scam এড়িয়ে চলা যায়", en: "How to avoid scholarship scams" },
        { bn: "কীভাবে একটি Academic Roadmap তৈরি করা যায়", en: "How to make an academic roadmap" } ] },
    { id: "research", e: "🔬", t: { bn: "Research Hub", en: "Research Hub" },
      d: { bn: "গবেষণা শুরু করার রিসোর্স, জার্নাল ও টুলস।", en: "Resources, journals and tools to start research." },
      cats: ["Research Basics", "Research Paper Search", "Scientific Journals", "Literature Review", "Research Methodology", "Academic Writing", "Citation and Referencing", "Data Analysis", "Research Tools", "Beginner Research Guides"] },
    { id: "toolkit", e: "🧰", t: { bn: "Student Toolkit", en: "Student Toolkit" },
      d: { bn: "পড়াশোনার কাজে লাগে এমন ডিজিটাল টুলস।", en: "Digital tools that help with studying." },
      cats: ["AI Study Tools", "Writing Tools", "Mathematics Tools", "Scientific Tools", "PDF Tools", "Productivity Tools", "Research Tools", "Language Tools", "Presentation Tools", "Coding Tools", "Note-Taking Tools"] },
    { id: "projects", e: "💡", t: { bn: "Student Projects", en: "Student Projects" },
      d: { bn: "নিজে বানানোর মতো প্রজেক্টের আইডিয়া।", en: "Project ideas you can build yourself." },
      cats: ["Physics Projects", "Chemistry Projects", "Biology Projects", "Computer Science", "Web Development", "Artificial Intelligence", "Robotics", "Environmental Projects", "Social Innovation", "Technology Projects"] },
    { id: "profile", e: "📄", t: { bn: "CV & Profile Development", en: "CV & Profile Development" },
      d: { bn: "একাডেমিক CV, পোর্টফোলিও ও প্রোফাইল তৈরির গাইড।", en: "Guides to build your academic CV, portfolio and profile." },
      cats: ["Academic CV", "Student Portfolio", "Personal Website", "LinkedIn Profile", "Extracurricular Activities", "Volunteering", "Leadership", "Awards and Achievements", "Research Experience", "Personal Statement"] },
    { id: "leadership", e: "🌱", t: { bn: "Leadership & Development", en: "Leadership & Development" },
      d: { bn: "নেতৃত্ব, যোগাযোগ ও ব্যক্তিগত দক্ষতা উন্নয়ন।", en: "Leadership, communication and personal development." },
      cats: ["Leadership", "Communication Skills", "Public Speaking", "Teamwork", "Critical Thinking", "Problem Solving", "Time Management", "Volunteering", "Personal Development", "Youth Development"] },
    { id: "events", e: "📅", t: { bn: "Events & Programs", en: "Events & Programs" },
      d: { bn: "ওয়ার্কশপ, সামার প্রোগ্রাম ও যুব কার্যক্রম।", en: "Workshops, summer programs and youth programs." },
      cats: ["Youth Programs", "Workshops", "Academic Conferences", "Summer Programs", "Exchange Programs", "Online Events", "Science Events", "University Events", "Innovation Programs", "Educational Camps"] }
  ],
  items: []
};
