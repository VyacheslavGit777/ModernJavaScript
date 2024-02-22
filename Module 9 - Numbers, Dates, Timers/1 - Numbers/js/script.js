'use strict';

const variant = 4;
// 1 - Преобразование и проверка чисел
// 2 - Работа с Math
// 3 - Оператор остаток
// 4 - BigInt

if (variant === 1) {
  console.log(10 === 10.0);

  // 10 - 0-9
  // 2 - 0, 1
  console.log(0.1 + 0.2);
  console.log(0.1 + 0.2 === 0.3);

  // Converting string to numbers
  console.log(Number('11'));
  console.log(+'11');
  console.log('11');

  // Parsing number from strings
  console.log(Number.parseInt('20%', 10));
  console.log(Number.parseInt('s20', 10));
  console.log(Number.parseInt('00001111%', 2));
  console.log(Number.parseFloat('9.7kg'));

  // Other methods from Number namespace
  console.log(Number.isNaN(111));
  console.log(Number.isNaN('111'));
  console.log(Number.isNaN(Number.parseInt('s20', 10)));
  console.log(Number.isNaN(11 / 0));
  console.log(11 / 0);

  // Check if the value is finite number
  console.log(Number.isFinite(111));
  console.log(Number.isFinite('111'));
  console.log(Number.isFinite('111%'));
  console.log(Number.isFinite(11 / 0));
  console.log(Number.isFinite(99.7));
} else if (variant === 2) {
  console.log(Math.sqrt(9));
  console.log(9 ** (1 / 2));
  console.log(8 ** (1 / 3));

  const arr = [3, 55, 66, 44, 31, 2, 9];
  const arr2 = [3, '55', '66', 44, 31, 2, 9];
  const arr3 = [3, 55, '66s', 44, 31, 2, 9];
  console.log(Math.max(...arr));
  console.log(Math.max(...arr2));
  console.log(Math.max(...arr3));
  console.log(Math.min(...arr));

  console.log(Math.PI);
  console.log(Math.PI * Number.parseInt('20px') ** 2);
  console.log(Math.trunc(Math.random() * 6) + 1); // 1 - 6

  console.log(`1.99 and 1.39`);
  console.log('Trunc');
  console.log(Math.trunc(1.99));
  console.log(Math.trunc(1.39));

  console.log('Round');
  console.log(Math.round(1.99));
  console.log(Math.round(1.39));

  console.log('Ceil');
  console.log(Math.ceil(1.99));
  console.log(Math.ceil(1.39));

  console.log('Floor');
  console.log(Math.floor(1.99));
  console.log(Math.floor(1.39));

  console.log(
    `-1.99. Trunc: ${Math.trunc(-1.99)}; floor:${Math.floor(
      -1.99
    )}; ceil:${Math.ceil(-1.99)}`
  );

  console.log(
    `-1.11. Trunc: ${Math.trunc(-1.11)}; floor:${Math.floor(
      -1.11
    )}; ceil:${Math.ceil(-1.11)}`
  );

  console.log(`Original PI: ${Math.PI}; toFixed(2): ${Math.PI.toFixed(2)}`);
  console.log((1.444).toFixed(2), (1.456).toFixed(2));
} else if (variant === 3) {
  console.log(7 % 3); // 2 раза по 3 и остаток 1 // 7 = 3 * 2 + 1
  console.log(7 / 3);
  console.log(7 % 3); // 7 = 4 * 1 + 3

  // Чётное (even), нечётное (odd)
  console.log(8 % 2);
  console.log(108 % 2);
  console.log(8564 % 2);

  console.log(9 % 2);
  console.log(89 % 2);
  console.log(881 % 2);

  const isNumberOdd = x => x % 2 !== 0;
  console.log(isNumberOdd(5));
  console.log(isNumberOdd(7));
  console.log(isNumberOdd(6));
  console.log(isNumberOdd(10));
} else if (variant === 4) {
  // Максимальное (максимально безопасное) целое число
  console.log(2 ** 53 - 1);
  console.log(Number.MAX_SAFE_INTEGER);
  // Не правильные результаты, js не может представить больше
  console.log(2 ** 53 + 0);
  console.log(2 ** 53 + 1);
  console.log(2 ** 53 + 2);

  console.log(432223455244520245894325842234543n);
  console.log(BigInt('432223455244520245894325842234543'));

  console.log('Operations');

  console.log(
    432223455244520245894325842234543n + 432223455244520245894325842234543n
  );

  console.log(
    432223455244520245894325842234543n - 432223455244520245894325842234543n
  );

  console.log(
    432223455244520245894325842234543n * 432223455244520245894325842234543n
  );

  console.log(
    432223455244520245894325842234543n / 432223455244520245894325842234543n
  );

  const bigNumber = 432223455244520245894325842234543n;
  const regularNumber = 189;

  console.log(bigNumber * BigInt(regularNumber));
  console.log(bigNumber > regularNumber);
  console.log(189n === regularNumber);
  console.log(189n === BigInt(regularNumber));

  console.log(typeof 123);
  console.log(typeof 123n);

  console.log(bigNumber + ' это ОЧЕНЬ большое число!');

  //console.log(Math.pow(bigNumber, 2));
  console.log(5 / 2);
  console.log(5n / 2n);
}
