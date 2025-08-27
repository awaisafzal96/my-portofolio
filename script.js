// script.js
// Theme toggle and EmailJS contact form handling
document.addEventListener('DOMContentLoaded', () => {
    // Initialize EmailJS with your Public Key
    emailjs.init('FT7rglcfZQkqlgUXG'); // ✅ Only Public Key is safe for client-side

    const toggleButton = document.getElementById('theme-toggle');
    const body = document.body;

    // Theme toggle
    toggleButton.addEventListener('click', () => {
        body.classList.toggle('light');
        localStorage.setItem('theme', body.classList.contains('light') ? 'light' : 'dark');
    });

    // Load saved theme
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        body.classList.add('light');
    }

    // Contact form submission
    const contactForm = document.getElementById('contact-form');
    if (!contactForm) {
        console.error('Contact form not found!');
    } else {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            console.log('Form submitted:', contactForm);

            // Update these with your EmailJS Service ID & Template ID
            emailjs.sendForm('service_vdp57ue', 'template_jsdvg0o', contactForm)
                .then((response) => {
                    console.log('EmailJS success:', response);
                    alert('✅ Message sent successfully!');
                    contactForm.reset();
                }, (error) => {
                    console.error('EmailJS error:', error);
                    alert('❌ Failed to send message. Please try again.');
                });
        });
    }
});
