// Used to create an offline cache in the browser & give us access to it from JS
var cacheName = "hello-pwa";

// List of files that need to be cached
var filesToCache = ["/", "index.html", "/css/style.css", "/js/main.js"];

// Function to install/start the service worker and cache all of the app's content
self.addEventListener("install", function (e) {
  e.waitUntil(
    caches.open(cacheName).then(function (cache) {
      return cache.addAll(filesToCache);
    })
  );
});

// Function to serve(or load) cached content when offline
self.addEventListener("fetch", function (e) {
  e.respondWith(
    caches.match(e.request).then(function (response) {
      return response || fetch(e.request);
    })
  );
});
