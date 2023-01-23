function primeOrNot(n) {
    for(let i=2 ; i<n ; i++){
        if( n%i == 0){
            return "No";
        }else{
            return "Yes";
        }
    }
}

let n;
console.log(primeOrNot(14));
