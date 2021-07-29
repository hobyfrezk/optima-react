const self = this;

const CACHE_NAME = "site-static";

const assetsToCache = [
	"/static/css/main.18cd6d76.chunk.css",
	"/static/js/main.3c1bbce8.chunk.js",
	"/static/js/main.3c1bbce8.chunk.js.map",
	"/static/js/runtime-main.206861e8.js",
	"/static/js/runtime-main.206861e8.js.map",
	"/static/js/2.9b587647.chunk.js",
	"/static/js/2.9b587647.chunk.js.map",
	"/index.html",
	"/static/css/main.18cd6d76.chunk.css.map",
	"/static/js/2.9b587647.chunk.js.LICENSE.txt"
];

// install serviceworker
self.addEventListener("install", (event) => {
	event.waitUntil(
		caches.open(CACHE_NAME).then((cache) => {
			console.log("Opened cache");
			return cache.addAll(assetsToCache);
		})
	);
});

// listen for requests, adopt offline-first concept
self.addEventListener("fetch", (event) => {
	event.respondWith(
		caches
			.match(event.request)
			.then((cacheRes) => cacheRes || caches.match("/index.html"))
	);
});

// activate the serviceworker: remove outdated cache and only keep the newest one
self.addEventListener("activate", (event) => {
	const cacheWhiteList = [];
	cacheWhiteList.push(CACHE_NAME);

	event.waitUntil(
		// use cacheWhiteList
		caches.keys().then((cacheNames) =>
			Promise.all(
				cacheNames.map((cacheName) => {
					return !cacheWhiteList.includes(cacheName)
						? caches.delete(cacheName)
						: null;
				})
			)
		)
	);
});
