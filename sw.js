importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/0908bf33022b1c7d7f56.js",
    "revision": "f4f69a7d017bd996fc33c6830638b963"
  },
  {
    "url": "/_nuxt/90d351641195feb911d9.js",
    "revision": "2f6f5b2155722944e2fe806eb6ef0c5d"
  },
  {
    "url": "/_nuxt/ac67b98cc5f8df439f97.js",
    "revision": "2d31823f7510acaf09ddfee62691ada2"
  },
  {
    "url": "/_nuxt/b1283d75fd3b62c58ede.js",
    "revision": "70373aa507d63512f3b8cf972c35b8d5"
  },
  {
    "url": "/_nuxt/bfc34e69e716cf83b37a.js",
    "revision": "78e035de07ebf28a325aa2a21aa415f5"
  },
  {
    "url": "/_nuxt/c97e2d687e446dc35f00.js",
    "revision": "e6e8830270857b8109a6917577278efa"
  },
  {
    "url": "/_nuxt/e7ad9f0ac5db17910ac9.js",
    "revision": "99db1217b1e949bd22a020c501cc5848"
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
