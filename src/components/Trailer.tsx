import React, { useRef, useState } from 'react';
import { Play, Volume2, Download, Share2 } from 'lucide-react';

const TRAILERS = [
  {
    title: 'Main Trailer',
    duration: '1:41',
    youtubeId: 'wPFeBxt7VXI',
    audio: 'Japanese/English',
    thumbnail: 'https://img.youtube.com/vi/wPFeBxt7VXI/maxresdefault.jpg',
  },
  {
    title: 'Featuring: Shinobu Kocho',
    duration: '0:40',
    youtubeId: 'juD6zgap4-I',
    audio: 'Japanese',
    thumbnail: 'https://img.youtube.com/vi/juD6zgap4-I/maxresdefault.jpg',
  },
  {
    title: 'Featuring: Zenitsu Agatsuma',
    duration: '0:40',
    youtubeId: 'zJ6fDGmDe6U',
    audio: 'English',
    thumbnail: 'https://img.youtube.com/vi/zJ6fDGmDe6U/maxresdefault.jpg',
  },
  {
    title: 'Featuring: Akaza',
    duration: '0:30',
    youtubeId: 'gkXS7_5GOgc',
    audio: 'Japanese',
    thumbnail: 'https://img.youtube.com/vi/gkXS7_5GOgc/maxresdefault.jpg',
  },
];

const Trailer = () => {
  const [currentTrailer, setCurrentTrailer] = useState(TRAILERS[0]);
  const [isMuted, setIsMuted] = useState(true);
  const playerRef = useRef(null);

  // Helper to build YouTube embed URL
  const getYoutubeUrl = (id: string) => {
    return `https://www.youtube.com/embed/${id}?autoplay=1&rel=0&modestbranding=1&showinfo=0&controls=1${isMuted ? '&mute=1' : ''}`;
  };

  // Toggle mute state
  const handleAudioToggle = () => {
    setIsMuted((prev) => !prev);
  };

  // Download and Share are placeholders
  const handleDownload = () => {
    window.open(`https://www.youtube.com/watch?v=${currentTrailer.youtubeId}`, '_blank');
  };
  const handleShare = () => {
    navigator.clipboard.writeText(`https://www.youtube.com/watch?v=${currentTrailer.youtubeId}`);
    alert('Trailer link copied to clipboard!');
  };

  return (
    <section id="trailer" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Watch the <span className="text-red-600">Trailer</span>
          </h2>
          <div className="w-24 h-1 bg-red-600 mx-auto mb-6" />
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Experience the breathtaking animation and epic battles
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          {/* Main trailer */}
          <div className="relative mb-12">
            <div className="aspect-video rounded-xl overflow-hidden shadow-2xl bg-gray-900">
              <iframe
                ref={playerRef}
                width="100%"
                height="100%"
                src={getYoutubeUrl(currentTrailer.youtubeId)}
                title={currentTrailer.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
            
            {/* Trailer controls */}
            <div className="flex items-center justify-between mt-6">
              <div className="flex items-center space-x-4">
                <button
                  className="flex items-center space-x-2 text-white hover:text-red-500 transition-colors duration-200"
                  onClick={handleAudioToggle}
                >
                  <Volume2 className="h-5 w-5" />
                  <span>Audio: {currentTrailer.audio} ({isMuted ? 'Muted' : 'Unmuted'})</span>
                </button>
                <button
                  className="flex items-center space-x-2 text-white hover:text-red-500 transition-colors duration-200 border border-red-600 rounded px-3 py-1 ml-2"
                  onClick={() => setCurrentTrailer(TRAILERS[0])}
                  disabled={currentTrailer.youtubeId === TRAILERS[0].youtubeId}
                  title="Back to Main Trailer"
                >
                  <Play className="h-5 w-5" />
                  <span>Main Trailer</span>
                </button>
              </div>
              <div className="flex items-center space-x-4">
                <button className="text-white hover:text-red-500 transition-colors duration-200" onClick={handleDownload}>
                  <Download className="h-5 w-5" />
                </button>
                <button className="text-white hover:text-red-500 transition-colors duration-200" onClick={handleShare}>
                  <Share2 className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
          
          {/* Additional media */}
          <div className="grid md:grid-cols-3 gap-6">
            {TRAILERS.slice(1).map((video, index) => (
              <div
                key={index}
                className="group cursor-pointer"
                onClick={() => setCurrentTrailer(video)}
              >
                <div className="relative aspect-video rounded-lg overflow-hidden bg-gray-800">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-red-600 p-3 rounded-full">
                      <Play className="h-6 w-6 text-white" fill="currentColor" />
                    </div>
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black/70 px-2 py-1 rounded text-xs text-white">
                    {video.duration}
                  </div>
                </div>
                <h3 className="text-white font-semibold mt-3 group-hover:text-red-500 transition-colors duration-200">
                  {video.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trailer;