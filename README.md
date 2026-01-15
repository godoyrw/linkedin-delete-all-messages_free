# LinkedIn Delete All Messages 🧹

Automação em JavaScript para exclusão em massa de conversas no LinkedIn, executada diretamente pelo Console do Navegador.
Criado para acelerar a produtividade e contornar a ausência de um botão nativo de “Excluir Tudo”.

🚀 Visão Geral

O LinkedIn não oferece um recurso oficial para remover várias conversas de uma vez.
Este script automatiza a tarefa repetitiva de:

    Abrir o menu da conversa ativa.
    Selecionar a opção de exclusão.
    Confirmar a exclusão no modal de segurança automaticamente.
    Ele é resiliente a mudanças de interface e funciona em diferentes idiomas.

🧩 Funcionalidades

    Localização automática do menu de opções da conversa.
    Detecção da opção “Excluir / Delete”, independente do idioma.
    Clique automático no botão de confirmação.
    Loop contínuo até remover todas as conversas selecionáveis.
    Delays ajustáveis para diferentes velocidades de rede.
    Uso de seletores por texto, tornando o script mais resistente a mudanças no DOM.

📦 Como usar

    Acesse suas Mensagens do LinkedIn.
    Pressione F12 (ou Ctrl + Shift + I no Linux) para abrir o DevTools.
    Vá até a aba Console.
    Clique manualmente na primeira conversa que deseja excluir.

Cole o script abaixo e pressione Enter:

```javascript
async function limparMensagensLinkedIn(){const e=e=>new Promise((o=>setTimeout(o,e)));for(console.log("🧹 Iniciando limpeza automática...");;){let o=document.querySelector('button[control-name="topcard_actions_dropdown"]')||document.querySelector(".msg-thread-actions__control");if(!o){console.log("🏁 Nenhuma conversa ativa encontrada ou fim da lista.");break}o.click(),await e(800);let n=Array.from(document.querySelectorAll('.artdeco-dropdown__item, [role="button"]')).find((e=>{const o=e.innerText.trim();return"Excluir"===o||"Delete"===o||o.includes("Excluir conversa")}));if(!n){console.log("⚠️ Opção 'Excluir' não encontrada. Verifique se a conversa está selecionada.");break}{n.click(),await e(1e3);let o=Array.from(document.querySelectorAll("button")).find((e=>("Excluir"===e.innerText.trim()||"Delete"===e.innerText.trim())&&e.classList.contains("artdeco-button--primary")));o&&(o.focus(),o.click(),console.log("✅ Conversa removida. Processando próxima..."),await e(2e3))}}}limparMensagensLinkedIn();
```

🔧 Troubleshooting

    Problema / Solução
    Script para inesperadamente	/ Mantenha a aba ativa. Navegadores pausam scripts em abas em segundo plano.
    Modal demora a aparecer	/ Aumente os delays (800 → 1200, 1000 → 1500, etc.).
    Opção "Excluir" não encontrada / Certifique-se de que a conversa está selecionada.
