// Bare minimum code required to satisfy PWA installation criteria
self.addEventListener('fetch', (event) => {
  // Pass-through network wrapper
  event.respondWith(fetch(event.request));
});