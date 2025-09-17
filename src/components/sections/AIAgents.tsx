import React, { useEffect, useRef, useState } from 'react';
import Container from '../ui/Container';
import GradientText from '../ui/GradientText';
import { BrainCircuit, MessageCircle, Sparkles, Network, ArrowRight } from 'lucide-react';

const AIAgents: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isTyping, setIsTyping] = useState(false);
  const chatStartedRef = useRef(false);
  
  type Message = {
    id: number;
    text: string;
    sender: 'ai' | 'user';
  };

  const conversation: Message[] = [
    {
      id: 1,
      text: "Olá! Estou aqui para ajudar com suas dúvidas sobre nossos produtos. Como posso auxiliar hoje?",
      sender: 'ai'
    },
    {
      id: 2,
      text: "Preciso de informações sobre integrações com meu sistema atual.",
      sender: 'user'
    },
    {
      id: 3,
      text: "Claro! Nossas soluções são projetadas para integrar perfeitamente com sua infraestrutura existente. Posso agendar uma demonstração personalizada?",
      sender: 'ai'
    },
    {
      id: 4,
      text: "Sim, gostaria muito! Quais sistemas vocês já integraram?",
      sender: 'user'
    },
    {
      id: 5,
      text: "Já integramos com CRMs como Salesforce e HubSpot, ERPs como SAP, plataformas de e-commerce como Shopify, e muito mais. Qual sistema você usa?",
      sender: 'ai'
    },
    {
      id: 6,
      text: "Uso Salesforce e tenho uma loja no Shopify. Como seria a integração?",
      sender: 'user'
    },
    {
      id: 7,
      text: "Perfeito! Podemos conectar seus dados do Salesforce com a loja Shopify para automação completa. Vou preparar uma demo personalizada para você!",
      sender: 'ai'
    }
  ];

  const [messages, setMessages] = useState<Message[]>([]);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100');
            entry.target.classList.remove('opacity-0', 'translate-y-10');
            if (!chatStartedRef.current) {
              startChat();
              chatStartedRef.current = true;
            }
          } else {
            // Reset chat when component is out of view
            setMessages([]);
            chatStartedRef.current = false;
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

  const startChat = () => {
    let currentIndex = 0;
    
    const addMessage = () => {
      if (currentIndex < conversation.length) {
        setIsTyping(true);
        
        setTimeout(() => {
          setIsTyping(false);
          setMessages(prev => [...prev, conversation[currentIndex]]);
          currentIndex++;
          
          if (currentIndex < conversation.length) {
            setTimeout(addMessage, 1000);
          }
        }, conversation[currentIndex].sender === 'ai' ? 2000 : 1000);
      }
    };
    
    addMessage();
  };

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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary-500/10 to-accent-500/10 border border-primary-500/20 mb-8">
                <span className="text-sm font-medium bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
                  Agentes Inteligentes
                </span>
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
                Agentes de IA que <GradientText>Pensam e Agem</GradientText> Como Humanos
              </h2>
              <p className="text-xl text-white/80 mb-8">
                Nossos agentes possuem uma camada exclusiva de humanização, com decisões baseadas em contexto, histórico e objetivos do seu negócio.
              </p>
              
              <div className="space-y-6 mb-8">
                <FeatureItem 
                  icon={<BrainCircuit size={20} />} 
                  title="Raciocínio avançado"
                  description="Análise de contexto e intenção para decisões melhores"
                />
                <FeatureItem 
                  icon={<MessageCircle size={20} />} 
                  title="Comunicação natural"
                  description="Tom alinhado à sua marca"
                />
                <FeatureItem 
                  icon={<Sparkles size={20} />} 
                  title="Personalidade definida"
                  description="Agentes com traços que refletem seus valores"
                />
                <FeatureItem 
                  icon={<Network size={20} />} 
                  title="Integração perfeita"
                  description="Conectados aos seus sistemas e processos"
                />
              </div>
              
              <a 
                href="#apply" 
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-dark-800/50 border border-dark-700/50 hover:border-primary-500/30 transition-all duration-300"
              >
                <span className="text-white/90 group-hover:text-white transition-colors">
                  Conheça mais sobre nossos agentes
                </span>
                <ArrowRight className="w-4 h-4 text-primary-400 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-b from-primary-500/20 to-accent-500/20 rounded-2xl blur-xl opacity-75" />
              <div className="relative bg-dark-800/50 backdrop-blur-sm rounded-2xl p-1 border border-dark-700/50 hover:border-primary-500/30 transition-all duration-500 hover:shadow-xl hover:shadow-primary-500/10">
                <div className="relative rounded-xl overflow-hidden">
                  <img 
                    src="https://images.pexels.com/photos/8438969/pexels-photo-8438969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                    alt="Agente de IA EduAi" 
                    className="w-full h-[400px] md:h-[500px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-900/90 via-dark-900/50 to-transparent"></div>
                  
                  {/* Chat interface */}
                  <div className="absolute bottom-8 left-8 right-8">
                    <div className="bg-dark-800/90 backdrop-blur-sm rounded-xl p-5 border border-dark-700/50 max-h-80 md:max-h-96">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center">
                          <BrainCircuit size={18} className="text-white" />
                        </div>
                        <div>
                          <h4 className="font-medium text-white">Assistente IA</h4>
                          <p className="text-xs text-white/60">EduAi</p>
                        </div>
                      </div>
                      <div className="space-y-3 max-h-48 md:max-h-64 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-primary-500/50 scrollbar-track-dark-700/30">
                        {messages && messages.map((message) => (
                          message && (
                            <div
                              key={message.id}
                              className={`${
                                message.sender === 'ai'
                                  ? 'bg-primary-500/10 border border-primary-500/20'
                                  : 'bg-dark-700/50 border border-dark-600/30 ml-auto max-w-[85%]'
                              } p-3 rounded-lg max-w-[80%] animate-fade-in`}
                            >
                              <p className="text-white/90 text-sm">{message.text}</p>
                            </div>
                          )
                        ))}
                        {isTyping && (
                          <div className="bg-primary-500/10 p-3 rounded-lg max-w-[80%] border border-primary-500/20">
                            <div className="flex gap-1">
                              <div className="w-2 h-2 rounded-full bg-primary-400 animate-bounce" style={{ animationDelay: '0ms' }} />
                              <div className="w-2 h-2 rounded-full bg-primary-400 animate-bounce" style={{ animationDelay: '150ms' }} />
                              <div className="w-2 h-2 rounded-full bg-primary-400 animate-bounce" style={{ animationDelay: '300ms' }} />
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="space-y-3 max-h-48 md:max-h-64 overflow-y-auto pr-2 chat-scrollbar">
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

type FeatureItemProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

const FeatureItem: React.FC<FeatureItemProps> = ({ icon, title, description }) => {
  return (
    <div className="group flex items-start gap-4 p-4 rounded-xl hover:bg-dark-800/50 transition-colors duration-300">
      <div className="bg-gradient-to-br from-primary-500/20 to-accent-500/20 p-2 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
        <div className="text-primary-400 group-hover:text-accent-400 transition-colors">
          {icon}
        </div>
      </div>
      <div>
        <h3 className="font-semibold mb-1">{title}</h3>
        <p className="text-white/70 text-sm">{description}</p>
      </div>
    </div>
  );
};

export default AIAgents;