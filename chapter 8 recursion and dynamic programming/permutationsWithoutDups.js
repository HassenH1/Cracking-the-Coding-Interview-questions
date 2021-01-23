//write a method to compute all permutations of a string of unique characters
/**
 *
 * [abcd, bcda, cdab, dabc, ]
 *
 */

function permutationsWithoutDups(str) {
  let ans = [];
  function recursive(curr, remaining) {
    if (remaining.length === 0) {
      ans.push(curr);
    } else {
      for (let i = 0; i < remaining.length; i++) {
        recursive(
          curr + remaining.charAt(i),
          remaining.slice(0, i) + remaining.slice(i + 1)
        );
      }
    }
  }
  recursive("", str);
  return ans;
}
let string = "abcd";
console.log(permutationsWithoutDups(string));
