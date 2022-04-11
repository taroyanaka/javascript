const version = 'v1';

// インストール時にキャッシュする
self.addEventListener('install', (event) => {
  console.log('service worker install ...');

  // キャッシュ完了までインストールが終わらないように待つ
  event.waitUntil(
    caches.open('v1').then((cache) => {
      return cache.addAll([
        './namingTimer.html',
        './1.png',
      ]);
    })
  );
});


self.addEventListener('activate', (event) => {
  console.info('activate', event);
  caches.keys().forEach(cache=>caches.delete(cache));
});

self.addEventListener('fetch', function(event) {
  console.log('fetch', event.request.url);
  event.respondWith(
    caches.match(event.request).then(function(cacheResponse) {
      return cacheResponse || fetch(event.request).then(function(response) {
        return caches.open('v1').then(function(cache) {
          cache.put(event.request, response.clone());
          return response;
        });  
      });
    })
  );

});