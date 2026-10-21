/* Irrigua — service worker
   Páginas: busca na internet primeiro (assim uma versão nova aparece logo) e usa a cópia guardada sem internet.
   Fotos, fontes e arquivos fixos: usa a cópia guardada e atualiza quando der. */
var CACHE = 'irrigua-v3';
var SHELL = [
  './', 'index.html', 'especies.js', 'logo.html', 'icone.svg', 'manifest.webmanifest',
  'icon-192.png', 'icon-512.png',
  'fotos/aglaonema.jpg', 'fotos/palmeira.jpg', 'fotos/lirio.jpg', 'fotos/comigo.jpg', 'fotos/bambu.jpg', 'fotos/dracena.jpg'
];

self.addEventListener('install', function (e) {
  e.waitUntil(caches.open(CACHE).then(function (c) { return c.addAll(SHELL); }).then(function () { return self.skipWaiting(); }));
});

self.addEventListener('activate', function (e) {
  e.waitUntil(caches.keys().then(function (keys) {
    return Promise.all(keys.filter(function (k) { return k !== CACHE; }).map(function (k) { return caches.delete(k); }));
  }).then(function () { return self.clients.claim(); }));
});

self.addEventListener('fetch', function (e) {
  var req = e.request;
  if (req.method !== 'GET') return;
  var url = new URL(req.url);
  var sameOrigin = url.origin === self.location.origin;
  var isFont = /fonts\.(googleapis|gstatic)\.com$/.test(url.hostname);
  if (!sameOrigin && !isFont) return;

  var isPage = req.mode === 'navigate' || (sameOrigin && /\.(html|js|webmanifest)$/.test(url.pathname)) || url.pathname.endsWith('/');
  if (isPage) {
    e.respondWith(fetch(req).then(function (res) {
      var copy = res.clone(); caches.open(CACHE).then(function (c) { c.put(req, copy); });
      return res;
    }).catch(function () {
      return caches.match(req).then(function (r) { return r || caches.match('index.html'); });
    }));
    return;
  }
  e.respondWith(caches.match(req).then(function (hit) {
    var net = fetch(req).then(function (res) {
      if (res && (res.ok || res.type === 'opaque')) { var copy = res.clone(); caches.open(CACHE).then(function (c) { c.put(req, copy); }); }
      return res;
    }).catch(function () { return hit; });
    return hit || net;
  }));
});
