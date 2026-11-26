/* Easy Science-এর সব লেখা এখানে। নতুন টপিক, নোট বা কুইজ যোগ করতে শুধু এই ফাইল বদলাবে। */
window.SC = { S: [
{ id: "physics", e: "⚛️", t: { bn: "Easy Physics", en: "Easy Physics" }, b: [
  { k: "p", t: { bn: "পদার্থবিজ্ঞানের মূল ধারণাগুলো সহজ ভাষায়। প্রতিটি টপিক ট্যাপ করলে খুলবে।", en: "Core physics ideas in simple language. Tap a topic to open it." } },
  { k: "topics", items: [
    { e: "🚀", t: { bn: "নিউটনের গতিসূত্র", en: "Newton's Laws of Motion" },
      s: { bn: "বল, ভর ও ত্বরণের সম্পর্ক", en: "How force, mass and acceleration relate" },
      pts: [
        { bn: "১ম সূত্র: বাইরে থেকে বল না লাগালে স্থির বস্তু স্থির থাকে, আর গতিশীল বস্তু একই বেগে সরলরেখায় চলতে থাকে।", en: "1st law: without an external force, a resting object stays at rest and a moving object keeps moving at constant velocity in a straight line." },
        { bn: "২য় সূত্র: বল বাড়লে ত্বরণ বাড়ে, ভর বাড়লে ত্বরণ কমে।", en: "2nd law: more force means more acceleration; more mass means less acceleration." },
        { bn: "৩য় সূত্র: প্রতিটি ক্রিয়ার সমান ও বিপরীত প্রতিক্রিয়া আছে।", en: "3rd law: every action has an equal and opposite reaction." } ],
      f: "F = m × a",
      ex: { bn: "২ kg ভরের বস্তুর ওপর ৬ N বল দিলে ত্বরণ a = 6 ÷ 2 = 3 m/s²।", en: "A 6 N force on a 2 kg object gives a = 6 ÷ 2 = 3 m/s²." } },
    { e: "⚡", t: { bn: "কাজ, ক্ষমতা ও শক্তি", en: "Work, Power and Energy" },
      s: { bn: "কাজ কখন হয় আর শক্তি কীভাবে মাপা যায়", en: "When work is done and how energy is measured" },
      pts: [
        { bn: "বল প্রয়োগে বস্তু সরলে তবেই কাজ হয়। কাজের একক জুল (J)।", en: "Work is done only when a force moves an object. The unit of work is the joule (J)." },
        { bn: "গতিশক্তি নির্ভর করে ভর ও বেগের ওপর। বেগ দ্বিগুণ হলে গতিশক্তি চার গুণ হয়।", en: "Kinetic energy depends on mass and speed. Doubling the speed makes it four times larger." },
        { bn: "ক্ষমতা হলো কাজ করার হার। একক ওয়াট (W)।", en: "Power is the rate of doing work. The unit is the watt (W)." } ],
      f: "W = F × d,   KE = ½mv²,   P = W ÷ t",
      ex: { bn: "১০ N বলে বস্তুকে ৫ m সরালে কাজ W = 10 × 5 = 50 J।", en: "Moving an object 5 m with a 10 N force gives W = 10 × 5 = 50 J." } },
    { e: "🔌", t: { bn: "ওহমের সূত্র", en: "Ohm's Law" },
      s: { bn: "বিভব, প্রবাহ ও রোধ", en: "Voltage, current and resistance" },
      pts: [
        { bn: "তাপমাত্রা স্থির থাকলে পরিবাহীর দুই প্রান্তের বিভব পার্থক্য ও তড়িৎপ্রবাহ সমানুপাতিক।", en: "At constant temperature, the voltage across a conductor is proportional to the current through it." },
        { bn: "রোধের একক ওহম (Ω), প্রবাহের একক অ্যাম্পিয়ার (A), বিভবের একক ভোল্ট (V)।", en: "Resistance is measured in ohms (Ω), current in amperes (A) and voltage in volts (V)." } ],
      f: "V = I × R",
      ex: { bn: "১২ V ব্যাটারি ও ৪ Ω রোধে প্রবাহ I = 12 ÷ 4 = 3 A।", en: "A 12 V battery across 4 Ω gives I = 12 ÷ 4 = 3 A." } } ] },
  { k: "note", t: { bn: "আরও Physics টপিক শীঘ্রই যোগ হবে।", en: "More physics topics will be added soon." } } ] },

{ id: "math", e: "➗", t: { bn: "Easy Mathematics", en: "Easy Mathematics" }, b: [
  { k: "p", t: { bn: "গণিতের গুরুত্বপূর্ণ ধারণা ধাপে ধাপে, উদাহরণসহ।", en: "Key maths ideas step by step, with examples." } },
  { k: "topics", items: [
    { e: "📐", t: { bn: "দ্বিঘাত সমীকরণ", en: "Quadratic Equations" },
      s: { bn: "সূত্র দিয়ে মূল বের করা", en: "Finding roots with the formula" },
      pts: [
        { bn: "ax² + bx + c = 0 সমীকরণের মূল বের করা যায় নিচের সূত্রে।", en: "The roots of ax² + bx + c = 0 come from the formula below." },
        { bn: "নিরূপক D = b² − 4ac। D > 0 হলে দুটি বাস্তব মূল, D = 0 হলে একটি, D < 0 হলে কোনো বাস্তব মূল নেই।", en: "Discriminant D = b² − 4ac. If D > 0 there are two real roots, D = 0 one root, D < 0 no real roots." } ],
      f: "x = (−b ± √(b² − 4ac)) ÷ 2a",
      ex: { bn: "x² − 5x + 6 = 0 এ D = 25 − 24 = 1, তাই x = (5 ± 1) ÷ 2 = 3 অথবা 2।", en: "For x² − 5x + 6 = 0, D = 25 − 24 = 1, so x = (5 ± 1) ÷ 2 = 3 or 2." } },
    { e: "📈", t: { bn: "অন্তরীকরণের ধারণা", en: "The Idea of Differentiation" },
      s: { bn: "বক্ররেখার ঢাল বের করা", en: "Finding the slope of a curve" },
      pts: [
        { bn: "অন্তরজ বলে দেয় কোনো বিন্দুতে ফাংশনটি কত দ্রুত বদলাচ্ছে, অর্থাৎ বক্ররেখার ঢাল কত।", en: "The derivative tells how fast a function is changing at a point, which is the slope of its curve." },
        { bn: "ঘাতের নিয়ম: x এর ঘাত n হলে অন্তরজ n × x এর (n − 1) ঘাত।", en: "Power rule: bring the power n down as a multiplier and reduce the power by 1." } ],
      f: "d/dx (xⁿ) = n · xⁿ⁻¹",
      ex: { bn: "f(x) = x³ হলে f′(x) = 3x²। x = 2 বিন্দুতে ঢাল 3 × 4 = 12।", en: "If f(x) = x³ then f′(x) = 3x². At x = 2 the slope is 3 × 4 = 12." } },
    { e: "📏", t: { bn: "ত্রিকোণমিতির মূল কথা", en: "Trigonometry Basics" },
      s: { bn: "সমকোণী ত্রিভুজের অনুপাত", en: "Ratios in a right triangle" },
      pts: [
        { bn: "sin = বিপরীত ÷ অতিভুজ, cos = সন্নিহিত ÷ অতিভুজ, tan = বিপরীত ÷ সন্নিহিত।", en: "sin = opposite ÷ hypotenuse, cos = adjacent ÷ hypotenuse, tan = opposite ÷ adjacent." },
        { bn: "যেকোনো কোণের জন্য sin² θ + cos² θ = 1।", en: "For any angle, sin² θ + cos² θ = 1." } ],
      f: "sin²θ + cos²θ = 1",
      ex: { bn: "৩-৪-৫ ত্রিভুজে θ এর বিপরীত বাহু ৩ হলে sin θ = 3/5, cos θ = 4/5।", en: "In a 3-4-5 triangle, if the side opposite θ is 3 then sin θ = 3/5 and cos θ = 4/5." } } ] },
  { k: "note", t: { bn: "আরও Mathematics টপিক শীঘ্রই যোগ হবে।", en: "More mathematics topics will be added soon." } } ] },

{ id: "notes", e: "📝", t: { bn: "সহজ ব্যাখ্যা ও নোট", en: "Simple Explanations & Notes" }, b: [
  { k: "p", t: { bn: "দ্রুত রিভিশনের জন্য ছোট নোট।", en: "Short notes for quick revision." } },
  { k: "topics", items: [
    { e: "🧭", t: { bn: "স্কেলার ও ভেক্টর", en: "Scalar vs Vector" },
      s: { bn: "শুধু মান, নাকি মান ও দিক", en: "Magnitude only, or magnitude and direction" },
      pts: [
        { bn: "স্কেলার রাশির শুধু মান থাকে। যেমন ভর, সময়, দ্রুতি, শক্তি।", en: "A scalar has magnitude only. Examples: mass, time, speed, energy." },
        { bn: "ভেক্টর রাশির মান ও দিক দুটোই থাকে। যেমন সরণ, বেগ, ত্বরণ, বল।", en: "A vector has magnitude and direction. Examples: displacement, velocity, acceleration, force." } ] },
    { e: "🏃", t: { bn: "দ্রুতি, বেগ ও ত্বরণ", en: "Speed, Velocity and Acceleration" },
      s: { bn: "তিনটির পার্থক্য", en: "The difference between the three" },
      pts: [
        { bn: "দ্রুতি = অতিক্রান্ত দূরত্ব ÷ সময় (স্কেলার)।", en: "Speed = distance ÷ time (scalar)." },
        { bn: "বেগ = সরণ ÷ সময় (ভেক্টর)। দিক বদলালেও বেগ বদলায়।", en: "Velocity = displacement ÷ time (vector). It changes even if only the direction changes." },
        { bn: "ত্বরণ = বেগ পরিবর্তনের হার।", en: "Acceleration = rate of change of velocity." } ],
      f: "a = (v − u) ÷ t" },
    { e: "📦", t: { bn: "SI মৌলিক একক", en: "SI Base Units" },
      s: { bn: "মূল রাশি ও তাদের একক", en: "Main quantities and their units" },
      pts: [
        { bn: "দৈর্ঘ্য: মিটার (m)। ভর: কিলোগ্রাম (kg)। সময়: সেকেন্ড (s)।", en: "Length: metre (m). Mass: kilogram (kg). Time: second (s)." },
        { bn: "তড়িৎপ্রবাহ: অ্যাম্পিয়ার (A)। তাপমাত্রা: কেলভিন (K)। পদার্থের পরিমাণ: মোল (mol)। দীপন তীব্রতা: ক্যান্ডেলা (cd)।", en: "Current: ampere (A). Temperature: kelvin (K). Amount of substance: mole (mol). Luminous intensity: candela (cd)." } ] } ] } ] },

{ id: "visuals", e: "🖼️", t: { bn: "ডায়াগ্রাম ও ভিজ্যুয়াল শেখা", en: "Diagrams & Visual Learning" }, b: [
  { k: "p", t: { bn: "ছবি দেখলে অনেক ধারণা সহজে বোঝা যায়।", en: "Many ideas are easier to grasp from a picture." } },
  { k: "fig", fig: "projectile", t: { bn: "প্রক্ষিপ্ত বস্তুর গতিপথ: v প্রাথমিক বেগ, θ নিক্ষেপ কোণ, H সর্বোচ্চ উচ্চতা, R অনুভূমিক পাল্লা।", en: "Projectile path: v is the launch velocity, θ the launch angle, H the maximum height and R the horizontal range." } },
  { k: "fig", fig: "wave", t: { bn: "তরঙ্গ: A বিস্তার (সাম্যাবস্থা থেকে সর্বোচ্চ সরণ), λ তরঙ্গদৈর্ঘ্য (দুই চূড়ার দূরত্ব)।", en: "A wave: A is the amplitude (maximum displacement from rest), λ the wavelength (distance between two crests)." } },
  { k: "fig", fig: "triangle", t: { bn: "সমকোণী ত্রিভুজ: θ কোণের সাপেক্ষে বাহুগুলোর নাম।", en: "Right triangle: the names of the sides relative to angle θ." } } ] },

{ id: "quiz", e: "🧪", t: { bn: "ছোট কুইজ", en: "Short Quizzes" }, b: [
  { k: "p", t: { bn: "একটি উত্তর বেছে নিন। সঙ্গে সঙ্গে ব্যাখ্যা দেখাবে।", en: "Pick an answer. The explanation shows right away." } },
  { k: "quiz", items: [
    { q: { bn: "নিচের কোনটি ভেক্টর রাশি?", en: "Which of these is a vector quantity?" },
      o: [ { bn: "ভর", en: "Mass" }, { bn: "দ্রুতি", en: "Speed" }, { bn: "বেগ", en: "Velocity" }, { bn: "সময়", en: "Time" } ], a: 2,
      w: { bn: "বেগের মান ও দিক দুটোই আছে, তাই এটি ভেক্টর।", en: "Velocity has both magnitude and direction, so it is a vector." } },
    { q: { bn: "২ kg ভরের বস্তুর ওপর ১০ N বল প্রযুক্ত হলে ত্বরণ কত?", en: "A 10 N force acts on a 2 kg object. What is the acceleration?" },
      o: [ { bn: "২ m/s²", en: "2 m/s²" }, { bn: "৫ m/s²", en: "5 m/s²" }, { bn: "১০ m/s²", en: "10 m/s²" }, { bn: "২০ m/s²", en: "20 m/s²" } ], a: 1,
      w: { bn: "a = F ÷ m = 10 ÷ 2 = 5 m/s²।", en: "a = F ÷ m = 10 ÷ 2 = 5 m/s²." } },
    { q: { bn: "রোধের SI একক কী?", en: "What is the SI unit of resistance?" },
      o: [ { bn: "ওহম", en: "Ohm" }, { bn: "ওয়াট", en: "Watt" }, { bn: "ভোল্ট", en: "Volt" }, { bn: "জুল", en: "Joule" } ], a: 0,
      w: { bn: "রোধের একক ওহম (Ω)।", en: "Resistance is measured in ohms (Ω)." } },
    { q: { bn: "x² − 5x + 6 = 0 সমীকরণের মূল দুটি কী?", en: "What are the roots of x² − 5x + 6 = 0?" },
      o: [ { bn: "১ ও ৬", en: "1 and 6" }, { bn: "−২ ও −৩", en: "−2 and −3" }, { bn: "৫ ও ১", en: "5 and 1" }, { bn: "২ ও ৩", en: "2 and 3" } ], a: 3,
      w: { bn: "(x − 2)(x − 3) = 0, তাই x = 2 অথবা 3।", en: "(x − 2)(x − 3) = 0, so x = 2 or 3." } },
    { q: { bn: "x² এর অন্তরজ কত?", en: "What is the derivative of x²?" },
      o: [ { bn: "x", en: "x" }, { bn: "2x", en: "2x" }, { bn: "x²", en: "x²" }, { bn: "2", en: "2" } ], a: 1,
      w: { bn: "ঘাতের নিয়মে d/dx (x²) = 2x।", en: "By the power rule, d/dx (x²) = 2x." } },
    { q: { bn: "sin²θ + cos²θ এর মান কত?", en: "What is the value of sin²θ + cos²θ?" },
      o: [ { bn: "০", en: "0" }, { bn: "১", en: "1" }, { bn: "২", en: "2" }, { bn: "θ এর ওপর নির্ভর করে", en: "Depends on θ" } ], a: 1,
      w: { bn: "এটি একটি মৌলিক অভেদ, যা সব কোণের জন্য 1।", en: "It is a basic identity and equals 1 for every angle." } } ] } ] }
] };
