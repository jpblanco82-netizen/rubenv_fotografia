import Link from 'next/link';
import { portfolioData } from '@/constants/portfolio';

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

const FacebookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/70 border-b border-white/5 transition-all duration-300">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="text-sm font-semibold tracking-[0.3em] uppercase text-zinc-50 hover:text-white/70 transition-colors duration-300">
          {portfolioData.name}
        </Link>
        <nav className="hidden md:flex gap-8 text-xs items-center font-medium tracking-widest uppercase text-white/70">
          <Link href="/#portfolio" className="hover:text-white transition-colors duration-300">Portfolio</Link>
          <Link href="/sobre-mi" className="hover:text-white transition-colors duration-300">Sobre mí</Link>
          <Link href="/#contact" className="hover:text-white transition-colors duration-300">Contacto</Link>
          
          <div className="w-[1px] h-4 bg-white/20 ml-2 mr-2"></div>
          
          <div className="flex gap-4 items-center">
            <a href="https://www.instagram.com/rubenvelafotografia/" target="_blank" rel="noopener noreferrer" className="hover:text-white hover:scale-110 transition-all duration-300" aria-label="Instagram">
              <InstagramIcon />
            </a>
            <a href="https://www.facebook.com/ruben.velamartin/" target="_blank" rel="noopener noreferrer" className="hover:text-white hover:scale-110 transition-all duration-300" aria-label="Facebook">
              <FacebookIcon />
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
