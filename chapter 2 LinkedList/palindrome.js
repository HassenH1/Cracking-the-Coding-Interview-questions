//implement a function to check if a linked list is a palindrome

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
class Linkedlist {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  append(val) {
    let node = new Node(val);
    if (this.head === null) {
      this.head = node;
      this.tail = node;
    }
    this.tail.next = node;
    this.tail = node;
  }
}
let l = new Linkedlist();
// let array = [1, 2, 2, 1];
let array = [1, 0, 1];
for (let i of array) {
  l.append(i);
}

function palindrome(head) {
  let stack = [];

  let node = head;
  let p1 = head;

  while (node) {
    stack.push(node.val);
    node = node.next;
  }

  while (stack.length) {
    if (p1.val !== stack.pop()) {
      return false;
    }
    // stack.pop();
    p1 = p1.next;
  }

  return true;
}
console.log(palindrome(l.head));
