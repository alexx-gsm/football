window.addEventListener('load' , function() {
    const btnMobileMenu = document.querySelector('#btn-mobile-menu');
    const mobileMenu = document.querySelector('#mobile-menu');

    if (btnMobileMenu && mobileMenu) {
        btnMobileMenu.addEventListener('click' , e => {
            e.preventDefault();
            mobileMenu.classList.toggle('open');
        })
    }

    const btnForwardSelect = document.querySelector('#forward-select');
    const btnGoalkeeperSelect = document.querySelector('#goalkeeper-select');
    const selection = document.querySelector('.selection');

    if (btnForwardSelect) {
        btnForwardSelect.addEventListener('click', e => {
            e.preventDefault();
            selection.classList.remove('right');
            selection.classList.add('left');

        })
    }

    if (btnGoalkeeperSelect) {
        btnGoalkeeperSelect.addEventListener('click', e => {
            e.preventDefault();
            selection.classList.remove('left');
            selection.classList.add('right');

        })
    }
})