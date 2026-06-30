// Import SCSS
import '../styles/main.scss';

// Hero illustration (logo-1.png is the panoramic mountain landscape) + brand logo.
// The About section now uses an inline SVG illustration (set via the HTML src
// attribute, no JS swap) so it stays consistent with the hero's flat-vector style.
import mountainLandscape from '../images/logo-1.png';
import mhmLogo from '../images/logo-active.png';  // canonical active brand mark — overwrite logo-active.png to swap

import { initMobileMenu } from './mobile-menu';
import { initFormHandler } from './form-handler';
import { initAnalyticsEvents } from './analytics-events';

// Main JavaScript functionality
document.addEventListener('DOMContentLoaded', function() {
    // Set the imported images as sources
    const landscapeImage = document.querySelector('.landscape-image');
    if (landscapeImage) landscapeImage.src = mountainLandscape;

    const logoImage = document.querySelector('.logo-image');
    if (logoImage) logoImage.src = mhmLogo;

    // Review buttons
    const reviewButtons = document.querySelectorAll('.review-btn');
    reviewButtons.forEach(button => {
        button.addEventListener('click', function() {
            if (this.textContent === 'On Google') {
                window.open('https://www.google.com/search?q=mile+high+marketing+reviews', '_blank');
            } else if (this.textContent === 'On Nextdoor') {
                window.open('https://nextdoor.com', '_blank');
            }
        });
    });

    // Social icons
    const socialIcons = document.querySelectorAll('.social-icon');
    socialIcons.forEach(icon => {
        icon.addEventListener('click', function(e) {
            e.preventDefault();
            const iconClass = this.classList[1];

            switch(iconClass) {
                case 'facebook':
                    window.open('https://facebook.com', '_blank');
                    break;
                case 'email':
                    document.querySelector('.contact-section')?.scrollIntoView({ behavior: 'smooth' });
                    break;
                case 'phone':
                    // The tel: href is injected at runtime (analytics-events.js) so no
                    // phone number is hard-coded here; falls back to the contact form.
                    window.location.href = this.getAttribute('href') || '#contact';
                    break;
            }
        });
    });

    // CTA button - scroll to services section
    const ctaButton = document.querySelector('.cta-button');
    if (ctaButton) {
        ctaButton.addEventListener('click', function() {
            document.querySelector('.services-section')?.scrollIntoView({ behavior: 'smooth' });
        });
    }

    // Contact form submission (Formspree)
    initFormHandler();
    initAnalyticsEvents();

    // Parallax effect for mountains
    let ticking = false;

    function updateParallax() {
        const scrolled = window.pageYOffset;
        const parallax = scrolled * 0.5;

        const mountainBack = document.querySelector('.mountain-back');
        const mountainMid = document.querySelector('.mountain-mid');
        const mountainFront = document.querySelector('.mountain-front');

        if (mountainBack) mountainBack.style.transform = `translateY(${parallax}px)`;
        if (mountainMid) mountainMid.style.transform = `translateY(${parallax * 0.7}px)`;
        if (mountainFront) mountainFront.style.transform = `translateY(${parallax * 0.4}px)`;

        ticking = false;
    }

    function requestTick() {
        if (!ticking) {
            requestAnimationFrame(updateParallax);
            ticking = true;
        }
    }

    window.addEventListener('scroll', requestTick);

    // Mobile menu
    initMobileMenu();
});
