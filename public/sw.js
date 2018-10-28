/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("workbox-v3.6.3/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v3.6.3"});

workbox.core.setCacheNameDetails({prefix: "gatsby-plugin-offline"});

workbox.skipWaiting();
workbox.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "webpack-runtime-953d4f8590848735bb20.js"
  },
  {
    "url": "app-9cc534278e47a3069128.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-537bc28baa39e0819614.js"
  },
  {
    "url": "index.html",
    "revision": "38f6b0192d933cfeb1846a7665c486fd"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "c892f60ca185712163dcafc637337869"
  },
  {
    "url": "0.916c2f09a814d292b62d.css"
  },
  {
    "url": "component---src-pages-index-js.b80d9a4aabc75a16bea0.css"
  },
  {
    "url": "component---src-pages-index-js-94a056bb2d359ee38985.js"
  },
  {
    "url": "7-d13c85c74d6d7c99f588.js"
  },
  {
    "url": "0-f495f077fd0427e56162.js"
  },
  {
    "url": "static/d/767/path---index-6a9-Yu7m1q8T2NKmG9T5cxaySTfCAMo.json",
    "revision": "79d203eab4d0f313c93c65238b5b4cb5"
  },
  {
    "url": "static/d/520/path---offline-plugin-app-shell-fallback-a-30-c5a-NZuapzHg3X9TaN1iIixfv1W23E.json",
    "revision": "c2508676a2f33ea9f1f0bf472997f9a0"
  },
  {
    "url": "manifest.json",
    "revision": "b773e901ef06ac93343dc05e67540787"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "70b06bba86f84c4fe57edce7851841d0"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerNavigationRoute("/offline-plugin-app-shell-fallback/index.html", {
  whitelist: [/^[^?]*([^.?]{5}|\.html)(\?.*)?$/],
  blacklist: [/\?(.+&)?no-cache=1$/],
});

workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/, workbox.strategies.staleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https:/, workbox.strategies.networkFirst(), 'GET');
"use strict";

/* global workbox */
self.addEventListener("message", function (event) {
  var api = event.data.api;

  if (api === "gatsby-runtime-cache") {
    var resources = event.data.resources;
    var cacheName = workbox.core.cacheNames.runtime;
    event.waitUntil(caches.open(cacheName).then(function (cache) {
      return Promise.all(resources.map(function (resource) {
        return cache.add(resource).catch(function (e) {
          // ignore TypeErrors - these are usually due to
          // external resources which don't allow CORS
          if (!(e instanceof TypeError)) throw e;
        });
      }));
    }));
  }
});