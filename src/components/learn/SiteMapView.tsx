'use client';

import React from 'react';
import Link from 'next/link';
import { PageHeader } from '@/components/ui/Editorial';
import { useLanguage } from '@/context/LanguageContext';
import { initialDatabase } from '@/data/initialData';
import { CLASS_LIST } from '@/lib/classes';

type Item = { href: string; label: string };

export default function SiteMapView() {
  const { L, pick } = useLanguage();

  const notes = (initialDatabase.conceptNotes || [])
    .filter((n) => n.isPublished)
    .sort((a, b) => Number(a.grade) - Number(b.grade) || a.chapter - b.chapter);
  const articles = (initialDatabase.articles || []).filter((a) => a.isPublished);

  const groups: { title: string; items: Item[] }[] = [
    {
      title: L('Main pages', 'मुख्य पेज'),
      items: [
        { href: '/', label: L('Home', 'होम') },
        { href: '/about', label: L('About Ranjeet Sir', 'रणजीत सर का परिचय') },
        { href: '/subjects', label: L('Subjects', 'विषय') },
        { href: '/updates', label: L('Notice board', 'नोटिस बोर्ड') },
        { href: '/contact', label: L('Contact & admission enquiry', 'संपर्क और प्रवेश पूछताछ') },
        { href: '/search', label: L('Search', 'खोजें') },
      ],
    },
    {
      title: L('Classes', 'कक्षाएँ'),
      items: CLASS_LIST.map((c) => ({ href: c.href, label: `${L('Class', 'कक्षा')} ${c.grade} · ${pick(c.course, c.courseHi)}` })),
    },
    {
      title: L('Study resources', 'अध्ययन सामग्री'),
      items: [
        { href: '/study-materials', label: L('Study materials', 'अध्ययन सामग्री') },
        { href: '/question-papers', label: L('Question papers', 'प्रश्न पत्र') },
        { href: '/solutions', label: L('Solutions', 'समाधान') },
        { href: '/videos', label: L('Video lessons', 'वीडियो क्लास') },
        { href: '/notes', label: L('Concept notes', 'कॉन्सेप्ट नोट्स') },
        { href: '/articles', label: L('Articles', 'लेख') },
      ],
    },
    {
      title: L('Concept notes', 'कॉन्सेप्ट नोट्स'),
      items: notes.map((n) => ({ href: `/notes/${n.slug}`, label: `${L('Class', 'कक्षा')} ${n.grade} · ${pick(n.title, n.titleHi)}` })),
    },
    {
      title: L('Articles', 'लेख'),
      items: articles.map((a) => ({ href: `/articles/${a.slug}`, label: pick(a.title, a.titleHi) })),
    },
  ];

  return (
    <>
      <PageHeader
        label={L('Site map', 'साइट मैप')}
        title={L('Every page in one place', 'सभी पेज एक जगह')}
        intro={L(
          'Find any page on the website quickly: classes, notes, papers, solutions, articles and contact.',
          'वेबसाइट का कोई भी पेज जल्दी खोजें: कक्षाएँ, नोट्स, प्रश्न पत्र, समाधान, लेख और संपर्क।',
        )}
      />
      <section className="max-w-7xl mx-auto px-5 sm:px-8 py-12 sm:py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12">
        {groups.map((g) => (
          <nav key={g.title} aria-label={g.title}>
            <h2 className="text-xl text-ink border-b border-ink pb-3">{g.title}</h2>
            <ul className="mt-2">
              {g.items.map((it) => (
                <li key={it.href} className="border-b border-line">
                  <Link href={it.href} className="flex items-center justify-between gap-4 py-3 text-[0.95rem] text-ink hover:text-accent transition-colors">
                    <span>{it.label}</span>
                    <span aria-hidden="true" className="text-muted">→</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </section>
    </>
  );
}
