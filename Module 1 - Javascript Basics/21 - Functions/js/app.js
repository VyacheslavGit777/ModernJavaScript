function printText() {
  console.log('Hello To Everyone!');
}

printText();
printText();
printText();

function colorizer(item, color, colorCode) {
  //console.log(item, color);
  const colorizedItem = `The ${item} is ${color}. The code of the color: ${colorCode}.`;
  //console.log(colorizedItem);
  return colorizedItem;
}

const messageFromColorizer = colorizer('desk', 'red', 99);
console.log(`We have following message: ${messageFromColorizer}`);