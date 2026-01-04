
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import AIInsights from './components/AIInsights';
import About from './components/About';
import Contact from './components/Contact';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#0a0a0a] selection:bg-blue-500 selection:text-white">
      <Header />
      <main>
        <Hero />
        <Gallery />
        <AIInsights />
        <About />
      </main>
      <Contact />
    </div>
  );
};

export default App;
