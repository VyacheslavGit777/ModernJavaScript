'use strict';

// Primitive VS Reference Types

const part = 2;

if (part == 1) {
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
} else {
  // Primitives
  let lastName = 'Brown';
  let oldLastName = lastName;
  lastName = 'White';
  console.log(`Last name: ${lastName}, old last name: ${oldLastName}`);

  // Objects
  const jane = {
    firstName: 'Jane',
    lastName: 'Brown',
    age: 21,
  };

  const marriedJane = jane;
  marriedJane.lastName = 'White';
  //marriedJane = {}; // Assignment to constant variable.

  console.log('Jane: ', jane);
  console.log('Married Jane:', marriedJane);

  // Objects Copying
  // Object.assign - поверхностное копирование, без создания своих вложеннойстей внутри объекта

  const sara = {
    firstName: 'Sara',
    lastName: 'Brown',
    age: 25,
    familyMembers: ['Jack', 'Bob', 'Greta'],
  };

  const saraCopy = Object.assign({}, sara);
  saraCopy.lastName = 'White';
  saraCopy.familyMembers.push('Bill', 'Marta');

  console.log('Sara: ', sara);
  console.log('Sara mar: ', saraCopy);
}
