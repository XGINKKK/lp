import React, { useEffect, useRef } from 'react';
import Container from '../ui/Container';
import GradientText from '../ui/GradientText';
import { Search, FileText, Rocket, TrendingUp, ArrowRight } from 'lucide-react';

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
    <section id="metodologia" className="py-20 md:py-32 relative overflow-hidden">
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
              Nossa Metodologia <GradientText>SCALE</GradientText>
            </h2>
          </div>
          
          <div className="space-y-12">
            <MethodologyStep
              letter="S"
              title="Scan (Diagnóstico Profundo)"
              timeline="Semana 1: Entendemos seu negócio por completo"
              features={[
                "Auditoria completa do funil atual",
                "Análise de concorrência e mercado",
                "Mapeamento da jornada do cliente",
                "Identificação de bottlenecks e oportunidades"
              ]}
              icon={<Search className="w-8 h-8" />}
              color="from-blue-500 to-cyan-500"
            />
            
            <MethodologyStep
              letter="C"
              title="Create (Construção do Funil)"
              timeline="Semanas 2-3: Desenvolvemos sua máquina de vendas"
              features={[
                "Setup completo de tracking e pixels",
                "Criação de todas as páginas do funil",
                "Desenvolvimento de criativos e copy",
                "Configuração de automações e IA"
              ]}
              icon={<FileText className="w-8 h-8" />}
              color="from-green-500 to-emerald-500"
            />
            
            <MethodologyStep
              letter="A"
              title="Activate (Lançamento Estratégico)"
              timeline="Semana 4: Colocamos o funil para rodar"
              features={[
                "Lançamento de campanhas otimizadas",
                "Ativação de automações e chatbots",
                "Implementação de sequences de email",
                "Monitoramento 24/7 da performance"
              ]}
              icon={<Rocket className="w-8 h-8" />}
              color="from-purple-500 to-violet-500"
            />
            
            <MethodologyStep
              letter="L"
              title="Learn (Aprendizado com Dados)"
              timeline="Semanas 5-8: Coletamos insights valiosos"
              features={[
                "Análise de comportamento do usuário",
                "Identificação de padrões de conversão",
                "Testes A/B em todos os elementos",
                "Machine learning processando dados"
              ]}
              icon={<TrendingUp className="w-8 h-8" />}
              color="from-orange-500 to-red-500"
            />
            
            <MethodologyStep
              letter="E"
              title="Expand (Escala Exponencial)"
              timeline="Mês 3+: Multiplicamos seus resultados"
              features={[
                "Scaling horizontal (novos canais)",
                "Scaling vertical (mais investimento)",
                "Novos funis e ofertas",
                "Expansão internacional"
              ]}
              icon={<TrendingUp className="w-8 h-8" />}
              color="from-pink-500 to-rose-500"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

type MethodologyStepProps = {
  letter: string;
  title: string;
  timeline: string;
  features: string[];
  icon: React.ReactNode;
  color: string;
};

const MethodologyStep: React.FC<MethodologyStepProps> = ({ 
  letter, 
  title, 
  timeline, 
  features, 
  icon, 
  color 
}) => {
  return (
    <div className="group relative">
      <div className="absolute inset-0 bg-gradient-to-b from-primary-500/10 to-accent-500/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="relative bg-dark-800/50 backdrop-blur-sm rounded-2xl p-8 border border-dark-700/50 hover:border-primary-500/30 transition-all duration-300">
        <div className="flex items-start gap-6">
          {/* Letter Badge */}
          <div className={`flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-r ${color} flex items-center justify-center text-2xl font-bold`}>
            {letter}
          </div>
          
          {/* Icon */}
          <div className="flex-shrink-0 bg-gradient-to-br from-primary-500/20 to-accent-500/20 w-16 h-16 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            <div className="text-primary-400">
              {icon}
            </div>
          </div>
          
          {/* Content */}
          <div className="flex-1">
            <h3 className="text-xl md:text-2xl font-bold mb-2">{title}</h3>
            <p className="text-primary-400 font-semibold mb-4">{timeline}</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary-400" />
                  <span className="text-white/70 text-sm">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Methodology;