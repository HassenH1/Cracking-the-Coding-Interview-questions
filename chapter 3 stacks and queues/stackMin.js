//How would you design a stack which, in addition to push ad pop, has a function min which returns the minimum element? push, pop and min should all operate in 0(1) time.

class Stack {
  constructor() {
    this.data = [];
    this.min = 100000000;
    this.minHistory = [];
  }
  push(val) {
    if (this.min > val) {
      this.min = val;
      this.minHistory.push(val);
    }
    this.data.push(val);
  }
  pop() {
    if (
      this.data[this.data.length - 1] ===
      this.minHistory[this.minHistory.length - 1]
    ) {
      this.minHistory.pop();
      this.min = this.minHistory[this.minHistory.length - 1];
    }
    this.data.pop();
  }
  min() {
    return this.min;
  }
}
let s = new Stack();
s.push(10);
s.push(5);
s.push(2);
s.pop();
s.push(20);
s.push(1);
console.log(s);
