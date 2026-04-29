import { MetadataRoute } from 'next';
import { SEO_CONFIG } from '@/constants/seo';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/admin/', '/api/'],
    },
    sitemap: `${SEO_CONFIG.baseUrl}/sitemap.xml`,
  };
}
