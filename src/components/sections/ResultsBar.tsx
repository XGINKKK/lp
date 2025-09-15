import React from 'react';
import Marquee from '../ui/Marquee';

const ResultsBar: React.FC = () => {
  const results = [
    "R$ 5M+ em Vendas Geradas",
    "10.000+ Clientes Potenciais/Mês", 
    "87% das Vendas Automáticas",
    "3x Mais Rápido para Vender"
  ];

  const benefits = [
    "Sistemas que faturam R$ 100k+/mês",
    "Custo de cliente reduzido em 70%",
    "Valor de vida do cliente +250%",
    "Vendas automáticas 24 horas",
    "IA respondendo clientes em segundos"
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
              <p className="text-white/70 text-sm">em Vendas Geradas</p>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent mb-2">
                10.000+
              </div>
              <p className="text-white/70 text-sm">Clientes Potenciais/Mês</p>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent mb-2">
                87%
              </div>
              <p className="text-white/70 text-sm">das Vendas Automáticas</p>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent mb-2">
                3x
              </div>
              <p className="text-white/70 text-sm">Mais Rápido para Vender</p>
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