'use strict';

const events = new Map([
  [19, 'Goal'],
  [21, 'Substitution'],
  [43, 'Goal'],
  [56, 'Substitution'],
  [69, 'Yellow card'],
  [73, 'Substitution'],
  [75, 'Yellow card'],
  [79, 'Substitution'],
  [81, 'Red card'],
  [93, 'Goal'],
]);

// 1
/*const gameEventsSet = new Set();
for (const [key, value] of events) {
  gameEventsSet.add(value);
}
const gameEvents = [...gameEventsSet];
console.log(gameEvents);*/

const gameEvents = [...new Set(events.values())];
console.log(gameEvents);

// 2
events.delete(75);
console.log(events);

// 3
const fullMatchTime = 90;
const averageEventHappen = fullMatchTime / events.size;
console.log(
  `On average, an event happened every ${averageEventHappen} minutes`
);

// 4 Example: [FIRST HALF] 19:  Goal
for (const [key, value] of events) {
  console.log(`${key <= 45 ? '[FIRST ' : '[SECOND '}HALF] ${key}: ${value}`);
}
