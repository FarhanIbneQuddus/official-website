import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Characters from './components/Characters';
import Trailer from './components/Trailer';
import Tickets from './components/Tickets';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <Hero />
      <About />
      <Characters />
      <Trailer />
      <Tickets />
      <Footer />
    </div>
  );
}

export default App;