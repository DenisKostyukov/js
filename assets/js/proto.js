'use strict';
const NATIONALITY = ["uk", "ru", "en", "fr", "sp"];
class MyArray{
  constructor(){
    this.lenght = 0;
    for (let i = 0; i < arguments.length; i++) {
      this.push(arguments[i])
    }
  }
  push() {
    for (let i = 0; i < arguments.length; i++) {
      this[this.lenght++] = arguments[i];
    }
    return this.lenght;
  }
  concat() {
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
  pop() {
    if (this.lenght === 0) return
    const lastValue = this[this.lenght - 1];
    delete this[--this.lenght];
    return lastValue;
  }
  unshift() {
    for (let i = this.lenght - 1; i >= 0; i--) {
      this[i + arguments.length] = this[i];
    }
    for (let i = 0; i < arguments.length; i++) {
      this[i] = arguments[i];
    }
    return this.lenght += arguments.length;
  }
  reverse() {
    const maxIndex = this.lenght - 1;
    const middle = maxIndex / 2;
    for (let i = 0; i < middle; i++) {
      const temp = this[i];
      this[i] = this[maxIndex - i];
      this[maxIndex - i] = temp;
    }
    return this;
  }
  shift() {
    if (this.lenght === 0) return;
    const firstNumber = this[0];
    for (let i = 0; i < this.lenght - 1; i++) {
      this[i] = this[i + 1];
    }
    delete this[--this.lenght];
    return firstNumber;
  }
  read() {
    let number = +prompt("Input number");
    this.push(number);
    return this.value += number;
  }
  forEach(callback) {
    for (let i = 0; i < this.lenght; i++) {
      callback(this[i], i, this);
    }
  }
  map(callback) {
    const newArray = new MyArray();
    for (let i = 0; i < this.lenght; i++) {
      newArray.push(callback(this[i], i, this));
    }
    return newArray;
  }
  some(callback) {
    for (let i = 0; i < this.lenght; i++) {
      if (callback(this[i], i, this))
        return true;
    }
    return false;
  }

  every(callback) {
    for (let i = 0; i < this.lenght; i++) {
      if (!callback(this[i], i, this)) {
        return false;
      }
    }
    return true;
  }
  filter(callback) {
    const newArray = new MyArray()
    for (let i = 0; i < this.lenght; i++) {
      if (callback(this[i], i, this)) {
        newArray.push(this[i]);
      }
    }
    return newArray;
  }
  flat(depth){
    const result = new MyArray();
    
    return result;
  }
  static isMyArray(arr) {
    return arr instanceof MyArray;
  }
}