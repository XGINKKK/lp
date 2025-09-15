import React, { useEffect, useRef, useState } from 'react';
import Container from '../ui/Container';
import GradientText from '../ui/GradientText';
import { ArrowRight, Loader2, CheckCircle, Clock, FileText, Target } from 'lucide-react';

const CTA: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    whatsapp: '',
    website: '',
    revenue: '',
    challenge: '',
    investment: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  
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

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) newErrors.name = 'Nome é obrigatório';
    if (!formData.email.trim()) newErrors.email = 'E-mail é obrigatório';
    if (!formData.whatsapp.trim()) newErrors.whatsapp = 'WhatsApp é obrigatório';
    if (!formData.revenue) newErrors.revenue = 'Selecione o faturamento';
    if (!formData.challenge) newErrors.challenge = 'Selecione o principal desafio';
    if (!formData.investment) newErrors.investment = 'Selecione o investimento disponível';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    try {
      // Enviar dados para o webhook
      const webhookUrl = 'https://dudu181190-n8n.qvhrom.easypanel.host/webhook-test/3d973b0f-098c-43d9-bdc2-2c92145b1c2f';
      
      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          whatsapp: formData.whatsapp,
          website: formData.website || '',
          revenue: formData.revenue,
          challenge: formData.challenge,
          investment: formData.investment,
          timestamp: new Date().toISOString(),
          source: 'landing-page-be-connected'
        })
      });
      
      if (!response.ok) {
        throw new Error(`Erro no servidor: ${response.status}`);
      }
      
      // Sucesso - mostrar mensagem ou redirecionar
      alert('Dados enviados com sucesso! Entraremos em contato em breve.');
      
      // Limpar formulário
      setFormData({
        name: '',
        email: '',
        whatsapp: '',
        website: '',
        revenue: '',
        challenge: '',
        investment: ''
      });
      
      setIsSubmitting(false);
      
    } catch (error) {
      console.error('Erro ao enviar formulário:', error);
      alert('Erro ao enviar dados. Tente novamente ou entre em contato conosco.');
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  return (
    <section id="contato" className="py-20 md:py-32 relative overflow-hidden">
      <Container>
        <div 
          ref={sectionRef} 
          className="opacity-0 translate-y-10 transition-all duration-1000 ease-out"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left Side - Benefits */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary-500/10 to-accent-500/10 border border-primary-500/20 mb-8">
                <span className="text-sm font-medium bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
                  Comece Agora
                </span>
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
                Quero Mais <GradientText>Clientes</GradientText>
              </h2>
              
              <h3 className="text-2xl font-bold mb-6 text-primary-400">
                Análise Gratuita do Seu Negócio
              </h3>
              
              <p className="text-xl text-white/80 mb-8">
                <strong>Você vai receber em 48 horas:</strong>
              </p>
              
              <div className="space-y-4 mb-8">
                <BenefitItem 
                  icon={<FileText className="w-6 h-6" />}
                  text="Análise completa do seu sistema de vendas atual"
                />
                <BenefitItem 
                  icon={<Target className="w-6 h-6" />}
                  text="Onde você está perdendo clientes (e como resolver)"
                />
                <BenefitItem 
                  icon={<CheckCircle className="w-6 h-6" />}
                  text="Quantos clientes a mais você pode ter"
                />
                <BenefitItem 
                  icon={<ArrowRight className="w-6 h-6" />}
                  text="Plano personalizado para o seu negócio"
                />
                <BenefitItem 
                  icon={<Clock className="w-6 h-6" />}
                  text="Investimento necessário e retorno esperado"
                />
              </div>
            </div>
            
            {/* Right Side - Form */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-b from-primary-500/20 to-accent-500/20 rounded-2xl blur-xl opacity-75" />
              <div className="relative bg-dark-800/50 backdrop-blur-sm rounded-2xl p-8 border border-dark-700/50">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Nome */}
                  <div>
                    <label className="block text-sm font-medium text-white/90 mb-2">
                      Nome Completo *
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      className={`w-full px-4 py-3 bg-white/10 border rounded-lg text-white placeholder:text-white/60 focus:outline-none focus:ring-2 transition-all ${
                        errors.name ? 'border-red-500 focus:ring-red-500/50' : 'border-white/20 focus:border-primary-500/50 focus:ring-primary-500/20'
                      }`}
                      placeholder="Seu nome completo"
                      disabled={isSubmitting}
                    />
                    {errors.name && <p className="mt-1 text-xs text-red-400">{errors.name}</p>}
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-medium text-white/90 mb-2">
                      E-mail Corporativo *
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className={`w-full px-4 py-3 bg-white/10 border rounded-lg text-white placeholder:text-white/60 focus:outline-none focus:ring-2 transition-all ${
                        errors.email ? 'border-red-500 focus:ring-red-500/50' : 'border-white/20 focus:border-primary-500/50 focus:ring-primary-500/20'
                      }`}
                      placeholder="seu@empresa.com"
                      disabled={isSubmitting}
                    />
                    {errors.email && <p className="mt-1 text-xs text-red-400">{errors.email}</p>}
                  </div>

                  {/* WhatsApp */}
                  <div>
                    <label className="block text-sm font-medium text-white/90 mb-2">
                      WhatsApp *
                    </label>
                    <input
                      type="tel"
                      value={formData.whatsapp}
                      onChange={(e) => handleInputChange('whatsapp', e.target.value)}
                      className={`w-full px-4 py-3 bg-white/10 border rounded-lg text-white placeholder:text-white/60 focus:outline-none focus:ring-2 transition-all ${
                        errors.whatsapp ? 'border-red-500 focus:ring-red-500/50' : 'border-white/20 focus:border-primary-500/50 focus:ring-primary-500/20'
                      }`}
                      placeholder="(11) 99999-9999"
                      disabled={isSubmitting}
                    />
                    {errors.whatsapp && <p className="mt-1 text-xs text-red-400">{errors.whatsapp}</p>}
                  </div>

                  {/* Website */}
                  <div>
                    <label className="block text-sm font-medium text-white/90 mb-2">
                      Site/Negócio
                    </label>
                    <input
                      type="url"
                      value={formData.website}
                      onChange={(e) => handleInputChange('website', e.target.value)}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:border-primary-500/50 focus:ring-primary-500/20 transition-all"
                      placeholder="https://seusite.com"
                      disabled={isSubmitting}
                    />
                  </div>

                  {/* Faturamento */}
                  <div>
                    <label className="block text-sm font-medium text-white/90 mb-2">
                      Quanto Você Fatura por Mês? *
                    </label>
                    <select
                      value={formData.revenue}
                      onChange={(e) => handleInputChange('revenue', e.target.value)}
                      className={`w-full px-4 py-3 bg-white/10 border rounded-lg text-white focus:outline-none focus:ring-2 transition-all ${
                        errors.revenue ? 'border-red-500 focus:ring-red-500/50' : 'border-white/20 focus:border-primary-500/50 focus:ring-primary-500/20'
                      }`}
                      disabled={isSubmitting}
                    >
                      <option value="">Selecione...</option>
                      <option value="ate-50k">Até R$ 50k</option>
                      <option value="50k-200k">R$ 50k - R$ 200k</option>
                      <option value="200k-500k">R$ 200k - R$ 500k</option>
                      <option value="500k-1m">R$ 500k - R$ 1M</option>
                      <option value="acima-1m">Acima de R$ 1M</option>
                    </select>
                    {errors.revenue && <p className="mt-1 text-xs text-red-400">{errors.revenue}</p>}
                  </div>

                  {/* Desafio */}
                  <div>
                    <label className="block text-sm font-medium text-white/90 mb-2">
                      Qual Seu Maior Desafio? *
                    </label>
                    <select
                      value={formData.challenge}
                      onChange={(e) => handleInputChange('challenge', e.target.value)}
                      className={`w-full px-4 py-3 bg-white/10 border rounded-lg text-white focus:outline-none focus:ring-2 transition-all ${
                        errors.challenge ? 'border-red-500 focus:ring-red-500/50' : 'border-white/20 focus:border-primary-500/50 focus:ring-primary-500/20'
                      }`}
                      disabled={isSubmitting}
                    >
                      <option value="">Selecione...</option>
                      <option value="gerar-leads">Conseguir mais clientes potenciais</option>
                      <option value="aumentar-conversao">Converter mais visitantes em clientes</option>
                      <option value="escalar-vendas">Vender mais sem aumentar custos</option>
                      <option value="automatizar">Automatizar as vendas</option>
                      <option value="previsibilidade">Ter vendas previsíveis</option>
                    </select>
                    {errors.challenge && <p className="mt-1 text-xs text-red-400">{errors.challenge}</p>}
                  </div>

                  {/* Investimento */}
                  <div>
                    <label className="block text-sm font-medium text-white/90 mb-2">
                      Quanto Pode Investir por Mês? *
                    </label>
                    <select
                      value={formData.investment}
                      onChange={(e) => handleInputChange('investment', e.target.value)}
                      className={`w-full px-4 py-3 bg-white/10 border rounded-lg text-white focus:outline-none focus:ring-2 transition-all ${
                        errors.investment ? 'border-red-500 focus:ring-red-500/50' : 'border-white/20 focus:border-primary-500/50 focus:ring-primary-500/20'
                      }`}
                      disabled={isSubmitting}
                    >
                      <option value="">Selecione...</option>
                      <option value="3k-10k">R$ 3 mil - R$ 10 mil</option>
                      <option value="10k-30k">R$ 10 mil - R$ 30 mil</option>
                      <option value="30k-50k">R$ 30 mil - R$ 50 mil</option>
                      <option value="acima-50k">Acima de R$ 50 mil</option>
                    </select>
                    {errors.investment && <p className="mt-1 text-xs text-red-400">{errors.investment}</p>}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-400 hover:to-primary-500 disabled:from-primary-600 disabled:to-primary-700 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 group disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Processando...
                      </>
                    ) : (
                      <>
                        Quero Minha Análise Grátis
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

type BenefitItemProps = {
  icon: React.ReactNode;
  text: string;
};

const BenefitItem: React.FC<BenefitItemProps> = ({ icon, text }) => {
  return (
    <div className="flex items-center gap-3">
      <div className="flex-shrink-0 bg-gradient-to-br from-primary-500/20 to-accent-500/20 p-2 rounded-lg">
        <div className="text-primary-400">
          {icon}
        </div>
      </div>
      <span className="text-white/80">{text}</span>
    </div>
  );
};

export default CTA;