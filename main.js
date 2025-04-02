document.addEventListener('DOMContentLoaded', function() {
    const menuButton = document.querySelector('button'); // Finds the ☰ button
    const navLinks = document.querySelector('.hidden.md\\:flex'); // Finds the hidden menu

    menuButton.addEventListener('click', function() {
        navLinks.classList.toggle('hidden'); // Toggles visibility
        navLinks.classList.toggle('flex'); // Makes it flexbox
    });
});