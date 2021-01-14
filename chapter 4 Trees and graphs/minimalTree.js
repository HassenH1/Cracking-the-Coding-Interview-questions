//Given a sorted (increasing order) array with unique integer elements, write an algo to create a binary search tree with minimal height

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
  createMinimalBST(array) {
    let middle;
    if (array.length === 0) {
      return null;
    } else if (array.length === 1) {
      middle = 0;
    } else {
      middle = Math.floor(array.length / 2);
    }

    this.append(array[middle]);

    let left = array.slice(0, middle);
    let right = array.slice(middle + 1, array.length);

    this.createMinimalBST(left);
    this.createMinimalBST(right);
  }
  // depthFirstSearch(node = this.root) {
  //   if (node) {
  //     console.log(node.val);
  //     this.depthFirstSearch(node.left);
  //     this.depthFirstSearch(node.right);
  //   }
  // }
  // breadthFirstSearch() {
  //   let node = this.root;
  //   let q = [];
  //   let res = [];
  //   q.push(node);

  //   while (q.length) {
  //     let curr = q.shift();
  //     res.push(curr.val);
  //     if (curr.left) {
  //       q.push(curr.left);
  //     }
  //     if (curr.right) {
  //       q.push(curr.right);
  //     }
  //   }
  //   return res;
  // }
}
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let bst = new BinarySearchTree();
bst.createMinimalBST(array);
console.log(bst, ",=--");
// bst.depthFirstSearch();
// console.log(bst.breadthFirstSearch());
