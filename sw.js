/* PassRoute service worker — offline support (stale-while-revalidate).
   Bump CACHE when you ship new content so clients refresh. */
const CACHE = 'passroute-v4';
const ASSETS = [
  './', 'index.html',
  'questions.js', 'translations.js', 'endorsements.js', 'questions-extra.js', 'pretrip.js',
  'logo.png', 'icon-192.png', 'icon-512.png', 'apple-touch-icon.png', 'favicon-32.png', 'favicon-64.png',
  'manifest.json', 'Texas-CDL-Study-Guide.pdf'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE)
      .then(c => Promise.allSettled(ASSETS.map(a => c.add(a))))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  let url;
  try { url = new URL(e.request.url); } catch (_) { return; }
  if (url.origin !== self.location.origin) return; // let cross-origin (handbook, CDNs) hit the network

  e.respondWith(
    caches.open(CACHE).then(cache =>
      cache.match(e.request).then(cached => {
        const network = fetch(e.request)
          .then(resp => { if (resp && resp.status === 200) cache.put(e.request, resp.clone()); return resp; })
          .catch(() => cached);
        return cached || network;
      })
    )
  );
});
