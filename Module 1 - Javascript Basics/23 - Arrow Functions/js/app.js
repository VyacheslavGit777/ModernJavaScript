const getAge = function(birthYear, yearNow) {
  return yearNow - birthYear;
} 

const myAge = getAge(2001, 2023);
console.log(myAge);

// arrow expression

const getAge2 = (birthYear, yearNow) => yearNow - birthYear;
console.log(getAge2(1984, 2023));

const canBuyAclohol = (birthYear, yearNow) => {
  const age = yearNow - birthYear;
  const isPersonOlder21 = age >= 21 ? true : false;
  return isPersonOlder21;
}

//const canBuyAclohol = (birthYear, yearNow) => (yearNow - birthYear) >= 21 ? true : false;

console.log(canBuyAclohol(2002, 2023));

const minusFn = (a, b) => {
  a /= 2;
  return a - b;
}
console.log(minusFn(14, 5));