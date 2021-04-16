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
  duplicate(){
    const queue = new Queue();
    for(let i = this._head; i <this._tail;i++){
      queue.push(this[i]);
    }
    return queue;
  }
}
const mergeQueues = (q1, q2) => {
  const result = new Queue();
  temp1=q1.duplicate();
  temp2=q2.duplicate();
  while (temp1.size || temp2.size) {
    if (temp1.size !== 0) {
      result.push(temp1.pop());
    }
    if (temp2.size !== 0) {
      result.push(temp2.pop());
    }

  }
  return result;
}
const q1 = new Queue(1, 2, 3, 4, 5);
const q2 = new Queue(6, 7, 8);