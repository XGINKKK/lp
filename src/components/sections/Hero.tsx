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
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-900 to-dark-950 -z-10" />
      <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 bg-primary-500/20 rounded-full blur-[96px] -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-1/2 h-1/2 bg-accent-500/20 rounded-full blur-[96px] -z-10" />
      
      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-white/20 rounded-full floating" style={{ animationDelay: '0s' }} />
        <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-primary-400/30 rounded-full floating" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-accent-400/40 rounded-full floating" style={{ animationDelay: '4s' }} />
        <div className="absolute top-1/2 right-1/3 w-5 h-5 bg-white/10 rounded-full floating" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-1/4 right-1/5 w-3 h-3 bg-primary-500/20 rounded-full floating" style={{ animationDelay: '3s' }} />
      </div>
      
      <Container>
        <div ref={heroRef} className="max-w-6xl mx-auto text-center opacity-0 translate-y-10 transition-all duration-1000 ease-out">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8 floating">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-primary-500"></span>
            </span>
            <span className="text-sm font-medium bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
              Sistema de Vendas Automatizado
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold leading-tight mb-8 typewriter">
            Seu Funil de Vendas Completo e <GradientText>Automatizado</GradientText> Gerando Vendas 24/7 com Inteligência Artificial
          </h1>
          
          <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-4xl mx-auto">
            Construímos máquinas de vendas previsíveis que transformam desconhecidos em clientes fiéis através de um sistema integrado de tráfego qualificado, conteúdo estratégico e automações inteligentes com IA.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 mb-16">
            <Button 
              variant="primary" 
              className="w-full sm:w-auto text-lg py-6 px-12 group glow-button ripple-effect"
              onClick={() => window.location.href = '#contato'}
            >
              <span className="flex items-center justify-center gap-2">
                Quero Meu Funil Lucrativo
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Button>
            <Button 
              variant="secondary" 
              className="w-full sm:w-auto text-lg group glass-card"
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
              title="Especialistas em Google Ads"
              subtitle="Campanhas otimizadas"
            />
            <TrustBadge 
              icon={<Users className="w-6 h-6" />}
              title="Especialistas em Meta Ads"
              subtitle="Facebook & Instagram"
            />
            <TrustBadge 
              icon={<Bot className="w-6 h-6" />}
              title="Automação Inteligente"
              subtitle="IA Avançada"
            />
            <TrustBadge 
              icon={<Award className="w-6 h-6" />}
              title="Gestão de Relacionamento"
              subtitle="CRM & Marketing"
            />
          </div>
          </div>
        </div>
      </Container>
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
    <div className="flex flex-col items-center gap-3 p-4 rounded-xl glass-card tilt-card group">
      <div className="w-12 h-12 rounded-xl bg-primary-500/20 flex items-center justify-center">
        <div className="text-primary-400 group-hover:scale-110 transition-transform duration-300">
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