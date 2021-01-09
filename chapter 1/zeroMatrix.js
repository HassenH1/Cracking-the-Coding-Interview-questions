//write an algo such that if an element in MxN matrix is 0, its entire row and column are set to 0

function zeroMatrix(mat) {
  for (let i = 0; i < mat.length; i++) {
    for (let j = 0; j < mat[i].length; j++) {
      if (mat[i][j] === 0) {
        dfs(mat, i, j);
      }
    }
  }
  return mat;
}

function dfs(mat, row, col) {
  //bound check here
  //
  //bound check here

  mat[row][col] = 0;

  let q = [];

  q.push([row, col]);

  while (q.length) {
    let curr = q.shift();
    let currRow = curr[0];
    let currCol = curr[1];

    if (mat[currRow - 1][currCol]) {
      q.push([currRow - 1, currCol]);
    }
    if (mat[currRow + 1][currCol]) {
      q.push([currRow + 1, currCol]);
    }
    if (mat[currRow][currCol - 1]) {
      q.push([currRow, currCol - 1]);
    }
    if (mat[currRow][currCol + 1]) {
      q.push([currRow, currCol + 1]);
    }
  }
}

let matrix = [
  [1, 0, 3],
  [4, 5, 6],
  [7, 8, 9],
];
zeroMatrix(matrix);
