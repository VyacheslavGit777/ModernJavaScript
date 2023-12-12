'use strict';

const modalWindow = document.querySelector('.modal-window');
const overlay = document.querySelector('.overlay');
const btnCloseModalWindow = document.querySelector('.close-modal-window');
const btnsShowModalWindows = document.querySelectorAll('.show-modal-window');
console.log(btnsShowModalWindows);

const showModalWindow = function () {
  //console.log(`Click on button № ${i + 1}!`);
  modalWindow.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModalWindow = function () {
  modalWindow.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsShowModalWindows.length; i++) {
  //console.log(btnsShowModalWindows[i].textContent);
  btnsShowModalWindows[i].addEventListener('click', showModalWindow);

  btnCloseModalWindow.addEventListener('click', closeModalWindow);

  overlay.addEventListener('click', closeModalWindow);
}

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modalWindow.classList.contains('hidden')) {
    closeModalWindow();
  }
});
