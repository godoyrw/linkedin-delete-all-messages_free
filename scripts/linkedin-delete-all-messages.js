async function limparMensagensLinkedIn() {
    const delay = (ms) => new Promise(res => setTimeout(res, ms));
    console.log("🧹 Iniciando limpeza automática...");

    while (true) {
        // 1. Localiza o menu de opções (três pontinhos)
        let menuBtn = document.querySelector('button[control-name="topcard_actions_dropdown"]') || 
                      document.querySelector('.msg-thread-actions__control');
        
        if (!menuBtn) {
            console.log("🏁 Nenhuma conversa ativa encontrada ou fim da lista.");
            break;
        }
        
        menuBtn.click();
        await delay(800);

        // 2. Busca a opção "Excluir" no menu (resiliente a idiomas e mudanças de classe)
        let deleteOption = Array.from(document.querySelectorAll('.artdeco-dropdown__item, [role="button"]'))
            .find(el => {
                const text = el.innerText.trim();
                return text === 'Excluir' || text === 'Delete' || text.includes('Excluir conversa');
            });

        if (deleteOption) {
            deleteOption.click();
            await delay(1000); 

            // 3. Localiza e clica no botão de confirmação azul do modal
            let buttons = Array.from(document.querySelectorAll('button'));
            let confirmBtn = buttons.find(b => 
                (b.innerText.trim() === 'Excluir' || b.innerText.trim() === 'Delete') && 
                b.classList.contains('artdeco-button--primary')
            );
            
            if (confirmBtn) {
                confirmBtn.focus();
                confirmBtn.click();
                console.log("✅ Conversa removida. Processando próxima...");
                await delay(2000); // Tempo necessário para o DOM atualizar a lista lateral
            }
        } else {
            console.log("⚠️ Opção 'Excluir' não encontrada. Verifique se a conversa está selecionada.");
            break;
        }
    }
}

limparMensagensLinkedIn();