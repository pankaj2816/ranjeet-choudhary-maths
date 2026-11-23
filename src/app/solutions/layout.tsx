import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Solutions | Ranjeet Choudhary Sir',
  description: "Worked solutions and answer keys for Ranjeet Choudhary Sir's maths test papers.",
};

export default function Layout({ children }: { children: ReactNode }) {
  return children;
}
