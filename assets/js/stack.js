'use strict';

class Stack {
  constructor(maxSize = 10, ...args) {
    this._maxSize = maxSize;
    this._size = 0;
    this.push(...args);
  }
  get isEmpty() {
    return this._size === 0;
  }
  get size() {
    return this._size;
  }
  push(...args) {

    for (const item of args) {
      if (this.size >= this._maxSize) {
        throw new RangeError('Stack overflow');
      }
      this[`_${this.size}`] = item;
      this._size++;
    }

    return this.size;
  }
  pop() {
    if (this.size <= 0) {
      return;
    }
    const lastItem = this[`_${this._size-1}`];
    delete this[`_${this._size-1}`];
    this._size--;
    return lastItem;
  }
  pip() {
    return this[`_${this._size-1}`];
  }
}
const stack = new Stack(5, 1, 2, 3, 4);
const options = {
  braces: {
    '(': ')',
    '{': '}',
    '[': ']',
    '<': '>',
  },
  isStrict: false,
}

function checkSequence(str, options) {
  const stack = new Stack();
  const braces = options.braces;
  const closeBraces = Object.values(braces);
  for (const symbol of str) {
    if (braces[symbol]) {
      stack.push(symbol)
      continue
    }
    if (closeBraces.includes(symbol) && braces[stack.pop()] !== symbol) {
      return false;
    }
  }
  return stack.isEmpty;
}