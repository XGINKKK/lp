import React from 'react';
import Container from '../ui/Container';
import GradientText from '../ui/GradientText';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-dark-800/50 py-16">
      <Container>
        <div className="text-center">
          <div className="text-2xl font-display font-bold mb-4">
            <GradientText>EduAi</GradientText>
            <span className="ml-1 text-sm text-white/60">• por Eduardo Manoel de Miranda Santos</span>
          </div>
          <p className="text-white/70 max-w-sm mx-auto">
            Transformando negócios com IA e automação humanizada para resultados reais.
          </p>
        </div>

        <div className="border-t border-dark-800/50 mt-10 pt-10">
          <p className="text-white/50 text-sm text-center">
            © {new Date().getFullYear()} EduAi. Todos os direitos reservados.
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;