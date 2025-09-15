import React, { useEffect, useRef } from 'react';
import Container from '../ui/Container';
import GradientText from '../ui/GradientText';
import { Check, X, AlertTriangle, Shield, Zap, Target } from 'lucide-react';

const Comparison: React.FC = () => {
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

  const comparisonData = [
    {
      criteria: "Funil Completo End-to-End",
      freelancers: false,
      others: "partial",
      beConnected: true
    },
    {
      criteria: "Integração com IA Avançada",
      freelancers: false,
      others: false,
      beConnected: true
    },
    {
      criteria: "Tráfego + Conteúdo + Automação",
      freelancers: false,
      others: "partial",
      beConnected: true
    },
    {
      criteria: "Dashboard em Tempo Real",
      freelancers: false,
      others: "partial",
      beConnected: true
    },
    {
      criteria: "Garantia de Resultados",
      freelancers: false,
      others: false,
      beConnected: true
    },
    {
      criteria: "Suporte 24/7 com IA",
      freelancers: false,
      others: false,
      beConnected: true
    },
    {
      criteria: "Previsibilidade de Vendas",
      freelancers: false,
      others: "partial",
      beConnected: true
    },
    {
      criteria: "ROI Transparente",
      freelancers: "partial",
      others: "partial",
      beConnected: true
    }
  ];

  const StatusIcon = ({ status }: { status: boolean | "partial" }) => {
    if (status === true) {
      return <Check className="w-6 h-6 text-green-400" />;
    }
    if (status === false) {
      return <X className="w-6 h-6 text-red-400" />;
    }
    return <AlertTriangle className="w-6 h-6 text-yellow-400" />;
  };

  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      <Container>
        <div 
          ref={sectionRef} 
          className="opacity-0 translate-y-10 transition-all duration-1000 ease-out"
        >
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary-500/10 to-accent-500/10 border border-primary-500/20 mb-8">
              <span className="text-sm font-medium bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
                Comparativo
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
              Por que escolher <GradientText>Be Connected</GradientText>?
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto mb-12">
              Compare nossa solução completa com alternativas do mercado e entenda por que somos a escolha ideal para transformar seu negócio.
            </p>
          </div>

          {/* Comparison Table */}
          <div className="relative mb-16">
            <div className="absolute inset-0 bg-gradient-to-b from-primary-500/10 to-accent-500/10 rounded-2xl blur-xl opacity-50" />
            <div className="relative overflow-x-auto">
              <div className="min-w-[768px]">
                <div className="bg-dark-800/50 backdrop-blur-sm rounded-2xl border border-dark-700/50">
                  {/* Table Header */}
                  <div className="grid grid-cols-4 border-b border-dark-700/50">
                    <div className="p-6 font-semibold text-lg">
                      Critério
                    </div>
                    <div className="p-6 text-center font-semibold text-lg">
                      Freelancers
                    </div>
                    <div className="p-6 text-center font-semibold text-lg">
                      Outras Soluções
                    </div>
                    <div className="p-6 text-center font-semibold text-lg">
                      <GradientText>Be Connected</GradientText>
                    </div>
                  </div>

                  {/* Table Body */}
                  {comparisonData.map((row, index) => (
                    <div 
                      key={index}
                      className="grid grid-cols-4 border-b border-dark-700/50 last:border-0 group hover:bg-dark-800/30 transition-colors"
                    >
                      <div className="p-6 flex items-center">
                        {row.criteria}
                      </div>
                      <div className="p-6 flex items-center justify-center">
                        <StatusIcon status={row.freelancers} />
                      </div>
                      <div className="p-6 flex items-center justify-center">
                        <StatusIcon status={row.others} />
                      </div>
                      <div className="p-6 flex items-center justify-center">
                        <StatusIcon status={row.beConnected} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Exclusive Advantages */}
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-8">
              🚀 <GradientText>Vantagens Exclusivas</GradientText>
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AdvantageCard 
              icon={<Zap className="w-8 h-8" />}
              title="Tecnologia Proprietária"
              description="Sistema exclusivo de otimização com IA que melhora conversões automaticamente"
            />
            <AdvantageCard 
              icon={<Shield className="w-8 h-8" />}
              title="Garantia de ROI"
              description="Se não gerar lucro em 90 dias, devolvemos seu investimento"
            />
            <AdvantageCard 
              icon={<Target className="w-8 h-8" />}
              title="Escala Sem Limites"
              description="Infraestrutura pronta para processar milhares de leads simultâneos"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

type AdvantageCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

const AdvantageCard: React.FC<AdvantageCardProps> = ({ icon, title, description }) => {
  return (
    <div className="group relative">
      <div className="absolute inset-0 bg-gradient-to-b from-primary-500/20 to-accent-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="relative bg-dark-800/50 backdrop-blur-sm rounded-2xl p-8 border border-dark-700/50 hover:border-primary-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-primary-500/10">
        <div className="bg-gradient-to-br from-primary-500/20 to-accent-500/20 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
          <div className="text-primary-400">
            {icon}
          </div>
        </div>
        <h3 className="text-xl font-bold mb-3">{title}</h3>
        <p className="text-white/70">{description}</p>
      </div>
    </div>
  );
};

export default Comparison;