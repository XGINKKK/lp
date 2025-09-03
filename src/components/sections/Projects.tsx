import React, { useEffect, useRef, useState } from 'react';
import Container from '../ui/Container';
import GradientText from '../ui/GradientText';
import Modal from '../ui/Modal';
import { ArrowRight, Bot, BrainCircuit, Workflow, Network } from 'lucide-react';

type Project = {
  title: string;
  description: string;
  image: string;
  details?: {
    overview: string;
    features: string[];
    benefits: string[];
    integrations?: string[];
    examples?: {
      title: string;
      steps: string[];
    }[];
  };
};

const projects: Project[] = [
  {
    title: "Super Time de Agentes",
    description: "Equipe de agentes de IA trabalhando em conjunto para maximizar resultados",
    image: "/Super Time de Agentes.png",
    details: {
      overview: "O Time de Agentes é uma solução revolucionária que permite que múltiplos agentes de IA trabalhem em conjunto, cada um com sua especialidade, para realizar tarefas complexas com precisão e eficiência incomparáveis.",
      features: [
        "Coordenação automática entre agentes especializados",
        "Distribuição inteligente de tarefas",
        "Comunicação fluida entre agentes",
        "Monitoramento em tempo real do progresso"
      ],
      benefits: [
        "Aumento exponencial na produtividade",
        "Redução significativa de erros",
        "Escalabilidade instantânea",
        "Resultados consistentes e de alta qualidade"
      ],
      examples: [
        {
          title: "Exemplo: Produção de Conteúdo em Vídeo",
          steps: [
            "Agente Roteirista: Desenvolve o roteiro e narrativa",
            "Agente Designer: Cria elementos visuais e gráficos",
            "Agente Editor: Monta e edita o vídeo",
            "Agente Revisor: Garante qualidade e coerência"
          ]
        }
      ],
      integrations: [
        "Ferramentas de Gestão de Projetos",
        "Plataformas de Comunicação",
        "Sistemas de Automação",
        "Software de Análise de Dados"
      ]
    }
  },
  {
    title: "Super Analista de Marketing",
    description: "IA especializada em análise e otimização de campanhas de marketing digital",
    image: "/Super Analista_de Marketing _.png",
    details: {
      overview: "Um analista virtual que utiliza IA avançada para otimizar suas campanhas de marketing e maximizar o ROI.",
      features: [
        "Análise de dados em tempo real",
        "Otimização automática de campanhas",
        "Previsões de tendências",
        "Relatórios personalizados"
      ],
      benefits: [
        "Redução de 40% no custo por aquisição",
        "Aumento de 150% no ROI",
        "Insights acionáveis em tempo real",
        "Economia de tempo em análises"
      ],
      integrations: [
        "Google Analytics",
        "Facebook Ads",
        "Google Ads",
        "Plataformas de Email Marketing"
      ]
    }
  },
  {
    title: "Super Robô Assistente",
    description: "Assistente virtual inteligente para automação de processos e atendimento",
    image: "/Criando um Super Roboo Assistente.png",
    details: {
      overview: "O James Faz Tudo é um super agente criado em n8n, que entende texto, imagem e voz — e pode fazer demonstrações automáticas do seu trabalho de automação para impressionar leads e fechar contratos com mais facilidade.",
      features: [
        "Mostra na prática como sua automação funciona",
        "Gera provas sociais para conquistar clientes",
        "Usa IA para entender as dores do lead e responder com eficiência",
        "Conexões prontas para WhatsApp, Google Calendar, Gmail e muito mais"
      ],
      benefits: [
        "Demonstrações automáticas impressionantes",
        "Maior taxa de conversão de leads",
        "Atendimento personalizado 24/7",
        "Integração perfeita com sistemas existentes"
      ],
      integrations: [
        "WhatsApp Business",
        "Google Workspace",
        "CRM",
        "Ferramentas de Automação"
      ]
    }
  },
  {
    title: "Agente de Marketing",
    description: "Especialista em estratégias e execução de campanhas de marketing",
    image: "/Agente de_Marketing _.png",
    details: {
      overview: "Um agente especializado em marketing que automatiza e otimiza suas campanhas para máximo impacto.",
      features: [
        "Criação automática de conteúdo",
        "Segmentação inteligente",
        "A/B testing automático",
        "Análise de performance"
      ],
      benefits: [
        "Aumento de 200% no engajamento",
        "Redução de 60% no tempo de execução",
        "Maior consistência nas campanhas",
        "Otimização contínua"
      ],
      integrations: [
        "Redes Sociais",
        "Plataformas de Email Marketing",
        "CMS",
        "Analytics"
      ]
    }
  },
  {
    title: "Agente de Ligação com IA",
    description: "Automação inteligente de chamadas e follow-ups comerciais",
    image: "/Agente de Ligacao com IA_.png",
    details: {
      overview: "Um agente especializado em comunicação que automatiza e humaniza o processo de ligações e follow-ups.",
      features: [
        "Reconhecimento de voz natural",
        "Personalização dinâmica do discurso",
        "Gestão inteligente de objeções",
        "Agendamento automático"
      ],
      benefits: [
        "Aumento de 150% na taxa de contato",
        "Redução de 80% no tempo de follow-up",
        "Maior satisfação do cliente",
        "Escalabilidade imediata"
      ],
      integrations: [
        "Sistema de Telefonia",
        "CRM",
        "Calendários",
        "Ferramentas de Vendas"
      ]
    }
  }
];

const Projects: React.FC = () => {
  const projectsRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-10');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -10% 0px'
      }
    );

    if (projectsRef.current) {
      observer.observe(projectsRef.current);
    }

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  const handleOpenModal = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-dark-900 to-dark-950 -z-10" />
      <div className="absolute top-1/2 left-1/4 w-1/2 h-1/2 bg-primary-500/20 rounded-full blur-[96px] -z-10" />
      <div className="absolute bottom-0 right-1/4 w-1/2 h-1/2 bg-accent-500/20 rounded-full blur-[96px] -z-10" />

      <Container>
        <div
          ref={projectsRef}
          className="opacity-0 translate-y-10 transition-all duration-1000 ease-out"
        >
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary-500/10 to-accent-500/10 border border-primary-500/20 mb-8">
              <span className="text-sm font-medium bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
                Nossos Projetos
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
              Transformando negócios com <GradientText>IA sob medida</GradientText>
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Conheça alguns dos nossos casos de sucesso em diferentes segmentos e como
              estamos revolucionando o mercado com soluções de IA personalizadas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.title}
                ref={el => cardsRef.current[index] = el}
                className="group relative opacity-0 translate-y-10 transition-all duration-500"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-b from-primary-500/20 to-accent-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative bg-dark-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-dark-700/50 hover:border-primary-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-primary-500/10 h-full">
                  <div className="h-[200px] relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-500/30 via-accent-500/20 to-secondary-500/30" />
                    <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary-500/40 to-accent-500/40 backdrop-blur-sm border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        {getProjectIcon(project.title)}
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-white/70 mb-4">{project.description}</p>
                    <button
                      onClick={() => handleOpenModal(project)}
                      className="inline-flex items-center gap-2 text-primary-400 hover:text-accent-400 transition-colors group/link"
                    >
                      Ver detalhes
                      <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>

      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        title={selectedProject?.title || ''}
      >
        {selectedProject && (
          <div className="space-y-8">

            <div>
              <h4 className="text-lg font-semibold mb-3">Visão Geral</h4>
              <p className="text-white/80">{selectedProject.details?.overview}</p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-3">Funcionalidades</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {selectedProject.details?.features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-500/20 flex items-center justify-center">
                      <Bot className="w-4 h-4 text-primary-400" />
                    </div>
                    <p className="text-white/80">{feature}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-3">Benefícios</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {selectedProject.details?.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accent-500/20 flex items-center justify-center">
                      <BrainCircuit className="w-4 h-4 text-accent-400" />
                    </div>
                    <p className="text-white/80">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>

            {selectedProject.details?.examples && (
              <div className="mt-8">
                <h4 className="text-lg font-semibold mb-3">Exemplo de Fluxo de Trabalho</h4>
                {selectedProject.details.examples.map((example, index) => (
                  <div key={index} className="bg-dark-800/50 rounded-xl p-6 border border-dark-700/50">
                    <h5 className="text-lg font-medium mb-4">{example.title}</h5>
                    <div className="space-y-4">
                      {example.steps.map((step, stepIndex) => (
                        <div key={stepIndex} className="flex items-start gap-3">
                          <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-500/20 flex items-center justify-center">
                            <Workflow className="w-4 h-4 text-primary-400" />
                          </div>
                          <p className="text-white/80">{step}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {selectedProject.details?.integrations && (
              <div>
                <h4 className="text-lg font-semibold mb-3">Integrações</h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {selectedProject.details.integrations.map((integration, index) => (
                    <div
                      key={index}
                      className="bg-dark-800/50 rounded-lg p-3 text-center text-white/80 border border-dark-700/50"
                    >
                      {integration}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </Modal>
    </section>
  );
};

const getProjectIcon = (title: string) => {
  const iconClass = "w-10 h-10 text-white";
  
  if (title.includes("Super Time")) {
    return <Network className={iconClass} />;
  }
  if (title.includes("Analista")) {
    return <BrainCircuit className={iconClass} />;
  }
  if (title.includes("Robô") || title.includes("Assistente")) {
    return <Bot className={iconClass} />;
  }
  if (title.includes("Marketing")) {
    return <Workflow className={iconClass} />;
  }
  if (title.includes("Ligação")) {
    return <Bot className={iconClass} />;
  }
  
  return <Bot className={iconClass} />;
};

export default Projects;