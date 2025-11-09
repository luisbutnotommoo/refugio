const CACHE_NAME = "refugio-cache-v1";
const urlsToCache = [
  "/",
  "/index.html",
  "/assets/main.css",
  "/assets/icon-192.svg",
  "/assets/icon-512.svg"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
