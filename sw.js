importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/0908bf33022b1c7d7f56.js",
    "revision": "f4f69a7d017bd996fc33c6830638b963"
  },
  {
    "url": "/_nuxt/3f06e3234a3fab5c2fbe.js",
    "revision": "bccddc2555956019a146479808546636"
  },
  {
    "url": "/_nuxt/5536ba53d62f227605a7.js",
    "revision": "f8231e1092f55875b1cbf9bb83a5109f"
  },
  {
    "url": "/_nuxt/6c3022a52afebb96f77c.js",
    "revision": "9576945a6f4046133ea36eb0de10466d"
  },
  {
    "url": "/_nuxt/b66a3725120dffdde709.js",
    "revision": "233575a395453e1c89ddb1ed43c57fd2"
  },
  {
    "url": "/_nuxt/bd8d4699a4e7b741d698.js",
    "revision": "44fad8305aa2c2187dd37b2eb4e51d80"
  },
  {
    "url": "/_nuxt/c1b7fa4c3432754f2a6a.js",
    "revision": "e10d0018b4514c4b93522c7e15630a7c"
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
