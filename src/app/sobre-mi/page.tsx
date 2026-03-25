import Image from 'next/image';
import { portfolioData } from '@/constants/portfolio';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import LightboxImage from '@/components/LightboxImage';

export default function SobreMi() {
  const { story, profileImage, images } = portfolioData.about;

  // Interleave text and images
  const items = [];
  let textIndex = 0;
  let imageIndex = 0;
  
  // Main profile image big block
  items.push(
    <div key="profile" className="break-inside-avoid mb-8 relative aspect-[4/5] filter grayscale hover:grayscale-0 transition-all duration-[2s] group">
      <LightboxImage
        imgSrc={profileImage}
        alt="Rubén Vela"
      />
    </div>
  );
  
  while (textIndex < story.length || imageIndex < (images?.length || 0)) {
    if (textIndex < story.length) {
      items.push(
        <div key={`param-${textIndex}`} className="break-inside-avoid mb-8 p-6 md:p-8 bg-black/20 border-t border-white/5 hover:bg-black/40 hover:border-white/20 transition-all duration-500">
          <p className="text-base text-white/80 font-light leading-relaxed tracking-wide">
            {story[textIndex]}
          </p>
        </div>
      );
      textIndex++;
    }
    
    // Add 2 paragraphs before another photo occasionally to balance out layout
    if (textIndex < story.length && textIndex % 3 !== 0) {
      items.push(
        <div key={`param-${textIndex}`} className="break-inside-avoid mb-8 p-6 md:p-8 bg-black/20 border-t border-white/5 hover:bg-black/40 hover:border-white/20 transition-all duration-500">
          <p className="text-base text-white/80 font-light leading-relaxed tracking-wide">
            {story[textIndex]}
          </p>
        </div>
      );
      textIndex++;
    }

    if (imageIndex < (images?.length || 0)) {
      items.push(
        <div key={`img-${imageIndex}`} className={`break-inside-avoid mb-8 relative ${imageIndex % 2 === 0 ? 'aspect-video' : 'aspect-square'} filter grayscale hover:grayscale-0 transition-all duration-[2s] group`}>
          <LightboxImage
            imgSrc={images![imageIndex]}
            alt={`Rubén Vela portfolio ${imageIndex + 1}`}
          />
        </div>
      );
      imageIndex++;
    }
  }

  return (
    <main className="min-h-screen bg-zinc-900 relative flex flex-col">
      <Header />
      
      <section className="flex-grow pt-40 pb-32">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="mb-20 flex flex-col">
            <h1 className="text-3xl md:text-5xl font-light tracking-[0.3em] uppercase text-white mb-6 border-l-2 border-white/30 pl-8 py-2">
              Sobre mí
            </h1>
            <p className="text-white/50 tracking-widest text-sm uppercase pl-8">Pasión por la montaña y la fotografía</p>
          </div>
          
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-8">
            {items}
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
}
