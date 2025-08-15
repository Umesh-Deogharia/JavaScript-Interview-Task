document.addEventListener('DOMContentLoaded', () => {
    const faqs = document.querySelectorAll('.faq-item');

    faqs.forEach(faq => {
        const question = faq.querySelector('.question');

        question.addEventListener('click', () => {
            // Close all others
            faqs.forEach(item => {
                if (item !== faq) {
                    item.classList.remove('active');
                }
            });
            // Toggle current
            faq.classList.toggle('active');
        });
        // Bonus: keyboard accessibility
        question.addEventListener('keypress', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                question.click();
            }
        });
    });
});
