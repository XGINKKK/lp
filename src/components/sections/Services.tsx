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
                O que Fazemos
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
              Sistema Completo de <GradientText>Vendas Automáticas</GradientText>
            </h2>
          </div>
          
          <div className="space-y-20">
            {/* Módulo 1: Tráfego Qualificado */}
            <ServiceModule 
              number="01"
              icon={<Target className="w-12 h-12" />}
              title="Clientes Certos"
              subtitle="Atraímos quem realmente vai comprar"
              features={[
                {
                  icon: <Smartphone className="w-6 h-6" />,
                  title: "Anúncios em Todos os Lugares",
                  description: "Google, Facebook, Instagram, TikTok trabalhando juntos"
                },
                {
                  icon: <Target className="w-6 h-6" />,
                  title: "Público Certeiro",
                  description: "Encontramos pessoas iguais aos seus melhores clientes"
                },
                {
                  icon: <BarChart3 className="w-6 h-6" />,
                  title: "Testes Automáticos",
                  description: "IA testa qual anúncio vende mais e usa o melhor"
                },
                {
                  icon: <Zap className="w-6 h-6" />,
                  title: "Verba Inteligente",
                  description: "Dinheiro vai automaticamente para onde vende mais"
                }
              ]}
            />

            {/* Módulo 2: Conteúdo Estratégico */}
            <ServiceModule 
              number="02"
              icon={<Video className="w-12 h-12" />}
              title="Conteúdo que Vende"
              subtitle="Estratégia digital + produção presencial profissional"
              features={[
                {
                  icon: <Target className="w-6 h-6" />,
                  title: "Páginas que Convertem",
                  description: "Landing pages criadas por Eduardo que transformam visitantes em clientes"
                },
                {
                  icon: <Video className="w-6 h-6" />,
                  title: "Vídeos que Vendem",
                  description: "Marcus grava vídeos de vendas profissionais que convertem automaticamente"
                },
                {
                  icon: <Video className="w-6 h-6" />,
                  title: "Captação Presencial",
                  description: "Marcus produz depoimentos e materiais estratégicos no local"
                },
                {
                  icon: <BarChart3 className="w-6 h-6" />,
                  title: "Prova Social",
                  description: "Depoimentos reais captados presencialmente que geram confiança"
                }
              ]}
            />

            {/* Módulo 3: Automação com IA */}
            <ServiceModule 
              number="03"
              icon={<Bot className="w-12 h-12" />}
              title="IA que Vende"
              subtitle="Robôs inteligentes vendendo sem parar"
              features={[
                {
                  icon: <Bot className="w-6 h-6" />,
                  title: "Robôs no WhatsApp",
                  description: "Atendem, qualificam e vendem no WhatsApp e Instagram"
                },
                {
                  icon: <Target className="w-6 h-6" />,
                  title: "IA Identifica Compradores",
                  description: "Sabe automaticamente quem está pronto para comprar"
                },
                {
                  icon: <Zap className="w-6 h-6" />,
                  title: "Follow-up Automático",
                  description: "Nunca perde um cliente em potencial"
                },
                {
                  icon: <BarChart3 className="w-6 h-6" />,
                  title: "IA Prevê Vendas",
                  description: "Sabe quem vai comprar antes mesmo da pessoa decidir"
                }
              ]}
            />

            {/* Módulo 4: Otimização Contínua */}
            <ServiceModule 
              number="04"
              icon={<Settings className="w-12 h-12" />}
              title="Melhoria Constante"
              subtitle="Vendas aumentando todos os dias"
              features={[
                {
                  icon: <BarChart3 className="w-6 h-6" />,
                  title: "Painel de Resultados",
                  description: "Veja todos os números do seu sistema em tempo real"
                },
                {
                  icon: <Zap className="w-6 h-6" />,
                  title: "Testes Automáticos",
                  description: "IA testa melhorias sozinha, sem você precisar fazer nada"
                },
                {
                  icon: <Target className="w-6 h-6" />,
                  title: "Rastreamento Completo",
                  description: "Saiba exatamente de onde vem cada venda"
                },
                {
                  icon: <Settings className="w-6 h-6" />,
                  title: "Controle de Lucro",
                  description: "Veja o lucro de cada anúncio e campanha"
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