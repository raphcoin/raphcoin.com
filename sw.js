importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/0061393c3bbe31ae8a62.js",
    "revision": "460297e8cf83f6c8170fd42ed828046d"
  },
  {
    "url": "/_nuxt/1c90fc61488caf2f0179.js",
    "revision": "6b4347ea49b1657ec05543e9777375bf"
  },
  {
    "url": "/_nuxt/55d940e390b27105c5f6.js",
    "revision": "48e495fe1dbc47db9309222388c2e3b6"
  },
  {
    "url": "/_nuxt/89beef210d093ff31cc1.js",
    "revision": "f59bd0a983c780aa038d0930ad68e7dd"
  },
  {
    "url": "/_nuxt/cd778f1688cabc594b19.js",
    "revision": "5f96d775c687b6afa1f9597fa51705e6"
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
