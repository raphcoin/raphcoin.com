importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/0061393c3bbe31ae8a62.js",
    "revision": "460297e8cf83f6c8170fd42ed828046d"
  },
  {
    "url": "/_nuxt/1c083f253fad75f1b887.js",
    "revision": "2407f409be8c5963f8ded0b26e5461ca"
  },
  {
    "url": "/_nuxt/35d38d2d45d31dfcdc86.js",
    "revision": "2a0f64d9b12a4596bb1154ccdd095d42"
  },
  {
    "url": "/_nuxt/37f0aa2fce0521b4659e.js",
    "revision": "4c0ce89b3105d254d6325748d2f73917"
  },
  {
    "url": "/_nuxt/aeea617b4e583bcbda40.js",
    "revision": "4b53a21e140ef8d64ce0803bf6ffbf5a"
  },
  {
    "url": "/_nuxt/c93ef81d3bc90ab5c450.js",
    "revision": "859ffb781d226067835c668561dc32a2"
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
