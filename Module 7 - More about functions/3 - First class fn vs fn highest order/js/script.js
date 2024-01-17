'use strict';

const isfirstPart = 4;

// Функции принимающие Callback функции
if (isfirstPart === 1) {
  const removeSpaces = function (text) {
    return text.replace(/ /g, '').toLowerCase();
  };

  const upperFirstWord = function (text) {
    const [first, ...others] = text.split(' ');
    return [first.toUpperCase(), ...others].join(' ');
  };

  // High-Order function
  const converter = function (str, func) {
    console.log(`The original text: ${str}`);
    console.log(`The converted text: ${func(str)}`);

    console.log(`Converted by: ${func.name}`);
  };

  converter('Hello to everyone!', upperFirstWord);
  console.log('');
  converter('Hello to everyone!', removeSpaces);

  // Callback functions are very common in JS
  const twice = num => console.log(num * 2);
  [1, 2, 3].forEach(twice);
} else if (isfirstPart === 2) {
  // Функции возвращающие функции
  const greet = function (greetingText) {
    return function (name) {
      console.log(`${greetingText} ${name}!`);
    };
  };

  const hi = greet('Hi');
  hi('Jack');
  hi('Diana');
  greet('Hey')('Nick');

  /* const greetArrow = greetingText =>
  function (name) {
    console.log(`${greetingText} ${name}!`);
  }; */

  const greetArrow = greetingText => name =>
    console.log(`${greetingText} ${name}!`);

  greetArrow('Hey')('Dude');
} else if (isfirstPart === 3) {
  // Методы call() и apply()
  const airline234 = {
    airlineName: 'SkyUp',
    iataCode: 'SU',
    bookings: [],
    /* book(flightNumber, passengerName) {
      console.log(
        `${passengerName} has booked a ticket on ${this.airlineName} flight ${this.iataCode} ${flightNumber}`
      );
      this.bookings.push({
        flight: `${this.iataCode}${this.flightNumber}`,
        passengerName,
      });
    }, */
  };

  const book = function (flightNumber, passengerName) {
    console.log(
      `${passengerName} has booked a ticket on ${this.airlineName} flight ${this.iataCode} ${flightNumber}`
    );
    this.bookings.push({
      flight: `${this.iataCode}${flightNumber}`,
      passengerName,
    });
  };

  const airline123 = {
    airlineName: 'RussianFlyght',
    iataCode: 'RF',
    bookings: [],
  };

  /* airline234.book(346, 'Jim Green');
  airline234.book(635, 'Jack Fuckovich');
  console.log(airline234);

  const book = airline234.book; */

  //This doesn't work
  //book(345, 'Linda Wiliams');

  // call()
  book.call(airline234, 345, 'Linda Williams');
  book.call(airline123, 111, 'Bob Smith');
  console.log(airline234);
  console.log(airline123);

  // apply() - old approach
  const flightData = [111, 'Nick Wong'];
  book.apply(airline123, flightData);
  console.log(airline123);

  book.call(airline234, ...flightData);
  console.log(airline234);

  book.apply(airline123, [18, 'Jack']);
} else if (isfirstPart === 4) {
  const airline1 = {
    airlineName: 'SkyUp',
    iataCode: 'SU',
    bookings: [],
    book(flightNumber, passengerName) {
      console.log(
        `${passengerName} has booked a ticket on ${this.airlineName} flight ${this.iataCode} ${flightNumber}`
      );
      this.bookings.push({
        flight: `${this.iataCode} ${flightNumber}`,
        passengerName,
      });
    },
  };

  const airline2 = {
    airlineName: 'RussianFlyght',
    iataCode: 'RF',
    bookings: [],
  };

  const airline3 = {
    airlineName: 'USFlyght',
    iataCode: 'USF',
    bookings: [],
  };

  const book = airline1.book;

  // Метод bind()
  const bookAirline2 = book.bind(airline2);
  bookAirline2(111, 'Linda');
  console.log(airline2);

  const bookAirline3 = book.bind(airline3);
  bookAirline3(777, 'Vasya');
  console.log(airline3);

  const bookAirline3Flight21 = book.bind(airline3, 21);
  bookAirline3Flight21('Jack Fuckovich');

  // bind() with eventListeners
  airline1.airplanes = 200;
  airline1.purchaseAirplane = function () {
    console.log(this);
    this.airplanes++;
    console.log(this.airplanes);
  };

  document
    .querySelector('#Purchase')
    .addEventListener('click', airline1.purchaseAirplane.bind(airline1));

  // Partial application
  const getPercentage = (totalValue, value) => (value / totalValue) * 100;
  const getPercentage23789 = getPercentage.bind(null, 23789);
  console.log(getPercentage23789(10000));
}
