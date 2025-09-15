import React, { useRef } from 'react';
import { Sword, Shield, Skull} from 'lucide-react';

const Characters = () => {
  const scrollContainerRef = useRef(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -320, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 320, behavior: 'smooth' });
    }
  };

  const characters = [
    {
      name: 'Tanjiro Kamado',
      role: 'Demon Slayer',
      description: 'A kind-hearted young man who becomes a demon slayer to save his sister Nezuko.',
      icon: Sword,
      color: 'from-green-500 to-emerald-600',
      video: 'Tanjiro.mp4'
    },
    {
      name: 'Nezuko Kamado',
      role: 'Demon',
      description: 'Tanjiro\'s younger sister who was turned into a demon but retains her humanity.',
      icon: Shield,
      color: 'from-pink-500 to-rose-600',
      video: 'Nezuko.mp4'
    },
    {
      name: 'Zenitsu Agatsuma',
      role: 'Demon Slayer',
      description: 'A wild and aggressive fighter who was raised by boars in the mountains.',
      icon: Sword,
      color: 'from-blue-500 to-indigo-600',
      video: 'Zenitsu.mp4'
    },
    {
      name: 'Inosuke Hashibira',
      role: 'Demon Slayer',
      description: 'A wild and aggressive fighter who was raised by boars in the mountains.',
      icon: Sword,
      color: 'from-blue-500 to-indigo-600',
      video: 'Inosuke.mp4'
    },
    {
      name: 'Tomioka Giyu',
      role: 'Water Hashira',
      description: 'The nonchalant low self-esteemed water hashira & creator of the 11th form.',
      icon: Sword,
      color: 'from-orange-500 to-red-600',
      video: 'Giyuu.mp4'
    },
    {
      name: 'Kocho Shinobu',
      role: 'Insect Hashira',
      description: 'The venomous, perpetually smiling insect hashira & master of pharmaceutical combat.',
      icon: Sword,
      color: 'from-purple-500 to-indigo-600',
      video: 'Shinobu.mp4'
    },
    {
      name: 'Doma',
      role: 'Upper Rank Two',
      description: 'The emotionless, charismatic cult leader who consumes without mercy or pleasure.',
      icon: Skull, 
      color: 'from-blue-400 to-cyan-500',
      video: 'Doma.mp4'
    },
    {
      name: 'Akaza',
      role: 'Upper Rank Three',
      description: 'A powerful and prideful fighter who respects strength and challenges the strong.',
      icon: Skull,
      color: 'from-pink-500 to-rose-700',
      video: 'Akaza.mp4'
    }
  ];

  return (
    <section id="characters" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Meet the <span className="text-red-600">Heroes</span>
          </h2>
          <div className="w-24 h-1 bg-red-600 mx-auto mb-6" />
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Discover the brave souls who stand against the darkness
          </p>
        </div>
        <div className="relative flex items-center">
          {/* Left scroll button (outside container) */}
          <button 
            className="z-10 bg-gray-800 hover:bg-gray-700 text-white p-3 rounded-full shadow-lg transition-all opacity-80 hover:opacity-100 mr-2"
            style={{ position: 'relative', left: 0 }}
            onClick={scrollLeft}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          {/* Horizontal scroll container */}
          <div 
            className="flex overflow-x-auto scrollbar-hide space-x-6 pb-4 items-center"
            ref={scrollContainerRef}
            style={{ scrollBehavior: 'smooth', minHeight: '480px', background: 'rgba(0,0,0,0.2)' }}
          >
            {characters.map((character, index) => (
              <div
                key={index}
                className="group relative bg-gray-900 rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 hover:shadow-2xl flex-shrink-0"
                style={{ width: '300px' }}
              >
                <div className="aspect-[3/4] overflow-hidden relative">
                  <video
                    src={character.video}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    autoPlay
                    loop
                    muted
                    playsInline
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${character.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`} />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className={`inline-flex p-3 rounded-full bg-gradient-to-r ${character.color} mb-4`}>
                    <character.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-1">{character.name}</h3>
                  <p className="text-red-400 font-semibold mb-3">{character.role}</p>
                  <p className="text-gray-300 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                    {character.description}
                  </p>
                </div>
                <div className={`absolute inset-0 border-2 border-transparent group-hover:border-red-500 rounded-xl transition-colors duration-300`} />
              </div>
            ))}
          </div>
          {/* Right scroll button (outside container) */}
          <button 
            className="z-10 bg-gray-800 hover:bg-gray-700 text-white p-3 rounded-full shadow-lg transition-all opacity-80 hover:opacity-100 ml-2"
            style={{ position: 'relative', right: 0 }}
            onClick={scrollRight}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Characters;