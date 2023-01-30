// Using temp variable
function swap(x,y){
    let temp = x;
    x = y;
    y = temp;
    console.log(x,y);
}

let x,y;
swap(2,24);


//without any third variable 
function swapTwoNum(x,y){
    x = x+y;
    y = x-y;
    x = x-y;
    console.log(x,y);
}
let a,b;
swapTwoNum(24,2);