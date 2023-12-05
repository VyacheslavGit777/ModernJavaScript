let result;
const firstName = 'Jack';
const lastName = 'Wade';
const middleName = 'Fuckovich';
const space = ' ';
const age = 25;
const greeting = "Hey there!";

// Concatanation
result = firstName + space + lastName + space + middleName;

result = greeting + space + 'My name is' + space + firstName + 
         space + middleName + ". I'm " + age + ' years old.' ;

//Escaping

result = 'I\'m 34 years old';

result = "I like \"Star wars\" movie";

//Properties and methods
result = 'Hello!'.length;
result = middleName.length;

//concat()


result = firstName.concat(space, lastName);
result = greeting.concat(space, 'My name is ', firstName, space, middleName);

//to UpperCase

result = middleName.toUpperCase();
result = result.toLowerCase();
result = firstName[0];

//index

result = 'Hello'.indexOf('l');
result = 'Hello'.lastIndexOf('l');

result = firstName.indexOf('a');

result = 'Hello lol'.lastIndexOf('lo');
result = firstName.indexOf('z');

//charAt

result = firstName.charAt(0);

const longString = 'Hi, I\'m a long string';
result = longString.charAt(longString.length - 1);


//substring
result = greeting.substring(0, 3);
result = greeting.substring(4, 9);

// slice
result = greeting.slice(4, 9);
result = greeting.slice(-6);

//split
result = longString.split(' ');
const colors = 'red, orange, green, blue';
result = colors.split(',');

//replace
result = colors.replace('blue', 'yellow');

//includes

result = colors.includes('yellow');



console.log(result);