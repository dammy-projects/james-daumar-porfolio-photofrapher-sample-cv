
import React, { useState } from 'react';
import { getArtisticVision } from '../services/gemini';
import { VisionResult } from '../types';

const AIInsights: React.FC = () => {
  const [prompt, setPrompt] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<VisionResult | null>(null);

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!prompt.trim()) return;

    setLoading(true);
    try {
      const data = await getArtisticVision(prompt);
      setResult(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="vision" className="py-24 bg-zinc-900 px-6 md:px-12 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-900/10 to-transparent"></div>
      
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-serif mb-6">The Visionary Lens</h2>
          <p className="text-gray-400 text-lg">
            Curious how James would interpret a concept? Provide a theme, and the AI will generate James's technical and artistic "Shooting Plan".
          </p>
        </div>

        <form onSubmit={handleGenerate} className="flex flex-col md:flex-row gap-4 mb-16">
          <input
            type="text"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="e.g. A futuristic neon tea ceremony in Kyoto"
            className="flex-1 bg-black/50 border border-gray-800 rounded-full px-8 py-4 text-white focus:outline-none focus:border-blue-500 transition-colors"
          />
          <button
            type="submit"
            disabled={loading}
            className={`bg-white text-black px-10 py-4 rounded-full font-bold uppercase text-xs tracking-widest hover:bg-blue-400 hover:text-white transition-all duration-300 disabled:opacity-50`}
          >
            {loading ? 'Consulting the Muse...' : 'Reveal Vision'}
          </button>
        </form>

        {result && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-in fade-in slide-in-from-bottom-10 duration-700">
            <div className="bg-black/40 p-8 rounded-2xl border border-gray-800 hover:border-blue-500/30 transition-colors">
              <h4 className="text-blue-400 uppercase text-xs tracking-widest mb-2">The Concept</h4>
              <p className="text-2xl font-serif text-white mb-6">"{result.concept}"</p>
              
              <h4 className="text-blue-400 uppercase text-xs tracking-widest mb-2">Lighting Strategy</h4>
              <p className="text-gray-300 mb-6">{result.lighting}</p>
            </div>
            
            <div className="bg-black/40 p-8 rounded-2xl border border-gray-800 hover:border-blue-500/30 transition-colors">
              <h4 className="text-blue-400 uppercase text-xs tracking-widest mb-2">Technical Specs</h4>
              <p className="text-gray-300 mb-6 font-mono text-sm">{result.technique}</p>
              
              <h4 className="text-blue-400 uppercase text-xs tracking-widest mb-2">Atmospheric Vibe</h4>
              <p className="text-gray-300 italic">"{result.vibe}"</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default AIInsights;
