function Minimum(a,b,c){
    if(a>c && b>c){
        return `${c} is Minimum`;
    }else if(a>b && c>b){
        return `${b} is Minimum`;
    }else {
        return `${a} is Minimum`;
    }
};
let a = 1,b = -5,c = -10;
Minimum(a,b,c);
console.log(Minimum(a,b,c));