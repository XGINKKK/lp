import React, { useEffect, useRef } from 'react';
import Container from '../ui/Container';
import GradientText from '../ui/GradientText';
import { Target, Lightbulb, Rocket, Gauge, ArrowRight } from 'lucide-react';

const Methodology: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
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
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="methodology" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-black -z-10" />
      <div className="absolute top-1/2 left-1/4 w-1/2 h-1/2 bg-primary-500/20 rounded-full blur-[96px] -z-10" />
      <div className="absolute bottom-0 right-1/4 w-1/2 h-1/2 bg-accent-500/20 rounded-full blur-[96px] -z-10" />
      
      <Container>
        <div 
          ref={sectionRef} 
          className="opacity-0 translate-y-10 transition-all duration-1000 ease-out"
        >
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary-500/10 to-accent-500/10 border border-primary-500/20 mb-8">
              <span className="text-sm font-medium bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
                Nossa Metodologia
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
              Como Funciona Nossa <GradientText>Parceria</GradientText>
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Do diagnóstico à implementação: como transformamos seu negócio em apenas 10 dias.
            </p>
          </div>
          
          <div className="mt-16 relative">
            <div className="max-w-7xl mx-auto">
              {/* Methodology Cards Grid */}
              <div className="mobile-responsive-grid">
                <MethodologyStep
                  number="01"
                  icon={<Target className="w-8 h-8" />}
                  title="Dias 1-3: Raio-X do Seu Negócio"
                  description="Onde você está perdendo dinheiro sem saber?"
                  features={[
                    "Mapeamento de processos",
                    "Identificamos o que pode ser automatizado",
                    "Calculamos quanto você vai economizar"
                  ]}
                />
                
                <MethodologyStep
                  number="02"
                  icon={<Lightbulb className="w-8 h-8" />}
                  title="Dias 4-7: Construção da Sua IA"
                  description="Criamos sua assistente virtual personalizada"
                  features={[
                    "Desenvolvemos os agentes de IA",
                    "Treinamos com dados do seu negócio",
                    "Integramos com seus sistemas atuais"
                  ]}
                />
                
                <MethodologyStep
                  number="03"
                  icon={<Rocket className="w-8 h-8" />}
                  title="Dias 8-10: Colocando Para Funcionar"
                  description="Hora de ver o dinheiro entrando"
                  features={[
                    "Testamos tudo em ambiente controlado",
                    "Treinamos sua equipe",
                    "Liberamos para produção"
                  ]}
                />
                
                <MethodologyStep
                  number="04"
                  icon={<Gauge className="w-8 h-8" />}
                  title="Sempre: Cuidamos da Evolução"
                  description="Sua IA fica mais inteligente todo dia"
                  features={[
                    "Monitoramento 24/7",
                    "Ajustes baseados em dados",
                    "Adicionamos novas funcionalidades"
                  ]}
                />
              </div>
            </div>
            
            <div className="text-center mt-16">
              <a 
                href="#apply" 
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-dark-800/50 border border-dark-700/50 hover:border-primary-500/30 transition-all duration-300"
              >
                <span className="text-white/90 group-hover:text-white transition-colors">
                  Conheça mais sobre nossa metodologia
                </span>
                <ArrowRight className="w-4 h-4 text-primary-400 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

type MethodologyStepProps = {
  number: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
};

const MethodologyStep: React.FC<MethodologyStepProps> = ({ number, icon, title, description, features }) => {
  return (
    <div className="group methodology-mobile-card mobile-card" data-number={number}>
      {/* Número circular rosa */}
      <div className="mobile-card-header">
        <div className="mobile-card-icon">
      </div>
      
        <div className="mobile-card-content">
          <h3 className="mobile-card-title">{title}</h3>
        {icon}
      </div>
      
      <div className="mobile-card-body">
        <p className="mobile-card-description">{description}</p>
        <h3 className="methodology-title">{title}</h3>
        <p className="methodology-description">{description}</p>
      <div className="mobile-card-footer">
        <ul className="mobile-card-features">
          {features.map((feature, index) => (
            <li key={index} className="methodology-feature">
            <li key={index} className="mobile-card-feature">
              {feature}
            </li>
          ))}
        </ul>
      </div>
    )
    )
    }
    </div>
  );
};

export default Methodology;
  )
}