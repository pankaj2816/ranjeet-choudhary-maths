import type { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: '*', allow: '/', disallow: '/ranjeet-choudhary-maths/admin' },
    sitemap: 'https://pankaj2816.github.io/ranjeet-choudhary-maths/sitemap.xml',
  };
}
