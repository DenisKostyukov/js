'use strict';

const user = {
  firstName: 'Test',
  lastName: 'Testovich',
  age: 18,
  isMale: true,
  sayHello: function () {
    return `Hello my name is ${this.firstName} ${this.lastName}`;
  },
  isAdult: function () {
    return this.age >= 18;
  }
}
//alert(user.sayHello());
//alert(user.isAdult());

const User = function (firstName, lastName, age, isMale) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.isMale = isMale;
  this.sayHello = function () {
    return `Hello my name is ${this.firstName} ${this.lastName}`;
  };
  this.isAdult = function () {
    return this.age >= 18;
  }
}
const secondUser = new User('Test', 'Testovich', 19, true);
console.log(secondUser.sayHello());
console.log(secondUser.isAdult());