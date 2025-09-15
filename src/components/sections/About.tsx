import React, { useEffect, useRef } from 'react';
import Container from '../ui/Container';
import GradientText from '../ui/GradientText';
import { X, Check, AlertTriangle, Zap } from 'lucide-react';

const About: React.FC = () => {
  const aboutRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-10');
            
            // Stagger animation for child elements
            const children = entry.target.querySelectorAll('.stagger-item');
            children.forEach((child, index) => {
              setTimeout(() => {
                child.classList.add('opacity-100', 'translate-y-0');
                child.classList.remove('opacity-0', 'translate-y-5');
              }, index * 100);
            });
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
    <section id="sobre" className="py-20 md:py-32 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>
      
      <Container>
        <div 
          ref={aboutRef} 
          className="max-w-6xl mx-auto opacity-0 translate-y-10 transition-all duration-1000 ease-out"
        >
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8 stagger-item opacity-0 translate-y-5 transition-all duration-500">
              <span className="text-sm font-medium bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
                Como Funciona
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6 stagger-item opacity-0 translate-y-5 transition-all duration-500">
              Sistema de <GradientText>Vendas Automáticas</GradientText>
            </h2>
            <p className="text-xl text-white/80 max-w-4xl mx-auto mb-8 stagger-item opacity-0 translate-y-5 transition-all duration-500">
              Criamos <strong>sistemas completos de vendas</strong> que atraem, educam e convertem clientes automaticamente. Tudo funciona sozinho, 24 horas por dia.
            </p>
            <div className="glass-card rounded-2xl p-6 max-w-3xl mx-auto stagger-item opacity-0 translate-y-5 transition-all duration-500">
              <p className="text-lg font-semibold text-primary-300">
                Nossa missão: Criar sistemas que vendem sozinhos, transformando cada real investido em mais clientes e vendas previsíveis.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Problems */}
            <div className="stagger-item opacity-0 translate-y-5 transition-all duration-500">
              <h3 className="text-2xl md:text-3xl font-bold mb-8 text-red-400">
                Por Que Seus Concorrentes Não Vendem Online?
              </h3>
              <div className="space-y-6">
                <ProblemItem 
                  icon={<X className="w-6 h-6 text-red-400" />}
                  title="Sistema Quebrado"
                  description="Visitantes que não viram clientes, vendas esporádicas"
                />
                <ProblemItem 
                  icon={<X className="w-6 h-6 text-red-400" />}
                  title="Dinheiro Desperdiçado"
                  description="Anúncios que não geram vendas, só gastam verba"
                />
                <ProblemItem 
                  icon={<X className="w-6 h-6 text-red-400" />}
                  title="Processo Manual"
                  description="Time perdendo tempo com tarefas que poderiam ser automáticas"
                />
                <ProblemItem 
                  icon={<X className="w-6 h-6 text-red-400" />}
                  title="Vendas Imprevisíveis"
                  description="Nunca sabem quando vai entrar a próxima venda"
                />
              </div>
            </div>

            {/* Solutions */}
            <div className="stagger-item opacity-0 translate-y-5 transition-all duration-500">
              <h3 className="text-2xl md:text-3xl font-bold mb-8">
                A Solução: Seu <GradientText>Sistema de Vendas Automático</GradientText>
              </h3>
              <div className="space-y-6">
                <SolutionItem 
                  icon={<Check className="w-6 h-6 text-green-400" />}
                  title="Clientes Certos"
                  description="Atraímos apenas pessoas prontas para comprar"
                />
                <SolutionItem 
                  icon={<Check className="w-6 h-6 text-green-400" />}
                  title="Conteúdo que Vende"
                  description="Textos e vídeos que convencem e geram vendas"
                />
                <SolutionItem 
                  icon={<Check className="w-6 h-6 text-green-400" />}
                  title="IA Vendendo 24h"
                  description="Robôs que atendem, qualificam e vendem sozinhos"
                />
                <SolutionItem 
                  icon={<Check className="w-6 h-6 text-green-400" />}
                  title="Resultados Claros"
                  description="Painel mostrando cada real investido e o retorno"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

type ProblemItemProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

const ProblemItem: React.FC<ProblemItemProps> = ({ icon, title, description }) => {
  return (
    <div className="flex items-start gap-4 p-4 rounded-xl bg-red-500/5 border border-red-500/20 hover:bg-red-500/10 transition-all duration-300 transform hover:scale-105">
      <div className="flex-shrink-0 mt-1">
        {icon}
      </div>
      <div>
        <h4 className="font-semibold mb-1 text-red-300">{title}</h4>
        <p className="text-white/70 text-sm">{description}</p>
      </div>
    </div>
  );
};

type SolutionItemProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

const SolutionItem: React.FC<SolutionItemProps> = ({ icon, title, description }) => {
  return (
    <div className="flex items-start gap-4 p-4 rounded-xl bg-green-500/5 border border-green-500/20 hover:bg-green-500/10 transition-all duration-300 transform hover:scale-105">
      <div className="flex-shrink-0 mt-1">
        {icon}
      </div>
      <div>
        <h4 className="font-semibold mb-1 text-green-300">{title}</h4>
        <p className="text-white/70 text-sm">{description}</p>
      </div>
    </div>
  );
};

export default About;