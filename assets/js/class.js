class User {
  constructor(name, surname, age, isBanned) {
    this.name = name;
    this.surname = surname;
    this.age = age;
    this.isBanned = isBanned;
  }
  set isBanned(newIsBanned) {
    this._isBanned = newIsBanned;
  }
  get isBanned() {
    return this._isBanned;
  }
}
class Admin extends User {
  constructor(name, surname, age) {
    super(name, surname, age, false);
  }
  ban(user) {
    if (user instanceof User) {
     return user.isBanned = !user.isBanned;
    }
    throw new Error("Is not a user")
  }
}
const u = new User('Denis', 'Kostyukov', 19, true);
const a = new Admin('John', 'Smith', 32);