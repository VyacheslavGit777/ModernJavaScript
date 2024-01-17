'use strict';

const bookings = [];

const makeBooking = function (
  flightNum,
  passengersNum = 1,
  price = 99 * passengersNum
) {
  // before ES6
  /*  passengersNum = passengersNum || 1;
  price = price || 99; */

  const booking = {
    flightNum,
    passengersNum,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

makeBooking('QE123');
makeBooking('TU235', 3, 390);
makeBooking('TU235', 1);
makeBooking('TU235', 4);
makeBooking('TU235', undefined, 400);
