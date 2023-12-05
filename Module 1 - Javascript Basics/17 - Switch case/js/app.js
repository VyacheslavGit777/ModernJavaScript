const color = 'red';

switch (color) {
  case 'green': 
    console.log('Go!'); 
    break;
  case 'yellow': 
    console.log('Get Ready!');
    break;
  case 'red':
    console.log('Stop!');
    break;
  default:
    console.log('WTF?');    
}

const weekday = 'thursday'

switch (weekday) {
  case 'monday':
    console.log('Keep calm and pretend it\'s not monday');
    break;
  case 'tuesday':
    console.log('Вторник');
    break;
  case 'wednesday':
    console.log('Среда');
    break;
  case 'thursday':
    console.log('Четверг! Пятница близко!');
    break;
  case 'friday':
    console.log('Пятница, ура!!! Скоро выходные!');
    break;
  case 'saturday':
  case 'sunday':
    console.log('Выходные!');
    break; 
  default:
    console.log('WTF?');     
}