let weight, height;

while (weight == null) {
  weight = prompt('Enter your weight: ');
}

while (height == null) {
  height = prompt('Enter your height: ');
}

const result = weight / Math.pow(height, 2);
console.log(result);

alert('Are you overweight?' + (result >= 25));

/* for (let i = 70; i <= 100; i++) {
  const bodyMasIndex = i / Math.pow(1.85, 2);
  const isBad = bodyMasIndex >= 25;
  console.log('Weight: ' + i + ' ' + isBad + ' ' + bodyMasIndex);
} */