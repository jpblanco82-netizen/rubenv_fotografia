import Image from 'next/image';
import { portfolioData } from '@/constants/portfolio';

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Header Sticky */}
      <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/70 border-b border-white/5 transition-all duration-300">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <a href="#" className="text-sm font-semibold tracking-[0.3em] uppercase hover:text-white transition-colors duration-300">
            {portfolioData.name}
          </a>
          <nav className="hidden md:flex gap-8 text-xs font-medium tracking-widest uppercase text-white/70">
            <a href="#portfolio" className="hover:text-white transition-colors duration-300">Portfolio</a>
            <a href="#about" className="hover:text-white transition-colors duration-300">Sobre mí</a>
            <a href="#contact" className="hover:text-white transition-colors duration-300">Contacto</a>
          </nav>
        </div>
      </header>

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
              <div key={category.id} className="group relative aspect-[3/4] overflow-hidden bg-zinc-900 cursor-pointer">
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 bg-zinc-900 relative">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1 space-y-8 text-white/80 font-light leading-relaxed">
              <h2 className="text-3xl font-light tracking-[0.3em] uppercase text-white mb-10 border-l-2 border-white/30 pl-8 py-2">
                Sobre mí
              </h2>
              {portfolioData.about.story.map((paragraph, index) => (
                <p key={index} className="text-lg md:text-xl text-white/70">{paragraph}</p>
              ))}
              
              <ul className="mt-12 space-y-6 pt-10 border-t border-white/10">
                {portfolioData.about.highlights.map((highlight, index) => (
                  <li key={index} className="flex items-start">
                    <span className="w-1.5 h-1.5 rounded-full bg-white/40 mt-3 mr-6 flex-shrink-0" />
                    <span className="text-base md:text-lg tracking-wide text-white/90">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="order-1 lg:order-2 relative aspect-square lg:aspect-[4/5] filter grayscale hover:grayscale-0 transition-all duration-[2s]">
               <Image
                  src={portfolioData.about.profileImage}
                  alt="Rubén Vela en la montaña"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
            </div>
          </div>
        </div>
      </section>

      {/* Footer Contacto */}
      <section id="contact" className="py-32 bg-black text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-light tracking-[0.4em] uppercase mb-12 text-white/90">Contacto</h2>
          <p className="text-white/50 font-light tracking-widest mb-12 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            Para proyectos, expediciones o consultas sobre prints de edición limitada, ponte en contacto.
          </p>
          <a href="mailto:hola@rubenvelafotografia.com" className="inline-block px-12 py-5 bg-white text-black text-xs md:text-sm font-semibold tracking-[0.2em] uppercase hover:bg-zinc-200 transition-colors duration-300">
            Hablemos
          </a>
          
          <div className="mt-32 pt-12 border-t border-white/10 flex flex-col md:flex-row items-center justify-between text-xs text-white/30 tracking-widest uppercase">
            <p>&copy; {new Date().getFullYear()} {portfolioData.name}</p>
            <div className="flex gap-8 mt-6 md:mt-0">
              <a href="#" className="hover:text-white transition-colors">Instagram</a>
              <a href="#" className="hover:text-white transition-colors">Behance</a>
              <a href="#" className="hover:text-white transition-colors">500px</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
