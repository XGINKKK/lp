import { useState } from "react";
import { submitDiagnosis } from "@/core/services/submission";
import type { DiagnosisData } from "@/core/services/submission";

export type TerminalStep = "IDLE" | "IDENTIFY" | "ROLE" | "COMPANY" | "BOTTLENECK" | "PROCESSING" | "SUCCESS";

export const useTerminalLogic = () => {
    const [step, setStep] = useState<TerminalStep>("IDLE");
    const [history, setHistory] = useState<string[]>([
        "> SISTEMA_PRONTO...",
        "> AGUARDANDO_INICIO..."
    ]);

    const [formData, setFormData] = useState<DiagnosisData>({
        name: "",
        whatsapp: "",
        role: "",
        hasDecisionPower: "",
        teamSize: "",
        adsInvestment: "",
        usesCRM: "",
        bottleneck: ""
    });

    const addLog = (log: string) => {
        setHistory(prev => [...prev, `> ${log}`]);
    };

    const nextStep = (next: TerminalStep) => {
        addLog(`TRANSIÇÃO: ${next}`);
        setStep(next);
    };

    const updateField = (field: keyof DiagnosisData, value: string) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    const startDiagnosis = () => {
        addLog("INICIANDO_DIAGNÓSTICO...");
        setStep("IDENTIFY");
    };

    const submit = async () => {
        addLog("PROCESSANDO_DADOS...");
        setStep("PROCESSING");
        try {
            await submitDiagnosis(formData);
            addLog("ENVIO_COMPLETO.");
            setStep("SUCCESS");
        } catch {
            addLog("ERRO: CONEXÃO_RECUSADA.");
        }
    };

    return { step, formData, history, nextStep, updateField, startDiagnosis, submit };
};
