import Link from 'next/link';
import LightboxImage from '@/components/LightboxImage';
import VideoEmbed from '@/components/VideoEmbed';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { db } from '@/db';
import { photos } from '@/db/schema';
import { eq, desc } from 'drizzle-orm';
import { portfolioData } from '@/constants/portfolio';

export const dynamic = 'force-dynamic';

export default async function AereaPage() {
  const assets = await db.query.photos.findMany({
    where: eq(photos.categoryId, 'aerea'),
    orderBy: [desc(photos.createdAt), desc(photos.id)],
  });
  
  const categoryData = portfolioData.categories.find(c => c.id === 'aerea');

  return (
    <main className="min-h-screen bg-zinc-950 text-white relative pt-20">
      <Header />
      <div className="container mx-auto px-6 py-12">
        <div className="mb-24 text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-[0.3em] uppercase mb-6 text-white/90">
            {categoryData?.title || 'A Vista de Pájaro'}
          </h1>
          <div className="w-12 h-[1px] bg-white/30 mx-auto mb-10"></div>
          <p className="text-xl md:text-2xl font-serif italic text-white/80 leading-relaxed max-w-2xl mx-auto">
            {categoryData?.description}
          </p>
        </div>

        {/* Galería Dinámica (Fotos y Vídeos) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
          {assets.map((asset, index) => (
            <div 
              key={asset.id} 
              className={`relative bg-zinc-900 border border-white/5 flex flex-col items-center justify-center group overflow-hidden ${index % 4 === 0 || index % 4 === 3 ? 'md:col-span-2 aspect-[16/9]' : 'aspect-square'}`}
            >
               {asset.type === 'video' ? (
                 <VideoEmbed 
                   url={asset.url} 
                   title={asset.title || 'Video aérea'} 
                 />
               ) : (
                 <LightboxImage 
                   imgSrc={asset.url} 
                   alt={asset.title || `Vista aérea ${index + 1}`}
                 />
               )}
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
      <Footer />
    </main>
  );
}
