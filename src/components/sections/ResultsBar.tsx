import React from 'react';
import Marquee from '../ui/Marquee';

const ResultsBar: React.FC = () => {
  const results = [
    "R$ 5M+ Gerados em Vendas",
    "10.000+ Leads Qualificados/Mês", 
    "87% Taxa de Automação",
    "3x Redução no Ciclo de Vendas"
  ];

  const benefits = [
    "Funis que faturam R$ 100k+/mês",
    "CAC reduzido em até 70%",
    "LTV aumentado em 250%",
    "Vendas no automático 24/7",
    "IA respondendo leads em segundos"
  ];

  return (
    <section className="py-8 relative">
      {/* Results Numbers */}
      <div className="bg-gradient-to-r from-primary-500/10 to-accent-500/10 border-y border-primary-500/20 py-8 mb-8">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent mb-2">
                R$ 5M+
              </div>
              <p className="text-white/70 text-sm">Gerados em Vendas</p>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent mb-2">
                10.000+
              </div>
              <p className="text-white/70 text-sm">Leads Qualificados/Mês</p>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent mb-2">
                87%
              </div>
              <p className="text-white/70 text-sm">Taxa de Automação</p>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent mb-2">
                3x
              </div>
              <p className="text-white/70 text-sm">Redução no Ciclo de Vendas</p>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Marquee */}
      <Marquee items={benefits} speed="normal" />
    </section>
  );
};

export default ResultsBar;