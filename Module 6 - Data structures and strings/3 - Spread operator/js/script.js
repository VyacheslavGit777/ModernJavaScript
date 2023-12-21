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
  orderSushi: function (ing1, ing2, ing3) {
    console.log(`You have orderred sushi with ${ing1}, ${ing2}, ${ing3}`);
  },
};

const arr = [1, 3, 5];
// Old bad approach
const newArr = [7, 9, arr[0], arr[1], arr[2]];
console.log(newArr);
// New approach with spread operator
const newArrSpread = [7, 9, ...arr];
console.log(newArrSpread);

const newMenu = [...japaneseRestaurant.mainMenu, 'Miso Salmon'];
console.log(newMenu);

// Array copying

// Shallow copy - поверхностная
const categoriesCopy = [...japaneseRestaurant.categories];

// Merge arrays
const menu = [...japaneseRestaurant.appetizers, ...japaneseRestaurant.mainMenu];
console.log(menu);
// Iterable - arrays, striings, maps, sets. Objects aren't iterable

// Spread operator with strings
/*const greeting = 'Hey';
const greetingLetters = [...greeting, ' !'];
console.log(greetingLetters);
console.log(...greeting);
//console.log(`${...greeting}`); // Unexpected token '...', can't do this

const ingridients = [
  prompt('Ingridient 1 for your sushi'),
  prompt('Ingridient 2 for your sushi'),
  prompt('Ingridient 3 for your sushi'),
];

//console.log(ingridients);

japaneseRestaurant.orderSushi(...ingridients);*/

// Objects

const newJapaneseRestaurant = {
  foundationDate: 2011,
  ...japaneseRestaurant,
  owner: 'Suzuki Kakogo Hera Moto',
};

console.log(newJapaneseRestaurant);

const sumAB = (a, b) => a + b;
const arrAB = [5, 10];
console.log(sumAB(...arrAB));

const japaneseRestaurantCopy = { ...japaneseRestaurant };
japaneseRestaurantCopy.name = 'Wanzai';
console.log(japaneseRestaurantCopy, japaneseRestaurant);
