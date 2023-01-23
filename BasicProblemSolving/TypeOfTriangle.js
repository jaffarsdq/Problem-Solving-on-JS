function Type(a,b,c){
    // using Ternary Operator
    return (a==b && b==c && c==a)?("equilateral"):(a!=b && b!=c && c!=a)?("scalene"):("isosceles");
}

let a = 7,b = 4,c = 5;
Type(a,b,c);
console.log(Type(a,b,c));