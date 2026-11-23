import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Subjects | Ranjeet Choudhary Sir',
  description: "Algebra, Calculus, Geometry & Trigonometry and Statistics & Probability syllabus taught by Ranjeet Choudhary Sir.",
};

export default function Layout({ children }: { children: ReactNode }) {
  return children;
}
