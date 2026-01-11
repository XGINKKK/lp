import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
const PORT = process.env.PORT || 3000;

// Parse JSON bodies
app.use(express.json());

// Serve static files from the build directory
app.use(express.static(path.join(__dirname, 'dist')));

// API Proxy for N8N Webhook
app.post('/api/submit', async (req, res) => {
    const webhookUrl = process.env.N8N_WEBHOOK_URL;

    if (!webhookUrl) {
        console.error('[SERVER ERROR] N8N_WEBHOOK_URL is not defined in environment variables.');
        return res.status(500).json({ error: 'Server misconfiguration: Missing Webhook URL' });
    }

    try {
        console.log(`[PROXY] Forwarding request to N8N...`);

        const response = await fetch(webhookUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(req.body)
        });

        const contentType = response.headers.get("content-type");
        const data = contentType && contentType.includes("application/json")
            ? await response.json()
            : await response.text();

        if (!response.ok) {
            throw new Error(`Upstream N8N returned ${response.status}: ${data}`);
        }

        console.log(`[PROXY] Success: ${response.status}`);
        res.status(200).json({ success: true, upstream: data });

    } catch (error) {
        console.error('[PROXY ERROR]', error);
        res.status(500).json({ error: 'Failed to communicate with N8N' });
    }
});

// Handle SPA routing: serve index.html for any unknown route
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`> Server running on http://localhost:${PORT}`);
    console.log(`> Environment: ${process.env.NODE_ENV || 'development'}`);
});
