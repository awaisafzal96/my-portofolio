// script.js
// Simple JavaScript for theme toggle to make it unique
const toggleButton = document.getElementById('theme-toggle');
const body = document.body;

toggleButton.addEventListener('click', () => {
    if (body.style.background === 'linear-gradient(135deg, rgb(30, 60, 114), rgb(42, 82, 152))') {
        body.style.background = 'linear-gradient(135deg, #f6d365, #fda085)';
        body.style.color = '#000';
    } else {
        body.style.background = 'linear-gradient(135deg, #1e3c72, #2a5298)';
        body.style.color = '#fff';
    }
});