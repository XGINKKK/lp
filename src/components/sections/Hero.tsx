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
    <section className="pt-32 pb-20 md:pt-40 md:pb-32 relative overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 bg-black -z-10" />
      
      {/* Multiple Gradient Orbs */}
      <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-primary-500/40 rounded-full blur-[120px] mega-orb" />
      <div className="absolute bottom-1/4 -right-1/4 w-80 h-80 bg-accent-500/45 rounded-full blur-[100px] mega-orb" style={{ animationDelay: '4s' }} />
      <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-neon-pink/50 rounded-full blur-[80px] mega-orb transform -translate-x-1/2 -translate-y-1/2" style={{ animationDelay: '8s' }} />
      <div className="absolute top-1/6 right-1/3 w-72 h-72 bg-primary-400/35 rounded-full blur-[90px] floating-orbs" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-1/6 left-1/3 w-88 h-88 bg-accent-400/40 rounded-full blur-[110px] floating-orbs" style={{ animationDelay: '6s' }} />
      
      {/* Pulsing Glows */}
      <div className="absolute top-20 right-20 w-56 h-56 bg-primary-400/60 rounded-full blur-[70px] super-glow" />
      <div className="absolute bottom-32 left-20 w-64 h-64 bg-accent-400/55 rounded-full blur-[80px] super-glow" style={{ animationDelay: '1.5s' }} />
      <div className="absolute top-1/3 right-1/6 w-48 h-48 bg-neon-pink/70 rounded-full blur-[60px] super-glow" style={{ animationDelay: '3s' }} />
      <div className="absolute bottom-1/3 left-1/6 w-52 h-52 bg-primary-500/65 rounded-full blur-[75px] super-glow" style={{ animationDelay: '4.5s' }} />
      
      {/* Rotating Rings */}
      <div className="absolute top-1/2 left-1/2 w-[700px] h-[700px] -translate-x-1/2 -translate-y-1/2 rotate-glow">
        <div className="w-full h-full rounded-full border-2 border-primary-500/30 blur-sm"></div>
      </div>
      <div className="absolute top-1/2 left-1/2 w-[900px] h-[900px] -translate-x-1/2 -translate-y-1/2 rotate-glow" style={{ animationDelay: '10s', animationDirection: 'reverse' }}>
        <div className="w-full h-full rounded-full border border-accent-500/25 blur-md"></div>
      </div>
      
      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <FloatingParticle key={i} delay={i * 0.3} size={Math.random() > 0.5 ? 3 : 6} />
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
            Pare de Perder Dinheiro com Tarefas que{' '}
            <GradientText>Poderiam ser Automatizadas</GradientText>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-3xl mx-auto scale-in">
            Sua equipe está gastando 6 horas por dia em tarefas repetitivas enquanto você poderia estar focando no que realmente importa: fazer sua empresa crescer.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 mb-16 slide-in-left">
            <Button 
              variant="primary" 
              className="w-full sm:w-auto text-base md:text-lg py-4 md:py-6 px-8 md:px-12 group"
              onClick={() => window.location.href = '#apply'}
            >
              <span className="flex items-center justify-center gap-2">
                Começar Agora
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Button>
            <Button 
              variant="secondary" 
              className="w-full sm:w-auto text-base md:text-lg py-4 md:py-6 px-8 md:px-12 group"
              onClick={() => window.location.href = '#projects'}
            >
              <span className="flex items-center justify-center gap-2">
                Explorar Soluções
                <Brain className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              </span>
            </Button>
          </div>

          <div className="hero-mobile-cards max-w-6xl mx-auto slide-in-right">
            <div className="mobile-card tilt-card">
              <div className="mobile-card-header">
                <div className="mobile-card-icon">
                  <Bot />
                </div>
                <div className="mobile-card-content">
                  <h3 className="mobile-card-title">IA Humanizada</h3>
                  <p className="mobile-card-description">Agentes que pensam e agem como humanos</p>
                </div>
              </div>
            </div>

            <div className="mobile-card tilt-card">
              <div className="mobile-card-header">
                <div className="mobile-card-icon">
                  <Brain />
                </div>
                <div className="mobile-card-content">
                  <h3 className="mobile-card-title">Automação 360°</h3>
                  <p className="mobile-card-description">Integração completa de processos</p>
                </div>
              </div>
            </div>

            <div className="mobile-card tilt-card">
              <div className="mobile-card-header">
                <div className="mobile-card-icon">
                  <Zap />
                </div>
                <div className="mobile-card-content">
                  <h3 className="mobile-card-title">Resultados Reais</h3>
                  <p className="mobile-card-description">ROI mensurável e garantido</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* Marquee section */}
      <div className="mt-20">
        <Marquee items={benefitItems} speed="normal" />
      </div>
    </section>
  );
};

export default Hero;