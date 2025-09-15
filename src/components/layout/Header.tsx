import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Container from '../ui/Container';
import Button from '../ui/Button';
import GradientText from '../ui/GradientText';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass-card py-3 shadow-lg shadow-neon-pink/10 border-b border-neon-pink/20' : 'bg-transparent py-5'
      }`}
    >
      <Container className="flex items-center justify-between">
        <div className="flex items-center">
          <a href="#" className="flex items-center">
            <div className="text-2xl font-display font-bold">
              <GradientText>EduAi</GradientText>
              <span className="ml-1 text-sm text-white/60">Automatize. Escale.</span>
            </div>
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-10">
          <a href="#about" className="text-white/80 hover:text-white font-medium transition-colors">
            Sobre
          </a>
          <a href="#services" className="text-white/80 hover:text-white font-medium transition-colors">
            Serviços
          </a>
          <a href="#methodology" className="text-white/80 hover:text-white font-medium transition-colors">
            Metodologia
          </a>
          <Button 
            variant="primary" 
            className="ml-4"
            onClick={() => window.location.href = '#apply'}
          >
            Aplicar Agora
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white p-2" 
          onClick={toggleMenu}
          aria-label="Menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </Container>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden glass-card absolute top-full left-0 right-0 border-t border-dark-700/50 animate-fade-in">
          <div className="py-5 px-6 flex flex-col space-y-6">
            <a 
              href="#about" 
              className="text-white/80 hover:text-white font-medium py-2 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Sobre
            </a>
            <a 
              href="#services" 
              className="text-white/80 hover:text-white font-medium py-2 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Serviços
            </a>
            <a 
              href="#methodology" 
              className="text-white/80 hover:text-white font-medium py-2 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Metodologia
            </a>
            <Button 
              variant="primary" 
              className="w-full text-center py-3"
              onClick={() => {
                window.location.href = '#apply';
                setIsMenuOpen(false);
              }}
            >
              Aplicar Agora
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;