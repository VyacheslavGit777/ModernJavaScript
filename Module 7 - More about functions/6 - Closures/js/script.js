'use strict';

const isPart1 = false;

if (isPart1) {
  const safeBooking = function () {
    let passengerCount = 0;

    return function () {
      passengerCount++;
      console.log(`${passengerCount} passengers`);
    };
  };
  const booker = safeBooking();
  booker();
  booker();
  booker();

  console.dir(booker);
} else {
  let f1;

  const f2 = function () {
    const x = 11;
    f1 = function () {
      console.log(x ** 2);
    };
  };

  f2();
  f1();
}
