'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import ElementTile from '@/components/ui/ElementTile';
import { PageHeader } from '@/components/ui/Editorial';
import SectionLabel from '@/components/home/premium/SectionLabel';
import InteractiveMathsTool from '@/components/home/InteractiveMathsTool';
import { useLanguage } from '@/context/LanguageContext';

const TILES: Record<string, { symbol: string; number: number; name: string }> = {
  algebra: { symbol: 'x²', number: 1, name: 'Algebra' },
  calculus: { symbol: '∫', number: 2, name: 'Calculus' },
  geometry: { symbol: 'π', number: 3, name: 'Geometry' },
  statistics: { symbol: 'σ', number: 4, name: 'Statistics' },
};

type Mod = { title: string; titleHi: string; topics: string[]; topicsHi: string[] };

const SUBJECT_DETAILS: {
  id: string;
  title: string;
  titleHi: string;
  tagline: string;
  taglineHi: string;
  description: string;
  descriptionHi: string;
  coreModules: Mod[];
  materialsUrl: string;
  papersUrl: string;
}[] = [
  {
    id: 'algebra',
    title: 'Algebra',
    titleHi: 'बीजगणित',
    tagline: 'Equations, Progressions, Matrices & Counting',
    taglineHi: 'समीकरण, श्रेढ़ियाँ, आव्यूह और गणना',
    description: 'Algebra is the language of the rest of Maths. Students learn to handle expressions confidently, see the pattern behind each type of equation, and choose the shortest method instead of memorising long procedures.',
    descriptionHi: 'बीजगणित बाकी गणित की भाषा है। विद्यार्थी व्यंजकों को आत्मविश्वास से हल करना, हर प्रकार के समीकरण के पीछे का पैटर्न देखना और लंबी विधियाँ रटने की जगह सबसे छोटा तरीका चुनना सीखते हैं।',
    coreModules: [
      {
        title: 'Numbers & Polynomials',
        titleHi: 'संख्याएँ एवं बहुपद',
        topics: ['Real numbers, HCF & LCM', 'Zeroes of a polynomial', 'Relation between zeroes and coefficients', 'Complex numbers & Argand plane'],
        topicsHi: ['वास्तविक संख्याएँ, HCF और LCM', 'बहुपद के शून्यक', 'शून्यकों और गुणांकों में संबंध', 'सम्मिश्र संख्याएँ और आर्गंड तल'],
      },
      {
        title: 'Equations & Inequalities',
        titleHi: 'समीकरण एवं असमिकाएँ',
        topics: ['Pair of linear equations', 'Quadratic equations & nature of roots', 'Linear inequalities', 'Word problems'],
        topicsHi: ['रैखिक समीकरण युग्म', 'द्विघात समीकरण और मूलों की प्रकृति', 'रैखिक असमिकाएँ', 'शाब्दिक प्रश्न'],
      },
      {
        title: 'Sequences, Counting & Binomial',
        titleHi: 'अनुक्रम, गणना एवं द्विपद',
        topics: ['Arithmetic progressions', 'Geometric progressions', 'Permutations & combinations', 'Binomial theorem'],
        topicsHi: ['समांतर श्रेढ़ी', 'गुणोत्तर श्रेढ़ी', 'क्रमचय और संचय', 'द्विपद प्रमेय'],
      },
      {
        title: 'Matrices & Determinants',
        titleHi: 'आव्यूह एवं सारणिक',
        topics: ['Types of matrices & operations', 'Properties of determinants', 'Adjoint & inverse', 'Solving equations by matrix method'],
        topicsHi: ['आव्यूहों के प्रकार और संक्रियाएँ', 'सारणिकों के गुणधर्म', 'सहखंडज और व्युत्क्रम', 'आव्यूह विधि से समीकरण हल करना'],
      },
    ],
    materialsUrl: '/study-materials?subject=Algebra',
    papersUrl: '/question-papers?subject=Algebra',
  },
  {
    id: 'calculus',
    title: 'Calculus',
    titleHi: 'कलन',
    tagline: 'Limits, Derivatives, Integrals & Differential Equations',
    taglineHi: 'सीमा, अवकलज, समाकलन और अवकल समीकरण',
    description: 'Calculus is taught with graphs first: what a limit looks like, why a derivative is a slope and why an integral is an area. Once the picture is clear, the rules and shortcuts make sense and are easy to remember.',
    descriptionHi: 'कलन पहले ग्राफ़ से पढ़ाया जाता है: सीमा कैसी दिखती है, अवकलज ढाल क्यों है और समाकल क्षेत्रफल क्यों है। चित्र साफ़ होने पर नियम और शॉर्टकट समझ आते हैं और आसानी से याद रहते हैं।',
    coreModules: [
      {
        title: 'Functions & Limits',
        titleHi: 'फलन एवं सीमा',
        topics: ['Relations, functions & their graphs', 'Inverse trigonometric functions', 'Standard limits', 'Continuity'],
        topicsHi: ['संबंध, फलन और उनके ग्राफ़', 'प्रतिलोम त्रिकोणमितीय फलन', 'मानक सीमाएँ', 'सांतत्य'],
      },
      {
        title: 'Differentiation',
        titleHi: 'अवकलन',
        topics: ['First principles', 'Chain rule & implicit differentiation', 'Logarithmic & parametric differentiation', 'Second-order derivatives'],
        topicsHi: ['प्रथम सिद्धांत', 'श्रृंखला नियम और अस्पष्ट अवकलन', 'लघुगणकीय और प्राचलिक अवकलन', 'द्वितीय कोटि के अवकलज'],
      },
      {
        title: 'Applications of Derivatives',
        titleHi: 'अवकलज के अनुप्रयोग',
        topics: ['Rate of change', 'Increasing & decreasing functions', 'Maxima & minima', 'Case-based problems'],
        topicsHi: ['परिवर्तन की दर', 'वर्धमान और ह्रासमान फलन', 'उच्चतम और निम्नतम', 'केस-आधारित प्रश्न'],
      },
      {
        title: 'Integration & Differential Equations',
        titleHi: 'समाकलन एवं अवकल समीकरण',
        topics: ['Substitution, partial fractions & by parts', 'Definite integrals & properties', 'Area under curves', 'Variable separable & linear differential equations'],
        topicsHi: ['प्रतिस्थापन, आंशिक भिन्न और खंडशः', 'निश्चित समाकल और गुणधर्म', 'वक्रों के नीचे का क्षेत्रफल', 'चर पृथक्करणीय और रैखिक अवकल समीकरण'],
      },
    ],
    materialsUrl: '/study-materials?subject=Calculus',
    papersUrl: '/question-papers?subject=Calculus',
  },
  {
    id: 'geometry',
    title: 'Geometry & Trigonometry',
    titleHi: 'ज्यामिति एवं त्रिकोणमिति',
    tagline: 'Triangles, Identities, Coordinates & Vectors',
    taglineHi: 'त्रिभुज, सर्वसमिकाएँ, निर्देशांक और सदिश',
    description: 'Every geometry and trigonometry problem starts with a neat, labelled figure. Students learn to draw first, mark what is given, and then pick the right theorem or identity, which removes most of the guesswork.',
    descriptionHi: 'ज्यामिति और त्रिकोणमिति का हर प्रश्न एक साफ़, नामांकित चित्र से शुरू होता है। विद्यार्थी पहले चित्र बनाना, दिया हुआ अंकित करना और फिर सही प्रमेय या सर्वसमिका चुनना सीखते हैं, जिससे अंदाज़ा लगाने की ज़रूरत लगभग खत्म हो जाती है।',
    coreModules: [
      {
        title: 'Triangles, Circles & Mensuration',
        titleHi: 'त्रिभुज, वृत्त एवं क्षेत्रमिति',
        topics: ['Similarity & Basic Proportionality Theorem', 'Tangents to a circle', 'Areas related to circles', 'Surface areas & volumes'],
        topicsHi: ['समरूपता और आधारभूत समानुपातिकता प्रमेय', 'वृत्त की स्पर्श रेखाएँ', 'वृत्तों से संबंधित क्षेत्रफल', 'पृष्ठीय क्षेत्रफल और आयतन'],
      },
      {
        title: 'Trigonometry',
        titleHi: 'त्रिकोणमिति',
        topics: ['Trigonometric ratios & identities', 'Heights & distances', 'Trigonometric functions & graphs', 'Compound & multiple angles'],
        topicsHi: ['त्रिकोणमितीय अनुपात और सर्वसमिकाएँ', 'ऊँचाई और दूरी', 'त्रिकोणमितीय फलन और ग्राफ़', 'संयुक्त और अपवर्त्य कोण'],
      },
      {
        title: 'Coordinate Geometry',
        titleHi: 'निर्देशांक ज्यामिति',
        topics: ['Distance & section formula', 'Straight lines', 'Circle, parabola, ellipse & hyperbola', 'Introduction to 3D'],
        topicsHi: ['दूरी और विभाजन सूत्र', 'सरल रेखाएँ', 'वृत्त, परवलय, दीर्घवृत्त और अतिपरवलय', 'त्रिविमीय ज्यामिति का परिचय'],
      },
      {
        title: 'Vectors & 3D Geometry',
        titleHi: 'सदिश एवं त्रिविमीय ज्यामिति',
        topics: ['Dot & cross product', 'Direction cosines & ratios', 'Equation of a line in space', 'Shortest distance between lines'],
        topicsHi: ['अदिश और सदिश गुणनफल', 'दिक्-कोसाइन और दिक्-अनुपात', 'अंतरिक्ष में रेखा का समीकरण', 'रेखाओं के बीच न्यूनतम दूरी'],
      },
    ],
    materialsUrl: '/study-materials?subject=Geometry+%26+Trigonometry',
    papersUrl: '/question-papers?subject=Geometry+%26+Trigonometry',
  },
  {
    id: 'statistics',
    title: 'Statistics & Probability',
    titleHi: 'सांख्यिकी एवं प्रायिकता',
    tagline: 'Data, Chance & Linear Programming',
    taglineHi: 'आँकड़े, संयोग और रैखिक प्रोग्रामन',
    description: 'Statistics and probability are taught through real data and simple experiments with coins, dice and cards, so that formulas like mean, variance and Bayes’ theorem feel natural rather than abstract.',
    descriptionHi: 'सांख्यिकी और प्रायिकता वास्तविक आँकड़ों और सिक्के, पासे व ताश जैसे आसान प्रयोगों से पढ़ाई जाती है, ताकि माध्य, प्रसरण और बेज़ प्रमेय जैसे सूत्र स्वाभाविक लगें।',
    coreModules: [
      {
        title: 'Statistics',
        titleHi: 'सांख्यिकी',
        topics: ['Mean, median & mode of grouped data', 'Mean deviation', 'Variance & standard deviation', 'Reading data from graphs'],
        topicsHi: ['वर्गीकृत आँकड़ों का माध्य, माध्यक और बहुलक', 'माध्य विचलन', 'प्रसरण और मानक विचलन', 'ग्राफ़ से आँकड़े पढ़ना'],
      },
      {
        title: 'Probability',
        titleHi: 'प्रायिकता',
        topics: ['Classical probability', 'Conditional probability', 'Total probability & Bayes’ theorem', 'Random variables & distributions'],
        topicsHi: ['प्राचीन प्रायिकता', 'सप्रतिबंध प्रायिकता', 'संपूर्ण प्रायिकता और बेज़ प्रमेय', 'यादृच्छिक चर और बंटन'],
      },
      {
        title: 'Linear Programming',
        titleHi: 'रैखिक प्रोग्रामन',
        topics: ['Forming the problem', 'Feasible region', 'Corner point method', 'Case-based problems'],
        topicsHi: ['प्रश्न बनाना', 'सुसंगत क्षेत्र', 'कोणीय बिंदु विधि', 'केस-आधारित प्रश्न'],
      },
    ],
    materialsUrl: '/study-materials?subject=Statistics+%26+Probability',
    papersUrl: '/question-papers?subject=Statistics+%26+Probability',
  },
];

export default function SubjectsPage() {
  const { L } = useLanguage();
  return (
    <>
      <PageHeader
        label={L('Curriculum', 'पाठ्यक्रम')}
        title={L('Maths subjects & expertise', 'गणित के विषय')}
        intro={L(
          'Detailed syllabus breakdowns and the way each part of Maths is taught: Algebra, Calculus, Geometry & Trigonometry, and Statistics & Probability.',
          'हर भाग का विस्तृत पाठ्यक्रम और उसे पढ़ाने का तरीका: बीजगणित, कलन, ज्यामिति एवं त्रिकोणमिति, और सांख्यिकी एवं प्रायिकता।',
        )}
        aside={
          <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm" aria-label={L('Jump to subject', 'विषय पर जाएँ')}>
            {SUBJECT_DETAILS.map((s) => (
              <a key={s.id} href={`#${s.id}`} className="link-underline text-ink">
                {L(s.title, s.titleHi)}
              </a>
            ))}
          </nav>
        }
      />

      {SUBJECT_DETAILS.map((subj, idx) => {
        const tile = TILES[subj.id] || TILES.algebra;
        return (
          <section
            key={subj.id}
            id={subj.id}
            className={`scroll-mt-20 ${idx % 2 === 1 ? 'bg-paper-deep border-y border-line' : 'bg-paper'}`}
          >
            <div className="max-w-7xl mx-auto px-5 sm:px-8 py-20 lg:py-28">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-20">
                <div className="lg:col-span-5">
                  <SectionLabel index={String(idx + 1).padStart(2, '0')} label={L('Subject', 'विषय')} />
                  <div className="mt-8 flex items-start gap-5">
                    <ElementTile {...tile} size="lg" tone={idx === 0 ? 'accent' : 'light'} />
                    <div>
                      <h2 className="text-4xl sm:text-5xl leading-[1.05] text-ink">{L(subj.title, subj.titleHi)}</h2>
                      <p className="mt-2 text-accent">{L(subj.tagline, subj.taglineHi)}</p>
                    </div>
                  </div>
                  <p className="mt-8 text-[1.02rem] leading-relaxed text-muted">{L(subj.description, subj.descriptionHi)}</p>
                  <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4">
                    <Link href={subj.materialsUrl} className="group inline-flex items-center gap-2 px-6 py-3.5 bg-ink text-paper text-sm font-medium hover:bg-accent transition-colors">
                      {L('Study material', 'अध्ययन सामग्री')}
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                    <Link href={subj.papersUrl} className="link-underline text-sm font-medium text-ink">
                      {L('Question papers', 'प्रश्न पत्र')}
                    </Link>
                  </div>
                </div>

                <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-10 lg:pt-16">
                  {subj.coreModules.map((mod) => (
                    <div key={mod.title} className="border-t border-ink pt-5">
                      <h3 className="font-display text-xl text-ink">{L(mod.title, mod.titleHi)}</h3>
                      <ul className="mt-3">
                        {mod.topics.map((topic, ti) => (
                          <li key={topic} className="py-2 border-b border-line text-[0.92rem] text-muted">
                            {L(topic, mod.topicsHi[ti] || topic)}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        );
      })}

      <InteractiveMathsTool />
    </>
  );
}
