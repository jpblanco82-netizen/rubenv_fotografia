import { PhotographerData } from '@/types/portfolio';

export const portfolioData: PhotographerData = {
  name: 'RUBÉN VELA FOTOGRAFÍA',
  tagline: '20 años explorando cumbres, 8 años capturando su luz',
  about: {
    story: [
      'Mi formación técnica en Medio Ambiente forjó mi entendimiento del entorno, pero fue mi conexión vital con la montaña desde hace más de dos décadas la que me enseñó a mirar.',
      'Durante los últimos 8 años, me he especializado y dedicado intensamente a la fotografía de paisaje y nocturna. No busco solo documentar un lugar, sino capturar la atmósfera, el silencio y la majestuosidad de los entornos más remotos y salvajes.',
      'Cada imagen es el resultado de una planificación meticulosa, la paciencia infinita esperando la luz perfecta y un profundo respeto por la naturaleza.'
    ],
    highlights: [
      'Fotografía Nocturna con reconocimientos internacionales.',
      'Expediciones fotográficas en el Himalaya, Alpes y Picos de Europa.',
      'Perspectivas únicas mediante fotografía aérea y vista de pájaro.'
    ],
    profileImage: '/images/sobre-mi.jpg'
  },
  categories: [
    {
      id: 'nocturna',
      title: 'Fotografía Nocturna',
      description: 'La magia y el misterio de los cielos oscuros. Trabajo galardonado internacionalmente.',
      coverImage: '/images/nocturna.jpg',
      images: [
        '/images/nocturna-1.jpg',
        '/images/nocturna-2.jpg',
        '/images/nocturna-3.jpg',
        '/images/nocturna-4.jpg'
      ]
    },
    {
      id: 'paisajes',
      title: 'Paisajes',
      description: 'Himalaya, Alpes y Picos de Europa. La inmensidad de la montaña.',
      coverImage: '/images/paisajes.jpg',
      images: [
        '/images/paisajes-1.jpg',
        '/images/paisajes-2.jpg',
        '/images/paisajes-3.jpg',
        '/images/paisajes-4.jpg',
        '/images/paisajes-5.jpg',
        '/images/paisajes-6.jpg'
      ]
    },
    {
      id: 'aerea',
      title: 'Vista de Pájaro',
      description: 'El mundo desde otra perspectiva mediante fotografía aérea y drones.',
      coverImage: '/images/aerea.jpg',
      images: [
        '/images/aerea-1.jpg',
        '/images/aerea-2.jpg',
        '/images/aerea-3.jpg',
        '/images/aerea-4.jpg'
      ]
    }
  ],
  featuredProjects: [
    {
      id: 'hero',
      title: 'Picos de Europa',
      categoryId: 'paisajes',
      image: '/images/hero.jpg'
    }
  ]
};
