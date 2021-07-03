// After service worker js script created, we register it with our app as follows
// This code will load up the service worker js file/script and get it started
window.onload = () => {
  "use strict";

  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("./service-worker.js");
  }
};
