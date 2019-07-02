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
    "url": "/_nuxt/352d5b5283a8f662fd51.js",
    "revision": "216e9b1bead9d977fe4acb0a5b863fe9"
  },
  {
    "url": "/_nuxt/544d9efbd53172593606.js",
    "revision": "1f337c9345c43cfdec2b9af352b9dbe4"
  },
  {
    "url": "/_nuxt/904e3fda1cd06098be74.js",
    "revision": "06ce8621af9ed78d144c36fa94cbfb00"
  },
  {
    "url": "/_nuxt/bd8d4699a4e7b741d698.js",
    "revision": "44fad8305aa2c2187dd37b2eb4e51d80"
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
