/* Input: matrix = [[1,2,3,4],
                    [5,6,7,8],
                    [9,10,11,12]]
*  Output: [1,2,3,4,8,12,11,10,9,5,6,7]
*/
let  matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]];

function spiral(matrix) {
    let m = matrix.length , n = matrix[0].length;
    let s_r = 0;
    let e_r = matrix.length-1;
    let s_c = 0;
    let e_c = matrix[0].length-1;
    let count = 0;
    let result = [];
    while(count < m*n){       
     // cancel 1st row
        for(let i = s_c; i <= e_c; i++) {
            result.push(matrix[s_r][i]);
            count++;
        }
        s_r++;
        if(count == n*m) break;
        // cancel last col
        for(let i = s_r; i <= e_r; i++) {
            result.push(matrix[i][e_c]);
            count++;
        }
        e_c--; 
        if(count == n*m) break;
        //cancel last row
        for(let i = e_c; i >= s_c; i--) {
            result.push(matrix[e_r][i])
            count++;
        }
        e_r--;
        if(count == n*m) break;
        //cancel 1st col
        for(let i = e_r; i >= s_r; i--) {
            result.push(matrix[i][s_c]);
            count++;
        }
        s_c++;
        if(count == n*m) break;

    }       
    return result;
    // console.log(result);
}
spiral(matrix);