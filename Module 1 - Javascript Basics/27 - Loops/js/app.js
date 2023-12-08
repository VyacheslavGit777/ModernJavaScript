const idTask = 6; // 1 - for loop, 2 - for and arrays, 3 - break & continue, 4 - backwards iteration, 5 - while, 6 - task

if (idTask == 1) {

  /* console.log('Push ups repetition 1');
  console.log('Push ups repetition 2'); */
  //...
  for (let i = 1; i <= 10; i++) {
    console.log(`Push ups repetition ${i}`);
  }

  for (let i = 1; i <= 10; i += 2) {
    console.log(`Push ups repetition ${i}`);
  }
  /* let i = 1;
  for (; ;) {
    if (i <= 3) {
      console.log(i);
    } else { break };
    i++;
  }
  console.log('Output'); */
} else if (idTask == 2) {

  const someUser = ['Vasya', 'Pupkin', 1974, 'developer', ['Iren', 'Michael'], true];
  const types = [];
  for (let i = 0; i < someUser.length; i++) {
    console.log(someUser[i], typeof someUser[i]);
    //types[i] = typeof someUser[i];
    types.push(typeof someUser[i]);
  }


  const myObject = {
    firstName: 'Vasya',
    lastName: 'Pupkin',
    isGoose: true
  }


  for (let i = 0; i < Object.keys(myObject).length; i++) {
    console.log(myObject[Object.keys(myObject)[i]]);
  }

  console.log(types);

  const birtYears = [1974, 1994, 2000, 2003];
  const ages = [];

  for (let i = 0; i < birtYears.length; i++) {
    ages.push(2023 - birtYears[i]);
  }

  console.log(ages);
} else if (idTask == 3) {

  // continue & break 
  const someUser = ['Vasya', 'Pupkin', 1974, 'developer', ['Iren', 'Michael'], true];
  for (let i = 0; i < someUser.length; i++) {
    if (typeof someUser[i] !== 'string') continue;
    console.log(someUser[i], typeof someUser[i]);
  }

  console.log('-----');

  for (let i = 0; i < someUser.length; i++) {
    if (typeof someUser[i] == 'number') break;
    console.log(someUser[i], typeof someUser[i]);
  }
} else if (idTask == 4) {

  const someUser = ['Vasya', 'Pupkin', 1974, 'developer', ['Iren', 'Michael'], true];

  for (let i = someUser.length - 1; i >= 0; i--) {
    console.log(someUser[i], typeof someUser[i]);
  }

  for (let excercise = 1; excercise <= 3; excercise++) {
    console.log(`exercise ${excercise}`);
    for (let rep = 1; rep <= 5; rep++) {
      console.log(`Rep ${rep}`);
    }
  }

} else if (idTask == 5) {

  /* let rep = 1;
  while (rep <= 10) {
    console.log(`Push ups repetition ${rep}`);
    rep++;
  }
 */


  let diceNumber = Math.trunc(Math.random() * 6) + 1;
  console.log('Now: ' + diceNumber);

  while (diceNumber !== 6) {
    diceNumber = Math.trunc(Math.random() * 6) + 1;
    console.log('Fell out: ' + diceNumber);
  }
} else if (idTask == 6) {


  const bills = [31, 95, 276, 540, 27, 205, 11, 1180, 96, 57];
  const tips = [];
  const totals = [];

  const calculateTips = bill => bill < 20 ? bill * 0.2 : bill * 0.15;

  for (let i = 0; i < bills.length; i++) {
    tips.push(calculateTips(bills[i]));
    totals.push(bills[i] + tips[i]);
  }

  function calculateAverage(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    return sum / arr.length;
  }

  console.log('Bills: ' + bills);
  console.log('Tips: ' + tips);
  console.log('Totals: ' + totals);
  console.log('Average totals: ' + calculateAverage(totals));

} 