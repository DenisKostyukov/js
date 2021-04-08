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
const worker=new Worker("Denis", "Kostyukov", 100, 25);
