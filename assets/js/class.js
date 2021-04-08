class Worker {
  /**
   * 
   * @param {string} name 
   * @param {string} surname 
   * @param {number} dailyRate 
   * @param {number} days 
   */
  constructor(name, surname, dailyRate, days) {
    this.name = name;
    this.surname = surname;
    this.dailyRate = dailyRate;
    this.days = days;
  }
  set dailyRate(newRate) {
    if (typeof newRate !== "number") {
      throw new TypeError("Parameter has unnaproppriate type");
    }
    this._dailyRate = newRate;
  }
  get dailyRate() {
    return this._dailyRate;
  }
  set days(newDaysCount) {
    if (newDaysCount < 0 || newDaysCount > 31) {
      throw new RangeError("Wrong days range");
    }
    if (typeof newDaysCount !== "number") {
      throw new TypeError('Parameters have unnapropriate type');
    }
    this._days = newDaysCount;
  }
  get days() {
    return this._days;
  }
  get salary() {
    return this._dailyRate * this.days;
  }
}

class Fuel {
  constructor(volume, density) {
    this.volume = volume;
    this.density = density;
  }
  set volume(newVolume){
    if (typeof newVolume !== "number") {
      throw new TypeError("Wrong type");
    }
    this._volume=newVolume;
  }
  get volume(){
    return this._volume;
  }
  set density(newDensity){
    if (typeof newDensity !== "number") {
      throw new TypeError("Wrong type");
    }
    this._density=newDensity;
  }
  get density(){
    return this._density;
  }
  get getFullWeight() {
    return this.volume * this.density;
  }
}
class Auto {
  constructor(model, weight, fuel) {
    this.model = model;
    this.weight = weight;
    this.fuel = fuel;
  }
  set model(newModel) {
    if (typeof newModel !== "number") {
      throw new TypeError("Wrong type");
    }
    this._model = newModel;
  }
  get model() {
    return _model;
  }
  set weight(newWeight){
    if (typeof newWeight !== "number") {
      throw new TypeError("Wrong type");
    }
    this._weight=newWeight;
  }
  get weight(){
    return this._weight;
  }
  get getFullWeight() {
    return this.weight + this.fuel.getFullWeight();
  }
}
const benzin = new Fuel(50, 0.9);
const auto = new Auto(12, 1200, benzin);

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
friend1.friend = friend2;