'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "723a55295dddca2dbe9c14908ab0551c",
"assets/assets/icons/Arduino_Uno_logo.png": "1bee20c70255e334de5ea70d3de6ba95",
"assets/assets/icons/aws-logo.png": "dd56ce3af6d80be706ebf1f43832a489",
"assets/assets/icons/aws.png": "87e471e4c28d023c6efc3e0f5b1a6026",
"assets/assets/icons/bootstrap.png": "87d994875c22d91270c9d27302a45fb7",
"assets/assets/icons/c-logo.png": "746c41c7d1b11ba8f795812b9d8c4127",
"assets/assets/icons/css3.png": "8d04237546ef7a21ffb39466a6292429",
"assets/assets/icons/dh.png": "9379e5e5be609cf39b668f4364326059",
"assets/assets/icons/dh2.png": "c0d6f6558fa395c27d42faecba7c8c71",
"assets/assets/icons/favicon.png": "e3485325878b46e8a60516c6eaa08766",
"assets/assets/icons/firebase.png": "9658b29c391b7413d40d4a4fbcafb967",
"assets/assets/icons/flask-logo.png": "c8ddf62caa83a7aea274df70764b38e9",
"assets/assets/icons/git.png": "728ff5a8e44d74cd0f2359ef0a9ec88a",
"assets/assets/icons/github.png": "691b95aa1411439a896d7f7b102eaff8",
"assets/assets/icons/heroku.png": "ffe51d92e29d823792bf064c02d299c5",
"assets/assets/icons/htf.png": "adab68b1dadf1632b9562fc631b6a246",
"assets/assets/icons/html5-300x300.jpg": "14359c68032cc2ca5028cdcb5642fd2a",
"assets/assets/icons/html5.png": "6ec9ec769167297a894d070e39367e29",
"assets/assets/icons/iascr.jpg": "2f80378db885e70a9a60b359e27497a9",
"assets/assets/icons/javascript.png": "b47fd77577274b7603e75279be710d32",
"assets/assets/icons/kct.jpg": "222e99a082393b248489a7d339db741b",
"assets/assets/icons/keras-logo.png": "aba3531c54d2a85939da13dda7b93350",
"assets/assets/icons/matlab-logo.jpg": "f5cad8cdd3074122fec42aa09f5df376",
"assets/assets/icons/mysql-logo-1-300x300.jpg": "2c0b48b13c9a2f5afcbf3590a6624ad1",
"assets/assets/icons/mysql-logo-1.png": "a2323a6d31d4b696092bde1933c74e0c",
"assets/assets/icons/new-php-logo.png": "a0f24c9d50314e6378bed529e33154e5",
"assets/assets/icons/nodejs.png": "3c715421267abe441a51899247001ade",
"assets/assets/icons/numpy-logo-1-500x500.jpg": "4c5d649bf9da1f3454568826555156af",
"assets/assets/icons/numpy-logo-1.png": "713ae64ac4de81aab60e12aaec8c6c1e",
"assets/assets/icons/opencv-logo-1-500x500.jpg": "91b6a4a7a497f44ece3742aa4e003a03",
"assets/assets/icons/opencv-logo-1.png": "6121985d3d7514b75fb3166a0bb6c1db",
"assets/assets/icons/pandas-logo-1.png": "c5a3e35553586ec4d5cd9d3f703e9b61",
"assets/assets/icons/pandas-logo-2-500x500.jpg": "068be6d9ada748f7e14f386b6ff2e3a6",
"assets/assets/icons/pandas-logo-2.png": "ac2d91bac6a3382712fca5d040f6a47d",
"assets/assets/icons/photo-hanan.jpg": "c43b958c760f4324614ad306a558ed3c",
"assets/assets/icons/php-logo-bigger.png": "d3ef135e0b13f08cbd89c4ae0912781a",
"assets/assets/icons/postgresql-logo.png": "119ff52311453c9352a1713129c022e7",
"assets/assets/icons/postgresql.png": "e08353fb51f444aaa60d581f94885bd2",
"assets/assets/icons/profile_photo.jpg": "9c97d070605895175cf6def2dd07e189",
"assets/assets/icons/profile_photo_2.jpg": "6ac8b036e323aa7e6129eb3c249f255d",
"assets/assets/icons/python-logo-1-300x300.jpg": "d9232cc12a172ef9e5b94af5d704d3de",
"assets/assets/icons/python-logo-1.png": "df0759a8938dc3d311a73b7f9b71f2a9",
"assets/assets/icons/python-logo-2.png": "210b7a1c276143d3003ed2b47d5f2d6c",
"assets/assets/icons/pytorch-logo.png": "5cc1ef78f8f9f6fc8d6b6f9b5043a289",
"assets/assets/icons/raspi-logo.png": "ca09378bce65eda30daa04f4743aeb85",
"assets/assets/icons/react-logo.png": "b3d01f328516ef8ca3dd1d2594ecf670",
"assets/assets/icons/RPi-Logo.png": "dc7f00e82740e449ef6992a1b906d23f",
"assets/assets/icons/shell-logo-1-300x300.jpg": "3f55de555b33834af4c12f2233713cf2",
"assets/assets/icons/shell-logo-1.png": "30331058b4ebf4f506a12af38bbe7a1e",
"assets/assets/icons/sk-learn-logo-1-500x500.jpg": "9dcbed9e0ab3df6c0dcff43482200805",
"assets/assets/icons/sk-learn-logo-1.png": "fc99be16ae2d58304ac4da613ecb2f7c",
"assets/assets/icons/tensorflow-logo-1.png": "bfd61888e5ded1f88fe7bbf17e4adf68",
"assets/assets/icons/unix-shell-logo-1.png": "30331058b4ebf4f506a12af38bbe7a1e",
"assets/assets/projects/find-my-anime-project.png": "e761c53c4b0fa6f9121df0b5ef008acc",
"assets/assets/projects/khatam-quran-project.png": "4e47c4815215c988d52a190dfad0bfee",
"assets/assets/projects/project-billing.JPG": "b29d94d57268078497238ff5e275815c",
"assets/assets/projects/project-card.png": "1e75ae5b3a5fdcf772f15439f8f57b45",
"assets/assets/projects/project-htf-web.png": "b35978c9aa378237e1865bbb0f0545df",
"assets/assets/projects/project-kri2018.jpg": "06dfbb2ae46bcacab089a771bd4a08eb",
"assets/assets/projects/project-mailmerge.png": "92dcde39ea39bb6b352564003e84663c",
"assets/assets/projects/project-markcnn.JPG": "afa19fd6c289e5c59a990c38073bb5a2",
"assets/assets/projects/project-pdam.png": "cce3a3b55a049f23fc1b27c709e0df46",
"assets/assets/projects/project-smartparking.png": "b2e0199869a6cd522a6924ed11ed05d7",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/NOTICES": "b7b3e5744aa6f144003c4c157e02779d",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "00bb2b684be61e89d1bc7d75dee30b58",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "4b6a9b7c20913279a3ad3dd9c96e155b",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "dffd9504fcb1894620fa41c700172994",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "204d90cd9d6727fe93bc26a0effefb94",
"/": "204d90cd9d6727fe93bc26a0effefb94",
"main.dart.js": "fee742a548a49ce8f2999b9b8956cf14",
"manifest.json": "de758461bf57ce29dc3376b73cbc73bc",
"version.json": "4dc27284e8c838ac4a1f9c8ffbc86e43"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
