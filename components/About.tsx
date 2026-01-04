
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-32 bg-black px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div className="relative group overflow-hidden rounded-lg">
          <img 
            src="https://picsum.photos/id/64/800/1000" 
            alt="James Daumar Portrait" 
            className="w-full grayscale hover:grayscale-0 transition-all duration-1000"
          />
          <div className="absolute inset-0 border-[12px] border-white/5 group-hover:border-white/20 transition-all duration-500 m-4"></div>
        </div>

        <div>
          <h2 className="text-4xl md:text-7xl font-serif mb-10 leading-tight">
            Capturing the <span className="italic text-blue-400">soul</span> within the frame.
          </h2>
          <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
            <p>
              James Daumar is a multidisciplinary visual artist specializing in high-concept photography and cinematic storytelling. With a career spanning over a decade, James has traveled from the neon-soaked streets of Tokyo to the silent glaciers of Iceland.
            </p>
            <p>
              His work is characterized by a "Visual Alchemist" approach—treating light not just as a medium, but as an ingredient that can transform ordinary moments into legendary artifacts. 
            </p>
            <p>
              Whether it's a raw street portrait or a meticulously staged commercial shoot, the goal remains the same: to find the rhythm in the silence and the beauty in the chaos.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-8 border-t border-gray-800 pt-12">
            <div>
              <span className="block text-4xl font-serif text-white">150+</span>
              <span className="text-xs uppercase tracking-widest text-gray-500">Exhibitions Worldwide</span>
            </div>
            <div>
              <span className="block text-4xl font-serif text-white">20k+</span>
              <span className="text-xs uppercase tracking-widest text-gray-500">Global Collectors</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
