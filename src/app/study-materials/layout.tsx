import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Study Material | Ranjeet Choudhary Sir',
  description: "Free maths notes, books, formula sheets and worksheets from Ranjeet Choudhary Sir.",
};

export default function Layout({ children }: { children: ReactNode }) {
  return children;
}
