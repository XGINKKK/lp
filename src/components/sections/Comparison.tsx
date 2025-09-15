import React, { useEffect, useRef, useState } from 'react';
import Container from '../ui/Container';
import GradientText from '../ui/GradientText';
import { X, Check } from 'lucide-react';

const Comparison: React.FC = () => {
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

  const freelancerPoints = [
    "Faz apenas o que você pede",
    "Entrega o projeto e desaparece",
    "Usa só ferramentas básicas (Zapier, Make)",
    "Você precisa explicar cada detalhe",
    "Se der problema depois, você fica na mão"
  ];

  const eduAiPoints = [
    "Entende o que seu negócio realmente precisa",
    "Fica do seu lado durante toda jornada",
    "Cria soluções personalizadas e inteligentes",
    "Conhece de negócio, não só de tecnologia",
    "Garante suporte dedicado sempre que precisar"
  ];

  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-black -z-10" />
      <div className="absolute top-1/2 left-1/4 w-1/2 h-1/2 bg-primary-500/20 rounded-full blur-[96px] -z-10" />
      <div className="absolute bottom-0 right-1/4 w-1/2 h-1/2 bg-accent-500/20 rounded-full blur-[96px] -z-10" />
      
      <Container>
        <div 
          ref={sectionRef} 
          className="opacity-0 translate-y-10 transition-all duration-1000 ease-out"
        >
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary-500/10 to-accent-500/10 border border-primary-500/20 mb-8">
              <span className="text-sm font-medium bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
                Comparativo
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
              Por Que Escolher EduAi e Não <GradientText>Qualquer Freelancer?</GradientText>
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Veja a diferença entre contratar um freelancer comum e ter a EduAi como parceira do seu negócio.
            </p>
          </div>

          {/* Comparison Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Freelancer Comum */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-b from-red-500/10 to-red-600/10 rounded-2xl blur-xl opacity-50" />
              <div className="relative bg-dark-800/50 backdrop-blur-sm rounded-2xl p-8 border border-red-500/20">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-red-400 mb-2">🔴 Freelancer Comum</h3>
                </div>
                <div className="space-y-4">
                  {freelancerPoints.map((point, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <X className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />
                      <span className="text-white/80">{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* EduAi */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-b from-primary-500/20 to-accent-500/20 rounded-2xl blur-xl opacity-75" />
              <div className="relative bg-dark-800/50 backdrop-blur-sm rounded-2xl p-8 border border-primary-500/30">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2">
                    <GradientText>🟢 EduAi</GradientText>
                  </h3>
                </div>
                <div className="space-y-4">
                  {eduAiPoints.map((point, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary-400 mt-0.5 flex-shrink-0" />
                      <span className="text-white/80">{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Conclusion */}
          <div className="text-center">
            <div className="absolute inset-0 bg-gradient-to-b from-primary-500/20 to-accent-500/20 rounded-2xl blur-xl opacity-75" />
            <div className="relative bg-dark-800/50 backdrop-blur-sm rounded-2xl p-8 border border-primary-500/30 max-w-2xl mx-auto">
              <p className="text-xl font-bold">
                <span className="text-white/90">A diferença: </span>
                <span className="text-red-400">Freelancer resolve um problema.</span>
                <span className="text-white/90"> </span>
                <GradientText>EduAi transforma seu negócio.</GradientText>
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Comparison;