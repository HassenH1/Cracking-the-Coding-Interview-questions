//Given two (singly) linked lists, determine if the two lists intersect. Return the intersecting node. Note that the intersecetion is defined based on reference, not value. That is, if the kth node of the first linked list is the exact same node (by reference) as the jth node of the second linked list, then they are intersecting.

var getIntersectionNode = function (headA, headB) {
  if (headA === null || headB === null) return null;

  let p1 = headA;
  let p2 = headB;

  while (p1 !== p2) {
    if (p1 === null) {
      p1 = headB;
    } else {
      p1 = p1.next;
    }
    if (p2 === null) {
      p2 = headA;
    } else {
      p2 = p2.next;
    }
  }
  return p1;
};
