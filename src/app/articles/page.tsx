import type { Metadata } from 'next';
import ArticlesHub from '@/components/learn/ArticlesHub';

export const metadata: Metadata = {
  title: 'Articles | Ranjeet Choudhary Sir',
  description: 'Illustrated maths articles that connect the syllabus to everyday life.',
};

export default function ArticlesPage() {
  return <ArticlesHub />;
}
