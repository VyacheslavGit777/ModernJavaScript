'use strict';

const score0Element = document.querySelector('#score--0');
const score1Element = document.getElementById('score--1');
const diceElement = document.querySelector('.dice');
const player0PlayZone = document.querySelector('.player--0');
const player1PlayZone = document.querySelector('.player--1');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const current0Element = document.getElementById('current--0');
const current1Element = document.getElementById('current--1');

const totalScores = [0, 0];
let currentScore = 0;
let activePlayer = 0;
let isPlaying = true;

// Start Game

const changePlayer = function () {
  player0PlayZone.classList.toggle('player--active');
  player1PlayZone.classList.toggle('player--active');
  currentScore = 0;
  document.getElementById(`current--${activePlayer}`).textContent =
    currentScore;
  activePlayer = activePlayer === 0 ? 1 : 0;
};

const startGame = function () {
  score0Element.textContent = 0;
  score1Element.textContent = 0;
  current0Element.textContent = 0;
  current1Element.textContent = 0;

  diceElement.classList.add('hidden');
  if (player1PlayZone.classList.contains('player--active')) {
    changePlayer();
  }
  totalScores[0] = 0;
  totalScores[1] = 0;
  currentScore = 0;
  const allPlayers = document.querySelectorAll('.player');
  allPlayers[0].classList.remove('player--winner');
  allPlayers[1].classList.remove('player--winner');
  allPlayers[0].classList.add('player--active');
  isPlaying = true;
};

startGame();

// Roll dice
btnRoll.addEventListener('click', function () {
  if (isPlaying) {
    const diceNumber = Math.trunc(Math.random() * 6) + 1;
    if (diceElement.classList.contains('hidden')) {
      diceElement.classList.remove('hidden');
    }
    diceElement.src = `img/dice${diceNumber}.png`;

    if (diceNumber !== 1) {
      currentScore += diceNumber;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      changePlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (isPlaying) {
    totalScores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      totalScores[activePlayer];
    if (totalScores[activePlayer] >= 20) {
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
      isPlaying = false;
      diceElement.classList.add('hidden');
    } else {
      changePlayer();
    }
  }
});

btnNew.addEventListener('click', startGame);
