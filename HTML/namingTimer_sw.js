const VERSION = 'v5';
self.addEventListener('install', event => {
  console.log('service worker install ...');
  event.waitUntil(
    caches.open(VERSION).then((cache) => {
      return cache.addAll([
        // './hogehoge',
        './namingTimer.html',
        './manifest.json',
        './validator.13.7.0.min.js',
        './1.png',
      ]);
    })
    .then(res=>  console.log("foo1") )
  );
  event.waitUntil(self.skipWaiting());
});
self.addEventListener('activate', async event => {
  await event.waitUntil(self.clients.claim());
  console.info('activate', event);
  console.log("bar");
});
// self.addEventListener('fetch', event => {
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

self.addEventListener('push', event => {
  event.waitUntil(
    (async () => {
      event.ports[0].postMessage({
        msg: "Hey I just got a push from you!",
        data: e.data
      });
    }))
});
// caches.keys().forEach(cache=>caches.delete(cache));


addEventListener('fetch', event => {
  // event.waitUntil(
  //   (async () => {
  //   }))
  event.waitUntil(
    (async () => {
      if (!event.clientId) return;
      console.info("event.clientId", await event.clientId);
      if (!(await clients.get(event.clientId))) return;
      console.info("clients.get(event.clientId)", await clients.get(event.clientId));
      (await clients.get(event.clientId)).postMessage({
        msg: "fetch!",
        // msg: [await clients.get(event.clientId), await clients.get(event.clientId)],
        url: event.request.url
      });
    })()
  )

  // console.info("event.request", event.request);
  // event.respondWith(
  //   caches.match(event.request).then(cacheResponse => {
  //     console.info("cacheResponse", cacheResponse);
  //     return cacheResponse || fetch(event.request).then(response => {
  //       console.info("response", response);
  //       return caches.open(VERSION).then(cache => {
  //         cache.put(event.request, response.clone());
  //         return response;
  //       });  
  //     });
  //   })
  // );
});


// console.log((await navigator.serviceWorker.ready).waiting);