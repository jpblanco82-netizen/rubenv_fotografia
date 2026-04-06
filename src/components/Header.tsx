"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { portfolioData } from '@/constants/portfolio';

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);


const MenuIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="3" y1="12" x2="21" y2="12"></line>
    <line x1="3" y1="6" x2="21" y2="6"></line>
    <line x1="3" y1="18" x2="21" y2="18"></line>
  </svg>
);

const CloseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>
);

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/70 border-b border-white/5 transition-all duration-300">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 md:gap-5 z-50 group transition-all duration-300">
            <span className="text-[11px] md:text-sm font-light tracking-[0.3em] md:tracking-[0.5em] uppercase text-white/90 group-hover:text-white transition-colors duration-300">
              Rubén Vela
            </span>
            <div className="relative w-24 h-12 md:w-32 md:h-16 flex-shrink-0 -my-2 overflow-hidden">
              <Image 
                src="/images/firma-definitiva-white.png" 
                alt="Rubén Vela Firma" 
                fill 
                className="object-contain"
                priority
              />
            </div>
            <span className="text-[11px] md:text-sm font-light tracking-[0.3em] md:tracking-[0.5em] uppercase text-white/90 group-hover:text-white transition-colors duration-300">
              Fotografía
            </span>
          </Link>

          {/* Hamburger Menu Button (Mobile) */}
          <button 
            className="md:hidden z-50 text-white/70 hover:text-white transition-colors p-2"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-8 text-xs items-center font-medium tracking-widest uppercase text-white/70">
            <Link href="/#portfolio" className="hover:text-white transition-colors duration-300">Portfolio</Link>
            <Link href="/sobre-mi" className="hover:text-white transition-colors duration-300">Sobre mí</Link>
            <Link href="/talleres" className="hover:text-white transition-colors duration-300">Talleres</Link>
            <Link href="/contacto" className="hover:text-white transition-colors duration-300">Contacto</Link>
            <Link href="/admin" className="hover:text-white transition-colors duration-300 opacity-60 text-[10px] border border-white/10 px-3 py-1 rounded-full hover:border-white/30">Zona Privada</Link>
            
            <div className="w-[1px] h-4 bg-white/20 ml-2 mr-2"></div>
            
            <div className="flex gap-4 items-center">
              <a href="https://www.instagram.com/rubenvelafotografia/" target="_blank" rel="noopener noreferrer" className="hover:text-white hover:scale-110 transition-all duration-300" aria-label="Instagram">
                <InstagramIcon />
              </a>
            </div>
          </nav>
        </div>
      </header>
 
      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-black/95 z-40 transition-opacity duration-300 md:hidden ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <nav className="flex flex-col items-center justify-center h-full gap-8 text-sm font-medium tracking-widest uppercase text-white/80">
          <Link href="/#portfolio" onClick={toggleMenu} className="hover:text-white transition-colors duration-300 py-2">Portfolio</Link>
          <Link href="/sobre-mi" onClick={toggleMenu} className="hover:text-white transition-colors duration-300 py-2">Sobre mí</Link>
          <Link href="/talleres" onClick={toggleMenu} className="hover:text-white transition-colors duration-300 py-2">Talleres</Link>
          <Link href="/contacto" onClick={toggleMenu} className="hover:text-white transition-colors duration-300 py-2">Contacto</Link>
          <Link href="/admin" onClick={toggleMenu} className="hover:text-white transition-colors duration-300 py-2 text-xs opacity-60">Zona Privada</Link>
          
          <div className="w-12 h-[1px] bg-white/20 my-4"></div>
          
          <div className="flex gap-8 items-center">
            <a href="https://www.instagram.com/rubenvelafotografia/" target="_blank" rel="noopener noreferrer" className="hover:text-white hover:scale-110 transition-all duration-300" aria-label="Instagram">
              <InstagramIcon />
            </a>
          </div>
        </nav>
      </div>
    </>
  );
}
