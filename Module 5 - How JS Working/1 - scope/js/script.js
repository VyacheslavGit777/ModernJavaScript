'use strict';

function getAge(birthYear) {
  const age = 2021 - birthYear;

  function printAge() {
    let info = `${firstName} is ${age}, born is ${birthYear}`;
    console.log(info);

    if (age >= 18) {
      var isAdult = true;
      const firstName = 'John';
      const adult = `${firstName} is aduld`;
      console.log(adult);

      function sum(a, b) {
        return a + b;
      }
      console.log(sum(1, 2));
      info = 'New info';
    }

    //console.log(adult);  // Reference error
    console.log(isAdult);
    console.log(info);
    //sum(1, 2); // Reference error, scope of function is block with strict, without strict - function scope
  }

  //console.log(info); // Reference error: info is not defined

  printAge();
  //console.log(isAdult); // Reference error
  //console.log(firstName);
  return age;
}

//console.log(age); // Reference error: age is not defined

//getAge(1974); // error, can not access before initialization
const firstName = 'YouRa';
getAge(1974);

//printAge();  // Reference error: printAge is not defined
