import { ArrowDown } from "lucide-react";
import { NeonButton } from "@/ui/atoms/NeonButton";
import { GlitchText } from "@/ui/atoms/GlitchText";

export const HeroSection = () => {
    const scrollToTerminal = () => {
        document.getElementById("terminal")?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden pt-20">
            <div className="max-w-5xl mx-auto text-center space-y-8 relative z-10">
                <span className="inline-block px-3 py-1 rounded-full border border-white/10 bg-white/5 text-primary text-xs font-mono tracking-widest uppercase mb-4 animate-pulse">
                    Engenharia de Receita v2.0
                </span>

                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight">
                    Eu não vendo Chatbots.<br />
                    <span className="block mt-4">Eu construo <GlitchText text="Cérebros Digitais" className="text-primary drop-shadow-[0_0_15px_rgba(99,102,241,0.5)]" /></span>
                    <span className="block mt-2 text-white/30 text-2xl md:text-4xl font-light">para a sua operação.</span>
                </h1>

                <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto leading-relaxed pt-4">
                    Automações de IA sob medida que filtram curiosos, fecham contratos e eliminam o caos operacional. Sua empresa rodando no piloto automático, mas com inteligência humana.
                </p>

                <div className="flex justify-center pt-8">
                    <NeonButton onClick={scrollToTerminal} icon={ArrowDown}>
                        Inicializar Diagnóstico
                    </NeonButton>
                </div>
            </div>
        </section>
    );
};
