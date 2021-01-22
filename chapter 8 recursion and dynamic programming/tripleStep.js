//a child is running up a staircase with n steps and can hop either 1 step, 2 steps or 3 steps at a time. Implement a method to count how many possible ways that child can run up the stairs

/**
 *                                3
 *
 *                          -1   -2   -3
 *
 *                     2          1          0
 *
 *            -1 -2 -3        -1 -2 -3         -1 -2 -3
 *
 *     1    0    -1         0    -1    -2          X
 *
 *
 *
 */

function staircase(num, memo = {}) {
  if (num in memo) return memo[num];
  if (num < 0) {
    return 0;
  } else if (num === 0) {
    return 1;
  } else {
    memo[num] =
      staircase(num - 1, memo) +
      staircase(num - 2, memo) +
      staircase(num - 3, memo);
    return memo[num];
  }
}

console.log(staircase(50));

//------------------------------>unoptimize
// function staircase(num) {
//   if (num < 0) {
//     return 0;
//   } else if (num === 0) {
//     return 1;
//   } else {
//     return staircase(num - 1) + staircase(num - 2) + staircase(num - 3);
//   }
// }

// console.log(staircase(100));
