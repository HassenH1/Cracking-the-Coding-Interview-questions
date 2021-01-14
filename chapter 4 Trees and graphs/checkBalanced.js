//implement a function to check if a binary tree is balanced. For the purposes of this question a balanaced tree is defined to be a tree such that the heights of the two subtrees of any node never differ by more than one

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
      this.root = new Node(val);
    }

    const insert = (node) => {
      let newNode = Node(val);
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
}
let array = [8, 3, 10, 1, 6, 14, 4, 7, 13];
let b = new BinarySearchTree();
for (let i of array) {
  b.append(i);
}
console.log(b);
