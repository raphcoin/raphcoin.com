importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/0908bf33022b1c7d7f56.js",
    "revision": "f4f69a7d017bd996fc33c6830638b963"
  },
  {
    "url": "/_nuxt/3cce8d2ba364853d452d.js",
    "revision": "bd624ce80c83072b918001dd0146cf06"
  },
  {
    "url": "/_nuxt/3e70807aea19c50386cf.js",
    "revision": "06d515d8cce40415f00e29da1fdab96f"
  },
  {
    "url": "/_nuxt/6ffa898317c873b8f31c.js",
    "revision": "ce2a9f5cf38f86f0772001f339489656"
  },
  {
    "url": "/_nuxt/b6605dc3186f623f9b25.js",
    "revision": "7acd623233bf6f19a9e65a11f55c386c"
  },
  {
    "url": "/_nuxt/e0ae624845fc8e85d4e2.js",
    "revision": "bc26a4a2d62a12dc095e741ddf143b3b"
  },
  {
    "url": "/_nuxt/f04feb17c8fe953b832c.js",
    "revision": "12b80bf21a8cd048cf74a2a7a1942d00"
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
