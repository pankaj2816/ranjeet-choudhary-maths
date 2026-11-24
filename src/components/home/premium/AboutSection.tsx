'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import SafeImage from '@/components/ui/SafeImage';
import SectionLabel from './SectionLabel';

export default function AboutSection() {
  const { t, L } = useLanguage();
  const quote = t.about.philosophyQuote.replace(/^[“"]|[”"]$/g, '');

  return (
    <section className="bg-paper">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-20 items-center">
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative aspect-[9/10] overflow-hidden bg-paper">
              <SafeImage
                src="/images/ranjeet-photo-2.jpg"
                alt={L('Ranjeet Choudhary Sir', 'रणजीत चौधरी सर')}
                fill
                sizes="(min-width: 1024px) 38vw, 90vw"
                className="object-cover object-[50%_22%]"
              />
            </div>
            <p className="mt-4 text-[0.8rem] text-muted">{L('Ranjeet Choudhary Sir', 'रणजीत चौधरी सर')} — {t.hero.teacherCardRole}</p>
          </div>

          <div className="lg:col-span-7 order-1 lg:order-2">
            <SectionLabel index="02" label={t.home.secAbout} />
            <h2 className="mt-6 text-4xl sm:text-5xl leading-[1.08] text-ink">{t.home.aboutTitle}</h2>

            <blockquote className="mt-10 pl-6 border-l-2 border-accent">
              <p className="font-display italic text-2xl sm:text-[1.7rem] leading-snug text-ink" style={{ fontVariationSettings: '"opsz" 60' }}>
                {quote}
              </p>
            </blockquote>

            <div className="mt-10 space-y-5 text-[1.02rem] leading-relaxed text-muted max-w-2xl">
              <p>{t.about.journeyP1}</p>
              <p>{t.about.journeyP2}</p>
            </div>

            <Link href="/about" className="group mt-10 inline-flex items-center gap-2 text-[0.95rem] font-medium text-ink">
              <span className="link-underline">{t.home.readProfile}</span>
              <ArrowRight className="w-4 h-4 text-accent transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
