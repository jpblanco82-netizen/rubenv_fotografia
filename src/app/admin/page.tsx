'use client';

import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { CldUploadWidget } from 'next-cloudinary';

interface Photo {
  id: number;
  url: string;
  publicId: string | null;
  categoryId: string;
  type: 'image' | 'video';
  title: string | null;
  description: string | null;
}

export default function AdminDashboard() {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [isAddingVideo, setIsAddingVideo] = useState(false);
  const [videoUrl, setVideoUrl] = useState('');
  const [videoCategory, setVideoCategory] = useState('nocturna');
  const [videoTitle, setVideoTitle] = useState('');

  const fetchPhotos = async () => {
    try {
      const res = await fetch('/api/photos');
      const data = await res.json();
      setPhotos(data);
    } catch (err) {
      setError('Error al cargar los recursos');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPhotos();
  }, []);

  const handleAddVideo = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!videoUrl) return;

    try {
      const res = await fetch('/api/photos', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          url: videoUrl,
          categoryId: videoCategory,
          title: videoTitle || null,
          type: 'video'
        })
      });

      if (res.ok) {
        setIsAddingVideo(false);
        setVideoUrl('');
        setVideoTitle('');
        fetchPhotos();
      } else {
        alert('Error al guardar el vídeo');
      }
    } catch (err) {
      alert('Error de conexión');
    }
  };

  const handleDelete = async (id: number, type: string) => {
    const message = type === 'image' 
      ? '¿Estás seguro de que quieres eliminar esta foto de la base de datos y de Cloudinary?'
      : '¿Estás seguro de que quieres eliminar este vídeo del portafolio?';
      
    if (!window.confirm(message)) return;

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
          
          <div className="flex gap-4">
            <button
              onClick={() => setIsAddingVideo(true)}
              className="px-8 py-4 border border-white/20 text-[10px] font-bold tracking-[0.2em] uppercase hover:bg-white hover:text-black transition-all bg-zinc-900"
            >
              Añadir Vídeo (Link)
            </button>

            <CldUploadWidget 
              onSuccess={(result: any) => {
                if (result.event === 'success') {
                  const info = result.info;
                  fetch('/api/photos', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                      url: info.secure_url,
                      publicId: info.public_id,
                      categoryId: 'nocturna',
                      type: 'image'
                    })
                  }).then(() => fetchPhotos());
                }
              }}
              uploadPreset="rubenvela_uploads"
            >
              {({ open }) => (
                <button
                  onClick={() => open()}
                  className="px-8 py-4 bg-white text-black text-[10px] font-bold tracking-[0.2em] uppercase hover:bg-zinc-200 transition-all shadow-xl"
                >
                  Subir Nueva Foto
                </button>
              )}
            </CldUploadWidget>
          </div>
        </div>

        {/* Modal para Vídeos */}
        {isAddingVideo && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-6">
            <div className="bg-zinc-900 border border-white/10 p-8 w-full max-w-md shadow-2xl relative">
              <button 
                onClick={() => setIsAddingVideo(false)}
                className="absolute top-4 right-4 text-white/50 hover:text-white"
              >
                ✕
              </button>
              <h2 className="text-xl font-light tracking-widest uppercase mb-8 text-center">Añadir Vídeo</h2>
              <form onSubmit={handleAddVideo} className="space-y-6">
                <div>
                  <label className="block text-[10px] uppercase tracking-widest text-white/50 mb-2">Enlace (YouTube / Vimeo)</label>
                  <input
                    type="url"
                    value={videoUrl}
                    onChange={(e) => setVideoUrl(e.target.value)}
                    placeholder="https://www.youtube.com/watch?v=..."
                    className="w-full bg-black border border-white/10 p-4 text-xs text-white focus:border-white/40 outline-none"
                    required
                  />
                </div>
                <div>
                  <label className="block text-[10px] uppercase tracking-widest text-white/50 mb-2">Título (Opcional)</label>
                  <input
                    type="text"
                    value={videoTitle}
                    onChange={(e) => setVideoTitle(e.target.value)}
                    placeholder="Ej: Amanecer en la costa"
                    className="w-full bg-black border border-white/10 p-4 text-xs text-white focus:border-white/40 outline-none"
                  />
                </div>
                <div>
                  <label className="block text-[10px] uppercase tracking-widest text-white/50 mb-2">Categoría</label>
                  <select 
                    value={videoCategory}
                    onChange={(e) => setVideoCategory(e.target.value)}
                    className="w-full bg-black border border-white/10 p-4 text-xs text-white focus:border-white/40 outline-none uppercase tracking-widest"
                  >
                    {categories.map(cat => (
                      <option key={cat.id} value={cat.id}>{cat.name}</option>
                    ))}
                  </select>
                </div>
                <button
                  type="submit"
                  className="w-full py-4 bg-white text-black text-[10px] font-bold tracking-[0.2em] uppercase hover:bg-zinc-200 transition-all"
                >
                  Guardar Vídeo
                </button>
              </form>
            </div>
          </div>
        )}

        {error && <p className="text-red-500 mb-8">{error}</p>}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {photos.map((photo) => (
            <div key={photo.id} className="bg-zinc-900 border border-white/10 rounded overflow-hidden group relative">
              <div className="aspect-square relative flex items-center justify-center bg-black/40">
                {photo.type === 'video' ? (
                  <div className="flex flex-col items-center gap-3">
                    <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center bg-white/5 group-hover:scale-110 transition-transform">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="white"><path d="M8 5v14l11-7z"/></svg>
                    </div>
                    <span className="text-[10px] uppercase tracking-widest text-white/40 font-bold">VÍDEO</span>
                  </div>
                ) : (
                  <img src={photo.url} alt="" className="object-cover w-full h-full" />
                )}
                
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                   <button 
                     type="button"
                     onClick={(e) => {
                       e.preventDefault();
                       e.stopPropagation();
                       handleDelete(photo.id, photo.type);
                     }}
                     className="p-4 bg-red-600 rounded-full hover:bg-red-700 transition-all hover:scale-110 shadow-xl pointer-events-auto relative z-20"
                     title="Eliminar recurso"
                   >
                     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 6h18m-2 0v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6m3 0V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/></svg>
                   </button>
                </div>
              </div>
              <div className="p-4 flex flex-col gap-3">
                <p className="text-[10px] text-white/50 uppercase tracking-widest truncate">{photo.title || (photo.type === 'video' ? 'Vídeo sin título' : 'Fotografía')}</p>
                <select 
                  defaultValue={photo.categoryId}
                  onChange={async (e) => {
                    await fetch(`/api/photos/${photo.id}`, {
                      method: 'PATCH',
                      headers: { 'Content-Type': 'application/json' },
                      body: JSON.stringify({ categoryId: e.target.value })
                    });
                  }}
                  className="w-full bg-black border border-white/10 p-2 text-[10px] uppercase tracking-[0.2em] outline-none focus:border-white/30"
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
