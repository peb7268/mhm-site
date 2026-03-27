/**
 * Shared Formspree form submission handler.
 * Handles AJAX submission with success/error feedback.
 */
export function initFormHandler() {
    const forms = document.querySelectorAll('form[action*="formspree.io"]');

    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();

            const submitBtn = form.querySelector('[type="submit"]');
            const originalText = submitBtn.textContent;
            submitBtn.textContent = 'Sending...';
            submitBtn.disabled = true;

            const data = new FormData(form);

            fetch(form.action, {
                method: 'POST',
                body: data,
                headers: { 'Accept': 'application/json' }
            })
            .then(response => {
                if (response.ok) {
                    form.reset();
                    submitBtn.textContent = 'Sent!';
                    setTimeout(() => { submitBtn.textContent = originalText; submitBtn.disabled = false; }, 3000);
                } else {
                    throw new Error('Form submission failed');
                }
            })
            .catch(() => {
                submitBtn.textContent = 'Error - Try Again';
                submitBtn.disabled = false;
                setTimeout(() => { submitBtn.textContent = originalText; }, 3000);
            });
        });
    });
}
