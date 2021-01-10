//you have two numbers represented by a linked list, where each node contains a single digit. the digits are sorted in reverse order, such that the 1's digit is at the head of the list. Write a function that adds the two numbers and returns the sum as a linked list
//Example
//input: (7 - 1 - 6) + (5 - 9 - 2) that is 617 + 295
//output: 2 - 1 - 9 that is 912
//Example
//input: (6 - 1 - 7) + (2 - 9 - 5) that is 617 + 295
//output: 9 - 1 - 2 that is 912

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
class Linkedlist {
  constructor() {
    this.head = this.tail = null;
  }
  append(val) {
    let n = new Node(val);
    if (this.head === null) {
      this.head = n;
      this.tail = n;
    }
    this.tail.next = n;
    this.tail = n;
  }
  trav() {
    let res = [];
    let node = this.head;
    while (node !== null) {
      res.push(node.val);
      node = node.next;
    }
    return res;
  }
}

let array1 = [7, 1, 6];
let array2 = [5, 9, 2];
let l1 = new Linkedlist();
let l2 = new Linkedlist();
for (let i of array1) l1.append(i);
for (let i of array2) l2.append(i);

function sumList(l1, l2) {
  let l3 = new Linkedlist();
  let dummy = new Node(0);
  l3.append(dummy);
  let p1 = l1.head;
  let p2 = l2.head;

  let carry = 0;
  while (p1 !== null || p2 !== null) {
    let p1_val = p1 !== null ? p1.val : 0;
    let p2_val = p2 !== null ? p2.val : 0;

    let currentSum = p1_val + p2_val + carry;
    carry = currentSum / 10;
    let lastDigit = currentSum % 10;

    let newNode = new Node(lastDigit);
    l3.next = newNode;

    if (p1 !== null) p1 = p1.next;
    if (p2 !== null) p2 = p2.next;
    l3 = l3.next;
  }
  if (carry > 0) {
  }
  return l3.head;
}
console.log(sumList(l1, l2));
