// Import SCSS for about page
import '../styles/about.scss';

// Import images
import aboutBackground from '../design-assets/about.png';
import contactBackground from '../design-assets/df8ad352397ab4f77a08f18b3011241c6331cd01.png';
import mhmLogo from '../images/mhm-logo.png';

import { initMobileMenu } from './mobile-menu';
import { initFormHandler } from './form-handler';

// Main JavaScript functionality for about page
document.addEventListener('DOMContentLoaded', function() {
    // Set the imported images as sources
    const aboutHeroBackground = document.querySelector('.about-hero__background');
    if (aboutHeroBackground) aboutHeroBackground.src = aboutBackground;

    const contactSectionBackground = document.querySelector('.contact-section__background');
    if (contactSectionBackground) contactSectionBackground.src = contactBackground;

    const logoImage = document.querySelector('.logo-image');
    if (logoImage) logoImage.src = mhmLogo;

    const footerLogoImage = document.querySelector('.footer-logo-image');
    if (footerLogoImage) footerLogoImage.src = mhmLogo;

    // Navigation buttons - highlight current page
    const navButtons = document.querySelectorAll('.nav-button');
    navButtons.forEach(button => {
        if (button.textContent === 'ABOUT') {
            button.style.background = '#204593';
            button.style.color = '#FFFFFF';
        }
    });

    // Contact form submission (Formspree)
    initFormHandler();

    // Mobile menu
    initMobileMenu();
});
