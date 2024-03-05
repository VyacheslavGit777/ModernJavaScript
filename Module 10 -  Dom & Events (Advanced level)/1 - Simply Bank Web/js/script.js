'use strict';

///////////////////////////////////////
// Modal window

const modalWindow = document.querySelector('.modal-window');
const overlay = document.querySelector('.overlay');
const btnCloseModalWindow = document.querySelector('.btn--close-modal-window');
const btnsOpenModalWindow = document.querySelectorAll(
  '.btn--show-modal-window'
);
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

const openModalWindow = function (e) {
  e.preventDefault();
  modalWindow.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModalWindow = function () {
  modalWindow.classList.add('hidden');
  overlay.classList.add('hidden');
};

/*for (let i = 0; i < btnsOpenModalWindow.length; i++)
  btnsOpenModalWindow[i].addEventListener('click', openModalWindow);*/

btnsOpenModalWindow.forEach(button =>
  button.addEventListener('click', openModalWindow)
);

btnCloseModalWindow.addEventListener('click', closeModalWindow);
overlay.addEventListener('click', closeModalWindow);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modalWindow.classList.contains('hidden')) {
    closeModalWindow();
  }
});

// Прокручивание страницы

btnScrollTo.addEventListener('click', function (e) {
  const section1Coords = section1.getBoundingClientRect();
  console.log(section1Coords);
  console.log(e.target.getBoundingClientRect());
  console.log(
    `Текущее прокручивание: x, y`,
    window.pageXOffset,
    window.pageYOffset
  );
  /*  console.log(
    'Ширина и высота viewport',
    document.documentElement.clientWidth,
    document.documentElement.clientHeight
  );
  /* window.scrollTo(
    section1Coords.left + window.pageXOffset,
    section1Coords.top + window.pageYOffset
  ); */
  /*
  window.scrollTo({
    left: section1Coords.left + window.pageXOffset,
    top: section1Coords.top + window.pageYOffset,
    behavior: 'smooth',
  }); */

  section1.scrollIntoView({ behavior: 'smooth' });
});

/////////////////////////////////////////////////////////
// Smooth page navigation
/* document.querySelectorAll('.nav__link').forEach(function (htmlElement) {
  htmlElement.addEventListener('click', function (e) {
    e.preventDefault();
    const href = this.getAttribute('href');
    document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
  });
}); */

// Делегирование событий
// 1. Добавляем event listener для общего родителя
document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();
  // 2. Определить target элемент
  if (e.target.classList.contains('nav__link')) {
    const href = e.target.getAttribute('href');
    document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
  }
});

/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////

/*  

/////////////////////////////////////////////
// Выбор элементов
console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

console.log(document.querySelector('.header'));
const sections = document.querySelectorAll('.section');
console.log(sections);

console.log(document.getElementById('section--1'));
const buttons = document.getElementsByTagName('button');
console.log(buttons);

console.log(document.getElementsByClassName('btn'));

/////////////////////////////////////////////
// Создание и вставка элементов
//insertAdjacentHTML()

const message = document.createElement('div');
message.classList.add('cookie-message');
 //message.textContent =
  //'Мы используем на этом сайте cookie для улучшения функциональности'; 
message.innerHTML =
  'Мы используем на этом сайте cookie для улучшения функциональности <button class="btn btn--close-cookie">Ok!</button>';

const header = document.querySelector('.header');
//header.prepend(message);
header.append(message);
//header.append(message.cloneNode(true));
//header.before(message);
//header.after(message);

// Удаление элементов
document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', function () {
    message.remove();
    // Как выглядело раньше, когда не было метода remove()
    //message.parentElement.removeChild(message);
  });


// Стили

message.style.backgroundColor = '#076785';
message.style.width = '120%';

console.log(message.style.width);
console.log(message.style.color);
console.log(getComputedStyle(message).color);
console.log(getComputedStyle(message));
console.log(getComputedStyle(message).height);
message.style.height =
  Number.parseFloat(getComputedStyle(message).height) + 50 + 'px';

document.documentElement.style.setProperty('--color-first', 'yellow');

// Аттрибуты
const logo = document.querySelector('.nav__logo');
console.log(logo.alt);
console.log(logo.src);

logo.alt = 'Лого Прекрасного Банка';

// Нестандартный аттрибут
console.log(logo.developer);
console.log(logo.getAttribute('developer'));

logo.setAttribute('copyright', 'Masters Of Code');

const link = document.querySelector('.nav__link--btn');
console.log(link.href);
console.log(link.getAttribute('href'));

// Data attributes
console.log(logo.dataset.versionNumber);

// Classes
logo.classList.add('a', 'b');
logo.classList.remove('a', 'b');
logo.classList.toggle('a');
logo.classList.contains('a');

// Не использовать
//logo.className = 'a';
*/

// Виды Событий И Обработчиков Событий

// Новый метод, с анонимным обработчиком
/* const h1 = document.querySelector('h1');
h1.addEventListener('mouseenter', function (e) {
  alert('addEventListener: You are now at the h1 element');
}); */

// Старый метод
/* h1.onclick = function (e) {
  alert('addEventListener: You have clicked the h1 element');
};
 */

// Новый метод без анонимного обработчика, будет возможность его удалить
/* const h1 = document.querySelector('h1');
const alertMouseEnterH1 = function (e) {
  alert('addEventListener: You are now at the h1 element');
  h1.removeEventListener('mouseenter', alertMouseEnterH1);
}; */

/* const h1 = document.querySelector('h1');
const alertMouseEnterH1 = function (e) {
  alert('addEventListener: You are now at the h1 element');
};

h1.addEventListener('mouseenter', alertMouseEnterH1);

setTimeout(() => h1.removeEventListener('mouseenter', alertMouseEnterH1), 3000); */

//////////////////////////////////////////////////////////
// Event propagation
// rgb(123, 56, 78)

/* function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const getRandomColor = () =>
  `rgb(${getRandomIntInclusive(0, 255)}, ${getRandomIntInclusive(
    0,
    255
  )}, ${getRandomIntInclusive(0, 255)})`;

document.querySelector('.nav__link').addEventListener('click', function (e) {
  this.style.backgroundColor = getRandomColor();
  console.log('Link', e.target, e.currentTarget);
  console.log(e.currentTarget === this);
  // Stop propagation()
  // e.stopPropagation();
});

document.querySelector('.nav__links').addEventListener('click', function (e) {
  this.style.backgroundColor = getRandomColor();
  console.log('Links', e.target, e.currentTarget);
  console.log(e.currentTarget === this);
});

document.querySelector('.nav').addEventListener(
  'click',
  function (e) {
    this.style.backgroundColor = getRandomColor();
    console.log('Nav', e.target, e.currentTarget);
    console.log(e.currentTarget === this);
  } //,true
);

document.querySelector('body').addEventListener('click', function (e) {
  this.style.backgroundColor = getRandomColor();
  console.log('Body', e.target, e.currentTarget);
  console.log(e.currentTarget === this);
}); */
