'use strict';

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
      if (!callback(this[i], i, this)){
        return false;
      }  
    }
    return true;
  }
  this.filter= function filter(callback){
    const newArray= new MyArray()
    for (let i = 0; i < this.lenght; i++) {
      if (callback(this[i], i, this)){
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


function randomNumber(min, max){
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

for(let i = 0;i<10;i++){
  testArray.push(randomNumber(100, 200));
}

/*Variant 1*/

function Obj(email, age, isMale){
  this.email=email;
  this.age=age;
  this.isMale=isMale;
}

function getUsers(amount){
  const newArray=new MyArray();

  for(let i = 0;i<amount;i++){
    const age= randomNumber(12, 50);
    const isMale= Boolean(randomNumber(0, 1));
    const email= `user${i}@gmail.com`;
    newArray.push(new Obj(email, age, isMale));
  }
  return newArray;
}

/*Variant 2*/

function getUsers1(amount){
  const newArray=new MyArray();

  for(let i = 0;i<amount;i++){
    newArray.push({});
  }
  newArray.forEach(function (elem, index) {
    elem.email = `user${index}@gmail.com`;
    elem.age = randomNumber(12, 50);
    elem.isMale= Boolean(randomNumber(0, 1));;
  })
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

