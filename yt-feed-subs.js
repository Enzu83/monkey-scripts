// ==UserScript==
// @name         Youtube Feed Subsciptions
// @namespace    https://github.com/Enzu83
// @version      1.0
// @description  Removes "Most Relevant" and "Shorts" sections
// @match        https://www.youtube.com/feed/subscriptions
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    // Remove "Most Relevant" and "Shorts" sections
    function removeIfContains(text) {
        document.querySelectorAll('ytd-rich-section-renderer').forEach(section => {
            if (section.textContent.includes(text)) {
                section.remove();
            }
        });
    }

    function removeSections() {
        removeIfContains('Most relevant');
        removeIfContains('Shorts');
    }

    new MutationObserver(removeSections).observe(document.body, {
        childList: true,
        subtree: true
    });
})();
