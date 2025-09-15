import React, { useEffect, useRef } from 'react';
import Container from '../ui/Container';
import GradientText from '../ui/GradientText';
import { Bot, Target, PenTool, Zap, Brain, TrendingUp } from 'lucide-react';

const Team: React.FC = () => {
  const teamRef = useRef<HTMLDivElement>(null);
  
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
    
    if (teamRef.current) {
      observer.observe(teamRef.current);
    }
    
    return () => {
      if (teamRef.current) {
        observer.unobserve(teamRef.current);
      }
    };
  }, []);

  return (
    <section className="py-20 md:py-32 relative">
      <Container>
        <div 
          ref={teamRef} 
          className="opacity-0 translate-y-10 transition-all duration-1000 ease-out"
        >
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary-500/10 to-accent-500/10 border border-primary-500/20 mb-8">
              <span className="text-sm font-medium bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
                Nossa Equipe
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
              Nossa Equipe de <GradientText>Especialistas</GradientText>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TeamMember 
              name="Eduardo Manoel"
              role="Arquiteto de Automações & IA"
              description="Constrói sistemas inteligentes que vendem sozinhos e cria páginas que convertem visitantes em clientes."
              superpowers={[
                "Automações complexas com ferramentas avançadas",
                "Chatbots com IA que vendem como humanos",
                "Páginas de vendas que convertem automaticamente",
                "Estrutura digital completa para seu negócio"
              ]}
              icon={<Bot className="w-8 h-8" />}
              gradient="from-blue-500 to-purple-500"
            />
            
            <TeamMember 
              name="Pedro de Souza Graciosa"
              role="Estrategista de Tráfego de Alta Performance"
              description="Transforma cliques em clientes com campanhas cirúrgicas e segmentação laser-focused."
              superpowers={[
                "Funis de conversão com 300%+ retorno sobre investimento",
                "Campanhas integradas em múltiplos canais",
                "Rastreamento avançado e análise de resultados",
                "Escalar campanhas sem perder eficiência"
              ]}
              icon={<Target className="w-8 h-8" />}
              gradient="from-green-500 to-blue-500"
            />
            
            <TeamMember 
              name="Marcus Lemes"
              role="Especialista em Persuasão e Captação de Conteúdo"
              description="Cria narrativas irresistíveis e produz conteúdo presencial profissional que converte."
              superpowers={[
                "Vídeos de vendas que convertem automaticamente",
                "Captação presencial de depoimentos e provas sociais",
                "Copy que gera urgência e desejo de compra",
                "Produção de materiais estratégicos profissionais"
              ]}
              icon={<PenTool className="w-8 h-8" />}
              gradient="from-purple-500 to-pink-500"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

type TeamMemberProps = {
  name: string;
  role: string;
  description: string;
  superpowers: string[];
  icon: React.ReactNode;
  gradient: string;
};

const TeamMember: React.FC<TeamMemberProps> = ({ 
  name, 
  role, 
  description, 
  superpowers, 
  icon, 
  gradient 
}) => {
  return (
    <div className="group relative tilt-card">
      <div className="absolute inset-0 bg-gradient-to-b from-primary-500/30 to-accent-500/30 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="relative glass-card rounded-2xl p-8">
        {/* Icon */}
        <div className={`bg-gradient-to-br ${gradient} w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 floating`}>
          <div className="text-white">
            {icon}
          </div>
        </div>
        
        {/* Content */}
        <h3 className="text-xl font-bold mb-2">{name}</h3>
        <h4 className="text-primary-400 font-semibold mb-4">{role}</h4>
        <p className="text-white/70 mb-6">{description}</p>
        
        {/* Superpowers */}
        <div className="space-y-3">
          <h5 className="font-semibold text-accent-400 text-sm">Superpoderes:</h5>
          <ul className="space-y-2">
            {superpowers.map((power, index) => (
              <li key={index} className="flex items-start gap-2 text-sm text-white/60 hover:text-white/80 transition-colors duration-300">
                <Zap className="w-3 h-3 text-primary-400 mt-1 flex-shrink-0 group-hover:animate-pulse" />
                {power}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Team;