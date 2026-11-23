import type { Metadata } from 'next';
import ClassPage from '@/components/classes/ClassPage';

export const metadata: Metadata = {
  title: 'Class 12 Maths | Ranjeet Choudhary Sir',
  description: 'Class 12 Maths notes, books, question papers, solutions and notices from Ranjeet Choudhary Sir.',
};

export default function Class12Page() {
  return <ClassPage grade="12" />;
}
