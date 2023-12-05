let weight, height;

while (weight == null) {
  weight = prompt('Enter your weight: ');
}

while (height == null) {
  height = prompt('Enter your height: ');
}

const bodyMasIndex = weight / Math.pow(height, 2);
console.log(bodyMasIndex);

if (bodyMasIndex >= 25) {
  alert('Yes, your BMI more than normal by ' + (bodyMasIndex - 25))
} else {
  alert('No, your weight is normal');
}