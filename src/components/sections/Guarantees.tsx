import React, { useEffect, useRef } from 'react';
import Container from '../ui/Container';
import GradientText from '../ui/GradientText';
import { Shield, CheckCircle, Clock } from 'lucide-react';

const Guarantees: React.FC = () => {
  const guaranteesRef = useRef<HTMLDivElement>(null);
  
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
    
    if (guaranteesRef.current) {
      observer.observe(guaranteesRef.current);
    }
    
    return () => {
      if (guaranteesRef.current) {
        observer.unobserve(guaranteesRef.current);
      }
    };
  }, []);

  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      <Container>
        <div 
          ref={guaranteesRef} 
          className="opacity-0 translate-y-10 transition-all duration-1000 ease-out"
        >
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary-500/10 to-accent-500/10 border border-primary-500/20 mb-8">
              <span className="text-sm font-medium bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
                Garantias
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
              Garantias <GradientText>Be Connected</GradientText>
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              🛡️ Garantia Tripla de Sucesso
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <GuaranteeCard 
              number="1"
              icon={<CheckCircle className="w-8 h-8" />}
              title="Garantia de Implementação"
              description="Seu funil completo funcionando em 30 dias ou trabalhamos de graça até entregar"
              gradient="from-green-500 to-emerald-500"
            />
            
            <GuaranteeCard 
              number="2"
              icon={<Shield className="w-8 h-8" />}
              title="Garantia de Resultados"
              description="ROI positivo em 90 dias ou devolvemos 100% do investimento"
              gradient="from-blue-500 to-cyan-500"
            />
            
            <GuaranteeCard 
              number="3"
              icon={<Clock className="w-8 h-8" />}
              title="Garantia de Suporte"
              description="Resposta em até 2 horas durante horário comercial, 24h nos finais de semana"
              gradient="from-purple-500 to-violet-500"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

type GuaranteeCardProps = {
  number: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  gradient: string;
};

const GuaranteeCard: React.FC<GuaranteeCardProps> = ({ 
  number, 
  icon, 
  title, 
  description, 
  gradient 
}) => {
  return (
    <div className="group relative">
      <div className="absolute inset-0 bg-gradient-to-b from-primary-500/20 to-accent-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="relative bg-dark-800/50 backdrop-blur-sm rounded-2xl p-8 border border-dark-700/50 hover:border-primary-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-primary-500/10">
        {/* Number Badge */}
        <div className="absolute -top-4 -right-4 w-8 h-8 rounded-full bg-gradient-to-r from-primary-500 to-accent-500 flex items-center justify-center text-sm font-bold">
          {number}
        </div>
        
        {/* Icon */}
        <div className={`bg-gradient-to-br ${gradient} w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
          <div className="text-white">
            {icon}
          </div>
        </div>
        
        {/* Content */}
        <h3 className="text-xl font-bold mb-4">{title}</h3>
        <p className="text-white/70">{description}</p>
      </div>
    </div>
  );
};

export default Guarantees;