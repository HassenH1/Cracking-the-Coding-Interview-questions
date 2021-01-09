//assume you have a method isSubstring which checks if one word is a substring of another. Given two strings, s1 and s2, write code to check if s2 is a rotation of s1 using only one calll to isSubstring

function isSubstring(A, B) {
  if (A.length !== B.length) return false;
  if ((A.length || B.length) === 0) return true;

  for (var i = 0; i < A.length; i++) {
    const reversed = A.slice(i).concat(A.slice(0, i));

    if (reversed === B) return true;
  }

  return false;
}

console.log(isSubstring("waterbottle", "erbottlewat"));
