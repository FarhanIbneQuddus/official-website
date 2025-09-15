import React from 'react';
import { Play, Calendar, Star } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video background with gradient overlay */}
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="bg.mp4" type="video/mp4" />
          {/* Fallback image if video fails to load */}
          <img
            src="https://images.pexels.com/photos/1181676/pexels-photo-1181676.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
            alt="Demon Slayer background"
            className="w-full h-full object-cover"
          />
        </video>
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-red-900/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/50" />
      </div>
      
      {/* Animated background particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-red-500 rounded-full opacity-30 animate-ping"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>
      
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
        <h1 className="text-6xl md:text-8xl font-bold mb-6 animate-fade-in-up">
          <img src="logo.png" alt="" className="mx-auto w-52 pt-5 md:w-96 opacity-80" />
        </h1>
        
        <p className="text-xl md:text-2xl mb-4 opacity-90 animate-fade-in-up animation-delay-300">
          INFINITY CASTLE
        </p>
        
        <div className="flex items-center justify-center space-x-6 mb-8 animate-fade-in-up animation-delay-600">
          <div className="flex items-center space-x-2">
            <Star className="h-5 w-5 text-yellow-400 fill-current" />
            <span className="text-lg font-semibold">10/10</span>
          </div>
          <div className="h-6 w-px bg-white/30" />
          <div className="flex items-center space-x-2">
            <Calendar className="h-5 w-5" />
            <span className="text-lg">September 2025</span>
          </div>
          <div className="h-6 w-px bg-white/30" />
          <span className="text-lg font-semibold">PG-13</span>
        </div>
        
        <p className="text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed animate-fade-in-up animation-delay-900">
          Enter the realm where time and space bend. Tanjiro faces Akaza. Shinobu meets her destiny. Zenitsu awakens. The final battle begins.
          Step inside the Infinity Castle. See it on the big screen.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 animate-fade-in-up animation-delay-1200">
          <a
            href="#trailer"
            className="group bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center space-x-3"
          >
            <Play className="h-6 w-6 group-hover:scale-110 transition-transform duration-300" />
            <span>Watch Trailer</span>
          </a>
          <a
            href="#tickets"
            className="border-2 border-white text-white hover:bg-white hover:text-black px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
          >
            Get Tickets
          </a>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;