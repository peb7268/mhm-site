// Import SCSS for insights page
import '../styles/insights.scss';

// Import images
import insightsHeaderImage from '../design-assets/insights.png';
import authorAvatar from '../design-assets/a0aa414672cfcc531f40b69d6eeced4343a9fbc4.png';
import commentsBackground from '../design-assets/83442bbb6582cce07ce04dbdbf4fe97eacec4a4e.png';
import commentAvatar from '../design-assets/2c96d0e2239d065415da2c12aab03f4665e652c2.png';
import starIcon from '../design-assets/66c7453016cf191ec6b7893725b32f65af45eabd.svg';
import logoActive from '../images/logo-active.png';
import mhmLogo from '../images/mhm-logo.png';

import { initMobileMenu } from './mobile-menu';

// Unsplash API configuration
const UNSPLASH_ACCESS_KEY = 'R-LXRjw6sxbtdMGAhCxpR1zOLqMRLDe9q0SaYe2_9no';

// Fetch article-specific image (not hero)
async function fetchArticleImage() {
    const articleImage = document.querySelector('.article-header__image');
    if (!articleImage) return;

    try {
        const response = await fetch(
            `https://api.unsplash.com/search/photos?query=web design blog&per_page=1&orientation=landscape`,
            {
                headers: {
                    'Authorization': `Client-ID ${UNSPLASH_ACCESS_KEY}`
                }
            }
        );

        if (response.ok) {
            const data = await response.json();
            if (data.results && data.results.length > 0) {
                articleImage.src = data.results[0].urls.regular;
                articleImage.alt = data.results[0].alt_description || 'Article illustration';
            }
        }
    } catch (error) {
        console.warn('Failed to load article image:', error);
    }
}

// Fetch Unsplash images for Read Also section
async function fetchUnsplashImages() {
    const searchTerms = [
        'web performance code',
        'web design ux',
        'javascript programming'
    ];

    const thumbnails = document.querySelectorAll('.read-also-card__thumbnail');

    for (let i = 0; i < Math.min(searchTerms.length, thumbnails.length); i++) {
        try {
            const response = await fetch(
                `https://api.unsplash.com/search/photos?query=${encodeURIComponent(searchTerms[i])}&per_page=1&orientation=landscape`,
                {
                    headers: {
                        'Authorization': `Client-ID ${UNSPLASH_ACCESS_KEY}`
                    }
                }
            );

            if (response.ok) {
                const data = await response.json();
                if (data.results && data.results.length > 0) {
                    thumbnails[i].src = data.results[0].urls.regular;
                    thumbnails[i].alt = data.results[0].alt_description || searchTerms[i];
                }
            }
        } catch (error) {
            console.warn(`Failed to load Unsplash image for "${searchTerms[i]}":`, error);
        }
    }
}

// Main JavaScript functionality for insights page
document.addEventListener('DOMContentLoaded', function() {
    fetchArticleImage();
    fetchUnsplashImages();

    const authorAvatarImage = document.querySelector('.article-header__author-avatar');
    if (authorAvatarImage) authorAvatarImage.src = authorAvatar;

    // Set comments section background
    const commentsSection = document.querySelector('.comments-section');
    if (commentsSection) {
        const beforePseudo = document.createElement('style');
        beforePseudo.textContent = `.comments-section::before { background-image: url(${commentsBackground}); }`;
        document.head.appendChild(beforePseudo);
    }

    const commentAvatarImage = document.querySelector('.comment-card__avatar');
    if (commentAvatarImage) commentAvatarImage.src = commentAvatar;

    // Set star icons for highlights
    const starIcons = document.querySelectorAll('.article-highlights__icon');
    starIcons.forEach(icon => { icon.src = starIcon; });

    const logoImage = document.querySelector('.logo-image');
    if (logoImage) logoImage.src = logoActive;

    const footerLogoImage = document.querySelector('.footer-logo-image');
    if (footerLogoImage) footerLogoImage.src = mhmLogo;

    // Navigation buttons - highlight current page
    const navButtons = document.querySelectorAll('.nav-button');
    navButtons.forEach(button => {
        if (button.textContent === 'INSIGHTS') {
            button.style.background = '#204593';
            button.style.color = '#FFFFFF';
        }
    });

    // Comment form submission
    const commentForm = document.querySelector('.comment-form');
    if (commentForm) {
        commentForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your comment! It will be reviewed shortly.');
        });
    }

    // Reply link interaction
    const replyLinks = document.querySelectorAll('.comment-card__reply');
    replyLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const textarea = document.querySelector('.comment-form__textarea');
            if (textarea) {
                textarea.focus();
                textarea.placeholder = 'Write your reply...';
            }
        });
    });

    // Mobile menu
    initMobileMenu();
});
