'use strict';

const variant = 4;
// 1 - Метод find() и findIndex()
// 2 - Методы some() и every()
// 3 - Методы flat() & flatMap()
// 4 - Сортировка массивов

if (variant === 1) {
  const transactions = [300, 250, -500, 5000, -750, -180, 50, 1400, -350, -120];

  console.log(transactions.find(trans => trans > 0));
  console.log(transactions.find(trans => trans < 0));

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

  const coreyMartinezAcc = accounts.find(
    account => account.userName === 'Corey Martinez'
  );
  const coreyMartinezIndex = accounts.findIndex(
    account => account.userName === 'Corey Martinez'
  );
  console.log(coreyMartinezAcc);
  console.log(`Corey Martinez index: ${coreyMartinezIndex}`);
} else if (variant === 2) {
  const transactions = [300, 250, -500, 5000, -750, -180, 50, 1400, -350, -120];
  console.log(transactions.includes(50));
  console.log(transactions.some(transaction => transaction === 50));
  console.log(transactions.includes(150));

  const hasWithdrawals = transactions.some(transaction => transaction < 0);
  console.log(hasWithdrawals);
  const hasWithdrawalsOver5000 = transactions.some(
    transaction => transaction < -5000
  );
  console.log(hasWithdrawalsOver5000);
  console.log(transactions.every(transaction => transaction < 0));
  console.log(transactions.every(transaction => Math.abs(transaction) > 49));
} else if (variant === 3) {
  const someArray = [[1, 3, 5], [2, 4, 6], 7, 8, 9];
  console.log(someArray.flat());
  const someDeepArray = [[1, [3, 5]], [[2, 4], 6], 7, 8, 9];
  console.log(someDeepArray.flat());
  console.log(someDeepArray.flat(2));

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
  const allTransactionArrays = accounts.map(account => account.transactions);
  const allTransactions = allTransactionArrays.flat();
  const bankbalance = allTransactions.reduce(
    (acc, transaction) => acc + transaction,
    0
  );
  console.log(bankbalance);

  const bankBalanceChaining = accounts
    .map(account => account.transactions)
    .flat()
    .reduce((acc, transaction) => acc + transaction, 0);
  console.log(bankBalanceChaining);

  const bankBalanceFlatMap = accounts
    .flatMap(account => account.transactions)
    .reduce((acc, transaction) => acc + transaction, 0);
  console.log(bankBalanceFlatMap);
} else if (variant === 4) {
  // strings
  const names = ['John', 'Sara', 'Evan', 'Steve', 'Cecil'];
  console.log(names.sort());
  console.log(names);

  // return < 0 -> x, y
  // return > 0 -> y, x

  // Ascending order
  const transactions = [300, 250, -500, 5000, -750, -180, 50, 1400, -350, -120];
  /* transactions.sort((x, y) => {
    if (x > y) {
      return 1;
    }
    if (x < y) {
      return -1;
    }
  }); */
  transactions.sort((x, y) => x - y);
  console.log(transactions);

  // Descending order
  /* transactions.sort((x, y) => {
    if (x > y) {
      return -1;
    }
    if (x < y) {
      return 1;
    }
  }); */
  transactions.sort((x, y) => y - x);
  console.log(transactions);
}
