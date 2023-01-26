function Fibonacci(n) {
    if(n == 0){
        console.log(0);
        return;
    }
    //Fibonacci Starts with 0&1;
    if(n >= 1){
        console.log(0);
        console.log(1);
    }
    let lastdigit = 1;
    let secondlast = 0;
    for(let i=2 ; i<=n ; i++){
        let result = lastdigit + secondlast;
        console.log(result);
        secondlast = lastdigit;
        lastdigit = result;
    }
}

Fibonacci(10);
