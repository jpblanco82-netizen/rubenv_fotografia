import Image from 'next/image';
import Link from 'next/link';
import { portfolioData } from '@/constants/portfolio';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Header Sticky */}
      <Header />

      {/* Hero Section */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 bg-zinc-900">
          <Image
            src={portfolioData.featuredProjects[0].image}
            alt="Hero Background"
            fill
            priority
            className="object-cover object-center opacity-80"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent z-10" />
        </div>
        
        <div className="relative z-20 text-center px-6 max-w-4xl mx-auto flex flex-col items-center mt-20">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-[0.2em] uppercase leading-tight mb-8">
            <span className="block font-semibold mb-2">Rubén Vela</span>
            <span className="text-2xl md:text-3xl lg:text-4xl tracking-[0.4em] text-white/80">Fotografía</span>
          </h1>
          <p className="text-lg md:text-xl font-light tracking-widest text-white/90 max-w-2xl mx-auto leading-relaxed uppercase">
            {portfolioData.tagline}
          </p>
        </div>
      </section>

      {/* Portfolio Categories */}
      <section id="portfolio" className="py-32 bg-zinc-950 relative z-20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col mb-20 items-center text-center">
            <h2 className="text-3xl font-light tracking-[0.3em] uppercase mb-6 text-white/90">Portfolio</h2>
            <div className="w-12 h-[1px] bg-white/30"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-8">
            {portfolioData.categories.map((category) => (
              <Link href={`/${category.id}`} key={category.id} className="group relative aspect-[3/4] overflow-hidden bg-zinc-900 cursor-pointer block">
                <Image
                  src={category.coverImage}
                  alt={category.title}
                  fill
                  className="object-cover transition-all duration-[2s] group-hover:scale-110 opacity-70 group-hover:opacity-100"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent transition-opacity duration-700" />
                
                <div className="absolute bottom-0 left-0 w-full p-8 md:p-10 translate-y-4 group-hover:translate-y-0 transition-transform duration-700">
                  <h3 className="text-2xl font-semibold tracking-widest uppercase mb-3 text-white">
                    {category.title}
                  </h3>
                  <div className="h-[1px] w-8 bg-white/50 mb-4 transition-all duration-700 group-hover:w-16"></div>
                  <p className="text-sm font-light text-white/70 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100 leading-relaxed">
                    {category.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Contacto */}
      <Footer />
    </main>
  );
}
