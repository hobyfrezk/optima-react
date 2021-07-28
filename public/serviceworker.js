const self = this;

const CACHE_NAME = "site-static";

const files = fetch("./asset-manifest.json")
	.then((response) => response.json().files)
	.then((json) => console.log(json));
const assetsToCache = [];

files.forEach((fileName) => assetsToCache.push(files[fileName]));
console.log(assetsToCache);

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
			.then((cacheRes) => cacheRes || fetch(event.request))
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
