'use strict';

const variant = 3;
// 1 - Другие Способы Создания И Заполнения Массивов
// 2 - Методы массивов на практике

if (variant === 1) {
  // empty arrays
  const arr = new Array(3);
  console.log(arr);
  console.log(arr.map(() => 7));

  // method fill()
  //arr.fill(7);
  //arr.fill(7, 1);
  arr.fill(7, 1, 2);
  console.log(arr);

  const arr1 = [1, 1, 1, 1, 1];
  arr1.fill(3, 2, 4);
  console.log(arr1);

  // Array.from() mehod
  const arrArr = Array.from({ length: 5 }, () => 1);
  console.log(arrArr);

  const arrArr1 = Array.from({ length: 5 }, (_, index) => index + 1);
  console.log(arrArr1);
} else if (variant === 2) {
  // Методы массивов на практике
  const account1 = {
    userName: 'Cecil Ireland',
    transactions: [500, 250, -300, 5000, -850, -110, -170, 1100],
    interest: 1.5,
    pin: 1111,
  };

  const account2 = {
    userName: 'Amani Salt',
    transactions: [2000, 6400, -1350, -70, -210, -2000, 5500, -30],
    interest: 1.3,
    pin: 2222,
  };

  const account3 = {
    userName: 'Corey Martinez',
    transactions: [900, -200, 280, 300, -200, 150, 1400, -400],
    interest: 0.8,
    pin: 3333,
  };

  const account4 = {
    userName: 'Kamile Searle',
    transactions: [530, 1300, 500, 40, 190],
    interest: 1,
    pin: 4444,
  };

  const account5 = {
    userName: 'Oliver Avila',
    transactions: [630, 800, 300, 50, 120],
    interest: 1.1,
    pin: 5555,
  };

  const accounts = [account1, account2, account3, account4, account5];

  const bankDepositTotal = accounts
    .flatMap(account => account.transactions)
    .filter(account => account > 0)
    .reduce((acc, account) => acc + account, 0);
  console.log(bankDepositTotal);

  /* const withdrawalsOver300 = accounts
    .flatMap(account => account.transactions)
    .filter(account => account <= -300).length; */

  const withdrawalsOver300 = accounts
    .flatMap(account => account.transactions)
    .reduce((acc, trans) => (trans <= -300 ? acc + 1 : acc), 0);
  console.log(withdrawalsOver300);

  const depositsAndWithdrawals = accounts
    .flatMap(account => account.transactions)
    .reduce(
      (acc, trans) => {
        /* trans > 0
          ? (acc.depositsTotal += trans)
          : (acc.withdrawalsTotal += trans); */
        acc[trans > 0 ? 'depositsTotal' : 'withdrawalsTotal'] += trans;
        return acc;
      },
      { depositsTotal: 0, withdrawalsTotal: 0 }
    );
  console.log(depositsAndWithdrawals);

  // работа с массивами в javascript -> Работа с Массивами в Javascript
  const textToTitleCase = function (text) {
    const exceptions = ['с', 'в', 'для', 'и', 'по', 'на', 'о'];

    const capitalizeString = word => word[0].toUpperCase() + word.slice(1);

    const titleCase = text
      .toLowerCase()
      .split(' ')
      .map(word => (exceptions.includes(word) ? word : capitalizeString(word)))
      .join(' ');
    return capitalizeString(titleCase);
  };

  console.log(textToTitleCase('работа с массивами в javascript'));
  console.log(
    textToTitleCase(
      'работа с массивами в javascript ПРОСТЫМ языком для новичков'
    )
  );
  console.log(textToTitleCase('работа с массивами и строками в javascript'));
  console.log(textToTitleCase('для чего нужны массивы в javascript'));
} else if (variant === 3) {
  const cats = [
    { catWeight: 3, foodWeight: 25, owners: ['Наташа'] },
    { catWeight: 6, foodWeight: 90, owners: ['Марина', 'Алиса'] },
    { catWeight: 4, foodWeight: 45, owners: ['Алекс', 'Ирина'] },
    { catWeight: 7, foodWeight: 80, owners: ['Борис'] },
    { catWeight: 4, foodWeight: 34, owners: ['Натт'] },
  ];

  const calcNormal = function (recc, foodW) {
    const normMin = recc * 0.9;
    const normMax = recc * 1.1;

    if (foodW > normMin && foodW < normMax) {
      return 0;
    } else if (foodW < normMin) {
      return 1;
    } else if (foodW > normMax) {
      return 2;
    }
  };

  // 1
  cats.forEach(element => (element.recc = element.catWeight * 0.75 * 12));
  console.log(cats);

  // 2
  const alexCat = cats.find(cat => cat.owners.includes('Алекс'));
  console.log(
    `Кошка Алекса ест слишком ${
      alexCat.recc < alexCat.foodWeight ? 'много' : 'мало'
    }`
  );

  // 3
  const catsEatTooMuchOwners = cats
    .filter(cat => cat.foodWeight > cat.recc)
    .flatMap(owner => owner.owners);

  const catsEatTooLittleOwners = cats
    .filter(cat => cat.foodWeight < cat.recc)
    .flatMap(owner => owner.owners);

  console.log(catsEatTooMuchOwners);
  console.log(catsEatTooLittleOwners);

  // 4
  console.log(
    `${catsEatTooMuchOwners.join(
      ', '
    )} - хозяева кошек, кторые едят слишком много`
  );
  console.log(
    `${catsEatTooLittleOwners.join(
      ', '
    )} - хозяева кошек, кторые едят слишком мало`
  );

  // 5
  console.log(cats.some(cat => cat.foodWeight === cat.recc));

  // 6
  const isFoodWeightNormal = cat =>
    cat.foodWeight > cat.recc * 0.9 && cat.foodWeight < cat.recc * 1.1;

  console.log(cats.some(isFoodWeightNormal));

  // 7
  console.log(cats.filter(isFoodWeightNormal));

  // 8
  const shallowCats = cats.slice().sort((a, b) => a.recc - b.recc);
  console.log(shallowCats);
}
