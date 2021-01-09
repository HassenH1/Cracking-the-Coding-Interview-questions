//there are three types of edits taht can be performed on strings. Insert a character, remove a character, or replace a character. Given two strings, write a function to check if they are one eidt (or zero edits) away.

function oneAway(str1, str2) {
  let hash = {};
  let editCounter = 0;

  for (let i = 0; i < str1.length; i++) {
    if (!hash[str1[i]]) {
      hash[str1[i]] = 1;
    } else {
      hash[str1[i]]++;
    }
  }

  for (let i = 0; i < str2.length; i++) {
    if (hash[str2[i]]) {
      hash[str2[i]]--;
    }
  }

  for (let i in hash) {
    if (hash[i] > 0) {
      editCounter++;
    }
  }

  return editCounter === 1 || editCounter === 0 ? true : false;
}

console.log(oneAway("pale", "pale")); //true
console.log(oneAway("pale", "ple")); //true
console.log(oneAway("pales", "pale")); //true
console.log(oneAway("pale", "bale")); //true
console.log(oneAway("pales", "bake")); //false
