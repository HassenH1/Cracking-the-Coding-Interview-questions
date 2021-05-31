//write an algo such that if an element in MxN matrix is 0, its entire row and column are set to 0

function zeroMatrix(mat) {
  let rowHash = {};
  let colHash = {};

  for (let i = 0; i < mat.length; i++) {
    for (let j = 0; j < mat[i].length; j++) {
      if (mat[i][j] === 0) {
        rowHash[i] = true;
        colHash[j] = true;
      }
    }
  }

  for (let i in rowHash) {
    if (rowHash[i]) {
      nullifyRow(mat, i);
    }
  }
  for (let j in colHash) {
    if (colHash[j]) {
      nullifyCol(mat, j);
    }
  }
  console.log(mat);
  return mat;
}

function nullifyRow(mat, row) {
  for (let i = 0; i < mat[0].length; i++) {
    mat[row][i] = 0;
  }
}

function nullifyCol(mat, col) {
  for (let i = 0; i < mat.length; i++) {
    mat[i][col] = 0;
  }
}

let matrix = [
  [1, 0, 3],
  [4, 5, 6],
  [0, 8, 9],
];
console.log(zeroMatrix(matrix));
