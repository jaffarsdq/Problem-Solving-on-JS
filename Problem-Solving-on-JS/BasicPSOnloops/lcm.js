function gcd (a,b){
    for(let i = 1 ; i<=Math.min(a,b) ; i++){
        if(a%i == 0 && b%i == 0){
            var GCDvalue = i;
        }
    }
    return GCDvalue;
}

function lcm(a,b) {
    let G = gcd(a,b);
    return a*b/G;
}

console.log(lcm(24,36));
