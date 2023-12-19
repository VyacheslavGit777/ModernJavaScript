'use strict';

const japaneseRestaurant = {
  name: 'Banzai',
  location: '108 Markham Woods Rd, Longwood, USA',
  categories: ['Japanese', 'Sushi', 'Vegetarian', 'Organic'],
  appetizers: ['Seaweed salad', 'Tempura shrimp', 'Edamame', 'Sushi rice'],
  mainMenu: ['Sushi', 'Ramen', 'Tempura'],

  orderFood: function (appetizersIndex, mainMenuIndex) {
    return [this.appetizers[appetizersIndex], this.mainMenu[mainMenuIndex]];
  },
};

const arr = [3, 5, 7];
const x1 = arr[0];
const x2 = arr[1];
const x3 = arr[2];

console.log(x1, x2, x3);

const [y1, y2, y3] = arr;
console.log(y1, y2, y3);

console.log(arr);

const [category1, category2] = japaneseRestaurant.categories;
console.log(category1, category2);

const [cat1, , cat3] = japaneseRestaurant.categories;
console.log(cat1, cat3);

let [main, , secondary] = japaneseRestaurant.categories;
console.log(main, secondary);
/* let temp = main;
main = secondary;
secondary = temp;
console.log(main, secondary); */

[secondary, main] = [main, secondary];
console.log(main, secondary);

// Returning 2 values from function
const [appetizer, mainFood] = japaneseRestaurant.orderFood(2, 1);
console.log(appetizer, mainFood);

// Nested desctructuring
const nestedArr = [1, 2, [7, 9]];
const [z1, z2] = nestedArr[2];
console.log(z1, z2);

const [f1, , [f2, f3]] = nestedArr;
console.log(f1, f2, f3);

// Default values

const unknownArr = [3, 5];
const [g1 = 0, g2 = 0, g3 = 0] = unknownArr;
console.log(g1, g2, g3);
