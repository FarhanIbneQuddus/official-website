import React from 'react';
import { Sword, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <Sword className="h-8 w-8 text-red-600" />
              <span className="text-xl font-bold">Demon Slayer</span>
            </div>
            <p className="text-gray-400 mb-6">
              Experience the journey to the infinity castle and witness the final battle against the demons.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-red-500 transition-colors duration-200">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-red-500 transition-colors duration-200">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-red-500 transition-colors duration-200">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-red-500 transition-colors duration-200">
                <Youtube className="h-6 w-6" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {['Home', 'About', 'Characters', 'Trailer', 'Tickets'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Support */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-6">Support</h3>
            <ul className="space-y-3">
              {['Help Center', 'Contact Us', 'Privacy Policy', 'Terms of Service', 'Refunds'].map((item) => (
                <li key={item}>
                  <a 
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Newsletter */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-6">Stay Updated</h3>
            <p className="text-gray-400 mb-4">
              Get the latest news and updates about Demon Slayer movies and events.
            </p>
            <div className="flex flex-col space-y-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-red-500 transition-colors duration-200"
              />
              <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-3 rounded-lg font-semibold transition-colors duration-200">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 Ceejay's Choice. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm">
              Created with ❤️ for anime fans worldwide
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;