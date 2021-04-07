'use strict';
const NATIONALITY = ["uk", "ru", "en", "fr", "sp"];

function MyArrayProto() {

  this.push = function push() {
    for (let i = 0; i < arguments.length; i++) {
      this[this.lenght++] = arguments[i];
    }
    return this.lenght;
  }
  this.concat = function concat() {
    const newArray = new MyArray();
    for (let i = 0; i < this.length; i++) {
      newArray.push(this[i]);
    }
    for (let i = 0; i < arguments.length; i++) {
      if (MyArray.isMyArray(arguments[i]) || Array.isArray(arguments[i])) {
        for (let j = 0; j < arguments[i].length; j++) {
          newArray.push(arguments[i][j]);
        }
      } else {
        newArray.push(arguments[i]);
      }
    }
    return newArray;
  }
  this.pop = function pop() {
    if (this.lenght === 0) return
    const lastValue = this[this.lenght - 1];
    delete this[--this.lenght];
    return lastValue;
  }
  this.unshift = function unshift() {
    for (let i = this.lenght - 1; i >= 0; i--) {
      this[i + arguments.length] = this[i];
    }
    for (let i = 0; i < arguments.length; i++) {
      this[i] = arguments[i];
    }
    return this.lenght += arguments.length;
  }
  this.reverse = function reverse() {
    const maxIndex = this.lenght - 1;
    const middle = maxIndex / 2;
    for (let i = 0; i < middle; i++) {
      const temp = this[i];
      this[i] = this[maxIndex - i];
      this[maxIndex - i] = temp;
    }
    return this;
  }
  this.shift = function shift() {
    if (this.lenght === 0) return;
    const firstNumber = this[0];
    for (let i = 0; i < this.lenght - 1; i++) {
      this[i] = this[i + 1];
    }
    delete this[--this.lenght];
    return firstNumber;
  }
  this.read = function read() {
    let number = +prompt("Input number");
    this.push(number);
    return this.value += number;
  }
  this.forEach = function forEach(callback) {
    for (let i = 0; i < this.lenght; i++) {
      callback(this[i], i, this);
    }
  }
  this.map = function map(callback) {
    const newArray = new MyArray();
    for (let i = 0; i < this.lenght; i++) {
      newArray.push(callback(this[i], i, this));
    }
    return newArray;
  }
  this.some = function some(callback) {
    for (let i = 0; i < this.lenght; i++) {
      if (callback(this[i], i, this))
        return true;
    }
    return false;
  }

  this.every = function every(callback) {
    for (let i = 0; i < this.lenght; i++) {
      if (!callback(this[i], i, this)) {
        return false;
      }
    }
    return true;
  }
  this.filter = function filter(callback) {
    const newArray = new MyArray()
    for (let i = 0; i < this.lenght; i++) {
      if (callback(this[i], i, this)) {
        newArray.push(this[i]);
      }
    }
    return newArray;
  }
}

function sum() {
  let result = null;
  for (let i = 0; i < arguments.length; i++) {
    result += +arguments[i];
  }
  return result;
}

function MyArray() {
  this.lenght = 0;
  for (let i = 0; i < arguments.length; i++) {
    this.push(arguments[i])
  }
}

MyArray.__proto__.isMyArray = function isMyArray(arr) {
  return arr instanceof MyArray;
}

MyArray.prototype = new MyArrayProto();
const myArr1 = new MyArray(6, 6, 8);
const testArray = new MyArray();

/*Math random Practice*/


function randomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

for (let i = 0; i < 10; i++) {
  testArray.push(randomNumber(100, 200));
}

/*Variant 1*/

function UserProto() {
  this.getFullName = function getFullName() {
    return `Full name: ${this.name} ${this.surname}`;
  }
}
Obj.prototype = new UserProto();

function getRandomNationality() {
  return NATIONALITY[randomNumber(0, NATIONALITY.length - 1)]
}

function Obj(name, surname, email, age, isMale, isSubscribed = false, nationality) {
  this.name = name;
  this.surname = surname;
  this.email = email;
  this.age = age;
  this.isMale = isMale;
  this.isSubscribed = isSubscribed;
  this.nationality = nationality;
}

function getUsers(amount) {
  const newArray = new MyArray();

  for (let i = 0; i < amount; i++) {
    const name = `user${i}`;
    const surname = `surname${i}`;
    const age = randomNumber(12, 50);
    const isMale = Math.random() < 0.5;
    const email = `user${i}@gmail.com`;
    const isSubscribed = Math.random() < 0.5;
    const nationality = getRandomNationality()
    newArray.push(new Obj(name, surname, email, age, isMale, isSubscribed, nationality));

  }
  return newArray;
}

function isEven(num) {
  return num % 2 === 0
}

function isOdd(num) {
  return num % 2 === 1
}

function square(currentNumber) {
  console.log(currentNumber * currentNumber);
  return currentNumber * currentNumber;
}

function getSubscribedAdultWomen(arr) {
  return arr.filter(function (elem) {
    return elem.isSubscribed && elem.age >= 18 && !elem.isMale;
  })
}
const users = getUsers(100);


function test() {
  console.log(this);
}
const test2 = function () {
  console.log(this);
}
const test3 = () => {
  console.log(this);
}
const arrowFunction = (...rest) => rest.reduce((accumulator, currentvalue) => accumulator*currentvalue);

const numbers=[1,1,11,12,23];
const numbers1=[23,453,12,34];
const newArray=[...numbers, ...numbers1];