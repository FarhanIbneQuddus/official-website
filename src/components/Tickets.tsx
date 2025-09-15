import React, { useState } from 'react';
import { MapPin, Calendar, Clock, Star, Ticket } from 'lucide-react';

const Tickets = () => {
  const [selectedTheater, setSelectedTheater] = useState(0);
  const [selectedShowtime, setSelectedShowtime] = useState(null);

  const theaters = [
    {
      name: 'Star Cineplex',
      address: 'Bashundhara City, on the 8th Floor at 13/3 Ka, Panthapath, Tejgaon, Dhaka 1205',
      rating: 4.8,
      distance: '0.8 miles',
      showtimes: ['2:30 PM', '5:45 PM', '8:15 PM', '10:50 PM']
    },
    {
      name: 'Blockbuster Cinemas',
      address: 'KA-244, Kuril, Progoti Shoroni, Dhaka',
      rating: 4.3,
      distance: '0.9 miles',
      showtimes: ['3:00 PM', '6:30 PM', '9:00 PM', '11:30 PM']
    },
    {
      name: 'Grand Sylhet Movie Theater',
      address: 'Airport Rd, Sylhet',
      rating: 4.7,
      distance: '1.2 miles',
      showtimes: ['2:15 PM', '5:00 PM', '7:45 PM', '10:20 PM']
    }
  ];

  return (
    <section id="tickets" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Get Your <span className="text-red-600">Tickets</span>
          </h2>
          <div className="w-24 h-1 bg-red-600 mx-auto mb-6" />
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Secure your seats for the most anticipated anime movie of the year
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Theater selection */}
          <div className="lg:col-span-2">
            <div className="bg-black rounded-xl p-6">
              <div className="flex items-center space-x-3 mb-6">
                <MapPin className="h-6 w-6 text-red-500" />
                <h3 className="text-xl font-bold text-white">Select Theater</h3>
              </div>
              
              <div className="space-y-4">
                {theaters.map((theater, index) => (
                  <div
                    key={index}
                    className={`p-4 rounded-lg cursor-pointer transition-all duration-300 ${
                      selectedTheater === index
                        ? 'bg-red-600/20 border-2 border-red-500'
                        : 'bg-gray-800 hover:bg-gray-700 border-2 border-transparent'
                    }`}
                    onClick={() => setSelectedTheater(index)}
                  >
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h4 className="text-lg font-semibold text-white">{theater.name}</h4>
                        <p className="text-gray-400 text-sm">{theater.address}</p>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center space-x-1 mb-1">
                          <Star className="h-4 w-4 text-yellow-400 fill-current" />
                          <span className="text-white font-semibold">{theater.rating}</span>
                        </div>
                        <p className="text-gray-400 text-sm">{theater.distance}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-2 mb-3">
                      <Clock className="h-4 w-4 text-red-500" />
                      <span className="text-gray-300 text-sm">Today's Showtimes</span>
                    </div>
                    
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                      {theater.showtimes.map((time, timeIndex) => (
                        <button
                          key={timeIndex}
                          className={`p-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
                            selectedShowtime === `${index}-${timeIndex}`
                              ? 'bg-red-600 text-white'
                              : 'bg-gray-700 text-gray-300 hover:bg-red-600/20 hover:text-white'
                          }`}
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedShowtime(`${index}-${timeIndex}`);
                          }}
                        >
                          {time}
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Booking summary */}
          <div className="lg:col-span-1">
            <div className="bg-black rounded-xl p-6 sticky top-8">
              <div className="flex items-center space-x-3 mb-6">
                <Ticket className="h-6 w-6 text-red-500" />
                <h3 className="text-xl font-bold text-white">Booking Summary</h3>
              </div>
              
              <div className="space-y-4 mb-8">
                <div className="border-b border-gray-700 pb-4">
                  <img
                    src="https://i.pinimg.com/1200x/a2/bc/32/a2bc32b689bfe5eae75acca70251184b.jpg"
                    alt="Movie poster"
                    className="w-20 h-28 object-cover rounded-lg mb-3"
                  />
                  <h4 className="text-white font-semibold">Demon Slayer: Infinity Castle</h4>
                  <p className="text-gray-400 text-sm">PG-13 • 117 min</p>
                </div>
                
                {selectedTheater !== null && (
                  <div className="border-b border-gray-700 pb-4">
                    <p className="text-gray-400 text-sm mb-1">Theater</p>
                    <p className="text-white font-semibold">{theaters[selectedTheater].name}</p>
                  </div>
                )}
                
                <div className="border-b border-gray-700 pb-4">
                  <p className="text-gray-400 text-sm mb-1">Date</p>
                  <p className="text-white font-semibold">Today, March 15</p>
                </div>
                
                {selectedShowtime && (
                  <div className="border-b border-gray-700 pb-4">
                    <p className="text-gray-400 text-sm mb-1">Time</p>
                    <p className="text-white font-semibold">
                      {theaters[selectedTheater].showtimes[parseInt(selectedShowtime.split('-')[1])]}
                    </p>
                  </div>
                )}
                
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Adult Ticket</span>
                  <span className="text-white font-semibold">$14.50</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Booking Fee</span>
                  <span className="text-white font-semibold">$2.50</span>
                </div>
                
                <div className="border-t border-gray-700 pt-4 flex justify-between items-center">
                  <span className="text-white font-bold text-lg">Total</span>
                  <span className="text-red-500 font-bold text-lg">$17.00</span>
                </div>
              </div>
              
              <button
                className={`w-full py-4 rounded-lg font-semibold text-lg transition-all duration-300 ${
                  selectedShowtime
                    ? 'bg-red-600 hover:bg-red-700 text-white transform hover:scale-105'
                    : 'bg-gray-700 text-gray-400 cursor-not-allowed'
                }`}
                disabled={!selectedShowtime}
              >
                {selectedShowtime ? 'Continue to Payment' : 'Select Showtime'}
              </button>
              
              <p className="text-gray-400 text-xs text-center mt-4">
                Secure checkout powered by industry-standard encryption
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tickets;