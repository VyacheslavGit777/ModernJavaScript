'use strict';

const weekdays = ['mon', 'tue', 'wen', 'thu', 'fri', 'sat', 'sun'];

const workingHours = {
  [weekdays[2]]: {
    open: 10,
    close: 23,
  },
  [weekdays[4]]: {
    open: 10,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0,
    close: 24,
  },
  [weekdays[6]]: {
    open: 12,
    close: 23,
  },
};

const japaneseRestaurant = {
  name: 'Banzai',
  location: '108 Markham Woods Rd, Longwood, USA',
  categories: ['Japanese', 'Sushi', 'Vegetarian', 'Organic'],
  appetizers: ['Seaweed salad', 'Tempura shrimp', 'Edamame', 'Sushi rice'],
  mainMenu: ['Sushi', 'Ramen', 'Tempura'],

  // old appearance
  //workingHours: workingHours,

  // new appearance
  workingHours,

  // old appearance
  /*orderFood: function (appetizersIndex, mainMenuIndex) {
    return [this.appetizers[appetizersIndex], this.mainMenu[mainMenuIndex]];
  },*/

  // new appearance
  orderFood(appetizersIndex, mainMenuIndex) {
    return [this.appetizers[appetizersIndex], this.mainMenu[mainMenuIndex]];
  },

  foodDelivery({
    mainMenuIndex = 0,
    appetizersIndex = 0,
    adress,
    deliveriTime = '18:00',
  }) {
    console.log(
      `Your order on the way to you! ${this.appetizers[appetizersIndex]} and ${this.mainMenu[mainMenuIndex]} will be arrived to you ${adress} at ${deliveriTime}`
    );
  },
  orderSushi(ing1, ing2, ing3) {
    console.log(`You have orderred sushi with ${ing1}, ${ing2}, ${ing3}`);
  },
  orderRamen(noodle, ...otherIngs) {
    //console.log(noodle);
    //console.log(otherIngs);
    const others = otherIngs.length > 0 ? 'with ' + [...otherIngs] : '';
    const yourOrder = `You order noodle: ${noodle} ${others}`;
    console.log(yourOrder);
  },
};

if (japaneseRestaurant.workingHours.thu) {
  console.log(japaneseRestaurant.workingHours.thu.open);
}

if (japaneseRestaurant.workingHours.fri) {
  console.log(japaneseRestaurant.workingHours.fri.open);
}

// Using optional chaining

// Properties
console.log(japaneseRestaurant.workingHours.thu?.open);

const daysOfWeek = ['mon', 'tue', 'wen', 'thu', 'fri', 'sat', 'sun'];

for (const day of daysOfWeek) {
  console.log(day);
  const open = japaneseRestaurant.workingHours[day]?.open ?? 'Хер его знает';
  console.log(`On ${day} restaurant opens at ${open}`);
}

// Methods

console.log(japaneseRestaurant.orderFood?.(1, 2) ?? 'Method does not exist');
console.log(japaneseRestaurant.order?.(1, 2) ?? 'Method does not exist');

// Arrays

const posts = [
  {
    name: 'JS is cool!',
    userName: 'Tedd',
  },
  {
    name: 'JS is shit!',
    userName: 'Dick',
  },
];

const users = [];

console.log(posts[0]?.name ?? "This post doesn't exist");
console.log(posts[1]?.name ?? "This post doesn't exist");

console.log(users[0]?.name ?? 'The array is empty');
