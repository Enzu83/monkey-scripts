// ==UserScript==
// @name         Dofus pour les noobs - Remove AD sections
// @namespace    https://github.com/Enzu83
// @version      1.0
// @description  Removes AD sections
// @match        https://www.dofuspourlesnoobs.com/*
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    // Remove "PUBLICITE" placeholders
    const ad_placeholders = document.querySelectorAll('[data-ad-text="PUBLICITE"]');

    ad_placeholders.forEach(ad_placeholder => {
        ad_placeholder.remove();
    });

    // Remove "Recommendation" section
    document.querySelector('#dpln-recommendation')?.remove();

    // Remove donation buttons
    document.querySelector('#dplnContriBottom')?.remove();
})();
