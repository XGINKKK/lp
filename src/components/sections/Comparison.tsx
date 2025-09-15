import React, { useEffect, useRef, useState } from 'react';
import Container from '../ui/Container';
import GradientText from '../ui/GradientText';
import { Check, X, HelpCircle, ChevronDown } from 'lucide-react';
import { Tooltip } from '../ui/Tooltip';

type Status = boolean | 'sometimes';

type ComparisonRow = {
  feature: string;
  tools: Status;
  freelancers: Status;
  eduAi: Status;
};

const Comparison: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [expandedCard, setExpandedCard] = useState<number | null>(null);
  
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

  const comparisonData: ComparisonRow[] = [
    {
      feature: "Faz o que você pede vs Entende o que você precisa",
      tools: false,
      freelancers: false,
      eduAi: true
    },
    {
      feature: "Entrega e vai embora vs Fica do seu lado sempre",
      tools: false,
      freelancers: false,
      eduAi: true
    },
    {
      feature: "Só sabe usar ferramentas básicas vs Cria soluções sob medida",
      tools: false,
      freelancers: false,
      eduAi: true
    },
    {
      feature: "Você tem que explicar tudo vs A gente entende de negócio",
      tools: false,
      freelancers: false,
      eduAi: true
    },
    {
      feature: "Se der problema, boa sorte vs Suporte dedicado e garantia",
      tools: false,
      freelancers: false,
      eduAi: true
    }
  ];

  const StatusIcon = ({ status }: { status: Status }) => {
    if (status === true) {
      return (
        <div className="flex items-center justify-center w-6 h-6">
          <Check className="w-6 h-6 text-[#63D471] group-hover:animate-pulse" />
        </div>
      );
    }
    if (status === false) {
      return (
        <div className="flex items-center justify-center w-6 h-6">
          <X className="w-6 h-6 text-[#E74C3C]" />
        </div>
      );
    }
    return (
      <div className="flex items-center justify-center w-6 h-6">
        <Tooltip content="Depende da experiência e disponibilidade do profissional">
          <HelpCircle className="w-6 h-6 text-[#F5C244] cursor-help" />
        </Tooltip>
      </div>
    );
  };

  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
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
                Comparativo
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
              Por Que Escolher EduAi e Não <GradientText>Qualquer Freelancer?</GradientText>
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Veja a diferença entre contratar um freelancer comum e ter a EduAi como parceira do seu negócio.
            </p>
          </div>

          {/* Desktop Table (hidden on mobile) */}
          <div className="relative hidden md:block">
            <div className="absolute inset-0 bg-gradient-to-b from-primary-500/20 to-accent-500/20 rounded-2xl blur-xl opacity-75" />
            <div className="relative overflow-x-auto">
              <div className="min-w-[768px]">
                <div className="bg-dark-800/50 backdrop-blur-sm rounded-2xl border border-dark-700/50">
                  {/* Table Header */}
                  <div className="grid grid-cols-4 border-b border-dark-700/50">
                    <div className="p-6 font-semibold text-lg">
                      Comparativo
                    </div>
                    <div className="p-6 text-center font-semibold text-lg">
                      Freelancer Comum
                    </div>
                    <div className="p-6 text-center font-semibold text-lg">
                      EduAi
                    </div>
                    <div className="p-6 text-center font-semibold text-lg">
                      Resultado
                    </div>
                  </div>

                  {/* Table Body */}
                  {comparisonData.map((row, index) => (
                    <div 
                      key={index}
                      className="grid grid-cols-4 border-b border-dark-700/50 last:border-0 group hover:bg-dark-800/30 transition-colors"
                    >
                      <div className="p-6 flex items-center">
                        {row.feature}
                      </div>
                      <div className="p-6 flex items-center justify-center">
                        <StatusIcon status={row.tools} />
                      </div>
                      <div className="p-6 flex items-center justify-center">
                        <StatusIcon status={row.freelancers} />
                      </div>
                      <div className="p-6 flex items-center justify-center">
                        <StatusIcon status={row.eduAi} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Cards (visible only on mobile) */}
          <div className="md:hidden space-y-4">
            {comparisonData.map((row, index) => (
              <div
                key={index}
                className="bg-dark-800/50 backdrop-blur-sm rounded-xl border border-dark-700/50 overflow-hidden"
              >
                <button
                  className="w-full p-4 flex items-center justify-between text-left"
                  onClick={() => setExpandedCard(expandedCard === index ? null : index)}
                >
                  <span className="flex-1 pr-4">{row.feature}</span>
                  <ChevronDown
                    className={`w-5 h-5 transform transition-transform ${
                      expandedCard === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                
                {expandedCard === index && (
                  <div className="px-4 pb-4 space-y-3 border-t border-dark-700/50 pt-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-white/70">Ferramentas Avulsas:</span>
                      <StatusIcon status={row.tools} />
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-white/70">Freelancers:</span>
                      <StatusIcon status={row.freelancers} />
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-white/70">EduAi:</span>
                      <StatusIcon status={row.eduAi} />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Comparison;