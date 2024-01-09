'use strict';
const orders = new Set([
  'Sushi',
  'Ramen',
  'Sushi',
  'Tempura',
  'Ramen',
  'Sushi',
]);

console.log(orders);

console.log(new Set('Hello!'));
console.log(new Set());
console.log(orders.size);
console.log(orders.has('Sushi'));
console.log(orders.has('Pepperoni'));

orders.add('Edamame');
orders.add('Edamame');
console.log(orders);
orders.delete('Tempura');
console.log(orders);

for (const order of orders) {
  console.log(order);
}

// Remove duplicates
const mealIngridients = ['Rice', 'Pepper', 'Garlic', 'Meat', 'Meat', 'Garlic'];

console.log(new Set(mealIngridients).size);
console.log(new Set('sobolev vyacheslav').size);

const mealIngridientsSet = new Set(mealIngridients);
const mealIngridientsUnique = [...mealIngridientsSet];
console.log(mealIngridientsSet);
console.log(mealIngridientsUnique);
