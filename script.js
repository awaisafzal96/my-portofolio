// script.js
// JavaScript for theme toggle with class-based switching for better control
const toggleButton = document.getElementById('theme-toggle');
const body = document.body;

toggleButton.addEventListener('click', () => {
    body.classList.toggle('light');
});