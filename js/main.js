// Import SCSS
import '../styles/main.scss';

// Import the mountain landscape image, logo, and Denver skyline
import mountainLandscape from '../images/logo-1.png';
import mhmLogo from '../images/mhm-logo.svg';
import denverSkyline from '../images/denver-skyline-option-3.jpg';

// Main JavaScript functionality
document.addEventListener('DOMContentLoaded', function() {
    // Set the imported images as sources
    const landscapeImage = document.querySelector('.landscape-image');
    if (landscapeImage) {
        landscapeImage.src = mountainLandscape;
    }

    const logoImage = document.querySelector('.logo-image');
    if (logoImage) {
        logoImage.src = mhmLogo;
    }

    const skylineImage = document.querySelector('.skyline-image');
    if (skylineImage) {
        skylineImage.src = denverSkyline;
    }
    // Navigation buttons
    const navButtons = document.querySelectorAll('.nav-button');
    navButtons.forEach(button => {
        button.addEventListener('click', function() {
            console.log('Navigate to:', this.textContent);
            // Add navigation logic here
        });
    });

    // Review buttons
    const reviewButtons = document.querySelectorAll('.review-btn');
    reviewButtons.forEach(button => {
        button.addEventListener('click', function() {
            console.log('Review on:', this.textContent);
            if (this.textContent === 'On Google') {
                // Open Google Reviews
                window.open('https://www.google.com/search?q=mile+high+marketing+reviews', '_blank');
            } else if (this.textContent === 'On Nextdoor') {
                // Open Nextdoor
                window.open('https://nextdoor.com', '_blank');
            }
        });
    });

    // Social icons
    const socialIcons = document.querySelectorAll('.social-icon');
    socialIcons.forEach(icon => {
        icon.addEventListener('click', function(e) {
            e.preventDefault();
            const iconClass = this.classList[1]; // Get the second class (facebook, email, phone)
            
            switch(iconClass) {
                case 'facebook':
                    window.open('https://facebook.com', '_blank');
                    break;
                case 'email':
                    window.location.href = 'mailto:contact@milehighmarketing.com';
                    break;
                case 'phone':
                    window.location.href = 'tel:+1234567890';
                    break;
            }
        });
    });

    // CTA button
    const ctaButton = document.querySelector('.cta-button');
    ctaButton.addEventListener('click', function() {
        console.log('Read more clicked');
        // Add scroll to content or page navigation
        // For now, just smooth scroll down
        window.scrollBy({
            top: window.innerHeight,
            behavior: 'smooth'
        });
    });

    // Parallax effect for mountains (optional)
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
});

// Export for potential use in other modules
export default {
    init() {
        console.log('MHM Site initialized');
    }
};