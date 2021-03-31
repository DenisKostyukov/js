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
}

function MyArray() {
  this.lenght = 0;
    this.push(...arguments);
}
MyArray.prototype = new MyArrayProto();
const myArr1 = new MyArray();