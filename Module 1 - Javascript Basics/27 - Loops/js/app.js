const idTask = 2; // 1 - for loop, 2 - for and others

if (idTask == 1) {

  /* console.log('Push ups repetition 1');
  console.log('Push ups repetition 2'); */
  //...
  for (let i = 1; i <= 10; i++) {
    console.log(`Push ups repetition ${i}`);
  }

  for (let i = 1; i <= 10; i += 2) {
    console.log(`Push ups repetition ${i}`);
  }
  /* let i = 1;
  for (; ;) {
    if (i <= 3) {
      console.log(i);
    } else { break };
    i++;
  }
  console.log('Output'); */
} else if (idTask == 2) {

  const someUser = ['Vasya', 'Pupkin', 1974, 'developer', ['Iren', 'Michael'], true];
  const types = [];
  for (let i = 0; i < someUser.length; i++) {
    console.log(someUser[i], typeof someUser[i]);
    //types[i] = typeof someUser[i];
    types.push(typeof someUser[i]);
  }


  const myObject = {
    firstName: 'Vasya',
    lastName: 'Pupkin',
    isGoose: true
  }


  for (let i = 0; i < Object.keys(myObject).length; i++) {
    console.log(myObject[Object.keys(myObject)[i]]);
  }

  console.log(types);

  const birtYears = [1974, 1994, 2000, 2003];
  const ages = [];

  for (let i = 0; i < birtYears.length; i++) {
    ages.push(2023 - birtYears[i]);
  }

  console.log(ages);


}