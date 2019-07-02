importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/0908bf33022b1c7d7f56.js",
    "revision": "f4f69a7d017bd996fc33c6830638b963"
  },
  {
    "url": "/_nuxt/0ae80841d7ed75812481.js",
    "revision": "74e8aecd491c505b66e4a58f6092510a"
  },
  {
    "url": "/_nuxt/3e248c0c56ecc47d9824.js",
    "revision": "e7dc6da5683e2a77ce6daa57dadc9779"
  },
  {
    "url": "/_nuxt/3f06e3234a3fab5c2fbe.js",
    "revision": "bccddc2555956019a146479808546636"
  },
  {
    "url": "/_nuxt/40c22f98c7ce7bb8b004.js",
    "revision": "ec293a3d6e0fb917e924a69086088ba7"
  },
  {
    "url": "/_nuxt/6c3022a52afebb96f77c.js",
    "revision": "9576945a6f4046133ea36eb0de10466d"
  },
  {
    "url": "/_nuxt/bd8d4699a4e7b741d698.js",
    "revision": "44fad8305aa2c2187dd37b2eb4e51d80"
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
