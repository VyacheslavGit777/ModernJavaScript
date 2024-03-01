'use strict';
//Таймеры

const situation = 4;

if (situation === 1) {
  setTimeout(() => console.log('Ваши суши доставлены!'), 3000);
  console.log('Ожидание...');
} else if (situation === 2) {
  setTimeout(
    (ingrid1, ingrid2) =>
      console.log(`Ваши суши доставлены! Ингридиенты: ${ingrid1}, ${ingrid2}`),
    3000,
    'Тунец',
    'Лосось'
  );
  console.log('Ожидание...');
} else if (situation === 3) {
  const ingridients = ['Тунец', 'Лосось'];

  const sushiTimer = setTimeout(
    ingridients =>
      console.log(
        `Ваши суши доставлены! Ингридиенты: ${ingridients.join(', ')}`
      ),
    3000,
    ingridients
  );
  console.log('Ожидание...');

  if (ingridients.includes('Тунец')) {
    clearTimeout(sushiTimer);
  }
} else if (situation === 4) {
  const formatTime = (hours, minutes, seconds) =>
    `Текущее время: ${String(hours).padStart(2, '0')}:${String(
      minutes
    ).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  const timerP = document.getElementById('timer');

  const timer = setInterval(function () {
    const now = new Date();
    timerP.innerText = formatTime(
      now.getHours(),
      now.getMinutes(),
      now.getSeconds()
    );
  }, 1000);
}
