//Given a circular linked list, implement an algo that returns the node at the beginning of the loop
//DEFINITION
//Circular linked list: A (corrupt) linked list in which a node's next pointer points to an earlier node, sp as to make a loop in the linked list
//Example
//input a - b - c - d - e - c [the same c as eariler]
//output : c

class Node {
  constructor(val) {
    this.next = null;
    this.prev = null;
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
      this.head = this.tail = node;
    }
    this.tail.next = node;
    this.tail = node;
  }
}
