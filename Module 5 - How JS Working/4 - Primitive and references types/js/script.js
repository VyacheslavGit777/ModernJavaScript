'use strict';

// Primitive VS Reference Types

let a = 1;
let b = a;
a = 2;

console.log(`a = ${a}, b = ${b}`);

const x = {
  foo: 'bar',
  a: 1,
};

const y = x;
y.a = 2;

console.log('Object x: ', x);
console.log('Object y: ', y);
