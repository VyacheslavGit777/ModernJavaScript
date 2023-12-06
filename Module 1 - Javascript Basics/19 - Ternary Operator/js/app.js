const money = 100;
const cost = 10;
money >= cost ? console.log('You can buy it!') : console.log('You can\'t buy it!');

const canYouBuyIt = money >= cost ? 'You can buy it!' : 'You can\'t buy it!';
console.log(canYouBuyIt);

let canYouBuyIt1;

if (money >= cost) {
  canYouBuyIt1 = 'You can buy it!'
} else {
  canYouBuyIt1 = 'You can\'t buy it!'
}

console.log(canYouBuyIt1);

// Task
// if age >= 18 You can buy the alcohol
// else You can't buy the alcohol

function CanBuyAlcohol() {
  const yourAge = prompt('Enter your age');
  const CanBuy = Boolean(yourAge) && yourAge >= 18 ? 'You can buy the alcohol' : 'You can\'t buy the alcohol';
  alert(CanBuy);
  console.log(CanBuy);
}