import type { Metadata } from 'next';
import SiteMapView from '@/components/learn/SiteMapView';

export const metadata: Metadata = {
  title: 'Site Map | Ranjeet Choudhary Sir',
  description: 'Every page on the website of Ranjeet Choudhary Sir, Mathematics teacher: classes, notes, papers, solutions, articles and contact.',
};

export default function SiteMapPage() {
  return <SiteMapView />;
}
