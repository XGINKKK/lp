import React, { useEffect, useRef } from 'react';
import Container from '../ui/Container';
import GradientText from '../ui/GradientText';
import { MessageSquare, Users, Settings, Layers, ArrowRight, Bot, BrainCircuit, Workflow, Network } from 'lucide-react';

const Services: React.FC = () => {
  const servicesRef = useRef<HTMLDivElement>(null);
  
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
    
    if (servicesRef.current) {
      observer.observe(servicesRef.current);
    }
    
    return () => {
      if (servicesRef.current) {
        observer.unobserve(servicesRef.current);
      }
    };
  }, []);

  return (
    <section id="services" className="py-20 md:py-32 relative">
      {/* Background elements */}
      <div className="absolute inset-0 bg-black -z-10" />
      <div className="absolute top-1/2 right-1/4 w-1/2 h-1/2 bg-primary-500/20 rounded-full blur-[96px] -z-10" />
      <div className="absolute bottom-0 left-1/4 w-1/2 h-1/2 bg-accent-500/20 rounded-full blur-[96px] -z-10" />
      
      <Container>
        <div 
          ref={servicesRef} 
          className="opacity-0 translate-y-10 transition-all duration-1000 ease-out"
        >
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8">
              <span className="text-sm font-medium bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
                Nossas Soluções
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
              Como a EduAi Transformou <GradientText>Esses Negócios</GradientText>
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Casos reais de empresas que automatizaram e multiplicaram seus resultados.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <ServiceCard 
              icon={<MessageSquare className="w-10 h-10" />}
              title="🏪 Loja de Roupas Online"
              description="Antes: 3 pessoas no atendimento, 40 mensagens sem resposta por dia. Depois: 1 pessoa + IA, 100% das mensagens respondidas em menos de 2 minutos."
              features={[
                "70% menos custo operacional",
                "45% mais vendas"
              ]}
            />
            <ServiceCard 
              icon={<Users className="w-10 h-10" />}
              title="🏥 Clínica Médica"
              description="Antes: Recepcionista atendia telefone o dia todo, pacientes irritados. Depois: IA agenda consultas 24h, recepcionista foca no acolhimento."
              features={[
                "3x mais agendamentos",
                "Zero reclamações de atendimento"
              ]}
            />
            <ServiceCard 
              icon={<Settings className="w-10 h-10" />}
              title="🏗️ Construtora Regional"
              description="Antes: Vendedor perdia 4h/dia organizando leads. Depois: IA qualifica leads e faz follow-up automático."
              features={[
                "Vendedor dobrou número de visitas",
                "60% mais contratos fechados"
              ]}
            />
            <ServiceCard 
              icon={<Layers className="w-10 h-10" />}
              title="O Que Você Ganha Com a EduAi"
              description="Tempo de volta para você, dinheiro no bolso todo mês e empresa preparada para crescer."
              features={[
                "Redução de até 70% nos custos",
                "Aumento médio de 45% nas vendas",
                "ROI positivo já no 1º mês"
              ]}
            />
          </div>
          
          <div className="flex justify-center">
            <a 
              href="#apply" 
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-full glass-card hover:border-primary-500/30 transition-all duration-300"
            >
              <span className="text-white/90 group-hover:text-white transition-colors">
                Conheça todas as possibilidades para seu negócio
              </span>
              <ArrowRight className="w-4 h-4 text-primary-400 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
};

type ServiceCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
};

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, features }) => {
  return (
    <div className="group relative tilt-card">
      <div className="absolute inset-0 bg-gradient-to-b from-primary-500/20 to-accent-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="relative glass-card p-8 rounded-2xl hover:border-primary-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-primary-500/10">
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

export default Services;