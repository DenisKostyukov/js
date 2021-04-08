class Worker {
  constructor(name, surname, dailyRate, days) {
    this.name = name;
    this.surname = surname;
    this.dailyRate = dailyRate;
    this.days = days;
  }
  getSalary() {
    return this.dailyRate * this.days;
  }
}
const worker = new Worker("Denis", "Kostyukov", 100, 25);
class Fuel {
  constructor(volume, density) {
    this.volume = volume;
    this.density = density;
  }
  getFullWeight() {
    return this.volume * this.density;
  }
}
class Auto {
  constructor(model, weight, fuel) {
    this.model = model;
    this.weight = weight;
    this.fuel = fuel;
  }
  getFullWeight() {
    return this.weight + this.fuel.getFullWeight();
  }
}
const benzin = new Fuel(50, 0.9);
const auto = new Auto('passat', 1200, benzin);

class Friend {
  /**
   * 
   * @param {string} name 
   * @param {number} appleCount 
   * @param {Friend} friend 
   */
  constructor(name, appleCount, friend) {
    this.name = name;
    this.appleCount = appleCount;
    this.friend = friend;
  }
  getAllApples() {
    return this.appleCount + this.friend.appleCount;
  }
}
const friend1 = new Friend('John', 5);
const friend2 = new Friend('Bob', 10, friend1);
friend1.friend=friend2;