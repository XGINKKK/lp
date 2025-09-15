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
            <span className="ml-1 text-sm text-white/60">• Eduardo Santos - 22 anos, especialista em transformação digital</span>
          </div>
          <p className="text-white/70 max-w-2xl mx-auto mb-6">
            Começei estudando tráfego pago, me apaixonei por dados, me especializei em IA e hoje ajudo empresários como você a trabalharem menos e ganharem mais.
          </p>
          <p className="text-primary-400 font-semibold mb-4">
            Minha missão: Fazer você focar no que você faz de melhor, enquanto a IA cuida do resto.
          </p>
          <p className="text-white/60 text-sm">
            ⚠️ Seus concorrentes já estão automatizando. Enquanto você pensa, eles estão reduzindo custos e aumentando lucros.
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