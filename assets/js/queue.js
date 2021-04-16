class Queue {
  constructor(...args) {
    this._head = 0;
    this._tail = 0;
    this.push(...args);
  }

  get size() {
    return this._tail - this._head;
  }
  push(...args) {
    for (let i = 0; i < args.length; i++) {
      this[this._tail] = args[i];
      this._tail++;
    }
    return this.size;
  }
  pop() {
    if (this.size) {
      const lastItem = this[this._head];
      delete this[this._head++];
      return lastItem;
    }
  }

}
const mergeQueues = (q1, q2) => {
  const result = new Queue();
  while (q1.size || q2.size) {
    if (q1.size !== 0) {
      result.push(q1.pop());
    }
    if (q2.size !== 0) {
      result.push(q2.pop());
    }

  }
  return result;
}
const q1 = new Queue(1, 2, 3, 4, 5);
const q2 = new Queue(6, 7, 8);