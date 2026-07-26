const CACHE = 'arimbi-v3.1';
const ASSETS = ['/', '/index.html', '/partner.html', '/style.css', '/app.js', '/manifest.json', '/icons/icon-192.svg', '/icons/icon-512.svg'];

self.addEventListener('install', e => {
    e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)));
    self.skipWaiting();
});

self.addEventListener('activate', e => {
    e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)))));
    self.clients.claim();
});

self.addEventListener('fetch', e => {
    e.respondWith(caches.match(e.request).then(r => r || fetch(e.request)));
});

self.addEventListener('push', e => {
    const d = e.data ? e.data.json() : { title: '🌸 ARIMBI', body: 'Reminder!' };
    e.waitUntil(self.registration.showNotification(d.title, {
        body: d.body, icon: 'icons/icon-192.svg', badge: 'icons/icon-192.svg',
        vibrate: [200, 100, 200], tag: 'arimbi-reminder'
    }));
});

self.addEventListener('notificationclick', e => {
    e.notification.close();
    e.waitUntil(clients.openWindow('/'));
});