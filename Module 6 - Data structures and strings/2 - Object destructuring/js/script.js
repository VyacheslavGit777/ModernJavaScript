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
};

japaneseRestaurant.foodDelivery({
  deliveriTime: '12:30',
  adress: '18 Markham Woods Rd',
  mainMenuIndex: 1,
  appetizersIndex: 0,
});

japaneseRestaurant.foodDelivery({ adress: '18 Markham Woods Rd' });

const { workingHours: hours, name: restName, categories } = japaneseRestaurant;
console.log(hours, restName, categories);

// Default values
console.log('');
const { menu = [''], appetizers: starterMenu = [] } = japaneseRestaurant;
console.log(menu, starterMenu);

// Mutating variables
let x = 3;
let y = 5;

const obj = { x: 11, y: 22, z: 33 };
({ x, y } = obj);
console.log(x, y);

// Nested objects
const {
  sun: { open: sunOpen, close: sunClose },
} = hours;
console.log(sunOpen, sunClose);
