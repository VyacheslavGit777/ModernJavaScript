var name = 'Jack';
console.log(name);
name = 'Jane';
console.log(name);
var color;
console.log(color);
color = 'red';
console.log(color);


const user = {
  name: 'Jack',
  gender: 'male',
  age: 24
}

console.log(user);

user.name = 'Jane';
console.log(user);

/*user = {
  name: 'Jack',
  gender: 'male',
  age: 24
}*/ // Нельзя присвоить новый объект созданной константе

const colors = ['red', 'orange', 'green'];
console.log(colors);

colors.push('blue');
console.log(colors);

/* colors = ['red', 'orange', 'green']; */ // нельзя константе присвоить новый массив
