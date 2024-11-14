window.onscroll = function() {
    const header = document.querySelector('header');
    const navLinks = document.querySelector('.nav-links');
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        header.classList.add('shrink'); 
        navLinks.style.top = '44px';
        navLinks.style.backgroundColor = '#000000cc';
    } else {
        header.classList.remove('shrink'); 
        navLinks.style.top = '80px';
        navLinks.style.backgroundColor = '#000';
    }
};