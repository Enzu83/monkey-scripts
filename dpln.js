// ==UserScript==
// @name         Dofus pour les noobs
// @namespace    https://github.com/Enzu83
// @version      1.0
// @description  Removes annoying AD placeholders and "Ask Again" footer
// @match        https://www.dofuspourlesnoobs.com/*
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    // Remove "PUBLICITE" sections
    const ad_placeholders = document.querySelectorAll('[data-ad-text="PUBLICITE"]');

    ad_placeholders.forEach(ad_placeholder => {
        ad_placeholder.remove();
    });

    // Remove "Ask Again" footer
    document.querySelector('#DPLNesupUJshJIjzaopj')?.remove();
})();
