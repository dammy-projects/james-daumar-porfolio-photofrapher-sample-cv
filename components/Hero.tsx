
import React, { useEffect, useRef } from 'react';

// Declaration for anime provided in index.html
declare var anime: any;

const Hero: React.FC = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (titleRef.current) {
      const text = titleRef.current.innerText;
      titleRef.current.innerHTML = text
        .split('')
        .map((char) => `<span class='letter inline-block'>${char === ' ' ? '&nbsp;' : char}</span>`)
        .join('');

      anime.timeline({ loop: false })
        .add({
          targets: '.letter',
          opacity: [0, 1],
          translateY: [40, 0],
          translateZ: 0,
          scale: [0.3, 1],
          easing: "easeOutExpo",
          duration: 800,
          delay: (el: any, i: number) => 30 * i
        })
        .add({
          targets: subtitleRef.current,
          opacity: [0, 1],
          translateY: [20, 0],
          easing: "easeOutExpo",
          duration: 1000,
          offset: '-=400'
        });
    }
  }, []);

  return (
    <section id="hero" className="relative h-screen flex flex-col items-center justify-center overflow-hidden bg-black px-6">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-900 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-purple-900 rounded-full blur-[120px]"></div>
      </div>

      <div className="relative z-10 text-center">
        <h1 
          ref={titleRef} 
          className="text-6xl md:text-9xl font-serif font-bold tracking-tighter mb-4"
        >
          James Daumar
        </h1>
        <div 
          ref={subtitleRef}
          className="flex flex-col md:flex-row items-center justify-center gap-4 text-gray-400 font-light tracking-widest uppercase text-sm md:text-base opacity-0"
        >
          <span>Visual Alchemist</span>
          <span className="hidden md:inline">•</span>
          <span>Light Chaser</span>
          <span className="hidden md:inline">•</span>
          <span>Storyteller</span>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <a href="#gallery" className="text-gray-500 hover:text-white transition-colors">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;
