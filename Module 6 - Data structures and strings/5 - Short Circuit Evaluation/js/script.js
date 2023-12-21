'use strict';

const japaneseRestaurant = {
  name: 'Banzai',
  location: '108 Markham Woods Rd, Longwood, USA',
  categories: ['Japanese', 'Sushi', 'Vegetarian', 'Organic'],
  appetizers: ['Seaweed salad', 'Tempura shrimp', 'Edamame', 'Sushi rice'],
  mainMenu: ['Sushi', 'Ramen', 'Tempura'],

  workingHours: {
    wed: {
      open: 10,
      close: 23,
    },
    fri: {
      open: 10,
      close: 23,
    },
    sat: {
      open: 0,
      close: 24,
    },
    sun: {
      open: 12,
      close: 23,
    },
  },

  orderFood: function (appetizersIndex, mainMenuIndex) {
    return [this.appetizers[appetizersIndex], this.mainMenu[mainMenuIndex]];
  },
  /* foodDelivery: function (obj) {
    console.log(obj);
  }, */
  foodDelivery: function ({
    mainMenuIndex = 0,
    appetizersIndex = 0,
    adress,
    deliveriTime = '18:00',
  }) {
    console.log(
      `Your order on the way to you! ${this.appetizers[appetizersIndex]} and ${this.mainMenu[mainMenuIndex]} will be arrived to you ${adress} at ${deliveriTime}`
    );
  },
  orderSushi: function (ing1, ing2, ing3) {
    console.log(`You have orderred sushi with ${ing1}, ${ing2}, ${ing3}`);
  },
  orderRamen: function (noodle, ...otherIngs) {
    //console.log(noodle);
    //console.log(otherIngs);
    const others = otherIngs.length > 0 ? 'with ' + [...otherIngs] : '';
    const yourOrder = `You order noodle: ${noodle} ${others}`;
    console.log(yourOrder);
  },
};

const isOrOp = 2;

if (isOrOp == 1) {
  // OR (||) operator, Use any data types, return any data types, short-circuit evaluation
  console.log(5 || 'Hello');
  console.log('' || 'Hello');
  console.log(true || 0);
  console.log(undefined || null);
  console.log(undefined || '' || 0 || NaN || 'Hey' || 23);

  //japaneseRestaurant.guestsNumber = 10;
  //japaneseRestaurant.guestsNumber = 0;

  const guests = japaneseRestaurant.guestsNumber
    ? japaneseRestaurant.guestsNumber
    : 5;

  console.log(guests);

  const guests1 = japaneseRestaurant.guestsNumber || 3;
  console.log(guests1);
  console.log(japaneseRestaurant);
} else {
  // AND (&&) operator, Use any data types, return any data types, short-circuit evaluation
  console.log(0 && 'Hello!');
  console.log(1 && 'Hello');
  console.log('hey' && 34 && 0 && 44 && null);

  if (japaneseRestaurant.orderRamen) {
    japaneseRestaurant.orderRamen('Something');
  }

  japaneseRestaurant.orderRamen && japaneseRestaurant.orderRamen('Something');
}
