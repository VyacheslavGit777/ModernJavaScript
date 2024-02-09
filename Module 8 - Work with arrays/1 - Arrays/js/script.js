'use strict';

const variant = 4;
// 1 - Простые методы массивов
// 2 - Итерация массивов с помощью цикла forEach
// 3 - forEach с Map и Set
// 4 - Task 1

////////////////////////////////////////

if (variant === 1) {
  //let letters = ['a', 'b', 'c', 'd', 'e', 'f'];
  let letters1 = ['a', 'b', 'c', 'd', 'e', 'f'];
  let letters2 = ['g', 'h', 'i'];

  // slice()
  /* console.log(letters.slice(1));
  console.log(letters.slice(1, 4));
  console.log(letters.slice(-1));
  console.log(letters.slice(-3));
  console.log(letters.slice(-3, -1));
  console.log(letters.slice(2, -1));
  console.log([...letters]); */

  // splice()

  //console.log(letters.splice(1));
  //console.log(letters.splice(-1));
  //console.log(letters.splice(1, 3));

  // reverse()

  //console.log(letters.reverse());
  //console.log(letters.slice().reverse());

  // concat()
  console.log(letters1.concat(letters2));
  console.log([...letters1, ...letters2]);
  const letters = letters1.concat(letters2);

  // join()
  console.log(letters.join(':'));

  console.log(letters1);
  console.log(letters2);
} else if (variant === 2) {
  const transactions = [300, 250, -500, 5000, -750, -180, 50, 1400, -350, -120];
  /* for (const transaction of transactions) {
    if (transaction > 0) {
      console.log(`${transaction} was deposited`);
    } else {
      console.log(`${Math.abs(transaction)} was withdrew`);
    }
  } */
  transactions.forEach(function (transaction, transactionIndex, array) {
    if (transaction > 0) {
      console.log(
        `Transaction # ${transactionIndex + 1} ${transaction} was deposited`
      );
    } else {
      console.log(
        `Transaction # ${transactionIndex + 1} ${Math.abs(
          transaction
        )} was withdrew`
      );
    }
  });

  const methToArr = function (name, index) {
    console.log(`Man ${index + 1} was ${name}`);
  };

  const arrNames = ['Vasya', 'Fedya', 'Petya'];
  const arrNames2 = ['Jack', 'Arnold', 'Hiroyaki'];
  arrNames.forEach(methToArr);
  arrNames2.forEach(methToArr);
} else if (variant === 3) {
  // Map
  const currencies = new Map([
    ['USD', 'United States dollar'],
    ['EUR', 'Euro'],
    ['CNY', 'Chinese yuan'],
  ]);
  currencies.forEach(function (value, key, map) {
    console.log(`${key} is a ${value}`);
  });

  // Set
  const uniqueCurrencies = new Set(['USD', 'EUR', 'USD', 'CNY', 'CNY']);
  console.log(uniqueCurrencies);
  uniqueCurrencies.forEach(function (value, _, set) {
    console.log(`${value} : ${value}`);
  });
} else if (variant === 4) {
  const verifyCats = function (catsJane, catsJulia) {
    const catsJaneCorrect = [...catsJane];
    //const catsJaneCorrect = catsJane.slice();
    catsJaneCorrect.splice(0, 1);
    catsJaneCorrect.splice(-1);
    const allCatsAge = catsJaneCorrect.concat(catsJulia);
    allCatsAge.forEach(function (age, index) {
      console.log(
        `Кошка № ${index + 1} ${
          age >= 2 ? 'взрослая, ей ' + age + ' лет' : 'ещё котёнок'
        }`
      );
    });
  };

  verifyCats([4, 5, 3, 11, 6, 2, 4, 1, 5, 9], [2, 4, 5, 1, 13, 2, 15, 8, 3, 7]);
  console.log('');
  verifyCats([3, 5, 9, 14, 1, 2, 6, 8, 3, 10], [8, 2, 10, 1, 2, 5, 6, 3, 1, 4]);

  /* [4, 5, 3, 11, 6, 2, 4, 1, 5, 9] 
 [2, 4, 5, 1, 13, 2, 15, 8, 3, 7]
 [3, 5, 9, 14, 1, 2, 6, 8, 3, 10] 
 [8, 2, 10, 1, 2, 5, 6, 3, 1, 4] */
}
