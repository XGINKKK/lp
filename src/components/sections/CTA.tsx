import React, { useEffect, useRef } from 'react';
import Container from '../ui/Container';
import GradientText from '../ui/GradientText';
import { Target, Lightbulb, Rocket, Gauge } from 'lucide-react';

const CTA: React.FC = () => {
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
    <section id="apply" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-black -z-10" />
      <div className="absolute top-1/2 left-1/4 w-1/2 h-1/2 bg-primary-500/20 rounded-full blur-[96px] -z-10" />
      <div className="absolute bottom-0 right-1/4 w-1/2 h-1/2 bg-accent-500/20 rounded-full blur-[96px] -z-10" />
      
      <Container>
        <div 
          ref={sectionRef} 
          className="opacity-0 translate-y-10 transition-all duration-1000 ease-out"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary-500/10 to-accent-500/10 border border-primary-500/20 mb-8">
                <span className="text-sm font-medium bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
                  Comece Agora
                </span>
              </div>

              <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-display font-bold mb-6">
                Comece Sua <GradientText>Transformação Hoje</GradientText>
              </h2>
              <p className="text-lg md:text-xl text-white/80 mb-8">
                A automação não é um gasto. É o melhor investimento que você pode fazer no seu negócio.
              </p>
              
              <div className="responsive-grid mb-10">
                <BenefitCard
                  icon={<Target className="w-6 h-6" />}
                  title="🎯 Diagnóstico Gratuito (Vale R$ 2.500)"
                  description="Análise completa do seu negócio, identificamos onde automatizar primeiro"
                />
                <BenefitCard
                  icon={<Lightbulb className="w-6 h-6" />}
                  title="📞 Consultoria de 30 Minutos"
                  description="Falamos sobre suas dores específicas e mostramos casos similares"
                />
                <BenefitCard
                  icon={<Rocket className="w-6 h-6" />}
                  title="🚀 Implementação Express"
                  description="Primeira automação funcionando em 10 dias com suporte total"
                />
                <BenefitCard
                  icon={<Gauge className="w-6 h-6" />}
                  title="⚠️ Última Chance"
                  description="Apenas 5 empresas por mês. 3 vagas restantes para este mês."
                />
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-b from-primary-500/20 to-accent-500/20 rounded-2xl blur-xl opacity-75" />
              <div className="relative bg-dark-800/50 backdrop-blur-sm rounded-2xl border border-dark-700/50 hover:border-primary-500/30 transition-all duration-500 hover:shadow-xl hover:shadow-primary-500/10">
                <iframe
                  src="https://typebot.co/ag-ncia-aplica-es-automatik-labs-1-f1h19py"
                  style={{ border: 'none', width: '100%', height: '450px' }}
                  className="sm:h-[500px] md:h-[550px] lg:h-[600px] rounded-2xl"
                  title="Typebot - EduAi"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

type BenefitCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

const BenefitCard: React.FC<BenefitCardProps> = ({ icon, title, description }) => {
  return (
    <div className="group rounded-xl hover:bg-dark-800/50 transition-colors duration-300 card-uniform h-full">
      <div className="mobile-card-content mobile-padding p-3 md:p-4 h-full">
        <div className="mobile-card-header flex items-start gap-3 md:gap-4 mb-3">
          <div className="bg-gradient-to-br from-primary-500/20 to-accent-500/20 p-2 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
            <div className="text-primary-400 group-hover:text-accent-400 transition-colors mobile-icon-size">
              {icon}
            </div>
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold mb-1 mobile-text-sm text-sm md:text-base leading-tight">{title}</h3>
          </div>
        </div>
        <div className="mobile-card-body">
          <p className="text-white/70 mobile-text-sm text-xs md:text-sm leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default CTA;