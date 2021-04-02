'use strict';

function MyArrayProto() {
  this.push = function push() {
    for (let i = 0; i < arguments.length; i++) {
      this[this.lenght++] = arguments[i];
    }
    return this.lenght;
  }
  this.pop = function pop() {
    if (this.lenght === 0) return
    const lastValue = this[this.lenght - 1];
    delete this[--this.lenght];
    return lastValue;
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

function MyArray() {
  this.lenght = 0;
  this.push(...arguments);
}

MyArray.prototype = new MyArrayProto();

const myArr1 = new MyArray();
const myUsers = new MyArray({}, {}, {}, {});
const numbers = new MyArray(1, 2, 3, 4, 5);

myUsers.forEach(function (elem,index) {
  elem.id=index;
  elem.isSubscribed = true;
})

function square(currentNumber) {
  console.log(currentNumber * currentNumber);
  return currentNumber * currentNumber;
}
numbers.forEach(square);
numbers.forEach(function(currentNumber, index, arr){
  arr[index]= square(currentNumber);
})