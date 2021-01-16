//write an algo to find the "next" node (i.e., in-order succession) of a given node in a binary search tree. You may assume that each node has a link to its parent.

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor(val) {
    this.root = new Node(val);
  }
  append(val) {
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
  search(findNode) {
    let node = this.root;
    let q = [];
    q.push(node);

    while (q.length) {
      let curr = q.shift();

      if (curr.val === findNode) {
        return curr;
      }

      if (curr.left) {
        q.push(curr.left);
      }
      if (curr.right) {
        q.push(curr.right);
      }
    }
    return null;
  }
  inOrderSuccessor(p) {
    if (p.right !== null) {
      // return findMin(p.right);
      let node = p.right;
      while (node.left !== null) {
        node = node.left;
      }
      return node;
    }
    console.log("hitting here?");
    let left;
    const trav = (node) => {
      console.log("inside trav function?");
      if (node.val > p.val) {
        if (node.left) {
          left = node;
          trav(node.left);
        }
      } else if (node.val < p.val) {
        if (node.right) {
          trav(node.right);
        }
      }
    };
    trav(this.root);
    return left === undefined ? null : left.val;
    // return left.val;
  }
}
//2 1 3 -> p=1 output 2
//5 3 6 2 4 1 p=6 output null
let b = new BinarySearchTree(2);
let p = 1;
b.append(1);
b.append(3);
// b.append(5);
// b.append(3);
// b.append(6);
// b.append(2);
// b.append(4);
// b.append(1);
// const node = b.search(6);
const node = b.search(1);
console.log(b.inOrderSuccessor(node), "<--");
// console.log(b);
