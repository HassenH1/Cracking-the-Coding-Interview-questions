let matrix = [
  [1, 0, 3],
  [4, 5, 6],
  [0, 8, 9],
];

console.log(rotate(matrix))

function rotate(mat){
  let hash = {}
  for(let i = 0; i < mat.length; i++){
    for(let j = 0; j < mat.length; j++){
      if(mat[i][j] === 0 && !hash[`${i}-${j}`]){
        hash[`${i}-${j}`] = true
        insertZero(mat, i, j, hash)
      }
    }
  }
  
  return mat
}

function insertZero(mat, i, j, hash){
  for(let k = 0; k < mat[i].length; k++){
    mat[i][k] = 0
    hash[`${i}-${k}`] = true
  }

  for(let l = 0; l < mat.length; l++){
    mat[l][j] = 0
    hash[`${l}-${j}`] = true
  }
}
