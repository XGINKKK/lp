import React, { useEffect, useRef } from 'react';
import Container from '../ui/Container';
import GradientText from '../ui/GradientText';
import { ArrowRight } from 'lucide-react';

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
      <div className="absolute inset-0 bg-gradient-to-b from-dark-900 to-dark-950 -z-10" />
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
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <ProjectStep
                  title="Super Time de Agentes"
                  description="Um time colaborativo de agentes de IA para atender suas demandas."
                />
                
                <ProjectStep
                  title="Super Analista de Marketing"
                  description="Análise de mercado e tendências utilizando IA para otimização."
                />
                
                <ProjectStep
                  title="Super Robô Assistente"
                  description="Um assistente pessoal baseado em IA para facilitar sua rotina."
                />
                
                <ProjectStep
                  title="Agente de Marketing"
                  description="Definição e execução de campanhas de marketing inteligentes."
                />
                
                <ProjectStep
                  title="Agente de Ligação com IA"
                  description="Atendimento ao cliente automatizado com suporte intuitivo."
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
  title: string;
  description: string;
};

const ProjectStep: React.FC<ProjectStepProps> = ({ title, description }) => {
  return (
    <div className="bg-dark-800/50 backdrop-blur-sm rounded-2xl p-6 border border-dark-700/50 hover:border-primary-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-primary-500/10">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-white/70">{description}</p>
    </div>
  );
};

export default Projects;