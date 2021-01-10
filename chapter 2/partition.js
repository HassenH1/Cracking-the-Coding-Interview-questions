//write code to partition a linked list around a value x, such as that all nodes less than x comes before all nodes greater than or equal to x. If x is contained within the list, the values of x only need to be after the elements less than x(see below). The partition element x can appear anywhere in the "right patition"; it does not need to appear between the left and right paritions
//Example
//input: 3 - 5 - 8 - 5 - 10 - 2 - 1 (partition = 5)
//output: 3 - 1 - 2 - 10 - 5 - 5 - 8

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
    let res = [];
    while (node !== null) {
      res.push(node.val);
      node = node.next;
    }
    return res;
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
  value() {
    return this.head;
  }
}
let l = new Linkedlist();
let array = [1, 4, 3, 2, 5, 2];
for (let i = 0; i < array.length; i++) {
  l.append(array[i]);
}

function partition(x) {
  let head = l.value();
  let p = head;
  //less
  let l1 = (p1 = new Linkedlist());
  l1.append(0);
  //more
  let l2 = (p2 = new Linkedlist());
  l2.append(0);

  while (p !== null) {
    if (p.val >= x) {
      p2.next = p;
      p2 = p2.next;
    } else {
      p1.next = p;
      p1 = p1.next;
    }

    p = p.next;
  }

  p2.next = null;
  p1.next = l2.next;
  return l1.next;
}

console.log(partition(3));
