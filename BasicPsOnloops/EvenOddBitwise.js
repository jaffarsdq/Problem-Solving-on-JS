function bitwise(n){
    var x = n&1;
    if(x == 0){
        return "Even"
    }else{
        return "Odd"
    }
}
let n;
console.log(bitwise(5));