import React from 'react';
import Header from './components/layout/Header';
import Hero from './components/sections/Hero';
import ResultsBar from './components/sections/ResultsBar';
import About from './components/sections/About';
import Team from './components/sections/Team';
import Services from './components/sections/Services';
import Methodology from './components/sections/Methodology';
import Comparison from './components/sections/Comparison';
import Cases from './components/sections/Cases';
import Guarantees from './components/sections/Guarantees';
import CTA from './components/sections/CTA';
import Footer from './components/layout/Footer';

function App() {
  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="min-h-screen bg-dark-950 text-white selection:bg-primary-500/30 selection:text-white overflow-x-hidden">
      <div className="fixed inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
      <div className="fixed inset-0 bg-gradient-to-t from-dark-950 via-dark-900/50 to-transparent pointer-events-none" />
      <Header />
      <main className="relative">
        <Hero />
        <ResultsBar />
        <About />
        <Team />
        <Services />
        <Methodology />
        <Comparison />
        <Cases />
        <Guarantees />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

import { useEffect } from 'react';

export default App;