'use client';

import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import Image from 'next/image';

interface LightboxImageProps {
  imgSrc: string;
  alt: string;
}

export default function LightboxImage({ imgSrc, alt }: LightboxImageProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Evitar scroll cuando está abierto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <>
      <Image 
        src={imgSrc} 
        alt={alt}
        fill
        className="object-cover transition-transform duration-[2s] group-hover:scale-105 cursor-pointer"
        onClick={() => setIsOpen(true)}
      />
      
      {isOpen && mounted && createPortal(
        <div 
          className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex flex-col items-center justify-center p-4 md:p-12 cursor-zoom-out animate-in fade-in duration-300"
          onClick={() => setIsOpen(false)}
        >
          <div className="relative w-full h-full flex items-center justify-center pointer-events-none">
             <Image 
               src={imgSrc}
               alt={alt}
               fill
               className="object-contain pointer-events-auto"
               quality={100}
               sizes="100vw"
               priority
             />
          </div>
          
          <button 
            className="absolute top-6 right-6 md:top-10 md:right-10 text-white/50 hover:text-white transition-colors z-[110] p-3 rounded-full hover:bg-white/10"
            onClick={(e) => { 
                e.stopPropagation(); 
                setIsOpen(false); 
            }}
            aria-label="Cerrar"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>,
        document.body
      )}
    </>
  );
}
