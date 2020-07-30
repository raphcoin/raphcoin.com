importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/0a7ec759518a5e937df0.js",
    "revision": "3121ea0feee56ee5dd01f29cbedae2d2"
  },
  {
    "url": "/_nuxt/133ba854c39c322da552.js",
    "revision": "b10a4afced8236beeb3511567c55e02b"
  },
  {
    "url": "/_nuxt/1c856f700e645ab9a072.js",
    "revision": "17f41b26d38787e50332d561cf8e8428"
  },
  {
    "url": "/_nuxt/624db0ccb4324e08fdef.js",
    "revision": "da57331a816af494c2d65c2c310a60a8"
  },
  {
    "url": "/_nuxt/69d54cfaaaf9a0c793f1.js",
    "revision": "c068c34ca4fec81fa731d09d2eef10de"
  },
  {
    "url": "/_nuxt/710942225ec7ce22b626.js",
    "revision": "00c85618cc7a34824ae401c61ff3660e"
  },
  {
    "url": "/_nuxt/7c44314b65aeb192da95.js",
    "revision": "b60715535efd44fc9a700ca3a0b83b84"
  },
  {
    "url": "/_nuxt/8c1dc01dbb7d3c21c339.js",
    "revision": "c5eae143b93001f094e39af6b1e2e785"
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
