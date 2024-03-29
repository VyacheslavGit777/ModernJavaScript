'use strict';

const Person = function (firstName, birthYear) {
  //console.log(this);
  this.firstName = firstName;
  this.birthYear = birthYear;
  this.age = new Date().getFullYear() - birthYear;
};

const jack = new Person('Jack', 1974);
console.log(jack);

// 1. Создаётся новый пустой объект {}
// 2. Вызывается функция, this = {}
// 3. {} связывается с прототипом
// 4. Функция автоматически возвращает {}
