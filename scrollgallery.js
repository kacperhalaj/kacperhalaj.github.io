document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.gallery-images img');

    const options = {
        threshold: 0.1 // Obraz pojawia się, gdy 10% jest widoczne w widoku
    };

    const observer = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');  // Dodanie klasy show, gdy obraz wchodzi w widok
                observer.unobserve(entry.target);  // Usunięcie obserwacji, aby animacja uruchomiła się tylko raz
            }
        });
    }, options);

    images.forEach(image => {
        observer.observe(image);  // Obserwacja każdego obrazu w galerii
    });
});