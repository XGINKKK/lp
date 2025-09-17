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
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-20 [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
        
        {/* Optimized Floating Orbs */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary-500/25 rounded-full blur-[80px] mega-orb hidden md:block" />
        <div className="absolute top-3/4 right-1/4 w-56 h-56 bg-accent-500/30 rounded-full blur-[70px] mega-orb hidden md:block" style={{ animationDelay: '4s' }} />
        <div className="absolute top-1/2 left-1/2 w-48 h-48 bg-neon-pink/35 rounded-full blur-[60px] mega-orb" style={{ animationDelay: '8s' }} />
        
        {/* Optimized Pulsing Glows */}
        <div className="absolute top-20 right-20 w-32 h-32 bg-primary-400/40 rounded-full blur-[40px] super-glow hidden lg:block" />
        <div className="absolute bottom-32 left-20 w-36 h-36 bg-accent-400/35 rounded-full blur-[50px] super-glow hidden lg:block" style={{ animationDelay: '1.5s' }} />
        
        {/* Reduced Drifting Particles */}
        <div className="absolute top-1/3 w-3 h-3 bg-neon-pink rounded-full drift-left hidden md:block" style={{ animationDelay: '0s' }} />
        <div className="absolute top-2/3 w-2 h-2 bg-primary-400 rounded-full drift-right hidden md:block" style={{ animationDelay: '6s' }} />
        <div className="absolute top-1/2 w-4 h-4 bg-accent-400 rounded-full drift-left hidden lg:block" style={{ animationDelay: '12s' }} />
        
        {/* Optimized Rotating Glow Ring */}
        <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] md:w-[600px] md:h-[600px] -translate-x-1/2 -translate-y-1/2 rotate-glow hidden md:block">
          <div className="w-full h-full rounded-full border border-primary-500/15 blur-sm"></div>
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