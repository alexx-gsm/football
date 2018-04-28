window.addEventListener('load' , function() {
    const btnMobileMenu = document.querySelector('#btn-mobile-menu');
    const mobileMenu = document.querySelector('#mobile-menu');

    if (btnMobileMenu && mobileMenu) {
        btnMobileMenu.addEventListener('click' , e => {
            e.preventDefault();
            mobileMenu.classList.toggle('open');
        })
    }
})