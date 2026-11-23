import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Contact | Ranjeet Choudhary Sir',
  description: "Contact Ranjeet Choudhary Sir about maths batches, timings and admissions.",
};

export default function Layout({ children }: { children: ReactNode }) {
  return children;
}
