import React, { useEffect, useRef, useState } from 'react';
import Container from '../ui/Container';
import GradientText from '../ui/GradientText';
import { Award, Shield, Zap, ChevronDown, Eye } from 'lucide-react';

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
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                  <div className="text-center p-4 bg-primary-500/10 rounded-lg border border-primary-500/20">
                    <p className="text-primary-300 font-semibold">Muito complicado</p>
                  </div>
                  <div className="text-center p-4 bg-primary-500/10 rounded-lg border border-primary-500/20">
                    <p className="text-primary-300 font-semibold">Muito caro</p>
                  </div>
                  <div className="text-center p-4 bg-primary-500/10 rounded-lg border border-primary-500/20">
                    <p className="text-primary-300 font-semibold">Só para grandes</p>
                  </div>
                  <div className="text-center p-4 bg-primary-500/10 rounded-lg border border-primary-500/20">
                    <p className="text-primary-300 font-semibold">Desumaniza</p>
                  </div>
                </div>
                
                {/* Improved MENTIRA Button */}
                <div className="text-center mb-6">
                  <button
                    onClick={handleRevealTruth}
                    className="group relative inline-flex flex-col items-center gap-2 px-8 py-6 bg-gradient-to-r from-primary-500 via-neon-pink to-accent-500 rounded-2xl font-bold text-white transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary-500/50 border border-primary-400/30 hover:border-primary-300/50 focus:outline-none focus:ring-4 focus:ring-primary-500/30"
                    aria-label="Revelar a verdade sobre automação"
                  >
                    {/* Glow effect background */}
                    <div className="absolute inset-0 bg-gradient-to-r from-primary-500/40 to-accent-500/40 rounded-2xl blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
                    
                    {/* Inner glow */}
                    <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Main text */}
                    <span className="relative z-10 text-3xl font-black tracking-wide group-hover:scale-105 transition-transform duration-200">
                      MENTIRA!
                    </span>
                    
                    {/* Context text */}
                    <span className="relative z-10 text-sm font-medium opacity-90 group-hover:opacity-100 transition-opacity duration-200 flex items-center gap-1">
                      <Eye className="w-4 h-4" />
                      Descubra a verdade abaixo
                      <ChevronDown className="w-4 h-4 group-hover:translate-y-1 transition-transform duration-300" />
                    </span>
                    
                    {/* Shine effect */}
                    <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-2xl" />
                  </button>
                </div>
              </div>
              
              <div 
                ref={cardsRef}
                className={`bg-gradient-to-r from-primary-500/10 to-accent-500/10 backdrop-blur-sm rounded-2xl p-8 border border-primary-500/20 transition-all duration-1000 ${
                  cardsRevealed ? 'ring-2 ring-primary-500/30 shadow-xl shadow-primary-500/20' : ''
                }`}
              >
                <p className="text-center text-xl font-semibold text-primary-400">
                  Na verdade, quando você automatiza as tarefas certas, sua equipe fica mais humana - porque pode focar no que realmente importa: resolver problemas complexos e criar relacionamentos.
                </p>
              </div>
            </div>
          </div>
          
          <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 transition-all duration-1000 ${
            cardsRevealed ? 'opacity-100 translate-y-0' : 'opacity-70 translate-y-4'
          }`}>
            <AboutCard 
              icon={<Award className="w-12 h-12 text-primary-400" />}
              title="Por Que Nossa IA é Diferente?"
              description="Ela realmente 'entende' seu cliente, analisa histórico, entende tom emocional e adapta respostas para a personalidade da sua marca."
              delay={0}
              revealed={cardsRevealed}
            />
            <AboutCard 
              icon={<Zap className="w-12 h-12 text-accent-400" />}
              title="Foco No Que Dá Dinheiro"
              description="Não automatizamos por automatizar. Focamos nos processos que liberam tempo da sua equipe, aceleram vendas e reduzem custos operacionais."
              delay={200}
              revealed={cardsRevealed}
            />
            <AboutCard 
              icon={<Shield className="w-12 h-12 text-primary-400" />}
              title="Fica Mais Inteligente Todo Dia"
              description="Quanto mais sua IA trabalha, mais ela aprende sobre seu negócio e melhora os resultados automaticamente."
              delay={400}
              revealed={cardsRevealed}
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

type AboutCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
  revealed: boolean;
};

const AboutCard: React.FC<AboutCardProps> = ({ icon, title, description, delay, revealed }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (revealed) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, delay);
      return () => clearTimeout(timer);
    }
  }, [revealed, delay]);

  return (
    <div className={`group relative tilt-card transition-all duration-700 ${
      isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-70 translate-y-8 scale-95'
    }`}>
      <div className={`absolute inset-0 bg-gradient-to-b from-primary-500/20 to-accent-500/20 rounded-2xl blur-xl transition-opacity duration-500 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      } group-hover:opacity-100`} />
      <div className={`relative glass-card rounded-2xl p-8 transition-all duration-300 ${
        isVisible 
          ? 'border-primary-500/30 shadow-lg shadow-primary-500/10' 
          : 'border-dark-700/50'
      } hover:border-primary-500/50 hover:shadow-xl hover:shadow-primary-500/20`}>
        <div className={`bg-gradient-to-br from-dark-800 to-dark-900 w-16 h-16 rounded-xl flex items-center justify-center mb-6 transition-all duration-300 ${
          isVisible ? 'scale-100 rotate-0' : 'scale-75 rotate-12'
        } group-hover:scale-110`}>
          {icon}
        </div>
        <h3 className="text-xl font-bold mb-3">{title}</h3>
        <p className="text-white/70">{description}</p>
        
        {/* Reveal indicator */}
        {isVisible && (
          <div className="absolute top-4 right-4 w-3 h-3 bg-primary-500 rounded-full animate-pulse" />
        )}
      </div>
    </div>
  );
};

export default About;