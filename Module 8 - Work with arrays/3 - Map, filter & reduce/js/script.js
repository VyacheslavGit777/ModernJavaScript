'use strict';

const variant = 6;
// 1 - Метод map()
// 2 - Метод filter
// 3 - Метод reduce()
// 4 - Task 2
// 5 - Метод chaining()
// 6 - Task 2 with chaining

if (variant === 1) {
  const transactions = [300, 250, -500, 5000, -750, -180, 50, 1400, -350, -120];
  const usdToEuro = 0.86;
  /* const transactionsEuro = transactions.map(function (transaction) {
    return transaction * usdToEuro;
  }); */
  const transactionsEuro = transactions.map(
    transaction => transaction * usdToEuro
  );
  console.log(transactions);
  console.log(transactionsEuro);

  // Аналог через for..of
  const transactionsEuro1 = [];

  for (const transaction of transactions) {
    transactionsEuro1.push(transaction * usdToEuro);
  }
  console.log(transactionsEuro1);

  const transactionDescr = transactions.map(
    (transaction, transactionIndex) =>
      `Transaction № ${transactionIndex + 1}: ${Math.abs(transaction)} was ${
        transaction > 0 ? 'deposited' : 'withdrew'
      }`
  );
  console.log(transactionDescr);
} else if (variant === 2) {
  const transactions = [300, 250, -500, 5000, -750, -180, 50, 1400, -350, -120];
  const withdrawals = transactions.filter(trans => trans < 0);
  console.log(withdrawals);

  const deposites = transactions.filter(transaction => transaction > 0);
  console.log(deposites);
} else if (variant === 3) {
  const transactions = [300, 250, -500, 5000, -750, -180, 50, 1400, -350, -120];
  const balance = transactions.reduce(function (acc, item, index, arr) {
    console.log(acc);
    return acc + item;
  }, 0);
  console.log(balance);
  const bal = transactions.reduce((acc, item) => acc + item, 0);
  console.log(bal);

  // Аналог на for or
  let balanceForOf = 0;
  for (const trans of transactions) {
    balanceForOf += trans;
  }
  console.log(balanceForOf);

  const arr = [100, -100, -150, -250, 200, 300, -150];
  const spentArr = arr.reduce(
    (acc, item) => (item < 0 ? acc + item : acc + 0),
    0
  );
  console.log(spentArr);

  const minTransaction = transactions.reduce(
    (acc, item) => (acc < item ? acc : item),
    transactions[0]
  );
  console.log(minTransaction);

  const myArr = [
    'Vasya',
    'Petya',
    'Anton',
    'Fuckovich',
    'Jackovich',
    'Mudichich',
  ];
  const longerFirstName = myArr.reduce(
    (acc, item) => (acc.length >= item.length ? acc : item),
    myArr[0]
  );
  const longerLastName = myArr.reduce(
    (acc, item) => (acc.length > item.length ? acc : item),
    myArr[0]
  );
  console.log(longerFirstName, longerLastName);
} else if (variant === 4) {
  const testData1 = [7, 3, 2, 4, 1, 15, 8, 1, 9, 2];
  const testData2 = [1, 16, 12, 4, 5, 1, 3, 11, 7, 2];

  const getAverageHumanAge = function (catAges) {
    const humanAgesArr = catAges.map(catAge =>
      catAge <= 2 ? catAge * 10 : catAge * 7
    );
    const catMoreEqEighteenAge = humanAgesArr.filter(catAge => catAge >= 18);
    const sumAges =
      catMoreEqEighteenAge.reduce((acc, catAge) => acc + catAge, 0) /
      catMoreEqEighteenAge.length;
    return sumAges;
  };

  console.log(getAverageHumanAge(testData1));
  console.log(getAverageHumanAge(testData2));
} else if (variant === 5) {
  const transactions = [300, 250, -500, 5000, -750, -180, 50, 1400, -350, -120];
  const usdToEuro = 0.86;

  const totalWithdrawalsEuro = transactions
    .filter(transaction => transaction < 0)
    .map(transaction => transaction * usdToEuro)
    .reduce((acc, transaction) => acc + transaction, 0);

  console.log(totalWithdrawalsEuro);
} else if (variant === 6) {
  const testData1 = [7, 3, 2, 4, 1, 15, 8, 1, 9, 2];
  const testData2 = [1, 16, 12, 4, 5, 1, 3, 11, 7, 2];

  const getAverageHumanAge = catAges =>
    catAges
      .map(catAge => (catAge <= 2 ? catAge * 10 : catAge * 7))
      .filter(catAge => catAge >= 18)
      .reduce((acc, catAge, index, arr) => acc + catAge / arr.length, 0);

  console.log(getAverageHumanAge(testData1));
  console.log(getAverageHumanAge(testData2));

  const arr2 = [10, 20, 30];
  console.log(arr2.reduce((acc, num, index, arr) => acc + num / arr.length, 0));
}
