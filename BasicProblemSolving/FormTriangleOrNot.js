function isTriangle(a,b,c){
    if( a+b > c && b+c >a && c+a >b){
                return "Can Form Triangle";
            }else{
                return "Cannot Form a Triangle";
            }
};

let a = 7,b = 10,c = 3;
isTriangle(a,b,c);
console.log(isTriangle(a,b,c));