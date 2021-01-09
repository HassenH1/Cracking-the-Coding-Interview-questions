//Give a string, write a function to check if it is a permutation of a palindrome. a palindrome is a word or phrase that is the same forwards and backwards. A permutation is a rearrangement of letters. The palindrome does not need to be limited to just dictionary words

function paliPermutation(str) {
  let oneCounter = 0;
  let hash = {};

  for (let i = 0; i < str.length; i++) {
    if (str[i] === " ") continue;
    if (!hash[str[i].toLowerCase()]) {
      hash[str[i].toLowerCase()] = 1;
    } else {
      hash[str[i].toLowerCase()]++;
    }
  }

  for (let i in hash) {
    if (hash[i] === 1) {
      oneCounter++;
    }
  }
  return oneCounter > 1 ? false : true;
}

console.log(paliPermutation("never odd or even"));
console.log(paliPermutation("Tact oa"));
console.log(paliPermutation("carerac"));
console.log(paliPermutation("aab"));
console.log(paliPermutation("tactcoapapa"));

/*
       i
never odd or even
{
  n: 2
  e: 4
  v: 2
  r: 2
  o: 2
  d: 2
}




*/
