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
}

function Accumulator(startingValue = 0) {
  this.lenght = 0;
  this.value = startingValue;
  this.push(...arguments);
}
Accumulator.prototype = new AccucumulatorProto();
//let firstNumber = +prompt("input first number");
const myArr1 = new Accumulator(10);