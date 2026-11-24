/** Short maths facts for the top strip. Each links to the note or article that explains it. */
export type Fact = { en: string; hi: string; href: string };

export const FACTS: Fact[] = [
  {
    en: 'Every whole number greater than 1 can be written as a product of primes in exactly one way.',
    hi: '1 से बड़ी हर पूर्ण संख्या को अभाज्य संख्याओं के गुणनफल के रूप में केवल एक ही तरीके से लिखा जा सकता है।',
    href: '/notes/class-10-real-numbers',
  },
  {
    en: '√2 can never be written as a fraction p/q. This was proved more than 2,000 years ago.',
    hi: '√2 को कभी भी भिन्न p/q के रूप में नहीं लिखा जा सकता। यह 2,000 से अधिक वर्ष पहले सिद्ध हो चुका है।',
    href: '/notes/class-10-real-numbers',
  },
  {
    en: 'One formula, x = [−b ± √(b² − 4ac)] / 2a, solves every quadratic equation.',
    hi: 'एक ही सूत्र, x = [−b ± √(b² − 4ac)] / 2a, हर द्विघात समीकरण को हल कर देता है।',
    href: '/notes/class-10-quadratic-equations',
  },
  {
    en: '1 + 2 + 3 + … + 100 = 5050: pair the numbers from both ends and you get 50 pairs of 101.',
    hi: '1 + 2 + 3 + … + 100 = 5050: दोनों सिरों से संख्याओं के जोड़े बनाइए, 101 के 50 जोड़े मिलेंगे।',
    href: '/notes/class-10-arithmetic-progressions',
  },
  {
    en: 'sin²θ + cos²θ = 1 is simply Pythagoras’ theorem on a circle of radius 1.',
    hi: 'sin²θ + cos²θ = 1 असल में त्रिज्या 1 वाले वृत्त पर पाइथागोरस प्रमेय ही है।',
    href: '/notes/class-10-introduction-to-trigonometry',
  },
  {
    en: 'With two dice, 7 is the most likely total: 6 of the 36 outcomes give it.',
    hi: 'दो पासों में 7 का योग सबसे अधिक संभव है: 36 में से 6 परिणाम यही देते हैं।',
    href: '/notes/class-10-probability',
  },
  {
    en: 'One radian is the angle at which the arc is as long as the radius, about 57.3°.',
    hi: 'एक रेडियन वह कोण है जिस पर चाप की लंबाई त्रिज्या के बराबर होती है, लगभग 57.3°।',
    href: '/notes/class-11-trigonometric-functions',
  },
  {
    en: 'A deck of 52 cards can be arranged in 52! ways, a 68-digit number. A well-shuffled deck is almost surely in an order never seen before.',
    hi: '52 पत्तों की गड्डी 52! तरीकों से जमाई जा सकती है, जो 68 अंकों की संख्या है। अच्छी तरह फेंटी गई गड्डी लगभग निश्चित रूप से ऐसे क्रम में होती है जो पहले कभी नहीं बना।',
    href: '/notes/class-11-permutations-and-combinations',
  },
  {
    en: 'A polygon with n sides has n(n − 3)/2 diagonals, so a hexagon has 9.',
    hi: 'n भुजाओं वाले बहुभुज में n(n − 3)/2 विकर्ण होते हैं, इसलिए षट्भुज में 9 होते हैं।',
    href: '/notes/class-11-permutations-and-combinations',
  },
  {
    en: '0.999… with the 9s going on forever is exactly equal to 1.',
    hi: '0.999…, जिसमें 9 अनंत तक चलते रहें, ठीक 1 के बराबर है।',
    href: '/notes/class-11-sequences-and-series',
  },
  {
    en: 'Two lines are perpendicular exactly when the product of their slopes is −1.',
    hi: 'दो रेखाएँ ठीक तब लंबवत होती हैं जब उनकी ढालों का गुणनफल −1 हो।',
    href: '/notes/class-11-straight-lines',
  },
  {
    en: 'eˣ is its own derivative: its slope at every point equals its height.',
    hi: 'eˣ का अवकलज स्वयं eˣ है: हर बिंदु पर इसकी ढाल इसकी ऊँचाई के बराबर होती है।',
    href: '/notes/class-11-limits-and-derivatives',
  },
  {
    en: 'For matrices, AB and BA can be different. The order of multiplication matters.',
    hi: 'आव्यूहों में AB और BA अलग हो सकते हैं। गुणा का क्रम मायने रखता है।',
    href: '/notes/class-12-matrices',
  },
  {
    en: '|x| is continuous everywhere but has no derivative at x = 0, where its graph has a sharp corner.',
    hi: '|x| हर जगह संतत है, पर x = 0 पर इसका अवकलज नहीं है, जहाँ इसके ग्राफ़ में नुकीला कोना है।',
    href: '/notes/class-12-continuity-and-differentiability',
  },
  {
    en: 'The area under y = 1/x from x = 1 to x = e is exactly 1.',
    hi: 'x = 1 से x = e तक y = 1/x के नीचे का क्षेत्रफल ठीक 1 है।',
    href: '/notes/class-12-integrals',
  },
  {
    en: 'Two vectors are perpendicular exactly when their dot product is zero.',
    hi: 'दो सदिश ठीक तब लंबवत होते हैं जब उनका अदिश गुणनफल शून्य हो।',
    href: '/notes/class-12-vector-algebra',
  },
  {
    en: 'Even a 99% accurate test can give mostly false alarms when what it looks for is very rare. Bayes’ theorem shows why.',
    hi: '99% सटीक टेस्ट भी ज़्यादातर गलत चेतावनी दे सकता है जब ढूँढी जाने वाली चीज़ बहुत दुर्लभ हो। बेज़ प्रमेय बताता है क्यों।',
    href: '/notes/class-12-probability',
  },
  {
    en: 'π has been calculated to more than 100 trillion digits, and its decimal never repeats.',
    hi: 'π की गणना 100 लाख करोड़ से अधिक अंकों तक हो चुकी है, और इसका दशमलव कभी दोहराता नहीं।',
    href: '/articles/why-pi-never-ends',
  },
  {
    en: '22/7 is slightly bigger than π: 3.1428… against 3.1415…',
    hi: '22/7, π से थोड़ा बड़ा है: 3.1428… बनाम 3.1415…',
    href: '/articles/why-pi-never-ends',
  },
  {
    en: 'You can find the height of a tree from one angle and one distance: h = d × tan θ.',
    hi: 'एक कोण और एक दूरी से पेड़ की ऊँचाई निकाली जा सकती है: h = d × tan θ।',
    href: '/articles/measuring-height-with-trigonometry',
  },
  {
    en: 'At 10% compound interest a year, money roughly doubles in about 7 years.',
    hi: '10% वार्षिक चक्रवृद्धि ब्याज पर पैसा लगभग 7 वर्षों में दोगुना हो जाता है।',
    href: '/articles/how-compound-interest-grows',
  },
  {
    en: 'In a group of just 23 people, there is a better than even chance that two share a birthday.',
    hi: 'केवल 23 लोगों के समूह में दो लोगों का जन्मदिन एक होने की संभावना आधे से अधिक है।',
    href: '/articles/birthday-problem',
  },
  {
    en: 'The seed spirals of a sunflower usually come in Fibonacci numbers such as 34 and 55.',
    hi: 'सूरजमुखी के बीजों के सर्पिल आमतौर पर 34 और 55 जैसी फ़िबोनाची संख्याओं में होते हैं।',
    href: '/articles/fibonacci-in-sunflowers',
  },
  {
    en: 'The golden ratio φ ≈ 1.618 is the only positive number with φ² = φ + 1.',
    hi: 'स्वर्ण अनुपात φ ≈ 1.618 एकमात्र धनात्मक संख्या है जिसके लिए φ² = φ + 1।',
    href: '/articles/fibonacci-in-sunflowers',
  },
];

/** Same fact for everyone on a given day; the list repeats once it runs out. */
export function factIndexForToday(date = new Date()): number {
  const start = Date.UTC(date.getFullYear(), 0, 0);
  const day = Math.floor((Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()) - start) / 86400000);
  return day % FACTS.length;
}
