import { SEO_CONFIG } from '@/constants/seo';

export default function StructuredData() {
  const businessSchema = {
    '@context': 'https://schema.org',
    '@type': 'PhotographyBusiness',
    '@id': `${SEO_CONFIG.baseUrl}/#business`,
    'name': SEO_CONFIG.siteName,
    'url': SEO_CONFIG.baseUrl,
    'logo': `${SEO_CONFIG.baseUrl}/favicon.ico`, // Ideally a real logo if available
    'image': `${SEO_CONFIG.baseUrl}/images/hero.jpg`,
    'description': SEO_CONFIG.defaultDescription,
    'address': {
      '@type': 'PostalAddress',
      'addressLocality': SEO_CONFIG.geo.placename,
      'addressRegion': 'Castilla y León',
      'addressCountry': 'ES'
    },
    'geo': {
      '@type': 'GeoCoordinates',
      'latitude': SEO_CONFIG.geo.latitude,
      'longitude': SEO_CONFIG.geo.longitude
    },
    'hasMap': 'https://www.google.com/maps?q=Valladolid,Spain',
    'openingHoursSpecification': {
      '@type': 'OpeningHoursSpecification',
      'dayOfWeek': [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday'
      ],
      'opens': '09:00',
      'closes': '19:00'
    },
    'sameAs': [
      SEO_CONFIG.instagramUrl
    ],
    'priceRange': '$$',
    'areaServed': SEO_CONFIG.contact.areaServed.map(area => ({
      '@type': 'AdministrativeArea',
      'name': area
    }))
  };

  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `${SEO_CONFIG.baseUrl}/#person`,
    'name': SEO_CONFIG.author,
    'url': SEO_CONFIG.baseUrl,
    'jobTitle': 'Fotógrafo de Paisaje y Nocturna',
    'description': 'Especialista en fotografía de montaña y nocturna con más de 20 años de experiencia en exploración de cumbres.',
    'image': `${SEO_CONFIG.baseUrl}/images/sobre-mi/sobre-mi.jpg`,
    'sameAs': [
      SEO_CONFIG.instagramUrl
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ 
        __html: JSON.stringify([businessSchema, personSchema]) 
      }}
    />
  );
}
