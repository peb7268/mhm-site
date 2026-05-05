// Import SCSS for work page
import '../styles/work.scss';

// Logo + the about-hero background photo are still bundled via JS so
// content-hashed URLs work in production. Portfolio card images are now
// served directly from images/illustrations/ via the HTML src attribute,
// so no JS hard-set is needed.
import aboutBackground from '../design-assets/about.png';
import mhmLogo from '../images/mhm-logo.png';

import { initMobileMenu } from './mobile-menu';
import { initFormHandler } from './form-handler';

// Main JavaScript functionality for work page
document.addEventListener('DOMContentLoaded', function() {
    // Set the imported images as sources
    const aboutHeroBackground = document.querySelector('.about-hero__background');
    if (aboutHeroBackground) aboutHeroBackground.src = aboutBackground;

    const logoImage = document.querySelector('.logo-image');
    if (logoImage) logoImage.src = mhmLogo;

    const footerLogoImage = document.querySelector('.footer-logo-image');
    if (footerLogoImage) footerLogoImage.src = mhmLogo;

    // Navigation buttons - highlight current page
    const navButtons = document.querySelectorAll('.nav-button');
    navButtons.forEach(button => {
        if (button.textContent === 'WORK') {
            button.style.background = '#204593';
            button.style.color = '#FFFFFF';
        }
    });

    // Contact form submission (Formspree)
    initFormHandler();

    // Mobile menu
    initMobileMenu();
});
