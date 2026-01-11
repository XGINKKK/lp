import { ParallaxGrid } from "@/ui/molecules/ParallaxGrid";
import { HeroSection } from "@/ui/organisms/HeroSection";
import { ArchitectureSection } from "@/ui/organisms/ArchitectureSection";
import { TerminalFeature } from "@/ui/organisms/TerminalFeature";

export const LandingPage = () => {
    return (
        <div className="relative min-h-screen text-white/90 selection:bg-primary/30">
            <ParallaxGrid />

            <main className="relative z-10">
                <HeroSection />
                <ArchitectureSection />
                <TerminalFeature />
            </main>

            <footer className="relative z-10 py-12 text-center border-t border-white/5 bg-black/40 backdrop-blur-md">
                <p className="text-white/20 text-xs font-mono tracking-widest">
                    &copy; {new Date().getFullYear()} ENGENHARIA DE RECEITA. TODOS OS SISTEMAS OPERACIONAIS.
                </p>
            </footer>
        </div>
    );
};
