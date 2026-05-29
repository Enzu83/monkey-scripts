// ==UserScript==
// @name         Dofus pour les noobs - Remove Cookies sections
// @namespace    https://github.com/Enzu83
// @version      1.0
// @description  Removes Cookie footer "Ask Again"
// @match        https://www.dofuspourlesnoobs.com/*
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    // Remove footer
    document.querySelector('#DPLNesupUJshJIjzaopj')?.remove();

    // Remove warning in comment section
    document.querySelector('#disqus_thread')?.remove();
})();
