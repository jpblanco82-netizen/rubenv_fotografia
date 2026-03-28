'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function LoginPage() {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const res = await fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      });

      if (res.ok) {
        router.push('/admin');
      } else {
        setError('Contraseña incorrecta');
      }
    } catch (err) {
      setError('Error al conectar con el servidor');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-zinc-950 text-white pt-20 flex flex-col">
      <Header />
      <div className="flex-grow flex items-center justify-center px-6">
        <div className="w-full max-w-md p-8 bg-zinc-900 border border-white/10 rounded-lg shadow-2xl">
          <div className="text-center mb-8">
            <h1 className="text-2xl font-light tracking-[0.2em] uppercase mb-2">Acceso Admin</h1>
            <div className="w-8 h-[1px] bg-white/30 mx-auto"></div>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-xs uppercase tracking-widest text-white/50 mb-2">Contraseña</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="current-password"
                suppressHydrationWarning
                className="w-full bg-black border border-white/10 p-4 text-white focus:outline-none focus:border-white/30 transition-colors"
                placeholder="••••••••"
                required
              />
            </div>
            
            {error && <p className="text-red-500 text-xs text-center">{error}</p>}
            
            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 border border-white/20 text-xs font-bold tracking-[0.2em] uppercase hover:bg-white hover:text-black transition-all duration-300 disabled:opacity-50"
            >
              {loading ? 'Verificando...' : 'Entrar'}
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </main>
  );
}
