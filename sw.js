importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/0908bf33022b1c7d7f56.js",
    "revision": "f4f69a7d017bd996fc33c6830638b963"
  },
  {
    "url": "/_nuxt/36902bc35c7b7036e557.js",
    "revision": "a956e70715b846733828e0540daa29b8"
  },
  {
    "url": "/_nuxt/61bdbfa9352113439aca.js",
    "revision": "dc4077895101001dab33fd9dcb3868f9"
  },
  {
    "url": "/_nuxt/62e3729541014f63ef42.js",
    "revision": "3cbe4ed1934623ec36bdddc42cdba2d6"
  },
  {
    "url": "/_nuxt/b8c5751a6d9bde6a63fa.js",
    "revision": "a7a790478f949df937b340b3e6a8ca74"
  },
  {
    "url": "/_nuxt/e7281b609928b5c51c6a.js",
    "revision": "943fd3989c2ded2d6d4fd060103d5bc7"
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
