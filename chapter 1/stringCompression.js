//implement a method to perform basic string compression using the counts of repeated characters. For example, the string aabcccccaaa would become a2b1c5a3. if the "compressed" string would not become smaller than the original string, your method should return the original string. you can assume the string has only uppercase and lowercase letters

function stringCompression(str) {
  let i = 0;
  let j = 0;
  let counter = 0;
  let newStr = "";

  while (i < str.length) {
    if (str[i] === str[j]) {
      j++;
      counter++;
    } else {
      newStr += `${str[i]}${counter}`;
      counter = 0;
      i = j;
    }
  }
  return newStr;
}

console.log(stringCompression("aabcccccaaa"));

/*
newStr = ""
counter = 1
if(str[i] === str[j]){
  j++
  count++
} else {
  newStr += `${str[i]}${counter}`
  counter = 0
  i = j
}

  i
aabcccccaaa
  j
 


*/
