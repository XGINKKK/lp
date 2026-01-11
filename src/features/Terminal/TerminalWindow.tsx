import { motion, AnimatePresence } from "framer-motion";
import { Terminal, ShieldCheck, Cpu } from "lucide-react";
import { useTerminalLogic } from "./useTerminalLogic";
import { InputField } from "@/ui/atoms/InputField";
import { NeonButton } from "@/ui/atoms/NeonButton";
import { GlitchText } from "@/ui/atoms/GlitchText";

export const TerminalWindow = () => {
    const { step, formData, history, startDiagnosis, nextStep, updateField, submit } = useTerminalLogic();

    const variants = {
        hidden: { opacity: 0, x: -10 },
        visible: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: 10 }
    };

    const canProceedIdentify = formData.name && formData.whatsapp;
    const canProceedRole = formData.role && (formData.role !== 'Funcionário' || formData.hasDecisionPower);
    const canProceedCompany = formData.teamSize && formData.adsInvestment && formData.usesCRM;

    return (
        <div className="w-full max-w-2xl mx-auto rounded-lg overflow-hidden border border-white/10 bg-[#0a0a0a]/90 backdrop-blur-md shadow-2xl shadow-primary/20">
            {/* Header */}
            <div className="bg-white/5 border-b border-white/10 p-3 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <div className="flex gap-1.5">
                        <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
                        <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50" />
                    </div>
                    <span className="text-xs font-mono text-white/40 ml-2 flex items-center gap-1 select-none">
                        <Terminal size={12} />
                        DIAGNOSTIC_CORE_V2.sh
                    </span>
                </div>
                <div className="text-xs font-mono text-primary animate-pulse">
                    {step === 'PROCESSING' ? 'ENVIANDO...' : 'ONLINE'}
                </div>
            </div>

            {/* Content */}
            <div className="p-6 md:p-8 min-h-[550px] flex flex-col relative font-mono text-sm">
                {/* Background Grid inside */}
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.05] pointer-events-none" />

                {/* Content Switching */}
                <div className="flex-1 relative z-10 overflow-y-auto pr-1 custom-scrollbar">
                    {history.map((line, i) => (
                        <div key={i} className="text-white/30 mb-1 text-xs">{line}</div>
                    ))}
                    <div className="mb-6" />

                    <AnimatePresence mode="wait">
                        {/* IDLE - Start */}
                        {step === 'IDLE' && (
                            <motion.div
                                key="idle"
                                initial="hidden" animate="visible" exit="exit" variants={variants}
                                className="flex flex-col items-center justify-center h-full space-y-6 pt-10"
                            >
                                <ShieldCheck className="w-16 h-16 text-primary/50" />
                                <div className="text-center space-y-2">
                                    <h3 className="text-xl text-white font-bold">DIAGNÓSTICO PERSONALIZADO</h3>
                                    <p className="text-white/60 max-w-xs mx-auto">Responda algumas perguntas para entendermos melhor sua operação.</p>
                                </div>
                                <NeonButton onClick={startDiagnosis} icon={Cpu}>COMEÇAR AGORA</NeonButton>
                            </motion.div>
                        )}

                        {/* STEP 1 - Identification */}
                        {step === 'IDENTIFY' && (
                            <motion.div
                                key="identify"
                                initial="hidden" animate="visible" exit="exit" variants={variants}
                                className="space-y-6"
                            >
                                <div className="border-l-2 border-primary pl-4">
                                    <h4 className="text-primary font-bold">ETAPA 1/4: IDENTIFICAÇÃO</h4>
                                    <p className="text-white/50">Como podemos te chamar?</p>
                                </div>
                                <div className="space-y-4">
                                    <InputField
                                        label="Seu Nome"
                                        value={formData.name}
                                        onChange={(e) => updateField('name', e.target.value)}
                                        placeholder="ex: João da Silva"
                                    />
                                    <InputField
                                        label="WhatsApp (com DDD)"
                                        value={formData.whatsapp}
                                        onChange={(e) => updateField('whatsapp', e.target.value)}
                                        placeholder="ex: 11 99999-9999"
                                    />
                                </div>
                                <div className="flex justify-end pt-4">
                                    <NeonButton onClick={() => nextStep('ROLE')} disabled={!canProceedIdentify}>
                                        CONTINUAR
                                    </NeonButton>
                                </div>
                            </motion.div>
                        )}

                        {/* STEP 2 - Role */}
                        {step === 'ROLE' && (
                            <motion.div
                                key="role"
                                initial="hidden" animate="visible" exit="exit" variants={variants}
                                className="space-y-6"
                            >
                                <div className="border-l-2 border-accent pl-4">
                                    <h4 className="text-accent font-bold">ETAPA 2/4: SEU CARGO</h4>
                                    <p className="text-white/50">Qual sua posição na empresa?</p>
                                </div>
                                <div className="space-y-4">
                                    <div className="flex flex-col gap-2">
                                        <label className="text-xs text-white/50">// CARGO</label>
                                        <div className="grid gap-3">
                                            {['Sócio / Dono', 'Diretor / C-Level', 'Gerente', 'Funcionário'].map((opt) => (
                                                <button
                                                    key={opt}
                                                    onClick={() => updateField('role', opt)}
                                                    className={`text-left p-4 w-full border rounded-sm transition-all flex justify-between items-center cursor-pointer ${formData.role === opt ? 'border-accent bg-accent/10 text-white' : 'border-white/10 hover:border-accent hover:bg-accent/5 text-white/60 hover:text-white'}`}
                                                >
                                                    <span>&gt; {opt}</span>
                                                    {formData.role === opt && <span className="text-accent font-bold">✓</span>}
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    {formData.role === 'Funcionário' && (
                                        <div className="flex flex-col gap-2 mt-4 p-4 border border-yellow-500/20 bg-yellow-500/5 rounded">
                                            <label className="text-xs text-yellow-400">// PODER DE DECISÃO</label>
                                            <p className="text-white/60 text-sm mb-2">Você tem autonomia para aprovar contratações de serviços?</p>
                                            <div className="grid grid-cols-2 gap-3">
                                                {['Sim', 'Não'].map((opt) => (
                                                    <button
                                                        key={opt}
                                                        onClick={() => updateField('hasDecisionPower', opt)}
                                                        className={`p-3 border rounded-sm transition-all cursor-pointer ${formData.hasDecisionPower === opt ? 'border-accent bg-accent/10 text-white' : 'border-white/10 hover:border-accent text-white/60'}`}
                                                    >
                                                        {opt}
                                                    </button>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                                <div className="flex justify-end pt-4">
                                    <NeonButton onClick={() => nextStep('COMPANY')} disabled={!canProceedRole}>
                                        CONTINUAR
                                    </NeonButton>
                                </div>
                            </motion.div>
                        )}

                        {/* STEP 3 - Company Info */}
                        {step === 'COMPANY' && (
                            <motion.div
                                key="company"
                                initial="hidden" animate="visible" exit="exit" variants={variants}
                                className="space-y-6"
                            >
                                <div className="border-l-2 border-primary pl-4">
                                    <h4 className="text-primary font-bold">ETAPA 3/4: SUA EMPRESA</h4>
                                    <p className="text-white/50">Conte um pouco sobre a estrutura atual.</p>
                                </div>
                                <div className="space-y-5">
                                    <InputField
                                        label="NOME DA SUA EMPRESA"
                                        value={formData.companyName}
                                        onChange={(e) => updateField("companyName", e.target.value)}
                                        placeholder="Ex: Revenue Engineering"
                                        autoFocus
                                    />
                                    <div className="flex flex-col gap-2">
                                        <label className="text-xs text-white/50">// TAMANHO DA EQUIPE</label>
                                        <select
                                            className="bg-black/20 border border-white/10 rounded-sm p-3 text-white font-mono text-sm outline-none focus:border-primary w-full"
                                            value={formData.teamSize}
                                            onChange={(e) => updateField('teamSize', e.target.value)}
                                        >
                                            <option value="" className="bg-void text-white/50">Selecione...</option>
                                            <option value="1-5" className="bg-void text-white">1 a 5 pessoas</option>
                                            <option value="6-20" className="bg-void text-white">6 a 20 pessoas</option>
                                            <option value="21-50" className="bg-void text-white">21 a 50 pessoas</option>
                                            <option value="50+" className="bg-void text-white">Mais de 50 pessoas</option>
                                        </select>
                                    </div>

                                    <div className="flex flex-col gap-2">
                                        <label className="text-xs text-white/50">// INVESTIMENTO MENSAL EM ADS</label>
                                        <select
                                            className="bg-black/20 border border-white/10 rounded-sm p-3 text-white font-mono text-sm outline-none focus:border-primary w-full"
                                            value={formData.adsInvestment}
                                            onChange={(e) => updateField('adsInvestment', e.target.value)}
                                        >
                                            <option value="" className="bg-void text-white/50">Selecione...</option>
                                            <option value="0" className="bg-void text-white">Não invisto em Ads</option>
                                            <option value="<5k" className="bg-void text-white">Até R$ 5.000</option>
                                            <option value="5k-20k" className="bg-void text-white">R$ 5.000 a R$ 20.000</option>
                                            <option value="20k-50k" className="bg-void text-white">R$ 20.000 a R$ 50.000</option>
                                            <option value="50k+" className="bg-void text-white">Acima de R$ 50.000</option>
                                        </select>
                                    </div>

                                    <div className="flex flex-col gap-2">
                                        <label className="text-xs text-white/50">// USO DE CRM</label>
                                        <select
                                            className="bg-black/20 border border-white/10 rounded-sm p-3 text-white font-mono text-sm outline-none focus:border-primary w-full"
                                            value={formData.usesCRM}
                                            onChange={(e) => updateField('usesCRM', e.target.value)}
                                        >
                                            <option value="" className="bg-void text-white/50">Selecione...</option>
                                            <option value="sim-uso" className="bg-void text-white">Sim, uso ativamente</option>
                                            <option value="sim-parcial" className="bg-void text-white">Sim, mas de forma parcial</option>
                                            <option value="nao-tenho" className="bg-void text-white">Não tenho CRM</option>
                                            <option value="planilhas" className="bg-void text-white">Uso planilhas</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="flex justify-end pt-4">
                                    <NeonButton onClick={() => nextStep('BOTTLENECK')} disabled={!canProceedCompany}>
                                        CONTINUAR
                                    </NeonButton>
                                </div>
                            </motion.div>
                        )}

                        {/* STEP 4 - Bottleneck */}
                        {step === 'BOTTLENECK' && (
                            <motion.div
                                key="bottleneck"
                                initial="hidden" animate="visible" exit="exit" variants={variants}
                                className="space-y-6"
                            >
                                <div className="border-l-2 border-accent pl-4">
                                    <h4 className="text-accent font-bold">ETAPA 4/4: SEU MAIOR DESAFIO</h4>
                                    <p className="text-white/50">Qual o principal gargalo da sua operação hoje?</p>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label className="text-xs text-white/50">// DESCREVA_SEU_GARGALO</label>
                                    <textarea
                                        className="bg-black/20 border border-white/10 rounded-sm p-3 h-32 text-white font-mono text-sm focus:border-primary focus:ring-1 focus:ring-primary/50 outline-none resize-none backdrop-blur-sm placeholder:text-white/10 w-full"
                                        value={formData.bottleneck}
                                        onChange={(e) => updateField('bottleneck', e.target.value)}
                                        placeholder="Ex: Perco muitos leads por falta de velocidade no atendimento..."
                                    />
                                </div>
                                <div className="flex justify-end pt-4">
                                    <NeonButton onClick={submit} disabled={!formData.bottleneck} className="w-full justify-center">
                                        ENVIAR DIAGNÓSTICO
                                    </NeonButton>
                                </div>
                            </motion.div>
                        )}

                        {/* PROCESSING */}
                        {step === 'PROCESSING' && (
                            <motion.div
                                key="processing"
                                initial="hidden" animate="visible" exit="exit" variants={variants}
                                className="flex flex-col items-center justify-center h-full space-y-6 pt-10"
                            >
                                <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin" />
                                <GlitchText text="PROCESSANDO_DADOS..." className="text-primary font-bold tracking-widest" />
                                <div className="text-xs text-white/40 font-mono text-center">
                                    Analisando suas respostas...
                                </div>
                            </motion.div>
                        )}

                        {/* SUCCESS */}
                        {step === 'SUCCESS' && (
                            <motion.div
                                key="success"
                                initial="hidden" animate="visible" exit="exit" variants={variants}
                                className="flex flex-col items-center justify-center h-full space-y-6 text-center pt-8"
                            >
                                <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center border border-green-500/50 shadow-[0_0_30px_rgba(16,185,129,0.3)]">
                                    <ShieldCheck className="w-10 h-10 text-green-500" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-white mb-2">DIAGNÓSTICO ENVIADO!</h3>
                                    <p className="text-white/60 text-sm max-w-xs mx-auto">Recebemos suas informações.<br />Entraremos em contato pelo WhatsApp em breve.</p>
                                </div>
                                <NeonButton onClick={() => window.location.reload()} variant="accent">
                                    FECHAR
                                </NeonButton>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
};
