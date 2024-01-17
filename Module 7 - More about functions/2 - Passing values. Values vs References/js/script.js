const flightNum = 'BV328';
const passenger1145 = {
  firstName: 'Jack',
  lastName: 'Brown',
  passport: 'HF128490',
};

const checkIn = function (flight, passenger) {
  flight = 'bv328';
  passenger.firstName = passenger.firstName.toLowerCase();
  passenger.lastName = passenger.lastName.toLowerCase();

  if (passenger.passport === 'HF128490') {
    alert('Welome to the board!');
  } else {
    alert('Incorrect passport');
  }
};

checkIn(flightNum, passenger1145);
console.log(flightNum);
console.log(passenger1145);

const changePassportNumber = function (person) {
  person.passport = Math.trunc(Math.random() * 1000000000);
};

changePassportNumber(passenger1145);
checkIn(flightNum, passenger1145);
