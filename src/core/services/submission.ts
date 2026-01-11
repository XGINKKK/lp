export const TRACE_ID = crypto.randomUUID();

export interface DiagnosisData {
    name: string;
    whatsapp: string;
    role: string;
    hasDecisionPower: string;
    teamSize: string;
    adsInvestment: string;
    usesCRM: string;
    bottleneck: string;
}

export const submitDiagnosis = async (data: DiagnosisData) => {
    console.log(`%c[SECURE_CHANNEL] Enviando diagnóstico...`, "color: #06b6d4");
    console.log(`[TRACE_ID]: ${TRACE_ID}`);

    const payload = {
        ...data,
        trace_id: TRACE_ID,
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
