// importScripts('import.js');


let CACHE_VERSION = 109;

const urlsToCache = [
    "./index.html",
    "./sw.js"
];

async function cacheOpenAddAll() {
    const cache = await caches.open(CACHE_VERSION);
    return cache.addAll(urlsToCache);
}

self.addEventListener('install', (event) => {
    event.waitUntil(cacheOpenAddAll());
    console.log("install");
});

async function cacheDelete() {
    const keyList = await caches.keys();
    await Promise.all(
        keyList.map((key) => {
            if (key === (CACHE_VERSION).toString()) { return; }
            return caches.delete(key);
        })
    )
}

self.addEventListener('activate', event => {
    event.waitUntil(cacheDelete() );
    console.log("activate");
});

async function fetchFromCacheOrNot(event) {
    const r = await caches.match(event.request);
    console.log(`[Service Worker] Fetching resource: ${event.request.url}`);
    if (r) return r;
    const response = await fetch(event.request);
    const cache = await caches.open(CACHE_VERSION);
    console.log(`[Service Worker] Caching new resource: ${event.request.url}`);
    cache.put(event.request, response.clone());
    return response;
}
self.addEventListener('fetch', event => {
    event.respondWith(fetchFromCacheOrNot(event));
    console.log("fetch");
});











self.onmessage = (msg) => {
    console.log(`ver is ${CACHE_VERSION}message from main received in worker:`, msg);
};