importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/0908bf33022b1c7d7f56.js",
    "revision": "f4f69a7d017bd996fc33c6830638b963"
  },
  {
    "url": "/_nuxt/25e1c81efacfa681d03a.js",
    "revision": "7631a5b5e1cb70584069a3c11ad23d70"
  },
  {
    "url": "/_nuxt/3e70807aea19c50386cf.js",
    "revision": "06d515d8cce40415f00e29da1fdab96f"
  },
  {
    "url": "/_nuxt/69aadf5fb184688c50a8.js",
    "revision": "ee27f0657268134c0049d3475f1d587a"
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
