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
}

function removeDup(ray) {
  let l = new Linkedlist();
  for (let i = 0; i < ray.length; i++) {
    l.append(array[i]);
  }
}
let array = [12, 11, 12, 21, 41, 43, 21];
console.log(removeDup(array)); //12->11->21->41->43
