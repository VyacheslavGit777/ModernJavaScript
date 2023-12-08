// Problem 1
// We work on wheather forecast app, specifically on
// humidity feature for now. The most recent task
// is: "Calculate the humidity amplitude for given array
// of humidities for one day. Note, that sometimes
// there can be an error in data, caused by sensor
// error."
const humidities = [32, 45, 29, 19, 'error', 58, 71, 47, 33, 42, 51, 49];
const humidities2 = [-1, 10, 15, 18, 33];

// 1. Understand the problem
// - What is humidity amplitude? Difference between min and max value of humidity
// - How to calculate min and max values in array?
// - How senser error looks like in data array? What do with error?

// 2. Divide into sub-problem
// - How to ignore data error?
// - How to calculate min values in array?
// - How to calculate max values in array?
// - Subtract min from max and return the result

const calculateHumitidesAmplitude = function (humidities) {
  let max = humidities[0];
  let min = humidities[0];
  for (let i = 1; i < humidities.length; i++) {
    const currentHumidity = humidities[i];
    if (typeof currentHumidity !== 'number') continue;
    if (currentHumidity > max) {
      max = currentHumidity;
    }
    if (currentHumidity < min) {
      min = currentHumidity;
    }
  }
  console.log(`Minimal: ${min}, maximal: ${max}`);
  return max - min;
};

//calculateHumitidesAmplitude([1, 3, -10, 5, 80, 10]);
const amplitude = calculateHumitidesAmplitude(humidities);
console.log(amplitude);

// Problem 2
// The function should get 2 array of humidities as parameters
// 1. Understand the problem
// - Should we implement the same functionalitity for second array? No, We should merge 2 array

// 2. Divide into sub-problem
// - How to merge 2 arrays?

const calculateHumitidesAmplitudeTwoArrays = function (h1, h2) {
  const humidities = h1.concat(h2);
  let max = humidities[0];
  let min = humidities[0];
  for (let i = 1; i < humidities.length; i++) {
    const currentHumidity = humidities[i];
    if (typeof currentHumidity !== 'number') continue;
    if (currentHumidity > max) {
      max = currentHumidity;
    }
    if (currentHumidity < min) {
      min = currentHumidity;
    }
  }
  console.log(`Minimal: ${min}, maximal: ${max}`);
  return max - min;
};

//calculateHumitidesAmplitude([1, 3, -10, 5, 80, 10]);
const amplitudeTwoArrays = calculateHumitidesAmplitudeTwoArrays(
  humidities,
  humidities2
);
console.log(amplitudeTwoArrays);

//debugging

const celciusToKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'celcius',
    value: Number(prompt('Temperature in Celcius')),
  };

  //console.log(measurement);
  console.table(measurement);
  console.log(measurement.value, typeof measurement.value);
  /* console.warn(measurement.value);
  console.error(measurement.value); */

  const kelvin = measurement.value + 273;
  return kelvin;
};

console.log(celciusToKelvin());

// Task

const Data1 = [49, 51, 63];
const Data2 = [31, 29, 43, 58, 52];

const printHumiditiesForecast = function (arr) {
  let humText = '... ';
  for (let i = 0; i < arr.length; i++) {
    humText += `${arr[i]}% humidity in ${i + 1} days ... `;
  }
  return humText;
};

console.log(printHumiditiesForecast(Data1));
console.log(printHumiditiesForecast(Data2));
