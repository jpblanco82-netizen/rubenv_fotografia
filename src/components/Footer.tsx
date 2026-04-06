import { portfolioData } from '@/constants/portfolio';
import Link from 'next/link';

export default function Footer({ hideContact = false }: { hideContact?: boolean }) {
  return (
    <footer className="bg-black text-center mt-auto">
      <div className="container mx-auto px-6 font-light">
        {!hideContact && (
          <div className="py-14 border-b border-white/5 opacity-100 transition-all duration-700">
            <h2 className="text-3xl font-light tracking-[0.4em] uppercase mb-12 text-white/90">Contacto</h2>
            <p className="text-white/50 font-light tracking-widest mb-12 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
              Para proyectos o consultas sobre impresiones de edición limitada, ponte en contacto.
            </p>
            <Link href="/contacto" className="inline-block px-12 py-5 bg-white text-black text-xs md:text-sm font-semibold tracking-[0.2em] uppercase hover:bg-zinc-200 transition-colors duration-300">
              Hablemos
            </Link>
          </div>
        )}
        
        <div className={`flex flex-col md:flex-row items-start justify-between gap-12 py-10 ${hideContact ? '' : 'mt-8 border-t border-white/5'}`}>
          {/* Left Side: Owner Info */}
          <div className="flex flex-col gap-3 text-left">
            <div className="text-[11px] md:text-sm font-semibold tracking-[0.2em] uppercase text-white/90">
              {portfolioData.name} &copy; {new Date().getFullYear()}
            </div>
            <p className="text-[9px] md:text-[10px] tracking-[0.2em] text-white/40 uppercase font-light">
              Todos los derechos reservados.
            </p>
            <div className="flex gap-8 mt-2 text-[10px] tracking-[0.3em] uppercase text-white/40">
              <a href="https://www.instagram.com/rubenvelafotografia/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Instagram</a>
            </div>
          </div>

          {/* Right Side: Nodal.io Branding */}
          <div className="flex flex-col items-start md:items-end gap-1 group opacity-60 hover:opacity-100 transition-opacity duration-500">
            <a href="https://www.nodalio.es" target="_blank" rel="noopener noreferrer" className="flex flex-col items-start md:items-end">
              <span className="text-white/40 font-light text-[8px] md:text-[9px] tracking-[0.3em] uppercase">
                Designed & Developed by
              </span>
              <span className="text-white font-bold tracking-[0.15em] text-2xl md:text-3xl leading-none transition-colors">
                NODAL.IO
              </span>
              <p className="text-[7px] md:text-[8px] tracking-[0.25em] text-white/30 font-light uppercase mt-1">
                &copy; {new Date().getFullYear()} &bull; SYSTEMS &amp; PEOPLE
              </p>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
