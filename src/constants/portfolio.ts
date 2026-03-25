import { PhotographerData } from '@/types/portfolio';

export const portfolioData: PhotographerData = {
  name: 'RUBÉN VELA FOTOGRAFÍA',
  tagline: '20 años explorando cumbres, 8 años capturando su luz',
  about: {
    story: [
      'Mi nombre es Rubén Vela Martín, nacido en un pueblo de Valladolid, donde resido. Técnico Superior de Educación y Control Medioambiental.',
      'Desde bien pequeño, prácticamente desde que tengo uso de razón, la naturaleza y el campo han estado presentes en mi vida, de una forma continua y natural. No llegaría a los ocho años de edad, cuando en completa soledad, me iba con mi bicicleta varios kilómetros por los caminos intentando localizar a las rapaces o a lo lejos los nidos de las águilas.',
      'A pesar de ser una provincia sin montañas, es un punto geográfico interesante, para acceder a todas las montañas de Castilla y León, Asturias, Cantabria, y la Sierra de Gredos en el sur. Lugares donde suelo desarrollar mi actividad.',
      'En un momento dado, hace casi dos décadas, entraron en mi vida las montañas, y entraron para quedarse. A medida que empecé a desarrollar mi actividad deportiva y alpinística en este entorno, fui descubriendo un mundo mágico que me ha brindado momentos irrepetibles e inolvidables. He tenido la suerte de contemplar las montañas más salvajes y altas del mundo en el Himalaya, o ascender a varias montañas en los Alpes. Además, por supuesto, de innumerables ascensiones y escaladas en las montañas de nuestro país, especialmente en los Picos de Europa, o en mi querida Montaña Palentina donde comencé mis primeros pasos verticales.',
      'Tras muchos años contemplando paisajes impresionantes, en un momento dado, conocí la fotografía de paisaje.',
      'Fotógrafo de paisaje desde hace unos 8 años, y con la experiencia adquirida durante mi estancia en las montañas, este escenario, se convirtió para mí, en un terreno de juego inigualable para la práctica de fotografía de paisaje.',
      'En los últimos años han cobrado especial fuerza mis fotografías nocturnas, obteniendo reconocimientos internacionales. Descubrir la fotografía nocturna me atrapó muy rápido...',
      'He tenido la suerte de poder formarme y compartir jornadas con algunos de los mejores fotógrafos de paisaje de España.'
    ],
    highlights: [
      'Fotografía Nocturna con reconocimientos internacionales.',
      'Expediciones fotográficas en el Himalaya, Alpes y Picos de Europa.',
      'Perspectivas únicas mediante fotografía aérea y vista de pájaro.'
    ],
    profileImage: '/images/sobre-mi/sobre-mi.jpg',
    images: [
      '/images/sobre-mi/sobre-mi-1.jpg',
      '/images/sobre-mi/sobre-mi-2.jpg',
      '/images/sobre-mi/sobre-mi-3.jpg',
      '/images/sobre-mi/sobre-mi-4.jpg',
      '/images/sobre-mi/sobre-mi-5.jpg'
    ]
  },
  categories: [
    {
      id: 'nocturna',
      title: 'Fotografía Nocturna',
      description: 'La magia y el misterio de los cielos oscuros. Trabajo galardonado internacionalmente.',
      coverImage: '/images/nocturna/nocturna.jpg',
      images: [
        '/images/nocturna/nocturna-1.jpg',
        '/images/nocturna/nocturna-2.jpg',
        '/images/nocturna/nocturna-3.jpg',
        '/images/nocturna/nocturna-4.jpg'
      ]
    },
    {
      id: 'paisajes',
      title: 'Paisajes',
      description: 'Himalaya, Alpes y Picos de Europa. La inmensidad de la montaña.',
      coverImage: '/images/paisajes/paisajes.jpg',
      images: [
        '/images/paisajes/paisajes-1.jpg',
        '/images/paisajes/paisajes-2.jpg',
        '/images/paisajes/paisajes-3.jpg',
        '/images/paisajes/paisajes-4.jpg',
        '/images/paisajes/paisajes-5.jpg',
        '/images/paisajes/paisajes-6.jpg'
      ]
    },
    {
      id: 'aerea',
      title: 'Vista de Pájaro',
      description: 'El mundo desde otra perspectiva mediante fotografía aérea y drones.',
      coverImage: '/images/aerea/aerea.jpg',
      images: [
        '/images/aerea/aerea-1.jpg',
        '/images/aerea/aerea-2.jpg',
        '/images/aerea/aerea-3.jpg',
        '/images/aerea/aerea-4.jpg'
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
