//Imagine a robot sitting on the upper left corner of grid with r row and c columns. The robot can only move in two directions, right amd down, but certain cells are "off limits" such that the robot cannot step on them. Design an algo to find a path for the robot from the top left to the bottom right

/***
 * o = robot
 * x = end
 * [
 *  [o,.,.]
 *  [.,.,.]
 *  [.,.,X]
 * ]
 *                                              r = 3,c = 3
 *                                      r = 2,c = 3     r = 3,c = 2
 *
 *
 */
//optimized solution
function robotInGrid(r, c, memo = {}) {
  let key = `${r},${c}`;
  if (key in memo) return memo[key];
  if (r === 1 && c === 1) return 1;
  if (r === 0 || c === 0) return 0;

  memo[key] = robotInGrid(r - 1, c, memo) + robotInGrid(r, c - 1, memo);
  return memo[key];
}

console.log(robotInGrid(3, 3));
console.log(robotInGrid(18, 18));

//unoptimized solution
function robotInGrid(r, c) {
  if (r === 1 && c === 1) return 1;
  if (r === 0 || c === 0) return 0;

  return robotInGrid(r - 1, c) + robotInGrid(r, c - 1);
}
