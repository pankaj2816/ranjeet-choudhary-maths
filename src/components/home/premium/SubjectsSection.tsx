'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import ElementTile from '@/components/ui/ElementTile';
import SectionLabel from './SectionLabel';

export default function SubjectsSection() {
  const { t, isHi } = useLanguage();
  const L2 = (en: string[], hi: string[]) => (isHi ? hi : en);

  const subjects = [
    {
      id: 'algebra',
      tile: { symbol: 'x²', number: 1, name: 'Algebra' },
      name: t.subjects.organicName,
      sub: t.hero.organicSub,
      desc: t.subjects.organicDesc,
      topics: L2(
        [
          'Polynomials & quadratic equations',
          'Arithmetic & geometric progressions',
          'Permutations, combinations & binomial theorem',
          'Complex numbers',
          'Matrices & determinants',
        ],
        [
          'बहुपद और द्विघात समीकरण',
          'समांतर और गुणोत्तर श्रेढ़ी',
          'क्रमचय, संचय और द्विपद प्रमेय',
          'सम्मिश्र संख्याएँ',
          'आव्यूह और सारणिक',
        ],
      ),
    },
    {
      id: 'calculus',
      tile: { symbol: '∫', number: 2, name: 'Calculus' },
      name: t.subjects.inorganicName,
      sub: t.hero.inorganicSub,
      desc: t.subjects.inorganicDesc,
      topics: L2(
        [
          'Relations & functions',
          'Limits, continuity & differentiability',
          'Applications of derivatives',
          'Integrals & area under curves',
          'Differential equations',
        ],
        [
          'संबंध और फलन',
          'सीमा, सांतत्य और अवकलनीयता',
          'अवकलज के अनुप्रयोग',
          'समाकलन और वक्रों के नीचे का क्षेत्रफल',
          'अवकल समीकरण',
        ],
      ),
    },
    {
      id: 'geometry',
      tile: { symbol: 'π', number: 3, name: 'Geometry' },
      name: t.subjects.practicalName,
      sub: t.hero.practicalSub,
      desc: t.subjects.practicalDesc,
      topics: L2(
        [
          'Triangles & circles',
          'Trigonometric ratios & identities',
          'Coordinate geometry & conic sections',
          'Vectors & 3D geometry',
          'Statistics & probability',
        ],
        [
          'त्रिभुज और वृत्त',
          'त्रिकोणमितीय अनुपात और सर्वसमिकाएँ',
          'निर्देशांक ज्यामिति और शंकु परिच्छेद',
          'सदिश और त्रिविमीय ज्यामिति',
          'सांख्यिकी और प्रायिकता',
        ],
      ),
    },
  ];

  return (
    <section className="bg-paper">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-20 items-end">
          <div className="lg:col-span-7">
            <SectionLabel index="03" label={t.home.secSubjects} />
            <h2 className="mt-6 text-4xl sm:text-5xl leading-[1.08] text-ink">{t.subjects.title}</h2>
          </div>
          <p className="lg:col-span-5 text-[1.02rem] leading-relaxed text-muted">{t.subjects.subtitle}</p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 border-t border-line">
          {subjects.map((s, i) => (
            <article
              key={s.id}
              id={s.id}
              className={`pt-10 pb-4 md:pr-8 lg:pr-12 ${
                i > 0 ? 'border-t md:border-t-0 md:border-l border-line md:pl-8 lg:pl-12 mt-10 md:mt-0' : ''
              } flex flex-col`}
            >
              <ElementTile {...s.tile} size="md" tone={i === 0 ? 'accent' : 'light'} />
              <h3 className="mt-7 font-display text-[1.85rem] leading-tight text-ink" style={{ fontVariationSettings: '"opsz" 60' }}>
                {s.name}
              </h3>
              <p className="mt-1 text-sm text-accent">{s.sub}</p>
              <p className="mt-5 text-[0.98rem] leading-relaxed text-muted">{s.desc}</p>

              <ul className="mt-7 text-[0.9rem] text-ink">
                {s.topics.map((topic) => (
                  <li key={topic} className="py-2.5 border-b border-line last:border-b-0">
                    {topic}
                  </li>
                ))}
              </ul>

              <Link
                href={`/subjects#${s.id}`}
                className="group mt-8 inline-flex items-center gap-2 text-[0.92rem] font-medium text-ink"
              >
                <span className="link-underline">{t.subjects.exploreBtn}</span>
                <ArrowRight className="w-4 h-4 text-accent transition-transform group-hover:translate-x-1" />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
