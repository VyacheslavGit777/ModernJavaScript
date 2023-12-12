'use strict';

/* console.log(document.querySelector('.guess-message').textContent);
document.querySelector('.guess-message').textContent = 'Правильно!';
document.querySelector('.question').textContent = 7;
document.querySelector('.score').textContent = 11;
console.log(document.querySelector('.number-input').value);
document.querySelector('.number-input').value = 13; */

/* const eventHandler = function () {
  console.log(document.querySelector('.number-input').value);
};

document.querySelector('.check').addEventListener('click', eventHandler); */

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscrore = 0;

const displayGuessMessage = function (message) {
  document.querySelector('.guess-message').textContent = message;
};
console.log(secretNumber);

document.querySelector('.check').addEventListener('click', function () {
  const guessingNumber = Number(document.querySelector('.number-input').value);
  if (!guessingNumber) {
    displayGuessMessage('Введите число!');
  } else if (guessingNumber === secretNumber) {
    displayGuessMessage('Правильно!');
    document.querySelector('body').style.backgroundColor = 'rgb(9, 250, 21)';
    const question = document.querySelector('.question');
    question.textContent = secretNumber;
    question.style.width = '50rem';

    if (score > highscrore) {
      highscrore = score;
      document.querySelector('.highscore').textContent = highscrore;
    }
  } else if (guessingNumber !== secretNumber) {
    if (score > 1) {
      displayGuessMessage(
        guessingNumber > secretNumber ? 'Слишком много!' : 'Слишком мало!'
      );
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayGuessMessage('Game over!');
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  console.log(secretNumber);
  document.querySelector('body').style.backgroundColor = 'rgb(0, 0, 0)';
  document.querySelector('.question').textContent = '???';
  document.querySelector('.question').style.width = '25rem';
  displayGuessMessage('Начни угадывать!');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number-input').value = '';
});
