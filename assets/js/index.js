'use strict';
function sum() {
  let result = null;
  for (let i = 0; i < arguments.length; i++) {
    result += +arguments[i];
  }
  return result;
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