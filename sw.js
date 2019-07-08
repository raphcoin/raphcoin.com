importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/133ba854c39c322da552.js",
    "revision": "b10a4afced8236beeb3511567c55e02b"
  },
  {
    "url": "/_nuxt/1be40318a4de1c2c27a5.js",
    "revision": "59b5b19a847f6da79a8008711c2dc9bc"
  },
  {
    "url": "/_nuxt/1c856f700e645ab9a072.js",
    "revision": "17f41b26d38787e50332d561cf8e8428"
  },
  {
    "url": "/_nuxt/69d54cfaaaf9a0c793f1.js",
    "revision": "c068c34ca4fec81fa731d09d2eef10de"
  },
  {
    "url": "/_nuxt/7729b13b1eeb80bca4f6.js",
    "revision": "ada327e920d34b745060c5c6a71abcb4"
  },
  {
    "url": "/_nuxt/774e576d30bc03cbc899.js",
    "revision": "4d034f09d179b829c360173501331965"
  },
  {
    "url": "/_nuxt/7c44314b65aeb192da95.js",
    "revision": "b60715535efd44fc9a700ca3a0b83b84"
  },
  {
    "url": "/_nuxt/f21a28189cdfd23beef4.js",
    "revision": "30404cb334467b43b0e24cf57a274f4d"
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
