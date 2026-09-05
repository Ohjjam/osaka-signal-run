const CACHE = 'osaka-guide-local-v48';
const SHELL = [
  './transport48.css?v=48',
  './route-transport48.js?v=48',
  './curated-rich47.js?v=47',
  './stay-private.js?v=46', './stay-private.css?v=46',
  './curated-ui.js?v=48', './curated-v45.js?v=45', './curated.css?v=48',
  './move.js?v=44', './move-core.js?v=44', './move.css?v=44',
  './', './guide.html', './local-store.js?v=1', './manifest.webmanifest?v=40',
  './styles.css?v=40', './experience.css?v=40', './planner-v3.css?v=40', './vnext.css?v=40',
  './experience-data.js?v=40', './app.js', './experience.js?v=40',
  './osaka-expansion-v4.js', './osaka-expansion-v5.js', './osaka-chance-expansion-v7.js',
  './osaka-hotels-live-v6.js?v=40', './osaka-photo-manifest-v13.js',
  './osaka-vnext-data.js?v=40', './vnext-core.js?v=40', './planner-v3.js?v=45', './vnext.js?v=48',
  './today-core.js?v=44', './today.js?v=45', './guide-theme.css?v=42', './today.css?v=43',
  './vendor/leaflet/leaflet.css', './vendor/leaflet/leaflet.js', './assets/hotel-livin-nanbaminami.jpg'
];

self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(SHELL)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', event => {
  event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(key => key.startsWith('osaka-guide-') && key !== CACHE).map(key => caches.delete(key)))).then(() => self.clients.claim()));
});

self.addEventListener('fetch', event => {
  const request = event.request;
  if (request.method !== 'GET') return;
  const url = new URL(request.url);
  if (url.pathname.includes('/api/') || url.hostname.includes('tile.openstreetmap.org') || url.hostname.includes('google.com')) return;
  event.respondWith(fetch(request).then(response => {
    if (response.ok && url.origin === self.location.origin) caches.open(CACHE).then(cache => cache.put(request, response.clone()));
    return response;
  }).catch(() => caches.match(request).then(cached => cached || (request.mode === 'navigate' ? caches.match('./guide.html') : Response.error()))));
});
