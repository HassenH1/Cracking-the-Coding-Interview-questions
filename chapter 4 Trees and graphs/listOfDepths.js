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
      } else if (node.right < val) {
        if (node.right) {
          insert(node.right);
        } else {
          node.right = newNode;
        }
      }
    };

    insert(this.root);
  }
}
