import type { Metadata } from 'next';
import ClassPage from '@/components/classes/ClassPage';

export const metadata: Metadata = {
  title: 'Class 11 Maths | Ranjeet Choudhary Sir',
  description: 'Class 11 Maths notes, books, question papers, solutions and notices from Ranjeet Choudhary Sir.',
};

export default function Class11Page() {
  return <ClassPage grade="11" />;
}
