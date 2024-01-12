'use strict';

const isSet = false;

if (isSet) {
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
  const mealIngridients = [
    'Rice',
    'Pepper',
    'Garlic',
    'Meat',
    'Meat',
    'Garlic',
  ];

  console.log(new Set(mealIngridients).size);
  console.log(new Set('sobolev vyacheslav').size);

  const mealIngridientsSet = new Set(mealIngridients);
  const mealIngridientsUnique = [...mealIngridientsSet];
  console.log(mealIngridientsSet);
  console.log(mealIngridientsUnique);
} else {
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

  const restaurant = new Map();
  restaurant.set('name', "McDonald's");
  restaurant.set(1, 'London, England');
  restaurant.set(2, 'Paris, France');
  restaurant.set(3, 'Moscow, Russia');
  console.log(restaurant);

  restaurant
    .set('categories', ['Japanese', 'Sushi', 'Vegetarian', 'Organic'])
    .set('open', 10)
    .set('close', 23)
    .set(true, 'Bench is open :)')
    .set(false, 'Bench is closed :(');

  console.log(restaurant.get('name'));
  console.log(restaurant.get(true));

  const currentTime = 10;
  console.log(
    restaurant.get(
      currentTime > restaurant.get('open') &&
        currentTime < restaurant.get('close')
    )
  );

  console.log(restaurant.has('categories'));
  restaurant.delete(1);
  console.log(restaurant);
  //restaurant.set([1, 2, 3], 'Hello!');
  //console.log(restaurant.get([1, 2, 3])); // undefined, разные ссылки объектов в куче
  const keyArr = [1, 2, 3];
  restaurant.set(keyArr, 'Hello!');
  restaurant.set(document.querySelector('h2'), 'Heading');
  console.log(restaurant.get(keyArr));

  const question = new Map([
    [
      'question',
      'What is the most popular programming language for front-end?',
    ],
    [1, 'JavaScript'],
    [2, 'Java'],
    [3, 'Python'],
    ['correctAnswer', 1],
    [true, 'Correct answer :D'],
    [false, 'This is incorrect :( Try again!'],
  ]);

  console.log(question);

  const workingHoursMap = new Map(Object.entries(workingHours));
  console.log(workingHoursMap);

  console.log(question.get('question'));

  for (const [key, value] of question) {
    if (typeof key === 'number') {
      console.log(`${key} : ${value}`);
    }
  }
  //const answer = Number(prompt('Enter your answer'));
  /* answer === question.get('correctAnswer')
    ? console.log(question.get(true))
    : console.log(question.get(false)); */

  //console.log(question.get(question.get('correctAnswer') === answer));

  console.log(...question);
  console.log(question.entries());
  console.log(question.keys());
  console.log(question.values());
  console.log([...question.keys()]);
  console.log([...question.values()]);
}
