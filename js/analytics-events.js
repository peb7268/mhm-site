/**
 * GA4 engagement-event tracking — clicks GA4 can't auto-capture cleanly.
 * Uses document-level delegation (capture phase, read-only) so one init covers
 * the whole page and runs before page handlers that call preventDefault.
 *
 * Division of labor:
 *   - generate_lead (conversion)        → js/form-handler.js (on webhook success)
 *   - scrolls / outbound / form_start   → GA4 Enhanced Measurement (data-stream config)
 *   - phone / book-intent clicks         → here (not covered by the above)
 * See ~/Documents/Main/Resources/System/analytics/engagement-tracking.md
 */
function track(name, params) {
    if (typeof gtag === 'function') gtag('event', name, params);
}

// Inject the phone number at runtime so it's never in the served HTML (anti-scrape).
// Stored base64-encoded so it isn't a plain-text number in the JS bundle either.
// Elements opt in with a [data-phone] attribute and an href="#contact" no-JS fallback.
function injectPhone() {
    let tel;
    try { tel = atob('KzEzMDM5MDE3NzQ2'); } catch (_) { return; } // base64 of the office line
    document.querySelectorAll('[data-phone]').forEach(el => el.setAttribute('href', 'tel:' + tel));
}

export function initAnalyticsEvents() {
    injectPhone();

    document.addEventListener('click', (e) => {
        // Phone click → contact_click {method:'phone'} (tel: isn't auto-tracked)
        if (e.target.closest('a[href^="tel:"]')) {
            track('contact_click', { method: 'phone', page: window.location.pathname });
            return;
        }
        // Email click → contact_click {method:'email'} (future-proof; no mailto today)
        if (e.target.closest('a[href^="mailto:"]')) {
            track('contact_click', { method: 'email', page: window.location.pathname });
            return;
        }
        // "Get Free Strategy" / book-intent CTA → book_session_click (abandonment-funnel
        // start). Excludes social icons that also point at #contact.
        if (e.target.closest('.mobile-nav-cta, a[href$="#contact"]:not(.social-icon)')) {
            track('book_session_click', { page: window.location.pathname });
        }
    }, true);
}
