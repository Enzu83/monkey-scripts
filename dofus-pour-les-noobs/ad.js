// ==UserScript==
// @name         Dofus pour les noobs - Remove AD placeholders
// @namespace    https://github.com/Enzu83
// @version      1.0
// @description  Removes AD placeholders
// @match        https://www.dofuspourlesnoobs.com/*
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    const ad_placeholders = document.querySelectorAll('[data-ad-text="PUBLICITE"]');

    ad_placeholders.forEach(ad_placeholder => {
        ad_placeholder.remove();
    });
})();
