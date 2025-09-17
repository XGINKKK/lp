import React, { useEffect, useRef, useState } from 'react';
import Container from '../ui/Container';
import GradientText from '../ui/GradientText';
import { ChevronDown, Eye } from 'lucide-react';

const About: React.FC = () => {
  const aboutRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const [cardsRevealed, setCardsRevealed] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100');
            entry.target.classList.remove('opacity-0', 'translate-y-10');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }
    
    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
    };
  }, []);

  const handleRevealTruth = () => {
    setCardsRevealed(true);
    // Smooth scroll to cards
    if (cardsRef.current) {
      cardsRef.current.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'center' 
      });
    }
  };

  return (
    <section id="about" className="py-20 md:py-32 relative">
      {/* Background elements */}
      <div className="absolute inset-0 bg-black -z-10" />
      <div className="absolute top-1/2 left-1/4 w-1/2 h-1/2 bg-primary-500/20 rounded-full blur-[96px] -z-10" />
      <div className="absolute bottom-0 right-1/4 w-1/2 h-1/2 bg-accent-500/20 rounded-full blur-[96px] -z-10" />
      
      <Container>
        <div 
          ref={aboutRef} 
          className="max-w-4xl mx-auto opacity-0 translate-y-10 transition-all duration-1000 ease-out"
        >
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8">
              <span className="text-sm font-medium bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
                A Realidade do Mercado
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
              A Verdade Que Ninguém Conta <GradientText>Sobre Automação</GradientText>
            </h2>
            <div className="text-xl text-white/80 max-w-4xl mx-auto mb-12">
              <div className="bg-dark-800/50 backdrop-blur-sm rounded-2xl p-8 border border-dark-700/50 mb-8">
                <p className="text-center mb-6">
                  A maioria das empresas não automatiza porque acham que é:
                </p>
                
                {/* Checklist de Problemas */}
                <div className="max-w-2xl mx-auto mb-8">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                    {[
                      "Muito complicado",
                      "Muito caro", 
                      "Só para grandes empresas",
                      "Vai desumanizar o negócio"
                    ].map((text, index) => (
                      <div 
                        key={index}
                        className={`flex items-center gap-3 mobile-padding p-3 md:p-4 bg-dark-800/30 border border-dark-700/50 rounded-lg min-h-[60px] transition-all duration-700 ${
                          cardsRevealed ? 'border-primary-500/30 bg-primary-500/5' : ''
                        }`}
                        style={{ 
                          opacity: 0,
                          transform: 'translateY(20px)',
                          animation: `fadeInUp 0.6s ease forwards`,
                          animationDelay: `${index * 100}ms`
                        }}
                      >
                        <span className="text-red-400 text-lg font-bold flex-shrink-0 w-5 text-center">
                          ✗
                        </span>
                        <span className="text-white/90 font-medium mobile-text-sm text-sm md:text-base">
                          {text}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Botão MENTIRA */}
                <div className="text-center mb-6">
                  <button
                    onClick={handleRevealTruth}
                    className="group relative inline-flex flex-col items-center gap-2 px-8 py-6 bg-gradient-to-r from-primary-500 via-neon-pink to-accent-500 rounded-2xl font-bold text-white transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary-500/50 border border-primary-400/30 hover:border-primary-300/50 focus:outline-none focus:ring-4 focus:ring-primary-500/30"
                    aria-label="Revelar a verdade sobre automação"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-primary-500/40 to-accent-500/40 rounded-2xl blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
                    <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    <span className="relative z-10 text-3xl font-black tracking-wide group-hover:scale-105 transition-transform duration-200">
                      MENTIRA!
                    </span>
                    
                    <span className="relative z-10 text-sm font-medium opacity-90 group-hover:opacity-100 transition-opacity duration-200 flex items-center gap-1">
                      <Eye className="w-4 h-4" />
                      Descubra a verdade abaixo
                      <ChevronDown className="w-4 h-4 group-hover:translate-y-1 transition-transform duration-300" />
                    </span>
                    
                    <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-2xl" />
                  </button>
                </div>
              </div>
              
              {/* Seção de Verdades */}
              <div ref={cardsRef}>
                <div 
                  className={`bg-gradient-to-r from-primary-500/10 to-accent-500/10 backdrop-blur-sm rounded-2xl p-8 border border-primary-500/20 transition-all duration-1000 ${
                    cardsRevealed ? 'ring-2 ring-primary-500/30 shadow-xl shadow-primary-500/20' : ''
                  }`}
                >
                  <h3 className="text-center text-xl font-semibold text-primary-400 mb-6">
                    Na verdade, quando você automatiza as tarefas certas:
                  </h3>
                  
                  <div className="space-y-4 max-w-3xl mx-auto">
                    {[
                      "Equipe mais feliz - fim das tarefas repetitivas e chatas",
                      "Clientes impressionados com velocidade e personalização",
                      "Você trabalha ON no negócio, não IN no negócio",
                      "Cresce 10x sem contratar 10x mais pessoas",
                      "Compete com gigantes usando cérebro, não músculo"
                    ].map((text, index) => (
                      <div 
                        key={index}
                        className="flex items-start gap-4 p-4 rounded-lg bg-green-500/5 border border-green-500/20 transition-all duration-800 ease-out opacity-100 translate-x-0"
                        style={{ 
                          animationDelay: `${index * 200}ms`
                        }}
                      >
                        <span className="text-green-400 text-lg font-bold flex-shrink-0 w-5 text-center">
                          ✓
                        </span>
                        <span className="text-white/90 leading-relaxed text-base font-medium">
                          {text}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default About;