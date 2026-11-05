// Минимальный Service Worker для прохождения проверок PWA
self.addEventListener('fetch', (event) => {
  event.respondWith(
    fetch(event.request) // Просто направляет все запросы напрямую в сеть
  );
});
