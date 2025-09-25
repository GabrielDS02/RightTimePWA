// Verifica se o navegador do usuário suporta Service Workers
// Alguns navegadores mais antigos não suportam SW, então essa verificação evita erros
if ('serviceWorker' in navigator) {

    // Registra o Service Worker no navegador
    // O caminho '/service-worker.js' deve ser relativo à raiz do site
    navigator.serviceWorker.register('/service-worker.js')
        
        // Se o registro for bem-sucedido, executa a função dentro do .then()
        .then(registration => {
            // 'registration.scope' mostra qual parte do site o SW vai controlar
            // Aqui exibimos no console para confirmar que o SW foi registrado corretamente
            console.log('Service Worker registrado com sucesso:', registration.scope);
        })
        
        // Se ocorrer algum erro ao registrar o SW, executa a função dentro do .catch()
        .catch(error => {
            // Mostra no console que houve falha no registro e qual foi o erro
            console.log('Falha ao registrar Service Worker:', error);
        });
}
