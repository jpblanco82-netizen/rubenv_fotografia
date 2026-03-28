import Link from 'next/link';
import LightboxImage from '@/components/LightboxImage';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { portfolioData } from '@/constants/portfolio';

export default function AereaPage() {
  const categoryData = portfolioData.categories.find(c => c.id === 'aerea');
  const images = categoryData?.images || [];

  return (
    <main className="min-h-screen bg-zinc-950 text-white relative pt-20">
      <Header />
      <div className="container mx-auto px-6 py-12">
        <div className="mb-24 text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-[0.3em] uppercase mb-6 text-white/90">
            {categoryData?.title || 'Vista de Pájaro'}
          </h1>
          <div className="w-12 h-[1px] bg-white/30 mx-auto mb-10"></div>
          <p className="text-xl md:text-2xl font-serif italic text-white/80 leading-relaxed max-w-2xl mx-auto">
            {categoryData?.description}
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
                 alt={`Vista aérea ${index + 1}`}
               />
               <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </div>
          ))}
        </div>
        
        {/* Sección de Vídeos */}
        {categoryData?.videos && categoryData.videos.length > 0 && (
          <div className="mt-32">
            <div className="mb-16 text-center">
              <h2 className="text-2xl md:text-3xl font-light tracking-[0.2em] uppercase mb-4 text-white/80">
                Tomas en movimiento
              </h2>
              <div className="w-8 h-[1px] bg-white/20 mx-auto"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {categoryData.videos.map((videoSrc, index) => (
                <div 
                  key={index} 
                  className="relative bg-zinc-900 border border-white/5 aspect-video overflow-hidden group shadow-2xl"
                >
                  <video 
                    src={videoSrc}
                    poster={images[index]}
                    controls
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 transition-all duration-700"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="text-center mt-20">
          <Link href="/#portfolio" className="inline-block px-12 py-5 border border-white/20 text-white text-xs font-semibold tracking-[0.2em] uppercase hover:bg-white hover:text-black transition-colors duration-300">
            Volver a Portafolio
          </Link>
        </div>
      </div>
      <Footer />
    </main>
  );
}
