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

// 1. Rest pattering with destructuring

// This is spread operator, because ... are on the right side of =
const arr = [1, 2, ...[3, 4]];
console.log(arr);

// This is rest pattern, because ... are on the left side of =
const [a1, a2, ...items] = [1, 2, 3, 4];
console.log(a1, a2, items);

const [seaweed, , edamame, ...otherFood] = [
  ...japaneseRestaurant.appetizers,
  ...japaneseRestaurant.mainMenu,
];

console.log(seaweed, edamame, otherFood);

const { sat, sun, ...weekdays } = japaneseRestaurant.workingHours;
console.log(sat, sun, weekdays);

// 2. Rest pattering with functions

const sum = function (...nums) {
  let sumVar = 0;
  for (let i = 0; i < nums.length; i++) {
    sumVar += nums[i];
  }
  console.log(sumVar);
};

sum(2, 5, 7);

const numbers = [3, 44, 2];
sum(...numbers);

japaneseRestaurant.orderRamen('Colored Noodle', 'Meat', 'Chicken', 'Onion');
japaneseRestaurant.orderRamen('Order Noodle');
