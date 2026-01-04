
import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-40 transition-all duration-500 px-6 md:px-12 py-6 ${
      scrolled ? 'bg-black/80 backdrop-blur-md py-4' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a href="#hero" className="text-2xl font-serif font-bold tracking-tighter">JD</a>
        
        <nav className="hidden md:flex items-center gap-10 text-xs uppercase tracking-widest font-light">
          <a href="#gallery" className="hover:text-blue-400 transition-colors">Gallery</a>
          <a href="#vision" className="hover:text-blue-400 transition-colors">The Vision</a>
          <a href="#about" className="hover:text-blue-400 transition-colors">Artist</a>
          <a href="#contact" className="hover:text-blue-400 transition-colors">Connect</a>
        </nav>

        <div className="flex items-center gap-4">
          <button className="border border-white/20 hover:border-white px-5 py-2 rounded-full text-[10px] uppercase tracking-widest transition-all">
            Menu
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
