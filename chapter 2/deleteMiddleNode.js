//implememtn an algo to delete a node in the middle (i.e., any node but the first and last node, not necessarily the exact middle) of a singly linked list, given only acces to that node
//Example
//input: the node c from the linked list a->b->c->d->e->f
//result: nothing is returned but the new linked list looks like a->b->d->e->f

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
    let newNode = new Node(val);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    }
    this.tail.next = newNode;
    this.tail = newNode;
  }
  deleteMiddleNode(node) {
    //imagine node = c
    //currently: a->b->c->d->e->f
    node.val = node.next.val;
    node.next = node.next.next;
    //after it should look like this
    //a->b->d->e->f
  }
}
let l = new Linkedlist();
l.append("a");
l.append("b");
l.append("c");
l.append("d");
l.append("e");
l.append("f");
l.deleteMiddleNode();
console.log(l.trav()); //a->b->d->e->f
