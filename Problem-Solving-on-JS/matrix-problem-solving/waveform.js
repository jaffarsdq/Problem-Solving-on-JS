let grid = [ [0, 1, 2, 3] 
            , [4,5,6,7], 
              [8,9,10,11],
            [12,13,14,15]];

function wave (grid) {
    let m = grid.length;
    let n = grid[0].length; 
    let result = "";

    for(let j = 0; j < n; j++) {
        if(j % 2 == 0) {
            for(let i = 0; i < m; i++) {
                result  += grid[i][j] + " ";
            }
        }else {
            for(let i = n-1; i >= 0; i--) {
                result += grid[i][j] + " ";
            }
        }
    }
    return result;
}

;
console.log(wave(grid));