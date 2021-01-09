//write a method to replace all spaces in a string with "%20". You amy assume that the string has sufficient space at the end to hold the additional characters, and that you are given the "true" length of the string.

function urlify(str, len) {
  let newStr = str.trim().split("");

  for (let i = 0; i < newStr.length; i++) {
    if (newStr[i] === " ") {
      newStr[i] += "%20";
    }
  }
  return newStr.join("");
}

console.log(urlify("Mr John Smith           ", 13));
