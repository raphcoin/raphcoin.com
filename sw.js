importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/0908bf33022b1c7d7f56.js",
    "revision": "f4f69a7d017bd996fc33c6830638b963"
  },
  {
    "url": "/_nuxt/318559666c5066a13f34.js",
    "revision": "7fffb594077201e08df704e882bb12f2"
  },
  {
    "url": "/_nuxt/904e3fda1cd06098be74.js",
    "revision": "06ce8621af9ed78d144c36fa94cbfb00"
  },
  {
    "url": "/_nuxt/b4aa743a29d4407a6438.js",
    "revision": "e1638cfb63e60704e22ddc39f52ff54a"
  },
  {
    "url": "/_nuxt/bd8d4699a4e7b741d698.js",
    "revision": "44fad8305aa2c2187dd37b2eb4e51d80"
  },
  {
    "url": "/_nuxt/c37e509394089acbb99c.js",
    "revision": "f0138d0029aea490b77c2bf0180b4da2"
  },
  {
    "url": "/_nuxt/dbbdfabe6e41a4278789.js",
    "revision": "28fede8aa36a319021ed89d79b611001"
  }
], {
  "cacheId": "raphcoin",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')
