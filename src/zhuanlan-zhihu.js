// ==UserScript==
// @name        知乎专栏去下载App
// @namespace   Violentmonkey Scripts
// @match       http*://zhuanlan.zhihu.com/p/*
// @grant       none
// @version     1.0
// @author      fncheng
// @license      GPL-3.0-only
// @description 2020/7/10 下午1:56:24
// ==/UserScript==

(function () {
  "use strict";
  function removeAppDownload() {
    var app = document.getElementsByClassName("OpenInAppButton")[0];
    if(app){
      app.style.display = "none";
    }
  }
  removeAppDownload();
})();
