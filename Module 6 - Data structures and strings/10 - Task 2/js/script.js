'use strict';
const game = {
  team1: 'REAL MADRID',
  team2: 'BARCELONA',
  players: [
    [
      'Courtois',
      'Vazquez',
      'Militao',
      'Nacho',
      'Mendy',
      'Casemiro',
      'Valverde',
      'Modrich',
      'Kroos',
      'Vinicius',
      'Benzema',
    ],
    [
      'Stegen',
      'Mingueza',
      'Araujo',
      'Lenglet',
      'Dest',
      'Busquets',
      'Jong',
      'Alba',
      'Messi',
      'Pedri',
      'Dembele',
    ],
  ],
  score: '3:1',
  scored: ['Kroos', 'Benzema', 'Mingueza', 'Benzema'],
  date: 'Apr 10th, 2021',
  odds: {
    team1: 1.48,
    draw: 2.53,
    team2: 4.25,
  },
};

for (const score of game.scored.entries()) {
  console.log(`Goal ${score[0] + 1} - ${score[1]}`);
}

const odds = game.odds;

let averageOdd = 0;

for (const odd of Object.values(odds)) {
  averageOdd += odd;
}

averageOdd /= Object.values(odds).length;

console.log(`Average: ${averageOdd}`);

for (const [key, value] of Object.entries(odds)) {
  const mutableText = key === 'draw' ? 'draw' : `${game[key]} victory`;
  console.log(`Rate for ${mutableText}: ${value}`);
  //console.log(`Rate for ${game[key] ?? 'draw'}: ${value}`);
}

const goalScorers = {};

for (const player of game.scored) {
  goalScorers[player] ? goalScorers[player]++ : (goalScorers[player] = 1);
}
console.log(goalScorers);
