"use client";

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { portfolioData } from '@/constants/portfolio';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    nombre: '',
    telefono: '',
    email: '',
    descripcion: ''
  });

  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    // Simulación de envío de correo (Fase 1)
    setTimeout(() => {
      setStatus('success');
      setFormData({ nombre: '', telefono: '', email: '', descripcion: '' });
    }, 1500);
  };

  return (
    <main className="min-h-screen bg-black text-white flex flex-col">
      <Header />
      
      <section className="flex-grow pt-40 pb-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-light tracking-[0.3em] uppercase mb-6">Contacto</h1>
            <div className="w-20 h-[1px] bg-white/20 mx-auto mb-8"></div>
            <p className="text-white/50 font-light tracking-widest max-w-2xl mx-auto leading-relaxed uppercase text-xs md:text-sm">
              Si estás interesado en una sesión, una impresión de edición limitada o simplemente quieres saludar, rellena el formulario a continuación.
            </p>
          </div>

          <div className="bg-zinc-900/30 border border-white/5 p-8 md:p-12 backdrop-blur-sm">
            {status === 'success' ? (
              <div className="text-center py-20 animate-in fade-in duration-700">
                <div className="w-16 h-16 border border-white/20 rounded-full flex items-center justify-center mx-auto mb-8">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-white/80">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <h2 className="text-2xl font-light tracking-[0.2em] uppercase mb-4">Mensaje Enviado</h2>
                <p className="text-white/40 font-light tracking-widest text-sm uppercase">
                  Gracias por contactar. En breve me pondré en contacto contigo.
                </p>
                <button 
                  onClick={() => setStatus('idle')}
                  className="mt-12 text-[10px] tracking-[0.3em] uppercase border-b border-white/20 pb-1 hover:border-white transition-colors"
                >
                  Enviar otro mensaje
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label htmlFor="nombre" className="text-[10px] tracking-[0.3em] uppercase text-white/40 block">Nombre</label>
                    <input
                      required
                      type="text"
                      id="nombre"
                      name="nombre"
                      value={formData.nombre}
                      onChange={handleChange}
                      placeholder="Tu nombre completo"
                      className="w-full bg-transparent border-b border-white/10 py-3 focus:border-white outline-none transition-colors font-light text-sm tracking-wider"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="telefono" className="text-[10px] tracking-[0.3em] uppercase text-white/40 block">Teléfono</label>
                    <input
                      type="tel"
                      id="telefono"
                      name="telefono"
                      value={formData.telefono}
                      onChange={handleChange}
                      placeholder="+34 000 000 000"
                      className="w-full bg-transparent border-b border-white/10 py-3 focus:border-white outline-none transition-colors font-light text-sm tracking-wider"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-[10px] tracking-[0.3em] uppercase text-white/40 block">Email</label>
                  <input
                    required
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="email@ejemplo.com"
                    className="w-full bg-transparent border-b border-white/10 py-3 focus:border-white outline-none transition-colors font-light text-sm tracking-wider"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="descripcion" className="text-[10px] tracking-[0.3em] uppercase text-white/40 block">¿En qué puedo ayudarte?</label>
                  <textarea
                    required
                    id="descripcion"
                    name="descripcion"
                    value={formData.descripcion}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Cuéntame sobre tu proyecto o consulta..."
                    className="w-full bg-transparent border-b border-white/10 py-3 focus:border-white outline-none transition-colors font-light text-sm tracking-wider resize-none"
                  ></textarea>
                </div>

                <div className="pt-8 flex justify-center">
                  <button
                    disabled={status === 'sending'}
                    type="submit"
                    className="group relative px-16 py-5 bg-white text-black text-xs md:text-sm font-semibold tracking-[0.2em] uppercase hover:bg-zinc-200 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {status === 'sending' ? 'Enviando...' : 'Enviar Mensaje'}
                  </button>
                </div>
              </form>
            )}
          </div>
          
          <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-12 text-center border-t border-white/5 pt-16">
            <div>
              <h3 className="text-[10px] tracking-[0.3em] uppercase text-white/40 mb-3">Redes Sociales</h3>
              <div className="flex justify-center gap-6">
                <a href="https://www.instagram.com/rubenvelafotografia/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors text-sm font-light tracking-widest uppercase">Instagram</a>
              </div>
            </div>
            <div>
              <h3 className="text-[10px] tracking-[0.3em] uppercase text-white/40 mb-3">Localización</h3>
              <p className="font-light tracking-wider text-sm">Valladolid, España</p>
            </div>
          </div>
        </div>
      </section>

      <Footer hideContact={true} />
    </main>
  );
}
