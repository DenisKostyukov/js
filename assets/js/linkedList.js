class LinkedListIterator {
  constructor(list) {
    this.list = list;
    this.currentNode = null;
  }
  next() {
    this.currentNode = this.currentNode ? this.currentNode.next : this.list.head;
    return {
      value:this.currentNode ?this.currentNode.value : undefined,
      done: !this.currentNode,
    }
  }
  
}

class LinkedList {
  constructor(...args) {
    this.head = null;
    this.tail = null;
    this.lenght = 0;
    this.push(...args);
  }
  push(...args) {
      for (const item of args) {
        const newNode = new LinkedListNode(item);
        if (!this.head) {
          this.head = newNode;
          this.tail = newNode;
        } else {
          this.tail.next = newNode;
          newNode.prev = this.tail;
          this.tail = newNode;
        }
        this.lenght++;
      }
    }
    [Symbol.iterator]() {
      return new LinkedListIterator(this);
    }
}

class LinkedListNode {
  constructor(v) {
    this.value = v;
    this.prev = null;
    this.next = null;
  }
  set value(newValue) {
    this._value = newValue;
  }
  set prev(newValue) {
    if (!newValue instanceof LinkedListNode) {
      throw new TypeError();
    }
    this._prev = newValue;
  }
  set next(newValue) {
    if (!newValue instanceof LinkedListNode) {
      throw new TypeError();
    }
    this._next = newValue;
  }
  get value() {
    return this._value;
  }
  get prev() {
    return this._prev;
  }
  get next() {
    return this._next;
  }
}