//let favoriteColor;

//alert('My favorite color is ' + favoriteColor);
//favoriteColor = prompt('What is your favorite color?');

//console.log('Your favorite color is ' + favoriteColor);

let firstName;
let middleName;
let age;

while (firstName == null) {
  firstName = prompt('What is your firstname?');
}


while (middleName == null) {
  middleName = prompt('What is your middlename?');
}

while (age == null) {
  age = prompt('How old are you?');
}

let userHtml = `<h3>Your firstname: ${firstName}</h3>
                <h3>Your middleName: ${middleName}</h3>
                <h3>Your age: ${age}</h3>
`

document.body.innerHTML += userHtml;