let a = [[1,1], [2,2], [3,3]];

function display (a) {
    let str = ""
    for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < a[i].length; j++) {
            str += a[i][j] + " ";
        }
    }
    console.log(str);
}

display(a);