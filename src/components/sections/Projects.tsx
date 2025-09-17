import React, { useEffect, useRef } from 'react';
import Container from '../ui/Container';
import GradientText from '../ui/GradientText';
import { ArrowRight, Users, BarChart3, Bot, Megaphone } from 'lucide-react';

const Projects: React.FC = () => {
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
    <section id="projects" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-black -z-10" />
      <Container>
        <div 
          ref={sectionRef} 
          className="opacity-0 translate-y-10 transition-all duration-1000 ease-out"
        >
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary-500/10 to-accent-500/10 border border-primary-500/20 mb-8">
              <span className="text-sm font-medium bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
                Nossos Projetos
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
              Projetos <GradientText>EduAi</GradientText>
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Nossos projetos inovadores que transformam negócios.
            </p>
          </div>
          
          <div className="mt-16 relative">
            <div className="max-w-5xl mx-auto">
              {/* Projects grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                <ProjectStep
                  icon={<Users className="w-10 h-10" />}
                  title="Super Time de Agentes"
                  description="Um time colaborativo de agentes de IA para atender suas demandas."
                  features={[
                    "Coordenação inteligente entre agentes",
                    "Especialização por área de atuação",
                    "Tomada de decisão colaborativa"
                  ]}
                />
                
                <ProjectStep
                  icon={<BarChart3 className="w-10 h-10" />}
                  title="Super Analista de Marketing"
                  description="Análise de mercado e tendências utilizando IA para otimização."
                  features={[
                    "Análise preditiva de performance",
                    "Otimização automática de campanhas",
                    "Insights acionáveis em tempo real"
                  ]}
                />
                
                <ProjectStep
                  icon={<Bot className="w-10 h-10" />}
                  title="Super Robô Assistente"
                  description="Um assistente pessoal baseado em IA para facilitar sua rotina."
                  features={[
                    "Automação de tarefas complexas",
                    "Atendimento humanizado 24/7",
                    "Integração com múltiplos sistemas"
                  ]}
                />
                
                <ProjectStep
                  icon={<Megaphone className="w-10 h-10" />}
                  title="Agente de Marketing"
                  description="Definição e execução de campanhas de marketing inteligentes."
                  features={[
                    "Criação de conteúdo personalizado",
                    "Gestão automática de campanhas",
                    "Análise de audiência e segmentação"
                  ]}
                />
              </div>
            </div>
            
            <div className="text-center mt-16">
              <a 
                href="#learn-more" 
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-dark-800/50 border border-dark-700/50 hover:border-primary-500/30 transition-all duration-300"
              >
                <span className="text-white/90 group-hover:text-white transition-colors">
                  Conheça mais sobre nossos projetos
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

type ProjectStepProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
};

const ProjectStep: React.FC<ProjectStepProps> = ({ icon, title, description, features }) => {
  return (
    <div className="group relative">
      <div className="absolute inset-0 bg-gradient-to-b from-primary-500/20 to-accent-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="relative bg-dark-800/50 backdrop-blur-sm p-8 rounded-2xl border border-dark-700/50 hover:border-primary-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-primary-500/10">
        <div className="flex items-start gap-5">
          <div className="bg-gradient-to-br from-primary-500/20 to-accent-500/20 p-4 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            <div className="text-primary-400 group-hover:text-accent-400 transition-colors">
              {icon}
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-3">{title}</h3>
            <p className="text-white/70 mb-6">{description}</p>
            <ul className="space-y-2">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center gap-2 text-sm text-white/60">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary-400" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;