import { portfolioData } from '@/constants/portfolio';

export default function Footer() {
  return (
    <section id="contact" className="py-32 bg-black text-center mt-auto">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-light tracking-[0.4em] uppercase mb-12 text-white/90">Contacto</h2>
        <p className="text-white/50 font-light tracking-widest mb-12 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
          Para proyectos o consultas sobre impresiones de edición limitada, ponte en contacto.
        </p>
        <a href="mailto:hola@rubenvelafotografia.com" className="inline-block px-12 py-5 bg-white text-black text-xs md:text-sm font-semibold tracking-[0.2em] uppercase hover:bg-zinc-200 transition-colors duration-300">
          Hablemos
        </a>
        
        <div className="mt-32 pt-12 border-t border-white/10 flex flex-col md:flex-row items-center justify-between text-xs text-white/30 tracking-widest uppercase">
          <p>&copy; {new Date().getFullYear()} {portfolioData.name}</p>
          <div className="flex gap-8 mt-6 md:mt-0">
            <a href="https://www.instagram.com/rubenvelafotografia/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Instagram</a>
          </div>
        </div>

        {/* Nodal.io Personal Brand */}
        <div className="mt-20 flex flex-col items-center justify-center gap-4 opacity-40 hover:opacity-100 transition-opacity duration-500 pb-12">
          <a href="https://www.nodalio.es" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2 group">
            <span className="text-white/50 font-light text-[9px] md:text-[10px] tracking-[0.2em] uppercase">
              Designed & Developed by
            </span>
            <span className="text-white/80 font-bold tracking-[0.25em] text-[11px] md:text-xs group-hover:text-white transition-colors">
              NODAL.IO
            </span>
          </a>
          
          <p className="text-[8px] md:text-[9px] tracking-[0.3em] text-white/40 font-light uppercase text-center mt-2">
            &copy; {new Date().getFullYear()} &nbsp;&nbsp; NODAL.IO &bull; SYSTEMS &amp; PEOPLE
          </p>
        </div>
      </div>
    </section>
  );
}
