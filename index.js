// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.instagram.com/?hl=id
// @icon         https://www.google.com/s2/favicons?sz=64&domain=instagram.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    let letaksekarang=window.location.href
    let blockweb=
    [
       "https://www.instagram.com/?hl=id"
    ]

    let webblock=false

    for(let j=0;j<=blockweb.length;j++)
    {
       if(letaksekarang.includes(blockweb[j]))
       {

          webblock=true
       }
    }
    if(webblock){
      document.writeln("Kena Blok");
      window.location.stop
    }
})();
