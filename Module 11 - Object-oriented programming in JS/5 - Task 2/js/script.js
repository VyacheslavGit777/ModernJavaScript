class Car {
  constructor(name, speed) {
    this.name = name;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 5;
  }

  break() {
    this.speed -= 5;
  }

  showMsg() {
    console.log(`${this.name} едет со скоростью ${this.speed} км/ч`);
  }
  get speedMph() {
    return this.speed / 1.6;
  }
  set speedMph(speedMph) {
    this.speed = speedMph * 1.6;
  }
}

const honda = new Car('Honda', 120);
const bmw = new Car('BMW', 150);

honda.showMsg();
bmw.showMsg();

console.log('');

honda.accelerate();
bmw.break();

honda.showMsg();
bmw.showMsg();

console.log(bmw.speedMph);
bmw.speedMph = 55;
console.log(bmw.speed);
