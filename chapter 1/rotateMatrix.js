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

//easier to understand 
function rotate(mat){
	for(let i = 0; i < mat.length; i++){
		for(let j = i; j < mat.length; j++){
			swap(mat, i, j, "diagonal")
		}
	}

	for(let i = 0; i < mat.length; i++){
		for(let j = 0; j < mat.length/2; j++){
			swap(mat, i, j)
		}
	}
	return mat;
}

function swap(mat, i, j, type = ""){
	let len = mat.length
		if(type === "diagonal"){
			let temp = mat[i][j]
				mat[i][j] = mat[j][i]
				mat[j][i] = temp
		} else {
			let temp = mat[i][j] 
				mat[i][j] = mat[i][len - 1 - j] 
				mat[i][len - 1 - j] = temp 
		}
}


let matrix = [
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9],
];

//console.log(rotateMatrix(matrix));
console.log(rotate(matrix)); //easier to implement and understand
