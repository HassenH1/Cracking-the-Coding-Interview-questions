//implement a function to check if a binary tree is a binary search tree

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor(val) {
    this.root = new Node(val);
  }
  insert(val) {
    let node = new Node(val);
    let q = [];
    q.push(this.root);

    while (q.length) {
      let curr = q.shift();

      if (curr.left) {
        q.push(curr.left);
      } else {
        curr.left = node;
        break;
      }
      if (curr.right) {
        q.push(curr.right);
      } else {
        curr.right = node;
        break;
      }
    }
  }
  bstAppend(val) {
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
  trav(node = this.root) {
    if (node) {
      this.trav(node.left);
      console.log(node.val);
      this.trav(node.right);
    }
  }
}

let array = [5, 14, 3, 1, 9];
let b = new BinaryTree(2);
for (let i of array) {
  b.insert(i);
}
// console.log(b);
b.trav();
