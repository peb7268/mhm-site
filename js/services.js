// Import SCSS for services page
import '../styles/services.scss';

// Import images
import servicesBackground from '../design-assets/services-2.png';
import mhmLogo from '../images/mhm-logo.png';

import { initMobileMenu } from './mobile-menu';
import { initFormHandler } from './form-handler';

// Main JavaScript functionality for services page
document.addEventListener('DOMContentLoaded', function() {
    // Set the imported images as sources
    const servicesHeroBackground = document.querySelector('.services-hero__background');
    if (servicesHeroBackground) servicesHeroBackground.src = servicesBackground;

    const logoImage = document.querySelector('.logo-image');
    if (logoImage) logoImage.src = mhmLogo;

    const footerLogoImage = document.querySelector('.footer-logo-image');
    if (footerLogoImage) footerLogoImage.src = mhmLogo;

    // Navigation buttons - highlight current page
    const navButtons = document.querySelectorAll('.nav-button');
    navButtons.forEach(button => {
        if (button.textContent === 'SERVICES') {
            button.style.background = '#204593';
            button.style.color = '#FFFFFF';
        }
    });

    // Contact form submission (Formspree)
    initFormHandler();

    // Mobile menu
    initMobileMenu();
});
