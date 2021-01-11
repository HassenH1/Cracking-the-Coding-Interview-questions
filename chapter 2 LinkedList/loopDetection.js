//Given a circular linked list, implement an algo that returns the node at the beginning of the loop
//DEFINITION
//Circular linked list: A (corrupt) linked list in which a node's next pointer points to an earlier node, sp as to make a loop in the linked list
//Example
//input a - b - c - d - e - c [the same c as eariler]
//output : c

var hasCycle = function (head) {
  if (head === null) {
    return false;
  }

  let slow = head;
  let fast = head.next;

  while (slow !== fast) {
    if (fast == null || fast.next === null) return false;

    slow = slow.next;
    fast = fast.next.next;
  }
  return true;
};
