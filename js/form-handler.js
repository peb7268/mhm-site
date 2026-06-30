/**
 * MHM contact form handler.
 * AJAX-submits .contact-form / .strategy-form to the n8n inbound-lead webhook,
 * which fans out to Discord (#leads) + Gmail (Paul) + Pipe (→ Twenty CRM).
 * Includes a honeypot for basic spam protection.
 * See: ~/Documents/Main/Projects/Azienda/MHM/lead-pipeline.md
 */
const N8N_LEAD_WEBHOOK = 'https://n8n.byte-sized.io/webhook/mhm-lead';

export function initFormHandler() {
    const forms = document.querySelectorAll('.contact-form, .strategy-form');

    forms.forEach(form => {
        // Honeypot: a hidden field bots tend to auto-fill; humans never see it.
        const hp = document.createElement('input');
        hp.type = 'text';
        hp.name = 'company_url';
        hp.tabIndex = -1;
        hp.autocomplete = 'off';
        hp.setAttribute('aria-hidden', 'true');
        hp.style.cssText = 'position:absolute;left:-9999px;width:1px;height:1px;opacity:0;';
        form.appendChild(hp);

        form.addEventListener('submit', function (e) {
            e.preventDefault();

            const submitBtn = form.querySelector('[type="submit"]');
            const originalText = submitBtn ? submitBtn.textContent : '';
            if (submitBtn) { submitBtn.textContent = 'Sending...'; submitBtn.disabled = true; }

            const fd = new FormData(form);

            // Honeypot tripped → silently "succeed", send nothing.
            if (fd.get('company_url')) {
                if (submitBtn) { submitBtn.textContent = 'Sent!'; }
                form.reset();
                return;
            }

            // Normalized JSON payload for n8n (business, name/first_name/last_name, email, phone, message...).
            const payload = Object.fromEntries(fd.entries());
            payload.page = window.location.pathname;
            payload.submitted_at = new Date().toISOString();

            fetch(N8N_LEAD_WEBHOOK, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
                body: JSON.stringify(payload)
            })
            .then(response => {
                if (!response.ok) throw new Error('Form submission failed');
                // GA4 conversion: fires only on confirmed webhook success (the AJAX submit
                // means GA4's automatic Enhanced-Measurement form_submit won't reliably fire).
                if (typeof gtag === 'function') {
                    gtag('event', 'generate_lead', {
                        form_name: form.classList.contains('strategy-form') ? 'strategy' : 'contact',
                        page: window.location.pathname
                    });
                }
                form.reset();
                if (submitBtn) {
                    submitBtn.textContent = 'Sent!';
                    setTimeout(() => { submitBtn.textContent = originalText; submitBtn.disabled = false; }, 3000);
                }
            })
            .catch(() => {
                if (submitBtn) {
                    submitBtn.textContent = 'Error - Try Again';
                    submitBtn.disabled = false;
                    setTimeout(() => { submitBtn.textContent = originalText; }, 3000);
                }
            });
        });
    });
}
