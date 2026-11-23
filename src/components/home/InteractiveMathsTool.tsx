'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { term } from '@/lib/terms';
import SectionLabel from '@/components/home/premium/SectionLabel';

type Bi = { en: string; hi: string };

interface MathsTopic {
  id: string;
  title: Bi;
  category: string;
  summary: Bi;
  formula: string;
  steps: Bi[];
  rule: Bi;
  exam: Bi;
}

const TOPICS: MathsTopic[] = [
  {
    id: 'quadratic',
    title: { en: 'Solving a quadratic equation', hi: 'द्विघात समीकरण हल करना' },
    category: 'Algebra',
    summary: {
      en: 'Any equation ax² + bx + c = 0 can be solved with one formula. The discriminant tells you the kind of roots before you solve.',
      hi: 'हर समीकरण ax² + bx + c = 0 एक ही सूत्र से हल हो सकता है। विविक्तकर हल करने से पहले ही मूलों का प्रकार बता देता है।',
    },
    formula: 'x = (−b ± √(b² − 4ac)) / 2a        D = b² − 4ac\nExample: x² − 5x + 6 = 0  ⟶  D = 1  ⟶  x = (5 ± 1)/2 = 3 or 2',
    steps: [
      { en: 'Write the equation in standard form ax² + bx + c = 0 and read off a, b, c.', hi: 'समीकरण को मानक रूप ax² + bx + c = 0 में लिखें और a, b, c पहचानें।' },
      { en: 'Find D = b² − 4ac.', hi: 'D = b² − 4ac निकालें।' },
      { en: 'D > 0: two real roots. D = 0: two equal roots. D < 0: no real roots.', hi: 'D > 0: दो वास्तविक मूल। D = 0: दो बराबर मूल। D < 0: कोई वास्तविक मूल नहीं।' },
      { en: 'Put the values in the formula and simplify both signs (+ and −).', hi: 'मान सूत्र में रखें और दोनों चिह्नों (+ और −) से सरल करें।' },
    ],
    rule: {
      en: 'Sum of roots = −b/a and product of roots = c/a. Use them to check your answer.',
      hi: 'मूलों का योग = −b/a और गुणनफल = c/a। इनसे अपना उत्तर जाँचें।',
    },
    exam: {
      en: 'Nature of roots and word problems come every year in Class 10 boards.',
      hi: 'मूलों की प्रकृति और शाब्दिक प्रश्न हर साल कक्षा 10 बोर्ड में आते हैं।',
    },
  },
  {
    id: 'trig-identity',
    title: { en: 'Proving a trigonometric identity', hi: 'त्रिकोणमितीय सर्वसमिका सिद्ध करना' },
    category: 'Geometry & Trigonometry',
    summary: {
      en: 'Almost every identity question is solved with three basic identities and a little algebra.',
      hi: 'लगभग हर सर्वसमिका का प्रश्न तीन मूल सर्वसमिकाओं और थोड़े बीजगणित से हल होता है।',
    },
    formula: 'sin²θ + cos²θ = 1      1 + tan²θ = sec²θ      1 + cot²θ = cosec²θ',
    steps: [
      { en: 'Start from the more complicated side (LHS or RHS).', hi: 'अधिक जटिल पक्ष (LHS या RHS) से शुरू करें।' },
      { en: 'Change everything into sin θ and cos θ if you are stuck.', hi: 'अटकने पर सब कुछ sin θ और cos θ में बदल दें।' },
      { en: 'Take LCM, factorise, or multiply by the conjugate.', hi: 'LCM लें, गुणनखंड करें या संयुग्मी से गुणा करें।' },
      { en: 'Use the three identities to simplify until it equals the other side.', hi: 'तीनों सर्वसमिकाओं से तब तक सरल करें जब तक दूसरा पक्ष न मिल जाए।' },
    ],
    rule: {
      en: 'Never move terms across the = sign in a proof. Work on one side only.',
      hi: 'सिद्ध करते समय पदों को = के पार न ले जाएँ। केवल एक पक्ष पर काम करें।',
    },
    exam: {
      en: 'A 3-mark identity question is almost certain in Class 10 boards.',
      hi: 'कक्षा 10 बोर्ड में 3 अंक का सर्वसमिका प्रश्न लगभग तय होता है।',
    },
  },
  {
    id: 'first-principles',
    title: { en: 'Derivative from first principles', hi: 'प्रथम सिद्धांत से अवकलज' },
    category: 'Calculus',
    summary: {
      en: 'The derivative is the slope of the curve at a point: the limit of the slope of a very small chord.',
      hi: 'अवकलज किसी बिंदु पर वक्र की ढाल है: एक बहुत छोटी जीवा की ढाल की सीमा।',
    },
    formula: "f′(x) = lim (h → 0)  [f(x + h) − f(x)] / h\nExample: f(x) = x²  ⟶  [(x + h)² − x²] / h = 2x + h  ⟶  f′(x) = 2x",
    steps: [
      { en: 'Write f(x + h) by replacing x with x + h.', hi: 'x की जगह x + h रखकर f(x + h) लिखें।' },
      { en: 'Subtract f(x) and simplify the numerator.', hi: 'f(x) घटाएँ और अंश को सरल करें।' },
      { en: 'Cancel the common h from numerator and denominator.', hi: 'अंश और हर से उभयनिष्ठ h काटें।' },
      { en: 'Now put h = 0 to get f′(x).', hi: 'अब h = 0 रखकर f′(x) प्राप्त करें।' },
    ],
    rule: {
      en: 'You can only put h = 0 after the h in the denominator has been cancelled.',
      hi: 'हर में से h कटने के बाद ही h = 0 रखा जा सकता है।',
    },
    exam: {
      en: 'Asked in Class 11 boards; the idea is the base of all of Class 12 calculus.',
      hi: 'कक्षा 11 बोर्ड में पूछा जाता है; यही विचार कक्षा 12 के पूरे कलन का आधार है।',
    },
  },
  {
    id: 'by-parts',
    title: { en: 'Integration by parts', hi: 'खंडशः समाकलन' },
    category: 'Calculus',
    summary: {
      en: 'Used to integrate a product of two different types of functions, such as x·eˣ or x·sin x.',
      hi: 'दो अलग प्रकार के फलनों के गुणनफल, जैसे x·eˣ या x·sin x, का समाकलन करने के लिए।',
    },
    formula: '∫ u·v dx = u ∫ v dx − ∫ [ u′ · ∫ v dx ] dx\nExample: ∫ x·eˣ dx = x·eˣ − ∫ eˣ dx = eˣ(x − 1) + C',
    steps: [
      { en: 'Choose u (the first function) using ILATE: Inverse, Log, Algebraic, Trig, Exponential.', hi: 'ILATE से u (पहला फलन) चुनें: प्रतिलोम, लघुगणक, बीजीय, त्रिकोणमितीय, चरघातांकी।' },
      { en: 'Integrate the second function v.', hi: 'दूसरे फलन v का समाकलन करें।' },
      { en: 'Differentiate u and multiply by ∫v dx inside the second integral.', hi: 'u का अवकलन करें और दूसरे समाकल में ∫v dx से गुणा करें।' },
      { en: 'Finish the remaining integral and add the constant C.', hi: 'बचा हुआ समाकल पूरा करें और अचर C जोड़ें।' },
    ],
    rule: {
      en: 'Pick u so that its derivative becomes simpler. That is what ILATE does.',
      hi: 'u ऐसा चुनें कि उसका अवकलज सरल हो जाए। ILATE यही करता है।',
    },
    exam: {
      en: 'A standard 3 to 4 mark question in Class 12 boards and a regular in JEE Main.',
      hi: 'कक्षा 12 बोर्ड का 3 से 4 अंक का मानक प्रश्न और JEE मेन में नियमित।',
    },
  },
  {
    id: 'bayes',
    title: { en: "Bayes' theorem", hi: 'बेज़ प्रमेय' },
    category: 'Statistics & Probability',
    summary: {
      en: 'Finds the probability of a cause when you already know the result happened.',
      hi: 'जब परिणाम हो चुका हो, तब उसके किसी कारण की प्रायिकता निकालता है।',
    },
    formula: 'P(Eᵢ | A) = P(Eᵢ)·P(A | Eᵢ) / Σ P(Eⱼ)·P(A | Eⱼ)',
    steps: [
      { en: 'List the possible causes E₁, E₂, … and their probabilities P(Eᵢ).', hi: 'संभावित कारण E₁, E₂, … और उनकी प्रायिकताएँ P(Eᵢ) लिखें।' },
      { en: 'Write P(A | Eᵢ): the chance of the result for each cause.', hi: 'P(A | Eᵢ) लिखें: हर कारण से परिणाम की प्रायिकता।' },
      { en: 'Find P(A) with the total probability theorem (the denominator).', hi: 'संपूर्ण प्रायिकता प्रमेय से P(A) (हर) निकालें।' },
      { en: 'Divide the term for the asked cause by P(A).', hi: 'पूछे गए कारण वाले पद को P(A) से भाग दें।' },
    ],
    rule: {
      en: 'Draw a tree diagram first. Each branch product is one term of the sum.',
      hi: 'पहले वृक्ष आरेख बनाएँ। हर शाखा का गुणनफल योग का एक पद है।',
    },
    exam: {
      en: 'A 5-mark case-based question in Class 12 boards almost every year.',
      hi: 'कक्षा 12 बोर्ड में लगभग हर साल 5 अंक का केस-आधारित प्रश्न।',
    },
  },
];

export default function InteractiveMathsTool() {
  const { t, L, isHi } = useLanguage();
  const [activeId, setActiveId] = useState(TOPICS[0].id);
  const active = TOPICS.find((x) => x.id === activeId) || TOPICS[0];
  const b = (x: Bi) => L(x.en, x.hi);

  return (
    <section className="bg-paper-deep border-t border-line">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-20 lg:py-28">
        <div className="max-w-3xl">
          <SectionLabel index="" label={t.interactive.badge} />
          <h2 className="mt-6 text-4xl sm:text-5xl leading-[1.08] text-ink">{t.interactive.title}</h2>
          <p className="mt-5 text-[1.02rem] leading-relaxed text-muted">{t.interactive.subtitle}</p>
        </div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-4 space-y-2" role="tablist" aria-label={L('Topics', 'विषय')}>
            {TOPICS.map((topic) => {
              const on = topic.id === active.id;
              return (
                <button
                  key={topic.id}
                  role="tab"
                  aria-selected={on}
                  onClick={() => setActiveId(topic.id)}
                  className={`w-full text-left px-5 py-4 rounded-xl border transition-colors flex items-center justify-between gap-4 ${
                    on ? 'bg-white border-accent' : 'bg-transparent border-line hover:border-ink/40'
                  }`}
                >
                  <span>
                    <span className={`block text-xs font-medium ${on ? 'text-accent' : 'text-muted'}`}>{term(topic.category, isHi)}</span>
                    <span className="mt-0.5 block font-semibold text-ink">{b(topic.title)}</span>
                  </span>
                  <ArrowRight className={`w-4 h-4 shrink-0 ${on ? 'text-accent' : 'text-muted'}`} />
                </button>
              );
            })}
            <Link
              href="/notes"
              className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:text-accent-deep"
            >
              {L('Read full chapter notes', 'पूरे अध्याय के नोट्स पढ़ें')}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="lg:col-span-8 bg-white border border-line rounded-2xl p-6 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-wider text-accent">{term(active.category, isHi)}</p>
            <h3 className="mt-2 text-2xl sm:text-3xl font-semibold text-ink">{b(active.title)}</h3>
            <p className="mt-3 text-muted leading-relaxed">{b(active.summary)}</p>

            <div className="mt-6 p-4 rounded-xl bg-paper-deep border border-line overflow-x-auto">
              <p className="text-xs font-medium text-muted">{L('Formula', 'सूत्र')}</p>
              <p className="mt-1 font-mono text-sm sm:text-[0.95rem] text-ink whitespace-pre-wrap">{active.formula}</p>
            </div>

            <h4 className="mt-7 text-sm font-semibold text-ink">{L('Step by step', 'चरण दर चरण')}</h4>
            <ol className="mt-3 space-y-2">
              {active.steps.map((s, i) => (
                <li key={i} className="flex items-start gap-3 text-[0.95rem] text-ink">
                  <span className="w-6 h-6 shrink-0 rounded-full bg-accent-soft text-accent text-xs font-semibold flex items-center justify-center mt-0.5">
                    {i + 1}
                  </span>
                  <span className="leading-relaxed">{b(s)}</span>
                </li>
              ))}
            </ol>

            <div className="mt-7 grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-line">
              <div>
                <p className="text-sm font-semibold text-ink">{L('Rule to remember', 'याद रखने का नियम')}</p>
                <p className="mt-1 text-[0.92rem] leading-relaxed text-muted">{b(active.rule)}</p>
              </div>
              <div>
                <p className="text-sm font-semibold text-ink">{L('Why it matters in exams', 'परीक्षा में महत्व')}</p>
                <p className="mt-1 text-[0.92rem] leading-relaxed text-muted">{b(active.exam)}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
