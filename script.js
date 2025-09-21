const menuIcon = document.getElementById('menuIcon');
const navLinks = document.getElementById('navLinks');

// Toggle active class for mobile menu
menuIcon.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});
