# Template de Mensagem para Evolution API (N8N)

Copie e cole este texto no campo "Message" do nó da Evolution API / HTTP Request:

```text
🚨 *NOVO LEAD QUALIFICADO* 🚨

👤 *Nome:* {{ $json.primeiro_nome_lead }}
🏆 *Score:* {{ $json.score_0_a_100 }}/100
🔥 *Prioridade:* {{ $json.prioridade }}

📝 *Resumo do Caso:*
{{ $json.analise_tecnica }}

💡 *Sugestão da IA:*
"{{ $json.sugestao_mensagem_whatsapp }}"

📲 *Link para Iniciar Conversa:*
https://wa.me/{{ $('Webhook').item.json.body.whatsapp.replace(/\D/g, '') }}
```

**Nota:** Substituí `$('Limpar_Dados')...` por `$('Webhook').item.json.body.whatsapp` (com regex para limpar números), assumindo que o telefone vem do Webhook inicial. Ajuste o nome do nó se necessário (ex: se seu nó chama 'Webhook', 'Edit Fields' ou 'Limpar_Dados').
