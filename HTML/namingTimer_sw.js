const version = 'v1';
self.addEventListener('install', (event) => {
  console.log('service worker install ...');
  event.waitUntil(
    caches.open('v1').then((cache) => {
      return cache.addAll([
        './hogehoge',
        // './namingTimer.html',
        './manifest.json',
        './validator.13.7.0.min.js',
        './1.png',
      ]);
    })
    .then(res=>  console.log("foo1") )
  );
  console.log("foo2");
});
self.addEventListener('activate', (event) => {
  console.info('activate', event);
  console.log("bar");
});
// self.addEventListener('fetch', function(event) {
//   console.log('fetch', event.request.url);
//   console.log("buz");
//   event.respondWith(
//     caches.match(event.request).then(function(cacheResponse) {
//       return cacheResponse || fetch(event.request).then(function(response) {
//         return caches.open('v1').then(function(cache) {
//           cache.put(event.request, response.clone());
//           return response;
//         });  
//       });
//     })
//   );
// });



self.addEventListener('message', e => {
  console.log(`I got a message from browser. ${e.data}`);
});



// self.addEventListener('fetch', e => {
//   console.log("foo")
// })

self.addEventListener('push', e => {
  e.ports[0].postMessage({
    msg: "Hey I just got a push from you!",
    data: e.data
  });
});
// caches.keys().forEach(cache=>caches.delete(cache));


addEventListener('fetch', event => {
  event.waitUntil(async function() {
    if (!event.clientId) return;
    const client = await clients.get(event.clientId);
    if (!client) return;
    client.postMessage({
      msg: "私はあなたからフェッチされましたよ！",
      url: event.request.url
    });
  }());
});