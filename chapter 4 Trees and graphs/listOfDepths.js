//Given a binary tree, design an algo which creates a linked list of all the nodes at each depth (e.g., if you have a tree with depth D, you'll have D linked lists).

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  append(val) {
    if (this.root === null) {
      let node = new Node(val);
      this.root = node;
    }

    const insert = (node) => {
      let newNode = new Node(val);
      if (node.val > val) {
        if (node.left) {
          insert(node.left);
        } else {
          node.left = newNode;
        }
      } else if (node.val < val) {
        if (node.right) {
          insert(node.right);
        } else {
          node.right = newNode;
        }
      }
    };

    insert(this.root);
  }
  createLinkedList(node = this.root) {
    class LinkedNode {
      constructor(val) {
        this.val = val;
        this.next = null;
      }
    }

    class LinkedList {
      constructor() {
        this.head = this.tail = null;
      }
      insert(val) {
        let newNode = new LinkedNode(val);
        if (this.head === null) {
          this.head = newNode;
          this.tail = this.head;
        }
        this.tail.next = newNode;
        this.tail = this.tail.next;
      }
      trav() {
        let node = this.head;
        while (node !== null) {
          console.log(node.val, "<--------the val?");
          node = node.next;
        }
      }
    }
    let l = new LinkedList();

    if (node) {
      this.createLinkedList(node.left);
      l.insert(node.val);
      this.createLinkedList(node.right);
    }
    console.log(l, "<---the l?");
  }
}
let b = new BinarySearchTree();
let array = [8, 3, 10, 1, 6, 14, 4, 7, 13];
for (let i of array) {
  b.append(i);
}
// console.log(b);
b.createLinkedList();
