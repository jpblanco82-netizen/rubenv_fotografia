import { Metadata } from 'next';
import Image from 'next/image';
import { portfolioData } from '@/constants/portfolio';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import LightboxImage from '@/components/LightboxImage';

export const metadata: Metadata = {
  title: 'Sobre Mí - Rubén Vela Martín',
  description: 'Conoce la historia de Rubén Vela, fotógrafo de paisaje con más de 20 años de experiencia explorando montañas y capturando la luz.',
  keywords: ['biografía fotógrafo', 'historia Rubén Vela', 'fotografía montaña', 'alpinista y fotógrafo'],
};

export default function SobreMi() {
  const { story, profileImage, featuredImage, images } = portfolioData.about;

  return (
    <main className="min-h-screen bg-zinc-900 relative flex flex-col">
      <Header />
      
      <section className="flex-grow pt-40 pb-32">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="mb-24 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="flex flex-col">
              <h1 className="text-3xl md:text-5xl font-light tracking-[0.3em] uppercase text-white mb-6 border-l-2 border-white/30 pl-8 py-2">
                Sobre mí
              </h1>
              <p className="text-white/50 tracking-widest text-sm uppercase pl-8">Pasión por la montaña y la fotografía</p>
            </div>
            {featuredImage && (
              <div className="relative aspect-[16/9] lg:aspect-[3/2] overflow-hidden rounded-sm group filter grayscale hover:grayscale-0 transition-all duration-1000 shadow-2xl shadow-black/50">
                <LightboxImage imgSrc={featuredImage} alt="Rubén Vela - Destacada" />
              </div>
            )}
          </div>
          
          <div className="space-y-32">
            
            {/* Bloque 1: Orígenes */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
              <div className="lg:col-span-7 space-y-8">
                <p className="text-lg md:text-xl text-white/80 font-light leading-loose">{story[0]}</p>
                <p className="text-lg md:text-xl text-white/80 font-light leading-loose">{story[1]}</p>
                <p className="text-lg md:text-xl text-white/80 font-light leading-loose">{story[2]}</p>
              </div>
              <div className="lg:col-span-5 grid grid-cols-2 gap-4">
                <div className="relative aspect-[4/5] filter grayscale hover:grayscale-0 transition-all duration-700 group overflow-hidden rounded-sm">
                  <LightboxImage imgSrc={profileImage} alt="Rubén Vela" />
                </div>
                <div className="relative aspect-[3/4] mt-16 filter grayscale hover:grayscale-0 transition-all duration-700 group overflow-hidden rounded-sm">
                   {images && images[0] && <LightboxImage imgSrc={images[0]} alt="Montaña" />}
                </div>
              </div>
            </div>

            {/* Bloque 2: Las Montañas (Fotos izquierda, Texto derecha) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
              <div className="lg:col-span-6 order-2 lg:order-1 grid grid-cols-1 sm:grid-cols-2 gap-4">
                 <div className="relative aspect-square sm:aspect-[4/5] filter grayscale hover:grayscale-0 transition-all duration-700 group overflow-hidden rounded-sm">
                   {images && images[1] && <LightboxImage imgSrc={images[1]} alt="Alpinismo" />}
                 </div>
                 <div className="relative aspect-square sm:aspect-square sm:-translate-y-12 filter grayscale hover:grayscale-0 transition-all duration-700 group overflow-hidden rounded-sm">
                   {images && images[2] && <LightboxImage imgSrc={images[2]} alt="Alpinismo" />}
                 </div>
              </div>
              <div className="lg:col-span-6 order-1 lg:order-2 space-y-8">
                <p className="text-xl md:text-2xl text-white/90 font-light leading-relaxed border-l border-white/20 pl-8 py-2">{story[3]}</p>
              </div>
            </div>

            {/* Bloque 3: Fotografía */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
              <div className="lg:col-span-7 space-y-8">
                <p className="text-lg md:text-xl text-white/80 font-light leading-loose">{story[4]}</p>
                <p className="text-lg md:text-xl text-white/80 font-light leading-loose">{story[5]}</p>
                <p className="text-lg md:text-xl text-white/80 font-light leading-loose">{story[6]}</p>
                <p className="text-lg md:text-xl text-white/80 font-light leading-loose">{story[7]}</p>
              </div>
              <div className="lg:col-span-5 flex flex-col gap-6">
                 <div className="relative aspect-[4/3] filter grayscale hover:grayscale-0 transition-all duration-700 group overflow-hidden rounded-sm ml-8">
                   {images && images[3] && <LightboxImage imgSrc={images[3]} alt="Fotografía nocturna" />}
                 </div>
                 <div className="relative aspect-video filter grayscale hover:grayscale-0 transition-all duration-700 group overflow-hidden rounded-sm mr-8">
                   {images && images[4] && <LightboxImage imgSrc={images[4]} alt="Paisaje" />}
                 </div>
              </div>
            </div>

          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
}
