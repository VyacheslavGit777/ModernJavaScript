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
  score: '2:1',
  scored: ['Kroos', 'Benzema', 'Mingueza'],
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

console.log(
  'Average: ' + (game.odds.team1 + game.odds.team2 + game.odds.draw) / 3
);

const odds = game.odds;
for (const [key, value] of Object.entries(odds)) {
  console.log(`Rate for ${game[key] ?? 'draw'}: ${value}`);
}
