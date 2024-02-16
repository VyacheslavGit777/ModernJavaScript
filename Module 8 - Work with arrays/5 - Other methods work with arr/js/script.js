'use strict';

const variant = 2;
// 1 - Другие Способы Создания И Заполнения Массивов

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
}
