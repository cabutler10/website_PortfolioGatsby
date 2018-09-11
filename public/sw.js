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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.4.1/workbox-sw.js");

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
    "url": "webpack-runtime-15eb1863b9292463a48c.js"
  },
  {
    "url": "app-52f9f278d733bae0149d.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-4c573b5606dc0d892433.js"
  },
  {
    "url": "index.html",
    "revision": "d53cb8a7c2036d7f0c4c443596cd80ff"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "61a16d5c758dc81d388735951aeea977"
  },
  {
    "url": "0.688f9c479c00fbe6f8e8.css"
  },
  {
    "url": "component---src-pages-index-js.6e0ca285f2150262b2c0.css"
  },
  {
    "url": "component---src-pages-index-js-faddb2a034b46cbc31d2.js"
  },
  {
    "url": "0-c7517ce1fdeef591c799.js"
  },
  {
    "url": "static/d/371/path---index-6a9-IRQ3Gz5q5PpOG3K3PyyyISa3fs.json",
    "revision": "b357a60fb1519ab8f4aff74e8f28020e"
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
    "revision": "ba271777075f8282dbb6aa76cc9ead0b"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerNavigationRoute("/offline-plugin-app-shell-fallback/index.html", {
  whitelist: [/^[^?]*([^.?]{5}|\.html)(\?.*)?$/],
  blacklist: [/\?(.+&)?no-cache=1$/],
});

workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/, workbox.strategies.staleWhileRevalidate(), 'GET');
