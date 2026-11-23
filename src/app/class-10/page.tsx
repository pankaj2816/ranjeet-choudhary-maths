import type { Metadata } from 'next';
import ClassPage from '@/components/classes/ClassPage';

export const metadata: Metadata = {
  title: 'Class 10 Maths | Ranjeet Choudhary Sir',
  description: 'Class 10 Maths notes, books, question papers, solutions and notices from Ranjeet Choudhary Sir.',
};

export default function Class10Page() {
  return <ClassPage grade="10" />;
}
