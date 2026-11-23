import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'About | Ranjeet Choudhary Sir',
  description: "Teaching journey, method and qualifications of Ranjeet Choudhary Sir, Mathematics teacher.",
};

export default function Layout({ children }: { children: ReactNode }) {
  return children;
}
