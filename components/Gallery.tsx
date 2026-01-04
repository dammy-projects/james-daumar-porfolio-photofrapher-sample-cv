
import React, { useState, useEffect, useRef } from 'react';
import { PHOTOS, CATEGORIES } from '../constants';
import { Photo } from '../types';

declare var anime: any;

const Gallery: React.FC = () => {
  const [filter, setFilter] = useState('All');
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  const filteredPhotos = filter === 'All' 
    ? PHOTOS 
    : PHOTOS.filter(p => p.category === filter);

  useEffect(() => {
    anime({
      targets: '.gallery-item',
      opacity: [0, 1],
      translateY: [50, 0],
      delay: anime.stagger(100),
      easing: 'easeOutExpo',
      duration: 1000
    });
  }, [filter]);

  return (
    <section id="gallery" className="py-24 bg-[#0a0a0a] px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <h2 className="text-4xl md:text-6xl font-serif mb-4">Portfolios</h2>
            <p className="text-gray-400 max-w-md">Exploring the interplay of shadow, light, and human narrative through the lens of a restless explorer.</p>
          </div>
          
          <div className="flex flex-wrap gap-4">
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 rounded-full border transition-all duration-300 text-sm tracking-widest uppercase ${
                  filter === cat 
                    ? 'bg-white text-black border-white' 
                    : 'bg-transparent text-gray-500 border-gray-800 hover:border-gray-500'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPhotos.map((photo) => (
            <div 
              key={photo.id} 
              className="gallery-item group relative cursor-pointer overflow-hidden aspect-[4/5]"
              onClick={() => setSelectedPhoto(photo)}
            >
              <img 
                src={photo.url} 
                alt={photo.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                <span className="text-xs uppercase tracking-[0.2em] text-blue-400 mb-2">{photo.category}</span>
                <h3 className="text-2xl font-serif text-white">{photo.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedPhoto && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95">
          <button 
            onClick={() => setSelectedPhoto(null)}
            className="absolute top-8 right-8 text-white hover:text-gray-400"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          
          <div className="max-w-5xl w-full grid grid-cols-1 lg:grid-cols-3 bg-zinc-900 overflow-hidden rounded-lg shadow-2xl">
            <div className="lg:col-span-2">
              <img src={selectedPhoto.url} alt={selectedPhoto.title} className="w-full h-full object-cover" />
            </div>
            <div className="p-8 flex flex-col justify-center">
              <span className="text-sm tracking-widest uppercase text-blue-400 mb-4">{selectedPhoto.category}</span>
              <h3 className="text-4xl font-serif mb-6">{selectedPhoto.title}</h3>
              <p className="text-gray-400 leading-relaxed mb-8">
                {selectedPhoto.description}
              </p>
              <button className="bg-white text-black py-4 px-8 rounded-full font-bold uppercase text-xs tracking-widest hover:bg-gray-200 transition-colors">
                Acquire Print
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
