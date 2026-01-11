export default async function handler(req, res) {
    // Apenas aceita POST
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const webhookUrl = process.env.N8N_WEBHOOK_URL; // Variável PRIVADA (sem VITE_)

    if (!webhookUrl) {
        console.error('[ERRO] N8N_WEBHOOK_URL não configurada');
        return res.status(500).json({ error: 'Webhook não configurado' });
    }

    try {
        const response = await fetch(webhookUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(req.body),
        });

        if (!response.ok) {
            throw new Error(`N8N retornou ${response.status}`);
        }

        const data = await response.json().catch(() => ({}));

        return res.status(200).json({ success: true, data });
    } catch (error) {
        console.error('[ERRO] Falha ao enviar para N8N:', error);
        return res.status(500).json({ error: 'Falha ao processar' });
    }
}
