//implement an algo to determine if a string has all unique characters. What if you cannot use additional data structure?

function isUnique(str) {
  let hash = {};

  for (let i = 0; i < str.length; i++) {
    if (hash[str[i]]) {
      hash[str[i]]++;
    } else {
      hash[str[i]] = 1;
    }
  }

  for (let o in hash) {
    if (hash[o] > 1) {
      return false;
    }
  }
  return true;
}

console.log(isUnique("hello"));
