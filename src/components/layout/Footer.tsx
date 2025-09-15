import React from 'react';
import Container from '../ui/Container';
import GradientText from '../ui/GradientText';
import { Phone, Mail, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark-950 border-t border-dark-800/50 py-16">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="text-2xl font-display font-bold mb-4">
              <GradientText>Be Connected</GradientText>
            </div>
            <p className="text-white/70 mb-4 max-w-md">
              Máquinas de Vendas que Nunca Param
            </p>
            <p className="text-white/60 text-sm max-w-md">
              Transformamos negócios em máquinas de vendas previsíveis através de funis inteligentes que combinam tráfego qualificado, conteúdo persuasivo e automações com IA.
            </p>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="font-semibold mb-4">Soluções</h3>
            <ul className="space-y-2 text-white/70 text-sm">
              <li><a href="#servicos" className="hover:text-white transition-colors">Funis de Alta Conversão</a></li>
              <li><a href="#servicos" className="hover:text-white transition-colors">Tráfego Multicanal</a></li>
              <li><a href="#servicos" className="hover:text-white transition-colors">Automação com IA</a></li>
              <li><a href="#servicos" className="hover:text-white transition-colors">Conteúdo Estratégico</a></li>
              <li><a href="#servicos" className="hover:text-white transition-colors">Analytics Avançado</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold mb-4">Recursos</h3>
            <ul className="space-y-2 text-white/70 text-sm">
              <li><a href="#cases" className="hover:text-white transition-colors">Cases de Sucesso</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Webinars</a></li>
              <li><a href="#" className="hover:text-white transition-colors">E-books Gratuitos</a></li>
              <li><a href="#contato" className="hover:text-white transition-colors">Diagnóstico</a></li>
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="border-t border-dark-800/50 pt-8 mb-8">
          <h3 className="font-semibold mb-4">Contato</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-white/70 text-sm">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-primary-400" />
              <span>(11) 99999-9999</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-primary-400" />
              <span>sucesso@beconnected.com.br</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-primary-400" />
              <span>Balneário Camboriú, Santa Catarina</span>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-dark-800/50 pt-8">
          <p className="text-white/50 text-sm text-center">
            © 2025 Be Connected. Todos os direitos reservados.
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;