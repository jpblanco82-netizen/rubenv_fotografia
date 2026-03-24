import Link from 'next/link';
import LightboxImage from '@/components/LightboxImage';
import Header from '@/components/Header';
import { portfolioData } from '@/constants/portfolio';

export default function NocturnaPage() {
  const categoryData = portfolioData.categories.find(c => c.id === 'nocturna');
  const images = categoryData?.images || [];

  return (
    <main className="min-h-screen bg-zinc-950 text-white relative pt-20">
      <Header />
      <div className="container mx-auto px-6 py-12">
        <div className="mb-20 text-center">
          <h1 className="text-4xl md:text-5xl font-light tracking-[0.3em] uppercase mb-6 text-white/90">Fotografía Nocturna</h1>
          <div className="w-12 h-[1px] bg-white/30 mx-auto mb-8"></div>
          <p className="text-white/70 tracking-widest font-light max-w-2xl mx-auto uppercase text-sm">
            La magia y el misterio de los cielos oscuros. Trabajo galardonado internacionalmente.
          </p>
        </div>

        {/* Galería de Fotos Automática */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
          {images.map((imgSrc, index) => (
            <div 
              key={index} 
              className={`relative bg-zinc-900 border border-white/5 flex flex-col items-center justify-center group overflow-hidden ${index % 4 === 0 || index % 4 === 3 ? 'md:col-span-2 aspect-[16/9]' : 'aspect-square'}`}
            >
               <LightboxImage 
                 imgSrc={imgSrc} 
                 alt={`Fotografía nocturna ${index + 1}`}
               />
               <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </div>
          ))}
        </div>

        <div className="text-center mt-20">
          <Link href="/#portfolio" className="inline-block px-12 py-5 border border-white/20 text-white text-xs font-semibold tracking-[0.2em] uppercase hover:bg-white hover:text-black transition-colors duration-300">
            Volver a Portafolio
          </Link>
        </div>
      </div>
    </main>
  );
}
