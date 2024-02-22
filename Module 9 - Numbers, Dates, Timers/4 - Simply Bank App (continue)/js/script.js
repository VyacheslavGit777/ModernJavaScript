'use strict';

// Simply Bank App

const account1 = {
  userName: 'Cecil Ireland',
  transactions: [500, 250, -300, 5000, -850, -110, -170, 1100],
  interest: 1.5,
  pin: 1111,
  transactionsDates: [
    '2020-10-02T14:43:31.074Z',
    '2020-10-29T11:24:19.761Z',
    '2020-11-15T10:45:23.907Z',
    '2021-01-22T12:17:46.255Z',
    '2021-02-12T15:14:06.486Z',
    '2021-03-09T11:42:26.371Z',
    '2021-05-21T07:43:59.331Z',
    '2021-06-22T15:21:20.814Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const account2 = {
  userName: 'Amani Salt',
  transactions: [2000, 6400, -1350, -70, -210, -2000, 5500, -30],
  interest: 1.3,
  pin: 2222,
  transactionsDates: [
    '2020-10-02T14:43:31.074Z',
    '2020-10-29T11:24:19.761Z',
    '2020-11-15T10:45:23.907Z',
    '2021-01-22T12:17:46.255Z',
    '2021-02-12T15:14:06.486Z',
    '2021-03-09T11:42:26.371Z',
    '2021-05-21T07:43:59.331Z',
    '2021-06-22T15:21:20.814Z',
  ],
  currency: 'UAH',
  locale: 'uk-UA',
};

const account3 = {
  userName: 'Corey Martinez',
  transactions: [900, -200, 280, 300, -200, 150, 1400, -400],
  interest: 0.8,
  pin: 3333,
  transactionsDates: [
    '2020-10-02T14:43:31.074Z',
    '2020-10-29T11:24:19.761Z',
    '2020-11-15T10:45:23.907Z',
    '2021-01-22T12:17:46.255Z',
    '2021-02-12T15:14:06.486Z',
    '2021-03-09T11:42:26.371Z',
    '2021-05-21T07:43:59.331Z',
    '2021-06-22T15:21:20.814Z',
  ],
  currency: 'RUB',
  locale: 'ru-RU',
};

const account4 = {
  userName: 'Kamile Searle',
  transactions: [530, 1300, 500, 40, 190],
  interest: 1,
  pin: 4444,
  transactionsDates: [
    '2020-10-02T14:43:31.074Z',
    '2020-10-29T11:24:19.761Z',
    '2020-11-15T10:45:23.907Z',
    '2021-01-22T12:17:46.255Z',
    '2021-02-12T15:14:06.486Z',
  ],
  currency: 'EUR',
  locale: 'fr-CA',
};

const account5 = {
  userName: 'Oliver Avila',
  transactions: [630, 800, 300, 50, 120],
  interest: 1.1,
  pin: 5555,
  transactionsDates: [
    '2020-10-02T14:43:31.074Z',
    '2020-10-29T11:24:19.761Z',
    '2020-11-15T10:45:23.907Z',
    '2021-01-22T12:17:46.255Z',
    '2021-02-12T15:14:06.486Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const accounts = [account1, account2, account3, account4, account5];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.total__value--in');
const labelSumOut = document.querySelector('.total__value--out');
const labelSumInterest = document.querySelector('.total__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerTransactions = document.querySelector('.transactions');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayTransactions = function (account, sort = false) {
  containerTransactions.innerHTML = '';

  const transacs = sort
    ? account.transactions.slice().sort((a, b) => a - b)
    : account.transactions;

  transacs.forEach(function (transaction, index) {
    const transactionType = transaction > 0 ? 'deposit' : 'withdrawal';
    const date = new Date(account.transactionsDates[index]);
    const day = `${date.getDate()}`.padStart(2, '0');
    const month = `${date.getMonth() + 1}`.padStart(2, '0');
    const year = date.getFullYear();

    const transDate = `${day}/${month}/${year}`;

    const transactionRow = `
    <div class="transactions__row">
      <div class="transactions__type transactions__type--${transactionType}">
        ${index + 1} ${transactionType}
      </div>
      <div class="transactions__date">${transDate}</div>
      <div class="transactions__value">${transaction.toFixed(2)}$</div>
    </div>
    `;
    containerTransactions.insertAdjacentHTML('afterbegin', transactionRow);
  });
};

const createNickNames = function (accs) {
  accs.forEach(
    acc =>
      (acc.nickname = acc.userName
        .toLowerCase()
        .split(' ')
        .map(item => item[0])
        .join(''))
  );
};

createNickNames(accounts);

/* const userName = 'Oliver Avila'; // nickname = 'oa'
const nickname = userName
  .toLowerCase()
  .split(' ')
  .map(item => item[0])
  .join('');
console.log(nickname); */

const displayBalance = function (account) {
  const balance = account.transactions.reduce(
    (acc, transaction) => acc + transaction,
    0
  );
  account.balance = balance;
  labelBalance.textContent = `${balance.toFixed(2)}$`;
};

const displayTotal = function (account) {
  const depositesTotal = account.transactions
    .filter(transaction => transaction > 0)
    .reduce((acc, transaction) => acc + transaction, 0);
  labelSumIn.textContent = `${depositesTotal.toFixed(2)}$`;

  const withdrawalsTotal = account.transactions
    .filter(transaction => transaction < 0)
    .reduce((acc, transaction) => acc + transaction, 0);
  labelSumOut.textContent = `${withdrawalsTotal.toFixed(2)}$`;

  const interestTransactions = account.transactions
    .filter(transaction => transaction > 0)
    .map(deposites => (deposites * account.interest) / 100)
    .filter((interest, index, arr) => interest >= 5)
    .reduce((acc, interest) => acc + interest, 0);
  labelSumInterest.textContent = `${interestTransactions.toFixed(2)}$`;
};

const updateUi = function (account) {
  displayTransactions(account);
  displayBalance(account);
  displayTotal(account);
};

let currentAccount;

btnLogin.addEventListener('click', function (e) {
  e.preventDefault();
  currentAccount = accounts.find(
    account => account.nickname === inputLoginUsername.value
  );
  if (currentAccount?.pin === +inputLoginPin.value) {
    containerApp.style.opacity = 100;

    const now = new Date();
    const day = `${now.getDate()}`.padStart(2, '0');
    const month = `${now.getMonth() + 1}`.padStart(2, '0');
    const year = now.getFullYear();

    labelDate.textContent = `${day}/${month}/${year}`;

    labelWelcome.textContent = `Рады, что вы снова с нами, ${
      currentAccount.userName.split(' ')[0]
    }!`;

    inputLoginUsername.value = '';
    inputLoginPin.value = '';
    inputLoginPin.blur();

    updateUi(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const transferAmount = +inputTransferAmount.value;
  const recipientNickname = inputTransferTo.value;
  const recipientAccount = accounts.find(
    account => account.nickname === recipientNickname
  );
  inputTransferAmount.value = '';
  inputTransferTo.value = '';
  if (
    transferAmount > 0 &&
    currentAccount.balance >= transferAmount &&
    recipientAccount &&
    currentAccount.nickname !== recipientAccount?.nickname
  ) {
    currentAccount.transactions.push(-transferAmount);
    recipientAccount.transactions.push(transferAmount);
    currentAccount.transactionsDates.push(new Date().toISOString());
    recipientAccount.transactionsDates.push(new Date().toISOString());
    updateUi(currentAccount);
  }
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();
  if (
    currentAccount.nickname === inputCloseUsername.value &&
    currentAccount.pin === +inputClosePin.value
  ) {
    /* const accArr = accounts.find(
      account =>
        account.nickname === currentAccount.nickname &&
        account.pin === currentAccount.pin
    );
    accounts.splice(accounts.indexOf(currentAccount), 1); */
    const currentAccountIndex = accounts.findIndex(
      account => account.nickname === currentAccount.nickname
    );
    accounts.splice(currentAccountIndex, 1);
    containerApp.style.opacity = 0;
    labelWelcome.textContent = 'Войдите в свой аккаунт';
  }
  inputCloseUsername.value = '';
  inputClosePin.value = '';
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();
  const loanAmount = Math.floor(inputLoanAmount.value);

  if (
    loanAmount > 0 &&
    currentAccount.transactions.some(trans => trans >= (loanAmount * 10) / 100)
  ) {
    currentAccount.transactions.push(loanAmount);
    currentAccount.transactionsDates.push(new Date().toISOString());
    updateUi(currentAccount);
  }
  inputLoanAmount.value = '';
});

let isTransactionsSorted = false;

btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayTransactions(currentAccount, !isTransactionsSorted);
  isTransactionsSorted = !isTransactionsSorted;
});

// Array.from() example
/*const logoImage = document.querySelector('.logo');
logoImage.addEventListener('click', function () {
  const transactionsUI = document.querySelectorAll('.transactions__value');
  console.log(transactionsUI);*/
/* const transactionsUIArray = Array.from(transactionsUI);
  console.log(
    transactionsUIArray.map(elem => +(elem.textContent.slice(0, -1)))
  ); */
/*const transactionsUIArray = Array.from(
    transactionsUI,
    elem => +elem.textContent.slice(0, -1)
  );
  console.log(transactionsUIArray);
});*/

const logoImage = document.querySelector('.logo');
logoImage.addEventListener('click', function () {
  [...document.querySelectorAll('.transactions__row')].forEach(function (
    row,
    index
  ) {
    if (index % 2 === 0) {
      row.style.backgroundColor = 'grey';
    }
  });
});
