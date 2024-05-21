'use strict';

// Прототипное наследование для встроенных объектов
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;

  this.age = new Date().getFullYear() - birthYear;
};

Person.prototype.creatureClass = 'Mammal';

const jack = new Person('Jack', 1990);
console.log(jack.hasOwnProperty('birthYear'));

// Person prototype
console.log(jack.__proto__);

// Object prototype - верхушка цепи прототипов
console.log(jack.__proto__.__proto__);

// null
console.log(jack.__proto__.__proto__.__proto__);

console.log(Person.prototype.constructor);
console.dir(Person.prototype.constructor);

const numbers = [3, 4, 2, 5, 8, 8, 8, 2, 2];
console.log(numbers.__proto__);
console.log(Object.getPrototypeOf(numbers));
console.log(numbers.__proto__ === Array.prototype);
console.log(numbers.constructor.prototype === Array.prototype);
console.log(numbers.__proto__.__proto__);

Array.prototype.uniqueElements = function () {
  return [...new Set(this)];
};

console.log(numbers.uniqueElements());

const h2 = document.querySelector('h2');
console.dir(h2);
console.dir(n => n * 2);
