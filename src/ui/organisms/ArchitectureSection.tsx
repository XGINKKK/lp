import { Network, Database, Cpu } from "lucide-react";

export const ArchitectureSection = () => {
    return (
        <section className="py-32 px-4 relative">
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
                <div className="space-y-8">
                    <h2 className="text-3xl md:text-5xl font-bold leading-tight">A Arquitetura <span className="text-accent underline decoration-accent/30 underline-offset-8">Proprietária</span></h2>
                    <p className="text-lg text-white/70 leading-relaxed">
                        Esqueça automações genéricas. Minha arquitetura conecta CRM, WhatsApp e IA em um ecossistema único. O resultado? Seu comercial só fala com quem tem dinheiro e urgência.
                    </p>
                    <ul className="space-y-6 pt-4">
                        {[
                            { icon: Database, text: "Centralização de Leads (Sem dados perdidos)", desc: "Seu CRM alimentado automaticamente." },
                            { icon: Cpu, text: "Qualificação Neural (Filtra curiosos)", desc: "IA analisa intenção real de compra." },
                            { icon: Network, text: "Sincronização Omnichannel (WhatsApp + CRM)", desc: "Visão 360º de cada interação." }
                        ].map((item, i) => (
                            <li key={i} className="flex gap-4">
                                <div className="w-10 h-10 rounded border border-white/10 bg-white/5 flex items-center justify-center shrink-0">
                                    <item.icon className="w-5 h-5 text-primary" />
                                </div>
                                <div>
                                    <h4 className="font-mono text-sm font-bold">{item.text}</h4>
                                    <p className="text-white/40 text-sm">{item.desc}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Visual Abstract Representation */}
                <div className="relative h-[500px] bg-white/[0.02] rounded-2xl border border-white/10 p-8 flex items-center justify-center overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 opacity-0 group-hover:opacity-30 transition-opacity duration-700 blur-3xl" />

                    {/* Diagram */}
                    <div className="relative grid grid-cols-2 gap-8 w-full max-w-sm">
                        {/* CRM Node */}
                        <div className="p-6 bg-black/40 border border-white/10 rounded-lg backdrop-blur-sm flex flex-col items-center gap-2">
                            <Database className="text-white/50" />
                            <span className="text-xs font-mono">CRM</span>
                        </div>

                        {/* WhatsApp Node */}
                        <div className="p-6 bg-black/40 border border-white/10 rounded-lg backdrop-blur-sm flex flex-col items-center gap-2">
                            <Network className="text-green-500/50" />
                            <span className="text-xs font-mono">WHATSAPP</span>
                        </div>

                        {/* The Brain */}
                        <div className="col-span-2 p-8 bg-primary/10 border border-primary/40 rounded-xl backdrop-blur-md text-center shadow-[0_0_50px_-10px_rgba(99,102,241,0.3)] relative z-10">
                            <Cpu className="w-8 h-8 mx-auto mb-3 text-primary animate-pulse" />
                            <span className="font-bold text-primary tracking-widest block">NÚCLEO DE IA</span>
                            <div className="mt-2 text-[10px] text-primary/70 font-mono">PROCESSANDO INTENÇÃO • 99.8% PRECISÃO</div>
                        </div>

                        {/* Connection Lines (Simulated with absolute divs) */}
                        <div className="absolute top-1/2 left-1/4 w-0.5 h-12 bg-gradient-to-b from-white/10 to-primary/50 -translate-y-full -z-10" />
                        <div className="absolute top-1/2 right-1/4 w-0.5 h-12 bg-gradient-to-b from-white/10 to-primary/50 -translate-y-full -z-10" />
                    </div>
                </div>
            </div>
        </section>
    );
};
