(function () {
  "use strict";
  function removeAppDownload() {
    var app = document.getElementsByClassName("OpenInAppButton")[0];
    if (app) {
      app.style.position = "absolute";
    }
  }
  removeAppDownload();
})();
