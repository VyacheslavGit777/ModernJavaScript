'use strict';

const Person = function (firstName, birthYear) {
  //Instance properties (свойства экземпляра)
  this.firstName = firstName;
  this.birthYear = birthYear;
  this.age = new Date().getFullYear() - birthYear;

  // Никогда не делать этого, т.к. с каждым созданным экземпляром будет создаваться
  // и этот метод, столько, сколько и экземпляров
  /* this.printAge = function() {
    console.log(new Date().getFullYear() - this.birthYear);
  } */
};

const jack = new Person('Jack', 1974);
console.log(jack);

// 1. Создаётся новый пустой объект {}
// 2. Вызывается функция, this = {}
// 3. {} связывается с прототипом
// 4. Функция автоматически возвращает {}

const mary = new Person('Mary', 2000);
const john = new Person('John', 2003);
const vasya = 'Vasya';
console.log(mary, john);

console.log(mary instanceof Person);
console.log(vasya instanceof Person);
/* jack.printAge(); */

// Прототипы
console.log(Person.prototype);

Person.prototype.printAge = function () {
  console.log(new Date().getFullYear() - this.birthYear);
};

jack.printAge();
console.log(jack.__proto__);
console.log(jack.__proto__ === Person.prototype);
console.log(Person.prototype.isPrototypeOf(jack));
console.log(Person.prototype.isPrototypeOf(Person));

Person.prototype.creatureClass = 'Mammal';
console.log(jack, john);
console.log(jack.hasOwnProperty('birthYear'));
console.log(jack.hasOwnProperty('creatureClass'));
