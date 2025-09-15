import React, { useEffect, useRef } from 'react';
import Container from '../ui/Container';
import GradientText from '../ui/GradientText';
import { Target, Smartphone, Bot, BarChart3, Video, Mail, Zap, Settings } from 'lucide-react';

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
    <section id="servicos" className="py-20 md:py-32 relative">
      <Container>
        <div 
          ref={servicesRef} 
          className="opacity-0 translate-y-10 transition-all duration-1000 ease-out"
        >
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary-500/10 to-accent-500/10 border border-primary-500/20 mb-8">
              <span className="text-sm font-medium bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
                Sistema Completo
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
              O Sistema Completo de <GradientText>Vendas</GradientText>
            </h2>
          </div>
          
          <div className="space-y-20">
            {/* Módulo 1: Tráfego Qualificado */}
            <ServiceModule 
              number="01"
              icon={<Target className="w-12 h-12" />}
              title="Tráfego Qualificado"
              subtitle="Atraímos compradores, não curiosos"
              features={[
                {
                  icon: <Smartphone className="w-6 h-6" />,
                  title: "Campanhas Multi-Canal",
                  description: "Google, Meta, TikTok, LinkedIn sincronizados"
                },
                {
                  icon: <Target className="w-6 h-6" />,
                  title: "Segmentação Avançada",
                  description: "Lookalike audiences e retargeting inteligente"
                },
                {
                  icon: <BarChart3 className="w-6 h-6" />,
                  title: "Creative Testing",
                  description: "Testes A/B contínuos com IA analisando performance"
                },
                {
                  icon: <Zap className="w-6 h-6" />,
                  title: "Budget Optimization",
                  description: "Algoritmos distribuindo verba para máximo ROI"
                }
              ]}
            />

            {/* Módulo 2: Conteúdo Estratégico */}
            <ServiceModule 
              number="02"
              icon={<Video className="w-12 h-12" />}
              title="Conteúdo Estratégico"
              subtitle="Cada palavra projetada para converter"
              features={[
                {
                  icon: <Target className="w-6 h-6" />,
                  title: "Landing Pages de Alta Conversão",
                  description: "Design e textos otimizados com mapas de calor"
                },
                {
                  icon: <Video className="w-6 h-6" />,
                  title: "Vídeos de Vendas e Webinars Automatizados",
                  description: "Apresentações que vendem 24/7"
                },
                {
                  icon: <Mail className="w-6 h-6" />,
                  title: "Sequências de E-mail",
                  description: "Nutrição personalizada baseada em comportamento"
                },
                {
                  icon: <BarChart3 className="w-6 h-6" />,
                  title: "Sistema de Prova Social",
                  description: "Depoimentos e cases no momento certo"
                }
              ]}
            />

            {/* Módulo 3: Automação com IA */}
            <ServiceModule 
              number="03"
              icon={<Bot className="w-12 h-12" />}
              title="Automação com IA"
              subtitle="Seu time de vendas robótico trabalhando sem parar"
              features={[
                {
                  icon: <Bot className="w-6 h-6" />,
                  title: "Chatbots Inteligentes",
                  description: "Qualificação e vendas via WhatsApp/Instagram"
                },
                {
                  icon: <Target className="w-6 h-6" />,
                  title: "Pontuação de Leads com IA",
                  description: "Identificação automática de leads quentes"
                },
                {
                  icon: <Zap className="w-6 h-6" />,
                  title: "Acompanhamento Automatizado",
                  description: "Nunca perca uma oportunidade de venda"
                },
                {
                  icon: <BarChart3 className="w-6 h-6" />,
                  title: "Análise Preditiva",
                  description: "IA prevendo quem vai comprar"
                }
              ]}
            />

            {/* Módulo 4: Otimização Contínua */}
            <ServiceModule 
              number="04"
              icon={<Settings className="w-12 h-12" />}
              title="Otimização Contínua"
              subtitle="Melhorando resultados todos os dias"
              features={[
                {
                  icon: <BarChart3 className="w-6 h-6" />,
                  title: "Dashboard em Tempo Real",
                  description: "Veja cada métrica do seu funil"
                },
                {
                  icon: <Zap className="w-6 h-6" />,
                  title: "Testes Contínuos de Variações",
                  description: "IA testando variações automaticamente"
                },
                {
                  icon: <Target className="w-6 h-6" />,
                  title: "Modelo de Atribuição",
                  description: "Saiba exatamente o que gera vendas"
                },
                {
                  icon: <Settings className="w-6 h-6" />,
                  title: "Rastreamento de Retorno",
                  description: "Lucro por canal, campanha e criativo"
                }
              ]}
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

type ServiceModuleProps = {
  number: string;
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  features: {
    icon: React.ReactNode;
    title: string;
    description: string;
  }[];
};

const ServiceModule: React.FC<ServiceModuleProps> = ({ 
  number, 
  icon, 
  title, 
  subtitle, 
  features 
}) => {
  return (
    <div className="relative group">
      <div className="absolute inset-0 bg-gradient-to-b from-primary-500/20 to-accent-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="relative glass-card rounded-3xl p-8 md:p-12">
        <div className="flex items-start gap-6 mb-8">
          {/* Number Badge */}
          <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-r from-primary-500 to-accent-500 flex items-center justify-center text-2xl font-bold group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 floating">
            {number}
          </div>
          
          {/* Icon */}
          <div className="flex-shrink-0 bg-gradient-to-br from-primary-500/20 to-accent-500/20 w-20 h-20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            <div className="text-primary-400 group-hover:text-accent-400 transition-colors duration-300">
              {icon}
            </div>
          </div>
          
          {/* Title */}
          <div>
            <h3 className="text-2xl md:text-3xl font-bold mb-2">
              Módulo {number}: <GradientText>{title}</GradientText>
            </h3>
            <p className="text-xl text-white/80">{subtitle}</p>
          </div>
        </div>
        
        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start gap-4 p-4 rounded-xl bg-dark-900/50 border border-dark-700/30 hover:bg-dark-800/50 hover:border-primary-500/30 transition-all duration-300 transform hover:scale-105">
              <div className="flex-shrink-0 bg-gradient-to-br from-primary-500/20 to-accent-500/20 p-2 rounded-lg hover:scale-110 transition-transform duration-300">
                <div className="text-primary-400 hover:text-accent-400 transition-colors duration-300">
                  {feature.icon}
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-1">{feature.title}</h4>
                <p className="text-white/70 text-sm">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;