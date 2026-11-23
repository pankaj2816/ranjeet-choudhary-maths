import type { Metadata } from 'next';
import { Suspense } from 'react';
import NotesHub from '@/components/learn/NotesHub';

export const metadata: Metadata = {
  title: 'Concept Notes | Ranjeet Choudhary Sir',
  description: 'Simple, concept-first maths notes for Class 10, 11 and 12 chapters.',
};

export default function NotesPage() {
  return (
    <Suspense fallback={<div className="min-h-[60vh]" />}>
      <NotesHub />
    </Suspense>
  );
}
