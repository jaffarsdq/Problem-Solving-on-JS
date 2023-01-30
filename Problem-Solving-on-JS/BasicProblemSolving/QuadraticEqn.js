function eqn(a,b,c) {
    var Sqrt = Math.sqrt(b*b-4*a*c);
    // ax^2 + bx + c
    let root1 = (-b+Sqrt)/(2*a);
    let root2 = (-b-Sqrt)/(2*a);
    console.log(root1, root2);
}

let a,b,c;
eqn(2,5,3);

