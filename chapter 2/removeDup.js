//write code to remove duplicates from an unsorted linked list
//Follow up
//how would you solve this problem if a temporary buffer is not allowed?

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
  trav() {
    let node = this.head;
    let result = [];
    while (node !== null) {
      result.push(node.val);
      node = node.next;
    }
    return result;
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
  /////////////////////////
  removeDup() {
    let hash = {};

    let p1 = this.head;
    let p2 = p1.next;
    hash[p1.val] = true;

    while (p2) {
      let val = p2.val;
      if (hash[val]) {
        p1.next = p2.next;
      } else {
        hash[val] = true;
        p1 = p2;
      }
      p2 = p2.next;
    }
  }
  /////////////////////////
}
// {12: true, 11: true, }
//               prev n
let array = [12, 11, 12, 21, 41, 43, 21];
let l = new Linkedlist();
for (let i = 0; i < array.length; i++) {
  l.append(array[i]);
}
l.removeDup();
console.log(l.trav()); //12->11->21->41->43
