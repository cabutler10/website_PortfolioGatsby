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
    "url": "webpack-runtime-521b345ee9d56e3c090d.js"
  },
  {
    "url": "app-68b1906e6053fe4c03f2.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-14844a16072449368287.js"
  },
  {
    "url": "index.html",
    "revision": "aab92f52aa5db60d3d6fde31c6b516db"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "87ff6ae1f8f6398e83fafb35df3bcb7a"
  },
  {
    "url": "0.59eb6c5e736bcd0123ae.css"
  },
  {
    "url": "component---src-pages-index-js.9ed5a63869aaa03aa86a.css"
  },
  {
    "url": "component---src-pages-index-js-77776629820b6dc08f8d.js"
  },
  {
    "url": "0-62c990f12391802ab537.js"
  },
  {
    "url": "static/d/791/path---index-6a9-FOch9SCUa61DaXhSbjaNlg2p2nU.json",
    "revision": "32f488039647a3e7856c1de374e1f7c3"
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
