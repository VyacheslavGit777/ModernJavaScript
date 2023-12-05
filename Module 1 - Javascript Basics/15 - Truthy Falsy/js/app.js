// JavaScript falsy values:
// 0, '', undefined, null, Nan

console.log(Boolean(0), Boolean(''), Boolean(undefined), Boolean(null), Boolean(NaN));
console.log(Boolean(32), Boolean('Hello'), Boolean([]), Boolean({}), Boolean(3.5));

const age = 3;

if (age) {
  console.log('The person was born');
} else {
  console.log('The person wasn\'t born');
}

let a = 5, b;

console.log(Boolean(a), Boolean(b));

let weight = 0;

if (Boolean(weight) || weight == 0) {
  console.log('Weight is definded')
} else {
  console.log('Weight is undefinded')
}