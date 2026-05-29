// ==UserScript==
// @name         Dofus pour les noobs
// @namespace    https://github.com/Enzu83
// @version      1.0
// @description  Removes Cookie footer "Ask Again"
// @match        https://www.dofuspourlesnoobs.com/*
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    document.querySelector('#DPLNesupUJshJIjzaopj')?.remove();
})();
