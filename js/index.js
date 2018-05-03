window.addEventListener('load', function() {
  const mainPage = document.querySelector('.page');

  const showModal = modalElem => {
    modalElem.classList.add('in');
    mainPage.classList.add('blur');
  };

  const hideModal = modalElem => {
    modalElem.classList.remove('in');
    mainPage.classList.remove('blur');
  };

  const showMenu = () =>
    document.querySelector('#menu').classList.remove('fade');
  const hideMenu = () => document.querySelector('#menu').classList.add('fade');

  const btnMobileMenu = document.querySelector('#btn-mobile-menu');
  const mobileMenu = document.querySelector('#mobile-menu');

  if (btnMobileMenu && mobileMenu) {
    btnMobileMenu.addEventListener('click', e => {
      e.preventDefault();
      mobileMenu.classList.toggle('open');
    });
  }

  // change player
  // const btnForwardSelect = document.querySelector('#forward-select');
  // const btnGoalkeeperSelect = document.querySelector('#goalkeeper-select');
  const selection = document.querySelector('.selection');

  const bgSelection = document.querySelector('#bg-selection');
  if (bgSelection) {
    bgSelection.addEventListener('click', e => {
      e.preventDefault();
      if (selection.classList.contains('left')) {
        selection.classList.remove('left');
        selection.classList.add('right');
      } else {
        selection.classList.remove('right');
        selection.classList.add('left');
      }
    });
  }

  //   Add PLAY btn listeners
  const btnForwardPlay = document.querySelector('#forward-play');
  const btnGoalkeeperPlay = document.querySelector('#goalkeeper-play');
  const modalLogin = document.querySelector('.modal--login');

  if (btnForwardPlay && btnGoalkeeperPlay) {
    btnForwardPlay.addEventListener('click', e => {
      e.preventDefault();
      mainPage.classList.add('page--login');
      setTimeout(() => showModal(modalLogin), 500);
    });
    btnGoalkeeperPlay.addEventListener('click', e => {
      e.preventDefault();
      mainPage.classList.add('page--login');
      setTimeout(() => {
        showModal(modalLogin);
        document.querySelector('#close-login').addEventListener('click', e => {
          e.preventDefault();
          hideModal(modalLogin);
          mainPage.classList.remove('page--login');
        });
      }, 500);
    });
  }

  // LOGIN SUBMIT
  const btnLoginSubmit = document.querySelector('#login-submit');
  const modalGameType = document.querySelector('#modal-type');

  if (btnLoginSubmit) {
    btnLoginSubmit.addEventListener('click', e => {
      e.preventDefault();
      hideModal(modalLogin);
      showModal(modalGameType);
      hideMenu();
      document.querySelector('#close-type').addEventListener('click', e => {
        e.preventDefault();
        hideModal(modalGameType);
        mainPage.classList.remove('page--login');
        showMenu();
      });
    });
  }

  // START PLAYING
  const btnPlayForWin = document.querySelector('#play-winning');
  const btnPlayForTrain = document.querySelector('#play-trainning');
  if (btnPlayForWin && btnPlayForTrain) {
    btnPlayForTrain.addEventListener('click', e => {
      e.preventDefault();
      hideModal(modalGameType);
    });
    btnPlayForWin.addEventListener('click', e => {
      e.preventDefault();
      hideModal(modalGameType);
    });
  }
});
