//write an algo to find the "next" node (i.e., in-order succession) of a given node in a binary search tree. You may assume that each node has a link to its parent.

/**
 *      6
 *     4
 *    2
 *
 *      6
 *     5
 *    1
 *  should return null
 *
 *      6
 *     5
 *    1
 * should return 6
 *
 *     5
 *    2 10
 * should return 10
 *
 *     5
 *   3   10
 *  should return 3
 *
 * traverse and find node first
 * check if it has a left and right
 */

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
  inOrderSuccessor() {
    console.log("hello world");
  }
}
//2 1 3
//5 3 6 2 4 1
let b = new BinarySearchTree(2);
b.append(1);
b.append(3);
console.log(b);
