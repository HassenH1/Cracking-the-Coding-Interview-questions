//Given two string, write a method to decide if one is permutation of the other

function checkPermutation(str1, str2) {
  let hashStr1 = {};

  for (let i = 0; i < str1.length; i++) {
    if (!hashStr1[str1[i]]) {
      hashStr1[str1[i]] = 1;
    } else {
      hashStr1[str1[i]]++;
    }
  }

  for (let i = 0; i < str2.length; i++) {
    if (hashStr1[str2[i]]) {
      hashStr1[str2[i]]--;
    }
  }

  for (let i in hashStr1) {
    if (hashStr1[i] > 0) {
      return false;
    }
  }
  return true;
}

console.log(checkPermutation("test", "ttes"));
console.log(checkPermutation("geeksforgeeks", "forgeeksgeeks"));

//geeksforgeeks
//forgeeksgeeks
