import type { Metadata } from 'next';
import { Suspense } from 'react';
import PracticalsHub from '@/components/practicals/PracticalsHub';

export const metadata: Metadata = {
  title: 'Video Lessons | Ranjeet Choudhary Sir',
  description: 'Maths video lessons: worked examples, chapter explanations and exam tips by Ranjeet Choudhary Sir.',
};

export default function VideosPage() {
  return (
    <Suspense fallback={<div className="min-h-[60vh]" />}>
      <PracticalsHub />
    </Suspense>
  );
}
