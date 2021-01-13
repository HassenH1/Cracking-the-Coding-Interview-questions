//describe how you could use a single array to implement three stacks

class Stack {
  constructor() {
    this.data = [];
  }
  display() {
    return this.data;
  }
  push(val) {
    this.data.push(val);
  }
  pop() {
    this.data = this.data.slice(0, this.data.length - 1);
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

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let s1 = new Stack();
let s2 = new Stack();
let s3 = new Stack();
for (let i = 0; i < Math.floor(array.length / 3); i++) {
  s1.push(array[i]);
}
array = array.slice(Math.floor(array.length / 3), array.length);
console.log(array.length, "m---new array?");
for (let i = 0; i < Math.floor(array.length / 3); i++) {
  console.log("htting?");
  s2.push(array[i]);
}
// array = array.slice(Math.floor(array.length / 3), array.length);
// console.log(array, "m---new array?");
// for (let i = 0; i < array.length; i++) {
//   s3.push(array[i]);
// }
// console.log(s1.display());
// console.log(s2.display());
// console.log(s3.display());
