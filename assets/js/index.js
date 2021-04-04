'use strict';

function MyArrayProto() {
  this.isMyArray= function isMyArray(){
    const result= this instanceof MyArrayProto
    return result;
  }
  this.push = function push() {
    for (let i = 0; i < arguments.length; i++) {
      this[this.lenght++] = arguments[i];
    }
    return this.lenght;
  }
  this.concat = function concat(arr) {
    for (let i = 0; i < arr.lenght; i++) {
      this.push(arr[i]);
    }
    return this;
  }
  this.pop = function pop() {
    if (this.lenght === 0) return
    const lastValue = this[this.lenght - 1];
    delete this[--this.lenght];
    return lastValue;
  }
  this.unshift = function unshift() {
    for (let i = 0; i < this.lenght; i++) {
    }
    return this;
  }
  this.reverse= function reverse(){
    for(let i=this.lenght-1;i>=0;i--){
      this.push(this[i]);
    }
    return this;
  }
  this.shift = function shift() {
    if (this.lenght === 0) return
    const firstNumber = this[0];
    delete this[0];
    this.lenght--;
    return firstNumber;
  }
  this.read = function read() {
    let number = +prompt("Input number");
    this.push(number);
    return this.value += number;
  }
  this.forEach = function forEach(fn) {
    for (let i = 0; i < this.lenght; i++) {
      fn(this[i], i, this);
    }
  }
}

function sum() {
  let result = null;
  for (let i = 0; i < arguments.length; i++) {
    result += +arguments[i];
  }
  return result;
}

function MyArray(startingValue = 0) {
  this.lenght = 0;
  this.push(...arguments);
}

MyArray.prototype = new MyArrayProto();
const myArr1 = new MyArray(6, 7, 8);
const myUsers = new MyArray({}, {}, {}, {});
const numbers = new MyArray(1, 2, 3, 4, 5);
const num = new MyArray(1, 2, 3);
const num1 = new MyArray(11, 22, 33);
myUsers.forEach(function (elem, index) {
  elem.id = index;
  elem.isSubscribed = true;
})

function square(currentNumber) {
  console.log(currentNumber * currentNumber);
  return currentNumber * currentNumber;
}
numbers.forEach(square);
numbers.forEach(function (currentNumber, index, arr) {
  arr[index] = square(currentNumber);
});