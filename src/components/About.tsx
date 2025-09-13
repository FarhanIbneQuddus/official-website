import React from 'react';
import { Clock, Users, Award, Globe } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Clock, label: 'Runtime', value: '155 min' },
    { icon: Users, label: 'Box Office', value: '$503M' },
    { icon: Award, label: 'Awards', value: '15+' },
    { icon: Globe, label: 'Countries', value: '80+' }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            The <span className="text-red-600">Story</span>
          </h2>
          <div className="w-24 h-1 bg-red-600 mx-auto" />
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="prose prose-lg text-gray-300">
              <p className="text-xl leading-relaxed">
                Set after the events of the Demon Slayer: Mugen Train Arc, 
                Tanjiro Kamado and his friends join the Flame Hashira Kyojuro Rengoku 
                to investigate a series of disappearances aboard the mysterious Mugen Train.
              </p>
              
              <p className="text-lg leading-relaxed">
                As they delve deeper into the supernatural occurrences, they discover 
                that a powerful demon has been manipulating the dreams of passengers, 
                trapping them in eternal slumber. With lives hanging in the balance, 
                our heroes must overcome their greatest fears and unite their strength 
                to defeat this otherworldly threat.
              </p>
              
              <p className="text-lg leading-relaxed">
                This epic continuation of the Demon Slayer saga combines breathtaking 
                animation with heart-pounding action, delivering an unforgettable 
                cinematic experience that pushes the boundaries of anime filmmaking.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="bg-red-600/10 p-4 rounded-lg mb-3 inline-flex">
                    <stat.icon className="h-8 w-8 text-red-500" />
                  </div>
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-[2/3] rounded-lg overflow-hidden shadow-2xl">
              <img
                src="https://i.pinimg.com/1200x/a2/bc/32/a2bc32b689bfe5eae75acca70251184b.jpg"
                alt="Demon Slayer scene"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-red-600/20 rounded-full blur-xl" />
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-red-600/30 rounded-full blur-lg" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;