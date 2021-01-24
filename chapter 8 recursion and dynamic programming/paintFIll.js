//Implement the "paint fill" function that one might see on many image eiditing programs. That is, given a screen (represented by a two-dimensopma; array of colors), a point, and a new color, fill in the surrounding area until the color changes from the original color

function paintFill(screen, point, color) {}
var b = "#000000";
var w = "#ffffff";
var g = "#00ff00";

var testScreen = [
  [b, b, b, b],
  [b, w, w, b],
  [b, w, w, b],
  [b, b, b, b],
];

var testPoint = [1, 1];

console.log(paintFill(testScreen, testPoint, g));
