document.addEventListener("DOMContentLoaded", () => {
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('/RightTimePWA/service-worker.js')
            .then(registration => {
                console.log('Service Worker registrado com sucesso:', registration.scope);
            })
            .catch(error => {
                console.log('Falha ao registrar Service Worker:', error);
            });
    }
});
