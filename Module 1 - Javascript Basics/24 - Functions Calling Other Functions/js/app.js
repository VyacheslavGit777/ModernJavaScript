function colorMixer(color1, color2) {
  const newColor = `${color1} + ${color2}`;
  return newColor;
}

function colorizer(item, color1, color2) {
  const color = colorMixer(color1, color2);
  /* const getMixColor = (color1, color2) => `${color1} + ${color2}`;
  const color = getMixColor(color1, color2); */
  const colorizedItem = `The ${item} is ${color}.`;
  return colorizedItem;
}

const colorizedCar = colorizer('car', 'red', 'orange');
console.log(colorizedCar);

// Task

// arrow getAverage() среднее для любых трёх значений

//const Dept1 = [35467, 29842, 38501]; 
//const Dept2 = [70533, 50121, 33899];
const Dept1 = [50301, 21984, 19207]; 
const Dept2 = [72381, 41562, 29465];

function roundUp(num, precision) {
  precision = Math.pow(10, precision)
  return Math.ceil(num * precision) / precision
}

const getAverage = (month1, month2, month3) => roundUp((month1 + month2 + month3) / 3, 2);

const averageDept1 = getAverage(Dept1[0], Dept1[1], Dept1[2]);
const averageDept2 = getAverage(Dept2[0], Dept2[1], Dept2[2]);

console.log('Department 1 average: ' + averageDept1); 
console.log('Department 2 average: ' + averageDept2); 

function printBonus(dept1AverSales, dept2AverSales) {
  if (dept1AverSales > dept2AverSales) {
    const differenceAverage = dept1AverSales - dept2AverSales;
    const percentAverage = Math.floor(differenceAverage / dept2AverSales * 100);
    percentAverage >= 30 ? console.log(`Dept 1 will get a bonus of ${percentAverage}%`) : console.log('No bonus');
  } else if (dept1AverSales < dept2AverSales) {
    const differenceAverage = dept2AverSales - dept1AverSales;
    const percentAverage = Math.floor(differenceAverage / dept1AverSales * 100);
    percentAverage >= 30 ? console.log(`Dept 2 will get a bonus of ${percentAverage}%`) : console.log('No bonus');
  } else {
    console.log('No bonus');
  }
}

printBonus(averageDept1, averageDept2);