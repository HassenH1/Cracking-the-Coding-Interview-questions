//write a program to sort a stack such that the smallest items are on the top. You can use an additional tmeprary stack, but you may not copy the elements into any other data structure (such as an array). The stack supports the following operation: push, pop, peek and isEmpty.

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
  isEmpty() {
    if (this.data.length > 0) {
      return false;
    }
    return true;
  }
  peek() {
    return this.data[this.data.length - 1];
  }
}
