import { TerminalWindow } from "@/features/Terminal/TerminalWindow";
import { Sparkles } from "lucide-react";

export const TerminalFeature = () => {
    return (
        <section id="terminal" className="py-32 px-4 relative">
            <div className="max-w-4xl mx-auto space-y-12">
                <div className="text-center space-y-6">
                    <h2 className="text-2xl md:text-5xl font-bold">
                        Análise de Perfil <span className="text-primary">Alta Performance</span>
                    </h2>

                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full">
                        <Sparkles className="w-4 h-4 text-primary" />
                        <p className="text-primary font-mono text-xs uppercase tracking-wide font-medium">
                            Implementação Sob Medida • Atendimento Personalizado
                        </p>
                    </div>

                    <div className="text-white/60 max-w-2xl mx-auto text-lg leading-relaxed space-y-4">
                        <p>
                            Desenvolvemos soluções de automação <span className="text-white/80 font-medium">desenhadas sob medida</span> para a realidade do seu negócio.
                        </p>
                        <p>
                            Por se tratar de uma <span className="text-white/80 font-medium">implementação estratégica</span> e não de uma ferramenta genérica, realizamos um diagnóstico prévio para garantir que sua empresa tenha a maturidade necessária para extrair o máximo desse investimento.
                        </p>
                    </div>
                </div>

                <TerminalWindow />
            </div>
        </section>
    );
};
