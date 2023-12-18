'use strict';
// hoisting

// Variables
console.log(firstName);
//console.log(job);
//console.log(birthYear);

var firstName = 'Jack';
let job = 'programmer';
const birthYear = 1974;

// Functions

console.log(declSum(1, 2));
//console.log(exprSum(1, 2));
//console.log(arrSum(1, 2));

function declSum(a, b) {
  return a + b;
}

const exprSum = function (a, b) {
  return a + b;
};

//const arrSum = (a, b) => a + b;

var arrSum = (a, b) => a + b;

// Example

console.log(`isUserValid = ${isUserValid}`);

if (!isUserValid) {
  deleteUser();
}

var isUserValid = true; // hoisting as undifined

function deleteUser() {
  console.log('User is deleted!');
}

var a = 1;
let b = 2;
const c = 3;

console.log(a === window.a);
console.log(b === window.b);
console.log(c === window.c);
