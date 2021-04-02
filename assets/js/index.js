'use strict';

function AccucumulatorProto() {
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

function Accumulator(startingValue = 0) {
  this.lenght = 0;
  this.push(...arguments);
}

Accumulator.prototype = new AccucumulatorProto();

const myArr1 = new Accumulator();
const myUsers = new Accumulator({}, {}, {}, {});
const numbers = new Accumulator(1, 2, 3, 4, 5);

myUsers.forEach(function (elem,index) {
  elem.id=index;
  elem.isSubscribed = true;
})

function square(currentNumber) {
  console.log(currentNumber * currentNumber);
  return currentNumber * currentNumber;
}
numbers.forEach(square);
numbers.forEach(function (currentNumber, index, arr){
  arr[index]= square(currentNumber);
});
