import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Notice Board | Ranjeet Choudhary Sir',
  description: "Latest notices, test dates and batch updates from Ranjeet Choudhary Sir.",
};

export default function Layout({ children }: { children: ReactNode }) {
  return children;
}
