const CACHE='nordic-habit-v9';
self.addEventListener('install',event=>event.waitUntil(self.skipWaiting()));
self.addEventListener('activate',event=>event.waitUntil((async()=>{
 const keys=await caches.keys();
 await Promise.all(keys.filter(k=>k.startsWith('habit-space-')||k.startsWith('nordic-habit-')).map(k=>caches.delete(k)));
 await self.registration.unregister();
 await self.clients.claim();
})()));
// No offline HTML cache: always let the browser request the latest GitHub Pages file.
