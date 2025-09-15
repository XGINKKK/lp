import React, { useEffect, useRef } from 'react';
import Container from '../ui/Container';
import Button from '../ui/Button';
import GradientText from '../ui/GradientText';
import Marquee from '../ui/Marquee';
import { ArrowRight, Bot, Brain, Zap } from 'lucide-react';

const benefitItems = [
  "Redução de até 70% nos custos operacionais",
  "Aumento de até 45% na satisfação do cliente",
  "Automação de até 85% das tarefas repetitivas",
  "ROI positivo em até 3 meses",
  "Disponibilidade 24/7",
  "Escalabilidade imediata",
  "Integração com sistemas existentes",
  "Análise de dados em tempo real"
];

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  
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
    
    if (heroRef.current) {
      observer.observe(heroRef.current);
    }
    
    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);

  // Floating particles effect
  const FloatingParticle = ({ delay = 0, size = 4 }) => (
    <div 
      className={`absolute w-${size} h-${size} bg-neon-pink rounded-full opacity-20 floating`}
      style={{
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDelay: `${delay}s`
      }}
    />
  );

  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-32 relative overflow-hidden animated-gradient">
      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <FloatingParticle key={i} delay={i * 0.5} size={Math.random() > 0.5 ? 2 : 4} />
        ))}
      </div>

      <Container>
        <div ref={heroRef} className="max-w-5xl mx-auto text-center opacity-0 translate-y-10 transition-all duration-1000 ease-out slide-in-left">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8 scale-in">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-primary-500"></span>
            </span>
            <span className="text-sm font-medium bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
              Tecnologia de ponta em IA
            </span>
          </div>

          <h1 ref={titleRef} className="text-4xl md:text-6xl lg:text-7xl font-display font-bold leading-tight mb-8 slide-in-right">
            Liberte o Potencial da Sua Empresa: <GradientText>Automatize e Escale</GradientText> com Inteligência Artificial
          </h1>
          
          <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-3xl mx-auto scale-in">
            Criamos soluções de IA e automação humanizada que geram resultados reais, reduzem custos e aumentam a produtividade.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 mb-16 slide-in-left">
            <Button 
              variant="primary" 
              className="w-full sm:w-auto text-lg py-6 px-12 group"
              onClick={() => window.location.href = '#apply'}
            >
              <span className="flex items-center justify-center gap-2">
                Começar Agora
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Button>
            <Button 
              variant="secondary" 
              className="w-full sm:w-auto text-lg group"
              onClick={() => window.location.href = '#services'}
            >
              <span className="flex items-center justify-center gap-2">
                Explorar Soluções
                <Brain className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              </span>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto slide-in-right">
            <div className="flex items-center gap-4 p-6 rounded-2xl glass-card tilt-card">
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary-500/20 flex items-center justify-center scale-in">
                <Bot className="w-6 h-6 text-primary-400" />
              </div>
              <div className="text-left">
                <h3 className="font-semibold mb-1">IA Humanizada</h3>
                <p className="text-sm text-white/70">Agentes que pensam e agem como humanos</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-6 rounded-2xl glass-card tilt-card">
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-accent-500/20 flex items-center justify-center scale-in">
                <Brain className="w-6 h-6 text-accent-400" />
              </div>
              <div className="text-left">
                <h3 className="font-semibold mb-1">Automação 360°</h3>
                <p className="text-sm text-white/70">Integração completa de processos</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-6 rounded-2xl glass-card tilt-card">
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary-500/20 flex items-center justify-center scale-in">
                <Zap className="w-6 h-6 text-primary-400" />
              </div>
              <div className="text-left">
                <h3 className="font-semibold mb-1">Resultados Reais</h3>
                <p className="text-sm text-white/70">ROI mensurável e garantido</p>
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* Marquee section */}
      <div className="mt-20">
        <Marquee items={benefitItems} speed="normal" />
        <Marquee items={benefitItems} direction="right" speed="normal" />
      </div>

      {/* Gradient orbs */}
      <div className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 bg-neon-pink/40 rounded-full blur-[128px] -z-10 floating" />
      <div className="absolute bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-neon-purple/40 rounded-full blur-[128px] -z-10 floating" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 left-1/2 w-1/4 h-1/4 bg-neon-glow/30 rounded-full blur-[96px] -z-10 transform -translate-x-1/2 -translate-y-1/2 floating" style={{ animationDelay: '4s' }} />
    </section>
  );
};

export default Hero;