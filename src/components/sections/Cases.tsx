import React, { useEffect, useRef } from 'react';
import Container from '../ui/Container';
import GradientText from '../ui/GradientText';
import { TrendingUp, Target, Users, Building } from 'lucide-react';

const Cases: React.FC = () => {
  const casesRef = useRef<HTMLDivElement>(null);
  
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
    
    if (casesRef.current) {
      observer.observe(casesRef.current);
    }
    
    return () => {
      if (casesRef.current) {
        observer.unobserve(casesRef.current);
      }
    };
  }, []);

  return (
    <section id="cases" className="py-20 md:py-32 relative overflow-hidden">
      <Container>
        <div 
          ref={casesRef} 
          className="opacity-0 translate-y-10 transition-all duration-1000 ease-out"
        >
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary-500/10 to-accent-500/10 border border-primary-500/20 mb-8">
              <span className="text-sm font-medium bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
                Resultados Reais
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
              Cases de <GradientText>Sucesso</GradientText>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <CaseCard 
              icon={<TrendingUp className="w-8 h-8" />}
              category="E-commerce de Moda"
              title="De R$ 30k para R$ 280k/mês em 90 dias"
              challenge="Vendas estagnadas, CAC alto"
              solution="Funil com upsells e IA no WhatsApp"
              results={[
                "833% de crescimento",
                "ROAS 5.2x",
                "CAC reduzido em 60%"
              ]}
              gradient="from-pink-500 to-rose-500"
            />
            
            <CaseCard 
              icon={<Building className="w-8 h-8" />}
              category="SaaS B2B"
              title="0 para 127 demos agendadas/mês"
              challenge="Geração de leads qualificados"
              solution="Funil com webinar automatizado + LinkedIn"
              results={[
                "R$ 450k em pipeline",
                "23% close rate",
                "Custo por demo: R$ 89"
              ]}
              gradient="from-blue-500 to-cyan-500"
            />
            
            <CaseCard 
              icon={<Target className="w-8 h-8" />}
              category="Infoproduto"
              title="R$ 1.2M em lançamento de 7 dias"
              challenge="Primeiro lançamento digital"
              solution="Funil de lançamento perpétuo com vídeo de vendas"
              results={[
                "3.400 vendas",
                "Ticket médio R$ 353",
                "Taxa de conversão 4.2%"
              ]}
              gradient="from-green-500 to-emerald-500"
            />
            
            <CaseCard 
              icon={<Users className="w-8 h-8" />}
              category="Clínica Estética"
              title="400% mais agendamentos em 60 dias"
              challenge="Agenda vazia, concorrência forte"
              solution="Funil local com Google + chatbot qualificador"
              results={[
                "100% ocupação",
                "Lista de espera",
                "ROI 280%"
              ]}
              gradient="from-purple-500 to-violet-500"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

type CaseCardProps = {
  icon: React.ReactNode;
  category: string;
  title: string;
  challenge: string;
  solution: string;
  results: string[];
  gradient: string;
};

const CaseCard: React.FC<CaseCardProps> = ({ 
  icon, 
  category, 
  title, 
  challenge, 
  solution, 
  results, 
  gradient 
}) => {
  return (
    <div className="group relative">
      <div className="absolute inset-0 bg-gradient-to-b from-primary-500/20 to-accent-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="relative bg-dark-800/50 backdrop-blur-sm rounded-2xl p-8 border border-dark-700/50 hover:border-primary-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-primary-500/10">
        {/* Icon & Category */}
        <div className="flex items-center gap-4 mb-6">
          <div className={`bg-gradient-to-br ${gradient} w-12 h-12 rounded-xl flex items-center justify-center`}>
            <div className="text-white">
              {icon}
            </div>
          </div>
          <div>
            <p className="text-primary-400 font-semibold text-sm">{category}</p>
          </div>
        </div>
        
        {/* Title */}
        <h3 className="text-xl font-bold mb-6">{title}</h3>
        
        {/* Challenge & Solution */}
        <div className="space-y-4 mb-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Target className="w-4 h-4 text-red-400" />
              <span className="font-semibold text-red-300">Desafio:</span>
            </div>
            <p className="text-white/70 text-sm">{challenge}</p>
          </div>
          
          <div>
            <div className="flex items-center gap-2 mb-2">
              <TrendingUp className="w-4 h-4 text-blue-400" />
              <span className="font-semibold text-blue-300">Solução:</span>
            </div>
            <p className="text-white/70 text-sm">{solution}</p>
          </div>
        </div>
        
        {/* Results */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <TrendingUp className="w-4 h-4 text-green-400" />
            <span className="font-semibold text-green-300">Resultado:</span>
          </div>
          <div className="space-y-2">
            {results.map((result, index) => (
              <div key={index} className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
                <span className="text-white/70 text-sm">{result}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cases;