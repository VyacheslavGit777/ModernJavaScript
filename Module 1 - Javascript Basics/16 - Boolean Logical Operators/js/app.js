// And, or, not

// And
console.log(true && true, true && false, false && false); // t f f

// Or
console.log(true || true, true || false, false || false); //t t f

// not
console.log(!true, !false); //f t

const hasMoney = false;
const isWithParent = false;
const isAdult = true;
const isCompletelyDrunk = false;

const approvingMessage = 'Buy it!';
const fuckMsg = 'Get out of here and fuck yourself!'

if (hasMoney && isAdult) {
  console.log(approvingMessage)
} else {
  console.log(fuckMsg)
}

if (hasMoney || isWithParent) {
  console.log(approvingMessage)
} else {
  console.log(fuckMsg)
}


if (hasMoney && isAdult && !isCompletelyDrunk) {
  console.log(approvingMessage)
} else {
  console.log(fuckMsg)
}