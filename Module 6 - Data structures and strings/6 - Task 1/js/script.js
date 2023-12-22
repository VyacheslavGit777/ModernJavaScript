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
  printGoals: function (...playerName) {
    let t1 = 0,
      t2 = 0;
    for (let i = 1; i <= playerName.length; i++) {
      this.players[0].includes(playerName[i - 1]) ? t1++ : t2++;
      console.log(
        `Player ${playerName[i - 1]} scored a goal. Score: ${t1}:${t2}`
      );
    }
  },
};

const [players1, players2] = [...game.players];

const [goalkeeper, ...fieldPalyers] = players1;
const allPlayers = [...game.players[0], ...game.players[1]];
const players1Total = [
  ...game.players[0],
  'Marcelo',
  'Isco',
  'Asensio',
  'Diaz',
  'Odriozola',
];

//const { team1, draw, team2 } = game.odds;
const {
  odds: { team1, draw, team2 },
} = game;

console.log('Game1');
game.printGoals('Mingueza', 'Messi', 'Modrich', 'Nacho');
console.log('Game2');
game.printGoals(...game.scored);

team1 < team2 && console.log(`${game.team1} is more likely to win`);
team1 > team2 && console.log(`${game.team2} is more likely to win`);
