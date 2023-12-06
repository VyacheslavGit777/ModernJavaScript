console.log(getAge(1991, 2023));

function getAge(birthYear, yearNow) {
  //const age = yearNow - birthYear;
  //return age;
  return yearNow - birthYear;
}

/* console.log(getAge(1991, 2023)); */

/* console.log(getAge2(2006, 2023)); */

const getAge2 = function (birthYear, yearNow) {
  return yearNow - birthYear;
}

console.log(getAge2(2006, 2023));