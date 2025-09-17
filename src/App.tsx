import React from 'react';
import Header from './components/layout/Header';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
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
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-30 [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
        
        {/* Mega Floating Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/30 rounded-full blur-[120px] mega-orb" />
        <div className="absolute top-3/4 right-1/4 w-80 h-80 bg-accent-500/35 rounded-full blur-[100px] mega-orb" style={{ animationDelay: '4s' }} />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-neon-pink/40 rounded-full blur-[80px] mega-orb" style={{ animationDelay: '8s' }} />
        <div className="absolute top-1/6 right-1/3 w-72 h-72 bg-primary-400/25 rounded-full blur-[90px] floating-orbs" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-1/6 left-1/3 w-88 h-88 bg-accent-400/30 rounded-full blur-[110px] floating-orbs" style={{ animationDelay: '6s' }} />
        
        {/* Super Pulsing Glows */}
        <div className="absolute top-20 right-20 w-48 h-48 bg-primary-400/50 rounded-full blur-[60px] super-glow" />
        <div className="absolute bottom-32 left-20 w-56 h-56 bg-accent-400/45 rounded-full blur-[70px] super-glow" style={{ animationDelay: '1.5s' }} />
        <div className="absolute top-1/3 right-1/6 w-40 h-40 bg-neon-pink/60 rounded-full blur-[50px] super-glow" style={{ animationDelay: '3s' }} />
        <div className="absolute bottom-1/3 left-1/6 w-44 h-44 bg-primary-500/55 rounded-full blur-[65px] super-glow" style={{ animationDelay: '4.5s' }} />
        
        {/* Bigger Drifting Particles */}
        <div className="absolute top-1/3 w-4 h-4 bg-neon-pink rounded-full drift-left" style={{ animationDelay: '0s' }} />
        <div className="absolute top-2/3 w-3 h-3 bg-primary-400 rounded-full drift-right" style={{ animationDelay: '3s' }} />
        <div className="absolute top-1/2 w-5 h-5 bg-accent-400 rounded-full drift-left" style={{ animationDelay: '6s' }} />
        <div className="absolute top-1/4 w-3 h-3 bg-neon-pink rounded-full drift-right" style={{ animationDelay: '9s' }} />
        <div className="absolute top-3/4 w-4 h-4 bg-primary-500 rounded-full drift-left" style={{ animationDelay: '12s' }} />
        <div className="absolute top-1/6 w-6 h-6 bg-accent-500 rounded-full drift-right" style={{ animationDelay: '15s' }} />
        
        {/* Rotating Glow Ring */}
        <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] -translate-x-1/2 -translate-y-1/2 rotate-glow">
          <div className="w-full h-full rounded-full border-2 border-primary-500/20 blur-sm"></div>
        </div>
        <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] -translate-x-1/2 -translate-y-1/2 rotate-glow" style={{ animationDelay: '10s', animationDirection: 'reverse' }}>
          <div className="w-full h-full rounded-full border border-accent-500/15 blur-md"></div>
        </div>
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/50" />
      </div>
      
      <Header />
      <main className="relative">
        <Hero />
        <About />
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