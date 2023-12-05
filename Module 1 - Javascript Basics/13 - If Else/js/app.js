/* const age = 17;
const isAdult = age >= 18;

if (isAdult) {
  console.log('You can watch this video');
} else {
  console.log('You can\'t watch this video');
} */

const age = 15;

if (age >= 18) {
  console.log('You can watch this video');
} else {
  const yearsLeft = 18 - age;
  console.log(`You can watch this video after ${yearsLeft} years later`);
}

const birthYear = 2010;
const yearNow = 2020;
const ageNow = yearNow - birthYear;

let answer;

if (ageNow >= 16) {
  answer = 'Yes'
} else {
  answer = 'No'
}

console.log(`Am I Adult? - ${answer}`)


const color = 'red';

if (color == 'green') {
  console.log('Go!')
} else if (color == 'yellow') {
  console.log('Get Ready!')
} else if (color == 'red') {
  console.log('Stop!')
} else {
  console.log('WTF?')
}
