//implement an algo to find the kth to last element of a singly linked list

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
    let newNode = new Node(val);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    }
    this.tail.next = newNode;
    this.tail = newNode;
  }
  trav() {
    let node = this.head;
    let result = [];
    while (node !== null) {
      result.push(node.val);
      node = node.next;
    }
    return result;
  }
  kthtoLast(k) {
    //find the kth from last element
    let p1 = this.head;
    let p1Counter = 1;
    let p2 = p1.next;
    let p2Counter = 2;

    while (p2) {
      if (p2 - p1 !== k) {
        // 3 - 1 = 2
        p2Counter++; // 2
        p2 = p2.next; // next node
      }
      p2 = p2.next;
      p1 = p1.next;
    }
    return p1;
  }
}
//             p1          p2
let array = [12, 11, 12, 21, 41, 43, 21];
let l = new Linkedlist();
for (let i = 0; i < array.length; i++) {
  l.append(array[i]);
}
console.log(l.kthtoLast(2));
