import { TRACE_ID } from "./submission"; // Import existing constant if possible, or re-declare but prefer keeping logic intact.
// Actually checking previous file content... TRACE_ID is exported.

export const TRACE_ID_CONST = crypto.randomUUID();

export interface DiagnosisData {
    name: string;
    whatsapp: string;
    role: string;
    hasDecisionPower: string;
    companyName: string; // [NEW]
    teamSize: string;
    adsInvestment: string;
    usesCRM: string;
    bottleneck: string;
}

export const submitDiagnosis = async (data: DiagnosisData) => {
    console.log(`%c[SECURE_CHANNEL] Enviando diagnóstico...`, "color: #06b6d4");

    // TRACE_ID logic from previous turns
    const currentTraceId = crypto.randomUUID();
    console.log(`[TRACE_ID]: ${currentTraceId}`);

    const payload = {
        ...data,
        trace_id: currentTraceId,
        timestamp: new Date().toISOString()
    };

    // Chama a API serverless (não expõe a URL do N8N)
    const response = await fetch("/api/submit", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
    });

    if (!response.ok) {
        const error = await response.json().catch(() => ({}));
        console.error(`[ERRO] API retornou status ${response.status}`, error);
        throw new Error(`Erro ao enviar: ${response.status}`);
    }

    console.log(`%c[SECURE_CHANNEL] Dados enviados com sucesso!`, "color: #10b981");

    return { success: true, timestamp: new Date().toISOString() };
};
