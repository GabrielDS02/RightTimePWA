self.addEventListener("install", event => 
  {
  event.waitUntil(
    caches.open("app-right_time-cache").then(cache => 
      {
      return cache.addAll([
        "index.html",
        "manifest.json",
        "icone-192.png",
        "icon-512.png",
        "ConexãoOfline.js",
        "horasDoDia.css",
        "horasDoDia.js",
        "paisagemDeFundo.jpg",
        "videos/madrugada.mp4",
        "videos/manha.mp4",
        "videos/noite.mp4",
        "videos/tarde.mp4"
      ]);
    })
  );
});


// Intercepta requisições e tenta servir do cache
self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});

// Limpa caches antigos quando ativado
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.map(key => caches.delete(key)))
    )
  );
});