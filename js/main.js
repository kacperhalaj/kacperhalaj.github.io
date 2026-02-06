(function () {
    // 1. ZMIANA WYSOKOŚCI HEADERA (SHRINK)
    const header = document.getElementById('mainHeader');
    if (!header) return;

    const thresholdShrink = 50;
    const thresholdExpand = 30;
    const transitionLockMs = 400;

    let isShrunk = false;
    let ticking = false;
    let locked = false;

    function update() {
        const y = window.scrollY || window.pageYOffset;

        if (locked) {
            ticking = false;
            return;
        }

        if (!isShrunk && y > thresholdShrink) {
            header.classList.add('shrink');
            isShrunk = true;
            locked = true;
            setTimeout(() => { locked = false; }, transitionLockMs);
        } else if (isShrunk && y < thresholdExpand) {
            header.classList.remove('shrink');
            isShrunk = false;
            locked = true;
            setTimeout(() => { locked = false; }, transitionLockMs);
        }
        ticking = false;
    }

    function onScroll() {
        if (!ticking) {
            window.requestAnimationFrame(update);
            ticking = true;
        }
    }

    update();
    window.addEventListener('scroll', onScroll, { passive: true });

    // Resize handler
    let resizeTimeout = null;
    window.addEventListener('resize', function () {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
            update();
        }, 150);
    });


    // 2. ZAMYKANIE MENU PO KLIKNIĘCIU POZA NIE
    document.addEventListener('click', function (event) {
        const mobileMenu = document.getElementById('mobileMenu');
        const toggler = document.querySelector('.navbar-toggler');

        // Sprawdzamy, czy menu istnieje i czy jest otwarte
        if (mobileMenu && mobileMenu.classList.contains('show')) {

            // Sprawdzamy kliknięcie
            const isClickInsideMenu = mobileMenu.contains(event.target);
            const isClickOnToggler = toggler && toggler.contains(event.target);

            if (!isClickInsideMenu && !isClickOnToggler) {
                if (toggler) {
                    toggler.click();
                } else {
                    mobileMenu.classList.remove('show');
                }
            }
        }
    });

})();