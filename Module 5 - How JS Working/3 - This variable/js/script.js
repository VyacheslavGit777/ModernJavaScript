'use strict';

const mode = 2; // 1 - this, 2 - reg vs arrow

if (mode == 1) {
  console.log(this);

  const getAge = function (birthYear) {
    console.log(2021 - birthYear);
    console.log(this);
  };

  const getAgeArr = birthYear => {
    console.log(2021 - birthYear);
    console.log(this);
  };

  getAge(1994);
  getAgeArr(1994);

  const user187 = {
    birthYear: 1974,
    getAge: function () {
      console.log(this);
      console.log(2021 - this.birthYear);
    },
  };

  user187.getAge();

  const user188 = {
    birthYear: 2002,
  };

  user188.getAge = user187.getAge;
  user188.getAge();

  const f = user187.getAge;
  f();
} else if (mode == 2) {
  // Regular VS Arrow Functions

  var firstName = 'Johny';
  var middleName = 'Chushpan';

  const user187 = {
    firstName: 'Jack',
    middleName: 'Fuckovich',
    birthYear: 1998,
    getAge: function () {
      console.log(this);
      console.log(2023 - this.birthYear);

      // old approach
      /* const self = this; // self or that // использовалось до es 6
      const isAdult = function () {
        console.log(this);
        console.log(2023 - this.birthYear >= 18);
        console.log(self);
        console.log(2023 - self.birthYear >= 18);
      }; */

      // new approach
      const isAdult = () => {
        console.log(this);
        console.log(2023 - this.birthYear >= 18);
      };

      isAdult();
    },
    /* sayGreeting: () =>
      console.log(`Hello, I'm ${this.firstName} ${this.middleName}`), */
    sayGreeting: function () {
      console.log(`Hello, I'm ${this.firstName} ${this.middleName}`);
    },
  };

  user187.sayGreeting();
  user187.getAge();

  // arguments keyword

  const exprSum = function (a, b) {
    console.log(arguments);
    return a + b;
  };

  exprSum(1, 2);
  exprSum(1, 2, 3, 9, 34);

  const arrSum = (a, b) => {
    console.log(arguments);
    return a + b;
  };

  //arrSum(7, 11, 23);

  function getThisDeclare() {
    console.log(this);
  }

  const getThisExpr = function () {
    console.log(this);
  };

  const getThisArr = () => console.log(this);

  getThisDeclare();
  getThisExpr();
  getThisArr();
}
