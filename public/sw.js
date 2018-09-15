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

importScripts("workbox-v3.5.0/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v3.5.0"});

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
    "url": "webpack-runtime-cb55718685888237e98c.js"
  },
  {
    "url": "app-ea12a3bec5bdb963ba93.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-81f38a24064fb14a4bc0.js"
  },
  {
    "url": "index.html",
    "revision": "8a56354b65a4dd6d66349ce9310f5ca3"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "47d6ecaa1e25482ff33ec861c12e34f5"
  },
  {
    "url": "0.281c46b18346373561c0.css"
  },
  {
    "url": "component---src-pages-index-js.8bd9557ed53ad8f03543.css"
  },
  {
    "url": "component---src-pages-index-js-393abc7223b427cd2d18.js"
  },
  {
    "url": "0-94645588baa097d378ac.js"
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
