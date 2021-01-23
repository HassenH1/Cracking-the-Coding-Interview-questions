//A magic index in an array A[0...n-1] is defined to be an index such that A[i] = i. Given a sorted array of distinct integers, write a method to find a magic index, if one exists, in array A
//FOLLOW UP
//What if the values are not distinct?

/**
 *
 *  [-1, 0, 1, 2, 4, 10]
 *
 *  magic index is 4 because i = 4 and a[4] = 4
 *
 *
 */

function magicIndex(ray) {
  for (let i = 0; i < ray.length; i++) {
    if (i === ray[i]) {
      return i;
    }
  }
  return null;
}
let array = [-1, 0, 1, 2, 4, 10];
console.log(magicIndex(array));
