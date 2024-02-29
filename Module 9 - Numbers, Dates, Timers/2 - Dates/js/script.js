'use strict';

const variant = 3;
// 1 - Работа с датами
// 2 - Операции с датами
// 3 - Интернационализация дат

if (variant === 1) {
  const now = new Date();
  console.log(now);

  const someDateString = 'Feb 21 2024 12:23:31';
  const someDate = new Date(someDateString);
  console.log(someDate);
  console.log(new Date('Dec 31 2021'));

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

  console.log(new Date(account1.transactionsDates[0]));
  console.log(new Date(2222, 1, 13, 11, 28, 59));
  console.log(new Date(2222, 0, 32));

  // Unix time started Jan 1 1970
  console.log(new Date(0));
  console.log(new Date(1 * 24 * 60 * 60 * 1000));

  // Работа с датами при помощи методов
  const futureDate = new Date(2222, 1, 13, 11, 28, 59);
  console.log(futureDate);
  console.log(futureDate.getFullYear());
  console.log(futureDate.getMonth());
  console.log(futureDate.getDate());
  console.log(futureDate.getDay());
  console.log(futureDate.getHours());
  console.log(futureDate.getMinutes());
  console.log(futureDate.getSeconds());
  console.log(futureDate.toISOString());
  console.log(futureDate.getTime());
  console.log(new Date(7956088139000));
  console.log(Date.now());
} else if (variant === 2) {
  const futureDate = new Date(2222, 1, 13, 11, 28, 59);
  console.log(Number(futureDate));
  console.log(+futureDate);
  console.log(-futureDate);

  const getDaysBetween2Dates = (date1, date2) =>
    Math.abs((date2 - date1) / (1000 * 60 * 60 * 24));
  const days = getDaysBetween2Dates(
    new Date(2021, 9, 12),
    new Date(2021, 9, 1)
  );
  console.log(days);
} else if (variant === 3) {
  const now = new Date();
  const options = {
    hour: 'numeric',
    minute: 'numeric',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    weekday: 'long',
  }; // numeric, long, 2-digit
  const locale = navigator.language;
  console.log(locale);
  console.log(new Intl.DateTimeFormat('ru-RU').format(now));
  console.log(new Intl.DateTimeFormat('en-US').format(now));
  console.log(new Intl.DateTimeFormat(locale, options).format(now));
}
