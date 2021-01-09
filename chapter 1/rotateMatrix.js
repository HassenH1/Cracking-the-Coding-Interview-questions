//Given an image represented by an NxN matrix, where each pixel in the image is 4 bytes, write a method to rotate the image by 90 degrees. Can you do this in place?

function rotateMatrix(mat) {
  let len = mat.length;

  for (let layer = 0; layer < Math.floor(len / 2); layer++) {
    let first = layer;
    let last = len - 1 - layer;

    for (let i = first; i < last; i++) {
      let offset = i - first;

      let top = mat[first][i]; //save top

      //left -> top
      mat[first][i] = mat[last - offset][first];

      //bottom -> left
      mat[last - offset][first] = mat[last][last - offset];

      //right -> bottom
      mat[last][last - offset] = mat[i][last];

      //top -> right
      mat[i][last] = top; //<---saved top
    }
  }
  return mat;
}

let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(rotateMatrix(matrix));
