// NAR Home service worker: makes the app installable and lets it start without a connection.
// Network first, so a new version on the server is used immediately; the cache is only the offline fallback.
const CACHE = "nar-home-" + (new URL(location.href).searchParams.get("v") || "1");
const SHELL = [
  "./",
  "index.html",
  "app.js",
  "styles.css",
  "manifest.webmanifest",
  "logo-128.png",
  "icon-192.png",
  "icon-512.png",
  "icon-maskable-512.png",
  "apple-touch-icon.png",
];

self.addEventListener("install", (e) => {
  e.waitUntil(
    caches
      .open(CACHE)
      .then((c) => c.addAll(SHELL))
      .then(() => self.skipWaiting()),
  );
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches
      .keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim()),
  );
});

self.addEventListener("fetch", (e) => {
  const req = e.request,
    url = new URL(req.url);
  // Google sign-in and Drive requests are never cached; only the app itself and the PDF viewer library.
  if (req.method !== "GET" || (url.origin !== location.origin && url.hostname !== "cdn.jsdelivr.net")) return;
  e.respondWith(
    fetch(req)
      .then((res) => {
        if (res.ok) {
          const copy = res.clone();
          caches.open(CACHE).then((c) => c.put(req, copy));
        }
        return res;
      })
      .catch(() =>
        caches
          .match(req, { ignoreSearch: url.origin === location.origin })
          .then((hit) => hit || (req.mode === "navigate" ? caches.match("index.html") : Response.error())),
      ),
  );
});
