const x = true;
const y = true;
let isXMoreThanY = x != y;

console.log(isXMoreThanY);

const someText1 = 'some text';
const someText2 = 'some text';

console.log(someText1 == someText2);

// == не строгий оператор равенста
// === строгий оператор равенста (не только значение, но и тип)

const a = '5';
const b = 5;

console.log(' == ' + (a == b));
console.log(' === ' + (a === b));

console.log(true == 1);
console.log(true === 1);
console.log(true == '1');
console.log(null == undefined);
console.log(null === undefined);
console.log(NaN == NaN);
console.log(NaN === NaN);