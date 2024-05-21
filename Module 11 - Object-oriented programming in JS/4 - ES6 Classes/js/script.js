'use strict';

const variant = 4; // 1 - Классы в ES6
// 2 - Setters and Getters
// 3 - Static methods
// 4 - Object.create

if (variant === 1) {
  // Классы в ES6

  // Class expression
  /* const Person = class {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }

  // Методы добавляются в свойство .prototype
  printAge() {
    console.log(new Date().getFullYear() - this.birthYear);
  }

  greet() {
    console.log(`Hello! My name is ${this.firstName}!`);
  }
}; */

  // Class declaration
  class Person {
    constructor(firstName, birthYear) {
      this.firstName = firstName;
      this.birthYear = birthYear;
      const myVar = 3.14;
    }

    // Методы добавляются в свойство .prototype
    printAge() {
      console.log(new Date().getFullYear() - this.birthYear);
    }

    greet() {
      console.log(`Hello! My name is ${this.firstName}!`);
    }
  }

  const jack = new Person('Jack', 2000);
  console.log(jack);
  jack.printAge();

  console.log(jack.__proto__ === Person.prototype);
  console.log(Object.getPrototypeOf(jack) === Person.prototype);

  /* Person.prototype.greet = function() {
  console.log(`Hello! My name is ${this.firstName}!`);
} */

  jack.greet();

  // 1. Классы не "поднимаются" при помощи hoisting
  // 2. Классы являются "first class citizens"
  // 3. Тело класса выполняется в strict режиме
} else if (variant === 2) {
  // Setters and Getters

  const account = {
    owner: 'Jack',
    transactions: [300, 500, -100, 600],

    /* getLastTransaction() {
      return this.transactions.slice(-1).pop();
    }, */
    get lastTransaction() {
      return this.transactions.slice(-1).pop();
    },

    set lastTransaction(trans) {
      this.transactions.push(trans);
    },
  };
  console.log(account.lastTransaction);
  account.lastTransaction = 100;
  console.log(account.transactions);

  class Person {
    constructor(fullName, birthYear) {
      this.fullName = fullName;
      this.birthYear = birthYear;
      const myVar = 3.14;
    }

    // Методы добавляются в свойство .prototype
    printAge() {
      console.log(new Date().getFullYear() - this.birthYear);
    }

    greet() {
      console.log(`Hello! My name is ${this.fullName}!`);
    }

    get age() {
      return new Date().getFullYear() - this.birthYear;
    }

    // Установить значение в уже существующее свойство
    set fullName(personName) {
      if (personName.includes(' ')) {
        this._fullName = personName;
      } else {
        alert('Полное имя должно состоять из имени и фамилии!');
      }
    }
    get fullName() {
      return this._fullName;
    }
  }

  const jack = new Person('Jack Fuckovich', 2000);
  console.log(jack);

  const jane = new Person('Jane Red', 2001);
  console.log(jane.fullName);
} else if (variant === 3) {
  /* const Person = function(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }
  Person.highFive = function() {
    console.log('High five');
  }
  Person.highFive();
  const jack = new Person('Jack', 2000); */
  //jack.highFive();

  class Person {
    constructor(fullName, birthYear) {
      this.fullName = fullName;
      this.birthYear = birthYear;
    }

    // Методы добавляются в свойство .prototype
    printAge() {
      console.log(new Date().getFullYear() - this.birthYear);
    }

    // Статический метод, добавляется к классу, не к прототипу
    static highFive() {
      console.log('High Five!');
    }
  }
  Person.highFive();
  const jack = new Person('Jack', 2000);
  //jack.highFive(); -- error
} else if (variant === 4) {
  // Object.create()
  const PersonProto = {
    printAge() {
      console.log(new Date().getFullYear() - this.birthYear);
    },
    initPerson(firstName, birthYear) {
      this.firstName = firstName;
      this.birthYear = birthYear;
    },
  };
  const jack = Object.create(PersonProto);
  console.log(jack);

  jack.name = 'Jack';
  jack.birthYear = 2000;

  jack.printAge();

  console.log(Object.getPrototypeOf(jack) === PersonProto);

  const jane = Object.create(PersonProto);
  jane.initPerson('Jane', 2002);
  jane.printAge();

  console.log(jack);
  console.log(jane);
}
