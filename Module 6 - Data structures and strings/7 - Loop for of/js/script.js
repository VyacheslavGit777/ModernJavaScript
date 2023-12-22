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

const menu = [...japaneseRestaurant.appetizers, ...japaneseRestaurant.mainMenu];
for (const x of menu) {
  console.log(x);
}

for (const [index, food] of menu.entries()) {
  console.log(`${index + 1}. ${food}`);
}
