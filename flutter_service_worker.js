'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "2ac24d268c7f77c193d0ed801cd83528",
".git/config": "544782179318c583b1769eb6e1ee383f",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "44636d73af94785907983a676bde2cae",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "abfd1b9e9a89156e6221722d363af218",
".git/logs/refs/heads/main": "8dfde387730f75e9504843877c8ddff7",
".git/logs/refs/remotes/origin/main": "3cd9929391c899475a5a71ad7d2de144",
".git/objects/08/fbc94e0eeeb2fe4473e28841f066de3058d869": "16e0e89dc038e8c768f1c040636c64eb",
".git/objects/0b/22983e31398bd6519039947293a48c2d95f63e": "2b74c5e6d866322a64b7124bd96185f5",
".git/objects/11/35ac836804a35f494da699a8344272cf8ab60c": "ee49308bea7a593fca862ba4e6f103dd",
".git/objects/27/0eb7cb024281b53c74735f3ffc7f9f7289d77f": "3e727836115ae4645ca4ef9422ef3115",
".git/objects/2c/3721ee80c099fe14e543e050549431b4bc2f28": "8e68c5f969b876d5bc53eac013e3ab74",
".git/objects/30/6a683a6282525697f7c9857ce283537d84f1a8": "6da4d80aa4b90a15098eaa91252dc452",
".git/objects/30/918226d0a79867559f62b9c1b6720c6ce4d002": "14352827a5f75d1564b960aa51423e4f",
".git/objects/31/fb751a04d7b13bdb3fa365de61bc90ba376f8a": "cd3c6a628a6ba6ad9c00c7f1e70a4dc6",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/3d/90e37feda48ac6bc27bc0acb7447fbf6b3849a": "c7b2603977c5bff032d0d5f0b439b647",
".git/objects/3e/5820f8708036da0431bdd9ec56aa90561b02bc": "b007c3cb7a8247517325c7c9c5ea598e",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/56/df251f4fde0149b52631a265d2fbaa4f8941e2": "4d18a08e51831649394c1b03f0bda913",
".git/objects/5c/a2f669f3092a27c6f5dc3df20712d18292d7ca": "f288d0c02ff60ddcac0ffdfe10ac0d7c",
".git/objects/5d/61d33bc631e08880866102f9ae4ae2b7f013cc": "72ee6bac6e9dc5d58247c9681d073bdc",
".git/objects/61/9b8a859177559c6516e354f27f4c180ad3f960": "73429bce949741743227333cba613402",
".git/objects/63/bdc3df8a5eda281221d4c146e8330e0603bcd1": "4384102b3c34b7bc00cd4bfa1dab2968",
".git/objects/64/bd3c9631a07d551f5ba5c42dac5aa13d2bbad9": "601140071bd706e303d98874251d3a14",
".git/objects/74/40eecf4bc6bf8a9a9da328b58cfbf34e8f4972": "de33a6318ade3d7debfe78082dd10bcd",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7c/a3a1f25bce111b8872d87c1c1ed1683324ddd6": "79903aa683af684b13b7a7caf6a5cc00",
".git/objects/7c/c79c24e67d26d3bc5cf053f127cc9a5cb6612d": "25b0d5b37c739709ada882f47c605a86",
".git/objects/7f/d6f239cba2af3f5dd17dbda2521690a020072c": "b6d455995681b5eb7fe4f84f649ff580",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/99/1739025ddacfc112132b7ce322f10fc00ef100": "7dff58ea9b9cf4e5709b1c51a6efcd64",
".git/objects/9a/e8935e4f52dab36e28b2e2eca4ca030272464c": "2e4f705d25280d61960ab62d0553d223",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a1/8176d9699fbc929de4912c48e73be72b10131e": "8bcd7f00c599295379aa15de8beba5b6",
".git/objects/a6/cfc509f936cbef3eda914be943a71d024970d3": "5f9e9428a200a32b3d0ba25df27dac7e",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/aa/68c905fb6635a095eda5363bcc14e953af7014": "caa992ac3e4c3481bc3ce2ce59dc5ac0",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ad/797fac0f8d47c2ba7157992673b21e84eaef19": "576dc3ccd0af39015bec02331dffa74d",
".git/objects/af/2e47eccb3e56192f6e9b59f0cf6aa0b99ebaed": "84bb39649ee238a7488d11815ef5a498",
".git/objects/b5/6b1f73cecb59f90eaa71791bb67887d7cb6dbe": "119dd8e7502f0f1c643bace707e9febb",
".git/objects/b7/2f7aa045fb5b1a78a54ed84b4d4bc3c56ade38": "d94fb2fa4af6b0a3b5e2b6e3d1f9974a",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/3884140e2bc2e38afaf9cb7736f63ef09a1634": "db3f4b3d79953eb098fbae26db8ea9d9",
".git/objects/bc/02753b9f4d4eee2d9712e261524562f4d6891a": "d6e2773a77358b8283db9ab04c7d0fbf",
".git/objects/bd/b289072af6624200ff99920d0ff1be7b7616fa": "c616d6574bf338bd6f6ba88ccdf616b3",
".git/objects/c4/99bc3742b47ab70e307b76fd879b7ffcb1fd7b": "40f882d487f4958216cc68964a6a7306",
".git/objects/c5/4a966edbf6b8d30d0e395a8fc605aa49b53cde": "8c1720a38a9c0d93d07d270175ac4fa8",
".git/objects/c6/20a77e9e90951f915d6c23d8f77621beb3cea3": "2b4084eafd6ec25e62767602f77b5b77",
".git/objects/d5/ce5b21aac6c26bc8e4a2db2a14deab581ebeff": "7ad3c0f4c506fb1b37e4cebce47bba99",
".git/objects/d5/d502b6b7ab6e711891bdebc658f3359f0c45bd": "ab10c1475f79c51ed89f08d570ec99e6",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d9/f84f11520d15db1c7a6d3a08a41429a6e2ac40": "97599e713b7ba68c60a3e563f88fd7d9",
".git/objects/dc/69f6eeea215a80e7a3e74af3d6a33890c29198": "7c9ff400f8618423c9b34f7ccb85a6ca",
".git/objects/dc/ae41e3a8bb4c1e11393a4789c50ca8eccfc047": "ae33dfac7318271dfb56435160294f40",
".git/objects/dd/6cb067572569a187d7f1b293ca5ccefd3b592c": "15b5c5e0197ccfae8dc8f786fcda97e0",
".git/objects/e1/1bdbf06a76fd2ee6bae324d646bffb58921913": "ffeb54a9c59b42896545a5783a5522d7",
".git/objects/e2/4096cf974973289f06a11a1df900bebc849f02": "d31cec5643ab48ed2fb56d08364c3426",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e7/5da5336bce2e2a286b4bdf4efc97229a966b0c": "71ef8d50b52a5790b1e3b73b787d6271",
".git/objects/eb/5c6c8bb83953cf4185f9a261766b0d0277d381": "6731f8eb98e211cdeace738b12887945",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/fa/23bf85aec94ffa61c20dd57ada614aede51f2d": "6f61218f973193122d039c437e90e469",
".git/objects/fb/f711184eede4d9ad8b27dbd63e0de0238cdcba": "2ba90b29d9135cec77f3776bf42eed6b",
".git/objects/fd/9515dc3b1c41ca1724d7931f27ca3094e62d72": "fb9aff20d847be8f68fb41e14bca7200",
".git/refs/heads/main": "07a81e26fdba7f59b50fcf335b29dc38",
".git/refs/remotes/origin/main": "07a81e26fdba7f59b50fcf335b29dc38",
"assets/AssetManifest.json": "8a9f8ae43e66812a109ca717aa20eb91",
"assets/assets/images/axiemanfam_bg.jpg": "5d0efd5e8465530e79817c7d40f2ce4e",
"assets/assets/images/bg.png": "dd80f26dbd8830f1943286c5d083f3bd",
"assets/assets/images/logo.png": "2230cb52e06a14318b06f450352f9410",
"assets/assets/images/logo1.png": "05f43c77c6a93b1d8e88a3bd1dd02e8a",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "24de72e0e59404d5818c134cdf690218",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icon.jpg": "5d0efd5e8465530e79817c7d40f2ce4e",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "f659cbe1b9894df26e45630f28e24d22",
"/": "f659cbe1b9894df26e45630f28e24d22",
"main.dart.js": "aebd8e28d941c885034cc0523cef9d62",
"manifest.json": "b231fb8945a4c6a14c0a0ff6efc9a027",
"styles.css": "0c198a2a4817d454645ce666547b7ca8",
"version.json": "e6c1fb944bfdb0761634aea8e63922f6"
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
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
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
