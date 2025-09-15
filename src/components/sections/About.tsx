import React, { useEffect, useRef } from 'react';
import Container from '../ui/Container';
import GradientText from '../ui/GradientText';
import { Award, Shield, Zap } from 'lucide-react';

const About: React.FC = () => {
  const aboutRef = useRef<HTMLDivElement>(null);
  
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
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  <div className="text-center p-4 bg-red-500/10 rounded-lg border border-red-500/20">
                    <p className="text-red-400 font-semibold">Muito complicado</p>
                  </div>
                  <div className="text-center p-4 bg-red-500/10 rounded-lg border border-red-500/20">
                    <p className="text-red-400 font-semibold">Muito caro</p>
                  </div>
                  <div className="text-center p-4 bg-red-500/10 rounded-lg border border-red-500/20">
                    <p className="text-red-400 font-semibold">Só para grandes</p>
                  </div>
                  <div className="text-center p-4 bg-red-500/10 rounded-lg border border-red-500/20">
                    <p className="text-red-400 font-semibold">Desumaniza</p>
                  </div>
                </div>
                <div className="text-center">
                  <div className="group relative inline-block mb-6 cursor-pointer">
                    {/* Glow effect background */}
                    <div className="absolute inset-0 bg-gradient-to-r from-primary-500/40 to-accent-500/40 rounded-2xl blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Main button */}
                    <div className="relative bg-gradient-to-r from-primary-500 via-neon-pink to-accent-500 text-white font-bold text-3xl px-10 py-5 rounded-2xl transform rotate-[-2deg] group-hover:rotate-[-1deg] transition-all duration-300 shadow-2xl shadow-primary-500/25 group-hover:shadow-primary-500/50 border border-primary-400/30 group-hover:border-primary-300/50">
                      {/* Inner glow */}
                      <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      
                      {/* Text with subtle animation */}
                      <span className="relative z-10 group-hover:scale-105 transition-transform duration-200 inline-block">
                    MENTIRA!
                      </span>
                      
                      {/* Shine effect */}
                      <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-2xl" />
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-primary-500/10 to-accent-500/10 backdrop-blur-sm rounded-2xl p-8 border border-primary-500/20">
                <p className="text-center text-xl font-semibold text-primary-400">
                  Na verdade, quando você automatiza as tarefas certas, sua equipe fica mais humana - porque pode focar no que realmente importa: resolver problemas complexos e criar relacionamentos.
                </p>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AboutCard 
              icon={<Award className="w-12 h-12 text-primary-400" />}
              title="Por Que Nossa IA é Diferente?"
              description="Ela realmente 'entende' seu cliente, analisa histórico, entende tom emocional e adapta respostas para a personalidade da sua marca."
            />
            <AboutCard 
              icon={<Zap className="w-12 h-12 text-accent-400" />}
              title="Foco No Que Dá Dinheiro"
              description="Não automatizamos por automatizar. Focamos nos processos que liberam tempo da sua equipe, aceleram vendas e reduzem custos operacionais."
            />
            <AboutCard 
              icon={<Shield className="w-12 h-12 text-primary-400" />}
              title="Fica Mais Inteligente Todo Dia"
              description="Quanto mais sua IA trabalha, mais ela aprende sobre seu negócio e melhora os resultados automaticamente."
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
};

const AboutCard: React.FC<AboutCardProps> = ({ icon, title, description }) => {
  return (
    <div className="group relative tilt-card">
      <div className="absolute inset-0 bg-gradient-to-b from-primary-500/20 to-accent-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="relative glass-card rounded-2xl p-8 hover:border-primary-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/10">
        <div className="bg-gradient-to-br from-dark-800 to-dark-900 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
        <h3 className="text-xl font-bold mb-3">{title}</h3>
        <p className="text-white/70">{description}</p>
      </div>
    </div>
  );
};

export default About;