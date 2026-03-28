import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Link from 'next/link';
import { portfolioData } from '@/constants/portfolio';

export default function TalleresPage() {
  const { workshops } = portfolioData;

  return (
    <main className="min-h-screen bg-zinc-950 text-white relative pt-20">
      <Header />
      
      <div className="container mx-auto px-6 py-12 md:py-24">
        {/* Header Section */}
        <div className="mb-20 text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-[0.3em] uppercase mb-8 text-white/90">
            {workshops?.title || 'Talleres'}
          </h1>
          <div className="w-12 h-[1px] bg-white/30 mx-auto mb-10"></div>
          
          <div className="relative">
            <p className="text-lg md:text-xl text-white/80 font-light leading-loose max-w-3xl mx-auto mb-12">
              {workshops?.description}
            </p>
          </div>
        </div>

        {/* Central Image Section */}
        <div className="max-w-5xl mx-auto mb-32 group">
          <div className="relative aspect-[16/9] overflow-hidden border border-white/5 bg-zinc-900">
            <Image 
              src={workshops?.mainImage || '/talleres/talleres.jpg'} 
              alt="Talleres de Fotografía Rubén Vela" 
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
              priority
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
          </div>
          <p className="mt-4 text-center text-white/40 text-[10px] uppercase tracking-widest font-light">
            Talleres individuales one-to-one personalizados
          </p>
        </div>

        {/* Upcoming Dates Section (Locked) */}
        <div className="max-w-4xl mx-auto mb-32">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-light tracking-[0.2em] uppercase mb-4 text-white/90">Próximas Fechas</h2>
            <div className="w-8 h-[1px] bg-white/20 mx-auto"></div>
          </div>

          <div className="relative group overflow-hidden">
            {/* Overlay Lock effect */}
            <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px] z-10 flex flex-col items-center justify-center border border-white/5 rounded-sm">
              <div className="mb-4 text-white/40">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                </svg>
              </div>
              <p className="text-sm tracking-[0.2em] font-light text-white/60 uppercase px-6 text-center">
                Calendario de talleres grupales inactivo
              </p>
              <p className="mt-2 text-[10px] tracking-[0.1em] text-white/30 uppercase max-w-xs text-center leading-relaxed">
                Solo disponibilidad para formación individualizada bajo demanda previa consulta
              </p>
            </div>

            {/* Content (Blurred/Inactive) */}
            <div className="bg-zinc-900/50 rounded-sm divide-y divide-white/5 opacity-30 select-none">
              {[1, 2, 3].map((i) => (
                <div key={i} className="p-8 flex flex-col md:flex-row justify-between items-center gap-4">
                  <div className="text-center md:text-left">
                    <p className="text-lg font-light tracking-widest text-white/80">Marzo - Abril 2026</p>
                    <p className="text-xs text-white/40 uppercase tracking-widest">Montaña Palentina / Picos de Europa</p>
                  </div>
                  <div className="px-6 py-2 border border-white/10 text-[10px] uppercase tracking-widest">
                    Consultar disponibilidad
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
      <Footer />
    </main>
  );
}
