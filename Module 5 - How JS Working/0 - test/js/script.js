const greeting = 'Hello!';

const foo = () => {
  let x = 3;
  const y = bar(1, 2);
  x += y;
  return x;
};

function bar(a1, a2) {
  var z = 5;
  return z;
}

const n = foo();
console.log(n);

const getAge = function (yearNow) {
  const calcAge = birthYear => yearNow - birthYear;
  const age = calcAge(1991);
  return age;
};

console.log(getAge(2023));
