import React from 'react';
import Header from './components/layout/Header';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Services from './components/sections/Services';
import AIAgents from './components/sections/AIAgents';
import Projects from './components/sections/Projects';
import Methodology from './components/sections/Methodology';
import Comparison from './components/sections/Comparison';
import CTA from './components/sections/CTA';
import Footer from './components/layout/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-neon-pink/30 selection:text-white">
      {/* Animated Background Effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-20 [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
        
        {/* Floating Orbs */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary-500/20 rounded-full blur-[100px] floating-orbs" />
        <div className="absolute top-3/4 right-1/4 w-48 h-48 bg-accent-500/25 rounded-full blur-[80px] floating-orbs" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-neon-pink/30 rounded-full blur-[60px] floating-orbs" style={{ animationDelay: '4s' }} />
        
        {/* Pulsing Glows */}
        <div className="absolute top-20 right-20 w-24 h-24 bg-primary-400/40 rounded-full blur-[40px] pulse-glow-bg" />
        <div className="absolute bottom-32 left-20 w-36 h-36 bg-accent-400/35 rounded-full blur-[50px] pulse-glow-bg" style={{ animationDelay: '1.5s' }} />
        
        {/* Drifting Particles */}
        <div className="absolute top-1/3 w-2 h-2 bg-neon-pink rounded-full drift-left" style={{ animationDelay: '0s' }} />
        <div className="absolute top-2/3 w-1 h-1 bg-primary-400 rounded-full drift-right" style={{ animationDelay: '3s' }} />
        <div className="absolute top-1/2 w-1.5 h-1.5 bg-accent-400 rounded-full drift-left" style={{ animationDelay: '6s' }} />
        <div className="absolute top-1/4 w-1 h-1 bg-neon-pink rounded-full drift-right" style={{ animationDelay: '9s' }} />
        
        {/* Rotating Glow Ring */}
        <div className="absolute top-1/2 left-1/2 w-96 h-96 -translate-x-1/2 -translate-y-1/2 rotate-glow">
          <div className="w-full h-full rounded-full border border-primary-500/10 blur-sm"></div>
        </div>
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/50" />
      </div>
      
      <Header />
      <main className="relative">
        <Hero />
        <About />
        <Services />
        <AIAgents />
        <Projects />
        <Methodology />
        <Comparison />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;