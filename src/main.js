"use strict";

const $ = (sel) => document.querySelector(sel);

function toggleMenu() {
    const btn = $('#mobile-menu');
    const menu = $('#mobile-nav');
    const closeBtn = $('#close-mobile-menu');

    if (btn && menu) {
        // Toggle menu on button click
        btn.addEventListener('click', function (e) {
            e.stopPropagation();
            console.log('i have been toggled!')
            menu.classList.toggle('-translate-x-full');

            // If menu is now open, add listeners
            if (!menu.classList.contains('-translate-x-full')) {
                addCloseListeners();
            } else {
                removeCloseListeners();
            }
        });

        if (closeBtn) {
            closeBtn.addEventListener('click', function (e) {
                e.stopPropagation();
                closeMenu();
            });
        }

        // Close menu function
        function closeMenu() {
            menu.classList.add('-translate-x-full');
            removeCloseListeners();
        }

        // Click outside handler
        function handleClickOutside(e) {
            if (!menu.contains(e.target) && !btn.contains(e.target)) {
                closeMenu();
            }
        }

        // Escape key handler
        function handleEscape(e) {
            if (e.key === 'Escape') {
                closeMenu();
            }
        }

        // Add listeners when menu opens
        function addCloseListeners() {
            document.addEventListener('click', handleClickOutside);
            document.addEventListener('keydown', handleEscape);
        }

        // Remove listeners when menu closes
        function removeCloseListeners() {
            document.removeEventListener('click', handleClickOutside);
            document.removeEventListener('keydown', handleEscape);
        }
    }
}

window.addEventListener('load', () => {
    toggleMenu();
});

