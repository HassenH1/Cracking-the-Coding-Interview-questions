//implement a MyQueue class which implements a queue using two stack

class Stack {
  constructor() {
    this.data = [];
  }
  push(val) {
    this.data.push(val);
  }
  pop() {
    return this.data.pop();
  }
  peek() {
    return this.data[this.data.length - 1];
  }
  isEmpty() {
    if (this.data.length > 0) {
      return false;
    }
    return true;
  }
}

class MyQueue {
  constructor() {
    this.stack1 = new Stack();
    this.stack2 = new Stack();
  }
  enqueue(val) {
    this.stack1.push(val);
  }
  dequeue() {
    if (this.stack2.isEmpty()) {
      while (!this.stack1.isEmpty()) {
        let val = this.stack1.pop();
        this.stack2.push(val);
      }
    }
    return this.stack2.pop();
  }
}

let q = new MyQueue();
q.enqueue(2);
q.enqueue(5);
console.log(q.dequeue());
