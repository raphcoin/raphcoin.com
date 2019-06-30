importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/0061393c3bbe31ae8a62.js",
    "revision": "460297e8cf83f6c8170fd42ed828046d"
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
    "url": "/_nuxt/8ecb95d40c3182b44b51.js",
    "revision": "1c9fcd8cb0a219f399095e96be9f7983"
  },
  {
    "url": "/_nuxt/ea412c883575f95ccd78.js",
    "revision": "2c71d6b36863e46132f95023d53a9e2c"
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
