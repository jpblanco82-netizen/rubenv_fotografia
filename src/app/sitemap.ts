import { MetadataRoute } from 'next';
import { SEO_CONFIG } from '@/constants/seo';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    '',
    '/paisajes',
    '/nocturna',
    '/aerea',
    '/talleres',
    '/sobre-mi',
    '/contacto',
  ].map((route) => ({
    url: `${SEO_CONFIG.baseUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));

  return [...routes];
}
