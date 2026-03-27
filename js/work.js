// Import SCSS for work page
import '../styles/work.scss';

// Import images
import aboutBackground from '../design-assets/about.png';
import contactBackground from '../design-assets/df8ad352397ab4f77a08f18b3011241c6331cd01.png';
import mhmLogo from '../images/mhm-logo.png';

// Import portfolio images
import portfolio1 from '../design-assets/2c96d0e2239d065415da2c12aab03f4665e652c2.png';
import portfolio2 from '../design-assets/a6787d374b2c8bda000686d58946fe192ac1a08c.png';
import portfolio3 from '../design-assets/ea6e309b5ad22f23f7349866bf62d287ecb7e53a.png';
import portfolio4 from '../design-assets/541b6fc7a25eeb211080e7e21d21433ef7b2b6d5.png';
import portfolio5 from '../design-assets/2d31d4f044709e3db33adad575fcfb220ff6fda1.png';
import portfolio6 from '../design-assets/4d52f18d6cbc0d24b5955e7210a680b390add55e.png';

import { initMobileMenu } from './mobile-menu';
import { initFormHandler } from './form-handler';

// Main JavaScript functionality for work page
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

    // Set portfolio images
    const portfolioImages = document.querySelectorAll('.portfolio-card__image img');
    const portfolioAssets = [portfolio1, portfolio2, portfolio3, portfolio4, portfolio5, portfolio6];

    portfolioImages.forEach((img, index) => {
        if (portfolioAssets[index]) img.src = portfolioAssets[index];
    });

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
