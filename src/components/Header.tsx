import Link from 'next/link';
import { portfolioData } from '@/constants/portfolio';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/70 border-b border-white/5 transition-all duration-300">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="text-sm font-semibold tracking-[0.3em] uppercase text-zinc-50 hover:text-white/70 transition-colors duration-300">
          {portfolioData.name}
        </Link>
        <nav className="hidden md:flex gap-8 text-xs font-medium tracking-widest uppercase text-white/70">
          <Link href="/#portfolio" className="hover:text-white transition-colors duration-300">Portfolio</Link>
          <Link href="/#about" className="hover:text-white transition-colors duration-300">Sobre mí</Link>
          <Link href="/#contact" className="hover:text-white transition-colors duration-300">Contacto</Link>
        </nav>
      </div>
    </header>
  );
}
