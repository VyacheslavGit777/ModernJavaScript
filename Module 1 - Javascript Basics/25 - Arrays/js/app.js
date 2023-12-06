const isAboutArray = false // t - about arr, f - methods arr

if (isAboutArray) {
  const color1 = 'red';
  const color2 = 'orange';
  const color3 = 'yellow';
  const color4 = 'green';
  const color5 = 'blue';
  const color6 = 'indigo';
  const color7 = 'violet';

  console.log(color2);

  const rainbowColors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
  console.log(rainbowColors[1]);
  console.log('The sky is ' + rainbowColors[4]);
  rainbowColors[5] = 'dark blue';
  rainbowColors[rainbowColors.length] = 'indigo';
  console.log(rainbowColors);

  /* const stringNumbers = [];
  stringNumbers[0] = 'one';
  stringNumbers[1] = 'two';
  stringNumbers[2] = 'three'; */

  const stringNumbers = new Array('one', 'two', 'three');

  console.log(stringNumbers);

  const numbers = [34, 5, 32, 67];

  console.log(numbers);

  const anyItems = [4, true, new Date(), 'sometheing'];

  console.log(anyItems);
} else {
  const numbers = [23, 54, 4, 31, 11];
  let result;

  result = 'Length: ' + numbers.length;
  console.log(result);
  result = 'Is Array: ' + Array.isArray(Array);
  console.log(result);
  result = 'Index of 4: ' + numbers.indexOf(4);
  console.log(result);
  result = numbers.push(7);
  console.log(result);
  console.log(numbers);
  result = numbers.pop();
  console.log(result);
  console.log(numbers);

  result = numbers.unshift(3);
  console.log(result);
  console.log(numbers);
  result = numbers.shift();
  console.log(result);
  console.log(numbers);

  result = numbers.push(1, 22, 33);
  console.log(result);
  console.log(numbers);

  result = numbers.splice(1, 2);
  console.log(result);
  console.log(numbers);
}
