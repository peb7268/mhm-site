// Shared mobile menu toggle - imported by all page entry points
export function initMobileMenu() {
    const toggle = document.querySelector('.mobile-menu-toggle');
    const overlay = document.querySelector('.mobile-menu-overlay');

    if (!toggle || !overlay) return;

    toggle.addEventListener('click', function() {
        this.classList.toggle('active');
        overlay.classList.toggle('active');
        document.body.style.overflow = overlay.classList.contains('active') ? 'hidden' : '';
    });

    overlay.addEventListener('click', function(e) {
        if (e.target === this) {
            toggle.classList.remove('active');
            this.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
}
