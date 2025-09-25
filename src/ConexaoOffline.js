// Verifica se o navegador do usuário suporta Service Workers
// Nem todos os navegadores antigos suportam SW, então essa checagem evita erros
if ('serviceWorker' in navigator) {

    // Tenta registrar o Service Worker
    // O caminho '/RightTimePWA/service-worker.js' deve ser o caminho correto para o seu SW
    navigator.serviceWorker.register('/RightTimePWA/service-worker.js')
        
        // Se o registro for bem-sucedido, executa a função dentro do .then()
        .then(registration => {
            // registration.scope mostra o escopo que o SW vai controlar
            // Aqui apenas exibimos no console para saber que o SW foi registrado
            console.log('Service Worker registrado com sucesso:', registration.scope);
        })
        
        // Se ocorrer algum erro ao registrar o SW, executa a função dentro do .catch()
        .catch(error => {
            // Mostra no console que houve falha no registro do SW e qual foi o erro
            console.log('Falha ao registrar Service Worker:', error);
        });
}
