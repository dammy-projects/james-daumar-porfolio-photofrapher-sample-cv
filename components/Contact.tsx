
import React from 'react';

const Contact: React.FC = () => {
  return (
    <footer id="contact" className="pt-24 pb-12 bg-zinc-950 px-6 md:px-12 border-t border-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="lg:col-span-2">
            <h2 className="text-4xl font-serif mb-8">Let's craft your narrative.</h2>
            <a 
              href="mailto:hello@jamesdaumar.art" 
              className="text-2xl md:text-5xl font-light hover:text-blue-400 transition-colors break-words"
            >
              hello@jamesdaumar.art
            </a>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest text-gray-500 mb-6">Offices</h4>
            <ul className="space-y-4 text-gray-400">
              <li>Paris, 75003</li>
              <li>New York, NY 10012</li>
              <li>Tokyo, Shibuya-ku</li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest text-gray-500 mb-6">Social</h4>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Instagram</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Behance</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Twitter (X)</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Vimeo</a></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between border-t border-gray-900 pt-12 text-gray-600 text-[10px] uppercase tracking-widest">
          <p>© 2024 James Daumar Studio. All rights reserved.</p>
          <div className="flex gap-8 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
