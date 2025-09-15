import React, { useEffect, useRef } from 'react';
import Container from '../ui/Container';
import Button from '../ui/Button';
import GradientText from '../ui/GradientText';
import { ArrowRight, Play, Target, Award, Bot, Users } from 'lucide-react';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
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
    
    if (heroRef.current) {
      observer.observe(heroRef.current);
    }
    
    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);

  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-32 relative overflow-hidden">
      <Container>
        <div ref={heroRef} className="max-w-6xl mx-auto text-center opacity-0 translate-y-10 transition-all duration-1000 ease-out">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary-500/10 to-accent-500/10 border border-primary-500/20 mb-8">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-primary-500"></span>
            </span>
            <span className="text-sm font-medium bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
              Sistema de Vendas Automatizado
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold leading-tight mb-8">
            Seu Funil de Vendas Completo e <GradientText>Automatizado</GradientText> Gerando Vendas 24/7 com Inteligência Artificial
          </h1>
          
          <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-4xl mx-auto">
            Construímos máquinas de vendas previsíveis que transformam desconhecidos em clientes fiéis através de um sistema integrado de tráfego qualificado, conteúdo estratégico e automações inteligentes com IA.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 mb-16">
            <Button 
              variant="primary" 
              className="w-full sm:w-auto text-lg py-6 px-12 group"
              onClick={() => window.location.href = '#contato'}
            >
              <span className="flex items-center justify-center gap-2">
                Quero Meu Funil Lucrativo
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Button>
            <Button 
              variant="secondary" 
              className="w-full sm:w-auto text-lg group"
              onClick={() => window.location.href = '#cases'}
            >
              <span className="flex items-center justify-center gap-2">
                Ver Sistema Funcionando
                <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </span>
            </Button>
          </div>

          {/* Trust Badges */}
          <div className="mb-16">
            <p className="text-white/60 mb-6 text-lg">Especialistas certificados em:</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <TrustBadge 
                icon={<Target className="w-6 h-6" />}
                title="Google Ads Partner"
                subtitle="Certificação oficial"
              />
              <TrustBadge 
                icon={<Users className="w-6 h-6" />}
                title="Meta Business Partner"
                subtitle="Facebook & Instagram"
              />
              <TrustBadge 
                icon={<Bot className="w-6 h-6" />}
                title="OpenAI & Automation"
                subtitle="IA Avançada"
              />
              <TrustBadge 
                icon={<Award className="w-6 h-6" />}
                title="HubSpot Solutions"
                subtitle="CRM & Marketing"
              />
            </div>
          </div>
        </div>
      </Container>

      {/* Gradient orbs */}
      <div className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 bg-primary-500/30 rounded-full blur-[128px] -z-10" />
      <div className="absolute bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-accent-500/30 rounded-full blur-[128px] -z-10" />
    </section>
  );
};

type TrustBadgeProps = {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
};

const TrustBadge: React.FC<TrustBadgeProps> = ({ icon, title, subtitle }) => {
  return (
    <div className="flex flex-col items-center gap-3 p-4 rounded-xl bg-dark-800/50 border border-dark-700/50 backdrop-blur-sm hover:border-primary-500/30 transition-all duration-300">
      <div className="w-12 h-12 rounded-xl bg-primary-500/20 flex items-center justify-center">
        <div className="text-primary-400">
          {icon}
        </div>
      </div>
      <div className="text-center">
        <h3 className="font-semibold text-sm mb-1">{title}</h3>
        <p className="text-xs text-white/60">{subtitle}</p>
      </div>
    </div>
  );
};

export default Hero;