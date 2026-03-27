// Service Detail Page Entry Point
import '../styles/service-detail.scss';

// Import shared images
import servicesBackground from '../design-assets/services-2.png';
import contactBackground from '../design-assets/df8ad352397ab4f77a08f18b3011241c6331cd01.png';
import mhmLogo from '../images/mhm-logo.png';

import { initMobileMenu } from './mobile-menu';
import { initFormHandler } from './form-handler';

// Initialize service detail page functionality
document.addEventListener('DOMContentLoaded', function() {
    // Set imported images as sources
    const heroBackground = document.querySelector('.hero__background');
    if (heroBackground) heroBackground.src = servicesBackground;

    const contactSectionBackground = document.querySelector('.contact-section__background');
    if (contactSectionBackground) contactSectionBackground.src = contactBackground;

    const logoImage = document.querySelector('.logo-image');
    if (logoImage) logoImage.src = mhmLogo;

    const footerLogoImage = document.querySelector('.footer-logo-image');
    if (footerLogoImage) footerLogoImage.src = mhmLogo;

    // Navigation buttons - highlight SERVICES as current section
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
