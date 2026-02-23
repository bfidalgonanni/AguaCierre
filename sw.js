const CACHE_NAME = 'aqua-control-v1';
const ASSETS = [
  '/AguaCierre/',
  '/AguaCierre/index.html',
  '/AguaCierre/manifest.json',
  '/AguaCierre/icon.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS))
  );
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(clients.claim());
});

self.addEventListener('fetch', event => {
  event.respondWith(
    fetch(event.request).catch(() => caches.match(event.request))
  );
});
