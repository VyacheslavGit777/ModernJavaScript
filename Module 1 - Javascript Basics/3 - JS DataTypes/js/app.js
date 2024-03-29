let x = 'something';
console.log(x);
x = 3;
console.log(x);

console.log('-----------Primitive data types---------------');

// Primitive data types

//String
const someText = 'Some text';
console.log(typeof someText);

//Number
const someNumber = 11;
console.log(typeof someNumber);

//Boolean
const someBoolean = true;
console.log(typeof someBoolean);

//Null
const someNull = null;
console.log(typeof someNull);

//Undefined
let someUndefined;
console.log(typeof someUndefined);

//Symbol
const someSymbol = Symbol();
console.log(typeof someSymbol);


// Reference data types

console.log('---------Reference data types------------');

// Array
const someArray = [1, 2, 3, 4];
console.log(typeof someArray);

// Object Literal
const someObjectLiteral = {
  firstProperty: '12',
  secondProperty: 'second'
};
console.log(typeof someObjectLiteral);

// function
const someFunction = new Function(); 
console.log(typeof someFunction);

// Date

const someDate = new Date();
console.log(typeof someDate);
