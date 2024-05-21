'use strict';

const Car = function (name, speed) {
  this.name = name;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 5;
};

Car.prototype.break = function () {
  this.speed -= 5;
};

Car.prototype.showMsg = function () {
  console.log(`${this.name} едет со скоростью ${this.speed} км/ч`);
};

const car1 = ['Honda', 120];
const car2 = ['BMW', 150];

const carExample1 = new Car(car1[0], car1[1]);
const carExample2 = new Car(car2[0], car2[1]);

carExample1.showMsg();
carExample2.showMsg();

carExample1.accelerate();
carExample2.break();

console.log('');

carExample1.showMsg();
carExample2.showMsg();

while (carExample1.speed < 150) {
  carExample1.accelerate();
}

carExample1.showMsg();
