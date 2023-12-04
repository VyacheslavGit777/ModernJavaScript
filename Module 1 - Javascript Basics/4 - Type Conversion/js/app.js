console.log('Conversion To String'.toUpperCase())
// String()
let x = String(111);
x = String(2 + 2);
x = String(true);
x = String(new Date());
x = String(['one','two','free']);

//toString()

x = (35).toString();
x = (true).toString();
x = (new Date()).toString();
x = (['one','two','free']).toString();

console.log(x);
console.log(typeof x);
console.log(x.length);


console.log('-----------------------------')
console.log('-----------------------------')
console.log('-----------------------------')
console.log('Conversion To Number'.toUpperCase())

//Conversion to number

// Number
let y = Number('5.1234567');
y = Number(true);
y = Number(null);
y = Number('text');
y = Number(['1,2,3']);


//parseInt

y = parseInt('123.23')
y = parseFloat('123.23')


console.log(y);
console.log(typeof y);
console.log(y.toPrecision());

console.log('');

const a = null;
const b = '3';
const z = a + b;

console.log(z);
console.log(typeof z);