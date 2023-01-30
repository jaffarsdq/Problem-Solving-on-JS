function Sum (n){  
    let result = 0;
    while(n>0){
        let digit = n%10;
        result += digit;
        n = Math.floor(n/10); 
    }
    return result;
}

console.log(Sum(123459));