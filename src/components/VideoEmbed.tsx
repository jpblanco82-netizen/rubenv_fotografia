'use client';

interface VideoEmbedProps {
  url: string;
  title?: string;
  className?: string;
}

export default function VideoEmbed({ url, title, className = '' }: VideoEmbedProps) {
  // Función para obtener el ID de YouTube
  const getYouTubeId = (url: string) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  };

  // Función para obtener el ID de Vimeo
  const getVimeoId = (url: string) => {
    const regExp = /vimeo\.com\/(?:video\/)?([0-9]+)/;
    const match = url.match(regExp);
    return match ? match[1] : null;
  };

  const youtubeId = getYouTubeId(url);
  const vimeoId = getVimeoId(url);

  if (youtubeId) {
    return (
      <div className={`relative w-full h-full ${className}`}>
        <iframe
          src={`https://www.youtube.com/embed/${youtubeId}?autoplay=0&rel=0`}
          title={title || 'YouTube video'}
          className="absolute inset-0 w-full h-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    );
  }

  if (vimeoId) {
    return (
      <div className={`relative w-full h-full ${className}`}>
        <iframe
          src={`https://player.vimeo.com/video/${vimeoId}?badge=0&autopause=0&player_id=0&app_id=58479`}
          title={title || 'Vimeo video'}
          className="absolute inset-0 w-full h-full"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    );
  }

  // Fallback para enlaces directos a mp4
  if (url.endsWith('.mp4') || url.endsWith('.mov')) {
    return (
      <video 
        controls 
        className={`w-full h-full object-cover ${className}`}
        playsInline
      >
        <source src={url} type="video/mp4" />
        Tu navegador no soporta el formato de video.
      </video>
    );
  }

  return (
    <div className="flex items-center justify-center w-full h-full bg-zinc-900 text-white/50 text-xs">
      URL de video no soportada
    </div>
  );
}
