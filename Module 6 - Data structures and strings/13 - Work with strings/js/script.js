'use strict';

const partStrings = 3;

if (partStrings === 1) {
  const airline = 'SkyUp Airline';
  const airplane = 'Boeing 737';
  console.log(airplane[0]);
  console.log(airplane[1]);
  console.log(airplane[2]);
  console.log('SkyUp'[0]);

  console.log(airline.length);
  console.log('Boeing 737'.length);

  console.log(airplane.indexOf(' '));
  console.log(airplane.indexOf('7'));
  console.log(airplane.lastIndexOf('7'));
  console.log(airline.indexOf('Up'));

  console.log(airplane.slice(7));
  console.log(airplane.slice(0, 6));

  console.log(airline.slice(0, airline.indexOf(' ')));
  console.log(airplane.slice(airplane.lastIndexOf(' ') + 1));

  console.log(airline.slice(-2));
  console.log(airline.slice(2, -2));

  // 20ABCDEF
  const checkMiddleSeat = function (seat) {
    // B and E are middle seat
    const seatLetter = seat.slice(-1);
    seatLetter === 'B' || seatLetter === 'E'
      ? console.log('This is middle seat')
      : console.log('This is not middle seat');
  };

  checkMiddleSeat('21A');
  checkMiddleSeat('7B');
  checkMiddleSeat('14E');
} else if (partStrings === 2) {
  const airline = 'SkyUp Airline';
  const airplane = 'Boeing 737';

  console.log(airline.toLowerCase());
  console.log(airline.toUpperCase());

  // Fix the passenger name
  const passengerName = 'liNDa'; // Linda

  const fixedName = function (wrongName) {
    const passengerNameLower = wrongName.toLowerCase();
    return passengerNameLower[0].toUpperCase() + passengerNameLower.slice(1);
  };

  console.log(fixedName(passengerName));

  // Email validation

  const email = 'someemail@gmail.com';
  const loginEmail = '   SomeEmail@Gmail.com \n';

  const fixedMail = function (mailAdress) {
    //const mailLower = mailAdress.toLowerCase();
    //return mailLower.trim();
    return mailAdress.toLowerCase().trim();
  };

  console.log(fixedMail(loginEmail));
  console.log(fixedMail(loginEmail) === email);

  // Replacing

  const ticketPriceEU = '197,23€';
  const ticketPriceUS = ticketPriceEU.replace(',', '.').replace('€', '$');
  console.log(ticketPriceUS);

  const announcemet =
    'All passengers of flight EG234 come to boarding door 18. Boarding door 18!';
  console.log(announcemet.replaceAll('door', 'gate'));

  // Раньше меняли через регулярное выражение
  console.log(announcemet.replace(/door/g, 'gate'));

  // Methods return boolean
  console.log(airplane);
  console.log(airplane.includes('737'));
  console.log(airplane.startsWith('Bo'));
  console.log(airplane.startsWith('Bt'));

  console.log(airplane.endsWith('737'));
  console.log(airplane.endsWith('738'));

  if (airplane.startsWith('Boeing')) {
    console.log('You gonna fly on Boeing');
  }

  // Example

  const checkLuggage = function (luggage) {
    const luggageLower = luggage.toLowerCase();
    luggageLower.includes('gun') || luggageLower.includes('knife')
      ? console.log('You are not allowed on board')
      : console.log('Welcome on the board');
  };

  checkLuggage('Food, jeansm socks and Swiss Knife');
  checkLuggage('Laptop and food');
  checkLuggage('Camera, food, Gun for protection');
} else {
  // split & join
  console.log('My+name+is+Jack.'.split('+'));
  console.log('Jack Fuckovich'.split(' '));

  const [firstName, lastName] = 'Jack Fuckovich'.split(' ');
  console.log(firstName, lastName);

  console.log(['Mr.', firstName, lastName.toUpperCase()].join(' '));

  const capitalizeName = function (name) {
    const names = name.split(' ');
    const namesCapitalized = [];
    for (const n of names) {
      namesCapitalized.push(n[0].toUpperCase() + n.slice(1));
    }
    return namesCapitalized.join(' ');
  };

  console.log(capitalizeName('jack fuckovich'));
  console.log(capitalizeName('jack white tiger jr.'));

  const message = 'Hi there!';
  console.log(message.padStart(20, '-').padEnd(37, '-'));

  const maskCreditCard = function (cardNumber) {
    const strNumber = cardNumber + ''; // преобразование в строку
    const last4 = strNumber.slice(-4);
    return last4.padStart(strNumber.length, '*');
  };

  console.log(maskCreditCard(1456897564587589));

  // repeat
  const greeting = 'Hi!';
  console.log(greeting.repeat(50));
}
