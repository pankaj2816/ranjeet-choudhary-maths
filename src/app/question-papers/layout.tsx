import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Question Papers | Ranjeet Choudhary Sir',
  description: "Maths test papers for Class 10, 11, 12 and JEE Main from Ranjeet Choudhary Sir.",
};

export default function Layout({ children }: { children: ReactNode }) {
  return children;
}
