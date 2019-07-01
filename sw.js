importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/0908bf33022b1c7d7f56.js",
    "revision": "f4f69a7d017bd996fc33c6830638b963"
  },
  {
    "url": "/_nuxt/3e70807aea19c50386cf.js",
    "revision": "06d515d8cce40415f00e29da1fdab96f"
  },
  {
    "url": "/_nuxt/41bb58c51361fb555f2d.js",
    "revision": "84fe2c5f5e39d56163cea8c2fa570036"
  },
  {
    "url": "/_nuxt/46012a4c883b8ed5786b.js",
    "revision": "28c61f0857a12e6c97811511d2aa62ac"
  },
  {
    "url": "/_nuxt/48bbed88895bae55c5cf.js",
    "revision": "ba790a9256fa62c4b59be1d634c1a822"
  },
  {
    "url": "/_nuxt/6ffa898317c873b8f31c.js",
    "revision": "ce2a9f5cf38f86f0772001f339489656"
  },
  {
    "url": "/_nuxt/f74b448bd3a5b17198ae.js",
    "revision": "ce4d4b6733bfe1c20518a8888c76970f"
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
