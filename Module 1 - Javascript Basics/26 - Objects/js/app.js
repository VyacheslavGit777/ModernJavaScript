const idObj = 3 // 1 - objects, 2 - methods objs, 3 - task

if (idObj == 1) {
  personData = ['YouRa', 'Makeev', 1984, 'programming', ['vasya', 'fedya']];

  console.log(personData[1], personData[4]);

  myObject = {
    name: 'Jack',
    lastName: 'Wade',
    middlename: 'Fuckovich',
    birthYear: 1987,
    job: 'programmer',
    familyMembers: ['Iren', 'Johnny', 'Jack']
  }

  console.log(myObject);

  console.log(myObject.name);
  console.log(myObject['name']);

  const baseName = 'name';
  console.log(myObject['middle' + baseName]);


  //const propPrompt = prompt('What do you want to know about object? Choose between name, lastName, middlename');
  //myObject[propPrompt] ? console.log(myObject[propPrompt]) : console.log('Not correct input');

  // create new Properties

  myObject.location = 'Germany';
  myObject['telegram'] = '@fuck_o_vich';

  console.log(myObject);

  // Challenge
  // 'YouRa has 3 family members and the first one is Irina'

  console.log(`${myObject.name} has ${myObject.familyMembers.length} family members and the first one is ${myObject.familyMembers[0]}`);

} else if (idObj == 2) {

  myObject = {
    name: 'Jack',
    lastName: 'Wade',
    middlename: 'Fuckovich',
    birthYear: 1987,
    job: 'programmer',
    familyMembers: ['Iren', 'Johnny', 'Jack'],
    hasDriverLicense: false,
    calcAge: function (birthYear) {
      return 2023 - birthYear;
    },
    calcAgeThis: function () {
      //console.log(this);
      return 2023 - this.birthYear;
    },
    calcAgeThis2: function () {
      this.age = 2023 - this.birthYear;
      return this.age;
    },
    getSummary: function () {
      return `${this.name} is a ${this.calcAgeThis2()}-year old ${this.job} and he ${this.hasDriverLicense ? 'has' : 'hasn\'t'} a driver license`
    }
  }

  console.log(myObject.calcAge(myObject.birthYear));
  console.log(myObject['calcAge'](myObject['birthYear']));
  console.log(myObject.calcAgeThis());

  console.log(myObject.calcAgeThis2());
  console.log(myObject.age);

  // Challenge getsummary
  // 'Jack is a 47-year old programming and he has/hasn't a driver license'

  console.log(myObject.getSummary());
} else if (idObj == 3) {

  //BMI weight / height**2

  const Jack = {
    firstname: 'Jack',
    lastName: 'White',
    weight: 79,
    height: 1.70,
    getBMI: function () {
      this.BMI = this.weight / Math.pow(this.height, 2);
      return this.BMI;
    }
  };

  const Mike = {
    firstname: 'Mike',
    lastName: 'Black',
    weight: 91,
    height: 1.93,
    getBMI: function () {
      this.BMI = this.weight / Math.pow(this.height, 2);
      return this.BMI;
    }
  };

  console.log(`Jack weight ${Jack.weight} kg, height ${Jack.height} m. Mike weighs ${Mike.weight} kg and his height is ${Mike.height} m`);
  const higherBmi = Jack.getBMI() > Mike.getBMI() ? `${Jack.firstname} ${Jack.lastName} BMI (${Jack.BMI}) is higher than ${Mike.firstname} ${Mike.lastName} (${Mike.BMI})!` : 
                                                    `${Mike.firstname} ${Mike.lastName} BMI (${Mike.BMI}) is higher than ${Jack.firstname} ${Jack.lastName} (${Jack.BMI})!`;
  console.log(higherBmi);                                        

}



