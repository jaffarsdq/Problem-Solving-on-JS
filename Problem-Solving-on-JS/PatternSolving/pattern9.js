function pattern(n) {
    for(let i=1 ; i<=n+1 ; i++){
        let str = "";
        //NumbersUP
        let count = n;
        for(let j=1 ; j<=i ; j++){
            str += count;
            count--;
        }
        console.log(str);
    }
    //NumbersDown
    for(let i=1 ; i<=n ; i++){
        //NumbersDOWN
        let str = "";
        count = n;
        for(let j=1 ; j<=n-i+1 ; j++){
            str += count;
            count--;
        }
        console.log(str);
    }
}

pattern(5);