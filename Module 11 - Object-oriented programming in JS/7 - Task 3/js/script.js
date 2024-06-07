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

const ElectricCar = function (name, speed, battery) {
  Car.call(this, name, speed);
  this.battery = battery;
};

ElectricCar.prototype = Object.create(Car.prototype);

ElectricCar.prototype.chargeBattery = function (chargeLevel) {
  this.battery = chargeLevel;
  console.log(`Заряд автомобиля ${this.name}: ${this.battery}%`);
};

ElectricCar.prototype.accelerate = function () {
  this.speed += 10;
  this.battery -= 1;
  console.log(`${this.name} едет со скоростью ${this.speed} км/ч, с зарядом ${this.battery}%`);
};

ElectricCar.prototype.breakCount = function (countBreak) {
  for (let i = 1; i <= countBreak; i++) {
    const befSpeed = this.speed;
    this.break();
    const nowSpeed = this.speed;
    console.log(`Скорость снижена с ${befSpeed} до ${nowSpeed}`);
  }
};

const tesla = new ElectricCar('Тесла', 100, 33);

tesla.accelerate();
tesla.break();
console.log(tesla.speed, tesla.battery);
tesla.accelerate();
tesla.chargeBattery(80);

tesla.breakCount(10);

tesla.accelerate();
