import React, { useEffect, useRef } from 'react';
import Container from '../ui/Container';
import GradientText from '../ui/GradientText';
import { Search, FileText, Cpu, RefreshCw, ArrowRight, Target, Lightbulb, Rocket, Gauge } from 'lucide-react';

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
            <div className="max-w-5xl mx-auto">
              {/* Steps grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
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
    <div className="group relative card-uniform h-full">
      <div className="absolute inset-0 bg-gradient-to-b from-primary-500/20 to-accent-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="relative bg-dark-800/50 backdrop-blur-sm rounded-2xl border border-dark-700/50 hover:border-primary-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-primary-500/10 h-full">
        {/* Step number */}
        <div className="absolute -top-2 -right-2 md:-top-3 md:-right-3 lg:-top-4 lg:-right-4 w-5 h-5 md:w-6 md:h-6 lg:w-8 lg:h-8 rounded-full bg-gradient-to-r from-primary-500 to-accent-500 flex items-center justify-center text-xs font-bold">
          {number}
        </div>
        
        <div className="mobile-card-content mobile-padding p-5 md:p-6 lg:p-8 h-full">
          {/* Icon */}
          <div className="mobile-card-header mb-4 md:mb-6">
            <div className="bg-gradient-to-br from-primary-500/20 to-accent-500/20 w-10 h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <div className="text-primary-400 group-hover:text-accent-400 transition-colors mobile-icon-size">
                {icon}
              </div>
            </div>
          </div>
          
          {/* Content */}
          <div className="mobile-card-body flex-1 mb-4 md:mb-6">
            <h3 className="font-bold mb-3 mobile-text-base text-base md:text-lg lg:text-xl leading-tight">{title}</h3>
            <p className="text-white/70 mobile-text-sm text-sm md:text-base leading-relaxed">{description}</p>
          </div>
          
          {/* Features */}
          <div className="mobile-card-footer">
            <ul className="space-y-2">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center gap-2 mobile-text-sm text-xs md:text-sm text-white/60">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary-400 flex-shrink-0" />
                  <span className="leading-relaxed">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Methodology;