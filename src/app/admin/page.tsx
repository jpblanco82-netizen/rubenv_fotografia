'use client';

import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { CldUploadWidget } from 'next-cloudinary';

interface Photo {
  id: number;
  url: string;
  publicId: string;
  categoryId: string;
  title: string | null;
  description: string | null;
}

export default function AdminDashboard() {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const fetchPhotos = async () => {
    try {
      const res = await fetch('/api/photos');
      const data = await res.json();
      setPhotos(data);
    } catch (err) {
      setError('Error al cargar las fotos');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPhotos();
  }, []);

  const handleDelete = async (id: number) => {
    if (!window.confirm('¿Estás seguro de que quieres eliminar esta foto del portafolio y de Cloudinary?')) return;

    try {
      const res = await fetch(`/api/photos/${id}`, { method: 'DELETE' });
      const result = await res.json();
      
      if (res.ok) {
        setPhotos(prev => prev.filter(p => p.id !== id));
      } else {
        alert('Error del servidor: ' + (result.error || 'Desconocido'));
      }
    } catch (err) {
      console.error('Error al eliminar:', err);
      alert('Error de conexión al intentar eliminar');
    }
  };

  const categories = [
    { id: 'nocturna', name: 'Nocturna' },
    { id: 'paisajes', name: 'Paisajes' },
    { id: 'aerea', name: 'Aérea' }
  ];

  return (
    <main className="min-h-screen bg-zinc-950 text-white pt-20 flex flex-col">
      <Header />
      <div className="container mx-auto px-6 py-12 flex-grow">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
          <h1 className="text-3xl font-light tracking-[0.2em] uppercase">Panel de Control</h1>
          
          <CldUploadWidget 
            onSuccess={(result: any) => {
              if (result.event === 'success') {
                const info = result.info;
                // Por defecto, lo añadimos a 'nocturna' y luego el usuario lo mueve si quiere
                fetch('/api/photos', {
                  method: 'POST',
                  headers: { 'Content-Type': 'application/json' },
                  body: JSON.stringify({
                    url: info.secure_url,
                    publicId: info.public_id,
                    categoryId: 'nocturna', // Default
                  })
                }).then(() => fetchPhotos());
              }
            }}
            uploadPreset="rubenvela_uploads"
          >
            {({ open }) => (
              <button
                onClick={() => open()}
                className="px-10 py-4 border border-white/20 text-xs font-bold tracking-[0.2em] uppercase hover:bg-white hover:text-black transition-all"
              >
                Subir Nueva Foto
              </button>
            )}
          </CldUploadWidget>
        </div>

        {error && <p className="text-red-500 mb-8">{error}</p>}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {photos.map((photo) => (
            <div key={photo.id} className="bg-zinc-900 border border-white/10 rounded overflow-hidden group">
              <div className="aspect-square relative">
                <img src={photo.url} alt="" className="object-cover w-full h-full" />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                   <button 
                     type="button"
                     onClick={(e) => {
                       e.preventDefault();
                       e.stopPropagation();
                       handleDelete(photo.id);
                     }}
                     className="p-4 bg-red-600 rounded-full hover:bg-red-700 transition-all hover:scale-110 shadow-xl pointer-events-auto relative z-20"
                     title="Eliminar fotografía"
                   >
                     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 6h18m-2 0v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6m3 0V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/></svg>
                   </button>
                </div>
              </div>
              <div className="p-4">
                <select 
                  defaultValue={photo.categoryId}
                  onChange={async (e) => {
                    await fetch(`/api/photos/${photo.id}`, {
                      method: 'PATCH',
                      headers: { 'Content-Type': 'application/json' },
                      body: JSON.stringify({ categoryId: e.target.value })
                    });
                  }}
                  className="w-full bg-black border border-white/10 p-2 text-xs uppercase tracking-widest"
                >
                  {categories.map(cat => (
                    <option key={cat.id} value={cat.id}>{cat.name}</option>
                  ))}
                </select>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </main>
  );
}
