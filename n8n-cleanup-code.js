// Copie e cole este código dentro de um nó "Code" no N8N
// Ele fica logo após o seu AGENTE DE IA.

return items.map(item => {
    // Tenta encontrar onde está o output (pode variar dependendo do nó)
    // Geralmente é 'output', 'text', 'content' ou 'response'
    let rawData = item.json.output || item.json.text || item.json.content || item.json.response;

    // Se não achou em nenhum campo comum, tenta usar o próprio item.json
    if (!rawData) {
        rawData = item.json;
    }

    // 1. Se for um Objeto e parecer o Schema (o erro que você mostrou)
    if (typeof rawData === 'object' && rawData.properties && rawData.type === 'object') {
        return {
            json: {
                error: "ERRO: O Agente retornou a definição do Schema em vez dos dados.",
                dica: "Verifique se você conectou o 'Structured Output Parser' na porta correta do Agente de IA (Chain) ou se o Prompt está correto."
            }
        };
    }

    // 2. Se for uma String (com ou sem markdown ```json)
    if (typeof rawData === 'string') {
        try {
            // Remove marcadores de markdown se existirem
            const cleanJson = rawData
                .replace(/^```json\s*/i, '') // Remove ```json do início
                .replace(/^```\s*/i, '')     // Remove ``` do início
                .replace(/\s*```$/i, '')     // Remove ``` do final
                .trim();

            const parsed = JSON.parse(cleanJson);

            // Retorna o objeto limpo
            return { json: parsed };
        } catch (error) {
            return {
                json: {
                    error: "Falha ao fazer parse do JSON",
                    raw_data: rawData
                }
            };
        }
    }

    // 3. Se já for um objeto limpo (o cenário ideal)
    if (typeof rawData === 'object') {
        // Se o output estiver aninhado (ex: output.output)
        if (rawData.output) {
            return { json: rawData.output };
        }
        return { json: rawData };
    }

    return { json: { error: "Formato desconhecido", raw: item.json } };
});
