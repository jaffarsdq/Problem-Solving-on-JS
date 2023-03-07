
let matrix = [[1,2,3],[4,5,6],[7,8,9]];

function transpose(matrix) {
    let m = matrix.length, n = matrix[0].length;
          
    let result = Array(n);
    for(let i = 0; i < n; i++) {
        result[i] = Array(m).fill(0);
    }
          
    for(let i = 0; i < n; i++) {
        for(let j = 0; j < m; j++){
            result[i][j] = matrix[j][i];
        }
    }
    //return result;
    console.log(result);
}
          
transpose(matrix);