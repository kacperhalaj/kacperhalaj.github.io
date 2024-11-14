const navLinks = document.querySelectorAll('.nav-links a');

const currentUrl = window.location.pathname.split('/').pop();

navLinks.forEach(link => {
    if (link.getAttribute('href') === currentUrl) {
        link.classList.add('active');
    }
});
